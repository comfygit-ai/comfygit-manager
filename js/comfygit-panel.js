var Ec = Object.defineProperty;
var Tc = (e, t, o) => t in e ? Ec(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var yn = (e, t, o) => Tc(e, typeof t != "symbol" ? t + "" : t, o);
import { app as Zt } from "../../scripts/app.js";
/**
* @vue/shared v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function ll(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const o of e.split(",")) t[o] = 1;
  return (o) => o in t;
}
const ht = {}, yo = [], Cs = () => {
}, Di = () => !1, Kn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), il = (e) => e.startsWith("onUpdate:"), Mt = Object.assign, rl = (e, t) => {
  const o = e.indexOf(t);
  o > -1 && e.splice(o, 1);
}, Mc = Object.prototype.hasOwnProperty, ft = (e, t) => Mc.call(e, t), Xe = Array.isArray, wo = (e) => dn(e) === "[object Map]", To = (e) => dn(e) === "[object Set]", Nl = (e) => dn(e) === "[object Date]", et = (e) => typeof e == "function", $t = (e) => typeof e == "string", ms = (e) => typeof e == "symbol", gt = (e) => e !== null && typeof e == "object", Oi = (e) => (gt(e) || et(e)) && et(e.then) && et(e.catch), Ui = Object.prototype.toString, dn = (e) => Ui.call(e), Pc = (e) => dn(e).slice(8, -1), Ai = (e) => dn(e) === "[object Object]", cl = (e) => $t(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, jo = /* @__PURE__ */ ll(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Jn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((o) => t[o] || (t[o] = e(o)));
}, Rc = /-\w/g, rs = Jn(
  (e) => e.replace(Rc, (t) => t.slice(1).toUpperCase())
), Lc = /\B([A-Z])/g, Ks = Jn(
  (e) => e.replace(Lc, "-$1").toLowerCase()
), Qn = Jn((e) => e.charAt(0).toUpperCase() + e.slice(1)), Ta = Jn(
  (e) => e ? `on${Qn(e)}` : ""
), js = (e, t) => !Object.is(e, t), Sn = (e, ...t) => {
  for (let o = 0; o < e.length; o++)
    e[o](...t);
}, zi = (e, t, o, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: o
  });
}, Yn = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Nc = (e) => {
  const t = $t(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Dl;
const Xn = () => Dl || (Dl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Rt(e) {
  if (Xe(e)) {
    const t = {};
    for (let o = 0; o < e.length; o++) {
      const n = e[o], l = $t(n) ? Ac(n) : Rt(n);
      if (l)
        for (const r in l)
          t[r] = l[r];
    }
    return t;
  } else if ($t(e) || gt(e))
    return e;
}
const Dc = /;(?![^(]*\))/g, Oc = /:([^]+)/, Uc = /\/\*[^]*?\*\//g;
function Ac(e) {
  const t = {};
  return e.replace(Uc, "").split(Dc).forEach((o) => {
    if (o) {
      const n = o.split(Oc);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function Fe(e) {
  let t = "";
  if ($t(e))
    t = e;
  else if (Xe(e))
    for (let o = 0; o < e.length; o++) {
      const n = Fe(e[o]);
      n && (t += n + " ");
    }
  else if (gt(e))
    for (const o in e)
      e[o] && (t += o + " ");
  return t.trim();
}
const zc = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Fc = /* @__PURE__ */ ll(zc);
function Fi(e) {
  return !!e || e === "";
}
function Vc(e, t) {
  if (e.length !== t.length) return !1;
  let o = !0;
  for (let n = 0; o && n < e.length; n++)
    o = ao(e[n], t[n]);
  return o;
}
function ao(e, t) {
  if (e === t) return !0;
  let o = Nl(e), n = Nl(t);
  if (o || n)
    return o && n ? e.getTime() === t.getTime() : !1;
  if (o = ms(e), n = ms(t), o || n)
    return e === t;
  if (o = Xe(e), n = Xe(t), o || n)
    return o && n ? Vc(e, t) : !1;
  if (o = gt(e), n = gt(t), o || n) {
    if (!o || !n)
      return !1;
    const l = Object.keys(e).length, r = Object.keys(t).length;
    if (l !== r)
      return !1;
    for (const u in e) {
      const c = e.hasOwnProperty(u), d = t.hasOwnProperty(u);
      if (c && !d || !c && d || !ao(e[u], t[u]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function ul(e, t) {
  return e.findIndex((o) => ao(o, t));
}
const Vi = (e) => !!(e && e.__v_isRef === !0), f = (e) => $t(e) ? e : e == null ? "" : Xe(e) || gt(e) && (e.toString === Ui || !et(e.toString)) ? Vi(e) ? f(e.value) : JSON.stringify(e, Bi, 2) : String(e), Bi = (e, t) => Vi(t) ? Bi(e, t.value) : wo(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (o, [n, l], r) => (o[Ma(n, r) + " =>"] = l, o),
    {}
  )
} : To(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((o) => Ma(o))
} : ms(t) ? Ma(t) : gt(t) && !Xe(t) && !Ai(t) ? String(t) : t, Ma = (e, t = "") => {
  var o;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    ms(e) ? `Symbol(${(o = e.description) != null ? o : t})` : e
  );
};
/**
* @vue/reactivity v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Qt;
class Bc {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Qt, !t && Qt && (this.index = (Qt.scopes || (Qt.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, o;
      if (this.scopes)
        for (t = 0, o = this.scopes.length; t < o; t++)
          this.scopes[t].pause();
      for (t = 0, o = this.effects.length; t < o; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, o;
      if (this.scopes)
        for (t = 0, o = this.scopes.length; t < o; t++)
          this.scopes[t].resume();
      for (t = 0, o = this.effects.length; t < o; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const o = Qt;
      try {
        return Qt = this, t();
      } finally {
        Qt = o;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Qt, Qt = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (Qt = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
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
      if (!this.detached && this.parent && !t) {
        const l = this.parent.scopes.pop();
        l && l !== this && (this.parent.scopes[this.index] = l, l.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Wc() {
  return Qt;
}
let yt;
const Pa = /* @__PURE__ */ new WeakSet();
class Wi {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Qt && Qt.active && Qt.effects.push(this);
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
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || ji(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Ol(this), Hi(this);
    const t = yt, o = ds;
    yt = this, ds = !0;
    try {
      return this.fn();
    } finally {
      qi(this), yt = t, ds = o, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        ml(t);
      this.deps = this.depsTail = void 0, Ol(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Pa.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Wa(this) && this.run();
  }
  get dirty() {
    return Wa(this);
  }
}
let Gi = 0, Ho, qo;
function ji(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = qo, qo = e;
    return;
  }
  e.next = Ho, Ho = e;
}
function dl() {
  Gi++;
}
function fl() {
  if (--Gi > 0)
    return;
  if (qo) {
    let t = qo;
    for (qo = void 0; t; ) {
      const o = t.next;
      t.next = void 0, t.flags &= -9, t = o;
    }
  }
  let e;
  for (; Ho; ) {
    let t = Ho;
    for (Ho = void 0; t; ) {
      const o = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (n) {
          e || (e = n);
        }
      t = o;
    }
  }
  if (e) throw e;
}
function Hi(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function qi(e) {
  let t, o = e.depsTail, n = o;
  for (; n; ) {
    const l = n.prevDep;
    n.version === -1 ? (n === o && (o = l), ml(n), Gc(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = l;
  }
  e.deps = t, e.depsTail = o;
}
function Wa(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Ki(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Ki(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === sn) || (e.globalVersion = sn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Wa(e))))
    return;
  e.flags |= 2;
  const t = e.dep, o = yt, n = ds;
  yt = e, ds = !0;
  try {
    Hi(e);
    const l = e.fn(e._value);
    (t.version === 0 || js(l, e._value)) && (e.flags |= 128, e._value = l, t.version++);
  } catch (l) {
    throw t.version++, l;
  } finally {
    yt = o, ds = n, qi(e), e.flags &= -3;
  }
}
function ml(e, t = !1) {
  const { dep: o, prevSub: n, nextSub: l } = e;
  if (n && (n.nextSub = l, e.prevSub = void 0), l && (l.prevSub = n, e.nextSub = void 0), o.subs === e && (o.subs = n, !n && o.computed)) {
    o.computed.flags &= -5;
    for (let r = o.computed.deps; r; r = r.nextDep)
      ml(r, !0);
  }
  !t && !--o.sc && o.map && o.map.delete(o.key);
}
function Gc(e) {
  const { prevDep: t, nextDep: o } = e;
  t && (t.nextDep = o, e.prevDep = void 0), o && (o.prevDep = t, e.nextDep = void 0);
}
let ds = !0;
const Ji = [];
function Ds() {
  Ji.push(ds), ds = !1;
}
function Os() {
  const e = Ji.pop();
  ds = e === void 0 ? !0 : e;
}
function Ol(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const o = yt;
    yt = void 0;
    try {
      t();
    } finally {
      yt = o;
    }
  }
}
let sn = 0;
class jc {
  constructor(t, o) {
    this.sub = t, this.dep = o, this.version = o.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class vl {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!yt || !ds || yt === this.computed)
      return;
    let o = this.activeLink;
    if (o === void 0 || o.sub !== yt)
      o = this.activeLink = new jc(yt, this), yt.deps ? (o.prevDep = yt.depsTail, yt.depsTail.nextDep = o, yt.depsTail = o) : yt.deps = yt.depsTail = o, Qi(o);
    else if (o.version === -1 && (o.version = this.version, o.nextDep)) {
      const n = o.nextDep;
      n.prevDep = o.prevDep, o.prevDep && (o.prevDep.nextDep = n), o.prevDep = yt.depsTail, o.nextDep = void 0, yt.depsTail.nextDep = o, yt.depsTail = o, yt.deps === o && (yt.deps = n);
    }
    return o;
  }
  trigger(t) {
    this.version++, sn++, this.notify(t);
  }
  notify(t) {
    dl();
    try {
      for (let o = this.subs; o; o = o.prevSub)
        o.sub.notify() && o.sub.dep.notify();
    } finally {
      fl();
    }
  }
}
function Qi(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        Qi(n);
    }
    const o = e.dep.subs;
    o !== e && (e.prevSub = o, o && (o.nextSub = e)), e.dep.subs = e;
  }
}
const Ga = /* @__PURE__ */ new WeakMap(), so = Symbol(
  ""
), ja = Symbol(
  ""
), on = Symbol(
  ""
);
function Ft(e, t, o) {
  if (ds && yt) {
    let n = Ga.get(e);
    n || Ga.set(e, n = /* @__PURE__ */ new Map());
    let l = n.get(o);
    l || (n.set(o, l = new vl()), l.map = n, l.key = o), l.track();
  }
}
function Rs(e, t, o, n, l, r) {
  const u = Ga.get(e);
  if (!u) {
    sn++;
    return;
  }
  const c = (d) => {
    d && d.trigger();
  };
  if (dl(), t === "clear")
    u.forEach(c);
  else {
    const d = Xe(e), m = d && cl(o);
    if (d && o === "length") {
      const v = Number(n);
      u.forEach((p, w) => {
        (w === "length" || w === on || !ms(w) && w >= v) && c(p);
      });
    } else
      switch ((o !== void 0 || u.has(void 0)) && c(u.get(o)), m && c(u.get(on)), t) {
        case "add":
          d ? m && c(u.get("length")) : (c(u.get(so)), wo(e) && c(u.get(ja)));
          break;
        case "delete":
          d || (c(u.get(so)), wo(e) && c(u.get(ja)));
          break;
        case "set":
          wo(e) && c(u.get(so));
          break;
      }
  }
  fl();
}
function fo(e) {
  const t = ct(e);
  return t === e ? t : (Ft(t, "iterate", on), ls(e) ? t : t.map(vs));
}
function Zn(e) {
  return Ft(e = ct(e), "iterate", on), e;
}
function Bs(e, t) {
  return Us(e) ? oo(e) ? So(vs(t)) : So(t) : vs(t);
}
const Hc = {
  __proto__: null,
  [Symbol.iterator]() {
    return Ra(this, Symbol.iterator, (e) => Bs(this, e));
  },
  concat(...e) {
    return fo(this).concat(
      ...e.map((t) => Xe(t) ? fo(t) : t)
    );
  },
  entries() {
    return Ra(this, "entries", (e) => (e[1] = Bs(this, e[1]), e));
  },
  every(e, t) {
    return Ts(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Ts(
      this,
      "filter",
      e,
      t,
      (o) => o.map((n) => Bs(this, n)),
      arguments
    );
  },
  find(e, t) {
    return Ts(
      this,
      "find",
      e,
      t,
      (o) => Bs(this, o),
      arguments
    );
  },
  findIndex(e, t) {
    return Ts(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Ts(
      this,
      "findLast",
      e,
      t,
      (o) => Bs(this, o),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Ts(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Ts(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return La(this, "includes", e);
  },
  indexOf(...e) {
    return La(this, "indexOf", e);
  },
  join(e) {
    return fo(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return La(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Ts(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return No(this, "pop");
  },
  push(...e) {
    return No(this, "push", e);
  },
  reduce(e, ...t) {
    return Ul(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Ul(this, "reduceRight", e, t);
  },
  shift() {
    return No(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Ts(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return No(this, "splice", e);
  },
  toReversed() {
    return fo(this).toReversed();
  },
  toSorted(e) {
    return fo(this).toSorted(e);
  },
  toSpliced(...e) {
    return fo(this).toSpliced(...e);
  },
  unshift(...e) {
    return No(this, "unshift", e);
  },
  values() {
    return Ra(this, "values", (e) => Bs(this, e));
  }
};
function Ra(e, t, o) {
  const n = Zn(e), l = n[t]();
  return n !== e && !ls(e) && (l._next = l.next, l.next = () => {
    const r = l._next();
    return r.done || (r.value = o(r.value)), r;
  }), l;
}
const qc = Array.prototype;
function Ts(e, t, o, n, l, r) {
  const u = Zn(e), c = u !== e && !ls(e), d = u[t];
  if (d !== qc[t]) {
    const p = d.apply(e, r);
    return c ? vs(p) : p;
  }
  let m = o;
  u !== e && (c ? m = function(p, w) {
    return o.call(this, Bs(e, p), w, e);
  } : o.length > 2 && (m = function(p, w) {
    return o.call(this, p, w, e);
  }));
  const v = d.call(u, m, n);
  return c && l ? l(v) : v;
}
function Ul(e, t, o, n) {
  const l = Zn(e);
  let r = o;
  return l !== e && (ls(e) ? o.length > 3 && (r = function(u, c, d) {
    return o.call(this, u, c, d, e);
  }) : r = function(u, c, d) {
    return o.call(this, u, Bs(e, c), d, e);
  }), l[t](r, ...n);
}
function La(e, t, o) {
  const n = ct(e);
  Ft(n, "iterate", on);
  const l = n[t](...o);
  return (l === -1 || l === !1) && hl(o[0]) ? (o[0] = ct(o[0]), n[t](...o)) : l;
}
function No(e, t, o = []) {
  Ds(), dl();
  const n = ct(e)[t].apply(e, o);
  return fl(), Os(), n;
}
const Kc = /* @__PURE__ */ ll("__proto__,__v_isRef,__isVue"), Yi = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ms)
);
function Jc(e) {
  ms(e) || (e = String(e));
  const t = ct(this);
  return Ft(t, "has", e), t.hasOwnProperty(e);
}
class Xi {
  constructor(t = !1, o = !1) {
    this._isReadonly = t, this._isShallow = o;
  }
  get(t, o, n) {
    if (o === "__v_skip") return t.__v_skip;
    const l = this._isReadonly, r = this._isShallow;
    if (o === "__v_isReactive")
      return !l;
    if (o === "__v_isReadonly")
      return l;
    if (o === "__v_isShallow")
      return r;
    if (o === "__v_raw")
      return n === (l ? r ? au : sr : r ? tr : er).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const u = Xe(t);
    if (!l) {
      let d;
      if (u && (d = Hc[o]))
        return d;
      if (o === "hasOwnProperty")
        return Jc;
    }
    const c = Reflect.get(
      t,
      o,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Gt(t) ? t : n
    );
    if ((ms(o) ? Yi.has(o) : Kc(o)) || (l || Ft(t, "get", o), r))
      return c;
    if (Gt(c)) {
      const d = u && cl(o) ? c : c.value;
      return l && gt(d) ? Dn(d) : d;
    }
    return gt(c) ? l ? Dn(c) : ro(c) : c;
  }
}
class Zi extends Xi {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, o, n, l) {
    let r = t[o];
    const u = Xe(t) && cl(o);
    if (!this._isShallow) {
      const m = Us(r);
      if (!ls(n) && !Us(n) && (r = ct(r), n = ct(n)), !u && Gt(r) && !Gt(n))
        return m || (r.value = n), !0;
    }
    const c = u ? Number(o) < t.length : ft(t, o), d = Reflect.set(
      t,
      o,
      n,
      Gt(t) ? t : l
    );
    return t === ct(l) && (c ? js(n, r) && Rs(t, "set", o, n) : Rs(t, "add", o, n)), d;
  }
  deleteProperty(t, o) {
    const n = ft(t, o);
    t[o];
    const l = Reflect.deleteProperty(t, o);
    return l && n && Rs(t, "delete", o, void 0), l;
  }
  has(t, o) {
    const n = Reflect.has(t, o);
    return (!ms(o) || !Yi.has(o)) && Ft(t, "has", o), n;
  }
  ownKeys(t) {
    return Ft(
      t,
      "iterate",
      Xe(t) ? "length" : so
    ), Reflect.ownKeys(t);
  }
}
class Qc extends Xi {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, o) {
    return !0;
  }
  deleteProperty(t, o) {
    return !0;
  }
}
const Yc = /* @__PURE__ */ new Zi(), Xc = /* @__PURE__ */ new Qc(), Zc = /* @__PURE__ */ new Zi(!0);
const Ha = (e) => e, wn = (e) => Reflect.getPrototypeOf(e);
function eu(e, t, o) {
  return function(...n) {
    const l = this.__v_raw, r = ct(l), u = wo(r), c = e === "entries" || e === Symbol.iterator && u, d = e === "keys" && u, m = l[e](...n), v = o ? Ha : t ? So : vs;
    return !t && Ft(
      r,
      "iterate",
      d ? ja : so
    ), {
      // iterator protocol
      next() {
        const { value: p, done: w } = m.next();
        return w ? { value: p, done: w } : {
          value: c ? [v(p[0]), v(p[1])] : v(p),
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
function _n(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function tu(e, t) {
  const o = {
    get(l) {
      const r = this.__v_raw, u = ct(r), c = ct(l);
      e || (js(l, c) && Ft(u, "get", l), Ft(u, "get", c));
      const { has: d } = wn(u), m = t ? Ha : e ? So : vs;
      if (d.call(u, l))
        return m(r.get(l));
      if (d.call(u, c))
        return m(r.get(c));
      r !== u && r.get(l);
    },
    get size() {
      const l = this.__v_raw;
      return !e && Ft(ct(l), "iterate", so), l.size;
    },
    has(l) {
      const r = this.__v_raw, u = ct(r), c = ct(l);
      return e || (js(l, c) && Ft(u, "has", l), Ft(u, "has", c)), l === c ? r.has(l) : r.has(l) || r.has(c);
    },
    forEach(l, r) {
      const u = this, c = u.__v_raw, d = ct(c), m = t ? Ha : e ? So : vs;
      return !e && Ft(d, "iterate", so), c.forEach((v, p) => l.call(r, m(v), m(p), u));
    }
  };
  return Mt(
    o,
    e ? {
      add: _n("add"),
      set: _n("set"),
      delete: _n("delete"),
      clear: _n("clear")
    } : {
      add(l) {
        !t && !ls(l) && !Us(l) && (l = ct(l));
        const r = ct(this);
        return wn(r).has.call(r, l) || (r.add(l), Rs(r, "add", l, l)), this;
      },
      set(l, r) {
        !t && !ls(r) && !Us(r) && (r = ct(r));
        const u = ct(this), { has: c, get: d } = wn(u);
        let m = c.call(u, l);
        m || (l = ct(l), m = c.call(u, l));
        const v = d.call(u, l);
        return u.set(l, r), m ? js(r, v) && Rs(u, "set", l, r) : Rs(u, "add", l, r), this;
      },
      delete(l) {
        const r = ct(this), { has: u, get: c } = wn(r);
        let d = u.call(r, l);
        d || (l = ct(l), d = u.call(r, l)), c && c.call(r, l);
        const m = r.delete(l);
        return d && Rs(r, "delete", l, void 0), m;
      },
      clear() {
        const l = ct(this), r = l.size !== 0, u = l.clear();
        return r && Rs(
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
    o[l] = eu(l, e, t);
  }), o;
}
function pl(e, t) {
  const o = tu(e, t);
  return (n, l, r) => l === "__v_isReactive" ? !e : l === "__v_isReadonly" ? e : l === "__v_raw" ? n : Reflect.get(
    ft(o, l) && l in n ? o : n,
    l,
    r
  );
}
const su = {
  get: /* @__PURE__ */ pl(!1, !1)
}, ou = {
  get: /* @__PURE__ */ pl(!1, !0)
}, nu = {
  get: /* @__PURE__ */ pl(!0, !1)
};
const er = /* @__PURE__ */ new WeakMap(), tr = /* @__PURE__ */ new WeakMap(), sr = /* @__PURE__ */ new WeakMap(), au = /* @__PURE__ */ new WeakMap();
function lu(e) {
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
function iu(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : lu(Pc(e));
}
function ro(e) {
  return Us(e) ? e : gl(
    e,
    !1,
    Yc,
    su,
    er
  );
}
function ru(e) {
  return gl(
    e,
    !1,
    Zc,
    ou,
    tr
  );
}
function Dn(e) {
  return gl(
    e,
    !0,
    Xc,
    nu,
    sr
  );
}
function gl(e, t, o, n, l) {
  if (!gt(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = iu(e);
  if (r === 0)
    return e;
  const u = l.get(e);
  if (u)
    return u;
  const c = new Proxy(
    e,
    r === 2 ? n : o
  );
  return l.set(e, c), c;
}
function oo(e) {
  return Us(e) ? oo(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Us(e) {
  return !!(e && e.__v_isReadonly);
}
function ls(e) {
  return !!(e && e.__v_isShallow);
}
function hl(e) {
  return e ? !!e.__v_raw : !1;
}
function ct(e) {
  const t = e && e.__v_raw;
  return t ? ct(t) : e;
}
function cu(e) {
  return !ft(e, "__v_skip") && Object.isExtensible(e) && zi(e, "__v_skip", !0), e;
}
const vs = (e) => gt(e) ? ro(e) : e, So = (e) => gt(e) ? Dn(e) : e;
function Gt(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function k(e) {
  return uu(e, !1);
}
function uu(e, t) {
  return Gt(e) ? e : new du(e, t);
}
class du {
  constructor(t, o) {
    this.dep = new vl(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = o ? t : ct(t), this._value = o ? t : vs(t), this.__v_isShallow = o;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const o = this._rawValue, n = this.__v_isShallow || ls(t) || Us(t);
    t = n ? t : ct(t), js(t, o) && (this._rawValue = t, this._value = n ? t : vs(t), this.dep.trigger());
  }
}
function tt(e) {
  return Gt(e) ? e.value : e;
}
const fu = {
  get: (e, t, o) => t === "__v_raw" ? e : tt(Reflect.get(e, t, o)),
  set: (e, t, o, n) => {
    const l = e[t];
    return Gt(l) && !Gt(o) ? (l.value = o, !0) : Reflect.set(e, t, o, n);
  }
};
function or(e) {
  return oo(e) ? e : new Proxy(e, fu);
}
class mu {
  constructor(t, o, n) {
    this.fn = t, this.setter = o, this._value = void 0, this.dep = new vl(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = sn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !o, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    yt !== this)
      return ji(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Ki(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function vu(e, t, o = !1) {
  let n, l;
  return et(e) ? n = e : (n = e.get, l = e.set), new mu(n, l, o);
}
const kn = {}, On = /* @__PURE__ */ new WeakMap();
let eo;
function pu(e, t = !1, o = eo) {
  if (o) {
    let n = On.get(o);
    n || On.set(o, n = []), n.push(e);
  }
}
function gu(e, t, o = ht) {
  const { immediate: n, deep: l, once: r, scheduler: u, augmentJob: c, call: d } = o, m = (P) => l ? P : ls(P) || l === !1 || l === 0 ? Ls(P, 1) : Ls(P);
  let v, p, w, g, _ = !1, x = !1;
  if (Gt(e) ? (p = () => e.value, _ = ls(e)) : oo(e) ? (p = () => m(e), _ = !0) : Xe(e) ? (x = !0, _ = e.some((P) => oo(P) || ls(P)), p = () => e.map((P) => {
    if (Gt(P))
      return P.value;
    if (oo(P))
      return m(P);
    if (et(P))
      return d ? d(P, 2) : P();
  })) : et(e) ? t ? p = d ? () => d(e, 2) : e : p = () => {
    if (w) {
      Ds();
      try {
        w();
      } finally {
        Os();
      }
    }
    const P = eo;
    eo = v;
    try {
      return d ? d(e, 3, [g]) : e(g);
    } finally {
      eo = P;
    }
  } : p = Cs, t && l) {
    const P = p, D = l === !0 ? 1 / 0 : l;
    p = () => Ls(P(), D);
  }
  const C = Wc(), S = () => {
    v.stop(), C && C.active && rl(C.effects, v);
  };
  if (r && t) {
    const P = t;
    t = (...D) => {
      P(...D), S();
    };
  }
  let T = x ? new Array(e.length).fill(kn) : kn;
  const M = (P) => {
    if (!(!(v.flags & 1) || !v.dirty && !P))
      if (t) {
        const D = v.run();
        if (l || _ || (x ? D.some((N, O) => js(N, T[O])) : js(D, T))) {
          w && w();
          const N = eo;
          eo = v;
          try {
            const O = [
              D,
              // pass undefined as the old value when it's changed for the first time
              T === kn ? void 0 : x && T[0] === kn ? [] : T,
              g
            ];
            T = D, d ? d(t, 3, O) : (
              // @ts-expect-error
              t(...O)
            );
          } finally {
            eo = N;
          }
        }
      } else
        v.run();
  };
  return c && c(M), v = new Wi(p), v.scheduler = u ? () => u(M, !1) : M, g = (P) => pu(P, !1, v), w = v.onStop = () => {
    const P = On.get(v);
    if (P) {
      if (d)
        d(P, 4);
      else
        for (const D of P) D();
      On.delete(v);
    }
  }, t ? n ? M(!0) : T = v.run() : u ? u(M.bind(null, !0), !0) : v.run(), S.pause = v.pause.bind(v), S.resume = v.resume.bind(v), S.stop = S, S;
}
function Ls(e, t = 1 / 0, o) {
  if (t <= 0 || !gt(e) || e.__v_skip || (o = o || /* @__PURE__ */ new Map(), (o.get(e) || 0) >= t))
    return e;
  if (o.set(e, t), t--, Gt(e))
    Ls(e.value, t, o);
  else if (Xe(e))
    for (let n = 0; n < e.length; n++)
      Ls(e[n], t, o);
  else if (To(e) || wo(e))
    e.forEach((n) => {
      Ls(n, t, o);
    });
  else if (Ai(e)) {
    for (const n in e)
      Ls(e[n], t, o);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && Ls(e[n], t, o);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function fn(e, t, o, n) {
  try {
    return n ? e(...n) : e();
  } catch (l) {
    ea(l, t, o);
  }
}
function ps(e, t, o, n) {
  if (et(e)) {
    const l = fn(e, t, o, n);
    return l && Oi(l) && l.catch((r) => {
      ea(r, t, o);
    }), l;
  }
  if (Xe(e)) {
    const l = [];
    for (let r = 0; r < e.length; r++)
      l.push(ps(e[r], t, o, n));
    return l;
  }
}
function ea(e, t, o, n = !0) {
  const l = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: u } = t && t.appContext.config || ht;
  if (t) {
    let c = t.parent;
    const d = t.proxy, m = `https://vuejs.org/error-reference/#runtime-${o}`;
    for (; c; ) {
      const v = c.ec;
      if (v) {
        for (let p = 0; p < v.length; p++)
          if (v[p](e, d, m) === !1)
            return;
      }
      c = c.parent;
    }
    if (r) {
      Ds(), fn(r, null, 10, [
        e,
        d,
        m
      ]), Os();
      return;
    }
  }
  hu(e, o, l, n, u);
}
function hu(e, t, o, n = !0, l = !1) {
  if (l)
    throw e;
  console.error(e);
}
const Jt = [];
let _s = -1;
const _o = [];
let Ws = null, po = 0;
const nr = /* @__PURE__ */ Promise.resolve();
let Un = null;
function Pt(e) {
  const t = Un || nr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function yu(e) {
  let t = _s + 1, o = Jt.length;
  for (; t < o; ) {
    const n = t + o >>> 1, l = Jt[n], r = nn(l);
    r < e || r === e && l.flags & 2 ? t = n + 1 : o = n;
  }
  return t;
}
function yl(e) {
  if (!(e.flags & 1)) {
    const t = nn(e), o = Jt[Jt.length - 1];
    !o || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= nn(o) ? Jt.push(e) : Jt.splice(yu(t), 0, e), e.flags |= 1, ar();
  }
}
function ar() {
  Un || (Un = nr.then(ir));
}
function wu(e) {
  Xe(e) ? _o.push(...e) : Ws && e.id === -1 ? Ws.splice(po + 1, 0, e) : e.flags & 1 || (_o.push(e), e.flags |= 1), ar();
}
function Al(e, t, o = _s + 1) {
  for (; o < Jt.length; o++) {
    const n = Jt[o];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      Jt.splice(o, 1), o--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function lr(e) {
  if (_o.length) {
    const t = [...new Set(_o)].sort(
      (o, n) => nn(o) - nn(n)
    );
    if (_o.length = 0, Ws) {
      Ws.push(...t);
      return;
    }
    for (Ws = t, po = 0; po < Ws.length; po++) {
      const o = Ws[po];
      o.flags & 4 && (o.flags &= -2), o.flags & 8 || o(), o.flags &= -2;
    }
    Ws = null, po = 0;
  }
}
const nn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function ir(e) {
  try {
    for (_s = 0; _s < Jt.length; _s++) {
      const t = Jt[_s];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), fn(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; _s < Jt.length; _s++) {
      const t = Jt[_s];
      t && (t.flags &= -2);
    }
    _s = -1, Jt.length = 0, lr(), Un = null, (Jt.length || _o.length) && ir();
  }
}
let Ut = null, rr = null;
function An(e) {
  const t = Ut;
  return Ut = e, rr = e && e.type.__scopeId || null, t;
}
function h(e, t = Ut, o) {
  if (!t || e._n)
    return e;
  const n = (...l) => {
    n._d && Vn(-1);
    const r = An(t);
    let u;
    try {
      u = e(...l);
    } finally {
      An(r), n._d && Vn(1);
    }
    return u;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function Tt(e, t) {
  if (Ut === null)
    return e;
  const o = la(Ut), n = e.dirs || (e.dirs = []);
  for (let l = 0; l < t.length; l++) {
    let [r, u, c, d = ht] = t[l];
    r && (et(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && Ls(u), n.push({
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
function Qs(e, t, o, n) {
  const l = e.dirs, r = t && t.dirs;
  for (let u = 0; u < l.length; u++) {
    const c = l[u];
    r && (c.oldValue = r[u].value);
    let d = c.dir[n];
    d && (Ds(), ps(d, o, 8, [
      e.el,
      c,
      e,
      t
    ]), Os());
  }
}
const cr = Symbol("_vte"), ur = (e) => e.__isTeleport, Ko = (e) => e && (e.disabled || e.disabled === ""), zl = (e) => e && (e.defer || e.defer === ""), Fl = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Vl = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, qa = (e, t) => {
  const o = e && e.to;
  return $t(o) ? t ? t(o) : null : o;
}, dr = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, o, n, l, r, u, c, d, m) {
    const {
      mc: v,
      pc: p,
      pbc: w,
      o: { insert: g, querySelector: _, createText: x, createComment: C }
    } = m, S = Ko(t.props);
    let { shapeFlag: T, children: M, dynamicChildren: P } = t;
    if (e == null) {
      const D = t.el = x(""), N = t.anchor = x("");
      g(D, o, n), g(N, o, n);
      const O = (K, ae) => {
        T & 16 && v(
          M,
          K,
          ae,
          l,
          r,
          u,
          c,
          d
        );
      }, E = () => {
        const K = t.target = qa(t.props, _), ae = fr(K, t, x, g);
        K && (u !== "svg" && Fl(K) ? u = "svg" : u !== "mathml" && Vl(K) && (u = "mathml"), l && l.isCE && (l.ce._teleportTargets || (l.ce._teleportTargets = /* @__PURE__ */ new Set())).add(K), S || (O(K, ae), In(t, !1)));
      };
      S && (O(o, N), In(t, !0)), zl(t.props) ? (t.el.__isMounted = !1, qt(() => {
        E(), delete t.el.__isMounted;
      }, r)) : E();
    } else {
      if (zl(t.props) && e.el.__isMounted === !1) {
        qt(() => {
          dr.process(
            e,
            t,
            o,
            n,
            l,
            r,
            u,
            c,
            d,
            m
          );
        }, r);
        return;
      }
      t.el = e.el, t.targetStart = e.targetStart;
      const D = t.anchor = e.anchor, N = t.target = e.target, O = t.targetAnchor = e.targetAnchor, E = Ko(e.props), K = E ? o : N, ae = E ? D : O;
      if (u === "svg" || Fl(N) ? u = "svg" : (u === "mathml" || Vl(N)) && (u = "mathml"), P ? (w(
        e.dynamicChildren,
        P,
        K,
        l,
        r,
        u,
        c
      ), $l(e, t, !0)) : d || p(
        e,
        t,
        K,
        ae,
        l,
        r,
        u,
        c,
        !1
      ), S)
        E ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : bn(
          t,
          o,
          D,
          m,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const fe = t.target = qa(
          t.props,
          _
        );
        fe && bn(
          t,
          fe,
          null,
          m,
          0
        );
      } else E && bn(
        t,
        N,
        O,
        m,
        1
      );
      In(t, S);
    }
  },
  remove(e, t, o, { um: n, o: { remove: l } }, r) {
    const {
      shapeFlag: u,
      children: c,
      anchor: d,
      targetStart: m,
      targetAnchor: v,
      target: p,
      props: w
    } = e;
    if (p && (l(m), l(v)), r && l(d), u & 16) {
      const g = r || !Ko(w);
      for (let _ = 0; _ < c.length; _++) {
        const x = c[_];
        n(
          x,
          t,
          o,
          g,
          !!x.dynamicChildren
        );
      }
    }
  },
  move: bn,
  hydrate: _u
};
function bn(e, t, o, { o: { insert: n }, m: l }, r = 2) {
  r === 0 && n(e.targetAnchor, t, o);
  const { el: u, anchor: c, shapeFlag: d, children: m, props: v } = e, p = r === 2;
  if (p && n(u, t, o), (!p || Ko(v)) && d & 16)
    for (let w = 0; w < m.length; w++)
      l(
        m[w],
        t,
        o,
        2
      );
  p && n(c, t, o);
}
function _u(e, t, o, n, l, r, {
  o: { nextSibling: u, parentNode: c, querySelector: d, insert: m, createText: v }
}, p) {
  function w(x, C, S, T) {
    C.anchor = p(
      u(x),
      C,
      c(x),
      o,
      n,
      l,
      r
    ), C.targetStart = S, C.targetAnchor = T;
  }
  const g = t.target = qa(
    t.props,
    d
  ), _ = Ko(t.props);
  if (g) {
    const x = g._lpa || g.firstChild;
    if (t.shapeFlag & 16)
      if (_)
        w(
          e,
          t,
          x,
          x && u(x)
        );
      else {
        t.anchor = u(e);
        let C = x;
        for (; C; ) {
          if (C && C.nodeType === 8) {
            if (C.data === "teleport start anchor")
              t.targetStart = C;
            else if (C.data === "teleport anchor") {
              t.targetAnchor = C, g._lpa = t.targetAnchor && u(t.targetAnchor);
              break;
            }
          }
          C = u(C);
        }
        t.targetAnchor || fr(g, t, v, m), p(
          x && u(x),
          t,
          g,
          o,
          n,
          l,
          r
        );
      }
    In(t, _);
  } else _ && t.shapeFlag & 16 && w(e, t, e, u(e));
  return t.anchor && u(t.anchor);
}
const Lt = dr;
function In(e, t) {
  const o = e.ctx;
  if (o && o.ut) {
    let n, l;
    for (t ? (n = e.el, l = e.anchor) : (n = e.targetStart, l = e.targetAnchor); n && n !== l; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", o.uid), n = n.nextSibling;
    o.ut();
  }
}
function fr(e, t, o, n) {
  const l = t.targetStart = o(""), r = t.targetAnchor = o("");
  return l[cr] = r, e && (n(l, e), n(r, e)), r;
}
const Ps = Symbol("_leaveCb"), $n = Symbol("_enterCb");
function mr() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return rt(() => {
    e.isMounted = !0;
  }), oa(() => {
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
  const t = e.subTree;
  return t.component ? pr(t.component) : t;
}, ku = {
  name: "BaseTransition",
  props: vr,
  setup(e, { slots: t }) {
    const o = xl(), n = mr();
    return () => {
      const l = t.default && wl(t.default(), !0);
      if (!l || !l.length)
        return;
      const r = gr(l), u = ct(e), { mode: c } = u;
      if (n.isLeaving)
        return Na(r);
      const d = Bl(r);
      if (!d)
        return Na(r);
      let m = an(
        d,
        u,
        n,
        o,
        // #11061, ensure enterHooks is fresh after clone
        (p) => m = p
      );
      d.type !== Bt && lo(d, m);
      let v = o.subTree && Bl(o.subTree);
      if (v && v.type !== Bt && !to(v, d) && pr(o).type !== Bt) {
        let p = an(
          v,
          u,
          n,
          o
        );
        if (lo(v, p), c === "out-in" && d.type !== Bt)
          return n.isLeaving = !0, p.afterLeave = () => {
            n.isLeaving = !1, o.job.flags & 8 || o.update(), delete p.afterLeave, v = void 0;
          }, Na(r);
        c === "in-out" && d.type !== Bt ? p.delayLeave = (w, g, _) => {
          const x = hr(
            n,
            v
          );
          x[String(v.key)] = v, w[Ps] = () => {
            g(), w[Ps] = void 0, delete m.delayedLeave, v = void 0;
          }, m.delayedLeave = () => {
            _(), delete m.delayedLeave, v = void 0;
          };
        } : v = void 0;
      } else v && (v = void 0);
      return r;
    };
  }
};
function gr(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const o of e)
      if (o.type !== Bt) {
        t = o;
        break;
      }
  }
  return t;
}
const bu = ku;
function hr(e, t) {
  const { leavingVNodes: o } = e;
  let n = o.get(t.type);
  return n || (n = /* @__PURE__ */ Object.create(null), o.set(t.type, n)), n;
}
function an(e, t, o, n, l) {
  const {
    appear: r,
    mode: u,
    persisted: c = !1,
    onBeforeEnter: d,
    onEnter: m,
    onAfterEnter: v,
    onEnterCancelled: p,
    onBeforeLeave: w,
    onLeave: g,
    onAfterLeave: _,
    onLeaveCancelled: x,
    onBeforeAppear: C,
    onAppear: S,
    onAfterAppear: T,
    onAppearCancelled: M
  } = t, P = String(e.key), D = hr(o, e), N = (K, ae) => {
    K && ps(
      K,
      n,
      9,
      ae
    );
  }, O = (K, ae) => {
    const fe = ae[1];
    N(K, ae), Xe(K) ? K.every((ue) => ue.length <= 1) && fe() : K.length <= 1 && fe();
  }, E = {
    mode: u,
    persisted: c,
    beforeEnter(K) {
      let ae = d;
      if (!o.isMounted)
        if (r)
          ae = C || d;
        else
          return;
      K[Ps] && K[Ps](
        !0
        /* cancelled */
      );
      const fe = D[P];
      fe && to(e, fe) && fe.el[Ps] && fe.el[Ps](), N(ae, [K]);
    },
    enter(K) {
      let ae = m, fe = v, ue = p;
      if (!o.isMounted)
        if (r)
          ae = S || m, fe = T || v, ue = M || p;
        else
          return;
      let we = !1;
      const X = K[$n] = (G) => {
        we || (we = !0, G ? N(ue, [K]) : N(fe, [K]), E.delayedLeave && E.delayedLeave(), K[$n] = void 0);
      };
      ae ? O(ae, [K, X]) : X();
    },
    leave(K, ae) {
      const fe = String(e.key);
      if (K[$n] && K[$n](
        !0
        /* cancelled */
      ), o.isUnmounting)
        return ae();
      N(w, [K]);
      let ue = !1;
      const we = K[Ps] = (X) => {
        ue || (ue = !0, ae(), X ? N(x, [K]) : N(_, [K]), K[Ps] = void 0, D[fe] === e && delete D[fe]);
      };
      D[fe] = e, g ? O(g, [K, we]) : we();
    },
    clone(K) {
      const ae = an(
        K,
        t,
        o,
        n,
        l
      );
      return l && l(ae), ae;
    }
  };
  return E;
}
function Na(e) {
  if (ta(e))
    return e = Hs(e), e.children = null, e;
}
function Bl(e) {
  if (!ta(e))
    return ur(e.type) && e.children ? gr(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: o } = e;
  if (o) {
    if (t & 16)
      return o[0];
    if (t & 32 && et(o.default))
      return o.default();
  }
}
function lo(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, lo(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function wl(e, t = !1, o) {
  let n = [], l = 0;
  for (let r = 0; r < e.length; r++) {
    let u = e[r];
    const c = o == null ? u.key : String(o) + String(u.key != null ? u.key : r);
    u.type === j ? (u.patchFlag & 128 && l++, n = n.concat(
      wl(u.children, t, c)
    )) : (t || u.type !== Bt) && n.push(c != null ? Hs(u, { key: c }) : u);
  }
  if (l > 1)
    for (let r = 0; r < n.length; r++)
      n[r].patchFlag = -2;
  return n;
}
// @__NO_SIDE_EFFECTS__
function be(e, t) {
  return et(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Mt({ name: e.name }, t, { setup: e })
  ) : e;
}
function yr(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const zn = /* @__PURE__ */ new WeakMap();
function Jo(e, t, o, n, l = !1) {
  if (Xe(e)) {
    e.forEach(
      (_, x) => Jo(
        _,
        t && (Xe(t) ? t[x] : t),
        o,
        n,
        l
      )
    );
    return;
  }
  if (ko(n) && !l) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && Jo(e, t, o, n.component.subTree);
    return;
  }
  const r = n.shapeFlag & 4 ? la(n.component) : n.el, u = l ? null : r, { i: c, r: d } = e, m = t && t.r, v = c.refs === ht ? c.refs = {} : c.refs, p = c.setupState, w = ct(p), g = p === ht ? Di : (_) => ft(w, _);
  if (m != null && m !== d) {
    if (Wl(t), $t(m))
      v[m] = null, g(m) && (p[m] = null);
    else if (Gt(m)) {
      m.value = null;
      const _ = t;
      _.k && (v[_.k] = null);
    }
  }
  if (et(d))
    fn(d, c, 12, [u, v]);
  else {
    const _ = $t(d), x = Gt(d);
    if (_ || x) {
      const C = () => {
        if (e.f) {
          const S = _ ? g(d) ? p[d] : v[d] : d.value;
          if (l)
            Xe(S) && rl(S, r);
          else if (Xe(S))
            S.includes(r) || S.push(r);
          else if (_)
            v[d] = [r], g(d) && (p[d] = v[d]);
          else {
            const T = [r];
            d.value = T, e.k && (v[e.k] = T);
          }
        } else _ ? (v[d] = u, g(d) && (p[d] = u)) : x && (d.value = u, e.k && (v[e.k] = u));
      };
      if (u) {
        const S = () => {
          C(), zn.delete(e);
        };
        S.id = -1, zn.set(e, S), qt(S, o);
      } else
        Wl(e), C();
    }
  }
}
function Wl(e) {
  const t = zn.get(e);
  t && (t.flags |= 8, zn.delete(e));
}
Xn().requestIdleCallback;
Xn().cancelIdleCallback;
const ko = (e) => !!e.type.__asyncLoader, ta = (e) => e.type.__isKeepAlive;
function $u(e, t) {
  wr(e, "a", t);
}
function Cu(e, t) {
  wr(e, "da", t);
}
function wr(e, t, o = Wt) {
  const n = e.__wdc || (e.__wdc = () => {
    let l = o;
    for (; l; ) {
      if (l.isDeactivated)
        return;
      l = l.parent;
    }
    return e();
  });
  if (sa(t, n, o), o) {
    let l = o.parent;
    for (; l && l.parent; )
      ta(l.parent.vnode) && xu(n, t, o, l), l = l.parent;
  }
}
function xu(e, t, o, n) {
  const l = sa(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  Mo(() => {
    rl(n[t], l);
  }, o);
}
function sa(e, t, o = Wt, n = !1) {
  if (o) {
    const l = o[e] || (o[e] = []), r = t.__weh || (t.__weh = (...u) => {
      Ds();
      const c = mn(o), d = ps(t, o, e, u);
      return c(), Os(), d;
    });
    return n ? l.unshift(r) : l.push(r), r;
  }
}
const As = (e) => (t, o = Wt) => {
  (!cn || e === "sp") && sa(e, (...n) => t(...n), o);
}, Su = As("bm"), rt = As("m"), Iu = As(
  "bu"
), _r = As("u"), oa = As(
  "bum"
), Mo = As("um"), Eu = As(
  "sp"
), Tu = As("rtg"), Mu = As("rtc");
function Pu(e, t = Wt) {
  sa("ec", e, t);
}
const Ru = "components", kr = Symbol.for("v-ndc");
function _l(e) {
  return $t(e) ? Lu(Ru, e, !1) || e : e || kr;
}
function Lu(e, t, o = !0, n = !1) {
  const l = Ut || Wt;
  if (l) {
    const r = l.type;
    {
      const c = kd(
        r,
        !1
      );
      if (c && (c === t || c === rs(t) || c === Qn(rs(t))))
        return r;
    }
    const u = (
      // local registration
      // check instance[type] first which is resolved for options API
      Gl(l[e] || r[e], t) || // global registration
      Gl(l.appContext[e], t)
    );
    return !u && n ? r : u;
  }
}
function Gl(e, t) {
  return e && (e[t] || e[rs(t)] || e[Qn(rs(t))]);
}
function he(e, t, o, n) {
  let l;
  const r = o, u = Xe(e);
  if (u || $t(e)) {
    const c = u && oo(e);
    let d = !1, m = !1;
    c && (d = !ls(e), m = Us(e), e = Zn(e)), l = new Array(e.length);
    for (let v = 0, p = e.length; v < p; v++)
      l[v] = t(
        d ? m ? So(vs(e[v])) : vs(e[v]) : e[v],
        v,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    l = new Array(e);
    for (let c = 0; c < e; c++)
      l[c] = t(c + 1, c, void 0, r);
  } else if (gt(e))
    if (e[Symbol.iterator])
      l = Array.from(
        e,
        (c, d) => t(c, d, void 0, r)
      );
    else {
      const c = Object.keys(e);
      l = new Array(c.length);
      for (let d = 0, m = c.length; d < m; d++) {
        const v = c[d];
        l[d] = t(e[v], v, d, r);
      }
    }
  else
    l = [];
  return l;
}
function Yt(e, t) {
  for (let o = 0; o < t.length; o++) {
    const n = t[o];
    if (Xe(n))
      for (let l = 0; l < n.length; l++)
        e[n[l].name] = n[l].fn;
    else n && (e[n.name] = n.key ? (...l) => {
      const r = n.fn(...l);
      return r && (r.key = n.key), r;
    } : n.fn);
  }
  return e;
}
function st(e, t, o = {}, n, l) {
  if (Ut.ce || Ut.parent && ko(Ut.parent) && Ut.parent.ce) {
    const m = Object.keys(o).length > 0;
    return t !== "default" && (o.name = t), a(), L(
      j,
      null,
      [b("slot", o, n && n())],
      m ? -2 : 64
    );
  }
  let r = e[t];
  r && r._c && (r._d = !1), a();
  const u = r && br(r(o)), c = o.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  u && u.key, d = L(
    j,
    {
      key: (c && !ms(c) ? c : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!u && n ? "_fb" : "")
    },
    u || (n ? n() : []),
    u && e._ === 1 ? 64 : -2
  );
  return r && r._c && (r._d = !0), d;
}
function br(e) {
  return e.some((t) => rn(t) ? !(t.type === Bt || t.type === j && !br(t.children)) : !0) ? e : null;
}
const Ka = (e) => e ? Vr(e) ? la(e) : Ka(e.parent) : null, Qo = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Mt(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Ka(e.parent),
    $root: (e) => Ka(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Cr(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      yl(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Pt.bind(e.proxy)),
    $watch: (e) => ju.bind(e)
  })
), Da = (e, t) => e !== ht && !e.__isScriptSetup && ft(e, t), Nu = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: o, setupState: n, data: l, props: r, accessCache: u, type: c, appContext: d } = e;
    if (t[0] !== "$") {
      const w = u[t];
      if (w !== void 0)
        switch (w) {
          case 1:
            return n[t];
          case 2:
            return l[t];
          case 4:
            return o[t];
          case 3:
            return r[t];
        }
      else {
        if (Da(n, t))
          return u[t] = 1, n[t];
        if (l !== ht && ft(l, t))
          return u[t] = 2, l[t];
        if (ft(r, t))
          return u[t] = 3, r[t];
        if (o !== ht && ft(o, t))
          return u[t] = 4, o[t];
        Ja && (u[t] = 0);
      }
    }
    const m = Qo[t];
    let v, p;
    if (m)
      return t === "$attrs" && Ft(e.attrs, "get", ""), m(e);
    if (
      // css module (injected by vue-loader)
      (v = c.__cssModules) && (v = v[t])
    )
      return v;
    if (o !== ht && ft(o, t))
      return u[t] = 4, o[t];
    if (
      // global properties
      p = d.config.globalProperties, ft(p, t)
    )
      return p[t];
  },
  set({ _: e }, t, o) {
    const { data: n, setupState: l, ctx: r } = e;
    return Da(l, t) ? (l[t] = o, !0) : n !== ht && ft(n, t) ? (n[t] = o, !0) : ft(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = o, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: o, ctx: n, appContext: l, props: r, type: u }
  }, c) {
    let d;
    return !!(o[c] || e !== ht && c[0] !== "$" && ft(e, c) || Da(t, c) || ft(r, c) || ft(n, c) || ft(Qo, c) || ft(l.config.globalProperties, c) || (d = u.__cssModules) && d[c]);
  },
  defineProperty(e, t, o) {
    return o.get != null ? e._.accessCache[t] = 0 : ft(o, "value") && this.set(e, t, o.value, null), Reflect.defineProperty(e, t, o);
  }
};
function jl(e) {
  return Xe(e) ? e.reduce(
    (t, o) => (t[o] = null, t),
    {}
  ) : e;
}
let Ja = !0;
function Du(e) {
  const t = Cr(e), o = e.proxy, n = e.ctx;
  Ja = !1, t.beforeCreate && Hl(t.beforeCreate, e, "bc");
  const {
    // state
    data: l,
    computed: r,
    methods: u,
    watch: c,
    provide: d,
    inject: m,
    // lifecycle
    created: v,
    beforeMount: p,
    mounted: w,
    beforeUpdate: g,
    updated: _,
    activated: x,
    deactivated: C,
    beforeDestroy: S,
    beforeUnmount: T,
    destroyed: M,
    unmounted: P,
    render: D,
    renderTracked: N,
    renderTriggered: O,
    errorCaptured: E,
    serverPrefetch: K,
    // public API
    expose: ae,
    inheritAttrs: fe,
    // assets
    components: ue,
    directives: we,
    filters: X
  } = t;
  if (m && Ou(m, n, null), u)
    for (const Re in u) {
      const se = u[Re];
      et(se) && (n[Re] = se.bind(o));
    }
  if (l) {
    const Re = l.call(o, o);
    gt(Re) && (e.data = ro(Re));
  }
  if (Ja = !0, r)
    for (const Re in r) {
      const se = r[Re], ge = et(se) ? se.bind(o, o) : et(se.get) ? se.get.bind(o, o) : Cs, z = !et(se) && et(se.set) ? se.set.bind(o) : Cs, me = R({
        get: ge,
        set: z
      });
      Object.defineProperty(n, Re, {
        enumerable: !0,
        configurable: !0,
        get: () => me.value,
        set: (Pe) => me.value = Pe
      });
    }
  if (c)
    for (const Re in c)
      $r(c[Re], n, o, Re);
  if (d) {
    const Re = et(d) ? d.call(o) : d;
    Reflect.ownKeys(Re).forEach((se) => {
      Bu(se, Re[se]);
    });
  }
  v && Hl(v, e, "c");
  function Y(Re, se) {
    Xe(se) ? se.forEach((ge) => Re(ge.bind(o))) : se && Re(se.bind(o));
  }
  if (Y(Su, p), Y(rt, w), Y(Iu, g), Y(_r, _), Y($u, x), Y(Cu, C), Y(Pu, E), Y(Mu, N), Y(Tu, O), Y(oa, T), Y(Mo, P), Y(Eu, K), Xe(ae))
    if (ae.length) {
      const Re = e.exposed || (e.exposed = {});
      ae.forEach((se) => {
        Object.defineProperty(Re, se, {
          get: () => o[se],
          set: (ge) => o[se] = ge,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  D && e.render === Cs && (e.render = D), fe != null && (e.inheritAttrs = fe), ue && (e.components = ue), we && (e.directives = we), K && yr(e);
}
function Ou(e, t, o = Cs) {
  Xe(e) && (e = Qa(e));
  for (const n in e) {
    const l = e[n];
    let r;
    gt(l) ? "default" in l ? r = En(
      l.from || n,
      l.default,
      !0
    ) : r = En(l.from || n) : r = En(l), Gt(r) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (u) => r.value = u
    }) : t[n] = r;
  }
}
function Hl(e, t, o) {
  ps(
    Xe(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    o
  );
}
function $r(e, t, o, n) {
  let l = n.includes(".") ? Ir(o, n) : () => o[n];
  if ($t(e)) {
    const r = t[e];
    et(r) && kt(l, r);
  } else if (et(e))
    kt(l, e.bind(o));
  else if (gt(e))
    if (Xe(e))
      e.forEach((r) => $r(r, t, o, n));
    else {
      const r = et(e.handler) ? e.handler.bind(o) : t[e.handler];
      et(r) && kt(l, r, e);
    }
}
function Cr(e) {
  const t = e.type, { mixins: o, extends: n } = t, {
    mixins: l,
    optionsCache: r,
    config: { optionMergeStrategies: u }
  } = e.appContext, c = r.get(t);
  let d;
  return c ? d = c : !l.length && !o && !n ? d = t : (d = {}, l.length && l.forEach(
    (m) => Fn(d, m, u, !0)
  ), Fn(d, t, u)), gt(t) && r.set(t, d), d;
}
function Fn(e, t, o, n = !1) {
  const { mixins: l, extends: r } = t;
  r && Fn(e, r, o, !0), l && l.forEach(
    (u) => Fn(e, u, o, !0)
  );
  for (const u in t)
    if (!(n && u === "expose")) {
      const c = Uu[u] || o && o[u];
      e[u] = c ? c(e[u], t[u]) : t[u];
    }
  return e;
}
const Uu = {
  data: ql,
  props: Kl,
  emits: Kl,
  // objects
  methods: Wo,
  computed: Wo,
  // lifecycle
  beforeCreate: Ht,
  created: Ht,
  beforeMount: Ht,
  mounted: Ht,
  beforeUpdate: Ht,
  updated: Ht,
  beforeDestroy: Ht,
  beforeUnmount: Ht,
  destroyed: Ht,
  unmounted: Ht,
  activated: Ht,
  deactivated: Ht,
  errorCaptured: Ht,
  serverPrefetch: Ht,
  // assets
  components: Wo,
  directives: Wo,
  // watch
  watch: zu,
  // provide / inject
  provide: ql,
  inject: Au
};
function ql(e, t) {
  return t ? e ? function() {
    return Mt(
      et(e) ? e.call(this, this) : e,
      et(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Au(e, t) {
  return Wo(Qa(e), Qa(t));
}
function Qa(e) {
  if (Xe(e)) {
    const t = {};
    for (let o = 0; o < e.length; o++)
      t[e[o]] = e[o];
    return t;
  }
  return e;
}
function Ht(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Wo(e, t) {
  return e ? Mt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Kl(e, t) {
  return e ? Xe(e) && Xe(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Mt(
    /* @__PURE__ */ Object.create(null),
    jl(e),
    jl(t ?? {})
  ) : t;
}
function zu(e, t) {
  if (!e) return t;
  if (!t) return e;
  const o = Mt(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    o[n] = Ht(e[n], t[n]);
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
let Fu = 0;
function Vu(e, t) {
  return function(n, l = null) {
    et(n) || (n = Mt({}, n)), l != null && !gt(l) && (l = null);
    const r = xr(), u = /* @__PURE__ */ new WeakSet(), c = [];
    let d = !1;
    const m = r.app = {
      _uid: Fu++,
      _component: n,
      _props: l,
      _container: null,
      _context: r,
      _instance: null,
      version: $d,
      get config() {
        return r.config;
      },
      set config(v) {
      },
      use(v, ...p) {
        return u.has(v) || (v && et(v.install) ? (u.add(v), v.install(m, ...p)) : et(v) && (u.add(v), v(m, ...p))), m;
      },
      mixin(v) {
        return r.mixins.includes(v) || r.mixins.push(v), m;
      },
      component(v, p) {
        return p ? (r.components[v] = p, m) : r.components[v];
      },
      directive(v, p) {
        return p ? (r.directives[v] = p, m) : r.directives[v];
      },
      mount(v, p, w) {
        if (!d) {
          const g = m._ceVNode || b(n, l);
          return g.appContext = r, w === !0 ? w = "svg" : w === !1 && (w = void 0), e(g, v, w), d = !0, m._container = v, v.__vue_app__ = m, la(g.component);
        }
      },
      onUnmount(v) {
        c.push(v);
      },
      unmount() {
        d && (ps(
          c,
          m._instance,
          16
        ), e(null, m._container), delete m._container.__vue_app__);
      },
      provide(v, p) {
        return r.provides[v] = p, m;
      },
      runWithContext(v) {
        const p = bo;
        bo = m;
        try {
          return v();
        } finally {
          bo = p;
        }
      }
    };
    return m;
  };
}
let bo = null;
function Bu(e, t) {
  if (Wt) {
    let o = Wt.provides;
    const n = Wt.parent && Wt.parent.provides;
    n === o && (o = Wt.provides = Object.create(n)), o[e] = t;
  }
}
function En(e, t, o = !1) {
  const n = xl();
  if (n || bo) {
    let l = bo ? bo._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (l && e in l)
      return l[e];
    if (arguments.length > 1)
      return o && et(t) ? t.call(n && n.proxy) : t;
  }
}
const Wu = Symbol.for("v-scx"), Gu = () => En(Wu);
function kt(e, t, o) {
  return Sr(e, t, o);
}
function Sr(e, t, o = ht) {
  const { immediate: n, deep: l, flush: r, once: u } = o, c = Mt({}, o), d = t && n || !t && r !== "post";
  let m;
  if (cn) {
    if (r === "sync") {
      const g = Gu();
      m = g.__watcherHandles || (g.__watcherHandles = []);
    } else if (!d) {
      const g = () => {
      };
      return g.stop = Cs, g.resume = Cs, g.pause = Cs, g;
    }
  }
  const v = Wt;
  c.call = (g, _, x) => ps(g, v, _, x);
  let p = !1;
  r === "post" ? c.scheduler = (g) => {
    qt(g, v && v.suspense);
  } : r !== "sync" && (p = !0, c.scheduler = (g, _) => {
    _ ? g() : yl(g);
  }), c.augmentJob = (g) => {
    t && (g.flags |= 4), p && (g.flags |= 2, v && (g.id = v.uid, g.i = v));
  };
  const w = gu(e, t, c);
  return cn && (m ? m.push(w) : d && w()), w;
}
function ju(e, t, o) {
  const n = this.proxy, l = $t(e) ? e.includes(".") ? Ir(n, e) : () => n[e] : e.bind(n, n);
  let r;
  et(t) ? r = t : (r = t.handler, o = t);
  const u = mn(this), c = Sr(l, r.bind(n), o);
  return u(), c;
}
function Ir(e, t) {
  const o = t.split(".");
  return () => {
    let n = e;
    for (let l = 0; l < o.length && n; l++)
      n = n[o[l]];
    return n;
  };
}
const Hu = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${rs(t)}Modifiers`] || e[`${Ks(t)}Modifiers`];
function qu(e, t, ...o) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || ht;
  let l = o;
  const r = t.startsWith("update:"), u = r && Hu(n, t.slice(7));
  u && (u.trim && (l = o.map((v) => $t(v) ? v.trim() : v)), u.number && (l = o.map(Yn)));
  let c, d = n[c = Ta(t)] || // also try camelCase event handler (#2249)
  n[c = Ta(rs(t))];
  !d && r && (d = n[c = Ta(Ks(t))]), d && ps(
    d,
    e,
    6,
    l
  );
  const m = n[c + "Once"];
  if (m) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[c])
      return;
    e.emitted[c] = !0, ps(
      m,
      e,
      6,
      l
    );
  }
}
const Ku = /* @__PURE__ */ new WeakMap();
function Er(e, t, o = !1) {
  const n = o ? Ku : t.emitsCache, l = n.get(e);
  if (l !== void 0)
    return l;
  const r = e.emits;
  let u = {}, c = !1;
  if (!et(e)) {
    const d = (m) => {
      const v = Er(m, t, !0);
      v && (c = !0, Mt(u, v));
    };
    !o && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  return !r && !c ? (gt(e) && n.set(e, null), null) : (Xe(r) ? r.forEach((d) => u[d] = null) : Mt(u, r), gt(e) && n.set(e, u), u);
}
function na(e, t) {
  return !e || !Kn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), ft(e, t[0].toLowerCase() + t.slice(1)) || ft(e, Ks(t)) || ft(e, t));
}
function Jl(e) {
  const {
    type: t,
    vnode: o,
    proxy: n,
    withProxy: l,
    propsOptions: [r],
    slots: u,
    attrs: c,
    emit: d,
    render: m,
    renderCache: v,
    props: p,
    data: w,
    setupState: g,
    ctx: _,
    inheritAttrs: x
  } = e, C = An(e);
  let S, T;
  try {
    if (o.shapeFlag & 4) {
      const P = l || n, D = P;
      S = bs(
        m.call(
          D,
          P,
          v,
          p,
          g,
          w,
          _
        )
      ), T = c;
    } else {
      const P = t;
      S = bs(
        P.length > 1 ? P(
          p,
          { attrs: c, slots: u, emit: d }
        ) : P(
          p,
          null
        )
      ), T = t.props ? c : Ju(c);
    }
  } catch (P) {
    Yo.length = 0, ea(P, e, 1), S = b(Bt);
  }
  let M = S;
  if (T && x !== !1) {
    const P = Object.keys(T), { shapeFlag: D } = M;
    P.length && D & 7 && (r && P.some(il) && (T = Qu(
      T,
      r
    )), M = Hs(M, T, !1, !0));
  }
  return o.dirs && (M = Hs(M, null, !1, !0), M.dirs = M.dirs ? M.dirs.concat(o.dirs) : o.dirs), o.transition && lo(M, o.transition), S = M, An(C), S;
}
const Ju = (e) => {
  let t;
  for (const o in e)
    (o === "class" || o === "style" || Kn(o)) && ((t || (t = {}))[o] = e[o]);
  return t;
}, Qu = (e, t) => {
  const o = {};
  for (const n in e)
    (!il(n) || !(n.slice(9) in t)) && (o[n] = e[n]);
  return o;
};
function Yu(e, t, o) {
  const { props: n, children: l, component: r } = e, { props: u, children: c, patchFlag: d } = t, m = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (o && d >= 0) {
    if (d & 1024)
      return !0;
    if (d & 16)
      return n ? Ql(n, u, m) : !!u;
    if (d & 8) {
      const v = t.dynamicProps;
      for (let p = 0; p < v.length; p++) {
        const w = v[p];
        if (u[w] !== n[w] && !na(m, w))
          return !0;
      }
    }
  } else
    return (l || c) && (!c || !c.$stable) ? !0 : n === u ? !1 : n ? u ? Ql(n, u, m) : !0 : !!u;
  return !1;
}
function Ql(e, t, o) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let l = 0; l < n.length; l++) {
    const r = n[l];
    if (t[r] !== e[r] && !na(o, r))
      return !0;
  }
  return !1;
}
function Xu({ vnode: e, parent: t }, o) {
  for (; t; ) {
    const n = t.subTree;
    if (n.suspense && n.suspense.activeBranch === e && (n.el = e.el), n === e)
      (e = t.vnode).el = o, t = t.parent;
    else
      break;
  }
}
const Tr = {}, Mr = () => Object.create(Tr), Pr = (e) => Object.getPrototypeOf(e) === Tr;
function Zu(e, t, o, n = !1) {
  const l = {}, r = Mr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Rr(e, t, l, r);
  for (const u in e.propsOptions[0])
    u in l || (l[u] = void 0);
  o ? e.props = n ? l : ru(l) : e.type.props ? e.props = l : e.props = r, e.attrs = r;
}
function ed(e, t, o, n) {
  const {
    props: l,
    attrs: r,
    vnode: { patchFlag: u }
  } = e, c = ct(l), [d] = e.propsOptions;
  let m = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || u > 0) && !(u & 16)
  ) {
    if (u & 8) {
      const v = e.vnode.dynamicProps;
      for (let p = 0; p < v.length; p++) {
        let w = v[p];
        if (na(e.emitsOptions, w))
          continue;
        const g = t[w];
        if (d)
          if (ft(r, w))
            g !== r[w] && (r[w] = g, m = !0);
          else {
            const _ = rs(w);
            l[_] = Ya(
              d,
              c,
              _,
              g,
              e,
              !1
            );
          }
        else
          g !== r[w] && (r[w] = g, m = !0);
      }
    }
  } else {
    Rr(e, t, l, r) && (m = !0);
    let v;
    for (const p in c)
      (!t || // for camelCase
      !ft(t, p) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((v = Ks(p)) === p || !ft(t, v))) && (d ? o && // for camelCase
      (o[p] !== void 0 || // for kebab-case
      o[v] !== void 0) && (l[p] = Ya(
        d,
        c,
        p,
        void 0,
        e,
        !0
      )) : delete l[p]);
    if (r !== c)
      for (const p in r)
        (!t || !ft(t, p)) && (delete r[p], m = !0);
  }
  m && Rs(e.attrs, "set", "");
}
function Rr(e, t, o, n) {
  const [l, r] = e.propsOptions;
  let u = !1, c;
  if (t)
    for (let d in t) {
      if (jo(d))
        continue;
      const m = t[d];
      let v;
      l && ft(l, v = rs(d)) ? !r || !r.includes(v) ? o[v] = m : (c || (c = {}))[v] = m : na(e.emitsOptions, d) || (!(d in n) || m !== n[d]) && (n[d] = m, u = !0);
    }
  if (r) {
    const d = ct(o), m = c || ht;
    for (let v = 0; v < r.length; v++) {
      const p = r[v];
      o[p] = Ya(
        l,
        d,
        p,
        m[p],
        e,
        !ft(m, p)
      );
    }
  }
  return u;
}
function Ya(e, t, o, n, l, r) {
  const u = e[o];
  if (u != null) {
    const c = ft(u, "default");
    if (c && n === void 0) {
      const d = u.default;
      if (u.type !== Function && !u.skipFactory && et(d)) {
        const { propsDefaults: m } = l;
        if (o in m)
          n = m[o];
        else {
          const v = mn(l);
          n = m[o] = d.call(
            null,
            t
          ), v();
        }
      } else
        n = d;
      l.ce && l.ce._setProp(o, n);
    }
    u[
      0
      /* shouldCast */
    ] && (r && !c ? n = !1 : u[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === Ks(o)) && (n = !0));
  }
  return n;
}
const td = /* @__PURE__ */ new WeakMap();
function Lr(e, t, o = !1) {
  const n = o ? td : t.propsCache, l = n.get(e);
  if (l)
    return l;
  const r = e.props, u = {}, c = [];
  let d = !1;
  if (!et(e)) {
    const v = (p) => {
      d = !0;
      const [w, g] = Lr(p, t, !0);
      Mt(u, w), g && c.push(...g);
    };
    !o && t.mixins.length && t.mixins.forEach(v), e.extends && v(e.extends), e.mixins && e.mixins.forEach(v);
  }
  if (!r && !d)
    return gt(e) && n.set(e, yo), yo;
  if (Xe(r))
    for (let v = 0; v < r.length; v++) {
      const p = rs(r[v]);
      Yl(p) && (u[p] = ht);
    }
  else if (r)
    for (const v in r) {
      const p = rs(v);
      if (Yl(p)) {
        const w = r[v], g = u[p] = Xe(w) || et(w) ? { type: w } : Mt({}, w), _ = g.type;
        let x = !1, C = !0;
        if (Xe(_))
          for (let S = 0; S < _.length; ++S) {
            const T = _[S], M = et(T) && T.name;
            if (M === "Boolean") {
              x = !0;
              break;
            } else M === "String" && (C = !1);
          }
        else
          x = et(_) && _.name === "Boolean";
        g[
          0
          /* shouldCast */
        ] = x, g[
          1
          /* shouldCastTrue */
        ] = C, (x || ft(g, "default")) && c.push(p);
      }
    }
  const m = [u, c];
  return gt(e) && n.set(e, m), m;
}
function Yl(e) {
  return e[0] !== "$" && !jo(e);
}
const kl = (e) => e === "_" || e === "_ctx" || e === "$stable", bl = (e) => Xe(e) ? e.map(bs) : [bs(e)], sd = (e, t, o) => {
  if (t._n)
    return t;
  const n = h((...l) => bl(t(...l)), o);
  return n._c = !1, n;
}, Nr = (e, t, o) => {
  const n = e._ctx;
  for (const l in e) {
    if (kl(l)) continue;
    const r = e[l];
    if (et(r))
      t[l] = sd(l, r, n);
    else if (r != null) {
      const u = bl(r);
      t[l] = () => u;
    }
  }
}, Dr = (e, t) => {
  const o = bl(t);
  e.slots.default = () => o;
}, Or = (e, t, o) => {
  for (const n in t)
    (o || !kl(n)) && (e[n] = t[n]);
}, od = (e, t, o) => {
  const n = e.slots = Mr();
  if (e.vnode.shapeFlag & 32) {
    const l = t._;
    l ? (Or(n, t, o), o && zi(n, "_", l, !0)) : Nr(t, n);
  } else t && Dr(e, t);
}, nd = (e, t, o) => {
  const { vnode: n, slots: l } = e;
  let r = !0, u = ht;
  if (n.shapeFlag & 32) {
    const c = t._;
    c ? o && c === 1 ? r = !1 : Or(l, t, o) : (r = !t.$stable, Nr(t, l)), u = t;
  } else t && (Dr(e, t), u = { default: 1 });
  if (r)
    for (const c in l)
      !kl(c) && u[c] == null && delete l[c];
}, qt = cd;
function ad(e) {
  return ld(e);
}
function ld(e, t) {
  const o = Xn();
  o.__VUE__ = !0;
  const {
    insert: n,
    remove: l,
    patchProp: r,
    createElement: u,
    createText: c,
    createComment: d,
    setText: m,
    setElementText: v,
    parentNode: p,
    nextSibling: w,
    setScopeId: g = Cs,
    insertStaticContent: _
  } = e, x = (I, V, ie, Ce = null, _e = null, $e = null, Ue = void 0, ze = null, Le = !!V.dynamicChildren) => {
    if (I === V)
      return;
    I && !to(I, V) && (Ce = q(I), Pe(I, _e, $e, !0), I = null), V.patchFlag === -2 && (Le = !1, V.dynamicChildren = null);
    const { type: Ie, ref: Ke, shapeFlag: Ve } = V;
    switch (Ie) {
      case aa:
        C(I, V, ie, Ce);
        break;
      case Bt:
        S(I, V, ie, Ce);
        break;
      case Ua:
        I == null && T(V, ie, Ce, Ue);
        break;
      case j:
        ue(
          I,
          V,
          ie,
          Ce,
          _e,
          $e,
          Ue,
          ze,
          Le
        );
        break;
      default:
        Ve & 1 ? D(
          I,
          V,
          ie,
          Ce,
          _e,
          $e,
          Ue,
          ze,
          Le
        ) : Ve & 6 ? we(
          I,
          V,
          ie,
          Ce,
          _e,
          $e,
          Ue,
          ze,
          Le
        ) : (Ve & 64 || Ve & 128) && Ie.process(
          I,
          V,
          ie,
          Ce,
          _e,
          $e,
          Ue,
          ze,
          Le,
          ce
        );
    }
    Ke != null && _e ? Jo(Ke, I && I.ref, $e, V || I, !V) : Ke == null && I && I.ref != null && Jo(I.ref, null, $e, I, !0);
  }, C = (I, V, ie, Ce) => {
    if (I == null)
      n(
        V.el = c(V.children),
        ie,
        Ce
      );
    else {
      const _e = V.el = I.el;
      V.children !== I.children && m(_e, V.children);
    }
  }, S = (I, V, ie, Ce) => {
    I == null ? n(
      V.el = d(V.children || ""),
      ie,
      Ce
    ) : V.el = I.el;
  }, T = (I, V, ie, Ce) => {
    [I.el, I.anchor] = _(
      I.children,
      V,
      ie,
      Ce,
      I.el,
      I.anchor
    );
  }, M = ({ el: I, anchor: V }, ie, Ce) => {
    let _e;
    for (; I && I !== V; )
      _e = w(I), n(I, ie, Ce), I = _e;
    n(V, ie, Ce);
  }, P = ({ el: I, anchor: V }) => {
    let ie;
    for (; I && I !== V; )
      ie = w(I), l(I), I = ie;
    l(V);
  }, D = (I, V, ie, Ce, _e, $e, Ue, ze, Le) => {
    if (V.type === "svg" ? Ue = "svg" : V.type === "math" && (Ue = "mathml"), I == null)
      N(
        V,
        ie,
        Ce,
        _e,
        $e,
        Ue,
        ze,
        Le
      );
    else {
      const Ie = I.el && I.el._isVueCE ? I.el : null;
      try {
        Ie && Ie._beginPatch(), K(
          I,
          V,
          _e,
          $e,
          Ue,
          ze,
          Le
        );
      } finally {
        Ie && Ie._endPatch();
      }
    }
  }, N = (I, V, ie, Ce, _e, $e, Ue, ze) => {
    let Le, Ie;
    const { props: Ke, shapeFlag: Ve, transition: ve, dirs: Q } = I;
    if (Le = I.el = u(
      I.type,
      $e,
      Ke && Ke.is,
      Ke
    ), Ve & 8 ? v(Le, I.children) : Ve & 16 && E(
      I.children,
      Le,
      null,
      Ce,
      _e,
      Oa(I, $e),
      Ue,
      ze
    ), Q && Qs(I, null, Ce, "created"), O(Le, I, I.scopeId, Ue, Ce), Ke) {
      for (const ke in Ke)
        ke !== "value" && !jo(ke) && r(Le, ke, null, Ke[ke], $e, Ce);
      "value" in Ke && r(Le, "value", null, Ke.value, $e), (Ie = Ke.onVnodeBeforeMount) && hs(Ie, Ce, I);
    }
    Q && Qs(I, null, Ce, "beforeMount");
    const He = id(_e, ve);
    He && ve.beforeEnter(Le), n(Le, V, ie), ((Ie = Ke && Ke.onVnodeMounted) || He || Q) && qt(() => {
      Ie && hs(Ie, Ce, I), He && ve.enter(Le), Q && Qs(I, null, Ce, "mounted");
    }, _e);
  }, O = (I, V, ie, Ce, _e) => {
    if (ie && g(I, ie), Ce)
      for (let $e = 0; $e < Ce.length; $e++)
        g(I, Ce[$e]);
    if (_e) {
      let $e = _e.subTree;
      if (V === $e || Ar($e.type) && ($e.ssContent === V || $e.ssFallback === V)) {
        const Ue = _e.vnode;
        O(
          I,
          Ue,
          Ue.scopeId,
          Ue.slotScopeIds,
          _e.parent
        );
      }
    }
  }, E = (I, V, ie, Ce, _e, $e, Ue, ze, Le = 0) => {
    for (let Ie = Le; Ie < I.length; Ie++) {
      const Ke = I[Ie] = ze ? Gs(I[Ie]) : bs(I[Ie]);
      x(
        null,
        Ke,
        V,
        ie,
        Ce,
        _e,
        $e,
        Ue,
        ze
      );
    }
  }, K = (I, V, ie, Ce, _e, $e, Ue) => {
    const ze = V.el = I.el;
    let { patchFlag: Le, dynamicChildren: Ie, dirs: Ke } = V;
    Le |= I.patchFlag & 16;
    const Ve = I.props || ht, ve = V.props || ht;
    let Q;
    if (ie && Ys(ie, !1), (Q = ve.onVnodeBeforeUpdate) && hs(Q, ie, V, I), Ke && Qs(V, I, ie, "beforeUpdate"), ie && Ys(ie, !0), (Ve.innerHTML && ve.innerHTML == null || Ve.textContent && ve.textContent == null) && v(ze, ""), Ie ? ae(
      I.dynamicChildren,
      Ie,
      ze,
      ie,
      Ce,
      Oa(V, _e),
      $e
    ) : Ue || se(
      I,
      V,
      ze,
      null,
      ie,
      Ce,
      Oa(V, _e),
      $e,
      !1
    ), Le > 0) {
      if (Le & 16)
        fe(ze, Ve, ve, ie, _e);
      else if (Le & 2 && Ve.class !== ve.class && r(ze, "class", null, ve.class, _e), Le & 4 && r(ze, "style", Ve.style, ve.style, _e), Le & 8) {
        const He = V.dynamicProps;
        for (let ke = 0; ke < He.length; ke++) {
          const Ye = He[ke], ot = Ve[Ye], Ae = ve[Ye];
          (Ae !== ot || Ye === "value") && r(ze, Ye, ot, Ae, _e, ie);
        }
      }
      Le & 1 && I.children !== V.children && v(ze, V.children);
    } else !Ue && Ie == null && fe(ze, Ve, ve, ie, _e);
    ((Q = ve.onVnodeUpdated) || Ke) && qt(() => {
      Q && hs(Q, ie, V, I), Ke && Qs(V, I, ie, "updated");
    }, Ce);
  }, ae = (I, V, ie, Ce, _e, $e, Ue) => {
    for (let ze = 0; ze < V.length; ze++) {
      const Le = I[ze], Ie = V[ze], Ke = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        Le.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (Le.type === j || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !to(Le, Ie) || // - In the case of a component, it could contain anything.
        Le.shapeFlag & 198) ? p(Le.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          ie
        )
      );
      x(
        Le,
        Ie,
        Ke,
        null,
        Ce,
        _e,
        $e,
        Ue,
        !0
      );
    }
  }, fe = (I, V, ie, Ce, _e) => {
    if (V !== ie) {
      if (V !== ht)
        for (const $e in V)
          !jo($e) && !($e in ie) && r(
            I,
            $e,
            V[$e],
            null,
            _e,
            Ce
          );
      for (const $e in ie) {
        if (jo($e)) continue;
        const Ue = ie[$e], ze = V[$e];
        Ue !== ze && $e !== "value" && r(I, $e, ze, Ue, _e, Ce);
      }
      "value" in ie && r(I, "value", V.value, ie.value, _e);
    }
  }, ue = (I, V, ie, Ce, _e, $e, Ue, ze, Le) => {
    const Ie = V.el = I ? I.el : c(""), Ke = V.anchor = I ? I.anchor : c("");
    let { patchFlag: Ve, dynamicChildren: ve, slotScopeIds: Q } = V;
    Q && (ze = ze ? ze.concat(Q) : Q), I == null ? (n(Ie, ie, Ce), n(Ke, ie, Ce), E(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      V.children || [],
      ie,
      Ke,
      _e,
      $e,
      Ue,
      ze,
      Le
    )) : Ve > 0 && Ve & 64 && ve && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    I.dynamicChildren ? (ae(
      I.dynamicChildren,
      ve,
      ie,
      _e,
      $e,
      Ue,
      ze
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (V.key != null || _e && V === _e.subTree) && $l(
      I,
      V,
      !0
      /* shallow */
    )) : se(
      I,
      V,
      ie,
      Ke,
      _e,
      $e,
      Ue,
      ze,
      Le
    );
  }, we = (I, V, ie, Ce, _e, $e, Ue, ze, Le) => {
    V.slotScopeIds = ze, I == null ? V.shapeFlag & 512 ? _e.ctx.activate(
      V,
      ie,
      Ce,
      Ue,
      Le
    ) : X(
      V,
      ie,
      Ce,
      _e,
      $e,
      Ue,
      Le
    ) : G(I, V, Le);
  }, X = (I, V, ie, Ce, _e, $e, Ue) => {
    const ze = I.component = gd(
      I,
      Ce,
      _e
    );
    if (ta(I) && (ze.ctx.renderer = ce), hd(ze, !1, Ue), ze.asyncDep) {
      if (_e && _e.registerDep(ze, Y, Ue), !I.el) {
        const Le = ze.subTree = b(Bt);
        S(null, Le, V, ie), I.placeholder = Le.el;
      }
    } else
      Y(
        ze,
        I,
        V,
        ie,
        _e,
        $e,
        Ue
      );
  }, G = (I, V, ie) => {
    const Ce = V.component = I.component;
    if (Yu(I, V, ie))
      if (Ce.asyncDep && !Ce.asyncResolved) {
        Re(Ce, V, ie);
        return;
      } else
        Ce.next = V, Ce.update();
    else
      V.el = I.el, Ce.vnode = V;
  }, Y = (I, V, ie, Ce, _e, $e, Ue) => {
    const ze = () => {
      if (I.isMounted) {
        let { next: Ve, bu: ve, u: Q, parent: He, vnode: ke } = I;
        {
          const oe = Ur(I);
          if (oe) {
            Ve && (Ve.el = ke.el, Re(I, Ve, Ue)), oe.asyncDep.then(() => {
              I.isUnmounted || ze();
            });
            return;
          }
        }
        let Ye = Ve, ot;
        Ys(I, !1), Ve ? (Ve.el = ke.el, Re(I, Ve, Ue)) : Ve = ke, ve && Sn(ve), (ot = Ve.props && Ve.props.onVnodeBeforeUpdate) && hs(ot, He, Ve, ke), Ys(I, !0);
        const Ae = Jl(I), A = I.subTree;
        I.subTree = Ae, x(
          A,
          Ae,
          // parent may have changed if it's in a teleport
          p(A.el),
          // anchor may have changed if it's in a fragment
          q(A),
          I,
          _e,
          $e
        ), Ve.el = Ae.el, Ye === null && Xu(I, Ae.el), Q && qt(Q, _e), (ot = Ve.props && Ve.props.onVnodeUpdated) && qt(
          () => hs(ot, He, Ve, ke),
          _e
        );
      } else {
        let Ve;
        const { el: ve, props: Q } = V, { bm: He, m: ke, parent: Ye, root: ot, type: Ae } = I, A = ko(V);
        Ys(I, !1), He && Sn(He), !A && (Ve = Q && Q.onVnodeBeforeMount) && hs(Ve, Ye, V), Ys(I, !0);
        {
          ot.ce && // @ts-expect-error _def is private
          ot.ce._def.shadowRoot !== !1 && ot.ce._injectChildStyle(Ae);
          const oe = I.subTree = Jl(I);
          x(
            null,
            oe,
            ie,
            Ce,
            I,
            _e,
            $e
          ), V.el = oe.el;
        }
        if (ke && qt(ke, _e), !A && (Ve = Q && Q.onVnodeMounted)) {
          const oe = V;
          qt(
            () => hs(Ve, Ye, oe),
            _e
          );
        }
        (V.shapeFlag & 256 || Ye && ko(Ye.vnode) && Ye.vnode.shapeFlag & 256) && I.a && qt(I.a, _e), I.isMounted = !0, V = ie = Ce = null;
      }
    };
    I.scope.on();
    const Le = I.effect = new Wi(ze);
    I.scope.off();
    const Ie = I.update = Le.run.bind(Le), Ke = I.job = Le.runIfDirty.bind(Le);
    Ke.i = I, Ke.id = I.uid, Le.scheduler = () => yl(Ke), Ys(I, !0), Ie();
  }, Re = (I, V, ie) => {
    V.component = I;
    const Ce = I.vnode.props;
    I.vnode = V, I.next = null, ed(I, V.props, Ce, ie), nd(I, V.children, ie), Ds(), Al(I), Os();
  }, se = (I, V, ie, Ce, _e, $e, Ue, ze, Le = !1) => {
    const Ie = I && I.children, Ke = I ? I.shapeFlag : 0, Ve = V.children, { patchFlag: ve, shapeFlag: Q } = V;
    if (ve > 0) {
      if (ve & 128) {
        z(
          Ie,
          Ve,
          ie,
          Ce,
          _e,
          $e,
          Ue,
          ze,
          Le
        );
        return;
      } else if (ve & 256) {
        ge(
          Ie,
          Ve,
          ie,
          Ce,
          _e,
          $e,
          Ue,
          ze,
          Le
        );
        return;
      }
    }
    Q & 8 ? (Ke & 16 && ee(Ie, _e, $e), Ve !== Ie && v(ie, Ve)) : Ke & 16 ? Q & 16 ? z(
      Ie,
      Ve,
      ie,
      Ce,
      _e,
      $e,
      Ue,
      ze,
      Le
    ) : ee(Ie, _e, $e, !0) : (Ke & 8 && v(ie, ""), Q & 16 && E(
      Ve,
      ie,
      Ce,
      _e,
      $e,
      Ue,
      ze,
      Le
    ));
  }, ge = (I, V, ie, Ce, _e, $e, Ue, ze, Le) => {
    I = I || yo, V = V || yo;
    const Ie = I.length, Ke = V.length, Ve = Math.min(Ie, Ke);
    let ve;
    for (ve = 0; ve < Ve; ve++) {
      const Q = V[ve] = Le ? Gs(V[ve]) : bs(V[ve]);
      x(
        I[ve],
        Q,
        ie,
        null,
        _e,
        $e,
        Ue,
        ze,
        Le
      );
    }
    Ie > Ke ? ee(
      I,
      _e,
      $e,
      !0,
      !1,
      Ve
    ) : E(
      V,
      ie,
      Ce,
      _e,
      $e,
      Ue,
      ze,
      Le,
      Ve
    );
  }, z = (I, V, ie, Ce, _e, $e, Ue, ze, Le) => {
    let Ie = 0;
    const Ke = V.length;
    let Ve = I.length - 1, ve = Ke - 1;
    for (; Ie <= Ve && Ie <= ve; ) {
      const Q = I[Ie], He = V[Ie] = Le ? Gs(V[Ie]) : bs(V[Ie]);
      if (to(Q, He))
        x(
          Q,
          He,
          ie,
          null,
          _e,
          $e,
          Ue,
          ze,
          Le
        );
      else
        break;
      Ie++;
    }
    for (; Ie <= Ve && Ie <= ve; ) {
      const Q = I[Ve], He = V[ve] = Le ? Gs(V[ve]) : bs(V[ve]);
      if (to(Q, He))
        x(
          Q,
          He,
          ie,
          null,
          _e,
          $e,
          Ue,
          ze,
          Le
        );
      else
        break;
      Ve--, ve--;
    }
    if (Ie > Ve) {
      if (Ie <= ve) {
        const Q = ve + 1, He = Q < Ke ? V[Q].el : Ce;
        for (; Ie <= ve; )
          x(
            null,
            V[Ie] = Le ? Gs(V[Ie]) : bs(V[Ie]),
            ie,
            He,
            _e,
            $e,
            Ue,
            ze,
            Le
          ), Ie++;
      }
    } else if (Ie > ve)
      for (; Ie <= Ve; )
        Pe(I[Ie], _e, $e, !0), Ie++;
    else {
      const Q = Ie, He = Ie, ke = /* @__PURE__ */ new Map();
      for (Ie = He; Ie <= ve; Ie++) {
        const U = V[Ie] = Le ? Gs(V[Ie]) : bs(V[Ie]);
        U.key != null && ke.set(U.key, Ie);
      }
      let Ye, ot = 0;
      const Ae = ve - He + 1;
      let A = !1, oe = 0;
      const pe = new Array(Ae);
      for (Ie = 0; Ie < Ae; Ie++) pe[Ie] = 0;
      for (Ie = Q; Ie <= Ve; Ie++) {
        const U = I[Ie];
        if (ot >= Ae) {
          Pe(U, _e, $e, !0);
          continue;
        }
        let F;
        if (U.key != null)
          F = ke.get(U.key);
        else
          for (Ye = He; Ye <= ve; Ye++)
            if (pe[Ye - He] === 0 && to(U, V[Ye])) {
              F = Ye;
              break;
            }
        F === void 0 ? Pe(U, _e, $e, !0) : (pe[F - He] = Ie + 1, F >= oe ? oe = F : A = !0, x(
          U,
          V[F],
          ie,
          null,
          _e,
          $e,
          Ue,
          ze,
          Le
        ), ot++);
      }
      const Je = A ? rd(pe) : yo;
      for (Ye = Je.length - 1, Ie = Ae - 1; Ie >= 0; Ie--) {
        const U = He + Ie, F = V[U], te = V[U + 1], De = U + 1 < Ke ? (
          // #13559, fallback to el placeholder for unresolved async component
          te.el || te.placeholder
        ) : Ce;
        pe[Ie] === 0 ? x(
          null,
          F,
          ie,
          De,
          _e,
          $e,
          Ue,
          ze,
          Le
        ) : A && (Ye < 0 || Ie !== Je[Ye] ? me(F, ie, De, 2) : Ye--);
      }
    }
  }, me = (I, V, ie, Ce, _e = null) => {
    const { el: $e, type: Ue, transition: ze, children: Le, shapeFlag: Ie } = I;
    if (Ie & 6) {
      me(I.component.subTree, V, ie, Ce);
      return;
    }
    if (Ie & 128) {
      I.suspense.move(V, ie, Ce);
      return;
    }
    if (Ie & 64) {
      Ue.move(I, V, ie, ce);
      return;
    }
    if (Ue === j) {
      n($e, V, ie);
      for (let Ve = 0; Ve < Le.length; Ve++)
        me(Le[Ve], V, ie, Ce);
      n(I.anchor, V, ie);
      return;
    }
    if (Ue === Ua) {
      M(I, V, ie);
      return;
    }
    if (Ce !== 2 && Ie & 1 && ze)
      if (Ce === 0)
        ze.beforeEnter($e), n($e, V, ie), qt(() => ze.enter($e), _e);
      else {
        const { leave: Ve, delayLeave: ve, afterLeave: Q } = ze, He = () => {
          I.ctx.isUnmounted ? l($e) : n($e, V, ie);
        }, ke = () => {
          $e._isLeaving && $e[Ps](
            !0
            /* cancelled */
          ), Ve($e, () => {
            He(), Q && Q();
          });
        };
        ve ? ve($e, He, ke) : ke();
      }
    else
      n($e, V, ie);
  }, Pe = (I, V, ie, Ce = !1, _e = !1) => {
    const {
      type: $e,
      props: Ue,
      ref: ze,
      children: Le,
      dynamicChildren: Ie,
      shapeFlag: Ke,
      patchFlag: Ve,
      dirs: ve,
      cacheIndex: Q
    } = I;
    if (Ve === -2 && (_e = !1), ze != null && (Ds(), Jo(ze, null, ie, I, !0), Os()), Q != null && (V.renderCache[Q] = void 0), Ke & 256) {
      V.ctx.deactivate(I);
      return;
    }
    const He = Ke & 1 && ve, ke = !ko(I);
    let Ye;
    if (ke && (Ye = Ue && Ue.onVnodeBeforeUnmount) && hs(Ye, V, I), Ke & 6)
      H(I.component, ie, Ce);
    else {
      if (Ke & 128) {
        I.suspense.unmount(ie, Ce);
        return;
      }
      He && Qs(I, null, V, "beforeUnmount"), Ke & 64 ? I.type.remove(
        I,
        V,
        ie,
        ce,
        Ce
      ) : Ie && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !Ie.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      ($e !== j || Ve > 0 && Ve & 64) ? ee(
        Ie,
        V,
        ie,
        !1,
        !0
      ) : ($e === j && Ve & 384 || !_e && Ke & 16) && ee(Le, V, ie), Ce && We(I);
    }
    (ke && (Ye = Ue && Ue.onVnodeUnmounted) || He) && qt(() => {
      Ye && hs(Ye, V, I), He && Qs(I, null, V, "unmounted");
    }, ie);
  }, We = (I) => {
    const { type: V, el: ie, anchor: Ce, transition: _e } = I;
    if (V === j) {
      Ee(ie, Ce);
      return;
    }
    if (V === Ua) {
      P(I);
      return;
    }
    const $e = () => {
      l(ie), _e && !_e.persisted && _e.afterLeave && _e.afterLeave();
    };
    if (I.shapeFlag & 1 && _e && !_e.persisted) {
      const { leave: Ue, delayLeave: ze } = _e, Le = () => Ue(ie, $e);
      ze ? ze(I.el, $e, Le) : Le();
    } else
      $e();
  }, Ee = (I, V) => {
    let ie;
    for (; I !== V; )
      ie = w(I), l(I), I = ie;
    l(V);
  }, H = (I, V, ie) => {
    const { bum: Ce, scope: _e, job: $e, subTree: Ue, um: ze, m: Le, a: Ie } = I;
    Xl(Le), Xl(Ie), Ce && Sn(Ce), _e.stop(), $e && ($e.flags |= 8, Pe(Ue, I, V, ie)), ze && qt(ze, V), qt(() => {
      I.isUnmounted = !0;
    }, V);
  }, ee = (I, V, ie, Ce = !1, _e = !1, $e = 0) => {
    for (let Ue = $e; Ue < I.length; Ue++)
      Pe(I[Ue], V, ie, Ce, _e);
  }, q = (I) => {
    if (I.shapeFlag & 6)
      return q(I.component.subTree);
    if (I.shapeFlag & 128)
      return I.suspense.next();
    const V = w(I.anchor || I.el), ie = V && V[cr];
    return ie ? w(ie) : V;
  };
  let Z = !1;
  const xe = (I, V, ie) => {
    I == null ? V._vnode && Pe(V._vnode, null, null, !0) : x(
      V._vnode || null,
      I,
      V,
      null,
      null,
      null,
      ie
    ), V._vnode = I, Z || (Z = !0, Al(), lr(), Z = !1);
  }, ce = {
    p: x,
    um: Pe,
    m: me,
    r: We,
    mt: X,
    mc: E,
    pc: se,
    pbc: ae,
    n: q,
    o: e
  };
  return {
    render: xe,
    hydrate: void 0,
    createApp: Vu(xe)
  };
}
function Oa({ type: e, props: t }, o) {
  return o === "svg" && e === "foreignObject" || o === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : o;
}
function Ys({ effect: e, job: t }, o) {
  o ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function id(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function $l(e, t, o = !1) {
  const n = e.children, l = t.children;
  if (Xe(n) && Xe(l))
    for (let r = 0; r < n.length; r++) {
      const u = n[r];
      let c = l[r];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = l[r] = Gs(l[r]), c.el = u.el), !o && c.patchFlag !== -2 && $l(u, c)), c.type === aa && // avoid cached text nodes retaining detached dom nodes
      c.patchFlag !== -1 && (c.el = u.el), c.type === Bt && !c.el && (c.el = u.el);
    }
}
function rd(e) {
  const t = e.slice(), o = [0];
  let n, l, r, u, c;
  const d = e.length;
  for (n = 0; n < d; n++) {
    const m = e[n];
    if (m !== 0) {
      if (l = o[o.length - 1], e[l] < m) {
        t[n] = l, o.push(n);
        continue;
      }
      for (r = 0, u = o.length - 1; r < u; )
        c = r + u >> 1, e[o[c]] < m ? r = c + 1 : u = c;
      m < e[o[r]] && (r > 0 && (t[n] = o[r - 1]), o[r] = n);
    }
  }
  for (r = o.length, u = o[r - 1]; r-- > 0; )
    o[r] = u, u = t[u];
  return o;
}
function Ur(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Ur(t);
}
function Xl(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const Ar = (e) => e.__isSuspense;
function cd(e, t) {
  t && t.pendingBranch ? Xe(e) ? t.effects.push(...e) : t.effects.push(e) : wu(e);
}
const j = Symbol.for("v-fgt"), aa = Symbol.for("v-txt"), Bt = Symbol.for("v-cmt"), Ua = Symbol.for("v-stc"), Yo = [];
let es = null;
function a(e = !1) {
  Yo.push(es = e ? null : []);
}
function ud() {
  Yo.pop(), es = Yo[Yo.length - 1] || null;
}
let ln = 1;
function Vn(e, t = !1) {
  ln += e, e < 0 && es && t && (es.hasOnce = !0);
}
function zr(e) {
  return e.dynamicChildren = ln > 0 ? es || yo : null, ud(), ln > 0 && es && es.push(e), e;
}
function i(e, t, o, n, l, r) {
  return zr(
    s(
      e,
      t,
      o,
      n,
      l,
      r,
      !0
    )
  );
}
function L(e, t, o, n, l) {
  return zr(
    b(
      e,
      t,
      o,
      n,
      l,
      !0
    )
  );
}
function rn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function to(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Fr = ({ key: e }) => e ?? null, Tn = ({
  ref: e,
  ref_key: t,
  ref_for: o
}) => (typeof e == "number" && (e = "" + e), e != null ? $t(e) || Gt(e) || et(e) ? { i: Ut, r: e, k: t, f: !!o } : e : null);
function s(e, t = null, o = null, n = 0, l = null, r = e === j ? 0 : 1, u = !1, c = !1) {
  const d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Fr(t),
    ref: t && Tn(t),
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
    patchFlag: n,
    dynamicProps: l,
    dynamicChildren: null,
    appContext: null,
    ctx: Ut
  };
  return c ? (Cl(d, o), r & 128 && e.normalize(d)) : o && (d.shapeFlag |= $t(o) ? 8 : 16), ln > 0 && // avoid a block node from tracking itself
  !u && // has current parent block
  es && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (d.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  d.patchFlag !== 32 && es.push(d), d;
}
const b = dd;
function dd(e, t = null, o = null, n = 0, l = null, r = !1) {
  if ((!e || e === kr) && (e = Bt), rn(e)) {
    const c = Hs(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return o && Cl(c, o), ln > 0 && !r && es && (c.shapeFlag & 6 ? es[es.indexOf(e)] = c : es.push(c)), c.patchFlag = -2, c;
  }
  if (bd(e) && (e = e.__vccOpts), t) {
    t = fd(t);
    let { class: c, style: d } = t;
    c && !$t(c) && (t.class = Fe(c)), gt(d) && (hl(d) && !Xe(d) && (d = Mt({}, d)), t.style = Rt(d));
  }
  const u = $t(e) ? 1 : Ar(e) ? 128 : ur(e) ? 64 : gt(e) ? 4 : et(e) ? 2 : 0;
  return s(
    e,
    t,
    o,
    n,
    l,
    u,
    r,
    !0
  );
}
function fd(e) {
  return e ? hl(e) || Pr(e) ? Mt({}, e) : e : null;
}
function Hs(e, t, o = !1, n = !1) {
  const { props: l, ref: r, patchFlag: u, children: c, transition: d } = e, m = t ? md(l || {}, t) : l, v = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: m,
    key: m && Fr(m),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      o && r ? Xe(r) ? r.concat(Tn(t)) : [r, Tn(t)] : Tn(t)
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
    patchFlag: t && e.type !== j ? u === -1 ? 16 : u | 16 : u,
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
    ssContent: e.ssContent && Hs(e.ssContent),
    ssFallback: e.ssFallback && Hs(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return d && n && lo(
    v,
    d.clone(v)
  ), v;
}
function $(e = " ", t = 0) {
  return b(aa, null, e, t);
}
function y(e = "", t = !1) {
  return t ? (a(), L(Bt, null, e)) : b(Bt, null, e);
}
function bs(e) {
  return e == null || typeof e == "boolean" ? b(Bt) : Xe(e) ? b(
    j,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : rn(e) ? Gs(e) : b(aa, null, String(e));
}
function Gs(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Hs(e);
}
function Cl(e, t) {
  let o = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (Xe(t))
    o = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const l = t.default;
      l && (l._c && (l._d = !1), Cl(e, l()), l._c && (l._d = !0));
      return;
    } else {
      o = 32;
      const l = t._;
      !l && !Pr(t) ? t._ctx = Ut : l === 3 && Ut && (Ut.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else et(t) ? (t = { default: t, _ctx: Ut }, o = 32) : (t = String(t), n & 64 ? (o = 16, t = [$(t)]) : o = 8);
  e.children = t, e.shapeFlag |= o;
}
function md(...e) {
  const t = {};
  for (let o = 0; o < e.length; o++) {
    const n = e[o];
    for (const l in n)
      if (l === "class")
        t.class !== n.class && (t.class = Fe([t.class, n.class]));
      else if (l === "style")
        t.style = Rt([t.style, n.style]);
      else if (Kn(l)) {
        const r = t[l], u = n[l];
        u && r !== u && !(Xe(r) && r.includes(u)) && (t[l] = r ? [].concat(r, u) : u);
      } else l !== "" && (t[l] = n[l]);
  }
  return t;
}
function hs(e, t, o, n = null) {
  ps(e, t, 7, [
    o,
    n
  ]);
}
const vd = xr();
let pd = 0;
function gd(e, t, o) {
  const n = e.type, l = (t ? t.appContext : e.appContext) || vd, r = {
    uid: pd++,
    vnode: e,
    type: n,
    parent: t,
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
    scope: new Bc(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(l.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Lr(n, l),
    emitsOptions: Er(n, l),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: ht,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: ht,
    data: ht,
    props: ht,
    attrs: ht,
    slots: ht,
    refs: ht,
    setupState: ht,
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
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = qu.bind(null, r), e.ce && e.ce(r), r;
}
let Wt = null;
const xl = () => Wt || Ut;
let Bn, Xa;
{
  const e = Xn(), t = (o, n) => {
    let l;
    return (l = e[o]) || (l = e[o] = []), l.push(n), (r) => {
      l.length > 1 ? l.forEach((u) => u(r)) : l[0](r);
    };
  };
  Bn = t(
    "__VUE_INSTANCE_SETTERS__",
    (o) => Wt = o
  ), Xa = t(
    "__VUE_SSR_SETTERS__",
    (o) => cn = o
  );
}
const mn = (e) => {
  const t = Wt;
  return Bn(e), e.scope.on(), () => {
    e.scope.off(), Bn(t);
  };
}, Zl = () => {
  Wt && Wt.scope.off(), Bn(null);
};
function Vr(e) {
  return e.vnode.shapeFlag & 4;
}
let cn = !1;
function hd(e, t = !1, o = !1) {
  t && Xa(t);
  const { props: n, children: l } = e.vnode, r = Vr(e);
  Zu(e, n, r, t), od(e, l, o || t);
  const u = r ? yd(e, t) : void 0;
  return t && Xa(!1), u;
}
function yd(e, t) {
  const o = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Nu);
  const { setup: n } = o;
  if (n) {
    Ds();
    const l = e.setupContext = n.length > 1 ? _d(e) : null, r = mn(e), u = fn(
      n,
      e,
      0,
      [
        e.props,
        l
      ]
    ), c = Oi(u);
    if (Os(), r(), (c || e.sp) && !ko(e) && yr(e), c) {
      if (u.then(Zl, Zl), t)
        return u.then((d) => {
          ei(e, d);
        }).catch((d) => {
          ea(d, e, 0);
        });
      e.asyncDep = u;
    } else
      ei(e, u);
  } else
    Br(e);
}
function ei(e, t, o) {
  et(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : gt(t) && (e.setupState = or(t)), Br(e);
}
function Br(e, t, o) {
  const n = e.type;
  e.render || (e.render = n.render || Cs);
  {
    const l = mn(e);
    Ds();
    try {
      Du(e);
    } finally {
      Os(), l();
    }
  }
}
const wd = {
  get(e, t) {
    return Ft(e, "get", ""), e[t];
  }
};
function _d(e) {
  const t = (o) => {
    e.exposed = o || {};
  };
  return {
    attrs: new Proxy(e.attrs, wd),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function la(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(or(cu(e.exposed)), {
    get(t, o) {
      if (o in t)
        return t[o];
      if (o in Qo)
        return Qo[o](e);
    },
    has(t, o) {
      return o in t || o in Qo;
    }
  })) : e.proxy;
}
function kd(e, t = !0) {
  return et(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function bd(e) {
  return et(e) && "__vccOpts" in e;
}
const R = (e, t) => vu(e, t, cn);
function Po(e, t, o) {
  try {
    Vn(-1);
    const n = arguments.length;
    return n === 2 ? gt(t) && !Xe(t) ? rn(t) ? b(e, null, [t]) : b(e, t) : b(e, null, t) : (n > 3 ? o = Array.prototype.slice.call(arguments, 2) : n === 3 && rn(o) && (o = [o]), b(e, t, o));
  } finally {
    Vn(1);
  }
}
const $d = "3.5.25";
/**
* @vue/runtime-dom v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Za;
const ti = typeof window < "u" && window.trustedTypes;
if (ti)
  try {
    Za = /* @__PURE__ */ ti.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Wr = Za ? (e) => Za.createHTML(e) : (e) => e, Cd = "http://www.w3.org/2000/svg", xd = "http://www.w3.org/1998/Math/MathML", Ms = typeof document < "u" ? document : null, si = Ms && /* @__PURE__ */ Ms.createElement("template"), Sd = {
  insert: (e, t, o) => {
    t.insertBefore(e, o || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, o, n) => {
    const l = t === "svg" ? Ms.createElementNS(Cd, e) : t === "mathml" ? Ms.createElementNS(xd, e) : o ? Ms.createElement(e, { is: o }) : Ms.createElement(e);
    return e === "select" && n && n.multiple != null && l.setAttribute("multiple", n.multiple), l;
  },
  createText: (e) => Ms.createTextNode(e),
  createComment: (e) => Ms.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Ms.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, o, n, l, r) {
    const u = o ? o.previousSibling : t.lastChild;
    if (l && (l === r || l.nextSibling))
      for (; t.insertBefore(l.cloneNode(!0), o), !(l === r || !(l = l.nextSibling)); )
        ;
    else {
      si.innerHTML = Wr(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const c = si.content;
      if (n === "svg" || n === "mathml") {
        const d = c.firstChild;
        for (; d.firstChild; )
          c.appendChild(d.firstChild);
        c.removeChild(d);
      }
      t.insertBefore(c, o);
    }
    return [
      // first
      u ? u.nextSibling : t.firstChild,
      // last
      o ? o.previousSibling : t.lastChild
    ];
  }
}, Fs = "transition", Do = "animation", Io = Symbol("_vtc"), Gr = {
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
}, jr = /* @__PURE__ */ Mt(
  {},
  vr,
  Gr
), Id = (e) => (e.displayName = "Transition", e.props = jr, e), Ed = /* @__PURE__ */ Id(
  (e, { slots: t }) => Po(bu, Hr(e), t)
), Xs = (e, t = []) => {
  Xe(e) ? e.forEach((o) => o(...t)) : e && e(...t);
}, oi = (e) => e ? Xe(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Hr(e) {
  const t = {};
  for (const ue in e)
    ue in Gr || (t[ue] = e[ue]);
  if (e.css === !1)
    return t;
  const {
    name: o = "v",
    type: n,
    duration: l,
    enterFromClass: r = `${o}-enter-from`,
    enterActiveClass: u = `${o}-enter-active`,
    enterToClass: c = `${o}-enter-to`,
    appearFromClass: d = r,
    appearActiveClass: m = u,
    appearToClass: v = c,
    leaveFromClass: p = `${o}-leave-from`,
    leaveActiveClass: w = `${o}-leave-active`,
    leaveToClass: g = `${o}-leave-to`
  } = e, _ = Td(l), x = _ && _[0], C = _ && _[1], {
    onBeforeEnter: S,
    onEnter: T,
    onEnterCancelled: M,
    onLeave: P,
    onLeaveCancelled: D,
    onBeforeAppear: N = S,
    onAppear: O = T,
    onAppearCancelled: E = M
  } = t, K = (ue, we, X, G) => {
    ue._enterCancelled = G, Vs(ue, we ? v : c), Vs(ue, we ? m : u), X && X();
  }, ae = (ue, we) => {
    ue._isLeaving = !1, Vs(ue, p), Vs(ue, g), Vs(ue, w), we && we();
  }, fe = (ue) => (we, X) => {
    const G = ue ? O : T, Y = () => K(we, ue, X);
    Xs(G, [we, Y]), ni(() => {
      Vs(we, ue ? d : r), ws(we, ue ? v : c), oi(G) || ai(we, n, x, Y);
    });
  };
  return Mt(t, {
    onBeforeEnter(ue) {
      Xs(S, [ue]), ws(ue, r), ws(ue, u);
    },
    onBeforeAppear(ue) {
      Xs(N, [ue]), ws(ue, d), ws(ue, m);
    },
    onEnter: fe(!1),
    onAppear: fe(!0),
    onLeave(ue, we) {
      ue._isLeaving = !0;
      const X = () => ae(ue, we);
      ws(ue, p), ue._enterCancelled ? (ws(ue, w), el(ue)) : (el(ue), ws(ue, w)), ni(() => {
        ue._isLeaving && (Vs(ue, p), ws(ue, g), oi(P) || ai(ue, n, C, X));
      }), Xs(P, [ue, X]);
    },
    onEnterCancelled(ue) {
      K(ue, !1, void 0, !0), Xs(M, [ue]);
    },
    onAppearCancelled(ue) {
      K(ue, !0, void 0, !0), Xs(E, [ue]);
    },
    onLeaveCancelled(ue) {
      ae(ue), Xs(D, [ue]);
    }
  });
}
function Td(e) {
  if (e == null)
    return null;
  if (gt(e))
    return [Aa(e.enter), Aa(e.leave)];
  {
    const t = Aa(e);
    return [t, t];
  }
}
function Aa(e) {
  return Nc(e);
}
function ws(e, t) {
  t.split(/\s+/).forEach((o) => o && e.classList.add(o)), (e[Io] || (e[Io] = /* @__PURE__ */ new Set())).add(t);
}
function Vs(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.remove(n));
  const o = e[Io];
  o && (o.delete(t), o.size || (e[Io] = void 0));
}
function ni(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Md = 0;
function ai(e, t, o, n) {
  const l = e._endId = ++Md, r = () => {
    l === e._endId && n();
  };
  if (o != null)
    return setTimeout(r, o);
  const { type: u, timeout: c, propCount: d } = qr(e, t);
  if (!u)
    return n();
  const m = u + "end";
  let v = 0;
  const p = () => {
    e.removeEventListener(m, w), r();
  }, w = (g) => {
    g.target === e && ++v >= d && p();
  };
  setTimeout(() => {
    v < d && p();
  }, c + 1), e.addEventListener(m, w);
}
function qr(e, t) {
  const o = window.getComputedStyle(e), n = (_) => (o[_] || "").split(", "), l = n(`${Fs}Delay`), r = n(`${Fs}Duration`), u = li(l, r), c = n(`${Do}Delay`), d = n(`${Do}Duration`), m = li(c, d);
  let v = null, p = 0, w = 0;
  t === Fs ? u > 0 && (v = Fs, p = u, w = r.length) : t === Do ? m > 0 && (v = Do, p = m, w = d.length) : (p = Math.max(u, m), v = p > 0 ? u > m ? Fs : Do : null, w = v ? v === Fs ? r.length : d.length : 0);
  const g = v === Fs && /\b(?:transform|all)(?:,|$)/.test(
    n(`${Fs}Property`).toString()
  );
  return {
    type: v,
    timeout: p,
    propCount: w,
    hasTransform: g
  };
}
function li(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((o, n) => ii(o) + ii(e[n])));
}
function ii(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function el(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Pd(e, t, o) {
  const n = e[Io];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : o ? e.setAttribute("class", t) : e.className = t;
}
const ri = Symbol("_vod"), Rd = Symbol("_vsh"), Ld = Symbol(""), Nd = /(?:^|;)\s*display\s*:/;
function Dd(e, t, o) {
  const n = e.style, l = $t(o);
  let r = !1;
  if (o && !l) {
    if (t)
      if ($t(t))
        for (const u of t.split(";")) {
          const c = u.slice(0, u.indexOf(":")).trim();
          o[c] == null && Mn(n, c, "");
        }
      else
        for (const u in t)
          o[u] == null && Mn(n, u, "");
    for (const u in o)
      u === "display" && (r = !0), Mn(n, u, o[u]);
  } else if (l) {
    if (t !== o) {
      const u = n[Ld];
      u && (o += ";" + u), n.cssText = o, r = Nd.test(o);
    }
  } else t && e.removeAttribute("style");
  ri in e && (e[ri] = r ? n.display : "", e[Rd] && (n.display = "none"));
}
const ci = /\s*!important$/;
function Mn(e, t, o) {
  if (Xe(o))
    o.forEach((n) => Mn(e, t, n));
  else if (o == null && (o = ""), t.startsWith("--"))
    e.setProperty(t, o);
  else {
    const n = Od(e, t);
    ci.test(o) ? e.setProperty(
      Ks(n),
      o.replace(ci, ""),
      "important"
    ) : e[n] = o;
  }
}
const ui = ["Webkit", "Moz", "ms"], za = {};
function Od(e, t) {
  const o = za[t];
  if (o)
    return o;
  let n = rs(t);
  if (n !== "filter" && n in e)
    return za[t] = n;
  n = Qn(n);
  for (let l = 0; l < ui.length; l++) {
    const r = ui[l] + n;
    if (r in e)
      return za[t] = r;
  }
  return t;
}
const di = "http://www.w3.org/1999/xlink";
function fi(e, t, o, n, l, r = Fc(t)) {
  n && t.startsWith("xlink:") ? o == null ? e.removeAttributeNS(di, t.slice(6, t.length)) : e.setAttributeNS(di, t, o) : o == null || r && !Fi(o) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : ms(o) ? String(o) : o
  );
}
function mi(e, t, o, n, l) {
  if (t === "innerHTML" || t === "textContent") {
    o != null && (e[t] = t === "innerHTML" ? Wr(o) : o);
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const c = r === "OPTION" ? e.getAttribute("value") || "" : e.value, d = o == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(o);
    (c !== d || !("_value" in e)) && (e.value = d), o == null && e.removeAttribute(t), e._value = o;
    return;
  }
  let u = !1;
  if (o === "" || o == null) {
    const c = typeof e[t];
    c === "boolean" ? o = Fi(o) : o == null && c === "string" ? (o = "", u = !0) : c === "number" && (o = 0, u = !0);
  }
  try {
    e[t] = o;
  } catch {
  }
  u && e.removeAttribute(l || t);
}
function Ns(e, t, o, n) {
  e.addEventListener(t, o, n);
}
function Ud(e, t, o, n) {
  e.removeEventListener(t, o, n);
}
const vi = Symbol("_vei");
function Ad(e, t, o, n, l = null) {
  const r = e[vi] || (e[vi] = {}), u = r[t];
  if (n && u)
    u.value = n;
  else {
    const [c, d] = zd(t);
    if (n) {
      const m = r[t] = Bd(
        n,
        l
      );
      Ns(e, c, m, d);
    } else u && (Ud(e, c, u, d), r[t] = void 0);
  }
}
const pi = /(?:Once|Passive|Capture)$/;
function zd(e) {
  let t;
  if (pi.test(e)) {
    t = {};
    let n;
    for (; n = e.match(pi); )
      e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Ks(e.slice(2)), t];
}
let Fa = 0;
const Fd = /* @__PURE__ */ Promise.resolve(), Vd = () => Fa || (Fd.then(() => Fa = 0), Fa = Date.now());
function Bd(e, t) {
  const o = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= o.attached)
      return;
    ps(
      Wd(n, o.value),
      t,
      5,
      [n]
    );
  };
  return o.value = e, o.attached = Vd(), o;
}
function Wd(e, t) {
  if (Xe(t)) {
    const o = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      o.call(e), e._stopped = !0;
    }, t.map(
      (n) => (l) => !l._stopped && n && n(l)
    );
  } else
    return t;
}
const gi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Gd = (e, t, o, n, l, r) => {
  const u = l === "svg";
  t === "class" ? Pd(e, n, u) : t === "style" ? Dd(e, o, n) : Kn(t) ? il(t) || Ad(e, t, o, n, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : jd(e, t, n, u)) ? (mi(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && fi(e, t, n, u, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !$t(n)) ? mi(e, rs(t), n, r, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), fi(e, t, n, u));
};
function jd(e, t, o, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && gi(t) && et(o));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const l = e.tagName;
    if (l === "IMG" || l === "VIDEO" || l === "CANVAS" || l === "SOURCE")
      return !1;
  }
  return gi(t) && $t(o) ? !1 : t in e;
}
const Kr = /* @__PURE__ */ new WeakMap(), Jr = /* @__PURE__ */ new WeakMap(), Wn = Symbol("_moveCb"), hi = Symbol("_enterCb"), Hd = (e) => (delete e.props.mode, e), qd = /* @__PURE__ */ Hd({
  name: "TransitionGroup",
  props: /* @__PURE__ */ Mt({}, jr, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: t }) {
    const o = xl(), n = mr();
    let l, r;
    return _r(() => {
      if (!l.length)
        return;
      const u = e.moveClass || `${e.name || "v"}-move`;
      if (!Xd(
        l[0].el,
        o.vnode.el,
        u
      )) {
        l = [];
        return;
      }
      l.forEach(Jd), l.forEach(Qd);
      const c = l.filter(Yd);
      el(o.vnode.el), c.forEach((d) => {
        const m = d.el, v = m.style;
        ws(m, u), v.transform = v.webkitTransform = v.transitionDuration = "";
        const p = m[Wn] = (w) => {
          w && w.target !== m || (!w || w.propertyName.endsWith("transform")) && (m.removeEventListener("transitionend", p), m[Wn] = null, Vs(m, u));
        };
        m.addEventListener("transitionend", p);
      }), l = [];
    }), () => {
      const u = ct(e), c = Hr(u);
      let d = u.tag || j;
      if (l = [], r)
        for (let m = 0; m < r.length; m++) {
          const v = r[m];
          v.el && v.el instanceof Element && (l.push(v), lo(
            v,
            an(
              v,
              c,
              n,
              o
            )
          ), Kr.set(v, {
            left: v.el.offsetLeft,
            top: v.el.offsetTop
          }));
        }
      r = t.default ? wl(t.default()) : [];
      for (let m = 0; m < r.length; m++) {
        const v = r[m];
        v.key != null && lo(
          v,
          an(v, c, n, o)
        );
      }
      return b(d, null, r);
    };
  }
}), Kd = qd;
function Jd(e) {
  const t = e.el;
  t[Wn] && t[Wn](), t[hi] && t[hi]();
}
function Qd(e) {
  Jr.set(e, {
    left: e.el.offsetLeft,
    top: e.el.offsetTop
  });
}
function Yd(e) {
  const t = Kr.get(e), o = Jr.get(e), n = t.left - o.left, l = t.top - o.top;
  if (n || l) {
    const r = e.el.style;
    return r.transform = r.webkitTransform = `translate(${n}px,${l}px)`, r.transitionDuration = "0s", e;
  }
}
function Xd(e, t, o) {
  const n = e.cloneNode(), l = e[Io];
  l && l.forEach((c) => {
    c.split(/\s+/).forEach((d) => d && n.classList.remove(d));
  }), o.split(/\s+/).forEach((c) => c && n.classList.add(c)), n.style.display = "none";
  const r = t.nodeType === 1 ? t : t.parentNode;
  r.appendChild(n);
  const { hasTransform: u } = qr(n);
  return r.removeChild(n), u;
}
const qs = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Xe(t) ? (o) => Sn(t, o) : t;
};
function Zd(e) {
  e.target.composing = !0;
}
function yi(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const is = Symbol("_assign");
function wi(e, t, o) {
  return t && (e = e.trim()), o && (e = Yn(e)), e;
}
const Xo = {
  created(e, { modifiers: { lazy: t, trim: o, number: n } }, l) {
    e[is] = qs(l);
    const r = n || l.props && l.props.type === "number";
    Ns(e, t ? "change" : "input", (u) => {
      u.target.composing || e[is](wi(e.value, o, r));
    }), (o || r) && Ns(e, "change", () => {
      e.value = wi(e.value, o, r);
    }), t || (Ns(e, "compositionstart", Zd), Ns(e, "compositionend", yi), Ns(e, "change", yi));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: o, modifiers: { lazy: n, trim: l, number: r } }, u) {
    if (e[is] = qs(u), e.composing) return;
    const c = (r || e.type === "number") && !/^0\d/.test(e.value) ? Yn(e.value) : e.value, d = t ?? "";
    c !== d && (document.activeElement === e && e.type !== "range" && (n && t === o || l && e.value.trim() === d) || (e.value = d));
  }
}, Gn = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, o) {
    e[is] = qs(o), Ns(e, "change", () => {
      const n = e._modelValue, l = Eo(e), r = e.checked, u = e[is];
      if (Xe(n)) {
        const c = ul(n, l), d = c !== -1;
        if (r && !d)
          u(n.concat(l));
        else if (!r && d) {
          const m = [...n];
          m.splice(c, 1), u(m);
        }
      } else if (To(n)) {
        const c = new Set(n);
        r ? c.add(l) : c.delete(l), u(c);
      } else
        u(Qr(e, r));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: _i,
  beforeUpdate(e, t, o) {
    e[is] = qs(o), _i(e, t, o);
  }
};
function _i(e, { value: t, oldValue: o }, n) {
  e._modelValue = t;
  let l;
  if (Xe(t))
    l = ul(t, n.props.value) > -1;
  else if (To(t))
    l = t.has(n.props.value);
  else {
    if (t === o) return;
    l = ao(t, Qr(e, !0));
  }
  e.checked !== l && (e.checked = l);
}
const Pn = {
  created(e, { value: t }, o) {
    e.checked = ao(t, o.props.value), e[is] = qs(o), Ns(e, "change", () => {
      e[is](Eo(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: o }, n) {
    e[is] = qs(n), t !== o && (e.checked = ao(t, n.props.value));
  }
}, $o = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: o } }, n) {
    const l = To(t);
    Ns(e, "change", () => {
      const r = Array.prototype.filter.call(e.options, (u) => u.selected).map(
        (u) => o ? Yn(Eo(u)) : Eo(u)
      );
      e[is](
        e.multiple ? l ? new Set(r) : r : r[0]
      ), e._assigning = !0, Pt(() => {
        e._assigning = !1;
      });
    }), e[is] = qs(n);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    ki(e, t);
  },
  beforeUpdate(e, t, o) {
    e[is] = qs(o);
  },
  updated(e, { value: t }) {
    e._assigning || ki(e, t);
  }
};
function ki(e, t) {
  const o = e.multiple, n = Xe(t);
  if (!(o && !n && !To(t))) {
    for (let l = 0, r = e.options.length; l < r; l++) {
      const u = e.options[l], c = Eo(u);
      if (o)
        if (n) {
          const d = typeof c;
          d === "string" || d === "number" ? u.selected = t.some((m) => String(m) === String(c)) : u.selected = ul(t, c) > -1;
        } else
          u.selected = t.has(c);
      else if (ao(Eo(u), t)) {
        e.selectedIndex !== l && (e.selectedIndex = l);
        return;
      }
    }
    !o && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Eo(e) {
  return "_value" in e ? e._value : e.value;
}
function Qr(e, t) {
  const o = t ? "_trueValue" : "_falseValue";
  return o in e ? e[o] : t;
}
const ef = ["ctrl", "shift", "alt", "meta"], tf = {
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
  exact: (e, t) => ef.some((o) => e[`${o}Key`] && !t.includes(o))
}, mt = (e, t) => {
  const o = e._withMods || (e._withMods = {}), n = t.join(".");
  return o[n] || (o[n] = ((l, ...r) => {
    for (let u = 0; u < t.length; u++) {
      const c = tf[t[u]];
      if (c && c(l, t)) return;
    }
    return e(l, ...r);
  }));
}, sf = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, fs = (e, t) => {
  const o = e._withKeys || (e._withKeys = {}), n = t.join(".");
  return o[n] || (o[n] = ((l) => {
    if (!("key" in l))
      return;
    const r = Ks(l.key);
    if (t.some(
      (u) => u === r || sf[u] === r
    ))
      return e(l);
  }));
}, of = /* @__PURE__ */ Mt({ patchProp: Gd }, Sd);
let bi;
function nf() {
  return bi || (bi = ad(of));
}
const vn = ((...e) => {
  const t = nf().createApp(...e), { mount: o } = t;
  return t.mount = (n) => {
    const l = lf(n);
    if (!l) return;
    const r = t._component;
    !et(r) && !r.render && !r.template && (r.template = l.innerHTML), l.nodeType === 1 && (l.textContent = "");
    const u = o(l, !1, af(l));
    return l instanceof Element && (l.removeAttribute("v-cloak"), l.setAttribute("data-v-app", "")), u;
  }, t;
});
function af(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function lf(e) {
  return $t(e) ? document.querySelector(e) : e;
}
const rf = { class: "panel-layout" }, cf = {
  key: 0,
  class: "panel-layout-header"
}, uf = {
  key: 1,
  class: "panel-layout-search"
}, df = { class: "panel-layout-content" }, ff = {
  key: 2,
  class: "panel-layout-footer"
}, mf = /* @__PURE__ */ be({
  __name: "PanelLayout",
  setup(e) {
    return (t, o) => (a(), i("div", rf, [
      t.$slots.header ? (a(), i("div", cf, [
        st(t.$slots, "header", {}, void 0)
      ])) : y("", !0),
      t.$slots.search ? (a(), i("div", uf, [
        st(t.$slots, "search", {}, void 0)
      ])) : y("", !0),
      s("div", df, [
        st(t.$slots, "content", {}, void 0)
      ]),
      t.$slots.footer ? (a(), i("div", ff, [
        st(t.$slots, "footer", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), Se = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [n, l] of t)
    o[n] = l;
  return o;
}, At = /* @__PURE__ */ Se(mf, [["__scopeId", "data-v-21565df9"]]), vf = {
  key: 0,
  class: "panel-title-prefix"
}, pf = {
  key: 1,
  class: "panel-title-prefix-theme"
}, gf = /* @__PURE__ */ be({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(e) {
    return (t, o) => (a(), L(_l(`h${e.level}`), {
      class: Fe(["panel-title", e.variant])
    }, {
      default: h(() => [
        e.showPrefix ? (a(), i("span", vf, f(e.prefix), 1)) : (a(), i("span", pf)),
        st(t.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), hf = /* @__PURE__ */ Se(gf, [["__scopeId", "data-v-c3875efc"]]), yf = ["title"], wf = ["width", "height"], _f = /* @__PURE__ */ be({
  __name: "InfoButton",
  props: {
    size: { default: 16 },
    title: { default: "About this section" }
  },
  emits: ["click"],
  setup(e) {
    return (t, o) => (a(), i("button", {
      class: "info-button",
      title: e.title,
      onClick: o[0] || (o[0] = (n) => t.$emit("click"))
    }, [
      (a(), i("svg", {
        width: e.size,
        height: e.size,
        viewBox: "0 0 16 16",
        fill: "currentColor"
      }, [...o[1] || (o[1] = [
        s("circle", {
          cx: "8",
          cy: "8",
          r: "7",
          stroke: "currentColor",
          "stroke-width": "1.5",
          fill: "none"
        }, null, -1),
        s("text", {
          x: "8",
          y: "11",
          "text-anchor": "middle",
          "font-size": "10",
          "font-weight": "bold",
          fill: "currentColor"
        }, "i", -1)
      ])], 8, wf))
    ], 8, yf));
  }
}), Sl = /* @__PURE__ */ Se(_f, [["__scopeId", "data-v-6fc7f16d"]]), kf = { class: "header-left" }, bf = {
  key: 0,
  class: "header-actions"
}, $f = /* @__PURE__ */ be({
  __name: "PanelHeader",
  props: {
    title: {},
    showInfo: { type: Boolean, default: !1 },
    showPrefix: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  emits: ["info-click"],
  setup(e) {
    return (t, o) => (a(), i("div", {
      class: Fe(["panel-header", { stacked: e.stacked }])
    }, [
      s("div", kf, [
        b(hf, { "show-prefix": e.showPrefix }, {
          default: h(() => [
            $(f(e.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        e.showInfo ? (a(), L(Sl, {
          key: 0,
          onClick: o[0] || (o[0] = (n) => t.$emit("info-click"))
        })) : y("", !0)
      ]),
      t.$slots.actions ? (a(), i("div", bf, [
        st(t.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), zt = /* @__PURE__ */ Se($f, [["__scopeId", "data-v-55a62cd6"]]), Cf = {
  key: 0,
  class: "section-title-count"
}, xf = {
  key: 1,
  class: "section-title-icon"
}, Sf = /* @__PURE__ */ be({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e) {
    return (t, o) => (a(), L(_l(`h${e.level}`), {
      class: Fe(["section-title", { clickable: e.clickable }]),
      onClick: o[0] || (o[0] = (n) => e.clickable && t.$emit("click"))
    }, {
      default: h(() => [
        st(t.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (a(), i("span", Cf, "(" + f(e.count) + ")", 1)) : y("", !0),
        e.clickable ? (a(), i("span", xf, f(e.expanded ? "▼" : "▸"), 1)) : y("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), as = /* @__PURE__ */ Se(Sf, [["__scopeId", "data-v-559361eb"]]), If = { class: "status-grid" }, Ef = { class: "status-grid__columns" }, Tf = { class: "status-grid__column" }, Mf = { class: "status-grid__title" }, Pf = { class: "status-grid__column status-grid__column--right" }, Rf = { class: "status-grid__title" }, Lf = {
  key: 0,
  class: "status-grid__footer"
}, Nf = /* @__PURE__ */ be({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(e) {
    return (t, o) => (a(), i("div", If, [
      s("div", Ef, [
        s("div", Tf, [
          s("h4", Mf, f(e.leftTitle), 1),
          st(t.$slots, "left", {}, void 0)
        ]),
        s("div", Pf, [
          s("h4", Rf, f(e.rightTitle), 1),
          st(t.$slots, "right", {}, void 0)
        ])
      ]),
      t.$slots.footer ? (a(), i("div", Lf, [
        st(t.$slots, "footer", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), Df = /* @__PURE__ */ Se(Nf, [["__scopeId", "data-v-73b7ba3f"]]), Of = {
  key: 0,
  class: "status-item__icon"
}, Uf = {
  key: 1,
  class: "status-item__count"
}, Af = { class: "status-item__label" }, zf = /* @__PURE__ */ be({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, o = R(() => `status-item--${t.variant}`);
    return (n, l) => (a(), i("div", {
      class: Fe(["status-item", o.value, { "is-separator": e.separator }])
    }, [
      e.icon ? (a(), i("span", Of, f(e.icon), 1)) : y("", !0),
      e.count !== void 0 ? (a(), i("span", Uf, f(e.count), 1)) : y("", !0),
      s("span", Af, f(e.label), 1)
    ], 2));
  }
}), ys = /* @__PURE__ */ Se(zf, [["__scopeId", "data-v-6f929183"]]), Ff = { class: "issue-card__header" }, Vf = { class: "issue-card__icon" }, Bf = { class: "issue-card__title" }, Wf = {
  key: 0,
  class: "issue-card__content"
}, Gf = {
  key: 0,
  class: "issue-card__description"
}, jf = {
  key: 1,
  class: "issue-card__items"
}, Hf = {
  key: 2,
  class: "issue-card__actions"
}, qf = /* @__PURE__ */ be({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(e) {
    const t = e, o = R(() => `issue-card--${t.severity}`);
    return (n, l) => (a(), i("div", {
      class: Fe(["issue-card", o.value])
    }, [
      s("div", Ff, [
        s("span", Vf, f(e.icon), 1),
        s("h4", Bf, f(e.title), 1)
      ]),
      n.$slots.default || e.description ? (a(), i("div", Wf, [
        e.description ? (a(), i("p", Gf, f(e.description), 1)) : y("", !0),
        st(n.$slots, "default", {}, void 0)
      ])) : y("", !0),
      e.items && e.items.length ? (a(), i("div", jf, [
        (a(!0), i(j, null, he(e.items, (r, u) => (a(), i("div", {
          key: u,
          class: "issue-card__item"
        }, [
          l[0] || (l[0] = s("span", { class: "issue-card__bullet" }, "•", -1)),
          s("span", null, f(r), 1)
        ]))), 128))
      ])) : y("", !0),
      n.$slots.actions ? (a(), i("div", Hf, [
        st(n.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), us = /* @__PURE__ */ Se(qf, [["__scopeId", "data-v-df6aa348"]]), Kf = ["type", "disabled"], Jf = {
  key: 0,
  class: "spinner"
}, Qf = /* @__PURE__ */ be({
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
    return (t, o) => (a(), i("button", {
      type: e.type,
      disabled: e.disabled || e.loading,
      class: Fe(["action-btn", e.variant, e.size, { loading: e.loading }]),
      onClick: o[0] || (o[0] = (n) => t.$emit("click", n))
    }, [
      e.loading ? (a(), i("span", Jf)) : y("", !0),
      e.loading ? y("", !0) : st(t.$slots, "default", { key: 1 }, void 0)
    ], 10, Kf));
  }
}), Te = /* @__PURE__ */ Se(Qf, [["__scopeId", "data-v-772abe47"]]), Yf = { class: "empty-state" }, Xf = {
  key: 0,
  class: "empty-icon"
}, Zf = { class: "empty-message" }, em = /* @__PURE__ */ be({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(e) {
    return (t, o) => (a(), i("div", Yf, [
      e.icon ? (a(), i("div", Xf, f(e.icon), 1)) : y("", !0),
      s("p", Zf, f(e.message), 1),
      e.actionLabel ? (a(), L(Te, {
        key: 1,
        variant: e.actionVariant || "secondary",
        size: "sm",
        onClick: o[0] || (o[0] = (n) => t.$emit("action"))
      }, {
        default: h(() => [
          $(f(e.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : y("", !0)
    ]));
  }
}), cs = /* @__PURE__ */ Se(em, [["__scopeId", "data-v-4466284f"]]), tm = /* @__PURE__ */ be({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(e) {
    return (t, o) => (a(), i("span", {
      class: Fe(["detail-label"]),
      style: Rt({ minWidth: e.minWidth })
    }, [
      st(t.$slots, "default", {}, void 0)
    ], 4));
  }
}), Rn = /* @__PURE__ */ Se(tm, [["__scopeId", "data-v-75e9eeb8"]]), sm = /* @__PURE__ */ be({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (t, o) => (a(), i("span", {
      class: Fe(["detail-value", e.variant, { mono: e.mono, truncate: e.truncate }])
    }, [
      st(t.$slots, "default", {}, void 0)
    ], 2));
  }
}), tl = /* @__PURE__ */ Se(sm, [["__scopeId", "data-v-2f186e4c"]]), om = { class: "detail-row" }, nm = /* @__PURE__ */ be({
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
    return (t, o) => (a(), i("div", om, [
      b(Rn, { "min-width": e.labelMinWidth }, {
        default: h(() => [
          $(f(e.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      e.value ? (a(), L(tl, {
        key: 0,
        mono: e.mono,
        variant: e.valueVariant,
        truncate: e.truncate
      }, {
        default: h(() => [
          $(f(e.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : st(t.$slots, "value", { key: 1 }, void 0)
    ]));
  }
}), _t = /* @__PURE__ */ Se(nm, [["__scopeId", "data-v-ef15664a"]]), am = { class: "modal-header" }, lm = { class: "modal-body" }, im = { class: "status-section" }, rm = {
  key: 0,
  class: "status-section"
}, cm = { class: "section-header-row" }, um = {
  key: 0,
  class: "workflow-group"
}, dm = { class: "workflow-group-header" }, fm = { class: "workflow-group-title" }, mm = { class: "workflow-list" }, vm = { class: "workflow-name" }, pm = { class: "workflow-issue" }, gm = {
  key: 1,
  class: "workflow-group"
}, hm = { class: "workflow-group-header" }, ym = { class: "workflow-group-title" }, wm = { class: "workflow-list" }, _m = { class: "workflow-name" }, km = { class: "workflow-issue" }, bm = {
  key: 2,
  class: "workflow-group"
}, $m = { class: "workflow-group-header" }, Cm = { class: "workflow-group-title" }, xm = { class: "workflow-list" }, Sm = { class: "workflow-name" }, Im = {
  key: 3,
  class: "workflow-group"
}, Em = { class: "workflow-group-header" }, Tm = { class: "workflow-group-title" }, Mm = { class: "workflow-list" }, Pm = { class: "workflow-name" }, Rm = {
  key: 4,
  class: "workflow-group"
}, Lm = { class: "workflow-group-header" }, Nm = { class: "workflow-group-title" }, Dm = { class: "workflow-list" }, Om = { class: "workflow-name" }, Um = {
  key: 5,
  class: "workflow-group"
}, Am = { class: "workflow-group-title" }, zm = { class: "expand-icon" }, Fm = {
  key: 0,
  class: "workflow-list"
}, Vm = { class: "workflow-name" }, Bm = {
  key: 1,
  class: "status-section"
}, Wm = {
  key: 0,
  class: "change-group"
}, Gm = { class: "change-group-header" }, jm = { class: "change-group-title" }, Hm = { class: "change-list" }, qm = { class: "node-name" }, Km = {
  key: 0,
  class: "dev-badge"
}, Jm = {
  key: 1,
  class: "change-group"
}, Qm = { class: "change-group-header" }, Ym = { class: "change-group-title" }, Xm = { class: "change-list" }, Zm = { class: "node-name" }, ev = {
  key: 0,
  class: "dev-badge"
}, tv = {
  key: 2,
  class: "change-group"
}, sv = { class: "change-list" }, ov = { class: "change-item" }, nv = { class: "node-name" }, av = {
  key: 3,
  class: "change-group"
}, lv = {
  key: 2,
  class: "status-section"
}, iv = { class: "section-header-row" }, rv = {
  key: 0,
  class: "drift-item"
}, cv = { class: "drift-list" }, uv = {
  key: 0,
  class: "drift-list-more"
}, dv = {
  key: 1,
  class: "drift-item"
}, fv = { class: "drift-list" }, mv = {
  key: 0,
  class: "drift-list-more"
}, vv = {
  key: 2,
  class: "drift-item"
}, pv = { class: "drift-list" }, gv = { class: "version-actual" }, hv = { class: "version-expected" }, yv = {
  key: 0,
  class: "drift-list-more"
}, wv = {
  key: 3,
  class: "drift-item"
}, _v = { class: "repair-action" }, kv = {
  key: 3,
  class: "status-section"
}, bv = { class: "info-box" }, $v = { class: "drift-list" }, Cv = {
  key: 0,
  class: "drift-list-more"
}, xv = {
  key: 4,
  class: "status-section"
}, Sv = { class: "warning-box" }, Iv = {
  key: 5,
  class: "empty-state-inline"
}, Ev = { class: "modal-actions" }, Tv = /* @__PURE__ */ be({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {},
    isRepairing: { type: Boolean }
  },
  emits: ["close", "navigate-workflows", "navigate-nodes", "repair"],
  setup(e) {
    const t = e, o = k(!1);
    rt(() => {
      console.log("StatusDetailModal mounted, initial show value:", t.show);
    }), kt(() => t.show, (w, g) => {
      console.log("StatusDetailModal show prop changed from", g, "to", w);
    }, { immediate: !0 });
    const n = R(() => {
      var w, g, _;
      return ((_ = (g = (w = t.status) == null ? void 0 : w.workflows) == null ? void 0 : g.analyzed) == null ? void 0 : _.filter(
        (x) => x.status === "broken" && x.sync_state === "synced"
      )) || [];
    }), l = R(() => {
      var w, g, _;
      return ((_ = (g = (w = t.status) == null ? void 0 : w.workflows) == null ? void 0 : g.analyzed) == null ? void 0 : _.filter(
        (x) => x.status === "broken" && x.sync_state !== "synced"
      )) || [];
    }), r = R(() => {
      var w, g, _;
      return ((_ = (g = (w = t.status) == null ? void 0 : w.workflows) == null ? void 0 : g.synced) == null ? void 0 : _.filter((x) => {
        var S, T, M;
        const C = (M = (T = (S = t.status) == null ? void 0 : S.workflows) == null ? void 0 : T.analyzed) == null ? void 0 : M.find((P) => P.name === x);
        return !C || C.status !== "broken";
      })) || [];
    }), u = R(() => {
      var w, g, _, x, C;
      return (w = t.status) != null && w.workflows ? (((g = t.status.workflows.new) == null ? void 0 : g.length) ?? 0) > 0 || (((_ = t.status.workflows.modified) == null ? void 0 : _.length) ?? 0) > 0 || (((x = t.status.workflows.deleted) == null ? void 0 : x.length) ?? 0) > 0 || (((C = t.status.workflows.synced) == null ? void 0 : C.length) ?? 0) > 0 : !1;
    }), c = R(() => {
      var g, _, x;
      const w = (g = t.status) == null ? void 0 : g.git_changes;
      return w ? (((_ = w.nodes_added) == null ? void 0 : _.length) ?? 0) > 0 || (((x = w.nodes_removed) == null ? void 0 : x.length) ?? 0) > 0 || w.workflow_changes || w.has_other_changes : !1;
    }), d = R(() => {
      var w, g, _, x, C, S;
      return !u.value && !c.value && ((g = (w = t.status) == null ? void 0 : w.comparison) == null ? void 0 : g.is_synced) && (((_ = t.status) == null ? void 0 : _.missing_models_count) ?? 0) === 0 && (((S = (C = (x = t.status) == null ? void 0 : x.comparison) == null ? void 0 : C.disabled_nodes) == null ? void 0 : S.length) ?? 0) === 0;
    }), m = R(() => {
      var g, _;
      const w = (_ = (g = t.status) == null ? void 0 : g.git_changes) == null ? void 0 : _.workflow_changes;
      return w ? typeof w == "number" ? w : Object.keys(w).length : 0;
    });
    function v(w) {
      return typeof w == "string" ? w : w.name;
    }
    function p(w) {
      return typeof w == "object" && w.is_development === !0;
    }
    return (w, g) => {
      var _, x, C, S, T, M, P, D, N, O, E, K, ae, fe, ue, we, X, G, Y, Re, se, ge;
      return a(), L(Lt, { to: "body" }, [
        e.show ? (a(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: g[7] || (g[7] = (z) => w.$emit("close"))
        }, [
          s("div", {
            class: "modal-content",
            onClick: g[6] || (g[6] = mt(() => {
            }, ["stop"]))
          }, [
            s("div", am, [
              g[8] || (g[8] = s("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              s("button", {
                class: "modal-close",
                onClick: g[0] || (g[0] = (z) => w.$emit("close"))
              }, "✕")
            ]),
            s("div", lm, [
              s("div", im, [
                b(as, { level: "4" }, {
                  default: h(() => [...g[9] || (g[9] = [
                    $("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                b(_t, {
                  label: "Current Branch:",
                  value: e.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              u.value ? (a(), i("div", rm, [
                s("div", cm, [
                  b(as, { level: "4" }, {
                    default: h(() => [...g[10] || (g[10] = [
                      $("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  s("button", {
                    class: "link-btn",
                    onClick: g[1] || (g[1] = (z) => w.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                n.value.length ? (a(), i("div", um, [
                  s("div", dm, [
                    g[11] || (g[11] = s("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    s("span", fm, "BROKEN (COMMITTED) (" + f(n.value.length) + ")", 1)
                  ]),
                  s("div", mm, [
                    (a(!0), i(j, null, he(n.value, (z) => (a(), i("div", {
                      key: z.name,
                      class: "workflow-item"
                    }, [
                      s("span", vm, f(z.name), 1),
                      s("span", pm, f(z.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                l.value.length ? (a(), i("div", gm, [
                  s("div", hm, [
                    g[12] || (g[12] = s("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    s("span", ym, "BROKEN (UNCOMMITTED) (" + f(l.value.length) + ")", 1)
                  ]),
                  s("div", wm, [
                    (a(!0), i(j, null, he(l.value, (z) => (a(), i("div", {
                      key: z.name,
                      class: "workflow-item"
                    }, [
                      s("span", _m, f(z.name), 1),
                      s("span", km, f(z.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (x = (_ = e.status.workflows) == null ? void 0 : _.new) != null && x.length ? (a(), i("div", bm, [
                  s("div", $m, [
                    g[13] || (g[13] = s("span", { class: "workflow-status-icon new" }, "●", -1)),
                    s("span", Cm, "NEW (" + f(e.status.workflows.new.length) + ")", 1)
                  ]),
                  s("div", xm, [
                    (a(!0), i(j, null, he(e.status.workflows.new, (z) => (a(), i("div", {
                      key: z,
                      class: "workflow-item"
                    }, [
                      s("span", Sm, f(z), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (S = (C = e.status.workflows) == null ? void 0 : C.modified) != null && S.length ? (a(), i("div", Im, [
                  s("div", Em, [
                    g[14] || (g[14] = s("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    s("span", Tm, "MODIFIED (" + f(e.status.workflows.modified.length) + ")", 1)
                  ]),
                  s("div", Mm, [
                    (a(!0), i(j, null, he(e.status.workflows.modified, (z) => (a(), i("div", {
                      key: z,
                      class: "workflow-item"
                    }, [
                      s("span", Pm, f(z), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (M = (T = e.status.workflows) == null ? void 0 : T.deleted) != null && M.length ? (a(), i("div", Rm, [
                  s("div", Lm, [
                    g[15] || (g[15] = s("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    s("span", Nm, "DELETED (" + f(e.status.workflows.deleted.length) + ")", 1)
                  ]),
                  s("div", Dm, [
                    (a(!0), i(j, null, he(e.status.workflows.deleted, (z) => (a(), i("div", {
                      key: z,
                      class: "workflow-item"
                    }, [
                      s("span", Om, f(z), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                r.value.length ? (a(), i("div", Um, [
                  s("div", {
                    class: "workflow-group-header clickable",
                    onClick: g[2] || (g[2] = (z) => o.value = !o.value)
                  }, [
                    g[16] || (g[16] = s("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    s("span", Am, "SYNCED (" + f(r.value.length) + ")", 1),
                    s("span", zm, f(o.value ? "▼" : "▶"), 1)
                  ]),
                  o.value ? (a(), i("div", Fm, [
                    (a(!0), i(j, null, he(r.value, (z) => (a(), i("div", {
                      key: z,
                      class: "workflow-item"
                    }, [
                      s("span", Vm, f(z), 1)
                    ]))), 128))
                  ])) : y("", !0)
                ])) : y("", !0)
              ])) : y("", !0),
              c.value ? (a(), i("div", Bm, [
                b(as, { level: "4" }, {
                  default: h(() => [...g[17] || (g[17] = [
                    $("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (D = (P = e.status.git_changes) == null ? void 0 : P.nodes_added) != null && D.length ? (a(), i("div", Wm, [
                  s("div", Gm, [
                    g[18] || (g[18] = s("span", { class: "change-icon add" }, "+", -1)),
                    s("span", jm, "NODES ADDED (" + f(e.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  s("div", Hm, [
                    (a(!0), i(j, null, he(e.status.git_changes.nodes_added, (z) => (a(), i("div", {
                      key: v(z),
                      class: "change-item"
                    }, [
                      s("span", qm, f(v(z)), 1),
                      p(z) ? (a(), i("span", Km, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (O = (N = e.status.git_changes) == null ? void 0 : N.nodes_removed) != null && O.length ? (a(), i("div", Jm, [
                  s("div", Qm, [
                    g[19] || (g[19] = s("span", { class: "change-icon remove" }, "-", -1)),
                    s("span", Ym, "NODES REMOVED (" + f(e.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  s("div", Xm, [
                    (a(!0), i(j, null, he(e.status.git_changes.nodes_removed, (z) => (a(), i("div", {
                      key: v(z),
                      class: "change-item"
                    }, [
                      s("span", Zm, f(v(z)), 1),
                      p(z) ? (a(), i("span", ev, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (E = e.status.git_changes) != null && E.workflow_changes ? (a(), i("div", tv, [
                  g[20] || (g[20] = s("div", { class: "change-group-header" }, [
                    s("span", { class: "change-icon modified" }, "~"),
                    s("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  s("div", sv, [
                    s("div", ov, [
                      s("span", nv, f(m.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : y("", !0),
                (K = e.status.git_changes) != null && K.has_other_changes ? (a(), i("div", av, [...g[21] || (g[21] = [
                  s("div", { class: "change-group-header" }, [
                    s("span", { class: "change-icon modified" }, "~"),
                    s("span", { class: "change-group-title" }, "OTHER CHANGES")
                  ], -1),
                  s("div", { class: "change-list" }, [
                    s("div", { class: "change-item" }, [
                      s("span", { class: "node-name" }, "Configuration or other files modified")
                    ])
                  ], -1)
                ])])) : y("", !0)
              ])) : y("", !0),
              (ae = e.status.comparison) != null && ae.is_synced ? y("", !0) : (a(), i("div", lv, [
                s("div", iv, [
                  b(as, { level: "4" }, {
                    default: h(() => [...g[22] || (g[22] = [
                      $("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  s("button", {
                    class: "link-btn",
                    onClick: g[3] || (g[3] = (z) => w.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                g[26] || (g[26] = s("div", { class: "warning-box" }, [
                  s("span", { class: "warning-icon" }, "⚠"),
                  s("span", null, "Environment needs repair")
                ], -1)),
                (ue = (fe = e.status.comparison) == null ? void 0 : fe.missing_nodes) != null && ue.length ? (a(), i("div", rv, [
                  b(_t, {
                    label: "Missing Nodes:",
                    value: `${e.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  s("div", cv, [
                    (a(!0), i(j, null, he(e.status.comparison.missing_nodes.slice(0, 10), (z) => (a(), i("div", {
                      key: z,
                      class: "drift-list-item"
                    }, " - " + f(z), 1))), 128)),
                    e.status.comparison.missing_nodes.length > 10 ? (a(), i("div", uv, " ... and " + f(e.status.comparison.missing_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (X = (we = e.status.comparison) == null ? void 0 : we.extra_nodes) != null && X.length ? (a(), i("div", dv, [
                  b(_t, {
                    label: "Extra Nodes:",
                    value: `${e.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  s("div", fv, [
                    (a(!0), i(j, null, he(e.status.comparison.extra_nodes.slice(0, 10), (z) => (a(), i("div", {
                      key: z,
                      class: "drift-list-item"
                    }, " - " + f(z), 1))), 128)),
                    e.status.comparison.extra_nodes.length > 10 ? (a(), i("div", mv, " ... and " + f(e.status.comparison.extra_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (Y = (G = e.status.comparison) == null ? void 0 : G.version_mismatches) != null && Y.length ? (a(), i("div", vv, [
                  b(_t, {
                    label: "Version Mismatches:",
                    value: `${e.status.comparison.version_mismatches.length} node(s) have wrong versions`
                  }, null, 8, ["value"]),
                  s("div", pv, [
                    (a(!0), i(j, null, he(e.status.comparison.version_mismatches.slice(0, 10), (z) => (a(), i("div", {
                      key: z.name,
                      class: "drift-list-item version-mismatch"
                    }, [
                      $(f(z.name) + ": ", 1),
                      s("span", gv, f(z.actual), 1),
                      g[23] || (g[23] = $(" → ", -1)),
                      s("span", hv, f(z.expected), 1)
                    ]))), 128)),
                    e.status.comparison.version_mismatches.length > 10 ? (a(), i("div", yv, " ... and " + f(e.status.comparison.version_mismatches.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                ((Re = e.status.comparison) == null ? void 0 : Re.packages_in_sync) === !1 ? (a(), i("div", wv, [
                  b(_t, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ])) : y("", !0),
                s("div", _v, [
                  b(Te, {
                    variant: "warning",
                    loading: e.isRepairing,
                    onClick: g[4] || (g[4] = (z) => w.$emit("repair"))
                  }, {
                    default: h(() => [...g[24] || (g[24] = [
                      $(" Repair Environment ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"]),
                  g[25] || (g[25] = s("p", { class: "help-text" }, "Syncs environment to match pyproject.toml manifest", -1))
                ])
              ])),
              (ge = (se = e.status.comparison) == null ? void 0 : se.disabled_nodes) != null && ge.length ? (a(), i("div", kv, [
                b(as, { level: "4" }, {
                  default: h(() => [...g[27] || (g[27] = [
                    $("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                s("div", bv, [
                  g[28] || (g[28] = s("span", { class: "info-icon" }, "ℹ", -1)),
                  s("span", null, f(e.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                s("div", $v, [
                  (a(!0), i(j, null, he(e.status.comparison.disabled_nodes.slice(0, 10), (z) => (a(), i("div", {
                    key: z,
                    class: "drift-list-item"
                  }, " • " + f(z), 1))), 128)),
                  e.status.comparison.disabled_nodes.length > 10 ? (a(), i("div", Cv, " ... and " + f(e.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : y("", !0)
                ])
              ])) : y("", !0),
              (e.status.missing_models_count ?? 0) > 0 ? (a(), i("div", xv, [
                b(as, { level: "4" }, {
                  default: h(() => [...g[29] || (g[29] = [
                    $("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                s("div", Sv, [
                  g[30] || (g[30] = s("span", { class: "warning-icon" }, "⚠", -1)),
                  s("span", null, f(e.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                g[31] || (g[31] = s("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : y("", !0),
              d.value ? (a(), i("div", Iv, [...g[32] || (g[32] = [
                s("div", { class: "empty-icon" }, "✅", -1),
                s("div", { class: "empty-message" }, [
                  s("strong", null, "Environment is clean!"),
                  s("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : y("", !0)
            ]),
            s("div", Ev, [
              b(Te, {
                variant: "secondary",
                onClick: g[5] || (g[5] = (z) => w.$emit("close"))
              }, {
                default: h(() => [...g[33] || (g[33] = [
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
}), Mv = /* @__PURE__ */ Se(Tv, [["__scopeId", "data-v-e2b37122"]]), Pv = { class: "health-section-header" }, Rv = { class: "suggestions-content" }, Lv = { class: "suggestions-text" }, Nv = { style: { "margin-top": "var(--cg-space-3)" } }, Dv = {
  key: 1,
  class: "no-issues-text"
}, Ov = /* @__PURE__ */ be({
  __name: "StatusSection",
  props: {
    status: {},
    setupState: { default: "managed" }
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes", "repair-missing-models", "repair-environment", "start-setup", "view-environments", "create-environment"],
  setup(e, { expose: t, emit: o }) {
    const n = e, l = k(!1), r = k(!1);
    function u() {
      l.value = !0;
    }
    function c() {
      l.value = !1, m("view-workflows");
    }
    function d() {
      l.value = !1, m("view-nodes");
    }
    const m = o, v = k(!1), p = k(!1);
    function w() {
      p.value = !0, m("repair-environment");
    }
    function g() {
      p.value = !1;
    }
    function _() {
      l.value = !1;
    }
    const x = R(() => {
      const Ee = n.status.workflows.analyzed || [], H = Ee.filter(
        (ee) => ee.unresolved_models_count > 0 || ee.ambiguous_models_count > 0
      );
      return H.length === 0 && n.status.missing_models_count > 0 ? Ee.filter((ee) => ee.sync_state === "synced") : H;
    });
    function C() {
      const Ee = x.value;
      Ee.length !== 0 && (v.value = !0, m("repair-missing-models", Ee.map((H) => H.name)));
    }
    function S() {
      v.value = !1;
    }
    t({ resetRepairingState: S, resetRepairingEnvironmentState: g, closeDetailModal: _ });
    const T = R(() => n.status.workflows.new.length > 0 || n.status.workflows.modified.length > 0 || n.status.workflows.deleted.length > 0), M = R(() => n.status.has_changes), P = R(() => {
      const Ee = n.status.git_changes;
      return Ee.nodes_added.length > 0 || Ee.nodes_removed.length > 0 || Ee.workflow_changes;
    }), D = R(() => n.status.has_changes || T.value), N = R(() => Object.keys(n.status.git_changes.workflow_changes_detail).length), O = R(() => n.status.git_changes.has_other_changes), E = R(() => {
      var Ee;
      return ((Ee = n.status.workflows.analyzed) == null ? void 0 : Ee.filter((H) => H.status === "broken")) || [];
    }), K = R(() => {
      var Ee;
      return ((Ee = n.status.workflows.analyzed) == null ? void 0 : Ee.filter(
        (H) => H.has_path_sync_issues && !H.has_issues
      )) || [];
    }), ae = R(() => E.value.length > 0);
    function fe(Ee) {
      const H = [
        />=\s*v?(\d+(?:\.\d+){1,3})/i,
        /requires\s+comfyui\s*v?(\d+(?:\.\d+){1,3})/i,
        /comfyui\s*v?(\d+(?:\.\d+){1,3})\+/i
      ];
      for (const ee of H) {
        const q = Ee.match(ee);
        if (q != null && q[1])
          return q[1];
      }
      return null;
    }
    function ue(Ee) {
      const H = Ee.map(fe).filter((ee) => !!ee);
      return [...new Set(H)];
    }
    function we(Ee) {
      if (Ee.length === 0) return "";
      if (Ee.length === 1) return ` (>= ${Ee[0]})`;
      const H = Ee.slice(0, 2).map((q) => `>= ${q}`).join(", "), ee = Ee.length > 2;
      return ` (${H}${ee ? ", ..." : ""})`;
    }
    function X(Ee) {
      return Ee.replace(/uninstallable node mappings?/gi, (H) => H.toLowerCase().endsWith("s") ? "community packages" : "community package").replace(/no installable package versions?/gi, "need community packages").replace(/\bare uninstallable\b/gi, "need community packages").replace(/\buninstallable\b/gi, "community-mapped");
    }
    function G(Ee) {
      const H = X(Ee.issue_summary || "Has issues"), ee = /(?:>=|v?\d+\.\d+)/i.test(H), q = ue(Ee.version_gated_guidance || []);
      return (Ee.nodes_version_gated_count || 0) > 0 && q.length > 0 && !ee ? `${Ee.name} — ${H} (needs ComfyUI ${q.map((Z) => `>= ${Z}`).join(", ")})` : `${Ee.name} — ${H}`;
    }
    const Y = R(() => E.value.reduce(
      (Ee, H) => Ee + (H.nodes_version_gated_count || 0),
      0
    )), Re = R(() => {
      const Ee = E.value.flatMap(
        (H) => ue(H.version_gated_guidance || [])
      );
      return [...new Set(Ee)];
    }), se = R(() => E.value.reduce(
      (Ee, H) => Ee + (H.nodes_uninstallable_count || 0),
      0
    )), ge = R(() => {
      const Ee = [];
      return Y.value > 0 && Ee.push(
        `${Y.value} require newer ComfyUI${we(Re.value)}`
      ), se.value > 0 && Ee.push(`${se.value} need community packages`), Ee.length > 0 ? `These workflows have missing, blocked, or actionable dependencies (${Ee.join(", ")}) that must be resolved before they can run.` : "These workflows have missing dependencies that must be resolved before they can run.";
    }), z = R(() => ae.value || K.value.length > 0 || n.status.missing_models_count > 0 || !n.status.comparison.is_synced || n.status.has_legacy_manager), me = R(() => {
      const Ee = [];
      return n.status.workflows.new.length > 0 && Ee.push(`${n.status.workflows.new.length} new`), n.status.workflows.modified.length > 0 && Ee.push(`${n.status.workflows.modified.length} modified`), n.status.workflows.deleted.length > 0 && Ee.push(`${n.status.workflows.deleted.length} deleted`), Ee.length > 0 ? `${Ee.join(", ")} workflow${Ee.length === 1 && !Ee[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), Pe = R(() => {
      var ee, q;
      const Ee = [], H = n.status.comparison;
      return (ee = H.missing_nodes) != null && ee.length && Ee.push(`${H.missing_nodes.length} missing node${H.missing_nodes.length === 1 ? "" : "s"}`), (q = H.extra_nodes) != null && q.length && Ee.push(`${H.extra_nodes.length} untracked node${H.extra_nodes.length === 1 ? "" : "s"}`), Ee.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${Ee.join(" and ")}.`;
    }), We = R(() => {
      var ee, q;
      const Ee = [], H = n.status.comparison;
      return (ee = H.extra_nodes) != null && ee.length && (H.extra_nodes.slice(0, 3).forEach((Z) => {
        Ee.push(`Untracked: ${Z}`);
      }), H.extra_nodes.length > 3 && Ee.push(`...and ${H.extra_nodes.length - 3} more untracked`)), (q = H.missing_nodes) != null && q.length && (H.missing_nodes.slice(0, 3).forEach((Z) => {
        Ee.push(`Missing: ${Z}`);
      }), H.missing_nodes.length > 3 && Ee.push(`...and ${H.missing_nodes.length - 3} more missing`)), Ee;
    });
    return (Ee, H) => (a(), i(j, null, [
      b(At, null, {
        header: h(() => [
          b(zt, { title: "STATUS" })
        ]),
        content: h(() => [
          n.setupState === "no_workspace" ? (a(), L(us, {
            key: 0,
            severity: "info",
            icon: "🚀",
            title: "No ComfyGit workspace detected",
            description: "Set up a workspace to manage your ComfyUI environments, workflows, and models with version control."
          }, {
            actions: h(() => [
              b(Te, {
                variant: "primary",
                size: "sm",
                onClick: H[0] || (H[0] = (ee) => Ee.$emit("start-setup"))
              }, {
                default: h(() => [...H[13] || (H[13] = [
                  $(" Start Setup ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : n.setupState === "unmanaged" ? (a(), L(us, {
            key: 1,
            severity: "warning",
            icon: "⚠",
            title: "Not in a managed environment",
            description: "You're running from an unmanaged ComfyUI installation. Switch to a managed environment to use ComfyGit features."
          }, {
            actions: h(() => [
              b(Te, {
                variant: "primary",
                size: "sm",
                onClick: H[1] || (H[1] = (ee) => Ee.$emit("view-environments"))
              }, {
                default: h(() => [...H[14] || (H[14] = [
                  $(" View Environments ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : n.setupState === "empty_workspace" ? (a(), L(us, {
            key: 2,
            severity: "info",
            icon: "🏗",
            title: "Workspace ready - create your first environment",
            description: "Your workspace is set up. Create a managed environment to start using ComfyGit."
          }, {
            actions: h(() => [
              b(Te, {
                variant: "primary",
                size: "sm",
                onClick: H[2] || (H[2] = (ee) => Ee.$emit("create-environment"))
              }, {
                default: h(() => [...H[15] || (H[15] = [
                  $(" Create Environment ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : y("", !0),
          s("div", {
            class: "health-section-wrapper",
            onMouseenter: H[4] || (H[4] = (ee) => r.value = !0),
            onMouseleave: H[5] || (H[5] = (ee) => r.value = !1)
          }, [
            s("div", Pv, [
              b(as, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: h(() => [...H[16] || (H[16] = [
                  $(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              b(Ed, { name: "fade" }, {
                default: h(() => [
                  r.value ? (a(), L(Te, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: u
                  }, {
                    default: h(() => [...H[17] || (H[17] = [
                      $(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : y("", !0)
                ]),
                _: 1
              })
            ]),
            b(Df, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, Yt({
              left: h(() => [
                e.status.workflows.new.length ? (a(), L(ys, {
                  key: 0,
                  icon: "●",
                  count: e.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : y("", !0),
                e.status.workflows.modified.length ? (a(), L(ys, {
                  key: 1,
                  icon: "●",
                  count: e.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : y("", !0),
                e.status.workflows.deleted.length ? (a(), L(ys, {
                  key: 2,
                  icon: "●",
                  count: e.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : y("", !0),
                b(ys, {
                  icon: "✓",
                  count: e.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: T.value
                }, null, 8, ["count", "separator"])
              ]),
              right: h(() => [
                e.status.git_changes.nodes_added.length ? (a(), L(ys, {
                  key: 0,
                  icon: "●",
                  count: e.status.git_changes.nodes_added.length,
                  label: e.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : y("", !0),
                e.status.git_changes.nodes_removed.length ? (a(), L(ys, {
                  key: 1,
                  icon: "●",
                  count: e.status.git_changes.nodes_removed.length,
                  label: e.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : y("", !0),
                e.status.git_changes.workflow_changes ? (a(), L(ys, {
                  key: 2,
                  icon: "●",
                  count: N.value,
                  label: N.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : y("", !0),
                O.value ? (a(), L(ys, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : y("", !0),
                M.value && !P.value && !O.value ? (a(), L(ys, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : y("", !0),
                M.value ? y("", !0) : (a(), L(ys, {
                  key: 5,
                  icon: "✓",
                  label: "No uncommitted changes",
                  variant: "ok"
                }))
              ]),
              _: 2
            }, [
              D.value ? {
                name: "footer",
                fn: h(() => [
                  H[19] || (H[19] = s("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  s("div", Rv, [
                    s("span", Lv, f(me.value), 1),
                    b(Te, {
                      variant: "primary",
                      size: "sm",
                      onClick: H[3] || (H[3] = (ee) => Ee.$emit("commit-changes"))
                    }, {
                      default: h(() => [...H[18] || (H[18] = [
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
          e.status.is_detached_head ? (a(), L(us, {
            key: 3,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: h(() => [
              b(Te, {
                variant: "primary",
                size: "sm",
                onClick: H[6] || (H[6] = (ee) => Ee.$emit("create-branch"))
              }, {
                default: h(() => [...H[20] || (H[20] = [
                  $(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : y("", !0),
          s("div", Nv, [
            b(as, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: h(() => [...H[21] || (H[21] = [
                $(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            z.value ? (a(), i(j, { key: 0 }, [
              E.value.length > 0 ? (a(), L(us, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${E.value.length} workflow${E.value.length === 1 ? "" : "s"} can't run`,
                description: ge.value,
                items: E.value.map(G)
              }, {
                actions: h(() => [
                  b(Te, {
                    variant: "primary",
                    size: "sm",
                    onClick: H[7] || (H[7] = (ee) => Ee.$emit("view-workflows"))
                  }, {
                    default: h(() => [...H[22] || (H[22] = [
                      $(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "description", "items"])) : y("", !0),
              K.value.length > 0 ? (a(), L(us, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${K.value.length} workflow${K.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: K.value.map((ee) => `${ee.name} — ${ee.models_needing_path_sync_count} model path${ee.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: h(() => [
                  b(Te, {
                    variant: "primary",
                    size: "sm",
                    onClick: H[8] || (H[8] = (ee) => Ee.$emit("view-workflows"))
                  }, {
                    default: h(() => [...H[23] || (H[23] = [
                      $(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : y("", !0),
              e.status.missing_models_count > 0 && !ae.value ? (a(), L(us, {
                key: 2,
                severity: "warning",
                icon: "⚠",
                title: `${e.status.missing_models_count} missing model${e.status.missing_models_count === 1 ? "" : "s"}`,
                description: "Some workflows reference models that are not found in the workspace index. This can happen after updating the model index."
              }, {
                actions: h(() => [
                  b(Te, {
                    variant: "primary",
                    size: "sm",
                    disabled: v.value,
                    onClick: C
                  }, {
                    default: h(() => [
                      $(f(v.value ? "Repairing..." : "Repair"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  b(Te, {
                    variant: "secondary",
                    size: "sm",
                    onClick: H[9] || (H[9] = (ee) => Ee.$emit("view-workflows"))
                  }, {
                    default: h(() => [...H[24] || (H[24] = [
                      $(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : y("", !0),
              e.status.comparison.is_synced ? y("", !0) : (a(), L(us, {
                key: 3,
                severity: "error",
                icon: "⚠",
                title: "Environment not synced",
                description: Pe.value,
                items: We.value
              }, {
                actions: h(() => [
                  b(Te, {
                    variant: "secondary",
                    size: "sm",
                    onClick: u
                  }, {
                    default: h(() => [...H[25] || (H[25] = [
                      $(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  b(Te, {
                    variant: "primary",
                    size: "sm",
                    onClick: H[10] || (H[10] = (ee) => Ee.$emit("view-nodes"))
                  }, {
                    default: h(() => [...H[26] || (H[26] = [
                      $(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["description", "items"])),
              e.status.has_legacy_manager ? (a(), L(us, {
                key: 4,
                severity: "warning",
                icon: "⚠",
                title: "Legacy ComfyUI-Manager detected",
                description: "The old ComfyUI-Manager extension is installed alongside ComfyGit. For proper environment tracking, use ComfyGit's built-in Manager instead and remove the legacy extension."
              }, {
                actions: h(() => [
                  b(Te, {
                    variant: "primary",
                    size: "sm",
                    onClick: H[11] || (H[11] = (ee) => Ee.$emit("view-nodes"))
                  }, {
                    default: h(() => [...H[27] || (H[27] = [
                      $(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })) : y("", !0)
            ], 64)) : D.value ? (a(), i("span", Dv, "No issues")) : (a(), L(cs, {
              key: 2,
              icon: "✅",
              message: "Everything looks good! No issues detected."
            }))
          ])
        ]),
        _: 1
      }),
      b(Mv, {
        show: l.value,
        status: e.status,
        "is-repairing": p.value,
        onClose: H[12] || (H[12] = (ee) => l.value = !1),
        onNavigateWorkflows: c,
        onNavigateNodes: d,
        onRepair: w
      }, null, 8, ["show", "status", "is-repairing"])
    ], 64));
  }
}), Uv = /* @__PURE__ */ Se(Ov, [["__scopeId", "data-v-df52ba90"]]), uR = ro({
  hasWorkspace: !1,
  hasEnvironments: !1,
  isManaged: !1,
  hasLegacyManager: !1
});
const dR = [
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
  ...Array(12).fill(null).map((e, t) => ({
    name: `synced-workflow-${t + 1}.json`,
    status: "synced",
    missing_nodes: 0,
    missing_models: 0,
    node_count: 5 + t,
    model_count: 1 + t % 3,
    sync_state: "synced"
  }))
], fR = {
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
}, Av = [
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
], mR = [
  ...Av,
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
function Oo() {
  return !1;
}
class Yr extends Error {
  constructor(o, n, l, r) {
    super(o);
    yn(this, "status");
    yn(this, "data");
    yn(this, "endpoint");
    this.name = "ComfyGitApiError", this.status = n, this.data = l, this.endpoint = r;
  }
}
function zv() {
  return typeof crypto < "u" && crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const t = Math.random() * 16 | 0;
    return (e === "x" ? t : t & 3 | 8).toString(16);
  });
}
function vt() {
  const e = k(!1), t = k(null);
  async function o(W, ye) {
    var Dt;
    if (!((Dt = window.app) != null && Dt.api))
      throw new Error("ComfyUI API not available");
    const je = await window.app.api.fetchApi(W, ye), dt = await je.text();
    if (!je.ok) {
      let jt = {};
      if (dt)
        try {
          const Ze = JSON.parse(dt);
          Ze && typeof Ze == "object" && (jt = Ze);
        } catch {
          jt = { error: dt };
        }
      const gs = jt.error || jt.message || jt.detail || je.statusText || `Request failed: ${je.status}`;
      throw new Yr(String(gs), je.status, jt, W);
    }
    if (dt)
      return JSON.parse(dt);
  }
  async function n(W) {
    return o(`/v2/comfygit/cloud/auth/config?cloud_url=${encodeURIComponent(W)}`);
  }
  async function l(W, ye, je) {
    return o("/v2/comfygit/cloud/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cloud_url: W, email: ye, password: je })
    });
  }
  async function r(W, ye, je) {
    return o("/v2/comfygit/cloud/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cloud_url: W, email: ye, password: je })
    });
  }
  async function u(W, ye) {
    return o(`/v2/comfygit/cloud/auth/me?cloud_url=${encodeURIComponent(W)}`, {
      headers: { Authorization: `Bearer ${ye}` }
    });
  }
  async function c(W, ye) {
    return o("/v2/comfygit/cloud/auth/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cloud_url: W, refresh_token: ye || null })
    });
  }
  async function d(W, ye) {
    return o(`/v2/comfygit/cloud/environments?cloud_url=${encodeURIComponent(W)}`, {
      headers: { Authorization: `Bearer ${ye}` }
    });
  }
  async function m(W, ye, je) {
    return o(
      `/v2/comfygit/cloud/environments/${encodeURIComponent(ye)}/revisions?cloud_url=${encodeURIComponent(W)}`,
      {
        headers: { Authorization: `Bearer ${je}` }
      }
    );
  }
  async function v(W, ye, je, dt) {
    return o("/v2/comfygit/cloud/publish", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${ye}`
      },
      body: JSON.stringify({
        cloud_url: W,
        source_message: je || null,
        cloud_environment_id: dt || null
      })
    });
  }
  async function p(W = !1) {
    return o(W ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function w(W, ye = !1) {
    return o("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: W, allow_issues: ye })
    });
  }
  async function g(W = 10, ye = 0) {
    return o(`/v2/comfygit/log?limit=${W}&offset=${ye}`);
  }
  async function _(W, ye = 50) {
    return o(`/v2/comfygit/log?branch=${encodeURIComponent(W)}&limit=${ye}`);
  }
  async function x(W) {
    return o("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: W })
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
  async function T(W) {
    return o("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: W, force: !0 })
    });
  }
  async function M(W) {
    return o(`/v2/comfygit/environment_export/${encodeURIComponent(W)}/validate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({})
    });
  }
  async function P(W, ye) {
    return o(`/v2/comfygit/environment_export/${encodeURIComponent(W)}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: ye, force: !0 })
    });
  }
  async function D() {
    return o("/v2/comfygit/branches");
  }
  async function N(W) {
    return o(`/v2/comfygit/commit/${W}`);
  }
  async function O(W, ye = !1) {
    return o("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: W, force: ye })
    });
  }
  async function E(W, ye = "HEAD") {
    return o("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: W, start_point: ye })
    });
  }
  async function K(W, ye = !1) {
    return o("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: W, force: ye })
    });
  }
  async function ae(W, ye = !1) {
    return o(`/v2/comfygit/branch/${encodeURIComponent(W)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: ye })
    });
  }
  async function fe() {
    try {
      return await o("/v2/comfygit/environments");
    } catch {
      try {
        const W = await p();
        return {
          environments: [{
            name: W.environment,
            is_current: !0,
            path: "~/comfygit/environments/" + W.environment,
            created_at: (/* @__PURE__ */ new Date()).toISOString(),
            workflow_count: W.workflows.total,
            node_count: 0,
            model_count: 0,
            current_branch: W.branch
          }],
          current: W.environment,
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
  async function ue() {
    return (await fe()).environments;
  }
  async function we(W) {
    try {
      return await o(`/v2/comfygit/environments/${encodeURIComponent(W)}`);
    } catch {
      return null;
    }
  }
  async function X(W, ye) {
    const je = { target_env: W };
    return ye && (je.workspace_path = ye), o("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(je)
    });
  }
  async function G() {
    try {
      return o("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function Y(W) {
    return o("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(W)
    });
  }
  async function Re() {
    return o("/v2/workspace/environments/create_status");
  }
  async function se(W = 20) {
    return o(`/v2/workspace/comfyui_releases?limit=${W}`);
  }
  async function ge(W) {
    return o(`/v2/workspace/environments/${W}`, {
      method: "DELETE"
    });
  }
  async function z(W = !1) {
    try {
      return o(W ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const ye = await p(W), je = [];
      return ye.workflows.new.forEach((dt) => {
        je.push({
          name: dt,
          status: "new",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: dt
        });
      }), ye.workflows.modified.forEach((dt) => {
        je.push({
          name: dt,
          status: "modified",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: dt
        });
      }), ye.workflows.synced.forEach((dt) => {
        je.push({
          name: dt,
          status: "synced",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: dt
        });
      }), je;
    }
  }
  async function me(W) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(W)}/details`);
  }
  async function Pe(W) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(W)}/contract`);
  }
  async function We(W, ye) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(W)}/contract`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ye)
    });
  }
  async function Ee(W) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(W)}/contract`, {
      method: "DELETE"
    });
  }
  async function H(W) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(W)}/resolve`, {
      method: "POST"
    });
  }
  async function ee(W, ye, je) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(W)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: ye, install_models: je })
    });
  }
  async function q(W, ye, je) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(W)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: ye, importance: je })
    });
  }
  async function Z() {
    try {
      return o("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function xe() {
    try {
      return o("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function ce(W) {
    return o(`/v2/workspace/models/details/${encodeURIComponent(W)}`);
  }
  async function le(W) {
    return o(`/v2/workspace/models/${encodeURIComponent(W)}/source-candidates`);
  }
  async function I(W) {
    return o("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: W })
    });
  }
  async function V(W, ye) {
    return o(`/v2/workspace/models/${W}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: ye })
    });
  }
  async function ie(W, ye) {
    return o(`/v2/workspace/models/${W}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: ye })
    });
  }
  async function Ce(W) {
    return o(`/v2/workspace/models/${W}`, {
      method: "DELETE"
    });
  }
  async function _e(W) {
    return o("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(W)
    });
  }
  async function $e() {
    return o("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function Ue() {
    return o("/v2/workspace/models/directory");
  }
  async function ze(W) {
    return o("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: W })
    });
  }
  async function Le(W) {
    const ye = new URLSearchParams({ url: W });
    return o(`/v2/workspace/huggingface/repo-info?${ye}`);
  }
  async function Ie() {
    return o("/v2/workspace/models/subdirectories");
  }
  async function Ke(W, ye = 10) {
    const je = new URLSearchParams({ query: W, limit: String(ye) });
    return o(`/v2/workspace/huggingface/search?${je}`);
  }
  async function Ve(W) {
    try {
      const ye = W ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(W)}` : "/v2/comfygit/config";
      return o(ye);
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
  async function ve(W, ye) {
    const je = ye ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(ye)}` : "/v2/comfygit/config";
    return o(je, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(W)
    });
  }
  async function Q(W, ye) {
    try {
      const je = new URLSearchParams();
      return W && je.append("level", W), ye && je.append("lines", ye.toString()), o(`/v2/comfygit/debug/logs?${je}`);
    } catch {
      return [];
    }
  }
  async function He(W, ye) {
    try {
      const je = new URLSearchParams();
      return W && je.append("level", W), ye && je.append("lines", ye.toString()), o(`/v2/workspace/debug/logs?${je}`);
    } catch {
      return [];
    }
  }
  async function ke() {
    return o("/v2/comfygit/debug/logs/path");
  }
  async function Ye() {
    return o("/v2/comfygit/debug/manifest");
  }
  async function ot() {
    return o("/v2/workspace/debug/logs/path");
  }
  async function Ae(W, ye) {
    try {
      const je = new URLSearchParams();
      return W && je.append("level", W), ye && je.append("lines", ye.toString()), o(`/v2/workspace/debug/orchestrator-logs?${je}`);
    } catch {
      return [];
    }
  }
  async function A() {
    return o("/v2/workspace/debug/orchestrator-logs/path");
  }
  async function oe(W) {
    return o("/v2/workspace/open-file", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: W })
    });
  }
  async function pe() {
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
  async function Je(W) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(W)}/track-dev`, {
      method: "POST"
    });
  }
  async function U(W) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(W)}/install`, {
      method: "POST"
    });
  }
  async function F(W, ye) {
    var gs, Ze, Ea, Ll;
    const je = zv(), dt = ((Ze = (gs = window.app) == null ? void 0 : gs.api) == null ? void 0 : Ze.clientId) ?? ((Ll = (Ea = window.app) == null ? void 0 : Ea.api) == null ? void 0 : Ll.initialClientId) ?? "comfygit-panel", Dt = {
      id: W.id,
      version: W.version || W.selected_version || "latest",
      selected_version: W.selected_version || "latest",
      mode: W.mode || "remote",
      channel: W.channel || "default"
    };
    return W.install_source && (Dt.install_source = W.install_source), W.install_source === "git" && W.repository && (Dt.repository = W.repository), await o("/v2/manager/queue/task", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        kind: "install",
        params: Dt,
        ui_id: je,
        client_id: dt
      })
    }), console.log("[ComfyGit] Task queued with ui_id:", je, "for package:", W.id), ye != null && ye.beforeQueueStart && await ye.beforeQueueStart(je), await o("/v2/manager/queue/start", {
      method: "POST"
    }), { ui_id: je };
  }
  async function te(W) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(W)}/update`, {
      method: "POST"
    });
  }
  async function De(W, ye) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(W)}/criticality`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ criticality: ye })
    });
  }
  async function Oe(W) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(W)}`, {
      method: "DELETE"
    });
  }
  async function Me() {
    try {
      return o("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function Ge(W, ye) {
    return o("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: W, url: ye })
    });
  }
  async function nt(W) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(W)}`, {
      method: "DELETE"
    });
  }
  async function bt(W, ye, je) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(W)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: ye, push_url: je })
    });
  }
  async function Et(W, ye) {
    const je = {};
    return ye && (je["X-Git-Auth-Token"] = ye), o(`/v2/comfygit/remotes/${encodeURIComponent(W)}/fetch`, {
      method: "POST",
      headers: je
    });
  }
  async function re(W) {
    try {
      return o(`/v2/comfygit/remotes/${encodeURIComponent(W)}/status`);
    } catch {
      return null;
    }
  }
  async function B(W = "skip", ye = !0) {
    return o("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: W,
        remove_extra_nodes: ye
      })
    });
  }
  async function de(W, ye) {
    const je = ye ? `/v2/comfygit/remotes/${encodeURIComponent(W)}/pull-preview?branch=${encodeURIComponent(ye)}` : `/v2/comfygit/remotes/${encodeURIComponent(W)}/pull-preview`;
    return o(je);
  }
  async function Be(W, ye = {}) {
    const je = { "Content-Type": "application/json" };
    return ye.authToken && (je["X-Git-Auth-Token"] = ye.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(W)}/pull`, {
      method: "POST",
      headers: je,
      body: JSON.stringify({
        model_strategy: ye.modelStrategy || "skip",
        force: ye.force || !1,
        resolutions: ye.resolutions
      })
    });
  }
  async function ut(W, ye) {
    const je = ye ? `/v2/comfygit/remotes/${encodeURIComponent(W)}/push-preview?branch=${encodeURIComponent(ye)}` : `/v2/comfygit/remotes/${encodeURIComponent(W)}/push-preview`;
    return o(je);
  }
  async function Ct(W, ye = {}) {
    const je = { "Content-Type": "application/json" };
    return ye.authToken && (je["X-Git-Auth-Token"] = ye.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(W)}/push`, {
      method: "POST",
      headers: je,
      body: JSON.stringify({ force: ye.force || !1 })
    });
  }
  async function lt(W, ye) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(W)}/validate-merge`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resolutions: ye })
    });
  }
  async function xt(W) {
    const ye = {
      success: 0,
      failed: []
    };
    for (const je of W)
      try {
        await H(je), ye.success++;
      } catch (dt) {
        ye.failed.push({
          name: je,
          error: dt instanceof Error ? dt.message : "Unknown error"
        });
      }
    return ye;
  }
  async function ss(W) {
    var dt;
    const ye = new FormData();
    if (ye.append("file", W), !((dt = window.app) != null && dt.api))
      throw new Error("ComfyUI API not available");
    const je = await window.app.api.fetchApi("/v2/workspace/import/preview", {
      method: "POST",
      body: ye
      // Don't set Content-Type - browser will set multipart boundary automatically
    });
    if (!je.ok) {
      const Dt = await je.json().catch(() => ({}));
      throw new Error(Dt.error || `Preview failed: ${je.status}`);
    }
    return je.json();
  }
  async function Is(W) {
    return o(
      `/v2/workspace/environments/validate?name=${encodeURIComponent(W)}`
    );
  }
  async function Js(W, ye, je, dt) {
    var gs;
    const Dt = new FormData();
    if (Dt.append("file", W), Dt.append("name", ye), Dt.append("model_strategy", je), Dt.append("torch_backend", dt), !((gs = window.app) != null && gs.api))
      throw new Error("ComfyUI API not available");
    const jt = await window.app.api.fetchApi("/v2/workspace/import", {
      method: "POST",
      body: Dt
    });
    if (!jt.ok) {
      const Ze = await jt.json().catch(() => ({}));
      throw new Error(Ze.message || Ze.error || `Import failed: ${jt.status}`);
    }
    return jt.json();
  }
  async function ca() {
    return o("/v2/workspace/import/status");
  }
  async function ua(W) {
    return o("/v2/workspace/import/preview/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ git_url: W })
    });
  }
  async function zs(W, ye, je, dt) {
    return o("/v2/workspace/import/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        git_url: W,
        name: ye,
        model_strategy: je,
        torch_backend: dt
      })
    });
  }
  async function da() {
    return o("/v2/setup/status");
  }
  async function co() {
    return o("/v2/comfygit/update-check");
  }
  async function uo() {
    return o("/v2/comfygit/update", { method: "POST" });
  }
  async function fa(W) {
    return o("/v2/setup/initialize_workspace", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(W)
    });
  }
  async function Es() {
    return o("/v2/setup/initialize_status");
  }
  async function ma(W) {
    return o("/v2/setup/validate_path", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(W)
    });
  }
  async function Lo() {
    return o("/v2/comfygit/deploy/summary");
  }
  async function va() {
    return o("/v2/comfygit/deploy/runpod/data-centers");
  }
  async function pa(W, ye) {
    return o("/v2/comfygit/deploy/runpod/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ api_key: W, save_key: ye })
    });
  }
  async function ga() {
    return o("/v2/comfygit/deploy/runpod/volumes");
  }
  async function ha(W) {
    const ye = W ? `/v2/comfygit/deploy/runpod/gpu-types?data_center_id=${encodeURIComponent(W)}` : "/v2/comfygit/deploy/runpod/gpu-types";
    return o(ye);
  }
  async function pn(W) {
    return o("/v2/comfygit/deploy/runpod", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(W)
    });
  }
  async function ya() {
    return o("/v2/comfygit/deploy/runpod/pods");
  }
  async function wa(W) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(W)}`, {
      method: "DELETE"
    });
  }
  async function _a(W) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(W)}/stop`, {
      method: "POST"
    });
  }
  async function ka(W) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(W)}/start`, {
      method: "POST"
    });
  }
  async function ba(W) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(W)}/status`);
  }
  async function $a(W) {
    return o("/v2/comfygit/deploy/package", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: W })
    });
  }
  async function Ca(W = !1) {
    return o(W ? "/v2/comfygit/deploy/runpod/key?verify=true" : "/v2/comfygit/deploy/runpod/key");
  }
  async function xa() {
    return o("/v2/comfygit/deploy/runpod/key", {
      method: "DELETE"
    });
  }
  async function gn() {
    return o("/v2/comfygit/deploy/custom/workers");
  }
  async function Sa(W) {
    return o("/v2/comfygit/deploy/custom/workers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(W)
    });
  }
  async function Ia(W) {
    return o(`/v2/comfygit/deploy/custom/workers/${encodeURIComponent(W)}`, {
      method: "DELETE"
    });
  }
  async function hn(W) {
    return o("/v2/comfygit/deploy/custom/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(W)
    });
  }
  async function ne() {
    return o("/v2/comfygit/deploy/custom/scan", {
      method: "POST"
    });
  }
  async function J(W) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(W)}/info`);
  }
  async function qe(W) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(W)}/instances`);
  }
  async function Qe(W, ye) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(W)}/instances`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ye)
    });
  }
  async function at(W, ye) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(W)}/instances/${encodeURIComponent(ye)}/start`, {
      method: "POST"
    });
  }
  async function pt(W, ye) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(W)}/instances/${encodeURIComponent(ye)}/stop`, {
      method: "POST"
    });
  }
  async function Nt(W, ye) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(W)}/instances/${encodeURIComponent(ye)}`, {
      method: "DELETE"
    });
  }
  async function os(W) {
    return o("/v2/comfygit/deploy/test-git-auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: W })
    });
  }
  return {
    isLoading: e,
    error: t,
    getStatus: p,
    commit: w,
    getHistory: g,
    getBranchHistory: _,
    exportEnv: x,
    validateExport: C,
    validateDeploy: S,
    exportEnvWithForce: T,
    validateEnvironmentExport: M,
    exportEnvironmentWithForce: P,
    // Git Operations
    getBranches: D,
    getCommitDetail: N,
    checkout: O,
    createBranch: E,
    switchBranch: K,
    deleteBranch: ae,
    // Environment Management
    listEnvironments: fe,
    getEnvironments: ue,
    getEnvironmentDetails: we,
    switchEnvironment: X,
    getSwitchProgress: G,
    createEnvironment: Y,
    getCreateProgress: Re,
    getComfyUIReleases: se,
    deleteEnvironment: ge,
    // Workflow Management
    getWorkflows: z,
    getWorkflowDetails: me,
    getWorkflowContract: Pe,
    saveWorkflowContract: We,
    deleteWorkflowContract: Ee,
    resolveWorkflow: H,
    installWorkflowDeps: ee,
    setModelImportance: q,
    // Model Management
    getEnvironmentModels: Z,
    getWorkspaceModels: xe,
    getModelDetails: ce,
    getModelSourceCandidates: le,
    openFileLocation: I,
    addModelSource: V,
    removeModelSource: ie,
    deleteModel: Ce,
    downloadModel: _e,
    scanWorkspaceModels: $e,
    getModelsDirectory: Ue,
    setModelsDirectory: ze,
    getHuggingFaceRepoInfo: Le,
    getModelsSubdirectories: Ie,
    searchHuggingFaceRepos: Ke,
    // Settings
    getConfig: Ve,
    updateConfig: ve,
    // Cloud Auth
    getCloudAuthConfig: n,
    loginToCloud: l,
    signupToCloud: r,
    getCloudMe: u,
    logoutFromCloud: c,
    getCloudEnvironments: d,
    getCloudEnvironmentRevisions: m,
    publishCurrentEnvironmentToCloud: v,
    // Debug/Logs
    getEnvironmentLogs: Q,
    getEnvironmentManifest: Ye,
    getWorkspaceLogs: He,
    getEnvironmentLogPath: ke,
    getWorkspaceLogPath: ot,
    getOrchestratorLogs: Ae,
    getOrchestratorLogPath: A,
    openFile: oe,
    // Node Management
    getNodes: pe,
    trackNodeAsDev: Je,
    installNode: U,
    queueNodeInstall: F,
    updateNode: te,
    updateNodeCriticality: De,
    uninstallNode: Oe,
    // Git Remotes
    getRemotes: Me,
    addRemote: Ge,
    removeRemote: nt,
    updateRemoteUrl: bt,
    fetchRemote: Et,
    getRemoteSyncStatus: re,
    // Push/Pull
    getPullPreview: de,
    pullFromRemote: Be,
    getPushPreview: ut,
    pushToRemote: Ct,
    validateMerge: lt,
    // Environment Sync
    syncEnvironmentManually: B,
    // Workflow Repair
    repairWorkflowModels: xt,
    // Import Operations
    previewTarballImport: ss,
    previewGitImport: ua,
    validateEnvironmentName: Is,
    executeImport: Js,
    executeGitImport: zs,
    getImportProgress: ca,
    // First-Time Setup
    getSetupStatus: da,
    // Manager Update Notice
    getUpdateCheck: co,
    updateManager: uo,
    initializeWorkspace: fa,
    getInitializeProgress: Es,
    validatePath: ma,
    // Deploy Operations
    getDeploySummary: Lo,
    getDataCenters: va,
    testRunPodConnection: pa,
    getNetworkVolumes: ga,
    getRunPodGpuTypes: ha,
    deployToRunPod: pn,
    getRunPodPods: ya,
    terminateRunPodPod: wa,
    stopRunPodPod: _a,
    startRunPodPod: ka,
    getDeploymentStatus: ba,
    exportDeployPackage: $a,
    getStoredRunPodKey: Ca,
    clearRunPodKey: xa,
    // Custom Worker Operations
    getCustomWorkers: gn,
    addCustomWorker: Sa,
    removeCustomWorker: Ia,
    testWorkerConnection: hn,
    scanForWorkers: ne,
    getWorkerSystemInfo: J,
    getWorkerInstances: qe,
    deployToWorker: Qe,
    startWorkerInstance: at,
    stopWorkerInstance: pt,
    terminateWorkerInstance: Nt,
    // Git Authentication
    testGitAuth: os
  };
}
async function Cn(e, t) {
  var n;
  if (!((n = window.app) != null && n.api))
    throw new Error("ComfyUI API not available");
  const o = await window.app.api.fetchApi(e, t);
  if (!o.ok) {
    const l = await o.json().catch(() => ({}));
    throw new Error(l.error || l.message || `Request failed: ${o.status}`);
  }
  return o.json();
}
function Fv() {
  async function e() {
    try {
      return await Cn("/v2/comfygit/orchestrator/health");
    } catch {
      return null;
    }
  }
  async function t() {
    try {
      return await Cn("/v2/comfygit/orchestrator/status");
    } catch {
      return null;
    }
  }
  async function o() {
    await Cn("/v2/comfygit/orchestrator/restart", { method: "POST" });
  }
  async function n() {
    await Cn("/v2/comfygit/orchestrator/kill", { method: "POST" });
  }
  return {
    checkHealth: e,
    getStatus: t,
    restart: o,
    kill: n
  };
}
const Vv = { class: "base-modal-header" }, Bv = {
  key: 0,
  class: "base-modal-title"
}, Wv = { class: "base-modal-body" }, Gv = {
  key: 0,
  class: "base-modal-loading"
}, jv = {
  key: 1,
  class: "base-modal-error"
}, Hv = {
  key: 0,
  class: "base-modal-footer"
}, qv = /* @__PURE__ */ be({
  __name: "BaseModal",
  props: {
    title: {},
    size: { default: "md" },
    showCloseButton: { type: Boolean, default: !0 },
    closeOnOverlayClick: { type: Boolean, default: !0 },
    loading: { type: Boolean, default: !1 },
    error: {},
    fixedHeight: { type: Boolean, default: !1 },
    overlayZIndex: { default: 10003 }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const o = e, n = t;
    function l() {
      o.closeOnOverlayClick && n("close");
    }
    function r(u) {
      u.key === "Escape" && o.showCloseButton && n("close");
    }
    return rt(() => {
      document.addEventListener("keydown", r), document.body.style.overflow = "hidden";
    }), Mo(() => {
      document.removeEventListener("keydown", r), document.body.style.overflow = "";
    }), (u, c) => (a(), L(Lt, { to: "body" }, [
      s("div", {
        class: "base-modal-overlay",
        style: Rt({ zIndex: e.overlayZIndex }),
        onClick: l
      }, [
        s("div", {
          class: Fe(["base-modal-content", e.size, { "fixed-height": e.fixedHeight }]),
          onClick: c[1] || (c[1] = mt(() => {
          }, ["stop"]))
        }, [
          s("div", Vv, [
            st(u.$slots, "header", {}, () => [
              e.title ? (a(), i("h3", Bv, f(e.title), 1)) : y("", !0)
            ]),
            e.showCloseButton ? (a(), i("button", {
              key: 0,
              class: "base-modal-close",
              onClick: c[0] || (c[0] = (d) => u.$emit("close"))
            }, [...c[2] || (c[2] = [
              s("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                s("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ], -1)
            ])])) : y("", !0)
          ]),
          s("div", Wv, [
            e.loading ? (a(), i("div", Gv, "Loading...")) : e.error ? (a(), i("div", jv, f(e.error), 1)) : st(u.$slots, "body", { key: 2 }, void 0)
          ]),
          u.$slots.footer ? (a(), i("div", Hv, [
            st(u.$slots, "footer", {}, void 0)
          ])) : y("", !0)
        ], 2)
      ], 4)
    ]));
  }
}), It = /* @__PURE__ */ Se(qv, [["__scopeId", "data-v-06a4be14"]]), Kv = ["type", "disabled"], Jv = {
  key: 0,
  class: "spinner"
}, Qv = /* @__PURE__ */ be({
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
    return (t, o) => (a(), i("button", {
      type: e.type,
      disabled: e.disabled || e.loading,
      class: Fe(["base-btn", e.variant, e.size, { "full-width": e.fullWidth, loading: e.loading }]),
      onClick: o[0] || (o[0] = (n) => t.$emit("click", n))
    }, [
      e.loading ? (a(), i("span", Jv)) : y("", !0),
      st(t.$slots, "default", {}, void 0)
    ], 10, Kv));
  }
}), Ne = /* @__PURE__ */ Se(Qv, [["__scopeId", "data-v-f3452606"]]), Yv = {
  key: 0,
  class: "base-title-count"
}, Xv = /* @__PURE__ */ be({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(e) {
    return (t, o) => (a(), L(_l(`h${e.level}`), {
      class: Fe(["base-title", e.variant])
    }, {
      default: h(() => [
        st(t.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (a(), i("span", Yv, "(" + f(e.count) + ")", 1)) : y("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), no = /* @__PURE__ */ Se(Xv, [["__scopeId", "data-v-5a01561d"]]), Zv = ["value", "disabled"], ep = {
  key: 0,
  value: "",
  disabled: ""
}, tp = ["value"], sp = {
  key: 0,
  class: "base-select-error"
}, op = /* @__PURE__ */ be({
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
    function t(n) {
      return typeof n == "string" ? n : n.value;
    }
    function o(n) {
      return typeof n == "string" ? n : n.label;
    }
    return (n, l) => (a(), i("div", {
      class: Fe(["base-select-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      s("select", {
        value: e.modelValue,
        disabled: e.disabled,
        class: Fe(["base-select", { error: !!e.error }]),
        onChange: l[0] || (l[0] = (r) => n.$emit("update:modelValue", r.target.value))
      }, [
        e.placeholder ? (a(), i("option", ep, f(e.placeholder), 1)) : y("", !0),
        (a(!0), i(j, null, he(e.options, (r) => (a(), i("option", {
          key: t(r),
          value: t(r)
        }, f(o(r)), 9, tp))), 128))
      ], 42, Zv),
      e.error ? (a(), i("span", sp, f(e.error), 1)) : y("", !0)
    ], 2));
  }
}), Ln = /* @__PURE__ */ Se(op, [["__scopeId", "data-v-4996bfe0"]]), np = { class: "popover-header" }, ap = { class: "popover-title" }, lp = { class: "popover-content" }, ip = {
  key: 0,
  class: "popover-actions"
}, rp = /* @__PURE__ */ be({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" },
    overlayZIndex: { default: 10004 }
  },
  emits: ["close"],
  setup(e) {
    return (t, o) => (a(), L(Lt, { to: "body" }, [
      e.show ? (a(), i("div", {
        key: 0,
        class: "popover-overlay",
        style: Rt({ zIndex: e.overlayZIndex }),
        onClick: o[2] || (o[2] = (n) => t.$emit("close"))
      }, [
        s("div", {
          class: "popover",
          style: Rt({ maxWidth: e.maxWidth }),
          onClick: o[1] || (o[1] = mt(() => {
          }, ["stop"]))
        }, [
          s("div", np, [
            s("h4", ap, f(e.title), 1),
            s("button", {
              class: "popover-close",
              onClick: o[0] || (o[0] = (n) => t.$emit("close"))
            }, "✕")
          ]),
          s("div", lp, [
            st(t.$slots, "content", {}, void 0)
          ]),
          t.$slots.actions ? (a(), i("div", ip, [
            st(t.$slots, "actions", {}, void 0)
          ])) : y("", !0)
        ], 4)
      ], 4)) : y("", !0)
    ]));
  }
}), ts = /* @__PURE__ */ Se(rp, [["__scopeId", "data-v-7c1f5547"]]), cp = { class: "detail-section" }, up = {
  key: 0,
  class: "empty-message"
}, dp = { class: "model-header" }, fp = { class: "model-name" }, mp = { class: "model-details" }, vp = { class: "model-row" }, pp = { class: "model-row" }, gp = { class: "label" }, hp = {
  key: 0,
  class: "model-row model-row-nodes"
}, yp = { class: "node-list" }, wp = ["onClick"], _p = {
  key: 1,
  class: "model-row"
}, kp = { class: "value" }, bp = {
  key: 2,
  class: "model-row"
}, $p = { class: "value error" }, Cp = {
  key: 0,
  class: "model-actions"
}, xp = { class: "detail-section" }, Sp = {
  key: 0,
  class: "empty-message"
}, Ip = { class: "node-content" }, Ep = { class: "node-main" }, Tp = { class: "node-name" }, Mp = { class: "node-badge" }, Pp = {
  key: 0,
  class: "node-version"
}, Rp = ["onClick"], Lp = {
  key: 2,
  class: "node-install-queued"
}, Np = {
  key: 0,
  class: "node-guidance"
}, Dp = /* @__PURE__ */ be({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(e, { emit: t }) {
    const o = e, n = t, { getWorkflowDetails: l, setModelImportance: r, openFileLocation: u, queueNodeInstall: c } = vt(), d = k(null), m = k(!1), v = k(null), p = k(!1), w = k({}), g = k(!1), _ = k(/* @__PURE__ */ new Set()), x = k(/* @__PURE__ */ new Set()), C = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function S(X) {
      switch (X) {
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
    function T(X) {
      switch (X) {
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
    function M(X) {
      switch (X) {
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
    function P(X) {
      switch (X) {
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
    function D(X) {
      switch (X) {
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
    function N(X) {
      if (!X.loaded_by || X.loaded_by.length === 0) return [];
      const G = X.hash || X.filename;
      return _.value.has(G) ? X.loaded_by : X.loaded_by.slice(0, 3);
    }
    function O(X) {
      return _.value.has(X);
    }
    function E(X) {
      _.value.has(X) ? _.value.delete(X) : _.value.add(X), _.value = new Set(_.value);
    }
    async function K() {
      m.value = !0, v.value = null;
      try {
        d.value = await l(o.workflowName);
      } catch (X) {
        v.value = X instanceof Error ? X.message : "Failed to load workflow details";
      } finally {
        m.value = !1;
      }
    }
    function ae(X, G) {
      w.value[X] = G, p.value = !0;
    }
    async function fe(X) {
      try {
        await u(X);
      } catch (G) {
        v.value = G instanceof Error ? G.message : "Failed to open file location";
      }
    }
    async function ue(X) {
      if (X.package_id)
        try {
          const G = X.latest_version || "latest";
          await c({
            id: X.package_id,
            version: G,
            selected_version: G,
            mode: "remote",
            channel: "default"
          }), x.value.add(X.package_id);
        } catch (G) {
          v.value = G instanceof Error ? G.message : "Failed to queue node install";
        }
    }
    async function we() {
      if (!p.value) {
        n("close");
        return;
      }
      m.value = !0, v.value = null;
      try {
        for (const [X, G] of Object.entries(w.value))
          await r(o.workflowName, X, G);
        n("refresh"), n("close");
      } catch (X) {
        v.value = X instanceof Error ? X.message : "Failed to save changes";
      } finally {
        m.value = !1;
      }
    }
    return rt(K), (X, G) => (a(), i(j, null, [
      b(It, {
        title: `WORKFLOW DETAILS: ${e.workflowName}`,
        size: "lg",
        loading: m.value,
        error: v.value || void 0,
        onClose: G[4] || (G[4] = (Y) => n("close"))
      }, {
        body: h(() => [
          d.value ? (a(), i(j, { key: 0 }, [
            s("section", cp, [
              b(no, { variant: "section" }, {
                default: h(() => [
                  $("MODELS USED (" + f(d.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              d.value.models.length === 0 ? (a(), i("div", up, " No models used in this workflow ")) : y("", !0),
              (a(!0), i(j, null, he(d.value.models, (Y) => {
                var Re;
                return a(), i("div", {
                  key: Y.hash || Y.filename,
                  class: "model-card"
                }, [
                  s("div", dp, [
                    G[6] || (G[6] = s("span", { class: "model-icon" }, "📦", -1)),
                    s("span", fp, f(Y.filename), 1)
                  ]),
                  s("div", mp, [
                    s("div", vp, [
                      G[7] || (G[7] = s("span", { class: "label" }, "Status:", -1)),
                      s("span", {
                        class: Fe(["value", S(Y.status)])
                      }, f(T(Y.status)), 3)
                    ]),
                    s("div", pp, [
                      s("span", gp, [
                        G[8] || (G[8] = $(" Importance: ", -1)),
                        b(Sl, {
                          size: 14,
                          title: "About importance levels",
                          onClick: G[0] || (G[0] = (se) => g.value = !0)
                        })
                      ]),
                      b(Ln, {
                        "model-value": w.value[Y.filename] || Y.importance,
                        options: C,
                        "onUpdate:modelValue": (se) => ae(Y.filename, se)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    Y.loaded_by && Y.loaded_by.length > 0 ? (a(), i("div", hp, [
                      G[9] || (G[9] = s("span", { class: "label" }, "Loaded by:", -1)),
                      s("div", yp, [
                        (a(!0), i(j, null, he(N(Y), (se, ge) => (a(), i("div", {
                          key: `${se.node_id}-${ge}`,
                          class: "node-reference"
                        }, f(se.node_type) + " (Node #" + f(se.node_id) + ") ", 1))), 128)),
                        Y.loaded_by.length > 3 ? (a(), i("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (se) => E(Y.hash || Y.filename)
                        }, f(O(Y.hash || Y.filename) ? "▼ Show less" : `▶ View all (${Y.loaded_by.length})`), 9, wp)) : y("", !0)
                      ])
                    ])) : y("", !0),
                    Y.size_mb ? (a(), i("div", _p, [
                      G[10] || (G[10] = s("span", { class: "label" }, "Size:", -1)),
                      s("span", kp, f(Y.size_mb) + " MB", 1)
                    ])) : y("", !0),
                    Y.has_category_mismatch ? (a(), i("div", bp, [
                      G[13] || (G[13] = s("span", { class: "label" }, "Location issue:", -1)),
                      s("span", $p, [
                        G[11] || (G[11] = $(" In ", -1)),
                        s("code", null, f(Y.actual_category) + "/", 1),
                        G[12] || (G[12] = $(" but loader needs ", -1)),
                        s("code", null, f((Re = Y.expected_categories) == null ? void 0 : Re[0]) + "/", 1)
                      ])
                    ])) : y("", !0)
                  ]),
                  Y.status !== "available" ? (a(), i("div", Cp, [
                    Y.status === "downloadable" ? (a(), L(Ne, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: G[1] || (G[1] = (se) => n("resolve"))
                    }, {
                      default: h(() => [...G[14] || (G[14] = [
                        $(" Download ", -1)
                      ])]),
                      _: 1
                    })) : Y.status === "category_mismatch" && Y.file_path ? (a(), L(Ne, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (se) => fe(Y.file_path)
                    }, {
                      default: h(() => [...G[15] || (G[15] = [
                        $(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : Y.status !== "path_mismatch" ? (a(), L(Ne, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: G[2] || (G[2] = (se) => n("resolve"))
                    }, {
                      default: h(() => [...G[16] || (G[16] = [
                        $(" Resolve ", -1)
                      ])]),
                      _: 1
                    })) : y("", !0)
                  ])) : y("", !0)
                ]);
              }), 128))
            ]),
            s("section", xp, [
              b(no, { variant: "section" }, {
                default: h(() => [
                  $("NODES USED (" + f(d.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              d.value.nodes.length === 0 ? (a(), i("div", Sp, " No custom nodes used in this workflow ")) : y("", !0),
              (a(!0), i(j, null, he(d.value.nodes, (Y, Re) => (a(), i("div", {
                key: `${Y.name}-${Y.status}-${Re}`,
                class: "node-item"
              }, [
                s("span", {
                  class: Fe(["node-status", M(Y.status)])
                }, f(P(Y.status)), 3),
                s("div", Ip, [
                  s("div", Ep, [
                    s("span", Tp, f(Y.name), 1),
                    s("span", Mp, f(D(Y.status)), 1),
                    Y.version ? (a(), i("span", Pp, "v" + f(Y.version), 1)) : y("", !0),
                    Y.status === "uninstallable" && Y.package_id && !x.value.has(Y.package_id) ? (a(), i("button", {
                      key: 1,
                      class: "node-install-link",
                      onClick: (se) => ue(Y)
                    }, " Install ", 8, Rp)) : Y.status === "uninstallable" && Y.package_id && x.value.has(Y.package_id) ? (a(), i("span", Lp, " Queued ")) : y("", !0)
                  ]),
                  Y.guidance ? (a(), i("div", Np, f(Y.guidance), 1)) : y("", !0)
                ])
              ]))), 128))
            ])
          ], 64)) : y("", !0)
        ]),
        footer: h(() => [
          b(Ne, {
            variant: "secondary",
            onClick: G[3] || (G[3] = (Y) => n("close"))
          }, {
            default: h(() => [...G[17] || (G[17] = [
              $(" Close ", -1)
            ])]),
            _: 1
          }),
          p.value ? (a(), L(Ne, {
            key: 0,
            variant: "primary",
            onClick: we
          }, {
            default: h(() => [...G[18] || (G[18] = [
              $(" Save Changes ", -1)
            ])]),
            _: 1
          })) : y("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      b(ts, {
        show: g.value,
        title: "Model Importance Levels",
        onClose: G[5] || (G[5] = (Y) => g.value = !1)
      }, {
        content: h(() => [...G[19] || (G[19] = [
          s("ul", { class: "importance-info-list" }, [
            s("li", null, [
              s("strong", null, "Required"),
              $(" — Must have for workflow to run")
            ]),
            s("li", null, [
              s("strong", null, "Flexible"),
              $(" — Workflow adapts if missing")
            ]),
            s("li", null, [
              s("strong", null, "Optional"),
              $(" — Nice to have, can be skipped")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Op = /* @__PURE__ */ Se(Dp, [["__scopeId", "data-v-543076d9"]]), it = ro({
  items: [],
  status: "idle"
});
let ks = null;
function Xr() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function Va(e) {
  return it.items.find((t) => t.id === e);
}
async function go() {
  if (it.status === "downloading") return;
  const e = it.items.find((t) => t.status === "queued");
  if (!e) {
    it.status = "idle";
    return;
  }
  it.status = "downloading", e.status = "downloading", e.progress = 0, e.downloaded = 0;
  try {
    await Up(e), e.status = "completed", e.progress = 100;
  } catch (t) {
    e.status = "failed", e.error = t instanceof Error ? t.message : "Download failed", e.retries++;
  } finally {
    it.status = "idle", go();
  }
}
async function Up(e) {
  return new Promise((t, o) => {
    ks && (ks.close(), ks = null);
    const n = new URLSearchParams({
      url: e.url,
      target_path: e.targetPath,
      filename: e.filename,
      workflow: e.workflow
    }), l = new EventSource(`/v2/comfygit/models/download-stream?${n}`);
    ks = l;
    let r = Date.now(), u = 0, c = Date.now(), d = !1;
    const m = 2e3, v = window.setInterval(() => {
      d || Date.now() - c > m && (e.speed = 0, e.eta = 0);
    }, 250), p = () => {
      window.clearInterval(v);
    };
    l.onmessage = (w) => {
      try {
        const g = JSON.parse(w.data);
        switch (g.type) {
          case "progress":
            e.downloaded = g.downloaded || 0, e.size = g.total || e.size, c = Date.now();
            const _ = c, x = (_ - r) / 1e3, C = e.downloaded - u;
            if (C > 0 && x > 0)
              if (e.speed = C / x, r = _, u = e.downloaded, e.speed > 0 && e.size > 0) {
                const S = e.size - e.downloaded;
                e.eta = S / e.speed;
              } else
                e.eta = 0;
            e.size > 0 && (e.progress = Math.round(e.downloaded / e.size * 100));
            break;
          case "complete":
            d = !0, p(), l.close(), ks = null, t();
            break;
          case "error":
            d = !0, p(), l.close(), ks = null, o(new Error(g.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, l.onerror = () => {
      p(), l.close(), ks = null, d || o(new Error("Connection lost"));
    };
  });
}
async function Ap() {
  try {
    const e = await fetch("/v2/comfygit/models/pending-downloads");
    if (!e.ok) return;
    const t = await e.json();
    if (!t.pending_downloads || t.pending_downloads.length === 0) return;
    for (const o of t.pending_downloads) {
      if (it.items.some((l) => l.url === o.url && l.filename === o.filename))
        continue;
      const n = {
        id: Xr(),
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
      it.items.push(n);
    }
    console.log(`[ComfyGit] Loaded ${t.pending_downloads.length} pending download(s)`);
  } catch (e) {
    console.warn("[ComfyGit] Failed to load pending downloads:", e);
  }
}
function Ro() {
  function e(C) {
    for (const S of C) {
      if (it.items.some(
        (P) => P.url === S.url && P.targetPath === S.targetPath && ["queued", "downloading", "paused", "completed"].includes(P.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${S.filename}`);
        continue;
      }
      const M = {
        id: Xr(),
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
      it.items.push(M);
    }
    it.status === "idle" && go();
  }
  async function t(C) {
    const S = Va(C);
    if (S) {
      if (S.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(S.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        ks && (ks.close(), ks = null), S.status = "failed", S.error = "Cancelled by user", it.status = "idle", go();
      } else if (S.status === "queued") {
        const T = it.items.findIndex((M) => M.id === C);
        T >= 0 && it.items.splice(T, 1);
      }
    }
  }
  function o(C) {
    const S = Va(C);
    !S || S.status !== "failed" || (S.status = "queued", S.error = void 0, S.progress = 0, S.downloaded = 0, it.status === "idle" && go());
  }
  function n(C) {
    const S = Va(C);
    !S || S.status !== "paused" || (S.status = "queued", it.status === "idle" && go());
  }
  function l() {
    const C = it.items.filter((S) => S.status === "paused");
    for (const S of C)
      S.status = "queued";
    it.status === "idle" && go();
  }
  function r(C) {
    const S = it.items.findIndex((T) => T.id === C);
    S >= 0 && ["completed", "failed", "paused"].includes(it.items[S].status) && it.items.splice(S, 1);
  }
  function u() {
    it.items = it.items.filter((C) => C.status !== "completed");
  }
  function c() {
    it.items = it.items.filter((C) => C.status !== "failed");
  }
  const d = R(
    () => it.items.find((C) => C.status === "downloading")
  ), m = R(
    () => it.items.filter((C) => C.status === "queued")
  ), v = R(
    () => it.items.filter((C) => C.status === "completed")
  ), p = R(
    () => it.items.filter((C) => C.status === "failed")
  ), w = R(
    () => it.items.filter((C) => C.status === "paused")
  ), g = R(() => it.items.length > 0), _ = R(
    () => it.items.filter((C) => C.status === "queued" || C.status === "downloading").length
  ), x = R(
    () => it.items.some((C) => C.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: Dn(it),
    // Computed
    currentDownload: d,
    queuedItems: m,
    completedItems: v,
    failedItems: p,
    pausedItems: w,
    hasItems: g,
    activeCount: _,
    hasPaused: x,
    // Actions
    addToQueue: e,
    cancelDownload: t,
    retryDownload: o,
    resumeDownload: n,
    resumeAllPaused: l,
    removeItem: r,
    clearCompleted: u,
    clearFailed: c,
    loadPendingDownloads: Ap
  };
}
function Zr() {
  const e = k(null), t = k(null), o = k([]), n = k([]), l = k(!1), r = k(null);
  async function u(T, M) {
    var D;
    if (!((D = window.app) != null && D.api))
      throw new Error("ComfyUI API not available");
    const P = await window.app.api.fetchApi(T, M);
    if (!P.ok) {
      const N = await P.json().catch(() => ({})), O = N.error || N.message || `Request failed: ${P.status}`;
      throw new Error(O);
    }
    return P.json();
  }
  async function c(T) {
    l.value = !0, r.value = null;
    try {
      let M;
      return Oo() || (M = await u(
        `/v2/comfygit/workflow/${T}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), M.nodes.version_gated = M.nodes.version_gated || [], M.nodes.uninstallable = M.nodes.uninstallable || [], M.node_guidance = M.node_guidance || {}, M.package_aliases = M.package_aliases || {}, e.value = M, M;
    } catch (M) {
      const P = M instanceof Error ? M.message : "Unknown error occurred";
      throw r.value = P, M;
    } finally {
      l.value = !1;
    }
  }
  async function d(T, M, P, D) {
    l.value = !0, r.value = null;
    try {
      let N;
      if (!Oo()) {
        const O = Object.fromEntries(M), E = Object.fromEntries(P), K = D ? Array.from(D) : [];
        N = await u(
          `/v2/comfygit/workflow/${T}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: O,
              model_choices: E,
              skipped_packages: K
            })
          }
        );
      }
      return t.value = N, N;
    } catch (N) {
      const O = N instanceof Error ? N.message : "Unknown error occurred";
      throw r.value = O, N;
    } finally {
      l.value = !1;
    }
  }
  async function m(T, M = 10) {
    l.value = !0, r.value = null;
    try {
      let P;
      return Oo() || (P = await u(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: T, limit: M })
        }
      )), o.value = P.results, P.results;
    } catch (P) {
      const D = P instanceof Error ? P.message : "Unknown error occurred";
      throw r.value = D, P;
    } finally {
      l.value = !1;
    }
  }
  async function v(T, M = 10) {
    l.value = !0, r.value = null;
    try {
      let P;
      return Oo() || (P = await u(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: T, limit: M })
        }
      )), n.value = P.results, P.results;
    } catch (P) {
      const D = P instanceof Error ? P.message : "Unknown error occurred";
      throw r.value = D, P;
    } finally {
      l.value = !1;
    }
  }
  const p = ro({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: [],
    nodesInstalled: []
  });
  function w() {
    p.phase = "idle", p.currentFile = void 0, p.currentFileIndex = void 0, p.totalFiles = void 0, p.bytesDownloaded = void 0, p.bytesTotal = void 0, p.completedFiles = [], p.nodesToInstall = [], p.nodesInstalled = [], p.installError = void 0, p.needsRestart = void 0, p.error = void 0, p.nodeInstallProgress = void 0;
  }
  async function g(T) {
    p.phase = "installing", p.nodesInstalled = [], p.installError = void 0, p.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      return Oo(), await _(T);
    } catch (M) {
      const P = M instanceof Error ? M.message : "Failed to install nodes";
      throw p.installError = P, M;
    }
  }
  async function _(T) {
    var P;
    const M = await u(
      `/v2/comfygit/workflow/${T}/install`,
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
      const D = new Map(((P = M.failed) == null ? void 0 : P.map((N) => [N.node_id, N.error])) || []);
      for (let N = 0; N < p.nodesToInstall.length; N++) {
        const O = p.nodesToInstall[N], E = D.get(O);
        p.nodeInstallProgress.completedNodes.push({
          node_id: O,
          success: !E,
          error: E
        });
      }
    }
    return p.nodesInstalled = M.nodes_installed, p.needsRestart = M.nodes_installed.length > 0, M.failed && M.failed.length > 0 && (p.installError = `${M.failed.length} package(s) failed to install`), M;
  }
  async function x(T, M, P) {
    w(), p.phase = "resolving", r.value = null;
    const D = Object.fromEntries(M), N = Object.fromEntries(P);
    try {
      const O = await fetch(`/v2/comfygit/workflow/${T}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: D,
          model_choices: N
        })
      });
      if (!O.ok)
        throw new Error(`Request failed: ${O.status}`);
      if (!O.body)
        throw new Error("No response body");
      const E = O.body.getReader(), K = new TextDecoder();
      let ae = "";
      for (; ; ) {
        const { done: fe, value: ue } = await E.read();
        if (fe) break;
        ae += K.decode(ue, { stream: !0 });
        const we = ae.split(`

`);
        ae = we.pop() || "";
        for (const X of we) {
          if (!X.trim()) continue;
          const G = X.split(`
`);
          let Y = "", Re = "";
          for (const se of G)
            se.startsWith("event: ") ? Y = se.slice(7) : se.startsWith("data: ") && (Re = se.slice(6));
          if (Re)
            try {
              const se = JSON.parse(Re);
              C(Y, se);
            } catch (se) {
              console.warn("Failed to parse SSE event:", se);
            }
        }
      }
    } catch (O) {
      const E = O instanceof Error ? O.message : "Unknown error occurred";
      throw r.value = E, p.error = E, p.phase = "error", O;
    }
  }
  function C(T, M) {
    switch (T) {
      case "batch_start":
        p.phase = "downloading", p.totalFiles = M.total;
        break;
      case "file_start":
        p.currentFile = M.filename, p.currentFileIndex = M.index, p.bytesDownloaded = 0, p.bytesTotal = void 0;
        break;
      case "file_progress":
        p.bytesDownloaded = M.downloaded, p.bytesTotal = M.total;
        break;
      case "file_complete":
        p.completedFiles.push({
          filename: M.filename,
          success: M.success,
          error: M.error
        });
        break;
      case "batch_complete":
        break;
      case "done":
        p.nodesToInstall = M.nodes_to_install || [], M.download_results && (p.completedFiles = M.download_results), p.phase = "complete";
        break;
      case "error":
        p.error = M.message, p.phase = "error", r.value = M.message;
        break;
    }
  }
  function S(T, M) {
    const { addToQueue: P } = Ro(), D = M.filter((N) => N.url && N.target_path).map((N) => ({
      workflow: T,
      filename: N.filename,
      url: N.url,
      targetPath: N.target_path,
      size: N.size || 0,
      type: "model"
    }));
    return D.length > 0 && P(D), D.length;
  }
  return {
    // State
    result: e,
    appliedResult: t,
    searchResults: o,
    modelSearchResults: n,
    isLoading: l,
    error: r,
    progress: p,
    // Methods
    analyzeWorkflow: c,
    applyResolution: d,
    applyResolutionWithProgress: x,
    installNodes: g,
    searchNodes: m,
    searchModels: v,
    resetProgress: w,
    queueModelDownloads: S
  };
}
const zp = { class: "resolution-stepper" }, Fp = { class: "stepper-header" }, Vp = ["onClick"], Bp = {
  key: 0,
  class: "step-icon"
}, Wp = {
  key: 1,
  class: "step-number"
}, Gp = { class: "step-label" }, jp = {
  key: 0,
  class: "step-connector"
}, Hp = { class: "stepper-content" }, qp = /* @__PURE__ */ be({
  __name: "ResolutionStepper",
  props: {
    steps: {},
    currentStep: {},
    completedSteps: {},
    stepStats: {}
  },
  emits: ["step-change"],
  setup(e, { emit: t }) {
    const o = e, n = t;
    function l(m) {
      var v;
      if ((v = o.stepStats) != null && v[m]) {
        const p = o.stepStats[m];
        return p.total > 0 && p.resolved === p.total;
      }
      return o.completedSteps.includes(m);
    }
    function r(m) {
      var v;
      if ((v = o.stepStats) != null && v[m]) {
        const p = o.stepStats[m];
        return p.resolved > 0 && p.resolved < p.total;
      }
      return !1;
    }
    function u(m) {
      return l(m) ? "state-complete" : r(m) ? "state-partial" : "state-pending";
    }
    function c(m) {
      return !1;
    }
    function d(m) {
      n("step-change", m);
    }
    return (m, v) => (a(), i("div", zp, [
      s("div", Fp, [
        (a(!0), i(j, null, he(e.steps, (p, w) => (a(), i("div", {
          key: p.id,
          class: Fe(["step", {
            active: e.currentStep === p.id,
            completed: l(p.id),
            "in-progress": r(p.id),
            disabled: c(p.id)
          }]),
          onClick: (g) => d(p.id)
        }, [
          s("div", {
            class: Fe(["step-indicator", u(p.id)])
          }, [
            l(p.id) ? (a(), i("span", Bp, "✓")) : (a(), i("span", Wp, f(w + 1), 1))
          ], 2),
          s("div", Gp, f(p.label), 1),
          w < e.steps.length - 1 ? (a(), i("div", jp)) : y("", !0)
        ], 10, Vp))), 128))
      ]),
      s("div", Hp, [
        st(m.$slots, "default", {}, void 0)
      ])
    ]));
  }
}), Kp = /* @__PURE__ */ Se(qp, [["__scopeId", "data-v-2a7b3af8"]]), Jp = /* @__PURE__ */ be({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(e) {
    const t = e, o = R(() => t.confidence >= 0.9 ? "high" : t.confidence >= 0.7 ? "medium" : "low"), n = R(() => `confidence-${o.value}`), l = R(() => t.showPercentage ? `${Math.round(t.confidence * 100)}%` : o.value.charAt(0).toUpperCase() + o.value.slice(1));
    return (r, u) => (a(), i("span", {
      class: Fe(["confidence-badge", n.value, e.size])
    }, f(l.value), 3));
  }
}), jn = /* @__PURE__ */ Se(Jp, [["__scopeId", "data-v-17ec4b80"]]), Qp = { class: "node-info" }, Yp = { class: "node-info-text" }, Xp = { class: "item-body" }, Zp = {
  key: 0,
  class: "resolved-state"
}, eg = {
  key: 1,
  class: "multiple-options"
}, tg = {
  key: 0,
  class: "installed-packs-section"
}, sg = { class: "installed-packs-list" }, og = ["onClick"], ng = { class: "installed-pack-name" }, ag = { class: "installed-pack-source" }, lg = { class: "options-list" }, ig = ["onClick"], rg = ["name", "value", "checked", "onChange"], cg = { class: "option-content" }, ug = { class: "option-header" }, dg = { class: "option-package-id" }, fg = {
  key: 0,
  class: "option-title"
}, mg = { class: "option-meta" }, vg = {
  key: 0,
  class: "installed-badge"
}, pg = { class: "action-buttons" }, gg = {
  key: 2,
  class: "unresolved"
}, hg = {
  key: 0,
  class: "installed-packs-section"
}, yg = { class: "installed-packs-list" }, wg = ["onClick"], _g = { class: "installed-pack-name" }, kg = { class: "installed-pack-source" }, bg = {
  key: 1,
  class: "searching-state"
}, $g = { class: "options-list" }, Cg = ["onClick"], xg = ["name", "value"], Sg = { class: "option-content" }, Ig = { class: "option-header" }, Eg = { class: "option-package-id" }, Tg = {
  key: 0,
  class: "option-description"
}, Mg = { class: "option-meta" }, Pg = {
  key: 0,
  class: "installed-badge"
}, Rg = {
  key: 3,
  class: "unresolved-message"
}, Lg = { class: "action-buttons" }, Ng = /* @__PURE__ */ be({
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
  setup(e, { emit: t }) {
    const o = e, n = t;
    function l(v, p = 80) {
      return v.length <= p ? v : v.slice(0, p - 3) + "...";
    }
    const r = R(() => !!o.choice);
    R(() => {
      var v;
      return (v = o.choice) == null ? void 0 : v.action;
    }), R(() => {
      var v;
      return (v = o.choice) == null ? void 0 : v.package_id;
    });
    const u = R(() => o.installedNodePacks || []), c = R(() => {
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
    function d(v) {
      n("option-selected", v);
    }
    function m(v) {
      switch (v) {
        case "development":
          return "dev";
        case "git":
          return "git";
        case "registry":
          return "registry";
        default:
          return v || "unknown";
      }
    }
    return (v, p) => (a(), i("div", {
      class: Fe(["node-resolution-item", { selected: e.isSelected, ambiguous: e.hasMultipleOptions, resolved: r.value }])
    }, [
      s("div", Qp, [
        s("span", Yp, [
          p[7] || (p[7] = $("Node type: ", -1)),
          s("code", null, f(e.nodeType), 1)
        ]),
        e.statusLabel ? (a(), i("span", {
          key: 0,
          class: Fe(["status-badge", c.value])
        }, f(e.statusLabel), 3)) : y("", !0)
      ]),
      s("div", Xp, [
        r.value ? (a(), i("div", Zp, [
          b(Ne, {
            variant: "ghost",
            size: "sm",
            onClick: p[0] || (p[0] = (w) => n("clear-choice"))
          }, {
            default: h(() => [...p[8] || (p[8] = [
              $(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (a(), i("div", eg, [
          u.value.length > 0 ? (a(), i("div", tg, [
            p[9] || (p[9] = s("p", { class: "options-prompt" }, "Or map to an installed node pack:", -1)),
            s("div", sg, [
              (a(!0), i(j, null, he(u.value, (w) => (a(), i("button", {
                key: w.package_id,
                type: "button",
                class: "installed-pack-chip",
                onClick: (g) => n("installed-pack-selected", w.package_id)
              }, [
                s("span", ng, f(w.package_id), 1),
                s("span", ag, f(m(w.source)), 1)
              ], 8, og))), 128))
            ])
          ])) : y("", !0),
          p[13] || (p[13] = s("p", { class: "options-prompt" }, "Potential matches:", -1)),
          s("div", lg, [
            (a(!0), i(j, null, he(e.options, (w, g) => (a(), i("label", {
              key: w.package_id,
              class: Fe(["option-card", { selected: e.selectedOptionIndex === g }]),
              onClick: (_) => d(g)
            }, [
              s("input", {
                type: "radio",
                name: `node-option-${e.nodeType}`,
                value: g,
                checked: e.selectedOptionIndex === g,
                onChange: (_) => d(g)
              }, null, 40, rg),
              s("div", cg, [
                s("div", ug, [
                  s("span", dg, f(w.package_id), 1),
                  b(jn, {
                    confidence: w.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                w.title && w.title !== w.package_id ? (a(), i("div", fg, f(w.title), 1)) : y("", !0),
                s("div", mg, [
                  w.is_installed ? (a(), i("span", vg, "Already Installed")) : y("", !0)
                ])
              ])
            ], 10, ig))), 128))
          ]),
          s("div", pg, [
            b(Ne, {
              variant: "secondary",
              size: "sm",
              onClick: p[1] || (p[1] = (w) => n("search"))
            }, {
              default: h(() => [...p[10] || (p[10] = [
                $(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            b(Ne, {
              variant: "secondary",
              size: "sm",
              onClick: p[2] || (p[2] = (w) => n("manual-entry"))
            }, {
              default: h(() => [...p[11] || (p[11] = [
                $(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            b(Ne, {
              variant: "secondary",
              size: "sm",
              onClick: p[3] || (p[3] = (w) => n("mark-optional"))
            }, {
              default: h(() => [...p[12] || (p[12] = [
                $(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (a(), i("div", gg, [
          u.value.length > 0 ? (a(), i("div", hg, [
            p[14] || (p[14] = s("p", { class: "options-prompt" }, "Map to an installed node pack:", -1)),
            s("div", yg, [
              (a(!0), i(j, null, he(u.value, (w) => (a(), i("button", {
                key: w.package_id,
                type: "button",
                class: "installed-pack-chip",
                onClick: (g) => n("installed-pack-selected", w.package_id)
              }, [
                s("span", _g, f(w.package_id), 1),
                s("span", kg, f(m(w.source)), 1)
              ], 8, wg))), 128))
            ])
          ])) : y("", !0),
          e.isSearching ? (a(), i("div", bg, [...p[15] || (p[15] = [
            s("span", { class: "searching-spinner" }, null, -1),
            s("span", null, "Searching registry...", -1)
          ])])) : e.searchResults && e.searchResults.length > 0 ? (a(), i(j, { key: 2 }, [
            p[16] || (p[16] = s("p", { class: "options-prompt" }, "Potential matches found:", -1)),
            s("div", $g, [
              (a(!0), i(j, null, he(e.searchResults.slice(0, 5), (w, g) => (a(), i("label", {
                key: w.package_id,
                class: "option-card",
                onClick: (_) => n("search-result-selected", w)
              }, [
                s("input", {
                  type: "radio",
                  name: `search-result-${e.nodeType}`,
                  value: g
                }, null, 8, xg),
                s("div", Sg, [
                  s("div", Ig, [
                    s("span", Eg, f(w.package_id), 1),
                    b(jn, {
                      confidence: w.match_confidence,
                      size: "sm"
                    }, null, 8, ["confidence"])
                  ]),
                  w.description ? (a(), i("div", Tg, f(l(w.description)), 1)) : y("", !0),
                  s("div", Mg, [
                    w.is_installed ? (a(), i("span", Pg, "Already Installed")) : y("", !0)
                  ])
                ])
              ], 8, Cg))), 128))
            ])
          ], 64)) : (a(), i("div", Rg, [...p[17] || (p[17] = [
            s("span", { class: "warning-icon" }, "⚠", -1),
            s("span", null, "No matching package found in registry", -1)
          ])])),
          s("div", Lg, [
            b(Ne, {
              variant: "secondary",
              size: "sm",
              onClick: p[4] || (p[4] = (w) => n("search"))
            }, {
              default: h(() => {
                var w;
                return [
                  $(f((w = e.searchResults) != null && w.length ? "Refine Search" : "Search Registry"), 1)
                ];
              }),
              _: 1
            }),
            b(Ne, {
              variant: "secondary",
              size: "sm",
              onClick: p[5] || (p[5] = (w) => n("manual-entry"))
            }, {
              default: h(() => [...p[18] || (p[18] = [
                $(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            b(Ne, {
              variant: "secondary",
              size: "sm",
              onClick: p[6] || (p[6] = (w) => n("mark-optional"))
            }, {
              default: h(() => [...p[19] || (p[19] = [
                $(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), Dg = /* @__PURE__ */ Se(Ng, [["__scopeId", "data-v-fb0bbf03"]]), Og = { class: "item-navigator" }, Ug = { class: "nav-item-info" }, Ag = ["title"], zg = { class: "nav-controls" }, Fg = { class: "nav-arrows" }, Vg = ["disabled"], Bg = ["disabled"], Wg = { class: "nav-position" }, Gg = /* @__PURE__ */ be({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(e, { emit: t }) {
    const o = t;
    return (n, l) => (a(), i("div", Og, [
      s("div", Ug, [
        s("code", {
          class: "item-name",
          title: e.itemName
        }, f(e.itemName), 9, Ag)
      ]),
      s("div", zg, [
        s("div", Fg, [
          s("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === 0,
            onClick: l[0] || (l[0] = (r) => o("prev")),
            title: "Previous item"
          }, " ← ", 8, Vg),
          s("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === e.totalItems - 1,
            onClick: l[1] || (l[1] = (r) => o("next")),
            title: "Next item"
          }, " → ", 8, Bg)
        ]),
        s("span", Wg, f(e.currentIndex + 1) + "/" + f(e.totalItems), 1)
      ])
    ]));
  }
}), ec = /* @__PURE__ */ Se(Gg, [["__scopeId", "data-v-74af7920"]]), jg = ["type", "value", "placeholder", "disabled"], Hg = {
  key: 0,
  class: "base-input-error"
}, qg = /* @__PURE__ */ be({
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
    return (t, o) => (a(), i("div", {
      class: Fe(["base-input-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      s("input", {
        type: e.type,
        value: e.modelValue,
        placeholder: e.placeholder,
        disabled: e.disabled,
        class: Fe(["base-input", { error: !!e.error }]),
        onInput: o[0] || (o[0] = (n) => t.$emit("update:modelValue", n.target.value)),
        onKeyup: [
          o[1] || (o[1] = fs((n) => t.$emit("enter"), ["enter"])),
          o[2] || (o[2] = fs((n) => t.$emit("escape"), ["escape"]))
        ]
      }, null, 42, jg),
      e.error ? (a(), i("span", Hg, f(e.error), 1)) : y("", !0)
    ], 2));
  }
}), wt = /* @__PURE__ */ Se(qg, [["__scopeId", "data-v-9ba02cdc"]]), Kg = { class: "node-resolution-step" }, Jg = {
  key: 0,
  class: "auto-resolved-section"
}, Qg = { class: "section-header" }, Yg = { class: "stat-badge" }, Xg = { class: "resolved-packages-list" }, Zg = { class: "package-info" }, eh = { class: "package-id" }, th = { class: "node-count" }, sh = { class: "package-actions" }, oh = {
  key: 0,
  class: "status-badge install"
}, nh = {
  key: 1,
  class: "status-badge skip"
}, ah = ["onClick"], lh = {
  key: 1,
  class: "section-divider"
}, ih = { class: "step-header" }, rh = { class: "stat-badge" }, ch = {
  key: 1,
  class: "step-body"
}, uh = {
  key: 3,
  class: "empty-state"
}, dh = { class: "node-modal-body" }, fh = { class: "node-search-results-container" }, mh = {
  key: 0,
  class: "node-search-results"
}, vh = ["onClick"], ph = { class: "node-result-header" }, gh = { class: "node-result-package-id" }, hh = {
  key: 0,
  class: "node-result-description"
}, yh = {
  key: 1,
  class: "node-empty-state"
}, wh = {
  key: 2,
  class: "node-empty-state"
}, _h = {
  key: 3,
  class: "node-empty-state"
}, kh = { class: "node-manual-entry-modal" }, bh = { class: "node-modal-body" }, $h = { class: "node-modal-actions" }, Ch = /* @__PURE__ */ be({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {},
    autoResolvedPackages: {},
    skippedPackages: {},
    installedNodePacks: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice", "package-skip"],
  setup(e, { emit: t }) {
    const o = e, n = t, { searchNodes: l } = Zr(), r = k(0), u = k(!1), c = k(!1), d = k(""), m = k(""), v = k([]), p = k(!1), w = k(/* @__PURE__ */ new Map()), g = k(/* @__PURE__ */ new Set()), _ = k(!1);
    function x() {
      _.value && ge(), _.value = !1;
    }
    const C = R(() => o.nodes[r.value]), S = R(() => o.nodes.filter((q) => o.nodeChoices.has(q.node_type)).length), T = R(() => C.value ? w.value.get(C.value.node_type) || [] : []), M = R(() => C.value ? g.value.has(C.value.node_type) : !1);
    kt(C, async (q) => {
      var Z;
      q && ((Z = q.options) != null && Z.length || w.value.has(q.node_type) || g.value.has(q.node_type) || o.nodeChoices.has(q.node_type) || await P(q.node_type));
    }, { immediate: !0 });
    async function P(q) {
      g.value.add(q);
      try {
        const Z = await l(q, 5);
        w.value.set(q, Z);
      } catch {
        w.value.set(q, []);
      } finally {
        g.value.delete(q);
      }
    }
    const D = R(() => o.autoResolvedPackages.filter((q) => !o.skippedPackages.has(q.package_id)).length);
    function N(q) {
      return o.skippedPackages.has(q);
    }
    function O(q) {
      n("package-skip", q);
    }
    const E = R(() => {
      var Z;
      if (!C.value) return "not-found";
      const q = o.nodeChoices.get(C.value.node_type);
      if (q)
        switch (q.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (Z = C.value.options) != null && Z.length ? "ambiguous" : "not-found";
    }), K = R(() => {
      var Z;
      if (!C.value) return;
      const q = o.nodeChoices.get(C.value.node_type);
      if (q)
        switch (q.action) {
          case "install":
            return q.package_id ? `→ ${q.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (Z = C.value.options) != null && Z.length ? `${C.value.options.length} matches` : "Not Found";
    });
    function ae(q) {
      q >= 0 && q < o.nodes.length && (r.value = q);
    }
    function fe() {
      var q;
      for (let Z = r.value + 1; Z < o.nodes.length; Z++) {
        const xe = o.nodes[Z];
        if (!((q = o.nodeChoices) != null && q.has(xe.node_type))) {
          ae(Z);
          return;
        }
      }
    }
    function ue() {
      C.value && (n("mark-optional", C.value.node_type), Pt(() => fe()));
    }
    function we() {
      C.value && (n("skip", C.value.node_type), Pt(() => fe()));
    }
    function X(q) {
      C.value && (n("option-selected", C.value.node_type, q), Pt(() => fe()));
    }
    function G() {
      C.value && n("clear-choice", C.value.node_type);
    }
    function Y() {
      C.value && (d.value = C.value.node_type, v.value = T.value, u.value = !0, We(d.value));
    }
    function Re() {
      m.value = "", c.value = !0;
    }
    function se(q) {
      C.value && (n("manual-entry", C.value.node_type, q), Pt(() => fe()));
    }
    function ge() {
      u.value = !1, d.value = "", v.value = [];
    }
    function z() {
      c.value = !1, m.value = "";
    }
    let me = null;
    function Pe() {
      me && clearTimeout(me), me = setTimeout(() => {
        We(d.value);
      }, 300);
    }
    async function We(q) {
      if (!q.trim()) {
        v.value = [];
        return;
      }
      p.value = !0;
      try {
        v.value = await l(q, 10);
      } catch {
        v.value = [];
      } finally {
        p.value = !1;
      }
    }
    function Ee(q) {
      C.value && (n("manual-entry", C.value.node_type, q.package_id), ge(), Pt(() => fe()));
    }
    function H(q) {
      C.value && (n("manual-entry", C.value.node_type, q.package_id), Pt(() => fe()));
    }
    function ee() {
      !C.value || !m.value.trim() || (n("manual-entry", C.value.node_type, m.value.trim()), z(), Pt(() => fe()));
    }
    return (q, Z) => {
      var xe, ce;
      return a(), i("div", Kg, [
        e.autoResolvedPackages.length > 0 ? (a(), i("div", Jg, [
          s("div", Qg, [
            Z[6] || (Z[6] = s("div", { class: "section-info" }, [
              s("h4", { class: "section-title" }, "Packages to Install"),
              s("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            s("span", Yg, f(D.value) + "/" + f(e.autoResolvedPackages.length) + " to install", 1)
          ]),
          s("div", Xg, [
            (a(!0), i(j, null, he(e.autoResolvedPackages, (le) => (a(), i("div", {
              key: le.package_id,
              class: "resolved-package-item"
            }, [
              s("div", Zg, [
                s("code", eh, f(le.package_id), 1),
                s("span", th, f(le.node_types_count) + " node type" + f(le.node_types_count > 1 ? "s" : ""), 1)
              ]),
              s("div", sh, [
                N(le.package_id) ? (a(), i("span", nh, " SKIPPED ")) : (a(), i("span", oh, " WILL INSTALL ")),
                s("button", {
                  class: "toggle-skip-btn",
                  onClick: (I) => O(le.package_id)
                }, f(N(le.package_id) ? "Include" : "Skip"), 9, ah)
              ])
            ]))), 128))
          ])
        ])) : y("", !0),
        e.autoResolvedPackages.length > 0 && e.nodes.length > 0 ? (a(), i("div", lh)) : y("", !0),
        e.nodes.length > 0 ? (a(), i(j, { key: 2 }, [
          s("div", ih, [
            Z[7] || (Z[7] = s("div", { class: "step-info" }, [
              s("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              s("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            s("span", rh, f(S.value) + "/" + f(e.nodes.length) + " resolved", 1)
          ]),
          C.value ? (a(), L(ec, {
            key: 0,
            "item-name": C.value.node_type,
            "current-index": r.value,
            "total-items": e.nodes.length,
            onPrev: Z[0] || (Z[0] = (le) => ae(r.value - 1)),
            onNext: Z[1] || (Z[1] = (le) => ae(r.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
          C.value ? (a(), i("div", ch, [
            b(Dg, {
              "node-type": C.value.node_type,
              "has-multiple-options": !!((xe = C.value.options) != null && xe.length),
              options: C.value.options,
              choice: (ce = e.nodeChoices) == null ? void 0 : ce.get(C.value.node_type),
              status: E.value,
              "status-label": K.value,
              "search-results": T.value,
              "is-searching": M.value,
              "installed-node-packs": e.installedNodePacks,
              onMarkOptional: ue,
              onSkip: we,
              onManualEntry: Re,
              onSearch: Y,
              onOptionSelected: X,
              onClearChoice: G,
              onSearchResultSelected: H,
              onInstalledPackSelected: se
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label", "search-results", "is-searching", "installed-node-packs"])
          ])) : y("", !0)
        ], 64)) : y("", !0),
        e.nodes.length === 0 && e.autoResolvedPackages.length === 0 ? (a(), i("div", uh, [...Z[8] || (Z[8] = [
          s("p", null, "No nodes need resolution.", -1)
        ])])) : y("", !0),
        (a(), L(Lt, { to: "body" }, [
          u.value ? (a(), i("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: Z[4] || (Z[4] = mt((le) => _.value = !0, ["self"])),
            onMouseup: mt(x, ["self"])
          }, [
            s("div", {
              class: "node-search-modal",
              onMousedown: Z[3] || (Z[3] = (le) => _.value = !1)
            }, [
              s("div", { class: "node-modal-header" }, [
                Z[9] || (Z[9] = s("h4", null, "Search Node Packages", -1)),
                s("button", {
                  class: "node-modal-close-btn",
                  onClick: ge
                }, "✕")
              ]),
              s("div", dh, [
                b(wt, {
                  modelValue: d.value,
                  "onUpdate:modelValue": Z[2] || (Z[2] = (le) => d.value = le),
                  placeholder: "Search by node type, package name...",
                  onInput: Pe
                }, null, 8, ["modelValue"]),
                s("div", fh, [
                  v.value.length > 0 ? (a(), i("div", mh, [
                    (a(!0), i(j, null, he(v.value, (le) => (a(), i("div", {
                      key: le.package_id,
                      class: "node-search-result-item",
                      onClick: (I) => Ee(le)
                    }, [
                      s("div", ph, [
                        s("code", gh, f(le.package_id), 1),
                        le.match_confidence ? (a(), L(jn, {
                          key: 0,
                          confidence: le.match_confidence,
                          size: "sm"
                        }, null, 8, ["confidence"])) : y("", !0)
                      ]),
                      le.description ? (a(), i("div", hh, f(le.description), 1)) : y("", !0)
                    ], 8, vh))), 128))
                  ])) : p.value ? (a(), i("div", yh, "Searching...")) : d.value ? (a(), i("div", wh, 'No packages found matching "' + f(d.value) + '"', 1)) : (a(), i("div", _h, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : y("", !0)
        ])),
        (a(), L(Lt, { to: "body" }, [
          c.value ? (a(), i("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: mt(z, ["self"])
          }, [
            s("div", kh, [
              s("div", { class: "node-modal-header" }, [
                Z[10] || (Z[10] = s("h4", null, "Enter Package Manually", -1)),
                s("button", {
                  class: "node-modal-close-btn",
                  onClick: z
                }, "✕")
              ]),
              s("div", bh, [
                b(wt, {
                  modelValue: m.value,
                  "onUpdate:modelValue": Z[5] || (Z[5] = (le) => m.value = le),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                s("div", $h, [
                  b(Ne, {
                    variant: "secondary",
                    onClick: z
                  }, {
                    default: h(() => [...Z[11] || (Z[11] = [
                      $("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  b(Ne, {
                    variant: "primary",
                    disabled: !m.value.trim(),
                    onClick: ee
                  }, {
                    default: h(() => [...Z[12] || (Z[12] = [
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
}), xh = /* @__PURE__ */ Se(Ch, [["__scopeId", "data-v-94c6a438"]]), Sh = { class: "node-info" }, Ih = { class: "node-info-text" }, Eh = { class: "item-body" }, Th = {
  key: 0,
  class: "resolved-state"
}, Mh = {
  key: 1,
  class: "multiple-options"
}, Ph = { class: "options-list" }, Rh = ["onClick"], Lh = ["name", "value", "checked", "onChange"], Nh = { class: "option-content" }, Dh = { class: "option-header" }, Oh = { class: "option-filename" }, Uh = { class: "option-meta" }, Ah = { class: "option-size" }, zh = { class: "option-category" }, Fh = { class: "option-path" }, Vh = { class: "action-buttons" }, Bh = {
  key: 2,
  class: "unresolved"
}, Wh = { class: "action-buttons" }, Gh = /* @__PURE__ */ be({
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
  setup(e, { emit: t }) {
    const o = e, n = t, l = R(() => !!o.choice);
    R(() => {
      var d;
      return (d = o.choice) == null ? void 0 : d.action;
    }), R(() => {
      var d, m;
      return ((m = (d = o.choice) == null ? void 0 : d.selected_model) == null ? void 0 : m.filename) || "selected";
    });
    const r = R(() => {
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
      n("option-selected", d);
    }
    function c(d) {
      if (!d) return "Unknown";
      const m = d / (1024 * 1024 * 1024);
      return m >= 1 ? `${m.toFixed(2)} GB` : `${(d / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (d, m) => (a(), i("div", {
      class: Fe(["model-resolution-item", { resolved: l.value, ambiguous: e.hasMultipleOptions }])
    }, [
      s("div", Sh, [
        s("span", Ih, [
          m[7] || (m[7] = $("Used by: ", -1)),
          s("code", null, f(e.nodeType), 1)
        ]),
        e.statusLabel ? (a(), i("span", {
          key: 0,
          class: Fe(["status-badge", r.value])
        }, f(e.statusLabel), 3)) : y("", !0)
      ]),
      s("div", Eh, [
        l.value ? (a(), i("div", Th, [
          b(Ne, {
            variant: "ghost",
            size: "sm",
            onClick: m[0] || (m[0] = (v) => n("clear-choice"))
          }, {
            default: h(() => [...m[8] || (m[8] = [
              $(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (a(), i("div", Mh, [
          m[12] || (m[12] = s("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          s("div", Ph, [
            (a(!0), i(j, null, he(e.options, (v, p) => (a(), i("label", {
              key: v.model.hash,
              class: Fe(["option-card", { selected: e.selectedOptionIndex === p }]),
              onClick: (w) => u(p)
            }, [
              s("input", {
                type: "radio",
                name: `model-option-${e.filename}`,
                value: p,
                checked: e.selectedOptionIndex === p,
                onChange: (w) => u(p)
              }, null, 40, Lh),
              s("div", Nh, [
                s("div", Dh, [
                  s("span", Oh, f(v.model.filename), 1),
                  b(jn, {
                    confidence: v.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                s("div", Uh, [
                  s("span", Ah, f(c(v.model.size)), 1),
                  s("span", zh, f(v.model.category), 1)
                ]),
                s("div", Fh, f(v.model.relative_path), 1)
              ])
            ], 10, Rh))), 128))
          ]),
          s("div", Vh, [
            b(Ne, {
              variant: "ghost",
              size: "sm",
              onClick: m[1] || (m[1] = (v) => n("search"))
            }, {
              default: h(() => [...m[9] || (m[9] = [
                $(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            b(Ne, {
              variant: "ghost",
              size: "sm",
              onClick: m[2] || (m[2] = (v) => n("download-url"))
            }, {
              default: h(() => [...m[10] || (m[10] = [
                $(" Download URL ", -1)
              ])]),
              _: 1
            }),
            b(Ne, {
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
        ])) : (a(), i("div", Bh, [
          m[16] || (m[16] = s("div", { class: "unresolved-message" }, [
            s("span", { class: "warning-icon" }, "⚠"),
            s("span", null, "Model not found in workspace")
          ], -1)),
          s("div", Wh, [
            b(Ne, {
              variant: "primary",
              size: "sm",
              onClick: m[4] || (m[4] = (v) => n("search"))
            }, {
              default: h(() => [...m[13] || (m[13] = [
                $(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            b(Ne, {
              variant: "secondary",
              size: "sm",
              onClick: m[5] || (m[5] = (v) => n("download-url"))
            }, {
              default: h(() => [...m[14] || (m[14] = [
                $(" Download URL ", -1)
              ])]),
              _: 1
            }),
            b(Ne, {
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
}), jh = /* @__PURE__ */ Se(Gh, [["__scopeId", "data-v-8a82fefa"]]), Hh = { class: "model-resolution-step" }, qh = { class: "step-header" }, Kh = { class: "step-info" }, Jh = { class: "step-title" }, Qh = { class: "step-description" }, Yh = { class: "stat-badge" }, Xh = {
  key: 1,
  class: "step-body"
}, Zh = {
  key: 2,
  class: "empty-state"
}, ey = { class: "model-search-modal" }, ty = { class: "model-modal-body" }, sy = {
  key: 0,
  class: "model-search-results"
}, oy = ["onClick"], ny = { class: "model-result-header" }, ay = { class: "model-result-filename" }, ly = { class: "model-result-meta" }, iy = { class: "model-result-category" }, ry = { class: "model-result-size" }, cy = {
  key: 0,
  class: "model-result-path"
}, uy = {
  key: 1,
  class: "model-no-results"
}, dy = {
  key: 2,
  class: "model-searching"
}, fy = { class: "model-download-url-modal" }, my = { class: "model-modal-body" }, vy = { class: "model-input-group" }, py = { class: "model-input-group" }, gy = { class: "model-modal-actions" }, hy = /* @__PURE__ */ be({
  __name: "ModelResolutionStep",
  props: {
    models: {},
    modelChoices: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "download-url", "clear-choice"],
  setup(e, { emit: t }) {
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
    function n(se) {
      var ge;
      return se && ((ge = o[se]) == null ? void 0 : ge[0]) || null;
    }
    const l = e, r = t, u = k(0), c = k(!1), d = k(!1), m = k(""), v = k(""), p = k(""), w = k([]), g = k(!1), _ = R(() => l.models[u.value]), x = R(() => l.models.some((se) => se.is_download_intent)), C = R(() => l.models.filter(
      (se) => l.modelChoices.has(se.filename) || se.is_download_intent
    ).length), S = R(() => {
      var ge;
      if (!_.value) return "";
      const se = n((ge = _.value.reference) == null ? void 0 : ge.node_type);
      return se ? `${se}/${_.value.filename}` : "";
    }), T = R(() => {
      var ge;
      if (!_.value) return "not-found";
      const se = l.modelChoices.get(_.value.filename);
      if (se)
        switch (se.action) {
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
      return _.value.is_download_intent ? "download" : (ge = _.value.options) != null && ge.length ? "ambiguous" : "not-found";
    }), M = R(() => {
      var ge, z;
      if (!_.value) return;
      const se = l.modelChoices.get(_.value.filename);
      if (se)
        switch (se.action) {
          case "select":
            return (ge = se.selected_model) != null && ge.filename ? `→ ${se.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return _.value.is_download_intent ? "Pending Download" : (z = _.value.options) != null && z.length ? `${_.value.options.length} matches` : "Not Found";
    });
    function P(se) {
      se >= 0 && se < l.models.length && (u.value = se);
    }
    function D() {
      var se;
      for (let ge = u.value + 1; ge < l.models.length; ge++) {
        const z = l.models[ge];
        if (!z.is_download_intent && !((se = l.modelChoices) != null && se.has(z.filename))) {
          P(ge);
          return;
        }
      }
    }
    function N() {
      _.value && (r("mark-optional", _.value.filename), Pt(() => D()));
    }
    function O() {
      _.value && (r("skip", _.value.filename), Pt(() => D()));
    }
    function E(se) {
      _.value && (r("option-selected", _.value.filename, se), Pt(() => D()));
    }
    function K() {
      _.value && r("clear-choice", _.value.filename);
    }
    function ae() {
      _.value && (m.value = _.value.filename, c.value = !0);
    }
    function fe() {
      _.value && (v.value = _.value.download_source || "", p.value = _.value.target_path || S.value, d.value = !0);
    }
    function ue() {
      c.value = !1, m.value = "", w.value = [];
    }
    function we() {
      d.value = !1, v.value = "", p.value = "";
    }
    function X() {
      g.value = !0, setTimeout(() => {
        g.value = !1;
      }, 300);
    }
    function G(se) {
      _.value && (ue(), Pt(() => D()));
    }
    function Y() {
      !_.value || !v.value.trim() || (r("download-url", _.value.filename, v.value.trim(), p.value.trim() || void 0), we(), Pt(() => D()));
    }
    function Re(se) {
      if (!se) return "Unknown";
      const ge = se / (1024 * 1024 * 1024);
      return ge >= 1 ? `${ge.toFixed(2)} GB` : `${(se / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (se, ge) => {
      var z, me, Pe;
      return a(), i("div", Hh, [
        s("div", qh, [
          s("div", Kh, [
            s("h3", Jh, f(x.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            s("p", Qh, f(x.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          s("span", Yh, f(C.value) + "/" + f(e.models.length) + " resolved", 1)
        ]),
        _.value ? (a(), L(ec, {
          key: 0,
          "item-name": _.value.filename,
          "current-index": u.value,
          "total-items": e.models.length,
          onPrev: ge[0] || (ge[0] = (We) => P(u.value - 1)),
          onNext: ge[1] || (ge[1] = (We) => P(u.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
        _.value ? (a(), i("div", Xh, [
          b(jh, {
            filename: _.value.filename,
            "node-type": ((z = _.value.reference) == null ? void 0 : z.node_type) || "Unknown",
            "has-multiple-options": !!((me = _.value.options) != null && me.length),
            options: _.value.options,
            choice: (Pe = e.modelChoices) == null ? void 0 : Pe.get(_.value.filename),
            status: T.value,
            "status-label": M.value,
            onMarkOptional: N,
            onSkip: O,
            onDownloadUrl: fe,
            onSearch: ae,
            onOptionSelected: E,
            onClearChoice: K
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (a(), i("div", Zh, [...ge[5] || (ge[5] = [
          s("p", null, "No models need resolution.", -1)
        ])])),
        (a(), L(Lt, { to: "body" }, [
          c.value ? (a(), i("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: mt(ue, ["self"])
          }, [
            s("div", ey, [
              s("div", { class: "model-modal-header" }, [
                ge[6] || (ge[6] = s("h4", null, "Search Workspace Models", -1)),
                s("button", {
                  class: "model-modal-close-btn",
                  onClick: ue
                }, "✕")
              ]),
              s("div", ty, [
                b(wt, {
                  modelValue: m.value,
                  "onUpdate:modelValue": ge[2] || (ge[2] = (We) => m.value = We),
                  placeholder: "Search by filename, category...",
                  onInput: X
                }, null, 8, ["modelValue"]),
                w.value.length > 0 ? (a(), i("div", sy, [
                  (a(!0), i(j, null, he(w.value, (We) => (a(), i("div", {
                    key: We.hash,
                    class: "model-search-result-item",
                    onClick: (Ee) => G()
                  }, [
                    s("div", ny, [
                      s("code", ay, f(We.filename), 1)
                    ]),
                    s("div", ly, [
                      s("span", iy, f(We.category), 1),
                      s("span", ry, f(Re(We.size)), 1)
                    ]),
                    We.relative_path ? (a(), i("div", cy, f(We.relative_path), 1)) : y("", !0)
                  ], 8, oy))), 128))
                ])) : m.value && !g.value ? (a(), i("div", uy, ' No models found matching "' + f(m.value) + '" ', 1)) : y("", !0),
                g.value ? (a(), i("div", dy, "Searching...")) : y("", !0)
              ])
            ])
          ])) : y("", !0)
        ])),
        (a(), L(Lt, { to: "body" }, [
          d.value ? (a(), i("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: mt(we, ["self"])
          }, [
            s("div", fy, [
              s("div", { class: "model-modal-header" }, [
                ge[7] || (ge[7] = s("h4", null, "Enter Download URL", -1)),
                s("button", {
                  class: "model-modal-close-btn",
                  onClick: we
                }, "✕")
              ]),
              s("div", my, [
                s("div", vy, [
                  ge[8] || (ge[8] = s("label", { class: "model-input-label" }, "Download URL", -1)),
                  b(wt, {
                    modelValue: v.value,
                    "onUpdate:modelValue": ge[3] || (ge[3] = (We) => v.value = We),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                s("div", py, [
                  ge[9] || (ge[9] = s("label", { class: "model-input-label" }, "Host Path", -1)),
                  b(wt, {
                    modelValue: p.value,
                    "onUpdate:modelValue": ge[4] || (ge[4] = (We) => p.value = We),
                    placeholder: S.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                s("div", gy, [
                  b(Ne, {
                    variant: "secondary",
                    onClick: we
                  }, {
                    default: h(() => [...ge[10] || (ge[10] = [
                      $("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  b(Ne, {
                    variant: "primary",
                    disabled: !v.value.trim() || !p.value.trim(),
                    onClick: Y
                  }, {
                    default: h(() => [...ge[11] || (ge[11] = [
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
}), yy = /* @__PURE__ */ Se(hy, [["__scopeId", "data-v-5c700bfa"]]), wy = { class: "applying-step" }, _y = {
  key: 0,
  class: "phase-content"
}, ky = {
  key: 1,
  class: "phase-content"
}, by = { class: "phase-description" }, $y = { class: "overall-progress" }, Cy = { class: "progress-bar" }, xy = { class: "progress-label" }, Sy = { class: "install-list" }, Iy = { class: "install-icon" }, Ey = { key: 0 }, Ty = {
  key: 1,
  class: "spinner"
}, My = { key: 2 }, Py = { key: 3 }, Ry = {
  key: 0,
  class: "install-error"
}, Ly = {
  key: 2,
  class: "phase-content"
}, Ny = { class: "phase-header" }, Dy = { class: "phase-title" }, Oy = { class: "completion-summary" }, Uy = {
  key: 0,
  class: "summary-item success"
}, Ay = { class: "summary-text" }, zy = {
  key: 1,
  class: "summary-item error"
}, Fy = { class: "summary-text" }, Vy = {
  key: 2,
  class: "failed-list"
}, By = { class: "failed-node-id" }, Wy = { class: "failed-error" }, Gy = {
  key: 4,
  class: "summary-item success"
}, jy = {
  key: 5,
  class: "restart-prompt"
}, Hy = {
  key: 3,
  class: "phase-content error"
}, qy = { class: "error-message" }, Ky = /* @__PURE__ */ be({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(e) {
    const t = e, o = R(() => {
      var m, v;
      const c = ((m = t.progress.nodeInstallProgress) == null ? void 0 : m.totalNodes) || t.progress.nodesToInstall.length;
      if (!c) return 0;
      const d = ((v = t.progress.nodeInstallProgress) == null ? void 0 : v.completedNodes.length) ?? 0;
      return Math.round(d / c * 100);
    }), n = R(() => {
      var c;
      return ((c = t.progress.nodeInstallProgress) == null ? void 0 : c.completedNodes.filter((d) => !d.success)) || [];
    }), l = R(() => n.value.length > 0);
    function r(c, d) {
      var v, p;
      const m = (v = t.progress.nodeInstallProgress) == null ? void 0 : v.completedNodes.find((w) => w.node_id === c);
      return m ? m.success ? "complete" : "failed" : ((p = t.progress.nodeInstallProgress) == null ? void 0 : p.currentIndex) === d ? "installing" : "pending";
    }
    function u(c) {
      var d, m;
      return (m = (d = t.progress.nodeInstallProgress) == null ? void 0 : d.completedNodes.find((v) => v.node_id === c)) == null ? void 0 : m.error;
    }
    return (c, d) => {
      var m, v, p, w;
      return a(), i("div", wy, [
        e.progress.phase === "resolving" ? (a(), i("div", _y, [...d[2] || (d[2] = [
          s("div", { class: "phase-header" }, [
            s("div", { class: "loading-spinner" }),
            s("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          s("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : e.progress.phase === "installing" ? (a(), i("div", ky, [
          d[3] || (d[3] = s("div", { class: "phase-header" }, [
            s("div", { class: "loading-spinner" }),
            s("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          s("p", by, " Installing " + f((((m = e.progress.nodeInstallProgress) == null ? void 0 : m.currentIndex) ?? 0) + 1) + " of " + f(((v = e.progress.nodeInstallProgress) == null ? void 0 : v.totalNodes) ?? e.progress.nodesToInstall.length) + " packages... ", 1),
          s("div", $y, [
            s("div", Cy, [
              s("div", {
                class: "progress-fill",
                style: Rt({ width: `${o.value}%` })
              }, null, 4)
            ]),
            s("span", xy, f(((p = e.progress.nodeInstallProgress) == null ? void 0 : p.completedNodes.length) ?? 0) + " / " + f(((w = e.progress.nodeInstallProgress) == null ? void 0 : w.totalNodes) ?? e.progress.nodesToInstall.length), 1)
          ]),
          s("div", Sy, [
            (a(!0), i(j, null, he(e.progress.nodesToInstall, (g, _) => (a(), i("div", {
              key: g,
              class: Fe(["install-item", r(g, _)])
            }, [
              s("span", Iy, [
                r(g, _) === "pending" ? (a(), i("span", Ey, "○")) : r(g, _) === "installing" ? (a(), i("span", Ty, "◌")) : r(g, _) === "complete" ? (a(), i("span", My, "✓")) : r(g, _) === "failed" ? (a(), i("span", Py, "✗")) : y("", !0)
              ]),
              s("code", null, f(g), 1),
              u(g) ? (a(), i("span", Ry, f(u(g)), 1)) : y("", !0)
            ], 2))), 128))
          ])
        ])) : e.progress.phase === "complete" ? (a(), i("div", Ly, [
          s("div", Ny, [
            s("span", {
              class: Fe(["phase-icon", l.value ? "warning" : "success"])
            }, f(l.value ? "⚠" : "✓"), 3),
            s("h3", Dy, f(l.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          s("div", Oy, [
            e.progress.nodesInstalled.length > 0 ? (a(), i("div", Uy, [
              d[4] || (d[4] = s("span", { class: "summary-icon" }, "✓", -1)),
              s("span", Ay, f(e.progress.nodesInstalled.length) + " node package" + f(e.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : y("", !0),
            n.value.length > 0 ? (a(), i("div", zy, [
              d[5] || (d[5] = s("span", { class: "summary-icon" }, "✗", -1)),
              s("span", Fy, f(n.value.length) + " package" + f(n.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : y("", !0),
            n.value.length > 0 ? (a(), i("div", Vy, [
              (a(!0), i(j, null, he(n.value, (g) => (a(), i("div", {
                key: g.node_id,
                class: "failed-item"
              }, [
                s("code", By, f(g.node_id), 1),
                s("span", Wy, f(g.error), 1)
              ]))), 128))
            ])) : y("", !0),
            n.value.length > 0 ? (a(), i("button", {
              key: 3,
              class: "retry-button",
              onClick: d[0] || (d[0] = (g) => c.$emit("retry-failed"))
            }, " Retry Failed (" + f(n.value.length) + ") ", 1)) : y("", !0),
            l.value ? y("", !0) : (a(), i("div", Gy, [...d[6] || (d[6] = [
              s("span", { class: "summary-icon" }, "✓", -1),
              s("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            d[8] || (d[8] = s("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            e.progress.needsRestart ? (a(), i("div", jy, [
              d[7] || (d[7] = s("div", { class: "restart-warning" }, [
                s("span", { class: "warning-icon" }, "⚠"),
                s("div", { class: "warning-content" }, [
                  s("strong", null, "Restart Required"),
                  s("p", null, "Node packages were installed. ComfyUI needs to restart to load them.")
                ])
              ], -1)),
              s("button", {
                class: "restart-button",
                onClick: d[1] || (d[1] = (g) => c.$emit("restart"))
              }, " Restart ComfyUI ")
            ])) : y("", !0)
          ])
        ])) : e.progress.phase === "error" ? (a(), i("div", Hy, [
          d[9] || (d[9] = s("div", { class: "phase-header" }, [
            s("span", { class: "phase-icon error" }, "✗"),
            s("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          s("p", qy, f(e.progress.error), 1)
        ])) : y("", !0)
      ]);
    };
  }
}), Jy = /* @__PURE__ */ Se(Ky, [["__scopeId", "data-v-5efaae58"]]), Qy = {
  key: 0,
  class: "loading-state"
}, Yy = {
  key: 1,
  class: "wizard-content"
}, Xy = {
  key: 0,
  class: "step-content"
}, Zy = { class: "analysis-summary" }, e1 = { class: "analysis-header" }, t1 = { class: "summary-description" }, s1 = { class: "stats-grid" }, o1 = { class: "stat-card" }, n1 = { class: "stat-items" }, a1 = {
  key: 0,
  class: "stat-item success"
}, l1 = { class: "stat-count" }, i1 = {
  key: 1,
  class: "stat-item info"
}, r1 = { class: "stat-count" }, c1 = {
  key: 2,
  class: "stat-item warning"
}, u1 = { class: "stat-count" }, d1 = {
  key: 3,
  class: "stat-item warning"
}, f1 = { class: "stat-count" }, m1 = {
  key: 4,
  class: "stat-item warning"
}, v1 = { class: "stat-count" }, p1 = {
  key: 5,
  class: "stat-item error"
}, g1 = { class: "stat-count" }, h1 = { class: "stat-card" }, y1 = { class: "stat-items" }, w1 = { class: "stat-item success" }, _1 = { class: "stat-count" }, k1 = {
  key: 0,
  class: "stat-item info"
}, b1 = { class: "stat-count" }, $1 = {
  key: 1,
  class: "stat-item warning"
}, C1 = { class: "stat-count" }, x1 = {
  key: 2,
  class: "stat-item warning"
}, S1 = { class: "stat-count" }, I1 = {
  key: 3,
  class: "stat-item error"
}, E1 = { class: "stat-count" }, T1 = {
  key: 0,
  class: "status-message warning"
}, M1 = { class: "status-text" }, P1 = {
  key: 1,
  class: "status-message warning"
}, R1 = { class: "status-text" }, L1 = {
  key: 2,
  class: "status-message info"
}, N1 = { class: "status-text" }, D1 = {
  key: 3,
  class: "status-message info"
}, O1 = { class: "status-text" }, U1 = {
  key: 4,
  class: "status-message info"
}, A1 = { class: "status-text" }, z1 = {
  key: 5,
  class: "status-message warning"
}, F1 = { class: "status-text" }, V1 = {
  key: 6,
  class: "status-message success"
}, B1 = {
  key: 7,
  class: "category-mismatch-section"
}, W1 = { class: "mismatch-list" }, G1 = { class: "mismatch-path" }, j1 = { class: "mismatch-target" }, H1 = {
  key: 8,
  class: "category-mismatch-section"
}, q1 = { class: "mismatch-list" }, K1 = { class: "mismatch-path" }, J1 = { class: "status-text" }, Q1 = {
  key: 1,
  class: "step-content node-step-content"
}, Y1 = {
  key: 0,
  class: "community-node-section"
}, X1 = { class: "community-node-header" }, Z1 = { class: "community-node-title" }, ew = { class: "community-node-list" }, tw = { class: "community-node-info" }, sw = { class: "community-node-heading" }, ow = { class: "item-name" }, nw = { class: "community-node-package" }, aw = { class: "community-node-meta" }, lw = { class: "community-node-guidance" }, iw = { key: 0 }, rw = { class: "community-choice-status" }, cw = { class: "community-node-actions" }, uw = {
  key: 3,
  class: "step-content"
}, dw = { class: "review-summary" }, fw = { class: "review-stats" }, mw = { class: "review-stat" }, vw = { class: "stat-value" }, pw = { class: "review-stat" }, gw = { class: "stat-value" }, hw = { class: "review-stat" }, yw = { class: "stat-value" }, ww = { class: "review-stat" }, _w = { class: "stat-value" }, kw = {
  key: 0,
  class: "review-section"
}, bw = { class: "section-title" }, $w = { class: "review-items" }, Cw = { class: "item-name" }, xw = { class: "item-choice" }, Sw = {
  key: 0,
  class: "choice-badge install"
}, Iw = {
  key: 1,
  class: "choice-badge skip"
}, Ew = {
  key: 1,
  class: "review-section"
}, Tw = { class: "section-title" }, Mw = { class: "review-items" }, Pw = { class: "item-name" }, Rw = { class: "item-choice" }, Lw = {
  key: 0,
  class: "choice-badge install"
}, Nw = {
  key: 1,
  class: "choice-badge optional"
}, Dw = {
  key: 2,
  class: "choice-badge skip"
}, Ow = {
  key: 2,
  class: "review-section"
}, Uw = { class: "section-title" }, Aw = { class: "review-items" }, zw = { class: "item-name" }, Fw = { class: "item-choice" }, Vw = {
  key: 0,
  class: "choice-badge install"
}, Bw = {
  key: 1,
  class: "choice-badge optional"
}, Ww = {
  key: 2,
  class: "choice-badge skip"
}, Gw = {
  key: 1,
  class: "choice-badge pending"
}, jw = {
  key: 3,
  class: "review-section"
}, Hw = { class: "section-title" }, qw = { class: "review-items download-details" }, Kw = { class: "download-info" }, Jw = { class: "item-name" }, Qw = { class: "download-meta" }, Yw = { class: "download-path" }, Xw = ["title"], Zw = {
  key: 4,
  class: "review-section"
}, e0 = { class: "section-title" }, t0 = { class: "review-items" }, s0 = { class: "item-name" }, o0 = { class: "item-choice" }, n0 = {
  key: 0,
  class: "choice-badge install"
}, a0 = {
  key: 1,
  class: "choice-badge download"
}, l0 = {
  key: 2,
  class: "choice-badge optional"
}, i0 = {
  key: 3,
  class: "choice-badge skip"
}, r0 = {
  key: 4,
  class: "choice-badge skip"
}, c0 = {
  key: 1,
  class: "choice-badge download"
}, u0 = {
  key: 2,
  class: "choice-badge pending"
}, d0 = {
  key: 5,
  class: "no-choices"
}, f0 = /* @__PURE__ */ be({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(e, { emit: t }) {
    const o = e, n = t, { analyzeWorkflow: l, applyResolution: r, installNodes: u, queueModelDownloads: c, progress: d, resetProgress: m } = Zr(), { loadPendingDownloads: v } = Ro(), { openFileLocation: p, queueNodeInstall: w, getNodes: g } = vt(), _ = k(null), x = k([]), C = k(!1), S = k(!1), T = k(null), M = k("analysis"), P = k([]), D = k(/* @__PURE__ */ new Map()), N = k(/* @__PURE__ */ new Map()), O = k(/* @__PURE__ */ new Set()), E = R(() => {
      const re = [
        { id: "analysis", label: "Analysis" }
      ];
      return (X.value || Re.value || se.value) && re.push({ id: "nodes", label: "Nodes" }), G.value && re.push({ id: "models", label: "Models" }), re.push({ id: "review", label: "Review" }), M.value === "applying" && re.push({ id: "applying", label: "Applying" }), re;
    }), K = R(() => _.value ? _.value.stats.needs_user_input : !1), ae = R(() => _.value ? _.value.nodes.version_gated || [] : []), fe = R(() => _.value ? _.value.nodes.uninstallable || [] : []), ue = R(() => fe.value.filter((re) => {
      var B;
      return !!((B = re.package) != null && B.package_id);
    })), we = R(() => ae.value.length > 0), X = R(() => _.value ? _.value.nodes.unresolved.length > 0 || _.value.nodes.ambiguous.length > 0 : !1), G = R(() => _.value ? _.value.models.unresolved.length > 0 || _.value.models.ambiguous.length > 0 : !1), Y = R(() => _.value ? _.value.stats.download_intents > 0 : !1), Re = R(() => _.value ? _.value.stats.nodes_needing_installation > 0 : !1), se = R(() => ue.value.length > 0), ge = R(() => _.value ? _.value.nodes.resolved.length : 0), z = R(() => _.value ? _.value.models.resolved.filter((re) => re.has_category_mismatch) : []), me = R(() => z.value.length > 0), Pe = R(() => X.value || Re.value || se.value ? "nodes" : G.value ? "models" : "review"), We = R(() => {
      if (!_.value) return [];
      const re = _.value.nodes.resolved.filter((de) => !de.is_installed), B = /* @__PURE__ */ new Set();
      return re.filter((de) => B.has(de.package.package_id) ? !1 : (B.add(de.package.package_id), !0));
    }), Ee = R(() => {
      if (!_.value) return [];
      const re = _.value.nodes.resolved.filter((de) => !de.is_installed), B = /* @__PURE__ */ new Map();
      for (const de of re) {
        const Be = B.get(de.package.package_id);
        Be ? Be.node_types_count++ : B.set(de.package.package_id, {
          package_id: de.package.package_id,
          title: de.package.title,
          node_types_count: 1
        });
      }
      return Array.from(B.values());
    }), H = R(() => We.value.filter((re) => !O.value.has(re.package.package_id))), ee = R(() => _.value ? _.value.models.resolved.filter(
      (re) => re.match_type === "download_intent" || re.match_type === "property_download_intent"
    ).map((re) => ({
      filename: re.reference.widget_value,
      reference: re.reference,
      is_download_intent: !0,
      resolved_model: re.model,
      download_source: re.download_source,
      target_path: re.target_path
    })) : []), q = R(() => {
      if (!_.value) return [];
      const re = _.value.nodes.unresolved.map((de) => ({
        node_type: de.reference.node_type,
        reason: de.reason,
        is_unresolved: !0,
        options: void 0
      })), B = _.value.nodes.ambiguous.map((de) => ({
        node_type: de.reference.node_type,
        has_multiple_options: !0,
        options: de.options.map((Be) => ({
          package_id: Be.package.package_id,
          title: Be.package.title,
          match_confidence: Be.match_confidence,
          match_type: Be.match_type,
          is_installed: Be.is_installed
        }))
      }));
      return [...re, ...B];
    }), Z = R(() => {
      if (!_.value) return [];
      const re = _.value.models.unresolved.map((de) => ({
        filename: de.reference.widget_value,
        reference: de.reference,
        reason: de.reason,
        is_unresolved: !0,
        options: void 0
      })), B = _.value.models.ambiguous.map((de) => ({
        filename: de.reference.widget_value,
        reference: de.reference,
        has_multiple_options: !0,
        options: de.options.map((Be) => ({
          model: Be.model,
          match_confidence: Be.match_confidence,
          match_type: Be.match_type,
          has_download_source: Be.has_download_source
        }))
      }));
      return [...re, ...B];
    }), xe = R(() => {
      const re = Z.value, B = ee.value.map((de) => ({
        filename: de.filename,
        reference: de.reference,
        is_download_intent: !0,
        resolved_model: de.resolved_model,
        download_source: de.download_source,
        target_path: de.target_path,
        options: void 0
      }));
      return [...re, ...B];
    }), ce = R(() => ee.value.filter((re) => {
      const B = N.value.get(re.filename);
      return B ? B.action === "download" : !0;
    }).map((re) => ({
      filename: re.filename,
      url: re.download_source,
      target_path: re.target_path
    })));
    function le(re, B = 50) {
      return re.length <= B ? re : re.slice(0, B - 3) + "...";
    }
    const I = R(() => {
      let re = H.value.length;
      for (const B of D.value.values())
        B.action === "install" && re++;
      for (const B of N.value.values())
        B.action === "select" && re++;
      return re;
    }), V = R(() => {
      let re = 0;
      for (const B of N.value.values())
        B.action === "download" && re++;
      for (const B of ee.value)
        N.value.get(B.filename) || re++;
      return re;
    }), ie = R(() => {
      let re = 0;
      for (const B of D.value.values())
        B.action === "optional" && re++;
      for (const B of N.value.values())
        B.action === "optional" && re++;
      return re;
    }), Ce = R(() => {
      let re = O.value.size;
      for (const B of D.value.values())
        B.action === "skip" && re++;
      for (const B of N.value.values())
        B.action === "skip" && re++;
      for (const B of q.value)
        D.value.has(B.node_type) || re++;
      for (const B of Z.value)
        N.value.has(B.filename) || re++;
      return re;
    }), _e = R(() => {
      const re = {};
      if (re.analysis = { resolved: 1, total: 1 }, X.value || se.value) {
        const B = q.value.length, de = ue.value.length, Be = q.value.filter(
          (xt) => D.value.has(xt.node_type)
        ).length, ut = ue.value.filter(
          (xt) => D.value.has(xt.reference.node_type)
        ).length, Ct = B + de, lt = Be + ut;
        re.nodes = { resolved: lt, total: Ct };
      }
      if (G.value) {
        const B = xe.value.length, de = xe.value.filter(
          (Be) => N.value.has(Be.filename) || Be.is_download_intent
        ).length;
        re.models = { resolved: de, total: B };
      }
      if (re.review = { resolved: 1, total: 1 }, M.value === "applying") {
        const B = d.totalFiles || 1, de = d.completedFiles.length;
        re.applying = { resolved: de, total: B };
      }
      return re;
    });
    function $e(re) {
      M.value = re;
    }
    function Ue() {
      const re = E.value.findIndex((B) => B.id === M.value);
      re > 0 && (M.value = E.value[re - 1].id);
    }
    function ze() {
      const re = E.value.findIndex((B) => B.id === M.value);
      re < E.value.length - 1 && (M.value = E.value[re + 1].id);
    }
    function Le() {
      for (const re of ue.value) {
        const B = re.reference.node_type;
        D.value.has(B) || oe(re, "registry");
      }
    }
    function Ie(re) {
      switch (re) {
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
    function Ke(re) {
      return re.filter((B) => B.installed && B.tracked).filter((B) => B.name !== "comfygit-manager").map((B) => ({
        package_id: B.registry_id || B.name,
        source: B.source
      })).filter((B, de, Be) => Be.findIndex((ut) => ut.package_id === B.package_id) === de).sort((B, de) => {
        const Be = Ie(B.source) - Ie(de.source);
        return Be !== 0 ? Be : B.package_id.localeCompare(de.package_id);
      });
    }
    async function Ve() {
      C.value = !0, T.value = null;
      try {
        const [re, B] = await Promise.all([
          l(o.workflowName),
          g()
        ]);
        _.value = re, x.value = Ke(B.nodes), Le();
      } catch (re) {
        T.value = re instanceof Error ? re.message : "Failed to analyze workflow";
      } finally {
        C.value = !1;
      }
    }
    function ve() {
      P.value.includes("analysis") || P.value.push("analysis"), X.value || Re.value || se.value ? M.value = "nodes" : G.value ? M.value = "models" : M.value = "review";
    }
    function Q(re) {
      D.value.set(re, { action: "optional" });
    }
    function He(re) {
      D.value.set(re, { action: "skip" });
    }
    function ke(re, B) {
      var Be;
      const de = q.value.find((ut) => ut.node_type === re);
      (Be = de == null ? void 0 : de.options) != null && Be[B] && D.value.set(re, {
        action: "install",
        package_id: de.options[B].package_id
      });
    }
    function Ye(re, B) {
      D.value.set(re, {
        action: "install",
        package_id: B
      });
    }
    function ot(re) {
      D.value.delete(re);
    }
    function Ae(re) {
      return D.value.get(re);
    }
    function A(re) {
      const B = Ae(re);
      return B ? B.action === "optional" ? "Marked optional" : B.action === "skip" ? "Skipped" : B.action === "install" ? B.install_source === "git" ? "Will install via Git" : "Will install from registry" : "Skipped" : "Skipped";
    }
    function oe(re, B) {
      var ut;
      const de = (ut = re.package) == null ? void 0 : ut.package_id;
      if (!de) return;
      const Be = {
        action: "install",
        package_id: de,
        version: re.package.latest_version || null,
        install_source: B
      };
      B === "git" && re.package.repository && (Be.repository = re.package.repository), D.value.set(re.reference.node_type, Be);
    }
    function pe(re) {
      D.value.set(re, { action: "optional" });
    }
    function Je(re) {
      D.value.set(re, { action: "skip" });
    }
    function U(re) {
      O.value.has(re) ? O.value.delete(re) : O.value.add(re);
    }
    function F(re) {
      N.value.set(re, { action: "optional" });
    }
    function te(re) {
      N.value.set(re, { action: "skip" });
    }
    function De(re, B) {
      var Be;
      const de = Z.value.find((ut) => ut.filename === re);
      (Be = de == null ? void 0 : de.options) != null && Be[B] && N.value.set(re, {
        action: "select",
        selected_model: de.options[B].model
      });
    }
    function Oe(re, B, de) {
      N.value.set(re, {
        action: "download",
        url: B,
        target_path: de
      });
    }
    function Me(re) {
      N.value.delete(re);
    }
    async function Ge(re) {
      try {
        await p(re);
      } catch (B) {
        T.value = B instanceof Error ? B.message : "Failed to open file location";
      }
    }
    async function nt() {
      var re;
      S.value = !0, T.value = null, m(), d.phase = "resolving", M.value = "applying";
      try {
        const B = await r(o.workflowName, D.value, N.value, O.value);
        B.models_to_download && B.models_to_download.length > 0 && c(o.workflowName, B.models_to_download);
        const de = ue.value.map((lt) => {
          const xt = Ae(lt.reference.node_type);
          if ((xt == null ? void 0 : xt.action) !== "install" || xt.install_source !== "git")
            return null;
          const ss = xt.repository || lt.package.repository, Is = xt.package_id || lt.package.package_id;
          return !ss || !Is ? null : {
            id: Is,
            repository: ss,
            selectedVersion: xt.version || lt.package.latest_version || "latest"
          };
        }).filter((lt) => !!lt), Be = new Set(de.map((lt) => lt.id)), ut = [
          ...B.nodes_to_install || [],
          ...H.value.map((lt) => lt.package.package_id)
        ];
        d.nodesToInstall = [...new Set(ut)].filter((lt) => !Be.has(lt)), d.nodesToInstall.length > 0 && await u(o.workflowName);
        for (const lt of de)
          await w({
            id: lt.id,
            version: lt.selectedVersion,
            selected_version: lt.selectedVersion,
            repository: lt.repository,
            install_source: "git",
            mode: "remote",
            channel: "default"
          }), d.needsRestart = !0;
        d.phase = "complete", await v();
        const Ct = d.installError || ((re = d.nodeInstallProgress) == null ? void 0 : re.completedNodes.some((lt) => !lt.success));
        !d.needsRestart && !Ct && setTimeout(() => {
          n("refresh"), n("install"), n("close");
        }, 1500);
      } catch (B) {
        T.value = B instanceof Error ? B.message : "Failed to apply resolution", d.error = T.value, d.phase = "error";
      } finally {
        S.value = !1;
      }
    }
    function bt() {
      n("refresh"), n("restart"), n("close");
    }
    async function Et() {
      var B;
      const re = ((B = d.nodeInstallProgress) == null ? void 0 : B.completedNodes.filter((de) => !de.success).map((de) => de.node_id)) || [];
      if (re.length !== 0) {
        d.phase = "installing", d.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: re.length
        }, d.nodesToInstall = re, d.nodesInstalled = [], d.installError = void 0;
        try {
          await u(o.workflowName), d.phase = "complete";
        } catch (de) {
          d.error = de instanceof Error ? de.message : "Retry failed", d.phase = "error";
        }
      }
    }
    return rt(Ve), (re, B) => (a(), L(It, {
      title: `Resolve Dependencies: ${e.workflowName}`,
      size: "lg",
      loading: C.value,
      error: T.value || void 0,
      "fixed-height": !0,
      onClose: B[1] || (B[1] = (de) => n("close"))
    }, {
      body: h(() => [
        C.value && !_.value ? (a(), i("div", Qy, [...B[2] || (B[2] = [
          s("div", { class: "loading-spinner" }, null, -1),
          s("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : _.value ? (a(), i("div", Yy, [
          b(Kp, {
            steps: E.value,
            "current-step": M.value,
            "completed-steps": P.value,
            "step-stats": _e.value,
            onStepChange: $e
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          M.value === "analysis" ? (a(), i("div", Xy, [
            s("div", Zy, [
              s("div", e1, [
                B[3] || (B[3] = s("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                s("p", t1, " Found " + f(_.value.stats.total_nodes) + " nodes and " + f(_.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              s("div", s1, [
                s("div", o1, [
                  B[16] || (B[16] = s("div", { class: "stat-header" }, "Nodes", -1)),
                  s("div", n1, [
                    ge.value > 0 ? (a(), i("div", a1, [
                      B[4] || (B[4] = s("span", { class: "stat-icon" }, "✓", -1)),
                      s("span", l1, f(ge.value), 1),
                      B[5] || (B[5] = s("span", { class: "stat-label" }, "resolved", -1))
                    ])) : y("", !0),
                    _.value.stats.packages_needing_installation > 0 ? (a(), i("div", i1, [
                      B[6] || (B[6] = s("span", { class: "stat-icon" }, "⬇", -1)),
                      s("span", r1, f(_.value.stats.packages_needing_installation), 1),
                      B[7] || (B[7] = s("span", { class: "stat-label" }, "to install", -1))
                    ])) : y("", !0),
                    _.value.nodes.ambiguous.length > 0 ? (a(), i("div", c1, [
                      B[8] || (B[8] = s("span", { class: "stat-icon" }, "?", -1)),
                      s("span", u1, f(_.value.nodes.ambiguous.length), 1),
                      B[9] || (B[9] = s("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    ae.value.length > 0 ? (a(), i("div", d1, [
                      B[10] || (B[10] = s("span", { class: "stat-icon" }, "⚠", -1)),
                      s("span", f1, f(ae.value.length), 1),
                      B[11] || (B[11] = s("span", { class: "stat-label" }, "requires newer ComfyUI", -1))
                    ])) : y("", !0),
                    fe.value.length > 0 ? (a(), i("div", m1, [
                      B[12] || (B[12] = s("span", { class: "stat-icon" }, "⚠", -1)),
                      s("span", v1, f(fe.value.length), 1),
                      B[13] || (B[13] = s("span", { class: "stat-label" }, "community-mapped", -1))
                    ])) : y("", !0),
                    _.value.nodes.unresolved.length > 0 ? (a(), i("div", p1, [
                      B[14] || (B[14] = s("span", { class: "stat-icon" }, "✗", -1)),
                      s("span", g1, f(_.value.nodes.unresolved.length), 1),
                      B[15] || (B[15] = s("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ]),
                s("div", h1, [
                  B[27] || (B[27] = s("div", { class: "stat-header" }, "Models", -1)),
                  s("div", y1, [
                    s("div", w1, [
                      B[17] || (B[17] = s("span", { class: "stat-icon" }, "✓", -1)),
                      s("span", _1, f(_.value.models.resolved.length - _.value.stats.download_intents - _.value.stats.models_with_category_mismatch), 1),
                      B[18] || (B[18] = s("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    _.value.stats.download_intents > 0 ? (a(), i("div", k1, [
                      B[19] || (B[19] = s("span", { class: "stat-icon" }, "⬇", -1)),
                      s("span", b1, f(_.value.stats.download_intents), 1),
                      B[20] || (B[20] = s("span", { class: "stat-label" }, "pending download", -1))
                    ])) : y("", !0),
                    me.value ? (a(), i("div", $1, [
                      B[21] || (B[21] = s("span", { class: "stat-icon" }, "⚠", -1)),
                      s("span", C1, f(z.value.length), 1),
                      B[22] || (B[22] = s("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : y("", !0),
                    _.value.models.ambiguous.length > 0 ? (a(), i("div", x1, [
                      B[23] || (B[23] = s("span", { class: "stat-icon" }, "?", -1)),
                      s("span", S1, f(_.value.models.ambiguous.length), 1),
                      B[24] || (B[24] = s("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    _.value.models.unresolved.length > 0 ? (a(), i("div", I1, [
                      B[25] || (B[25] = s("span", { class: "stat-icon" }, "✗", -1)),
                      s("span", E1, f(_.value.models.unresolved.length), 1),
                      B[26] || (B[26] = s("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ])
              ]),
              K.value ? (a(), i("div", T1, [
                B[28] || (B[28] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", M1, f(q.value.length + Z.value.length) + " items need your input", 1)
              ])) : we.value ? (a(), i("div", P1, [
                B[29] || (B[29] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", R1, f(ae.value.length) + " node type" + f(ae.value.length > 1 ? "s are" : " is") + " blocked and require manual action", 1)
              ])) : fe.value.length > 0 ? (a(), i("div", L1, [
                B[30] || (B[30] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", N1, f(fe.value.length) + " community-mapped node type" + f(fe.value.length > 1 ? "s need" : " needs") + " installation choices", 1)
              ])) : Re.value ? (a(), i("div", D1, [
                B[31] || (B[31] = s("span", { class: "status-icon" }, "⬇", -1)),
                s("span", O1, f(_.value.stats.packages_needing_installation) + " package" + f(_.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + f(_.value.stats.nodes_needing_installation) + " node type" + f(_.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + f(Y.value ? `, ${_.value.stats.download_intents} model${_.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : Y.value ? (a(), i("div", U1, [
                B[32] || (B[32] = s("span", { class: "status-icon" }, "⬇", -1)),
                s("span", A1, f(_.value.stats.download_intents) + " model" + f(_.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to Review to proceed", 1)
              ])) : me.value ? (a(), i("div", z1, [
                B[33] || (B[33] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", F1, f(z.value.length) + " model" + f(z.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (a(), i("div", V1, [...B[34] || (B[34] = [
                s("span", { class: "status-icon" }, "✓", -1),
                s("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              me.value ? (a(), i("div", B1, [
                B[37] || (B[37] = s("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                s("div", W1, [
                  (a(!0), i(j, null, he(z.value, (de) => {
                    var Be, ut;
                    return a(), i("div", {
                      key: de.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      s("code", G1, f(de.actual_category) + "/" + f((Be = de.model) == null ? void 0 : Be.filename), 1),
                      B[36] || (B[36] = s("span", { class: "mismatch-arrow" }, "→", -1)),
                      s("code", j1, f((ut = de.expected_categories) == null ? void 0 : ut[0]) + "/", 1),
                      de.file_path ? (a(), L(Ne, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (Ct) => Ge(de.file_path)
                      }, {
                        default: h(() => [...B[35] || (B[35] = [
                          $(" Open File Location ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : y("", !0)
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              we.value ? (a(), i("div", H1, [
                B[38] || (B[38] = s("h4", { class: "section-subtitle" }, "Blocked node types:", -1)),
                s("div", q1, [
                  (a(!0), i(j, null, he(ae.value, (de) => {
                    var Be;
                    return a(), i("div", {
                      key: `vg-${de.reference.node_type}`,
                      class: "mismatch-item"
                    }, [
                      s("code", K1, f(de.reference.node_type), 1),
                      s("span", J1, f(de.guidance || ((Be = _.value.node_guidance) == null ? void 0 : Be[de.reference.node_type]) || "Requires a newer ComfyUI version."), 1)
                    ]);
                  }), 128))
                ])
              ])) : y("", !0)
            ])
          ])) : y("", !0),
          M.value === "nodes" ? (a(), i("div", Q1, [
            b(xh, {
              nodes: q.value,
              "node-choices": D.value,
              "auto-resolved-packages": Ee.value,
              "skipped-packages": O.value,
              "installed-node-packs": x.value,
              onMarkOptional: Q,
              onSkip: He,
              onOptionSelected: ke,
              onManualEntry: Ye,
              onClearChoice: ot,
              onPackageSkip: U
            }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages", "installed-node-packs"]),
            ue.value.length > 0 ? (a(), i("div", Y1, [
              s("div", X1, [
                s("h4", Z1, "Community-Mapped Packages (" + f(ue.value.length) + ")", 1),
                B[39] || (B[39] = s("p", { class: "community-node-description" }, " These mappings are actionable. Default install uses the registry; choose Git only when explicitly needed. ", -1))
              ]),
              s("div", ew, [
                (a(!0), i(j, null, he(ue.value, (de) => (a(), i("div", {
                  key: `community-${de.reference.node_type}-${de.package.package_id}`,
                  class: "community-node-item"
                }, [
                  s("div", tw, [
                    s("div", sw, [
                      s("code", ow, f(de.reference.node_type), 1),
                      s("span", nw, f(de.package.title || de.package.package_id), 1)
                    ]),
                    s("div", aw, f(de.package.package_id), 1),
                    s("div", lw, [
                      B[40] || (B[40] = $(" Found via community mapping — registry metadata may be incomplete. ", -1)),
                      de.guidance ? (a(), i("span", iw, f(de.guidance), 1)) : y("", !0)
                    ]),
                    s("div", rw, f(A(de.reference.node_type)), 1)
                  ]),
                  s("div", cw, [
                    b(Ne, {
                      size: "sm",
                      variant: "secondary",
                      disabled: !de.package.package_id,
                      onClick: (Be) => oe(de, "registry")
                    }, {
                      default: h(() => [...B[41] || (B[41] = [
                        $(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled", "onClick"]),
                    de.package.repository ? (a(), L(Ne, {
                      key: 0,
                      size: "sm",
                      variant: "ghost",
                      disabled: !de.package.package_id,
                      onClick: (Be) => oe(de, "git")
                    }, {
                      default: h(() => [...B[42] || (B[42] = [
                        $(" Install via Git ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled", "onClick"])) : y("", !0),
                    b(Ne, {
                      size: "sm",
                      variant: "secondary",
                      onClick: (Be) => pe(de.reference.node_type)
                    }, {
                      default: h(() => [...B[43] || (B[43] = [
                        $(" Optional ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Ne, {
                      size: "sm",
                      variant: "secondary",
                      onClick: (Be) => Je(de.reference.node_type)
                    }, {
                      default: h(() => [...B[44] || (B[44] = [
                        $(" Skip ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ])
                ]))), 128))
              ])
            ])) : y("", !0)
          ])) : y("", !0),
          M.value === "models" ? (a(), L(yy, {
            key: 2,
            models: xe.value,
            "model-choices": N.value,
            onMarkOptional: F,
            onSkip: te,
            onOptionSelected: De,
            onDownloadUrl: Oe,
            onClearChoice: Me
          }, null, 8, ["models", "model-choices"])) : y("", !0),
          M.value === "review" ? (a(), i("div", uw, [
            s("div", dw, [
              B[50] || (B[50] = s("div", { class: "review-header" }, [
                s("h3", { class: "summary-title" }, "Review Your Choices"),
                s("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              s("div", fw, [
                s("div", mw, [
                  s("span", vw, f(I.value), 1),
                  B[45] || (B[45] = s("span", { class: "stat-label" }, "to install", -1))
                ]),
                s("div", pw, [
                  s("span", gw, f(V.value), 1),
                  B[46] || (B[46] = s("span", { class: "stat-label" }, "to download", -1))
                ]),
                s("div", hw, [
                  s("span", yw, f(ie.value), 1),
                  B[47] || (B[47] = s("span", { class: "stat-label" }, "optional", -1))
                ]),
                s("div", ww, [
                  s("span", _w, f(Ce.value), 1),
                  B[48] || (B[48] = s("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              Ee.value.length > 0 ? (a(), i("div", kw, [
                s("h4", bw, "Node Packages (" + f(Ee.value.length) + ")", 1),
                s("div", $w, [
                  (a(!0), i(j, null, he(Ee.value, (de) => (a(), i("div", {
                    key: de.package_id,
                    class: "review-item"
                  }, [
                    s("code", Cw, f(de.package_id), 1),
                    s("div", xw, [
                      O.value.has(de.package_id) ? (a(), i("span", Iw, "Skipped")) : (a(), i("span", Sw, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : y("", !0),
              ue.value.length > 0 ? (a(), i("div", Ew, [
                s("h4", Tw, "Community-Mapped Packages (" + f(ue.value.length) + ")", 1),
                s("div", Mw, [
                  (a(!0), i(j, null, he(ue.value, (de) => {
                    var Be, ut, Ct;
                    return a(), i("div", {
                      key: `review-community-${de.reference.node_type}-${de.package.package_id}`,
                      class: "review-item"
                    }, [
                      s("code", Pw, f(de.reference.node_type), 1),
                      s("div", Rw, [
                        ((Be = Ae(de.reference.node_type)) == null ? void 0 : Be.action) === "install" ? (a(), i("span", Lw, f(((ut = Ae(de.reference.node_type)) == null ? void 0 : ut.install_source) === "git" ? "Install via Git" : "Install from Registry"), 1)) : ((Ct = Ae(de.reference.node_type)) == null ? void 0 : Ct.action) === "optional" ? (a(), i("span", Nw, " Optional ")) : (a(), i("span", Dw, " Skip "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              q.value.length > 0 ? (a(), i("div", Ow, [
                s("h4", Uw, "Node Choices (" + f(q.value.length) + ")", 1),
                s("div", Aw, [
                  (a(!0), i(j, null, he(q.value, (de) => {
                    var Be, ut, Ct, lt;
                    return a(), i("div", {
                      key: de.node_type,
                      class: "review-item"
                    }, [
                      s("code", zw, f(de.node_type), 1),
                      s("div", Fw, [
                        D.value.has(de.node_type) ? (a(), i(j, { key: 0 }, [
                          ((Be = D.value.get(de.node_type)) == null ? void 0 : Be.action) === "install" ? (a(), i("span", Vw, f((ut = D.value.get(de.node_type)) == null ? void 0 : ut.package_id), 1)) : ((Ct = D.value.get(de.node_type)) == null ? void 0 : Ct.action) === "optional" ? (a(), i("span", Bw, " Optional ")) : ((lt = D.value.get(de.node_type)) == null ? void 0 : lt.action) === "skip" ? (a(), i("span", Ww, " Skip ")) : y("", !0)
                        ], 64)) : (a(), i("span", Gw, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              ce.value.length > 0 ? (a(), i("div", jw, [
                s("h4", Hw, "Models to Download (" + f(ce.value.length) + ")", 1),
                s("div", qw, [
                  (a(!0), i(j, null, he(ce.value, (de) => (a(), i("div", {
                    key: de.filename,
                    class: "review-item download-item"
                  }, [
                    s("div", Kw, [
                      s("code", Jw, f(de.filename), 1),
                      s("div", Qw, [
                        s("span", Yw, "→ " + f(de.target_path), 1),
                        de.url ? (a(), i("span", {
                          key: 0,
                          class: "download-url",
                          title: de.url
                        }, f(le(de.url)), 9, Xw)) : y("", !0)
                      ])
                    ]),
                    B[49] || (B[49] = s("span", { class: "choice-badge download" }, "Will Download", -1))
                  ]))), 128))
                ])
              ])) : y("", !0),
              xe.value.length > 0 ? (a(), i("div", Zw, [
                s("h4", e0, "Models (" + f(xe.value.length) + ")", 1),
                s("div", t0, [
                  (a(!0), i(j, null, he(xe.value, (de) => {
                    var Be, ut, Ct, lt, xt, ss, Is;
                    return a(), i("div", {
                      key: de.filename,
                      class: "review-item"
                    }, [
                      s("code", s0, f(de.filename), 1),
                      s("div", o0, [
                        N.value.has(de.filename) ? (a(), i(j, { key: 0 }, [
                          ((Be = N.value.get(de.filename)) == null ? void 0 : Be.action) === "select" ? (a(), i("span", n0, f((Ct = (ut = N.value.get(de.filename)) == null ? void 0 : ut.selected_model) == null ? void 0 : Ct.filename), 1)) : ((lt = N.value.get(de.filename)) == null ? void 0 : lt.action) === "download" ? (a(), i("span", a0, " Download ")) : ((xt = N.value.get(de.filename)) == null ? void 0 : xt.action) === "optional" ? (a(), i("span", l0, " Optional ")) : ((ss = N.value.get(de.filename)) == null ? void 0 : ss.action) === "skip" ? (a(), i("span", i0, " Skip ")) : ((Is = N.value.get(de.filename)) == null ? void 0 : Is.action) === "cancel_download" ? (a(), i("span", r0, " Cancel Download ")) : y("", !0)
                        ], 64)) : de.is_download_intent ? (a(), i("span", c0, " Pending Download ")) : (a(), i("span", u0, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              We.value.length === 0 && ue.value.length === 0 && q.value.length === 0 && xe.value.length === 0 ? (a(), i("div", d0, " No dependencies need resolution. ")) : y("", !0)
            ])
          ])) : y("", !0),
          M.value === "applying" ? (a(), L(Jy, {
            key: 4,
            progress: tt(d),
            onRestart: bt,
            onRetryFailed: Et
          }, null, 8, ["progress"])) : y("", !0)
        ])) : y("", !0)
      ]),
      footer: h(() => [
        M.value !== "analysis" && M.value !== "applying" ? (a(), L(Ne, {
          key: 0,
          variant: "secondary",
          disabled: S.value,
          onClick: Ue
        }, {
          default: h(() => [...B[51] || (B[51] = [
            $(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : y("", !0),
        B[54] || (B[54] = s("div", { class: "footer-spacer" }, null, -1)),
        M.value !== "applying" || tt(d).phase === "complete" || tt(d).phase === "error" ? (a(), L(Ne, {
          key: 1,
          variant: "secondary",
          onClick: B[0] || (B[0] = (de) => n("close"))
        }, {
          default: h(() => [
            $(f(tt(d).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : y("", !0),
        M.value === "analysis" ? (a(), L(Ne, {
          key: 2,
          variant: "primary",
          disabled: C.value,
          onClick: ve
        }, {
          default: h(() => [
            $(f(Pe.value === "review" ? "Continue to Review →" : "Continue"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : y("", !0),
        M.value === "nodes" ? (a(), L(Ne, {
          key: 3,
          variant: "primary",
          onClick: ze
        }, {
          default: h(() => [
            $(f(G.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : y("", !0),
        M.value === "models" ? (a(), L(Ne, {
          key: 4,
          variant: "primary",
          onClick: ze
        }, {
          default: h(() => [...B[52] || (B[52] = [
            $(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : y("", !0),
        M.value === "review" ? (a(), L(Ne, {
          key: 5,
          variant: "primary",
          disabled: S.value,
          loading: S.value,
          onClick: nt
        }, {
          default: h(() => [...B[53] || (B[53] = [
            $(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : y("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), m0 = /* @__PURE__ */ Se(f0, [["__scopeId", "data-v-49848358"]]), v0 = { class: "search-input-wrapper" }, p0 = ["value", "placeholder"], g0 = /* @__PURE__ */ be({
  __name: "SearchInput",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 },
    autoFocus: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "clear"],
  setup(e, { emit: t }) {
    const o = e, n = t, l = k(null);
    let r;
    function u(d) {
      const m = d.target.value;
      o.debounce > 0 ? (clearTimeout(r), r = window.setTimeout(() => {
        n("update:modelValue", m);
      }, o.debounce)) : n("update:modelValue", m);
    }
    function c() {
      var d;
      n("update:modelValue", ""), n("clear"), (d = l.value) == null || d.focus();
    }
    return rt(() => {
      o.autoFocus && l.value && l.value.focus();
    }), (d, m) => (a(), i("div", v0, [
      s("input", {
        ref_key: "inputRef",
        ref: l,
        value: e.modelValue,
        type: "text",
        placeholder: e.placeholder,
        class: "search-input",
        onInput: u,
        onKeyup: fs(c, ["escape"])
      }, null, 40, p0),
      e.clearable && e.modelValue ? (a(), i("button", {
        key: 0,
        class: "clear-button",
        onClick: c,
        title: "Clear search"
      }, " ✕ ")) : y("", !0)
    ]));
  }
}), h0 = /* @__PURE__ */ Se(g0, [["__scopeId", "data-v-266f857a"]]), y0 = { class: "search-bar" }, w0 = /* @__PURE__ */ be({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(e) {
    return (t, o) => (a(), i("div", y0, [
      b(h0, {
        "model-value": e.modelValue,
        placeholder: e.placeholder,
        debounce: e.debounce,
        clearable: e.clearable,
        "onUpdate:modelValue": o[0] || (o[0] = (n) => t.$emit("update:modelValue", n)),
        onClear: o[1] || (o[1] = (n) => t.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), io = /* @__PURE__ */ Se(w0, [["__scopeId", "data-v-3d51bbfd"]]), _0 = { class: "section-group" }, k0 = {
  key: 0,
  class: "section-content"
}, b0 = /* @__PURE__ */ be({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(e, { emit: t }) {
    const o = e, n = t, l = k(o.initiallyExpanded);
    function r() {
      o.collapsible && (l.value = !l.value, n("toggle", l.value));
    }
    return (u, c) => (a(), i("section", _0, [
      b(as, {
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
      !e.collapsible || l.value ? (a(), i("div", k0, [
        st(u.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), St = /* @__PURE__ */ Se(b0, [["__scopeId", "data-v-c48e33ed"]]), $0 = { class: "item-header" }, C0 = {
  key: 0,
  class: "item-icon"
}, x0 = { class: "item-info" }, S0 = {
  key: 0,
  class: "item-title"
}, I0 = {
  key: 1,
  class: "item-subtitle"
}, E0 = {
  key: 0,
  class: "item-details"
}, T0 = {
  key: 1,
  class: "item-actions"
}, M0 = /* @__PURE__ */ be({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const o = e, n = R(() => o.status ? `status-${o.status}` : "");
    return (l, r) => (a(), i("div", {
      class: Fe(["item-card", { clickable: e.clickable, compact: e.compact }, n.value]),
      onClick: r[0] || (r[0] = (u) => e.clickable && l.$emit("click"))
    }, [
      s("div", $0, [
        l.$slots.icon ? (a(), i("span", C0, [
          st(l.$slots, "icon", {}, void 0)
        ])) : y("", !0),
        s("div", x0, [
          l.$slots.title ? (a(), i("div", S0, [
            st(l.$slots, "title", {}, void 0)
          ])) : y("", !0),
          l.$slots.subtitle ? (a(), i("div", I0, [
            st(l.$slots, "subtitle", {}, void 0)
          ])) : y("", !0)
        ])
      ]),
      l.$slots.details ? (a(), i("div", E0, [
        st(l.$slots, "details", {}, void 0)
      ])) : y("", !0),
      l.$slots.actions ? (a(), i("div", T0, [
        st(l.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Vt = /* @__PURE__ */ Se(M0, [["__scopeId", "data-v-cc435e0e"]]), P0 = { class: "loading-state" }, R0 = { class: "loading-message" }, L0 = /* @__PURE__ */ be({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(e) {
    return (t, o) => (a(), i("div", P0, [
      o[0] || (o[0] = s("div", { class: "spinner" }, null, -1)),
      s("p", R0, f(e.message), 1)
    ]));
  }
}), xs = /* @__PURE__ */ Se(L0, [["__scopeId", "data-v-ad8436c9"]]), N0 = { class: "error-state" }, D0 = { class: "error-message" }, O0 = /* @__PURE__ */ be({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(e) {
    return (t, o) => (a(), i("div", N0, [
      o[2] || (o[2] = s("span", { class: "error-icon" }, "⚠", -1)),
      s("p", D0, f(e.message), 1),
      e.retry ? (a(), L(Te, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: o[0] || (o[0] = (n) => t.$emit("retry"))
      }, {
        default: h(() => [...o[1] || (o[1] = [
          $(" Retry ", -1)
        ])]),
        _: 1
      })) : y("", !0)
    ]));
  }
}), Ss = /* @__PURE__ */ Se(O0, [["__scopeId", "data-v-5397be48"]]), U0 = /* @__PURE__ */ be({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(e, { expose: t, emit: o }) {
    const n = o, { getWorkflows: l } = vt(), r = k([]), u = k(!1), c = k(null), d = k(""), m = k(!0), v = k(!1), p = k(!1), w = k(!1), g = k(null), _ = R(
      () => r.value.filter((z) => z.status === "broken")
    ), x = R(
      () => r.value.filter((z) => z.status === "new")
    ), C = R(
      () => r.value.filter((z) => z.status === "modified")
    ), S = R(
      () => r.value.filter((z) => z.status === "synced")
    ), T = R(() => {
      if (!d.value.trim()) return r.value;
      const z = d.value.toLowerCase();
      return r.value.filter((me) => me.name.toLowerCase().includes(z));
    }), M = R(
      () => _.value.filter(
        (z) => !d.value.trim() || z.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), P = R(
      () => x.value.filter(
        (z) => !d.value.trim() || z.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), D = R(
      () => C.value.filter(
        (z) => !d.value.trim() || z.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), N = R(
      () => S.value.filter(
        (z) => !d.value.trim() || z.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), O = R(
      () => v.value ? N.value : N.value.slice(0, 5)
    );
    async function E(z = !1) {
      u.value = !0, c.value = null;
      try {
        r.value = await l(z);
      } catch (me) {
        c.value = me instanceof Error ? me.message : "Failed to load workflows";
      } finally {
        u.value = !1;
      }
    }
    t({ loadWorkflows: E });
    function K(z) {
      g.value = z, p.value = !0;
    }
    function ae(z) {
      g.value = z, w.value = !0;
    }
    function fe(z) {
      g.value = z, window.dispatchEvent(new CustomEvent("comfygit:open-io-mapping", {
        detail: { workflowName: z }
      })), window.dispatchEvent(new CustomEvent("comfygit:close-panel"));
    }
    function ue(z) {
      var We;
      const Pe = (We = z.detail) == null ? void 0 : We.workflowName;
      Pe && fe(Pe);
    }
    function we() {
      n("refresh");
    }
    async function X() {
      w.value = !1, await E(!0);
    }
    async function G() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function Y(z) {
      return z.replace(/uninstallable node mappings?/gi, (me) => me.toLowerCase().endsWith("s") ? "community packages" : "community package").replace(/no installable package versions?/gi, "need community packages").replace(/\bare uninstallable\b/gi, "need community packages").replace(/\buninstallable\b/gi, "community-mapped");
    }
    function Re(z) {
      if (z.issue_summary && z.issue_summary.trim().length > 0)
        return Y(z.issue_summary);
      const me = [];
      return z.version_gated_count && z.version_gated_count > 0 && me.push(`${z.version_gated_count} node${z.version_gated_count > 1 ? "s" : ""} require newer ComfyUI`), z.uninstallable_count && z.uninstallable_count > 0 && me.push(`${z.uninstallable_count} node${z.uninstallable_count > 1 ? "s" : ""} need community packages`), z.missing_nodes > 0 && me.push(`${z.missing_nodes} missing node${z.missing_nodes > 1 ? "s" : ""}`), z.missing_models > 0 && me.push(`${z.missing_models} missing model${z.missing_models > 1 ? "s" : ""}`), z.models_with_category_mismatch && z.models_with_category_mismatch > 0 && me.push(`${z.models_with_category_mismatch} model${z.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), z.pending_downloads && z.pending_downloads > 0 && me.push(`${z.pending_downloads} pending download${z.pending_downloads > 1 ? "s" : ""}`), me.length > 0 ? me.join(", ") : "Has issues";
    }
    function se(z) {
      const me = z.sync_state === "new" ? "New" : z.sync_state === "modified" ? "Modified" : z.sync_state === "synced" ? "Synced" : z.sync_state, Pe = ge(z);
      return z.has_path_sync_issues && z.models_needing_path_sync && z.models_needing_path_sync > 0 ? `${z.models_needing_path_sync} model path${z.models_needing_path_sync > 1 ? "s" : ""} need${z.models_needing_path_sync === 1 ? "s" : ""} sync · ${Pe}` : `${me || "Unknown"} · ${Pe}`;
    }
    function ge(z) {
      const me = z.contract_summary;
      return !me || !me.has_contract ? "No contract" : me.status === "incomplete" ? `${me.input_count} in / ${me.output_count} out · incomplete` : `${me.input_count} in / ${me.output_count} out`;
    }
    return rt(() => {
      E(), window.addEventListener("comfygit:open-workflow-contract", ue);
    }), oa(() => {
      window.removeEventListener("comfygit:open-workflow-contract", ue);
    }), (z, me) => (a(), i(j, null, [
      b(At, null, {
        header: h(() => [
          b(zt, { title: "WORKFLOWS" })
        ]),
        search: h(() => [
          b(io, {
            modelValue: d.value,
            "onUpdate:modelValue": me[0] || (me[0] = (Pe) => d.value = Pe),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          u.value ? (a(), L(xs, {
            key: 0,
            message: "Loading workflows..."
          })) : c.value ? (a(), L(Ss, {
            key: 1,
            message: c.value,
            retry: !0,
            onRetry: E
          }, null, 8, ["message"])) : (a(), i(j, { key: 2 }, [
            M.value.length ? (a(), L(St, {
              key: 0,
              title: "BROKEN",
              count: M.value.length
            }, {
              default: h(() => [
                (a(!0), i(j, null, he(M.value, (Pe) => (a(), L(Vt, {
                  key: Pe.name,
                  status: "broken"
                }, {
                  icon: h(() => [...me[7] || (me[7] = [
                    $("⚠", -1)
                  ])]),
                  title: h(() => [
                    $(f(Pe.name), 1)
                  ]),
                  subtitle: h(() => [
                    $(f(Re(Pe)), 1)
                  ]),
                  actions: h(() => [
                    b(Te, {
                      variant: "primary",
                      size: "sm",
                      onClick: (We) => ae(Pe.name)
                    }, {
                      default: h(() => [...me[8] || (me[8] = [
                        $(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (We) => fe(Pe.name)
                    }, {
                      default: h(() => [...me[9] || (me[9] = [
                        $(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (We) => K(Pe.name)
                    }, {
                      default: h(() => [...me[10] || (me[10] = [
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
            P.value.length ? (a(), L(St, {
              key: 1,
              title: "NEW",
              count: P.value.length
            }, {
              default: h(() => [
                (a(!0), i(j, null, he(P.value, (Pe) => (a(), L(Vt, {
                  key: Pe.name,
                  status: Pe.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: h(() => [
                    $(f(Pe.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: h(() => [
                    $(f(Pe.name), 1)
                  ]),
                  subtitle: h(() => [
                    $(f(se(Pe)), 1)
                  ]),
                  actions: h(() => [
                    b(Te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (We) => fe(Pe.name)
                    }, {
                      default: h(() => [...me[11] || (me[11] = [
                        $(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (We) => K(Pe.name)
                    }, {
                      default: h(() => [...me[12] || (me[12] = [
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
            D.value.length ? (a(), L(St, {
              key: 2,
              title: "MODIFIED",
              count: D.value.length
            }, {
              default: h(() => [
                (a(!0), i(j, null, he(D.value, (Pe) => (a(), L(Vt, {
                  key: Pe.name,
                  status: Pe.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: h(() => [...me[13] || (me[13] = [
                    $("⚡", -1)
                  ])]),
                  title: h(() => [
                    $(f(Pe.name), 1)
                  ]),
                  subtitle: h(() => [
                    $(f(se(Pe)), 1)
                  ]),
                  actions: h(() => [
                    b(Te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (We) => fe(Pe.name)
                    }, {
                      default: h(() => [...me[14] || (me[14] = [
                        $(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (We) => K(Pe.name)
                    }, {
                      default: h(() => [...me[15] || (me[15] = [
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
            N.value.length ? (a(), L(St, {
              key: 3,
              title: "SYNCED",
              count: N.value.length,
              collapsible: !0,
              "initially-expanded": m.value,
              onToggle: me[2] || (me[2] = (Pe) => m.value = Pe)
            }, {
              default: h(() => [
                (a(!0), i(j, null, he(O.value, (Pe) => (a(), L(Vt, {
                  key: Pe.name,
                  status: Pe.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: h(() => [
                    $(f(Pe.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: h(() => [
                    $(f(Pe.name), 1)
                  ]),
                  subtitle: h(() => [
                    $(f(se(Pe)), 1)
                  ]),
                  actions: h(() => [
                    b(Te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (We) => fe(Pe.name)
                    }, {
                      default: h(() => [...me[16] || (me[16] = [
                        $(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (We) => K(Pe.name)
                    }, {
                      default: h(() => [...me[17] || (me[17] = [
                        $(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !v.value && N.value.length > 5 ? (a(), L(Te, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: me[1] || (me[1] = (Pe) => v.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: h(() => [
                    $(" View all " + f(N.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : y("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : y("", !0),
            T.value.length ? y("", !0) : (a(), L(cs, {
              key: 4,
              icon: "📭",
              message: d.value ? `No workflows match '${d.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      p.value && g.value ? (a(), L(Op, {
        key: 0,
        "workflow-name": g.value,
        onClose: me[3] || (me[3] = (Pe) => p.value = !1),
        onResolve: me[4] || (me[4] = (Pe) => ae(g.value)),
        onRefresh: me[5] || (me[5] = (Pe) => n("refresh"))
      }, null, 8, ["workflow-name"])) : y("", !0),
      w.value && g.value ? (a(), L(m0, {
        key: 1,
        "workflow-name": g.value,
        onClose: X,
        onInstall: we,
        onRefresh: me[6] || (me[6] = (Pe) => n("refresh")),
        onRestart: G
      }, null, 8, ["workflow-name"])) : y("", !0)
    ], 64));
  }
}), A0 = /* @__PURE__ */ Se(U0, [["__scopeId", "data-v-28ee54dd"]]), z0 = /* @__PURE__ */ be({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(e) {
    return (t, o) => (a(), i("div", {
      class: Fe(["summary-bar", e.variant])
    }, [
      st(t.$slots, "default", {}, void 0)
    ], 2));
  }
}), ia = /* @__PURE__ */ Se(z0, [["__scopeId", "data-v-ccb7816e"]]), F0 = { class: "source-modal" }, V0 = { class: "model-summary" }, B0 = { class: "summary-name" }, W0 = { class: "summary-meta" }, G0 = { key: 0 }, j0 = { key: 1 }, H0 = { key: 2 }, q0 = { class: "tab-bar" }, K0 = ["onClick"], J0 = {
  key: 0,
  class: "tab-content"
}, Q0 = { class: "section-header-row" }, Y0 = {
  key: 0,
  class: "state-message"
}, X0 = {
  key: 1,
  class: "error-message"
}, Z0 = {
  key: 2,
  class: "candidate-list"
}, e_ = { class: "candidate-main" }, t_ = { class: "candidate-url" }, s_ = { class: "candidate-meta" }, o_ = { class: "meta-chip" }, n_ = {
  key: 0,
  class: "meta-chip"
}, a_ = {
  key: 1,
  class: "meta-chip"
}, l_ = {
  key: 0,
  class: "reason-list",
  "aria-label": "Why this link matched"
}, i_ = { class: "reason-heading" }, r_ = {
  key: 1,
  class: "candidate-context"
}, c_ = { class: "candidate-actions" }, u_ = {
  key: 3,
  class: "state-message"
}, d_ = {
  key: 1,
  class: "tab-content"
}, f_ = { class: "direct-form" }, m_ = {
  key: 0,
  class: "error-message"
}, v_ = {
  key: 2,
  class: "error-message"
}, p_ = /* @__PURE__ */ be({
  __name: "ModelSourceModal",
  props: {
    model: {},
    overlayZIndex: { default: 10011 }
  },
  emits: ["close", "saved"],
  setup(e, { emit: t }) {
    const o = e, n = t, { getModelSourceCandidates: l, addModelSource: r } = vt(), u = [
      { id: "workflow", label: "Workflow Links" },
      { id: "direct", label: "Direct URL" }
    ], c = k("workflow"), d = k([]), m = k(!1), v = k(null), p = k(""), w = k(null), g = k(null), _ = k(!1), x = R(() => d.value.filter((D) => D.source === "workflow"));
    function C(D) {
      return D === "huggingface" ? "Hugging Face" : D === "civitai" ? "Civitai" : "Direct URL";
    }
    function S(D) {
      return D >= 75 ? "Strong" : D >= 45 ? "Possible" : "Weak";
    }
    const T = R(() => {
      const D = p.value.trim();
      if (!D) return null;
      try {
        const N = new URL(D);
        if (!["http:", "https:"].includes(N.protocol))
          return "Use an HTTP or HTTPS URL.";
      } catch {
        return "Enter a valid URL.";
      }
      return null;
    });
    async function M() {
      m.value = !0, v.value = null;
      try {
        const D = await l(o.model.hash);
        d.value = D.candidates;
      } catch (D) {
        v.value = D instanceof Error ? D.message : "Failed to scan workflows";
      } finally {
        m.value = !1;
      }
    }
    async function P(D) {
      if (!(!D || !o.model.hash)) {
        w.value = D, g.value = null;
        try {
          await r(o.model.hash, D), n("saved"), n("close");
        } catch (N) {
          g.value = N instanceof Error ? N.message : "Failed to save source";
        } finally {
          w.value = null;
        }
      }
    }
    return rt(M), (D, N) => (a(), i(j, null, [
      b(It, {
        title: `Find Source: ${e.model.filename}`,
        size: "lg",
        "fixed-height": "",
        "overlay-z-index": e.overlayZIndex,
        onClose: N[4] || (N[4] = (O) => n("close"))
      }, {
        body: h(() => [
          s("div", F0, [
            s("div", V0, [
              s("div", null, [
                N[6] || (N[6] = s("div", { class: "summary-label" }, "Local model", -1)),
                s("div", B0, f(e.model.filename), 1)
              ]),
              s("div", W0, [
                e.model.hash ? (a(), i("span", G0, "quick hash " + f(e.model.hash), 1)) : y("", !0),
                e.model.blake3 ? (a(), i("span", j0, "blake3 " + f(e.model.blake3), 1)) : y("", !0),
                e.model.sha256 ? (a(), i("span", H0, "sha256 " + f(e.model.sha256), 1)) : y("", !0)
              ])
            ]),
            s("div", q0, [
              (a(), i(j, null, he(u, (O) => s("button", {
                key: O.id,
                class: Fe(["tab-btn", { active: c.value === O.id }]),
                onClick: (E) => c.value = O.id
              }, f(O.label), 11, K0)), 64))
            ]),
            c.value === "workflow" ? (a(), i("section", J0, [
              s("div", Q0, [
                N[8] || (N[8] = s("div", null, [
                  s("h4", null, "Workflow Links"),
                  s("p", null, "Candidate model links found in saved workflow notes or metadata.")
                ], -1)),
                b(Ne, {
                  variant: "secondary",
                  size: "sm",
                  loading: m.value,
                  onClick: M
                }, {
                  default: h(() => [...N[7] || (N[7] = [
                    $(" Scan ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ]),
              m.value ? (a(), i("div", Y0, "Scanning workflows...")) : v.value ? (a(), i("div", X0, f(v.value), 1)) : x.value.length ? (a(), i("div", Z0, [
                (a(!0), i(j, null, he(x.value, (O) => {
                  var E;
                  return a(), i("article", {
                    key: `${O.workflow}:${O.url}`,
                    class: "candidate-card"
                  }, [
                    s("div", e_, [
                      s("div", t_, f(O.url), 1),
                      s("div", s_, [
                        s("span", o_, [
                          N[9] || (N[9] = s("span", { class: "chip-label" }, "Provider", -1)),
                          s("span", null, f(C(O.source_type)), 1)
                        ]),
                        O.workflow ? (a(), i("span", n_, [
                          N[10] || (N[10] = s("span", { class: "chip-label" }, "Workflow", -1)),
                          s("span", null, f(O.workflow), 1)
                        ])) : y("", !0),
                        O.confidence ? (a(), i("span", a_, [
                          N[11] || (N[11] = s("span", { class: "chip-label" }, "Match", -1)),
                          s("span", null, f(S(O.confidence)), 1)
                        ])) : y("", !0)
                      ]),
                      (E = O.reasons) != null && E.length ? (a(), i("div", l_, [
                        s("div", i_, [
                          N[12] || (N[12] = s("span", { class: "reason-label" }, "Matched by", -1)),
                          b(Sl, {
                            size: 14,
                            title: "About match reasons",
                            onClick: N[0] || (N[0] = (K) => _.value = !0)
                          })
                        ]),
                        (a(!0), i(j, null, he(O.reasons, (K) => (a(), i("span", {
                          key: K,
                          class: "reason-chip"
                        }, f(K), 1))), 128))
                      ])) : y("", !0),
                      O.context ? (a(), i("details", r_, [
                        N[13] || (N[13] = s("summary", null, "Workflow snippet", -1)),
                        s("p", null, f(O.context), 1)
                      ])) : y("", !0)
                    ]),
                    s("div", c_, [
                      b(Ne, {
                        variant: "primary",
                        size: "sm",
                        loading: w.value === O.url,
                        onClick: (K) => P(O.url)
                      }, {
                        default: h(() => [...N[14] || (N[14] = [
                          $(" Use as Source ", -1)
                        ])]),
                        _: 1
                      }, 8, ["loading", "onClick"])
                    ])
                  ]);
                }), 128))
              ])) : (a(), i("div", u_, " No likely workflow links found. Try direct URL for now. "))
            ])) : c.value === "direct" ? (a(), i("section", d_, [
              N[16] || (N[16] = s("div", { class: "section-header-row" }, [
                s("div", null, [
                  s("h4", null, "Direct URL"),
                  s("p", null, "Paste the download URL that another machine should use for this exact model file.")
                ])
              ], -1)),
              s("div", f_, [
                b(wt, {
                  modelValue: p.value,
                  "onUpdate:modelValue": N[1] || (N[1] = (O) => p.value = O),
                  placeholder: "https://huggingface.co/org/repo/resolve/main/model.safetensors",
                  "full-width": ""
                }, null, 8, ["modelValue"]),
                T.value ? (a(), i("p", m_, f(T.value), 1)) : y("", !0),
                b(Ne, {
                  variant: "primary",
                  disabled: !p.value.trim() || !!T.value,
                  loading: w.value === p.value.trim(),
                  onClick: N[2] || (N[2] = (O) => P(p.value.trim()))
                }, {
                  default: h(() => [...N[15] || (N[15] = [
                    $(" Use as Source ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled", "loading"])
              ])
            ])) : y("", !0),
            g.value ? (a(), i("p", v_, f(g.value), 1)) : y("", !0)
          ])
        ]),
        footer: h(() => [
          b(Ne, {
            variant: "secondary",
            onClick: N[3] || (N[3] = (O) => n("close"))
          }, {
            default: h(() => [...N[17] || (N[17] = [
              $(" Close ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["title", "overlay-z-index"]),
      b(ts, {
        show: _.value,
        title: "About Match Reasons",
        "max-width": "460px",
        "overlay-z-index": e.overlayZIndex + 2,
        onClose: N[5] || (N[5] = (O) => _.value = !1)
      }, {
        content: h(() => [...N[18] || (N[18] = [
          s("ul", { class: "match-info-list" }, [
            s("li", null, [
              s("strong", null, "Filename match"),
              $(" means the link or nearby workflow text includes the exact model filename.")
            ]),
            s("li", null, [
              s("strong", null, "Model name match"),
              $(" means the link or nearby workflow text includes the filename without its extension.")
            ]),
            s("li", null, [
              s("strong", null, "Hash match"),
              $(" means a known quick, Blake3, or SHA256 hash appears near the link.")
            ]),
            s("li", null, [
              s("strong", null, "Category nearby"),
              $(" means the workflow text near the link mentions the model folder/category.")
            ]),
            s("li", null, [
              s("strong", null, "Model file URL"),
              $(" means the URL itself ends like a model file.")
            ]),
            s("li", null, [
              s("strong", null, "Known model host"),
              $(" means the URL points at a recognized model host such as Hugging Face or Civitai.")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show", "overlay-z-index"])
    ], 64));
  }
}), g_ = /* @__PURE__ */ Se(p_, [["__scopeId", "data-v-f6ebd407"]]), h_ = {
  key: 0,
  class: "model-details"
}, y_ = { class: "detail-section" }, w_ = { class: "detail-row" }, __ = { class: "detail-value mono" }, k_ = { class: "detail-row" }, b_ = { class: "detail-value mono" }, $_ = { class: "detail-row" }, C_ = { class: "detail-value mono" }, x_ = { class: "detail-row" }, S_ = { class: "detail-value" }, I_ = { class: "detail-row" }, E_ = { class: "detail-value" }, T_ = { class: "detail-row" }, M_ = { class: "detail-value" }, P_ = { class: "detail-section" }, R_ = { class: "section-header" }, L_ = {
  key: 0,
  class: "locations-list"
}, N_ = { class: "location-path mono" }, D_ = {
  key: 0,
  class: "location-modified"
}, O_ = ["onClick"], U_ = {
  key: 1,
  class: "empty-state"
}, A_ = { class: "detail-section" }, z_ = { class: "section-header-row" }, F_ = { class: "section-header" }, V_ = {
  key: 0,
  class: "sources-list"
}, B_ = { class: "source-type" }, W_ = ["href"], G_ = ["disabled", "onClick"], j_ = {
  key: 1,
  class: "empty-state"
}, H_ = {
  key: 2,
  class: "source-error"
}, q_ = {
  key: 3,
  class: "source-success"
}, K_ = /* @__PURE__ */ be({
  __name: "ModelDetailModal",
  props: {
    identifier: {},
    overlayZIndex: {}
  },
  emits: ["close", "sourceSaved"],
  setup(e, { emit: t }) {
    const o = e, n = t, { getModelDetails: l, removeModelSource: r, openFileLocation: u } = vt(), c = k(null), d = k(!0), m = k(null), v = k(null), p = k(null), w = k(null), g = k(!1), _ = k(null);
    let x = null;
    function C(O, E = "success", K = 2e3) {
      x && clearTimeout(x), _.value = { message: O, type: E }, x = setTimeout(() => {
        _.value = null;
      }, K);
    }
    function S(O) {
      if (!O) return "Unknown";
      const E = 1024 * 1024 * 1024, K = 1024 * 1024;
      return O >= E ? `${(O / E).toFixed(1)} GB` : O >= K ? `${(O / K).toFixed(0)} MB` : `${(O / 1024).toFixed(0)} KB`;
    }
    function T(O) {
      navigator.clipboard.writeText(O), C("Copied to clipboard!");
    }
    async function M(O) {
      try {
        await u(O), C("Opening file location...");
      } catch {
        C("Failed to open location", "error");
      }
    }
    async function P(O) {
      if (c.value) {
        v.value = O, p.value = null, w.value = null;
        try {
          await r(c.value.hash, O), C("Source removed"), await N();
        } catch (E) {
          p.value = E instanceof Error ? E.message : "Failed to remove source";
        } finally {
          v.value = null;
        }
      }
    }
    async function D() {
      w.value = "Source added successfully!", g.value = !1, await N(), n("sourceSaved");
    }
    async function N() {
      d.value = !0, m.value = null;
      try {
        c.value = await l(o.identifier);
      } catch (O) {
        m.value = O instanceof Error ? O.message : "Failed to load model details";
      } finally {
        d.value = !1;
      }
    }
    return rt(N), (O, E) => {
      var K;
      return a(), i(j, null, [
        b(It, {
          title: `Model Details: ${((K = c.value) == null ? void 0 : K.filename) || "Loading..."}`,
          size: "lg",
          loading: d.value,
          error: m.value,
          "overlay-z-index": e.overlayZIndex,
          onClose: E[5] || (E[5] = (ae) => O.$emit("close"))
        }, {
          body: h(() => {
            var ae, fe, ue, we;
            return [
              c.value ? (a(), i("div", h_, [
                s("section", y_, [
                  s("div", w_, [
                    E[7] || (E[7] = s("span", { class: "detail-label" }, "Hash:", -1)),
                    s("span", __, f(c.value.hash || "Not computed"), 1),
                    c.value.hash ? (a(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: E[0] || (E[0] = (X) => T(c.value.hash))
                    }, "Copy")) : y("", !0)
                  ]),
                  s("div", k_, [
                    E[8] || (E[8] = s("span", { class: "detail-label" }, "Blake3:", -1)),
                    s("span", b_, f(c.value.blake3 || "Not computed"), 1),
                    c.value.blake3 ? (a(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: E[1] || (E[1] = (X) => T(c.value.blake3))
                    }, "Copy")) : y("", !0)
                  ]),
                  s("div", $_, [
                    E[9] || (E[9] = s("span", { class: "detail-label" }, "SHA256:", -1)),
                    s("span", C_, f(c.value.sha256 || "Not computed"), 1),
                    c.value.sha256 ? (a(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: E[2] || (E[2] = (X) => T(c.value.sha256))
                    }, "Copy")) : y("", !0)
                  ]),
                  s("div", x_, [
                    E[10] || (E[10] = s("span", { class: "detail-label" }, "Size:", -1)),
                    s("span", S_, f(S(c.value.size)), 1)
                  ]),
                  s("div", I_, [
                    E[11] || (E[11] = s("span", { class: "detail-label" }, "Category:", -1)),
                    s("span", E_, f(c.value.category), 1)
                  ]),
                  s("div", T_, [
                    E[12] || (E[12] = s("span", { class: "detail-label" }, "Last Seen:", -1)),
                    s("span", M_, f(c.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                s("section", P_, [
                  s("h4", R_, "Locations (" + f(((ae = c.value.locations) == null ? void 0 : ae.length) || 0) + ")", 1),
                  (fe = c.value.locations) != null && fe.length ? (a(), i("div", L_, [
                    (a(!0), i(j, null, he(c.value.locations, (X, G) => (a(), i("div", {
                      key: G,
                      class: "location-item"
                    }, [
                      s("span", N_, f(X.path), 1),
                      X.modified ? (a(), i("span", D_, "Modified: " + f(X.modified), 1)) : y("", !0),
                      X.path ? (a(), i("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (Y) => M(X.path)
                      }, " Open File Location ", 8, O_)) : y("", !0)
                    ]))), 128))
                  ])) : (a(), i("div", U_, "No locations found"))
                ]),
                s("section", A_, [
                  s("div", z_, [
                    s("h4", F_, "Download Sources (" + f(((ue = c.value.sources) == null ? void 0 : ue.length) || 0) + ")", 1),
                    s("button", {
                      class: "find-source-btn",
                      onClick: E[3] || (E[3] = (X) => g.value = !0)
                    }, " Find Source ")
                  ]),
                  (we = c.value.sources) != null && we.length ? (a(), i("div", V_, [
                    (a(!0), i(j, null, he(c.value.sources, (X, G) => (a(), i("div", {
                      key: G,
                      class: "source-item"
                    }, [
                      s("span", B_, f(X.type) + ":", 1),
                      s("a", {
                        href: X.url,
                        target: "_blank",
                        class: "source-url"
                      }, f(X.url), 9, W_),
                      s("button", {
                        class: "remove-source-btn",
                        disabled: v.value === X.url,
                        onClick: (Y) => P(X.url)
                      }, f(v.value === X.url ? "..." : "×"), 9, G_)
                    ]))), 128))
                  ])) : (a(), i("div", j_, " No download sources configured ")),
                  p.value ? (a(), i("p", H_, f(p.value), 1)) : y("", !0),
                  w.value ? (a(), i("p", q_, f(w.value), 1)) : y("", !0)
                ])
              ])) : y("", !0)
            ];
          }),
          footer: h(() => [
            s("button", {
              class: "btn-secondary",
              onClick: E[4] || (E[4] = (ae) => O.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error", "overlay-z-index"]),
        (a(), L(Lt, { to: "body" }, [
          _.value ? (a(), i("div", {
            key: 0,
            class: Fe(["toast", _.value.type])
          }, f(_.value.message), 3)) : y("", !0)
        ])),
        c.value && g.value ? (a(), L(g_, {
          key: 0,
          model: c.value,
          "overlay-z-index": (e.overlayZIndex || 10003) + 2,
          onClose: E[6] || (E[6] = (ae) => g.value = !1),
          onSaved: D
        }, null, 8, ["model", "overlay-z-index"])) : y("", !0)
      ], 64);
    };
  }
}), Il = /* @__PURE__ */ Se(K_, [["__scopeId", "data-v-eea15e7f"]]), J_ = ["disabled"], Q_ = { class: "dropdown-value" }, Y_ = ["onClick"], X_ = {
  key: 0,
  class: "dropdown-error"
}, Z_ = /* @__PURE__ */ be({
  __name: "BaseDropdown",
  props: {
    modelValue: {},
    options: {},
    placeholder: {},
    disabled: { type: Boolean, default: !1 },
    error: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, n = t, l = k(!1), r = k(null), u = k(null), c = k({});
    function d(S) {
      return typeof S == "string" ? S : S.value;
    }
    function m(S) {
      return typeof S == "string" ? S : S.label;
    }
    const v = R(() => {
      if (!o.modelValue && o.placeholder)
        return o.placeholder;
      const S = o.options.find((T) => d(T) === o.modelValue);
      return S ? m(S) : String(o.modelValue);
    });
    function p() {
      o.disabled || (l.value = !l.value);
    }
    function w() {
      l.value = !1;
    }
    function g(S) {
      n("update:modelValue", d(S)), w();
    }
    function _() {
      if (!r.value) return;
      const S = r.value.getBoundingClientRect(), T = window.innerHeight, M = T - S.bottom, P = S.top, D = Math.min(300, o.options.length * 36 + 8), N = M < D && P > M;
      c.value = {
        position: "fixed",
        left: `${S.left}px`,
        width: `${S.width}px`,
        maxHeight: "300px",
        ...N ? { bottom: `${T - S.top + 4}px` } : { top: `${S.bottom + 4}px` }
      };
    }
    kt(l, async (S) => {
      S && (await Pt(), _());
    });
    function x() {
      l.value && _();
    }
    function C(S) {
      S.key === "Escape" && l.value && w();
    }
    return rt(() => {
      window.addEventListener("scroll", x, !0), window.addEventListener("keydown", C);
    }), Mo(() => {
      window.removeEventListener("scroll", x, !0), window.removeEventListener("keydown", C);
    }), (S, T) => (a(), i("div", {
      class: "base-dropdown",
      ref_key: "dropdownRef",
      ref: r
    }, [
      s("button", {
        type: "button",
        class: Fe(["dropdown-trigger", { open: l.value, error: !!e.error }]),
        disabled: e.disabled,
        onClick: p
      }, [
        s("span", Q_, f(v.value), 1),
        T[0] || (T[0] = s("span", { class: "dropdown-arrow" }, "▼", -1))
      ], 10, J_),
      (a(), L(Lt, { to: "body" }, [
        l.value ? (a(), i("div", {
          key: 0,
          class: "dropdown-overlay",
          onClick: w
        })) : y("", !0),
        l.value ? (a(), i("div", {
          key: 1,
          ref_key: "menuRef",
          ref: u,
          class: "dropdown-menu",
          style: Rt(c.value)
        }, [
          (a(!0), i(j, null, he(e.options, (M) => (a(), i("div", {
            key: d(M),
            class: Fe(["dropdown-option", { selected: d(M) === e.modelValue }]),
            onClick: (P) => g(M)
          }, f(m(M)), 11, Y_))), 128))
        ], 4)) : y("", !0)
      ])),
      e.error ? (a(), i("span", X_, f(e.error), 1)) : y("", !0)
    ], 512));
  }
}), ek = /* @__PURE__ */ Se(Z_, [["__scopeId", "data-v-857e085b"]]);
function tk(e) {
  const t = e.toLowerCase();
  return t === "huggingface.co" || t.endsWith(".huggingface.co") || t === "hf.co";
}
function sk(e) {
  const t = e.trim();
  if (!t) return { kind: "unknown" };
  let o;
  try {
    o = new URL(t);
  } catch {
    return { kind: "unknown" };
  }
  if (!tk(o.hostname)) return { kind: "unknown" };
  const n = o.pathname.replace(/^\/+/, "").split("/").filter(Boolean);
  if (n[0] === "datasets" || n[0] === "spaces") return { kind: "unknown" };
  if (n.length < 2) return { kind: "unknown" };
  const l = `${n[0]}/${n[1]}`, r = n.slice(2);
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
function ok(e) {
  return e.split("/").map(encodeURIComponent).join("/");
}
function nk(e, t, o) {
  const [n, l] = e.split("/");
  return `https://huggingface.co/${encodeURIComponent(n)}/${encodeURIComponent(l)}/resolve/${encodeURIComponent(t)}/${ok(o)}`;
}
const ak = { class: "hf-file-browser" }, lk = { class: "browser-header" }, ik = { class: "repo-info" }, rk = { class: "repo-id" }, ck = {
  key: 0,
  class: "revision-pill"
}, uk = {
  key: 0,
  class: "loading-state"
}, dk = {
  key: 1,
  class: "error-state"
}, fk = { class: "toolbar" }, mk = { class: "toolbar-actions" }, vk = { class: "file-list-container" }, pk = {
  key: 0,
  class: "file-list-header"
}, gk = ["checked", "indeterminate"], hk = { class: "sort-indicator" }, yk = { class: "sort-indicator" }, wk = {
  key: 1,
  class: "empty-state"
}, _k = {
  key: 2,
  class: "file-list"
}, kk = ["onClick"], bk = ["checked", "onChange"], $k = { class: "file-path" }, Ck = { class: "file-size" }, xk = { class: "destination-section" }, Sk = { class: "destination-row" }, Ik = {
  key: 0,
  class: "path-separator"
}, Ek = { class: "action-bar" }, Tk = { class: "summary-info" }, Mk = { class: "summary-count" }, Pk = { class: "summary-size" }, Rk = /* @__PURE__ */ be({
  __name: "HfFileBrowser",
  props: {
    repoId: {},
    revision: {},
    initialPath: {},
    preselectedFile: {}
  },
  emits: ["queue", "back"],
  setup(e, { emit: t }) {
    const o = e, n = t, { getHuggingFaceRepoInfo: l, getModelsSubdirectories: r } = vt(), u = k([]), c = k(/* @__PURE__ */ new Set()), d = k(!1), m = k(null), v = k(""), p = k(!1), w = k("name"), g = k(!0), _ = k(""), x = k(""), C = k(""), S = k([]), T = k(!1);
    let M = !1;
    const P = /^(.*)-(\d{4,5})-of-(\d{4,5})(\.[^.]+)$/i, D = R(() => {
      let H = u.value;
      if (o.initialPath) {
        const ee = o.initialPath.endsWith("/") ? o.initialPath : `${o.initialPath}/`;
        H = H.filter((q) => q.path.startsWith(ee) || q.path === o.initialPath);
      }
      if (p.value && (H = H.filter((ee) => ee.is_model_file)), v.value.trim()) {
        const ee = v.value.toLowerCase();
        H = H.filter((q) => q.path.toLowerCase().includes(ee));
      }
      return H;
    }), N = R(() => {
      const H = [...D.value];
      return H.sort((ee, q) => {
        let Z;
        return w.value === "name" ? Z = ee.path.localeCompare(q.path) : Z = ee.size - q.size, g.value ? Z : -Z;
      }), H;
    }), O = R(() => D.value.length === 0 ? !1 : D.value.every((H) => c.value.has(H.path))), E = R(() => D.value.some((H) => c.value.has(H.path))), K = R(() => {
      const H = S.value.map((ee) => ({
        label: ee,
        value: ee
      }));
      return H.push({ label: "Custom path...", value: "__custom__" }), H;
    }), ae = R(() => _.value === "__custom__" ? C.value.trim().length > 0 : _.value.length > 0), fe = R(() => {
      let H = 0;
      for (const ee of c.value) {
        const q = u.value.find((Z) => Z.path === ee);
        q && (H += q.size);
      }
      return H;
    });
    function ue(H) {
      if (H === 0) return "0 B";
      const ee = 1024 * 1024 * 1024, q = 1024 * 1024, Z = 1024;
      return H >= ee ? `${(H / ee).toFixed(2)} GB` : H >= q ? `${(H / q).toFixed(1)} MB` : H >= Z ? `${(H / Z).toFixed(0)} KB` : `${H} B`;
    }
    function we(H) {
      const ee = H.match(P);
      return ee ? `${ee[1]}${ee[4]}` : null;
    }
    function X(H) {
      const ee = new Set(c.value), q = ee.has(H.path), Z = H.shard_group || we(H.path);
      if (Z) {
        const xe = u.value.filter((ce) => (ce.shard_group || we(ce.path)) === Z);
        q ? xe.forEach((ce) => ee.delete(ce.path)) : xe.forEach((ce) => ee.add(ce.path));
      } else
        q ? ee.delete(H.path) : ee.add(H.path);
      c.value = ee;
    }
    function G() {
      const H = new Set(c.value);
      for (const ee of D.value)
        ee.is_model_file && H.add(ee.path);
      c.value = H;
    }
    function Y() {
      c.value = /* @__PURE__ */ new Set();
    }
    function Re() {
      if (O.value) {
        const H = new Set(c.value);
        for (const ee of D.value)
          H.delete(ee.path);
        c.value = H;
      } else {
        const H = new Set(c.value);
        for (const ee of D.value)
          H.add(ee.path);
        c.value = H;
      }
    }
    function se(H) {
      w.value === H ? g.value = !g.value : (w.value = H, g.value = !0);
    }
    function ge(H) {
      const ee = H.split("/");
      return ee.length >= 2 ? ee[ee.length - 2] : null;
    }
    function z() {
      if (T.value || c.value.size === 0) return;
      const H = /* @__PURE__ */ new Set();
      for (const Z of c.value) {
        const xe = ge(Z);
        xe && H.add(xe.toLowerCase());
      }
      if (H.size !== 1) return;
      const ee = [...H][0], q = S.value.find(
        (Z) => Z.toLowerCase() === ee
      );
      q && q !== _.value && (M = !0, _.value = q, Pt(() => {
        M = !1;
      }));
    }
    function me() {
      return _.value === "__custom__" ? C.value.trim() : x.value.trim() ? `${_.value}/${x.value.trim()}` : _.value;
    }
    function Pe() {
      if (c.value.size === 0 || !ae.value) return;
      const H = me(), ee = [];
      for (const q of c.value) {
        const Z = u.value.find((xe) => xe.path === q);
        Z && ee.push({
          url: nk(o.repoId, o.revision, Z.path),
          destination: H,
          filename: Z.path.split("/").pop() || Z.path
        });
      }
      n("queue", ee);
    }
    async function We() {
      if (o.repoId) {
        d.value = !0, m.value = null;
        try {
          const H = `https://huggingface.co/${o.repoId}/tree/${o.revision || "main"}`, ee = await l(H);
          if (u.value = ee.files, o.preselectedFile) {
            const q = u.value.find((Z) => Z.path === o.preselectedFile);
            q && X(q);
          }
        } catch (H) {
          m.value = H instanceof Error ? H.message : "Failed to load repository";
        } finally {
          d.value = !1;
        }
      }
    }
    async function Ee() {
      try {
        const H = await r();
        S.value = H.directories, H.directories.length > 0 && !_.value && (_.value = H.directories[0]);
      } catch {
        S.value = ["checkpoints", "loras", "vae", "controlnet", "unet"], _.value || (_.value = "checkpoints");
      }
    }
    return kt(() => [o.repoId, o.revision], () => {
      o.repoId && We();
    }, { immediate: !1 }), kt(() => o.repoId, () => {
      T.value = !1;
    }), kt(c, () => {
      z();
    }, { deep: !0 }), kt(S, () => {
      S.value.length > 0 && c.value.size > 0 && z();
    }), kt(_, (H, ee) => {
      M || ee === "" || (T.value = !0);
    }), rt(() => {
      We(), Ee();
    }), (H, ee) => (a(), i("div", ak, [
      s("div", lk, [
        s("button", {
          class: "back-btn",
          onClick: ee[0] || (ee[0] = (q) => H.$emit("back")),
          title: "Back to search"
        }, " ◄ "),
        s("div", ik, [
          s("span", rk, f(e.repoId), 1),
          e.revision ? (a(), i("span", ck, f(e.revision), 1)) : y("", !0)
        ])
      ]),
      d.value ? (a(), i("div", uk, " Loading repository files... ")) : m.value ? (a(), i("div", dk, f(m.value), 1)) : (a(), i(j, { key: 2 }, [
        s("div", fk, [
          b(wt, {
            modelValue: v.value,
            "onUpdate:modelValue": ee[1] || (ee[1] = (q) => v.value = q),
            placeholder: "Filter files...",
            type: "search",
            class: "search-input"
          }, null, 8, ["modelValue"]),
          s("div", mk, [
            s("button", {
              class: Fe(["toggle-btn", { active: p.value }]),
              onClick: ee[2] || (ee[2] = (q) => p.value = !p.value)
            }, f(p.value ? "Models Only" : "All Files"), 3),
            s("button", {
              class: "action-btn",
              onClick: G
            }, "Auto-Select Models"),
            s("button", {
              class: "action-btn",
              onClick: Y
            }, "Clear")
          ])
        ]),
        s("div", vk, [
          D.value.length > 0 ? (a(), i("div", pk, [
            s("input", {
              type: "checkbox",
              checked: O.value,
              indeterminate: E.value && !O.value,
              class: "file-checkbox",
              onChange: Re
            }, null, 40, gk),
            s("span", {
              class: "header-name",
              onClick: ee[3] || (ee[3] = (q) => se("name"))
            }, [
              ee[9] || (ee[9] = $(" Name ", -1)),
              s("span", hk, f(w.value === "name" ? g.value ? "▲" : "▼" : ""), 1)
            ]),
            s("span", {
              class: "header-size",
              onClick: ee[4] || (ee[4] = (q) => se("size"))
            }, [
              ee[10] || (ee[10] = $(" Size ", -1)),
              s("span", yk, f(w.value === "size" ? g.value ? "▲" : "▼" : ""), 1)
            ])
          ])) : y("", !0),
          D.value.length === 0 ? (a(), i("div", wk, f(u.value.length === 0 ? "No files in repository" : "No files match filter"), 1)) : (a(), i("div", _k, [
            (a(!0), i(j, null, he(N.value, (q) => (a(), i("div", {
              key: q.path,
              class: Fe(["file-item", { selected: c.value.has(q.path) }]),
              onClick: (Z) => X(q)
            }, [
              s("input", {
                type: "checkbox",
                checked: c.value.has(q.path),
                class: "file-checkbox",
                onClick: ee[5] || (ee[5] = mt(() => {
                }, ["stop"])),
                onChange: (Z) => X(q)
              }, null, 40, bk),
              s("span", $k, f(q.path), 1),
              s("span", Ck, f(ue(q.size)), 1)
            ], 10, kk))), 128))
          ]))
        ]),
        s("div", xk, [
          ee[11] || (ee[11] = s("h4", { class: "section-label" }, "Download Destination", -1)),
          s("div", Sk, [
            b(ek, {
              modelValue: _.value,
              "onUpdate:modelValue": ee[6] || (ee[6] = (q) => _.value = q),
              options: K.value,
              placeholder: "Select directory...",
              class: "dest-select"
            }, null, 8, ["modelValue", "options"]),
            _.value !== "__custom__" ? (a(), i("span", Ik, "/")) : y("", !0),
            _.value !== "__custom__" ? (a(), L(wt, {
              key: 1,
              modelValue: x.value,
              "onUpdate:modelValue": ee[7] || (ee[7] = (q) => x.value = q),
              placeholder: "subfolder (optional)",
              class: "dest-subfolder"
            }, null, 8, ["modelValue"])) : y("", !0)
          ]),
          _.value === "__custom__" ? (a(), L(wt, {
            key: 0,
            modelValue: C.value,
            "onUpdate:modelValue": ee[8] || (ee[8] = (q) => C.value = q),
            placeholder: "Enter full path relative to models directory...",
            class: "dest-custom",
            "full-width": ""
          }, null, 8, ["modelValue"])) : y("", !0)
        ]),
        s("div", Ek, [
          s("div", Tk, [
            s("span", Mk, f(c.value.size) + " file(s) selected", 1),
            s("span", Pk, f(ue(fe.value)), 1)
          ]),
          b(Ne, {
            variant: "primary",
            disabled: c.value.size === 0 || !ae.value,
            onClick: Pe
          }, {
            default: h(() => [...ee[12] || (ee[12] = [
              $(" Queue Download ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"])
        ])
      ], 64))
    ]));
  }
}), Lk = /* @__PURE__ */ Se(Rk, [["__scopeId", "data-v-183acebc"]]), Nk = { class: "token-config-modal" }, Dk = { class: "provider-info" }, Ok = { class: "provider-icon" }, Uk = { class: "provider-name" }, Ak = {
  key: 0,
  class: "current-token"
}, zk = { class: "mask" }, Fk = { class: "token-input-section" }, Vk = { class: "input-label" }, Bk = { class: "help-text" }, Wk = ["href"], Gk = { class: "modal-actions" }, jk = /* @__PURE__ */ be({
  __name: "TokenConfigModal",
  props: {
    provider: {},
    currentTokenMask: {}
  },
  emits: ["close", "saved", "cleared"],
  setup(e, { emit: t }) {
    const o = e, n = t, { updateConfig: l } = vt(), r = k(""), u = k(!1), c = k(!1), d = R(
      () => o.provider === "huggingface" ? "HuggingFace" : "CivitAI"
    ), m = R(
      () => o.provider === "huggingface" ? "🤗" : "🎨"
    ), v = R(
      () => o.provider === "huggingface" ? "hf_xxxx..." : "Enter API key..."
    ), p = R(
      () => o.provider === "huggingface" ? "https://huggingface.co/settings/tokens" : "https://civitai.com/user/account"
    ), w = R(
      () => o.provider === "huggingface" ? "Get your HuggingFace token →" : "Get your CivitAI API key →"
    );
    async function g() {
      if (r.value.trim()) {
        u.value = !0;
        try {
          const x = o.provider === "huggingface" ? { huggingface_token: r.value.trim() } : { civitai_api_key: r.value.trim() };
          await l(x), r.value = "", n("saved"), n("close");
        } catch (x) {
          console.error("Failed to save token:", x);
        } finally {
          u.value = !1;
        }
      }
    }
    async function _() {
      c.value = !0;
      try {
        const x = o.provider === "huggingface" ? { huggingface_token: null } : { civitai_api_key: null };
        await l(x), n("cleared"), n("close");
      } catch (x) {
        console.error("Failed to clear token:", x);
      } finally {
        c.value = !1;
      }
    }
    return (x, C) => (a(), L(It, {
      title: "Configure API Token",
      onClose: C[2] || (C[2] = (S) => x.$emit("close"))
    }, {
      body: h(() => [
        s("div", Nk, [
          s("div", Dk, [
            s("span", Ok, f(m.value), 1),
            s("span", Uk, f(d.value), 1)
          ]),
          e.currentTokenMask ? (a(), i("div", Ak, [
            C[4] || (C[4] = s("span", { class: "label" }, "Current token:", -1)),
            s("span", zk, f(e.currentTokenMask), 1),
            b(Ne, {
              variant: "danger",
              size: "sm",
              onClick: _,
              loading: c.value
            }, {
              default: h(() => [...C[3] || (C[3] = [
                $(" Clear Token ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ])) : y("", !0),
          s("div", Fk, [
            s("label", Vk, f(e.currentTokenMask ? "Replace with new token:" : "Enter token:"), 1),
            b(wt, {
              modelValue: r.value,
              "onUpdate:modelValue": C[0] || (C[0] = (S) => r.value = S),
              type: "password",
              placeholder: v.value
            }, null, 8, ["modelValue", "placeholder"]),
            s("div", Bk, [
              s("a", {
                href: p.value,
                target: "_blank",
                rel: "noopener"
              }, f(w.value), 9, Wk)
            ])
          ])
        ])
      ]),
      footer: h(() => [
        s("div", Gk, [
          b(Ne, {
            variant: "secondary",
            onClick: C[1] || (C[1] = (S) => x.$emit("close"))
          }, {
            default: h(() => [...C[5] || (C[5] = [
              $(" Cancel ", -1)
            ])]),
            _: 1
          }),
          b(Ne, {
            variant: "primary",
            disabled: !r.value.trim(),
            loading: u.value,
            onClick: g
          }, {
            default: h(() => [...C[6] || (C[6] = [
              $(" Save Token ", -1)
            ])]),
            _: 1
          }, 8, ["disabled", "loading"])
        ])
      ]),
      _: 1
    }));
  }
}), Hk = /* @__PURE__ */ Se(jk, [["__scopeId", "data-v-0687d0ce"]]), qk = { class: "huggingface-tab" }, Kk = {
  key: 0,
  class: "search-section"
}, Jk = { class: "search-header" }, Qk = { class: "search-bar" }, Yk = {
  key: 1,
  class: "search-results"
}, Xk = {
  key: 0,
  class: "loading-state"
}, Zk = {
  key: 1,
  class: "error-state"
}, eb = {
  key: 2,
  class: "results-list"
}, tb = ["onClick"], sb = { class: "repo-header" }, ob = { class: "repo-id" }, nb = { class: "repo-stats" }, ab = {
  class: "stat",
  title: "Downloads"
}, lb = {
  class: "stat",
  title: "Likes"
}, ib = {
  key: 0,
  class: "repo-desc"
}, rb = {
  key: 1,
  class: "repo-tags"
}, cb = {
  key: 3,
  class: "empty-state"
}, ub = {
  key: 4,
  class: "hint-state"
}, db = /* @__PURE__ */ be({
  __name: "HuggingFaceTab",
  emits: ["queue"],
  setup(e) {
    const { searchHuggingFaceRepos: t, getConfig: o } = vt(), n = k("search"), l = k(""), r = k([]), u = k(!1), c = k(null), d = k(!1), m = k(null), v = k("main"), p = k(), w = k(), g = k(!1), _ = k(null), x = R(() => {
      if (!c.value) return !1;
      const O = c.value.toLowerCase();
      return c.value.includes("401") || c.value.includes("403") || O.includes("authentication") || O.includes("unauthorized");
    });
    function C(O) {
      return O >= 1e6 ? `${(O / 1e6).toFixed(1)}M` : O >= 1e3 ? `${(O / 1e3).toFixed(1)}K` : String(O);
    }
    async function S() {
      const O = l.value.trim();
      if (!O) return;
      c.value = null;
      const E = sk(O);
      if (E.kind === "file" && E.repoId && E.path) {
        m.value = E.repoId, v.value = E.revision || "main";
        const K = E.path.split("/");
        K.length > 1 ? p.value = K.slice(0, -1).join("/") : p.value = void 0, w.value = E.path, n.value = "browse";
        return;
      }
      if (E.kind === "repo" && E.repoId) {
        m.value = E.repoId, v.value = E.revision || "main", p.value = E.path, w.value = void 0, n.value = "browse";
        return;
      }
      if (/^[\w-]+\/[\w.-]+$/.test(O) && !O.includes("://")) {
        m.value = O, v.value = "main", p.value = void 0, w.value = void 0, n.value = "browse";
        return;
      }
      u.value = !0;
      try {
        const K = await t(O);
        r.value = K.results, d.value = !0;
      } catch (K) {
        c.value = K instanceof Error ? K.message : "Search failed";
      } finally {
        u.value = !1;
      }
    }
    function T(O) {
      m.value = O, v.value = "main", p.value = void 0, w.value = void 0, n.value = "browse";
    }
    function M() {
      n.value = "search", m.value = null, p.value = void 0, w.value = void 0;
    }
    async function P() {
      try {
        const O = await o();
        _.value = O.huggingface_token || null;
      } catch (O) {
        console.error("Failed to load config:", O);
      }
    }
    function D() {
      P(), x.value && l.value && S();
    }
    function N() {
      _.value = null;
    }
    return rt(P), (O, E) => (a(), i("div", qk, [
      n.value === "search" ? (a(), i("div", Kk, [
        s("div", Jk, [
          s("div", Qk, [
            b(wt, {
              modelValue: l.value,
              "onUpdate:modelValue": E[0] || (E[0] = (K) => l.value = K),
              placeholder: "Search repos, paste URL, or enter user/repo...",
              onKeydown: fs(S, ["enter"])
            }, null, 8, ["modelValue"]),
            b(Ne, {
              variant: "primary",
              onClick: S,
              loading: u.value
            }, {
              default: h(() => [...E[5] || (E[5] = [
                $(" Search ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ]),
          b(Ne, {
            variant: "secondary",
            size: "sm",
            onClick: E[1] || (E[1] = (K) => g.value = !0)
          }, {
            default: h(() => [
              $(f(_.value ? `Token: ${_.value}` : "Configure Token"), 1)
            ]),
            _: 1
          })
        ])
      ])) : y("", !0),
      n.value === "search" ? (a(), i("div", Yk, [
        u.value ? (a(), i("div", Xk, " Searching HuggingFace... ")) : c.value ? (a(), i("div", Zk, [
          s("p", null, f(c.value), 1),
          x.value ? (a(), L(Ne, {
            key: 0,
            variant: "primary",
            size: "sm",
            onClick: E[2] || (E[2] = (K) => g.value = !0)
          }, {
            default: h(() => [...E[6] || (E[6] = [
              $(" Configure HuggingFace Token ", -1)
            ])]),
            _: 1
          })) : y("", !0)
        ])) : r.value.length > 0 ? (a(), i("div", eb, [
          (a(!0), i(j, null, he(r.value, (K) => (a(), i("div", {
            key: K.repo_id,
            class: "repo-card",
            onClick: (ae) => T(K.repo_id)
          }, [
            s("div", sb, [
              s("span", ob, f(K.repo_id), 1),
              s("div", nb, [
                s("span", ab, [
                  E[7] || (E[7] = s("span", { class: "stat-icon" }, "↓", -1)),
                  $(" " + f(C(K.downloads)), 1)
                ]),
                s("span", lb, [
                  E[8] || (E[8] = s("span", { class: "stat-icon" }, "★", -1)),
                  $(" " + f(C(K.likes)), 1)
                ])
              ])
            ]),
            K.description ? (a(), i("p", ib, f(K.description), 1)) : y("", !0),
            K.tags.length > 0 ? (a(), i("div", rb, [
              (a(!0), i(j, null, he(K.tags.slice(0, 5), (ae) => (a(), i("span", {
                key: ae,
                class: "tag"
              }, f(ae), 1))), 128))
            ])) : y("", !0)
          ], 8, tb))), 128))
        ])) : d.value ? (a(), i("div", cb, " No repositories found ")) : (a(), i("div", ub, " Enter a HuggingFace URL, repo ID (user/repo), or search term "))
      ])) : (a(), L(Lk, {
        key: 2,
        "repo-id": m.value,
        revision: v.value,
        "initial-path": p.value,
        "preselected-file": w.value,
        onBack: M,
        onQueue: E[3] || (E[3] = (K) => O.$emit("queue", K))
      }, null, 8, ["repo-id", "revision", "initial-path", "preselected-file"])),
      g.value ? (a(), L(Hk, {
        key: 3,
        provider: "huggingface",
        "current-token-mask": _.value,
        onClose: E[4] || (E[4] = (K) => g.value = !1),
        onSaved: D,
        onCleared: N
      }, null, 8, ["current-token-mask"])) : y("", !0)
    ]));
  }
}), fb = /* @__PURE__ */ Se(db, [["__scopeId", "data-v-e13209bf"]]), mb = { class: "civitai-tab" }, vb = /* @__PURE__ */ be({
  __name: "CivitaiTab",
  setup(e) {
    return (t, o) => (a(), i("div", mb, [...o[0] || (o[0] = [
      s("div", { class: "placeholder" }, [
        s("div", { class: "icon" }, "🎨"),
        s("h3", null, "Civitai Integration"),
        s("p", null, "Coming soon! Civitai model search and download will be available in a future update.")
      ], -1)
    ])]));
  }
}), pb = /* @__PURE__ */ Se(vb, [["__scopeId", "data-v-44948051"]]), gb = { class: "direct-url-tab" }, hb = { class: "input-group" }, yb = { class: "input-group" }, wb = {
  key: 0,
  class: "error"
}, _b = { class: "actions" }, kb = /* @__PURE__ */ be({
  __name: "DirectUrlTab",
  emits: ["queue"],
  setup(e, { emit: t }) {
    const o = t, n = k(""), l = k(""), r = R(() => {
      const d = l.value.trim();
      if (!d) return null;
      const m = d.replace(/\\/g, "/").split("/").pop() || "";
      return m.includes(".") && !m.endsWith(".") ? null : "Target path must include a filename (e.g. checkpoints/model.safetensors).";
    }), u = R(() => n.value.trim() !== "" && l.value.trim() !== "" && !r.value), c = () => {
      if (!u.value) return;
      const d = l.value.replace(/\\/g, "/").split("/").pop() || "";
      o("queue", [{
        url: n.value.trim(),
        targetPath: l.value.trim(),
        filename: d
      }]), n.value = "", l.value = "";
    };
    return (d, m) => (a(), i("div", gb, [
      s("div", hb, [
        m[2] || (m[2] = s("label", null, "Download URL", -1)),
        b(wt, {
          modelValue: n.value,
          "onUpdate:modelValue": m[0] || (m[0] = (v) => n.value = v),
          placeholder: "https://example.com/model.safetensors"
        }, null, 8, ["modelValue"])
      ]),
      s("div", yb, [
        m[3] || (m[3] = s("label", null, "Target Path (relative to models directory)", -1)),
        b(wt, {
          modelValue: l.value,
          "onUpdate:modelValue": m[1] || (m[1] = (v) => l.value = v),
          placeholder: "e.g. checkpoints/model.safetensors"
        }, null, 8, ["modelValue"]),
        r.value ? (a(), i("p", wb, f(r.value), 1)) : y("", !0)
      ]),
      m[5] || (m[5] = s("p", { class: "note" }, "Model will be queued for background download.", -1)),
      s("div", _b, [
        b(Ne, {
          variant: "primary",
          disabled: !u.value,
          onClick: c
        }, {
          default: h(() => [...m[4] || (m[4] = [
            $(" Queue Download ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ])
    ]));
  }
}), bb = /* @__PURE__ */ Se(kb, [["__scopeId", "data-v-01def7aa"]]), $b = { class: "download-modal" }, Cb = { class: "tab-bar" }, xb = ["onClick"], Sb = { class: "tab-content" }, Ib = /* @__PURE__ */ be({
  __name: "ModelDownloadModal",
  props: {
    show: { type: Boolean }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const o = t, { addToQueue: n } = Ro(), l = [
      { id: "huggingface", label: "HuggingFace", icon: "🤗" },
      { id: "civitai", label: "Civitai", icon: "🎨" },
      { id: "direct", label: "Direct URL", icon: "🔗" }
    ], r = k("huggingface");
    function u(m) {
      n(m.map((v) => ({
        workflow: "__manual__",
        filename: v.filename,
        url: v.url,
        targetPath: v.destination ? `${v.destination}/${v.filename}` : v.filename
      }))), o("close");
    }
    function c(m) {
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
    return (m, v) => e.show ? (a(), L(It, {
      key: 0,
      title: "DOWNLOAD NEW MODEL",
      size: "xl",
      "fixed-height": "",
      onClose: d
    }, {
      body: h(() => [
        s("div", $b, [
          s("div", Cb, [
            (a(), i(j, null, he(l, (p) => s("button", {
              key: p.id,
              class: Fe(["tab-btn", { active: r.value === p.id }]),
              onClick: (w) => r.value = p.id
            }, f(p.icon) + " " + f(p.label), 11, xb)), 64))
          ]),
          s("div", Sb, [
            r.value === "huggingface" ? (a(), L(fb, {
              key: 0,
              onQueue: u
            })) : r.value === "civitai" ? (a(), L(pb, { key: 1 })) : r.value === "direct" ? (a(), L(bb, {
              key: 2,
              onQueue: c
            })) : y("", !0)
          ])
        ])
      ]),
      footer: h(() => [
        b(Ne, {
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
}), tc = /* @__PURE__ */ Se(Ib, [["__scopeId", "data-v-90a9f401"]]), Eb = /* @__PURE__ */ be({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(e, { emit: t }) {
    const o = t, { getEnvironmentModels: n, getStatus: l } = vt(), r = k([]), u = k([]), c = k("production"), d = k(!1), m = k(null), v = k(""), p = k(!1), w = k(null), g = k(!1);
    function _() {
      p.value = !1, o("navigate", "model-index");
    }
    const x = R(
      () => r.value.reduce((E, K) => E + (K.size || 0), 0)
    ), C = R(() => {
      if (!v.value.trim()) return r.value;
      const E = v.value.toLowerCase();
      return r.value.filter((K) => K.filename.toLowerCase().includes(E));
    }), S = R(() => {
      if (!v.value.trim()) return u.value;
      const E = v.value.toLowerCase();
      return u.value.filter((K) => K.filename.toLowerCase().includes(E));
    }), T = R(() => {
      const E = {};
      for (const ae of C.value) {
        const fe = ae.type || "other";
        E[fe] || (E[fe] = []), E[fe].push(ae);
      }
      const K = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(E).sort(([ae], [fe]) => {
        const ue = K.indexOf(ae), we = K.indexOf(fe);
        return ue >= 0 && we >= 0 ? ue - we : ue >= 0 ? -1 : we >= 0 ? 1 : ae.localeCompare(fe);
      }).map(([ae, fe]) => ({ type: ae, models: fe }));
    });
    function M(E) {
      if (!E) return "Unknown";
      const K = E / (1024 * 1024);
      return K >= 1024 ? `${(K / 1024).toFixed(1)} GB` : `${K.toFixed(0)} MB`;
    }
    function P(E) {
      w.value = E.hash || E.filename;
    }
    function D(E) {
      o("navigate", "model-index");
    }
    function N(E) {
      alert(`Download functionality not yet implemented for ${E}`);
    }
    async function O() {
      d.value = !0, m.value = null;
      try {
        const E = await n();
        r.value = E, u.value = [];
        const K = await l();
        c.value = K.environment || "production";
      } catch (E) {
        m.value = E instanceof Error ? E.message : "Failed to load models";
      } finally {
        d.value = !1;
      }
    }
    return rt(O), (E, K) => (a(), i(j, null, [
      b(At, null, {
        header: h(() => [
          b(zt, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: K[1] || (K[1] = (ae) => p.value = !0)
          }, {
            actions: h(() => [
              b(Te, {
                variant: "primary",
                size: "sm",
                onClick: K[0] || (K[0] = (ae) => g.value = !0)
              }, {
                default: h(() => [...K[6] || (K[6] = [
                  s("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    s("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                    s("path", { d: "M14 14H2v-2h12v2z" })
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
          b(io, {
            modelValue: v.value,
            "onUpdate:modelValue": K[2] || (K[2] = (ae) => v.value = ae),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          d.value ? (a(), L(xs, {
            key: 0,
            message: "Loading environment models..."
          })) : m.value ? (a(), L(Ss, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: O
          }, null, 8, ["message"])) : (a(), i(j, { key: 2 }, [
            r.value.length ? (a(), L(ia, {
              key: 0,
              variant: "compact"
            }, {
              default: h(() => [
                $(" Total: " + f(r.value.length) + " models • " + f(M(x.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : y("", !0),
            (a(!0), i(j, null, he(T.value, (ae) => (a(), L(St, {
              key: ae.type,
              title: ae.type.toUpperCase(),
              count: ae.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: h(() => [
                (a(!0), i(j, null, he(ae.models, (fe) => (a(), L(Vt, {
                  key: fe.hash || fe.filename,
                  status: "synced"
                }, {
                  icon: h(() => [...K[7] || (K[7] = [
                    $("📦", -1)
                  ])]),
                  title: h(() => [
                    $(f(fe.filename), 1)
                  ]),
                  subtitle: h(() => [
                    $(f(M(fe.size)), 1)
                  ]),
                  details: h(() => [
                    b(_t, {
                      label: "Used by:",
                      value: (fe.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    b(_t, {
                      label: "Path:",
                      value: fe.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (ue) => P(fe)
                    }, {
                      default: h(() => [...K[8] || (K[8] = [
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
            S.value.length ? (a(), L(St, {
              key: 1,
              title: "MISSING",
              count: S.value.length
            }, {
              default: h(() => [
                (a(!0), i(j, null, he(S.value, (ae) => (a(), L(Vt, {
                  key: ae.filename,
                  status: "broken"
                }, {
                  icon: h(() => [...K[9] || (K[9] = [
                    $("⚠", -1)
                  ])]),
                  title: h(() => [
                    $(f(ae.filename), 1)
                  ]),
                  subtitle: h(() => [...K[10] || (K[10] = [
                    s("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: h(() => {
                    var fe;
                    return [
                      b(_t, {
                        label: "Required by:",
                        value: ((fe = ae.workflow_names) == null ? void 0 : fe.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: h(() => [
                    b(Te, {
                      variant: "primary",
                      size: "sm",
                      onClick: (fe) => N(ae.filename)
                    }, {
                      default: h(() => [...K[11] || (K[11] = [
                        $(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (fe) => D(ae.filename)
                    }, {
                      default: h(() => [...K[12] || (K[12] = [
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
            !C.value.length && !S.value.length ? (a(), L(cs, {
              key: 2,
              icon: "📭",
              message: v.value ? `No models match '${v.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : y("", !0)
          ], 64))
        ]),
        _: 1
      }),
      b(ts, {
        show: p.value,
        title: "About Environment Models",
        onClose: K[3] || (K[3] = (ae) => p.value = !1)
      }, {
        content: h(() => [
          s("p", null, [
            K[13] || (K[13] = $(" These are models currently used by workflows in ", -1)),
            s("strong", null, '"' + f(c.value) + '"', 1),
            K[14] || (K[14] = $(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: h(() => [
          b(Te, {
            variant: "primary",
            onClick: _
          }, {
            default: h(() => [...K[15] || (K[15] = [
              $(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w.value ? (a(), L(Il, {
        key: 0,
        identifier: w.value,
        onClose: K[4] || (K[4] = (ae) => w.value = null)
      }, null, 8, ["identifier"])) : y("", !0),
      b(tc, {
        show: g.value,
        onClose: K[5] || (K[5] = (ae) => g.value = !1)
      }, null, 8, ["show"])
    ], 64));
  }
}), Tb = /* @__PURE__ */ Se(Eb, [["__scopeId", "data-v-af3ca736"]]), Mb = {
  key: 0,
  class: "indexing-progress"
}, Pb = { class: "progress-info" }, Rb = { class: "progress-label" }, Lb = { class: "progress-count" }, Nb = { class: "progress-bar" }, Db = { class: "modal-content" }, Ob = { class: "modal-header" }, Ub = { class: "modal-body" }, Ab = { class: "input-group" }, zb = { class: "current-path" }, Fb = { class: "input-group" }, Vb = { class: "modal-footer" }, Bb = /* @__PURE__ */ be({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(e, { emit: t }) {
    const {
      getWorkspaceModels: o,
      scanWorkspaceModels: n,
      getModelsDirectory: l,
      setModelsDirectory: r
    } = vt(), u = t, c = k([]), d = k(!1), m = k(!1), v = k(null), p = k(""), w = k(!1), g = k(null), _ = k(!1), x = k(null), C = k(""), S = k(!1), T = k(!1), M = k(null), P = R(
      () => c.value.reduce((we, X) => we + (X.size || 0), 0)
    ), D = R(() => {
      if (!p.value.trim()) return c.value;
      const we = p.value.toLowerCase();
      return c.value.filter((X) => {
        const G = X, Y = X.sha256 || G.sha256_hash || "";
        return X.filename.toLowerCase().includes(we) || Y.toLowerCase().includes(we);
      });
    }), N = R(() => {
      const we = {};
      for (const G of D.value) {
        const Y = G.type || "other";
        we[Y] || (we[Y] = []), we[Y].push(G);
      }
      const X = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(we).sort(([G], [Y]) => {
        const Re = X.indexOf(G), se = X.indexOf(Y);
        return Re >= 0 && se >= 0 ? Re - se : Re >= 0 ? -1 : se >= 0 ? 1 : G.localeCompare(Y);
      }).map(([G, Y]) => ({ type: G, models: Y }));
    });
    function O(we) {
      if (!we) return "Unknown";
      const X = 1024 * 1024 * 1024, G = 1024 * 1024;
      return we >= X ? `${(we / X).toFixed(1)} GB` : we >= G ? `${(we / G).toFixed(0)} MB` : `${(we / 1024).toFixed(0)} KB`;
    }
    function E(we) {
      g.value = we.hash || we.filename;
    }
    async function K() {
      m.value = !0, v.value = null;
      try {
        const we = await n();
        await fe(), we.changes > 0 && console.log(`Scan complete: ${we.changes} changes detected`);
      } catch (we) {
        v.value = we instanceof Error ? we.message : "Failed to scan models";
      } finally {
        m.value = !1;
      }
    }
    async function ae() {
      if (C.value.trim()) {
        S.value = !0, v.value = null;
        try {
          const we = await r(C.value.trim());
          x.value = we.path, _.value = !1, C.value = "", await fe(), console.log(`Directory changed: ${we.models_indexed} models indexed`), u("refresh");
        } catch (we) {
          v.value = we instanceof Error ? we.message : "Failed to change directory";
        } finally {
          S.value = !1;
        }
      }
    }
    async function fe() {
      d.value = !0, v.value = null;
      try {
        c.value = await o();
      } catch (we) {
        v.value = we instanceof Error ? we.message : "Failed to load workspace models";
      } finally {
        d.value = !1;
      }
    }
    async function ue() {
      try {
        const we = await l();
        x.value = we.path;
      } catch {
      }
    }
    return rt(() => {
      fe(), ue();
    }), (we, X) => (a(), i(j, null, [
      b(At, null, {
        header: h(() => [
          b(zt, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: X[2] || (X[2] = (G) => w.value = !0)
          }, {
            actions: h(() => [
              b(Te, {
                variant: "primary",
                size: "sm",
                disabled: m.value,
                onClick: K
              }, {
                default: h(() => [
                  $(f(m.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              b(Te, {
                variant: "primary",
                size: "sm",
                onClick: X[0] || (X[0] = (G) => _.value = !0)
              }, {
                default: h(() => [...X[11] || (X[11] = [
                  $(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              b(Te, {
                variant: "primary",
                size: "sm",
                onClick: X[1] || (X[1] = (G) => T.value = !0)
              }, {
                default: h(() => [...X[12] || (X[12] = [
                  s("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    s("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                    s("path", { d: "M14 14H2v-2h12v2z" })
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
          M.value ? (a(), i("div", Mb, [
            s("div", Pb, [
              s("span", Rb, f(M.value.message), 1),
              s("span", Lb, f(M.value.current) + "/" + f(M.value.total), 1)
            ]),
            s("div", Nb, [
              s("div", {
                class: "progress-fill",
                style: Rt({ width: `${M.value.current / M.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : y("", !0),
          b(io, {
            modelValue: p.value,
            "onUpdate:modelValue": X[3] || (X[3] = (G) => p.value = G),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          d.value || M.value ? (a(), L(xs, {
            key: 0,
            message: M.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : v.value ? (a(), L(Ss, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: fe
          }, null, 8, ["message"])) : (a(), i(j, { key: 2 }, [
            c.value.length ? (a(), L(ia, {
              key: 0,
              variant: "compact"
            }, {
              default: h(() => [
                $(" Total: " + f(c.value.length) + " models • " + f(O(P.value)), 1)
              ]),
              _: 1
            })) : y("", !0),
            (a(!0), i(j, null, he(N.value, (G) => (a(), L(St, {
              key: G.type,
              title: G.type.toUpperCase(),
              count: G.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: h(() => [
                (a(!0), i(j, null, he(G.models, (Y) => (a(), L(Vt, {
                  key: Y.sha256 || Y.filename,
                  status: "synced"
                }, {
                  icon: h(() => [...X[13] || (X[13] = [
                    $("📦", -1)
                  ])]),
                  title: h(() => [
                    $(f(Y.filename), 1)
                  ]),
                  subtitle: h(() => [
                    $(f(O(Y.size)), 1)
                  ]),
                  details: h(() => [
                    b(_t, {
                      label: "Hash:",
                      value: Y.hash ? Y.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Re) => E(Y)
                    }, {
                      default: h(() => [...X[14] || (X[14] = [
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
            D.value.length ? y("", !0) : (a(), L(cs, {
              key: 1,
              icon: "📭",
              message: p.value ? `No models match '${p.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      b(ts, {
        show: w.value,
        title: "About Workspace Model Index",
        onClose: X[4] || (X[4] = (G) => w.value = !1)
      }, {
        content: h(() => [...X[15] || (X[15] = [
          s("p", null, [
            $(" Content-addressable model storage shared across "),
            s("strong", null, "all environments"),
            $(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      g.value ? (a(), L(Il, {
        key: 0,
        identifier: g.value,
        onClose: X[5] || (X[5] = (G) => g.value = null)
      }, null, 8, ["identifier"])) : y("", !0),
      (a(), L(Lt, { to: "body" }, [
        _.value ? (a(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: X[9] || (X[9] = mt((G) => _.value = !1, ["self"]))
        }, [
          s("div", Db, [
            s("div", Ob, [
              X[16] || (X[16] = s("h3", null, "Change Models Directory", -1)),
              s("button", {
                class: "modal-close",
                onClick: X[6] || (X[6] = (G) => _.value = !1)
              }, "✕")
            ]),
            s("div", Ub, [
              s("div", Ab, [
                X[17] || (X[17] = s("label", null, "Current Directory", -1)),
                s("code", zb, f(x.value || "Not set"), 1)
              ]),
              s("div", Fb, [
                X[18] || (X[18] = s("label", null, "New Directory Path", -1)),
                b(wt, {
                  modelValue: C.value,
                  "onUpdate:modelValue": X[7] || (X[7] = (G) => C.value = G),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              X[19] || (X[19] = s("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            s("div", Vb, [
              b(Ne, {
                variant: "secondary",
                onClick: X[8] || (X[8] = (G) => _.value = !1)
              }, {
                default: h(() => [...X[20] || (X[20] = [
                  $(" Cancel ", -1)
                ])]),
                _: 1
              }),
              b(Ne, {
                variant: "primary",
                disabled: !C.value.trim() || S.value,
                loading: S.value,
                onClick: ae
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
      b(tc, {
        show: T.value,
        onClose: X[10] || (X[10] = (G) => T.value = !1)
      }, null, 8, ["show"])
    ], 64));
  }
}), Wb = /* @__PURE__ */ Se(Bb, [["__scopeId", "data-v-3705114c"]]), Gb = { class: "node-details" }, jb = { class: "status-row" }, Hb = {
  key: 0,
  class: "detail-row"
}, qb = { class: "value" }, Kb = { class: "detail-row" }, Jb = { class: "value" }, Qb = {
  key: 1,
  class: "detail-row"
}, Yb = { class: "value mono" }, Xb = {
  key: 2,
  class: "detail-row"
}, Zb = ["href"], e2 = {
  key: 3,
  class: "detail-row"
}, t2 = { class: "value mono small" }, s2 = { class: "detail-row" }, o2 = {
  key: 0,
  class: "value"
}, n2 = {
  key: 1,
  class: "workflow-list"
}, a2 = /* @__PURE__ */ be({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const o = e, n = t, l = R(() => o.node.installed ? o.node.tracked ? o.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), r = R(() => o.node.installed ? o.node.tracked ? o.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), u = R(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[o.node.source] || o.node.source);
    return (c, d) => (a(), L(It, {
      title: `NODE DETAILS: ${e.node.name}`,
      size: "md",
      onClose: d[1] || (d[1] = (m) => n("close"))
    }, {
      body: h(() => [
        s("div", Gb, [
          s("div", jb, [
            d[2] || (d[2] = s("span", { class: "label" }, "Status:", -1)),
            s("span", {
              class: Fe(["status-badge", l.value])
            }, f(r.value), 3)
          ]),
          e.node.version ? (a(), i("div", Hb, [
            d[3] || (d[3] = s("span", { class: "label" }, "Version:", -1)),
            s("span", qb, f(e.node.source === "development" ? "" : "v") + f(e.node.version), 1)
          ])) : y("", !0),
          s("div", Kb, [
            d[4] || (d[4] = s("span", { class: "label" }, "Source:", -1)),
            s("span", Jb, f(u.value), 1)
          ]),
          e.node.registry_id ? (a(), i("div", Qb, [
            d[5] || (d[5] = s("span", { class: "label" }, "Registry ID:", -1)),
            s("span", Yb, f(e.node.registry_id), 1)
          ])) : y("", !0),
          e.node.repository ? (a(), i("div", Xb, [
            d[7] || (d[7] = s("span", { class: "label" }, "Repository:", -1)),
            s("a", {
              href: e.node.repository,
              target: "_blank",
              rel: "noopener noreferrer",
              class: "repo-link"
            }, [
              $(f(e.node.repository) + " ", 1),
              d[6] || (d[6] = s("svg", {
                class: "external-icon",
                width: "12",
                height: "12",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                s("path", { d: "M3.75 2A1.75 1.75 0 0 0 2 3.75v8.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0 0 14 12.25v-3.5a.75.75 0 0 0-1.5 0v3.5a.25.25 0 0 1-.25.25h-8.5a.25.25 0 0 1-.25-.25v-8.5a.25.25 0 0 1 .25-.25h3.5a.75.75 0 0 0 0-1.5h-3.5z" }),
                s("path", { d: "M10 1a.75.75 0 0 0 0 1.5h2.44L7.22 7.72a.75.75 0 1 0 1.06 1.06l5.22-5.22V6a.75.75 0 0 0 1.5 0V1.75a.75.75 0 0 0-.75-.75H10z" })
              ], -1))
            ], 8, Zb)
          ])) : y("", !0),
          e.node.download_url ? (a(), i("div", e2, [
            d[8] || (d[8] = s("span", { class: "label" }, "Download URL:", -1)),
            s("span", t2, f(e.node.download_url), 1)
          ])) : y("", !0),
          d[10] || (d[10] = s("div", { class: "section-divider" }, null, -1)),
          s("div", s2, [
            d[9] || (d[9] = s("span", { class: "label" }, "Used by:", -1)),
            !e.node.used_in_workflows || e.node.used_in_workflows.length === 0 ? (a(), i("span", o2, " Not used in any workflows ")) : (a(), i("div", n2, [
              (a(!0), i(j, null, he(e.node.used_in_workflows, (m) => (a(), i("span", {
                key: m,
                class: "workflow-tag"
              }, f(m), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: h(() => [
        b(Ne, {
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
}), l2 = /* @__PURE__ */ Se(a2, [["__scopeId", "data-v-b342f626"]]), i2 = { class: "dialog-message" }, r2 = {
  key: 0,
  class: "dialog-details"
}, c2 = {
  key: 1,
  class: "dialog-warning"
}, u2 = /* @__PURE__ */ be({
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
    return (t, o) => (a(), L(It, {
      title: e.title,
      size: "sm",
      onClose: o[3] || (o[3] = (n) => t.$emit("cancel"))
    }, {
      body: h(() => [
        s("p", i2, f(e.message), 1),
        e.details && e.details.length ? (a(), i("div", r2, [
          (a(!0), i(j, null, he(e.details, (n, l) => (a(), i("div", {
            key: l,
            class: "detail-item"
          }, " • " + f(n), 1))), 128))
        ])) : y("", !0),
        e.warning ? (a(), i("p", c2, [
          o[4] || (o[4] = s("span", { class: "warning-icon" }, "⚠", -1)),
          $(" " + f(e.warning), 1)
        ])) : y("", !0)
      ]),
      footer: h(() => [
        b(Ne, {
          variant: "secondary",
          onClick: o[0] || (o[0] = (n) => t.$emit("cancel"))
        }, {
          default: h(() => [
            $(f(e.cancelLabel), 1)
          ]),
          _: 1
        }),
        e.secondaryAction ? (a(), L(Ne, {
          key: 0,
          variant: "secondary",
          onClick: o[1] || (o[1] = (n) => t.$emit("secondary"))
        }, {
          default: h(() => [
            $(f(e.secondaryLabel), 1)
          ]),
          _: 1
        })) : y("", !0),
        b(Ne, {
          variant: e.destructive ? "danger" : "primary",
          onClick: o[2] || (o[2] = (n) => t.$emit("confirm"))
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
}), El = /* @__PURE__ */ Se(u2, [["__scopeId", "data-v-3670b9f5"]]), d2 = { class: "mismatch-warning" }, f2 = { class: "version-mismatch" }, m2 = { class: "version-actual" }, v2 = { class: "version-expected" }, p2 = { style: { color: "var(--cg-color-warning)" } }, g2 = { style: { color: "var(--cg-color-warning)" } }, h2 = {
  key: 0,
  class: "community-status-badge"
}, y2 = { key: 0 }, w2 = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, _2 = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, k2 = { class: "criticality-control" }, b2 = ["value", "disabled", "onChange"], $2 = /* @__PURE__ */ be({
  __name: "NodesSection",
  props: {
    versionMismatches: { default: () => [] }
  },
  emits: ["open-node-manager", "repair-environment", "toast"],
  setup(e, { emit: t }) {
    const o = e, n = t, {
      getNodes: l,
      trackNodeAsDev: r,
      installNode: u,
      uninstallNode: c,
      queueNodeInstall: d,
      updateNodeCriticality: m
    } = vt(), v = k({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0,
      blocked_count: 0
    }), p = k(!1), w = k(null), g = k(""), _ = k(!1), x = k(null), C = k(/* @__PURE__ */ new Set()), S = k(/* @__PURE__ */ new Set()), T = k(null), M = R(() => {
      if (!g.value.trim()) return v.value.nodes;
      const ce = g.value.toLowerCase();
      return v.value.nodes.filter(
        (le) => {
          var I, V;
          return le.name.toLowerCase().includes(ce) || ((I = le.description) == null ? void 0 : I.toLowerCase().includes(ce)) || ((V = le.repository) == null ? void 0 : V.toLowerCase().includes(ce));
        }
      );
    }), P = R(
      () => M.value.filter((ce) => ce.installed && ce.tracked)
    ), D = R(
      () => M.value.filter((ce) => !ce.installed && ce.tracked && !ce.issue_type)
    ), N = R(
      () => M.value.filter((ce) => ce.installed && !ce.tracked)
    ), O = R(
      () => M.value.filter((ce) => ce.issue_type === "version_gated")
    ), E = R(
      () => M.value.filter((ce) => ce.issue_type === "uninstallable")
    );
    function K(ce) {
      return ce.registry_id || ce.name;
    }
    function ae(ce) {
      return C.value.has(K(ce));
    }
    async function fe(ce, le) {
      const I = ce.registry_id;
      if (!I) {
        n("toast", `Node "${ce.name}" has no package id for install`, "warning");
        return;
      }
      if (le === "git" && !ce.repository) {
        n("toast", `Node "${ce.name}" has no repository URL for git install`, "warning");
        return;
      }
      const V = {
        id: I,
        version: "latest",
        selected_version: "latest",
        mode: "remote",
        channel: "default"
      };
      le === "git" && ce.repository && (V.repository = ce.repository, V.install_source = "git"), await d(V), C.value.add(K(ce)), n("toast", `✓ Queued install for "${ce.name}"`, "success");
    }
    function ue(ce) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[ce] || ce;
    }
    const we = R(() => o.versionMismatches.length > 0);
    function X(ce) {
      return !ce.used_in_workflows || ce.used_in_workflows.length === 0 ? "Not used in any workflows" : ce.used_in_workflows.length === 1 ? ce.used_in_workflows[0] : `${ce.used_in_workflows.length} workflows`;
    }
    function G(ce) {
      return ce.criticality === "optional" ? "optional" : "required";
    }
    function Y(ce) {
      return S.value.has(ce.name);
    }
    async function Re(ce, le) {
      const I = le.target, V = G(ce), ie = I.value;
      if (ie !== V) {
        S.value = new Set(S.value).add(ce.name), ce.criticality = ie;
        try {
          const Ce = await m(ce.name, ie);
          if (Ce.status !== "success") {
            ce.criticality = V, n("toast", Ce.message || `Failed to update "${ce.name}" criticality`, "error");
            return;
          }
          n("toast", `Marked "${ce.name}" as ${ie}`, "success");
        } catch (Ce) {
          ce.criticality = V, I.value = V, n("toast", `Error updating criticality: ${Ce instanceof Error ? Ce.message : "Unknown error"}`, "error");
        } finally {
          const Ce = new Set(S.value);
          Ce.delete(ce.name), S.value = Ce;
        }
      }
    }
    function se(ce) {
      return ce.issue_type === "version_gated" ? "Requires newer ComfyUI version" : "Blocked";
    }
    function ge(ce) {
      return ce.issue_type === "version_gated" ? "Upgrade ComfyUI to a version that includes this builtin node." : "Manual intervention required.";
    }
    function z(ce) {
      return ce.registry_id ? `Community-mapped package: ${ce.registry_id}` : "Community-mapped package";
    }
    function me(ce) {
      return "Found via community mapping. Install from registry by default, or use git when needed.";
    }
    function Pe(ce) {
      x.value = ce;
    }
    function We() {
      n("open-node-manager");
    }
    function Ee(ce) {
      T.value = {
        title: "Track as Development Node",
        message: `Track "${ce}" as a development node? This will add it to your environment manifest with source='development'.`,
        warning: "Development nodes are tracked locally but not version-controlled.",
        confirmLabel: "Track as Dev",
        destructive: !1,
        onConfirm: async () => {
          T.value = null;
          try {
            p.value = !0;
            const le = await r(ce);
            le.status === "success" ? (n("toast", `✓ Node "${ce}" tracked as development`, "success"), await xe()) : n("toast", `Failed to track node: ${le.message || "Unknown error"}`, "error");
          } catch (le) {
            n("toast", `Error tracking node: ${le instanceof Error ? le.message : "Unknown error"}`, "error");
          } finally {
            p.value = !1;
          }
        }
      };
    }
    function H(ce) {
      T.value = {
        title: "Remove Untracked Node",
        message: `Remove "${ce}" from custom_nodes/?`,
        warning: "This will permanently delete the node directory.",
        confirmLabel: "Remove",
        destructive: !0,
        onConfirm: async () => {
          T.value = null;
          try {
            p.value = !0;
            const le = await c(ce);
            le.status === "success" ? (n("toast", `✓ Node "${ce}" removed`, "success"), await xe()) : n("toast", `Failed to remove node: ${le.message || "Unknown error"}`, "error");
          } catch (le) {
            n("toast", `Error removing node: ${le instanceof Error ? le.message : "Unknown error"}`, "error");
          } finally {
            p.value = !1;
          }
        }
      };
    }
    function ee(ce) {
      T.value = {
        title: "Install Missing Node",
        message: `Install "${ce}"?`,
        warning: "This will download and install the node from the registry.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          T.value = null;
          try {
            p.value = !0;
            const le = await u(ce);
            le.status === "success" ? (n("toast", `✓ Node "${ce}" installed`, "success"), await xe()) : n("toast", `Failed to install node: ${le.message || "Unknown error"}`, "error");
          } catch (le) {
            n("toast", `Error installing node: ${le instanceof Error ? le.message : "Unknown error"}`, "error");
          } finally {
            p.value = !1;
          }
        }
      };
    }
    function q(ce) {
      T.value = {
        title: "Install Community-Mapped Package",
        message: `Install "${ce.name}" from the registry?`,
        warning: "This will queue a registry install through the manager queue.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          T.value = null;
          try {
            p.value = !0, await fe(ce, "registry");
          } catch (le) {
            n("toast", `Error queueing install: ${le instanceof Error ? le.message : "Unknown error"}`, "error");
          } finally {
            p.value = !1;
          }
        }
      };
    }
    function Z(ce) {
      T.value = {
        title: "Install Community-Mapped Package via Git",
        message: `Install "${ce.name}" from git?`,
        warning: "Use git install only when you explicitly need the repository source.",
        confirmLabel: "Install via Git",
        destructive: !1,
        onConfirm: async () => {
          T.value = null;
          try {
            p.value = !0, await fe(ce, "git");
          } catch (le) {
            n("toast", `Error queueing git install: ${le instanceof Error ? le.message : "Unknown error"}`, "error");
          } finally {
            p.value = !1;
          }
        }
      };
    }
    async function xe() {
      p.value = !0, w.value = null;
      try {
        v.value = await l();
      } catch (ce) {
        w.value = ce instanceof Error ? ce.message : "Failed to load nodes";
      } finally {
        p.value = !1;
      }
    }
    return rt(xe), (ce, le) => (a(), i(j, null, [
      b(At, null, {
        header: h(() => [
          b(zt, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: le[0] || (le[0] = (I) => _.value = !0)
          }, {
            actions: h(() => [
              b(Te, {
                variant: "primary",
                size: "sm",
                onClick: We
              }, {
                default: h(() => [...le[7] || (le[7] = [
                  $(" Browse Nodes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          b(io, {
            modelValue: g.value,
            "onUpdate:modelValue": le[1] || (le[1] = (I) => g.value = I),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          p.value ? (a(), L(xs, {
            key: 0,
            message: "Loading nodes..."
          })) : w.value ? (a(), L(Ss, {
            key: 1,
            message: w.value,
            retry: !0,
            onRetry: xe
          }, null, 8, ["message"])) : (a(), i(j, { key: 2 }, [
            we.value ? (a(), L(St, {
              key: 0,
              title: "VERSION MISMATCHES",
              count: e.versionMismatches.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                s("div", d2, [
                  le[8] || (le[8] = s("span", { class: "warning-icon" }, "⚠", -1)),
                  s("span", null, f(e.versionMismatches.length) + " node(s) have wrong versions. Environment needs repair.", 1)
                ]),
                (a(!0), i(j, null, he(e.versionMismatches, (I) => (a(), L(Vt, {
                  key: I.name,
                  status: "warning"
                }, {
                  icon: h(() => [...le[9] || (le[9] = [
                    $("⚠", -1)
                  ])]),
                  title: h(() => [
                    $(f(I.name), 1)
                  ]),
                  subtitle: h(() => [
                    s("span", f2, [
                      s("span", m2, f(I.actual), 1),
                      le[10] || (le[10] = s("span", { class: "version-arrow" }, "→", -1)),
                      s("span", v2, f(I.expected), 1)
                    ])
                  ]),
                  actions: h(() => [
                    b(Te, {
                      variant: "warning",
                      size: "sm",
                      onClick: le[2] || (le[2] = (V) => n("repair-environment"))
                    }, {
                      default: h(() => [...le[11] || (le[11] = [
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
            O.value.length ? (a(), L(St, {
              key: 1,
              title: "BLOCKED",
              count: O.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (a(!0), i(j, null, he(O.value, (I) => (a(), L(Vt, {
                  key: `blocked-${I.name}`,
                  status: "warning"
                }, {
                  icon: h(() => [...le[12] || (le[12] = [
                    $("⛔", -1)
                  ])]),
                  title: h(() => [
                    $(f(I.name), 1)
                  ]),
                  subtitle: h(() => [
                    s("span", p2, f(se(I)), 1)
                  ]),
                  details: h(() => [
                    b(_t, {
                      label: "Guidance:",
                      value: I.issue_guidance || ge(I)
                    }, null, 8, ["value"]),
                    b(_t, {
                      label: "Used by:",
                      value: X(I)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (V) => Pe(I)
                    }, {
                      default: h(() => [...le[13] || (le[13] = [
                        $(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            E.value.length ? (a(), L(St, {
              key: 2,
              title: "COMMUNITY-MAPPED",
              count: E.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (a(!0), i(j, null, he(E.value, (I) => (a(), L(Vt, {
                  key: `community-${I.name}`,
                  status: "warning"
                }, {
                  icon: h(() => [...le[14] || (le[14] = [
                    $("⚠", -1)
                  ])]),
                  title: h(() => [
                    $(f(I.name), 1)
                  ]),
                  subtitle: h(() => [
                    s("span", g2, f(z(I)), 1)
                  ]),
                  details: h(() => [
                    b(_t, {
                      label: "Guidance:",
                      value: I.issue_guidance || me(I)
                    }, null, 8, ["value"]),
                    b(_t, {
                      label: "Used by:",
                      value: X(I)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (V) => Pe(I)
                    }, {
                      default: h(() => [...le[15] || (le[15] = [
                        $(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    ae(I) ? (a(), i("span", h2, "Queued")) : (a(), i(j, { key: 1 }, [
                      I.registry_id ? (a(), L(Te, {
                        key: 0,
                        variant: "primary",
                        size: "sm",
                        onClick: (V) => q(I)
                      }, {
                        default: h(() => [...le[16] || (le[16] = [
                          $(" Install ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : y("", !0),
                      I.repository ? (a(), L(Te, {
                        key: 1,
                        variant: "secondary",
                        size: "sm",
                        onClick: (V) => Z(I)
                      }, {
                        default: h(() => [...le[17] || (le[17] = [
                          $(" Install via Git ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : y("", !0)
                    ], 64))
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            N.value.length ? (a(), L(St, {
              key: 3,
              title: "UNTRACKED",
              count: N.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (a(!0), i(j, null, he(N.value, (I) => (a(), L(Vt, {
                  key: I.name,
                  status: "warning"
                }, {
                  icon: h(() => [...le[18] || (le[18] = [
                    $("?", -1)
                  ])]),
                  title: h(() => [
                    $(f(I.name), 1)
                  ]),
                  subtitle: h(() => [...le[19] || (le[19] = [
                    s("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: h(() => [
                    b(_t, {
                      label: "Used by:",
                      value: X(I)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (V) => Pe(I)
                    }, {
                      default: h(() => [...le[20] || (le[20] = [
                        $(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Te, {
                      variant: "primary",
                      size: "sm",
                      onClick: (V) => Ee(I.name)
                    }, {
                      default: h(() => [...le[21] || (le[21] = [
                        $(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Te, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (V) => H(I.name)
                    }, {
                      default: h(() => [...le[22] || (le[22] = [
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
            P.value.length ? (a(), L(St, {
              key: 4,
              title: "INSTALLED",
              count: P.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (a(!0), i(j, null, he(P.value, (I) => (a(), L(Vt, {
                  key: I.name,
                  status: "synced"
                }, {
                  icon: h(() => [
                    $(f(I.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: h(() => [
                    $(f(I.name), 1)
                  ]),
                  subtitle: h(() => [
                    I.version ? (a(), i("span", y2, f(I.source === "development" ? "" : "v") + f(I.version), 1)) : (a(), i("span", w2, "version unknown")),
                    s("span", _2, " • " + f(ue(I.source)), 1)
                  ]),
                  details: h(() => [
                    b(_t, {
                      label: "Used by:",
                      value: X(I)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (V) => Pe(I)
                    }, {
                      default: h(() => [...le[23] || (le[23] = [
                        $(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    s("label", k2, [
                      le[25] || (le[25] = s("span", null, "Readiness", -1)),
                      s("select", {
                        class: "criticality-select",
                        value: G(I),
                        disabled: Y(I),
                        onChange: (V) => Re(I, V)
                      }, [...le[24] || (le[24] = [
                        s("option", { value: "required" }, "Required", -1),
                        s("option", { value: "optional" }, "Optional", -1)
                      ])], 40, b2)
                    ])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            D.value.length ? (a(), L(St, {
              key: 5,
              title: "MISSING",
              count: D.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (a(!0), i(j, null, he(D.value, (I) => (a(), L(Vt, {
                  key: I.name,
                  status: "missing"
                }, {
                  icon: h(() => [...le[26] || (le[26] = [
                    $("!", -1)
                  ])]),
                  title: h(() => [
                    $(f(I.name), 1)
                  ]),
                  subtitle: h(() => [...le[27] || (le[27] = [
                    s("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: h(() => [
                    b(_t, {
                      label: "Required by:",
                      value: X(I)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (V) => Pe(I)
                    }, {
                      default: h(() => [...le[28] || (le[28] = [
                        $(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Te, {
                      variant: "primary",
                      size: "sm",
                      onClick: (V) => ee(I.name)
                    }, {
                      default: h(() => [...le[29] || (le[29] = [
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
            !P.value.length && !D.value.length && !O.value.length && !E.value.length && !N.value.length ? (a(), L(cs, {
              key: 6,
              icon: "📭",
              message: g.value ? `No nodes match '${g.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : y("", !0)
          ], 64))
        ]),
        _: 1
      }),
      b(ts, {
        show: _.value,
        title: "About Custom Nodes",
        onClose: le[4] || (le[4] = (I) => _.value = !1)
      }, {
        content: h(() => [...le[30] || (le[30] = [
          s("p", null, " Custom nodes extend ComfyUI's capabilities. ComfyGit tracks nodes in your environment manifest for reproducibility. ", -1),
          s("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            s("strong", null, "Installed:"),
            $(" Tracked nodes available in this environment"),
            s("br"),
            s("strong", null, "Missing:"),
            $(" Tracked nodes that need to be installed"),
            s("br"),
            s("strong", null, "Blocked:"),
            $(" Node types that require newer ComfyUI"),
            s("br"),
            s("strong", null, "Community-Mapped:"),
            $(" Actionable package mappings from community metadata"),
            s("br"),
            s("strong", null, "Untracked:"),
            $(" Nodes on filesystem but not in manifest ")
          ], -1),
          s("p", { style: { "margin-top": "var(--cg-space-2)", color: "var(--cg-color-text-muted)" } }, ` Use "Track as Dev" for local development nodes you don't want to version. `, -1)
        ])]),
        actions: h(() => [
          b(Te, {
            variant: "primary",
            onClick: le[3] || (le[3] = (I) => _.value = !1)
          }, {
            default: h(() => [...le[31] || (le[31] = [
              $(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      x.value ? (a(), L(l2, {
        key: 0,
        node: x.value,
        onClose: le[5] || (le[5] = (I) => x.value = null)
      }, null, 8, ["node"])) : y("", !0),
      T.value ? (a(), L(El, {
        key: 1,
        title: T.value.title,
        message: T.value.message,
        warning: T.value.warning,
        "confirm-label": T.value.confirmLabel,
        destructive: T.value.destructive,
        onConfirm: T.value.onConfirm,
        onCancel: le[6] || (le[6] = (I) => T.value = null)
      }, null, 8, ["title", "message", "warning", "confirm-label", "destructive", "onConfirm"])) : y("", !0)
    ], 64));
  }
}), C2 = /* @__PURE__ */ Se($2, [["__scopeId", "data-v-edfa1c86"]]), x2 = { class: "setting-info" }, S2 = { class: "setting-label" }, I2 = {
  key: 0,
  class: "required-marker"
}, E2 = {
  key: 0,
  class: "setting-description"
}, T2 = { class: "setting-control" }, M2 = /* @__PURE__ */ be({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (t, o) => (a(), i("div", {
      class: Fe(["setting-row", { disabled: e.disabled, stacked: e.stacked }])
    }, [
      s("div", x2, [
        s("div", S2, [
          $(f(e.label) + " ", 1),
          e.required ? (a(), i("span", I2, "*")) : y("", !0)
        ]),
        e.description ? (a(), i("div", E2, f(e.description), 1)) : y("", !0)
      ]),
      s("div", T2, [
        st(t.$slots, "default", {}, void 0)
      ])
    ], 2));
  }
}), mo = /* @__PURE__ */ Se(M2, [["__scopeId", "data-v-3e106b1c"]]), P2 = ["type", "value", "placeholder", "disabled"], R2 = /* @__PURE__ */ be({
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
  setup(e, { expose: t, emit: o }) {
    const n = e, l = o, r = k(null);
    function u(c) {
      const d = c.target.value;
      l("update:modelValue", d);
    }
    return rt(() => {
      n.autoFocus && r.value && r.value.focus();
    }), t({
      focus: () => {
        var c;
        return (c = r.value) == null ? void 0 : c.focus();
      },
      blur: () => {
        var c;
        return (c = r.value) == null ? void 0 : c.blur();
      }
    }), (c, d) => (a(), i("input", {
      ref_key: "inputRef",
      ref: r,
      type: e.type,
      value: e.modelValue,
      placeholder: e.placeholder,
      disabled: e.disabled,
      class: Fe(["text-input", { error: e.hasError, monospace: e.monospace }]),
      onInput: u,
      onKeyup: [
        d[0] || (d[0] = fs((m) => c.$emit("enter"), ["enter"])),
        d[1] || (d[1] = fs((m) => c.$emit("escape"), ["escape"]))
      ],
      onFocus: d[2] || (d[2] = (m) => c.$emit("focus")),
      onBlur: d[3] || (d[3] = (m) => c.$emit("blur"))
    }, null, 42, P2));
  }
}), ho = /* @__PURE__ */ Se(R2, [["__scopeId", "data-v-0380d08f"]]), L2 = { class: "toggle" }, N2 = ["checked", "disabled"], D2 = /* @__PURE__ */ be({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (t, o) => (a(), i("label", L2, [
      s("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        onChange: o[0] || (o[0] = (n) => t.$emit("update:modelValue", n.target.checked)),
        class: "toggle-input"
      }, null, 40, N2),
      o[1] || (o[1] = s("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), $i = /* @__PURE__ */ Se(D2, [["__scopeId", "data-v-71c0f550"]]), Ba = "ComfyGit.Deploy.GitHubPAT";
function sc(e) {
  return e.startsWith("git@") || e.startsWith("ssh://");
}
function O2(e) {
  return e.startsWith("https://") || e.startsWith("http://");
}
function U2() {
  function e() {
    try {
      return localStorage.getItem(Ba);
    } catch {
      return null;
    }
  }
  function t(l) {
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
  function n() {
    const l = e();
    return l !== null && l.length > 0;
  }
  return {
    getToken: e,
    setToken: t,
    clearToken: o,
    hasToken: n,
    isRemoteSsh: sc,
    isRemoteHttps: O2
  };
}
const A2 = { class: "workspace-settings-content" }, z2 = { class: "settings-section" }, F2 = { class: "path-setting" }, V2 = { class: "path-value" }, B2 = { class: "path-setting" }, W2 = { class: "path-value" }, G2 = { class: "settings-section" }, j2 = { class: "token-setting" }, H2 = {
  key: 0,
  class: "token-warning"
}, q2 = { class: "token-actions" }, K2 = { class: "settings-section" }, J2 = { class: "settings-section" }, Q2 = /* @__PURE__ */ be({
  __name: "WorkspaceSettingsContent",
  props: {
    workspacePath: {}
  },
  emits: ["saved", "error"],
  setup(e, { expose: t, emit: o }) {
    const n = e, l = o, { getConfig: r, updateConfig: u, getRemotes: c, testGitAuth: d } = vt(), { getToken: m, setToken: v, clearToken: p, hasToken: w } = U2(), g = k(!1), _ = k(null), x = k(null), C = k(null), S = k(null), T = k(""), M = k(""), P = k(""), D = k(""), N = k(!1), O = k(!1), E = k(!1), K = k(""), ae = k(!1), fe = k(!1), ue = k(null), we = k(!1), X = k(!0);
    function G(ee) {
      return ee.join(" ");
    }
    function Y(ee) {
      return ee.trim() ? ee.trim().split(/\s+/) : [];
    }
    const Re = R(() => {
      if (!S.value) return !1;
      const ee = N.value, q = O.value, Z = E.value, xe = D.value !== G(S.value.comfyui_extra_args || []);
      return ee || q || Z || xe;
    }), se = R(() => w());
    async function ge() {
      var ee;
      g.value = !0, _.value = null;
      try {
        C.value = await r(n.workspacePath || void 0), S.value = { ...C.value }, T.value = C.value.civitai_api_key || "", M.value = C.value.huggingface_token || "", D.value = G(C.value.comfyui_extra_args || []), P.value = m() || "", K.value = P.value, N.value = !1, O.value = !1, E.value = !1, ue.value = null;
        const q = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        we.value = q !== "false", X.value = localStorage.getItem("comfygit:popup-disabled") !== "true";
        try {
          const xe = (ee = (await c()).remotes) == null ? void 0 : ee.find((ce) => ce.name === "origin");
          ae.value = !!(xe && sc(xe.url));
        } catch {
          ae.value = !1;
        }
      } catch (q) {
        _.value = q instanceof Error ? q.message : "Failed to load settings";
      } finally {
        g.value = !1;
      }
    }
    async function z() {
      var ee;
      x.value = null;
      try {
        const q = {};
        N.value && (q.civitai_api_key = T.value || null), O.value && (q.huggingface_token = M.value || null), D.value !== G(((ee = S.value) == null ? void 0 : ee.comfyui_extra_args) || []) && (q.comfyui_extra_args = Y(D.value)), await u(q, n.workspacePath || void 0), E.value && (P.value ? v(P.value) : p()), await ge(), x.value = { type: "success", message: "Settings saved successfully" }, l("saved"), setTimeout(() => {
          x.value = null;
        }, 3e3);
      } catch (q) {
        const Z = q instanceof Error ? q.message : "Failed to save settings";
        x.value = { type: "error", message: Z }, l("error", Z);
      }
    }
    function me() {
      S.value && (T.value = S.value.civitai_api_key || "", M.value = S.value.huggingface_token || "", D.value = G(S.value.comfyui_extra_args || []), P.value = K.value, N.value = !1, O.value = !1, E.value = !1, ue.value = null, x.value = null);
    }
    async function Pe() {
      if (P.value) {
        fe.value = !0, ue.value = null;
        try {
          const ee = await d(P.value);
          ue.value = {
            type: ee.status === "success" ? "success" : "error",
            message: ee.message
          };
        } catch (ee) {
          ue.value = {
            type: "error",
            message: ee instanceof Error ? ee.message : "Connection test failed"
          };
        } finally {
          fe.value = !1;
        }
      }
    }
    function We() {
      P.value = "", E.value = !0, ue.value = null;
    }
    function Ee(ee) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(ee)), console.log("[ComfyGit] Auto-refresh setting saved:", ee);
    }
    function H(ee) {
      ee ? localStorage.removeItem("comfygit:popup-disabled") : localStorage.setItem("comfygit:popup-disabled", "true"), console.log("[ComfyGit] Popup setting changed:", ee ? "enabled" : "disabled");
    }
    return t({
      saveSettings: z,
      resetSettings: me,
      hasChanges: Re,
      loadSettings: ge
    }), rt(ge), (ee, q) => (a(), i("div", A2, [
      g.value ? (a(), L(xs, {
        key: 0,
        message: "Loading workspace settings..."
      })) : _.value ? (a(), L(Ss, {
        key: 1,
        message: _.value,
        retry: !0,
        onRetry: ge
      }, null, 8, ["message"])) : (a(), i(j, { key: 2 }, [
        b(St, { title: "WORKSPACE PATHS" }, {
          default: h(() => {
            var Z, xe;
            return [
              s("div", z2, [
                s("div", F2, [
                  q[9] || (q[9] = s("div", { class: "path-label" }, "Workspace Root", -1)),
                  q[10] || (q[10] = s("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                  s("div", V2, f(((Z = C.value) == null ? void 0 : Z.workspace_path) || "Loading..."), 1)
                ]),
                s("div", B2, [
                  q[11] || (q[11] = s("div", { class: "path-label" }, "Models Directory", -1)),
                  q[12] || (q[12] = s("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                  s("div", W2, f(((xe = C.value) == null ? void 0 : xe.models_path) || "Not configured"), 1)
                ])
              ])
            ];
          }),
          _: 1
        }),
        b(St, { title: "API CREDENTIALS" }, {
          default: h(() => [
            s("div", G2, [
              b(mo, {
                label: "CivitAI API Key",
                description: "API key for downloading models from CivitAI"
              }, {
                default: h(() => [
                  b(ho, {
                    modelValue: T.value,
                    "onUpdate:modelValue": q[0] || (q[0] = (Z) => T.value = Z),
                    type: "password",
                    placeholder: "Enter CivitAI API key...",
                    style: { minWidth: "300px" },
                    onInput: q[1] || (q[1] = (Z) => N.value = !0)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              b(mo, {
                label: "HuggingFace Token",
                description: "Access token for downloading gated/private models from HuggingFace"
              }, {
                default: h(() => [
                  b(ho, {
                    modelValue: M.value,
                    "onUpdate:modelValue": q[2] || (q[2] = (Z) => M.value = Z),
                    type: "password",
                    placeholder: "Enter HuggingFace token...",
                    style: { minWidth: "300px" },
                    onInput: q[3] || (q[3] = (Z) => O.value = !0)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              b(mo, {
                label: "GitHub Personal Access Token",
                description: "Client-side token used for private Git remote access during deploy and remote operations",
                stacked: ""
              }, {
                default: h(() => [
                  s("div", j2, [
                    b(ho, {
                      modelValue: P.value,
                      "onUpdate:modelValue": q[4] || (q[4] = (Z) => P.value = Z),
                      type: "password",
                      placeholder: "ghp_xxxxxxxxxxxxxxxxxxxx",
                      onInput: q[5] || (q[5] = (Z) => E.value = !0)
                    }, null, 8, ["modelValue"]),
                    ae.value ? (a(), i("div", H2, " SSH origin remote detected. PAT authentication only works with HTTPS remotes. ")) : y("", !0),
                    q[15] || (q[15] = s("div", { class: "token-help" }, " Stored in your browser only. Never sent to the server except when you explicitly test or use authenticated remote operations. ", -1)),
                    s("div", q2, [
                      b(Te, {
                        variant: "ghost",
                        size: "xs",
                        loading: fe.value,
                        disabled: !P.value || fe.value,
                        onClick: Pe
                      }, {
                        default: h(() => [...q[13] || (q[13] = [
                          $(" Test Connection ", -1)
                        ])]),
                        _: 1
                      }, 8, ["loading", "disabled"]),
                      se.value ? (a(), L(Te, {
                        key: 0,
                        variant: "ghost",
                        size: "xs",
                        onClick: We
                      }, {
                        default: h(() => [...q[14] || (q[14] = [
                          $(" Clear ", -1)
                        ])]),
                        _: 1
                      })) : y("", !0)
                    ]),
                    ue.value ? (a(), i("div", {
                      key: 1,
                      class: Fe(["token-test-result", ue.value.type])
                    }, f(ue.value.message), 3)) : y("", !0)
                  ])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        b(St, { title: "COMFYUI SETTINGS" }, {
          default: h(() => [
            s("div", K2, [
              b(mo, {
                label: "Extra Startup Arguments",
                description: "Additional command-line arguments passed to ComfyUI on startup (e.g., --lowvram, --listen 0.0.0.0). Takes effect on next restart."
              }, {
                default: h(() => [
                  b(ho, {
                    modelValue: D.value,
                    "onUpdate:modelValue": q[6] || (q[6] = (Z) => D.value = Z),
                    placeholder: "--lowvram --listen 0.0.0.0",
                    style: { minWidth: "300px" }
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              q[16] || (q[16] = s("div", { class: "setting-hint" }, [
                $(" Common flags: "),
                s("code", null, "--lowvram"),
                $(", "),
                s("code", null, "--highvram"),
                $(", "),
                s("code", null, "--listen 0.0.0.0"),
                $(", "),
                s("code", null, "--cuda-device 1")
              ], -1))
            ])
          ]),
          _: 1
        }),
        b(St, { title: "UI SETTINGS" }, {
          default: h(() => [
            s("div", J2, [
              b(mo, {
                label: "Auto-Refresh After Git Operations",
                description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
              }, {
                default: h(() => [
                  b($i, {
                    modelValue: we.value,
                    "onUpdate:modelValue": [
                      q[7] || (q[7] = (Z) => we.value = Z),
                      Ee
                    ]
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              b(mo, {
                label: "Show Missing Dependencies Popup",
                description: "Show popup when loading unsaved workflows with missing nodes or models. Saved workflows are tracked in the ComfyGit panel."
              }, {
                default: h(() => [
                  b($i, {
                    modelValue: X.value,
                    "onUpdate:modelValue": [
                      q[8] || (q[8] = (Z) => X.value = Z),
                      H
                    ]
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        x.value ? (a(), L(ia, {
          key: 0,
          variant: (x.value.type === "success", "compact")
        }, {
          default: h(() => [
            s("span", {
              style: Rt({ color: x.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
            }, f(x.value.message), 5)
          ]),
          _: 1
        }, 8, ["variant"])) : y("", !0)
      ], 64))
    ]));
  }
}), oc = /* @__PURE__ */ Se(Q2, [["__scopeId", "data-v-f1bdc574"]]), Y2 = /* @__PURE__ */ be({
  __name: "WorkspaceSettingsSection",
  setup(e) {
    const t = k(null);
    function o() {
      console.log("[ComfyGit] Settings saved");
    }
    return (n, l) => (a(), L(At, null, {
      header: h(() => [
        b(zt, { title: "WORKSPACE SETTINGS" }, {
          actions: h(() => {
            var r, u;
            return [
              b(Te, {
                variant: "primary",
                size: "sm",
                disabled: !((r = t.value) != null && r.hasChanges),
                onClick: l[0] || (l[0] = (c) => {
                  var d;
                  return (d = t.value) == null ? void 0 : d.saveSettings();
                })
              }, {
                default: h(() => [...l[2] || (l[2] = [
                  $(" Save Changes ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"]),
              (u = t.value) != null && u.hasChanges ? (a(), L(Te, {
                key: 0,
                variant: "ghost",
                size: "sm",
                onClick: l[1] || (l[1] = (c) => {
                  var d;
                  return (d = t.value) == null ? void 0 : d.resetSettings();
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
        b(oc, {
          ref_key: "contentRef",
          ref: t,
          onSaved: o
        }, null, 512)
      ]),
      _: 1
    }));
  }
}), X2 = { class: "env-title" }, Z2 = {
  key: 0,
  class: "current-badge"
}, e$ = {
  key: 0,
  class: "branch-info"
}, t$ = /* @__PURE__ */ be({
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
    return (t, o) => (a(), L(Vt, {
      status: e.isCurrent ? "synced" : void 0
    }, Yt({
      icon: h(() => [
        $(f(e.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: h(() => [
        s("div", X2, [
          s("span", null, f(e.environmentName), 1),
          e.isCurrent && e.showCurrentLabel ? (a(), i("span", Z2, "CURRENT")) : y("", !0)
        ])
      ]),
      subtitle: h(() => [
        e.currentBranch ? (a(), i("span", e$, [
          o[0] || (o[0] = s("span", { class: "branch-icon" }, "⎇", -1)),
          $(" " + f(e.currentBranch), 1)
        ])) : y("", !0)
      ]),
      actions: h(() => [
        st(t.$slots, "actions", {}, void 0, !0)
      ]),
      _: 2
    }, [
      e.showDetails ? {
        name: "details",
        fn: h(() => [
          b(_t, {
            label: "Workflows:",
            value: String(e.workflowCount)
          }, null, 8, ["value"]),
          b(_t, {
            label: "Nodes:",
            value: String(e.nodeCount)
          }, null, 8, ["value"]),
          b(_t, {
            label: "Models:",
            value: String(e.modelCount)
          }, null, 8, ["value"]),
          e.lastUsed && e.showLastUsed ? (a(), L(_t, {
            key: 0,
            label: "Last used:",
            value: e.lastUsed
          }, null, 8, ["value"])) : y("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), s$ = /* @__PURE__ */ Se(t$, [["__scopeId", "data-v-9231917a"]]), o$ = { class: "env-details" }, n$ = { class: "status-row" }, a$ = {
  key: 0,
  class: "detail-row"
}, l$ = { class: "value mono" }, i$ = {
  key: 1,
  class: "detail-row"
}, r$ = { class: "value mono small" }, c$ = { class: "collapsible-section" }, u$ = { class: "value" }, d$ = {
  key: 0,
  class: "collapsible-body"
}, f$ = { class: "item-list" }, m$ = { class: "item-name" }, v$ = { class: "item-name" }, p$ = { class: "item-name" }, g$ = { class: "item-name" }, h$ = {
  key: 0,
  class: "empty-list"
}, y$ = { class: "collapsible-section" }, w$ = { class: "value" }, _$ = {
  key: 0,
  class: "collapsible-body"
}, k$ = { class: "item-list" }, b$ = { class: "item-name" }, $$ = {
  key: 0,
  class: "item-meta"
}, C$ = {
  key: 0,
  class: "empty-list"
}, x$ = { class: "collapsible-section" }, S$ = { class: "value" }, I$ = {
  key: 0,
  class: "missing-count"
}, E$ = {
  key: 0,
  class: "collapsible-body"
}, T$ = { class: "item-list" }, M$ = { class: "model-row" }, P$ = { class: "item-name" }, R$ = { class: "model-meta" }, L$ = { class: "item-meta" }, N$ = {
  key: 0,
  class: "item-meta"
}, D$ = {
  key: 0,
  class: "empty-list"
}, O$ = {
  key: 2,
  class: "section-divider"
}, U$ = {
  key: 3,
  class: "detail-row"
}, A$ = { class: "value" }, z$ = { class: "footer-actions" }, F$ = /* @__PURE__ */ be({
  __name: "EnvironmentDetailsModal",
  props: {
    environment: {},
    detail: {},
    canDelete: { type: Boolean }
  },
  emits: ["close", "delete", "export"],
  setup(e, { emit: t }) {
    const o = e, n = t, l = k(/* @__PURE__ */ new Set());
    function r(d) {
      l.value.has(d) ? l.value.delete(d) : l.value.add(d), l.value = new Set(l.value);
    }
    const u = R(() => {
      var m;
      if (!((m = o.detail) != null && m.workflows)) return !0;
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
    return (d, m) => (a(), L(It, {
      title: `ENVIRONMENT DETAILS: ${e.environment.name.toUpperCase()}`,
      size: "md",
      onClose: m[6] || (m[6] = (v) => n("close"))
    }, {
      body: h(() => {
        var v, p, w, g, _, x, C, S, T, M, P, D, N, O;
        return [
          s("div", o$, [
            s("div", n$, [
              m[7] || (m[7] = s("span", { class: "label" }, "Status:", -1)),
              s("span", {
                class: Fe(["status-badge", e.environment.is_current ? "current" : "inactive"])
              }, f(e.environment.is_current ? "Current" : "Inactive"), 3)
            ]),
            e.environment.current_branch ? (a(), i("div", a$, [
              m[8] || (m[8] = s("span", { class: "label" }, "Branch:", -1)),
              s("span", l$, f(e.environment.current_branch), 1)
            ])) : y("", !0),
            e.environment.path ? (a(), i("div", i$, [
              m[9] || (m[9] = s("span", { class: "label" }, "Path:", -1)),
              s("span", r$, f(e.environment.path), 1)
            ])) : y("", !0),
            m[18] || (m[18] = s("div", { class: "section-divider" }, null, -1)),
            s("div", c$, [
              s("div", {
                class: "collapsible-header",
                onClick: m[0] || (m[0] = (E) => r("workflows"))
              }, [
                m[10] || (m[10] = s("span", { class: "label" }, "Workflows:", -1)),
                s("span", u$, f(((v = e.detail) == null ? void 0 : v.workflow_count) ?? e.environment.workflow_count), 1),
                (p = e.detail) != null && p.workflows ? (a(), i("span", {
                  key: 0,
                  class: Fe(["chevron", { expanded: l.value.has("workflows") }])
                }, "▶", 2)) : y("", !0)
              ]),
              (w = e.detail) != null && w.workflows && l.value.has("workflows") ? (a(), i("div", d$, [
                s("div", f$, [
                  (a(!0), i(j, null, he(e.detail.workflows.synced, (E) => (a(), i("div", {
                    key: "synced-" + E,
                    class: "list-item"
                  }, [
                    s("span", m$, f(E), 1),
                    m[11] || (m[11] = s("span", { class: "sync-badge synced" }, "synced", -1))
                  ]))), 128)),
                  (a(!0), i(j, null, he(e.detail.workflows.new, (E) => (a(), i("div", {
                    key: "new-" + E,
                    class: "list-item"
                  }, [
                    s("span", v$, f(E), 1),
                    m[12] || (m[12] = s("span", { class: "sync-badge new" }, "new", -1))
                  ]))), 128)),
                  (a(!0), i(j, null, he(e.detail.workflows.modified, (E) => (a(), i("div", {
                    key: "mod-" + E,
                    class: "list-item"
                  }, [
                    s("span", p$, f(E), 1),
                    m[13] || (m[13] = s("span", { class: "sync-badge modified" }, "modified", -1))
                  ]))), 128)),
                  (a(!0), i(j, null, he(e.detail.workflows.deleted, (E) => (a(), i("div", {
                    key: "del-" + E,
                    class: "list-item"
                  }, [
                    s("span", g$, f(E), 1),
                    m[14] || (m[14] = s("span", { class: "sync-badge deleted" }, "deleted", -1))
                  ]))), 128)),
                  u.value ? (a(), i("div", h$, "No workflows")) : y("", !0)
                ])
              ])) : y("", !0)
            ]),
            s("div", y$, [
              s("div", {
                class: "collapsible-header",
                onClick: m[1] || (m[1] = (E) => r("nodes"))
              }, [
                m[15] || (m[15] = s("span", { class: "label" }, "Nodes:", -1)),
                s("span", w$, f(((g = e.detail) == null ? void 0 : g.node_count) ?? e.environment.node_count), 1),
                (_ = e.detail) != null && _.nodes ? (a(), i("span", {
                  key: 0,
                  class: Fe(["chevron", { expanded: l.value.has("nodes") }])
                }, "▶", 2)) : y("", !0)
              ]),
              (x = e.detail) != null && x.nodes && l.value.has("nodes") ? (a(), i("div", _$, [
                s("div", k$, [
                  (a(!0), i(j, null, he(e.detail.nodes, (E) => (a(), i("div", {
                    key: E.name,
                    class: "list-item"
                  }, [
                    s("span", b$, f(E.name), 1),
                    E.version ? (a(), i("span", $$, f(E.version), 1)) : y("", !0)
                  ]))), 128)),
                  e.detail.nodes.length ? y("", !0) : (a(), i("div", C$, "No nodes"))
                ])
              ])) : y("", !0)
            ]),
            s("div", x$, [
              s("div", {
                class: "collapsible-header",
                onClick: m[2] || (m[2] = (E) => r("models"))
              }, [
                m[16] || (m[16] = s("span", { class: "label" }, "Models:", -1)),
                s("span", S$, [
                  $(f(((C = e.detail) == null ? void 0 : C.model_count) ?? e.environment.model_count) + " ", 1),
                  (T = (S = e.detail) == null ? void 0 : S.models) != null && T.missing.length ? (a(), i("span", I$, "(" + f(e.detail.models.missing.length) + " missing)", 1)) : y("", !0)
                ]),
                (M = e.detail) != null && M.models ? (a(), i("span", {
                  key: 0,
                  class: Fe(["chevron", { expanded: l.value.has("models") }])
                }, "▶", 2)) : y("", !0)
              ]),
              (P = e.detail) != null && P.models && l.value.has("models") ? (a(), i("div", E$, [
                s("div", T$, [
                  (a(!0), i(j, null, he(e.detail.models.missing, (E) => (a(), i("div", {
                    key: E.filename,
                    class: "list-item model-item"
                  }, [
                    s("div", M$, [
                      s("span", P$, f(E.filename), 1),
                      s("span", {
                        class: Fe(["criticality-badge", E.criticality])
                      }, f(E.criticality), 3)
                    ]),
                    s("div", R$, [
                      s("span", L$, f(E.category), 1),
                      E.workflow_names.length ? (a(), i("span", N$, " used by: " + f(E.workflow_names.join(", ")), 1)) : y("", !0)
                    ])
                  ]))), 128)),
                  e.detail.models.missing.length ? y("", !0) : (a(), i("div", D$, "No missing models"))
                ])
              ])) : y("", !0)
            ]),
            (D = e.detail) != null && D.created_at || e.environment.created_at ? (a(), i("div", O$)) : y("", !0),
            (N = e.detail) != null && N.created_at || e.environment.created_at ? (a(), i("div", U$, [
              m[17] || (m[17] = s("span", { class: "label" }, "Created:", -1)),
              s("span", A$, f(c(((O = e.detail) == null ? void 0 : O.created_at) ?? e.environment.created_at)), 1)
            ])) : y("", !0)
          ])
        ];
      }),
      footer: h(() => [
        s("div", z$, [
          b(Ne, {
            variant: "secondary",
            size: "sm",
            onClick: m[3] || (m[3] = (v) => n("export", e.environment.name))
          }, {
            default: h(() => [...m[19] || (m[19] = [
              $(" Export ", -1)
            ])]),
            _: 1
          }),
          e.canDelete ? (a(), L(Ne, {
            key: 0,
            variant: "danger",
            size: "sm",
            onClick: m[4] || (m[4] = (v) => n("delete", e.environment.name))
          }, {
            default: h(() => [...m[20] || (m[20] = [
              $(" Delete ", -1)
            ])]),
            _: 1
          })) : y("", !0),
          m[22] || (m[22] = s("div", { class: "footer-spacer" }, null, -1)),
          b(Ne, {
            variant: "secondary",
            size: "sm",
            onClick: m[5] || (m[5] = (v) => n("close"))
          }, {
            default: h(() => [...m[21] || (m[21] = [
              $(" Close ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), V$ = /* @__PURE__ */ Se(F$, [["__scopeId", "data-v-750671f5"]]), nc = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], ac = "3.12", Tl = [
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
], lc = "auto", B$ = { class: "progress-bar" }, W$ = /* @__PURE__ */ be({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(e) {
    const t = e, o = R(() => `${Math.max(0, Math.min(100, t.progress))}%`);
    return (n, l) => (a(), i("div", B$, [
      s("div", {
        class: Fe(["progress-fill", e.variant]),
        style: Rt({ width: o.value })
      }, null, 6)
    ]));
  }
}), ic = /* @__PURE__ */ Se(W$, [["__scopeId", "data-v-1beb0512"]]), G$ = { class: "task-progress" }, j$ = { class: "progress-info" }, H$ = { class: "progress-percentage" }, q$ = { class: "progress-message" }, K$ = {
  key: 0,
  class: "progress-steps"
}, J$ = { class: "step-icon" }, Q$ = { class: "step-label" }, Y$ = /* @__PURE__ */ be({
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
    const t = e;
    function o(l) {
      const r = t.steps.find((u) => u.id === l);
      return r ? t.progress >= r.progressThreshold ? "completed" : t.currentPhase === l ? "active" : "pending" : "pending";
    }
    function n(l) {
      const r = o(l);
      return r === "completed" ? "✓" : r === "active" ? "⟳" : "○";
    }
    return (l, r) => (a(), i("div", G$, [
      b(ic, {
        progress: e.progress,
        variant: e.variant
      }, null, 8, ["progress", "variant"]),
      s("div", j$, [
        s("span", H$, f(e.progress) + "%", 1),
        s("span", q$, f(e.message), 1)
      ]),
      e.showSteps && e.steps.length > 0 ? (a(), i("div", K$, [
        (a(!0), i(j, null, he(e.steps, (u) => (a(), i("div", {
          key: u.id,
          class: Fe(["step", o(u.id)])
        }, [
          s("span", J$, f(n(u.id)), 1),
          s("span", Q$, f(u.label), 1)
        ], 2))), 128))
      ])) : y("", !0)
    ]));
  }
}), Hn = /* @__PURE__ */ Se(Y$, [["__scopeId", "data-v-9d1de66c"]]), X$ = {
  key: 0,
  class: "create-env-form"
}, Z$ = { class: "form-field" }, eC = { class: "input-wrapper" }, tC = {
  key: 0,
  class: "validating-indicator"
}, sC = {
  key: 1,
  class: "valid-indicator"
}, oC = {
  key: 0,
  class: "field-error"
}, nC = { class: "form-field" }, aC = ["value"], lC = { class: "form-field" }, iC = ["disabled"], rC = ["value"], cC = { class: "form-field" }, uC = ["value"], dC = { class: "form-field form-field--checkbox" }, fC = { class: "form-checkbox" }, mC = {
  key: 1,
  class: "create-env-progress"
}, vC = { class: "creating-intro" }, pC = {
  key: 0,
  class: "progress-warning"
}, gC = {
  key: 1,
  class: "create-error"
}, hC = { class: "error-message" }, yC = {
  key: 1,
  class: "footer-status"
}, wC = 10, _C = /* @__PURE__ */ be({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(e, { emit: t }) {
    const o = t, { getComfyUIReleases: n, createEnvironment: l, getCreateProgress: r, validateEnvironmentName: u } = vt(), c = k(""), d = k(ac), m = k("latest"), v = k(lc), p = k(!1), w = k(null), g = k(!1), _ = k(!1);
    let x = null, C = 0;
    const S = R(() => !!c.value.trim() && _.value && !w.value && !g.value && !P.value), T = k([{ tag_name: "latest", name: "Latest", published_at: "" }]), M = k(!1), P = k(!1), D = k({
      progress: 0,
      message: ""
    });
    let N = null, O = 0;
    const E = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], K = k(null);
    kt(c, (se) => {
      _.value = !1, x && (clearTimeout(x), x = null);
      const ge = se.trim();
      if (!ge) {
        w.value = null, g.value = !1;
        return;
      }
      g.value = !0, x = setTimeout(() => {
        ae(ge);
      }, 400);
    });
    async function ae(se, ge = !1) {
      const z = se.trim();
      if (!z)
        return _.value = !1, g.value = !1, w.value = ge ? "Environment name is required" : null, !1;
      const me = ++C;
      g.value = !0;
      try {
        const Pe = await u(z);
        return me !== C ? !1 : (w.value = Pe.valid ? null : Pe.error || "Invalid name", _.value = !!Pe.valid, !!Pe.valid);
      } catch {
        return me !== C || (w.value = "Failed to validate name", _.value = !1), !1;
      } finally {
        me === C && (g.value = !1);
      }
    }
    async function fe() {
      x && (clearTimeout(x), x = null), await ae(c.value, !0);
    }
    function ue() {
      P.value || o("close");
    }
    async function we() {
      const se = c.value.trim();
      if (!se) {
        w.value = "Environment name is required";
        return;
      }
      if (x && (clearTimeout(x), x = null), !!await ae(se, !0)) {
        P.value = !0, D.value = { progress: 0, message: "Starting...", phase: "init" };
        try {
          const z = {
            name: se,
            python_version: d.value,
            comfyui_version: m.value,
            torch_backend: v.value,
            switch_after: !1
            // We'll handle switch in parent after modal closes
          }, me = await l(z);
          me.status === "started" ? X() : me.status === "error" && (D.value = {
            progress: 0,
            message: me.message || "Failed to start creation",
            error: me.message
          });
        } catch (z) {
          D.value = {
            progress: 0,
            message: z instanceof Error ? z.message : "Unknown error",
            error: z instanceof Error ? z.message : "Unknown error"
          };
        }
      }
    }
    function X() {
      N || (O = 0, N = window.setInterval(async () => {
        try {
          const se = await r();
          O = 0, D.value = {
            progress: se.progress ?? 0,
            message: se.message,
            phase: se.phase,
            error: se.error
          }, se.state === "complete" ? (G(), o("created", se.environment_name || c.value.trim(), p.value)) : se.state === "error" ? (G(), D.value.error = se.error || se.message) : se.state === "idle" && P.value && (G(), D.value.error = "Creation was interrupted. Please try again.");
        } catch {
          O++, O >= wC && (G(), D.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function G() {
      N && (clearInterval(N), N = null);
    }
    function Y() {
      P.value = !1, D.value = { progress: 0, message: "" }, o("close");
    }
    async function Re() {
      M.value = !0;
      try {
        T.value = await n();
      } catch (se) {
        console.error("Failed to load ComfyUI releases:", se);
      } finally {
        M.value = !1;
      }
    }
    return rt(async () => {
      var se;
      await Pt(), (se = K.value) == null || se.focus(), Re();
    }), Mo(() => {
      G(), x && (clearTimeout(x), x = null);
    }), (se, ge) => (a(), L(It, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !P.value,
      onClose: ue
    }, {
      body: h(() => [
        P.value ? (a(), i("div", mC, [
          s("p", vC, [
            ge[12] || (ge[12] = $(" Creating environment ", -1)),
            s("strong", null, f(c.value), 1),
            ge[13] || (ge[13] = $("... ", -1))
          ]),
          b(Hn, {
            progress: D.value.progress,
            message: D.value.message,
            "current-phase": D.value.phase,
            variant: D.value.error ? "error" : "default",
            "show-steps": !0,
            steps: E
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          D.value.error ? y("", !0) : (a(), i("p", pC, " This may take several minutes. Please wait... ")),
          D.value.error ? (a(), i("div", gC, [
            s("p", hC, f(D.value.error), 1)
          ])) : y("", !0)
        ])) : (a(), i("div", X$, [
          s("div", Z$, [
            ge[6] || (ge[6] = s("label", { class: "form-label" }, "Name", -1)),
            s("div", eC, [
              Tt(s("input", {
                ref_key: "nameInput",
                ref: K,
                "onUpdate:modelValue": ge[0] || (ge[0] = (z) => c.value = z),
                type: "text",
                class: Fe(["form-input", { error: !!w.value, valid: _.value }]),
                placeholder: "my-environment",
                onKeyup: fs(we, ["enter"]),
                onBlur: fe
              }, null, 34), [
                [Xo, c.value]
              ]),
              g.value ? (a(), i("span", tC, "...")) : _.value ? (a(), i("span", sC, "✓")) : y("", !0)
            ]),
            w.value ? (a(), i("div", oC, f(w.value), 1)) : y("", !0),
            ge[7] || (ge[7] = s("div", { class: "field-hint" }, "Use letters, numbers, dots, hyphens, and underscores.", -1))
          ]),
          s("div", nC, [
            ge[8] || (ge[8] = s("label", { class: "form-label" }, "Python Version", -1)),
            Tt(s("select", {
              "onUpdate:modelValue": ge[1] || (ge[1] = (z) => d.value = z),
              class: "form-select"
            }, [
              (a(!0), i(j, null, he(tt(nc), (z) => (a(), i("option", {
                key: z,
                value: z
              }, f(z), 9, aC))), 128))
            ], 512), [
              [$o, d.value]
            ])
          ]),
          s("div", lC, [
            ge[9] || (ge[9] = s("label", { class: "form-label" }, "ComfyUI Version", -1)),
            Tt(s("select", {
              "onUpdate:modelValue": ge[2] || (ge[2] = (z) => m.value = z),
              class: "form-select",
              disabled: M.value
            }, [
              (a(!0), i(j, null, he(T.value, (z) => (a(), i("option", {
                key: z.tag_name,
                value: z.tag_name
              }, f(z.name), 9, rC))), 128))
            ], 8, iC), [
              [$o, m.value]
            ])
          ]),
          s("div", cC, [
            ge[10] || (ge[10] = s("label", { class: "form-label" }, "PyTorch Backend", -1)),
            Tt(s("select", {
              "onUpdate:modelValue": ge[3] || (ge[3] = (z) => v.value = z),
              class: "form-select"
            }, [
              (a(!0), i(j, null, he(tt(Tl), (z) => (a(), i("option", {
                key: z,
                value: z
              }, f(z) + f(z === "auto" ? " (detect GPU)" : ""), 9, uC))), 128))
            ], 512), [
              [$o, v.value]
            ])
          ]),
          s("div", dC, [
            s("label", fC, [
              Tt(s("input", {
                type: "checkbox",
                "onUpdate:modelValue": ge[4] || (ge[4] = (z) => p.value = z)
              }, null, 512), [
                [Gn, p.value]
              ]),
              ge[11] || (ge[11] = s("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ]))
      ]),
      footer: h(() => [
        P.value ? (a(), i(j, { key: 1 }, [
          D.value.error ? (a(), L(Ne, {
            key: 0,
            variant: "secondary",
            onClick: Y
          }, {
            default: h(() => [...ge[16] || (ge[16] = [
              $(" Close ", -1)
            ])]),
            _: 1
          })) : (a(), i("span", yC, " Creating environment... "))
        ], 64)) : (a(), i(j, { key: 0 }, [
          b(Ne, {
            variant: "primary",
            disabled: !S.value,
            onClick: we
          }, {
            default: h(() => [...ge[14] || (ge[14] = [
              $(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          b(Ne, {
            variant: "secondary",
            onClick: ge[5] || (ge[5] = (z) => o("close"))
          }, {
            default: h(() => [...ge[15] || (ge[15] = [
              $(" Cancel ", -1)
            ])]),
            _: 1
          })
        ], 64))
      ]),
      _: 1
    }, 8, ["show-close-button"]));
  }
}), kC = /* @__PURE__ */ Se(_C, [["__scopeId", "data-v-3faa3d9b"]]), bC = /* @__PURE__ */ be({
  __name: "EnvironmentsSection",
  props: {
    canCreate: { type: Boolean, default: !0 },
    canSwitch: { type: Boolean, default: !0 },
    canDelete: { type: Boolean, default: !0 }
  },
  emits: ["switch", "created", "delete", "import", "export"],
  setup(e, { expose: t, emit: o }) {
    const n = o, { getEnvironments: l, getEnvironmentDetails: r } = vt(), u = k([]), c = k(!1), d = k(null), m = k(""), v = k(!1), p = k(!1), w = k(null), g = k(null), _ = R(() => [...u.value].sort((N, O) => N.is_current !== O.is_current ? N.is_current ? -1 : 1 : N.name.localeCompare(O.name))), x = R(() => {
      if (!m.value.trim()) return _.value;
      const N = m.value.toLowerCase();
      return _.value.filter(
        (O) => {
          var E;
          return O.name.toLowerCase().includes(N) || ((E = O.current_branch) == null ? void 0 : E.toLowerCase().includes(N));
        }
      );
    });
    function C(N, O) {
      p.value = !1, n("created", N, O);
    }
    function S() {
      p.value = !0;
    }
    async function T(N) {
      w.value = N, g.value = null;
      const O = await r(N.name);
      O && (g.value = O);
    }
    function M(N) {
      w.value = null, g.value = null, n("delete", N);
    }
    function P(N) {
      w.value = null, g.value = null, n("export", N);
    }
    async function D() {
      c.value = !0, d.value = null;
      try {
        u.value = await l();
      } catch (N) {
        d.value = N instanceof Error ? N.message : "Failed to load environments";
      } finally {
        c.value = !1;
      }
    }
    return rt(D), t({
      loadEnvironments: D,
      openCreateModal: S
    }), (N, O) => (a(), i(j, null, [
      b(At, null, {
        header: h(() => [
          b(zt, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: O[1] || (O[1] = (E) => v.value = !0)
          }, {
            actions: h(() => [
              e.canCreate ? (a(), L(Te, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: S
              }, {
                default: h(() => [...O[7] || (O[7] = [
                  $(" Create ", -1)
                ])]),
                _: 1
              })) : y("", !0),
              b(Te, {
                variant: "secondary",
                size: "sm",
                onClick: O[0] || (O[0] = (E) => N.$emit("import"))
              }, {
                default: h(() => [...O[8] || (O[8] = [
                  $(" Import ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          b(io, {
            modelValue: m.value,
            "onUpdate:modelValue": O[2] || (O[2] = (E) => m.value = E),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          c.value ? (a(), L(xs, {
            key: 0,
            message: "Loading environments..."
          })) : d.value ? (a(), L(Ss, {
            key: 1,
            message: d.value,
            retry: !0,
            onRetry: D
          }, null, 8, ["message"])) : (a(), i(j, { key: 2 }, [
            x.value.length ? (a(), L(St, {
              key: 0,
              title: "ENVIRONMENTS",
              count: x.value.length
            }, {
              default: h(() => [
                (a(!0), i(j, null, he(x.value, (E) => (a(), L(s$, {
                  key: E.name,
                  "environment-name": E.name,
                  "is-current": E.is_current,
                  "current-branch": E.current_branch,
                  "show-last-used": !1
                }, {
                  actions: h(() => [
                    !E.is_current && e.canSwitch ? (a(), L(Te, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (K) => N.$emit("switch", E.name)
                    }, {
                      default: h(() => [...O[9] || (O[9] = [
                        $(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : y("", !0),
                    b(Te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (K) => T(E)
                    }, {
                      default: h(() => [...O[10] || (O[10] = [
                        $(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (K) => N.$emit("export", E.name)
                    }, {
                      default: h(() => [...O[11] || (O[11] = [
                        $(" Export ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["environment-name", "is-current", "current-branch"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            x.value.length ? y("", !0) : (a(), L(cs, {
              key: 1,
              icon: "🌍",
              message: m.value ? `No environments match '${m.value}'` : "No environments found. Create one to get started!"
            }, Yt({ _: 2 }, [
              m.value ? void 0 : {
                name: "actions",
                fn: h(() => [
                  e.canCreate ? (a(), L(Te, {
                    key: 0,
                    variant: "primary",
                    onClick: S
                  }, {
                    default: h(() => [...O[12] || (O[12] = [
                      $(" Create Environment ", -1)
                    ])]),
                    _: 1
                  })) : y("", !0)
                ]),
                key: "0"
              }
            ]), 1032, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      b(ts, {
        show: v.value,
        title: "About Environments",
        onClose: O[4] || (O[4] = (E) => v.value = !1)
      }, {
        content: h(() => [...O[13] || (O[13] = [
          s("p", null, [
            s("strong", null, "Environments"),
            $(" are isolated workspaces that contain their own workflows, nodes, and models. Each environment can track different branches and maintain separate state. ")
          ], -1),
          s("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            s("strong", null, "Use cases:")
          ], -1),
          s("ul", { style: { "margin-top": "var(--cg-space-1)", "padding-left": "var(--cg-space-4)" } }, [
            s("li", null, "Separate production and development workflows"),
            s("li", null, "Test different node configurations"),
            s("li", null, "Experiment with new models safely"),
            s("li", null, "Maintain multiple project versions")
          ], -1)
        ])]),
        actions: h(() => [
          b(Te, {
            variant: "secondary",
            onClick: O[3] || (O[3] = (E) => v.value = !1)
          }, {
            default: h(() => [...O[14] || (O[14] = [
              $(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w.value ? (a(), L(V$, {
        key: 0,
        environment: w.value,
        detail: g.value,
        "can-delete": e.canDelete && u.value.length > 1,
        onClose: O[5] || (O[5] = (E) => {
          w.value = null, g.value = null;
        }),
        onDelete: M,
        onExport: P
      }, null, 8, ["environment", "detail", "can-delete"])) : y("", !0),
      p.value ? (a(), L(kC, {
        key: 1,
        onClose: O[6] || (O[6] = (E) => p.value = !1),
        onCreated: C
      })) : y("", !0)
    ], 64));
  }
}), $C = /* @__PURE__ */ Se(bC, [["__scopeId", "data-v-01163d8c"]]), CC = { class: "file-path" }, xC = { class: "file-path-text" }, SC = ["title"], IC = /* @__PURE__ */ be({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(e) {
    const t = e, o = k(!1);
    async function n() {
      try {
        await navigator.clipboard.writeText(t.path), o.value = !0, setTimeout(() => {
          o.value = !1;
        }, 2e3);
      } catch (l) {
        console.error("Failed to copy:", l);
      }
    }
    return (l, r) => (a(), i("div", CC, [
      r[0] || (r[0] = s("span", { class: "file-path-icon" }, "📄", -1)),
      s("code", xC, f(e.path), 1),
      e.copyable ? (a(), i("button", {
        key: 0,
        class: "copy-btn",
        title: o.value ? "Copied!" : "Copy path",
        onClick: n
      }, f(o.value ? "✓" : "📋"), 9, SC)) : y("", !0)
    ]));
  }
}), EC = /* @__PURE__ */ Se(IC, [["__scopeId", "data-v-f0982173"]]), TC = { class: "base-textarea-wrapper" }, MC = ["value", "rows", "placeholder", "disabled", "maxlength"], PC = {
  key: 0,
  class: "base-textarea-count"
}, RC = /* @__PURE__ */ be({
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
  setup(e, { emit: t }) {
    const o = e, n = t;
    function l(r) {
      r.shiftKey || r.ctrlKey || r.metaKey || o.submitOnEnter && (r.preventDefault(), n("submit"));
    }
    return (r, u) => (a(), i("div", TC, [
      s("textarea", {
        value: e.modelValue,
        rows: e.rows,
        placeholder: e.placeholder,
        disabled: e.disabled,
        maxlength: e.maxLength,
        class: "base-textarea",
        onInput: u[0] || (u[0] = (c) => r.$emit("update:modelValue", c.target.value)),
        onKeydown: [
          u[1] || (u[1] = fs(mt((c) => r.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          u[2] || (u[2] = fs(mt((c) => r.$emit("ctrlEnter"), ["meta"]), ["enter"])),
          fs(l, ["enter"])
        ]
      }, null, 40, MC),
      e.showCharCount && e.maxLength ? (a(), i("div", PC, f(e.modelValue.length) + " / " + f(e.maxLength), 1)) : y("", !0)
    ]));
  }
}), Co = /* @__PURE__ */ Se(RC, [["__scopeId", "data-v-c6d16c93"]]), LC = ["checked", "disabled"], NC = { class: "base-checkbox-box" }, DC = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, OC = {
  key: 0,
  class: "base-checkbox-label"
}, UC = /* @__PURE__ */ be({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (t, o) => (a(), i("label", {
      class: Fe(["base-checkbox", { disabled: e.disabled }])
    }, [
      s("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        class: "base-checkbox-input",
        onChange: o[0] || (o[0] = (n) => t.$emit("update:modelValue", n.target.checked))
      }, null, 40, LC),
      s("span", NC, [
        e.modelValue ? (a(), i("svg", DC, [...o[1] || (o[1] = [
          s("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : y("", !0)
      ]),
      t.$slots.default ? (a(), i("span", OC, [
        st(t.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), qn = /* @__PURE__ */ Se(UC, [["__scopeId", "data-v-bf17c831"]]), AC = { class: "export-blocked" }, zC = { class: "error-header" }, FC = { class: "error-summary" }, VC = { class: "error-title" }, BC = { class: "error-description" }, WC = { class: "issues-list" }, GC = { class: "issue-message" }, jC = {
  key: 0,
  class: "issue-details"
}, HC = ["onClick"], qC = { class: "issue-fix" }, KC = {
  key: 0,
  class: "commit-section"
}, JC = {
  key: 0,
  class: "issues-warning"
}, QC = {
  key: 1,
  class: "commit-error"
}, YC = /* @__PURE__ */ be({
  __name: "ExportBlockedModal",
  props: {
    issues: {},
    mode: {}
  },
  emits: ["close", "committed"],
  setup(e, { emit: t }) {
    const o = e, n = t, { commit: l } = vt(), r = k(""), u = k(!1), c = k(!1), d = k(""), m = ro({}), v = R(() => o.mode === "publish" ? "Publish" : "Export"), p = R(
      () => o.issues.some((S) => S.type === "uncommitted_workflows" || S.type === "uncommitted_git_changes")
    ), w = R(
      () => o.issues.some((S) => S.type === "unresolved_issues")
    ), g = R(
      () => w.value && !c.value
    ), _ = R(
      () => p.value && r.value.trim() !== "" && !u.value && !g.value
    );
    function x(S) {
      const T = o.issues[S];
      return m[S] || T.details.length <= 3 ? T.details : T.details.slice(0, 3);
    }
    async function C() {
      var S;
      if (_.value) {
        u.value = !0, d.value = "";
        try {
          const T = await l(r.value.trim(), c.value);
          if (T.status === "success")
            n("committed");
          else if (T.status === "blocked") {
            const M = ((S = T.issues) == null ? void 0 : S.map((P) => `${P.name}: ${P.issue}`).join("; ")) || "Unknown issues";
            d.value = `Commit blocked: ${M}`;
          } else
            d.value = T.message || "Commit failed";
        } catch (T) {
          d.value = T instanceof Error ? T.message : "Commit failed";
        } finally {
          u.value = !1;
        }
      }
    }
    return (S, T) => (a(), L(It, {
      title: p.value ? `Commit & ${v.value}` : `Cannot ${v.value}`,
      size: "md",
      onClose: T[4] || (T[4] = (M) => S.$emit("close"))
    }, {
      body: h(() => [
        s("div", AC, [
          s("div", zC, [
            T[5] || (T[5] = s("span", { class: "error-icon" }, [
              s("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                s("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ])
            ], -1)),
            s("div", FC, [
              s("h3", VC, f(v.value) + " blocked", 1),
              s("p", BC, f(p.value ? `Commit your changes to proceed with ${v.value.toLowerCase()}.` : `The following issues must be resolved before ${v.value.toLowerCase()}.`), 1)
            ])
          ]),
          s("div", WC, [
            (a(!0), i(j, null, he(e.issues, (M, P) => (a(), i("div", {
              key: P,
              class: "issue-item"
            }, [
              s("div", GC, f(M.message), 1),
              M.details.length ? (a(), i("div", jC, [
                (a(!0), i(j, null, he(x(P), (D, N) => (a(), i("div", {
                  key: N,
                  class: "issue-detail"
                }, f(D), 1))), 128)),
                M.details.length > 3 && !m[P] ? (a(), i("button", {
                  key: 0,
                  class: "show-more-inline",
                  onClick: (D) => m[P] = !0
                }, " +" + f(M.details.length - 3) + " more ", 9, HC)) : y("", !0)
              ])) : y("", !0),
              s("div", qC, [
                M.type === "uncommitted_workflows" ? (a(), i(j, { key: 0 }, [
                  $(" Commit your workflow changes before " + f(v.value.toLowerCase()) + "ing. ", 1)
                ], 64)) : M.type === "uncommitted_git_changes" ? (a(), i(j, { key: 1 }, [
                  $(" Commit your changes before " + f(v.value.toLowerCase()) + "ing. ", 1)
                ], 64)) : M.type === "unresolved_issues" ? (a(), i(j, { key: 2 }, [
                  $(" Resolve all workflow issues before " + f(v.value.toLowerCase()) + "ing. ", 1)
                ], 64)) : y("", !0)
              ])
            ]))), 128))
          ]),
          p.value ? (a(), i("div", KC, [
            w.value ? (a(), i("div", JC, [
              T[7] || (T[7] = s("div", { class: "warning-header" }, [
                s("span", { class: "warning-icon-badge" }, "!"),
                s("span", { class: "warning-label" }, "Some workflow issues cannot be fixed by committing")
              ], -1)),
              b(qn, {
                modelValue: c.value,
                "onUpdate:modelValue": T[0] || (T[0] = (M) => c.value = M),
                class: "allow-issues-toggle"
              }, {
                default: h(() => [...T[6] || (T[6] = [
                  $(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : y("", !0),
            b(Co, {
              modelValue: r.value,
              "onUpdate:modelValue": T[1] || (T[1] = (M) => r.value = M),
              placeholder: "Describe your changes...",
              disabled: u.value || g.value,
              rows: 3,
              "submit-on-enter": !0,
              onSubmit: C,
              onCtrlEnter: C
            }, null, 8, ["modelValue", "disabled"]),
            d.value ? (a(), i("div", QC, f(d.value), 1)) : y("", !0)
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        p.value ? (a(), i(j, { key: 0 }, [
          b(Ne, {
            variant: "secondary",
            onClick: T[2] || (T[2] = (M) => S.$emit("close"))
          }, {
            default: h(() => [...T[8] || (T[8] = [
              $(" Cancel ", -1)
            ])]),
            _: 1
          }),
          b(Ne, {
            variant: c.value ? "danger" : "primary",
            disabled: !_.value,
            loading: u.value,
            onClick: C
          }, {
            default: h(() => [
              $(f(u.value ? "Committing..." : c.value ? `Force Commit & ${v.value}` : `Commit & ${v.value}`), 1)
            ]),
            _: 1
          }, 8, ["variant", "disabled", "loading"])
        ], 64)) : (a(), L(Ne, {
          key: 1,
          variant: "primary",
          onClick: T[3] || (T[3] = (M) => S.$emit("close"))
        }, {
          default: h(() => [...T[9] || (T[9] = [
            $(" Understood ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), XC = /* @__PURE__ */ Se(YC, [["__scopeId", "data-v-a8990107"]]), ZC = { class: "readiness-header" }, ex = { class: "readiness-body" }, tx = {
  key: 0,
  class: "issue-section"
}, sx = { class: "section-heading" }, ox = { class: "issue-list" }, nx = { class: "issue-main" }, ax = { class: "issue-name" }, lx = { class: "issue-meta" }, ix = { key: 0 }, rx = { key: 1 }, cx = ["onClick"], ux = {
  key: 1,
  class: "issue-note"
}, dx = {
  key: 1,
  class: "issue-section"
}, fx = { class: "section-heading" }, mx = { class: "issue-list" }, vx = { class: "issue-main" }, px = { class: "issue-name" }, gx = { class: "issue-meta" }, hx = { class: "issue-reason" }, yx = ["disabled", "onClick"], wx = {
  key: 1,
  class: "issue-note"
}, _x = {
  key: 2,
  class: "empty-state"
}, kx = {
  key: 3,
  class: "error-message"
}, bx = { class: "readiness-footer" }, $x = /* @__PURE__ */ be({
  __name: "ReadinessIssuesModal",
  props: {
    warnings: {}
  },
  emits: ["close", "revalidate"],
  setup(e, { emit: t }) {
    const o = e, n = t, { updateNodeCriticality: l } = vt(), r = k(null), u = k(null), c = k(null), d = R(() => o.warnings.models_without_sources), m = R(() => o.warnings.nodes_without_provenance);
    async function v(w) {
      u.value = w, c.value = null;
      try {
        const g = await l(w, "optional");
        if (g.status !== "success") {
          c.value = g.message || `Failed to update ${w}`;
          return;
        }
        n("revalidate");
      } catch (g) {
        c.value = g instanceof Error ? g.message : `Failed to update ${w}`;
      } finally {
        u.value = null;
      }
    }
    function p() {
      r.value = null, n("revalidate");
    }
    return (w, g) => (a(), i(j, null, [
      (a(), L(Lt, { to: "body" }, [
        s("div", {
          class: "readiness-overlay",
          onClick: g[4] || (g[4] = (_) => n("close"))
        }, [
          s("div", {
            class: "readiness-modal",
            onClick: g[3] || (g[3] = mt(() => {
            }, ["stop"]))
          }, [
            s("div", ZC, [
              g[6] || (g[6] = s("div", null, [
                s("h3", { class: "readiness-title" }, "Review Reproducibility Issues"),
                s("p", { class: "readiness-subtitle" }, " Add missing source details where possible. Optional nodes are still listed as warnings, but they will not be treated as required build inputs. ")
              ], -1)),
              s("button", {
                class: "readiness-close",
                onClick: g[0] || (g[0] = (_) => n("close"))
              }, "x")
            ]),
            s("div", ex, [
              d.value.length ? (a(), i("section", tx, [
                s("div", sx, [
                  g[7] || (g[7] = s("h4", null, "Models Missing Source URLs", -1)),
                  s("span", null, f(d.value.length), 1)
                ]),
                s("div", ox, [
                  (a(!0), i(j, null, he(d.value, (_) => (a(), i("article", {
                    key: _.hash || _.filename,
                    class: "issue-item"
                  }, [
                    s("div", nx, [
                      s("div", ax, f(_.filename), 1),
                      s("div", lx, [
                        _.hash ? (a(), i("span", ix, "hash " + f(_.hash), 1)) : y("", !0),
                        _.workflows.length ? (a(), i("span", rx, "used by " + f(_.workflows.join(", ")), 1)) : y("", !0),
                        s("span", null, f(_.criticality || "required"), 1)
                      ])
                    ]),
                    _.hash ? (a(), i("button", {
                      key: 0,
                      class: "issue-action",
                      onClick: (x) => r.value = _.hash
                    }, " Add URL ", 8, cx)) : (a(), i("span", ux, "Missing hash"))
                  ]))), 128))
                ])
              ])) : y("", !0),
              m.value.length ? (a(), i("section", dx, [
                s("div", fx, [
                  g[8] || (g[8] = s("h4", null, "Custom Nodes Missing Portable Provenance", -1)),
                  s("span", null, f(m.value.length), 1)
                ]),
                s("div", mx, [
                  (a(!0), i(j, null, he(m.value, (_) => (a(), i("article", {
                    key: _.name,
                    class: "issue-item"
                  }, [
                    s("div", vx, [
                      s("div", px, f(_.name), 1),
                      s("div", gx, [
                        s("span", null, f(_.source), 1),
                        s("span", null, f(_.criticality), 1)
                      ]),
                      s("p", hx, f(_.reason), 1)
                    ]),
                    _.criticality === "required" ? (a(), i("button", {
                      key: 0,
                      class: "issue-action",
                      disabled: u.value === _.name,
                      onClick: (x) => v(_.name)
                    }, f(u.value === _.name ? "Saving..." : "Mark Optional"), 9, yx)) : (a(), i("span", wx, "Optional warning"))
                  ]))), 128))
                ])
              ])) : y("", !0),
              !d.value.length && !m.value.length ? (a(), i("div", _x, " No reproducibility issues remain. ")) : y("", !0),
              c.value ? (a(), i("div", kx, f(c.value), 1)) : y("", !0)
            ]),
            s("div", bx, [
              s("button", {
                class: "secondary-action",
                onClick: g[1] || (g[1] = (_) => n("revalidate"))
              }, " Refresh Check "),
              s("button", {
                class: "primary-action",
                onClick: g[2] || (g[2] = (_) => n("close"))
              }, " Done ")
            ])
          ])
        ])
      ])),
      r.value ? (a(), L(Il, {
        key: 0,
        identifier: r.value,
        "overlay-z-index": 10008,
        onClose: p,
        onSourceSaved: g[5] || (g[5] = (_) => n("revalidate"))
      }, null, 8, ["identifier"])) : y("", !0)
    ], 64));
  }
}), rc = /* @__PURE__ */ Se($x, [["__scopeId", "data-v-84048536"]]), Cx = { class: "repro-warning" }, xx = { class: "repro-warning-content" }, Sx = {
  key: 0,
  class: "warning-group"
}, Ix = { class: "warning-list" }, Ex = { key: 0 }, Tx = {
  key: 1,
  class: "warning-group"
}, Mx = { class: "warning-list" }, Px = { key: 0 }, Rx = /* @__PURE__ */ be({
  __name: "ReproducibilityWarningBanner",
  props: {
    warnings: {},
    message: { default: "Missing provenance can prevent another machine, or ComfyGit Cloud, from rebuilding this environment exactly. Review the missing details, or continue anyway." },
    maxItemsPerGroup: { default: 2 }
  },
  emits: ["review"],
  setup(e) {
    const t = e, o = R(() => t.warnings.models_without_sources || []), n = R(() => t.warnings.nodes_without_provenance || []), l = R(() => o.value.length), r = R(() => n.value.length), u = R(() => l.value + r.value), c = R(
      () => o.value.slice(0, t.maxItemsPerGroup)
    ), d = R(
      () => n.value.slice(0, t.maxItemsPerGroup)
    ), m = R(
      () => Math.max(0, l.value - c.value.length)
    ), v = R(
      () => Math.max(0, r.value - d.value.length)
    );
    return (p, w) => (a(), i("div", Cx, [
      w[3] || (w[3] = s("span", { class: "repro-warning-icon" }, "!", -1)),
      s("div", xx, [
        s("strong", null, f(u.value) + " reproducibility warning" + f(u.value !== 1 ? "s" : ""), 1),
        s("p", null, f(e.message), 1),
        l.value ? (a(), i("div", Sx, [
          w[1] || (w[1] = s("div", { class: "warning-group-label" }, " Models ", -1)),
          s("ul", Ix, [
            (a(!0), i(j, null, he(c.value, (g) => (a(), i("li", {
              key: g.hash || g.filename
            }, f(g.filename), 1))), 128)),
            m.value ? (a(), i("li", Ex, "+" + f(m.value) + " more model" + f(m.value !== 1 ? "s" : ""), 1)) : y("", !0)
          ])
        ])) : y("", !0),
        r.value ? (a(), i("div", Tx, [
          w[2] || (w[2] = s("div", { class: "warning-group-label" }, " Nodes ", -1)),
          s("ul", Mx, [
            (a(!0), i(j, null, he(d.value, (g) => (a(), i("li", {
              key: g.name
            }, f(g.name) + " (" + f(g.criticality) + ") ", 1))), 128)),
            v.value ? (a(), i("li", Px, "+" + f(v.value) + " more node" + f(v.value !== 1 ? "s" : ""), 1)) : y("", !0)
          ])
        ])) : y("", !0),
        s("button", {
          class: "review-issues-btn",
          onClick: w[0] || (w[0] = (g) => p.$emit("review"))
        }, " Review Issues ")
      ])
    ]));
  }
}), sl = /* @__PURE__ */ Se(Rx, [["__scopeId", "data-v-11be310d"]]), Lx = { class: "export-card" }, Nx = { class: "export-path-row" }, Dx = {
  key: 1,
  class: "export-warning"
}, Ox = { class: "export-footer-actions" }, Ux = /* @__PURE__ */ be({
  __name: "ExportSection",
  props: {
    environmentName: {},
    embedded: { type: Boolean }
  },
  emits: ["close"],
  setup(e) {
    const t = e, { validateExport: o, exportEnvWithForce: n, validateEnvironmentExport: l, exportEnvironmentWithForce: r } = vt(), u = k(""), c = k(!1), d = k(!1), m = k(!1), v = k(null), p = k(!1), w = k(null), g = k(!1), _ = k(!1), x = R(() => {
      var G;
      return ((G = t.environmentName) == null ? void 0 : G.trim()) || null;
    }), C = R(() => x.value ? `EXPORT ENVIRONMENT: ${x.value.toUpperCase()}` : "EXPORT ENVIRONMENT"), S = R(() => x.value ? `Environment '${x.value}' has been exported` : "Your environment has been exported"), T = R(() => c.value ? "Validating..." : d.value ? "Exporting..." : O.value ? "Export Anyway" : "Export Environment"), M = R(() => {
      var G;
      return ((G = w.value) == null ? void 0 : G.warnings) || {
        models_without_sources: [],
        nodes_without_provenance: []
      };
    }), P = R(
      () => M.value.models_without_sources.length
    ), D = R(
      () => {
        var G;
        return ((G = M.value.nodes_without_provenance) == null ? void 0 : G.length) || 0;
      }
    ), N = R(
      () => P.value + D.value
    ), O = R(
      () => {
        var G;
        return !!((G = w.value) != null && G.can_export) && N.value > 0;
      }
    );
    async function E() {
      c.value = !0;
      try {
        const G = x.value ? await l(x.value) : await o();
        return w.value = G, G;
      } catch (G) {
        return v.value = {
          status: "error",
          message: G instanceof Error ? G.message : "Validation failed"
        }, null;
      } finally {
        c.value = !1;
      }
    }
    async function K() {
      v.value = null;
      const G = await E();
      if (G) {
        if (!G.can_export) {
          g.value = !0;
          return;
        }
        await ue();
      }
    }
    async function ae() {
      g.value = !1;
      const G = await E();
      if (G) {
        if (!G.can_export) {
          g.value = !0;
          return;
        }
        await ue();
      }
    }
    async function fe() {
      await E();
    }
    async function ue() {
      d.value = !0;
      try {
        const G = x.value ? await r(x.value, u.value || void 0) : await n(u.value || void 0);
        v.value = G;
      } catch (G) {
        v.value = {
          status: "error",
          message: G instanceof Error ? G.message : "Export failed"
        };
      } finally {
        d.value = !1;
      }
    }
    async function we() {
      var G;
      if ((G = v.value) != null && G.path)
        try {
          await navigator.clipboard.writeText(v.value.path);
        } catch (Y) {
          console.error("Failed to copy path:", Y);
        }
    }
    async function X() {
      var G;
      if ((G = v.value) != null && G.path) {
        m.value = !0;
        try {
          const Y = await fetch(`/v2/comfygit/download?path=${encodeURIComponent(v.value.path)}`);
          if (!Y.ok)
            throw new Error(`Download failed: ${Y.statusText}`);
          const Re = await Y.blob(), se = URL.createObjectURL(Re), ge = v.value.path.split("/").pop() || "environment-export.tar.gz", z = document.createElement("a");
          z.href = se, z.download = ge, document.body.appendChild(z), z.click(), document.body.removeChild(z), URL.revokeObjectURL(se);
        } catch (Y) {
          console.error("Failed to download:", Y), alert(`Download failed: ${Y instanceof Error ? Y.message : "Unknown error"}`);
        } finally {
          m.value = !1;
        }
      }
    }
    return rt(() => {
      E();
    }), (G, Y) => (a(), i(j, null, [
      b(At, null, Yt({
        content: h(() => [
          O.value ? (a(), L(sl, {
            key: 0,
            class: "export-readiness-warning",
            warnings: M.value,
            message: "Missing provenance can prevent another machine, or ComfyGit Cloud, from rebuilding this environment exactly.",
            onReview: Y[1] || (Y[1] = (Re) => _.value = !0)
          }, null, 8, ["warnings"])) : y("", !0),
          b(St, { title: "EXPORT OPTIONS" }, {
            default: h(() => [
              s("div", Lx, [
                Y[8] || (Y[8] = s("div", { class: "export-card-header" }, [
                  s("span", { class: "export-icon" }, "📁"),
                  s("div", { class: "export-header-text" }, [
                    s("div", { class: "export-title" }, "Output Destination"),
                    s("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                s("div", Nx, [
                  b(ho, {
                    modelValue: u.value,
                    "onUpdate:modelValue": Y[2] || (Y[2] = (Re) => u.value = Re),
                    placeholder: "/mnt/c/Users/you/exports/",
                    class: "path-input"
                  }, null, 8, ["modelValue"])
                ])
              ])
            ]),
            _: 1
          }),
          v.value ? (a(), L(St, {
            key: 1,
            title: "LAST EXPORT"
          }, {
            default: h(() => [
              b(Vt, {
                status: v.value.status === "success" ? "synced" : "broken"
              }, Yt({
                icon: h(() => [
                  $(f(v.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: h(() => [
                  $(f(v.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: h(() => [
                  $(f(v.value.status === "success" ? S.value : v.value.message), 1)
                ]),
                _: 2
              }, [
                v.value.status === "success" ? {
                  name: "details",
                  fn: h(() => [
                    b(_t, { label: "Saved to:" }, {
                      default: h(() => [
                        b(EC, {
                          path: v.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    v.value.models_without_sources !== void 0 ? (a(), L(_t, {
                      key: 0,
                      label: "Models without sources:",
                      value: v.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : y("", !0),
                    v.value.models_without_sources && v.value.models_without_sources > 0 ? (a(), i("div", Dx, [...Y[9] || (Y[9] = [
                      s("span", { class: "warning-icon" }, "!", -1),
                      s("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : y("", !0)
                  ]),
                  key: "0"
                } : void 0,
                v.value.status === "success" ? {
                  name: "actions",
                  fn: h(() => [
                    b(Te, {
                      variant: "primary",
                      size: "sm",
                      loading: m.value,
                      onClick: X
                    }, {
                      default: h(() => [...Y[10] || (Y[10] = [
                        s("svg", {
                          width: "14",
                          height: "14",
                          viewBox: "0 0 16 16",
                          fill: "currentColor"
                        }, [
                          s("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                          s("path", { d: "M14 14H2v2h12v-2z" })
                        ], -1),
                        $(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["loading"]),
                    b(Te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: we
                    }, {
                      default: h(() => [...Y[11] || (Y[11] = [
                        $(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    b(Te, {
                      variant: "ghost",
                      size: "sm",
                      onClick: Y[3] || (Y[3] = (Re) => v.value = null)
                    }, {
                      default: h(() => [...Y[12] || (Y[12] = [
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
        footer: h(() => [
          s("div", Ox, [
            e.embedded ? (a(), L(Te, {
              key: 0,
              variant: "secondary",
              size: "md",
              disabled: d.value,
              onClick: Y[4] || (Y[4] = (Re) => G.$emit("close"))
            }, {
              default: h(() => [...Y[13] || (Y[13] = [
                $(" Cancel ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])) : y("", !0),
            b(Te, {
              variant: "primary",
              size: "md",
              loading: c.value || d.value,
              disabled: c.value || d.value,
              onClick: K
            }, {
              default: h(() => [
                $(f(T.value), 1)
              ]),
              _: 1
            }, 8, ["loading", "disabled"])
          ])
        ]),
        _: 2
      }, [
        e.embedded ? void 0 : {
          name: "header",
          fn: h(() => [
            b(zt, {
              title: C.value,
              "show-info": !0,
              onInfoClick: Y[0] || (Y[0] = (Re) => p.value = !0)
            }, null, 8, ["title"])
          ]),
          key: "0"
        }
      ]), 1024),
      b(ts, {
        show: p.value,
        title: "What Gets Exported",
        onClose: Y[5] || (Y[5] = (Re) => p.value = !1)
      }, {
        content: h(() => [...Y[14] || (Y[14] = [
          s("div", { class: "export-info" }, [
            s("div", { class: "info-section" }, [
              s("strong", null, "Included in Export:"),
              s("ul", null, [
                s("li", null, [
                  s("strong", null, "Workflows"),
                  $(" — All workflows in this environment")
                ]),
                s("li", null, [
                  s("strong", null, "Custom Nodes"),
                  $(" — Node definitions and dependencies")
                ]),
                s("li", null, [
                  s("strong", null, "Models"),
                  $(" — References and source URLs (not the files)")
                ]),
                s("li", null, [
                  s("strong", null, "Configuration"),
                  $(" — Environment settings and metadata")
                ])
              ])
            ]),
            s("div", { class: "info-section" }, [
              s("strong", null, "Use Cases:"),
              s("ul", null, [
                s("li", null, "Share environments with collaborators"),
                s("li", null, "Back up your setup for safekeeping"),
                s("li", null, "Import into other ComfyGit workspaces")
              ])
            ]),
            s("p", { class: "info-note" }, [
              s("strong", null, "Note:"),
              $(" Model files are not included to keep exports small. Models can be re-downloaded on import using their source information. ")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      g.value && w.value ? (a(), L(XC, {
        key: 0,
        issues: w.value.blocking_issues,
        onClose: Y[6] || (Y[6] = (Re) => g.value = !1),
        onCommitted: ae
      }, null, 8, ["issues"])) : y("", !0),
      _.value && w.value ? (a(), L(rc, {
        key: 1,
        warnings: w.value.warnings,
        onClose: Y[7] || (Y[7] = (Re) => _.value = !1),
        onRevalidate: fe
      }, null, 8, ["warnings"])) : y("", !0)
    ], 64));
  }
}), Ax = /* @__PURE__ */ Se(Ux, [["__scopeId", "data-v-6cf814a2"]]), zx = { class: "file-input-wrapper" }, Fx = ["accept", "multiple", "disabled"], Vx = /* @__PURE__ */ be({
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
  setup(e, { expose: t, emit: o }) {
    const n = o, l = k(null);
    function r() {
      var c;
      (c = l.value) == null || c.click();
    }
    function u(c) {
      const d = c.target;
      d.files && d.files.length > 0 && (n("change", d.files), d.value = "");
    }
    return t({
      triggerInput: r
    }), (c, d) => (a(), i("div", zx, [
      s("input", {
        ref_key: "fileInputRef",
        ref: l,
        type: "file",
        accept: e.accept,
        multiple: e.multiple,
        disabled: e.disabled,
        class: "file-input-hidden",
        onChange: u
      }, null, 40, Fx),
      b(Te, {
        variant: e.variant,
        size: e.size,
        disabled: e.disabled,
        onClick: r
      }, {
        default: h(() => [
          st(c.$slots, "default", {}, () => [
            d[0] || (d[0] = s("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              s("path", { d: "M8 4L4 8h3v4h2V8h3L8 4z" }),
              s("path", { d: "M2 14h12v-2H2v2z" })
            ], -1)),
            $(" " + f(e.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled"])
    ]));
  }
}), Bx = /* @__PURE__ */ Se(Vx, [["__scopeId", "data-v-cd192091"]]), Wx = {
  key: 0,
  class: "drop-zone-empty"
}, Gx = { class: "drop-zone-text" }, jx = { class: "drop-zone-primary" }, Hx = { class: "drop-zone-secondary" }, qx = { class: "drop-zone-actions" }, Kx = {
  key: 1,
  class: "drop-zone-file"
}, Jx = { class: "file-info" }, Qx = { class: "file-details" }, Yx = { class: "file-name" }, Xx = { class: "file-size" }, Zx = /* @__PURE__ */ be({
  __name: "FileDropZone",
  props: {
    accept: { default: "*/*" },
    multiple: { type: Boolean, default: !1 },
    primaryText: { default: "Drag & drop file here" },
    secondaryText: { default: "or click to browse" },
    buttonText: { default: "Browse Files" }
  },
  emits: ["fileSelected", "clear"],
  setup(e, { emit: t }) {
    const o = t, n = k(!1), l = k(null), r = k(0), u = R(() => l.value !== null), c = R(() => {
      var C;
      return ((C = l.value) == null ? void 0 : C.name) || "";
    }), d = R(() => {
      if (!l.value) return "";
      const C = l.value.size;
      return C < 1024 ? `${C} B` : C < 1024 * 1024 ? `${(C / 1024).toFixed(1)} KB` : C < 1024 * 1024 * 1024 ? `${(C / (1024 * 1024)).toFixed(1)} MB` : `${(C / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function m(C) {
      var S;
      C.stopPropagation(), r.value++, (S = C.dataTransfer) != null && S.types.includes("Files") && (n.value = !0);
    }
    function v(C) {
      C.stopPropagation(), C.dataTransfer && (C.dataTransfer.dropEffect = "copy");
    }
    function p(C) {
      C.stopPropagation(), r.value--, r.value === 0 && (n.value = !1);
    }
    function w(C) {
      var T;
      C.stopPropagation(), r.value = 0, n.value = !1;
      const S = (T = C.dataTransfer) == null ? void 0 : T.files;
      S && S.length > 0 && _(S[0]);
    }
    function g(C) {
      C.length > 0 && _(C[0]);
    }
    function _(C) {
      l.value = C, o("fileSelected", C);
    }
    function x() {
      l.value = null, o("clear");
    }
    return (C, S) => (a(), i("div", {
      class: Fe(["file-drop-zone", { "drop-active": n.value, "has-file": u.value }]),
      onDragenter: mt(m, ["prevent"]),
      onDragover: mt(v, ["prevent"]),
      onDragleave: mt(p, ["prevent"]),
      onDrop: mt(w, ["prevent"])
    }, [
      u.value ? (a(), i("div", Kx, [
        s("div", Jx, [
          S[1] || (S[1] = s("div", { class: "file-icon" }, "📦", -1)),
          s("div", Qx, [
            s("div", Yx, f(c.value), 1),
            s("div", Xx, f(d.value), 1)
          ])
        ]),
        b(Te, {
          variant: "ghost",
          size: "xs",
          onClick: x,
          title: "Remove file"
        }, {
          default: h(() => [...S[2] || (S[2] = [
            s("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              s("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
            ], -1)
          ])]),
          _: 1
        })
      ])) : (a(), i("div", Wx, [
        S[0] || (S[0] = s("div", { class: "drop-zone-icon" }, [
          s("svg", {
            width: "32",
            height: "32",
            viewBox: "0 0 16 16",
            fill: "currentColor"
          }, [
            s("path", { d: "M8 4L4 8h3v4h2V8h3L8 4z" }),
            s("path", { d: "M2 14h12v-2H2v2z" })
          ])
        ], -1)),
        s("div", Gx, [
          s("p", jx, f(e.primaryText), 1),
          s("p", Hx, f(e.secondaryText), 1)
        ]),
        s("div", qx, [
          b(Bx, {
            accept: e.accept,
            multiple: e.multiple,
            variant: "primary",
            size: "sm",
            onChange: g
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
}), e3 = /* @__PURE__ */ Se(Zx, [["__scopeId", "data-v-0f79cb86"]]), t3 = { class: "commit-hash" }, s3 = /* @__PURE__ */ be({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(e) {
    const t = e, o = R(() => t.hash.slice(0, t.length));
    return (n, l) => (a(), i("span", t3, f(o.value), 1));
  }
}), cc = /* @__PURE__ */ Se(s3, [["__scopeId", "data-v-7c333cc6"]]), o3 = { class: "import-preview" }, n3 = { class: "preview-header" }, a3 = {
  key: 0,
  class: "source-env"
}, l3 = { class: "preview-content" }, i3 = { class: "preview-section" }, r3 = { class: "section-header" }, c3 = { class: "section-info" }, u3 = { class: "section-count" }, d3 = {
  key: 0,
  class: "item-list"
}, f3 = { class: "item-name" }, m3 = {
  key: 0,
  class: "item-more"
}, v3 = { class: "preview-section" }, p3 = { class: "section-header" }, g3 = { class: "section-info" }, h3 = { class: "section-count" }, y3 = {
  key: 0,
  class: "item-list"
}, w3 = { class: "item-details" }, _3 = { class: "item-name" }, k3 = { class: "item-meta" }, b3 = {
  key: 0,
  class: "item-more"
}, $3 = { class: "preview-section" }, C3 = { class: "section-header" }, x3 = { class: "section-info" }, S3 = { class: "section-count" }, I3 = {
  key: 0,
  class: "item-list"
}, E3 = { class: "item-name" }, T3 = {
  key: 0,
  class: "item-more"
}, M3 = {
  key: 0,
  class: "preview-section"
}, P3 = { class: "git-info" }, R3 = /* @__PURE__ */ be({
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
    const t = e, o = R(() => t.workflows.length), n = R(() => t.models.length), l = R(() => t.nodes.length);
    function r(u) {
      return u < 1024 ? `${u} B` : u < 1024 * 1024 ? `${(u / 1024).toFixed(1)} KB` : u < 1024 * 1024 * 1024 ? `${(u / (1024 * 1024)).toFixed(1)} MB` : `${(u / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (u, c) => (a(), i("div", o3, [
      s("div", n3, [
        b(as, null, {
          default: h(() => [...c[0] || (c[0] = [
            $("Import Preview", -1)
          ])]),
          _: 1
        }),
        e.sourceEnvironment ? (a(), i("span", a3, [
          c[1] || (c[1] = $(" From: ", -1)),
          b(tl, null, {
            default: h(() => [
              $(f(e.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : y("", !0)
      ]),
      s("div", l3, [
        s("div", i3, [
          s("div", r3, [
            c[3] || (c[3] = s("div", { class: "section-icon" }, "📄", -1)),
            s("div", c3, [
              c[2] || (c[2] = s("div", { class: "section-title" }, "Workflows", -1)),
              s("div", u3, f(o.value) + " file" + f(o.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.workflows.length > 0 ? (a(), i("div", d3, [
            (a(!0), i(j, null, he(e.workflows.slice(0, e.maxPreviewItems), (d) => (a(), i("div", {
              key: d,
              class: "preview-item"
            }, [
              c[4] || (c[4] = s("span", { class: "item-bullet" }, "•", -1)),
              s("span", f3, f(d), 1)
            ]))), 128)),
            e.workflows.length > e.maxPreviewItems ? (a(), i("div", m3, " +" + f(e.workflows.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        s("div", v3, [
          s("div", p3, [
            c[6] || (c[6] = s("div", { class: "section-icon" }, "🎨", -1)),
            s("div", g3, [
              c[5] || (c[5] = s("div", { class: "section-title" }, "Models", -1)),
              s("div", h3, f(n.value) + " file" + f(n.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.models.length > 0 ? (a(), i("div", y3, [
            (a(!0), i(j, null, he(e.models.slice(0, e.maxPreviewItems), (d) => (a(), i("div", {
              key: d.filename,
              class: "preview-item"
            }, [
              c[7] || (c[7] = s("span", { class: "item-bullet" }, "•", -1)),
              s("div", w3, [
                s("span", _3, f(d.filename), 1),
                s("span", k3, f(r(d.size)) + " • " + f(d.type), 1)
              ])
            ]))), 128)),
            e.models.length > e.maxPreviewItems ? (a(), i("div", b3, " +" + f(e.models.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        s("div", $3, [
          s("div", C3, [
            c[9] || (c[9] = s("div", { class: "section-icon" }, "🔌", -1)),
            s("div", x3, [
              c[8] || (c[8] = s("div", { class: "section-title" }, "Custom Nodes", -1)),
              s("div", S3, f(l.value) + " node" + f(l.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.nodes.length > 0 ? (a(), i("div", I3, [
            (a(!0), i(j, null, he(e.nodes.slice(0, e.maxPreviewItems), (d) => (a(), i("div", {
              key: d,
              class: "preview-item"
            }, [
              c[10] || (c[10] = s("span", { class: "item-bullet" }, "•", -1)),
              s("span", E3, f(d), 1)
            ]))), 128)),
            e.nodes.length > e.maxPreviewItems ? (a(), i("div", T3, " +" + f(e.nodes.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        e.gitBranch || e.gitCommit ? (a(), i("div", M3, [
          c[11] || (c[11] = s("div", { class: "section-header" }, [
            s("div", { class: "section-icon" }, "🌿"),
            s("div", { class: "section-info" }, [
              s("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          s("div", P3, [
            e.gitBranch ? (a(), L(_t, {
              key: 0,
              label: "Branch"
            }, {
              default: h(() => [
                b(tl, null, {
                  default: h(() => [
                    $(f(e.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : y("", !0),
            e.gitCommit ? (a(), L(_t, {
              key: 1,
              label: "Commit"
            }, {
              default: h(() => [
                b(cc, { hash: e.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : y("", !0)
          ])
        ])) : y("", !0)
      ])
    ]));
  }
}), L3 = /* @__PURE__ */ Se(R3, [["__scopeId", "data-v-182fe113"]]), N3 = { class: "import-config" }, D3 = { class: "config-container" }, O3 = { class: "config-field" }, U3 = { class: "input-wrapper" }, A3 = ["value"], z3 = {
  key: 0,
  class: "validating-indicator"
}, F3 = {
  key: 1,
  class: "valid-indicator"
}, V3 = {
  key: 0,
  class: "field-error"
}, B3 = { class: "config-field" }, W3 = { class: "strategy-options" }, G3 = ["value", "checked", "onChange"], j3 = { class: "strategy-content" }, H3 = { class: "strategy-label" }, q3 = { class: "strategy-description" }, K3 = { class: "config-field switch-field" }, J3 = { class: "switch-label" }, Q3 = ["checked"], Y3 = { class: "advanced-section" }, X3 = { class: "advanced-content" }, Z3 = { class: "config-field" }, e5 = ["value"], t5 = ["value"], s5 = /* @__PURE__ */ be({
  __name: "ImportConfigForm",
  props: {
    name: {},
    modelStrategy: {},
    torchBackend: {},
    switchAfterImport: { type: Boolean },
    nameError: {}
  },
  emits: ["update:name", "update:modelStrategy", "update:torchBackend", "update:switchAfterImport", "validate-name"],
  setup(e, { emit: t }) {
    const o = e, n = t, l = k(!1), r = k(!1);
    kt(() => o.nameError, (v) => {
      l.value = !1, r.value = !v && o.name.length > 0;
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
    function d(v) {
      const p = v.target.value;
      n("update:name", p), r.value = !1, c && clearTimeout(c), p.length > 0 ? (l.value = !0, c = setTimeout(() => {
        n("validate-name", p);
      }, 400)) : l.value = !1;
    }
    function m() {
      o.name.length > 0 && n("validate-name", o.name);
    }
    return (v, p) => (a(), i("div", N3, [
      b(as, null, {
        default: h(() => [...p[2] || (p[2] = [
          $("Configuration", -1)
        ])]),
        _: 1
      }),
      s("div", D3, [
        s("div", O3, [
          b(Rn, { required: "" }, {
            default: h(() => [...p[3] || (p[3] = [
              $("Environment Name", -1)
            ])]),
            _: 1
          }),
          s("div", U3, [
            s("input", {
              type: "text",
              class: Fe(["name-input", { error: e.nameError || e.name.length === 0, valid: r.value }]),
              value: e.name,
              placeholder: "my-imported-env",
              onInput: d,
              onBlur: m
            }, null, 42, A3),
            l.value ? (a(), i("span", z3, "...")) : r.value ? (a(), i("span", F3, "✓")) : y("", !0)
          ]),
          e.nameError ? (a(), i("div", V3, f(e.nameError), 1)) : y("", !0),
          p[4] || (p[4] = s("div", { class: "field-hint" }, "Creates a new environment with this name", -1))
        ]),
        s("div", B3, [
          b(Rn, null, {
            default: h(() => [...p[5] || (p[5] = [
              $("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          s("div", W3, [
            (a(), i(j, null, he(u, (w) => s("label", {
              key: w.value,
              class: Fe(["strategy-option", { active: e.modelStrategy === w.value }])
            }, [
              s("input", {
                type: "radio",
                name: "model-strategy",
                value: w.value,
                checked: e.modelStrategy === w.value,
                onChange: (g) => n("update:modelStrategy", w.value)
              }, null, 40, G3),
              s("div", j3, [
                s("span", H3, f(w.label), 1),
                s("span", q3, f(w.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        s("div", K3, [
          s("label", J3, [
            s("input", {
              type: "checkbox",
              checked: e.switchAfterImport,
              onChange: p[0] || (p[0] = (w) => n("update:switchAfterImport", w.target.checked))
            }, null, 40, Q3),
            p[6] || (p[6] = s("span", null, "Switch to this environment after import", -1))
          ])
        ]),
        s("details", Y3, [
          p[8] || (p[8] = s("summary", { class: "advanced-toggle" }, "Advanced Options", -1)),
          s("div", X3, [
            s("div", Z3, [
              b(Rn, null, {
                default: h(() => [...p[7] || (p[7] = [
                  $("PyTorch Backend", -1)
                ])]),
                _: 1
              }),
              s("select", {
                class: "backend-select",
                value: e.torchBackend,
                onChange: p[1] || (p[1] = (w) => n("update:torchBackend", w.target.value))
              }, [
                (a(!0), i(j, null, he(tt(Tl), (w) => (a(), i("option", {
                  key: w,
                  value: w
                }, f(w) + f(w === "auto" ? " (detect GPU)" : ""), 9, t5))), 128))
              ], 40, e5)
            ])
          ])
        ])
      ])
    ]));
  }
}), o5 = /* @__PURE__ */ Se(s5, [["__scopeId", "data-v-89ea06a1"]]), n5 = { class: "import-flow" }, a5 = {
  key: 0,
  class: "import-empty"
}, l5 = { class: "git-import-section" }, i5 = { class: "git-url-input-row" }, r5 = ["disabled"], c5 = {
  key: 0,
  class: "git-error"
}, u5 = {
  key: 1,
  class: "import-configure"
}, d5 = { class: "selected-file-bar" }, f5 = {
  key: 0,
  class: "file-bar-content"
}, m5 = { class: "file-bar-info" }, v5 = { class: "file-bar-name" }, p5 = { class: "file-bar-size" }, g5 = {
  key: 1,
  class: "file-bar-content"
}, h5 = { class: "file-bar-info" }, y5 = { class: "file-bar-name" }, w5 = {
  key: 0,
  class: "preview-loading"
}, _5 = { class: "import-actions" }, k5 = {
  key: 2,
  class: "import-progress"
}, b5 = { class: "creating-intro" }, $5 = {
  key: 0,
  class: "progress-warning"
}, C5 = {
  key: 1,
  class: "import-error"
}, x5 = { class: "error-message" }, S5 = {
  key: 3,
  class: "import-complete"
}, I5 = { class: "complete-message" }, E5 = { class: "complete-title" }, T5 = { class: "complete-details" }, M5 = { class: "complete-actions" }, P5 = /* @__PURE__ */ be({
  __name: "ImportFlow",
  props: {
    workspacePath: {},
    resumeImport: { type: Boolean },
    initialProgress: {}
  },
  emits: ["import-complete", "import-started", "source-cleared"],
  setup(e, { expose: t, emit: o }) {
    var Ee, H, ee, q;
    const n = e, l = o, { previewTarballImport: r, previewGitImport: u, validateEnvironmentName: c, executeImport: d, executeGitImport: m, getImportProgress: v } = vt();
    let p = null;
    const w = k(null), g = k(n.resumeImport ?? !1), _ = k(!1), x = k(!1), C = k(""), S = k(!1), T = k(null), M = k(""), P = k(null), D = k(!1), N = k(null), O = k(null), E = k({
      name: ((Ee = n.initialProgress) == null ? void 0 : Ee.environmentName) ?? "",
      modelStrategy: "required",
      torchBackend: "auto",
      switchAfterImport: !0
    }), K = k(null), ae = k({
      message: ((H = n.initialProgress) == null ? void 0 : H.message) ?? "Preparing import...",
      phase: ((ee = n.initialProgress) == null ? void 0 : ee.phase) ?? "",
      progress: ((q = n.initialProgress) == null ? void 0 : q.progress) ?? 0,
      error: null
    }), fe = [
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 15 },
      { id: "extract_builtins", label: "Extract builtin nodes", progressThreshold: 20 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 35 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 60 },
      { id: "sync_nodes", label: "Sync custom nodes", progressThreshold: 70 },
      { id: "copy_workflows", label: "Copy workflows", progressThreshold: 80 },
      { id: "resolve_models", label: "Resolve models", progressThreshold: 85 },
      { id: "download_models", label: "Download models", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], ue = R(() => {
      if (!O.value)
        return {
          sourceEnvironment: "",
          workflows: [],
          models: [],
          nodes: [],
          gitBranch: void 0,
          gitCommit: void 0
        };
      const Z = O.value;
      return {
        sourceEnvironment: Z.comfyui_version ? `ComfyUI ${Z.comfyui_version}` : "Unknown",
        workflows: Z.workflows.map((xe) => xe.name),
        models: Z.models.map((xe) => ({
          filename: xe.filename,
          size: 0,
          type: xe.relative_path.split("/")[0] || "model"
        })),
        nodes: Z.nodes.map((xe) => xe.name),
        gitBranch: void 0,
        gitCommit: void 0
      };
    }), we = R(() => !S.value && !T.value && O.value && E.value.name.length > 0 && !K.value && (w.value || P.value));
    async function X(Z) {
      w.value = Z, S.value = !0, T.value = null, O.value = null;
      try {
        const xe = await r(Z);
        O.value = xe;
      } catch (xe) {
        T.value = xe instanceof Error ? xe.message : "Failed to analyze file", console.error("Preview error:", xe);
      } finally {
        S.value = !1;
      }
    }
    function G() {
      w.value = null, P.value = null, M.value = "", N.value = null, _.value = !1, x.value = !1, C.value = "", O.value = null, T.value = null, E.value = { name: "", modelStrategy: "required", torchBackend: "auto", switchAfterImport: !0 }, K.value = null, l("source-cleared");
    }
    function Y() {
      Pe(), G(), g.value = !1, S.value = !1, D.value = !1, ae.value = {
        message: "Preparing import...",
        phase: "",
        progress: 0,
        error: null
      };
    }
    async function Re() {
      if (M.value.trim()) {
        D.value = !0, N.value = null;
        try {
          const Z = await u(M.value.trim());
          P.value = M.value.trim(), O.value = Z;
        } catch (Z) {
          N.value = Z instanceof Error ? Z.message : "Failed to analyze repository";
        } finally {
          D.value = !1;
        }
      }
    }
    function se(Z) {
      try {
        const xe = new URL(Z);
        return xe.host + xe.pathname.replace(/\.git$/, "");
      } catch {
        return Z;
      }
    }
    async function ge(Z) {
      if (!Z) {
        K.value = "Environment name is required";
        return;
      }
      try {
        const xe = await c(Z);
        K.value = xe.valid ? null : xe.error || "Invalid name";
      } catch {
        K.value = "Failed to validate name";
      }
    }
    async function z() {
      if (E.value.name && !(!w.value && !P.value)) {
        g.value = !0, _.value = !1, ae.value = { message: `Creating environment '${E.value.name}'...`, phase: "", progress: 0, error: null }, l("import-started");
        try {
          let Z;
          if (w.value)
            Z = await d(
              w.value,
              E.value.name,
              E.value.modelStrategy,
              E.value.torchBackend
            );
          else if (P.value)
            Z = await m(
              P.value,
              E.value.name,
              E.value.modelStrategy,
              E.value.torchBackend
            );
          else
            throw new Error("No import source selected");
          Z.status === "started" ? me() : (x.value = !1, C.value = Z.message, g.value = !1, _.value = !0);
        } catch (Z) {
          x.value = !1, C.value = Z instanceof Error ? Z.message : "Unknown error occurred during import", g.value = !1, _.value = !0;
        }
      }
    }
    async function me() {
      if (p) return;
      const Z = async () => {
        try {
          const ce = await v();
          return ae.value = {
            message: ce.message,
            phase: ce.phase || "",
            progress: ce.progress ?? (ce.state === "importing" ? 50 : 0),
            error: ce.error || null
          }, ce.state === "complete" ? (Pe(), x.value = !0, C.value = `Environment '${ce.environment_name}' created successfully`, g.value = !1, _.value = !0, ce.environment_name && l("import-complete", ce.environment_name, E.value.switchAfterImport), !1) : ce.state === "error" ? (Pe(), x.value = !1, C.value = ce.error || ce.message, g.value = !1, _.value = !0, !1) : !0;
        } catch (ce) {
          return console.error("Failed to poll import progress:", ce), !0;
        }
      };
      await Z() && (p = setInterval(async () => {
        await Z() || Pe();
      }, 2e3));
    }
    function Pe() {
      p && (clearInterval(p), p = null);
    }
    function We(Z) {
      return Z < 1024 ? `${Z} B` : Z < 1024 * 1024 ? `${(Z / 1024).toFixed(1)} KB` : Z < 1024 * 1024 * 1024 ? `${(Z / (1024 * 1024)).toFixed(1)} MB` : `${(Z / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return rt(async () => {
      try {
        const Z = await v();
        console.log("[ComfyGit ImportFlow] Import progress check:", Z.state, Z), Z.state === "importing" && (console.log("[ComfyGit ImportFlow] Resuming in-progress import:", Z.environment_name), g.value = !0, E.value.name = Z.environment_name || E.value.name || "", ae.value = {
          progress: Z.progress ?? 0,
          message: Z.message || "Importing...",
          phase: Z.phase || "",
          error: null
        }, me());
      } catch (Z) {
        console.log("[ComfyGit ImportFlow] Import progress check failed:", Z);
      }
    }), t({
      handleReset: Y,
      isImporting: g,
      canImport: we
    }), (Z, xe) => {
      var ce;
      return a(), i("div", n5, [
        !w.value && !P.value && !g.value ? (a(), i("div", a5, [
          b(e3, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: X
          }),
          xe[7] || (xe[7] = s("div", { class: "import-divider" }, [
            s("span", null, "or")
          ], -1)),
          s("div", l5, [
            xe[5] || (xe[5] = s("div", { class: "git-import-header" }, "Import from Git Repository", -1)),
            s("div", i5, [
              Tt(s("input", {
                type: "text",
                class: "git-url-input",
                "onUpdate:modelValue": xe[0] || (xe[0] = (le) => M.value = le),
                placeholder: "https://github.com/user/repo.git",
                onKeyup: fs(Re, ["enter"]),
                disabled: D.value
              }, null, 40, r5), [
                [Xo, M.value]
              ]),
              b(Te, {
                variant: "primary",
                size: "sm",
                disabled: !M.value.trim() || D.value,
                onClick: Re
              }, {
                default: h(() => [
                  $(f(D.value ? "Analyzing..." : "ANALYZE"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            N.value ? (a(), i("div", c5, f(N.value), 1)) : y("", !0),
            xe[6] || (xe[6] = s("div", { class: "git-url-hint" }, "Paste a GitHub URL to preview the environment", -1))
          ])
        ])) : (w.value || P.value) && !g.value && !_.value ? (a(), i("div", u5, [
          s("div", d5, [
            w.value ? (a(), i("div", f5, [
              xe[8] || (xe[8] = s("div", { class: "file-bar-icon" }, "📦", -1)),
              s("div", m5, [
                s("div", v5, f(w.value.name), 1),
                s("div", p5, f(We(w.value.size)), 1)
              ])
            ])) : P.value ? (a(), i("div", g5, [
              xe[10] || (xe[10] = s("div", { class: "file-bar-icon" }, "🔗", -1)),
              s("div", h5, [
                s("div", y5, f(se(P.value)), 1),
                xe[9] || (xe[9] = s("div", { class: "file-bar-size" }, "Git Repository", -1))
              ])
            ])) : y("", !0),
            b(Te, {
              variant: "ghost",
              size: "sm",
              onClick: G
            }, {
              default: h(() => [...xe[11] || (xe[11] = [
                $(" Change Source ", -1)
              ])]),
              _: 1
            })
          ]),
          S.value ? (a(), i("div", w5, [...xe[12] || (xe[12] = [
            s("div", { class: "loading-spinner" }, null, -1),
            s("div", { class: "loading-text" }, "Analyzing import file...", -1)
          ])])) : T.value ? (a(), L(us, {
            key: 1,
            type: "error",
            title: "Failed to Analyze File",
            details: [T.value]
          }, null, 8, ["details"])) : O.value ? (a(), L(L3, {
            key: 2,
            "source-environment": ue.value.sourceEnvironment,
            workflows: ue.value.workflows,
            models: ue.value.models,
            nodes: ue.value.nodes,
            "git-branch": ue.value.gitBranch,
            "git-commit": ue.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : y("", !0),
          O.value ? (a(), L(o5, {
            key: 3,
            name: E.value.name,
            "onUpdate:name": xe[1] || (xe[1] = (le) => E.value.name = le),
            "model-strategy": E.value.modelStrategy,
            "onUpdate:modelStrategy": xe[2] || (xe[2] = (le) => E.value.modelStrategy = le),
            "torch-backend": E.value.torchBackend,
            "onUpdate:torchBackend": xe[3] || (xe[3] = (le) => E.value.torchBackend = le),
            "switch-after-import": E.value.switchAfterImport,
            "onUpdate:switchAfterImport": xe[4] || (xe[4] = (le) => E.value.switchAfterImport = le),
            "name-error": K.value,
            onValidateName: ge
          }, null, 8, ["name", "model-strategy", "torch-backend", "switch-after-import", "name-error"])) : y("", !0),
          E.value.modelStrategy === "skip" && ((ce = O.value) != null && ce.models_needing_download) ? (a(), L(us, {
            key: 4,
            type: "warning",
            title: "Models Will Not Be Downloaded",
            details: [
              `${O.value.models_needing_download} model(s) will need to be downloaded later`,
              "You can resolve missing models from the STATUS page after import"
            ]
          }, null, 8, ["details"])) : y("", !0),
          s("div", _5, [
            b(Te, {
              variant: "secondary",
              size: "md",
              onClick: G
            }, {
              default: h(() => [...xe[13] || (xe[13] = [
                $(" Cancel ", -1)
              ])]),
              _: 1
            }),
            b(Te, {
              variant: "primary",
              size: "md",
              disabled: !we.value,
              onClick: z
            }, {
              default: h(() => [...xe[14] || (xe[14] = [
                $(" Create Environment ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : g.value ? (a(), i("div", k5, [
          s("p", b5, [
            xe[15] || (xe[15] = $(" Importing environment ", -1)),
            s("strong", null, f(E.value.name), 1),
            xe[16] || (xe[16] = $("... ", -1))
          ]),
          b(Hn, {
            progress: ae.value.progress,
            message: ae.value.message,
            "current-phase": ae.value.phase,
            variant: ae.value.error ? "error" : "default",
            "show-steps": !0,
            steps: fe
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          ae.value.error ? y("", !0) : (a(), i("p", $5, " This may take several minutes. Please wait... ")),
          ae.value.error ? (a(), i("div", C5, [
            s("p", x5, f(ae.value.error), 1)
          ])) : y("", !0)
        ])) : _.value ? (a(), i("div", S5, [
          s("div", {
            class: Fe(["complete-icon", x.value ? "success" : "error"])
          }, f(x.value ? "✓" : "✕"), 3),
          s("div", I5, [
            s("div", E5, f(x.value ? "Import Successful" : "Import Failed"), 1),
            s("div", T5, f(C.value), 1)
          ]),
          s("div", M5, [
            b(Te, {
              variant: "primary",
              size: "md",
              onClick: Y
            }, {
              default: h(() => [...xe[17] || (xe[17] = [
                $(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : y("", !0)
      ]);
    };
  }
}), uc = /* @__PURE__ */ Se(P5, [["__scopeId", "data-v-72cbc04e"]]), R5 = /* @__PURE__ */ be({
  __name: "ImportSection",
  props: {
    embedded: { type: Boolean }
  },
  emits: ["import-complete-switch"],
  setup(e, { emit: t }) {
    const o = t, n = k(!1);
    function l(r, u) {
      u && o("import-complete-switch", r);
    }
    return (r, u) => (a(), i(j, null, [
      b(At, null, Yt({
        content: h(() => [
          b(uc, { onImportComplete: l })
        ]),
        _: 2
      }, [
        e.embedded ? void 0 : {
          name: "header",
          fn: h(() => [
            b(zt, {
              title: "IMPORT ENVIRONMENT",
              "show-info": !0,
              onInfoClick: u[0] || (u[0] = (c) => n.value = !0)
            })
          ]),
          key: "0"
        }
      ]), 1024),
      b(ts, {
        show: n.value,
        title: "How Import Works",
        onClose: u[1] || (u[1] = (c) => n.value = !1)
      }, {
        content: h(() => [...u[2] || (u[2] = [
          s("div", { class: "help-steps" }, [
            s("div", { class: "help-step" }, [
              s("span", { class: "step-number" }, "1"),
              s("div", { class: "step-content" }, [
                s("strong", null, "Creates a New Environment"),
                s("p", null, "Import does not modify your current environment - it creates a brand new one")
              ])
            ]),
            s("div", { class: "help-step" }, [
              s("span", { class: "step-number" }, "2"),
              s("div", { class: "step-content" }, [
                s("strong", null, "Preview Before Import"),
                s("p", null, "See what nodes, models, and workflows will be set up")
              ])
            ]),
            s("div", { class: "help-step" }, [
              s("span", { class: "step-number" }, "3"),
              s("div", { class: "step-content" }, [
                s("strong", null, "Choose Model Strategy"),
                s("p", null, "Download all models, only required ones, or skip for later")
              ])
            ]),
            s("div", { class: "help-step" }, [
              s("span", { class: "step-number" }, "4"),
              s("div", { class: "step-content" }, [
                s("strong", null, "Switch When Ready"),
                s("p", null, "After creation, switch to the new environment to start using it")
              ])
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), L5 = /* @__PURE__ */ Se(R5, [["__scopeId", "data-v-41b1f298"]]), N5 = { class: "base-tabs" }, D5 = ["disabled", "onClick"], O5 = {
  key: 0,
  class: "base-tabs__badge"
}, U5 = /* @__PURE__ */ be({
  __name: "BaseTabs",
  props: {
    tabs: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, n = t;
    function l(r) {
      var u;
      (u = o.tabs.find((c) => c.id === r)) != null && u.disabled || n("update:modelValue", r);
    }
    return (r, u) => (a(), i("div", N5, [
      (a(!0), i(j, null, he(e.tabs, (c) => (a(), i("button", {
        key: c.id,
        class: Fe([
          "base-tabs__tab",
          {
            active: e.modelValue === c.id,
            disabled: c.disabled
          }
        ]),
        disabled: c.disabled,
        onClick: (d) => l(c.id)
      }, [
        $(f(c.label) + " ", 1),
        c.badge ? (a(), i("span", O5, f(c.badge), 1)) : y("", !0)
      ], 10, D5))), 128))
    ]));
  }
}), Ml = /* @__PURE__ */ Se(U5, [["__scopeId", "data-v-ad5e6cad"]]), A5 = { class: "commit-list" }, z5 = /* @__PURE__ */ be({
  __name: "CommitList",
  setup(e) {
    return (t, o) => (a(), i("div", A5, [
      st(t.$slots, "default", {}, void 0)
    ]));
  }
}), dc = /* @__PURE__ */ Se(z5, [["__scopeId", "data-v-8c5ee761"]]), F5 = { class: "commit-message" }, V5 = { class: "commit-date" }, B5 = /* @__PURE__ */ be({
  __name: "CommitItem",
  props: {
    hash: {},
    message: {},
    relativeDate: {},
    clickable: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const o = e, n = t;
    function l() {
      o.clickable && n("click");
    }
    return (r, u) => (a(), i("div", {
      class: Fe(["commit-item", { clickable: e.clickable }]),
      onClick: l
    }, [
      b(cc, { hash: e.hash }, null, 8, ["hash"]),
      s("span", F5, f(e.message), 1),
      s("span", V5, f(e.relativeDate), 1),
      r.$slots.actions ? (a(), i("div", {
        key: 0,
        class: "commit-actions",
        onClick: u[0] || (u[0] = mt(() => {
        }, ["stop"]))
      }, [
        st(r.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), fc = /* @__PURE__ */ Se(B5, [["__scopeId", "data-v-dd7c621b"]]), W5 = /* @__PURE__ */ be({
  __name: "HistorySection",
  props: {
    commits: {},
    currentRef: {},
    embedded: { type: Boolean }
  },
  emits: ["select", "checkout"],
  setup(e) {
    const t = e, o = R(() => `HISTORY (${t.currentRef || "detached"})`);
    return (n, l) => (a(), L(At, null, Yt({
      content: h(() => [
        e.commits.length === 0 ? (a(), L(cs, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (a(), L(dc, { key: 1 }, {
          default: h(() => [
            (a(!0), i(j, null, he(e.commits, (r) => (a(), L(fc, {
              key: r.hash,
              hash: r.short_hash || r.hash,
              message: r.message,
              "relative-date": r.date_relative || r.relative_date,
              onClick: (u) => n.$emit("select", r)
            }, {
              actions: h(() => [
                b(Te, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (u) => n.$emit("checkout", r),
                  title: "Checkout this commit"
                }, {
                  default: h(() => [...l[0] || (l[0] = [
                    s("svg", {
                      width: "12",
                      height: "12",
                      viewBox: "0 0 16 16",
                      fill: "currentColor"
                    }, [
                      s("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" })
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
        fn: h(() => [
          b(zt, { title: o.value }, null, 8, ["title"])
        ]),
        key: "0"
      }
    ]), 1024));
  }
}), G5 = /* @__PURE__ */ Se(W5, [["__scopeId", "data-v-fa4bf3a1"]]), j5 = { class: "branch-create-form" }, H5 = { class: "form-actions" }, q5 = /* @__PURE__ */ be({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(e, { emit: t }) {
    const o = t, n = k(""), l = R(() => {
      const c = n.value.trim();
      return c.length > 0 && !c.startsWith("-") && !c.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(c);
    });
    function r() {
      l.value && (o("create", n.value.trim()), n.value = "");
    }
    function u() {
      n.value = "", o("cancel");
    }
    return (c, d) => (a(), i("div", j5, [
      b(ho, {
        modelValue: n.value,
        "onUpdate:modelValue": d[0] || (d[0] = (m) => n.value = m),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: r,
        onEscape: u
      }, null, 8, ["modelValue"]),
      s("div", H5, [
        b(Te, {
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
        b(Te, {
          variant: "secondary",
          size: "sm",
          onClick: u
        }, {
          default: h(() => [...d[2] || (d[2] = [
            $(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), K5 = /* @__PURE__ */ Se(q5, [["__scopeId", "data-v-7c500394"]]), J5 = { class: "branch-list-item__indicator" }, Q5 = { class: "branch-list-item__name" }, Y5 = {
  key: 0,
  class: "branch-list-item__actions"
}, X5 = {
  key: 0,
  class: "branch-list-item__current-label"
}, Z5 = /* @__PURE__ */ be({
  __name: "BranchListItem",
  props: {
    branchName: {},
    isCurrent: { type: Boolean, default: !1 },
    clickable: { type: Boolean, default: !1 },
    showCurrentLabel: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(e) {
    return (t, o) => (a(), i("div", {
      class: Fe(["branch-list-item", { current: e.isCurrent, clickable: e.clickable }]),
      onClick: o[0] || (o[0] = (n) => e.clickable && t.$emit("click"))
    }, [
      s("span", J5, f(e.isCurrent ? "●" : "○"), 1),
      s("span", Q5, f(e.branchName), 1),
      t.$slots.actions || e.showCurrentLabel ? (a(), i("div", Y5, [
        st(t.$slots, "actions", {}, void 0),
        e.isCurrent && e.showCurrentLabel ? (a(), i("span", X5, " current ")) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), eS = /* @__PURE__ */ Se(Z5, [["__scopeId", "data-v-c6581a24"]]), tS = { class: "header-info" }, sS = { class: "branch-name" }, oS = {
  key: 0,
  class: "current-badge"
}, nS = { class: "branch-meta" }, aS = { key: 0 }, lS = {
  key: 0,
  class: "meta-note"
}, iS = {
  key: 0,
  class: "loading"
}, rS = {
  key: 1,
  class: "empty-state"
}, cS = /* @__PURE__ */ be({
  __name: "BranchDetailModal",
  props: {
    branchName: {},
    isCurrent: { type: Boolean }
  },
  emits: ["close", "delete", "switch"],
  setup(e) {
    const t = e, { getBranchHistory: o } = vt(), n = k([]), l = k(!1), r = k(!0);
    return rt(async () => {
      try {
        const u = await o(t.branchName, 50);
        n.value = u.commits, l.value = u.has_more;
      } finally {
        r.value = !1;
      }
    }), (u, c) => (a(), L(It, {
      size: "md",
      "show-close-button": !1,
      onClose: c[3] || (c[3] = (d) => u.$emit("close"))
    }, {
      header: h(() => [
        s("div", tS, [
          c[4] || (c[4] = s("h3", { class: "header-title" }, "BRANCH", -1)),
          s("span", sS, f(e.branchName), 1),
          e.isCurrent ? (a(), i("span", oS, "CURRENT")) : y("", !0)
        ]),
        b(Ne, {
          variant: "ghost",
          size: "sm",
          onClick: c[0] || (c[0] = (d) => u.$emit("close"))
        }, {
          default: h(() => [...c[5] || (c[5] = [
            s("svg", {
              width: "16",
              height: "16",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              s("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
            ], -1)
          ])]),
          _: 1
        })
      ]),
      body: h(() => [
        s("div", nS, [
          r.value ? (a(), i("span", aS, "Loading...")) : (a(), i(j, { key: 1 }, [
            s("span", null, f(n.value.length) + " commits", 1),
            l.value ? (a(), i("span", lS, "(showing first " + f(n.value.length) + ")", 1)) : y("", !0)
          ], 64))
        ]),
        r.value ? (a(), i("div", iS, "Loading commit history...")) : n.value.length === 0 ? (a(), i("div", rS, " No commits found on this branch ")) : (a(), L(dc, {
          key: 2,
          class: "branch-commits"
        }, {
          default: h(() => [
            (a(!0), i(j, null, he(n.value, (d) => (a(), L(fc, {
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
        e.isCurrent ? y("", !0) : (a(), L(Te, {
          key: 0,
          variant: "destructive",
          size: "sm",
          onClick: c[1] || (c[1] = (d) => u.$emit("delete", e.branchName))
        }, {
          default: h(() => [...c[6] || (c[6] = [
            $(" Delete Branch ", -1)
          ])]),
          _: 1
        })),
        c[8] || (c[8] = s("div", { class: "footer-spacer" }, null, -1)),
        e.isCurrent ? y("", !0) : (a(), L(Ne, {
          key: 1,
          variant: "primary",
          onClick: c[2] || (c[2] = (d) => u.$emit("switch", e.branchName))
        }, {
          default: h(() => [...c[7] || (c[7] = [
            $(" Switch to Branch ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }));
  }
}), uS = /* @__PURE__ */ Se(cS, [["__scopeId", "data-v-2e5437cc"]]), dS = {
  key: 2,
  class: "branch-list"
}, fS = /* @__PURE__ */ be({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {},
    embedded: { type: Boolean }
  },
  emits: ["switch", "create", "delete"],
  setup(e, { emit: t }) {
    const o = t, n = k(!1), l = k(null);
    function r(v) {
      o("create", v), u();
    }
    function u() {
      n.value = !1;
    }
    function c(v) {
      l.value = v;
    }
    function d(v) {
      l.value = null, o("delete", v);
    }
    function m(v) {
      l.value = null, o("switch", v);
    }
    return (v, p) => (a(), L(At, null, Yt({
      content: h(() => [
        n.value ? (a(), L(K5, {
          key: 0,
          onCreate: r,
          onCancel: u
        })) : y("", !0),
        e.branches.length === 0 ? (a(), L(cs, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (a(), i("div", dS, [
          (a(!0), i(j, null, he(e.branches, (w) => (a(), L(eS, {
            key: w.name,
            "branch-name": w.name,
            "is-current": w.is_current,
            clickable: !0,
            "show-current-label": !0,
            onClick: (g) => c(w)
          }, {
            actions: h(() => [
              w.is_current ? y("", !0) : (a(), L(Te, {
                key: 0,
                variant: "secondary",
                size: "xs",
                onClick: mt((g) => o("switch", w.name), ["stop"])
              }, {
                default: h(() => [...p[3] || (p[3] = [
                  $(" Switch ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"]))
            ]),
            _: 2
          }, 1032, ["branch-name", "is-current", "onClick"]))), 128))
        ])),
        l.value ? (a(), L(uS, {
          key: 3,
          "branch-name": l.value.name,
          "is-current": l.value.is_current,
          onClose: p[1] || (p[1] = (w) => l.value = null),
          onDelete: d,
          onSwitch: m
        }, null, 8, ["branch-name", "is-current"])) : y("", !0)
      ]),
      _: 2
    }, [
      e.embedded ? void 0 : {
        name: "header",
        fn: h(() => [
          b(zt, { title: "BRANCHES" }, {
            actions: h(() => [
              n.value ? y("", !0) : (a(), L(Te, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: p[0] || (p[0] = (w) => n.value = !0)
              }, {
                default: h(() => [...p[2] || (p[2] = [
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
}), mS = /* @__PURE__ */ Se(fS, [["__scopeId", "data-v-a3de96cc"]]);
function mc(e) {
  return "has_conflicts" in e && e.has_conflicts === !0 && Array.isArray(e.workflow_conflicts);
}
const vS = { class: "remote-url-display" }, pS = ["title"], gS = ["title"], hS = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, yS = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, wS = /* @__PURE__ */ be({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(e) {
    const t = e, o = k(!1), n = R(() => {
      if (t.url.length <= t.maxLength)
        return t.url;
      const r = t.url.slice(0, Math.floor(t.maxLength * 0.6)), u = t.url.slice(-Math.floor(t.maxLength * 0.3));
      return `${r}...${u}`;
    });
    async function l() {
      try {
        await navigator.clipboard.writeText(t.url), o.value = !0, setTimeout(() => {
          o.value = !1;
        }, 2e3);
      } catch (r) {
        console.error("Failed to copy URL:", r);
      }
    }
    return (r, u) => (a(), i("div", vS, [
      s("span", {
        class: "url-text",
        title: e.url
      }, f(n.value), 9, pS),
      s("button", {
        class: Fe(["copy-btn", { copied: o.value }]),
        onClick: l,
        title: o.value ? "Copied!" : "Copy URL"
      }, [
        o.value ? (a(), i("svg", yS, [...u[1] || (u[1] = [
          s("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (a(), i("svg", hS, [...u[0] || (u[0] = [
          s("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          s("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, gS)
    ]));
  }
}), _S = /* @__PURE__ */ Se(wS, [["__scopeId", "data-v-7768a58d"]]), kS = { class: "remote-title" }, bS = {
  key: 0,
  class: "default-badge"
}, $S = {
  key: 1,
  class: "sync-badge"
}, CS = {
  key: 0,
  class: "ahead"
}, xS = {
  key: 1,
  class: "behind"
}, SS = {
  key: 1,
  class: "synced"
}, IS = ["href"], ES = {
  key: 1,
  class: "remote-url-text"
}, TS = /* @__PURE__ */ be({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove", "pull", "push"],
  setup(e) {
    const t = e, o = R(() => t.fetchingRemote === t.remote.name), n = R(() => t.remote.is_default), l = R(() => t.syncStatus && t.syncStatus.behind > 0), r = R(() => t.syncStatus && t.syncStatus.ahead > 0), u = R(() => t.remote.push_url !== t.remote.fetch_url), c = R(() => {
      const m = t.remote.fetch_url, v = m.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return v ? `https://${v[1]}/${v[2]}` : m.startsWith("https://") || m.startsWith("http://") ? m.replace(/\.git$/, "") : null;
    }), d = R(() => t.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (m, v) => (a(), L(Vt, {
      status: n.value ? "synced" : void 0
    }, Yt({
      icon: h(() => [
        $(f(n.value ? "🔗" : "🌐"), 1)
      ]),
      title: h(() => [
        s("div", kS, [
          s("span", null, f(e.remote.name), 1),
          n.value ? (a(), i("span", bS, "DEFAULT")) : y("", !0),
          e.syncStatus ? (a(), i("span", $S, [
            e.syncStatus.ahead > 0 || e.syncStatus.behind > 0 ? (a(), i(j, { key: 0 }, [
              e.syncStatus.ahead > 0 ? (a(), i("span", CS, "↑" + f(e.syncStatus.ahead), 1)) : y("", !0),
              e.syncStatus.behind > 0 ? (a(), i("span", xS, "↓" + f(e.syncStatus.behind), 1)) : y("", !0)
            ], 64)) : (a(), i("span", SS, "✓ synced"))
          ])) : y("", !0)
        ])
      ]),
      subtitle: h(() => [
        c.value ? (a(), i("a", {
          key: 0,
          href: c.value,
          target: "_blank",
          rel: "noopener noreferrer",
          class: "remote-url-link",
          onClick: v[0] || (v[0] = mt(() => {
          }, ["stop"]))
        }, f(d.value), 9, IS)) : (a(), i("span", ES, f(d.value), 1))
      ]),
      actions: h(() => [
        b(Te, {
          variant: "primary",
          size: "xs",
          loading: o.value,
          onClick: v[1] || (v[1] = (p) => m.$emit("fetch", e.remote.name))
        }, {
          default: h(() => [...v[6] || (v[6] = [
            $(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        b(Te, {
          variant: l.value ? "primary" : "secondary",
          size: "xs",
          disabled: !e.syncStatus,
          onClick: v[2] || (v[2] = (p) => m.$emit("pull", e.remote.name))
        }, {
          default: h(() => [
            $(" Pull" + f(e.syncStatus && e.syncStatus.behind > 0 ? ` ↓${e.syncStatus.behind}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        b(Te, {
          variant: r.value ? "primary" : "secondary",
          size: "xs",
          disabled: !e.syncStatus,
          onClick: v[3] || (v[3] = (p) => m.$emit("push", e.remote.name))
        }, {
          default: h(() => [
            $(" Push" + f(e.syncStatus && e.syncStatus.ahead > 0 ? ` ↑${e.syncStatus.ahead}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        b(Te, {
          variant: "secondary",
          size: "xs",
          onClick: v[4] || (v[4] = (p) => m.$emit("edit", e.remote.name))
        }, {
          default: h(() => [...v[7] || (v[7] = [
            $(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        n.value ? y("", !0) : (a(), L(Te, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: v[5] || (v[5] = (p) => m.$emit("remove", e.remote.name))
        }, {
          default: h(() => [...v[8] || (v[8] = [
            $(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 2
    }, [
      u.value ? {
        name: "details",
        fn: h(() => [
          e.remote.push_url !== e.remote.fetch_url ? (a(), L(_t, {
            key: 0,
            label: "Push URL:"
          }, {
            default: h(() => [
              b(_S, {
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
}), MS = /* @__PURE__ */ Se(TS, [["__scopeId", "data-v-8310f3a8"]]), PS = ["for"], RS = {
  key: 0,
  class: "base-form-field-required"
}, LS = { class: "base-form-field-input" }, NS = {
  key: 1,
  class: "base-form-field-error"
}, DS = {
  key: 2,
  class: "base-form-field-hint"
}, OS = /* @__PURE__ */ be({
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
    const t = e, o = R(() => t.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (n, l) => (a(), i("div", {
      class: Fe(["base-form-field", { "full-width": e.fullWidth }])
    }, [
      e.label ? (a(), i("label", {
        key: 0,
        for: o.value,
        class: "base-form-field-label"
      }, [
        $(f(e.label) + " ", 1),
        e.required ? (a(), i("span", RS, "*")) : y("", !0)
      ], 8, PS)) : y("", !0),
      s("div", LS, [
        st(n.$slots, "default", {}, void 0)
      ]),
      e.error ? (a(), i("span", NS, f(e.error), 1)) : e.hint ? (a(), i("span", DS, f(e.hint), 1)) : y("", !0)
    ], 2));
  }
}), Ot = /* @__PURE__ */ Se(OS, [["__scopeId", "data-v-9a1cf296"]]), US = { class: "remote-form" }, AS = { class: "form-header" }, zS = { class: "form-body" }, FS = {
  key: 0,
  class: "form-error"
}, VS = { class: "form-actions" }, BS = /* @__PURE__ */ be({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(e, { emit: t }) {
    const o = e, n = t, l = k({
      name: o.remoteName,
      fetchUrl: o.fetchUrl,
      pushUrl: o.pushUrl
    }), r = k(!1), u = k(null);
    kt(() => [o.remoteName, o.fetchUrl, o.pushUrl], () => {
      l.value = {
        name: o.remoteName,
        fetchUrl: o.fetchUrl,
        pushUrl: o.pushUrl
      };
    });
    const c = R(() => l.value.name.trim() !== "" && l.value.fetchUrl.trim() !== "");
    async function d() {
      if (!(!c.value || r.value)) {
        u.value = null, r.value = !0;
        try {
          n("submit", l.value);
        } catch (m) {
          u.value = m instanceof Error ? m.message : "Failed to submit form";
        } finally {
          r.value = !1;
        }
      }
    }
    return (m, v) => (a(), i("div", US, [
      s("div", AS, [
        b(as, null, {
          default: h(() => [
            $(f(e.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      s("div", zS, [
        b(Ot, {
          label: "Remote Name",
          required: ""
        }, {
          default: h(() => [
            b(wt, {
              modelValue: l.value.name,
              "onUpdate:modelValue": v[0] || (v[0] = (p) => l.value.name = p),
              disabled: e.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        b(Ot, {
          label: "Fetch URL",
          required: ""
        }, {
          default: h(() => [
            b(wt, {
              modelValue: l.value.fetchUrl,
              "onUpdate:modelValue": v[1] || (v[1] = (p) => l.value.fetchUrl = p),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        b(Ot, { label: "Push URL (optional)" }, {
          default: h(() => [
            b(wt, {
              modelValue: l.value.pushUrl,
              "onUpdate:modelValue": v[2] || (v[2] = (p) => l.value.pushUrl = p),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        u.value ? (a(), i("div", FS, f(u.value), 1)) : y("", !0)
      ]),
      s("div", VS, [
        b(Te, {
          variant: "primary",
          size: "md",
          disabled: !c.value,
          loading: r.value,
          onClick: d
        }, {
          default: h(() => [
            $(f(e.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        b(Te, {
          variant: "ghost",
          size: "md",
          onClick: v[3] || (v[3] = (p) => m.$emit("cancel"))
        }, {
          default: h(() => [...v[4] || (v[4] = [
            $(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), WS = /* @__PURE__ */ Se(BS, [["__scopeId", "data-v-56021b18"]]), GS = { class: "conflict-summary-box" }, jS = { class: "summary-header" }, HS = { class: "summary-text" }, qS = { key: 0 }, KS = {
  key: 1,
  class: "all-resolved"
}, JS = { class: "summary-progress" }, QS = { class: "progress-bar" }, YS = { class: "progress-text" }, XS = /* @__PURE__ */ be({
  __name: "ConflictSummaryBox",
  props: {
    conflictCount: {},
    resolvedCount: {},
    operationType: {}
  },
  setup(e) {
    const t = e, o = R(
      () => t.conflictCount > 0 ? t.resolvedCount / t.conflictCount * 100 : 0
    );
    return (n, l) => (a(), i("div", GS, [
      s("div", jS, [
        l[0] || (l[0] = s("span", { class: "summary-icon" }, "⚠", -1)),
        s("div", HS, [
          s("strong", null, f(e.conflictCount) + " conflict" + f(e.conflictCount !== 1 ? "s" : "") + " detected", 1),
          e.resolvedCount < e.conflictCount ? (a(), i("p", qS, " Resolve all conflicts before " + f(e.operationType) + "ing ", 1)) : (a(), i("p", KS, " All conflicts resolved - ready to " + f(e.operationType), 1))
        ])
      ]),
      s("div", JS, [
        s("div", QS, [
          s("div", {
            class: "progress-fill",
            style: Rt({ width: o.value + "%" })
          }, null, 4)
        ]),
        s("span", YS, f(e.resolvedCount) + " / " + f(e.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), ZS = /* @__PURE__ */ Se(XS, [["__scopeId", "data-v-4e9e6cc9"]]), e8 = { class: "modal-header" }, t8 = { class: "modal-title" }, s8 = { class: "modal-body" }, o8 = {
  key: 0,
  class: "error-box"
}, n8 = {
  key: 0,
  class: "error-hint"
}, a8 = {
  key: 1,
  class: "loading-state"
}, l8 = { class: "commit-summary" }, i8 = {
  key: 0,
  class: "commits-section"
}, r8 = { class: "commit-list" }, c8 = { class: "commit-hash" }, u8 = { class: "commit-message" }, d8 = { class: "commit-date" }, f8 = {
  key: 1,
  class: "changes-section"
}, m8 = {
  key: 0,
  class: "change-group",
  open: ""
}, v8 = { class: "change-count" }, p8 = { class: "change-list" }, g8 = {
  key: 0,
  class: "conflict-badge"
}, h8 = {
  key: 1,
  class: "change-group"
}, y8 = { class: "change-count" }, w8 = { class: "change-list" }, _8 = {
  key: 2,
  class: "change-group"
}, k8 = { class: "change-count" }, b8 = { class: "change-list" }, $8 = {
  key: 3,
  class: "strategy-section"
}, C8 = { class: "radio-group" }, x8 = { class: "radio-option" }, S8 = { class: "radio-option" }, I8 = { class: "radio-option" }, E8 = {
  key: 4,
  class: "up-to-date"
}, T8 = { class: "modal-actions" }, Ci = "comfygit.pullModelStrategy", M8 = /* @__PURE__ */ be({
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
  setup(e, { emit: t }) {
    const o = e, n = t, l = k(localStorage.getItem(Ci) || "skip");
    kt(l, (C) => {
      localStorage.setItem(Ci, C);
    });
    const r = R(() => {
      var C;
      return ((C = o.error) == null ? void 0 : C.toLowerCase().includes("unrelated histories")) ?? !1;
    }), u = R(() => {
      if (!o.preview) return 0;
      const C = o.preview.changes.workflows;
      return C.added.length + C.modified.length + C.deleted.length;
    }), c = R(() => o.preview ? o.preview.changes.nodes.to_install.length : 0), d = R(() => {
      var C;
      return u.value > 0 || c.value > 0 || (((C = o.preview) == null ? void 0 : C.changes.models.count) || 0) > 0;
    }), m = R(() => o.preview && mc(o.preview) ? o.preview : null), v = R(() => {
      var C;
      return ((C = m.value) == null ? void 0 : C.workflow_conflicts.length) ?? 0;
    }), p = R(() => {
      var C;
      return ((C = o.conflictResolutions) == null ? void 0 : C.size) ?? 0;
    }), w = R(
      () => v.value > 0 && p.value === v.value
    ), g = R(() => !(!o.preview || o.preview.has_uncommitted_changes || m.value && !w.value));
    function _(C) {
      if (!m.value) return !1;
      const S = C.replace(/\.json$/, "");
      return m.value.workflow_conflicts.some((T) => T.name === S);
    }
    function x(C) {
      const S = o.conflictResolutions ? Array.from(o.conflictResolutions.values()) : void 0;
      n("pull", { modelStrategy: l.value, force: C, resolutions: S });
    }
    return (C, S) => {
      var T, M;
      return a(), L(Lt, { to: "body" }, [
        e.show ? (a(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: S[11] || (S[11] = (P) => C.$emit("close"))
        }, [
          s("div", {
            class: "modal-content",
            onClick: S[10] || (S[10] = mt(() => {
            }, ["stop"]))
          }, [
            s("div", e8, [
              s("h3", t8, "PULL FROM " + f(e.remoteName.toUpperCase()), 1),
              s("button", {
                class: "modal-close",
                onClick: S[0] || (S[0] = (P) => C.$emit("close"))
              }, "✕")
            ]),
            s("div", s8, [
              e.error ? (a(), i("div", o8, [
                S[13] || (S[13] = s("span", { class: "error-icon" }, "✕", -1)),
                s("div", null, [
                  S[12] || (S[12] = s("strong", null, "PULL FAILED", -1)),
                  s("p", null, f(e.error), 1),
                  r.value ? (a(), i("p", n8, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : y("", !0)
                ])
              ])) : e.loading ? (a(), i("div", a8, [...S[14] || (S[14] = [
                s("span", { class: "spinner" }, "⟳", -1),
                $(" Loading preview... ", -1)
              ])])) : (T = e.preview) != null && T.has_uncommitted_changes ? (a(), i(j, { key: 2 }, [
                S[15] || (S[15] = s("div", { class: "warning-box" }, [
                  s("span", { class: "warning-icon" }, "⚠"),
                  s("div", null, [
                    s("strong", null, "UNCOMMITTED CHANGES"),
                    s("p", null, "You have uncommitted changes that must be committed or discarded before pulling.")
                  ])
                ], -1)),
                S[16] || (S[16] = s("div", { class: "options-section" }, [
                  s("p", null, [
                    s("strong", null, "Options:")
                  ]),
                  s("ul", null, [
                    s("li", null, "Commit your changes first (recommended)"),
                    s("li", null, "Discard changes and force pull")
                  ])
                ], -1))
              ], 64)) : e.preview ? (a(), i(j, { key: 3 }, [
                s("div", l8, [
                  S[17] || (S[17] = s("span", { class: "icon" }, "📥", -1)),
                  $(" " + f(e.preview.commits_behind) + " commit" + f(e.preview.commits_behind !== 1 ? "s" : "") + " from " + f(e.preview.remote) + "/" + f(e.preview.branch), 1)
                ]),
                e.preview.commits && e.preview.commits.length > 0 ? (a(), i("div", i8, [
                  S[18] || (S[18] = s("h4", { class: "section-title" }, "INCOMING COMMITS", -1)),
                  s("div", r8, [
                    (a(!0), i(j, null, he(e.preview.commits, (P) => (a(), i("div", {
                      key: P.hash,
                      class: "commit-item"
                    }, [
                      s("span", c8, f(P.short_hash || P.hash.slice(0, 7)), 1),
                      s("span", u8, f(P.message), 1),
                      s("span", d8, f(P.date_relative || P.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                d.value ? (a(), i("div", f8, [
                  S[22] || (S[22] = s("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  u.value > 0 ? (a(), i("details", m8, [
                    s("summary", null, [
                      S[19] || (S[19] = s("span", { class: "change-type" }, "Workflows", -1)),
                      s("span", v8, f(u.value) + " changes", 1)
                    ]),
                    s("div", p8, [
                      (a(!0), i(j, null, he(e.preview.changes.workflows.added, (P) => (a(), i("div", {
                        key: "a-" + P,
                        class: "change-item add"
                      }, " + " + f(P), 1))), 128)),
                      (a(!0), i(j, null, he(e.preview.changes.workflows.modified, (P) => (a(), i("div", {
                        key: "m-" + P,
                        class: "change-item modify"
                      }, [
                        $(" ~ " + f(P) + " ", 1),
                        _(P) ? (a(), i("span", g8, "CONFLICT")) : y("", !0)
                      ]))), 128)),
                      (a(!0), i(j, null, he(e.preview.changes.workflows.deleted, (P) => (a(), i("div", {
                        key: "d-" + P,
                        class: "change-item delete"
                      }, " - " + f(P), 1))), 128))
                    ])
                  ])) : y("", !0),
                  c.value > 0 ? (a(), i("details", h8, [
                    s("summary", null, [
                      S[20] || (S[20] = s("span", { class: "change-type" }, "Nodes", -1)),
                      s("span", y8, f(c.value) + " to install", 1)
                    ]),
                    s("div", w8, [
                      (a(!0), i(j, null, he(e.preview.changes.nodes.to_install, (P) => (a(), i("div", {
                        key: P,
                        class: "change-item add"
                      }, " + " + f(P), 1))), 128))
                    ])
                  ])) : y("", !0),
                  e.preview.changes.models.count > 0 ? (a(), i("details", _8, [
                    s("summary", null, [
                      S[21] || (S[21] = s("span", { class: "change-type" }, "Models", -1)),
                      s("span", k8, f(e.preview.changes.models.count) + " referenced", 1)
                    ]),
                    s("div", b8, [
                      (a(!0), i(j, null, he(e.preview.changes.models.referenced, (P) => (a(), i("div", {
                        key: P,
                        class: "change-item"
                      }, f(P), 1))), 128))
                    ])
                  ])) : y("", !0)
                ])) : y("", !0),
                m.value ? (a(), L(ZS, {
                  key: 2,
                  "conflict-count": v.value,
                  "resolved-count": p.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : y("", !0),
                e.preview.changes.models.count > 0 ? (a(), i("div", $8, [
                  S[27] || (S[27] = s("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  s("div", C8, [
                    s("label", x8, [
                      Tt(s("input", {
                        type: "radio",
                        "onUpdate:modelValue": S[1] || (S[1] = (P) => l.value = P),
                        value: "all"
                      }, null, 512), [
                        [Pn, l.value]
                      ]),
                      S[23] || (S[23] = s("span", null, "Download all models", -1))
                    ]),
                    s("label", S8, [
                      Tt(s("input", {
                        type: "radio",
                        "onUpdate:modelValue": S[2] || (S[2] = (P) => l.value = P),
                        value: "required"
                      }, null, 512), [
                        [Pn, l.value]
                      ]),
                      S[24] || (S[24] = s("span", null, "Download required only", -1))
                    ]),
                    s("label", I8, [
                      Tt(s("input", {
                        type: "radio",
                        "onUpdate:modelValue": S[3] || (S[3] = (P) => l.value = P),
                        value: "skip"
                      }, null, 512), [
                        [Pn, l.value]
                      ]),
                      S[25] || (S[25] = s("span", null, "Skip model downloads", -1)),
                      S[26] || (S[26] = s("span", { class: "default-badge" }, "default", -1))
                    ])
                  ]),
                  S[28] || (S[28] = s("p", { class: "strategy-hint" }, "Models can be downloaded later from MODEL INDEX", -1))
                ])) : y("", !0),
                e.preview.commits_behind === 0 ? (a(), i("div", E8, [
                  S[29] || (S[29] = s("span", { class: "icon" }, "✓", -1)),
                  $(" Already up to date with " + f(e.preview.remote) + "/" + f(e.preview.branch), 1)
                ])) : y("", !0)
              ], 64)) : y("", !0)
            ]),
            s("div", T8, [
              b(Te, {
                variant: "secondary",
                onClick: S[4] || (S[4] = (P) => C.$emit("close"))
              }, {
                default: h(() => [...S[30] || (S[30] = [
                  $(" Cancel ", -1)
                ])]),
                _: 1
              }),
              e.error ? (a(), i(j, { key: 0 }, [
                b(Te, {
                  variant: "secondary",
                  loading: e.pulling,
                  onClick: S[5] || (S[5] = (P) => x(!1))
                }, {
                  default: h(() => [...S[31] || (S[31] = [
                    $(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                b(Te, {
                  variant: "destructive",
                  loading: e.pulling,
                  onClick: S[6] || (S[6] = (P) => x(!0))
                }, {
                  default: h(() => [...S[32] || (S[32] = [
                    $(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (M = e.preview) != null && M.has_uncommitted_changes ? (a(), L(Te, {
                key: 1,
                variant: "destructive",
                loading: e.pulling,
                onClick: S[7] || (S[7] = (P) => x(!0))
              }, {
                default: h(() => [...S[33] || (S[33] = [
                  $(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : e.preview && e.preview.commits_behind > 0 ? (a(), i(j, { key: 2 }, [
                m.value && !w.value ? (a(), L(Te, {
                  key: 0,
                  variant: "primary",
                  onClick: S[8] || (S[8] = (P) => n("openConflictResolution"))
                }, {
                  default: h(() => [
                    $(" Resolve Conflicts (" + f(p.value) + "/" + f(v.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (a(), L(Te, {
                  key: 1,
                  variant: "primary",
                  loading: e.pulling,
                  disabled: !g.value,
                  onClick: S[9] || (S[9] = (P) => x(!1))
                }, {
                  default: h(() => [...S[34] || (S[34] = [
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
}), P8 = /* @__PURE__ */ Se(M8, [["__scopeId", "data-v-1d633bba"]]), R8 = { class: "modal-header" }, L8 = { class: "modal-title" }, N8 = { class: "modal-body" }, D8 = {
  key: 0,
  class: "error-box"
}, O8 = {
  key: 1,
  class: "loading-state"
}, U8 = {
  key: 2,
  class: "warning-box"
}, A8 = {
  key: 1,
  class: "commits-section"
}, z8 = { class: "commit-list" }, F8 = { class: "commit-hash" }, V8 = { class: "commit-message" }, B8 = { class: "commit-date" }, W8 = { class: "force-option" }, G8 = { class: "checkbox-option" }, j8 = { class: "commit-summary" }, H8 = { key: 0 }, q8 = { key: 1 }, K8 = {
  key: 0,
  class: "info-box"
}, J8 = {
  key: 2,
  class: "commits-section"
}, Q8 = { class: "commit-list" }, Y8 = { class: "commit-hash" }, X8 = { class: "commit-message" }, Z8 = { class: "commit-date" }, e4 = {
  key: 3,
  class: "up-to-date"
}, t4 = { class: "modal-actions" }, s4 = /* @__PURE__ */ be({
  __name: "PushModal",
  props: {
    show: { type: Boolean },
    remoteName: {},
    preview: {},
    loading: { type: Boolean },
    pushing: { type: Boolean },
    error: {}
  },
  emits: ["close", "push", "pull-first", "revalidate"],
  setup(e, { emit: t }) {
    const o = e, n = t, l = k(!1), r = k(!1), u = R(() => {
      var w;
      return ((w = o.preview) == null ? void 0 : w.warnings) || {
        models_without_sources: [],
        nodes_without_provenance: []
      };
    }), c = R(
      () => u.value.models_without_sources.length
    ), d = R(
      () => u.value.nodes_without_provenance.length
    ), m = R(
      () => c.value + d.value
    ), v = R(() => m.value > 0);
    function p(w) {
      n("push", { force: w });
    }
    return (w, g) => {
      var _, x, C, S;
      return a(), i(j, null, [
        (a(), L(Lt, { to: "body" }, [
          e.show ? (a(), i("div", {
            key: 0,
            class: "modal-overlay",
            onClick: g[9] || (g[9] = (T) => w.$emit("close"))
          }, [
            s("div", {
              class: "modal-content",
              onClick: g[8] || (g[8] = mt(() => {
              }, ["stop"]))
            }, [
              s("div", R8, [
                s("h3", L8, "PUSH TO " + f(e.remoteName.toUpperCase()), 1),
                s("button", {
                  class: "modal-close",
                  onClick: g[0] || (g[0] = (T) => w.$emit("close"))
                }, "✕")
              ]),
              s("div", N8, [
                e.error ? (a(), i("div", D8, [
                  g[13] || (g[13] = s("span", { class: "error-icon" }, "!", -1)),
                  s("div", null, [
                    g[12] || (g[12] = s("strong", null, "Push failed", -1)),
                    s("p", null, f(e.error), 1)
                  ])
                ])) : y("", !0),
                e.loading ? (a(), i("div", O8, [...g[14] || (g[14] = [
                  s("span", { class: "spinner" }, "⟳", -1),
                  $(" Loading preview... ", -1)
                ])])) : (_ = e.preview) != null && _.has_uncommitted_changes ? (a(), i("div", U8, [...g[15] || (g[15] = [
                  s("span", { class: "warning-icon" }, "!", -1),
                  s("div", null, [
                    s("strong", null, "UNCOMMITTED CHANGES"),
                    s("p", null, "Commit your changes before pushing.")
                  ], -1)
                ])])) : (x = e.preview) != null && x.remote_has_new_commits ? (a(), i(j, { key: 3 }, [
                  g[19] || (g[19] = s("div", { class: "warning-box" }, [
                    s("span", { class: "warning-icon" }, "!"),
                    s("div", null, [
                      s("strong", null, "REMOTE HAS NEW COMMITS"),
                      s("p", null, "The remote has commits you don't have locally. You should pull first to avoid overwriting changes.")
                    ])
                  ], -1)),
                  v.value ? (a(), L(sl, {
                    key: 0,
                    warnings: u.value,
                    message: "Missing provenance can prevent another machine, or ComfyGit Cloud, from rebuilding this environment exactly.",
                    onReview: g[1] || (g[1] = (T) => r.value = !0)
                  }, null, 8, ["warnings"])) : y("", !0),
                  e.preview.commits_ahead > 0 ? (a(), i("div", A8, [
                    g[16] || (g[16] = s("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                    s("div", z8, [
                      (a(!0), i(j, null, he(e.preview.commits, (T) => (a(), i("div", {
                        key: T.hash,
                        class: "commit-item"
                      }, [
                        s("span", F8, f(T.short_hash || T.hash.slice(0, 7)), 1),
                        s("span", V8, f(T.message), 1),
                        s("span", B8, f(T.date_relative || T.relative_date), 1)
                      ]))), 128))
                    ])
                  ])) : y("", !0),
                  s("div", W8, [
                    s("label", G8, [
                      Tt(s("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": g[2] || (g[2] = (T) => l.value = T)
                      }, null, 512), [
                        [Gn, l.value]
                      ]),
                      g[17] || (g[17] = s("span", null, "Force push (overwrite remote)", -1))
                    ]),
                    g[18] || (g[18] = s("p", { class: "option-hint" }, "Uses --force-with-lease for safety", -1))
                  ])
                ], 64)) : e.preview ? (a(), i(j, { key: 4 }, [
                  s("div", j8, [
                    g[20] || (g[20] = s("span", { class: "icon" }, "📤", -1)),
                    e.preview.is_first_push ? (a(), i("span", H8, " Creating " + f(e.preview.remote) + "/" + f(e.preview.branch) + " with " + f(e.preview.commits_ahead) + " commit" + f(e.preview.commits_ahead !== 1 ? "s" : ""), 1)) : (a(), i("span", q8, " Pushing " + f(e.preview.commits_ahead) + " commit" + f(e.preview.commits_ahead !== 1 ? "s" : "") + " to " + f(e.preview.remote) + "/" + f(e.preview.branch), 1))
                  ]),
                  e.preview.is_first_push ? (a(), i("div", K8, [...g[21] || (g[21] = [
                    s("svg", {
                      class: "info-icon",
                      width: "16",
                      height: "16",
                      viewBox: "0 0 16 16",
                      fill: "currentColor"
                    }, [
                      s("circle", {
                        cx: "8",
                        cy: "8",
                        r: "7",
                        stroke: "currentColor",
                        "stroke-width": "1.5",
                        fill: "none"
                      }),
                      s("text", {
                        x: "8",
                        y: "11",
                        "text-anchor": "middle",
                        "font-size": "10",
                        "font-weight": "bold",
                        fill: "currentColor"
                      }, "i")
                    ], -1),
                    s("span", null, "This will create the remote branch for the first time.", -1)
                  ])])) : y("", !0),
                  v.value ? (a(), L(sl, {
                    key: 1,
                    warnings: u.value,
                    message: "Missing provenance can prevent another machine, or ComfyGit Cloud, from rebuilding this environment exactly.",
                    onReview: g[3] || (g[3] = (T) => r.value = !0)
                  }, null, 8, ["warnings"])) : y("", !0),
                  e.preview.commits_ahead > 0 ? (a(), i("div", J8, [
                    g[22] || (g[22] = s("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                    s("div", Q8, [
                      (a(!0), i(j, null, he(e.preview.commits, (T) => (a(), i("div", {
                        key: T.hash,
                        class: "commit-item"
                      }, [
                        s("span", Y8, f(T.short_hash || T.hash.slice(0, 7)), 1),
                        s("span", X8, f(T.message), 1),
                        s("span", Z8, f(T.date_relative || T.relative_date), 1)
                      ]))), 128))
                    ])
                  ])) : (a(), i("div", e4, [
                    g[23] || (g[23] = s("span", { class: "icon" }, "✓", -1)),
                    $(" Nothing to push - already up to date with " + f(e.preview.remote) + "/" + f(e.preview.branch), 1)
                  ]))
                ], 64)) : y("", !0)
              ]),
              s("div", t4, [
                b(Te, {
                  variant: "secondary",
                  onClick: g[4] || (g[4] = (T) => w.$emit("close"))
                }, {
                  default: h(() => [...g[24] || (g[24] = [
                    $(" Cancel ", -1)
                  ])]),
                  _: 1
                }),
                (C = e.preview) != null && C.remote_has_new_commits ? (a(), i(j, { key: 0 }, [
                  b(Te, {
                    variant: "secondary",
                    onClick: g[5] || (g[5] = (T) => w.$emit("pull-first"))
                  }, {
                    default: h(() => [...g[25] || (g[25] = [
                      $(" Pull First ", -1)
                    ])]),
                    _: 1
                  }),
                  b(Te, {
                    variant: "destructive",
                    disabled: !l.value,
                    loading: e.pushing,
                    onClick: g[6] || (g[6] = (T) => p(!0))
                  }, {
                    default: h(() => [
                      $(f(v.value ? "Force Push Anyway" : "Force Push"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled", "loading"])
                ], 64)) : e.preview && e.preview.commits_ahead > 0 && !e.preview.has_uncommitted_changes ? (a(), L(Te, {
                  key: 1,
                  variant: "primary",
                  loading: e.pushing,
                  onClick: g[7] || (g[7] = (T) => p(!1))
                }, {
                  default: h(() => [
                    $(f(v.value ? "Push Anyway" : "Push"), 1)
                  ]),
                  _: 1
                }, 8, ["loading"])) : y("", !0)
              ])
            ])
          ])) : y("", !0)
        ])),
        r.value && ((S = e.preview) != null && S.warnings) ? (a(), L(rc, {
          key: 0,
          warnings: e.preview.warnings,
          onClose: g[10] || (g[10] = (T) => r.value = !1),
          onRevalidate: g[11] || (g[11] = (T) => w.$emit("revalidate"))
        }, null, 8, ["warnings"])) : y("", !0)
      ], 64);
    };
  }
}), o4 = /* @__PURE__ */ Se(s4, [["__scopeId", "data-v-7748bf33"]]), n4 = { class: "resolution-choice-group" }, a4 = ["disabled"], l4 = ["disabled"], i4 = /* @__PURE__ */ be({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (t, o) => (a(), i("div", n4, [
      s("button", {
        class: Fe(["choice-btn", "mine", { selected: e.modelValue === "take_base" }]),
        onClick: o[0] || (o[0] = (n) => t.$emit("update:modelValue", "take_base")),
        disabled: e.disabled
      }, [...o[2] || (o[2] = [
        s("span", { class: "choice-icon" }, "◀", -1),
        s("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, a4),
      s("button", {
        class: Fe(["choice-btn", "theirs", { selected: e.modelValue === "take_target" }]),
        onClick: o[1] || (o[1] = (n) => t.$emit("update:modelValue", "take_target")),
        disabled: e.disabled
      }, [...o[3] || (o[3] = [
        s("span", { class: "choice-label" }, "Keep Theirs", -1),
        s("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, l4)
    ]));
  }
}), r4 = /* @__PURE__ */ Se(i4, [["__scopeId", "data-v-985715ed"]]), c4 = { class: "conflict-header" }, u4 = { class: "conflict-info" }, d4 = { class: "workflow-name" }, f4 = { class: "conflict-description" }, m4 = {
  key: 0,
  class: "resolved-badge"
}, v4 = { class: "resolved-text" }, p4 = { class: "conflict-hashes" }, g4 = { class: "hash-item" }, h4 = { class: "hash-item" }, y4 = { class: "conflict-actions" }, w4 = /* @__PURE__ */ be({
  __name: "WorkflowConflictItem",
  props: {
    conflict: {},
    resolution: {},
    disabled: { type: Boolean }
  },
  emits: ["resolve"],
  setup(e, { emit: t }) {
    const o = e, n = t, l = k(o.resolution);
    kt(() => o.resolution, (d) => {
      l.value = d;
    }), kt(l, (d) => {
      d && n("resolve", d);
    });
    const r = R(() => l.value !== null), u = R(() => o.conflict.conflict_type === "both_modified" ? "Both you and remote modified this workflow" : "Conflicting changes detected"), c = R(() => {
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
      var v, p;
      return a(), i("div", {
        class: Fe(["conflict-item", { resolved: r.value }])
      }, [
        s("div", c4, [
          m[2] || (m[2] = s("span", { class: "conflict-icon" }, "⚠", -1)),
          s("div", u4, [
            s("code", d4, f(e.conflict.name) + ".json", 1),
            s("div", f4, f(u.value), 1)
          ]),
          r.value ? (a(), i("div", m4, [
            m[1] || (m[1] = s("span", { class: "resolved-icon" }, "✓", -1)),
            s("span", v4, f(c.value), 1)
          ])) : y("", !0)
        ]),
        s("div", p4, [
          s("span", g4, [
            m[3] || (m[3] = $("Your: ", -1)),
            s("code", null, f(((v = e.conflict.base_hash) == null ? void 0 : v.slice(0, 8)) || "n/a"), 1)
          ]),
          s("span", h4, [
            m[4] || (m[4] = $("Theirs: ", -1)),
            s("code", null, f(((p = e.conflict.target_hash) == null ? void 0 : p.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        s("div", y4, [
          b(r4, {
            modelValue: l.value,
            "onUpdate:modelValue": m[0] || (m[0] = (w) => l.value = w),
            disabled: e.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), _4 = /* @__PURE__ */ Se(w4, [["__scopeId", "data-v-506d3bbf"]]), k4 = { class: "resolution-content" }, b4 = {
  key: 0,
  class: "error-box"
}, $4 = { class: "resolution-header" }, C4 = { class: "header-stats" }, x4 = { class: "stat" }, S4 = { class: "stat-value" }, I4 = { class: "stat resolved" }, E4 = { class: "stat-value" }, T4 = {
  key: 0,
  class: "stat pending"
}, M4 = { class: "stat-value" }, P4 = { class: "conflicts-list" }, R4 = {
  key: 1,
  class: "all-resolved-message"
}, L4 = /* @__PURE__ */ be({
  __name: "WorkflowResolutionModal",
  props: {
    workflowConflicts: {},
    resolutions: {},
    operationType: {},
    validating: { type: Boolean },
    error: {}
  },
  emits: ["close", "resolve", "apply"],
  setup(e, { emit: t }) {
    const o = e, n = t, l = R(() => o.resolutions.size), r = R(() => o.workflowConflicts.length - l.value), u = R(() => l.value === o.workflowConflicts.length), c = R(
      () => o.operationType === "pull" ? "Validate & Pull" : "Validate & Merge"
    );
    function d(w) {
      const g = o.resolutions.get(w);
      return (g == null ? void 0 : g.resolution) ?? null;
    }
    function m(w, g) {
      n("resolve", w, g);
    }
    function v() {
      n("close");
    }
    function p() {
      n("apply");
    }
    return (w, g) => (a(), L(It, {
      title: `Resolve Workflow Conflicts: ${e.operationType === "pull" ? "Pull" : "Merge"}`,
      size: "lg",
      "fixed-height": !0,
      onClose: v
    }, {
      body: h(() => [
        s("div", k4, [
          e.error ? (a(), i("div", b4, [
            g[1] || (g[1] = s("span", { class: "error-icon" }, "✕", -1)),
            s("div", null, [
              g[0] || (g[0] = s("strong", null, "Validation Failed", -1)),
              s("p", null, f(e.error), 1)
            ])
          ])) : y("", !0),
          s("div", $4, [
            s("div", C4, [
              s("div", x4, [
                s("span", S4, f(e.workflowConflicts.length), 1),
                g[2] || (g[2] = s("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              s("div", I4, [
                s("span", E4, f(l.value), 1),
                g[3] || (g[3] = s("span", { class: "stat-label" }, "resolved", -1))
              ]),
              r.value > 0 ? (a(), i("div", T4, [
                s("span", M4, f(r.value), 1),
                g[4] || (g[4] = s("span", { class: "stat-label" }, "pending", -1))
              ])) : y("", !0)
            ]),
            g[5] || (g[5] = s("p", { class: "header-hint" }, " Choose which version to keep for each conflicting workflow. ", -1))
          ]),
          s("div", P4, [
            (a(!0), i(j, null, he(e.workflowConflicts, (_) => (a(), L(_4, {
              key: _.name,
              conflict: _,
              resolution: d(_.name),
              onResolve: (x) => m(_.name, x)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          u.value ? (a(), i("div", R4, [
            g[6] || (g[6] = s("span", { class: "resolved-icon" }, "✓", -1)),
            s("span", null, 'All conflicts resolved! Click "' + f(c.value) + '" to continue.', 1)
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        b(Ne, {
          variant: "secondary",
          onClick: v
        }, {
          default: h(() => [...g[7] || (g[7] = [
            $(" Cancel ", -1)
          ])]),
          _: 1
        }),
        g[8] || (g[8] = s("div", { class: "footer-spacer" }, null, -1)),
        b(Ne, {
          variant: "primary",
          disabled: !u.value || e.validating,
          loading: e.validating,
          onClick: p
        }, {
          default: h(() => [
            $(f(c.value), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), N4 = /* @__PURE__ */ Se(L4, [["__scopeId", "data-v-c58d150d"]]), D4 = { class: "node-conflict-item" }, O4 = { class: "node-header" }, U4 = { class: "node-name" }, A4 = { class: "node-id" }, z4 = { class: "version-comparison" }, F4 = { class: "version yours" }, V4 = { class: "version theirs" }, B4 = { class: "chosen-version" }, W4 = { class: "chosen" }, G4 = { class: "chosen-reason" }, j4 = { class: "affected-workflows" }, H4 = { class: "wf-source" }, q4 = { class: "wf-version" }, K4 = /* @__PURE__ */ be({
  __name: "NodeConflictItem",
  props: {
    conflict: {}
  },
  setup(e) {
    return (t, o) => (a(), i("div", D4, [
      s("div", O4, [
        s("code", U4, f(e.conflict.node_name), 1),
        s("span", A4, "(" + f(e.conflict.node_id) + ")", 1)
      ]),
      s("div", z4, [
        s("div", F4, [
          o[0] || (o[0] = s("span", { class: "label" }, "Your version:", -1)),
          s("code", null, f(e.conflict.base_version), 1)
        ]),
        o[2] || (o[2] = s("span", { class: "arrow" }, "→", -1)),
        s("div", V4, [
          o[1] || (o[1] = s("span", { class: "label" }, "Their version:", -1)),
          s("code", null, f(e.conflict.target_version), 1)
        ])
      ]),
      s("div", B4, [
        o[3] || (o[3] = s("span", { class: "label" }, "Will install:", -1)),
        s("code", W4, f(e.conflict.chosen_version), 1),
        s("span", G4, f(e.conflict.chosen_reason), 1)
      ]),
      s("details", j4, [
        s("summary", null, " Affected workflows (" + f(e.conflict.affected_workflows.length) + ") ", 1),
        s("ul", null, [
          (a(!0), i(j, null, he(e.conflict.affected_workflows, (n) => (a(), i("li", {
            key: n.name
          }, [
            s("code", null, f(n.name), 1),
            s("span", H4, "(" + f(n.source === "base" ? "yours" : "theirs") + ")", 1),
            s("span", q4, "needs v" + f(n.required_version), 1)
          ]))), 128))
        ])
      ])
    ]));
  }
}), J4 = /* @__PURE__ */ Se(K4, [["__scopeId", "data-v-8b626725"]]), Q4 = { class: "validation-content" }, Y4 = {
  key: 0,
  class: "compatible-message"
}, X4 = { class: "conflicts-list" }, Z4 = {
  key: 2,
  class: "warnings-section"
}, eI = /* @__PURE__ */ be({
  __name: "ValidationResultsModal",
  props: {
    validation: {},
    operationType: {},
    executing: { type: Boolean }
  },
  emits: ["proceed", "goBack", "cancel"],
  setup(e, { emit: t }) {
    const o = e, n = t, l = R(() => o.validation.is_compatible ? o.operationType === "pull" ? "Pull" : "Merge" : o.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (r, u) => (a(), L(It, {
      title: "Compatibility Check",
      size: "lg",
      onClose: u[3] || (u[3] = (c) => n("cancel"))
    }, {
      body: h(() => [
        s("div", Q4, [
          e.validation.is_compatible && e.validation.node_conflicts.length === 0 ? (a(), i("div", Y4, [
            u[5] || (u[5] = s("span", { class: "icon" }, "✓", -1)),
            s("div", null, [
              u[4] || (u[4] = s("strong", null, "All clear!", -1)),
              s("p", null, "Your workflow choices are compatible. Ready to " + f(e.operationType) + ".", 1)
            ])
          ])) : e.validation.node_conflicts.length > 0 ? (a(), i(j, { key: 1 }, [
            u[6] || (u[6] = s("div", { class: "warning-header" }, [
              s("span", { class: "icon" }, "⚠"),
              s("div", null, [
                s("strong", null, "Node Version Differences"),
                s("p", null, " Your workflow choices require different versions of some nodes. The versions shown below will be installed. ")
              ])
            ], -1)),
            s("div", X4, [
              (a(!0), i(j, null, he(e.validation.node_conflicts, (c) => (a(), L(J4, {
                key: c.node_id,
                conflict: c
              }, null, 8, ["conflict"]))), 128))
            ]),
            u[7] || (u[7] = s("div", { class: "info-box" }, [
              s("strong", null, "What happens if you proceed?"),
              s("p", null, " The highlighted versions will be installed. Workflows built with different versions may need minor adjustments. ")
            ], -1))
          ], 64)) : y("", !0),
          e.validation.warnings.length > 0 ? (a(), i("div", Z4, [
            u[8] || (u[8] = s("h4", null, "Warnings", -1)),
            s("ul", null, [
              (a(!0), i(j, null, he(e.validation.warnings, (c, d) => (a(), i("li", { key: d }, f(c), 1))), 128))
            ])
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        b(Ne, {
          variant: "secondary",
          onClick: u[0] || (u[0] = (c) => n("cancel"))
        }, {
          default: h(() => [...u[9] || (u[9] = [
            $(" Cancel ", -1)
          ])]),
          _: 1
        }),
        u[11] || (u[11] = s("div", { class: "footer-spacer" }, null, -1)),
        b(Ne, {
          variant: "secondary",
          onClick: u[1] || (u[1] = (c) => n("goBack"))
        }, {
          default: h(() => [...u[10] || (u[10] = [
            $(" ← Change Choices ", -1)
          ])]),
          _: 1
        }),
        b(Ne, {
          variant: "primary",
          loading: e.executing,
          onClick: u[2] || (u[2] = (c) => n("proceed"))
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
}), tI = /* @__PURE__ */ Se(eI, [["__scopeId", "data-v-fefd26ed"]]), sI = {
  key: 0,
  class: "embedded-toolbar"
}, oI = { class: "embedded-toolbar-search" }, nI = { key: 0 }, aI = /* @__PURE__ */ be({
  __name: "RemotesSection",
  props: {
    embedded: { type: Boolean }
  },
  emits: ["toast"],
  setup(e, { emit: t }) {
    const o = t, {
      getRemotes: n,
      addRemote: l,
      removeRemote: r,
      updateRemoteUrl: u,
      fetchRemote: c,
      getRemoteSyncStatus: d,
      getPullPreview: m,
      pullFromRemote: v,
      getPushPreview: p,
      pushToRemote: w,
      validateMerge: g
    } = vt(), _ = k([]), x = k(null), C = k({}), S = k(!1), T = k(null), M = k(""), P = k(!1), D = k(null), N = k(!1), O = k("add"), E = k({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), K = R(() => {
      if (!M.value.trim()) return _.value;
      const Ae = M.value.toLowerCase();
      return _.value.filter(
        (A) => A.name.toLowerCase().includes(Ae) || A.fetch_url.toLowerCase().includes(Ae) || A.push_url.toLowerCase().includes(Ae)
      );
    });
    async function ae() {
      S.value = !0, T.value = null;
      try {
        const Ae = await n();
        _.value = Ae.remotes, x.value = Ae.current_branch_tracking || null, await Promise.all(
          Ae.remotes.map(async (A) => {
            const oe = await d(A.name);
            oe && (C.value[A.name] = oe);
          })
        );
      } catch (Ae) {
        T.value = Ae instanceof Error ? Ae.message : "Failed to load remotes";
      } finally {
        S.value = !1;
      }
    }
    function fe() {
      O.value = "add", E.value = { name: "", fetchUrl: "", pushUrl: "" }, N.value = !0;
    }
    function ue(Ae) {
      const A = _.value.find((oe) => oe.name === Ae);
      A && (O.value = "edit", E.value = {
        name: A.name,
        fetchUrl: A.fetch_url,
        pushUrl: A.push_url
      }, N.value = !0);
    }
    async function we(Ae) {
      try {
        O.value === "add" ? await l(Ae.name, Ae.fetchUrl) : await u(Ae.name, Ae.fetchUrl, Ae.pushUrl || void 0), N.value = !1, await ae();
      } catch (A) {
        T.value = A instanceof Error ? A.message : "Operation failed";
      }
    }
    function X() {
      N.value = !1, E.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function G(Ae) {
      D.value = Ae;
      try {
        await c(Ae);
        const A = await d(Ae);
        A && (C.value[Ae] = A), o("toast", `✓ Fetched from ${Ae}`, "success");
      } catch (A) {
        o("toast", A instanceof Error ? A.message : "Fetch failed", "error");
      } finally {
        D.value = null;
      }
    }
    async function Y(Ae) {
      if (confirm(`Remove remote "${Ae}"?`))
        try {
          await r(Ae), await ae();
        } catch (A) {
          T.value = A instanceof Error ? A.message : "Failed to remove remote";
        }
    }
    function Re() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const se = k("idle"), ge = R(() => se.value === "pull_preview"), z = R(
      () => se.value === "resolving" || se.value === "validating"
    ), me = R(
      () => se.value === "validation_review" || se.value === "executing"
    ), Pe = k(!1), We = k(null), Ee = k(!1), H = k(null), ee = k(null), q = k(!1), Z = k(null), xe = k(null), ce = k(/* @__PURE__ */ new Map()), le = k(null), I = k(null), V = R(() => Z.value && mc(Z.value) ? Z.value : null);
    async function ie(Ae) {
      ee.value = Ae, se.value = "pull_preview", q.value = !0, Z.value = null, xe.value = null;
      try {
        Z.value = await m(Ae);
      } catch (A) {
        xe.value = A instanceof Error ? A.message : "Failed to load pull preview";
      } finally {
        q.value = !1;
      }
    }
    function Ce() {
      se.value = "idle", Z.value = null, xe.value = null, ee.value = null;
    }
    async function _e(Ae) {
      if (!ee.value) return;
      se.value = "executing", xe.value = null;
      const A = ee.value;
      try {
        const oe = await v(A, Ae);
        if (oe.rolled_back) {
          xe.value = `Pull failed and was rolled back: ${oe.error || "Unknown error"}`, se.value = "pull_preview";
          return;
        }
        ve(), se.value = "idle", o("toast", `✓ Pulled from ${A}`, "success"), await ae();
      } catch (oe) {
        xe.value = oe instanceof Error ? oe.message : "Pull failed", se.value = "pull_preview";
      }
    }
    function $e() {
      V.value && (se.value = "resolving", I.value = null);
    }
    function Ue(Ae, A) {
      ce.value.set(Ae, { name: Ae, resolution: A });
    }
    function ze() {
      se.value = "pull_preview";
    }
    async function Le() {
      se.value = "validating", I.value = null;
      try {
        const Ae = Array.from(ce.value.values());
        le.value = await g(ee.value, Ae), se.value = "validation_review";
      } catch (Ae) {
        I.value = Ae instanceof Error ? Ae.message : "Validation failed", se.value = "resolving";
      }
    }
    async function Ie() {
      se.value = "executing";
      const Ae = ee.value;
      try {
        const A = Array.from(ce.value.values()), oe = await v(Ae, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: A
        });
        if (oe.rolled_back) {
          xe.value = `Pull failed and was rolled back: ${oe.error || "Unknown error"}`, se.value = "pull_preview";
          return;
        }
        ve(), se.value = "idle", o("toast", `✓ Pulled from ${Ae}`, "success"), await ae();
      } catch (A) {
        xe.value = A instanceof Error ? A.message : "Pull failed", se.value = "validation_review";
      }
    }
    function Ke() {
      se.value = "resolving";
    }
    function Ve() {
      ve(), se.value = "idle";
    }
    function ve() {
      ce.value.clear(), le.value = null, I.value = null, xe.value = null, Z.value = null, ee.value = null;
    }
    async function Q(Ae) {
      ee.value = Ae, Pe.value = !0, q.value = !0, We.value = null, H.value = null;
      try {
        We.value = await p(Ae);
      } catch (A) {
        H.value = A instanceof Error ? A.message : "Failed to load push preview";
      } finally {
        q.value = !1;
      }
    }
    async function He() {
      if (ee.value) {
        q.value = !0, H.value = null;
        try {
          We.value = await p(ee.value);
        } catch (Ae) {
          H.value = Ae instanceof Error ? Ae.message : "Failed to refresh push preview";
        } finally {
          q.value = !1;
        }
      }
    }
    function ke() {
      Pe.value = !1, We.value = null, H.value = null, ee.value = null;
    }
    async function Ye(Ae) {
      var oe;
      if (!ee.value) return;
      Ee.value = !0;
      const A = ee.value;
      H.value = null;
      try {
        await w(A, Ae), ke(), o("toast", `✓ Pushed to ${A}`, "success"), await ae();
      } catch (pe) {
        const Je = pe instanceof Error ? pe.message : "Push failed";
        H.value = Je, pe instanceof Yr && pe.status === 409 && ((oe = pe.data) != null && oe.needs_force) && We.value ? We.value = {
          ...We.value,
          remote_has_new_commits: !0,
          needs_force: !0,
          can_push: !0,
          block_reason: null
        } : o("toast", Je, "error");
      } finally {
        Ee.value = !1;
      }
    }
    function ot() {
      const Ae = ee.value;
      ke(), Ae && ie(Ae);
    }
    return rt(ae), (Ae, A) => (a(), i(j, null, [
      b(At, null, Yt({
        content: h(() => [
          S.value ? (a(), L(xs, {
            key: 0,
            message: "Loading remotes..."
          })) : T.value ? (a(), L(Ss, {
            key: 1,
            message: T.value,
            retry: !0,
            onRetry: ae
          }, null, 8, ["message"])) : (a(), i(j, { key: 2 }, [
            e.embedded && !N.value ? (a(), i("div", sI, [
              s("div", oI, [
                b(io, {
                  modelValue: M.value,
                  "onUpdate:modelValue": A[2] || (A[2] = (oe) => M.value = oe),
                  placeholder: "🔍 Search remotes..."
                }, null, 8, ["modelValue"])
              ]),
              b(Te, {
                variant: "primary",
                size: "sm",
                onClick: fe
              }, {
                default: h(() => [...A[5] || (A[5] = [
                  $(" + Add Remote ", -1)
                ])]),
                _: 1
              })
            ])) : y("", !0),
            N.value ? (a(), L(WS, {
              key: 1,
              mode: O.value,
              "remote-name": E.value.name,
              "fetch-url": E.value.fetchUrl,
              "push-url": E.value.pushUrl,
              onSubmit: we,
              onCancel: X
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : y("", !0),
            _.value.length && !N.value ? (a(), L(ia, {
              key: 2,
              variant: "compact"
            }, {
              default: h(() => [
                $(" Total: " + f(_.value.length) + " remote" + f(_.value.length !== 1 ? "s" : "") + " ", 1),
                x.value ? (a(), i("span", nI, " • Tracking: " + f(x.value.remote) + "/" + f(x.value.branch), 1)) : y("", !0)
              ]),
              _: 1
            })) : y("", !0),
            K.value.length && !N.value ? (a(), L(St, {
              key: 3,
              title: "REMOTES",
              count: K.value.length
            }, {
              default: h(() => [
                (a(!0), i(j, null, he(K.value, (oe) => (a(), L(MS, {
                  key: oe.name,
                  remote: oe,
                  "sync-status": C.value[oe.name],
                  "fetching-remote": D.value,
                  onFetch: G,
                  onEdit: ue,
                  onRemove: Y,
                  onPull: ie,
                  onPush: Q
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            !K.value.length && !N.value ? (a(), L(cs, {
              key: 4,
              icon: "🌐",
              message: M.value ? `No remotes match '${M.value}'` : "No remotes configured."
            }, {
              actions: h(() => [
                b(Te, {
                  variant: "primary",
                  onClick: fe
                }, {
                  default: h(() => [...A[6] || (A[6] = [
                    $(" Add Your First Remote ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["message"])) : y("", !0)
          ], 64))
        ]),
        _: 2
      }, [
        e.embedded ? void 0 : {
          name: "header",
          fn: h(() => [
            b(zt, {
              title: "GIT REMOTES",
              "show-info": !0,
              onInfoClick: A[0] || (A[0] = (oe) => P.value = !0)
            }, {
              actions: h(() => [
                N.value ? y("", !0) : (a(), L(Te, {
                  key: 0,
                  variant: "primary",
                  size: "sm",
                  onClick: fe
                }, {
                  default: h(() => [...A[4] || (A[4] = [
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
          fn: h(() => [
            N.value ? y("", !0) : (a(), L(io, {
              key: 0,
              modelValue: M.value,
              "onUpdate:modelValue": A[1] || (A[1] = (oe) => M.value = oe),
              placeholder: "🔍 Search remotes..."
            }, null, 8, ["modelValue"]))
          ]),
          key: "1"
        }
      ]), 1024),
      b(ts, {
        show: P.value,
        title: "About Git Remotes",
        onClose: A[3] || (A[3] = (oe) => P.value = !1)
      }, {
        content: h(() => [...A[7] || (A[7] = [
          s("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          s("p", null, [
            $(" The "),
            s("strong", null, '"origin"'),
            $(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: h(() => [
          b(Te, {
            variant: "link",
            onClick: Re
          }, {
            default: h(() => [...A[8] || (A[8] = [
              $(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      b(P8, {
        show: ge.value,
        "remote-name": ee.value || "",
        preview: Z.value,
        loading: q.value,
        pulling: se.value === "executing",
        error: xe.value,
        "conflict-resolutions": ce.value,
        onClose: Ce,
        onPull: _e,
        onOpenConflictResolution: $e
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      b(o4, {
        show: Pe.value,
        "remote-name": ee.value || "",
        preview: We.value,
        loading: q.value,
        pushing: Ee.value,
        error: H.value,
        onClose: ke,
        onPush: Ye,
        onPullFirst: ot,
        onRevalidate: He
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing", "error"]),
      z.value && V.value ? (a(), L(N4, {
        key: 0,
        "workflow-conflicts": V.value.workflow_conflicts,
        resolutions: ce.value,
        "operation-type": "pull",
        validating: se.value === "validating",
        error: I.value,
        onClose: ze,
        onResolve: Ue,
        onApply: Le
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : y("", !0),
      me.value && le.value ? (a(), L(tI, {
        key: 1,
        validation: le.value,
        "operation-type": "pull",
        executing: se.value === "executing",
        onProceed: Ie,
        onGoBack: Ke,
        onCancel: Ve
      }, null, 8, ["validation", "executing"])) : y("", !0)
    ], 64));
  }
}), lI = /* @__PURE__ */ Se(aI, [["__scopeId", "data-v-a189530f"]]), iI = /* @__PURE__ */ be({
  __name: "VersionControlSection",
  props: {
    commits: {},
    currentRef: {},
    branches: {},
    current: {},
    initialTab: {}
  },
  emits: ["select", "checkout", "switch", "create", "delete", "toast"],
  setup(e, { emit: t }) {
    const o = e, n = t, l = [
      { id: "history", label: "History" },
      { id: "branches", label: "Branches" },
      { id: "remotes", label: "Remotes" }
    ], r = k(o.initialTab ?? "history");
    return kt(() => o.initialTab, (u) => {
      u && (r.value = u);
    }), (u, c) => (a(), L(At, null, {
      header: h(() => [
        b(zt, { title: "VERSION CONTROL" })
      ]),
      search: h(() => [
        b(Ml, {
          modelValue: r.value,
          "onUpdate:modelValue": c[0] || (c[0] = (d) => r.value = d),
          tabs: l
        }, null, 8, ["modelValue"])
      ]),
      content: h(() => [
        r.value === "history" ? (a(), L(G5, {
          key: 0,
          embedded: "",
          commits: e.commits,
          "current-ref": e.currentRef,
          onSelect: c[1] || (c[1] = (d) => n("select", d)),
          onCheckout: c[2] || (c[2] = (d) => n("checkout", d))
        }, null, 8, ["commits", "current-ref"])) : r.value === "branches" ? (a(), L(mS, {
          key: 1,
          embedded: "",
          branches: e.branches,
          current: e.current,
          onSwitch: c[3] || (c[3] = (d) => n("switch", d)),
          onCreate: c[4] || (c[4] = (d) => n("create", d)),
          onDelete: c[5] || (c[5] = (d) => n("delete", d))
        }, null, 8, ["branches", "current"])) : (a(), L(lI, {
          key: 2,
          embedded: "",
          onToast: c[6] || (c[6] = (d, m) => n("toast", d, m))
        }))
      ]),
      _: 1
    }));
  }
});
async function vc(e) {
  var o;
  if (typeof navigator < "u" && ((o = navigator.clipboard) != null && o.writeText)) {
    await navigator.clipboard.writeText(e);
    return;
  }
  if (typeof document > "u")
    throw new Error("Clipboard unavailable");
  const t = document.createElement("textarea");
  t.value = e, t.setAttribute("readonly", ""), t.style.position = "fixed", t.style.top = "-1000px", t.style.left = "-1000px", t.style.opacity = "0", document.body.appendChild(t);
  try {
    if (t.focus(), t.select(), t.setSelectionRange(0, t.value.length), !document.execCommand("copy"))
      throw new Error("execCommand copy failed");
  } finally {
    t.remove();
  }
}
const rI = { class: "text-viewer-wrapper" }, cI = ["disabled", "title"], uI = { class: "text-content" }, dI = /* @__PURE__ */ be({
  __name: "TextViewer",
  props: {
    content: {}
  },
  setup(e) {
    const t = e, o = k(null), n = k("idle");
    async function l() {
      if (t.content)
        try {
          await vc(t.content), n.value = "copied", setTimeout(() => {
            n.value = "idle";
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
    return (c, d) => (a(), i("div", rI, [
      s("div", {
        ref_key: "textOutputElement",
        ref: o,
        class: "text-output",
        tabindex: "0",
        onKeydown: r,
        onCopy: u
      }, [
        s("button", {
          class: "copy-overlay-btn",
          onClick: l,
          disabled: n.value !== "idle",
          title: n.value === "copied" ? "Copied!" : "Copy text"
        }, f(n.value === "copied" ? "Copied!" : "Copy"), 9, cI),
        s("pre", uI, f(e.content), 1)
      ], 544)
    ]));
  }
}), fI = /* @__PURE__ */ Se(dI, [["__scopeId", "data-v-85a537ba"]]), mI = {
  key: 1,
  class: "manifest-viewer-shell"
}, vI = { class: "manifest-path" }, pI = /* @__PURE__ */ be({
  __name: "ManifestSection",
  props: {
    embedded: { type: Boolean }
  },
  setup(e) {
    const { getEnvironmentManifest: t } = vt(), o = k(!1), n = k(null), l = k(!1), r = k({
      path: "",
      exists: !1,
      content: ""
    });
    async function u() {
      o.value = !0, n.value = null;
      try {
        r.value = await t();
      } catch (c) {
        n.value = c instanceof Error ? c.message : "Failed to load manifest";
      } finally {
        o.value = !1;
      }
    }
    return rt(u), (c, d) => (a(), i(j, null, [
      b(At, null, Yt({
        content: h(() => [
          o.value ? (a(), L(xs, {
            key: 0,
            message: "Loading manifest..."
          })) : n.value ? (a(), L(Ss, {
            key: 1,
            message: n.value,
            retry: !0,
            onRetry: u
          }, null, 8, ["message"])) : (a(), i(j, { key: 2 }, [
            !r.value.exists || !r.value.content ? (a(), L(cs, {
              key: 0,
              icon: "📄",
              message: "No manifest content available"
            })) : (a(), i("div", mI, [
              b(fI, {
                content: r.value.content
              }, null, 8, ["content"])
            ]))
          ], 64))
        ]),
        _: 2
      }, [
        e.embedded ? void 0 : {
          name: "header",
          fn: h(() => [
            b(zt, {
              title: "MANIFEST (PYPROJECT.TOML)",
              "show-info": !0,
              onInfoClick: d[0] || (d[0] = (m) => l.value = !0)
            }, {
              actions: h(() => [
                b(Te, {
                  variant: "secondary",
                  size: "sm",
                  onClick: u,
                  disabled: o.value
                }, {
                  default: h(() => [
                    $(f(o.value ? "Loading..." : "Refresh"), 1)
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
      b(ts, {
        show: l.value,
        title: "About Manifest View",
        onClose: d[2] || (d[2] = (m) => l.value = !1)
      }, {
        content: h(() => [
          d[3] || (d[3] = s("p", null, [
            $(" This view shows the live "),
            s("strong", null, "pyproject.toml"),
            $(" from the current environment's "),
            s("strong", null, ".cec"),
            $(" directory. ")
          ], -1)),
          d[4] || (d[4] = s("p", { style: { "margin-top": "var(--cg-space-2)" } }, " It is read-only and intended for quick inspection and debugging without leaving the ComfyGit panel. ", -1)),
          d[5] || (d[5] = s("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Path: ", -1)),
          s("div", vI, [
            s("code", null, f(r.value.path || "unknown"), 1)
          ]),
          d[6] || (d[6] = s("p", { style: { "margin-top": "var(--cg-space-2)" } }, null, -1))
        ]),
        actions: h(() => [
          b(Te, {
            variant: "primary",
            onClick: d[1] || (d[1] = (m) => l.value = !1)
          }, {
            default: h(() => [...d[7] || (d[7] = [
              $(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), gI = /* @__PURE__ */ Se(pI, [["__scopeId", "data-v-814a8fdd"]]), hI = { class: "log-viewer-wrapper" }, yI = ["disabled", "title"], wI = /* @__PURE__ */ be({
  __name: "LogViewer",
  props: {
    logs: {},
    rawFormat: { type: Boolean }
  },
  setup(e) {
    const t = e, o = k(null), n = k("idle"), l = R(() => t.logs.map((m) => ({
      text: t.rawFormat || !m.timestamp ? m.message : `${m.timestamp} - ${m.name} - ${m.level} - ${m.func}:${m.line} - ${m.message}`,
      level: m.level
    })));
    async function r() {
      var v;
      await Pt();
      const m = (v = o.value) == null ? void 0 : v.closest(".panel-layout-content");
      m && (m.scrollTop = m.scrollHeight);
    }
    rt(r), kt(() => t.logs, r);
    async function u() {
      if (l.value.length === 0) return;
      const m = l.value.map((v) => v.text).join(`
`);
      try {
        await vc(m), n.value = "copied", setTimeout(() => {
          n.value = "idle";
        }, 2e3);
      } catch (v) {
        console.error("Failed to copy logs:", v);
      }
    }
    function c(m) {
      (m.ctrlKey || m.metaKey) && m.key === "c" && m.stopPropagation();
    }
    function d(m) {
      m.stopPropagation();
    }
    return (m, v) => (a(), i("div", hI, [
      s("div", {
        ref_key: "logOutputElement",
        ref: o,
        class: "log-output",
        onKeydown: c,
        onCopy: d,
        tabindex: "0"
      }, [
        s("button", {
          class: "copy-overlay-btn",
          onClick: u,
          disabled: n.value !== "idle",
          title: n.value === "copied" ? "Copied!" : "Copy all logs"
        }, f(n.value === "copied" ? "Copied!" : "Copy"), 9, yI),
        (a(!0), i(j, null, he(l.value, (p, w) => (a(), i("div", {
          key: w,
          class: Fe(`log-line log-level-${p.level.toLowerCase()}`)
        }, f(p.text), 3))), 128))
      ], 544)
    ]));
  }
}), pc = /* @__PURE__ */ Se(wI, [["__scopeId", "data-v-5aaf1b88"]]), _I = /* @__PURE__ */ be({
  __name: "DebugEnvSection",
  props: {
    embedded: { type: Boolean }
  },
  setup(e) {
    const { getEnvironmentLogs: t, getStatus: o, getEnvironmentLogPath: n, openFile: l } = vt(), r = k([]), u = k(!1), c = k(null), d = k(!1), m = k("production"), v = k(null), p = k(!1);
    async function w() {
      u.value = !0, c.value = null;
      try {
        r.value = await t(void 0, 500);
        try {
          const x = await o();
          m.value = x.environment || "production";
        } catch {
        }
      } catch (x) {
        c.value = x instanceof Error ? x.message : "Failed to load environment logs";
      } finally {
        u.value = !1;
      }
    }
    async function g() {
      try {
        const x = await n();
        x.exists && (v.value = x.path);
      } catch {
      }
    }
    async function _() {
      if (v.value) {
        p.value = !0;
        try {
          await l(v.value);
        } catch (x) {
          console.error("Failed to open log file:", x);
        } finally {
          p.value = !1;
        }
      }
    }
    return rt(() => {
      w(), g();
    }), (x, C) => (a(), i(j, null, [
      b(At, null, Yt({
        content: h(() => [
          u.value ? (a(), L(xs, {
            key: 0,
            message: "Loading environment logs..."
          })) : c.value ? (a(), L(Ss, {
            key: 1,
            message: c.value,
            retry: !0,
            onRetry: w
          }, null, 8, ["message"])) : (a(), i(j, { key: 2 }, [
            r.value.length === 0 ? (a(), L(cs, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (a(), L(pc, {
              key: 1,
              logs: r.value
            }, null, 8, ["logs"]))
          ], 64))
        ]),
        _: 2
      }, [
        e.embedded ? void 0 : {
          name: "header",
          fn: h(() => [
            b(zt, {
              title: "DEBUG (ENVIRONMENT LOGS)",
              "show-info": !0,
              onInfoClick: C[0] || (C[0] = (S) => d.value = !0)
            }, {
              actions: h(() => [
                b(Te, {
                  variant: "secondary",
                  size: "sm",
                  onClick: _,
                  disabled: !v.value || p.value,
                  title: "Open log file in default editor"
                }, {
                  default: h(() => [
                    $(f(p.value ? "Opening..." : "Open Log File"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                b(Te, {
                  variant: "secondary",
                  size: "sm",
                  onClick: w,
                  disabled: u.value
                }, {
                  default: h(() => [
                    $(f(u.value ? "Loading..." : "Refresh"), 1)
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
      b(ts, {
        show: d.value,
        title: "About Environment Logs",
        onClose: C[2] || (C[2] = (S) => d.value = !1)
      }, {
        content: h(() => [
          s("p", null, [
            C[3] || (C[3] = $(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            s("strong", null, f(m.value), 1),
            C[4] || (C[4] = $(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          C[5] || (C[5] = s("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            s("strong", null, "Log Levels:"),
            s("br"),
            s("strong", null, "ERROR:"),
            $(" Critical failures requiring attention"),
            s("br"),
            s("strong", null, "WARNING:"),
            $(" Potential issues or important notices"),
            s("br"),
            s("strong", null, "INFO:"),
            $(" General operational information"),
            s("br"),
            s("strong", null, "DEBUG:"),
            $(" Detailed debugging information ")
          ], -1))
        ]),
        actions: h(() => [
          b(Te, {
            variant: "primary",
            onClick: C[1] || (C[1] = (S) => d.value = !1)
          }, {
            default: h(() => [...C[6] || (C[6] = [
              $(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), xi = /* @__PURE__ */ be({
  __name: "WorkspaceDebugSection",
  props: {
    embedded: { type: Boolean },
    initialTab: {}
  },
  setup(e) {
    const {
      getWorkspaceLogs: t,
      getWorkspaceLogPath: o,
      getOrchestratorLogs: n,
      getOrchestratorLogPath: l,
      openFile: r
    } = vt(), u = e, c = k(u.initialTab ?? "workspace"), d = k([]), m = k(!1), v = k(null), p = k(!1), w = k(null), g = k(null), _ = k(!1), x = R(() => c.value === "workspace" ? w.value : g.value);
    async function C() {
      m.value = !0, v.value = null;
      try {
        c.value === "workspace" ? d.value = await t(void 0, 500) : d.value = await n(void 0, 500);
      } catch (M) {
        v.value = M instanceof Error ? M.message : `Failed to load ${c.value} logs`;
      } finally {
        m.value = !1;
      }
    }
    async function S() {
      try {
        const [M, P] = await Promise.all([
          o(),
          l()
        ]);
        M.exists && (w.value = M.path), P.exists && (g.value = P.path);
      } catch {
      }
    }
    async function T() {
      if (x.value) {
        _.value = !0;
        try {
          await r(x.value);
        } catch (M) {
          console.error("Failed to open log file:", M);
        } finally {
          _.value = !1;
        }
      }
    }
    return kt(c, () => {
      C();
    }), kt(() => u.initialTab, (M) => {
      M && (c.value = M);
    }), rt(() => {
      C(), S();
    }), (M, P) => (a(), i(j, null, [
      b(At, null, Yt({
        content: h(() => [
          m.value ? (a(), L(xs, {
            key: 0,
            message: `Loading ${c.value} logs...`
          }, null, 8, ["message"])) : v.value ? (a(), L(Ss, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: C
          }, null, 8, ["message"])) : (a(), i(j, { key: 2 }, [
            d.value.length === 0 ? (a(), L(cs, {
              key: 0,
              icon: "📝",
              message: `No ${c.value} logs available`
            }, null, 8, ["message"])) : (a(), L(pc, {
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
          fn: h(() => [
            b(zt, {
              title: "DEBUG (LOGS)",
              "show-info": !0,
              onInfoClick: P[0] || (P[0] = (D) => p.value = !0)
            }, {
              actions: h(() => [
                b(Te, {
                  variant: "secondary",
                  size: "sm",
                  onClick: T,
                  disabled: !x.value || _.value,
                  title: "Open log file in default editor"
                }, {
                  default: h(() => [
                    $(f(_.value ? "Opening..." : "Open Log File"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                b(Te, {
                  variant: "secondary",
                  size: "sm",
                  onClick: C,
                  disabled: m.value
                }, {
                  default: h(() => [
                    $(f(m.value ? "Loading..." : "Refresh"), 1)
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
          fn: h(() => [
            b(Ml, {
              modelValue: c.value,
              "onUpdate:modelValue": P[1] || (P[1] = (D) => c.value = D),
              tabs: [
                { id: "workspace", label: "Workspace" },
                { id: "orchestrator", label: "Orchestrator" }
              ]
            }, null, 8, ["modelValue"])
          ]),
          key: "1"
        }
      ]), 1024),
      b(ts, {
        show: p.value,
        title: "About Logs",
        onClose: P[3] || (P[3] = (D) => p.value = !1)
      }, {
        content: h(() => [...P[4] || (P[4] = [
          s("p", null, [
            s("strong", null, "Workspace Logs:"),
            $(" System-level events for the entire ComfyGit workspace, including operations that affect multiple environments. ")
          ], -1),
          s("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            s("strong", null, "Orchestrator Logs:"),
            $(" Process management events including ComfyUI startup, restarts, environment switches, and any errors during handoff. ")
          ], -1),
          s("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            s("strong", null, "Log Levels:"),
            s("br"),
            s("strong", null, "ERROR:"),
            $(" Critical failures requiring attention"),
            s("br"),
            s("strong", null, "WARNING:"),
            $(" Potential issues or deprecated features"),
            s("br"),
            s("strong", null, "INFO:"),
            $(" General operational information"),
            s("br"),
            s("strong", null, "DEBUG:"),
            $(" Detailed debugging information ")
          ], -1)
        ])]),
        actions: h(() => [
          b(Te, {
            variant: "primary",
            onClick: P[2] || (P[2] = (D) => p.value = !1)
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
}), kI = /* @__PURE__ */ be({
  __name: "DiagnosticsSection",
  props: {
    initialTab: {}
  },
  setup(e) {
    const t = e, o = [
      { id: "env", label: "Environment" },
      { id: "workspace", label: "Workspace" },
      { id: "orchestrator", label: "Orchestrator" }
    ], n = k(t.initialTab ?? "manifest"), l = k(
      t.initialTab && t.initialTab !== "manifest" ? t.initialTab : "env"
    ), r = k(!1), u = R(() => n.value === "manifest" ? "MANIFEST" : "LOGGING"), c = R(() => n.value === "manifest" ? "About Manifest" : "About Logging");
    return kt(() => t.initialTab, (d) => {
      d && (n.value = d, d !== "manifest" && (l.value = d));
    }), kt(l, (d) => {
      n.value !== "manifest" && (n.value = d);
    }), (d, m) => (a(), i(j, null, [
      b(At, null, Yt({
        header: h(() => [
          b(zt, {
            title: u.value,
            "show-info": !0,
            onInfoClick: m[0] || (m[0] = (v) => r.value = !0)
          }, null, 8, ["title"])
        ]),
        content: h(() => [
          n.value === "manifest" ? (a(), L(gI, {
            key: 0,
            embedded: ""
          })) : l.value === "env" ? (a(), L(_I, {
            key: 1,
            embedded: ""
          })) : l.value === "workspace" ? (a(), L(xi, {
            key: 2,
            embedded: "",
            "initial-tab": "workspace"
          })) : (a(), L(xi, {
            key: 3,
            embedded: "",
            "initial-tab": "orchestrator"
          }))
        ]),
        _: 2
      }, [
        n.value !== "manifest" ? {
          name: "search",
          fn: h(() => [
            b(Ml, {
              modelValue: l.value,
              "onUpdate:modelValue": m[1] || (m[1] = (v) => l.value = v),
              tabs: o
            }, null, 8, ["modelValue"])
          ]),
          key: "0"
        } : void 0
      ]), 1024),
      b(ts, {
        show: r.value,
        title: c.value,
        "max-width": "520px",
        onClose: m[3] || (m[3] = (v) => r.value = !1)
      }, {
        content: h(() => [
          n.value === "manifest" ? (a(), i(j, { key: 0 }, [
            m[4] || (m[4] = s("p", null, [
              s("strong", null, "Manifest"),
              $(" shows the live "),
              s("strong", null, "pyproject.toml"),
              $(" from the current environment's "),
              s("strong", null, ".cec"),
              $(" directory. ")
            ], -1)),
            m[5] || (m[5] = s("p", null, " Use it to inspect the environment state ComfyGit is tracking, including workflows, models, nodes, and workflow execution contracts. ", -1)),
            m[6] || (m[6] = s("p", null, " The manifest is read-only here. Change environment state through the manager actions or CLI, then commit the resulting manifest changes. ", -1))
          ], 64)) : (a(), i(j, { key: 1 }, [
            m[7] || (m[7] = s("p", null, [
              s("strong", null, "Logging"),
              $(" groups read-only logs for the current environment, workspace, and orchestrator. ")
            ], -1)),
            m[8] || (m[8] = s("p", null, [
              s("strong", null, "Environment"),
              $(" logs help debug workflow execution, model resolution, node installation, and other environment-local behavior. ")
            ], -1)),
            m[9] || (m[9] = s("p", null, [
              s("strong", null, "Workspace"),
              $(" logs show workspace-wide events that affect more than one environment. ")
            ], -1)),
            m[10] || (m[10] = s("p", null, [
              s("strong", null, "Orchestrator"),
              $(" logs show supervisor and handoff behavior for environment creation, switching, restarts, and process management. ")
            ], -1))
          ], 64))
        ]),
        actions: h(() => [
          b(Te, {
            variant: "primary",
            size: "sm",
            onClick: m[2] || (m[2] = (v) => r.value = !1)
          }, {
            default: h(() => [...m[11] || (m[11] = [
              $(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show", "title"])
    ], 64));
  }
}), bI = { class: "header-info" }, $I = { class: "commit-hash" }, CI = {
  key: 0,
  class: "commit-refs"
}, xI = { class: "commit-message" }, SI = { class: "commit-date" }, II = {
  key: 0,
  class: "loading"
}, EI = {
  key: 1,
  class: "changes-section"
}, TI = { class: "stats-row" }, MI = { class: "stat" }, PI = { class: "stat insertions" }, RI = { class: "stat deletions" }, LI = {
  key: 0,
  class: "change-group"
}, NI = {
  key: 1,
  class: "change-group"
}, DI = {
  key: 0,
  class: "version"
}, OI = {
  key: 2,
  class: "change-group"
}, UI = { class: "change-item" }, AI = /* @__PURE__ */ be({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(e) {
    const t = e, { getCommitDetail: o } = vt(), n = k(null), l = k(!0), r = R(() => {
      if (!n.value) return !1;
      const c = n.value.changes.workflows;
      return c.added.length > 0 || c.modified.length > 0 || c.deleted.length > 0;
    }), u = R(() => {
      if (!n.value) return !1;
      const c = n.value.changes.nodes;
      return c.added.length > 0 || c.removed.length > 0;
    });
    return rt(async () => {
      try {
        n.value = await o(t.commit.hash);
      } finally {
        l.value = !1;
      }
    }), (c, d) => (a(), L(It, {
      size: "md",
      "show-close-button": !1,
      onClose: d[3] || (d[3] = (m) => c.$emit("close"))
    }, {
      header: h(() => {
        var m, v, p, w;
        return [
          s("div", bI, [
            d[4] || (d[4] = s("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            s("span", $I, f(((m = n.value) == null ? void 0 : m.short_hash) || e.commit.short_hash || ((v = e.commit.hash) == null ? void 0 : v.slice(0, 7))), 1),
            (w = (p = n.value) == null ? void 0 : p.refs) != null && w.length ? (a(), i("span", CI, [
              (a(!0), i(j, null, he(n.value.refs, (g) => (a(), i("span", {
                key: g,
                class: "ref-badge"
              }, f(g), 1))), 128))
            ])) : y("", !0)
          ]),
          b(Ne, {
            variant: "ghost",
            size: "sm",
            onClick: d[0] || (d[0] = (g) => c.$emit("close"))
          }, {
            default: h(() => [...d[5] || (d[5] = [
              s("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                s("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ], -1)
            ])]),
            _: 1
          })
        ];
      }),
      body: h(() => {
        var m, v;
        return [
          s("div", xI, f(((m = n.value) == null ? void 0 : m.message) || e.commit.message), 1),
          s("div", SI, f(((v = n.value) == null ? void 0 : v.date_relative) || e.commit.date_relative || e.commit.relative_date), 1),
          l.value ? (a(), i("div", II, "Loading details...")) : n.value ? (a(), i("div", EI, [
            s("div", TI, [
              s("span", MI, f(n.value.stats.files_changed) + " files", 1),
              s("span", PI, "+" + f(n.value.stats.insertions), 1),
              s("span", RI, "-" + f(n.value.stats.deletions), 1)
            ]),
            r.value ? (a(), i("div", LI, [
              b(no, { variant: "section" }, {
                default: h(() => [...d[6] || (d[6] = [
                  $("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (a(!0), i(j, null, he(n.value.changes.workflows.added, (p) => (a(), i("div", {
                key: "add-" + p,
                class: "change-item added"
              }, [
                d[7] || (d[7] = s("span", { class: "change-icon" }, "+", -1)),
                s("span", null, f(p), 1)
              ]))), 128)),
              (a(!0), i(j, null, he(n.value.changes.workflows.modified, (p) => (a(), i("div", {
                key: "mod-" + p,
                class: "change-item modified"
              }, [
                d[8] || (d[8] = s("span", { class: "change-icon" }, "~", -1)),
                s("span", null, f(p), 1)
              ]))), 128)),
              (a(!0), i(j, null, he(n.value.changes.workflows.deleted, (p) => (a(), i("div", {
                key: "del-" + p,
                class: "change-item deleted"
              }, [
                d[9] || (d[9] = s("span", { class: "change-icon" }, "-", -1)),
                s("span", null, f(p), 1)
              ]))), 128))
            ])) : y("", !0),
            u.value ? (a(), i("div", NI, [
              b(no, { variant: "section" }, {
                default: h(() => [...d[10] || (d[10] = [
                  $("NODES", -1)
                ])]),
                _: 1
              }),
              (a(!0), i(j, null, he(n.value.changes.nodes.added, (p) => (a(), i("div", {
                key: "add-" + p.name,
                class: "change-item added"
              }, [
                d[11] || (d[11] = s("span", { class: "change-icon" }, "+", -1)),
                s("span", null, f(p.name), 1),
                p.version ? (a(), i("span", DI, "(" + f(p.version) + ")", 1)) : y("", !0)
              ]))), 128)),
              (a(!0), i(j, null, he(n.value.changes.nodes.removed, (p) => (a(), i("div", {
                key: "rem-" + p.name,
                class: "change-item deleted"
              }, [
                d[12] || (d[12] = s("span", { class: "change-icon" }, "-", -1)),
                s("span", null, f(p.name), 1)
              ]))), 128))
            ])) : y("", !0),
            n.value.changes.models.resolved > 0 ? (a(), i("div", OI, [
              b(no, { variant: "section" }, {
                default: h(() => [...d[13] || (d[13] = [
                  $("MODELS", -1)
                ])]),
                _: 1
              }),
              s("div", UI, [
                d[14] || (d[14] = s("span", { class: "change-icon" }, "●", -1)),
                s("span", null, f(n.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : y("", !0)
          ])) : y("", !0)
        ];
      }),
      footer: h(() => [
        b(Ne, {
          variant: "secondary",
          onClick: d[1] || (d[1] = (m) => c.$emit("createBranch", e.commit))
        }, {
          default: h(() => [...d[15] || (d[15] = [
            $(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        b(Ne, {
          variant: "primary",
          onClick: d[2] || (d[2] = (m) => c.$emit("checkout", e.commit))
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
}), zI = /* @__PURE__ */ Se(AI, [["__scopeId", "data-v-d256ff6d"]]), FI = { class: "popover-header" }, VI = { class: "popover-body" }, BI = {
  key: 0,
  class: "changes-summary"
}, WI = {
  key: 0,
  class: "change-item"
}, GI = {
  key: 1,
  class: "change-item"
}, jI = {
  key: 2,
  class: "change-item"
}, HI = {
  key: 3,
  class: "change-item"
}, qI = {
  key: 4,
  class: "change-item"
}, KI = {
  key: 5,
  class: "change-item"
}, JI = {
  key: 1,
  class: "no-changes"
}, QI = {
  key: 2,
  class: "loading"
}, YI = {
  key: 3,
  class: "issues-error"
}, XI = { class: "error-header" }, ZI = { class: "error-title" }, e6 = { class: "issues-list" }, t6 = { class: "workflow-state" }, s6 = { class: "message-section" }, o6 = { class: "popover-footer" }, n6 = {
  key: 1,
  class: "commit-popover"
}, a6 = { class: "popover-header" }, l6 = { class: "popover-body" }, i6 = {
  key: 0,
  class: "changes-summary"
}, r6 = {
  key: 0,
  class: "change-item"
}, c6 = {
  key: 1,
  class: "change-item"
}, u6 = {
  key: 2,
  class: "change-item"
}, d6 = {
  key: 3,
  class: "change-item"
}, f6 = {
  key: 4,
  class: "change-item"
}, m6 = {
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
}, h6 = { class: "error-header" }, y6 = { class: "error-title" }, w6 = { class: "issues-list" }, _6 = { class: "workflow-state" }, k6 = { class: "message-section" }, b6 = { class: "popover-footer" }, $6 = /* @__PURE__ */ be({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(e, { emit: t }) {
    const o = e, n = t, { commit: l } = vt(), r = k(""), u = k(!1), c = k(!1), d = R(() => {
      if (!o.status) return !1;
      const _ = o.status.workflows;
      return _.new.length > 0 || _.modified.length > 0 || _.deleted.length > 0 || o.status.has_changes;
    }), m = R(() => {
      if (!o.status) return !1;
      const _ = o.status.workflows, x = o.status.git_changes;
      return _.new.length > 0 || _.modified.length > 0 || _.deleted.length > 0 || x.nodes_added.length > 0 || x.nodes_removed.length > 0;
    }), v = R(() => {
      var _;
      return (_ = o.status) != null && _.workflows.analyzed ? o.status.workflows.analyzed.filter((x) => x.has_issues) : [];
    }), p = R(() => v.value.length > 0), w = R(() => p.value && !c.value);
    async function g() {
      var _, x, C, S;
      if (!(p.value && !c.value) && !(!d.value || !r.value.trim() || u.value)) {
        u.value = !0;
        try {
          const T = await l(r.value.trim(), c.value);
          if (T.status === "success") {
            const M = `Committed: ${((_ = T.summary) == null ? void 0 : _.new) || 0} new, ${((x = T.summary) == null ? void 0 : x.modified) || 0} modified, ${((C = T.summary) == null ? void 0 : C.deleted) || 0} deleted`;
            n("committed", { success: !0, message: M });
          } else if (T.status === "no_changes")
            n("committed", { success: !1, message: "No changes to commit" });
          else if (T.status === "blocked") {
            const M = ((S = T.issues) == null ? void 0 : S.map((P) => `${P.name}: ${P.issue}`).join("; ")) || "Unknown issues";
            n("committed", { success: !1, message: `Commit blocked - ${M}. Enable "Allow issues" to force.` });
          } else
            n("committed", { success: !1, message: T.message || "Commit failed" });
        } catch (T) {
          n("committed", { success: !1, message: T instanceof Error ? T.message : "Commit failed" });
        } finally {
          u.value = !1;
        }
      }
    }
    return (_, x) => e.asModal ? (a(), L(Lt, {
      key: 0,
      to: "body"
    }, [
      s("div", {
        class: "modal-overlay",
        onClick: x[5] || (x[5] = (C) => n("close"))
      }, [
        s("div", {
          class: "commit-popover modal",
          onClick: x[4] || (x[4] = mt(() => {
          }, ["stop"]))
        }, [
          s("div", FI, [
            x[11] || (x[11] = s("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            s("button", {
              class: "close-btn",
              onClick: x[0] || (x[0] = (C) => n("close"))
            }, [...x[10] || (x[10] = [
              s("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                s("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ], -1)
            ])])
          ]),
          s("div", VI, [
            e.status && d.value ? (a(), i("div", BI, [
              e.status.workflows.new.length ? (a(), i("div", WI, [
                x[12] || (x[12] = s("span", { class: "change-icon new" }, "+", -1)),
                s("span", null, f(e.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : y("", !0),
              e.status.workflows.modified.length ? (a(), i("div", GI, [
                x[13] || (x[13] = s("span", { class: "change-icon modified" }, "~", -1)),
                s("span", null, f(e.status.workflows.modified.length) + " modified", 1)
              ])) : y("", !0),
              e.status.workflows.deleted.length ? (a(), i("div", jI, [
                x[14] || (x[14] = s("span", { class: "change-icon deleted" }, "-", -1)),
                s("span", null, f(e.status.workflows.deleted.length) + " deleted", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_added.length ? (a(), i("div", HI, [
                x[15] || (x[15] = s("span", { class: "change-icon new" }, "+", -1)),
                s("span", null, f(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_removed.length ? (a(), i("div", qI, [
                x[16] || (x[16] = s("span", { class: "change-icon deleted" }, "-", -1)),
                s("span", null, f(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : y("", !0),
              m.value ? y("", !0) : (a(), i("div", KI, [...x[17] || (x[17] = [
                s("span", { class: "change-icon modified" }, "~", -1),
                s("span", null, "Configuration updated", -1)
              ])]))
            ])) : e.status ? (a(), i("div", JI, " No changes to commit ")) : (a(), i("div", QI, " Loading... ")),
            p.value ? (a(), i("div", YI, [
              s("div", XI, [
                x[18] || (x[18] = s("span", { class: "error-icon" }, "⚠", -1)),
                s("span", ZI, f(v.value.length) + " workflow(s) have issues", 1)
              ]),
              s("div", e6, [
                (a(!0), i(j, null, he(v.value, (C) => (a(), i("div", {
                  key: C.name,
                  class: "issue-item"
                }, [
                  s("strong", null, f(C.name), 1),
                  s("span", t6, "(" + f(C.sync_state) + ")", 1),
                  $(": " + f(C.issue_summary), 1)
                ]))), 128))
              ]),
              b(qn, {
                modelValue: c.value,
                "onUpdate:modelValue": x[1] || (x[1] = (C) => c.value = C),
                class: "allow-issues-toggle"
              }, {
                default: h(() => [...x[19] || (x[19] = [
                  $(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : y("", !0),
            s("div", s6, [
              b(Co, {
                modelValue: r.value,
                "onUpdate:modelValue": x[2] || (x[2] = (C) => r.value = C),
                placeholder: w.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
                disabled: !d.value || u.value || w.value,
                rows: 3,
                "submit-on-enter": !0,
                onCtrlEnter: g,
                onSubmit: g
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ])
          ]),
          s("div", o6, [
            b(Ne, {
              variant: "secondary",
              onClick: x[3] || (x[3] = (C) => n("close"))
            }, {
              default: h(() => [...x[20] || (x[20] = [
                $(" Cancel ", -1)
              ])]),
              _: 1
            }),
            b(Ne, {
              variant: c.value ? "danger" : "primary",
              disabled: !d.value || !r.value.trim() || u.value || w.value,
              loading: u.value,
              onClick: g
            }, {
              default: h(() => [
                $(f(u.value ? "Committing..." : c.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (a(), i("div", n6, [
      s("div", a6, [
        x[22] || (x[22] = s("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        s("button", {
          class: "close-btn",
          onClick: x[6] || (x[6] = (C) => n("close"))
        }, [...x[21] || (x[21] = [
          s("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "currentColor"
          }, [
            s("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
          ], -1)
        ])])
      ]),
      s("div", l6, [
        e.status && d.value ? (a(), i("div", i6, [
          e.status.workflows.new.length ? (a(), i("div", r6, [
            x[23] || (x[23] = s("span", { class: "change-icon new" }, "+", -1)),
            s("span", null, f(e.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : y("", !0),
          e.status.workflows.modified.length ? (a(), i("div", c6, [
            x[24] || (x[24] = s("span", { class: "change-icon modified" }, "~", -1)),
            s("span", null, f(e.status.workflows.modified.length) + " modified", 1)
          ])) : y("", !0),
          e.status.workflows.deleted.length ? (a(), i("div", u6, [
            x[25] || (x[25] = s("span", { class: "change-icon deleted" }, "-", -1)),
            s("span", null, f(e.status.workflows.deleted.length) + " deleted", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_added.length ? (a(), i("div", d6, [
            x[26] || (x[26] = s("span", { class: "change-icon new" }, "+", -1)),
            s("span", null, f(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_removed.length ? (a(), i("div", f6, [
            x[27] || (x[27] = s("span", { class: "change-icon deleted" }, "-", -1)),
            s("span", null, f(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : y("", !0),
          m.value ? y("", !0) : (a(), i("div", m6, [...x[28] || (x[28] = [
            s("span", { class: "change-icon modified" }, "~", -1),
            s("span", null, "Configuration updated", -1)
          ])]))
        ])) : e.status ? (a(), i("div", v6, " No changes to commit ")) : (a(), i("div", p6, " Loading... ")),
        p.value ? (a(), i("div", g6, [
          s("div", h6, [
            x[29] || (x[29] = s("span", { class: "error-icon" }, "⚠", -1)),
            s("span", y6, f(v.value.length) + " workflow(s) have issues", 1)
          ]),
          s("div", w6, [
            (a(!0), i(j, null, he(v.value, (C) => (a(), i("div", {
              key: C.name,
              class: "issue-item"
            }, [
              s("strong", null, f(C.name), 1),
              s("span", _6, "(" + f(C.sync_state) + ")", 1),
              $(": " + f(C.issue_summary), 1)
            ]))), 128))
          ]),
          b(qn, {
            modelValue: c.value,
            "onUpdate:modelValue": x[7] || (x[7] = (C) => c.value = C),
            class: "allow-issues-toggle"
          }, {
            default: h(() => [...x[30] || (x[30] = [
              $(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : y("", !0),
        s("div", k6, [
          b(Co, {
            modelValue: r.value,
            "onUpdate:modelValue": x[8] || (x[8] = (C) => r.value = C),
            placeholder: w.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
            disabled: !d.value || u.value || w.value,
            rows: 3,
            "submit-on-enter": !0,
            onCtrlEnter: g,
            onSubmit: g
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ])
      ]),
      s("div", b6, [
        b(Ne, {
          variant: "secondary",
          onClick: x[9] || (x[9] = (C) => n("close"))
        }, {
          default: h(() => [...x[31] || (x[31] = [
            $(" Cancel ", -1)
          ])]),
          _: 1
        }),
        b(Ne, {
          variant: c.value ? "danger" : "primary",
          disabled: !d.value || !r.value.trim() || u.value || w.value,
          loading: u.value,
          onClick: g
        }, {
          default: h(() => [
            $(f(u.value ? "Committing..." : c.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), gc = /* @__PURE__ */ Se($6, [["__scopeId", "data-v-5f897631"]]), C6 = { class: "modal-header" }, x6 = { class: "modal-body" }, S6 = { class: "switch-message" }, I6 = { class: "switch-details" }, E6 = { class: "modal-actions" }, T6 = /* @__PURE__ */ be({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (t, o) => (a(), L(Lt, { to: "body" }, [
      e.show ? (a(), i("div", {
        key: 0,
        class: "modal-overlay",
        onClick: o[4] || (o[4] = (n) => t.$emit("close"))
      }, [
        s("div", {
          class: "modal-content",
          onClick: o[3] || (o[3] = mt(() => {
          }, ["stop"]))
        }, [
          s("div", C6, [
            o[5] || (o[5] = s("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            s("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (n) => t.$emit("close"))
            }, "✕")
          ]),
          s("div", x6, [
            s("p", S6, [
              o[6] || (o[6] = $(" Switch from ", -1)),
              s("strong", null, f(e.fromEnvironment), 1),
              o[7] || (o[7] = $(" to ", -1)),
              s("strong", null, f(e.toEnvironment), 1),
              o[8] || (o[8] = $("? ", -1))
            ]),
            o[9] || (o[9] = s("div", { class: "warning-box" }, [
              s("span", { class: "warning-icon" }, "⚠"),
              s("span", null, "This will restart ComfyUI")
            ], -1)),
            s("p", I6, ' Your current work will be preserved. You can switch back to "' + f(e.fromEnvironment) + '" anytime. ', 1),
            o[10] || (o[10] = s("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          s("div", E6, [
            b(Te, {
              variant: "secondary",
              onClick: o[1] || (o[1] = (n) => t.$emit("close"))
            }, {
              default: h(() => [...o[11] || (o[11] = [
                $(" Cancel ", -1)
              ])]),
              _: 1
            }),
            b(Te, {
              variant: "primary",
              onClick: o[2] || (o[2] = (n) => t.$emit("confirm"))
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
}), M6 = /* @__PURE__ */ Se(T6, [["__scopeId", "data-v-e9c5253e"]]), P6 = {
  key: 0,
  class: "modal-overlay"
}, R6 = { class: "modal-content" }, L6 = { class: "modal-body" }, N6 = { class: "progress-info" }, D6 = { class: "progress-percentage" }, O6 = { class: "progress-state" }, U6 = { class: "switch-steps" }, A6 = { class: "step-icon" }, z6 = { class: "step-label" }, F6 = /* @__PURE__ */ be({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(e) {
    const t = e, o = R(() => {
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
      return t.message || r[t.state] || t.state;
    }), n = R(() => t.state === "complete" ? "success" : t.state === "critical_failure" || t.state === "rolled_back" ? "error" : "default"), l = R(() => {
      const r = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], u = r.findIndex((c) => c.state === t.state);
      return r.map((c, d) => {
        let m = "pending", v = "○";
        return d < u ? (m = "completed", v = "✓") : d === u && (m = "active", v = "⟳"), {
          ...c,
          status: m,
          icon: v
        };
      });
    });
    return (r, u) => (a(), L(Lt, { to: "body" }, [
      e.show ? (a(), i("div", P6, [
        s("div", R6, [
          u[1] || (u[1] = s("div", { class: "modal-header" }, [
            s("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          s("div", L6, [
            b(ic, {
              progress: e.progress,
              variant: n.value
            }, null, 8, ["progress", "variant"]),
            s("div", N6, [
              s("div", D6, f(e.progress) + "%", 1),
              s("div", O6, f(o.value), 1)
            ]),
            s("div", U6, [
              (a(!0), i(j, null, he(l.value, (c) => (a(), i("div", {
                key: c.state,
                class: Fe(["switch-step", c.status])
              }, [
                s("span", A6, f(c.icon), 1),
                s("span", z6, f(c.label), 1)
              ], 2))), 128))
            ]),
            u[0] || (u[0] = s("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : y("", !0)
    ]));
  }
}), V6 = /* @__PURE__ */ Se(F6, [["__scopeId", "data-v-768a5078"]]), B6 = { class: "modal-header" }, W6 = { class: "modal-body" }, G6 = {
  key: 0,
  class: "node-section"
}, j6 = { class: "node-list" }, H6 = {
  key: 1,
  class: "node-section"
}, q6 = { class: "node-list" }, K6 = { class: "modal-actions" }, J6 = /* @__PURE__ */ be({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (t, o) => (a(), L(Lt, { to: "body" }, [
      e.show ? (a(), i("div", {
        key: 0,
        class: "modal-overlay",
        onClick: o[4] || (o[4] = (n) => t.$emit("close"))
      }, [
        s("div", {
          class: "modal-content",
          onClick: o[3] || (o[3] = mt(() => {
          }, ["stop"]))
        }, [
          s("div", B6, [
            o[5] || (o[5] = s("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            s("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (n) => t.$emit("close"))
            }, "✕")
          ]),
          s("div", W6, [
            o[8] || (o[8] = s("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            e.mismatchDetails.missing_nodes.length ? (a(), i("div", G6, [
              o[6] || (o[6] = s("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              s("div", j6, [
                (a(!0), i(j, null, he(e.mismatchDetails.missing_nodes, (n) => (a(), i("div", {
                  key: n,
                  class: "node-item add"
                }, " + " + f(n), 1))), 128))
              ])
            ])) : y("", !0),
            e.mismatchDetails.extra_nodes.length ? (a(), i("div", H6, [
              o[7] || (o[7] = s("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              s("div", q6, [
                (a(!0), i(j, null, he(e.mismatchDetails.extra_nodes, (n) => (a(), i("div", {
                  key: n,
                  class: "node-item remove"
                }, " - " + f(n), 1))), 128))
              ])
            ])) : y("", !0),
            o[9] || (o[9] = s("div", { class: "warning-box" }, [
              s("span", { class: "warning-icon" }, "⚠"),
              s("span", null, "This may take several minutes")
            ], -1))
          ]),
          s("div", K6, [
            b(Te, {
              variant: "secondary",
              onClick: o[1] || (o[1] = (n) => t.$emit("close"))
            }, {
              default: h(() => [...o[10] || (o[10] = [
                $(" Cancel ", -1)
              ])]),
              _: 1
            }),
            b(Te, {
              variant: "primary",
              onClick: o[2] || (o[2] = (n) => t.$emit("confirm"))
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
}), Q6 = /* @__PURE__ */ Se(J6, [["__scopeId", "data-v-7cad7518"]]), Y6 = [
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
], xn = "v0.0.24", X6 = "Akatz", Z6 = { class: "social-buttons" }, eE = ["title", "aria-label", "onClick"], tE = {
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, sE = ["d"], oE = ["title", "aria-label", "onClick"], nE = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, aE = ["d"], lE = /* @__PURE__ */ be({
  __name: "SocialButtons",
  setup(e) {
    function t(o) {
      window.open(o, "_blank", "noopener,noreferrer");
    }
    return (o, n) => (a(), i("div", Z6, [
      (a(!0), i(j, null, he(tt(Y6), (l) => (a(), i(j, {
        key: l.id
      }, [
        l.label ? (a(), i("button", {
          key: 0,
          class: "icon-btn sponsor-btn",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (r) => t(l.url)
        }, [
          $(f(l.label) + " ", 1),
          (a(), i("svg", tE, [
            s("path", {
              d: l.iconPath
            }, null, 8, sE)
          ]))
        ], 8, eE)) : (a(), i("button", {
          key: 1,
          class: "icon-btn social-link",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (r) => t(l.url)
        }, [
          (a(), i("svg", nE, [
            s("path", {
              d: l.iconPath
            }, null, 8, aE)
          ]))
        ], 8, oE))
      ], 64))), 128))
    ]));
  }
}), hc = /* @__PURE__ */ Se(lE, [["__scopeId", "data-v-4f846342"]]), iE = { class: "footer-info" }, rE = ["title"], cE = {
  key: 0,
  class: "dev-badge"
}, uE = { class: "made-by" }, dE = /* @__PURE__ */ be({
  __name: "FooterInfo",
  setup(e) {
    const { getConfig: t } = vt(), o = k(null), n = k(null), l = k(null), r = R(() => o.value === "development"), u = R(() => {
      var d;
      if (!r.value) return xn;
      const c = [n.value, (d = l.value) == null ? void 0 : d.slice(0, 7)].filter(Boolean).join(" @ ");
      return c ? `${xn} (${c})` : `${xn} (development)`;
    });
    return rt(async () => {
      try {
        const c = await t();
        o.value = c.manager_source ?? null, n.value = c.manager_branch ?? null, l.value = c.manager_commit ?? null;
      } catch {
        o.value = null;
      }
    }), (c, d) => (a(), i("div", iE, [
      s("span", {
        class: "version",
        title: u.value
      }, [
        $(f(tt(xn)) + " ", 1),
        r.value ? (a(), i("span", cE, "dev")) : y("", !0)
      ], 8, rE),
      s("span", uE, [
        d[0] || (d[0] = $(" made with ", -1)),
        d[1] || (d[1] = s("svg", {
          class: "heart-icon",
          width: "10",
          height: "10",
          viewBox: "0 0 16 16",
          fill: "currentColor"
        }, [
          s("path", { d: "M8 14s-5.5-3.5-5.5-7A3.5 3.5 0 0 1 6 3.5c1.1 0 2 .5 2 .5s.9-.5 2-.5a3.5 3.5 0 0 1 3.5 3.5c0 3.5-5.5 7-5.5 7z" })
        ], -1)),
        $(" by " + f(tt(X6)), 1)
      ])
    ]));
  }
}), yc = /* @__PURE__ */ Se(dE, [["__scopeId", "data-v-4fa265b3"]]), fE = /* @__PURE__ */ be({
  __name: "WorkspaceSettingsModal",
  props: {
    workspacePath: {}
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const o = k(null);
    async function n() {
      var r;
      await ((r = o.value) == null ? void 0 : r.saveSettings());
    }
    function l() {
      console.log("[ComfyGit] Settings saved from modal");
    }
    return (r, u) => (a(), L(It, {
      title: "WORKSPACE SETTINGS",
      size: "lg",
      "show-close-button": !0,
      onClose: u[1] || (u[1] = (c) => r.$emit("close"))
    }, {
      body: h(() => [
        b(oc, {
          ref_key: "contentRef",
          ref: o,
          "workspace-path": e.workspacePath,
          onSaved: l
        }, null, 8, ["workspace-path"])
      ]),
      footer: h(() => {
        var c;
        return [
          b(Ne, {
            variant: "primary",
            disabled: !((c = o.value) != null && c.hasChanges),
            onClick: n
          }, {
            default: h(() => [...u[2] || (u[2] = [
              $(" Save Changes ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          b(Ne, {
            variant: "secondary",
            onClick: u[0] || (u[0] = (d) => r.$emit("close"))
          }, {
            default: h(() => [...u[3] || (u[3] = [
              $(" Close ", -1)
            ])]),
            _: 1
          })
        ];
      }),
      _: 1
    }));
  }
}), mE = /* @__PURE__ */ Se(fE, [["__scopeId", "data-v-fac00ae7"]]), vE = { class: "header-actions" }, pE = {
  key: 0,
  class: "wizard-step"
}, gE = { class: "form-field" }, hE = ["placeholder"], yE = {
  key: 0,
  class: "form-error"
}, wE = { class: "form-field form-field--checkbox" }, _E = { class: "form-checkbox" }, kE = {
  key: 0,
  class: "form-field"
}, bE = ["placeholder"], $E = {
  key: 0,
  class: "form-info"
}, CE = {
  key: 1,
  class: "form-suggestion"
}, xE = {
  key: 2,
  class: "form-error"
}, SE = {
  key: 3,
  class: "form-info"
}, IE = {
  key: 1,
  class: "wizard-step"
}, EE = {
  key: 0,
  class: "progress-check-loading"
}, TE = {
  key: 0,
  class: "cli-warning"
}, ME = { class: "cli-warning-header" }, PE = {
  key: 1,
  class: "env-landing"
}, RE = { class: "env-list" }, LE = ["value"], NE = { class: "env-name" }, DE = {
  key: 2,
  class: "env-create"
}, OE = { class: "form-field" }, UE = { class: "form-field" }, AE = ["value"], zE = { class: "form-field" }, FE = ["disabled"], VE = ["value"], BE = { class: "form-field" }, WE = ["value"], GE = { class: "form-field form-field--checkbox" }, jE = { class: "form-checkbox" }, HE = {
  key: 0,
  class: "form-error"
}, qE = {
  key: 1,
  class: "env-creating"
}, KE = { class: "creating-intro" }, JE = {
  key: 3,
  class: "env-import"
}, QE = { class: "wizard-footer" }, YE = { class: "wizard-footer-actions" }, vo = 10, XE = 600 * 1e3, Si = 1800 * 1e3, ZE = /* @__PURE__ */ be({
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
  setup(e, { emit: t }) {
    const o = e, n = t, {
      initializeWorkspace: l,
      getInitializeProgress: r,
      validatePath: u,
      createEnvironment: c,
      getCreateProgress: d,
      getImportProgress: m,
      getComfyUIReleases: v
    } = vt(), p = k(o.initialStep || 1), w = k(null), g = k("landing"), _ = k(!1), x = k(!1), C = k(!1), S = k(!1), T = k(null), M = k(o.initialStep === 2), P = k(o.defaultPath), D = k(!!o.detectedModelsDir), N = k(o.detectedModelsDir || ""), O = k(null), E = k(null), K = k(null), ae = k(null), fe = k("my-new-env"), ue = k(ac), we = k("latest"), X = k(lc), G = k(!0), Y = k(null), Re = k(null), se = k([{ tag_name: "latest", name: "Latest", published_at: "" }]), ge = k(!1), z = k(!1), me = k(!1), Pe = k({ progress: 0, message: "" }), We = k({ progress: 0, message: "" }), Ee = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], H = k(0), ee = k(null), q = k(0), Z = k(null), xe = R(() => {
      var ke, Ye;
      const ve = (ke = P.value) == null ? void 0 : ke.trim(), Q = !O.value, He = !D.value || !E.value && ((Ye = N.value) == null ? void 0 : Ye.trim());
      return ve && Q && He;
    }), ce = R(() => {
      var ve;
      return (ve = fe.value) == null ? void 0 : ve.trim();
    }), le = R(() => !!(p.value === 2 || Re.value || o.setupState === "empty_workspace" || o.setupState === "unmanaged")), I = R(() => Re.value || o.workspacePath || null);
    async function V() {
      var ve;
      if (O.value = null, !!((ve = P.value) != null && ve.trim()))
        try {
          const Q = await u({ path: P.value, type: "workspace" });
          Q.valid || (O.value = Q.error || "Invalid path");
        } catch (Q) {
          O.value = Q instanceof Error ? Q.message : "Validation failed";
        }
    }
    async function ie() {
      var ve;
      if (E.value = null, K.value = null, ae.value = null, !!((ve = N.value) != null && ve.trim()))
        try {
          const Q = await u({ path: N.value, type: "models" });
          if (Q.valid)
            ae.value = Q.model_count ?? null;
          else if (E.value = Q.error || "Invalid path", Q.suggestion) {
            K.value = Q.suggestion, N.value = Q.suggestion, E.value = null;
            const He = await u({ path: Q.suggestion, type: "models" });
            He.valid && (ae.value = He.model_count ?? null);
          }
        } catch (Q) {
          E.value = Q instanceof Error ? Q.message : "Validation failed";
        }
    }
    async function Ce() {
      var ve, Q, He, ke, Ye;
      if (O.value = null, E.value = null, await V(), (ve = O.value) != null && ve.includes("already exists")) {
        O.value = null, Re.value = ((Q = P.value) == null ? void 0 : Q.trim()) || o.defaultPath, p.value = 2, $e();
        return;
      }
      if (!O.value && !(D.value && ((He = N.value) != null && He.trim()) && (await ie(), E.value))) {
        z.value = !0;
        try {
          await l({
            workspace_path: ((ke = P.value) == null ? void 0 : ke.trim()) || o.defaultPath,
            models_directory: D.value && ((Ye = N.value) == null ? void 0 : Ye.trim()) || null
          }), H.value = 0, ee.value = Date.now();
          const ot = setInterval(async () => {
            var Ae;
            if (ee.value && Date.now() - ee.value > XE) {
              clearInterval(ot), z.value = !1, O.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const A = await r();
              if (H.value = 0, A.state === "idle" && z.value) {
                clearInterval(ot), z.value = !1, O.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              Pe.value = { progress: A.progress, message: A.message }, A.state === "complete" ? (clearInterval(ot), z.value = !1, Re.value = ((Ae = P.value) == null ? void 0 : Ae.trim()) || o.defaultPath, p.value = 2, $e()) : A.state === "error" && (clearInterval(ot), z.value = !1, O.value = A.error || "Workspace creation failed");
            } catch (A) {
              H.value++, console.warn(`Polling failure ${H.value}/${vo}:`, A), H.value >= vo && (clearInterval(ot), z.value = !1, O.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (ot) {
          z.value = !1, O.value = ot instanceof Error ? ot.message : "Failed to create workspace";
        }
      }
    }
    async function _e() {
      me.value = !0, Y.value = null;
      try {
        const ve = {
          name: fe.value.trim() || "my-new-env",
          python_version: ue.value,
          comfyui_version: we.value,
          torch_backend: X.value,
          switch_after: G.value,
          workspace_path: Re.value || void 0
          // Pass workspace path for first-time setup
        };
        if ((await c(ve)).status === "started") {
          q.value = 0, Z.value = Date.now();
          const He = setInterval(async () => {
            if (Z.value && Date.now() - Z.value > Si) {
              clearInterval(He), me.value = !1, Y.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const ke = await d();
              if (q.value = 0, ke.state === "idle" && me.value) {
                clearInterval(He), me.value = !1, Y.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              if (We.value = {
                progress: ke.progress ?? 0,
                message: ke.message,
                phase: ke.phase
              }, ke.state === "complete") {
                clearInterval(He), me.value = !1;
                const Ye = ke.environment_name || ve.name;
                G.value ? n("complete", Ye, Re.value) : (g.value = "landing", n("environment-created-no-switch", Ye));
              } else ke.state === "error" && (clearInterval(He), me.value = !1, Y.value = ke.error || "Environment creation failed");
            } catch (ke) {
              q.value++, console.warn(`Polling failure ${q.value}/${vo}:`, ke), q.value >= vo && (clearInterval(He), me.value = !1, Y.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (ve) {
        me.value = !1, Y.value = ve instanceof Error ? ve.message : "Unknown error";
      }
    }
    async function $e() {
      ge.value = !0;
      try {
        se.value = await v();
      } catch (ve) {
        console.error("Failed to load ComfyUI releases:", ve);
      } finally {
        ge.value = !1;
      }
    }
    function Ue() {
      w.value && n("switch-environment", w.value, Re.value);
    }
    function ze() {
      g.value === "create" || g.value === "import" ? g.value = "landing" : p.value === 2 && o.setupState === "no_workspace" && (p.value = 1);
    }
    function Le(ve, Q) {
      x.value = !1, Q ? n("complete", ve, Re.value) : (n("environment-created-no-switch", ve), g.value = "landing");
    }
    function Ie() {
    }
    rt(async () => {
      if (o.detectedModelsDir && (N.value = o.detectedModelsDir), o.workspacePath && (Re.value = o.workspacePath), p.value === 2) {
        $e();
        const ve = setTimeout(() => {
          M.value = !1;
        }, 3e3);
        await Ke(), clearTimeout(ve), M.value = !1;
      }
    });
    async function Ke() {
      try {
        const ve = await d();
        if (console.log("[ComfyGit] Create progress check:", ve.state, ve), ve.state === "creating") {
          console.log("[ComfyGit] Resuming in-progress environment creation:", ve.environment_name), g.value = "create", me.value = !0, fe.value = ve.environment_name || "my-new-env", We.value = {
            progress: ve.progress ?? 0,
            message: ve.message,
            phase: ve.phase
          }, Ve();
          return;
        }
      } catch (ve) {
        console.log("[ComfyGit] Create progress check failed:", ve);
      }
      try {
        const ve = await m();
        console.log("[ComfyGit] Import progress check:", ve.state, ve), ve.state === "importing" && (console.log("[ComfyGit] Resuming in-progress import:", ve.environment_name), T.value = {
          message: ve.message || "Importing...",
          phase: ve.phase || "",
          progress: ve.progress ?? 0,
          environmentName: ve.environment_name || ""
        }, S.value = !0, g.value = "import", x.value = !0);
      } catch (ve) {
        console.log("[ComfyGit] Import progress check failed:", ve);
      }
    }
    async function Ve() {
      q.value = 0, Z.value = Date.now();
      let ve = null;
      const Q = async () => {
        if (Z.value && Date.now() - Z.value > Si)
          return ve && clearInterval(ve), me.value = !1, Y.value = "Environment creation timed out. Check server logs for details.", !1;
        try {
          const ke = await d();
          if (q.value = 0, ke.state === "idle" && me.value)
            return ve && clearInterval(ve), me.value = !1, Y.value = "Environment creation was interrupted. Please try again.", !1;
          if (We.value = {
            progress: ke.progress ?? 0,
            message: ke.message,
            phase: ke.phase
          }, ke.state === "complete") {
            ve && clearInterval(ve), me.value = !1;
            const Ye = ke.environment_name || fe.value;
            return n("complete", Ye, Re.value), !1;
          } else if (ke.state === "error")
            return ve && clearInterval(ve), me.value = !1, Y.value = ke.error || "Environment creation failed", !1;
          return !0;
        } catch (ke) {
          return q.value++, console.warn(`Polling failure ${q.value}/${vo}:`, ke), q.value >= vo ? (ve && clearInterval(ve), me.value = !1, Y.value = "Lost connection to server. Please refresh and try again.", !1) : !0;
        }
      };
      await Q() && (ve = setInterval(async () => {
        !await Q() && ve && clearInterval(ve);
      }, 2e3));
    }
    return (ve, Q) => (a(), i(j, null, [
      b(It, {
        size: "lg",
        "show-close-button": !1,
        "close-on-overlay-click": !1,
        onClose: Q[15] || (Q[15] = (He) => ve.$emit("close"))
      }, {
        header: h(() => [
          Q[20] || (Q[20] = s("h3", { class: "base-modal-title" }, "WELCOME TO COMFYGIT", -1)),
          s("div", vE, [
            b(hc),
            Q[19] || (Q[19] = s("span", { class: "header-divider" }, null, -1)),
            le.value ? (a(), i("button", {
              key: 0,
              class: "icon-btn settings-btn",
              title: "Workspace Settings",
              onClick: Q[0] || (Q[0] = (He) => _.value = !0)
            }, [...Q[17] || (Q[17] = [
              s("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2"
              }, [
                s("circle", {
                  cx: "12",
                  cy: "12",
                  r: "3"
                }),
                s("path", { d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" })
              ], -1)
            ])])) : y("", !0),
            s("button", {
              class: "icon-btn",
              onClick: Q[1] || (Q[1] = (He) => ve.$emit("close")),
              title: "Close"
            }, [...Q[18] || (Q[18] = [
              s("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                s("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ], -1)
            ])])
          ])
        ]),
        body: h(() => {
          var He;
          return [
            p.value === 1 ? (a(), i("div", pE, [
              Q[24] || (Q[24] = s("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
              s("div", gE, [
                Q[21] || (Q[21] = s("label", { class: "form-label" }, "Workspace Path", -1)),
                Tt(s("input", {
                  "onUpdate:modelValue": Q[2] || (Q[2] = (ke) => P.value = ke),
                  type: "text",
                  class: "form-input",
                  placeholder: e.defaultPath
                }, null, 8, hE), [
                  [Xo, P.value]
                ]),
                O.value ? (a(), i("p", yE, f(O.value), 1)) : y("", !0)
              ]),
              s("div", wE, [
                s("label", _E, [
                  Tt(s("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": Q[3] || (Q[3] = (ke) => D.value = ke)
                  }, null, 512), [
                    [Gn, D.value]
                  ]),
                  Q[22] || (Q[22] = s("span", null, "I have existing ComfyUI models", -1))
                ])
              ]),
              D.value ? (a(), i("div", kE, [
                Q[23] || (Q[23] = s("label", { class: "form-label" }, "Models Directory", -1)),
                Tt(s("input", {
                  "onUpdate:modelValue": Q[4] || (Q[4] = (ke) => N.value = ke),
                  type: "text",
                  class: "form-input",
                  placeholder: e.detectedModelsDir || "/path/to/models"
                }, null, 8, bE), [
                  [Xo, N.value]
                ]),
                e.detectedModelsDir && !N.value ? (a(), i("p", $E, " Detected: " + f(e.detectedModelsDir), 1)) : y("", !0),
                K.value ? (a(), i("p", CE, " Did you mean: " + f(K.value), 1)) : y("", !0),
                E.value ? (a(), i("p", xE, f(E.value), 1)) : y("", !0),
                ae.value !== null && !E.value ? (a(), i("p", SE, " Found " + f(ae.value) + " model files ", 1)) : y("", !0)
              ])) : y("", !0),
              z.value ? (a(), L(Hn, {
                key: 1,
                progress: Pe.value.progress,
                message: Pe.value.message
              }, null, 8, ["progress", "message"])) : y("", !0)
            ])) : y("", !0),
            p.value === 2 ? (a(), i("div", IE, [
              M.value ? (a(), i("div", EE, [...Q[25] || (Q[25] = [
                s("div", { class: "loading-spinner" }, null, -1),
                s("div", { class: "loading-text" }, "Checking for in-progress operations...", -1)
              ])])) : (a(), i(j, { key: 1 }, [
                !o.cliInstalled && !C.value ? (a(), i("div", TE, [
                  s("div", ME, [
                    Q[27] || (Q[27] = s("span", { class: "cli-warning-icon" }, "!", -1)),
                    Q[28] || (Q[28] = s("span", { class: "cli-warning-title" }, "ComfyGit CLI Not Installed", -1)),
                    s("button", {
                      class: "cli-warning-close",
                      onClick: Q[5] || (Q[5] = (ke) => C.value = !0),
                      title: "Dismiss"
                    }, [...Q[26] || (Q[26] = [
                      s("svg", {
                        width: "14",
                        height: "14",
                        viewBox: "0 0 16 16",
                        fill: "currentColor"
                      }, [
                        s("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
                      ], -1)
                    ])])
                  ]),
                  Q[29] || (Q[29] = s("p", { class: "cli-warning-text" }, " To start managed environments from the command line, you'll need the ComfyGit CLI. This is required to restart ComfyUI in managed mode after switching environments. ", -1)),
                  Q[30] || (Q[30] = s("div", { class: "cli-warning-commands" }, [
                    s("code", null, "pipx install comfygit"),
                    s("span", { class: "cli-warning-or" }, "or"),
                    s("code", null, "uv tool install comfygit")
                  ], -1))
                ])) : y("", !0),
                g.value === "landing" ? (a(), i("div", PE, [
                  Q[34] || (Q[34] = s("p", { class: "wizard-intro" }, " Now let's set up your first environment. ", -1)),
                  s("button", {
                    class: "landing-option",
                    onClick: Q[6] || (Q[6] = (ke) => g.value = "create")
                  }, [...Q[31] || (Q[31] = [
                    s("span", { class: "option-icon" }, "➕", -1),
                    s("div", { class: "option-content" }, [
                      s("span", { class: "option-title" }, "Create New Environment"),
                      s("span", { class: "option-description" }, "Start fresh with a new ComfyUI installation")
                    ], -1),
                    s("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  s("button", {
                    class: "landing-option",
                    onClick: Q[7] || (Q[7] = (ke) => {
                      S.value = !1, g.value = "import";
                    })
                  }, [...Q[32] || (Q[32] = [
                    s("span", { class: "option-icon" }, "📦", -1),
                    s("div", { class: "option-content" }, [
                      s("span", { class: "option-title" }, "Import Environment"),
                      s("span", { class: "option-description" }, "From exported bundle (.tar.gz) or git repository")
                    ], -1),
                    s("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  (He = o.existingEnvironments) != null && He.length ? (a(), i(j, { key: 0 }, [
                    Q[33] || (Q[33] = s("div", { class: "landing-divider" }, [
                      s("span", null, "or switch to existing")
                    ], -1)),
                    s("div", RE, [
                      (a(!0), i(j, null, he(o.existingEnvironments, (ke) => (a(), i("label", {
                        key: ke,
                        class: Fe(["env-option", { selected: w.value === ke }])
                      }, [
                        Tt(s("input", {
                          type: "radio",
                          name: "env-select",
                          value: ke,
                          "onUpdate:modelValue": Q[8] || (Q[8] = (Ye) => w.value = Ye)
                        }, null, 8, LE), [
                          [Pn, w.value]
                        ]),
                        s("span", NE, f(ke), 1)
                      ], 2))), 128))
                    ])
                  ], 64)) : y("", !0)
                ])) : g.value === "create" ? (a(), i("div", DE, [
                  me.value ? (a(), i("div", qE, [
                    s("p", KE, [
                      Q[41] || (Q[41] = $(" Creating environment ", -1)),
                      s("strong", null, f(fe.value), 1),
                      Q[42] || (Q[42] = $("... ", -1))
                    ]),
                    b(Hn, {
                      progress: We.value.progress,
                      message: We.value.message,
                      "current-phase": We.value.phase,
                      "show-steps": !0,
                      steps: Ee
                    }, null, 8, ["progress", "message", "current-phase"]),
                    Q[43] || (Q[43] = s("p", { class: "progress-warning" }, " This may take several minutes. Please wait... ", -1))
                  ])) : (a(), i(j, { key: 0 }, [
                    Q[40] || (Q[40] = s("p", { class: "wizard-intro" }, " Create a new managed environment: ", -1)),
                    s("div", OE, [
                      Q[35] || (Q[35] = s("label", { class: "form-label" }, "Environment Name", -1)),
                      Tt(s("input", {
                        "onUpdate:modelValue": Q[9] || (Q[9] = (ke) => fe.value = ke),
                        type: "text",
                        class: "form-input",
                        placeholder: "my-new-env"
                      }, null, 512), [
                        [Xo, fe.value]
                      ])
                    ]),
                    s("div", UE, [
                      Q[36] || (Q[36] = s("label", { class: "form-label" }, "Python Version", -1)),
                      Tt(s("select", {
                        "onUpdate:modelValue": Q[10] || (Q[10] = (ke) => ue.value = ke),
                        class: "form-select"
                      }, [
                        (a(!0), i(j, null, he(tt(nc), (ke) => (a(), i("option", {
                          key: ke,
                          value: ke
                        }, f(ke), 9, AE))), 128))
                      ], 512), [
                        [$o, ue.value]
                      ])
                    ]),
                    s("div", zE, [
                      Q[37] || (Q[37] = s("label", { class: "form-label" }, "ComfyUI Version", -1)),
                      Tt(s("select", {
                        "onUpdate:modelValue": Q[11] || (Q[11] = (ke) => we.value = ke),
                        class: "form-select",
                        disabled: ge.value
                      }, [
                        (a(!0), i(j, null, he(se.value, (ke) => (a(), i("option", {
                          key: ke.tag_name,
                          value: ke.tag_name
                        }, f(ke.name), 9, VE))), 128))
                      ], 8, FE), [
                        [$o, we.value]
                      ])
                    ]),
                    s("div", BE, [
                      Q[38] || (Q[38] = s("label", { class: "form-label" }, "PyTorch Backend", -1)),
                      Tt(s("select", {
                        "onUpdate:modelValue": Q[12] || (Q[12] = (ke) => X.value = ke),
                        class: "form-select"
                      }, [
                        (a(!0), i(j, null, he(tt(Tl), (ke) => (a(), i("option", {
                          key: ke,
                          value: ke
                        }, f(ke) + f(ke === "auto" ? " (detect GPU)" : ""), 9, WE))), 128))
                      ], 512), [
                        [$o, X.value]
                      ])
                    ]),
                    s("div", GE, [
                      s("label", jE, [
                        Tt(s("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": Q[13] || (Q[13] = (ke) => G.value = ke)
                        }, null, 512), [
                          [Gn, G.value]
                        ]),
                        Q[39] || (Q[39] = s("span", null, "Switch to this environment after creation", -1))
                      ])
                    ]),
                    Y.value ? (a(), i("div", HE, f(Y.value), 1)) : y("", !0)
                  ], 64))
                ])) : g.value === "import" ? (a(), i("div", JE, [
                  b(uc, {
                    "workspace-path": Re.value,
                    "resume-import": S.value,
                    "initial-progress": T.value ?? void 0,
                    onImportComplete: Le,
                    onImportStarted: Q[14] || (Q[14] = (ke) => x.value = !0),
                    onSourceCleared: Ie
                  }, null, 8, ["workspace-path", "resume-import", "initial-progress"])
                ])) : y("", !0)
              ], 64))
            ])) : y("", !0)
          ];
        }),
        footer: h(() => [
          s("div", QE, [
            b(yc),
            s("div", YE, [
              p.value === 1 ? (a(), L(Ne, {
                key: 0,
                variant: "primary",
                disabled: !xe.value || z.value,
                onClick: Ce
              }, {
                default: h(() => [
                  $(f(z.value ? "Creating..." : "Next"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : p.value === 2 ? (a(), i(j, { key: 1 }, [
                !me.value && !x.value && (g.value !== "landing" || o.setupState === "no_workspace" && !Re.value) ? (a(), L(Ne, {
                  key: 0,
                  variant: "secondary",
                  onClick: ze
                }, {
                  default: h(() => [...Q[44] || (Q[44] = [
                    $(" Back ", -1)
                  ])]),
                  _: 1
                })) : y("", !0),
                g.value === "create" ? (a(), L(Ne, {
                  key: 1,
                  variant: "primary",
                  disabled: !ce.value || me.value,
                  onClick: _e
                }, {
                  default: h(() => [
                    $(f(me.value ? "Creating..." : G.value ? "Create & Switch" : "Create Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0),
                g.value === "landing" && w.value ? (a(), L(Ne, {
                  key: 2,
                  variant: "primary",
                  onClick: Ue
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
      _.value ? (a(), L(mE, {
        key: 0,
        "workspace-path": I.value,
        onClose: Q[16] || (Q[16] = (He) => _.value = !1)
      }, null, 8, ["workspace-path"])) : y("", !0)
    ], 64));
  }
}), eT = /* @__PURE__ */ Se(ZE, [["__scopeId", "data-v-9a9aadc0"]]), tT = { class: "update-banner" }, sT = { class: "update-banner__left" }, oT = { class: "update-banner__title" }, nT = {
  key: 0,
  class: "update-banner__summary"
}, aT = { class: "update-banner__actions" }, lT = ["disabled"], iT = ["disabled"], rT = ["disabled"], cT = /* @__PURE__ */ be({
  __name: "UpdateNoticeBanner",
  props: {
    info: {},
    updating: { type: Boolean }
  },
  emits: ["update", "dismiss", "release-notes"],
  setup(e, { emit: t }) {
    const o = t;
    return (n, l) => (a(), i("div", tT, [
      s("div", sT, [
        s("div", oT, " ComfyGit Manager v" + f(e.info.latest_version) + " available ", 1),
        e.info.changelog_summary ? (a(), i("div", nT, f(e.info.changelog_summary), 1)) : y("", !0)
      ]),
      s("div", aT, [
        s("button", {
          class: "update-banner__btn primary",
          disabled: e.updating,
          onClick: l[0] || (l[0] = (r) => o("update"))
        }, f(e.updating ? "Updating…" : "Update"), 9, lT),
        e.info.release_url ? (a(), i("button", {
          key: 0,
          class: "update-banner__btn",
          disabled: e.updating,
          onClick: l[1] || (l[1] = (r) => o("release-notes"))
        }, " Release notes ", 8, iT)) : y("", !0),
        s("button", {
          class: "update-banner__btn",
          disabled: e.updating,
          onClick: l[2] || (l[2] = (r) => o("dismiss"))
        }, " Dismiss ", 8, rT)
      ])
    ]));
  }
}), uT = /* @__PURE__ */ Se(cT, [["__scopeId", "data-v-49562c5c"]]), wc = "ComfyGit.UpdateNotice.DismissedVersion";
function dT() {
  try {
    return localStorage.getItem(wc);
  } catch {
    return null;
  }
}
function fT(e) {
  try {
    localStorage.setItem(wc, e);
  } catch {
  }
}
function mT(e) {
  return !e || !e.update_available || !e.latest_version ? !1 : dT() !== e.latest_version;
}
const vT = { class: "comfygit-panel" }, pT = { class: "panel-header" }, gT = { class: "header-left" }, hT = {
  key: 0,
  class: "header-info"
}, yT = { class: "header-actions" }, wT = { class: "env-switcher" }, _T = { class: "env-switcher-header" }, kT = { class: "env-control-buttons" }, bT = {
  key: 0,
  class: "header-info"
}, $T = { class: "branch-name" }, CT = { class: "panel-main" }, xT = { class: "sidebar" }, ST = { class: "sidebar-content" }, IT = { class: "sidebar-section" }, ET = { class: "sidebar-section" }, TT = { class: "sidebar-section" }, MT = { class: "sidebar-footer" }, PT = { class: "content-area" }, RT = {
  key: 0,
  class: "error-message"
}, LT = {
  key: 1,
  class: "loading"
}, NT = { class: "dialog-content env-selector-dialog" }, DT = { class: "dialog-header" }, OT = { class: "dialog-body" }, UT = { class: "env-list" }, AT = { class: "env-info" }, zT = { class: "env-name-row" }, FT = { class: "env-indicator" }, VT = { class: "env-name" }, BT = {
  key: 0,
  class: "env-branch"
}, WT = {
  key: 1,
  class: "current-label"
}, GT = { class: "env-stats" }, jT = ["onClick"], HT = { class: "toast-container" }, qT = { class: "toast-message" }, Ii = "ComfyGit.LastView", Ei = "ComfyGit.LastSection", KT = /* @__PURE__ */ be({
  __name: "ComfyGitPanel",
  props: {
    initialView: {}
  },
  emits: ["close", "statusUpdate"],
  setup(e, { emit: t }) {
    const o = e, n = t, {
      getStatus: l,
      getHistory: r,
      getBranches: u,
      checkout: c,
      createBranch: d,
      switchBranch: m,
      deleteBranch: v,
      getEnvironments: p,
      switchEnvironment: w,
      getSwitchProgress: g,
      deleteEnvironment: _,
      syncEnvironmentManually: x,
      repairWorkflowModels: C,
      getSetupStatus: S,
      getUpdateCheck: T,
      updateManager: M
    } = vt(), P = Fv(), D = k(null), N = k([]), O = k([]), E = k([]), K = R(() => E.value.find((ne) => ne.is_current)), ae = k(null), fe = k(!1), ue = k(!1), we = k("history"), X = k("manifest"), G = k(null), Y = k(!1), Re = k(1), se = R(() => {
      var ne;
      return ((ne = G.value) == null ? void 0 : ne.state) || "managed";
    }), ge = {
      can_initialize_workspace: !1,
      can_create_environment: !0,
      can_switch_environment: !0,
      can_restart_current: !0,
      can_stop_current: !0,
      can_delete_environment: !0
    }, z = R(() => {
      var ne, J;
      return ((J = (ne = G.value) == null ? void 0 : ne.runtime_context) == null ? void 0 : J.capabilities) || ge;
    }), me = k(!1), Pe = k(null), We = k(null), Ee = k(!1), H = k(null), ee = k(!1), q = k(!1), Z = R(() => !ee.value && mT(H.value)), xe = k(null), ce = k(null), le = k(null), I = k(!1), V = k(!1), ie = k(""), Ce = k(null), _e = k({ state: "idle", progress: 0, message: "" });
    let $e = null, Ue = null;
    const ze = {
      manifest: { view: "diagnostics", section: "diagnostics" },
      "debug-env": { view: "diagnostics", section: "diagnostics" },
      "debug-workspace": { view: "diagnostics", section: "diagnostics" },
      "debug-orchestrator": { view: "diagnostics", section: "diagnostics" },
      history: { view: "version-control", section: "version-control" },
      branches: { view: "version-control", section: "version-control" },
      remotes: { view: "version-control", section: "version-control" },
      status: { view: "status", section: "this-env" },
      workflows: { view: "workflows", section: "this-env" }
    }, Le = o.initialView ? ze[o.initialView] : null, Ie = [
      "status",
      "workflows",
      "models-env",
      "nodes",
      "version-control",
      "environments",
      "model-index",
      "settings",
      "diagnostics"
    ], Ke = ["this-env", "version-control", "workspace", "diagnostics"];
    function Ve() {
      try {
        const ne = sessionStorage.getItem(Ii), J = sessionStorage.getItem(Ei), qe = ne === "branches" || ne === "history" || ne === "remotes" ? "version-control" : ne === "manifest" || ne === "debug-env" || ne === "debug-workspace" ? "diagnostics" : ne, Qe = J === "all-envs" ? "workspace" : J === "sharing" ? "version-control" : J;
        if (ne && J && Ie.includes(qe) && Ke.includes(Qe))
          return { view: qe, section: Qe };
      } catch {
      }
      return null;
    }
    const ve = Ve(), Q = k((Le == null ? void 0 : Le.view) ?? (ve == null ? void 0 : ve.view) ?? "status"), He = k((Le == null ? void 0 : Le.section) ?? (ve == null ? void 0 : ve.section) ?? "this-env");
    function ke(ne, J) {
      Q.value = ne, He.value = J;
      try {
        sessionStorage.setItem(Ii, ne), sessionStorage.setItem(Ei, J);
      } catch {
      }
    }
    function Ye(ne) {
      const qe = {
        "model-index": { view: "model-index", section: "workspace" },
        remotes: { view: "version-control", section: "version-control" }
      }[ne];
      qe && ke(qe.view, qe.section);
    }
    function ot(ne) {
      we.value = ne, ke("version-control", "version-control");
    }
    function Ae(ne) {
      X.value = ne, ke("diagnostics", "diagnostics");
    }
    function A() {
      ot("branches");
    }
    function oe() {
      n("close"), setTimeout(async () => {
        await pe("Comfy.OpenManagerDialog") || await pe("Comfy.Manager.CustomNodesManager.ShowCustomNodesMenu") || Je(["Extensions", "Manage extensions"]) || Je(["Manager"]) || console.warn("[ComfyGit] Extensions manager entrypoint not found");
      }, 100);
    }
    async function pe(ne) {
      var Qe, at;
      const J = window.app, qe = [
        (Qe = J == null ? void 0 : J.extensionManager) == null ? void 0 : Qe.command,
        (at = J == null ? void 0 : J.extensionManager) == null ? void 0 : at.commands,
        J == null ? void 0 : J.command,
        J == null ? void 0 : J.commands
      ];
      for (const pt of qe)
        if (typeof (pt == null ? void 0 : pt.execute) == "function")
          try {
            return await pt.execute(ne), !0;
          } catch (Nt) {
            console.debug(`[ComfyGit] Command ${ne} did not open Extensions manager`, Nt);
          }
      return !1;
    }
    function Je(ne) {
      var Qe, at, pt;
      const J = ne.map((Nt) => Nt.toLowerCase()), qe = document.querySelectorAll('button, [role="button"]');
      for (const Nt of qe) {
        const os = Nt;
        if ([
          (Qe = os.textContent) == null ? void 0 : Qe.trim(),
          (at = os.getAttribute("title")) == null ? void 0 : at.trim(),
          (pt = os.getAttribute("aria-label")) == null ? void 0 : pt.trim()
        ].filter(Boolean).map((ye) => ye.toLowerCase()).some((ye) => J.includes(ye)))
          return os.click(), !0;
      }
      return !1;
    }
    const U = k(null), F = k(!1), te = k(!1), De = k([]);
    let Oe = 0;
    function Me(ne, J = "info", qe = 3e3) {
      const Qe = ++Oe;
      return De.value.push({ id: Qe, message: ne, type: J }), qe > 0 && setTimeout(() => {
        De.value = De.value.filter((at) => at.id !== Qe);
      }, qe), Qe;
    }
    function Ge(ne) {
      De.value = De.value.filter((J) => J.id !== ne);
    }
    function nt(ne, J) {
      Me(ne, J);
    }
    async function bt() {
      H.value = null, ee.value = !1;
      try {
        H.value = await T();
      } catch {
      }
    }
    function Et() {
      var J;
      const ne = (J = H.value) == null ? void 0 : J.release_url;
      if (ne)
        try {
          window.open(ne, "_blank", "noopener,noreferrer");
        } catch {
        }
    }
    function re() {
      var J;
      const ne = (J = H.value) == null ? void 0 : J.latest_version;
      ne && fT(ne), ee.value = !0;
    }
    async function B() {
      var J, qe;
      if (q.value) return;
      q.value = !0;
      const ne = Me("Updating comfygit-manager...", "info", 0);
      try {
        const Qe = await M();
        if (Ge(ne), Qe.status !== "success") {
          if (Me(Qe.message || "Update failed", "error"), Qe.manual_instructions) {
            const at = Qe.manual_instructions.split(`
`).map((pt) => pt.trim()).filter(Boolean);
            U.value = {
              title: "Manual Update Required",
              message: "Self-update failed. Follow these steps:",
              details: at,
              confirmLabel: "OK",
              cancelLabel: "Close",
              onConfirm: () => {
                U.value = null;
              }
            };
          }
          return;
        }
        if (Me(Qe.message || "Update complete", "success"), re(), Qe.restart_required) {
          Js();
          try {
            await ((qe = (J = window.app) == null ? void 0 : J.api) == null ? void 0 : qe.fetchApi("/v2/manager/reboot"));
          } catch {
          }
        }
      } catch (Qe) {
        Ge(ne);
        const at = Qe instanceof Error ? Qe.message : "Update failed";
        Me(at, "error");
      } finally {
        q.value = !1;
      }
    }
    const de = R(() => {
      if (!D.value) return "neutral";
      const ne = D.value.workflows, J = ne.new.length > 0 || ne.modified.length > 0 || ne.deleted.length > 0 || D.value.has_changes;
      return D.value.comparison.is_synced ? J ? "warning" : "success" : "error";
    });
    R(() => D.value ? de.value === "success" ? "All synced" : de.value === "warning" ? "Uncommitted changes" : de.value === "error" ? "Not synced" : "" : "");
    async function Be(ne = {}) {
      me.value = !0, Pe.value = null;
      try {
        const [J, qe, Qe, at] = await Promise.all([
          l(!0),
          r(),
          u(),
          p()
        ]);
        D.value = J, N.value = qe.commits, O.value = Qe.branches, E.value = at, n("statusUpdate", J), (ne.refreshWorkflows ?? !0) && xe.value && await xe.value.loadWorkflows(!0);
      } catch (J) {
        Pe.value = J instanceof Error ? J.message : "Failed to load status", D.value = null, N.value = [], O.value = [];
      } finally {
        me.value = !1;
      }
    }
    function ut(ne) {
      We.value = ne;
    }
    async function Ct(ne) {
      var qe;
      We.value = null;
      const J = D.value && (D.value.workflows.new.length > 0 || D.value.workflows.modified.length > 0 || D.value.workflows.deleted.length > 0 || D.value.has_changes);
      U.value = {
        title: J ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: J ? "You have uncommitted changes that will be lost." : `Checkout commit ${ne.short_hash || ((qe = ne.hash) == null ? void 0 : qe.slice(0, 7))}?`,
        details: J ? hn() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: J ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: J,
        onConfirm: async () => {
          var pt;
          U.value = null, Js();
          const Qe = Me(`Checking out ${ne.short_hash || ((pt = ne.hash) == null ? void 0 : pt.slice(0, 7))}...`, "info", 0), at = await c(ne.hash, J);
          Ge(Qe), at.status === "success" ? Me("Restarting ComfyUI...", "success") : Me(at.message || "Checkout failed", "error");
        }
      };
    }
    async function lt(ne) {
      const J = D.value && (D.value.workflows.new.length > 0 || D.value.workflows.modified.length > 0 || D.value.workflows.deleted.length > 0 || D.value.has_changes);
      U.value = {
        title: J ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: J ? "You have uncommitted changes." : `Switch to branch "${ne}"?`,
        details: J ? hn() : void 0,
        warning: J ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: J ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          U.value = null, Js();
          const qe = Me(`Switching to ${ne}...`, "info", 0), Qe = await m(ne, J);
          Ge(qe), Qe.status === "success" ? Me("Restarting ComfyUI...", "success") : Me(Qe.message || "Branch switch failed", "error");
        }
      };
    }
    async function xt(ne) {
      const J = Me(`Creating branch ${ne}...`, "info", 0), qe = await d(ne);
      Ge(J), qe.status === "success" ? (Me(`Branch "${ne}" created`, "success"), await Be()) : Me(qe.message || "Failed to create branch", "error");
    }
    async function ss(ne, J = !1) {
      const qe = async (Qe) => {
        var pt;
        const at = Me(`Deleting branch ${ne}...`, "info", 0);
        try {
          const Nt = await v(ne, Qe);
          Ge(at), Nt.status === "success" ? (Me(`Branch "${ne}" deleted`, "success"), await Be()) : (pt = Nt.message) != null && pt.includes("not fully merged") ? U.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${ne}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              U.value = null, await qe(!0);
            }
          } : Me(Nt.message || "Failed to delete branch", "error");
        } catch (Nt) {
          Ge(at);
          const os = Nt instanceof Error ? Nt.message : "Failed to delete branch";
          os.includes("not fully merged") ? U.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${ne}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              U.value = null, await qe(!0);
            }
          } : Me(os, "error");
        }
      };
      U.value = {
        title: "Delete Branch",
        message: `Delete branch "${ne}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          U.value = null, await qe(J);
        }
      };
    }
    async function Is(ne) {
      We.value = null;
      const J = prompt("Enter branch name:");
      if (J) {
        const qe = Me(`Creating branch ${J}...`, "info", 0), Qe = await d(J, ne.hash);
        Ge(qe), Qe.status === "success" ? (Me(`Branch "${J}" created from ${ne.short_hash}`, "success"), await Be()) : Me(Qe.message || "Failed to create branch", "error");
      }
    }
    function Js() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function ca() {
      if (!z.value.can_restart_current) {
        Me("Restart is not available in this runtime context.", "warning");
        return;
      }
      U.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var ne;
          U.value = null, Js(), Me("Restarting environment...", "info");
          try {
            (ne = window.app) != null && ne.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function ua() {
      if (!z.value.can_stop_current) {
        Me("Stop is not available in this runtime context.", "warning");
        return;
      }
      U.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var ne;
          U.value = null, Me("Stopping environment...", "info");
          try {
            (ne = window.app) != null && ne.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function zs(ne, J) {
      if (!z.value.can_switch_environment) {
        Me("Environment switching is not available in this runtime context.", "warning");
        return;
      }
      Ee.value = !1, ie.value = ne, Ce.value = J || null, I.value = !0;
    }
    async function da() {
      I.value = !1, V.value = !0, Js(), _e.value = {
        progress: 10,
        state: co(10),
        message: uo(10)
      };
      try {
        await w(ie.value, Ce.value || void 0), fa(), ma();
      } catch (ne) {
        Es(), V.value = !1, Me(`Failed to initiate switch: ${ne instanceof Error ? ne.message : "Unknown error"}`, "error"), _e.value = { state: "idle", progress: 0, message: "" }, Ce.value = null;
      }
    }
    function co(ne) {
      return ne >= 100 ? "complete" : ne >= 80 ? "validating" : ne >= 60 ? "starting" : ne >= 30 ? "syncing" : "preparing";
    }
    function uo(ne) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[co(ne)] || "";
    }
    function fa() {
      if (Ue) return;
      let ne = 10;
      const J = 60, qe = 5e3, Qe = 100, at = (J - ne) / (qe / Qe);
      Ue = window.setInterval(() => {
        if (ne += at, ne >= J && (ne = J, Es()), _e.value.progress < J) {
          const pt = Math.floor(ne);
          _e.value = {
            progress: pt,
            state: co(pt),
            message: uo(pt)
          };
        }
      }, Qe);
    }
    function Es() {
      Ue && (clearInterval(Ue), Ue = null);
    }
    function ma() {
      $e || ($e = window.setInterval(async () => {
        try {
          let ne = await P.getStatus();
          if ((!ne || ne.state === "idle") && (ne = await g()), !ne)
            return;
          const J = ne.progress || 0;
          J >= 60 && Es();
          const qe = Math.max(J, _e.value.progress), Qe = ne.state && ne.state !== "idle" && ne.state !== "unknown", at = Qe ? ne.state : co(qe), pt = Qe && ne.message || uo(qe);
          _e.value = {
            state: at,
            progress: qe,
            message: pt
          }, ne.state === "complete" ? (Es(), Lo(), V.value = !1, Me(`✓ Switched to ${ie.value}`, "success"), await Be(), ie.value = "") : ne.state === "rolled_back" ? (Es(), Lo(), V.value = !1, Me("Switch failed, restored previous environment", "warning"), ie.value = "") : ne.state === "critical_failure" && (Es(), Lo(), V.value = !1, Me(`Critical error during switch: ${ne.message}`, "error"), ie.value = "");
        } catch (ne) {
          console.error("Failed to poll switch progress:", ne);
        }
      }, 1e3));
    }
    function Lo() {
      Es(), $e && (clearInterval($e), $e = null);
    }
    function va() {
      var ne;
      I.value = !1, ie.value = "", (ne = G.value) != null && ne.state && G.value.state !== "managed" && (Re.value = G.value.state === "no_workspace" ? 1 : 2, Y.value = !0);
    }
    async function pa(ne) {
      F.value = !1, await Be(), Me(ne.message, ne.success ? "success" : "error");
    }
    async function ga() {
      te.value = !1;
      const ne = Me("Syncing environment...", "info", 0);
      try {
        const J = await x("skip", !0);
        if (Ge(ne), J.status === "success") {
          const qe = [];
          J.nodes_installed.length && qe.push(`${J.nodes_installed.length} installed`), J.nodes_removed.length && qe.push(`${J.nodes_removed.length} removed`);
          const Qe = qe.length ? `: ${qe.join(", ")}` : "";
          Me(`✓ Environment synced${Qe}`, "success"), await Be();
        } else {
          const qe = J.errors.length ? J.errors.join("; ") : J.message;
          Me(`Sync failed: ${qe}`, "error");
        }
      } catch (J) {
        Ge(ne), Me(`Sync error: ${J instanceof Error ? J.message : "Unknown error"}`, "error");
      }
    }
    async function ha(ne) {
      var J;
      try {
        const qe = await C(ne);
        qe.failed.length === 0 ? Me(`✓ Repaired ${qe.success} workflow${qe.success === 1 ? "" : "s"}`, "success") : Me(`Repaired ${qe.success}, failed: ${qe.failed.length}`, "warning"), await Be();
      } catch (qe) {
        Me(`Repair failed: ${qe instanceof Error ? qe.message : "Unknown error"}`, "error");
      } finally {
        (J = le.value) == null || J.resetRepairingState();
      }
    }
    async function pn() {
      var J, qe;
      const ne = Me("Repairing environment...", "info", 0);
      try {
        const Qe = await x("skip", !0);
        if (Ge(ne), Qe.status === "success") {
          const at = [];
          Qe.nodes_installed.length && at.push(`${Qe.nodes_installed.length} installed`), Qe.nodes_removed.length && at.push(`${Qe.nodes_removed.length} removed`);
          const pt = at.length ? `: ${at.join(", ")}` : "";
          Me(`✓ Environment repaired${pt}`, "success"), (J = le.value) == null || J.closeDetailModal(), await Be();
        } else {
          const at = Qe.errors.length ? Qe.errors.join(", ") : Qe.message || "Unknown error";
          Me(`Repair failed: ${at}`, "error");
        }
      } catch (Qe) {
        Ge(ne), Me(`Repair error: ${Qe instanceof Error ? Qe.message : "Unknown error"}`, "error");
      } finally {
        (qe = le.value) == null || qe.resetRepairingEnvironmentState();
      }
    }
    async function ya(ne, J) {
      Me(`Environment '${ne}' created`, "success"), await Be(), ce.value && await ce.value.loadEnvironments(), J && z.value.can_switch_environment && await zs(ne);
    }
    async function wa(ne) {
      var J;
      if (!z.value.can_delete_environment) {
        Me("Environment deletion is not available in this runtime context.", "warning");
        return;
      }
      if (((J = K.value) == null ? void 0 : J.name) === ne) {
        Me("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      U.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${ne}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          U.value = null;
          try {
            const qe = await _(ne);
            qe.status === "success" ? (Me(`Environment "${ne}" deleted`, "success"), await Be(), ce.value && await ce.value.loadEnvironments()) : Me(qe.message || "Failed to delete environment", "error");
          } catch (qe) {
            Me(`Error deleting environment: ${qe instanceof Error ? qe.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function _a(ne, J) {
      Y.value = !1;
      try {
        G.value = await S();
      } catch {
      }
      z.value.can_switch_environment && await zs(ne, J);
    }
    function ka() {
      Y.value = !1, n("close");
    }
    async function ba(ne, J) {
      await zs(ne, J);
    }
    async function $a(ne) {
      fe.value = !1, await Be(), await zs(ne);
    }
    function Ca() {
      ae.value = null, fe.value = !0;
    }
    function xa(ne) {
      ae.value = ne, ue.value = !0;
    }
    function gn() {
      ue.value = !1, ae.value = null;
    }
    async function Sa(ne) {
      G.value = await S(), console.log(`Environment '${ne}' created. Available for switching.`);
    }
    function Ia() {
      if (!z.value.can_create_environment) {
        Me("Environment creation is not available in this runtime context.", "warning");
        return;
      }
      ke("environments", "workspace"), setTimeout(() => {
        var ne;
        (ne = ce.value) == null || ne.openCreateModal();
      }, 100);
    }
    function hn() {
      if (!D.value) return [];
      const ne = [], J = D.value.workflows;
      return J.new.length && ne.push(`${J.new.length} new workflow(s)`), J.modified.length && ne.push(`${J.modified.length} modified workflow(s)`), J.deleted.length && ne.push(`${J.deleted.length} deleted workflow(s)`), ne;
    }
    return rt(async () => {
      try {
        if (G.value = await S(), G.value.state === "no_workspace" && z.value.can_initialize_workspace) {
          Y.value = !0, Re.value = 1;
          return;
        }
        if (G.value.state === "empty_workspace" && z.value.can_create_environment) {
          Y.value = !0, Re.value = 2;
          return;
        }
        if (G.value.state === "unmanaged" && z.value.can_switch_environment) {
          Y.value = !0, Re.value = 2;
          return;
        }
      } catch (ne) {
        console.warn("Setup status check failed, proceeding normally:", ne);
      }
      await Promise.all([
        Be({ refreshWorkflows: !1 }),
        bt()
      ]);
    }), (ne, J) => {
      var qe, Qe, at, pt, Nt, os, W, ye, je, dt, Dt, jt, gs;
      return a(), i("div", vT, [
        s("div", pT, [
          s("div", gT, [
            J[27] || (J[27] = s("h2", { class: "panel-title" }, "ComfyGit", -1)),
            D.value ? (a(), i("div", hT)) : y("", !0)
          ]),
          s("div", yT, [
            b(hc),
            J[30] || (J[30] = s("span", { class: "header-divider" }, null, -1)),
            s("button", {
              class: Fe(["icon-btn", { spinning: me.value }]),
              onClick: Be,
              title: "Refresh"
            }, [...J[28] || (J[28] = [
              s("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                s("path", { d: "M13.65 2.35a8 8 0 1 0 1.4 9.65h-2.25a5.75 5.75 0 1 1-1-6.45L9.5 8H16V1.5l-2.35 2.35z" })
              ], -1)
            ])], 2),
            s("button", {
              class: "icon-btn",
              onClick: J[0] || (J[0] = (Ze) => n("close")),
              title: "Close"
            }, [...J[29] || (J[29] = [
              s("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                s("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ], -1)
            ])])
          ])
        ]),
        Z.value && H.value ? (a(), L(uT, {
          key: 0,
          info: H.value,
          updating: q.value,
          onUpdate: B,
          onDismiss: re,
          onReleaseNotes: Et
        }, null, 8, ["info", "updating"])) : y("", !0),
        s("div", wT, [
          s("div", _T, [
            J[31] || (J[31] = s("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            s("div", kT, [
              z.value.can_restart_current ? (a(), i("button", {
                key: 0,
                class: "env-control-btn",
                title: "Restart environment",
                onClick: ca
              }, " Restart ")) : y("", !0),
              z.value.can_stop_current ? (a(), i("button", {
                key: 1,
                class: "env-control-btn stop",
                title: "Stop environment",
                onClick: ua
              }, " Stop ")) : y("", !0)
            ])
          ]),
          s("button", {
            class: "env-switcher-btn",
            onClick: J[1] || (J[1] = (Ze) => ke("environments", "workspace"))
          }, [
            D.value ? (a(), i("div", bT, [
              s("span", null, f(((qe = K.value) == null ? void 0 : qe.name) || ((Qe = D.value) == null ? void 0 : Qe.environment) || "Loading..."), 1),
              s("span", $T, "(" + f(D.value.branch || "detached") + ")", 1)
            ])) : y("", !0),
            J[32] || (J[32] = s("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        s("div", CT, [
          s("div", xT, [
            s("div", ST, [
              s("div", IT, [
                J[33] || (J[33] = s("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
                s("button", {
                  class: Fe(["sidebar-item", { active: Q.value === "status" && He.value === "this-env" }]),
                  onClick: J[2] || (J[2] = (Ze) => ke("status", "this-env"))
                }, " STATUS ", 2),
                s("button", {
                  class: Fe(["sidebar-item", { active: Q.value === "workflows" }]),
                  onClick: J[3] || (J[3] = (Ze) => ke("workflows", "this-env"))
                }, " WORKFLOWS ", 2),
                s("button", {
                  class: Fe(["sidebar-item", { active: Q.value === "models-env" }]),
                  onClick: J[4] || (J[4] = (Ze) => ke("models-env", "this-env"))
                }, " MODELS ", 2),
                s("button", {
                  class: Fe(["sidebar-item", { active: Q.value === "nodes" }]),
                  onClick: J[5] || (J[5] = (Ze) => ke("nodes", "this-env"))
                }, " NODES ", 2),
                s("button", {
                  class: Fe(["sidebar-item", { active: Q.value === "version-control" }]),
                  onClick: J[6] || (J[6] = (Ze) => ot("history"))
                }, " VERSION CONTROL ", 2)
              ]),
              J[36] || (J[36] = s("div", { class: "sidebar-divider" }, null, -1)),
              s("div", ET, [
                J[34] || (J[34] = s("div", { class: "sidebar-section-title" }, "WORKSPACE", -1)),
                s("button", {
                  class: Fe(["sidebar-item", { active: Q.value === "environments" }]),
                  onClick: J[7] || (J[7] = (Ze) => ke("environments", "workspace"))
                }, " ENVIRONMENTS ", 2),
                s("button", {
                  class: Fe(["sidebar-item", { active: Q.value === "model-index" }]),
                  onClick: J[8] || (J[8] = (Ze) => ke("model-index", "workspace"))
                }, " MODEL INDEX ", 2),
                s("button", {
                  class: Fe(["sidebar-item", { active: Q.value === "settings" }]),
                  onClick: J[9] || (J[9] = (Ze) => ke("settings", "workspace"))
                }, " SETTINGS ", 2)
              ]),
              J[37] || (J[37] = s("div", { class: "sidebar-divider" }, null, -1)),
              s("div", TT, [
                J[35] || (J[35] = s("div", { class: "sidebar-section-title" }, "DIAGNOSTICS", -1)),
                s("button", {
                  class: Fe(["sidebar-item", { active: Q.value === "diagnostics" && X.value === "manifest" }]),
                  onClick: J[10] || (J[10] = (Ze) => Ae("manifest"))
                }, " MANIFEST ", 2),
                s("button", {
                  class: Fe(["sidebar-item", { active: Q.value === "diagnostics" && X.value !== "manifest" }]),
                  onClick: J[11] || (J[11] = (Ze) => Ae("env"))
                }, " LOGGING ", 2)
              ])
            ]),
            s("div", MT, [
              b(yc)
            ])
          ]),
          s("div", PT, [
            Pe.value ? (a(), i("div", RT, f(Pe.value), 1)) : !D.value && Q.value === "status" ? (a(), i("div", LT, " Loading status... ")) : (a(), i(j, { key: 2 }, [
              Q.value === "status" ? (a(), L(Uv, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: le,
                status: D.value,
                "setup-state": se.value,
                onSwitchBranch: A,
                onCommitChanges: J[12] || (J[12] = (Ze) => F.value = !0),
                onSyncEnvironment: J[13] || (J[13] = (Ze) => te.value = !0),
                onViewWorkflows: J[14] || (J[14] = (Ze) => ke("workflows", "this-env")),
                onViewHistory: J[15] || (J[15] = (Ze) => ot("history")),
                onViewDebug: J[16] || (J[16] = (Ze) => Ae("env")),
                onViewNodes: J[17] || (J[17] = (Ze) => ke("nodes", "this-env")),
                onRepairMissingModels: ha,
                onRepairEnvironment: pn,
                onStartSetup: J[18] || (J[18] = (Ze) => Y.value = !0),
                onViewEnvironments: J[19] || (J[19] = (Ze) => ke("environments", "workspace")),
                onCreateEnvironment: Ia
              }, null, 8, ["status", "setup-state"])) : Q.value === "workflows" ? (a(), L(A0, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: xe,
                onRefresh: Be
              }, null, 512)) : Q.value === "models-env" ? (a(), L(Tb, {
                key: 2,
                onNavigate: Ye
              })) : Q.value === "version-control" ? (a(), L(iI, {
                key: 3,
                commits: N.value,
                "current-ref": (at = D.value) == null ? void 0 : at.branch,
                branches: O.value,
                current: ((pt = D.value) == null ? void 0 : pt.branch) || null,
                "initial-tab": we.value,
                onSelect: ut,
                onCheckout: Ct,
                onSwitch: lt,
                onCreate: xt,
                onDelete: ss,
                onToast: nt
              }, null, 8, ["commits", "current-ref", "branches", "current", "initial-tab"])) : Q.value === "nodes" ? (a(), L(C2, {
                key: 4,
                "version-mismatches": ((os = (Nt = D.value) == null ? void 0 : Nt.comparison) == null ? void 0 : os.version_mismatches) || [],
                onOpenNodeManager: oe,
                onRepairEnvironment: pn,
                onToast: nt
              }, null, 8, ["version-mismatches"])) : Q.value === "diagnostics" ? (a(), L(kI, {
                key: 5,
                "initial-tab": X.value
              }, null, 8, ["initial-tab"])) : Q.value === "environments" ? (a(), L($C, {
                key: 6,
                ref_key: "environmentsSectionRef",
                ref: ce,
                "can-create": z.value.can_create_environment,
                "can-switch": z.value.can_switch_environment,
                "can-delete": z.value.can_delete_environment,
                onSwitch: zs,
                onCreated: ya,
                onDelete: wa,
                onImport: Ca,
                onExport: xa
              }, null, 8, ["can-create", "can-switch", "can-delete"])) : Q.value === "model-index" ? (a(), L(Wb, {
                key: 7,
                onRefresh: Be
              })) : Q.value === "settings" ? (a(), L(Y2, { key: 8 })) : y("", !0)
            ], 64))
          ])
        ]),
        We.value ? (a(), L(zI, {
          key: 1,
          commit: We.value,
          onClose: J[20] || (J[20] = (Ze) => We.value = null),
          onCheckout: Ct,
          onCreateBranch: Is
        }, null, 8, ["commit"])) : y("", !0),
        U.value ? (a(), L(El, {
          key: 2,
          title: U.value.title,
          message: U.value.message,
          details: U.value.details,
          warning: U.value.warning,
          confirmLabel: U.value.confirmLabel,
          cancelLabel: U.value.cancelLabel,
          secondaryLabel: U.value.secondaryLabel,
          secondaryAction: U.value.secondaryAction,
          destructive: U.value.destructive,
          onConfirm: U.value.onConfirm,
          onCancel: J[21] || (J[21] = (Ze) => U.value = null),
          onSecondary: U.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : y("", !0),
        fe.value ? (a(), L(It, {
          key: 3,
          title: "IMPORT ENVIRONMENT",
          size: "xl",
          "fixed-height": "",
          onClose: J[22] || (J[22] = (Ze) => fe.value = !1)
        }, {
          body: h(() => [
            b(L5, {
              embedded: "",
              onImportCompleteSwitch: $a
            })
          ]),
          _: 1
        })) : y("", !0),
        ue.value ? (a(), L(It, {
          key: 4,
          title: ae.value ? `EXPORT ENVIRONMENT: ${ae.value.toUpperCase()}` : "EXPORT ENVIRONMENT",
          size: "md",
          onClose: gn
        }, {
          body: h(() => [
            b(Ax, {
              embedded: "",
              "environment-name": ae.value,
              onClose: gn
            }, null, 8, ["environment-name"])
          ]),
          _: 1
        }, 8, ["title"])) : y("", !0),
        b(M6, {
          show: I.value,
          "from-environment": ((W = K.value) == null ? void 0 : W.name) || "unknown",
          "to-environment": ie.value,
          onConfirm: da,
          onClose: va
        }, null, 8, ["show", "from-environment", "to-environment"]),
        F.value && D.value ? (a(), L(gc, {
          key: 5,
          status: D.value,
          "as-modal": !0,
          onClose: J[23] || (J[23] = (Ze) => F.value = !1),
          onCommitted: pa
        }, null, 8, ["status"])) : y("", !0),
        te.value && D.value ? (a(), L(Q6, {
          key: 6,
          show: te.value,
          "mismatch-details": {
            missing_nodes: D.value.comparison.missing_nodes,
            extra_nodes: D.value.comparison.extra_nodes
          },
          onConfirm: ga,
          onClose: J[24] || (J[24] = (Ze) => te.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : y("", !0),
        b(V6, {
          show: V.value,
          state: _e.value.state,
          progress: _e.value.progress,
          message: _e.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        Ee.value ? (a(), i("div", {
          key: 7,
          class: "dialog-overlay",
          onClick: J[26] || (J[26] = mt((Ze) => Ee.value = !1, ["self"]))
        }, [
          s("div", NT, [
            s("div", DT, [
              J[39] || (J[39] = s("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              s("button", {
                class: "icon-btn",
                onClick: J[25] || (J[25] = (Ze) => Ee.value = !1)
              }, [...J[38] || (J[38] = [
                s("svg", {
                  width: "16",
                  height: "16",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  s("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
                ], -1)
              ])])
            ]),
            s("div", OT, [
              J[40] || (J[40] = s("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              s("div", UT, [
                (a(!0), i(j, null, he(E.value, (Ze) => (a(), i("div", {
                  key: Ze.name,
                  class: Fe(["env-item", { current: Ze.is_current }])
                }, [
                  s("div", AT, [
                    s("div", zT, [
                      s("span", FT, f(Ze.is_current ? "●" : "○"), 1),
                      s("span", VT, f(Ze.name), 1),
                      Ze.current_branch ? (a(), i("span", BT, "(" + f(Ze.current_branch) + ")", 1)) : y("", !0),
                      Ze.is_current ? (a(), i("span", WT, "CURRENT")) : y("", !0)
                    ]),
                    s("div", GT, f(Ze.workflow_count) + " workflows • " + f(Ze.node_count) + " nodes ", 1)
                  ]),
                  !Ze.is_current && z.value.can_switch_environment ? (a(), i("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (Ea) => zs(Ze.name)
                  }, " SWITCH ", 8, jT)) : y("", !0)
                ], 2))), 128))
              ])
            ])
          ])
        ])) : y("", !0),
        Y.value ? (a(), L(eT, {
          key: 8,
          "default-path": ((ye = G.value) == null ? void 0 : ye.default_path) || "~/comfygit",
          "detected-models-dir": ((je = G.value) == null ? void 0 : je.detected_models_dir) || null,
          "initial-step": Re.value,
          "existing-environments": ((dt = G.value) == null ? void 0 : dt.environments) || [],
          "cli-installed": ((Dt = G.value) == null ? void 0 : Dt.cli_installed) ?? !0,
          "setup-state": ((jt = G.value) == null ? void 0 : jt.state) || "no_workspace",
          "workspace-path": ((gs = G.value) == null ? void 0 : gs.workspace_path) || null,
          onComplete: _a,
          onClose: ka,
          onSwitchEnvironment: ba,
          onEnvironmentCreatedNoSwitch: Sa
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state", "workspace-path"])) : y("", !0),
        s("div", HT, [
          b(Kd, { name: "toast" }, {
            default: h(() => [
              (a(!0), i(j, null, he(De.value, (Ze) => (a(), i("div", {
                key: Ze.id,
                class: Fe(["toast", Ze.type])
              }, [
                s("span", qT, f(Ze.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), JT = /* @__PURE__ */ Se(KT, [["__scopeId", "data-v-f059e95d"]]), QT = { class: "item-header" }, YT = { class: "item-info" }, XT = { class: "filename" }, ZT = { class: "metadata" }, eM = { class: "size" }, tM = {
  key: 0,
  class: "type"
}, sM = { class: "item-actions" }, oM = {
  key: 0,
  class: "progress-section"
}, nM = { class: "progress-bar" }, aM = { class: "progress-stats" }, lM = { class: "downloaded" }, iM = { class: "speed" }, rM = {
  key: 0,
  class: "eta"
}, cM = {
  key: 1,
  class: "status-msg paused"
}, uM = {
  key: 2,
  class: "status-msg queued"
}, dM = {
  key: 3,
  class: "status-msg completed"
}, fM = {
  key: 4,
  class: "status-msg failed"
}, mM = {
  key: 0,
  class: "retries"
}, vM = /* @__PURE__ */ be({
  __name: "DownloadQueueItem",
  props: {
    item: {}
  },
  emits: ["cancel", "retry", "resume", "remove"],
  setup(e, { emit: t }) {
    const o = t;
    function n(u) {
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
    return (u, c) => (a(), i("div", {
      class: Fe(["download-item", `status-${e.item.status}`])
    }, [
      s("div", QT, [
        s("div", YT, [
          s("div", XT, f(e.item.filename), 1),
          s("div", ZT, [
            s("span", eM, f(n(e.item.size)), 1),
            e.item.type ? (a(), i("span", tM, f(e.item.type), 1)) : y("", !0)
          ])
        ]),
        s("div", sM, [
          e.item.status === "queued" || e.item.status === "downloading" ? (a(), i("button", {
            key: 0,
            class: "action-icon cancel",
            onClick: c[0] || (c[0] = (d) => o("cancel")),
            title: "Cancel"
          }, " × ")) : y("", !0),
          e.item.status === "paused" ? (a(), i("button", {
            key: 1,
            class: "action-icon resume",
            onClick: c[1] || (c[1] = (d) => o("resume")),
            title: "Resume"
          }, " ▶ ")) : y("", !0),
          e.item.status === "failed" ? (a(), i("button", {
            key: 2,
            class: "action-icon retry",
            onClick: c[2] || (c[2] = (d) => o("retry")),
            title: "Retry"
          }, " ↻ ")) : y("", !0),
          e.item.status === "completed" || e.item.status === "failed" || e.item.status === "paused" ? (a(), i("button", {
            key: 3,
            class: "action-icon remove",
            onClick: c[3] || (c[3] = (d) => o("remove")),
            title: "Remove"
          }, " × ")) : y("", !0)
        ])
      ]),
      e.item.status === "downloading" ? (a(), i("div", oM, [
        s("div", nM, [
          s("div", {
            class: "progress-fill",
            style: Rt({ width: `${e.item.progress}%` })
          }, null, 4)
        ]),
        s("div", aM, [
          s("span", lM, f(n(e.item.downloaded)) + " / " + f(n(e.item.size)), 1),
          s("span", iM, f(l(e.item.speed)), 1),
          e.item.eta > 0 ? (a(), i("span", rM, f(r(e.item.eta)), 1)) : y("", !0)
        ])
      ])) : e.item.status === "paused" ? (a(), i("div", cM, " Paused - click Resume to download ")) : e.item.status === "queued" ? (a(), i("div", uM, " Waiting in queue... ")) : e.item.status === "completed" ? (a(), i("div", dM, " ✓ Downloaded ")) : e.item.status === "failed" ? (a(), i("div", fM, [
        $(" ✗ " + f(e.item.error || "Failed") + " ", 1),
        e.item.retries > 0 ? (a(), i("span", mM, "(" + f(e.item.retries) + " retries)", 1)) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), Uo = /* @__PURE__ */ Se(vM, [["__scopeId", "data-v-2110df65"]]), pM = { class: "queue-title" }, gM = { class: "count" }, hM = { class: "queue-actions" }, yM = { class: "action-label" }, wM = {
  key: 0,
  class: "overall-progress"
}, _M = { class: "progress-bar" }, kM = {
  key: 0,
  class: "current-mini"
}, bM = { class: "filename" }, $M = { class: "speed" }, CM = {
  key: 1,
  class: "queue-content"
}, xM = {
  key: 0,
  class: "section"
}, SM = {
  key: 1,
  class: "section"
}, IM = { class: "section-header" }, EM = { class: "section-label paused" }, TM = { class: "items-list" }, MM = {
  key: 2,
  class: "section"
}, PM = { class: "section-header" }, RM = { class: "section-label" }, LM = { class: "items-list" }, NM = {
  key: 3,
  class: "section"
}, DM = { class: "section-header" }, OM = { class: "section-label" }, UM = { class: "items-list" }, AM = {
  key: 4,
  class: "section"
}, zM = { class: "section-header" }, FM = { class: "section-label failed" }, VM = { class: "items-list" }, BM = /* @__PURE__ */ be({
  __name: "ModelDownloadQueue",
  setup(e) {
    const {
      queue: t,
      currentDownload: o,
      queuedItems: n,
      completedItems: l,
      failedItems: r,
      pausedItems: u,
      hasItems: c,
      activeCount: d,
      cancelDownload: m,
      retryDownload: v,
      resumeDownload: p,
      resumeAllPaused: w,
      removeItem: g,
      clearCompleted: _
    } = Ro(), x = k(!1);
    let C = null;
    kt(
      () => ({
        active: d.value,
        failed: r.value.length,
        paused: u.value.length,
        completed: l.value.length
      }),
      (P, D) => {
        C && (clearTimeout(C), C = null);
        const N = P.active === 0 && P.failed === 0 && P.paused === 0 && P.completed > 0, O = D && (D.active > 0 || D.paused > 0);
        N && O && (C = setTimeout(() => {
          _(), C = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const S = R(() => {
      var N;
      if (t.items.length === 0) return 0;
      const P = l.value.length, D = ((N = o.value) == null ? void 0 : N.progress) || 0;
      return Math.round((P + D / 100) / t.items.length * 100);
    });
    function T(P) {
      m(P);
    }
    function M(P) {
      return P === 0 ? "..." : `${(P / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (P, D) => (a(), L(Lt, { to: "body" }, [
      tt(c) ? (a(), i("div", {
        key: 0,
        class: Fe(["model-download-queue", { minimized: !x.value }])
      }, [
        s("div", {
          class: "queue-header",
          onClick: D[0] || (D[0] = (N) => x.value = !x.value)
        }, [
          s("div", pM, [
            D[4] || (D[4] = s("span", { class: "icon" }, "↓", -1)),
            D[5] || (D[5] = s("span", { class: "title" }, "Downloads", -1)),
            s("span", gM, "(" + f(tt(d)) + "/" + f(tt(t).items.length) + ")", 1)
          ]),
          s("div", hM, [
            s("span", yM, f(x.value ? "minimize" : "expand"), 1)
          ])
        ]),
        x.value ? (a(), i("div", CM, [
          tt(o) ? (a(), i("div", xM, [
            D[6] || (D[6] = s("div", { class: "section-label" }, "Downloading", -1)),
            b(Uo, {
              item: tt(o),
              onCancel: D[1] || (D[1] = (N) => T(tt(o).id))
            }, null, 8, ["item"])
          ])) : y("", !0),
          tt(u).length > 0 ? (a(), i("div", SM, [
            s("div", IM, [
              s("span", EM, "Paused (" + f(tt(u).length) + ")", 1),
              s("button", {
                class: "resume-all-btn",
                onClick: D[2] || (D[2] = //@ts-ignore
                (...N) => tt(w) && tt(w)(...N))
              }, "Resume All")
            ]),
            s("div", TM, [
              (a(!0), i(j, null, he(tt(u), (N) => (a(), L(Uo, {
                key: N.id,
                item: N,
                onResume: (O) => tt(p)(N.id),
                onRemove: (O) => tt(g)(N.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          tt(n).length > 0 ? (a(), i("div", MM, [
            s("div", PM, [
              s("span", RM, "Queued (" + f(tt(n).length) + ")", 1)
            ]),
            s("div", LM, [
              (a(!0), i(j, null, he(tt(n), (N) => (a(), L(Uo, {
                key: N.id,
                item: N,
                onCancel: (O) => T(N.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : y("", !0),
          tt(l).length > 0 ? (a(), i("div", NM, [
            s("div", DM, [
              s("span", OM, "Completed (" + f(tt(l).length) + ")", 1),
              s("button", {
                class: "clear-btn",
                onClick: D[3] || (D[3] = //@ts-ignore
                (...N) => tt(_) && tt(_)(...N))
              }, "Clear")
            ]),
            s("div", UM, [
              (a(!0), i(j, null, he(tt(l).slice(0, 3), (N) => (a(), L(Uo, {
                key: N.id,
                item: N,
                onRemove: (O) => tt(g)(N.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          tt(r).length > 0 ? (a(), i("div", AM, [
            s("div", zM, [
              s("span", FM, "Failed (" + f(tt(r).length) + ")", 1)
            ]),
            s("div", VM, [
              (a(!0), i(j, null, he(tt(r), (N) => (a(), L(Uo, {
                key: N.id,
                item: N,
                onRetry: (O) => tt(v)(N.id),
                onRemove: (O) => tt(g)(N.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : y("", !0)
        ])) : (a(), i("div", wM, [
          s("div", _M, [
            s("div", {
              class: "progress-fill",
              style: Rt({ width: `${S.value}%` })
            }, null, 4)
          ]),
          tt(o) ? (a(), i("div", kM, [
            s("span", bM, f(tt(o).filename), 1),
            s("span", $M, f(M(tt(o).speed)), 1)
          ])) : y("", !0)
        ]))
      ], 2)) : y("", !0)
    ]));
  }
}), WM = /* @__PURE__ */ Se(BM, [["__scopeId", "data-v-3a3c9607"]]), GM = { class: "detail-header" }, jM = { class: "item-count" }, HM = { class: "resource-list" }, qM = { class: "item-info" }, KM = { class: "item-name" }, JM = {
  key: 0,
  class: "item-subtitle"
}, QM = {
  key: 0,
  class: "installing-badge"
}, YM = ["title"], XM = {
  key: 2,
  class: "installed-badge"
}, ZM = {
  key: 3,
  class: "queued-badge"
}, e7 = {
  key: 4,
  class: "action-buttons"
}, t7 = {
  key: 1,
  class: "no-action"
}, s7 = /* @__PURE__ */ be({
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
  setup(e, { emit: t }) {
    const o = e, n = t, l = R(() => o.items.filter((g) => g.canAction)), r = R(() => l.value.length > 0 && l.value.every(
      (g) => {
        var _, x;
        return o.queuedItems.has(g.id) || ((_ = o.installedItems) == null ? void 0 : _.has(g.id)) || ((x = o.failedItems) == null ? void 0 : x.has(g.id));
      }
    )), u = R(() => r.value ? "All Queued" : o.itemType === "models" ? "Download All" : "Install All");
    function c(g) {
      return o.queuedItems.has(g.id);
    }
    function d(g) {
      return o.installingItem === g.id;
    }
    function m(g) {
      var _;
      return ((_ = o.installedItems) == null ? void 0 : _.has(g.id)) ?? !1;
    }
    function v(g) {
      var _;
      return ((_ = o.failedItems) == null ? void 0 : _.has(g.id)) ?? !1;
    }
    function p(g) {
      var _;
      return ((_ = o.failedItems) == null ? void 0 : _.get(g.id)) || "Unknown error";
    }
    function w(g) {
      return g.actions && g.actions.length > 0 ? g.actions : [{
        key: "default",
        label: o.itemType === "models" ? "Download" : "Install",
        variant: "secondary"
      }];
    }
    return (g, _) => (a(), L(It, {
      title: e.title,
      size: "md",
      onClose: _[2] || (_[2] = (x) => n("close"))
    }, {
      body: h(() => [
        s("div", GM, [
          s("span", jM, f(e.items.length) + " " + f(e.items.length === 1 ? "item" : "items"), 1),
          l.value.length > 1 ? (a(), L(Ne, {
            key: 0,
            size: "sm",
            variant: "secondary",
            disabled: r.value,
            onClick: _[0] || (_[0] = (x) => n("bulk-action"))
          }, {
            default: h(() => [
              $(f(u.value), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : y("", !0)
        ]),
        s("div", HM, [
          (a(!0), i(j, null, he(e.items, (x) => (a(), i("div", {
            key: x.id,
            class: "resource-item"
          }, [
            s("div", qM, [
              s("span", KM, f(x.name), 1),
              x.subtitle ? (a(), i("span", JM, f(x.subtitle), 1)) : y("", !0)
            ]),
            x.canAction ? (a(), i(j, { key: 0 }, [
              d(x) ? (a(), i("span", QM, "Installing...")) : v(x) ? (a(), i("span", {
                key: 1,
                class: "failed-badge",
                title: p(x)
              }, "Failed ⚠", 8, YM)) : m(x) ? (a(), i("span", XM, "Installed")) : c(x) ? (a(), i("span", ZM, "Queued")) : (a(), i("div", e7, [
                (a(!0), i(j, null, he(w(x), (C) => (a(), L(Ne, {
                  key: `${x.id}-${C.key}`,
                  size: "sm",
                  variant: C.variant || "secondary",
                  onClick: (S) => n("action", x, C.key)
                }, {
                  default: h(() => [
                    $(f(C.label), 1)
                  ]),
                  _: 2
                }, 1032, ["variant", "onClick"]))), 128))
              ]))
            ], 64)) : (a(), i("span", t7, f(x.actionDisabledReason || "Not available"), 1))
          ]))), 128))
        ])
      ]),
      footer: h(() => [
        b(Ne, {
          variant: "secondary",
          onClick: _[1] || (_[1] = (x) => n("close"))
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
}), o7 = /* @__PURE__ */ Se(s7, [["__scopeId", "data-v-ec7e9202"]]), n7 = {
  key: 0,
  class: "loading-state"
}, a7 = {
  key: 1,
  class: "analysis-results"
}, l7 = {
  key: 0,
  class: "section"
}, i7 = { class: "section-header" }, r7 = { class: "section-title" }, c7 = { class: "item-list" }, u7 = { class: "package-info" }, d7 = { class: "package-name" }, f7 = { class: "node-count" }, m7 = {
  key: 1,
  class: "installing-badge"
}, v7 = {
  key: 2,
  class: "queued-badge"
}, p7 = ["title"], g7 = {
  key: 4,
  class: "installed-badge"
}, h7 = {
  key: 1,
  class: "section"
}, y7 = { class: "section-header" }, w7 = { class: "section-title" }, _7 = { class: "item-list" }, k7 = { class: "node-type" }, b7 = {
  key: 0,
  class: "overflow-note"
}, $7 = {
  key: 2,
  class: "section"
}, C7 = { class: "section-header" }, x7 = { class: "section-title" }, S7 = { class: "item-list" }, I7 = { class: "node-type" }, E7 = { class: "not-found" }, T7 = {
  key: 0,
  class: "overflow-note"
}, M7 = {
  key: 3,
  class: "section"
}, P7 = { class: "section-header" }, R7 = { class: "section-title" }, L7 = { class: "item-list" }, N7 = { class: "package-info community-info" }, D7 = { class: "community-title-row" }, O7 = { class: "package-name" }, U7 = { class: "node-count" }, A7 = { class: "community-mapping-note" }, z7 = { key: 0 }, F7 = {
  key: 0,
  class: "community-actions"
}, V7 = {
  key: 1,
  class: "installing-badge"
}, B7 = {
  key: 2,
  class: "queued-badge"
}, W7 = ["title"], G7 = {
  key: 4,
  class: "installed-badge"
}, j7 = ["title"], H7 = {
  key: 1,
  class: "no-url"
}, q7 = {
  key: 4,
  class: "section"
}, K7 = { class: "section-header" }, J7 = { class: "section-title" }, Q7 = { class: "item-list" }, Y7 = { class: "model-info" }, X7 = { class: "model-name" }, Z7 = {
  key: 1,
  class: "queued-badge"
}, eP = {
  key: 1,
  class: "no-url"
}, tP = { class: "dont-show-again" }, sP = 3e4, oP = /* @__PURE__ */ be({
  __name: "MissingResourcesPopup",
  setup(e) {
    const t = k(!1), o = k(null), n = k(null), l = k(!1), r = k(/* @__PURE__ */ new Set()), u = k(/* @__PURE__ */ new Set()), c = k(/* @__PURE__ */ new Map()), d = k(/* @__PURE__ */ new Set()), m = k(!1), v = k(null), p = k(0), w = k(null), g = k(/* @__PURE__ */ new Set()), _ = k(/* @__PURE__ */ new Map()), x = k(/* @__PURE__ */ new Map()), { addToQueue: C } = Ro(), { queueNodeInstall: S } = vt(), T = R(() => {
      var A;
      return ((A = n.value) == null ? void 0 : A.package_aliases) || {};
    });
    function M(A) {
      if (!A) return null;
      const oe = T.value;
      let pe = A;
      const Je = /* @__PURE__ */ new Set();
      for (; oe[pe] && !Je.has(pe); )
        Je.add(pe), pe = oe[pe];
      return pe;
    }
    function P(A, oe) {
      return A instanceof Error && A.message ? A.message : typeof A == "string" && A.trim().length > 0 ? A : oe;
    }
    function D(A) {
      for (const [oe, pe] of _.value.entries())
        pe === A && _.value.delete(oe);
    }
    function N(A) {
      if (!x.value.has(A)) return;
      const oe = x.value.get(A);
      clearTimeout(oe), x.value.delete(A);
    }
    function O() {
      for (const A of x.value.values())
        clearTimeout(A);
      x.value = /* @__PURE__ */ new Map();
    }
    function E(A) {
      N(A);
      const oe = setTimeout(() => {
        if (x.value.delete(A), !u.value.has(A)) return;
        D(A), u.value.delete(A), v.value === A && (v.value = null), c.value.set(A, "Queue timeout — please retry"), console.warn("[ComfyGit] Queue timeout waiting for cm-task-started:", A);
      }, sP);
      x.value.set(A, oe);
    }
    function K(A) {
      const oe = `Cannot install "${A.title}" - package_id is missing`;
      c.value.set(A.item_id, oe), o.value = oe, console.warn("[ComfyGit] Community install requested without package_id:", A);
    }
    const ae = R(() => fe.value.length > 0 || we.value.length > 0 || X.value.length > 0 || G.value.length > 0 || z.value.length > 0), fe = R(() => {
      var pe, Je;
      if (!((pe = n.value) != null && pe.nodes)) return [];
      const A = /* @__PURE__ */ new Map(), oe = (n.value.nodes.resolved || []).filter((U) => {
        var F;
        return !U.is_installed && ((F = U.package) == null ? void 0 : F.package_id);
      });
      for (const U of oe) {
        const F = M(U.package.package_id);
        if (!F) continue;
        A.has(F) || A.set(F, {
          package_id: F,
          title: U.package.title || F,
          node_count: 0,
          node_types: [],
          repository: U.package.repository || null,
          latest_version: U.package.latest_version || null
        });
        const te = A.get(F);
        te.node_count++, te.node_types.push(((Je = U.reference) == null ? void 0 : Je.node_type) || U.node_type);
      }
      return Array.from(A.values());
    }), ue = R(() => fe.value.reduce((A, oe) => A + oe.node_count, 0)), we = R(() => {
      var A;
      return (A = n.value) != null && A.nodes ? (n.value.nodes.unresolved || []).map((oe) => {
        var pe;
        return {
          node_type: ((pe = oe.reference) == null ? void 0 : pe.node_type) || oe.node_type
        };
      }) : [];
    }), X = R(() => {
      var oe;
      if (!((oe = n.value) != null && oe.nodes)) return [];
      const A = n.value.node_guidance || {};
      return (n.value.nodes.version_gated || []).map((pe) => {
        var U;
        const Je = ((U = pe.reference) == null ? void 0 : U.node_type) || pe.node_type;
        return {
          node_type: Je,
          guidance: pe.guidance || A[Je] || null
        };
      });
    }), G = R(() => {
      var pe, Je, U, F, te, De, Oe, Me;
      if (!((pe = n.value) != null && pe.nodes)) return [];
      const A = n.value.node_guidance || {}, oe = /* @__PURE__ */ new Map();
      for (const Ge of n.value.nodes.uninstallable || []) {
        const nt = ((Je = Ge.reference) == null ? void 0 : Je.node_type) || Ge.node_type, bt = M(((U = Ge.package) == null ? void 0 : U.package_id) || null), Et = bt || `node:${nt}`;
        oe.has(Et) || oe.set(Et, {
          item_id: Et,
          node_type: nt,
          title: ((F = Ge.package) == null ? void 0 : F.title) || bt || nt,
          node_count: 0,
          package_id: bt,
          repository: ((te = Ge.package) == null ? void 0 : te.repository) || null,
          latest_version: ((De = Ge.package) == null ? void 0 : De.latest_version) || null,
          guidance: Ge.guidance || A[nt] || null
        });
        const re = oe.get(Et);
        re.node_count++, re.guidance || (re.guidance = Ge.guidance || A[nt] || null), !re.repository && ((Oe = Ge.package) != null && Oe.repository) && (re.repository = Ge.package.repository), !re.latest_version && ((Me = Ge.package) != null && Me.latest_version) && (re.latest_version = Ge.package.latest_version);
      }
      return Array.from(oe.values());
    }), Y = R(() => G.value.filter((A) => !!A.package_id)), Re = R(() => G.value.length >= 5 ? G.value.slice(0, 4) : G.value), se = R(() => Y.value.length > 0 && Y.value.every((A) => {
      const oe = A.package_id;
      return r.value.has(oe) || u.value.has(oe) || c.value.has(oe);
    }));
    function ge(A) {
      const oe = [
        { key: "install_registry", label: "Install", variant: "secondary" }
      ];
      return A.repository && oe.push({ key: "install_git", label: "Install via Git", variant: "ghost" }), oe;
    }
    const z = R(() => {
      var U;
      if (!((U = n.value) != null && U.models)) return [];
      const A = (n.value.models.resolved || []).filter(
        (F) => F.match_type === "download_intent" || F.match_type === "property_download_intent" || F.match_type === "not_found"
      ).map((F) => {
        var te, De, Oe, Me;
        return {
          filename: ((De = (te = F.reference) == null ? void 0 : te.widget_value) == null ? void 0 : De.split("/").pop()) || ((Oe = F.reference) == null ? void 0 : Oe.widget_value) || F.widget_value,
          widget_value: ((Me = F.reference) == null ? void 0 : Me.widget_value) || F.widget_value,
          // Backend returns download_source as URL string directly, and target_path at top level
          url: F.download_source || null,
          targetPath: F.target_path || null,
          canDownload: !!(F.download_source && F.target_path)
        };
      }), oe = (n.value.models.unresolved || []).map((F) => {
        var te, De, Oe, Me;
        return {
          filename: ((De = (te = F.reference) == null ? void 0 : te.widget_value) == null ? void 0 : De.split("/").pop()) || ((Oe = F.reference) == null ? void 0 : Oe.widget_value) || F.widget_value,
          widget_value: ((Me = F.reference) == null ? void 0 : Me.widget_value) || F.widget_value,
          url: null,
          targetPath: null,
          canDownload: !1
        };
      }), pe = /* @__PURE__ */ new Map(), Je = [];
      for (const F of A) {
        if (!F.url) {
          Je.push(F);
          continue;
        }
        const te = `${F.filename}::${F.url}`, De = pe.get(te);
        if (!De) {
          pe.set(te, F);
          continue;
        }
        !De.targetPath && F.targetPath && (De.targetPath = F.targetPath), !De.canDownload && F.canDownload && (De.canDownload = F.canDownload);
      }
      return [...pe.values(), ...Je, ...oe];
    }), me = R(() => z.value.filter((A) => A.canDownload)), Pe = R(() => fe.value.length >= 5 ? fe.value.slice(0, 4) : fe.value), We = R(() => z.value.length >= 5 ? z.value.slice(0, 4) : z.value), Ee = R(() => fe.value.length > 0 && fe.value.every(
      (A) => r.value.has(A.package_id) || u.value.has(A.package_id) || c.value.has(A.package_id)
    )), H = R(() => me.value.length > 0 && me.value.every((A) => d.value.has(A.url))), ee = R(() => fe.value.length > 0 || Y.value.length > 0 || me.value.length > 0), q = R(() => {
      const A = (fe.value.length === 0 || Ee.value) && (Y.value.length === 0 || se.value), oe = me.value.length === 0 || H.value;
      return A && oe;
    }), Z = R(() => w.value === "models" ? `Missing Models (${z.value.length})` : w.value === "packages" ? `Missing Custom Nodes (${ue.value})` : w.value === "community" ? `Community-Mapped Packages (${G.value.length})` : ""), xe = R(() => w.value === "models" ? z.value.map((A) => ({
      id: A.url || A.widget_value,
      name: A.filename,
      canAction: A.canDownload,
      actionDisabledReason: A.canDownload ? void 0 : "Manual download required"
    })) : w.value === "packages" ? fe.value.map((A) => ({
      id: A.package_id,
      name: A.title,
      subtitle: `(${A.node_count} ${A.node_count === 1 ? "node" : "nodes"})`,
      canAction: !0
    })) : w.value === "community" ? G.value.map((A) => ({
      id: A.package_id || A.item_id,
      name: A.title,
      subtitle: `(${A.node_count} ${A.node_count === 1 ? "node" : "nodes"})`,
      canAction: !!A.package_id,
      actionDisabledReason: A.package_id ? void 0 : "Manual setup required",
      actions: A.package_id ? ge(A) : []
    })) : []);
    function ce(A, oe) {
      if (w.value === "models") {
        const pe = z.value.find((Je) => Je.url === A.id || Je.widget_value === A.id);
        pe && Ce(pe);
      } else if (w.value === "packages") {
        const pe = fe.value.find((Je) => Je.package_id === A.id);
        pe && I(pe);
      } else if (w.value === "community") {
        const pe = G.value.find((U) => (U.package_id || U.item_id) === A.id);
        if (!pe) return;
        if (!pe.package_id) {
          K({ item_id: pe.item_id, title: pe.title });
          return;
        }
        V(pe, oe === "install_git" ? "git" : "registry");
      }
    }
    function le() {
      w.value === "models" ? Ue() : w.value === "packages" ? _e() : w.value === "community" && $e();
    }
    async function I(A) {
      return ie(A.package_id, A.latest_version, "registry");
    }
    async function V(A, oe) {
      return A.package_id ? ie(A.package_id, A.latest_version, oe, A.repository) : (K({ item_id: A.item_id, title: A.title }), !1);
    }
    async function ie(A, oe, pe, Je) {
      const U = M(A) || A, F = oe || "latest";
      if (r.value.has(U) || u.value.has(U) || c.value.has(U))
        return !0;
      ot(), v.value = U;
      let te = null;
      try {
        const De = {
          id: U,
          version: F,
          selected_version: F,
          mode: "remote",
          channel: "default"
        };
        pe === "git" && Je && (De.repository = Je, De.install_source = "git");
        const { ui_id: Oe } = await S(De, {
          beforeQueueStart: (Me) => {
            te = Me, _.value.set(Me, U), u.value.add(U), E(U), console.log("[ComfyGit] Registered pending install:", {
              ui_id: Me,
              packageId: U,
              pendingInstalls: Array.from(_.value.entries())
            });
          }
        });
        return te || (te = Oe, _.value.set(Oe, U), u.value.add(U), E(U), console.log("[ComfyGit] Registered pending install (fallback):", {
          ui_id: Oe,
          packageId: U,
          pendingInstalls: Array.from(_.value.entries())
        })), !0;
      } catch (De) {
        const Oe = P(De, "Failed to queue install request");
        return console.error("[ComfyGit] Failed to queue package install:", De), te && _.value.delete(te), D(U), N(U), u.value.delete(U), c.value.set(U, Oe), !1;
      } finally {
        v.value = null;
      }
    }
    function Ce(A) {
      !A.url || !A.targetPath || d.value.has(A.url) || (C([{
        workflow: "unsaved",
        filename: A.filename,
        url: A.url,
        targetPath: A.targetPath
      }]), d.value.add(A.url));
    }
    async function _e() {
      const A = { attempted: 0, failed: 0 };
      for (const oe of fe.value)
        !r.value.has(oe.package_id) && !u.value.has(oe.package_id) && !c.value.has(oe.package_id) && (A.attempted++, await I(oe) || A.failed++);
      return A;
    }
    async function $e() {
      const A = { attempted: 0, failed: 0 };
      for (const oe of Y.value) {
        const pe = oe.package_id;
        !r.value.has(pe) && !u.value.has(pe) && !c.value.has(pe) && (A.attempted++, await V(oe, "registry") || A.failed++);
      }
      return A;
    }
    function Ue() {
      const A = me.value.filter(
        (oe) => !d.value.has(oe.url)
      );
      if (A.length === 0) return 0;
      C(A.map((oe) => ({
        workflow: "unsaved",
        filename: oe.filename,
        url: oe.url,
        targetPath: oe.targetPath
      })));
      for (const oe of A)
        d.value.add(oe.url);
      return A.length;
    }
    async function ze() {
      const A = await _e(), oe = await $e();
      Ue();
      const pe = A.attempted + oe.attempted, Je = A.failed + oe.failed;
      if (pe > 0 && Je > 0) {
        const U = pe - Je;
        o.value = `${U} of ${pe} installs queued, ${Je} failed`;
      }
    }
    function Le() {
      m.value ? localStorage.setItem("comfygit:popup-disabled", "true") : localStorage.removeItem("comfygit:popup-disabled");
    }
    async function Ie(A) {
      var U, F;
      if (localStorage.getItem("comfygit:popup-disabled") === "true") {
        console.log("[ComfyGit] Popup globally disabled");
        return;
      }
      const oe = A == null ? void 0 : A.id;
      if (oe && g.value.has(oe)) {
        console.log(`[ComfyGit] Already shown popup for workflow ${oe} this session`);
        return;
      }
      const pe = window.app, Je = (U = pe == null ? void 0 : pe.extensionManager) == null ? void 0 : U.workflow;
      if (Je) {
        let Oe = !1;
        for (let Me = 0; Me < 20; Me++) {
          const Ge = Je.activeWorkflow;
          if (!Ge) {
            await new Promise((Et) => setTimeout(Et, 50));
            continue;
          }
          const nt = (F = Ge.activeState) == null ? void 0 : F.id;
          if (!(oe && nt === oe)) {
            Me < 19 && await new Promise((Et) => setTimeout(Et, 50));
            continue;
          }
          if (Oe = !0, Ge.isPersisted === !0) {
            console.log(`[ComfyGit] Skipping popup for saved workflow: ${Ge.filename}`), oe && g.value.add(oe);
            return;
          }
          break;
        }
        Oe || console.warn("[ComfyGit] Could not verify workflow state, showing popup as fallback");
      }
      t.value = !0, o.value = null, O(), r.value = /* @__PURE__ */ new Set(), u.value = /* @__PURE__ */ new Set(), c.value = /* @__PURE__ */ new Map(), d.value = /* @__PURE__ */ new Set(), _.value = /* @__PURE__ */ new Map(), m.value = !1, p.value = 0;
      try {
        const te = await fetch("/v2/comfygit/workflow/analyze-json", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ workflow: A, name: "unsaved" })
        });
        if (!te.ok) {
          const De = await te.json();
          throw new Error(De.error || "Failed to analyze workflow");
        }
        n.value = await te.json(), ae.value && (l.value = !0, oe && g.value.add(oe));
      } catch (te) {
        console.error("[ComfyGit] Failed to analyze workflow:", te);
      } finally {
        t.value = !1;
      }
    }
    function Ke() {
      O(), l.value = !1, n.value = null;
    }
    function Ve(A) {
      const { workflow: oe } = A.detail;
      oe && Ie(oe);
    }
    function ve(A) {
      var Je;
      const oe = (Je = A.detail) == null ? void 0 : Je.ui_id;
      console.log("[ComfyGit] cm-task-started received:", {
        taskId: oe,
        pendingInstalls: Array.from(_.value.entries()),
        eventDetail: A.detail
      });
      const pe = _.value.get(oe);
      pe ? (N(pe), v.value = pe, console.log("[ComfyGit] Installing package:", pe)) : console.warn("[ComfyGit] cm-task-started: No matching package for taskId:", oe);
    }
    function Q(A) {
      var U, F, te, De, Oe, Me, Ge;
      const oe = (U = A.detail) == null ? void 0 : U.ui_id, pe = (te = (F = A.detail) == null ? void 0 : F.status) == null ? void 0 : te.status_str;
      console.log("[ComfyGit] cm-task-completed received:", {
        taskId: oe,
        status: pe,
        pendingInstalls: Array.from(_.value.entries()),
        eventDetail: A.detail
      });
      const Je = _.value.get(oe);
      if (Je) {
        if (N(Je), _.value.delete(oe), u.value.delete(Je), v.value === Je && (v.value = null), pe === "success")
          r.value.add(Je), p.value++, console.log("[ComfyGit] Package installed successfully:", Je);
        else {
          const nt = ((Me = (Oe = (De = A.detail) == null ? void 0 : De.status) == null ? void 0 : Oe.messages) == null ? void 0 : Me[0]) || ((Ge = A.detail) == null ? void 0 : Ge.result) || "Unknown error";
          c.value.set(Je, nt), console.error("[ComfyGit] Package install failed:", Je, nt);
        }
        _.value.size === 0 && p.value > 0 && (console.log("[ComfyGit] All installs complete, dispatching nodes-installed event:", p.value), window.dispatchEvent(new CustomEvent("comfygit:nodes-installed", {
          detail: { count: p.value }
        })));
      } else
        console.warn("[ComfyGit] cm-task-completed: No matching package for taskId:", oe);
    }
    let He = null;
    function ke() {
      var A;
      return He || (He = (A = window.app) == null ? void 0 : A.api), He;
    }
    let Ye = !1;
    function ot() {
      if (Ye) return !0;
      const A = ke();
      return A ? (A.addEventListener("cm-task-started", ve), A.addEventListener("cm-task-completed", Q), A.addEventListener("comfygit:workflow-changed", Ae), Ye = !0, console.log("[ComfyGit] Registered WebSocket event listeners for install tracking"), !0) : (console.warn("[ComfyGit] Could not register WebSocket listeners - API not available"), !1);
    }
    function Ae(A) {
      const { change_type: oe } = A.detail;
      (oe === "created" || oe === "modified") && l.value && (O(), l.value = !1, console.log("[ComfyGit] Workflow saved, auto-dismissing popup"));
    }
    return rt(() => {
      window.addEventListener("comfygit:workflow-loaded", Ve);
    }), Mo(() => {
      if (O(), window.removeEventListener("comfygit:workflow-loaded", Ve), Ye) {
        const A = ke();
        A && (A.removeEventListener("cm-task-started", ve), A.removeEventListener("cm-task-completed", Q), A.removeEventListener("comfygit:workflow-changed", Ae)), Ye = !1;
      }
    }), (A, oe) => (a(), i(j, null, [
      l.value ? (a(), L(It, {
        key: 0,
        title: "Missing Dependencies",
        size: "md",
        loading: t.value,
        error: o.value || void 0,
        onClose: Ke
      }, {
        body: h(() => [
          t.value ? (a(), i("div", n7, [...oe[5] || (oe[5] = [
            s("div", { class: "loading-spinner" }, null, -1),
            s("span", null, "Analyzing workflow...", -1)
          ])])) : n.value && ae.value ? (a(), i("div", a7, [
            fe.value.length > 0 ? (a(), i("div", l7, [
              s("div", i7, [
                s("span", r7, "Missing Custom Nodes (" + f(ue.value) + ")", 1),
                fe.value.length > 1 ? (a(), L(Ne, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: Ee.value,
                  onClick: _e
                }, {
                  default: h(() => [
                    $(f(Ee.value ? "All Queued" : "Install All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0)
              ]),
              s("div", c7, [
                (a(!0), i(j, null, he(Pe.value, (pe) => (a(), i("div", {
                  key: pe.package_id,
                  class: "package-item"
                }, [
                  s("div", u7, [
                    s("span", d7, f(pe.title), 1),
                    s("span", f7, "(" + f(pe.node_count) + " " + f(pe.node_count === 1 ? "node" : "nodes") + ")", 1)
                  ]),
                  !r.value.has(pe.package_id) && !u.value.has(pe.package_id) && !c.value.has(pe.package_id) ? (a(), L(Ne, {
                    key: 0,
                    size: "sm",
                    variant: "secondary",
                    disabled: v.value === pe.package_id,
                    onClick: (Je) => I(pe)
                  }, {
                    default: h(() => [
                      $(f(v.value === pe.package_id ? "Queueing..." : "Install"), 1)
                    ]),
                    _: 2
                  }, 1032, ["disabled", "onClick"])) : v.value === pe.package_id ? (a(), i("span", m7, "Installing...")) : u.value.has(pe.package_id) ? (a(), i("span", v7, "Queued")) : c.value.has(pe.package_id) ? (a(), i("span", {
                    key: 3,
                    class: "failed-badge",
                    title: c.value.get(pe.package_id)
                  }, "Failed ⚠", 8, p7)) : (a(), i("span", g7, "Installed"))
                ]))), 128)),
                fe.value.length >= 5 ? (a(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: oe[0] || (oe[0] = (pe) => w.value = "packages")
                }, [
                  s("span", null, "Show all " + f(fe.value.length) + " packages...", 1),
                  oe[6] || (oe[6] = s("span", { class: "show-all-arrow" }, "→", -1))
                ])) : y("", !0)
              ])
            ])) : y("", !0),
            we.value.length > 0 ? (a(), i("div", h7, [
              s("div", y7, [
                s("span", w7, "Unknown Nodes (" + f(we.value.length) + ")", 1)
              ]),
              s("div", _7, [
                (a(!0), i(j, null, he(we.value.slice(0, 5), (pe) => (a(), i("div", {
                  key: pe.node_type,
                  class: "item"
                }, [
                  s("code", k7, f(pe.node_type), 1),
                  oe[7] || (oe[7] = s("span", { class: "not-found" }, "Not found in registry", -1))
                ]))), 128)),
                we.value.length > 5 ? (a(), i("div", b7, " ...and " + f(we.value.length - 5) + " more ", 1)) : y("", !0)
              ])
            ])) : y("", !0),
            X.value.length > 0 ? (a(), i("div", $7, [
              s("div", C7, [
                s("span", x7, "Requires Newer ComfyUI (" + f(X.value.length) + ")", 1)
              ]),
              s("div", S7, [
                (a(!0), i(j, null, he(X.value.slice(0, 5), (pe) => (a(), i("div", {
                  key: `vg-${pe.node_type}`,
                  class: "item"
                }, [
                  s("code", I7, f(pe.node_type), 1),
                  s("span", E7, f(pe.guidance || "Requires a newer ComfyUI version"), 1)
                ]))), 128)),
                X.value.length > 5 ? (a(), i("div", T7, " ...and " + f(X.value.length - 5) + " more ", 1)) : y("", !0)
              ])
            ])) : y("", !0),
            G.value.length > 0 ? (a(), i("div", M7, [
              s("div", P7, [
                s("span", R7, "Community-Mapped Packages (" + f(G.value.length) + ")", 1),
                Y.value.length > 1 ? (a(), L(Ne, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: se.value,
                  onClick: $e
                }, {
                  default: h(() => [
                    $(f(se.value ? "All Queued" : "Install All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0)
              ]),
              s("div", L7, [
                (a(!0), i(j, null, he(Re.value, (pe) => (a(), i("div", {
                  key: `community-${pe.item_id}`,
                  class: "package-item"
                }, [
                  s("div", N7, [
                    s("div", D7, [
                      s("span", O7, f(pe.title), 1),
                      s("span", U7, "(" + f(pe.node_count) + " " + f(pe.node_count === 1 ? "node" : "nodes") + ")", 1)
                    ]),
                    s("div", A7, [
                      oe[8] || (oe[8] = $(" Found via community mapping — registry metadata may be incomplete", -1)),
                      pe.guidance ? (a(), i("span", z7, ". " + f(pe.guidance), 1)) : y("", !0)
                    ])
                  ]),
                  pe.package_id ? (a(), i(j, { key: 0 }, [
                    !r.value.has(pe.package_id) && !u.value.has(pe.package_id) && !c.value.has(pe.package_id) ? (a(), i("div", F7, [
                      b(Ne, {
                        size: "sm",
                        variant: "secondary",
                        disabled: v.value === pe.package_id,
                        onClick: (Je) => V(pe, "registry")
                      }, {
                        default: h(() => [
                          $(f(v.value === pe.package_id ? "Queueing..." : "Install"), 1)
                        ]),
                        _: 2
                      }, 1032, ["disabled", "onClick"]),
                      pe.repository ? (a(), L(Ne, {
                        key: 0,
                        size: "sm",
                        variant: "ghost",
                        disabled: v.value === pe.package_id,
                        onClick: (Je) => V(pe, "git")
                      }, {
                        default: h(() => [...oe[9] || (oe[9] = [
                          $(" Install via Git ", -1)
                        ])]),
                        _: 1
                      }, 8, ["disabled", "onClick"])) : y("", !0)
                    ])) : v.value === pe.package_id ? (a(), i("span", V7, "Installing...")) : u.value.has(pe.package_id) ? (a(), i("span", B7, "Queued")) : c.value.has(pe.package_id) ? (a(), i("span", {
                      key: 3,
                      class: "failed-badge",
                      title: c.value.get(pe.package_id)
                    }, "Failed ⚠", 8, W7)) : (a(), i("span", G7, "Installed"))
                  ], 64)) : (a(), i(j, { key: 1 }, [
                    c.value.has(pe.item_id) ? (a(), i("span", {
                      key: 0,
                      class: "failed-badge",
                      title: c.value.get(pe.item_id)
                    }, "Failed ⚠", 8, j7)) : (a(), i("span", H7, "Manual setup required"))
                  ], 64))
                ]))), 128)),
                G.value.length >= 5 ? (a(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: oe[1] || (oe[1] = (pe) => w.value = "community")
                }, [
                  s("span", null, "Show all " + f(G.value.length) + " packages...", 1),
                  oe[10] || (oe[10] = s("span", { class: "show-all-arrow" }, "→", -1))
                ])) : y("", !0)
              ])
            ])) : y("", !0),
            z.value.length > 0 ? (a(), i("div", q7, [
              s("div", K7, [
                s("span", J7, "Missing Models (" + f(z.value.length) + ")", 1),
                me.value.length > 1 ? (a(), L(Ne, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: H.value,
                  onClick: Ue
                }, {
                  default: h(() => [
                    $(f(H.value ? "All Queued" : "Download All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0)
              ]),
              s("div", Q7, [
                (a(!0), i(j, null, he(We.value, (pe) => (a(), i("div", {
                  key: pe.widget_value,
                  class: "model-item"
                }, [
                  s("div", Y7, [
                    s("span", X7, f(pe.filename), 1)
                  ]),
                  pe.canDownload ? (a(), i(j, { key: 0 }, [
                    d.value.has(pe.url) ? (a(), i("span", Z7, "Queued")) : (a(), L(Ne, {
                      key: 0,
                      size: "sm",
                      variant: "secondary",
                      onClick: (Je) => Ce(pe)
                    }, {
                      default: h(() => [...oe[11] || (oe[11] = [
                        $(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]))
                  ], 64)) : (a(), i("span", eP, "Manual download required"))
                ]))), 128)),
                z.value.length >= 5 ? (a(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: oe[2] || (oe[2] = (pe) => w.value = "models")
                }, [
                  s("span", null, "Show all " + f(z.value.length) + " models...", 1),
                  oe[12] || (oe[12] = s("span", { class: "show-all-arrow" }, "→", -1))
                ])) : y("", !0)
              ])
            ])) : y("", !0),
            s("div", tP, [
              b(qn, {
                modelValue: m.value,
                "onUpdate:modelValue": [
                  oe[3] || (oe[3] = (pe) => m.value = pe),
                  Le
                ]
              }, {
                default: h(() => [...oe[13] || (oe[13] = [
                  $(" Don't show this popup ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])
          ])) : y("", !0)
        ]),
        footer: h(() => [
          b(Ne, {
            variant: "secondary",
            onClick: Ke
          }, {
            default: h(() => [...oe[14] || (oe[14] = [
              $("Dismiss", -1)
            ])]),
            _: 1
          }),
          ee.value ? (a(), L(Ne, {
            key: 0,
            variant: "primary",
            disabled: q.value,
            onClick: ze
          }, {
            default: h(() => [
              $(f(q.value ? "All Done" : "Download All"), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : y("", !0)
        ]),
        _: 1
      }, 8, ["loading", "error"])) : y("", !0),
      w.value ? (a(), L(o7, {
        key: 1,
        title: Z.value,
        items: xe.value,
        "item-type": w.value,
        "queued-items": w.value === "models" ? d.value : u.value,
        "installed-items": w.value === "models" ? void 0 : r.value,
        "failed-items": w.value === "models" ? void 0 : c.value,
        "installing-item": w.value === "models" ? void 0 : v.value,
        onClose: oe[4] || (oe[4] = (pe) => w.value = null),
        onAction: ce,
        onBulkAction: le
      }, null, 8, ["title", "items", "item-type", "queued-items", "installed-items", "failed-items", "installing-item"])) : y("", !0)
    ], 64));
  }
}), nP = /* @__PURE__ */ Se(oP, [["__scopeId", "data-v-dfb55c3f"]]), aP = {
  key: 0,
  class: "io-mapping-root"
}, lP = { class: "io-mapping-visual-layer" }, iP = { class: "io-mapping-header" }, rP = { class: "io-mapping-header-main" }, cP = { class: "io-mapping-subtitle" }, uP = {
  key: 0,
  class: "io-mapping-hover-summary"
}, dP = { class: "io-mapping-header-actions" }, fP = { class: "io-mapping-sidebar" }, mP = { class: "io-mapping-sidebar-scroll" }, vP = {
  key: 0,
  class: "io-state-block"
}, pP = {
  key: 1,
  class: "io-state-block io-state-error"
}, gP = { class: "contract-meta-section" }, hP = { class: "contract-meta-toggle-icon" }, yP = {
  key: 0,
  class: "contract-meta-body"
}, wP = { class: "contract-summary" }, _P = { class: "summary-pill" }, kP = { class: "summary-pill" }, bP = { class: "summary-pill" }, $P = { class: "mapping-section" }, CP = { class: "section-header" }, xP = {
  key: 0,
  class: "empty-message"
}, SP = ["onClick"], IP = { class: "item-card-title" }, EP = { class: "item-card-meta" }, TP = { class: "item-card-summary" }, MP = { key: 0 }, PP = { class: "mapping-section" }, RP = { class: "section-header" }, LP = {
  key: 0,
  class: "empty-message"
}, NP = ["onClick"], DP = { class: "item-card-title" }, OP = { class: "item-card-meta" }, UP = { class: "item-card-summary" }, AP = { class: "io-mapping-footer" }, zP = { class: "io-mapping-footer-left" }, FP = { class: "io-mapping-footer-right" }, VP = /* @__PURE__ */ be({
  __name: "WorkflowIOMappingOverlay",
  props: {
    comfyApp: {}
  },
  setup(e) {
    const t = e, { getWorkflowContract: o, saveWorkflowContract: n, deleteWorkflowContract: l } = vt(), r = k(!1), u = k(""), c = k(!1), d = k(!1), m = k(!1), v = k(null), p = k(null), w = k(null), g = k(!1), _ = k(!1), x = k(null), C = k(null), S = k(0), T = k(null), M = k(null);
    let P = null;
    const D = [
      "string",
      "integer",
      "number",
      "boolean",
      "enum",
      "image",
      "video",
      "audio",
      "file"
    ], N = [
      { label: "Required", value: "true" },
      { label: "Optional", value: "false" }
    ], O = R(() => {
      var U;
      return ((U = p.value) == null ? void 0 : U.contract_summary.has_contract) === !0;
    }), E = R(() => {
      if (!w.value)
        return { inputs: [], outputs: [] };
      const U = w.value.default_contract || "default";
      return w.value.contracts[U] || (w.value.contracts[U] = { inputs: [], outputs: [] }), w.value.contracts[U];
    }), K = R(() => {
      var F;
      const U = ((F = p.value) == null ? void 0 : F.contract_summary.status) ?? "none";
      return U === "valid" ? "Valid Contract" : U === "incomplete" ? "Incomplete Contract" : "No Contract";
    });
    function ae(U) {
      return U ? JSON.parse(JSON.stringify(U)) : {
        version: 1,
        default_contract: "default",
        contracts: {
          default: { inputs: [], outputs: [] }
        }
      };
    }
    function fe(U) {
      return U === "integer" || U === "number";
    }
    function ue(U) {
      return U === "enum";
    }
    function we(U) {
      return U == null ? "" : String(U);
    }
    function X(U) {
      const F = U.trim();
      if (!F) return;
      const te = Number(F);
      return Number.isFinite(te) ? te : void 0;
    }
    function G(U) {
      return (U || []).join(`
`);
    }
    function Y(U) {
      return U.split(/[\n,]/).map((F) => F.trim()).filter(Boolean);
    }
    function Re(U) {
      return typeof U == "string" ? U.length > 24 ? `${U.slice(0, 24)}...` : U : String(U);
    }
    function se(U) {
      return U == null ? "" : String(U);
    }
    function ge(U) {
      var te;
      const F = (te = U == null ? void 0 : U.options) == null ? void 0 : te.values;
      return Array.isArray(F) ? F.map((De) => String(De)).filter(Boolean) : [];
    }
    function z(U, F) {
      var Oe;
      const te = (Oe = U == null ? void 0 : U.options) == null ? void 0 : Oe[F];
      if (te == null || te === "") return;
      const De = Number(te);
      return Number.isFinite(De) ? De : void 0;
    }
    function me(U, F) {
      return U.trim().toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "") || F;
    }
    function Pe(U) {
      if (!w.value) return;
      const F = U.trim() || "default";
      w.value.default_contract = F, w.value.contracts[F] || (w.value.contracts[F] = { inputs: [], outputs: [] });
    }
    function We(U) {
      const F = String(U ?? "").toLowerCase();
      return F.includes("image") ? "image" : F.includes("video") ? "video" : F.includes("audio") ? "audio" : F.includes("int") ? "integer" : F.includes("float") || F.includes("double") || F.includes("number") ? "number" : F.includes("bool") ? "boolean" : F.includes("combo") || F.includes("enum") ? "enum" : F.includes("string") || F.includes("text") ? "string" : "file";
    }
    function Ee(U) {
      E.value.inputs.splice(U, 1), x.value === U && (x.value = null);
    }
    function H(U) {
      E.value.outputs.splice(U, 1), C.value === U && (C.value = null);
    }
    function ee(U) {
      x.value = x.value === U ? null : U, x.value != null && (C.value = null);
    }
    function q(U) {
      C.value = C.value === U ? null : U, C.value != null && (x.value = null);
    }
    function Z(U) {
      const F = typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(String(U)) : String(U);
      return document.querySelector(`[data-node-id="${F}"]`);
    }
    function xe(U) {
      return U instanceof Element ? !!U.closest(".io-mapping-header, .io-mapping-sidebar") : !1;
    }
    function ce(U) {
      var De, Oe, Me, Ge, nt, bt;
      if (!(U instanceof Element)) return null;
      const F = U.closest("[data-node-id]"), te = F == null ? void 0 : F.getAttribute("data-node-id");
      return te ? ((Me = (Oe = (De = t.comfyApp) == null ? void 0 : De.graph) == null ? void 0 : Oe.getNodeById) == null ? void 0 : Me.call(Oe, te)) ?? ((bt = (nt = (Ge = t.comfyApp) == null ? void 0 : Ge.rootGraph) == null ? void 0 : nt.getNodeById) == null ? void 0 : bt.call(nt, te)) ?? null : null;
    }
    function le(U, F) {
      if (F == null || F < 0) return null;
      const te = Z(U);
      return te ? te.querySelectorAll('[data-testid="node-widget"]')[F] ?? null : null;
    }
    function I(U) {
      return !U || U.width <= 0 || U.height <= 0 ? null : {
        left: `${U.left}px`,
        top: `${U.top}px`,
        width: `${U.width}px`,
        height: `${U.height}px`
      };
    }
    function V(U) {
      const F = Z((U == null ? void 0 : U.id) ?? "");
      if (F) return F.getBoundingClientRect();
      const te = t.comfyApp;
      if (!U || typeof (te == null ? void 0 : te.canvasPosToClientPos) != "function") return null;
      const Oe = te.canvasPosToClientPos([U.pos[0], U.pos[1] - 32]), Me = te.canvasPosToClientPos([U.pos[0] + U.size[0], U.pos[1] + U.size[1]]);
      return !Oe || !Me ? null : new DOMRect(Oe[0], Oe[1], Me[0] - Oe[0], Me[1] - Oe[1]);
    }
    function ie(U) {
      var nt, bt, Et, re, B, de, Be;
      const F = le(U.node_id, U.widget_idx);
      if (F) return F.getBoundingClientRect();
      const te = ((Et = (bt = (nt = t.comfyApp) == null ? void 0 : nt.graph) == null ? void 0 : bt.getNodeById) == null ? void 0 : Et.call(bt, String(U.node_id))) ?? ((de = (B = (re = t.comfyApp) == null ? void 0 : re.rootGraph) == null ? void 0 : B.getNodeById) == null ? void 0 : de.call(B, String(U.node_id)));
      if (!te || typeof U.widget_idx != "number" || !Array.isArray(te.widgets)) return null;
      const De = te.widgets[U.widget_idx];
      if (!De || typeof ((Be = t.comfyApp) == null ? void 0 : Be.canvasPosToClientPos) != "function") return V(te);
      const Oe = 10, Me = t.comfyApp.canvasPosToClientPos([te.pos[0] + Oe, te.pos[1] + (De.y ?? 0)]), Ge = t.comfyApp.canvasPosToClientPos([te.pos[0] + te.size[0] - Oe, te.pos[1] + (De.y ?? 0) + (De.computedHeight ?? 24)]);
      return !Me || !Ge ? V(te) : new DOMRect(Me[0], Me[1], Ge[0] - Me[0], Ge[1] - Me[1]);
    }
    function Ce(U) {
      var te, De, Oe, Me, Ge, nt;
      const F = ((Oe = (De = (te = t.comfyApp) == null ? void 0 : te.graph) == null ? void 0 : De.getNodeById) == null ? void 0 : Oe.call(De, String(U.node_id))) ?? ((nt = (Ge = (Me = t.comfyApp) == null ? void 0 : Me.rootGraph) == null ? void 0 : Ge.getNodeById) == null ? void 0 : nt.call(Ge, String(U.node_id)));
      return V(F);
    }
    const _e = R(() => (S.value, E.value.inputs.map((U, F) => {
      const te = I(ie(U));
      return te ? {
        key: `input-${F}-${U.node_id}-${U.widget_idx ?? "na"}`,
        style: te,
        active: x.value === F
      } : null;
    }).filter((U) => !!U))), $e = R(() => (S.value, E.value.outputs.map((U, F) => {
      const te = I(Ce(U));
      return te ? {
        key: `output-${F}-${U.node_id}-${U.selector ?? "primary"}`,
        style: te,
        active: C.value === F
      } : null;
    }).filter((U) => !!U)));
    function Ue(U) {
      var Et, re, B, de, Be, ut, Ct, lt, xt, ss;
      if (xe(U.target)) return null;
      const F = (Et = t.comfyApp) == null ? void 0 : Et.canvas;
      if (!F) return null;
      const te = (re = F.convertEventToCanvasOffset) == null ? void 0 : re.call(F, U);
      if (!te || te.length < 2) return null;
      const [De, Oe] = te, Me = F.graph || ((B = t.comfyApp) == null ? void 0 : B.graph) || ((de = t.comfyApp) == null ? void 0 : de.rootGraph), Ge = ((Be = Me == null ? void 0 : Me.getNodeOnPos) == null ? void 0 : Be.call(Me, De, Oe, F.visible_nodes)) || ((ut = F.getNodeOnPos) == null ? void 0 : ut.call(F, De, Oe)) || ce(U.target);
      if (!Ge) return null;
      const nt = (Ct = Ge.getWidgetOnPos) == null ? void 0 : Ct.call(Ge, De, Oe, !0);
      if (nt)
        return { kind: "input", node: Ge, widget: nt, canvasX: De, canvasY: Oe };
      const bt = ((lt = Ge.getOutputOnPos) == null ? void 0 : lt.call(Ge, [De, Oe])) || ((ss = (xt = Ge.constructor) == null ? void 0 : xt.nodeData) != null && ss.output_node ? { name: Ge.title || Ge.type || "output", type: "image" } : null);
      return bt ? { kind: "output", node: Ge, output: bt, canvasX: De, canvasY: Oe } : null;
    }
    function ze(U, F) {
      var nt;
      const te = Array.isArray(U.widgets) ? U.widgets.indexOf(F) : -1, De = E.value.inputs.findIndex(
        (bt) => String(bt.node_id) === String(U.id) && bt.widget_idx === te
      );
      if (De >= 0) {
        x.value = De;
        return;
      }
      const Oe = typeof ((nt = F == null ? void 0 : F.options) == null ? void 0 : nt.property) == "string" ? F.options.property : void 0, Me = (F == null ? void 0 : F.name) || Oe || "input", Ge = {
        name: me(String(Me), `input_${E.value.inputs.length + 1}`),
        display_name: String((F == null ? void 0 : F.name) || Oe || `Input ${E.value.inputs.length + 1}`),
        type: We(F == null ? void 0 : F.type),
        node_id: String(U.id),
        widget_idx: te >= 0 ? te : void 0,
        field_key: Oe,
        required: !0,
        default: (F == null ? void 0 : F.value) ?? ""
      };
      fe(Ge.type) && (Ge.min = z(F, "min"), Ge.max = z(F, "max")), ue(Ge.type) && (Ge.enum_values = ge(F)), E.value.inputs.push(Ge), x.value = E.value.inputs.length - 1, C.value = null;
    }
    function Le(U, F) {
      const te = Array.isArray(U.outputs) ? U.outputs.indexOf(F) : -1, De = te >= 0 ? `slot:${te}` : "primary", Oe = E.value.outputs.findIndex(
        (Ge) => String(Ge.node_id) === String(U.id) && (Ge.selector || "primary") === De
      );
      if (Oe >= 0) {
        C.value = Oe;
        return;
      }
      const Me = {
        name: me(String((F == null ? void 0 : F.name) || "output"), `output_${E.value.outputs.length + 1}`),
        display_name: String((F == null ? void 0 : F.name) || `Output ${E.value.outputs.length + 1}`),
        type: We(F == null ? void 0 : F.type),
        node_id: String(U.id),
        selector: De
      };
      E.value.outputs.push(Me), C.value = E.value.outputs.length - 1, x.value = null;
    }
    function Ie(U) {
      var De, Oe, Me;
      if (!r.value) {
        T.value = null, M.value = null;
        return;
      }
      const F = Ue(U);
      if (!F) {
        T.value = null, M.value = null;
        return;
      }
      if (F.kind === "input") {
        const Ge = Array.isArray(F.node.widgets) ? F.node.widgets.indexOf(F.widget) : -1, nt = I(((De = le(F.node.id, Ge)) == null ? void 0 : De.getBoundingClientRect()) ?? ie({
          node_id: String(F.node.id),
          widget_idx: Ge >= 0 ? Ge : void 0
        }));
        if (!nt) {
          T.value = null, M.value = null;
          return;
        }
        T.value = {
          kind: "input",
          label: `${((Oe = F.widget) == null ? void 0 : Oe.name) || "widget"} · Node ${F.node.id}`
        }, M.value = { kind: "input", style: nt };
        return;
      }
      const te = I(V(F.node));
      if (!te) {
        T.value = null, M.value = null;
        return;
      }
      T.value = {
        kind: "output",
        label: `${((Me = F.output) == null ? void 0 : Me.name) || F.node.title || F.node.type || "output"} · Node ${F.node.id}`
      }, M.value = { kind: "output", style: te };
    }
    function Ke(U) {
      var De, Oe, Me;
      if (!r.value || !w.value || U.button !== 0) return;
      const F = Ue(U);
      if (!F) return;
      const te = (De = t.comfyApp) == null ? void 0 : De.canvas;
      if (te) {
        if (F.kind === "input") {
          U.preventDefault(), U.stopImmediatePropagation(), U.stopPropagation(), Array.isArray(te.graph_mouse) && (te.graph_mouse[0] = F.canvasX, te.graph_mouse[1] = F.canvasY), (Oe = te.selectNode) == null || Oe.call(te, F.node, !1), ze(F.node, F.widget);
          return;
        }
        U.preventDefault(), U.stopImmediatePropagation(), U.stopPropagation(), Array.isArray(te.graph_mouse) && (te.graph_mouse[0] = F.canvasX, te.graph_mouse[1] = F.canvasY), (Me = te.selectNode) == null || Me.call(te, F.node, !1), Le(F.node, F.output);
      }
    }
    function Ve() {
      document.addEventListener("pointerdown", Ke, !0), document.addEventListener("pointermove", Ie, !0);
    }
    function ve() {
      document.removeEventListener("pointerdown", Ke, !0), document.removeEventListener("pointermove", Ie, !0);
    }
    async function Q() {
      if (u.value) {
        c.value = !0, v.value = null;
        try {
          p.value = await o(u.value), w.value = ae(p.value.execution_contract);
        } catch (U) {
          v.value = U instanceof Error ? U.message : "Failed to load workflow contract";
        } finally {
          c.value = !1;
        }
      }
    }
    async function He() {
      if (!(!w.value || !u.value)) {
        d.value = !0, v.value = null;
        try {
          p.value = await n(u.value, w.value), w.value = ae(p.value.execution_contract), window.dispatchEvent(new CustomEvent("comfygit:workflow-contract-saved", {
            detail: { workflowName: u.value }
          })), Ae({ reopenPanel: !0 });
        } catch (U) {
          v.value = U instanceof Error ? U.message : "Failed to save workflow contract";
        } finally {
          d.value = !1;
        }
      }
    }
    async function ke() {
      _.value = !0;
    }
    async function Ye() {
      if (u.value) {
        _.value = !1, m.value = !0, v.value = null;
        try {
          await l(u.value), window.dispatchEvent(new CustomEvent("comfygit:workflow-contract-saved", {
            detail: { workflowName: u.value }
          })), Ae({ reopenPanel: !0 });
        } catch (U) {
          v.value = U instanceof Error ? U.message : "Failed to delete workflow contract";
        } finally {
          m.value = !1;
        }
      }
    }
    function ot() {
      window.dispatchEvent(new CustomEvent("comfygit:open-panel", {
        detail: { initialView: "workflows" }
      }));
    }
    function Ae(U) {
      r.value = !1, T.value = null, M.value = null, _.value = !1, U != null && U.reopenPanel && ot();
    }
    async function A(U) {
      var De, Oe;
      const te = (Oe = (De = U.detail) == null ? void 0 : De.workflowName) == null ? void 0 : Oe.trim();
      te && (u.value = te, x.value = null, C.value = null, g.value = !1, r.value = !0, await Q());
    }
    function oe(U) {
      if (U.key === "Escape" && r.value) {
        if (_.value) {
          _.value = !1;
          return;
        }
        Ae({ reopenPanel: !0 });
      }
    }
    function pe() {
      if (P != null) return;
      const U = () => {
        if (S.value += 1, !r.value) {
          P = null;
          return;
        }
        P = window.requestAnimationFrame(U);
      };
      P = window.requestAnimationFrame(U);
    }
    function Je() {
      P != null && (window.cancelAnimationFrame(P), P = null);
    }
    return kt(r, (U) => {
      U ? (Ve(), pe()) : (ve(), Je());
    }), rt(() => {
      window.addEventListener("comfygit:open-io-mapping", A), window.addEventListener("keydown", oe);
    }), oa(() => {
      ve(), Je(), window.removeEventListener("comfygit:open-io-mapping", A), window.removeEventListener("keydown", oe);
    }), (U, F) => r.value ? (a(), i("div", aP, [
      s("div", lP, [
        (a(!0), i(j, null, he(_e.value, (te) => (a(), i("div", {
          key: te.key,
          class: Fe(["io-highlight", "io-highlight-input", { active: te.active }]),
          style: Rt(te.style)
        }, null, 6))), 128)),
        (a(!0), i(j, null, he($e.value, (te) => (a(), i("div", {
          key: te.key,
          class: Fe(["io-highlight", "io-highlight-output", { active: te.active }]),
          style: Rt(te.style)
        }, null, 6))), 128)),
        M.value ? (a(), i("div", {
          key: 0,
          class: Fe(["io-highlight", M.value.kind === "input" ? "io-highlight-hover-input" : "io-highlight-hover-output"]),
          style: Rt(M.value.style)
        }, null, 6)) : y("", !0)
      ]),
      s("div", iP, [
        s("div", rP, [
          F[8] || (F[8] = s("div", { class: "io-mapping-title" }, "I/O MAPPING MODE", -1)),
          s("div", cP, f(u.value) + " · Hover any input widget or output target on the graph, then click to add it to the contract. ", 1),
          T.value ? (a(), i("div", uP, " Hovering " + f(T.value.kind) + ": " + f(T.value.label), 1)) : y("", !0)
        ]),
        s("div", dP, [
          b(Ne, {
            size: "sm",
            variant: "secondary",
            onClick: F[0] || (F[0] = (te) => Ae({ reopenPanel: !0 }))
          }, {
            default: h(() => [...F[9] || (F[9] = [
              $(" Exit ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      s("aside", fP, [
        s("div", mP, [
          c.value ? (a(), i("div", vP, " Loading workflow contract... ")) : v.value ? (a(), i("div", pP, f(v.value), 1)) : w.value ? (a(), i(j, { key: 2 }, [
            s("section", gP, [
              s("button", {
                class: "contract-meta-toggle",
                type: "button",
                onClick: F[1] || (F[1] = (te) => g.value = !g.value)
              }, [
                F[10] || (F[10] = s("span", null, "Contract Details", -1)),
                s("span", hP, f(g.value ? "▾" : "▸"), 1)
              ]),
              g.value ? (a(), i("div", yP, [
                b(Ot, { label: "Default Contract" }, {
                  default: h(() => [
                    b(wt, {
                      "model-value": w.value.default_contract,
                      "full-width": "",
                      "onUpdate:modelValue": Pe
                    }, null, 8, ["model-value"])
                  ]),
                  _: 1
                }),
                b(Ot, { label: "Display Name" }, {
                  default: h(() => [
                    b(wt, {
                      modelValue: E.value.display_name,
                      "onUpdate:modelValue": F[2] || (F[2] = (te) => E.value.display_name = te),
                      "full-width": ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                b(Ot, { label: "Description" }, {
                  default: h(() => [
                    b(Co, {
                      modelValue: E.value.description,
                      "onUpdate:modelValue": F[3] || (F[3] = (te) => E.value.description = te),
                      rows: 2,
                      placeholder: "Optional description for this contract"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])) : y("", !0)
            ]),
            s("section", wP, [
              s("span", _P, f(K.value), 1),
              s("span", kP, f(E.value.inputs.length) + " input" + f(E.value.inputs.length === 1 ? "" : "s"), 1),
              s("span", bP, f(E.value.outputs.length) + " output" + f(E.value.outputs.length === 1 ? "" : "s"), 1)
            ]),
            s("section", $P, [
              s("div", CP, [
                b(no, { variant: "section" }, {
                  default: h(() => [...F[11] || (F[11] = [
                    $("INPUTS", -1)
                  ])]),
                  _: 1
                })
              ]),
              E.value.inputs.length ? y("", !0) : (a(), i("div", xP, " No inputs configured. ")),
              (a(!0), i(j, null, he(E.value.inputs, (te, De) => (a(), i("div", {
                key: `input-${De}`,
                class: Fe(["item-card", { selected: x.value === De }])
              }, [
                s("div", {
                  class: "item-card-header item-card-header-toggle",
                  onClick: (Oe) => ee(De)
                }, [
                  s("div", null, [
                    s("div", IP, f(te.name || `Input ${De + 1}`), 1),
                    s("div", EP, [
                      $(" Node " + f(te.node_id || "?"), 1),
                      te.widget_idx !== void 0 ? (a(), i(j, { key: 0 }, [
                        $(" · Widget " + f(te.widget_idx), 1)
                      ], 64)) : y("", !0)
                    ]),
                    s("div", TP, [
                      s("span", null, f(te.type || "string"), 1),
                      s("span", null, f(te.required ? "required" : "optional"), 1),
                      te.default !== void 0 && te.default !== "" ? (a(), i("span", MP, "default " + f(Re(te.default)), 1)) : y("", !0)
                    ])
                  ]),
                  b(Ne, {
                    size: "sm",
                    variant: "ghost",
                    onClick: mt((Oe) => Ee(De), ["stop"])
                  }, {
                    default: h(() => [...F[12] || (F[12] = [
                      $(" Remove ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ], 8, SP),
                x.value === De ? (a(), i("div", {
                  key: 0,
                  class: "item-grid",
                  onClick: F[4] || (F[4] = mt(() => {
                  }, ["stop"]))
                }, [
                  b(Ot, { label: "Name" }, {
                    default: h(() => [
                      b(wt, {
                        modelValue: te.name,
                        "onUpdate:modelValue": (Oe) => te.name = Oe,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  b(Ot, { label: "Display Name" }, {
                    default: h(() => [
                      b(wt, {
                        modelValue: te.display_name,
                        "onUpdate:modelValue": (Oe) => te.display_name = Oe,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  b(Ot, { label: "Type" }, {
                    default: h(() => [
                      b(Ln, {
                        "model-value": te.type,
                        options: D,
                        "full-width": "",
                        "onUpdate:modelValue": (Oe) => te.type = Oe
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  b(Ot, { label: "Required" }, {
                    default: h(() => [
                      b(Ln, {
                        "model-value": te.required ? "true" : "false",
                        options: N,
                        "full-width": "",
                        "onUpdate:modelValue": (Oe) => te.required = Oe === "true"
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  b(Ot, {
                    class: Fe({ "item-grid-full": te.type === "string" || te.type === "enum" }),
                    label: "Default"
                  }, {
                    default: h(() => [
                      te.type === "string" ? (a(), L(Co, {
                        key: 0,
                        "model-value": se(te.default),
                        rows: 3,
                        placeholder: "Default string value",
                        "onUpdate:modelValue": (Oe) => te.default = Oe
                      }, null, 8, ["model-value", "onUpdate:modelValue"])) : (a(), L(wt, {
                        key: 1,
                        modelValue: te.default,
                        "onUpdate:modelValue": (Oe) => te.default = Oe,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]))
                    ]),
                    _: 2
                  }, 1032, ["class"]),
                  fe(te.type) ? (a(), L(Ot, {
                    key: 0,
                    label: "Min"
                  }, {
                    default: h(() => [
                      b(wt, {
                        "model-value": we(te.min),
                        "full-width": "",
                        "onUpdate:modelValue": (Oe) => te.min = X(Oe)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : y("", !0),
                  fe(te.type) ? (a(), L(Ot, {
                    key: 1,
                    label: "Max"
                  }, {
                    default: h(() => [
                      b(wt, {
                        "model-value": we(te.max),
                        "full-width": "",
                        "onUpdate:modelValue": (Oe) => te.max = X(Oe)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : y("", !0),
                  ue(te.type) ? (a(), L(Ot, {
                    key: 2,
                    class: "item-grid-full",
                    label: "Enum Values"
                  }, {
                    default: h(() => [
                      b(Co, {
                        "model-value": G(te.enum_values),
                        rows: 4,
                        placeholder: "One or more values, separated by commas or new lines",
                        "onUpdate:modelValue": (Oe) => te.enum_values = Y(Oe)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : y("", !0)
                ])) : y("", !0)
              ], 2))), 128))
            ]),
            s("section", PP, [
              s("div", RP, [
                b(no, { variant: "section" }, {
                  default: h(() => [...F[13] || (F[13] = [
                    $("OUTPUTS", -1)
                  ])]),
                  _: 1
                })
              ]),
              E.value.outputs.length ? y("", !0) : (a(), i("div", LP, " No outputs configured. ")),
              (a(!0), i(j, null, he(E.value.outputs, (te, De) => (a(), i("div", {
                key: `output-${De}`,
                class: Fe(["item-card", { selected: C.value === De }])
              }, [
                s("div", {
                  class: "item-card-header item-card-header-toggle",
                  onClick: (Oe) => q(De)
                }, [
                  s("div", null, [
                    s("div", DP, f(te.name || `Output ${De + 1}`), 1),
                    s("div", OP, [
                      $(" Node " + f(te.node_id || "?"), 1),
                      te.selector ? (a(), i(j, { key: 0 }, [
                        $(" · " + f(te.selector), 1)
                      ], 64)) : y("", !0)
                    ]),
                    s("div", UP, [
                      s("span", null, f(te.type || "file"), 1)
                    ])
                  ]),
                  b(Ne, {
                    size: "sm",
                    variant: "ghost",
                    onClick: mt((Oe) => H(De), ["stop"])
                  }, {
                    default: h(() => [...F[14] || (F[14] = [
                      $(" Remove ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ], 8, NP),
                C.value === De ? (a(), i("div", {
                  key: 0,
                  class: "item-grid",
                  onClick: F[5] || (F[5] = mt(() => {
                  }, ["stop"]))
                }, [
                  b(Ot, { label: "Name" }, {
                    default: h(() => [
                      b(wt, {
                        modelValue: te.name,
                        "onUpdate:modelValue": (Oe) => te.name = Oe,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  b(Ot, { label: "Display Name" }, {
                    default: h(() => [
                      b(wt, {
                        modelValue: te.display_name,
                        "onUpdate:modelValue": (Oe) => te.display_name = Oe,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  b(Ot, { label: "Type" }, {
                    default: h(() => [
                      b(Ln, {
                        "model-value": te.type,
                        options: D,
                        "full-width": "",
                        "onUpdate:modelValue": (Oe) => te.type = Oe
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)
                ])) : y("", !0)
              ], 2))), 128))
            ])
          ], 64)) : y("", !0)
        ]),
        s("div", AP, [
          s("div", zP, [
            b(Ne, {
              variant: "secondary",
              onClick: F[6] || (F[6] = (te) => Ae({ reopenPanel: !0 }))
            }, {
              default: h(() => [...F[15] || (F[15] = [
                $(" Cancel ", -1)
              ])]),
              _: 1
            })
          ]),
          s("div", FP, [
            b(Ne, {
              variant: "danger",
              disabled: !O.value,
              loading: m.value,
              onClick: ke
            }, {
              default: h(() => [...F[16] || (F[16] = [
                $(" Delete ", -1)
              ])]),
              _: 1
            }, 8, ["disabled", "loading"]),
            b(Ne, {
              variant: "primary",
              loading: d.value,
              onClick: He
            }, {
              default: h(() => [...F[17] || (F[17] = [
                $(" Save ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ])
        ])
      ]),
      _.value ? (a(), L(El, {
        key: 0,
        title: "Delete Workflow Contract",
        message: `Delete the contract for ${u.value}?`,
        warning: "This removes the saved input/output contract for this workflow. The workflow itself will not be deleted.",
        "confirm-label": "Delete",
        "cancel-label": "Cancel",
        destructive: !0,
        onConfirm: Ye,
        onCancel: F[7] || (F[7] = (te) => _.value = !1)
      }, null, 8, ["message"])) : y("", !0)
    ])) : y("", !0);
  }
}), BP = /* @__PURE__ */ Se(VP, [["__scopeId", "data-v-13515b27"]]), WP = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:transparent}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}[data-comfygit-theme=comfy] .base-tabs{border-bottom-color:var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .base-tabs__tab{border-radius:var(--cg-radius-sm) var(--cg-radius-sm) 0 0}[data-comfygit-theme=comfy] .base-tabs__tab:hover:not(.disabled){background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .base-tabs__tab.active{background:var(--cg-color-accent-muted)}', GP = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .base-tabs{border-bottom-color:var(--cg-color-border)}[data-comfygit-theme=phosphor] .base-tabs__tab{text-shadow:none}[data-comfygit-theme=phosphor] .base-tabs__tab:before{content:""}[data-comfygit-theme=phosphor] .base-tabs__tab.active:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .base-tabs__tab.active{text-shadow:0 0 8px var(--cg-color-accent);border-bottom-color:var(--cg-color-accent);box-shadow:0 2px 8px var(--cg-shadow-accent)}[data-comfygit-theme=phosphor] .base-tabs__tab:hover:not(.disabled):not(.active){color:var(--cg-color-accent);text-shadow:0 0 4px var(--cg-color-accent)}', jP = {
  comfy: WP,
  phosphor: GP
}, Pl = "comfy", _c = "comfygit-theme";
let Zs = null, kc = Pl;
function HP() {
  try {
    const e = localStorage.getItem(_c);
    if (e && (e === "comfy" || e === "phosphor"))
      return e;
  } catch {
  }
  return Pl;
}
function bc(e = Pl) {
  Zs && Zs.remove(), Zs = document.createElement("style"), Zs.id = "comfygit-theme-styles", Zs.setAttribute("data-theme", e), Zs.textContent = jP[e], document.head.appendChild(Zs), document.body.setAttribute("data-comfygit-theme", e), kc = e;
  try {
    localStorage.setItem(_c, e);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${e}`);
}
function qP() {
  return kc;
}
function KP(e) {
  bc(e);
}
function JP(e) {
  var r;
  const { ui_id: t, state: o } = e || {}, n = (o == null ? void 0 : o.history) || {};
  if (!t)
    return null;
  const l = n[t];
  return l && l.result === "error" && ((r = l.status) == null ? void 0 : r.status_str) === "error" ? (l.status.messages || [])[0] || "Unknown error" : null;
}
const Ti = "ComfyGit.DevAutoReload", $c = "ComfyGit.DevAutoReload.PanelOpen";
function QP() {
  const e = new URLSearchParams(window.location.search).get("comfygitDevReload");
  return e === null ? null : e;
}
function ra() {
  const e = QP();
  if (e !== null) {
    const t = e !== "0" && e !== "false";
    try {
      localStorage.setItem(Ti, t ? "true" : "false");
    } catch {
    }
    return t;
  }
  try {
    return localStorage.getItem(Ti) === "true";
  } catch {
    return !1;
  }
}
function Cc(e) {
  if (ra())
    try {
      sessionStorage.setItem($c, e ? "true" : "false");
    } catch {
    }
}
function YP() {
  if (!ra()) return !1;
  try {
    return sessionStorage.getItem($c) === "true";
  } catch {
    return !1;
  }
}
async function Mi(e) {
  const t = await fetch(e, { cache: "no-store", method: "HEAD" });
  if (t.ok) {
    const c = t.headers, d = c.get("etag"), m = c.get("last-modified"), v = c.get("content-length");
    if (d || m)
      return [d, m, v].filter(Boolean).join(":");
  }
  const o = await fetch(e, { cache: "no-store", method: "GET" });
  if (!o.ok) return null;
  const n = o.headers, l = [
    n.get("etag"),
    n.get("last-modified"),
    n.get("content-length")
  ].filter(Boolean).join(":"), r = await o.text();
  let u = 0;
  for (let c = 0; c < r.length; c += 1)
    u = (u << 5) - u + r.charCodeAt(c) | 0;
  return `${l}:${r.length}:${u}`;
}
async function XP(e) {
  if (!ra()) return;
  const t = e.map((n) => ({
    ...n,
    signature: null
  }));
  for (const n of t)
    try {
      n.signature = await Mi(n.url);
    } catch (l) {
      console.warn(`[ComfyGit] Dev auto-reload could not read ${n.name}:`, l);
    }
  console.log("[ComfyGit] Dev auto-reload enabled");
  let o = !1;
  window.setInterval(async () => {
    if (!o)
      for (const n of t)
        try {
          const l = await Mi(n.url);
          if (n.signature && l && l !== n.signature) {
            o = !0, console.log(`[ComfyGit] ${n.name} changed, reloading page...`), window.setTimeout(() => window.location.reload(), 500);
            return;
          }
          l && (n.signature = l);
        } catch {
        }
  }, 1e3);
}
const ZP = "./comfygit-panel.css", eR = "./comfygit-panel.js", xc = new URL(ZP, import.meta.url).href, tR = new URL(eR, import.meta.url).href, Rl = document.createElement("link");
Rl.rel = "stylesheet";
Rl.href = xc;
document.head.appendChild(Rl);
const sR = HP();
bc(sR);
ra() || (sessionStorage.removeItem("ComfyGit.LastView"), sessionStorage.removeItem("ComfyGit.LastSection"));
window.ComfyGit = {
  setTheme: (e) => {
    console.log(`[ComfyGit] Switching to theme: ${e}`), KP(e);
  },
  getTheme: () => {
    const e = qP();
    return console.log(`[ComfyGit] Current theme: ${e}`), e;
  }
};
let $s = null, Zo = null, Xt = null, en = null, Ao = null, Pi = null, zo = null, Ri = null, Fo = null, Li = null;
const xo = k(null);
let un = "no_workspace", Sc = !1;
async function Nn() {
  var e;
  if (!((e = Zt) != null && e.api)) return null;
  try {
    const t = await Zt.api.fetchApi("/v2/comfygit/status");
    t.ok && (xo.value = await t.json());
  } catch {
  }
}
async function ol() {
  var e;
  if ((e = Zt) != null && e.api)
    try {
      const t = await Zt.api.fetchApi("/v2/setup/status");
      if (t.ok) {
        const o = await t.json();
        un = o.state, Sc = o.has_comfyui_manager ?? !1;
      }
    } catch {
    }
}
function nl() {
  var t;
  if (un === "managed" || !Sc) return;
  const e = document.querySelectorAll("button.comfyui-button");
  for (const o of e)
    if (((t = o.textContent) == null ? void 0 : t.trim()) === "Manager" && !o.querySelector("svg, i, img")) {
      o.style.display = "none", console.log("[ComfyGit] Hiding built-in Manager button (ComfyUI-Manager present)");
      return;
    }
}
function oR() {
  if (!xo.value) return !1;
  const e = xo.value.workflows;
  return e.new.length > 0 || e.modified.length > 0 || e.deleted.length > 0 || xo.value.has_changes;
}
function Vo(e) {
  Go(), Cc(!0), $s = document.createElement("div"), $s.className = "comfygit-panel-overlay";
  const t = document.createElement("div");
  t.className = "comfygit-panel-container", $s.appendChild(t), $s.addEventListener("click", (n) => {
    n.target === $s && Go();
  });
  const o = (n) => {
    n.key === "Escape" && (Go(), document.removeEventListener("keydown", o));
  };
  document.addEventListener("keydown", o), Zo = vn({
    render: () => Po(JT, {
      initialView: e,
      onClose: Go,
      onStatusUpdate: async (n) => {
        xo.value = n, tn(), await ol(), al(), nl();
      }
    })
  }), Zo.mount(t), document.body.appendChild($s);
}
function Go() {
  Cc(!1), Zo && (Zo.unmount(), Zo = null), $s && ($s.remove(), $s = null);
}
function Ni(e) {
  Bo(), Xt = document.createElement("div"), Xt.className = "comfygit-commit-popover-container";
  const t = e.getBoundingClientRect();
  Xt.style.position = "fixed", Xt.style.top = `${t.bottom + 8}px`, Xt.style.right = `${window.innerWidth - t.right}px`, Xt.style.zIndex = "10001";
  const o = (l) => {
    Xt && !Xt.contains(l.target) && l.target !== e && (Bo(), document.removeEventListener("mousedown", o));
  };
  setTimeout(() => document.addEventListener("mousedown", o), 0);
  const n = (l) => {
    l.key === "Escape" && (Bo(), document.removeEventListener("keydown", n));
  };
  document.addEventListener("keydown", n), en = vn({
    render: () => Po(gc, {
      status: xo.value,
      onClose: Bo,
      onCommitted: (l) => {
        Bo(), nR(l.success, l.message), Nn().then(tn);
      }
    })
  }), en.mount(Xt), document.body.appendChild(Xt);
}
function Bo() {
  en && (en.unmount(), en = null), Xt && (Xt.remove(), Xt = null);
}
function nR(e, t) {
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
  const r = document.createElement("span");
  r.textContent = t, o.appendChild(r), document.body.appendChild(o), setTimeout(() => {
    o.style.opacity = "0", o.style.transition = "opacity 0.2s ease", setTimeout(() => o.remove(), 200);
  }, 3e3);
}
function aR() {
  Ao || (Ao = document.createElement("div"), Ao.className = "comfygit-download-queue-root", Pi = vn({
    render: () => Po(WM)
  }), Pi.mount(Ao), document.body.appendChild(Ao), console.log("[ComfyGit] Model download queue mounted"));
}
function lR() {
  zo || (zo = document.createElement("div"), zo.className = "comfygit-missing-resources-root", Ri = vn({
    render: () => Po(nP)
  }), Ri.mount(zo), document.body.appendChild(zo), console.log("[ComfyGit] Missing resources popup mounted"));
}
function iR() {
  Fo || (Fo = document.createElement("div"), Fo.className = "comfygit-io-mapping-root", Li = vn({
    render: () => Po(BP, {
      comfyApp: Zt
    })
  }), Li.mount(Fo), document.body.appendChild(Fo), console.log("[ComfyGit] Workflow I/O mapping overlay mounted"));
}
let Kt = null;
function tn() {
  if (!Kt) return;
  const e = Kt.querySelector(".commit-indicator");
  e && (e.style.display = oR() ? "block" : "none");
}
function al() {
  if (!Kt) return;
  const e = un !== "managed";
  Kt.disabled = e, Kt.title = e ? "Commit disabled - switch to a managed environment first" : "Quick Commit";
}
const Ic = document.createElement("style");
Ic.textContent = `
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
document.head.appendChild(Ic);
Zt.registerExtension({
  name: "Comfy.ComfyGitPanel",
  // Commands that can be triggered by keybindings or menu items
  commands: [
    {
      id: "ComfyGit.OpenPanel",
      label: "Open ComfyGit Panel",
      icon: "pi pi-folder-open",
      function: () => Vo()
    },
    {
      id: "ComfyGit.QuickCommit",
      label: "Quick Commit",
      icon: "pi pi-check",
      function: () => {
        Kt && !Kt.disabled && Ni(Kt);
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
  async beforeConfigureGraph(e, t) {
    if (un === "managed")
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
    if (un !== "managed") return;
    const t = window.__comfygit_pending_workflow;
    t && (delete window.__comfygit_pending_workflow, window.dispatchEvent(new CustomEvent("comfygit:workflow-loaded", {
      detail: { workflow: t }
    })));
  },
  async setup() {
    var l, r;
    const e = document.createElement("div");
    e.className = "comfygit-btn-group";
    const t = document.createElement("button");
    t.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", t.textContent = "ComfyGit", t.title = "ComfyGit Control Panel", t.onclick = () => Vo(), Kt = document.createElement("button"), Kt.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", Kt.innerHTML = 'Commit <span class="commit-indicator"></span>', Kt.title = "Quick Commit", Kt.onclick = () => Ni(Kt), e.appendChild(t), e.appendChild(Kt), (r = (l = Zt.menu) == null ? void 0 : l.settingsGroup) != null && r.element && (Zt.menu.settingsGroup.element.before(e), console.log("[ComfyGit] Control Panel buttons added to toolbar")), aR(), lR(), iR(), window.addEventListener("comfygit:open-panel", ((u) => {
      var d;
      const c = (d = u.detail) == null ? void 0 : d.initialView;
      Vo(c);
    })), window.addEventListener("comfygit:close-panel", (() => {
      Go();
    }));
    const { loadPendingDownloads: o } = Ro();
    o(), await Promise.all([Nn(), ol()]), tn(), al(), nl(), YP() && setTimeout(() => {
      $s || Vo();
    }, 100), XP([
      { name: "panel script", url: tR },
      { name: "panel stylesheet", url: xc }
    ]), setTimeout(nl, 100), setInterval(async () => {
      await Promise.all([Nn(), ol()]), tn(), al();
    }, 3e4);
    const n = Zt.api;
    if (n) {
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
        const g = document.createElement("button");
        g.textContent = "Refresh", g.style.cssText = `
          background: var(--comfy-menu-bg);
          color: var(--fg-color);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          padding: 6px 16px;
          cursor: pointer;
          font-size: 13px;
          font-weight: 500;
        `, g.onmouseover = () => g.style.background = "var(--comfy-input-bg)", g.onmouseout = () => g.style.background = "var(--comfy-menu-bg)", g.onclick = () => u(), p.appendChild(g);
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
        `, _.onmouseover = () => _.style.opacity = "1", _.onmouseout = () => _.style.opacity = "0.6", _.onclick = () => p.remove(), p.appendChild(_), document.body.appendChild(p), console.log("[ComfyGit] Refresh notification displayed");
      }, d = function(p) {
        const w = document.getElementById("comfygit-error-toast");
        w && w.remove();
        const g = document.createElement("div");
        g.id = "comfygit-error-toast", g.style.cssText = `
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
        _.textContent = "⚠️", _.style.fontSize = "20px", g.appendChild(_);
        const x = document.createElement("div");
        x.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 4px;";
        const C = document.createElement("div");
        C.textContent = "Node installation failed", C.style.cssText = "font-weight: 600; color: #e53935;", x.appendChild(C);
        const S = document.createElement("div");
        S.textContent = "Dependency conflict detected", S.style.cssText = "font-size: 12px; opacity: 0.8;", x.appendChild(S), g.appendChild(x);
        const T = document.createElement("button");
        T.textContent = "View Logs", T.style.cssText = `
          background: #e53935;
          color: #fff;
          border: none;
          border-radius: 4px;
          padding: 6px 12px;
          cursor: pointer;
          font-size: 12px;
          font-weight: 500;
          white-space: nowrap;
        `, T.onmouseover = () => T.style.background = "#c62828", T.onmouseout = () => T.style.background = "#e53935", T.onclick = () => {
          g.remove(), Vo("debug-env");
        }, g.appendChild(T);
        const M = document.createElement("button");
        M.textContent = "×", M.style.cssText = `
          background: transparent;
          border: none;
          color: #fff;
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, M.onmouseover = () => M.style.opacity = "1", M.onmouseout = () => M.style.opacity = "0.6", M.onclick = () => g.remove(), g.appendChild(M), document.body.appendChild(g), console.log("[ComfyGit] Manager error toast displayed:", p), setTimeout(() => {
          document.getElementById("comfygit-error-toast") && g.remove();
        }, 1e4);
      }, m = function(p) {
        const w = document.getElementById("comfygit-restart-toast");
        w && w.remove();
        const g = document.createElement("div");
        g.id = "comfygit-restart-toast", g.style.cssText = `
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
        _.textContent = "✅", _.style.fontSize = "20px", g.appendChild(_);
        const x = document.createElement("div");
        x.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 2px;";
        const C = document.createElement("div");
        C.textContent = "To apply changes, please restart ComfyUI", C.style.cssText = "font-weight: 500; color: #fff;", x.appendChild(C);
        const S = document.createElement("div");
        S.textContent = `${p} node package${p > 1 ? "s" : ""} ready to install`, S.style.cssText = "font-size: 12px; opacity: 0.7;", x.appendChild(S), g.appendChild(x);
        const T = document.createElement("button");
        T.textContent = "Apply Changes", T.style.cssText = `
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
        `, T.onmouseover = () => T.style.background = "rgba(255,255,255,0.1)", T.onmouseout = () => T.style.background = "transparent", T.onclick = async () => {
          T.disabled = !0, T.textContent = "Restarting...", T.style.opacity = "0.7", C.textContent = "Restarting...", S.textContent = "Applying changes, please wait...";
          try {
            const P = async () => {
              console.log("[ComfyGit] Reconnected after restart, refreshing node definitions...");
              try {
                Zt.refreshComboInNodes && (await Zt.refreshComboInNodes(), console.log("[ComfyGit] Node definitions refreshed successfully")), _.textContent = "✅", C.textContent = "Nodes Installed", C.style.color = "#4caf50", S.textContent = `${p} package${p > 1 ? "s" : ""} installed successfully!`, g.style.borderColor = "#4caf50", T.style.display = "none", setTimeout(() => {
                  g.remove();
                }, 3e3);
              } catch (D) {
                console.error("[ComfyGit] Failed to refresh nodes:", D), _.textContent = "✅", C.textContent = "Restart Complete", C.style.color = "#4caf50", S.textContent = "Refresh the page to load new nodes.", g.style.borderColor = "#4caf50", T.style.display = "none";
              }
            };
            n.addEventListener("reconnected", P, { once: !0 }), await fetch("/v2/manager/reboot");
          } catch (P) {
            console.error("[ComfyGit] Failed to restart:", P), C.textContent = "Restart Failed", C.style.color = "#e53935", S.textContent = "Could not restart server. Try again.", g.style.borderColor = "#e53935", T.textContent = "Try Again", T.disabled = !1, T.style.opacity = "1";
          }
        }, g.appendChild(T);
        const M = document.createElement("button");
        M.textContent = "×", M.title = "Dismiss (restart later)", M.style.cssText = `
          background: transparent;
          border: none;
          color: #fff;
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, M.onmouseover = () => M.style.opacity = "1", M.onmouseout = () => M.style.opacity = "0.6", M.onclick = () => g.remove(), g.appendChild(M), document.body.appendChild(g), console.log(`[ComfyGit] Restart required notification displayed (${p} packages installed)`);
      };
      n.addEventListener("comfygit:workflow-changed", async (p) => {
        const { change_type: w, workflow_name: g } = p.detail;
        console.log(`[ComfyGit] Workflow ${w}: ${g}`), await Nn(), tn();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let v = !1;
      n.addEventListener("status", async (p) => {
        const w = p.detail != null;
        w && !v && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") !== "false" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), u()) : c()), v = w;
      }), console.log("[ComfyGit] Refresh notification system initialized"), n.addEventListener("cm-task-completed", (p) => {
        const w = JP(p.detail);
        w && d(w);
      }), console.log("[ComfyGit] Manager error notification system initialized"), window.addEventListener("comfygit:nodes-installed", (p) => {
        const w = p, { count: g = 1 } = w.detail || {};
        m(g);
      }), console.log("[ComfyGit] Restart notification system initialized");
    }
  }
});
