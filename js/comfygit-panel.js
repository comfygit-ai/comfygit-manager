var Nu = Object.defineProperty;
var Lu = (e, s, o) => s in e ? Nu(e, s, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[s] = o;
var kn = (e, s, o) => Lu(e, typeof s != "symbol" ? s + "" : s, o);
import { app as Zt } from "../../scripts/app.js";
/**
* @vue/shared v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function cl(e) {
  const s = /* @__PURE__ */ Object.create(null);
  for (const o of e.split(",")) s[o] = 1;
  return (o) => o in s;
}
const yt = {}, _o = [], Cs = () => {
}, Di = () => !1, Xn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), dl = (e) => e.startsWith("onUpdate:"), Et = Object.assign, ml = (e, s) => {
  const o = e.indexOf(s);
  o > -1 && e.splice(o, 1);
}, Du = Object.prototype.hasOwnProperty, ft = (e, s) => Du.call(e, s), Je = Array.isArray, ko = (e) => mn(e) === "[object Map]", Po = (e) => mn(e) === "[object Set]", Ol = (e) => mn(e) === "[object Date]", Ze = (e) => typeof e == "function", $t = (e) => typeof e == "string", fs = (e) => typeof e == "symbol", gt = (e) => e !== null && typeof e == "object", Oi = (e) => (gt(e) || Ze(e)) && Ze(e.then) && Ze(e.catch), Ui = Object.prototype.toString, mn = (e) => Ui.call(e), Ou = (e) => mn(e).slice(8, -1), Ai = (e) => mn(e) === "[object Object]", fl = (e) => $t(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, qo = /* @__PURE__ */ cl(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Zn = (e) => {
  const s = /* @__PURE__ */ Object.create(null);
  return ((o) => s[o] || (s[o] = e(o)));
}, Uu = /-\w/g, rs = Zn(
  (e) => e.replace(Uu, (s) => s.slice(1).toUpperCase())
), Au = /\B([A-Z])/g, Xs = Zn(
  (e) => e.replace(Au, "-$1").toLowerCase()
), ea = Zn((e) => e.charAt(0).toUpperCase() + e.slice(1)), Ma = Zn(
  (e) => e ? `on${ea(e)}` : ""
), qs = (e, s) => !Object.is(e, s), Pn = (e, ...s) => {
  for (let o = 0; o < e.length; o++)
    e[o](...s);
}, zi = (e, s, o, a = !1) => {
  Object.defineProperty(e, s, {
    configurable: !0,
    enumerable: !1,
    writable: a,
    value: o
  });
}, ta = (e) => {
  const s = parseFloat(e);
  return isNaN(s) ? e : s;
}, zu = (e) => {
  const s = $t(e) ? Number(e) : NaN;
  return isNaN(s) ? e : s;
};
let Ul;
const sa = () => Ul || (Ul = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ft(e) {
  if (Je(e)) {
    const s = {};
    for (let o = 0; o < e.length; o++) {
      const a = e[o], l = $t(a) ? Wu(a) : Ft(a);
      if (l)
        for (const r in l)
          s[r] = l[r];
    }
    return s;
  } else if ($t(e) || gt(e))
    return e;
}
const Vu = /;(?![^(]*\))/g, Fu = /:([^]+)/, Bu = /\/\*[^]*?\*\//g;
function Wu(e) {
  const s = {};
  return e.replace(Bu, "").split(Vu).forEach((o) => {
    if (o) {
      const a = o.split(Fu);
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
const Gu = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ju = /* @__PURE__ */ cl(Gu);
function Vi(e) {
  return !!e || e === "";
}
function Hu(e, s) {
  if (e.length !== s.length) return !1;
  let o = !0;
  for (let a = 0; o && a < e.length; a++)
    o = uo(e[a], s[a]);
  return o;
}
function uo(e, s) {
  if (e === s) return !0;
  let o = Ol(e), a = Ol(s);
  if (o || a)
    return o && a ? e.getTime() === s.getTime() : !1;
  if (o = fs(e), a = fs(s), o || a)
    return e === s;
  if (o = Je(e), a = Je(s), o || a)
    return o && a ? Hu(e, s) : !1;
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
function vl(e, s) {
  return e.findIndex((o) => uo(o, s));
}
const Fi = (e) => !!(e && e.__v_isRef === !0), m = (e) => $t(e) ? e : e == null ? "" : Je(e) || gt(e) && (e.toString === Ui || !Ze(e.toString)) ? Fi(e) ? m(e.value) : JSON.stringify(e, Bi, 2) : String(e), Bi = (e, s) => Fi(s) ? Bi(e, s.value) : ko(s) ? {
  [`Map(${s.size})`]: [...s.entries()].reduce(
    (o, [a, l], r) => (o[Pa(a, r) + " =>"] = l, o),
    {}
  )
} : Po(s) ? {
  [`Set(${s.size})`]: [...s.values()].map((o) => Pa(o))
} : fs(s) ? Pa(s) : gt(s) && !Je(s) && !Ai(s) ? String(s) : s, Pa = (e, s = "") => {
  var o;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    fs(e) ? `Symbol(${(o = e.description) != null ? o : s})` : e
  );
};
/**
* @vue/reactivity v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Yt;
class qu {
  constructor(s = !1) {
    this.detached = s, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Yt, !s && Yt && (this.index = (Yt.scopes || (Yt.scopes = [])).push(
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
      const o = Yt;
      try {
        return Yt = this, s();
      } finally {
        Yt = o;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Yt, Yt = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (Yt = this.prevScope, this.prevScope = void 0);
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
function Ku() {
  return Yt;
}
let wt;
const Ra = /* @__PURE__ */ new WeakSet();
class Wi {
  constructor(s) {
    this.fn = s, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Yt && Yt.active && Yt.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Ra.has(this) && (Ra.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || ji(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Al(this), Hi(this);
    const s = wt, o = ms;
    wt = this, ms = !0;
    try {
      return this.fn();
    } finally {
      qi(this), wt = s, ms = o, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let s = this.deps; s; s = s.nextDep)
        hl(s);
      this.deps = this.depsTail = void 0, Al(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Ra.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Ha(this) && this.run();
  }
  get dirty() {
    return Ha(this);
  }
}
let Gi = 0, Ko, Jo;
function ji(e, s = !1) {
  if (e.flags |= 8, s) {
    e.next = Jo, Jo = e;
    return;
  }
  e.next = Ko, Ko = e;
}
function pl() {
  Gi++;
}
function gl() {
  if (--Gi > 0)
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
function Hi(e) {
  for (let s = e.deps; s; s = s.nextDep)
    s.version = -1, s.prevActiveLink = s.dep.activeLink, s.dep.activeLink = s;
}
function qi(e) {
  let s, o = e.depsTail, a = o;
  for (; a; ) {
    const l = a.prevDep;
    a.version === -1 ? (a === o && (o = l), hl(a), Ju(a)) : s = a, a.dep.activeLink = a.prevActiveLink, a.prevActiveLink = void 0, a = l;
  }
  e.deps = s, e.depsTail = o;
}
function Ha(e) {
  for (let s = e.deps; s; s = s.nextDep)
    if (s.dep.version !== s.version || s.dep.computed && (Ki(s.dep.computed) || s.dep.version !== s.version))
      return !0;
  return !!e._dirty;
}
function Ki(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === on) || (e.globalVersion = on, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ha(e))))
    return;
  e.flags |= 2;
  const s = e.dep, o = wt, a = ms;
  wt = e, ms = !0;
  try {
    Hi(e);
    const l = e.fn(e._value);
    (s.version === 0 || qs(l, e._value)) && (e.flags |= 128, e._value = l, s.version++);
  } catch (l) {
    throw s.version++, l;
  } finally {
    wt = o, ms = a, qi(e), e.flags &= -3;
  }
}
function hl(e, s = !1) {
  const { dep: o, prevSub: a, nextSub: l } = e;
  if (a && (a.nextSub = l, e.prevSub = void 0), l && (l.prevSub = a, e.nextSub = void 0), o.subs === e && (o.subs = a, !a && o.computed)) {
    o.computed.flags &= -5;
    for (let r = o.computed.deps; r; r = r.nextDep)
      hl(r, !0);
  }
  !s && !--o.sc && o.map && o.map.delete(o.key);
}
function Ju(e) {
  const { prevDep: s, nextDep: o } = e;
  s && (s.nextDep = o, e.prevDep = void 0), o && (o.prevDep = s, e.nextDep = void 0);
}
let ms = !0;
const Ji = [];
function Us() {
  Ji.push(ms), ms = !1;
}
function As() {
  const e = Ji.pop();
  ms = e === void 0 ? !0 : e;
}
function Al(e) {
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
class Yu {
  constructor(s, o) {
    this.sub = s, this.dep = o, this.version = o.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class yl {
  // TODO isolatedDeclarations "__v_skip"
  constructor(s) {
    this.computed = s, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(s) {
    if (!wt || !ms || wt === this.computed)
      return;
    let o = this.activeLink;
    if (o === void 0 || o.sub !== wt)
      o = this.activeLink = new Yu(wt, this), wt.deps ? (o.prevDep = wt.depsTail, wt.depsTail.nextDep = o, wt.depsTail = o) : wt.deps = wt.depsTail = o, Yi(o);
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
    pl();
    try {
      for (let o = this.subs; o; o = o.prevSub)
        o.sub.notify() && o.sub.dep.notify();
    } finally {
      gl();
    }
  }
}
function Yi(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const s = e.dep.computed;
    if (s && !e.dep.subs) {
      s.flags |= 20;
      for (let a = s.deps; a; a = a.nextDep)
        Yi(a);
    }
    const o = e.dep.subs;
    o !== e && (e.prevSub = o, o && (o.nextSub = e)), e.dep.subs = e;
  }
}
const qa = /* @__PURE__ */ new WeakMap(), io = Symbol(
  ""
), Ka = Symbol(
  ""
), nn = Symbol(
  ""
);
function Ut(e, s, o) {
  if (ms && wt) {
    let a = qa.get(e);
    a || qa.set(e, a = /* @__PURE__ */ new Map());
    let l = a.get(o);
    l || (a.set(o, l = new yl()), l.map = a, l.key = o), l.track();
  }
}
function Ns(e, s, o, a, l, r) {
  const u = qa.get(e);
  if (!u) {
    on++;
    return;
  }
  const c = (d) => {
    d && d.trigger();
  };
  if (pl(), s === "clear")
    u.forEach(c);
  else {
    const d = Je(e), v = d && fl(o);
    if (d && o === "length") {
      const f = Number(a);
      u.forEach((p, w) => {
        (w === "length" || w === nn || !fs(w) && w >= f) && c(p);
      });
    } else
      switch ((o !== void 0 || u.has(void 0)) && c(u.get(o)), v && c(u.get(nn)), s) {
        case "add":
          d ? v && c(u.get("length")) : (c(u.get(io)), ko(e) && c(u.get(Ka)));
          break;
        case "delete":
          d || (c(u.get(io)), ko(e) && c(u.get(Ka)));
          break;
        case "set":
          ko(e) && c(u.get(io));
          break;
      }
  }
  gl();
}
function go(e) {
  const s = lt(e);
  return s === e ? s : (Ut(s, "iterate", nn), ls(e) ? s : s.map(vs));
}
function oa(e) {
  return Ut(e = lt(e), "iterate", nn), e;
}
function Ws(e, s) {
  return zs(e) ? ro(e) ? Eo(vs(s)) : Eo(s) : vs(s);
}
const Qu = {
  __proto__: null,
  [Symbol.iterator]() {
    return Na(this, Symbol.iterator, (e) => Ws(this, e));
  },
  concat(...e) {
    return go(this).concat(
      ...e.map((s) => Je(s) ? go(s) : s)
    );
  },
  entries() {
    return Na(this, "entries", (e) => (e[1] = Ws(this, e[1]), e));
  },
  every(e, s) {
    return Ts(this, "every", e, s, void 0, arguments);
  },
  filter(e, s) {
    return Ts(
      this,
      "filter",
      e,
      s,
      (o) => o.map((a) => Ws(this, a)),
      arguments
    );
  },
  find(e, s) {
    return Ts(
      this,
      "find",
      e,
      s,
      (o) => Ws(this, o),
      arguments
    );
  },
  findIndex(e, s) {
    return Ts(this, "findIndex", e, s, void 0, arguments);
  },
  findLast(e, s) {
    return Ts(
      this,
      "findLast",
      e,
      s,
      (o) => Ws(this, o),
      arguments
    );
  },
  findLastIndex(e, s) {
    return Ts(this, "findLastIndex", e, s, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, s) {
    return Ts(this, "forEach", e, s, void 0, arguments);
  },
  includes(...e) {
    return La(this, "includes", e);
  },
  indexOf(...e) {
    return La(this, "indexOf", e);
  },
  join(e) {
    return go(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return La(this, "lastIndexOf", e);
  },
  map(e, s) {
    return Ts(this, "map", e, s, void 0, arguments);
  },
  pop() {
    return Oo(this, "pop");
  },
  push(...e) {
    return Oo(this, "push", e);
  },
  reduce(e, ...s) {
    return zl(this, "reduce", e, s);
  },
  reduceRight(e, ...s) {
    return zl(this, "reduceRight", e, s);
  },
  shift() {
    return Oo(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, s) {
    return Ts(this, "some", e, s, void 0, arguments);
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
    return Na(this, "values", (e) => Ws(this, e));
  }
};
function Na(e, s, o) {
  const a = oa(e), l = a[s]();
  return a !== e && !ls(e) && (l._next = l.next, l.next = () => {
    const r = l._next();
    return r.done || (r.value = o(r.value)), r;
  }), l;
}
const Xu = Array.prototype;
function Ts(e, s, o, a, l, r) {
  const u = oa(e), c = u !== e && !ls(e), d = u[s];
  if (d !== Xu[s]) {
    const p = d.apply(e, r);
    return c ? vs(p) : p;
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
function zl(e, s, o, a) {
  const l = oa(e);
  let r = o;
  return l !== e && (ls(e) ? o.length > 3 && (r = function(u, c, d) {
    return o.call(this, u, c, d, e);
  }) : r = function(u, c, d) {
    return o.call(this, u, Ws(e, c), d, e);
  }), l[s](r, ...a);
}
function La(e, s, o) {
  const a = lt(e);
  Ut(a, "iterate", nn);
  const l = a[s](...o);
  return (l === -1 || l === !1) && kl(o[0]) ? (o[0] = lt(o[0]), a[s](...o)) : l;
}
function Oo(e, s, o = []) {
  Us(), pl();
  const a = lt(e)[s].apply(e, o);
  return gl(), As(), a;
}
const Zu = /* @__PURE__ */ cl("__proto__,__v_isRef,__isVue"), Qi = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(fs)
);
function ec(e) {
  fs(e) || (e = String(e));
  const s = lt(this);
  return Ut(s, "has", e), s.hasOwnProperty(e);
}
class Xi {
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
      return a === (l ? r ? cc : sr : r ? tr : er).get(s) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(s) === Object.getPrototypeOf(a) ? s : void 0;
    const u = Je(s);
    if (!l) {
      let d;
      if (u && (d = Qu[o]))
        return d;
      if (o === "hasOwnProperty")
        return ec;
    }
    const c = Reflect.get(
      s,
      o,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Bt(s) ? s : a
    );
    if ((fs(o) ? Qi.has(o) : Zu(o)) || (l || Ut(s, "get", o), r))
      return c;
    if (Bt(c)) {
      const d = u && fl(o) ? c : c.value;
      return l && gt(d) ? zn(d) : d;
    }
    return gt(c) ? l ? zn(c) : fo(c) : c;
  }
}
class Zi extends Xi {
  constructor(s = !1) {
    super(!1, s);
  }
  set(s, o, a, l) {
    let r = s[o];
    const u = Je(s) && fl(o);
    if (!this._isShallow) {
      const v = zs(r);
      if (!ls(a) && !zs(a) && (r = lt(r), a = lt(a)), !u && Bt(r) && !Bt(a))
        return v || (r.value = a), !0;
    }
    const c = u ? Number(o) < s.length : ft(s, o), d = Reflect.set(
      s,
      o,
      a,
      Bt(s) ? s : l
    );
    return s === lt(l) && (c ? qs(a, r) && Ns(s, "set", o, a) : Ns(s, "add", o, a)), d;
  }
  deleteProperty(s, o) {
    const a = ft(s, o);
    s[o];
    const l = Reflect.deleteProperty(s, o);
    return l && a && Ns(s, "delete", o, void 0), l;
  }
  has(s, o) {
    const a = Reflect.has(s, o);
    return (!fs(o) || !Qi.has(o)) && Ut(s, "has", o), a;
  }
  ownKeys(s) {
    return Ut(
      s,
      "iterate",
      Je(s) ? "length" : io
    ), Reflect.ownKeys(s);
  }
}
class tc extends Xi {
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
const sc = /* @__PURE__ */ new Zi(), oc = /* @__PURE__ */ new tc(), nc = /* @__PURE__ */ new Zi(!0);
const Ja = (e) => e, bn = (e) => Reflect.getPrototypeOf(e);
function ac(e, s, o) {
  return function(...a) {
    const l = this.__v_raw, r = lt(l), u = ko(r), c = e === "entries" || e === Symbol.iterator && u, d = e === "keys" && u, v = l[e](...a), f = o ? Ja : s ? Eo : vs;
    return !s && Ut(
      r,
      "iterate",
      d ? Ka : io
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
function $n(e) {
  return function(...s) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function lc(e, s) {
  const o = {
    get(l) {
      const r = this.__v_raw, u = lt(r), c = lt(l);
      e || (qs(l, c) && Ut(u, "get", l), Ut(u, "get", c));
      const { has: d } = bn(u), v = s ? Ja : e ? Eo : vs;
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
      const u = this, c = u.__v_raw, d = lt(c), v = s ? Ja : e ? Eo : vs;
      return !e && Ut(d, "iterate", io), c.forEach((f, p) => l.call(r, v(f), v(p), u));
    }
  };
  return Et(
    o,
    e ? {
      add: $n("add"),
      set: $n("set"),
      delete: $n("delete"),
      clear: $n("clear")
    } : {
      add(l) {
        !s && !ls(l) && !zs(l) && (l = lt(l));
        const r = lt(this);
        return bn(r).has.call(r, l) || (r.add(l), Ns(r, "add", l, l)), this;
      },
      set(l, r) {
        !s && !ls(r) && !zs(r) && (r = lt(r));
        const u = lt(this), { has: c, get: d } = bn(u);
        let v = c.call(u, l);
        v || (l = lt(l), v = c.call(u, l));
        const f = d.call(u, l);
        return u.set(l, r), v ? qs(r, f) && Ns(u, "set", l, r) : Ns(u, "add", l, r), this;
      },
      delete(l) {
        const r = lt(this), { has: u, get: c } = bn(r);
        let d = u.call(r, l);
        d || (l = lt(l), d = u.call(r, l)), c && c.call(r, l);
        const v = r.delete(l);
        return d && Ns(r, "delete", l, void 0), v;
      },
      clear() {
        const l = lt(this), r = l.size !== 0, u = l.clear();
        return r && Ns(
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
    o[l] = ac(l, e, s);
  }), o;
}
function wl(e, s) {
  const o = lc(e, s);
  return (a, l, r) => l === "__v_isReactive" ? !e : l === "__v_isReadonly" ? e : l === "__v_raw" ? a : Reflect.get(
    ft(o, l) && l in a ? o : a,
    l,
    r
  );
}
const ic = {
  get: /* @__PURE__ */ wl(!1, !1)
}, rc = {
  get: /* @__PURE__ */ wl(!1, !0)
}, uc = {
  get: /* @__PURE__ */ wl(!0, !1)
};
const er = /* @__PURE__ */ new WeakMap(), tr = /* @__PURE__ */ new WeakMap(), sr = /* @__PURE__ */ new WeakMap(), cc = /* @__PURE__ */ new WeakMap();
function dc(e) {
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
function mc(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : dc(Ou(e));
}
function fo(e) {
  return zs(e) ? e : _l(
    e,
    !1,
    sc,
    ic,
    er
  );
}
function fc(e) {
  return _l(
    e,
    !1,
    nc,
    rc,
    tr
  );
}
function zn(e) {
  return _l(
    e,
    !0,
    oc,
    uc,
    sr
  );
}
function _l(e, s, o, a, l) {
  if (!gt(e) || e.__v_raw && !(s && e.__v_isReactive))
    return e;
  const r = mc(e);
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
  return zs(e) ? ro(e.__v_raw) : !!(e && e.__v_isReactive);
}
function zs(e) {
  return !!(e && e.__v_isReadonly);
}
function ls(e) {
  return !!(e && e.__v_isShallow);
}
function kl(e) {
  return e ? !!e.__v_raw : !1;
}
function lt(e) {
  const s = e && e.__v_raw;
  return s ? lt(s) : e;
}
function vc(e) {
  return !ft(e, "__v_skip") && Object.isExtensible(e) && zi(e, "__v_skip", !0), e;
}
const vs = (e) => gt(e) ? fo(e) : e, Eo = (e) => gt(e) ? zn(e) : e;
function Bt(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function b(e) {
  return pc(e, !1);
}
function pc(e, s) {
  return Bt(e) ? e : new gc(e, s);
}
class gc {
  constructor(s, o) {
    this.dep = new yl(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = o ? s : lt(s), this._value = o ? s : vs(s), this.__v_isShallow = o;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(s) {
    const o = this._rawValue, a = this.__v_isShallow || ls(s) || zs(s);
    s = a ? s : lt(s), qs(s, o) && (this._rawValue = s, this._value = a ? s : vs(s), this.dep.trigger());
  }
}
function Ye(e) {
  return Bt(e) ? e.value : e;
}
const hc = {
  get: (e, s, o) => s === "__v_raw" ? e : Ye(Reflect.get(e, s, o)),
  set: (e, s, o, a) => {
    const l = e[s];
    return Bt(l) && !Bt(o) ? (l.value = o, !0) : Reflect.set(e, s, o, a);
  }
};
function or(e) {
  return ro(e) ? e : new Proxy(e, hc);
}
class yc {
  constructor(s, o, a) {
    this.fn = s, this.setter = o, this._value = void 0, this.dep = new yl(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = on - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !o, this.isSSR = a;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    wt !== this)
      return ji(this, !0), !0;
  }
  get value() {
    const s = this.dep.track();
    return Ki(this), s && (s.version = this.dep.version), this._value;
  }
  set value(s) {
    this.setter && this.setter(s);
  }
}
function wc(e, s, o = !1) {
  let a, l;
  return Ze(e) ? a = e : (a = e.get, l = e.set), new yc(a, l, o);
}
const Cn = {}, Vn = /* @__PURE__ */ new WeakMap();
let ao;
function _c(e, s = !1, o = ao) {
  if (o) {
    let a = Vn.get(o);
    a || Vn.set(o, a = []), a.push(e);
  }
}
function kc(e, s, o = yt) {
  const { immediate: a, deep: l, once: r, scheduler: u, augmentJob: c, call: d } = o, v = (T) => l ? T : ls(T) || l === !1 || l === 0 ? Ls(T, 1) : Ls(T);
  let f, p, w, y, k = !1, x = !1;
  if (Bt(e) ? (p = () => e.value, k = ls(e)) : ro(e) ? (p = () => v(e), k = !0) : Je(e) ? (x = !0, k = e.some((T) => ro(T) || ls(T)), p = () => e.map((T) => {
    if (Bt(T))
      return T.value;
    if (ro(T))
      return v(T);
    if (Ze(T))
      return d ? d(T, 2) : T();
  })) : Ze(e) ? s ? p = d ? () => d(e, 2) : e : p = () => {
    if (w) {
      Us();
      try {
        w();
      } finally {
        As();
      }
    }
    const T = ao;
    ao = f;
    try {
      return d ? d(e, 3, [y]) : e(y);
    } finally {
      ao = T;
    }
  } : p = Cs, s && l) {
    const T = p, N = l === !0 ? 1 / 0 : l;
    p = () => Ls(T(), N);
  }
  const C = Ku(), S = () => {
    f.stop(), C && C.active && ml(C.effects, f);
  };
  if (r && s) {
    const T = s;
    s = (...N) => {
      T(...N), S();
    };
  }
  let U = x ? new Array(e.length).fill(Cn) : Cn;
  const E = (T) => {
    if (!(!(f.flags & 1) || !f.dirty && !T))
      if (s) {
        const N = f.run();
        if (l || k || (x ? N.some((A, H) => qs(A, U[H])) : qs(N, U))) {
          w && w();
          const A = ao;
          ao = f;
          try {
            const H = [
              N,
              // pass undefined as the old value when it's changed for the first time
              U === Cn ? void 0 : x && U[0] === Cn ? [] : U,
              y
            ];
            U = N, d ? d(s, 3, H) : (
              // @ts-expect-error
              s(...H)
            );
          } finally {
            ao = A;
          }
        }
      } else
        f.run();
  };
  return c && c(E), f = new Wi(p), f.scheduler = u ? () => u(E, !1) : E, y = (T) => _c(T, !1, f), w = f.onStop = () => {
    const T = Vn.get(f);
    if (T) {
      if (d)
        d(T, 4);
      else
        for (const N of T) N();
      Vn.delete(f);
    }
  }, s ? a ? E(!0) : U = f.run() : u ? u(E.bind(null, !0), !0) : f.run(), S.pause = f.pause.bind(f), S.resume = f.resume.bind(f), S.stop = S, S;
}
function Ls(e, s = 1 / 0, o) {
  if (s <= 0 || !gt(e) || e.__v_skip || (o = o || /* @__PURE__ */ new Map(), (o.get(e) || 0) >= s))
    return e;
  if (o.set(e, s), s--, Bt(e))
    Ls(e.value, s, o);
  else if (Je(e))
    for (let a = 0; a < e.length; a++)
      Ls(e[a], s, o);
  else if (Po(e) || ko(e))
    e.forEach((a) => {
      Ls(a, s, o);
    });
  else if (Ai(e)) {
    for (const a in e)
      Ls(e[a], s, o);
    for (const a of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, a) && Ls(e[a], s, o);
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
    na(l, s, o);
  }
}
function ps(e, s, o, a) {
  if (Ze(e)) {
    const l = fn(e, s, o, a);
    return l && Oi(l) && l.catch((r) => {
      na(r, s, o);
    }), l;
  }
  if (Je(e)) {
    const l = [];
    for (let r = 0; r < e.length; r++)
      l.push(ps(e[r], s, o, a));
    return l;
  }
}
function na(e, s, o, a = !0) {
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
      Us(), fn(r, null, 10, [
        e,
        d,
        v
      ]), As();
      return;
    }
  }
  bc(e, o, l, a, u);
}
function bc(e, s, o, a = !0, l = !1) {
  if (l)
    throw e;
  console.error(e);
}
const Kt = [];
let _s = -1;
const bo = [];
let Gs = null, yo = 0;
const nr = /* @__PURE__ */ Promise.resolve();
let Fn = null;
function Rt(e) {
  const s = Fn || nr;
  return e ? s.then(this ? e.bind(this) : e) : s;
}
function $c(e) {
  let s = _s + 1, o = Kt.length;
  for (; s < o; ) {
    const a = s + o >>> 1, l = Kt[a], r = an(l);
    r < e || r === e && l.flags & 2 ? s = a + 1 : o = a;
  }
  return s;
}
function bl(e) {
  if (!(e.flags & 1)) {
    const s = an(e), o = Kt[Kt.length - 1];
    !o || // fast path when the job id is larger than the tail
    !(e.flags & 2) && s >= an(o) ? Kt.push(e) : Kt.splice($c(s), 0, e), e.flags |= 1, ar();
  }
}
function ar() {
  Fn || (Fn = nr.then(ir));
}
function Cc(e) {
  Je(e) ? bo.push(...e) : Gs && e.id === -1 ? Gs.splice(yo + 1, 0, e) : e.flags & 1 || (bo.push(e), e.flags |= 1), ar();
}
function Vl(e, s, o = _s + 1) {
  for (; o < Kt.length; o++) {
    const a = Kt[o];
    if (a && a.flags & 2) {
      if (e && a.id !== e.uid)
        continue;
      Kt.splice(o, 1), o--, a.flags & 4 && (a.flags &= -2), a(), a.flags & 4 || (a.flags &= -2);
    }
  }
}
function lr(e) {
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
function ir(e) {
  try {
    for (_s = 0; _s < Kt.length; _s++) {
      const s = Kt[_s];
      s && !(s.flags & 8) && (s.flags & 4 && (s.flags &= -2), fn(
        s,
        s.i,
        s.i ? 15 : 14
      ), s.flags & 4 || (s.flags &= -2));
    }
  } finally {
    for (; _s < Kt.length; _s++) {
      const s = Kt[_s];
      s && (s.flags &= -2);
    }
    _s = -1, Kt.length = 0, lr(), Fn = null, (Kt.length || bo.length) && ir();
  }
}
let Dt = null, rr = null;
function Bn(e) {
  const s = Dt;
  return Dt = e, rr = e && e.type.__scopeId || null, s;
}
function g(e, s = Dt, o) {
  if (!s || e._n)
    return e;
  const a = (...l) => {
    a._d && jn(-1);
    const r = Bn(s);
    let u;
    try {
      u = e(...l);
    } finally {
      Bn(r), a._d && jn(1);
    }
    return u;
  };
  return a._n = !0, a._c = !0, a._d = !0, a;
}
function St(e, s) {
  if (Dt === null)
    return e;
  const o = ca(Dt), a = e.dirs || (e.dirs = []);
  for (let l = 0; l < s.length; l++) {
    let [r, u, c, d = yt] = s[l];
    r && (Ze(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && Ls(u), a.push({
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
    d && (Us(), ps(d, o, 8, [
      e.el,
      c,
      e,
      s
    ]), As());
  }
}
const ur = Symbol("_vte"), cr = (e) => e.__isTeleport, Yo = (e) => e && (e.disabled || e.disabled === ""), Fl = (e) => e && (e.defer || e.defer === ""), Bl = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Wl = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Ya = (e, s) => {
  const o = e && e.to;
  return $t(o) ? s ? s(o) : null : o;
}, dr = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, s, o, a, l, r, u, c, d, v) {
    const {
      mc: f,
      pc: p,
      pbc: w,
      o: { insert: y, querySelector: k, createText: x, createComment: C }
    } = v, S = Yo(s.props);
    let { shapeFlag: U, children: E, dynamicChildren: T } = s;
    if (e == null) {
      const N = s.el = x(""), A = s.anchor = x("");
      y(N, o, a), y(A, o, a);
      const H = (W, Z) => {
        U & 16 && f(
          E,
          W,
          Z,
          l,
          r,
          u,
          c,
          d
        );
      }, D = () => {
        const W = s.target = Ya(s.props, k), Z = mr(W, s, x, y);
        W && (u !== "svg" && Bl(W) ? u = "svg" : u !== "mathml" && Wl(W) && (u = "mathml"), l && l.isCE && (l.ce._teleportTargets || (l.ce._teleportTargets = /* @__PURE__ */ new Set())).add(W), S || (H(W, Z), Rn(s, !1)));
      };
      S && (H(o, A), Rn(s, !0)), Fl(s.props) ? (s.el.__isMounted = !1, Ht(() => {
        D(), delete s.el.__isMounted;
      }, r)) : D();
    } else {
      if (Fl(s.props) && e.el.__isMounted === !1) {
        Ht(() => {
          dr.process(
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
      const N = s.anchor = e.anchor, A = s.target = e.target, H = s.targetAnchor = e.targetAnchor, D = Yo(e.props), W = D ? o : A, Z = D ? N : H;
      if (u === "svg" || Bl(A) ? u = "svg" : (u === "mathml" || Wl(A)) && (u = "mathml"), T ? (w(
        e.dynamicChildren,
        T,
        W,
        l,
        r,
        u,
        c
      ), Il(e, s, !0)) : d || p(
        e,
        s,
        W,
        Z,
        l,
        r,
        u,
        c,
        !1
      ), S)
        D ? s.props && e.props && s.props.to !== e.props.to && (s.props.to = e.props.to) : xn(
          s,
          o,
          N,
          v,
          1
        );
      else if ((s.props && s.props.to) !== (e.props && e.props.to)) {
        const ee = s.target = Ya(
          s.props,
          k
        );
        ee && xn(
          s,
          ee,
          null,
          v,
          0
        );
      } else D && xn(
        s,
        A,
        H,
        v,
        1
      );
      Rn(s, S);
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
  move: xn,
  hydrate: xc
};
function xn(e, s, o, { o: { insert: a }, m: l }, r = 2) {
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
function xc(e, s, o, a, l, r, {
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
  const y = s.target = Ya(
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
        s.targetAnchor || mr(y, s, f, v), p(
          x && u(x),
          s,
          y,
          o,
          a,
          l,
          r
        );
      }
    Rn(s, k);
  } else k && s.shapeFlag & 16 && w(e, s, e, u(e));
  return s.anchor && u(s.anchor);
}
const Ot = dr;
function Rn(e, s) {
  const o = e.ctx;
  if (o && o.ut) {
    let a, l;
    for (s ? (a = e.el, l = e.anchor) : (a = e.targetStart, l = e.targetAnchor); a && a !== l; )
      a.nodeType === 1 && a.setAttribute("data-v-owner", o.uid), a = a.nextSibling;
    o.ut();
  }
}
function mr(e, s, o, a) {
  const l = s.targetStart = o(""), r = s.targetAnchor = o("");
  return l[ur] = r, e && (a(l, e), a(r, e)), r;
}
const Ps = Symbol("_leaveCb"), Sn = Symbol("_enterCb");
function fr() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return ot(() => {
    e.isMounted = !0;
  }), ia(() => {
    e.isUnmounting = !0;
  }), e;
}
const ns = [Function, Array], vr = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: ns,
  onEnter: ns,
  onAfterEnter: ns,
  onEnterCancelled: ns,
  // leave
  onBeforeLeave: ns,
  onLeave: ns,
  onAfterLeave: ns,
  onLeaveCancelled: ns,
  // appear
  onBeforeAppear: ns,
  onAppear: ns,
  onAfterAppear: ns,
  onAppearCancelled: ns
}, pr = (e) => {
  const s = e.subTree;
  return s.component ? pr(s.component) : s;
}, Sc = {
  name: "BaseTransition",
  props: vr,
  setup(e, { slots: s }) {
    const o = Tl(), a = fr();
    return () => {
      const l = s.default && $l(s.default(), !0);
      if (!l || !l.length)
        return;
      const r = gr(l), u = lt(e), { mode: c } = u;
      if (a.isLeaving)
        return Da(r);
      const d = Gl(r);
      if (!d)
        return Da(r);
      let v = ln(
        d,
        u,
        a,
        o,
        // #11061, ensure enterHooks is fresh after clone
        (p) => v = p
      );
      d.type !== zt && co(d, v);
      let f = o.subTree && Gl(o.subTree);
      if (f && f.type !== zt && !lo(f, d) && pr(o).type !== zt) {
        let p = ln(
          f,
          u,
          a,
          o
        );
        if (co(f, p), c === "out-in" && d.type !== zt)
          return a.isLeaving = !0, p.afterLeave = () => {
            a.isLeaving = !1, o.job.flags & 8 || o.update(), delete p.afterLeave, f = void 0;
          }, Da(r);
        c === "in-out" && d.type !== zt ? p.delayLeave = (w, y, k) => {
          const x = hr(
            a,
            f
          );
          x[String(f.key)] = f, w[Ps] = () => {
            y(), w[Ps] = void 0, delete v.delayedLeave, f = void 0;
          }, v.delayedLeave = () => {
            k(), delete v.delayedLeave, f = void 0;
          };
        } : f = void 0;
      } else f && (f = void 0);
      return r;
    };
  }
};
function gr(e) {
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
const Ic = Sc;
function hr(e, s) {
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
    onAppearCancelled: E
  } = s, T = String(e.key), N = hr(o, e), A = (W, Z) => {
    W && ps(
      W,
      a,
      9,
      Z
    );
  }, H = (W, Z) => {
    const ee = Z[1];
    A(W, Z), Je(W) ? W.every((re) => re.length <= 1) && ee() : W.length <= 1 && ee();
  }, D = {
    mode: u,
    persisted: c,
    beforeEnter(W) {
      let Z = d;
      if (!o.isMounted)
        if (r)
          Z = C || d;
        else
          return;
      W[Ps] && W[Ps](
        !0
        /* cancelled */
      );
      const ee = N[T];
      ee && lo(e, ee) && ee.el[Ps] && ee.el[Ps](), A(Z, [W]);
    },
    enter(W) {
      let Z = v, ee = f, re = p;
      if (!o.isMounted)
        if (r)
          Z = S || v, ee = U || f, re = E || p;
        else
          return;
      let he = !1;
      const ne = W[Sn] = (Q) => {
        he || (he = !0, Q ? A(re, [W]) : A(ee, [W]), D.delayedLeave && D.delayedLeave(), W[Sn] = void 0);
      };
      Z ? H(Z, [W, ne]) : ne();
    },
    leave(W, Z) {
      const ee = String(e.key);
      if (W[Sn] && W[Sn](
        !0
        /* cancelled */
      ), o.isUnmounting)
        return Z();
      A(w, [W]);
      let re = !1;
      const he = W[Ps] = (ne) => {
        re || (re = !0, Z(), ne ? A(x, [W]) : A(k, [W]), W[Ps] = void 0, N[ee] === e && delete N[ee]);
      };
      N[ee] = e, y ? H(y, [W, he]) : he();
    },
    clone(W) {
      const Z = ln(
        W,
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
function Da(e) {
  if (aa(e))
    return e = Ys(e), e.children = null, e;
}
function Gl(e) {
  if (!aa(e))
    return cr(e.type) && e.children ? gr(e.children) : e;
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
function $l(e, s = !1, o) {
  let a = [], l = 0;
  for (let r = 0; r < e.length; r++) {
    let u = e[r];
    const c = o == null ? u.key : String(o) + String(u.key != null ? u.key : r);
    u.type === G ? (u.patchFlag & 128 && l++, a = a.concat(
      $l(u.children, s, c)
    )) : (s || u.type !== zt) && a.push(c != null ? Ys(u, { key: c }) : u);
  }
  if (l > 1)
    for (let r = 0; r < a.length; r++)
      a[r].patchFlag = -2;
  return a;
}
// @__NO_SIDE_EFFECTS__
function Se(e, s) {
  return Ze(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Et({ name: e.name }, s, { setup: e })
  ) : e;
}
function yr(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Wn = /* @__PURE__ */ new WeakMap();
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
  const r = a.shapeFlag & 4 ? ca(a.component) : a.el, u = l ? null : r, { i: c, r: d } = e, v = s && s.r, f = c.refs === yt ? c.refs = {} : c.refs, p = c.setupState, w = lt(p), y = p === yt ? Di : (k) => ft(w, k);
  if (v != null && v !== d) {
    if (jl(s), $t(v))
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
            Je(S) && ml(S, r);
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
          C(), Wn.delete(e);
        };
        S.id = -1, Wn.set(e, S), Ht(S, o);
      } else
        jl(e), C();
    }
  }
}
function jl(e) {
  const s = Wn.get(e);
  s && (s.flags |= 8, Wn.delete(e));
}
sa().requestIdleCallback;
sa().cancelIdleCallback;
const $o = (e) => !!e.type.__asyncLoader, aa = (e) => e.type.__isKeepAlive;
function Ec(e, s) {
  wr(e, "a", s);
}
function Tc(e, s) {
  wr(e, "da", s);
}
function wr(e, s, o = Vt) {
  const a = e.__wdc || (e.__wdc = () => {
    let l = o;
    for (; l; ) {
      if (l.isDeactivated)
        return;
      l = l.parent;
    }
    return e();
  });
  if (la(s, a, o), o) {
    let l = o.parent;
    for (; l && l.parent; )
      aa(l.parent.vnode) && Mc(a, s, o, l), l = l.parent;
  }
}
function Mc(e, s, o, a) {
  const l = la(
    s,
    e,
    a,
    !0
    /* prepend */
  );
  Ro(() => {
    ml(a[s], l);
  }, o);
}
function la(e, s, o = Vt, a = !1) {
  if (o) {
    const l = o[e] || (o[e] = []), r = s.__weh || (s.__weh = (...u) => {
      Us();
      const c = vn(o), d = ps(s, o, e, u);
      return c(), As(), d;
    });
    return a ? l.unshift(r) : l.push(r), r;
  }
}
const Vs = (e) => (s, o = Vt) => {
  (!cn || e === "sp") && la(e, (...a) => s(...a), o);
}, Pc = Vs("bm"), ot = Vs("m"), Rc = Vs(
  "bu"
), _r = Vs("u"), ia = Vs(
  "bum"
), Ro = Vs("um"), Nc = Vs(
  "sp"
), Lc = Vs("rtg"), Dc = Vs("rtc");
function Oc(e, s = Vt) {
  la("ec", e, s);
}
const Uc = "components", kr = Symbol.for("v-ndc");
function Cl(e) {
  return $t(e) ? Ac(Uc, e, !1) || e : e || kr;
}
function Ac(e, s, o = !0, a = !1) {
  const l = Dt || Vt;
  if (l) {
    const r = l.type;
    {
      const c = Sd(
        r,
        !1
      );
      if (c && (c === s || c === rs(s) || c === ea(rs(s))))
        return r;
    }
    const u = (
      // local registration
      // check instance[type] first which is resolved for options API
      Hl(l[e] || r[e], s) || // global registration
      Hl(l.appContext[e], s)
    );
    return !u && a ? r : u;
  }
}
function Hl(e, s) {
  return e && (e[s] || e[rs(s)] || e[ea(rs(s))]);
}
function ke(e, s, o, a) {
  let l;
  const r = o, u = Je(e);
  if (u || $t(e)) {
    const c = u && ro(e);
    let d = !1, v = !1;
    c && (d = !ls(e), v = zs(e), e = oa(e)), l = new Array(e.length);
    for (let f = 0, p = e.length; f < p; f++)
      l[f] = s(
        d ? v ? Eo(vs(e[f])) : vs(e[f]) : e[f],
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
function ss(e, s) {
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
      G,
      null,
      [_("slot", o, a && a())],
      v ? -2 : 64
    );
  }
  let r = e[s];
  r && r._c && (r._d = !1), n();
  const u = r && br(r(o)), c = o.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  u && u.key, d = L(
    G,
    {
      key: (c && !fs(c) ? c : `_${s}`) + // #7256 force differentiate fallback content from actual content
      (!u && a ? "_fb" : "")
    },
    u || (a ? a() : []),
    u && e._ === 1 ? 64 : -2
  );
  return r && r._c && (r._d = !0), d;
}
function br(e) {
  return e.some((s) => un(s) ? !(s.type === zt || s.type === G && !br(s.children)) : !0) ? e : null;
}
const Qa = (e) => e ? Fr(e) ? ca(e) : Qa(e.parent) : null, Xo = (
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
    $parent: (e) => Qa(e.parent),
    $root: (e) => Qa(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Cr(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      bl(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Rt.bind(e.proxy)),
    $watch: (e) => Yc.bind(e)
  })
), Oa = (e, s) => e !== yt && !e.__isScriptSetup && ft(e, s), zc = {
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
        if (Oa(a, s))
          return u[s] = 1, a[s];
        if (l !== yt && ft(l, s))
          return u[s] = 2, l[s];
        if (ft(r, s))
          return u[s] = 3, r[s];
        if (o !== yt && ft(o, s))
          return u[s] = 4, o[s];
        Xa && (u[s] = 0);
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
    if (o !== yt && ft(o, s))
      return u[s] = 4, o[s];
    if (
      // global properties
      p = d.config.globalProperties, ft(p, s)
    )
      return p[s];
  },
  set({ _: e }, s, o) {
    const { data: a, setupState: l, ctx: r } = e;
    return Oa(l, s) ? (l[s] = o, !0) : a !== yt && ft(a, s) ? (a[s] = o, !0) : ft(e.props, s) || s[0] === "$" && s.slice(1) in e ? !1 : (r[s] = o, !0);
  },
  has({
    _: { data: e, setupState: s, accessCache: o, ctx: a, appContext: l, props: r, type: u }
  }, c) {
    let d;
    return !!(o[c] || e !== yt && c[0] !== "$" && ft(e, c) || Oa(s, c) || ft(r, c) || ft(a, c) || ft(Xo, c) || ft(l.config.globalProperties, c) || (d = u.__cssModules) && d[c]);
  },
  defineProperty(e, s, o) {
    return o.get != null ? e._.accessCache[s] = 0 : ft(o, "value") && this.set(e, s, o.value, null), Reflect.defineProperty(e, s, o);
  }
};
function ql(e) {
  return Je(e) ? e.reduce(
    (s, o) => (s[o] = null, s),
    {}
  ) : e;
}
let Xa = !0;
function Vc(e) {
  const s = Cr(e), o = e.proxy, a = e.ctx;
  Xa = !1, s.beforeCreate && Kl(s.beforeCreate, e, "bc");
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
    destroyed: E,
    unmounted: T,
    render: N,
    renderTracked: A,
    renderTriggered: H,
    errorCaptured: D,
    serverPrefetch: W,
    // public API
    expose: Z,
    inheritAttrs: ee,
    // assets
    components: re,
    directives: he,
    filters: ne
  } = s;
  if (v && Fc(v, a, null), u)
    for (const Ne in u) {
      const le = u[Ne];
      Ze(le) && (a[Ne] = le.bind(o));
    }
  if (l) {
    const Ne = l.call(o, o);
    gt(Ne) && (e.data = fo(Ne));
  }
  if (Xa = !0, r)
    for (const Ne in r) {
      const le = r[Ne], pe = Ze(le) ? le.bind(o, o) : Ze(le.get) ? le.get.bind(o, o) : Cs, me = !Ze(le) && Ze(le.set) ? le.set.bind(o) : Cs, Ue = O({
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
      $r(c[Ne], a, o, Ne);
  if (d) {
    const Ne = Ze(d) ? d.call(o) : d;
    Reflect.ownKeys(Ne).forEach((le) => {
      qc(le, Ne[le]);
    });
  }
  f && Kl(f, e, "c");
  function de(Ne, le) {
    Je(le) ? le.forEach((pe) => Ne(pe.bind(o))) : le && Ne(le.bind(o));
  }
  if (de(Pc, p), de(ot, w), de(Rc, y), de(_r, k), de(Ec, x), de(Tc, C), de(Oc, D), de(Dc, A), de(Lc, H), de(ia, U), de(Ro, T), de(Nc, W), Je(Z))
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
  N && e.render === Cs && (e.render = N), ee != null && (e.inheritAttrs = ee), re && (e.components = re), he && (e.directives = he), W && yr(e);
}
function Fc(e, s, o = Cs) {
  Je(e) && (e = Za(e));
  for (const a in e) {
    const l = e[a];
    let r;
    gt(l) ? "default" in l ? r = Nn(
      l.from || a,
      l.default,
      !0
    ) : r = Nn(l.from || a) : r = Nn(l), Bt(r) ? Object.defineProperty(s, a, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (u) => r.value = u
    }) : s[a] = r;
  }
}
function Kl(e, s, o) {
  ps(
    Je(e) ? e.map((a) => a.bind(s.proxy)) : e.bind(s.proxy),
    s,
    o
  );
}
function $r(e, s, o, a) {
  let l = a.includes(".") ? Ir(o, a) : () => o[a];
  if ($t(e)) {
    const r = s[e];
    Ze(r) && kt(l, r);
  } else if (Ze(e))
    kt(l, e.bind(o));
  else if (gt(e))
    if (Je(e))
      e.forEach((r) => $r(r, s, o, a));
    else {
      const r = Ze(e.handler) ? e.handler.bind(o) : s[e.handler];
      Ze(r) && kt(l, r, e);
    }
}
function Cr(e) {
  const s = e.type, { mixins: o, extends: a } = s, {
    mixins: l,
    optionsCache: r,
    config: { optionMergeStrategies: u }
  } = e.appContext, c = r.get(s);
  let d;
  return c ? d = c : !l.length && !o && !a ? d = s : (d = {}, l.length && l.forEach(
    (v) => Gn(d, v, u, !0)
  ), Gn(d, s, u)), gt(s) && r.set(s, d), d;
}
function Gn(e, s, o, a = !1) {
  const { mixins: l, extends: r } = s;
  r && Gn(e, r, o, !0), l && l.forEach(
    (u) => Gn(e, u, o, !0)
  );
  for (const u in s)
    if (!(a && u === "expose")) {
      const c = Bc[u] || o && o[u];
      e[u] = c ? c(e[u], s[u]) : s[u];
    }
  return e;
}
const Bc = {
  data: Jl,
  props: Yl,
  emits: Yl,
  // objects
  methods: jo,
  computed: jo,
  // lifecycle
  beforeCreate: jt,
  created: jt,
  beforeMount: jt,
  mounted: jt,
  beforeUpdate: jt,
  updated: jt,
  beforeDestroy: jt,
  beforeUnmount: jt,
  destroyed: jt,
  unmounted: jt,
  activated: jt,
  deactivated: jt,
  errorCaptured: jt,
  serverPrefetch: jt,
  // assets
  components: jo,
  directives: jo,
  // watch
  watch: Gc,
  // provide / inject
  provide: Jl,
  inject: Wc
};
function Jl(e, s) {
  return s ? e ? function() {
    return Et(
      Ze(e) ? e.call(this, this) : e,
      Ze(s) ? s.call(this, this) : s
    );
  } : s : e;
}
function Wc(e, s) {
  return jo(Za(e), Za(s));
}
function Za(e) {
  if (Je(e)) {
    const s = {};
    for (let o = 0; o < e.length; o++)
      s[e[o]] = e[o];
    return s;
  }
  return e;
}
function jt(e, s) {
  return e ? [...new Set([].concat(e, s))] : s;
}
function jo(e, s) {
  return e ? Et(/* @__PURE__ */ Object.create(null), e, s) : s;
}
function Yl(e, s) {
  return e ? Je(e) && Je(s) ? [.../* @__PURE__ */ new Set([...e, ...s])] : Et(
    /* @__PURE__ */ Object.create(null),
    ql(e),
    ql(s ?? {})
  ) : s;
}
function Gc(e, s) {
  if (!e) return s;
  if (!s) return e;
  const o = Et(/* @__PURE__ */ Object.create(null), e);
  for (const a in s)
    o[a] = jt(e[a], s[a]);
  return o;
}
function xr() {
  return {
    app: null,
    config: {
      isNativeTag: Di,
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
let jc = 0;
function Hc(e, s) {
  return function(a, l = null) {
    Ze(a) || (a = Et({}, a)), l != null && !gt(l) && (l = null);
    const r = xr(), u = /* @__PURE__ */ new WeakSet(), c = [];
    let d = !1;
    const v = r.app = {
      _uid: jc++,
      _component: a,
      _props: l,
      _container: null,
      _context: r,
      _instance: null,
      version: Ed,
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
          return y.appContext = r, w === !0 ? w = "svg" : w === !1 && (w = void 0), e(y, f, w), d = !0, v._container = f, f.__vue_app__ = v, ca(y.component);
        }
      },
      onUnmount(f) {
        c.push(f);
      },
      unmount() {
        d && (ps(
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
function qc(e, s) {
  if (Vt) {
    let o = Vt.provides;
    const a = Vt.parent && Vt.parent.provides;
    a === o && (o = Vt.provides = Object.create(a)), o[e] = s;
  }
}
function Nn(e, s, o = !1) {
  const a = Tl();
  if (a || Co) {
    let l = Co ? Co._context.provides : a ? a.parent == null || a.ce ? a.vnode.appContext && a.vnode.appContext.provides : a.parent.provides : void 0;
    if (l && e in l)
      return l[e];
    if (arguments.length > 1)
      return o && Ze(s) ? s.call(a && a.proxy) : s;
  }
}
const Kc = Symbol.for("v-scx"), Jc = () => Nn(Kc);
function kt(e, s, o) {
  return Sr(e, s, o);
}
function Sr(e, s, o = yt) {
  const { immediate: a, deep: l, flush: r, once: u } = o, c = Et({}, o), d = s && a || !s && r !== "post";
  let v;
  if (cn) {
    if (r === "sync") {
      const y = Jc();
      v = y.__watcherHandles || (y.__watcherHandles = []);
    } else if (!d) {
      const y = () => {
      };
      return y.stop = Cs, y.resume = Cs, y.pause = Cs, y;
    }
  }
  const f = Vt;
  c.call = (y, k, x) => ps(y, f, k, x);
  let p = !1;
  r === "post" ? c.scheduler = (y) => {
    Ht(y, f && f.suspense);
  } : r !== "sync" && (p = !0, c.scheduler = (y, k) => {
    k ? y() : bl(y);
  }), c.augmentJob = (y) => {
    s && (y.flags |= 4), p && (y.flags |= 2, f && (y.id = f.uid, y.i = f));
  };
  const w = kc(e, s, c);
  return cn && (v ? v.push(w) : d && w()), w;
}
function Yc(e, s, o) {
  const a = this.proxy, l = $t(e) ? e.includes(".") ? Ir(a, e) : () => a[e] : e.bind(a, a);
  let r;
  Ze(s) ? r = s : (r = s.handler, o = s);
  const u = vn(this), c = Sr(l, r.bind(a), o);
  return u(), c;
}
function Ir(e, s) {
  const o = s.split(".");
  return () => {
    let a = e;
    for (let l = 0; l < o.length && a; l++)
      a = a[o[l]];
    return a;
  };
}
const Qc = (e, s) => s === "modelValue" || s === "model-value" ? e.modelModifiers : e[`${s}Modifiers`] || e[`${rs(s)}Modifiers`] || e[`${Xs(s)}Modifiers`];
function Xc(e, s, ...o) {
  if (e.isUnmounted) return;
  const a = e.vnode.props || yt;
  let l = o;
  const r = s.startsWith("update:"), u = r && Qc(a, s.slice(7));
  u && (u.trim && (l = o.map((f) => $t(f) ? f.trim() : f)), u.number && (l = o.map(ta)));
  let c, d = a[c = Ma(s)] || // also try camelCase event handler (#2249)
  a[c = Ma(rs(s))];
  !d && r && (d = a[c = Ma(Xs(s))]), d && ps(
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
    e.emitted[c] = !0, ps(
      v,
      e,
      6,
      l
    );
  }
}
const Zc = /* @__PURE__ */ new WeakMap();
function Er(e, s, o = !1) {
  const a = o ? Zc : s.emitsCache, l = a.get(e);
  if (l !== void 0)
    return l;
  const r = e.emits;
  let u = {}, c = !1;
  if (!Ze(e)) {
    const d = (v) => {
      const f = Er(v, s, !0);
      f && (c = !0, Et(u, f));
    };
    !o && s.mixins.length && s.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  return !r && !c ? (gt(e) && a.set(e, null), null) : (Je(r) ? r.forEach((d) => u[d] = null) : Et(u, r), gt(e) && a.set(e, u), u);
}
function ra(e, s) {
  return !e || !Xn(s) ? !1 : (s = s.slice(2).replace(/Once$/, ""), ft(e, s[0].toLowerCase() + s.slice(1)) || ft(e, Xs(s)) || ft(e, s));
}
function Ql(e) {
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
  } = e, C = Bn(e);
  let S, U;
  try {
    if (o.shapeFlag & 4) {
      const T = l || a, N = T;
      S = bs(
        v.call(
          N,
          T,
          f,
          p,
          y,
          w,
          k
        )
      ), U = c;
    } else {
      const T = s;
      S = bs(
        T.length > 1 ? T(
          p,
          { attrs: c, slots: u, emit: d }
        ) : T(
          p,
          null
        )
      ), U = s.props ? c : ed(c);
    }
  } catch (T) {
    Zo.length = 0, na(T, e, 1), S = _(zt);
  }
  let E = S;
  if (U && x !== !1) {
    const T = Object.keys(U), { shapeFlag: N } = E;
    T.length && N & 7 && (r && T.some(dl) && (U = td(
      U,
      r
    )), E = Ys(E, U, !1, !0));
  }
  return o.dirs && (E = Ys(E, null, !1, !0), E.dirs = E.dirs ? E.dirs.concat(o.dirs) : o.dirs), o.transition && co(E, o.transition), S = E, Bn(C), S;
}
const ed = (e) => {
  let s;
  for (const o in e)
    (o === "class" || o === "style" || Xn(o)) && ((s || (s = {}))[o] = e[o]);
  return s;
}, td = (e, s) => {
  const o = {};
  for (const a in e)
    (!dl(a) || !(a.slice(9) in s)) && (o[a] = e[a]);
  return o;
};
function sd(e, s, o) {
  const { props: a, children: l, component: r } = e, { props: u, children: c, patchFlag: d } = s, v = r.emitsOptions;
  if (s.dirs || s.transition)
    return !0;
  if (o && d >= 0) {
    if (d & 1024)
      return !0;
    if (d & 16)
      return a ? Xl(a, u, v) : !!u;
    if (d & 8) {
      const f = s.dynamicProps;
      for (let p = 0; p < f.length; p++) {
        const w = f[p];
        if (u[w] !== a[w] && !ra(v, w))
          return !0;
      }
    }
  } else
    return (l || c) && (!c || !c.$stable) ? !0 : a === u ? !1 : a ? u ? Xl(a, u, v) : !0 : !!u;
  return !1;
}
function Xl(e, s, o) {
  const a = Object.keys(s);
  if (a.length !== Object.keys(e).length)
    return !0;
  for (let l = 0; l < a.length; l++) {
    const r = a[l];
    if (s[r] !== e[r] && !ra(o, r))
      return !0;
  }
  return !1;
}
function od({ vnode: e, parent: s }, o) {
  for (; s; ) {
    const a = s.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.el = e.el), a === e)
      (e = s.vnode).el = o, s = s.parent;
    else
      break;
  }
}
const Tr = {}, Mr = () => Object.create(Tr), Pr = (e) => Object.getPrototypeOf(e) === Tr;
function nd(e, s, o, a = !1) {
  const l = {}, r = Mr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Rr(e, s, l, r);
  for (const u in e.propsOptions[0])
    u in l || (l[u] = void 0);
  o ? e.props = a ? l : fc(l) : e.type.props ? e.props = l : e.props = r, e.attrs = r;
}
function ad(e, s, o, a) {
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
        if (ra(e.emitsOptions, w))
          continue;
        const y = s[w];
        if (d)
          if (ft(r, w))
            y !== r[w] && (r[w] = y, v = !0);
          else {
            const k = rs(w);
            l[k] = el(
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
    Rr(e, s, l, r) && (v = !0);
    let f;
    for (const p in c)
      (!s || // for camelCase
      !ft(s, p) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((f = Xs(p)) === p || !ft(s, f))) && (d ? o && // for camelCase
      (o[p] !== void 0 || // for kebab-case
      o[f] !== void 0) && (l[p] = el(
        d,
        c,
        p,
        void 0,
        e,
        !0
      )) : delete l[p]);
    if (r !== c)
      for (const p in r)
        (!s || !ft(s, p)) && (delete r[p], v = !0);
  }
  v && Ns(e.attrs, "set", "");
}
function Rr(e, s, o, a) {
  const [l, r] = e.propsOptions;
  let u = !1, c;
  if (s)
    for (let d in s) {
      if (qo(d))
        continue;
      const v = s[d];
      let f;
      l && ft(l, f = rs(d)) ? !r || !r.includes(f) ? o[f] = v : (c || (c = {}))[f] = v : ra(e.emitsOptions, d) || (!(d in a) || v !== a[d]) && (a[d] = v, u = !0);
    }
  if (r) {
    const d = lt(o), v = c || yt;
    for (let f = 0; f < r.length; f++) {
      const p = r[f];
      o[p] = el(
        l,
        d,
        p,
        v[p],
        e,
        !ft(v, p)
      );
    }
  }
  return u;
}
function el(e, s, o, a, l, r) {
  const u = e[o];
  if (u != null) {
    const c = ft(u, "default");
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
const ld = /* @__PURE__ */ new WeakMap();
function Nr(e, s, o = !1) {
  const a = o ? ld : s.propsCache, l = a.get(e);
  if (l)
    return l;
  const r = e.props, u = {}, c = [];
  let d = !1;
  if (!Ze(e)) {
    const f = (p) => {
      d = !0;
      const [w, y] = Nr(p, s, !0);
      Et(u, w), y && c.push(...y);
    };
    !o && s.mixins.length && s.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  if (!r && !d)
    return gt(e) && a.set(e, _o), _o;
  if (Je(r))
    for (let f = 0; f < r.length; f++) {
      const p = rs(r[f]);
      Zl(p) && (u[p] = yt);
    }
  else if (r)
    for (const f in r) {
      const p = rs(f);
      if (Zl(p)) {
        const w = r[f], y = u[p] = Je(w) || Ze(w) ? { type: w } : Et({}, w), k = y.type;
        let x = !1, C = !0;
        if (Je(k))
          for (let S = 0; S < k.length; ++S) {
            const U = k[S], E = Ze(U) && U.name;
            if (E === "Boolean") {
              x = !0;
              break;
            } else E === "String" && (C = !1);
          }
        else
          x = Ze(k) && k.name === "Boolean";
        y[
          0
          /* shouldCast */
        ] = x, y[
          1
          /* shouldCastTrue */
        ] = C, (x || ft(y, "default")) && c.push(p);
      }
    }
  const v = [u, c];
  return gt(e) && a.set(e, v), v;
}
function Zl(e) {
  return e[0] !== "$" && !qo(e);
}
const xl = (e) => e === "_" || e === "_ctx" || e === "$stable", Sl = (e) => Je(e) ? e.map(bs) : [bs(e)], id = (e, s, o) => {
  if (s._n)
    return s;
  const a = g((...l) => Sl(s(...l)), o);
  return a._c = !1, a;
}, Lr = (e, s, o) => {
  const a = e._ctx;
  for (const l in e) {
    if (xl(l)) continue;
    const r = e[l];
    if (Ze(r))
      s[l] = id(l, r, a);
    else if (r != null) {
      const u = Sl(r);
      s[l] = () => u;
    }
  }
}, Dr = (e, s) => {
  const o = Sl(s);
  e.slots.default = () => o;
}, Or = (e, s, o) => {
  for (const a in s)
    (o || !xl(a)) && (e[a] = s[a]);
}, rd = (e, s, o) => {
  const a = e.slots = Mr();
  if (e.vnode.shapeFlag & 32) {
    const l = s._;
    l ? (Or(a, s, o), o && zi(a, "_", l, !0)) : Lr(s, a);
  } else s && Dr(e, s);
}, ud = (e, s, o) => {
  const { vnode: a, slots: l } = e;
  let r = !0, u = yt;
  if (a.shapeFlag & 32) {
    const c = s._;
    c ? o && c === 1 ? r = !1 : Or(l, s, o) : (r = !s.$stable, Lr(s, l)), u = s;
  } else s && (Dr(e, s), u = { default: 1 });
  if (r)
    for (const c in l)
      !xl(c) && u[c] == null && delete l[c];
}, Ht = vd;
function cd(e) {
  return dd(e);
}
function dd(e, s) {
  const o = sa();
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
    setScopeId: y = Cs,
    insertStaticContent: k
  } = e, x = (F, B, q, we = null, be = null, Ce = null, Pe = void 0, Le = null, Oe = !!B.dynamicChildren) => {
    if (F === B)
      return;
    F && !lo(F, B) && (we = P(F), se(F, be, Ce, !0), F = null), B.patchFlag === -2 && (Oe = !1, B.dynamicChildren = null);
    const { type: Te, ref: We, shapeFlag: Me } = B;
    switch (Te) {
      case ua:
        C(F, B, q, we);
        break;
      case zt:
        S(F, B, q, we);
        break;
      case Aa:
        F == null && U(B, q, we, Pe);
        break;
      case G:
        re(
          F,
          B,
          q,
          we,
          be,
          Ce,
          Pe,
          Le,
          Oe
        );
        break;
      default:
        Me & 1 ? N(
          F,
          B,
          q,
          we,
          be,
          Ce,
          Pe,
          Le,
          Oe
        ) : Me & 6 ? he(
          F,
          B,
          q,
          we,
          be,
          Ce,
          Pe,
          Le,
          Oe
        ) : (Me & 64 || Me & 128) && Te.process(
          F,
          B,
          q,
          we,
          be,
          Ce,
          Pe,
          Le,
          Oe,
          Ve
        );
    }
    We != null && be ? Qo(We, F && F.ref, Ce, B || F, !B) : We == null && F && F.ref != null && Qo(F.ref, null, Ce, F, !0);
  }, C = (F, B, q, we) => {
    if (F == null)
      a(
        B.el = c(B.children),
        q,
        we
      );
    else {
      const be = B.el = F.el;
      B.children !== F.children && v(be, B.children);
    }
  }, S = (F, B, q, we) => {
    F == null ? a(
      B.el = d(B.children || ""),
      q,
      we
    ) : B.el = F.el;
  }, U = (F, B, q, we) => {
    [F.el, F.anchor] = k(
      F.children,
      B,
      q,
      we,
      F.el,
      F.anchor
    );
  }, E = ({ el: F, anchor: B }, q, we) => {
    let be;
    for (; F && F !== B; )
      be = w(F), a(F, q, we), F = be;
    a(B, q, we);
  }, T = ({ el: F, anchor: B }) => {
    let q;
    for (; F && F !== B; )
      q = w(F), l(F), F = q;
    l(B);
  }, N = (F, B, q, we, be, Ce, Pe, Le, Oe) => {
    if (B.type === "svg" ? Pe = "svg" : B.type === "math" && (Pe = "mathml"), F == null)
      A(
        B,
        q,
        we,
        be,
        Ce,
        Pe,
        Le,
        Oe
      );
    else {
      const Te = F.el && F.el._isVueCE ? F.el : null;
      try {
        Te && Te._beginPatch(), W(
          F,
          B,
          be,
          Ce,
          Pe,
          Le,
          Oe
        );
      } finally {
        Te && Te._endPatch();
      }
    }
  }, A = (F, B, q, we, be, Ce, Pe, Le) => {
    let Oe, Te;
    const { props: We, shapeFlag: Me, transition: _e, dirs: te } = F;
    if (Oe = F.el = u(
      F.type,
      Ce,
      We && We.is,
      We
    ), Me & 8 ? f(Oe, F.children) : Me & 16 && D(
      F.children,
      Oe,
      null,
      we,
      be,
      Ua(F, Ce),
      Pe,
      Le
    ), te && eo(F, null, we, "created"), H(Oe, F, F.scopeId, Pe, we), We) {
      for (const z in We)
        z !== "value" && !qo(z) && r(Oe, z, null, We[z], Ce, we);
      "value" in We && r(Oe, "value", null, We.value, Ce), (Te = We.onVnodeBeforeMount) && hs(Te, we, F);
    }
    te && eo(F, null, we, "beforeMount");
    const Be = md(be, _e);
    Be && _e.beforeEnter(Oe), a(Oe, B, q), ((Te = We && We.onVnodeMounted) || Be || te) && Ht(() => {
      Te && hs(Te, we, F), Be && _e.enter(Oe), te && eo(F, null, we, "mounted");
    }, be);
  }, H = (F, B, q, we, be) => {
    if (q && y(F, q), we)
      for (let Ce = 0; Ce < we.length; Ce++)
        y(F, we[Ce]);
    if (be) {
      let Ce = be.subTree;
      if (B === Ce || Ar(Ce.type) && (Ce.ssContent === B || Ce.ssFallback === B)) {
        const Pe = be.vnode;
        H(
          F,
          Pe,
          Pe.scopeId,
          Pe.slotScopeIds,
          be.parent
        );
      }
    }
  }, D = (F, B, q, we, be, Ce, Pe, Le, Oe = 0) => {
    for (let Te = Oe; Te < F.length; Te++) {
      const We = F[Te] = Le ? js(F[Te]) : bs(F[Te]);
      x(
        null,
        We,
        B,
        q,
        we,
        be,
        Ce,
        Pe,
        Le
      );
    }
  }, W = (F, B, q, we, be, Ce, Pe) => {
    const Le = B.el = F.el;
    let { patchFlag: Oe, dynamicChildren: Te, dirs: We } = B;
    Oe |= F.patchFlag & 16;
    const Me = F.props || yt, _e = B.props || yt;
    let te;
    if (q && to(q, !1), (te = _e.onVnodeBeforeUpdate) && hs(te, q, B, F), We && eo(B, F, q, "beforeUpdate"), q && to(q, !0), (Me.innerHTML && _e.innerHTML == null || Me.textContent && _e.textContent == null) && f(Le, ""), Te ? Z(
      F.dynamicChildren,
      Te,
      Le,
      q,
      we,
      Ua(B, be),
      Ce
    ) : Pe || le(
      F,
      B,
      Le,
      null,
      q,
      we,
      Ua(B, be),
      Ce,
      !1
    ), Oe > 0) {
      if (Oe & 16)
        ee(Le, Me, _e, q, be);
      else if (Oe & 2 && Me.class !== _e.class && r(Le, "class", null, _e.class, be), Oe & 4 && r(Le, "style", Me.style, _e.style, be), Oe & 8) {
        const Be = B.dynamicProps;
        for (let z = 0; z < Be.length; z++) {
          const X = Be[z], J = Me[X], ge = _e[X];
          (ge !== J || X === "value") && r(Le, X, J, ge, be, q);
        }
      }
      Oe & 1 && F.children !== B.children && f(Le, B.children);
    } else !Pe && Te == null && ee(Le, Me, _e, q, be);
    ((te = _e.onVnodeUpdated) || We) && Ht(() => {
      te && hs(te, q, B, F), We && eo(B, F, q, "updated");
    }, we);
  }, Z = (F, B, q, we, be, Ce, Pe) => {
    for (let Le = 0; Le < B.length; Le++) {
      const Oe = F[Le], Te = B[Le], We = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        Oe.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (Oe.type === G || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !lo(Oe, Te) || // - In the case of a component, it could contain anything.
        Oe.shapeFlag & 198) ? p(Oe.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          q
        )
      );
      x(
        Oe,
        Te,
        We,
        null,
        we,
        be,
        Ce,
        Pe,
        !0
      );
    }
  }, ee = (F, B, q, we, be) => {
    if (B !== q) {
      if (B !== yt)
        for (const Ce in B)
          !qo(Ce) && !(Ce in q) && r(
            F,
            Ce,
            B[Ce],
            null,
            be,
            we
          );
      for (const Ce in q) {
        if (qo(Ce)) continue;
        const Pe = q[Ce], Le = B[Ce];
        Pe !== Le && Ce !== "value" && r(F, Ce, Le, Pe, be, we);
      }
      "value" in q && r(F, "value", B.value, q.value, be);
    }
  }, re = (F, B, q, we, be, Ce, Pe, Le, Oe) => {
    const Te = B.el = F ? F.el : c(""), We = B.anchor = F ? F.anchor : c("");
    let { patchFlag: Me, dynamicChildren: _e, slotScopeIds: te } = B;
    te && (Le = Le ? Le.concat(te) : te), F == null ? (a(Te, q, we), a(We, q, we), D(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      B.children || [],
      q,
      We,
      be,
      Ce,
      Pe,
      Le,
      Oe
    )) : Me > 0 && Me & 64 && _e && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    F.dynamicChildren ? (Z(
      F.dynamicChildren,
      _e,
      q,
      be,
      Ce,
      Pe,
      Le
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (B.key != null || be && B === be.subTree) && Il(
      F,
      B,
      !0
      /* shallow */
    )) : le(
      F,
      B,
      q,
      We,
      be,
      Ce,
      Pe,
      Le,
      Oe
    );
  }, he = (F, B, q, we, be, Ce, Pe, Le, Oe) => {
    B.slotScopeIds = Le, F == null ? B.shapeFlag & 512 ? be.ctx.activate(
      B,
      q,
      we,
      Pe,
      Oe
    ) : ne(
      B,
      q,
      we,
      be,
      Ce,
      Pe,
      Oe
    ) : Q(F, B, Oe);
  }, ne = (F, B, q, we, be, Ce, Pe) => {
    const Le = F.component = kd(
      F,
      we,
      be
    );
    if (aa(F) && (Le.ctx.renderer = Ve), bd(Le, !1, Pe), Le.asyncDep) {
      if (be && be.registerDep(Le, de, Pe), !F.el) {
        const Oe = Le.subTree = _(zt);
        S(null, Oe, B, q), F.placeholder = Oe.el;
      }
    } else
      de(
        Le,
        F,
        B,
        q,
        be,
        Ce,
        Pe
      );
  }, Q = (F, B, q) => {
    const we = B.component = F.component;
    if (sd(F, B, q))
      if (we.asyncDep && !we.asyncResolved) {
        Ne(we, B, q);
        return;
      } else
        we.next = B, we.update();
    else
      B.el = F.el, we.vnode = B;
  }, de = (F, B, q, we, be, Ce, Pe) => {
    const Le = () => {
      if (F.isMounted) {
        let { next: Me, bu: _e, u: te, parent: Be, vnode: z } = F;
        {
          const ie = Ur(F);
          if (ie) {
            Me && (Me.el = z.el, Ne(F, Me, Pe)), ie.asyncDep.then(() => {
              F.isUnmounted || Le();
            });
            return;
          }
        }
        let X = Me, J;
        to(F, !1), Me ? (Me.el = z.el, Ne(F, Me, Pe)) : Me = z, _e && Pn(_e), (J = Me.props && Me.props.onVnodeBeforeUpdate) && hs(J, Be, Me, z), to(F, !0);
        const ge = Ql(F), I = F.subTree;
        F.subTree = ge, x(
          I,
          ge,
          // parent may have changed if it's in a teleport
          p(I.el),
          // anchor may have changed if it's in a fragment
          P(I),
          F,
          be,
          Ce
        ), Me.el = ge.el, X === null && od(F, ge.el), te && Ht(te, be), (J = Me.props && Me.props.onVnodeUpdated) && Ht(
          () => hs(J, Be, Me, z),
          be
        );
      } else {
        let Me;
        const { el: _e, props: te } = B, { bm: Be, m: z, parent: X, root: J, type: ge } = F, I = $o(B);
        to(F, !1), Be && Pn(Be), !I && (Me = te && te.onVnodeBeforeMount) && hs(Me, X, B), to(F, !0);
        {
          J.ce && // @ts-expect-error _def is private
          J.ce._def.shadowRoot !== !1 && J.ce._injectChildStyle(ge);
          const ie = F.subTree = Ql(F);
          x(
            null,
            ie,
            q,
            we,
            F,
            be,
            Ce
          ), B.el = ie.el;
        }
        if (z && Ht(z, be), !I && (Me = te && te.onVnodeMounted)) {
          const ie = B;
          Ht(
            () => hs(Me, X, ie),
            be
          );
        }
        (B.shapeFlag & 256 || X && $o(X.vnode) && X.vnode.shapeFlag & 256) && F.a && Ht(F.a, be), F.isMounted = !0, B = q = we = null;
      }
    };
    F.scope.on();
    const Oe = F.effect = new Wi(Le);
    F.scope.off();
    const Te = F.update = Oe.run.bind(Oe), We = F.job = Oe.runIfDirty.bind(Oe);
    We.i = F, We.id = F.uid, Oe.scheduler = () => bl(We), to(F, !0), Te();
  }, Ne = (F, B, q) => {
    B.component = F;
    const we = F.vnode.props;
    F.vnode = B, F.next = null, ad(F, B.props, we, q), ud(F, B.children, q), Us(), Vl(F), As();
  }, le = (F, B, q, we, be, Ce, Pe, Le, Oe = !1) => {
    const Te = F && F.children, We = F ? F.shapeFlag : 0, Me = B.children, { patchFlag: _e, shapeFlag: te } = B;
    if (_e > 0) {
      if (_e & 128) {
        me(
          Te,
          Me,
          q,
          we,
          be,
          Ce,
          Pe,
          Le,
          Oe
        );
        return;
      } else if (_e & 256) {
        pe(
          Te,
          Me,
          q,
          we,
          be,
          Ce,
          Pe,
          Le,
          Oe
        );
        return;
      }
    }
    te & 8 ? (We & 16 && j(Te, be, Ce), Me !== Te && f(q, Me)) : We & 16 ? te & 16 ? me(
      Te,
      Me,
      q,
      we,
      be,
      Ce,
      Pe,
      Le,
      Oe
    ) : j(Te, be, Ce, !0) : (We & 8 && f(q, ""), te & 16 && D(
      Me,
      q,
      we,
      be,
      Ce,
      Pe,
      Le,
      Oe
    ));
  }, pe = (F, B, q, we, be, Ce, Pe, Le, Oe) => {
    F = F || _o, B = B || _o;
    const Te = F.length, We = B.length, Me = Math.min(Te, We);
    let _e;
    for (_e = 0; _e < Me; _e++) {
      const te = B[_e] = Oe ? js(B[_e]) : bs(B[_e]);
      x(
        F[_e],
        te,
        q,
        null,
        be,
        Ce,
        Pe,
        Le,
        Oe
      );
    }
    Te > We ? j(
      F,
      be,
      Ce,
      !0,
      !1,
      Me
    ) : D(
      B,
      q,
      we,
      be,
      Ce,
      Pe,
      Le,
      Oe,
      Me
    );
  }, me = (F, B, q, we, be, Ce, Pe, Le, Oe) => {
    let Te = 0;
    const We = B.length;
    let Me = F.length - 1, _e = We - 1;
    for (; Te <= Me && Te <= _e; ) {
      const te = F[Te], Be = B[Te] = Oe ? js(B[Te]) : bs(B[Te]);
      if (lo(te, Be))
        x(
          te,
          Be,
          q,
          null,
          be,
          Ce,
          Pe,
          Le,
          Oe
        );
      else
        break;
      Te++;
    }
    for (; Te <= Me && Te <= _e; ) {
      const te = F[Me], Be = B[_e] = Oe ? js(B[_e]) : bs(B[_e]);
      if (lo(te, Be))
        x(
          te,
          Be,
          q,
          null,
          be,
          Ce,
          Pe,
          Le,
          Oe
        );
      else
        break;
      Me--, _e--;
    }
    if (Te > Me) {
      if (Te <= _e) {
        const te = _e + 1, Be = te < We ? B[te].el : we;
        for (; Te <= _e; )
          x(
            null,
            B[Te] = Oe ? js(B[Te]) : bs(B[Te]),
            q,
            Be,
            be,
            Ce,
            Pe,
            Le,
            Oe
          ), Te++;
      }
    } else if (Te > _e)
      for (; Te <= Me; )
        se(F[Te], be, Ce, !0), Te++;
    else {
      const te = Te, Be = Te, z = /* @__PURE__ */ new Map();
      for (Te = Be; Te <= _e; Te++) {
        const ze = B[Te] = Oe ? js(B[Te]) : bs(B[Te]);
        ze.key != null && z.set(ze.key, Te);
      }
      let X, J = 0;
      const ge = _e - Be + 1;
      let I = !1, ie = 0;
      const ce = new Array(ge);
      for (Te = 0; Te < ge; Te++) ce[Te] = 0;
      for (Te = te; Te <= Me; Te++) {
        const ze = F[Te];
        if (J >= ge) {
          se(ze, be, Ce, !0);
          continue;
        }
        let Ee;
        if (ze.key != null)
          Ee = z.get(ze.key);
        else
          for (X = Be; X <= _e; X++)
            if (ce[X - Be] === 0 && lo(ze, B[X])) {
              Ee = X;
              break;
            }
        Ee === void 0 ? se(ze, be, Ce, !0) : (ce[Ee - Be] = Te + 1, Ee >= ie ? ie = Ee : I = !0, x(
          ze,
          B[Ee],
          q,
          null,
          be,
          Ce,
          Pe,
          Le,
          Oe
        ), J++);
      }
      const Ae = I ? fd(ce) : _o;
      for (X = Ae.length - 1, Te = ge - 1; Te >= 0; Te--) {
        const ze = Be + Te, Ee = B[ze], qe = B[ze + 1], Qe = ze + 1 < We ? (
          // #13559, fallback to el placeholder for unresolved async component
          qe.el || qe.placeholder
        ) : we;
        ce[Te] === 0 ? x(
          null,
          Ee,
          q,
          Qe,
          be,
          Ce,
          Pe,
          Le,
          Oe
        ) : I && (X < 0 || Te !== Ae[X] ? Ue(Ee, q, Qe, 2) : X--);
      }
    }
  }, Ue = (F, B, q, we, be = null) => {
    const { el: Ce, type: Pe, transition: Le, children: Oe, shapeFlag: Te } = F;
    if (Te & 6) {
      Ue(F.component.subTree, B, q, we);
      return;
    }
    if (Te & 128) {
      F.suspense.move(B, q, we);
      return;
    }
    if (Te & 64) {
      Pe.move(F, B, q, Ve);
      return;
    }
    if (Pe === G) {
      a(Ce, B, q);
      for (let Me = 0; Me < Oe.length; Me++)
        Ue(Oe[Me], B, q, we);
      a(F.anchor, B, q);
      return;
    }
    if (Pe === Aa) {
      E(F, B, q);
      return;
    }
    if (we !== 2 && Te & 1 && Le)
      if (we === 0)
        Le.beforeEnter(Ce), a(Ce, B, q), Ht(() => Le.enter(Ce), be);
      else {
        const { leave: Me, delayLeave: _e, afterLeave: te } = Le, Be = () => {
          F.ctx.isUnmounted ? l(Ce) : a(Ce, B, q);
        }, z = () => {
          Ce._isLeaving && Ce[Ps](
            !0
            /* cancelled */
          ), Me(Ce, () => {
            Be(), te && te();
          });
        };
        _e ? _e(Ce, Be, z) : z();
      }
    else
      a(Ce, B, q);
  }, se = (F, B, q, we = !1, be = !1) => {
    const {
      type: Ce,
      props: Pe,
      ref: Le,
      children: Oe,
      dynamicChildren: Te,
      shapeFlag: We,
      patchFlag: Me,
      dirs: _e,
      cacheIndex: te
    } = F;
    if (Me === -2 && (be = !1), Le != null && (Us(), Qo(Le, null, q, F, !0), As()), te != null && (B.renderCache[te] = void 0), We & 256) {
      B.ctx.deactivate(F);
      return;
    }
    const Be = We & 1 && _e, z = !$o(F);
    let X;
    if (z && (X = Pe && Pe.onVnodeBeforeUnmount) && hs(X, B, F), We & 6)
      V(F.component, q, we);
    else {
      if (We & 128) {
        F.suspense.unmount(q, we);
        return;
      }
      Be && eo(F, null, B, "beforeUnmount"), We & 64 ? F.type.remove(
        F,
        B,
        q,
        Ve,
        we
      ) : Te && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !Te.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (Ce !== G || Me > 0 && Me & 64) ? j(
        Te,
        B,
        q,
        !1,
        !0
      ) : (Ce === G && Me & 384 || !be && We & 16) && j(Oe, B, q), we && oe(F);
    }
    (z && (X = Pe && Pe.onVnodeUnmounted) || Be) && Ht(() => {
      X && hs(X, B, F), Be && eo(F, null, B, "unmounted");
    }, q);
  }, oe = (F) => {
    const { type: B, el: q, anchor: we, transition: be } = F;
    if (B === G) {
      M(q, we);
      return;
    }
    if (B === Aa) {
      T(F);
      return;
    }
    const Ce = () => {
      l(q), be && !be.persisted && be.afterLeave && be.afterLeave();
    };
    if (F.shapeFlag & 1 && be && !be.persisted) {
      const { leave: Pe, delayLeave: Le } = be, Oe = () => Pe(q, Ce);
      Le ? Le(F.el, Ce, Oe) : Oe();
    } else
      Ce();
  }, M = (F, B) => {
    let q;
    for (; F !== B; )
      q = w(F), l(F), F = q;
    l(B);
  }, V = (F, B, q) => {
    const { bum: we, scope: be, job: Ce, subTree: Pe, um: Le, m: Oe, a: Te } = F;
    ei(Oe), ei(Te), we && Pn(we), be.stop(), Ce && (Ce.flags |= 8, se(Pe, F, B, q)), Le && Ht(Le, B), Ht(() => {
      F.isUnmounted = !0;
    }, B);
  }, j = (F, B, q, we = !1, be = !1, Ce = 0) => {
    for (let Pe = Ce; Pe < F.length; Pe++)
      se(F[Pe], B, q, we, be);
  }, P = (F) => {
    if (F.shapeFlag & 6)
      return P(F.component.subTree);
    if (F.shapeFlag & 128)
      return F.suspense.next();
    const B = w(F.anchor || F.el), q = B && B[ur];
    return q ? w(q) : B;
  };
  let R = !1;
  const ue = (F, B, q) => {
    F == null ? B._vnode && se(B._vnode, null, null, !0) : x(
      B._vnode || null,
      F,
      B,
      null,
      null,
      null,
      q
    ), B._vnode = F, R || (R = !0, Vl(), lr(), R = !1);
  }, Ve = {
    p: x,
    um: se,
    m: Ue,
    r: oe,
    mt: ne,
    mc: D,
    pc: le,
    pbc: Z,
    n: P,
    o: e
  };
  return {
    render: ue,
    hydrate: void 0,
    createApp: Hc(ue)
  };
}
function Ua({ type: e, props: s }, o) {
  return o === "svg" && e === "foreignObject" || o === "mathml" && e === "annotation-xml" && s && s.encoding && s.encoding.includes("html") ? void 0 : o;
}
function to({ effect: e, job: s }, o) {
  o ? (e.flags |= 32, s.flags |= 4) : (e.flags &= -33, s.flags &= -5);
}
function md(e, s) {
  return (!e || e && !e.pendingBranch) && s && !s.persisted;
}
function Il(e, s, o = !1) {
  const a = e.children, l = s.children;
  if (Je(a) && Je(l))
    for (let r = 0; r < a.length; r++) {
      const u = a[r];
      let c = l[r];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = l[r] = js(l[r]), c.el = u.el), !o && c.patchFlag !== -2 && Il(u, c)), c.type === ua && // avoid cached text nodes retaining detached dom nodes
      c.patchFlag !== -1 && (c.el = u.el), c.type === zt && !c.el && (c.el = u.el);
    }
}
function fd(e) {
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
function Ur(e) {
  const s = e.subTree.component;
  if (s)
    return s.asyncDep && !s.asyncResolved ? s : Ur(s);
}
function ei(e) {
  if (e)
    for (let s = 0; s < e.length; s++)
      e[s].flags |= 8;
}
const Ar = (e) => e.__isSuspense;
function vd(e, s) {
  s && s.pendingBranch ? Je(e) ? s.effects.push(...e) : s.effects.push(e) : Cc(e);
}
const G = Symbol.for("v-fgt"), ua = Symbol.for("v-txt"), zt = Symbol.for("v-cmt"), Aa = Symbol.for("v-stc"), Zo = [];
let es = null;
function n(e = !1) {
  Zo.push(es = e ? null : []);
}
function pd() {
  Zo.pop(), es = Zo[Zo.length - 1] || null;
}
let rn = 1;
function jn(e, s = !1) {
  rn += e, e < 0 && es && s && (es.hasOnce = !0);
}
function zr(e) {
  return e.dynamicChildren = rn > 0 ? es || _o : null, pd(), rn > 0 && es && es.push(e), e;
}
function i(e, s, o, a, l, r) {
  return zr(
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
  return zr(
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
const Vr = ({ key: e }) => e ?? null, Ln = ({
  ref: e,
  ref_key: s,
  ref_for: o
}) => (typeof e == "number" && (e = "" + e), e != null ? $t(e) || Bt(e) || Ze(e) ? { i: Dt, r: e, k: s, f: !!o } : e : null);
function t(e, s = null, o = null, a = 0, l = null, r = e === G ? 0 : 1, u = !1, c = !1) {
  const d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: s,
    key: s && Vr(s),
    ref: s && Ln(s),
    scopeId: rr,
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
  return c ? (El(d, o), r & 128 && e.normalize(d)) : o && (d.shapeFlag |= $t(o) ? 8 : 16), rn > 0 && // avoid a block node from tracking itself
  !u && // has current parent block
  es && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (d.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  d.patchFlag !== 32 && es.push(d), d;
}
const _ = gd;
function gd(e, s = null, o = null, a = 0, l = null, r = !1) {
  if ((!e || e === kr) && (e = zt), un(e)) {
    const c = Ys(
      e,
      s,
      !0
      /* mergeRef: true */
    );
    return o && El(c, o), rn > 0 && !r && es && (c.shapeFlag & 6 ? es[es.indexOf(e)] = c : es.push(c)), c.patchFlag = -2, c;
  }
  if (Id(e) && (e = e.__vccOpts), s) {
    s = hd(s);
    let { class: c, style: d } = s;
    c && !$t(c) && (s.class = De(c)), gt(d) && (kl(d) && !Je(d) && (d = Et({}, d)), s.style = Ft(d));
  }
  const u = $t(e) ? 1 : Ar(e) ? 128 : cr(e) ? 64 : gt(e) ? 4 : Ze(e) ? 2 : 0;
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
function hd(e) {
  return e ? kl(e) || Pr(e) ? Et({}, e) : e : null;
}
function Ys(e, s, o = !1, a = !1) {
  const { props: l, ref: r, patchFlag: u, children: c, transition: d } = e, v = s ? yd(l || {}, s) : l, f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: v,
    key: v && Vr(v),
    ref: s && s.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      o && r ? Je(r) ? r.concat(Ln(s)) : [r, Ln(s)] : Ln(s)
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
    patchFlag: s && e.type !== G ? u === -1 ? 16 : u | 16 : u,
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
  return _(ua, null, e, s);
}
function h(e = "", s = !1) {
  return s ? (n(), L(zt, null, e)) : _(zt, null, e);
}
function bs(e) {
  return e == null || typeof e == "boolean" ? _(zt) : Je(e) ? _(
    G,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : un(e) ? js(e) : _(ua, null, String(e));
}
function js(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ys(e);
}
function El(e, s) {
  let o = 0;
  const { shapeFlag: a } = e;
  if (s == null)
    s = null;
  else if (Je(s))
    o = 16;
  else if (typeof s == "object")
    if (a & 65) {
      const l = s.default;
      l && (l._c && (l._d = !1), El(e, l()), l._c && (l._d = !0));
      return;
    } else {
      o = 32;
      const l = s._;
      !l && !Pr(s) ? s._ctx = Dt : l === 3 && Dt && (Dt.slots._ === 1 ? s._ = 1 : (s._ = 2, e.patchFlag |= 1024));
    }
  else Ze(s) ? (s = { default: s, _ctx: Dt }, o = 32) : (s = String(s), a & 64 ? (o = 16, s = [$(s)]) : o = 8);
  e.children = s, e.shapeFlag |= o;
}
function yd(...e) {
  const s = {};
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    for (const l in a)
      if (l === "class")
        s.class !== a.class && (s.class = De([s.class, a.class]));
      else if (l === "style")
        s.style = Ft([s.style, a.style]);
      else if (Xn(l)) {
        const r = s[l], u = a[l];
        u && r !== u && !(Je(r) && r.includes(u)) && (s[l] = r ? [].concat(r, u) : u);
      } else l !== "" && (s[l] = a[l]);
  }
  return s;
}
function hs(e, s, o, a = null) {
  ps(e, s, 7, [
    o,
    a
  ]);
}
const wd = xr();
let _d = 0;
function kd(e, s, o) {
  const a = e.type, l = (s ? s.appContext : e.appContext) || wd, r = {
    uid: _d++,
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
    scope: new qu(
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
    propsOptions: Nr(a, l),
    emitsOptions: Er(a, l),
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
  return r.ctx = { _: r }, r.root = s ? s.root : r, r.emit = Xc.bind(null, r), e.ce && e.ce(r), r;
}
let Vt = null;
const Tl = () => Vt || Dt;
let Hn, tl;
{
  const e = sa(), s = (o, a) => {
    let l;
    return (l = e[o]) || (l = e[o] = []), l.push(a), (r) => {
      l.length > 1 ? l.forEach((u) => u(r)) : l[0](r);
    };
  };
  Hn = s(
    "__VUE_INSTANCE_SETTERS__",
    (o) => Vt = o
  ), tl = s(
    "__VUE_SSR_SETTERS__",
    (o) => cn = o
  );
}
const vn = (e) => {
  const s = Vt;
  return Hn(e), e.scope.on(), () => {
    e.scope.off(), Hn(s);
  };
}, ti = () => {
  Vt && Vt.scope.off(), Hn(null);
};
function Fr(e) {
  return e.vnode.shapeFlag & 4;
}
let cn = !1;
function bd(e, s = !1, o = !1) {
  s && tl(s);
  const { props: a, children: l } = e.vnode, r = Fr(e);
  nd(e, a, r, s), rd(e, l, o || s);
  const u = r ? $d(e, s) : void 0;
  return s && tl(!1), u;
}
function $d(e, s) {
  const o = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, zc);
  const { setup: a } = o;
  if (a) {
    Us();
    const l = e.setupContext = a.length > 1 ? xd(e) : null, r = vn(e), u = fn(
      a,
      e,
      0,
      [
        e.props,
        l
      ]
    ), c = Oi(u);
    if (As(), r(), (c || e.sp) && !$o(e) && yr(e), c) {
      if (u.then(ti, ti), s)
        return u.then((d) => {
          si(e, d);
        }).catch((d) => {
          na(d, e, 0);
        });
      e.asyncDep = u;
    } else
      si(e, u);
  } else
    Br(e);
}
function si(e, s, o) {
  Ze(s) ? e.type.__ssrInlineRender ? e.ssrRender = s : e.render = s : gt(s) && (e.setupState = or(s)), Br(e);
}
function Br(e, s, o) {
  const a = e.type;
  e.render || (e.render = a.render || Cs);
  {
    const l = vn(e);
    Us();
    try {
      Vc(e);
    } finally {
      As(), l();
    }
  }
}
const Cd = {
  get(e, s) {
    return Ut(e, "get", ""), e[s];
  }
};
function xd(e) {
  const s = (o) => {
    e.exposed = o || {};
  };
  return {
    attrs: new Proxy(e.attrs, Cd),
    slots: e.slots,
    emit: e.emit,
    expose: s
  };
}
function ca(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(or(vc(e.exposed)), {
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
function Sd(e, s = !0) {
  return Ze(e) ? e.displayName || e.name : e.name || s && e.__name;
}
function Id(e) {
  return Ze(e) && "__vccOpts" in e;
}
const O = (e, s) => wc(e, s, cn);
function No(e, s, o) {
  try {
    jn(-1);
    const a = arguments.length;
    return a === 2 ? gt(s) && !Je(s) ? un(s) ? _(e, null, [s]) : _(e, s) : _(e, null, s) : (a > 3 ? o = Array.prototype.slice.call(arguments, 2) : a === 3 && un(o) && (o = [o]), _(e, s, o));
  } finally {
    jn(1);
  }
}
const Ed = "3.5.25";
/**
* @vue/runtime-dom v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let sl;
const oi = typeof window < "u" && window.trustedTypes;
if (oi)
  try {
    sl = /* @__PURE__ */ oi.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Wr = sl ? (e) => sl.createHTML(e) : (e) => e, Td = "http://www.w3.org/2000/svg", Md = "http://www.w3.org/1998/Math/MathML", Ms = typeof document < "u" ? document : null, ni = Ms && /* @__PURE__ */ Ms.createElement("template"), Pd = {
  insert: (e, s, o) => {
    s.insertBefore(e, o || null);
  },
  remove: (e) => {
    const s = e.parentNode;
    s && s.removeChild(e);
  },
  createElement: (e, s, o, a) => {
    const l = s === "svg" ? Ms.createElementNS(Td, e) : s === "mathml" ? Ms.createElementNS(Md, e) : o ? Ms.createElement(e, { is: o }) : Ms.createElement(e);
    return e === "select" && a && a.multiple != null && l.setAttribute("multiple", a.multiple), l;
  },
  createText: (e) => Ms.createTextNode(e),
  createComment: (e) => Ms.createComment(e),
  setText: (e, s) => {
    e.nodeValue = s;
  },
  setElementText: (e, s) => {
    e.textContent = s;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Ms.querySelector(e),
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
      ni.innerHTML = Wr(
        a === "svg" ? `<svg>${e}</svg>` : a === "mathml" ? `<math>${e}</math>` : e
      );
      const c = ni.content;
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
}, Fs = "transition", Uo = "animation", To = Symbol("_vtc"), Gr = {
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
}, jr = /* @__PURE__ */ Et(
  {},
  vr,
  Gr
), Rd = (e) => (e.displayName = "Transition", e.props = jr, e), Nd = /* @__PURE__ */ Rd(
  (e, { slots: s }) => No(Ic, Hr(e), s)
), so = (e, s = []) => {
  Je(e) ? e.forEach((o) => o(...s)) : e && e(...s);
}, ai = (e) => e ? Je(e) ? e.some((s) => s.length > 1) : e.length > 1 : !1;
function Hr(e) {
  const s = {};
  for (const re in e)
    re in Gr || (s[re] = e[re]);
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
  } = e, k = Ld(l), x = k && k[0], C = k && k[1], {
    onBeforeEnter: S,
    onEnter: U,
    onEnterCancelled: E,
    onLeave: T,
    onLeaveCancelled: N,
    onBeforeAppear: A = S,
    onAppear: H = U,
    onAppearCancelled: D = E
  } = s, W = (re, he, ne, Q) => {
    re._enterCancelled = Q, Bs(re, he ? f : c), Bs(re, he ? v : u), ne && ne();
  }, Z = (re, he) => {
    re._isLeaving = !1, Bs(re, p), Bs(re, y), Bs(re, w), he && he();
  }, ee = (re) => (he, ne) => {
    const Q = re ? H : U, de = () => W(he, re, ne);
    so(Q, [he, de]), li(() => {
      Bs(he, re ? d : r), ws(he, re ? f : c), ai(Q) || ii(he, a, x, de);
    });
  };
  return Et(s, {
    onBeforeEnter(re) {
      so(S, [re]), ws(re, r), ws(re, u);
    },
    onBeforeAppear(re) {
      so(A, [re]), ws(re, d), ws(re, v);
    },
    onEnter: ee(!1),
    onAppear: ee(!0),
    onLeave(re, he) {
      re._isLeaving = !0;
      const ne = () => Z(re, he);
      ws(re, p), re._enterCancelled ? (ws(re, w), ol(re)) : (ol(re), ws(re, w)), li(() => {
        re._isLeaving && (Bs(re, p), ws(re, y), ai(T) || ii(re, a, C, ne));
      }), so(T, [re, ne]);
    },
    onEnterCancelled(re) {
      W(re, !1, void 0, !0), so(E, [re]);
    },
    onAppearCancelled(re) {
      W(re, !0, void 0, !0), so(D, [re]);
    },
    onLeaveCancelled(re) {
      Z(re), so(N, [re]);
    }
  });
}
function Ld(e) {
  if (e == null)
    return null;
  if (gt(e))
    return [za(e.enter), za(e.leave)];
  {
    const s = za(e);
    return [s, s];
  }
}
function za(e) {
  return zu(e);
}
function ws(e, s) {
  s.split(/\s+/).forEach((o) => o && e.classList.add(o)), (e[To] || (e[To] = /* @__PURE__ */ new Set())).add(s);
}
function Bs(e, s) {
  s.split(/\s+/).forEach((a) => a && e.classList.remove(a));
  const o = e[To];
  o && (o.delete(s), o.size || (e[To] = void 0));
}
function li(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Dd = 0;
function ii(e, s, o, a) {
  const l = e._endId = ++Dd, r = () => {
    l === e._endId && a();
  };
  if (o != null)
    return setTimeout(r, o);
  const { type: u, timeout: c, propCount: d } = qr(e, s);
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
function qr(e, s) {
  const o = window.getComputedStyle(e), a = (k) => (o[k] || "").split(", "), l = a(`${Fs}Delay`), r = a(`${Fs}Duration`), u = ri(l, r), c = a(`${Uo}Delay`), d = a(`${Uo}Duration`), v = ri(c, d);
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
function ri(e, s) {
  for (; e.length < s.length; )
    e = e.concat(e);
  return Math.max(...s.map((o, a) => ui(o) + ui(e[a])));
}
function ui(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function ol(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Od(e, s, o) {
  const a = e[To];
  a && (s = (s ? [s, ...a] : [...a]).join(" ")), s == null ? e.removeAttribute("class") : o ? e.setAttribute("class", s) : e.className = s;
}
const ci = Symbol("_vod"), Ud = Symbol("_vsh"), Ad = Symbol(""), zd = /(?:^|;)\s*display\s*:/;
function Vd(e, s, o) {
  const a = e.style, l = $t(o);
  let r = !1;
  if (o && !l) {
    if (s)
      if ($t(s))
        for (const u of s.split(";")) {
          const c = u.slice(0, u.indexOf(":")).trim();
          o[c] == null && Dn(a, c, "");
        }
      else
        for (const u in s)
          o[u] == null && Dn(a, u, "");
    for (const u in o)
      u === "display" && (r = !0), Dn(a, u, o[u]);
  } else if (l) {
    if (s !== o) {
      const u = a[Ad];
      u && (o += ";" + u), a.cssText = o, r = zd.test(o);
    }
  } else s && e.removeAttribute("style");
  ci in e && (e[ci] = r ? a.display : "", e[Ud] && (a.display = "none"));
}
const di = /\s*!important$/;
function Dn(e, s, o) {
  if (Je(o))
    o.forEach((a) => Dn(e, s, a));
  else if (o == null && (o = ""), s.startsWith("--"))
    e.setProperty(s, o);
  else {
    const a = Fd(e, s);
    di.test(o) ? e.setProperty(
      Xs(a),
      o.replace(di, ""),
      "important"
    ) : e[a] = o;
  }
}
const mi = ["Webkit", "Moz", "ms"], Va = {};
function Fd(e, s) {
  const o = Va[s];
  if (o)
    return o;
  let a = rs(s);
  if (a !== "filter" && a in e)
    return Va[s] = a;
  a = ea(a);
  for (let l = 0; l < mi.length; l++) {
    const r = mi[l] + a;
    if (r in e)
      return Va[s] = r;
  }
  return s;
}
const fi = "http://www.w3.org/1999/xlink";
function vi(e, s, o, a, l, r = ju(s)) {
  a && s.startsWith("xlink:") ? o == null ? e.removeAttributeNS(fi, s.slice(6, s.length)) : e.setAttributeNS(fi, s, o) : o == null || r && !Vi(o) ? e.removeAttribute(s) : e.setAttribute(
    s,
    r ? "" : fs(o) ? String(o) : o
  );
}
function pi(e, s, o, a, l) {
  if (s === "innerHTML" || s === "textContent") {
    o != null && (e[s] = s === "innerHTML" ? Wr(o) : o);
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
    c === "boolean" ? o = Vi(o) : o == null && c === "string" ? (o = "", u = !0) : c === "number" && (o = 0, u = !0);
  }
  try {
    e[s] = o;
  } catch {
  }
  u && e.removeAttribute(l || s);
}
function Ds(e, s, o, a) {
  e.addEventListener(s, o, a);
}
function Bd(e, s, o, a) {
  e.removeEventListener(s, o, a);
}
const gi = Symbol("_vei");
function Wd(e, s, o, a, l = null) {
  const r = e[gi] || (e[gi] = {}), u = r[s];
  if (a && u)
    u.value = a;
  else {
    const [c, d] = Gd(s);
    if (a) {
      const v = r[s] = qd(
        a,
        l
      );
      Ds(e, c, v, d);
    } else u && (Bd(e, c, u, d), r[s] = void 0);
  }
}
const hi = /(?:Once|Passive|Capture)$/;
function Gd(e) {
  let s;
  if (hi.test(e)) {
    s = {};
    let a;
    for (; a = e.match(hi); )
      e = e.slice(0, e.length - a[0].length), s[a[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Xs(e.slice(2)), s];
}
let Fa = 0;
const jd = /* @__PURE__ */ Promise.resolve(), Hd = () => Fa || (jd.then(() => Fa = 0), Fa = Date.now());
function qd(e, s) {
  const o = (a) => {
    if (!a._vts)
      a._vts = Date.now();
    else if (a._vts <= o.attached)
      return;
    ps(
      Kd(a, o.value),
      s,
      5,
      [a]
    );
  };
  return o.value = e, o.attached = Hd(), o;
}
function Kd(e, s) {
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
const yi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Jd = (e, s, o, a, l, r) => {
  const u = l === "svg";
  s === "class" ? Od(e, a, u) : s === "style" ? Vd(e, o, a) : Xn(s) ? dl(s) || Wd(e, s, o, a, r) : (s[0] === "." ? (s = s.slice(1), !0) : s[0] === "^" ? (s = s.slice(1), !1) : Yd(e, s, a, u)) ? (pi(e, s, a), !e.tagName.includes("-") && (s === "value" || s === "checked" || s === "selected") && vi(e, s, a, u, r, s !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(s) || !$t(a)) ? pi(e, rs(s), a, r, s) : (s === "true-value" ? e._trueValue = a : s === "false-value" && (e._falseValue = a), vi(e, s, a, u));
};
function Yd(e, s, o, a) {
  if (a)
    return !!(s === "innerHTML" || s === "textContent" || s in e && yi(s) && Ze(o));
  if (s === "spellcheck" || s === "draggable" || s === "translate" || s === "autocorrect" || s === "sandbox" && e.tagName === "IFRAME" || s === "form" || s === "list" && e.tagName === "INPUT" || s === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (s === "width" || s === "height") {
    const l = e.tagName;
    if (l === "IMG" || l === "VIDEO" || l === "CANVAS" || l === "SOURCE")
      return !1;
  }
  return yi(s) && $t(o) ? !1 : s in e;
}
const Kr = /* @__PURE__ */ new WeakMap(), Jr = /* @__PURE__ */ new WeakMap(), qn = Symbol("_moveCb"), wi = Symbol("_enterCb"), Qd = (e) => (delete e.props.mode, e), Xd = /* @__PURE__ */ Qd({
  name: "TransitionGroup",
  props: /* @__PURE__ */ Et({}, jr, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: s }) {
    const o = Tl(), a = fr();
    let l, r;
    return _r(() => {
      if (!l.length)
        return;
      const u = e.moveClass || `${e.name || "v"}-move`;
      if (!om(
        l[0].el,
        o.vnode.el,
        u
      )) {
        l = [];
        return;
      }
      l.forEach(em), l.forEach(tm);
      const c = l.filter(sm);
      ol(o.vnode.el), c.forEach((d) => {
        const v = d.el, f = v.style;
        ws(v, u), f.transform = f.webkitTransform = f.transitionDuration = "";
        const p = v[qn] = (w) => {
          w && w.target !== v || (!w || w.propertyName.endsWith("transform")) && (v.removeEventListener("transitionend", p), v[qn] = null, Bs(v, u));
        };
        v.addEventListener("transitionend", p);
      }), l = [];
    }), () => {
      const u = lt(e), c = Hr(u);
      let d = u.tag || G;
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
          ), Kr.set(f, {
            left: f.el.offsetLeft,
            top: f.el.offsetTop
          }));
        }
      r = s.default ? $l(s.default()) : [];
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
}), Zd = Xd;
function em(e) {
  const s = e.el;
  s[qn] && s[qn](), s[wi] && s[wi]();
}
function tm(e) {
  Jr.set(e, {
    left: e.el.offsetLeft,
    top: e.el.offsetTop
  });
}
function sm(e) {
  const s = Kr.get(e), o = Jr.get(e), a = s.left - o.left, l = s.top - o.top;
  if (a || l) {
    const r = e.el.style;
    return r.transform = r.webkitTransform = `translate(${a}px,${l}px)`, r.transitionDuration = "0s", e;
  }
}
function om(e, s, o) {
  const a = e.cloneNode(), l = e[To];
  l && l.forEach((c) => {
    c.split(/\s+/).forEach((d) => d && a.classList.remove(d));
  }), o.split(/\s+/).forEach((c) => c && a.classList.add(c)), a.style.display = "none";
  const r = s.nodeType === 1 ? s : s.parentNode;
  r.appendChild(a);
  const { hasTransform: u } = qr(a);
  return r.removeChild(a), u;
}
const Qs = (e) => {
  const s = e.props["onUpdate:modelValue"] || !1;
  return Je(s) ? (o) => Pn(s, o) : s;
};
function nm(e) {
  e.target.composing = !0;
}
function _i(e) {
  const s = e.target;
  s.composing && (s.composing = !1, s.dispatchEvent(new Event("input")));
}
const is = Symbol("_assign");
function ki(e, s, o) {
  return s && (e = e.trim()), o && (e = ta(e)), e;
}
const xo = {
  created(e, { modifiers: { lazy: s, trim: o, number: a } }, l) {
    e[is] = Qs(l);
    const r = a || l.props && l.props.type === "number";
    Ds(e, s ? "change" : "input", (u) => {
      u.target.composing || e[is](ki(e.value, o, r));
    }), (o || r) && Ds(e, "change", () => {
      e.value = ki(e.value, o, r);
    }), s || (Ds(e, "compositionstart", nm), Ds(e, "compositionend", _i), Ds(e, "change", _i));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: s }) {
    e.value = s ?? "";
  },
  beforeUpdate(e, { value: s, oldValue: o, modifiers: { lazy: a, trim: l, number: r } }, u) {
    if (e[is] = Qs(u), e.composing) return;
    const c = (r || e.type === "number") && !/^0\d/.test(e.value) ? ta(e.value) : e.value, d = s ?? "";
    c !== d && (document.activeElement === e && e.type !== "range" && (a && s === o || l && e.value.trim() === d) || (e.value = d));
  }
}, Kn = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, s, o) {
    e[is] = Qs(o), Ds(e, "change", () => {
      const a = e._modelValue, l = Mo(e), r = e.checked, u = e[is];
      if (Je(a)) {
        const c = vl(a, l), d = c !== -1;
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
        u(Yr(e, r));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: bi,
  beforeUpdate(e, s, o) {
    e[is] = Qs(o), bi(e, s, o);
  }
};
function bi(e, { value: s, oldValue: o }, a) {
  e._modelValue = s;
  let l;
  if (Je(s))
    l = vl(s, a.props.value) > -1;
  else if (Po(s))
    l = s.has(a.props.value);
  else {
    if (s === o) return;
    l = uo(s, Yr(e, !0));
  }
  e.checked !== l && (e.checked = l);
}
const On = {
  created(e, { value: s }, o) {
    e.checked = uo(s, o.props.value), e[is] = Qs(o), Ds(e, "change", () => {
      e[is](Mo(e));
    });
  },
  beforeUpdate(e, { value: s, oldValue: o }, a) {
    e[is] = Qs(a), s !== o && (e.checked = uo(s, a.props.value));
  }
}, So = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: s, modifiers: { number: o } }, a) {
    const l = Po(s);
    Ds(e, "change", () => {
      const r = Array.prototype.filter.call(e.options, (u) => u.selected).map(
        (u) => o ? ta(Mo(u)) : Mo(u)
      );
      e[is](
        e.multiple ? l ? new Set(r) : r : r[0]
      ), e._assigning = !0, Rt(() => {
        e._assigning = !1;
      });
    }), e[is] = Qs(a);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: s }) {
    $i(e, s);
  },
  beforeUpdate(e, s, o) {
    e[is] = Qs(o);
  },
  updated(e, { value: s }) {
    e._assigning || $i(e, s);
  }
};
function $i(e, s) {
  const o = e.multiple, a = Je(s);
  if (!(o && !a && !Po(s))) {
    for (let l = 0, r = e.options.length; l < r; l++) {
      const u = e.options[l], c = Mo(u);
      if (o)
        if (a) {
          const d = typeof c;
          d === "string" || d === "number" ? u.selected = s.some((v) => String(v) === String(c)) : u.selected = vl(s, c) > -1;
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
function Yr(e, s) {
  const o = s ? "_trueValue" : "_falseValue";
  return o in e ? e[o] : s;
}
const am = ["ctrl", "shift", "alt", "meta"], lm = {
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
  exact: (e, s) => am.some((o) => e[`${o}Key`] && !s.includes(o))
}, st = (e, s) => {
  const o = e._withMods || (e._withMods = {}), a = s.join(".");
  return o[a] || (o[a] = ((l, ...r) => {
    for (let u = 0; u < s.length; u++) {
      const c = lm[s[u]];
      if (c && c(l, s)) return;
    }
    return e(l, ...r);
  }));
}, im = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, ts = (e, s) => {
  const o = e._withKeys || (e._withKeys = {}), a = s.join(".");
  return o[a] || (o[a] = ((l) => {
    if (!("key" in l))
      return;
    const r = Xs(l.key);
    if (s.some(
      (u) => u === r || im[u] === r
    ))
      return e(l);
  }));
}, rm = /* @__PURE__ */ Et({ patchProp: Jd }, Pd);
let Ci;
function um() {
  return Ci || (Ci = cd(rm));
}
const pn = ((...e) => {
  const s = um().createApp(...e), { mount: o } = s;
  return s.mount = (a) => {
    const l = dm(a);
    if (!l) return;
    const r = s._component;
    !Ze(r) && !r.render && !r.template && (r.template = l.innerHTML), l.nodeType === 1 && (l.textContent = "");
    const u = o(l, !1, cm(l));
    return l instanceof Element && (l.removeAttribute("v-cloak"), l.setAttribute("data-v-app", "")), u;
  }, s;
});
function cm(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function dm(e) {
  return $t(e) ? document.querySelector(e) : e;
}
const mm = { class: "panel-layout" }, fm = {
  key: 0,
  class: "panel-layout-header"
}, vm = {
  key: 1,
  class: "panel-layout-search"
}, pm = { class: "panel-layout-content" }, gm = {
  key: 2,
  class: "panel-layout-footer"
}, hm = /* @__PURE__ */ Se({
  __name: "PanelLayout",
  setup(e) {
    return (s, o) => (n(), i("div", mm, [
      s.$slots.header ? (n(), i("div", fm, [
        et(s.$slots, "header", {}, void 0)
      ])) : h("", !0),
      s.$slots.search ? (n(), i("div", vm, [
        et(s.$slots, "search", {}, void 0)
      ])) : h("", !0),
      t("div", pm, [
        et(s.$slots, "content", {}, void 0)
      ]),
      s.$slots.footer ? (n(), i("div", gm, [
        et(s.$slots, "footer", {}, void 0)
      ])) : h("", !0)
    ]));
  }
}), Ie = (e, s) => {
  const o = e.__vccOpts || e;
  for (const [a, l] of s)
    o[a] = l;
  return o;
}, Tt = /* @__PURE__ */ Ie(hm, [["__scopeId", "data-v-21565df9"]]), ym = {
  key: 0,
  class: "panel-title-prefix"
}, wm = {
  key: 1,
  class: "panel-title-prefix-theme"
}, _m = /* @__PURE__ */ Se({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(e) {
    return (s, o) => (n(), L(Cl(`h${e.level}`), {
      class: De(["panel-title", e.variant])
    }, {
      default: g(() => [
        e.showPrefix ? (n(), i("span", ym, m(e.prefix), 1)) : (n(), i("span", wm)),
        et(s.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), km = /* @__PURE__ */ Ie(_m, [["__scopeId", "data-v-c3875efc"]]), bm = ["title"], $m = ["width", "height"], Cm = /* @__PURE__ */ Se({
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
      ])], 8, $m))
    ], 8, bm));
  }
}), Qr = /* @__PURE__ */ Ie(Cm, [["__scopeId", "data-v-6fc7f16d"]]), xm = { class: "header-left" }, Sm = {
  key: 0,
  class: "header-actions"
}, Im = /* @__PURE__ */ Se({
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
      t("div", xm, [
        _(km, { "show-prefix": e.showPrefix }, {
          default: g(() => [
            $(m(e.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        e.showInfo ? (n(), L(Qr, {
          key: 0,
          onClick: o[0] || (o[0] = (a) => s.$emit("info-click"))
        })) : h("", !0)
      ]),
      s.$slots.actions ? (n(), i("div", Sm, [
        et(s.$slots, "actions", {}, void 0)
      ])) : h("", !0)
    ], 2));
  }
}), Mt = /* @__PURE__ */ Ie(Im, [["__scopeId", "data-v-55a62cd6"]]), Em = {
  key: 0,
  class: "section-title-count"
}, Tm = {
  key: 1,
  class: "section-title-icon"
}, Mm = /* @__PURE__ */ Se({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e) {
    return (s, o) => (n(), L(Cl(`h${e.level}`), {
      class: De(["section-title", { clickable: e.clickable }]),
      onClick: o[0] || (o[0] = (a) => e.clickable && s.$emit("click"))
    }, {
      default: g(() => [
        et(s.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (n(), i("span", Em, "(" + m(e.count) + ")", 1)) : h("", !0),
        e.clickable ? (n(), i("span", Tm, m(e.expanded ? "▼" : "▸"), 1)) : h("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), as = /* @__PURE__ */ Ie(Mm, [["__scopeId", "data-v-559361eb"]]), Pm = { class: "status-grid" }, Rm = { class: "status-grid__columns" }, Nm = { class: "status-grid__column" }, Lm = { class: "status-grid__title" }, Dm = { class: "status-grid__column status-grid__column--right" }, Om = { class: "status-grid__title" }, Um = {
  key: 0,
  class: "status-grid__footer"
}, Am = /* @__PURE__ */ Se({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(e) {
    return (s, o) => (n(), i("div", Pm, [
      t("div", Rm, [
        t("div", Nm, [
          t("h4", Lm, m(e.leftTitle), 1),
          et(s.$slots, "left", {}, void 0)
        ]),
        t("div", Dm, [
          t("h4", Om, m(e.rightTitle), 1),
          et(s.$slots, "right", {}, void 0)
        ])
      ]),
      s.$slots.footer ? (n(), i("div", Um, [
        et(s.$slots, "footer", {}, void 0)
      ])) : h("", !0)
    ]));
  }
}), zm = /* @__PURE__ */ Ie(Am, [["__scopeId", "data-v-73b7ba3f"]]), Vm = {
  key: 0,
  class: "status-item__icon"
}, Fm = {
  key: 1,
  class: "status-item__count"
}, Bm = { class: "status-item__label" }, Wm = /* @__PURE__ */ Se({
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
      e.icon ? (n(), i("span", Vm, m(e.icon), 1)) : h("", !0),
      e.count !== void 0 ? (n(), i("span", Fm, m(e.count), 1)) : h("", !0),
      t("span", Bm, m(e.label), 1)
    ], 2));
  }
}), ys = /* @__PURE__ */ Ie(Wm, [["__scopeId", "data-v-6f929183"]]), Gm = { class: "issue-card__header" }, jm = { class: "issue-card__icon" }, Hm = { class: "issue-card__title" }, qm = {
  key: 0,
  class: "issue-card__content"
}, Km = {
  key: 0,
  class: "issue-card__description"
}, Jm = {
  key: 1,
  class: "issue-card__items"
}, Ym = {
  key: 2,
  class: "issue-card__actions"
}, Qm = /* @__PURE__ */ Se({
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
      t("div", Gm, [
        t("span", jm, m(e.icon), 1),
        t("h4", Hm, m(e.title), 1)
      ]),
      a.$slots.default || e.description ? (n(), i("div", qm, [
        e.description ? (n(), i("p", Km, m(e.description), 1)) : h("", !0),
        et(a.$slots, "default", {}, void 0)
      ])) : h("", !0),
      e.items && e.items.length ? (n(), i("div", Jm, [
        (n(!0), i(G, null, ke(e.items, (r, u) => (n(), i("div", {
          key: u,
          class: "issue-card__item"
        }, [
          l[0] || (l[0] = t("span", { class: "issue-card__bullet" }, "•", -1)),
          t("span", null, m(r), 1)
        ]))), 128))
      ])) : h("", !0),
      a.$slots.actions ? (n(), i("div", Ym, [
        et(a.$slots, "actions", {}, void 0)
      ])) : h("", !0)
    ], 2));
  }
}), ds = /* @__PURE__ */ Ie(Qm, [["__scopeId", "data-v-df6aa348"]]), Xm = ["type", "disabled"], Zm = {
  key: 0,
  class: "spinner"
}, ef = /* @__PURE__ */ Se({
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
      e.loading ? (n(), i("span", Zm)) : h("", !0),
      e.loading ? h("", !0) : et(s.$slots, "default", { key: 1 }, void 0)
    ], 10, Xm));
  }
}), xe = /* @__PURE__ */ Ie(ef, [["__scopeId", "data-v-772abe47"]]), tf = { class: "empty-state" }, sf = {
  key: 0,
  class: "empty-icon"
}, of = { class: "empty-message" }, nf = /* @__PURE__ */ Se({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(e) {
    return (s, o) => (n(), i("div", tf, [
      e.icon ? (n(), i("div", sf, m(e.icon), 1)) : h("", !0),
      t("p", of, m(e.message), 1),
      e.actionLabel ? (n(), L(xe, {
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
}), us = /* @__PURE__ */ Ie(nf, [["__scopeId", "data-v-4466284f"]]), af = /* @__PURE__ */ Se({
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
}), Un = /* @__PURE__ */ Ie(af, [["__scopeId", "data-v-75e9eeb8"]]), lf = /* @__PURE__ */ Se({
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
}), nl = /* @__PURE__ */ Ie(lf, [["__scopeId", "data-v-2f186e4c"]]), rf = { class: "detail-row" }, uf = /* @__PURE__ */ Se({
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
    return (s, o) => (n(), i("div", rf, [
      _(Un, { "min-width": e.labelMinWidth }, {
        default: g(() => [
          $(m(e.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      e.value ? (n(), L(nl, {
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
}), _t = /* @__PURE__ */ Ie(uf, [["__scopeId", "data-v-ef15664a"]]), cf = { class: "modal-header" }, df = { class: "modal-body" }, mf = { class: "status-section" }, ff = {
  key: 0,
  class: "status-section"
}, vf = { class: "section-header-row" }, pf = {
  key: 0,
  class: "workflow-group"
}, gf = { class: "workflow-group-header" }, hf = { class: "workflow-group-title" }, yf = { class: "workflow-list" }, wf = { class: "workflow-name" }, _f = { class: "workflow-issue" }, kf = {
  key: 1,
  class: "workflow-group"
}, bf = { class: "workflow-group-header" }, $f = { class: "workflow-group-title" }, Cf = { class: "workflow-list" }, xf = { class: "workflow-name" }, Sf = { class: "workflow-issue" }, If = {
  key: 2,
  class: "workflow-group"
}, Ef = { class: "workflow-group-header" }, Tf = { class: "workflow-group-title" }, Mf = { class: "workflow-list" }, Pf = { class: "workflow-name" }, Rf = {
  key: 3,
  class: "workflow-group"
}, Nf = { class: "workflow-group-header" }, Lf = { class: "workflow-group-title" }, Df = { class: "workflow-list" }, Of = { class: "workflow-name" }, Uf = {
  key: 4,
  class: "workflow-group"
}, Af = { class: "workflow-group-header" }, zf = { class: "workflow-group-title" }, Vf = { class: "workflow-list" }, Ff = { class: "workflow-name" }, Bf = {
  key: 5,
  class: "workflow-group"
}, Wf = { class: "workflow-group-title" }, Gf = { class: "expand-icon" }, jf = {
  key: 0,
  class: "workflow-list"
}, Hf = { class: "workflow-name" }, qf = {
  key: 1,
  class: "status-section"
}, Kf = {
  key: 0,
  class: "change-group"
}, Jf = { class: "change-group-header" }, Yf = { class: "change-group-title" }, Qf = { class: "change-list" }, Xf = { class: "node-name" }, Zf = {
  key: 0,
  class: "dev-badge"
}, ev = {
  key: 1,
  class: "change-group"
}, tv = { class: "change-group-header" }, sv = { class: "change-group-title" }, ov = { class: "change-list" }, nv = { class: "node-name" }, av = {
  key: 0,
  class: "dev-badge"
}, lv = {
  key: 2,
  class: "change-group"
}, iv = { class: "change-list" }, rv = { class: "change-item" }, uv = { class: "node-name" }, cv = {
  key: 3,
  class: "change-group"
}, dv = {
  key: 2,
  class: "status-section"
}, mv = { class: "section-header-row" }, fv = {
  key: 0,
  class: "drift-item"
}, vv = { class: "drift-list" }, pv = {
  key: 0,
  class: "drift-list-more"
}, gv = {
  key: 1,
  class: "drift-item"
}, hv = { class: "drift-list" }, yv = {
  key: 0,
  class: "drift-list-more"
}, wv = {
  key: 2,
  class: "drift-item"
}, _v = { class: "drift-list" }, kv = { class: "version-actual" }, bv = { class: "version-expected" }, $v = {
  key: 0,
  class: "drift-list-more"
}, Cv = {
  key: 3,
  class: "drift-item"
}, xv = { class: "repair-action" }, Sv = {
  key: 3,
  class: "status-section"
}, Iv = { class: "info-box" }, Ev = { class: "drift-list" }, Tv = {
  key: 0,
  class: "drift-list-more"
}, Mv = {
  key: 4,
  class: "status-section"
}, Pv = { class: "warning-box" }, Rv = {
  key: 5,
  class: "empty-state-inline"
}, Nv = { class: "modal-actions" }, Lv = /* @__PURE__ */ Se({
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
        var S, U, E;
        const C = (E = (U = (S = s.status) == null ? void 0 : S.workflows) == null ? void 0 : U.analyzed) == null ? void 0 : E.find((T) => T.name === x);
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
      var k, x, C, S, U, E, T, N, A, H, D, W, Z, ee, re, he, ne, Q, de, Ne, le, pe;
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
            t("div", cf, [
              y[8] || (y[8] = t("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              t("button", {
                class: "modal-close",
                onClick: y[0] || (y[0] = (me) => w.$emit("close"))
              }, "✕")
            ]),
            t("div", df, [
              t("div", mf, [
                _(as, { level: "4" }, {
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
              u.value ? (n(), i("div", ff, [
                t("div", vf, [
                  _(as, { level: "4" }, {
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
                a.value.length ? (n(), i("div", pf, [
                  t("div", gf, [
                    y[11] || (y[11] = t("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    t("span", hf, "BROKEN (COMMITTED) (" + m(a.value.length) + ")", 1)
                  ]),
                  t("div", yf, [
                    (n(!0), i(G, null, ke(a.value, (me) => (n(), i("div", {
                      key: me.name,
                      class: "workflow-item"
                    }, [
                      t("span", wf, m(me.name), 1),
                      t("span", _f, m(me.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                l.value.length ? (n(), i("div", kf, [
                  t("div", bf, [
                    y[12] || (y[12] = t("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    t("span", $f, "BROKEN (UNCOMMITTED) (" + m(l.value.length) + ")", 1)
                  ]),
                  t("div", Cf, [
                    (n(!0), i(G, null, ke(l.value, (me) => (n(), i("div", {
                      key: me.name,
                      class: "workflow-item"
                    }, [
                      t("span", xf, m(me.name), 1),
                      t("span", Sf, m(me.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                (x = (k = e.status.workflows) == null ? void 0 : k.new) != null && x.length ? (n(), i("div", If, [
                  t("div", Ef, [
                    y[13] || (y[13] = t("span", { class: "workflow-status-icon new" }, "●", -1)),
                    t("span", Tf, "NEW (" + m(e.status.workflows.new.length) + ")", 1)
                  ]),
                  t("div", Mf, [
                    (n(!0), i(G, null, ke(e.status.workflows.new, (me) => (n(), i("div", {
                      key: me,
                      class: "workflow-item"
                    }, [
                      t("span", Pf, m(me), 1)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                (S = (C = e.status.workflows) == null ? void 0 : C.modified) != null && S.length ? (n(), i("div", Rf, [
                  t("div", Nf, [
                    y[14] || (y[14] = t("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    t("span", Lf, "MODIFIED (" + m(e.status.workflows.modified.length) + ")", 1)
                  ]),
                  t("div", Df, [
                    (n(!0), i(G, null, ke(e.status.workflows.modified, (me) => (n(), i("div", {
                      key: me,
                      class: "workflow-item"
                    }, [
                      t("span", Of, m(me), 1)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                (E = (U = e.status.workflows) == null ? void 0 : U.deleted) != null && E.length ? (n(), i("div", Uf, [
                  t("div", Af, [
                    y[15] || (y[15] = t("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    t("span", zf, "DELETED (" + m(e.status.workflows.deleted.length) + ")", 1)
                  ]),
                  t("div", Vf, [
                    (n(!0), i(G, null, ke(e.status.workflows.deleted, (me) => (n(), i("div", {
                      key: me,
                      class: "workflow-item"
                    }, [
                      t("span", Ff, m(me), 1)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                r.value.length ? (n(), i("div", Bf, [
                  t("div", {
                    class: "workflow-group-header clickable",
                    onClick: y[2] || (y[2] = (me) => o.value = !o.value)
                  }, [
                    y[16] || (y[16] = t("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    t("span", Wf, "SYNCED (" + m(r.value.length) + ")", 1),
                    t("span", Gf, m(o.value ? "▼" : "▶"), 1)
                  ]),
                  o.value ? (n(), i("div", jf, [
                    (n(!0), i(G, null, ke(r.value, (me) => (n(), i("div", {
                      key: me,
                      class: "workflow-item"
                    }, [
                      t("span", Hf, m(me), 1)
                    ]))), 128))
                  ])) : h("", !0)
                ])) : h("", !0)
              ])) : h("", !0),
              c.value ? (n(), i("div", qf, [
                _(as, { level: "4" }, {
                  default: g(() => [...y[17] || (y[17] = [
                    $("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (N = (T = e.status.git_changes) == null ? void 0 : T.nodes_added) != null && N.length ? (n(), i("div", Kf, [
                  t("div", Jf, [
                    y[18] || (y[18] = t("span", { class: "change-icon add" }, "+", -1)),
                    t("span", Yf, "NODES ADDED (" + m(e.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  t("div", Qf, [
                    (n(!0), i(G, null, ke(e.status.git_changes.nodes_added, (me) => (n(), i("div", {
                      key: f(me),
                      class: "change-item"
                    }, [
                      t("span", Xf, m(f(me)), 1),
                      p(me) ? (n(), i("span", Zf, "dev")) : h("", !0)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                (H = (A = e.status.git_changes) == null ? void 0 : A.nodes_removed) != null && H.length ? (n(), i("div", ev, [
                  t("div", tv, [
                    y[19] || (y[19] = t("span", { class: "change-icon remove" }, "-", -1)),
                    t("span", sv, "NODES REMOVED (" + m(e.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  t("div", ov, [
                    (n(!0), i(G, null, ke(e.status.git_changes.nodes_removed, (me) => (n(), i("div", {
                      key: f(me),
                      class: "change-item"
                    }, [
                      t("span", nv, m(f(me)), 1),
                      p(me) ? (n(), i("span", av, "dev")) : h("", !0)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                (D = e.status.git_changes) != null && D.workflow_changes ? (n(), i("div", lv, [
                  y[20] || (y[20] = t("div", { class: "change-group-header" }, [
                    t("span", { class: "change-icon modified" }, "~"),
                    t("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  t("div", iv, [
                    t("div", rv, [
                      t("span", uv, m(v.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : h("", !0),
                (W = e.status.git_changes) != null && W.has_other_changes ? (n(), i("div", cv, [...y[21] || (y[21] = [
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
              (Z = e.status.comparison) != null && Z.is_synced ? h("", !0) : (n(), i("div", dv, [
                t("div", mv, [
                  _(as, { level: "4" }, {
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
                (re = (ee = e.status.comparison) == null ? void 0 : ee.missing_nodes) != null && re.length ? (n(), i("div", fv, [
                  _(_t, {
                    label: "Missing Nodes:",
                    value: `${e.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  t("div", vv, [
                    (n(!0), i(G, null, ke(e.status.comparison.missing_nodes.slice(0, 10), (me) => (n(), i("div", {
                      key: me,
                      class: "drift-list-item"
                    }, " - " + m(me), 1))), 128)),
                    e.status.comparison.missing_nodes.length > 10 ? (n(), i("div", pv, " ... and " + m(e.status.comparison.missing_nodes.length - 10) + " more ", 1)) : h("", !0)
                  ])
                ])) : h("", !0),
                (ne = (he = e.status.comparison) == null ? void 0 : he.extra_nodes) != null && ne.length ? (n(), i("div", gv, [
                  _(_t, {
                    label: "Extra Nodes:",
                    value: `${e.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  t("div", hv, [
                    (n(!0), i(G, null, ke(e.status.comparison.extra_nodes.slice(0, 10), (me) => (n(), i("div", {
                      key: me,
                      class: "drift-list-item"
                    }, " - " + m(me), 1))), 128)),
                    e.status.comparison.extra_nodes.length > 10 ? (n(), i("div", yv, " ... and " + m(e.status.comparison.extra_nodes.length - 10) + " more ", 1)) : h("", !0)
                  ])
                ])) : h("", !0),
                (de = (Q = e.status.comparison) == null ? void 0 : Q.version_mismatches) != null && de.length ? (n(), i("div", wv, [
                  _(_t, {
                    label: "Version Mismatches:",
                    value: `${e.status.comparison.version_mismatches.length} node(s) have wrong versions`
                  }, null, 8, ["value"]),
                  t("div", _v, [
                    (n(!0), i(G, null, ke(e.status.comparison.version_mismatches.slice(0, 10), (me) => (n(), i("div", {
                      key: me.name,
                      class: "drift-list-item version-mismatch"
                    }, [
                      $(m(me.name) + ": ", 1),
                      t("span", kv, m(me.actual), 1),
                      y[23] || (y[23] = $(" → ", -1)),
                      t("span", bv, m(me.expected), 1)
                    ]))), 128)),
                    e.status.comparison.version_mismatches.length > 10 ? (n(), i("div", $v, " ... and " + m(e.status.comparison.version_mismatches.length - 10) + " more ", 1)) : h("", !0)
                  ])
                ])) : h("", !0),
                ((Ne = e.status.comparison) == null ? void 0 : Ne.packages_in_sync) === !1 ? (n(), i("div", Cv, [
                  _(_t, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ])) : h("", !0),
                t("div", xv, [
                  _(xe, {
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
              (pe = (le = e.status.comparison) == null ? void 0 : le.disabled_nodes) != null && pe.length ? (n(), i("div", Sv, [
                _(as, { level: "4" }, {
                  default: g(() => [...y[27] || (y[27] = [
                    $("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                t("div", Iv, [
                  y[28] || (y[28] = t("span", { class: "info-icon" }, "ℹ", -1)),
                  t("span", null, m(e.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                t("div", Ev, [
                  (n(!0), i(G, null, ke(e.status.comparison.disabled_nodes.slice(0, 10), (me) => (n(), i("div", {
                    key: me,
                    class: "drift-list-item"
                  }, " • " + m(me), 1))), 128)),
                  e.status.comparison.disabled_nodes.length > 10 ? (n(), i("div", Tv, " ... and " + m(e.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : h("", !0)
                ])
              ])) : h("", !0),
              (e.status.missing_models_count ?? 0) > 0 ? (n(), i("div", Mv, [
                _(as, { level: "4" }, {
                  default: g(() => [...y[29] || (y[29] = [
                    $("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                t("div", Pv, [
                  y[30] || (y[30] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("span", null, m(e.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                y[31] || (y[31] = t("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : h("", !0),
              d.value ? (n(), i("div", Rv, [...y[32] || (y[32] = [
                t("div", { class: "empty-icon" }, "✅", -1),
                t("div", { class: "empty-message" }, [
                  t("strong", null, "Environment is clean!"),
                  t("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : h("", !0)
            ]),
            t("div", Nv, [
              _(xe, {
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
}), Dv = /* @__PURE__ */ Ie(Lv, [["__scopeId", "data-v-e2b37122"]]), Ov = { class: "health-section-header" }, Uv = { class: "suggestions-content" }, Av = { class: "suggestions-text" }, zv = { style: { "margin-top": "var(--cg-space-3)" } }, Vv = {
  key: 1,
  class: "no-issues-text"
}, Fv = /* @__PURE__ */ Se({
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
      const M = a.status.workflows.analyzed || [], V = M.filter(
        (j) => j.unresolved_models_count > 0 || j.ambiguous_models_count > 0
      );
      return V.length === 0 && a.status.missing_models_count > 0 ? M.filter((j) => j.sync_state === "synced") : V;
    });
    function C() {
      const M = x.value;
      M.length !== 0 && (f.value = !0, v("repair-missing-models", M.map((V) => V.name)));
    }
    function S() {
      f.value = !1;
    }
    s({ resetRepairingState: S, resetRepairingEnvironmentState: y, closeDetailModal: k });
    const U = O(() => a.status.workflows.new.length > 0 || a.status.workflows.modified.length > 0 || a.status.workflows.deleted.length > 0), E = O(() => a.status.has_changes), T = O(() => {
      const M = a.status.git_changes;
      return M.nodes_added.length > 0 || M.nodes_removed.length > 0 || M.workflow_changes;
    }), N = O(() => a.status.has_changes || U.value), A = O(() => Object.keys(a.status.git_changes.workflow_changes_detail).length), H = O(() => a.status.git_changes.has_other_changes), D = O(() => {
      var M;
      return ((M = a.status.workflows.analyzed) == null ? void 0 : M.filter((V) => V.status === "broken")) || [];
    }), W = O(() => {
      var M;
      return ((M = a.status.workflows.analyzed) == null ? void 0 : M.filter(
        (V) => V.has_path_sync_issues && !V.has_issues
      )) || [];
    }), Z = O(() => D.value.length > 0);
    function ee(M) {
      const V = [
        />=\s*v?(\d+(?:\.\d+){1,3})/i,
        /requires\s+comfyui\s*v?(\d+(?:\.\d+){1,3})/i,
        /comfyui\s*v?(\d+(?:\.\d+){1,3})\+/i
      ];
      for (const j of V) {
        const P = M.match(j);
        if (P != null && P[1])
          return P[1];
      }
      return null;
    }
    function re(M) {
      const V = M.map(ee).filter((j) => !!j);
      return [...new Set(V)];
    }
    function he(M) {
      if (M.length === 0) return "";
      if (M.length === 1) return ` (>= ${M[0]})`;
      const V = M.slice(0, 2).map((P) => `>= ${P}`).join(", "), j = M.length > 2;
      return ` (${V}${j ? ", ..." : ""})`;
    }
    function ne(M) {
      return M.replace(/uninstallable node mappings?/gi, (V) => V.toLowerCase().endsWith("s") ? "community packages" : "community package").replace(/no installable package versions?/gi, "need community packages").replace(/\bare uninstallable\b/gi, "need community packages").replace(/\buninstallable\b/gi, "community-mapped");
    }
    function Q(M) {
      const V = ne(M.issue_summary || "Has issues"), j = /(?:>=|v?\d+\.\d+)/i.test(V), P = re(M.version_gated_guidance || []);
      return (M.nodes_version_gated_count || 0) > 0 && P.length > 0 && !j ? `${M.name} — ${V} (needs ComfyUI ${P.map((R) => `>= ${R}`).join(", ")})` : `${M.name} — ${V}`;
    }
    const de = O(() => D.value.reduce(
      (M, V) => M + (V.nodes_version_gated_count || 0),
      0
    )), Ne = O(() => {
      const M = D.value.flatMap(
        (V) => re(V.version_gated_guidance || [])
      );
      return [...new Set(M)];
    }), le = O(() => D.value.reduce(
      (M, V) => M + (V.nodes_uninstallable_count || 0),
      0
    )), pe = O(() => {
      const M = [];
      return de.value > 0 && M.push(
        `${de.value} require newer ComfyUI${he(Ne.value)}`
      ), le.value > 0 && M.push(`${le.value} need community packages`), M.length > 0 ? `These workflows have missing, blocked, or actionable dependencies (${M.join(", ")}) that must be resolved before they can run.` : "These workflows have missing dependencies that must be resolved before they can run.";
    }), me = O(() => Z.value || W.value.length > 0 || a.status.missing_models_count > 0 || !a.status.comparison.is_synced || a.status.has_legacy_manager), Ue = O(() => {
      const M = [];
      return a.status.workflows.new.length > 0 && M.push(`${a.status.workflows.new.length} new`), a.status.workflows.modified.length > 0 && M.push(`${a.status.workflows.modified.length} modified`), a.status.workflows.deleted.length > 0 && M.push(`${a.status.workflows.deleted.length} deleted`), M.length > 0 ? `${M.join(", ")} workflow${M.length === 1 && !M[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), se = O(() => {
      var j, P;
      const M = [], V = a.status.comparison;
      return (j = V.missing_nodes) != null && j.length && M.push(`${V.missing_nodes.length} missing node${V.missing_nodes.length === 1 ? "" : "s"}`), (P = V.extra_nodes) != null && P.length && M.push(`${V.extra_nodes.length} untracked node${V.extra_nodes.length === 1 ? "" : "s"}`), M.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${M.join(" and ")}.`;
    }), oe = O(() => {
      var j, P;
      const M = [], V = a.status.comparison;
      return (j = V.extra_nodes) != null && j.length && (V.extra_nodes.slice(0, 3).forEach((R) => {
        M.push(`Untracked: ${R}`);
      }), V.extra_nodes.length > 3 && M.push(`...and ${V.extra_nodes.length - 3} more untracked`)), (P = V.missing_nodes) != null && P.length && (V.missing_nodes.slice(0, 3).forEach((R) => {
        M.push(`Missing: ${R}`);
      }), V.missing_nodes.length > 3 && M.push(`...and ${V.missing_nodes.length - 3} more missing`)), M;
    });
    return (M, V) => (n(), i(G, null, [
      _(Tt, null, {
        header: g(() => [
          _(Mt, { title: "STATUS" })
        ]),
        content: g(() => [
          a.setupState === "no_workspace" ? (n(), L(ds, {
            key: 0,
            severity: "info",
            icon: "🚀",
            title: "No ComfyGit workspace detected",
            description: "Set up a workspace to manage your ComfyUI environments, workflows, and models with version control."
          }, {
            actions: g(() => [
              _(xe, {
                variant: "primary",
                size: "sm",
                onClick: V[0] || (V[0] = (j) => M.$emit("start-setup"))
              }, {
                default: g(() => [...V[13] || (V[13] = [
                  $(" Start Setup ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : a.setupState === "unmanaged" ? (n(), L(ds, {
            key: 1,
            severity: "warning",
            icon: "⚠",
            title: "Not in a managed environment",
            description: "You're running from an unmanaged ComfyUI installation. Switch to a managed environment to use ComfyGit features."
          }, {
            actions: g(() => [
              _(xe, {
                variant: "primary",
                size: "sm",
                onClick: V[1] || (V[1] = (j) => M.$emit("view-environments"))
              }, {
                default: g(() => [...V[14] || (V[14] = [
                  $(" View Environments ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : a.setupState === "empty_workspace" ? (n(), L(ds, {
            key: 2,
            severity: "info",
            icon: "🏗",
            title: "Workspace ready - create your first environment",
            description: "Your workspace is set up. Create a managed environment to start using ComfyGit."
          }, {
            actions: g(() => [
              _(xe, {
                variant: "primary",
                size: "sm",
                onClick: V[2] || (V[2] = (j) => M.$emit("create-environment"))
              }, {
                default: g(() => [...V[15] || (V[15] = [
                  $(" Create Environment ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : h("", !0),
          t("div", {
            class: "health-section-wrapper",
            onMouseenter: V[4] || (V[4] = (j) => r.value = !0),
            onMouseleave: V[5] || (V[5] = (j) => r.value = !1)
          }, [
            t("div", Ov, [
              _(as, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: g(() => [...V[16] || (V[16] = [
                  $(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              _(Nd, { name: "fade" }, {
                default: g(() => [
                  r.value ? (n(), L(xe, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: u
                  }, {
                    default: g(() => [...V[17] || (V[17] = [
                      $(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : h("", !0)
                ]),
                _: 1
              })
            ]),
            _(zm, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, ss({
              left: g(() => [
                e.status.workflows.new.length ? (n(), L(ys, {
                  key: 0,
                  icon: "●",
                  count: e.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : h("", !0),
                e.status.workflows.modified.length ? (n(), L(ys, {
                  key: 1,
                  icon: "●",
                  count: e.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : h("", !0),
                e.status.workflows.deleted.length ? (n(), L(ys, {
                  key: 2,
                  icon: "●",
                  count: e.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : h("", !0),
                _(ys, {
                  icon: "✓",
                  count: e.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: U.value
                }, null, 8, ["count", "separator"])
              ]),
              right: g(() => [
                e.status.git_changes.nodes_added.length ? (n(), L(ys, {
                  key: 0,
                  icon: "●",
                  count: e.status.git_changes.nodes_added.length,
                  label: e.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : h("", !0),
                e.status.git_changes.nodes_removed.length ? (n(), L(ys, {
                  key: 1,
                  icon: "●",
                  count: e.status.git_changes.nodes_removed.length,
                  label: e.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : h("", !0),
                e.status.git_changes.workflow_changes ? (n(), L(ys, {
                  key: 2,
                  icon: "●",
                  count: A.value,
                  label: A.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : h("", !0),
                H.value ? (n(), L(ys, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : h("", !0),
                E.value && !T.value && !H.value ? (n(), L(ys, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : h("", !0),
                E.value ? h("", !0) : (n(), L(ys, {
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
                  V[19] || (V[19] = t("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  t("div", Uv, [
                    t("span", Av, m(Ue.value), 1),
                    _(xe, {
                      variant: "primary",
                      size: "sm",
                      onClick: V[3] || (V[3] = (j) => M.$emit("commit-changes"))
                    }, {
                      default: g(() => [...V[18] || (V[18] = [
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
          e.status.is_detached_head ? (n(), L(ds, {
            key: 3,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: g(() => [
              _(xe, {
                variant: "primary",
                size: "sm",
                onClick: V[6] || (V[6] = (j) => M.$emit("create-branch"))
              }, {
                default: g(() => [...V[20] || (V[20] = [
                  $(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : h("", !0),
          t("div", zv, [
            _(as, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: g(() => [...V[21] || (V[21] = [
                $(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            me.value ? (n(), i(G, { key: 0 }, [
              D.value.length > 0 ? (n(), L(ds, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${D.value.length} workflow${D.value.length === 1 ? "" : "s"} can't run`,
                description: pe.value,
                items: D.value.map(Q)
              }, {
                actions: g(() => [
                  _(xe, {
                    variant: "primary",
                    size: "sm",
                    onClick: V[7] || (V[7] = (j) => M.$emit("view-workflows"))
                  }, {
                    default: g(() => [...V[22] || (V[22] = [
                      $(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "description", "items"])) : h("", !0),
              W.value.length > 0 ? (n(), L(ds, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${W.value.length} workflow${W.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: W.value.map((j) => `${j.name} — ${j.models_needing_path_sync_count} model path${j.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: g(() => [
                  _(xe, {
                    variant: "primary",
                    size: "sm",
                    onClick: V[8] || (V[8] = (j) => M.$emit("view-workflows"))
                  }, {
                    default: g(() => [...V[23] || (V[23] = [
                      $(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : h("", !0),
              e.status.missing_models_count > 0 && !Z.value ? (n(), L(ds, {
                key: 2,
                severity: "warning",
                icon: "⚠",
                title: `${e.status.missing_models_count} missing model${e.status.missing_models_count === 1 ? "" : "s"}`,
                description: "Some workflows reference models that are not found in the workspace index. This can happen after updating the model index."
              }, {
                actions: g(() => [
                  _(xe, {
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
                  _(xe, {
                    variant: "secondary",
                    size: "sm",
                    onClick: V[9] || (V[9] = (j) => M.$emit("view-workflows"))
                  }, {
                    default: g(() => [...V[24] || (V[24] = [
                      $(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : h("", !0),
              e.status.comparison.is_synced ? h("", !0) : (n(), L(ds, {
                key: 3,
                severity: "error",
                icon: "⚠",
                title: "Environment not synced",
                description: se.value,
                items: oe.value
              }, {
                actions: g(() => [
                  _(xe, {
                    variant: "secondary",
                    size: "sm",
                    onClick: u
                  }, {
                    default: g(() => [...V[25] || (V[25] = [
                      $(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  _(xe, {
                    variant: "primary",
                    size: "sm",
                    onClick: V[10] || (V[10] = (j) => M.$emit("view-nodes"))
                  }, {
                    default: g(() => [...V[26] || (V[26] = [
                      $(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["description", "items"])),
              e.status.has_legacy_manager ? (n(), L(ds, {
                key: 4,
                severity: "warning",
                icon: "⚠",
                title: "Legacy ComfyUI-Manager detected",
                description: "The old ComfyUI-Manager extension is installed alongside ComfyGit. For proper environment tracking, use ComfyGit's built-in Manager instead and remove the legacy extension."
              }, {
                actions: g(() => [
                  _(xe, {
                    variant: "primary",
                    size: "sm",
                    onClick: V[11] || (V[11] = (j) => M.$emit("view-nodes"))
                  }, {
                    default: g(() => [...V[27] || (V[27] = [
                      $(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })) : h("", !0)
            ], 64)) : N.value ? (n(), i("span", Vv, "No issues")) : (n(), L(us, {
              key: 2,
              icon: "✅",
              message: "Everything looks good! No issues detected."
            }))
          ])
        ]),
        _: 1
      }),
      _(Dv, {
        show: l.value,
        status: e.status,
        "is-repairing": p.value,
        onClose: V[12] || (V[12] = (j) => l.value = !1),
        onNavigateWorkflows: c,
        onNavigateNodes: d,
        onRepair: w
      }, null, 8, ["show", "status", "is-repairing"])
    ], 64));
  }
}), Bv = /* @__PURE__ */ Ie(Fv, [["__scopeId", "data-v-df52ba90"]]), kR = fo({
  hasWorkspace: !1,
  hasEnvironments: !1,
  isManaged: !1,
  hasLegacyManager: !1
});
const bR = [
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
], $R = {
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
}, Wv = [
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
], CR = [
  ...Wv,
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
class Xr extends Error {
  constructor(o, a, l, r) {
    super(o);
    kn(this, "status");
    kn(this, "data");
    kn(this, "endpoint");
    this.name = "ComfyGitApiError", this.status = a, this.data = l, this.endpoint = r;
  }
}
function Gv() {
  return typeof crypto < "u" && crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const s = Math.random() * 16 | 0;
    return (e === "x" ? s : s & 3 | 8).toString(16);
  });
}
function dt() {
  const e = b(!1), s = b(null);
  async function o(Y, $e) {
    var Lt;
    if (!((Lt = window.app) != null && Lt.api))
      throw new Error("ComfyUI API not available");
    const Fe = await window.app.api.fetchApi(Y, $e), ct = await Fe.text();
    if (!Fe.ok) {
      let Gt = {};
      if (ct)
        try {
          const os = JSON.parse(ct);
          os && typeof os == "object" && (Gt = os);
        } catch {
          Gt = { error: ct };
        }
      const gs = Gt.error || Gt.message || Gt.detail || Fe.statusText || `Request failed: ${Fe.status}`;
      throw new Xr(String(gs), Fe.status, Gt, Y);
    }
    if (ct)
      return JSON.parse(ct);
  }
  async function a(Y) {
    return o(`/v2/comfygit/cloud/auth/config?cloud_url=${encodeURIComponent(Y)}`);
  }
  async function l(Y, $e, Fe) {
    return o("/v2/comfygit/cloud/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cloud_url: Y, email: $e, password: Fe })
    });
  }
  async function r(Y, $e, Fe) {
    return o("/v2/comfygit/cloud/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cloud_url: Y, email: $e, password: Fe })
    });
  }
  async function u(Y, $e) {
    return o(`/v2/comfygit/cloud/auth/me?cloud_url=${encodeURIComponent(Y)}`, {
      headers: { Authorization: `Bearer ${$e}` }
    });
  }
  async function c(Y, $e) {
    return o("/v2/comfygit/cloud/auth/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cloud_url: Y, refresh_token: $e || null })
    });
  }
  async function d(Y, $e) {
    return o(`/v2/comfygit/cloud/environments?cloud_url=${encodeURIComponent(Y)}`, {
      headers: { Authorization: `Bearer ${$e}` }
    });
  }
  async function v(Y, $e, Fe) {
    return o(
      `/v2/comfygit/cloud/environments/${encodeURIComponent($e)}/revisions?cloud_url=${encodeURIComponent(Y)}`,
      {
        headers: { Authorization: `Bearer ${Fe}` }
      }
    );
  }
  async function f(Y, $e, Fe, ct) {
    return o("/v2/comfygit/cloud/publish", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${$e}`
      },
      body: JSON.stringify({
        cloud_url: Y,
        source_message: Fe || null,
        cloud_environment_id: ct || null
      })
    });
  }
  async function p(Y = !1) {
    return o(Y ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function w(Y, $e = !1) {
    return o("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: Y, allow_issues: $e })
    });
  }
  async function y(Y = 10, $e = 0) {
    return o(`/v2/comfygit/log?limit=${Y}&offset=${$e}`);
  }
  async function k(Y, $e = 50) {
    return o(`/v2/comfygit/log?branch=${encodeURIComponent(Y)}&limit=${$e}`);
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
  async function E(Y) {
    return o(`/v2/comfygit/environment_export/${encodeURIComponent(Y)}/validate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({})
    });
  }
  async function T(Y, $e) {
    return o(`/v2/comfygit/environment_export/${encodeURIComponent(Y)}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: $e, force: !0 })
    });
  }
  async function N() {
    return o("/v2/comfygit/branches");
  }
  async function A(Y) {
    return o(`/v2/comfygit/commit/${Y}`);
  }
  async function H(Y, $e = !1) {
    return o("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: Y, force: $e })
    });
  }
  async function D(Y, $e = "HEAD") {
    return o("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: Y, start_point: $e })
    });
  }
  async function W(Y, $e = !1) {
    return o("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: Y, force: $e })
    });
  }
  async function Z(Y, $e = !1) {
    return o(`/v2/comfygit/branch/${encodeURIComponent(Y)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: $e })
    });
  }
  async function ee() {
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
  async function re() {
    return (await ee()).environments;
  }
  async function he(Y) {
    try {
      return await o(`/v2/comfygit/environments/${encodeURIComponent(Y)}`);
    } catch {
      return null;
    }
  }
  async function ne(Y, $e) {
    const Fe = { target_env: Y };
    return $e && (Fe.workspace_path = $e), o("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Fe)
    });
  }
  async function Q() {
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
      const $e = await p(Y), Fe = [];
      return $e.workflows.new.forEach((ct) => {
        Fe.push({
          name: ct,
          status: "new",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: ct
        });
      }), $e.workflows.modified.forEach((ct) => {
        Fe.push({
          name: ct,
          status: "modified",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: ct
        });
      }), $e.workflows.synced.forEach((ct) => {
        Fe.push({
          name: ct,
          status: "synced",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: ct
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
  async function oe(Y, $e) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(Y)}/contract`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify($e)
    });
  }
  async function M(Y) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(Y)}/contract`, {
      method: "DELETE"
    });
  }
  async function V(Y) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(Y)}/resolve`, {
      method: "POST"
    });
  }
  async function j(Y, $e, Fe) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(Y)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: $e, install_models: Fe })
    });
  }
  async function P(Y, $e, Fe) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(Y)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: $e, importance: Fe })
    });
  }
  async function R() {
    try {
      return o("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function ue() {
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
  async function F(Y, $e) {
    return o(`/v2/workspace/models/${Y}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: $e })
    });
  }
  async function B(Y, $e) {
    return o(`/v2/workspace/models/${Y}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: $e })
    });
  }
  async function q(Y) {
    return o(`/v2/workspace/models/${Y}`, {
      method: "DELETE"
    });
  }
  async function we(Y) {
    return o("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Y)
    });
  }
  async function be() {
    return o("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function Ce() {
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
    const $e = new URLSearchParams({ url: Y });
    return o(`/v2/workspace/huggingface/repo-info?${$e}`);
  }
  async function Oe() {
    return o("/v2/workspace/models/subdirectories");
  }
  async function Te(Y, $e = 10) {
    const Fe = new URLSearchParams({ query: Y, limit: String($e) });
    return o(`/v2/workspace/huggingface/search?${Fe}`);
  }
  async function We(Y) {
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
  async function Me(Y, $e) {
    const Fe = $e ? `/v2/comfygit/config?workspace_path=${encodeURIComponent($e)}` : "/v2/comfygit/config";
    return o(Fe, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Y)
    });
  }
  async function _e(Y, $e) {
    try {
      const Fe = new URLSearchParams();
      return Y && Fe.append("level", Y), $e && Fe.append("lines", $e.toString()), o(`/v2/comfygit/debug/logs?${Fe}`);
    } catch {
      return [];
    }
  }
  async function te(Y, $e) {
    try {
      const Fe = new URLSearchParams();
      return Y && Fe.append("level", Y), $e && Fe.append("lines", $e.toString()), o(`/v2/workspace/debug/logs?${Fe}`);
    } catch {
      return [];
    }
  }
  async function Be() {
    return o("/v2/comfygit/debug/logs/path");
  }
  async function z() {
    return o("/v2/comfygit/debug/manifest");
  }
  async function X() {
    return o("/v2/workspace/debug/logs/path");
  }
  async function J(Y, $e) {
    try {
      const Fe = new URLSearchParams();
      return Y && Fe.append("level", Y), $e && Fe.append("lines", $e.toString()), o(`/v2/workspace/debug/orchestrator-logs?${Fe}`);
    } catch {
      return [];
    }
  }
  async function ge() {
    return o("/v2/workspace/debug/orchestrator-logs/path");
  }
  async function I(Y) {
    return o("/v2/workspace/open-file", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: Y })
    });
  }
  async function ie() {
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
  async function ce(Y) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(Y)}/track-dev`, {
      method: "POST"
    });
  }
  async function Ae(Y) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(Y)}/install`, {
      method: "POST"
    });
  }
  async function ze(Y, $e) {
    var gs, os, Xe, Ta;
    const Fe = Gv(), ct = ((os = (gs = window.app) == null ? void 0 : gs.api) == null ? void 0 : os.clientId) ?? ((Ta = (Xe = window.app) == null ? void 0 : Xe.api) == null ? void 0 : Ta.initialClientId) ?? "comfygit-panel", Lt = {
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
        client_id: ct
      })
    }), console.log("[ComfyGit] Task queued with ui_id:", Fe, "for package:", Y.id), $e != null && $e.beforeQueueStart && await $e.beforeQueueStart(Fe), await o("/v2/manager/queue/start", {
      method: "POST"
    }), { ui_id: Fe };
  }
  async function Ee(Y) {
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
  async function at(Y, $e) {
    return o("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: Y, url: $e })
    });
  }
  async function rt(Y) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(Y)}`, {
      method: "DELETE"
    });
  }
  async function mt(Y, $e, Fe) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(Y)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: $e, push_url: Fe })
    });
  }
  async function It(Y, $e) {
    const Fe = {};
    return $e && (Fe["X-Git-Auth-Token"] = $e), o(`/v2/comfygit/remotes/${encodeURIComponent(Y)}/fetch`, {
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
  async function ut(Y = "skip", $e = !0) {
    return o("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: Y,
        remove_extra_nodes: $e
      })
    });
  }
  async function ve(Y, $e) {
    const Fe = $e ? `/v2/comfygit/remotes/${encodeURIComponent(Y)}/pull-preview?branch=${encodeURIComponent($e)}` : `/v2/comfygit/remotes/${encodeURIComponent(Y)}/pull-preview`;
    return o(Fe);
  }
  async function K(Y, $e = {}) {
    const Fe = { "Content-Type": "application/json" };
    return $e.authToken && (Fe["X-Git-Auth-Token"] = $e.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(Y)}/pull`, {
      method: "POST",
      headers: Fe,
      body: JSON.stringify({
        model_strategy: $e.modelStrategy || "skip",
        force: $e.force || !1,
        resolutions: $e.resolutions
      })
    });
  }
  async function ye(Y, $e) {
    const Fe = $e ? `/v2/comfygit/remotes/${encodeURIComponent(Y)}/push-preview?branch=${encodeURIComponent($e)}` : `/v2/comfygit/remotes/${encodeURIComponent(Y)}/push-preview`;
    return o(Fe);
  }
  async function He(Y, $e = {}) {
    const Fe = { "Content-Type": "application/json" };
    return $e.authToken && (Fe["X-Git-Auth-Token"] = $e.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(Y)}/push`, {
      method: "POST",
      headers: Fe,
      body: JSON.stringify({ force: $e.force || !1 })
    });
  }
  async function vt(Y, $e) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(Y)}/validate-merge`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resolutions: $e })
    });
  }
  async function Nt(Y) {
    const $e = {
      success: 0,
      failed: []
    };
    for (const Fe of Y)
      try {
        await V(Fe), $e.success++;
      } catch (ct) {
        $e.failed.push({
          name: Fe,
          error: ct instanceof Error ? ct.message : "Unknown error"
        });
      }
    return $e;
  }
  async function tt(Y) {
    var ct;
    const $e = new FormData();
    if ($e.append("file", Y), !((ct = window.app) != null && ct.api))
      throw new Error("ComfyUI API not available");
    const Fe = await window.app.api.fetchApi("/v2/workspace/import/preview", {
      method: "POST",
      body: $e
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
  async function Is(Y, $e, Fe, ct) {
    var gs;
    const Lt = new FormData();
    if (Lt.append("file", Y), Lt.append("name", $e), Lt.append("model_strategy", Fe), Lt.append("torch_backend", ct), !((gs = window.app) != null && gs.api))
      throw new Error("ComfyUI API not available");
    const Gt = await window.app.api.fetchApi("/v2/workspace/import", {
      method: "POST",
      body: Lt
    });
    if (!Gt.ok) {
      const os = await Gt.json().catch(() => ({}));
      throw new Error(os.message || os.error || `Import failed: ${Gt.status}`);
    }
    return Gt.json();
  }
  async function Jt() {
    return o("/v2/workspace/import/status");
  }
  async function da(Y) {
    return o("/v2/workspace/import/preview/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ git_url: Y })
    });
  }
  async function vo(Y, $e, Fe, ct) {
    return o("/v2/workspace/import/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        git_url: Y,
        name: $e,
        model_strategy: Fe,
        torch_backend: ct
      })
    });
  }
  async function po() {
    return o("/v2/setup/status");
  }
  async function ma() {
    return o("/v2/comfygit/update-check");
  }
  async function Es() {
    return o("/v2/comfygit/update", { method: "POST" });
  }
  async function fa(Y) {
    return o("/v2/setup/initialize_workspace", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Y)
    });
  }
  async function Do() {
    return o("/v2/setup/initialize_status");
  }
  async function va(Y) {
    return o("/v2/setup/validate_path", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Y)
    });
  }
  async function pa() {
    return o("/v2/comfygit/deploy/summary");
  }
  async function ga() {
    return o("/v2/comfygit/deploy/runpod/data-centers");
  }
  async function ha(Y, $e) {
    return o("/v2/comfygit/deploy/runpod/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ api_key: Y, save_key: $e })
    });
  }
  async function hn() {
    return o("/v2/comfygit/deploy/runpod/volumes");
  }
  async function ya(Y) {
    const $e = Y ? `/v2/comfygit/deploy/runpod/gpu-types?data_center_id=${encodeURIComponent(Y)}` : "/v2/comfygit/deploy/runpod/gpu-types";
    return o($e);
  }
  async function wa(Y) {
    return o("/v2/comfygit/deploy/runpod", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Y)
    });
  }
  async function _a() {
    return o("/v2/comfygit/deploy/runpod/pods");
  }
  async function ka(Y) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(Y)}`, {
      method: "DELETE"
    });
  }
  async function ba(Y) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(Y)}/stop`, {
      method: "POST"
    });
  }
  async function $a(Y) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(Y)}/start`, {
      method: "POST"
    });
  }
  async function Ca(Y) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(Y)}/status`);
  }
  async function xa(Y) {
    return o("/v2/comfygit/deploy/package", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: Y })
    });
  }
  async function Sa(Y = !1) {
    return o(Y ? "/v2/comfygit/deploy/runpod/key?verify=true" : "/v2/comfygit/deploy/runpod/key");
  }
  async function Ia() {
    return o("/v2/comfygit/deploy/runpod/key", {
      method: "DELETE"
    });
  }
  async function Ea() {
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
  async function xt(Y, $e) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(Y)}/instances`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify($e)
    });
  }
  async function cs(Y, $e) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(Y)}/instances/${encodeURIComponent($e)}/start`, {
      method: "POST"
    });
  }
  async function Zs(Y, $e) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(Y)}/instances/${encodeURIComponent($e)}/stop`, {
      method: "POST"
    });
  }
  async function wn(Y, $e) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(Y)}/instances/${encodeURIComponent($e)}`, {
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
    validateEnvironmentExport: E,
    exportEnvironmentWithForce: T,
    // Git Operations
    getBranches: N,
    getCommitDetail: A,
    checkout: H,
    createBranch: D,
    switchBranch: W,
    deleteBranch: Z,
    // Environment Management
    listEnvironments: ee,
    getEnvironments: re,
    getEnvironmentDetails: he,
    switchEnvironment: ne,
    getSwitchProgress: Q,
    createEnvironment: de,
    getCreateProgress: Ne,
    getComfyUIReleases: le,
    deleteEnvironment: pe,
    // Workflow Management
    getWorkflows: me,
    getWorkflowDetails: Ue,
    getWorkflowContract: se,
    saveWorkflowContract: oe,
    deleteWorkflowContract: M,
    resolveWorkflow: V,
    installWorkflowDeps: j,
    setModelImportance: P,
    // Model Management
    getEnvironmentModels: R,
    getWorkspaceModels: ue,
    getModelDetails: Ve,
    openFileLocation: je,
    addModelSource: F,
    removeModelSource: B,
    deleteModel: q,
    downloadModel: we,
    scanWorkspaceModels: be,
    getModelsDirectory: Ce,
    setModelsDirectory: Pe,
    getHuggingFaceRepoInfo: Le,
    getModelsSubdirectories: Oe,
    searchHuggingFaceRepos: Te,
    // Settings
    getConfig: We,
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
    getEnvironmentLogs: _e,
    getEnvironmentManifest: z,
    getWorkspaceLogs: te,
    getEnvironmentLogPath: Be,
    getWorkspaceLogPath: X,
    getOrchestratorLogs: J,
    getOrchestratorLogPath: ge,
    openFile: I,
    // Node Management
    getNodes: ie,
    trackNodeAsDev: ce,
    installNode: Ae,
    queueNodeInstall: ze,
    updateNode: Ee,
    uninstallNode: qe,
    // Git Remotes
    getRemotes: Qe,
    addRemote: at,
    removeRemote: rt,
    updateRemoteUrl: mt,
    fetchRemote: It,
    getRemoteSyncStatus: Wt,
    // Push/Pull
    getPullPreview: ve,
    pullFromRemote: K,
    getPushPreview: ye,
    pushToRemote: He,
    validateMerge: vt,
    // Environment Sync
    syncEnvironmentManually: ut,
    // Workflow Repair
    repairWorkflowModels: Nt,
    // Import Operations
    previewTarballImport: tt,
    previewGitImport: da,
    validateEnvironmentName: Pt,
    executeImport: Is,
    executeGitImport: vo,
    getImportProgress: Jt,
    // First-Time Setup
    getSetupStatus: po,
    // Manager Update Notice
    getUpdateCheck: ma,
    updateManager: Es,
    initializeWorkspace: fa,
    getInitializeProgress: Do,
    validatePath: va,
    // Deploy Operations
    getDeploySummary: pa,
    getDataCenters: ga,
    testRunPodConnection: ha,
    getNetworkVolumes: hn,
    getRunPodGpuTypes: ya,
    deployToRunPod: wa,
    getRunPodPods: _a,
    terminateRunPodPod: ka,
    stopRunPodPod: ba,
    startRunPodPod: $a,
    getDeploymentStatus: Ca,
    exportDeployPackage: xa,
    getStoredRunPodKey: Sa,
    clearRunPodKey: Ia,
    // Custom Worker Operations
    getCustomWorkers: Ea,
    addCustomWorker: yn,
    removeCustomWorker: fe,
    testWorkerConnection: ae,
    scanForWorkers: Ge,
    getWorkerSystemInfo: Ke,
    getWorkerInstances: ht,
    deployToWorker: xt,
    startWorkerInstance: cs,
    stopWorkerInstance: Zs,
    terminateWorkerInstance: wn,
    // Git Authentication
    testGitAuth: _n
  };
}
async function In(e, s) {
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
function jv() {
  async function e() {
    try {
      return await In("/v2/comfygit/orchestrator/health");
    } catch {
      return null;
    }
  }
  async function s() {
    try {
      return await In("/v2/comfygit/orchestrator/status");
    } catch {
      return null;
    }
  }
  async function o() {
    await In("/v2/comfygit/orchestrator/restart", { method: "POST" });
  }
  async function a() {
    await In("/v2/comfygit/orchestrator/kill", { method: "POST" });
  }
  return {
    checkHealth: e,
    getStatus: s,
    restart: o,
    kill: a
  };
}
const Hv = { class: "base-modal-header" }, qv = {
  key: 0,
  class: "base-modal-title"
}, Kv = { class: "base-modal-body" }, Jv = {
  key: 0,
  class: "base-modal-loading"
}, Yv = {
  key: 1,
  class: "base-modal-error"
}, Qv = {
  key: 0,
  class: "base-modal-footer"
}, Xv = /* @__PURE__ */ Se({
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
          t("div", Hv, [
            et(u.$slots, "header", {}, () => [
              e.title ? (n(), i("h3", qv, m(e.title), 1)) : h("", !0)
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
          t("div", Kv, [
            e.loading ? (n(), i("div", Jv, "Loading...")) : e.error ? (n(), i("div", Yv, m(e.error), 1)) : et(u.$slots, "body", { key: 2 }, void 0)
          ]),
          u.$slots.footer ? (n(), i("div", Qv, [
            et(u.$slots, "footer", {}, void 0)
          ])) : h("", !0)
        ], 2)
      ])
    ]));
  }
}), Ct = /* @__PURE__ */ Ie(Xv, [["__scopeId", "data-v-8dab1081"]]), Zv = ["type", "disabled"], ep = {
  key: 0,
  class: "spinner"
}, tp = /* @__PURE__ */ Se({
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
      e.loading ? (n(), i("span", ep)) : h("", !0),
      et(s.$slots, "default", {}, void 0)
    ], 10, Zv));
  }
}), Re = /* @__PURE__ */ Ie(tp, [["__scopeId", "data-v-f3452606"]]), sp = {
  key: 0,
  class: "base-title-count"
}, op = /* @__PURE__ */ Se({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(e) {
    return (s, o) => (n(), L(Cl(`h${e.level}`), {
      class: De(["base-title", e.variant])
    }, {
      default: g(() => [
        et(s.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (n(), i("span", sp, "(" + m(e.count) + ")", 1)) : h("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Os = /* @__PURE__ */ Ie(op, [["__scopeId", "data-v-5a01561d"]]), np = ["value", "disabled"], ap = {
  key: 0,
  value: "",
  disabled: ""
}, lp = ["value"], ip = {
  key: 0,
  class: "base-select-error"
}, rp = /* @__PURE__ */ Se({
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
        e.placeholder ? (n(), i("option", ap, m(e.placeholder), 1)) : h("", !0),
        (n(!0), i(G, null, ke(e.options, (r) => (n(), i("option", {
          key: s(r),
          value: s(r)
        }, m(o(r)), 9, lp))), 128))
      ], 42, np),
      e.error ? (n(), i("span", ip, m(e.error), 1)) : h("", !0)
    ], 2));
  }
}), Ks = /* @__PURE__ */ Ie(rp, [["__scopeId", "data-v-4996bfe0"]]), up = { class: "popover-header" }, cp = { class: "popover-title" }, dp = { class: "popover-content" }, mp = {
  key: 0,
  class: "popover-actions"
}, fp = /* @__PURE__ */ Se({
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
          t("div", up, [
            t("h4", cp, m(e.title), 1),
            t("button", {
              class: "popover-close",
              onClick: o[0] || (o[0] = (a) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", dp, [
            et(s.$slots, "content", {}, void 0)
          ]),
          s.$slots.actions ? (n(), i("div", mp, [
            et(s.$slots, "actions", {}, void 0)
          ])) : h("", !0)
        ], 4)
      ])) : h("", !0)
    ]));
  }
}), Qt = /* @__PURE__ */ Ie(fp, [["__scopeId", "data-v-42815ace"]]), vp = { class: "detail-section" }, pp = {
  key: 0,
  class: "empty-message"
}, gp = { class: "model-header" }, hp = { class: "model-name" }, yp = { class: "model-details" }, wp = { class: "model-row" }, _p = { class: "model-row" }, kp = { class: "label" }, bp = {
  key: 0,
  class: "model-row model-row-nodes"
}, $p = { class: "node-list" }, Cp = ["onClick"], xp = {
  key: 1,
  class: "model-row"
}, Sp = { class: "value" }, Ip = {
  key: 2,
  class: "model-row"
}, Ep = { class: "value error" }, Tp = {
  key: 0,
  class: "model-actions"
}, Mp = { class: "detail-section" }, Pp = {
  key: 0,
  class: "empty-message"
}, Rp = { class: "node-content" }, Np = { class: "node-main" }, Lp = { class: "node-name" }, Dp = { class: "node-badge" }, Op = {
  key: 0,
  class: "node-version"
}, Up = ["onClick"], Ap = {
  key: 2,
  class: "node-install-queued"
}, zp = {
  key: 0,
  class: "node-guidance"
}, Vp = /* @__PURE__ */ Se({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(e, { emit: s }) {
    const o = e, a = s, { getWorkflowDetails: l, setModelImportance: r, openFileLocation: u, queueNodeInstall: c } = dt(), d = b(null), v = b(!1), f = b(null), p = b(!1), w = b({}), y = b(!1), k = b(/* @__PURE__ */ new Set()), x = b(/* @__PURE__ */ new Set()), C = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function S(ne) {
      switch (ne) {
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
    function U(ne) {
      switch (ne) {
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
    function E(ne) {
      switch (ne) {
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
    function T(ne) {
      switch (ne) {
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
    function N(ne) {
      switch (ne) {
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
    function A(ne) {
      if (!ne.loaded_by || ne.loaded_by.length === 0) return [];
      const Q = ne.hash || ne.filename;
      return k.value.has(Q) ? ne.loaded_by : ne.loaded_by.slice(0, 3);
    }
    function H(ne) {
      return k.value.has(ne);
    }
    function D(ne) {
      k.value.has(ne) ? k.value.delete(ne) : k.value.add(ne), k.value = new Set(k.value);
    }
    async function W() {
      v.value = !0, f.value = null;
      try {
        d.value = await l(o.workflowName);
      } catch (ne) {
        f.value = ne instanceof Error ? ne.message : "Failed to load workflow details";
      } finally {
        v.value = !1;
      }
    }
    function Z(ne, Q) {
      w.value[ne] = Q, p.value = !0;
    }
    async function ee(ne) {
      try {
        await u(ne);
      } catch (Q) {
        f.value = Q instanceof Error ? Q.message : "Failed to open file location";
      }
    }
    async function re(ne) {
      if (ne.package_id)
        try {
          const Q = ne.latest_version || "latest";
          await c({
            id: ne.package_id,
            version: Q,
            selected_version: Q,
            mode: "remote",
            channel: "default"
          }), x.value.add(ne.package_id);
        } catch (Q) {
          f.value = Q instanceof Error ? Q.message : "Failed to queue node install";
        }
    }
    async function he() {
      if (!p.value) {
        a("close");
        return;
      }
      v.value = !0, f.value = null;
      try {
        for (const [ne, Q] of Object.entries(w.value))
          await r(o.workflowName, ne, Q);
        a("refresh"), a("close");
      } catch (ne) {
        f.value = ne instanceof Error ? ne.message : "Failed to save changes";
      } finally {
        v.value = !1;
      }
    }
    return ot(W), (ne, Q) => (n(), i(G, null, [
      _(Ct, {
        title: `WORKFLOW DETAILS: ${e.workflowName}`,
        size: "lg",
        loading: v.value,
        error: f.value || void 0,
        onClose: Q[4] || (Q[4] = (de) => a("close"))
      }, {
        body: g(() => [
          d.value ? (n(), i(G, { key: 0 }, [
            t("section", vp, [
              _(Os, { variant: "section" }, {
                default: g(() => [
                  $("MODELS USED (" + m(d.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              d.value.models.length === 0 ? (n(), i("div", pp, " No models used in this workflow ")) : h("", !0),
              (n(!0), i(G, null, ke(d.value.models, (de) => {
                var Ne;
                return n(), i("div", {
                  key: de.hash || de.filename,
                  class: "model-card"
                }, [
                  t("div", gp, [
                    Q[6] || (Q[6] = t("span", { class: "model-icon" }, "📦", -1)),
                    t("span", hp, m(de.filename), 1)
                  ]),
                  t("div", yp, [
                    t("div", wp, [
                      Q[7] || (Q[7] = t("span", { class: "label" }, "Status:", -1)),
                      t("span", {
                        class: De(["value", S(de.status)])
                      }, m(U(de.status)), 3)
                    ]),
                    t("div", _p, [
                      t("span", kp, [
                        Q[8] || (Q[8] = $(" Importance: ", -1)),
                        _(Qr, {
                          size: 14,
                          title: "About importance levels",
                          onClick: Q[0] || (Q[0] = (le) => y.value = !0)
                        })
                      ]),
                      _(Ks, {
                        "model-value": w.value[de.filename] || de.importance,
                        options: C,
                        "onUpdate:modelValue": (le) => Z(de.filename, le)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    de.loaded_by && de.loaded_by.length > 0 ? (n(), i("div", bp, [
                      Q[9] || (Q[9] = t("span", { class: "label" }, "Loaded by:", -1)),
                      t("div", $p, [
                        (n(!0), i(G, null, ke(A(de), (le, pe) => (n(), i("div", {
                          key: `${le.node_id}-${pe}`,
                          class: "node-reference"
                        }, m(le.node_type) + " (Node #" + m(le.node_id) + ") ", 1))), 128)),
                        de.loaded_by.length > 3 ? (n(), i("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (le) => D(de.hash || de.filename)
                        }, m(H(de.hash || de.filename) ? "▼ Show less" : `▶ View all (${de.loaded_by.length})`), 9, Cp)) : h("", !0)
                      ])
                    ])) : h("", !0),
                    de.size_mb ? (n(), i("div", xp, [
                      Q[10] || (Q[10] = t("span", { class: "label" }, "Size:", -1)),
                      t("span", Sp, m(de.size_mb) + " MB", 1)
                    ])) : h("", !0),
                    de.has_category_mismatch ? (n(), i("div", Ip, [
                      Q[13] || (Q[13] = t("span", { class: "label" }, "Location issue:", -1)),
                      t("span", Ep, [
                        Q[11] || (Q[11] = $(" In ", -1)),
                        t("code", null, m(de.actual_category) + "/", 1),
                        Q[12] || (Q[12] = $(" but loader needs ", -1)),
                        t("code", null, m((Ne = de.expected_categories) == null ? void 0 : Ne[0]) + "/", 1)
                      ])
                    ])) : h("", !0)
                  ]),
                  de.status !== "available" ? (n(), i("div", Tp, [
                    de.status === "downloadable" ? (n(), L(Re, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: Q[1] || (Q[1] = (le) => a("resolve"))
                    }, {
                      default: g(() => [...Q[14] || (Q[14] = [
                        $(" Download ", -1)
                      ])]),
                      _: 1
                    })) : de.status === "category_mismatch" && de.file_path ? (n(), L(Re, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (le) => ee(de.file_path)
                    }, {
                      default: g(() => [...Q[15] || (Q[15] = [
                        $(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : de.status !== "path_mismatch" ? (n(), L(Re, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: Q[2] || (Q[2] = (le) => a("resolve"))
                    }, {
                      default: g(() => [...Q[16] || (Q[16] = [
                        $(" Resolve ", -1)
                      ])]),
                      _: 1
                    })) : h("", !0)
                  ])) : h("", !0)
                ]);
              }), 128))
            ]),
            t("section", Mp, [
              _(Os, { variant: "section" }, {
                default: g(() => [
                  $("NODES USED (" + m(d.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              d.value.nodes.length === 0 ? (n(), i("div", Pp, " No custom nodes used in this workflow ")) : h("", !0),
              (n(!0), i(G, null, ke(d.value.nodes, (de, Ne) => (n(), i("div", {
                key: `${de.name}-${de.status}-${Ne}`,
                class: "node-item"
              }, [
                t("span", {
                  class: De(["node-status", E(de.status)])
                }, m(T(de.status)), 3),
                t("div", Rp, [
                  t("div", Np, [
                    t("span", Lp, m(de.name), 1),
                    t("span", Dp, m(N(de.status)), 1),
                    de.version ? (n(), i("span", Op, "v" + m(de.version), 1)) : h("", !0),
                    de.status === "uninstallable" && de.package_id && !x.value.has(de.package_id) ? (n(), i("button", {
                      key: 1,
                      class: "node-install-link",
                      onClick: (le) => re(de)
                    }, " Install ", 8, Up)) : de.status === "uninstallable" && de.package_id && x.value.has(de.package_id) ? (n(), i("span", Ap, " Queued ")) : h("", !0)
                  ]),
                  de.guidance ? (n(), i("div", zp, m(de.guidance), 1)) : h("", !0)
                ])
              ]))), 128))
            ])
          ], 64)) : h("", !0)
        ]),
        footer: g(() => [
          _(Re, {
            variant: "secondary",
            onClick: Q[3] || (Q[3] = (de) => a("close"))
          }, {
            default: g(() => [...Q[17] || (Q[17] = [
              $(" Close ", -1)
            ])]),
            _: 1
          }),
          p.value ? (n(), L(Re, {
            key: 0,
            variant: "primary",
            onClick: he
          }, {
            default: g(() => [...Q[18] || (Q[18] = [
              $(" Save Changes ", -1)
            ])]),
            _: 1
          })) : h("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      _(Qt, {
        show: y.value,
        title: "Model Importance Levels",
        onClose: Q[5] || (Q[5] = (de) => y.value = !1)
      }, {
        content: g(() => [...Q[19] || (Q[19] = [
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
}), Fp = /* @__PURE__ */ Ie(Vp, [["__scopeId", "data-v-543076d9"]]), Bp = ["type", "value", "placeholder", "disabled"], Wp = {
  key: 0,
  class: "base-input-error"
}, Gp = /* @__PURE__ */ Se({
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
          o[1] || (o[1] = ts((a) => s.$emit("enter"), ["enter"])),
          o[2] || (o[2] = ts((a) => s.$emit("escape"), ["escape"]))
        ]
      }, null, 42, Bp),
      e.error ? (n(), i("span", Wp, m(e.error), 1)) : h("", !0)
    ], 2));
  }
}), it = /* @__PURE__ */ Ie(Gp, [["__scopeId", "data-v-9ba02cdc"]]), jp = { class: "base-textarea-wrapper" }, Hp = ["value", "rows", "placeholder", "disabled", "maxlength"], qp = {
  key: 0,
  class: "base-textarea-count"
}, Kp = /* @__PURE__ */ Se({
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
    return (r, u) => (n(), i("div", jp, [
      t("textarea", {
        value: e.modelValue,
        rows: e.rows,
        placeholder: e.placeholder,
        disabled: e.disabled,
        maxlength: e.maxLength,
        class: "base-textarea",
        onInput: u[0] || (u[0] = (c) => r.$emit("update:modelValue", c.target.value)),
        onKeydown: [
          u[1] || (u[1] = ts(st((c) => r.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          u[2] || (u[2] = ts(st((c) => r.$emit("ctrlEnter"), ["meta"]), ["enter"])),
          ts(l, ["enter"])
        ]
      }, null, 40, Hp),
      e.showCharCount && e.maxLength ? (n(), i("div", qp, m(e.modelValue.length) + " / " + m(e.maxLength), 1)) : h("", !0)
    ]));
  }
}), Js = /* @__PURE__ */ Ie(Kp, [["__scopeId", "data-v-c6d16c93"]]), Jp = ["for"], Yp = {
  key: 0,
  class: "base-form-field-required"
}, Qp = { class: "base-form-field-input" }, Xp = {
  key: 1,
  class: "base-form-field-error"
}, Zp = {
  key: 2,
  class: "base-form-field-hint"
}, eg = /* @__PURE__ */ Se({
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
        e.required ? (n(), i("span", Yp, "*")) : h("", !0)
      ], 8, Jp)) : h("", !0),
      t("div", Qp, [
        et(a.$slots, "default", {}, void 0)
      ]),
      e.error ? (n(), i("span", Xp, m(e.error), 1)) : e.hint ? (n(), i("span", Zp, m(e.hint), 1)) : h("", !0)
    ], 2));
  }
}), pt = /* @__PURE__ */ Ie(eg, [["__scopeId", "data-v-9a1cf296"]]), tg = { class: "contract-meta" }, sg = { class: "contract-summary" }, og = { class: "summary-pill" }, ng = { class: "summary-pill" }, ag = { class: "summary-pill" }, lg = { class: "contract-meta-grid" }, ig = { class: "contract-layout" }, rg = { class: "contract-column" }, ug = { class: "section-header" }, cg = {
  key: 0,
  class: "empty-message"
}, dg = ["onClick"], mg = { class: "item-card-title" }, fg = { class: "item-card-meta" }, vg = { class: "item-card-summary" }, pg = { key: 0 }, gg = { class: "contract-column" }, hg = { class: "section-header" }, yg = {
  key: 0,
  class: "empty-message"
}, wg = ["onClick"], _g = { class: "item-card-title" }, kg = { class: "item-card-meta" }, bg = { class: "item-card-summary" }, $g = { class: "contract-footer" }, Cg = { class: "contract-footer-left" }, xg = { class: "contract-footer-right" }, Sg = /* @__PURE__ */ Se({
  __name: "WorkflowContractModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "refresh"],
  setup(e, { emit: s }) {
    const o = e, a = s, { getWorkflowContract: l, saveWorkflowContract: r, deleteWorkflowContract: u } = dt(), c = b(!1), d = b(!1), v = b(!1), f = b(null), p = b(null), w = b(null), y = b(null), k = b(null), x = [
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
    }), E = O(() => {
      var oe;
      const se = ((oe = p.value) == null ? void 0 : oe.contract_summary.status) ?? "none";
      return se === "valid" ? "Valid Contract" : se === "incomplete" ? "Incomplete Contract" : "No Contract";
    });
    function T(se) {
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
    function A(se) {
      return se === "enum";
    }
    function H(se) {
      return se == null ? "" : String(se);
    }
    function D(se) {
      const oe = se.trim();
      if (!oe) return;
      const M = Number(oe);
      return Number.isFinite(M) ? M : void 0;
    }
    function W(se) {
      return (se || []).join(`
`);
    }
    function Z(se) {
      return se.split(/[\n,]/).map((oe) => oe.trim()).filter(Boolean);
    }
    function ee(se) {
      return se == null ? "" : String(se);
    }
    function re(se) {
      return typeof se == "string" ? se.length > 24 ? `${se.slice(0, 24)}...` : se : String(se);
    }
    function he(se) {
      if (!w.value) return;
      const oe = se.trim() || "default";
      w.value.default_contract = oe, w.value.contracts[oe] || (w.value.contracts[oe] = { inputs: [], outputs: [] });
    }
    function ne(se) {
      U.value.inputs.splice(se, 1), y.value === se ? y.value = null : y.value != null && y.value > se && (y.value -= 1);
    }
    function Q(se) {
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
        p.value = await l(o.workflowName), w.value = T(p.value.execution_contract);
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
          p.value = await r(o.workflowName, w.value), w.value = T(p.value.execution_contract), a("refresh");
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
    return ot(le), (se, oe) => (n(), L(Ct, {
      title: `WORKFLOW CONTRACT: ${e.workflowName}`,
      size: "xl",
      loading: c.value,
      error: f.value || void 0,
      "fixed-height": "",
      onClose: oe[5] || (oe[5] = (M) => a("close"))
    }, {
      body: g(() => [
        w.value ? (n(), i(G, { key: 0 }, [
          t("section", tg, [
            t("div", sg, [
              t("span", og, m(E.value), 1),
              t("span", ng, m(U.value.inputs.length) + " input" + m(U.value.inputs.length === 1 ? "" : "s"), 1),
              t("span", ag, m(U.value.outputs.length) + " output" + m(U.value.outputs.length === 1 ? "" : "s"), 1)
            ]),
            t("div", lg, [
              _(pt, { label: "Default Contract" }, {
                default: g(() => [
                  _(it, {
                    "model-value": w.value.default_contract,
                    "full-width": "",
                    "onUpdate:modelValue": he
                  }, null, 8, ["model-value"])
                ]),
                _: 1
              }),
              _(pt, { label: "Display Name" }, {
                default: g(() => [
                  _(it, {
                    modelValue: U.value.display_name,
                    "onUpdate:modelValue": oe[0] || (oe[0] = (M) => U.value.display_name = M),
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
                  "onUpdate:modelValue": oe[1] || (oe[1] = (M) => U.value.description = M),
                  rows: 2,
                  placeholder: "Optional description for this contract"
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            })
          ]),
          t("section", ig, [
            t("div", rg, [
              t("div", ug, [
                _(Os, { variant: "section" }, {
                  default: g(() => [...oe[6] || (oe[6] = [
                    $("INPUTS", -1)
                  ])]),
                  _: 1
                })
              ]),
              U.value.inputs.length ? h("", !0) : (n(), i("div", cg, " No inputs configured. ")),
              (n(!0), i(G, null, ke(U.value.inputs, (M, V) => (n(), i("div", {
                key: `input-${V}`,
                class: De(["item-card", { expanded: y.value === V }])
              }, [
                t("div", {
                  class: "item-card-header item-card-header-toggle",
                  onClick: (j) => de(V)
                }, [
                  t("div", null, [
                    t("div", mg, m(M.name || `Input ${V + 1}`), 1),
                    t("div", fg, [
                      $(" Node " + m(M.node_id || "?"), 1),
                      M.widget_idx !== void 0 ? (n(), i(G, { key: 0 }, [
                        $(" · Widget " + m(M.widget_idx), 1)
                      ], 64)) : h("", !0)
                    ]),
                    t("div", vg, [
                      t("span", null, m(M.type || "string"), 1),
                      t("span", null, m(M.required ? "required" : "optional"), 1),
                      M.default !== void 0 && M.default !== "" ? (n(), i("span", pg, "default " + m(re(M.default)), 1)) : h("", !0)
                    ])
                  ]),
                  _(Re, {
                    size: "sm",
                    variant: "ghost",
                    onClick: st((j) => ne(V), ["stop"])
                  }, {
                    default: g(() => [...oe[7] || (oe[7] = [
                      $(" Remove ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ], 8, dg),
                y.value === V ? (n(), i("div", {
                  key: 0,
                  class: "item-grid",
                  onClick: oe[2] || (oe[2] = st(() => {
                  }, ["stop"]))
                }, [
                  _(pt, { label: "Name" }, {
                    default: g(() => [
                      _(it, {
                        modelValue: M.name,
                        "onUpdate:modelValue": (j) => M.name = j,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  _(pt, { label: "Display Name" }, {
                    default: g(() => [
                      _(it, {
                        modelValue: M.display_name,
                        "onUpdate:modelValue": (j) => M.display_name = j,
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
                        "onUpdate:modelValue": (j) => M.type = j
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
                        "onUpdate:modelValue": (j) => M.required = j === "true"
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
                        "model-value": ee(M.default),
                        rows: 3,
                        placeholder: "Default string value",
                        "onUpdate:modelValue": (j) => M.default = j
                      }, null, 8, ["model-value", "onUpdate:modelValue"])) : (n(), L(it, {
                        key: 1,
                        modelValue: M.default,
                        "onUpdate:modelValue": (j) => M.default = j,
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
                        "model-value": H(M.min),
                        "full-width": "",
                        "onUpdate:modelValue": (j) => M.min = D(j)
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
                        "model-value": H(M.max),
                        "full-width": "",
                        "onUpdate:modelValue": (j) => M.max = D(j)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : h("", !0),
                  A(M.type) ? (n(), L(pt, {
                    key: 2,
                    class: "item-grid-full",
                    label: "Enum Values"
                  }, {
                    default: g(() => [
                      _(Js, {
                        "model-value": W(M.enum_values),
                        rows: 4,
                        placeholder: "One or more values, separated by commas or new lines",
                        "onUpdate:modelValue": (j) => M.enum_values = Z(j)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : h("", !0)
                ])) : h("", !0)
              ], 2))), 128))
            ]),
            t("div", gg, [
              t("div", hg, [
                _(Os, { variant: "section" }, {
                  default: g(() => [...oe[8] || (oe[8] = [
                    $("OUTPUTS", -1)
                  ])]),
                  _: 1
                })
              ]),
              U.value.outputs.length ? h("", !0) : (n(), i("div", yg, " No outputs configured. ")),
              (n(!0), i(G, null, ke(U.value.outputs, (M, V) => (n(), i("div", {
                key: `output-${V}`,
                class: De(["item-card", { expanded: k.value === V }])
              }, [
                t("div", {
                  class: "item-card-header item-card-header-toggle",
                  onClick: (j) => Ne(V)
                }, [
                  t("div", null, [
                    t("div", _g, m(M.name || `Output ${V + 1}`), 1),
                    t("div", kg, [
                      $(" Node " + m(M.node_id || "?"), 1),
                      M.selector ? (n(), i(G, { key: 0 }, [
                        $(" · " + m(M.selector), 1)
                      ], 64)) : h("", !0)
                    ]),
                    t("div", bg, [
                      t("span", null, m(M.type || "file"), 1)
                    ])
                  ]),
                  _(Re, {
                    size: "sm",
                    variant: "ghost",
                    onClick: st((j) => Q(V), ["stop"])
                  }, {
                    default: g(() => [...oe[9] || (oe[9] = [
                      $(" Remove ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ], 8, wg),
                k.value === V ? (n(), i("div", {
                  key: 0,
                  class: "item-grid",
                  onClick: oe[3] || (oe[3] = st(() => {
                  }, ["stop"]))
                }, [
                  _(pt, { label: "Name" }, {
                    default: g(() => [
                      _(it, {
                        modelValue: M.name,
                        "onUpdate:modelValue": (j) => M.name = j,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  _(pt, { label: "Display Name" }, {
                    default: g(() => [
                      _(it, {
                        modelValue: M.display_name,
                        "onUpdate:modelValue": (j) => M.display_name = j,
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
                        "onUpdate:modelValue": (j) => M.type = j
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
        t("div", $g, [
          t("div", Cg, [
            _(Re, {
              variant: "secondary",
              onClick: Ue
            }, {
              default: g(() => [...oe[10] || (oe[10] = [
                $(" Open I/O Mapping Mode ", -1)
              ])]),
              _: 1
            })
          ]),
          t("div", xg, [
            _(Re, {
              variant: "secondary",
              onClick: oe[4] || (oe[4] = (M) => a("close"))
            }, {
              default: g(() => [...oe[11] || (oe[11] = [
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
              default: g(() => [...oe[12] || (oe[12] = [
                $(" Delete Contract ", -1)
              ])]),
              _: 1
            }, 8, ["disabled", "loading"]),
            _(Re, {
              variant: "primary",
              loading: d.value,
              onClick: pe
            }, {
              default: g(() => [...oe[13] || (oe[13] = [
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
}), Ig = /* @__PURE__ */ Ie(Sg, [["__scopeId", "data-v-143775b1"]]), nt = fo({
  items: [],
  status: "idle"
});
let ks = null;
function Zr() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function Ba(e) {
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
    await Eg(e), e.status = "completed", e.progress = 100;
  } catch (s) {
    e.status = "failed", e.error = s instanceof Error ? s.message : "Download failed", e.retries++;
  } finally {
    nt.status = "idle", wo();
  }
}
async function Eg(e) {
  return new Promise((s, o) => {
    ks && (ks.close(), ks = null);
    const a = new URLSearchParams({
      url: e.url,
      target_path: e.targetPath,
      filename: e.filename,
      workflow: e.workflow
    }), l = new EventSource(`/v2/comfygit/models/download-stream?${a}`);
    ks = l;
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
            d = !0, p(), l.close(), ks = null, s();
            break;
          case "error":
            d = !0, p(), l.close(), ks = null, o(new Error(y.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, l.onerror = () => {
      p(), l.close(), ks = null, d || o(new Error("Connection lost"));
    };
  });
}
async function Tg() {
  try {
    const e = await fetch("/v2/comfygit/models/pending-downloads");
    if (!e.ok) return;
    const s = await e.json();
    if (!s.pending_downloads || s.pending_downloads.length === 0) return;
    for (const o of s.pending_downloads) {
      if (nt.items.some((l) => l.url === o.url && l.filename === o.filename))
        continue;
      const a = {
        id: Zr(),
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
        (T) => T.url === S.url && T.targetPath === S.targetPath && ["queued", "downloading", "paused", "completed"].includes(T.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${S.filename}`);
        continue;
      }
      const E = {
        id: Zr(),
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
      nt.items.push(E);
    }
    nt.status === "idle" && wo();
  }
  async function s(C) {
    const S = Ba(C);
    if (S) {
      if (S.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(S.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        ks && (ks.close(), ks = null), S.status = "failed", S.error = "Cancelled by user", nt.status = "idle", wo();
      } else if (S.status === "queued") {
        const U = nt.items.findIndex((E) => E.id === C);
        U >= 0 && nt.items.splice(U, 1);
      }
    }
  }
  function o(C) {
    const S = Ba(C);
    !S || S.status !== "failed" || (S.status = "queued", S.error = void 0, S.progress = 0, S.downloaded = 0, nt.status === "idle" && wo());
  }
  function a(C) {
    const S = Ba(C);
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
    queue: zn(nt),
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
    loadPendingDownloads: Tg
  };
}
function eu() {
  const e = b(null), s = b(null), o = b([]), a = b([]), l = b(!1), r = b(null);
  async function u(U, E) {
    var N;
    if (!((N = window.app) != null && N.api))
      throw new Error("ComfyUI API not available");
    const T = await window.app.api.fetchApi(U, E);
    if (!T.ok) {
      const A = await T.json().catch(() => ({})), H = A.error || A.message || `Request failed: ${T.status}`;
      throw new Error(H);
    }
    return T.json();
  }
  async function c(U) {
    l.value = !0, r.value = null;
    try {
      let E;
      return Ao() || (E = await u(
        `/v2/comfygit/workflow/${U}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), E.nodes.version_gated = E.nodes.version_gated || [], E.nodes.uninstallable = E.nodes.uninstallable || [], E.node_guidance = E.node_guidance || {}, E.package_aliases = E.package_aliases || {}, e.value = E, E;
    } catch (E) {
      const T = E instanceof Error ? E.message : "Unknown error occurred";
      throw r.value = T, E;
    } finally {
      l.value = !1;
    }
  }
  async function d(U, E, T, N) {
    l.value = !0, r.value = null;
    try {
      let A;
      if (!Ao()) {
        const H = Object.fromEntries(E), D = Object.fromEntries(T), W = N ? Array.from(N) : [];
        A = await u(
          `/v2/comfygit/workflow/${U}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: H,
              model_choices: D,
              skipped_packages: W
            })
          }
        );
      }
      return s.value = A, A;
    } catch (A) {
      const H = A instanceof Error ? A.message : "Unknown error occurred";
      throw r.value = H, A;
    } finally {
      l.value = !1;
    }
  }
  async function v(U, E = 10) {
    l.value = !0, r.value = null;
    try {
      let T;
      return Ao() || (T = await u(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: U, limit: E })
        }
      )), o.value = T.results, T.results;
    } catch (T) {
      const N = T instanceof Error ? T.message : "Unknown error occurred";
      throw r.value = N, T;
    } finally {
      l.value = !1;
    }
  }
  async function f(U, E = 10) {
    l.value = !0, r.value = null;
    try {
      let T;
      return Ao() || (T = await u(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: U, limit: E })
        }
      )), a.value = T.results, T.results;
    } catch (T) {
      const N = T instanceof Error ? T.message : "Unknown error occurred";
      throw r.value = N, T;
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
    } catch (E) {
      const T = E instanceof Error ? E.message : "Failed to install nodes";
      throw p.installError = T, E;
    }
  }
  async function k(U) {
    var T;
    const E = await u(
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
      const N = new Map(((T = E.failed) == null ? void 0 : T.map((A) => [A.node_id, A.error])) || []);
      for (let A = 0; A < p.nodesToInstall.length; A++) {
        const H = p.nodesToInstall[A], D = N.get(H);
        p.nodeInstallProgress.completedNodes.push({
          node_id: H,
          success: !D,
          error: D
        });
      }
    }
    return p.nodesInstalled = E.nodes_installed, p.needsRestart = E.nodes_installed.length > 0, E.failed && E.failed.length > 0 && (p.installError = `${E.failed.length} package(s) failed to install`), E;
  }
  async function x(U, E, T) {
    w(), p.phase = "resolving", r.value = null;
    const N = Object.fromEntries(E), A = Object.fromEntries(T);
    try {
      const H = await fetch(`/v2/comfygit/workflow/${U}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: N,
          model_choices: A
        })
      });
      if (!H.ok)
        throw new Error(`Request failed: ${H.status}`);
      if (!H.body)
        throw new Error("No response body");
      const D = H.body.getReader(), W = new TextDecoder();
      let Z = "";
      for (; ; ) {
        const { done: ee, value: re } = await D.read();
        if (ee) break;
        Z += W.decode(re, { stream: !0 });
        const he = Z.split(`

`);
        Z = he.pop() || "";
        for (const ne of he) {
          if (!ne.trim()) continue;
          const Q = ne.split(`
`);
          let de = "", Ne = "";
          for (const le of Q)
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
    } catch (H) {
      const D = H instanceof Error ? H.message : "Unknown error occurred";
      throw r.value = D, p.error = D, p.phase = "error", H;
    }
  }
  function C(U, E) {
    switch (U) {
      case "batch_start":
        p.phase = "downloading", p.totalFiles = E.total;
        break;
      case "file_start":
        p.currentFile = E.filename, p.currentFileIndex = E.index, p.bytesDownloaded = 0, p.bytesTotal = void 0;
        break;
      case "file_progress":
        p.bytesDownloaded = E.downloaded, p.bytesTotal = E.total;
        break;
      case "file_complete":
        p.completedFiles.push({
          filename: E.filename,
          success: E.success,
          error: E.error
        });
        break;
      case "batch_complete":
        break;
      case "done":
        p.nodesToInstall = E.nodes_to_install || [], E.download_results && (p.completedFiles = E.download_results), p.phase = "complete";
        break;
      case "error":
        p.error = E.message, p.phase = "error", r.value = E.message;
        break;
    }
  }
  function S(U, E) {
    const { addToQueue: T } = Lo(), N = E.filter((A) => A.url && A.target_path).map((A) => ({
      workflow: U,
      filename: A.filename,
      url: A.url,
      targetPath: A.target_path,
      size: A.size || 0,
      type: "model"
    }));
    return N.length > 0 && T(N), N.length;
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
const Mg = { class: "resolution-stepper" }, Pg = { class: "stepper-header" }, Rg = ["onClick"], Ng = {
  key: 0,
  class: "step-icon"
}, Lg = {
  key: 1,
  class: "step-number"
}, Dg = { class: "step-label" }, Og = {
  key: 0,
  class: "step-connector"
}, Ug = { class: "stepper-content" }, Ag = /* @__PURE__ */ Se({
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
    return (v, f) => (n(), i("div", Mg, [
      t("div", Pg, [
        (n(!0), i(G, null, ke(e.steps, (p, w) => (n(), i("div", {
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
            l(p.id) ? (n(), i("span", Ng, "✓")) : (n(), i("span", Lg, m(w + 1), 1))
          ], 2),
          t("div", Dg, m(p.label), 1),
          w < e.steps.length - 1 ? (n(), i("div", Og)) : h("", !0)
        ], 10, Rg))), 128))
      ]),
      t("div", Ug, [
        et(v.$slots, "default", {}, void 0)
      ])
    ]));
  }
}), zg = /* @__PURE__ */ Ie(Ag, [["__scopeId", "data-v-2a7b3af8"]]), Vg = /* @__PURE__ */ Se({
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
}), Jn = /* @__PURE__ */ Ie(Vg, [["__scopeId", "data-v-17ec4b80"]]), Fg = { class: "node-info" }, Bg = { class: "node-info-text" }, Wg = { class: "item-body" }, Gg = {
  key: 0,
  class: "resolved-state"
}, jg = {
  key: 1,
  class: "multiple-options"
}, Hg = {
  key: 0,
  class: "installed-packs-section"
}, qg = { class: "installed-packs-list" }, Kg = ["onClick"], Jg = { class: "installed-pack-name" }, Yg = { class: "installed-pack-source" }, Qg = { class: "options-list" }, Xg = ["onClick"], Zg = ["name", "value", "checked", "onChange"], eh = { class: "option-content" }, th = { class: "option-header" }, sh = { class: "option-package-id" }, oh = {
  key: 0,
  class: "option-title"
}, nh = { class: "option-meta" }, ah = {
  key: 0,
  class: "installed-badge"
}, lh = { class: "action-buttons" }, ih = {
  key: 2,
  class: "unresolved"
}, rh = {
  key: 0,
  class: "installed-packs-section"
}, uh = { class: "installed-packs-list" }, ch = ["onClick"], dh = { class: "installed-pack-name" }, mh = { class: "installed-pack-source" }, fh = {
  key: 1,
  class: "searching-state"
}, vh = { class: "options-list" }, ph = ["onClick"], gh = ["name", "value"], hh = { class: "option-content" }, yh = { class: "option-header" }, wh = { class: "option-package-id" }, _h = {
  key: 0,
  class: "option-description"
}, kh = { class: "option-meta" }, bh = {
  key: 0,
  class: "installed-badge"
}, $h = {
  key: 3,
  class: "unresolved-message"
}, Ch = { class: "action-buttons" }, xh = /* @__PURE__ */ Se({
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
      t("div", Fg, [
        t("span", Bg, [
          p[7] || (p[7] = $("Node type: ", -1)),
          t("code", null, m(e.nodeType), 1)
        ]),
        e.statusLabel ? (n(), i("span", {
          key: 0,
          class: De(["status-badge", c.value])
        }, m(e.statusLabel), 3)) : h("", !0)
      ]),
      t("div", Wg, [
        r.value ? (n(), i("div", Gg, [
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
        ])) : e.hasMultipleOptions && e.options ? (n(), i("div", jg, [
          u.value.length > 0 ? (n(), i("div", Hg, [
            p[9] || (p[9] = t("p", { class: "options-prompt" }, "Or map to an installed node pack:", -1)),
            t("div", qg, [
              (n(!0), i(G, null, ke(u.value, (w) => (n(), i("button", {
                key: w.package_id,
                type: "button",
                class: "installed-pack-chip",
                onClick: (y) => a("installed-pack-selected", w.package_id)
              }, [
                t("span", Jg, m(w.package_id), 1),
                t("span", Yg, m(v(w.source)), 1)
              ], 8, Kg))), 128))
            ])
          ])) : h("", !0),
          p[13] || (p[13] = t("p", { class: "options-prompt" }, "Potential matches:", -1)),
          t("div", Qg, [
            (n(!0), i(G, null, ke(e.options, (w, y) => (n(), i("label", {
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
              }, null, 40, Zg),
              t("div", eh, [
                t("div", th, [
                  t("span", sh, m(w.package_id), 1),
                  _(Jn, {
                    confidence: w.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                w.title && w.title !== w.package_id ? (n(), i("div", oh, m(w.title), 1)) : h("", !0),
                t("div", nh, [
                  w.is_installed ? (n(), i("span", ah, "Already Installed")) : h("", !0)
                ])
              ])
            ], 10, Xg))), 128))
          ]),
          t("div", lh, [
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
        ])) : (n(), i("div", ih, [
          u.value.length > 0 ? (n(), i("div", rh, [
            p[14] || (p[14] = t("p", { class: "options-prompt" }, "Map to an installed node pack:", -1)),
            t("div", uh, [
              (n(!0), i(G, null, ke(u.value, (w) => (n(), i("button", {
                key: w.package_id,
                type: "button",
                class: "installed-pack-chip",
                onClick: (y) => a("installed-pack-selected", w.package_id)
              }, [
                t("span", dh, m(w.package_id), 1),
                t("span", mh, m(v(w.source)), 1)
              ], 8, ch))), 128))
            ])
          ])) : h("", !0),
          e.isSearching ? (n(), i("div", fh, [...p[15] || (p[15] = [
            t("span", { class: "searching-spinner" }, null, -1),
            t("span", null, "Searching registry...", -1)
          ])])) : e.searchResults && e.searchResults.length > 0 ? (n(), i(G, { key: 2 }, [
            p[16] || (p[16] = t("p", { class: "options-prompt" }, "Potential matches found:", -1)),
            t("div", vh, [
              (n(!0), i(G, null, ke(e.searchResults.slice(0, 5), (w, y) => (n(), i("label", {
                key: w.package_id,
                class: "option-card",
                onClick: (k) => a("search-result-selected", w)
              }, [
                t("input", {
                  type: "radio",
                  name: `search-result-${e.nodeType}`,
                  value: y
                }, null, 8, gh),
                t("div", hh, [
                  t("div", yh, [
                    t("span", wh, m(w.package_id), 1),
                    _(Jn, {
                      confidence: w.match_confidence,
                      size: "sm"
                    }, null, 8, ["confidence"])
                  ]),
                  w.description ? (n(), i("div", _h, m(l(w.description)), 1)) : h("", !0),
                  t("div", kh, [
                    w.is_installed ? (n(), i("span", bh, "Already Installed")) : h("", !0)
                  ])
                ])
              ], 8, ph))), 128))
            ])
          ], 64)) : (n(), i("div", $h, [...p[17] || (p[17] = [
            t("span", { class: "warning-icon" }, "⚠", -1),
            t("span", null, "No matching package found in registry", -1)
          ])])),
          t("div", Ch, [
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
}), Sh = /* @__PURE__ */ Ie(xh, [["__scopeId", "data-v-fb0bbf03"]]), Ih = { class: "item-navigator" }, Eh = { class: "nav-item-info" }, Th = ["title"], Mh = { class: "nav-controls" }, Ph = { class: "nav-arrows" }, Rh = ["disabled"], Nh = ["disabled"], Lh = { class: "nav-position" }, Dh = /* @__PURE__ */ Se({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(e, { emit: s }) {
    const o = s;
    return (a, l) => (n(), i("div", Ih, [
      t("div", Eh, [
        t("code", {
          class: "item-name",
          title: e.itemName
        }, m(e.itemName), 9, Th)
      ]),
      t("div", Mh, [
        t("div", Ph, [
          t("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === 0,
            onClick: l[0] || (l[0] = (r) => o("prev")),
            title: "Previous item"
          }, " ← ", 8, Rh),
          t("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === e.totalItems - 1,
            onClick: l[1] || (l[1] = (r) => o("next")),
            title: "Next item"
          }, " → ", 8, Nh)
        ]),
        t("span", Lh, m(e.currentIndex + 1) + "/" + m(e.totalItems), 1)
      ])
    ]));
  }
}), tu = /* @__PURE__ */ Ie(Dh, [["__scopeId", "data-v-74af7920"]]), Oh = { class: "node-resolution-step" }, Uh = {
  key: 0,
  class: "auto-resolved-section"
}, Ah = { class: "section-header" }, zh = { class: "stat-badge" }, Vh = { class: "resolved-packages-list" }, Fh = { class: "package-info" }, Bh = { class: "package-id" }, Wh = { class: "node-count" }, Gh = { class: "package-actions" }, jh = {
  key: 0,
  class: "status-badge install"
}, Hh = {
  key: 1,
  class: "status-badge skip"
}, qh = ["onClick"], Kh = {
  key: 1,
  class: "section-divider"
}, Jh = { class: "step-header" }, Yh = { class: "stat-badge" }, Qh = {
  key: 1,
  class: "step-body"
}, Xh = {
  key: 3,
  class: "empty-state"
}, Zh = { class: "node-modal-body" }, ey = { class: "node-search-results-container" }, ty = {
  key: 0,
  class: "node-search-results"
}, sy = ["onClick"], oy = { class: "node-result-header" }, ny = { class: "node-result-package-id" }, ay = {
  key: 0,
  class: "node-result-description"
}, ly = {
  key: 1,
  class: "node-empty-state"
}, iy = {
  key: 2,
  class: "node-empty-state"
}, ry = {
  key: 3,
  class: "node-empty-state"
}, uy = { class: "node-manual-entry-modal" }, cy = { class: "node-modal-body" }, dy = { class: "node-modal-actions" }, my = /* @__PURE__ */ Se({
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
    const o = e, a = s, { searchNodes: l } = eu(), r = b(0), u = b(!1), c = b(!1), d = b(""), v = b(""), f = b([]), p = b(!1), w = b(/* @__PURE__ */ new Map()), y = b(/* @__PURE__ */ new Set()), k = b(!1);
    function x() {
      k.value && pe(), k.value = !1;
    }
    const C = O(() => o.nodes[r.value]), S = O(() => o.nodes.filter((P) => o.nodeChoices.has(P.node_type)).length), U = O(() => C.value ? w.value.get(C.value.node_type) || [] : []), E = O(() => C.value ? y.value.has(C.value.node_type) : !1);
    kt(C, async (P) => {
      var R;
      P && ((R = P.options) != null && R.length || w.value.has(P.node_type) || y.value.has(P.node_type) || o.nodeChoices.has(P.node_type) || await T(P.node_type));
    }, { immediate: !0 });
    async function T(P) {
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
    function A(P) {
      return o.skippedPackages.has(P);
    }
    function H(P) {
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
    }), W = O(() => {
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
    function ee() {
      var P;
      for (let R = r.value + 1; R < o.nodes.length; R++) {
        const ue = o.nodes[R];
        if (!((P = o.nodeChoices) != null && P.has(ue.node_type))) {
          Z(R);
          return;
        }
      }
    }
    function re() {
      C.value && (a("mark-optional", C.value.node_type), Rt(() => ee()));
    }
    function he() {
      C.value && (a("skip", C.value.node_type), Rt(() => ee()));
    }
    function ne(P) {
      C.value && (a("option-selected", C.value.node_type, P), Rt(() => ee()));
    }
    function Q() {
      C.value && a("clear-choice", C.value.node_type);
    }
    function de() {
      C.value && (d.value = C.value.node_type, f.value = U.value, u.value = !0, oe(d.value));
    }
    function Ne() {
      v.value = "", c.value = !0;
    }
    function le(P) {
      C.value && (a("manual-entry", C.value.node_type, P), Rt(() => ee()));
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
        oe(d.value);
      }, 300);
    }
    async function oe(P) {
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
      C.value && (a("manual-entry", C.value.node_type, P.package_id), pe(), Rt(() => ee()));
    }
    function V(P) {
      C.value && (a("manual-entry", C.value.node_type, P.package_id), Rt(() => ee()));
    }
    function j() {
      !C.value || !v.value.trim() || (a("manual-entry", C.value.node_type, v.value.trim()), me(), Rt(() => ee()));
    }
    return (P, R) => {
      var ue, Ve;
      return n(), i("div", Oh, [
        e.autoResolvedPackages.length > 0 ? (n(), i("div", Uh, [
          t("div", Ah, [
            R[6] || (R[6] = t("div", { class: "section-info" }, [
              t("h4", { class: "section-title" }, "Packages to Install"),
              t("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            t("span", zh, m(N.value) + "/" + m(e.autoResolvedPackages.length) + " to install", 1)
          ]),
          t("div", Vh, [
            (n(!0), i(G, null, ke(e.autoResolvedPackages, (je) => (n(), i("div", {
              key: je.package_id,
              class: "resolved-package-item"
            }, [
              t("div", Fh, [
                t("code", Bh, m(je.package_id), 1),
                t("span", Wh, m(je.node_types_count) + " node type" + m(je.node_types_count > 1 ? "s" : ""), 1)
              ]),
              t("div", Gh, [
                A(je.package_id) ? (n(), i("span", Hh, " SKIPPED ")) : (n(), i("span", jh, " WILL INSTALL ")),
                t("button", {
                  class: "toggle-skip-btn",
                  onClick: (F) => H(je.package_id)
                }, m(A(je.package_id) ? "Include" : "Skip"), 9, qh)
              ])
            ]))), 128))
          ])
        ])) : h("", !0),
        e.autoResolvedPackages.length > 0 && e.nodes.length > 0 ? (n(), i("div", Kh)) : h("", !0),
        e.nodes.length > 0 ? (n(), i(G, { key: 2 }, [
          t("div", Jh, [
            R[7] || (R[7] = t("div", { class: "step-info" }, [
              t("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              t("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            t("span", Yh, m(S.value) + "/" + m(e.nodes.length) + " resolved", 1)
          ]),
          C.value ? (n(), L(tu, {
            key: 0,
            "item-name": C.value.node_type,
            "current-index": r.value,
            "total-items": e.nodes.length,
            onPrev: R[0] || (R[0] = (je) => Z(r.value - 1)),
            onNext: R[1] || (R[1] = (je) => Z(r.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : h("", !0),
          C.value ? (n(), i("div", Qh, [
            _(Sh, {
              "node-type": C.value.node_type,
              "has-multiple-options": !!((ue = C.value.options) != null && ue.length),
              options: C.value.options,
              choice: (Ve = e.nodeChoices) == null ? void 0 : Ve.get(C.value.node_type),
              status: D.value,
              "status-label": W.value,
              "search-results": U.value,
              "is-searching": E.value,
              "installed-node-packs": e.installedNodePacks,
              onMarkOptional: re,
              onSkip: he,
              onManualEntry: Ne,
              onSearch: de,
              onOptionSelected: ne,
              onClearChoice: Q,
              onSearchResultSelected: V,
              onInstalledPackSelected: le
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label", "search-results", "is-searching", "installed-node-packs"])
          ])) : h("", !0)
        ], 64)) : h("", !0),
        e.nodes.length === 0 && e.autoResolvedPackages.length === 0 ? (n(), i("div", Xh, [...R[8] || (R[8] = [
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
              t("div", Zh, [
                _(it, {
                  modelValue: d.value,
                  "onUpdate:modelValue": R[2] || (R[2] = (je) => d.value = je),
                  placeholder: "Search by node type, package name...",
                  onInput: se
                }, null, 8, ["modelValue"]),
                t("div", ey, [
                  f.value.length > 0 ? (n(), i("div", ty, [
                    (n(!0), i(G, null, ke(f.value, (je) => (n(), i("div", {
                      key: je.package_id,
                      class: "node-search-result-item",
                      onClick: (F) => M(je)
                    }, [
                      t("div", oy, [
                        t("code", ny, m(je.package_id), 1),
                        je.match_confidence ? (n(), L(Jn, {
                          key: 0,
                          confidence: je.match_confidence,
                          size: "sm"
                        }, null, 8, ["confidence"])) : h("", !0)
                      ]),
                      je.description ? (n(), i("div", ay, m(je.description), 1)) : h("", !0)
                    ], 8, sy))), 128))
                  ])) : p.value ? (n(), i("div", ly, "Searching...")) : d.value ? (n(), i("div", iy, 'No packages found matching "' + m(d.value) + '"', 1)) : (n(), i("div", ry, "Enter a search term"))
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
            t("div", uy, [
              t("div", { class: "node-modal-header" }, [
                R[10] || (R[10] = t("h4", null, "Enter Package Manually", -1)),
                t("button", {
                  class: "node-modal-close-btn",
                  onClick: me
                }, "✕")
              ]),
              t("div", cy, [
                _(it, {
                  modelValue: v.value,
                  "onUpdate:modelValue": R[5] || (R[5] = (je) => v.value = je),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                t("div", dy, [
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
                    onClick: j
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
}), fy = /* @__PURE__ */ Ie(my, [["__scopeId", "data-v-94c6a438"]]), vy = { class: "node-info" }, py = { class: "node-info-text" }, gy = { class: "item-body" }, hy = {
  key: 0,
  class: "resolved-state"
}, yy = {
  key: 1,
  class: "multiple-options"
}, wy = { class: "options-list" }, _y = ["onClick"], ky = ["name", "value", "checked", "onChange"], by = { class: "option-content" }, $y = { class: "option-header" }, Cy = { class: "option-filename" }, xy = { class: "option-meta" }, Sy = { class: "option-size" }, Iy = { class: "option-category" }, Ey = { class: "option-path" }, Ty = { class: "action-buttons" }, My = {
  key: 2,
  class: "unresolved"
}, Py = { class: "action-buttons" }, Ry = /* @__PURE__ */ Se({
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
      t("div", vy, [
        t("span", py, [
          v[7] || (v[7] = $("Used by: ", -1)),
          t("code", null, m(e.nodeType), 1)
        ]),
        e.statusLabel ? (n(), i("span", {
          key: 0,
          class: De(["status-badge", r.value])
        }, m(e.statusLabel), 3)) : h("", !0)
      ]),
      t("div", gy, [
        l.value ? (n(), i("div", hy, [
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
        ])) : e.hasMultipleOptions && e.options ? (n(), i("div", yy, [
          v[12] || (v[12] = t("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          t("div", wy, [
            (n(!0), i(G, null, ke(e.options, (f, p) => (n(), i("label", {
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
              }, null, 40, ky),
              t("div", by, [
                t("div", $y, [
                  t("span", Cy, m(f.model.filename), 1),
                  _(Jn, {
                    confidence: f.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                t("div", xy, [
                  t("span", Sy, m(c(f.model.size)), 1),
                  t("span", Iy, m(f.model.category), 1)
                ]),
                t("div", Ey, m(f.model.relative_path), 1)
              ])
            ], 10, _y))), 128))
          ]),
          t("div", Ty, [
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
        ])) : (n(), i("div", My, [
          v[16] || (v[16] = t("div", { class: "unresolved-message" }, [
            t("span", { class: "warning-icon" }, "⚠"),
            t("span", null, "Model not found in workspace")
          ], -1)),
          t("div", Py, [
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
}), Ny = /* @__PURE__ */ Ie(Ry, [["__scopeId", "data-v-8a82fefa"]]), Ly = { class: "model-resolution-step" }, Dy = { class: "step-header" }, Oy = { class: "step-info" }, Uy = { class: "step-title" }, Ay = { class: "step-description" }, zy = { class: "stat-badge" }, Vy = {
  key: 1,
  class: "step-body"
}, Fy = {
  key: 2,
  class: "empty-state"
}, By = { class: "model-search-modal" }, Wy = { class: "model-modal-body" }, Gy = {
  key: 0,
  class: "model-search-results"
}, jy = ["onClick"], Hy = { class: "model-result-header" }, qy = { class: "model-result-filename" }, Ky = { class: "model-result-meta" }, Jy = { class: "model-result-category" }, Yy = { class: "model-result-size" }, Qy = {
  key: 0,
  class: "model-result-path"
}, Xy = {
  key: 1,
  class: "model-no-results"
}, Zy = {
  key: 2,
  class: "model-searching"
}, e1 = { class: "model-download-url-modal" }, t1 = { class: "model-modal-body" }, s1 = { class: "model-input-group" }, o1 = { class: "model-input-group" }, n1 = { class: "model-modal-actions" }, a1 = /* @__PURE__ */ Se({
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
    }), E = O(() => {
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
    function T(le) {
      le >= 0 && le < l.models.length && (u.value = le);
    }
    function N() {
      var le;
      for (let pe = u.value + 1; pe < l.models.length; pe++) {
        const me = l.models[pe];
        if (!me.is_download_intent && !((le = l.modelChoices) != null && le.has(me.filename))) {
          T(pe);
          return;
        }
      }
    }
    function A() {
      k.value && (r("mark-optional", k.value.filename), Rt(() => N()));
    }
    function H() {
      k.value && (r("skip", k.value.filename), Rt(() => N()));
    }
    function D(le) {
      k.value && (r("option-selected", k.value.filename, le), Rt(() => N()));
    }
    function W() {
      k.value && r("clear-choice", k.value.filename);
    }
    function Z() {
      k.value && (v.value = k.value.filename, c.value = !0);
    }
    function ee() {
      k.value && (f.value = k.value.download_source || "", p.value = k.value.target_path || S.value, d.value = !0);
    }
    function re() {
      c.value = !1, v.value = "", w.value = [];
    }
    function he() {
      d.value = !1, f.value = "", p.value = "";
    }
    function ne() {
      y.value = !0, setTimeout(() => {
        y.value = !1;
      }, 300);
    }
    function Q(le) {
      k.value && (re(), Rt(() => N()));
    }
    function de() {
      !k.value || !f.value.trim() || (r("download-url", k.value.filename, f.value.trim(), p.value.trim() || void 0), he(), Rt(() => N()));
    }
    function Ne(le) {
      if (!le) return "Unknown";
      const pe = le / (1024 * 1024 * 1024);
      return pe >= 1 ? `${pe.toFixed(2)} GB` : `${(le / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (le, pe) => {
      var me, Ue, se;
      return n(), i("div", Ly, [
        t("div", Dy, [
          t("div", Oy, [
            t("h3", Uy, m(x.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            t("p", Ay, m(x.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          t("span", zy, m(C.value) + "/" + m(e.models.length) + " resolved", 1)
        ]),
        k.value ? (n(), L(tu, {
          key: 0,
          "item-name": k.value.filename,
          "current-index": u.value,
          "total-items": e.models.length,
          onPrev: pe[0] || (pe[0] = (oe) => T(u.value - 1)),
          onNext: pe[1] || (pe[1] = (oe) => T(u.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : h("", !0),
        k.value ? (n(), i("div", Vy, [
          _(Ny, {
            filename: k.value.filename,
            "node-type": ((me = k.value.reference) == null ? void 0 : me.node_type) || "Unknown",
            "has-multiple-options": !!((Ue = k.value.options) != null && Ue.length),
            options: k.value.options,
            choice: (se = e.modelChoices) == null ? void 0 : se.get(k.value.filename),
            status: U.value,
            "status-label": E.value,
            onMarkOptional: A,
            onSkip: H,
            onDownloadUrl: ee,
            onSearch: Z,
            onOptionSelected: D,
            onClearChoice: W
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (n(), i("div", Fy, [...pe[5] || (pe[5] = [
          t("p", null, "No models need resolution.", -1)
        ])])),
        (n(), L(Ot, { to: "body" }, [
          c.value ? (n(), i("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: st(re, ["self"])
          }, [
            t("div", By, [
              t("div", { class: "model-modal-header" }, [
                pe[6] || (pe[6] = t("h4", null, "Search Workspace Models", -1)),
                t("button", {
                  class: "model-modal-close-btn",
                  onClick: re
                }, "✕")
              ]),
              t("div", Wy, [
                _(it, {
                  modelValue: v.value,
                  "onUpdate:modelValue": pe[2] || (pe[2] = (oe) => v.value = oe),
                  placeholder: "Search by filename, category...",
                  onInput: ne
                }, null, 8, ["modelValue"]),
                w.value.length > 0 ? (n(), i("div", Gy, [
                  (n(!0), i(G, null, ke(w.value, (oe) => (n(), i("div", {
                    key: oe.hash,
                    class: "model-search-result-item",
                    onClick: (M) => Q()
                  }, [
                    t("div", Hy, [
                      t("code", qy, m(oe.filename), 1)
                    ]),
                    t("div", Ky, [
                      t("span", Jy, m(oe.category), 1),
                      t("span", Yy, m(Ne(oe.size)), 1)
                    ]),
                    oe.relative_path ? (n(), i("div", Qy, m(oe.relative_path), 1)) : h("", !0)
                  ], 8, jy))), 128))
                ])) : v.value && !y.value ? (n(), i("div", Xy, ' No models found matching "' + m(v.value) + '" ', 1)) : h("", !0),
                y.value ? (n(), i("div", Zy, "Searching...")) : h("", !0)
              ])
            ])
          ])) : h("", !0)
        ])),
        (n(), L(Ot, { to: "body" }, [
          d.value ? (n(), i("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: st(he, ["self"])
          }, [
            t("div", e1, [
              t("div", { class: "model-modal-header" }, [
                pe[7] || (pe[7] = t("h4", null, "Enter Download URL", -1)),
                t("button", {
                  class: "model-modal-close-btn",
                  onClick: he
                }, "✕")
              ]),
              t("div", t1, [
                t("div", s1, [
                  pe[8] || (pe[8] = t("label", { class: "model-input-label" }, "Download URL", -1)),
                  _(it, {
                    modelValue: f.value,
                    "onUpdate:modelValue": pe[3] || (pe[3] = (oe) => f.value = oe),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                t("div", o1, [
                  pe[9] || (pe[9] = t("label", { class: "model-input-label" }, "Host Path", -1)),
                  _(it, {
                    modelValue: p.value,
                    "onUpdate:modelValue": pe[4] || (pe[4] = (oe) => p.value = oe),
                    placeholder: S.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                t("div", n1, [
                  _(Re, {
                    variant: "secondary",
                    onClick: he
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
}), l1 = /* @__PURE__ */ Ie(a1, [["__scopeId", "data-v-5c700bfa"]]), i1 = { class: "applying-step" }, r1 = {
  key: 0,
  class: "phase-content"
}, u1 = {
  key: 1,
  class: "phase-content"
}, c1 = { class: "phase-description" }, d1 = { class: "overall-progress" }, m1 = { class: "progress-bar" }, f1 = { class: "progress-label" }, v1 = { class: "install-list" }, p1 = { class: "install-icon" }, g1 = { key: 0 }, h1 = {
  key: 1,
  class: "spinner"
}, y1 = { key: 2 }, w1 = { key: 3 }, _1 = {
  key: 0,
  class: "install-error"
}, k1 = {
  key: 2,
  class: "phase-content"
}, b1 = { class: "phase-header" }, $1 = { class: "phase-title" }, C1 = { class: "completion-summary" }, x1 = {
  key: 0,
  class: "summary-item success"
}, S1 = { class: "summary-text" }, I1 = {
  key: 1,
  class: "summary-item error"
}, E1 = { class: "summary-text" }, T1 = {
  key: 2,
  class: "failed-list"
}, M1 = { class: "failed-node-id" }, P1 = { class: "failed-error" }, R1 = {
  key: 4,
  class: "summary-item success"
}, N1 = {
  key: 5,
  class: "restart-prompt"
}, L1 = {
  key: 3,
  class: "phase-content error"
}, D1 = { class: "error-message" }, O1 = /* @__PURE__ */ Se({
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
      return n(), i("div", i1, [
        e.progress.phase === "resolving" ? (n(), i("div", r1, [...d[2] || (d[2] = [
          t("div", { class: "phase-header" }, [
            t("div", { class: "loading-spinner" }),
            t("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          t("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : e.progress.phase === "installing" ? (n(), i("div", u1, [
          d[3] || (d[3] = t("div", { class: "phase-header" }, [
            t("div", { class: "loading-spinner" }),
            t("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          t("p", c1, " Installing " + m((((v = e.progress.nodeInstallProgress) == null ? void 0 : v.currentIndex) ?? 0) + 1) + " of " + m(((f = e.progress.nodeInstallProgress) == null ? void 0 : f.totalNodes) ?? e.progress.nodesToInstall.length) + " packages... ", 1),
          t("div", d1, [
            t("div", m1, [
              t("div", {
                class: "progress-fill",
                style: Ft({ width: `${o.value}%` })
              }, null, 4)
            ]),
            t("span", f1, m(((p = e.progress.nodeInstallProgress) == null ? void 0 : p.completedNodes.length) ?? 0) + " / " + m(((w = e.progress.nodeInstallProgress) == null ? void 0 : w.totalNodes) ?? e.progress.nodesToInstall.length), 1)
          ]),
          t("div", v1, [
            (n(!0), i(G, null, ke(e.progress.nodesToInstall, (y, k) => (n(), i("div", {
              key: y,
              class: De(["install-item", r(y, k)])
            }, [
              t("span", p1, [
                r(y, k) === "pending" ? (n(), i("span", g1, "○")) : r(y, k) === "installing" ? (n(), i("span", h1, "◌")) : r(y, k) === "complete" ? (n(), i("span", y1, "✓")) : r(y, k) === "failed" ? (n(), i("span", w1, "✗")) : h("", !0)
              ]),
              t("code", null, m(y), 1),
              u(y) ? (n(), i("span", _1, m(u(y)), 1)) : h("", !0)
            ], 2))), 128))
          ])
        ])) : e.progress.phase === "complete" ? (n(), i("div", k1, [
          t("div", b1, [
            t("span", {
              class: De(["phase-icon", l.value ? "warning" : "success"])
            }, m(l.value ? "⚠" : "✓"), 3),
            t("h3", $1, m(l.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          t("div", C1, [
            e.progress.nodesInstalled.length > 0 ? (n(), i("div", x1, [
              d[4] || (d[4] = t("span", { class: "summary-icon" }, "✓", -1)),
              t("span", S1, m(e.progress.nodesInstalled.length) + " node package" + m(e.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : h("", !0),
            a.value.length > 0 ? (n(), i("div", I1, [
              d[5] || (d[5] = t("span", { class: "summary-icon" }, "✗", -1)),
              t("span", E1, m(a.value.length) + " package" + m(a.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : h("", !0),
            a.value.length > 0 ? (n(), i("div", T1, [
              (n(!0), i(G, null, ke(a.value, (y) => (n(), i("div", {
                key: y.node_id,
                class: "failed-item"
              }, [
                t("code", M1, m(y.node_id), 1),
                t("span", P1, m(y.error), 1)
              ]))), 128))
            ])) : h("", !0),
            a.value.length > 0 ? (n(), i("button", {
              key: 3,
              class: "retry-button",
              onClick: d[0] || (d[0] = (y) => c.$emit("retry-failed"))
            }, " Retry Failed (" + m(a.value.length) + ") ", 1)) : h("", !0),
            l.value ? h("", !0) : (n(), i("div", R1, [...d[6] || (d[6] = [
              t("span", { class: "summary-icon" }, "✓", -1),
              t("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            d[8] || (d[8] = t("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            e.progress.needsRestart ? (n(), i("div", N1, [
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
        ])) : e.progress.phase === "error" ? (n(), i("div", L1, [
          d[9] || (d[9] = t("div", { class: "phase-header" }, [
            t("span", { class: "phase-icon error" }, "✗"),
            t("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          t("p", D1, m(e.progress.error), 1)
        ])) : h("", !0)
      ]);
    };
  }
}), U1 = /* @__PURE__ */ Ie(O1, [["__scopeId", "data-v-5efaae58"]]), A1 = {
  key: 0,
  class: "loading-state"
}, z1 = {
  key: 1,
  class: "wizard-content"
}, V1 = {
  key: 0,
  class: "step-content"
}, F1 = { class: "analysis-summary" }, B1 = { class: "analysis-header" }, W1 = { class: "summary-description" }, G1 = { class: "stats-grid" }, j1 = { class: "stat-card" }, H1 = { class: "stat-items" }, q1 = {
  key: 0,
  class: "stat-item success"
}, K1 = { class: "stat-count" }, J1 = {
  key: 1,
  class: "stat-item info"
}, Y1 = { class: "stat-count" }, Q1 = {
  key: 2,
  class: "stat-item warning"
}, X1 = { class: "stat-count" }, Z1 = {
  key: 3,
  class: "stat-item warning"
}, e0 = { class: "stat-count" }, t0 = {
  key: 4,
  class: "stat-item warning"
}, s0 = { class: "stat-count" }, o0 = {
  key: 5,
  class: "stat-item error"
}, n0 = { class: "stat-count" }, a0 = { class: "stat-card" }, l0 = { class: "stat-items" }, i0 = { class: "stat-item success" }, r0 = { class: "stat-count" }, u0 = {
  key: 0,
  class: "stat-item info"
}, c0 = { class: "stat-count" }, d0 = {
  key: 1,
  class: "stat-item warning"
}, m0 = { class: "stat-count" }, f0 = {
  key: 2,
  class: "stat-item warning"
}, v0 = { class: "stat-count" }, p0 = {
  key: 3,
  class: "stat-item error"
}, g0 = { class: "stat-count" }, h0 = {
  key: 0,
  class: "status-message warning"
}, y0 = { class: "status-text" }, w0 = {
  key: 1,
  class: "status-message warning"
}, _0 = { class: "status-text" }, k0 = {
  key: 2,
  class: "status-message info"
}, b0 = { class: "status-text" }, $0 = {
  key: 3,
  class: "status-message info"
}, C0 = { class: "status-text" }, x0 = {
  key: 4,
  class: "status-message info"
}, S0 = { class: "status-text" }, I0 = {
  key: 5,
  class: "status-message warning"
}, E0 = { class: "status-text" }, T0 = {
  key: 6,
  class: "status-message success"
}, M0 = {
  key: 7,
  class: "category-mismatch-section"
}, P0 = { class: "mismatch-list" }, R0 = { class: "mismatch-path" }, N0 = { class: "mismatch-target" }, L0 = {
  key: 8,
  class: "category-mismatch-section"
}, D0 = { class: "mismatch-list" }, O0 = { class: "mismatch-path" }, U0 = { class: "status-text" }, A0 = {
  key: 1,
  class: "step-content node-step-content"
}, z0 = {
  key: 0,
  class: "community-node-section"
}, V0 = { class: "community-node-header" }, F0 = { class: "community-node-title" }, B0 = { class: "community-node-list" }, W0 = { class: "community-node-info" }, G0 = { class: "community-node-heading" }, j0 = { class: "item-name" }, H0 = { class: "community-node-package" }, q0 = { class: "community-node-meta" }, K0 = { class: "community-node-guidance" }, J0 = { key: 0 }, Y0 = { class: "community-choice-status" }, Q0 = { class: "community-node-actions" }, X0 = {
  key: 3,
  class: "step-content"
}, Z0 = { class: "review-summary" }, ew = { class: "review-stats" }, tw = { class: "review-stat" }, sw = { class: "stat-value" }, ow = { class: "review-stat" }, nw = { class: "stat-value" }, aw = { class: "review-stat" }, lw = { class: "stat-value" }, iw = { class: "review-stat" }, rw = { class: "stat-value" }, uw = {
  key: 0,
  class: "review-section"
}, cw = { class: "section-title" }, dw = { class: "review-items" }, mw = { class: "item-name" }, fw = { class: "item-choice" }, vw = {
  key: 0,
  class: "choice-badge install"
}, pw = {
  key: 1,
  class: "choice-badge skip"
}, gw = {
  key: 1,
  class: "review-section"
}, hw = { class: "section-title" }, yw = { class: "review-items" }, ww = { class: "item-name" }, _w = { class: "item-choice" }, kw = {
  key: 0,
  class: "choice-badge install"
}, bw = {
  key: 1,
  class: "choice-badge optional"
}, $w = {
  key: 2,
  class: "choice-badge skip"
}, Cw = {
  key: 2,
  class: "review-section"
}, xw = { class: "section-title" }, Sw = { class: "review-items" }, Iw = { class: "item-name" }, Ew = { class: "item-choice" }, Tw = {
  key: 0,
  class: "choice-badge install"
}, Mw = {
  key: 1,
  class: "choice-badge optional"
}, Pw = {
  key: 2,
  class: "choice-badge skip"
}, Rw = {
  key: 1,
  class: "choice-badge pending"
}, Nw = {
  key: 3,
  class: "review-section"
}, Lw = { class: "section-title" }, Dw = { class: "review-items download-details" }, Ow = { class: "download-info" }, Uw = { class: "item-name" }, Aw = { class: "download-meta" }, zw = { class: "download-path" }, Vw = ["title"], Fw = {
  key: 4,
  class: "review-section"
}, Bw = { class: "section-title" }, Ww = { class: "review-items" }, Gw = { class: "item-name" }, jw = { class: "item-choice" }, Hw = {
  key: 0,
  class: "choice-badge install"
}, qw = {
  key: 1,
  class: "choice-badge download"
}, Kw = {
  key: 2,
  class: "choice-badge optional"
}, Jw = {
  key: 3,
  class: "choice-badge skip"
}, Yw = {
  key: 4,
  class: "choice-badge skip"
}, Qw = {
  key: 1,
  class: "choice-badge download"
}, Xw = {
  key: 2,
  class: "choice-badge pending"
}, Zw = {
  key: 5,
  class: "no-choices"
}, e_ = /* @__PURE__ */ Se({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(e, { emit: s }) {
    const o = e, a = s, { analyzeWorkflow: l, applyResolution: r, installNodes: u, queueModelDownloads: c, progress: d, resetProgress: v } = eu(), { loadPendingDownloads: f } = Lo(), { openFileLocation: p, queueNodeInstall: w, getNodes: y } = dt(), k = b(null), x = b([]), C = b(!1), S = b(!1), U = b(null), E = b("analysis"), T = b([]), N = b(/* @__PURE__ */ new Map()), A = b(/* @__PURE__ */ new Map()), H = b(/* @__PURE__ */ new Set()), D = O(() => {
      const ve = [
        { id: "analysis", label: "Analysis" }
      ];
      return (ne.value || Ne.value || le.value) && ve.push({ id: "nodes", label: "Nodes" }), Q.value && ve.push({ id: "models", label: "Models" }), ve.push({ id: "review", label: "Review" }), E.value === "applying" && ve.push({ id: "applying", label: "Applying" }), ve;
    }), W = O(() => k.value ? k.value.stats.needs_user_input : !1), Z = O(() => k.value ? k.value.nodes.version_gated || [] : []), ee = O(() => k.value ? k.value.nodes.uninstallable || [] : []), re = O(() => ee.value.filter((ve) => {
      var K;
      return !!((K = ve.package) != null && K.package_id);
    })), he = O(() => Z.value.length > 0), ne = O(() => k.value ? k.value.nodes.unresolved.length > 0 || k.value.nodes.ambiguous.length > 0 : !1), Q = O(() => k.value ? k.value.models.unresolved.length > 0 || k.value.models.ambiguous.length > 0 : !1), de = O(() => k.value ? k.value.stats.download_intents > 0 : !1), Ne = O(() => k.value ? k.value.stats.nodes_needing_installation > 0 : !1), le = O(() => re.value.length > 0), pe = O(() => k.value ? k.value.nodes.resolved.length : 0), me = O(() => k.value ? k.value.models.resolved.filter((ve) => ve.has_category_mismatch) : []), Ue = O(() => me.value.length > 0), se = O(() => ne.value || Ne.value || le.value ? "nodes" : Q.value ? "models" : "review"), oe = O(() => {
      if (!k.value) return [];
      const ve = k.value.nodes.resolved.filter((ye) => !ye.is_installed), K = /* @__PURE__ */ new Set();
      return ve.filter((ye) => K.has(ye.package.package_id) ? !1 : (K.add(ye.package.package_id), !0));
    }), M = O(() => {
      if (!k.value) return [];
      const ve = k.value.nodes.resolved.filter((ye) => !ye.is_installed), K = /* @__PURE__ */ new Map();
      for (const ye of ve) {
        const He = K.get(ye.package.package_id);
        He ? He.node_types_count++ : K.set(ye.package.package_id, {
          package_id: ye.package.package_id,
          title: ye.package.title,
          node_types_count: 1
        });
      }
      return Array.from(K.values());
    }), V = O(() => oe.value.filter((ve) => !H.value.has(ve.package.package_id))), j = O(() => k.value ? k.value.models.resolved.filter(
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
      const ve = k.value.nodes.unresolved.map((ye) => ({
        node_type: ye.reference.node_type,
        reason: ye.reason,
        is_unresolved: !0,
        options: void 0
      })), K = k.value.nodes.ambiguous.map((ye) => ({
        node_type: ye.reference.node_type,
        has_multiple_options: !0,
        options: ye.options.map((He) => ({
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
      const ve = k.value.models.unresolved.map((ye) => ({
        filename: ye.reference.widget_value,
        reference: ye.reference,
        reason: ye.reason,
        is_unresolved: !0,
        options: void 0
      })), K = k.value.models.ambiguous.map((ye) => ({
        filename: ye.reference.widget_value,
        reference: ye.reference,
        has_multiple_options: !0,
        options: ye.options.map((He) => ({
          model: He.model,
          match_confidence: He.match_confidence,
          match_type: He.match_type,
          has_download_source: He.has_download_source
        }))
      }));
      return [...ve, ...K];
    }), ue = O(() => {
      const ve = R.value, K = j.value.map((ye) => ({
        filename: ye.filename,
        reference: ye.reference,
        is_download_intent: !0,
        resolved_model: ye.resolved_model,
        download_source: ye.download_source,
        target_path: ye.target_path,
        options: void 0
      }));
      return [...ve, ...K];
    }), Ve = O(() => j.value.filter((ve) => {
      const K = A.value.get(ve.filename);
      return K ? K.action === "download" : !0;
    }).map((ve) => ({
      filename: ve.filename,
      url: ve.download_source,
      target_path: ve.target_path
    })));
    function je(ve, K = 50) {
      return ve.length <= K ? ve : ve.slice(0, K - 3) + "...";
    }
    const F = O(() => {
      let ve = V.value.length;
      for (const K of N.value.values())
        K.action === "install" && ve++;
      for (const K of A.value.values())
        K.action === "select" && ve++;
      return ve;
    }), B = O(() => {
      let ve = 0;
      for (const K of A.value.values())
        K.action === "download" && ve++;
      for (const K of j.value)
        A.value.get(K.filename) || ve++;
      return ve;
    }), q = O(() => {
      let ve = 0;
      for (const K of N.value.values())
        K.action === "optional" && ve++;
      for (const K of A.value.values())
        K.action === "optional" && ve++;
      return ve;
    }), we = O(() => {
      let ve = H.value.size;
      for (const K of N.value.values())
        K.action === "skip" && ve++;
      for (const K of A.value.values())
        K.action === "skip" && ve++;
      for (const K of P.value)
        N.value.has(K.node_type) || ve++;
      for (const K of R.value)
        A.value.has(K.filename) || ve++;
      return ve;
    }), be = O(() => {
      const ve = {};
      if (ve.analysis = { resolved: 1, total: 1 }, ne.value || le.value) {
        const K = P.value.length, ye = re.value.length, He = P.value.filter(
          (Pt) => N.value.has(Pt.node_type)
        ).length, vt = re.value.filter(
          (Pt) => N.value.has(Pt.reference.node_type)
        ).length, Nt = K + ye, tt = He + vt;
        ve.nodes = { resolved: tt, total: Nt };
      }
      if (Q.value) {
        const K = ue.value.length, ye = ue.value.filter(
          (He) => A.value.has(He.filename) || He.is_download_intent
        ).length;
        ve.models = { resolved: ye, total: K };
      }
      if (ve.review = { resolved: 1, total: 1 }, E.value === "applying") {
        const K = d.totalFiles || 1, ye = d.completedFiles.length;
        ve.applying = { resolved: ye, total: K };
      }
      return ve;
    });
    function Ce(ve) {
      E.value = ve;
    }
    function Pe() {
      const ve = D.value.findIndex((K) => K.id === E.value);
      ve > 0 && (E.value = D.value[ve - 1].id);
    }
    function Le() {
      const ve = D.value.findIndex((K) => K.id === E.value);
      ve < D.value.length - 1 && (E.value = D.value[ve + 1].id);
    }
    function Oe() {
      for (const ve of re.value) {
        const K = ve.reference.node_type;
        N.value.has(K) || ie(ve, "registry");
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
    function We(ve) {
      return ve.filter((K) => K.installed && K.tracked).filter((K) => K.name !== "comfygit-manager").map((K) => ({
        package_id: K.registry_id || K.name,
        source: K.source
      })).filter((K, ye, He) => He.findIndex((vt) => vt.package_id === K.package_id) === ye).sort((K, ye) => {
        const He = Te(K.source) - Te(ye.source);
        return He !== 0 ? He : K.package_id.localeCompare(ye.package_id);
      });
    }
    async function Me() {
      C.value = !0, U.value = null;
      try {
        const [ve, K] = await Promise.all([
          l(o.workflowName),
          y()
        ]);
        k.value = ve, x.value = We(K.nodes), Oe();
      } catch (ve) {
        U.value = ve instanceof Error ? ve.message : "Failed to analyze workflow";
      } finally {
        C.value = !1;
      }
    }
    function _e() {
      T.value.includes("analysis") || T.value.push("analysis"), ne.value || Ne.value || le.value ? E.value = "nodes" : Q.value ? E.value = "models" : E.value = "review";
    }
    function te(ve) {
      N.value.set(ve, { action: "optional" });
    }
    function Be(ve) {
      N.value.set(ve, { action: "skip" });
    }
    function z(ve, K) {
      var He;
      const ye = P.value.find((vt) => vt.node_type === ve);
      (He = ye == null ? void 0 : ye.options) != null && He[K] && N.value.set(ve, {
        action: "install",
        package_id: ye.options[K].package_id
      });
    }
    function X(ve, K) {
      N.value.set(ve, {
        action: "install",
        package_id: K
      });
    }
    function J(ve) {
      N.value.delete(ve);
    }
    function ge(ve) {
      return N.value.get(ve);
    }
    function I(ve) {
      const K = ge(ve);
      return K ? K.action === "optional" ? "Marked optional" : K.action === "skip" ? "Skipped" : K.action === "install" ? K.install_source === "git" ? "Will install via Git" : "Will install from registry" : "Skipped" : "Skipped";
    }
    function ie(ve, K) {
      var vt;
      const ye = (vt = ve.package) == null ? void 0 : vt.package_id;
      if (!ye) return;
      const He = {
        action: "install",
        package_id: ye,
        version: ve.package.latest_version || null,
        install_source: K
      };
      K === "git" && ve.package.repository && (He.repository = ve.package.repository), N.value.set(ve.reference.node_type, He);
    }
    function ce(ve) {
      N.value.set(ve, { action: "optional" });
    }
    function Ae(ve) {
      N.value.set(ve, { action: "skip" });
    }
    function ze(ve) {
      H.value.has(ve) ? H.value.delete(ve) : H.value.add(ve);
    }
    function Ee(ve) {
      A.value.set(ve, { action: "optional" });
    }
    function qe(ve) {
      A.value.set(ve, { action: "skip" });
    }
    function Qe(ve, K) {
      var He;
      const ye = R.value.find((vt) => vt.filename === ve);
      (He = ye == null ? void 0 : ye.options) != null && He[K] && A.value.set(ve, {
        action: "select",
        selected_model: ye.options[K].model
      });
    }
    function at(ve, K, ye) {
      A.value.set(ve, {
        action: "download",
        url: K,
        target_path: ye
      });
    }
    function rt(ve) {
      A.value.delete(ve);
    }
    async function mt(ve) {
      try {
        await p(ve);
      } catch (K) {
        U.value = K instanceof Error ? K.message : "Failed to open file location";
      }
    }
    async function It() {
      var ve;
      S.value = !0, U.value = null, v(), d.phase = "resolving", E.value = "applying";
      try {
        const K = await r(o.workflowName, N.value, A.value, H.value);
        K.models_to_download && K.models_to_download.length > 0 && c(o.workflowName, K.models_to_download);
        const ye = re.value.map((tt) => {
          const Pt = ge(tt.reference.node_type);
          if ((Pt == null ? void 0 : Pt.action) !== "install" || Pt.install_source !== "git")
            return null;
          const Is = Pt.repository || tt.package.repository, Jt = Pt.package_id || tt.package.package_id;
          return !Is || !Jt ? null : {
            id: Jt,
            repository: Is,
            selectedVersion: Pt.version || tt.package.latest_version || "latest"
          };
        }).filter((tt) => !!tt), He = new Set(ye.map((tt) => tt.id)), vt = [
          ...K.nodes_to_install || [],
          ...V.value.map((tt) => tt.package.package_id)
        ];
        d.nodesToInstall = [...new Set(vt)].filter((tt) => !He.has(tt)), d.nodesToInstall.length > 0 && await u(o.workflowName);
        for (const tt of ye)
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
      const ve = ((K = d.nodeInstallProgress) == null ? void 0 : K.completedNodes.filter((ye) => !ye.success).map((ye) => ye.node_id)) || [];
      if (ve.length !== 0) {
        d.phase = "installing", d.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: ve.length
        }, d.nodesToInstall = ve, d.nodesInstalled = [], d.installError = void 0;
        try {
          await u(o.workflowName), d.phase = "complete";
        } catch (ye) {
          d.error = ye instanceof Error ? ye.message : "Retry failed", d.phase = "error";
        }
      }
    }
    return ot(Me), (ve, K) => (n(), L(Ct, {
      title: `Resolve Dependencies: ${e.workflowName}`,
      size: "lg",
      loading: C.value,
      error: U.value || void 0,
      "fixed-height": !0,
      onClose: K[1] || (K[1] = (ye) => a("close"))
    }, {
      body: g(() => [
        C.value && !k.value ? (n(), i("div", A1, [...K[2] || (K[2] = [
          t("div", { class: "loading-spinner" }, null, -1),
          t("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : k.value ? (n(), i("div", z1, [
          _(zg, {
            steps: D.value,
            "current-step": E.value,
            "completed-steps": T.value,
            "step-stats": be.value,
            onStepChange: Ce
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          E.value === "analysis" ? (n(), i("div", V1, [
            t("div", F1, [
              t("div", B1, [
                K[3] || (K[3] = t("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                t("p", W1, " Found " + m(k.value.stats.total_nodes) + " nodes and " + m(k.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              t("div", G1, [
                t("div", j1, [
                  K[16] || (K[16] = t("div", { class: "stat-header" }, "Nodes", -1)),
                  t("div", H1, [
                    pe.value > 0 ? (n(), i("div", q1, [
                      K[4] || (K[4] = t("span", { class: "stat-icon" }, "✓", -1)),
                      t("span", K1, m(pe.value), 1),
                      K[5] || (K[5] = t("span", { class: "stat-label" }, "resolved", -1))
                    ])) : h("", !0),
                    k.value.stats.packages_needing_installation > 0 ? (n(), i("div", J1, [
                      K[6] || (K[6] = t("span", { class: "stat-icon" }, "⬇", -1)),
                      t("span", Y1, m(k.value.stats.packages_needing_installation), 1),
                      K[7] || (K[7] = t("span", { class: "stat-label" }, "to install", -1))
                    ])) : h("", !0),
                    k.value.nodes.ambiguous.length > 0 ? (n(), i("div", Q1, [
                      K[8] || (K[8] = t("span", { class: "stat-icon" }, "?", -1)),
                      t("span", X1, m(k.value.nodes.ambiguous.length), 1),
                      K[9] || (K[9] = t("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : h("", !0),
                    Z.value.length > 0 ? (n(), i("div", Z1, [
                      K[10] || (K[10] = t("span", { class: "stat-icon" }, "⚠", -1)),
                      t("span", e0, m(Z.value.length), 1),
                      K[11] || (K[11] = t("span", { class: "stat-label" }, "requires newer ComfyUI", -1))
                    ])) : h("", !0),
                    ee.value.length > 0 ? (n(), i("div", t0, [
                      K[12] || (K[12] = t("span", { class: "stat-icon" }, "⚠", -1)),
                      t("span", s0, m(ee.value.length), 1),
                      K[13] || (K[13] = t("span", { class: "stat-label" }, "community-mapped", -1))
                    ])) : h("", !0),
                    k.value.nodes.unresolved.length > 0 ? (n(), i("div", o0, [
                      K[14] || (K[14] = t("span", { class: "stat-icon" }, "✗", -1)),
                      t("span", n0, m(k.value.nodes.unresolved.length), 1),
                      K[15] || (K[15] = t("span", { class: "stat-label" }, "missing", -1))
                    ])) : h("", !0)
                  ])
                ]),
                t("div", a0, [
                  K[27] || (K[27] = t("div", { class: "stat-header" }, "Models", -1)),
                  t("div", l0, [
                    t("div", i0, [
                      K[17] || (K[17] = t("span", { class: "stat-icon" }, "✓", -1)),
                      t("span", r0, m(k.value.models.resolved.length - k.value.stats.download_intents - k.value.stats.models_with_category_mismatch), 1),
                      K[18] || (K[18] = t("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    k.value.stats.download_intents > 0 ? (n(), i("div", u0, [
                      K[19] || (K[19] = t("span", { class: "stat-icon" }, "⬇", -1)),
                      t("span", c0, m(k.value.stats.download_intents), 1),
                      K[20] || (K[20] = t("span", { class: "stat-label" }, "pending download", -1))
                    ])) : h("", !0),
                    Ue.value ? (n(), i("div", d0, [
                      K[21] || (K[21] = t("span", { class: "stat-icon" }, "⚠", -1)),
                      t("span", m0, m(me.value.length), 1),
                      K[22] || (K[22] = t("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : h("", !0),
                    k.value.models.ambiguous.length > 0 ? (n(), i("div", f0, [
                      K[23] || (K[23] = t("span", { class: "stat-icon" }, "?", -1)),
                      t("span", v0, m(k.value.models.ambiguous.length), 1),
                      K[24] || (K[24] = t("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : h("", !0),
                    k.value.models.unresolved.length > 0 ? (n(), i("div", p0, [
                      K[25] || (K[25] = t("span", { class: "stat-icon" }, "✗", -1)),
                      t("span", g0, m(k.value.models.unresolved.length), 1),
                      K[26] || (K[26] = t("span", { class: "stat-label" }, "missing", -1))
                    ])) : h("", !0)
                  ])
                ])
              ]),
              W.value ? (n(), i("div", h0, [
                K[28] || (K[28] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", y0, m(P.value.length + R.value.length) + " items need your input", 1)
              ])) : he.value ? (n(), i("div", w0, [
                K[29] || (K[29] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", _0, m(Z.value.length) + " node type" + m(Z.value.length > 1 ? "s are" : " is") + " blocked and require manual action", 1)
              ])) : ee.value.length > 0 ? (n(), i("div", k0, [
                K[30] || (K[30] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", b0, m(ee.value.length) + " community-mapped node type" + m(ee.value.length > 1 ? "s need" : " needs") + " installation choices", 1)
              ])) : Ne.value ? (n(), i("div", $0, [
                K[31] || (K[31] = t("span", { class: "status-icon" }, "⬇", -1)),
                t("span", C0, m(k.value.stats.packages_needing_installation) + " package" + m(k.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + m(k.value.stats.nodes_needing_installation) + " node type" + m(k.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + m(de.value ? `, ${k.value.stats.download_intents} model${k.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : de.value ? (n(), i("div", x0, [
                K[32] || (K[32] = t("span", { class: "status-icon" }, "⬇", -1)),
                t("span", S0, m(k.value.stats.download_intents) + " model" + m(k.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to Review to proceed", 1)
              ])) : Ue.value ? (n(), i("div", I0, [
                K[33] || (K[33] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", E0, m(me.value.length) + " model" + m(me.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (n(), i("div", T0, [...K[34] || (K[34] = [
                t("span", { class: "status-icon" }, "✓", -1),
                t("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              Ue.value ? (n(), i("div", M0, [
                K[37] || (K[37] = t("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                t("div", P0, [
                  (n(!0), i(G, null, ke(me.value, (ye) => {
                    var He, vt;
                    return n(), i("div", {
                      key: ye.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      t("code", R0, m(ye.actual_category) + "/" + m((He = ye.model) == null ? void 0 : He.filename), 1),
                      K[36] || (K[36] = t("span", { class: "mismatch-arrow" }, "→", -1)),
                      t("code", N0, m((vt = ye.expected_categories) == null ? void 0 : vt[0]) + "/", 1),
                      ye.file_path ? (n(), L(Re, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (Nt) => mt(ye.file_path)
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
              he.value ? (n(), i("div", L0, [
                K[38] || (K[38] = t("h4", { class: "section-subtitle" }, "Blocked node types:", -1)),
                t("div", D0, [
                  (n(!0), i(G, null, ke(Z.value, (ye) => {
                    var He;
                    return n(), i("div", {
                      key: `vg-${ye.reference.node_type}`,
                      class: "mismatch-item"
                    }, [
                      t("code", O0, m(ye.reference.node_type), 1),
                      t("span", U0, m(ye.guidance || ((He = k.value.node_guidance) == null ? void 0 : He[ye.reference.node_type]) || "Requires a newer ComfyUI version."), 1)
                    ]);
                  }), 128))
                ])
              ])) : h("", !0)
            ])
          ])) : h("", !0),
          E.value === "nodes" ? (n(), i("div", A0, [
            _(fy, {
              nodes: P.value,
              "node-choices": N.value,
              "auto-resolved-packages": M.value,
              "skipped-packages": H.value,
              "installed-node-packs": x.value,
              onMarkOptional: te,
              onSkip: Be,
              onOptionSelected: z,
              onManualEntry: X,
              onClearChoice: J,
              onPackageSkip: ze
            }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages", "installed-node-packs"]),
            re.value.length > 0 ? (n(), i("div", z0, [
              t("div", V0, [
                t("h4", F0, "Community-Mapped Packages (" + m(re.value.length) + ")", 1),
                K[39] || (K[39] = t("p", { class: "community-node-description" }, " These mappings are actionable. Default install uses the registry; choose Git only when explicitly needed. ", -1))
              ]),
              t("div", B0, [
                (n(!0), i(G, null, ke(re.value, (ye) => (n(), i("div", {
                  key: `community-${ye.reference.node_type}-${ye.package.package_id}`,
                  class: "community-node-item"
                }, [
                  t("div", W0, [
                    t("div", G0, [
                      t("code", j0, m(ye.reference.node_type), 1),
                      t("span", H0, m(ye.package.title || ye.package.package_id), 1)
                    ]),
                    t("div", q0, m(ye.package.package_id), 1),
                    t("div", K0, [
                      K[40] || (K[40] = $(" Found via community mapping — registry metadata may be incomplete. ", -1)),
                      ye.guidance ? (n(), i("span", J0, m(ye.guidance), 1)) : h("", !0)
                    ]),
                    t("div", Y0, m(I(ye.reference.node_type)), 1)
                  ]),
                  t("div", Q0, [
                    _(Re, {
                      size: "sm",
                      variant: "secondary",
                      disabled: !ye.package.package_id,
                      onClick: (He) => ie(ye, "registry")
                    }, {
                      default: g(() => [...K[41] || (K[41] = [
                        $(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled", "onClick"]),
                    ye.package.repository ? (n(), L(Re, {
                      key: 0,
                      size: "sm",
                      variant: "ghost",
                      disabled: !ye.package.package_id,
                      onClick: (He) => ie(ye, "git")
                    }, {
                      default: g(() => [...K[42] || (K[42] = [
                        $(" Install via Git ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled", "onClick"])) : h("", !0),
                    _(Re, {
                      size: "sm",
                      variant: "secondary",
                      onClick: (He) => ce(ye.reference.node_type)
                    }, {
                      default: g(() => [...K[43] || (K[43] = [
                        $(" Optional ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    _(Re, {
                      size: "sm",
                      variant: "secondary",
                      onClick: (He) => Ae(ye.reference.node_type)
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
          E.value === "models" ? (n(), L(l1, {
            key: 2,
            models: ue.value,
            "model-choices": A.value,
            onMarkOptional: Ee,
            onSkip: qe,
            onOptionSelected: Qe,
            onDownloadUrl: at,
            onClearChoice: rt
          }, null, 8, ["models", "model-choices"])) : h("", !0),
          E.value === "review" ? (n(), i("div", X0, [
            t("div", Z0, [
              K[50] || (K[50] = t("div", { class: "review-header" }, [
                t("h3", { class: "summary-title" }, "Review Your Choices"),
                t("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              t("div", ew, [
                t("div", tw, [
                  t("span", sw, m(F.value), 1),
                  K[45] || (K[45] = t("span", { class: "stat-label" }, "to install", -1))
                ]),
                t("div", ow, [
                  t("span", nw, m(B.value), 1),
                  K[46] || (K[46] = t("span", { class: "stat-label" }, "to download", -1))
                ]),
                t("div", aw, [
                  t("span", lw, m(q.value), 1),
                  K[47] || (K[47] = t("span", { class: "stat-label" }, "optional", -1))
                ]),
                t("div", iw, [
                  t("span", rw, m(we.value), 1),
                  K[48] || (K[48] = t("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              M.value.length > 0 ? (n(), i("div", uw, [
                t("h4", cw, "Node Packages (" + m(M.value.length) + ")", 1),
                t("div", dw, [
                  (n(!0), i(G, null, ke(M.value, (ye) => (n(), i("div", {
                    key: ye.package_id,
                    class: "review-item"
                  }, [
                    t("code", mw, m(ye.package_id), 1),
                    t("div", fw, [
                      H.value.has(ye.package_id) ? (n(), i("span", pw, "Skipped")) : (n(), i("span", vw, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : h("", !0),
              re.value.length > 0 ? (n(), i("div", gw, [
                t("h4", hw, "Community-Mapped Packages (" + m(re.value.length) + ")", 1),
                t("div", yw, [
                  (n(!0), i(G, null, ke(re.value, (ye) => {
                    var He, vt, Nt;
                    return n(), i("div", {
                      key: `review-community-${ye.reference.node_type}-${ye.package.package_id}`,
                      class: "review-item"
                    }, [
                      t("code", ww, m(ye.reference.node_type), 1),
                      t("div", _w, [
                        ((He = ge(ye.reference.node_type)) == null ? void 0 : He.action) === "install" ? (n(), i("span", kw, m(((vt = ge(ye.reference.node_type)) == null ? void 0 : vt.install_source) === "git" ? "Install via Git" : "Install from Registry"), 1)) : ((Nt = ge(ye.reference.node_type)) == null ? void 0 : Nt.action) === "optional" ? (n(), i("span", bw, " Optional ")) : (n(), i("span", $w, " Skip "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : h("", !0),
              P.value.length > 0 ? (n(), i("div", Cw, [
                t("h4", xw, "Node Choices (" + m(P.value.length) + ")", 1),
                t("div", Sw, [
                  (n(!0), i(G, null, ke(P.value, (ye) => {
                    var He, vt, Nt, tt;
                    return n(), i("div", {
                      key: ye.node_type,
                      class: "review-item"
                    }, [
                      t("code", Iw, m(ye.node_type), 1),
                      t("div", Ew, [
                        N.value.has(ye.node_type) ? (n(), i(G, { key: 0 }, [
                          ((He = N.value.get(ye.node_type)) == null ? void 0 : He.action) === "install" ? (n(), i("span", Tw, m((vt = N.value.get(ye.node_type)) == null ? void 0 : vt.package_id), 1)) : ((Nt = N.value.get(ye.node_type)) == null ? void 0 : Nt.action) === "optional" ? (n(), i("span", Mw, " Optional ")) : ((tt = N.value.get(ye.node_type)) == null ? void 0 : tt.action) === "skip" ? (n(), i("span", Pw, " Skip ")) : h("", !0)
                        ], 64)) : (n(), i("span", Rw, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : h("", !0),
              Ve.value.length > 0 ? (n(), i("div", Nw, [
                t("h4", Lw, "Models to Download (" + m(Ve.value.length) + ")", 1),
                t("div", Dw, [
                  (n(!0), i(G, null, ke(Ve.value, (ye) => (n(), i("div", {
                    key: ye.filename,
                    class: "review-item download-item"
                  }, [
                    t("div", Ow, [
                      t("code", Uw, m(ye.filename), 1),
                      t("div", Aw, [
                        t("span", zw, "→ " + m(ye.target_path), 1),
                        ye.url ? (n(), i("span", {
                          key: 0,
                          class: "download-url",
                          title: ye.url
                        }, m(je(ye.url)), 9, Vw)) : h("", !0)
                      ])
                    ]),
                    K[49] || (K[49] = t("span", { class: "choice-badge download" }, "Will Download", -1))
                  ]))), 128))
                ])
              ])) : h("", !0),
              ue.value.length > 0 ? (n(), i("div", Fw, [
                t("h4", Bw, "Models (" + m(ue.value.length) + ")", 1),
                t("div", Ww, [
                  (n(!0), i(G, null, ke(ue.value, (ye) => {
                    var He, vt, Nt, tt, Pt, Is, Jt;
                    return n(), i("div", {
                      key: ye.filename,
                      class: "review-item"
                    }, [
                      t("code", Gw, m(ye.filename), 1),
                      t("div", jw, [
                        A.value.has(ye.filename) ? (n(), i(G, { key: 0 }, [
                          ((He = A.value.get(ye.filename)) == null ? void 0 : He.action) === "select" ? (n(), i("span", Hw, m((Nt = (vt = A.value.get(ye.filename)) == null ? void 0 : vt.selected_model) == null ? void 0 : Nt.filename), 1)) : ((tt = A.value.get(ye.filename)) == null ? void 0 : tt.action) === "download" ? (n(), i("span", qw, " Download ")) : ((Pt = A.value.get(ye.filename)) == null ? void 0 : Pt.action) === "optional" ? (n(), i("span", Kw, " Optional ")) : ((Is = A.value.get(ye.filename)) == null ? void 0 : Is.action) === "skip" ? (n(), i("span", Jw, " Skip ")) : ((Jt = A.value.get(ye.filename)) == null ? void 0 : Jt.action) === "cancel_download" ? (n(), i("span", Yw, " Cancel Download ")) : h("", !0)
                        ], 64)) : ye.is_download_intent ? (n(), i("span", Qw, " Pending Download ")) : (n(), i("span", Xw, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : h("", !0),
              oe.value.length === 0 && re.value.length === 0 && P.value.length === 0 && ue.value.length === 0 ? (n(), i("div", Zw, " No dependencies need resolution. ")) : h("", !0)
            ])
          ])) : h("", !0),
          E.value === "applying" ? (n(), L(U1, {
            key: 4,
            progress: Ye(d),
            onRestart: Wt,
            onRetryFailed: ut
          }, null, 8, ["progress"])) : h("", !0)
        ])) : h("", !0)
      ]),
      footer: g(() => [
        E.value !== "analysis" && E.value !== "applying" ? (n(), L(Re, {
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
        E.value !== "applying" || Ye(d).phase === "complete" || Ye(d).phase === "error" ? (n(), L(Re, {
          key: 1,
          variant: "secondary",
          onClick: K[0] || (K[0] = (ye) => a("close"))
        }, {
          default: g(() => [
            $(m(Ye(d).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : h("", !0),
        E.value === "analysis" ? (n(), L(Re, {
          key: 2,
          variant: "primary",
          disabled: C.value,
          onClick: _e
        }, {
          default: g(() => [
            $(m(se.value === "review" ? "Continue to Review →" : "Continue"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : h("", !0),
        E.value === "nodes" ? (n(), L(Re, {
          key: 3,
          variant: "primary",
          onClick: Le
        }, {
          default: g(() => [
            $(m(Q.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : h("", !0),
        E.value === "models" ? (n(), L(Re, {
          key: 4,
          variant: "primary",
          onClick: Le
        }, {
          default: g(() => [...K[52] || (K[52] = [
            $(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : h("", !0),
        E.value === "review" ? (n(), L(Re, {
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
}), t_ = /* @__PURE__ */ Ie(e_, [["__scopeId", "data-v-49848358"]]), s_ = { class: "search-input-wrapper" }, o_ = ["value", "placeholder"], n_ = /* @__PURE__ */ Se({
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
    }), (d, v) => (n(), i("div", s_, [
      t("input", {
        ref_key: "inputRef",
        ref: l,
        value: e.modelValue,
        type: "text",
        placeholder: e.placeholder,
        class: "search-input",
        onInput: u,
        onKeyup: ts(c, ["escape"])
      }, null, 40, o_),
      e.clearable && e.modelValue ? (n(), i("button", {
        key: 0,
        class: "clear-button",
        onClick: c,
        title: "Clear search"
      }, " ✕ ")) : h("", !0)
    ]));
  }
}), a_ = /* @__PURE__ */ Ie(n_, [["__scopeId", "data-v-266f857a"]]), l_ = { class: "search-bar" }, i_ = /* @__PURE__ */ Se({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(e) {
    return (s, o) => (n(), i("div", l_, [
      _(a_, {
        "model-value": e.modelValue,
        placeholder: e.placeholder,
        debounce: e.debounce,
        clearable: e.clearable,
        "onUpdate:modelValue": o[0] || (o[0] = (a) => s.$emit("update:modelValue", a)),
        onClear: o[1] || (o[1] = (a) => s.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), mo = /* @__PURE__ */ Ie(i_, [["__scopeId", "data-v-3d51bbfd"]]), r_ = { class: "section-group" }, u_ = {
  key: 0,
  class: "section-content"
}, c_ = /* @__PURE__ */ Se({
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
    return (u, c) => (n(), i("section", r_, [
      _(as, {
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
      !e.collapsible || l.value ? (n(), i("div", u_, [
        et(u.$slots, "default", {}, void 0)
      ])) : h("", !0)
    ]));
  }
}), bt = /* @__PURE__ */ Ie(c_, [["__scopeId", "data-v-c48e33ed"]]), d_ = { class: "item-header" }, m_ = {
  key: 0,
  class: "item-icon"
}, f_ = { class: "item-info" }, v_ = {
  key: 0,
  class: "item-title"
}, p_ = {
  key: 1,
  class: "item-subtitle"
}, g_ = {
  key: 0,
  class: "item-details"
}, h_ = {
  key: 1,
  class: "item-actions"
}, y_ = /* @__PURE__ */ Se({
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
      t("div", d_, [
        l.$slots.icon ? (n(), i("span", m_, [
          et(l.$slots, "icon", {}, void 0)
        ])) : h("", !0),
        t("div", f_, [
          l.$slots.title ? (n(), i("div", v_, [
            et(l.$slots, "title", {}, void 0)
          ])) : h("", !0),
          l.$slots.subtitle ? (n(), i("div", p_, [
            et(l.$slots, "subtitle", {}, void 0)
          ])) : h("", !0)
        ])
      ]),
      l.$slots.details ? (n(), i("div", g_, [
        et(l.$slots, "details", {}, void 0)
      ])) : h("", !0),
      l.$slots.actions ? (n(), i("div", h_, [
        et(l.$slots, "actions", {}, void 0)
      ])) : h("", !0)
    ], 2));
  }
}), At = /* @__PURE__ */ Ie(y_, [["__scopeId", "data-v-cc435e0e"]]), w_ = { class: "loading-state" }, __ = { class: "loading-message" }, k_ = /* @__PURE__ */ Se({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(e) {
    return (s, o) => (n(), i("div", w_, [
      o[0] || (o[0] = t("div", { class: "spinner" }, null, -1)),
      t("p", __, m(e.message), 1)
    ]));
  }
}), xs = /* @__PURE__ */ Ie(k_, [["__scopeId", "data-v-ad8436c9"]]), b_ = { class: "error-state" }, $_ = { class: "error-message" }, C_ = /* @__PURE__ */ Se({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(e) {
    return (s, o) => (n(), i("div", b_, [
      o[2] || (o[2] = t("span", { class: "error-icon" }, "⚠", -1)),
      t("p", $_, m(e.message), 1),
      e.retry ? (n(), L(xe, {
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
}), Ss = /* @__PURE__ */ Ie(C_, [["__scopeId", "data-v-5397be48"]]), x_ = /* @__PURE__ */ Se({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(e, { expose: s, emit: o }) {
    const a = o, { getWorkflows: l } = dt(), r = b([]), u = b(!1), c = b(null), d = b(""), v = b(!0), f = b(!1), p = b(!1), w = b(!1), y = b(!1), k = b(null), x = O(
      () => r.value.filter((se) => se.status === "broken")
    ), C = O(
      () => r.value.filter((se) => se.status === "new")
    ), S = O(
      () => r.value.filter((se) => se.status === "modified")
    ), U = O(
      () => r.value.filter((se) => se.status === "synced")
    ), E = O(() => {
      if (!d.value.trim()) return r.value;
      const se = d.value.toLowerCase();
      return r.value.filter((oe) => oe.name.toLowerCase().includes(se));
    }), T = O(
      () => x.value.filter(
        (se) => !d.value.trim() || se.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), N = O(
      () => C.value.filter(
        (se) => !d.value.trim() || se.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), A = O(
      () => S.value.filter(
        (se) => !d.value.trim() || se.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), H = O(
      () => U.value.filter(
        (se) => !d.value.trim() || se.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), D = O(
      () => f.value ? H.value : H.value.slice(0, 5)
    );
    async function W(se = !1) {
      u.value = !0, c.value = null;
      try {
        r.value = await l(se);
      } catch (oe) {
        c.value = oe instanceof Error ? oe.message : "Failed to load workflows";
      } finally {
        u.value = !1;
      }
    }
    s({ loadWorkflows: W });
    function Z(se) {
      k.value = se, p.value = !0;
    }
    function ee(se) {
      k.value = se, w.value = !0;
    }
    function re(se) {
      k.value = se, y.value = !0;
    }
    function he(se) {
      var V;
      const M = (V = se.detail) == null ? void 0 : V.workflowName;
      M && re(M);
    }
    function ne() {
      a("refresh");
    }
    async function Q() {
      w.value = !1, await W(!0);
    }
    async function de() {
      await W(!0), a("refresh");
    }
    async function Ne() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function le(se) {
      return se.replace(/uninstallable node mappings?/gi, (oe) => oe.toLowerCase().endsWith("s") ? "community packages" : "community package").replace(/no installable package versions?/gi, "need community packages").replace(/\bare uninstallable\b/gi, "need community packages").replace(/\buninstallable\b/gi, "community-mapped");
    }
    function pe(se) {
      if (se.issue_summary && se.issue_summary.trim().length > 0)
        return le(se.issue_summary);
      const oe = [];
      return se.version_gated_count && se.version_gated_count > 0 && oe.push(`${se.version_gated_count} node${se.version_gated_count > 1 ? "s" : ""} require newer ComfyUI`), se.uninstallable_count && se.uninstallable_count > 0 && oe.push(`${se.uninstallable_count} node${se.uninstallable_count > 1 ? "s" : ""} need community packages`), se.missing_nodes > 0 && oe.push(`${se.missing_nodes} missing node${se.missing_nodes > 1 ? "s" : ""}`), se.missing_models > 0 && oe.push(`${se.missing_models} missing model${se.missing_models > 1 ? "s" : ""}`), se.models_with_category_mismatch && se.models_with_category_mismatch > 0 && oe.push(`${se.models_with_category_mismatch} model${se.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), se.pending_downloads && se.pending_downloads > 0 && oe.push(`${se.pending_downloads} pending download${se.pending_downloads > 1 ? "s" : ""}`), oe.length > 0 ? oe.join(", ") : "Has issues";
    }
    function me(se) {
      const oe = se.sync_state === "new" ? "New" : se.sync_state === "modified" ? "Modified" : se.sync_state === "synced" ? "Synced" : se.sync_state, M = Ue(se);
      return se.has_path_sync_issues && se.models_needing_path_sync && se.models_needing_path_sync > 0 ? `${se.models_needing_path_sync} model path${se.models_needing_path_sync > 1 ? "s" : ""} need${se.models_needing_path_sync === 1 ? "s" : ""} sync · ${M}` : `${oe || "Unknown"} · ${M}`;
    }
    function Ue(se) {
      const oe = se.contract_summary;
      return !oe || !oe.has_contract ? "No contract" : oe.status === "incomplete" ? `${oe.input_count} in / ${oe.output_count} out · incomplete` : `${oe.input_count} in / ${oe.output_count} out`;
    }
    return ot(() => {
      W(), window.addEventListener("comfygit:open-workflow-contract", he);
    }), ia(() => {
      window.removeEventListener("comfygit:open-workflow-contract", he);
    }), (se, oe) => (n(), i(G, null, [
      _(Tt, null, {
        header: g(() => [
          _(Mt, { title: "WORKFLOWS" })
        ]),
        search: g(() => [
          _(mo, {
            modelValue: d.value,
            "onUpdate:modelValue": oe[0] || (oe[0] = (M) => d.value = M),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          u.value ? (n(), L(xs, {
            key: 0,
            message: "Loading workflows..."
          })) : c.value ? (n(), L(Ss, {
            key: 1,
            message: c.value,
            retry: !0,
            onRetry: W
          }, null, 8, ["message"])) : (n(), i(G, { key: 2 }, [
            T.value.length ? (n(), L(bt, {
              key: 0,
              title: "BROKEN",
              count: T.value.length
            }, {
              default: g(() => [
                (n(!0), i(G, null, ke(T.value, (M) => (n(), L(At, {
                  key: M.name,
                  status: "broken"
                }, {
                  icon: g(() => [...oe[8] || (oe[8] = [
                    $("⚠", -1)
                  ])]),
                  title: g(() => [
                    $(m(M.name), 1)
                  ]),
                  subtitle: g(() => [
                    $(m(pe(M)), 1)
                  ]),
                  actions: g(() => [
                    _(xe, {
                      variant: "primary",
                      size: "sm",
                      onClick: (V) => ee(M.name)
                    }, {
                      default: g(() => [...oe[9] || (oe[9] = [
                        $(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    _(xe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (V) => re(M.name)
                    }, {
                      default: g(() => [...oe[10] || (oe[10] = [
                        $(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    _(xe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (V) => Z(M.name)
                    }, {
                      default: g(() => [...oe[11] || (oe[11] = [
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
                (n(!0), i(G, null, ke(N.value, (M) => (n(), L(At, {
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
                    _(xe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (V) => re(M.name)
                    }, {
                      default: g(() => [...oe[12] || (oe[12] = [
                        $(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    _(xe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (V) => Z(M.name)
                    }, {
                      default: g(() => [...oe[13] || (oe[13] = [
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
            A.value.length ? (n(), L(bt, {
              key: 2,
              title: "MODIFIED",
              count: A.value.length
            }, {
              default: g(() => [
                (n(!0), i(G, null, ke(A.value, (M) => (n(), L(At, {
                  key: M.name,
                  status: M.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: g(() => [...oe[14] || (oe[14] = [
                    $("⚡", -1)
                  ])]),
                  title: g(() => [
                    $(m(M.name), 1)
                  ]),
                  subtitle: g(() => [
                    $(m(me(M)), 1)
                  ]),
                  actions: g(() => [
                    _(xe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (V) => re(M.name)
                    }, {
                      default: g(() => [...oe[15] || (oe[15] = [
                        $(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    _(xe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (V) => Z(M.name)
                    }, {
                      default: g(() => [...oe[16] || (oe[16] = [
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
            H.value.length ? (n(), L(bt, {
              key: 3,
              title: "SYNCED",
              count: H.value.length,
              collapsible: !0,
              "initially-expanded": v.value,
              onToggle: oe[2] || (oe[2] = (M) => v.value = M)
            }, {
              default: g(() => [
                (n(!0), i(G, null, ke(D.value, (M) => (n(), L(At, {
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
                    _(xe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (V) => re(M.name)
                    }, {
                      default: g(() => [...oe[17] || (oe[17] = [
                        $(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    _(xe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (V) => Z(M.name)
                    }, {
                      default: g(() => [...oe[18] || (oe[18] = [
                        $(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !f.value && H.value.length > 5 ? (n(), L(xe, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: oe[1] || (oe[1] = (M) => f.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: g(() => [
                    $(" View all " + m(H.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : h("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : h("", !0),
            E.value.length ? h("", !0) : (n(), L(us, {
              key: 4,
              icon: "📭",
              message: d.value ? `No workflows match '${d.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      p.value && k.value ? (n(), L(Fp, {
        key: 0,
        "workflow-name": k.value,
        onClose: oe[3] || (oe[3] = (M) => p.value = !1),
        onResolve: oe[4] || (oe[4] = (M) => ee(k.value)),
        onRefresh: oe[5] || (oe[5] = (M) => a("refresh"))
      }, null, 8, ["workflow-name"])) : h("", !0),
      w.value && k.value ? (n(), L(t_, {
        key: 1,
        "workflow-name": k.value,
        onClose: Q,
        onInstall: ne,
        onRefresh: oe[6] || (oe[6] = (M) => a("refresh")),
        onRestart: Ne
      }, null, 8, ["workflow-name"])) : h("", !0),
      y.value && k.value ? (n(), L(Ig, {
        key: 2,
        "workflow-name": k.value,
        onClose: oe[7] || (oe[7] = (M) => y.value = !1),
        onRefresh: de
      }, null, 8, ["workflow-name"])) : h("", !0)
    ], 64));
  }
}), S_ = /* @__PURE__ */ Ie(x_, [["__scopeId", "data-v-894ef6ed"]]), I_ = /* @__PURE__ */ Se({
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
}), gn = /* @__PURE__ */ Ie(I_, [["__scopeId", "data-v-ccb7816e"]]), E_ = {
  key: 0,
  class: "model-details"
}, T_ = { class: "detail-section" }, M_ = { class: "detail-row" }, P_ = { class: "detail-value mono" }, R_ = { class: "detail-row" }, N_ = { class: "detail-value mono" }, L_ = { class: "detail-row" }, D_ = { class: "detail-value mono" }, O_ = { class: "detail-row" }, U_ = { class: "detail-value" }, A_ = { class: "detail-row" }, z_ = { class: "detail-value" }, V_ = { class: "detail-row" }, F_ = { class: "detail-value" }, B_ = { class: "detail-section" }, W_ = { class: "section-header" }, G_ = {
  key: 0,
  class: "locations-list"
}, j_ = { class: "location-path mono" }, H_ = {
  key: 0,
  class: "location-modified"
}, q_ = ["onClick"], K_ = {
  key: 1,
  class: "empty-state"
}, J_ = { class: "detail-section" }, Y_ = { class: "section-header" }, Q_ = {
  key: 0,
  class: "sources-list"
}, X_ = { class: "source-type" }, Z_ = ["href"], ek = ["disabled", "onClick"], tk = {
  key: 1,
  class: "empty-state"
}, sk = { class: "add-source-form" }, ok = ["disabled"], nk = {
  key: 2,
  class: "source-error"
}, ak = {
  key: 3,
  class: "source-success"
}, lk = /* @__PURE__ */ Se({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(e, { emit: s }) {
    const o = e, { getModelDetails: a, addModelSource: l, removeModelSource: r, openFileLocation: u } = dt(), c = b(null), d = b(!0), v = b(null), f = b(""), p = b(!1), w = b(null), y = b(null), k = b(null), x = b(null);
    let C = null;
    function S(D, W = "success", Z = 2e3) {
      C && clearTimeout(C), x.value = { message: D, type: W }, C = setTimeout(() => {
        x.value = null;
      }, Z);
    }
    function U(D) {
      if (!D) return "Unknown";
      const W = 1024 * 1024 * 1024, Z = 1024 * 1024;
      return D >= W ? `${(D / W).toFixed(1)} GB` : D >= Z ? `${(D / Z).toFixed(0)} MB` : `${(D / 1024).toFixed(0)} KB`;
    }
    function E(D) {
      navigator.clipboard.writeText(D), S("Copied to clipboard!");
    }
    async function T(D) {
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
          await l(c.value.hash, f.value.trim()), k.value = "Source added successfully!", f.value = "", await H();
        } catch (D) {
          y.value = D instanceof Error ? D.message : "Failed to add source";
        } finally {
          p.value = !1;
        }
      }
    }
    async function A(D) {
      if (c.value) {
        w.value = D, y.value = null, k.value = null;
        try {
          await r(c.value.hash, D), S("Source removed"), await H();
        } catch (W) {
          y.value = W instanceof Error ? W.message : "Failed to remove source";
        } finally {
          w.value = null;
        }
      }
    }
    async function H() {
      d.value = !0, v.value = null;
      try {
        c.value = await a(o.identifier);
      } catch (D) {
        v.value = D instanceof Error ? D.message : "Failed to load model details";
      } finally {
        d.value = !1;
      }
    }
    return ot(H), (D, W) => {
      var Z;
      return n(), i(G, null, [
        _(Ct, {
          title: `Model Details: ${((Z = c.value) == null ? void 0 : Z.filename) || "Loading..."}`,
          size: "lg",
          loading: d.value,
          error: v.value,
          onClose: W[5] || (W[5] = (ee) => D.$emit("close"))
        }, {
          body: g(() => {
            var ee, re, he, ne;
            return [
              c.value ? (n(), i("div", E_, [
                t("section", T_, [
                  t("div", M_, [
                    W[6] || (W[6] = t("span", { class: "detail-label" }, "Hash:", -1)),
                    t("span", P_, m(c.value.hash || "Not computed"), 1),
                    c.value.hash ? (n(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: W[0] || (W[0] = (Q) => E(c.value.hash))
                    }, "Copy")) : h("", !0)
                  ]),
                  t("div", R_, [
                    W[7] || (W[7] = t("span", { class: "detail-label" }, "Blake3:", -1)),
                    t("span", N_, m(c.value.blake3 || "Not computed"), 1),
                    c.value.blake3 ? (n(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: W[1] || (W[1] = (Q) => E(c.value.blake3))
                    }, "Copy")) : h("", !0)
                  ]),
                  t("div", L_, [
                    W[8] || (W[8] = t("span", { class: "detail-label" }, "SHA256:", -1)),
                    t("span", D_, m(c.value.sha256 || "Not computed"), 1),
                    c.value.sha256 ? (n(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: W[2] || (W[2] = (Q) => E(c.value.sha256))
                    }, "Copy")) : h("", !0)
                  ]),
                  t("div", O_, [
                    W[9] || (W[9] = t("span", { class: "detail-label" }, "Size:", -1)),
                    t("span", U_, m(U(c.value.size)), 1)
                  ]),
                  t("div", A_, [
                    W[10] || (W[10] = t("span", { class: "detail-label" }, "Category:", -1)),
                    t("span", z_, m(c.value.category), 1)
                  ]),
                  t("div", V_, [
                    W[11] || (W[11] = t("span", { class: "detail-label" }, "Last Seen:", -1)),
                    t("span", F_, m(c.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                t("section", B_, [
                  t("h4", W_, "Locations (" + m(((ee = c.value.locations) == null ? void 0 : ee.length) || 0) + ")", 1),
                  (re = c.value.locations) != null && re.length ? (n(), i("div", G_, [
                    (n(!0), i(G, null, ke(c.value.locations, (Q, de) => (n(), i("div", {
                      key: de,
                      class: "location-item"
                    }, [
                      t("span", j_, m(Q.path), 1),
                      Q.modified ? (n(), i("span", H_, "Modified: " + m(Q.modified), 1)) : h("", !0),
                      Q.path ? (n(), i("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (Ne) => T(Q.path)
                      }, " Open File Location ", 8, q_)) : h("", !0)
                    ]))), 128))
                  ])) : (n(), i("div", K_, "No locations found"))
                ]),
                t("section", J_, [
                  t("h4", Y_, "Download Sources (" + m(((he = c.value.sources) == null ? void 0 : he.length) || 0) + ")", 1),
                  (ne = c.value.sources) != null && ne.length ? (n(), i("div", Q_, [
                    (n(!0), i(G, null, ke(c.value.sources, (Q, de) => (n(), i("div", {
                      key: de,
                      class: "source-item"
                    }, [
                      t("span", X_, m(Q.type) + ":", 1),
                      t("a", {
                        href: Q.url,
                        target: "_blank",
                        class: "source-url"
                      }, m(Q.url), 9, Z_),
                      t("button", {
                        class: "remove-source-btn",
                        disabled: w.value === Q.url,
                        onClick: (Ne) => A(Q.url)
                      }, m(w.value === Q.url ? "..." : "×"), 9, ek)
                    ]))), 128))
                  ])) : (n(), i("div", tk, " No download sources configured ")),
                  t("div", sk, [
                    St(t("input", {
                      "onUpdate:modelValue": W[3] || (W[3] = (Q) => f.value = Q),
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
                    }, m(p.value ? "Adding..." : "Add Source"), 9, ok)
                  ]),
                  y.value ? (n(), i("p", nk, m(y.value), 1)) : h("", !0),
                  k.value ? (n(), i("p", ak, m(k.value), 1)) : h("", !0)
                ])
              ])) : h("", !0)
            ];
          }),
          footer: g(() => [
            t("button", {
              class: "btn-secondary",
              onClick: W[4] || (W[4] = (ee) => D.$emit("close"))
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
}), Ml = /* @__PURE__ */ Ie(lk, [["__scopeId", "data-v-f15cbb56"]]), ik = ["disabled"], rk = { class: "dropdown-value" }, uk = ["onClick"], ck = {
  key: 0,
  class: "dropdown-error"
}, dk = /* @__PURE__ */ Se({
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
      const S = r.value.getBoundingClientRect(), U = window.innerHeight, E = U - S.bottom, T = S.top, N = Math.min(300, o.options.length * 36 + 8), A = E < N && T > E;
      c.value = {
        position: "fixed",
        left: `${S.left}px`,
        width: `${S.width}px`,
        maxHeight: "300px",
        ...A ? { bottom: `${U - S.top + 4}px` } : { top: `${S.bottom + 4}px` }
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
        t("span", rk, m(f.value), 1),
        U[0] || (U[0] = t("span", { class: "dropdown-arrow" }, "▼", -1))
      ], 10, ik),
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
          (n(!0), i(G, null, ke(e.options, (E) => (n(), i("div", {
            key: d(E),
            class: De(["dropdown-option", { selected: d(E) === e.modelValue }]),
            onClick: (T) => y(E)
          }, m(v(E)), 11, uk))), 128))
        ], 4)) : h("", !0)
      ])),
      e.error ? (n(), i("span", ck, m(e.error), 1)) : h("", !0)
    ], 512));
  }
}), mk = /* @__PURE__ */ Ie(dk, [["__scopeId", "data-v-857e085b"]]);
function fk(e) {
  const s = e.toLowerCase();
  return s === "huggingface.co" || s.endsWith(".huggingface.co") || s === "hf.co";
}
function vk(e) {
  const s = e.trim();
  if (!s) return { kind: "unknown" };
  let o;
  try {
    o = new URL(s);
  } catch {
    return { kind: "unknown" };
  }
  if (!fk(o.hostname)) return { kind: "unknown" };
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
function pk(e) {
  return e.split("/").map(encodeURIComponent).join("/");
}
function gk(e, s, o) {
  const [a, l] = e.split("/");
  return `https://huggingface.co/${encodeURIComponent(a)}/${encodeURIComponent(l)}/resolve/${encodeURIComponent(s)}/${pk(o)}`;
}
const hk = { class: "hf-file-browser" }, yk = { class: "browser-header" }, wk = { class: "repo-info" }, _k = { class: "repo-id" }, kk = {
  key: 0,
  class: "revision-pill"
}, bk = {
  key: 0,
  class: "loading-state"
}, $k = {
  key: 1,
  class: "error-state"
}, Ck = { class: "toolbar" }, xk = { class: "toolbar-actions" }, Sk = { class: "file-list-container" }, Ik = {
  key: 0,
  class: "file-list-header"
}, Ek = ["checked", "indeterminate"], Tk = { class: "sort-indicator" }, Mk = { class: "sort-indicator" }, Pk = {
  key: 1,
  class: "empty-state"
}, Rk = {
  key: 2,
  class: "file-list"
}, Nk = ["onClick"], Lk = ["checked", "onChange"], Dk = { class: "file-path" }, Ok = { class: "file-size" }, Uk = { class: "destination-section" }, Ak = { class: "destination-row" }, zk = {
  key: 0,
  class: "path-separator"
}, Vk = { class: "action-bar" }, Fk = { class: "summary-info" }, Bk = { class: "summary-count" }, Wk = { class: "summary-size" }, Gk = /* @__PURE__ */ Se({
  __name: "HfFileBrowser",
  props: {
    repoId: {},
    revision: {},
    initialPath: {},
    preselectedFile: {}
  },
  emits: ["queue", "back"],
  setup(e, { emit: s }) {
    const o = e, a = s, { getHuggingFaceRepoInfo: l, getModelsSubdirectories: r } = dt(), u = b([]), c = b(/* @__PURE__ */ new Set()), d = b(!1), v = b(null), f = b(""), p = b(!1), w = b("name"), y = b(!0), k = b(""), x = b(""), C = b(""), S = b([]), U = b(!1);
    let E = !1;
    const T = /^(.*)-(\d{4,5})-of-(\d{4,5})(\.[^.]+)$/i, N = O(() => {
      let V = u.value;
      if (o.initialPath) {
        const j = o.initialPath.endsWith("/") ? o.initialPath : `${o.initialPath}/`;
        V = V.filter((P) => P.path.startsWith(j) || P.path === o.initialPath);
      }
      if (p.value && (V = V.filter((j) => j.is_model_file)), f.value.trim()) {
        const j = f.value.toLowerCase();
        V = V.filter((P) => P.path.toLowerCase().includes(j));
      }
      return V;
    }), A = O(() => {
      const V = [...N.value];
      return V.sort((j, P) => {
        let R;
        return w.value === "name" ? R = j.path.localeCompare(P.path) : R = j.size - P.size, y.value ? R : -R;
      }), V;
    }), H = O(() => N.value.length === 0 ? !1 : N.value.every((V) => c.value.has(V.path))), D = O(() => N.value.some((V) => c.value.has(V.path))), W = O(() => {
      const V = S.value.map((j) => ({
        label: j,
        value: j
      }));
      return V.push({ label: "Custom path...", value: "__custom__" }), V;
    }), Z = O(() => k.value === "__custom__" ? C.value.trim().length > 0 : k.value.length > 0), ee = O(() => {
      let V = 0;
      for (const j of c.value) {
        const P = u.value.find((R) => R.path === j);
        P && (V += P.size);
      }
      return V;
    });
    function re(V) {
      if (V === 0) return "0 B";
      const j = 1024 * 1024 * 1024, P = 1024 * 1024, R = 1024;
      return V >= j ? `${(V / j).toFixed(2)} GB` : V >= P ? `${(V / P).toFixed(1)} MB` : V >= R ? `${(V / R).toFixed(0)} KB` : `${V} B`;
    }
    function he(V) {
      const j = V.match(T);
      return j ? `${j[1]}${j[4]}` : null;
    }
    function ne(V) {
      const j = new Set(c.value), P = j.has(V.path), R = V.shard_group || he(V.path);
      if (R) {
        const ue = u.value.filter((Ve) => (Ve.shard_group || he(Ve.path)) === R);
        P ? ue.forEach((Ve) => j.delete(Ve.path)) : ue.forEach((Ve) => j.add(Ve.path));
      } else
        P ? j.delete(V.path) : j.add(V.path);
      c.value = j;
    }
    function Q() {
      const V = new Set(c.value);
      for (const j of N.value)
        j.is_model_file && V.add(j.path);
      c.value = V;
    }
    function de() {
      c.value = /* @__PURE__ */ new Set();
    }
    function Ne() {
      if (H.value) {
        const V = new Set(c.value);
        for (const j of N.value)
          V.delete(j.path);
        c.value = V;
      } else {
        const V = new Set(c.value);
        for (const j of N.value)
          V.add(j.path);
        c.value = V;
      }
    }
    function le(V) {
      w.value === V ? y.value = !y.value : (w.value = V, y.value = !0);
    }
    function pe(V) {
      const j = V.split("/");
      return j.length >= 2 ? j[j.length - 2] : null;
    }
    function me() {
      if (U.value || c.value.size === 0) return;
      const V = /* @__PURE__ */ new Set();
      for (const R of c.value) {
        const ue = pe(R);
        ue && V.add(ue.toLowerCase());
      }
      if (V.size !== 1) return;
      const j = [...V][0], P = S.value.find(
        (R) => R.toLowerCase() === j
      );
      P && P !== k.value && (E = !0, k.value = P, Rt(() => {
        E = !1;
      }));
    }
    function Ue() {
      return k.value === "__custom__" ? C.value.trim() : x.value.trim() ? `${k.value}/${x.value.trim()}` : k.value;
    }
    function se() {
      if (c.value.size === 0 || !Z.value) return;
      const V = Ue(), j = [];
      for (const P of c.value) {
        const R = u.value.find((ue) => ue.path === P);
        R && j.push({
          url: gk(o.repoId, o.revision, R.path),
          destination: V,
          filename: R.path.split("/").pop() || R.path
        });
      }
      a("queue", j);
    }
    async function oe() {
      if (o.repoId) {
        d.value = !0, v.value = null;
        try {
          const V = `https://huggingface.co/${o.repoId}/tree/${o.revision || "main"}`, j = await l(V);
          if (u.value = j.files, o.preselectedFile) {
            const P = u.value.find((R) => R.path === o.preselectedFile);
            P && ne(P);
          }
        } catch (V) {
          v.value = V instanceof Error ? V.message : "Failed to load repository";
        } finally {
          d.value = !1;
        }
      }
    }
    async function M() {
      try {
        const V = await r();
        S.value = V.directories, V.directories.length > 0 && !k.value && (k.value = V.directories[0]);
      } catch {
        S.value = ["checkpoints", "loras", "vae", "controlnet", "unet"], k.value || (k.value = "checkpoints");
      }
    }
    return kt(() => [o.repoId, o.revision], () => {
      o.repoId && oe();
    }, { immediate: !1 }), kt(() => o.repoId, () => {
      U.value = !1;
    }), kt(c, () => {
      me();
    }, { deep: !0 }), kt(S, () => {
      S.value.length > 0 && c.value.size > 0 && me();
    }), kt(k, (V, j) => {
      E || j === "" || (U.value = !0);
    }), ot(() => {
      oe(), M();
    }), (V, j) => (n(), i("div", hk, [
      t("div", yk, [
        t("button", {
          class: "back-btn",
          onClick: j[0] || (j[0] = (P) => V.$emit("back")),
          title: "Back to search"
        }, " ◄ "),
        t("div", wk, [
          t("span", _k, m(e.repoId), 1),
          e.revision ? (n(), i("span", kk, m(e.revision), 1)) : h("", !0)
        ])
      ]),
      d.value ? (n(), i("div", bk, " Loading repository files... ")) : v.value ? (n(), i("div", $k, m(v.value), 1)) : (n(), i(G, { key: 2 }, [
        t("div", Ck, [
          _(it, {
            modelValue: f.value,
            "onUpdate:modelValue": j[1] || (j[1] = (P) => f.value = P),
            placeholder: "Filter files...",
            type: "search",
            class: "search-input"
          }, null, 8, ["modelValue"]),
          t("div", xk, [
            t("button", {
              class: De(["toggle-btn", { active: p.value }]),
              onClick: j[2] || (j[2] = (P) => p.value = !p.value)
            }, m(p.value ? "Models Only" : "All Files"), 3),
            t("button", {
              class: "action-btn",
              onClick: Q
            }, "Auto-Select Models"),
            t("button", {
              class: "action-btn",
              onClick: de
            }, "Clear")
          ])
        ]),
        t("div", Sk, [
          N.value.length > 0 ? (n(), i("div", Ik, [
            t("input", {
              type: "checkbox",
              checked: H.value,
              indeterminate: D.value && !H.value,
              class: "file-checkbox",
              onChange: Ne
            }, null, 40, Ek),
            t("span", {
              class: "header-name",
              onClick: j[3] || (j[3] = (P) => le("name"))
            }, [
              j[9] || (j[9] = $(" Name ", -1)),
              t("span", Tk, m(w.value === "name" ? y.value ? "▲" : "▼" : ""), 1)
            ]),
            t("span", {
              class: "header-size",
              onClick: j[4] || (j[4] = (P) => le("size"))
            }, [
              j[10] || (j[10] = $(" Size ", -1)),
              t("span", Mk, m(w.value === "size" ? y.value ? "▲" : "▼" : ""), 1)
            ])
          ])) : h("", !0),
          N.value.length === 0 ? (n(), i("div", Pk, m(u.value.length === 0 ? "No files in repository" : "No files match filter"), 1)) : (n(), i("div", Rk, [
            (n(!0), i(G, null, ke(A.value, (P) => (n(), i("div", {
              key: P.path,
              class: De(["file-item", { selected: c.value.has(P.path) }]),
              onClick: (R) => ne(P)
            }, [
              t("input", {
                type: "checkbox",
                checked: c.value.has(P.path),
                class: "file-checkbox",
                onClick: j[5] || (j[5] = st(() => {
                }, ["stop"])),
                onChange: (R) => ne(P)
              }, null, 40, Lk),
              t("span", Dk, m(P.path), 1),
              t("span", Ok, m(re(P.size)), 1)
            ], 10, Nk))), 128))
          ]))
        ]),
        t("div", Uk, [
          j[11] || (j[11] = t("h4", { class: "section-label" }, "Download Destination", -1)),
          t("div", Ak, [
            _(mk, {
              modelValue: k.value,
              "onUpdate:modelValue": j[6] || (j[6] = (P) => k.value = P),
              options: W.value,
              placeholder: "Select directory...",
              class: "dest-select"
            }, null, 8, ["modelValue", "options"]),
            k.value !== "__custom__" ? (n(), i("span", zk, "/")) : h("", !0),
            k.value !== "__custom__" ? (n(), L(it, {
              key: 1,
              modelValue: x.value,
              "onUpdate:modelValue": j[7] || (j[7] = (P) => x.value = P),
              placeholder: "subfolder (optional)",
              class: "dest-subfolder"
            }, null, 8, ["modelValue"])) : h("", !0)
          ]),
          k.value === "__custom__" ? (n(), L(it, {
            key: 0,
            modelValue: C.value,
            "onUpdate:modelValue": j[8] || (j[8] = (P) => C.value = P),
            placeholder: "Enter full path relative to models directory...",
            class: "dest-custom",
            "full-width": ""
          }, null, 8, ["modelValue"])) : h("", !0)
        ]),
        t("div", Vk, [
          t("div", Fk, [
            t("span", Bk, m(c.value.size) + " file(s) selected", 1),
            t("span", Wk, m(re(ee.value)), 1)
          ]),
          _(Re, {
            variant: "primary",
            disabled: c.value.size === 0 || !Z.value,
            onClick: se
          }, {
            default: g(() => [...j[12] || (j[12] = [
              $(" Queue Download ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"])
        ])
      ], 64))
    ]));
  }
}), jk = /* @__PURE__ */ Ie(Gk, [["__scopeId", "data-v-183acebc"]]), Hk = { class: "token-config-modal" }, qk = { class: "provider-info" }, Kk = { class: "provider-icon" }, Jk = { class: "provider-name" }, Yk = {
  key: 0,
  class: "current-token"
}, Qk = { class: "mask" }, Xk = { class: "token-input-section" }, Zk = { class: "input-label" }, eb = { class: "help-text" }, tb = ["href"], sb = { class: "modal-actions" }, ob = /* @__PURE__ */ Se({
  __name: "TokenConfigModal",
  props: {
    provider: {},
    currentTokenMask: {}
  },
  emits: ["close", "saved", "cleared"],
  setup(e, { emit: s }) {
    const o = e, a = s, { updateConfig: l } = dt(), r = b(""), u = b(!1), c = b(!1), d = O(
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
        t("div", Hk, [
          t("div", qk, [
            t("span", Kk, m(v.value), 1),
            t("span", Jk, m(d.value), 1)
          ]),
          e.currentTokenMask ? (n(), i("div", Yk, [
            C[4] || (C[4] = t("span", { class: "label" }, "Current token:", -1)),
            t("span", Qk, m(e.currentTokenMask), 1),
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
          t("div", Xk, [
            t("label", Zk, m(e.currentTokenMask ? "Replace with new token:" : "Enter token:"), 1),
            _(it, {
              modelValue: r.value,
              "onUpdate:modelValue": C[0] || (C[0] = (S) => r.value = S),
              type: "password",
              placeholder: f.value
            }, null, 8, ["modelValue", "placeholder"]),
            t("div", eb, [
              t("a", {
                href: p.value,
                target: "_blank",
                rel: "noopener"
              }, m(w.value), 9, tb)
            ])
          ])
        ])
      ]),
      footer: g(() => [
        t("div", sb, [
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
}), nb = /* @__PURE__ */ Ie(ob, [["__scopeId", "data-v-0687d0ce"]]), ab = { class: "huggingface-tab" }, lb = {
  key: 0,
  class: "search-section"
}, ib = { class: "search-header" }, rb = { class: "search-bar" }, ub = {
  key: 1,
  class: "search-results"
}, cb = {
  key: 0,
  class: "loading-state"
}, db = {
  key: 1,
  class: "error-state"
}, mb = {
  key: 2,
  class: "results-list"
}, fb = ["onClick"], vb = { class: "repo-header" }, pb = { class: "repo-id" }, gb = { class: "repo-stats" }, hb = {
  class: "stat",
  title: "Downloads"
}, yb = {
  class: "stat",
  title: "Likes"
}, wb = {
  key: 0,
  class: "repo-desc"
}, _b = {
  key: 1,
  class: "repo-tags"
}, kb = {
  key: 3,
  class: "empty-state"
}, bb = {
  key: 4,
  class: "hint-state"
}, $b = /* @__PURE__ */ Se({
  __name: "HuggingFaceTab",
  emits: ["queue"],
  setup(e) {
    const { searchHuggingFaceRepos: s, getConfig: o } = dt(), a = b("search"), l = b(""), r = b([]), u = b(!1), c = b(null), d = b(!1), v = b(null), f = b("main"), p = b(), w = b(), y = b(!1), k = b(null), x = O(() => {
      if (!c.value) return !1;
      const H = c.value.toLowerCase();
      return c.value.includes("401") || c.value.includes("403") || H.includes("authentication") || H.includes("unauthorized");
    });
    function C(H) {
      return H >= 1e6 ? `${(H / 1e6).toFixed(1)}M` : H >= 1e3 ? `${(H / 1e3).toFixed(1)}K` : String(H);
    }
    async function S() {
      const H = l.value.trim();
      if (!H) return;
      c.value = null;
      const D = vk(H);
      if (D.kind === "file" && D.repoId && D.path) {
        v.value = D.repoId, f.value = D.revision || "main";
        const W = D.path.split("/");
        W.length > 1 ? p.value = W.slice(0, -1).join("/") : p.value = void 0, w.value = D.path, a.value = "browse";
        return;
      }
      if (D.kind === "repo" && D.repoId) {
        v.value = D.repoId, f.value = D.revision || "main", p.value = D.path, w.value = void 0, a.value = "browse";
        return;
      }
      if (/^[\w-]+\/[\w.-]+$/.test(H) && !H.includes("://")) {
        v.value = H, f.value = "main", p.value = void 0, w.value = void 0, a.value = "browse";
        return;
      }
      u.value = !0;
      try {
        const W = await s(H);
        r.value = W.results, d.value = !0;
      } catch (W) {
        c.value = W instanceof Error ? W.message : "Search failed";
      } finally {
        u.value = !1;
      }
    }
    function U(H) {
      v.value = H, f.value = "main", p.value = void 0, w.value = void 0, a.value = "browse";
    }
    function E() {
      a.value = "search", v.value = null, p.value = void 0, w.value = void 0;
    }
    async function T() {
      try {
        const H = await o();
        k.value = H.huggingface_token || null;
      } catch (H) {
        console.error("Failed to load config:", H);
      }
    }
    function N() {
      T(), x.value && l.value && S();
    }
    function A() {
      k.value = null;
    }
    return ot(T), (H, D) => (n(), i("div", ab, [
      a.value === "search" ? (n(), i("div", lb, [
        t("div", ib, [
          t("div", rb, [
            _(it, {
              modelValue: l.value,
              "onUpdate:modelValue": D[0] || (D[0] = (W) => l.value = W),
              placeholder: "Search repos, paste URL, or enter user/repo...",
              onKeydown: ts(S, ["enter"])
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
            onClick: D[1] || (D[1] = (W) => y.value = !0)
          }, {
            default: g(() => [
              $(m(k.value ? `Token: ${k.value}` : "Configure Token"), 1)
            ]),
            _: 1
          })
        ])
      ])) : h("", !0),
      a.value === "search" ? (n(), i("div", ub, [
        u.value ? (n(), i("div", cb, " Searching HuggingFace... ")) : c.value ? (n(), i("div", db, [
          t("p", null, m(c.value), 1),
          x.value ? (n(), L(Re, {
            key: 0,
            variant: "primary",
            size: "sm",
            onClick: D[2] || (D[2] = (W) => y.value = !0)
          }, {
            default: g(() => [...D[6] || (D[6] = [
              $(" Configure HuggingFace Token ", -1)
            ])]),
            _: 1
          })) : h("", !0)
        ])) : r.value.length > 0 ? (n(), i("div", mb, [
          (n(!0), i(G, null, ke(r.value, (W) => (n(), i("div", {
            key: W.repo_id,
            class: "repo-card",
            onClick: (Z) => U(W.repo_id)
          }, [
            t("div", vb, [
              t("span", pb, m(W.repo_id), 1),
              t("div", gb, [
                t("span", hb, [
                  D[7] || (D[7] = t("span", { class: "stat-icon" }, "↓", -1)),
                  $(" " + m(C(W.downloads)), 1)
                ]),
                t("span", yb, [
                  D[8] || (D[8] = t("span", { class: "stat-icon" }, "★", -1)),
                  $(" " + m(C(W.likes)), 1)
                ])
              ])
            ]),
            W.description ? (n(), i("p", wb, m(W.description), 1)) : h("", !0),
            W.tags.length > 0 ? (n(), i("div", _b, [
              (n(!0), i(G, null, ke(W.tags.slice(0, 5), (Z) => (n(), i("span", {
                key: Z,
                class: "tag"
              }, m(Z), 1))), 128))
            ])) : h("", !0)
          ], 8, fb))), 128))
        ])) : d.value ? (n(), i("div", kb, " No repositories found ")) : (n(), i("div", bb, " Enter a HuggingFace URL, repo ID (user/repo), or search term "))
      ])) : (n(), L(jk, {
        key: 2,
        "repo-id": v.value,
        revision: f.value,
        "initial-path": p.value,
        "preselected-file": w.value,
        onBack: E,
        onQueue: D[3] || (D[3] = (W) => H.$emit("queue", W))
      }, null, 8, ["repo-id", "revision", "initial-path", "preselected-file"])),
      y.value ? (n(), L(nb, {
        key: 3,
        provider: "huggingface",
        "current-token-mask": k.value,
        onClose: D[4] || (D[4] = (W) => y.value = !1),
        onSaved: N,
        onCleared: A
      }, null, 8, ["current-token-mask"])) : h("", !0)
    ]));
  }
}), Cb = /* @__PURE__ */ Ie($b, [["__scopeId", "data-v-e13209bf"]]), xb = { class: "civitai-tab" }, Sb = /* @__PURE__ */ Se({
  __name: "CivitaiTab",
  setup(e) {
    return (s, o) => (n(), i("div", xb, [...o[0] || (o[0] = [
      t("div", { class: "placeholder" }, [
        t("div", { class: "icon" }, "🎨"),
        t("h3", null, "Civitai Integration"),
        t("p", null, "Coming soon! Civitai model search and download will be available in a future update.")
      ], -1)
    ])]));
  }
}), Ib = /* @__PURE__ */ Ie(Sb, [["__scopeId", "data-v-44948051"]]), Eb = { class: "direct-url-tab" }, Tb = { class: "input-group" }, Mb = { class: "input-group" }, Pb = {
  key: 0,
  class: "error"
}, Rb = { class: "actions" }, Nb = /* @__PURE__ */ Se({
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
    return (d, v) => (n(), i("div", Eb, [
      t("div", Tb, [
        v[2] || (v[2] = t("label", null, "Download URL", -1)),
        _(it, {
          modelValue: a.value,
          "onUpdate:modelValue": v[0] || (v[0] = (f) => a.value = f),
          placeholder: "https://example.com/model.safetensors"
        }, null, 8, ["modelValue"])
      ]),
      t("div", Mb, [
        v[3] || (v[3] = t("label", null, "Target Path (relative to models directory)", -1)),
        _(it, {
          modelValue: l.value,
          "onUpdate:modelValue": v[1] || (v[1] = (f) => l.value = f),
          placeholder: "e.g. checkpoints/model.safetensors"
        }, null, 8, ["modelValue"]),
        r.value ? (n(), i("p", Pb, m(r.value), 1)) : h("", !0)
      ]),
      v[5] || (v[5] = t("p", { class: "note" }, "Model will be queued for background download.", -1)),
      t("div", Rb, [
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
}), Lb = /* @__PURE__ */ Ie(Nb, [["__scopeId", "data-v-01def7aa"]]), Db = { class: "download-modal" }, Ob = { class: "tab-bar" }, Ub = ["onClick"], Ab = { class: "tab-content" }, zb = /* @__PURE__ */ Se({
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
        t("div", Db, [
          t("div", Ob, [
            (n(), i(G, null, ke(l, (p) => t("button", {
              key: p.id,
              class: De(["tab-btn", { active: r.value === p.id }]),
              onClick: (w) => r.value = p.id
            }, m(p.icon) + " " + m(p.label), 11, Ub)), 64))
          ]),
          t("div", Ab, [
            r.value === "huggingface" ? (n(), L(Cb, {
              key: 0,
              onQueue: u
            })) : r.value === "civitai" ? (n(), L(Ib, { key: 1 })) : r.value === "direct" ? (n(), L(Lb, {
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
}), su = /* @__PURE__ */ Ie(zb, [["__scopeId", "data-v-90a9f401"]]), Vb = /* @__PURE__ */ Se({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(e, { emit: s }) {
    const o = s, { getEnvironmentModels: a, getStatus: l } = dt(), r = b([]), u = b([]), c = b("production"), d = b(!1), v = b(null), f = b(""), p = b(!1), w = b(null), y = b(!1);
    function k() {
      p.value = !1, o("navigate", "model-index");
    }
    const x = O(
      () => r.value.reduce((D, W) => D + (W.size || 0), 0)
    ), C = O(() => {
      if (!f.value.trim()) return r.value;
      const D = f.value.toLowerCase();
      return r.value.filter((W) => W.filename.toLowerCase().includes(D));
    }), S = O(() => {
      if (!f.value.trim()) return u.value;
      const D = f.value.toLowerCase();
      return u.value.filter((W) => W.filename.toLowerCase().includes(D));
    }), U = O(() => {
      const D = {};
      for (const Z of C.value) {
        const ee = Z.type || "other";
        D[ee] || (D[ee] = []), D[ee].push(Z);
      }
      const W = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(D).sort(([Z], [ee]) => {
        const re = W.indexOf(Z), he = W.indexOf(ee);
        return re >= 0 && he >= 0 ? re - he : re >= 0 ? -1 : he >= 0 ? 1 : Z.localeCompare(ee);
      }).map(([Z, ee]) => ({ type: Z, models: ee }));
    });
    function E(D) {
      if (!D) return "Unknown";
      const W = D / (1024 * 1024);
      return W >= 1024 ? `${(W / 1024).toFixed(1)} GB` : `${W.toFixed(0)} MB`;
    }
    function T(D) {
      w.value = D.hash || D.filename;
    }
    function N(D) {
      o("navigate", "model-index");
    }
    function A(D) {
      alert(`Download functionality not yet implemented for ${D}`);
    }
    async function H() {
      d.value = !0, v.value = null;
      try {
        const D = await a();
        r.value = D, u.value = [];
        const W = await l();
        c.value = W.environment || "production";
      } catch (D) {
        v.value = D instanceof Error ? D.message : "Failed to load models";
      } finally {
        d.value = !1;
      }
    }
    return ot(H), (D, W) => (n(), i(G, null, [
      _(Tt, null, {
        header: g(() => [
          _(Mt, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: W[1] || (W[1] = (Z) => p.value = !0)
          }, {
            actions: g(() => [
              _(xe, {
                variant: "primary",
                size: "sm",
                onClick: W[0] || (W[0] = (Z) => y.value = !0)
              }, {
                default: g(() => [...W[6] || (W[6] = [
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
            "onUpdate:modelValue": W[2] || (W[2] = (Z) => f.value = Z),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          d.value ? (n(), L(xs, {
            key: 0,
            message: "Loading environment models..."
          })) : v.value ? (n(), L(Ss, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: H
          }, null, 8, ["message"])) : (n(), i(G, { key: 2 }, [
            r.value.length ? (n(), L(gn, {
              key: 0,
              variant: "compact"
            }, {
              default: g(() => [
                $(" Total: " + m(r.value.length) + " models • " + m(E(x.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : h("", !0),
            (n(!0), i(G, null, ke(U.value, (Z) => (n(), L(bt, {
              key: Z.type,
              title: Z.type.toUpperCase(),
              count: Z.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: g(() => [
                (n(!0), i(G, null, ke(Z.models, (ee) => (n(), L(At, {
                  key: ee.hash || ee.filename,
                  status: "synced"
                }, {
                  icon: g(() => [...W[7] || (W[7] = [
                    $("📦", -1)
                  ])]),
                  title: g(() => [
                    $(m(ee.filename), 1)
                  ]),
                  subtitle: g(() => [
                    $(m(E(ee.size)), 1)
                  ]),
                  details: g(() => [
                    _(_t, {
                      label: "Used by:",
                      value: (ee.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    _(_t, {
                      label: "Path:",
                      value: ee.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    _(xe, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (re) => T(ee)
                    }, {
                      default: g(() => [...W[8] || (W[8] = [
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
                (n(!0), i(G, null, ke(S.value, (Z) => (n(), L(At, {
                  key: Z.filename,
                  status: "broken"
                }, {
                  icon: g(() => [...W[9] || (W[9] = [
                    $("⚠", -1)
                  ])]),
                  title: g(() => [
                    $(m(Z.filename), 1)
                  ]),
                  subtitle: g(() => [...W[10] || (W[10] = [
                    t("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: g(() => {
                    var ee;
                    return [
                      _(_t, {
                        label: "Required by:",
                        value: ((ee = Z.workflow_names) == null ? void 0 : ee.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: g(() => [
                    _(xe, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ee) => A(Z.filename)
                    }, {
                      default: g(() => [...W[11] || (W[11] = [
                        $(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    _(xe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ee) => N(Z.filename)
                    }, {
                      default: g(() => [...W[12] || (W[12] = [
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
            !C.value.length && !S.value.length ? (n(), L(us, {
              key: 2,
              icon: "📭",
              message: f.value ? `No models match '${f.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : h("", !0)
          ], 64))
        ]),
        _: 1
      }),
      _(Qt, {
        show: p.value,
        title: "About Environment Models",
        onClose: W[3] || (W[3] = (Z) => p.value = !1)
      }, {
        content: g(() => [
          t("p", null, [
            W[13] || (W[13] = $(" These are models currently used by workflows in ", -1)),
            t("strong", null, '"' + m(c.value) + '"', 1),
            W[14] || (W[14] = $(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: g(() => [
          _(xe, {
            variant: "primary",
            onClick: k
          }, {
            default: g(() => [...W[15] || (W[15] = [
              $(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w.value ? (n(), L(Ml, {
        key: 0,
        identifier: w.value,
        onClose: W[4] || (W[4] = (Z) => w.value = null)
      }, null, 8, ["identifier"])) : h("", !0),
      _(su, {
        show: y.value,
        onClose: W[5] || (W[5] = (Z) => y.value = !1)
      }, null, 8, ["show"])
    ], 64));
  }
}), Fb = /* @__PURE__ */ Ie(Vb, [["__scopeId", "data-v-af3ca736"]]), Bb = {
  key: 0,
  class: "indexing-progress"
}, Wb = { class: "progress-info" }, Gb = { class: "progress-label" }, jb = { class: "progress-count" }, Hb = { class: "progress-bar" }, qb = { class: "modal-content" }, Kb = { class: "modal-header" }, Jb = { class: "modal-body" }, Yb = { class: "input-group" }, Qb = { class: "current-path" }, Xb = { class: "input-group" }, Zb = { class: "modal-footer" }, e2 = /* @__PURE__ */ Se({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(e, { emit: s }) {
    const {
      getWorkspaceModels: o,
      scanWorkspaceModels: a,
      getModelsDirectory: l,
      setModelsDirectory: r
    } = dt(), u = s, c = b([]), d = b(!1), v = b(!1), f = b(null), p = b(""), w = b(!1), y = b(null), k = b(!1), x = b(null), C = b(""), S = b(!1), U = b(!1), E = b(null), T = O(
      () => c.value.reduce((he, ne) => he + (ne.size || 0), 0)
    ), N = O(() => {
      if (!p.value.trim()) return c.value;
      const he = p.value.toLowerCase();
      return c.value.filter((ne) => {
        const Q = ne, de = ne.sha256 || Q.sha256_hash || "";
        return ne.filename.toLowerCase().includes(he) || de.toLowerCase().includes(he);
      });
    }), A = O(() => {
      const he = {};
      for (const Q of N.value) {
        const de = Q.type || "other";
        he[de] || (he[de] = []), he[de].push(Q);
      }
      const ne = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(he).sort(([Q], [de]) => {
        const Ne = ne.indexOf(Q), le = ne.indexOf(de);
        return Ne >= 0 && le >= 0 ? Ne - le : Ne >= 0 ? -1 : le >= 0 ? 1 : Q.localeCompare(de);
      }).map(([Q, de]) => ({ type: Q, models: de }));
    });
    function H(he) {
      if (!he) return "Unknown";
      const ne = 1024 * 1024 * 1024, Q = 1024 * 1024;
      return he >= ne ? `${(he / ne).toFixed(1)} GB` : he >= Q ? `${(he / Q).toFixed(0)} MB` : `${(he / 1024).toFixed(0)} KB`;
    }
    function D(he) {
      y.value = he.hash || he.filename;
    }
    async function W() {
      v.value = !0, f.value = null;
      try {
        const he = await a();
        await ee(), he.changes > 0 && console.log(`Scan complete: ${he.changes} changes detected`);
      } catch (he) {
        f.value = he instanceof Error ? he.message : "Failed to scan models";
      } finally {
        v.value = !1;
      }
    }
    async function Z() {
      if (C.value.trim()) {
        S.value = !0, f.value = null;
        try {
          const he = await r(C.value.trim());
          x.value = he.path, k.value = !1, C.value = "", await ee(), console.log(`Directory changed: ${he.models_indexed} models indexed`), u("refresh");
        } catch (he) {
          f.value = he instanceof Error ? he.message : "Failed to change directory";
        } finally {
          S.value = !1;
        }
      }
    }
    async function ee() {
      d.value = !0, f.value = null;
      try {
        c.value = await o();
      } catch (he) {
        f.value = he instanceof Error ? he.message : "Failed to load workspace models";
      } finally {
        d.value = !1;
      }
    }
    async function re() {
      try {
        const he = await l();
        x.value = he.path;
      } catch {
      }
    }
    return ot(() => {
      ee(), re();
    }), (he, ne) => (n(), i(G, null, [
      _(Tt, null, {
        header: g(() => [
          _(Mt, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: ne[2] || (ne[2] = (Q) => w.value = !0)
          }, {
            actions: g(() => [
              _(xe, {
                variant: "primary",
                size: "sm",
                disabled: v.value,
                onClick: W
              }, {
                default: g(() => [
                  $(m(v.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              _(xe, {
                variant: "primary",
                size: "sm",
                onClick: ne[0] || (ne[0] = (Q) => k.value = !0)
              }, {
                default: g(() => [...ne[11] || (ne[11] = [
                  $(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              _(xe, {
                variant: "primary",
                size: "sm",
                onClick: ne[1] || (ne[1] = (Q) => U.value = !0)
              }, {
                default: g(() => [...ne[12] || (ne[12] = [
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
          E.value ? (n(), i("div", Bb, [
            t("div", Wb, [
              t("span", Gb, m(E.value.message), 1),
              t("span", jb, m(E.value.current) + "/" + m(E.value.total), 1)
            ]),
            t("div", Hb, [
              t("div", {
                class: "progress-fill",
                style: Ft({ width: `${E.value.current / E.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : h("", !0),
          _(mo, {
            modelValue: p.value,
            "onUpdate:modelValue": ne[3] || (ne[3] = (Q) => p.value = Q),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          d.value || E.value ? (n(), L(xs, {
            key: 0,
            message: E.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : f.value ? (n(), L(Ss, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: ee
          }, null, 8, ["message"])) : (n(), i(G, { key: 2 }, [
            c.value.length ? (n(), L(gn, {
              key: 0,
              variant: "compact"
            }, {
              default: g(() => [
                $(" Total: " + m(c.value.length) + " models • " + m(H(T.value)), 1)
              ]),
              _: 1
            })) : h("", !0),
            (n(!0), i(G, null, ke(A.value, (Q) => (n(), L(bt, {
              key: Q.type,
              title: Q.type.toUpperCase(),
              count: Q.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: g(() => [
                (n(!0), i(G, null, ke(Q.models, (de) => (n(), L(At, {
                  key: de.sha256 || de.filename,
                  status: "synced"
                }, {
                  icon: g(() => [...ne[13] || (ne[13] = [
                    $("📦", -1)
                  ])]),
                  title: g(() => [
                    $(m(de.filename), 1)
                  ]),
                  subtitle: g(() => [
                    $(m(H(de.size)), 1)
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
                    _(xe, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Ne) => D(de)
                    }, {
                      default: g(() => [...ne[14] || (ne[14] = [
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
            N.value.length ? h("", !0) : (n(), L(us, {
              key: 1,
              icon: "📭",
              message: p.value ? `No models match '${p.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      _(Qt, {
        show: w.value,
        title: "About Workspace Model Index",
        onClose: ne[4] || (ne[4] = (Q) => w.value = !1)
      }, {
        content: g(() => [...ne[15] || (ne[15] = [
          t("p", null, [
            $(" Content-addressable model storage shared across "),
            t("strong", null, "all environments"),
            $(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      y.value ? (n(), L(Ml, {
        key: 0,
        identifier: y.value,
        onClose: ne[5] || (ne[5] = (Q) => y.value = null)
      }, null, 8, ["identifier"])) : h("", !0),
      (n(), L(Ot, { to: "body" }, [
        k.value ? (n(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: ne[9] || (ne[9] = st((Q) => k.value = !1, ["self"]))
        }, [
          t("div", qb, [
            t("div", Kb, [
              ne[16] || (ne[16] = t("h3", null, "Change Models Directory", -1)),
              t("button", {
                class: "modal-close",
                onClick: ne[6] || (ne[6] = (Q) => k.value = !1)
              }, "✕")
            ]),
            t("div", Jb, [
              t("div", Yb, [
                ne[17] || (ne[17] = t("label", null, "Current Directory", -1)),
                t("code", Qb, m(x.value || "Not set"), 1)
              ]),
              t("div", Xb, [
                ne[18] || (ne[18] = t("label", null, "New Directory Path", -1)),
                _(it, {
                  modelValue: C.value,
                  "onUpdate:modelValue": ne[7] || (ne[7] = (Q) => C.value = Q),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              ne[19] || (ne[19] = t("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            t("div", Zb, [
              _(Re, {
                variant: "secondary",
                onClick: ne[8] || (ne[8] = (Q) => k.value = !1)
              }, {
                default: g(() => [...ne[20] || (ne[20] = [
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
      _(su, {
        show: U.value,
        onClose: ne[10] || (ne[10] = (Q) => U.value = !1)
      }, null, 8, ["show"])
    ], 64));
  }
}), t2 = /* @__PURE__ */ Ie(e2, [["__scopeId", "data-v-3705114c"]]), s2 = { class: "node-details" }, o2 = { class: "status-row" }, n2 = {
  key: 0,
  class: "detail-row"
}, a2 = { class: "value" }, l2 = { class: "detail-row" }, i2 = { class: "value" }, r2 = {
  key: 1,
  class: "detail-row"
}, u2 = { class: "value mono" }, c2 = {
  key: 2,
  class: "detail-row"
}, d2 = ["href"], m2 = {
  key: 3,
  class: "detail-row"
}, f2 = { class: "value mono small" }, v2 = { class: "detail-row" }, p2 = {
  key: 0,
  class: "value"
}, g2 = {
  key: 1,
  class: "workflow-list"
}, h2 = /* @__PURE__ */ Se({
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
        t("div", s2, [
          t("div", o2, [
            d[2] || (d[2] = t("span", { class: "label" }, "Status:", -1)),
            t("span", {
              class: De(["status-badge", l.value])
            }, m(r.value), 3)
          ]),
          e.node.version ? (n(), i("div", n2, [
            d[3] || (d[3] = t("span", { class: "label" }, "Version:", -1)),
            t("span", a2, m(e.node.source === "development" ? "" : "v") + m(e.node.version), 1)
          ])) : h("", !0),
          t("div", l2, [
            d[4] || (d[4] = t("span", { class: "label" }, "Source:", -1)),
            t("span", i2, m(u.value), 1)
          ]),
          e.node.registry_id ? (n(), i("div", r2, [
            d[5] || (d[5] = t("span", { class: "label" }, "Registry ID:", -1)),
            t("span", u2, m(e.node.registry_id), 1)
          ])) : h("", !0),
          e.node.repository ? (n(), i("div", c2, [
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
            ], 8, d2)
          ])) : h("", !0),
          e.node.download_url ? (n(), i("div", m2, [
            d[8] || (d[8] = t("span", { class: "label" }, "Download URL:", -1)),
            t("span", f2, m(e.node.download_url), 1)
          ])) : h("", !0),
          d[10] || (d[10] = t("div", { class: "section-divider" }, null, -1)),
          t("div", v2, [
            d[9] || (d[9] = t("span", { class: "label" }, "Used by:", -1)),
            !e.node.used_in_workflows || e.node.used_in_workflows.length === 0 ? (n(), i("span", p2, " Not used in any workflows ")) : (n(), i("div", g2, [
              (n(!0), i(G, null, ke(e.node.used_in_workflows, (v) => (n(), i("span", {
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
}), y2 = /* @__PURE__ */ Ie(h2, [["__scopeId", "data-v-b342f626"]]), w2 = { class: "dialog-message" }, _2 = {
  key: 0,
  class: "dialog-details"
}, k2 = {
  key: 1,
  class: "dialog-warning"
}, b2 = /* @__PURE__ */ Se({
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
        t("p", w2, m(e.message), 1),
        e.details && e.details.length ? (n(), i("div", _2, [
          (n(!0), i(G, null, ke(e.details, (a, l) => (n(), i("div", {
            key: l,
            class: "detail-item"
          }, " • " + m(a), 1))), 128))
        ])) : h("", !0),
        e.warning ? (n(), i("p", k2, [
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
}), ou = /* @__PURE__ */ Ie(b2, [["__scopeId", "data-v-3670b9f5"]]), $2 = { class: "mismatch-warning" }, C2 = { class: "version-mismatch" }, x2 = { class: "version-actual" }, S2 = { class: "version-expected" }, I2 = { style: { color: "var(--cg-color-warning)" } }, E2 = { style: { color: "var(--cg-color-warning)" } }, T2 = {
  key: 0,
  class: "community-status-badge"
}, M2 = { key: 0 }, P2 = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, R2 = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, N2 = /* @__PURE__ */ Se({
  __name: "NodesSection",
  props: {
    versionMismatches: { default: () => [] }
  },
  emits: ["open-node-manager", "repair-environment", "toast"],
  setup(e, { emit: s }) {
    const o = e, a = s, { getNodes: l, trackNodeAsDev: r, installNode: u, uninstallNode: c, queueNodeInstall: d } = dt(), v = b({
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
          var ue, Ve;
          return R.name.toLowerCase().includes(P) || ((ue = R.description) == null ? void 0 : ue.toLowerCase().includes(P)) || ((Ve = R.repository) == null ? void 0 : Ve.toLowerCase().includes(P));
        }
      );
    }), U = O(
      () => S.value.filter((P) => P.installed && P.tracked)
    ), E = O(
      () => S.value.filter((P) => !P.installed && P.tracked && !P.issue_type)
    ), T = O(
      () => S.value.filter((P) => P.installed && !P.tracked)
    ), N = O(
      () => S.value.filter((P) => P.issue_type === "version_gated")
    ), A = O(
      () => S.value.filter((P) => P.issue_type === "uninstallable")
    ), H = O(() => N.value.length), D = O(() => A.value.length);
    function W(P) {
      return P.registry_id || P.name;
    }
    function Z(P) {
      return x.value.has(W(P));
    }
    async function ee(P, R) {
      const ue = P.registry_id;
      if (!ue) {
        a("toast", `Node "${P.name}" has no package id for install`, "warning");
        return;
      }
      if (R === "git" && !P.repository) {
        a("toast", `Node "${P.name}" has no repository URL for git install`, "warning");
        return;
      }
      const Ve = {
        id: ue,
        version: "latest",
        selected_version: "latest",
        mode: "remote",
        channel: "default"
      };
      R === "git" && P.repository && (Ve.repository = P.repository, Ve.install_source = "git"), await d(Ve), x.value.add(W(P)), a("toast", `✓ Queued install for "${P.name}"`, "success");
    }
    function re(P) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[P] || P;
    }
    const he = O(() => o.versionMismatches.length > 0);
    function ne(P) {
      return !P.used_in_workflows || P.used_in_workflows.length === 0 ? "Not used in any workflows" : P.used_in_workflows.length === 1 ? P.used_in_workflows[0] : `${P.used_in_workflows.length} workflows`;
    }
    function Q(P) {
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
            R.status === "success" ? (a("toast", `✓ Node "${P}" tracked as development`, "success"), await j()) : a("toast", `Failed to track node: ${R.message || "Unknown error"}`, "error");
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
            R.status === "success" ? (a("toast", `✓ Node "${P}" removed`, "success"), await j()) : a("toast", `Failed to remove node: ${R.message || "Unknown error"}`, "error");
          } catch (R) {
            a("toast", `Error removing node: ${R instanceof Error ? R.message : "Unknown error"}`, "error");
          } finally {
            f.value = !1;
          }
        }
      };
    }
    function oe(P) {
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
            R.status === "success" ? (a("toast", `✓ Node "${P}" installed`, "success"), await j()) : a("toast", `Failed to install node: ${R.message || "Unknown error"}`, "error");
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
            f.value = !0, await ee(P, "registry");
          } catch (R) {
            a("toast", `Error queueing install: ${R instanceof Error ? R.message : "Unknown error"}`, "error");
          } finally {
            f.value = !1;
          }
        }
      };
    }
    function V(P) {
      C.value = {
        title: "Install Community-Mapped Package via Git",
        message: `Install "${P.name}" from git?`,
        warning: "Use git install only when you explicitly need the repository source.",
        confirmLabel: "Install via Git",
        destructive: !1,
        onConfirm: async () => {
          C.value = null;
          try {
            f.value = !0, await ee(P, "git");
          } catch (R) {
            a("toast", `Error queueing git install: ${R instanceof Error ? R.message : "Unknown error"}`, "error");
          } finally {
            f.value = !1;
          }
        }
      };
    }
    async function j() {
      f.value = !0, p.value = null;
      try {
        v.value = await l();
      } catch (P) {
        p.value = P instanceof Error ? P.message : "Failed to load nodes";
      } finally {
        f.value = !1;
      }
    }
    return ot(j), (P, R) => (n(), i(G, null, [
      _(Tt, null, {
        header: g(() => [
          _(Mt, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: R[0] || (R[0] = (ue) => y.value = !0)
          }, {
            actions: g(() => [
              _(xe, {
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
            "onUpdate:modelValue": R[1] || (R[1] = (ue) => w.value = ue),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          f.value ? (n(), L(xs, {
            key: 0,
            message: "Loading nodes..."
          })) : p.value ? (n(), L(Ss, {
            key: 1,
            message: p.value,
            retry: !0,
            onRetry: j
          }, null, 8, ["message"])) : (n(), i(G, { key: 2 }, [
            v.value.total_count ? (n(), L(gn, {
              key: 0,
              variant: "compact"
            }, {
              default: g(() => [
                $(m(v.value.installed_count) + " installed ", 1),
                v.value.missing_count ? (n(), i(G, { key: 0 }, [
                  $(" • " + m(v.value.missing_count) + " missing", 1)
                ], 64)) : h("", !0),
                H.value ? (n(), i(G, { key: 1 }, [
                  $(" • " + m(H.value) + " blocked", 1)
                ], 64)) : h("", !0),
                D.value ? (n(), i(G, { key: 2 }, [
                  $(" • " + m(D.value) + " community-mapped", 1)
                ], 64)) : h("", !0),
                v.value.untracked_count ? (n(), i(G, { key: 3 }, [
                  $(" • " + m(v.value.untracked_count) + " untracked", 1)
                ], 64)) : h("", !0)
              ]),
              _: 1
            })) : h("", !0),
            he.value ? (n(), L(bt, {
              key: 1,
              title: "VERSION MISMATCHES",
              count: e.versionMismatches.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                t("div", $2, [
                  R[8] || (R[8] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("span", null, m(e.versionMismatches.length) + " node(s) have wrong versions. Environment needs repair.", 1)
                ]),
                (n(!0), i(G, null, ke(e.versionMismatches, (ue) => (n(), L(At, {
                  key: ue.name,
                  status: "warning"
                }, {
                  icon: g(() => [...R[9] || (R[9] = [
                    $("⚠", -1)
                  ])]),
                  title: g(() => [
                    $(m(ue.name), 1)
                  ]),
                  subtitle: g(() => [
                    t("span", C2, [
                      t("span", x2, m(ue.actual), 1),
                      R[10] || (R[10] = t("span", { class: "version-arrow" }, "→", -1)),
                      t("span", S2, m(ue.expected), 1)
                    ])
                  ]),
                  actions: g(() => [
                    _(xe, {
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
                (n(!0), i(G, null, ke(N.value, (ue) => (n(), L(At, {
                  key: `blocked-${ue.name}`,
                  status: "warning"
                }, {
                  icon: g(() => [...R[12] || (R[12] = [
                    $("⛔", -1)
                  ])]),
                  title: g(() => [
                    $(m(ue.name), 1)
                  ]),
                  subtitle: g(() => [
                    t("span", I2, m(Q(ue)), 1)
                  ]),
                  details: g(() => [
                    _(_t, {
                      label: "Guidance:",
                      value: ue.issue_guidance || de(ue)
                    }, null, 8, ["value"]),
                    _(_t, {
                      label: "Used by:",
                      value: ne(ue)
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    _(xe, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Ve) => pe(ue)
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
            A.value.length ? (n(), L(bt, {
              key: 3,
              title: "COMMUNITY-MAPPED",
              count: A.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                (n(!0), i(G, null, ke(A.value, (ue) => (n(), L(At, {
                  key: `community-${ue.name}`,
                  status: "warning"
                }, {
                  icon: g(() => [...R[14] || (R[14] = [
                    $("⚠", -1)
                  ])]),
                  title: g(() => [
                    $(m(ue.name), 1)
                  ]),
                  subtitle: g(() => [
                    t("span", E2, m(Ne(ue)), 1)
                  ]),
                  details: g(() => [
                    _(_t, {
                      label: "Guidance:",
                      value: ue.issue_guidance || le(ue)
                    }, null, 8, ["value"]),
                    _(_t, {
                      label: "Used by:",
                      value: ne(ue)
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    _(xe, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Ve) => pe(ue)
                    }, {
                      default: g(() => [...R[15] || (R[15] = [
                        $(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    Z(ue) ? (n(), i("span", T2, "Queued")) : (n(), i(G, { key: 1 }, [
                      ue.registry_id ? (n(), L(xe, {
                        key: 0,
                        variant: "primary",
                        size: "sm",
                        onClick: (Ve) => M(ue)
                      }, {
                        default: g(() => [...R[16] || (R[16] = [
                          $(" Install ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : h("", !0),
                      ue.repository ? (n(), L(xe, {
                        key: 1,
                        variant: "secondary",
                        size: "sm",
                        onClick: (Ve) => V(ue)
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
            T.value.length ? (n(), L(bt, {
              key: 4,
              title: "UNTRACKED",
              count: T.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                (n(!0), i(G, null, ke(T.value, (ue) => (n(), L(At, {
                  key: ue.name,
                  status: "warning"
                }, {
                  icon: g(() => [...R[18] || (R[18] = [
                    $("?", -1)
                  ])]),
                  title: g(() => [
                    $(m(ue.name), 1)
                  ]),
                  subtitle: g(() => [...R[19] || (R[19] = [
                    t("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: g(() => [
                    _(_t, {
                      label: "Used by:",
                      value: ne(ue)
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    _(xe, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Ve) => pe(ue)
                    }, {
                      default: g(() => [...R[20] || (R[20] = [
                        $(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    _(xe, {
                      variant: "primary",
                      size: "sm",
                      onClick: (Ve) => Ue(ue.name)
                    }, {
                      default: g(() => [...R[21] || (R[21] = [
                        $(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    _(xe, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (Ve) => se(ue.name)
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
                (n(!0), i(G, null, ke(U.value, (ue) => (n(), L(At, {
                  key: ue.name,
                  status: "synced"
                }, {
                  icon: g(() => [
                    $(m(ue.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: g(() => [
                    $(m(ue.name), 1)
                  ]),
                  subtitle: g(() => [
                    ue.version ? (n(), i("span", M2, m(ue.source === "development" ? "" : "v") + m(ue.version), 1)) : (n(), i("span", P2, "version unknown")),
                    t("span", R2, " • " + m(re(ue.source)), 1)
                  ]),
                  details: g(() => [
                    _(_t, {
                      label: "Used by:",
                      value: ne(ue)
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    _(xe, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Ve) => pe(ue)
                    }, {
                      default: g(() => [...R[23] || (R[23] = [
                        $(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    _(xe, {
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
            E.value.length ? (n(), L(bt, {
              key: 6,
              title: "MISSING",
              count: E.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                (n(!0), i(G, null, ke(E.value, (ue) => (n(), L(At, {
                  key: ue.name,
                  status: "missing"
                }, {
                  icon: g(() => [...R[25] || (R[25] = [
                    $("!", -1)
                  ])]),
                  title: g(() => [
                    $(m(ue.name), 1)
                  ]),
                  subtitle: g(() => [...R[26] || (R[26] = [
                    t("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: g(() => [
                    _(_t, {
                      label: "Required by:",
                      value: ne(ue)
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    _(xe, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Ve) => pe(ue)
                    }, {
                      default: g(() => [...R[27] || (R[27] = [
                        $(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    _(xe, {
                      variant: "primary",
                      size: "sm",
                      onClick: (Ve) => oe(ue.name)
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
            !U.value.length && !E.value.length && !N.value.length && !A.value.length && !T.value.length ? (n(), L(us, {
              key: 7,
              icon: "📭",
              message: w.value ? `No nodes match '${w.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : h("", !0)
          ], 64))
        ]),
        _: 1
      }),
      _(Qt, {
        show: y.value,
        title: "About Custom Nodes",
        onClose: R[4] || (R[4] = (ue) => y.value = !1)
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
          _(xe, {
            variant: "primary",
            onClick: R[3] || (R[3] = (ue) => y.value = !1)
          }, {
            default: g(() => [...R[30] || (R[30] = [
              $(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      k.value ? (n(), L(y2, {
        key: 0,
        node: k.value,
        onClose: R[5] || (R[5] = (ue) => k.value = null)
      }, null, 8, ["node"])) : h("", !0),
      C.value ? (n(), L(ou, {
        key: 1,
        title: C.value.title,
        message: C.value.message,
        warning: C.value.warning,
        "confirm-label": C.value.confirmLabel,
        destructive: C.value.destructive,
        onConfirm: C.value.onConfirm,
        onCancel: R[6] || (R[6] = (ue) => C.value = null)
      }, null, 8, ["title", "message", "warning", "confirm-label", "destructive", "onConfirm"])) : h("", !0)
    ], 64));
  }
}), L2 = /* @__PURE__ */ Ie(N2, [["__scopeId", "data-v-3ef68ac4"]]), D2 = { class: "setting-info" }, O2 = { class: "setting-label" }, U2 = {
  key: 0,
  class: "required-marker"
}, A2 = {
  key: 0,
  class: "setting-description"
}, z2 = { class: "setting-control" }, V2 = /* @__PURE__ */ Se({
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
      t("div", D2, [
        t("div", O2, [
          $(m(e.label) + " ", 1),
          e.required ? (n(), i("span", U2, "*")) : h("", !0)
        ]),
        e.description ? (n(), i("div", A2, m(e.description), 1)) : h("", !0)
      ]),
      t("div", z2, [
        et(s.$slots, "default", {}, void 0)
      ])
    ], 2));
  }
}), Hs = /* @__PURE__ */ Ie(V2, [["__scopeId", "data-v-3e106b1c"]]), F2 = ["type", "value", "placeholder", "disabled"], B2 = /* @__PURE__ */ Se({
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
        d[0] || (d[0] = ts((v) => c.$emit("enter"), ["enter"])),
        d[1] || (d[1] = ts((v) => c.$emit("escape"), ["escape"]))
      ],
      onFocus: d[2] || (d[2] = (v) => c.$emit("focus")),
      onBlur: d[3] || (d[3] = (v) => c.$emit("blur"))
    }, null, 42, F2));
  }
}), $s = /* @__PURE__ */ Ie(B2, [["__scopeId", "data-v-0380d08f"]]), W2 = { class: "toggle" }, G2 = ["checked", "disabled"], j2 = /* @__PURE__ */ Se({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (n(), i("label", W2, [
      t("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        onChange: o[0] || (o[0] = (a) => s.$emit("update:modelValue", a.target.checked)),
        class: "toggle-input"
      }, null, 40, G2),
      o[1] || (o[1] = t("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), xi = /* @__PURE__ */ Ie(j2, [["__scopeId", "data-v-71c0f550"]]), Wa = "ComfyGit.Deploy.GitHubPAT";
function nu(e) {
  return e.startsWith("git@") || e.startsWith("ssh://");
}
function H2(e) {
  return e.startsWith("https://") || e.startsWith("http://");
}
function q2() {
  function e() {
    try {
      return localStorage.getItem(Wa);
    } catch {
      return null;
    }
  }
  function s(l) {
    try {
      localStorage.setItem(Wa, l);
    } catch (r) {
      console.error("[useGitAuth] Failed to save token:", r);
    }
  }
  function o() {
    try {
      localStorage.removeItem(Wa);
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
    isRemoteSsh: nu,
    isRemoteHttps: H2
  };
}
const K2 = { class: "workspace-settings-content" }, J2 = { class: "settings-section" }, Y2 = { class: "path-setting" }, Q2 = { class: "path-value" }, X2 = { class: "path-setting" }, Z2 = { class: "path-value" }, e$ = { class: "settings-section" }, t$ = { class: "token-setting" }, s$ = {
  key: 0,
  class: "token-warning"
}, o$ = { class: "token-actions" }, n$ = { class: "settings-section" }, a$ = { class: "settings-section" }, l$ = /* @__PURE__ */ Se({
  __name: "WorkspaceSettingsContent",
  props: {
    workspacePath: {}
  },
  emits: ["saved", "error"],
  setup(e, { expose: s, emit: o }) {
    const a = e, l = o, { getConfig: r, updateConfig: u, getRemotes: c, testGitAuth: d } = dt(), { getToken: v, setToken: f, clearToken: p, hasToken: w } = q2(), y = b(!1), k = b(null), x = b(null), C = b(null), S = b(null), U = b(""), E = b(""), T = b(""), N = b(""), A = b(!1), H = b(!1), D = b(!1), W = b(""), Z = b(!1), ee = b(!1), re = b(null), he = b(!1), ne = b(!0);
    function Q(j) {
      return j.join(" ");
    }
    function de(j) {
      return j.trim() ? j.trim().split(/\s+/) : [];
    }
    const Ne = O(() => {
      if (!S.value) return !1;
      const j = A.value, P = H.value, R = D.value, ue = N.value !== Q(S.value.comfyui_extra_args || []);
      return j || P || R || ue;
    }), le = O(() => w());
    async function pe() {
      var j;
      y.value = !0, k.value = null;
      try {
        C.value = await r(a.workspacePath || void 0), S.value = { ...C.value }, U.value = C.value.civitai_api_key || "", E.value = C.value.huggingface_token || "", N.value = Q(C.value.comfyui_extra_args || []), T.value = v() || "", W.value = T.value, A.value = !1, H.value = !1, D.value = !1, re.value = null;
        const P = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        he.value = P !== "false", ne.value = localStorage.getItem("comfygit:popup-disabled") !== "true";
        try {
          const ue = (j = (await c()).remotes) == null ? void 0 : j.find((Ve) => Ve.name === "origin");
          Z.value = !!(ue && nu(ue.url));
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
      var j;
      x.value = null;
      try {
        const P = {};
        A.value && (P.civitai_api_key = U.value || null), H.value && (P.huggingface_token = E.value || null), N.value !== Q(((j = S.value) == null ? void 0 : j.comfyui_extra_args) || []) && (P.comfyui_extra_args = de(N.value)), await u(P, a.workspacePath || void 0), D.value && (T.value ? f(T.value) : p()), await pe(), x.value = { type: "success", message: "Settings saved successfully" }, l("saved"), setTimeout(() => {
          x.value = null;
        }, 3e3);
      } catch (P) {
        const R = P instanceof Error ? P.message : "Failed to save settings";
        x.value = { type: "error", message: R }, l("error", R);
      }
    }
    function Ue() {
      S.value && (U.value = S.value.civitai_api_key || "", E.value = S.value.huggingface_token || "", N.value = Q(S.value.comfyui_extra_args || []), T.value = W.value, A.value = !1, H.value = !1, D.value = !1, re.value = null, x.value = null);
    }
    async function se() {
      if (T.value) {
        ee.value = !0, re.value = null;
        try {
          const j = await d(T.value);
          re.value = {
            type: j.status === "success" ? "success" : "error",
            message: j.message
          };
        } catch (j) {
          re.value = {
            type: "error",
            message: j instanceof Error ? j.message : "Connection test failed"
          };
        } finally {
          ee.value = !1;
        }
      }
    }
    function oe() {
      T.value = "", D.value = !0, re.value = null;
    }
    function M(j) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(j)), console.log("[ComfyGit] Auto-refresh setting saved:", j);
    }
    function V(j) {
      j ? localStorage.removeItem("comfygit:popup-disabled") : localStorage.setItem("comfygit:popup-disabled", "true"), console.log("[ComfyGit] Popup setting changed:", j ? "enabled" : "disabled");
    }
    return s({
      saveSettings: me,
      resetSettings: Ue,
      hasChanges: Ne,
      loadSettings: pe
    }), ot(pe), (j, P) => (n(), i("div", K2, [
      y.value ? (n(), L(xs, {
        key: 0,
        message: "Loading workspace settings..."
      })) : k.value ? (n(), L(Ss, {
        key: 1,
        message: k.value,
        retry: !0,
        onRetry: pe
      }, null, 8, ["message"])) : (n(), i(G, { key: 2 }, [
        _(bt, { title: "WORKSPACE PATHS" }, {
          default: g(() => {
            var R, ue;
            return [
              t("div", J2, [
                t("div", Y2, [
                  P[9] || (P[9] = t("div", { class: "path-label" }, "Workspace Root", -1)),
                  P[10] || (P[10] = t("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                  t("div", Q2, m(((R = C.value) == null ? void 0 : R.workspace_path) || "Loading..."), 1)
                ]),
                t("div", X2, [
                  P[11] || (P[11] = t("div", { class: "path-label" }, "Models Directory", -1)),
                  P[12] || (P[12] = t("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                  t("div", Z2, m(((ue = C.value) == null ? void 0 : ue.models_path) || "Not configured"), 1)
                ])
              ])
            ];
          }),
          _: 1
        }),
        _(bt, { title: "API CREDENTIALS" }, {
          default: g(() => [
            t("div", e$, [
              _(Hs, {
                label: "CivitAI API Key",
                description: "API key for downloading models from CivitAI"
              }, {
                default: g(() => [
                  _($s, {
                    modelValue: U.value,
                    "onUpdate:modelValue": P[0] || (P[0] = (R) => U.value = R),
                    type: "password",
                    placeholder: "Enter CivitAI API key...",
                    style: { minWidth: "300px" },
                    onInput: P[1] || (P[1] = (R) => A.value = !0)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              _(Hs, {
                label: "HuggingFace Token",
                description: "Access token for downloading gated/private models from HuggingFace"
              }, {
                default: g(() => [
                  _($s, {
                    modelValue: E.value,
                    "onUpdate:modelValue": P[2] || (P[2] = (R) => E.value = R),
                    type: "password",
                    placeholder: "Enter HuggingFace token...",
                    style: { minWidth: "300px" },
                    onInput: P[3] || (P[3] = (R) => H.value = !0)
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
                  t("div", t$, [
                    _($s, {
                      modelValue: T.value,
                      "onUpdate:modelValue": P[4] || (P[4] = (R) => T.value = R),
                      type: "password",
                      placeholder: "ghp_xxxxxxxxxxxxxxxxxxxx",
                      onInput: P[5] || (P[5] = (R) => D.value = !0)
                    }, null, 8, ["modelValue"]),
                    Z.value ? (n(), i("div", s$, " SSH origin remote detected. PAT authentication only works with HTTPS remotes. ")) : h("", !0),
                    P[15] || (P[15] = t("div", { class: "token-help" }, " Stored in your browser only. Never sent to the server except when you explicitly test or use authenticated remote operations. ", -1)),
                    t("div", o$, [
                      _(xe, {
                        variant: "ghost",
                        size: "xs",
                        loading: ee.value,
                        disabled: !T.value || ee.value,
                        onClick: se
                      }, {
                        default: g(() => [...P[13] || (P[13] = [
                          $(" Test Connection ", -1)
                        ])]),
                        _: 1
                      }, 8, ["loading", "disabled"]),
                      le.value ? (n(), L(xe, {
                        key: 0,
                        variant: "ghost",
                        size: "xs",
                        onClick: oe
                      }, {
                        default: g(() => [...P[14] || (P[14] = [
                          $(" Clear ", -1)
                        ])]),
                        _: 1
                      })) : h("", !0)
                    ]),
                    re.value ? (n(), i("div", {
                      key: 1,
                      class: De(["token-test-result", re.value.type])
                    }, m(re.value.message), 3)) : h("", !0)
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
            t("div", n$, [
              _(Hs, {
                label: "Extra Startup Arguments",
                description: "Additional command-line arguments passed to ComfyUI on startup (e.g., --lowvram, --listen 0.0.0.0). Takes effect on next restart."
              }, {
                default: g(() => [
                  _($s, {
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
            t("div", a$, [
              _(Hs, {
                label: "Auto-Refresh After Git Operations",
                description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
              }, {
                default: g(() => [
                  _(xi, {
                    modelValue: he.value,
                    "onUpdate:modelValue": [
                      P[7] || (P[7] = (R) => he.value = R),
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
                  _(xi, {
                    modelValue: ne.value,
                    "onUpdate:modelValue": [
                      P[8] || (P[8] = (R) => ne.value = R),
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
}), au = /* @__PURE__ */ Ie(l$, [["__scopeId", "data-v-f1bdc574"]]), i$ = /* @__PURE__ */ Se({
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
              _(xe, {
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
              (u = s.value) != null && u.hasChanges ? (n(), L(xe, {
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
        _(au, {
          ref_key: "contentRef",
          ref: s,
          onSaved: o
        }, null, 512)
      ]),
      _: 1
    }));
  }
}), r$ = { class: "env-title" }, u$ = {
  key: 0,
  class: "current-badge"
}, c$ = {
  key: 0,
  class: "branch-info"
}, d$ = /* @__PURE__ */ Se({
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
    }, ss({
      icon: g(() => [
        $(m(e.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: g(() => [
        t("div", r$, [
          t("span", null, m(e.environmentName), 1),
          e.isCurrent && e.showCurrentLabel ? (n(), i("span", u$, "CURRENT")) : h("", !0)
        ])
      ]),
      subtitle: g(() => [
        e.currentBranch ? (n(), i("span", c$, [
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
}), m$ = /* @__PURE__ */ Ie(d$, [["__scopeId", "data-v-9231917a"]]), f$ = { class: "env-details" }, v$ = { class: "status-row" }, p$ = {
  key: 0,
  class: "detail-row"
}, g$ = { class: "value mono" }, h$ = {
  key: 1,
  class: "detail-row"
}, y$ = { class: "value mono small" }, w$ = { class: "collapsible-section" }, _$ = { class: "value" }, k$ = {
  key: 0,
  class: "collapsible-body"
}, b$ = { class: "item-list" }, $$ = { class: "item-name" }, C$ = { class: "item-name" }, x$ = { class: "item-name" }, S$ = { class: "item-name" }, I$ = {
  key: 0,
  class: "empty-list"
}, E$ = { class: "collapsible-section" }, T$ = { class: "value" }, M$ = {
  key: 0,
  class: "collapsible-body"
}, P$ = { class: "item-list" }, R$ = { class: "item-name" }, N$ = {
  key: 0,
  class: "item-meta"
}, L$ = {
  key: 0,
  class: "empty-list"
}, D$ = { class: "collapsible-section" }, O$ = { class: "value" }, U$ = {
  key: 0,
  class: "missing-count"
}, A$ = {
  key: 0,
  class: "collapsible-body"
}, z$ = { class: "item-list" }, V$ = { class: "model-row" }, F$ = { class: "item-name" }, B$ = { class: "model-meta" }, W$ = { class: "item-meta" }, G$ = {
  key: 0,
  class: "item-meta"
}, j$ = {
  key: 0,
  class: "empty-list"
}, H$ = {
  key: 2,
  class: "section-divider"
}, q$ = {
  key: 3,
  class: "detail-row"
}, K$ = { class: "value" }, J$ = { class: "footer-actions" }, Y$ = /* @__PURE__ */ Se({
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
        var f, p, w, y, k, x, C, S, U, E, T, N, A, H;
        return [
          t("div", f$, [
            t("div", v$, [
              v[7] || (v[7] = t("span", { class: "label" }, "Status:", -1)),
              t("span", {
                class: De(["status-badge", e.environment.is_current ? "current" : "inactive"])
              }, m(e.environment.is_current ? "Current" : "Inactive"), 3)
            ]),
            e.environment.current_branch ? (n(), i("div", p$, [
              v[8] || (v[8] = t("span", { class: "label" }, "Branch:", -1)),
              t("span", g$, m(e.environment.current_branch), 1)
            ])) : h("", !0),
            e.environment.path ? (n(), i("div", h$, [
              v[9] || (v[9] = t("span", { class: "label" }, "Path:", -1)),
              t("span", y$, m(e.environment.path), 1)
            ])) : h("", !0),
            v[18] || (v[18] = t("div", { class: "section-divider" }, null, -1)),
            t("div", w$, [
              t("div", {
                class: "collapsible-header",
                onClick: v[0] || (v[0] = (D) => r("workflows"))
              }, [
                v[10] || (v[10] = t("span", { class: "label" }, "Workflows:", -1)),
                t("span", _$, m(((f = e.detail) == null ? void 0 : f.workflow_count) ?? e.environment.workflow_count), 1),
                (p = e.detail) != null && p.workflows ? (n(), i("span", {
                  key: 0,
                  class: De(["chevron", { expanded: l.value.has("workflows") }])
                }, "▶", 2)) : h("", !0)
              ]),
              (w = e.detail) != null && w.workflows && l.value.has("workflows") ? (n(), i("div", k$, [
                t("div", b$, [
                  (n(!0), i(G, null, ke(e.detail.workflows.synced, (D) => (n(), i("div", {
                    key: "synced-" + D,
                    class: "list-item"
                  }, [
                    t("span", $$, m(D), 1),
                    v[11] || (v[11] = t("span", { class: "sync-badge synced" }, "synced", -1))
                  ]))), 128)),
                  (n(!0), i(G, null, ke(e.detail.workflows.new, (D) => (n(), i("div", {
                    key: "new-" + D,
                    class: "list-item"
                  }, [
                    t("span", C$, m(D), 1),
                    v[12] || (v[12] = t("span", { class: "sync-badge new" }, "new", -1))
                  ]))), 128)),
                  (n(!0), i(G, null, ke(e.detail.workflows.modified, (D) => (n(), i("div", {
                    key: "mod-" + D,
                    class: "list-item"
                  }, [
                    t("span", x$, m(D), 1),
                    v[13] || (v[13] = t("span", { class: "sync-badge modified" }, "modified", -1))
                  ]))), 128)),
                  (n(!0), i(G, null, ke(e.detail.workflows.deleted, (D) => (n(), i("div", {
                    key: "del-" + D,
                    class: "list-item"
                  }, [
                    t("span", S$, m(D), 1),
                    v[14] || (v[14] = t("span", { class: "sync-badge deleted" }, "deleted", -1))
                  ]))), 128)),
                  u.value ? (n(), i("div", I$, "No workflows")) : h("", !0)
                ])
              ])) : h("", !0)
            ]),
            t("div", E$, [
              t("div", {
                class: "collapsible-header",
                onClick: v[1] || (v[1] = (D) => r("nodes"))
              }, [
                v[15] || (v[15] = t("span", { class: "label" }, "Nodes:", -1)),
                t("span", T$, m(((y = e.detail) == null ? void 0 : y.node_count) ?? e.environment.node_count), 1),
                (k = e.detail) != null && k.nodes ? (n(), i("span", {
                  key: 0,
                  class: De(["chevron", { expanded: l.value.has("nodes") }])
                }, "▶", 2)) : h("", !0)
              ]),
              (x = e.detail) != null && x.nodes && l.value.has("nodes") ? (n(), i("div", M$, [
                t("div", P$, [
                  (n(!0), i(G, null, ke(e.detail.nodes, (D) => (n(), i("div", {
                    key: D.name,
                    class: "list-item"
                  }, [
                    t("span", R$, m(D.name), 1),
                    D.version ? (n(), i("span", N$, m(D.version), 1)) : h("", !0)
                  ]))), 128)),
                  e.detail.nodes.length ? h("", !0) : (n(), i("div", L$, "No nodes"))
                ])
              ])) : h("", !0)
            ]),
            t("div", D$, [
              t("div", {
                class: "collapsible-header",
                onClick: v[2] || (v[2] = (D) => r("models"))
              }, [
                v[16] || (v[16] = t("span", { class: "label" }, "Models:", -1)),
                t("span", O$, [
                  $(m(((C = e.detail) == null ? void 0 : C.model_count) ?? e.environment.model_count) + " ", 1),
                  (U = (S = e.detail) == null ? void 0 : S.models) != null && U.missing.length ? (n(), i("span", U$, "(" + m(e.detail.models.missing.length) + " missing)", 1)) : h("", !0)
                ]),
                (E = e.detail) != null && E.models ? (n(), i("span", {
                  key: 0,
                  class: De(["chevron", { expanded: l.value.has("models") }])
                }, "▶", 2)) : h("", !0)
              ]),
              (T = e.detail) != null && T.models && l.value.has("models") ? (n(), i("div", A$, [
                t("div", z$, [
                  (n(!0), i(G, null, ke(e.detail.models.missing, (D) => (n(), i("div", {
                    key: D.filename,
                    class: "list-item model-item"
                  }, [
                    t("div", V$, [
                      t("span", F$, m(D.filename), 1),
                      t("span", {
                        class: De(["criticality-badge", D.criticality])
                      }, m(D.criticality), 3)
                    ]),
                    t("div", B$, [
                      t("span", W$, m(D.category), 1),
                      D.workflow_names.length ? (n(), i("span", G$, " used by: " + m(D.workflow_names.join(", ")), 1)) : h("", !0)
                    ])
                  ]))), 128)),
                  e.detail.models.missing.length ? h("", !0) : (n(), i("div", j$, "No missing models"))
                ])
              ])) : h("", !0)
            ]),
            (N = e.detail) != null && N.created_at || e.environment.created_at ? (n(), i("div", H$)) : h("", !0),
            (A = e.detail) != null && A.created_at || e.environment.created_at ? (n(), i("div", q$, [
              v[17] || (v[17] = t("span", { class: "label" }, "Created:", -1)),
              t("span", K$, m(c(((H = e.detail) == null ? void 0 : H.created_at) ?? e.environment.created_at)), 1)
            ])) : h("", !0)
          ])
        ];
      }),
      footer: g(() => [
        t("div", J$, [
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
}), Q$ = /* @__PURE__ */ Ie(Y$, [["__scopeId", "data-v-750671f5"]]), lu = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], iu = "3.12", Pl = [
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
], ru = "auto", X$ = { class: "progress-bar" }, Z$ = /* @__PURE__ */ Se({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(e) {
    const s = e, o = O(() => `${Math.max(0, Math.min(100, s.progress))}%`);
    return (a, l) => (n(), i("div", X$, [
      t("div", {
        class: De(["progress-fill", e.variant]),
        style: Ft({ width: o.value })
      }, null, 6)
    ]));
  }
}), uu = /* @__PURE__ */ Ie(Z$, [["__scopeId", "data-v-1beb0512"]]), eC = { class: "task-progress" }, tC = { class: "progress-info" }, sC = { class: "progress-percentage" }, oC = { class: "progress-message" }, nC = {
  key: 0,
  class: "progress-steps"
}, aC = { class: "step-icon" }, lC = { class: "step-label" }, iC = /* @__PURE__ */ Se({
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
    return (l, r) => (n(), i("div", eC, [
      _(uu, {
        progress: e.progress,
        variant: e.variant
      }, null, 8, ["progress", "variant"]),
      t("div", tC, [
        t("span", sC, m(e.progress) + "%", 1),
        t("span", oC, m(e.message), 1)
      ]),
      e.showSteps && e.steps.length > 0 ? (n(), i("div", nC, [
        (n(!0), i(G, null, ke(e.steps, (u) => (n(), i("div", {
          key: u.id,
          class: De(["step", o(u.id)])
        }, [
          t("span", aC, m(a(u.id)), 1),
          t("span", lC, m(u.label), 1)
        ], 2))), 128))
      ])) : h("", !0)
    ]));
  }
}), Yn = /* @__PURE__ */ Ie(iC, [["__scopeId", "data-v-9d1de66c"]]), rC = {
  key: 0,
  class: "create-env-form"
}, uC = { class: "form-field" }, cC = { class: "input-wrapper" }, dC = {
  key: 0,
  class: "validating-indicator"
}, mC = {
  key: 1,
  class: "valid-indicator"
}, fC = {
  key: 0,
  class: "field-error"
}, vC = { class: "form-field" }, pC = ["value"], gC = { class: "form-field" }, hC = ["disabled"], yC = ["value"], wC = { class: "form-field" }, _C = ["value"], kC = { class: "form-field form-field--checkbox" }, bC = { class: "form-checkbox" }, $C = {
  key: 1,
  class: "create-env-progress"
}, CC = { class: "creating-intro" }, xC = {
  key: 0,
  class: "progress-warning"
}, SC = {
  key: 1,
  class: "create-error"
}, IC = { class: "error-message" }, EC = {
  key: 1,
  class: "footer-status"
}, TC = 10, MC = /* @__PURE__ */ Se({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(e, { emit: s }) {
    const o = s, { getComfyUIReleases: a, createEnvironment: l, getCreateProgress: r, validateEnvironmentName: u } = dt(), c = b(""), d = b(iu), v = b("latest"), f = b(ru), p = b(!1), w = b(null), y = b(!1), k = b(!1);
    let x = null, C = 0;
    const S = O(() => !!c.value.trim() && k.value && !w.value && !y.value && !T.value), U = b([{ tag_name: "latest", name: "Latest", published_at: "" }]), E = b(!1), T = b(!1), N = b({
      progress: 0,
      message: ""
    });
    let A = null, H = 0;
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
    ], W = b(null);
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
    async function ee() {
      x && (clearTimeout(x), x = null), await Z(c.value, !0);
    }
    function re() {
      T.value || o("close");
    }
    async function he() {
      const le = c.value.trim();
      if (!le) {
        w.value = "Environment name is required";
        return;
      }
      if (x && (clearTimeout(x), x = null), !!await Z(le, !0)) {
        T.value = !0, N.value = { progress: 0, message: "Starting...", phase: "init" };
        try {
          const me = {
            name: le,
            python_version: d.value,
            comfyui_version: v.value,
            torch_backend: f.value,
            switch_after: !1
            // We'll handle switch in parent after modal closes
          }, Ue = await l(me);
          Ue.status === "started" ? ne() : Ue.status === "error" && (N.value = {
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
    function ne() {
      A || (H = 0, A = window.setInterval(async () => {
        try {
          const le = await r();
          H = 0, N.value = {
            progress: le.progress ?? 0,
            message: le.message,
            phase: le.phase,
            error: le.error
          }, le.state === "complete" ? (Q(), o("created", le.environment_name || c.value.trim(), p.value)) : le.state === "error" ? (Q(), N.value.error = le.error || le.message) : le.state === "idle" && T.value && (Q(), N.value.error = "Creation was interrupted. Please try again.");
        } catch {
          H++, H >= TC && (Q(), N.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function Q() {
      A && (clearInterval(A), A = null);
    }
    function de() {
      T.value = !1, N.value = { progress: 0, message: "" }, o("close");
    }
    async function Ne() {
      E.value = !0;
      try {
        U.value = await a();
      } catch (le) {
        console.error("Failed to load ComfyUI releases:", le);
      } finally {
        E.value = !1;
      }
    }
    return ot(async () => {
      var le;
      await Rt(), (le = W.value) == null || le.focus(), Ne();
    }), Ro(() => {
      Q(), x && (clearTimeout(x), x = null);
    }), (le, pe) => (n(), L(Ct, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !T.value,
      onClose: re
    }, {
      body: g(() => [
        T.value ? (n(), i("div", $C, [
          t("p", CC, [
            pe[12] || (pe[12] = $(" Creating environment ", -1)),
            t("strong", null, m(c.value), 1),
            pe[13] || (pe[13] = $("... ", -1))
          ]),
          _(Yn, {
            progress: N.value.progress,
            message: N.value.message,
            "current-phase": N.value.phase,
            variant: N.value.error ? "error" : "default",
            "show-steps": !0,
            steps: D
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          N.value.error ? h("", !0) : (n(), i("p", xC, " This may take several minutes. Please wait... ")),
          N.value.error ? (n(), i("div", SC, [
            t("p", IC, m(N.value.error), 1)
          ])) : h("", !0)
        ])) : (n(), i("div", rC, [
          t("div", uC, [
            pe[6] || (pe[6] = t("label", { class: "form-label" }, "Name", -1)),
            t("div", cC, [
              St(t("input", {
                ref_key: "nameInput",
                ref: W,
                "onUpdate:modelValue": pe[0] || (pe[0] = (me) => c.value = me),
                type: "text",
                class: De(["form-input", { error: !!w.value, valid: k.value }]),
                placeholder: "my-environment",
                onKeyup: ts(he, ["enter"]),
                onBlur: ee
              }, null, 34), [
                [xo, c.value]
              ]),
              y.value ? (n(), i("span", dC, "...")) : k.value ? (n(), i("span", mC, "✓")) : h("", !0)
            ]),
            w.value ? (n(), i("div", fC, m(w.value), 1)) : h("", !0),
            pe[7] || (pe[7] = t("div", { class: "field-hint" }, "Use letters, numbers, dots, hyphens, and underscores.", -1))
          ]),
          t("div", vC, [
            pe[8] || (pe[8] = t("label", { class: "form-label" }, "Python Version", -1)),
            St(t("select", {
              "onUpdate:modelValue": pe[1] || (pe[1] = (me) => d.value = me),
              class: "form-select"
            }, [
              (n(!0), i(G, null, ke(Ye(lu), (me) => (n(), i("option", {
                key: me,
                value: me
              }, m(me), 9, pC))), 128))
            ], 512), [
              [So, d.value]
            ])
          ]),
          t("div", gC, [
            pe[9] || (pe[9] = t("label", { class: "form-label" }, "ComfyUI Version", -1)),
            St(t("select", {
              "onUpdate:modelValue": pe[2] || (pe[2] = (me) => v.value = me),
              class: "form-select",
              disabled: E.value
            }, [
              (n(!0), i(G, null, ke(U.value, (me) => (n(), i("option", {
                key: me.tag_name,
                value: me.tag_name
              }, m(me.name), 9, yC))), 128))
            ], 8, hC), [
              [So, v.value]
            ])
          ]),
          t("div", wC, [
            pe[10] || (pe[10] = t("label", { class: "form-label" }, "PyTorch Backend", -1)),
            St(t("select", {
              "onUpdate:modelValue": pe[3] || (pe[3] = (me) => f.value = me),
              class: "form-select"
            }, [
              (n(!0), i(G, null, ke(Ye(Pl), (me) => (n(), i("option", {
                key: me,
                value: me
              }, m(me) + m(me === "auto" ? " (detect GPU)" : ""), 9, _C))), 128))
            ], 512), [
              [So, f.value]
            ])
          ]),
          t("div", kC, [
            t("label", bC, [
              St(t("input", {
                type: "checkbox",
                "onUpdate:modelValue": pe[4] || (pe[4] = (me) => p.value = me)
              }, null, 512), [
                [Kn, p.value]
              ]),
              pe[11] || (pe[11] = t("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ]))
      ]),
      footer: g(() => [
        T.value ? (n(), i(G, { key: 1 }, [
          N.value.error ? (n(), L(Re, {
            key: 0,
            variant: "secondary",
            onClick: de
          }, {
            default: g(() => [...pe[16] || (pe[16] = [
              $(" Close ", -1)
            ])]),
            _: 1
          })) : (n(), i("span", EC, " Creating environment... "))
        ], 64)) : (n(), i(G, { key: 0 }, [
          _(Re, {
            variant: "primary",
            disabled: !S.value,
            onClick: he
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
}), PC = /* @__PURE__ */ Ie(MC, [["__scopeId", "data-v-3faa3d9b"]]), RC = /* @__PURE__ */ Se({
  __name: "EnvironmentsSection",
  emits: ["switch", "created", "delete", "import", "export"],
  setup(e, { expose: s, emit: o }) {
    const a = o, { getEnvironments: l, getEnvironmentDetails: r } = dt(), u = b([]), c = b(!1), d = b(null), v = b(""), f = b(!1), p = b(!1), w = b(null), y = b(null), k = O(() => {
      if (!v.value.trim()) return u.value;
      const N = v.value.toLowerCase();
      return u.value.filter(
        (A) => {
          var H;
          return A.name.toLowerCase().includes(N) || ((H = A.current_branch) == null ? void 0 : H.toLowerCase().includes(N));
        }
      );
    });
    function x(N, A) {
      p.value = !1, a("created", N, A);
    }
    function C() {
      p.value = !0;
    }
    async function S(N) {
      w.value = N, y.value = null;
      const A = await r(N.name);
      A && (y.value = A);
    }
    function U(N) {
      w.value = null, y.value = null, a("delete", N);
    }
    function E(N) {
      w.value = null, y.value = null, a("export", N);
    }
    async function T() {
      c.value = !0, d.value = null;
      try {
        u.value = await l();
      } catch (N) {
        d.value = N instanceof Error ? N.message : "Failed to load environments";
      } finally {
        c.value = !1;
      }
    }
    return ot(T), s({
      loadEnvironments: T,
      openCreateModal: C
    }), (N, A) => (n(), i(G, null, [
      _(Tt, null, {
        header: g(() => [
          _(Mt, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: A[1] || (A[1] = (H) => f.value = !0)
          }, {
            actions: g(() => [
              _(xe, {
                variant: "primary",
                size: "sm",
                onClick: C
              }, {
                default: g(() => [...A[7] || (A[7] = [
                  $(" Create ", -1)
                ])]),
                _: 1
              }),
              _(xe, {
                variant: "secondary",
                size: "sm",
                onClick: A[0] || (A[0] = (H) => N.$emit("import"))
              }, {
                default: g(() => [...A[8] || (A[8] = [
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
            "onUpdate:modelValue": A[2] || (A[2] = (H) => v.value = H),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          c.value ? (n(), L(xs, {
            key: 0,
            message: "Loading environments..."
          })) : d.value ? (n(), L(Ss, {
            key: 1,
            message: d.value,
            retry: !0,
            onRetry: T
          }, null, 8, ["message"])) : (n(), i(G, { key: 2 }, [
            k.value.length ? (n(), L(bt, {
              key: 0,
              title: "ENVIRONMENTS",
              count: k.value.length
            }, {
              default: g(() => [
                (n(!0), i(G, null, ke(k.value, (H) => (n(), L(m$, {
                  key: H.name,
                  "environment-name": H.name,
                  "is-current": H.is_current,
                  "current-branch": H.current_branch,
                  "show-last-used": !1
                }, {
                  actions: g(() => [
                    H.is_current ? h("", !0) : (n(), L(xe, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (D) => N.$emit("switch", H.name)
                    }, {
                      default: g(() => [...A[9] || (A[9] = [
                        $(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    _(xe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (D) => S(H)
                    }, {
                      default: g(() => [...A[10] || (A[10] = [
                        $(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    _(xe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (D) => N.$emit("export", H.name)
                    }, {
                      default: g(() => [...A[11] || (A[11] = [
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
            k.value.length ? h("", !0) : (n(), L(us, {
              key: 1,
              icon: "🌍",
              message: v.value ? `No environments match '${v.value}'` : "No environments found. Create one to get started!"
            }, ss({ _: 2 }, [
              v.value ? void 0 : {
                name: "actions",
                fn: g(() => [
                  _(xe, {
                    variant: "primary",
                    onClick: C
                  }, {
                    default: g(() => [...A[12] || (A[12] = [
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
      _(Qt, {
        show: f.value,
        title: "About Environments",
        onClose: A[4] || (A[4] = (H) => f.value = !1)
      }, {
        content: g(() => [...A[13] || (A[13] = [
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
          _(xe, {
            variant: "secondary",
            onClick: A[3] || (A[3] = (H) => f.value = !1)
          }, {
            default: g(() => [...A[14] || (A[14] = [
              $(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w.value ? (n(), L(Q$, {
        key: 0,
        environment: w.value,
        detail: y.value,
        "can-delete": u.value.length > 1,
        onClose: A[5] || (A[5] = (H) => {
          w.value = null, y.value = null;
        }),
        onDelete: U,
        onExport: E
      }, null, 8, ["environment", "detail", "can-delete"])) : h("", !0),
      p.value ? (n(), L(PC, {
        key: 1,
        onClose: A[6] || (A[6] = (H) => p.value = !1),
        onCreated: x
      })) : h("", !0)
    ], 64));
  }
}), NC = /* @__PURE__ */ Ie(RC, [["__scopeId", "data-v-92fdb370"]]), LC = { class: "file-path" }, DC = { class: "file-path-text" }, OC = ["title"], UC = /* @__PURE__ */ Se({
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
    return (l, r) => (n(), i("div", LC, [
      r[0] || (r[0] = t("span", { class: "file-path-icon" }, "📄", -1)),
      t("code", DC, m(e.path), 1),
      e.copyable ? (n(), i("button", {
        key: 0,
        class: "copy-btn",
        title: o.value ? "Copied!" : "Copy path",
        onClick: a
      }, m(o.value ? "✓" : "📋"), 9, OC)) : h("", !0)
    ]));
  }
}), AC = /* @__PURE__ */ Ie(UC, [["__scopeId", "data-v-f0982173"]]), zC = ["checked", "disabled"], VC = { class: "base-checkbox-box" }, FC = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, BC = {
  key: 0,
  class: "base-checkbox-label"
}, WC = /* @__PURE__ */ Se({
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
      }, null, 40, zC),
      t("span", VC, [
        e.modelValue ? (n(), i("svg", FC, [...o[1] || (o[1] = [
          t("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : h("", !0)
      ]),
      s.$slots.default ? (n(), i("span", BC, [
        et(s.$slots, "default", {}, void 0)
      ])) : h("", !0)
    ], 2));
  }
}), Qn = /* @__PURE__ */ Ie(WC, [["__scopeId", "data-v-bf17c831"]]), GC = { class: "export-blocked" }, jC = { class: "error-header" }, HC = { class: "error-summary" }, qC = { class: "error-title" }, KC = { class: "error-description" }, JC = { class: "issues-list" }, YC = { class: "issue-message" }, QC = {
  key: 0,
  class: "issue-details"
}, XC = ["onClick"], ZC = { class: "issue-fix" }, ex = {
  key: 0,
  class: "commit-section"
}, tx = {
  key: 0,
  class: "issues-warning"
}, sx = {
  key: 1,
  class: "commit-error"
}, ox = /* @__PURE__ */ Se({
  __name: "ExportBlockedModal",
  props: {
    issues: {},
    mode: {}
  },
  emits: ["close", "committed"],
  setup(e, { emit: s }) {
    const o = e, a = s, { commit: l } = dt(), r = b(""), u = b(!1), c = b(!1), d = b(""), v = fo({}), f = O(() => o.mode === "publish" ? "Publish" : "Export"), p = O(
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
            const E = ((S = U.issues) == null ? void 0 : S.map((T) => `${T.name}: ${T.issue}`).join("; ")) || "Unknown issues";
            d.value = `Commit blocked: ${E}`;
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
      onClose: U[4] || (U[4] = (E) => S.$emit("close"))
    }, {
      body: g(() => [
        t("div", GC, [
          t("div", jC, [
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
            t("div", HC, [
              t("h3", qC, m(f.value) + " blocked", 1),
              t("p", KC, m(p.value ? `Commit your changes to proceed with ${f.value.toLowerCase()}.` : `The following issues must be resolved before ${f.value.toLowerCase()}.`), 1)
            ])
          ]),
          t("div", JC, [
            (n(!0), i(G, null, ke(e.issues, (E, T) => (n(), i("div", {
              key: T,
              class: "issue-item"
            }, [
              t("div", YC, m(E.message), 1),
              E.details.length ? (n(), i("div", QC, [
                (n(!0), i(G, null, ke(x(T), (N, A) => (n(), i("div", {
                  key: A,
                  class: "issue-detail"
                }, m(N), 1))), 128)),
                E.details.length > 3 && !v[T] ? (n(), i("button", {
                  key: 0,
                  class: "show-more-inline",
                  onClick: (N) => v[T] = !0
                }, " +" + m(E.details.length - 3) + " more ", 9, XC)) : h("", !0)
              ])) : h("", !0),
              t("div", ZC, [
                E.type === "uncommitted_workflows" ? (n(), i(G, { key: 0 }, [
                  $(" Commit your workflow changes before " + m(f.value.toLowerCase()) + "ing. ", 1)
                ], 64)) : E.type === "uncommitted_git_changes" ? (n(), i(G, { key: 1 }, [
                  $(" Commit your changes before " + m(f.value.toLowerCase()) + "ing. ", 1)
                ], 64)) : E.type === "unresolved_issues" ? (n(), i(G, { key: 2 }, [
                  $(" Resolve all workflow issues before " + m(f.value.toLowerCase()) + "ing. ", 1)
                ], 64)) : h("", !0)
              ])
            ]))), 128))
          ]),
          p.value ? (n(), i("div", ex, [
            w.value ? (n(), i("div", tx, [
              U[7] || (U[7] = t("div", { class: "warning-header" }, [
                t("span", { class: "warning-icon-badge" }, "!"),
                t("span", { class: "warning-label" }, "Some workflow issues cannot be fixed by committing")
              ], -1)),
              _(Qn, {
                modelValue: c.value,
                "onUpdate:modelValue": U[0] || (U[0] = (E) => c.value = E),
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
              "onUpdate:modelValue": U[1] || (U[1] = (E) => r.value = E),
              placeholder: "Describe your changes...",
              disabled: u.value || y.value,
              rows: 3,
              "submit-on-enter": !0,
              onSubmit: C,
              onCtrlEnter: C
            }, null, 8, ["modelValue", "disabled"]),
            d.value ? (n(), i("div", sx, m(d.value), 1)) : h("", !0)
          ])) : h("", !0)
        ])
      ]),
      footer: g(() => [
        p.value ? (n(), i(G, { key: 0 }, [
          _(Re, {
            variant: "secondary",
            onClick: U[2] || (U[2] = (E) => S.$emit("close"))
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
          onClick: U[3] || (U[3] = (E) => S.$emit("close"))
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
}), cu = /* @__PURE__ */ Ie(ox, [["__scopeId", "data-v-a8990107"]]), nx = { class: "export-warnings" }, ax = {
  key: 0,
  class: "success-header"
}, lx = { class: "success-summary" }, ix = { class: "success-description" }, rx = { class: "warning-header" }, ux = { class: "warning-summary" }, cx = { class: "warning-title" }, dx = { class: "warning-description" }, mx = { class: "models-section" }, fx = { class: "models-list" }, vx = { class: "model-info" }, px = { class: "model-filename" }, gx = { class: "model-workflows" }, hx = ["onClick"], yx = /* @__PURE__ */ Se({
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
    return (f, p) => (n(), i(G, null, [
      _(Ct, {
        title: u.value === "publish" ? "Publish Warnings" : "Export Warnings",
        size: "md",
        onClose: p[3] || (p[3] = (w) => f.$emit("cancel"))
      }, {
        body: g(() => [
          t("div", nx, [
            e.models.length === 0 ? (n(), i("div", ax, [
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
              t("div", lx, [
                p[4] || (p[4] = t("h3", { class: "success-title" }, "All models have source URLs", -1)),
                t("p", ix, " Your environment is ready to " + m(u.value) + ". Recipients will be able to download all models automatically. ", 1)
              ])
            ])) : (n(), i(G, { key: 1 }, [
              t("div", rx, [
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
                t("div", ux, [
                  t("h3", cx, m(e.models.length) + " model" + m(e.models.length !== 1 ? "s" : "") + " missing source URLs ", 1),
                  t("p", dx, ` Recipients won't be able to download these models automatically. Click "Add Source" to fix, or ` + m(u.value) + " anyway. ", 1)
                ])
              ]),
              t("div", mx, [
                t("div", fx, [
                  (n(!0), i(G, null, ke(d.value, (w) => (n(), i("div", {
                    key: w.hash,
                    class: "model-item"
                  }, [
                    t("div", vx, [
                      t("div", px, m(w.filename), 1),
                      t("div", gx, " Used by: " + m(w.workflows.join(", ")), 1)
                    ]),
                    t("button", {
                      class: "add-source-btn",
                      onClick: (y) => r.value = w.hash
                    }, " Add Source ", 8, hx)
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
      r.value ? (n(), L(Ml, {
        key: 0,
        identifier: r.value,
        onClose: v
      }, null, 8, ["identifier"])) : h("", !0)
    ], 64));
  }
}), du = /* @__PURE__ */ Ie(yx, [["__scopeId", "data-v-9b6d5fce"]]), wx = { class: "export-card" }, _x = { class: "export-path-row" }, kx = { class: "export-actions" }, bx = {
  key: 1,
  class: "export-warning"
}, $x = /* @__PURE__ */ Se({
  __name: "ExportSection",
  props: {
    environmentName: {},
    embedded: { type: Boolean }
  },
  setup(e) {
    const s = e, { validateExport: o, exportEnvWithForce: a, validateEnvironmentExport: l, exportEnvironmentWithForce: r } = dt(), u = b(""), c = b(!1), d = b(!1), v = b(!1), f = b(null), p = b(!1), w = b(null), y = b(!1), k = b(!1), x = O(() => {
      var Z;
      return ((Z = s.environmentName) == null ? void 0 : Z.trim()) || null;
    }), C = O(() => x.value ? `EXPORT ENVIRONMENT: ${x.value.toUpperCase()}` : "EXPORT ENVIRONMENT"), S = O(() => x.value ? `Environment '${x.value}' has been exported` : "Your environment has been exported"), U = O(() => c.value ? "Validating..." : d.value ? "Exporting..." : "Export Environment");
    async function E() {
      c.value = !0, f.value = null;
      try {
        const Z = x.value ? await l(x.value) : await o();
        w.value = Z, Z.can_export ? Z.warnings.models_without_sources.length > 0 ? k.value = !0 : await H() : y.value = !0;
      } catch (Z) {
        f.value = {
          status: "error",
          message: Z instanceof Error ? Z.message : "Validation failed"
        };
      } finally {
        c.value = !1;
      }
    }
    async function T() {
      k.value = !1, await H();
    }
    async function N() {
      y.value = !1, c.value = !0;
      try {
        const Z = x.value ? await l(x.value) : await o();
        w.value = Z, Z.can_export ? Z.warnings.models_without_sources.length > 0 ? k.value = !0 : await H() : y.value = !0;
      } catch (Z) {
        f.value = {
          status: "error",
          message: Z instanceof Error ? Z.message : "Re-validation failed"
        };
      } finally {
        c.value = !1;
      }
    }
    async function A() {
      try {
        const Z = x.value ? await l(x.value) : await o();
        w.value = Z;
      } catch (Z) {
        console.error("Re-validation failed:", Z);
      }
    }
    async function H() {
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
        } catch (ee) {
          console.error("Failed to copy path:", ee);
        }
    }
    async function W() {
      var Z;
      if ((Z = f.value) != null && Z.path) {
        v.value = !0;
        try {
          const ee = await fetch(`/v2/comfygit/download?path=${encodeURIComponent(f.value.path)}`);
          if (!ee.ok)
            throw new Error(`Download failed: ${ee.statusText}`);
          const re = await ee.blob(), he = URL.createObjectURL(re), ne = f.value.path.split("/").pop() || "environment-export.tar.gz", Q = document.createElement("a");
          Q.href = he, Q.download = ne, document.body.appendChild(Q), Q.click(), document.body.removeChild(Q), URL.revokeObjectURL(he);
        } catch (ee) {
          console.error("Failed to download:", ee), alert(`Download failed: ${ee instanceof Error ? ee.message : "Unknown error"}`);
        } finally {
          v.value = !1;
        }
      }
    }
    return (Z, ee) => (n(), i(G, null, [
      _(Tt, null, ss({
        content: g(() => [
          _(bt, { title: "EXPORT OPTIONS" }, {
            default: g(() => [
              t("div", wx, [
                ee[7] || (ee[7] = t("div", { class: "export-card-header" }, [
                  t("span", { class: "export-icon" }, "📁"),
                  t("div", { class: "export-header-text" }, [
                    t("div", { class: "export-title" }, "Output Destination"),
                    t("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                t("div", _x, [
                  _($s, {
                    modelValue: u.value,
                    "onUpdate:modelValue": ee[1] || (ee[1] = (re) => u.value = re),
                    placeholder: "Leave empty for default, or enter path like /mnt/c/Users/you/exports/",
                    class: "path-input"
                  }, null, 8, ["modelValue"])
                ]),
                t("div", kx, [
                  _(xe, {
                    variant: "primary",
                    size: "md",
                    loading: c.value || d.value,
                    disabled: c.value || d.value,
                    onClick: E
                  }, {
                    default: g(() => [
                      ee[6] || (ee[6] = t("svg", {
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
              }, ss({
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
                        _(AC, {
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
                    f.value.models_without_sources && f.value.models_without_sources > 0 ? (n(), i("div", bx, [...ee[8] || (ee[8] = [
                      t("span", { class: "warning-icon" }, "!", -1),
                      t("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : h("", !0)
                  ]),
                  key: "0"
                } : void 0,
                f.value.status === "success" ? {
                  name: "actions",
                  fn: g(() => [
                    _(xe, {
                      variant: "primary",
                      size: "sm",
                      loading: v.value,
                      onClick: W
                    }, {
                      default: g(() => [...ee[9] || (ee[9] = [
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
                    _(xe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: D
                    }, {
                      default: g(() => [...ee[10] || (ee[10] = [
                        $(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    _(xe, {
                      variant: "ghost",
                      size: "sm",
                      onClick: ee[2] || (ee[2] = (re) => f.value = null)
                    }, {
                      default: g(() => [...ee[11] || (ee[11] = [
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
              onInfoClick: ee[0] || (ee[0] = (re) => p.value = !0)
            }, null, 8, ["title"])
          ]),
          key: "0"
        }
      ]), 1024),
      _(Qt, {
        show: p.value,
        title: "What Gets Exported",
        onClose: ee[3] || (ee[3] = (re) => p.value = !1)
      }, {
        content: g(() => [...ee[12] || (ee[12] = [
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
      y.value && w.value ? (n(), L(cu, {
        key: 0,
        issues: w.value.blocking_issues,
        onClose: ee[4] || (ee[4] = (re) => y.value = !1),
        onCommitted: N
      }, null, 8, ["issues"])) : h("", !0),
      k.value && w.value ? (n(), L(du, {
        key: 1,
        models: w.value.warnings.models_without_sources,
        onConfirm: T,
        onCancel: ee[5] || (ee[5] = (re) => k.value = !1),
        onRevalidate: A
      }, null, 8, ["models"])) : h("", !0)
    ], 64));
  }
}), Cx = /* @__PURE__ */ Ie($x, [["__scopeId", "data-v-253214a4"]]), xx = { class: "file-input-wrapper" }, Sx = ["accept", "multiple", "disabled"], Ix = /* @__PURE__ */ Se({
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
    }), (c, d) => (n(), i("div", xx, [
      t("input", {
        ref_key: "fileInputRef",
        ref: l,
        type: "file",
        accept: e.accept,
        multiple: e.multiple,
        disabled: e.disabled,
        class: "file-input-hidden",
        onChange: u
      }, null, 40, Sx),
      _(xe, {
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
}), Ex = /* @__PURE__ */ Ie(Ix, [["__scopeId", "data-v-cd192091"]]), Tx = {
  key: 0,
  class: "drop-zone-empty"
}, Mx = { class: "drop-zone-text" }, Px = { class: "drop-zone-primary" }, Rx = { class: "drop-zone-secondary" }, Nx = { class: "drop-zone-actions" }, Lx = {
  key: 1,
  class: "drop-zone-file"
}, Dx = { class: "file-info" }, Ox = { class: "file-details" }, Ux = { class: "file-name" }, Ax = { class: "file-size" }, zx = /* @__PURE__ */ Se({
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
      u.value ? (n(), i("div", Lx, [
        t("div", Dx, [
          S[1] || (S[1] = t("div", { class: "file-icon" }, "📦", -1)),
          t("div", Ox, [
            t("div", Ux, m(c.value), 1),
            t("div", Ax, m(d.value), 1)
          ])
        ]),
        _(xe, {
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
      ])) : (n(), i("div", Tx, [
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
        t("div", Mx, [
          t("p", Px, m(e.primaryText), 1),
          t("p", Rx, m(e.secondaryText), 1)
        ]),
        t("div", Nx, [
          _(Ex, {
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
}), Vx = /* @__PURE__ */ Ie(zx, [["__scopeId", "data-v-0f79cb86"]]), Fx = { class: "commit-hash" }, Bx = /* @__PURE__ */ Se({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(e) {
    const s = e, o = O(() => s.hash.slice(0, s.length));
    return (a, l) => (n(), i("span", Fx, m(o.value), 1));
  }
}), mu = /* @__PURE__ */ Ie(Bx, [["__scopeId", "data-v-7c333cc6"]]), Wx = { class: "import-preview" }, Gx = { class: "preview-header" }, jx = {
  key: 0,
  class: "source-env"
}, Hx = { class: "preview-content" }, qx = { class: "preview-section" }, Kx = { class: "section-header" }, Jx = { class: "section-info" }, Yx = { class: "section-count" }, Qx = {
  key: 0,
  class: "item-list"
}, Xx = { class: "item-name" }, Zx = {
  key: 0,
  class: "item-more"
}, e3 = { class: "preview-section" }, t3 = { class: "section-header" }, s3 = { class: "section-info" }, o3 = { class: "section-count" }, n3 = {
  key: 0,
  class: "item-list"
}, a3 = { class: "item-details" }, l3 = { class: "item-name" }, i3 = { class: "item-meta" }, r3 = {
  key: 0,
  class: "item-more"
}, u3 = { class: "preview-section" }, c3 = { class: "section-header" }, d3 = { class: "section-info" }, m3 = { class: "section-count" }, f3 = {
  key: 0,
  class: "item-list"
}, v3 = { class: "item-name" }, p3 = {
  key: 0,
  class: "item-more"
}, g3 = {
  key: 0,
  class: "preview-section"
}, h3 = { class: "git-info" }, y3 = /* @__PURE__ */ Se({
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
    return (u, c) => (n(), i("div", Wx, [
      t("div", Gx, [
        _(as, null, {
          default: g(() => [...c[0] || (c[0] = [
            $("Import Preview", -1)
          ])]),
          _: 1
        }),
        e.sourceEnvironment ? (n(), i("span", jx, [
          c[1] || (c[1] = $(" From: ", -1)),
          _(nl, null, {
            default: g(() => [
              $(m(e.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : h("", !0)
      ]),
      t("div", Hx, [
        t("div", qx, [
          t("div", Kx, [
            c[3] || (c[3] = t("div", { class: "section-icon" }, "📄", -1)),
            t("div", Jx, [
              c[2] || (c[2] = t("div", { class: "section-title" }, "Workflows", -1)),
              t("div", Yx, m(o.value) + " file" + m(o.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.workflows.length > 0 ? (n(), i("div", Qx, [
            (n(!0), i(G, null, ke(e.workflows.slice(0, e.maxPreviewItems), (d) => (n(), i("div", {
              key: d,
              class: "preview-item"
            }, [
              c[4] || (c[4] = t("span", { class: "item-bullet" }, "•", -1)),
              t("span", Xx, m(d), 1)
            ]))), 128)),
            e.workflows.length > e.maxPreviewItems ? (n(), i("div", Zx, " +" + m(e.workflows.length - e.maxPreviewItems) + " more ", 1)) : h("", !0)
          ])) : h("", !0)
        ]),
        t("div", e3, [
          t("div", t3, [
            c[6] || (c[6] = t("div", { class: "section-icon" }, "🎨", -1)),
            t("div", s3, [
              c[5] || (c[5] = t("div", { class: "section-title" }, "Models", -1)),
              t("div", o3, m(a.value) + " file" + m(a.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.models.length > 0 ? (n(), i("div", n3, [
            (n(!0), i(G, null, ke(e.models.slice(0, e.maxPreviewItems), (d) => (n(), i("div", {
              key: d.filename,
              class: "preview-item"
            }, [
              c[7] || (c[7] = t("span", { class: "item-bullet" }, "•", -1)),
              t("div", a3, [
                t("span", l3, m(d.filename), 1),
                t("span", i3, m(r(d.size)) + " • " + m(d.type), 1)
              ])
            ]))), 128)),
            e.models.length > e.maxPreviewItems ? (n(), i("div", r3, " +" + m(e.models.length - e.maxPreviewItems) + " more ", 1)) : h("", !0)
          ])) : h("", !0)
        ]),
        t("div", u3, [
          t("div", c3, [
            c[9] || (c[9] = t("div", { class: "section-icon" }, "🔌", -1)),
            t("div", d3, [
              c[8] || (c[8] = t("div", { class: "section-title" }, "Custom Nodes", -1)),
              t("div", m3, m(l.value) + " node" + m(l.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.nodes.length > 0 ? (n(), i("div", f3, [
            (n(!0), i(G, null, ke(e.nodes.slice(0, e.maxPreviewItems), (d) => (n(), i("div", {
              key: d,
              class: "preview-item"
            }, [
              c[10] || (c[10] = t("span", { class: "item-bullet" }, "•", -1)),
              t("span", v3, m(d), 1)
            ]))), 128)),
            e.nodes.length > e.maxPreviewItems ? (n(), i("div", p3, " +" + m(e.nodes.length - e.maxPreviewItems) + " more ", 1)) : h("", !0)
          ])) : h("", !0)
        ]),
        e.gitBranch || e.gitCommit ? (n(), i("div", g3, [
          c[11] || (c[11] = t("div", { class: "section-header" }, [
            t("div", { class: "section-icon" }, "🌿"),
            t("div", { class: "section-info" }, [
              t("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          t("div", h3, [
            e.gitBranch ? (n(), L(_t, {
              key: 0,
              label: "Branch"
            }, {
              default: g(() => [
                _(nl, null, {
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
                _(mu, { hash: e.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : h("", !0)
          ])
        ])) : h("", !0)
      ])
    ]));
  }
}), w3 = /* @__PURE__ */ Ie(y3, [["__scopeId", "data-v-182fe113"]]), _3 = { class: "import-config" }, k3 = { class: "config-container" }, b3 = { class: "config-field" }, $3 = { class: "input-wrapper" }, C3 = ["value"], x3 = {
  key: 0,
  class: "validating-indicator"
}, S3 = {
  key: 1,
  class: "valid-indicator"
}, I3 = {
  key: 0,
  class: "field-error"
}, E3 = { class: "config-field" }, T3 = { class: "strategy-options" }, M3 = ["value", "checked", "onChange"], P3 = { class: "strategy-content" }, R3 = { class: "strategy-label" }, N3 = { class: "strategy-description" }, L3 = { class: "config-field switch-field" }, D3 = { class: "switch-label" }, O3 = ["checked"], U3 = { class: "advanced-section" }, A3 = { class: "advanced-content" }, z3 = { class: "config-field" }, V3 = ["value"], F3 = ["value"], B3 = /* @__PURE__ */ Se({
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
    return (f, p) => (n(), i("div", _3, [
      _(as, null, {
        default: g(() => [...p[2] || (p[2] = [
          $("Configuration", -1)
        ])]),
        _: 1
      }),
      t("div", k3, [
        t("div", b3, [
          _(Un, { required: "" }, {
            default: g(() => [...p[3] || (p[3] = [
              $("Environment Name", -1)
            ])]),
            _: 1
          }),
          t("div", $3, [
            t("input", {
              type: "text",
              class: De(["name-input", { error: e.nameError || e.name.length === 0, valid: r.value }]),
              value: e.name,
              placeholder: "my-imported-env",
              onInput: d,
              onBlur: v
            }, null, 42, C3),
            l.value ? (n(), i("span", x3, "...")) : r.value ? (n(), i("span", S3, "✓")) : h("", !0)
          ]),
          e.nameError ? (n(), i("div", I3, m(e.nameError), 1)) : h("", !0),
          p[4] || (p[4] = t("div", { class: "field-hint" }, "Creates a new environment with this name", -1))
        ]),
        t("div", E3, [
          _(Un, null, {
            default: g(() => [...p[5] || (p[5] = [
              $("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          t("div", T3, [
            (n(), i(G, null, ke(u, (w) => t("label", {
              key: w.value,
              class: De(["strategy-option", { active: e.modelStrategy === w.value }])
            }, [
              t("input", {
                type: "radio",
                name: "model-strategy",
                value: w.value,
                checked: e.modelStrategy === w.value,
                onChange: (y) => a("update:modelStrategy", w.value)
              }, null, 40, M3),
              t("div", P3, [
                t("span", R3, m(w.label), 1),
                t("span", N3, m(w.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        t("div", L3, [
          t("label", D3, [
            t("input", {
              type: "checkbox",
              checked: e.switchAfterImport,
              onChange: p[0] || (p[0] = (w) => a("update:switchAfterImport", w.target.checked))
            }, null, 40, O3),
            p[6] || (p[6] = t("span", null, "Switch to this environment after import", -1))
          ])
        ]),
        t("details", U3, [
          p[8] || (p[8] = t("summary", { class: "advanced-toggle" }, "Advanced Options", -1)),
          t("div", A3, [
            t("div", z3, [
              _(Un, null, {
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
                (n(!0), i(G, null, ke(Ye(Pl), (w) => (n(), i("option", {
                  key: w,
                  value: w
                }, m(w) + m(w === "auto" ? " (detect GPU)" : ""), 9, F3))), 128))
              ], 40, V3)
            ])
          ])
        ])
      ])
    ]));
  }
}), W3 = /* @__PURE__ */ Ie(B3, [["__scopeId", "data-v-89ea06a1"]]), G3 = { class: "import-flow" }, j3 = {
  key: 0,
  class: "import-empty"
}, H3 = { class: "git-import-section" }, q3 = { class: "git-url-input-row" }, K3 = ["disabled"], J3 = {
  key: 0,
  class: "git-error"
}, Y3 = {
  key: 1,
  class: "import-configure"
}, Q3 = { class: "selected-file-bar" }, X3 = {
  key: 0,
  class: "file-bar-content"
}, Z3 = { class: "file-bar-info" }, e8 = { class: "file-bar-name" }, t8 = { class: "file-bar-size" }, s8 = {
  key: 1,
  class: "file-bar-content"
}, o8 = { class: "file-bar-info" }, n8 = { class: "file-bar-name" }, a8 = {
  key: 0,
  class: "preview-loading"
}, l8 = { class: "import-actions" }, i8 = {
  key: 2,
  class: "import-progress"
}, r8 = { class: "creating-intro" }, u8 = {
  key: 0,
  class: "progress-warning"
}, c8 = {
  key: 1,
  class: "import-error"
}, d8 = { class: "error-message" }, m8 = {
  key: 3,
  class: "import-complete"
}, f8 = { class: "complete-message" }, v8 = { class: "complete-title" }, p8 = { class: "complete-details" }, g8 = { class: "complete-actions" }, h8 = /* @__PURE__ */ Se({
  __name: "ImportFlow",
  props: {
    workspacePath: {},
    resumeImport: { type: Boolean },
    initialProgress: {}
  },
  emits: ["import-complete", "import-started", "source-cleared"],
  setup(e, { expose: s, emit: o }) {
    var M, V, j, P;
    const a = e, l = o, { previewTarballImport: r, previewGitImport: u, validateEnvironmentName: c, executeImport: d, executeGitImport: v, getImportProgress: f } = dt();
    let p = null;
    const w = b(null), y = b(a.resumeImport ?? !1), k = b(!1), x = b(!1), C = b(""), S = b(!1), U = b(null), E = b(""), T = b(null), N = b(!1), A = b(null), H = b(null), D = b({
      name: ((M = a.initialProgress) == null ? void 0 : M.environmentName) ?? "",
      modelStrategy: "required",
      torchBackend: "auto",
      switchAfterImport: !0
    }), W = b(null), Z = b({
      message: ((V = a.initialProgress) == null ? void 0 : V.message) ?? "Preparing import...",
      phase: ((j = a.initialProgress) == null ? void 0 : j.phase) ?? "",
      progress: ((P = a.initialProgress) == null ? void 0 : P.progress) ?? 0,
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
    ], re = O(() => {
      if (!H.value)
        return {
          sourceEnvironment: "",
          workflows: [],
          models: [],
          nodes: [],
          gitBranch: void 0,
          gitCommit: void 0
        };
      const R = H.value;
      return {
        sourceEnvironment: R.comfyui_version ? `ComfyUI ${R.comfyui_version}` : "Unknown",
        workflows: R.workflows.map((ue) => ue.name),
        models: R.models.map((ue) => ({
          filename: ue.filename,
          size: 0,
          type: ue.relative_path.split("/")[0] || "model"
        })),
        nodes: R.nodes.map((ue) => ue.name),
        gitBranch: void 0,
        gitCommit: void 0
      };
    }), he = O(() => !S.value && !U.value && H.value && D.value.name.length > 0 && !W.value && (w.value || T.value));
    async function ne(R) {
      w.value = R, S.value = !0, U.value = null, H.value = null;
      try {
        const ue = await r(R);
        H.value = ue;
      } catch (ue) {
        U.value = ue instanceof Error ? ue.message : "Failed to analyze file", console.error("Preview error:", ue);
      } finally {
        S.value = !1;
      }
    }
    function Q() {
      w.value = null, T.value = null, E.value = "", A.value = null, k.value = !1, x.value = !1, C.value = "", H.value = null, U.value = null, D.value = { name: "", modelStrategy: "required", torchBackend: "auto", switchAfterImport: !0 }, W.value = null, l("source-cleared");
    }
    function de() {
      se(), Q(), y.value = !1, S.value = !1, N.value = !1, Z.value = {
        message: "Preparing import...",
        phase: "",
        progress: 0,
        error: null
      };
    }
    async function Ne() {
      if (E.value.trim()) {
        N.value = !0, A.value = null;
        try {
          const R = await u(E.value.trim());
          T.value = E.value.trim(), H.value = R;
        } catch (R) {
          A.value = R instanceof Error ? R.message : "Failed to analyze repository";
        } finally {
          N.value = !1;
        }
      }
    }
    function le(R) {
      try {
        const ue = new URL(R);
        return ue.host + ue.pathname.replace(/\.git$/, "");
      } catch {
        return R;
      }
    }
    async function pe(R) {
      if (!R) {
        W.value = "Environment name is required";
        return;
      }
      try {
        const ue = await c(R);
        W.value = ue.valid ? null : ue.error || "Invalid name";
      } catch {
        W.value = "Failed to validate name";
      }
    }
    async function me() {
      if (D.value.name && !(!w.value && !T.value)) {
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
          else if (T.value)
            R = await v(
              T.value,
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
    function oe(R) {
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
      canImport: he
    }), (R, ue) => {
      var Ve;
      return n(), i("div", G3, [
        !w.value && !T.value && !y.value ? (n(), i("div", j3, [
          _(Vx, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: ne
          }),
          ue[7] || (ue[7] = t("div", { class: "import-divider" }, [
            t("span", null, "or")
          ], -1)),
          t("div", H3, [
            ue[5] || (ue[5] = t("div", { class: "git-import-header" }, "Import from Git Repository", -1)),
            t("div", q3, [
              St(t("input", {
                type: "text",
                class: "git-url-input",
                "onUpdate:modelValue": ue[0] || (ue[0] = (je) => E.value = je),
                placeholder: "https://github.com/user/repo.git",
                onKeyup: ts(Ne, ["enter"]),
                disabled: N.value
              }, null, 40, K3), [
                [xo, E.value]
              ]),
              _(xe, {
                variant: "primary",
                size: "sm",
                disabled: !E.value.trim() || N.value,
                onClick: Ne
              }, {
                default: g(() => [
                  $(m(N.value ? "Analyzing..." : "ANALYZE"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            A.value ? (n(), i("div", J3, m(A.value), 1)) : h("", !0),
            ue[6] || (ue[6] = t("div", { class: "git-url-hint" }, "Paste a GitHub URL to preview the environment", -1))
          ])
        ])) : (w.value || T.value) && !y.value && !k.value ? (n(), i("div", Y3, [
          t("div", Q3, [
            w.value ? (n(), i("div", X3, [
              ue[8] || (ue[8] = t("div", { class: "file-bar-icon" }, "📦", -1)),
              t("div", Z3, [
                t("div", e8, m(w.value.name), 1),
                t("div", t8, m(oe(w.value.size)), 1)
              ])
            ])) : T.value ? (n(), i("div", s8, [
              ue[10] || (ue[10] = t("div", { class: "file-bar-icon" }, "🔗", -1)),
              t("div", o8, [
                t("div", n8, m(le(T.value)), 1),
                ue[9] || (ue[9] = t("div", { class: "file-bar-size" }, "Git Repository", -1))
              ])
            ])) : h("", !0),
            _(xe, {
              variant: "ghost",
              size: "sm",
              onClick: Q
            }, {
              default: g(() => [...ue[11] || (ue[11] = [
                $(" Change Source ", -1)
              ])]),
              _: 1
            })
          ]),
          S.value ? (n(), i("div", a8, [...ue[12] || (ue[12] = [
            t("div", { class: "loading-spinner" }, null, -1),
            t("div", { class: "loading-text" }, "Analyzing import file...", -1)
          ])])) : U.value ? (n(), L(ds, {
            key: 1,
            type: "error",
            title: "Failed to Analyze File",
            details: [U.value]
          }, null, 8, ["details"])) : H.value ? (n(), L(w3, {
            key: 2,
            "source-environment": re.value.sourceEnvironment,
            workflows: re.value.workflows,
            models: re.value.models,
            nodes: re.value.nodes,
            "git-branch": re.value.gitBranch,
            "git-commit": re.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : h("", !0),
          H.value ? (n(), L(W3, {
            key: 3,
            name: D.value.name,
            "onUpdate:name": ue[1] || (ue[1] = (je) => D.value.name = je),
            "model-strategy": D.value.modelStrategy,
            "onUpdate:modelStrategy": ue[2] || (ue[2] = (je) => D.value.modelStrategy = je),
            "torch-backend": D.value.torchBackend,
            "onUpdate:torchBackend": ue[3] || (ue[3] = (je) => D.value.torchBackend = je),
            "switch-after-import": D.value.switchAfterImport,
            "onUpdate:switchAfterImport": ue[4] || (ue[4] = (je) => D.value.switchAfterImport = je),
            "name-error": W.value,
            onValidateName: pe
          }, null, 8, ["name", "model-strategy", "torch-backend", "switch-after-import", "name-error"])) : h("", !0),
          D.value.modelStrategy === "skip" && ((Ve = H.value) != null && Ve.models_needing_download) ? (n(), L(ds, {
            key: 4,
            type: "warning",
            title: "Models Will Not Be Downloaded",
            details: [
              `${H.value.models_needing_download} model(s) will need to be downloaded later`,
              "You can resolve missing models from the STATUS page after import"
            ]
          }, null, 8, ["details"])) : h("", !0),
          t("div", l8, [
            _(xe, {
              variant: "secondary",
              size: "md",
              onClick: Q
            }, {
              default: g(() => [...ue[13] || (ue[13] = [
                $(" Cancel ", -1)
              ])]),
              _: 1
            }),
            _(xe, {
              variant: "primary",
              size: "md",
              disabled: !he.value,
              onClick: me
            }, {
              default: g(() => [...ue[14] || (ue[14] = [
                $(" Create Environment ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : y.value ? (n(), i("div", i8, [
          t("p", r8, [
            ue[15] || (ue[15] = $(" Importing environment ", -1)),
            t("strong", null, m(D.value.name), 1),
            ue[16] || (ue[16] = $("... ", -1))
          ]),
          _(Yn, {
            progress: Z.value.progress,
            message: Z.value.message,
            "current-phase": Z.value.phase,
            variant: Z.value.error ? "error" : "default",
            "show-steps": !0,
            steps: ee
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          Z.value.error ? h("", !0) : (n(), i("p", u8, " This may take several minutes. Please wait... ")),
          Z.value.error ? (n(), i("div", c8, [
            t("p", d8, m(Z.value.error), 1)
          ])) : h("", !0)
        ])) : k.value ? (n(), i("div", m8, [
          t("div", {
            class: De(["complete-icon", x.value ? "success" : "error"])
          }, m(x.value ? "✓" : "✕"), 3),
          t("div", f8, [
            t("div", v8, m(x.value ? "Import Successful" : "Import Failed"), 1),
            t("div", p8, m(C.value), 1)
          ]),
          t("div", g8, [
            _(xe, {
              variant: "primary",
              size: "md",
              onClick: de
            }, {
              default: g(() => [...ue[17] || (ue[17] = [
                $(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : h("", !0)
      ]);
    };
  }
}), fu = /* @__PURE__ */ Ie(h8, [["__scopeId", "data-v-72cbc04e"]]), y8 = /* @__PURE__ */ Se({
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
    return (r, u) => (n(), i(G, null, [
      _(Tt, null, ss({
        content: g(() => [
          _(fu, { onImportComplete: l })
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
      _(Qt, {
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
}), w8 = /* @__PURE__ */ Ie(y8, [["__scopeId", "data-v-41b1f298"]]), vu = "ComfyGit.Cloud.Url", pu = "ComfyGit.Cloud.DashboardUrl", al = "ComfyGit.Cloud.Session", ll = "ComfyGit.Cloud.User", gu = "ComfyGit.Cloud.LinkedEnvironments";
function Rl(e) {
  try {
    const s = localStorage.getItem(e);
    return s ? JSON.parse(s) : null;
  } catch {
    return null;
  }
}
function hu(e, s = "") {
  try {
    return localStorage.getItem(e) || s;
  } catch {
    return s;
  }
}
const Ga = b(hu(vu, "http://127.0.0.1:8012")), ja = b(hu(pu, "")), En = b(Rl(al)), zo = b(Rl(ll)), oo = b(Rl(gu) || {});
function yu() {
  const e = O(() => {
    var d, v;
    return !!((d = En.value) != null && d.access_token) && !!((v = zo.value) != null && v.id);
  }), s = O(() => {
    var d;
    return ((d = zo.value) == null ? void 0 : d.email) || "Not signed in";
  });
  function o(d) {
    Ga.value = d.trim();
    try {
      localStorage.setItem(vu, Ga.value);
    } catch (v) {
      console.error("[useCloudAuth] Failed to save cloud URL:", v);
    }
  }
  function a(d) {
    ja.value = d.trim();
    try {
      localStorage.setItem(pu, ja.value);
    } catch (v) {
      console.error("[useCloudAuth] Failed to save dashboard URL:", v);
    }
  }
  function l(d, v) {
    En.value = d, zo.value = v;
    try {
      localStorage.setItem(al, JSON.stringify(d)), localStorage.setItem(ll, JSON.stringify(v));
    } catch (f) {
      console.error("[useCloudAuth] Failed to save auth state:", f);
    }
  }
  function r() {
    En.value = null, zo.value = null;
    try {
      localStorage.removeItem(al), localStorage.removeItem(ll);
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
        localStorage.setItem(gu, JSON.stringify(oo.value));
      } catch (p) {
        console.error("[useCloudAuth] Failed to save linked cloud environments:", p);
      }
    }
  }
  return {
    cloudUrl: Ga,
    dashboardUrl: ja,
    session: En,
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
const _8 = { class: "account-section" }, k8 = {
  key: 0,
  class: "account-card"
}, b8 = { class: "account-card-header" }, $8 = { class: "account-meta" }, C8 = { class: "row-actions" }, x8 = {
  key: 1,
  class: "account-card"
}, S8 = { class: "auth-form-grid" }, I8 = { class: "field-group full-span" }, E8 = { class: "field-group full-span" }, T8 = { class: "row-actions" }, M8 = { class: "account-section" }, P8 = { class: "stacked-form" }, R8 = { class: "row-actions" }, N8 = { class: "stacked-form" }, L8 = { class: "row-actions" }, D8 = /* @__PURE__ */ Se({
  __name: "AccountSection",
  emits: ["toast", "navigate"],
  setup(e, { emit: s }) {
    const o = s, { getCloudAuthConfig: a, loginToCloud: l, signupToCloud: r, getCloudMe: u, logoutFromCloud: c } = dt(), { cloudUrl: d, dashboardUrl: v, session: f, user: p, isAuthenticated: w, authLabel: y, setCloudUrl: k, setDashboardUrl: x, setAuth: C, clearAuth: S } = yu(), U = b(!1), E = b(d.value), T = b(v.value), N = b(""), A = b(""), H = b(!1), D = b(!1), W = b(!1), Z = b(!1), ee = b(null), re = b(null), he = O(() => w.value ? y.value : "Not signed in");
    function ne() {
      const oe = E.value.trim();
      return k(oe), E.value = d.value, d.value;
    }
    async function Q() {
      var oe;
      if (!(!((oe = f.value) != null && oe.access_token) || !d.value))
        try {
          const M = await u(d.value, f.value.access_token);
          f.value && C(f.value, M.user);
        } catch (M) {
          S(), re.value = {
            type: "error",
            message: M instanceof Error ? M.message : "Stored cloud session is no longer valid."
          };
        }
    }
    async function de() {
      const oe = ne();
      H.value = !0, ee.value = null;
      try {
        const M = await a(oe);
        ee.value = {
          type: "success",
          message: `Connected. Supabase auth is configured for ${M.url}.`
        };
      } catch (M) {
        ee.value = {
          type: "error",
          message: M instanceof Error ? M.message : "Failed to connect to cloud."
        };
      } finally {
        H.value = !1;
      }
    }
    function Ne() {
      const oe = ne();
      ee.value = {
        type: "info",
        message: `Cloud URL saved: ${oe}`
      };
    }
    function le() {
      const oe = T.value.trim();
      x(oe), T.value = v.value, ee.value = {
        type: "info",
        message: `Dashboard URL saved: ${v.value || "cleared"}`
      };
    }
    async function pe() {
      const oe = ne();
      D.value = !0, re.value = null;
      try {
        const M = await l(oe, N.value.trim(), A.value);
        if (!M.session || !M.user)
          throw new Error("Cloud did not return a session.");
        C(M.session, M.user), re.value = { type: "success", message: "Signed in successfully." }, o("toast", "Signed in to ComfyGit Cloud", "success"), A.value = "";
      } catch (M) {
        re.value = {
          type: "error",
          message: M instanceof Error ? M.message : "Failed to sign in."
        };
      } finally {
        D.value = !1;
      }
    }
    async function me() {
      const oe = ne();
      W.value = !0, re.value = null;
      try {
        const M = await r(oe, N.value.trim(), A.value);
        if (!M.session || !M.user)
          throw new Error("Cloud did not return a session.");
        C(M.session, M.user), re.value = { type: "success", message: "Account created and signed in." }, o("toast", "ComfyGit Cloud account created", "success"), A.value = "";
      } catch (M) {
        re.value = {
          type: "error",
          message: M instanceof Error ? M.message : "Failed to create account."
        };
      } finally {
        W.value = !1;
      }
    }
    async function Ue() {
      var oe;
      Z.value = !0;
      try {
        await c(d.value, (oe = f.value) == null ? void 0 : oe.refresh_token);
      } catch {
      } finally {
        S(), Z.value = !1, re.value = { type: "info", message: "Signed out." }, o("toast", "Signed out of ComfyGit Cloud", "info");
      }
    }
    function se() {
      v.value && window.open(v.value, "_blank", "noopener,noreferrer");
    }
    return ot(() => {
      Q();
    }), (oe, M) => (n(), i(G, null, [
      _(Tt, null, {
        header: g(() => [
          _(Mt, {
            title: "CLOUD ACCOUNT",
            "show-info": !0,
            onInfoClick: M[0] || (M[0] = (V) => U.value = !0)
          }, {
            actions: g(() => [
              t("div", {
                class: De(["auth-chip", { authenticated: Ye(w) }])
              }, m(he.value), 3)
            ]),
            _: 1
          })
        ]),
        content: g(() => [
          _(bt, { title: "AUTHENTICATION" }, {
            default: g(() => [
              t("div", _8, [
                Ye(w) && Ye(p) ? (n(), i("div", k8, [
                  t("div", b8, [
                    M[8] || (M[8] = t("div", { class: "account-title" }, "SIGNED IN", -1)),
                    _(xe, {
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
                  t("div", $8, [
                    t("div", null, [
                      M[9] || (M[9] = t("span", { class: "meta-label" }, "Email:", -1)),
                      $(" " + m(Ye(p).email || "—"), 1)
                    ]),
                    t("div", null, [
                      M[10] || (M[10] = t("span", { class: "meta-label" }, "User ID:", -1)),
                      $(" " + m(Ye(p).id), 1)
                    ])
                  ]),
                  t("div", C8, [
                    _(xe, {
                      variant: "primary",
                      size: "xs",
                      onClick: M[1] || (M[1] = (V) => o("navigate", "publish"))
                    }, {
                      default: g(() => [...M[11] || (M[11] = [
                        $(" Go To Publish ", -1)
                      ])]),
                      _: 1
                    }),
                    _(xe, {
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
                ])) : (n(), i("div", x8, [
                  M[17] || (M[17] = t("div", { class: "account-title" }, "SIGN IN OR CREATE ACCOUNT", -1)),
                  t("div", S8, [
                    t("div", I8, [
                      M[13] || (M[13] = t("label", { class: "field-label" }, "Email", -1)),
                      _($s, {
                        modelValue: N.value,
                        "onUpdate:modelValue": M[2] || (M[2] = (V) => N.value = V),
                        type: "email",
                        placeholder: "you@example.com",
                        onKeydown: ts(st(pe, ["prevent"]), ["enter"])
                      }, null, 8, ["modelValue", "onKeydown"])
                    ]),
                    t("div", E8, [
                      M[14] || (M[14] = t("label", { class: "field-label" }, "Password", -1)),
                      _($s, {
                        modelValue: A.value,
                        "onUpdate:modelValue": M[3] || (M[3] = (V) => A.value = V),
                        type: "password",
                        placeholder: "Enter password",
                        onKeydown: ts(st(pe, ["prevent"]), ["enter"])
                      }, null, 8, ["modelValue", "onKeydown"])
                    ])
                  ]),
                  t("div", T8, [
                    _(xe, {
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
                    _(xe, {
                      variant: "secondary",
                      size: "xs",
                      loading: W.value,
                      onClick: me
                    }, {
                      default: g(() => [...M[16] || (M[16] = [
                        $(" Create Account ", -1)
                      ])]),
                      _: 1
                    }, 8, ["loading"])
                  ]),
                  re.value ? (n(), i("div", {
                    key: 0,
                    class: De(["status-text", re.value.type])
                  }, m(re.value.message), 3)) : h("", !0)
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
              t("div", M8, [
                _(Hs, {
                  label: "Cloud API URL",
                  description: "Override the ComfyGit Cloud API base URL for local development or non-default deployments",
                  stacked: ""
                }, {
                  default: g(() => [
                    t("div", P8, [
                      _($s, {
                        modelValue: E.value,
                        "onUpdate:modelValue": M[4] || (M[4] = (V) => E.value = V),
                        placeholder: "http://127.0.0.1:8012"
                      }, null, 8, ["modelValue"]),
                      t("div", R8, [
                        _(xe, {
                          variant: "secondary",
                          size: "xs",
                          onClick: Ne
                        }, {
                          default: g(() => [...M[18] || (M[18] = [
                            $(" Save URL ", -1)
                          ])]),
                          _: 1
                        }),
                        _(xe, {
                          variant: "ghost",
                          size: "xs",
                          loading: H.value,
                          onClick: de
                        }, {
                          default: g(() => [...M[19] || (M[19] = [
                            $(" Test Connection ", -1)
                          ])]),
                          _: 1
                        }, 8, ["loading"])
                      ]),
                      ee.value ? (n(), i("div", {
                        key: 0,
                        class: De(["status-text", ee.value.type])
                      }, m(ee.value.message), 3)) : h("", !0)
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
                    t("div", N8, [
                      _($s, {
                        modelValue: T.value,
                        "onUpdate:modelValue": M[5] || (M[5] = (V) => T.value = V),
                        placeholder: "http://100.99.14.94:5174"
                      }, null, 8, ["modelValue"]),
                      t("div", L8, [
                        _(xe, {
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
      _(Qt, {
        show: U.value,
        title: "Cloud Account",
        onClose: M[6] || (M[6] = (V) => U.value = !1)
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
}), O8 = /* @__PURE__ */ Ie(D8, [["__scopeId", "data-v-6a8d04d9"]]), U8 = {
  key: 0,
  class: "publish-card"
}, A8 = { class: "row-actions" }, z8 = {
  key: 1,
  class: "publish-grid"
}, V8 = {
  key: 0,
  class: "publish-card working-copy-card"
}, F8 = { class: "card-title" }, B8 = { class: "card-copy" }, W8 = { class: "meta-grid" }, G8 = { class: "link-section" }, j8 = { class: "field-group" }, H8 = { class: "row-actions" }, q8 = { class: "row-actions" }, K8 = {
  key: 0,
  class: "publish-error"
}, J8 = {
  key: 1,
  class: "publish-card"
}, Y8 = { class: "publish-card revisions-card" }, Q8 = {
  key: 0,
  class: "card-copy"
}, X8 = {
  key: 1,
  class: "publish-error"
}, Z8 = {
  key: 2,
  class: "card-copy"
}, eS = {
  key: 3,
  class: "card-copy"
}, tS = {
  key: 4,
  class: "revision-list"
}, sS = { class: "revision-main" }, oS = { class: "revision-title" }, nS = {
  key: 0,
  class: "matched-badge"
}, aS = { class: "revision-copy" }, lS = { class: "revision-meta" }, iS = { key: 0 }, rS = /* @__PURE__ */ Se({
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
    } = dt(), { cloudUrl: f, session: p, user: w, isAuthenticated: y, getLinkedEnvironment: k, setLinkedEnvironment: x } = yu(), C = b(!1), S = b(!1), U = b(!1), E = b(!1), T = b(null), N = b(null), A = b(null), H = b([]), D = b(null), W = b(null), Z = b(null), ee = b(!1), re = b(!1), he = b([]), ne = b(""), Q = O(() => {
      var B;
      return ((B = w.value) == null ? void 0 : B.email) || "Not signed in";
    }), de = O(() => {
      var B;
      return ((B = p.value) == null ? void 0 : B.access_token) || "";
    }), Ne = O(() => W.value && H.value.find((B) => B.source_commit_sha === W.value) || null), le = O(() => {
      var B;
      return y.value ? !W.value || !((B = D.value) != null && B.can_export) ? !0 : !Ne.value : !1;
    }), pe = O(() => W.value || "No commits yet"), me = O(() => {
      var B;
      return ((B = A.value) == null ? void 0 : B.name) || "Will be created on first publish";
    }), Ue = O(
      () => he.value.map((B) => ({
        label: B.name,
        value: B.id
      }))
    ), se = O(() => D.value ? D.value.can_export ? D.value.warnings.models_without_sources.length > 0 ? "This local working copy can be published, but some model source URLs are still missing and may reduce deployability." : "This local working copy is ready to publish as a new immutable cloud revision." : "This local working copy is not publishable yet. Review the issues and commit or resolve them first." : "Checking local publish readiness..."), oe = O(() => E.value ? "Publishing..." : U.value ? "Validating..." : "Publish Revision");
    async function M() {
      var B;
      if (!y.value) {
        D.value = null;
        return;
      }
      U.value = !0, N.value = null;
      try {
        D.value = (B = o.environmentName) != null && B.trim() ? await u(o.environmentName) : await r();
      } catch (q) {
        D.value = null, N.value = q instanceof Error ? q.message : "Failed to validate publish readiness.";
      } finally {
        U.value = !1;
      }
    }
    async function V() {
      var B, q;
      if (!y.value || !de.value || !f.value) {
        A.value = null, H.value = [], T.value = null, await M();
        return;
      }
      S.value = !0, T.value = null, N.value = null;
      try {
        const [we, be] = await Promise.all([
          l(1),
          c(f.value, de.value)
        ]);
        W.value = ((B = we.commits[0]) == null ? void 0 : B.hash) || null, Z.value = ((q = we.commits[0]) == null ? void 0 : q.message) || null, he.value = be.environments || [];
        const Ce = k(o.environmentName), Pe = (Ce ? he.value.find((Le) => Le.id === Ce.id) : null) || he.value.find(
          (Le) => Le.name === (o.environmentName || "")
        ) || null;
        if (A.value = Pe, ne.value = (Pe == null ? void 0 : Pe.id) || "", Pe) {
          const Le = await d(f.value, Pe.id, de.value);
          H.value = Le.revisions || [];
        } else
          H.value = [];
        await M();
      } catch (we) {
        A.value = null, he.value = [], ne.value = "", H.value = [], T.value = we instanceof Error ? we.message : "Failed to load cloud revision state.";
      } finally {
        S.value = !1;
      }
    }
    async function j() {
      var B;
      if (!y.value || !de.value || !f.value) {
        a("navigate", "account");
        return;
      }
      E.value = !0, N.value = null;
      try {
        const q = await v(
          f.value,
          de.value,
          Z.value || null,
          ((B = A.value) == null ? void 0 : B.id) || null
        );
        await V(), a(
          "toast",
          q.environment_revision ? `Published ${q.environment.name} r${q.environment_revision.revision_number}` : `Published ${q.environment.name}`,
          "success"
        );
      } catch (q) {
        N.value = q instanceof Error ? q.message : "Publish failed.";
      } finally {
        E.value = !1;
      }
    }
    function P() {
      const B = he.value.find((q) => q.id === ne.value) || null;
      x(o.environmentName, B ? { id: B.id, name: B.name } : null), A.value = B, H.value = [], a(
        "toast",
        B ? `Linked ${o.environmentName || "environment"} to cloud environment ${B.name}` : `Cleared linked cloud environment for ${o.environmentName || "environment"}`,
        "success"
      ), V();
    }
    function R() {
      ne.value = "", x(o.environmentName, null), A.value = null, H.value = [], a("toast", `Cleared linked cloud environment for ${o.environmentName || "environment"}`, "success"), V();
    }
    async function ue() {
      if (!y.value) {
        a("navigate", "account");
        return;
      }
      if (await M(), !!D.value) {
        if (!D.value.can_export) {
          ee.value = !0;
          return;
        }
        if (D.value.warnings.models_without_sources.length > 0) {
          re.value = !0;
          return;
        }
        await j();
      }
    }
    async function Ve() {
      if (ee.value = !1, await V(), !!D.value) {
        if (!D.value.can_export) {
          ee.value = !0;
          return;
        }
        if (D.value.warnings.models_without_sources.length > 0) {
          re.value = !0;
          return;
        }
        await j();
      }
    }
    async function je() {
      re.value = !1, await j();
    }
    function F(B) {
      const q = Date.parse(B);
      if (Number.isNaN(q)) return B;
      const we = Date.now() - q, be = Math.floor(we / 6e4);
      if (be < 1) return "just now";
      if (be < 60) return `${be}m ago`;
      const Ce = Math.floor(be / 60);
      if (Ce < 24) return `${Ce}h ago`;
      const Pe = Math.floor(Ce / 24);
      return Pe < 30 ? `${Pe}d ago` : new Date(q).toLocaleString();
    }
    return ot(() => {
      V();
    }), kt(
      [y, f, () => {
        var B;
        return (B = p.value) == null ? void 0 : B.access_token;
      }, () => o.environmentName],
      () => {
        V();
      }
    ), (B, q) => (n(), i(G, null, [
      _(Tt, null, {
        header: g(() => [
          _(Mt, {
            title: "PUBLISH REVISION",
            "show-info": !0,
            onInfoClick: q[0] || (q[0] = (we) => C.value = !0)
          }, {
            actions: g(() => [
              t("div", {
                class: De(["auth-chip", { authenticated: Ye(y) }])
              }, m(Q.value), 3)
            ]),
            _: 1
          })
        ]),
        content: g(() => [
          _(bt, { title: "PUBLISH" }, {
            default: g(() => [
              Ye(y) ? (n(), i("div", z8, [
                le.value ? (n(), i("div", V8, [
                  q[16] || (q[16] = t("div", { class: "card-topline" }, "WORKING COPY", -1)),
                  t("div", F8, m(e.environmentName || "Current environment"), 1),
                  t("div", B8, m(se.value), 1),
                  t("div", W8, [
                    t("div", null, [
                      q[9] || (q[9] = t("span", { class: "publish-label" }, "Branch:", -1)),
                      $(" " + m(e.branchName || "Detached"), 1)
                    ]),
                    t("div", null, [
                      q[10] || (q[10] = t("span", { class: "publish-label" }, "Commit:", -1)),
                      $(" " + m(pe.value), 1)
                    ]),
                    t("div", null, [
                      q[11] || (q[11] = t("span", { class: "publish-label" }, "Cloud env:", -1)),
                      $(" " + m(me.value), 1)
                    ])
                  ]),
                  t("div", G8, [
                    t("div", j8, [
                      q[12] || (q[12] = t("label", { class: "field-label" }, "Linked Cloud Environment", -1)),
                      _(Ks, {
                        modelValue: ne.value,
                        "onUpdate:modelValue": q[2] || (q[2] = (we) => ne.value = we),
                        options: Ue.value,
                        placeholder: "Create new cloud environment on first publish",
                        "full-width": "",
                        disabled: S.value || E.value
                      }, null, 8, ["modelValue", "options", "disabled"])
                    ]),
                    t("div", H8, [
                      _(xe, {
                        variant: "secondary",
                        size: "xs",
                        disabled: S.value || E.value,
                        onClick: P
                      }, {
                        default: g(() => [...q[13] || (q[13] = [
                          $(" Save Link ", -1)
                        ])]),
                        _: 1
                      }, 8, ["disabled"]),
                      _(xe, {
                        variant: "ghost",
                        size: "xs",
                        disabled: !ne.value || S.value || E.value,
                        onClick: R
                      }, {
                        default: g(() => [...q[14] || (q[14] = [
                          $(" Clear ", -1)
                        ])]),
                        _: 1
                      }, 8, ["disabled"])
                    ])
                  ]),
                  t("div", q8, [
                    _(xe, {
                      variant: "primary",
                      size: "xs",
                      loading: U.value || E.value,
                      disabled: U.value || E.value,
                      onClick: ue
                    }, {
                      default: g(() => [
                        $(m(oe.value), 1)
                      ]),
                      _: 1
                    }, 8, ["loading", "disabled"]),
                    _(xe, {
                      variant: "secondary",
                      size: "xs",
                      disabled: U.value || E.value,
                      onClick: V
                    }, {
                      default: g(() => [...q[15] || (q[15] = [
                        $(" Refresh ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled"])
                  ]),
                  N.value ? (n(), i("div", K8, m(N.value), 1)) : h("", !0)
                ])) : (n(), i("div", J8, [...q[17] || (q[17] = [
                  t("div", { class: "card-topline" }, "WORKING COPY", -1),
                  t("div", { class: "card-title" }, "Already published", -1),
                  t("div", { class: "card-copy" }, " Current local state matches a known published revision. Make another local change or commit before publishing again. ", -1)
                ])])),
                t("div", Y8, [
                  q[22] || (q[22] = t("div", { class: "card-topline" }, "PUBLISHED REVISIONS", -1)),
                  S.value ? (n(), i("div", Q8, "Loading cloud revisions...")) : T.value ? (n(), i("div", X8, m(T.value), 1)) : A.value ? H.value.length ? (n(), i("div", tS, [
                    (n(!0), i(G, null, ke(H.value, (we) => {
                      var be, Ce;
                      return n(), i("div", {
                        key: we.id,
                        class: De(["revision-row", { matched: we.id === ((be = Ne.value) == null ? void 0 : be.id) }])
                      }, [
                        t("div", sS, [
                          t("div", oS, [
                            t("span", null, "r" + m(we.revision_number), 1),
                            we.id === ((Ce = Ne.value) == null ? void 0 : Ce.id) ? (n(), i("span", nS, "Matches local")) : h("", !0)
                          ]),
                          t("div", aS, m(we.source_message || "No revision message."), 1),
                          t("div", lS, [
                            t("span", null, m(we.workflow_count) + " workflows", 1),
                            t("span", null, m(we.node_count) + " nodes", 1),
                            t("span", null, m(we.model_count) + " models", 1),
                            t("span", null, "Created " + m(F(we.created_at)), 1),
                            we.source_commit_sha ? (n(), i("span", iS, "Commit " + m(we.source_commit_sha), 1)) : h("", !0)
                          ])
                        ])
                      ], 2);
                    }), 128))
                  ])) : (n(), i("div", eS, [
                    q[20] || (q[20] = $(" Cloud environment ", -1)),
                    t("strong", null, m(A.value.name), 1),
                    q[21] || (q[21] = $(" exists, but it has no immutable revisions yet. ", -1))
                  ])) : (n(), i("div", Z8, [
                    q[18] || (q[18] = $(" No linked cloud environment is selected for ", -1)),
                    t("strong", null, m(e.environmentName || "this environment"), 1),
                    q[19] || (q[19] = $(". Publishing will create one unless you link this local environment to an existing cloud environment above. ", -1))
                  ]))
                ])
              ])) : (n(), i("div", U8, [
                q[7] || (q[7] = t("div", { class: "blocked-title" }, "SIGN IN REQUIRED", -1)),
                q[8] || (q[8] = t("div", { class: "blocked-copy" }, " Publishing revisions is blocked until this local panel is connected to a ComfyGit Cloud account. ", -1)),
                t("div", A8, [
                  _(xe, {
                    variant: "primary",
                    size: "xs",
                    onClick: q[1] || (q[1] = (we) => a("navigate", "account"))
                  }, {
                    default: g(() => [...q[6] || (q[6] = [
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
      _(Qt, {
        show: C.value,
        title: "Publish",
        onClose: q[3] || (q[3] = (we) => C.value = !1)
      }, {
        content: g(() => [...q[23] || (q[23] = [
          t("div", { class: "info-content" }, [
            t("p", null, "This page publishes the current local environment state as an immutable cloud revision."),
            t("p", null, "It reuses export-style validation before submission so uncommitted changes and missing model source data are surfaced before publish."),
            t("p", null, "The cloud dashboard remains responsible for deployments, targets, and runtime operations.")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      ee.value && D.value ? (n(), L(cu, {
        key: 0,
        issues: D.value.blocking_issues,
        mode: "publish",
        onClose: q[4] || (q[4] = (we) => ee.value = !1),
        onCommitted: Ve
      }, null, 8, ["issues"])) : h("", !0),
      re.value && D.value ? (n(), L(du, {
        key: 1,
        models: D.value.warnings.models_without_sources,
        mode: "publish",
        onConfirm: je,
        onCancel: q[5] || (q[5] = (we) => re.value = !1),
        onRevalidate: M
      }, null, 8, ["models"])) : h("", !0)
    ], 64));
  }
}), uS = /* @__PURE__ */ Ie(rS, [["__scopeId", "data-v-d16eeb92"]]), cS = { class: "base-tabs" }, dS = ["disabled", "onClick"], mS = {
  key: 0,
  class: "base-tabs__badge"
}, fS = /* @__PURE__ */ Se({
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
    return (r, u) => (n(), i("div", cS, [
      (n(!0), i(G, null, ke(e.tabs, (c) => (n(), i("button", {
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
        c.badge ? (n(), i("span", mS, m(c.badge), 1)) : h("", !0)
      ], 10, dS))), 128))
    ]));
  }
}), Nl = /* @__PURE__ */ Ie(fS, [["__scopeId", "data-v-ad5e6cad"]]), vS = { class: "commit-list" }, pS = /* @__PURE__ */ Se({
  __name: "CommitList",
  setup(e) {
    return (s, o) => (n(), i("div", vS, [
      et(s.$slots, "default", {}, void 0)
    ]));
  }
}), wu = /* @__PURE__ */ Ie(pS, [["__scopeId", "data-v-8c5ee761"]]), gS = { class: "commit-message" }, hS = { class: "commit-date" }, yS = /* @__PURE__ */ Se({
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
      _(mu, { hash: e.hash }, null, 8, ["hash"]),
      t("span", gS, m(e.message), 1),
      t("span", hS, m(e.relativeDate), 1),
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
}), _u = /* @__PURE__ */ Ie(yS, [["__scopeId", "data-v-dd7c621b"]]), wS = /* @__PURE__ */ Se({
  __name: "HistorySection",
  props: {
    commits: {},
    currentRef: {},
    embedded: { type: Boolean }
  },
  emits: ["select", "checkout"],
  setup(e) {
    const s = e, o = O(() => `HISTORY (${s.currentRef || "detached"})`);
    return (a, l) => (n(), L(Tt, null, ss({
      content: g(() => [
        e.commits.length === 0 ? (n(), L(us, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (n(), L(wu, { key: 1 }, {
          default: g(() => [
            (n(!0), i(G, null, ke(e.commits, (r) => (n(), L(_u, {
              key: r.hash,
              hash: r.short_hash || r.hash,
              message: r.message,
              "relative-date": r.date_relative || r.relative_date,
              onClick: (u) => a.$emit("select", r)
            }, {
              actions: g(() => [
                _(xe, {
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
}), _S = /* @__PURE__ */ Ie(wS, [["__scopeId", "data-v-fa4bf3a1"]]), kS = { class: "branch-create-form" }, bS = { class: "form-actions" }, $S = /* @__PURE__ */ Se({
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
    return (c, d) => (n(), i("div", kS, [
      _($s, {
        modelValue: a.value,
        "onUpdate:modelValue": d[0] || (d[0] = (v) => a.value = v),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: r,
        onEscape: u
      }, null, 8, ["modelValue"]),
      t("div", bS, [
        _(xe, {
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
        _(xe, {
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
}), CS = /* @__PURE__ */ Ie($S, [["__scopeId", "data-v-7c500394"]]), xS = { class: "branch-list-item__indicator" }, SS = { class: "branch-list-item__name" }, IS = {
  key: 0,
  class: "branch-list-item__actions"
}, ES = {
  key: 0,
  class: "branch-list-item__current-label"
}, TS = /* @__PURE__ */ Se({
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
      t("span", xS, m(e.isCurrent ? "●" : "○"), 1),
      t("span", SS, m(e.branchName), 1),
      s.$slots.actions || e.showCurrentLabel ? (n(), i("div", IS, [
        et(s.$slots, "actions", {}, void 0),
        e.isCurrent && e.showCurrentLabel ? (n(), i("span", ES, " current ")) : h("", !0)
      ])) : h("", !0)
    ], 2));
  }
}), MS = /* @__PURE__ */ Ie(TS, [["__scopeId", "data-v-c6581a24"]]), PS = { class: "header-info" }, RS = { class: "branch-name" }, NS = {
  key: 0,
  class: "current-badge"
}, LS = { class: "branch-meta" }, DS = { key: 0 }, OS = {
  key: 0,
  class: "meta-note"
}, US = {
  key: 0,
  class: "loading"
}, AS = {
  key: 1,
  class: "empty-state"
}, zS = /* @__PURE__ */ Se({
  __name: "BranchDetailModal",
  props: {
    branchName: {},
    isCurrent: { type: Boolean }
  },
  emits: ["close", "delete", "switch"],
  setup(e) {
    const s = e, { getBranchHistory: o } = dt(), a = b([]), l = b(!1), r = b(!0);
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
        t("div", PS, [
          c[4] || (c[4] = t("h3", { class: "header-title" }, "BRANCH", -1)),
          t("span", RS, m(e.branchName), 1),
          e.isCurrent ? (n(), i("span", NS, "CURRENT")) : h("", !0)
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
        t("div", LS, [
          r.value ? (n(), i("span", DS, "Loading...")) : (n(), i(G, { key: 1 }, [
            t("span", null, m(a.value.length) + " commits", 1),
            l.value ? (n(), i("span", OS, "(showing first " + m(a.value.length) + ")", 1)) : h("", !0)
          ], 64))
        ]),
        r.value ? (n(), i("div", US, "Loading commit history...")) : a.value.length === 0 ? (n(), i("div", AS, " No commits found on this branch ")) : (n(), L(wu, {
          key: 2,
          class: "branch-commits"
        }, {
          default: g(() => [
            (n(!0), i(G, null, ke(a.value, (d) => (n(), L(_u, {
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
        e.isCurrent ? h("", !0) : (n(), L(xe, {
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
}), VS = /* @__PURE__ */ Ie(zS, [["__scopeId", "data-v-2e5437cc"]]), FS = {
  key: 2,
  class: "branch-list"
}, BS = /* @__PURE__ */ Se({
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
    return (f, p) => (n(), L(Tt, null, ss({
      content: g(() => [
        a.value ? (n(), L(CS, {
          key: 0,
          onCreate: r,
          onCancel: u
        })) : h("", !0),
        e.branches.length === 0 ? (n(), L(us, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (n(), i("div", FS, [
          (n(!0), i(G, null, ke(e.branches, (w) => (n(), L(MS, {
            key: w.name,
            "branch-name": w.name,
            "is-current": w.is_current,
            clickable: !0,
            "show-current-label": !0,
            onClick: (y) => c(w)
          }, {
            actions: g(() => [
              w.is_current ? h("", !0) : (n(), L(xe, {
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
        l.value ? (n(), L(VS, {
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
              a.value ? h("", !0) : (n(), L(xe, {
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
}), WS = /* @__PURE__ */ Ie(BS, [["__scopeId", "data-v-a3de96cc"]]);
function ku(e) {
  return "has_conflicts" in e && e.has_conflicts === !0 && Array.isArray(e.workflow_conflicts);
}
const GS = { class: "remote-url-display" }, jS = ["title"], HS = ["title"], qS = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, KS = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, JS = /* @__PURE__ */ Se({
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
    return (r, u) => (n(), i("div", GS, [
      t("span", {
        class: "url-text",
        title: e.url
      }, m(a.value), 9, jS),
      t("button", {
        class: De(["copy-btn", { copied: o.value }]),
        onClick: l,
        title: o.value ? "Copied!" : "Copy URL"
      }, [
        o.value ? (n(), i("svg", KS, [...u[1] || (u[1] = [
          t("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (n(), i("svg", qS, [...u[0] || (u[0] = [
          t("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          t("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, HS)
    ]));
  }
}), YS = /* @__PURE__ */ Ie(JS, [["__scopeId", "data-v-7768a58d"]]), QS = { class: "remote-title" }, XS = {
  key: 0,
  class: "default-badge"
}, ZS = {
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
}, a5 = /* @__PURE__ */ Se({
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
    }, ss({
      icon: g(() => [
        $(m(a.value ? "🔗" : "🌐"), 1)
      ]),
      title: g(() => [
        t("div", QS, [
          t("span", null, m(e.remote.name), 1),
          a.value ? (n(), i("span", XS, "DEFAULT")) : h("", !0),
          e.syncStatus ? (n(), i("span", ZS, [
            e.syncStatus.ahead > 0 || e.syncStatus.behind > 0 ? (n(), i(G, { key: 0 }, [
              e.syncStatus.ahead > 0 ? (n(), i("span", e5, "↑" + m(e.syncStatus.ahead), 1)) : h("", !0),
              e.syncStatus.behind > 0 ? (n(), i("span", t5, "↓" + m(e.syncStatus.behind), 1)) : h("", !0)
            ], 64)) : (n(), i("span", s5, "✓ synced"))
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
        }, m(d.value), 9, o5)) : (n(), i("span", n5, m(d.value), 1))
      ]),
      actions: g(() => [
        _(xe, {
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
        _(xe, {
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
        _(xe, {
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
        _(xe, {
          variant: "secondary",
          size: "xs",
          onClick: f[4] || (f[4] = (p) => v.$emit("edit", e.remote.name))
        }, {
          default: g(() => [...f[7] || (f[7] = [
            $(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        a.value ? h("", !0) : (n(), L(xe, {
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
              _(YS, {
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
}), l5 = /* @__PURE__ */ Ie(a5, [["__scopeId", "data-v-8310f3a8"]]), i5 = { class: "remote-form" }, r5 = { class: "form-header" }, u5 = { class: "form-body" }, c5 = {
  key: 0,
  class: "form-error"
}, d5 = { class: "form-actions" }, m5 = /* @__PURE__ */ Se({
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
    return (v, f) => (n(), i("div", i5, [
      t("div", r5, [
        _(as, null, {
          default: g(() => [
            $(m(e.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      t("div", u5, [
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
        u.value ? (n(), i("div", c5, m(u.value), 1)) : h("", !0)
      ]),
      t("div", d5, [
        _(xe, {
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
        _(xe, {
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
}), f5 = /* @__PURE__ */ Ie(m5, [["__scopeId", "data-v-56021b18"]]), v5 = { class: "conflict-summary-box" }, p5 = { class: "summary-header" }, g5 = { class: "summary-text" }, h5 = { key: 0 }, y5 = {
  key: 1,
  class: "all-resolved"
}, w5 = { class: "summary-progress" }, _5 = { class: "progress-bar" }, k5 = { class: "progress-text" }, b5 = /* @__PURE__ */ Se({
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
    return (a, l) => (n(), i("div", v5, [
      t("div", p5, [
        l[0] || (l[0] = t("span", { class: "summary-icon" }, "⚠", -1)),
        t("div", g5, [
          t("strong", null, m(e.conflictCount) + " conflict" + m(e.conflictCount !== 1 ? "s" : "") + " detected", 1),
          e.resolvedCount < e.conflictCount ? (n(), i("p", h5, " Resolve all conflicts before " + m(e.operationType) + "ing ", 1)) : (n(), i("p", y5, " All conflicts resolved - ready to " + m(e.operationType), 1))
        ])
      ]),
      t("div", w5, [
        t("div", _5, [
          t("div", {
            class: "progress-fill",
            style: Ft({ width: o.value + "%" })
          }, null, 4)
        ]),
        t("span", k5, m(e.resolvedCount) + " / " + m(e.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), $5 = /* @__PURE__ */ Ie(b5, [["__scopeId", "data-v-4e9e6cc9"]]), C5 = { class: "modal-header" }, x5 = { class: "modal-title" }, S5 = { class: "modal-body" }, I5 = {
  key: 0,
  class: "error-box"
}, E5 = {
  key: 0,
  class: "error-hint"
}, T5 = {
  key: 1,
  class: "loading-state"
}, M5 = { class: "commit-summary" }, P5 = {
  key: 0,
  class: "commits-section"
}, R5 = { class: "commit-list" }, N5 = { class: "commit-hash" }, L5 = { class: "commit-message" }, D5 = { class: "commit-date" }, O5 = {
  key: 1,
  class: "changes-section"
}, U5 = {
  key: 0,
  class: "change-group",
  open: ""
}, A5 = { class: "change-count" }, z5 = { class: "change-list" }, V5 = {
  key: 0,
  class: "conflict-badge"
}, F5 = {
  key: 1,
  class: "change-group"
}, B5 = { class: "change-count" }, W5 = { class: "change-list" }, G5 = {
  key: 2,
  class: "change-group"
}, j5 = { class: "change-count" }, H5 = { class: "change-list" }, q5 = {
  key: 3,
  class: "strategy-section"
}, K5 = { class: "radio-group" }, J5 = { class: "radio-option" }, Y5 = { class: "radio-option" }, Q5 = { class: "radio-option" }, X5 = {
  key: 4,
  class: "up-to-date"
}, Z5 = { class: "modal-actions" }, Si = "comfygit.pullModelStrategy", e4 = /* @__PURE__ */ Se({
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
    const o = e, a = s, l = b(localStorage.getItem(Si) || "skip");
    kt(l, (C) => {
      localStorage.setItem(Si, C);
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
    }), v = O(() => o.preview && ku(o.preview) ? o.preview : null), f = O(() => {
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
      var U, E;
      return n(), L(Ot, { to: "body" }, [
        e.show ? (n(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: S[11] || (S[11] = (T) => C.$emit("close"))
        }, [
          t("div", {
            class: "modal-content",
            onClick: S[10] || (S[10] = st(() => {
            }, ["stop"]))
          }, [
            t("div", C5, [
              t("h3", x5, "PULL FROM " + m(e.remoteName.toUpperCase()), 1),
              t("button", {
                class: "modal-close",
                onClick: S[0] || (S[0] = (T) => C.$emit("close"))
              }, "✕")
            ]),
            t("div", S5, [
              e.error ? (n(), i("div", I5, [
                S[13] || (S[13] = t("span", { class: "error-icon" }, "✕", -1)),
                t("div", null, [
                  S[12] || (S[12] = t("strong", null, "PULL FAILED", -1)),
                  t("p", null, m(e.error), 1),
                  r.value ? (n(), i("p", E5, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : h("", !0)
                ])
              ])) : e.loading ? (n(), i("div", T5, [...S[14] || (S[14] = [
                t("span", { class: "spinner" }, "⟳", -1),
                $(" Loading preview... ", -1)
              ])])) : (U = e.preview) != null && U.has_uncommitted_changes ? (n(), i(G, { key: 2 }, [
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
              ], 64)) : e.preview ? (n(), i(G, { key: 3 }, [
                t("div", M5, [
                  S[17] || (S[17] = t("span", { class: "icon" }, "📥", -1)),
                  $(" " + m(e.preview.commits_behind) + " commit" + m(e.preview.commits_behind !== 1 ? "s" : "") + " from " + m(e.preview.remote) + "/" + m(e.preview.branch), 1)
                ]),
                e.preview.commits && e.preview.commits.length > 0 ? (n(), i("div", P5, [
                  S[18] || (S[18] = t("h4", { class: "section-title" }, "INCOMING COMMITS", -1)),
                  t("div", R5, [
                    (n(!0), i(G, null, ke(e.preview.commits, (T) => (n(), i("div", {
                      key: T.hash,
                      class: "commit-item"
                    }, [
                      t("span", N5, m(T.short_hash || T.hash.slice(0, 7)), 1),
                      t("span", L5, m(T.message), 1),
                      t("span", D5, m(T.date_relative || T.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                d.value ? (n(), i("div", O5, [
                  S[22] || (S[22] = t("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  u.value > 0 ? (n(), i("details", U5, [
                    t("summary", null, [
                      S[19] || (S[19] = t("span", { class: "change-type" }, "Workflows", -1)),
                      t("span", A5, m(u.value) + " changes", 1)
                    ]),
                    t("div", z5, [
                      (n(!0), i(G, null, ke(e.preview.changes.workflows.added, (T) => (n(), i("div", {
                        key: "a-" + T,
                        class: "change-item add"
                      }, " + " + m(T), 1))), 128)),
                      (n(!0), i(G, null, ke(e.preview.changes.workflows.modified, (T) => (n(), i("div", {
                        key: "m-" + T,
                        class: "change-item modify"
                      }, [
                        $(" ~ " + m(T) + " ", 1),
                        k(T) ? (n(), i("span", V5, "CONFLICT")) : h("", !0)
                      ]))), 128)),
                      (n(!0), i(G, null, ke(e.preview.changes.workflows.deleted, (T) => (n(), i("div", {
                        key: "d-" + T,
                        class: "change-item delete"
                      }, " - " + m(T), 1))), 128))
                    ])
                  ])) : h("", !0),
                  c.value > 0 ? (n(), i("details", F5, [
                    t("summary", null, [
                      S[20] || (S[20] = t("span", { class: "change-type" }, "Nodes", -1)),
                      t("span", B5, m(c.value) + " to install", 1)
                    ]),
                    t("div", W5, [
                      (n(!0), i(G, null, ke(e.preview.changes.nodes.to_install, (T) => (n(), i("div", {
                        key: T,
                        class: "change-item add"
                      }, " + " + m(T), 1))), 128))
                    ])
                  ])) : h("", !0),
                  e.preview.changes.models.count > 0 ? (n(), i("details", G5, [
                    t("summary", null, [
                      S[21] || (S[21] = t("span", { class: "change-type" }, "Models", -1)),
                      t("span", j5, m(e.preview.changes.models.count) + " referenced", 1)
                    ]),
                    t("div", H5, [
                      (n(!0), i(G, null, ke(e.preview.changes.models.referenced, (T) => (n(), i("div", {
                        key: T,
                        class: "change-item"
                      }, m(T), 1))), 128))
                    ])
                  ])) : h("", !0)
                ])) : h("", !0),
                v.value ? (n(), L($5, {
                  key: 2,
                  "conflict-count": f.value,
                  "resolved-count": p.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : h("", !0),
                e.preview.changes.models.count > 0 ? (n(), i("div", q5, [
                  S[27] || (S[27] = t("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  t("div", K5, [
                    t("label", J5, [
                      St(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": S[1] || (S[1] = (T) => l.value = T),
                        value: "all"
                      }, null, 512), [
                        [On, l.value]
                      ]),
                      S[23] || (S[23] = t("span", null, "Download all models", -1))
                    ]),
                    t("label", Y5, [
                      St(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": S[2] || (S[2] = (T) => l.value = T),
                        value: "required"
                      }, null, 512), [
                        [On, l.value]
                      ]),
                      S[24] || (S[24] = t("span", null, "Download required only", -1))
                    ]),
                    t("label", Q5, [
                      St(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": S[3] || (S[3] = (T) => l.value = T),
                        value: "skip"
                      }, null, 512), [
                        [On, l.value]
                      ]),
                      S[25] || (S[25] = t("span", null, "Skip model downloads", -1)),
                      S[26] || (S[26] = t("span", { class: "default-badge" }, "default", -1))
                    ])
                  ]),
                  S[28] || (S[28] = t("p", { class: "strategy-hint" }, "Models can be downloaded later from MODEL INDEX", -1))
                ])) : h("", !0),
                e.preview.commits_behind === 0 ? (n(), i("div", X5, [
                  S[29] || (S[29] = t("span", { class: "icon" }, "✓", -1)),
                  $(" Already up to date with " + m(e.preview.remote) + "/" + m(e.preview.branch), 1)
                ])) : h("", !0)
              ], 64)) : h("", !0)
            ]),
            t("div", Z5, [
              _(xe, {
                variant: "secondary",
                onClick: S[4] || (S[4] = (T) => C.$emit("close"))
              }, {
                default: g(() => [...S[30] || (S[30] = [
                  $(" Cancel ", -1)
                ])]),
                _: 1
              }),
              e.error ? (n(), i(G, { key: 0 }, [
                _(xe, {
                  variant: "secondary",
                  loading: e.pulling,
                  onClick: S[5] || (S[5] = (T) => x(!1))
                }, {
                  default: g(() => [...S[31] || (S[31] = [
                    $(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                _(xe, {
                  variant: "destructive",
                  loading: e.pulling,
                  onClick: S[6] || (S[6] = (T) => x(!0))
                }, {
                  default: g(() => [...S[32] || (S[32] = [
                    $(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (E = e.preview) != null && E.has_uncommitted_changes ? (n(), L(xe, {
                key: 1,
                variant: "destructive",
                loading: e.pulling,
                onClick: S[7] || (S[7] = (T) => x(!0))
              }, {
                default: g(() => [...S[33] || (S[33] = [
                  $(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : e.preview && e.preview.commits_behind > 0 ? (n(), i(G, { key: 2 }, [
                v.value && !w.value ? (n(), L(xe, {
                  key: 0,
                  variant: "primary",
                  onClick: S[8] || (S[8] = (T) => a("openConflictResolution"))
                }, {
                  default: g(() => [
                    $(" Resolve Conflicts (" + m(p.value) + "/" + m(f.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (n(), L(xe, {
                  key: 1,
                  variant: "primary",
                  loading: e.pulling,
                  disabled: !y.value,
                  onClick: S[9] || (S[9] = (T) => x(!1))
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
}), t4 = /* @__PURE__ */ Ie(e4, [["__scopeId", "data-v-1d633bba"]]), s4 = { class: "modal-header" }, o4 = { class: "modal-title" }, n4 = { class: "modal-body" }, a4 = {
  key: 0,
  class: "error-box"
}, l4 = {
  key: 1,
  class: "loading-state"
}, i4 = {
  key: 2,
  class: "warning-box"
}, r4 = {
  key: 0,
  class: "commits-section"
}, u4 = { class: "commit-list" }, c4 = { class: "commit-hash" }, d4 = { class: "commit-message" }, m4 = { class: "commit-date" }, f4 = { class: "force-option" }, v4 = { class: "checkbox-option" }, p4 = { class: "commit-summary" }, g4 = { key: 0 }, h4 = { key: 1 }, y4 = {
  key: 0,
  class: "info-box"
}, w4 = {
  key: 1,
  class: "commits-section"
}, _4 = { class: "commit-list" }, k4 = { class: "commit-hash" }, b4 = { class: "commit-message" }, $4 = { class: "commit-date" }, C4 = {
  key: 2,
  class: "up-to-date"
}, x4 = { class: "modal-actions" }, S4 = /* @__PURE__ */ Se({
  __name: "PushModal",
  props: {
    show: { type: Boolean },
    remoteName: {},
    preview: {},
    loading: { type: Boolean },
    pushing: { type: Boolean },
    error: {}
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
            t("div", s4, [
              t("h3", o4, "PUSH TO " + m(e.remoteName.toUpperCase()), 1),
              t("button", {
                class: "modal-close",
                onClick: u[0] || (u[0] = (f) => r.$emit("close"))
              }, "✕")
            ]),
            t("div", n4, [
              e.error ? (n(), i("div", a4, [
                u[9] || (u[9] = t("span", { class: "error-icon" }, "!", -1)),
                t("div", null, [
                  u[8] || (u[8] = t("strong", null, "Push failed", -1)),
                  t("p", null, m(e.error), 1)
                ])
              ])) : h("", !0),
              e.loading ? (n(), i("div", l4, [...u[10] || (u[10] = [
                t("span", { class: "spinner" }, "⟳", -1),
                $(" Loading preview... ", -1)
              ])])) : (c = e.preview) != null && c.has_uncommitted_changes ? (n(), i("div", i4, [...u[11] || (u[11] = [
                t("span", { class: "warning-icon" }, "⚠", -1),
                t("div", null, [
                  t("strong", null, "UNCOMMITTED CHANGES"),
                  t("p", null, "Commit your changes before pushing.")
                ], -1)
              ])])) : (d = e.preview) != null && d.remote_has_new_commits ? (n(), i(G, { key: 3 }, [
                u[15] || (u[15] = t("div", { class: "warning-box" }, [
                  t("span", { class: "warning-icon" }, "⚠"),
                  t("div", null, [
                    t("strong", null, "REMOTE HAS NEW COMMITS"),
                    t("p", null, "The remote has commits you don't have locally. You should pull first to avoid overwriting changes.")
                  ])
                ], -1)),
                e.preview.commits_ahead > 0 ? (n(), i("div", r4, [
                  u[12] || (u[12] = t("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  t("div", u4, [
                    (n(!0), i(G, null, ke(e.preview.commits, (f) => (n(), i("div", {
                      key: f.hash,
                      class: "commit-item"
                    }, [
                      t("span", c4, m(f.short_hash || f.hash.slice(0, 7)), 1),
                      t("span", d4, m(f.message), 1),
                      t("span", m4, m(f.date_relative || f.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                t("div", f4, [
                  t("label", v4, [
                    St(t("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": u[1] || (u[1] = (f) => a.value = f)
                    }, null, 512), [
                      [Kn, a.value]
                    ]),
                    u[13] || (u[13] = t("span", null, "Force push (overwrite remote)", -1))
                  ]),
                  u[14] || (u[14] = t("p", { class: "option-hint" }, "Uses --force-with-lease for safety", -1))
                ])
              ], 64)) : e.preview ? (n(), i(G, { key: 4 }, [
                t("div", p4, [
                  u[16] || (u[16] = t("span", { class: "icon" }, "📤", -1)),
                  e.preview.is_first_push ? (n(), i("span", g4, " Creating " + m(e.preview.remote) + "/" + m(e.preview.branch) + " with " + m(e.preview.commits_ahead) + " commit" + m(e.preview.commits_ahead !== 1 ? "s" : ""), 1)) : (n(), i("span", h4, " Pushing " + m(e.preview.commits_ahead) + " commit" + m(e.preview.commits_ahead !== 1 ? "s" : "") + " to " + m(e.preview.remote) + "/" + m(e.preview.branch), 1))
                ]),
                e.preview.is_first_push ? (n(), i("div", y4, [...u[17] || (u[17] = [
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
                e.preview.commits_ahead > 0 ? (n(), i("div", w4, [
                  u[18] || (u[18] = t("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  t("div", _4, [
                    (n(!0), i(G, null, ke(e.preview.commits, (f) => (n(), i("div", {
                      key: f.hash,
                      class: "commit-item"
                    }, [
                      t("span", k4, m(f.short_hash || f.hash.slice(0, 7)), 1),
                      t("span", b4, m(f.message), 1),
                      t("span", $4, m(f.date_relative || f.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : (n(), i("div", C4, [
                  u[19] || (u[19] = t("span", { class: "icon" }, "✓", -1)),
                  $(" Nothing to push - already up to date with " + m(e.preview.remote) + "/" + m(e.preview.branch), 1)
                ]))
              ], 64)) : h("", !0)
            ]),
            t("div", x4, [
              _(xe, {
                variant: "secondary",
                onClick: u[2] || (u[2] = (f) => r.$emit("close"))
              }, {
                default: g(() => [...u[20] || (u[20] = [
                  $(" Cancel ", -1)
                ])]),
                _: 1
              }),
              (v = e.preview) != null && v.remote_has_new_commits ? (n(), i(G, { key: 0 }, [
                _(xe, {
                  variant: "secondary",
                  onClick: u[3] || (u[3] = (f) => r.$emit("pull-first"))
                }, {
                  default: g(() => [...u[21] || (u[21] = [
                    $(" Pull First ", -1)
                  ])]),
                  _: 1
                }),
                _(xe, {
                  variant: "destructive",
                  disabled: !a.value,
                  loading: e.pushing,
                  onClick: u[4] || (u[4] = (f) => l(!0))
                }, {
                  default: g(() => [...u[22] || (u[22] = [
                    $(" Force Push ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled", "loading"])
              ], 64)) : e.preview && e.preview.commits_ahead > 0 && !e.preview.has_uncommitted_changes ? (n(), L(xe, {
                key: 1,
                variant: "primary",
                loading: e.pushing,
                onClick: u[5] || (u[5] = (f) => l(!1))
              }, {
                default: g(() => [...u[23] || (u[23] = [
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
}), I4 = /* @__PURE__ */ Ie(S4, [["__scopeId", "data-v-621a386e"]]), E4 = { class: "resolution-choice-group" }, T4 = ["disabled"], M4 = ["disabled"], P4 = /* @__PURE__ */ Se({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (n(), i("div", E4, [
      t("button", {
        class: De(["choice-btn", "mine", { selected: e.modelValue === "take_base" }]),
        onClick: o[0] || (o[0] = (a) => s.$emit("update:modelValue", "take_base")),
        disabled: e.disabled
      }, [...o[2] || (o[2] = [
        t("span", { class: "choice-icon" }, "◀", -1),
        t("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, T4),
      t("button", {
        class: De(["choice-btn", "theirs", { selected: e.modelValue === "take_target" }]),
        onClick: o[1] || (o[1] = (a) => s.$emit("update:modelValue", "take_target")),
        disabled: e.disabled
      }, [...o[3] || (o[3] = [
        t("span", { class: "choice-label" }, "Keep Theirs", -1),
        t("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, M4)
    ]));
  }
}), R4 = /* @__PURE__ */ Ie(P4, [["__scopeId", "data-v-985715ed"]]), N4 = { class: "conflict-header" }, L4 = { class: "conflict-info" }, D4 = { class: "workflow-name" }, O4 = { class: "conflict-description" }, U4 = {
  key: 0,
  class: "resolved-badge"
}, A4 = { class: "resolved-text" }, z4 = { class: "conflict-hashes" }, V4 = { class: "hash-item" }, F4 = { class: "hash-item" }, B4 = { class: "conflict-actions" }, W4 = /* @__PURE__ */ Se({
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
        t("div", N4, [
          v[2] || (v[2] = t("span", { class: "conflict-icon" }, "⚠", -1)),
          t("div", L4, [
            t("code", D4, m(e.conflict.name) + ".json", 1),
            t("div", O4, m(u.value), 1)
          ]),
          r.value ? (n(), i("div", U4, [
            v[1] || (v[1] = t("span", { class: "resolved-icon" }, "✓", -1)),
            t("span", A4, m(c.value), 1)
          ])) : h("", !0)
        ]),
        t("div", z4, [
          t("span", V4, [
            v[3] || (v[3] = $("Your: ", -1)),
            t("code", null, m(((f = e.conflict.base_hash) == null ? void 0 : f.slice(0, 8)) || "n/a"), 1)
          ]),
          t("span", F4, [
            v[4] || (v[4] = $("Theirs: ", -1)),
            t("code", null, m(((p = e.conflict.target_hash) == null ? void 0 : p.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        t("div", B4, [
          _(R4, {
            modelValue: l.value,
            "onUpdate:modelValue": v[0] || (v[0] = (w) => l.value = w),
            disabled: e.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), G4 = /* @__PURE__ */ Ie(W4, [["__scopeId", "data-v-506d3bbf"]]), j4 = { class: "resolution-content" }, H4 = {
  key: 0,
  class: "error-box"
}, q4 = { class: "resolution-header" }, K4 = { class: "header-stats" }, J4 = { class: "stat" }, Y4 = { class: "stat-value" }, Q4 = { class: "stat resolved" }, X4 = { class: "stat-value" }, Z4 = {
  key: 0,
  class: "stat pending"
}, eI = { class: "stat-value" }, tI = { class: "conflicts-list" }, sI = {
  key: 1,
  class: "all-resolved-message"
}, oI = /* @__PURE__ */ Se({
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
        t("div", j4, [
          e.error ? (n(), i("div", H4, [
            y[1] || (y[1] = t("span", { class: "error-icon" }, "✕", -1)),
            t("div", null, [
              y[0] || (y[0] = t("strong", null, "Validation Failed", -1)),
              t("p", null, m(e.error), 1)
            ])
          ])) : h("", !0),
          t("div", q4, [
            t("div", K4, [
              t("div", J4, [
                t("span", Y4, m(e.workflowConflicts.length), 1),
                y[2] || (y[2] = t("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              t("div", Q4, [
                t("span", X4, m(l.value), 1),
                y[3] || (y[3] = t("span", { class: "stat-label" }, "resolved", -1))
              ]),
              r.value > 0 ? (n(), i("div", Z4, [
                t("span", eI, m(r.value), 1),
                y[4] || (y[4] = t("span", { class: "stat-label" }, "pending", -1))
              ])) : h("", !0)
            ]),
            y[5] || (y[5] = t("p", { class: "header-hint" }, " Choose which version to keep for each conflicting workflow. ", -1))
          ]),
          t("div", tI, [
            (n(!0), i(G, null, ke(e.workflowConflicts, (k) => (n(), L(G4, {
              key: k.name,
              conflict: k,
              resolution: d(k.name),
              onResolve: (x) => v(k.name, x)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          u.value ? (n(), i("div", sI, [
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
}), nI = /* @__PURE__ */ Ie(oI, [["__scopeId", "data-v-c58d150d"]]), aI = { class: "node-conflict-item" }, lI = { class: "node-header" }, iI = { class: "node-name" }, rI = { class: "node-id" }, uI = { class: "version-comparison" }, cI = { class: "version yours" }, dI = { class: "version theirs" }, mI = { class: "chosen-version" }, fI = { class: "chosen" }, vI = { class: "chosen-reason" }, pI = { class: "affected-workflows" }, gI = { class: "wf-source" }, hI = { class: "wf-version" }, yI = /* @__PURE__ */ Se({
  __name: "NodeConflictItem",
  props: {
    conflict: {}
  },
  setup(e) {
    return (s, o) => (n(), i("div", aI, [
      t("div", lI, [
        t("code", iI, m(e.conflict.node_name), 1),
        t("span", rI, "(" + m(e.conflict.node_id) + ")", 1)
      ]),
      t("div", uI, [
        t("div", cI, [
          o[0] || (o[0] = t("span", { class: "label" }, "Your version:", -1)),
          t("code", null, m(e.conflict.base_version), 1)
        ]),
        o[2] || (o[2] = t("span", { class: "arrow" }, "→", -1)),
        t("div", dI, [
          o[1] || (o[1] = t("span", { class: "label" }, "Their version:", -1)),
          t("code", null, m(e.conflict.target_version), 1)
        ])
      ]),
      t("div", mI, [
        o[3] || (o[3] = t("span", { class: "label" }, "Will install:", -1)),
        t("code", fI, m(e.conflict.chosen_version), 1),
        t("span", vI, m(e.conflict.chosen_reason), 1)
      ]),
      t("details", pI, [
        t("summary", null, " Affected workflows (" + m(e.conflict.affected_workflows.length) + ") ", 1),
        t("ul", null, [
          (n(!0), i(G, null, ke(e.conflict.affected_workflows, (a) => (n(), i("li", {
            key: a.name
          }, [
            t("code", null, m(a.name), 1),
            t("span", gI, "(" + m(a.source === "base" ? "yours" : "theirs") + ")", 1),
            t("span", hI, "needs v" + m(a.required_version), 1)
          ]))), 128))
        ])
      ])
    ]));
  }
}), wI = /* @__PURE__ */ Ie(yI, [["__scopeId", "data-v-8b626725"]]), _I = { class: "validation-content" }, kI = {
  key: 0,
  class: "compatible-message"
}, bI = { class: "conflicts-list" }, $I = {
  key: 2,
  class: "warnings-section"
}, CI = /* @__PURE__ */ Se({
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
        t("div", _I, [
          e.validation.is_compatible && e.validation.node_conflicts.length === 0 ? (n(), i("div", kI, [
            u[5] || (u[5] = t("span", { class: "icon" }, "✓", -1)),
            t("div", null, [
              u[4] || (u[4] = t("strong", null, "All clear!", -1)),
              t("p", null, "Your workflow choices are compatible. Ready to " + m(e.operationType) + ".", 1)
            ])
          ])) : e.validation.node_conflicts.length > 0 ? (n(), i(G, { key: 1 }, [
            u[6] || (u[6] = t("div", { class: "warning-header" }, [
              t("span", { class: "icon" }, "⚠"),
              t("div", null, [
                t("strong", null, "Node Version Differences"),
                t("p", null, " Your workflow choices require different versions of some nodes. The versions shown below will be installed. ")
              ])
            ], -1)),
            t("div", bI, [
              (n(!0), i(G, null, ke(e.validation.node_conflicts, (c) => (n(), L(wI, {
                key: c.node_id,
                conflict: c
              }, null, 8, ["conflict"]))), 128))
            ]),
            u[7] || (u[7] = t("div", { class: "info-box" }, [
              t("strong", null, "What happens if you proceed?"),
              t("p", null, " The highlighted versions will be installed. Workflows built with different versions may need minor adjustments. ")
            ], -1))
          ], 64)) : h("", !0),
          e.validation.warnings.length > 0 ? (n(), i("div", $I, [
            u[8] || (u[8] = t("h4", null, "Warnings", -1)),
            t("ul", null, [
              (n(!0), i(G, null, ke(e.validation.warnings, (c, d) => (n(), i("li", { key: d }, m(c), 1))), 128))
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
}), xI = /* @__PURE__ */ Ie(CI, [["__scopeId", "data-v-fefd26ed"]]), SI = {
  key: 0,
  class: "embedded-toolbar"
}, II = { class: "embedded-toolbar-search" }, EI = { key: 0 }, TI = /* @__PURE__ */ Se({
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
    } = dt(), k = b([]), x = b(null), C = b({}), S = b(!1), U = b(null), E = b(""), T = b(!1), N = b(null), A = b(!1), H = b("add"), D = b({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), W = O(() => {
      if (!E.value.trim()) return k.value;
      const J = E.value.toLowerCase();
      return k.value.filter(
        (ge) => ge.name.toLowerCase().includes(J) || ge.fetch_url.toLowerCase().includes(J) || ge.push_url.toLowerCase().includes(J)
      );
    });
    async function Z() {
      S.value = !0, U.value = null;
      try {
        const J = await a();
        k.value = J.remotes, x.value = J.current_branch_tracking || null, await Promise.all(
          J.remotes.map(async (ge) => {
            const I = await d(ge.name);
            I && (C.value[ge.name] = I);
          })
        );
      } catch (J) {
        U.value = J instanceof Error ? J.message : "Failed to load remotes";
      } finally {
        S.value = !1;
      }
    }
    function ee() {
      H.value = "add", D.value = { name: "", fetchUrl: "", pushUrl: "" }, A.value = !0;
    }
    function re(J) {
      const ge = k.value.find((I) => I.name === J);
      ge && (H.value = "edit", D.value = {
        name: ge.name,
        fetchUrl: ge.fetch_url,
        pushUrl: ge.push_url
      }, A.value = !0);
    }
    async function he(J) {
      try {
        H.value === "add" ? await l(J.name, J.fetchUrl) : await u(J.name, J.fetchUrl, J.pushUrl || void 0), A.value = !1, await Z();
      } catch (ge) {
        U.value = ge instanceof Error ? ge.message : "Operation failed";
      }
    }
    function ne() {
      A.value = !1, D.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function Q(J) {
      N.value = J;
      try {
        await c(J);
        const ge = await d(J);
        ge && (C.value[J] = ge), o("toast", `✓ Fetched from ${J}`, "success");
      } catch (ge) {
        o("toast", ge instanceof Error ? ge.message : "Fetch failed", "error");
      } finally {
        N.value = null;
      }
    }
    async function de(J) {
      if (confirm(`Remove remote "${J}"?`))
        try {
          await r(J), await Z();
        } catch (ge) {
          U.value = ge instanceof Error ? ge.message : "Failed to remove remote";
        }
    }
    function Ne() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const le = b("idle"), pe = O(() => le.value === "pull_preview"), me = O(
      () => le.value === "resolving" || le.value === "validating"
    ), Ue = O(
      () => le.value === "validation_review" || le.value === "executing"
    ), se = b(!1), oe = b(null), M = b(!1), V = b(null), j = b(null), P = b(!1), R = b(null), ue = b(null), Ve = b(/* @__PURE__ */ new Map()), je = b(null), F = b(null), B = O(() => R.value && ku(R.value) ? R.value : null);
    async function q(J) {
      j.value = J, le.value = "pull_preview", P.value = !0, R.value = null, ue.value = null;
      try {
        R.value = await v(J);
      } catch (ge) {
        ue.value = ge instanceof Error ? ge.message : "Failed to load pull preview";
      } finally {
        P.value = !1;
      }
    }
    function we() {
      le.value = "idle", R.value = null, ue.value = null, j.value = null;
    }
    async function be(J) {
      if (!j.value) return;
      le.value = "executing", ue.value = null;
      const ge = j.value;
      try {
        const I = await f(ge, J);
        if (I.rolled_back) {
          ue.value = `Pull failed and was rolled back: ${I.error || "Unknown error"}`, le.value = "pull_preview";
          return;
        }
        _e(), le.value = "idle", o("toast", `✓ Pulled from ${ge}`, "success"), await Z();
      } catch (I) {
        ue.value = I instanceof Error ? I.message : "Pull failed", le.value = "pull_preview";
      }
    }
    function Ce() {
      B.value && (le.value = "resolving", F.value = null);
    }
    function Pe(J, ge) {
      Ve.value.set(J, { name: J, resolution: ge });
    }
    function Le() {
      le.value = "pull_preview";
    }
    async function Oe() {
      le.value = "validating", F.value = null;
      try {
        const J = Array.from(Ve.value.values());
        je.value = await y(j.value, J), le.value = "validation_review";
      } catch (J) {
        F.value = J instanceof Error ? J.message : "Validation failed", le.value = "resolving";
      }
    }
    async function Te() {
      le.value = "executing";
      const J = j.value;
      try {
        const ge = Array.from(Ve.value.values()), I = await f(J, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: ge
        });
        if (I.rolled_back) {
          ue.value = `Pull failed and was rolled back: ${I.error || "Unknown error"}`, le.value = "pull_preview";
          return;
        }
        _e(), le.value = "idle", o("toast", `✓ Pulled from ${J}`, "success"), await Z();
      } catch (ge) {
        ue.value = ge instanceof Error ? ge.message : "Pull failed", le.value = "validation_review";
      }
    }
    function We() {
      le.value = "resolving";
    }
    function Me() {
      _e(), le.value = "idle";
    }
    function _e() {
      Ve.value.clear(), je.value = null, F.value = null, ue.value = null, R.value = null, j.value = null;
    }
    async function te(J) {
      j.value = J, se.value = !0, P.value = !0, oe.value = null, V.value = null;
      try {
        oe.value = await p(J);
      } catch (ge) {
        V.value = ge instanceof Error ? ge.message : "Failed to load push preview";
      } finally {
        P.value = !1;
      }
    }
    function Be() {
      se.value = !1, oe.value = null, V.value = null, j.value = null;
    }
    async function z(J) {
      var I;
      if (!j.value) return;
      M.value = !0;
      const ge = j.value;
      V.value = null;
      try {
        await w(ge, J), Be(), o("toast", `✓ Pushed to ${ge}`, "success"), await Z();
      } catch (ie) {
        const ce = ie instanceof Error ? ie.message : "Push failed";
        V.value = ce, ie instanceof Xr && ie.status === 409 && ((I = ie.data) != null && I.needs_force) && oe.value ? oe.value = {
          ...oe.value,
          remote_has_new_commits: !0,
          needs_force: !0,
          can_push: !0,
          block_reason: null
        } : o("toast", ce, "error");
      } finally {
        M.value = !1;
      }
    }
    function X() {
      const J = j.value;
      Be(), J && q(J);
    }
    return ot(Z), (J, ge) => (n(), i(G, null, [
      _(Tt, null, ss({
        content: g(() => [
          S.value ? (n(), L(xs, {
            key: 0,
            message: "Loading remotes..."
          })) : U.value ? (n(), L(Ss, {
            key: 1,
            message: U.value,
            retry: !0,
            onRetry: Z
          }, null, 8, ["message"])) : (n(), i(G, { key: 2 }, [
            e.embedded && !A.value ? (n(), i("div", SI, [
              t("div", II, [
                _(mo, {
                  modelValue: E.value,
                  "onUpdate:modelValue": ge[2] || (ge[2] = (I) => E.value = I),
                  placeholder: "🔍 Search remotes..."
                }, null, 8, ["modelValue"])
              ]),
              _(xe, {
                variant: "primary",
                size: "sm",
                onClick: ee
              }, {
                default: g(() => [...ge[5] || (ge[5] = [
                  $(" + Add Remote ", -1)
                ])]),
                _: 1
              })
            ])) : h("", !0),
            A.value ? (n(), L(f5, {
              key: 1,
              mode: H.value,
              "remote-name": D.value.name,
              "fetch-url": D.value.fetchUrl,
              "push-url": D.value.pushUrl,
              onSubmit: he,
              onCancel: ne
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : h("", !0),
            k.value.length && !A.value ? (n(), L(gn, {
              key: 2,
              variant: "compact"
            }, {
              default: g(() => [
                $(" Total: " + m(k.value.length) + " remote" + m(k.value.length !== 1 ? "s" : "") + " ", 1),
                x.value ? (n(), i("span", EI, " • Tracking: " + m(x.value.remote) + "/" + m(x.value.branch), 1)) : h("", !0)
              ]),
              _: 1
            })) : h("", !0),
            W.value.length && !A.value ? (n(), L(bt, {
              key: 3,
              title: "REMOTES",
              count: W.value.length
            }, {
              default: g(() => [
                (n(!0), i(G, null, ke(W.value, (I) => (n(), L(l5, {
                  key: I.name,
                  remote: I,
                  "sync-status": C.value[I.name],
                  "fetching-remote": N.value,
                  onFetch: Q,
                  onEdit: re,
                  onRemove: de,
                  onPull: q,
                  onPush: te
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : h("", !0),
            !W.value.length && !A.value ? (n(), L(us, {
              key: 4,
              icon: "🌐",
              message: E.value ? `No remotes match '${E.value}'` : "No remotes configured."
            }, {
              actions: g(() => [
                _(xe, {
                  variant: "primary",
                  onClick: ee
                }, {
                  default: g(() => [...ge[6] || (ge[6] = [
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
              onInfoClick: ge[0] || (ge[0] = (I) => T.value = !0)
            }, {
              actions: g(() => [
                A.value ? h("", !0) : (n(), L(xe, {
                  key: 0,
                  variant: "primary",
                  size: "sm",
                  onClick: ee
                }, {
                  default: g(() => [...ge[4] || (ge[4] = [
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
            A.value ? h("", !0) : (n(), L(mo, {
              key: 0,
              modelValue: E.value,
              "onUpdate:modelValue": ge[1] || (ge[1] = (I) => E.value = I),
              placeholder: "🔍 Search remotes..."
            }, null, 8, ["modelValue"]))
          ]),
          key: "1"
        }
      ]), 1024),
      _(Qt, {
        show: T.value,
        title: "About Git Remotes",
        onClose: ge[3] || (ge[3] = (I) => T.value = !1)
      }, {
        content: g(() => [...ge[7] || (ge[7] = [
          t("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          t("p", null, [
            $(" The "),
            t("strong", null, '"origin"'),
            $(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: g(() => [
          _(xe, {
            variant: "link",
            onClick: Ne
          }, {
            default: g(() => [...ge[8] || (ge[8] = [
              $(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      _(t4, {
        show: pe.value,
        "remote-name": j.value || "",
        preview: R.value,
        loading: P.value,
        pulling: le.value === "executing",
        error: ue.value,
        "conflict-resolutions": Ve.value,
        onClose: we,
        onPull: be,
        onOpenConflictResolution: Ce
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      _(I4, {
        show: se.value,
        "remote-name": j.value || "",
        preview: oe.value,
        loading: P.value,
        pushing: M.value,
        error: V.value,
        onClose: Be,
        onPush: z,
        onPullFirst: X
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing", "error"]),
      me.value && B.value ? (n(), L(nI, {
        key: 0,
        "workflow-conflicts": B.value.workflow_conflicts,
        resolutions: Ve.value,
        "operation-type": "pull",
        validating: le.value === "validating",
        error: F.value,
        onClose: Le,
        onResolve: Pe,
        onApply: Oe
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : h("", !0),
      Ue.value && je.value ? (n(), L(xI, {
        key: 1,
        validation: je.value,
        "operation-type": "pull",
        executing: le.value === "executing",
        onProceed: Te,
        onGoBack: We,
        onCancel: Me
      }, null, 8, ["validation", "executing"])) : h("", !0)
    ], 64));
  }
}), MI = /* @__PURE__ */ Ie(TI, [["__scopeId", "data-v-e03090a2"]]), PI = /* @__PURE__ */ Se({
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
        _(Nl, {
          modelValue: r.value,
          "onUpdate:modelValue": c[0] || (c[0] = (d) => r.value = d),
          tabs: l
        }, null, 8, ["modelValue"])
      ]),
      content: g(() => [
        r.value === "history" ? (n(), L(_S, {
          key: 0,
          embedded: "",
          commits: e.commits,
          "current-ref": e.currentRef,
          onSelect: c[1] || (c[1] = (d) => a("select", d)),
          onCheckout: c[2] || (c[2] = (d) => a("checkout", d))
        }, null, 8, ["commits", "current-ref"])) : r.value === "branches" ? (n(), L(WS, {
          key: 1,
          embedded: "",
          branches: e.branches,
          current: e.current,
          onSwitch: c[3] || (c[3] = (d) => a("switch", d)),
          onCreate: c[4] || (c[4] = (d) => a("create", d)),
          onDelete: c[5] || (c[5] = (d) => a("delete", d))
        }, null, 8, ["branches", "current"])) : (n(), L(MI, {
          key: 2,
          embedded: "",
          onToast: c[6] || (c[6] = (d, v) => a("toast", d, v))
        }))
      ]),
      _: 1
    }));
  }
});
async function bu(e) {
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
const RI = { class: "text-viewer-wrapper" }, NI = ["disabled", "title"], LI = { class: "text-content" }, DI = /* @__PURE__ */ Se({
  __name: "TextViewer",
  props: {
    content: {}
  },
  setup(e) {
    const s = e, o = b(null), a = b("idle");
    async function l() {
      if (s.content)
        try {
          await bu(s.content), a.value = "copied", setTimeout(() => {
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
    return (c, d) => (n(), i("div", RI, [
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
        }, m(a.value === "copied" ? "Copied!" : "Copy"), 9, NI),
        t("pre", LI, m(e.content), 1)
      ], 544)
    ]));
  }
}), OI = /* @__PURE__ */ Ie(DI, [["__scopeId", "data-v-85a537ba"]]), UI = {
  key: 1,
  class: "manifest-viewer-shell"
}, AI = { class: "manifest-path" }, zI = /* @__PURE__ */ Se({
  __name: "ManifestSection",
  props: {
    embedded: { type: Boolean }
  },
  setup(e) {
    const { getEnvironmentManifest: s } = dt(), o = b(!1), a = b(null), l = b(!1), r = b({
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
    return ot(u), (c, d) => (n(), i(G, null, [
      _(Tt, null, ss({
        content: g(() => [
          o.value ? (n(), L(xs, {
            key: 0,
            message: "Loading manifest..."
          })) : a.value ? (n(), L(Ss, {
            key: 1,
            message: a.value,
            retry: !0,
            onRetry: u
          }, null, 8, ["message"])) : (n(), i(G, { key: 2 }, [
            !r.value.exists || !r.value.content ? (n(), L(us, {
              key: 0,
              icon: "📄",
              message: "No manifest content available"
            })) : (n(), i("div", UI, [
              _(OI, {
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
                _(xe, {
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
      _(Qt, {
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
          t("div", AI, [
            t("code", null, m(r.value.path || "unknown"), 1)
          ]),
          d[6] || (d[6] = t("p", { style: { "margin-top": "var(--cg-space-2)" } }, null, -1))
        ]),
        actions: g(() => [
          _(xe, {
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
}), VI = /* @__PURE__ */ Ie(zI, [["__scopeId", "data-v-814a8fdd"]]), FI = { class: "log-viewer-wrapper" }, BI = ["disabled", "title"], WI = /* @__PURE__ */ Se({
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
        await bu(v), a.value = "copied", setTimeout(() => {
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
    return (v, f) => (n(), i("div", FI, [
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
        }, m(a.value === "copied" ? "Copied!" : "Copy"), 9, BI),
        (n(!0), i(G, null, ke(l.value, (p, w) => (n(), i("div", {
          key: w,
          class: De(`log-line log-level-${p.level.toLowerCase()}`)
        }, m(p.text), 3))), 128))
      ], 544)
    ]));
  }
}), $u = /* @__PURE__ */ Ie(WI, [["__scopeId", "data-v-5aaf1b88"]]), GI = /* @__PURE__ */ Se({
  __name: "DebugEnvSection",
  props: {
    embedded: { type: Boolean }
  },
  setup(e) {
    const { getEnvironmentLogs: s, getStatus: o, getEnvironmentLogPath: a, openFile: l } = dt(), r = b([]), u = b(!1), c = b(null), d = b(!1), v = b("production"), f = b(null), p = b(!1);
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
    }), (x, C) => (n(), i(G, null, [
      _(Tt, null, ss({
        content: g(() => [
          u.value ? (n(), L(xs, {
            key: 0,
            message: "Loading environment logs..."
          })) : c.value ? (n(), L(Ss, {
            key: 1,
            message: c.value,
            retry: !0,
            onRetry: w
          }, null, 8, ["message"])) : (n(), i(G, { key: 2 }, [
            r.value.length === 0 ? (n(), L(us, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (n(), L($u, {
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
                _(xe, {
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
                _(xe, {
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
      _(Qt, {
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
          _(xe, {
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
}), Ii = /* @__PURE__ */ Se({
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
    } = dt(), u = e, c = b(u.initialTab ?? "workspace"), d = b([]), v = b(!1), f = b(null), p = b(!1), w = b(null), y = b(null), k = b(!1), x = O(() => c.value === "workspace" ? w.value : y.value);
    async function C() {
      v.value = !0, f.value = null;
      try {
        c.value === "workspace" ? d.value = await s(void 0, 500) : d.value = await a(void 0, 500);
      } catch (E) {
        f.value = E instanceof Error ? E.message : `Failed to load ${c.value} logs`;
      } finally {
        v.value = !1;
      }
    }
    async function S() {
      try {
        const [E, T] = await Promise.all([
          o(),
          l()
        ]);
        E.exists && (w.value = E.path), T.exists && (y.value = T.path);
      } catch {
      }
    }
    async function U() {
      if (x.value) {
        k.value = !0;
        try {
          await r(x.value);
        } catch (E) {
          console.error("Failed to open log file:", E);
        } finally {
          k.value = !1;
        }
      }
    }
    return kt(c, () => {
      C();
    }), kt(() => u.initialTab, (E) => {
      E && (c.value = E);
    }), ot(() => {
      C(), S();
    }), (E, T) => (n(), i(G, null, [
      _(Tt, null, ss({
        content: g(() => [
          v.value ? (n(), L(xs, {
            key: 0,
            message: `Loading ${c.value} logs...`
          }, null, 8, ["message"])) : f.value ? (n(), L(Ss, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: C
          }, null, 8, ["message"])) : (n(), i(G, { key: 2 }, [
            d.value.length === 0 ? (n(), L(us, {
              key: 0,
              icon: "📝",
              message: `No ${c.value} logs available`
            }, null, 8, ["message"])) : (n(), L($u, {
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
              onInfoClick: T[0] || (T[0] = (N) => p.value = !0)
            }, {
              actions: g(() => [
                _(xe, {
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
                _(xe, {
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
            _(Nl, {
              modelValue: c.value,
              "onUpdate:modelValue": T[1] || (T[1] = (N) => c.value = N),
              tabs: [
                { id: "workspace", label: "Workspace" },
                { id: "orchestrator", label: "Orchestrator" }
              ]
            }, null, 8, ["modelValue"])
          ]),
          key: "1"
        }
      ]), 1024),
      _(Qt, {
        show: p.value,
        title: "About Logs",
        onClose: T[3] || (T[3] = (N) => p.value = !1)
      }, {
        content: g(() => [...T[4] || (T[4] = [
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
          _(xe, {
            variant: "primary",
            onClick: T[2] || (T[2] = (N) => p.value = !1)
          }, {
            default: g(() => [...T[5] || (T[5] = [
              $(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), jI = /* @__PURE__ */ Se({
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
    }), (r, u) => (n(), i(G, null, [
      _(Tt, null, {
        header: g(() => [
          _(Mt, {
            title: "DIAGNOSTICS",
            "show-info": !0,
            onInfoClick: u[0] || (u[0] = (c) => l.value = !0)
          })
        ]),
        search: g(() => [
          _(Nl, {
            modelValue: a.value,
            "onUpdate:modelValue": u[1] || (u[1] = (c) => a.value = c),
            tabs: o
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          a.value === "manifest" ? (n(), L(VI, {
            key: 0,
            embedded: ""
          })) : a.value === "env" ? (n(), L(GI, {
            key: 1,
            embedded: ""
          })) : a.value === "workspace" ? (n(), L(Ii, {
            key: 2,
            embedded: "",
            "initial-tab": "workspace"
          })) : (n(), L(Ii, {
            key: 3,
            embedded: "",
            "initial-tab": "orchestrator"
          }))
        ]),
        _: 1
      }),
      _(Qt, {
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
          _(xe, {
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
}), HI = { class: "header-info" }, qI = { class: "commit-hash" }, KI = {
  key: 0,
  class: "commit-refs"
}, JI = { class: "commit-message" }, YI = { class: "commit-date" }, QI = {
  key: 0,
  class: "loading"
}, XI = {
  key: 1,
  class: "changes-section"
}, ZI = { class: "stats-row" }, e6 = { class: "stat" }, t6 = { class: "stat insertions" }, s6 = { class: "stat deletions" }, o6 = {
  key: 0,
  class: "change-group"
}, n6 = {
  key: 1,
  class: "change-group"
}, a6 = {
  key: 0,
  class: "version"
}, l6 = {
  key: 2,
  class: "change-group"
}, i6 = { class: "change-item" }, r6 = /* @__PURE__ */ Se({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(e) {
    const s = e, { getCommitDetail: o } = dt(), a = b(null), l = b(!0), r = O(() => {
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
          t("div", HI, [
            d[4] || (d[4] = t("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            t("span", qI, m(((v = a.value) == null ? void 0 : v.short_hash) || e.commit.short_hash || ((f = e.commit.hash) == null ? void 0 : f.slice(0, 7))), 1),
            (w = (p = a.value) == null ? void 0 : p.refs) != null && w.length ? (n(), i("span", KI, [
              (n(!0), i(G, null, ke(a.value.refs, (y) => (n(), i("span", {
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
          t("div", JI, m(((v = a.value) == null ? void 0 : v.message) || e.commit.message), 1),
          t("div", YI, m(((f = a.value) == null ? void 0 : f.date_relative) || e.commit.date_relative || e.commit.relative_date), 1),
          l.value ? (n(), i("div", QI, "Loading details...")) : a.value ? (n(), i("div", XI, [
            t("div", ZI, [
              t("span", e6, m(a.value.stats.files_changed) + " files", 1),
              t("span", t6, "+" + m(a.value.stats.insertions), 1),
              t("span", s6, "-" + m(a.value.stats.deletions), 1)
            ]),
            r.value ? (n(), i("div", o6, [
              _(Os, { variant: "section" }, {
                default: g(() => [...d[6] || (d[6] = [
                  $("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (n(!0), i(G, null, ke(a.value.changes.workflows.added, (p) => (n(), i("div", {
                key: "add-" + p,
                class: "change-item added"
              }, [
                d[7] || (d[7] = t("span", { class: "change-icon" }, "+", -1)),
                t("span", null, m(p), 1)
              ]))), 128)),
              (n(!0), i(G, null, ke(a.value.changes.workflows.modified, (p) => (n(), i("div", {
                key: "mod-" + p,
                class: "change-item modified"
              }, [
                d[8] || (d[8] = t("span", { class: "change-icon" }, "~", -1)),
                t("span", null, m(p), 1)
              ]))), 128)),
              (n(!0), i(G, null, ke(a.value.changes.workflows.deleted, (p) => (n(), i("div", {
                key: "del-" + p,
                class: "change-item deleted"
              }, [
                d[9] || (d[9] = t("span", { class: "change-icon" }, "-", -1)),
                t("span", null, m(p), 1)
              ]))), 128))
            ])) : h("", !0),
            u.value ? (n(), i("div", n6, [
              _(Os, { variant: "section" }, {
                default: g(() => [...d[10] || (d[10] = [
                  $("NODES", -1)
                ])]),
                _: 1
              }),
              (n(!0), i(G, null, ke(a.value.changes.nodes.added, (p) => (n(), i("div", {
                key: "add-" + p.name,
                class: "change-item added"
              }, [
                d[11] || (d[11] = t("span", { class: "change-icon" }, "+", -1)),
                t("span", null, m(p.name), 1),
                p.version ? (n(), i("span", a6, "(" + m(p.version) + ")", 1)) : h("", !0)
              ]))), 128)),
              (n(!0), i(G, null, ke(a.value.changes.nodes.removed, (p) => (n(), i("div", {
                key: "rem-" + p.name,
                class: "change-item deleted"
              }, [
                d[12] || (d[12] = t("span", { class: "change-icon" }, "-", -1)),
                t("span", null, m(p.name), 1)
              ]))), 128))
            ])) : h("", !0),
            a.value.changes.models.resolved > 0 ? (n(), i("div", l6, [
              _(Os, { variant: "section" }, {
                default: g(() => [...d[13] || (d[13] = [
                  $("MODELS", -1)
                ])]),
                _: 1
              }),
              t("div", i6, [
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
}), u6 = /* @__PURE__ */ Ie(r6, [["__scopeId", "data-v-d256ff6d"]]), c6 = { class: "popover-header" }, d6 = { class: "popover-body" }, m6 = {
  key: 0,
  class: "changes-summary"
}, f6 = {
  key: 0,
  class: "change-item"
}, v6 = {
  key: 1,
  class: "change-item"
}, p6 = {
  key: 2,
  class: "change-item"
}, g6 = {
  key: 3,
  class: "change-item"
}, h6 = {
  key: 4,
  class: "change-item"
}, y6 = {
  key: 5,
  class: "change-item"
}, w6 = {
  key: 1,
  class: "no-changes"
}, _6 = {
  key: 2,
  class: "loading"
}, k6 = {
  key: 3,
  class: "issues-error"
}, b6 = { class: "error-header" }, $6 = { class: "error-title" }, C6 = { class: "issues-list" }, x6 = { class: "workflow-state" }, S6 = { class: "message-section" }, I6 = { class: "popover-footer" }, E6 = {
  key: 1,
  class: "commit-popover"
}, T6 = { class: "popover-header" }, M6 = { class: "popover-body" }, P6 = {
  key: 0,
  class: "changes-summary"
}, R6 = {
  key: 0,
  class: "change-item"
}, N6 = {
  key: 1,
  class: "change-item"
}, L6 = {
  key: 2,
  class: "change-item"
}, D6 = {
  key: 3,
  class: "change-item"
}, O6 = {
  key: 4,
  class: "change-item"
}, U6 = {
  key: 5,
  class: "change-item"
}, A6 = {
  key: 1,
  class: "no-changes"
}, z6 = {
  key: 2,
  class: "loading"
}, V6 = {
  key: 3,
  class: "issues-error"
}, F6 = { class: "error-header" }, B6 = { class: "error-title" }, W6 = { class: "issues-list" }, G6 = { class: "workflow-state" }, j6 = { class: "message-section" }, H6 = { class: "popover-footer" }, q6 = /* @__PURE__ */ Se({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(e, { emit: s }) {
    const o = e, a = s, { commit: l } = dt(), r = b(""), u = b(!1), c = b(!1), d = O(() => {
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
            const E = `Committed: ${((k = U.summary) == null ? void 0 : k.new) || 0} new, ${((x = U.summary) == null ? void 0 : x.modified) || 0} modified, ${((C = U.summary) == null ? void 0 : C.deleted) || 0} deleted`;
            a("committed", { success: !0, message: E });
          } else if (U.status === "no_changes")
            a("committed", { success: !1, message: "No changes to commit" });
          else if (U.status === "blocked") {
            const E = ((S = U.issues) == null ? void 0 : S.map((T) => `${T.name}: ${T.issue}`).join("; ")) || "Unknown issues";
            a("committed", { success: !1, message: `Commit blocked - ${E}. Enable "Allow issues" to force.` });
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
          t("div", c6, [
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
          t("div", d6, [
            e.status && d.value ? (n(), i("div", m6, [
              e.status.workflows.new.length ? (n(), i("div", f6, [
                x[12] || (x[12] = t("span", { class: "change-icon new" }, "+", -1)),
                t("span", null, m(e.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : h("", !0),
              e.status.workflows.modified.length ? (n(), i("div", v6, [
                x[13] || (x[13] = t("span", { class: "change-icon modified" }, "~", -1)),
                t("span", null, m(e.status.workflows.modified.length) + " modified", 1)
              ])) : h("", !0),
              e.status.workflows.deleted.length ? (n(), i("div", p6, [
                x[14] || (x[14] = t("span", { class: "change-icon deleted" }, "-", -1)),
                t("span", null, m(e.status.workflows.deleted.length) + " deleted", 1)
              ])) : h("", !0),
              e.status.git_changes.nodes_added.length ? (n(), i("div", g6, [
                x[15] || (x[15] = t("span", { class: "change-icon new" }, "+", -1)),
                t("span", null, m(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : h("", !0),
              e.status.git_changes.nodes_removed.length ? (n(), i("div", h6, [
                x[16] || (x[16] = t("span", { class: "change-icon deleted" }, "-", -1)),
                t("span", null, m(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : h("", !0),
              v.value ? h("", !0) : (n(), i("div", y6, [...x[17] || (x[17] = [
                t("span", { class: "change-icon modified" }, "~", -1),
                t("span", null, "Configuration updated", -1)
              ])]))
            ])) : e.status ? (n(), i("div", w6, " No changes to commit ")) : (n(), i("div", _6, " Loading... ")),
            p.value ? (n(), i("div", k6, [
              t("div", b6, [
                x[18] || (x[18] = t("span", { class: "error-icon" }, "⚠", -1)),
                t("span", $6, m(f.value.length) + " workflow(s) have issues", 1)
              ]),
              t("div", C6, [
                (n(!0), i(G, null, ke(f.value, (C) => (n(), i("div", {
                  key: C.name,
                  class: "issue-item"
                }, [
                  t("strong", null, m(C.name), 1),
                  t("span", x6, "(" + m(C.sync_state) + ")", 1),
                  $(": " + m(C.issue_summary), 1)
                ]))), 128))
              ]),
              _(Qn, {
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
            t("div", S6, [
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
          t("div", I6, [
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
    ])) : (n(), i("div", E6, [
      t("div", T6, [
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
      t("div", M6, [
        e.status && d.value ? (n(), i("div", P6, [
          e.status.workflows.new.length ? (n(), i("div", R6, [
            x[23] || (x[23] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, m(e.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : h("", !0),
          e.status.workflows.modified.length ? (n(), i("div", N6, [
            x[24] || (x[24] = t("span", { class: "change-icon modified" }, "~", -1)),
            t("span", null, m(e.status.workflows.modified.length) + " modified", 1)
          ])) : h("", !0),
          e.status.workflows.deleted.length ? (n(), i("div", L6, [
            x[25] || (x[25] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, m(e.status.workflows.deleted.length) + " deleted", 1)
          ])) : h("", !0),
          e.status.git_changes.nodes_added.length ? (n(), i("div", D6, [
            x[26] || (x[26] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, m(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : h("", !0),
          e.status.git_changes.nodes_removed.length ? (n(), i("div", O6, [
            x[27] || (x[27] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, m(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : h("", !0),
          v.value ? h("", !0) : (n(), i("div", U6, [...x[28] || (x[28] = [
            t("span", { class: "change-icon modified" }, "~", -1),
            t("span", null, "Configuration updated", -1)
          ])]))
        ])) : e.status ? (n(), i("div", A6, " No changes to commit ")) : (n(), i("div", z6, " Loading... ")),
        p.value ? (n(), i("div", V6, [
          t("div", F6, [
            x[29] || (x[29] = t("span", { class: "error-icon" }, "⚠", -1)),
            t("span", B6, m(f.value.length) + " workflow(s) have issues", 1)
          ]),
          t("div", W6, [
            (n(!0), i(G, null, ke(f.value, (C) => (n(), i("div", {
              key: C.name,
              class: "issue-item"
            }, [
              t("strong", null, m(C.name), 1),
              t("span", G6, "(" + m(C.sync_state) + ")", 1),
              $(": " + m(C.issue_summary), 1)
            ]))), 128))
          ]),
          _(Qn, {
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
        t("div", j6, [
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
      t("div", H6, [
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
}), Cu = /* @__PURE__ */ Ie(q6, [["__scopeId", "data-v-5f897631"]]), K6 = { class: "modal-header" }, J6 = { class: "modal-body" }, Y6 = { class: "switch-message" }, Q6 = { class: "switch-details" }, X6 = { class: "modal-actions" }, Z6 = /* @__PURE__ */ Se({
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
          t("div", K6, [
            o[5] || (o[5] = t("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            t("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (a) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", J6, [
            t("p", Y6, [
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
            t("p", Q6, ' Your current work will be preserved. You can switch back to "' + m(e.fromEnvironment) + '" anytime. ', 1),
            o[10] || (o[10] = t("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          t("div", X6, [
            _(xe, {
              variant: "secondary",
              onClick: o[1] || (o[1] = (a) => s.$emit("close"))
            }, {
              default: g(() => [...o[11] || (o[11] = [
                $(" Cancel ", -1)
              ])]),
              _: 1
            }),
            _(xe, {
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
}), eE = /* @__PURE__ */ Ie(Z6, [["__scopeId", "data-v-e9c5253e"]]), tE = {
  key: 0,
  class: "modal-overlay"
}, sE = { class: "modal-content" }, oE = { class: "modal-body" }, nE = { class: "progress-info" }, aE = { class: "progress-percentage" }, lE = { class: "progress-state" }, iE = { class: "switch-steps" }, rE = { class: "step-icon" }, uE = { class: "step-label" }, cE = /* @__PURE__ */ Se({
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
      e.show ? (n(), i("div", tE, [
        t("div", sE, [
          u[1] || (u[1] = t("div", { class: "modal-header" }, [
            t("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          t("div", oE, [
            _(uu, {
              progress: e.progress,
              variant: a.value
            }, null, 8, ["progress", "variant"]),
            t("div", nE, [
              t("div", aE, m(e.progress) + "%", 1),
              t("div", lE, m(o.value), 1)
            ]),
            t("div", iE, [
              (n(!0), i(G, null, ke(l.value, (c) => (n(), i("div", {
                key: c.state,
                class: De(["switch-step", c.status])
              }, [
                t("span", rE, m(c.icon), 1),
                t("span", uE, m(c.label), 1)
              ], 2))), 128))
            ]),
            u[0] || (u[0] = t("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : h("", !0)
    ]));
  }
}), dE = /* @__PURE__ */ Ie(cE, [["__scopeId", "data-v-768a5078"]]), mE = { class: "modal-header" }, fE = { class: "modal-body" }, vE = {
  key: 0,
  class: "node-section"
}, pE = { class: "node-list" }, gE = {
  key: 1,
  class: "node-section"
}, hE = { class: "node-list" }, yE = { class: "modal-actions" }, wE = /* @__PURE__ */ Se({
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
          t("div", mE, [
            o[5] || (o[5] = t("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            t("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (a) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", fE, [
            o[8] || (o[8] = t("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            e.mismatchDetails.missing_nodes.length ? (n(), i("div", vE, [
              o[6] || (o[6] = t("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              t("div", pE, [
                (n(!0), i(G, null, ke(e.mismatchDetails.missing_nodes, (a) => (n(), i("div", {
                  key: a,
                  class: "node-item add"
                }, " + " + m(a), 1))), 128))
              ])
            ])) : h("", !0),
            e.mismatchDetails.extra_nodes.length ? (n(), i("div", gE, [
              o[7] || (o[7] = t("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              t("div", hE, [
                (n(!0), i(G, null, ke(e.mismatchDetails.extra_nodes, (a) => (n(), i("div", {
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
          t("div", yE, [
            _(xe, {
              variant: "secondary",
              onClick: o[1] || (o[1] = (a) => s.$emit("close"))
            }, {
              default: g(() => [...o[10] || (o[10] = [
                $(" Cancel ", -1)
              ])]),
              _: 1
            }),
            _(xe, {
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
}), _E = /* @__PURE__ */ Ie(wE, [["__scopeId", "data-v-7cad7518"]]), kE = [
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
], Tn = "v0.0.24", bE = "Akatz", $E = { class: "social-buttons" }, CE = ["title", "aria-label", "onClick"], xE = {
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, SE = ["d"], IE = ["title", "aria-label", "onClick"], EE = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, TE = ["d"], ME = /* @__PURE__ */ Se({
  __name: "SocialButtons",
  setup(e) {
    function s(o) {
      window.open(o, "_blank", "noopener,noreferrer");
    }
    return (o, a) => (n(), i("div", $E, [
      (n(!0), i(G, null, ke(Ye(kE), (l) => (n(), i(G, {
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
          (n(), i("svg", xE, [
            t("path", {
              d: l.iconPath
            }, null, 8, SE)
          ]))
        ], 8, CE)) : (n(), i("button", {
          key: 1,
          class: "icon-btn social-link",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (r) => s(l.url)
        }, [
          (n(), i("svg", EE, [
            t("path", {
              d: l.iconPath
            }, null, 8, TE)
          ]))
        ], 8, IE))
      ], 64))), 128))
    ]));
  }
}), xu = /* @__PURE__ */ Ie(ME, [["__scopeId", "data-v-4f846342"]]), PE = { class: "footer-info" }, RE = ["title"], NE = {
  key: 0,
  class: "dev-badge"
}, LE = { class: "made-by" }, DE = /* @__PURE__ */ Se({
  __name: "FooterInfo",
  setup(e) {
    const { getConfig: s } = dt(), o = b(null), a = b(null), l = b(null), r = O(() => o.value === "development"), u = O(() => {
      var d;
      if (!r.value) return Tn;
      const c = [a.value, (d = l.value) == null ? void 0 : d.slice(0, 7)].filter(Boolean).join(" @ ");
      return c ? `${Tn} (${c})` : `${Tn} (development)`;
    });
    return ot(async () => {
      try {
        const c = await s();
        o.value = c.manager_source ?? null, a.value = c.manager_branch ?? null, l.value = c.manager_commit ?? null;
      } catch {
        o.value = null;
      }
    }), (c, d) => (n(), i("div", PE, [
      t("span", {
        class: "version",
        title: u.value
      }, [
        $(m(Ye(Tn)) + " ", 1),
        r.value ? (n(), i("span", NE, "dev")) : h("", !0)
      ], 8, RE),
      t("span", LE, [
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
        $(" by " + m(Ye(bE)), 1)
      ])
    ]));
  }
}), Su = /* @__PURE__ */ Ie(DE, [["__scopeId", "data-v-4fa265b3"]]), OE = /* @__PURE__ */ Se({
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
        _(au, {
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
}), UE = /* @__PURE__ */ Ie(OE, [["__scopeId", "data-v-fac00ae7"]]), AE = { class: "header-actions" }, zE = {
  key: 0,
  class: "wizard-step"
}, VE = { class: "form-field" }, FE = ["placeholder"], BE = {
  key: 0,
  class: "form-error"
}, WE = { class: "form-field form-field--checkbox" }, GE = { class: "form-checkbox" }, jE = {
  key: 0,
  class: "form-field"
}, HE = ["placeholder"], qE = {
  key: 0,
  class: "form-info"
}, KE = {
  key: 1,
  class: "form-suggestion"
}, JE = {
  key: 2,
  class: "form-error"
}, YE = {
  key: 3,
  class: "form-info"
}, QE = {
  key: 1,
  class: "wizard-step"
}, XE = {
  key: 0,
  class: "progress-check-loading"
}, ZE = {
  key: 0,
  class: "cli-warning"
}, eT = { class: "cli-warning-header" }, tT = {
  key: 1,
  class: "env-landing"
}, sT = { class: "env-list" }, oT = ["value"], nT = { class: "env-name" }, aT = {
  key: 2,
  class: "env-create"
}, lT = { class: "form-field" }, iT = { class: "form-field" }, rT = ["value"], uT = { class: "form-field" }, cT = ["disabled"], dT = ["value"], mT = { class: "form-field" }, fT = ["value"], vT = { class: "form-field form-field--checkbox" }, pT = { class: "form-checkbox" }, gT = {
  key: 0,
  class: "form-error"
}, hT = {
  key: 1,
  class: "env-creating"
}, yT = { class: "creating-intro" }, wT = {
  key: 3,
  class: "env-import"
}, _T = { class: "wizard-footer" }, kT = { class: "wizard-footer-actions" }, ho = 10, bT = 600 * 1e3, Ei = 1800 * 1e3, $T = /* @__PURE__ */ Se({
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
    } = dt(), p = b(o.initialStep || 1), w = b(null), y = b("landing"), k = b(!1), x = b(!1), C = b(!1), S = b(!1), U = b(null), E = b(o.initialStep === 2), T = b(o.defaultPath), N = b(!!o.detectedModelsDir), A = b(o.detectedModelsDir || ""), H = b(null), D = b(null), W = b(null), Z = b(null), ee = b("my-new-env"), re = b(iu), he = b("latest"), ne = b(ru), Q = b(!0), de = b(null), Ne = b(null), le = b([{ tag_name: "latest", name: "Latest", published_at: "" }]), pe = b(!1), me = b(!1), Ue = b(!1), se = b({ progress: 0, message: "" }), oe = b({ progress: 0, message: "" }), M = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], V = b(0), j = b(null), P = b(0), R = b(null), ue = O(() => {
      var z, X;
      const _e = (z = T.value) == null ? void 0 : z.trim(), te = !H.value, Be = !N.value || !D.value && ((X = A.value) == null ? void 0 : X.trim());
      return _e && te && Be;
    }), Ve = O(() => {
      var _e;
      return (_e = ee.value) == null ? void 0 : _e.trim();
    }), je = O(() => !!(p.value === 2 || Ne.value || o.setupState === "empty_workspace" || o.setupState === "unmanaged")), F = O(() => Ne.value || o.workspacePath || null);
    async function B() {
      var _e;
      if (H.value = null, !!((_e = T.value) != null && _e.trim()))
        try {
          const te = await u({ path: T.value, type: "workspace" });
          te.valid || (H.value = te.error || "Invalid path");
        } catch (te) {
          H.value = te instanceof Error ? te.message : "Validation failed";
        }
    }
    async function q() {
      var _e;
      if (D.value = null, W.value = null, Z.value = null, !!((_e = A.value) != null && _e.trim()))
        try {
          const te = await u({ path: A.value, type: "models" });
          if (te.valid)
            Z.value = te.model_count ?? null;
          else if (D.value = te.error || "Invalid path", te.suggestion) {
            W.value = te.suggestion, A.value = te.suggestion, D.value = null;
            const Be = await u({ path: te.suggestion, type: "models" });
            Be.valid && (Z.value = Be.model_count ?? null);
          }
        } catch (te) {
          D.value = te instanceof Error ? te.message : "Validation failed";
        }
    }
    async function we() {
      var _e, te, Be, z, X;
      if (H.value = null, D.value = null, await B(), (_e = H.value) != null && _e.includes("already exists")) {
        H.value = null, Ne.value = ((te = T.value) == null ? void 0 : te.trim()) || o.defaultPath, p.value = 2, Ce();
        return;
      }
      if (!H.value && !(N.value && ((Be = A.value) != null && Be.trim()) && (await q(), D.value))) {
        me.value = !0;
        try {
          await l({
            workspace_path: ((z = T.value) == null ? void 0 : z.trim()) || o.defaultPath,
            models_directory: N.value && ((X = A.value) == null ? void 0 : X.trim()) || null
          }), V.value = 0, j.value = Date.now();
          const J = setInterval(async () => {
            var ge;
            if (j.value && Date.now() - j.value > bT) {
              clearInterval(J), me.value = !1, H.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const I = await r();
              if (V.value = 0, I.state === "idle" && me.value) {
                clearInterval(J), me.value = !1, H.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              se.value = { progress: I.progress, message: I.message }, I.state === "complete" ? (clearInterval(J), me.value = !1, Ne.value = ((ge = T.value) == null ? void 0 : ge.trim()) || o.defaultPath, p.value = 2, Ce()) : I.state === "error" && (clearInterval(J), me.value = !1, H.value = I.error || "Workspace creation failed");
            } catch (I) {
              V.value++, console.warn(`Polling failure ${V.value}/${ho}:`, I), V.value >= ho && (clearInterval(J), me.value = !1, H.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (J) {
          me.value = !1, H.value = J instanceof Error ? J.message : "Failed to create workspace";
        }
      }
    }
    async function be() {
      Ue.value = !0, de.value = null;
      try {
        const _e = {
          name: ee.value.trim() || "my-new-env",
          python_version: re.value,
          comfyui_version: he.value,
          torch_backend: ne.value,
          switch_after: Q.value,
          workspace_path: Ne.value || void 0
          // Pass workspace path for first-time setup
        };
        if ((await c(_e)).status === "started") {
          P.value = 0, R.value = Date.now();
          const Be = setInterval(async () => {
            if (R.value && Date.now() - R.value > Ei) {
              clearInterval(Be), Ue.value = !1, de.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const z = await d();
              if (P.value = 0, z.state === "idle" && Ue.value) {
                clearInterval(Be), Ue.value = !1, de.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              if (oe.value = {
                progress: z.progress ?? 0,
                message: z.message,
                phase: z.phase
              }, z.state === "complete") {
                clearInterval(Be), Ue.value = !1;
                const X = z.environment_name || _e.name;
                Q.value ? a("complete", X, Ne.value) : (y.value = "landing", a("environment-created-no-switch", X));
              } else z.state === "error" && (clearInterval(Be), Ue.value = !1, de.value = z.error || "Environment creation failed");
            } catch (z) {
              P.value++, console.warn(`Polling failure ${P.value}/${ho}:`, z), P.value >= ho && (clearInterval(Be), Ue.value = !1, de.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (_e) {
        Ue.value = !1, de.value = _e instanceof Error ? _e.message : "Unknown error";
      }
    }
    async function Ce() {
      pe.value = !0;
      try {
        le.value = await f();
      } catch (_e) {
        console.error("Failed to load ComfyUI releases:", _e);
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
    function Oe(_e, te) {
      x.value = !1, te ? a("complete", _e, Ne.value) : (a("environment-created-no-switch", _e), y.value = "landing");
    }
    function Te() {
    }
    ot(async () => {
      if (o.detectedModelsDir && (A.value = o.detectedModelsDir), o.workspacePath && (Ne.value = o.workspacePath), p.value === 2) {
        Ce();
        const _e = setTimeout(() => {
          E.value = !1;
        }, 3e3);
        await We(), clearTimeout(_e), E.value = !1;
      }
    });
    async function We() {
      try {
        const _e = await d();
        if (console.log("[ComfyGit] Create progress check:", _e.state, _e), _e.state === "creating") {
          console.log("[ComfyGit] Resuming in-progress environment creation:", _e.environment_name), y.value = "create", Ue.value = !0, ee.value = _e.environment_name || "my-new-env", oe.value = {
            progress: _e.progress ?? 0,
            message: _e.message,
            phase: _e.phase
          }, Me();
          return;
        }
      } catch (_e) {
        console.log("[ComfyGit] Create progress check failed:", _e);
      }
      try {
        const _e = await v();
        console.log("[ComfyGit] Import progress check:", _e.state, _e), _e.state === "importing" && (console.log("[ComfyGit] Resuming in-progress import:", _e.environment_name), U.value = {
          message: _e.message || "Importing...",
          phase: _e.phase || "",
          progress: _e.progress ?? 0,
          environmentName: _e.environment_name || ""
        }, S.value = !0, y.value = "import", x.value = !0);
      } catch (_e) {
        console.log("[ComfyGit] Import progress check failed:", _e);
      }
    }
    async function Me() {
      P.value = 0, R.value = Date.now();
      let _e = null;
      const te = async () => {
        if (R.value && Date.now() - R.value > Ei)
          return _e && clearInterval(_e), Ue.value = !1, de.value = "Environment creation timed out. Check server logs for details.", !1;
        try {
          const z = await d();
          if (P.value = 0, z.state === "idle" && Ue.value)
            return _e && clearInterval(_e), Ue.value = !1, de.value = "Environment creation was interrupted. Please try again.", !1;
          if (oe.value = {
            progress: z.progress ?? 0,
            message: z.message,
            phase: z.phase
          }, z.state === "complete") {
            _e && clearInterval(_e), Ue.value = !1;
            const X = z.environment_name || ee.value;
            return a("complete", X, Ne.value), !1;
          } else if (z.state === "error")
            return _e && clearInterval(_e), Ue.value = !1, de.value = z.error || "Environment creation failed", !1;
          return !0;
        } catch (z) {
          return P.value++, console.warn(`Polling failure ${P.value}/${ho}:`, z), P.value >= ho ? (_e && clearInterval(_e), Ue.value = !1, de.value = "Lost connection to server. Please refresh and try again.", !1) : !0;
        }
      };
      await te() && (_e = setInterval(async () => {
        !await te() && _e && clearInterval(_e);
      }, 2e3));
    }
    return (_e, te) => (n(), i(G, null, [
      _(Ct, {
        size: "lg",
        "show-close-button": !1,
        "close-on-overlay-click": !1,
        onClose: te[15] || (te[15] = (Be) => _e.$emit("close"))
      }, {
        header: g(() => [
          te[20] || (te[20] = t("h3", { class: "base-modal-title" }, "WELCOME TO COMFYGIT", -1)),
          t("div", AE, [
            _(xu),
            te[19] || (te[19] = t("span", { class: "header-divider" }, null, -1)),
            je.value ? (n(), i("button", {
              key: 0,
              class: "icon-btn settings-btn",
              title: "Workspace Settings",
              onClick: te[0] || (te[0] = (Be) => k.value = !0)
            }, [...te[17] || (te[17] = [
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
              onClick: te[1] || (te[1] = (Be) => _e.$emit("close")),
              title: "Close"
            }, [...te[18] || (te[18] = [
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
          var Be;
          return [
            p.value === 1 ? (n(), i("div", zE, [
              te[24] || (te[24] = t("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
              t("div", VE, [
                te[21] || (te[21] = t("label", { class: "form-label" }, "Workspace Path", -1)),
                St(t("input", {
                  "onUpdate:modelValue": te[2] || (te[2] = (z) => T.value = z),
                  type: "text",
                  class: "form-input",
                  placeholder: e.defaultPath
                }, null, 8, FE), [
                  [xo, T.value]
                ]),
                H.value ? (n(), i("p", BE, m(H.value), 1)) : h("", !0)
              ]),
              t("div", WE, [
                t("label", GE, [
                  St(t("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": te[3] || (te[3] = (z) => N.value = z)
                  }, null, 512), [
                    [Kn, N.value]
                  ]),
                  te[22] || (te[22] = t("span", null, "I have existing ComfyUI models", -1))
                ])
              ]),
              N.value ? (n(), i("div", jE, [
                te[23] || (te[23] = t("label", { class: "form-label" }, "Models Directory", -1)),
                St(t("input", {
                  "onUpdate:modelValue": te[4] || (te[4] = (z) => A.value = z),
                  type: "text",
                  class: "form-input",
                  placeholder: e.detectedModelsDir || "/path/to/models"
                }, null, 8, HE), [
                  [xo, A.value]
                ]),
                e.detectedModelsDir && !A.value ? (n(), i("p", qE, " Detected: " + m(e.detectedModelsDir), 1)) : h("", !0),
                W.value ? (n(), i("p", KE, " Did you mean: " + m(W.value), 1)) : h("", !0),
                D.value ? (n(), i("p", JE, m(D.value), 1)) : h("", !0),
                Z.value !== null && !D.value ? (n(), i("p", YE, " Found " + m(Z.value) + " model files ", 1)) : h("", !0)
              ])) : h("", !0),
              me.value ? (n(), L(Yn, {
                key: 1,
                progress: se.value.progress,
                message: se.value.message
              }, null, 8, ["progress", "message"])) : h("", !0)
            ])) : h("", !0),
            p.value === 2 ? (n(), i("div", QE, [
              E.value ? (n(), i("div", XE, [...te[25] || (te[25] = [
                t("div", { class: "loading-spinner" }, null, -1),
                t("div", { class: "loading-text" }, "Checking for in-progress operations...", -1)
              ])])) : (n(), i(G, { key: 1 }, [
                !o.cliInstalled && !C.value ? (n(), i("div", ZE, [
                  t("div", eT, [
                    te[27] || (te[27] = t("span", { class: "cli-warning-icon" }, "!", -1)),
                    te[28] || (te[28] = t("span", { class: "cli-warning-title" }, "ComfyGit CLI Not Installed", -1)),
                    t("button", {
                      class: "cli-warning-close",
                      onClick: te[5] || (te[5] = (z) => C.value = !0),
                      title: "Dismiss"
                    }, [...te[26] || (te[26] = [
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
                  te[29] || (te[29] = t("p", { class: "cli-warning-text" }, " To start managed environments from the command line, you'll need the ComfyGit CLI. This is required to restart ComfyUI in managed mode after switching environments. ", -1)),
                  te[30] || (te[30] = t("div", { class: "cli-warning-commands" }, [
                    t("code", null, "pipx install comfygit"),
                    t("span", { class: "cli-warning-or" }, "or"),
                    t("code", null, "uv tool install comfygit")
                  ], -1))
                ])) : h("", !0),
                y.value === "landing" ? (n(), i("div", tT, [
                  te[34] || (te[34] = t("p", { class: "wizard-intro" }, " Now let's set up your first environment. ", -1)),
                  t("button", {
                    class: "landing-option",
                    onClick: te[6] || (te[6] = (z) => y.value = "create")
                  }, [...te[31] || (te[31] = [
                    t("span", { class: "option-icon" }, "➕", -1),
                    t("div", { class: "option-content" }, [
                      t("span", { class: "option-title" }, "Create New Environment"),
                      t("span", { class: "option-description" }, "Start fresh with a new ComfyUI installation")
                    ], -1),
                    t("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  t("button", {
                    class: "landing-option",
                    onClick: te[7] || (te[7] = (z) => {
                      S.value = !1, y.value = "import";
                    })
                  }, [...te[32] || (te[32] = [
                    t("span", { class: "option-icon" }, "📦", -1),
                    t("div", { class: "option-content" }, [
                      t("span", { class: "option-title" }, "Import Environment"),
                      t("span", { class: "option-description" }, "From exported bundle (.tar.gz) or git repository")
                    ], -1),
                    t("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  (Be = o.existingEnvironments) != null && Be.length ? (n(), i(G, { key: 0 }, [
                    te[33] || (te[33] = t("div", { class: "landing-divider" }, [
                      t("span", null, "or switch to existing")
                    ], -1)),
                    t("div", sT, [
                      (n(!0), i(G, null, ke(o.existingEnvironments, (z) => (n(), i("label", {
                        key: z,
                        class: De(["env-option", { selected: w.value === z }])
                      }, [
                        St(t("input", {
                          type: "radio",
                          name: "env-select",
                          value: z,
                          "onUpdate:modelValue": te[8] || (te[8] = (X) => w.value = X)
                        }, null, 8, oT), [
                          [On, w.value]
                        ]),
                        t("span", nT, m(z), 1)
                      ], 2))), 128))
                    ])
                  ], 64)) : h("", !0)
                ])) : y.value === "create" ? (n(), i("div", aT, [
                  Ue.value ? (n(), i("div", hT, [
                    t("p", yT, [
                      te[41] || (te[41] = $(" Creating environment ", -1)),
                      t("strong", null, m(ee.value), 1),
                      te[42] || (te[42] = $("... ", -1))
                    ]),
                    _(Yn, {
                      progress: oe.value.progress,
                      message: oe.value.message,
                      "current-phase": oe.value.phase,
                      "show-steps": !0,
                      steps: M
                    }, null, 8, ["progress", "message", "current-phase"]),
                    te[43] || (te[43] = t("p", { class: "progress-warning" }, " This may take several minutes. Please wait... ", -1))
                  ])) : (n(), i(G, { key: 0 }, [
                    te[40] || (te[40] = t("p", { class: "wizard-intro" }, " Create a new managed environment: ", -1)),
                    t("div", lT, [
                      te[35] || (te[35] = t("label", { class: "form-label" }, "Environment Name", -1)),
                      St(t("input", {
                        "onUpdate:modelValue": te[9] || (te[9] = (z) => ee.value = z),
                        type: "text",
                        class: "form-input",
                        placeholder: "my-new-env"
                      }, null, 512), [
                        [xo, ee.value]
                      ])
                    ]),
                    t("div", iT, [
                      te[36] || (te[36] = t("label", { class: "form-label" }, "Python Version", -1)),
                      St(t("select", {
                        "onUpdate:modelValue": te[10] || (te[10] = (z) => re.value = z),
                        class: "form-select"
                      }, [
                        (n(!0), i(G, null, ke(Ye(lu), (z) => (n(), i("option", {
                          key: z,
                          value: z
                        }, m(z), 9, rT))), 128))
                      ], 512), [
                        [So, re.value]
                      ])
                    ]),
                    t("div", uT, [
                      te[37] || (te[37] = t("label", { class: "form-label" }, "ComfyUI Version", -1)),
                      St(t("select", {
                        "onUpdate:modelValue": te[11] || (te[11] = (z) => he.value = z),
                        class: "form-select",
                        disabled: pe.value
                      }, [
                        (n(!0), i(G, null, ke(le.value, (z) => (n(), i("option", {
                          key: z.tag_name,
                          value: z.tag_name
                        }, m(z.name), 9, dT))), 128))
                      ], 8, cT), [
                        [So, he.value]
                      ])
                    ]),
                    t("div", mT, [
                      te[38] || (te[38] = t("label", { class: "form-label" }, "PyTorch Backend", -1)),
                      St(t("select", {
                        "onUpdate:modelValue": te[12] || (te[12] = (z) => ne.value = z),
                        class: "form-select"
                      }, [
                        (n(!0), i(G, null, ke(Ye(Pl), (z) => (n(), i("option", {
                          key: z,
                          value: z
                        }, m(z) + m(z === "auto" ? " (detect GPU)" : ""), 9, fT))), 128))
                      ], 512), [
                        [So, ne.value]
                      ])
                    ]),
                    t("div", vT, [
                      t("label", pT, [
                        St(t("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": te[13] || (te[13] = (z) => Q.value = z)
                        }, null, 512), [
                          [Kn, Q.value]
                        ]),
                        te[39] || (te[39] = t("span", null, "Switch to this environment after creation", -1))
                      ])
                    ]),
                    de.value ? (n(), i("div", gT, m(de.value), 1)) : h("", !0)
                  ], 64))
                ])) : y.value === "import" ? (n(), i("div", wT, [
                  _(fu, {
                    "workspace-path": Ne.value,
                    "resume-import": S.value,
                    "initial-progress": U.value ?? void 0,
                    onImportComplete: Oe,
                    onImportStarted: te[14] || (te[14] = (z) => x.value = !0),
                    onSourceCleared: Te
                  }, null, 8, ["workspace-path", "resume-import", "initial-progress"])
                ])) : h("", !0)
              ], 64))
            ])) : h("", !0)
          ];
        }),
        footer: g(() => [
          t("div", _T, [
            _(Su),
            t("div", kT, [
              p.value === 1 ? (n(), L(Re, {
                key: 0,
                variant: "primary",
                disabled: !ue.value || me.value,
                onClick: we
              }, {
                default: g(() => [
                  $(m(me.value ? "Creating..." : "Next"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : p.value === 2 ? (n(), i(G, { key: 1 }, [
                !Ue.value && !x.value && (y.value !== "landing" || o.setupState === "no_workspace" && !Ne.value) ? (n(), L(Re, {
                  key: 0,
                  variant: "secondary",
                  onClick: Le
                }, {
                  default: g(() => [...te[44] || (te[44] = [
                    $(" Back ", -1)
                  ])]),
                  _: 1
                })) : h("", !0),
                y.value === "create" ? (n(), L(Re, {
                  key: 1,
                  variant: "primary",
                  disabled: !Ve.value || Ue.value,
                  onClick: be
                }, {
                  default: g(() => [
                    $(m(Ue.value ? "Creating..." : Q.value ? "Create & Switch" : "Create Environment"), 1)
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
      k.value ? (n(), L(UE, {
        key: 0,
        "workspace-path": F.value,
        onClose: te[16] || (te[16] = (Be) => k.value = !1)
      }, null, 8, ["workspace-path"])) : h("", !0)
    ], 64));
  }
}), CT = /* @__PURE__ */ Ie($T, [["__scopeId", "data-v-9a9aadc0"]]), xT = { class: "update-banner" }, ST = { class: "update-banner__left" }, IT = { class: "update-banner__title" }, ET = {
  key: 0,
  class: "update-banner__summary"
}, TT = { class: "update-banner__actions" }, MT = ["disabled"], PT = ["disabled"], RT = ["disabled"], NT = /* @__PURE__ */ Se({
  __name: "UpdateNoticeBanner",
  props: {
    info: {},
    updating: { type: Boolean }
  },
  emits: ["update", "dismiss", "release-notes"],
  setup(e, { emit: s }) {
    const o = s;
    return (a, l) => (n(), i("div", xT, [
      t("div", ST, [
        t("div", IT, " ComfyGit Manager v" + m(e.info.latest_version) + " available ", 1),
        e.info.changelog_summary ? (n(), i("div", ET, m(e.info.changelog_summary), 1)) : h("", !0)
      ]),
      t("div", TT, [
        t("button", {
          class: "update-banner__btn primary",
          disabled: e.updating,
          onClick: l[0] || (l[0] = (r) => o("update"))
        }, m(e.updating ? "Updating…" : "Update"), 9, MT),
        e.info.release_url ? (n(), i("button", {
          key: 0,
          class: "update-banner__btn",
          disabled: e.updating,
          onClick: l[1] || (l[1] = (r) => o("release-notes"))
        }, " Release notes ", 8, PT)) : h("", !0),
        t("button", {
          class: "update-banner__btn",
          disabled: e.updating,
          onClick: l[2] || (l[2] = (r) => o("dismiss"))
        }, " Dismiss ", 8, RT)
      ])
    ]));
  }
}), LT = /* @__PURE__ */ Ie(NT, [["__scopeId", "data-v-49562c5c"]]), Iu = "ComfyGit.UpdateNotice.DismissedVersion";
function DT() {
  try {
    return localStorage.getItem(Iu);
  } catch {
    return null;
  }
}
function OT(e) {
  try {
    localStorage.setItem(Iu, e);
  } catch {
  }
}
function UT(e) {
  return !e || !e.update_available || !e.latest_version ? !1 : DT() !== e.latest_version;
}
const AT = { class: "comfygit-panel" }, zT = { class: "panel-header" }, VT = { class: "header-left" }, FT = {
  key: 0,
  class: "header-info"
}, BT = { class: "header-actions" }, WT = { class: "env-switcher" }, GT = {
  key: 0,
  class: "header-info"
}, jT = { class: "branch-name" }, HT = { class: "panel-main" }, qT = { class: "sidebar" }, KT = { class: "sidebar-content" }, JT = { class: "sidebar-section" }, YT = { class: "sidebar-section" }, QT = { class: "sidebar-section" }, XT = { class: "sidebar-footer" }, ZT = { class: "content-area" }, e7 = {
  key: 0,
  class: "error-message"
}, t7 = {
  key: 1,
  class: "loading"
}, s7 = { class: "dialog-content env-selector-dialog" }, o7 = { class: "dialog-header" }, n7 = { class: "dialog-body" }, a7 = { class: "env-list" }, l7 = { class: "env-info" }, i7 = { class: "env-name-row" }, r7 = { class: "env-indicator" }, u7 = { class: "env-name" }, c7 = {
  key: 0,
  class: "env-branch"
}, d7 = {
  key: 1,
  class: "current-label"
}, m7 = { class: "env-stats" }, f7 = ["onClick"], v7 = { class: "toast-container" }, p7 = { class: "toast-message" }, Ti = "ComfyGit.LastView", Mi = "ComfyGit.LastSection", g7 = /* @__PURE__ */ Se({
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
      updateManager: E
    } = dt(), T = jv(), N = b(null), A = b([]), H = b([]), D = b([]), W = O(() => D.value.find((fe) => fe.is_current)), Z = b(null), ee = b(!1), re = b(!1), he = b("history"), ne = b("manifest"), Q = b(null), de = b(!1), Ne = b(1), le = O(() => {
      var fe;
      return ((fe = Q.value) == null ? void 0 : fe.state) || "managed";
    }), pe = b(!1), me = b(null), Ue = b(null), se = b(!1), oe = b(null), M = b(!1), V = b(!1), j = O(() => !M.value && UT(oe.value)), P = b(null), R = b(null), ue = b(null), Ve = b(!1), je = b(!1), F = b(""), B = b(null), q = b({ state: "idle", progress: 0, message: "" });
    let we = null, be = null;
    const Ce = {
      manifest: { view: "diagnostics", section: "diagnostics" },
      "debug-env": { view: "diagnostics", section: "diagnostics" },
      "debug-workspace": { view: "diagnostics", section: "diagnostics" },
      history: { view: "version-control", section: "version-control" },
      branches: { view: "version-control", section: "version-control" },
      remotes: { view: "version-control", section: "version-control" },
      status: { view: "status", section: "this-env" },
      account: { view: "account", section: "cloud" },
      publish: { view: "publish", section: "cloud" }
    }, Pe = o.initialView ? Ce[o.initialView] : null, Le = [
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
        const fe = sessionStorage.getItem(Ti), ae = sessionStorage.getItem(Mi), Ge = fe === "branches" || fe === "history" || fe === "remotes" ? "version-control" : fe === "manifest" || fe === "debug-env" || fe === "debug-workspace" ? "diagnostics" : fe === "deploy" ? "publish" : fe, Ke = ae === "all-envs" ? "workspace" : ae === "sharing" ? "cloud" : ae;
        if (fe && ae && Le.includes(Ge) && Oe.includes(Ke))
          return { view: Ge, section: Ke };
      } catch {
      }
      return null;
    }
    const We = Te(), Me = b((Pe == null ? void 0 : Pe.view) ?? (We == null ? void 0 : We.view) ?? "status"), _e = b((Pe == null ? void 0 : Pe.section) ?? (We == null ? void 0 : We.section) ?? "this-env");
    function te(fe, ae) {
      Me.value = fe, _e.value = ae;
      try {
        sessionStorage.setItem(Ti, fe), sessionStorage.setItem(Mi, ae);
      } catch {
      }
    }
    function Be(fe) {
      const Ge = {
        "model-index": { view: "model-index", section: "workspace" },
        remotes: { view: "version-control", section: "version-control" },
        account: { view: "account", section: "cloud" },
        publish: { view: "publish", section: "cloud" }
      }[fe];
      Ge && te(Ge.view, Ge.section);
    }
    function z(fe) {
      he.value = fe, te("version-control", "version-control");
    }
    function X(fe) {
      ne.value = fe, te("diagnostics", "diagnostics");
    }
    function J() {
      z("branches");
    }
    function ge() {
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
    const I = b(null), ie = b(!1), ce = b(!1), Ae = b([]);
    let ze = 0;
    function Ee(fe, ae = "info", Ge = 3e3) {
      const Ke = ++ze;
      return Ae.value.push({ id: Ke, message: fe, type: ae }), Ge > 0 && setTimeout(() => {
        Ae.value = Ae.value.filter((ht) => ht.id !== Ke);
      }, Ge), Ke;
    }
    function qe(fe) {
      Ae.value = Ae.value.filter((ae) => ae.id !== fe);
    }
    function Qe(fe, ae) {
      Ee(fe, ae);
    }
    async function at() {
      oe.value = null, M.value = !1;
      try {
        oe.value = await U();
      } catch {
      }
    }
    function rt() {
      var ae;
      const fe = (ae = oe.value) == null ? void 0 : ae.release_url;
      if (fe)
        try {
          window.open(fe, "_blank", "noopener,noreferrer");
        } catch {
        }
    }
    function mt() {
      var ae;
      const fe = (ae = oe.value) == null ? void 0 : ae.latest_version;
      fe && OT(fe), M.value = !0;
    }
    async function It() {
      var ae, Ge;
      if (V.value) return;
      V.value = !0;
      const fe = Ee("Updating comfygit-manager...", "info", 0);
      try {
        const Ke = await E();
        if (qe(fe), Ke.status !== "success") {
          if (Ee(Ke.message || "Update failed", "error"), Ke.manual_instructions) {
            const ht = Ke.manual_instructions.split(`
`).map((xt) => xt.trim()).filter(Boolean);
            I.value = {
              title: "Manual Update Required",
              message: "Self-update failed. Follow these steps:",
              details: ht,
              confirmLabel: "OK",
              cancelLabel: "Close",
              onConfirm: () => {
                I.value = null;
              }
            };
          }
          return;
        }
        if (Ee(Ke.message || "Update complete", "success"), mt(), Ke.restart_required) {
          tt();
          try {
            await ((Ge = (ae = window.app) == null ? void 0 : ae.api) == null ? void 0 : Ge.fetchApi("/v2/manager/reboot"));
          } catch {
          }
        }
      } catch (Ke) {
        qe(fe);
        const ht = Ke instanceof Error ? Ke.message : "Update failed";
        Ee(ht, "error");
      } finally {
        V.value = !1;
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
        N.value = fe, A.value = ae.commits, H.value = Ge.branches, D.value = Ke, a("statusUpdate", fe), P.value && await P.value.loadWorkflows(!0);
      } catch (fe) {
        me.value = fe instanceof Error ? fe.message : "Failed to load status", N.value = null, A.value = [], H.value = [];
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
      I.value = {
        title: ae ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: ae ? "You have uncommitted changes that will be lost." : `Checkout commit ${fe.short_hash || ((Ge = fe.hash) == null ? void 0 : Ge.slice(0, 7))}?`,
        details: ae ? yn() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: ae ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: ae,
        onConfirm: async () => {
          var xt;
          I.value = null, tt();
          const Ke = Ee(`Checking out ${fe.short_hash || ((xt = fe.hash) == null ? void 0 : xt.slice(0, 7))}...`, "info", 0), ht = await c(fe.hash, ae);
          qe(Ke), ht.status === "success" ? Ee("Restarting ComfyUI...", "success") : Ee(ht.message || "Checkout failed", "error");
        }
      };
    }
    async function ye(fe) {
      const ae = N.value && (N.value.workflows.new.length > 0 || N.value.workflows.modified.length > 0 || N.value.workflows.deleted.length > 0 || N.value.has_changes);
      I.value = {
        title: ae ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: ae ? "You have uncommitted changes." : `Switch to branch "${fe}"?`,
        details: ae ? yn() : void 0,
        warning: ae ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: ae ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          I.value = null, tt();
          const Ge = Ee(`Switching to ${fe}...`, "info", 0), Ke = await v(fe, ae);
          qe(Ge), Ke.status === "success" ? Ee("Restarting ComfyUI...", "success") : Ee(Ke.message || "Branch switch failed", "error");
        }
      };
    }
    async function He(fe) {
      const ae = Ee(`Creating branch ${fe}...`, "info", 0), Ge = await d(fe);
      qe(ae), Ge.status === "success" ? (Ee(`Branch "${fe}" created`, "success"), await ut()) : Ee(Ge.message || "Failed to create branch", "error");
    }
    async function vt(fe, ae = !1) {
      const Ge = async (Ke) => {
        var xt;
        const ht = Ee(`Deleting branch ${fe}...`, "info", 0);
        try {
          const cs = await f(fe, Ke);
          qe(ht), cs.status === "success" ? (Ee(`Branch "${fe}" deleted`, "success"), await ut()) : (xt = cs.message) != null && xt.includes("not fully merged") ? I.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${fe}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              I.value = null, await Ge(!0);
            }
          } : Ee(cs.message || "Failed to delete branch", "error");
        } catch (cs) {
          qe(ht);
          const Zs = cs instanceof Error ? cs.message : "Failed to delete branch";
          Zs.includes("not fully merged") ? I.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${fe}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              I.value = null, await Ge(!0);
            }
          } : Ee(Zs, "error");
        }
      };
      I.value = {
        title: "Delete Branch",
        message: `Delete branch "${fe}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          I.value = null, await Ge(ae);
        }
      };
    }
    async function Nt(fe) {
      Ue.value = null;
      const ae = prompt("Enter branch name:");
      if (ae) {
        const Ge = Ee(`Creating branch ${ae}...`, "info", 0), Ke = await d(ae, fe.hash);
        qe(Ge), Ke.status === "success" ? (Ee(`Branch "${ae}" created from ${fe.short_hash}`, "success"), await ut()) : Ee(Ke.message || "Failed to create branch", "error");
      }
    }
    function tt() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function Pt() {
      I.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var fe;
          I.value = null, tt(), Ee("Restarting environment...", "info");
          try {
            (fe = window.app) != null && fe.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function Is() {
      I.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var fe;
          I.value = null, Ee("Stopping environment...", "info");
          try {
            (fe = window.app) != null && fe.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function Jt(fe, ae) {
      se.value = !1, F.value = fe, B.value = ae || null, Ve.value = !0;
    }
    async function da() {
      Ve.value = !1, je.value = !0, tt(), q.value = {
        progress: 10,
        state: vo(10),
        message: po(10)
      };
      try {
        await w(F.value, B.value || void 0), ma(), fa();
      } catch (fe) {
        Es(), je.value = !1, Ee(`Failed to initiate switch: ${fe instanceof Error ? fe.message : "Unknown error"}`, "error"), q.value = { state: "idle", progress: 0, message: "" }, B.value = null;
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
    function ma() {
      if (be) return;
      let fe = 10;
      const ae = 60, Ge = 5e3, Ke = 100, ht = (ae - fe) / (Ge / Ke);
      be = window.setInterval(() => {
        if (fe += ht, fe >= ae && (fe = ae, Es()), q.value.progress < ae) {
          const xt = Math.floor(fe);
          q.value = {
            progress: xt,
            state: vo(xt),
            message: po(xt)
          };
        }
      }, Ke);
    }
    function Es() {
      be && (clearInterval(be), be = null);
    }
    function fa() {
      we || (we = window.setInterval(async () => {
        try {
          let fe = await T.getStatus();
          if ((!fe || fe.state === "idle") && (fe = await y()), !fe)
            return;
          const ae = fe.progress || 0;
          ae >= 60 && Es();
          const Ge = Math.max(ae, q.value.progress), Ke = fe.state && fe.state !== "idle" && fe.state !== "unknown", ht = Ke ? fe.state : vo(Ge), xt = Ke && fe.message || po(Ge);
          q.value = {
            state: ht,
            progress: Ge,
            message: xt
          }, fe.state === "complete" ? (Es(), Do(), je.value = !1, Ee(`✓ Switched to ${F.value}`, "success"), await ut(), F.value = "") : fe.state === "rolled_back" ? (Es(), Do(), je.value = !1, Ee("Switch failed, restored previous environment", "warning"), F.value = "") : fe.state === "critical_failure" && (Es(), Do(), je.value = !1, Ee(`Critical error during switch: ${fe.message}`, "error"), F.value = "");
        } catch (fe) {
          console.error("Failed to poll switch progress:", fe);
        }
      }, 1e3));
    }
    function Do() {
      Es(), we && (clearInterval(we), we = null);
    }
    function va() {
      var fe;
      Ve.value = !1, F.value = "", (fe = Q.value) != null && fe.state && Q.value.state !== "managed" && (Ne.value = Q.value.state === "no_workspace" ? 1 : 2, de.value = !0);
    }
    async function pa(fe) {
      ie.value = !1, await ut(), Ee(fe.message, fe.success ? "success" : "error");
    }
    async function ga() {
      ce.value = !1;
      const fe = Ee("Syncing environment...", "info", 0);
      try {
        const ae = await x("skip", !0);
        if (qe(fe), ae.status === "success") {
          const Ge = [];
          ae.nodes_installed.length && Ge.push(`${ae.nodes_installed.length} installed`), ae.nodes_removed.length && Ge.push(`${ae.nodes_removed.length} removed`);
          const Ke = Ge.length ? `: ${Ge.join(", ")}` : "";
          Ee(`✓ Environment synced${Ke}`, "success"), await ut();
        } else {
          const Ge = ae.errors.length ? ae.errors.join("; ") : ae.message;
          Ee(`Sync failed: ${Ge}`, "error");
        }
      } catch (ae) {
        qe(fe), Ee(`Sync error: ${ae instanceof Error ? ae.message : "Unknown error"}`, "error");
      }
    }
    async function ha(fe) {
      var ae;
      try {
        const Ge = await C(fe);
        Ge.failed.length === 0 ? Ee(`✓ Repaired ${Ge.success} workflow${Ge.success === 1 ? "" : "s"}`, "success") : Ee(`Repaired ${Ge.success}, failed: ${Ge.failed.length}`, "warning"), await ut();
      } catch (Ge) {
        Ee(`Repair failed: ${Ge instanceof Error ? Ge.message : "Unknown error"}`, "error");
      } finally {
        (ae = ue.value) == null || ae.resetRepairingState();
      }
    }
    async function hn() {
      var ae, Ge;
      const fe = Ee("Repairing environment...", "info", 0);
      try {
        const Ke = await x("skip", !0);
        if (qe(fe), Ke.status === "success") {
          const ht = [];
          Ke.nodes_installed.length && ht.push(`${Ke.nodes_installed.length} installed`), Ke.nodes_removed.length && ht.push(`${Ke.nodes_removed.length} removed`);
          const xt = ht.length ? `: ${ht.join(", ")}` : "";
          Ee(`✓ Environment repaired${xt}`, "success"), (ae = ue.value) == null || ae.closeDetailModal(), await ut();
        } else {
          const ht = Ke.errors.length ? Ke.errors.join(", ") : Ke.message || "Unknown error";
          Ee(`Repair failed: ${ht}`, "error");
        }
      } catch (Ke) {
        qe(fe), Ee(`Repair error: ${Ke instanceof Error ? Ke.message : "Unknown error"}`, "error");
      } finally {
        (Ge = ue.value) == null || Ge.resetRepairingEnvironmentState();
      }
    }
    async function ya(fe, ae) {
      Ee(`Environment '${fe}' created`, "success"), await ut(), R.value && await R.value.loadEnvironments(), ae && await Jt(fe);
    }
    async function wa(fe) {
      var ae;
      if (((ae = W.value) == null ? void 0 : ae.name) === fe) {
        Ee("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      I.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${fe}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          I.value = null;
          try {
            const Ge = await k(fe);
            Ge.status === "success" ? (Ee(`Environment "${fe}" deleted`, "success"), await ut(), R.value && await R.value.loadEnvironments()) : Ee(Ge.message || "Failed to delete environment", "error");
          } catch (Ge) {
            Ee(`Error deleting environment: ${Ge instanceof Error ? Ge.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function _a(fe, ae) {
      de.value = !1;
      try {
        Q.value = await S();
      } catch {
      }
      await Jt(fe, ae);
    }
    function ka() {
      de.value = !1, a("close");
    }
    async function ba(fe, ae) {
      await Jt(fe, ae);
    }
    async function $a(fe) {
      ee.value = !1, await ut(), await Jt(fe);
    }
    function Ca() {
      Z.value = null, ee.value = !0;
    }
    function xa(fe) {
      Z.value = fe, re.value = !0;
    }
    function Sa() {
      re.value = !1, Z.value = null;
    }
    async function Ia(fe) {
      Q.value = await S(), console.log(`Environment '${fe}' created. Available for switching.`);
    }
    function Ea() {
      te("environments", "workspace"), setTimeout(() => {
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
        if (Q.value = await S(), Q.value.state === "no_workspace") {
          de.value = !0, Ne.value = 1;
          return;
        }
        if (Q.value.state === "empty_workspace") {
          de.value = !0, Ne.value = 2;
          return;
        }
        if (Q.value.state === "unmanaged") {
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
      var Ge, Ke, ht, xt, cs, Zs, wn, _n, Y, $e, Fe, ct, Lt, Gt, gs, os;
      return n(), i("div", AT, [
        t("div", zT, [
          t("div", VT, [
            ae[28] || (ae[28] = t("h2", { class: "panel-title" }, "ComfyGit", -1)),
            N.value ? (n(), i("div", FT)) : h("", !0)
          ]),
          t("div", BT, [
            _(xu),
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
        j.value && oe.value ? (n(), L(LT, {
          key: 0,
          info: oe.value,
          updating: V.value,
          onUpdate: It,
          onDismiss: mt,
          onReleaseNotes: rt
        }, null, 8, ["info", "updating"])) : h("", !0),
        t("div", WT, [
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
                onClick: Is
              }, " Stop ")
            ])
          ]),
          t("button", {
            class: "env-switcher-btn",
            onClick: ae[1] || (ae[1] = (Xe) => te("environments", "workspace"))
          }, [
            N.value ? (n(), i("div", GT, [
              t("span", null, m(((Ge = W.value) == null ? void 0 : Ge.name) || ((Ke = N.value) == null ? void 0 : Ke.environment) || "Loading..."), 1),
              t("span", jT, "(" + m(N.value.branch || "detached") + ")", 1)
            ])) : h("", !0),
            ae[33] || (ae[33] = t("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        t("div", HT, [
          t("div", qT, [
            t("div", KT, [
              t("div", JT, [
                ae[34] || (ae[34] = t("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
                t("button", {
                  class: De(["sidebar-item", { active: Me.value === "status" && _e.value === "this-env" }]),
                  onClick: ae[2] || (ae[2] = (Xe) => te("status", "this-env"))
                }, " STATUS ", 2),
                t("button", {
                  class: De(["sidebar-item", { active: Me.value === "workflows" }]),
                  onClick: ae[3] || (ae[3] = (Xe) => te("workflows", "this-env"))
                }, " WORKFLOWS ", 2),
                t("button", {
                  class: De(["sidebar-item", { active: Me.value === "models-env" }]),
                  onClick: ae[4] || (ae[4] = (Xe) => te("models-env", "this-env"))
                }, " MODELS ", 2),
                t("button", {
                  class: De(["sidebar-item", { active: Me.value === "nodes" }]),
                  onClick: ae[5] || (ae[5] = (Xe) => te("nodes", "this-env"))
                }, " NODES ", 2),
                t("button", {
                  class: De(["sidebar-item", { active: Me.value === "version-control" }]),
                  onClick: ae[6] || (ae[6] = (Xe) => z("history"))
                }, " VERSION CONTROL ", 2),
                t("button", {
                  class: De(["sidebar-item", { active: Me.value === "diagnostics" }]),
                  onClick: ae[7] || (ae[7] = (Xe) => X("manifest"))
                }, " DIAGNOSTICS ", 2)
              ]),
              ae[37] || (ae[37] = t("div", { class: "sidebar-divider" }, null, -1)),
              t("div", YT, [
                ae[35] || (ae[35] = t("div", { class: "sidebar-section-title" }, "WORKSPACE", -1)),
                t("button", {
                  class: De(["sidebar-item", { active: Me.value === "environments" }]),
                  onClick: ae[8] || (ae[8] = (Xe) => te("environments", "workspace"))
                }, " ENVIRONMENTS ", 2),
                t("button", {
                  class: De(["sidebar-item", { active: Me.value === "model-index" }]),
                  onClick: ae[9] || (ae[9] = (Xe) => te("model-index", "workspace"))
                }, " MODEL INDEX ", 2),
                t("button", {
                  class: De(["sidebar-item", { active: Me.value === "settings" }]),
                  onClick: ae[10] || (ae[10] = (Xe) => te("settings", "workspace"))
                }, " SETTINGS ", 2)
              ]),
              ae[38] || (ae[38] = t("div", { class: "sidebar-divider" }, null, -1)),
              t("div", QT, [
                ae[36] || (ae[36] = t("div", { class: "sidebar-section-title" }, "CLOUD", -1)),
                t("button", {
                  class: De(["sidebar-item", { active: Me.value === "publish" }]),
                  onClick: ae[11] || (ae[11] = (Xe) => te("publish", "cloud"))
                }, " PUBLISH ", 2),
                t("button", {
                  class: De(["sidebar-item", { active: Me.value === "account" }]),
                  onClick: ae[12] || (ae[12] = (Xe) => te("account", "cloud"))
                }, " ACCOUNT ", 2)
              ])
            ]),
            t("div", XT, [
              _(Su)
            ])
          ]),
          t("div", ZT, [
            me.value ? (n(), i("div", e7, m(me.value), 1)) : !N.value && Me.value === "status" ? (n(), i("div", t7, " Loading status... ")) : (n(), i(G, { key: 2 }, [
              Me.value === "status" ? (n(), L(Bv, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: ue,
                status: N.value,
                "setup-state": le.value,
                onSwitchBranch: J,
                onCommitChanges: ae[13] || (ae[13] = (Xe) => ie.value = !0),
                onSyncEnvironment: ae[14] || (ae[14] = (Xe) => ce.value = !0),
                onViewWorkflows: ae[15] || (ae[15] = (Xe) => te("workflows", "this-env")),
                onViewHistory: ae[16] || (ae[16] = (Xe) => z("history")),
                onViewDebug: ae[17] || (ae[17] = (Xe) => X("env")),
                onViewNodes: ae[18] || (ae[18] = (Xe) => te("nodes", "this-env")),
                onRepairMissingModels: ha,
                onRepairEnvironment: hn,
                onStartSetup: ae[19] || (ae[19] = (Xe) => de.value = !0),
                onViewEnvironments: ae[20] || (ae[20] = (Xe) => te("environments", "workspace")),
                onCreateEnvironment: Ea
              }, null, 8, ["status", "setup-state"])) : Me.value === "workflows" ? (n(), L(S_, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: P,
                onRefresh: ut
              }, null, 512)) : Me.value === "models-env" ? (n(), L(Fb, {
                key: 2,
                onNavigate: Be
              })) : Me.value === "version-control" ? (n(), L(PI, {
                key: 3,
                commits: A.value,
                "current-ref": (ht = N.value) == null ? void 0 : ht.branch,
                branches: H.value,
                current: ((xt = N.value) == null ? void 0 : xt.branch) || null,
                "initial-tab": he.value,
                onSelect: ve,
                onCheckout: K,
                onSwitch: ye,
                onCreate: He,
                onDelete: vt,
                onToast: Qe
              }, null, 8, ["commits", "current-ref", "branches", "current", "initial-tab"])) : Me.value === "nodes" ? (n(), L(L2, {
                key: 4,
                "version-mismatches": ((Zs = (cs = N.value) == null ? void 0 : cs.comparison) == null ? void 0 : Zs.version_mismatches) || [],
                onOpenNodeManager: ge,
                onRepairEnvironment: hn,
                onToast: Qe
              }, null, 8, ["version-mismatches"])) : Me.value === "diagnostics" ? (n(), L(jI, {
                key: 5,
                "initial-tab": ne.value
              }, null, 8, ["initial-tab"])) : Me.value === "environments" ? (n(), L(NC, {
                key: 6,
                ref_key: "environmentsSectionRef",
                ref: R,
                onSwitch: Jt,
                onCreated: ya,
                onDelete: wa,
                onImport: Ca,
                onExport: xa
              }, null, 512)) : Me.value === "model-index" ? (n(), L(t2, {
                key: 7,
                onRefresh: ut
              })) : Me.value === "settings" ? (n(), L(i$, { key: 8 })) : Me.value === "account" ? (n(), L(O8, {
                key: 9,
                onToast: Qe,
                onNavigate: Be
              })) : Me.value === "publish" ? (n(), L(uS, {
                key: 10,
                "environment-name": ((wn = W.value) == null ? void 0 : wn.name) || ((_n = N.value) == null ? void 0 : _n.environment) || null,
                "branch-name": ((Y = N.value) == null ? void 0 : Y.branch) || null,
                onNavigate: Be,
                onToast: Qe
              }, null, 8, ["environment-name", "branch-name"])) : h("", !0)
            ], 64))
          ])
        ]),
        Ue.value ? (n(), L(u6, {
          key: 1,
          commit: Ue.value,
          onClose: ae[21] || (ae[21] = (Xe) => Ue.value = null),
          onCheckout: K,
          onCreateBranch: Nt
        }, null, 8, ["commit"])) : h("", !0),
        I.value ? (n(), L(ou, {
          key: 2,
          title: I.value.title,
          message: I.value.message,
          details: I.value.details,
          warning: I.value.warning,
          confirmLabel: I.value.confirmLabel,
          cancelLabel: I.value.cancelLabel,
          secondaryLabel: I.value.secondaryLabel,
          secondaryAction: I.value.secondaryAction,
          destructive: I.value.destructive,
          onConfirm: I.value.onConfirm,
          onCancel: ae[22] || (ae[22] = (Xe) => I.value = null),
          onSecondary: I.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : h("", !0),
        ee.value ? (n(), L(Ct, {
          key: 3,
          title: "IMPORT ENVIRONMENT",
          size: "xl",
          "fixed-height": "",
          onClose: ae[23] || (ae[23] = (Xe) => ee.value = !1)
        }, {
          body: g(() => [
            _(w8, {
              embedded: "",
              onImportCompleteSwitch: $a
            })
          ]),
          _: 1
        })) : h("", !0),
        re.value ? (n(), L(Ct, {
          key: 4,
          title: Z.value ? `EXPORT ENVIRONMENT: ${Z.value.toUpperCase()}` : "EXPORT ENVIRONMENT",
          size: "lg",
          "fixed-height": "",
          onClose: Sa
        }, {
          body: g(() => [
            _(Cx, {
              embedded: "",
              "environment-name": Z.value
            }, null, 8, ["environment-name"])
          ]),
          _: 1
        }, 8, ["title"])) : h("", !0),
        _(eE, {
          show: Ve.value,
          "from-environment": (($e = W.value) == null ? void 0 : $e.name) || "unknown",
          "to-environment": F.value,
          onConfirm: da,
          onClose: va
        }, null, 8, ["show", "from-environment", "to-environment"]),
        ie.value && N.value ? (n(), L(Cu, {
          key: 5,
          status: N.value,
          "as-modal": !0,
          onClose: ae[24] || (ae[24] = (Xe) => ie.value = !1),
          onCommitted: pa
        }, null, 8, ["status"])) : h("", !0),
        ce.value && N.value ? (n(), L(_E, {
          key: 6,
          show: ce.value,
          "mismatch-details": {
            missing_nodes: N.value.comparison.missing_nodes,
            extra_nodes: N.value.comparison.extra_nodes
          },
          onConfirm: ga,
          onClose: ae[25] || (ae[25] = (Xe) => ce.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : h("", !0),
        _(dE, {
          show: je.value,
          state: q.value.state,
          progress: q.value.progress,
          message: q.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        se.value ? (n(), i("div", {
          key: 7,
          class: "dialog-overlay",
          onClick: ae[27] || (ae[27] = st((Xe) => se.value = !1, ["self"]))
        }, [
          t("div", s7, [
            t("div", o7, [
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
            t("div", n7, [
              ae[41] || (ae[41] = t("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              t("div", a7, [
                (n(!0), i(G, null, ke(D.value, (Xe) => (n(), i("div", {
                  key: Xe.name,
                  class: De(["env-item", { current: Xe.is_current }])
                }, [
                  t("div", l7, [
                    t("div", i7, [
                      t("span", r7, m(Xe.is_current ? "●" : "○"), 1),
                      t("span", u7, m(Xe.name), 1),
                      Xe.current_branch ? (n(), i("span", c7, "(" + m(Xe.current_branch) + ")", 1)) : h("", !0),
                      Xe.is_current ? (n(), i("span", d7, "CURRENT")) : h("", !0)
                    ]),
                    t("div", m7, m(Xe.workflow_count) + " workflows • " + m(Xe.node_count) + " nodes ", 1)
                  ]),
                  Xe.is_current ? h("", !0) : (n(), i("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (Ta) => Jt(Xe.name)
                  }, " SWITCH ", 8, f7))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : h("", !0),
        de.value ? (n(), L(CT, {
          key: 8,
          "default-path": ((Fe = Q.value) == null ? void 0 : Fe.default_path) || "~/comfygit",
          "detected-models-dir": ((ct = Q.value) == null ? void 0 : ct.detected_models_dir) || null,
          "initial-step": Ne.value,
          "existing-environments": ((Lt = Q.value) == null ? void 0 : Lt.environments) || [],
          "cli-installed": ((Gt = Q.value) == null ? void 0 : Gt.cli_installed) ?? !0,
          "setup-state": ((gs = Q.value) == null ? void 0 : gs.state) || "no_workspace",
          "workspace-path": ((os = Q.value) == null ? void 0 : os.workspace_path) || null,
          onComplete: _a,
          onClose: ka,
          onSwitchEnvironment: ba,
          onEnvironmentCreatedNoSwitch: Ia
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state", "workspace-path"])) : h("", !0),
        t("div", v7, [
          _(Zd, { name: "toast" }, {
            default: g(() => [
              (n(!0), i(G, null, ke(Ae.value, (Xe) => (n(), i("div", {
                key: Xe.id,
                class: De(["toast", Xe.type])
              }, [
                t("span", p7, m(Xe.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), h7 = /* @__PURE__ */ Ie(g7, [["__scopeId", "data-v-3a97f217"]]), y7 = { class: "item-header" }, w7 = { class: "item-info" }, _7 = { class: "filename" }, k7 = { class: "metadata" }, b7 = { class: "size" }, $7 = {
  key: 0,
  class: "type"
}, C7 = { class: "item-actions" }, x7 = {
  key: 0,
  class: "progress-section"
}, S7 = { class: "progress-bar" }, I7 = { class: "progress-stats" }, E7 = { class: "downloaded" }, T7 = { class: "speed" }, M7 = {
  key: 0,
  class: "eta"
}, P7 = {
  key: 1,
  class: "status-msg paused"
}, R7 = {
  key: 2,
  class: "status-msg queued"
}, N7 = {
  key: 3,
  class: "status-msg completed"
}, L7 = {
  key: 4,
  class: "status-msg failed"
}, D7 = {
  key: 0,
  class: "retries"
}, O7 = /* @__PURE__ */ Se({
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
      t("div", y7, [
        t("div", w7, [
          t("div", _7, m(e.item.filename), 1),
          t("div", k7, [
            t("span", b7, m(a(e.item.size)), 1),
            e.item.type ? (n(), i("span", $7, m(e.item.type), 1)) : h("", !0)
          ])
        ]),
        t("div", C7, [
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
      e.item.status === "downloading" ? (n(), i("div", x7, [
        t("div", S7, [
          t("div", {
            class: "progress-fill",
            style: Ft({ width: `${e.item.progress}%` })
          }, null, 4)
        ]),
        t("div", I7, [
          t("span", E7, m(a(e.item.downloaded)) + " / " + m(a(e.item.size)), 1),
          t("span", T7, m(l(e.item.speed)), 1),
          e.item.eta > 0 ? (n(), i("span", M7, m(r(e.item.eta)), 1)) : h("", !0)
        ])
      ])) : e.item.status === "paused" ? (n(), i("div", P7, " Paused - click Resume to download ")) : e.item.status === "queued" ? (n(), i("div", R7, " Waiting in queue... ")) : e.item.status === "completed" ? (n(), i("div", N7, " ✓ Downloaded ")) : e.item.status === "failed" ? (n(), i("div", L7, [
        $(" ✗ " + m(e.item.error || "Failed") + " ", 1),
        e.item.retries > 0 ? (n(), i("span", D7, "(" + m(e.item.retries) + " retries)", 1)) : h("", !0)
      ])) : h("", !0)
    ], 2));
  }
}), Vo = /* @__PURE__ */ Ie(O7, [["__scopeId", "data-v-2110df65"]]), U7 = { class: "queue-title" }, A7 = { class: "count" }, z7 = { class: "queue-actions" }, V7 = { class: "action-label" }, F7 = {
  key: 0,
  class: "overall-progress"
}, B7 = { class: "progress-bar" }, W7 = {
  key: 0,
  class: "current-mini"
}, G7 = { class: "filename" }, j7 = { class: "speed" }, H7 = {
  key: 1,
  class: "queue-content"
}, q7 = {
  key: 0,
  class: "section"
}, K7 = {
  key: 1,
  class: "section"
}, J7 = { class: "section-header" }, Y7 = { class: "section-label paused" }, Q7 = { class: "items-list" }, X7 = {
  key: 2,
  class: "section"
}, Z7 = { class: "section-header" }, eM = { class: "section-label" }, tM = { class: "items-list" }, sM = {
  key: 3,
  class: "section"
}, oM = { class: "section-header" }, nM = { class: "section-label" }, aM = { class: "items-list" }, lM = {
  key: 4,
  class: "section"
}, iM = { class: "section-header" }, rM = { class: "section-label failed" }, uM = { class: "items-list" }, cM = /* @__PURE__ */ Se({
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
      (T, N) => {
        C && (clearTimeout(C), C = null);
        const A = T.active === 0 && T.failed === 0 && T.paused === 0 && T.completed > 0, H = N && (N.active > 0 || N.paused > 0);
        A && H && (C = setTimeout(() => {
          k(), C = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const S = O(() => {
      var A;
      if (s.items.length === 0) return 0;
      const T = l.value.length, N = ((A = o.value) == null ? void 0 : A.progress) || 0;
      return Math.round((T + N / 100) / s.items.length * 100);
    });
    function U(T) {
      v(T);
    }
    function E(T) {
      return T === 0 ? "..." : `${(T / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (T, N) => (n(), L(Ot, { to: "body" }, [
      Ye(c) ? (n(), i("div", {
        key: 0,
        class: De(["model-download-queue", { minimized: !x.value }])
      }, [
        t("div", {
          class: "queue-header",
          onClick: N[0] || (N[0] = (A) => x.value = !x.value)
        }, [
          t("div", U7, [
            N[4] || (N[4] = t("span", { class: "icon" }, "↓", -1)),
            N[5] || (N[5] = t("span", { class: "title" }, "Downloads", -1)),
            t("span", A7, "(" + m(Ye(d)) + "/" + m(Ye(s).items.length) + ")", 1)
          ]),
          t("div", z7, [
            t("span", V7, m(x.value ? "minimize" : "expand"), 1)
          ])
        ]),
        x.value ? (n(), i("div", H7, [
          Ye(o) ? (n(), i("div", q7, [
            N[6] || (N[6] = t("div", { class: "section-label" }, "Downloading", -1)),
            _(Vo, {
              item: Ye(o),
              onCancel: N[1] || (N[1] = (A) => U(Ye(o).id))
            }, null, 8, ["item"])
          ])) : h("", !0),
          Ye(u).length > 0 ? (n(), i("div", K7, [
            t("div", J7, [
              t("span", Y7, "Paused (" + m(Ye(u).length) + ")", 1),
              t("button", {
                class: "resume-all-btn",
                onClick: N[2] || (N[2] = //@ts-ignore
                (...A) => Ye(w) && Ye(w)(...A))
              }, "Resume All")
            ]),
            t("div", Q7, [
              (n(!0), i(G, null, ke(Ye(u), (A) => (n(), L(Vo, {
                key: A.id,
                item: A,
                onResume: (H) => Ye(p)(A.id),
                onRemove: (H) => Ye(y)(A.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : h("", !0),
          Ye(a).length > 0 ? (n(), i("div", X7, [
            t("div", Z7, [
              t("span", eM, "Queued (" + m(Ye(a).length) + ")", 1)
            ]),
            t("div", tM, [
              (n(!0), i(G, null, ke(Ye(a), (A) => (n(), L(Vo, {
                key: A.id,
                item: A,
                onCancel: (H) => U(A.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : h("", !0),
          Ye(l).length > 0 ? (n(), i("div", sM, [
            t("div", oM, [
              t("span", nM, "Completed (" + m(Ye(l).length) + ")", 1),
              t("button", {
                class: "clear-btn",
                onClick: N[3] || (N[3] = //@ts-ignore
                (...A) => Ye(k) && Ye(k)(...A))
              }, "Clear")
            ]),
            t("div", aM, [
              (n(!0), i(G, null, ke(Ye(l).slice(0, 3), (A) => (n(), L(Vo, {
                key: A.id,
                item: A,
                onRemove: (H) => Ye(y)(A.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : h("", !0),
          Ye(r).length > 0 ? (n(), i("div", lM, [
            t("div", iM, [
              t("span", rM, "Failed (" + m(Ye(r).length) + ")", 1)
            ]),
            t("div", uM, [
              (n(!0), i(G, null, ke(Ye(r), (A) => (n(), L(Vo, {
                key: A.id,
                item: A,
                onRetry: (H) => Ye(f)(A.id),
                onRemove: (H) => Ye(y)(A.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : h("", !0)
        ])) : (n(), i("div", F7, [
          t("div", B7, [
            t("div", {
              class: "progress-fill",
              style: Ft({ width: `${S.value}%` })
            }, null, 4)
          ]),
          Ye(o) ? (n(), i("div", W7, [
            t("span", G7, m(Ye(o).filename), 1),
            t("span", j7, m(E(Ye(o).speed)), 1)
          ])) : h("", !0)
        ]))
      ], 2)) : h("", !0)
    ]));
  }
}), dM = /* @__PURE__ */ Ie(cM, [["__scopeId", "data-v-3a3c9607"]]), mM = { class: "detail-header" }, fM = { class: "item-count" }, vM = { class: "resource-list" }, pM = { class: "item-info" }, gM = { class: "item-name" }, hM = {
  key: 0,
  class: "item-subtitle"
}, yM = {
  key: 0,
  class: "installing-badge"
}, wM = ["title"], _M = {
  key: 2,
  class: "installed-badge"
}, kM = {
  key: 3,
  class: "queued-badge"
}, bM = {
  key: 4,
  class: "action-buttons"
}, $M = {
  key: 1,
  class: "no-action"
}, CM = /* @__PURE__ */ Se({
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
        t("div", mM, [
          t("span", fM, m(e.items.length) + " " + m(e.items.length === 1 ? "item" : "items"), 1),
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
        t("div", vM, [
          (n(!0), i(G, null, ke(e.items, (x) => (n(), i("div", {
            key: x.id,
            class: "resource-item"
          }, [
            t("div", pM, [
              t("span", gM, m(x.name), 1),
              x.subtitle ? (n(), i("span", hM, m(x.subtitle), 1)) : h("", !0)
            ]),
            x.canAction ? (n(), i(G, { key: 0 }, [
              d(x) ? (n(), i("span", yM, "Installing...")) : f(x) ? (n(), i("span", {
                key: 1,
                class: "failed-badge",
                title: p(x)
              }, "Failed ⚠", 8, wM)) : v(x) ? (n(), i("span", _M, "Installed")) : c(x) ? (n(), i("span", kM, "Queued")) : (n(), i("div", bM, [
                (n(!0), i(G, null, ke(w(x), (C) => (n(), L(Re, {
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
            ], 64)) : (n(), i("span", $M, m(x.actionDisabledReason || "Not available"), 1))
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
}), xM = /* @__PURE__ */ Ie(CM, [["__scopeId", "data-v-ec7e9202"]]), SM = {
  key: 0,
  class: "loading-state"
}, IM = {
  key: 1,
  class: "analysis-results"
}, EM = {
  key: 0,
  class: "section"
}, TM = { class: "section-header" }, MM = { class: "section-title" }, PM = { class: "item-list" }, RM = { class: "package-info" }, NM = { class: "package-name" }, LM = { class: "node-count" }, DM = {
  key: 1,
  class: "installing-badge"
}, OM = {
  key: 2,
  class: "queued-badge"
}, UM = ["title"], AM = {
  key: 4,
  class: "installed-badge"
}, zM = {
  key: 1,
  class: "section"
}, VM = { class: "section-header" }, FM = { class: "section-title" }, BM = { class: "item-list" }, WM = { class: "node-type" }, GM = {
  key: 0,
  class: "overflow-note"
}, jM = {
  key: 2,
  class: "section"
}, HM = { class: "section-header" }, qM = { class: "section-title" }, KM = { class: "item-list" }, JM = { class: "node-type" }, YM = { class: "not-found" }, QM = {
  key: 0,
  class: "overflow-note"
}, XM = {
  key: 3,
  class: "section"
}, ZM = { class: "section-header" }, eP = { class: "section-title" }, tP = { class: "item-list" }, sP = { class: "package-info community-info" }, oP = { class: "community-title-row" }, nP = { class: "package-name" }, aP = { class: "node-count" }, lP = { class: "community-mapping-note" }, iP = { key: 0 }, rP = {
  key: 0,
  class: "community-actions"
}, uP = {
  key: 1,
  class: "installing-badge"
}, cP = {
  key: 2,
  class: "queued-badge"
}, dP = ["title"], mP = {
  key: 4,
  class: "installed-badge"
}, fP = ["title"], vP = {
  key: 1,
  class: "no-url"
}, pP = {
  key: 4,
  class: "section"
}, gP = { class: "section-header" }, hP = { class: "section-title" }, yP = { class: "item-list" }, wP = { class: "model-info" }, _P = { class: "model-name" }, kP = {
  key: 1,
  class: "queued-badge"
}, bP = {
  key: 1,
  class: "no-url"
}, $P = { class: "dont-show-again" }, CP = 3e4, xP = /* @__PURE__ */ Se({
  __name: "MissingResourcesPopup",
  setup(e) {
    const s = b(!1), o = b(null), a = b(null), l = b(!1), r = b(/* @__PURE__ */ new Set()), u = b(/* @__PURE__ */ new Set()), c = b(/* @__PURE__ */ new Map()), d = b(/* @__PURE__ */ new Set()), v = b(!1), f = b(null), p = b(0), w = b(null), y = b(/* @__PURE__ */ new Set()), k = b(/* @__PURE__ */ new Map()), x = b(/* @__PURE__ */ new Map()), { addToQueue: C } = Lo(), { queueNodeInstall: S } = dt(), U = O(() => {
      var I;
      return ((I = a.value) == null ? void 0 : I.package_aliases) || {};
    });
    function E(I) {
      if (!I) return null;
      const ie = U.value;
      let ce = I;
      const Ae = /* @__PURE__ */ new Set();
      for (; ie[ce] && !Ae.has(ce); )
        Ae.add(ce), ce = ie[ce];
      return ce;
    }
    function T(I, ie) {
      return I instanceof Error && I.message ? I.message : typeof I == "string" && I.trim().length > 0 ? I : ie;
    }
    function N(I) {
      for (const [ie, ce] of k.value.entries())
        ce === I && k.value.delete(ie);
    }
    function A(I) {
      if (!x.value.has(I)) return;
      const ie = x.value.get(I);
      clearTimeout(ie), x.value.delete(I);
    }
    function H() {
      for (const I of x.value.values())
        clearTimeout(I);
      x.value = /* @__PURE__ */ new Map();
    }
    function D(I) {
      A(I);
      const ie = setTimeout(() => {
        if (x.value.delete(I), !u.value.has(I)) return;
        N(I), u.value.delete(I), f.value === I && (f.value = null), c.value.set(I, "Queue timeout — please retry"), console.warn("[ComfyGit] Queue timeout waiting for cm-task-started:", I);
      }, CP);
      x.value.set(I, ie);
    }
    function W(I) {
      const ie = `Cannot install "${I.title}" - package_id is missing`;
      c.value.set(I.item_id, ie), o.value = ie, console.warn("[ComfyGit] Community install requested without package_id:", I);
    }
    const Z = O(() => ee.value.length > 0 || he.value.length > 0 || ne.value.length > 0 || Q.value.length > 0 || me.value.length > 0), ee = O(() => {
      var ce, Ae;
      if (!((ce = a.value) != null && ce.nodes)) return [];
      const I = /* @__PURE__ */ new Map(), ie = (a.value.nodes.resolved || []).filter((ze) => {
        var Ee;
        return !ze.is_installed && ((Ee = ze.package) == null ? void 0 : Ee.package_id);
      });
      for (const ze of ie) {
        const Ee = E(ze.package.package_id);
        if (!Ee) continue;
        I.has(Ee) || I.set(Ee, {
          package_id: Ee,
          title: ze.package.title || Ee,
          node_count: 0,
          node_types: [],
          repository: ze.package.repository || null,
          latest_version: ze.package.latest_version || null
        });
        const qe = I.get(Ee);
        qe.node_count++, qe.node_types.push(((Ae = ze.reference) == null ? void 0 : Ae.node_type) || ze.node_type);
      }
      return Array.from(I.values());
    }), re = O(() => ee.value.reduce((I, ie) => I + ie.node_count, 0)), he = O(() => {
      var I;
      return (I = a.value) != null && I.nodes ? (a.value.nodes.unresolved || []).map((ie) => {
        var ce;
        return {
          node_type: ((ce = ie.reference) == null ? void 0 : ce.node_type) || ie.node_type
        };
      }) : [];
    }), ne = O(() => {
      var ie;
      if (!((ie = a.value) != null && ie.nodes)) return [];
      const I = a.value.node_guidance || {};
      return (a.value.nodes.version_gated || []).map((ce) => {
        var ze;
        const Ae = ((ze = ce.reference) == null ? void 0 : ze.node_type) || ce.node_type;
        return {
          node_type: Ae,
          guidance: ce.guidance || I[Ae] || null
        };
      });
    }), Q = O(() => {
      var ce, Ae, ze, Ee, qe, Qe, at, rt;
      if (!((ce = a.value) != null && ce.nodes)) return [];
      const I = a.value.node_guidance || {}, ie = /* @__PURE__ */ new Map();
      for (const mt of a.value.nodes.uninstallable || []) {
        const It = ((Ae = mt.reference) == null ? void 0 : Ae.node_type) || mt.node_type, Wt = E(((ze = mt.package) == null ? void 0 : ze.package_id) || null), ut = Wt || `node:${It}`;
        ie.has(ut) || ie.set(ut, {
          item_id: ut,
          node_type: It,
          title: ((Ee = mt.package) == null ? void 0 : Ee.title) || Wt || It,
          node_count: 0,
          package_id: Wt,
          repository: ((qe = mt.package) == null ? void 0 : qe.repository) || null,
          latest_version: ((Qe = mt.package) == null ? void 0 : Qe.latest_version) || null,
          guidance: mt.guidance || I[It] || null
        });
        const ve = ie.get(ut);
        ve.node_count++, ve.guidance || (ve.guidance = mt.guidance || I[It] || null), !ve.repository && ((at = mt.package) != null && at.repository) && (ve.repository = mt.package.repository), !ve.latest_version && ((rt = mt.package) != null && rt.latest_version) && (ve.latest_version = mt.package.latest_version);
      }
      return Array.from(ie.values());
    }), de = O(() => Q.value.filter((I) => !!I.package_id)), Ne = O(() => Q.value.length >= 5 ? Q.value.slice(0, 4) : Q.value), le = O(() => de.value.length > 0 && de.value.every((I) => {
      const ie = I.package_id;
      return r.value.has(ie) || u.value.has(ie) || c.value.has(ie);
    }));
    function pe(I) {
      const ie = [
        { key: "install_registry", label: "Install", variant: "secondary" }
      ];
      return I.repository && ie.push({ key: "install_git", label: "Install via Git", variant: "ghost" }), ie;
    }
    const me = O(() => {
      var ze;
      if (!((ze = a.value) != null && ze.models)) return [];
      const I = (a.value.models.resolved || []).filter(
        (Ee) => Ee.match_type === "download_intent" || Ee.match_type === "property_download_intent" || Ee.match_type === "not_found"
      ).map((Ee) => {
        var qe, Qe, at, rt;
        return {
          filename: ((Qe = (qe = Ee.reference) == null ? void 0 : qe.widget_value) == null ? void 0 : Qe.split("/").pop()) || ((at = Ee.reference) == null ? void 0 : at.widget_value) || Ee.widget_value,
          widget_value: ((rt = Ee.reference) == null ? void 0 : rt.widget_value) || Ee.widget_value,
          // Backend returns download_source as URL string directly, and target_path at top level
          url: Ee.download_source || null,
          targetPath: Ee.target_path || null,
          canDownload: !!(Ee.download_source && Ee.target_path)
        };
      }), ie = (a.value.models.unresolved || []).map((Ee) => {
        var qe, Qe, at, rt;
        return {
          filename: ((Qe = (qe = Ee.reference) == null ? void 0 : qe.widget_value) == null ? void 0 : Qe.split("/").pop()) || ((at = Ee.reference) == null ? void 0 : at.widget_value) || Ee.widget_value,
          widget_value: ((rt = Ee.reference) == null ? void 0 : rt.widget_value) || Ee.widget_value,
          url: null,
          targetPath: null,
          canDownload: !1
        };
      }), ce = /* @__PURE__ */ new Map(), Ae = [];
      for (const Ee of I) {
        if (!Ee.url) {
          Ae.push(Ee);
          continue;
        }
        const qe = `${Ee.filename}::${Ee.url}`, Qe = ce.get(qe);
        if (!Qe) {
          ce.set(qe, Ee);
          continue;
        }
        !Qe.targetPath && Ee.targetPath && (Qe.targetPath = Ee.targetPath), !Qe.canDownload && Ee.canDownload && (Qe.canDownload = Ee.canDownload);
      }
      return [...ce.values(), ...Ae, ...ie];
    }), Ue = O(() => me.value.filter((I) => I.canDownload)), se = O(() => ee.value.length >= 5 ? ee.value.slice(0, 4) : ee.value), oe = O(() => me.value.length >= 5 ? me.value.slice(0, 4) : me.value), M = O(() => ee.value.length > 0 && ee.value.every(
      (I) => r.value.has(I.package_id) || u.value.has(I.package_id) || c.value.has(I.package_id)
    )), V = O(() => Ue.value.length > 0 && Ue.value.every((I) => d.value.has(I.url))), j = O(() => ee.value.length > 0 || de.value.length > 0 || Ue.value.length > 0), P = O(() => {
      const I = (ee.value.length === 0 || M.value) && (de.value.length === 0 || le.value), ie = Ue.value.length === 0 || V.value;
      return I && ie;
    }), R = O(() => w.value === "models" ? `Missing Models (${me.value.length})` : w.value === "packages" ? `Missing Custom Nodes (${re.value})` : w.value === "community" ? `Community-Mapped Packages (${Q.value.length})` : ""), ue = O(() => w.value === "models" ? me.value.map((I) => ({
      id: I.url || I.widget_value,
      name: I.filename,
      canAction: I.canDownload,
      actionDisabledReason: I.canDownload ? void 0 : "Manual download required"
    })) : w.value === "packages" ? ee.value.map((I) => ({
      id: I.package_id,
      name: I.title,
      subtitle: `(${I.node_count} ${I.node_count === 1 ? "node" : "nodes"})`,
      canAction: !0
    })) : w.value === "community" ? Q.value.map((I) => ({
      id: I.package_id || I.item_id,
      name: I.title,
      subtitle: `(${I.node_count} ${I.node_count === 1 ? "node" : "nodes"})`,
      canAction: !!I.package_id,
      actionDisabledReason: I.package_id ? void 0 : "Manual setup required",
      actions: I.package_id ? pe(I) : []
    })) : []);
    function Ve(I, ie) {
      if (w.value === "models") {
        const ce = me.value.find((Ae) => Ae.url === I.id || Ae.widget_value === I.id);
        ce && we(ce);
      } else if (w.value === "packages") {
        const ce = ee.value.find((Ae) => Ae.package_id === I.id);
        ce && F(ce);
      } else if (w.value === "community") {
        const ce = Q.value.find((ze) => (ze.package_id || ze.item_id) === I.id);
        if (!ce) return;
        if (!ce.package_id) {
          W({ item_id: ce.item_id, title: ce.title });
          return;
        }
        B(ce, ie === "install_git" ? "git" : "registry");
      }
    }
    function je() {
      w.value === "models" ? Pe() : w.value === "packages" ? be() : w.value === "community" && Ce();
    }
    async function F(I) {
      return q(I.package_id, I.latest_version, "registry");
    }
    async function B(I, ie) {
      return I.package_id ? q(I.package_id, I.latest_version, ie, I.repository) : (W({ item_id: I.item_id, title: I.title }), !1);
    }
    async function q(I, ie, ce, Ae) {
      const ze = E(I) || I, Ee = ie || "latest";
      if (r.value.has(ze) || u.value.has(ze) || c.value.has(ze))
        return !0;
      J(), f.value = ze;
      let qe = null;
      try {
        const Qe = {
          id: ze,
          version: Ee,
          selected_version: Ee,
          mode: "remote",
          channel: "default"
        };
        ce === "git" && Ae && (Qe.repository = Ae, Qe.install_source = "git");
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
        const at = T(Qe, "Failed to queue install request");
        return console.error("[ComfyGit] Failed to queue package install:", Qe), qe && k.value.delete(qe), N(ze), A(ze), u.value.delete(ze), c.value.set(ze, at), !1;
      } finally {
        f.value = null;
      }
    }
    function we(I) {
      !I.url || !I.targetPath || d.value.has(I.url) || (C([{
        workflow: "unsaved",
        filename: I.filename,
        url: I.url,
        targetPath: I.targetPath
      }]), d.value.add(I.url));
    }
    async function be() {
      const I = { attempted: 0, failed: 0 };
      for (const ie of ee.value)
        !r.value.has(ie.package_id) && !u.value.has(ie.package_id) && !c.value.has(ie.package_id) && (I.attempted++, await F(ie) || I.failed++);
      return I;
    }
    async function Ce() {
      const I = { attempted: 0, failed: 0 };
      for (const ie of de.value) {
        const ce = ie.package_id;
        !r.value.has(ce) && !u.value.has(ce) && !c.value.has(ce) && (I.attempted++, await B(ie, "registry") || I.failed++);
      }
      return I;
    }
    function Pe() {
      const I = Ue.value.filter(
        (ie) => !d.value.has(ie.url)
      );
      if (I.length === 0) return 0;
      C(I.map((ie) => ({
        workflow: "unsaved",
        filename: ie.filename,
        url: ie.url,
        targetPath: ie.targetPath
      })));
      for (const ie of I)
        d.value.add(ie.url);
      return I.length;
    }
    async function Le() {
      const I = await be(), ie = await Ce();
      Pe();
      const ce = I.attempted + ie.attempted, Ae = I.failed + ie.failed;
      if (ce > 0 && Ae > 0) {
        const ze = ce - Ae;
        o.value = `${ze} of ${ce} installs queued, ${Ae} failed`;
      }
    }
    function Oe() {
      v.value ? localStorage.setItem("comfygit:popup-disabled", "true") : localStorage.removeItem("comfygit:popup-disabled");
    }
    async function Te(I) {
      var ze, Ee;
      if (localStorage.getItem("comfygit:popup-disabled") === "true") {
        console.log("[ComfyGit] Popup globally disabled");
        return;
      }
      const ie = I == null ? void 0 : I.id;
      if (ie && y.value.has(ie)) {
        console.log(`[ComfyGit] Already shown popup for workflow ${ie} this session`);
        return;
      }
      const ce = window.app, Ae = (ze = ce == null ? void 0 : ce.extensionManager) == null ? void 0 : ze.workflow;
      if (Ae) {
        let at = !1;
        for (let rt = 0; rt < 20; rt++) {
          const mt = Ae.activeWorkflow;
          if (!mt) {
            await new Promise((ut) => setTimeout(ut, 50));
            continue;
          }
          const It = (Ee = mt.activeState) == null ? void 0 : Ee.id;
          if (!(ie && It === ie)) {
            rt < 19 && await new Promise((ut) => setTimeout(ut, 50));
            continue;
          }
          if (at = !0, mt.isPersisted === !0) {
            console.log(`[ComfyGit] Skipping popup for saved workflow: ${mt.filename}`), ie && y.value.add(ie);
            return;
          }
          break;
        }
        at || console.warn("[ComfyGit] Could not verify workflow state, showing popup as fallback");
      }
      s.value = !0, o.value = null, H(), r.value = /* @__PURE__ */ new Set(), u.value = /* @__PURE__ */ new Set(), c.value = /* @__PURE__ */ new Map(), d.value = /* @__PURE__ */ new Set(), k.value = /* @__PURE__ */ new Map(), v.value = !1, p.value = 0;
      try {
        const qe = await fetch("/v2/comfygit/workflow/analyze-json", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ workflow: I, name: "unsaved" })
        });
        if (!qe.ok) {
          const Qe = await qe.json();
          throw new Error(Qe.error || "Failed to analyze workflow");
        }
        a.value = await qe.json(), Z.value && (l.value = !0, ie && y.value.add(ie));
      } catch (qe) {
        console.error("[ComfyGit] Failed to analyze workflow:", qe);
      } finally {
        s.value = !1;
      }
    }
    function We() {
      H(), l.value = !1, a.value = null;
    }
    function Me(I) {
      const { workflow: ie } = I.detail;
      ie && Te(ie);
    }
    function _e(I) {
      var Ae;
      const ie = (Ae = I.detail) == null ? void 0 : Ae.ui_id;
      console.log("[ComfyGit] cm-task-started received:", {
        taskId: ie,
        pendingInstalls: Array.from(k.value.entries()),
        eventDetail: I.detail
      });
      const ce = k.value.get(ie);
      ce ? (A(ce), f.value = ce, console.log("[ComfyGit] Installing package:", ce)) : console.warn("[ComfyGit] cm-task-started: No matching package for taskId:", ie);
    }
    function te(I) {
      var ze, Ee, qe, Qe, at, rt, mt;
      const ie = (ze = I.detail) == null ? void 0 : ze.ui_id, ce = (qe = (Ee = I.detail) == null ? void 0 : Ee.status) == null ? void 0 : qe.status_str;
      console.log("[ComfyGit] cm-task-completed received:", {
        taskId: ie,
        status: ce,
        pendingInstalls: Array.from(k.value.entries()),
        eventDetail: I.detail
      });
      const Ae = k.value.get(ie);
      if (Ae) {
        if (A(Ae), k.value.delete(ie), u.value.delete(Ae), f.value === Ae && (f.value = null), ce === "success")
          r.value.add(Ae), p.value++, console.log("[ComfyGit] Package installed successfully:", Ae);
        else {
          const It = ((rt = (at = (Qe = I.detail) == null ? void 0 : Qe.status) == null ? void 0 : at.messages) == null ? void 0 : rt[0]) || ((mt = I.detail) == null ? void 0 : mt.result) || "Unknown error";
          c.value.set(Ae, It), console.error("[ComfyGit] Package install failed:", Ae, It);
        }
        k.value.size === 0 && p.value > 0 && (console.log("[ComfyGit] All installs complete, dispatching nodes-installed event:", p.value), window.dispatchEvent(new CustomEvent("comfygit:nodes-installed", {
          detail: { count: p.value }
        })));
      } else
        console.warn("[ComfyGit] cm-task-completed: No matching package for taskId:", ie);
    }
    let Be = null;
    function z() {
      var I;
      return Be || (Be = (I = window.app) == null ? void 0 : I.api), Be;
    }
    let X = !1;
    function J() {
      if (X) return !0;
      const I = z();
      return I ? (I.addEventListener("cm-task-started", _e), I.addEventListener("cm-task-completed", te), I.addEventListener("comfygit:workflow-changed", ge), X = !0, console.log("[ComfyGit] Registered WebSocket event listeners for install tracking"), !0) : (console.warn("[ComfyGit] Could not register WebSocket listeners - API not available"), !1);
    }
    function ge(I) {
      const { change_type: ie } = I.detail;
      (ie === "created" || ie === "modified") && l.value && (H(), l.value = !1, console.log("[ComfyGit] Workflow saved, auto-dismissing popup"));
    }
    return ot(() => {
      window.addEventListener("comfygit:workflow-loaded", Me);
    }), Ro(() => {
      if (H(), window.removeEventListener("comfygit:workflow-loaded", Me), X) {
        const I = z();
        I && (I.removeEventListener("cm-task-started", _e), I.removeEventListener("cm-task-completed", te), I.removeEventListener("comfygit:workflow-changed", ge)), X = !1;
      }
    }), (I, ie) => (n(), i(G, null, [
      l.value ? (n(), L(Ct, {
        key: 0,
        title: "Missing Dependencies",
        size: "md",
        loading: s.value,
        error: o.value || void 0,
        onClose: We
      }, {
        body: g(() => [
          s.value ? (n(), i("div", SM, [...ie[5] || (ie[5] = [
            t("div", { class: "loading-spinner" }, null, -1),
            t("span", null, "Analyzing workflow...", -1)
          ])])) : a.value && Z.value ? (n(), i("div", IM, [
            ee.value.length > 0 ? (n(), i("div", EM, [
              t("div", TM, [
                t("span", MM, "Missing Custom Nodes (" + m(re.value) + ")", 1),
                ee.value.length > 1 ? (n(), L(Re, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: M.value,
                  onClick: be
                }, {
                  default: g(() => [
                    $(m(M.value ? "All Queued" : "Install All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : h("", !0)
              ]),
              t("div", PM, [
                (n(!0), i(G, null, ke(se.value, (ce) => (n(), i("div", {
                  key: ce.package_id,
                  class: "package-item"
                }, [
                  t("div", RM, [
                    t("span", NM, m(ce.title), 1),
                    t("span", LM, "(" + m(ce.node_count) + " " + m(ce.node_count === 1 ? "node" : "nodes") + ")", 1)
                  ]),
                  !r.value.has(ce.package_id) && !u.value.has(ce.package_id) && !c.value.has(ce.package_id) ? (n(), L(Re, {
                    key: 0,
                    size: "sm",
                    variant: "secondary",
                    disabled: f.value === ce.package_id,
                    onClick: (Ae) => F(ce)
                  }, {
                    default: g(() => [
                      $(m(f.value === ce.package_id ? "Queueing..." : "Install"), 1)
                    ]),
                    _: 2
                  }, 1032, ["disabled", "onClick"])) : f.value === ce.package_id ? (n(), i("span", DM, "Installing...")) : u.value.has(ce.package_id) ? (n(), i("span", OM, "Queued")) : c.value.has(ce.package_id) ? (n(), i("span", {
                    key: 3,
                    class: "failed-badge",
                    title: c.value.get(ce.package_id)
                  }, "Failed ⚠", 8, UM)) : (n(), i("span", AM, "Installed"))
                ]))), 128)),
                ee.value.length >= 5 ? (n(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: ie[0] || (ie[0] = (ce) => w.value = "packages")
                }, [
                  t("span", null, "Show all " + m(ee.value.length) + " packages...", 1),
                  ie[6] || (ie[6] = t("span", { class: "show-all-arrow" }, "→", -1))
                ])) : h("", !0)
              ])
            ])) : h("", !0),
            he.value.length > 0 ? (n(), i("div", zM, [
              t("div", VM, [
                t("span", FM, "Unknown Nodes (" + m(he.value.length) + ")", 1)
              ]),
              t("div", BM, [
                (n(!0), i(G, null, ke(he.value.slice(0, 5), (ce) => (n(), i("div", {
                  key: ce.node_type,
                  class: "item"
                }, [
                  t("code", WM, m(ce.node_type), 1),
                  ie[7] || (ie[7] = t("span", { class: "not-found" }, "Not found in registry", -1))
                ]))), 128)),
                he.value.length > 5 ? (n(), i("div", GM, " ...and " + m(he.value.length - 5) + " more ", 1)) : h("", !0)
              ])
            ])) : h("", !0),
            ne.value.length > 0 ? (n(), i("div", jM, [
              t("div", HM, [
                t("span", qM, "Requires Newer ComfyUI (" + m(ne.value.length) + ")", 1)
              ]),
              t("div", KM, [
                (n(!0), i(G, null, ke(ne.value.slice(0, 5), (ce) => (n(), i("div", {
                  key: `vg-${ce.node_type}`,
                  class: "item"
                }, [
                  t("code", JM, m(ce.node_type), 1),
                  t("span", YM, m(ce.guidance || "Requires a newer ComfyUI version"), 1)
                ]))), 128)),
                ne.value.length > 5 ? (n(), i("div", QM, " ...and " + m(ne.value.length - 5) + " more ", 1)) : h("", !0)
              ])
            ])) : h("", !0),
            Q.value.length > 0 ? (n(), i("div", XM, [
              t("div", ZM, [
                t("span", eP, "Community-Mapped Packages (" + m(Q.value.length) + ")", 1),
                de.value.length > 1 ? (n(), L(Re, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: le.value,
                  onClick: Ce
                }, {
                  default: g(() => [
                    $(m(le.value ? "All Queued" : "Install All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : h("", !0)
              ]),
              t("div", tP, [
                (n(!0), i(G, null, ke(Ne.value, (ce) => (n(), i("div", {
                  key: `community-${ce.item_id}`,
                  class: "package-item"
                }, [
                  t("div", sP, [
                    t("div", oP, [
                      t("span", nP, m(ce.title), 1),
                      t("span", aP, "(" + m(ce.node_count) + " " + m(ce.node_count === 1 ? "node" : "nodes") + ")", 1)
                    ]),
                    t("div", lP, [
                      ie[8] || (ie[8] = $(" Found via community mapping — registry metadata may be incomplete", -1)),
                      ce.guidance ? (n(), i("span", iP, ". " + m(ce.guidance), 1)) : h("", !0)
                    ])
                  ]),
                  ce.package_id ? (n(), i(G, { key: 0 }, [
                    !r.value.has(ce.package_id) && !u.value.has(ce.package_id) && !c.value.has(ce.package_id) ? (n(), i("div", rP, [
                      _(Re, {
                        size: "sm",
                        variant: "secondary",
                        disabled: f.value === ce.package_id,
                        onClick: (Ae) => B(ce, "registry")
                      }, {
                        default: g(() => [
                          $(m(f.value === ce.package_id ? "Queueing..." : "Install"), 1)
                        ]),
                        _: 2
                      }, 1032, ["disabled", "onClick"]),
                      ce.repository ? (n(), L(Re, {
                        key: 0,
                        size: "sm",
                        variant: "ghost",
                        disabled: f.value === ce.package_id,
                        onClick: (Ae) => B(ce, "git")
                      }, {
                        default: g(() => [...ie[9] || (ie[9] = [
                          $(" Install via Git ", -1)
                        ])]),
                        _: 1
                      }, 8, ["disabled", "onClick"])) : h("", !0)
                    ])) : f.value === ce.package_id ? (n(), i("span", uP, "Installing...")) : u.value.has(ce.package_id) ? (n(), i("span", cP, "Queued")) : c.value.has(ce.package_id) ? (n(), i("span", {
                      key: 3,
                      class: "failed-badge",
                      title: c.value.get(ce.package_id)
                    }, "Failed ⚠", 8, dP)) : (n(), i("span", mP, "Installed"))
                  ], 64)) : (n(), i(G, { key: 1 }, [
                    c.value.has(ce.item_id) ? (n(), i("span", {
                      key: 0,
                      class: "failed-badge",
                      title: c.value.get(ce.item_id)
                    }, "Failed ⚠", 8, fP)) : (n(), i("span", vP, "Manual setup required"))
                  ], 64))
                ]))), 128)),
                Q.value.length >= 5 ? (n(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: ie[1] || (ie[1] = (ce) => w.value = "community")
                }, [
                  t("span", null, "Show all " + m(Q.value.length) + " packages...", 1),
                  ie[10] || (ie[10] = t("span", { class: "show-all-arrow" }, "→", -1))
                ])) : h("", !0)
              ])
            ])) : h("", !0),
            me.value.length > 0 ? (n(), i("div", pP, [
              t("div", gP, [
                t("span", hP, "Missing Models (" + m(me.value.length) + ")", 1),
                Ue.value.length > 1 ? (n(), L(Re, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: V.value,
                  onClick: Pe
                }, {
                  default: g(() => [
                    $(m(V.value ? "All Queued" : "Download All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : h("", !0)
              ]),
              t("div", yP, [
                (n(!0), i(G, null, ke(oe.value, (ce) => (n(), i("div", {
                  key: ce.widget_value,
                  class: "model-item"
                }, [
                  t("div", wP, [
                    t("span", _P, m(ce.filename), 1)
                  ]),
                  ce.canDownload ? (n(), i(G, { key: 0 }, [
                    d.value.has(ce.url) ? (n(), i("span", kP, "Queued")) : (n(), L(Re, {
                      key: 0,
                      size: "sm",
                      variant: "secondary",
                      onClick: (Ae) => we(ce)
                    }, {
                      default: g(() => [...ie[11] || (ie[11] = [
                        $(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]))
                  ], 64)) : (n(), i("span", bP, "Manual download required"))
                ]))), 128)),
                me.value.length >= 5 ? (n(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: ie[2] || (ie[2] = (ce) => w.value = "models")
                }, [
                  t("span", null, "Show all " + m(me.value.length) + " models...", 1),
                  ie[12] || (ie[12] = t("span", { class: "show-all-arrow" }, "→", -1))
                ])) : h("", !0)
              ])
            ])) : h("", !0),
            t("div", $P, [
              _(Qn, {
                modelValue: v.value,
                "onUpdate:modelValue": [
                  ie[3] || (ie[3] = (ce) => v.value = ce),
                  Oe
                ]
              }, {
                default: g(() => [...ie[13] || (ie[13] = [
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
            onClick: We
          }, {
            default: g(() => [...ie[14] || (ie[14] = [
              $("Dismiss", -1)
            ])]),
            _: 1
          }),
          j.value ? (n(), L(Re, {
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
      w.value ? (n(), L(xM, {
        key: 1,
        title: R.value,
        items: ue.value,
        "item-type": w.value,
        "queued-items": w.value === "models" ? d.value : u.value,
        "installed-items": w.value === "models" ? void 0 : r.value,
        "failed-items": w.value === "models" ? void 0 : c.value,
        "installing-item": w.value === "models" ? void 0 : f.value,
        onClose: ie[4] || (ie[4] = (ce) => w.value = null),
        onAction: Ve,
        onBulkAction: je
      }, null, 8, ["title", "items", "item-type", "queued-items", "installed-items", "failed-items", "installing-item"])) : h("", !0)
    ], 64));
  }
}), SP = /* @__PURE__ */ Ie(xP, [["__scopeId", "data-v-dfb55c3f"]]), IP = {
  key: 0,
  class: "io-mapping-root"
}, EP = { class: "io-mapping-visual-layer" }, TP = { class: "io-mapping-header" }, MP = { class: "io-mapping-header-main" }, PP = { class: "io-mapping-subtitle" }, RP = {
  key: 0,
  class: "io-mapping-hover-summary"
}, NP = { class: "io-mapping-header-actions" }, LP = { class: "io-mapping-sidebar" }, DP = { class: "io-mapping-sidebar-scroll" }, OP = {
  key: 0,
  class: "io-state-block"
}, UP = {
  key: 1,
  class: "io-state-block io-state-error"
}, AP = { class: "contract-summary" }, zP = { class: "summary-pill" }, VP = { class: "summary-pill" }, FP = { class: "summary-pill" }, BP = { class: "mapping-section" }, WP = { class: "section-header" }, GP = {
  key: 0,
  class: "empty-message"
}, jP = ["onClick"], HP = { class: "item-card-title" }, qP = { class: "item-card-meta" }, KP = { class: "item-card-summary" }, JP = { key: 0 }, YP = { class: "mapping-section" }, QP = { class: "section-header" }, XP = {
  key: 0,
  class: "empty-message"
}, ZP = ["onClick"], eR = { class: "item-card-title" }, tR = { class: "item-card-meta" }, sR = { class: "item-card-summary" }, oR = { class: "io-mapping-footer" }, nR = /* @__PURE__ */ Se({
  __name: "WorkflowIOMappingOverlay",
  props: {
    comfyApp: {}
  },
  setup(e) {
    const s = e, { getWorkflowContract: o, saveWorkflowContract: a } = dt(), l = b(!1), r = b(""), u = b(!1), c = b(!1), d = b(null), v = b(null), f = b(null), p = b(null), w = b(null), y = b(0), k = b(null), x = b(null);
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
    ], E = O(() => {
      if (!f.value)
        return { inputs: [], outputs: [] };
      const z = f.value.default_contract || "default";
      return f.value.contracts[z] || (f.value.contracts[z] = { inputs: [], outputs: [] }), f.value.contracts[z];
    }), T = O(() => {
      var X;
      const z = ((X = v.value) == null ? void 0 : X.contract_summary.status) ?? "none";
      return z === "valid" ? "Valid Contract" : z === "incomplete" ? "Incomplete Contract" : "No Contract";
    });
    function N(z) {
      return z ? JSON.parse(JSON.stringify(z)) : {
        version: 1,
        default_contract: "default",
        contracts: {
          default: { inputs: [], outputs: [] }
        }
      };
    }
    function A(z) {
      return z === "integer" || z === "number";
    }
    function H(z) {
      return z === "enum";
    }
    function D(z) {
      return z == null ? "" : String(z);
    }
    function W(z) {
      const X = z.trim();
      if (!X) return;
      const J = Number(X);
      return Number.isFinite(J) ? J : void 0;
    }
    function Z(z) {
      return (z || []).join(`
`);
    }
    function ee(z) {
      return z.split(/[\n,]/).map((X) => X.trim()).filter(Boolean);
    }
    function re(z) {
      return typeof z == "string" ? z.length > 24 ? `${z.slice(0, 24)}...` : z : String(z);
    }
    function he(z) {
      return z == null ? "" : String(z);
    }
    function ne(z) {
      var J;
      const X = (J = z == null ? void 0 : z.options) == null ? void 0 : J.values;
      return Array.isArray(X) ? X.map((ge) => String(ge)).filter(Boolean) : [];
    }
    function Q(z, X) {
      var I;
      const J = (I = z == null ? void 0 : z.options) == null ? void 0 : I[X];
      if (J == null || J === "") return;
      const ge = Number(J);
      return Number.isFinite(ge) ? ge : void 0;
    }
    function de(z, X) {
      return z.trim().toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "") || X;
    }
    function Ne(z) {
      const X = String(z ?? "").toLowerCase();
      return X.includes("image") ? "image" : X.includes("video") ? "video" : X.includes("audio") ? "audio" : X.includes("int") ? "integer" : X.includes("float") || X.includes("double") || X.includes("number") ? "number" : X.includes("bool") ? "boolean" : X.includes("combo") || X.includes("enum") ? "enum" : X.includes("string") || X.includes("text") ? "string" : "file";
    }
    function le(z) {
      E.value.inputs.splice(z, 1), p.value === z && (p.value = null);
    }
    function pe(z) {
      E.value.outputs.splice(z, 1), w.value === z && (w.value = null);
    }
    function me(z) {
      p.value = p.value === z ? null : z, p.value != null && (w.value = null);
    }
    function Ue(z) {
      w.value = w.value === z ? null : z, w.value != null && (p.value = null);
    }
    function se(z) {
      const X = typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(String(z)) : String(z);
      return document.querySelector(`[data-node-id="${X}"]`);
    }
    function oe(z) {
      return z instanceof Element ? !!z.closest(".io-mapping-header, .io-mapping-sidebar") : !1;
    }
    function M(z) {
      var ge, I, ie, ce, Ae, ze;
      if (!(z instanceof Element)) return null;
      const X = z.closest("[data-node-id]"), J = X == null ? void 0 : X.getAttribute("data-node-id");
      return J ? ((ie = (I = (ge = s.comfyApp) == null ? void 0 : ge.graph) == null ? void 0 : I.getNodeById) == null ? void 0 : ie.call(I, J)) ?? ((ze = (Ae = (ce = s.comfyApp) == null ? void 0 : ce.rootGraph) == null ? void 0 : Ae.getNodeById) == null ? void 0 : ze.call(Ae, J)) ?? null : null;
    }
    function V(z, X) {
      if (X == null || X < 0) return null;
      const J = se(z);
      return J ? J.querySelectorAll('[data-testid="node-widget"]')[X] ?? null : null;
    }
    function j(z) {
      return !z || z.width <= 0 || z.height <= 0 ? null : {
        left: `${z.left}px`,
        top: `${z.top}px`,
        width: `${z.width}px`,
        height: `${z.height}px`
      };
    }
    function P(z) {
      const X = se((z == null ? void 0 : z.id) ?? "");
      if (X) return X.getBoundingClientRect();
      const J = s.comfyApp;
      if (!z || typeof (J == null ? void 0 : J.canvasPosToClientPos) != "function") return null;
      const I = J.canvasPosToClientPos([z.pos[0], z.pos[1] - 32]), ie = J.canvasPosToClientPos([z.pos[0] + z.size[0], z.pos[1] + z.size[1]]);
      return !I || !ie ? null : new DOMRect(I[0], I[1], ie[0] - I[0], ie[1] - I[1]);
    }
    function R(z) {
      var Ae, ze, Ee, qe, Qe, at, rt;
      const X = V(z.node_id, z.widget_idx);
      if (X) return X.getBoundingClientRect();
      const J = ((Ee = (ze = (Ae = s.comfyApp) == null ? void 0 : Ae.graph) == null ? void 0 : ze.getNodeById) == null ? void 0 : Ee.call(ze, String(z.node_id))) ?? ((at = (Qe = (qe = s.comfyApp) == null ? void 0 : qe.rootGraph) == null ? void 0 : Qe.getNodeById) == null ? void 0 : at.call(Qe, String(z.node_id)));
      if (!J || typeof z.widget_idx != "number" || !Array.isArray(J.widgets)) return null;
      const ge = J.widgets[z.widget_idx];
      if (!ge || typeof ((rt = s.comfyApp) == null ? void 0 : rt.canvasPosToClientPos) != "function") return P(J);
      const I = 10, ie = s.comfyApp.canvasPosToClientPos([J.pos[0] + I, J.pos[1] + (ge.y ?? 0)]), ce = s.comfyApp.canvasPosToClientPos([J.pos[0] + J.size[0] - I, J.pos[1] + (ge.y ?? 0) + (ge.computedHeight ?? 24)]);
      return !ie || !ce ? P(J) : new DOMRect(ie[0], ie[1], ce[0] - ie[0], ce[1] - ie[1]);
    }
    function ue(z) {
      var J, ge, I, ie, ce, Ae;
      const X = ((I = (ge = (J = s.comfyApp) == null ? void 0 : J.graph) == null ? void 0 : ge.getNodeById) == null ? void 0 : I.call(ge, String(z.node_id))) ?? ((Ae = (ce = (ie = s.comfyApp) == null ? void 0 : ie.rootGraph) == null ? void 0 : ce.getNodeById) == null ? void 0 : Ae.call(ce, String(z.node_id)));
      return P(X);
    }
    const Ve = O(() => (y.value, E.value.inputs.map((z, X) => {
      const J = j(R(z));
      return J ? {
        key: `input-${X}-${z.node_id}-${z.widget_idx ?? "na"}`,
        style: J,
        active: p.value === X
      } : null;
    }).filter((z) => !!z))), je = O(() => (y.value, E.value.outputs.map((z, X) => {
      const J = j(ue(z));
      return J ? {
        key: `output-${X}-${z.node_id}-${z.selector ?? "primary"}`,
        style: J,
        active: w.value === X
      } : null;
    }).filter((z) => !!z)));
    function F(z) {
      var Ee, qe, Qe, at, rt, mt, It, Wt, ut, ve;
      if (oe(z.target)) return null;
      const X = (Ee = s.comfyApp) == null ? void 0 : Ee.canvas;
      if (!X) return null;
      const J = (qe = X.convertEventToCanvasOffset) == null ? void 0 : qe.call(X, z);
      if (!J || J.length < 2) return null;
      const [ge, I] = J, ie = X.graph || ((Qe = s.comfyApp) == null ? void 0 : Qe.graph) || ((at = s.comfyApp) == null ? void 0 : at.rootGraph), ce = ((rt = ie == null ? void 0 : ie.getNodeOnPos) == null ? void 0 : rt.call(ie, ge, I, X.visible_nodes)) || ((mt = X.getNodeOnPos) == null ? void 0 : mt.call(X, ge, I)) || M(z.target);
      if (!ce) return null;
      const Ae = (It = ce.getWidgetOnPos) == null ? void 0 : It.call(ce, ge, I, !0);
      if (Ae)
        return { kind: "input", node: ce, widget: Ae, canvasX: ge, canvasY: I };
      const ze = ((Wt = ce.getOutputOnPos) == null ? void 0 : Wt.call(ce, [ge, I])) || ((ve = (ut = ce.constructor) == null ? void 0 : ut.nodeData) != null && ve.output_node ? { name: ce.title || ce.type || "output", type: "image" } : null);
      return ze ? { kind: "output", node: ce, output: ze, canvasX: ge, canvasY: I } : null;
    }
    function B(z, X) {
      var Ae;
      const J = Array.isArray(z.widgets) ? z.widgets.indexOf(X) : -1, ge = E.value.inputs.findIndex(
        (ze) => String(ze.node_id) === String(z.id) && ze.widget_idx === J
      );
      if (ge >= 0) {
        p.value = ge;
        return;
      }
      const I = typeof ((Ae = X == null ? void 0 : X.options) == null ? void 0 : Ae.property) == "string" ? X.options.property : void 0, ie = (X == null ? void 0 : X.name) || I || "input", ce = {
        name: de(String(ie), `input_${E.value.inputs.length + 1}`),
        display_name: String((X == null ? void 0 : X.name) || I || `Input ${E.value.inputs.length + 1}`),
        type: Ne(X == null ? void 0 : X.type),
        node_id: String(z.id),
        widget_idx: J >= 0 ? J : void 0,
        field_key: I,
        required: !0,
        default: (X == null ? void 0 : X.value) ?? ""
      };
      A(ce.type) && (ce.min = Q(X, "min"), ce.max = Q(X, "max")), H(ce.type) && (ce.enum_values = ne(X)), E.value.inputs.push(ce), p.value = E.value.inputs.length - 1, w.value = null;
    }
    function q(z, X) {
      const J = Array.isArray(z.outputs) ? z.outputs.indexOf(X) : -1, ge = J >= 0 ? `slot:${J}` : "primary", I = E.value.outputs.findIndex(
        (ce) => String(ce.node_id) === String(z.id) && (ce.selector || "primary") === ge
      );
      if (I >= 0) {
        w.value = I;
        return;
      }
      const ie = {
        name: de(String((X == null ? void 0 : X.name) || "output"), `output_${E.value.outputs.length + 1}`),
        display_name: String((X == null ? void 0 : X.name) || `Output ${E.value.outputs.length + 1}`),
        type: Ne(X == null ? void 0 : X.type),
        node_id: String(z.id),
        selector: ge
      };
      E.value.outputs.push(ie), w.value = E.value.outputs.length - 1, p.value = null;
    }
    function we(z) {
      var ge, I, ie;
      if (!l.value) {
        k.value = null, x.value = null;
        return;
      }
      const X = F(z);
      if (!X) {
        k.value = null, x.value = null;
        return;
      }
      if (X.kind === "input") {
        const ce = Array.isArray(X.node.widgets) ? X.node.widgets.indexOf(X.widget) : -1, Ae = j(((ge = V(X.node.id, ce)) == null ? void 0 : ge.getBoundingClientRect()) ?? R({
          node_id: String(X.node.id),
          widget_idx: ce >= 0 ? ce : void 0
        }));
        if (!Ae) {
          k.value = null, x.value = null;
          return;
        }
        k.value = {
          kind: "input",
          label: `${((I = X.widget) == null ? void 0 : I.name) || "widget"} · Node ${X.node.id}`
        }, x.value = { kind: "input", style: Ae };
        return;
      }
      const J = j(P(X.node));
      if (!J) {
        k.value = null, x.value = null;
        return;
      }
      k.value = {
        kind: "output",
        label: `${((ie = X.output) == null ? void 0 : ie.name) || X.node.title || X.node.type || "output"} · Node ${X.node.id}`
      }, x.value = { kind: "output", style: J };
    }
    function be(z) {
      var ge, I, ie;
      if (!l.value || !f.value || z.button !== 0) return;
      const X = F(z);
      if (!X) return;
      const J = (ge = s.comfyApp) == null ? void 0 : ge.canvas;
      if (J) {
        if (X.kind === "input") {
          z.preventDefault(), z.stopImmediatePropagation(), z.stopPropagation(), Array.isArray(J.graph_mouse) && (J.graph_mouse[0] = X.canvasX, J.graph_mouse[1] = X.canvasY), (I = J.selectNode) == null || I.call(J, X.node, !1), B(X.node, X.widget);
          return;
        }
        z.preventDefault(), z.stopImmediatePropagation(), z.stopPropagation(), Array.isArray(J.graph_mouse) && (J.graph_mouse[0] = X.canvasX, J.graph_mouse[1] = X.canvasY), (ie = J.selectNode) == null || ie.call(J, X.node, !1), q(X.node, X.output);
      }
    }
    function Ce() {
      document.addEventListener("pointerdown", be, !0), document.addEventListener("pointermove", we, !0);
    }
    function Pe() {
      document.removeEventListener("pointerdown", be, !0), document.removeEventListener("pointermove", we, !0);
    }
    async function Le() {
      if (r.value) {
        u.value = !0, d.value = null;
        try {
          v.value = await o(r.value), f.value = N(v.value.execution_contract);
        } catch (z) {
          d.value = z instanceof Error ? z.message : "Failed to load workflow contract";
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
          })), We({ reopenPanel: !0 });
        } catch (z) {
          d.value = z instanceof Error ? z.message : "Failed to save workflow contract";
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
    function We(z) {
      l.value = !1, k.value = null, x.value = null, z != null && z.reopenPanel && Te();
    }
    async function Me(z) {
      var ge, I;
      const J = (I = (ge = z.detail) == null ? void 0 : ge.workflowName) == null ? void 0 : I.trim();
      J && (r.value = J, p.value = null, w.value = null, l.value = !0, await Le());
    }
    function _e(z) {
      z.key === "Escape" && l.value && We({ reopenPanel: !0 });
    }
    function te() {
      if (C != null) return;
      const z = () => {
        if (y.value += 1, !l.value) {
          C = null;
          return;
        }
        C = window.requestAnimationFrame(z);
      };
      C = window.requestAnimationFrame(z);
    }
    function Be() {
      C != null && (window.cancelAnimationFrame(C), C = null);
    }
    return kt(l, (z) => {
      z ? (Ce(), te()) : (Pe(), Be());
    }), ot(() => {
      window.addEventListener("comfygit:open-io-mapping", Me), window.addEventListener("keydown", _e);
    }), ia(() => {
      Pe(), Be(), window.removeEventListener("comfygit:open-io-mapping", Me), window.removeEventListener("keydown", _e);
    }), (z, X) => l.value ? (n(), i("div", IP, [
      t("div", EP, [
        (n(!0), i(G, null, ke(Ve.value, (J) => (n(), i("div", {
          key: J.key,
          class: De(["io-highlight", "io-highlight-input", { active: J.active }]),
          style: Ft(J.style)
        }, null, 6))), 128)),
        (n(!0), i(G, null, ke(je.value, (J) => (n(), i("div", {
          key: J.key,
          class: De(["io-highlight", "io-highlight-output", { active: J.active }]),
          style: Ft(J.style)
        }, null, 6))), 128)),
        x.value ? (n(), i("div", {
          key: 0,
          class: De(["io-highlight", x.value.kind === "input" ? "io-highlight-hover-input" : "io-highlight-hover-output"]),
          style: Ft(x.value.style)
        }, null, 6)) : h("", !0)
      ]),
      t("div", TP, [
        t("div", MP, [
          X[4] || (X[4] = t("div", { class: "io-mapping-title" }, "I/O MAPPING MODE", -1)),
          t("div", PP, m(r.value) + " · Hover any input widget or output target on the graph, then click to add it to the contract. ", 1),
          k.value ? (n(), i("div", RP, " Hovering " + m(k.value.kind) + ": " + m(k.value.label), 1)) : h("", !0)
        ]),
        t("div", NP, [
          _(Re, {
            size: "sm",
            variant: "secondary",
            onClick: X[0] || (X[0] = (J) => We({ reopenPanel: !0 }))
          }, {
            default: g(() => [...X[5] || (X[5] = [
              $(" Exit ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      t("aside", LP, [
        t("div", DP, [
          u.value ? (n(), i("div", OP, " Loading workflow contract... ")) : d.value ? (n(), i("div", UP, m(d.value), 1)) : f.value ? (n(), i(G, { key: 2 }, [
            t("section", AP, [
              t("span", zP, m(T.value), 1),
              t("span", VP, m(E.value.inputs.length) + " input" + m(E.value.inputs.length === 1 ? "" : "s"), 1),
              t("span", FP, m(E.value.outputs.length) + " output" + m(E.value.outputs.length === 1 ? "" : "s"), 1)
            ]),
            t("section", BP, [
              t("div", WP, [
                _(Os, { variant: "section" }, {
                  default: g(() => [...X[6] || (X[6] = [
                    $("INPUTS", -1)
                  ])]),
                  _: 1
                })
              ]),
              E.value.inputs.length ? h("", !0) : (n(), i("div", GP, " No inputs configured. ")),
              (n(!0), i(G, null, ke(E.value.inputs, (J, ge) => (n(), i("div", {
                key: `input-${ge}`,
                class: De(["item-card", { selected: p.value === ge }])
              }, [
                t("div", {
                  class: "item-card-header item-card-header-toggle",
                  onClick: (I) => me(ge)
                }, [
                  t("div", null, [
                    t("div", HP, m(J.name || `Input ${ge + 1}`), 1),
                    t("div", qP, [
                      $(" Node " + m(J.node_id || "?"), 1),
                      J.widget_idx !== void 0 ? (n(), i(G, { key: 0 }, [
                        $(" · Widget " + m(J.widget_idx), 1)
                      ], 64)) : h("", !0)
                    ]),
                    t("div", KP, [
                      t("span", null, m(J.type || "string"), 1),
                      t("span", null, m(J.required ? "required" : "optional"), 1),
                      J.default !== void 0 && J.default !== "" ? (n(), i("span", JP, "default " + m(re(J.default)), 1)) : h("", !0)
                    ])
                  ]),
                  _(Re, {
                    size: "sm",
                    variant: "ghost",
                    onClick: st((I) => le(ge), ["stop"])
                  }, {
                    default: g(() => [...X[7] || (X[7] = [
                      $(" Remove ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ], 8, jP),
                p.value === ge ? (n(), i("div", {
                  key: 0,
                  class: "item-grid",
                  onClick: X[1] || (X[1] = st(() => {
                  }, ["stop"]))
                }, [
                  _(pt, { label: "Name" }, {
                    default: g(() => [
                      _(it, {
                        modelValue: J.name,
                        "onUpdate:modelValue": (I) => J.name = I,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  _(pt, { label: "Display Name" }, {
                    default: g(() => [
                      _(it, {
                        modelValue: J.display_name,
                        "onUpdate:modelValue": (I) => J.display_name = I,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  _(pt, { label: "Type" }, {
                    default: g(() => [
                      _(Ks, {
                        "model-value": J.type,
                        options: S,
                        "full-width": "",
                        "onUpdate:modelValue": (I) => J.type = I
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  _(pt, { label: "Required" }, {
                    default: g(() => [
                      _(Ks, {
                        "model-value": J.required ? "true" : "false",
                        options: U,
                        "full-width": "",
                        "onUpdate:modelValue": (I) => J.required = I === "true"
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  _(pt, {
                    class: De({ "item-grid-full": J.type === "string" || J.type === "enum" }),
                    label: "Default"
                  }, {
                    default: g(() => [
                      J.type === "string" ? (n(), L(Js, {
                        key: 0,
                        "model-value": he(J.default),
                        rows: 3,
                        placeholder: "Default string value",
                        "onUpdate:modelValue": (I) => J.default = I
                      }, null, 8, ["model-value", "onUpdate:modelValue"])) : (n(), L(it, {
                        key: 1,
                        modelValue: J.default,
                        "onUpdate:modelValue": (I) => J.default = I,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]))
                    ]),
                    _: 2
                  }, 1032, ["class"]),
                  A(J.type) ? (n(), L(pt, {
                    key: 0,
                    label: "Min"
                  }, {
                    default: g(() => [
                      _(it, {
                        "model-value": D(J.min),
                        "full-width": "",
                        "onUpdate:modelValue": (I) => J.min = W(I)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : h("", !0),
                  A(J.type) ? (n(), L(pt, {
                    key: 1,
                    label: "Max"
                  }, {
                    default: g(() => [
                      _(it, {
                        "model-value": D(J.max),
                        "full-width": "",
                        "onUpdate:modelValue": (I) => J.max = W(I)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : h("", !0),
                  H(J.type) ? (n(), L(pt, {
                    key: 2,
                    class: "item-grid-full",
                    label: "Enum Values"
                  }, {
                    default: g(() => [
                      _(Js, {
                        "model-value": Z(J.enum_values),
                        rows: 4,
                        placeholder: "One or more values, separated by commas or new lines",
                        "onUpdate:modelValue": (I) => J.enum_values = ee(I)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : h("", !0)
                ])) : h("", !0)
              ], 2))), 128))
            ]),
            t("section", YP, [
              t("div", QP, [
                _(Os, { variant: "section" }, {
                  default: g(() => [...X[8] || (X[8] = [
                    $("OUTPUTS", -1)
                  ])]),
                  _: 1
                })
              ]),
              E.value.outputs.length ? h("", !0) : (n(), i("div", XP, " No outputs configured. ")),
              (n(!0), i(G, null, ke(E.value.outputs, (J, ge) => (n(), i("div", {
                key: `output-${ge}`,
                class: De(["item-card", { selected: w.value === ge }])
              }, [
                t("div", {
                  class: "item-card-header item-card-header-toggle",
                  onClick: (I) => Ue(ge)
                }, [
                  t("div", null, [
                    t("div", eR, m(J.name || `Output ${ge + 1}`), 1),
                    t("div", tR, [
                      $(" Node " + m(J.node_id || "?"), 1),
                      J.selector ? (n(), i(G, { key: 0 }, [
                        $(" · " + m(J.selector), 1)
                      ], 64)) : h("", !0)
                    ]),
                    t("div", sR, [
                      t("span", null, m(J.type || "file"), 1)
                    ])
                  ]),
                  _(Re, {
                    size: "sm",
                    variant: "ghost",
                    onClick: st((I) => pe(ge), ["stop"])
                  }, {
                    default: g(() => [...X[9] || (X[9] = [
                      $(" Remove ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ], 8, ZP),
                w.value === ge ? (n(), i("div", {
                  key: 0,
                  class: "item-grid",
                  onClick: X[2] || (X[2] = st(() => {
                  }, ["stop"]))
                }, [
                  _(pt, { label: "Name" }, {
                    default: g(() => [
                      _(it, {
                        modelValue: J.name,
                        "onUpdate:modelValue": (I) => J.name = I,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  _(pt, { label: "Display Name" }, {
                    default: g(() => [
                      _(it, {
                        modelValue: J.display_name,
                        "onUpdate:modelValue": (I) => J.display_name = I,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  _(pt, { label: "Type" }, {
                    default: g(() => [
                      _(Ks, {
                        "model-value": J.type,
                        options: S,
                        "full-width": "",
                        "onUpdate:modelValue": (I) => J.type = I
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)
                ])) : h("", !0)
              ], 2))), 128))
            ])
          ], 64)) : h("", !0)
        ]),
        t("div", oR, [
          _(Re, {
            variant: "secondary",
            onClick: X[3] || (X[3] = (J) => We({ reopenPanel: !0 }))
          }, {
            default: g(() => [...X[10] || (X[10] = [
              $(" Cancel ", -1)
            ])]),
            _: 1
          }),
          _(Re, {
            variant: "primary",
            loading: c.value,
            onClick: Oe
          }, {
            default: g(() => [...X[11] || (X[11] = [
              $(" Save Contract ", -1)
            ])]),
            _: 1
          }, 8, ["loading"])
        ])
      ])
    ])) : h("", !0);
  }
}), aR = /* @__PURE__ */ Ie(nR, [["__scopeId", "data-v-f48c60c3"]]), lR = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:transparent}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}[data-comfygit-theme=comfy] .base-tabs{border-bottom-color:var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .base-tabs__tab{border-radius:var(--cg-radius-sm) var(--cg-radius-sm) 0 0}[data-comfygit-theme=comfy] .base-tabs__tab:hover:not(.disabled){background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .base-tabs__tab.active{background:var(--cg-color-accent-muted)}', iR = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .base-tabs{border-bottom-color:var(--cg-color-border)}[data-comfygit-theme=phosphor] .base-tabs__tab{text-shadow:none}[data-comfygit-theme=phosphor] .base-tabs__tab:before{content:""}[data-comfygit-theme=phosphor] .base-tabs__tab.active:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .base-tabs__tab.active{text-shadow:0 0 8px var(--cg-color-accent);border-bottom-color:var(--cg-color-accent);box-shadow:0 2px 8px var(--cg-shadow-accent)}[data-comfygit-theme=phosphor] .base-tabs__tab:hover:not(.disabled):not(.active){color:var(--cg-color-accent);text-shadow:0 0 4px var(--cg-color-accent)}', rR = {
  comfy: lR,
  phosphor: iR
}, Ll = "comfy", Eu = "comfygit-theme";
let no = null, Tu = Ll;
function uR() {
  try {
    const e = localStorage.getItem(Eu);
    if (e && (e === "comfy" || e === "phosphor"))
      return e;
  } catch {
  }
  return Ll;
}
function Mu(e = Ll) {
  no && no.remove(), no = document.createElement("style"), no.id = "comfygit-theme-styles", no.setAttribute("data-theme", e), no.textContent = rR[e], document.head.appendChild(no), document.body.setAttribute("data-comfygit-theme", e), Tu = e;
  try {
    localStorage.setItem(Eu, e);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${e}`);
}
function cR() {
  return Tu;
}
function dR(e) {
  Mu(e);
}
function mR(e) {
  var r;
  const { ui_id: s, state: o } = e || {}, a = (o == null ? void 0 : o.history) || {};
  if (!s)
    return null;
  const l = a[s];
  return l && l.result === "error" && ((r = l.status) == null ? void 0 : r.status_str) === "error" ? (l.status.messages || [])[0] || "Unknown error" : null;
}
const Dl = document.createElement("link");
Dl.rel = "stylesheet";
Dl.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(Dl);
const fR = uR();
Mu(fR);
sessionStorage.removeItem("ComfyGit.LastView");
sessionStorage.removeItem("ComfyGit.LastSection");
window.ComfyGit = {
  setTheme: (e) => {
    console.log(`[ComfyGit] Switching to theme: ${e}`), dR(e);
  },
  getTheme: () => {
    const e = cR();
    return console.log(`[ComfyGit] Current theme: ${e}`), e;
  }
};
let Rs = null, en = null, Xt = null, tn = null, Fo = null, Pi = null, Bo = null, Ri = null, Wo = null, Ni = null;
const Io = b(null);
let dn = "no_workspace", Pu = !1;
async function An() {
  var e;
  if (!((e = Zt) != null && e.api)) return null;
  try {
    const s = await Zt.api.fetchApi("/v2/comfygit/status");
    s.ok && (Io.value = await s.json());
  } catch {
  }
}
async function il() {
  var e;
  if ((e = Zt) != null && e.api)
    try {
      const s = await Zt.api.fetchApi("/v2/setup/status");
      if (s.ok) {
        const o = await s.json();
        dn = o.state, Pu = o.has_comfyui_manager ?? !1;
      }
    } catch {
    }
}
function rl() {
  var s;
  if (dn === "managed" || !Pu) return;
  const e = document.querySelectorAll("button.comfyui-button");
  for (const o of e)
    if (((s = o.textContent) == null ? void 0 : s.trim()) === "Manager" && !o.querySelector("svg, i, img")) {
      o.style.display = "none", console.log("[ComfyGit] Hiding built-in Manager button (ComfyUI-Manager present)");
      return;
    }
}
function vR() {
  if (!Io.value) return !1;
  const e = Io.value.workflows;
  return e.new.length > 0 || e.modified.length > 0 || e.deleted.length > 0 || Io.value.has_changes;
}
function Mn(e) {
  Ho(), Rs = document.createElement("div"), Rs.className = "comfygit-panel-overlay";
  const s = document.createElement("div");
  s.className = "comfygit-panel-container", Rs.appendChild(s), Rs.addEventListener("click", (a) => {
    a.target === Rs && Ho();
  });
  const o = (a) => {
    a.key === "Escape" && (Ho(), document.removeEventListener("keydown", o));
  };
  document.addEventListener("keydown", o), en = pn({
    render: () => No(h7, {
      initialView: e,
      onClose: Ho,
      onStatusUpdate: async (a) => {
        Io.value = a, sn(), await il(), ul(), rl();
      }
    })
  }), en.mount(s), document.body.appendChild(Rs);
}
function Ho() {
  en && (en.unmount(), en = null), Rs && (Rs.remove(), Rs = null);
}
function Li(e) {
  Go(), Xt = document.createElement("div"), Xt.className = "comfygit-commit-popover-container";
  const s = e.getBoundingClientRect();
  Xt.style.position = "fixed", Xt.style.top = `${s.bottom + 8}px`, Xt.style.right = `${window.innerWidth - s.right}px`, Xt.style.zIndex = "10001";
  const o = (l) => {
    Xt && !Xt.contains(l.target) && l.target !== e && (Go(), document.removeEventListener("mousedown", o));
  };
  setTimeout(() => document.addEventListener("mousedown", o), 0);
  const a = (l) => {
    l.key === "Escape" && (Go(), document.removeEventListener("keydown", a));
  };
  document.addEventListener("keydown", a), tn = pn({
    render: () => No(Cu, {
      status: Io.value,
      onClose: Go,
      onCommitted: (l) => {
        Go(), pR(l.success, l.message), An().then(sn);
      }
    })
  }), tn.mount(Xt), document.body.appendChild(Xt);
}
function Go() {
  tn && (tn.unmount(), tn = null), Xt && (Xt.remove(), Xt = null);
}
function pR(e, s) {
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
function gR() {
  Fo || (Fo = document.createElement("div"), Fo.className = "comfygit-download-queue-root", Pi = pn({
    render: () => No(dM)
  }), Pi.mount(Fo), document.body.appendChild(Fo), console.log("[ComfyGit] Model download queue mounted"));
}
function hR() {
  Bo || (Bo = document.createElement("div"), Bo.className = "comfygit-missing-resources-root", Ri = pn({
    render: () => No(SP)
  }), Ri.mount(Bo), document.body.appendChild(Bo), console.log("[ComfyGit] Missing resources popup mounted"));
}
function yR() {
  Wo || (Wo = document.createElement("div"), Wo.className = "comfygit-io-mapping-root", Ni = pn({
    render: () => No(aR, {
      comfyApp: Zt
    })
  }), Ni.mount(Wo), document.body.appendChild(Wo), console.log("[ComfyGit] Workflow I/O mapping overlay mounted"));
}
let qt = null;
function sn() {
  if (!qt) return;
  const e = qt.querySelector(".commit-indicator");
  e && (e.style.display = vR() ? "block" : "none");
}
function ul() {
  if (!qt) return;
  const e = dn !== "managed";
  qt.disabled = e, qt.title = e ? "Commit disabled - switch to a managed environment first" : "Quick Commit";
}
const Ru = document.createElement("style");
Ru.textContent = `
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
document.head.appendChild(Ru);
Zt.registerExtension({
  name: "Comfy.ComfyGitPanel",
  // Commands that can be triggered by keybindings or menu items
  commands: [
    {
      id: "ComfyGit.OpenPanel",
      label: "Open ComfyGit Panel",
      icon: "pi pi-folder-open",
      function: () => Mn()
    },
    {
      id: "ComfyGit.QuickCommit",
      label: "Quick Commit",
      icon: "pi pi-check",
      function: () => {
        qt && !qt.disabled && Li(qt);
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
          Zt.ui.settings.setSettingValueAsync("Comfy.Workflow.ShowMissingModelsWarning", !1),
          Zt.ui.settings.setSettingValueAsync("Comfy.Workflow.ShowMissingNodesWarning", !1)
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
    s.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", s.textContent = "ComfyGit", s.title = "ComfyGit Control Panel", s.onclick = Mn, qt = document.createElement("button"), qt.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", qt.innerHTML = 'Commit <span class="commit-indicator"></span>', qt.title = "Quick Commit", qt.onclick = () => Li(qt), e.appendChild(s), e.appendChild(qt), (r = (l = Zt.menu) == null ? void 0 : l.settingsGroup) != null && r.element && (Zt.menu.settingsGroup.element.before(e), console.log("[ComfyGit] Control Panel buttons added to toolbar")), gR(), hR(), yR(), window.addEventListener("comfygit:open-panel", ((u) => {
      var d;
      const c = (d = u.detail) == null ? void 0 : d.initialView;
      Mn(c);
    })), window.addEventListener("comfygit:close-panel", (() => {
      Ho();
    }));
    const { loadPendingDownloads: o } = Lo();
    o(), await Promise.all([An(), il()]), sn(), ul(), rl(), setTimeout(rl, 100), setInterval(async () => {
      await Promise.all([An(), il()]), sn(), ul();
    }, 3e4);
    const a = Zt.api;
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
          y.remove(), Mn("debug-env");
        }, y.appendChild(U);
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
        `, E.onmouseover = () => E.style.opacity = "1", E.onmouseout = () => E.style.opacity = "0.6", E.onclick = () => y.remove(), y.appendChild(E), document.body.appendChild(y), console.log("[ComfyGit] Manager error toast displayed:", p), setTimeout(() => {
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
            const T = async () => {
              console.log("[ComfyGit] Reconnected after restart, refreshing node definitions...");
              try {
                Zt.refreshComboInNodes && (await Zt.refreshComboInNodes(), console.log("[ComfyGit] Node definitions refreshed successfully")), k.textContent = "✅", C.textContent = "Nodes Installed", C.style.color = "#4caf50", S.textContent = `${p} package${p > 1 ? "s" : ""} installed successfully!`, y.style.borderColor = "#4caf50", U.style.display = "none", setTimeout(() => {
                  y.remove();
                }, 3e3);
              } catch (N) {
                console.error("[ComfyGit] Failed to refresh nodes:", N), k.textContent = "✅", C.textContent = "Restart Complete", C.style.color = "#4caf50", S.textContent = "Refresh the page to load new nodes.", y.style.borderColor = "#4caf50", U.style.display = "none";
              }
            };
            a.addEventListener("reconnected", T, { once: !0 }), await fetch("/v2/manager/reboot");
          } catch (T) {
            console.error("[ComfyGit] Failed to restart:", T), C.textContent = "Restart Failed", C.style.color = "#e53935", S.textContent = "Could not restart server. Try again.", y.style.borderColor = "#e53935", U.textContent = "Try Again", U.disabled = !1, U.style.opacity = "1";
          }
        }, y.appendChild(U);
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
        `, E.onmouseover = () => E.style.opacity = "1", E.onmouseout = () => E.style.opacity = "0.6", E.onclick = () => y.remove(), y.appendChild(E), document.body.appendChild(y), console.log(`[ComfyGit] Restart required notification displayed (${p} packages installed)`);
      };
      a.addEventListener("comfygit:workflow-changed", async (p) => {
        const { change_type: w, workflow_name: y } = p.detail;
        console.log(`[ComfyGit] Workflow ${w}: ${y}`), await An(), sn();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let f = !1;
      a.addEventListener("status", async (p) => {
        const w = p.detail != null;
        w && !f && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") !== "false" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), u()) : c()), f = w;
      }), console.log("[ComfyGit] Refresh notification system initialized"), a.addEventListener("cm-task-completed", (p) => {
        const w = mR(p.detail);
        w && d(w);
      }), console.log("[ComfyGit] Manager error notification system initialized"), window.addEventListener("comfygit:nodes-installed", (p) => {
        const w = p, { count: y = 1 } = w.detail || {};
        v(y);
      }), console.log("[ComfyGit] Restart notification system initialized");
    }
  }
});
