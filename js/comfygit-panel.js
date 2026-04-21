import { app as Xt } from "../../scripts/app.js";
/**
* @vue/shared v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function ul(e) {
  const s = /* @__PURE__ */ Object.create(null);
  for (const o of e.split(",")) s[o] = 1;
  return (o) => o in s;
}
const yt = {}, _o = [], bs = () => {
}, Li = () => !1, Qn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), cl = (e) => e.startsWith("onUpdate:"), Et = Object.assign, dl = (e, s) => {
  const o = e.indexOf(s);
  o > -1 && e.splice(o, 1);
}, Pu = Object.prototype.hasOwnProperty, mt = (e, s) => Pu.call(e, s), Je = Array.isArray, ko = (e) => mn(e) === "[object Map]", Po = (e) => mn(e) === "[object Set]", Dl = (e) => mn(e) === "[object Date]", Ze = (e) => typeof e == "function", $t = (e) => typeof e == "string", ms = (e) => typeof e == "symbol", gt = (e) => e !== null && typeof e == "object", Di = (e) => (gt(e) || Ze(e)) && Ze(e.then) && Ze(e.catch), Oi = Object.prototype.toString, mn = (e) => Oi.call(e), Ru = (e) => mn(e).slice(8, -1), Ui = (e) => mn(e) === "[object Object]", ml = (e) => $t(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, qo = /* @__PURE__ */ ul(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Xn = (e) => {
  const s = /* @__PURE__ */ Object.create(null);
  return ((o) => s[o] || (s[o] = e(o)));
}, Nu = /-\w/g, ls = Xn(
  (e) => e.replace(Nu, (s) => s.slice(1).toUpperCase())
), Lu = /\B([A-Z])/g, Xs = Xn(
  (e) => e.replace(Lu, "-$1").toLowerCase()
), Zn = Xn((e) => e.charAt(0).toUpperCase() + e.slice(1)), Ta = Xn(
  (e) => e ? `on${Zn(e)}` : ""
), qs = (e, s) => !Object.is(e, s), Mn = (e, ...s) => {
  for (let o = 0; o < e.length; o++)
    e[o](...s);
}, Ai = (e, s, o, a = !1) => {
  Object.defineProperty(e, s, {
    configurable: !0,
    enumerable: !1,
    writable: a,
    value: o
  });
}, ea = (e) => {
  const s = parseFloat(e);
  return isNaN(s) ? e : s;
}, Du = (e) => {
  const s = $t(e) ? Number(e) : NaN;
  return isNaN(s) ? e : s;
};
let Ol;
const ta = () => Ol || (Ol = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ft(e) {
  if (Je(e)) {
    const s = {};
    for (let o = 0; o < e.length; o++) {
      const a = e[o], l = $t(a) ? zu(a) : Ft(a);
      if (l)
        for (const r in l)
          s[r] = l[r];
    }
    return s;
  } else if ($t(e) || gt(e))
    return e;
}
const Ou = /;(?![^(]*\))/g, Uu = /:([^]+)/, Au = /\/\*[^]*?\*\//g;
function zu(e) {
  const s = {};
  return e.replace(Au, "").split(Ou).forEach((o) => {
    if (o) {
      const a = o.split(Uu);
      a.length > 1 && (s[a[0].trim()] = a[1].trim());
    }
  }), s;
}
function De(e) {
  let s = "";
  if ($t(e))
    s = e;
  else if (Je(e))
    for (let o = 0; o < e.length; o++) {
      const a = De(e[o]);
      a && (s += a + " ");
    }
  else if (gt(e))
    for (const o in e)
      e[o] && (s += o + " ");
  return s.trim();
}
const Vu = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Fu = /* @__PURE__ */ ul(Vu);
function zi(e) {
  return !!e || e === "";
}
function Bu(e, s) {
  if (e.length !== s.length) return !1;
  let o = !0;
  for (let a = 0; o && a < e.length; a++)
    o = uo(e[a], s[a]);
  return o;
}
function uo(e, s) {
  if (e === s) return !0;
  let o = Dl(e), a = Dl(s);
  if (o || a)
    return o && a ? e.getTime() === s.getTime() : !1;
  if (o = ms(e), a = ms(s), o || a)
    return e === s;
  if (o = Je(e), a = Je(s), o || a)
    return o && a ? Bu(e, s) : !1;
  if (o = gt(e), a = gt(s), o || a) {
    if (!o || !a)
      return !1;
    const l = Object.keys(e).length, r = Object.keys(s).length;
    if (l !== r)
      return !1;
    for (const u in e) {
      const c = e.hasOwnProperty(u), d = s.hasOwnProperty(u);
      if (c && !d || !c && d || !uo(e[u], s[u]))
        return !1;
    }
  }
  return String(e) === String(s);
}
function fl(e, s) {
  return e.findIndex((o) => uo(o, s));
}
const Vi = (e) => !!(e && e.__v_isRef === !0), m = (e) => $t(e) ? e : e == null ? "" : Je(e) || gt(e) && (e.toString === Oi || !Ze(e.toString)) ? Vi(e) ? m(e.value) : JSON.stringify(e, Fi, 2) : String(e), Fi = (e, s) => Vi(s) ? Fi(e, s.value) : ko(s) ? {
  [`Map(${s.size})`]: [...s.entries()].reduce(
    (o, [a, l], r) => (o[Ma(a, r) + " =>"] = l, o),
    {}
  )
} : Po(s) ? {
  [`Set(${s.size})`]: [...s.values()].map((o) => Ma(o))
} : ms(s) ? Ma(s) : gt(s) && !Je(s) && !Ui(s) ? String(s) : s, Ma = (e, s = "") => {
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
class Wu {
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
function Gu() {
  return Jt;
}
let wt;
const Pa = /* @__PURE__ */ new WeakSet();
class Bi {
  constructor(s) {
    this.fn = s, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Jt && Jt.active && Jt.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Pa.has(this) && (Pa.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Gi(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Ul(this), ji(this);
    const s = wt, o = ds;
    wt = this, ds = !0;
    try {
      return this.fn();
    } finally {
      Hi(this), wt = s, ds = o, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let s = this.deps; s; s = s.nextDep)
        gl(s);
      this.deps = this.depsTail = void 0, Ul(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Pa.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    ja(this) && this.run();
  }
  get dirty() {
    return ja(this);
  }
}
let Wi = 0, Ko, Jo;
function Gi(e, s = !1) {
  if (e.flags |= 8, s) {
    e.next = Jo, Jo = e;
    return;
  }
  e.next = Ko, Ko = e;
}
function vl() {
  Wi++;
}
function pl() {
  if (--Wi > 0)
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
        } catch (a) {
          e || (e = a);
        }
      s = o;
    }
  }
  if (e) throw e;
}
function ji(e) {
  for (let s = e.deps; s; s = s.nextDep)
    s.version = -1, s.prevActiveLink = s.dep.activeLink, s.dep.activeLink = s;
}
function Hi(e) {
  let s, o = e.depsTail, a = o;
  for (; a; ) {
    const l = a.prevDep;
    a.version === -1 ? (a === o && (o = l), gl(a), ju(a)) : s = a, a.dep.activeLink = a.prevActiveLink, a.prevActiveLink = void 0, a = l;
  }
  e.deps = s, e.depsTail = o;
}
function ja(e) {
  for (let s = e.deps; s; s = s.nextDep)
    if (s.dep.version !== s.version || s.dep.computed && (qi(s.dep.computed) || s.dep.version !== s.version))
      return !0;
  return !!e._dirty;
}
function qi(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === on) || (e.globalVersion = on, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !ja(e))))
    return;
  e.flags |= 2;
  const s = e.dep, o = wt, a = ds;
  wt = e, ds = !0;
  try {
    ji(e);
    const l = e.fn(e._value);
    (s.version === 0 || qs(l, e._value)) && (e.flags |= 128, e._value = l, s.version++);
  } catch (l) {
    throw s.version++, l;
  } finally {
    wt = o, ds = a, Hi(e), e.flags &= -3;
  }
}
function gl(e, s = !1) {
  const { dep: o, prevSub: a, nextSub: l } = e;
  if (a && (a.nextSub = l, e.prevSub = void 0), l && (l.prevSub = a, e.nextSub = void 0), o.subs === e && (o.subs = a, !a && o.computed)) {
    o.computed.flags &= -5;
    for (let r = o.computed.deps; r; r = r.nextDep)
      gl(r, !0);
  }
  !s && !--o.sc && o.map && o.map.delete(o.key);
}
function ju(e) {
  const { prevDep: s, nextDep: o } = e;
  s && (s.nextDep = o, e.prevDep = void 0), o && (o.prevDep = s, e.nextDep = void 0);
}
let ds = !0;
const Ki = [];
function Ds() {
  Ki.push(ds), ds = !1;
}
function Os() {
  const e = Ki.pop();
  ds = e === void 0 ? !0 : e;
}
function Ul(e) {
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
class Hu {
  constructor(s, o) {
    this.sub = s, this.dep = o, this.version = o.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class hl {
  // TODO isolatedDeclarations "__v_skip"
  constructor(s) {
    this.computed = s, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(s) {
    if (!wt || !ds || wt === this.computed)
      return;
    let o = this.activeLink;
    if (o === void 0 || o.sub !== wt)
      o = this.activeLink = new Hu(wt, this), wt.deps ? (o.prevDep = wt.depsTail, wt.depsTail.nextDep = o, wt.depsTail = o) : wt.deps = wt.depsTail = o, Ji(o);
    else if (o.version === -1 && (o.version = this.version, o.nextDep)) {
      const a = o.nextDep;
      a.prevDep = o.prevDep, o.prevDep && (o.prevDep.nextDep = a), o.prevDep = wt.depsTail, o.nextDep = void 0, wt.depsTail.nextDep = o, wt.depsTail = o, wt.deps === o && (wt.deps = a);
    }
    return o;
  }
  trigger(s) {
    this.version++, on++, this.notify(s);
  }
  notify(s) {
    vl();
    try {
      for (let o = this.subs; o; o = o.prevSub)
        o.sub.notify() && o.sub.dep.notify();
    } finally {
      pl();
    }
  }
}
function Ji(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const s = e.dep.computed;
    if (s && !e.dep.subs) {
      s.flags |= 20;
      for (let a = s.deps; a; a = a.nextDep)
        Ji(a);
    }
    const o = e.dep.subs;
    o !== e && (e.prevSub = o, o && (o.nextSub = e)), e.dep.subs = e;
  }
}
const Ha = /* @__PURE__ */ new WeakMap(), io = Symbol(
  ""
), qa = Symbol(
  ""
), nn = Symbol(
  ""
);
function Ut(e, s, o) {
  if (ds && wt) {
    let a = Ha.get(e);
    a || Ha.set(e, a = /* @__PURE__ */ new Map());
    let l = a.get(o);
    l || (a.set(o, l = new hl()), l.map = a, l.key = o), l.track();
  }
}
function Ps(e, s, o, a, l, r) {
  const u = Ha.get(e);
  if (!u) {
    on++;
    return;
  }
  const c = (d) => {
    d && d.trigger();
  };
  if (vl(), s === "clear")
    u.forEach(c);
  else {
    const d = Je(e), v = d && ml(o);
    if (d && o === "length") {
      const f = Number(a);
      u.forEach((p, w) => {
        (w === "length" || w === nn || !ms(w) && w >= f) && c(p);
      });
    } else
      switch ((o !== void 0 || u.has(void 0)) && c(u.get(o)), v && c(u.get(nn)), s) {
        case "add":
          d ? v && c(u.get("length")) : (c(u.get(io)), ko(e) && c(u.get(qa)));
          break;
        case "delete":
          d || (c(u.get(io)), ko(e) && c(u.get(qa)));
          break;
        case "set":
          ko(e) && c(u.get(io));
          break;
      }
  }
  pl();
}
function go(e) {
  const s = lt(e);
  return s === e ? s : (Ut(s, "iterate", nn), ns(e) ? s : s.map(fs));
}
function sa(e) {
  return Ut(e = lt(e), "iterate", nn), e;
}
function Ws(e, s) {
  return Us(e) ? ro(e) ? Eo(fs(s)) : Eo(s) : fs(s);
}
const qu = {
  __proto__: null,
  [Symbol.iterator]() {
    return Ra(this, Symbol.iterator, (e) => Ws(this, e));
  },
  concat(...e) {
    return go(this).concat(
      ...e.map((s) => Je(s) ? go(s) : s)
    );
  },
  entries() {
    return Ra(this, "entries", (e) => (e[1] = Ws(this, e[1]), e));
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
      (o) => o.map((a) => Ws(this, a)),
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
    return Na(this, "includes", e);
  },
  indexOf(...e) {
    return Na(this, "indexOf", e);
  },
  join(e) {
    return go(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Na(this, "lastIndexOf", e);
  },
  map(e, s) {
    return Is(this, "map", e, s, void 0, arguments);
  },
  pop() {
    return Oo(this, "pop");
  },
  push(...e) {
    return Oo(this, "push", e);
  },
  reduce(e, ...s) {
    return Al(this, "reduce", e, s);
  },
  reduceRight(e, ...s) {
    return Al(this, "reduceRight", e, s);
  },
  shift() {
    return Oo(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, s) {
    return Is(this, "some", e, s, void 0, arguments);
  },
  splice(...e) {
    return Oo(this, "splice", e);
  },
  toReversed() {
    return go(this).toReversed();
  },
  toSorted(e) {
    return go(this).toSorted(e);
  },
  toSpliced(...e) {
    return go(this).toSpliced(...e);
  },
  unshift(...e) {
    return Oo(this, "unshift", e);
  },
  values() {
    return Ra(this, "values", (e) => Ws(this, e));
  }
};
function Ra(e, s, o) {
  const a = sa(e), l = a[s]();
  return a !== e && !ns(e) && (l._next = l.next, l.next = () => {
    const r = l._next();
    return r.done || (r.value = o(r.value)), r;
  }), l;
}
const Ku = Array.prototype;
function Is(e, s, o, a, l, r) {
  const u = sa(e), c = u !== e && !ns(e), d = u[s];
  if (d !== Ku[s]) {
    const p = d.apply(e, r);
    return c ? fs(p) : p;
  }
  let v = o;
  u !== e && (c ? v = function(p, w) {
    return o.call(this, Ws(e, p), w, e);
  } : o.length > 2 && (v = function(p, w) {
    return o.call(this, p, w, e);
  }));
  const f = d.call(u, v, a);
  return c && l ? l(f) : f;
}
function Al(e, s, o, a) {
  const l = sa(e);
  let r = o;
  return l !== e && (ns(e) ? o.length > 3 && (r = function(u, c, d) {
    return o.call(this, u, c, d, e);
  }) : r = function(u, c, d) {
    return o.call(this, u, Ws(e, c), d, e);
  }), l[s](r, ...a);
}
function Na(e, s, o) {
  const a = lt(e);
  Ut(a, "iterate", nn);
  const l = a[s](...o);
  return (l === -1 || l === !1) && _l(o[0]) ? (o[0] = lt(o[0]), a[s](...o)) : l;
}
function Oo(e, s, o = []) {
  Ds(), vl();
  const a = lt(e)[s].apply(e, o);
  return pl(), Os(), a;
}
const Ju = /* @__PURE__ */ ul("__proto__,__v_isRef,__isVue"), Yi = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ms)
);
function Yu(e) {
  ms(e) || (e = String(e));
  const s = lt(this);
  return Ut(s, "has", e), s.hasOwnProperty(e);
}
class Qi {
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
      return a === (l ? r ? lc : tr : r ? er : Zi).get(s) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(s) === Object.getPrototypeOf(a) ? s : void 0;
    const u = Je(s);
    if (!l) {
      let d;
      if (u && (d = qu[o]))
        return d;
      if (o === "hasOwnProperty")
        return Yu;
    }
    const c = Reflect.get(
      s,
      o,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Bt(s) ? s : a
    );
    if ((ms(o) ? Yi.has(o) : Ju(o)) || (l || Ut(s, "get", o), r))
      return c;
    if (Bt(c)) {
      const d = u && ml(o) ? c : c.value;
      return l && gt(d) ? An(d) : d;
    }
    return gt(c) ? l ? An(c) : fo(c) : c;
  }
}
class Xi extends Qi {
  constructor(s = !1) {
    super(!1, s);
  }
  set(s, o, a, l) {
    let r = s[o];
    const u = Je(s) && ml(o);
    if (!this._isShallow) {
      const v = Us(r);
      if (!ns(a) && !Us(a) && (r = lt(r), a = lt(a)), !u && Bt(r) && !Bt(a))
        return v || (r.value = a), !0;
    }
    const c = u ? Number(o) < s.length : mt(s, o), d = Reflect.set(
      s,
      o,
      a,
      Bt(s) ? s : l
    );
    return s === lt(l) && (c ? qs(a, r) && Ps(s, "set", o, a) : Ps(s, "add", o, a)), d;
  }
  deleteProperty(s, o) {
    const a = mt(s, o);
    s[o];
    const l = Reflect.deleteProperty(s, o);
    return l && a && Ps(s, "delete", o, void 0), l;
  }
  has(s, o) {
    const a = Reflect.has(s, o);
    return (!ms(o) || !Yi.has(o)) && Ut(s, "has", o), a;
  }
  ownKeys(s) {
    return Ut(
      s,
      "iterate",
      Je(s) ? "length" : io
    ), Reflect.ownKeys(s);
  }
}
class Qu extends Qi {
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
const Xu = /* @__PURE__ */ new Xi(), Zu = /* @__PURE__ */ new Qu(), ec = /* @__PURE__ */ new Xi(!0);
const Ka = (e) => e, kn = (e) => Reflect.getPrototypeOf(e);
function tc(e, s, o) {
  return function(...a) {
    const l = this.__v_raw, r = lt(l), u = ko(r), c = e === "entries" || e === Symbol.iterator && u, d = e === "keys" && u, v = l[e](...a), f = o ? Ka : s ? Eo : fs;
    return !s && Ut(
      r,
      "iterate",
      d ? qa : io
    ), {
      // iterator protocol
      next() {
        const { value: p, done: w } = v.next();
        return w ? { value: p, done: w } : {
          value: c ? [f(p[0]), f(p[1])] : f(p),
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
function bn(e) {
  return function(...s) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function sc(e, s) {
  const o = {
    get(l) {
      const r = this.__v_raw, u = lt(r), c = lt(l);
      e || (qs(l, c) && Ut(u, "get", l), Ut(u, "get", c));
      const { has: d } = kn(u), v = s ? Ka : e ? Eo : fs;
      if (d.call(u, l))
        return v(r.get(l));
      if (d.call(u, c))
        return v(r.get(c));
      r !== u && r.get(l);
    },
    get size() {
      const l = this.__v_raw;
      return !e && Ut(lt(l), "iterate", io), l.size;
    },
    has(l) {
      const r = this.__v_raw, u = lt(r), c = lt(l);
      return e || (qs(l, c) && Ut(u, "has", l), Ut(u, "has", c)), l === c ? r.has(l) : r.has(l) || r.has(c);
    },
    forEach(l, r) {
      const u = this, c = u.__v_raw, d = lt(c), v = s ? Ka : e ? Eo : fs;
      return !e && Ut(d, "iterate", io), c.forEach((f, p) => l.call(r, v(f), v(p), u));
    }
  };
  return Et(
    o,
    e ? {
      add: bn("add"),
      set: bn("set"),
      delete: bn("delete"),
      clear: bn("clear")
    } : {
      add(l) {
        !s && !ns(l) && !Us(l) && (l = lt(l));
        const r = lt(this);
        return kn(r).has.call(r, l) || (r.add(l), Ps(r, "add", l, l)), this;
      },
      set(l, r) {
        !s && !ns(r) && !Us(r) && (r = lt(r));
        const u = lt(this), { has: c, get: d } = kn(u);
        let v = c.call(u, l);
        v || (l = lt(l), v = c.call(u, l));
        const f = d.call(u, l);
        return u.set(l, r), v ? qs(r, f) && Ps(u, "set", l, r) : Ps(u, "add", l, r), this;
      },
      delete(l) {
        const r = lt(this), { has: u, get: c } = kn(r);
        let d = u.call(r, l);
        d || (l = lt(l), d = u.call(r, l)), c && c.call(r, l);
        const v = r.delete(l);
        return d && Ps(r, "delete", l, void 0), v;
      },
      clear() {
        const l = lt(this), r = l.size !== 0, u = l.clear();
        return r && Ps(
          l,
          "clear",
          void 0,
          void 0
        ), u;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((l) => {
    o[l] = tc(l, e, s);
  }), o;
}
function yl(e, s) {
  const o = sc(e, s);
  return (a, l, r) => l === "__v_isReactive" ? !e : l === "__v_isReadonly" ? e : l === "__v_raw" ? a : Reflect.get(
    mt(o, l) && l in a ? o : a,
    l,
    r
  );
}
const oc = {
  get: /* @__PURE__ */ yl(!1, !1)
}, nc = {
  get: /* @__PURE__ */ yl(!1, !0)
}, ac = {
  get: /* @__PURE__ */ yl(!0, !1)
};
const Zi = /* @__PURE__ */ new WeakMap(), er = /* @__PURE__ */ new WeakMap(), tr = /* @__PURE__ */ new WeakMap(), lc = /* @__PURE__ */ new WeakMap();
function ic(e) {
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
function rc(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : ic(Ru(e));
}
function fo(e) {
  return Us(e) ? e : wl(
    e,
    !1,
    Xu,
    oc,
    Zi
  );
}
function uc(e) {
  return wl(
    e,
    !1,
    ec,
    nc,
    er
  );
}
function An(e) {
  return wl(
    e,
    !0,
    Zu,
    ac,
    tr
  );
}
function wl(e, s, o, a, l) {
  if (!gt(e) || e.__v_raw && !(s && e.__v_isReactive))
    return e;
  const r = rc(e);
  if (r === 0)
    return e;
  const u = l.get(e);
  if (u)
    return u;
  const c = new Proxy(
    e,
    r === 2 ? a : o
  );
  return l.set(e, c), c;
}
function ro(e) {
  return Us(e) ? ro(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Us(e) {
  return !!(e && e.__v_isReadonly);
}
function ns(e) {
  return !!(e && e.__v_isShallow);
}
function _l(e) {
  return e ? !!e.__v_raw : !1;
}
function lt(e) {
  const s = e && e.__v_raw;
  return s ? lt(s) : e;
}
function cc(e) {
  return !mt(e, "__v_skip") && Object.isExtensible(e) && Ai(e, "__v_skip", !0), e;
}
const fs = (e) => gt(e) ? fo(e) : e, Eo = (e) => gt(e) ? An(e) : e;
function Bt(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function b(e) {
  return dc(e, !1);
}
function dc(e, s) {
  return Bt(e) ? e : new mc(e, s);
}
class mc {
  constructor(s, o) {
    this.dep = new hl(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = o ? s : lt(s), this._value = o ? s : fs(s), this.__v_isShallow = o;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(s) {
    const o = this._rawValue, a = this.__v_isShallow || ns(s) || Us(s);
    s = a ? s : lt(s), qs(s, o) && (this._rawValue = s, this._value = a ? s : fs(s), this.dep.trigger());
  }
}
function Ye(e) {
  return Bt(e) ? e.value : e;
}
const fc = {
  get: (e, s, o) => s === "__v_raw" ? e : Ye(Reflect.get(e, s, o)),
  set: (e, s, o, a) => {
    const l = e[s];
    return Bt(l) && !Bt(o) ? (l.value = o, !0) : Reflect.set(e, s, o, a);
  }
};
function sr(e) {
  return ro(e) ? e : new Proxy(e, fc);
}
class vc {
  constructor(s, o, a) {
    this.fn = s, this.setter = o, this._value = void 0, this.dep = new hl(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = on - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !o, this.isSSR = a;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    wt !== this)
      return Gi(this, !0), !0;
  }
  get value() {
    const s = this.dep.track();
    return qi(this), s && (s.version = this.dep.version), this._value;
  }
  set value(s) {
    this.setter && this.setter(s);
  }
}
function pc(e, s, o = !1) {
  let a, l;
  return Ze(e) ? a = e : (a = e.get, l = e.set), new vc(a, l, o);
}
const $n = {}, zn = /* @__PURE__ */ new WeakMap();
let ao;
function gc(e, s = !1, o = ao) {
  if (o) {
    let a = zn.get(o);
    a || zn.set(o, a = []), a.push(e);
  }
}
function hc(e, s, o = yt) {
  const { immediate: a, deep: l, once: r, scheduler: u, augmentJob: c, call: d } = o, v = (E) => l ? E : ns(E) || l === !1 || l === 0 ? Rs(E, 1) : Rs(E);
  let f, p, w, y, k = !1, x = !1;
  if (Bt(e) ? (p = () => e.value, k = ns(e)) : ro(e) ? (p = () => v(e), k = !0) : Je(e) ? (x = !0, k = e.some((E) => ro(E) || ns(E)), p = () => e.map((E) => {
    if (Bt(E))
      return E.value;
    if (ro(E))
      return v(E);
    if (Ze(E))
      return d ? d(E, 2) : E();
  })) : Ze(e) ? s ? p = d ? () => d(e, 2) : e : p = () => {
    if (w) {
      Ds();
      try {
        w();
      } finally {
        Os();
      }
    }
    const E = ao;
    ao = f;
    try {
      return d ? d(e, 3, [y]) : e(y);
    } finally {
      ao = E;
    }
  } : p = bs, s && l) {
    const E = p, N = l === !0 ? 1 / 0 : l;
    p = () => Rs(E(), N);
  }
  const C = Gu(), S = () => {
    f.stop(), C && C.active && dl(C.effects, f);
  };
  if (r && s) {
    const E = s;
    s = (...N) => {
      E(...N), S();
    };
  }
  let U = x ? new Array(e.length).fill($n) : $n;
  const I = (E) => {
    if (!(!(f.flags & 1) || !f.dirty && !E))
      if (s) {
        const N = f.run();
        if (l || k || (x ? N.some((z, q) => qs(z, U[q])) : qs(N, U))) {
          w && w();
          const z = ao;
          ao = f;
          try {
            const q = [
              N,
              // pass undefined as the old value when it's changed for the first time
              U === $n ? void 0 : x && U[0] === $n ? [] : U,
              y
            ];
            U = N, d ? d(s, 3, q) : (
              // @ts-expect-error
              s(...q)
            );
          } finally {
            ao = z;
          }
        }
      } else
        f.run();
  };
  return c && c(I), f = new Bi(p), f.scheduler = u ? () => u(I, !1) : I, y = (E) => gc(E, !1, f), w = f.onStop = () => {
    const E = zn.get(f);
    if (E) {
      if (d)
        d(E, 4);
      else
        for (const N of E) N();
      zn.delete(f);
    }
  }, s ? a ? I(!0) : U = f.run() : u ? u(I.bind(null, !0), !0) : f.run(), S.pause = f.pause.bind(f), S.resume = f.resume.bind(f), S.stop = S, S;
}
function Rs(e, s = 1 / 0, o) {
  if (s <= 0 || !gt(e) || e.__v_skip || (o = o || /* @__PURE__ */ new Map(), (o.get(e) || 0) >= s))
    return e;
  if (o.set(e, s), s--, Bt(e))
    Rs(e.value, s, o);
  else if (Je(e))
    for (let a = 0; a < e.length; a++)
      Rs(e[a], s, o);
  else if (Po(e) || ko(e))
    e.forEach((a) => {
      Rs(a, s, o);
    });
  else if (Ui(e)) {
    for (const a in e)
      Rs(e[a], s, o);
    for (const a of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, a) && Rs(e[a], s, o);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function fn(e, s, o, a) {
  try {
    return a ? e(...a) : e();
  } catch (l) {
    oa(l, s, o);
  }
}
function vs(e, s, o, a) {
  if (Ze(e)) {
    const l = fn(e, s, o, a);
    return l && Di(l) && l.catch((r) => {
      oa(r, s, o);
    }), l;
  }
  if (Je(e)) {
    const l = [];
    for (let r = 0; r < e.length; r++)
      l.push(vs(e[r], s, o, a));
    return l;
  }
}
function oa(e, s, o, a = !0) {
  const l = s ? s.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: u } = s && s.appContext.config || yt;
  if (s) {
    let c = s.parent;
    const d = s.proxy, v = `https://vuejs.org/error-reference/#runtime-${o}`;
    for (; c; ) {
      const f = c.ec;
      if (f) {
        for (let p = 0; p < f.length; p++)
          if (f[p](e, d, v) === !1)
            return;
      }
      c = c.parent;
    }
    if (r) {
      Ds(), fn(r, null, 10, [
        e,
        d,
        v
      ]), Os();
      return;
    }
  }
  yc(e, o, l, a, u);
}
function yc(e, s, o, a = !0, l = !1) {
  if (l)
    throw e;
  console.error(e);
}
const qt = [];
let ys = -1;
const bo = [];
let Gs = null, yo = 0;
const or = /* @__PURE__ */ Promise.resolve();
let Vn = null;
function Rt(e) {
  const s = Vn || or;
  return e ? s.then(this ? e.bind(this) : e) : s;
}
function wc(e) {
  let s = ys + 1, o = qt.length;
  for (; s < o; ) {
    const a = s + o >>> 1, l = qt[a], r = an(l);
    r < e || r === e && l.flags & 2 ? s = a + 1 : o = a;
  }
  return s;
}
function kl(e) {
  if (!(e.flags & 1)) {
    const s = an(e), o = qt[qt.length - 1];
    !o || // fast path when the job id is larger than the tail
    !(e.flags & 2) && s >= an(o) ? qt.push(e) : qt.splice(wc(s), 0, e), e.flags |= 1, nr();
  }
}
function nr() {
  Vn || (Vn = or.then(lr));
}
function _c(e) {
  Je(e) ? bo.push(...e) : Gs && e.id === -1 ? Gs.splice(yo + 1, 0, e) : e.flags & 1 || (bo.push(e), e.flags |= 1), nr();
}
function zl(e, s, o = ys + 1) {
  for (; o < qt.length; o++) {
    const a = qt[o];
    if (a && a.flags & 2) {
      if (e && a.id !== e.uid)
        continue;
      qt.splice(o, 1), o--, a.flags & 4 && (a.flags &= -2), a(), a.flags & 4 || (a.flags &= -2);
    }
  }
}
function ar(e) {
  if (bo.length) {
    const s = [...new Set(bo)].sort(
      (o, a) => an(o) - an(a)
    );
    if (bo.length = 0, Gs) {
      Gs.push(...s);
      return;
    }
    for (Gs = s, yo = 0; yo < Gs.length; yo++) {
      const o = Gs[yo];
      o.flags & 4 && (o.flags &= -2), o.flags & 8 || o(), o.flags &= -2;
    }
    Gs = null, yo = 0;
  }
}
const an = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function lr(e) {
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
    ys = -1, qt.length = 0, ar(), Vn = null, (qt.length || bo.length) && lr();
  }
}
let Dt = null, ir = null;
function Fn(e) {
  const s = Dt;
  return Dt = e, ir = e && e.type.__scopeId || null, s;
}
function g(e, s = Dt, o) {
  if (!s || e._n)
    return e;
  const a = (...l) => {
    a._d && Gn(-1);
    const r = Fn(s);
    let u;
    try {
      u = e(...l);
    } finally {
      Fn(r), a._d && Gn(1);
    }
    return u;
  };
  return a._n = !0, a._c = !0, a._d = !0, a;
}
function St(e, s) {
  if (Dt === null)
    return e;
  const o = ua(Dt), a = e.dirs || (e.dirs = []);
  for (let l = 0; l < s.length; l++) {
    let [r, u, c, d = yt] = s[l];
    r && (Ze(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && Rs(u), a.push({
      dir: r,
      instance: o,
      value: u,
      oldValue: void 0,
      arg: c,
      modifiers: d
    }));
  }
  return e;
}
function eo(e, s, o, a) {
  const l = e.dirs, r = s && s.dirs;
  for (let u = 0; u < l.length; u++) {
    const c = l[u];
    r && (c.oldValue = r[u].value);
    let d = c.dir[a];
    d && (Ds(), vs(d, o, 8, [
      e.el,
      c,
      e,
      s
    ]), Os());
  }
}
const rr = Symbol("_vte"), ur = (e) => e.__isTeleport, Yo = (e) => e && (e.disabled || e.disabled === ""), Vl = (e) => e && (e.defer || e.defer === ""), Fl = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Bl = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Ja = (e, s) => {
  const o = e && e.to;
  return $t(o) ? s ? s(o) : null : o;
}, cr = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, s, o, a, l, r, u, c, d, v) {
    const {
      mc: f,
      pc: p,
      pbc: w,
      o: { insert: y, querySelector: k, createText: x, createComment: C }
    } = v, S = Yo(s.props);
    let { shapeFlag: U, children: I, dynamicChildren: E } = s;
    if (e == null) {
      const N = s.el = x(""), z = s.anchor = x("");
      y(N, o, a), y(z, o, a);
      const q = (G, Z) => {
        U & 16 && f(
          I,
          G,
          Z,
          l,
          r,
          u,
          c,
          d
        );
      }, D = () => {
        const G = s.target = Ja(s.props, k), Z = dr(G, s, x, y);
        G && (u !== "svg" && Fl(G) ? u = "svg" : u !== "mathml" && Bl(G) && (u = "mathml"), l && l.isCE && (l.ce._teleportTargets || (l.ce._teleportTargets = /* @__PURE__ */ new Set())).add(G), S || (q(G, Z), Pn(s, !1)));
      };
      S && (q(o, z), Pn(s, !0)), Vl(s.props) ? (s.el.__isMounted = !1, jt(() => {
        D(), delete s.el.__isMounted;
      }, r)) : D();
    } else {
      if (Vl(s.props) && e.el.__isMounted === !1) {
        jt(() => {
          cr.process(
            e,
            s,
            o,
            a,
            l,
            r,
            u,
            c,
            d,
            v
          );
        }, r);
        return;
      }
      s.el = e.el, s.targetStart = e.targetStart;
      const N = s.anchor = e.anchor, z = s.target = e.target, q = s.targetAnchor = e.targetAnchor, D = Yo(e.props), G = D ? o : z, Z = D ? N : q;
      if (u === "svg" || Fl(z) ? u = "svg" : (u === "mathml" || Bl(z)) && (u = "mathml"), E ? (w(
        e.dynamicChildren,
        E,
        G,
        l,
        r,
        u,
        c
      ), Sl(e, s, !0)) : d || p(
        e,
        s,
        G,
        Z,
        l,
        r,
        u,
        c,
        !1
      ), S)
        D ? s.props && e.props && s.props.to !== e.props.to && (s.props.to = e.props.to) : Cn(
          s,
          o,
          N,
          v,
          1
        );
      else if ((s.props && s.props.to) !== (e.props && e.props.to)) {
        const te = s.target = Ja(
          s.props,
          k
        );
        te && Cn(
          s,
          te,
          null,
          v,
          0
        );
      } else D && Cn(
        s,
        z,
        q,
        v,
        1
      );
      Pn(s, S);
    }
  },
  remove(e, s, o, { um: a, o: { remove: l } }, r) {
    const {
      shapeFlag: u,
      children: c,
      anchor: d,
      targetStart: v,
      targetAnchor: f,
      target: p,
      props: w
    } = e;
    if (p && (l(v), l(f)), r && l(d), u & 16) {
      const y = r || !Yo(w);
      for (let k = 0; k < c.length; k++) {
        const x = c[k];
        a(
          x,
          s,
          o,
          y,
          !!x.dynamicChildren
        );
      }
    }
  },
  move: Cn,
  hydrate: kc
};
function Cn(e, s, o, { o: { insert: a }, m: l }, r = 2) {
  r === 0 && a(e.targetAnchor, s, o);
  const { el: u, anchor: c, shapeFlag: d, children: v, props: f } = e, p = r === 2;
  if (p && a(u, s, o), (!p || Yo(f)) && d & 16)
    for (let w = 0; w < v.length; w++)
      l(
        v[w],
        s,
        o,
        2
      );
  p && a(c, s, o);
}
function kc(e, s, o, a, l, r, {
  o: { nextSibling: u, parentNode: c, querySelector: d, insert: v, createText: f }
}, p) {
  function w(x, C, S, U) {
    C.anchor = p(
      u(x),
      C,
      c(x),
      o,
      a,
      l,
      r
    ), C.targetStart = S, C.targetAnchor = U;
  }
  const y = s.target = Ja(
    s.props,
    d
  ), k = Yo(s.props);
  if (y) {
    const x = y._lpa || y.firstChild;
    if (s.shapeFlag & 16)
      if (k)
        w(
          e,
          s,
          x,
          x && u(x)
        );
      else {
        s.anchor = u(e);
        let C = x;
        for (; C; ) {
          if (C && C.nodeType === 8) {
            if (C.data === "teleport start anchor")
              s.targetStart = C;
            else if (C.data === "teleport anchor") {
              s.targetAnchor = C, y._lpa = s.targetAnchor && u(s.targetAnchor);
              break;
            }
          }
          C = u(C);
        }
        s.targetAnchor || dr(y, s, f, v), p(
          x && u(x),
          s,
          y,
          o,
          a,
          l,
          r
        );
      }
    Pn(s, k);
  } else k && s.shapeFlag & 16 && w(e, s, e, u(e));
  return s.anchor && u(s.anchor);
}
const Ot = cr;
function Pn(e, s) {
  const o = e.ctx;
  if (o && o.ut) {
    let a, l;
    for (s ? (a = e.el, l = e.anchor) : (a = e.targetStart, l = e.targetAnchor); a && a !== l; )
      a.nodeType === 1 && a.setAttribute("data-v-owner", o.uid), a = a.nextSibling;
    o.ut();
  }
}
function dr(e, s, o, a) {
  const l = s.targetStart = o(""), r = s.targetAnchor = o("");
  return l[rr] = r, e && (a(l, e), a(r, e)), r;
}
const Ts = Symbol("_leaveCb"), xn = Symbol("_enterCb");
function mr() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return ot(() => {
    e.isMounted = !0;
  }), la(() => {
    e.isUnmounting = !0;
  }), e;
}
const ss = [Function, Array], fr = {
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
}, vr = (e) => {
  const s = e.subTree;
  return s.component ? vr(s.component) : s;
}, bc = {
  name: "BaseTransition",
  props: fr,
  setup(e, { slots: s }) {
    const o = El(), a = mr();
    return () => {
      const l = s.default && bl(s.default(), !0);
      if (!l || !l.length)
        return;
      const r = pr(l), u = lt(e), { mode: c } = u;
      if (a.isLeaving)
        return La(r);
      const d = Wl(r);
      if (!d)
        return La(r);
      let v = ln(
        d,
        u,
        a,
        o,
        // #11061, ensure enterHooks is fresh after clone
        (p) => v = p
      );
      d.type !== zt && co(d, v);
      let f = o.subTree && Wl(o.subTree);
      if (f && f.type !== zt && !lo(f, d) && vr(o).type !== zt) {
        let p = ln(
          f,
          u,
          a,
          o
        );
        if (co(f, p), c === "out-in" && d.type !== zt)
          return a.isLeaving = !0, p.afterLeave = () => {
            a.isLeaving = !1, o.job.flags & 8 || o.update(), delete p.afterLeave, f = void 0;
          }, La(r);
        c === "in-out" && d.type !== zt ? p.delayLeave = (w, y, k) => {
          const x = gr(
            a,
            f
          );
          x[String(f.key)] = f, w[Ts] = () => {
            y(), w[Ts] = void 0, delete v.delayedLeave, f = void 0;
          }, v.delayedLeave = () => {
            k(), delete v.delayedLeave, f = void 0;
          };
        } : f = void 0;
      } else f && (f = void 0);
      return r;
    };
  }
};
function pr(e) {
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
const $c = bc;
function gr(e, s) {
  const { leavingVNodes: o } = e;
  let a = o.get(s.type);
  return a || (a = /* @__PURE__ */ Object.create(null), o.set(s.type, a)), a;
}
function ln(e, s, o, a, l) {
  const {
    appear: r,
    mode: u,
    persisted: c = !1,
    onBeforeEnter: d,
    onEnter: v,
    onAfterEnter: f,
    onEnterCancelled: p,
    onBeforeLeave: w,
    onLeave: y,
    onAfterLeave: k,
    onLeaveCancelled: x,
    onBeforeAppear: C,
    onAppear: S,
    onAfterAppear: U,
    onAppearCancelled: I
  } = s, E = String(e.key), N = gr(o, e), z = (G, Z) => {
    G && vs(
      G,
      a,
      9,
      Z
    );
  }, q = (G, Z) => {
    const te = Z[1];
    z(G, Z), Je(G) ? G.every((ie) => ie.length <= 1) && te() : G.length <= 1 && te();
  }, D = {
    mode: u,
    persisted: c,
    beforeEnter(G) {
      let Z = d;
      if (!o.isMounted)
        if (r)
          Z = C || d;
        else
          return;
      G[Ts] && G[Ts](
        !0
        /* cancelled */
      );
      const te = N[E];
      te && lo(e, te) && te.el[Ts] && te.el[Ts](), z(Z, [G]);
    },
    enter(G) {
      let Z = v, te = f, ie = p;
      if (!o.isMounted)
        if (r)
          Z = S || v, te = U || f, ie = I || p;
        else
          return;
      let ge = !1;
      const oe = G[xn] = (X) => {
        ge || (ge = !0, X ? z(ie, [G]) : z(te, [G]), D.delayedLeave && D.delayedLeave(), G[xn] = void 0);
      };
      Z ? q(Z, [G, oe]) : oe();
    },
    leave(G, Z) {
      const te = String(e.key);
      if (G[xn] && G[xn](
        !0
        /* cancelled */
      ), o.isUnmounting)
        return Z();
      z(w, [G]);
      let ie = !1;
      const ge = G[Ts] = (oe) => {
        ie || (ie = !0, Z(), oe ? z(x, [G]) : z(k, [G]), G[Ts] = void 0, N[te] === e && delete N[te]);
      };
      N[te] = e, y ? q(y, [G, ge]) : ge();
    },
    clone(G) {
      const Z = ln(
        G,
        s,
        o,
        a,
        l
      );
      return l && l(Z), Z;
    }
  };
  return D;
}
function La(e) {
  if (na(e))
    return e = Ys(e), e.children = null, e;
}
function Wl(e) {
  if (!na(e))
    return ur(e.type) && e.children ? pr(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: s, children: o } = e;
  if (o) {
    if (s & 16)
      return o[0];
    if (s & 32 && Ze(o.default))
      return o.default();
  }
}
function co(e, s) {
  e.shapeFlag & 6 && e.component ? (e.transition = s, co(e.component.subTree, s)) : e.shapeFlag & 128 ? (e.ssContent.transition = s.clone(e.ssContent), e.ssFallback.transition = s.clone(e.ssFallback)) : e.transition = s;
}
function bl(e, s = !1, o) {
  let a = [], l = 0;
  for (let r = 0; r < e.length; r++) {
    let u = e[r];
    const c = o == null ? u.key : String(o) + String(u.key != null ? u.key : r);
    u.type === H ? (u.patchFlag & 128 && l++, a = a.concat(
      bl(u.children, s, c)
    )) : (s || u.type !== zt) && a.push(c != null ? Ys(u, { key: c }) : u);
  }
  if (l > 1)
    for (let r = 0; r < a.length; r++)
      a[r].patchFlag = -2;
  return a;
}
// @__NO_SIDE_EFFECTS__
function xe(e, s) {
  return Ze(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Et({ name: e.name }, s, { setup: e })
  ) : e;
}
function hr(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Bn = /* @__PURE__ */ new WeakMap();
function Qo(e, s, o, a, l = !1) {
  if (Je(e)) {
    e.forEach(
      (k, x) => Qo(
        k,
        s && (Je(s) ? s[x] : s),
        o,
        a,
        l
      )
    );
    return;
  }
  if ($o(a) && !l) {
    a.shapeFlag & 512 && a.type.__asyncResolved && a.component.subTree.component && Qo(e, s, o, a.component.subTree);
    return;
  }
  const r = a.shapeFlag & 4 ? ua(a.component) : a.el, u = l ? null : r, { i: c, r: d } = e, v = s && s.r, f = c.refs === yt ? c.refs = {} : c.refs, p = c.setupState, w = lt(p), y = p === yt ? Li : (k) => mt(w, k);
  if (v != null && v !== d) {
    if (Gl(s), $t(v))
      f[v] = null, y(v) && (p[v] = null);
    else if (Bt(v)) {
      v.value = null;
      const k = s;
      k.k && (f[k.k] = null);
    }
  }
  if (Ze(d))
    fn(d, c, 12, [u, f]);
  else {
    const k = $t(d), x = Bt(d);
    if (k || x) {
      const C = () => {
        if (e.f) {
          const S = k ? y(d) ? p[d] : f[d] : d.value;
          if (l)
            Je(S) && dl(S, r);
          else if (Je(S))
            S.includes(r) || S.push(r);
          else if (k)
            f[d] = [r], y(d) && (p[d] = f[d]);
          else {
            const U = [r];
            d.value = U, e.k && (f[e.k] = U);
          }
        } else k ? (f[d] = u, y(d) && (p[d] = u)) : x && (d.value = u, e.k && (f[e.k] = u));
      };
      if (u) {
        const S = () => {
          C(), Bn.delete(e);
        };
        S.id = -1, Bn.set(e, S), jt(S, o);
      } else
        Gl(e), C();
    }
  }
}
function Gl(e) {
  const s = Bn.get(e);
  s && (s.flags |= 8, Bn.delete(e));
}
ta().requestIdleCallback;
ta().cancelIdleCallback;
const $o = (e) => !!e.type.__asyncLoader, na = (e) => e.type.__isKeepAlive;
function Cc(e, s) {
  yr(e, "a", s);
}
function xc(e, s) {
  yr(e, "da", s);
}
function yr(e, s, o = Vt) {
  const a = e.__wdc || (e.__wdc = () => {
    let l = o;
    for (; l; ) {
      if (l.isDeactivated)
        return;
      l = l.parent;
    }
    return e();
  });
  if (aa(s, a, o), o) {
    let l = o.parent;
    for (; l && l.parent; )
      na(l.parent.vnode) && Sc(a, s, o, l), l = l.parent;
  }
}
function Sc(e, s, o, a) {
  const l = aa(
    s,
    e,
    a,
    !0
    /* prepend */
  );
  Ro(() => {
    dl(a[s], l);
  }, o);
}
function aa(e, s, o = Vt, a = !1) {
  if (o) {
    const l = o[e] || (o[e] = []), r = s.__weh || (s.__weh = (...u) => {
      Ds();
      const c = vn(o), d = vs(s, o, e, u);
      return c(), Os(), d;
    });
    return a ? l.unshift(r) : l.push(r), r;
  }
}
const As = (e) => (s, o = Vt) => {
  (!cn || e === "sp") && aa(e, (...a) => s(...a), o);
}, Ic = As("bm"), ot = As("m"), Ec = As(
  "bu"
), wr = As("u"), la = As(
  "bum"
), Ro = As("um"), Tc = As(
  "sp"
), Mc = As("rtg"), Pc = As("rtc");
function Rc(e, s = Vt) {
  aa("ec", e, s);
}
const Nc = "components", _r = Symbol.for("v-ndc");
function $l(e) {
  return $t(e) ? Lc(Nc, e, !1) || e : e || _r;
}
function Lc(e, s, o = !0, a = !1) {
  const l = Dt || Vt;
  if (l) {
    const r = l.type;
    {
      const c = bd(
        r,
        !1
      );
      if (c && (c === s || c === ls(s) || c === Zn(ls(s))))
        return r;
    }
    const u = (
      // local registration
      // check instance[type] first which is resolved for options API
      jl(l[e] || r[e], s) || // global registration
      jl(l.appContext[e], s)
    );
    return !u && a ? r : u;
  }
}
function jl(e, s) {
  return e && (e[s] || e[ls(s)] || e[Zn(ls(s))]);
}
function _e(e, s, o, a) {
  let l;
  const r = o, u = Je(e);
  if (u || $t(e)) {
    const c = u && ro(e);
    let d = !1, v = !1;
    c && (d = !ns(e), v = Us(e), e = sa(e)), l = new Array(e.length);
    for (let f = 0, p = e.length; f < p; f++)
      l[f] = s(
        d ? v ? Eo(fs(e[f])) : fs(e[f]) : e[f],
        f,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    l = new Array(e);
    for (let c = 0; c < e; c++)
      l[c] = s(c + 1, c, void 0, r);
  } else if (gt(e))
    if (e[Symbol.iterator])
      l = Array.from(
        e,
        (c, d) => s(c, d, void 0, r)
      );
    else {
      const c = Object.keys(e);
      l = new Array(c.length);
      for (let d = 0, v = c.length; d < v; d++) {
        const f = c[d];
        l[d] = s(e[f], f, d, r);
      }
    }
  else
    l = [];
  return l;
}
function ts(e, s) {
  for (let o = 0; o < s.length; o++) {
    const a = s[o];
    if (Je(a))
      for (let l = 0; l < a.length; l++)
        e[a[l].name] = a[l].fn;
    else a && (e[a.name] = a.key ? (...l) => {
      const r = a.fn(...l);
      return r && (r.key = a.key), r;
    } : a.fn);
  }
  return e;
}
function et(e, s, o = {}, a, l) {
  if (Dt.ce || Dt.parent && $o(Dt.parent) && Dt.parent.ce) {
    const v = Object.keys(o).length > 0;
    return s !== "default" && (o.name = s), n(), L(
      H,
      null,
      [_("slot", o, a && a())],
      v ? -2 : 64
    );
  }
  let r = e[s];
  r && r._c && (r._d = !1), n();
  const u = r && kr(r(o)), c = o.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  u && u.key, d = L(
    H,
    {
      key: (c && !ms(c) ? c : `_${s}`) + // #7256 force differentiate fallback content from actual content
      (!u && a ? "_fb" : "")
    },
    u || (a ? a() : []),
    u && e._ === 1 ? 64 : -2
  );
  return r && r._c && (r._d = !0), d;
}
function kr(e) {
  return e.some((s) => un(s) ? !(s.type === zt || s.type === H && !kr(s.children)) : !0) ? e : null;
}
const Ya = (e) => e ? Vr(e) ? ua(e) : Ya(e.parent) : null, Xo = (
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
    $parent: (e) => Ya(e.parent),
    $root: (e) => Ya(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => $r(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      kl(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Rt.bind(e.proxy)),
    $watch: (e) => Hc.bind(e)
  })
), Da = (e, s) => e !== yt && !e.__isScriptSetup && mt(e, s), Dc = {
  get({ _: e }, s) {
    if (s === "__v_skip")
      return !0;
    const { ctx: o, setupState: a, data: l, props: r, accessCache: u, type: c, appContext: d } = e;
    if (s[0] !== "$") {
      const w = u[s];
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
        if (Da(a, s))
          return u[s] = 1, a[s];
        if (l !== yt && mt(l, s))
          return u[s] = 2, l[s];
        if (mt(r, s))
          return u[s] = 3, r[s];
        if (o !== yt && mt(o, s))
          return u[s] = 4, o[s];
        Qa && (u[s] = 0);
      }
    }
    const v = Xo[s];
    let f, p;
    if (v)
      return s === "$attrs" && Ut(e.attrs, "get", ""), v(e);
    if (
      // css module (injected by vue-loader)
      (f = c.__cssModules) && (f = f[s])
    )
      return f;
    if (o !== yt && mt(o, s))
      return u[s] = 4, o[s];
    if (
      // global properties
      p = d.config.globalProperties, mt(p, s)
    )
      return p[s];
  },
  set({ _: e }, s, o) {
    const { data: a, setupState: l, ctx: r } = e;
    return Da(l, s) ? (l[s] = o, !0) : a !== yt && mt(a, s) ? (a[s] = o, !0) : mt(e.props, s) || s[0] === "$" && s.slice(1) in e ? !1 : (r[s] = o, !0);
  },
  has({
    _: { data: e, setupState: s, accessCache: o, ctx: a, appContext: l, props: r, type: u }
  }, c) {
    let d;
    return !!(o[c] || e !== yt && c[0] !== "$" && mt(e, c) || Da(s, c) || mt(r, c) || mt(a, c) || mt(Xo, c) || mt(l.config.globalProperties, c) || (d = u.__cssModules) && d[c]);
  },
  defineProperty(e, s, o) {
    return o.get != null ? e._.accessCache[s] = 0 : mt(o, "value") && this.set(e, s, o.value, null), Reflect.defineProperty(e, s, o);
  }
};
function Hl(e) {
  return Je(e) ? e.reduce(
    (s, o) => (s[o] = null, s),
    {}
  ) : e;
}
let Qa = !0;
function Oc(e) {
  const s = $r(e), o = e.proxy, a = e.ctx;
  Qa = !1, s.beforeCreate && ql(s.beforeCreate, e, "bc");
  const {
    // state
    data: l,
    computed: r,
    methods: u,
    watch: c,
    provide: d,
    inject: v,
    // lifecycle
    created: f,
    beforeMount: p,
    mounted: w,
    beforeUpdate: y,
    updated: k,
    activated: x,
    deactivated: C,
    beforeDestroy: S,
    beforeUnmount: U,
    destroyed: I,
    unmounted: E,
    render: N,
    renderTracked: z,
    renderTriggered: q,
    errorCaptured: D,
    serverPrefetch: G,
    // public API
    expose: Z,
    inheritAttrs: te,
    // assets
    components: ie,
    directives: ge,
    filters: oe
  } = s;
  if (v && Uc(v, a, null), u)
    for (const Ne in u) {
      const le = u[Ne];
      Ze(le) && (a[Ne] = le.bind(o));
    }
  if (l) {
    const Ne = l.call(o, o);
    gt(Ne) && (e.data = fo(Ne));
  }
  if (Qa = !0, r)
    for (const Ne in r) {
      const le = r[Ne], pe = Ze(le) ? le.bind(o, o) : Ze(le.get) ? le.get.bind(o, o) : bs, me = !Ze(le) && Ze(le.set) ? le.set.bind(o) : bs, Ue = O({
        get: pe,
        set: me
      });
      Object.defineProperty(a, Ne, {
        enumerable: !0,
        configurable: !0,
        get: () => Ue.value,
        set: (se) => Ue.value = se
      });
    }
  if (c)
    for (const Ne in c)
      br(c[Ne], a, o, Ne);
  if (d) {
    const Ne = Ze(d) ? d.call(o) : d;
    Reflect.ownKeys(Ne).forEach((le) => {
      Wc(le, Ne[le]);
    });
  }
  f && ql(f, e, "c");
  function de(Ne, le) {
    Je(le) ? le.forEach((pe) => Ne(pe.bind(o))) : le && Ne(le.bind(o));
  }
  if (de(Ic, p), de(ot, w), de(Ec, y), de(wr, k), de(Cc, x), de(xc, C), de(Rc, D), de(Pc, z), de(Mc, q), de(la, U), de(Ro, E), de(Tc, G), Je(Z))
    if (Z.length) {
      const Ne = e.exposed || (e.exposed = {});
      Z.forEach((le) => {
        Object.defineProperty(Ne, le, {
          get: () => o[le],
          set: (pe) => o[le] = pe,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  N && e.render === bs && (e.render = N), te != null && (e.inheritAttrs = te), ie && (e.components = ie), ge && (e.directives = ge), G && hr(e);
}
function Uc(e, s, o = bs) {
  Je(e) && (e = Xa(e));
  for (const a in e) {
    const l = e[a];
    let r;
    gt(l) ? "default" in l ? r = Rn(
      l.from || a,
      l.default,
      !0
    ) : r = Rn(l.from || a) : r = Rn(l), Bt(r) ? Object.defineProperty(s, a, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (u) => r.value = u
    }) : s[a] = r;
  }
}
function ql(e, s, o) {
  vs(
    Je(e) ? e.map((a) => a.bind(s.proxy)) : e.bind(s.proxy),
    s,
    o
  );
}
function br(e, s, o, a) {
  let l = a.includes(".") ? Sr(o, a) : () => o[a];
  if ($t(e)) {
    const r = s[e];
    Ze(r) && kt(l, r);
  } else if (Ze(e))
    kt(l, e.bind(o));
  else if (gt(e))
    if (Je(e))
      e.forEach((r) => br(r, s, o, a));
    else {
      const r = Ze(e.handler) ? e.handler.bind(o) : s[e.handler];
      Ze(r) && kt(l, r, e);
    }
}
function $r(e) {
  const s = e.type, { mixins: o, extends: a } = s, {
    mixins: l,
    optionsCache: r,
    config: { optionMergeStrategies: u }
  } = e.appContext, c = r.get(s);
  let d;
  return c ? d = c : !l.length && !o && !a ? d = s : (d = {}, l.length && l.forEach(
    (v) => Wn(d, v, u, !0)
  ), Wn(d, s, u)), gt(s) && r.set(s, d), d;
}
function Wn(e, s, o, a = !1) {
  const { mixins: l, extends: r } = s;
  r && Wn(e, r, o, !0), l && l.forEach(
    (u) => Wn(e, u, o, !0)
  );
  for (const u in s)
    if (!(a && u === "expose")) {
      const c = Ac[u] || o && o[u];
      e[u] = c ? c(e[u], s[u]) : s[u];
    }
  return e;
}
const Ac = {
  data: Kl,
  props: Jl,
  emits: Jl,
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
  watch: Vc,
  // provide / inject
  provide: Kl,
  inject: zc
};
function Kl(e, s) {
  return s ? e ? function() {
    return Et(
      Ze(e) ? e.call(this, this) : e,
      Ze(s) ? s.call(this, this) : s
    );
  } : s : e;
}
function zc(e, s) {
  return jo(Xa(e), Xa(s));
}
function Xa(e) {
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
function Jl(e, s) {
  return e ? Je(e) && Je(s) ? [.../* @__PURE__ */ new Set([...e, ...s])] : Et(
    /* @__PURE__ */ Object.create(null),
    Hl(e),
    Hl(s ?? {})
  ) : s;
}
function Vc(e, s) {
  if (!e) return s;
  if (!s) return e;
  const o = Et(/* @__PURE__ */ Object.create(null), e);
  for (const a in s)
    o[a] = Gt(e[a], s[a]);
  return o;
}
function Cr() {
  return {
    app: null,
    config: {
      isNativeTag: Li,
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
let Fc = 0;
function Bc(e, s) {
  return function(a, l = null) {
    Ze(a) || (a = Et({}, a)), l != null && !gt(l) && (l = null);
    const r = Cr(), u = /* @__PURE__ */ new WeakSet(), c = [];
    let d = !1;
    const v = r.app = {
      _uid: Fc++,
      _component: a,
      _props: l,
      _container: null,
      _context: r,
      _instance: null,
      version: Cd,
      get config() {
        return r.config;
      },
      set config(f) {
      },
      use(f, ...p) {
        return u.has(f) || (f && Ze(f.install) ? (u.add(f), f.install(v, ...p)) : Ze(f) && (u.add(f), f(v, ...p))), v;
      },
      mixin(f) {
        return r.mixins.includes(f) || r.mixins.push(f), v;
      },
      component(f, p) {
        return p ? (r.components[f] = p, v) : r.components[f];
      },
      directive(f, p) {
        return p ? (r.directives[f] = p, v) : r.directives[f];
      },
      mount(f, p, w) {
        if (!d) {
          const y = v._ceVNode || _(a, l);
          return y.appContext = r, w === !0 ? w = "svg" : w === !1 && (w = void 0), e(y, f, w), d = !0, v._container = f, f.__vue_app__ = v, ua(y.component);
        }
      },
      onUnmount(f) {
        c.push(f);
      },
      unmount() {
        d && (vs(
          c,
          v._instance,
          16
        ), e(null, v._container), delete v._container.__vue_app__);
      },
      provide(f, p) {
        return r.provides[f] = p, v;
      },
      runWithContext(f) {
        const p = Co;
        Co = v;
        try {
          return f();
        } finally {
          Co = p;
        }
      }
    };
    return v;
  };
}
let Co = null;
function Wc(e, s) {
  if (Vt) {
    let o = Vt.provides;
    const a = Vt.parent && Vt.parent.provides;
    a === o && (o = Vt.provides = Object.create(a)), o[e] = s;
  }
}
function Rn(e, s, o = !1) {
  const a = El();
  if (a || Co) {
    let l = Co ? Co._context.provides : a ? a.parent == null || a.ce ? a.vnode.appContext && a.vnode.appContext.provides : a.parent.provides : void 0;
    if (l && e in l)
      return l[e];
    if (arguments.length > 1)
      return o && Ze(s) ? s.call(a && a.proxy) : s;
  }
}
const Gc = Symbol.for("v-scx"), jc = () => Rn(Gc);
function kt(e, s, o) {
  return xr(e, s, o);
}
function xr(e, s, o = yt) {
  const { immediate: a, deep: l, flush: r, once: u } = o, c = Et({}, o), d = s && a || !s && r !== "post";
  let v;
  if (cn) {
    if (r === "sync") {
      const y = jc();
      v = y.__watcherHandles || (y.__watcherHandles = []);
    } else if (!d) {
      const y = () => {
      };
      return y.stop = bs, y.resume = bs, y.pause = bs, y;
    }
  }
  const f = Vt;
  c.call = (y, k, x) => vs(y, f, k, x);
  let p = !1;
  r === "post" ? c.scheduler = (y) => {
    jt(y, f && f.suspense);
  } : r !== "sync" && (p = !0, c.scheduler = (y, k) => {
    k ? y() : kl(y);
  }), c.augmentJob = (y) => {
    s && (y.flags |= 4), p && (y.flags |= 2, f && (y.id = f.uid, y.i = f));
  };
  const w = hc(e, s, c);
  return cn && (v ? v.push(w) : d && w()), w;
}
function Hc(e, s, o) {
  const a = this.proxy, l = $t(e) ? e.includes(".") ? Sr(a, e) : () => a[e] : e.bind(a, a);
  let r;
  Ze(s) ? r = s : (r = s.handler, o = s);
  const u = vn(this), c = xr(l, r.bind(a), o);
  return u(), c;
}
function Sr(e, s) {
  const o = s.split(".");
  return () => {
    let a = e;
    for (let l = 0; l < o.length && a; l++)
      a = a[o[l]];
    return a;
  };
}
const qc = (e, s) => s === "modelValue" || s === "model-value" ? e.modelModifiers : e[`${s}Modifiers`] || e[`${ls(s)}Modifiers`] || e[`${Xs(s)}Modifiers`];
function Kc(e, s, ...o) {
  if (e.isUnmounted) return;
  const a = e.vnode.props || yt;
  let l = o;
  const r = s.startsWith("update:"), u = r && qc(a, s.slice(7));
  u && (u.trim && (l = o.map((f) => $t(f) ? f.trim() : f)), u.number && (l = o.map(ea)));
  let c, d = a[c = Ta(s)] || // also try camelCase event handler (#2249)
  a[c = Ta(ls(s))];
  !d && r && (d = a[c = Ta(Xs(s))]), d && vs(
    d,
    e,
    6,
    l
  );
  const v = a[c + "Once"];
  if (v) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[c])
      return;
    e.emitted[c] = !0, vs(
      v,
      e,
      6,
      l
    );
  }
}
const Jc = /* @__PURE__ */ new WeakMap();
function Ir(e, s, o = !1) {
  const a = o ? Jc : s.emitsCache, l = a.get(e);
  if (l !== void 0)
    return l;
  const r = e.emits;
  let u = {}, c = !1;
  if (!Ze(e)) {
    const d = (v) => {
      const f = Ir(v, s, !0);
      f && (c = !0, Et(u, f));
    };
    !o && s.mixins.length && s.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  return !r && !c ? (gt(e) && a.set(e, null), null) : (Je(r) ? r.forEach((d) => u[d] = null) : Et(u, r), gt(e) && a.set(e, u), u);
}
function ia(e, s) {
  return !e || !Qn(s) ? !1 : (s = s.slice(2).replace(/Once$/, ""), mt(e, s[0].toLowerCase() + s.slice(1)) || mt(e, Xs(s)) || mt(e, s));
}
function Yl(e) {
  const {
    type: s,
    vnode: o,
    proxy: a,
    withProxy: l,
    propsOptions: [r],
    slots: u,
    attrs: c,
    emit: d,
    render: v,
    renderCache: f,
    props: p,
    data: w,
    setupState: y,
    ctx: k,
    inheritAttrs: x
  } = e, C = Fn(e);
  let S, U;
  try {
    if (o.shapeFlag & 4) {
      const E = l || a, N = E;
      S = _s(
        v.call(
          N,
          E,
          f,
          p,
          y,
          w,
          k
        )
      ), U = c;
    } else {
      const E = s;
      S = _s(
        E.length > 1 ? E(
          p,
          { attrs: c, slots: u, emit: d }
        ) : E(
          p,
          null
        )
      ), U = s.props ? c : Yc(c);
    }
  } catch (E) {
    Zo.length = 0, oa(E, e, 1), S = _(zt);
  }
  let I = S;
  if (U && x !== !1) {
    const E = Object.keys(U), { shapeFlag: N } = I;
    E.length && N & 7 && (r && E.some(cl) && (U = Qc(
      U,
      r
    )), I = Ys(I, U, !1, !0));
  }
  return o.dirs && (I = Ys(I, null, !1, !0), I.dirs = I.dirs ? I.dirs.concat(o.dirs) : o.dirs), o.transition && co(I, o.transition), S = I, Fn(C), S;
}
const Yc = (e) => {
  let s;
  for (const o in e)
    (o === "class" || o === "style" || Qn(o)) && ((s || (s = {}))[o] = e[o]);
  return s;
}, Qc = (e, s) => {
  const o = {};
  for (const a in e)
    (!cl(a) || !(a.slice(9) in s)) && (o[a] = e[a]);
  return o;
};
function Xc(e, s, o) {
  const { props: a, children: l, component: r } = e, { props: u, children: c, patchFlag: d } = s, v = r.emitsOptions;
  if (s.dirs || s.transition)
    return !0;
  if (o && d >= 0) {
    if (d & 1024)
      return !0;
    if (d & 16)
      return a ? Ql(a, u, v) : !!u;
    if (d & 8) {
      const f = s.dynamicProps;
      for (let p = 0; p < f.length; p++) {
        const w = f[p];
        if (u[w] !== a[w] && !ia(v, w))
          return !0;
      }
    }
  } else
    return (l || c) && (!c || !c.$stable) ? !0 : a === u ? !1 : a ? u ? Ql(a, u, v) : !0 : !!u;
  return !1;
}
function Ql(e, s, o) {
  const a = Object.keys(s);
  if (a.length !== Object.keys(e).length)
    return !0;
  for (let l = 0; l < a.length; l++) {
    const r = a[l];
    if (s[r] !== e[r] && !ia(o, r))
      return !0;
  }
  return !1;
}
function Zc({ vnode: e, parent: s }, o) {
  for (; s; ) {
    const a = s.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.el = e.el), a === e)
      (e = s.vnode).el = o, s = s.parent;
    else
      break;
  }
}
const Er = {}, Tr = () => Object.create(Er), Mr = (e) => Object.getPrototypeOf(e) === Er;
function ed(e, s, o, a = !1) {
  const l = {}, r = Tr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Pr(e, s, l, r);
  for (const u in e.propsOptions[0])
    u in l || (l[u] = void 0);
  o ? e.props = a ? l : uc(l) : e.type.props ? e.props = l : e.props = r, e.attrs = r;
}
function td(e, s, o, a) {
  const {
    props: l,
    attrs: r,
    vnode: { patchFlag: u }
  } = e, c = lt(l), [d] = e.propsOptions;
  let v = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (a || u > 0) && !(u & 16)
  ) {
    if (u & 8) {
      const f = e.vnode.dynamicProps;
      for (let p = 0; p < f.length; p++) {
        let w = f[p];
        if (ia(e.emitsOptions, w))
          continue;
        const y = s[w];
        if (d)
          if (mt(r, w))
            y !== r[w] && (r[w] = y, v = !0);
          else {
            const k = ls(w);
            l[k] = Za(
              d,
              c,
              k,
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
    Pr(e, s, l, r) && (v = !0);
    let f;
    for (const p in c)
      (!s || // for camelCase
      !mt(s, p) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((f = Xs(p)) === p || !mt(s, f))) && (d ? o && // for camelCase
      (o[p] !== void 0 || // for kebab-case
      o[f] !== void 0) && (l[p] = Za(
        d,
        c,
        p,
        void 0,
        e,
        !0
      )) : delete l[p]);
    if (r !== c)
      for (const p in r)
        (!s || !mt(s, p)) && (delete r[p], v = !0);
  }
  v && Ps(e.attrs, "set", "");
}
function Pr(e, s, o, a) {
  const [l, r] = e.propsOptions;
  let u = !1, c;
  if (s)
    for (let d in s) {
      if (qo(d))
        continue;
      const v = s[d];
      let f;
      l && mt(l, f = ls(d)) ? !r || !r.includes(f) ? o[f] = v : (c || (c = {}))[f] = v : ia(e.emitsOptions, d) || (!(d in a) || v !== a[d]) && (a[d] = v, u = !0);
    }
  if (r) {
    const d = lt(o), v = c || yt;
    for (let f = 0; f < r.length; f++) {
      const p = r[f];
      o[p] = Za(
        l,
        d,
        p,
        v[p],
        e,
        !mt(v, p)
      );
    }
  }
  return u;
}
function Za(e, s, o, a, l, r) {
  const u = e[o];
  if (u != null) {
    const c = mt(u, "default");
    if (c && a === void 0) {
      const d = u.default;
      if (u.type !== Function && !u.skipFactory && Ze(d)) {
        const { propsDefaults: v } = l;
        if (o in v)
          a = v[o];
        else {
          const f = vn(l);
          a = v[o] = d.call(
            null,
            s
          ), f();
        }
      } else
        a = d;
      l.ce && l.ce._setProp(o, a);
    }
    u[
      0
      /* shouldCast */
    ] && (r && !c ? a = !1 : u[
      1
      /* shouldCastTrue */
    ] && (a === "" || a === Xs(o)) && (a = !0));
  }
  return a;
}
const sd = /* @__PURE__ */ new WeakMap();
function Rr(e, s, o = !1) {
  const a = o ? sd : s.propsCache, l = a.get(e);
  if (l)
    return l;
  const r = e.props, u = {}, c = [];
  let d = !1;
  if (!Ze(e)) {
    const f = (p) => {
      d = !0;
      const [w, y] = Rr(p, s, !0);
      Et(u, w), y && c.push(...y);
    };
    !o && s.mixins.length && s.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  if (!r && !d)
    return gt(e) && a.set(e, _o), _o;
  if (Je(r))
    for (let f = 0; f < r.length; f++) {
      const p = ls(r[f]);
      Xl(p) && (u[p] = yt);
    }
  else if (r)
    for (const f in r) {
      const p = ls(f);
      if (Xl(p)) {
        const w = r[f], y = u[p] = Je(w) || Ze(w) ? { type: w } : Et({}, w), k = y.type;
        let x = !1, C = !0;
        if (Je(k))
          for (let S = 0; S < k.length; ++S) {
            const U = k[S], I = Ze(U) && U.name;
            if (I === "Boolean") {
              x = !0;
              break;
            } else I === "String" && (C = !1);
          }
        else
          x = Ze(k) && k.name === "Boolean";
        y[
          0
          /* shouldCast */
        ] = x, y[
          1
          /* shouldCastTrue */
        ] = C, (x || mt(y, "default")) && c.push(p);
      }
    }
  const v = [u, c];
  return gt(e) && a.set(e, v), v;
}
function Xl(e) {
  return e[0] !== "$" && !qo(e);
}
const Cl = (e) => e === "_" || e === "_ctx" || e === "$stable", xl = (e) => Je(e) ? e.map(_s) : [_s(e)], od = (e, s, o) => {
  if (s._n)
    return s;
  const a = g((...l) => xl(s(...l)), o);
  return a._c = !1, a;
}, Nr = (e, s, o) => {
  const a = e._ctx;
  for (const l in e) {
    if (Cl(l)) continue;
    const r = e[l];
    if (Ze(r))
      s[l] = od(l, r, a);
    else if (r != null) {
      const u = xl(r);
      s[l] = () => u;
    }
  }
}, Lr = (e, s) => {
  const o = xl(s);
  e.slots.default = () => o;
}, Dr = (e, s, o) => {
  for (const a in s)
    (o || !Cl(a)) && (e[a] = s[a]);
}, nd = (e, s, o) => {
  const a = e.slots = Tr();
  if (e.vnode.shapeFlag & 32) {
    const l = s._;
    l ? (Dr(a, s, o), o && Ai(a, "_", l, !0)) : Nr(s, a);
  } else s && Lr(e, s);
}, ad = (e, s, o) => {
  const { vnode: a, slots: l } = e;
  let r = !0, u = yt;
  if (a.shapeFlag & 32) {
    const c = s._;
    c ? o && c === 1 ? r = !1 : Dr(l, s, o) : (r = !s.$stable, Nr(s, l)), u = s;
  } else s && (Lr(e, s), u = { default: 1 });
  if (r)
    for (const c in l)
      !Cl(c) && u[c] == null && delete l[c];
}, jt = cd;
function ld(e) {
  return id(e);
}
function id(e, s) {
  const o = ta();
  o.__VUE__ = !0;
  const {
    insert: a,
    remove: l,
    patchProp: r,
    createElement: u,
    createText: c,
    createComment: d,
    setText: v,
    setElementText: f,
    parentNode: p,
    nextSibling: w,
    setScopeId: y = bs,
    insertStaticContent: k
  } = e, x = (B, W, J, ye = null, ke = null, $e = null, Pe = void 0, Le = null, Oe = !!W.dynamicChildren) => {
    if (B === W)
      return;
    B && !lo(B, W) && (ye = P(B), se(B, ke, $e, !0), B = null), W.patchFlag === -2 && (Oe = !1, W.dynamicChildren = null);
    const { type: Te, ref: Be, shapeFlag: Me } = W;
    switch (Te) {
      case ra:
        C(B, W, J, ye);
        break;
      case zt:
        S(B, W, J, ye);
        break;
      case Ua:
        B == null && U(W, J, ye, Pe);
        break;
      case H:
        ie(
          B,
          W,
          J,
          ye,
          ke,
          $e,
          Pe,
          Le,
          Oe
        );
        break;
      default:
        Me & 1 ? N(
          B,
          W,
          J,
          ye,
          ke,
          $e,
          Pe,
          Le,
          Oe
        ) : Me & 6 ? ge(
          B,
          W,
          J,
          ye,
          ke,
          $e,
          Pe,
          Le,
          Oe
        ) : (Me & 64 || Me & 128) && Te.process(
          B,
          W,
          J,
          ye,
          ke,
          $e,
          Pe,
          Le,
          Oe,
          Ve
        );
    }
    Be != null && ke ? Qo(Be, B && B.ref, $e, W || B, !W) : Be == null && B && B.ref != null && Qo(B.ref, null, $e, B, !0);
  }, C = (B, W, J, ye) => {
    if (B == null)
      a(
        W.el = c(W.children),
        J,
        ye
      );
    else {
      const ke = W.el = B.el;
      W.children !== B.children && v(ke, W.children);
    }
  }, S = (B, W, J, ye) => {
    B == null ? a(
      W.el = d(W.children || ""),
      J,
      ye
    ) : W.el = B.el;
  }, U = (B, W, J, ye) => {
    [B.el, B.anchor] = k(
      B.children,
      W,
      J,
      ye,
      B.el,
      B.anchor
    );
  }, I = ({ el: B, anchor: W }, J, ye) => {
    let ke;
    for (; B && B !== W; )
      ke = w(B), a(B, J, ye), B = ke;
    a(W, J, ye);
  }, E = ({ el: B, anchor: W }) => {
    let J;
    for (; B && B !== W; )
      J = w(B), l(B), B = J;
    l(W);
  }, N = (B, W, J, ye, ke, $e, Pe, Le, Oe) => {
    if (W.type === "svg" ? Pe = "svg" : W.type === "math" && (Pe = "mathml"), B == null)
      z(
        W,
        J,
        ye,
        ke,
        $e,
        Pe,
        Le,
        Oe
      );
    else {
      const Te = B.el && B.el._isVueCE ? B.el : null;
      try {
        Te && Te._beginPatch(), G(
          B,
          W,
          ke,
          $e,
          Pe,
          Le,
          Oe
        );
      } finally {
        Te && Te._endPatch();
      }
    }
  }, z = (B, W, J, ye, ke, $e, Pe, Le) => {
    let Oe, Te;
    const { props: Be, shapeFlag: Me, transition: we, dirs: ee } = B;
    if (Oe = B.el = u(
      B.type,
      $e,
      Be && Be.is,
      Be
    ), Me & 8 ? f(Oe, B.children) : Me & 16 && D(
      B.children,
      Oe,
      null,
      ye,
      ke,
      Oa(B, $e),
      Pe,
      Le
    ), ee && eo(B, null, ye, "created"), q(Oe, B, B.scopeId, Pe, ye), Be) {
      for (const V in Be)
        V !== "value" && !qo(V) && r(Oe, V, null, Be[V], $e, ye);
      "value" in Be && r(Oe, "value", null, Be.value, $e), (Te = Be.onVnodeBeforeMount) && ps(Te, ye, B);
    }
    ee && eo(B, null, ye, "beforeMount");
    const We = rd(ke, we);
    We && we.beforeEnter(Oe), a(Oe, W, J), ((Te = Be && Be.onVnodeMounted) || We || ee) && jt(() => {
      Te && ps(Te, ye, B), We && we.enter(Oe), ee && eo(B, null, ye, "mounted");
    }, ke);
  }, q = (B, W, J, ye, ke) => {
    if (J && y(B, J), ye)
      for (let $e = 0; $e < ye.length; $e++)
        y(B, ye[$e]);
    if (ke) {
      let $e = ke.subTree;
      if (W === $e || Ur($e.type) && ($e.ssContent === W || $e.ssFallback === W)) {
        const Pe = ke.vnode;
        q(
          B,
          Pe,
          Pe.scopeId,
          Pe.slotScopeIds,
          ke.parent
        );
      }
    }
  }, D = (B, W, J, ye, ke, $e, Pe, Le, Oe = 0) => {
    for (let Te = Oe; Te < B.length; Te++) {
      const Be = B[Te] = Le ? js(B[Te]) : _s(B[Te]);
      x(
        null,
        Be,
        W,
        J,
        ye,
        ke,
        $e,
        Pe,
        Le
      );
    }
  }, G = (B, W, J, ye, ke, $e, Pe) => {
    const Le = W.el = B.el;
    let { patchFlag: Oe, dynamicChildren: Te, dirs: Be } = W;
    Oe |= B.patchFlag & 16;
    const Me = B.props || yt, we = W.props || yt;
    let ee;
    if (J && to(J, !1), (ee = we.onVnodeBeforeUpdate) && ps(ee, J, W, B), Be && eo(W, B, J, "beforeUpdate"), J && to(J, !0), (Me.innerHTML && we.innerHTML == null || Me.textContent && we.textContent == null) && f(Le, ""), Te ? Z(
      B.dynamicChildren,
      Te,
      Le,
      J,
      ye,
      Oa(W, ke),
      $e
    ) : Pe || le(
      B,
      W,
      Le,
      null,
      J,
      ye,
      Oa(W, ke),
      $e,
      !1
    ), Oe > 0) {
      if (Oe & 16)
        te(Le, Me, we, J, ke);
      else if (Oe & 2 && Me.class !== we.class && r(Le, "class", null, we.class, ke), Oe & 4 && r(Le, "style", Me.style, we.style, ke), Oe & 8) {
        const We = W.dynamicProps;
        for (let V = 0; V < We.length; V++) {
          const F = We[V], j = Me[F], Ee = we[F];
          (Ee !== j || F === "value") && r(Le, F, j, Ee, ke, J);
        }
      }
      Oe & 1 && B.children !== W.children && f(Le, W.children);
    } else !Pe && Te == null && te(Le, Me, we, J, ke);
    ((ee = we.onVnodeUpdated) || Be) && jt(() => {
      ee && ps(ee, J, W, B), Be && eo(W, B, J, "updated");
    }, ye);
  }, Z = (B, W, J, ye, ke, $e, Pe) => {
    for (let Le = 0; Le < W.length; Le++) {
      const Oe = B[Le], Te = W[Le], Be = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        Oe.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (Oe.type === H || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !lo(Oe, Te) || // - In the case of a component, it could contain anything.
        Oe.shapeFlag & 198) ? p(Oe.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          J
        )
      );
      x(
        Oe,
        Te,
        Be,
        null,
        ye,
        ke,
        $e,
        Pe,
        !0
      );
    }
  }, te = (B, W, J, ye, ke) => {
    if (W !== J) {
      if (W !== yt)
        for (const $e in W)
          !qo($e) && !($e in J) && r(
            B,
            $e,
            W[$e],
            null,
            ke,
            ye
          );
      for (const $e in J) {
        if (qo($e)) continue;
        const Pe = J[$e], Le = W[$e];
        Pe !== Le && $e !== "value" && r(B, $e, Le, Pe, ke, ye);
      }
      "value" in J && r(B, "value", W.value, J.value, ke);
    }
  }, ie = (B, W, J, ye, ke, $e, Pe, Le, Oe) => {
    const Te = W.el = B ? B.el : c(""), Be = W.anchor = B ? B.anchor : c("");
    let { patchFlag: Me, dynamicChildren: we, slotScopeIds: ee } = W;
    ee && (Le = Le ? Le.concat(ee) : ee), B == null ? (a(Te, J, ye), a(Be, J, ye), D(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      W.children || [],
      J,
      Be,
      ke,
      $e,
      Pe,
      Le,
      Oe
    )) : Me > 0 && Me & 64 && we && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    B.dynamicChildren ? (Z(
      B.dynamicChildren,
      we,
      J,
      ke,
      $e,
      Pe,
      Le
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (W.key != null || ke && W === ke.subTree) && Sl(
      B,
      W,
      !0
      /* shallow */
    )) : le(
      B,
      W,
      J,
      Be,
      ke,
      $e,
      Pe,
      Le,
      Oe
    );
  }, ge = (B, W, J, ye, ke, $e, Pe, Le, Oe) => {
    W.slotScopeIds = Le, B == null ? W.shapeFlag & 512 ? ke.ctx.activate(
      W,
      J,
      ye,
      Pe,
      Oe
    ) : oe(
      W,
      J,
      ye,
      ke,
      $e,
      Pe,
      Oe
    ) : X(B, W, Oe);
  }, oe = (B, W, J, ye, ke, $e, Pe) => {
    const Le = B.component = hd(
      B,
      ye,
      ke
    );
    if (na(B) && (Le.ctx.renderer = Ve), yd(Le, !1, Pe), Le.asyncDep) {
      if (ke && ke.registerDep(Le, de, Pe), !B.el) {
        const Oe = Le.subTree = _(zt);
        S(null, Oe, W, J), B.placeholder = Oe.el;
      }
    } else
      de(
        Le,
        B,
        W,
        J,
        ke,
        $e,
        Pe
      );
  }, X = (B, W, J) => {
    const ye = W.component = B.component;
    if (Xc(B, W, J))
      if (ye.asyncDep && !ye.asyncResolved) {
        Ne(ye, W, J);
        return;
      } else
        ye.next = W, ye.update();
    else
      W.el = B.el, ye.vnode = W;
  }, de = (B, W, J, ye, ke, $e, Pe) => {
    const Le = () => {
      if (B.isMounted) {
        let { next: Me, bu: we, u: ee, parent: We, vnode: V } = B;
        {
          const re = Or(B);
          if (re) {
            Me && (Me.el = V.el, Ne(B, Me, Pe)), re.asyncDep.then(() => {
              B.isUnmounted || Le();
            });
            return;
          }
        }
        let F = Me, j;
        to(B, !1), Me ? (Me.el = V.el, Ne(B, Me, Pe)) : Me = V, we && Mn(we), (j = Me.props && Me.props.onVnodeBeforeUpdate) && ps(j, We, Me, V), to(B, !0);
        const Ee = Yl(B), T = B.subTree;
        B.subTree = Ee, x(
          T,
          Ee,
          // parent may have changed if it's in a teleport
          p(T.el),
          // anchor may have changed if it's in a fragment
          P(T),
          B,
          ke,
          $e
        ), Me.el = Ee.el, F === null && Zc(B, Ee.el), ee && jt(ee, ke), (j = Me.props && Me.props.onVnodeUpdated) && jt(
          () => ps(j, We, Me, V),
          ke
        );
      } else {
        let Me;
        const { el: we, props: ee } = W, { bm: We, m: V, parent: F, root: j, type: Ee } = B, T = $o(W);
        to(B, !1), We && Mn(We), !T && (Me = ee && ee.onVnodeBeforeMount) && ps(Me, F, W), to(B, !0);
        {
          j.ce && // @ts-expect-error _def is private
          j.ce._def.shadowRoot !== !1 && j.ce._injectChildStyle(Ee);
          const re = B.subTree = Yl(B);
          x(
            null,
            re,
            J,
            ye,
            B,
            ke,
            $e
          ), W.el = re.el;
        }
        if (V && jt(V, ke), !T && (Me = ee && ee.onVnodeMounted)) {
          const re = W;
          jt(
            () => ps(Me, F, re),
            ke
          );
        }
        (W.shapeFlag & 256 || F && $o(F.vnode) && F.vnode.shapeFlag & 256) && B.a && jt(B.a, ke), B.isMounted = !0, W = J = ye = null;
      }
    };
    B.scope.on();
    const Oe = B.effect = new Bi(Le);
    B.scope.off();
    const Te = B.update = Oe.run.bind(Oe), Be = B.job = Oe.runIfDirty.bind(Oe);
    Be.i = B, Be.id = B.uid, Oe.scheduler = () => kl(Be), to(B, !0), Te();
  }, Ne = (B, W, J) => {
    W.component = B;
    const ye = B.vnode.props;
    B.vnode = W, B.next = null, td(B, W.props, ye, J), ad(B, W.children, J), Ds(), zl(B), Os();
  }, le = (B, W, J, ye, ke, $e, Pe, Le, Oe = !1) => {
    const Te = B && B.children, Be = B ? B.shapeFlag : 0, Me = W.children, { patchFlag: we, shapeFlag: ee } = W;
    if (we > 0) {
      if (we & 128) {
        me(
          Te,
          Me,
          J,
          ye,
          ke,
          $e,
          Pe,
          Le,
          Oe
        );
        return;
      } else if (we & 256) {
        pe(
          Te,
          Me,
          J,
          ye,
          ke,
          $e,
          Pe,
          Le,
          Oe
        );
        return;
      }
    }
    ee & 8 ? (Be & 16 && Q(Te, ke, $e), Me !== Te && f(J, Me)) : Be & 16 ? ee & 16 ? me(
      Te,
      Me,
      J,
      ye,
      ke,
      $e,
      Pe,
      Le,
      Oe
    ) : Q(Te, ke, $e, !0) : (Be & 8 && f(J, ""), ee & 16 && D(
      Me,
      J,
      ye,
      ke,
      $e,
      Pe,
      Le,
      Oe
    ));
  }, pe = (B, W, J, ye, ke, $e, Pe, Le, Oe) => {
    B = B || _o, W = W || _o;
    const Te = B.length, Be = W.length, Me = Math.min(Te, Be);
    let we;
    for (we = 0; we < Me; we++) {
      const ee = W[we] = Oe ? js(W[we]) : _s(W[we]);
      x(
        B[we],
        ee,
        J,
        null,
        ke,
        $e,
        Pe,
        Le,
        Oe
      );
    }
    Te > Be ? Q(
      B,
      ke,
      $e,
      !0,
      !1,
      Me
    ) : D(
      W,
      J,
      ye,
      ke,
      $e,
      Pe,
      Le,
      Oe,
      Me
    );
  }, me = (B, W, J, ye, ke, $e, Pe, Le, Oe) => {
    let Te = 0;
    const Be = W.length;
    let Me = B.length - 1, we = Be - 1;
    for (; Te <= Me && Te <= we; ) {
      const ee = B[Te], We = W[Te] = Oe ? js(W[Te]) : _s(W[Te]);
      if (lo(ee, We))
        x(
          ee,
          We,
          J,
          null,
          ke,
          $e,
          Pe,
          Le,
          Oe
        );
      else
        break;
      Te++;
    }
    for (; Te <= Me && Te <= we; ) {
      const ee = B[Me], We = W[we] = Oe ? js(W[we]) : _s(W[we]);
      if (lo(ee, We))
        x(
          ee,
          We,
          J,
          null,
          ke,
          $e,
          Pe,
          Le,
          Oe
        );
      else
        break;
      Me--, we--;
    }
    if (Te > Me) {
      if (Te <= we) {
        const ee = we + 1, We = ee < Be ? W[ee].el : ye;
        for (; Te <= we; )
          x(
            null,
            W[Te] = Oe ? js(W[Te]) : _s(W[Te]),
            J,
            We,
            ke,
            $e,
            Pe,
            Le,
            Oe
          ), Te++;
      }
    } else if (Te > we)
      for (; Te <= Me; )
        se(B[Te], ke, $e, !0), Te++;
    else {
      const ee = Te, We = Te, V = /* @__PURE__ */ new Map();
      for (Te = We; Te <= we; Te++) {
        const ze = W[Te] = Oe ? js(W[Te]) : _s(W[Te]);
        ze.key != null && V.set(ze.key, Te);
      }
      let F, j = 0;
      const Ee = we - We + 1;
      let T = !1, re = 0;
      const ue = new Array(Ee);
      for (Te = 0; Te < Ee; Te++) ue[Te] = 0;
      for (Te = ee; Te <= Me; Te++) {
        const ze = B[Te];
        if (j >= Ee) {
          se(ze, ke, $e, !0);
          continue;
        }
        let Ie;
        if (ze.key != null)
          Ie = V.get(ze.key);
        else
          for (F = We; F <= we; F++)
            if (ue[F - We] === 0 && lo(ze, W[F])) {
              Ie = F;
              break;
            }
        Ie === void 0 ? se(ze, ke, $e, !0) : (ue[Ie - We] = Te + 1, Ie >= re ? re = Ie : T = !0, x(
          ze,
          W[Ie],
          J,
          null,
          ke,
          $e,
          Pe,
          Le,
          Oe
        ), j++);
      }
      const Ae = T ? ud(ue) : _o;
      for (F = Ae.length - 1, Te = Ee - 1; Te >= 0; Te--) {
        const ze = We + Te, Ie = W[ze], qe = W[ze + 1], Qe = ze + 1 < Be ? (
          // #13559, fallback to el placeholder for unresolved async component
          qe.el || qe.placeholder
        ) : ye;
        ue[Te] === 0 ? x(
          null,
          Ie,
          J,
          Qe,
          ke,
          $e,
          Pe,
          Le,
          Oe
        ) : T && (F < 0 || Te !== Ae[F] ? Ue(Ie, J, Qe, 2) : F--);
      }
    }
  }, Ue = (B, W, J, ye, ke = null) => {
    const { el: $e, type: Pe, transition: Le, children: Oe, shapeFlag: Te } = B;
    if (Te & 6) {
      Ue(B.component.subTree, W, J, ye);
      return;
    }
    if (Te & 128) {
      B.suspense.move(W, J, ye);
      return;
    }
    if (Te & 64) {
      Pe.move(B, W, J, Ve);
      return;
    }
    if (Pe === H) {
      a($e, W, J);
      for (let Me = 0; Me < Oe.length; Me++)
        Ue(Oe[Me], W, J, ye);
      a(B.anchor, W, J);
      return;
    }
    if (Pe === Ua) {
      I(B, W, J);
      return;
    }
    if (ye !== 2 && Te & 1 && Le)
      if (ye === 0)
        Le.beforeEnter($e), a($e, W, J), jt(() => Le.enter($e), ke);
      else {
        const { leave: Me, delayLeave: we, afterLeave: ee } = Le, We = () => {
          B.ctx.isUnmounted ? l($e) : a($e, W, J);
        }, V = () => {
          $e._isLeaving && $e[Ts](
            !0
            /* cancelled */
          ), Me($e, () => {
            We(), ee && ee();
          });
        };
        we ? we($e, We, V) : V();
      }
    else
      a($e, W, J);
  }, se = (B, W, J, ye = !1, ke = !1) => {
    const {
      type: $e,
      props: Pe,
      ref: Le,
      children: Oe,
      dynamicChildren: Te,
      shapeFlag: Be,
      patchFlag: Me,
      dirs: we,
      cacheIndex: ee
    } = B;
    if (Me === -2 && (ke = !1), Le != null && (Ds(), Qo(Le, null, J, B, !0), Os()), ee != null && (W.renderCache[ee] = void 0), Be & 256) {
      W.ctx.deactivate(B);
      return;
    }
    const We = Be & 1 && we, V = !$o(B);
    let F;
    if (V && (F = Pe && Pe.onVnodeBeforeUnmount) && ps(F, W, B), Be & 6)
      A(B.component, J, ye);
    else {
      if (Be & 128) {
        B.suspense.unmount(J, ye);
        return;
      }
      We && eo(B, null, W, "beforeUnmount"), Be & 64 ? B.type.remove(
        B,
        W,
        J,
        Ve,
        ye
      ) : Te && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !Te.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      ($e !== H || Me > 0 && Me & 64) ? Q(
        Te,
        W,
        J,
        !1,
        !0
      ) : ($e === H && Me & 384 || !ke && Be & 16) && Q(Oe, W, J), ye && ne(B);
    }
    (V && (F = Pe && Pe.onVnodeUnmounted) || We) && jt(() => {
      F && ps(F, W, B), We && eo(B, null, W, "unmounted");
    }, J);
  }, ne = (B) => {
    const { type: W, el: J, anchor: ye, transition: ke } = B;
    if (W === H) {
      M(J, ye);
      return;
    }
    if (W === Ua) {
      E(B);
      return;
    }
    const $e = () => {
      l(J), ke && !ke.persisted && ke.afterLeave && ke.afterLeave();
    };
    if (B.shapeFlag & 1 && ke && !ke.persisted) {
      const { leave: Pe, delayLeave: Le } = ke, Oe = () => Pe(J, $e);
      Le ? Le(B.el, $e, Oe) : Oe();
    } else
      $e();
  }, M = (B, W) => {
    let J;
    for (; B !== W; )
      J = w(B), l(B), B = J;
    l(W);
  }, A = (B, W, J) => {
    const { bum: ye, scope: ke, job: $e, subTree: Pe, um: Le, m: Oe, a: Te } = B;
    Zl(Oe), Zl(Te), ye && Mn(ye), ke.stop(), $e && ($e.flags |= 8, se(Pe, B, W, J)), Le && jt(Le, W), jt(() => {
      B.isUnmounted = !0;
    }, W);
  }, Q = (B, W, J, ye = !1, ke = !1, $e = 0) => {
    for (let Pe = $e; Pe < B.length; Pe++)
      se(B[Pe], W, J, ye, ke);
  }, P = (B) => {
    if (B.shapeFlag & 6)
      return P(B.component.subTree);
    if (B.shapeFlag & 128)
      return B.suspense.next();
    const W = w(B.anchor || B.el), J = W && W[rr];
    return J ? w(J) : W;
  };
  let R = !1;
  const ce = (B, W, J) => {
    B == null ? W._vnode && se(W._vnode, null, null, !0) : x(
      W._vnode || null,
      B,
      W,
      null,
      null,
      null,
      J
    ), W._vnode = B, R || (R = !0, zl(), ar(), R = !1);
  }, Ve = {
    p: x,
    um: se,
    m: Ue,
    r: ne,
    mt: oe,
    mc: D,
    pc: le,
    pbc: Z,
    n: P,
    o: e
  };
  return {
    render: ce,
    hydrate: void 0,
    createApp: Bc(ce)
  };
}
function Oa({ type: e, props: s }, o) {
  return o === "svg" && e === "foreignObject" || o === "mathml" && e === "annotation-xml" && s && s.encoding && s.encoding.includes("html") ? void 0 : o;
}
function to({ effect: e, job: s }, o) {
  o ? (e.flags |= 32, s.flags |= 4) : (e.flags &= -33, s.flags &= -5);
}
function rd(e, s) {
  return (!e || e && !e.pendingBranch) && s && !s.persisted;
}
function Sl(e, s, o = !1) {
  const a = e.children, l = s.children;
  if (Je(a) && Je(l))
    for (let r = 0; r < a.length; r++) {
      const u = a[r];
      let c = l[r];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = l[r] = js(l[r]), c.el = u.el), !o && c.patchFlag !== -2 && Sl(u, c)), c.type === ra && // avoid cached text nodes retaining detached dom nodes
      c.patchFlag !== -1 && (c.el = u.el), c.type === zt && !c.el && (c.el = u.el);
    }
}
function ud(e) {
  const s = e.slice(), o = [0];
  let a, l, r, u, c;
  const d = e.length;
  for (a = 0; a < d; a++) {
    const v = e[a];
    if (v !== 0) {
      if (l = o[o.length - 1], e[l] < v) {
        s[a] = l, o.push(a);
        continue;
      }
      for (r = 0, u = o.length - 1; r < u; )
        c = r + u >> 1, e[o[c]] < v ? r = c + 1 : u = c;
      v < e[o[r]] && (r > 0 && (s[a] = o[r - 1]), o[r] = a);
    }
  }
  for (r = o.length, u = o[r - 1]; r-- > 0; )
    o[r] = u, u = s[u];
  return o;
}
function Or(e) {
  const s = e.subTree.component;
  if (s)
    return s.asyncDep && !s.asyncResolved ? s : Or(s);
}
function Zl(e) {
  if (e)
    for (let s = 0; s < e.length; s++)
      e[s].flags |= 8;
}
const Ur = (e) => e.__isSuspense;
function cd(e, s) {
  s && s.pendingBranch ? Je(e) ? s.effects.push(...e) : s.effects.push(e) : _c(e);
}
const H = Symbol.for("v-fgt"), ra = Symbol.for("v-txt"), zt = Symbol.for("v-cmt"), Ua = Symbol.for("v-stc"), Zo = [];
let Zt = null;
function n(e = !1) {
  Zo.push(Zt = e ? null : []);
}
function dd() {
  Zo.pop(), Zt = Zo[Zo.length - 1] || null;
}
let rn = 1;
function Gn(e, s = !1) {
  rn += e, e < 0 && Zt && s && (Zt.hasOnce = !0);
}
function Ar(e) {
  return e.dynamicChildren = rn > 0 ? Zt || _o : null, dd(), rn > 0 && Zt && Zt.push(e), e;
}
function i(e, s, o, a, l, r) {
  return Ar(
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
function L(e, s, o, a, l) {
  return Ar(
    _(
      e,
      s,
      o,
      a,
      l,
      !0
    )
  );
}
function un(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function lo(e, s) {
  return e.type === s.type && e.key === s.key;
}
const zr = ({ key: e }) => e ?? null, Nn = ({
  ref: e,
  ref_key: s,
  ref_for: o
}) => (typeof e == "number" && (e = "" + e), e != null ? $t(e) || Bt(e) || Ze(e) ? { i: Dt, r: e, k: s, f: !!o } : e : null);
function t(e, s = null, o = null, a = 0, l = null, r = e === H ? 0 : 1, u = !1, c = !1) {
  const d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: s,
    key: s && zr(s),
    ref: s && Nn(s),
    scopeId: ir,
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
    ctx: Dt
  };
  return c ? (Il(d, o), r & 128 && e.normalize(d)) : o && (d.shapeFlag |= $t(o) ? 8 : 16), rn > 0 && // avoid a block node from tracking itself
  !u && // has current parent block
  Zt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (d.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  d.patchFlag !== 32 && Zt.push(d), d;
}
const _ = md;
function md(e, s = null, o = null, a = 0, l = null, r = !1) {
  if ((!e || e === _r) && (e = zt), un(e)) {
    const c = Ys(
      e,
      s,
      !0
      /* mergeRef: true */
    );
    return o && Il(c, o), rn > 0 && !r && Zt && (c.shapeFlag & 6 ? Zt[Zt.indexOf(e)] = c : Zt.push(c)), c.patchFlag = -2, c;
  }
  if ($d(e) && (e = e.__vccOpts), s) {
    s = fd(s);
    let { class: c, style: d } = s;
    c && !$t(c) && (s.class = De(c)), gt(d) && (_l(d) && !Je(d) && (d = Et({}, d)), s.style = Ft(d));
  }
  const u = $t(e) ? 1 : Ur(e) ? 128 : ur(e) ? 64 : gt(e) ? 4 : Ze(e) ? 2 : 0;
  return t(
    e,
    s,
    o,
    a,
    l,
    u,
    r,
    !0
  );
}
function fd(e) {
  return e ? _l(e) || Mr(e) ? Et({}, e) : e : null;
}
function Ys(e, s, o = !1, a = !1) {
  const { props: l, ref: r, patchFlag: u, children: c, transition: d } = e, v = s ? vd(l || {}, s) : l, f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: v,
    key: v && zr(v),
    ref: s && s.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      o && r ? Je(r) ? r.concat(Nn(s)) : [r, Nn(s)] : Nn(s)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: c,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: s && e.type !== H ? u === -1 ? 16 : u | 16 : u,
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
    ssContent: e.ssContent && Ys(e.ssContent),
    ssFallback: e.ssFallback && Ys(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return d && a && co(
    f,
    d.clone(f)
  ), f;
}
function $(e = " ", s = 0) {
  return _(ra, null, e, s);
}
function h(e = "", s = !1) {
  return s ? (n(), L(zt, null, e)) : _(zt, null, e);
}
function _s(e) {
  return e == null || typeof e == "boolean" ? _(zt) : Je(e) ? _(
    H,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : un(e) ? js(e) : _(ra, null, String(e));
}
function js(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ys(e);
}
function Il(e, s) {
  let o = 0;
  const { shapeFlag: a } = e;
  if (s == null)
    s = null;
  else if (Je(s))
    o = 16;
  else if (typeof s == "object")
    if (a & 65) {
      const l = s.default;
      l && (l._c && (l._d = !1), Il(e, l()), l._c && (l._d = !0));
      return;
    } else {
      o = 32;
      const l = s._;
      !l && !Mr(s) ? s._ctx = Dt : l === 3 && Dt && (Dt.slots._ === 1 ? s._ = 1 : (s._ = 2, e.patchFlag |= 1024));
    }
  else Ze(s) ? (s = { default: s, _ctx: Dt }, o = 32) : (s = String(s), a & 64 ? (o = 16, s = [$(s)]) : o = 8);
  e.children = s, e.shapeFlag |= o;
}
function vd(...e) {
  const s = {};
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    for (const l in a)
      if (l === "class")
        s.class !== a.class && (s.class = De([s.class, a.class]));
      else if (l === "style")
        s.style = Ft([s.style, a.style]);
      else if (Qn(l)) {
        const r = s[l], u = a[l];
        u && r !== u && !(Je(r) && r.includes(u)) && (s[l] = r ? [].concat(r, u) : u);
      } else l !== "" && (s[l] = a[l]);
  }
  return s;
}
function ps(e, s, o, a = null) {
  vs(e, s, 7, [
    o,
    a
  ]);
}
const pd = Cr();
let gd = 0;
function hd(e, s, o) {
  const a = e.type, l = (s ? s.appContext : e.appContext) || pd, r = {
    uid: gd++,
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
    scope: new Wu(
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
    propsOptions: Rr(a, l),
    emitsOptions: Ir(a, l),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: yt,
    // inheritAttrs
    inheritAttrs: a.inheritAttrs,
    // state
    ctx: yt,
    data: yt,
    props: yt,
    attrs: yt,
    slots: yt,
    refs: yt,
    setupState: yt,
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
  return r.ctx = { _: r }, r.root = s ? s.root : r, r.emit = Kc.bind(null, r), e.ce && e.ce(r), r;
}
let Vt = null;
const El = () => Vt || Dt;
let jn, el;
{
  const e = ta(), s = (o, a) => {
    let l;
    return (l = e[o]) || (l = e[o] = []), l.push(a), (r) => {
      l.length > 1 ? l.forEach((u) => u(r)) : l[0](r);
    };
  };
  jn = s(
    "__VUE_INSTANCE_SETTERS__",
    (o) => Vt = o
  ), el = s(
    "__VUE_SSR_SETTERS__",
    (o) => cn = o
  );
}
const vn = (e) => {
  const s = Vt;
  return jn(e), e.scope.on(), () => {
    e.scope.off(), jn(s);
  };
}, ei = () => {
  Vt && Vt.scope.off(), jn(null);
};
function Vr(e) {
  return e.vnode.shapeFlag & 4;
}
let cn = !1;
function yd(e, s = !1, o = !1) {
  s && el(s);
  const { props: a, children: l } = e.vnode, r = Vr(e);
  ed(e, a, r, s), nd(e, l, o || s);
  const u = r ? wd(e, s) : void 0;
  return s && el(!1), u;
}
function wd(e, s) {
  const o = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Dc);
  const { setup: a } = o;
  if (a) {
    Ds();
    const l = e.setupContext = a.length > 1 ? kd(e) : null, r = vn(e), u = fn(
      a,
      e,
      0,
      [
        e.props,
        l
      ]
    ), c = Di(u);
    if (Os(), r(), (c || e.sp) && !$o(e) && hr(e), c) {
      if (u.then(ei, ei), s)
        return u.then((d) => {
          ti(e, d);
        }).catch((d) => {
          oa(d, e, 0);
        });
      e.asyncDep = u;
    } else
      ti(e, u);
  } else
    Fr(e);
}
function ti(e, s, o) {
  Ze(s) ? e.type.__ssrInlineRender ? e.ssrRender = s : e.render = s : gt(s) && (e.setupState = sr(s)), Fr(e);
}
function Fr(e, s, o) {
  const a = e.type;
  e.render || (e.render = a.render || bs);
  {
    const l = vn(e);
    Ds();
    try {
      Oc(e);
    } finally {
      Os(), l();
    }
  }
}
const _d = {
  get(e, s) {
    return Ut(e, "get", ""), e[s];
  }
};
function kd(e) {
  const s = (o) => {
    e.exposed = o || {};
  };
  return {
    attrs: new Proxy(e.attrs, _d),
    slots: e.slots,
    emit: e.emit,
    expose: s
  };
}
function ua(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(sr(cc(e.exposed)), {
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
function bd(e, s = !0) {
  return Ze(e) ? e.displayName || e.name : e.name || s && e.__name;
}
function $d(e) {
  return Ze(e) && "__vccOpts" in e;
}
const O = (e, s) => pc(e, s, cn);
function No(e, s, o) {
  try {
    Gn(-1);
    const a = arguments.length;
    return a === 2 ? gt(s) && !Je(s) ? un(s) ? _(e, null, [s]) : _(e, s) : _(e, null, s) : (a > 3 ? o = Array.prototype.slice.call(arguments, 2) : a === 3 && un(o) && (o = [o]), _(e, s, o));
  } finally {
    Gn(1);
  }
}
const Cd = "3.5.25";
/**
* @vue/runtime-dom v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let tl;
const si = typeof window < "u" && window.trustedTypes;
if (si)
  try {
    tl = /* @__PURE__ */ si.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Br = tl ? (e) => tl.createHTML(e) : (e) => e, xd = "http://www.w3.org/2000/svg", Sd = "http://www.w3.org/1998/Math/MathML", Es = typeof document < "u" ? document : null, oi = Es && /* @__PURE__ */ Es.createElement("template"), Id = {
  insert: (e, s, o) => {
    s.insertBefore(e, o || null);
  },
  remove: (e) => {
    const s = e.parentNode;
    s && s.removeChild(e);
  },
  createElement: (e, s, o, a) => {
    const l = s === "svg" ? Es.createElementNS(xd, e) : s === "mathml" ? Es.createElementNS(Sd, e) : o ? Es.createElement(e, { is: o }) : Es.createElement(e);
    return e === "select" && a && a.multiple != null && l.setAttribute("multiple", a.multiple), l;
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
  insertStaticContent(e, s, o, a, l, r) {
    const u = o ? o.previousSibling : s.lastChild;
    if (l && (l === r || l.nextSibling))
      for (; s.insertBefore(l.cloneNode(!0), o), !(l === r || !(l = l.nextSibling)); )
        ;
    else {
      oi.innerHTML = Br(
        a === "svg" ? `<svg>${e}</svg>` : a === "mathml" ? `<math>${e}</math>` : e
      );
      const c = oi.content;
      if (a === "svg" || a === "mathml") {
        const d = c.firstChild;
        for (; d.firstChild; )
          c.appendChild(d.firstChild);
        c.removeChild(d);
      }
      s.insertBefore(c, o);
    }
    return [
      // first
      u ? u.nextSibling : s.firstChild,
      // last
      o ? o.previousSibling : s.lastChild
    ];
  }
}, Fs = "transition", Uo = "animation", To = Symbol("_vtc"), Wr = {
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
}, Gr = /* @__PURE__ */ Et(
  {},
  fr,
  Wr
), Ed = (e) => (e.displayName = "Transition", e.props = Gr, e), Td = /* @__PURE__ */ Ed(
  (e, { slots: s }) => No($c, jr(e), s)
), so = (e, s = []) => {
  Je(e) ? e.forEach((o) => o(...s)) : e && e(...s);
}, ni = (e) => e ? Je(e) ? e.some((s) => s.length > 1) : e.length > 1 : !1;
function jr(e) {
  const s = {};
  for (const ie in e)
    ie in Wr || (s[ie] = e[ie]);
  if (e.css === !1)
    return s;
  const {
    name: o = "v",
    type: a,
    duration: l,
    enterFromClass: r = `${o}-enter-from`,
    enterActiveClass: u = `${o}-enter-active`,
    enterToClass: c = `${o}-enter-to`,
    appearFromClass: d = r,
    appearActiveClass: v = u,
    appearToClass: f = c,
    leaveFromClass: p = `${o}-leave-from`,
    leaveActiveClass: w = `${o}-leave-active`,
    leaveToClass: y = `${o}-leave-to`
  } = e, k = Md(l), x = k && k[0], C = k && k[1], {
    onBeforeEnter: S,
    onEnter: U,
    onEnterCancelled: I,
    onLeave: E,
    onLeaveCancelled: N,
    onBeforeAppear: z = S,
    onAppear: q = U,
    onAppearCancelled: D = I
  } = s, G = (ie, ge, oe, X) => {
    ie._enterCancelled = X, Bs(ie, ge ? f : c), Bs(ie, ge ? v : u), oe && oe();
  }, Z = (ie, ge) => {
    ie._isLeaving = !1, Bs(ie, p), Bs(ie, y), Bs(ie, w), ge && ge();
  }, te = (ie) => (ge, oe) => {
    const X = ie ? q : U, de = () => G(ge, ie, oe);
    so(X, [ge, de]), ai(() => {
      Bs(ge, ie ? d : r), hs(ge, ie ? f : c), ni(X) || li(ge, a, x, de);
    });
  };
  return Et(s, {
    onBeforeEnter(ie) {
      so(S, [ie]), hs(ie, r), hs(ie, u);
    },
    onBeforeAppear(ie) {
      so(z, [ie]), hs(ie, d), hs(ie, v);
    },
    onEnter: te(!1),
    onAppear: te(!0),
    onLeave(ie, ge) {
      ie._isLeaving = !0;
      const oe = () => Z(ie, ge);
      hs(ie, p), ie._enterCancelled ? (hs(ie, w), sl(ie)) : (sl(ie), hs(ie, w)), ai(() => {
        ie._isLeaving && (Bs(ie, p), hs(ie, y), ni(E) || li(ie, a, C, oe));
      }), so(E, [ie, oe]);
    },
    onEnterCancelled(ie) {
      G(ie, !1, void 0, !0), so(I, [ie]);
    },
    onAppearCancelled(ie) {
      G(ie, !0, void 0, !0), so(D, [ie]);
    },
    onLeaveCancelled(ie) {
      Z(ie), so(N, [ie]);
    }
  });
}
function Md(e) {
  if (e == null)
    return null;
  if (gt(e))
    return [Aa(e.enter), Aa(e.leave)];
  {
    const s = Aa(e);
    return [s, s];
  }
}
function Aa(e) {
  return Du(e);
}
function hs(e, s) {
  s.split(/\s+/).forEach((o) => o && e.classList.add(o)), (e[To] || (e[To] = /* @__PURE__ */ new Set())).add(s);
}
function Bs(e, s) {
  s.split(/\s+/).forEach((a) => a && e.classList.remove(a));
  const o = e[To];
  o && (o.delete(s), o.size || (e[To] = void 0));
}
function ai(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Pd = 0;
function li(e, s, o, a) {
  const l = e._endId = ++Pd, r = () => {
    l === e._endId && a();
  };
  if (o != null)
    return setTimeout(r, o);
  const { type: u, timeout: c, propCount: d } = Hr(e, s);
  if (!u)
    return a();
  const v = u + "end";
  let f = 0;
  const p = () => {
    e.removeEventListener(v, w), r();
  }, w = (y) => {
    y.target === e && ++f >= d && p();
  };
  setTimeout(() => {
    f < d && p();
  }, c + 1), e.addEventListener(v, w);
}
function Hr(e, s) {
  const o = window.getComputedStyle(e), a = (k) => (o[k] || "").split(", "), l = a(`${Fs}Delay`), r = a(`${Fs}Duration`), u = ii(l, r), c = a(`${Uo}Delay`), d = a(`${Uo}Duration`), v = ii(c, d);
  let f = null, p = 0, w = 0;
  s === Fs ? u > 0 && (f = Fs, p = u, w = r.length) : s === Uo ? v > 0 && (f = Uo, p = v, w = d.length) : (p = Math.max(u, v), f = p > 0 ? u > v ? Fs : Uo : null, w = f ? f === Fs ? r.length : d.length : 0);
  const y = f === Fs && /\b(?:transform|all)(?:,|$)/.test(
    a(`${Fs}Property`).toString()
  );
  return {
    type: f,
    timeout: p,
    propCount: w,
    hasTransform: y
  };
}
function ii(e, s) {
  for (; e.length < s.length; )
    e = e.concat(e);
  return Math.max(...s.map((o, a) => ri(o) + ri(e[a])));
}
function ri(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function sl(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Rd(e, s, o) {
  const a = e[To];
  a && (s = (s ? [s, ...a] : [...a]).join(" ")), s == null ? e.removeAttribute("class") : o ? e.setAttribute("class", s) : e.className = s;
}
const ui = Symbol("_vod"), Nd = Symbol("_vsh"), Ld = Symbol(""), Dd = /(?:^|;)\s*display\s*:/;
function Od(e, s, o) {
  const a = e.style, l = $t(o);
  let r = !1;
  if (o && !l) {
    if (s)
      if ($t(s))
        for (const u of s.split(";")) {
          const c = u.slice(0, u.indexOf(":")).trim();
          o[c] == null && Ln(a, c, "");
        }
      else
        for (const u in s)
          o[u] == null && Ln(a, u, "");
    for (const u in o)
      u === "display" && (r = !0), Ln(a, u, o[u]);
  } else if (l) {
    if (s !== o) {
      const u = a[Ld];
      u && (o += ";" + u), a.cssText = o, r = Dd.test(o);
    }
  } else s && e.removeAttribute("style");
  ui in e && (e[ui] = r ? a.display : "", e[Nd] && (a.display = "none"));
}
const ci = /\s*!important$/;
function Ln(e, s, o) {
  if (Je(o))
    o.forEach((a) => Ln(e, s, a));
  else if (o == null && (o = ""), s.startsWith("--"))
    e.setProperty(s, o);
  else {
    const a = Ud(e, s);
    ci.test(o) ? e.setProperty(
      Xs(a),
      o.replace(ci, ""),
      "important"
    ) : e[a] = o;
  }
}
const di = ["Webkit", "Moz", "ms"], za = {};
function Ud(e, s) {
  const o = za[s];
  if (o)
    return o;
  let a = ls(s);
  if (a !== "filter" && a in e)
    return za[s] = a;
  a = Zn(a);
  for (let l = 0; l < di.length; l++) {
    const r = di[l] + a;
    if (r in e)
      return za[s] = r;
  }
  return s;
}
const mi = "http://www.w3.org/1999/xlink";
function fi(e, s, o, a, l, r = Fu(s)) {
  a && s.startsWith("xlink:") ? o == null ? e.removeAttributeNS(mi, s.slice(6, s.length)) : e.setAttributeNS(mi, s, o) : o == null || r && !zi(o) ? e.removeAttribute(s) : e.setAttribute(
    s,
    r ? "" : ms(o) ? String(o) : o
  );
}
function vi(e, s, o, a, l) {
  if (s === "innerHTML" || s === "textContent") {
    o != null && (e[s] = s === "innerHTML" ? Br(o) : o);
    return;
  }
  const r = e.tagName;
  if (s === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const c = r === "OPTION" ? e.getAttribute("value") || "" : e.value, d = o == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(o);
    (c !== d || !("_value" in e)) && (e.value = d), o == null && e.removeAttribute(s), e._value = o;
    return;
  }
  let u = !1;
  if (o === "" || o == null) {
    const c = typeof e[s];
    c === "boolean" ? o = zi(o) : o == null && c === "string" ? (o = "", u = !0) : c === "number" && (o = 0, u = !0);
  }
  try {
    e[s] = o;
  } catch {
  }
  u && e.removeAttribute(l || s);
}
function Ns(e, s, o, a) {
  e.addEventListener(s, o, a);
}
function Ad(e, s, o, a) {
  e.removeEventListener(s, o, a);
}
const pi = Symbol("_vei");
function zd(e, s, o, a, l = null) {
  const r = e[pi] || (e[pi] = {}), u = r[s];
  if (a && u)
    u.value = a;
  else {
    const [c, d] = Vd(s);
    if (a) {
      const v = r[s] = Wd(
        a,
        l
      );
      Ns(e, c, v, d);
    } else u && (Ad(e, c, u, d), r[s] = void 0);
  }
}
const gi = /(?:Once|Passive|Capture)$/;
function Vd(e) {
  let s;
  if (gi.test(e)) {
    s = {};
    let a;
    for (; a = e.match(gi); )
      e = e.slice(0, e.length - a[0].length), s[a[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Xs(e.slice(2)), s];
}
let Va = 0;
const Fd = /* @__PURE__ */ Promise.resolve(), Bd = () => Va || (Fd.then(() => Va = 0), Va = Date.now());
function Wd(e, s) {
  const o = (a) => {
    if (!a._vts)
      a._vts = Date.now();
    else if (a._vts <= o.attached)
      return;
    vs(
      Gd(a, o.value),
      s,
      5,
      [a]
    );
  };
  return o.value = e, o.attached = Bd(), o;
}
function Gd(e, s) {
  if (Je(s)) {
    const o = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      o.call(e), e._stopped = !0;
    }, s.map(
      (a) => (l) => !l._stopped && a && a(l)
    );
  } else
    return s;
}
const hi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, jd = (e, s, o, a, l, r) => {
  const u = l === "svg";
  s === "class" ? Rd(e, a, u) : s === "style" ? Od(e, o, a) : Qn(s) ? cl(s) || zd(e, s, o, a, r) : (s[0] === "." ? (s = s.slice(1), !0) : s[0] === "^" ? (s = s.slice(1), !1) : Hd(e, s, a, u)) ? (vi(e, s, a), !e.tagName.includes("-") && (s === "value" || s === "checked" || s === "selected") && fi(e, s, a, u, r, s !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(s) || !$t(a)) ? vi(e, ls(s), a, r, s) : (s === "true-value" ? e._trueValue = a : s === "false-value" && (e._falseValue = a), fi(e, s, a, u));
};
function Hd(e, s, o, a) {
  if (a)
    return !!(s === "innerHTML" || s === "textContent" || s in e && hi(s) && Ze(o));
  if (s === "spellcheck" || s === "draggable" || s === "translate" || s === "autocorrect" || s === "sandbox" && e.tagName === "IFRAME" || s === "form" || s === "list" && e.tagName === "INPUT" || s === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (s === "width" || s === "height") {
    const l = e.tagName;
    if (l === "IMG" || l === "VIDEO" || l === "CANVAS" || l === "SOURCE")
      return !1;
  }
  return hi(s) && $t(o) ? !1 : s in e;
}
const qr = /* @__PURE__ */ new WeakMap(), Kr = /* @__PURE__ */ new WeakMap(), Hn = Symbol("_moveCb"), yi = Symbol("_enterCb"), qd = (e) => (delete e.props.mode, e), Kd = /* @__PURE__ */ qd({
  name: "TransitionGroup",
  props: /* @__PURE__ */ Et({}, Gr, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: s }) {
    const o = El(), a = mr();
    let l, r;
    return wr(() => {
      if (!l.length)
        return;
      const u = e.moveClass || `${e.name || "v"}-move`;
      if (!Zd(
        l[0].el,
        o.vnode.el,
        u
      )) {
        l = [];
        return;
      }
      l.forEach(Yd), l.forEach(Qd);
      const c = l.filter(Xd);
      sl(o.vnode.el), c.forEach((d) => {
        const v = d.el, f = v.style;
        hs(v, u), f.transform = f.webkitTransform = f.transitionDuration = "";
        const p = v[Hn] = (w) => {
          w && w.target !== v || (!w || w.propertyName.endsWith("transform")) && (v.removeEventListener("transitionend", p), v[Hn] = null, Bs(v, u));
        };
        v.addEventListener("transitionend", p);
      }), l = [];
    }), () => {
      const u = lt(e), c = jr(u);
      let d = u.tag || H;
      if (l = [], r)
        for (let v = 0; v < r.length; v++) {
          const f = r[v];
          f.el && f.el instanceof Element && (l.push(f), co(
            f,
            ln(
              f,
              c,
              a,
              o
            )
          ), qr.set(f, {
            left: f.el.offsetLeft,
            top: f.el.offsetTop
          }));
        }
      r = s.default ? bl(s.default()) : [];
      for (let v = 0; v < r.length; v++) {
        const f = r[v];
        f.key != null && co(
          f,
          ln(f, c, a, o)
        );
      }
      return _(d, null, r);
    };
  }
}), Jd = Kd;
function Yd(e) {
  const s = e.el;
  s[Hn] && s[Hn](), s[yi] && s[yi]();
}
function Qd(e) {
  Kr.set(e, {
    left: e.el.offsetLeft,
    top: e.el.offsetTop
  });
}
function Xd(e) {
  const s = qr.get(e), o = Kr.get(e), a = s.left - o.left, l = s.top - o.top;
  if (a || l) {
    const r = e.el.style;
    return r.transform = r.webkitTransform = `translate(${a}px,${l}px)`, r.transitionDuration = "0s", e;
  }
}
function Zd(e, s, o) {
  const a = e.cloneNode(), l = e[To];
  l && l.forEach((c) => {
    c.split(/\s+/).forEach((d) => d && a.classList.remove(d));
  }), o.split(/\s+/).forEach((c) => c && a.classList.add(c)), a.style.display = "none";
  const r = s.nodeType === 1 ? s : s.parentNode;
  r.appendChild(a);
  const { hasTransform: u } = Hr(a);
  return r.removeChild(a), u;
}
const Qs = (e) => {
  const s = e.props["onUpdate:modelValue"] || !1;
  return Je(s) ? (o) => Mn(s, o) : s;
};
function em(e) {
  e.target.composing = !0;
}
function wi(e) {
  const s = e.target;
  s.composing && (s.composing = !1, s.dispatchEvent(new Event("input")));
}
const as = Symbol("_assign");
function _i(e, s, o) {
  return s && (e = e.trim()), o && (e = ea(e)), e;
}
const xo = {
  created(e, { modifiers: { lazy: s, trim: o, number: a } }, l) {
    e[as] = Qs(l);
    const r = a || l.props && l.props.type === "number";
    Ns(e, s ? "change" : "input", (u) => {
      u.target.composing || e[as](_i(e.value, o, r));
    }), (o || r) && Ns(e, "change", () => {
      e.value = _i(e.value, o, r);
    }), s || (Ns(e, "compositionstart", em), Ns(e, "compositionend", wi), Ns(e, "change", wi));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: s }) {
    e.value = s ?? "";
  },
  beforeUpdate(e, { value: s, oldValue: o, modifiers: { lazy: a, trim: l, number: r } }, u) {
    if (e[as] = Qs(u), e.composing) return;
    const c = (r || e.type === "number") && !/^0\d/.test(e.value) ? ea(e.value) : e.value, d = s ?? "";
    c !== d && (document.activeElement === e && e.type !== "range" && (a && s === o || l && e.value.trim() === d) || (e.value = d));
  }
}, qn = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, s, o) {
    e[as] = Qs(o), Ns(e, "change", () => {
      const a = e._modelValue, l = Mo(e), r = e.checked, u = e[as];
      if (Je(a)) {
        const c = fl(a, l), d = c !== -1;
        if (r && !d)
          u(a.concat(l));
        else if (!r && d) {
          const v = [...a];
          v.splice(c, 1), u(v);
        }
      } else if (Po(a)) {
        const c = new Set(a);
        r ? c.add(l) : c.delete(l), u(c);
      } else
        u(Jr(e, r));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: ki,
  beforeUpdate(e, s, o) {
    e[as] = Qs(o), ki(e, s, o);
  }
};
function ki(e, { value: s, oldValue: o }, a) {
  e._modelValue = s;
  let l;
  if (Je(s))
    l = fl(s, a.props.value) > -1;
  else if (Po(s))
    l = s.has(a.props.value);
  else {
    if (s === o) return;
    l = uo(s, Jr(e, !0));
  }
  e.checked !== l && (e.checked = l);
}
const Dn = {
  created(e, { value: s }, o) {
    e.checked = uo(s, o.props.value), e[as] = Qs(o), Ns(e, "change", () => {
      e[as](Mo(e));
    });
  },
  beforeUpdate(e, { value: s, oldValue: o }, a) {
    e[as] = Qs(a), s !== o && (e.checked = uo(s, a.props.value));
  }
}, So = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: s, modifiers: { number: o } }, a) {
    const l = Po(s);
    Ns(e, "change", () => {
      const r = Array.prototype.filter.call(e.options, (u) => u.selected).map(
        (u) => o ? ea(Mo(u)) : Mo(u)
      );
      e[as](
        e.multiple ? l ? new Set(r) : r : r[0]
      ), e._assigning = !0, Rt(() => {
        e._assigning = !1;
      });
    }), e[as] = Qs(a);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: s }) {
    bi(e, s);
  },
  beforeUpdate(e, s, o) {
    e[as] = Qs(o);
  },
  updated(e, { value: s }) {
    e._assigning || bi(e, s);
  }
};
function bi(e, s) {
  const o = e.multiple, a = Je(s);
  if (!(o && !a && !Po(s))) {
    for (let l = 0, r = e.options.length; l < r; l++) {
      const u = e.options[l], c = Mo(u);
      if (o)
        if (a) {
          const d = typeof c;
          d === "string" || d === "number" ? u.selected = s.some((v) => String(v) === String(c)) : u.selected = fl(s, c) > -1;
        } else
          u.selected = s.has(c);
      else if (uo(Mo(u), s)) {
        e.selectedIndex !== l && (e.selectedIndex = l);
        return;
      }
    }
    !o && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Mo(e) {
  return "_value" in e ? e._value : e.value;
}
function Jr(e, s) {
  const o = s ? "_trueValue" : "_falseValue";
  return o in e ? e[o] : s;
}
const tm = ["ctrl", "shift", "alt", "meta"], sm = {
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
  exact: (e, s) => tm.some((o) => e[`${o}Key`] && !s.includes(o))
}, st = (e, s) => {
  const o = e._withMods || (e._withMods = {}), a = s.join(".");
  return o[a] || (o[a] = ((l, ...r) => {
    for (let u = 0; u < s.length; u++) {
      const c = sm[s[u]];
      if (c && c(l, s)) return;
    }
    return e(l, ...r);
  }));
}, om = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, es = (e, s) => {
  const o = e._withKeys || (e._withKeys = {}), a = s.join(".");
  return o[a] || (o[a] = ((l) => {
    if (!("key" in l))
      return;
    const r = Xs(l.key);
    if (s.some(
      (u) => u === r || om[u] === r
    ))
      return e(l);
  }));
}, nm = /* @__PURE__ */ Et({ patchProp: jd }, Id);
let $i;
function am() {
  return $i || ($i = ld(nm));
}
const pn = ((...e) => {
  const s = am().createApp(...e), { mount: o } = s;
  return s.mount = (a) => {
    const l = im(a);
    if (!l) return;
    const r = s._component;
    !Ze(r) && !r.render && !r.template && (r.template = l.innerHTML), l.nodeType === 1 && (l.textContent = "");
    const u = o(l, !1, lm(l));
    return l instanceof Element && (l.removeAttribute("v-cloak"), l.setAttribute("data-v-app", "")), u;
  }, s;
});
function lm(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function im(e) {
  return $t(e) ? document.querySelector(e) : e;
}
const rm = { class: "panel-layout" }, um = {
  key: 0,
  class: "panel-layout-header"
}, cm = {
  key: 1,
  class: "panel-layout-search"
}, dm = { class: "panel-layout-content" }, mm = {
  key: 2,
  class: "panel-layout-footer"
}, fm = /* @__PURE__ */ xe({
  __name: "PanelLayout",
  setup(e) {
    return (s, o) => (n(), i("div", rm, [
      s.$slots.header ? (n(), i("div", um, [
        et(s.$slots, "header", {}, void 0)
      ])) : h("", !0),
      s.$slots.search ? (n(), i("div", cm, [
        et(s.$slots, "search", {}, void 0)
      ])) : h("", !0),
      t("div", dm, [
        et(s.$slots, "content", {}, void 0)
      ]),
      s.$slots.footer ? (n(), i("div", mm, [
        et(s.$slots, "footer", {}, void 0)
      ])) : h("", !0)
    ]));
  }
}), Se = (e, s) => {
  const o = e.__vccOpts || e;
  for (const [a, l] of s)
    o[a] = l;
  return o;
}, Tt = /* @__PURE__ */ Se(fm, [["__scopeId", "data-v-21565df9"]]), vm = {
  key: 0,
  class: "panel-title-prefix"
}, pm = {
  key: 1,
  class: "panel-title-prefix-theme"
}, gm = /* @__PURE__ */ xe({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(e) {
    return (s, o) => (n(), L($l(`h${e.level}`), {
      class: De(["panel-title", e.variant])
    }, {
      default: g(() => [
        e.showPrefix ? (n(), i("span", vm, m(e.prefix), 1)) : (n(), i("span", pm)),
        et(s.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), hm = /* @__PURE__ */ Se(gm, [["__scopeId", "data-v-c3875efc"]]), ym = ["title"], wm = ["width", "height"], _m = /* @__PURE__ */ xe({
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
      ])], 8, wm))
    ], 8, ym));
  }
}), Yr = /* @__PURE__ */ Se(_m, [["__scopeId", "data-v-6fc7f16d"]]), km = { class: "header-left" }, bm = {
  key: 0,
  class: "header-actions"
}, $m = /* @__PURE__ */ xe({
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
      class: De(["panel-header", { stacked: e.stacked }])
    }, [
      t("div", km, [
        _(hm, { "show-prefix": e.showPrefix }, {
          default: g(() => [
            $(m(e.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        e.showInfo ? (n(), L(Yr, {
          key: 0,
          onClick: o[0] || (o[0] = (a) => s.$emit("info-click"))
        })) : h("", !0)
      ]),
      s.$slots.actions ? (n(), i("div", bm, [
        et(s.$slots, "actions", {}, void 0)
      ])) : h("", !0)
    ], 2));
  }
}), Mt = /* @__PURE__ */ Se($m, [["__scopeId", "data-v-55a62cd6"]]), Cm = {
  key: 0,
  class: "section-title-count"
}, xm = {
  key: 1,
  class: "section-title-icon"
}, Sm = /* @__PURE__ */ xe({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e) {
    return (s, o) => (n(), L($l(`h${e.level}`), {
      class: De(["section-title", { clickable: e.clickable }]),
      onClick: o[0] || (o[0] = (a) => e.clickable && s.$emit("click"))
    }, {
      default: g(() => [
        et(s.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (n(), i("span", Cm, "(" + m(e.count) + ")", 1)) : h("", !0),
        e.clickable ? (n(), i("span", xm, m(e.expanded ? "▼" : "▸"), 1)) : h("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), os = /* @__PURE__ */ Se(Sm, [["__scopeId", "data-v-559361eb"]]), Im = { class: "status-grid" }, Em = { class: "status-grid__columns" }, Tm = { class: "status-grid__column" }, Mm = { class: "status-grid__title" }, Pm = { class: "status-grid__column status-grid__column--right" }, Rm = { class: "status-grid__title" }, Nm = {
  key: 0,
  class: "status-grid__footer"
}, Lm = /* @__PURE__ */ xe({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(e) {
    return (s, o) => (n(), i("div", Im, [
      t("div", Em, [
        t("div", Tm, [
          t("h4", Mm, m(e.leftTitle), 1),
          et(s.$slots, "left", {}, void 0)
        ]),
        t("div", Pm, [
          t("h4", Rm, m(e.rightTitle), 1),
          et(s.$slots, "right", {}, void 0)
        ])
      ]),
      s.$slots.footer ? (n(), i("div", Nm, [
        et(s.$slots, "footer", {}, void 0)
      ])) : h("", !0)
    ]));
  }
}), Dm = /* @__PURE__ */ Se(Lm, [["__scopeId", "data-v-73b7ba3f"]]), Om = {
  key: 0,
  class: "status-item__icon"
}, Um = {
  key: 1,
  class: "status-item__count"
}, Am = { class: "status-item__label" }, zm = /* @__PURE__ */ xe({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(e) {
    const s = e, o = O(() => `status-item--${s.variant}`);
    return (a, l) => (n(), i("div", {
      class: De(["status-item", o.value, { "is-separator": e.separator }])
    }, [
      e.icon ? (n(), i("span", Om, m(e.icon), 1)) : h("", !0),
      e.count !== void 0 ? (n(), i("span", Um, m(e.count), 1)) : h("", !0),
      t("span", Am, m(e.label), 1)
    ], 2));
  }
}), gs = /* @__PURE__ */ Se(zm, [["__scopeId", "data-v-6f929183"]]), Vm = { class: "issue-card__header" }, Fm = { class: "issue-card__icon" }, Bm = { class: "issue-card__title" }, Wm = {
  key: 0,
  class: "issue-card__content"
}, Gm = {
  key: 0,
  class: "issue-card__description"
}, jm = {
  key: 1,
  class: "issue-card__items"
}, Hm = {
  key: 2,
  class: "issue-card__actions"
}, qm = /* @__PURE__ */ xe({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(e) {
    const s = e, o = O(() => `issue-card--${s.severity}`);
    return (a, l) => (n(), i("div", {
      class: De(["issue-card", o.value])
    }, [
      t("div", Vm, [
        t("span", Fm, m(e.icon), 1),
        t("h4", Bm, m(e.title), 1)
      ]),
      a.$slots.default || e.description ? (n(), i("div", Wm, [
        e.description ? (n(), i("p", Gm, m(e.description), 1)) : h("", !0),
        et(a.$slots, "default", {}, void 0)
      ])) : h("", !0),
      e.items && e.items.length ? (n(), i("div", jm, [
        (n(!0), i(H, null, _e(e.items, (r, u) => (n(), i("div", {
          key: u,
          class: "issue-card__item"
        }, [
          l[0] || (l[0] = t("span", { class: "issue-card__bullet" }, "•", -1)),
          t("span", null, m(r), 1)
        ]))), 128))
      ])) : h("", !0),
      a.$slots.actions ? (n(), i("div", Hm, [
        et(a.$slots, "actions", {}, void 0)
      ])) : h("", !0)
    ], 2));
  }
}), cs = /* @__PURE__ */ Se(qm, [["__scopeId", "data-v-df6aa348"]]), Km = ["type", "disabled"], Jm = {
  key: 0,
  class: "spinner"
}, Ym = /* @__PURE__ */ xe({
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
      class: De(["action-btn", e.variant, e.size, { loading: e.loading }]),
      onClick: o[0] || (o[0] = (a) => s.$emit("click", a))
    }, [
      e.loading ? (n(), i("span", Jm)) : h("", !0),
      e.loading ? h("", !0) : et(s.$slots, "default", { key: 1 }, void 0)
    ], 10, Km));
  }
}), Ce = /* @__PURE__ */ Se(Ym, [["__scopeId", "data-v-772abe47"]]), Qm = { class: "empty-state" }, Xm = {
  key: 0,
  class: "empty-icon"
}, Zm = { class: "empty-message" }, ef = /* @__PURE__ */ xe({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(e) {
    return (s, o) => (n(), i("div", Qm, [
      e.icon ? (n(), i("div", Xm, m(e.icon), 1)) : h("", !0),
      t("p", Zm, m(e.message), 1),
      e.actionLabel ? (n(), L(Ce, {
        key: 1,
        variant: e.actionVariant || "secondary",
        size: "sm",
        onClick: o[0] || (o[0] = (a) => s.$emit("action"))
      }, {
        default: g(() => [
          $(m(e.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : h("", !0)
    ]));
  }
}), is = /* @__PURE__ */ Se(ef, [["__scopeId", "data-v-4466284f"]]), tf = /* @__PURE__ */ xe({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(e) {
    return (s, o) => (n(), i("span", {
      class: De(["detail-label"]),
      style: Ft({ minWidth: e.minWidth })
    }, [
      et(s.$slots, "default", {}, void 0)
    ], 4));
  }
}), On = /* @__PURE__ */ Se(tf, [["__scopeId", "data-v-75e9eeb8"]]), sf = /* @__PURE__ */ xe({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (s, o) => (n(), i("span", {
      class: De(["detail-value", e.variant, { mono: e.mono, truncate: e.truncate }])
    }, [
      et(s.$slots, "default", {}, void 0)
    ], 2));
  }
}), ol = /* @__PURE__ */ Se(sf, [["__scopeId", "data-v-2f186e4c"]]), of = { class: "detail-row" }, nf = /* @__PURE__ */ xe({
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
    return (s, o) => (n(), i("div", of, [
      _(On, { "min-width": e.labelMinWidth }, {
        default: g(() => [
          $(m(e.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      e.value ? (n(), L(ol, {
        key: 0,
        mono: e.mono,
        variant: e.valueVariant,
        truncate: e.truncate
      }, {
        default: g(() => [
          $(m(e.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : et(s.$slots, "value", { key: 1 }, void 0)
    ]));
  }
}), _t = /* @__PURE__ */ Se(nf, [["__scopeId", "data-v-ef15664a"]]), af = { class: "modal-header" }, lf = { class: "modal-body" }, rf = { class: "status-section" }, uf = {
  key: 0,
  class: "status-section"
}, cf = { class: "section-header-row" }, df = {
  key: 0,
  class: "workflow-group"
}, mf = { class: "workflow-group-header" }, ff = { class: "workflow-group-title" }, vf = { class: "workflow-list" }, pf = { class: "workflow-name" }, gf = { class: "workflow-issue" }, hf = {
  key: 1,
  class: "workflow-group"
}, yf = { class: "workflow-group-header" }, wf = { class: "workflow-group-title" }, _f = { class: "workflow-list" }, kf = { class: "workflow-name" }, bf = { class: "workflow-issue" }, $f = {
  key: 2,
  class: "workflow-group"
}, Cf = { class: "workflow-group-header" }, xf = { class: "workflow-group-title" }, Sf = { class: "workflow-list" }, If = { class: "workflow-name" }, Ef = {
  key: 3,
  class: "workflow-group"
}, Tf = { class: "workflow-group-header" }, Mf = { class: "workflow-group-title" }, Pf = { class: "workflow-list" }, Rf = { class: "workflow-name" }, Nf = {
  key: 4,
  class: "workflow-group"
}, Lf = { class: "workflow-group-header" }, Df = { class: "workflow-group-title" }, Of = { class: "workflow-list" }, Uf = { class: "workflow-name" }, Af = {
  key: 5,
  class: "workflow-group"
}, zf = { class: "workflow-group-title" }, Vf = { class: "expand-icon" }, Ff = {
  key: 0,
  class: "workflow-list"
}, Bf = { class: "workflow-name" }, Wf = {
  key: 1,
  class: "status-section"
}, Gf = {
  key: 0,
  class: "change-group"
}, jf = { class: "change-group-header" }, Hf = { class: "change-group-title" }, qf = { class: "change-list" }, Kf = { class: "node-name" }, Jf = {
  key: 0,
  class: "dev-badge"
}, Yf = {
  key: 1,
  class: "change-group"
}, Qf = { class: "change-group-header" }, Xf = { class: "change-group-title" }, Zf = { class: "change-list" }, ev = { class: "node-name" }, tv = {
  key: 0,
  class: "dev-badge"
}, sv = {
  key: 2,
  class: "change-group"
}, ov = { class: "change-list" }, nv = { class: "change-item" }, av = { class: "node-name" }, lv = {
  key: 3,
  class: "change-group"
}, iv = {
  key: 2,
  class: "status-section"
}, rv = { class: "section-header-row" }, uv = {
  key: 0,
  class: "drift-item"
}, cv = { class: "drift-list" }, dv = {
  key: 0,
  class: "drift-list-more"
}, mv = {
  key: 1,
  class: "drift-item"
}, fv = { class: "drift-list" }, vv = {
  key: 0,
  class: "drift-list-more"
}, pv = {
  key: 2,
  class: "drift-item"
}, gv = { class: "drift-list" }, hv = { class: "version-actual" }, yv = { class: "version-expected" }, wv = {
  key: 0,
  class: "drift-list-more"
}, _v = {
  key: 3,
  class: "drift-item"
}, kv = { class: "repair-action" }, bv = {
  key: 3,
  class: "status-section"
}, $v = { class: "info-box" }, Cv = { class: "drift-list" }, xv = {
  key: 0,
  class: "drift-list-more"
}, Sv = {
  key: 4,
  class: "status-section"
}, Iv = { class: "warning-box" }, Ev = {
  key: 5,
  class: "empty-state-inline"
}, Tv = { class: "modal-actions" }, Mv = /* @__PURE__ */ xe({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {},
    isRepairing: { type: Boolean }
  },
  emits: ["close", "navigate-workflows", "navigate-nodes", "repair"],
  setup(e) {
    const s = e, o = b(!1);
    ot(() => {
      console.log("StatusDetailModal mounted, initial show value:", s.show);
    }), kt(() => s.show, (w, y) => {
      console.log("StatusDetailModal show prop changed from", y, "to", w);
    }, { immediate: !0 });
    const a = O(() => {
      var w, y, k;
      return ((k = (y = (w = s.status) == null ? void 0 : w.workflows) == null ? void 0 : y.analyzed) == null ? void 0 : k.filter(
        (x) => x.status === "broken" && x.sync_state === "synced"
      )) || [];
    }), l = O(() => {
      var w, y, k;
      return ((k = (y = (w = s.status) == null ? void 0 : w.workflows) == null ? void 0 : y.analyzed) == null ? void 0 : k.filter(
        (x) => x.status === "broken" && x.sync_state !== "synced"
      )) || [];
    }), r = O(() => {
      var w, y, k;
      return ((k = (y = (w = s.status) == null ? void 0 : w.workflows) == null ? void 0 : y.synced) == null ? void 0 : k.filter((x) => {
        var S, U, I;
        const C = (I = (U = (S = s.status) == null ? void 0 : S.workflows) == null ? void 0 : U.analyzed) == null ? void 0 : I.find((E) => E.name === x);
        return !C || C.status !== "broken";
      })) || [];
    }), u = O(() => {
      var w, y, k, x, C;
      return (w = s.status) != null && w.workflows ? (((y = s.status.workflows.new) == null ? void 0 : y.length) ?? 0) > 0 || (((k = s.status.workflows.modified) == null ? void 0 : k.length) ?? 0) > 0 || (((x = s.status.workflows.deleted) == null ? void 0 : x.length) ?? 0) > 0 || (((C = s.status.workflows.synced) == null ? void 0 : C.length) ?? 0) > 0 : !1;
    }), c = O(() => {
      var y, k, x;
      const w = (y = s.status) == null ? void 0 : y.git_changes;
      return w ? (((k = w.nodes_added) == null ? void 0 : k.length) ?? 0) > 0 || (((x = w.nodes_removed) == null ? void 0 : x.length) ?? 0) > 0 || w.workflow_changes || w.has_other_changes : !1;
    }), d = O(() => {
      var w, y, k, x, C, S;
      return !u.value && !c.value && ((y = (w = s.status) == null ? void 0 : w.comparison) == null ? void 0 : y.is_synced) && (((k = s.status) == null ? void 0 : k.missing_models_count) ?? 0) === 0 && (((S = (C = (x = s.status) == null ? void 0 : x.comparison) == null ? void 0 : C.disabled_nodes) == null ? void 0 : S.length) ?? 0) === 0;
    }), v = O(() => {
      var y, k;
      const w = (k = (y = s.status) == null ? void 0 : y.git_changes) == null ? void 0 : k.workflow_changes;
      return w ? typeof w == "number" ? w : Object.keys(w).length : 0;
    });
    function f(w) {
      return typeof w == "string" ? w : w.name;
    }
    function p(w) {
      return typeof w == "object" && w.is_development === !0;
    }
    return (w, y) => {
      var k, x, C, S, U, I, E, N, z, q, D, G, Z, te, ie, ge, oe, X, de, Ne, le, pe;
      return n(), L(Ot, { to: "body" }, [
        e.show ? (n(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: y[7] || (y[7] = (me) => w.$emit("close"))
        }, [
          t("div", {
            class: "modal-content",
            onClick: y[6] || (y[6] = st(() => {
            }, ["stop"]))
          }, [
            t("div", af, [
              y[8] || (y[8] = t("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              t("button", {
                class: "modal-close",
                onClick: y[0] || (y[0] = (me) => w.$emit("close"))
              }, "✕")
            ]),
            t("div", lf, [
              t("div", rf, [
                _(os, { level: "4" }, {
                  default: g(() => [...y[9] || (y[9] = [
                    $("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                _(_t, {
                  label: "Current Branch:",
                  value: e.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              u.value ? (n(), i("div", uf, [
                t("div", cf, [
                  _(os, { level: "4" }, {
                    default: g(() => [...y[10] || (y[10] = [
                      $("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  t("button", {
                    class: "link-btn",
                    onClick: y[1] || (y[1] = (me) => w.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                a.value.length ? (n(), i("div", df, [
                  t("div", mf, [
                    y[11] || (y[11] = t("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    t("span", ff, "BROKEN (COMMITTED) (" + m(a.value.length) + ")", 1)
                  ]),
                  t("div", vf, [
                    (n(!0), i(H, null, _e(a.value, (me) => (n(), i("div", {
                      key: me.name,
                      class: "workflow-item"
                    }, [
                      t("span", pf, m(me.name), 1),
                      t("span", gf, m(me.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                l.value.length ? (n(), i("div", hf, [
                  t("div", yf, [
                    y[12] || (y[12] = t("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    t("span", wf, "BROKEN (UNCOMMITTED) (" + m(l.value.length) + ")", 1)
                  ]),
                  t("div", _f, [
                    (n(!0), i(H, null, _e(l.value, (me) => (n(), i("div", {
                      key: me.name,
                      class: "workflow-item"
                    }, [
                      t("span", kf, m(me.name), 1),
                      t("span", bf, m(me.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                (x = (k = e.status.workflows) == null ? void 0 : k.new) != null && x.length ? (n(), i("div", $f, [
                  t("div", Cf, [
                    y[13] || (y[13] = t("span", { class: "workflow-status-icon new" }, "●", -1)),
                    t("span", xf, "NEW (" + m(e.status.workflows.new.length) + ")", 1)
                  ]),
                  t("div", Sf, [
                    (n(!0), i(H, null, _e(e.status.workflows.new, (me) => (n(), i("div", {
                      key: me,
                      class: "workflow-item"
                    }, [
                      t("span", If, m(me), 1)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                (S = (C = e.status.workflows) == null ? void 0 : C.modified) != null && S.length ? (n(), i("div", Ef, [
                  t("div", Tf, [
                    y[14] || (y[14] = t("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    t("span", Mf, "MODIFIED (" + m(e.status.workflows.modified.length) + ")", 1)
                  ]),
                  t("div", Pf, [
                    (n(!0), i(H, null, _e(e.status.workflows.modified, (me) => (n(), i("div", {
                      key: me,
                      class: "workflow-item"
                    }, [
                      t("span", Rf, m(me), 1)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                (I = (U = e.status.workflows) == null ? void 0 : U.deleted) != null && I.length ? (n(), i("div", Nf, [
                  t("div", Lf, [
                    y[15] || (y[15] = t("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    t("span", Df, "DELETED (" + m(e.status.workflows.deleted.length) + ")", 1)
                  ]),
                  t("div", Of, [
                    (n(!0), i(H, null, _e(e.status.workflows.deleted, (me) => (n(), i("div", {
                      key: me,
                      class: "workflow-item"
                    }, [
                      t("span", Uf, m(me), 1)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                r.value.length ? (n(), i("div", Af, [
                  t("div", {
                    class: "workflow-group-header clickable",
                    onClick: y[2] || (y[2] = (me) => o.value = !o.value)
                  }, [
                    y[16] || (y[16] = t("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    t("span", zf, "SYNCED (" + m(r.value.length) + ")", 1),
                    t("span", Vf, m(o.value ? "▼" : "▶"), 1)
                  ]),
                  o.value ? (n(), i("div", Ff, [
                    (n(!0), i(H, null, _e(r.value, (me) => (n(), i("div", {
                      key: me,
                      class: "workflow-item"
                    }, [
                      t("span", Bf, m(me), 1)
                    ]))), 128))
                  ])) : h("", !0)
                ])) : h("", !0)
              ])) : h("", !0),
              c.value ? (n(), i("div", Wf, [
                _(os, { level: "4" }, {
                  default: g(() => [...y[17] || (y[17] = [
                    $("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (N = (E = e.status.git_changes) == null ? void 0 : E.nodes_added) != null && N.length ? (n(), i("div", Gf, [
                  t("div", jf, [
                    y[18] || (y[18] = t("span", { class: "change-icon add" }, "+", -1)),
                    t("span", Hf, "NODES ADDED (" + m(e.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  t("div", qf, [
                    (n(!0), i(H, null, _e(e.status.git_changes.nodes_added, (me) => (n(), i("div", {
                      key: f(me),
                      class: "change-item"
                    }, [
                      t("span", Kf, m(f(me)), 1),
                      p(me) ? (n(), i("span", Jf, "dev")) : h("", !0)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                (q = (z = e.status.git_changes) == null ? void 0 : z.nodes_removed) != null && q.length ? (n(), i("div", Yf, [
                  t("div", Qf, [
                    y[19] || (y[19] = t("span", { class: "change-icon remove" }, "-", -1)),
                    t("span", Xf, "NODES REMOVED (" + m(e.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  t("div", Zf, [
                    (n(!0), i(H, null, _e(e.status.git_changes.nodes_removed, (me) => (n(), i("div", {
                      key: f(me),
                      class: "change-item"
                    }, [
                      t("span", ev, m(f(me)), 1),
                      p(me) ? (n(), i("span", tv, "dev")) : h("", !0)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                (D = e.status.git_changes) != null && D.workflow_changes ? (n(), i("div", sv, [
                  y[20] || (y[20] = t("div", { class: "change-group-header" }, [
                    t("span", { class: "change-icon modified" }, "~"),
                    t("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  t("div", ov, [
                    t("div", nv, [
                      t("span", av, m(v.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : h("", !0),
                (G = e.status.git_changes) != null && G.has_other_changes ? (n(), i("div", lv, [...y[21] || (y[21] = [
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
              (Z = e.status.comparison) != null && Z.is_synced ? h("", !0) : (n(), i("div", iv, [
                t("div", rv, [
                  _(os, { level: "4" }, {
                    default: g(() => [...y[22] || (y[22] = [
                      $("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  t("button", {
                    class: "link-btn",
                    onClick: y[3] || (y[3] = (me) => w.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                y[26] || (y[26] = t("div", { class: "warning-box" }, [
                  t("span", { class: "warning-icon" }, "⚠"),
                  t("span", null, "Environment needs repair")
                ], -1)),
                (ie = (te = e.status.comparison) == null ? void 0 : te.missing_nodes) != null && ie.length ? (n(), i("div", uv, [
                  _(_t, {
                    label: "Missing Nodes:",
                    value: `${e.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  t("div", cv, [
                    (n(!0), i(H, null, _e(e.status.comparison.missing_nodes.slice(0, 10), (me) => (n(), i("div", {
                      key: me,
                      class: "drift-list-item"
                    }, " - " + m(me), 1))), 128)),
                    e.status.comparison.missing_nodes.length > 10 ? (n(), i("div", dv, " ... and " + m(e.status.comparison.missing_nodes.length - 10) + " more ", 1)) : h("", !0)
                  ])
                ])) : h("", !0),
                (oe = (ge = e.status.comparison) == null ? void 0 : ge.extra_nodes) != null && oe.length ? (n(), i("div", mv, [
                  _(_t, {
                    label: "Extra Nodes:",
                    value: `${e.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  t("div", fv, [
                    (n(!0), i(H, null, _e(e.status.comparison.extra_nodes.slice(0, 10), (me) => (n(), i("div", {
                      key: me,
                      class: "drift-list-item"
                    }, " - " + m(me), 1))), 128)),
                    e.status.comparison.extra_nodes.length > 10 ? (n(), i("div", vv, " ... and " + m(e.status.comparison.extra_nodes.length - 10) + " more ", 1)) : h("", !0)
                  ])
                ])) : h("", !0),
                (de = (X = e.status.comparison) == null ? void 0 : X.version_mismatches) != null && de.length ? (n(), i("div", pv, [
                  _(_t, {
                    label: "Version Mismatches:",
                    value: `${e.status.comparison.version_mismatches.length} node(s) have wrong versions`
                  }, null, 8, ["value"]),
                  t("div", gv, [
                    (n(!0), i(H, null, _e(e.status.comparison.version_mismatches.slice(0, 10), (me) => (n(), i("div", {
                      key: me.name,
                      class: "drift-list-item version-mismatch"
                    }, [
                      $(m(me.name) + ": ", 1),
                      t("span", hv, m(me.actual), 1),
                      y[23] || (y[23] = $(" → ", -1)),
                      t("span", yv, m(me.expected), 1)
                    ]))), 128)),
                    e.status.comparison.version_mismatches.length > 10 ? (n(), i("div", wv, " ... and " + m(e.status.comparison.version_mismatches.length - 10) + " more ", 1)) : h("", !0)
                  ])
                ])) : h("", !0),
                ((Ne = e.status.comparison) == null ? void 0 : Ne.packages_in_sync) === !1 ? (n(), i("div", _v, [
                  _(_t, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ])) : h("", !0),
                t("div", kv, [
                  _(Ce, {
                    variant: "warning",
                    loading: e.isRepairing,
                    onClick: y[4] || (y[4] = (me) => w.$emit("repair"))
                  }, {
                    default: g(() => [...y[24] || (y[24] = [
                      $(" Repair Environment ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"]),
                  y[25] || (y[25] = t("p", { class: "help-text" }, "Syncs environment to match pyproject.toml manifest", -1))
                ])
              ])),
              (pe = (le = e.status.comparison) == null ? void 0 : le.disabled_nodes) != null && pe.length ? (n(), i("div", bv, [
                _(os, { level: "4" }, {
                  default: g(() => [...y[27] || (y[27] = [
                    $("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                t("div", $v, [
                  y[28] || (y[28] = t("span", { class: "info-icon" }, "ℹ", -1)),
                  t("span", null, m(e.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                t("div", Cv, [
                  (n(!0), i(H, null, _e(e.status.comparison.disabled_nodes.slice(0, 10), (me) => (n(), i("div", {
                    key: me,
                    class: "drift-list-item"
                  }, " • " + m(me), 1))), 128)),
                  e.status.comparison.disabled_nodes.length > 10 ? (n(), i("div", xv, " ... and " + m(e.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : h("", !0)
                ])
              ])) : h("", !0),
              (e.status.missing_models_count ?? 0) > 0 ? (n(), i("div", Sv, [
                _(os, { level: "4" }, {
                  default: g(() => [...y[29] || (y[29] = [
                    $("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                t("div", Iv, [
                  y[30] || (y[30] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("span", null, m(e.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                y[31] || (y[31] = t("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : h("", !0),
              d.value ? (n(), i("div", Ev, [...y[32] || (y[32] = [
                t("div", { class: "empty-icon" }, "✅", -1),
                t("div", { class: "empty-message" }, [
                  t("strong", null, "Environment is clean!"),
                  t("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : h("", !0)
            ]),
            t("div", Tv, [
              _(Ce, {
                variant: "secondary",
                onClick: y[5] || (y[5] = (me) => w.$emit("close"))
              }, {
                default: g(() => [...y[33] || (y[33] = [
                  $(" Close ", -1)
                ])]),
                _: 1
              })
            ])
          ])
        ])) : h("", !0)
      ]);
    };
  }
}), Pv = /* @__PURE__ */ Se(Mv, [["__scopeId", "data-v-e2b37122"]]), Rv = { class: "health-section-header" }, Nv = { class: "suggestions-content" }, Lv = { class: "suggestions-text" }, Dv = { style: { "margin-top": "var(--cg-space-3)" } }, Ov = {
  key: 1,
  class: "no-issues-text"
}, Uv = /* @__PURE__ */ xe({
  __name: "StatusSection",
  props: {
    status: {},
    setupState: { default: "managed" }
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes", "repair-missing-models", "repair-environment", "start-setup", "view-environments", "create-environment"],
  setup(e, { expose: s, emit: o }) {
    const a = e, l = b(!1), r = b(!1);
    function u() {
      l.value = !0;
    }
    function c() {
      l.value = !1, v("view-workflows");
    }
    function d() {
      l.value = !1, v("view-nodes");
    }
    const v = o, f = b(!1), p = b(!1);
    function w() {
      p.value = !0, v("repair-environment");
    }
    function y() {
      p.value = !1;
    }
    function k() {
      l.value = !1;
    }
    const x = O(() => {
      const M = a.status.workflows.analyzed || [], A = M.filter(
        (Q) => Q.unresolved_models_count > 0 || Q.ambiguous_models_count > 0
      );
      return A.length === 0 && a.status.missing_models_count > 0 ? M.filter((Q) => Q.sync_state === "synced") : A;
    });
    function C() {
      const M = x.value;
      M.length !== 0 && (f.value = !0, v("repair-missing-models", M.map((A) => A.name)));
    }
    function S() {
      f.value = !1;
    }
    s({ resetRepairingState: S, resetRepairingEnvironmentState: y, closeDetailModal: k });
    const U = O(() => a.status.workflows.new.length > 0 || a.status.workflows.modified.length > 0 || a.status.workflows.deleted.length > 0), I = O(() => a.status.has_changes), E = O(() => {
      const M = a.status.git_changes;
      return M.nodes_added.length > 0 || M.nodes_removed.length > 0 || M.workflow_changes;
    }), N = O(() => a.status.has_changes || U.value), z = O(() => Object.keys(a.status.git_changes.workflow_changes_detail).length), q = O(() => a.status.git_changes.has_other_changes), D = O(() => {
      var M;
      return ((M = a.status.workflows.analyzed) == null ? void 0 : M.filter((A) => A.status === "broken")) || [];
    }), G = O(() => {
      var M;
      return ((M = a.status.workflows.analyzed) == null ? void 0 : M.filter(
        (A) => A.has_path_sync_issues && !A.has_issues
      )) || [];
    }), Z = O(() => D.value.length > 0);
    function te(M) {
      const A = [
        />=\s*v?(\d+(?:\.\d+){1,3})/i,
        /requires\s+comfyui\s*v?(\d+(?:\.\d+){1,3})/i,
        /comfyui\s*v?(\d+(?:\.\d+){1,3})\+/i
      ];
      for (const Q of A) {
        const P = M.match(Q);
        if (P != null && P[1])
          return P[1];
      }
      return null;
    }
    function ie(M) {
      const A = M.map(te).filter((Q) => !!Q);
      return [...new Set(A)];
    }
    function ge(M) {
      if (M.length === 0) return "";
      if (M.length === 1) return ` (>= ${M[0]})`;
      const A = M.slice(0, 2).map((P) => `>= ${P}`).join(", "), Q = M.length > 2;
      return ` (${A}${Q ? ", ..." : ""})`;
    }
    function oe(M) {
      return M.replace(/uninstallable node mappings?/gi, (A) => A.toLowerCase().endsWith("s") ? "community packages" : "community package").replace(/no installable package versions?/gi, "need community packages").replace(/\bare uninstallable\b/gi, "need community packages").replace(/\buninstallable\b/gi, "community-mapped");
    }
    function X(M) {
      const A = oe(M.issue_summary || "Has issues"), Q = /(?:>=|v?\d+\.\d+)/i.test(A), P = ie(M.version_gated_guidance || []);
      return (M.nodes_version_gated_count || 0) > 0 && P.length > 0 && !Q ? `${M.name} — ${A} (needs ComfyUI ${P.map((R) => `>= ${R}`).join(", ")})` : `${M.name} — ${A}`;
    }
    const de = O(() => D.value.reduce(
      (M, A) => M + (A.nodes_version_gated_count || 0),
      0
    )), Ne = O(() => {
      const M = D.value.flatMap(
        (A) => ie(A.version_gated_guidance || [])
      );
      return [...new Set(M)];
    }), le = O(() => D.value.reduce(
      (M, A) => M + (A.nodes_uninstallable_count || 0),
      0
    )), pe = O(() => {
      const M = [];
      return de.value > 0 && M.push(
        `${de.value} require newer ComfyUI${ge(Ne.value)}`
      ), le.value > 0 && M.push(`${le.value} need community packages`), M.length > 0 ? `These workflows have missing, blocked, or actionable dependencies (${M.join(", ")}) that must be resolved before they can run.` : "These workflows have missing dependencies that must be resolved before they can run.";
    }), me = O(() => Z.value || G.value.length > 0 || a.status.missing_models_count > 0 || !a.status.comparison.is_synced || a.status.has_legacy_manager), Ue = O(() => {
      const M = [];
      return a.status.workflows.new.length > 0 && M.push(`${a.status.workflows.new.length} new`), a.status.workflows.modified.length > 0 && M.push(`${a.status.workflows.modified.length} modified`), a.status.workflows.deleted.length > 0 && M.push(`${a.status.workflows.deleted.length} deleted`), M.length > 0 ? `${M.join(", ")} workflow${M.length === 1 && !M[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), se = O(() => {
      var Q, P;
      const M = [], A = a.status.comparison;
      return (Q = A.missing_nodes) != null && Q.length && M.push(`${A.missing_nodes.length} missing node${A.missing_nodes.length === 1 ? "" : "s"}`), (P = A.extra_nodes) != null && P.length && M.push(`${A.extra_nodes.length} untracked node${A.extra_nodes.length === 1 ? "" : "s"}`), M.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${M.join(" and ")}.`;
    }), ne = O(() => {
      var Q, P;
      const M = [], A = a.status.comparison;
      return (Q = A.extra_nodes) != null && Q.length && (A.extra_nodes.slice(0, 3).forEach((R) => {
        M.push(`Untracked: ${R}`);
      }), A.extra_nodes.length > 3 && M.push(`...and ${A.extra_nodes.length - 3} more untracked`)), (P = A.missing_nodes) != null && P.length && (A.missing_nodes.slice(0, 3).forEach((R) => {
        M.push(`Missing: ${R}`);
      }), A.missing_nodes.length > 3 && M.push(`...and ${A.missing_nodes.length - 3} more missing`)), M;
    });
    return (M, A) => (n(), i(H, null, [
      _(Tt, null, {
        header: g(() => [
          _(Mt, { title: "STATUS" })
        ]),
        content: g(() => [
          a.setupState === "no_workspace" ? (n(), L(cs, {
            key: 0,
            severity: "info",
            icon: "🚀",
            title: "No ComfyGit workspace detected",
            description: "Set up a workspace to manage your ComfyUI environments, workflows, and models with version control."
          }, {
            actions: g(() => [
              _(Ce, {
                variant: "primary",
                size: "sm",
                onClick: A[0] || (A[0] = (Q) => M.$emit("start-setup"))
              }, {
                default: g(() => [...A[13] || (A[13] = [
                  $(" Start Setup ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : a.setupState === "unmanaged" ? (n(), L(cs, {
            key: 1,
            severity: "warning",
            icon: "⚠",
            title: "Not in a managed environment",
            description: "You're running from an unmanaged ComfyUI installation. Switch to a managed environment to use ComfyGit features."
          }, {
            actions: g(() => [
              _(Ce, {
                variant: "primary",
                size: "sm",
                onClick: A[1] || (A[1] = (Q) => M.$emit("view-environments"))
              }, {
                default: g(() => [...A[14] || (A[14] = [
                  $(" View Environments ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : a.setupState === "empty_workspace" ? (n(), L(cs, {
            key: 2,
            severity: "info",
            icon: "🏗",
            title: "Workspace ready - create your first environment",
            description: "Your workspace is set up. Create a managed environment to start using ComfyGit."
          }, {
            actions: g(() => [
              _(Ce, {
                variant: "primary",
                size: "sm",
                onClick: A[2] || (A[2] = (Q) => M.$emit("create-environment"))
              }, {
                default: g(() => [...A[15] || (A[15] = [
                  $(" Create Environment ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : h("", !0),
          t("div", {
            class: "health-section-wrapper",
            onMouseenter: A[4] || (A[4] = (Q) => r.value = !0),
            onMouseleave: A[5] || (A[5] = (Q) => r.value = !1)
          }, [
            t("div", Rv, [
              _(os, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: g(() => [...A[16] || (A[16] = [
                  $(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              _(Td, { name: "fade" }, {
                default: g(() => [
                  r.value ? (n(), L(Ce, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: u
                  }, {
                    default: g(() => [...A[17] || (A[17] = [
                      $(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : h("", !0)
                ]),
                _: 1
              })
            ]),
            _(Dm, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, ts({
              left: g(() => [
                e.status.workflows.new.length ? (n(), L(gs, {
                  key: 0,
                  icon: "●",
                  count: e.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : h("", !0),
                e.status.workflows.modified.length ? (n(), L(gs, {
                  key: 1,
                  icon: "●",
                  count: e.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : h("", !0),
                e.status.workflows.deleted.length ? (n(), L(gs, {
                  key: 2,
                  icon: "●",
                  count: e.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : h("", !0),
                _(gs, {
                  icon: "✓",
                  count: e.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: U.value
                }, null, 8, ["count", "separator"])
              ]),
              right: g(() => [
                e.status.git_changes.nodes_added.length ? (n(), L(gs, {
                  key: 0,
                  icon: "●",
                  count: e.status.git_changes.nodes_added.length,
                  label: e.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : h("", !0),
                e.status.git_changes.nodes_removed.length ? (n(), L(gs, {
                  key: 1,
                  icon: "●",
                  count: e.status.git_changes.nodes_removed.length,
                  label: e.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : h("", !0),
                e.status.git_changes.workflow_changes ? (n(), L(gs, {
                  key: 2,
                  icon: "●",
                  count: z.value,
                  label: z.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : h("", !0),
                q.value ? (n(), L(gs, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : h("", !0),
                I.value && !E.value && !q.value ? (n(), L(gs, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : h("", !0),
                I.value ? h("", !0) : (n(), L(gs, {
                  key: 5,
                  icon: "✓",
                  label: "No uncommitted changes",
                  variant: "ok"
                }))
              ]),
              _: 2
            }, [
              N.value ? {
                name: "footer",
                fn: g(() => [
                  A[19] || (A[19] = t("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  t("div", Nv, [
                    t("span", Lv, m(Ue.value), 1),
                    _(Ce, {
                      variant: "primary",
                      size: "sm",
                      onClick: A[3] || (A[3] = (Q) => M.$emit("commit-changes"))
                    }, {
                      default: g(() => [...A[18] || (A[18] = [
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
          e.status.is_detached_head ? (n(), L(cs, {
            key: 3,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: g(() => [
              _(Ce, {
                variant: "primary",
                size: "sm",
                onClick: A[6] || (A[6] = (Q) => M.$emit("create-branch"))
              }, {
                default: g(() => [...A[20] || (A[20] = [
                  $(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : h("", !0),
          t("div", Dv, [
            _(os, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: g(() => [...A[21] || (A[21] = [
                $(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            me.value ? (n(), i(H, { key: 0 }, [
              D.value.length > 0 ? (n(), L(cs, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${D.value.length} workflow${D.value.length === 1 ? "" : "s"} can't run`,
                description: pe.value,
                items: D.value.map(X)
              }, {
                actions: g(() => [
                  _(Ce, {
                    variant: "primary",
                    size: "sm",
                    onClick: A[7] || (A[7] = (Q) => M.$emit("view-workflows"))
                  }, {
                    default: g(() => [...A[22] || (A[22] = [
                      $(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "description", "items"])) : h("", !0),
              G.value.length > 0 ? (n(), L(cs, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${G.value.length} workflow${G.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: G.value.map((Q) => `${Q.name} — ${Q.models_needing_path_sync_count} model path${Q.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: g(() => [
                  _(Ce, {
                    variant: "primary",
                    size: "sm",
                    onClick: A[8] || (A[8] = (Q) => M.$emit("view-workflows"))
                  }, {
                    default: g(() => [...A[23] || (A[23] = [
                      $(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : h("", !0),
              e.status.missing_models_count > 0 && !Z.value ? (n(), L(cs, {
                key: 2,
                severity: "warning",
                icon: "⚠",
                title: `${e.status.missing_models_count} missing model${e.status.missing_models_count === 1 ? "" : "s"}`,
                description: "Some workflows reference models that are not found in the workspace index. This can happen after updating the model index."
              }, {
                actions: g(() => [
                  _(Ce, {
                    variant: "primary",
                    size: "sm",
                    disabled: f.value,
                    onClick: C
                  }, {
                    default: g(() => [
                      $(m(f.value ? "Repairing..." : "Repair"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  _(Ce, {
                    variant: "secondary",
                    size: "sm",
                    onClick: A[9] || (A[9] = (Q) => M.$emit("view-workflows"))
                  }, {
                    default: g(() => [...A[24] || (A[24] = [
                      $(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : h("", !0),
              e.status.comparison.is_synced ? h("", !0) : (n(), L(cs, {
                key: 3,
                severity: "error",
                icon: "⚠",
                title: "Environment not synced",
                description: se.value,
                items: ne.value
              }, {
                actions: g(() => [
                  _(Ce, {
                    variant: "secondary",
                    size: "sm",
                    onClick: u
                  }, {
                    default: g(() => [...A[25] || (A[25] = [
                      $(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  _(Ce, {
                    variant: "primary",
                    size: "sm",
                    onClick: A[10] || (A[10] = (Q) => M.$emit("view-nodes"))
                  }, {
                    default: g(() => [...A[26] || (A[26] = [
                      $(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["description", "items"])),
              e.status.has_legacy_manager ? (n(), L(cs, {
                key: 4,
                severity: "warning",
                icon: "⚠",
                title: "Legacy ComfyUI-Manager detected",
                description: "The old ComfyUI-Manager extension is installed alongside ComfyGit. For proper environment tracking, use ComfyGit's built-in Manager instead and remove the legacy extension."
              }, {
                actions: g(() => [
                  _(Ce, {
                    variant: "primary",
                    size: "sm",
                    onClick: A[11] || (A[11] = (Q) => M.$emit("view-nodes"))
                  }, {
                    default: g(() => [...A[27] || (A[27] = [
                      $(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })) : h("", !0)
            ], 64)) : N.value ? (n(), i("span", Ov, "No issues")) : (n(), L(is, {
              key: 2,
              icon: "✅",
              message: "Everything looks good! No issues detected."
            }))
          ])
        ]),
        _: 1
      }),
      _(Pv, {
        show: l.value,
        status: e.status,
        "is-repairing": p.value,
        onClose: A[12] || (A[12] = (Q) => l.value = !1),
        onNavigateWorkflows: c,
        onNavigateNodes: d,
        onRepair: w
      }, null, 8, ["show", "status", "is-repairing"])
    ], 64));
  }
}), Av = /* @__PURE__ */ Se(Uv, [["__scopeId", "data-v-df52ba90"]]), pR = fo({
  hasWorkspace: !1,
  hasEnvironments: !1,
  isManaged: !1,
  hasLegacyManager: !1
});
const gR = [
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
], hR = {
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
}, zv = [
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
], yR = [
  ...zv,
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
function Vv() {
  return typeof crypto < "u" && crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const s = Math.random() * 16 | 0;
    return (e === "x" ? s : s & 3 | 8).toString(16);
  });
}
function ct() {
  const e = b(!1), s = b(null);
  async function o(Y, be) {
    var Lt;
    if (!((Lt = window.app) != null && Lt.api))
      throw new Error("ComfyUI API not available");
    const Fe = await window.app.api.fetchApi(Y, be);
    if (!Fe.ok) {
      const us = await Fe.json().catch(() => ({}));
      throw new Error(us.error || us.message || `Request failed: ${Fe.status}`);
    }
    const vt = await Fe.text();
    if (vt)
      return JSON.parse(vt);
  }
  async function a(Y) {
    return o(`/v2/comfygit/cloud/auth/config?cloud_url=${encodeURIComponent(Y)}`);
  }
  async function l(Y, be, Fe) {
    return o("/v2/comfygit/cloud/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cloud_url: Y, email: be, password: Fe })
    });
  }
  async function r(Y, be, Fe) {
    return o("/v2/comfygit/cloud/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cloud_url: Y, email: be, password: Fe })
    });
  }
  async function u(Y, be) {
    return o(`/v2/comfygit/cloud/auth/me?cloud_url=${encodeURIComponent(Y)}`, {
      headers: { Authorization: `Bearer ${be}` }
    });
  }
  async function c(Y, be) {
    return o("/v2/comfygit/cloud/auth/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cloud_url: Y, refresh_token: be || null })
    });
  }
  async function d(Y, be) {
    return o(`/v2/comfygit/cloud/environments?cloud_url=${encodeURIComponent(Y)}`, {
      headers: { Authorization: `Bearer ${be}` }
    });
  }
  async function v(Y, be, Fe) {
    return o(
      `/v2/comfygit/cloud/environments/${encodeURIComponent(be)}/revisions?cloud_url=${encodeURIComponent(Y)}`,
      {
        headers: { Authorization: `Bearer ${Fe}` }
      }
    );
  }
  async function f(Y, be, Fe, vt) {
    return o("/v2/comfygit/cloud/publish", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${be}`
      },
      body: JSON.stringify({
        cloud_url: Y,
        source_message: Fe || null,
        cloud_environment_id: vt || null
      })
    });
  }
  async function p(Y = !1) {
    return o(Y ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function w(Y, be = !1) {
    return o("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: Y, allow_issues: be })
    });
  }
  async function y(Y = 10, be = 0) {
    return o(`/v2/comfygit/log?limit=${Y}&offset=${be}`);
  }
  async function k(Y, be = 50) {
    return o(`/v2/comfygit/log?branch=${encodeURIComponent(Y)}&limit=${be}`);
  }
  async function x(Y) {
    return o("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: Y })
    });
  }
  async function C() {
    return o("/v2/comfygit/export/validate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({})
    });
  }
  async function S() {
    return o("/v2/comfygit/deploy/validate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({})
    });
  }
  async function U(Y) {
    return o("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: Y, force: !0 })
    });
  }
  async function I(Y) {
    return o(`/v2/comfygit/environment_export/${encodeURIComponent(Y)}/validate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({})
    });
  }
  async function E(Y, be) {
    return o(`/v2/comfygit/environment_export/${encodeURIComponent(Y)}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: be, force: !0 })
    });
  }
  async function N() {
    return o("/v2/comfygit/branches");
  }
  async function z(Y) {
    return o(`/v2/comfygit/commit/${Y}`);
  }
  async function q(Y, be = !1) {
    return o("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: Y, force: be })
    });
  }
  async function D(Y, be = "HEAD") {
    return o("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: Y, start_point: be })
    });
  }
  async function G(Y, be = !1) {
    return o("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: Y, force: be })
    });
  }
  async function Z(Y, be = !1) {
    return o(`/v2/comfygit/branch/${encodeURIComponent(Y)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: be })
    });
  }
  async function te() {
    try {
      return await o("/v2/comfygit/environments");
    } catch {
      try {
        const Y = await p();
        return {
          environments: [{
            name: Y.environment,
            is_current: !0,
            path: "~/comfygit/environments/" + Y.environment,
            created_at: (/* @__PURE__ */ new Date()).toISOString(),
            workflow_count: Y.workflows.total,
            node_count: 0,
            model_count: 0,
            current_branch: Y.branch
          }],
          current: Y.environment,
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
  async function ie() {
    return (await te()).environments;
  }
  async function ge(Y) {
    try {
      return await o(`/v2/comfygit/environments/${encodeURIComponent(Y)}`);
    } catch {
      return null;
    }
  }
  async function oe(Y, be) {
    const Fe = { target_env: Y };
    return be && (Fe.workspace_path = be), o("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Fe)
    });
  }
  async function X() {
    try {
      return o("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function de(Y) {
    return o("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Y)
    });
  }
  async function Ne() {
    return o("/v2/workspace/environments/create_status");
  }
  async function le(Y = 20) {
    return o(`/v2/workspace/comfyui_releases?limit=${Y}`);
  }
  async function pe(Y) {
    return o(`/v2/workspace/environments/${Y}`, {
      method: "DELETE"
    });
  }
  async function me(Y = !1) {
    try {
      return o(Y ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const be = await p(Y), Fe = [];
      return be.workflows.new.forEach((vt) => {
        Fe.push({
          name: vt,
          status: "new",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: vt
        });
      }), be.workflows.modified.forEach((vt) => {
        Fe.push({
          name: vt,
          status: "modified",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: vt
        });
      }), be.workflows.synced.forEach((vt) => {
        Fe.push({
          name: vt,
          status: "synced",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: vt
        });
      }), Fe;
    }
  }
  async function Ue(Y) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(Y)}/details`);
  }
  async function se(Y) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(Y)}/contract`);
  }
  async function ne(Y, be) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(Y)}/contract`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(be)
    });
  }
  async function M(Y) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(Y)}/contract`, {
      method: "DELETE"
    });
  }
  async function A(Y) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(Y)}/resolve`, {
      method: "POST"
    });
  }
  async function Q(Y, be, Fe) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(Y)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: be, install_models: Fe })
    });
  }
  async function P(Y, be, Fe) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(Y)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: be, importance: Fe })
    });
  }
  async function R() {
    try {
      return o("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function ce() {
    try {
      return o("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function Ve(Y) {
    return o(`/v2/workspace/models/details/${encodeURIComponent(Y)}`);
  }
  async function je(Y) {
    return o("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: Y })
    });
  }
  async function B(Y, be) {
    return o(`/v2/workspace/models/${Y}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: be })
    });
  }
  async function W(Y, be) {
    return o(`/v2/workspace/models/${Y}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: be })
    });
  }
  async function J(Y) {
    return o(`/v2/workspace/models/${Y}`, {
      method: "DELETE"
    });
  }
  async function ye(Y) {
    return o("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Y)
    });
  }
  async function ke() {
    return o("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function $e() {
    return o("/v2/workspace/models/directory");
  }
  async function Pe(Y) {
    return o("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: Y })
    });
  }
  async function Le(Y) {
    const be = new URLSearchParams({ url: Y });
    return o(`/v2/workspace/huggingface/repo-info?${be}`);
  }
  async function Oe() {
    return o("/v2/workspace/models/subdirectories");
  }
  async function Te(Y, be = 10) {
    const Fe = new URLSearchParams({ query: Y, limit: String(be) });
    return o(`/v2/workspace/huggingface/search?${Fe}`);
  }
  async function Be(Y) {
    try {
      const be = Y ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(Y)}` : "/v2/comfygit/config";
      return o(be);
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
  async function Me(Y, be) {
    const Fe = be ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(be)}` : "/v2/comfygit/config";
    return o(Fe, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Y)
    });
  }
  async function we(Y, be) {
    try {
      const Fe = new URLSearchParams();
      return Y && Fe.append("level", Y), be && Fe.append("lines", be.toString()), o(`/v2/comfygit/debug/logs?${Fe}`);
    } catch {
      return [];
    }
  }
  async function ee(Y, be) {
    try {
      const Fe = new URLSearchParams();
      return Y && Fe.append("level", Y), be && Fe.append("lines", be.toString()), o(`/v2/workspace/debug/logs?${Fe}`);
    } catch {
      return [];
    }
  }
  async function We() {
    return o("/v2/comfygit/debug/logs/path");
  }
  async function V() {
    return o("/v2/comfygit/debug/manifest");
  }
  async function F() {
    return o("/v2/workspace/debug/logs/path");
  }
  async function j(Y, be) {
    try {
      const Fe = new URLSearchParams();
      return Y && Fe.append("level", Y), be && Fe.append("lines", be.toString()), o(`/v2/workspace/debug/orchestrator-logs?${Fe}`);
    } catch {
      return [];
    }
  }
  async function Ee() {
    return o("/v2/workspace/debug/orchestrator-logs/path");
  }
  async function T(Y) {
    return o("/v2/workspace/open-file", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: Y })
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
  async function ue(Y) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(Y)}/track-dev`, {
      method: "POST"
    });
  }
  async function Ae(Y) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(Y)}/install`, {
      method: "POST"
    });
  }
  async function ze(Y, be) {
    var zs, Vs, Xe, Ea;
    const Fe = Vv(), vt = ((Vs = (zs = window.app) == null ? void 0 : zs.api) == null ? void 0 : Vs.clientId) ?? ((Ea = (Xe = window.app) == null ? void 0 : Xe.api) == null ? void 0 : Ea.initialClientId) ?? "comfygit-panel", Lt = {
      id: Y.id,
      version: Y.version || Y.selected_version || "latest",
      selected_version: Y.selected_version || "latest",
      mode: Y.mode || "remote",
      channel: Y.channel || "default"
    };
    return Y.install_source && (Lt.install_source = Y.install_source), Y.install_source === "git" && Y.repository && (Lt.repository = Y.repository), await o("/v2/manager/queue/task", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        kind: "install",
        params: Lt,
        ui_id: Fe,
        client_id: vt
      })
    }), console.log("[ComfyGit] Task queued with ui_id:", Fe, "for package:", Y.id), be != null && be.beforeQueueStart && await be.beforeQueueStart(Fe), await o("/v2/manager/queue/start", {
      method: "POST"
    }), { ui_id: Fe };
  }
  async function Ie(Y) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(Y)}/update`, {
      method: "POST"
    });
  }
  async function qe(Y) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(Y)}`, {
      method: "DELETE"
    });
  }
  async function Qe() {
    try {
      return o("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function at(Y, be) {
    return o("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: Y, url: be })
    });
  }
  async function rt(Y) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(Y)}`, {
      method: "DELETE"
    });
  }
  async function dt(Y, be, Fe) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(Y)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: be, push_url: Fe })
    });
  }
  async function It(Y, be) {
    const Fe = {};
    return be && (Fe["X-Git-Auth-Token"] = be), o(`/v2/comfygit/remotes/${encodeURIComponent(Y)}/fetch`, {
      method: "POST",
      headers: Fe
    });
  }
  async function Wt(Y) {
    try {
      return o(`/v2/comfygit/remotes/${encodeURIComponent(Y)}/status`);
    } catch {
      return null;
    }
  }
  async function ut(Y = "skip", be = !0) {
    return o("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: Y,
        remove_extra_nodes: be
      })
    });
  }
  async function ve(Y, be) {
    const Fe = be ? `/v2/comfygit/remotes/${encodeURIComponent(Y)}/pull-preview?branch=${encodeURIComponent(be)}` : `/v2/comfygit/remotes/${encodeURIComponent(Y)}/pull-preview`;
    return o(Fe);
  }
  async function K(Y, be = {}) {
    const Fe = { "Content-Type": "application/json" };
    return be.authToken && (Fe["X-Git-Auth-Token"] = be.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(Y)}/pull`, {
      method: "POST",
      headers: Fe,
      body: JSON.stringify({
        model_strategy: be.modelStrategy || "skip",
        force: be.force || !1,
        resolutions: be.resolutions
      })
    });
  }
  async function he(Y, be) {
    const Fe = be ? `/v2/comfygit/remotes/${encodeURIComponent(Y)}/push-preview?branch=${encodeURIComponent(be)}` : `/v2/comfygit/remotes/${encodeURIComponent(Y)}/push-preview`;
    return o(Fe);
  }
  async function He(Y, be = {}) {
    const Fe = { "Content-Type": "application/json" };
    return be.authToken && (Fe["X-Git-Auth-Token"] = be.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(Y)}/push`, {
      method: "POST",
      headers: Fe,
      body: JSON.stringify({ force: be.force || !1 })
    });
  }
  async function ft(Y, be) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(Y)}/validate-merge`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resolutions: be })
    });
  }
  async function Nt(Y) {
    const be = {
      success: 0,
      failed: []
    };
    for (const Fe of Y)
      try {
        await A(Fe), be.success++;
      } catch (vt) {
        be.failed.push({
          name: Fe,
          error: vt instanceof Error ? vt.message : "Unknown error"
        });
      }
    return be;
  }
  async function tt(Y) {
    var vt;
    const be = new FormData();
    if (be.append("file", Y), !((vt = window.app) != null && vt.api))
      throw new Error("ComfyUI API not available");
    const Fe = await window.app.api.fetchApi("/v2/workspace/import/preview", {
      method: "POST",
      body: be
      // Don't set Content-Type - browser will set multipart boundary automatically
    });
    if (!Fe.ok) {
      const Lt = await Fe.json().catch(() => ({}));
      throw new Error(Lt.error || `Preview failed: ${Fe.status}`);
    }
    return Fe.json();
  }
  async function Pt(Y) {
    return o(
      `/v2/workspace/environments/validate?name=${encodeURIComponent(Y)}`
    );
  }
  async function xs(Y, be, Fe, vt) {
    var zs;
    const Lt = new FormData();
    if (Lt.append("file", Y), Lt.append("name", be), Lt.append("model_strategy", Fe), Lt.append("torch_backend", vt), !((zs = window.app) != null && zs.api))
      throw new Error("ComfyUI API not available");
    const us = await window.app.api.fetchApi("/v2/workspace/import", {
      method: "POST",
      body: Lt
    });
    if (!us.ok) {
      const Vs = await us.json().catch(() => ({}));
      throw new Error(Vs.message || Vs.error || `Import failed: ${us.status}`);
    }
    return us.json();
  }
  async function Kt() {
    return o("/v2/workspace/import/status");
  }
  async function ca(Y) {
    return o("/v2/workspace/import/preview/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ git_url: Y })
    });
  }
  async function vo(Y, be, Fe, vt) {
    return o("/v2/workspace/import/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        git_url: Y,
        name: be,
        model_strategy: Fe,
        torch_backend: vt
      })
    });
  }
  async function po() {
    return o("/v2/setup/status");
  }
  async function da() {
    return o("/v2/comfygit/update-check");
  }
  async function Ss() {
    return o("/v2/comfygit/update", { method: "POST" });
  }
  async function ma(Y) {
    return o("/v2/setup/initialize_workspace", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Y)
    });
  }
  async function Do() {
    return o("/v2/setup/initialize_status");
  }
  async function fa(Y) {
    return o("/v2/setup/validate_path", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Y)
    });
  }
  async function va() {
    return o("/v2/comfygit/deploy/summary");
  }
  async function pa() {
    return o("/v2/comfygit/deploy/runpod/data-centers");
  }
  async function ga(Y, be) {
    return o("/v2/comfygit/deploy/runpod/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ api_key: Y, save_key: be })
    });
  }
  async function hn() {
    return o("/v2/comfygit/deploy/runpod/volumes");
  }
  async function ha(Y) {
    const be = Y ? `/v2/comfygit/deploy/runpod/gpu-types?data_center_id=${encodeURIComponent(Y)}` : "/v2/comfygit/deploy/runpod/gpu-types";
    return o(be);
  }
  async function ya(Y) {
    return o("/v2/comfygit/deploy/runpod", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Y)
    });
  }
  async function wa() {
    return o("/v2/comfygit/deploy/runpod/pods");
  }
  async function _a(Y) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(Y)}`, {
      method: "DELETE"
    });
  }
  async function ka(Y) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(Y)}/stop`, {
      method: "POST"
    });
  }
  async function ba(Y) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(Y)}/start`, {
      method: "POST"
    });
  }
  async function $a(Y) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(Y)}/status`);
  }
  async function Ca(Y) {
    return o("/v2/comfygit/deploy/package", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: Y })
    });
  }
  async function xa(Y = !1) {
    return o(Y ? "/v2/comfygit/deploy/runpod/key?verify=true" : "/v2/comfygit/deploy/runpod/key");
  }
  async function Sa() {
    return o("/v2/comfygit/deploy/runpod/key", {
      method: "DELETE"
    });
  }
  async function Ia() {
    return o("/v2/comfygit/deploy/custom/workers");
  }
  async function yn(Y) {
    return o("/v2/comfygit/deploy/custom/workers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Y)
    });
  }
  async function fe(Y) {
    return o(`/v2/comfygit/deploy/custom/workers/${encodeURIComponent(Y)}`, {
      method: "DELETE"
    });
  }
  async function ae(Y) {
    return o("/v2/comfygit/deploy/custom/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Y)
    });
  }
  async function Ge() {
    return o("/v2/comfygit/deploy/custom/scan", {
      method: "POST"
    });
  }
  async function Ke(Y) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(Y)}/info`);
  }
  async function ht(Y) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(Y)}/instances`);
  }
  async function xt(Y, be) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(Y)}/instances`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(be)
    });
  }
  async function rs(Y, be) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(Y)}/instances/${encodeURIComponent(be)}/start`, {
      method: "POST"
    });
  }
  async function Zs(Y, be) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(Y)}/instances/${encodeURIComponent(be)}/stop`, {
      method: "POST"
    });
  }
  async function wn(Y, be) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(Y)}/instances/${encodeURIComponent(be)}`, {
      method: "DELETE"
    });
  }
  async function _n(Y) {
    return o("/v2/comfygit/deploy/test-git-auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: Y })
    });
  }
  return {
    isLoading: e,
    error: s,
    getStatus: p,
    commit: w,
    getHistory: y,
    getBranchHistory: k,
    exportEnv: x,
    validateExport: C,
    validateDeploy: S,
    exportEnvWithForce: U,
    validateEnvironmentExport: I,
    exportEnvironmentWithForce: E,
    // Git Operations
    getBranches: N,
    getCommitDetail: z,
    checkout: q,
    createBranch: D,
    switchBranch: G,
    deleteBranch: Z,
    // Environment Management
    listEnvironments: te,
    getEnvironments: ie,
    getEnvironmentDetails: ge,
    switchEnvironment: oe,
    getSwitchProgress: X,
    createEnvironment: de,
    getCreateProgress: Ne,
    getComfyUIReleases: le,
    deleteEnvironment: pe,
    // Workflow Management
    getWorkflows: me,
    getWorkflowDetails: Ue,
    getWorkflowContract: se,
    saveWorkflowContract: ne,
    deleteWorkflowContract: M,
    resolveWorkflow: A,
    installWorkflowDeps: Q,
    setModelImportance: P,
    // Model Management
    getEnvironmentModels: R,
    getWorkspaceModels: ce,
    getModelDetails: Ve,
    openFileLocation: je,
    addModelSource: B,
    removeModelSource: W,
    deleteModel: J,
    downloadModel: ye,
    scanWorkspaceModels: ke,
    getModelsDirectory: $e,
    setModelsDirectory: Pe,
    getHuggingFaceRepoInfo: Le,
    getModelsSubdirectories: Oe,
    searchHuggingFaceRepos: Te,
    // Settings
    getConfig: Be,
    updateConfig: Me,
    // Cloud Auth
    getCloudAuthConfig: a,
    loginToCloud: l,
    signupToCloud: r,
    getCloudMe: u,
    logoutFromCloud: c,
    getCloudEnvironments: d,
    getCloudEnvironmentRevisions: v,
    publishCurrentEnvironmentToCloud: f,
    // Debug/Logs
    getEnvironmentLogs: we,
    getEnvironmentManifest: V,
    getWorkspaceLogs: ee,
    getEnvironmentLogPath: We,
    getWorkspaceLogPath: F,
    getOrchestratorLogs: j,
    getOrchestratorLogPath: Ee,
    openFile: T,
    // Node Management
    getNodes: re,
    trackNodeAsDev: ue,
    installNode: Ae,
    queueNodeInstall: ze,
    updateNode: Ie,
    uninstallNode: qe,
    // Git Remotes
    getRemotes: Qe,
    addRemote: at,
    removeRemote: rt,
    updateRemoteUrl: dt,
    fetchRemote: It,
    getRemoteSyncStatus: Wt,
    // Push/Pull
    getPullPreview: ve,
    pullFromRemote: K,
    getPushPreview: he,
    pushToRemote: He,
    validateMerge: ft,
    // Environment Sync
    syncEnvironmentManually: ut,
    // Workflow Repair
    repairWorkflowModels: Nt,
    // Import Operations
    previewTarballImport: tt,
    previewGitImport: ca,
    validateEnvironmentName: Pt,
    executeImport: xs,
    executeGitImport: vo,
    getImportProgress: Kt,
    // First-Time Setup
    getSetupStatus: po,
    // Manager Update Notice
    getUpdateCheck: da,
    updateManager: Ss,
    initializeWorkspace: ma,
    getInitializeProgress: Do,
    validatePath: fa,
    // Deploy Operations
    getDeploySummary: va,
    getDataCenters: pa,
    testRunPodConnection: ga,
    getNetworkVolumes: hn,
    getRunPodGpuTypes: ha,
    deployToRunPod: ya,
    getRunPodPods: wa,
    terminateRunPodPod: _a,
    stopRunPodPod: ka,
    startRunPodPod: ba,
    getDeploymentStatus: $a,
    exportDeployPackage: Ca,
    getStoredRunPodKey: xa,
    clearRunPodKey: Sa,
    // Custom Worker Operations
    getCustomWorkers: Ia,
    addCustomWorker: yn,
    removeCustomWorker: fe,
    testWorkerConnection: ae,
    scanForWorkers: Ge,
    getWorkerSystemInfo: Ke,
    getWorkerInstances: ht,
    deployToWorker: xt,
    startWorkerInstance: rs,
    stopWorkerInstance: Zs,
    terminateWorkerInstance: wn,
    // Git Authentication
    testGitAuth: _n
  };
}
async function Sn(e, s) {
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
function Fv() {
  async function e() {
    try {
      return await Sn("/v2/comfygit/orchestrator/health");
    } catch {
      return null;
    }
  }
  async function s() {
    try {
      return await Sn("/v2/comfygit/orchestrator/status");
    } catch {
      return null;
    }
  }
  async function o() {
    await Sn("/v2/comfygit/orchestrator/restart", { method: "POST" });
  }
  async function a() {
    await Sn("/v2/comfygit/orchestrator/kill", { method: "POST" });
  }
  return {
    checkHealth: e,
    getStatus: s,
    restart: o,
    kill: a
  };
}
const Bv = { class: "base-modal-header" }, Wv = {
  key: 0,
  class: "base-modal-title"
}, Gv = { class: "base-modal-body" }, jv = {
  key: 0,
  class: "base-modal-loading"
}, Hv = {
  key: 1,
  class: "base-modal-error"
}, qv = {
  key: 0,
  class: "base-modal-footer"
}, Kv = /* @__PURE__ */ xe({
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
    function r(u) {
      u.key === "Escape" && o.showCloseButton && a("close");
    }
    return ot(() => {
      document.addEventListener("keydown", r), document.body.style.overflow = "hidden";
    }), Ro(() => {
      document.removeEventListener("keydown", r), document.body.style.overflow = "";
    }), (u, c) => (n(), L(Ot, { to: "body" }, [
      t("div", {
        class: "base-modal-overlay",
        onClick: l
      }, [
        t("div", {
          class: De(["base-modal-content", e.size, { "fixed-height": e.fixedHeight }]),
          onClick: c[1] || (c[1] = st(() => {
          }, ["stop"]))
        }, [
          t("div", Bv, [
            et(u.$slots, "header", {}, () => [
              e.title ? (n(), i("h3", Wv, m(e.title), 1)) : h("", !0)
            ]),
            e.showCloseButton ? (n(), i("button", {
              key: 0,
              class: "base-modal-close",
              onClick: c[0] || (c[0] = (d) => u.$emit("close"))
            }, [...c[2] || (c[2] = [
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
          t("div", Gv, [
            e.loading ? (n(), i("div", jv, "Loading...")) : e.error ? (n(), i("div", Hv, m(e.error), 1)) : et(u.$slots, "body", { key: 2 }, void 0)
          ]),
          u.$slots.footer ? (n(), i("div", qv, [
            et(u.$slots, "footer", {}, void 0)
          ])) : h("", !0)
        ], 2)
      ])
    ]));
  }
}), Ct = /* @__PURE__ */ Se(Kv, [["__scopeId", "data-v-8dab1081"]]), Jv = ["type", "disabled"], Yv = {
  key: 0,
  class: "spinner"
}, Qv = /* @__PURE__ */ xe({
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
      class: De(["base-btn", e.variant, e.size, { "full-width": e.fullWidth, loading: e.loading }]),
      onClick: o[0] || (o[0] = (a) => s.$emit("click", a))
    }, [
      e.loading ? (n(), i("span", Yv)) : h("", !0),
      et(s.$slots, "default", {}, void 0)
    ], 10, Jv));
  }
}), Re = /* @__PURE__ */ Se(Qv, [["__scopeId", "data-v-f3452606"]]), Xv = {
  key: 0,
  class: "base-title-count"
}, Zv = /* @__PURE__ */ xe({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(e) {
    return (s, o) => (n(), L($l(`h${e.level}`), {
      class: De(["base-title", e.variant])
    }, {
      default: g(() => [
        et(s.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (n(), i("span", Xv, "(" + m(e.count) + ")", 1)) : h("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ls = /* @__PURE__ */ Se(Zv, [["__scopeId", "data-v-5a01561d"]]), ep = ["value", "disabled"], tp = {
  key: 0,
  value: "",
  disabled: ""
}, sp = ["value"], op = {
  key: 0,
  class: "base-select-error"
}, np = /* @__PURE__ */ xe({
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
      class: De(["base-select-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      t("select", {
        value: e.modelValue,
        disabled: e.disabled,
        class: De(["base-select", { error: !!e.error }]),
        onChange: l[0] || (l[0] = (r) => a.$emit("update:modelValue", r.target.value))
      }, [
        e.placeholder ? (n(), i("option", tp, m(e.placeholder), 1)) : h("", !0),
        (n(!0), i(H, null, _e(e.options, (r) => (n(), i("option", {
          key: s(r),
          value: s(r)
        }, m(o(r)), 9, sp))), 128))
      ], 42, ep),
      e.error ? (n(), i("span", op, m(e.error), 1)) : h("", !0)
    ], 2));
  }
}), Ks = /* @__PURE__ */ Se(np, [["__scopeId", "data-v-4996bfe0"]]), ap = { class: "popover-header" }, lp = { class: "popover-title" }, ip = { class: "popover-content" }, rp = {
  key: 0,
  class: "popover-actions"
}, up = /* @__PURE__ */ xe({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(e) {
    return (s, o) => (n(), L(Ot, { to: "body" }, [
      e.show ? (n(), i("div", {
        key: 0,
        class: "popover-overlay",
        onClick: o[2] || (o[2] = (a) => s.$emit("close"))
      }, [
        t("div", {
          class: "popover",
          style: Ft({ maxWidth: e.maxWidth }),
          onClick: o[1] || (o[1] = st(() => {
          }, ["stop"]))
        }, [
          t("div", ap, [
            t("h4", lp, m(e.title), 1),
            t("button", {
              class: "popover-close",
              onClick: o[0] || (o[0] = (a) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", ip, [
            et(s.$slots, "content", {}, void 0)
          ]),
          s.$slots.actions ? (n(), i("div", rp, [
            et(s.$slots, "actions", {}, void 0)
          ])) : h("", !0)
        ], 4)
      ])) : h("", !0)
    ]));
  }
}), Yt = /* @__PURE__ */ Se(up, [["__scopeId", "data-v-42815ace"]]), cp = { class: "detail-section" }, dp = {
  key: 0,
  class: "empty-message"
}, mp = { class: "model-header" }, fp = { class: "model-name" }, vp = { class: "model-details" }, pp = { class: "model-row" }, gp = { class: "model-row" }, hp = { class: "label" }, yp = {
  key: 0,
  class: "model-row model-row-nodes"
}, wp = { class: "node-list" }, _p = ["onClick"], kp = {
  key: 1,
  class: "model-row"
}, bp = { class: "value" }, $p = {
  key: 2,
  class: "model-row"
}, Cp = { class: "value error" }, xp = {
  key: 0,
  class: "model-actions"
}, Sp = { class: "detail-section" }, Ip = {
  key: 0,
  class: "empty-message"
}, Ep = { class: "node-content" }, Tp = { class: "node-main" }, Mp = { class: "node-name" }, Pp = { class: "node-badge" }, Rp = {
  key: 0,
  class: "node-version"
}, Np = ["onClick"], Lp = {
  key: 2,
  class: "node-install-queued"
}, Dp = {
  key: 0,
  class: "node-guidance"
}, Op = /* @__PURE__ */ xe({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(e, { emit: s }) {
    const o = e, a = s, { getWorkflowDetails: l, setModelImportance: r, openFileLocation: u, queueNodeInstall: c } = ct(), d = b(null), v = b(!1), f = b(null), p = b(!1), w = b({}), y = b(!1), k = b(/* @__PURE__ */ new Set()), x = b(/* @__PURE__ */ new Set()), C = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function S(oe) {
      switch (oe) {
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
    function U(oe) {
      switch (oe) {
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
    function I(oe) {
      switch (oe) {
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
    function E(oe) {
      switch (oe) {
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
    function N(oe) {
      switch (oe) {
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
    function z(oe) {
      if (!oe.loaded_by || oe.loaded_by.length === 0) return [];
      const X = oe.hash || oe.filename;
      return k.value.has(X) ? oe.loaded_by : oe.loaded_by.slice(0, 3);
    }
    function q(oe) {
      return k.value.has(oe);
    }
    function D(oe) {
      k.value.has(oe) ? k.value.delete(oe) : k.value.add(oe), k.value = new Set(k.value);
    }
    async function G() {
      v.value = !0, f.value = null;
      try {
        d.value = await l(o.workflowName);
      } catch (oe) {
        f.value = oe instanceof Error ? oe.message : "Failed to load workflow details";
      } finally {
        v.value = !1;
      }
    }
    function Z(oe, X) {
      w.value[oe] = X, p.value = !0;
    }
    async function te(oe) {
      try {
        await u(oe);
      } catch (X) {
        f.value = X instanceof Error ? X.message : "Failed to open file location";
      }
    }
    async function ie(oe) {
      if (oe.package_id)
        try {
          const X = oe.latest_version || "latest";
          await c({
            id: oe.package_id,
            version: X,
            selected_version: X,
            mode: "remote",
            channel: "default"
          }), x.value.add(oe.package_id);
        } catch (X) {
          f.value = X instanceof Error ? X.message : "Failed to queue node install";
        }
    }
    async function ge() {
      if (!p.value) {
        a("close");
        return;
      }
      v.value = !0, f.value = null;
      try {
        for (const [oe, X] of Object.entries(w.value))
          await r(o.workflowName, oe, X);
        a("refresh"), a("close");
      } catch (oe) {
        f.value = oe instanceof Error ? oe.message : "Failed to save changes";
      } finally {
        v.value = !1;
      }
    }
    return ot(G), (oe, X) => (n(), i(H, null, [
      _(Ct, {
        title: `WORKFLOW DETAILS: ${e.workflowName}`,
        size: "lg",
        loading: v.value,
        error: f.value || void 0,
        onClose: X[4] || (X[4] = (de) => a("close"))
      }, {
        body: g(() => [
          d.value ? (n(), i(H, { key: 0 }, [
            t("section", cp, [
              _(Ls, { variant: "section" }, {
                default: g(() => [
                  $("MODELS USED (" + m(d.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              d.value.models.length === 0 ? (n(), i("div", dp, " No models used in this workflow ")) : h("", !0),
              (n(!0), i(H, null, _e(d.value.models, (de) => {
                var Ne;
                return n(), i("div", {
                  key: de.hash || de.filename,
                  class: "model-card"
                }, [
                  t("div", mp, [
                    X[6] || (X[6] = t("span", { class: "model-icon" }, "📦", -1)),
                    t("span", fp, m(de.filename), 1)
                  ]),
                  t("div", vp, [
                    t("div", pp, [
                      X[7] || (X[7] = t("span", { class: "label" }, "Status:", -1)),
                      t("span", {
                        class: De(["value", S(de.status)])
                      }, m(U(de.status)), 3)
                    ]),
                    t("div", gp, [
                      t("span", hp, [
                        X[8] || (X[8] = $(" Importance: ", -1)),
                        _(Yr, {
                          size: 14,
                          title: "About importance levels",
                          onClick: X[0] || (X[0] = (le) => y.value = !0)
                        })
                      ]),
                      _(Ks, {
                        "model-value": w.value[de.filename] || de.importance,
                        options: C,
                        "onUpdate:modelValue": (le) => Z(de.filename, le)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    de.loaded_by && de.loaded_by.length > 0 ? (n(), i("div", yp, [
                      X[9] || (X[9] = t("span", { class: "label" }, "Loaded by:", -1)),
                      t("div", wp, [
                        (n(!0), i(H, null, _e(z(de), (le, pe) => (n(), i("div", {
                          key: `${le.node_id}-${pe}`,
                          class: "node-reference"
                        }, m(le.node_type) + " (Node #" + m(le.node_id) + ") ", 1))), 128)),
                        de.loaded_by.length > 3 ? (n(), i("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (le) => D(de.hash || de.filename)
                        }, m(q(de.hash || de.filename) ? "▼ Show less" : `▶ View all (${de.loaded_by.length})`), 9, _p)) : h("", !0)
                      ])
                    ])) : h("", !0),
                    de.size_mb ? (n(), i("div", kp, [
                      X[10] || (X[10] = t("span", { class: "label" }, "Size:", -1)),
                      t("span", bp, m(de.size_mb) + " MB", 1)
                    ])) : h("", !0),
                    de.has_category_mismatch ? (n(), i("div", $p, [
                      X[13] || (X[13] = t("span", { class: "label" }, "Location issue:", -1)),
                      t("span", Cp, [
                        X[11] || (X[11] = $(" In ", -1)),
                        t("code", null, m(de.actual_category) + "/", 1),
                        X[12] || (X[12] = $(" but loader needs ", -1)),
                        t("code", null, m((Ne = de.expected_categories) == null ? void 0 : Ne[0]) + "/", 1)
                      ])
                    ])) : h("", !0)
                  ]),
                  de.status !== "available" ? (n(), i("div", xp, [
                    de.status === "downloadable" ? (n(), L(Re, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: X[1] || (X[1] = (le) => a("resolve"))
                    }, {
                      default: g(() => [...X[14] || (X[14] = [
                        $(" Download ", -1)
                      ])]),
                      _: 1
                    })) : de.status === "category_mismatch" && de.file_path ? (n(), L(Re, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (le) => te(de.file_path)
                    }, {
                      default: g(() => [...X[15] || (X[15] = [
                        $(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : de.status !== "path_mismatch" ? (n(), L(Re, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: X[2] || (X[2] = (le) => a("resolve"))
                    }, {
                      default: g(() => [...X[16] || (X[16] = [
                        $(" Resolve ", -1)
                      ])]),
                      _: 1
                    })) : h("", !0)
                  ])) : h("", !0)
                ]);
              }), 128))
            ]),
            t("section", Sp, [
              _(Ls, { variant: "section" }, {
                default: g(() => [
                  $("NODES USED (" + m(d.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              d.value.nodes.length === 0 ? (n(), i("div", Ip, " No custom nodes used in this workflow ")) : h("", !0),
              (n(!0), i(H, null, _e(d.value.nodes, (de, Ne) => (n(), i("div", {
                key: `${de.name}-${de.status}-${Ne}`,
                class: "node-item"
              }, [
                t("span", {
                  class: De(["node-status", I(de.status)])
                }, m(E(de.status)), 3),
                t("div", Ep, [
                  t("div", Tp, [
                    t("span", Mp, m(de.name), 1),
                    t("span", Pp, m(N(de.status)), 1),
                    de.version ? (n(), i("span", Rp, "v" + m(de.version), 1)) : h("", !0),
                    de.status === "uninstallable" && de.package_id && !x.value.has(de.package_id) ? (n(), i("button", {
                      key: 1,
                      class: "node-install-link",
                      onClick: (le) => ie(de)
                    }, " Install ", 8, Np)) : de.status === "uninstallable" && de.package_id && x.value.has(de.package_id) ? (n(), i("span", Lp, " Queued ")) : h("", !0)
                  ]),
                  de.guidance ? (n(), i("div", Dp, m(de.guidance), 1)) : h("", !0)
                ])
              ]))), 128))
            ])
          ], 64)) : h("", !0)
        ]),
        footer: g(() => [
          _(Re, {
            variant: "secondary",
            onClick: X[3] || (X[3] = (de) => a("close"))
          }, {
            default: g(() => [...X[17] || (X[17] = [
              $(" Close ", -1)
            ])]),
            _: 1
          }),
          p.value ? (n(), L(Re, {
            key: 0,
            variant: "primary",
            onClick: ge
          }, {
            default: g(() => [...X[18] || (X[18] = [
              $(" Save Changes ", -1)
            ])]),
            _: 1
          })) : h("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      _(Yt, {
        show: y.value,
        title: "Model Importance Levels",
        onClose: X[5] || (X[5] = (de) => y.value = !1)
      }, {
        content: g(() => [...X[19] || (X[19] = [
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
}), Up = /* @__PURE__ */ Se(Op, [["__scopeId", "data-v-543076d9"]]), Ap = ["type", "value", "placeholder", "disabled"], zp = {
  key: 0,
  class: "base-input-error"
}, Vp = /* @__PURE__ */ xe({
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
      class: De(["base-input-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      t("input", {
        type: e.type,
        value: e.modelValue,
        placeholder: e.placeholder,
        disabled: e.disabled,
        class: De(["base-input", { error: !!e.error }]),
        onInput: o[0] || (o[0] = (a) => s.$emit("update:modelValue", a.target.value)),
        onKeyup: [
          o[1] || (o[1] = es((a) => s.$emit("enter"), ["enter"])),
          o[2] || (o[2] = es((a) => s.$emit("escape"), ["escape"]))
        ]
      }, null, 42, Ap),
      e.error ? (n(), i("span", zp, m(e.error), 1)) : h("", !0)
    ], 2));
  }
}), it = /* @__PURE__ */ Se(Vp, [["__scopeId", "data-v-9ba02cdc"]]), Fp = { class: "base-textarea-wrapper" }, Bp = ["value", "rows", "placeholder", "disabled", "maxlength"], Wp = {
  key: 0,
  class: "base-textarea-count"
}, Gp = /* @__PURE__ */ xe({
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
    return (r, u) => (n(), i("div", Fp, [
      t("textarea", {
        value: e.modelValue,
        rows: e.rows,
        placeholder: e.placeholder,
        disabled: e.disabled,
        maxlength: e.maxLength,
        class: "base-textarea",
        onInput: u[0] || (u[0] = (c) => r.$emit("update:modelValue", c.target.value)),
        onKeydown: [
          u[1] || (u[1] = es(st((c) => r.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          u[2] || (u[2] = es(st((c) => r.$emit("ctrlEnter"), ["meta"]), ["enter"])),
          es(l, ["enter"])
        ]
      }, null, 40, Bp),
      e.showCharCount && e.maxLength ? (n(), i("div", Wp, m(e.modelValue.length) + " / " + m(e.maxLength), 1)) : h("", !0)
    ]));
  }
}), Js = /* @__PURE__ */ Se(Gp, [["__scopeId", "data-v-c6d16c93"]]), jp = ["for"], Hp = {
  key: 0,
  class: "base-form-field-required"
}, qp = { class: "base-form-field-input" }, Kp = {
  key: 1,
  class: "base-form-field-error"
}, Jp = {
  key: 2,
  class: "base-form-field-hint"
}, Yp = /* @__PURE__ */ xe({
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
    const s = e, o = O(() => s.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (a, l) => (n(), i("div", {
      class: De(["base-form-field", { "full-width": e.fullWidth }])
    }, [
      e.label ? (n(), i("label", {
        key: 0,
        for: o.value,
        class: "base-form-field-label"
      }, [
        $(m(e.label) + " ", 1),
        e.required ? (n(), i("span", Hp, "*")) : h("", !0)
      ], 8, jp)) : h("", !0),
      t("div", qp, [
        et(a.$slots, "default", {}, void 0)
      ]),
      e.error ? (n(), i("span", Kp, m(e.error), 1)) : e.hint ? (n(), i("span", Jp, m(e.hint), 1)) : h("", !0)
    ], 2));
  }
}), pt = /* @__PURE__ */ Se(Yp, [["__scopeId", "data-v-9a1cf296"]]), Qp = { class: "contract-meta" }, Xp = { class: "contract-summary" }, Zp = { class: "summary-pill" }, eg = { class: "summary-pill" }, tg = { class: "summary-pill" }, sg = { class: "contract-meta-grid" }, og = { class: "contract-layout" }, ng = { class: "contract-column" }, ag = { class: "section-header" }, lg = {
  key: 0,
  class: "empty-message"
}, ig = ["onClick"], rg = { class: "item-card-title" }, ug = { class: "item-card-meta" }, cg = { class: "item-card-summary" }, dg = { key: 0 }, mg = { class: "contract-column" }, fg = { class: "section-header" }, vg = {
  key: 0,
  class: "empty-message"
}, pg = ["onClick"], gg = { class: "item-card-title" }, hg = { class: "item-card-meta" }, yg = { class: "item-card-summary" }, wg = { class: "contract-footer" }, _g = { class: "contract-footer-left" }, kg = { class: "contract-footer-right" }, bg = /* @__PURE__ */ xe({
  __name: "WorkflowContractModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "refresh"],
  setup(e, { emit: s }) {
    const o = e, a = s, { getWorkflowContract: l, saveWorkflowContract: r, deleteWorkflowContract: u } = ct(), c = b(!1), d = b(!1), v = b(!1), f = b(null), p = b(null), w = b(null), y = b(null), k = b(null), x = [
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
    ], S = O(() => {
      var se;
      return ((se = p.value) == null ? void 0 : se.contract_summary.has_contract) === !0;
    }), U = O(() => {
      if (!w.value)
        return { inputs: [], outputs: [] };
      const se = w.value.default_contract || "default";
      return w.value.contracts[se] || (w.value.contracts[se] = { inputs: [], outputs: [] }), w.value.contracts[se];
    }), I = O(() => {
      var ne;
      const se = ((ne = p.value) == null ? void 0 : ne.contract_summary.status) ?? "none";
      return se === "valid" ? "Valid Contract" : se === "incomplete" ? "Incomplete Contract" : "No Contract";
    });
    function E(se) {
      return se ? JSON.parse(JSON.stringify(se)) : {
        version: 1,
        default_contract: "default",
        contracts: {
          default: { inputs: [], outputs: [] }
        }
      };
    }
    function N(se) {
      return se === "integer" || se === "number";
    }
    function z(se) {
      return se === "enum";
    }
    function q(se) {
      return se == null ? "" : String(se);
    }
    function D(se) {
      const ne = se.trim();
      if (!ne) return;
      const M = Number(ne);
      return Number.isFinite(M) ? M : void 0;
    }
    function G(se) {
      return (se || []).join(`
`);
    }
    function Z(se) {
      return se.split(/[\n,]/).map((ne) => ne.trim()).filter(Boolean);
    }
    function te(se) {
      return se == null ? "" : String(se);
    }
    function ie(se) {
      return typeof se == "string" ? se.length > 24 ? `${se.slice(0, 24)}...` : se : String(se);
    }
    function ge(se) {
      if (!w.value) return;
      const ne = se.trim() || "default";
      w.value.default_contract = ne, w.value.contracts[ne] || (w.value.contracts[ne] = { inputs: [], outputs: [] });
    }
    function oe(se) {
      U.value.inputs.splice(se, 1), y.value === se ? y.value = null : y.value != null && y.value > se && (y.value -= 1);
    }
    function X(se) {
      U.value.outputs.splice(se, 1), k.value === se ? k.value = null : k.value != null && k.value > se && (k.value -= 1);
    }
    function de(se) {
      y.value = y.value === se ? null : se;
    }
    function Ne(se) {
      k.value = k.value === se ? null : se;
    }
    async function le() {
      c.value = !0, f.value = null;
      try {
        p.value = await l(o.workflowName), w.value = E(p.value.execution_contract);
      } catch (se) {
        f.value = se instanceof Error ? se.message : "Failed to load workflow contract";
      } finally {
        c.value = !1;
      }
    }
    async function pe() {
      if (w.value) {
        d.value = !0, f.value = null;
        try {
          p.value = await r(o.workflowName, w.value), w.value = E(p.value.execution_contract), a("refresh");
        } catch (se) {
          f.value = se instanceof Error ? se.message : "Failed to save workflow contract";
        } finally {
          d.value = !1;
        }
      }
    }
    async function me() {
      v.value = !0, f.value = null;
      try {
        await u(o.workflowName), await le(), a("refresh");
      } catch (se) {
        f.value = se instanceof Error ? se.message : "Failed to delete workflow contract";
      } finally {
        v.value = !1;
      }
    }
    function Ue() {
      window.dispatchEvent(new CustomEvent("comfygit:open-io-mapping", {
        detail: { workflowName: o.workflowName }
      })), window.dispatchEvent(new CustomEvent("comfygit:close-panel")), a("close");
    }
    return ot(le), (se, ne) => (n(), L(Ct, {
      title: `WORKFLOW CONTRACT: ${e.workflowName}`,
      size: "xl",
      loading: c.value,
      error: f.value || void 0,
      "fixed-height": "",
      onClose: ne[5] || (ne[5] = (M) => a("close"))
    }, {
      body: g(() => [
        w.value ? (n(), i(H, { key: 0 }, [
          t("section", Qp, [
            t("div", Xp, [
              t("span", Zp, m(I.value), 1),
              t("span", eg, m(U.value.inputs.length) + " input" + m(U.value.inputs.length === 1 ? "" : "s"), 1),
              t("span", tg, m(U.value.outputs.length) + " output" + m(U.value.outputs.length === 1 ? "" : "s"), 1)
            ]),
            t("div", sg, [
              _(pt, { label: "Default Contract" }, {
                default: g(() => [
                  _(it, {
                    "model-value": w.value.default_contract,
                    "full-width": "",
                    "onUpdate:modelValue": ge
                  }, null, 8, ["model-value"])
                ]),
                _: 1
              }),
              _(pt, { label: "Display Name" }, {
                default: g(() => [
                  _(it, {
                    modelValue: U.value.display_name,
                    "onUpdate:modelValue": ne[0] || (ne[0] = (M) => U.value.display_name = M),
                    "full-width": ""
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ]),
            _(pt, { label: "Description" }, {
              default: g(() => [
                _(Js, {
                  modelValue: U.value.description,
                  "onUpdate:modelValue": ne[1] || (ne[1] = (M) => U.value.description = M),
                  rows: 2,
                  placeholder: "Optional description for this contract"
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            })
          ]),
          t("section", og, [
            t("div", ng, [
              t("div", ag, [
                _(Ls, { variant: "section" }, {
                  default: g(() => [...ne[6] || (ne[6] = [
                    $("INPUTS", -1)
                  ])]),
                  _: 1
                })
              ]),
              U.value.inputs.length ? h("", !0) : (n(), i("div", lg, " No inputs configured. ")),
              (n(!0), i(H, null, _e(U.value.inputs, (M, A) => (n(), i("div", {
                key: `input-${A}`,
                class: De(["item-card", { expanded: y.value === A }])
              }, [
                t("div", {
                  class: "item-card-header item-card-header-toggle",
                  onClick: (Q) => de(A)
                }, [
                  t("div", null, [
                    t("div", rg, m(M.name || `Input ${A + 1}`), 1),
                    t("div", ug, [
                      $(" Node " + m(M.node_id || "?"), 1),
                      M.widget_idx !== void 0 ? (n(), i(H, { key: 0 }, [
                        $(" · Widget " + m(M.widget_idx), 1)
                      ], 64)) : h("", !0)
                    ]),
                    t("div", cg, [
                      t("span", null, m(M.type || "string"), 1),
                      t("span", null, m(M.required ? "required" : "optional"), 1),
                      M.default !== void 0 && M.default !== "" ? (n(), i("span", dg, "default " + m(ie(M.default)), 1)) : h("", !0)
                    ])
                  ]),
                  _(Re, {
                    size: "sm",
                    variant: "ghost",
                    onClick: st((Q) => oe(A), ["stop"])
                  }, {
                    default: g(() => [...ne[7] || (ne[7] = [
                      $(" Remove ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ], 8, ig),
                y.value === A ? (n(), i("div", {
                  key: 0,
                  class: "item-grid",
                  onClick: ne[2] || (ne[2] = st(() => {
                  }, ["stop"]))
                }, [
                  _(pt, { label: "Name" }, {
                    default: g(() => [
                      _(it, {
                        modelValue: M.name,
                        "onUpdate:modelValue": (Q) => M.name = Q,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  _(pt, { label: "Display Name" }, {
                    default: g(() => [
                      _(it, {
                        modelValue: M.display_name,
                        "onUpdate:modelValue": (Q) => M.display_name = Q,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  _(pt, { label: "Type" }, {
                    default: g(() => [
                      _(Ks, {
                        "model-value": M.type,
                        options: x,
                        "full-width": "",
                        "onUpdate:modelValue": (Q) => M.type = Q
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  _(pt, { label: "Required" }, {
                    default: g(() => [
                      _(Ks, {
                        "model-value": M.required ? "true" : "false",
                        options: C,
                        "full-width": "",
                        "onUpdate:modelValue": (Q) => M.required = Q === "true"
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  _(pt, {
                    class: De({ "item-grid-full": M.type === "string" || M.type === "enum" }),
                    label: "Default"
                  }, {
                    default: g(() => [
                      M.type === "string" ? (n(), L(Js, {
                        key: 0,
                        "model-value": te(M.default),
                        rows: 3,
                        placeholder: "Default string value",
                        "onUpdate:modelValue": (Q) => M.default = Q
                      }, null, 8, ["model-value", "onUpdate:modelValue"])) : (n(), L(it, {
                        key: 1,
                        modelValue: M.default,
                        "onUpdate:modelValue": (Q) => M.default = Q,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]))
                    ]),
                    _: 2
                  }, 1032, ["class"]),
                  N(M.type) ? (n(), L(pt, {
                    key: 0,
                    label: "Min"
                  }, {
                    default: g(() => [
                      _(it, {
                        "model-value": q(M.min),
                        "full-width": "",
                        "onUpdate:modelValue": (Q) => M.min = D(Q)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : h("", !0),
                  N(M.type) ? (n(), L(pt, {
                    key: 1,
                    label: "Max"
                  }, {
                    default: g(() => [
                      _(it, {
                        "model-value": q(M.max),
                        "full-width": "",
                        "onUpdate:modelValue": (Q) => M.max = D(Q)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : h("", !0),
                  z(M.type) ? (n(), L(pt, {
                    key: 2,
                    class: "item-grid-full",
                    label: "Enum Values"
                  }, {
                    default: g(() => [
                      _(Js, {
                        "model-value": G(M.enum_values),
                        rows: 4,
                        placeholder: "One or more values, separated by commas or new lines",
                        "onUpdate:modelValue": (Q) => M.enum_values = Z(Q)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : h("", !0)
                ])) : h("", !0)
              ], 2))), 128))
            ]),
            t("div", mg, [
              t("div", fg, [
                _(Ls, { variant: "section" }, {
                  default: g(() => [...ne[8] || (ne[8] = [
                    $("OUTPUTS", -1)
                  ])]),
                  _: 1
                })
              ]),
              U.value.outputs.length ? h("", !0) : (n(), i("div", vg, " No outputs configured. ")),
              (n(!0), i(H, null, _e(U.value.outputs, (M, A) => (n(), i("div", {
                key: `output-${A}`,
                class: De(["item-card", { expanded: k.value === A }])
              }, [
                t("div", {
                  class: "item-card-header item-card-header-toggle",
                  onClick: (Q) => Ne(A)
                }, [
                  t("div", null, [
                    t("div", gg, m(M.name || `Output ${A + 1}`), 1),
                    t("div", hg, [
                      $(" Node " + m(M.node_id || "?"), 1),
                      M.selector ? (n(), i(H, { key: 0 }, [
                        $(" · " + m(M.selector), 1)
                      ], 64)) : h("", !0)
                    ]),
                    t("div", yg, [
                      t("span", null, m(M.type || "file"), 1)
                    ])
                  ]),
                  _(Re, {
                    size: "sm",
                    variant: "ghost",
                    onClick: st((Q) => X(A), ["stop"])
                  }, {
                    default: g(() => [...ne[9] || (ne[9] = [
                      $(" Remove ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ], 8, pg),
                k.value === A ? (n(), i("div", {
                  key: 0,
                  class: "item-grid",
                  onClick: ne[3] || (ne[3] = st(() => {
                  }, ["stop"]))
                }, [
                  _(pt, { label: "Name" }, {
                    default: g(() => [
                      _(it, {
                        modelValue: M.name,
                        "onUpdate:modelValue": (Q) => M.name = Q,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  _(pt, { label: "Display Name" }, {
                    default: g(() => [
                      _(it, {
                        modelValue: M.display_name,
                        "onUpdate:modelValue": (Q) => M.display_name = Q,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  _(pt, { label: "Type" }, {
                    default: g(() => [
                      _(Ks, {
                        "model-value": M.type,
                        options: x,
                        "full-width": "",
                        "onUpdate:modelValue": (Q) => M.type = Q
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
      footer: g(() => [
        t("div", wg, [
          t("div", _g, [
            _(Re, {
              variant: "secondary",
              onClick: Ue
            }, {
              default: g(() => [...ne[10] || (ne[10] = [
                $(" Open I/O Mapping Mode ", -1)
              ])]),
              _: 1
            })
          ]),
          t("div", kg, [
            _(Re, {
              variant: "secondary",
              onClick: ne[4] || (ne[4] = (M) => a("close"))
            }, {
              default: g(() => [...ne[11] || (ne[11] = [
                $(" Close ", -1)
              ])]),
              _: 1
            }),
            _(Re, {
              variant: "danger",
              disabled: !S.value,
              loading: v.value,
              onClick: me
            }, {
              default: g(() => [...ne[12] || (ne[12] = [
                $(" Delete Contract ", -1)
              ])]),
              _: 1
            }, 8, ["disabled", "loading"]),
            _(Re, {
              variant: "primary",
              loading: d.value,
              onClick: pe
            }, {
              default: g(() => [...ne[13] || (ne[13] = [
                $(" Save Contract ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ])
        ])
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), $g = /* @__PURE__ */ Se(bg, [["__scopeId", "data-v-143775b1"]]), nt = fo({
  items: [],
  status: "idle"
});
let ws = null;
function Qr() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function Fa(e) {
  return nt.items.find((s) => s.id === e);
}
async function wo() {
  if (nt.status === "downloading") return;
  const e = nt.items.find((s) => s.status === "queued");
  if (!e) {
    nt.status = "idle";
    return;
  }
  nt.status = "downloading", e.status = "downloading", e.progress = 0, e.downloaded = 0;
  try {
    await Cg(e), e.status = "completed", e.progress = 100;
  } catch (s) {
    e.status = "failed", e.error = s instanceof Error ? s.message : "Download failed", e.retries++;
  } finally {
    nt.status = "idle", wo();
  }
}
async function Cg(e) {
  return new Promise((s, o) => {
    ws && (ws.close(), ws = null);
    const a = new URLSearchParams({
      url: e.url,
      target_path: e.targetPath,
      filename: e.filename,
      workflow: e.workflow
    }), l = new EventSource(`/v2/comfygit/models/download-stream?${a}`);
    ws = l;
    let r = Date.now(), u = 0, c = Date.now(), d = !1;
    const v = 2e3, f = window.setInterval(() => {
      d || Date.now() - c > v && (e.speed = 0, e.eta = 0);
    }, 250), p = () => {
      window.clearInterval(f);
    };
    l.onmessage = (w) => {
      try {
        const y = JSON.parse(w.data);
        switch (y.type) {
          case "progress":
            e.downloaded = y.downloaded || 0, e.size = y.total || e.size, c = Date.now();
            const k = c, x = (k - r) / 1e3, C = e.downloaded - u;
            if (C > 0 && x > 0)
              if (e.speed = C / x, r = k, u = e.downloaded, e.speed > 0 && e.size > 0) {
                const S = e.size - e.downloaded;
                e.eta = S / e.speed;
              } else
                e.eta = 0;
            e.size > 0 && (e.progress = Math.round(e.downloaded / e.size * 100));
            break;
          case "complete":
            d = !0, p(), l.close(), ws = null, s();
            break;
          case "error":
            d = !0, p(), l.close(), ws = null, o(new Error(y.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, l.onerror = () => {
      p(), l.close(), ws = null, d || o(new Error("Connection lost"));
    };
  });
}
async function xg() {
  try {
    const e = await fetch("/v2/comfygit/models/pending-downloads");
    if (!e.ok) return;
    const s = await e.json();
    if (!s.pending_downloads || s.pending_downloads.length === 0) return;
    for (const o of s.pending_downloads) {
      if (nt.items.some((l) => l.url === o.url && l.filename === o.filename))
        continue;
      const a = {
        id: Qr(),
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
      nt.items.push(a);
    }
    console.log(`[ComfyGit] Loaded ${s.pending_downloads.length} pending download(s)`);
  } catch (e) {
    console.warn("[ComfyGit] Failed to load pending downloads:", e);
  }
}
function Lo() {
  function e(C) {
    for (const S of C) {
      if (nt.items.some(
        (E) => E.url === S.url && E.targetPath === S.targetPath && ["queued", "downloading", "paused", "completed"].includes(E.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${S.filename}`);
        continue;
      }
      const I = {
        id: Qr(),
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
      nt.items.push(I);
    }
    nt.status === "idle" && wo();
  }
  async function s(C) {
    const S = Fa(C);
    if (S) {
      if (S.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(S.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        ws && (ws.close(), ws = null), S.status = "failed", S.error = "Cancelled by user", nt.status = "idle", wo();
      } else if (S.status === "queued") {
        const U = nt.items.findIndex((I) => I.id === C);
        U >= 0 && nt.items.splice(U, 1);
      }
    }
  }
  function o(C) {
    const S = Fa(C);
    !S || S.status !== "failed" || (S.status = "queued", S.error = void 0, S.progress = 0, S.downloaded = 0, nt.status === "idle" && wo());
  }
  function a(C) {
    const S = Fa(C);
    !S || S.status !== "paused" || (S.status = "queued", nt.status === "idle" && wo());
  }
  function l() {
    const C = nt.items.filter((S) => S.status === "paused");
    for (const S of C)
      S.status = "queued";
    nt.status === "idle" && wo();
  }
  function r(C) {
    const S = nt.items.findIndex((U) => U.id === C);
    S >= 0 && ["completed", "failed", "paused"].includes(nt.items[S].status) && nt.items.splice(S, 1);
  }
  function u() {
    nt.items = nt.items.filter((C) => C.status !== "completed");
  }
  function c() {
    nt.items = nt.items.filter((C) => C.status !== "failed");
  }
  const d = O(
    () => nt.items.find((C) => C.status === "downloading")
  ), v = O(
    () => nt.items.filter((C) => C.status === "queued")
  ), f = O(
    () => nt.items.filter((C) => C.status === "completed")
  ), p = O(
    () => nt.items.filter((C) => C.status === "failed")
  ), w = O(
    () => nt.items.filter((C) => C.status === "paused")
  ), y = O(() => nt.items.length > 0), k = O(
    () => nt.items.filter((C) => C.status === "queued" || C.status === "downloading").length
  ), x = O(
    () => nt.items.some((C) => C.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: An(nt),
    // Computed
    currentDownload: d,
    queuedItems: v,
    completedItems: f,
    failedItems: p,
    pausedItems: w,
    hasItems: y,
    activeCount: k,
    hasPaused: x,
    // Actions
    addToQueue: e,
    cancelDownload: s,
    retryDownload: o,
    resumeDownload: a,
    resumeAllPaused: l,
    removeItem: r,
    clearCompleted: u,
    clearFailed: c,
    loadPendingDownloads: xg
  };
}
function Xr() {
  const e = b(null), s = b(null), o = b([]), a = b([]), l = b(!1), r = b(null);
  async function u(U, I) {
    var N;
    if (!((N = window.app) != null && N.api))
      throw new Error("ComfyUI API not available");
    const E = await window.app.api.fetchApi(U, I);
    if (!E.ok) {
      const z = await E.json().catch(() => ({})), q = z.error || z.message || `Request failed: ${E.status}`;
      throw new Error(q);
    }
    return E.json();
  }
  async function c(U) {
    l.value = !0, r.value = null;
    try {
      let I;
      return Ao() || (I = await u(
        `/v2/comfygit/workflow/${U}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), I.nodes.version_gated = I.nodes.version_gated || [], I.nodes.uninstallable = I.nodes.uninstallable || [], I.node_guidance = I.node_guidance || {}, I.package_aliases = I.package_aliases || {}, e.value = I, I;
    } catch (I) {
      const E = I instanceof Error ? I.message : "Unknown error occurred";
      throw r.value = E, I;
    } finally {
      l.value = !1;
    }
  }
  async function d(U, I, E, N) {
    l.value = !0, r.value = null;
    try {
      let z;
      if (!Ao()) {
        const q = Object.fromEntries(I), D = Object.fromEntries(E), G = N ? Array.from(N) : [];
        z = await u(
          `/v2/comfygit/workflow/${U}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: q,
              model_choices: D,
              skipped_packages: G
            })
          }
        );
      }
      return s.value = z, z;
    } catch (z) {
      const q = z instanceof Error ? z.message : "Unknown error occurred";
      throw r.value = q, z;
    } finally {
      l.value = !1;
    }
  }
  async function v(U, I = 10) {
    l.value = !0, r.value = null;
    try {
      let E;
      return Ao() || (E = await u(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: U, limit: I })
        }
      )), o.value = E.results, E.results;
    } catch (E) {
      const N = E instanceof Error ? E.message : "Unknown error occurred";
      throw r.value = N, E;
    } finally {
      l.value = !1;
    }
  }
  async function f(U, I = 10) {
    l.value = !0, r.value = null;
    try {
      let E;
      return Ao() || (E = await u(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: U, limit: I })
        }
      )), a.value = E.results, E.results;
    } catch (E) {
      const N = E instanceof Error ? E.message : "Unknown error occurred";
      throw r.value = N, E;
    } finally {
      l.value = !1;
    }
  }
  const p = fo({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: [],
    nodesInstalled: []
  });
  function w() {
    p.phase = "idle", p.currentFile = void 0, p.currentFileIndex = void 0, p.totalFiles = void 0, p.bytesDownloaded = void 0, p.bytesTotal = void 0, p.completedFiles = [], p.nodesToInstall = [], p.nodesInstalled = [], p.installError = void 0, p.needsRestart = void 0, p.error = void 0, p.nodeInstallProgress = void 0;
  }
  async function y(U) {
    p.phase = "installing", p.nodesInstalled = [], p.installError = void 0, p.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      return Ao(), await k(U);
    } catch (I) {
      const E = I instanceof Error ? I.message : "Failed to install nodes";
      throw p.installError = E, I;
    }
  }
  async function k(U) {
    var E;
    const I = await u(
      `/v2/comfygit/workflow/${U}/install`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          packages: p.nodesToInstall
        })
      }
    );
    if (p.nodeInstallProgress) {
      p.nodeInstallProgress.totalNodes = p.nodesToInstall.length;
      const N = new Map(((E = I.failed) == null ? void 0 : E.map((z) => [z.node_id, z.error])) || []);
      for (let z = 0; z < p.nodesToInstall.length; z++) {
        const q = p.nodesToInstall[z], D = N.get(q);
        p.nodeInstallProgress.completedNodes.push({
          node_id: q,
          success: !D,
          error: D
        });
      }
    }
    return p.nodesInstalled = I.nodes_installed, p.needsRestart = I.nodes_installed.length > 0, I.failed && I.failed.length > 0 && (p.installError = `${I.failed.length} package(s) failed to install`), I;
  }
  async function x(U, I, E) {
    w(), p.phase = "resolving", r.value = null;
    const N = Object.fromEntries(I), z = Object.fromEntries(E);
    try {
      const q = await fetch(`/v2/comfygit/workflow/${U}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: N,
          model_choices: z
        })
      });
      if (!q.ok)
        throw new Error(`Request failed: ${q.status}`);
      if (!q.body)
        throw new Error("No response body");
      const D = q.body.getReader(), G = new TextDecoder();
      let Z = "";
      for (; ; ) {
        const { done: te, value: ie } = await D.read();
        if (te) break;
        Z += G.decode(ie, { stream: !0 });
        const ge = Z.split(`

`);
        Z = ge.pop() || "";
        for (const oe of ge) {
          if (!oe.trim()) continue;
          const X = oe.split(`
`);
          let de = "", Ne = "";
          for (const le of X)
            le.startsWith("event: ") ? de = le.slice(7) : le.startsWith("data: ") && (Ne = le.slice(6));
          if (Ne)
            try {
              const le = JSON.parse(Ne);
              C(de, le);
            } catch (le) {
              console.warn("Failed to parse SSE event:", le);
            }
        }
      }
    } catch (q) {
      const D = q instanceof Error ? q.message : "Unknown error occurred";
      throw r.value = D, p.error = D, p.phase = "error", q;
    }
  }
  function C(U, I) {
    switch (U) {
      case "batch_start":
        p.phase = "downloading", p.totalFiles = I.total;
        break;
      case "file_start":
        p.currentFile = I.filename, p.currentFileIndex = I.index, p.bytesDownloaded = 0, p.bytesTotal = void 0;
        break;
      case "file_progress":
        p.bytesDownloaded = I.downloaded, p.bytesTotal = I.total;
        break;
      case "file_complete":
        p.completedFiles.push({
          filename: I.filename,
          success: I.success,
          error: I.error
        });
        break;
      case "batch_complete":
        break;
      case "done":
        p.nodesToInstall = I.nodes_to_install || [], I.download_results && (p.completedFiles = I.download_results), p.phase = "complete";
        break;
      case "error":
        p.error = I.message, p.phase = "error", r.value = I.message;
        break;
    }
  }
  function S(U, I) {
    const { addToQueue: E } = Lo(), N = I.filter((z) => z.url && z.target_path).map((z) => ({
      workflow: U,
      filename: z.filename,
      url: z.url,
      targetPath: z.target_path,
      size: z.size || 0,
      type: "model"
    }));
    return N.length > 0 && E(N), N.length;
  }
  return {
    // State
    result: e,
    appliedResult: s,
    searchResults: o,
    modelSearchResults: a,
    isLoading: l,
    error: r,
    progress: p,
    // Methods
    analyzeWorkflow: c,
    applyResolution: d,
    applyResolutionWithProgress: x,
    installNodes: y,
    searchNodes: v,
    searchModels: f,
    resetProgress: w,
    queueModelDownloads: S
  };
}
const Sg = { class: "resolution-stepper" }, Ig = { class: "stepper-header" }, Eg = ["onClick"], Tg = {
  key: 0,
  class: "step-icon"
}, Mg = {
  key: 1,
  class: "step-number"
}, Pg = { class: "step-label" }, Rg = {
  key: 0,
  class: "step-connector"
}, Ng = { class: "stepper-content" }, Lg = /* @__PURE__ */ xe({
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
    function l(v) {
      var f;
      if ((f = o.stepStats) != null && f[v]) {
        const p = o.stepStats[v];
        return p.total > 0 && p.resolved === p.total;
      }
      return o.completedSteps.includes(v);
    }
    function r(v) {
      var f;
      if ((f = o.stepStats) != null && f[v]) {
        const p = o.stepStats[v];
        return p.resolved > 0 && p.resolved < p.total;
      }
      return !1;
    }
    function u(v) {
      return l(v) ? "state-complete" : r(v) ? "state-partial" : "state-pending";
    }
    function c(v) {
      return !1;
    }
    function d(v) {
      a("step-change", v);
    }
    return (v, f) => (n(), i("div", Sg, [
      t("div", Ig, [
        (n(!0), i(H, null, _e(e.steps, (p, w) => (n(), i("div", {
          key: p.id,
          class: De(["step", {
            active: e.currentStep === p.id,
            completed: l(p.id),
            "in-progress": r(p.id),
            disabled: c(p.id)
          }]),
          onClick: (y) => d(p.id)
        }, [
          t("div", {
            class: De(["step-indicator", u(p.id)])
          }, [
            l(p.id) ? (n(), i("span", Tg, "✓")) : (n(), i("span", Mg, m(w + 1), 1))
          ], 2),
          t("div", Pg, m(p.label), 1),
          w < e.steps.length - 1 ? (n(), i("div", Rg)) : h("", !0)
        ], 10, Eg))), 128))
      ]),
      t("div", Ng, [
        et(v.$slots, "default", {}, void 0)
      ])
    ]));
  }
}), Dg = /* @__PURE__ */ Se(Lg, [["__scopeId", "data-v-2a7b3af8"]]), Og = /* @__PURE__ */ xe({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(e) {
    const s = e, o = O(() => s.confidence >= 0.9 ? "high" : s.confidence >= 0.7 ? "medium" : "low"), a = O(() => `confidence-${o.value}`), l = O(() => s.showPercentage ? `${Math.round(s.confidence * 100)}%` : o.value.charAt(0).toUpperCase() + o.value.slice(1));
    return (r, u) => (n(), i("span", {
      class: De(["confidence-badge", a.value, e.size])
    }, m(l.value), 3));
  }
}), Kn = /* @__PURE__ */ Se(Og, [["__scopeId", "data-v-17ec4b80"]]), Ug = { class: "node-info" }, Ag = { class: "node-info-text" }, zg = { class: "item-body" }, Vg = {
  key: 0,
  class: "resolved-state"
}, Fg = {
  key: 1,
  class: "multiple-options"
}, Bg = {
  key: 0,
  class: "installed-packs-section"
}, Wg = { class: "installed-packs-list" }, Gg = ["onClick"], jg = { class: "installed-pack-name" }, Hg = { class: "installed-pack-source" }, qg = { class: "options-list" }, Kg = ["onClick"], Jg = ["name", "value", "checked", "onChange"], Yg = { class: "option-content" }, Qg = { class: "option-header" }, Xg = { class: "option-package-id" }, Zg = {
  key: 0,
  class: "option-title"
}, eh = { class: "option-meta" }, th = {
  key: 0,
  class: "installed-badge"
}, sh = { class: "action-buttons" }, oh = {
  key: 2,
  class: "unresolved"
}, nh = {
  key: 0,
  class: "installed-packs-section"
}, ah = { class: "installed-packs-list" }, lh = ["onClick"], ih = { class: "installed-pack-name" }, rh = { class: "installed-pack-source" }, uh = {
  key: 1,
  class: "searching-state"
}, ch = { class: "options-list" }, dh = ["onClick"], mh = ["name", "value"], fh = { class: "option-content" }, vh = { class: "option-header" }, ph = { class: "option-package-id" }, gh = {
  key: 0,
  class: "option-description"
}, hh = { class: "option-meta" }, yh = {
  key: 0,
  class: "installed-badge"
}, wh = {
  key: 3,
  class: "unresolved-message"
}, _h = { class: "action-buttons" }, kh = /* @__PURE__ */ xe({
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
    const o = e, a = s;
    function l(f, p = 80) {
      return f.length <= p ? f : f.slice(0, p - 3) + "...";
    }
    const r = O(() => !!o.choice);
    O(() => {
      var f;
      return (f = o.choice) == null ? void 0 : f.action;
    }), O(() => {
      var f;
      return (f = o.choice) == null ? void 0 : f.package_id;
    });
    const u = O(() => o.installedNodePacks || []), c = O(() => {
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
      a("option-selected", f);
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
    return (f, p) => (n(), i("div", {
      class: De(["node-resolution-item", { selected: e.isSelected, ambiguous: e.hasMultipleOptions, resolved: r.value }])
    }, [
      t("div", Ug, [
        t("span", Ag, [
          p[7] || (p[7] = $("Node type: ", -1)),
          t("code", null, m(e.nodeType), 1)
        ]),
        e.statusLabel ? (n(), i("span", {
          key: 0,
          class: De(["status-badge", c.value])
        }, m(e.statusLabel), 3)) : h("", !0)
      ]),
      t("div", zg, [
        r.value ? (n(), i("div", Vg, [
          _(Re, {
            variant: "ghost",
            size: "sm",
            onClick: p[0] || (p[0] = (w) => a("clear-choice"))
          }, {
            default: g(() => [...p[8] || (p[8] = [
              $(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (n(), i("div", Fg, [
          u.value.length > 0 ? (n(), i("div", Bg, [
            p[9] || (p[9] = t("p", { class: "options-prompt" }, "Or map to an installed node pack:", -1)),
            t("div", Wg, [
              (n(!0), i(H, null, _e(u.value, (w) => (n(), i("button", {
                key: w.package_id,
                type: "button",
                class: "installed-pack-chip",
                onClick: (y) => a("installed-pack-selected", w.package_id)
              }, [
                t("span", jg, m(w.package_id), 1),
                t("span", Hg, m(v(w.source)), 1)
              ], 8, Gg))), 128))
            ])
          ])) : h("", !0),
          p[13] || (p[13] = t("p", { class: "options-prompt" }, "Potential matches:", -1)),
          t("div", qg, [
            (n(!0), i(H, null, _e(e.options, (w, y) => (n(), i("label", {
              key: w.package_id,
              class: De(["option-card", { selected: e.selectedOptionIndex === y }]),
              onClick: (k) => d(y)
            }, [
              t("input", {
                type: "radio",
                name: `node-option-${e.nodeType}`,
                value: y,
                checked: e.selectedOptionIndex === y,
                onChange: (k) => d(y)
              }, null, 40, Jg),
              t("div", Yg, [
                t("div", Qg, [
                  t("span", Xg, m(w.package_id), 1),
                  _(Kn, {
                    confidence: w.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                w.title && w.title !== w.package_id ? (n(), i("div", Zg, m(w.title), 1)) : h("", !0),
                t("div", eh, [
                  w.is_installed ? (n(), i("span", th, "Already Installed")) : h("", !0)
                ])
              ])
            ], 10, Kg))), 128))
          ]),
          t("div", sh, [
            _(Re, {
              variant: "secondary",
              size: "sm",
              onClick: p[1] || (p[1] = (w) => a("search"))
            }, {
              default: g(() => [...p[10] || (p[10] = [
                $(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            _(Re, {
              variant: "secondary",
              size: "sm",
              onClick: p[2] || (p[2] = (w) => a("manual-entry"))
            }, {
              default: g(() => [...p[11] || (p[11] = [
                $(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            _(Re, {
              variant: "secondary",
              size: "sm",
              onClick: p[3] || (p[3] = (w) => a("mark-optional"))
            }, {
              default: g(() => [...p[12] || (p[12] = [
                $(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (n(), i("div", oh, [
          u.value.length > 0 ? (n(), i("div", nh, [
            p[14] || (p[14] = t("p", { class: "options-prompt" }, "Map to an installed node pack:", -1)),
            t("div", ah, [
              (n(!0), i(H, null, _e(u.value, (w) => (n(), i("button", {
                key: w.package_id,
                type: "button",
                class: "installed-pack-chip",
                onClick: (y) => a("installed-pack-selected", w.package_id)
              }, [
                t("span", ih, m(w.package_id), 1),
                t("span", rh, m(v(w.source)), 1)
              ], 8, lh))), 128))
            ])
          ])) : h("", !0),
          e.isSearching ? (n(), i("div", uh, [...p[15] || (p[15] = [
            t("span", { class: "searching-spinner" }, null, -1),
            t("span", null, "Searching registry...", -1)
          ])])) : e.searchResults && e.searchResults.length > 0 ? (n(), i(H, { key: 2 }, [
            p[16] || (p[16] = t("p", { class: "options-prompt" }, "Potential matches found:", -1)),
            t("div", ch, [
              (n(!0), i(H, null, _e(e.searchResults.slice(0, 5), (w, y) => (n(), i("label", {
                key: w.package_id,
                class: "option-card",
                onClick: (k) => a("search-result-selected", w)
              }, [
                t("input", {
                  type: "radio",
                  name: `search-result-${e.nodeType}`,
                  value: y
                }, null, 8, mh),
                t("div", fh, [
                  t("div", vh, [
                    t("span", ph, m(w.package_id), 1),
                    _(Kn, {
                      confidence: w.match_confidence,
                      size: "sm"
                    }, null, 8, ["confidence"])
                  ]),
                  w.description ? (n(), i("div", gh, m(l(w.description)), 1)) : h("", !0),
                  t("div", hh, [
                    w.is_installed ? (n(), i("span", yh, "Already Installed")) : h("", !0)
                  ])
                ])
              ], 8, dh))), 128))
            ])
          ], 64)) : (n(), i("div", wh, [...p[17] || (p[17] = [
            t("span", { class: "warning-icon" }, "⚠", -1),
            t("span", null, "No matching package found in registry", -1)
          ])])),
          t("div", _h, [
            _(Re, {
              variant: "secondary",
              size: "sm",
              onClick: p[4] || (p[4] = (w) => a("search"))
            }, {
              default: g(() => {
                var w;
                return [
                  $(m((w = e.searchResults) != null && w.length ? "Refine Search" : "Search Registry"), 1)
                ];
              }),
              _: 1
            }),
            _(Re, {
              variant: "secondary",
              size: "sm",
              onClick: p[5] || (p[5] = (w) => a("manual-entry"))
            }, {
              default: g(() => [...p[18] || (p[18] = [
                $(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            _(Re, {
              variant: "secondary",
              size: "sm",
              onClick: p[6] || (p[6] = (w) => a("mark-optional"))
            }, {
              default: g(() => [...p[19] || (p[19] = [
                $(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), bh = /* @__PURE__ */ Se(kh, [["__scopeId", "data-v-fb0bbf03"]]), $h = { class: "item-navigator" }, Ch = { class: "nav-item-info" }, xh = ["title"], Sh = { class: "nav-controls" }, Ih = { class: "nav-arrows" }, Eh = ["disabled"], Th = ["disabled"], Mh = { class: "nav-position" }, Ph = /* @__PURE__ */ xe({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(e, { emit: s }) {
    const o = s;
    return (a, l) => (n(), i("div", $h, [
      t("div", Ch, [
        t("code", {
          class: "item-name",
          title: e.itemName
        }, m(e.itemName), 9, xh)
      ]),
      t("div", Sh, [
        t("div", Ih, [
          t("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === 0,
            onClick: l[0] || (l[0] = (r) => o("prev")),
            title: "Previous item"
          }, " ← ", 8, Eh),
          t("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === e.totalItems - 1,
            onClick: l[1] || (l[1] = (r) => o("next")),
            title: "Next item"
          }, " → ", 8, Th)
        ]),
        t("span", Mh, m(e.currentIndex + 1) + "/" + m(e.totalItems), 1)
      ])
    ]));
  }
}), Zr = /* @__PURE__ */ Se(Ph, [["__scopeId", "data-v-74af7920"]]), Rh = { class: "node-resolution-step" }, Nh = {
  key: 0,
  class: "auto-resolved-section"
}, Lh = { class: "section-header" }, Dh = { class: "stat-badge" }, Oh = { class: "resolved-packages-list" }, Uh = { class: "package-info" }, Ah = { class: "package-id" }, zh = { class: "node-count" }, Vh = { class: "package-actions" }, Fh = {
  key: 0,
  class: "status-badge install"
}, Bh = {
  key: 1,
  class: "status-badge skip"
}, Wh = ["onClick"], Gh = {
  key: 1,
  class: "section-divider"
}, jh = { class: "step-header" }, Hh = { class: "stat-badge" }, qh = {
  key: 1,
  class: "step-body"
}, Kh = {
  key: 3,
  class: "empty-state"
}, Jh = { class: "node-modal-body" }, Yh = { class: "node-search-results-container" }, Qh = {
  key: 0,
  class: "node-search-results"
}, Xh = ["onClick"], Zh = { class: "node-result-header" }, ey = { class: "node-result-package-id" }, ty = {
  key: 0,
  class: "node-result-description"
}, sy = {
  key: 1,
  class: "node-empty-state"
}, oy = {
  key: 2,
  class: "node-empty-state"
}, ny = {
  key: 3,
  class: "node-empty-state"
}, ay = { class: "node-manual-entry-modal" }, ly = { class: "node-modal-body" }, iy = { class: "node-modal-actions" }, ry = /* @__PURE__ */ xe({
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
    const o = e, a = s, { searchNodes: l } = Xr(), r = b(0), u = b(!1), c = b(!1), d = b(""), v = b(""), f = b([]), p = b(!1), w = b(/* @__PURE__ */ new Map()), y = b(/* @__PURE__ */ new Set()), k = b(!1);
    function x() {
      k.value && pe(), k.value = !1;
    }
    const C = O(() => o.nodes[r.value]), S = O(() => o.nodes.filter((P) => o.nodeChoices.has(P.node_type)).length), U = O(() => C.value ? w.value.get(C.value.node_type) || [] : []), I = O(() => C.value ? y.value.has(C.value.node_type) : !1);
    kt(C, async (P) => {
      var R;
      P && ((R = P.options) != null && R.length || w.value.has(P.node_type) || y.value.has(P.node_type) || o.nodeChoices.has(P.node_type) || await E(P.node_type));
    }, { immediate: !0 });
    async function E(P) {
      y.value.add(P);
      try {
        const R = await l(P, 5);
        w.value.set(P, R);
      } catch {
        w.value.set(P, []);
      } finally {
        y.value.delete(P);
      }
    }
    const N = O(() => o.autoResolvedPackages.filter((P) => !o.skippedPackages.has(P.package_id)).length);
    function z(P) {
      return o.skippedPackages.has(P);
    }
    function q(P) {
      a("package-skip", P);
    }
    const D = O(() => {
      var R;
      if (!C.value) return "not-found";
      const P = o.nodeChoices.get(C.value.node_type);
      if (P)
        switch (P.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (R = C.value.options) != null && R.length ? "ambiguous" : "not-found";
    }), G = O(() => {
      var R;
      if (!C.value) return;
      const P = o.nodeChoices.get(C.value.node_type);
      if (P)
        switch (P.action) {
          case "install":
            return P.package_id ? `→ ${P.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (R = C.value.options) != null && R.length ? `${C.value.options.length} matches` : "Not Found";
    });
    function Z(P) {
      P >= 0 && P < o.nodes.length && (r.value = P);
    }
    function te() {
      var P;
      for (let R = r.value + 1; R < o.nodes.length; R++) {
        const ce = o.nodes[R];
        if (!((P = o.nodeChoices) != null && P.has(ce.node_type))) {
          Z(R);
          return;
        }
      }
    }
    function ie() {
      C.value && (a("mark-optional", C.value.node_type), Rt(() => te()));
    }
    function ge() {
      C.value && (a("skip", C.value.node_type), Rt(() => te()));
    }
    function oe(P) {
      C.value && (a("option-selected", C.value.node_type, P), Rt(() => te()));
    }
    function X() {
      C.value && a("clear-choice", C.value.node_type);
    }
    function de() {
      C.value && (d.value = C.value.node_type, f.value = U.value, u.value = !0, ne(d.value));
    }
    function Ne() {
      v.value = "", c.value = !0;
    }
    function le(P) {
      C.value && (a("manual-entry", C.value.node_type, P), Rt(() => te()));
    }
    function pe() {
      u.value = !1, d.value = "", f.value = [];
    }
    function me() {
      c.value = !1, v.value = "";
    }
    let Ue = null;
    function se() {
      Ue && clearTimeout(Ue), Ue = setTimeout(() => {
        ne(d.value);
      }, 300);
    }
    async function ne(P) {
      if (!P.trim()) {
        f.value = [];
        return;
      }
      p.value = !0;
      try {
        f.value = await l(P, 10);
      } catch {
        f.value = [];
      } finally {
        p.value = !1;
      }
    }
    function M(P) {
      C.value && (a("manual-entry", C.value.node_type, P.package_id), pe(), Rt(() => te()));
    }
    function A(P) {
      C.value && (a("manual-entry", C.value.node_type, P.package_id), Rt(() => te()));
    }
    function Q() {
      !C.value || !v.value.trim() || (a("manual-entry", C.value.node_type, v.value.trim()), me(), Rt(() => te()));
    }
    return (P, R) => {
      var ce, Ve;
      return n(), i("div", Rh, [
        e.autoResolvedPackages.length > 0 ? (n(), i("div", Nh, [
          t("div", Lh, [
            R[6] || (R[6] = t("div", { class: "section-info" }, [
              t("h4", { class: "section-title" }, "Packages to Install"),
              t("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            t("span", Dh, m(N.value) + "/" + m(e.autoResolvedPackages.length) + " to install", 1)
          ]),
          t("div", Oh, [
            (n(!0), i(H, null, _e(e.autoResolvedPackages, (je) => (n(), i("div", {
              key: je.package_id,
              class: "resolved-package-item"
            }, [
              t("div", Uh, [
                t("code", Ah, m(je.package_id), 1),
                t("span", zh, m(je.node_types_count) + " node type" + m(je.node_types_count > 1 ? "s" : ""), 1)
              ]),
              t("div", Vh, [
                z(je.package_id) ? (n(), i("span", Bh, " SKIPPED ")) : (n(), i("span", Fh, " WILL INSTALL ")),
                t("button", {
                  class: "toggle-skip-btn",
                  onClick: (B) => q(je.package_id)
                }, m(z(je.package_id) ? "Include" : "Skip"), 9, Wh)
              ])
            ]))), 128))
          ])
        ])) : h("", !0),
        e.autoResolvedPackages.length > 0 && e.nodes.length > 0 ? (n(), i("div", Gh)) : h("", !0),
        e.nodes.length > 0 ? (n(), i(H, { key: 2 }, [
          t("div", jh, [
            R[7] || (R[7] = t("div", { class: "step-info" }, [
              t("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              t("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            t("span", Hh, m(S.value) + "/" + m(e.nodes.length) + " resolved", 1)
          ]),
          C.value ? (n(), L(Zr, {
            key: 0,
            "item-name": C.value.node_type,
            "current-index": r.value,
            "total-items": e.nodes.length,
            onPrev: R[0] || (R[0] = (je) => Z(r.value - 1)),
            onNext: R[1] || (R[1] = (je) => Z(r.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : h("", !0),
          C.value ? (n(), i("div", qh, [
            _(bh, {
              "node-type": C.value.node_type,
              "has-multiple-options": !!((ce = C.value.options) != null && ce.length),
              options: C.value.options,
              choice: (Ve = e.nodeChoices) == null ? void 0 : Ve.get(C.value.node_type),
              status: D.value,
              "status-label": G.value,
              "search-results": U.value,
              "is-searching": I.value,
              "installed-node-packs": e.installedNodePacks,
              onMarkOptional: ie,
              onSkip: ge,
              onManualEntry: Ne,
              onSearch: de,
              onOptionSelected: oe,
              onClearChoice: X,
              onSearchResultSelected: A,
              onInstalledPackSelected: le
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label", "search-results", "is-searching", "installed-node-packs"])
          ])) : h("", !0)
        ], 64)) : h("", !0),
        e.nodes.length === 0 && e.autoResolvedPackages.length === 0 ? (n(), i("div", Kh, [...R[8] || (R[8] = [
          t("p", null, "No nodes need resolution.", -1)
        ])])) : h("", !0),
        (n(), L(Ot, { to: "body" }, [
          u.value ? (n(), i("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: R[4] || (R[4] = st((je) => k.value = !0, ["self"])),
            onMouseup: st(x, ["self"])
          }, [
            t("div", {
              class: "node-search-modal",
              onMousedown: R[3] || (R[3] = (je) => k.value = !1)
            }, [
              t("div", { class: "node-modal-header" }, [
                R[9] || (R[9] = t("h4", null, "Search Node Packages", -1)),
                t("button", {
                  class: "node-modal-close-btn",
                  onClick: pe
                }, "✕")
              ]),
              t("div", Jh, [
                _(it, {
                  modelValue: d.value,
                  "onUpdate:modelValue": R[2] || (R[2] = (je) => d.value = je),
                  placeholder: "Search by node type, package name...",
                  onInput: se
                }, null, 8, ["modelValue"]),
                t("div", Yh, [
                  f.value.length > 0 ? (n(), i("div", Qh, [
                    (n(!0), i(H, null, _e(f.value, (je) => (n(), i("div", {
                      key: je.package_id,
                      class: "node-search-result-item",
                      onClick: (B) => M(je)
                    }, [
                      t("div", Zh, [
                        t("code", ey, m(je.package_id), 1),
                        je.match_confidence ? (n(), L(Kn, {
                          key: 0,
                          confidence: je.match_confidence,
                          size: "sm"
                        }, null, 8, ["confidence"])) : h("", !0)
                      ]),
                      je.description ? (n(), i("div", ty, m(je.description), 1)) : h("", !0)
                    ], 8, Xh))), 128))
                  ])) : p.value ? (n(), i("div", sy, "Searching...")) : d.value ? (n(), i("div", oy, 'No packages found matching "' + m(d.value) + '"', 1)) : (n(), i("div", ny, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : h("", !0)
        ])),
        (n(), L(Ot, { to: "body" }, [
          c.value ? (n(), i("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: st(me, ["self"])
          }, [
            t("div", ay, [
              t("div", { class: "node-modal-header" }, [
                R[10] || (R[10] = t("h4", null, "Enter Package Manually", -1)),
                t("button", {
                  class: "node-modal-close-btn",
                  onClick: me
                }, "✕")
              ]),
              t("div", ly, [
                _(it, {
                  modelValue: v.value,
                  "onUpdate:modelValue": R[5] || (R[5] = (je) => v.value = je),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                t("div", iy, [
                  _(Re, {
                    variant: "secondary",
                    onClick: me
                  }, {
                    default: g(() => [...R[11] || (R[11] = [
                      $("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  _(Re, {
                    variant: "primary",
                    disabled: !v.value.trim(),
                    onClick: Q
                  }, {
                    default: g(() => [...R[12] || (R[12] = [
                      $(" Add Package ", -1)
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
}), uy = /* @__PURE__ */ Se(ry, [["__scopeId", "data-v-94c6a438"]]), cy = { class: "node-info" }, dy = { class: "node-info-text" }, my = { class: "item-body" }, fy = {
  key: 0,
  class: "resolved-state"
}, vy = {
  key: 1,
  class: "multiple-options"
}, py = { class: "options-list" }, gy = ["onClick"], hy = ["name", "value", "checked", "onChange"], yy = { class: "option-content" }, wy = { class: "option-header" }, _y = { class: "option-filename" }, ky = { class: "option-meta" }, by = { class: "option-size" }, $y = { class: "option-category" }, Cy = { class: "option-path" }, xy = { class: "action-buttons" }, Sy = {
  key: 2,
  class: "unresolved"
}, Iy = { class: "action-buttons" }, Ey = /* @__PURE__ */ xe({
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
    const o = e, a = s, l = O(() => !!o.choice);
    O(() => {
      var d;
      return (d = o.choice) == null ? void 0 : d.action;
    }), O(() => {
      var d, v;
      return ((v = (d = o.choice) == null ? void 0 : d.selected_model) == null ? void 0 : v.filename) || "selected";
    });
    const r = O(() => {
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
    function u(d) {
      a("option-selected", d);
    }
    function c(d) {
      if (!d) return "Unknown";
      const v = d / (1024 * 1024 * 1024);
      return v >= 1 ? `${v.toFixed(2)} GB` : `${(d / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (d, v) => (n(), i("div", {
      class: De(["model-resolution-item", { resolved: l.value, ambiguous: e.hasMultipleOptions }])
    }, [
      t("div", cy, [
        t("span", dy, [
          v[7] || (v[7] = $("Used by: ", -1)),
          t("code", null, m(e.nodeType), 1)
        ]),
        e.statusLabel ? (n(), i("span", {
          key: 0,
          class: De(["status-badge", r.value])
        }, m(e.statusLabel), 3)) : h("", !0)
      ]),
      t("div", my, [
        l.value ? (n(), i("div", fy, [
          _(Re, {
            variant: "ghost",
            size: "sm",
            onClick: v[0] || (v[0] = (f) => a("clear-choice"))
          }, {
            default: g(() => [...v[8] || (v[8] = [
              $(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (n(), i("div", vy, [
          v[12] || (v[12] = t("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          t("div", py, [
            (n(!0), i(H, null, _e(e.options, (f, p) => (n(), i("label", {
              key: f.model.hash,
              class: De(["option-card", { selected: e.selectedOptionIndex === p }]),
              onClick: (w) => u(p)
            }, [
              t("input", {
                type: "radio",
                name: `model-option-${e.filename}`,
                value: p,
                checked: e.selectedOptionIndex === p,
                onChange: (w) => u(p)
              }, null, 40, hy),
              t("div", yy, [
                t("div", wy, [
                  t("span", _y, m(f.model.filename), 1),
                  _(Kn, {
                    confidence: f.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                t("div", ky, [
                  t("span", by, m(c(f.model.size)), 1),
                  t("span", $y, m(f.model.category), 1)
                ]),
                t("div", Cy, m(f.model.relative_path), 1)
              ])
            ], 10, gy))), 128))
          ]),
          t("div", xy, [
            _(Re, {
              variant: "ghost",
              size: "sm",
              onClick: v[1] || (v[1] = (f) => a("search"))
            }, {
              default: g(() => [...v[9] || (v[9] = [
                $(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            _(Re, {
              variant: "ghost",
              size: "sm",
              onClick: v[2] || (v[2] = (f) => a("download-url"))
            }, {
              default: g(() => [...v[10] || (v[10] = [
                $(" Download URL ", -1)
              ])]),
              _: 1
            }),
            _(Re, {
              variant: "secondary",
              size: "sm",
              onClick: v[3] || (v[3] = (f) => a("mark-optional"))
            }, {
              default: g(() => [...v[11] || (v[11] = [
                $(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (n(), i("div", Sy, [
          v[16] || (v[16] = t("div", { class: "unresolved-message" }, [
            t("span", { class: "warning-icon" }, "⚠"),
            t("span", null, "Model not found in workspace")
          ], -1)),
          t("div", Iy, [
            _(Re, {
              variant: "primary",
              size: "sm",
              onClick: v[4] || (v[4] = (f) => a("search"))
            }, {
              default: g(() => [...v[13] || (v[13] = [
                $(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            _(Re, {
              variant: "secondary",
              size: "sm",
              onClick: v[5] || (v[5] = (f) => a("download-url"))
            }, {
              default: g(() => [...v[14] || (v[14] = [
                $(" Download URL ", -1)
              ])]),
              _: 1
            }),
            _(Re, {
              variant: "secondary",
              size: "sm",
              onClick: v[6] || (v[6] = (f) => a("mark-optional"))
            }, {
              default: g(() => [...v[15] || (v[15] = [
                $(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), Ty = /* @__PURE__ */ Se(Ey, [["__scopeId", "data-v-8a82fefa"]]), My = { class: "model-resolution-step" }, Py = { class: "step-header" }, Ry = { class: "step-info" }, Ny = { class: "step-title" }, Ly = { class: "step-description" }, Dy = { class: "stat-badge" }, Oy = {
  key: 1,
  class: "step-body"
}, Uy = {
  key: 2,
  class: "empty-state"
}, Ay = { class: "model-search-modal" }, zy = { class: "model-modal-body" }, Vy = {
  key: 0,
  class: "model-search-results"
}, Fy = ["onClick"], By = { class: "model-result-header" }, Wy = { class: "model-result-filename" }, Gy = { class: "model-result-meta" }, jy = { class: "model-result-category" }, Hy = { class: "model-result-size" }, qy = {
  key: 0,
  class: "model-result-path"
}, Ky = {
  key: 1,
  class: "model-no-results"
}, Jy = {
  key: 2,
  class: "model-searching"
}, Yy = { class: "model-download-url-modal" }, Qy = { class: "model-modal-body" }, Xy = { class: "model-input-group" }, Zy = { class: "model-input-group" }, e1 = { class: "model-modal-actions" }, t1 = /* @__PURE__ */ xe({
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
    function a(le) {
      var pe;
      return le && ((pe = o[le]) == null ? void 0 : pe[0]) || null;
    }
    const l = e, r = s, u = b(0), c = b(!1), d = b(!1), v = b(""), f = b(""), p = b(""), w = b([]), y = b(!1), k = O(() => l.models[u.value]), x = O(() => l.models.some((le) => le.is_download_intent)), C = O(() => l.models.filter(
      (le) => l.modelChoices.has(le.filename) || le.is_download_intent
    ).length), S = O(() => {
      var pe;
      if (!k.value) return "";
      const le = a((pe = k.value.reference) == null ? void 0 : pe.node_type);
      return le ? `${le}/${k.value.filename}` : "";
    }), U = O(() => {
      var pe;
      if (!k.value) return "not-found";
      const le = l.modelChoices.get(k.value.filename);
      if (le)
        switch (le.action) {
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
      return k.value.is_download_intent ? "download" : (pe = k.value.options) != null && pe.length ? "ambiguous" : "not-found";
    }), I = O(() => {
      var pe, me;
      if (!k.value) return;
      const le = l.modelChoices.get(k.value.filename);
      if (le)
        switch (le.action) {
          case "select":
            return (pe = le.selected_model) != null && pe.filename ? `→ ${le.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return k.value.is_download_intent ? "Pending Download" : (me = k.value.options) != null && me.length ? `${k.value.options.length} matches` : "Not Found";
    });
    function E(le) {
      le >= 0 && le < l.models.length && (u.value = le);
    }
    function N() {
      var le;
      for (let pe = u.value + 1; pe < l.models.length; pe++) {
        const me = l.models[pe];
        if (!me.is_download_intent && !((le = l.modelChoices) != null && le.has(me.filename))) {
          E(pe);
          return;
        }
      }
    }
    function z() {
      k.value && (r("mark-optional", k.value.filename), Rt(() => N()));
    }
    function q() {
      k.value && (r("skip", k.value.filename), Rt(() => N()));
    }
    function D(le) {
      k.value && (r("option-selected", k.value.filename, le), Rt(() => N()));
    }
    function G() {
      k.value && r("clear-choice", k.value.filename);
    }
    function Z() {
      k.value && (v.value = k.value.filename, c.value = !0);
    }
    function te() {
      k.value && (f.value = k.value.download_source || "", p.value = k.value.target_path || S.value, d.value = !0);
    }
    function ie() {
      c.value = !1, v.value = "", w.value = [];
    }
    function ge() {
      d.value = !1, f.value = "", p.value = "";
    }
    function oe() {
      y.value = !0, setTimeout(() => {
        y.value = !1;
      }, 300);
    }
    function X(le) {
      k.value && (ie(), Rt(() => N()));
    }
    function de() {
      !k.value || !f.value.trim() || (r("download-url", k.value.filename, f.value.trim(), p.value.trim() || void 0), ge(), Rt(() => N()));
    }
    function Ne(le) {
      if (!le) return "Unknown";
      const pe = le / (1024 * 1024 * 1024);
      return pe >= 1 ? `${pe.toFixed(2)} GB` : `${(le / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (le, pe) => {
      var me, Ue, se;
      return n(), i("div", My, [
        t("div", Py, [
          t("div", Ry, [
            t("h3", Ny, m(x.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            t("p", Ly, m(x.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          t("span", Dy, m(C.value) + "/" + m(e.models.length) + " resolved", 1)
        ]),
        k.value ? (n(), L(Zr, {
          key: 0,
          "item-name": k.value.filename,
          "current-index": u.value,
          "total-items": e.models.length,
          onPrev: pe[0] || (pe[0] = (ne) => E(u.value - 1)),
          onNext: pe[1] || (pe[1] = (ne) => E(u.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : h("", !0),
        k.value ? (n(), i("div", Oy, [
          _(Ty, {
            filename: k.value.filename,
            "node-type": ((me = k.value.reference) == null ? void 0 : me.node_type) || "Unknown",
            "has-multiple-options": !!((Ue = k.value.options) != null && Ue.length),
            options: k.value.options,
            choice: (se = e.modelChoices) == null ? void 0 : se.get(k.value.filename),
            status: U.value,
            "status-label": I.value,
            onMarkOptional: z,
            onSkip: q,
            onDownloadUrl: te,
            onSearch: Z,
            onOptionSelected: D,
            onClearChoice: G
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (n(), i("div", Uy, [...pe[5] || (pe[5] = [
          t("p", null, "No models need resolution.", -1)
        ])])),
        (n(), L(Ot, { to: "body" }, [
          c.value ? (n(), i("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: st(ie, ["self"])
          }, [
            t("div", Ay, [
              t("div", { class: "model-modal-header" }, [
                pe[6] || (pe[6] = t("h4", null, "Search Workspace Models", -1)),
                t("button", {
                  class: "model-modal-close-btn",
                  onClick: ie
                }, "✕")
              ]),
              t("div", zy, [
                _(it, {
                  modelValue: v.value,
                  "onUpdate:modelValue": pe[2] || (pe[2] = (ne) => v.value = ne),
                  placeholder: "Search by filename, category...",
                  onInput: oe
                }, null, 8, ["modelValue"]),
                w.value.length > 0 ? (n(), i("div", Vy, [
                  (n(!0), i(H, null, _e(w.value, (ne) => (n(), i("div", {
                    key: ne.hash,
                    class: "model-search-result-item",
                    onClick: (M) => X()
                  }, [
                    t("div", By, [
                      t("code", Wy, m(ne.filename), 1)
                    ]),
                    t("div", Gy, [
                      t("span", jy, m(ne.category), 1),
                      t("span", Hy, m(Ne(ne.size)), 1)
                    ]),
                    ne.relative_path ? (n(), i("div", qy, m(ne.relative_path), 1)) : h("", !0)
                  ], 8, Fy))), 128))
                ])) : v.value && !y.value ? (n(), i("div", Ky, ' No models found matching "' + m(v.value) + '" ', 1)) : h("", !0),
                y.value ? (n(), i("div", Jy, "Searching...")) : h("", !0)
              ])
            ])
          ])) : h("", !0)
        ])),
        (n(), L(Ot, { to: "body" }, [
          d.value ? (n(), i("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: st(ge, ["self"])
          }, [
            t("div", Yy, [
              t("div", { class: "model-modal-header" }, [
                pe[7] || (pe[7] = t("h4", null, "Enter Download URL", -1)),
                t("button", {
                  class: "model-modal-close-btn",
                  onClick: ge
                }, "✕")
              ]),
              t("div", Qy, [
                t("div", Xy, [
                  pe[8] || (pe[8] = t("label", { class: "model-input-label" }, "Download URL", -1)),
                  _(it, {
                    modelValue: f.value,
                    "onUpdate:modelValue": pe[3] || (pe[3] = (ne) => f.value = ne),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                t("div", Zy, [
                  pe[9] || (pe[9] = t("label", { class: "model-input-label" }, "Host Path", -1)),
                  _(it, {
                    modelValue: p.value,
                    "onUpdate:modelValue": pe[4] || (pe[4] = (ne) => p.value = ne),
                    placeholder: S.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                t("div", e1, [
                  _(Re, {
                    variant: "secondary",
                    onClick: ge
                  }, {
                    default: g(() => [...pe[10] || (pe[10] = [
                      $("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  _(Re, {
                    variant: "primary",
                    disabled: !f.value.trim() || !p.value.trim(),
                    onClick: de
                  }, {
                    default: g(() => [...pe[11] || (pe[11] = [
                      $(" Queue Download ", -1)
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
}), s1 = /* @__PURE__ */ Se(t1, [["__scopeId", "data-v-5c700bfa"]]), o1 = { class: "applying-step" }, n1 = {
  key: 0,
  class: "phase-content"
}, a1 = {
  key: 1,
  class: "phase-content"
}, l1 = { class: "phase-description" }, i1 = { class: "overall-progress" }, r1 = { class: "progress-bar" }, u1 = { class: "progress-label" }, c1 = { class: "install-list" }, d1 = { class: "install-icon" }, m1 = { key: 0 }, f1 = {
  key: 1,
  class: "spinner"
}, v1 = { key: 2 }, p1 = { key: 3 }, g1 = {
  key: 0,
  class: "install-error"
}, h1 = {
  key: 2,
  class: "phase-content"
}, y1 = { class: "phase-header" }, w1 = { class: "phase-title" }, _1 = { class: "completion-summary" }, k1 = {
  key: 0,
  class: "summary-item success"
}, b1 = { class: "summary-text" }, $1 = {
  key: 1,
  class: "summary-item error"
}, C1 = { class: "summary-text" }, x1 = {
  key: 2,
  class: "failed-list"
}, S1 = { class: "failed-node-id" }, I1 = { class: "failed-error" }, E1 = {
  key: 4,
  class: "summary-item success"
}, T1 = {
  key: 5,
  class: "restart-prompt"
}, M1 = {
  key: 3,
  class: "phase-content error"
}, P1 = { class: "error-message" }, R1 = /* @__PURE__ */ xe({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(e) {
    const s = e, o = O(() => {
      var v, f;
      const c = ((v = s.progress.nodeInstallProgress) == null ? void 0 : v.totalNodes) || s.progress.nodesToInstall.length;
      if (!c) return 0;
      const d = ((f = s.progress.nodeInstallProgress) == null ? void 0 : f.completedNodes.length) ?? 0;
      return Math.round(d / c * 100);
    }), a = O(() => {
      var c;
      return ((c = s.progress.nodeInstallProgress) == null ? void 0 : c.completedNodes.filter((d) => !d.success)) || [];
    }), l = O(() => a.value.length > 0);
    function r(c, d) {
      var f, p;
      const v = (f = s.progress.nodeInstallProgress) == null ? void 0 : f.completedNodes.find((w) => w.node_id === c);
      return v ? v.success ? "complete" : "failed" : ((p = s.progress.nodeInstallProgress) == null ? void 0 : p.currentIndex) === d ? "installing" : "pending";
    }
    function u(c) {
      var d, v;
      return (v = (d = s.progress.nodeInstallProgress) == null ? void 0 : d.completedNodes.find((f) => f.node_id === c)) == null ? void 0 : v.error;
    }
    return (c, d) => {
      var v, f, p, w;
      return n(), i("div", o1, [
        e.progress.phase === "resolving" ? (n(), i("div", n1, [...d[2] || (d[2] = [
          t("div", { class: "phase-header" }, [
            t("div", { class: "loading-spinner" }),
            t("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          t("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : e.progress.phase === "installing" ? (n(), i("div", a1, [
          d[3] || (d[3] = t("div", { class: "phase-header" }, [
            t("div", { class: "loading-spinner" }),
            t("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          t("p", l1, " Installing " + m((((v = e.progress.nodeInstallProgress) == null ? void 0 : v.currentIndex) ?? 0) + 1) + " of " + m(((f = e.progress.nodeInstallProgress) == null ? void 0 : f.totalNodes) ?? e.progress.nodesToInstall.length) + " packages... ", 1),
          t("div", i1, [
            t("div", r1, [
              t("div", {
                class: "progress-fill",
                style: Ft({ width: `${o.value}%` })
              }, null, 4)
            ]),
            t("span", u1, m(((p = e.progress.nodeInstallProgress) == null ? void 0 : p.completedNodes.length) ?? 0) + " / " + m(((w = e.progress.nodeInstallProgress) == null ? void 0 : w.totalNodes) ?? e.progress.nodesToInstall.length), 1)
          ]),
          t("div", c1, [
            (n(!0), i(H, null, _e(e.progress.nodesToInstall, (y, k) => (n(), i("div", {
              key: y,
              class: De(["install-item", r(y, k)])
            }, [
              t("span", d1, [
                r(y, k) === "pending" ? (n(), i("span", m1, "○")) : r(y, k) === "installing" ? (n(), i("span", f1, "◌")) : r(y, k) === "complete" ? (n(), i("span", v1, "✓")) : r(y, k) === "failed" ? (n(), i("span", p1, "✗")) : h("", !0)
              ]),
              t("code", null, m(y), 1),
              u(y) ? (n(), i("span", g1, m(u(y)), 1)) : h("", !0)
            ], 2))), 128))
          ])
        ])) : e.progress.phase === "complete" ? (n(), i("div", h1, [
          t("div", y1, [
            t("span", {
              class: De(["phase-icon", l.value ? "warning" : "success"])
            }, m(l.value ? "⚠" : "✓"), 3),
            t("h3", w1, m(l.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          t("div", _1, [
            e.progress.nodesInstalled.length > 0 ? (n(), i("div", k1, [
              d[4] || (d[4] = t("span", { class: "summary-icon" }, "✓", -1)),
              t("span", b1, m(e.progress.nodesInstalled.length) + " node package" + m(e.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : h("", !0),
            a.value.length > 0 ? (n(), i("div", $1, [
              d[5] || (d[5] = t("span", { class: "summary-icon" }, "✗", -1)),
              t("span", C1, m(a.value.length) + " package" + m(a.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : h("", !0),
            a.value.length > 0 ? (n(), i("div", x1, [
              (n(!0), i(H, null, _e(a.value, (y) => (n(), i("div", {
                key: y.node_id,
                class: "failed-item"
              }, [
                t("code", S1, m(y.node_id), 1),
                t("span", I1, m(y.error), 1)
              ]))), 128))
            ])) : h("", !0),
            a.value.length > 0 ? (n(), i("button", {
              key: 3,
              class: "retry-button",
              onClick: d[0] || (d[0] = (y) => c.$emit("retry-failed"))
            }, " Retry Failed (" + m(a.value.length) + ") ", 1)) : h("", !0),
            l.value ? h("", !0) : (n(), i("div", E1, [...d[6] || (d[6] = [
              t("span", { class: "summary-icon" }, "✓", -1),
              t("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            d[8] || (d[8] = t("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            e.progress.needsRestart ? (n(), i("div", T1, [
              d[7] || (d[7] = t("div", { class: "restart-warning" }, [
                t("span", { class: "warning-icon" }, "⚠"),
                t("div", { class: "warning-content" }, [
                  t("strong", null, "Restart Required"),
                  t("p", null, "Node packages were installed. ComfyUI needs to restart to load them.")
                ])
              ], -1)),
              t("button", {
                class: "restart-button",
                onClick: d[1] || (d[1] = (y) => c.$emit("restart"))
              }, " Restart ComfyUI ")
            ])) : h("", !0)
          ])
        ])) : e.progress.phase === "error" ? (n(), i("div", M1, [
          d[9] || (d[9] = t("div", { class: "phase-header" }, [
            t("span", { class: "phase-icon error" }, "✗"),
            t("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          t("p", P1, m(e.progress.error), 1)
        ])) : h("", !0)
      ]);
    };
  }
}), N1 = /* @__PURE__ */ Se(R1, [["__scopeId", "data-v-5efaae58"]]), L1 = {
  key: 0,
  class: "loading-state"
}, D1 = {
  key: 1,
  class: "wizard-content"
}, O1 = {
  key: 0,
  class: "step-content"
}, U1 = { class: "analysis-summary" }, A1 = { class: "analysis-header" }, z1 = { class: "summary-description" }, V1 = { class: "stats-grid" }, F1 = { class: "stat-card" }, B1 = { class: "stat-items" }, W1 = {
  key: 0,
  class: "stat-item success"
}, G1 = { class: "stat-count" }, j1 = {
  key: 1,
  class: "stat-item info"
}, H1 = { class: "stat-count" }, q1 = {
  key: 2,
  class: "stat-item warning"
}, K1 = { class: "stat-count" }, J1 = {
  key: 3,
  class: "stat-item warning"
}, Y1 = { class: "stat-count" }, Q1 = {
  key: 4,
  class: "stat-item warning"
}, X1 = { class: "stat-count" }, Z1 = {
  key: 5,
  class: "stat-item error"
}, e0 = { class: "stat-count" }, t0 = { class: "stat-card" }, s0 = { class: "stat-items" }, o0 = { class: "stat-item success" }, n0 = { class: "stat-count" }, a0 = {
  key: 0,
  class: "stat-item info"
}, l0 = { class: "stat-count" }, i0 = {
  key: 1,
  class: "stat-item warning"
}, r0 = { class: "stat-count" }, u0 = {
  key: 2,
  class: "stat-item warning"
}, c0 = { class: "stat-count" }, d0 = {
  key: 3,
  class: "stat-item error"
}, m0 = { class: "stat-count" }, f0 = {
  key: 0,
  class: "status-message warning"
}, v0 = { class: "status-text" }, p0 = {
  key: 1,
  class: "status-message warning"
}, g0 = { class: "status-text" }, h0 = {
  key: 2,
  class: "status-message info"
}, y0 = { class: "status-text" }, w0 = {
  key: 3,
  class: "status-message info"
}, _0 = { class: "status-text" }, k0 = {
  key: 4,
  class: "status-message info"
}, b0 = { class: "status-text" }, $0 = {
  key: 5,
  class: "status-message warning"
}, C0 = { class: "status-text" }, x0 = {
  key: 6,
  class: "status-message success"
}, S0 = {
  key: 7,
  class: "category-mismatch-section"
}, I0 = { class: "mismatch-list" }, E0 = { class: "mismatch-path" }, T0 = { class: "mismatch-target" }, M0 = {
  key: 8,
  class: "category-mismatch-section"
}, P0 = { class: "mismatch-list" }, R0 = { class: "mismatch-path" }, N0 = { class: "status-text" }, L0 = {
  key: 1,
  class: "step-content node-step-content"
}, D0 = {
  key: 0,
  class: "community-node-section"
}, O0 = { class: "community-node-header" }, U0 = { class: "community-node-title" }, A0 = { class: "community-node-list" }, z0 = { class: "community-node-info" }, V0 = { class: "community-node-heading" }, F0 = { class: "item-name" }, B0 = { class: "community-node-package" }, W0 = { class: "community-node-meta" }, G0 = { class: "community-node-guidance" }, j0 = { key: 0 }, H0 = { class: "community-choice-status" }, q0 = { class: "community-node-actions" }, K0 = {
  key: 3,
  class: "step-content"
}, J0 = { class: "review-summary" }, Y0 = { class: "review-stats" }, Q0 = { class: "review-stat" }, X0 = { class: "stat-value" }, Z0 = { class: "review-stat" }, ew = { class: "stat-value" }, tw = { class: "review-stat" }, sw = { class: "stat-value" }, ow = { class: "review-stat" }, nw = { class: "stat-value" }, aw = {
  key: 0,
  class: "review-section"
}, lw = { class: "section-title" }, iw = { class: "review-items" }, rw = { class: "item-name" }, uw = { class: "item-choice" }, cw = {
  key: 0,
  class: "choice-badge install"
}, dw = {
  key: 1,
  class: "choice-badge skip"
}, mw = {
  key: 1,
  class: "review-section"
}, fw = { class: "section-title" }, vw = { class: "review-items" }, pw = { class: "item-name" }, gw = { class: "item-choice" }, hw = {
  key: 0,
  class: "choice-badge install"
}, yw = {
  key: 1,
  class: "choice-badge optional"
}, ww = {
  key: 2,
  class: "choice-badge skip"
}, _w = {
  key: 2,
  class: "review-section"
}, kw = { class: "section-title" }, bw = { class: "review-items" }, $w = { class: "item-name" }, Cw = { class: "item-choice" }, xw = {
  key: 0,
  class: "choice-badge install"
}, Sw = {
  key: 1,
  class: "choice-badge optional"
}, Iw = {
  key: 2,
  class: "choice-badge skip"
}, Ew = {
  key: 1,
  class: "choice-badge pending"
}, Tw = {
  key: 3,
  class: "review-section"
}, Mw = { class: "section-title" }, Pw = { class: "review-items download-details" }, Rw = { class: "download-info" }, Nw = { class: "item-name" }, Lw = { class: "download-meta" }, Dw = { class: "download-path" }, Ow = ["title"], Uw = {
  key: 4,
  class: "review-section"
}, Aw = { class: "section-title" }, zw = { class: "review-items" }, Vw = { class: "item-name" }, Fw = { class: "item-choice" }, Bw = {
  key: 0,
  class: "choice-badge install"
}, Ww = {
  key: 1,
  class: "choice-badge download"
}, Gw = {
  key: 2,
  class: "choice-badge optional"
}, jw = {
  key: 3,
  class: "choice-badge skip"
}, Hw = {
  key: 4,
  class: "choice-badge skip"
}, qw = {
  key: 1,
  class: "choice-badge download"
}, Kw = {
  key: 2,
  class: "choice-badge pending"
}, Jw = {
  key: 5,
  class: "no-choices"
}, Yw = /* @__PURE__ */ xe({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(e, { emit: s }) {
    const o = e, a = s, { analyzeWorkflow: l, applyResolution: r, installNodes: u, queueModelDownloads: c, progress: d, resetProgress: v } = Xr(), { loadPendingDownloads: f } = Lo(), { openFileLocation: p, queueNodeInstall: w, getNodes: y } = ct(), k = b(null), x = b([]), C = b(!1), S = b(!1), U = b(null), I = b("analysis"), E = b([]), N = b(/* @__PURE__ */ new Map()), z = b(/* @__PURE__ */ new Map()), q = b(/* @__PURE__ */ new Set()), D = O(() => {
      const ve = [
        { id: "analysis", label: "Analysis" }
      ];
      return (oe.value || Ne.value || le.value) && ve.push({ id: "nodes", label: "Nodes" }), X.value && ve.push({ id: "models", label: "Models" }), ve.push({ id: "review", label: "Review" }), I.value === "applying" && ve.push({ id: "applying", label: "Applying" }), ve;
    }), G = O(() => k.value ? k.value.stats.needs_user_input : !1), Z = O(() => k.value ? k.value.nodes.version_gated || [] : []), te = O(() => k.value ? k.value.nodes.uninstallable || [] : []), ie = O(() => te.value.filter((ve) => {
      var K;
      return !!((K = ve.package) != null && K.package_id);
    })), ge = O(() => Z.value.length > 0), oe = O(() => k.value ? k.value.nodes.unresolved.length > 0 || k.value.nodes.ambiguous.length > 0 : !1), X = O(() => k.value ? k.value.models.unresolved.length > 0 || k.value.models.ambiguous.length > 0 : !1), de = O(() => k.value ? k.value.stats.download_intents > 0 : !1), Ne = O(() => k.value ? k.value.stats.nodes_needing_installation > 0 : !1), le = O(() => ie.value.length > 0), pe = O(() => k.value ? k.value.nodes.resolved.length : 0), me = O(() => k.value ? k.value.models.resolved.filter((ve) => ve.has_category_mismatch) : []), Ue = O(() => me.value.length > 0), se = O(() => oe.value || Ne.value || le.value ? "nodes" : X.value ? "models" : "review"), ne = O(() => {
      if (!k.value) return [];
      const ve = k.value.nodes.resolved.filter((he) => !he.is_installed), K = /* @__PURE__ */ new Set();
      return ve.filter((he) => K.has(he.package.package_id) ? !1 : (K.add(he.package.package_id), !0));
    }), M = O(() => {
      if (!k.value) return [];
      const ve = k.value.nodes.resolved.filter((he) => !he.is_installed), K = /* @__PURE__ */ new Map();
      for (const he of ve) {
        const He = K.get(he.package.package_id);
        He ? He.node_types_count++ : K.set(he.package.package_id, {
          package_id: he.package.package_id,
          title: he.package.title,
          node_types_count: 1
        });
      }
      return Array.from(K.values());
    }), A = O(() => ne.value.filter((ve) => !q.value.has(ve.package.package_id))), Q = O(() => k.value ? k.value.models.resolved.filter(
      (ve) => ve.match_type === "download_intent" || ve.match_type === "property_download_intent"
    ).map((ve) => ({
      filename: ve.reference.widget_value,
      reference: ve.reference,
      is_download_intent: !0,
      resolved_model: ve.model,
      download_source: ve.download_source,
      target_path: ve.target_path
    })) : []), P = O(() => {
      if (!k.value) return [];
      const ve = k.value.nodes.unresolved.map((he) => ({
        node_type: he.reference.node_type,
        reason: he.reason,
        is_unresolved: !0,
        options: void 0
      })), K = k.value.nodes.ambiguous.map((he) => ({
        node_type: he.reference.node_type,
        has_multiple_options: !0,
        options: he.options.map((He) => ({
          package_id: He.package.package_id,
          title: He.package.title,
          match_confidence: He.match_confidence,
          match_type: He.match_type,
          is_installed: He.is_installed
        }))
      }));
      return [...ve, ...K];
    }), R = O(() => {
      if (!k.value) return [];
      const ve = k.value.models.unresolved.map((he) => ({
        filename: he.reference.widget_value,
        reference: he.reference,
        reason: he.reason,
        is_unresolved: !0,
        options: void 0
      })), K = k.value.models.ambiguous.map((he) => ({
        filename: he.reference.widget_value,
        reference: he.reference,
        has_multiple_options: !0,
        options: he.options.map((He) => ({
          model: He.model,
          match_confidence: He.match_confidence,
          match_type: He.match_type,
          has_download_source: He.has_download_source
        }))
      }));
      return [...ve, ...K];
    }), ce = O(() => {
      const ve = R.value, K = Q.value.map((he) => ({
        filename: he.filename,
        reference: he.reference,
        is_download_intent: !0,
        resolved_model: he.resolved_model,
        download_source: he.download_source,
        target_path: he.target_path,
        options: void 0
      }));
      return [...ve, ...K];
    }), Ve = O(() => Q.value.filter((ve) => {
      const K = z.value.get(ve.filename);
      return K ? K.action === "download" : !0;
    }).map((ve) => ({
      filename: ve.filename,
      url: ve.download_source,
      target_path: ve.target_path
    })));
    function je(ve, K = 50) {
      return ve.length <= K ? ve : ve.slice(0, K - 3) + "...";
    }
    const B = O(() => {
      let ve = A.value.length;
      for (const K of N.value.values())
        K.action === "install" && ve++;
      for (const K of z.value.values())
        K.action === "select" && ve++;
      return ve;
    }), W = O(() => {
      let ve = 0;
      for (const K of z.value.values())
        K.action === "download" && ve++;
      for (const K of Q.value)
        z.value.get(K.filename) || ve++;
      return ve;
    }), J = O(() => {
      let ve = 0;
      for (const K of N.value.values())
        K.action === "optional" && ve++;
      for (const K of z.value.values())
        K.action === "optional" && ve++;
      return ve;
    }), ye = O(() => {
      let ve = q.value.size;
      for (const K of N.value.values())
        K.action === "skip" && ve++;
      for (const K of z.value.values())
        K.action === "skip" && ve++;
      for (const K of P.value)
        N.value.has(K.node_type) || ve++;
      for (const K of R.value)
        z.value.has(K.filename) || ve++;
      return ve;
    }), ke = O(() => {
      const ve = {};
      if (ve.analysis = { resolved: 1, total: 1 }, oe.value || le.value) {
        const K = P.value.length, he = ie.value.length, He = P.value.filter(
          (Pt) => N.value.has(Pt.node_type)
        ).length, ft = ie.value.filter(
          (Pt) => N.value.has(Pt.reference.node_type)
        ).length, Nt = K + he, tt = He + ft;
        ve.nodes = { resolved: tt, total: Nt };
      }
      if (X.value) {
        const K = ce.value.length, he = ce.value.filter(
          (He) => z.value.has(He.filename) || He.is_download_intent
        ).length;
        ve.models = { resolved: he, total: K };
      }
      if (ve.review = { resolved: 1, total: 1 }, I.value === "applying") {
        const K = d.totalFiles || 1, he = d.completedFiles.length;
        ve.applying = { resolved: he, total: K };
      }
      return ve;
    });
    function $e(ve) {
      I.value = ve;
    }
    function Pe() {
      const ve = D.value.findIndex((K) => K.id === I.value);
      ve > 0 && (I.value = D.value[ve - 1].id);
    }
    function Le() {
      const ve = D.value.findIndex((K) => K.id === I.value);
      ve < D.value.length - 1 && (I.value = D.value[ve + 1].id);
    }
    function Oe() {
      for (const ve of ie.value) {
        const K = ve.reference.node_type;
        N.value.has(K) || re(ve, "registry");
      }
    }
    function Te(ve) {
      switch (ve) {
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
    function Be(ve) {
      return ve.filter((K) => K.installed && K.tracked).filter((K) => K.name !== "comfygit-manager").map((K) => ({
        package_id: K.registry_id || K.name,
        source: K.source
      })).filter((K, he, He) => He.findIndex((ft) => ft.package_id === K.package_id) === he).sort((K, he) => {
        const He = Te(K.source) - Te(he.source);
        return He !== 0 ? He : K.package_id.localeCompare(he.package_id);
      });
    }
    async function Me() {
      C.value = !0, U.value = null;
      try {
        const [ve, K] = await Promise.all([
          l(o.workflowName),
          y()
        ]);
        k.value = ve, x.value = Be(K.nodes), Oe();
      } catch (ve) {
        U.value = ve instanceof Error ? ve.message : "Failed to analyze workflow";
      } finally {
        C.value = !1;
      }
    }
    function we() {
      E.value.includes("analysis") || E.value.push("analysis"), oe.value || Ne.value || le.value ? I.value = "nodes" : X.value ? I.value = "models" : I.value = "review";
    }
    function ee(ve) {
      N.value.set(ve, { action: "optional" });
    }
    function We(ve) {
      N.value.set(ve, { action: "skip" });
    }
    function V(ve, K) {
      var He;
      const he = P.value.find((ft) => ft.node_type === ve);
      (He = he == null ? void 0 : he.options) != null && He[K] && N.value.set(ve, {
        action: "install",
        package_id: he.options[K].package_id
      });
    }
    function F(ve, K) {
      N.value.set(ve, {
        action: "install",
        package_id: K
      });
    }
    function j(ve) {
      N.value.delete(ve);
    }
    function Ee(ve) {
      return N.value.get(ve);
    }
    function T(ve) {
      const K = Ee(ve);
      return K ? K.action === "optional" ? "Marked optional" : K.action === "skip" ? "Skipped" : K.action === "install" ? K.install_source === "git" ? "Will install via Git" : "Will install from registry" : "Skipped" : "Skipped";
    }
    function re(ve, K) {
      var ft;
      const he = (ft = ve.package) == null ? void 0 : ft.package_id;
      if (!he) return;
      const He = {
        action: "install",
        package_id: he,
        version: ve.package.latest_version || null,
        install_source: K
      };
      K === "git" && ve.package.repository && (He.repository = ve.package.repository), N.value.set(ve.reference.node_type, He);
    }
    function ue(ve) {
      N.value.set(ve, { action: "optional" });
    }
    function Ae(ve) {
      N.value.set(ve, { action: "skip" });
    }
    function ze(ve) {
      q.value.has(ve) ? q.value.delete(ve) : q.value.add(ve);
    }
    function Ie(ve) {
      z.value.set(ve, { action: "optional" });
    }
    function qe(ve) {
      z.value.set(ve, { action: "skip" });
    }
    function Qe(ve, K) {
      var He;
      const he = R.value.find((ft) => ft.filename === ve);
      (He = he == null ? void 0 : he.options) != null && He[K] && z.value.set(ve, {
        action: "select",
        selected_model: he.options[K].model
      });
    }
    function at(ve, K, he) {
      z.value.set(ve, {
        action: "download",
        url: K,
        target_path: he
      });
    }
    function rt(ve) {
      z.value.delete(ve);
    }
    async function dt(ve) {
      try {
        await p(ve);
      } catch (K) {
        U.value = K instanceof Error ? K.message : "Failed to open file location";
      }
    }
    async function It() {
      var ve;
      S.value = !0, U.value = null, v(), d.phase = "resolving", I.value = "applying";
      try {
        const K = await r(o.workflowName, N.value, z.value, q.value);
        K.models_to_download && K.models_to_download.length > 0 && c(o.workflowName, K.models_to_download);
        const he = ie.value.map((tt) => {
          const Pt = Ee(tt.reference.node_type);
          if ((Pt == null ? void 0 : Pt.action) !== "install" || Pt.install_source !== "git")
            return null;
          const xs = Pt.repository || tt.package.repository, Kt = Pt.package_id || tt.package.package_id;
          return !xs || !Kt ? null : {
            id: Kt,
            repository: xs,
            selectedVersion: Pt.version || tt.package.latest_version || "latest"
          };
        }).filter((tt) => !!tt), He = new Set(he.map((tt) => tt.id)), ft = [
          ...K.nodes_to_install || [],
          ...A.value.map((tt) => tt.package.package_id)
        ];
        d.nodesToInstall = [...new Set(ft)].filter((tt) => !He.has(tt)), d.nodesToInstall.length > 0 && await u(o.workflowName);
        for (const tt of he)
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
        const Nt = d.installError || ((ve = d.nodeInstallProgress) == null ? void 0 : ve.completedNodes.some((tt) => !tt.success));
        !d.needsRestart && !Nt && setTimeout(() => {
          a("refresh"), a("install"), a("close");
        }, 1500);
      } catch (K) {
        U.value = K instanceof Error ? K.message : "Failed to apply resolution", d.error = U.value, d.phase = "error";
      } finally {
        S.value = !1;
      }
    }
    function Wt() {
      a("refresh"), a("restart"), a("close");
    }
    async function ut() {
      var K;
      const ve = ((K = d.nodeInstallProgress) == null ? void 0 : K.completedNodes.filter((he) => !he.success).map((he) => he.node_id)) || [];
      if (ve.length !== 0) {
        d.phase = "installing", d.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: ve.length
        }, d.nodesToInstall = ve, d.nodesInstalled = [], d.installError = void 0;
        try {
          await u(o.workflowName), d.phase = "complete";
        } catch (he) {
          d.error = he instanceof Error ? he.message : "Retry failed", d.phase = "error";
        }
      }
    }
    return ot(Me), (ve, K) => (n(), L(Ct, {
      title: `Resolve Dependencies: ${e.workflowName}`,
      size: "lg",
      loading: C.value,
      error: U.value || void 0,
      "fixed-height": !0,
      onClose: K[1] || (K[1] = (he) => a("close"))
    }, {
      body: g(() => [
        C.value && !k.value ? (n(), i("div", L1, [...K[2] || (K[2] = [
          t("div", { class: "loading-spinner" }, null, -1),
          t("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : k.value ? (n(), i("div", D1, [
          _(Dg, {
            steps: D.value,
            "current-step": I.value,
            "completed-steps": E.value,
            "step-stats": ke.value,
            onStepChange: $e
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          I.value === "analysis" ? (n(), i("div", O1, [
            t("div", U1, [
              t("div", A1, [
                K[3] || (K[3] = t("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                t("p", z1, " Found " + m(k.value.stats.total_nodes) + " nodes and " + m(k.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              t("div", V1, [
                t("div", F1, [
                  K[16] || (K[16] = t("div", { class: "stat-header" }, "Nodes", -1)),
                  t("div", B1, [
                    pe.value > 0 ? (n(), i("div", W1, [
                      K[4] || (K[4] = t("span", { class: "stat-icon" }, "✓", -1)),
                      t("span", G1, m(pe.value), 1),
                      K[5] || (K[5] = t("span", { class: "stat-label" }, "resolved", -1))
                    ])) : h("", !0),
                    k.value.stats.packages_needing_installation > 0 ? (n(), i("div", j1, [
                      K[6] || (K[6] = t("span", { class: "stat-icon" }, "⬇", -1)),
                      t("span", H1, m(k.value.stats.packages_needing_installation), 1),
                      K[7] || (K[7] = t("span", { class: "stat-label" }, "to install", -1))
                    ])) : h("", !0),
                    k.value.nodes.ambiguous.length > 0 ? (n(), i("div", q1, [
                      K[8] || (K[8] = t("span", { class: "stat-icon" }, "?", -1)),
                      t("span", K1, m(k.value.nodes.ambiguous.length), 1),
                      K[9] || (K[9] = t("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : h("", !0),
                    Z.value.length > 0 ? (n(), i("div", J1, [
                      K[10] || (K[10] = t("span", { class: "stat-icon" }, "⚠", -1)),
                      t("span", Y1, m(Z.value.length), 1),
                      K[11] || (K[11] = t("span", { class: "stat-label" }, "requires newer ComfyUI", -1))
                    ])) : h("", !0),
                    te.value.length > 0 ? (n(), i("div", Q1, [
                      K[12] || (K[12] = t("span", { class: "stat-icon" }, "⚠", -1)),
                      t("span", X1, m(te.value.length), 1),
                      K[13] || (K[13] = t("span", { class: "stat-label" }, "community-mapped", -1))
                    ])) : h("", !0),
                    k.value.nodes.unresolved.length > 0 ? (n(), i("div", Z1, [
                      K[14] || (K[14] = t("span", { class: "stat-icon" }, "✗", -1)),
                      t("span", e0, m(k.value.nodes.unresolved.length), 1),
                      K[15] || (K[15] = t("span", { class: "stat-label" }, "missing", -1))
                    ])) : h("", !0)
                  ])
                ]),
                t("div", t0, [
                  K[27] || (K[27] = t("div", { class: "stat-header" }, "Models", -1)),
                  t("div", s0, [
                    t("div", o0, [
                      K[17] || (K[17] = t("span", { class: "stat-icon" }, "✓", -1)),
                      t("span", n0, m(k.value.models.resolved.length - k.value.stats.download_intents - k.value.stats.models_with_category_mismatch), 1),
                      K[18] || (K[18] = t("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    k.value.stats.download_intents > 0 ? (n(), i("div", a0, [
                      K[19] || (K[19] = t("span", { class: "stat-icon" }, "⬇", -1)),
                      t("span", l0, m(k.value.stats.download_intents), 1),
                      K[20] || (K[20] = t("span", { class: "stat-label" }, "pending download", -1))
                    ])) : h("", !0),
                    Ue.value ? (n(), i("div", i0, [
                      K[21] || (K[21] = t("span", { class: "stat-icon" }, "⚠", -1)),
                      t("span", r0, m(me.value.length), 1),
                      K[22] || (K[22] = t("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : h("", !0),
                    k.value.models.ambiguous.length > 0 ? (n(), i("div", u0, [
                      K[23] || (K[23] = t("span", { class: "stat-icon" }, "?", -1)),
                      t("span", c0, m(k.value.models.ambiguous.length), 1),
                      K[24] || (K[24] = t("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : h("", !0),
                    k.value.models.unresolved.length > 0 ? (n(), i("div", d0, [
                      K[25] || (K[25] = t("span", { class: "stat-icon" }, "✗", -1)),
                      t("span", m0, m(k.value.models.unresolved.length), 1),
                      K[26] || (K[26] = t("span", { class: "stat-label" }, "missing", -1))
                    ])) : h("", !0)
                  ])
                ])
              ]),
              G.value ? (n(), i("div", f0, [
                K[28] || (K[28] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", v0, m(P.value.length + R.value.length) + " items need your input", 1)
              ])) : ge.value ? (n(), i("div", p0, [
                K[29] || (K[29] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", g0, m(Z.value.length) + " node type" + m(Z.value.length > 1 ? "s are" : " is") + " blocked and require manual action", 1)
              ])) : te.value.length > 0 ? (n(), i("div", h0, [
                K[30] || (K[30] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", y0, m(te.value.length) + " community-mapped node type" + m(te.value.length > 1 ? "s need" : " needs") + " installation choices", 1)
              ])) : Ne.value ? (n(), i("div", w0, [
                K[31] || (K[31] = t("span", { class: "status-icon" }, "⬇", -1)),
                t("span", _0, m(k.value.stats.packages_needing_installation) + " package" + m(k.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + m(k.value.stats.nodes_needing_installation) + " node type" + m(k.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + m(de.value ? `, ${k.value.stats.download_intents} model${k.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : de.value ? (n(), i("div", k0, [
                K[32] || (K[32] = t("span", { class: "status-icon" }, "⬇", -1)),
                t("span", b0, m(k.value.stats.download_intents) + " model" + m(k.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to Review to proceed", 1)
              ])) : Ue.value ? (n(), i("div", $0, [
                K[33] || (K[33] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", C0, m(me.value.length) + " model" + m(me.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (n(), i("div", x0, [...K[34] || (K[34] = [
                t("span", { class: "status-icon" }, "✓", -1),
                t("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              Ue.value ? (n(), i("div", S0, [
                K[37] || (K[37] = t("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                t("div", I0, [
                  (n(!0), i(H, null, _e(me.value, (he) => {
                    var He, ft;
                    return n(), i("div", {
                      key: he.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      t("code", E0, m(he.actual_category) + "/" + m((He = he.model) == null ? void 0 : He.filename), 1),
                      K[36] || (K[36] = t("span", { class: "mismatch-arrow" }, "→", -1)),
                      t("code", T0, m((ft = he.expected_categories) == null ? void 0 : ft[0]) + "/", 1),
                      he.file_path ? (n(), L(Re, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (Nt) => dt(he.file_path)
                      }, {
                        default: g(() => [...K[35] || (K[35] = [
                          $(" Open File Location ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : h("", !0)
                    ]);
                  }), 128))
                ])
              ])) : h("", !0),
              ge.value ? (n(), i("div", M0, [
                K[38] || (K[38] = t("h4", { class: "section-subtitle" }, "Blocked node types:", -1)),
                t("div", P0, [
                  (n(!0), i(H, null, _e(Z.value, (he) => {
                    var He;
                    return n(), i("div", {
                      key: `vg-${he.reference.node_type}`,
                      class: "mismatch-item"
                    }, [
                      t("code", R0, m(he.reference.node_type), 1),
                      t("span", N0, m(he.guidance || ((He = k.value.node_guidance) == null ? void 0 : He[he.reference.node_type]) || "Requires a newer ComfyUI version."), 1)
                    ]);
                  }), 128))
                ])
              ])) : h("", !0)
            ])
          ])) : h("", !0),
          I.value === "nodes" ? (n(), i("div", L0, [
            _(uy, {
              nodes: P.value,
              "node-choices": N.value,
              "auto-resolved-packages": M.value,
              "skipped-packages": q.value,
              "installed-node-packs": x.value,
              onMarkOptional: ee,
              onSkip: We,
              onOptionSelected: V,
              onManualEntry: F,
              onClearChoice: j,
              onPackageSkip: ze
            }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages", "installed-node-packs"]),
            ie.value.length > 0 ? (n(), i("div", D0, [
              t("div", O0, [
                t("h4", U0, "Community-Mapped Packages (" + m(ie.value.length) + ")", 1),
                K[39] || (K[39] = t("p", { class: "community-node-description" }, " These mappings are actionable. Default install uses the registry; choose Git only when explicitly needed. ", -1))
              ]),
              t("div", A0, [
                (n(!0), i(H, null, _e(ie.value, (he) => (n(), i("div", {
                  key: `community-${he.reference.node_type}-${he.package.package_id}`,
                  class: "community-node-item"
                }, [
                  t("div", z0, [
                    t("div", V0, [
                      t("code", F0, m(he.reference.node_type), 1),
                      t("span", B0, m(he.package.title || he.package.package_id), 1)
                    ]),
                    t("div", W0, m(he.package.package_id), 1),
                    t("div", G0, [
                      K[40] || (K[40] = $(" Found via community mapping — registry metadata may be incomplete. ", -1)),
                      he.guidance ? (n(), i("span", j0, m(he.guidance), 1)) : h("", !0)
                    ]),
                    t("div", H0, m(T(he.reference.node_type)), 1)
                  ]),
                  t("div", q0, [
                    _(Re, {
                      size: "sm",
                      variant: "secondary",
                      disabled: !he.package.package_id,
                      onClick: (He) => re(he, "registry")
                    }, {
                      default: g(() => [...K[41] || (K[41] = [
                        $(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled", "onClick"]),
                    he.package.repository ? (n(), L(Re, {
                      key: 0,
                      size: "sm",
                      variant: "ghost",
                      disabled: !he.package.package_id,
                      onClick: (He) => re(he, "git")
                    }, {
                      default: g(() => [...K[42] || (K[42] = [
                        $(" Install via Git ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled", "onClick"])) : h("", !0),
                    _(Re, {
                      size: "sm",
                      variant: "secondary",
                      onClick: (He) => ue(he.reference.node_type)
                    }, {
                      default: g(() => [...K[43] || (K[43] = [
                        $(" Optional ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    _(Re, {
                      size: "sm",
                      variant: "secondary",
                      onClick: (He) => Ae(he.reference.node_type)
                    }, {
                      default: g(() => [...K[44] || (K[44] = [
                        $(" Skip ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ])
                ]))), 128))
              ])
            ])) : h("", !0)
          ])) : h("", !0),
          I.value === "models" ? (n(), L(s1, {
            key: 2,
            models: ce.value,
            "model-choices": z.value,
            onMarkOptional: Ie,
            onSkip: qe,
            onOptionSelected: Qe,
            onDownloadUrl: at,
            onClearChoice: rt
          }, null, 8, ["models", "model-choices"])) : h("", !0),
          I.value === "review" ? (n(), i("div", K0, [
            t("div", J0, [
              K[50] || (K[50] = t("div", { class: "review-header" }, [
                t("h3", { class: "summary-title" }, "Review Your Choices"),
                t("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              t("div", Y0, [
                t("div", Q0, [
                  t("span", X0, m(B.value), 1),
                  K[45] || (K[45] = t("span", { class: "stat-label" }, "to install", -1))
                ]),
                t("div", Z0, [
                  t("span", ew, m(W.value), 1),
                  K[46] || (K[46] = t("span", { class: "stat-label" }, "to download", -1))
                ]),
                t("div", tw, [
                  t("span", sw, m(J.value), 1),
                  K[47] || (K[47] = t("span", { class: "stat-label" }, "optional", -1))
                ]),
                t("div", ow, [
                  t("span", nw, m(ye.value), 1),
                  K[48] || (K[48] = t("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              M.value.length > 0 ? (n(), i("div", aw, [
                t("h4", lw, "Node Packages (" + m(M.value.length) + ")", 1),
                t("div", iw, [
                  (n(!0), i(H, null, _e(M.value, (he) => (n(), i("div", {
                    key: he.package_id,
                    class: "review-item"
                  }, [
                    t("code", rw, m(he.package_id), 1),
                    t("div", uw, [
                      q.value.has(he.package_id) ? (n(), i("span", dw, "Skipped")) : (n(), i("span", cw, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : h("", !0),
              ie.value.length > 0 ? (n(), i("div", mw, [
                t("h4", fw, "Community-Mapped Packages (" + m(ie.value.length) + ")", 1),
                t("div", vw, [
                  (n(!0), i(H, null, _e(ie.value, (he) => {
                    var He, ft, Nt;
                    return n(), i("div", {
                      key: `review-community-${he.reference.node_type}-${he.package.package_id}`,
                      class: "review-item"
                    }, [
                      t("code", pw, m(he.reference.node_type), 1),
                      t("div", gw, [
                        ((He = Ee(he.reference.node_type)) == null ? void 0 : He.action) === "install" ? (n(), i("span", hw, m(((ft = Ee(he.reference.node_type)) == null ? void 0 : ft.install_source) === "git" ? "Install via Git" : "Install from Registry"), 1)) : ((Nt = Ee(he.reference.node_type)) == null ? void 0 : Nt.action) === "optional" ? (n(), i("span", yw, " Optional ")) : (n(), i("span", ww, " Skip "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : h("", !0),
              P.value.length > 0 ? (n(), i("div", _w, [
                t("h4", kw, "Node Choices (" + m(P.value.length) + ")", 1),
                t("div", bw, [
                  (n(!0), i(H, null, _e(P.value, (he) => {
                    var He, ft, Nt, tt;
                    return n(), i("div", {
                      key: he.node_type,
                      class: "review-item"
                    }, [
                      t("code", $w, m(he.node_type), 1),
                      t("div", Cw, [
                        N.value.has(he.node_type) ? (n(), i(H, { key: 0 }, [
                          ((He = N.value.get(he.node_type)) == null ? void 0 : He.action) === "install" ? (n(), i("span", xw, m((ft = N.value.get(he.node_type)) == null ? void 0 : ft.package_id), 1)) : ((Nt = N.value.get(he.node_type)) == null ? void 0 : Nt.action) === "optional" ? (n(), i("span", Sw, " Optional ")) : ((tt = N.value.get(he.node_type)) == null ? void 0 : tt.action) === "skip" ? (n(), i("span", Iw, " Skip ")) : h("", !0)
                        ], 64)) : (n(), i("span", Ew, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : h("", !0),
              Ve.value.length > 0 ? (n(), i("div", Tw, [
                t("h4", Mw, "Models to Download (" + m(Ve.value.length) + ")", 1),
                t("div", Pw, [
                  (n(!0), i(H, null, _e(Ve.value, (he) => (n(), i("div", {
                    key: he.filename,
                    class: "review-item download-item"
                  }, [
                    t("div", Rw, [
                      t("code", Nw, m(he.filename), 1),
                      t("div", Lw, [
                        t("span", Dw, "→ " + m(he.target_path), 1),
                        he.url ? (n(), i("span", {
                          key: 0,
                          class: "download-url",
                          title: he.url
                        }, m(je(he.url)), 9, Ow)) : h("", !0)
                      ])
                    ]),
                    K[49] || (K[49] = t("span", { class: "choice-badge download" }, "Will Download", -1))
                  ]))), 128))
                ])
              ])) : h("", !0),
              ce.value.length > 0 ? (n(), i("div", Uw, [
                t("h4", Aw, "Models (" + m(ce.value.length) + ")", 1),
                t("div", zw, [
                  (n(!0), i(H, null, _e(ce.value, (he) => {
                    var He, ft, Nt, tt, Pt, xs, Kt;
                    return n(), i("div", {
                      key: he.filename,
                      class: "review-item"
                    }, [
                      t("code", Vw, m(he.filename), 1),
                      t("div", Fw, [
                        z.value.has(he.filename) ? (n(), i(H, { key: 0 }, [
                          ((He = z.value.get(he.filename)) == null ? void 0 : He.action) === "select" ? (n(), i("span", Bw, m((Nt = (ft = z.value.get(he.filename)) == null ? void 0 : ft.selected_model) == null ? void 0 : Nt.filename), 1)) : ((tt = z.value.get(he.filename)) == null ? void 0 : tt.action) === "download" ? (n(), i("span", Ww, " Download ")) : ((Pt = z.value.get(he.filename)) == null ? void 0 : Pt.action) === "optional" ? (n(), i("span", Gw, " Optional ")) : ((xs = z.value.get(he.filename)) == null ? void 0 : xs.action) === "skip" ? (n(), i("span", jw, " Skip ")) : ((Kt = z.value.get(he.filename)) == null ? void 0 : Kt.action) === "cancel_download" ? (n(), i("span", Hw, " Cancel Download ")) : h("", !0)
                        ], 64)) : he.is_download_intent ? (n(), i("span", qw, " Pending Download ")) : (n(), i("span", Kw, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : h("", !0),
              ne.value.length === 0 && ie.value.length === 0 && P.value.length === 0 && ce.value.length === 0 ? (n(), i("div", Jw, " No dependencies need resolution. ")) : h("", !0)
            ])
          ])) : h("", !0),
          I.value === "applying" ? (n(), L(N1, {
            key: 4,
            progress: Ye(d),
            onRestart: Wt,
            onRetryFailed: ut
          }, null, 8, ["progress"])) : h("", !0)
        ])) : h("", !0)
      ]),
      footer: g(() => [
        I.value !== "analysis" && I.value !== "applying" ? (n(), L(Re, {
          key: 0,
          variant: "secondary",
          disabled: S.value,
          onClick: Pe
        }, {
          default: g(() => [...K[51] || (K[51] = [
            $(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : h("", !0),
        K[54] || (K[54] = t("div", { class: "footer-spacer" }, null, -1)),
        I.value !== "applying" || Ye(d).phase === "complete" || Ye(d).phase === "error" ? (n(), L(Re, {
          key: 1,
          variant: "secondary",
          onClick: K[0] || (K[0] = (he) => a("close"))
        }, {
          default: g(() => [
            $(m(Ye(d).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : h("", !0),
        I.value === "analysis" ? (n(), L(Re, {
          key: 2,
          variant: "primary",
          disabled: C.value,
          onClick: we
        }, {
          default: g(() => [
            $(m(se.value === "review" ? "Continue to Review →" : "Continue"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : h("", !0),
        I.value === "nodes" ? (n(), L(Re, {
          key: 3,
          variant: "primary",
          onClick: Le
        }, {
          default: g(() => [
            $(m(X.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : h("", !0),
        I.value === "models" ? (n(), L(Re, {
          key: 4,
          variant: "primary",
          onClick: Le
        }, {
          default: g(() => [...K[52] || (K[52] = [
            $(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : h("", !0),
        I.value === "review" ? (n(), L(Re, {
          key: 5,
          variant: "primary",
          disabled: S.value,
          loading: S.value,
          onClick: It
        }, {
          default: g(() => [...K[53] || (K[53] = [
            $(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : h("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), Qw = /* @__PURE__ */ Se(Yw, [["__scopeId", "data-v-49848358"]]), Xw = { class: "search-input-wrapper" }, Zw = ["value", "placeholder"], e_ = /* @__PURE__ */ xe({
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
    const o = e, a = s, l = b(null);
    let r;
    function u(d) {
      const v = d.target.value;
      o.debounce > 0 ? (clearTimeout(r), r = window.setTimeout(() => {
        a("update:modelValue", v);
      }, o.debounce)) : a("update:modelValue", v);
    }
    function c() {
      var d;
      a("update:modelValue", ""), a("clear"), (d = l.value) == null || d.focus();
    }
    return ot(() => {
      o.autoFocus && l.value && l.value.focus();
    }), (d, v) => (n(), i("div", Xw, [
      t("input", {
        ref_key: "inputRef",
        ref: l,
        value: e.modelValue,
        type: "text",
        placeholder: e.placeholder,
        class: "search-input",
        onInput: u,
        onKeyup: es(c, ["escape"])
      }, null, 40, Zw),
      e.clearable && e.modelValue ? (n(), i("button", {
        key: 0,
        class: "clear-button",
        onClick: c,
        title: "Clear search"
      }, " ✕ ")) : h("", !0)
    ]));
  }
}), t_ = /* @__PURE__ */ Se(e_, [["__scopeId", "data-v-266f857a"]]), s_ = { class: "search-bar" }, o_ = /* @__PURE__ */ xe({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(e) {
    return (s, o) => (n(), i("div", s_, [
      _(t_, {
        "model-value": e.modelValue,
        placeholder: e.placeholder,
        debounce: e.debounce,
        clearable: e.clearable,
        "onUpdate:modelValue": o[0] || (o[0] = (a) => s.$emit("update:modelValue", a)),
        onClear: o[1] || (o[1] = (a) => s.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), mo = /* @__PURE__ */ Se(o_, [["__scopeId", "data-v-3d51bbfd"]]), n_ = { class: "section-group" }, a_ = {
  key: 0,
  class: "section-content"
}, l_ = /* @__PURE__ */ xe({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = b(o.initiallyExpanded);
    function r() {
      o.collapsible && (l.value = !l.value, a("toggle", l.value));
    }
    return (u, c) => (n(), i("section", n_, [
      _(os, {
        count: e.count,
        clickable: e.collapsible,
        expanded: l.value,
        onClick: r
      }, {
        default: g(() => [
          $(m(e.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !e.collapsible || l.value ? (n(), i("div", a_, [
        et(u.$slots, "default", {}, void 0)
      ])) : h("", !0)
    ]));
  }
}), bt = /* @__PURE__ */ Se(l_, [["__scopeId", "data-v-c48e33ed"]]), i_ = { class: "item-header" }, r_ = {
  key: 0,
  class: "item-icon"
}, u_ = { class: "item-info" }, c_ = {
  key: 0,
  class: "item-title"
}, d_ = {
  key: 1,
  class: "item-subtitle"
}, m_ = {
  key: 0,
  class: "item-details"
}, f_ = {
  key: 1,
  class: "item-actions"
}, v_ = /* @__PURE__ */ xe({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: s }) {
    const o = e, a = O(() => o.status ? `status-${o.status}` : "");
    return (l, r) => (n(), i("div", {
      class: De(["item-card", { clickable: e.clickable, compact: e.compact }, a.value]),
      onClick: r[0] || (r[0] = (u) => e.clickable && l.$emit("click"))
    }, [
      t("div", i_, [
        l.$slots.icon ? (n(), i("span", r_, [
          et(l.$slots, "icon", {}, void 0)
        ])) : h("", !0),
        t("div", u_, [
          l.$slots.title ? (n(), i("div", c_, [
            et(l.$slots, "title", {}, void 0)
          ])) : h("", !0),
          l.$slots.subtitle ? (n(), i("div", d_, [
            et(l.$slots, "subtitle", {}, void 0)
          ])) : h("", !0)
        ])
      ]),
      l.$slots.details ? (n(), i("div", m_, [
        et(l.$slots, "details", {}, void 0)
      ])) : h("", !0),
      l.$slots.actions ? (n(), i("div", f_, [
        et(l.$slots, "actions", {}, void 0)
      ])) : h("", !0)
    ], 2));
  }
}), At = /* @__PURE__ */ Se(v_, [["__scopeId", "data-v-cc435e0e"]]), p_ = { class: "loading-state" }, g_ = { class: "loading-message" }, h_ = /* @__PURE__ */ xe({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(e) {
    return (s, o) => (n(), i("div", p_, [
      o[0] || (o[0] = t("div", { class: "spinner" }, null, -1)),
      t("p", g_, m(e.message), 1)
    ]));
  }
}), $s = /* @__PURE__ */ Se(h_, [["__scopeId", "data-v-ad8436c9"]]), y_ = { class: "error-state" }, w_ = { class: "error-message" }, __ = /* @__PURE__ */ xe({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(e) {
    return (s, o) => (n(), i("div", y_, [
      o[2] || (o[2] = t("span", { class: "error-icon" }, "⚠", -1)),
      t("p", w_, m(e.message), 1),
      e.retry ? (n(), L(Ce, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: o[0] || (o[0] = (a) => s.$emit("retry"))
      }, {
        default: g(() => [...o[1] || (o[1] = [
          $(" Retry ", -1)
        ])]),
        _: 1
      })) : h("", !0)
    ]));
  }
}), Cs = /* @__PURE__ */ Se(__, [["__scopeId", "data-v-5397be48"]]), k_ = /* @__PURE__ */ xe({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(e, { expose: s, emit: o }) {
    const a = o, { getWorkflows: l } = ct(), r = b([]), u = b(!1), c = b(null), d = b(""), v = b(!0), f = b(!1), p = b(!1), w = b(!1), y = b(!1), k = b(null), x = O(
      () => r.value.filter((se) => se.status === "broken")
    ), C = O(
      () => r.value.filter((se) => se.status === "new")
    ), S = O(
      () => r.value.filter((se) => se.status === "modified")
    ), U = O(
      () => r.value.filter((se) => se.status === "synced")
    ), I = O(() => {
      if (!d.value.trim()) return r.value;
      const se = d.value.toLowerCase();
      return r.value.filter((ne) => ne.name.toLowerCase().includes(se));
    }), E = O(
      () => x.value.filter(
        (se) => !d.value.trim() || se.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), N = O(
      () => C.value.filter(
        (se) => !d.value.trim() || se.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), z = O(
      () => S.value.filter(
        (se) => !d.value.trim() || se.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), q = O(
      () => U.value.filter(
        (se) => !d.value.trim() || se.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), D = O(
      () => f.value ? q.value : q.value.slice(0, 5)
    );
    async function G(se = !1) {
      u.value = !0, c.value = null;
      try {
        r.value = await l(se);
      } catch (ne) {
        c.value = ne instanceof Error ? ne.message : "Failed to load workflows";
      } finally {
        u.value = !1;
      }
    }
    s({ loadWorkflows: G });
    function Z(se) {
      k.value = se, p.value = !0;
    }
    function te(se) {
      k.value = se, w.value = !0;
    }
    function ie(se) {
      k.value = se, y.value = !0;
    }
    function ge(se) {
      var A;
      const M = (A = se.detail) == null ? void 0 : A.workflowName;
      M && ie(M);
    }
    function oe() {
      a("refresh");
    }
    async function X() {
      w.value = !1, await G(!0);
    }
    async function de() {
      await G(!0), a("refresh");
    }
    async function Ne() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function le(se) {
      return se.replace(/uninstallable node mappings?/gi, (ne) => ne.toLowerCase().endsWith("s") ? "community packages" : "community package").replace(/no installable package versions?/gi, "need community packages").replace(/\bare uninstallable\b/gi, "need community packages").replace(/\buninstallable\b/gi, "community-mapped");
    }
    function pe(se) {
      if (se.issue_summary && se.issue_summary.trim().length > 0)
        return le(se.issue_summary);
      const ne = [];
      return se.version_gated_count && se.version_gated_count > 0 && ne.push(`${se.version_gated_count} node${se.version_gated_count > 1 ? "s" : ""} require newer ComfyUI`), se.uninstallable_count && se.uninstallable_count > 0 && ne.push(`${se.uninstallable_count} node${se.uninstallable_count > 1 ? "s" : ""} need community packages`), se.missing_nodes > 0 && ne.push(`${se.missing_nodes} missing node${se.missing_nodes > 1 ? "s" : ""}`), se.missing_models > 0 && ne.push(`${se.missing_models} missing model${se.missing_models > 1 ? "s" : ""}`), se.models_with_category_mismatch && se.models_with_category_mismatch > 0 && ne.push(`${se.models_with_category_mismatch} model${se.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), se.pending_downloads && se.pending_downloads > 0 && ne.push(`${se.pending_downloads} pending download${se.pending_downloads > 1 ? "s" : ""}`), ne.length > 0 ? ne.join(", ") : "Has issues";
    }
    function me(se) {
      const ne = se.sync_state === "new" ? "New" : se.sync_state === "modified" ? "Modified" : se.sync_state === "synced" ? "Synced" : se.sync_state, M = Ue(se);
      return se.has_path_sync_issues && se.models_needing_path_sync && se.models_needing_path_sync > 0 ? `${se.models_needing_path_sync} model path${se.models_needing_path_sync > 1 ? "s" : ""} need${se.models_needing_path_sync === 1 ? "s" : ""} sync · ${M}` : `${ne || "Unknown"} · ${M}`;
    }
    function Ue(se) {
      const ne = se.contract_summary;
      return !ne || !ne.has_contract ? "No contract" : ne.status === "incomplete" ? `${ne.input_count} in / ${ne.output_count} out · incomplete` : `${ne.input_count} in / ${ne.output_count} out`;
    }
    return ot(() => {
      G(), window.addEventListener("comfygit:open-workflow-contract", ge);
    }), la(() => {
      window.removeEventListener("comfygit:open-workflow-contract", ge);
    }), (se, ne) => (n(), i(H, null, [
      _(Tt, null, {
        header: g(() => [
          _(Mt, { title: "WORKFLOWS" })
        ]),
        search: g(() => [
          _(mo, {
            modelValue: d.value,
            "onUpdate:modelValue": ne[0] || (ne[0] = (M) => d.value = M),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          u.value ? (n(), L($s, {
            key: 0,
            message: "Loading workflows..."
          })) : c.value ? (n(), L(Cs, {
            key: 1,
            message: c.value,
            retry: !0,
            onRetry: G
          }, null, 8, ["message"])) : (n(), i(H, { key: 2 }, [
            E.value.length ? (n(), L(bt, {
              key: 0,
              title: "BROKEN",
              count: E.value.length
            }, {
              default: g(() => [
                (n(!0), i(H, null, _e(E.value, (M) => (n(), L(At, {
                  key: M.name,
                  status: "broken"
                }, {
                  icon: g(() => [...ne[8] || (ne[8] = [
                    $("⚠", -1)
                  ])]),
                  title: g(() => [
                    $(m(M.name), 1)
                  ]),
                  subtitle: g(() => [
                    $(m(pe(M)), 1)
                  ]),
                  actions: g(() => [
                    _(Ce, {
                      variant: "primary",
                      size: "sm",
                      onClick: (A) => te(M.name)
                    }, {
                      default: g(() => [...ne[9] || (ne[9] = [
                        $(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    _(Ce, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (A) => ie(M.name)
                    }, {
                      default: g(() => [...ne[10] || (ne[10] = [
                        $(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    _(Ce, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (A) => Z(M.name)
                    }, {
                      default: g(() => [...ne[11] || (ne[11] = [
                        $(" Details ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : h("", !0),
            N.value.length ? (n(), L(bt, {
              key: 1,
              title: "NEW",
              count: N.value.length
            }, {
              default: g(() => [
                (n(!0), i(H, null, _e(N.value, (M) => (n(), L(At, {
                  key: M.name,
                  status: M.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: g(() => [
                    $(m(M.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: g(() => [
                    $(m(M.name), 1)
                  ]),
                  subtitle: g(() => [
                    $(m(me(M)), 1)
                  ]),
                  actions: g(() => [
                    _(Ce, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (A) => ie(M.name)
                    }, {
                      default: g(() => [...ne[12] || (ne[12] = [
                        $(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    _(Ce, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (A) => Z(M.name)
                    }, {
                      default: g(() => [...ne[13] || (ne[13] = [
                        $(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : h("", !0),
            z.value.length ? (n(), L(bt, {
              key: 2,
              title: "MODIFIED",
              count: z.value.length
            }, {
              default: g(() => [
                (n(!0), i(H, null, _e(z.value, (M) => (n(), L(At, {
                  key: M.name,
                  status: M.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: g(() => [...ne[14] || (ne[14] = [
                    $("⚡", -1)
                  ])]),
                  title: g(() => [
                    $(m(M.name), 1)
                  ]),
                  subtitle: g(() => [
                    $(m(me(M)), 1)
                  ]),
                  actions: g(() => [
                    _(Ce, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (A) => ie(M.name)
                    }, {
                      default: g(() => [...ne[15] || (ne[15] = [
                        $(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    _(Ce, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (A) => Z(M.name)
                    }, {
                      default: g(() => [...ne[16] || (ne[16] = [
                        $(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : h("", !0),
            q.value.length ? (n(), L(bt, {
              key: 3,
              title: "SYNCED",
              count: q.value.length,
              collapsible: !0,
              "initially-expanded": v.value,
              onToggle: ne[2] || (ne[2] = (M) => v.value = M)
            }, {
              default: g(() => [
                (n(!0), i(H, null, _e(D.value, (M) => (n(), L(At, {
                  key: M.name,
                  status: M.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: g(() => [
                    $(m(M.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: g(() => [
                    $(m(M.name), 1)
                  ]),
                  subtitle: g(() => [
                    $(m(me(M)), 1)
                  ]),
                  actions: g(() => [
                    _(Ce, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (A) => ie(M.name)
                    }, {
                      default: g(() => [...ne[17] || (ne[17] = [
                        $(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    _(Ce, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (A) => Z(M.name)
                    }, {
                      default: g(() => [...ne[18] || (ne[18] = [
                        $(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !f.value && q.value.length > 5 ? (n(), L(Ce, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: ne[1] || (ne[1] = (M) => f.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: g(() => [
                    $(" View all " + m(q.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : h("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : h("", !0),
            I.value.length ? h("", !0) : (n(), L(is, {
              key: 4,
              icon: "📭",
              message: d.value ? `No workflows match '${d.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      p.value && k.value ? (n(), L(Up, {
        key: 0,
        "workflow-name": k.value,
        onClose: ne[3] || (ne[3] = (M) => p.value = !1),
        onResolve: ne[4] || (ne[4] = (M) => te(k.value)),
        onRefresh: ne[5] || (ne[5] = (M) => a("refresh"))
      }, null, 8, ["workflow-name"])) : h("", !0),
      w.value && k.value ? (n(), L(Qw, {
        key: 1,
        "workflow-name": k.value,
        onClose: X,
        onInstall: oe,
        onRefresh: ne[6] || (ne[6] = (M) => a("refresh")),
        onRestart: Ne
      }, null, 8, ["workflow-name"])) : h("", !0),
      y.value && k.value ? (n(), L($g, {
        key: 2,
        "workflow-name": k.value,
        onClose: ne[7] || (ne[7] = (M) => y.value = !1),
        onRefresh: de
      }, null, 8, ["workflow-name"])) : h("", !0)
    ], 64));
  }
}), b_ = /* @__PURE__ */ Se(k_, [["__scopeId", "data-v-894ef6ed"]]), $_ = /* @__PURE__ */ xe({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(e) {
    return (s, o) => (n(), i("div", {
      class: De(["summary-bar", e.variant])
    }, [
      et(s.$slots, "default", {}, void 0)
    ], 2));
  }
}), gn = /* @__PURE__ */ Se($_, [["__scopeId", "data-v-ccb7816e"]]), C_ = {
  key: 0,
  class: "model-details"
}, x_ = { class: "detail-section" }, S_ = { class: "detail-row" }, I_ = { class: "detail-value mono" }, E_ = { class: "detail-row" }, T_ = { class: "detail-value mono" }, M_ = { class: "detail-row" }, P_ = { class: "detail-value mono" }, R_ = { class: "detail-row" }, N_ = { class: "detail-value" }, L_ = { class: "detail-row" }, D_ = { class: "detail-value" }, O_ = { class: "detail-row" }, U_ = { class: "detail-value" }, A_ = { class: "detail-section" }, z_ = { class: "section-header" }, V_ = {
  key: 0,
  class: "locations-list"
}, F_ = { class: "location-path mono" }, B_ = {
  key: 0,
  class: "location-modified"
}, W_ = ["onClick"], G_ = {
  key: 1,
  class: "empty-state"
}, j_ = { class: "detail-section" }, H_ = { class: "section-header" }, q_ = {
  key: 0,
  class: "sources-list"
}, K_ = { class: "source-type" }, J_ = ["href"], Y_ = ["disabled", "onClick"], Q_ = {
  key: 1,
  class: "empty-state"
}, X_ = { class: "add-source-form" }, Z_ = ["disabled"], ek = {
  key: 2,
  class: "source-error"
}, tk = {
  key: 3,
  class: "source-success"
}, sk = /* @__PURE__ */ xe({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(e, { emit: s }) {
    const o = e, { getModelDetails: a, addModelSource: l, removeModelSource: r, openFileLocation: u } = ct(), c = b(null), d = b(!0), v = b(null), f = b(""), p = b(!1), w = b(null), y = b(null), k = b(null), x = b(null);
    let C = null;
    function S(D, G = "success", Z = 2e3) {
      C && clearTimeout(C), x.value = { message: D, type: G }, C = setTimeout(() => {
        x.value = null;
      }, Z);
    }
    function U(D) {
      if (!D) return "Unknown";
      const G = 1024 * 1024 * 1024, Z = 1024 * 1024;
      return D >= G ? `${(D / G).toFixed(1)} GB` : D >= Z ? `${(D / Z).toFixed(0)} MB` : `${(D / 1024).toFixed(0)} KB`;
    }
    function I(D) {
      navigator.clipboard.writeText(D), S("Copied to clipboard!");
    }
    async function E(D) {
      try {
        await u(D), S("Opening file location...");
      } catch {
        S("Failed to open location", "error");
      }
    }
    async function N() {
      if (!(!f.value.trim() || !c.value)) {
        p.value = !0, y.value = null, k.value = null;
        try {
          await l(c.value.hash, f.value.trim()), k.value = "Source added successfully!", f.value = "", await q();
        } catch (D) {
          y.value = D instanceof Error ? D.message : "Failed to add source";
        } finally {
          p.value = !1;
        }
      }
    }
    async function z(D) {
      if (c.value) {
        w.value = D, y.value = null, k.value = null;
        try {
          await r(c.value.hash, D), S("Source removed"), await q();
        } catch (G) {
          y.value = G instanceof Error ? G.message : "Failed to remove source";
        } finally {
          w.value = null;
        }
      }
    }
    async function q() {
      d.value = !0, v.value = null;
      try {
        c.value = await a(o.identifier);
      } catch (D) {
        v.value = D instanceof Error ? D.message : "Failed to load model details";
      } finally {
        d.value = !1;
      }
    }
    return ot(q), (D, G) => {
      var Z;
      return n(), i(H, null, [
        _(Ct, {
          title: `Model Details: ${((Z = c.value) == null ? void 0 : Z.filename) || "Loading..."}`,
          size: "lg",
          loading: d.value,
          error: v.value,
          onClose: G[5] || (G[5] = (te) => D.$emit("close"))
        }, {
          body: g(() => {
            var te, ie, ge, oe;
            return [
              c.value ? (n(), i("div", C_, [
                t("section", x_, [
                  t("div", S_, [
                    G[6] || (G[6] = t("span", { class: "detail-label" }, "Hash:", -1)),
                    t("span", I_, m(c.value.hash || "Not computed"), 1),
                    c.value.hash ? (n(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: G[0] || (G[0] = (X) => I(c.value.hash))
                    }, "Copy")) : h("", !0)
                  ]),
                  t("div", E_, [
                    G[7] || (G[7] = t("span", { class: "detail-label" }, "Blake3:", -1)),
                    t("span", T_, m(c.value.blake3 || "Not computed"), 1),
                    c.value.blake3 ? (n(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: G[1] || (G[1] = (X) => I(c.value.blake3))
                    }, "Copy")) : h("", !0)
                  ]),
                  t("div", M_, [
                    G[8] || (G[8] = t("span", { class: "detail-label" }, "SHA256:", -1)),
                    t("span", P_, m(c.value.sha256 || "Not computed"), 1),
                    c.value.sha256 ? (n(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: G[2] || (G[2] = (X) => I(c.value.sha256))
                    }, "Copy")) : h("", !0)
                  ]),
                  t("div", R_, [
                    G[9] || (G[9] = t("span", { class: "detail-label" }, "Size:", -1)),
                    t("span", N_, m(U(c.value.size)), 1)
                  ]),
                  t("div", L_, [
                    G[10] || (G[10] = t("span", { class: "detail-label" }, "Category:", -1)),
                    t("span", D_, m(c.value.category), 1)
                  ]),
                  t("div", O_, [
                    G[11] || (G[11] = t("span", { class: "detail-label" }, "Last Seen:", -1)),
                    t("span", U_, m(c.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                t("section", A_, [
                  t("h4", z_, "Locations (" + m(((te = c.value.locations) == null ? void 0 : te.length) || 0) + ")", 1),
                  (ie = c.value.locations) != null && ie.length ? (n(), i("div", V_, [
                    (n(!0), i(H, null, _e(c.value.locations, (X, de) => (n(), i("div", {
                      key: de,
                      class: "location-item"
                    }, [
                      t("span", F_, m(X.path), 1),
                      X.modified ? (n(), i("span", B_, "Modified: " + m(X.modified), 1)) : h("", !0),
                      X.path ? (n(), i("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (Ne) => E(X.path)
                      }, " Open File Location ", 8, W_)) : h("", !0)
                    ]))), 128))
                  ])) : (n(), i("div", G_, "No locations found"))
                ]),
                t("section", j_, [
                  t("h4", H_, "Download Sources (" + m(((ge = c.value.sources) == null ? void 0 : ge.length) || 0) + ")", 1),
                  (oe = c.value.sources) != null && oe.length ? (n(), i("div", q_, [
                    (n(!0), i(H, null, _e(c.value.sources, (X, de) => (n(), i("div", {
                      key: de,
                      class: "source-item"
                    }, [
                      t("span", K_, m(X.type) + ":", 1),
                      t("a", {
                        href: X.url,
                        target: "_blank",
                        class: "source-url"
                      }, m(X.url), 9, J_),
                      t("button", {
                        class: "remove-source-btn",
                        disabled: w.value === X.url,
                        onClick: (Ne) => z(X.url)
                      }, m(w.value === X.url ? "..." : "×"), 9, Y_)
                    ]))), 128))
                  ])) : (n(), i("div", Q_, " No download sources configured ")),
                  t("div", X_, [
                    St(t("input", {
                      "onUpdate:modelValue": G[3] || (G[3] = (X) => f.value = X),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [xo, f.value]
                    ]),
                    t("button", {
                      class: "add-source-btn",
                      disabled: !f.value.trim() || p.value,
                      onClick: N
                    }, m(p.value ? "Adding..." : "Add Source"), 9, Z_)
                  ]),
                  y.value ? (n(), i("p", ek, m(y.value), 1)) : h("", !0),
                  k.value ? (n(), i("p", tk, m(k.value), 1)) : h("", !0)
                ])
              ])) : h("", !0)
            ];
          }),
          footer: g(() => [
            t("button", {
              class: "btn-secondary",
              onClick: G[4] || (G[4] = (te) => D.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (n(), L(Ot, { to: "body" }, [
          x.value ? (n(), i("div", {
            key: 0,
            class: De(["toast", x.value.type])
          }, m(x.value.message), 3)) : h("", !0)
        ]))
      ], 64);
    };
  }
}), Tl = /* @__PURE__ */ Se(sk, [["__scopeId", "data-v-f15cbb56"]]), ok = ["disabled"], nk = { class: "dropdown-value" }, ak = ["onClick"], lk = {
  key: 0,
  class: "dropdown-error"
}, ik = /* @__PURE__ */ xe({
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
    const o = e, a = s, l = b(!1), r = b(null), u = b(null), c = b({});
    function d(S) {
      return typeof S == "string" ? S : S.value;
    }
    function v(S) {
      return typeof S == "string" ? S : S.label;
    }
    const f = O(() => {
      if (!o.modelValue && o.placeholder)
        return o.placeholder;
      const S = o.options.find((U) => d(U) === o.modelValue);
      return S ? v(S) : String(o.modelValue);
    });
    function p() {
      o.disabled || (l.value = !l.value);
    }
    function w() {
      l.value = !1;
    }
    function y(S) {
      a("update:modelValue", d(S)), w();
    }
    function k() {
      if (!r.value) return;
      const S = r.value.getBoundingClientRect(), U = window.innerHeight, I = U - S.bottom, E = S.top, N = Math.min(300, o.options.length * 36 + 8), z = I < N && E > I;
      c.value = {
        position: "fixed",
        left: `${S.left}px`,
        width: `${S.width}px`,
        maxHeight: "300px",
        ...z ? { bottom: `${U - S.top + 4}px` } : { top: `${S.bottom + 4}px` }
      };
    }
    kt(l, async (S) => {
      S && (await Rt(), k());
    });
    function x() {
      l.value && k();
    }
    function C(S) {
      S.key === "Escape" && l.value && w();
    }
    return ot(() => {
      window.addEventListener("scroll", x, !0), window.addEventListener("keydown", C);
    }), Ro(() => {
      window.removeEventListener("scroll", x, !0), window.removeEventListener("keydown", C);
    }), (S, U) => (n(), i("div", {
      class: "base-dropdown",
      ref_key: "dropdownRef",
      ref: r
    }, [
      t("button", {
        type: "button",
        class: De(["dropdown-trigger", { open: l.value, error: !!e.error }]),
        disabled: e.disabled,
        onClick: p
      }, [
        t("span", nk, m(f.value), 1),
        U[0] || (U[0] = t("span", { class: "dropdown-arrow" }, "▼", -1))
      ], 10, ok),
      (n(), L(Ot, { to: "body" }, [
        l.value ? (n(), i("div", {
          key: 0,
          class: "dropdown-overlay",
          onClick: w
        })) : h("", !0),
        l.value ? (n(), i("div", {
          key: 1,
          ref_key: "menuRef",
          ref: u,
          class: "dropdown-menu",
          style: Ft(c.value)
        }, [
          (n(!0), i(H, null, _e(e.options, (I) => (n(), i("div", {
            key: d(I),
            class: De(["dropdown-option", { selected: d(I) === e.modelValue }]),
            onClick: (E) => y(I)
          }, m(v(I)), 11, ak))), 128))
        ], 4)) : h("", !0)
      ])),
      e.error ? (n(), i("span", lk, m(e.error), 1)) : h("", !0)
    ], 512));
  }
}), rk = /* @__PURE__ */ Se(ik, [["__scopeId", "data-v-857e085b"]]);
function uk(e) {
  const s = e.toLowerCase();
  return s === "huggingface.co" || s.endsWith(".huggingface.co") || s === "hf.co";
}
function ck(e) {
  const s = e.trim();
  if (!s) return { kind: "unknown" };
  let o;
  try {
    o = new URL(s);
  } catch {
    return { kind: "unknown" };
  }
  if (!uk(o.hostname)) return { kind: "unknown" };
  const a = o.pathname.replace(/^\/+/, "").split("/").filter(Boolean);
  if (a[0] === "datasets" || a[0] === "spaces") return { kind: "unknown" };
  if (a.length < 2) return { kind: "unknown" };
  const l = `${a[0]}/${a[1]}`, r = a.slice(2);
  if (r.length === 0)
    return { kind: "repo", repoId: l, revision: "main" };
  const u = r[0];
  if (u === "tree") {
    const c = r[1] || "main", d = r.slice(2).join("/");
    return { kind: "repo", repoId: l, revision: c, path: d || void 0 };
  }
  if (u === "resolve") {
    const c = r[1] || "main", d = r.slice(2).join("/");
    return d ? { kind: "file", repoId: l, revision: c, path: d } : { kind: "repo", repoId: l, revision: c };
  }
  if (u === "blob") {
    const c = r[1] || "main", d = r.slice(2).join("/");
    return d ? { kind: "file", repoId: l, revision: c, path: d } : { kind: "repo", repoId: l, revision: c };
  }
  return { kind: "repo", repoId: l, revision: "main" };
}
function dk(e) {
  return e.split("/").map(encodeURIComponent).join("/");
}
function mk(e, s, o) {
  const [a, l] = e.split("/");
  return `https://huggingface.co/${encodeURIComponent(a)}/${encodeURIComponent(l)}/resolve/${encodeURIComponent(s)}/${dk(o)}`;
}
const fk = { class: "hf-file-browser" }, vk = { class: "browser-header" }, pk = { class: "repo-info" }, gk = { class: "repo-id" }, hk = {
  key: 0,
  class: "revision-pill"
}, yk = {
  key: 0,
  class: "loading-state"
}, wk = {
  key: 1,
  class: "error-state"
}, _k = { class: "toolbar" }, kk = { class: "toolbar-actions" }, bk = { class: "file-list-container" }, $k = {
  key: 0,
  class: "file-list-header"
}, Ck = ["checked", "indeterminate"], xk = { class: "sort-indicator" }, Sk = { class: "sort-indicator" }, Ik = {
  key: 1,
  class: "empty-state"
}, Ek = {
  key: 2,
  class: "file-list"
}, Tk = ["onClick"], Mk = ["checked", "onChange"], Pk = { class: "file-path" }, Rk = { class: "file-size" }, Nk = { class: "destination-section" }, Lk = { class: "destination-row" }, Dk = {
  key: 0,
  class: "path-separator"
}, Ok = { class: "action-bar" }, Uk = { class: "summary-info" }, Ak = { class: "summary-count" }, zk = { class: "summary-size" }, Vk = /* @__PURE__ */ xe({
  __name: "HfFileBrowser",
  props: {
    repoId: {},
    revision: {},
    initialPath: {},
    preselectedFile: {}
  },
  emits: ["queue", "back"],
  setup(e, { emit: s }) {
    const o = e, a = s, { getHuggingFaceRepoInfo: l, getModelsSubdirectories: r } = ct(), u = b([]), c = b(/* @__PURE__ */ new Set()), d = b(!1), v = b(null), f = b(""), p = b(!1), w = b("name"), y = b(!0), k = b(""), x = b(""), C = b(""), S = b([]), U = b(!1);
    let I = !1;
    const E = /^(.*)-(\d{4,5})-of-(\d{4,5})(\.[^.]+)$/i, N = O(() => {
      let A = u.value;
      if (o.initialPath) {
        const Q = o.initialPath.endsWith("/") ? o.initialPath : `${o.initialPath}/`;
        A = A.filter((P) => P.path.startsWith(Q) || P.path === o.initialPath);
      }
      if (p.value && (A = A.filter((Q) => Q.is_model_file)), f.value.trim()) {
        const Q = f.value.toLowerCase();
        A = A.filter((P) => P.path.toLowerCase().includes(Q));
      }
      return A;
    }), z = O(() => {
      const A = [...N.value];
      return A.sort((Q, P) => {
        let R;
        return w.value === "name" ? R = Q.path.localeCompare(P.path) : R = Q.size - P.size, y.value ? R : -R;
      }), A;
    }), q = O(() => N.value.length === 0 ? !1 : N.value.every((A) => c.value.has(A.path))), D = O(() => N.value.some((A) => c.value.has(A.path))), G = O(() => {
      const A = S.value.map((Q) => ({
        label: Q,
        value: Q
      }));
      return A.push({ label: "Custom path...", value: "__custom__" }), A;
    }), Z = O(() => k.value === "__custom__" ? C.value.trim().length > 0 : k.value.length > 0), te = O(() => {
      let A = 0;
      for (const Q of c.value) {
        const P = u.value.find((R) => R.path === Q);
        P && (A += P.size);
      }
      return A;
    });
    function ie(A) {
      if (A === 0) return "0 B";
      const Q = 1024 * 1024 * 1024, P = 1024 * 1024, R = 1024;
      return A >= Q ? `${(A / Q).toFixed(2)} GB` : A >= P ? `${(A / P).toFixed(1)} MB` : A >= R ? `${(A / R).toFixed(0)} KB` : `${A} B`;
    }
    function ge(A) {
      const Q = A.match(E);
      return Q ? `${Q[1]}${Q[4]}` : null;
    }
    function oe(A) {
      const Q = new Set(c.value), P = Q.has(A.path), R = A.shard_group || ge(A.path);
      if (R) {
        const ce = u.value.filter((Ve) => (Ve.shard_group || ge(Ve.path)) === R);
        P ? ce.forEach((Ve) => Q.delete(Ve.path)) : ce.forEach((Ve) => Q.add(Ve.path));
      } else
        P ? Q.delete(A.path) : Q.add(A.path);
      c.value = Q;
    }
    function X() {
      const A = new Set(c.value);
      for (const Q of N.value)
        Q.is_model_file && A.add(Q.path);
      c.value = A;
    }
    function de() {
      c.value = /* @__PURE__ */ new Set();
    }
    function Ne() {
      if (q.value) {
        const A = new Set(c.value);
        for (const Q of N.value)
          A.delete(Q.path);
        c.value = A;
      } else {
        const A = new Set(c.value);
        for (const Q of N.value)
          A.add(Q.path);
        c.value = A;
      }
    }
    function le(A) {
      w.value === A ? y.value = !y.value : (w.value = A, y.value = !0);
    }
    function pe(A) {
      const Q = A.split("/");
      return Q.length >= 2 ? Q[Q.length - 2] : null;
    }
    function me() {
      if (U.value || c.value.size === 0) return;
      const A = /* @__PURE__ */ new Set();
      for (const R of c.value) {
        const ce = pe(R);
        ce && A.add(ce.toLowerCase());
      }
      if (A.size !== 1) return;
      const Q = [...A][0], P = S.value.find(
        (R) => R.toLowerCase() === Q
      );
      P && P !== k.value && (I = !0, k.value = P, Rt(() => {
        I = !1;
      }));
    }
    function Ue() {
      return k.value === "__custom__" ? C.value.trim() : x.value.trim() ? `${k.value}/${x.value.trim()}` : k.value;
    }
    function se() {
      if (c.value.size === 0 || !Z.value) return;
      const A = Ue(), Q = [];
      for (const P of c.value) {
        const R = u.value.find((ce) => ce.path === P);
        R && Q.push({
          url: mk(o.repoId, o.revision, R.path),
          destination: A,
          filename: R.path.split("/").pop() || R.path
        });
      }
      a("queue", Q);
    }
    async function ne() {
      if (o.repoId) {
        d.value = !0, v.value = null;
        try {
          const A = `https://huggingface.co/${o.repoId}/tree/${o.revision || "main"}`, Q = await l(A);
          if (u.value = Q.files, o.preselectedFile) {
            const P = u.value.find((R) => R.path === o.preselectedFile);
            P && oe(P);
          }
        } catch (A) {
          v.value = A instanceof Error ? A.message : "Failed to load repository";
        } finally {
          d.value = !1;
        }
      }
    }
    async function M() {
      try {
        const A = await r();
        S.value = A.directories, A.directories.length > 0 && !k.value && (k.value = A.directories[0]);
      } catch {
        S.value = ["checkpoints", "loras", "vae", "controlnet", "unet"], k.value || (k.value = "checkpoints");
      }
    }
    return kt(() => [o.repoId, o.revision], () => {
      o.repoId && ne();
    }, { immediate: !1 }), kt(() => o.repoId, () => {
      U.value = !1;
    }), kt(c, () => {
      me();
    }, { deep: !0 }), kt(S, () => {
      S.value.length > 0 && c.value.size > 0 && me();
    }), kt(k, (A, Q) => {
      I || Q === "" || (U.value = !0);
    }), ot(() => {
      ne(), M();
    }), (A, Q) => (n(), i("div", fk, [
      t("div", vk, [
        t("button", {
          class: "back-btn",
          onClick: Q[0] || (Q[0] = (P) => A.$emit("back")),
          title: "Back to search"
        }, " ◄ "),
        t("div", pk, [
          t("span", gk, m(e.repoId), 1),
          e.revision ? (n(), i("span", hk, m(e.revision), 1)) : h("", !0)
        ])
      ]),
      d.value ? (n(), i("div", yk, " Loading repository files... ")) : v.value ? (n(), i("div", wk, m(v.value), 1)) : (n(), i(H, { key: 2 }, [
        t("div", _k, [
          _(it, {
            modelValue: f.value,
            "onUpdate:modelValue": Q[1] || (Q[1] = (P) => f.value = P),
            placeholder: "Filter files...",
            type: "search",
            class: "search-input"
          }, null, 8, ["modelValue"]),
          t("div", kk, [
            t("button", {
              class: De(["toggle-btn", { active: p.value }]),
              onClick: Q[2] || (Q[2] = (P) => p.value = !p.value)
            }, m(p.value ? "Models Only" : "All Files"), 3),
            t("button", {
              class: "action-btn",
              onClick: X
            }, "Auto-Select Models"),
            t("button", {
              class: "action-btn",
              onClick: de
            }, "Clear")
          ])
        ]),
        t("div", bk, [
          N.value.length > 0 ? (n(), i("div", $k, [
            t("input", {
              type: "checkbox",
              checked: q.value,
              indeterminate: D.value && !q.value,
              class: "file-checkbox",
              onChange: Ne
            }, null, 40, Ck),
            t("span", {
              class: "header-name",
              onClick: Q[3] || (Q[3] = (P) => le("name"))
            }, [
              Q[9] || (Q[9] = $(" Name ", -1)),
              t("span", xk, m(w.value === "name" ? y.value ? "▲" : "▼" : ""), 1)
            ]),
            t("span", {
              class: "header-size",
              onClick: Q[4] || (Q[4] = (P) => le("size"))
            }, [
              Q[10] || (Q[10] = $(" Size ", -1)),
              t("span", Sk, m(w.value === "size" ? y.value ? "▲" : "▼" : ""), 1)
            ])
          ])) : h("", !0),
          N.value.length === 0 ? (n(), i("div", Ik, m(u.value.length === 0 ? "No files in repository" : "No files match filter"), 1)) : (n(), i("div", Ek, [
            (n(!0), i(H, null, _e(z.value, (P) => (n(), i("div", {
              key: P.path,
              class: De(["file-item", { selected: c.value.has(P.path) }]),
              onClick: (R) => oe(P)
            }, [
              t("input", {
                type: "checkbox",
                checked: c.value.has(P.path),
                class: "file-checkbox",
                onClick: Q[5] || (Q[5] = st(() => {
                }, ["stop"])),
                onChange: (R) => oe(P)
              }, null, 40, Mk),
              t("span", Pk, m(P.path), 1),
              t("span", Rk, m(ie(P.size)), 1)
            ], 10, Tk))), 128))
          ]))
        ]),
        t("div", Nk, [
          Q[11] || (Q[11] = t("h4", { class: "section-label" }, "Download Destination", -1)),
          t("div", Lk, [
            _(rk, {
              modelValue: k.value,
              "onUpdate:modelValue": Q[6] || (Q[6] = (P) => k.value = P),
              options: G.value,
              placeholder: "Select directory...",
              class: "dest-select"
            }, null, 8, ["modelValue", "options"]),
            k.value !== "__custom__" ? (n(), i("span", Dk, "/")) : h("", !0),
            k.value !== "__custom__" ? (n(), L(it, {
              key: 1,
              modelValue: x.value,
              "onUpdate:modelValue": Q[7] || (Q[7] = (P) => x.value = P),
              placeholder: "subfolder (optional)",
              class: "dest-subfolder"
            }, null, 8, ["modelValue"])) : h("", !0)
          ]),
          k.value === "__custom__" ? (n(), L(it, {
            key: 0,
            modelValue: C.value,
            "onUpdate:modelValue": Q[8] || (Q[8] = (P) => C.value = P),
            placeholder: "Enter full path relative to models directory...",
            class: "dest-custom",
            "full-width": ""
          }, null, 8, ["modelValue"])) : h("", !0)
        ]),
        t("div", Ok, [
          t("div", Uk, [
            t("span", Ak, m(c.value.size) + " file(s) selected", 1),
            t("span", zk, m(ie(te.value)), 1)
          ]),
          _(Re, {
            variant: "primary",
            disabled: c.value.size === 0 || !Z.value,
            onClick: se
          }, {
            default: g(() => [...Q[12] || (Q[12] = [
              $(" Queue Download ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"])
        ])
      ], 64))
    ]));
  }
}), Fk = /* @__PURE__ */ Se(Vk, [["__scopeId", "data-v-183acebc"]]), Bk = { class: "token-config-modal" }, Wk = { class: "provider-info" }, Gk = { class: "provider-icon" }, jk = { class: "provider-name" }, Hk = {
  key: 0,
  class: "current-token"
}, qk = { class: "mask" }, Kk = { class: "token-input-section" }, Jk = { class: "input-label" }, Yk = { class: "help-text" }, Qk = ["href"], Xk = { class: "modal-actions" }, Zk = /* @__PURE__ */ xe({
  __name: "TokenConfigModal",
  props: {
    provider: {},
    currentTokenMask: {}
  },
  emits: ["close", "saved", "cleared"],
  setup(e, { emit: s }) {
    const o = e, a = s, { updateConfig: l } = ct(), r = b(""), u = b(!1), c = b(!1), d = O(
      () => o.provider === "huggingface" ? "HuggingFace" : "CivitAI"
    ), v = O(
      () => o.provider === "huggingface" ? "🤗" : "🎨"
    ), f = O(
      () => o.provider === "huggingface" ? "hf_xxxx..." : "Enter API key..."
    ), p = O(
      () => o.provider === "huggingface" ? "https://huggingface.co/settings/tokens" : "https://civitai.com/user/account"
    ), w = O(
      () => o.provider === "huggingface" ? "Get your HuggingFace token →" : "Get your CivitAI API key →"
    );
    async function y() {
      if (r.value.trim()) {
        u.value = !0;
        try {
          const x = o.provider === "huggingface" ? { huggingface_token: r.value.trim() } : { civitai_api_key: r.value.trim() };
          await l(x), r.value = "", a("saved"), a("close");
        } catch (x) {
          console.error("Failed to save token:", x);
        } finally {
          u.value = !1;
        }
      }
    }
    async function k() {
      c.value = !0;
      try {
        const x = o.provider === "huggingface" ? { huggingface_token: null } : { civitai_api_key: null };
        await l(x), a("cleared"), a("close");
      } catch (x) {
        console.error("Failed to clear token:", x);
      } finally {
        c.value = !1;
      }
    }
    return (x, C) => (n(), L(Ct, {
      title: "Configure API Token",
      onClose: C[2] || (C[2] = (S) => x.$emit("close"))
    }, {
      body: g(() => [
        t("div", Bk, [
          t("div", Wk, [
            t("span", Gk, m(v.value), 1),
            t("span", jk, m(d.value), 1)
          ]),
          e.currentTokenMask ? (n(), i("div", Hk, [
            C[4] || (C[4] = t("span", { class: "label" }, "Current token:", -1)),
            t("span", qk, m(e.currentTokenMask), 1),
            _(Re, {
              variant: "danger",
              size: "sm",
              onClick: k,
              loading: c.value
            }, {
              default: g(() => [...C[3] || (C[3] = [
                $(" Clear Token ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ])) : h("", !0),
          t("div", Kk, [
            t("label", Jk, m(e.currentTokenMask ? "Replace with new token:" : "Enter token:"), 1),
            _(it, {
              modelValue: r.value,
              "onUpdate:modelValue": C[0] || (C[0] = (S) => r.value = S),
              type: "password",
              placeholder: f.value
            }, null, 8, ["modelValue", "placeholder"]),
            t("div", Yk, [
              t("a", {
                href: p.value,
                target: "_blank",
                rel: "noopener"
              }, m(w.value), 9, Qk)
            ])
          ])
        ])
      ]),
      footer: g(() => [
        t("div", Xk, [
          _(Re, {
            variant: "secondary",
            onClick: C[1] || (C[1] = (S) => x.$emit("close"))
          }, {
            default: g(() => [...C[5] || (C[5] = [
              $(" Cancel ", -1)
            ])]),
            _: 1
          }),
          _(Re, {
            variant: "primary",
            disabled: !r.value.trim(),
            loading: u.value,
            onClick: y
          }, {
            default: g(() => [...C[6] || (C[6] = [
              $(" Save Token ", -1)
            ])]),
            _: 1
          }, 8, ["disabled", "loading"])
        ])
      ]),
      _: 1
    }));
  }
}), eb = /* @__PURE__ */ Se(Zk, [["__scopeId", "data-v-0687d0ce"]]), tb = { class: "huggingface-tab" }, sb = {
  key: 0,
  class: "search-section"
}, ob = { class: "search-header" }, nb = { class: "search-bar" }, ab = {
  key: 1,
  class: "search-results"
}, lb = {
  key: 0,
  class: "loading-state"
}, ib = {
  key: 1,
  class: "error-state"
}, rb = {
  key: 2,
  class: "results-list"
}, ub = ["onClick"], cb = { class: "repo-header" }, db = { class: "repo-id" }, mb = { class: "repo-stats" }, fb = {
  class: "stat",
  title: "Downloads"
}, vb = {
  class: "stat",
  title: "Likes"
}, pb = {
  key: 0,
  class: "repo-desc"
}, gb = {
  key: 1,
  class: "repo-tags"
}, hb = {
  key: 3,
  class: "empty-state"
}, yb = {
  key: 4,
  class: "hint-state"
}, wb = /* @__PURE__ */ xe({
  __name: "HuggingFaceTab",
  emits: ["queue"],
  setup(e) {
    const { searchHuggingFaceRepos: s, getConfig: o } = ct(), a = b("search"), l = b(""), r = b([]), u = b(!1), c = b(null), d = b(!1), v = b(null), f = b("main"), p = b(), w = b(), y = b(!1), k = b(null), x = O(() => {
      if (!c.value) return !1;
      const q = c.value.toLowerCase();
      return c.value.includes("401") || c.value.includes("403") || q.includes("authentication") || q.includes("unauthorized");
    });
    function C(q) {
      return q >= 1e6 ? `${(q / 1e6).toFixed(1)}M` : q >= 1e3 ? `${(q / 1e3).toFixed(1)}K` : String(q);
    }
    async function S() {
      const q = l.value.trim();
      if (!q) return;
      c.value = null;
      const D = ck(q);
      if (D.kind === "file" && D.repoId && D.path) {
        v.value = D.repoId, f.value = D.revision || "main";
        const G = D.path.split("/");
        G.length > 1 ? p.value = G.slice(0, -1).join("/") : p.value = void 0, w.value = D.path, a.value = "browse";
        return;
      }
      if (D.kind === "repo" && D.repoId) {
        v.value = D.repoId, f.value = D.revision || "main", p.value = D.path, w.value = void 0, a.value = "browse";
        return;
      }
      if (/^[\w-]+\/[\w.-]+$/.test(q) && !q.includes("://")) {
        v.value = q, f.value = "main", p.value = void 0, w.value = void 0, a.value = "browse";
        return;
      }
      u.value = !0;
      try {
        const G = await s(q);
        r.value = G.results, d.value = !0;
      } catch (G) {
        c.value = G instanceof Error ? G.message : "Search failed";
      } finally {
        u.value = !1;
      }
    }
    function U(q) {
      v.value = q, f.value = "main", p.value = void 0, w.value = void 0, a.value = "browse";
    }
    function I() {
      a.value = "search", v.value = null, p.value = void 0, w.value = void 0;
    }
    async function E() {
      try {
        const q = await o();
        k.value = q.huggingface_token || null;
      } catch (q) {
        console.error("Failed to load config:", q);
      }
    }
    function N() {
      E(), x.value && l.value && S();
    }
    function z() {
      k.value = null;
    }
    return ot(E), (q, D) => (n(), i("div", tb, [
      a.value === "search" ? (n(), i("div", sb, [
        t("div", ob, [
          t("div", nb, [
            _(it, {
              modelValue: l.value,
              "onUpdate:modelValue": D[0] || (D[0] = (G) => l.value = G),
              placeholder: "Search repos, paste URL, or enter user/repo...",
              onKeydown: es(S, ["enter"])
            }, null, 8, ["modelValue"]),
            _(Re, {
              variant: "primary",
              onClick: S,
              loading: u.value
            }, {
              default: g(() => [...D[5] || (D[5] = [
                $(" Search ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ]),
          _(Re, {
            variant: "secondary",
            size: "sm",
            onClick: D[1] || (D[1] = (G) => y.value = !0)
          }, {
            default: g(() => [
              $(m(k.value ? `Token: ${k.value}` : "Configure Token"), 1)
            ]),
            _: 1
          })
        ])
      ])) : h("", !0),
      a.value === "search" ? (n(), i("div", ab, [
        u.value ? (n(), i("div", lb, " Searching HuggingFace... ")) : c.value ? (n(), i("div", ib, [
          t("p", null, m(c.value), 1),
          x.value ? (n(), L(Re, {
            key: 0,
            variant: "primary",
            size: "sm",
            onClick: D[2] || (D[2] = (G) => y.value = !0)
          }, {
            default: g(() => [...D[6] || (D[6] = [
              $(" Configure HuggingFace Token ", -1)
            ])]),
            _: 1
          })) : h("", !0)
        ])) : r.value.length > 0 ? (n(), i("div", rb, [
          (n(!0), i(H, null, _e(r.value, (G) => (n(), i("div", {
            key: G.repo_id,
            class: "repo-card",
            onClick: (Z) => U(G.repo_id)
          }, [
            t("div", cb, [
              t("span", db, m(G.repo_id), 1),
              t("div", mb, [
                t("span", fb, [
                  D[7] || (D[7] = t("span", { class: "stat-icon" }, "↓", -1)),
                  $(" " + m(C(G.downloads)), 1)
                ]),
                t("span", vb, [
                  D[8] || (D[8] = t("span", { class: "stat-icon" }, "★", -1)),
                  $(" " + m(C(G.likes)), 1)
                ])
              ])
            ]),
            G.description ? (n(), i("p", pb, m(G.description), 1)) : h("", !0),
            G.tags.length > 0 ? (n(), i("div", gb, [
              (n(!0), i(H, null, _e(G.tags.slice(0, 5), (Z) => (n(), i("span", {
                key: Z,
                class: "tag"
              }, m(Z), 1))), 128))
            ])) : h("", !0)
          ], 8, ub))), 128))
        ])) : d.value ? (n(), i("div", hb, " No repositories found ")) : (n(), i("div", yb, " Enter a HuggingFace URL, repo ID (user/repo), or search term "))
      ])) : (n(), L(Fk, {
        key: 2,
        "repo-id": v.value,
        revision: f.value,
        "initial-path": p.value,
        "preselected-file": w.value,
        onBack: I,
        onQueue: D[3] || (D[3] = (G) => q.$emit("queue", G))
      }, null, 8, ["repo-id", "revision", "initial-path", "preselected-file"])),
      y.value ? (n(), L(eb, {
        key: 3,
        provider: "huggingface",
        "current-token-mask": k.value,
        onClose: D[4] || (D[4] = (G) => y.value = !1),
        onSaved: N,
        onCleared: z
      }, null, 8, ["current-token-mask"])) : h("", !0)
    ]));
  }
}), _b = /* @__PURE__ */ Se(wb, [["__scopeId", "data-v-e13209bf"]]), kb = { class: "civitai-tab" }, bb = /* @__PURE__ */ xe({
  __name: "CivitaiTab",
  setup(e) {
    return (s, o) => (n(), i("div", kb, [...o[0] || (o[0] = [
      t("div", { class: "placeholder" }, [
        t("div", { class: "icon" }, "🎨"),
        t("h3", null, "Civitai Integration"),
        t("p", null, "Coming soon! Civitai model search and download will be available in a future update.")
      ], -1)
    ])]));
  }
}), $b = /* @__PURE__ */ Se(bb, [["__scopeId", "data-v-44948051"]]), Cb = { class: "direct-url-tab" }, xb = { class: "input-group" }, Sb = { class: "input-group" }, Ib = {
  key: 0,
  class: "error"
}, Eb = { class: "actions" }, Tb = /* @__PURE__ */ xe({
  __name: "DirectUrlTab",
  emits: ["queue"],
  setup(e, { emit: s }) {
    const o = s, a = b(""), l = b(""), r = O(() => {
      const d = l.value.trim();
      if (!d) return null;
      const v = d.replace(/\\/g, "/").split("/").pop() || "";
      return v.includes(".") && !v.endsWith(".") ? null : "Target path must include a filename (e.g. checkpoints/model.safetensors).";
    }), u = O(() => a.value.trim() !== "" && l.value.trim() !== "" && !r.value), c = () => {
      if (!u.value) return;
      const d = l.value.replace(/\\/g, "/").split("/").pop() || "";
      o("queue", [{
        url: a.value.trim(),
        targetPath: l.value.trim(),
        filename: d
      }]), a.value = "", l.value = "";
    };
    return (d, v) => (n(), i("div", Cb, [
      t("div", xb, [
        v[2] || (v[2] = t("label", null, "Download URL", -1)),
        _(it, {
          modelValue: a.value,
          "onUpdate:modelValue": v[0] || (v[0] = (f) => a.value = f),
          placeholder: "https://example.com/model.safetensors"
        }, null, 8, ["modelValue"])
      ]),
      t("div", Sb, [
        v[3] || (v[3] = t("label", null, "Target Path (relative to models directory)", -1)),
        _(it, {
          modelValue: l.value,
          "onUpdate:modelValue": v[1] || (v[1] = (f) => l.value = f),
          placeholder: "e.g. checkpoints/model.safetensors"
        }, null, 8, ["modelValue"]),
        r.value ? (n(), i("p", Ib, m(r.value), 1)) : h("", !0)
      ]),
      v[5] || (v[5] = t("p", { class: "note" }, "Model will be queued for background download.", -1)),
      t("div", Eb, [
        _(Re, {
          variant: "primary",
          disabled: !u.value,
          onClick: c
        }, {
          default: g(() => [...v[4] || (v[4] = [
            $(" Queue Download ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ])
    ]));
  }
}), Mb = /* @__PURE__ */ Se(Tb, [["__scopeId", "data-v-01def7aa"]]), Pb = { class: "download-modal" }, Rb = { class: "tab-bar" }, Nb = ["onClick"], Lb = { class: "tab-content" }, Db = /* @__PURE__ */ xe({
  __name: "ModelDownloadModal",
  props: {
    show: { type: Boolean }
  },
  emits: ["close"],
  setup(e, { emit: s }) {
    const o = s, { addToQueue: a } = Lo(), l = [
      { id: "huggingface", label: "HuggingFace", icon: "🤗" },
      { id: "civitai", label: "Civitai", icon: "🎨" },
      { id: "direct", label: "Direct URL", icon: "🔗" }
    ], r = b("huggingface");
    function u(v) {
      a(v.map((f) => ({
        workflow: "__manual__",
        filename: f.filename,
        url: f.url,
        targetPath: f.destination ? `${f.destination}/${f.filename}` : f.filename
      }))), o("close");
    }
    function c(v) {
      a(v.map((f) => ({
        workflow: "__manual__",
        filename: f.filename,
        url: f.url,
        targetPath: f.targetPath
      }))), o("close");
    }
    function d() {
      o("close");
    }
    return (v, f) => e.show ? (n(), L(Ct, {
      key: 0,
      title: "DOWNLOAD NEW MODEL",
      size: "xl",
      "fixed-height": "",
      onClose: d
    }, {
      body: g(() => [
        t("div", Pb, [
          t("div", Rb, [
            (n(), i(H, null, _e(l, (p) => t("button", {
              key: p.id,
              class: De(["tab-btn", { active: r.value === p.id }]),
              onClick: (w) => r.value = p.id
            }, m(p.icon) + " " + m(p.label), 11, Nb)), 64))
          ]),
          t("div", Lb, [
            r.value === "huggingface" ? (n(), L(_b, {
              key: 0,
              onQueue: u
            })) : r.value === "civitai" ? (n(), L($b, { key: 1 })) : r.value === "direct" ? (n(), L(Mb, {
              key: 2,
              onQueue: c
            })) : h("", !0)
          ])
        ])
      ]),
      footer: g(() => [
        _(Re, {
          variant: "secondary",
          onClick: d
        }, {
          default: g(() => [...f[0] || (f[0] = [
            $(" Cancel ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    })) : h("", !0);
  }
}), eu = /* @__PURE__ */ Se(Db, [["__scopeId", "data-v-90a9f401"]]), Ob = /* @__PURE__ */ xe({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(e, { emit: s }) {
    const o = s, { getEnvironmentModels: a, getStatus: l } = ct(), r = b([]), u = b([]), c = b("production"), d = b(!1), v = b(null), f = b(""), p = b(!1), w = b(null), y = b(!1);
    function k() {
      p.value = !1, o("navigate", "model-index");
    }
    const x = O(
      () => r.value.reduce((D, G) => D + (G.size || 0), 0)
    ), C = O(() => {
      if (!f.value.trim()) return r.value;
      const D = f.value.toLowerCase();
      return r.value.filter((G) => G.filename.toLowerCase().includes(D));
    }), S = O(() => {
      if (!f.value.trim()) return u.value;
      const D = f.value.toLowerCase();
      return u.value.filter((G) => G.filename.toLowerCase().includes(D));
    }), U = O(() => {
      const D = {};
      for (const Z of C.value) {
        const te = Z.type || "other";
        D[te] || (D[te] = []), D[te].push(Z);
      }
      const G = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(D).sort(([Z], [te]) => {
        const ie = G.indexOf(Z), ge = G.indexOf(te);
        return ie >= 0 && ge >= 0 ? ie - ge : ie >= 0 ? -1 : ge >= 0 ? 1 : Z.localeCompare(te);
      }).map(([Z, te]) => ({ type: Z, models: te }));
    });
    function I(D) {
      if (!D) return "Unknown";
      const G = D / (1024 * 1024);
      return G >= 1024 ? `${(G / 1024).toFixed(1)} GB` : `${G.toFixed(0)} MB`;
    }
    function E(D) {
      w.value = D.hash || D.filename;
    }
    function N(D) {
      o("navigate", "model-index");
    }
    function z(D) {
      alert(`Download functionality not yet implemented for ${D}`);
    }
    async function q() {
      d.value = !0, v.value = null;
      try {
        const D = await a();
        r.value = D, u.value = [];
        const G = await l();
        c.value = G.environment || "production";
      } catch (D) {
        v.value = D instanceof Error ? D.message : "Failed to load models";
      } finally {
        d.value = !1;
      }
    }
    return ot(q), (D, G) => (n(), i(H, null, [
      _(Tt, null, {
        header: g(() => [
          _(Mt, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: G[1] || (G[1] = (Z) => p.value = !0)
          }, {
            actions: g(() => [
              _(Ce, {
                variant: "primary",
                size: "sm",
                onClick: G[0] || (G[0] = (Z) => y.value = !0)
              }, {
                default: g(() => [...G[6] || (G[6] = [
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
        search: g(() => [
          _(mo, {
            modelValue: f.value,
            "onUpdate:modelValue": G[2] || (G[2] = (Z) => f.value = Z),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          d.value ? (n(), L($s, {
            key: 0,
            message: "Loading environment models..."
          })) : v.value ? (n(), L(Cs, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: q
          }, null, 8, ["message"])) : (n(), i(H, { key: 2 }, [
            r.value.length ? (n(), L(gn, {
              key: 0,
              variant: "compact"
            }, {
              default: g(() => [
                $(" Total: " + m(r.value.length) + " models • " + m(I(x.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : h("", !0),
            (n(!0), i(H, null, _e(U.value, (Z) => (n(), L(bt, {
              key: Z.type,
              title: Z.type.toUpperCase(),
              count: Z.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: g(() => [
                (n(!0), i(H, null, _e(Z.models, (te) => (n(), L(At, {
                  key: te.hash || te.filename,
                  status: "synced"
                }, {
                  icon: g(() => [...G[7] || (G[7] = [
                    $("📦", -1)
                  ])]),
                  title: g(() => [
                    $(m(te.filename), 1)
                  ]),
                  subtitle: g(() => [
                    $(m(I(te.size)), 1)
                  ]),
                  details: g(() => [
                    _(_t, {
                      label: "Used by:",
                      value: (te.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    _(_t, {
                      label: "Path:",
                      value: te.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    _(Ce, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (ie) => E(te)
                    }, {
                      default: g(() => [...G[8] || (G[8] = [
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
            S.value.length ? (n(), L(bt, {
              key: 1,
              title: "MISSING",
              count: S.value.length
            }, {
              default: g(() => [
                (n(!0), i(H, null, _e(S.value, (Z) => (n(), L(At, {
                  key: Z.filename,
                  status: "broken"
                }, {
                  icon: g(() => [...G[9] || (G[9] = [
                    $("⚠", -1)
                  ])]),
                  title: g(() => [
                    $(m(Z.filename), 1)
                  ]),
                  subtitle: g(() => [...G[10] || (G[10] = [
                    t("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: g(() => {
                    var te;
                    return [
                      _(_t, {
                        label: "Required by:",
                        value: ((te = Z.workflow_names) == null ? void 0 : te.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: g(() => [
                    _(Ce, {
                      variant: "primary",
                      size: "sm",
                      onClick: (te) => z(Z.filename)
                    }, {
                      default: g(() => [...G[11] || (G[11] = [
                        $(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    _(Ce, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (te) => N(Z.filename)
                    }, {
                      default: g(() => [...G[12] || (G[12] = [
                        $(" Search Workspace Index ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : h("", !0),
            !C.value.length && !S.value.length ? (n(), L(is, {
              key: 2,
              icon: "📭",
              message: f.value ? `No models match '${f.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : h("", !0)
          ], 64))
        ]),
        _: 1
      }),
      _(Yt, {
        show: p.value,
        title: "About Environment Models",
        onClose: G[3] || (G[3] = (Z) => p.value = !1)
      }, {
        content: g(() => [
          t("p", null, [
            G[13] || (G[13] = $(" These are models currently used by workflows in ", -1)),
            t("strong", null, '"' + m(c.value) + '"', 1),
            G[14] || (G[14] = $(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: g(() => [
          _(Ce, {
            variant: "primary",
            onClick: k
          }, {
            default: g(() => [...G[15] || (G[15] = [
              $(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w.value ? (n(), L(Tl, {
        key: 0,
        identifier: w.value,
        onClose: G[4] || (G[4] = (Z) => w.value = null)
      }, null, 8, ["identifier"])) : h("", !0),
      _(eu, {
        show: y.value,
        onClose: G[5] || (G[5] = (Z) => y.value = !1)
      }, null, 8, ["show"])
    ], 64));
  }
}), Ub = /* @__PURE__ */ Se(Ob, [["__scopeId", "data-v-af3ca736"]]), Ab = {
  key: 0,
  class: "indexing-progress"
}, zb = { class: "progress-info" }, Vb = { class: "progress-label" }, Fb = { class: "progress-count" }, Bb = { class: "progress-bar" }, Wb = { class: "modal-content" }, Gb = { class: "modal-header" }, jb = { class: "modal-body" }, Hb = { class: "input-group" }, qb = { class: "current-path" }, Kb = { class: "input-group" }, Jb = { class: "modal-footer" }, Yb = /* @__PURE__ */ xe({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(e, { emit: s }) {
    const {
      getWorkspaceModels: o,
      scanWorkspaceModels: a,
      getModelsDirectory: l,
      setModelsDirectory: r
    } = ct(), u = s, c = b([]), d = b(!1), v = b(!1), f = b(null), p = b(""), w = b(!1), y = b(null), k = b(!1), x = b(null), C = b(""), S = b(!1), U = b(!1), I = b(null), E = O(
      () => c.value.reduce((ge, oe) => ge + (oe.size || 0), 0)
    ), N = O(() => {
      if (!p.value.trim()) return c.value;
      const ge = p.value.toLowerCase();
      return c.value.filter((oe) => {
        const X = oe, de = oe.sha256 || X.sha256_hash || "";
        return oe.filename.toLowerCase().includes(ge) || de.toLowerCase().includes(ge);
      });
    }), z = O(() => {
      const ge = {};
      for (const X of N.value) {
        const de = X.type || "other";
        ge[de] || (ge[de] = []), ge[de].push(X);
      }
      const oe = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(ge).sort(([X], [de]) => {
        const Ne = oe.indexOf(X), le = oe.indexOf(de);
        return Ne >= 0 && le >= 0 ? Ne - le : Ne >= 0 ? -1 : le >= 0 ? 1 : X.localeCompare(de);
      }).map(([X, de]) => ({ type: X, models: de }));
    });
    function q(ge) {
      if (!ge) return "Unknown";
      const oe = 1024 * 1024 * 1024, X = 1024 * 1024;
      return ge >= oe ? `${(ge / oe).toFixed(1)} GB` : ge >= X ? `${(ge / X).toFixed(0)} MB` : `${(ge / 1024).toFixed(0)} KB`;
    }
    function D(ge) {
      y.value = ge.hash || ge.filename;
    }
    async function G() {
      v.value = !0, f.value = null;
      try {
        const ge = await a();
        await te(), ge.changes > 0 && console.log(`Scan complete: ${ge.changes} changes detected`);
      } catch (ge) {
        f.value = ge instanceof Error ? ge.message : "Failed to scan models";
      } finally {
        v.value = !1;
      }
    }
    async function Z() {
      if (C.value.trim()) {
        S.value = !0, f.value = null;
        try {
          const ge = await r(C.value.trim());
          x.value = ge.path, k.value = !1, C.value = "", await te(), console.log(`Directory changed: ${ge.models_indexed} models indexed`), u("refresh");
        } catch (ge) {
          f.value = ge instanceof Error ? ge.message : "Failed to change directory";
        } finally {
          S.value = !1;
        }
      }
    }
    async function te() {
      d.value = !0, f.value = null;
      try {
        c.value = await o();
      } catch (ge) {
        f.value = ge instanceof Error ? ge.message : "Failed to load workspace models";
      } finally {
        d.value = !1;
      }
    }
    async function ie() {
      try {
        const ge = await l();
        x.value = ge.path;
      } catch {
      }
    }
    return ot(() => {
      te(), ie();
    }), (ge, oe) => (n(), i(H, null, [
      _(Tt, null, {
        header: g(() => [
          _(Mt, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: oe[2] || (oe[2] = (X) => w.value = !0)
          }, {
            actions: g(() => [
              _(Ce, {
                variant: "primary",
                size: "sm",
                disabled: v.value,
                onClick: G
              }, {
                default: g(() => [
                  $(m(v.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              _(Ce, {
                variant: "primary",
                size: "sm",
                onClick: oe[0] || (oe[0] = (X) => k.value = !0)
              }, {
                default: g(() => [...oe[11] || (oe[11] = [
                  $(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              _(Ce, {
                variant: "primary",
                size: "sm",
                onClick: oe[1] || (oe[1] = (X) => U.value = !0)
              }, {
                default: g(() => [...oe[12] || (oe[12] = [
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
        search: g(() => [
          I.value ? (n(), i("div", Ab, [
            t("div", zb, [
              t("span", Vb, m(I.value.message), 1),
              t("span", Fb, m(I.value.current) + "/" + m(I.value.total), 1)
            ]),
            t("div", Bb, [
              t("div", {
                class: "progress-fill",
                style: Ft({ width: `${I.value.current / I.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : h("", !0),
          _(mo, {
            modelValue: p.value,
            "onUpdate:modelValue": oe[3] || (oe[3] = (X) => p.value = X),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          d.value || I.value ? (n(), L($s, {
            key: 0,
            message: I.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : f.value ? (n(), L(Cs, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: te
          }, null, 8, ["message"])) : (n(), i(H, { key: 2 }, [
            c.value.length ? (n(), L(gn, {
              key: 0,
              variant: "compact"
            }, {
              default: g(() => [
                $(" Total: " + m(c.value.length) + " models • " + m(q(E.value)), 1)
              ]),
              _: 1
            })) : h("", !0),
            (n(!0), i(H, null, _e(z.value, (X) => (n(), L(bt, {
              key: X.type,
              title: X.type.toUpperCase(),
              count: X.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: g(() => [
                (n(!0), i(H, null, _e(X.models, (de) => (n(), L(At, {
                  key: de.sha256 || de.filename,
                  status: "synced"
                }, {
                  icon: g(() => [...oe[13] || (oe[13] = [
                    $("📦", -1)
                  ])]),
                  title: g(() => [
                    $(m(de.filename), 1)
                  ]),
                  subtitle: g(() => [
                    $(m(q(de.size)), 1)
                  ]),
                  details: g(() => [
                    _(_t, {
                      label: "Hash:",
                      value: de.hash ? de.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    _(Ce, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Ne) => D(de)
                    }, {
                      default: g(() => [...oe[14] || (oe[14] = [
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
            N.value.length ? h("", !0) : (n(), L(is, {
              key: 1,
              icon: "📭",
              message: p.value ? `No models match '${p.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      _(Yt, {
        show: w.value,
        title: "About Workspace Model Index",
        onClose: oe[4] || (oe[4] = (X) => w.value = !1)
      }, {
        content: g(() => [...oe[15] || (oe[15] = [
          t("p", null, [
            $(" Content-addressable model storage shared across "),
            t("strong", null, "all environments"),
            $(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      y.value ? (n(), L(Tl, {
        key: 0,
        identifier: y.value,
        onClose: oe[5] || (oe[5] = (X) => y.value = null)
      }, null, 8, ["identifier"])) : h("", !0),
      (n(), L(Ot, { to: "body" }, [
        k.value ? (n(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: oe[9] || (oe[9] = st((X) => k.value = !1, ["self"]))
        }, [
          t("div", Wb, [
            t("div", Gb, [
              oe[16] || (oe[16] = t("h3", null, "Change Models Directory", -1)),
              t("button", {
                class: "modal-close",
                onClick: oe[6] || (oe[6] = (X) => k.value = !1)
              }, "✕")
            ]),
            t("div", jb, [
              t("div", Hb, [
                oe[17] || (oe[17] = t("label", null, "Current Directory", -1)),
                t("code", qb, m(x.value || "Not set"), 1)
              ]),
              t("div", Kb, [
                oe[18] || (oe[18] = t("label", null, "New Directory Path", -1)),
                _(it, {
                  modelValue: C.value,
                  "onUpdate:modelValue": oe[7] || (oe[7] = (X) => C.value = X),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              oe[19] || (oe[19] = t("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            t("div", Jb, [
              _(Re, {
                variant: "secondary",
                onClick: oe[8] || (oe[8] = (X) => k.value = !1)
              }, {
                default: g(() => [...oe[20] || (oe[20] = [
                  $(" Cancel ", -1)
                ])]),
                _: 1
              }),
              _(Re, {
                variant: "primary",
                disabled: !C.value.trim() || S.value,
                loading: S.value,
                onClick: Z
              }, {
                default: g(() => [
                  $(m(S.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : h("", !0)
      ])),
      _(eu, {
        show: U.value,
        onClose: oe[10] || (oe[10] = (X) => U.value = !1)
      }, null, 8, ["show"])
    ], 64));
  }
}), Qb = /* @__PURE__ */ Se(Yb, [["__scopeId", "data-v-3705114c"]]), Xb = { class: "node-details" }, Zb = { class: "status-row" }, e2 = {
  key: 0,
  class: "detail-row"
}, t2 = { class: "value" }, s2 = { class: "detail-row" }, o2 = { class: "value" }, n2 = {
  key: 1,
  class: "detail-row"
}, a2 = { class: "value mono" }, l2 = {
  key: 2,
  class: "detail-row"
}, i2 = ["href"], r2 = {
  key: 3,
  class: "detail-row"
}, u2 = { class: "value mono small" }, c2 = { class: "detail-row" }, d2 = {
  key: 0,
  class: "value"
}, m2 = {
  key: 1,
  class: "workflow-list"
}, f2 = /* @__PURE__ */ xe({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = O(() => o.node.installed ? o.node.tracked ? o.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), r = O(() => o.node.installed ? o.node.tracked ? o.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), u = O(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[o.node.source] || o.node.source);
    return (c, d) => (n(), L(Ct, {
      title: `NODE DETAILS: ${e.node.name}`,
      size: "md",
      onClose: d[1] || (d[1] = (v) => a("close"))
    }, {
      body: g(() => [
        t("div", Xb, [
          t("div", Zb, [
            d[2] || (d[2] = t("span", { class: "label" }, "Status:", -1)),
            t("span", {
              class: De(["status-badge", l.value])
            }, m(r.value), 3)
          ]),
          e.node.version ? (n(), i("div", e2, [
            d[3] || (d[3] = t("span", { class: "label" }, "Version:", -1)),
            t("span", t2, m(e.node.source === "development" ? "" : "v") + m(e.node.version), 1)
          ])) : h("", !0),
          t("div", s2, [
            d[4] || (d[4] = t("span", { class: "label" }, "Source:", -1)),
            t("span", o2, m(u.value), 1)
          ]),
          e.node.registry_id ? (n(), i("div", n2, [
            d[5] || (d[5] = t("span", { class: "label" }, "Registry ID:", -1)),
            t("span", a2, m(e.node.registry_id), 1)
          ])) : h("", !0),
          e.node.repository ? (n(), i("div", l2, [
            d[7] || (d[7] = t("span", { class: "label" }, "Repository:", -1)),
            t("a", {
              href: e.node.repository,
              target: "_blank",
              rel: "noopener noreferrer",
              class: "repo-link"
            }, [
              $(m(e.node.repository) + " ", 1),
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
            ], 8, i2)
          ])) : h("", !0),
          e.node.download_url ? (n(), i("div", r2, [
            d[8] || (d[8] = t("span", { class: "label" }, "Download URL:", -1)),
            t("span", u2, m(e.node.download_url), 1)
          ])) : h("", !0),
          d[10] || (d[10] = t("div", { class: "section-divider" }, null, -1)),
          t("div", c2, [
            d[9] || (d[9] = t("span", { class: "label" }, "Used by:", -1)),
            !e.node.used_in_workflows || e.node.used_in_workflows.length === 0 ? (n(), i("span", d2, " Not used in any workflows ")) : (n(), i("div", m2, [
              (n(!0), i(H, null, _e(e.node.used_in_workflows, (v) => (n(), i("span", {
                key: v,
                class: "workflow-tag"
              }, m(v), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: g(() => [
        _(Re, {
          variant: "secondary",
          onClick: d[0] || (d[0] = (v) => a("close"))
        }, {
          default: g(() => [...d[11] || (d[11] = [
            $(" Close ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), v2 = /* @__PURE__ */ Se(f2, [["__scopeId", "data-v-b342f626"]]), p2 = { class: "dialog-message" }, g2 = {
  key: 0,
  class: "dialog-details"
}, h2 = {
  key: 1,
  class: "dialog-warning"
}, y2 = /* @__PURE__ */ xe({
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
    return (s, o) => (n(), L(Ct, {
      title: e.title,
      size: "sm",
      onClose: o[3] || (o[3] = (a) => s.$emit("cancel"))
    }, {
      body: g(() => [
        t("p", p2, m(e.message), 1),
        e.details && e.details.length ? (n(), i("div", g2, [
          (n(!0), i(H, null, _e(e.details, (a, l) => (n(), i("div", {
            key: l,
            class: "detail-item"
          }, " • " + m(a), 1))), 128))
        ])) : h("", !0),
        e.warning ? (n(), i("p", h2, [
          o[4] || (o[4] = t("span", { class: "warning-icon" }, "⚠", -1)),
          $(" " + m(e.warning), 1)
        ])) : h("", !0)
      ]),
      footer: g(() => [
        _(Re, {
          variant: "secondary",
          onClick: o[0] || (o[0] = (a) => s.$emit("cancel"))
        }, {
          default: g(() => [
            $(m(e.cancelLabel), 1)
          ]),
          _: 1
        }),
        e.secondaryAction ? (n(), L(Re, {
          key: 0,
          variant: "secondary",
          onClick: o[1] || (o[1] = (a) => s.$emit("secondary"))
        }, {
          default: g(() => [
            $(m(e.secondaryLabel), 1)
          ]),
          _: 1
        })) : h("", !0),
        _(Re, {
          variant: e.destructive ? "danger" : "primary",
          onClick: o[2] || (o[2] = (a) => s.$emit("confirm"))
        }, {
          default: g(() => [
            $(m(e.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), tu = /* @__PURE__ */ Se(y2, [["__scopeId", "data-v-3670b9f5"]]), w2 = { class: "mismatch-warning" }, _2 = { class: "version-mismatch" }, k2 = { class: "version-actual" }, b2 = { class: "version-expected" }, $2 = { style: { color: "var(--cg-color-warning)" } }, C2 = { style: { color: "var(--cg-color-warning)" } }, x2 = {
  key: 0,
  class: "community-status-badge"
}, S2 = { key: 0 }, I2 = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, E2 = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, T2 = /* @__PURE__ */ xe({
  __name: "NodesSection",
  props: {
    versionMismatches: { default: () => [] }
  },
  emits: ["open-node-manager", "repair-environment", "toast"],
  setup(e, { emit: s }) {
    const o = e, a = s, { getNodes: l, trackNodeAsDev: r, installNode: u, uninstallNode: c, queueNodeInstall: d } = ct(), v = b({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0,
      blocked_count: 0
    }), f = b(!1), p = b(null), w = b(""), y = b(!1), k = b(null), x = b(/* @__PURE__ */ new Set()), C = b(null), S = O(() => {
      if (!w.value.trim()) return v.value.nodes;
      const P = w.value.toLowerCase();
      return v.value.nodes.filter(
        (R) => {
          var ce, Ve;
          return R.name.toLowerCase().includes(P) || ((ce = R.description) == null ? void 0 : ce.toLowerCase().includes(P)) || ((Ve = R.repository) == null ? void 0 : Ve.toLowerCase().includes(P));
        }
      );
    }), U = O(
      () => S.value.filter((P) => P.installed && P.tracked)
    ), I = O(
      () => S.value.filter((P) => !P.installed && P.tracked && !P.issue_type)
    ), E = O(
      () => S.value.filter((P) => P.installed && !P.tracked)
    ), N = O(
      () => S.value.filter((P) => P.issue_type === "version_gated")
    ), z = O(
      () => S.value.filter((P) => P.issue_type === "uninstallable")
    ), q = O(() => N.value.length), D = O(() => z.value.length);
    function G(P) {
      return P.registry_id || P.name;
    }
    function Z(P) {
      return x.value.has(G(P));
    }
    async function te(P, R) {
      const ce = P.registry_id;
      if (!ce) {
        a("toast", `Node "${P.name}" has no package id for install`, "warning");
        return;
      }
      if (R === "git" && !P.repository) {
        a("toast", `Node "${P.name}" has no repository URL for git install`, "warning");
        return;
      }
      const Ve = {
        id: ce,
        version: "latest",
        selected_version: "latest",
        mode: "remote",
        channel: "default"
      };
      R === "git" && P.repository && (Ve.repository = P.repository, Ve.install_source = "git"), await d(Ve), x.value.add(G(P)), a("toast", `✓ Queued install for "${P.name}"`, "success");
    }
    function ie(P) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[P] || P;
    }
    const ge = O(() => o.versionMismatches.length > 0);
    function oe(P) {
      return !P.used_in_workflows || P.used_in_workflows.length === 0 ? "Not used in any workflows" : P.used_in_workflows.length === 1 ? P.used_in_workflows[0] : `${P.used_in_workflows.length} workflows`;
    }
    function X(P) {
      return P.issue_type === "version_gated" ? "Requires newer ComfyUI version" : "Blocked";
    }
    function de(P) {
      return P.issue_type === "version_gated" ? "Upgrade ComfyUI to a version that includes this builtin node." : "Manual intervention required.";
    }
    function Ne(P) {
      return P.registry_id ? `Community-mapped package: ${P.registry_id}` : "Community-mapped package";
    }
    function le(P) {
      return "Found via community mapping. Install from registry by default, or use git when needed.";
    }
    function pe(P) {
      k.value = P;
    }
    function me() {
      a("open-node-manager");
    }
    function Ue(P) {
      C.value = {
        title: "Track as Development Node",
        message: `Track "${P}" as a development node? This will add it to your environment manifest with source='development'.`,
        warning: "Development nodes are tracked locally but not version-controlled.",
        confirmLabel: "Track as Dev",
        destructive: !1,
        onConfirm: async () => {
          C.value = null;
          try {
            f.value = !0;
            const R = await r(P);
            R.status === "success" ? (a("toast", `✓ Node "${P}" tracked as development`, "success"), await Q()) : a("toast", `Failed to track node: ${R.message || "Unknown error"}`, "error");
          } catch (R) {
            a("toast", `Error tracking node: ${R instanceof Error ? R.message : "Unknown error"}`, "error");
          } finally {
            f.value = !1;
          }
        }
      };
    }
    function se(P) {
      C.value = {
        title: "Remove Untracked Node",
        message: `Remove "${P}" from custom_nodes/?`,
        warning: "This will permanently delete the node directory.",
        confirmLabel: "Remove",
        destructive: !0,
        onConfirm: async () => {
          C.value = null;
          try {
            f.value = !0;
            const R = await c(P);
            R.status === "success" ? (a("toast", `✓ Node "${P}" removed`, "success"), await Q()) : a("toast", `Failed to remove node: ${R.message || "Unknown error"}`, "error");
          } catch (R) {
            a("toast", `Error removing node: ${R instanceof Error ? R.message : "Unknown error"}`, "error");
          } finally {
            f.value = !1;
          }
        }
      };
    }
    function ne(P) {
      C.value = {
        title: "Install Missing Node",
        message: `Install "${P}"?`,
        warning: "This will download and install the node from the registry.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          C.value = null;
          try {
            f.value = !0;
            const R = await u(P);
            R.status === "success" ? (a("toast", `✓ Node "${P}" installed`, "success"), await Q()) : a("toast", `Failed to install node: ${R.message || "Unknown error"}`, "error");
          } catch (R) {
            a("toast", `Error installing node: ${R instanceof Error ? R.message : "Unknown error"}`, "error");
          } finally {
            f.value = !1;
          }
        }
      };
    }
    function M(P) {
      C.value = {
        title: "Install Community-Mapped Package",
        message: `Install "${P.name}" from the registry?`,
        warning: "This will queue a registry install through the manager queue.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          C.value = null;
          try {
            f.value = !0, await te(P, "registry");
          } catch (R) {
            a("toast", `Error queueing install: ${R instanceof Error ? R.message : "Unknown error"}`, "error");
          } finally {
            f.value = !1;
          }
        }
      };
    }
    function A(P) {
      C.value = {
        title: "Install Community-Mapped Package via Git",
        message: `Install "${P.name}" from git?`,
        warning: "Use git install only when you explicitly need the repository source.",
        confirmLabel: "Install via Git",
        destructive: !1,
        onConfirm: async () => {
          C.value = null;
          try {
            f.value = !0, await te(P, "git");
          } catch (R) {
            a("toast", `Error queueing git install: ${R instanceof Error ? R.message : "Unknown error"}`, "error");
          } finally {
            f.value = !1;
          }
        }
      };
    }
    async function Q() {
      f.value = !0, p.value = null;
      try {
        v.value = await l();
      } catch (P) {
        p.value = P instanceof Error ? P.message : "Failed to load nodes";
      } finally {
        f.value = !1;
      }
    }
    return ot(Q), (P, R) => (n(), i(H, null, [
      _(Tt, null, {
        header: g(() => [
          _(Mt, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: R[0] || (R[0] = (ce) => y.value = !0)
          }, {
            actions: g(() => [
              _(Ce, {
                variant: "primary",
                size: "sm",
                onClick: me
              }, {
                default: g(() => [...R[7] || (R[7] = [
                  $(" Browse Nodes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: g(() => [
          _(mo, {
            modelValue: w.value,
            "onUpdate:modelValue": R[1] || (R[1] = (ce) => w.value = ce),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          f.value ? (n(), L($s, {
            key: 0,
            message: "Loading nodes..."
          })) : p.value ? (n(), L(Cs, {
            key: 1,
            message: p.value,
            retry: !0,
            onRetry: Q
          }, null, 8, ["message"])) : (n(), i(H, { key: 2 }, [
            v.value.total_count ? (n(), L(gn, {
              key: 0,
              variant: "compact"
            }, {
              default: g(() => [
                $(m(v.value.installed_count) + " installed ", 1),
                v.value.missing_count ? (n(), i(H, { key: 0 }, [
                  $(" • " + m(v.value.missing_count) + " missing", 1)
                ], 64)) : h("", !0),
                q.value ? (n(), i(H, { key: 1 }, [
                  $(" • " + m(q.value) + " blocked", 1)
                ], 64)) : h("", !0),
                D.value ? (n(), i(H, { key: 2 }, [
                  $(" • " + m(D.value) + " community-mapped", 1)
                ], 64)) : h("", !0),
                v.value.untracked_count ? (n(), i(H, { key: 3 }, [
                  $(" • " + m(v.value.untracked_count) + " untracked", 1)
                ], 64)) : h("", !0)
              ]),
              _: 1
            })) : h("", !0),
            ge.value ? (n(), L(bt, {
              key: 1,
              title: "VERSION MISMATCHES",
              count: e.versionMismatches.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                t("div", w2, [
                  R[8] || (R[8] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("span", null, m(e.versionMismatches.length) + " node(s) have wrong versions. Environment needs repair.", 1)
                ]),
                (n(!0), i(H, null, _e(e.versionMismatches, (ce) => (n(), L(At, {
                  key: ce.name,
                  status: "warning"
                }, {
                  icon: g(() => [...R[9] || (R[9] = [
                    $("⚠", -1)
                  ])]),
                  title: g(() => [
                    $(m(ce.name), 1)
                  ]),
                  subtitle: g(() => [
                    t("span", _2, [
                      t("span", k2, m(ce.actual), 1),
                      R[10] || (R[10] = t("span", { class: "version-arrow" }, "→", -1)),
                      t("span", b2, m(ce.expected), 1)
                    ])
                  ]),
                  actions: g(() => [
                    _(Ce, {
                      variant: "warning",
                      size: "sm",
                      onClick: R[2] || (R[2] = (Ve) => a("repair-environment"))
                    }, {
                      default: g(() => [...R[11] || (R[11] = [
                        $(" Repair ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : h("", !0),
            N.value.length ? (n(), L(bt, {
              key: 2,
              title: "BLOCKED",
              count: N.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                (n(!0), i(H, null, _e(N.value, (ce) => (n(), L(At, {
                  key: `blocked-${ce.name}`,
                  status: "warning"
                }, {
                  icon: g(() => [...R[12] || (R[12] = [
                    $("⛔", -1)
                  ])]),
                  title: g(() => [
                    $(m(ce.name), 1)
                  ]),
                  subtitle: g(() => [
                    t("span", $2, m(X(ce)), 1)
                  ]),
                  details: g(() => [
                    _(_t, {
                      label: "Guidance:",
                      value: ce.issue_guidance || de(ce)
                    }, null, 8, ["value"]),
                    _(_t, {
                      label: "Used by:",
                      value: oe(ce)
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    _(Ce, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Ve) => pe(ce)
                    }, {
                      default: g(() => [...R[13] || (R[13] = [
                        $(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : h("", !0),
            z.value.length ? (n(), L(bt, {
              key: 3,
              title: "COMMUNITY-MAPPED",
              count: z.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                (n(!0), i(H, null, _e(z.value, (ce) => (n(), L(At, {
                  key: `community-${ce.name}`,
                  status: "warning"
                }, {
                  icon: g(() => [...R[14] || (R[14] = [
                    $("⚠", -1)
                  ])]),
                  title: g(() => [
                    $(m(ce.name), 1)
                  ]),
                  subtitle: g(() => [
                    t("span", C2, m(Ne(ce)), 1)
                  ]),
                  details: g(() => [
                    _(_t, {
                      label: "Guidance:",
                      value: ce.issue_guidance || le(ce)
                    }, null, 8, ["value"]),
                    _(_t, {
                      label: "Used by:",
                      value: oe(ce)
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    _(Ce, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Ve) => pe(ce)
                    }, {
                      default: g(() => [...R[15] || (R[15] = [
                        $(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    Z(ce) ? (n(), i("span", x2, "Queued")) : (n(), i(H, { key: 1 }, [
                      ce.registry_id ? (n(), L(Ce, {
                        key: 0,
                        variant: "primary",
                        size: "sm",
                        onClick: (Ve) => M(ce)
                      }, {
                        default: g(() => [...R[16] || (R[16] = [
                          $(" Install ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : h("", !0),
                      ce.repository ? (n(), L(Ce, {
                        key: 1,
                        variant: "secondary",
                        size: "sm",
                        onClick: (Ve) => A(ce)
                      }, {
                        default: g(() => [...R[17] || (R[17] = [
                          $(" Install via Git ", -1)
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
            E.value.length ? (n(), L(bt, {
              key: 4,
              title: "UNTRACKED",
              count: E.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                (n(!0), i(H, null, _e(E.value, (ce) => (n(), L(At, {
                  key: ce.name,
                  status: "warning"
                }, {
                  icon: g(() => [...R[18] || (R[18] = [
                    $("?", -1)
                  ])]),
                  title: g(() => [
                    $(m(ce.name), 1)
                  ]),
                  subtitle: g(() => [...R[19] || (R[19] = [
                    t("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: g(() => [
                    _(_t, {
                      label: "Used by:",
                      value: oe(ce)
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    _(Ce, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Ve) => pe(ce)
                    }, {
                      default: g(() => [...R[20] || (R[20] = [
                        $(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    _(Ce, {
                      variant: "primary",
                      size: "sm",
                      onClick: (Ve) => Ue(ce.name)
                    }, {
                      default: g(() => [...R[21] || (R[21] = [
                        $(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    _(Ce, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (Ve) => se(ce.name)
                    }, {
                      default: g(() => [...R[22] || (R[22] = [
                        $(" Remove ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : h("", !0),
            U.value.length ? (n(), L(bt, {
              key: 5,
              title: "INSTALLED",
              count: U.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                (n(!0), i(H, null, _e(U.value, (ce) => (n(), L(At, {
                  key: ce.name,
                  status: "synced"
                }, {
                  icon: g(() => [
                    $(m(ce.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: g(() => [
                    $(m(ce.name), 1)
                  ]),
                  subtitle: g(() => [
                    ce.version ? (n(), i("span", S2, m(ce.source === "development" ? "" : "v") + m(ce.version), 1)) : (n(), i("span", I2, "version unknown")),
                    t("span", E2, " • " + m(ie(ce.source)), 1)
                  ]),
                  details: g(() => [
                    _(_t, {
                      label: "Used by:",
                      value: oe(ce)
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    _(Ce, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Ve) => pe(ce)
                    }, {
                      default: g(() => [...R[23] || (R[23] = [
                        $(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    _(Ce, {
                      variant: "secondary",
                      size: "xs",
                      onClick: me
                    }, {
                      default: g(() => [...R[24] || (R[24] = [
                        $(" Manage ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : h("", !0),
            I.value.length ? (n(), L(bt, {
              key: 6,
              title: "MISSING",
              count: I.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                (n(!0), i(H, null, _e(I.value, (ce) => (n(), L(At, {
                  key: ce.name,
                  status: "missing"
                }, {
                  icon: g(() => [...R[25] || (R[25] = [
                    $("!", -1)
                  ])]),
                  title: g(() => [
                    $(m(ce.name), 1)
                  ]),
                  subtitle: g(() => [...R[26] || (R[26] = [
                    t("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: g(() => [
                    _(_t, {
                      label: "Required by:",
                      value: oe(ce)
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    _(Ce, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Ve) => pe(ce)
                    }, {
                      default: g(() => [...R[27] || (R[27] = [
                        $(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    _(Ce, {
                      variant: "primary",
                      size: "sm",
                      onClick: (Ve) => ne(ce.name)
                    }, {
                      default: g(() => [...R[28] || (R[28] = [
                        $(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : h("", !0),
            !U.value.length && !I.value.length && !N.value.length && !z.value.length && !E.value.length ? (n(), L(is, {
              key: 7,
              icon: "📭",
              message: w.value ? `No nodes match '${w.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : h("", !0)
          ], 64))
        ]),
        _: 1
      }),
      _(Yt, {
        show: y.value,
        title: "About Custom Nodes",
        onClose: R[4] || (R[4] = (ce) => y.value = !1)
      }, {
        content: g(() => [...R[29] || (R[29] = [
          t("p", null, " Custom nodes extend ComfyUI's capabilities. ComfyGit tracks nodes in your environment manifest for reproducibility. ", -1),
          t("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            t("strong", null, "Installed:"),
            $(" Tracked nodes available in this environment"),
            t("br"),
            t("strong", null, "Missing:"),
            $(" Tracked nodes that need to be installed"),
            t("br"),
            t("strong", null, "Blocked:"),
            $(" Node types that require newer ComfyUI"),
            t("br"),
            t("strong", null, "Community-Mapped:"),
            $(" Actionable package mappings from community metadata"),
            t("br"),
            t("strong", null, "Untracked:"),
            $(" Nodes on filesystem but not in manifest ")
          ], -1),
          t("p", { style: { "margin-top": "var(--cg-space-2)", color: "var(--cg-color-text-muted)" } }, ` Use "Track as Dev" for local development nodes you don't want to version. `, -1)
        ])]),
        actions: g(() => [
          _(Ce, {
            variant: "primary",
            onClick: R[3] || (R[3] = (ce) => y.value = !1)
          }, {
            default: g(() => [...R[30] || (R[30] = [
              $(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      k.value ? (n(), L(v2, {
        key: 0,
        node: k.value,
        onClose: R[5] || (R[5] = (ce) => k.value = null)
      }, null, 8, ["node"])) : h("", !0),
      C.value ? (n(), L(tu, {
        key: 1,
        title: C.value.title,
        message: C.value.message,
        warning: C.value.warning,
        "confirm-label": C.value.confirmLabel,
        destructive: C.value.destructive,
        onConfirm: C.value.onConfirm,
        onCancel: R[6] || (R[6] = (ce) => C.value = null)
      }, null, 8, ["title", "message", "warning", "confirm-label", "destructive", "onConfirm"])) : h("", !0)
    ], 64));
  }
}), M2 = /* @__PURE__ */ Se(T2, [["__scopeId", "data-v-3ef68ac4"]]), P2 = { class: "setting-info" }, R2 = { class: "setting-label" }, N2 = {
  key: 0,
  class: "required-marker"
}, L2 = {
  key: 0,
  class: "setting-description"
}, D2 = { class: "setting-control" }, O2 = /* @__PURE__ */ xe({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (s, o) => (n(), i("div", {
      class: De(["setting-row", { disabled: e.disabled, stacked: e.stacked }])
    }, [
      t("div", P2, [
        t("div", R2, [
          $(m(e.label) + " ", 1),
          e.required ? (n(), i("span", N2, "*")) : h("", !0)
        ]),
        e.description ? (n(), i("div", L2, m(e.description), 1)) : h("", !0)
      ]),
      t("div", D2, [
        et(s.$slots, "default", {}, void 0)
      ])
    ], 2));
  }
}), Hs = /* @__PURE__ */ Se(O2, [["__scopeId", "data-v-3e106b1c"]]), U2 = ["type", "value", "placeholder", "disabled"], A2 = /* @__PURE__ */ xe({
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
    const a = e, l = o, r = b(null);
    function u(c) {
      const d = c.target.value;
      l("update:modelValue", d);
    }
    return ot(() => {
      a.autoFocus && r.value && r.value.focus();
    }), s({
      focus: () => {
        var c;
        return (c = r.value) == null ? void 0 : c.focus();
      },
      blur: () => {
        var c;
        return (c = r.value) == null ? void 0 : c.blur();
      }
    }), (c, d) => (n(), i("input", {
      ref_key: "inputRef",
      ref: r,
      type: e.type,
      value: e.modelValue,
      placeholder: e.placeholder,
      disabled: e.disabled,
      class: De(["text-input", { error: e.hasError, monospace: e.monospace }]),
      onInput: u,
      onKeyup: [
        d[0] || (d[0] = es((v) => c.$emit("enter"), ["enter"])),
        d[1] || (d[1] = es((v) => c.$emit("escape"), ["escape"]))
      ],
      onFocus: d[2] || (d[2] = (v) => c.$emit("focus")),
      onBlur: d[3] || (d[3] = (v) => c.$emit("blur"))
    }, null, 42, U2));
  }
}), ks = /* @__PURE__ */ Se(A2, [["__scopeId", "data-v-0380d08f"]]), z2 = { class: "toggle" }, V2 = ["checked", "disabled"], F2 = /* @__PURE__ */ xe({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (n(), i("label", z2, [
      t("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        onChange: o[0] || (o[0] = (a) => s.$emit("update:modelValue", a.target.checked)),
        class: "toggle-input"
      }, null, 40, V2),
      o[1] || (o[1] = t("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), Ci = /* @__PURE__ */ Se(F2, [["__scopeId", "data-v-71c0f550"]]), Ba = "ComfyGit.Deploy.GitHubPAT";
function su(e) {
  return e.startsWith("git@") || e.startsWith("ssh://");
}
function B2(e) {
  return e.startsWith("https://") || e.startsWith("http://");
}
function W2() {
  function e() {
    try {
      return localStorage.getItem(Ba);
    } catch {
      return null;
    }
  }
  function s(l) {
    try {
      localStorage.setItem(Ba, l);
    } catch (r) {
      console.error("[useGitAuth] Failed to save token:", r);
    }
  }
  function o() {
    try {
      localStorage.removeItem(Ba);
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
    isRemoteSsh: su,
    isRemoteHttps: B2
  };
}
const G2 = { class: "workspace-settings-content" }, j2 = { class: "settings-section" }, H2 = { class: "path-setting" }, q2 = { class: "path-value" }, K2 = { class: "path-setting" }, J2 = { class: "path-value" }, Y2 = { class: "settings-section" }, Q2 = { class: "token-setting" }, X2 = {
  key: 0,
  class: "token-warning"
}, Z2 = { class: "token-actions" }, e$ = { class: "settings-section" }, t$ = { class: "settings-section" }, s$ = /* @__PURE__ */ xe({
  __name: "WorkspaceSettingsContent",
  props: {
    workspacePath: {}
  },
  emits: ["saved", "error"],
  setup(e, { expose: s, emit: o }) {
    const a = e, l = o, { getConfig: r, updateConfig: u, getRemotes: c, testGitAuth: d } = ct(), { getToken: v, setToken: f, clearToken: p, hasToken: w } = W2(), y = b(!1), k = b(null), x = b(null), C = b(null), S = b(null), U = b(""), I = b(""), E = b(""), N = b(""), z = b(!1), q = b(!1), D = b(!1), G = b(""), Z = b(!1), te = b(!1), ie = b(null), ge = b(!1), oe = b(!0);
    function X(Q) {
      return Q.join(" ");
    }
    function de(Q) {
      return Q.trim() ? Q.trim().split(/\s+/) : [];
    }
    const Ne = O(() => {
      if (!S.value) return !1;
      const Q = z.value, P = q.value, R = D.value, ce = N.value !== X(S.value.comfyui_extra_args || []);
      return Q || P || R || ce;
    }), le = O(() => w());
    async function pe() {
      var Q;
      y.value = !0, k.value = null;
      try {
        C.value = await r(a.workspacePath || void 0), S.value = { ...C.value }, U.value = C.value.civitai_api_key || "", I.value = C.value.huggingface_token || "", N.value = X(C.value.comfyui_extra_args || []), E.value = v() || "", G.value = E.value, z.value = !1, q.value = !1, D.value = !1, ie.value = null;
        const P = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        ge.value = P !== "false", oe.value = localStorage.getItem("comfygit:popup-disabled") !== "true";
        try {
          const ce = (Q = (await c()).remotes) == null ? void 0 : Q.find((Ve) => Ve.name === "origin");
          Z.value = !!(ce && su(ce.url));
        } catch {
          Z.value = !1;
        }
      } catch (P) {
        k.value = P instanceof Error ? P.message : "Failed to load settings";
      } finally {
        y.value = !1;
      }
    }
    async function me() {
      var Q;
      x.value = null;
      try {
        const P = {};
        z.value && (P.civitai_api_key = U.value || null), q.value && (P.huggingface_token = I.value || null), N.value !== X(((Q = S.value) == null ? void 0 : Q.comfyui_extra_args) || []) && (P.comfyui_extra_args = de(N.value)), await u(P, a.workspacePath || void 0), D.value && (E.value ? f(E.value) : p()), await pe(), x.value = { type: "success", message: "Settings saved successfully" }, l("saved"), setTimeout(() => {
          x.value = null;
        }, 3e3);
      } catch (P) {
        const R = P instanceof Error ? P.message : "Failed to save settings";
        x.value = { type: "error", message: R }, l("error", R);
      }
    }
    function Ue() {
      S.value && (U.value = S.value.civitai_api_key || "", I.value = S.value.huggingface_token || "", N.value = X(S.value.comfyui_extra_args || []), E.value = G.value, z.value = !1, q.value = !1, D.value = !1, ie.value = null, x.value = null);
    }
    async function se() {
      if (E.value) {
        te.value = !0, ie.value = null;
        try {
          const Q = await d(E.value);
          ie.value = {
            type: Q.status === "success" ? "success" : "error",
            message: Q.message
          };
        } catch (Q) {
          ie.value = {
            type: "error",
            message: Q instanceof Error ? Q.message : "Connection test failed"
          };
        } finally {
          te.value = !1;
        }
      }
    }
    function ne() {
      E.value = "", D.value = !0, ie.value = null;
    }
    function M(Q) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(Q)), console.log("[ComfyGit] Auto-refresh setting saved:", Q);
    }
    function A(Q) {
      Q ? localStorage.removeItem("comfygit:popup-disabled") : localStorage.setItem("comfygit:popup-disabled", "true"), console.log("[ComfyGit] Popup setting changed:", Q ? "enabled" : "disabled");
    }
    return s({
      saveSettings: me,
      resetSettings: Ue,
      hasChanges: Ne,
      loadSettings: pe
    }), ot(pe), (Q, P) => (n(), i("div", G2, [
      y.value ? (n(), L($s, {
        key: 0,
        message: "Loading workspace settings..."
      })) : k.value ? (n(), L(Cs, {
        key: 1,
        message: k.value,
        retry: !0,
        onRetry: pe
      }, null, 8, ["message"])) : (n(), i(H, { key: 2 }, [
        _(bt, { title: "WORKSPACE PATHS" }, {
          default: g(() => {
            var R, ce;
            return [
              t("div", j2, [
                t("div", H2, [
                  P[9] || (P[9] = t("div", { class: "path-label" }, "Workspace Root", -1)),
                  P[10] || (P[10] = t("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                  t("div", q2, m(((R = C.value) == null ? void 0 : R.workspace_path) || "Loading..."), 1)
                ]),
                t("div", K2, [
                  P[11] || (P[11] = t("div", { class: "path-label" }, "Models Directory", -1)),
                  P[12] || (P[12] = t("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                  t("div", J2, m(((ce = C.value) == null ? void 0 : ce.models_path) || "Not configured"), 1)
                ])
              ])
            ];
          }),
          _: 1
        }),
        _(bt, { title: "API CREDENTIALS" }, {
          default: g(() => [
            t("div", Y2, [
              _(Hs, {
                label: "CivitAI API Key",
                description: "API key for downloading models from CivitAI"
              }, {
                default: g(() => [
                  _(ks, {
                    modelValue: U.value,
                    "onUpdate:modelValue": P[0] || (P[0] = (R) => U.value = R),
                    type: "password",
                    placeholder: "Enter CivitAI API key...",
                    style: { minWidth: "300px" },
                    onInput: P[1] || (P[1] = (R) => z.value = !0)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              _(Hs, {
                label: "HuggingFace Token",
                description: "Access token for downloading gated/private models from HuggingFace"
              }, {
                default: g(() => [
                  _(ks, {
                    modelValue: I.value,
                    "onUpdate:modelValue": P[2] || (P[2] = (R) => I.value = R),
                    type: "password",
                    placeholder: "Enter HuggingFace token...",
                    style: { minWidth: "300px" },
                    onInput: P[3] || (P[3] = (R) => q.value = !0)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              _(Hs, {
                label: "GitHub Personal Access Token",
                description: "Client-side token used for private Git remote access during deploy and remote operations",
                stacked: ""
              }, {
                default: g(() => [
                  t("div", Q2, [
                    _(ks, {
                      modelValue: E.value,
                      "onUpdate:modelValue": P[4] || (P[4] = (R) => E.value = R),
                      type: "password",
                      placeholder: "ghp_xxxxxxxxxxxxxxxxxxxx",
                      onInput: P[5] || (P[5] = (R) => D.value = !0)
                    }, null, 8, ["modelValue"]),
                    Z.value ? (n(), i("div", X2, " SSH origin remote detected. PAT authentication only works with HTTPS remotes. ")) : h("", !0),
                    P[15] || (P[15] = t("div", { class: "token-help" }, " Stored in your browser only. Never sent to the server except when you explicitly test or use authenticated remote operations. ", -1)),
                    t("div", Z2, [
                      _(Ce, {
                        variant: "ghost",
                        size: "xs",
                        loading: te.value,
                        disabled: !E.value || te.value,
                        onClick: se
                      }, {
                        default: g(() => [...P[13] || (P[13] = [
                          $(" Test Connection ", -1)
                        ])]),
                        _: 1
                      }, 8, ["loading", "disabled"]),
                      le.value ? (n(), L(Ce, {
                        key: 0,
                        variant: "ghost",
                        size: "xs",
                        onClick: ne
                      }, {
                        default: g(() => [...P[14] || (P[14] = [
                          $(" Clear ", -1)
                        ])]),
                        _: 1
                      })) : h("", !0)
                    ]),
                    ie.value ? (n(), i("div", {
                      key: 1,
                      class: De(["token-test-result", ie.value.type])
                    }, m(ie.value.message), 3)) : h("", !0)
                  ])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        _(bt, { title: "COMFYUI SETTINGS" }, {
          default: g(() => [
            t("div", e$, [
              _(Hs, {
                label: "Extra Startup Arguments",
                description: "Additional command-line arguments passed to ComfyUI on startup (e.g., --lowvram, --listen 0.0.0.0). Takes effect on next restart."
              }, {
                default: g(() => [
                  _(ks, {
                    modelValue: N.value,
                    "onUpdate:modelValue": P[6] || (P[6] = (R) => N.value = R),
                    placeholder: "--lowvram --listen 0.0.0.0",
                    style: { minWidth: "300px" }
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              P[16] || (P[16] = t("div", { class: "setting-hint" }, [
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
        _(bt, { title: "UI SETTINGS" }, {
          default: g(() => [
            t("div", t$, [
              _(Hs, {
                label: "Auto-Refresh After Git Operations",
                description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
              }, {
                default: g(() => [
                  _(Ci, {
                    modelValue: ge.value,
                    "onUpdate:modelValue": [
                      P[7] || (P[7] = (R) => ge.value = R),
                      M
                    ]
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              _(Hs, {
                label: "Show Missing Dependencies Popup",
                description: "Show popup when loading unsaved workflows with missing nodes or models. Saved workflows are tracked in the ComfyGit panel."
              }, {
                default: g(() => [
                  _(Ci, {
                    modelValue: oe.value,
                    "onUpdate:modelValue": [
                      P[8] || (P[8] = (R) => oe.value = R),
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
        x.value ? (n(), L(gn, {
          key: 0,
          variant: (x.value.type === "success", "compact")
        }, {
          default: g(() => [
            t("span", {
              style: Ft({ color: x.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
            }, m(x.value.message), 5)
          ]),
          _: 1
        }, 8, ["variant"])) : h("", !0)
      ], 64))
    ]));
  }
}), ou = /* @__PURE__ */ Se(s$, [["__scopeId", "data-v-f1bdc574"]]), o$ = /* @__PURE__ */ xe({
  __name: "WorkspaceSettingsSection",
  setup(e) {
    const s = b(null);
    function o() {
      console.log("[ComfyGit] Settings saved");
    }
    return (a, l) => (n(), L(Tt, null, {
      header: g(() => [
        _(Mt, { title: "WORKSPACE SETTINGS" }, {
          actions: g(() => {
            var r, u;
            return [
              _(Ce, {
                variant: "primary",
                size: "sm",
                disabled: !((r = s.value) != null && r.hasChanges),
                onClick: l[0] || (l[0] = (c) => {
                  var d;
                  return (d = s.value) == null ? void 0 : d.saveSettings();
                })
              }, {
                default: g(() => [...l[2] || (l[2] = [
                  $(" Save Changes ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"]),
              (u = s.value) != null && u.hasChanges ? (n(), L(Ce, {
                key: 0,
                variant: "ghost",
                size: "sm",
                onClick: l[1] || (l[1] = (c) => {
                  var d;
                  return (d = s.value) == null ? void 0 : d.resetSettings();
                })
              }, {
                default: g(() => [...l[3] || (l[3] = [
                  $(" Reset ", -1)
                ])]),
                _: 1
              })) : h("", !0)
            ];
          }),
          _: 1
        })
      ]),
      content: g(() => [
        _(ou, {
          ref_key: "contentRef",
          ref: s,
          onSaved: o
        }, null, 512)
      ]),
      _: 1
    }));
  }
}), n$ = { class: "env-title" }, a$ = {
  key: 0,
  class: "current-badge"
}, l$ = {
  key: 0,
  class: "branch-info"
}, i$ = /* @__PURE__ */ xe({
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
    return (s, o) => (n(), L(At, {
      status: e.isCurrent ? "synced" : void 0
    }, ts({
      icon: g(() => [
        $(m(e.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: g(() => [
        t("div", n$, [
          t("span", null, m(e.environmentName), 1),
          e.isCurrent && e.showCurrentLabel ? (n(), i("span", a$, "CURRENT")) : h("", !0)
        ])
      ]),
      subtitle: g(() => [
        e.currentBranch ? (n(), i("span", l$, [
          o[0] || (o[0] = t("span", { class: "branch-icon" }, "⎇", -1)),
          $(" " + m(e.currentBranch), 1)
        ])) : h("", !0)
      ]),
      actions: g(() => [
        et(s.$slots, "actions", {}, void 0, !0)
      ]),
      _: 2
    }, [
      e.showDetails ? {
        name: "details",
        fn: g(() => [
          _(_t, {
            label: "Workflows:",
            value: String(e.workflowCount)
          }, null, 8, ["value"]),
          _(_t, {
            label: "Nodes:",
            value: String(e.nodeCount)
          }, null, 8, ["value"]),
          _(_t, {
            label: "Models:",
            value: String(e.modelCount)
          }, null, 8, ["value"]),
          e.lastUsed && e.showLastUsed ? (n(), L(_t, {
            key: 0,
            label: "Last used:",
            value: e.lastUsed
          }, null, 8, ["value"])) : h("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), r$ = /* @__PURE__ */ Se(i$, [["__scopeId", "data-v-9231917a"]]), u$ = { class: "env-details" }, c$ = { class: "status-row" }, d$ = {
  key: 0,
  class: "detail-row"
}, m$ = { class: "value mono" }, f$ = {
  key: 1,
  class: "detail-row"
}, v$ = { class: "value mono small" }, p$ = { class: "collapsible-section" }, g$ = { class: "value" }, h$ = {
  key: 0,
  class: "collapsible-body"
}, y$ = { class: "item-list" }, w$ = { class: "item-name" }, _$ = { class: "item-name" }, k$ = { class: "item-name" }, b$ = { class: "item-name" }, $$ = {
  key: 0,
  class: "empty-list"
}, C$ = { class: "collapsible-section" }, x$ = { class: "value" }, S$ = {
  key: 0,
  class: "collapsible-body"
}, I$ = { class: "item-list" }, E$ = { class: "item-name" }, T$ = {
  key: 0,
  class: "item-meta"
}, M$ = {
  key: 0,
  class: "empty-list"
}, P$ = { class: "collapsible-section" }, R$ = { class: "value" }, N$ = {
  key: 0,
  class: "missing-count"
}, L$ = {
  key: 0,
  class: "collapsible-body"
}, D$ = { class: "item-list" }, O$ = { class: "model-row" }, U$ = { class: "item-name" }, A$ = { class: "model-meta" }, z$ = { class: "item-meta" }, V$ = {
  key: 0,
  class: "item-meta"
}, F$ = {
  key: 0,
  class: "empty-list"
}, B$ = {
  key: 2,
  class: "section-divider"
}, W$ = {
  key: 3,
  class: "detail-row"
}, G$ = { class: "value" }, j$ = { class: "footer-actions" }, H$ = /* @__PURE__ */ xe({
  __name: "EnvironmentDetailsModal",
  props: {
    environment: {},
    detail: {},
    canDelete: { type: Boolean }
  },
  emits: ["close", "delete", "export"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = b(/* @__PURE__ */ new Set());
    function r(d) {
      l.value.has(d) ? l.value.delete(d) : l.value.add(d), l.value = new Set(l.value);
    }
    const u = O(() => {
      var v;
      if (!((v = o.detail) != null && v.workflows)) return !0;
      const d = o.detail.workflows;
      return !d.synced.length && !d.new.length && !d.modified.length && !d.deleted.length;
    });
    function c(d) {
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
    return (d, v) => (n(), L(Ct, {
      title: `ENVIRONMENT DETAILS: ${e.environment.name.toUpperCase()}`,
      size: "md",
      onClose: v[6] || (v[6] = (f) => a("close"))
    }, {
      body: g(() => {
        var f, p, w, y, k, x, C, S, U, I, E, N, z, q;
        return [
          t("div", u$, [
            t("div", c$, [
              v[7] || (v[7] = t("span", { class: "label" }, "Status:", -1)),
              t("span", {
                class: De(["status-badge", e.environment.is_current ? "current" : "inactive"])
              }, m(e.environment.is_current ? "Current" : "Inactive"), 3)
            ]),
            e.environment.current_branch ? (n(), i("div", d$, [
              v[8] || (v[8] = t("span", { class: "label" }, "Branch:", -1)),
              t("span", m$, m(e.environment.current_branch), 1)
            ])) : h("", !0),
            e.environment.path ? (n(), i("div", f$, [
              v[9] || (v[9] = t("span", { class: "label" }, "Path:", -1)),
              t("span", v$, m(e.environment.path), 1)
            ])) : h("", !0),
            v[18] || (v[18] = t("div", { class: "section-divider" }, null, -1)),
            t("div", p$, [
              t("div", {
                class: "collapsible-header",
                onClick: v[0] || (v[0] = (D) => r("workflows"))
              }, [
                v[10] || (v[10] = t("span", { class: "label" }, "Workflows:", -1)),
                t("span", g$, m(((f = e.detail) == null ? void 0 : f.workflow_count) ?? e.environment.workflow_count), 1),
                (p = e.detail) != null && p.workflows ? (n(), i("span", {
                  key: 0,
                  class: De(["chevron", { expanded: l.value.has("workflows") }])
                }, "▶", 2)) : h("", !0)
              ]),
              (w = e.detail) != null && w.workflows && l.value.has("workflows") ? (n(), i("div", h$, [
                t("div", y$, [
                  (n(!0), i(H, null, _e(e.detail.workflows.synced, (D) => (n(), i("div", {
                    key: "synced-" + D,
                    class: "list-item"
                  }, [
                    t("span", w$, m(D), 1),
                    v[11] || (v[11] = t("span", { class: "sync-badge synced" }, "synced", -1))
                  ]))), 128)),
                  (n(!0), i(H, null, _e(e.detail.workflows.new, (D) => (n(), i("div", {
                    key: "new-" + D,
                    class: "list-item"
                  }, [
                    t("span", _$, m(D), 1),
                    v[12] || (v[12] = t("span", { class: "sync-badge new" }, "new", -1))
                  ]))), 128)),
                  (n(!0), i(H, null, _e(e.detail.workflows.modified, (D) => (n(), i("div", {
                    key: "mod-" + D,
                    class: "list-item"
                  }, [
                    t("span", k$, m(D), 1),
                    v[13] || (v[13] = t("span", { class: "sync-badge modified" }, "modified", -1))
                  ]))), 128)),
                  (n(!0), i(H, null, _e(e.detail.workflows.deleted, (D) => (n(), i("div", {
                    key: "del-" + D,
                    class: "list-item"
                  }, [
                    t("span", b$, m(D), 1),
                    v[14] || (v[14] = t("span", { class: "sync-badge deleted" }, "deleted", -1))
                  ]))), 128)),
                  u.value ? (n(), i("div", $$, "No workflows")) : h("", !0)
                ])
              ])) : h("", !0)
            ]),
            t("div", C$, [
              t("div", {
                class: "collapsible-header",
                onClick: v[1] || (v[1] = (D) => r("nodes"))
              }, [
                v[15] || (v[15] = t("span", { class: "label" }, "Nodes:", -1)),
                t("span", x$, m(((y = e.detail) == null ? void 0 : y.node_count) ?? e.environment.node_count), 1),
                (k = e.detail) != null && k.nodes ? (n(), i("span", {
                  key: 0,
                  class: De(["chevron", { expanded: l.value.has("nodes") }])
                }, "▶", 2)) : h("", !0)
              ]),
              (x = e.detail) != null && x.nodes && l.value.has("nodes") ? (n(), i("div", S$, [
                t("div", I$, [
                  (n(!0), i(H, null, _e(e.detail.nodes, (D) => (n(), i("div", {
                    key: D.name,
                    class: "list-item"
                  }, [
                    t("span", E$, m(D.name), 1),
                    D.version ? (n(), i("span", T$, m(D.version), 1)) : h("", !0)
                  ]))), 128)),
                  e.detail.nodes.length ? h("", !0) : (n(), i("div", M$, "No nodes"))
                ])
              ])) : h("", !0)
            ]),
            t("div", P$, [
              t("div", {
                class: "collapsible-header",
                onClick: v[2] || (v[2] = (D) => r("models"))
              }, [
                v[16] || (v[16] = t("span", { class: "label" }, "Models:", -1)),
                t("span", R$, [
                  $(m(((C = e.detail) == null ? void 0 : C.model_count) ?? e.environment.model_count) + " ", 1),
                  (U = (S = e.detail) == null ? void 0 : S.models) != null && U.missing.length ? (n(), i("span", N$, "(" + m(e.detail.models.missing.length) + " missing)", 1)) : h("", !0)
                ]),
                (I = e.detail) != null && I.models ? (n(), i("span", {
                  key: 0,
                  class: De(["chevron", { expanded: l.value.has("models") }])
                }, "▶", 2)) : h("", !0)
              ]),
              (E = e.detail) != null && E.models && l.value.has("models") ? (n(), i("div", L$, [
                t("div", D$, [
                  (n(!0), i(H, null, _e(e.detail.models.missing, (D) => (n(), i("div", {
                    key: D.filename,
                    class: "list-item model-item"
                  }, [
                    t("div", O$, [
                      t("span", U$, m(D.filename), 1),
                      t("span", {
                        class: De(["criticality-badge", D.criticality])
                      }, m(D.criticality), 3)
                    ]),
                    t("div", A$, [
                      t("span", z$, m(D.category), 1),
                      D.workflow_names.length ? (n(), i("span", V$, " used by: " + m(D.workflow_names.join(", ")), 1)) : h("", !0)
                    ])
                  ]))), 128)),
                  e.detail.models.missing.length ? h("", !0) : (n(), i("div", F$, "No missing models"))
                ])
              ])) : h("", !0)
            ]),
            (N = e.detail) != null && N.created_at || e.environment.created_at ? (n(), i("div", B$)) : h("", !0),
            (z = e.detail) != null && z.created_at || e.environment.created_at ? (n(), i("div", W$, [
              v[17] || (v[17] = t("span", { class: "label" }, "Created:", -1)),
              t("span", G$, m(c(((q = e.detail) == null ? void 0 : q.created_at) ?? e.environment.created_at)), 1)
            ])) : h("", !0)
          ])
        ];
      }),
      footer: g(() => [
        t("div", j$, [
          _(Re, {
            variant: "secondary",
            size: "sm",
            onClick: v[3] || (v[3] = (f) => a("export", e.environment.name))
          }, {
            default: g(() => [...v[19] || (v[19] = [
              $(" Export ", -1)
            ])]),
            _: 1
          }),
          e.canDelete ? (n(), L(Re, {
            key: 0,
            variant: "danger",
            size: "sm",
            onClick: v[4] || (v[4] = (f) => a("delete", e.environment.name))
          }, {
            default: g(() => [...v[20] || (v[20] = [
              $(" Delete ", -1)
            ])]),
            _: 1
          })) : h("", !0),
          v[22] || (v[22] = t("div", { class: "footer-spacer" }, null, -1)),
          _(Re, {
            variant: "secondary",
            size: "sm",
            onClick: v[5] || (v[5] = (f) => a("close"))
          }, {
            default: g(() => [...v[21] || (v[21] = [
              $(" Close ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), q$ = /* @__PURE__ */ Se(H$, [["__scopeId", "data-v-750671f5"]]), nu = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], au = "3.12", Ml = [
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
], lu = "auto", K$ = { class: "progress-bar" }, J$ = /* @__PURE__ */ xe({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(e) {
    const s = e, o = O(() => `${Math.max(0, Math.min(100, s.progress))}%`);
    return (a, l) => (n(), i("div", K$, [
      t("div", {
        class: De(["progress-fill", e.variant]),
        style: Ft({ width: o.value })
      }, null, 6)
    ]));
  }
}), iu = /* @__PURE__ */ Se(J$, [["__scopeId", "data-v-1beb0512"]]), Y$ = { class: "task-progress" }, Q$ = { class: "progress-info" }, X$ = { class: "progress-percentage" }, Z$ = { class: "progress-message" }, eC = {
  key: 0,
  class: "progress-steps"
}, tC = { class: "step-icon" }, sC = { class: "step-label" }, oC = /* @__PURE__ */ xe({
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
      const r = s.steps.find((u) => u.id === l);
      return r ? s.progress >= r.progressThreshold ? "completed" : s.currentPhase === l ? "active" : "pending" : "pending";
    }
    function a(l) {
      const r = o(l);
      return r === "completed" ? "✓" : r === "active" ? "⟳" : "○";
    }
    return (l, r) => (n(), i("div", Y$, [
      _(iu, {
        progress: e.progress,
        variant: e.variant
      }, null, 8, ["progress", "variant"]),
      t("div", Q$, [
        t("span", X$, m(e.progress) + "%", 1),
        t("span", Z$, m(e.message), 1)
      ]),
      e.showSteps && e.steps.length > 0 ? (n(), i("div", eC, [
        (n(!0), i(H, null, _e(e.steps, (u) => (n(), i("div", {
          key: u.id,
          class: De(["step", o(u.id)])
        }, [
          t("span", tC, m(a(u.id)), 1),
          t("span", sC, m(u.label), 1)
        ], 2))), 128))
      ])) : h("", !0)
    ]));
  }
}), Jn = /* @__PURE__ */ Se(oC, [["__scopeId", "data-v-9d1de66c"]]), nC = {
  key: 0,
  class: "create-env-form"
}, aC = { class: "form-field" }, lC = { class: "input-wrapper" }, iC = {
  key: 0,
  class: "validating-indicator"
}, rC = {
  key: 1,
  class: "valid-indicator"
}, uC = {
  key: 0,
  class: "field-error"
}, cC = { class: "form-field" }, dC = ["value"], mC = { class: "form-field" }, fC = ["disabled"], vC = ["value"], pC = { class: "form-field" }, gC = ["value"], hC = { class: "form-field form-field--checkbox" }, yC = { class: "form-checkbox" }, wC = {
  key: 1,
  class: "create-env-progress"
}, _C = { class: "creating-intro" }, kC = {
  key: 0,
  class: "progress-warning"
}, bC = {
  key: 1,
  class: "create-error"
}, $C = { class: "error-message" }, CC = {
  key: 1,
  class: "footer-status"
}, xC = 10, SC = /* @__PURE__ */ xe({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(e, { emit: s }) {
    const o = s, { getComfyUIReleases: a, createEnvironment: l, getCreateProgress: r, validateEnvironmentName: u } = ct(), c = b(""), d = b(au), v = b("latest"), f = b(lu), p = b(!1), w = b(null), y = b(!1), k = b(!1);
    let x = null, C = 0;
    const S = O(() => !!c.value.trim() && k.value && !w.value && !y.value && !E.value), U = b([{ tag_name: "latest", name: "Latest", published_at: "" }]), I = b(!1), E = b(!1), N = b({
      progress: 0,
      message: ""
    });
    let z = null, q = 0;
    const D = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], G = b(null);
    kt(c, (le) => {
      k.value = !1, x && (clearTimeout(x), x = null);
      const pe = le.trim();
      if (!pe) {
        w.value = null, y.value = !1;
        return;
      }
      y.value = !0, x = setTimeout(() => {
        Z(pe);
      }, 400);
    });
    async function Z(le, pe = !1) {
      const me = le.trim();
      if (!me)
        return k.value = !1, y.value = !1, w.value = pe ? "Environment name is required" : null, !1;
      const Ue = ++C;
      y.value = !0;
      try {
        const se = await u(me);
        return Ue !== C ? !1 : (w.value = se.valid ? null : se.error || "Invalid name", k.value = !!se.valid, !!se.valid);
      } catch {
        return Ue !== C || (w.value = "Failed to validate name", k.value = !1), !1;
      } finally {
        Ue === C && (y.value = !1);
      }
    }
    async function te() {
      x && (clearTimeout(x), x = null), await Z(c.value, !0);
    }
    function ie() {
      E.value || o("close");
    }
    async function ge() {
      const le = c.value.trim();
      if (!le) {
        w.value = "Environment name is required";
        return;
      }
      if (x && (clearTimeout(x), x = null), !!await Z(le, !0)) {
        E.value = !0, N.value = { progress: 0, message: "Starting...", phase: "init" };
        try {
          const me = {
            name: le,
            python_version: d.value,
            comfyui_version: v.value,
            torch_backend: f.value,
            switch_after: !1
            // We'll handle switch in parent after modal closes
          }, Ue = await l(me);
          Ue.status === "started" ? oe() : Ue.status === "error" && (N.value = {
            progress: 0,
            message: Ue.message || "Failed to start creation",
            error: Ue.message
          });
        } catch (me) {
          N.value = {
            progress: 0,
            message: me instanceof Error ? me.message : "Unknown error",
            error: me instanceof Error ? me.message : "Unknown error"
          };
        }
      }
    }
    function oe() {
      z || (q = 0, z = window.setInterval(async () => {
        try {
          const le = await r();
          q = 0, N.value = {
            progress: le.progress ?? 0,
            message: le.message,
            phase: le.phase,
            error: le.error
          }, le.state === "complete" ? (X(), o("created", le.environment_name || c.value.trim(), p.value)) : le.state === "error" ? (X(), N.value.error = le.error || le.message) : le.state === "idle" && E.value && (X(), N.value.error = "Creation was interrupted. Please try again.");
        } catch {
          q++, q >= xC && (X(), N.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function X() {
      z && (clearInterval(z), z = null);
    }
    function de() {
      E.value = !1, N.value = { progress: 0, message: "" }, o("close");
    }
    async function Ne() {
      I.value = !0;
      try {
        U.value = await a();
      } catch (le) {
        console.error("Failed to load ComfyUI releases:", le);
      } finally {
        I.value = !1;
      }
    }
    return ot(async () => {
      var le;
      await Rt(), (le = G.value) == null || le.focus(), Ne();
    }), Ro(() => {
      X(), x && (clearTimeout(x), x = null);
    }), (le, pe) => (n(), L(Ct, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !E.value,
      onClose: ie
    }, {
      body: g(() => [
        E.value ? (n(), i("div", wC, [
          t("p", _C, [
            pe[12] || (pe[12] = $(" Creating environment ", -1)),
            t("strong", null, m(c.value), 1),
            pe[13] || (pe[13] = $("... ", -1))
          ]),
          _(Jn, {
            progress: N.value.progress,
            message: N.value.message,
            "current-phase": N.value.phase,
            variant: N.value.error ? "error" : "default",
            "show-steps": !0,
            steps: D
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          N.value.error ? h("", !0) : (n(), i("p", kC, " This may take several minutes. Please wait... ")),
          N.value.error ? (n(), i("div", bC, [
            t("p", $C, m(N.value.error), 1)
          ])) : h("", !0)
        ])) : (n(), i("div", nC, [
          t("div", aC, [
            pe[6] || (pe[6] = t("label", { class: "form-label" }, "Name", -1)),
            t("div", lC, [
              St(t("input", {
                ref_key: "nameInput",
                ref: G,
                "onUpdate:modelValue": pe[0] || (pe[0] = (me) => c.value = me),
                type: "text",
                class: De(["form-input", { error: !!w.value, valid: k.value }]),
                placeholder: "my-environment",
                onKeyup: es(ge, ["enter"]),
                onBlur: te
              }, null, 34), [
                [xo, c.value]
              ]),
              y.value ? (n(), i("span", iC, "...")) : k.value ? (n(), i("span", rC, "✓")) : h("", !0)
            ]),
            w.value ? (n(), i("div", uC, m(w.value), 1)) : h("", !0),
            pe[7] || (pe[7] = t("div", { class: "field-hint" }, "Use letters, numbers, dots, hyphens, and underscores.", -1))
          ]),
          t("div", cC, [
            pe[8] || (pe[8] = t("label", { class: "form-label" }, "Python Version", -1)),
            St(t("select", {
              "onUpdate:modelValue": pe[1] || (pe[1] = (me) => d.value = me),
              class: "form-select"
            }, [
              (n(!0), i(H, null, _e(Ye(nu), (me) => (n(), i("option", {
                key: me,
                value: me
              }, m(me), 9, dC))), 128))
            ], 512), [
              [So, d.value]
            ])
          ]),
          t("div", mC, [
            pe[9] || (pe[9] = t("label", { class: "form-label" }, "ComfyUI Version", -1)),
            St(t("select", {
              "onUpdate:modelValue": pe[2] || (pe[2] = (me) => v.value = me),
              class: "form-select",
              disabled: I.value
            }, [
              (n(!0), i(H, null, _e(U.value, (me) => (n(), i("option", {
                key: me.tag_name,
                value: me.tag_name
              }, m(me.name), 9, vC))), 128))
            ], 8, fC), [
              [So, v.value]
            ])
          ]),
          t("div", pC, [
            pe[10] || (pe[10] = t("label", { class: "form-label" }, "PyTorch Backend", -1)),
            St(t("select", {
              "onUpdate:modelValue": pe[3] || (pe[3] = (me) => f.value = me),
              class: "form-select"
            }, [
              (n(!0), i(H, null, _e(Ye(Ml), (me) => (n(), i("option", {
                key: me,
                value: me
              }, m(me) + m(me === "auto" ? " (detect GPU)" : ""), 9, gC))), 128))
            ], 512), [
              [So, f.value]
            ])
          ]),
          t("div", hC, [
            t("label", yC, [
              St(t("input", {
                type: "checkbox",
                "onUpdate:modelValue": pe[4] || (pe[4] = (me) => p.value = me)
              }, null, 512), [
                [qn, p.value]
              ]),
              pe[11] || (pe[11] = t("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ]))
      ]),
      footer: g(() => [
        E.value ? (n(), i(H, { key: 1 }, [
          N.value.error ? (n(), L(Re, {
            key: 0,
            variant: "secondary",
            onClick: de
          }, {
            default: g(() => [...pe[16] || (pe[16] = [
              $(" Close ", -1)
            ])]),
            _: 1
          })) : (n(), i("span", CC, " Creating environment... "))
        ], 64)) : (n(), i(H, { key: 0 }, [
          _(Re, {
            variant: "primary",
            disabled: !S.value,
            onClick: ge
          }, {
            default: g(() => [...pe[14] || (pe[14] = [
              $(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          _(Re, {
            variant: "secondary",
            onClick: pe[5] || (pe[5] = (me) => o("close"))
          }, {
            default: g(() => [...pe[15] || (pe[15] = [
              $(" Cancel ", -1)
            ])]),
            _: 1
          })
        ], 64))
      ]),
      _: 1
    }, 8, ["show-close-button"]));
  }
}), IC = /* @__PURE__ */ Se(SC, [["__scopeId", "data-v-3faa3d9b"]]), EC = /* @__PURE__ */ xe({
  __name: "EnvironmentsSection",
  emits: ["switch", "created", "delete", "import", "export"],
  setup(e, { expose: s, emit: o }) {
    const a = o, { getEnvironments: l, getEnvironmentDetails: r } = ct(), u = b([]), c = b(!1), d = b(null), v = b(""), f = b(!1), p = b(!1), w = b(null), y = b(null), k = O(() => {
      if (!v.value.trim()) return u.value;
      const N = v.value.toLowerCase();
      return u.value.filter(
        (z) => {
          var q;
          return z.name.toLowerCase().includes(N) || ((q = z.current_branch) == null ? void 0 : q.toLowerCase().includes(N));
        }
      );
    });
    function x(N, z) {
      p.value = !1, a("created", N, z);
    }
    function C() {
      p.value = !0;
    }
    async function S(N) {
      w.value = N, y.value = null;
      const z = await r(N.name);
      z && (y.value = z);
    }
    function U(N) {
      w.value = null, y.value = null, a("delete", N);
    }
    function I(N) {
      w.value = null, y.value = null, a("export", N);
    }
    async function E() {
      c.value = !0, d.value = null;
      try {
        u.value = await l();
      } catch (N) {
        d.value = N instanceof Error ? N.message : "Failed to load environments";
      } finally {
        c.value = !1;
      }
    }
    return ot(E), s({
      loadEnvironments: E,
      openCreateModal: C
    }), (N, z) => (n(), i(H, null, [
      _(Tt, null, {
        header: g(() => [
          _(Mt, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: z[1] || (z[1] = (q) => f.value = !0)
          }, {
            actions: g(() => [
              _(Ce, {
                variant: "primary",
                size: "sm",
                onClick: C
              }, {
                default: g(() => [...z[7] || (z[7] = [
                  $(" Create ", -1)
                ])]),
                _: 1
              }),
              _(Ce, {
                variant: "secondary",
                size: "sm",
                onClick: z[0] || (z[0] = (q) => N.$emit("import"))
              }, {
                default: g(() => [...z[8] || (z[8] = [
                  $(" Import ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: g(() => [
          _(mo, {
            modelValue: v.value,
            "onUpdate:modelValue": z[2] || (z[2] = (q) => v.value = q),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          c.value ? (n(), L($s, {
            key: 0,
            message: "Loading environments..."
          })) : d.value ? (n(), L(Cs, {
            key: 1,
            message: d.value,
            retry: !0,
            onRetry: E
          }, null, 8, ["message"])) : (n(), i(H, { key: 2 }, [
            k.value.length ? (n(), L(bt, {
              key: 0,
              title: "ENVIRONMENTS",
              count: k.value.length
            }, {
              default: g(() => [
                (n(!0), i(H, null, _e(k.value, (q) => (n(), L(r$, {
                  key: q.name,
                  "environment-name": q.name,
                  "is-current": q.is_current,
                  "current-branch": q.current_branch,
                  "show-last-used": !1
                }, {
                  actions: g(() => [
                    q.is_current ? h("", !0) : (n(), L(Ce, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (D) => N.$emit("switch", q.name)
                    }, {
                      default: g(() => [...z[9] || (z[9] = [
                        $(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    _(Ce, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (D) => S(q)
                    }, {
                      default: g(() => [...z[10] || (z[10] = [
                        $(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    _(Ce, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (D) => N.$emit("export", q.name)
                    }, {
                      default: g(() => [...z[11] || (z[11] = [
                        $(" Export ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["environment-name", "is-current", "current-branch"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : h("", !0),
            k.value.length ? h("", !0) : (n(), L(is, {
              key: 1,
              icon: "🌍",
              message: v.value ? `No environments match '${v.value}'` : "No environments found. Create one to get started!"
            }, ts({ _: 2 }, [
              v.value ? void 0 : {
                name: "actions",
                fn: g(() => [
                  _(Ce, {
                    variant: "primary",
                    onClick: C
                  }, {
                    default: g(() => [...z[12] || (z[12] = [
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
      _(Yt, {
        show: f.value,
        title: "About Environments",
        onClose: z[4] || (z[4] = (q) => f.value = !1)
      }, {
        content: g(() => [...z[13] || (z[13] = [
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
        actions: g(() => [
          _(Ce, {
            variant: "secondary",
            onClick: z[3] || (z[3] = (q) => f.value = !1)
          }, {
            default: g(() => [...z[14] || (z[14] = [
              $(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w.value ? (n(), L(q$, {
        key: 0,
        environment: w.value,
        detail: y.value,
        "can-delete": u.value.length > 1,
        onClose: z[5] || (z[5] = (q) => {
          w.value = null, y.value = null;
        }),
        onDelete: U,
        onExport: I
      }, null, 8, ["environment", "detail", "can-delete"])) : h("", !0),
      p.value ? (n(), L(IC, {
        key: 1,
        onClose: z[6] || (z[6] = (q) => p.value = !1),
        onCreated: x
      })) : h("", !0)
    ], 64));
  }
}), TC = /* @__PURE__ */ Se(EC, [["__scopeId", "data-v-92fdb370"]]), MC = { class: "file-path" }, PC = { class: "file-path-text" }, RC = ["title"], NC = /* @__PURE__ */ xe({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(e) {
    const s = e, o = b(!1);
    async function a() {
      try {
        await navigator.clipboard.writeText(s.path), o.value = !0, setTimeout(() => {
          o.value = !1;
        }, 2e3);
      } catch (l) {
        console.error("Failed to copy:", l);
      }
    }
    return (l, r) => (n(), i("div", MC, [
      r[0] || (r[0] = t("span", { class: "file-path-icon" }, "📄", -1)),
      t("code", PC, m(e.path), 1),
      e.copyable ? (n(), i("button", {
        key: 0,
        class: "copy-btn",
        title: o.value ? "Copied!" : "Copy path",
        onClick: a
      }, m(o.value ? "✓" : "📋"), 9, RC)) : h("", !0)
    ]));
  }
}), LC = /* @__PURE__ */ Se(NC, [["__scopeId", "data-v-f0982173"]]), DC = ["checked", "disabled"], OC = { class: "base-checkbox-box" }, UC = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, AC = {
  key: 0,
  class: "base-checkbox-label"
}, zC = /* @__PURE__ */ xe({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (n(), i("label", {
      class: De(["base-checkbox", { disabled: e.disabled }])
    }, [
      t("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        class: "base-checkbox-input",
        onChange: o[0] || (o[0] = (a) => s.$emit("update:modelValue", a.target.checked))
      }, null, 40, DC),
      t("span", OC, [
        e.modelValue ? (n(), i("svg", UC, [...o[1] || (o[1] = [
          t("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : h("", !0)
      ]),
      s.$slots.default ? (n(), i("span", AC, [
        et(s.$slots, "default", {}, void 0)
      ])) : h("", !0)
    ], 2));
  }
}), Yn = /* @__PURE__ */ Se(zC, [["__scopeId", "data-v-bf17c831"]]), VC = { class: "export-blocked" }, FC = { class: "error-header" }, BC = { class: "error-summary" }, WC = { class: "error-title" }, GC = { class: "error-description" }, jC = { class: "issues-list" }, HC = { class: "issue-message" }, qC = {
  key: 0,
  class: "issue-details"
}, KC = ["onClick"], JC = { class: "issue-fix" }, YC = {
  key: 0,
  class: "commit-section"
}, QC = {
  key: 0,
  class: "issues-warning"
}, XC = {
  key: 1,
  class: "commit-error"
}, ZC = /* @__PURE__ */ xe({
  __name: "ExportBlockedModal",
  props: {
    issues: {},
    mode: {}
  },
  emits: ["close", "committed"],
  setup(e, { emit: s }) {
    const o = e, a = s, { commit: l } = ct(), r = b(""), u = b(!1), c = b(!1), d = b(""), v = fo({}), f = O(() => o.mode === "publish" ? "Publish" : "Export"), p = O(
      () => o.issues.some((S) => S.type === "uncommitted_workflows" || S.type === "uncommitted_git_changes")
    ), w = O(
      () => o.issues.some((S) => S.type === "unresolved_issues")
    ), y = O(
      () => w.value && !c.value
    ), k = O(
      () => p.value && r.value.trim() !== "" && !u.value && !y.value
    );
    function x(S) {
      const U = o.issues[S];
      return v[S] || U.details.length <= 3 ? U.details : U.details.slice(0, 3);
    }
    async function C() {
      var S;
      if (k.value) {
        u.value = !0, d.value = "";
        try {
          const U = await l(r.value.trim(), c.value);
          if (U.status === "success")
            a("committed");
          else if (U.status === "blocked") {
            const I = ((S = U.issues) == null ? void 0 : S.map((E) => `${E.name}: ${E.issue}`).join("; ")) || "Unknown issues";
            d.value = `Commit blocked: ${I}`;
          } else
            d.value = U.message || "Commit failed";
        } catch (U) {
          d.value = U instanceof Error ? U.message : "Commit failed";
        } finally {
          u.value = !1;
        }
      }
    }
    return (S, U) => (n(), L(Ct, {
      title: p.value ? `Commit & ${f.value}` : `Cannot ${f.value}`,
      size: "md",
      onClose: U[4] || (U[4] = (I) => S.$emit("close"))
    }, {
      body: g(() => [
        t("div", VC, [
          t("div", FC, [
            U[5] || (U[5] = t("span", { class: "error-icon" }, [
              t("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                t("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ])
            ], -1)),
            t("div", BC, [
              t("h3", WC, m(f.value) + " blocked", 1),
              t("p", GC, m(p.value ? `Commit your changes to proceed with ${f.value.toLowerCase()}.` : `The following issues must be resolved before ${f.value.toLowerCase()}.`), 1)
            ])
          ]),
          t("div", jC, [
            (n(!0), i(H, null, _e(e.issues, (I, E) => (n(), i("div", {
              key: E,
              class: "issue-item"
            }, [
              t("div", HC, m(I.message), 1),
              I.details.length ? (n(), i("div", qC, [
                (n(!0), i(H, null, _e(x(E), (N, z) => (n(), i("div", {
                  key: z,
                  class: "issue-detail"
                }, m(N), 1))), 128)),
                I.details.length > 3 && !v[E] ? (n(), i("button", {
                  key: 0,
                  class: "show-more-inline",
                  onClick: (N) => v[E] = !0
                }, " +" + m(I.details.length - 3) + " more ", 9, KC)) : h("", !0)
              ])) : h("", !0),
              t("div", JC, [
                I.type === "uncommitted_workflows" ? (n(), i(H, { key: 0 }, [
                  $(" Commit your workflow changes before " + m(f.value.toLowerCase()) + "ing. ", 1)
                ], 64)) : I.type === "uncommitted_git_changes" ? (n(), i(H, { key: 1 }, [
                  $(" Commit your changes before " + m(f.value.toLowerCase()) + "ing. ", 1)
                ], 64)) : I.type === "unresolved_issues" ? (n(), i(H, { key: 2 }, [
                  $(" Resolve all workflow issues before " + m(f.value.toLowerCase()) + "ing. ", 1)
                ], 64)) : h("", !0)
              ])
            ]))), 128))
          ]),
          p.value ? (n(), i("div", YC, [
            w.value ? (n(), i("div", QC, [
              U[7] || (U[7] = t("div", { class: "warning-header" }, [
                t("span", { class: "warning-icon-badge" }, "!"),
                t("span", { class: "warning-label" }, "Some workflow issues cannot be fixed by committing")
              ], -1)),
              _(Yn, {
                modelValue: c.value,
                "onUpdate:modelValue": U[0] || (U[0] = (I) => c.value = I),
                class: "allow-issues-toggle"
              }, {
                default: g(() => [...U[6] || (U[6] = [
                  $(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : h("", !0),
            _(Js, {
              modelValue: r.value,
              "onUpdate:modelValue": U[1] || (U[1] = (I) => r.value = I),
              placeholder: "Describe your changes...",
              disabled: u.value || y.value,
              rows: 3,
              "submit-on-enter": !0,
              onSubmit: C,
              onCtrlEnter: C
            }, null, 8, ["modelValue", "disabled"]),
            d.value ? (n(), i("div", XC, m(d.value), 1)) : h("", !0)
          ])) : h("", !0)
        ])
      ]),
      footer: g(() => [
        p.value ? (n(), i(H, { key: 0 }, [
          _(Re, {
            variant: "secondary",
            onClick: U[2] || (U[2] = (I) => S.$emit("close"))
          }, {
            default: g(() => [...U[8] || (U[8] = [
              $(" Cancel ", -1)
            ])]),
            _: 1
          }),
          _(Re, {
            variant: c.value ? "danger" : "primary",
            disabled: !k.value,
            loading: u.value,
            onClick: C
          }, {
            default: g(() => [
              $(m(u.value ? "Committing..." : c.value ? `Force Commit & ${f.value}` : `Commit & ${f.value}`), 1)
            ]),
            _: 1
          }, 8, ["variant", "disabled", "loading"])
        ], 64)) : (n(), L(Re, {
          key: 1,
          variant: "primary",
          onClick: U[3] || (U[3] = (I) => S.$emit("close"))
        }, {
          default: g(() => [...U[9] || (U[9] = [
            $(" Understood ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), ru = /* @__PURE__ */ Se(ZC, [["__scopeId", "data-v-a8990107"]]), ex = { class: "export-warnings" }, tx = {
  key: 0,
  class: "success-header"
}, sx = { class: "success-summary" }, ox = { class: "success-description" }, nx = { class: "warning-header" }, ax = { class: "warning-summary" }, lx = { class: "warning-title" }, ix = { class: "warning-description" }, rx = { class: "models-section" }, ux = { class: "models-list" }, cx = { class: "model-info" }, dx = { class: "model-filename" }, mx = { class: "model-workflows" }, fx = ["onClick"], vx = /* @__PURE__ */ xe({
  __name: "ExportWarningsModal",
  props: {
    models: {},
    mode: {}
  },
  emits: ["confirm", "cancel", "revalidate"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = b(!1), r = b(null), u = O(() => o.mode || "export"), c = O(() => u.value === "publish" ? "Publish" : "Export"), d = O(() => l.value || o.models.length <= 3 ? o.models : o.models.slice(0, 3));
    function v() {
      r.value = null, a("revalidate");
    }
    return (f, p) => (n(), i(H, null, [
      _(Ct, {
        title: u.value === "publish" ? "Publish Warnings" : "Export Warnings",
        size: "md",
        onClose: p[3] || (p[3] = (w) => f.$emit("cancel"))
      }, {
        body: g(() => [
          t("div", ex, [
            e.models.length === 0 ? (n(), i("div", tx, [
              p[5] || (p[5] = t("span", { class: "success-icon" }, [
                t("svg", {
                  width: "14",
                  height: "14",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  t("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 1 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" })
                ])
              ], -1)),
              t("div", sx, [
                p[4] || (p[4] = t("h3", { class: "success-title" }, "All models have source URLs", -1)),
                t("p", ox, " Your environment is ready to " + m(u.value) + ". Recipients will be able to download all models automatically. ", 1)
              ])
            ])) : (n(), i(H, { key: 1 }, [
              t("div", nx, [
                p[6] || (p[6] = t("span", { class: "warning-icon" }, [
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
                t("div", ax, [
                  t("h3", lx, m(e.models.length) + " model" + m(e.models.length !== 1 ? "s" : "") + " missing source URLs ", 1),
                  t("p", ix, ` Recipients won't be able to download these models automatically. Click "Add Source" to fix, or ` + m(u.value) + " anyway. ", 1)
                ])
              ]),
              t("div", rx, [
                t("div", ux, [
                  (n(!0), i(H, null, _e(d.value, (w) => (n(), i("div", {
                    key: w.hash,
                    class: "model-item"
                  }, [
                    t("div", cx, [
                      t("div", dx, m(w.filename), 1),
                      t("div", mx, " Used by: " + m(w.workflows.join(", ")), 1)
                    ]),
                    t("button", {
                      class: "add-source-btn",
                      onClick: (y) => r.value = w.hash
                    }, " Add Source ", 8, fx)
                  ]))), 128))
                ]),
                e.models.length > 3 && !l.value ? (n(), i("button", {
                  key: 0,
                  class: "show-more-btn",
                  onClick: p[0] || (p[0] = (w) => l.value = !0)
                }, " Show " + m(e.models.length - 3) + " more model" + m(e.models.length - 3 !== 1 ? "s" : "") + "... ", 1)) : h("", !0)
              ])
            ], 64))
          ])
        ]),
        footer: g(() => [
          _(Re, {
            variant: "secondary",
            onClick: p[1] || (p[1] = (w) => f.$emit("cancel"))
          }, {
            default: g(() => [
              $(" Cancel " + m(u.value === "publish" ? "Publish" : "Export"), 1)
            ]),
            _: 1
          }),
          _(Re, {
            variant: "primary",
            onClick: p[2] || (p[2] = (w) => f.$emit("confirm"))
          }, {
            default: g(() => [
              $(m(e.models.length === 0 ? c.value : `${c.value} Anyway`), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["title"]),
      r.value ? (n(), L(Tl, {
        key: 0,
        identifier: r.value,
        onClose: v
      }, null, 8, ["identifier"])) : h("", !0)
    ], 64));
  }
}), uu = /* @__PURE__ */ Se(vx, [["__scopeId", "data-v-9b6d5fce"]]), px = { class: "export-card" }, gx = { class: "export-path-row" }, hx = { class: "export-actions" }, yx = {
  key: 1,
  class: "export-warning"
}, wx = /* @__PURE__ */ xe({
  __name: "ExportSection",
  props: {
    environmentName: {},
    embedded: { type: Boolean }
  },
  setup(e) {
    const s = e, { validateExport: o, exportEnvWithForce: a, validateEnvironmentExport: l, exportEnvironmentWithForce: r } = ct(), u = b(""), c = b(!1), d = b(!1), v = b(!1), f = b(null), p = b(!1), w = b(null), y = b(!1), k = b(!1), x = O(() => {
      var Z;
      return ((Z = s.environmentName) == null ? void 0 : Z.trim()) || null;
    }), C = O(() => x.value ? `EXPORT ENVIRONMENT: ${x.value.toUpperCase()}` : "EXPORT ENVIRONMENT"), S = O(() => x.value ? `Environment '${x.value}' has been exported` : "Your environment has been exported"), U = O(() => c.value ? "Validating..." : d.value ? "Exporting..." : "Export Environment");
    async function I() {
      c.value = !0, f.value = null;
      try {
        const Z = x.value ? await l(x.value) : await o();
        w.value = Z, Z.can_export ? Z.warnings.models_without_sources.length > 0 ? k.value = !0 : await q() : y.value = !0;
      } catch (Z) {
        f.value = {
          status: "error",
          message: Z instanceof Error ? Z.message : "Validation failed"
        };
      } finally {
        c.value = !1;
      }
    }
    async function E() {
      k.value = !1, await q();
    }
    async function N() {
      y.value = !1, c.value = !0;
      try {
        const Z = x.value ? await l(x.value) : await o();
        w.value = Z, Z.can_export ? Z.warnings.models_without_sources.length > 0 ? k.value = !0 : await q() : y.value = !0;
      } catch (Z) {
        f.value = {
          status: "error",
          message: Z instanceof Error ? Z.message : "Re-validation failed"
        };
      } finally {
        c.value = !1;
      }
    }
    async function z() {
      try {
        const Z = x.value ? await l(x.value) : await o();
        w.value = Z;
      } catch (Z) {
        console.error("Re-validation failed:", Z);
      }
    }
    async function q() {
      d.value = !0;
      try {
        const Z = x.value ? await r(x.value, u.value || void 0) : await a(u.value || void 0);
        f.value = Z;
      } catch (Z) {
        f.value = {
          status: "error",
          message: Z instanceof Error ? Z.message : "Export failed"
        };
      } finally {
        d.value = !1;
      }
    }
    async function D() {
      var Z;
      if ((Z = f.value) != null && Z.path)
        try {
          await navigator.clipboard.writeText(f.value.path);
        } catch (te) {
          console.error("Failed to copy path:", te);
        }
    }
    async function G() {
      var Z;
      if ((Z = f.value) != null && Z.path) {
        v.value = !0;
        try {
          const te = await fetch(`/v2/comfygit/download?path=${encodeURIComponent(f.value.path)}`);
          if (!te.ok)
            throw new Error(`Download failed: ${te.statusText}`);
          const ie = await te.blob(), ge = URL.createObjectURL(ie), oe = f.value.path.split("/").pop() || "environment-export.tar.gz", X = document.createElement("a");
          X.href = ge, X.download = oe, document.body.appendChild(X), X.click(), document.body.removeChild(X), URL.revokeObjectURL(ge);
        } catch (te) {
          console.error("Failed to download:", te), alert(`Download failed: ${te instanceof Error ? te.message : "Unknown error"}`);
        } finally {
          v.value = !1;
        }
      }
    }
    return (Z, te) => (n(), i(H, null, [
      _(Tt, null, ts({
        content: g(() => [
          _(bt, { title: "EXPORT OPTIONS" }, {
            default: g(() => [
              t("div", px, [
                te[7] || (te[7] = t("div", { class: "export-card-header" }, [
                  t("span", { class: "export-icon" }, "📁"),
                  t("div", { class: "export-header-text" }, [
                    t("div", { class: "export-title" }, "Output Destination"),
                    t("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                t("div", gx, [
                  _(ks, {
                    modelValue: u.value,
                    "onUpdate:modelValue": te[1] || (te[1] = (ie) => u.value = ie),
                    placeholder: "Leave empty for default, or enter path like /mnt/c/Users/you/exports/",
                    class: "path-input"
                  }, null, 8, ["modelValue"])
                ]),
                t("div", hx, [
                  _(Ce, {
                    variant: "primary",
                    size: "md",
                    loading: c.value || d.value,
                    disabled: c.value || d.value,
                    onClick: I
                  }, {
                    default: g(() => [
                      te[6] || (te[6] = t("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "currentColor"
                      }, [
                        t("path", { d: "M8 4L3 9h3v6h4V9h3L8 4z" }),
                        t("path", { d: "M14 2H2v2h12V2z" })
                      ], -1)),
                      $(" " + m(U.value), 1)
                    ]),
                    _: 1
                  }, 8, ["loading", "disabled"])
                ])
              ])
            ]),
            _: 1
          }),
          f.value ? (n(), L(bt, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: g(() => [
              _(At, {
                status: f.value.status === "success" ? "synced" : "broken"
              }, ts({
                icon: g(() => [
                  $(m(f.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: g(() => [
                  $(m(f.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: g(() => [
                  $(m(f.value.status === "success" ? S.value : f.value.message), 1)
                ]),
                _: 2
              }, [
                f.value.status === "success" ? {
                  name: "details",
                  fn: g(() => [
                    _(_t, { label: "Saved to:" }, {
                      default: g(() => [
                        _(LC, {
                          path: f.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    f.value.models_without_sources !== void 0 ? (n(), L(_t, {
                      key: 0,
                      label: "Models without sources:",
                      value: f.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : h("", !0),
                    f.value.models_without_sources && f.value.models_without_sources > 0 ? (n(), i("div", yx, [...te[8] || (te[8] = [
                      t("span", { class: "warning-icon" }, "!", -1),
                      t("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : h("", !0)
                  ]),
                  key: "0"
                } : void 0,
                f.value.status === "success" ? {
                  name: "actions",
                  fn: g(() => [
                    _(Ce, {
                      variant: "primary",
                      size: "sm",
                      loading: v.value,
                      onClick: G
                    }, {
                      default: g(() => [...te[9] || (te[9] = [
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
                    _(Ce, {
                      variant: "secondary",
                      size: "sm",
                      onClick: D
                    }, {
                      default: g(() => [...te[10] || (te[10] = [
                        $(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    _(Ce, {
                      variant: "ghost",
                      size: "sm",
                      onClick: te[2] || (te[2] = (ie) => f.value = null)
                    }, {
                      default: g(() => [...te[11] || (te[11] = [
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
          })) : h("", !0)
        ]),
        _: 2
      }, [
        e.embedded ? void 0 : {
          name: "header",
          fn: g(() => [
            _(Mt, {
              title: C.value,
              "show-info": !0,
              onInfoClick: te[0] || (te[0] = (ie) => p.value = !0)
            }, null, 8, ["title"])
          ]),
          key: "0"
        }
      ]), 1024),
      _(Yt, {
        show: p.value,
        title: "What Gets Exported",
        onClose: te[3] || (te[3] = (ie) => p.value = !1)
      }, {
        content: g(() => [...te[12] || (te[12] = [
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
      y.value && w.value ? (n(), L(ru, {
        key: 0,
        issues: w.value.blocking_issues,
        onClose: te[4] || (te[4] = (ie) => y.value = !1),
        onCommitted: N
      }, null, 8, ["issues"])) : h("", !0),
      k.value && w.value ? (n(), L(uu, {
        key: 1,
        models: w.value.warnings.models_without_sources,
        onConfirm: E,
        onCancel: te[5] || (te[5] = (ie) => k.value = !1),
        onRevalidate: z
      }, null, 8, ["models"])) : h("", !0)
    ], 64));
  }
}), _x = /* @__PURE__ */ Se(wx, [["__scopeId", "data-v-253214a4"]]), kx = { class: "file-input-wrapper" }, bx = ["accept", "multiple", "disabled"], $x = /* @__PURE__ */ xe({
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
    const a = o, l = b(null);
    function r() {
      var c;
      (c = l.value) == null || c.click();
    }
    function u(c) {
      const d = c.target;
      d.files && d.files.length > 0 && (a("change", d.files), d.value = "");
    }
    return s({
      triggerInput: r
    }), (c, d) => (n(), i("div", kx, [
      t("input", {
        ref_key: "fileInputRef",
        ref: l,
        type: "file",
        accept: e.accept,
        multiple: e.multiple,
        disabled: e.disabled,
        class: "file-input-hidden",
        onChange: u
      }, null, 40, bx),
      _(Ce, {
        variant: e.variant,
        size: e.size,
        disabled: e.disabled,
        onClick: r
      }, {
        default: g(() => [
          et(c.$slots, "default", {}, () => [
            d[0] || (d[0] = t("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              t("path", { d: "M8 4L4 8h3v4h2V8h3L8 4z" }),
              t("path", { d: "M2 14h12v-2H2v2z" })
            ], -1)),
            $(" " + m(e.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled"])
    ]));
  }
}), Cx = /* @__PURE__ */ Se($x, [["__scopeId", "data-v-cd192091"]]), xx = {
  key: 0,
  class: "drop-zone-empty"
}, Sx = { class: "drop-zone-text" }, Ix = { class: "drop-zone-primary" }, Ex = { class: "drop-zone-secondary" }, Tx = { class: "drop-zone-actions" }, Mx = {
  key: 1,
  class: "drop-zone-file"
}, Px = { class: "file-info" }, Rx = { class: "file-details" }, Nx = { class: "file-name" }, Lx = { class: "file-size" }, Dx = /* @__PURE__ */ xe({
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
    const o = s, a = b(!1), l = b(null), r = b(0), u = O(() => l.value !== null), c = O(() => {
      var C;
      return ((C = l.value) == null ? void 0 : C.name) || "";
    }), d = O(() => {
      if (!l.value) return "";
      const C = l.value.size;
      return C < 1024 ? `${C} B` : C < 1024 * 1024 ? `${(C / 1024).toFixed(1)} KB` : C < 1024 * 1024 * 1024 ? `${(C / (1024 * 1024)).toFixed(1)} MB` : `${(C / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function v(C) {
      var S;
      C.stopPropagation(), r.value++, (S = C.dataTransfer) != null && S.types.includes("Files") && (a.value = !0);
    }
    function f(C) {
      C.stopPropagation(), C.dataTransfer && (C.dataTransfer.dropEffect = "copy");
    }
    function p(C) {
      C.stopPropagation(), r.value--, r.value === 0 && (a.value = !1);
    }
    function w(C) {
      var U;
      C.stopPropagation(), r.value = 0, a.value = !1;
      const S = (U = C.dataTransfer) == null ? void 0 : U.files;
      S && S.length > 0 && k(S[0]);
    }
    function y(C) {
      C.length > 0 && k(C[0]);
    }
    function k(C) {
      l.value = C, o("fileSelected", C);
    }
    function x() {
      l.value = null, o("clear");
    }
    return (C, S) => (n(), i("div", {
      class: De(["file-drop-zone", { "drop-active": a.value, "has-file": u.value }]),
      onDragenter: st(v, ["prevent"]),
      onDragover: st(f, ["prevent"]),
      onDragleave: st(p, ["prevent"]),
      onDrop: st(w, ["prevent"])
    }, [
      u.value ? (n(), i("div", Mx, [
        t("div", Px, [
          S[1] || (S[1] = t("div", { class: "file-icon" }, "📦", -1)),
          t("div", Rx, [
            t("div", Nx, m(c.value), 1),
            t("div", Lx, m(d.value), 1)
          ])
        ]),
        _(Ce, {
          variant: "ghost",
          size: "xs",
          onClick: x,
          title: "Remove file"
        }, {
          default: g(() => [...S[2] || (S[2] = [
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
      ])) : (n(), i("div", xx, [
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
        t("div", Sx, [
          t("p", Ix, m(e.primaryText), 1),
          t("p", Ex, m(e.secondaryText), 1)
        ]),
        t("div", Tx, [
          _(Cx, {
            accept: e.accept,
            multiple: e.multiple,
            variant: "primary",
            size: "sm",
            onChange: y
          }, {
            default: g(() => [
              $(m(e.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), Ox = /* @__PURE__ */ Se(Dx, [["__scopeId", "data-v-0f79cb86"]]), Ux = { class: "commit-hash" }, Ax = /* @__PURE__ */ xe({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(e) {
    const s = e, o = O(() => s.hash.slice(0, s.length));
    return (a, l) => (n(), i("span", Ux, m(o.value), 1));
  }
}), cu = /* @__PURE__ */ Se(Ax, [["__scopeId", "data-v-7c333cc6"]]), zx = { class: "import-preview" }, Vx = { class: "preview-header" }, Fx = {
  key: 0,
  class: "source-env"
}, Bx = { class: "preview-content" }, Wx = { class: "preview-section" }, Gx = { class: "section-header" }, jx = { class: "section-info" }, Hx = { class: "section-count" }, qx = {
  key: 0,
  class: "item-list"
}, Kx = { class: "item-name" }, Jx = {
  key: 0,
  class: "item-more"
}, Yx = { class: "preview-section" }, Qx = { class: "section-header" }, Xx = { class: "section-info" }, Zx = { class: "section-count" }, e3 = {
  key: 0,
  class: "item-list"
}, t3 = { class: "item-details" }, s3 = { class: "item-name" }, o3 = { class: "item-meta" }, n3 = {
  key: 0,
  class: "item-more"
}, a3 = { class: "preview-section" }, l3 = { class: "section-header" }, i3 = { class: "section-info" }, r3 = { class: "section-count" }, u3 = {
  key: 0,
  class: "item-list"
}, c3 = { class: "item-name" }, d3 = {
  key: 0,
  class: "item-more"
}, m3 = {
  key: 0,
  class: "preview-section"
}, f3 = { class: "git-info" }, v3 = /* @__PURE__ */ xe({
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
    const s = e, o = O(() => s.workflows.length), a = O(() => s.models.length), l = O(() => s.nodes.length);
    function r(u) {
      return u < 1024 ? `${u} B` : u < 1024 * 1024 ? `${(u / 1024).toFixed(1)} KB` : u < 1024 * 1024 * 1024 ? `${(u / (1024 * 1024)).toFixed(1)} MB` : `${(u / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (u, c) => (n(), i("div", zx, [
      t("div", Vx, [
        _(os, null, {
          default: g(() => [...c[0] || (c[0] = [
            $("Import Preview", -1)
          ])]),
          _: 1
        }),
        e.sourceEnvironment ? (n(), i("span", Fx, [
          c[1] || (c[1] = $(" From: ", -1)),
          _(ol, null, {
            default: g(() => [
              $(m(e.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : h("", !0)
      ]),
      t("div", Bx, [
        t("div", Wx, [
          t("div", Gx, [
            c[3] || (c[3] = t("div", { class: "section-icon" }, "📄", -1)),
            t("div", jx, [
              c[2] || (c[2] = t("div", { class: "section-title" }, "Workflows", -1)),
              t("div", Hx, m(o.value) + " file" + m(o.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.workflows.length > 0 ? (n(), i("div", qx, [
            (n(!0), i(H, null, _e(e.workflows.slice(0, e.maxPreviewItems), (d) => (n(), i("div", {
              key: d,
              class: "preview-item"
            }, [
              c[4] || (c[4] = t("span", { class: "item-bullet" }, "•", -1)),
              t("span", Kx, m(d), 1)
            ]))), 128)),
            e.workflows.length > e.maxPreviewItems ? (n(), i("div", Jx, " +" + m(e.workflows.length - e.maxPreviewItems) + " more ", 1)) : h("", !0)
          ])) : h("", !0)
        ]),
        t("div", Yx, [
          t("div", Qx, [
            c[6] || (c[6] = t("div", { class: "section-icon" }, "🎨", -1)),
            t("div", Xx, [
              c[5] || (c[5] = t("div", { class: "section-title" }, "Models", -1)),
              t("div", Zx, m(a.value) + " file" + m(a.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.models.length > 0 ? (n(), i("div", e3, [
            (n(!0), i(H, null, _e(e.models.slice(0, e.maxPreviewItems), (d) => (n(), i("div", {
              key: d.filename,
              class: "preview-item"
            }, [
              c[7] || (c[7] = t("span", { class: "item-bullet" }, "•", -1)),
              t("div", t3, [
                t("span", s3, m(d.filename), 1),
                t("span", o3, m(r(d.size)) + " • " + m(d.type), 1)
              ])
            ]))), 128)),
            e.models.length > e.maxPreviewItems ? (n(), i("div", n3, " +" + m(e.models.length - e.maxPreviewItems) + " more ", 1)) : h("", !0)
          ])) : h("", !0)
        ]),
        t("div", a3, [
          t("div", l3, [
            c[9] || (c[9] = t("div", { class: "section-icon" }, "🔌", -1)),
            t("div", i3, [
              c[8] || (c[8] = t("div", { class: "section-title" }, "Custom Nodes", -1)),
              t("div", r3, m(l.value) + " node" + m(l.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.nodes.length > 0 ? (n(), i("div", u3, [
            (n(!0), i(H, null, _e(e.nodes.slice(0, e.maxPreviewItems), (d) => (n(), i("div", {
              key: d,
              class: "preview-item"
            }, [
              c[10] || (c[10] = t("span", { class: "item-bullet" }, "•", -1)),
              t("span", c3, m(d), 1)
            ]))), 128)),
            e.nodes.length > e.maxPreviewItems ? (n(), i("div", d3, " +" + m(e.nodes.length - e.maxPreviewItems) + " more ", 1)) : h("", !0)
          ])) : h("", !0)
        ]),
        e.gitBranch || e.gitCommit ? (n(), i("div", m3, [
          c[11] || (c[11] = t("div", { class: "section-header" }, [
            t("div", { class: "section-icon" }, "🌿"),
            t("div", { class: "section-info" }, [
              t("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          t("div", f3, [
            e.gitBranch ? (n(), L(_t, {
              key: 0,
              label: "Branch"
            }, {
              default: g(() => [
                _(ol, null, {
                  default: g(() => [
                    $(m(e.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : h("", !0),
            e.gitCommit ? (n(), L(_t, {
              key: 1,
              label: "Commit"
            }, {
              default: g(() => [
                _(cu, { hash: e.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : h("", !0)
          ])
        ])) : h("", !0)
      ])
    ]));
  }
}), p3 = /* @__PURE__ */ Se(v3, [["__scopeId", "data-v-182fe113"]]), g3 = { class: "import-config" }, h3 = { class: "config-container" }, y3 = { class: "config-field" }, w3 = { class: "input-wrapper" }, _3 = ["value"], k3 = {
  key: 0,
  class: "validating-indicator"
}, b3 = {
  key: 1,
  class: "valid-indicator"
}, $3 = {
  key: 0,
  class: "field-error"
}, C3 = { class: "config-field" }, x3 = { class: "strategy-options" }, S3 = ["value", "checked", "onChange"], I3 = { class: "strategy-content" }, E3 = { class: "strategy-label" }, T3 = { class: "strategy-description" }, M3 = { class: "config-field switch-field" }, P3 = { class: "switch-label" }, R3 = ["checked"], N3 = { class: "advanced-section" }, L3 = { class: "advanced-content" }, D3 = { class: "config-field" }, O3 = ["value"], U3 = ["value"], A3 = /* @__PURE__ */ xe({
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
    const o = e, a = s, l = b(!1), r = b(!1);
    kt(() => o.nameError, (f) => {
      l.value = !1, r.value = !f && o.name.length > 0;
    });
    const u = [
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
    let c = null;
    function d(f) {
      const p = f.target.value;
      a("update:name", p), r.value = !1, c && clearTimeout(c), p.length > 0 ? (l.value = !0, c = setTimeout(() => {
        a("validate-name", p);
      }, 400)) : l.value = !1;
    }
    function v() {
      o.name.length > 0 && a("validate-name", o.name);
    }
    return (f, p) => (n(), i("div", g3, [
      _(os, null, {
        default: g(() => [...p[2] || (p[2] = [
          $("Configuration", -1)
        ])]),
        _: 1
      }),
      t("div", h3, [
        t("div", y3, [
          _(On, { required: "" }, {
            default: g(() => [...p[3] || (p[3] = [
              $("Environment Name", -1)
            ])]),
            _: 1
          }),
          t("div", w3, [
            t("input", {
              type: "text",
              class: De(["name-input", { error: e.nameError || e.name.length === 0, valid: r.value }]),
              value: e.name,
              placeholder: "my-imported-env",
              onInput: d,
              onBlur: v
            }, null, 42, _3),
            l.value ? (n(), i("span", k3, "...")) : r.value ? (n(), i("span", b3, "✓")) : h("", !0)
          ]),
          e.nameError ? (n(), i("div", $3, m(e.nameError), 1)) : h("", !0),
          p[4] || (p[4] = t("div", { class: "field-hint" }, "Creates a new environment with this name", -1))
        ]),
        t("div", C3, [
          _(On, null, {
            default: g(() => [...p[5] || (p[5] = [
              $("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          t("div", x3, [
            (n(), i(H, null, _e(u, (w) => t("label", {
              key: w.value,
              class: De(["strategy-option", { active: e.modelStrategy === w.value }])
            }, [
              t("input", {
                type: "radio",
                name: "model-strategy",
                value: w.value,
                checked: e.modelStrategy === w.value,
                onChange: (y) => a("update:modelStrategy", w.value)
              }, null, 40, S3),
              t("div", I3, [
                t("span", E3, m(w.label), 1),
                t("span", T3, m(w.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        t("div", M3, [
          t("label", P3, [
            t("input", {
              type: "checkbox",
              checked: e.switchAfterImport,
              onChange: p[0] || (p[0] = (w) => a("update:switchAfterImport", w.target.checked))
            }, null, 40, R3),
            p[6] || (p[6] = t("span", null, "Switch to this environment after import", -1))
          ])
        ]),
        t("details", N3, [
          p[8] || (p[8] = t("summary", { class: "advanced-toggle" }, "Advanced Options", -1)),
          t("div", L3, [
            t("div", D3, [
              _(On, null, {
                default: g(() => [...p[7] || (p[7] = [
                  $("PyTorch Backend", -1)
                ])]),
                _: 1
              }),
              t("select", {
                class: "backend-select",
                value: e.torchBackend,
                onChange: p[1] || (p[1] = (w) => a("update:torchBackend", w.target.value))
              }, [
                (n(!0), i(H, null, _e(Ye(Ml), (w) => (n(), i("option", {
                  key: w,
                  value: w
                }, m(w) + m(w === "auto" ? " (detect GPU)" : ""), 9, U3))), 128))
              ], 40, O3)
            ])
          ])
        ])
      ])
    ]));
  }
}), z3 = /* @__PURE__ */ Se(A3, [["__scopeId", "data-v-89ea06a1"]]), V3 = { class: "import-flow" }, F3 = {
  key: 0,
  class: "import-empty"
}, B3 = { class: "git-import-section" }, W3 = { class: "git-url-input-row" }, G3 = ["disabled"], j3 = {
  key: 0,
  class: "git-error"
}, H3 = {
  key: 1,
  class: "import-configure"
}, q3 = { class: "selected-file-bar" }, K3 = {
  key: 0,
  class: "file-bar-content"
}, J3 = { class: "file-bar-info" }, Y3 = { class: "file-bar-name" }, Q3 = { class: "file-bar-size" }, X3 = {
  key: 1,
  class: "file-bar-content"
}, Z3 = { class: "file-bar-info" }, e8 = { class: "file-bar-name" }, t8 = {
  key: 0,
  class: "preview-loading"
}, s8 = { class: "import-actions" }, o8 = {
  key: 2,
  class: "import-progress"
}, n8 = { class: "creating-intro" }, a8 = {
  key: 0,
  class: "progress-warning"
}, l8 = {
  key: 1,
  class: "import-error"
}, i8 = { class: "error-message" }, r8 = {
  key: 3,
  class: "import-complete"
}, u8 = { class: "complete-message" }, c8 = { class: "complete-title" }, d8 = { class: "complete-details" }, m8 = { class: "complete-actions" }, f8 = /* @__PURE__ */ xe({
  __name: "ImportFlow",
  props: {
    workspacePath: {},
    resumeImport: { type: Boolean },
    initialProgress: {}
  },
  emits: ["import-complete", "import-started", "source-cleared"],
  setup(e, { expose: s, emit: o }) {
    var M, A, Q, P;
    const a = e, l = o, { previewTarballImport: r, previewGitImport: u, validateEnvironmentName: c, executeImport: d, executeGitImport: v, getImportProgress: f } = ct();
    let p = null;
    const w = b(null), y = b(a.resumeImport ?? !1), k = b(!1), x = b(!1), C = b(""), S = b(!1), U = b(null), I = b(""), E = b(null), N = b(!1), z = b(null), q = b(null), D = b({
      name: ((M = a.initialProgress) == null ? void 0 : M.environmentName) ?? "",
      modelStrategy: "required",
      torchBackend: "auto",
      switchAfterImport: !0
    }), G = b(null), Z = b({
      message: ((A = a.initialProgress) == null ? void 0 : A.message) ?? "Preparing import...",
      phase: ((Q = a.initialProgress) == null ? void 0 : Q.phase) ?? "",
      progress: ((P = a.initialProgress) == null ? void 0 : P.progress) ?? 0,
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
    ], ie = O(() => {
      if (!q.value)
        return {
          sourceEnvironment: "",
          workflows: [],
          models: [],
          nodes: [],
          gitBranch: void 0,
          gitCommit: void 0
        };
      const R = q.value;
      return {
        sourceEnvironment: R.comfyui_version ? `ComfyUI ${R.comfyui_version}` : "Unknown",
        workflows: R.workflows.map((ce) => ce.name),
        models: R.models.map((ce) => ({
          filename: ce.filename,
          size: 0,
          type: ce.relative_path.split("/")[0] || "model"
        })),
        nodes: R.nodes.map((ce) => ce.name),
        gitBranch: void 0,
        gitCommit: void 0
      };
    }), ge = O(() => !S.value && !U.value && q.value && D.value.name.length > 0 && !G.value && (w.value || E.value));
    async function oe(R) {
      w.value = R, S.value = !0, U.value = null, q.value = null;
      try {
        const ce = await r(R);
        q.value = ce;
      } catch (ce) {
        U.value = ce instanceof Error ? ce.message : "Failed to analyze file", console.error("Preview error:", ce);
      } finally {
        S.value = !1;
      }
    }
    function X() {
      w.value = null, E.value = null, I.value = "", z.value = null, k.value = !1, x.value = !1, C.value = "", q.value = null, U.value = null, D.value = { name: "", modelStrategy: "required", torchBackend: "auto", switchAfterImport: !0 }, G.value = null, l("source-cleared");
    }
    function de() {
      se(), X(), y.value = !1, S.value = !1, N.value = !1, Z.value = {
        message: "Preparing import...",
        phase: "",
        progress: 0,
        error: null
      };
    }
    async function Ne() {
      if (I.value.trim()) {
        N.value = !0, z.value = null;
        try {
          const R = await u(I.value.trim());
          E.value = I.value.trim(), q.value = R;
        } catch (R) {
          z.value = R instanceof Error ? R.message : "Failed to analyze repository";
        } finally {
          N.value = !1;
        }
      }
    }
    function le(R) {
      try {
        const ce = new URL(R);
        return ce.host + ce.pathname.replace(/\.git$/, "");
      } catch {
        return R;
      }
    }
    async function pe(R) {
      if (!R) {
        G.value = "Environment name is required";
        return;
      }
      try {
        const ce = await c(R);
        G.value = ce.valid ? null : ce.error || "Invalid name";
      } catch {
        G.value = "Failed to validate name";
      }
    }
    async function me() {
      if (D.value.name && !(!w.value && !E.value)) {
        y.value = !0, k.value = !1, Z.value = { message: `Creating environment '${D.value.name}'...`, phase: "", progress: 0, error: null }, l("import-started");
        try {
          let R;
          if (w.value)
            R = await d(
              w.value,
              D.value.name,
              D.value.modelStrategy,
              D.value.torchBackend
            );
          else if (E.value)
            R = await v(
              E.value,
              D.value.name,
              D.value.modelStrategy,
              D.value.torchBackend
            );
          else
            throw new Error("No import source selected");
          R.status === "started" ? Ue() : (x.value = !1, C.value = R.message, y.value = !1, k.value = !0);
        } catch (R) {
          x.value = !1, C.value = R instanceof Error ? R.message : "Unknown error occurred during import", y.value = !1, k.value = !0;
        }
      }
    }
    async function Ue() {
      if (p) return;
      const R = async () => {
        try {
          const Ve = await f();
          return Z.value = {
            message: Ve.message,
            phase: Ve.phase || "",
            progress: Ve.progress ?? (Ve.state === "importing" ? 50 : 0),
            error: Ve.error || null
          }, Ve.state === "complete" ? (se(), x.value = !0, C.value = `Environment '${Ve.environment_name}' created successfully`, y.value = !1, k.value = !0, Ve.environment_name && l("import-complete", Ve.environment_name, D.value.switchAfterImport), !1) : Ve.state === "error" ? (se(), x.value = !1, C.value = Ve.error || Ve.message, y.value = !1, k.value = !0, !1) : !0;
        } catch (Ve) {
          return console.error("Failed to poll import progress:", Ve), !0;
        }
      };
      await R() && (p = setInterval(async () => {
        await R() || se();
      }, 2e3));
    }
    function se() {
      p && (clearInterval(p), p = null);
    }
    function ne(R) {
      return R < 1024 ? `${R} B` : R < 1024 * 1024 ? `${(R / 1024).toFixed(1)} KB` : R < 1024 * 1024 * 1024 ? `${(R / (1024 * 1024)).toFixed(1)} MB` : `${(R / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return ot(async () => {
      try {
        const R = await f();
        console.log("[ComfyGit ImportFlow] Import progress check:", R.state, R), R.state === "importing" && (console.log("[ComfyGit ImportFlow] Resuming in-progress import:", R.environment_name), y.value = !0, D.value.name = R.environment_name || D.value.name || "", Z.value = {
          progress: R.progress ?? 0,
          message: R.message || "Importing...",
          phase: R.phase || "",
          error: null
        }, Ue());
      } catch (R) {
        console.log("[ComfyGit ImportFlow] Import progress check failed:", R);
      }
    }), s({
      handleReset: de,
      isImporting: y,
      canImport: ge
    }), (R, ce) => {
      var Ve;
      return n(), i("div", V3, [
        !w.value && !E.value && !y.value ? (n(), i("div", F3, [
          _(Ox, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: oe
          }),
          ce[7] || (ce[7] = t("div", { class: "import-divider" }, [
            t("span", null, "or")
          ], -1)),
          t("div", B3, [
            ce[5] || (ce[5] = t("div", { class: "git-import-header" }, "Import from Git Repository", -1)),
            t("div", W3, [
              St(t("input", {
                type: "text",
                class: "git-url-input",
                "onUpdate:modelValue": ce[0] || (ce[0] = (je) => I.value = je),
                placeholder: "https://github.com/user/repo.git",
                onKeyup: es(Ne, ["enter"]),
                disabled: N.value
              }, null, 40, G3), [
                [xo, I.value]
              ]),
              _(Ce, {
                variant: "primary",
                size: "sm",
                disabled: !I.value.trim() || N.value,
                onClick: Ne
              }, {
                default: g(() => [
                  $(m(N.value ? "Analyzing..." : "ANALYZE"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            z.value ? (n(), i("div", j3, m(z.value), 1)) : h("", !0),
            ce[6] || (ce[6] = t("div", { class: "git-url-hint" }, "Paste a GitHub URL to preview the environment", -1))
          ])
        ])) : (w.value || E.value) && !y.value && !k.value ? (n(), i("div", H3, [
          t("div", q3, [
            w.value ? (n(), i("div", K3, [
              ce[8] || (ce[8] = t("div", { class: "file-bar-icon" }, "📦", -1)),
              t("div", J3, [
                t("div", Y3, m(w.value.name), 1),
                t("div", Q3, m(ne(w.value.size)), 1)
              ])
            ])) : E.value ? (n(), i("div", X3, [
              ce[10] || (ce[10] = t("div", { class: "file-bar-icon" }, "🔗", -1)),
              t("div", Z3, [
                t("div", e8, m(le(E.value)), 1),
                ce[9] || (ce[9] = t("div", { class: "file-bar-size" }, "Git Repository", -1))
              ])
            ])) : h("", !0),
            _(Ce, {
              variant: "ghost",
              size: "sm",
              onClick: X
            }, {
              default: g(() => [...ce[11] || (ce[11] = [
                $(" Change Source ", -1)
              ])]),
              _: 1
            })
          ]),
          S.value ? (n(), i("div", t8, [...ce[12] || (ce[12] = [
            t("div", { class: "loading-spinner" }, null, -1),
            t("div", { class: "loading-text" }, "Analyzing import file...", -1)
          ])])) : U.value ? (n(), L(cs, {
            key: 1,
            type: "error",
            title: "Failed to Analyze File",
            details: [U.value]
          }, null, 8, ["details"])) : q.value ? (n(), L(p3, {
            key: 2,
            "source-environment": ie.value.sourceEnvironment,
            workflows: ie.value.workflows,
            models: ie.value.models,
            nodes: ie.value.nodes,
            "git-branch": ie.value.gitBranch,
            "git-commit": ie.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : h("", !0),
          q.value ? (n(), L(z3, {
            key: 3,
            name: D.value.name,
            "onUpdate:name": ce[1] || (ce[1] = (je) => D.value.name = je),
            "model-strategy": D.value.modelStrategy,
            "onUpdate:modelStrategy": ce[2] || (ce[2] = (je) => D.value.modelStrategy = je),
            "torch-backend": D.value.torchBackend,
            "onUpdate:torchBackend": ce[3] || (ce[3] = (je) => D.value.torchBackend = je),
            "switch-after-import": D.value.switchAfterImport,
            "onUpdate:switchAfterImport": ce[4] || (ce[4] = (je) => D.value.switchAfterImport = je),
            "name-error": G.value,
            onValidateName: pe
          }, null, 8, ["name", "model-strategy", "torch-backend", "switch-after-import", "name-error"])) : h("", !0),
          D.value.modelStrategy === "skip" && ((Ve = q.value) != null && Ve.models_needing_download) ? (n(), L(cs, {
            key: 4,
            type: "warning",
            title: "Models Will Not Be Downloaded",
            details: [
              `${q.value.models_needing_download} model(s) will need to be downloaded later`,
              "You can resolve missing models from the STATUS page after import"
            ]
          }, null, 8, ["details"])) : h("", !0),
          t("div", s8, [
            _(Ce, {
              variant: "secondary",
              size: "md",
              onClick: X
            }, {
              default: g(() => [...ce[13] || (ce[13] = [
                $(" Cancel ", -1)
              ])]),
              _: 1
            }),
            _(Ce, {
              variant: "primary",
              size: "md",
              disabled: !ge.value,
              onClick: me
            }, {
              default: g(() => [...ce[14] || (ce[14] = [
                $(" Create Environment ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : y.value ? (n(), i("div", o8, [
          t("p", n8, [
            ce[15] || (ce[15] = $(" Importing environment ", -1)),
            t("strong", null, m(D.value.name), 1),
            ce[16] || (ce[16] = $("... ", -1))
          ]),
          _(Jn, {
            progress: Z.value.progress,
            message: Z.value.message,
            "current-phase": Z.value.phase,
            variant: Z.value.error ? "error" : "default",
            "show-steps": !0,
            steps: te
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          Z.value.error ? h("", !0) : (n(), i("p", a8, " This may take several minutes. Please wait... ")),
          Z.value.error ? (n(), i("div", l8, [
            t("p", i8, m(Z.value.error), 1)
          ])) : h("", !0)
        ])) : k.value ? (n(), i("div", r8, [
          t("div", {
            class: De(["complete-icon", x.value ? "success" : "error"])
          }, m(x.value ? "✓" : "✕"), 3),
          t("div", u8, [
            t("div", c8, m(x.value ? "Import Successful" : "Import Failed"), 1),
            t("div", d8, m(C.value), 1)
          ]),
          t("div", m8, [
            _(Ce, {
              variant: "primary",
              size: "md",
              onClick: de
            }, {
              default: g(() => [...ce[17] || (ce[17] = [
                $(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : h("", !0)
      ]);
    };
  }
}), du = /* @__PURE__ */ Se(f8, [["__scopeId", "data-v-72cbc04e"]]), v8 = /* @__PURE__ */ xe({
  __name: "ImportSection",
  props: {
    embedded: { type: Boolean }
  },
  emits: ["import-complete-switch"],
  setup(e, { emit: s }) {
    const o = s, a = b(!1);
    function l(r, u) {
      u && o("import-complete-switch", r);
    }
    return (r, u) => (n(), i(H, null, [
      _(Tt, null, ts({
        content: g(() => [
          _(du, { onImportComplete: l })
        ]),
        _: 2
      }, [
        e.embedded ? void 0 : {
          name: "header",
          fn: g(() => [
            _(Mt, {
              title: "IMPORT ENVIRONMENT",
              "show-info": !0,
              onInfoClick: u[0] || (u[0] = (c) => a.value = !0)
            })
          ]),
          key: "0"
        }
      ]), 1024),
      _(Yt, {
        show: a.value,
        title: "How Import Works",
        onClose: u[1] || (u[1] = (c) => a.value = !1)
      }, {
        content: g(() => [...u[2] || (u[2] = [
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
}), p8 = /* @__PURE__ */ Se(v8, [["__scopeId", "data-v-41b1f298"]]), mu = "ComfyGit.Cloud.Url", fu = "ComfyGit.Cloud.DashboardUrl", nl = "ComfyGit.Cloud.Session", al = "ComfyGit.Cloud.User", vu = "ComfyGit.Cloud.LinkedEnvironments";
function Pl(e) {
  try {
    const s = localStorage.getItem(e);
    return s ? JSON.parse(s) : null;
  } catch {
    return null;
  }
}
function pu(e, s = "") {
  try {
    return localStorage.getItem(e) || s;
  } catch {
    return s;
  }
}
const Wa = b(pu(mu, "http://127.0.0.1:8012")), Ga = b(pu(fu, "")), In = b(Pl(nl)), zo = b(Pl(al)), oo = b(Pl(vu) || {});
function gu() {
  const e = O(() => {
    var d, v;
    return !!((d = In.value) != null && d.access_token) && !!((v = zo.value) != null && v.id);
  }), s = O(() => {
    var d;
    return ((d = zo.value) == null ? void 0 : d.email) || "Not signed in";
  });
  function o(d) {
    Wa.value = d.trim();
    try {
      localStorage.setItem(mu, Wa.value);
    } catch (v) {
      console.error("[useCloudAuth] Failed to save cloud URL:", v);
    }
  }
  function a(d) {
    Ga.value = d.trim();
    try {
      localStorage.setItem(fu, Ga.value);
    } catch (v) {
      console.error("[useCloudAuth] Failed to save dashboard URL:", v);
    }
  }
  function l(d, v) {
    In.value = d, zo.value = v;
    try {
      localStorage.setItem(nl, JSON.stringify(d)), localStorage.setItem(al, JSON.stringify(v));
    } catch (f) {
      console.error("[useCloudAuth] Failed to save auth state:", f);
    }
  }
  function r() {
    In.value = null, zo.value = null;
    try {
      localStorage.removeItem(nl), localStorage.removeItem(al);
    } catch (d) {
      console.error("[useCloudAuth] Failed to clear auth state:", d);
    }
  }
  function u(d) {
    const v = String(d || "").trim();
    return v && oo.value[v] || null;
  }
  function c(d, v) {
    const f = String(d || "").trim();
    if (f) {
      if (v)
        oo.value = {
          ...oo.value,
          [f]: { id: v.id, name: v.name }
        };
      else {
        const p = { ...oo.value };
        delete p[f], oo.value = p;
      }
      try {
        localStorage.setItem(vu, JSON.stringify(oo.value));
      } catch (p) {
        console.error("[useCloudAuth] Failed to save linked cloud environments:", p);
      }
    }
  }
  return {
    cloudUrl: Wa,
    dashboardUrl: Ga,
    session: In,
    user: zo,
    isAuthenticated: e,
    authLabel: s,
    setCloudUrl: o,
    setDashboardUrl: a,
    setAuth: l,
    clearAuth: r,
    linkedEnvironments: oo,
    getLinkedEnvironment: u,
    setLinkedEnvironment: c
  };
}
const g8 = { class: "account-section" }, h8 = {
  key: 0,
  class: "account-card"
}, y8 = { class: "account-card-header" }, w8 = { class: "account-meta" }, _8 = { class: "row-actions" }, k8 = {
  key: 1,
  class: "account-card"
}, b8 = { class: "auth-form-grid" }, $8 = { class: "field-group full-span" }, C8 = { class: "field-group full-span" }, x8 = { class: "row-actions" }, S8 = { class: "account-section" }, I8 = { class: "stacked-form" }, E8 = { class: "row-actions" }, T8 = { class: "stacked-form" }, M8 = { class: "row-actions" }, P8 = /* @__PURE__ */ xe({
  __name: "AccountSection",
  emits: ["toast", "navigate"],
  setup(e, { emit: s }) {
    const o = s, { getCloudAuthConfig: a, loginToCloud: l, signupToCloud: r, getCloudMe: u, logoutFromCloud: c } = ct(), { cloudUrl: d, dashboardUrl: v, session: f, user: p, isAuthenticated: w, authLabel: y, setCloudUrl: k, setDashboardUrl: x, setAuth: C, clearAuth: S } = gu(), U = b(!1), I = b(d.value), E = b(v.value), N = b(""), z = b(""), q = b(!1), D = b(!1), G = b(!1), Z = b(!1), te = b(null), ie = b(null), ge = O(() => w.value ? y.value : "Not signed in");
    function oe() {
      const ne = I.value.trim();
      return k(ne), I.value = d.value, d.value;
    }
    async function X() {
      var ne;
      if (!(!((ne = f.value) != null && ne.access_token) || !d.value))
        try {
          const M = await u(d.value, f.value.access_token);
          f.value && C(f.value, M.user);
        } catch (M) {
          S(), ie.value = {
            type: "error",
            message: M instanceof Error ? M.message : "Stored cloud session is no longer valid."
          };
        }
    }
    async function de() {
      const ne = oe();
      q.value = !0, te.value = null;
      try {
        const M = await a(ne);
        te.value = {
          type: "success",
          message: `Connected. Supabase auth is configured for ${M.url}.`
        };
      } catch (M) {
        te.value = {
          type: "error",
          message: M instanceof Error ? M.message : "Failed to connect to cloud."
        };
      } finally {
        q.value = !1;
      }
    }
    function Ne() {
      const ne = oe();
      te.value = {
        type: "info",
        message: `Cloud URL saved: ${ne}`
      };
    }
    function le() {
      const ne = E.value.trim();
      x(ne), E.value = v.value, te.value = {
        type: "info",
        message: `Dashboard URL saved: ${v.value || "cleared"}`
      };
    }
    async function pe() {
      const ne = oe();
      D.value = !0, ie.value = null;
      try {
        const M = await l(ne, N.value.trim(), z.value);
        if (!M.session || !M.user)
          throw new Error("Cloud did not return a session.");
        C(M.session, M.user), ie.value = { type: "success", message: "Signed in successfully." }, o("toast", "Signed in to ComfyGit Cloud", "success"), z.value = "";
      } catch (M) {
        ie.value = {
          type: "error",
          message: M instanceof Error ? M.message : "Failed to sign in."
        };
      } finally {
        D.value = !1;
      }
    }
    async function me() {
      const ne = oe();
      G.value = !0, ie.value = null;
      try {
        const M = await r(ne, N.value.trim(), z.value);
        if (!M.session || !M.user)
          throw new Error("Cloud did not return a session.");
        C(M.session, M.user), ie.value = { type: "success", message: "Account created and signed in." }, o("toast", "ComfyGit Cloud account created", "success"), z.value = "";
      } catch (M) {
        ie.value = {
          type: "error",
          message: M instanceof Error ? M.message : "Failed to create account."
        };
      } finally {
        G.value = !1;
      }
    }
    async function Ue() {
      var ne;
      Z.value = !0;
      try {
        await c(d.value, (ne = f.value) == null ? void 0 : ne.refresh_token);
      } catch {
      } finally {
        S(), Z.value = !1, ie.value = { type: "info", message: "Signed out." }, o("toast", "Signed out of ComfyGit Cloud", "info");
      }
    }
    function se() {
      v.value && window.open(v.value, "_blank", "noopener,noreferrer");
    }
    return ot(() => {
      X();
    }), (ne, M) => (n(), i(H, null, [
      _(Tt, null, {
        header: g(() => [
          _(Mt, {
            title: "CLOUD ACCOUNT",
            "show-info": !0,
            onInfoClick: M[0] || (M[0] = (A) => U.value = !0)
          }, {
            actions: g(() => [
              t("div", {
                class: De(["auth-chip", { authenticated: Ye(w) }])
              }, m(ge.value), 3)
            ]),
            _: 1
          })
        ]),
        content: g(() => [
          _(bt, { title: "AUTHENTICATION" }, {
            default: g(() => [
              t("div", g8, [
                Ye(w) && Ye(p) ? (n(), i("div", h8, [
                  t("div", y8, [
                    M[8] || (M[8] = t("div", { class: "account-title" }, "SIGNED IN", -1)),
                    _(Ce, {
                      variant: "ghost",
                      size: "xs",
                      loading: Z.value,
                      onClick: Ue
                    }, {
                      default: g(() => [...M[7] || (M[7] = [
                        $(" Sign Out ", -1)
                      ])]),
                      _: 1
                    }, 8, ["loading"])
                  ]),
                  t("div", w8, [
                    t("div", null, [
                      M[9] || (M[9] = t("span", { class: "meta-label" }, "Email:", -1)),
                      $(" " + m(Ye(p).email || "—"), 1)
                    ]),
                    t("div", null, [
                      M[10] || (M[10] = t("span", { class: "meta-label" }, "User ID:", -1)),
                      $(" " + m(Ye(p).id), 1)
                    ])
                  ]),
                  t("div", _8, [
                    _(Ce, {
                      variant: "primary",
                      size: "xs",
                      onClick: M[1] || (M[1] = (A) => o("navigate", "publish"))
                    }, {
                      default: g(() => [...M[11] || (M[11] = [
                        $(" Go To Publish ", -1)
                      ])]),
                      _: 1
                    }),
                    _(Ce, {
                      variant: "ghost",
                      size: "xs",
                      onClick: se
                    }, {
                      default: g(() => [...M[12] || (M[12] = [
                        $(" Open Dashboard ", -1)
                      ])]),
                      _: 1
                    })
                  ])
                ])) : (n(), i("div", k8, [
                  M[17] || (M[17] = t("div", { class: "account-title" }, "SIGN IN OR CREATE ACCOUNT", -1)),
                  t("div", b8, [
                    t("div", $8, [
                      M[13] || (M[13] = t("label", { class: "field-label" }, "Email", -1)),
                      _(ks, {
                        modelValue: N.value,
                        "onUpdate:modelValue": M[2] || (M[2] = (A) => N.value = A),
                        type: "email",
                        placeholder: "you@example.com",
                        onKeydown: es(st(pe, ["prevent"]), ["enter"])
                      }, null, 8, ["modelValue", "onKeydown"])
                    ]),
                    t("div", C8, [
                      M[14] || (M[14] = t("label", { class: "field-label" }, "Password", -1)),
                      _(ks, {
                        modelValue: z.value,
                        "onUpdate:modelValue": M[3] || (M[3] = (A) => z.value = A),
                        type: "password",
                        placeholder: "Enter password",
                        onKeydown: es(st(pe, ["prevent"]), ["enter"])
                      }, null, 8, ["modelValue", "onKeydown"])
                    ])
                  ]),
                  t("div", x8, [
                    _(Ce, {
                      variant: "primary",
                      size: "xs",
                      loading: D.value,
                      onClick: pe
                    }, {
                      default: g(() => [...M[15] || (M[15] = [
                        $(" Sign In ", -1)
                      ])]),
                      _: 1
                    }, 8, ["loading"]),
                    _(Ce, {
                      variant: "secondary",
                      size: "xs",
                      loading: G.value,
                      onClick: me
                    }, {
                      default: g(() => [...M[16] || (M[16] = [
                        $(" Create Account ", -1)
                      ])]),
                      _: 1
                    }, 8, ["loading"])
                  ]),
                  ie.value ? (n(), i("div", {
                    key: 0,
                    class: De(["status-text", ie.value.type])
                  }, m(ie.value.message), 3)) : h("", !0)
                ]))
              ])
            ]),
            _: 1
          }),
          _(bt, {
            title: "ADVANCED",
            collapsible: "",
            "initially-expanded": !1
          }, {
            default: g(() => [
              t("div", S8, [
                _(Hs, {
                  label: "Cloud API URL",
                  description: "Override the ComfyGit Cloud API base URL for local development or non-default deployments",
                  stacked: ""
                }, {
                  default: g(() => [
                    t("div", I8, [
                      _(ks, {
                        modelValue: I.value,
                        "onUpdate:modelValue": M[4] || (M[4] = (A) => I.value = A),
                        placeholder: "http://127.0.0.1:8012"
                      }, null, 8, ["modelValue"]),
                      t("div", E8, [
                        _(Ce, {
                          variant: "secondary",
                          size: "xs",
                          onClick: Ne
                        }, {
                          default: g(() => [...M[18] || (M[18] = [
                            $(" Save URL ", -1)
                          ])]),
                          _: 1
                        }),
                        _(Ce, {
                          variant: "ghost",
                          size: "xs",
                          loading: q.value,
                          onClick: de
                        }, {
                          default: g(() => [...M[19] || (M[19] = [
                            $(" Test Connection ", -1)
                          ])]),
                          _: 1
                        }, 8, ["loading"])
                      ]),
                      te.value ? (n(), i("div", {
                        key: 0,
                        class: De(["status-text", te.value.type])
                      }, m(te.value.message), 3)) : h("", !0)
                    ])
                  ]),
                  _: 1
                }),
                _(Hs, {
                  label: "Dashboard URL",
                  description: "Override the cloud dashboard URL used by the Open Dashboard actions",
                  stacked: ""
                }, {
                  default: g(() => [
                    t("div", T8, [
                      _(ks, {
                        modelValue: E.value,
                        "onUpdate:modelValue": M[5] || (M[5] = (A) => E.value = A),
                        placeholder: "http://100.99.14.94:5174"
                      }, null, 8, ["modelValue"]),
                      t("div", M8, [
                        _(Ce, {
                          variant: "secondary",
                          size: "xs",
                          onClick: le
                        }, {
                          default: g(() => [...M[20] || (M[20] = [
                            $(" Save URL ", -1)
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
      _(Yt, {
        show: U.value,
        title: "Cloud Account",
        onClose: M[6] || (M[6] = (A) => U.value = !1)
      }, {
        content: g(() => [...M[21] || (M[21] = [
          t("div", { class: "info-content" }, [
            t("p", null, "This page manages the local panel's connection to ComfyGit Cloud."),
            t("p", null, "Use it to configure the cloud URL, sign in or create an account, and inspect the currently linked cloud identity."),
            t("p", null, [
              $("Publishing revisions happens from the separate "),
              t("strong", null, "Publish"),
              $(" page.")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), R8 = /* @__PURE__ */ Se(P8, [["__scopeId", "data-v-6a8d04d9"]]), N8 = {
  key: 0,
  class: "publish-card"
}, L8 = { class: "row-actions" }, D8 = {
  key: 1,
  class: "publish-grid"
}, O8 = {
  key: 0,
  class: "publish-card working-copy-card"
}, U8 = { class: "card-title" }, A8 = { class: "card-copy" }, z8 = { class: "meta-grid" }, V8 = { class: "link-section" }, F8 = { class: "field-group" }, B8 = { class: "row-actions" }, W8 = { class: "row-actions" }, G8 = {
  key: 0,
  class: "publish-error"
}, j8 = {
  key: 1,
  class: "publish-card"
}, H8 = { class: "publish-card revisions-card" }, q8 = {
  key: 0,
  class: "card-copy"
}, K8 = {
  key: 1,
  class: "publish-error"
}, J8 = {
  key: 2,
  class: "card-copy"
}, Y8 = {
  key: 3,
  class: "card-copy"
}, Q8 = {
  key: 4,
  class: "revision-list"
}, X8 = { class: "revision-main" }, Z8 = { class: "revision-title" }, eS = {
  key: 0,
  class: "matched-badge"
}, tS = { class: "revision-copy" }, sS = { class: "revision-meta" }, oS = { key: 0 }, nS = /* @__PURE__ */ xe({
  __name: "PublishSection",
  props: {
    environmentName: {},
    branchName: {}
  },
  emits: ["navigate", "toast"],
  setup(e, { emit: s }) {
    const o = e, a = s, {
      getHistory: l,
      validateExport: r,
      validateEnvironmentExport: u,
      getCloudEnvironments: c,
      getCloudEnvironmentRevisions: d,
      publishCurrentEnvironmentToCloud: v
    } = ct(), { cloudUrl: f, session: p, user: w, isAuthenticated: y, getLinkedEnvironment: k, setLinkedEnvironment: x } = gu(), C = b(!1), S = b(!1), U = b(!1), I = b(!1), E = b(null), N = b(null), z = b(null), q = b([]), D = b(null), G = b(null), Z = b(null), te = b(!1), ie = b(!1), ge = b([]), oe = b(""), X = O(() => {
      var W;
      return ((W = w.value) == null ? void 0 : W.email) || "Not signed in";
    }), de = O(() => {
      var W;
      return ((W = p.value) == null ? void 0 : W.access_token) || "";
    }), Ne = O(() => G.value && q.value.find((W) => W.source_commit_sha === G.value) || null), le = O(() => {
      var W;
      return y.value ? !G.value || !((W = D.value) != null && W.can_export) ? !0 : !Ne.value : !1;
    }), pe = O(() => G.value || "No commits yet"), me = O(() => {
      var W;
      return ((W = z.value) == null ? void 0 : W.name) || "Will be created on first publish";
    }), Ue = O(
      () => ge.value.map((W) => ({
        label: W.name,
        value: W.id
      }))
    ), se = O(() => D.value ? D.value.can_export ? D.value.warnings.models_without_sources.length > 0 ? "This local working copy can be published, but some model source URLs are still missing and may reduce deployability." : "This local working copy is ready to publish as a new immutable cloud revision." : "This local working copy is not publishable yet. Review the issues and commit or resolve them first." : "Checking local publish readiness..."), ne = O(() => I.value ? "Publishing..." : U.value ? "Validating..." : "Publish Revision");
    async function M() {
      var W;
      if (!y.value) {
        D.value = null;
        return;
      }
      U.value = !0, N.value = null;
      try {
        D.value = (W = o.environmentName) != null && W.trim() ? await u(o.environmentName) : await r();
      } catch (J) {
        D.value = null, N.value = J instanceof Error ? J.message : "Failed to validate publish readiness.";
      } finally {
        U.value = !1;
      }
    }
    async function A() {
      var W, J;
      if (!y.value || !de.value || !f.value) {
        z.value = null, q.value = [], E.value = null, await M();
        return;
      }
      S.value = !0, E.value = null, N.value = null;
      try {
        const [ye, ke] = await Promise.all([
          l(1),
          c(f.value, de.value)
        ]);
        G.value = ((W = ye.commits[0]) == null ? void 0 : W.hash) || null, Z.value = ((J = ye.commits[0]) == null ? void 0 : J.message) || null, ge.value = ke.environments || [];
        const $e = k(o.environmentName), Pe = ($e ? ge.value.find((Le) => Le.id === $e.id) : null) || ge.value.find(
          (Le) => Le.name === (o.environmentName || "")
        ) || null;
        if (z.value = Pe, oe.value = (Pe == null ? void 0 : Pe.id) || "", Pe) {
          const Le = await d(f.value, Pe.id, de.value);
          q.value = Le.revisions || [];
        } else
          q.value = [];
        await M();
      } catch (ye) {
        z.value = null, ge.value = [], oe.value = "", q.value = [], E.value = ye instanceof Error ? ye.message : "Failed to load cloud revision state.";
      } finally {
        S.value = !1;
      }
    }
    async function Q() {
      var W;
      if (!y.value || !de.value || !f.value) {
        a("navigate", "account");
        return;
      }
      I.value = !0, N.value = null;
      try {
        const J = await v(
          f.value,
          de.value,
          Z.value || null,
          ((W = z.value) == null ? void 0 : W.id) || null
        );
        await A(), a(
          "toast",
          J.environment_revision ? `Published ${J.environment.name} r${J.environment_revision.revision_number}` : `Published ${J.environment.name}`,
          "success"
        );
      } catch (J) {
        N.value = J instanceof Error ? J.message : "Publish failed.";
      } finally {
        I.value = !1;
      }
    }
    function P() {
      const W = ge.value.find((J) => J.id === oe.value) || null;
      x(o.environmentName, W ? { id: W.id, name: W.name } : null), z.value = W, q.value = [], a(
        "toast",
        W ? `Linked ${o.environmentName || "environment"} to cloud environment ${W.name}` : `Cleared linked cloud environment for ${o.environmentName || "environment"}`,
        "success"
      ), A();
    }
    function R() {
      oe.value = "", x(o.environmentName, null), z.value = null, q.value = [], a("toast", `Cleared linked cloud environment for ${o.environmentName || "environment"}`, "success"), A();
    }
    async function ce() {
      if (!y.value) {
        a("navigate", "account");
        return;
      }
      if (await M(), !!D.value) {
        if (!D.value.can_export) {
          te.value = !0;
          return;
        }
        if (D.value.warnings.models_without_sources.length > 0) {
          ie.value = !0;
          return;
        }
        await Q();
      }
    }
    async function Ve() {
      if (te.value = !1, await A(), !!D.value) {
        if (!D.value.can_export) {
          te.value = !0;
          return;
        }
        if (D.value.warnings.models_without_sources.length > 0) {
          ie.value = !0;
          return;
        }
        await Q();
      }
    }
    async function je() {
      ie.value = !1, await Q();
    }
    function B(W) {
      const J = Date.parse(W);
      if (Number.isNaN(J)) return W;
      const ye = Date.now() - J, ke = Math.floor(ye / 6e4);
      if (ke < 1) return "just now";
      if (ke < 60) return `${ke}m ago`;
      const $e = Math.floor(ke / 60);
      if ($e < 24) return `${$e}h ago`;
      const Pe = Math.floor($e / 24);
      return Pe < 30 ? `${Pe}d ago` : new Date(J).toLocaleString();
    }
    return ot(() => {
      A();
    }), kt(
      [y, f, () => {
        var W;
        return (W = p.value) == null ? void 0 : W.access_token;
      }, () => o.environmentName],
      () => {
        A();
      }
    ), (W, J) => (n(), i(H, null, [
      _(Tt, null, {
        header: g(() => [
          _(Mt, {
            title: "PUBLISH REVISION",
            "show-info": !0,
            onInfoClick: J[0] || (J[0] = (ye) => C.value = !0)
          }, {
            actions: g(() => [
              t("div", {
                class: De(["auth-chip", { authenticated: Ye(y) }])
              }, m(X.value), 3)
            ]),
            _: 1
          })
        ]),
        content: g(() => [
          _(bt, { title: "PUBLISH" }, {
            default: g(() => [
              Ye(y) ? (n(), i("div", D8, [
                le.value ? (n(), i("div", O8, [
                  J[16] || (J[16] = t("div", { class: "card-topline" }, "WORKING COPY", -1)),
                  t("div", U8, m(e.environmentName || "Current environment"), 1),
                  t("div", A8, m(se.value), 1),
                  t("div", z8, [
                    t("div", null, [
                      J[9] || (J[9] = t("span", { class: "publish-label" }, "Branch:", -1)),
                      $(" " + m(e.branchName || "Detached"), 1)
                    ]),
                    t("div", null, [
                      J[10] || (J[10] = t("span", { class: "publish-label" }, "Commit:", -1)),
                      $(" " + m(pe.value), 1)
                    ]),
                    t("div", null, [
                      J[11] || (J[11] = t("span", { class: "publish-label" }, "Cloud env:", -1)),
                      $(" " + m(me.value), 1)
                    ])
                  ]),
                  t("div", V8, [
                    t("div", F8, [
                      J[12] || (J[12] = t("label", { class: "field-label" }, "Linked Cloud Environment", -1)),
                      _(Ks, {
                        modelValue: oe.value,
                        "onUpdate:modelValue": J[2] || (J[2] = (ye) => oe.value = ye),
                        options: Ue.value,
                        placeholder: "Create new cloud environment on first publish",
                        "full-width": "",
                        disabled: S.value || I.value
                      }, null, 8, ["modelValue", "options", "disabled"])
                    ]),
                    t("div", B8, [
                      _(Ce, {
                        variant: "secondary",
                        size: "xs",
                        disabled: S.value || I.value,
                        onClick: P
                      }, {
                        default: g(() => [...J[13] || (J[13] = [
                          $(" Save Link ", -1)
                        ])]),
                        _: 1
                      }, 8, ["disabled"]),
                      _(Ce, {
                        variant: "ghost",
                        size: "xs",
                        disabled: !oe.value || S.value || I.value,
                        onClick: R
                      }, {
                        default: g(() => [...J[14] || (J[14] = [
                          $(" Clear ", -1)
                        ])]),
                        _: 1
                      }, 8, ["disabled"])
                    ])
                  ]),
                  t("div", W8, [
                    _(Ce, {
                      variant: "primary",
                      size: "xs",
                      loading: U.value || I.value,
                      disabled: U.value || I.value,
                      onClick: ce
                    }, {
                      default: g(() => [
                        $(m(ne.value), 1)
                      ]),
                      _: 1
                    }, 8, ["loading", "disabled"]),
                    _(Ce, {
                      variant: "secondary",
                      size: "xs",
                      disabled: U.value || I.value,
                      onClick: A
                    }, {
                      default: g(() => [...J[15] || (J[15] = [
                        $(" Refresh ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled"])
                  ]),
                  N.value ? (n(), i("div", G8, m(N.value), 1)) : h("", !0)
                ])) : (n(), i("div", j8, [...J[17] || (J[17] = [
                  t("div", { class: "card-topline" }, "WORKING COPY", -1),
                  t("div", { class: "card-title" }, "Already published", -1),
                  t("div", { class: "card-copy" }, " Current local state matches a known published revision. Make another local change or commit before publishing again. ", -1)
                ])])),
                t("div", H8, [
                  J[22] || (J[22] = t("div", { class: "card-topline" }, "PUBLISHED REVISIONS", -1)),
                  S.value ? (n(), i("div", q8, "Loading cloud revisions...")) : E.value ? (n(), i("div", K8, m(E.value), 1)) : z.value ? q.value.length ? (n(), i("div", Q8, [
                    (n(!0), i(H, null, _e(q.value, (ye) => {
                      var ke, $e;
                      return n(), i("div", {
                        key: ye.id,
                        class: De(["revision-row", { matched: ye.id === ((ke = Ne.value) == null ? void 0 : ke.id) }])
                      }, [
                        t("div", X8, [
                          t("div", Z8, [
                            t("span", null, "r" + m(ye.revision_number), 1),
                            ye.id === (($e = Ne.value) == null ? void 0 : $e.id) ? (n(), i("span", eS, "Matches local")) : h("", !0)
                          ]),
                          t("div", tS, m(ye.source_message || "No revision message."), 1),
                          t("div", sS, [
                            t("span", null, m(ye.workflow_count) + " workflows", 1),
                            t("span", null, m(ye.node_count) + " nodes", 1),
                            t("span", null, m(ye.model_count) + " models", 1),
                            t("span", null, "Created " + m(B(ye.created_at)), 1),
                            ye.source_commit_sha ? (n(), i("span", oS, "Commit " + m(ye.source_commit_sha), 1)) : h("", !0)
                          ])
                        ])
                      ], 2);
                    }), 128))
                  ])) : (n(), i("div", Y8, [
                    J[20] || (J[20] = $(" Cloud environment ", -1)),
                    t("strong", null, m(z.value.name), 1),
                    J[21] || (J[21] = $(" exists, but it has no immutable revisions yet. ", -1))
                  ])) : (n(), i("div", J8, [
                    J[18] || (J[18] = $(" No linked cloud environment is selected for ", -1)),
                    t("strong", null, m(e.environmentName || "this environment"), 1),
                    J[19] || (J[19] = $(". Publishing will create one unless you link this local environment to an existing cloud environment above. ", -1))
                  ]))
                ])
              ])) : (n(), i("div", N8, [
                J[7] || (J[7] = t("div", { class: "blocked-title" }, "SIGN IN REQUIRED", -1)),
                J[8] || (J[8] = t("div", { class: "blocked-copy" }, " Publishing revisions is blocked until this local panel is connected to a ComfyGit Cloud account. ", -1)),
                t("div", L8, [
                  _(Ce, {
                    variant: "primary",
                    size: "xs",
                    onClick: J[1] || (J[1] = (ye) => a("navigate", "account"))
                  }, {
                    default: g(() => [...J[6] || (J[6] = [
                      $(" Sign In ", -1)
                    ])]),
                    _: 1
                  })
                ])
              ]))
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      _(Yt, {
        show: C.value,
        title: "Publish",
        onClose: J[3] || (J[3] = (ye) => C.value = !1)
      }, {
        content: g(() => [...J[23] || (J[23] = [
          t("div", { class: "info-content" }, [
            t("p", null, "This page publishes the current local environment state as an immutable cloud revision."),
            t("p", null, "It reuses export-style validation before submission so uncommitted changes and missing model source data are surfaced before publish."),
            t("p", null, "The cloud dashboard remains responsible for deployments, targets, and runtime operations.")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      te.value && D.value ? (n(), L(ru, {
        key: 0,
        issues: D.value.blocking_issues,
        mode: "publish",
        onClose: J[4] || (J[4] = (ye) => te.value = !1),
        onCommitted: Ve
      }, null, 8, ["issues"])) : h("", !0),
      ie.value && D.value ? (n(), L(uu, {
        key: 1,
        models: D.value.warnings.models_without_sources,
        mode: "publish",
        onConfirm: je,
        onCancel: J[5] || (J[5] = (ye) => ie.value = !1),
        onRevalidate: M
      }, null, 8, ["models"])) : h("", !0)
    ], 64));
  }
}), aS = /* @__PURE__ */ Se(nS, [["__scopeId", "data-v-d16eeb92"]]), lS = { class: "base-tabs" }, iS = ["disabled", "onClick"], rS = {
  key: 0,
  class: "base-tabs__badge"
}, uS = /* @__PURE__ */ xe({
  __name: "BaseTabs",
  props: {
    tabs: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: s }) {
    const o = e, a = s;
    function l(r) {
      var u;
      (u = o.tabs.find((c) => c.id === r)) != null && u.disabled || a("update:modelValue", r);
    }
    return (r, u) => (n(), i("div", lS, [
      (n(!0), i(H, null, _e(e.tabs, (c) => (n(), i("button", {
        key: c.id,
        class: De([
          "base-tabs__tab",
          {
            active: e.modelValue === c.id,
            disabled: c.disabled
          }
        ]),
        disabled: c.disabled,
        onClick: (d) => l(c.id)
      }, [
        $(m(c.label) + " ", 1),
        c.badge ? (n(), i("span", rS, m(c.badge), 1)) : h("", !0)
      ], 10, iS))), 128))
    ]));
  }
}), Rl = /* @__PURE__ */ Se(uS, [["__scopeId", "data-v-ad5e6cad"]]), cS = { class: "commit-list" }, dS = /* @__PURE__ */ xe({
  __name: "CommitList",
  setup(e) {
    return (s, o) => (n(), i("div", cS, [
      et(s.$slots, "default", {}, void 0)
    ]));
  }
}), hu = /* @__PURE__ */ Se(dS, [["__scopeId", "data-v-8c5ee761"]]), mS = { class: "commit-message" }, fS = { class: "commit-date" }, vS = /* @__PURE__ */ xe({
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
    return (r, u) => (n(), i("div", {
      class: De(["commit-item", { clickable: e.clickable }]),
      onClick: l
    }, [
      _(cu, { hash: e.hash }, null, 8, ["hash"]),
      t("span", mS, m(e.message), 1),
      t("span", fS, m(e.relativeDate), 1),
      r.$slots.actions ? (n(), i("div", {
        key: 0,
        class: "commit-actions",
        onClick: u[0] || (u[0] = st(() => {
        }, ["stop"]))
      }, [
        et(r.$slots, "actions", {}, void 0)
      ])) : h("", !0)
    ], 2));
  }
}), yu = /* @__PURE__ */ Se(vS, [["__scopeId", "data-v-dd7c621b"]]), pS = /* @__PURE__ */ xe({
  __name: "HistorySection",
  props: {
    commits: {},
    currentRef: {},
    embedded: { type: Boolean }
  },
  emits: ["select", "checkout"],
  setup(e) {
    const s = e, o = O(() => `HISTORY (${s.currentRef || "detached"})`);
    return (a, l) => (n(), L(Tt, null, ts({
      content: g(() => [
        e.commits.length === 0 ? (n(), L(is, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (n(), L(hu, { key: 1 }, {
          default: g(() => [
            (n(!0), i(H, null, _e(e.commits, (r) => (n(), L(yu, {
              key: r.hash,
              hash: r.short_hash || r.hash,
              message: r.message,
              "relative-date": r.date_relative || r.relative_date,
              onClick: (u) => a.$emit("select", r)
            }, {
              actions: g(() => [
                _(Ce, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (u) => a.$emit("checkout", r),
                  title: "Checkout this commit"
                }, {
                  default: g(() => [...l[0] || (l[0] = [
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
        fn: g(() => [
          _(Mt, { title: o.value }, null, 8, ["title"])
        ]),
        key: "0"
      }
    ]), 1024));
  }
}), gS = /* @__PURE__ */ Se(pS, [["__scopeId", "data-v-fa4bf3a1"]]), hS = { class: "branch-create-form" }, yS = { class: "form-actions" }, wS = /* @__PURE__ */ xe({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(e, { emit: s }) {
    const o = s, a = b(""), l = O(() => {
      const c = a.value.trim();
      return c.length > 0 && !c.startsWith("-") && !c.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(c);
    });
    function r() {
      l.value && (o("create", a.value.trim()), a.value = "");
    }
    function u() {
      a.value = "", o("cancel");
    }
    return (c, d) => (n(), i("div", hS, [
      _(ks, {
        modelValue: a.value,
        "onUpdate:modelValue": d[0] || (d[0] = (v) => a.value = v),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: r,
        onEscape: u
      }, null, 8, ["modelValue"]),
      t("div", yS, [
        _(Ce, {
          variant: "primary",
          size: "sm",
          disabled: !l.value,
          onClick: r
        }, {
          default: g(() => [...d[1] || (d[1] = [
            $(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        _(Ce, {
          variant: "secondary",
          size: "sm",
          onClick: u
        }, {
          default: g(() => [...d[2] || (d[2] = [
            $(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), _S = /* @__PURE__ */ Se(wS, [["__scopeId", "data-v-7c500394"]]), kS = { class: "branch-list-item__indicator" }, bS = { class: "branch-list-item__name" }, $S = {
  key: 0,
  class: "branch-list-item__actions"
}, CS = {
  key: 0,
  class: "branch-list-item__current-label"
}, xS = /* @__PURE__ */ xe({
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
      class: De(["branch-list-item", { current: e.isCurrent, clickable: e.clickable }]),
      onClick: o[0] || (o[0] = (a) => e.clickable && s.$emit("click"))
    }, [
      t("span", kS, m(e.isCurrent ? "●" : "○"), 1),
      t("span", bS, m(e.branchName), 1),
      s.$slots.actions || e.showCurrentLabel ? (n(), i("div", $S, [
        et(s.$slots, "actions", {}, void 0),
        e.isCurrent && e.showCurrentLabel ? (n(), i("span", CS, " current ")) : h("", !0)
      ])) : h("", !0)
    ], 2));
  }
}), SS = /* @__PURE__ */ Se(xS, [["__scopeId", "data-v-c6581a24"]]), IS = { class: "header-info" }, ES = { class: "branch-name" }, TS = {
  key: 0,
  class: "current-badge"
}, MS = { class: "branch-meta" }, PS = { key: 0 }, RS = {
  key: 0,
  class: "meta-note"
}, NS = {
  key: 0,
  class: "loading"
}, LS = {
  key: 1,
  class: "empty-state"
}, DS = /* @__PURE__ */ xe({
  __name: "BranchDetailModal",
  props: {
    branchName: {},
    isCurrent: { type: Boolean }
  },
  emits: ["close", "delete", "switch"],
  setup(e) {
    const s = e, { getBranchHistory: o } = ct(), a = b([]), l = b(!1), r = b(!0);
    return ot(async () => {
      try {
        const u = await o(s.branchName, 50);
        a.value = u.commits, l.value = u.has_more;
      } finally {
        r.value = !1;
      }
    }), (u, c) => (n(), L(Ct, {
      size: "md",
      "show-close-button": !1,
      onClose: c[3] || (c[3] = (d) => u.$emit("close"))
    }, {
      header: g(() => [
        t("div", IS, [
          c[4] || (c[4] = t("h3", { class: "header-title" }, "BRANCH", -1)),
          t("span", ES, m(e.branchName), 1),
          e.isCurrent ? (n(), i("span", TS, "CURRENT")) : h("", !0)
        ]),
        _(Re, {
          variant: "ghost",
          size: "sm",
          onClick: c[0] || (c[0] = (d) => u.$emit("close"))
        }, {
          default: g(() => [...c[5] || (c[5] = [
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
      body: g(() => [
        t("div", MS, [
          r.value ? (n(), i("span", PS, "Loading...")) : (n(), i(H, { key: 1 }, [
            t("span", null, m(a.value.length) + " commits", 1),
            l.value ? (n(), i("span", RS, "(showing first " + m(a.value.length) + ")", 1)) : h("", !0)
          ], 64))
        ]),
        r.value ? (n(), i("div", NS, "Loading commit history...")) : a.value.length === 0 ? (n(), i("div", LS, " No commits found on this branch ")) : (n(), L(hu, {
          key: 2,
          class: "branch-commits"
        }, {
          default: g(() => [
            (n(!0), i(H, null, _e(a.value, (d) => (n(), L(yu, {
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
      footer: g(() => [
        e.isCurrent ? h("", !0) : (n(), L(Ce, {
          key: 0,
          variant: "destructive",
          size: "sm",
          onClick: c[1] || (c[1] = (d) => u.$emit("delete", e.branchName))
        }, {
          default: g(() => [...c[6] || (c[6] = [
            $(" Delete Branch ", -1)
          ])]),
          _: 1
        })),
        c[8] || (c[8] = t("div", { class: "footer-spacer" }, null, -1)),
        e.isCurrent ? h("", !0) : (n(), L(Re, {
          key: 1,
          variant: "primary",
          onClick: c[2] || (c[2] = (d) => u.$emit("switch", e.branchName))
        }, {
          default: g(() => [...c[7] || (c[7] = [
            $(" Switch to Branch ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }));
  }
}), OS = /* @__PURE__ */ Se(DS, [["__scopeId", "data-v-2e5437cc"]]), US = {
  key: 2,
  class: "branch-list"
}, AS = /* @__PURE__ */ xe({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {},
    embedded: { type: Boolean }
  },
  emits: ["switch", "create", "delete"],
  setup(e, { emit: s }) {
    const o = s, a = b(!1), l = b(null);
    function r(f) {
      o("create", f), u();
    }
    function u() {
      a.value = !1;
    }
    function c(f) {
      l.value = f;
    }
    function d(f) {
      l.value = null, o("delete", f);
    }
    function v(f) {
      l.value = null, o("switch", f);
    }
    return (f, p) => (n(), L(Tt, null, ts({
      content: g(() => [
        a.value ? (n(), L(_S, {
          key: 0,
          onCreate: r,
          onCancel: u
        })) : h("", !0),
        e.branches.length === 0 ? (n(), L(is, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (n(), i("div", US, [
          (n(!0), i(H, null, _e(e.branches, (w) => (n(), L(SS, {
            key: w.name,
            "branch-name": w.name,
            "is-current": w.is_current,
            clickable: !0,
            "show-current-label": !0,
            onClick: (y) => c(w)
          }, {
            actions: g(() => [
              w.is_current ? h("", !0) : (n(), L(Ce, {
                key: 0,
                variant: "secondary",
                size: "xs",
                onClick: st((y) => o("switch", w.name), ["stop"])
              }, {
                default: g(() => [...p[3] || (p[3] = [
                  $(" Switch ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"]))
            ]),
            _: 2
          }, 1032, ["branch-name", "is-current", "onClick"]))), 128))
        ])),
        l.value ? (n(), L(OS, {
          key: 3,
          "branch-name": l.value.name,
          "is-current": l.value.is_current,
          onClose: p[1] || (p[1] = (w) => l.value = null),
          onDelete: d,
          onSwitch: v
        }, null, 8, ["branch-name", "is-current"])) : h("", !0)
      ]),
      _: 2
    }, [
      e.embedded ? void 0 : {
        name: "header",
        fn: g(() => [
          _(Mt, { title: "BRANCHES" }, {
            actions: g(() => [
              a.value ? h("", !0) : (n(), L(Ce, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: p[0] || (p[0] = (w) => a.value = !0)
              }, {
                default: g(() => [...p[2] || (p[2] = [
                  $(" + Create Branch ", -1)
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
}), zS = /* @__PURE__ */ Se(AS, [["__scopeId", "data-v-a3de96cc"]]);
function wu(e) {
  return "has_conflicts" in e && e.has_conflicts === !0 && Array.isArray(e.workflow_conflicts);
}
const VS = { class: "remote-url-display" }, FS = ["title"], BS = ["title"], WS = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, GS = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, jS = /* @__PURE__ */ xe({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(e) {
    const s = e, o = b(!1), a = O(() => {
      if (s.url.length <= s.maxLength)
        return s.url;
      const r = s.url.slice(0, Math.floor(s.maxLength * 0.6)), u = s.url.slice(-Math.floor(s.maxLength * 0.3));
      return `${r}...${u}`;
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
    return (r, u) => (n(), i("div", VS, [
      t("span", {
        class: "url-text",
        title: e.url
      }, m(a.value), 9, FS),
      t("button", {
        class: De(["copy-btn", { copied: o.value }]),
        onClick: l,
        title: o.value ? "Copied!" : "Copy URL"
      }, [
        o.value ? (n(), i("svg", GS, [...u[1] || (u[1] = [
          t("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (n(), i("svg", WS, [...u[0] || (u[0] = [
          t("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          t("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, BS)
    ]));
  }
}), HS = /* @__PURE__ */ Se(jS, [["__scopeId", "data-v-7768a58d"]]), qS = { class: "remote-title" }, KS = {
  key: 0,
  class: "default-badge"
}, JS = {
  key: 1,
  class: "sync-badge"
}, YS = {
  key: 0,
  class: "ahead"
}, QS = {
  key: 1,
  class: "behind"
}, XS = {
  key: 1,
  class: "synced"
}, ZS = ["href"], e5 = {
  key: 1,
  class: "remote-url-text"
}, t5 = /* @__PURE__ */ xe({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove", "pull", "push"],
  setup(e) {
    const s = e, o = O(() => s.fetchingRemote === s.remote.name), a = O(() => s.remote.is_default), l = O(() => s.syncStatus && s.syncStatus.behind > 0), r = O(() => s.syncStatus && s.syncStatus.ahead > 0), u = O(() => s.remote.push_url !== s.remote.fetch_url), c = O(() => {
      const v = s.remote.fetch_url, f = v.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return f ? `https://${f[1]}/${f[2]}` : v.startsWith("https://") || v.startsWith("http://") ? v.replace(/\.git$/, "") : null;
    }), d = O(() => s.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (v, f) => (n(), L(At, {
      status: a.value ? "synced" : void 0
    }, ts({
      icon: g(() => [
        $(m(a.value ? "🔗" : "🌐"), 1)
      ]),
      title: g(() => [
        t("div", qS, [
          t("span", null, m(e.remote.name), 1),
          a.value ? (n(), i("span", KS, "DEFAULT")) : h("", !0),
          e.syncStatus ? (n(), i("span", JS, [
            e.syncStatus.ahead > 0 || e.syncStatus.behind > 0 ? (n(), i(H, { key: 0 }, [
              e.syncStatus.ahead > 0 ? (n(), i("span", YS, "↑" + m(e.syncStatus.ahead), 1)) : h("", !0),
              e.syncStatus.behind > 0 ? (n(), i("span", QS, "↓" + m(e.syncStatus.behind), 1)) : h("", !0)
            ], 64)) : (n(), i("span", XS, "✓ synced"))
          ])) : h("", !0)
        ])
      ]),
      subtitle: g(() => [
        c.value ? (n(), i("a", {
          key: 0,
          href: c.value,
          target: "_blank",
          rel: "noopener noreferrer",
          class: "remote-url-link",
          onClick: f[0] || (f[0] = st(() => {
          }, ["stop"]))
        }, m(d.value), 9, ZS)) : (n(), i("span", e5, m(d.value), 1))
      ]),
      actions: g(() => [
        _(Ce, {
          variant: "primary",
          size: "xs",
          loading: o.value,
          onClick: f[1] || (f[1] = (p) => v.$emit("fetch", e.remote.name))
        }, {
          default: g(() => [...f[6] || (f[6] = [
            $(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        _(Ce, {
          variant: l.value ? "primary" : "secondary",
          size: "xs",
          disabled: !e.syncStatus,
          onClick: f[2] || (f[2] = (p) => v.$emit("pull", e.remote.name))
        }, {
          default: g(() => [
            $(" Pull" + m(e.syncStatus && e.syncStatus.behind > 0 ? ` ↓${e.syncStatus.behind}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        _(Ce, {
          variant: r.value ? "primary" : "secondary",
          size: "xs",
          disabled: !e.syncStatus,
          onClick: f[3] || (f[3] = (p) => v.$emit("push", e.remote.name))
        }, {
          default: g(() => [
            $(" Push" + m(e.syncStatus && e.syncStatus.ahead > 0 ? ` ↑${e.syncStatus.ahead}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        _(Ce, {
          variant: "secondary",
          size: "xs",
          onClick: f[4] || (f[4] = (p) => v.$emit("edit", e.remote.name))
        }, {
          default: g(() => [...f[7] || (f[7] = [
            $(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        a.value ? h("", !0) : (n(), L(Ce, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: f[5] || (f[5] = (p) => v.$emit("remove", e.remote.name))
        }, {
          default: g(() => [...f[8] || (f[8] = [
            $(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 2
    }, [
      u.value ? {
        name: "details",
        fn: g(() => [
          e.remote.push_url !== e.remote.fetch_url ? (n(), L(_t, {
            key: 0,
            label: "Push URL:"
          }, {
            default: g(() => [
              _(HS, {
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
}), s5 = /* @__PURE__ */ Se(t5, [["__scopeId", "data-v-8310f3a8"]]), o5 = { class: "remote-form" }, n5 = { class: "form-header" }, a5 = { class: "form-body" }, l5 = {
  key: 0,
  class: "form-error"
}, i5 = { class: "form-actions" }, r5 = /* @__PURE__ */ xe({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = b({
      name: o.remoteName,
      fetchUrl: o.fetchUrl,
      pushUrl: o.pushUrl
    }), r = b(!1), u = b(null);
    kt(() => [o.remoteName, o.fetchUrl, o.pushUrl], () => {
      l.value = {
        name: o.remoteName,
        fetchUrl: o.fetchUrl,
        pushUrl: o.pushUrl
      };
    });
    const c = O(() => l.value.name.trim() !== "" && l.value.fetchUrl.trim() !== "");
    async function d() {
      if (!(!c.value || r.value)) {
        u.value = null, r.value = !0;
        try {
          a("submit", l.value);
        } catch (v) {
          u.value = v instanceof Error ? v.message : "Failed to submit form";
        } finally {
          r.value = !1;
        }
      }
    }
    return (v, f) => (n(), i("div", o5, [
      t("div", n5, [
        _(os, null, {
          default: g(() => [
            $(m(e.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      t("div", a5, [
        _(pt, {
          label: "Remote Name",
          required: ""
        }, {
          default: g(() => [
            _(it, {
              modelValue: l.value.name,
              "onUpdate:modelValue": f[0] || (f[0] = (p) => l.value.name = p),
              disabled: e.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        _(pt, {
          label: "Fetch URL",
          required: ""
        }, {
          default: g(() => [
            _(it, {
              modelValue: l.value.fetchUrl,
              "onUpdate:modelValue": f[1] || (f[1] = (p) => l.value.fetchUrl = p),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        _(pt, { label: "Push URL (optional)" }, {
          default: g(() => [
            _(it, {
              modelValue: l.value.pushUrl,
              "onUpdate:modelValue": f[2] || (f[2] = (p) => l.value.pushUrl = p),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        u.value ? (n(), i("div", l5, m(u.value), 1)) : h("", !0)
      ]),
      t("div", i5, [
        _(Ce, {
          variant: "primary",
          size: "md",
          disabled: !c.value,
          loading: r.value,
          onClick: d
        }, {
          default: g(() => [
            $(m(e.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        _(Ce, {
          variant: "ghost",
          size: "md",
          onClick: f[3] || (f[3] = (p) => v.$emit("cancel"))
        }, {
          default: g(() => [...f[4] || (f[4] = [
            $(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), u5 = /* @__PURE__ */ Se(r5, [["__scopeId", "data-v-56021b18"]]), c5 = { class: "conflict-summary-box" }, d5 = { class: "summary-header" }, m5 = { class: "summary-text" }, f5 = { key: 0 }, v5 = {
  key: 1,
  class: "all-resolved"
}, p5 = { class: "summary-progress" }, g5 = { class: "progress-bar" }, h5 = { class: "progress-text" }, y5 = /* @__PURE__ */ xe({
  __name: "ConflictSummaryBox",
  props: {
    conflictCount: {},
    resolvedCount: {},
    operationType: {}
  },
  setup(e) {
    const s = e, o = O(
      () => s.conflictCount > 0 ? s.resolvedCount / s.conflictCount * 100 : 0
    );
    return (a, l) => (n(), i("div", c5, [
      t("div", d5, [
        l[0] || (l[0] = t("span", { class: "summary-icon" }, "⚠", -1)),
        t("div", m5, [
          t("strong", null, m(e.conflictCount) + " conflict" + m(e.conflictCount !== 1 ? "s" : "") + " detected", 1),
          e.resolvedCount < e.conflictCount ? (n(), i("p", f5, " Resolve all conflicts before " + m(e.operationType) + "ing ", 1)) : (n(), i("p", v5, " All conflicts resolved - ready to " + m(e.operationType), 1))
        ])
      ]),
      t("div", p5, [
        t("div", g5, [
          t("div", {
            class: "progress-fill",
            style: Ft({ width: o.value + "%" })
          }, null, 4)
        ]),
        t("span", h5, m(e.resolvedCount) + " / " + m(e.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), w5 = /* @__PURE__ */ Se(y5, [["__scopeId", "data-v-4e9e6cc9"]]), _5 = { class: "modal-header" }, k5 = { class: "modal-title" }, b5 = { class: "modal-body" }, $5 = {
  key: 0,
  class: "error-box"
}, C5 = {
  key: 0,
  class: "error-hint"
}, x5 = {
  key: 1,
  class: "loading-state"
}, S5 = { class: "commit-summary" }, I5 = {
  key: 0,
  class: "commits-section"
}, E5 = { class: "commit-list" }, T5 = { class: "commit-hash" }, M5 = { class: "commit-message" }, P5 = { class: "commit-date" }, R5 = {
  key: 1,
  class: "changes-section"
}, N5 = {
  key: 0,
  class: "change-group",
  open: ""
}, L5 = { class: "change-count" }, D5 = { class: "change-list" }, O5 = {
  key: 0,
  class: "conflict-badge"
}, U5 = {
  key: 1,
  class: "change-group"
}, A5 = { class: "change-count" }, z5 = { class: "change-list" }, V5 = {
  key: 2,
  class: "change-group"
}, F5 = { class: "change-count" }, B5 = { class: "change-list" }, W5 = {
  key: 3,
  class: "strategy-section"
}, G5 = { class: "radio-group" }, j5 = { class: "radio-option" }, H5 = { class: "radio-option" }, q5 = { class: "radio-option" }, K5 = {
  key: 4,
  class: "up-to-date"
}, J5 = { class: "modal-actions" }, xi = "comfygit.pullModelStrategy", Y5 = /* @__PURE__ */ xe({
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
    const o = e, a = s, l = b(localStorage.getItem(xi) || "skip");
    kt(l, (C) => {
      localStorage.setItem(xi, C);
    });
    const r = O(() => {
      var C;
      return ((C = o.error) == null ? void 0 : C.toLowerCase().includes("unrelated histories")) ?? !1;
    }), u = O(() => {
      if (!o.preview) return 0;
      const C = o.preview.changes.workflows;
      return C.added.length + C.modified.length + C.deleted.length;
    }), c = O(() => o.preview ? o.preview.changes.nodes.to_install.length : 0), d = O(() => {
      var C;
      return u.value > 0 || c.value > 0 || (((C = o.preview) == null ? void 0 : C.changes.models.count) || 0) > 0;
    }), v = O(() => o.preview && wu(o.preview) ? o.preview : null), f = O(() => {
      var C;
      return ((C = v.value) == null ? void 0 : C.workflow_conflicts.length) ?? 0;
    }), p = O(() => {
      var C;
      return ((C = o.conflictResolutions) == null ? void 0 : C.size) ?? 0;
    }), w = O(
      () => f.value > 0 && p.value === f.value
    ), y = O(() => !(!o.preview || o.preview.has_uncommitted_changes || v.value && !w.value));
    function k(C) {
      if (!v.value) return !1;
      const S = C.replace(/\.json$/, "");
      return v.value.workflow_conflicts.some((U) => U.name === S);
    }
    function x(C) {
      const S = o.conflictResolutions ? Array.from(o.conflictResolutions.values()) : void 0;
      a("pull", { modelStrategy: l.value, force: C, resolutions: S });
    }
    return (C, S) => {
      var U, I;
      return n(), L(Ot, { to: "body" }, [
        e.show ? (n(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: S[11] || (S[11] = (E) => C.$emit("close"))
        }, [
          t("div", {
            class: "modal-content",
            onClick: S[10] || (S[10] = st(() => {
            }, ["stop"]))
          }, [
            t("div", _5, [
              t("h3", k5, "PULL FROM " + m(e.remoteName.toUpperCase()), 1),
              t("button", {
                class: "modal-close",
                onClick: S[0] || (S[0] = (E) => C.$emit("close"))
              }, "✕")
            ]),
            t("div", b5, [
              e.error ? (n(), i("div", $5, [
                S[13] || (S[13] = t("span", { class: "error-icon" }, "✕", -1)),
                t("div", null, [
                  S[12] || (S[12] = t("strong", null, "PULL FAILED", -1)),
                  t("p", null, m(e.error), 1),
                  r.value ? (n(), i("p", C5, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : h("", !0)
                ])
              ])) : e.loading ? (n(), i("div", x5, [...S[14] || (S[14] = [
                t("span", { class: "spinner" }, "⟳", -1),
                $(" Loading preview... ", -1)
              ])])) : (U = e.preview) != null && U.has_uncommitted_changes ? (n(), i(H, { key: 2 }, [
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
              ], 64)) : e.preview ? (n(), i(H, { key: 3 }, [
                t("div", S5, [
                  S[17] || (S[17] = t("span", { class: "icon" }, "📥", -1)),
                  $(" " + m(e.preview.commits_behind) + " commit" + m(e.preview.commits_behind !== 1 ? "s" : "") + " from " + m(e.preview.remote) + "/" + m(e.preview.branch), 1)
                ]),
                e.preview.commits && e.preview.commits.length > 0 ? (n(), i("div", I5, [
                  S[18] || (S[18] = t("h4", { class: "section-title" }, "INCOMING COMMITS", -1)),
                  t("div", E5, [
                    (n(!0), i(H, null, _e(e.preview.commits, (E) => (n(), i("div", {
                      key: E.hash,
                      class: "commit-item"
                    }, [
                      t("span", T5, m(E.short_hash || E.hash.slice(0, 7)), 1),
                      t("span", M5, m(E.message), 1),
                      t("span", P5, m(E.date_relative || E.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                d.value ? (n(), i("div", R5, [
                  S[22] || (S[22] = t("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  u.value > 0 ? (n(), i("details", N5, [
                    t("summary", null, [
                      S[19] || (S[19] = t("span", { class: "change-type" }, "Workflows", -1)),
                      t("span", L5, m(u.value) + " changes", 1)
                    ]),
                    t("div", D5, [
                      (n(!0), i(H, null, _e(e.preview.changes.workflows.added, (E) => (n(), i("div", {
                        key: "a-" + E,
                        class: "change-item add"
                      }, " + " + m(E), 1))), 128)),
                      (n(!0), i(H, null, _e(e.preview.changes.workflows.modified, (E) => (n(), i("div", {
                        key: "m-" + E,
                        class: "change-item modify"
                      }, [
                        $(" ~ " + m(E) + " ", 1),
                        k(E) ? (n(), i("span", O5, "CONFLICT")) : h("", !0)
                      ]))), 128)),
                      (n(!0), i(H, null, _e(e.preview.changes.workflows.deleted, (E) => (n(), i("div", {
                        key: "d-" + E,
                        class: "change-item delete"
                      }, " - " + m(E), 1))), 128))
                    ])
                  ])) : h("", !0),
                  c.value > 0 ? (n(), i("details", U5, [
                    t("summary", null, [
                      S[20] || (S[20] = t("span", { class: "change-type" }, "Nodes", -1)),
                      t("span", A5, m(c.value) + " to install", 1)
                    ]),
                    t("div", z5, [
                      (n(!0), i(H, null, _e(e.preview.changes.nodes.to_install, (E) => (n(), i("div", {
                        key: E,
                        class: "change-item add"
                      }, " + " + m(E), 1))), 128))
                    ])
                  ])) : h("", !0),
                  e.preview.changes.models.count > 0 ? (n(), i("details", V5, [
                    t("summary", null, [
                      S[21] || (S[21] = t("span", { class: "change-type" }, "Models", -1)),
                      t("span", F5, m(e.preview.changes.models.count) + " referenced", 1)
                    ]),
                    t("div", B5, [
                      (n(!0), i(H, null, _e(e.preview.changes.models.referenced, (E) => (n(), i("div", {
                        key: E,
                        class: "change-item"
                      }, m(E), 1))), 128))
                    ])
                  ])) : h("", !0)
                ])) : h("", !0),
                v.value ? (n(), L(w5, {
                  key: 2,
                  "conflict-count": f.value,
                  "resolved-count": p.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : h("", !0),
                e.preview.changes.models.count > 0 ? (n(), i("div", W5, [
                  S[27] || (S[27] = t("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  t("div", G5, [
                    t("label", j5, [
                      St(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": S[1] || (S[1] = (E) => l.value = E),
                        value: "all"
                      }, null, 512), [
                        [Dn, l.value]
                      ]),
                      S[23] || (S[23] = t("span", null, "Download all models", -1))
                    ]),
                    t("label", H5, [
                      St(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": S[2] || (S[2] = (E) => l.value = E),
                        value: "required"
                      }, null, 512), [
                        [Dn, l.value]
                      ]),
                      S[24] || (S[24] = t("span", null, "Download required only", -1))
                    ]),
                    t("label", q5, [
                      St(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": S[3] || (S[3] = (E) => l.value = E),
                        value: "skip"
                      }, null, 512), [
                        [Dn, l.value]
                      ]),
                      S[25] || (S[25] = t("span", null, "Skip model downloads", -1)),
                      S[26] || (S[26] = t("span", { class: "default-badge" }, "default", -1))
                    ])
                  ]),
                  S[28] || (S[28] = t("p", { class: "strategy-hint" }, "Models can be downloaded later from MODEL INDEX", -1))
                ])) : h("", !0),
                e.preview.commits_behind === 0 ? (n(), i("div", K5, [
                  S[29] || (S[29] = t("span", { class: "icon" }, "✓", -1)),
                  $(" Already up to date with " + m(e.preview.remote) + "/" + m(e.preview.branch), 1)
                ])) : h("", !0)
              ], 64)) : h("", !0)
            ]),
            t("div", J5, [
              _(Ce, {
                variant: "secondary",
                onClick: S[4] || (S[4] = (E) => C.$emit("close"))
              }, {
                default: g(() => [...S[30] || (S[30] = [
                  $(" Cancel ", -1)
                ])]),
                _: 1
              }),
              e.error ? (n(), i(H, { key: 0 }, [
                _(Ce, {
                  variant: "secondary",
                  loading: e.pulling,
                  onClick: S[5] || (S[5] = (E) => x(!1))
                }, {
                  default: g(() => [...S[31] || (S[31] = [
                    $(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                _(Ce, {
                  variant: "destructive",
                  loading: e.pulling,
                  onClick: S[6] || (S[6] = (E) => x(!0))
                }, {
                  default: g(() => [...S[32] || (S[32] = [
                    $(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (I = e.preview) != null && I.has_uncommitted_changes ? (n(), L(Ce, {
                key: 1,
                variant: "destructive",
                loading: e.pulling,
                onClick: S[7] || (S[7] = (E) => x(!0))
              }, {
                default: g(() => [...S[33] || (S[33] = [
                  $(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : e.preview && e.preview.commits_behind > 0 ? (n(), i(H, { key: 2 }, [
                v.value && !w.value ? (n(), L(Ce, {
                  key: 0,
                  variant: "primary",
                  onClick: S[8] || (S[8] = (E) => a("openConflictResolution"))
                }, {
                  default: g(() => [
                    $(" Resolve Conflicts (" + m(p.value) + "/" + m(f.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (n(), L(Ce, {
                  key: 1,
                  variant: "primary",
                  loading: e.pulling,
                  disabled: !y.value,
                  onClick: S[9] || (S[9] = (E) => x(!1))
                }, {
                  default: g(() => [...S[34] || (S[34] = [
                    $(" Pull Changes ", -1)
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
}), Q5 = /* @__PURE__ */ Se(Y5, [["__scopeId", "data-v-1d633bba"]]), X5 = { class: "modal-header" }, Z5 = { class: "modal-title" }, e4 = { class: "modal-body" }, t4 = {
  key: 0,
  class: "loading-state"
}, s4 = {
  key: 1,
  class: "warning-box"
}, o4 = {
  key: 0,
  class: "commits-section"
}, n4 = { class: "commit-list" }, a4 = { class: "commit-hash" }, l4 = { class: "commit-message" }, i4 = { class: "commit-date" }, r4 = { class: "force-option" }, u4 = { class: "checkbox-option" }, c4 = { class: "commit-summary" }, d4 = { key: 0 }, m4 = { key: 1 }, f4 = {
  key: 0,
  class: "info-box"
}, v4 = {
  key: 1,
  class: "commits-section"
}, p4 = { class: "commit-list" }, g4 = { class: "commit-hash" }, h4 = { class: "commit-message" }, y4 = { class: "commit-date" }, w4 = {
  key: 2,
  class: "up-to-date"
}, _4 = { class: "modal-actions" }, k4 = /* @__PURE__ */ xe({
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
    const o = s, a = b(!1);
    function l(r) {
      o("push", { force: r });
    }
    return (r, u) => {
      var c, d, v;
      return n(), L(Ot, { to: "body" }, [
        e.show ? (n(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: u[7] || (u[7] = (f) => r.$emit("close"))
        }, [
          t("div", {
            class: "modal-content",
            onClick: u[6] || (u[6] = st(() => {
            }, ["stop"]))
          }, [
            t("div", X5, [
              t("h3", Z5, "PUSH TO " + m(e.remoteName.toUpperCase()), 1),
              t("button", {
                class: "modal-close",
                onClick: u[0] || (u[0] = (f) => r.$emit("close"))
              }, "✕")
            ]),
            t("div", e4, [
              e.loading ? (n(), i("div", t4, [...u[8] || (u[8] = [
                t("span", { class: "spinner" }, "⟳", -1),
                $(" Loading preview... ", -1)
              ])])) : (c = e.preview) != null && c.has_uncommitted_changes ? (n(), i("div", s4, [...u[9] || (u[9] = [
                t("span", { class: "warning-icon" }, "⚠", -1),
                t("div", null, [
                  t("strong", null, "UNCOMMITTED CHANGES"),
                  t("p", null, "Commit your changes before pushing.")
                ], -1)
              ])])) : (d = e.preview) != null && d.remote_has_new_commits ? (n(), i(H, { key: 2 }, [
                u[13] || (u[13] = t("div", { class: "warning-box" }, [
                  t("span", { class: "warning-icon" }, "⚠"),
                  t("div", null, [
                    t("strong", null, "REMOTE HAS NEW COMMITS"),
                    t("p", null, "The remote has commits you don't have locally. You should pull first to avoid overwriting changes.")
                  ])
                ], -1)),
                e.preview.commits_ahead > 0 ? (n(), i("div", o4, [
                  u[10] || (u[10] = t("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  t("div", n4, [
                    (n(!0), i(H, null, _e(e.preview.commits, (f) => (n(), i("div", {
                      key: f.hash,
                      class: "commit-item"
                    }, [
                      t("span", a4, m(f.short_hash || f.hash.slice(0, 7)), 1),
                      t("span", l4, m(f.message), 1),
                      t("span", i4, m(f.date_relative || f.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                t("div", r4, [
                  t("label", u4, [
                    St(t("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": u[1] || (u[1] = (f) => a.value = f)
                    }, null, 512), [
                      [qn, a.value]
                    ]),
                    u[11] || (u[11] = t("span", null, "Force push (overwrite remote)", -1))
                  ]),
                  u[12] || (u[12] = t("p", { class: "option-hint" }, "Uses --force-with-lease for safety", -1))
                ])
              ], 64)) : e.preview ? (n(), i(H, { key: 3 }, [
                t("div", c4, [
                  u[14] || (u[14] = t("span", { class: "icon" }, "📤", -1)),
                  e.preview.is_first_push ? (n(), i("span", d4, " Creating " + m(e.preview.remote) + "/" + m(e.preview.branch) + " with " + m(e.preview.commits_ahead) + " commit" + m(e.preview.commits_ahead !== 1 ? "s" : ""), 1)) : (n(), i("span", m4, " Pushing " + m(e.preview.commits_ahead) + " commit" + m(e.preview.commits_ahead !== 1 ? "s" : "") + " to " + m(e.preview.remote) + "/" + m(e.preview.branch), 1))
                ]),
                e.preview.is_first_push ? (n(), i("div", f4, [...u[15] || (u[15] = [
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
                e.preview.commits_ahead > 0 ? (n(), i("div", v4, [
                  u[16] || (u[16] = t("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  t("div", p4, [
                    (n(!0), i(H, null, _e(e.preview.commits, (f) => (n(), i("div", {
                      key: f.hash,
                      class: "commit-item"
                    }, [
                      t("span", g4, m(f.short_hash || f.hash.slice(0, 7)), 1),
                      t("span", h4, m(f.message), 1),
                      t("span", y4, m(f.date_relative || f.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : (n(), i("div", w4, [
                  u[17] || (u[17] = t("span", { class: "icon" }, "✓", -1)),
                  $(" Nothing to push - already up to date with " + m(e.preview.remote) + "/" + m(e.preview.branch), 1)
                ]))
              ], 64)) : h("", !0)
            ]),
            t("div", _4, [
              _(Ce, {
                variant: "secondary",
                onClick: u[2] || (u[2] = (f) => r.$emit("close"))
              }, {
                default: g(() => [...u[18] || (u[18] = [
                  $(" Cancel ", -1)
                ])]),
                _: 1
              }),
              (v = e.preview) != null && v.remote_has_new_commits ? (n(), i(H, { key: 0 }, [
                _(Ce, {
                  variant: "secondary",
                  onClick: u[3] || (u[3] = (f) => r.$emit("pull-first"))
                }, {
                  default: g(() => [...u[19] || (u[19] = [
                    $(" Pull First ", -1)
                  ])]),
                  _: 1
                }),
                _(Ce, {
                  variant: "destructive",
                  disabled: !a.value,
                  loading: e.pushing,
                  onClick: u[4] || (u[4] = (f) => l(!0))
                }, {
                  default: g(() => [...u[20] || (u[20] = [
                    $(" Force Push ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled", "loading"])
              ], 64)) : e.preview && e.preview.commits_ahead > 0 && !e.preview.has_uncommitted_changes ? (n(), L(Ce, {
                key: 1,
                variant: "primary",
                loading: e.pushing,
                onClick: u[5] || (u[5] = (f) => l(!1))
              }, {
                default: g(() => [...u[21] || (u[21] = [
                  $(" Push ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : h("", !0)
            ])
          ])
        ])) : h("", !0)
      ]);
    };
  }
}), b4 = /* @__PURE__ */ Se(k4, [["__scopeId", "data-v-3c2e35ab"]]), $4 = { class: "resolution-choice-group" }, C4 = ["disabled"], x4 = ["disabled"], S4 = /* @__PURE__ */ xe({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (n(), i("div", $4, [
      t("button", {
        class: De(["choice-btn", "mine", { selected: e.modelValue === "take_base" }]),
        onClick: o[0] || (o[0] = (a) => s.$emit("update:modelValue", "take_base")),
        disabled: e.disabled
      }, [...o[2] || (o[2] = [
        t("span", { class: "choice-icon" }, "◀", -1),
        t("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, C4),
      t("button", {
        class: De(["choice-btn", "theirs", { selected: e.modelValue === "take_target" }]),
        onClick: o[1] || (o[1] = (a) => s.$emit("update:modelValue", "take_target")),
        disabled: e.disabled
      }, [...o[3] || (o[3] = [
        t("span", { class: "choice-label" }, "Keep Theirs", -1),
        t("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, x4)
    ]));
  }
}), I4 = /* @__PURE__ */ Se(S4, [["__scopeId", "data-v-985715ed"]]), E4 = { class: "conflict-header" }, T4 = { class: "conflict-info" }, M4 = { class: "workflow-name" }, P4 = { class: "conflict-description" }, R4 = {
  key: 0,
  class: "resolved-badge"
}, N4 = { class: "resolved-text" }, L4 = { class: "conflict-hashes" }, D4 = { class: "hash-item" }, O4 = { class: "hash-item" }, U4 = { class: "conflict-actions" }, A4 = /* @__PURE__ */ xe({
  __name: "WorkflowConflictItem",
  props: {
    conflict: {},
    resolution: {},
    disabled: { type: Boolean }
  },
  emits: ["resolve"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = b(o.resolution);
    kt(() => o.resolution, (d) => {
      l.value = d;
    }), kt(l, (d) => {
      d && a("resolve", d);
    });
    const r = O(() => l.value !== null), u = O(() => o.conflict.conflict_type === "both_modified" ? "Both you and remote modified this workflow" : "Conflicting changes detected"), c = O(() => {
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
      var f, p;
      return n(), i("div", {
        class: De(["conflict-item", { resolved: r.value }])
      }, [
        t("div", E4, [
          v[2] || (v[2] = t("span", { class: "conflict-icon" }, "⚠", -1)),
          t("div", T4, [
            t("code", M4, m(e.conflict.name) + ".json", 1),
            t("div", P4, m(u.value), 1)
          ]),
          r.value ? (n(), i("div", R4, [
            v[1] || (v[1] = t("span", { class: "resolved-icon" }, "✓", -1)),
            t("span", N4, m(c.value), 1)
          ])) : h("", !0)
        ]),
        t("div", L4, [
          t("span", D4, [
            v[3] || (v[3] = $("Your: ", -1)),
            t("code", null, m(((f = e.conflict.base_hash) == null ? void 0 : f.slice(0, 8)) || "n/a"), 1)
          ]),
          t("span", O4, [
            v[4] || (v[4] = $("Theirs: ", -1)),
            t("code", null, m(((p = e.conflict.target_hash) == null ? void 0 : p.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        t("div", U4, [
          _(I4, {
            modelValue: l.value,
            "onUpdate:modelValue": v[0] || (v[0] = (w) => l.value = w),
            disabled: e.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), z4 = /* @__PURE__ */ Se(A4, [["__scopeId", "data-v-506d3bbf"]]), V4 = { class: "resolution-content" }, F4 = {
  key: 0,
  class: "error-box"
}, B4 = { class: "resolution-header" }, W4 = { class: "header-stats" }, G4 = { class: "stat" }, j4 = { class: "stat-value" }, H4 = { class: "stat resolved" }, q4 = { class: "stat-value" }, K4 = {
  key: 0,
  class: "stat pending"
}, J4 = { class: "stat-value" }, Y4 = { class: "conflicts-list" }, Q4 = {
  key: 1,
  class: "all-resolved-message"
}, X4 = /* @__PURE__ */ xe({
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
    const o = e, a = s, l = O(() => o.resolutions.size), r = O(() => o.workflowConflicts.length - l.value), u = O(() => l.value === o.workflowConflicts.length), c = O(
      () => o.operationType === "pull" ? "Validate & Pull" : "Validate & Merge"
    );
    function d(w) {
      const y = o.resolutions.get(w);
      return (y == null ? void 0 : y.resolution) ?? null;
    }
    function v(w, y) {
      a("resolve", w, y);
    }
    function f() {
      a("close");
    }
    function p() {
      a("apply");
    }
    return (w, y) => (n(), L(Ct, {
      title: `Resolve Workflow Conflicts: ${e.operationType === "pull" ? "Pull" : "Merge"}`,
      size: "lg",
      "fixed-height": !0,
      onClose: f
    }, {
      body: g(() => [
        t("div", V4, [
          e.error ? (n(), i("div", F4, [
            y[1] || (y[1] = t("span", { class: "error-icon" }, "✕", -1)),
            t("div", null, [
              y[0] || (y[0] = t("strong", null, "Validation Failed", -1)),
              t("p", null, m(e.error), 1)
            ])
          ])) : h("", !0),
          t("div", B4, [
            t("div", W4, [
              t("div", G4, [
                t("span", j4, m(e.workflowConflicts.length), 1),
                y[2] || (y[2] = t("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              t("div", H4, [
                t("span", q4, m(l.value), 1),
                y[3] || (y[3] = t("span", { class: "stat-label" }, "resolved", -1))
              ]),
              r.value > 0 ? (n(), i("div", K4, [
                t("span", J4, m(r.value), 1),
                y[4] || (y[4] = t("span", { class: "stat-label" }, "pending", -1))
              ])) : h("", !0)
            ]),
            y[5] || (y[5] = t("p", { class: "header-hint" }, " Choose which version to keep for each conflicting workflow. ", -1))
          ]),
          t("div", Y4, [
            (n(!0), i(H, null, _e(e.workflowConflicts, (k) => (n(), L(z4, {
              key: k.name,
              conflict: k,
              resolution: d(k.name),
              onResolve: (x) => v(k.name, x)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          u.value ? (n(), i("div", Q4, [
            y[6] || (y[6] = t("span", { class: "resolved-icon" }, "✓", -1)),
            t("span", null, 'All conflicts resolved! Click "' + m(c.value) + '" to continue.', 1)
          ])) : h("", !0)
        ])
      ]),
      footer: g(() => [
        _(Re, {
          variant: "secondary",
          onClick: f
        }, {
          default: g(() => [...y[7] || (y[7] = [
            $(" Cancel ", -1)
          ])]),
          _: 1
        }),
        y[8] || (y[8] = t("div", { class: "footer-spacer" }, null, -1)),
        _(Re, {
          variant: "primary",
          disabled: !u.value || e.validating,
          loading: e.validating,
          onClick: p
        }, {
          default: g(() => [
            $(m(c.value), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Z4 = /* @__PURE__ */ Se(X4, [["__scopeId", "data-v-c58d150d"]]), eI = { class: "node-conflict-item" }, tI = { class: "node-header" }, sI = { class: "node-name" }, oI = { class: "node-id" }, nI = { class: "version-comparison" }, aI = { class: "version yours" }, lI = { class: "version theirs" }, iI = { class: "chosen-version" }, rI = { class: "chosen" }, uI = { class: "chosen-reason" }, cI = { class: "affected-workflows" }, dI = { class: "wf-source" }, mI = { class: "wf-version" }, fI = /* @__PURE__ */ xe({
  __name: "NodeConflictItem",
  props: {
    conflict: {}
  },
  setup(e) {
    return (s, o) => (n(), i("div", eI, [
      t("div", tI, [
        t("code", sI, m(e.conflict.node_name), 1),
        t("span", oI, "(" + m(e.conflict.node_id) + ")", 1)
      ]),
      t("div", nI, [
        t("div", aI, [
          o[0] || (o[0] = t("span", { class: "label" }, "Your version:", -1)),
          t("code", null, m(e.conflict.base_version), 1)
        ]),
        o[2] || (o[2] = t("span", { class: "arrow" }, "→", -1)),
        t("div", lI, [
          o[1] || (o[1] = t("span", { class: "label" }, "Their version:", -1)),
          t("code", null, m(e.conflict.target_version), 1)
        ])
      ]),
      t("div", iI, [
        o[3] || (o[3] = t("span", { class: "label" }, "Will install:", -1)),
        t("code", rI, m(e.conflict.chosen_version), 1),
        t("span", uI, m(e.conflict.chosen_reason), 1)
      ]),
      t("details", cI, [
        t("summary", null, " Affected workflows (" + m(e.conflict.affected_workflows.length) + ") ", 1),
        t("ul", null, [
          (n(!0), i(H, null, _e(e.conflict.affected_workflows, (a) => (n(), i("li", {
            key: a.name
          }, [
            t("code", null, m(a.name), 1),
            t("span", dI, "(" + m(a.source === "base" ? "yours" : "theirs") + ")", 1),
            t("span", mI, "needs v" + m(a.required_version), 1)
          ]))), 128))
        ])
      ])
    ]));
  }
}), vI = /* @__PURE__ */ Se(fI, [["__scopeId", "data-v-8b626725"]]), pI = { class: "validation-content" }, gI = {
  key: 0,
  class: "compatible-message"
}, hI = { class: "conflicts-list" }, yI = {
  key: 2,
  class: "warnings-section"
}, wI = /* @__PURE__ */ xe({
  __name: "ValidationResultsModal",
  props: {
    validation: {},
    operationType: {},
    executing: { type: Boolean }
  },
  emits: ["proceed", "goBack", "cancel"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = O(() => o.validation.is_compatible ? o.operationType === "pull" ? "Pull" : "Merge" : o.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (r, u) => (n(), L(Ct, {
      title: "Compatibility Check",
      size: "lg",
      onClose: u[3] || (u[3] = (c) => a("cancel"))
    }, {
      body: g(() => [
        t("div", pI, [
          e.validation.is_compatible && e.validation.node_conflicts.length === 0 ? (n(), i("div", gI, [
            u[5] || (u[5] = t("span", { class: "icon" }, "✓", -1)),
            t("div", null, [
              u[4] || (u[4] = t("strong", null, "All clear!", -1)),
              t("p", null, "Your workflow choices are compatible. Ready to " + m(e.operationType) + ".", 1)
            ])
          ])) : e.validation.node_conflicts.length > 0 ? (n(), i(H, { key: 1 }, [
            u[6] || (u[6] = t("div", { class: "warning-header" }, [
              t("span", { class: "icon" }, "⚠"),
              t("div", null, [
                t("strong", null, "Node Version Differences"),
                t("p", null, " Your workflow choices require different versions of some nodes. The versions shown below will be installed. ")
              ])
            ], -1)),
            t("div", hI, [
              (n(!0), i(H, null, _e(e.validation.node_conflicts, (c) => (n(), L(vI, {
                key: c.node_id,
                conflict: c
              }, null, 8, ["conflict"]))), 128))
            ]),
            u[7] || (u[7] = t("div", { class: "info-box" }, [
              t("strong", null, "What happens if you proceed?"),
              t("p", null, " The highlighted versions will be installed. Workflows built with different versions may need minor adjustments. ")
            ], -1))
          ], 64)) : h("", !0),
          e.validation.warnings.length > 0 ? (n(), i("div", yI, [
            u[8] || (u[8] = t("h4", null, "Warnings", -1)),
            t("ul", null, [
              (n(!0), i(H, null, _e(e.validation.warnings, (c, d) => (n(), i("li", { key: d }, m(c), 1))), 128))
            ])
          ])) : h("", !0)
        ])
      ]),
      footer: g(() => [
        _(Re, {
          variant: "secondary",
          onClick: u[0] || (u[0] = (c) => a("cancel"))
        }, {
          default: g(() => [...u[9] || (u[9] = [
            $(" Cancel ", -1)
          ])]),
          _: 1
        }),
        u[11] || (u[11] = t("div", { class: "footer-spacer" }, null, -1)),
        _(Re, {
          variant: "secondary",
          onClick: u[1] || (u[1] = (c) => a("goBack"))
        }, {
          default: g(() => [...u[10] || (u[10] = [
            $(" ← Change Choices ", -1)
          ])]),
          _: 1
        }),
        _(Re, {
          variant: "primary",
          loading: e.executing,
          onClick: u[2] || (u[2] = (c) => a("proceed"))
        }, {
          default: g(() => [
            $(m(l.value), 1)
          ]),
          _: 1
        }, 8, ["loading"])
      ]),
      _: 1
    }));
  }
}), _I = /* @__PURE__ */ Se(wI, [["__scopeId", "data-v-fefd26ed"]]), kI = {
  key: 0,
  class: "embedded-toolbar"
}, bI = { class: "embedded-toolbar-search" }, $I = { key: 0 }, CI = /* @__PURE__ */ xe({
  __name: "RemotesSection",
  props: {
    embedded: { type: Boolean }
  },
  emits: ["toast"],
  setup(e, { emit: s }) {
    const o = s, {
      getRemotes: a,
      addRemote: l,
      removeRemote: r,
      updateRemoteUrl: u,
      fetchRemote: c,
      getRemoteSyncStatus: d,
      getPullPreview: v,
      pullFromRemote: f,
      getPushPreview: p,
      pushToRemote: w,
      validateMerge: y
    } = ct(), k = b([]), x = b(null), C = b({}), S = b(!1), U = b(null), I = b(""), E = b(!1), N = b(null), z = b(!1), q = b("add"), D = b({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), G = O(() => {
      if (!I.value.trim()) return k.value;
      const F = I.value.toLowerCase();
      return k.value.filter(
        (j) => j.name.toLowerCase().includes(F) || j.fetch_url.toLowerCase().includes(F) || j.push_url.toLowerCase().includes(F)
      );
    });
    async function Z() {
      S.value = !0, U.value = null;
      try {
        const F = await a();
        k.value = F.remotes, x.value = F.current_branch_tracking || null, await Promise.all(
          F.remotes.map(async (j) => {
            const Ee = await d(j.name);
            Ee && (C.value[j.name] = Ee);
          })
        );
      } catch (F) {
        U.value = F instanceof Error ? F.message : "Failed to load remotes";
      } finally {
        S.value = !1;
      }
    }
    function te() {
      q.value = "add", D.value = { name: "", fetchUrl: "", pushUrl: "" }, z.value = !0;
    }
    function ie(F) {
      const j = k.value.find((Ee) => Ee.name === F);
      j && (q.value = "edit", D.value = {
        name: j.name,
        fetchUrl: j.fetch_url,
        pushUrl: j.push_url
      }, z.value = !0);
    }
    async function ge(F) {
      try {
        q.value === "add" ? await l(F.name, F.fetchUrl) : await u(F.name, F.fetchUrl, F.pushUrl || void 0), z.value = !1, await Z();
      } catch (j) {
        U.value = j instanceof Error ? j.message : "Operation failed";
      }
    }
    function oe() {
      z.value = !1, D.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function X(F) {
      N.value = F;
      try {
        await c(F);
        const j = await d(F);
        j && (C.value[F] = j), o("toast", `✓ Fetched from ${F}`, "success");
      } catch (j) {
        o("toast", j instanceof Error ? j.message : "Fetch failed", "error");
      } finally {
        N.value = null;
      }
    }
    async function de(F) {
      if (confirm(`Remove remote "${F}"?`))
        try {
          await r(F), await Z();
        } catch (j) {
          U.value = j instanceof Error ? j.message : "Failed to remove remote";
        }
    }
    function Ne() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const le = b("idle"), pe = O(() => le.value === "pull_preview"), me = O(
      () => le.value === "resolving" || le.value === "validating"
    ), Ue = O(
      () => le.value === "validation_review" || le.value === "executing"
    ), se = b(!1), ne = b(null), M = b(!1), A = b(null), Q = b(!1), P = b(null), R = b(null), ce = b(/* @__PURE__ */ new Map()), Ve = b(null), je = b(null), B = O(() => P.value && wu(P.value) ? P.value : null);
    async function W(F) {
      A.value = F, le.value = "pull_preview", Q.value = !0, P.value = null, R.value = null;
      try {
        P.value = await v(F);
      } catch (j) {
        R.value = j instanceof Error ? j.message : "Failed to load pull preview";
      } finally {
        Q.value = !1;
      }
    }
    function J() {
      le.value = "idle", P.value = null, R.value = null, A.value = null;
    }
    async function ye(F) {
      if (!A.value) return;
      le.value = "executing", R.value = null;
      const j = A.value;
      try {
        const Ee = await f(j, F);
        if (Ee.rolled_back) {
          R.value = `Pull failed and was rolled back: ${Ee.error || "Unknown error"}`, le.value = "pull_preview";
          return;
        }
        Me(), le.value = "idle", o("toast", `✓ Pulled from ${j}`, "success"), await Z();
      } catch (Ee) {
        R.value = Ee instanceof Error ? Ee.message : "Pull failed", le.value = "pull_preview";
      }
    }
    function ke() {
      B.value && (le.value = "resolving", je.value = null);
    }
    function $e(F, j) {
      ce.value.set(F, { name: F, resolution: j });
    }
    function Pe() {
      le.value = "pull_preview";
    }
    async function Le() {
      le.value = "validating", je.value = null;
      try {
        const F = Array.from(ce.value.values());
        Ve.value = await y(A.value, F), le.value = "validation_review";
      } catch (F) {
        je.value = F instanceof Error ? F.message : "Validation failed", le.value = "resolving";
      }
    }
    async function Oe() {
      le.value = "executing";
      const F = A.value;
      try {
        const j = Array.from(ce.value.values()), Ee = await f(F, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: j
        });
        if (Ee.rolled_back) {
          R.value = `Pull failed and was rolled back: ${Ee.error || "Unknown error"}`, le.value = "pull_preview";
          return;
        }
        Me(), le.value = "idle", o("toast", `✓ Pulled from ${F}`, "success"), await Z();
      } catch (j) {
        R.value = j instanceof Error ? j.message : "Pull failed", le.value = "validation_review";
      }
    }
    function Te() {
      le.value = "resolving";
    }
    function Be() {
      Me(), le.value = "idle";
    }
    function Me() {
      ce.value.clear(), Ve.value = null, je.value = null, R.value = null, P.value = null, A.value = null;
    }
    async function we(F) {
      A.value = F, se.value = !0, Q.value = !0, ne.value = null;
      try {
        ne.value = await p(F);
      } catch (j) {
        U.value = j instanceof Error ? j.message : "Failed to load push preview";
      } finally {
        Q.value = !1;
      }
    }
    function ee() {
      se.value = !1, ne.value = null, A.value = null;
    }
    async function We(F) {
      if (!A.value) return;
      M.value = !0;
      const j = A.value;
      try {
        await w(j, F), ee(), o("toast", `✓ Pushed to ${j}`, "success"), await Z();
      } catch (Ee) {
        o("toast", Ee instanceof Error ? Ee.message : "Push failed", "error");
      } finally {
        M.value = !1;
      }
    }
    function V() {
      const F = A.value;
      ee(), F && W(F);
    }
    return ot(Z), (F, j) => (n(), i(H, null, [
      _(Tt, null, ts({
        content: g(() => [
          S.value ? (n(), L($s, {
            key: 0,
            message: "Loading remotes..."
          })) : U.value ? (n(), L(Cs, {
            key: 1,
            message: U.value,
            retry: !0,
            onRetry: Z
          }, null, 8, ["message"])) : (n(), i(H, { key: 2 }, [
            e.embedded && !z.value ? (n(), i("div", kI, [
              t("div", bI, [
                _(mo, {
                  modelValue: I.value,
                  "onUpdate:modelValue": j[2] || (j[2] = (Ee) => I.value = Ee),
                  placeholder: "🔍 Search remotes..."
                }, null, 8, ["modelValue"])
              ]),
              _(Ce, {
                variant: "primary",
                size: "sm",
                onClick: te
              }, {
                default: g(() => [...j[5] || (j[5] = [
                  $(" + Add Remote ", -1)
                ])]),
                _: 1
              })
            ])) : h("", !0),
            z.value ? (n(), L(u5, {
              key: 1,
              mode: q.value,
              "remote-name": D.value.name,
              "fetch-url": D.value.fetchUrl,
              "push-url": D.value.pushUrl,
              onSubmit: ge,
              onCancel: oe
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : h("", !0),
            k.value.length && !z.value ? (n(), L(gn, {
              key: 2,
              variant: "compact"
            }, {
              default: g(() => [
                $(" Total: " + m(k.value.length) + " remote" + m(k.value.length !== 1 ? "s" : "") + " ", 1),
                x.value ? (n(), i("span", $I, " • Tracking: " + m(x.value.remote) + "/" + m(x.value.branch), 1)) : h("", !0)
              ]),
              _: 1
            })) : h("", !0),
            G.value.length && !z.value ? (n(), L(bt, {
              key: 3,
              title: "REMOTES",
              count: G.value.length
            }, {
              default: g(() => [
                (n(!0), i(H, null, _e(G.value, (Ee) => (n(), L(s5, {
                  key: Ee.name,
                  remote: Ee,
                  "sync-status": C.value[Ee.name],
                  "fetching-remote": N.value,
                  onFetch: X,
                  onEdit: ie,
                  onRemove: de,
                  onPull: W,
                  onPush: we
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : h("", !0),
            !G.value.length && !z.value ? (n(), L(is, {
              key: 4,
              icon: "🌐",
              message: I.value ? `No remotes match '${I.value}'` : "No remotes configured."
            }, {
              actions: g(() => [
                _(Ce, {
                  variant: "primary",
                  onClick: te
                }, {
                  default: g(() => [...j[6] || (j[6] = [
                    $(" Add Your First Remote ", -1)
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
          fn: g(() => [
            _(Mt, {
              title: "GIT REMOTES",
              "show-info": !0,
              onInfoClick: j[0] || (j[0] = (Ee) => E.value = !0)
            }, {
              actions: g(() => [
                z.value ? h("", !0) : (n(), L(Ce, {
                  key: 0,
                  variant: "primary",
                  size: "sm",
                  onClick: te
                }, {
                  default: g(() => [...j[4] || (j[4] = [
                    $(" + Add Remote ", -1)
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
          fn: g(() => [
            z.value ? h("", !0) : (n(), L(mo, {
              key: 0,
              modelValue: I.value,
              "onUpdate:modelValue": j[1] || (j[1] = (Ee) => I.value = Ee),
              placeholder: "🔍 Search remotes..."
            }, null, 8, ["modelValue"]))
          ]),
          key: "1"
        }
      ]), 1024),
      _(Yt, {
        show: E.value,
        title: "About Git Remotes",
        onClose: j[3] || (j[3] = (Ee) => E.value = !1)
      }, {
        content: g(() => [...j[7] || (j[7] = [
          t("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          t("p", null, [
            $(" The "),
            t("strong", null, '"origin"'),
            $(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: g(() => [
          _(Ce, {
            variant: "link",
            onClick: Ne
          }, {
            default: g(() => [...j[8] || (j[8] = [
              $(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      _(Q5, {
        show: pe.value,
        "remote-name": A.value || "",
        preview: P.value,
        loading: Q.value,
        pulling: le.value === "executing",
        error: R.value,
        "conflict-resolutions": ce.value,
        onClose: J,
        onPull: ye,
        onOpenConflictResolution: ke
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      _(b4, {
        show: se.value,
        "remote-name": A.value || "",
        preview: ne.value,
        loading: Q.value,
        pushing: M.value,
        onClose: ee,
        onPush: We,
        onPullFirst: V
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing"]),
      me.value && B.value ? (n(), L(Z4, {
        key: 0,
        "workflow-conflicts": B.value.workflow_conflicts,
        resolutions: ce.value,
        "operation-type": "pull",
        validating: le.value === "validating",
        error: je.value,
        onClose: Pe,
        onResolve: $e,
        onApply: Le
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : h("", !0),
      Ue.value && Ve.value ? (n(), L(_I, {
        key: 1,
        validation: Ve.value,
        "operation-type": "pull",
        executing: le.value === "executing",
        onProceed: Oe,
        onGoBack: Te,
        onCancel: Be
      }, null, 8, ["validation", "executing"])) : h("", !0)
    ], 64));
  }
}), xI = /* @__PURE__ */ Se(CI, [["__scopeId", "data-v-7815d273"]]), SI = /* @__PURE__ */ xe({
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
    const o = e, a = s, l = [
      { id: "history", label: "History" },
      { id: "branches", label: "Branches" },
      { id: "remotes", label: "Remotes" }
    ], r = b(o.initialTab ?? "history");
    return kt(() => o.initialTab, (u) => {
      u && (r.value = u);
    }), (u, c) => (n(), L(Tt, null, {
      header: g(() => [
        _(Mt, { title: "VERSION CONTROL" })
      ]),
      search: g(() => [
        _(Rl, {
          modelValue: r.value,
          "onUpdate:modelValue": c[0] || (c[0] = (d) => r.value = d),
          tabs: l
        }, null, 8, ["modelValue"])
      ]),
      content: g(() => [
        r.value === "history" ? (n(), L(gS, {
          key: 0,
          embedded: "",
          commits: e.commits,
          "current-ref": e.currentRef,
          onSelect: c[1] || (c[1] = (d) => a("select", d)),
          onCheckout: c[2] || (c[2] = (d) => a("checkout", d))
        }, null, 8, ["commits", "current-ref"])) : r.value === "branches" ? (n(), L(zS, {
          key: 1,
          embedded: "",
          branches: e.branches,
          current: e.current,
          onSwitch: c[3] || (c[3] = (d) => a("switch", d)),
          onCreate: c[4] || (c[4] = (d) => a("create", d)),
          onDelete: c[5] || (c[5] = (d) => a("delete", d))
        }, null, 8, ["branches", "current"])) : (n(), L(xI, {
          key: 2,
          embedded: "",
          onToast: c[6] || (c[6] = (d) => a("toast", d[0], d[1]))
        }))
      ]),
      _: 1
    }));
  }
});
async function _u(e) {
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
const II = { class: "text-viewer-wrapper" }, EI = ["disabled", "title"], TI = { class: "text-content" }, MI = /* @__PURE__ */ xe({
  __name: "TextViewer",
  props: {
    content: {}
  },
  setup(e) {
    const s = e, o = b(null), a = b("idle");
    async function l() {
      if (s.content)
        try {
          await _u(s.content), a.value = "copied", setTimeout(() => {
            a.value = "idle";
          }, 2e3);
        } catch (c) {
          console.error("Failed to copy text:", c);
        }
    }
    function r(c) {
      (c.ctrlKey || c.metaKey) && c.key === "c" && c.stopPropagation();
    }
    function u(c) {
      c.stopPropagation();
    }
    return (c, d) => (n(), i("div", II, [
      t("div", {
        ref_key: "textOutputElement",
        ref: o,
        class: "text-output",
        tabindex: "0",
        onKeydown: r,
        onCopy: u
      }, [
        t("button", {
          class: "copy-overlay-btn",
          onClick: l,
          disabled: a.value !== "idle",
          title: a.value === "copied" ? "Copied!" : "Copy text"
        }, m(a.value === "copied" ? "Copied!" : "Copy"), 9, EI),
        t("pre", TI, m(e.content), 1)
      ], 544)
    ]));
  }
}), PI = /* @__PURE__ */ Se(MI, [["__scopeId", "data-v-85a537ba"]]), RI = {
  key: 1,
  class: "manifest-viewer-shell"
}, NI = { class: "manifest-path" }, LI = /* @__PURE__ */ xe({
  __name: "ManifestSection",
  props: {
    embedded: { type: Boolean }
  },
  setup(e) {
    const { getEnvironmentManifest: s } = ct(), o = b(!1), a = b(null), l = b(!1), r = b({
      path: "",
      exists: !1,
      content: ""
    });
    async function u() {
      o.value = !0, a.value = null;
      try {
        r.value = await s();
      } catch (c) {
        a.value = c instanceof Error ? c.message : "Failed to load manifest";
      } finally {
        o.value = !1;
      }
    }
    return ot(u), (c, d) => (n(), i(H, null, [
      _(Tt, null, ts({
        content: g(() => [
          o.value ? (n(), L($s, {
            key: 0,
            message: "Loading manifest..."
          })) : a.value ? (n(), L(Cs, {
            key: 1,
            message: a.value,
            retry: !0,
            onRetry: u
          }, null, 8, ["message"])) : (n(), i(H, { key: 2 }, [
            !r.value.exists || !r.value.content ? (n(), L(is, {
              key: 0,
              icon: "📄",
              message: "No manifest content available"
            })) : (n(), i("div", RI, [
              _(PI, {
                content: r.value.content
              }, null, 8, ["content"])
            ]))
          ], 64))
        ]),
        _: 2
      }, [
        e.embedded ? void 0 : {
          name: "header",
          fn: g(() => [
            _(Mt, {
              title: "MANIFEST (PYPROJECT.TOML)",
              "show-info": !0,
              onInfoClick: d[0] || (d[0] = (v) => l.value = !0)
            }, {
              actions: g(() => [
                _(Ce, {
                  variant: "secondary",
                  size: "sm",
                  onClick: u,
                  disabled: o.value
                }, {
                  default: g(() => [
                    $(m(o.value ? "Loading..." : "Refresh"), 1)
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
      _(Yt, {
        show: l.value,
        title: "About Manifest View",
        onClose: d[2] || (d[2] = (v) => l.value = !1)
      }, {
        content: g(() => [
          d[3] || (d[3] = t("p", null, [
            $(" This view shows the live "),
            t("strong", null, "pyproject.toml"),
            $(" from the current environment's "),
            t("strong", null, ".cec"),
            $(" directory. ")
          ], -1)),
          d[4] || (d[4] = t("p", { style: { "margin-top": "var(--cg-space-2)" } }, " It is read-only and intended for quick inspection and debugging without leaving the ComfyGit panel. ", -1)),
          d[5] || (d[5] = t("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Path: ", -1)),
          t("div", NI, [
            t("code", null, m(r.value.path || "unknown"), 1)
          ]),
          d[6] || (d[6] = t("p", { style: { "margin-top": "var(--cg-space-2)" } }, null, -1))
        ]),
        actions: g(() => [
          _(Ce, {
            variant: "primary",
            onClick: d[1] || (d[1] = (v) => l.value = !1)
          }, {
            default: g(() => [...d[7] || (d[7] = [
              $(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), DI = /* @__PURE__ */ Se(LI, [["__scopeId", "data-v-814a8fdd"]]), OI = { class: "log-viewer-wrapper" }, UI = ["disabled", "title"], AI = /* @__PURE__ */ xe({
  __name: "LogViewer",
  props: {
    logs: {},
    rawFormat: { type: Boolean }
  },
  setup(e) {
    const s = e, o = b(null), a = b("idle"), l = O(() => s.logs.map((v) => ({
      text: s.rawFormat || !v.timestamp ? v.message : `${v.timestamp} - ${v.name} - ${v.level} - ${v.func}:${v.line} - ${v.message}`,
      level: v.level
    })));
    async function r() {
      var f;
      await Rt();
      const v = (f = o.value) == null ? void 0 : f.closest(".panel-layout-content");
      v && (v.scrollTop = v.scrollHeight);
    }
    ot(r), kt(() => s.logs, r);
    async function u() {
      if (l.value.length === 0) return;
      const v = l.value.map((f) => f.text).join(`
`);
      try {
        await _u(v), a.value = "copied", setTimeout(() => {
          a.value = "idle";
        }, 2e3);
      } catch (f) {
        console.error("Failed to copy logs:", f);
      }
    }
    function c(v) {
      (v.ctrlKey || v.metaKey) && v.key === "c" && v.stopPropagation();
    }
    function d(v) {
      v.stopPropagation();
    }
    return (v, f) => (n(), i("div", OI, [
      t("div", {
        ref_key: "logOutputElement",
        ref: o,
        class: "log-output",
        onKeydown: c,
        onCopy: d,
        tabindex: "0"
      }, [
        t("button", {
          class: "copy-overlay-btn",
          onClick: u,
          disabled: a.value !== "idle",
          title: a.value === "copied" ? "Copied!" : "Copy all logs"
        }, m(a.value === "copied" ? "Copied!" : "Copy"), 9, UI),
        (n(!0), i(H, null, _e(l.value, (p, w) => (n(), i("div", {
          key: w,
          class: De(`log-line log-level-${p.level.toLowerCase()}`)
        }, m(p.text), 3))), 128))
      ], 544)
    ]));
  }
}), ku = /* @__PURE__ */ Se(AI, [["__scopeId", "data-v-5aaf1b88"]]), zI = /* @__PURE__ */ xe({
  __name: "DebugEnvSection",
  props: {
    embedded: { type: Boolean }
  },
  setup(e) {
    const { getEnvironmentLogs: s, getStatus: o, getEnvironmentLogPath: a, openFile: l } = ct(), r = b([]), u = b(!1), c = b(null), d = b(!1), v = b("production"), f = b(null), p = b(!1);
    async function w() {
      u.value = !0, c.value = null;
      try {
        r.value = await s(void 0, 500);
        try {
          const x = await o();
          v.value = x.environment || "production";
        } catch {
        }
      } catch (x) {
        c.value = x instanceof Error ? x.message : "Failed to load environment logs";
      } finally {
        u.value = !1;
      }
    }
    async function y() {
      try {
        const x = await a();
        x.exists && (f.value = x.path);
      } catch {
      }
    }
    async function k() {
      if (f.value) {
        p.value = !0;
        try {
          await l(f.value);
        } catch (x) {
          console.error("Failed to open log file:", x);
        } finally {
          p.value = !1;
        }
      }
    }
    return ot(() => {
      w(), y();
    }), (x, C) => (n(), i(H, null, [
      _(Tt, null, ts({
        content: g(() => [
          u.value ? (n(), L($s, {
            key: 0,
            message: "Loading environment logs..."
          })) : c.value ? (n(), L(Cs, {
            key: 1,
            message: c.value,
            retry: !0,
            onRetry: w
          }, null, 8, ["message"])) : (n(), i(H, { key: 2 }, [
            r.value.length === 0 ? (n(), L(is, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (n(), L(ku, {
              key: 1,
              logs: r.value
            }, null, 8, ["logs"]))
          ], 64))
        ]),
        _: 2
      }, [
        e.embedded ? void 0 : {
          name: "header",
          fn: g(() => [
            _(Mt, {
              title: "DEBUG (ENVIRONMENT LOGS)",
              "show-info": !0,
              onInfoClick: C[0] || (C[0] = (S) => d.value = !0)
            }, {
              actions: g(() => [
                _(Ce, {
                  variant: "secondary",
                  size: "sm",
                  onClick: k,
                  disabled: !f.value || p.value,
                  title: "Open log file in default editor"
                }, {
                  default: g(() => [
                    $(m(p.value ? "Opening..." : "Open Log File"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                _(Ce, {
                  variant: "secondary",
                  size: "sm",
                  onClick: w,
                  disabled: u.value
                }, {
                  default: g(() => [
                    $(m(u.value ? "Loading..." : "Refresh"), 1)
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
      _(Yt, {
        show: d.value,
        title: "About Environment Logs",
        onClose: C[2] || (C[2] = (S) => d.value = !1)
      }, {
        content: g(() => [
          t("p", null, [
            C[3] || (C[3] = $(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            t("strong", null, m(v.value), 1),
            C[4] || (C[4] = $(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          C[5] || (C[5] = t("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
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
        actions: g(() => [
          _(Ce, {
            variant: "primary",
            onClick: C[1] || (C[1] = (S) => d.value = !1)
          }, {
            default: g(() => [...C[6] || (C[6] = [
              $(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Si = /* @__PURE__ */ xe({
  __name: "WorkspaceDebugSection",
  props: {
    embedded: { type: Boolean },
    initialTab: {}
  },
  setup(e) {
    const {
      getWorkspaceLogs: s,
      getWorkspaceLogPath: o,
      getOrchestratorLogs: a,
      getOrchestratorLogPath: l,
      openFile: r
    } = ct(), u = e, c = b(u.initialTab ?? "workspace"), d = b([]), v = b(!1), f = b(null), p = b(!1), w = b(null), y = b(null), k = b(!1), x = O(() => c.value === "workspace" ? w.value : y.value);
    async function C() {
      v.value = !0, f.value = null;
      try {
        c.value === "workspace" ? d.value = await s(void 0, 500) : d.value = await a(void 0, 500);
      } catch (I) {
        f.value = I instanceof Error ? I.message : `Failed to load ${c.value} logs`;
      } finally {
        v.value = !1;
      }
    }
    async function S() {
      try {
        const [I, E] = await Promise.all([
          o(),
          l()
        ]);
        I.exists && (w.value = I.path), E.exists && (y.value = E.path);
      } catch {
      }
    }
    async function U() {
      if (x.value) {
        k.value = !0;
        try {
          await r(x.value);
        } catch (I) {
          console.error("Failed to open log file:", I);
        } finally {
          k.value = !1;
        }
      }
    }
    return kt(c, () => {
      C();
    }), kt(() => u.initialTab, (I) => {
      I && (c.value = I);
    }), ot(() => {
      C(), S();
    }), (I, E) => (n(), i(H, null, [
      _(Tt, null, ts({
        content: g(() => [
          v.value ? (n(), L($s, {
            key: 0,
            message: `Loading ${c.value} logs...`
          }, null, 8, ["message"])) : f.value ? (n(), L(Cs, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: C
          }, null, 8, ["message"])) : (n(), i(H, { key: 2 }, [
            d.value.length === 0 ? (n(), L(is, {
              key: 0,
              icon: "📝",
              message: `No ${c.value} logs available`
            }, null, 8, ["message"])) : (n(), L(ku, {
              key: 1,
              logs: d.value,
              "raw-format": c.value === "orchestrator"
            }, null, 8, ["logs", "raw-format"]))
          ], 64))
        ]),
        _: 2
      }, [
        e.embedded ? void 0 : {
          name: "header",
          fn: g(() => [
            _(Mt, {
              title: "DEBUG (LOGS)",
              "show-info": !0,
              onInfoClick: E[0] || (E[0] = (N) => p.value = !0)
            }, {
              actions: g(() => [
                _(Ce, {
                  variant: "secondary",
                  size: "sm",
                  onClick: U,
                  disabled: !x.value || k.value,
                  title: "Open log file in default editor"
                }, {
                  default: g(() => [
                    $(m(k.value ? "Opening..." : "Open Log File"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                _(Ce, {
                  variant: "secondary",
                  size: "sm",
                  onClick: C,
                  disabled: v.value
                }, {
                  default: g(() => [
                    $(m(v.value ? "Loading..." : "Refresh"), 1)
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
          fn: g(() => [
            _(Rl, {
              modelValue: c.value,
              "onUpdate:modelValue": E[1] || (E[1] = (N) => c.value = N),
              tabs: [
                { id: "workspace", label: "Workspace" },
                { id: "orchestrator", label: "Orchestrator" }
              ]
            }, null, 8, ["modelValue"])
          ]),
          key: "1"
        }
      ]), 1024),
      _(Yt, {
        show: p.value,
        title: "About Logs",
        onClose: E[3] || (E[3] = (N) => p.value = !1)
      }, {
        content: g(() => [...E[4] || (E[4] = [
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
        actions: g(() => [
          _(Ce, {
            variant: "primary",
            onClick: E[2] || (E[2] = (N) => p.value = !1)
          }, {
            default: g(() => [...E[5] || (E[5] = [
              $(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), VI = /* @__PURE__ */ xe({
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
    ], a = b(s.initialTab ?? "manifest"), l = b(!1);
    return kt(() => s.initialTab, (r) => {
      r && (a.value = r);
    }), (r, u) => (n(), i(H, null, [
      _(Tt, null, {
        header: g(() => [
          _(Mt, {
            title: "DIAGNOSTICS",
            "show-info": !0,
            onInfoClick: u[0] || (u[0] = (c) => l.value = !0)
          })
        ]),
        search: g(() => [
          _(Rl, {
            modelValue: a.value,
            "onUpdate:modelValue": u[1] || (u[1] = (c) => a.value = c),
            tabs: o
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          a.value === "manifest" ? (n(), L(DI, {
            key: 0,
            embedded: ""
          })) : a.value === "env" ? (n(), L(zI, {
            key: 1,
            embedded: ""
          })) : a.value === "workspace" ? (n(), L(Si, {
            key: 2,
            embedded: "",
            "initial-tab": "workspace"
          })) : (n(), L(Si, {
            key: 3,
            embedded: "",
            "initial-tab": "orchestrator"
          }))
        ]),
        _: 1
      }),
      _(Yt, {
        show: l.value,
        title: "About Diagnostics",
        "max-width": "520px",
        onClose: u[3] || (u[3] = (c) => l.value = !1)
      }, {
        content: g(() => [...u[4] || (u[4] = [
          t("p", null, [
            t("strong", null, "Diagnostics"),
            $(" groups read-only inspection and log surfaces for the current environment and workspace. ")
          ], -1),
          t("p", null, " Use this area when you need to inspect what ComfyGit is tracking or debug environment and supervisor behavior without leaving the panel. ", -1),
          t("p", null, [
            t("strong", null, "Manifest"),
            t("br"),
            $(" Shows the live "),
            t("strong", null, "pyproject.toml"),
            $(" from the current environment's "),
            t("strong", null, ".cec"),
            $(" directory. This is useful for inspecting tracked workflow, model, node, and contract state. ")
          ], -1),
          t("p", null, [
            t("strong", null, "Env Logs"),
            t("br"),
            $(" Shows logs for the currently active environment. Use these when debugging workflow execution, model resolution, node installation, or other environment-local issues. ")
          ], -1),
          t("p", null, [
            t("strong", null, "Workspace Logs"),
            t("br"),
            $(" Shows workspace-wide events that affect more than one environment. ")
          ], -1),
          t("p", null, [
            t("strong", null, "Orchestrator Logs"),
            t("br"),
            $(" Shows supervisor and handoff logs for environment creation, switching, restarts, and other process-management behavior. ")
          ], -1)
        ])]),
        actions: g(() => [
          _(Ce, {
            variant: "primary",
            size: "sm",
            onClick: u[2] || (u[2] = (c) => l.value = !1)
          }, {
            default: g(() => [...u[5] || (u[5] = [
              $(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), FI = { class: "header-info" }, BI = { class: "commit-hash" }, WI = {
  key: 0,
  class: "commit-refs"
}, GI = { class: "commit-message" }, jI = { class: "commit-date" }, HI = {
  key: 0,
  class: "loading"
}, qI = {
  key: 1,
  class: "changes-section"
}, KI = { class: "stats-row" }, JI = { class: "stat" }, YI = { class: "stat insertions" }, QI = { class: "stat deletions" }, XI = {
  key: 0,
  class: "change-group"
}, ZI = {
  key: 1,
  class: "change-group"
}, e6 = {
  key: 0,
  class: "version"
}, t6 = {
  key: 2,
  class: "change-group"
}, s6 = { class: "change-item" }, o6 = /* @__PURE__ */ xe({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(e) {
    const s = e, { getCommitDetail: o } = ct(), a = b(null), l = b(!0), r = O(() => {
      if (!a.value) return !1;
      const c = a.value.changes.workflows;
      return c.added.length > 0 || c.modified.length > 0 || c.deleted.length > 0;
    }), u = O(() => {
      if (!a.value) return !1;
      const c = a.value.changes.nodes;
      return c.added.length > 0 || c.removed.length > 0;
    });
    return ot(async () => {
      try {
        a.value = await o(s.commit.hash);
      } finally {
        l.value = !1;
      }
    }), (c, d) => (n(), L(Ct, {
      size: "md",
      "show-close-button": !1,
      onClose: d[3] || (d[3] = (v) => c.$emit("close"))
    }, {
      header: g(() => {
        var v, f, p, w;
        return [
          t("div", FI, [
            d[4] || (d[4] = t("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            t("span", BI, m(((v = a.value) == null ? void 0 : v.short_hash) || e.commit.short_hash || ((f = e.commit.hash) == null ? void 0 : f.slice(0, 7))), 1),
            (w = (p = a.value) == null ? void 0 : p.refs) != null && w.length ? (n(), i("span", WI, [
              (n(!0), i(H, null, _e(a.value.refs, (y) => (n(), i("span", {
                key: y,
                class: "ref-badge"
              }, m(y), 1))), 128))
            ])) : h("", !0)
          ]),
          _(Re, {
            variant: "ghost",
            size: "sm",
            onClick: d[0] || (d[0] = (y) => c.$emit("close"))
          }, {
            default: g(() => [...d[5] || (d[5] = [
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
      body: g(() => {
        var v, f;
        return [
          t("div", GI, m(((v = a.value) == null ? void 0 : v.message) || e.commit.message), 1),
          t("div", jI, m(((f = a.value) == null ? void 0 : f.date_relative) || e.commit.date_relative || e.commit.relative_date), 1),
          l.value ? (n(), i("div", HI, "Loading details...")) : a.value ? (n(), i("div", qI, [
            t("div", KI, [
              t("span", JI, m(a.value.stats.files_changed) + " files", 1),
              t("span", YI, "+" + m(a.value.stats.insertions), 1),
              t("span", QI, "-" + m(a.value.stats.deletions), 1)
            ]),
            r.value ? (n(), i("div", XI, [
              _(Ls, { variant: "section" }, {
                default: g(() => [...d[6] || (d[6] = [
                  $("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (n(!0), i(H, null, _e(a.value.changes.workflows.added, (p) => (n(), i("div", {
                key: "add-" + p,
                class: "change-item added"
              }, [
                d[7] || (d[7] = t("span", { class: "change-icon" }, "+", -1)),
                t("span", null, m(p), 1)
              ]))), 128)),
              (n(!0), i(H, null, _e(a.value.changes.workflows.modified, (p) => (n(), i("div", {
                key: "mod-" + p,
                class: "change-item modified"
              }, [
                d[8] || (d[8] = t("span", { class: "change-icon" }, "~", -1)),
                t("span", null, m(p), 1)
              ]))), 128)),
              (n(!0), i(H, null, _e(a.value.changes.workflows.deleted, (p) => (n(), i("div", {
                key: "del-" + p,
                class: "change-item deleted"
              }, [
                d[9] || (d[9] = t("span", { class: "change-icon" }, "-", -1)),
                t("span", null, m(p), 1)
              ]))), 128))
            ])) : h("", !0),
            u.value ? (n(), i("div", ZI, [
              _(Ls, { variant: "section" }, {
                default: g(() => [...d[10] || (d[10] = [
                  $("NODES", -1)
                ])]),
                _: 1
              }),
              (n(!0), i(H, null, _e(a.value.changes.nodes.added, (p) => (n(), i("div", {
                key: "add-" + p.name,
                class: "change-item added"
              }, [
                d[11] || (d[11] = t("span", { class: "change-icon" }, "+", -1)),
                t("span", null, m(p.name), 1),
                p.version ? (n(), i("span", e6, "(" + m(p.version) + ")", 1)) : h("", !0)
              ]))), 128)),
              (n(!0), i(H, null, _e(a.value.changes.nodes.removed, (p) => (n(), i("div", {
                key: "rem-" + p.name,
                class: "change-item deleted"
              }, [
                d[12] || (d[12] = t("span", { class: "change-icon" }, "-", -1)),
                t("span", null, m(p.name), 1)
              ]))), 128))
            ])) : h("", !0),
            a.value.changes.models.resolved > 0 ? (n(), i("div", t6, [
              _(Ls, { variant: "section" }, {
                default: g(() => [...d[13] || (d[13] = [
                  $("MODELS", -1)
                ])]),
                _: 1
              }),
              t("div", s6, [
                d[14] || (d[14] = t("span", { class: "change-icon" }, "●", -1)),
                t("span", null, m(a.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : h("", !0)
          ])) : h("", !0)
        ];
      }),
      footer: g(() => [
        _(Re, {
          variant: "secondary",
          onClick: d[1] || (d[1] = (v) => c.$emit("createBranch", e.commit))
        }, {
          default: g(() => [...d[15] || (d[15] = [
            $(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        _(Re, {
          variant: "primary",
          onClick: d[2] || (d[2] = (v) => c.$emit("checkout", e.commit))
        }, {
          default: g(() => [...d[16] || (d[16] = [
            $(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), n6 = /* @__PURE__ */ Se(o6, [["__scopeId", "data-v-d256ff6d"]]), a6 = { class: "popover-header" }, l6 = { class: "popover-body" }, i6 = {
  key: 0,
  class: "changes-summary"
}, r6 = {
  key: 0,
  class: "change-item"
}, u6 = {
  key: 1,
  class: "change-item"
}, c6 = {
  key: 2,
  class: "change-item"
}, d6 = {
  key: 3,
  class: "change-item"
}, m6 = {
  key: 4,
  class: "change-item"
}, f6 = {
  key: 5,
  class: "change-item"
}, v6 = {
  key: 1,
  class: "no-changes"
}, p6 = {
  key: 2,
  class: "loading"
}, g6 = {
  key: 3,
  class: "issues-error"
}, h6 = { class: "error-header" }, y6 = { class: "error-title" }, w6 = { class: "issues-list" }, _6 = { class: "workflow-state" }, k6 = { class: "message-section" }, b6 = { class: "popover-footer" }, $6 = {
  key: 1,
  class: "commit-popover"
}, C6 = { class: "popover-header" }, x6 = { class: "popover-body" }, S6 = {
  key: 0,
  class: "changes-summary"
}, I6 = {
  key: 0,
  class: "change-item"
}, E6 = {
  key: 1,
  class: "change-item"
}, T6 = {
  key: 2,
  class: "change-item"
}, M6 = {
  key: 3,
  class: "change-item"
}, P6 = {
  key: 4,
  class: "change-item"
}, R6 = {
  key: 5,
  class: "change-item"
}, N6 = {
  key: 1,
  class: "no-changes"
}, L6 = {
  key: 2,
  class: "loading"
}, D6 = {
  key: 3,
  class: "issues-error"
}, O6 = { class: "error-header" }, U6 = { class: "error-title" }, A6 = { class: "issues-list" }, z6 = { class: "workflow-state" }, V6 = { class: "message-section" }, F6 = { class: "popover-footer" }, B6 = /* @__PURE__ */ xe({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(e, { emit: s }) {
    const o = e, a = s, { commit: l } = ct(), r = b(""), u = b(!1), c = b(!1), d = O(() => {
      if (!o.status) return !1;
      const k = o.status.workflows;
      return k.new.length > 0 || k.modified.length > 0 || k.deleted.length > 0 || o.status.has_changes;
    }), v = O(() => {
      if (!o.status) return !1;
      const k = o.status.workflows, x = o.status.git_changes;
      return k.new.length > 0 || k.modified.length > 0 || k.deleted.length > 0 || x.nodes_added.length > 0 || x.nodes_removed.length > 0;
    }), f = O(() => {
      var k;
      return (k = o.status) != null && k.workflows.analyzed ? o.status.workflows.analyzed.filter((x) => x.has_issues) : [];
    }), p = O(() => f.value.length > 0), w = O(() => p.value && !c.value);
    async function y() {
      var k, x, C, S;
      if (!(p.value && !c.value) && !(!d.value || !r.value.trim() || u.value)) {
        u.value = !0;
        try {
          const U = await l(r.value.trim(), c.value);
          if (U.status === "success") {
            const I = `Committed: ${((k = U.summary) == null ? void 0 : k.new) || 0} new, ${((x = U.summary) == null ? void 0 : x.modified) || 0} modified, ${((C = U.summary) == null ? void 0 : C.deleted) || 0} deleted`;
            a("committed", { success: !0, message: I });
          } else if (U.status === "no_changes")
            a("committed", { success: !1, message: "No changes to commit" });
          else if (U.status === "blocked") {
            const I = ((S = U.issues) == null ? void 0 : S.map((E) => `${E.name}: ${E.issue}`).join("; ")) || "Unknown issues";
            a("committed", { success: !1, message: `Commit blocked - ${I}. Enable "Allow issues" to force.` });
          } else
            a("committed", { success: !1, message: U.message || "Commit failed" });
        } catch (U) {
          a("committed", { success: !1, message: U instanceof Error ? U.message : "Commit failed" });
        } finally {
          u.value = !1;
        }
      }
    }
    return (k, x) => e.asModal ? (n(), L(Ot, {
      key: 0,
      to: "body"
    }, [
      t("div", {
        class: "modal-overlay",
        onClick: x[5] || (x[5] = (C) => a("close"))
      }, [
        t("div", {
          class: "commit-popover modal",
          onClick: x[4] || (x[4] = st(() => {
          }, ["stop"]))
        }, [
          t("div", a6, [
            x[11] || (x[11] = t("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            t("button", {
              class: "close-btn",
              onClick: x[0] || (x[0] = (C) => a("close"))
            }, [...x[10] || (x[10] = [
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
          t("div", l6, [
            e.status && d.value ? (n(), i("div", i6, [
              e.status.workflows.new.length ? (n(), i("div", r6, [
                x[12] || (x[12] = t("span", { class: "change-icon new" }, "+", -1)),
                t("span", null, m(e.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : h("", !0),
              e.status.workflows.modified.length ? (n(), i("div", u6, [
                x[13] || (x[13] = t("span", { class: "change-icon modified" }, "~", -1)),
                t("span", null, m(e.status.workflows.modified.length) + " modified", 1)
              ])) : h("", !0),
              e.status.workflows.deleted.length ? (n(), i("div", c6, [
                x[14] || (x[14] = t("span", { class: "change-icon deleted" }, "-", -1)),
                t("span", null, m(e.status.workflows.deleted.length) + " deleted", 1)
              ])) : h("", !0),
              e.status.git_changes.nodes_added.length ? (n(), i("div", d6, [
                x[15] || (x[15] = t("span", { class: "change-icon new" }, "+", -1)),
                t("span", null, m(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : h("", !0),
              e.status.git_changes.nodes_removed.length ? (n(), i("div", m6, [
                x[16] || (x[16] = t("span", { class: "change-icon deleted" }, "-", -1)),
                t("span", null, m(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : h("", !0),
              v.value ? h("", !0) : (n(), i("div", f6, [...x[17] || (x[17] = [
                t("span", { class: "change-icon modified" }, "~", -1),
                t("span", null, "Configuration updated", -1)
              ])]))
            ])) : e.status ? (n(), i("div", v6, " No changes to commit ")) : (n(), i("div", p6, " Loading... ")),
            p.value ? (n(), i("div", g6, [
              t("div", h6, [
                x[18] || (x[18] = t("span", { class: "error-icon" }, "⚠", -1)),
                t("span", y6, m(f.value.length) + " workflow(s) have issues", 1)
              ]),
              t("div", w6, [
                (n(!0), i(H, null, _e(f.value, (C) => (n(), i("div", {
                  key: C.name,
                  class: "issue-item"
                }, [
                  t("strong", null, m(C.name), 1),
                  t("span", _6, "(" + m(C.sync_state) + ")", 1),
                  $(": " + m(C.issue_summary), 1)
                ]))), 128))
              ]),
              _(Yn, {
                modelValue: c.value,
                "onUpdate:modelValue": x[1] || (x[1] = (C) => c.value = C),
                class: "allow-issues-toggle"
              }, {
                default: g(() => [...x[19] || (x[19] = [
                  $(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : h("", !0),
            t("div", k6, [
              _(Js, {
                modelValue: r.value,
                "onUpdate:modelValue": x[2] || (x[2] = (C) => r.value = C),
                placeholder: w.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
                disabled: !d.value || u.value || w.value,
                rows: 3,
                "submit-on-enter": !0,
                onCtrlEnter: y,
                onSubmit: y
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ])
          ]),
          t("div", b6, [
            _(Re, {
              variant: "secondary",
              onClick: x[3] || (x[3] = (C) => a("close"))
            }, {
              default: g(() => [...x[20] || (x[20] = [
                $(" Cancel ", -1)
              ])]),
              _: 1
            }),
            _(Re, {
              variant: c.value ? "danger" : "primary",
              disabled: !d.value || !r.value.trim() || u.value || w.value,
              loading: u.value,
              onClick: y
            }, {
              default: g(() => [
                $(m(u.value ? "Committing..." : c.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (n(), i("div", $6, [
      t("div", C6, [
        x[22] || (x[22] = t("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        t("button", {
          class: "close-btn",
          onClick: x[6] || (x[6] = (C) => a("close"))
        }, [...x[21] || (x[21] = [
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
      t("div", x6, [
        e.status && d.value ? (n(), i("div", S6, [
          e.status.workflows.new.length ? (n(), i("div", I6, [
            x[23] || (x[23] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, m(e.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : h("", !0),
          e.status.workflows.modified.length ? (n(), i("div", E6, [
            x[24] || (x[24] = t("span", { class: "change-icon modified" }, "~", -1)),
            t("span", null, m(e.status.workflows.modified.length) + " modified", 1)
          ])) : h("", !0),
          e.status.workflows.deleted.length ? (n(), i("div", T6, [
            x[25] || (x[25] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, m(e.status.workflows.deleted.length) + " deleted", 1)
          ])) : h("", !0),
          e.status.git_changes.nodes_added.length ? (n(), i("div", M6, [
            x[26] || (x[26] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, m(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : h("", !0),
          e.status.git_changes.nodes_removed.length ? (n(), i("div", P6, [
            x[27] || (x[27] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, m(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : h("", !0),
          v.value ? h("", !0) : (n(), i("div", R6, [...x[28] || (x[28] = [
            t("span", { class: "change-icon modified" }, "~", -1),
            t("span", null, "Configuration updated", -1)
          ])]))
        ])) : e.status ? (n(), i("div", N6, " No changes to commit ")) : (n(), i("div", L6, " Loading... ")),
        p.value ? (n(), i("div", D6, [
          t("div", O6, [
            x[29] || (x[29] = t("span", { class: "error-icon" }, "⚠", -1)),
            t("span", U6, m(f.value.length) + " workflow(s) have issues", 1)
          ]),
          t("div", A6, [
            (n(!0), i(H, null, _e(f.value, (C) => (n(), i("div", {
              key: C.name,
              class: "issue-item"
            }, [
              t("strong", null, m(C.name), 1),
              t("span", z6, "(" + m(C.sync_state) + ")", 1),
              $(": " + m(C.issue_summary), 1)
            ]))), 128))
          ]),
          _(Yn, {
            modelValue: c.value,
            "onUpdate:modelValue": x[7] || (x[7] = (C) => c.value = C),
            class: "allow-issues-toggle"
          }, {
            default: g(() => [...x[30] || (x[30] = [
              $(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : h("", !0),
        t("div", V6, [
          _(Js, {
            modelValue: r.value,
            "onUpdate:modelValue": x[8] || (x[8] = (C) => r.value = C),
            placeholder: w.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
            disabled: !d.value || u.value || w.value,
            rows: 3,
            "submit-on-enter": !0,
            onCtrlEnter: y,
            onSubmit: y
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ])
      ]),
      t("div", F6, [
        _(Re, {
          variant: "secondary",
          onClick: x[9] || (x[9] = (C) => a("close"))
        }, {
          default: g(() => [...x[31] || (x[31] = [
            $(" Cancel ", -1)
          ])]),
          _: 1
        }),
        _(Re, {
          variant: c.value ? "danger" : "primary",
          disabled: !d.value || !r.value.trim() || u.value || w.value,
          loading: u.value,
          onClick: y
        }, {
          default: g(() => [
            $(m(u.value ? "Committing..." : c.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), bu = /* @__PURE__ */ Se(B6, [["__scopeId", "data-v-5f897631"]]), W6 = { class: "modal-header" }, G6 = { class: "modal-body" }, j6 = { class: "switch-message" }, H6 = { class: "switch-details" }, q6 = { class: "modal-actions" }, K6 = /* @__PURE__ */ xe({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (s, o) => (n(), L(Ot, { to: "body" }, [
      e.show ? (n(), i("div", {
        key: 0,
        class: "modal-overlay",
        onClick: o[4] || (o[4] = (a) => s.$emit("close"))
      }, [
        t("div", {
          class: "modal-content",
          onClick: o[3] || (o[3] = st(() => {
          }, ["stop"]))
        }, [
          t("div", W6, [
            o[5] || (o[5] = t("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            t("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (a) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", G6, [
            t("p", j6, [
              o[6] || (o[6] = $(" Switch from ", -1)),
              t("strong", null, m(e.fromEnvironment), 1),
              o[7] || (o[7] = $(" to ", -1)),
              t("strong", null, m(e.toEnvironment), 1),
              o[8] || (o[8] = $("? ", -1))
            ]),
            o[9] || (o[9] = t("div", { class: "warning-box" }, [
              t("span", { class: "warning-icon" }, "⚠"),
              t("span", null, "This will restart ComfyUI")
            ], -1)),
            t("p", H6, ' Your current work will be preserved. You can switch back to "' + m(e.fromEnvironment) + '" anytime. ', 1),
            o[10] || (o[10] = t("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          t("div", q6, [
            _(Ce, {
              variant: "secondary",
              onClick: o[1] || (o[1] = (a) => s.$emit("close"))
            }, {
              default: g(() => [...o[11] || (o[11] = [
                $(" Cancel ", -1)
              ])]),
              _: 1
            }),
            _(Ce, {
              variant: "primary",
              onClick: o[2] || (o[2] = (a) => s.$emit("confirm"))
            }, {
              default: g(() => [...o[12] || (o[12] = [
                $(" Switch ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : h("", !0)
    ]));
  }
}), J6 = /* @__PURE__ */ Se(K6, [["__scopeId", "data-v-e9c5253e"]]), Y6 = {
  key: 0,
  class: "modal-overlay"
}, Q6 = { class: "modal-content" }, X6 = { class: "modal-body" }, Z6 = { class: "progress-info" }, eE = { class: "progress-percentage" }, tE = { class: "progress-state" }, sE = { class: "switch-steps" }, oE = { class: "step-icon" }, nE = { class: "step-label" }, aE = /* @__PURE__ */ xe({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(e) {
    const s = e, o = O(() => {
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
    }), a = O(() => s.state === "complete" ? "success" : s.state === "critical_failure" || s.state === "rolled_back" ? "error" : "default"), l = O(() => {
      const r = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], u = r.findIndex((c) => c.state === s.state);
      return r.map((c, d) => {
        let v = "pending", f = "○";
        return d < u ? (v = "completed", f = "✓") : d === u && (v = "active", f = "⟳"), {
          ...c,
          status: v,
          icon: f
        };
      });
    });
    return (r, u) => (n(), L(Ot, { to: "body" }, [
      e.show ? (n(), i("div", Y6, [
        t("div", Q6, [
          u[1] || (u[1] = t("div", { class: "modal-header" }, [
            t("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          t("div", X6, [
            _(iu, {
              progress: e.progress,
              variant: a.value
            }, null, 8, ["progress", "variant"]),
            t("div", Z6, [
              t("div", eE, m(e.progress) + "%", 1),
              t("div", tE, m(o.value), 1)
            ]),
            t("div", sE, [
              (n(!0), i(H, null, _e(l.value, (c) => (n(), i("div", {
                key: c.state,
                class: De(["switch-step", c.status])
              }, [
                t("span", oE, m(c.icon), 1),
                t("span", nE, m(c.label), 1)
              ], 2))), 128))
            ]),
            u[0] || (u[0] = t("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : h("", !0)
    ]));
  }
}), lE = /* @__PURE__ */ Se(aE, [["__scopeId", "data-v-768a5078"]]), iE = { class: "modal-header" }, rE = { class: "modal-body" }, uE = {
  key: 0,
  class: "node-section"
}, cE = { class: "node-list" }, dE = {
  key: 1,
  class: "node-section"
}, mE = { class: "node-list" }, fE = { class: "modal-actions" }, vE = /* @__PURE__ */ xe({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (s, o) => (n(), L(Ot, { to: "body" }, [
      e.show ? (n(), i("div", {
        key: 0,
        class: "modal-overlay",
        onClick: o[4] || (o[4] = (a) => s.$emit("close"))
      }, [
        t("div", {
          class: "modal-content",
          onClick: o[3] || (o[3] = st(() => {
          }, ["stop"]))
        }, [
          t("div", iE, [
            o[5] || (o[5] = t("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            t("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (a) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", rE, [
            o[8] || (o[8] = t("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            e.mismatchDetails.missing_nodes.length ? (n(), i("div", uE, [
              o[6] || (o[6] = t("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              t("div", cE, [
                (n(!0), i(H, null, _e(e.mismatchDetails.missing_nodes, (a) => (n(), i("div", {
                  key: a,
                  class: "node-item add"
                }, " + " + m(a), 1))), 128))
              ])
            ])) : h("", !0),
            e.mismatchDetails.extra_nodes.length ? (n(), i("div", dE, [
              o[7] || (o[7] = t("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              t("div", mE, [
                (n(!0), i(H, null, _e(e.mismatchDetails.extra_nodes, (a) => (n(), i("div", {
                  key: a,
                  class: "node-item remove"
                }, " - " + m(a), 1))), 128))
              ])
            ])) : h("", !0),
            o[9] || (o[9] = t("div", { class: "warning-box" }, [
              t("span", { class: "warning-icon" }, "⚠"),
              t("span", null, "This may take several minutes")
            ], -1))
          ]),
          t("div", fE, [
            _(Ce, {
              variant: "secondary",
              onClick: o[1] || (o[1] = (a) => s.$emit("close"))
            }, {
              default: g(() => [...o[10] || (o[10] = [
                $(" Cancel ", -1)
              ])]),
              _: 1
            }),
            _(Ce, {
              variant: "primary",
              onClick: o[2] || (o[2] = (a) => s.$emit("confirm"))
            }, {
              default: g(() => [...o[11] || (o[11] = [
                $(" Sync Now ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : h("", !0)
    ]));
  }
}), pE = /* @__PURE__ */ Se(vE, [["__scopeId", "data-v-7cad7518"]]), gE = [
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
], En = "v0.0.24", hE = "Akatz", yE = { class: "social-buttons" }, wE = ["title", "aria-label", "onClick"], _E = {
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, kE = ["d"], bE = ["title", "aria-label", "onClick"], $E = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, CE = ["d"], xE = /* @__PURE__ */ xe({
  __name: "SocialButtons",
  setup(e) {
    function s(o) {
      window.open(o, "_blank", "noopener,noreferrer");
    }
    return (o, a) => (n(), i("div", yE, [
      (n(!0), i(H, null, _e(Ye(gE), (l) => (n(), i(H, {
        key: l.id
      }, [
        l.label ? (n(), i("button", {
          key: 0,
          class: "icon-btn sponsor-btn",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (r) => s(l.url)
        }, [
          $(m(l.label) + " ", 1),
          (n(), i("svg", _E, [
            t("path", {
              d: l.iconPath
            }, null, 8, kE)
          ]))
        ], 8, wE)) : (n(), i("button", {
          key: 1,
          class: "icon-btn social-link",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (r) => s(l.url)
        }, [
          (n(), i("svg", $E, [
            t("path", {
              d: l.iconPath
            }, null, 8, CE)
          ]))
        ], 8, bE))
      ], 64))), 128))
    ]));
  }
}), $u = /* @__PURE__ */ Se(xE, [["__scopeId", "data-v-4f846342"]]), SE = { class: "footer-info" }, IE = ["title"], EE = {
  key: 0,
  class: "dev-badge"
}, TE = { class: "made-by" }, ME = /* @__PURE__ */ xe({
  __name: "FooterInfo",
  setup(e) {
    const { getConfig: s } = ct(), o = b(null), a = b(null), l = b(null), r = O(() => o.value === "development"), u = O(() => {
      var d;
      if (!r.value) return En;
      const c = [a.value, (d = l.value) == null ? void 0 : d.slice(0, 7)].filter(Boolean).join(" @ ");
      return c ? `${En} (${c})` : `${En} (development)`;
    });
    return ot(async () => {
      try {
        const c = await s();
        o.value = c.manager_source ?? null, a.value = c.manager_branch ?? null, l.value = c.manager_commit ?? null;
      } catch {
        o.value = null;
      }
    }), (c, d) => (n(), i("div", SE, [
      t("span", {
        class: "version",
        title: u.value
      }, [
        $(m(Ye(En)) + " ", 1),
        r.value ? (n(), i("span", EE, "dev")) : h("", !0)
      ], 8, IE),
      t("span", TE, [
        d[0] || (d[0] = $(" made with ", -1)),
        d[1] || (d[1] = t("svg", {
          class: "heart-icon",
          width: "10",
          height: "10",
          viewBox: "0 0 16 16",
          fill: "currentColor"
        }, [
          t("path", { d: "M8 14s-5.5-3.5-5.5-7A3.5 3.5 0 0 1 6 3.5c1.1 0 2 .5 2 .5s.9-.5 2-.5a3.5 3.5 0 0 1 3.5 3.5c0 3.5-5.5 7-5.5 7z" })
        ], -1)),
        $(" by " + m(Ye(hE)), 1)
      ])
    ]));
  }
}), Cu = /* @__PURE__ */ Se(ME, [["__scopeId", "data-v-4fa265b3"]]), PE = /* @__PURE__ */ xe({
  __name: "WorkspaceSettingsModal",
  props: {
    workspacePath: {}
  },
  emits: ["close"],
  setup(e, { emit: s }) {
    const o = b(null);
    async function a() {
      var r;
      await ((r = o.value) == null ? void 0 : r.saveSettings());
    }
    function l() {
      console.log("[ComfyGit] Settings saved from modal");
    }
    return (r, u) => (n(), L(Ct, {
      title: "WORKSPACE SETTINGS",
      size: "lg",
      "show-close-button": !0,
      onClose: u[1] || (u[1] = (c) => r.$emit("close"))
    }, {
      body: g(() => [
        _(ou, {
          ref_key: "contentRef",
          ref: o,
          "workspace-path": e.workspacePath,
          onSaved: l
        }, null, 8, ["workspace-path"])
      ]),
      footer: g(() => {
        var c;
        return [
          _(Re, {
            variant: "primary",
            disabled: !((c = o.value) != null && c.hasChanges),
            onClick: a
          }, {
            default: g(() => [...u[2] || (u[2] = [
              $(" Save Changes ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          _(Re, {
            variant: "secondary",
            onClick: u[0] || (u[0] = (d) => r.$emit("close"))
          }, {
            default: g(() => [...u[3] || (u[3] = [
              $(" Close ", -1)
            ])]),
            _: 1
          })
        ];
      }),
      _: 1
    }));
  }
}), RE = /* @__PURE__ */ Se(PE, [["__scopeId", "data-v-fac00ae7"]]), NE = { class: "header-actions" }, LE = {
  key: 0,
  class: "wizard-step"
}, DE = { class: "form-field" }, OE = ["placeholder"], UE = {
  key: 0,
  class: "form-error"
}, AE = { class: "form-field form-field--checkbox" }, zE = { class: "form-checkbox" }, VE = {
  key: 0,
  class: "form-field"
}, FE = ["placeholder"], BE = {
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
}, qE = {
  key: 0,
  class: "progress-check-loading"
}, KE = {
  key: 0,
  class: "cli-warning"
}, JE = { class: "cli-warning-header" }, YE = {
  key: 1,
  class: "env-landing"
}, QE = { class: "env-list" }, XE = ["value"], ZE = { class: "env-name" }, eT = {
  key: 2,
  class: "env-create"
}, tT = { class: "form-field" }, sT = { class: "form-field" }, oT = ["value"], nT = { class: "form-field" }, aT = ["disabled"], lT = ["value"], iT = { class: "form-field" }, rT = ["value"], uT = { class: "form-field form-field--checkbox" }, cT = { class: "form-checkbox" }, dT = {
  key: 0,
  class: "form-error"
}, mT = {
  key: 1,
  class: "env-creating"
}, fT = { class: "creating-intro" }, vT = {
  key: 3,
  class: "env-import"
}, pT = { class: "wizard-footer" }, gT = { class: "wizard-footer-actions" }, ho = 10, hT = 600 * 1e3, Ii = 1800 * 1e3, yT = /* @__PURE__ */ xe({
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
      validatePath: u,
      createEnvironment: c,
      getCreateProgress: d,
      getImportProgress: v,
      getComfyUIReleases: f
    } = ct(), p = b(o.initialStep || 1), w = b(null), y = b("landing"), k = b(!1), x = b(!1), C = b(!1), S = b(!1), U = b(null), I = b(o.initialStep === 2), E = b(o.defaultPath), N = b(!!o.detectedModelsDir), z = b(o.detectedModelsDir || ""), q = b(null), D = b(null), G = b(null), Z = b(null), te = b("my-new-env"), ie = b(au), ge = b("latest"), oe = b(lu), X = b(!0), de = b(null), Ne = b(null), le = b([{ tag_name: "latest", name: "Latest", published_at: "" }]), pe = b(!1), me = b(!1), Ue = b(!1), se = b({ progress: 0, message: "" }), ne = b({ progress: 0, message: "" }), M = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], A = b(0), Q = b(null), P = b(0), R = b(null), ce = O(() => {
      var V, F;
      const we = (V = E.value) == null ? void 0 : V.trim(), ee = !q.value, We = !N.value || !D.value && ((F = z.value) == null ? void 0 : F.trim());
      return we && ee && We;
    }), Ve = O(() => {
      var we;
      return (we = te.value) == null ? void 0 : we.trim();
    }), je = O(() => !!(p.value === 2 || Ne.value || o.setupState === "empty_workspace" || o.setupState === "unmanaged")), B = O(() => Ne.value || o.workspacePath || null);
    async function W() {
      var we;
      if (q.value = null, !!((we = E.value) != null && we.trim()))
        try {
          const ee = await u({ path: E.value, type: "workspace" });
          ee.valid || (q.value = ee.error || "Invalid path");
        } catch (ee) {
          q.value = ee instanceof Error ? ee.message : "Validation failed";
        }
    }
    async function J() {
      var we;
      if (D.value = null, G.value = null, Z.value = null, !!((we = z.value) != null && we.trim()))
        try {
          const ee = await u({ path: z.value, type: "models" });
          if (ee.valid)
            Z.value = ee.model_count ?? null;
          else if (D.value = ee.error || "Invalid path", ee.suggestion) {
            G.value = ee.suggestion, z.value = ee.suggestion, D.value = null;
            const We = await u({ path: ee.suggestion, type: "models" });
            We.valid && (Z.value = We.model_count ?? null);
          }
        } catch (ee) {
          D.value = ee instanceof Error ? ee.message : "Validation failed";
        }
    }
    async function ye() {
      var we, ee, We, V, F;
      if (q.value = null, D.value = null, await W(), (we = q.value) != null && we.includes("already exists")) {
        q.value = null, Ne.value = ((ee = E.value) == null ? void 0 : ee.trim()) || o.defaultPath, p.value = 2, $e();
        return;
      }
      if (!q.value && !(N.value && ((We = z.value) != null && We.trim()) && (await J(), D.value))) {
        me.value = !0;
        try {
          await l({
            workspace_path: ((V = E.value) == null ? void 0 : V.trim()) || o.defaultPath,
            models_directory: N.value && ((F = z.value) == null ? void 0 : F.trim()) || null
          }), A.value = 0, Q.value = Date.now();
          const j = setInterval(async () => {
            var Ee;
            if (Q.value && Date.now() - Q.value > hT) {
              clearInterval(j), me.value = !1, q.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const T = await r();
              if (A.value = 0, T.state === "idle" && me.value) {
                clearInterval(j), me.value = !1, q.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              se.value = { progress: T.progress, message: T.message }, T.state === "complete" ? (clearInterval(j), me.value = !1, Ne.value = ((Ee = E.value) == null ? void 0 : Ee.trim()) || o.defaultPath, p.value = 2, $e()) : T.state === "error" && (clearInterval(j), me.value = !1, q.value = T.error || "Workspace creation failed");
            } catch (T) {
              A.value++, console.warn(`Polling failure ${A.value}/${ho}:`, T), A.value >= ho && (clearInterval(j), me.value = !1, q.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (j) {
          me.value = !1, q.value = j instanceof Error ? j.message : "Failed to create workspace";
        }
      }
    }
    async function ke() {
      Ue.value = !0, de.value = null;
      try {
        const we = {
          name: te.value.trim() || "my-new-env",
          python_version: ie.value,
          comfyui_version: ge.value,
          torch_backend: oe.value,
          switch_after: X.value,
          workspace_path: Ne.value || void 0
          // Pass workspace path for first-time setup
        };
        if ((await c(we)).status === "started") {
          P.value = 0, R.value = Date.now();
          const We = setInterval(async () => {
            if (R.value && Date.now() - R.value > Ii) {
              clearInterval(We), Ue.value = !1, de.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const V = await d();
              if (P.value = 0, V.state === "idle" && Ue.value) {
                clearInterval(We), Ue.value = !1, de.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              if (ne.value = {
                progress: V.progress ?? 0,
                message: V.message,
                phase: V.phase
              }, V.state === "complete") {
                clearInterval(We), Ue.value = !1;
                const F = V.environment_name || we.name;
                X.value ? a("complete", F, Ne.value) : (y.value = "landing", a("environment-created-no-switch", F));
              } else V.state === "error" && (clearInterval(We), Ue.value = !1, de.value = V.error || "Environment creation failed");
            } catch (V) {
              P.value++, console.warn(`Polling failure ${P.value}/${ho}:`, V), P.value >= ho && (clearInterval(We), Ue.value = !1, de.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (we) {
        Ue.value = !1, de.value = we instanceof Error ? we.message : "Unknown error";
      }
    }
    async function $e() {
      pe.value = !0;
      try {
        le.value = await f();
      } catch (we) {
        console.error("Failed to load ComfyUI releases:", we);
      } finally {
        pe.value = !1;
      }
    }
    function Pe() {
      w.value && a("switch-environment", w.value, Ne.value);
    }
    function Le() {
      y.value === "create" || y.value === "import" ? y.value = "landing" : p.value === 2 && o.setupState === "no_workspace" && (p.value = 1);
    }
    function Oe(we, ee) {
      x.value = !1, ee ? a("complete", we, Ne.value) : (a("environment-created-no-switch", we), y.value = "landing");
    }
    function Te() {
    }
    ot(async () => {
      if (o.detectedModelsDir && (z.value = o.detectedModelsDir), o.workspacePath && (Ne.value = o.workspacePath), p.value === 2) {
        $e();
        const we = setTimeout(() => {
          I.value = !1;
        }, 3e3);
        await Be(), clearTimeout(we), I.value = !1;
      }
    });
    async function Be() {
      try {
        const we = await d();
        if (console.log("[ComfyGit] Create progress check:", we.state, we), we.state === "creating") {
          console.log("[ComfyGit] Resuming in-progress environment creation:", we.environment_name), y.value = "create", Ue.value = !0, te.value = we.environment_name || "my-new-env", ne.value = {
            progress: we.progress ?? 0,
            message: we.message,
            phase: we.phase
          }, Me();
          return;
        }
      } catch (we) {
        console.log("[ComfyGit] Create progress check failed:", we);
      }
      try {
        const we = await v();
        console.log("[ComfyGit] Import progress check:", we.state, we), we.state === "importing" && (console.log("[ComfyGit] Resuming in-progress import:", we.environment_name), U.value = {
          message: we.message || "Importing...",
          phase: we.phase || "",
          progress: we.progress ?? 0,
          environmentName: we.environment_name || ""
        }, S.value = !0, y.value = "import", x.value = !0);
      } catch (we) {
        console.log("[ComfyGit] Import progress check failed:", we);
      }
    }
    async function Me() {
      P.value = 0, R.value = Date.now();
      let we = null;
      const ee = async () => {
        if (R.value && Date.now() - R.value > Ii)
          return we && clearInterval(we), Ue.value = !1, de.value = "Environment creation timed out. Check server logs for details.", !1;
        try {
          const V = await d();
          if (P.value = 0, V.state === "idle" && Ue.value)
            return we && clearInterval(we), Ue.value = !1, de.value = "Environment creation was interrupted. Please try again.", !1;
          if (ne.value = {
            progress: V.progress ?? 0,
            message: V.message,
            phase: V.phase
          }, V.state === "complete") {
            we && clearInterval(we), Ue.value = !1;
            const F = V.environment_name || te.value;
            return a("complete", F, Ne.value), !1;
          } else if (V.state === "error")
            return we && clearInterval(we), Ue.value = !1, de.value = V.error || "Environment creation failed", !1;
          return !0;
        } catch (V) {
          return P.value++, console.warn(`Polling failure ${P.value}/${ho}:`, V), P.value >= ho ? (we && clearInterval(we), Ue.value = !1, de.value = "Lost connection to server. Please refresh and try again.", !1) : !0;
        }
      };
      await ee() && (we = setInterval(async () => {
        !await ee() && we && clearInterval(we);
      }, 2e3));
    }
    return (we, ee) => (n(), i(H, null, [
      _(Ct, {
        size: "lg",
        "show-close-button": !1,
        "close-on-overlay-click": !1,
        onClose: ee[15] || (ee[15] = (We) => we.$emit("close"))
      }, {
        header: g(() => [
          ee[20] || (ee[20] = t("h3", { class: "base-modal-title" }, "WELCOME TO COMFYGIT", -1)),
          t("div", NE, [
            _($u),
            ee[19] || (ee[19] = t("span", { class: "header-divider" }, null, -1)),
            je.value ? (n(), i("button", {
              key: 0,
              class: "icon-btn settings-btn",
              title: "Workspace Settings",
              onClick: ee[0] || (ee[0] = (We) => k.value = !0)
            }, [...ee[17] || (ee[17] = [
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
              onClick: ee[1] || (ee[1] = (We) => we.$emit("close")),
              title: "Close"
            }, [...ee[18] || (ee[18] = [
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
        body: g(() => {
          var We;
          return [
            p.value === 1 ? (n(), i("div", LE, [
              ee[24] || (ee[24] = t("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
              t("div", DE, [
                ee[21] || (ee[21] = t("label", { class: "form-label" }, "Workspace Path", -1)),
                St(t("input", {
                  "onUpdate:modelValue": ee[2] || (ee[2] = (V) => E.value = V),
                  type: "text",
                  class: "form-input",
                  placeholder: e.defaultPath
                }, null, 8, OE), [
                  [xo, E.value]
                ]),
                q.value ? (n(), i("p", UE, m(q.value), 1)) : h("", !0)
              ]),
              t("div", AE, [
                t("label", zE, [
                  St(t("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": ee[3] || (ee[3] = (V) => N.value = V)
                  }, null, 512), [
                    [qn, N.value]
                  ]),
                  ee[22] || (ee[22] = t("span", null, "I have existing ComfyUI models", -1))
                ])
              ]),
              N.value ? (n(), i("div", VE, [
                ee[23] || (ee[23] = t("label", { class: "form-label" }, "Models Directory", -1)),
                St(t("input", {
                  "onUpdate:modelValue": ee[4] || (ee[4] = (V) => z.value = V),
                  type: "text",
                  class: "form-input",
                  placeholder: e.detectedModelsDir || "/path/to/models"
                }, null, 8, FE), [
                  [xo, z.value]
                ]),
                e.detectedModelsDir && !z.value ? (n(), i("p", BE, " Detected: " + m(e.detectedModelsDir), 1)) : h("", !0),
                G.value ? (n(), i("p", WE, " Did you mean: " + m(G.value), 1)) : h("", !0),
                D.value ? (n(), i("p", GE, m(D.value), 1)) : h("", !0),
                Z.value !== null && !D.value ? (n(), i("p", jE, " Found " + m(Z.value) + " model files ", 1)) : h("", !0)
              ])) : h("", !0),
              me.value ? (n(), L(Jn, {
                key: 1,
                progress: se.value.progress,
                message: se.value.message
              }, null, 8, ["progress", "message"])) : h("", !0)
            ])) : h("", !0),
            p.value === 2 ? (n(), i("div", HE, [
              I.value ? (n(), i("div", qE, [...ee[25] || (ee[25] = [
                t("div", { class: "loading-spinner" }, null, -1),
                t("div", { class: "loading-text" }, "Checking for in-progress operations...", -1)
              ])])) : (n(), i(H, { key: 1 }, [
                !o.cliInstalled && !C.value ? (n(), i("div", KE, [
                  t("div", JE, [
                    ee[27] || (ee[27] = t("span", { class: "cli-warning-icon" }, "!", -1)),
                    ee[28] || (ee[28] = t("span", { class: "cli-warning-title" }, "ComfyGit CLI Not Installed", -1)),
                    t("button", {
                      class: "cli-warning-close",
                      onClick: ee[5] || (ee[5] = (V) => C.value = !0),
                      title: "Dismiss"
                    }, [...ee[26] || (ee[26] = [
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
                  ee[29] || (ee[29] = t("p", { class: "cli-warning-text" }, " To start managed environments from the command line, you'll need the ComfyGit CLI. This is required to restart ComfyUI in managed mode after switching environments. ", -1)),
                  ee[30] || (ee[30] = t("div", { class: "cli-warning-commands" }, [
                    t("code", null, "pipx install comfygit"),
                    t("span", { class: "cli-warning-or" }, "or"),
                    t("code", null, "uv tool install comfygit")
                  ], -1))
                ])) : h("", !0),
                y.value === "landing" ? (n(), i("div", YE, [
                  ee[34] || (ee[34] = t("p", { class: "wizard-intro" }, " Now let's set up your first environment. ", -1)),
                  t("button", {
                    class: "landing-option",
                    onClick: ee[6] || (ee[6] = (V) => y.value = "create")
                  }, [...ee[31] || (ee[31] = [
                    t("span", { class: "option-icon" }, "➕", -1),
                    t("div", { class: "option-content" }, [
                      t("span", { class: "option-title" }, "Create New Environment"),
                      t("span", { class: "option-description" }, "Start fresh with a new ComfyUI installation")
                    ], -1),
                    t("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  t("button", {
                    class: "landing-option",
                    onClick: ee[7] || (ee[7] = (V) => {
                      S.value = !1, y.value = "import";
                    })
                  }, [...ee[32] || (ee[32] = [
                    t("span", { class: "option-icon" }, "📦", -1),
                    t("div", { class: "option-content" }, [
                      t("span", { class: "option-title" }, "Import Environment"),
                      t("span", { class: "option-description" }, "From exported bundle (.tar.gz) or git repository")
                    ], -1),
                    t("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  (We = o.existingEnvironments) != null && We.length ? (n(), i(H, { key: 0 }, [
                    ee[33] || (ee[33] = t("div", { class: "landing-divider" }, [
                      t("span", null, "or switch to existing")
                    ], -1)),
                    t("div", QE, [
                      (n(!0), i(H, null, _e(o.existingEnvironments, (V) => (n(), i("label", {
                        key: V,
                        class: De(["env-option", { selected: w.value === V }])
                      }, [
                        St(t("input", {
                          type: "radio",
                          name: "env-select",
                          value: V,
                          "onUpdate:modelValue": ee[8] || (ee[8] = (F) => w.value = F)
                        }, null, 8, XE), [
                          [Dn, w.value]
                        ]),
                        t("span", ZE, m(V), 1)
                      ], 2))), 128))
                    ])
                  ], 64)) : h("", !0)
                ])) : y.value === "create" ? (n(), i("div", eT, [
                  Ue.value ? (n(), i("div", mT, [
                    t("p", fT, [
                      ee[41] || (ee[41] = $(" Creating environment ", -1)),
                      t("strong", null, m(te.value), 1),
                      ee[42] || (ee[42] = $("... ", -1))
                    ]),
                    _(Jn, {
                      progress: ne.value.progress,
                      message: ne.value.message,
                      "current-phase": ne.value.phase,
                      "show-steps": !0,
                      steps: M
                    }, null, 8, ["progress", "message", "current-phase"]),
                    ee[43] || (ee[43] = t("p", { class: "progress-warning" }, " This may take several minutes. Please wait... ", -1))
                  ])) : (n(), i(H, { key: 0 }, [
                    ee[40] || (ee[40] = t("p", { class: "wizard-intro" }, " Create a new managed environment: ", -1)),
                    t("div", tT, [
                      ee[35] || (ee[35] = t("label", { class: "form-label" }, "Environment Name", -1)),
                      St(t("input", {
                        "onUpdate:modelValue": ee[9] || (ee[9] = (V) => te.value = V),
                        type: "text",
                        class: "form-input",
                        placeholder: "my-new-env"
                      }, null, 512), [
                        [xo, te.value]
                      ])
                    ]),
                    t("div", sT, [
                      ee[36] || (ee[36] = t("label", { class: "form-label" }, "Python Version", -1)),
                      St(t("select", {
                        "onUpdate:modelValue": ee[10] || (ee[10] = (V) => ie.value = V),
                        class: "form-select"
                      }, [
                        (n(!0), i(H, null, _e(Ye(nu), (V) => (n(), i("option", {
                          key: V,
                          value: V
                        }, m(V), 9, oT))), 128))
                      ], 512), [
                        [So, ie.value]
                      ])
                    ]),
                    t("div", nT, [
                      ee[37] || (ee[37] = t("label", { class: "form-label" }, "ComfyUI Version", -1)),
                      St(t("select", {
                        "onUpdate:modelValue": ee[11] || (ee[11] = (V) => ge.value = V),
                        class: "form-select",
                        disabled: pe.value
                      }, [
                        (n(!0), i(H, null, _e(le.value, (V) => (n(), i("option", {
                          key: V.tag_name,
                          value: V.tag_name
                        }, m(V.name), 9, lT))), 128))
                      ], 8, aT), [
                        [So, ge.value]
                      ])
                    ]),
                    t("div", iT, [
                      ee[38] || (ee[38] = t("label", { class: "form-label" }, "PyTorch Backend", -1)),
                      St(t("select", {
                        "onUpdate:modelValue": ee[12] || (ee[12] = (V) => oe.value = V),
                        class: "form-select"
                      }, [
                        (n(!0), i(H, null, _e(Ye(Ml), (V) => (n(), i("option", {
                          key: V,
                          value: V
                        }, m(V) + m(V === "auto" ? " (detect GPU)" : ""), 9, rT))), 128))
                      ], 512), [
                        [So, oe.value]
                      ])
                    ]),
                    t("div", uT, [
                      t("label", cT, [
                        St(t("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": ee[13] || (ee[13] = (V) => X.value = V)
                        }, null, 512), [
                          [qn, X.value]
                        ]),
                        ee[39] || (ee[39] = t("span", null, "Switch to this environment after creation", -1))
                      ])
                    ]),
                    de.value ? (n(), i("div", dT, m(de.value), 1)) : h("", !0)
                  ], 64))
                ])) : y.value === "import" ? (n(), i("div", vT, [
                  _(du, {
                    "workspace-path": Ne.value,
                    "resume-import": S.value,
                    "initial-progress": U.value ?? void 0,
                    onImportComplete: Oe,
                    onImportStarted: ee[14] || (ee[14] = (V) => x.value = !0),
                    onSourceCleared: Te
                  }, null, 8, ["workspace-path", "resume-import", "initial-progress"])
                ])) : h("", !0)
              ], 64))
            ])) : h("", !0)
          ];
        }),
        footer: g(() => [
          t("div", pT, [
            _(Cu),
            t("div", gT, [
              p.value === 1 ? (n(), L(Re, {
                key: 0,
                variant: "primary",
                disabled: !ce.value || me.value,
                onClick: ye
              }, {
                default: g(() => [
                  $(m(me.value ? "Creating..." : "Next"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : p.value === 2 ? (n(), i(H, { key: 1 }, [
                !Ue.value && !x.value && (y.value !== "landing" || o.setupState === "no_workspace" && !Ne.value) ? (n(), L(Re, {
                  key: 0,
                  variant: "secondary",
                  onClick: Le
                }, {
                  default: g(() => [...ee[44] || (ee[44] = [
                    $(" Back ", -1)
                  ])]),
                  _: 1
                })) : h("", !0),
                y.value === "create" ? (n(), L(Re, {
                  key: 1,
                  variant: "primary",
                  disabled: !Ve.value || Ue.value,
                  onClick: ke
                }, {
                  default: g(() => [
                    $(m(Ue.value ? "Creating..." : X.value ? "Create & Switch" : "Create Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : h("", !0),
                y.value === "landing" && w.value ? (n(), L(Re, {
                  key: 2,
                  variant: "primary",
                  onClick: Pe
                }, {
                  default: g(() => [
                    $(" Switch to " + m(w.value), 1)
                  ]),
                  _: 1
                })) : h("", !0)
              ], 64)) : h("", !0)
            ])
          ])
        ]),
        _: 1
      }),
      k.value ? (n(), L(RE, {
        key: 0,
        "workspace-path": B.value,
        onClose: ee[16] || (ee[16] = (We) => k.value = !1)
      }, null, 8, ["workspace-path"])) : h("", !0)
    ], 64));
  }
}), wT = /* @__PURE__ */ Se(yT, [["__scopeId", "data-v-9a9aadc0"]]), _T = { class: "update-banner" }, kT = { class: "update-banner__left" }, bT = { class: "update-banner__title" }, $T = {
  key: 0,
  class: "update-banner__summary"
}, CT = { class: "update-banner__actions" }, xT = ["disabled"], ST = ["disabled"], IT = ["disabled"], ET = /* @__PURE__ */ xe({
  __name: "UpdateNoticeBanner",
  props: {
    info: {},
    updating: { type: Boolean }
  },
  emits: ["update", "dismiss", "release-notes"],
  setup(e, { emit: s }) {
    const o = s;
    return (a, l) => (n(), i("div", _T, [
      t("div", kT, [
        t("div", bT, " ComfyGit Manager v" + m(e.info.latest_version) + " available ", 1),
        e.info.changelog_summary ? (n(), i("div", $T, m(e.info.changelog_summary), 1)) : h("", !0)
      ]),
      t("div", CT, [
        t("button", {
          class: "update-banner__btn primary",
          disabled: e.updating,
          onClick: l[0] || (l[0] = (r) => o("update"))
        }, m(e.updating ? "Updating…" : "Update"), 9, xT),
        e.info.release_url ? (n(), i("button", {
          key: 0,
          class: "update-banner__btn",
          disabled: e.updating,
          onClick: l[1] || (l[1] = (r) => o("release-notes"))
        }, " Release notes ", 8, ST)) : h("", !0),
        t("button", {
          class: "update-banner__btn",
          disabled: e.updating,
          onClick: l[2] || (l[2] = (r) => o("dismiss"))
        }, " Dismiss ", 8, IT)
      ])
    ]));
  }
}), TT = /* @__PURE__ */ Se(ET, [["__scopeId", "data-v-49562c5c"]]), xu = "ComfyGit.UpdateNotice.DismissedVersion";
function MT() {
  try {
    return localStorage.getItem(xu);
  } catch {
    return null;
  }
}
function PT(e) {
  try {
    localStorage.setItem(xu, e);
  } catch {
  }
}
function RT(e) {
  return !e || !e.update_available || !e.latest_version ? !1 : MT() !== e.latest_version;
}
const NT = { class: "comfygit-panel" }, LT = { class: "panel-header" }, DT = { class: "header-left" }, OT = {
  key: 0,
  class: "header-info"
}, UT = { class: "header-actions" }, AT = { class: "env-switcher" }, zT = {
  key: 0,
  class: "header-info"
}, VT = { class: "branch-name" }, FT = { class: "panel-main" }, BT = { class: "sidebar" }, WT = { class: "sidebar-content" }, GT = { class: "sidebar-section" }, jT = { class: "sidebar-section" }, HT = { class: "sidebar-section" }, qT = { class: "sidebar-footer" }, KT = { class: "content-area" }, JT = {
  key: 0,
  class: "error-message"
}, YT = {
  key: 1,
  class: "loading"
}, QT = { class: "dialog-content env-selector-dialog" }, XT = { class: "dialog-header" }, ZT = { class: "dialog-body" }, e7 = { class: "env-list" }, t7 = { class: "env-info" }, s7 = { class: "env-name-row" }, o7 = { class: "env-indicator" }, n7 = { class: "env-name" }, a7 = {
  key: 0,
  class: "env-branch"
}, l7 = {
  key: 1,
  class: "current-label"
}, i7 = { class: "env-stats" }, r7 = ["onClick"], u7 = { class: "toast-container" }, c7 = { class: "toast-message" }, Ei = "ComfyGit.LastView", Ti = "ComfyGit.LastSection", d7 = /* @__PURE__ */ xe({
  __name: "ComfyGitPanel",
  props: {
    initialView: {}
  },
  emits: ["close", "statusUpdate"],
  setup(e, { emit: s }) {
    const o = e, a = s, {
      getStatus: l,
      getHistory: r,
      getBranches: u,
      checkout: c,
      createBranch: d,
      switchBranch: v,
      deleteBranch: f,
      getEnvironments: p,
      switchEnvironment: w,
      getSwitchProgress: y,
      deleteEnvironment: k,
      syncEnvironmentManually: x,
      repairWorkflowModels: C,
      getSetupStatus: S,
      getUpdateCheck: U,
      updateManager: I
    } = ct(), E = Fv(), N = b(null), z = b([]), q = b([]), D = b([]), G = O(() => D.value.find((fe) => fe.is_current)), Z = b(null), te = b(!1), ie = b(!1), ge = b("history"), oe = b("manifest"), X = b(null), de = b(!1), Ne = b(1), le = O(() => {
      var fe;
      return ((fe = X.value) == null ? void 0 : fe.state) || "managed";
    }), pe = b(!1), me = b(null), Ue = b(null), se = b(!1), ne = b(null), M = b(!1), A = b(!1), Q = O(() => !M.value && RT(ne.value)), P = b(null), R = b(null), ce = b(null), Ve = b(!1), je = b(!1), B = b(""), W = b(null), J = b({ state: "idle", progress: 0, message: "" });
    let ye = null, ke = null;
    const $e = {
      manifest: { view: "diagnostics", section: "diagnostics" },
      "debug-env": { view: "diagnostics", section: "diagnostics" },
      "debug-workspace": { view: "diagnostics", section: "diagnostics" },
      history: { view: "version-control", section: "version-control" },
      branches: { view: "version-control", section: "version-control" },
      remotes: { view: "version-control", section: "version-control" },
      status: { view: "status", section: "this-env" },
      account: { view: "account", section: "cloud" },
      publish: { view: "publish", section: "cloud" }
    }, Pe = o.initialView ? $e[o.initialView] : null, Le = [
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
    ], Oe = ["this-env", "version-control", "workspace", "cloud", "diagnostics"];
    function Te() {
      try {
        const fe = sessionStorage.getItem(Ei), ae = sessionStorage.getItem(Ti), Ge = fe === "branches" || fe === "history" || fe === "remotes" ? "version-control" : fe === "manifest" || fe === "debug-env" || fe === "debug-workspace" ? "diagnostics" : fe === "deploy" ? "publish" : fe, Ke = ae === "all-envs" ? "workspace" : ae === "sharing" ? "cloud" : ae;
        if (fe && ae && Le.includes(Ge) && Oe.includes(Ke))
          return { view: Ge, section: Ke };
      } catch {
      }
      return null;
    }
    const Be = Te(), Me = b((Pe == null ? void 0 : Pe.view) ?? (Be == null ? void 0 : Be.view) ?? "status"), we = b((Pe == null ? void 0 : Pe.section) ?? (Be == null ? void 0 : Be.section) ?? "this-env");
    function ee(fe, ae) {
      Me.value = fe, we.value = ae;
      try {
        sessionStorage.setItem(Ei, fe), sessionStorage.setItem(Ti, ae);
      } catch {
      }
    }
    function We(fe) {
      const Ge = {
        "model-index": { view: "model-index", section: "workspace" },
        remotes: { view: "version-control", section: "version-control" },
        account: { view: "account", section: "cloud" },
        publish: { view: "publish", section: "cloud" }
      }[fe];
      Ge && ee(Ge.view, Ge.section);
    }
    function V(fe) {
      ge.value = fe, ee("version-control", "version-control");
    }
    function F(fe) {
      oe.value = fe, ee("diagnostics", "diagnostics");
    }
    function j() {
      V("branches");
    }
    function Ee() {
      a("close"), setTimeout(() => {
        var ae;
        const fe = document.querySelectorAll("button.comfyui-button");
        for (const Ge of fe)
          if (((ae = Ge.textContent) == null ? void 0 : ae.trim()) === "Manager") {
            Ge.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const T = b(null), re = b(!1), ue = b(!1), Ae = b([]);
    let ze = 0;
    function Ie(fe, ae = "info", Ge = 3e3) {
      const Ke = ++ze;
      return Ae.value.push({ id: Ke, message: fe, type: ae }), Ge > 0 && setTimeout(() => {
        Ae.value = Ae.value.filter((ht) => ht.id !== Ke);
      }, Ge), Ke;
    }
    function qe(fe) {
      Ae.value = Ae.value.filter((ae) => ae.id !== fe);
    }
    function Qe(fe, ae) {
      Ie(fe, ae);
    }
    async function at() {
      ne.value = null, M.value = !1;
      try {
        ne.value = await U();
      } catch {
      }
    }
    function rt() {
      var ae;
      const fe = (ae = ne.value) == null ? void 0 : ae.release_url;
      if (fe)
        try {
          window.open(fe, "_blank", "noopener,noreferrer");
        } catch {
        }
    }
    function dt() {
      var ae;
      const fe = (ae = ne.value) == null ? void 0 : ae.latest_version;
      fe && PT(fe), M.value = !0;
    }
    async function It() {
      var ae, Ge;
      if (A.value) return;
      A.value = !0;
      const fe = Ie("Updating comfygit-manager...", "info", 0);
      try {
        const Ke = await I();
        if (qe(fe), Ke.status !== "success") {
          if (Ie(Ke.message || "Update failed", "error"), Ke.manual_instructions) {
            const ht = Ke.manual_instructions.split(`
`).map((xt) => xt.trim()).filter(Boolean);
            T.value = {
              title: "Manual Update Required",
              message: "Self-update failed. Follow these steps:",
              details: ht,
              confirmLabel: "OK",
              cancelLabel: "Close",
              onConfirm: () => {
                T.value = null;
              }
            };
          }
          return;
        }
        if (Ie(Ke.message || "Update complete", "success"), dt(), Ke.restart_required) {
          tt();
          try {
            await ((Ge = (ae = window.app) == null ? void 0 : ae.api) == null ? void 0 : Ge.fetchApi("/v2/manager/reboot"));
          } catch {
          }
        }
      } catch (Ke) {
        qe(fe);
        const ht = Ke instanceof Error ? Ke.message : "Update failed";
        Ie(ht, "error");
      } finally {
        A.value = !1;
      }
    }
    const Wt = O(() => {
      if (!N.value) return "neutral";
      const fe = N.value.workflows, ae = fe.new.length > 0 || fe.modified.length > 0 || fe.deleted.length > 0 || N.value.has_changes;
      return N.value.comparison.is_synced ? ae ? "warning" : "success" : "error";
    });
    O(() => N.value ? Wt.value === "success" ? "All synced" : Wt.value === "warning" ? "Uncommitted changes" : Wt.value === "error" ? "Not synced" : "" : "");
    async function ut() {
      pe.value = !0, me.value = null;
      try {
        const [fe, ae, Ge, Ke] = await Promise.all([
          l(!0),
          r(),
          u(),
          p()
        ]);
        N.value = fe, z.value = ae.commits, q.value = Ge.branches, D.value = Ke, a("statusUpdate", fe), P.value && await P.value.loadWorkflows(!0);
      } catch (fe) {
        me.value = fe instanceof Error ? fe.message : "Failed to load status", N.value = null, z.value = [], q.value = [];
      } finally {
        pe.value = !1;
      }
    }
    function ve(fe) {
      Ue.value = fe;
    }
    async function K(fe) {
      var Ge;
      Ue.value = null;
      const ae = N.value && (N.value.workflows.new.length > 0 || N.value.workflows.modified.length > 0 || N.value.workflows.deleted.length > 0 || N.value.has_changes);
      T.value = {
        title: ae ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: ae ? "You have uncommitted changes that will be lost." : `Checkout commit ${fe.short_hash || ((Ge = fe.hash) == null ? void 0 : Ge.slice(0, 7))}?`,
        details: ae ? yn() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: ae ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: ae,
        onConfirm: async () => {
          var xt;
          T.value = null, tt();
          const Ke = Ie(`Checking out ${fe.short_hash || ((xt = fe.hash) == null ? void 0 : xt.slice(0, 7))}...`, "info", 0), ht = await c(fe.hash, ae);
          qe(Ke), ht.status === "success" ? Ie("Restarting ComfyUI...", "success") : Ie(ht.message || "Checkout failed", "error");
        }
      };
    }
    async function he(fe) {
      const ae = N.value && (N.value.workflows.new.length > 0 || N.value.workflows.modified.length > 0 || N.value.workflows.deleted.length > 0 || N.value.has_changes);
      T.value = {
        title: ae ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: ae ? "You have uncommitted changes." : `Switch to branch "${fe}"?`,
        details: ae ? yn() : void 0,
        warning: ae ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: ae ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          T.value = null, tt();
          const Ge = Ie(`Switching to ${fe}...`, "info", 0), Ke = await v(fe, ae);
          qe(Ge), Ke.status === "success" ? Ie("Restarting ComfyUI...", "success") : Ie(Ke.message || "Branch switch failed", "error");
        }
      };
    }
    async function He(fe) {
      const ae = Ie(`Creating branch ${fe}...`, "info", 0), Ge = await d(fe);
      qe(ae), Ge.status === "success" ? (Ie(`Branch "${fe}" created`, "success"), await ut()) : Ie(Ge.message || "Failed to create branch", "error");
    }
    async function ft(fe, ae = !1) {
      const Ge = async (Ke) => {
        var xt;
        const ht = Ie(`Deleting branch ${fe}...`, "info", 0);
        try {
          const rs = await f(fe, Ke);
          qe(ht), rs.status === "success" ? (Ie(`Branch "${fe}" deleted`, "success"), await ut()) : (xt = rs.message) != null && xt.includes("not fully merged") ? T.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${fe}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              T.value = null, await Ge(!0);
            }
          } : Ie(rs.message || "Failed to delete branch", "error");
        } catch (rs) {
          qe(ht);
          const Zs = rs instanceof Error ? rs.message : "Failed to delete branch";
          Zs.includes("not fully merged") ? T.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${fe}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              T.value = null, await Ge(!0);
            }
          } : Ie(Zs, "error");
        }
      };
      T.value = {
        title: "Delete Branch",
        message: `Delete branch "${fe}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          T.value = null, await Ge(ae);
        }
      };
    }
    async function Nt(fe) {
      Ue.value = null;
      const ae = prompt("Enter branch name:");
      if (ae) {
        const Ge = Ie(`Creating branch ${ae}...`, "info", 0), Ke = await d(ae, fe.hash);
        qe(Ge), Ke.status === "success" ? (Ie(`Branch "${ae}" created from ${fe.short_hash}`, "success"), await ut()) : Ie(Ke.message || "Failed to create branch", "error");
      }
    }
    function tt() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function Pt() {
      T.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var fe;
          T.value = null, tt(), Ie("Restarting environment...", "info");
          try {
            (fe = window.app) != null && fe.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function xs() {
      T.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var fe;
          T.value = null, Ie("Stopping environment...", "info");
          try {
            (fe = window.app) != null && fe.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function Kt(fe, ae) {
      se.value = !1, B.value = fe, W.value = ae || null, Ve.value = !0;
    }
    async function ca() {
      Ve.value = !1, je.value = !0, tt(), J.value = {
        progress: 10,
        state: vo(10),
        message: po(10)
      };
      try {
        await w(B.value, W.value || void 0), da(), ma();
      } catch (fe) {
        Ss(), je.value = !1, Ie(`Failed to initiate switch: ${fe instanceof Error ? fe.message : "Unknown error"}`, "error"), J.value = { state: "idle", progress: 0, message: "" }, W.value = null;
      }
    }
    function vo(fe) {
      return fe >= 100 ? "complete" : fe >= 80 ? "validating" : fe >= 60 ? "starting" : fe >= 30 ? "syncing" : "preparing";
    }
    function po(fe) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[vo(fe)] || "";
    }
    function da() {
      if (ke) return;
      let fe = 10;
      const ae = 60, Ge = 5e3, Ke = 100, ht = (ae - fe) / (Ge / Ke);
      ke = window.setInterval(() => {
        if (fe += ht, fe >= ae && (fe = ae, Ss()), J.value.progress < ae) {
          const xt = Math.floor(fe);
          J.value = {
            progress: xt,
            state: vo(xt),
            message: po(xt)
          };
        }
      }, Ke);
    }
    function Ss() {
      ke && (clearInterval(ke), ke = null);
    }
    function ma() {
      ye || (ye = window.setInterval(async () => {
        try {
          let fe = await E.getStatus();
          if ((!fe || fe.state === "idle") && (fe = await y()), !fe)
            return;
          const ae = fe.progress || 0;
          ae >= 60 && Ss();
          const Ge = Math.max(ae, J.value.progress), Ke = fe.state && fe.state !== "idle" && fe.state !== "unknown", ht = Ke ? fe.state : vo(Ge), xt = Ke && fe.message || po(Ge);
          J.value = {
            state: ht,
            progress: Ge,
            message: xt
          }, fe.state === "complete" ? (Ss(), Do(), je.value = !1, Ie(`✓ Switched to ${B.value}`, "success"), await ut(), B.value = "") : fe.state === "rolled_back" ? (Ss(), Do(), je.value = !1, Ie("Switch failed, restored previous environment", "warning"), B.value = "") : fe.state === "critical_failure" && (Ss(), Do(), je.value = !1, Ie(`Critical error during switch: ${fe.message}`, "error"), B.value = "");
        } catch (fe) {
          console.error("Failed to poll switch progress:", fe);
        }
      }, 1e3));
    }
    function Do() {
      Ss(), ye && (clearInterval(ye), ye = null);
    }
    function fa() {
      var fe;
      Ve.value = !1, B.value = "", (fe = X.value) != null && fe.state && X.value.state !== "managed" && (Ne.value = X.value.state === "no_workspace" ? 1 : 2, de.value = !0);
    }
    async function va(fe) {
      re.value = !1, await ut(), Ie(fe.message, fe.success ? "success" : "error");
    }
    async function pa() {
      ue.value = !1;
      const fe = Ie("Syncing environment...", "info", 0);
      try {
        const ae = await x("skip", !0);
        if (qe(fe), ae.status === "success") {
          const Ge = [];
          ae.nodes_installed.length && Ge.push(`${ae.nodes_installed.length} installed`), ae.nodes_removed.length && Ge.push(`${ae.nodes_removed.length} removed`);
          const Ke = Ge.length ? `: ${Ge.join(", ")}` : "";
          Ie(`✓ Environment synced${Ke}`, "success"), await ut();
        } else {
          const Ge = ae.errors.length ? ae.errors.join("; ") : ae.message;
          Ie(`Sync failed: ${Ge}`, "error");
        }
      } catch (ae) {
        qe(fe), Ie(`Sync error: ${ae instanceof Error ? ae.message : "Unknown error"}`, "error");
      }
    }
    async function ga(fe) {
      var ae;
      try {
        const Ge = await C(fe);
        Ge.failed.length === 0 ? Ie(`✓ Repaired ${Ge.success} workflow${Ge.success === 1 ? "" : "s"}`, "success") : Ie(`Repaired ${Ge.success}, failed: ${Ge.failed.length}`, "warning"), await ut();
      } catch (Ge) {
        Ie(`Repair failed: ${Ge instanceof Error ? Ge.message : "Unknown error"}`, "error");
      } finally {
        (ae = ce.value) == null || ae.resetRepairingState();
      }
    }
    async function hn() {
      var ae, Ge;
      const fe = Ie("Repairing environment...", "info", 0);
      try {
        const Ke = await x("skip", !0);
        if (qe(fe), Ke.status === "success") {
          const ht = [];
          Ke.nodes_installed.length && ht.push(`${Ke.nodes_installed.length} installed`), Ke.nodes_removed.length && ht.push(`${Ke.nodes_removed.length} removed`);
          const xt = ht.length ? `: ${ht.join(", ")}` : "";
          Ie(`✓ Environment repaired${xt}`, "success"), (ae = ce.value) == null || ae.closeDetailModal(), await ut();
        } else {
          const ht = Ke.errors.length ? Ke.errors.join(", ") : Ke.message || "Unknown error";
          Ie(`Repair failed: ${ht}`, "error");
        }
      } catch (Ke) {
        qe(fe), Ie(`Repair error: ${Ke instanceof Error ? Ke.message : "Unknown error"}`, "error");
      } finally {
        (Ge = ce.value) == null || Ge.resetRepairingEnvironmentState();
      }
    }
    async function ha(fe, ae) {
      Ie(`Environment '${fe}' created`, "success"), await ut(), R.value && await R.value.loadEnvironments(), ae && await Kt(fe);
    }
    async function ya(fe) {
      var ae;
      if (((ae = G.value) == null ? void 0 : ae.name) === fe) {
        Ie("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      T.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${fe}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          T.value = null;
          try {
            const Ge = await k(fe);
            Ge.status === "success" ? (Ie(`Environment "${fe}" deleted`, "success"), await ut(), R.value && await R.value.loadEnvironments()) : Ie(Ge.message || "Failed to delete environment", "error");
          } catch (Ge) {
            Ie(`Error deleting environment: ${Ge instanceof Error ? Ge.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function wa(fe, ae) {
      de.value = !1;
      try {
        X.value = await S();
      } catch {
      }
      await Kt(fe, ae);
    }
    function _a() {
      de.value = !1, a("close");
    }
    async function ka(fe, ae) {
      await Kt(fe, ae);
    }
    async function ba(fe) {
      te.value = !1, await ut(), await Kt(fe);
    }
    function $a() {
      Z.value = null, te.value = !0;
    }
    function Ca(fe) {
      Z.value = fe, ie.value = !0;
    }
    function xa() {
      ie.value = !1, Z.value = null;
    }
    async function Sa(fe) {
      X.value = await S(), console.log(`Environment '${fe}' created. Available for switching.`);
    }
    function Ia() {
      ee("environments", "workspace"), setTimeout(() => {
        var fe;
        (fe = R.value) == null || fe.openCreateModal();
      }, 100);
    }
    function yn() {
      if (!N.value) return [];
      const fe = [], ae = N.value.workflows;
      return ae.new.length && fe.push(`${ae.new.length} new workflow(s)`), ae.modified.length && fe.push(`${ae.modified.length} modified workflow(s)`), ae.deleted.length && fe.push(`${ae.deleted.length} deleted workflow(s)`), fe;
    }
    return ot(async () => {
      try {
        if (X.value = await S(), X.value.state === "no_workspace") {
          de.value = !0, Ne.value = 1;
          return;
        }
        if (X.value.state === "empty_workspace") {
          de.value = !0, Ne.value = 2;
          return;
        }
        if (X.value.state === "unmanaged") {
          de.value = !0, Ne.value = 2;
          return;
        }
      } catch (fe) {
        console.warn("Setup status check failed, proceeding normally:", fe);
      }
      await Promise.all([
        ut(),
        at()
      ]);
    }), (fe, ae) => {
      var Ge, Ke, ht, xt, rs, Zs, wn, _n, Y, be, Fe, vt, Lt, us, zs, Vs;
      return n(), i("div", NT, [
        t("div", LT, [
          t("div", DT, [
            ae[28] || (ae[28] = t("h2", { class: "panel-title" }, "ComfyGit", -1)),
            N.value ? (n(), i("div", OT)) : h("", !0)
          ]),
          t("div", UT, [
            _($u),
            ae[31] || (ae[31] = t("span", { class: "header-divider" }, null, -1)),
            t("button", {
              class: De(["icon-btn", { spinning: pe.value }]),
              onClick: ut,
              title: "Refresh"
            }, [...ae[29] || (ae[29] = [
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
              onClick: ae[0] || (ae[0] = (Xe) => a("close")),
              title: "Close"
            }, [...ae[30] || (ae[30] = [
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
        Q.value && ne.value ? (n(), L(TT, {
          key: 0,
          info: ne.value,
          updating: A.value,
          onUpdate: It,
          onDismiss: dt,
          onReleaseNotes: rt
        }, null, 8, ["info", "updating"])) : h("", !0),
        t("div", AT, [
          t("div", { class: "env-switcher-header" }, [
            ae[32] || (ae[32] = t("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
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
            onClick: ae[1] || (ae[1] = (Xe) => ee("environments", "workspace"))
          }, [
            N.value ? (n(), i("div", zT, [
              t("span", null, m(((Ge = G.value) == null ? void 0 : Ge.name) || ((Ke = N.value) == null ? void 0 : Ke.environment) || "Loading..."), 1),
              t("span", VT, "(" + m(N.value.branch || "detached") + ")", 1)
            ])) : h("", !0),
            ae[33] || (ae[33] = t("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        t("div", FT, [
          t("div", BT, [
            t("div", WT, [
              t("div", GT, [
                ae[34] || (ae[34] = t("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
                t("button", {
                  class: De(["sidebar-item", { active: Me.value === "status" && we.value === "this-env" }]),
                  onClick: ae[2] || (ae[2] = (Xe) => ee("status", "this-env"))
                }, " STATUS ", 2),
                t("button", {
                  class: De(["sidebar-item", { active: Me.value === "workflows" }]),
                  onClick: ae[3] || (ae[3] = (Xe) => ee("workflows", "this-env"))
                }, " WORKFLOWS ", 2),
                t("button", {
                  class: De(["sidebar-item", { active: Me.value === "models-env" }]),
                  onClick: ae[4] || (ae[4] = (Xe) => ee("models-env", "this-env"))
                }, " MODELS ", 2),
                t("button", {
                  class: De(["sidebar-item", { active: Me.value === "nodes" }]),
                  onClick: ae[5] || (ae[5] = (Xe) => ee("nodes", "this-env"))
                }, " NODES ", 2),
                t("button", {
                  class: De(["sidebar-item", { active: Me.value === "version-control" }]),
                  onClick: ae[6] || (ae[6] = (Xe) => V("history"))
                }, " VERSION CONTROL ", 2),
                t("button", {
                  class: De(["sidebar-item", { active: Me.value === "diagnostics" }]),
                  onClick: ae[7] || (ae[7] = (Xe) => F("manifest"))
                }, " DIAGNOSTICS ", 2)
              ]),
              ae[37] || (ae[37] = t("div", { class: "sidebar-divider" }, null, -1)),
              t("div", jT, [
                ae[35] || (ae[35] = t("div", { class: "sidebar-section-title" }, "WORKSPACE", -1)),
                t("button", {
                  class: De(["sidebar-item", { active: Me.value === "environments" }]),
                  onClick: ae[8] || (ae[8] = (Xe) => ee("environments", "workspace"))
                }, " ENVIRONMENTS ", 2),
                t("button", {
                  class: De(["sidebar-item", { active: Me.value === "model-index" }]),
                  onClick: ae[9] || (ae[9] = (Xe) => ee("model-index", "workspace"))
                }, " MODEL INDEX ", 2),
                t("button", {
                  class: De(["sidebar-item", { active: Me.value === "settings" }]),
                  onClick: ae[10] || (ae[10] = (Xe) => ee("settings", "workspace"))
                }, " SETTINGS ", 2)
              ]),
              ae[38] || (ae[38] = t("div", { class: "sidebar-divider" }, null, -1)),
              t("div", HT, [
                ae[36] || (ae[36] = t("div", { class: "sidebar-section-title" }, "CLOUD", -1)),
                t("button", {
                  class: De(["sidebar-item", { active: Me.value === "publish" }]),
                  onClick: ae[11] || (ae[11] = (Xe) => ee("publish", "cloud"))
                }, " PUBLISH ", 2),
                t("button", {
                  class: De(["sidebar-item", { active: Me.value === "account" }]),
                  onClick: ae[12] || (ae[12] = (Xe) => ee("account", "cloud"))
                }, " ACCOUNT ", 2)
              ])
            ]),
            t("div", qT, [
              _(Cu)
            ])
          ]),
          t("div", KT, [
            me.value ? (n(), i("div", JT, m(me.value), 1)) : !N.value && Me.value === "status" ? (n(), i("div", YT, " Loading status... ")) : (n(), i(H, { key: 2 }, [
              Me.value === "status" ? (n(), L(Av, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: ce,
                status: N.value,
                "setup-state": le.value,
                onSwitchBranch: j,
                onCommitChanges: ae[13] || (ae[13] = (Xe) => re.value = !0),
                onSyncEnvironment: ae[14] || (ae[14] = (Xe) => ue.value = !0),
                onViewWorkflows: ae[15] || (ae[15] = (Xe) => ee("workflows", "this-env")),
                onViewHistory: ae[16] || (ae[16] = (Xe) => V("history")),
                onViewDebug: ae[17] || (ae[17] = (Xe) => F("env")),
                onViewNodes: ae[18] || (ae[18] = (Xe) => ee("nodes", "this-env")),
                onRepairMissingModels: ga,
                onRepairEnvironment: hn,
                onStartSetup: ae[19] || (ae[19] = (Xe) => de.value = !0),
                onViewEnvironments: ae[20] || (ae[20] = (Xe) => ee("environments", "workspace")),
                onCreateEnvironment: Ia
              }, null, 8, ["status", "setup-state"])) : Me.value === "workflows" ? (n(), L(b_, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: P,
                onRefresh: ut
              }, null, 512)) : Me.value === "models-env" ? (n(), L(Ub, {
                key: 2,
                onNavigate: We
              })) : Me.value === "version-control" ? (n(), L(SI, {
                key: 3,
                commits: z.value,
                "current-ref": (ht = N.value) == null ? void 0 : ht.branch,
                branches: q.value,
                current: ((xt = N.value) == null ? void 0 : xt.branch) || null,
                "initial-tab": ge.value,
                onSelect: ve,
                onCheckout: K,
                onSwitch: he,
                onCreate: He,
                onDelete: ft,
                onToast: Qe
              }, null, 8, ["commits", "current-ref", "branches", "current", "initial-tab"])) : Me.value === "nodes" ? (n(), L(M2, {
                key: 4,
                "version-mismatches": ((Zs = (rs = N.value) == null ? void 0 : rs.comparison) == null ? void 0 : Zs.version_mismatches) || [],
                onOpenNodeManager: Ee,
                onRepairEnvironment: hn,
                onToast: Qe
              }, null, 8, ["version-mismatches"])) : Me.value === "diagnostics" ? (n(), L(VI, {
                key: 5,
                "initial-tab": oe.value
              }, null, 8, ["initial-tab"])) : Me.value === "environments" ? (n(), L(TC, {
                key: 6,
                ref_key: "environmentsSectionRef",
                ref: R,
                onSwitch: Kt,
                onCreated: ha,
                onDelete: ya,
                onImport: $a,
                onExport: Ca
              }, null, 512)) : Me.value === "model-index" ? (n(), L(Qb, {
                key: 7,
                onRefresh: ut
              })) : Me.value === "settings" ? (n(), L(o$, { key: 8 })) : Me.value === "account" ? (n(), L(R8, {
                key: 9,
                onToast: Qe,
                onNavigate: We
              })) : Me.value === "publish" ? (n(), L(aS, {
                key: 10,
                "environment-name": ((wn = G.value) == null ? void 0 : wn.name) || ((_n = N.value) == null ? void 0 : _n.environment) || null,
                "branch-name": ((Y = N.value) == null ? void 0 : Y.branch) || null,
                onNavigate: We,
                onToast: Qe
              }, null, 8, ["environment-name", "branch-name"])) : h("", !0)
            ], 64))
          ])
        ]),
        Ue.value ? (n(), L(n6, {
          key: 1,
          commit: Ue.value,
          onClose: ae[21] || (ae[21] = (Xe) => Ue.value = null),
          onCheckout: K,
          onCreateBranch: Nt
        }, null, 8, ["commit"])) : h("", !0),
        T.value ? (n(), L(tu, {
          key: 2,
          title: T.value.title,
          message: T.value.message,
          details: T.value.details,
          warning: T.value.warning,
          confirmLabel: T.value.confirmLabel,
          cancelLabel: T.value.cancelLabel,
          secondaryLabel: T.value.secondaryLabel,
          secondaryAction: T.value.secondaryAction,
          destructive: T.value.destructive,
          onConfirm: T.value.onConfirm,
          onCancel: ae[22] || (ae[22] = (Xe) => T.value = null),
          onSecondary: T.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : h("", !0),
        te.value ? (n(), L(Ct, {
          key: 3,
          title: "IMPORT ENVIRONMENT",
          size: "xl",
          "fixed-height": "",
          onClose: ae[23] || (ae[23] = (Xe) => te.value = !1)
        }, {
          body: g(() => [
            _(p8, {
              embedded: "",
              onImportCompleteSwitch: ba
            })
          ]),
          _: 1
        })) : h("", !0),
        ie.value ? (n(), L(Ct, {
          key: 4,
          title: Z.value ? `EXPORT ENVIRONMENT: ${Z.value.toUpperCase()}` : "EXPORT ENVIRONMENT",
          size: "lg",
          "fixed-height": "",
          onClose: xa
        }, {
          body: g(() => [
            _(_x, {
              embedded: "",
              "environment-name": Z.value
            }, null, 8, ["environment-name"])
          ]),
          _: 1
        }, 8, ["title"])) : h("", !0),
        _(J6, {
          show: Ve.value,
          "from-environment": ((be = G.value) == null ? void 0 : be.name) || "unknown",
          "to-environment": B.value,
          onConfirm: ca,
          onClose: fa
        }, null, 8, ["show", "from-environment", "to-environment"]),
        re.value && N.value ? (n(), L(bu, {
          key: 5,
          status: N.value,
          "as-modal": !0,
          onClose: ae[24] || (ae[24] = (Xe) => re.value = !1),
          onCommitted: va
        }, null, 8, ["status"])) : h("", !0),
        ue.value && N.value ? (n(), L(pE, {
          key: 6,
          show: ue.value,
          "mismatch-details": {
            missing_nodes: N.value.comparison.missing_nodes,
            extra_nodes: N.value.comparison.extra_nodes
          },
          onConfirm: pa,
          onClose: ae[25] || (ae[25] = (Xe) => ue.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : h("", !0),
        _(lE, {
          show: je.value,
          state: J.value.state,
          progress: J.value.progress,
          message: J.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        se.value ? (n(), i("div", {
          key: 7,
          class: "dialog-overlay",
          onClick: ae[27] || (ae[27] = st((Xe) => se.value = !1, ["self"]))
        }, [
          t("div", QT, [
            t("div", XT, [
              ae[40] || (ae[40] = t("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              t("button", {
                class: "icon-btn",
                onClick: ae[26] || (ae[26] = (Xe) => se.value = !1)
              }, [...ae[39] || (ae[39] = [
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
            t("div", ZT, [
              ae[41] || (ae[41] = t("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              t("div", e7, [
                (n(!0), i(H, null, _e(D.value, (Xe) => (n(), i("div", {
                  key: Xe.name,
                  class: De(["env-item", { current: Xe.is_current }])
                }, [
                  t("div", t7, [
                    t("div", s7, [
                      t("span", o7, m(Xe.is_current ? "●" : "○"), 1),
                      t("span", n7, m(Xe.name), 1),
                      Xe.current_branch ? (n(), i("span", a7, "(" + m(Xe.current_branch) + ")", 1)) : h("", !0),
                      Xe.is_current ? (n(), i("span", l7, "CURRENT")) : h("", !0)
                    ]),
                    t("div", i7, m(Xe.workflow_count) + " workflows • " + m(Xe.node_count) + " nodes ", 1)
                  ]),
                  Xe.is_current ? h("", !0) : (n(), i("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (Ea) => Kt(Xe.name)
                  }, " SWITCH ", 8, r7))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : h("", !0),
        de.value ? (n(), L(wT, {
          key: 8,
          "default-path": ((Fe = X.value) == null ? void 0 : Fe.default_path) || "~/comfygit",
          "detected-models-dir": ((vt = X.value) == null ? void 0 : vt.detected_models_dir) || null,
          "initial-step": Ne.value,
          "existing-environments": ((Lt = X.value) == null ? void 0 : Lt.environments) || [],
          "cli-installed": ((us = X.value) == null ? void 0 : us.cli_installed) ?? !0,
          "setup-state": ((zs = X.value) == null ? void 0 : zs.state) || "no_workspace",
          "workspace-path": ((Vs = X.value) == null ? void 0 : Vs.workspace_path) || null,
          onComplete: wa,
          onClose: _a,
          onSwitchEnvironment: ka,
          onEnvironmentCreatedNoSwitch: Sa
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state", "workspace-path"])) : h("", !0),
        t("div", u7, [
          _(Jd, { name: "toast" }, {
            default: g(() => [
              (n(!0), i(H, null, _e(Ae.value, (Xe) => (n(), i("div", {
                key: Xe.id,
                class: De(["toast", Xe.type])
              }, [
                t("span", c7, m(Xe.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), m7 = /* @__PURE__ */ Se(d7, [["__scopeId", "data-v-86a0deaf"]]), f7 = { class: "item-header" }, v7 = { class: "item-info" }, p7 = { class: "filename" }, g7 = { class: "metadata" }, h7 = { class: "size" }, y7 = {
  key: 0,
  class: "type"
}, w7 = { class: "item-actions" }, _7 = {
  key: 0,
  class: "progress-section"
}, k7 = { class: "progress-bar" }, b7 = { class: "progress-stats" }, $7 = { class: "downloaded" }, C7 = { class: "speed" }, x7 = {
  key: 0,
  class: "eta"
}, S7 = {
  key: 1,
  class: "status-msg paused"
}, I7 = {
  key: 2,
  class: "status-msg queued"
}, E7 = {
  key: 3,
  class: "status-msg completed"
}, T7 = {
  key: 4,
  class: "status-msg failed"
}, M7 = {
  key: 0,
  class: "retries"
}, P7 = /* @__PURE__ */ xe({
  __name: "DownloadQueueItem",
  props: {
    item: {}
  },
  emits: ["cancel", "retry", "resume", "remove"],
  setup(e, { emit: s }) {
    const o = s;
    function a(u) {
      if (u === 0) return "?";
      const c = u / (1024 * 1024 * 1024);
      return c >= 1 ? `${c.toFixed(2)} GB` : `${(u / (1024 * 1024)).toFixed(1)} MB`;
    }
    function l(u) {
      return u === 0 ? "-" : `${(u / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    function r(u) {
      if (u < 60) return `${Math.round(u)}s`;
      const c = Math.floor(u / 60);
      return c < 60 ? `${c}m` : `${Math.floor(c / 60)}h ${c % 60}m`;
    }
    return (u, c) => (n(), i("div", {
      class: De(["download-item", `status-${e.item.status}`])
    }, [
      t("div", f7, [
        t("div", v7, [
          t("div", p7, m(e.item.filename), 1),
          t("div", g7, [
            t("span", h7, m(a(e.item.size)), 1),
            e.item.type ? (n(), i("span", y7, m(e.item.type), 1)) : h("", !0)
          ])
        ]),
        t("div", w7, [
          e.item.status === "queued" || e.item.status === "downloading" ? (n(), i("button", {
            key: 0,
            class: "action-icon cancel",
            onClick: c[0] || (c[0] = (d) => o("cancel")),
            title: "Cancel"
          }, " × ")) : h("", !0),
          e.item.status === "paused" ? (n(), i("button", {
            key: 1,
            class: "action-icon resume",
            onClick: c[1] || (c[1] = (d) => o("resume")),
            title: "Resume"
          }, " ▶ ")) : h("", !0),
          e.item.status === "failed" ? (n(), i("button", {
            key: 2,
            class: "action-icon retry",
            onClick: c[2] || (c[2] = (d) => o("retry")),
            title: "Retry"
          }, " ↻ ")) : h("", !0),
          e.item.status === "completed" || e.item.status === "failed" || e.item.status === "paused" ? (n(), i("button", {
            key: 3,
            class: "action-icon remove",
            onClick: c[3] || (c[3] = (d) => o("remove")),
            title: "Remove"
          }, " × ")) : h("", !0)
        ])
      ]),
      e.item.status === "downloading" ? (n(), i("div", _7, [
        t("div", k7, [
          t("div", {
            class: "progress-fill",
            style: Ft({ width: `${e.item.progress}%` })
          }, null, 4)
        ]),
        t("div", b7, [
          t("span", $7, m(a(e.item.downloaded)) + " / " + m(a(e.item.size)), 1),
          t("span", C7, m(l(e.item.speed)), 1),
          e.item.eta > 0 ? (n(), i("span", x7, m(r(e.item.eta)), 1)) : h("", !0)
        ])
      ])) : e.item.status === "paused" ? (n(), i("div", S7, " Paused - click Resume to download ")) : e.item.status === "queued" ? (n(), i("div", I7, " Waiting in queue... ")) : e.item.status === "completed" ? (n(), i("div", E7, " ✓ Downloaded ")) : e.item.status === "failed" ? (n(), i("div", T7, [
        $(" ✗ " + m(e.item.error || "Failed") + " ", 1),
        e.item.retries > 0 ? (n(), i("span", M7, "(" + m(e.item.retries) + " retries)", 1)) : h("", !0)
      ])) : h("", !0)
    ], 2));
  }
}), Vo = /* @__PURE__ */ Se(P7, [["__scopeId", "data-v-2110df65"]]), R7 = { class: "queue-title" }, N7 = { class: "count" }, L7 = { class: "queue-actions" }, D7 = { class: "action-label" }, O7 = {
  key: 0,
  class: "overall-progress"
}, U7 = { class: "progress-bar" }, A7 = {
  key: 0,
  class: "current-mini"
}, z7 = { class: "filename" }, V7 = { class: "speed" }, F7 = {
  key: 1,
  class: "queue-content"
}, B7 = {
  key: 0,
  class: "section"
}, W7 = {
  key: 1,
  class: "section"
}, G7 = { class: "section-header" }, j7 = { class: "section-label paused" }, H7 = { class: "items-list" }, q7 = {
  key: 2,
  class: "section"
}, K7 = { class: "section-header" }, J7 = { class: "section-label" }, Y7 = { class: "items-list" }, Q7 = {
  key: 3,
  class: "section"
}, X7 = { class: "section-header" }, Z7 = { class: "section-label" }, eM = { class: "items-list" }, tM = {
  key: 4,
  class: "section"
}, sM = { class: "section-header" }, oM = { class: "section-label failed" }, nM = { class: "items-list" }, aM = /* @__PURE__ */ xe({
  __name: "ModelDownloadQueue",
  setup(e) {
    const {
      queue: s,
      currentDownload: o,
      queuedItems: a,
      completedItems: l,
      failedItems: r,
      pausedItems: u,
      hasItems: c,
      activeCount: d,
      cancelDownload: v,
      retryDownload: f,
      resumeDownload: p,
      resumeAllPaused: w,
      removeItem: y,
      clearCompleted: k
    } = Lo(), x = b(!1);
    let C = null;
    kt(
      () => ({
        active: d.value,
        failed: r.value.length,
        paused: u.value.length,
        completed: l.value.length
      }),
      (E, N) => {
        C && (clearTimeout(C), C = null);
        const z = E.active === 0 && E.failed === 0 && E.paused === 0 && E.completed > 0, q = N && (N.active > 0 || N.paused > 0);
        z && q && (C = setTimeout(() => {
          k(), C = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const S = O(() => {
      var z;
      if (s.items.length === 0) return 0;
      const E = l.value.length, N = ((z = o.value) == null ? void 0 : z.progress) || 0;
      return Math.round((E + N / 100) / s.items.length * 100);
    });
    function U(E) {
      v(E);
    }
    function I(E) {
      return E === 0 ? "..." : `${(E / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (E, N) => (n(), L(Ot, { to: "body" }, [
      Ye(c) ? (n(), i("div", {
        key: 0,
        class: De(["model-download-queue", { minimized: !x.value }])
      }, [
        t("div", {
          class: "queue-header",
          onClick: N[0] || (N[0] = (z) => x.value = !x.value)
        }, [
          t("div", R7, [
            N[4] || (N[4] = t("span", { class: "icon" }, "↓", -1)),
            N[5] || (N[5] = t("span", { class: "title" }, "Downloads", -1)),
            t("span", N7, "(" + m(Ye(d)) + "/" + m(Ye(s).items.length) + ")", 1)
          ]),
          t("div", L7, [
            t("span", D7, m(x.value ? "minimize" : "expand"), 1)
          ])
        ]),
        x.value ? (n(), i("div", F7, [
          Ye(o) ? (n(), i("div", B7, [
            N[6] || (N[6] = t("div", { class: "section-label" }, "Downloading", -1)),
            _(Vo, {
              item: Ye(o),
              onCancel: N[1] || (N[1] = (z) => U(Ye(o).id))
            }, null, 8, ["item"])
          ])) : h("", !0),
          Ye(u).length > 0 ? (n(), i("div", W7, [
            t("div", G7, [
              t("span", j7, "Paused (" + m(Ye(u).length) + ")", 1),
              t("button", {
                class: "resume-all-btn",
                onClick: N[2] || (N[2] = //@ts-ignore
                (...z) => Ye(w) && Ye(w)(...z))
              }, "Resume All")
            ]),
            t("div", H7, [
              (n(!0), i(H, null, _e(Ye(u), (z) => (n(), L(Vo, {
                key: z.id,
                item: z,
                onResume: (q) => Ye(p)(z.id),
                onRemove: (q) => Ye(y)(z.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : h("", !0),
          Ye(a).length > 0 ? (n(), i("div", q7, [
            t("div", K7, [
              t("span", J7, "Queued (" + m(Ye(a).length) + ")", 1)
            ]),
            t("div", Y7, [
              (n(!0), i(H, null, _e(Ye(a), (z) => (n(), L(Vo, {
                key: z.id,
                item: z,
                onCancel: (q) => U(z.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : h("", !0),
          Ye(l).length > 0 ? (n(), i("div", Q7, [
            t("div", X7, [
              t("span", Z7, "Completed (" + m(Ye(l).length) + ")", 1),
              t("button", {
                class: "clear-btn",
                onClick: N[3] || (N[3] = //@ts-ignore
                (...z) => Ye(k) && Ye(k)(...z))
              }, "Clear")
            ]),
            t("div", eM, [
              (n(!0), i(H, null, _e(Ye(l).slice(0, 3), (z) => (n(), L(Vo, {
                key: z.id,
                item: z,
                onRemove: (q) => Ye(y)(z.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : h("", !0),
          Ye(r).length > 0 ? (n(), i("div", tM, [
            t("div", sM, [
              t("span", oM, "Failed (" + m(Ye(r).length) + ")", 1)
            ]),
            t("div", nM, [
              (n(!0), i(H, null, _e(Ye(r), (z) => (n(), L(Vo, {
                key: z.id,
                item: z,
                onRetry: (q) => Ye(f)(z.id),
                onRemove: (q) => Ye(y)(z.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : h("", !0)
        ])) : (n(), i("div", O7, [
          t("div", U7, [
            t("div", {
              class: "progress-fill",
              style: Ft({ width: `${S.value}%` })
            }, null, 4)
          ]),
          Ye(o) ? (n(), i("div", A7, [
            t("span", z7, m(Ye(o).filename), 1),
            t("span", V7, m(I(Ye(o).speed)), 1)
          ])) : h("", !0)
        ]))
      ], 2)) : h("", !0)
    ]));
  }
}), lM = /* @__PURE__ */ Se(aM, [["__scopeId", "data-v-3a3c9607"]]), iM = { class: "detail-header" }, rM = { class: "item-count" }, uM = { class: "resource-list" }, cM = { class: "item-info" }, dM = { class: "item-name" }, mM = {
  key: 0,
  class: "item-subtitle"
}, fM = {
  key: 0,
  class: "installing-badge"
}, vM = ["title"], pM = {
  key: 2,
  class: "installed-badge"
}, gM = {
  key: 3,
  class: "queued-badge"
}, hM = {
  key: 4,
  class: "action-buttons"
}, yM = {
  key: 1,
  class: "no-action"
}, wM = /* @__PURE__ */ xe({
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
    const o = e, a = s, l = O(() => o.items.filter((y) => y.canAction)), r = O(() => l.value.length > 0 && l.value.every(
      (y) => {
        var k, x;
        return o.queuedItems.has(y.id) || ((k = o.installedItems) == null ? void 0 : k.has(y.id)) || ((x = o.failedItems) == null ? void 0 : x.has(y.id));
      }
    )), u = O(() => r.value ? "All Queued" : o.itemType === "models" ? "Download All" : "Install All");
    function c(y) {
      return o.queuedItems.has(y.id);
    }
    function d(y) {
      return o.installingItem === y.id;
    }
    function v(y) {
      var k;
      return ((k = o.installedItems) == null ? void 0 : k.has(y.id)) ?? !1;
    }
    function f(y) {
      var k;
      return ((k = o.failedItems) == null ? void 0 : k.has(y.id)) ?? !1;
    }
    function p(y) {
      var k;
      return ((k = o.failedItems) == null ? void 0 : k.get(y.id)) || "Unknown error";
    }
    function w(y) {
      return y.actions && y.actions.length > 0 ? y.actions : [{
        key: "default",
        label: o.itemType === "models" ? "Download" : "Install",
        variant: "secondary"
      }];
    }
    return (y, k) => (n(), L(Ct, {
      title: e.title,
      size: "md",
      onClose: k[2] || (k[2] = (x) => a("close"))
    }, {
      body: g(() => [
        t("div", iM, [
          t("span", rM, m(e.items.length) + " " + m(e.items.length === 1 ? "item" : "items"), 1),
          l.value.length > 1 ? (n(), L(Re, {
            key: 0,
            size: "sm",
            variant: "secondary",
            disabled: r.value,
            onClick: k[0] || (k[0] = (x) => a("bulk-action"))
          }, {
            default: g(() => [
              $(m(u.value), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : h("", !0)
        ]),
        t("div", uM, [
          (n(!0), i(H, null, _e(e.items, (x) => (n(), i("div", {
            key: x.id,
            class: "resource-item"
          }, [
            t("div", cM, [
              t("span", dM, m(x.name), 1),
              x.subtitle ? (n(), i("span", mM, m(x.subtitle), 1)) : h("", !0)
            ]),
            x.canAction ? (n(), i(H, { key: 0 }, [
              d(x) ? (n(), i("span", fM, "Installing...")) : f(x) ? (n(), i("span", {
                key: 1,
                class: "failed-badge",
                title: p(x)
              }, "Failed ⚠", 8, vM)) : v(x) ? (n(), i("span", pM, "Installed")) : c(x) ? (n(), i("span", gM, "Queued")) : (n(), i("div", hM, [
                (n(!0), i(H, null, _e(w(x), (C) => (n(), L(Re, {
                  key: `${x.id}-${C.key}`,
                  size: "sm",
                  variant: C.variant || "secondary",
                  onClick: (S) => a("action", x, C.key)
                }, {
                  default: g(() => [
                    $(m(C.label), 1)
                  ]),
                  _: 2
                }, 1032, ["variant", "onClick"]))), 128))
              ]))
            ], 64)) : (n(), i("span", yM, m(x.actionDisabledReason || "Not available"), 1))
          ]))), 128))
        ])
      ]),
      footer: g(() => [
        _(Re, {
          variant: "secondary",
          onClick: k[1] || (k[1] = (x) => a("close"))
        }, {
          default: g(() => [...k[3] || (k[3] = [
            $("Close", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), _M = /* @__PURE__ */ Se(wM, [["__scopeId", "data-v-ec7e9202"]]), kM = {
  key: 0,
  class: "loading-state"
}, bM = {
  key: 1,
  class: "analysis-results"
}, $M = {
  key: 0,
  class: "section"
}, CM = { class: "section-header" }, xM = { class: "section-title" }, SM = { class: "item-list" }, IM = { class: "package-info" }, EM = { class: "package-name" }, TM = { class: "node-count" }, MM = {
  key: 1,
  class: "installing-badge"
}, PM = {
  key: 2,
  class: "queued-badge"
}, RM = ["title"], NM = {
  key: 4,
  class: "installed-badge"
}, LM = {
  key: 1,
  class: "section"
}, DM = { class: "section-header" }, OM = { class: "section-title" }, UM = { class: "item-list" }, AM = { class: "node-type" }, zM = {
  key: 0,
  class: "overflow-note"
}, VM = {
  key: 2,
  class: "section"
}, FM = { class: "section-header" }, BM = { class: "section-title" }, WM = { class: "item-list" }, GM = { class: "node-type" }, jM = { class: "not-found" }, HM = {
  key: 0,
  class: "overflow-note"
}, qM = {
  key: 3,
  class: "section"
}, KM = { class: "section-header" }, JM = { class: "section-title" }, YM = { class: "item-list" }, QM = { class: "package-info community-info" }, XM = { class: "community-title-row" }, ZM = { class: "package-name" }, eP = { class: "node-count" }, tP = { class: "community-mapping-note" }, sP = { key: 0 }, oP = {
  key: 0,
  class: "community-actions"
}, nP = {
  key: 1,
  class: "installing-badge"
}, aP = {
  key: 2,
  class: "queued-badge"
}, lP = ["title"], iP = {
  key: 4,
  class: "installed-badge"
}, rP = ["title"], uP = {
  key: 1,
  class: "no-url"
}, cP = {
  key: 4,
  class: "section"
}, dP = { class: "section-header" }, mP = { class: "section-title" }, fP = { class: "item-list" }, vP = { class: "model-info" }, pP = { class: "model-name" }, gP = {
  key: 1,
  class: "queued-badge"
}, hP = {
  key: 1,
  class: "no-url"
}, yP = { class: "dont-show-again" }, wP = 3e4, _P = /* @__PURE__ */ xe({
  __name: "MissingResourcesPopup",
  setup(e) {
    const s = b(!1), o = b(null), a = b(null), l = b(!1), r = b(/* @__PURE__ */ new Set()), u = b(/* @__PURE__ */ new Set()), c = b(/* @__PURE__ */ new Map()), d = b(/* @__PURE__ */ new Set()), v = b(!1), f = b(null), p = b(0), w = b(null), y = b(/* @__PURE__ */ new Set()), k = b(/* @__PURE__ */ new Map()), x = b(/* @__PURE__ */ new Map()), { addToQueue: C } = Lo(), { queueNodeInstall: S } = ct(), U = O(() => {
      var T;
      return ((T = a.value) == null ? void 0 : T.package_aliases) || {};
    });
    function I(T) {
      if (!T) return null;
      const re = U.value;
      let ue = T;
      const Ae = /* @__PURE__ */ new Set();
      for (; re[ue] && !Ae.has(ue); )
        Ae.add(ue), ue = re[ue];
      return ue;
    }
    function E(T, re) {
      return T instanceof Error && T.message ? T.message : typeof T == "string" && T.trim().length > 0 ? T : re;
    }
    function N(T) {
      for (const [re, ue] of k.value.entries())
        ue === T && k.value.delete(re);
    }
    function z(T) {
      if (!x.value.has(T)) return;
      const re = x.value.get(T);
      clearTimeout(re), x.value.delete(T);
    }
    function q() {
      for (const T of x.value.values())
        clearTimeout(T);
      x.value = /* @__PURE__ */ new Map();
    }
    function D(T) {
      z(T);
      const re = setTimeout(() => {
        if (x.value.delete(T), !u.value.has(T)) return;
        N(T), u.value.delete(T), f.value === T && (f.value = null), c.value.set(T, "Queue timeout — please retry"), console.warn("[ComfyGit] Queue timeout waiting for cm-task-started:", T);
      }, wP);
      x.value.set(T, re);
    }
    function G(T) {
      const re = `Cannot install "${T.title}" - package_id is missing`;
      c.value.set(T.item_id, re), o.value = re, console.warn("[ComfyGit] Community install requested without package_id:", T);
    }
    const Z = O(() => te.value.length > 0 || ge.value.length > 0 || oe.value.length > 0 || X.value.length > 0 || me.value.length > 0), te = O(() => {
      var ue, Ae;
      if (!((ue = a.value) != null && ue.nodes)) return [];
      const T = /* @__PURE__ */ new Map(), re = (a.value.nodes.resolved || []).filter((ze) => {
        var Ie;
        return !ze.is_installed && ((Ie = ze.package) == null ? void 0 : Ie.package_id);
      });
      for (const ze of re) {
        const Ie = I(ze.package.package_id);
        if (!Ie) continue;
        T.has(Ie) || T.set(Ie, {
          package_id: Ie,
          title: ze.package.title || Ie,
          node_count: 0,
          node_types: [],
          repository: ze.package.repository || null,
          latest_version: ze.package.latest_version || null
        });
        const qe = T.get(Ie);
        qe.node_count++, qe.node_types.push(((Ae = ze.reference) == null ? void 0 : Ae.node_type) || ze.node_type);
      }
      return Array.from(T.values());
    }), ie = O(() => te.value.reduce((T, re) => T + re.node_count, 0)), ge = O(() => {
      var T;
      return (T = a.value) != null && T.nodes ? (a.value.nodes.unresolved || []).map((re) => {
        var ue;
        return {
          node_type: ((ue = re.reference) == null ? void 0 : ue.node_type) || re.node_type
        };
      }) : [];
    }), oe = O(() => {
      var re;
      if (!((re = a.value) != null && re.nodes)) return [];
      const T = a.value.node_guidance || {};
      return (a.value.nodes.version_gated || []).map((ue) => {
        var ze;
        const Ae = ((ze = ue.reference) == null ? void 0 : ze.node_type) || ue.node_type;
        return {
          node_type: Ae,
          guidance: ue.guidance || T[Ae] || null
        };
      });
    }), X = O(() => {
      var ue, Ae, ze, Ie, qe, Qe, at, rt;
      if (!((ue = a.value) != null && ue.nodes)) return [];
      const T = a.value.node_guidance || {}, re = /* @__PURE__ */ new Map();
      for (const dt of a.value.nodes.uninstallable || []) {
        const It = ((Ae = dt.reference) == null ? void 0 : Ae.node_type) || dt.node_type, Wt = I(((ze = dt.package) == null ? void 0 : ze.package_id) || null), ut = Wt || `node:${It}`;
        re.has(ut) || re.set(ut, {
          item_id: ut,
          node_type: It,
          title: ((Ie = dt.package) == null ? void 0 : Ie.title) || Wt || It,
          node_count: 0,
          package_id: Wt,
          repository: ((qe = dt.package) == null ? void 0 : qe.repository) || null,
          latest_version: ((Qe = dt.package) == null ? void 0 : Qe.latest_version) || null,
          guidance: dt.guidance || T[It] || null
        });
        const ve = re.get(ut);
        ve.node_count++, ve.guidance || (ve.guidance = dt.guidance || T[It] || null), !ve.repository && ((at = dt.package) != null && at.repository) && (ve.repository = dt.package.repository), !ve.latest_version && ((rt = dt.package) != null && rt.latest_version) && (ve.latest_version = dt.package.latest_version);
      }
      return Array.from(re.values());
    }), de = O(() => X.value.filter((T) => !!T.package_id)), Ne = O(() => X.value.length >= 5 ? X.value.slice(0, 4) : X.value), le = O(() => de.value.length > 0 && de.value.every((T) => {
      const re = T.package_id;
      return r.value.has(re) || u.value.has(re) || c.value.has(re);
    }));
    function pe(T) {
      const re = [
        { key: "install_registry", label: "Install", variant: "secondary" }
      ];
      return T.repository && re.push({ key: "install_git", label: "Install via Git", variant: "ghost" }), re;
    }
    const me = O(() => {
      var ze;
      if (!((ze = a.value) != null && ze.models)) return [];
      const T = (a.value.models.resolved || []).filter(
        (Ie) => Ie.match_type === "download_intent" || Ie.match_type === "property_download_intent" || Ie.match_type === "not_found"
      ).map((Ie) => {
        var qe, Qe, at, rt;
        return {
          filename: ((Qe = (qe = Ie.reference) == null ? void 0 : qe.widget_value) == null ? void 0 : Qe.split("/").pop()) || ((at = Ie.reference) == null ? void 0 : at.widget_value) || Ie.widget_value,
          widget_value: ((rt = Ie.reference) == null ? void 0 : rt.widget_value) || Ie.widget_value,
          // Backend returns download_source as URL string directly, and target_path at top level
          url: Ie.download_source || null,
          targetPath: Ie.target_path || null,
          canDownload: !!(Ie.download_source && Ie.target_path)
        };
      }), re = (a.value.models.unresolved || []).map((Ie) => {
        var qe, Qe, at, rt;
        return {
          filename: ((Qe = (qe = Ie.reference) == null ? void 0 : qe.widget_value) == null ? void 0 : Qe.split("/").pop()) || ((at = Ie.reference) == null ? void 0 : at.widget_value) || Ie.widget_value,
          widget_value: ((rt = Ie.reference) == null ? void 0 : rt.widget_value) || Ie.widget_value,
          url: null,
          targetPath: null,
          canDownload: !1
        };
      }), ue = /* @__PURE__ */ new Map(), Ae = [];
      for (const Ie of T) {
        if (!Ie.url) {
          Ae.push(Ie);
          continue;
        }
        const qe = `${Ie.filename}::${Ie.url}`, Qe = ue.get(qe);
        if (!Qe) {
          ue.set(qe, Ie);
          continue;
        }
        !Qe.targetPath && Ie.targetPath && (Qe.targetPath = Ie.targetPath), !Qe.canDownload && Ie.canDownload && (Qe.canDownload = Ie.canDownload);
      }
      return [...ue.values(), ...Ae, ...re];
    }), Ue = O(() => me.value.filter((T) => T.canDownload)), se = O(() => te.value.length >= 5 ? te.value.slice(0, 4) : te.value), ne = O(() => me.value.length >= 5 ? me.value.slice(0, 4) : me.value), M = O(() => te.value.length > 0 && te.value.every(
      (T) => r.value.has(T.package_id) || u.value.has(T.package_id) || c.value.has(T.package_id)
    )), A = O(() => Ue.value.length > 0 && Ue.value.every((T) => d.value.has(T.url))), Q = O(() => te.value.length > 0 || de.value.length > 0 || Ue.value.length > 0), P = O(() => {
      const T = (te.value.length === 0 || M.value) && (de.value.length === 0 || le.value), re = Ue.value.length === 0 || A.value;
      return T && re;
    }), R = O(() => w.value === "models" ? `Missing Models (${me.value.length})` : w.value === "packages" ? `Missing Custom Nodes (${ie.value})` : w.value === "community" ? `Community-Mapped Packages (${X.value.length})` : ""), ce = O(() => w.value === "models" ? me.value.map((T) => ({
      id: T.url || T.widget_value,
      name: T.filename,
      canAction: T.canDownload,
      actionDisabledReason: T.canDownload ? void 0 : "Manual download required"
    })) : w.value === "packages" ? te.value.map((T) => ({
      id: T.package_id,
      name: T.title,
      subtitle: `(${T.node_count} ${T.node_count === 1 ? "node" : "nodes"})`,
      canAction: !0
    })) : w.value === "community" ? X.value.map((T) => ({
      id: T.package_id || T.item_id,
      name: T.title,
      subtitle: `(${T.node_count} ${T.node_count === 1 ? "node" : "nodes"})`,
      canAction: !!T.package_id,
      actionDisabledReason: T.package_id ? void 0 : "Manual setup required",
      actions: T.package_id ? pe(T) : []
    })) : []);
    function Ve(T, re) {
      if (w.value === "models") {
        const ue = me.value.find((Ae) => Ae.url === T.id || Ae.widget_value === T.id);
        ue && ye(ue);
      } else if (w.value === "packages") {
        const ue = te.value.find((Ae) => Ae.package_id === T.id);
        ue && B(ue);
      } else if (w.value === "community") {
        const ue = X.value.find((ze) => (ze.package_id || ze.item_id) === T.id);
        if (!ue) return;
        if (!ue.package_id) {
          G({ item_id: ue.item_id, title: ue.title });
          return;
        }
        W(ue, re === "install_git" ? "git" : "registry");
      }
    }
    function je() {
      w.value === "models" ? Pe() : w.value === "packages" ? ke() : w.value === "community" && $e();
    }
    async function B(T) {
      return J(T.package_id, T.latest_version, "registry");
    }
    async function W(T, re) {
      return T.package_id ? J(T.package_id, T.latest_version, re, T.repository) : (G({ item_id: T.item_id, title: T.title }), !1);
    }
    async function J(T, re, ue, Ae) {
      const ze = I(T) || T, Ie = re || "latest";
      if (r.value.has(ze) || u.value.has(ze) || c.value.has(ze))
        return !0;
      j(), f.value = ze;
      let qe = null;
      try {
        const Qe = {
          id: ze,
          version: Ie,
          selected_version: Ie,
          mode: "remote",
          channel: "default"
        };
        ue === "git" && Ae && (Qe.repository = Ae, Qe.install_source = "git");
        const { ui_id: at } = await S(Qe, {
          beforeQueueStart: (rt) => {
            qe = rt, k.value.set(rt, ze), u.value.add(ze), D(ze), console.log("[ComfyGit] Registered pending install:", {
              ui_id: rt,
              packageId: ze,
              pendingInstalls: Array.from(k.value.entries())
            });
          }
        });
        return qe || (qe = at, k.value.set(at, ze), u.value.add(ze), D(ze), console.log("[ComfyGit] Registered pending install (fallback):", {
          ui_id: at,
          packageId: ze,
          pendingInstalls: Array.from(k.value.entries())
        })), !0;
      } catch (Qe) {
        const at = E(Qe, "Failed to queue install request");
        return console.error("[ComfyGit] Failed to queue package install:", Qe), qe && k.value.delete(qe), N(ze), z(ze), u.value.delete(ze), c.value.set(ze, at), !1;
      } finally {
        f.value = null;
      }
    }
    function ye(T) {
      !T.url || !T.targetPath || d.value.has(T.url) || (C([{
        workflow: "unsaved",
        filename: T.filename,
        url: T.url,
        targetPath: T.targetPath
      }]), d.value.add(T.url));
    }
    async function ke() {
      const T = { attempted: 0, failed: 0 };
      for (const re of te.value)
        !r.value.has(re.package_id) && !u.value.has(re.package_id) && !c.value.has(re.package_id) && (T.attempted++, await B(re) || T.failed++);
      return T;
    }
    async function $e() {
      const T = { attempted: 0, failed: 0 };
      for (const re of de.value) {
        const ue = re.package_id;
        !r.value.has(ue) && !u.value.has(ue) && !c.value.has(ue) && (T.attempted++, await W(re, "registry") || T.failed++);
      }
      return T;
    }
    function Pe() {
      const T = Ue.value.filter(
        (re) => !d.value.has(re.url)
      );
      if (T.length === 0) return 0;
      C(T.map((re) => ({
        workflow: "unsaved",
        filename: re.filename,
        url: re.url,
        targetPath: re.targetPath
      })));
      for (const re of T)
        d.value.add(re.url);
      return T.length;
    }
    async function Le() {
      const T = await ke(), re = await $e();
      Pe();
      const ue = T.attempted + re.attempted, Ae = T.failed + re.failed;
      if (ue > 0 && Ae > 0) {
        const ze = ue - Ae;
        o.value = `${ze} of ${ue} installs queued, ${Ae} failed`;
      }
    }
    function Oe() {
      v.value ? localStorage.setItem("comfygit:popup-disabled", "true") : localStorage.removeItem("comfygit:popup-disabled");
    }
    async function Te(T) {
      var ze, Ie;
      if (localStorage.getItem("comfygit:popup-disabled") === "true") {
        console.log("[ComfyGit] Popup globally disabled");
        return;
      }
      const re = T == null ? void 0 : T.id;
      if (re && y.value.has(re)) {
        console.log(`[ComfyGit] Already shown popup for workflow ${re} this session`);
        return;
      }
      const ue = window.app, Ae = (ze = ue == null ? void 0 : ue.extensionManager) == null ? void 0 : ze.workflow;
      if (Ae) {
        let at = !1;
        for (let rt = 0; rt < 20; rt++) {
          const dt = Ae.activeWorkflow;
          if (!dt) {
            await new Promise((ut) => setTimeout(ut, 50));
            continue;
          }
          const It = (Ie = dt.activeState) == null ? void 0 : Ie.id;
          if (!(re && It === re)) {
            rt < 19 && await new Promise((ut) => setTimeout(ut, 50));
            continue;
          }
          if (at = !0, dt.isPersisted === !0) {
            console.log(`[ComfyGit] Skipping popup for saved workflow: ${dt.filename}`), re && y.value.add(re);
            return;
          }
          break;
        }
        at || console.warn("[ComfyGit] Could not verify workflow state, showing popup as fallback");
      }
      s.value = !0, o.value = null, q(), r.value = /* @__PURE__ */ new Set(), u.value = /* @__PURE__ */ new Set(), c.value = /* @__PURE__ */ new Map(), d.value = /* @__PURE__ */ new Set(), k.value = /* @__PURE__ */ new Map(), v.value = !1, p.value = 0;
      try {
        const qe = await fetch("/v2/comfygit/workflow/analyze-json", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ workflow: T, name: "unsaved" })
        });
        if (!qe.ok) {
          const Qe = await qe.json();
          throw new Error(Qe.error || "Failed to analyze workflow");
        }
        a.value = await qe.json(), Z.value && (l.value = !0, re && y.value.add(re));
      } catch (qe) {
        console.error("[ComfyGit] Failed to analyze workflow:", qe);
      } finally {
        s.value = !1;
      }
    }
    function Be() {
      q(), l.value = !1, a.value = null;
    }
    function Me(T) {
      const { workflow: re } = T.detail;
      re && Te(re);
    }
    function we(T) {
      var Ae;
      const re = (Ae = T.detail) == null ? void 0 : Ae.ui_id;
      console.log("[ComfyGit] cm-task-started received:", {
        taskId: re,
        pendingInstalls: Array.from(k.value.entries()),
        eventDetail: T.detail
      });
      const ue = k.value.get(re);
      ue ? (z(ue), f.value = ue, console.log("[ComfyGit] Installing package:", ue)) : console.warn("[ComfyGit] cm-task-started: No matching package for taskId:", re);
    }
    function ee(T) {
      var ze, Ie, qe, Qe, at, rt, dt;
      const re = (ze = T.detail) == null ? void 0 : ze.ui_id, ue = (qe = (Ie = T.detail) == null ? void 0 : Ie.status) == null ? void 0 : qe.status_str;
      console.log("[ComfyGit] cm-task-completed received:", {
        taskId: re,
        status: ue,
        pendingInstalls: Array.from(k.value.entries()),
        eventDetail: T.detail
      });
      const Ae = k.value.get(re);
      if (Ae) {
        if (z(Ae), k.value.delete(re), u.value.delete(Ae), f.value === Ae && (f.value = null), ue === "success")
          r.value.add(Ae), p.value++, console.log("[ComfyGit] Package installed successfully:", Ae);
        else {
          const It = ((rt = (at = (Qe = T.detail) == null ? void 0 : Qe.status) == null ? void 0 : at.messages) == null ? void 0 : rt[0]) || ((dt = T.detail) == null ? void 0 : dt.result) || "Unknown error";
          c.value.set(Ae, It), console.error("[ComfyGit] Package install failed:", Ae, It);
        }
        k.value.size === 0 && p.value > 0 && (console.log("[ComfyGit] All installs complete, dispatching nodes-installed event:", p.value), window.dispatchEvent(new CustomEvent("comfygit:nodes-installed", {
          detail: { count: p.value }
        })));
      } else
        console.warn("[ComfyGit] cm-task-completed: No matching package for taskId:", re);
    }
    let We = null;
    function V() {
      var T;
      return We || (We = (T = window.app) == null ? void 0 : T.api), We;
    }
    let F = !1;
    function j() {
      if (F) return !0;
      const T = V();
      return T ? (T.addEventListener("cm-task-started", we), T.addEventListener("cm-task-completed", ee), T.addEventListener("comfygit:workflow-changed", Ee), F = !0, console.log("[ComfyGit] Registered WebSocket event listeners for install tracking"), !0) : (console.warn("[ComfyGit] Could not register WebSocket listeners - API not available"), !1);
    }
    function Ee(T) {
      const { change_type: re } = T.detail;
      (re === "created" || re === "modified") && l.value && (q(), l.value = !1, console.log("[ComfyGit] Workflow saved, auto-dismissing popup"));
    }
    return ot(() => {
      window.addEventListener("comfygit:workflow-loaded", Me);
    }), Ro(() => {
      if (q(), window.removeEventListener("comfygit:workflow-loaded", Me), F) {
        const T = V();
        T && (T.removeEventListener("cm-task-started", we), T.removeEventListener("cm-task-completed", ee), T.removeEventListener("comfygit:workflow-changed", Ee)), F = !1;
      }
    }), (T, re) => (n(), i(H, null, [
      l.value ? (n(), L(Ct, {
        key: 0,
        title: "Missing Dependencies",
        size: "md",
        loading: s.value,
        error: o.value || void 0,
        onClose: Be
      }, {
        body: g(() => [
          s.value ? (n(), i("div", kM, [...re[5] || (re[5] = [
            t("div", { class: "loading-spinner" }, null, -1),
            t("span", null, "Analyzing workflow...", -1)
          ])])) : a.value && Z.value ? (n(), i("div", bM, [
            te.value.length > 0 ? (n(), i("div", $M, [
              t("div", CM, [
                t("span", xM, "Missing Custom Nodes (" + m(ie.value) + ")", 1),
                te.value.length > 1 ? (n(), L(Re, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: M.value,
                  onClick: ke
                }, {
                  default: g(() => [
                    $(m(M.value ? "All Queued" : "Install All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : h("", !0)
              ]),
              t("div", SM, [
                (n(!0), i(H, null, _e(se.value, (ue) => (n(), i("div", {
                  key: ue.package_id,
                  class: "package-item"
                }, [
                  t("div", IM, [
                    t("span", EM, m(ue.title), 1),
                    t("span", TM, "(" + m(ue.node_count) + " " + m(ue.node_count === 1 ? "node" : "nodes") + ")", 1)
                  ]),
                  !r.value.has(ue.package_id) && !u.value.has(ue.package_id) && !c.value.has(ue.package_id) ? (n(), L(Re, {
                    key: 0,
                    size: "sm",
                    variant: "secondary",
                    disabled: f.value === ue.package_id,
                    onClick: (Ae) => B(ue)
                  }, {
                    default: g(() => [
                      $(m(f.value === ue.package_id ? "Queueing..." : "Install"), 1)
                    ]),
                    _: 2
                  }, 1032, ["disabled", "onClick"])) : f.value === ue.package_id ? (n(), i("span", MM, "Installing...")) : u.value.has(ue.package_id) ? (n(), i("span", PM, "Queued")) : c.value.has(ue.package_id) ? (n(), i("span", {
                    key: 3,
                    class: "failed-badge",
                    title: c.value.get(ue.package_id)
                  }, "Failed ⚠", 8, RM)) : (n(), i("span", NM, "Installed"))
                ]))), 128)),
                te.value.length >= 5 ? (n(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: re[0] || (re[0] = (ue) => w.value = "packages")
                }, [
                  t("span", null, "Show all " + m(te.value.length) + " packages...", 1),
                  re[6] || (re[6] = t("span", { class: "show-all-arrow" }, "→", -1))
                ])) : h("", !0)
              ])
            ])) : h("", !0),
            ge.value.length > 0 ? (n(), i("div", LM, [
              t("div", DM, [
                t("span", OM, "Unknown Nodes (" + m(ge.value.length) + ")", 1)
              ]),
              t("div", UM, [
                (n(!0), i(H, null, _e(ge.value.slice(0, 5), (ue) => (n(), i("div", {
                  key: ue.node_type,
                  class: "item"
                }, [
                  t("code", AM, m(ue.node_type), 1),
                  re[7] || (re[7] = t("span", { class: "not-found" }, "Not found in registry", -1))
                ]))), 128)),
                ge.value.length > 5 ? (n(), i("div", zM, " ...and " + m(ge.value.length - 5) + " more ", 1)) : h("", !0)
              ])
            ])) : h("", !0),
            oe.value.length > 0 ? (n(), i("div", VM, [
              t("div", FM, [
                t("span", BM, "Requires Newer ComfyUI (" + m(oe.value.length) + ")", 1)
              ]),
              t("div", WM, [
                (n(!0), i(H, null, _e(oe.value.slice(0, 5), (ue) => (n(), i("div", {
                  key: `vg-${ue.node_type}`,
                  class: "item"
                }, [
                  t("code", GM, m(ue.node_type), 1),
                  t("span", jM, m(ue.guidance || "Requires a newer ComfyUI version"), 1)
                ]))), 128)),
                oe.value.length > 5 ? (n(), i("div", HM, " ...and " + m(oe.value.length - 5) + " more ", 1)) : h("", !0)
              ])
            ])) : h("", !0),
            X.value.length > 0 ? (n(), i("div", qM, [
              t("div", KM, [
                t("span", JM, "Community-Mapped Packages (" + m(X.value.length) + ")", 1),
                de.value.length > 1 ? (n(), L(Re, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: le.value,
                  onClick: $e
                }, {
                  default: g(() => [
                    $(m(le.value ? "All Queued" : "Install All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : h("", !0)
              ]),
              t("div", YM, [
                (n(!0), i(H, null, _e(Ne.value, (ue) => (n(), i("div", {
                  key: `community-${ue.item_id}`,
                  class: "package-item"
                }, [
                  t("div", QM, [
                    t("div", XM, [
                      t("span", ZM, m(ue.title), 1),
                      t("span", eP, "(" + m(ue.node_count) + " " + m(ue.node_count === 1 ? "node" : "nodes") + ")", 1)
                    ]),
                    t("div", tP, [
                      re[8] || (re[8] = $(" Found via community mapping — registry metadata may be incomplete", -1)),
                      ue.guidance ? (n(), i("span", sP, ". " + m(ue.guidance), 1)) : h("", !0)
                    ])
                  ]),
                  ue.package_id ? (n(), i(H, { key: 0 }, [
                    !r.value.has(ue.package_id) && !u.value.has(ue.package_id) && !c.value.has(ue.package_id) ? (n(), i("div", oP, [
                      _(Re, {
                        size: "sm",
                        variant: "secondary",
                        disabled: f.value === ue.package_id,
                        onClick: (Ae) => W(ue, "registry")
                      }, {
                        default: g(() => [
                          $(m(f.value === ue.package_id ? "Queueing..." : "Install"), 1)
                        ]),
                        _: 2
                      }, 1032, ["disabled", "onClick"]),
                      ue.repository ? (n(), L(Re, {
                        key: 0,
                        size: "sm",
                        variant: "ghost",
                        disabled: f.value === ue.package_id,
                        onClick: (Ae) => W(ue, "git")
                      }, {
                        default: g(() => [...re[9] || (re[9] = [
                          $(" Install via Git ", -1)
                        ])]),
                        _: 1
                      }, 8, ["disabled", "onClick"])) : h("", !0)
                    ])) : f.value === ue.package_id ? (n(), i("span", nP, "Installing...")) : u.value.has(ue.package_id) ? (n(), i("span", aP, "Queued")) : c.value.has(ue.package_id) ? (n(), i("span", {
                      key: 3,
                      class: "failed-badge",
                      title: c.value.get(ue.package_id)
                    }, "Failed ⚠", 8, lP)) : (n(), i("span", iP, "Installed"))
                  ], 64)) : (n(), i(H, { key: 1 }, [
                    c.value.has(ue.item_id) ? (n(), i("span", {
                      key: 0,
                      class: "failed-badge",
                      title: c.value.get(ue.item_id)
                    }, "Failed ⚠", 8, rP)) : (n(), i("span", uP, "Manual setup required"))
                  ], 64))
                ]))), 128)),
                X.value.length >= 5 ? (n(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: re[1] || (re[1] = (ue) => w.value = "community")
                }, [
                  t("span", null, "Show all " + m(X.value.length) + " packages...", 1),
                  re[10] || (re[10] = t("span", { class: "show-all-arrow" }, "→", -1))
                ])) : h("", !0)
              ])
            ])) : h("", !0),
            me.value.length > 0 ? (n(), i("div", cP, [
              t("div", dP, [
                t("span", mP, "Missing Models (" + m(me.value.length) + ")", 1),
                Ue.value.length > 1 ? (n(), L(Re, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: A.value,
                  onClick: Pe
                }, {
                  default: g(() => [
                    $(m(A.value ? "All Queued" : "Download All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : h("", !0)
              ]),
              t("div", fP, [
                (n(!0), i(H, null, _e(ne.value, (ue) => (n(), i("div", {
                  key: ue.widget_value,
                  class: "model-item"
                }, [
                  t("div", vP, [
                    t("span", pP, m(ue.filename), 1)
                  ]),
                  ue.canDownload ? (n(), i(H, { key: 0 }, [
                    d.value.has(ue.url) ? (n(), i("span", gP, "Queued")) : (n(), L(Re, {
                      key: 0,
                      size: "sm",
                      variant: "secondary",
                      onClick: (Ae) => ye(ue)
                    }, {
                      default: g(() => [...re[11] || (re[11] = [
                        $(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]))
                  ], 64)) : (n(), i("span", hP, "Manual download required"))
                ]))), 128)),
                me.value.length >= 5 ? (n(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: re[2] || (re[2] = (ue) => w.value = "models")
                }, [
                  t("span", null, "Show all " + m(me.value.length) + " models...", 1),
                  re[12] || (re[12] = t("span", { class: "show-all-arrow" }, "→", -1))
                ])) : h("", !0)
              ])
            ])) : h("", !0),
            t("div", yP, [
              _(Yn, {
                modelValue: v.value,
                "onUpdate:modelValue": [
                  re[3] || (re[3] = (ue) => v.value = ue),
                  Oe
                ]
              }, {
                default: g(() => [...re[13] || (re[13] = [
                  $(" Don't show this popup ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])
          ])) : h("", !0)
        ]),
        footer: g(() => [
          _(Re, {
            variant: "secondary",
            onClick: Be
          }, {
            default: g(() => [...re[14] || (re[14] = [
              $("Dismiss", -1)
            ])]),
            _: 1
          }),
          Q.value ? (n(), L(Re, {
            key: 0,
            variant: "primary",
            disabled: P.value,
            onClick: Le
          }, {
            default: g(() => [
              $(m(P.value ? "All Done" : "Download All"), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : h("", !0)
        ]),
        _: 1
      }, 8, ["loading", "error"])) : h("", !0),
      w.value ? (n(), L(_M, {
        key: 1,
        title: R.value,
        items: ce.value,
        "item-type": w.value,
        "queued-items": w.value === "models" ? d.value : u.value,
        "installed-items": w.value === "models" ? void 0 : r.value,
        "failed-items": w.value === "models" ? void 0 : c.value,
        "installing-item": w.value === "models" ? void 0 : f.value,
        onClose: re[4] || (re[4] = (ue) => w.value = null),
        onAction: Ve,
        onBulkAction: je
      }, null, 8, ["title", "items", "item-type", "queued-items", "installed-items", "failed-items", "installing-item"])) : h("", !0)
    ], 64));
  }
}), kP = /* @__PURE__ */ Se(_P, [["__scopeId", "data-v-dfb55c3f"]]), bP = {
  key: 0,
  class: "io-mapping-root"
}, $P = { class: "io-mapping-visual-layer" }, CP = { class: "io-mapping-header" }, xP = { class: "io-mapping-header-main" }, SP = { class: "io-mapping-subtitle" }, IP = {
  key: 0,
  class: "io-mapping-hover-summary"
}, EP = { class: "io-mapping-header-actions" }, TP = { class: "io-mapping-sidebar" }, MP = { class: "io-mapping-sidebar-scroll" }, PP = {
  key: 0,
  class: "io-state-block"
}, RP = {
  key: 1,
  class: "io-state-block io-state-error"
}, NP = { class: "contract-summary" }, LP = { class: "summary-pill" }, DP = { class: "summary-pill" }, OP = { class: "summary-pill" }, UP = { class: "mapping-section" }, AP = { class: "section-header" }, zP = {
  key: 0,
  class: "empty-message"
}, VP = ["onClick"], FP = { class: "item-card-title" }, BP = { class: "item-card-meta" }, WP = { class: "item-card-summary" }, GP = { key: 0 }, jP = { class: "mapping-section" }, HP = { class: "section-header" }, qP = {
  key: 0,
  class: "empty-message"
}, KP = ["onClick"], JP = { class: "item-card-title" }, YP = { class: "item-card-meta" }, QP = { class: "item-card-summary" }, XP = { class: "io-mapping-footer" }, ZP = /* @__PURE__ */ xe({
  __name: "WorkflowIOMappingOverlay",
  props: {
    comfyApp: {}
  },
  setup(e) {
    const s = e, { getWorkflowContract: o, saveWorkflowContract: a } = ct(), l = b(!1), r = b(""), u = b(!1), c = b(!1), d = b(null), v = b(null), f = b(null), p = b(null), w = b(null), y = b(0), k = b(null), x = b(null);
    let C = null;
    const S = [
      "string",
      "integer",
      "number",
      "boolean",
      "enum",
      "image",
      "video",
      "audio",
      "file"
    ], U = [
      { label: "Required", value: "true" },
      { label: "Optional", value: "false" }
    ], I = O(() => {
      if (!f.value)
        return { inputs: [], outputs: [] };
      const V = f.value.default_contract || "default";
      return f.value.contracts[V] || (f.value.contracts[V] = { inputs: [], outputs: [] }), f.value.contracts[V];
    }), E = O(() => {
      var F;
      const V = ((F = v.value) == null ? void 0 : F.contract_summary.status) ?? "none";
      return V === "valid" ? "Valid Contract" : V === "incomplete" ? "Incomplete Contract" : "No Contract";
    });
    function N(V) {
      return V ? JSON.parse(JSON.stringify(V)) : {
        version: 1,
        default_contract: "default",
        contracts: {
          default: { inputs: [], outputs: [] }
        }
      };
    }
    function z(V) {
      return V === "integer" || V === "number";
    }
    function q(V) {
      return V === "enum";
    }
    function D(V) {
      return V == null ? "" : String(V);
    }
    function G(V) {
      const F = V.trim();
      if (!F) return;
      const j = Number(F);
      return Number.isFinite(j) ? j : void 0;
    }
    function Z(V) {
      return (V || []).join(`
`);
    }
    function te(V) {
      return V.split(/[\n,]/).map((F) => F.trim()).filter(Boolean);
    }
    function ie(V) {
      return typeof V == "string" ? V.length > 24 ? `${V.slice(0, 24)}...` : V : String(V);
    }
    function ge(V) {
      return V == null ? "" : String(V);
    }
    function oe(V) {
      var j;
      const F = (j = V == null ? void 0 : V.options) == null ? void 0 : j.values;
      return Array.isArray(F) ? F.map((Ee) => String(Ee)).filter(Boolean) : [];
    }
    function X(V, F) {
      var T;
      const j = (T = V == null ? void 0 : V.options) == null ? void 0 : T[F];
      if (j == null || j === "") return;
      const Ee = Number(j);
      return Number.isFinite(Ee) ? Ee : void 0;
    }
    function de(V, F) {
      return V.trim().toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "") || F;
    }
    function Ne(V) {
      const F = String(V ?? "").toLowerCase();
      return F.includes("image") ? "image" : F.includes("video") ? "video" : F.includes("audio") ? "audio" : F.includes("int") ? "integer" : F.includes("float") || F.includes("double") || F.includes("number") ? "number" : F.includes("bool") ? "boolean" : F.includes("combo") || F.includes("enum") ? "enum" : F.includes("string") || F.includes("text") ? "string" : "file";
    }
    function le(V) {
      I.value.inputs.splice(V, 1), p.value === V && (p.value = null);
    }
    function pe(V) {
      I.value.outputs.splice(V, 1), w.value === V && (w.value = null);
    }
    function me(V) {
      p.value = p.value === V ? null : V, p.value != null && (w.value = null);
    }
    function Ue(V) {
      w.value = w.value === V ? null : V, w.value != null && (p.value = null);
    }
    function se(V) {
      const F = typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(String(V)) : String(V);
      return document.querySelector(`[data-node-id="${F}"]`);
    }
    function ne(V) {
      return V instanceof Element ? !!V.closest(".io-mapping-header, .io-mapping-sidebar") : !1;
    }
    function M(V) {
      var Ee, T, re, ue, Ae, ze;
      if (!(V instanceof Element)) return null;
      const F = V.closest("[data-node-id]"), j = F == null ? void 0 : F.getAttribute("data-node-id");
      return j ? ((re = (T = (Ee = s.comfyApp) == null ? void 0 : Ee.graph) == null ? void 0 : T.getNodeById) == null ? void 0 : re.call(T, j)) ?? ((ze = (Ae = (ue = s.comfyApp) == null ? void 0 : ue.rootGraph) == null ? void 0 : Ae.getNodeById) == null ? void 0 : ze.call(Ae, j)) ?? null : null;
    }
    function A(V, F) {
      if (F == null || F < 0) return null;
      const j = se(V);
      return j ? j.querySelectorAll('[data-testid="node-widget"]')[F] ?? null : null;
    }
    function Q(V) {
      return !V || V.width <= 0 || V.height <= 0 ? null : {
        left: `${V.left}px`,
        top: `${V.top}px`,
        width: `${V.width}px`,
        height: `${V.height}px`
      };
    }
    function P(V) {
      const F = se((V == null ? void 0 : V.id) ?? "");
      if (F) return F.getBoundingClientRect();
      const j = s.comfyApp;
      if (!V || typeof (j == null ? void 0 : j.canvasPosToClientPos) != "function") return null;
      const T = j.canvasPosToClientPos([V.pos[0], V.pos[1] - 32]), re = j.canvasPosToClientPos([V.pos[0] + V.size[0], V.pos[1] + V.size[1]]);
      return !T || !re ? null : new DOMRect(T[0], T[1], re[0] - T[0], re[1] - T[1]);
    }
    function R(V) {
      var Ae, ze, Ie, qe, Qe, at, rt;
      const F = A(V.node_id, V.widget_idx);
      if (F) return F.getBoundingClientRect();
      const j = ((Ie = (ze = (Ae = s.comfyApp) == null ? void 0 : Ae.graph) == null ? void 0 : ze.getNodeById) == null ? void 0 : Ie.call(ze, String(V.node_id))) ?? ((at = (Qe = (qe = s.comfyApp) == null ? void 0 : qe.rootGraph) == null ? void 0 : Qe.getNodeById) == null ? void 0 : at.call(Qe, String(V.node_id)));
      if (!j || typeof V.widget_idx != "number" || !Array.isArray(j.widgets)) return null;
      const Ee = j.widgets[V.widget_idx];
      if (!Ee || typeof ((rt = s.comfyApp) == null ? void 0 : rt.canvasPosToClientPos) != "function") return P(j);
      const T = 10, re = s.comfyApp.canvasPosToClientPos([j.pos[0] + T, j.pos[1] + (Ee.y ?? 0)]), ue = s.comfyApp.canvasPosToClientPos([j.pos[0] + j.size[0] - T, j.pos[1] + (Ee.y ?? 0) + (Ee.computedHeight ?? 24)]);
      return !re || !ue ? P(j) : new DOMRect(re[0], re[1], ue[0] - re[0], ue[1] - re[1]);
    }
    function ce(V) {
      var j, Ee, T, re, ue, Ae;
      const F = ((T = (Ee = (j = s.comfyApp) == null ? void 0 : j.graph) == null ? void 0 : Ee.getNodeById) == null ? void 0 : T.call(Ee, String(V.node_id))) ?? ((Ae = (ue = (re = s.comfyApp) == null ? void 0 : re.rootGraph) == null ? void 0 : ue.getNodeById) == null ? void 0 : Ae.call(ue, String(V.node_id)));
      return P(F);
    }
    const Ve = O(() => (y.value, I.value.inputs.map((V, F) => {
      const j = Q(R(V));
      return j ? {
        key: `input-${F}-${V.node_id}-${V.widget_idx ?? "na"}`,
        style: j,
        active: p.value === F
      } : null;
    }).filter((V) => !!V))), je = O(() => (y.value, I.value.outputs.map((V, F) => {
      const j = Q(ce(V));
      return j ? {
        key: `output-${F}-${V.node_id}-${V.selector ?? "primary"}`,
        style: j,
        active: w.value === F
      } : null;
    }).filter((V) => !!V)));
    function B(V) {
      var Ie, qe, Qe, at, rt, dt, It, Wt, ut, ve;
      if (ne(V.target)) return null;
      const F = (Ie = s.comfyApp) == null ? void 0 : Ie.canvas;
      if (!F) return null;
      const j = (qe = F.convertEventToCanvasOffset) == null ? void 0 : qe.call(F, V);
      if (!j || j.length < 2) return null;
      const [Ee, T] = j, re = F.graph || ((Qe = s.comfyApp) == null ? void 0 : Qe.graph) || ((at = s.comfyApp) == null ? void 0 : at.rootGraph), ue = ((rt = re == null ? void 0 : re.getNodeOnPos) == null ? void 0 : rt.call(re, Ee, T, F.visible_nodes)) || ((dt = F.getNodeOnPos) == null ? void 0 : dt.call(F, Ee, T)) || M(V.target);
      if (!ue) return null;
      const Ae = (It = ue.getWidgetOnPos) == null ? void 0 : It.call(ue, Ee, T, !0);
      if (Ae)
        return { kind: "input", node: ue, widget: Ae, canvasX: Ee, canvasY: T };
      const ze = ((Wt = ue.getOutputOnPos) == null ? void 0 : Wt.call(ue, [Ee, T])) || ((ve = (ut = ue.constructor) == null ? void 0 : ut.nodeData) != null && ve.output_node ? { name: ue.title || ue.type || "output", type: "image" } : null);
      return ze ? { kind: "output", node: ue, output: ze, canvasX: Ee, canvasY: T } : null;
    }
    function W(V, F) {
      var Ae;
      const j = Array.isArray(V.widgets) ? V.widgets.indexOf(F) : -1, Ee = I.value.inputs.findIndex(
        (ze) => String(ze.node_id) === String(V.id) && ze.widget_idx === j
      );
      if (Ee >= 0) {
        p.value = Ee;
        return;
      }
      const T = typeof ((Ae = F == null ? void 0 : F.options) == null ? void 0 : Ae.property) == "string" ? F.options.property : void 0, re = (F == null ? void 0 : F.name) || T || "input", ue = {
        name: de(String(re), `input_${I.value.inputs.length + 1}`),
        display_name: String((F == null ? void 0 : F.name) || T || `Input ${I.value.inputs.length + 1}`),
        type: Ne(F == null ? void 0 : F.type),
        node_id: String(V.id),
        widget_idx: j >= 0 ? j : void 0,
        field_key: T,
        required: !0,
        default: (F == null ? void 0 : F.value) ?? ""
      };
      z(ue.type) && (ue.min = X(F, "min"), ue.max = X(F, "max")), q(ue.type) && (ue.enum_values = oe(F)), I.value.inputs.push(ue), p.value = I.value.inputs.length - 1, w.value = null;
    }
    function J(V, F) {
      const j = Array.isArray(V.outputs) ? V.outputs.indexOf(F) : -1, Ee = j >= 0 ? `slot:${j}` : "primary", T = I.value.outputs.findIndex(
        (ue) => String(ue.node_id) === String(V.id) && (ue.selector || "primary") === Ee
      );
      if (T >= 0) {
        w.value = T;
        return;
      }
      const re = {
        name: de(String((F == null ? void 0 : F.name) || "output"), `output_${I.value.outputs.length + 1}`),
        display_name: String((F == null ? void 0 : F.name) || `Output ${I.value.outputs.length + 1}`),
        type: Ne(F == null ? void 0 : F.type),
        node_id: String(V.id),
        selector: Ee
      };
      I.value.outputs.push(re), w.value = I.value.outputs.length - 1, p.value = null;
    }
    function ye(V) {
      var Ee, T, re;
      if (!l.value) {
        k.value = null, x.value = null;
        return;
      }
      const F = B(V);
      if (!F) {
        k.value = null, x.value = null;
        return;
      }
      if (F.kind === "input") {
        const ue = Array.isArray(F.node.widgets) ? F.node.widgets.indexOf(F.widget) : -1, Ae = Q(((Ee = A(F.node.id, ue)) == null ? void 0 : Ee.getBoundingClientRect()) ?? R({
          node_id: String(F.node.id),
          widget_idx: ue >= 0 ? ue : void 0
        }));
        if (!Ae) {
          k.value = null, x.value = null;
          return;
        }
        k.value = {
          kind: "input",
          label: `${((T = F.widget) == null ? void 0 : T.name) || "widget"} · Node ${F.node.id}`
        }, x.value = { kind: "input", style: Ae };
        return;
      }
      const j = Q(P(F.node));
      if (!j) {
        k.value = null, x.value = null;
        return;
      }
      k.value = {
        kind: "output",
        label: `${((re = F.output) == null ? void 0 : re.name) || F.node.title || F.node.type || "output"} · Node ${F.node.id}`
      }, x.value = { kind: "output", style: j };
    }
    function ke(V) {
      var Ee, T, re;
      if (!l.value || !f.value || V.button !== 0) return;
      const F = B(V);
      if (!F) return;
      const j = (Ee = s.comfyApp) == null ? void 0 : Ee.canvas;
      if (j) {
        if (F.kind === "input") {
          V.preventDefault(), V.stopImmediatePropagation(), V.stopPropagation(), Array.isArray(j.graph_mouse) && (j.graph_mouse[0] = F.canvasX, j.graph_mouse[1] = F.canvasY), (T = j.selectNode) == null || T.call(j, F.node, !1), W(F.node, F.widget);
          return;
        }
        V.preventDefault(), V.stopImmediatePropagation(), V.stopPropagation(), Array.isArray(j.graph_mouse) && (j.graph_mouse[0] = F.canvasX, j.graph_mouse[1] = F.canvasY), (re = j.selectNode) == null || re.call(j, F.node, !1), J(F.node, F.output);
      }
    }
    function $e() {
      document.addEventListener("pointerdown", ke, !0), document.addEventListener("pointermove", ye, !0);
    }
    function Pe() {
      document.removeEventListener("pointerdown", ke, !0), document.removeEventListener("pointermove", ye, !0);
    }
    async function Le() {
      if (r.value) {
        u.value = !0, d.value = null;
        try {
          v.value = await o(r.value), f.value = N(v.value.execution_contract);
        } catch (V) {
          d.value = V instanceof Error ? V.message : "Failed to load workflow contract";
        } finally {
          u.value = !1;
        }
      }
    }
    async function Oe() {
      if (!(!f.value || !r.value)) {
        c.value = !0, d.value = null;
        try {
          v.value = await a(r.value, f.value), f.value = N(v.value.execution_contract), window.dispatchEvent(new CustomEvent("comfygit:workflow-contract-saved", {
            detail: { workflowName: r.value }
          })), Be({ reopenPanel: !0 });
        } catch (V) {
          d.value = V instanceof Error ? V.message : "Failed to save workflow contract";
        } finally {
          c.value = !1;
        }
      }
    }
    function Te() {
      window.dispatchEvent(new CustomEvent("comfygit:open-panel", {
        detail: { initialView: "workflows" }
      }));
    }
    function Be(V) {
      l.value = !1, k.value = null, x.value = null, V != null && V.reopenPanel && Te();
    }
    async function Me(V) {
      var Ee, T;
      const j = (T = (Ee = V.detail) == null ? void 0 : Ee.workflowName) == null ? void 0 : T.trim();
      j && (r.value = j, p.value = null, w.value = null, l.value = !0, await Le());
    }
    function we(V) {
      V.key === "Escape" && l.value && Be({ reopenPanel: !0 });
    }
    function ee() {
      if (C != null) return;
      const V = () => {
        if (y.value += 1, !l.value) {
          C = null;
          return;
        }
        C = window.requestAnimationFrame(V);
      };
      C = window.requestAnimationFrame(V);
    }
    function We() {
      C != null && (window.cancelAnimationFrame(C), C = null);
    }
    return kt(l, (V) => {
      V ? ($e(), ee()) : (Pe(), We());
    }), ot(() => {
      window.addEventListener("comfygit:open-io-mapping", Me), window.addEventListener("keydown", we);
    }), la(() => {
      Pe(), We(), window.removeEventListener("comfygit:open-io-mapping", Me), window.removeEventListener("keydown", we);
    }), (V, F) => l.value ? (n(), i("div", bP, [
      t("div", $P, [
        (n(!0), i(H, null, _e(Ve.value, (j) => (n(), i("div", {
          key: j.key,
          class: De(["io-highlight", "io-highlight-input", { active: j.active }]),
          style: Ft(j.style)
        }, null, 6))), 128)),
        (n(!0), i(H, null, _e(je.value, (j) => (n(), i("div", {
          key: j.key,
          class: De(["io-highlight", "io-highlight-output", { active: j.active }]),
          style: Ft(j.style)
        }, null, 6))), 128)),
        x.value ? (n(), i("div", {
          key: 0,
          class: De(["io-highlight", x.value.kind === "input" ? "io-highlight-hover-input" : "io-highlight-hover-output"]),
          style: Ft(x.value.style)
        }, null, 6)) : h("", !0)
      ]),
      t("div", CP, [
        t("div", xP, [
          F[4] || (F[4] = t("div", { class: "io-mapping-title" }, "I/O MAPPING MODE", -1)),
          t("div", SP, m(r.value) + " · Hover any input widget or output target on the graph, then click to add it to the contract. ", 1),
          k.value ? (n(), i("div", IP, " Hovering " + m(k.value.kind) + ": " + m(k.value.label), 1)) : h("", !0)
        ]),
        t("div", EP, [
          _(Re, {
            size: "sm",
            variant: "secondary",
            onClick: F[0] || (F[0] = (j) => Be({ reopenPanel: !0 }))
          }, {
            default: g(() => [...F[5] || (F[5] = [
              $(" Exit ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      t("aside", TP, [
        t("div", MP, [
          u.value ? (n(), i("div", PP, " Loading workflow contract... ")) : d.value ? (n(), i("div", RP, m(d.value), 1)) : f.value ? (n(), i(H, { key: 2 }, [
            t("section", NP, [
              t("span", LP, m(E.value), 1),
              t("span", DP, m(I.value.inputs.length) + " input" + m(I.value.inputs.length === 1 ? "" : "s"), 1),
              t("span", OP, m(I.value.outputs.length) + " output" + m(I.value.outputs.length === 1 ? "" : "s"), 1)
            ]),
            t("section", UP, [
              t("div", AP, [
                _(Ls, { variant: "section" }, {
                  default: g(() => [...F[6] || (F[6] = [
                    $("INPUTS", -1)
                  ])]),
                  _: 1
                })
              ]),
              I.value.inputs.length ? h("", !0) : (n(), i("div", zP, " No inputs configured. ")),
              (n(!0), i(H, null, _e(I.value.inputs, (j, Ee) => (n(), i("div", {
                key: `input-${Ee}`,
                class: De(["item-card", { selected: p.value === Ee }])
              }, [
                t("div", {
                  class: "item-card-header item-card-header-toggle",
                  onClick: (T) => me(Ee)
                }, [
                  t("div", null, [
                    t("div", FP, m(j.name || `Input ${Ee + 1}`), 1),
                    t("div", BP, [
                      $(" Node " + m(j.node_id || "?"), 1),
                      j.widget_idx !== void 0 ? (n(), i(H, { key: 0 }, [
                        $(" · Widget " + m(j.widget_idx), 1)
                      ], 64)) : h("", !0)
                    ]),
                    t("div", WP, [
                      t("span", null, m(j.type || "string"), 1),
                      t("span", null, m(j.required ? "required" : "optional"), 1),
                      j.default !== void 0 && j.default !== "" ? (n(), i("span", GP, "default " + m(ie(j.default)), 1)) : h("", !0)
                    ])
                  ]),
                  _(Re, {
                    size: "sm",
                    variant: "ghost",
                    onClick: st((T) => le(Ee), ["stop"])
                  }, {
                    default: g(() => [...F[7] || (F[7] = [
                      $(" Remove ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ], 8, VP),
                p.value === Ee ? (n(), i("div", {
                  key: 0,
                  class: "item-grid",
                  onClick: F[1] || (F[1] = st(() => {
                  }, ["stop"]))
                }, [
                  _(pt, { label: "Name" }, {
                    default: g(() => [
                      _(it, {
                        modelValue: j.name,
                        "onUpdate:modelValue": (T) => j.name = T,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  _(pt, { label: "Display Name" }, {
                    default: g(() => [
                      _(it, {
                        modelValue: j.display_name,
                        "onUpdate:modelValue": (T) => j.display_name = T,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  _(pt, { label: "Type" }, {
                    default: g(() => [
                      _(Ks, {
                        "model-value": j.type,
                        options: S,
                        "full-width": "",
                        "onUpdate:modelValue": (T) => j.type = T
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  _(pt, { label: "Required" }, {
                    default: g(() => [
                      _(Ks, {
                        "model-value": j.required ? "true" : "false",
                        options: U,
                        "full-width": "",
                        "onUpdate:modelValue": (T) => j.required = T === "true"
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  _(pt, {
                    class: De({ "item-grid-full": j.type === "string" || j.type === "enum" }),
                    label: "Default"
                  }, {
                    default: g(() => [
                      j.type === "string" ? (n(), L(Js, {
                        key: 0,
                        "model-value": ge(j.default),
                        rows: 3,
                        placeholder: "Default string value",
                        "onUpdate:modelValue": (T) => j.default = T
                      }, null, 8, ["model-value", "onUpdate:modelValue"])) : (n(), L(it, {
                        key: 1,
                        modelValue: j.default,
                        "onUpdate:modelValue": (T) => j.default = T,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]))
                    ]),
                    _: 2
                  }, 1032, ["class"]),
                  z(j.type) ? (n(), L(pt, {
                    key: 0,
                    label: "Min"
                  }, {
                    default: g(() => [
                      _(it, {
                        "model-value": D(j.min),
                        "full-width": "",
                        "onUpdate:modelValue": (T) => j.min = G(T)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : h("", !0),
                  z(j.type) ? (n(), L(pt, {
                    key: 1,
                    label: "Max"
                  }, {
                    default: g(() => [
                      _(it, {
                        "model-value": D(j.max),
                        "full-width": "",
                        "onUpdate:modelValue": (T) => j.max = G(T)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : h("", !0),
                  q(j.type) ? (n(), L(pt, {
                    key: 2,
                    class: "item-grid-full",
                    label: "Enum Values"
                  }, {
                    default: g(() => [
                      _(Js, {
                        "model-value": Z(j.enum_values),
                        rows: 4,
                        placeholder: "One or more values, separated by commas or new lines",
                        "onUpdate:modelValue": (T) => j.enum_values = te(T)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : h("", !0)
                ])) : h("", !0)
              ], 2))), 128))
            ]),
            t("section", jP, [
              t("div", HP, [
                _(Ls, { variant: "section" }, {
                  default: g(() => [...F[8] || (F[8] = [
                    $("OUTPUTS", -1)
                  ])]),
                  _: 1
                })
              ]),
              I.value.outputs.length ? h("", !0) : (n(), i("div", qP, " No outputs configured. ")),
              (n(!0), i(H, null, _e(I.value.outputs, (j, Ee) => (n(), i("div", {
                key: `output-${Ee}`,
                class: De(["item-card", { selected: w.value === Ee }])
              }, [
                t("div", {
                  class: "item-card-header item-card-header-toggle",
                  onClick: (T) => Ue(Ee)
                }, [
                  t("div", null, [
                    t("div", JP, m(j.name || `Output ${Ee + 1}`), 1),
                    t("div", YP, [
                      $(" Node " + m(j.node_id || "?"), 1),
                      j.selector ? (n(), i(H, { key: 0 }, [
                        $(" · " + m(j.selector), 1)
                      ], 64)) : h("", !0)
                    ]),
                    t("div", QP, [
                      t("span", null, m(j.type || "file"), 1)
                    ])
                  ]),
                  _(Re, {
                    size: "sm",
                    variant: "ghost",
                    onClick: st((T) => pe(Ee), ["stop"])
                  }, {
                    default: g(() => [...F[9] || (F[9] = [
                      $(" Remove ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ], 8, KP),
                w.value === Ee ? (n(), i("div", {
                  key: 0,
                  class: "item-grid",
                  onClick: F[2] || (F[2] = st(() => {
                  }, ["stop"]))
                }, [
                  _(pt, { label: "Name" }, {
                    default: g(() => [
                      _(it, {
                        modelValue: j.name,
                        "onUpdate:modelValue": (T) => j.name = T,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  _(pt, { label: "Display Name" }, {
                    default: g(() => [
                      _(it, {
                        modelValue: j.display_name,
                        "onUpdate:modelValue": (T) => j.display_name = T,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  _(pt, { label: "Type" }, {
                    default: g(() => [
                      _(Ks, {
                        "model-value": j.type,
                        options: S,
                        "full-width": "",
                        "onUpdate:modelValue": (T) => j.type = T
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)
                ])) : h("", !0)
              ], 2))), 128))
            ])
          ], 64)) : h("", !0)
        ]),
        t("div", XP, [
          _(Re, {
            variant: "secondary",
            onClick: F[3] || (F[3] = (j) => Be({ reopenPanel: !0 }))
          }, {
            default: g(() => [...F[10] || (F[10] = [
              $(" Cancel ", -1)
            ])]),
            _: 1
          }),
          _(Re, {
            variant: "primary",
            loading: c.value,
            onClick: Oe
          }, {
            default: g(() => [...F[11] || (F[11] = [
              $(" Save Contract ", -1)
            ])]),
            _: 1
          }, 8, ["loading"])
        ])
      ])
    ])) : h("", !0);
  }
}), eR = /* @__PURE__ */ Se(ZP, [["__scopeId", "data-v-f48c60c3"]]), tR = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:transparent}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}[data-comfygit-theme=comfy] .base-tabs{border-bottom-color:var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .base-tabs__tab{border-radius:var(--cg-radius-sm) var(--cg-radius-sm) 0 0}[data-comfygit-theme=comfy] .base-tabs__tab:hover:not(.disabled){background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .base-tabs__tab.active{background:var(--cg-color-accent-muted)}', sR = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .base-tabs{border-bottom-color:var(--cg-color-border)}[data-comfygit-theme=phosphor] .base-tabs__tab{text-shadow:none}[data-comfygit-theme=phosphor] .base-tabs__tab:before{content:""}[data-comfygit-theme=phosphor] .base-tabs__tab.active:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .base-tabs__tab.active{text-shadow:0 0 8px var(--cg-color-accent);border-bottom-color:var(--cg-color-accent);box-shadow:0 2px 8px var(--cg-shadow-accent)}[data-comfygit-theme=phosphor] .base-tabs__tab:hover:not(.disabled):not(.active){color:var(--cg-color-accent);text-shadow:0 0 4px var(--cg-color-accent)}', oR = {
  comfy: tR,
  phosphor: sR
}, Nl = "comfy", Su = "comfygit-theme";
let no = null, Iu = Nl;
function nR() {
  try {
    const e = localStorage.getItem(Su);
    if (e && (e === "comfy" || e === "phosphor"))
      return e;
  } catch {
  }
  return Nl;
}
function Eu(e = Nl) {
  no && no.remove(), no = document.createElement("style"), no.id = "comfygit-theme-styles", no.setAttribute("data-theme", e), no.textContent = oR[e], document.head.appendChild(no), document.body.setAttribute("data-comfygit-theme", e), Iu = e;
  try {
    localStorage.setItem(Su, e);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${e}`);
}
function aR() {
  return Iu;
}
function lR(e) {
  Eu(e);
}
function iR(e) {
  var r;
  const { ui_id: s, state: o } = e || {}, a = (o == null ? void 0 : o.history) || {};
  if (!s)
    return null;
  const l = a[s];
  return l && l.result === "error" && ((r = l.status) == null ? void 0 : r.status_str) === "error" ? (l.status.messages || [])[0] || "Unknown error" : null;
}
const Ll = document.createElement("link");
Ll.rel = "stylesheet";
Ll.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(Ll);
const rR = nR();
Eu(rR);
sessionStorage.removeItem("ComfyGit.LastView");
sessionStorage.removeItem("ComfyGit.LastSection");
window.ComfyGit = {
  setTheme: (e) => {
    console.log(`[ComfyGit] Switching to theme: ${e}`), lR(e);
  },
  getTheme: () => {
    const e = aR();
    return console.log(`[ComfyGit] Current theme: ${e}`), e;
  }
};
let Ms = null, en = null, Qt = null, tn = null, Fo = null, Mi = null, Bo = null, Pi = null, Wo = null, Ri = null;
const Io = b(null);
let dn = "no_workspace", Tu = !1;
async function Un() {
  var e;
  if (!((e = Xt) != null && e.api)) return null;
  try {
    const s = await Xt.api.fetchApi("/v2/comfygit/status");
    s.ok && (Io.value = await s.json());
  } catch {
  }
}
async function ll() {
  var e;
  if ((e = Xt) != null && e.api)
    try {
      const s = await Xt.api.fetchApi("/v2/setup/status");
      if (s.ok) {
        const o = await s.json();
        dn = o.state, Tu = o.has_comfyui_manager ?? !1;
      }
    } catch {
    }
}
function il() {
  var s;
  if (dn === "managed" || !Tu) return;
  const e = document.querySelectorAll("button.comfyui-button");
  for (const o of e)
    if (((s = o.textContent) == null ? void 0 : s.trim()) === "Manager" && !o.querySelector("svg, i, img")) {
      o.style.display = "none", console.log("[ComfyGit] Hiding built-in Manager button (ComfyUI-Manager present)");
      return;
    }
}
function uR() {
  if (!Io.value) return !1;
  const e = Io.value.workflows;
  return e.new.length > 0 || e.modified.length > 0 || e.deleted.length > 0 || Io.value.has_changes;
}
function Tn(e) {
  Ho(), Ms = document.createElement("div"), Ms.className = "comfygit-panel-overlay";
  const s = document.createElement("div");
  s.className = "comfygit-panel-container", Ms.appendChild(s), Ms.addEventListener("click", (a) => {
    a.target === Ms && Ho();
  });
  const o = (a) => {
    a.key === "Escape" && (Ho(), document.removeEventListener("keydown", o));
  };
  document.addEventListener("keydown", o), en = pn({
    render: () => No(m7, {
      initialView: e,
      onClose: Ho,
      onStatusUpdate: async (a) => {
        Io.value = a, sn(), await ll(), rl(), il();
      }
    })
  }), en.mount(s), document.body.appendChild(Ms);
}
function Ho() {
  en && (en.unmount(), en = null), Ms && (Ms.remove(), Ms = null);
}
function Ni(e) {
  Go(), Qt = document.createElement("div"), Qt.className = "comfygit-commit-popover-container";
  const s = e.getBoundingClientRect();
  Qt.style.position = "fixed", Qt.style.top = `${s.bottom + 8}px`, Qt.style.right = `${window.innerWidth - s.right}px`, Qt.style.zIndex = "10001";
  const o = (l) => {
    Qt && !Qt.contains(l.target) && l.target !== e && (Go(), document.removeEventListener("mousedown", o));
  };
  setTimeout(() => document.addEventListener("mousedown", o), 0);
  const a = (l) => {
    l.key === "Escape" && (Go(), document.removeEventListener("keydown", a));
  };
  document.addEventListener("keydown", a), tn = pn({
    render: () => No(bu, {
      status: Io.value,
      onClose: Go,
      onCommitted: (l) => {
        Go(), cR(l.success, l.message), Un().then(sn);
      }
    })
  }), tn.mount(Qt), document.body.appendChild(Qt);
}
function Go() {
  tn && (tn.unmount(), tn = null), Qt && (Qt.remove(), Qt = null);
}
function cR(e, s) {
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
function dR() {
  Fo || (Fo = document.createElement("div"), Fo.className = "comfygit-download-queue-root", Mi = pn({
    render: () => No(lM)
  }), Mi.mount(Fo), document.body.appendChild(Fo), console.log("[ComfyGit] Model download queue mounted"));
}
function mR() {
  Bo || (Bo = document.createElement("div"), Bo.className = "comfygit-missing-resources-root", Pi = pn({
    render: () => No(kP)
  }), Pi.mount(Bo), document.body.appendChild(Bo), console.log("[ComfyGit] Missing resources popup mounted"));
}
function fR() {
  Wo || (Wo = document.createElement("div"), Wo.className = "comfygit-io-mapping-root", Ri = pn({
    render: () => No(eR, {
      comfyApp: Xt
    })
  }), Ri.mount(Wo), document.body.appendChild(Wo), console.log("[ComfyGit] Workflow I/O mapping overlay mounted"));
}
let Ht = null;
function sn() {
  if (!Ht) return;
  const e = Ht.querySelector(".commit-indicator");
  e && (e.style.display = uR() ? "block" : "none");
}
function rl() {
  if (!Ht) return;
  const e = dn !== "managed";
  Ht.disabled = e, Ht.title = e ? "Commit disabled - switch to a managed environment first" : "Quick Commit";
}
const Mu = document.createElement("style");
Mu.textContent = `
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
document.head.appendChild(Mu);
Xt.registerExtension({
  name: "Comfy.ComfyGitPanel",
  // Commands that can be triggered by keybindings or menu items
  commands: [
    {
      id: "ComfyGit.OpenPanel",
      label: "Open ComfyGit Panel",
      icon: "pi pi-folder-open",
      function: () => Tn()
    },
    {
      id: "ComfyGit.QuickCommit",
      label: "Quick Commit",
      icon: "pi pi-check",
      function: () => {
        Ht && !Ht.disabled && Ni(Ht);
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
    s.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", s.textContent = "ComfyGit", s.title = "ComfyGit Control Panel", s.onclick = Tn, Ht = document.createElement("button"), Ht.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", Ht.innerHTML = 'Commit <span class="commit-indicator"></span>', Ht.title = "Quick Commit", Ht.onclick = () => Ni(Ht), e.appendChild(s), e.appendChild(Ht), (r = (l = Xt.menu) == null ? void 0 : l.settingsGroup) != null && r.element && (Xt.menu.settingsGroup.element.before(e), console.log("[ComfyGit] Control Panel buttons added to toolbar")), dR(), mR(), fR(), window.addEventListener("comfygit:open-panel", ((u) => {
      var d;
      const c = (d = u.detail) == null ? void 0 : d.initialView;
      Tn(c);
    })), window.addEventListener("comfygit:close-panel", (() => {
      Ho();
    }));
    const { loadPendingDownloads: o } = Lo();
    o(), await Promise.all([Un(), ll()]), sn(), rl(), il(), setTimeout(il, 100), setInterval(async () => {
      await Promise.all([Un(), ll()]), sn(), rl();
    }, 3e4);
    const a = Xt.api;
    if (a) {
      let u = function() {
        localStorage.removeItem("workflow"), localStorage.removeItem("Comfy.PreviousWorkflow"), localStorage.removeItem("Comfy.OpenWorkflowsPaths"), localStorage.removeItem("Comfy.ActiveWorkflowIndex"), Object.keys(sessionStorage).forEach((p) => {
          (p.startsWith("workflow:") || p.startsWith("Comfy.OpenWorkflowsPaths:") || p.startsWith("Comfy.ActiveWorkflowIndex:")) && sessionStorage.removeItem(p);
        }), window.location.reload();
      }, c = function() {
        const p = document.createElement("div");
        p.style.cssText = `
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
        w.textContent = "Workflows updated - refresh required", p.appendChild(w);
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
        `, y.onmouseover = () => y.style.background = "var(--comfy-input-bg)", y.onmouseout = () => y.style.background = "var(--comfy-menu-bg)", y.onclick = () => u(), p.appendChild(y);
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
        `, k.onmouseover = () => k.style.opacity = "1", k.onmouseout = () => k.style.opacity = "0.6", k.onclick = () => p.remove(), p.appendChild(k), document.body.appendChild(p), console.log("[ComfyGit] Refresh notification displayed");
      }, d = function(p) {
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
        const k = document.createElement("span");
        k.textContent = "⚠️", k.style.fontSize = "20px", y.appendChild(k);
        const x = document.createElement("div");
        x.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 4px;";
        const C = document.createElement("div");
        C.textContent = "Node installation failed", C.style.cssText = "font-weight: 600; color: #e53935;", x.appendChild(C);
        const S = document.createElement("div");
        S.textContent = "Dependency conflict detected", S.style.cssText = "font-size: 12px; opacity: 0.8;", x.appendChild(S), y.appendChild(x);
        const U = document.createElement("button");
        U.textContent = "View Logs", U.style.cssText = `
          background: #e53935;
          color: #fff;
          border: none;
          border-radius: 4px;
          padding: 6px 12px;
          cursor: pointer;
          font-size: 12px;
          font-weight: 500;
          white-space: nowrap;
        `, U.onmouseover = () => U.style.background = "#c62828", U.onmouseout = () => U.style.background = "#e53935", U.onclick = () => {
          y.remove(), Tn("debug-env");
        }, y.appendChild(U);
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
        `, I.onmouseover = () => I.style.opacity = "1", I.onmouseout = () => I.style.opacity = "0.6", I.onclick = () => y.remove(), y.appendChild(I), document.body.appendChild(y), console.log("[ComfyGit] Manager error toast displayed:", p), setTimeout(() => {
          document.getElementById("comfygit-error-toast") && y.remove();
        }, 1e4);
      }, v = function(p) {
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
        const k = document.createElement("span");
        k.textContent = "✅", k.style.fontSize = "20px", y.appendChild(k);
        const x = document.createElement("div");
        x.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 2px;";
        const C = document.createElement("div");
        C.textContent = "To apply changes, please restart ComfyUI", C.style.cssText = "font-weight: 500; color: #fff;", x.appendChild(C);
        const S = document.createElement("div");
        S.textContent = `${p} node package${p > 1 ? "s" : ""} ready to install`, S.style.cssText = "font-size: 12px; opacity: 0.7;", x.appendChild(S), y.appendChild(x);
        const U = document.createElement("button");
        U.textContent = "Apply Changes", U.style.cssText = `
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
        `, U.onmouseover = () => U.style.background = "rgba(255,255,255,0.1)", U.onmouseout = () => U.style.background = "transparent", U.onclick = async () => {
          U.disabled = !0, U.textContent = "Restarting...", U.style.opacity = "0.7", C.textContent = "Restarting...", S.textContent = "Applying changes, please wait...";
          try {
            const E = async () => {
              console.log("[ComfyGit] Reconnected after restart, refreshing node definitions...");
              try {
                Xt.refreshComboInNodes && (await Xt.refreshComboInNodes(), console.log("[ComfyGit] Node definitions refreshed successfully")), k.textContent = "✅", C.textContent = "Nodes Installed", C.style.color = "#4caf50", S.textContent = `${p} package${p > 1 ? "s" : ""} installed successfully!`, y.style.borderColor = "#4caf50", U.style.display = "none", setTimeout(() => {
                  y.remove();
                }, 3e3);
              } catch (N) {
                console.error("[ComfyGit] Failed to refresh nodes:", N), k.textContent = "✅", C.textContent = "Restart Complete", C.style.color = "#4caf50", S.textContent = "Refresh the page to load new nodes.", y.style.borderColor = "#4caf50", U.style.display = "none";
              }
            };
            a.addEventListener("reconnected", E, { once: !0 }), await fetch("/v2/manager/reboot");
          } catch (E) {
            console.error("[ComfyGit] Failed to restart:", E), C.textContent = "Restart Failed", C.style.color = "#e53935", S.textContent = "Could not restart server. Try again.", y.style.borderColor = "#e53935", U.textContent = "Try Again", U.disabled = !1, U.style.opacity = "1";
          }
        }, y.appendChild(U);
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
        `, I.onmouseover = () => I.style.opacity = "1", I.onmouseout = () => I.style.opacity = "0.6", I.onclick = () => y.remove(), y.appendChild(I), document.body.appendChild(y), console.log(`[ComfyGit] Restart required notification displayed (${p} packages installed)`);
      };
      a.addEventListener("comfygit:workflow-changed", async (p) => {
        const { change_type: w, workflow_name: y } = p.detail;
        console.log(`[ComfyGit] Workflow ${w}: ${y}`), await Un(), sn();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let f = !1;
      a.addEventListener("status", async (p) => {
        const w = p.detail != null;
        w && !f && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") !== "false" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), u()) : c()), f = w;
      }), console.log("[ComfyGit] Refresh notification system initialized"), a.addEventListener("cm-task-completed", (p) => {
        const w = iR(p.detail);
        w && d(w);
      }), console.log("[ComfyGit] Manager error notification system initialized"), window.addEventListener("comfygit:nodes-installed", (p) => {
        const w = p, { count: y = 1 } = w.detail || {};
        v(y);
      }), console.log("[ComfyGit] Restart notification system initialized");
    }
  }
});
