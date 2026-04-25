var Ic = Object.defineProperty;
var Ec = (e, t, o) => t in e ? Ic(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var yn = (e, t, o) => Ec(e, typeof t != "symbol" ? t + "" : t, o);
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
}, Ni = () => !1, Kn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), il = (e) => e.startsWith("onUpdate:"), Mt = Object.assign, rl = (e, t) => {
  const o = e.indexOf(t);
  o > -1 && e.splice(o, 1);
}, Tc = Object.prototype.hasOwnProperty, ft = (e, t) => Tc.call(e, t), Xe = Array.isArray, wo = (e) => dn(e) === "[object Map]", Mo = (e) => dn(e) === "[object Set]", Rl = (e) => dn(e) === "[object Date]", et = (e) => typeof e == "function", $t = (e) => typeof e == "string", ms = (e) => typeof e == "symbol", gt = (e) => e !== null && typeof e == "object", Di = (e) => (gt(e) || et(e)) && et(e.then) && et(e.catch), Li = Object.prototype.toString, dn = (e) => Li.call(e), Mc = (e) => dn(e).slice(8, -1), Oi = (e) => dn(e) === "[object Object]", cl = (e) => $t(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Ho = /* @__PURE__ */ ll(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Jn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((o) => t[o] || (t[o] = e(o)));
}, Pc = /-\w/g, is = Jn(
  (e) => e.replace(Pc, (t) => t.slice(1).toUpperCase())
), Rc = /\B([A-Z])/g, Ks = Jn(
  (e) => e.replace(Rc, "-$1").toLowerCase()
), Qn = Jn((e) => e.charAt(0).toUpperCase() + e.slice(1)), Ta = Jn(
  (e) => e ? `on${Qn(e)}` : ""
), js = (e, t) => !Object.is(e, t), Sn = (e, ...t) => {
  for (let o = 0; o < e.length; o++)
    e[o](...t);
}, Ai = (e, t, o, n = !1) => {
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
let Nl;
const Xn = () => Nl || (Nl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function At(e) {
  if (Xe(e)) {
    const t = {};
    for (let o = 0; o < e.length; o++) {
      const n = e[o], l = $t(n) ? Ac(n) : At(n);
      if (l)
        for (const r in l)
          t[r] = l[r];
    }
    return t;
  } else if ($t(e) || gt(e))
    return e;
}
const Dc = /;(?![^(]*\))/g, Lc = /:([^]+)/, Oc = /\/\*[^]*?\*\//g;
function Ac(e) {
  const t = {};
  return e.replace(Oc, "").split(Dc).forEach((o) => {
    if (o) {
      const n = o.split(Lc);
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
const Uc = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", zc = /* @__PURE__ */ ll(Uc);
function Ui(e) {
  return !!e || e === "";
}
function Fc(e, t) {
  if (e.length !== t.length) return !1;
  let o = !0;
  for (let n = 0; o && n < e.length; n++)
    o = ao(e[n], t[n]);
  return o;
}
function ao(e, t) {
  if (e === t) return !0;
  let o = Rl(e), n = Rl(t);
  if (o || n)
    return o && n ? e.getTime() === t.getTime() : !1;
  if (o = ms(e), n = ms(t), o || n)
    return e === t;
  if (o = Xe(e), n = Xe(t), o || n)
    return o && n ? Fc(e, t) : !1;
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
const zi = (e) => !!(e && e.__v_isRef === !0), f = (e) => $t(e) ? e : e == null ? "" : Xe(e) || gt(e) && (e.toString === Li || !et(e.toString)) ? zi(e) ? f(e.value) : JSON.stringify(e, Fi, 2) : String(e), Fi = (e, t) => zi(t) ? Fi(e, t.value) : wo(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (o, [n, l], r) => (o[Ma(n, r) + " =>"] = l, o),
    {}
  )
} : Mo(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((o) => Ma(o))
} : ms(t) ? Ma(t) : gt(t) && !Xe(t) && !Oi(t) ? String(t) : t, Ma = (e, t = "") => {
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
class Vc {
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
function Bc() {
  return Qt;
}
let yt;
const Pa = /* @__PURE__ */ new WeakSet();
class Vi {
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
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Wi(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Dl(this), Gi(this);
    const t = yt, o = ds;
    yt = this, ds = !0;
    try {
      return this.fn();
    } finally {
      ji(this), yt = t, ds = o, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        ml(t);
      this.deps = this.depsTail = void 0, Dl(this), this.onStop && this.onStop(), this.flags &= -2;
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
let Bi = 0, qo, Ko;
function Wi(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Ko, Ko = e;
    return;
  }
  e.next = qo, qo = e;
}
function dl() {
  Bi++;
}
function fl() {
  if (--Bi > 0)
    return;
  if (Ko) {
    let t = Ko;
    for (Ko = void 0; t; ) {
      const o = t.next;
      t.next = void 0, t.flags &= -9, t = o;
    }
  }
  let e;
  for (; qo; ) {
    let t = qo;
    for (qo = void 0; t; ) {
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
function Gi(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function ji(e) {
  let t, o = e.depsTail, n = o;
  for (; n; ) {
    const l = n.prevDep;
    n.version === -1 ? (n === o && (o = l), ml(n), Wc(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = l;
  }
  e.deps = t, e.depsTail = o;
}
function Wa(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Hi(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Hi(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === sn) || (e.globalVersion = sn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Wa(e))))
    return;
  e.flags |= 2;
  const t = e.dep, o = yt, n = ds;
  yt = e, ds = !0;
  try {
    Gi(e);
    const l = e.fn(e._value);
    (t.version === 0 || js(l, e._value)) && (e.flags |= 128, e._value = l, t.version++);
  } catch (l) {
    throw t.version++, l;
  } finally {
    yt = o, ds = n, ji(e), e.flags &= -3;
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
function Wc(e) {
  const { prevDep: t, nextDep: o } = e;
  t && (t.nextDep = o, e.prevDep = void 0), o && (o.prevDep = t, e.nextDep = void 0);
}
let ds = !0;
const qi = [];
function Ls() {
  qi.push(ds), ds = !1;
}
function Os() {
  const e = qi.pop();
  ds = e === void 0 ? !0 : e;
}
function Dl(e) {
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
class Gc {
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
      o = this.activeLink = new Gc(yt, this), yt.deps ? (o.prevDep = yt.depsTail, yt.depsTail.nextDep = o, yt.depsTail = o) : yt.deps = yt.depsTail = o, Ki(o);
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
function Ki(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        Ki(n);
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
      u.forEach((g, w) => {
        (w === "length" || w === on || !ms(w) && w >= v) && c(g);
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
  return t === e ? t : (Ft(t, "iterate", on), as(e) ? t : t.map(vs));
}
function Zn(e) {
  return Ft(e = ct(e), "iterate", on), e;
}
function Bs(e, t) {
  return As(e) ? oo(e) ? Io(vs(t)) : Io(t) : vs(t);
}
const jc = {
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
    return Na(this, "includes", e);
  },
  indexOf(...e) {
    return Na(this, "indexOf", e);
  },
  join(e) {
    return fo(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Na(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Ts(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Lo(this, "pop");
  },
  push(...e) {
    return Lo(this, "push", e);
  },
  reduce(e, ...t) {
    return Ll(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Ll(this, "reduceRight", e, t);
  },
  shift() {
    return Lo(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Ts(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Lo(this, "splice", e);
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
    return Lo(this, "unshift", e);
  },
  values() {
    return Ra(this, "values", (e) => Bs(this, e));
  }
};
function Ra(e, t, o) {
  const n = Zn(e), l = n[t]();
  return n !== e && !as(e) && (l._next = l.next, l.next = () => {
    const r = l._next();
    return r.done || (r.value = o(r.value)), r;
  }), l;
}
const Hc = Array.prototype;
function Ts(e, t, o, n, l, r) {
  const u = Zn(e), c = u !== e && !as(e), d = u[t];
  if (d !== Hc[t]) {
    const g = d.apply(e, r);
    return c ? vs(g) : g;
  }
  let m = o;
  u !== e && (c ? m = function(g, w) {
    return o.call(this, Bs(e, g), w, e);
  } : o.length > 2 && (m = function(g, w) {
    return o.call(this, g, w, e);
  }));
  const v = d.call(u, m, n);
  return c && l ? l(v) : v;
}
function Ll(e, t, o, n) {
  const l = Zn(e);
  let r = o;
  return l !== e && (as(e) ? o.length > 3 && (r = function(u, c, d) {
    return o.call(this, u, c, d, e);
  }) : r = function(u, c, d) {
    return o.call(this, u, Bs(e, c), d, e);
  }), l[t](r, ...n);
}
function Na(e, t, o) {
  const n = ct(e);
  Ft(n, "iterate", on);
  const l = n[t](...o);
  return (l === -1 || l === !1) && hl(o[0]) ? (o[0] = ct(o[0]), n[t](...o)) : l;
}
function Lo(e, t, o = []) {
  Ls(), dl();
  const n = ct(e)[t].apply(e, o);
  return fl(), Os(), n;
}
const qc = /* @__PURE__ */ ll("__proto__,__v_isRef,__isVue"), Ji = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ms)
);
function Kc(e) {
  ms(e) || (e = String(e));
  const t = ct(this);
  return Ft(t, "has", e), t.hasOwnProperty(e);
}
class Qi {
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
      return n === (l ? r ? nu : er : r ? Zi : Xi).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const u = Xe(t);
    if (!l) {
      let d;
      if (u && (d = jc[o]))
        return d;
      if (o === "hasOwnProperty")
        return Kc;
    }
    const c = Reflect.get(
      t,
      o,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Gt(t) ? t : n
    );
    if ((ms(o) ? Ji.has(o) : qc(o)) || (l || Ft(t, "get", o), r))
      return c;
    if (Gt(c)) {
      const d = u && cl(o) ? c : c.value;
      return l && gt(d) ? Ln(d) : d;
    }
    return gt(c) ? l ? Ln(c) : ro(c) : c;
  }
}
class Yi extends Qi {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, o, n, l) {
    let r = t[o];
    const u = Xe(t) && cl(o);
    if (!this._isShallow) {
      const m = As(r);
      if (!as(n) && !As(n) && (r = ct(r), n = ct(n)), !u && Gt(r) && !Gt(n))
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
    return (!ms(o) || !Ji.has(o)) && Ft(t, "has", o), n;
  }
  ownKeys(t) {
    return Ft(
      t,
      "iterate",
      Xe(t) ? "length" : so
    ), Reflect.ownKeys(t);
  }
}
class Jc extends Qi {
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
const Qc = /* @__PURE__ */ new Yi(), Yc = /* @__PURE__ */ new Jc(), Xc = /* @__PURE__ */ new Yi(!0);
const Ha = (e) => e, wn = (e) => Reflect.getPrototypeOf(e);
function Zc(e, t, o) {
  return function(...n) {
    const l = this.__v_raw, r = ct(l), u = wo(r), c = e === "entries" || e === Symbol.iterator && u, d = e === "keys" && u, m = l[e](...n), v = o ? Ha : t ? Io : vs;
    return !t && Ft(
      r,
      "iterate",
      d ? ja : so
    ), {
      // iterator protocol
      next() {
        const { value: g, done: w } = m.next();
        return w ? { value: g, done: w } : {
          value: c ? [v(g[0]), v(g[1])] : v(g),
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
function eu(e, t) {
  const o = {
    get(l) {
      const r = this.__v_raw, u = ct(r), c = ct(l);
      e || (js(l, c) && Ft(u, "get", l), Ft(u, "get", c));
      const { has: d } = wn(u), m = t ? Ha : e ? Io : vs;
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
      const u = this, c = u.__v_raw, d = ct(c), m = t ? Ha : e ? Io : vs;
      return !e && Ft(d, "iterate", so), c.forEach((v, g) => l.call(r, m(v), m(g), u));
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
        !t && !as(l) && !As(l) && (l = ct(l));
        const r = ct(this);
        return wn(r).has.call(r, l) || (r.add(l), Rs(r, "add", l, l)), this;
      },
      set(l, r) {
        !t && !as(r) && !As(r) && (r = ct(r));
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
    o[l] = Zc(l, e, t);
  }), o;
}
function pl(e, t) {
  const o = eu(e, t);
  return (n, l, r) => l === "__v_isReactive" ? !e : l === "__v_isReadonly" ? e : l === "__v_raw" ? n : Reflect.get(
    ft(o, l) && l in n ? o : n,
    l,
    r
  );
}
const tu = {
  get: /* @__PURE__ */ pl(!1, !1)
}, su = {
  get: /* @__PURE__ */ pl(!1, !0)
}, ou = {
  get: /* @__PURE__ */ pl(!0, !1)
};
const Xi = /* @__PURE__ */ new WeakMap(), Zi = /* @__PURE__ */ new WeakMap(), er = /* @__PURE__ */ new WeakMap(), nu = /* @__PURE__ */ new WeakMap();
function au(e) {
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
function lu(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : au(Mc(e));
}
function ro(e) {
  return As(e) ? e : gl(
    e,
    !1,
    Qc,
    tu,
    Xi
  );
}
function iu(e) {
  return gl(
    e,
    !1,
    Xc,
    su,
    Zi
  );
}
function Ln(e) {
  return gl(
    e,
    !0,
    Yc,
    ou,
    er
  );
}
function gl(e, t, o, n, l) {
  if (!gt(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = lu(e);
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
  return As(e) ? oo(e.__v_raw) : !!(e && e.__v_isReactive);
}
function As(e) {
  return !!(e && e.__v_isReadonly);
}
function as(e) {
  return !!(e && e.__v_isShallow);
}
function hl(e) {
  return e ? !!e.__v_raw : !1;
}
function ct(e) {
  const t = e && e.__v_raw;
  return t ? ct(t) : e;
}
function ru(e) {
  return !ft(e, "__v_skip") && Object.isExtensible(e) && Ai(e, "__v_skip", !0), e;
}
const vs = (e) => gt(e) ? ro(e) : e, Io = (e) => gt(e) ? Ln(e) : e;
function Gt(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function k(e) {
  return cu(e, !1);
}
function cu(e, t) {
  return Gt(e) ? e : new uu(e, t);
}
class uu {
  constructor(t, o) {
    this.dep = new vl(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = o ? t : ct(t), this._value = o ? t : vs(t), this.__v_isShallow = o;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const o = this._rawValue, n = this.__v_isShallow || as(t) || As(t);
    t = n ? t : ct(t), js(t, o) && (this._rawValue = t, this._value = n ? t : vs(t), this.dep.trigger());
  }
}
function tt(e) {
  return Gt(e) ? e.value : e;
}
const du = {
  get: (e, t, o) => t === "__v_raw" ? e : tt(Reflect.get(e, t, o)),
  set: (e, t, o, n) => {
    const l = e[t];
    return Gt(l) && !Gt(o) ? (l.value = o, !0) : Reflect.set(e, t, o, n);
  }
};
function tr(e) {
  return oo(e) ? e : new Proxy(e, du);
}
class fu {
  constructor(t, o, n) {
    this.fn = t, this.setter = o, this._value = void 0, this.dep = new vl(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = sn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !o, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    yt !== this)
      return Wi(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Hi(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function mu(e, t, o = !1) {
  let n, l;
  return et(e) ? n = e : (n = e.get, l = e.set), new fu(n, l, o);
}
const kn = {}, On = /* @__PURE__ */ new WeakMap();
let eo;
function vu(e, t = !1, o = eo) {
  if (o) {
    let n = On.get(o);
    n || On.set(o, n = []), n.push(e);
  }
}
function pu(e, t, o = ht) {
  const { immediate: n, deep: l, once: r, scheduler: u, augmentJob: c, call: d } = o, m = (P) => l ? P : as(P) || l === !1 || l === 0 ? Ns(P, 1) : Ns(P);
  let v, g, w, p, _ = !1, x = !1;
  if (Gt(e) ? (g = () => e.value, _ = as(e)) : oo(e) ? (g = () => m(e), _ = !0) : Xe(e) ? (x = !0, _ = e.some((P) => oo(P) || as(P)), g = () => e.map((P) => {
    if (Gt(P))
      return P.value;
    if (oo(P))
      return m(P);
    if (et(P))
      return d ? d(P, 2) : P();
  })) : et(e) ? t ? g = d ? () => d(e, 2) : e : g = () => {
    if (w) {
      Ls();
      try {
        w();
      } finally {
        Os();
      }
    }
    const P = eo;
    eo = v;
    try {
      return d ? d(e, 3, [p]) : e(p);
    } finally {
      eo = P;
    }
  } : g = Cs, t && l) {
    const P = g, A = l === !0 ? 1 / 0 : l;
    g = () => Ns(P(), A);
  }
  const C = Bc(), S = () => {
    v.stop(), C && C.active && rl(C.effects, v);
  };
  if (r && t) {
    const P = t;
    t = (...A) => {
      P(...A), S();
    };
  }
  let T = x ? new Array(e.length).fill(kn) : kn;
  const M = (P) => {
    if (!(!(v.flags & 1) || !v.dirty && !P))
      if (t) {
        const A = v.run();
        if (l || _ || (x ? A.some((B, j) => js(B, T[j])) : js(A, T))) {
          w && w();
          const B = eo;
          eo = v;
          try {
            const j = [
              A,
              // pass undefined as the old value when it's changed for the first time
              T === kn ? void 0 : x && T[0] === kn ? [] : T,
              p
            ];
            T = A, d ? d(t, 3, j) : (
              // @ts-expect-error
              t(...j)
            );
          } finally {
            eo = B;
          }
        }
      } else
        v.run();
  };
  return c && c(M), v = new Vi(g), v.scheduler = u ? () => u(M, !1) : M, p = (P) => vu(P, !1, v), w = v.onStop = () => {
    const P = On.get(v);
    if (P) {
      if (d)
        d(P, 4);
      else
        for (const A of P) A();
      On.delete(v);
    }
  }, t ? n ? M(!0) : T = v.run() : u ? u(M.bind(null, !0), !0) : v.run(), S.pause = v.pause.bind(v), S.resume = v.resume.bind(v), S.stop = S, S;
}
function Ns(e, t = 1 / 0, o) {
  if (t <= 0 || !gt(e) || e.__v_skip || (o = o || /* @__PURE__ */ new Map(), (o.get(e) || 0) >= t))
    return e;
  if (o.set(e, t), t--, Gt(e))
    Ns(e.value, t, o);
  else if (Xe(e))
    for (let n = 0; n < e.length; n++)
      Ns(e[n], t, o);
  else if (Mo(e) || wo(e))
    e.forEach((n) => {
      Ns(n, t, o);
    });
  else if (Oi(e)) {
    for (const n in e)
      Ns(e[n], t, o);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && Ns(e[n], t, o);
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
    return l && Di(l) && l.catch((r) => {
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
        for (let g = 0; g < v.length; g++)
          if (v[g](e, d, m) === !1)
            return;
      }
      c = c.parent;
    }
    if (r) {
      Ls(), fn(r, null, 10, [
        e,
        d,
        m
      ]), Os();
      return;
    }
  }
  gu(e, o, l, n, u);
}
function gu(e, t, o, n = !0, l = !1) {
  if (l)
    throw e;
  console.error(e);
}
const Jt = [];
let _s = -1;
const _o = [];
let Ws = null, po = 0;
const sr = /* @__PURE__ */ Promise.resolve();
let An = null;
function Pt(e) {
  const t = An || sr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function hu(e) {
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
    !(e.flags & 2) && t >= nn(o) ? Jt.push(e) : Jt.splice(hu(t), 0, e), e.flags |= 1, or();
  }
}
function or() {
  An || (An = sr.then(ar));
}
function yu(e) {
  Xe(e) ? _o.push(...e) : Ws && e.id === -1 ? Ws.splice(po + 1, 0, e) : e.flags & 1 || (_o.push(e), e.flags |= 1), or();
}
function Ol(e, t, o = _s + 1) {
  for (; o < Jt.length; o++) {
    const n = Jt[o];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      Jt.splice(o, 1), o--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function nr(e) {
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
function ar(e) {
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
    _s = -1, Jt.length = 0, nr(), An = null, (Jt.length || _o.length) && ar();
  }
}
let Ot = null, lr = null;
function Un(e) {
  const t = Ot;
  return Ot = e, lr = e && e.type.__scopeId || null, t;
}
function h(e, t = Ot, o) {
  if (!t || e._n)
    return e;
  const n = (...l) => {
    n._d && Vn(-1);
    const r = Un(t);
    let u;
    try {
      u = e(...l);
    } finally {
      Un(r), n._d && Vn(1);
    }
    return u;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function Et(e, t) {
  if (Ot === null)
    return e;
  const o = la(Ot), n = e.dirs || (e.dirs = []);
  for (let l = 0; l < t.length; l++) {
    let [r, u, c, d = ht] = t[l];
    r && (et(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && Ns(u), n.push({
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
    d && (Ls(), ps(d, o, 8, [
      e.el,
      c,
      e,
      t
    ]), Os());
  }
}
const ir = Symbol("_vte"), rr = (e) => e.__isTeleport, Jo = (e) => e && (e.disabled || e.disabled === ""), Al = (e) => e && (e.defer || e.defer === ""), Ul = (e) => typeof SVGElement < "u" && e instanceof SVGElement, zl = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, qa = (e, t) => {
  const o = e && e.to;
  return $t(o) ? t ? t(o) : null : o;
}, cr = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, o, n, l, r, u, c, d, m) {
    const {
      mc: v,
      pc: g,
      pbc: w,
      o: { insert: p, querySelector: _, createText: x, createComment: C }
    } = m, S = Jo(t.props);
    let { shapeFlag: T, children: M, dynamicChildren: P } = t;
    if (e == null) {
      const A = t.el = x(""), B = t.anchor = x("");
      p(A, o, n), p(B, o, n);
      const j = (V, ae) => {
        T & 16 && v(
          M,
          V,
          ae,
          l,
          r,
          u,
          c,
          d
        );
      }, E = () => {
        const V = t.target = qa(t.props, _), ae = ur(V, t, x, p);
        V && (u !== "svg" && Ul(V) ? u = "svg" : u !== "mathml" && zl(V) && (u = "mathml"), l && l.isCE && (l.ce._teleportTargets || (l.ce._teleportTargets = /* @__PURE__ */ new Set())).add(V), S || (j(V, ae), In(t, !1)));
      };
      S && (j(o, B), In(t, !0)), Al(t.props) ? (t.el.__isMounted = !1, qt(() => {
        E(), delete t.el.__isMounted;
      }, r)) : E();
    } else {
      if (Al(t.props) && e.el.__isMounted === !1) {
        qt(() => {
          cr.process(
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
      const A = t.anchor = e.anchor, B = t.target = e.target, j = t.targetAnchor = e.targetAnchor, E = Jo(e.props), V = E ? o : B, ae = E ? A : j;
      if (u === "svg" || Ul(B) ? u = "svg" : (u === "mathml" || zl(B)) && (u = "mathml"), P ? (w(
        e.dynamicChildren,
        P,
        V,
        l,
        r,
        u,
        c
      ), $l(e, t, !0)) : d || g(
        e,
        t,
        V,
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
          A,
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
        B,
        j,
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
      target: g,
      props: w
    } = e;
    if (g && (l(m), l(v)), r && l(d), u & 16) {
      const p = r || !Jo(w);
      for (let _ = 0; _ < c.length; _++) {
        const x = c[_];
        n(
          x,
          t,
          o,
          p,
          !!x.dynamicChildren
        );
      }
    }
  },
  move: bn,
  hydrate: wu
};
function bn(e, t, o, { o: { insert: n }, m: l }, r = 2) {
  r === 0 && n(e.targetAnchor, t, o);
  const { el: u, anchor: c, shapeFlag: d, children: m, props: v } = e, g = r === 2;
  if (g && n(u, t, o), (!g || Jo(v)) && d & 16)
    for (let w = 0; w < m.length; w++)
      l(
        m[w],
        t,
        o,
        2
      );
  g && n(c, t, o);
}
function wu(e, t, o, n, l, r, {
  o: { nextSibling: u, parentNode: c, querySelector: d, insert: m, createText: v }
}, g) {
  function w(x, C, S, T) {
    C.anchor = g(
      u(x),
      C,
      c(x),
      o,
      n,
      l,
      r
    ), C.targetStart = S, C.targetAnchor = T;
  }
  const p = t.target = qa(
    t.props,
    d
  ), _ = Jo(t.props);
  if (p) {
    const x = p._lpa || p.firstChild;
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
              t.targetAnchor = C, p._lpa = t.targetAnchor && u(t.targetAnchor);
              break;
            }
          }
          C = u(C);
        }
        t.targetAnchor || ur(p, t, v, m), g(
          x && u(x),
          t,
          p,
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
const Rt = cr;
function In(e, t) {
  const o = e.ctx;
  if (o && o.ut) {
    let n, l;
    for (t ? (n = e.el, l = e.anchor) : (n = e.targetStart, l = e.targetAnchor); n && n !== l; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", o.uid), n = n.nextSibling;
    o.ut();
  }
}
function ur(e, t, o, n) {
  const l = t.targetStart = o(""), r = t.targetAnchor = o("");
  return l[ir] = r, e && (n(l, e), n(r, e)), r;
}
const Ps = Symbol("_leaveCb"), $n = Symbol("_enterCb");
function dr() {
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
const os = [Function, Array], fr = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: os,
  onEnter: os,
  onAfterEnter: os,
  onEnterCancelled: os,
  // leave
  onBeforeLeave: os,
  onLeave: os,
  onAfterLeave: os,
  onLeaveCancelled: os,
  // appear
  onBeforeAppear: os,
  onAppear: os,
  onAfterAppear: os,
  onAppearCancelled: os
}, mr = (e) => {
  const t = e.subTree;
  return t.component ? mr(t.component) : t;
}, _u = {
  name: "BaseTransition",
  props: fr,
  setup(e, { slots: t }) {
    const o = xl(), n = dr();
    return () => {
      const l = t.default && wl(t.default(), !0);
      if (!l || !l.length)
        return;
      const r = vr(l), u = ct(e), { mode: c } = u;
      if (n.isLeaving)
        return Da(r);
      const d = Fl(r);
      if (!d)
        return Da(r);
      let m = an(
        d,
        u,
        n,
        o,
        // #11061, ensure enterHooks is fresh after clone
        (g) => m = g
      );
      d.type !== Bt && lo(d, m);
      let v = o.subTree && Fl(o.subTree);
      if (v && v.type !== Bt && !to(v, d) && mr(o).type !== Bt) {
        let g = an(
          v,
          u,
          n,
          o
        );
        if (lo(v, g), c === "out-in" && d.type !== Bt)
          return n.isLeaving = !0, g.afterLeave = () => {
            n.isLeaving = !1, o.job.flags & 8 || o.update(), delete g.afterLeave, v = void 0;
          }, Da(r);
        c === "in-out" && d.type !== Bt ? g.delayLeave = (w, p, _) => {
          const x = pr(
            n,
            v
          );
          x[String(v.key)] = v, w[Ps] = () => {
            p(), w[Ps] = void 0, delete m.delayedLeave, v = void 0;
          }, m.delayedLeave = () => {
            _(), delete m.delayedLeave, v = void 0;
          };
        } : v = void 0;
      } else v && (v = void 0);
      return r;
    };
  }
};
function vr(e) {
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
const ku = _u;
function pr(e, t) {
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
    onEnterCancelled: g,
    onBeforeLeave: w,
    onLeave: p,
    onAfterLeave: _,
    onLeaveCancelled: x,
    onBeforeAppear: C,
    onAppear: S,
    onAfterAppear: T,
    onAppearCancelled: M
  } = t, P = String(e.key), A = pr(o, e), B = (V, ae) => {
    V && ps(
      V,
      n,
      9,
      ae
    );
  }, j = (V, ae) => {
    const fe = ae[1];
    B(V, ae), Xe(V) ? V.every((ue) => ue.length <= 1) && fe() : V.length <= 1 && fe();
  }, E = {
    mode: u,
    persisted: c,
    beforeEnter(V) {
      let ae = d;
      if (!o.isMounted)
        if (r)
          ae = C || d;
        else
          return;
      V[Ps] && V[Ps](
        !0
        /* cancelled */
      );
      const fe = A[P];
      fe && to(e, fe) && fe.el[Ps] && fe.el[Ps](), B(ae, [V]);
    },
    enter(V) {
      let ae = m, fe = v, ue = g;
      if (!o.isMounted)
        if (r)
          ae = S || m, fe = T || v, ue = M || g;
        else
          return;
      let we = !1;
      const se = V[$n] = (F) => {
        we || (we = !0, F ? B(ue, [V]) : B(fe, [V]), E.delayedLeave && E.delayedLeave(), V[$n] = void 0);
      };
      ae ? j(ae, [V, se]) : se();
    },
    leave(V, ae) {
      const fe = String(e.key);
      if (V[$n] && V[$n](
        !0
        /* cancelled */
      ), o.isUnmounting)
        return ae();
      B(w, [V]);
      let ue = !1;
      const we = V[Ps] = (se) => {
        ue || (ue = !0, ae(), se ? B(x, [V]) : B(_, [V]), V[Ps] = void 0, A[fe] === e && delete A[fe]);
      };
      A[fe] = e, p ? j(p, [V, we]) : we();
    },
    clone(V) {
      const ae = an(
        V,
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
function Da(e) {
  if (ta(e))
    return e = Hs(e), e.children = null, e;
}
function Fl(e) {
  if (!ta(e))
    return rr(e.type) && e.children ? vr(e.children) : e;
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
    u.type === q ? (u.patchFlag & 128 && l++, n = n.concat(
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
function gr(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const zn = /* @__PURE__ */ new WeakMap();
function Qo(e, t, o, n, l = !1) {
  if (Xe(e)) {
    e.forEach(
      (_, x) => Qo(
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
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && Qo(e, t, o, n.component.subTree);
    return;
  }
  const r = n.shapeFlag & 4 ? la(n.component) : n.el, u = l ? null : r, { i: c, r: d } = e, m = t && t.r, v = c.refs === ht ? c.refs = {} : c.refs, g = c.setupState, w = ct(g), p = g === ht ? Ni : (_) => ft(w, _);
  if (m != null && m !== d) {
    if (Vl(t), $t(m))
      v[m] = null, p(m) && (g[m] = null);
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
          const S = _ ? p(d) ? g[d] : v[d] : d.value;
          if (l)
            Xe(S) && rl(S, r);
          else if (Xe(S))
            S.includes(r) || S.push(r);
          else if (_)
            v[d] = [r], p(d) && (g[d] = v[d]);
          else {
            const T = [r];
            d.value = T, e.k && (v[e.k] = T);
          }
        } else _ ? (v[d] = u, p(d) && (g[d] = u)) : x && (d.value = u, e.k && (v[e.k] = u));
      };
      if (u) {
        const S = () => {
          C(), zn.delete(e);
        };
        S.id = -1, zn.set(e, S), qt(S, o);
      } else
        Vl(e), C();
    }
  }
}
function Vl(e) {
  const t = zn.get(e);
  t && (t.flags |= 8, zn.delete(e));
}
Xn().requestIdleCallback;
Xn().cancelIdleCallback;
const ko = (e) => !!e.type.__asyncLoader, ta = (e) => e.type.__isKeepAlive;
function bu(e, t) {
  hr(e, "a", t);
}
function $u(e, t) {
  hr(e, "da", t);
}
function hr(e, t, o = Wt) {
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
      ta(l.parent.vnode) && Cu(n, t, o, l), l = l.parent;
  }
}
function Cu(e, t, o, n) {
  const l = sa(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  Po(() => {
    rl(n[t], l);
  }, o);
}
function sa(e, t, o = Wt, n = !1) {
  if (o) {
    const l = o[e] || (o[e] = []), r = t.__weh || (t.__weh = (...u) => {
      Ls();
      const c = mn(o), d = ps(t, o, e, u);
      return c(), Os(), d;
    });
    return n ? l.unshift(r) : l.push(r), r;
  }
}
const Us = (e) => (t, o = Wt) => {
  (!cn || e === "sp") && sa(e, (...n) => t(...n), o);
}, xu = Us("bm"), rt = Us("m"), Su = Us(
  "bu"
), yr = Us("u"), oa = Us(
  "bum"
), Po = Us("um"), Iu = Us(
  "sp"
), Eu = Us("rtg"), Tu = Us("rtc");
function Mu(e, t = Wt) {
  sa("ec", e, t);
}
const Pu = "components", wr = Symbol.for("v-ndc");
function _l(e) {
  return $t(e) ? Ru(Pu, e, !1) || e : e || wr;
}
function Ru(e, t, o = !0, n = !1) {
  const l = Ot || Wt;
  if (l) {
    const r = l.type;
    {
      const c = _d(
        r,
        !1
      );
      if (c && (c === t || c === is(t) || c === Qn(is(t))))
        return r;
    }
    const u = (
      // local registration
      // check instance[type] first which is resolved for options API
      Bl(l[e] || r[e], t) || // global registration
      Bl(l.appContext[e], t)
    );
    return !u && n ? r : u;
  }
}
function Bl(e, t) {
  return e && (e[t] || e[is(t)] || e[Qn(is(t))]);
}
function he(e, t, o, n) {
  let l;
  const r = o, u = Xe(e);
  if (u || $t(e)) {
    const c = u && oo(e);
    let d = !1, m = !1;
    c && (d = !as(e), m = As(e), e = Zn(e)), l = new Array(e.length);
    for (let v = 0, g = e.length; v < g; v++)
      l[v] = t(
        d ? m ? Io(vs(e[v])) : vs(e[v]) : e[v],
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
  if (Ot.ce || Ot.parent && ko(Ot.parent) && Ot.parent.ce) {
    const m = Object.keys(o).length > 0;
    return t !== "default" && (o.name = t), a(), R(
      q,
      null,
      [b("slot", o, n && n())],
      m ? -2 : 64
    );
  }
  let r = e[t];
  r && r._c && (r._d = !1), a();
  const u = r && _r(r(o)), c = o.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  u && u.key, d = R(
    q,
    {
      key: (c && !ms(c) ? c : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!u && n ? "_fb" : "")
    },
    u || (n ? n() : []),
    u && e._ === 1 ? 64 : -2
  );
  return r && r._c && (r._d = !0), d;
}
function _r(e) {
  return e.some((t) => rn(t) ? !(t.type === Bt || t.type === q && !_r(t.children)) : !0) ? e : null;
}
const Ka = (e) => e ? zr(e) ? la(e) : Ka(e.parent) : null, Yo = (
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
    $options: (e) => br(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      yl(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Pt.bind(e.proxy)),
    $watch: (e) => Gu.bind(e)
  })
), La = (e, t) => e !== ht && !e.__isScriptSetup && ft(e, t), Nu = {
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
        if (La(n, t))
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
    const m = Yo[t];
    let v, g;
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
      g = d.config.globalProperties, ft(g, t)
    )
      return g[t];
  },
  set({ _: e }, t, o) {
    const { data: n, setupState: l, ctx: r } = e;
    return La(l, t) ? (l[t] = o, !0) : n !== ht && ft(n, t) ? (n[t] = o, !0) : ft(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = o, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: o, ctx: n, appContext: l, props: r, type: u }
  }, c) {
    let d;
    return !!(o[c] || e !== ht && c[0] !== "$" && ft(e, c) || La(t, c) || ft(r, c) || ft(n, c) || ft(Yo, c) || ft(l.config.globalProperties, c) || (d = u.__cssModules) && d[c]);
  },
  defineProperty(e, t, o) {
    return o.get != null ? e._.accessCache[t] = 0 : ft(o, "value") && this.set(e, t, o.value, null), Reflect.defineProperty(e, t, o);
  }
};
function Wl(e) {
  return Xe(e) ? e.reduce(
    (t, o) => (t[o] = null, t),
    {}
  ) : e;
}
let Ja = !0;
function Du(e) {
  const t = br(e), o = e.proxy, n = e.ctx;
  Ja = !1, t.beforeCreate && Gl(t.beforeCreate, e, "bc");
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
    beforeMount: g,
    mounted: w,
    beforeUpdate: p,
    updated: _,
    activated: x,
    deactivated: C,
    beforeDestroy: S,
    beforeUnmount: T,
    destroyed: M,
    unmounted: P,
    render: A,
    renderTracked: B,
    renderTriggered: j,
    errorCaptured: E,
    serverPrefetch: V,
    // public API
    expose: ae,
    inheritAttrs: fe,
    // assets
    components: ue,
    directives: we,
    filters: se
  } = t;
  if (m && Lu(m, n, null), u)
    for (const Pe in u) {
      const te = u[Pe];
      et(te) && (n[Pe] = te.bind(o));
    }
  if (l) {
    const Pe = l.call(o, o);
    gt(Pe) && (e.data = ro(Pe));
  }
  if (Ja = !0, r)
    for (const Pe in r) {
      const te = r[Pe], ge = et(te) ? te.bind(o, o) : et(te.get) ? te.get.bind(o, o) : Cs, O = !et(te) && et(te.set) ? te.set.bind(o) : Cs, me = N({
        get: ge,
        set: O
      });
      Object.defineProperty(n, Pe, {
        enumerable: !0,
        configurable: !0,
        get: () => me.value,
        set: (Re) => me.value = Re
      });
    }
  if (c)
    for (const Pe in c)
      kr(c[Pe], n, o, Pe);
  if (d) {
    const Pe = et(d) ? d.call(o) : d;
    Reflect.ownKeys(Pe).forEach((te) => {
      Vu(te, Pe[te]);
    });
  }
  v && Gl(v, e, "c");
  function Q(Pe, te) {
    Xe(te) ? te.forEach((ge) => Pe(ge.bind(o))) : te && Pe(te.bind(o));
  }
  if (Q(xu, g), Q(rt, w), Q(Su, p), Q(yr, _), Q(bu, x), Q($u, C), Q(Mu, E), Q(Tu, B), Q(Eu, j), Q(oa, T), Q(Po, P), Q(Iu, V), Xe(ae))
    if (ae.length) {
      const Pe = e.exposed || (e.exposed = {});
      ae.forEach((te) => {
        Object.defineProperty(Pe, te, {
          get: () => o[te],
          set: (ge) => o[te] = ge,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  A && e.render === Cs && (e.render = A), fe != null && (e.inheritAttrs = fe), ue && (e.components = ue), we && (e.directives = we), V && gr(e);
}
function Lu(e, t, o = Cs) {
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
function Gl(e, t, o) {
  ps(
    Xe(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    o
  );
}
function kr(e, t, o, n) {
  let l = n.includes(".") ? xr(o, n) : () => o[n];
  if ($t(e)) {
    const r = t[e];
    et(r) && kt(l, r);
  } else if (et(e))
    kt(l, e.bind(o));
  else if (gt(e))
    if (Xe(e))
      e.forEach((r) => kr(r, t, o, n));
    else {
      const r = et(e.handler) ? e.handler.bind(o) : t[e.handler];
      et(r) && kt(l, r, e);
    }
}
function br(e) {
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
      const c = Ou[u] || o && o[u];
      e[u] = c ? c(e[u], t[u]) : t[u];
    }
  return e;
}
const Ou = {
  data: jl,
  props: Hl,
  emits: Hl,
  // objects
  methods: Go,
  computed: Go,
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
  components: Go,
  directives: Go,
  // watch
  watch: Uu,
  // provide / inject
  provide: jl,
  inject: Au
};
function jl(e, t) {
  return t ? e ? function() {
    return Mt(
      et(e) ? e.call(this, this) : e,
      et(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Au(e, t) {
  return Go(Qa(e), Qa(t));
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
function Go(e, t) {
  return e ? Mt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Hl(e, t) {
  return e ? Xe(e) && Xe(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Mt(
    /* @__PURE__ */ Object.create(null),
    Wl(e),
    Wl(t ?? {})
  ) : t;
}
function Uu(e, t) {
  if (!e) return t;
  if (!t) return e;
  const o = Mt(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    o[n] = Ht(e[n], t[n]);
  return o;
}
function $r() {
  return {
    app: null,
    config: {
      isNativeTag: Ni,
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
let zu = 0;
function Fu(e, t) {
  return function(n, l = null) {
    et(n) || (n = Mt({}, n)), l != null && !gt(l) && (l = null);
    const r = $r(), u = /* @__PURE__ */ new WeakSet(), c = [];
    let d = !1;
    const m = r.app = {
      _uid: zu++,
      _component: n,
      _props: l,
      _container: null,
      _context: r,
      _instance: null,
      version: bd,
      get config() {
        return r.config;
      },
      set config(v) {
      },
      use(v, ...g) {
        return u.has(v) || (v && et(v.install) ? (u.add(v), v.install(m, ...g)) : et(v) && (u.add(v), v(m, ...g))), m;
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
          const p = m._ceVNode || b(n, l);
          return p.appContext = r, w === !0 ? w = "svg" : w === !1 && (w = void 0), e(p, v, w), d = !0, m._container = v, v.__vue_app__ = m, la(p.component);
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
      provide(v, g) {
        return r.provides[v] = g, m;
      },
      runWithContext(v) {
        const g = bo;
        bo = m;
        try {
          return v();
        } finally {
          bo = g;
        }
      }
    };
    return m;
  };
}
let bo = null;
function Vu(e, t) {
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
const Bu = Symbol.for("v-scx"), Wu = () => En(Bu);
function kt(e, t, o) {
  return Cr(e, t, o);
}
function Cr(e, t, o = ht) {
  const { immediate: n, deep: l, flush: r, once: u } = o, c = Mt({}, o), d = t && n || !t && r !== "post";
  let m;
  if (cn) {
    if (r === "sync") {
      const p = Wu();
      m = p.__watcherHandles || (p.__watcherHandles = []);
    } else if (!d) {
      const p = () => {
      };
      return p.stop = Cs, p.resume = Cs, p.pause = Cs, p;
    }
  }
  const v = Wt;
  c.call = (p, _, x) => ps(p, v, _, x);
  let g = !1;
  r === "post" ? c.scheduler = (p) => {
    qt(p, v && v.suspense);
  } : r !== "sync" && (g = !0, c.scheduler = (p, _) => {
    _ ? p() : yl(p);
  }), c.augmentJob = (p) => {
    t && (p.flags |= 4), g && (p.flags |= 2, v && (p.id = v.uid, p.i = v));
  };
  const w = pu(e, t, c);
  return cn && (m ? m.push(w) : d && w()), w;
}
function Gu(e, t, o) {
  const n = this.proxy, l = $t(e) ? e.includes(".") ? xr(n, e) : () => n[e] : e.bind(n, n);
  let r;
  et(t) ? r = t : (r = t.handler, o = t);
  const u = mn(this), c = Cr(l, r.bind(n), o);
  return u(), c;
}
function xr(e, t) {
  const o = t.split(".");
  return () => {
    let n = e;
    for (let l = 0; l < o.length && n; l++)
      n = n[o[l]];
    return n;
  };
}
const ju = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${is(t)}Modifiers`] || e[`${Ks(t)}Modifiers`];
function Hu(e, t, ...o) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || ht;
  let l = o;
  const r = t.startsWith("update:"), u = r && ju(n, t.slice(7));
  u && (u.trim && (l = o.map((v) => $t(v) ? v.trim() : v)), u.number && (l = o.map(Yn)));
  let c, d = n[c = Ta(t)] || // also try camelCase event handler (#2249)
  n[c = Ta(is(t))];
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
const qu = /* @__PURE__ */ new WeakMap();
function Sr(e, t, o = !1) {
  const n = o ? qu : t.emitsCache, l = n.get(e);
  if (l !== void 0)
    return l;
  const r = e.emits;
  let u = {}, c = !1;
  if (!et(e)) {
    const d = (m) => {
      const v = Sr(m, t, !0);
      v && (c = !0, Mt(u, v));
    };
    !o && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  return !r && !c ? (gt(e) && n.set(e, null), null) : (Xe(r) ? r.forEach((d) => u[d] = null) : Mt(u, r), gt(e) && n.set(e, u), u);
}
function na(e, t) {
  return !e || !Kn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), ft(e, t[0].toLowerCase() + t.slice(1)) || ft(e, Ks(t)) || ft(e, t));
}
function ql(e) {
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
    props: g,
    data: w,
    setupState: p,
    ctx: _,
    inheritAttrs: x
  } = e, C = Un(e);
  let S, T;
  try {
    if (o.shapeFlag & 4) {
      const P = l || n, A = P;
      S = bs(
        m.call(
          A,
          P,
          v,
          g,
          p,
          w,
          _
        )
      ), T = c;
    } else {
      const P = t;
      S = bs(
        P.length > 1 ? P(
          g,
          { attrs: c, slots: u, emit: d }
        ) : P(
          g,
          null
        )
      ), T = t.props ? c : Ku(c);
    }
  } catch (P) {
    Xo.length = 0, ea(P, e, 1), S = b(Bt);
  }
  let M = S;
  if (T && x !== !1) {
    const P = Object.keys(T), { shapeFlag: A } = M;
    P.length && A & 7 && (r && P.some(il) && (T = Ju(
      T,
      r
    )), M = Hs(M, T, !1, !0));
  }
  return o.dirs && (M = Hs(M, null, !1, !0), M.dirs = M.dirs ? M.dirs.concat(o.dirs) : o.dirs), o.transition && lo(M, o.transition), S = M, Un(C), S;
}
const Ku = (e) => {
  let t;
  for (const o in e)
    (o === "class" || o === "style" || Kn(o)) && ((t || (t = {}))[o] = e[o]);
  return t;
}, Ju = (e, t) => {
  const o = {};
  for (const n in e)
    (!il(n) || !(n.slice(9) in t)) && (o[n] = e[n]);
  return o;
};
function Qu(e, t, o) {
  const { props: n, children: l, component: r } = e, { props: u, children: c, patchFlag: d } = t, m = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (o && d >= 0) {
    if (d & 1024)
      return !0;
    if (d & 16)
      return n ? Kl(n, u, m) : !!u;
    if (d & 8) {
      const v = t.dynamicProps;
      for (let g = 0; g < v.length; g++) {
        const w = v[g];
        if (u[w] !== n[w] && !na(m, w))
          return !0;
      }
    }
  } else
    return (l || c) && (!c || !c.$stable) ? !0 : n === u ? !1 : n ? u ? Kl(n, u, m) : !0 : !!u;
  return !1;
}
function Kl(e, t, o) {
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
function Yu({ vnode: e, parent: t }, o) {
  for (; t; ) {
    const n = t.subTree;
    if (n.suspense && n.suspense.activeBranch === e && (n.el = e.el), n === e)
      (e = t.vnode).el = o, t = t.parent;
    else
      break;
  }
}
const Ir = {}, Er = () => Object.create(Ir), Tr = (e) => Object.getPrototypeOf(e) === Ir;
function Xu(e, t, o, n = !1) {
  const l = {}, r = Er();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Mr(e, t, l, r);
  for (const u in e.propsOptions[0])
    u in l || (l[u] = void 0);
  o ? e.props = n ? l : iu(l) : e.type.props ? e.props = l : e.props = r, e.attrs = r;
}
function Zu(e, t, o, n) {
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
      for (let g = 0; g < v.length; g++) {
        let w = v[g];
        if (na(e.emitsOptions, w))
          continue;
        const p = t[w];
        if (d)
          if (ft(r, w))
            p !== r[w] && (r[w] = p, m = !0);
          else {
            const _ = is(w);
            l[_] = Ya(
              d,
              c,
              _,
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
    Mr(e, t, l, r) && (m = !0);
    let v;
    for (const g in c)
      (!t || // for camelCase
      !ft(t, g) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((v = Ks(g)) === g || !ft(t, v))) && (d ? o && // for camelCase
      (o[g] !== void 0 || // for kebab-case
      o[v] !== void 0) && (l[g] = Ya(
        d,
        c,
        g,
        void 0,
        e,
        !0
      )) : delete l[g]);
    if (r !== c)
      for (const g in r)
        (!t || !ft(t, g)) && (delete r[g], m = !0);
  }
  m && Rs(e.attrs, "set", "");
}
function Mr(e, t, o, n) {
  const [l, r] = e.propsOptions;
  let u = !1, c;
  if (t)
    for (let d in t) {
      if (Ho(d))
        continue;
      const m = t[d];
      let v;
      l && ft(l, v = is(d)) ? !r || !r.includes(v) ? o[v] = m : (c || (c = {}))[v] = m : na(e.emitsOptions, d) || (!(d in n) || m !== n[d]) && (n[d] = m, u = !0);
    }
  if (r) {
    const d = ct(o), m = c || ht;
    for (let v = 0; v < r.length; v++) {
      const g = r[v];
      o[g] = Ya(
        l,
        d,
        g,
        m[g],
        e,
        !ft(m, g)
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
const ed = /* @__PURE__ */ new WeakMap();
function Pr(e, t, o = !1) {
  const n = o ? ed : t.propsCache, l = n.get(e);
  if (l)
    return l;
  const r = e.props, u = {}, c = [];
  let d = !1;
  if (!et(e)) {
    const v = (g) => {
      d = !0;
      const [w, p] = Pr(g, t, !0);
      Mt(u, w), p && c.push(...p);
    };
    !o && t.mixins.length && t.mixins.forEach(v), e.extends && v(e.extends), e.mixins && e.mixins.forEach(v);
  }
  if (!r && !d)
    return gt(e) && n.set(e, yo), yo;
  if (Xe(r))
    for (let v = 0; v < r.length; v++) {
      const g = is(r[v]);
      Jl(g) && (u[g] = ht);
    }
  else if (r)
    for (const v in r) {
      const g = is(v);
      if (Jl(g)) {
        const w = r[v], p = u[g] = Xe(w) || et(w) ? { type: w } : Mt({}, w), _ = p.type;
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
        p[
          0
          /* shouldCast */
        ] = x, p[
          1
          /* shouldCastTrue */
        ] = C, (x || ft(p, "default")) && c.push(g);
      }
    }
  const m = [u, c];
  return gt(e) && n.set(e, m), m;
}
function Jl(e) {
  return e[0] !== "$" && !Ho(e);
}
const kl = (e) => e === "_" || e === "_ctx" || e === "$stable", bl = (e) => Xe(e) ? e.map(bs) : [bs(e)], td = (e, t, o) => {
  if (t._n)
    return t;
  const n = h((...l) => bl(t(...l)), o);
  return n._c = !1, n;
}, Rr = (e, t, o) => {
  const n = e._ctx;
  for (const l in e) {
    if (kl(l)) continue;
    const r = e[l];
    if (et(r))
      t[l] = td(l, r, n);
    else if (r != null) {
      const u = bl(r);
      t[l] = () => u;
    }
  }
}, Nr = (e, t) => {
  const o = bl(t);
  e.slots.default = () => o;
}, Dr = (e, t, o) => {
  for (const n in t)
    (o || !kl(n)) && (e[n] = t[n]);
}, sd = (e, t, o) => {
  const n = e.slots = Er();
  if (e.vnode.shapeFlag & 32) {
    const l = t._;
    l ? (Dr(n, t, o), o && Ai(n, "_", l, !0)) : Rr(t, n);
  } else t && Nr(e, t);
}, od = (e, t, o) => {
  const { vnode: n, slots: l } = e;
  let r = !0, u = ht;
  if (n.shapeFlag & 32) {
    const c = t._;
    c ? o && c === 1 ? r = !1 : Dr(l, t, o) : (r = !t.$stable, Rr(t, l)), u = t;
  } else t && (Nr(e, t), u = { default: 1 });
  if (r)
    for (const c in l)
      !kl(c) && u[c] == null && delete l[c];
}, qt = rd;
function nd(e) {
  return ad(e);
}
function ad(e, t) {
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
    parentNode: g,
    nextSibling: w,
    setScopeId: p = Cs,
    insertStaticContent: _
  } = e, x = (I, z, ie, Ce = null, _e = null, $e = null, Ae = void 0, ze = null, Ne = !!z.dynamicChildren) => {
    if (I === z)
      return;
    I && !to(I, z) && (Ce = K(I), Re(I, _e, $e, !0), I = null), z.patchFlag === -2 && (Ne = !1, z.dynamicChildren = null);
    const { type: Ie, ref: Ke, shapeFlag: Ve } = z;
    switch (Ie) {
      case aa:
        C(I, z, ie, Ce);
        break;
      case Bt:
        S(I, z, ie, Ce);
        break;
      case Aa:
        I == null && T(z, ie, Ce, Ae);
        break;
      case q:
        ue(
          I,
          z,
          ie,
          Ce,
          _e,
          $e,
          Ae,
          ze,
          Ne
        );
        break;
      default:
        Ve & 1 ? A(
          I,
          z,
          ie,
          Ce,
          _e,
          $e,
          Ae,
          ze,
          Ne
        ) : Ve & 6 ? we(
          I,
          z,
          ie,
          Ce,
          _e,
          $e,
          Ae,
          ze,
          Ne
        ) : (Ve & 64 || Ve & 128) && Ie.process(
          I,
          z,
          ie,
          Ce,
          _e,
          $e,
          Ae,
          ze,
          Ne,
          ce
        );
    }
    Ke != null && _e ? Qo(Ke, I && I.ref, $e, z || I, !z) : Ke == null && I && I.ref != null && Qo(I.ref, null, $e, I, !0);
  }, C = (I, z, ie, Ce) => {
    if (I == null)
      n(
        z.el = c(z.children),
        ie,
        Ce
      );
    else {
      const _e = z.el = I.el;
      z.children !== I.children && m(_e, z.children);
    }
  }, S = (I, z, ie, Ce) => {
    I == null ? n(
      z.el = d(z.children || ""),
      ie,
      Ce
    ) : z.el = I.el;
  }, T = (I, z, ie, Ce) => {
    [I.el, I.anchor] = _(
      I.children,
      z,
      ie,
      Ce,
      I.el,
      I.anchor
    );
  }, M = ({ el: I, anchor: z }, ie, Ce) => {
    let _e;
    for (; I && I !== z; )
      _e = w(I), n(I, ie, Ce), I = _e;
    n(z, ie, Ce);
  }, P = ({ el: I, anchor: z }) => {
    let ie;
    for (; I && I !== z; )
      ie = w(I), l(I), I = ie;
    l(z);
  }, A = (I, z, ie, Ce, _e, $e, Ae, ze, Ne) => {
    if (z.type === "svg" ? Ae = "svg" : z.type === "math" && (Ae = "mathml"), I == null)
      B(
        z,
        ie,
        Ce,
        _e,
        $e,
        Ae,
        ze,
        Ne
      );
    else {
      const Ie = I.el && I.el._isVueCE ? I.el : null;
      try {
        Ie && Ie._beginPatch(), V(
          I,
          z,
          _e,
          $e,
          Ae,
          ze,
          Ne
        );
      } finally {
        Ie && Ie._endPatch();
      }
    }
  }, B = (I, z, ie, Ce, _e, $e, Ae, ze) => {
    let Ne, Ie;
    const { props: Ke, shapeFlag: Ve, transition: ve, dirs: Y } = I;
    if (Ne = I.el = u(
      I.type,
      $e,
      Ke && Ke.is,
      Ke
    ), Ve & 8 ? v(Ne, I.children) : Ve & 16 && E(
      I.children,
      Ne,
      null,
      Ce,
      _e,
      Oa(I, $e),
      Ae,
      ze
    ), Y && Qs(I, null, Ce, "created"), j(Ne, I, I.scopeId, Ae, Ce), Ke) {
      for (const ke in Ke)
        ke !== "value" && !Ho(ke) && r(Ne, ke, null, Ke[ke], $e, Ce);
      "value" in Ke && r(Ne, "value", null, Ke.value, $e), (Ie = Ke.onVnodeBeforeMount) && hs(Ie, Ce, I);
    }
    Y && Qs(I, null, Ce, "beforeMount");
    const He = ld(_e, ve);
    He && ve.beforeEnter(Ne), n(Ne, z, ie), ((Ie = Ke && Ke.onVnodeMounted) || He || Y) && qt(() => {
      Ie && hs(Ie, Ce, I), He && ve.enter(Ne), Y && Qs(I, null, Ce, "mounted");
    }, _e);
  }, j = (I, z, ie, Ce, _e) => {
    if (ie && p(I, ie), Ce)
      for (let $e = 0; $e < Ce.length; $e++)
        p(I, Ce[$e]);
    if (_e) {
      let $e = _e.subTree;
      if (z === $e || Or($e.type) && ($e.ssContent === z || $e.ssFallback === z)) {
        const Ae = _e.vnode;
        j(
          I,
          Ae,
          Ae.scopeId,
          Ae.slotScopeIds,
          _e.parent
        );
      }
    }
  }, E = (I, z, ie, Ce, _e, $e, Ae, ze, Ne = 0) => {
    for (let Ie = Ne; Ie < I.length; Ie++) {
      const Ke = I[Ie] = ze ? Gs(I[Ie]) : bs(I[Ie]);
      x(
        null,
        Ke,
        z,
        ie,
        Ce,
        _e,
        $e,
        Ae,
        ze
      );
    }
  }, V = (I, z, ie, Ce, _e, $e, Ae) => {
    const ze = z.el = I.el;
    let { patchFlag: Ne, dynamicChildren: Ie, dirs: Ke } = z;
    Ne |= I.patchFlag & 16;
    const Ve = I.props || ht, ve = z.props || ht;
    let Y;
    if (ie && Ys(ie, !1), (Y = ve.onVnodeBeforeUpdate) && hs(Y, ie, z, I), Ke && Qs(z, I, ie, "beforeUpdate"), ie && Ys(ie, !0), (Ve.innerHTML && ve.innerHTML == null || Ve.textContent && ve.textContent == null) && v(ze, ""), Ie ? ae(
      I.dynamicChildren,
      Ie,
      ze,
      ie,
      Ce,
      Oa(z, _e),
      $e
    ) : Ae || te(
      I,
      z,
      ze,
      null,
      ie,
      Ce,
      Oa(z, _e),
      $e,
      !1
    ), Ne > 0) {
      if (Ne & 16)
        fe(ze, Ve, ve, ie, _e);
      else if (Ne & 2 && Ve.class !== ve.class && r(ze, "class", null, ve.class, _e), Ne & 4 && r(ze, "style", Ve.style, ve.style, _e), Ne & 8) {
        const He = z.dynamicProps;
        for (let ke = 0; ke < He.length; ke++) {
          const Ye = He[ke], ot = Ve[Ye], Ue = ve[Ye];
          (Ue !== ot || Ye === "value") && r(ze, Ye, ot, Ue, _e, ie);
        }
      }
      Ne & 1 && I.children !== z.children && v(ze, z.children);
    } else !Ae && Ie == null && fe(ze, Ve, ve, ie, _e);
    ((Y = ve.onVnodeUpdated) || Ke) && qt(() => {
      Y && hs(Y, ie, z, I), Ke && Qs(z, I, ie, "updated");
    }, Ce);
  }, ae = (I, z, ie, Ce, _e, $e, Ae) => {
    for (let ze = 0; ze < z.length; ze++) {
      const Ne = I[ze], Ie = z[ze], Ke = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        Ne.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (Ne.type === q || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !to(Ne, Ie) || // - In the case of a component, it could contain anything.
        Ne.shapeFlag & 198) ? g(Ne.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          ie
        )
      );
      x(
        Ne,
        Ie,
        Ke,
        null,
        Ce,
        _e,
        $e,
        Ae,
        !0
      );
    }
  }, fe = (I, z, ie, Ce, _e) => {
    if (z !== ie) {
      if (z !== ht)
        for (const $e in z)
          !Ho($e) && !($e in ie) && r(
            I,
            $e,
            z[$e],
            null,
            _e,
            Ce
          );
      for (const $e in ie) {
        if (Ho($e)) continue;
        const Ae = ie[$e], ze = z[$e];
        Ae !== ze && $e !== "value" && r(I, $e, ze, Ae, _e, Ce);
      }
      "value" in ie && r(I, "value", z.value, ie.value, _e);
    }
  }, ue = (I, z, ie, Ce, _e, $e, Ae, ze, Ne) => {
    const Ie = z.el = I ? I.el : c(""), Ke = z.anchor = I ? I.anchor : c("");
    let { patchFlag: Ve, dynamicChildren: ve, slotScopeIds: Y } = z;
    Y && (ze = ze ? ze.concat(Y) : Y), I == null ? (n(Ie, ie, Ce), n(Ke, ie, Ce), E(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      z.children || [],
      ie,
      Ke,
      _e,
      $e,
      Ae,
      ze,
      Ne
    )) : Ve > 0 && Ve & 64 && ve && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    I.dynamicChildren ? (ae(
      I.dynamicChildren,
      ve,
      ie,
      _e,
      $e,
      Ae,
      ze
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (z.key != null || _e && z === _e.subTree) && $l(
      I,
      z,
      !0
      /* shallow */
    )) : te(
      I,
      z,
      ie,
      Ke,
      _e,
      $e,
      Ae,
      ze,
      Ne
    );
  }, we = (I, z, ie, Ce, _e, $e, Ae, ze, Ne) => {
    z.slotScopeIds = ze, I == null ? z.shapeFlag & 512 ? _e.ctx.activate(
      z,
      ie,
      Ce,
      Ae,
      Ne
    ) : se(
      z,
      ie,
      Ce,
      _e,
      $e,
      Ae,
      Ne
    ) : F(I, z, Ne);
  }, se = (I, z, ie, Ce, _e, $e, Ae) => {
    const ze = I.component = pd(
      I,
      Ce,
      _e
    );
    if (ta(I) && (ze.ctx.renderer = ce), gd(ze, !1, Ae), ze.asyncDep) {
      if (_e && _e.registerDep(ze, Q, Ae), !I.el) {
        const Ne = ze.subTree = b(Bt);
        S(null, Ne, z, ie), I.placeholder = Ne.el;
      }
    } else
      Q(
        ze,
        I,
        z,
        ie,
        _e,
        $e,
        Ae
      );
  }, F = (I, z, ie) => {
    const Ce = z.component = I.component;
    if (Qu(I, z, ie))
      if (Ce.asyncDep && !Ce.asyncResolved) {
        Pe(Ce, z, ie);
        return;
      } else
        Ce.next = z, Ce.update();
    else
      z.el = I.el, Ce.vnode = z;
  }, Q = (I, z, ie, Ce, _e, $e, Ae) => {
    const ze = () => {
      if (I.isMounted) {
        let { next: Ve, bu: ve, u: Y, parent: He, vnode: ke } = I;
        {
          const oe = Lr(I);
          if (oe) {
            Ve && (Ve.el = ke.el, Pe(I, Ve, Ae)), oe.asyncDep.then(() => {
              I.isUnmounted || ze();
            });
            return;
          }
        }
        let Ye = Ve, ot;
        Ys(I, !1), Ve ? (Ve.el = ke.el, Pe(I, Ve, Ae)) : Ve = ke, ve && Sn(ve), (ot = Ve.props && Ve.props.onVnodeBeforeUpdate) && hs(ot, He, Ve, ke), Ys(I, !0);
        const Ue = ql(I), L = I.subTree;
        I.subTree = Ue, x(
          L,
          Ue,
          // parent may have changed if it's in a teleport
          g(L.el),
          // anchor may have changed if it's in a fragment
          K(L),
          I,
          _e,
          $e
        ), Ve.el = Ue.el, Ye === null && Yu(I, Ue.el), Y && qt(Y, _e), (ot = Ve.props && Ve.props.onVnodeUpdated) && qt(
          () => hs(ot, He, Ve, ke),
          _e
        );
      } else {
        let Ve;
        const { el: ve, props: Y } = z, { bm: He, m: ke, parent: Ye, root: ot, type: Ue } = I, L = ko(z);
        Ys(I, !1), He && Sn(He), !L && (Ve = Y && Y.onVnodeBeforeMount) && hs(Ve, Ye, z), Ys(I, !0);
        {
          ot.ce && // @ts-expect-error _def is private
          ot.ce._def.shadowRoot !== !1 && ot.ce._injectChildStyle(Ue);
          const oe = I.subTree = ql(I);
          x(
            null,
            oe,
            ie,
            Ce,
            I,
            _e,
            $e
          ), z.el = oe.el;
        }
        if (ke && qt(ke, _e), !L && (Ve = Y && Y.onVnodeMounted)) {
          const oe = z;
          qt(
            () => hs(Ve, Ye, oe),
            _e
          );
        }
        (z.shapeFlag & 256 || Ye && ko(Ye.vnode) && Ye.vnode.shapeFlag & 256) && I.a && qt(I.a, _e), I.isMounted = !0, z = ie = Ce = null;
      }
    };
    I.scope.on();
    const Ne = I.effect = new Vi(ze);
    I.scope.off();
    const Ie = I.update = Ne.run.bind(Ne), Ke = I.job = Ne.runIfDirty.bind(Ne);
    Ke.i = I, Ke.id = I.uid, Ne.scheduler = () => yl(Ke), Ys(I, !0), Ie();
  }, Pe = (I, z, ie) => {
    z.component = I;
    const Ce = I.vnode.props;
    I.vnode = z, I.next = null, Zu(I, z.props, Ce, ie), od(I, z.children, ie), Ls(), Ol(I), Os();
  }, te = (I, z, ie, Ce, _e, $e, Ae, ze, Ne = !1) => {
    const Ie = I && I.children, Ke = I ? I.shapeFlag : 0, Ve = z.children, { patchFlag: ve, shapeFlag: Y } = z;
    if (ve > 0) {
      if (ve & 128) {
        O(
          Ie,
          Ve,
          ie,
          Ce,
          _e,
          $e,
          Ae,
          ze,
          Ne
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
          Ae,
          ze,
          Ne
        );
        return;
      }
    }
    Y & 8 ? (Ke & 16 && Z(Ie, _e, $e), Ve !== Ie && v(ie, Ve)) : Ke & 16 ? Y & 16 ? O(
      Ie,
      Ve,
      ie,
      Ce,
      _e,
      $e,
      Ae,
      ze,
      Ne
    ) : Z(Ie, _e, $e, !0) : (Ke & 8 && v(ie, ""), Y & 16 && E(
      Ve,
      ie,
      Ce,
      _e,
      $e,
      Ae,
      ze,
      Ne
    ));
  }, ge = (I, z, ie, Ce, _e, $e, Ae, ze, Ne) => {
    I = I || yo, z = z || yo;
    const Ie = I.length, Ke = z.length, Ve = Math.min(Ie, Ke);
    let ve;
    for (ve = 0; ve < Ve; ve++) {
      const Y = z[ve] = Ne ? Gs(z[ve]) : bs(z[ve]);
      x(
        I[ve],
        Y,
        ie,
        null,
        _e,
        $e,
        Ae,
        ze,
        Ne
      );
    }
    Ie > Ke ? Z(
      I,
      _e,
      $e,
      !0,
      !1,
      Ve
    ) : E(
      z,
      ie,
      Ce,
      _e,
      $e,
      Ae,
      ze,
      Ne,
      Ve
    );
  }, O = (I, z, ie, Ce, _e, $e, Ae, ze, Ne) => {
    let Ie = 0;
    const Ke = z.length;
    let Ve = I.length - 1, ve = Ke - 1;
    for (; Ie <= Ve && Ie <= ve; ) {
      const Y = I[Ie], He = z[Ie] = Ne ? Gs(z[Ie]) : bs(z[Ie]);
      if (to(Y, He))
        x(
          Y,
          He,
          ie,
          null,
          _e,
          $e,
          Ae,
          ze,
          Ne
        );
      else
        break;
      Ie++;
    }
    for (; Ie <= Ve && Ie <= ve; ) {
      const Y = I[Ve], He = z[ve] = Ne ? Gs(z[ve]) : bs(z[ve]);
      if (to(Y, He))
        x(
          Y,
          He,
          ie,
          null,
          _e,
          $e,
          Ae,
          ze,
          Ne
        );
      else
        break;
      Ve--, ve--;
    }
    if (Ie > Ve) {
      if (Ie <= ve) {
        const Y = ve + 1, He = Y < Ke ? z[Y].el : Ce;
        for (; Ie <= ve; )
          x(
            null,
            z[Ie] = Ne ? Gs(z[Ie]) : bs(z[Ie]),
            ie,
            He,
            _e,
            $e,
            Ae,
            ze,
            Ne
          ), Ie++;
      }
    } else if (Ie > ve)
      for (; Ie <= Ve; )
        Re(I[Ie], _e, $e, !0), Ie++;
    else {
      const Y = Ie, He = Ie, ke = /* @__PURE__ */ new Map();
      for (Ie = He; Ie <= ve; Ie++) {
        const D = z[Ie] = Ne ? Gs(z[Ie]) : bs(z[Ie]);
        D.key != null && ke.set(D.key, Ie);
      }
      let Ye, ot = 0;
      const Ue = ve - He + 1;
      let L = !1, oe = 0;
      const pe = new Array(Ue);
      for (Ie = 0; Ie < Ue; Ie++) pe[Ie] = 0;
      for (Ie = Y; Ie <= Ve; Ie++) {
        const D = I[Ie];
        if (ot >= Ue) {
          Re(D, _e, $e, !0);
          continue;
        }
        let U;
        if (D.key != null)
          U = ke.get(D.key);
        else
          for (Ye = He; Ye <= ve; Ye++)
            if (pe[Ye - He] === 0 && to(D, z[Ye])) {
              U = Ye;
              break;
            }
        U === void 0 ? Re(D, _e, $e, !0) : (pe[U - He] = Ie + 1, U >= oe ? oe = U : L = !0, x(
          D,
          z[U],
          ie,
          null,
          _e,
          $e,
          Ae,
          ze,
          Ne
        ), ot++);
      }
      const Je = L ? id(pe) : yo;
      for (Ye = Je.length - 1, Ie = Ue - 1; Ie >= 0; Ie--) {
        const D = He + Ie, U = z[D], ee = z[D + 1], De = D + 1 < Ke ? (
          // #13559, fallback to el placeholder for unresolved async component
          ee.el || ee.placeholder
        ) : Ce;
        pe[Ie] === 0 ? x(
          null,
          U,
          ie,
          De,
          _e,
          $e,
          Ae,
          ze,
          Ne
        ) : L && (Ye < 0 || Ie !== Je[Ye] ? me(U, ie, De, 2) : Ye--);
      }
    }
  }, me = (I, z, ie, Ce, _e = null) => {
    const { el: $e, type: Ae, transition: ze, children: Ne, shapeFlag: Ie } = I;
    if (Ie & 6) {
      me(I.component.subTree, z, ie, Ce);
      return;
    }
    if (Ie & 128) {
      I.suspense.move(z, ie, Ce);
      return;
    }
    if (Ie & 64) {
      Ae.move(I, z, ie, ce);
      return;
    }
    if (Ae === q) {
      n($e, z, ie);
      for (let Ve = 0; Ve < Ne.length; Ve++)
        me(Ne[Ve], z, ie, Ce);
      n(I.anchor, z, ie);
      return;
    }
    if (Ae === Aa) {
      M(I, z, ie);
      return;
    }
    if (Ce !== 2 && Ie & 1 && ze)
      if (Ce === 0)
        ze.beforeEnter($e), n($e, z, ie), qt(() => ze.enter($e), _e);
      else {
        const { leave: Ve, delayLeave: ve, afterLeave: Y } = ze, He = () => {
          I.ctx.isUnmounted ? l($e) : n($e, z, ie);
        }, ke = () => {
          $e._isLeaving && $e[Ps](
            !0
            /* cancelled */
          ), Ve($e, () => {
            He(), Y && Y();
          });
        };
        ve ? ve($e, He, ke) : ke();
      }
    else
      n($e, z, ie);
  }, Re = (I, z, ie, Ce = !1, _e = !1) => {
    const {
      type: $e,
      props: Ae,
      ref: ze,
      children: Ne,
      dynamicChildren: Ie,
      shapeFlag: Ke,
      patchFlag: Ve,
      dirs: ve,
      cacheIndex: Y
    } = I;
    if (Ve === -2 && (_e = !1), ze != null && (Ls(), Qo(ze, null, ie, I, !0), Os()), Y != null && (z.renderCache[Y] = void 0), Ke & 256) {
      z.ctx.deactivate(I);
      return;
    }
    const He = Ke & 1 && ve, ke = !ko(I);
    let Ye;
    if (ke && (Ye = Ae && Ae.onVnodeBeforeUnmount) && hs(Ye, z, I), Ke & 6)
      H(I.component, ie, Ce);
    else {
      if (Ke & 128) {
        I.suspense.unmount(ie, Ce);
        return;
      }
      He && Qs(I, null, z, "beforeUnmount"), Ke & 64 ? I.type.remove(
        I,
        z,
        ie,
        ce,
        Ce
      ) : Ie && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !Ie.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      ($e !== q || Ve > 0 && Ve & 64) ? Z(
        Ie,
        z,
        ie,
        !1,
        !0
      ) : ($e === q && Ve & 384 || !_e && Ke & 16) && Z(Ne, z, ie), Ce && Ge(I);
    }
    (ke && (Ye = Ae && Ae.onVnodeUnmounted) || He) && qt(() => {
      Ye && hs(Ye, z, I), He && Qs(I, null, z, "unmounted");
    }, ie);
  }, Ge = (I) => {
    const { type: z, el: ie, anchor: Ce, transition: _e } = I;
    if (z === q) {
      Ee(ie, Ce);
      return;
    }
    if (z === Aa) {
      P(I);
      return;
    }
    const $e = () => {
      l(ie), _e && !_e.persisted && _e.afterLeave && _e.afterLeave();
    };
    if (I.shapeFlag & 1 && _e && !_e.persisted) {
      const { leave: Ae, delayLeave: ze } = _e, Ne = () => Ae(ie, $e);
      ze ? ze(I.el, $e, Ne) : Ne();
    } else
      $e();
  }, Ee = (I, z) => {
    let ie;
    for (; I !== z; )
      ie = w(I), l(I), I = ie;
    l(z);
  }, H = (I, z, ie) => {
    const { bum: Ce, scope: _e, job: $e, subTree: Ae, um: ze, m: Ne, a: Ie } = I;
    Ql(Ne), Ql(Ie), Ce && Sn(Ce), _e.stop(), $e && ($e.flags |= 8, Re(Ae, I, z, ie)), ze && qt(ze, z), qt(() => {
      I.isUnmounted = !0;
    }, z);
  }, Z = (I, z, ie, Ce = !1, _e = !1, $e = 0) => {
    for (let Ae = $e; Ae < I.length; Ae++)
      Re(I[Ae], z, ie, Ce, _e);
  }, K = (I) => {
    if (I.shapeFlag & 6)
      return K(I.component.subTree);
    if (I.shapeFlag & 128)
      return I.suspense.next();
    const z = w(I.anchor || I.el), ie = z && z[ir];
    return ie ? w(ie) : z;
  };
  let X = !1;
  const xe = (I, z, ie) => {
    I == null ? z._vnode && Re(z._vnode, null, null, !0) : x(
      z._vnode || null,
      I,
      z,
      null,
      null,
      null,
      ie
    ), z._vnode = I, X || (X = !0, Ol(), nr(), X = !1);
  }, ce = {
    p: x,
    um: Re,
    m: me,
    r: Ge,
    mt: se,
    mc: E,
    pc: te,
    pbc: ae,
    n: K,
    o: e
  };
  return {
    render: xe,
    hydrate: void 0,
    createApp: Fu(xe)
  };
}
function Oa({ type: e, props: t }, o) {
  return o === "svg" && e === "foreignObject" || o === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : o;
}
function Ys({ effect: e, job: t }, o) {
  o ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function ld(e, t) {
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
function id(e) {
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
function Lr(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Lr(t);
}
function Ql(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const Or = (e) => e.__isSuspense;
function rd(e, t) {
  t && t.pendingBranch ? Xe(e) ? t.effects.push(...e) : t.effects.push(e) : yu(e);
}
const q = Symbol.for("v-fgt"), aa = Symbol.for("v-txt"), Bt = Symbol.for("v-cmt"), Aa = Symbol.for("v-stc"), Xo = [];
let es = null;
function a(e = !1) {
  Xo.push(es = e ? null : []);
}
function cd() {
  Xo.pop(), es = Xo[Xo.length - 1] || null;
}
let ln = 1;
function Vn(e, t = !1) {
  ln += e, e < 0 && es && t && (es.hasOnce = !0);
}
function Ar(e) {
  return e.dynamicChildren = ln > 0 ? es || yo : null, cd(), ln > 0 && es && es.push(e), e;
}
function i(e, t, o, n, l, r) {
  return Ar(
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
function R(e, t, o, n, l) {
  return Ar(
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
const Ur = ({ key: e }) => e ?? null, Tn = ({
  ref: e,
  ref_key: t,
  ref_for: o
}) => (typeof e == "number" && (e = "" + e), e != null ? $t(e) || Gt(e) || et(e) ? { i: Ot, r: e, k: t, f: !!o } : e : null);
function s(e, t = null, o = null, n = 0, l = null, r = e === q ? 0 : 1, u = !1, c = !1) {
  const d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Ur(t),
    ref: t && Tn(t),
    scopeId: lr,
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
    ctx: Ot
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
const b = ud;
function ud(e, t = null, o = null, n = 0, l = null, r = !1) {
  if ((!e || e === wr) && (e = Bt), rn(e)) {
    const c = Hs(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return o && Cl(c, o), ln > 0 && !r && es && (c.shapeFlag & 6 ? es[es.indexOf(e)] = c : es.push(c)), c.patchFlag = -2, c;
  }
  if (kd(e) && (e = e.__vccOpts), t) {
    t = dd(t);
    let { class: c, style: d } = t;
    c && !$t(c) && (t.class = Fe(c)), gt(d) && (hl(d) && !Xe(d) && (d = Mt({}, d)), t.style = At(d));
  }
  const u = $t(e) ? 1 : Or(e) ? 128 : rr(e) ? 64 : gt(e) ? 4 : et(e) ? 2 : 0;
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
function dd(e) {
  return e ? hl(e) || Tr(e) ? Mt({}, e) : e : null;
}
function Hs(e, t, o = !1, n = !1) {
  const { props: l, ref: r, patchFlag: u, children: c, transition: d } = e, m = t ? fd(l || {}, t) : l, v = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: m,
    key: m && Ur(m),
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
    patchFlag: t && e.type !== q ? u === -1 ? 16 : u | 16 : u,
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
  return t ? (a(), R(Bt, null, e)) : b(Bt, null, e);
}
function bs(e) {
  return e == null || typeof e == "boolean" ? b(Bt) : Xe(e) ? b(
    q,
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
      !l && !Tr(t) ? t._ctx = Ot : l === 3 && Ot && (Ot.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else et(t) ? (t = { default: t, _ctx: Ot }, o = 32) : (t = String(t), n & 64 ? (o = 16, t = [$(t)]) : o = 8);
  e.children = t, e.shapeFlag |= o;
}
function fd(...e) {
  const t = {};
  for (let o = 0; o < e.length; o++) {
    const n = e[o];
    for (const l in n)
      if (l === "class")
        t.class !== n.class && (t.class = Fe([t.class, n.class]));
      else if (l === "style")
        t.style = At([t.style, n.style]);
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
const md = $r();
let vd = 0;
function pd(e, t, o) {
  const n = e.type, l = (t ? t.appContext : e.appContext) || md, r = {
    uid: vd++,
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
    scope: new Vc(
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
    propsOptions: Pr(n, l),
    emitsOptions: Sr(n, l),
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
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = Hu.bind(null, r), e.ce && e.ce(r), r;
}
let Wt = null;
const xl = () => Wt || Ot;
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
}, Yl = () => {
  Wt && Wt.scope.off(), Bn(null);
};
function zr(e) {
  return e.vnode.shapeFlag & 4;
}
let cn = !1;
function gd(e, t = !1, o = !1) {
  t && Xa(t);
  const { props: n, children: l } = e.vnode, r = zr(e);
  Xu(e, n, r, t), sd(e, l, o || t);
  const u = r ? hd(e, t) : void 0;
  return t && Xa(!1), u;
}
function hd(e, t) {
  const o = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Nu);
  const { setup: n } = o;
  if (n) {
    Ls();
    const l = e.setupContext = n.length > 1 ? wd(e) : null, r = mn(e), u = fn(
      n,
      e,
      0,
      [
        e.props,
        l
      ]
    ), c = Di(u);
    if (Os(), r(), (c || e.sp) && !ko(e) && gr(e), c) {
      if (u.then(Yl, Yl), t)
        return u.then((d) => {
          Xl(e, d);
        }).catch((d) => {
          ea(d, e, 0);
        });
      e.asyncDep = u;
    } else
      Xl(e, u);
  } else
    Fr(e);
}
function Xl(e, t, o) {
  et(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : gt(t) && (e.setupState = tr(t)), Fr(e);
}
function Fr(e, t, o) {
  const n = e.type;
  e.render || (e.render = n.render || Cs);
  {
    const l = mn(e);
    Ls();
    try {
      Du(e);
    } finally {
      Os(), l();
    }
  }
}
const yd = {
  get(e, t) {
    return Ft(e, "get", ""), e[t];
  }
};
function wd(e) {
  const t = (o) => {
    e.exposed = o || {};
  };
  return {
    attrs: new Proxy(e.attrs, yd),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function la(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(tr(ru(e.exposed)), {
    get(t, o) {
      if (o in t)
        return t[o];
      if (o in Yo)
        return Yo[o](e);
    },
    has(t, o) {
      return o in t || o in Yo;
    }
  })) : e.proxy;
}
function _d(e, t = !0) {
  return et(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function kd(e) {
  return et(e) && "__vccOpts" in e;
}
const N = (e, t) => mu(e, t, cn);
function Ro(e, t, o) {
  try {
    Vn(-1);
    const n = arguments.length;
    return n === 2 ? gt(t) && !Xe(t) ? rn(t) ? b(e, null, [t]) : b(e, t) : b(e, null, t) : (n > 3 ? o = Array.prototype.slice.call(arguments, 2) : n === 3 && rn(o) && (o = [o]), b(e, t, o));
  } finally {
    Vn(1);
  }
}
const bd = "3.5.25";
/**
* @vue/runtime-dom v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Za;
const Zl = typeof window < "u" && window.trustedTypes;
if (Zl)
  try {
    Za = /* @__PURE__ */ Zl.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Vr = Za ? (e) => Za.createHTML(e) : (e) => e, $d = "http://www.w3.org/2000/svg", Cd = "http://www.w3.org/1998/Math/MathML", Ms = typeof document < "u" ? document : null, ei = Ms && /* @__PURE__ */ Ms.createElement("template"), xd = {
  insert: (e, t, o) => {
    t.insertBefore(e, o || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, o, n) => {
    const l = t === "svg" ? Ms.createElementNS($d, e) : t === "mathml" ? Ms.createElementNS(Cd, e) : o ? Ms.createElement(e, { is: o }) : Ms.createElement(e);
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
      ei.innerHTML = Vr(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const c = ei.content;
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
}, Fs = "transition", Oo = "animation", Eo = Symbol("_vtc"), Br = {
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
}, Wr = /* @__PURE__ */ Mt(
  {},
  fr,
  Br
), Sd = (e) => (e.displayName = "Transition", e.props = Wr, e), Id = /* @__PURE__ */ Sd(
  (e, { slots: t }) => Ro(ku, Gr(e), t)
), Xs = (e, t = []) => {
  Xe(e) ? e.forEach((o) => o(...t)) : e && e(...t);
}, ti = (e) => e ? Xe(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Gr(e) {
  const t = {};
  for (const ue in e)
    ue in Br || (t[ue] = e[ue]);
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
    leaveFromClass: g = `${o}-leave-from`,
    leaveActiveClass: w = `${o}-leave-active`,
    leaveToClass: p = `${o}-leave-to`
  } = e, _ = Ed(l), x = _ && _[0], C = _ && _[1], {
    onBeforeEnter: S,
    onEnter: T,
    onEnterCancelled: M,
    onLeave: P,
    onLeaveCancelled: A,
    onBeforeAppear: B = S,
    onAppear: j = T,
    onAppearCancelled: E = M
  } = t, V = (ue, we, se, F) => {
    ue._enterCancelled = F, Vs(ue, we ? v : c), Vs(ue, we ? m : u), se && se();
  }, ae = (ue, we) => {
    ue._isLeaving = !1, Vs(ue, g), Vs(ue, p), Vs(ue, w), we && we();
  }, fe = (ue) => (we, se) => {
    const F = ue ? j : T, Q = () => V(we, ue, se);
    Xs(F, [we, Q]), si(() => {
      Vs(we, ue ? d : r), ws(we, ue ? v : c), ti(F) || oi(we, n, x, Q);
    });
  };
  return Mt(t, {
    onBeforeEnter(ue) {
      Xs(S, [ue]), ws(ue, r), ws(ue, u);
    },
    onBeforeAppear(ue) {
      Xs(B, [ue]), ws(ue, d), ws(ue, m);
    },
    onEnter: fe(!1),
    onAppear: fe(!0),
    onLeave(ue, we) {
      ue._isLeaving = !0;
      const se = () => ae(ue, we);
      ws(ue, g), ue._enterCancelled ? (ws(ue, w), el(ue)) : (el(ue), ws(ue, w)), si(() => {
        ue._isLeaving && (Vs(ue, g), ws(ue, p), ti(P) || oi(ue, n, C, se));
      }), Xs(P, [ue, se]);
    },
    onEnterCancelled(ue) {
      V(ue, !1, void 0, !0), Xs(M, [ue]);
    },
    onAppearCancelled(ue) {
      V(ue, !0, void 0, !0), Xs(E, [ue]);
    },
    onLeaveCancelled(ue) {
      ae(ue), Xs(A, [ue]);
    }
  });
}
function Ed(e) {
  if (e == null)
    return null;
  if (gt(e))
    return [Ua(e.enter), Ua(e.leave)];
  {
    const t = Ua(e);
    return [t, t];
  }
}
function Ua(e) {
  return Nc(e);
}
function ws(e, t) {
  t.split(/\s+/).forEach((o) => o && e.classList.add(o)), (e[Eo] || (e[Eo] = /* @__PURE__ */ new Set())).add(t);
}
function Vs(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.remove(n));
  const o = e[Eo];
  o && (o.delete(t), o.size || (e[Eo] = void 0));
}
function si(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Td = 0;
function oi(e, t, o, n) {
  const l = e._endId = ++Td, r = () => {
    l === e._endId && n();
  };
  if (o != null)
    return setTimeout(r, o);
  const { type: u, timeout: c, propCount: d } = jr(e, t);
  if (!u)
    return n();
  const m = u + "end";
  let v = 0;
  const g = () => {
    e.removeEventListener(m, w), r();
  }, w = (p) => {
    p.target === e && ++v >= d && g();
  };
  setTimeout(() => {
    v < d && g();
  }, c + 1), e.addEventListener(m, w);
}
function jr(e, t) {
  const o = window.getComputedStyle(e), n = (_) => (o[_] || "").split(", "), l = n(`${Fs}Delay`), r = n(`${Fs}Duration`), u = ni(l, r), c = n(`${Oo}Delay`), d = n(`${Oo}Duration`), m = ni(c, d);
  let v = null, g = 0, w = 0;
  t === Fs ? u > 0 && (v = Fs, g = u, w = r.length) : t === Oo ? m > 0 && (v = Oo, g = m, w = d.length) : (g = Math.max(u, m), v = g > 0 ? u > m ? Fs : Oo : null, w = v ? v === Fs ? r.length : d.length : 0);
  const p = v === Fs && /\b(?:transform|all)(?:,|$)/.test(
    n(`${Fs}Property`).toString()
  );
  return {
    type: v,
    timeout: g,
    propCount: w,
    hasTransform: p
  };
}
function ni(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((o, n) => ai(o) + ai(e[n])));
}
function ai(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function el(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Md(e, t, o) {
  const n = e[Eo];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : o ? e.setAttribute("class", t) : e.className = t;
}
const li = Symbol("_vod"), Pd = Symbol("_vsh"), Rd = Symbol(""), Nd = /(?:^|;)\s*display\s*:/;
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
      const u = n[Rd];
      u && (o += ";" + u), n.cssText = o, r = Nd.test(o);
    }
  } else t && e.removeAttribute("style");
  li in e && (e[li] = r ? n.display : "", e[Pd] && (n.display = "none"));
}
const ii = /\s*!important$/;
function Mn(e, t, o) {
  if (Xe(o))
    o.forEach((n) => Mn(e, t, n));
  else if (o == null && (o = ""), t.startsWith("--"))
    e.setProperty(t, o);
  else {
    const n = Ld(e, t);
    ii.test(o) ? e.setProperty(
      Ks(n),
      o.replace(ii, ""),
      "important"
    ) : e[n] = o;
  }
}
const ri = ["Webkit", "Moz", "ms"], za = {};
function Ld(e, t) {
  const o = za[t];
  if (o)
    return o;
  let n = is(t);
  if (n !== "filter" && n in e)
    return za[t] = n;
  n = Qn(n);
  for (let l = 0; l < ri.length; l++) {
    const r = ri[l] + n;
    if (r in e)
      return za[t] = r;
  }
  return t;
}
const ci = "http://www.w3.org/1999/xlink";
function ui(e, t, o, n, l, r = zc(t)) {
  n && t.startsWith("xlink:") ? o == null ? e.removeAttributeNS(ci, t.slice(6, t.length)) : e.setAttributeNS(ci, t, o) : o == null || r && !Ui(o) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : ms(o) ? String(o) : o
  );
}
function di(e, t, o, n, l) {
  if (t === "innerHTML" || t === "textContent") {
    o != null && (e[t] = t === "innerHTML" ? Vr(o) : o);
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
    c === "boolean" ? o = Ui(o) : o == null && c === "string" ? (o = "", u = !0) : c === "number" && (o = 0, u = !0);
  }
  try {
    e[t] = o;
  } catch {
  }
  u && e.removeAttribute(l || t);
}
function Ds(e, t, o, n) {
  e.addEventListener(t, o, n);
}
function Od(e, t, o, n) {
  e.removeEventListener(t, o, n);
}
const fi = Symbol("_vei");
function Ad(e, t, o, n, l = null) {
  const r = e[fi] || (e[fi] = {}), u = r[t];
  if (n && u)
    u.value = n;
  else {
    const [c, d] = Ud(t);
    if (n) {
      const m = r[t] = Vd(
        n,
        l
      );
      Ds(e, c, m, d);
    } else u && (Od(e, c, u, d), r[t] = void 0);
  }
}
const mi = /(?:Once|Passive|Capture)$/;
function Ud(e) {
  let t;
  if (mi.test(e)) {
    t = {};
    let n;
    for (; n = e.match(mi); )
      e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Ks(e.slice(2)), t];
}
let Fa = 0;
const zd = /* @__PURE__ */ Promise.resolve(), Fd = () => Fa || (zd.then(() => Fa = 0), Fa = Date.now());
function Vd(e, t) {
  const o = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= o.attached)
      return;
    ps(
      Bd(n, o.value),
      t,
      5,
      [n]
    );
  };
  return o.value = e, o.attached = Fd(), o;
}
function Bd(e, t) {
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
const vi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Wd = (e, t, o, n, l, r) => {
  const u = l === "svg";
  t === "class" ? Md(e, n, u) : t === "style" ? Dd(e, o, n) : Kn(t) ? il(t) || Ad(e, t, o, n, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Gd(e, t, n, u)) ? (di(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && ui(e, t, n, u, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !$t(n)) ? di(e, is(t), n, r, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), ui(e, t, n, u));
};
function Gd(e, t, o, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && vi(t) && et(o));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const l = e.tagName;
    if (l === "IMG" || l === "VIDEO" || l === "CANVAS" || l === "SOURCE")
      return !1;
  }
  return vi(t) && $t(o) ? !1 : t in e;
}
const Hr = /* @__PURE__ */ new WeakMap(), qr = /* @__PURE__ */ new WeakMap(), Wn = Symbol("_moveCb"), pi = Symbol("_enterCb"), jd = (e) => (delete e.props.mode, e), Hd = /* @__PURE__ */ jd({
  name: "TransitionGroup",
  props: /* @__PURE__ */ Mt({}, Wr, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: t }) {
    const o = xl(), n = dr();
    let l, r;
    return yr(() => {
      if (!l.length)
        return;
      const u = e.moveClass || `${e.name || "v"}-move`;
      if (!Yd(
        l[0].el,
        o.vnode.el,
        u
      )) {
        l = [];
        return;
      }
      l.forEach(Kd), l.forEach(Jd);
      const c = l.filter(Qd);
      el(o.vnode.el), c.forEach((d) => {
        const m = d.el, v = m.style;
        ws(m, u), v.transform = v.webkitTransform = v.transitionDuration = "";
        const g = m[Wn] = (w) => {
          w && w.target !== m || (!w || w.propertyName.endsWith("transform")) && (m.removeEventListener("transitionend", g), m[Wn] = null, Vs(m, u));
        };
        m.addEventListener("transitionend", g);
      }), l = [];
    }), () => {
      const u = ct(e), c = Gr(u);
      let d = u.tag || q;
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
          ), Hr.set(v, {
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
}), qd = Hd;
function Kd(e) {
  const t = e.el;
  t[Wn] && t[Wn](), t[pi] && t[pi]();
}
function Jd(e) {
  qr.set(e, {
    left: e.el.offsetLeft,
    top: e.el.offsetTop
  });
}
function Qd(e) {
  const t = Hr.get(e), o = qr.get(e), n = t.left - o.left, l = t.top - o.top;
  if (n || l) {
    const r = e.el.style;
    return r.transform = r.webkitTransform = `translate(${n}px,${l}px)`, r.transitionDuration = "0s", e;
  }
}
function Yd(e, t, o) {
  const n = e.cloneNode(), l = e[Eo];
  l && l.forEach((c) => {
    c.split(/\s+/).forEach((d) => d && n.classList.remove(d));
  }), o.split(/\s+/).forEach((c) => c && n.classList.add(c)), n.style.display = "none";
  const r = t.nodeType === 1 ? t : t.parentNode;
  r.appendChild(n);
  const { hasTransform: u } = jr(n);
  return r.removeChild(n), u;
}
const qs = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Xe(t) ? (o) => Sn(t, o) : t;
};
function Xd(e) {
  e.target.composing = !0;
}
function gi(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const ls = Symbol("_assign");
function hi(e, t, o) {
  return t && (e = e.trim()), o && (e = Yn(e)), e;
}
const $o = {
  created(e, { modifiers: { lazy: t, trim: o, number: n } }, l) {
    e[ls] = qs(l);
    const r = n || l.props && l.props.type === "number";
    Ds(e, t ? "change" : "input", (u) => {
      u.target.composing || e[ls](hi(e.value, o, r));
    }), (o || r) && Ds(e, "change", () => {
      e.value = hi(e.value, o, r);
    }), t || (Ds(e, "compositionstart", Xd), Ds(e, "compositionend", gi), Ds(e, "change", gi));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: o, modifiers: { lazy: n, trim: l, number: r } }, u) {
    if (e[ls] = qs(u), e.composing) return;
    const c = (r || e.type === "number") && !/^0\d/.test(e.value) ? Yn(e.value) : e.value, d = t ?? "";
    c !== d && (document.activeElement === e && e.type !== "range" && (n && t === o || l && e.value.trim() === d) || (e.value = d));
  }
}, Gn = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, o) {
    e[ls] = qs(o), Ds(e, "change", () => {
      const n = e._modelValue, l = To(e), r = e.checked, u = e[ls];
      if (Xe(n)) {
        const c = ul(n, l), d = c !== -1;
        if (r && !d)
          u(n.concat(l));
        else if (!r && d) {
          const m = [...n];
          m.splice(c, 1), u(m);
        }
      } else if (Mo(n)) {
        const c = new Set(n);
        r ? c.add(l) : c.delete(l), u(c);
      } else
        u(Kr(e, r));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: yi,
  beforeUpdate(e, t, o) {
    e[ls] = qs(o), yi(e, t, o);
  }
};
function yi(e, { value: t, oldValue: o }, n) {
  e._modelValue = t;
  let l;
  if (Xe(t))
    l = ul(t, n.props.value) > -1;
  else if (Mo(t))
    l = t.has(n.props.value);
  else {
    if (t === o) return;
    l = ao(t, Kr(e, !0));
  }
  e.checked !== l && (e.checked = l);
}
const Pn = {
  created(e, { value: t }, o) {
    e.checked = ao(t, o.props.value), e[ls] = qs(o), Ds(e, "change", () => {
      e[ls](To(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: o }, n) {
    e[ls] = qs(n), t !== o && (e.checked = ao(t, n.props.value));
  }
}, Co = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: o } }, n) {
    const l = Mo(t);
    Ds(e, "change", () => {
      const r = Array.prototype.filter.call(e.options, (u) => u.selected).map(
        (u) => o ? Yn(To(u)) : To(u)
      );
      e[ls](
        e.multiple ? l ? new Set(r) : r : r[0]
      ), e._assigning = !0, Pt(() => {
        e._assigning = !1;
      });
    }), e[ls] = qs(n);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    wi(e, t);
  },
  beforeUpdate(e, t, o) {
    e[ls] = qs(o);
  },
  updated(e, { value: t }) {
    e._assigning || wi(e, t);
  }
};
function wi(e, t) {
  const o = e.multiple, n = Xe(t);
  if (!(o && !n && !Mo(t))) {
    for (let l = 0, r = e.options.length; l < r; l++) {
      const u = e.options[l], c = To(u);
      if (o)
        if (n) {
          const d = typeof c;
          d === "string" || d === "number" ? u.selected = t.some((m) => String(m) === String(c)) : u.selected = ul(t, c) > -1;
        } else
          u.selected = t.has(c);
      else if (ao(To(u), t)) {
        e.selectedIndex !== l && (e.selectedIndex = l);
        return;
      }
    }
    !o && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function To(e) {
  return "_value" in e ? e._value : e.value;
}
function Kr(e, t) {
  const o = t ? "_trueValue" : "_falseValue";
  return o in e ? e[o] : t;
}
const Zd = ["ctrl", "shift", "alt", "meta"], ef = {
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
  exact: (e, t) => Zd.some((o) => e[`${o}Key`] && !t.includes(o))
}, mt = (e, t) => {
  const o = e._withMods || (e._withMods = {}), n = t.join(".");
  return o[n] || (o[n] = ((l, ...r) => {
    for (let u = 0; u < t.length; u++) {
      const c = ef[t[u]];
      if (c && c(l, t)) return;
    }
    return e(l, ...r);
  }));
}, tf = {
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
      (u) => u === r || tf[u] === r
    ))
      return e(l);
  }));
}, sf = /* @__PURE__ */ Mt({ patchProp: Wd }, xd);
let _i;
function of() {
  return _i || (_i = nd(sf));
}
const vn = ((...e) => {
  const t = of().createApp(...e), { mount: o } = t;
  return t.mount = (n) => {
    const l = af(n);
    if (!l) return;
    const r = t._component;
    !et(r) && !r.render && !r.template && (r.template = l.innerHTML), l.nodeType === 1 && (l.textContent = "");
    const u = o(l, !1, nf(l));
    return l instanceof Element && (l.removeAttribute("v-cloak"), l.setAttribute("data-v-app", "")), u;
  }, t;
});
function nf(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function af(e) {
  return $t(e) ? document.querySelector(e) : e;
}
const lf = { class: "panel-layout" }, rf = {
  key: 0,
  class: "panel-layout-header"
}, cf = {
  key: 1,
  class: "panel-layout-search"
}, uf = { class: "panel-layout-content" }, df = {
  key: 2,
  class: "panel-layout-footer"
}, ff = /* @__PURE__ */ be({
  __name: "PanelLayout",
  setup(e) {
    return (t, o) => (a(), i("div", lf, [
      t.$slots.header ? (a(), i("div", rf, [
        st(t.$slots, "header", {}, void 0)
      ])) : y("", !0),
      t.$slots.search ? (a(), i("div", cf, [
        st(t.$slots, "search", {}, void 0)
      ])) : y("", !0),
      s("div", uf, [
        st(t.$slots, "content", {}, void 0)
      ]),
      t.$slots.footer ? (a(), i("div", df, [
        st(t.$slots, "footer", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), Se = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [n, l] of t)
    o[n] = l;
  return o;
}, Ut = /* @__PURE__ */ Se(ff, [["__scopeId", "data-v-21565df9"]]), mf = {
  key: 0,
  class: "panel-title-prefix"
}, vf = {
  key: 1,
  class: "panel-title-prefix-theme"
}, pf = /* @__PURE__ */ be({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(e) {
    return (t, o) => (a(), R(_l(`h${e.level}`), {
      class: Fe(["panel-title", e.variant])
    }, {
      default: h(() => [
        e.showPrefix ? (a(), i("span", mf, f(e.prefix), 1)) : (a(), i("span", vf)),
        st(t.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), gf = /* @__PURE__ */ Se(pf, [["__scopeId", "data-v-c3875efc"]]), hf = ["title"], yf = ["width", "height"], wf = /* @__PURE__ */ be({
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
      ])], 8, yf))
    ], 8, hf));
  }
}), Jr = /* @__PURE__ */ Se(wf, [["__scopeId", "data-v-6fc7f16d"]]), _f = { class: "header-left" }, kf = {
  key: 0,
  class: "header-actions"
}, bf = /* @__PURE__ */ be({
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
      s("div", _f, [
        b(gf, { "show-prefix": e.showPrefix }, {
          default: h(() => [
            $(f(e.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        e.showInfo ? (a(), R(Jr, {
          key: 0,
          onClick: o[0] || (o[0] = (n) => t.$emit("info-click"))
        })) : y("", !0)
      ]),
      t.$slots.actions ? (a(), i("div", kf, [
        st(t.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), zt = /* @__PURE__ */ Se(bf, [["__scopeId", "data-v-55a62cd6"]]), $f = {
  key: 0,
  class: "section-title-count"
}, Cf = {
  key: 1,
  class: "section-title-icon"
}, xf = /* @__PURE__ */ be({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e) {
    return (t, o) => (a(), R(_l(`h${e.level}`), {
      class: Fe(["section-title", { clickable: e.clickable }]),
      onClick: o[0] || (o[0] = (n) => e.clickable && t.$emit("click"))
    }, {
      default: h(() => [
        st(t.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (a(), i("span", $f, "(" + f(e.count) + ")", 1)) : y("", !0),
        e.clickable ? (a(), i("span", Cf, f(e.expanded ? "▼" : "▸"), 1)) : y("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), ns = /* @__PURE__ */ Se(xf, [["__scopeId", "data-v-559361eb"]]), Sf = { class: "status-grid" }, If = { class: "status-grid__columns" }, Ef = { class: "status-grid__column" }, Tf = { class: "status-grid__title" }, Mf = { class: "status-grid__column status-grid__column--right" }, Pf = { class: "status-grid__title" }, Rf = {
  key: 0,
  class: "status-grid__footer"
}, Nf = /* @__PURE__ */ be({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(e) {
    return (t, o) => (a(), i("div", Sf, [
      s("div", If, [
        s("div", Ef, [
          s("h4", Tf, f(e.leftTitle), 1),
          st(t.$slots, "left", {}, void 0)
        ]),
        s("div", Mf, [
          s("h4", Pf, f(e.rightTitle), 1),
          st(t.$slots, "right", {}, void 0)
        ])
      ]),
      t.$slots.footer ? (a(), i("div", Rf, [
        st(t.$slots, "footer", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), Df = /* @__PURE__ */ Se(Nf, [["__scopeId", "data-v-73b7ba3f"]]), Lf = {
  key: 0,
  class: "status-item__icon"
}, Of = {
  key: 1,
  class: "status-item__count"
}, Af = { class: "status-item__label" }, Uf = /* @__PURE__ */ be({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, o = N(() => `status-item--${t.variant}`);
    return (n, l) => (a(), i("div", {
      class: Fe(["status-item", o.value, { "is-separator": e.separator }])
    }, [
      e.icon ? (a(), i("span", Lf, f(e.icon), 1)) : y("", !0),
      e.count !== void 0 ? (a(), i("span", Of, f(e.count), 1)) : y("", !0),
      s("span", Af, f(e.label), 1)
    ], 2));
  }
}), ys = /* @__PURE__ */ Se(Uf, [["__scopeId", "data-v-6f929183"]]), zf = { class: "issue-card__header" }, Ff = { class: "issue-card__icon" }, Vf = { class: "issue-card__title" }, Bf = {
  key: 0,
  class: "issue-card__content"
}, Wf = {
  key: 0,
  class: "issue-card__description"
}, Gf = {
  key: 1,
  class: "issue-card__items"
}, jf = {
  key: 2,
  class: "issue-card__actions"
}, Hf = /* @__PURE__ */ be({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(e) {
    const t = e, o = N(() => `issue-card--${t.severity}`);
    return (n, l) => (a(), i("div", {
      class: Fe(["issue-card", o.value])
    }, [
      s("div", zf, [
        s("span", Ff, f(e.icon), 1),
        s("h4", Vf, f(e.title), 1)
      ]),
      n.$slots.default || e.description ? (a(), i("div", Bf, [
        e.description ? (a(), i("p", Wf, f(e.description), 1)) : y("", !0),
        st(n.$slots, "default", {}, void 0)
      ])) : y("", !0),
      e.items && e.items.length ? (a(), i("div", Gf, [
        (a(!0), i(q, null, he(e.items, (r, u) => (a(), i("div", {
          key: u,
          class: "issue-card__item"
        }, [
          l[0] || (l[0] = s("span", { class: "issue-card__bullet" }, "•", -1)),
          s("span", null, f(r), 1)
        ]))), 128))
      ])) : y("", !0),
      n.$slots.actions ? (a(), i("div", jf, [
        st(n.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), us = /* @__PURE__ */ Se(Hf, [["__scopeId", "data-v-df6aa348"]]), qf = ["type", "disabled"], Kf = {
  key: 0,
  class: "spinner"
}, Jf = /* @__PURE__ */ be({
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
      e.loading ? (a(), i("span", Kf)) : y("", !0),
      e.loading ? y("", !0) : st(t.$slots, "default", { key: 1 }, void 0)
    ], 10, qf));
  }
}), Te = /* @__PURE__ */ Se(Jf, [["__scopeId", "data-v-772abe47"]]), Qf = { class: "empty-state" }, Yf = {
  key: 0,
  class: "empty-icon"
}, Xf = { class: "empty-message" }, Zf = /* @__PURE__ */ be({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(e) {
    return (t, o) => (a(), i("div", Qf, [
      e.icon ? (a(), i("div", Yf, f(e.icon), 1)) : y("", !0),
      s("p", Xf, f(e.message), 1),
      e.actionLabel ? (a(), R(Te, {
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
}), rs = /* @__PURE__ */ Se(Zf, [["__scopeId", "data-v-4466284f"]]), em = /* @__PURE__ */ be({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(e) {
    return (t, o) => (a(), i("span", {
      class: Fe(["detail-label"]),
      style: At({ minWidth: e.minWidth })
    }, [
      st(t.$slots, "default", {}, void 0)
    ], 4));
  }
}), Rn = /* @__PURE__ */ Se(em, [["__scopeId", "data-v-75e9eeb8"]]), tm = /* @__PURE__ */ be({
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
}), tl = /* @__PURE__ */ Se(tm, [["__scopeId", "data-v-2f186e4c"]]), sm = { class: "detail-row" }, om = /* @__PURE__ */ be({
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
    return (t, o) => (a(), i("div", sm, [
      b(Rn, { "min-width": e.labelMinWidth }, {
        default: h(() => [
          $(f(e.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      e.value ? (a(), R(tl, {
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
}), _t = /* @__PURE__ */ Se(om, [["__scopeId", "data-v-ef15664a"]]), nm = { class: "modal-header" }, am = { class: "modal-body" }, lm = { class: "status-section" }, im = {
  key: 0,
  class: "status-section"
}, rm = { class: "section-header-row" }, cm = {
  key: 0,
  class: "workflow-group"
}, um = { class: "workflow-group-header" }, dm = { class: "workflow-group-title" }, fm = { class: "workflow-list" }, mm = { class: "workflow-name" }, vm = { class: "workflow-issue" }, pm = {
  key: 1,
  class: "workflow-group"
}, gm = { class: "workflow-group-header" }, hm = { class: "workflow-group-title" }, ym = { class: "workflow-list" }, wm = { class: "workflow-name" }, _m = { class: "workflow-issue" }, km = {
  key: 2,
  class: "workflow-group"
}, bm = { class: "workflow-group-header" }, $m = { class: "workflow-group-title" }, Cm = { class: "workflow-list" }, xm = { class: "workflow-name" }, Sm = {
  key: 3,
  class: "workflow-group"
}, Im = { class: "workflow-group-header" }, Em = { class: "workflow-group-title" }, Tm = { class: "workflow-list" }, Mm = { class: "workflow-name" }, Pm = {
  key: 4,
  class: "workflow-group"
}, Rm = { class: "workflow-group-header" }, Nm = { class: "workflow-group-title" }, Dm = { class: "workflow-list" }, Lm = { class: "workflow-name" }, Om = {
  key: 5,
  class: "workflow-group"
}, Am = { class: "workflow-group-title" }, Um = { class: "expand-icon" }, zm = {
  key: 0,
  class: "workflow-list"
}, Fm = { class: "workflow-name" }, Vm = {
  key: 1,
  class: "status-section"
}, Bm = {
  key: 0,
  class: "change-group"
}, Wm = { class: "change-group-header" }, Gm = { class: "change-group-title" }, jm = { class: "change-list" }, Hm = { class: "node-name" }, qm = {
  key: 0,
  class: "dev-badge"
}, Km = {
  key: 1,
  class: "change-group"
}, Jm = { class: "change-group-header" }, Qm = { class: "change-group-title" }, Ym = { class: "change-list" }, Xm = { class: "node-name" }, Zm = {
  key: 0,
  class: "dev-badge"
}, ev = {
  key: 2,
  class: "change-group"
}, tv = { class: "change-list" }, sv = { class: "change-item" }, ov = { class: "node-name" }, nv = {
  key: 3,
  class: "change-group"
}, av = {
  key: 2,
  class: "status-section"
}, lv = { class: "section-header-row" }, iv = {
  key: 0,
  class: "drift-item"
}, rv = { class: "drift-list" }, cv = {
  key: 0,
  class: "drift-list-more"
}, uv = {
  key: 1,
  class: "drift-item"
}, dv = { class: "drift-list" }, fv = {
  key: 0,
  class: "drift-list-more"
}, mv = {
  key: 2,
  class: "drift-item"
}, vv = { class: "drift-list" }, pv = { class: "version-actual" }, gv = { class: "version-expected" }, hv = {
  key: 0,
  class: "drift-list-more"
}, yv = {
  key: 3,
  class: "drift-item"
}, wv = { class: "repair-action" }, _v = {
  key: 3,
  class: "status-section"
}, kv = { class: "info-box" }, bv = { class: "drift-list" }, $v = {
  key: 0,
  class: "drift-list-more"
}, Cv = {
  key: 4,
  class: "status-section"
}, xv = { class: "warning-box" }, Sv = {
  key: 5,
  class: "empty-state-inline"
}, Iv = { class: "modal-actions" }, Ev = /* @__PURE__ */ be({
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
    }), kt(() => t.show, (w, p) => {
      console.log("StatusDetailModal show prop changed from", p, "to", w);
    }, { immediate: !0 });
    const n = N(() => {
      var w, p, _;
      return ((_ = (p = (w = t.status) == null ? void 0 : w.workflows) == null ? void 0 : p.analyzed) == null ? void 0 : _.filter(
        (x) => x.status === "broken" && x.sync_state === "synced"
      )) || [];
    }), l = N(() => {
      var w, p, _;
      return ((_ = (p = (w = t.status) == null ? void 0 : w.workflows) == null ? void 0 : p.analyzed) == null ? void 0 : _.filter(
        (x) => x.status === "broken" && x.sync_state !== "synced"
      )) || [];
    }), r = N(() => {
      var w, p, _;
      return ((_ = (p = (w = t.status) == null ? void 0 : w.workflows) == null ? void 0 : p.synced) == null ? void 0 : _.filter((x) => {
        var S, T, M;
        const C = (M = (T = (S = t.status) == null ? void 0 : S.workflows) == null ? void 0 : T.analyzed) == null ? void 0 : M.find((P) => P.name === x);
        return !C || C.status !== "broken";
      })) || [];
    }), u = N(() => {
      var w, p, _, x, C;
      return (w = t.status) != null && w.workflows ? (((p = t.status.workflows.new) == null ? void 0 : p.length) ?? 0) > 0 || (((_ = t.status.workflows.modified) == null ? void 0 : _.length) ?? 0) > 0 || (((x = t.status.workflows.deleted) == null ? void 0 : x.length) ?? 0) > 0 || (((C = t.status.workflows.synced) == null ? void 0 : C.length) ?? 0) > 0 : !1;
    }), c = N(() => {
      var p, _, x;
      const w = (p = t.status) == null ? void 0 : p.git_changes;
      return w ? (((_ = w.nodes_added) == null ? void 0 : _.length) ?? 0) > 0 || (((x = w.nodes_removed) == null ? void 0 : x.length) ?? 0) > 0 || w.workflow_changes || w.has_other_changes : !1;
    }), d = N(() => {
      var w, p, _, x, C, S;
      return !u.value && !c.value && ((p = (w = t.status) == null ? void 0 : w.comparison) == null ? void 0 : p.is_synced) && (((_ = t.status) == null ? void 0 : _.missing_models_count) ?? 0) === 0 && (((S = (C = (x = t.status) == null ? void 0 : x.comparison) == null ? void 0 : C.disabled_nodes) == null ? void 0 : S.length) ?? 0) === 0;
    }), m = N(() => {
      var p, _;
      const w = (_ = (p = t.status) == null ? void 0 : p.git_changes) == null ? void 0 : _.workflow_changes;
      return w ? typeof w == "number" ? w : Object.keys(w).length : 0;
    });
    function v(w) {
      return typeof w == "string" ? w : w.name;
    }
    function g(w) {
      return typeof w == "object" && w.is_development === !0;
    }
    return (w, p) => {
      var _, x, C, S, T, M, P, A, B, j, E, V, ae, fe, ue, we, se, F, Q, Pe, te, ge;
      return a(), R(Rt, { to: "body" }, [
        e.show ? (a(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: p[7] || (p[7] = (O) => w.$emit("close"))
        }, [
          s("div", {
            class: "modal-content",
            onClick: p[6] || (p[6] = mt(() => {
            }, ["stop"]))
          }, [
            s("div", nm, [
              p[8] || (p[8] = s("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              s("button", {
                class: "modal-close",
                onClick: p[0] || (p[0] = (O) => w.$emit("close"))
              }, "✕")
            ]),
            s("div", am, [
              s("div", lm, [
                b(ns, { level: "4" }, {
                  default: h(() => [...p[9] || (p[9] = [
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
              u.value ? (a(), i("div", im, [
                s("div", rm, [
                  b(ns, { level: "4" }, {
                    default: h(() => [...p[10] || (p[10] = [
                      $("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  s("button", {
                    class: "link-btn",
                    onClick: p[1] || (p[1] = (O) => w.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                n.value.length ? (a(), i("div", cm, [
                  s("div", um, [
                    p[11] || (p[11] = s("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    s("span", dm, "BROKEN (COMMITTED) (" + f(n.value.length) + ")", 1)
                  ]),
                  s("div", fm, [
                    (a(!0), i(q, null, he(n.value, (O) => (a(), i("div", {
                      key: O.name,
                      class: "workflow-item"
                    }, [
                      s("span", mm, f(O.name), 1),
                      s("span", vm, f(O.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                l.value.length ? (a(), i("div", pm, [
                  s("div", gm, [
                    p[12] || (p[12] = s("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    s("span", hm, "BROKEN (UNCOMMITTED) (" + f(l.value.length) + ")", 1)
                  ]),
                  s("div", ym, [
                    (a(!0), i(q, null, he(l.value, (O) => (a(), i("div", {
                      key: O.name,
                      class: "workflow-item"
                    }, [
                      s("span", wm, f(O.name), 1),
                      s("span", _m, f(O.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (x = (_ = e.status.workflows) == null ? void 0 : _.new) != null && x.length ? (a(), i("div", km, [
                  s("div", bm, [
                    p[13] || (p[13] = s("span", { class: "workflow-status-icon new" }, "●", -1)),
                    s("span", $m, "NEW (" + f(e.status.workflows.new.length) + ")", 1)
                  ]),
                  s("div", Cm, [
                    (a(!0), i(q, null, he(e.status.workflows.new, (O) => (a(), i("div", {
                      key: O,
                      class: "workflow-item"
                    }, [
                      s("span", xm, f(O), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (S = (C = e.status.workflows) == null ? void 0 : C.modified) != null && S.length ? (a(), i("div", Sm, [
                  s("div", Im, [
                    p[14] || (p[14] = s("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    s("span", Em, "MODIFIED (" + f(e.status.workflows.modified.length) + ")", 1)
                  ]),
                  s("div", Tm, [
                    (a(!0), i(q, null, he(e.status.workflows.modified, (O) => (a(), i("div", {
                      key: O,
                      class: "workflow-item"
                    }, [
                      s("span", Mm, f(O), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (M = (T = e.status.workflows) == null ? void 0 : T.deleted) != null && M.length ? (a(), i("div", Pm, [
                  s("div", Rm, [
                    p[15] || (p[15] = s("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    s("span", Nm, "DELETED (" + f(e.status.workflows.deleted.length) + ")", 1)
                  ]),
                  s("div", Dm, [
                    (a(!0), i(q, null, he(e.status.workflows.deleted, (O) => (a(), i("div", {
                      key: O,
                      class: "workflow-item"
                    }, [
                      s("span", Lm, f(O), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                r.value.length ? (a(), i("div", Om, [
                  s("div", {
                    class: "workflow-group-header clickable",
                    onClick: p[2] || (p[2] = (O) => o.value = !o.value)
                  }, [
                    p[16] || (p[16] = s("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    s("span", Am, "SYNCED (" + f(r.value.length) + ")", 1),
                    s("span", Um, f(o.value ? "▼" : "▶"), 1)
                  ]),
                  o.value ? (a(), i("div", zm, [
                    (a(!0), i(q, null, he(r.value, (O) => (a(), i("div", {
                      key: O,
                      class: "workflow-item"
                    }, [
                      s("span", Fm, f(O), 1)
                    ]))), 128))
                  ])) : y("", !0)
                ])) : y("", !0)
              ])) : y("", !0),
              c.value ? (a(), i("div", Vm, [
                b(ns, { level: "4" }, {
                  default: h(() => [...p[17] || (p[17] = [
                    $("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (A = (P = e.status.git_changes) == null ? void 0 : P.nodes_added) != null && A.length ? (a(), i("div", Bm, [
                  s("div", Wm, [
                    p[18] || (p[18] = s("span", { class: "change-icon add" }, "+", -1)),
                    s("span", Gm, "NODES ADDED (" + f(e.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  s("div", jm, [
                    (a(!0), i(q, null, he(e.status.git_changes.nodes_added, (O) => (a(), i("div", {
                      key: v(O),
                      class: "change-item"
                    }, [
                      s("span", Hm, f(v(O)), 1),
                      g(O) ? (a(), i("span", qm, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (j = (B = e.status.git_changes) == null ? void 0 : B.nodes_removed) != null && j.length ? (a(), i("div", Km, [
                  s("div", Jm, [
                    p[19] || (p[19] = s("span", { class: "change-icon remove" }, "-", -1)),
                    s("span", Qm, "NODES REMOVED (" + f(e.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  s("div", Ym, [
                    (a(!0), i(q, null, he(e.status.git_changes.nodes_removed, (O) => (a(), i("div", {
                      key: v(O),
                      class: "change-item"
                    }, [
                      s("span", Xm, f(v(O)), 1),
                      g(O) ? (a(), i("span", Zm, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (E = e.status.git_changes) != null && E.workflow_changes ? (a(), i("div", ev, [
                  p[20] || (p[20] = s("div", { class: "change-group-header" }, [
                    s("span", { class: "change-icon modified" }, "~"),
                    s("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  s("div", tv, [
                    s("div", sv, [
                      s("span", ov, f(m.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : y("", !0),
                (V = e.status.git_changes) != null && V.has_other_changes ? (a(), i("div", nv, [...p[21] || (p[21] = [
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
              (ae = e.status.comparison) != null && ae.is_synced ? y("", !0) : (a(), i("div", av, [
                s("div", lv, [
                  b(ns, { level: "4" }, {
                    default: h(() => [...p[22] || (p[22] = [
                      $("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  s("button", {
                    class: "link-btn",
                    onClick: p[3] || (p[3] = (O) => w.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                p[26] || (p[26] = s("div", { class: "warning-box" }, [
                  s("span", { class: "warning-icon" }, "⚠"),
                  s("span", null, "Environment needs repair")
                ], -1)),
                (ue = (fe = e.status.comparison) == null ? void 0 : fe.missing_nodes) != null && ue.length ? (a(), i("div", iv, [
                  b(_t, {
                    label: "Missing Nodes:",
                    value: `${e.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  s("div", rv, [
                    (a(!0), i(q, null, he(e.status.comparison.missing_nodes.slice(0, 10), (O) => (a(), i("div", {
                      key: O,
                      class: "drift-list-item"
                    }, " - " + f(O), 1))), 128)),
                    e.status.comparison.missing_nodes.length > 10 ? (a(), i("div", cv, " ... and " + f(e.status.comparison.missing_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (se = (we = e.status.comparison) == null ? void 0 : we.extra_nodes) != null && se.length ? (a(), i("div", uv, [
                  b(_t, {
                    label: "Extra Nodes:",
                    value: `${e.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  s("div", dv, [
                    (a(!0), i(q, null, he(e.status.comparison.extra_nodes.slice(0, 10), (O) => (a(), i("div", {
                      key: O,
                      class: "drift-list-item"
                    }, " - " + f(O), 1))), 128)),
                    e.status.comparison.extra_nodes.length > 10 ? (a(), i("div", fv, " ... and " + f(e.status.comparison.extra_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (Q = (F = e.status.comparison) == null ? void 0 : F.version_mismatches) != null && Q.length ? (a(), i("div", mv, [
                  b(_t, {
                    label: "Version Mismatches:",
                    value: `${e.status.comparison.version_mismatches.length} node(s) have wrong versions`
                  }, null, 8, ["value"]),
                  s("div", vv, [
                    (a(!0), i(q, null, he(e.status.comparison.version_mismatches.slice(0, 10), (O) => (a(), i("div", {
                      key: O.name,
                      class: "drift-list-item version-mismatch"
                    }, [
                      $(f(O.name) + ": ", 1),
                      s("span", pv, f(O.actual), 1),
                      p[23] || (p[23] = $(" → ", -1)),
                      s("span", gv, f(O.expected), 1)
                    ]))), 128)),
                    e.status.comparison.version_mismatches.length > 10 ? (a(), i("div", hv, " ... and " + f(e.status.comparison.version_mismatches.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                ((Pe = e.status.comparison) == null ? void 0 : Pe.packages_in_sync) === !1 ? (a(), i("div", yv, [
                  b(_t, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ])) : y("", !0),
                s("div", wv, [
                  b(Te, {
                    variant: "warning",
                    loading: e.isRepairing,
                    onClick: p[4] || (p[4] = (O) => w.$emit("repair"))
                  }, {
                    default: h(() => [...p[24] || (p[24] = [
                      $(" Repair Environment ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"]),
                  p[25] || (p[25] = s("p", { class: "help-text" }, "Syncs environment to match pyproject.toml manifest", -1))
                ])
              ])),
              (ge = (te = e.status.comparison) == null ? void 0 : te.disabled_nodes) != null && ge.length ? (a(), i("div", _v, [
                b(ns, { level: "4" }, {
                  default: h(() => [...p[27] || (p[27] = [
                    $("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                s("div", kv, [
                  p[28] || (p[28] = s("span", { class: "info-icon" }, "ℹ", -1)),
                  s("span", null, f(e.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                s("div", bv, [
                  (a(!0), i(q, null, he(e.status.comparison.disabled_nodes.slice(0, 10), (O) => (a(), i("div", {
                    key: O,
                    class: "drift-list-item"
                  }, " • " + f(O), 1))), 128)),
                  e.status.comparison.disabled_nodes.length > 10 ? (a(), i("div", $v, " ... and " + f(e.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : y("", !0)
                ])
              ])) : y("", !0),
              (e.status.missing_models_count ?? 0) > 0 ? (a(), i("div", Cv, [
                b(ns, { level: "4" }, {
                  default: h(() => [...p[29] || (p[29] = [
                    $("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                s("div", xv, [
                  p[30] || (p[30] = s("span", { class: "warning-icon" }, "⚠", -1)),
                  s("span", null, f(e.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                p[31] || (p[31] = s("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : y("", !0),
              d.value ? (a(), i("div", Sv, [...p[32] || (p[32] = [
                s("div", { class: "empty-icon" }, "✅", -1),
                s("div", { class: "empty-message" }, [
                  s("strong", null, "Environment is clean!"),
                  s("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : y("", !0)
            ]),
            s("div", Iv, [
              b(Te, {
                variant: "secondary",
                onClick: p[5] || (p[5] = (O) => w.$emit("close"))
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
}), Tv = /* @__PURE__ */ Se(Ev, [["__scopeId", "data-v-e2b37122"]]), Mv = { class: "health-section-header" }, Pv = { class: "suggestions-content" }, Rv = { class: "suggestions-text" }, Nv = { style: { "margin-top": "var(--cg-space-3)" } }, Dv = {
  key: 1,
  class: "no-issues-text"
}, Lv = /* @__PURE__ */ be({
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
    const x = N(() => {
      const Ee = n.status.workflows.analyzed || [], H = Ee.filter(
        (Z) => Z.unresolved_models_count > 0 || Z.ambiguous_models_count > 0
      );
      return H.length === 0 && n.status.missing_models_count > 0 ? Ee.filter((Z) => Z.sync_state === "synced") : H;
    });
    function C() {
      const Ee = x.value;
      Ee.length !== 0 && (v.value = !0, m("repair-missing-models", Ee.map((H) => H.name)));
    }
    function S() {
      v.value = !1;
    }
    t({ resetRepairingState: S, resetRepairingEnvironmentState: p, closeDetailModal: _ });
    const T = N(() => n.status.workflows.new.length > 0 || n.status.workflows.modified.length > 0 || n.status.workflows.deleted.length > 0), M = N(() => n.status.has_changes), P = N(() => {
      const Ee = n.status.git_changes;
      return Ee.nodes_added.length > 0 || Ee.nodes_removed.length > 0 || Ee.workflow_changes;
    }), A = N(() => n.status.has_changes || T.value), B = N(() => Object.keys(n.status.git_changes.workflow_changes_detail).length), j = N(() => n.status.git_changes.has_other_changes), E = N(() => {
      var Ee;
      return ((Ee = n.status.workflows.analyzed) == null ? void 0 : Ee.filter((H) => H.status === "broken")) || [];
    }), V = N(() => {
      var Ee;
      return ((Ee = n.status.workflows.analyzed) == null ? void 0 : Ee.filter(
        (H) => H.has_path_sync_issues && !H.has_issues
      )) || [];
    }), ae = N(() => E.value.length > 0);
    function fe(Ee) {
      const H = [
        />=\s*v?(\d+(?:\.\d+){1,3})/i,
        /requires\s+comfyui\s*v?(\d+(?:\.\d+){1,3})/i,
        /comfyui\s*v?(\d+(?:\.\d+){1,3})\+/i
      ];
      for (const Z of H) {
        const K = Ee.match(Z);
        if (K != null && K[1])
          return K[1];
      }
      return null;
    }
    function ue(Ee) {
      const H = Ee.map(fe).filter((Z) => !!Z);
      return [...new Set(H)];
    }
    function we(Ee) {
      if (Ee.length === 0) return "";
      if (Ee.length === 1) return ` (>= ${Ee[0]})`;
      const H = Ee.slice(0, 2).map((K) => `>= ${K}`).join(", "), Z = Ee.length > 2;
      return ` (${H}${Z ? ", ..." : ""})`;
    }
    function se(Ee) {
      return Ee.replace(/uninstallable node mappings?/gi, (H) => H.toLowerCase().endsWith("s") ? "community packages" : "community package").replace(/no installable package versions?/gi, "need community packages").replace(/\bare uninstallable\b/gi, "need community packages").replace(/\buninstallable\b/gi, "community-mapped");
    }
    function F(Ee) {
      const H = se(Ee.issue_summary || "Has issues"), Z = /(?:>=|v?\d+\.\d+)/i.test(H), K = ue(Ee.version_gated_guidance || []);
      return (Ee.nodes_version_gated_count || 0) > 0 && K.length > 0 && !Z ? `${Ee.name} — ${H} (needs ComfyUI ${K.map((X) => `>= ${X}`).join(", ")})` : `${Ee.name} — ${H}`;
    }
    const Q = N(() => E.value.reduce(
      (Ee, H) => Ee + (H.nodes_version_gated_count || 0),
      0
    )), Pe = N(() => {
      const Ee = E.value.flatMap(
        (H) => ue(H.version_gated_guidance || [])
      );
      return [...new Set(Ee)];
    }), te = N(() => E.value.reduce(
      (Ee, H) => Ee + (H.nodes_uninstallable_count || 0),
      0
    )), ge = N(() => {
      const Ee = [];
      return Q.value > 0 && Ee.push(
        `${Q.value} require newer ComfyUI${we(Pe.value)}`
      ), te.value > 0 && Ee.push(`${te.value} need community packages`), Ee.length > 0 ? `These workflows have missing, blocked, or actionable dependencies (${Ee.join(", ")}) that must be resolved before they can run.` : "These workflows have missing dependencies that must be resolved before they can run.";
    }), O = N(() => ae.value || V.value.length > 0 || n.status.missing_models_count > 0 || !n.status.comparison.is_synced || n.status.has_legacy_manager), me = N(() => {
      const Ee = [];
      return n.status.workflows.new.length > 0 && Ee.push(`${n.status.workflows.new.length} new`), n.status.workflows.modified.length > 0 && Ee.push(`${n.status.workflows.modified.length} modified`), n.status.workflows.deleted.length > 0 && Ee.push(`${n.status.workflows.deleted.length} deleted`), Ee.length > 0 ? `${Ee.join(", ")} workflow${Ee.length === 1 && !Ee[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), Re = N(() => {
      var Z, K;
      const Ee = [], H = n.status.comparison;
      return (Z = H.missing_nodes) != null && Z.length && Ee.push(`${H.missing_nodes.length} missing node${H.missing_nodes.length === 1 ? "" : "s"}`), (K = H.extra_nodes) != null && K.length && Ee.push(`${H.extra_nodes.length} untracked node${H.extra_nodes.length === 1 ? "" : "s"}`), Ee.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${Ee.join(" and ")}.`;
    }), Ge = N(() => {
      var Z, K;
      const Ee = [], H = n.status.comparison;
      return (Z = H.extra_nodes) != null && Z.length && (H.extra_nodes.slice(0, 3).forEach((X) => {
        Ee.push(`Untracked: ${X}`);
      }), H.extra_nodes.length > 3 && Ee.push(`...and ${H.extra_nodes.length - 3} more untracked`)), (K = H.missing_nodes) != null && K.length && (H.missing_nodes.slice(0, 3).forEach((X) => {
        Ee.push(`Missing: ${X}`);
      }), H.missing_nodes.length > 3 && Ee.push(`...and ${H.missing_nodes.length - 3} more missing`)), Ee;
    });
    return (Ee, H) => (a(), i(q, null, [
      b(Ut, null, {
        header: h(() => [
          b(zt, { title: "STATUS" })
        ]),
        content: h(() => [
          n.setupState === "no_workspace" ? (a(), R(us, {
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
                onClick: H[0] || (H[0] = (Z) => Ee.$emit("start-setup"))
              }, {
                default: h(() => [...H[13] || (H[13] = [
                  $(" Start Setup ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : n.setupState === "unmanaged" ? (a(), R(us, {
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
                onClick: H[1] || (H[1] = (Z) => Ee.$emit("view-environments"))
              }, {
                default: h(() => [...H[14] || (H[14] = [
                  $(" View Environments ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : n.setupState === "empty_workspace" ? (a(), R(us, {
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
                onClick: H[2] || (H[2] = (Z) => Ee.$emit("create-environment"))
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
            onMouseenter: H[4] || (H[4] = (Z) => r.value = !0),
            onMouseleave: H[5] || (H[5] = (Z) => r.value = !1)
          }, [
            s("div", Mv, [
              b(ns, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: h(() => [...H[16] || (H[16] = [
                  $(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              b(Id, { name: "fade" }, {
                default: h(() => [
                  r.value ? (a(), R(Te, {
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
                e.status.workflows.new.length ? (a(), R(ys, {
                  key: 0,
                  icon: "●",
                  count: e.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : y("", !0),
                e.status.workflows.modified.length ? (a(), R(ys, {
                  key: 1,
                  icon: "●",
                  count: e.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : y("", !0),
                e.status.workflows.deleted.length ? (a(), R(ys, {
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
                e.status.git_changes.nodes_added.length ? (a(), R(ys, {
                  key: 0,
                  icon: "●",
                  count: e.status.git_changes.nodes_added.length,
                  label: e.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : y("", !0),
                e.status.git_changes.nodes_removed.length ? (a(), R(ys, {
                  key: 1,
                  icon: "●",
                  count: e.status.git_changes.nodes_removed.length,
                  label: e.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : y("", !0),
                e.status.git_changes.workflow_changes ? (a(), R(ys, {
                  key: 2,
                  icon: "●",
                  count: B.value,
                  label: B.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : y("", !0),
                j.value ? (a(), R(ys, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : y("", !0),
                M.value && !P.value && !j.value ? (a(), R(ys, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : y("", !0),
                M.value ? y("", !0) : (a(), R(ys, {
                  key: 5,
                  icon: "✓",
                  label: "No uncommitted changes",
                  variant: "ok"
                }))
              ]),
              _: 2
            }, [
              A.value ? {
                name: "footer",
                fn: h(() => [
                  H[19] || (H[19] = s("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  s("div", Pv, [
                    s("span", Rv, f(me.value), 1),
                    b(Te, {
                      variant: "primary",
                      size: "sm",
                      onClick: H[3] || (H[3] = (Z) => Ee.$emit("commit-changes"))
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
          e.status.is_detached_head ? (a(), R(us, {
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
                onClick: H[6] || (H[6] = (Z) => Ee.$emit("create-branch"))
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
            b(ns, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: h(() => [...H[21] || (H[21] = [
                $(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            O.value ? (a(), i(q, { key: 0 }, [
              E.value.length > 0 ? (a(), R(us, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${E.value.length} workflow${E.value.length === 1 ? "" : "s"} can't run`,
                description: ge.value,
                items: E.value.map(F)
              }, {
                actions: h(() => [
                  b(Te, {
                    variant: "primary",
                    size: "sm",
                    onClick: H[7] || (H[7] = (Z) => Ee.$emit("view-workflows"))
                  }, {
                    default: h(() => [...H[22] || (H[22] = [
                      $(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "description", "items"])) : y("", !0),
              V.value.length > 0 ? (a(), R(us, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${V.value.length} workflow${V.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: V.value.map((Z) => `${Z.name} — ${Z.models_needing_path_sync_count} model path${Z.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: h(() => [
                  b(Te, {
                    variant: "primary",
                    size: "sm",
                    onClick: H[8] || (H[8] = (Z) => Ee.$emit("view-workflows"))
                  }, {
                    default: h(() => [...H[23] || (H[23] = [
                      $(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : y("", !0),
              e.status.missing_models_count > 0 && !ae.value ? (a(), R(us, {
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
                    onClick: H[9] || (H[9] = (Z) => Ee.$emit("view-workflows"))
                  }, {
                    default: h(() => [...H[24] || (H[24] = [
                      $(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : y("", !0),
              e.status.comparison.is_synced ? y("", !0) : (a(), R(us, {
                key: 3,
                severity: "error",
                icon: "⚠",
                title: "Environment not synced",
                description: Re.value,
                items: Ge.value
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
                    onClick: H[10] || (H[10] = (Z) => Ee.$emit("view-nodes"))
                  }, {
                    default: h(() => [...H[26] || (H[26] = [
                      $(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["description", "items"])),
              e.status.has_legacy_manager ? (a(), R(us, {
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
                    onClick: H[11] || (H[11] = (Z) => Ee.$emit("view-nodes"))
                  }, {
                    default: h(() => [...H[27] || (H[27] = [
                      $(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })) : y("", !0)
            ], 64)) : A.value ? (a(), i("span", Dv, "No issues")) : (a(), R(rs, {
              key: 2,
              icon: "✅",
              message: "Everything looks good! No issues detected."
            }))
          ])
        ]),
        _: 1
      }),
      b(Tv, {
        show: l.value,
        status: e.status,
        "is-repairing": g.value,
        onClose: H[12] || (H[12] = (Z) => l.value = !1),
        onNavigateWorkflows: c,
        onNavigateNodes: d,
        onRepair: w
      }, null, 8, ["show", "status", "is-repairing"])
    ], 64));
  }
}), Ov = /* @__PURE__ */ Se(Lv, [["__scopeId", "data-v-df52ba90"]]), NP = ro({
  hasWorkspace: !1,
  hasEnvironments: !1,
  isManaged: !1,
  hasLegacyManager: !1
});
const DP = [
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
], LP = {
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
], OP = [
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
function Ao() {
  return !1;
}
class Qr extends Error {
  constructor(o, n, l, r) {
    super(o);
    yn(this, "status");
    yn(this, "data");
    yn(this, "endpoint");
    this.name = "ComfyGitApiError", this.status = n, this.data = l, this.endpoint = r;
  }
}
function Uv() {
  return typeof crypto < "u" && crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const t = Math.random() * 16 | 0;
    return (e === "x" ? t : t & 3 | 8).toString(16);
  });
}
function pt() {
  const e = k(!1), t = k(null);
  async function o(G, ye) {
    var Dt;
    if (!((Dt = window.app) != null && Dt.api))
      throw new Error("ComfyUI API not available");
    const Be = await window.app.api.fetchApi(G, ye), dt = await Be.text();
    if (!Be.ok) {
      let jt = {};
      if (dt)
        try {
          const ss = JSON.parse(dt);
          ss && typeof ss == "object" && (jt = ss);
        } catch {
          jt = { error: dt };
        }
      const gs = jt.error || jt.message || jt.detail || Be.statusText || `Request failed: ${Be.status}`;
      throw new Qr(String(gs), Be.status, jt, G);
    }
    if (dt)
      return JSON.parse(dt);
  }
  async function n(G) {
    return o(`/v2/comfygit/cloud/auth/config?cloud_url=${encodeURIComponent(G)}`);
  }
  async function l(G, ye, Be) {
    return o("/v2/comfygit/cloud/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cloud_url: G, email: ye, password: Be })
    });
  }
  async function r(G, ye, Be) {
    return o("/v2/comfygit/cloud/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cloud_url: G, email: ye, password: Be })
    });
  }
  async function u(G, ye) {
    return o(`/v2/comfygit/cloud/auth/me?cloud_url=${encodeURIComponent(G)}`, {
      headers: { Authorization: `Bearer ${ye}` }
    });
  }
  async function c(G, ye) {
    return o("/v2/comfygit/cloud/auth/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cloud_url: G, refresh_token: ye || null })
    });
  }
  async function d(G, ye) {
    return o(`/v2/comfygit/cloud/environments?cloud_url=${encodeURIComponent(G)}`, {
      headers: { Authorization: `Bearer ${ye}` }
    });
  }
  async function m(G, ye, Be) {
    return o(
      `/v2/comfygit/cloud/environments/${encodeURIComponent(ye)}/revisions?cloud_url=${encodeURIComponent(G)}`,
      {
        headers: { Authorization: `Bearer ${Be}` }
      }
    );
  }
  async function v(G, ye, Be, dt) {
    return o("/v2/comfygit/cloud/publish", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${ye}`
      },
      body: JSON.stringify({
        cloud_url: G,
        source_message: Be || null,
        cloud_environment_id: dt || null
      })
    });
  }
  async function g(G = !1) {
    return o(G ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function w(G, ye = !1) {
    return o("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: G, allow_issues: ye })
    });
  }
  async function p(G = 10, ye = 0) {
    return o(`/v2/comfygit/log?limit=${G}&offset=${ye}`);
  }
  async function _(G, ye = 50) {
    return o(`/v2/comfygit/log?branch=${encodeURIComponent(G)}&limit=${ye}`);
  }
  async function x(G) {
    return o("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: G })
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
  async function T(G) {
    return o("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: G, force: !0 })
    });
  }
  async function M(G) {
    return o(`/v2/comfygit/environment_export/${encodeURIComponent(G)}/validate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({})
    });
  }
  async function P(G, ye) {
    return o(`/v2/comfygit/environment_export/${encodeURIComponent(G)}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: ye, force: !0 })
    });
  }
  async function A() {
    return o("/v2/comfygit/branches");
  }
  async function B(G) {
    return o(`/v2/comfygit/commit/${G}`);
  }
  async function j(G, ye = !1) {
    return o("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: G, force: ye })
    });
  }
  async function E(G, ye = "HEAD") {
    return o("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: G, start_point: ye })
    });
  }
  async function V(G, ye = !1) {
    return o("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: G, force: ye })
    });
  }
  async function ae(G, ye = !1) {
    return o(`/v2/comfygit/branch/${encodeURIComponent(G)}`, {
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
        const G = await g();
        return {
          environments: [{
            name: G.environment,
            is_current: !0,
            path: "~/comfygit/environments/" + G.environment,
            created_at: (/* @__PURE__ */ new Date()).toISOString(),
            workflow_count: G.workflows.total,
            node_count: 0,
            model_count: 0,
            current_branch: G.branch
          }],
          current: G.environment,
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
  async function we(G) {
    try {
      return await o(`/v2/comfygit/environments/${encodeURIComponent(G)}`);
    } catch {
      return null;
    }
  }
  async function se(G, ye) {
    const Be = { target_env: G };
    return ye && (Be.workspace_path = ye), o("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Be)
    });
  }
  async function F() {
    try {
      return o("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function Q(G) {
    return o("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(G)
    });
  }
  async function Pe() {
    return o("/v2/workspace/environments/create_status");
  }
  async function te(G = 20) {
    return o(`/v2/workspace/comfyui_releases?limit=${G}`);
  }
  async function ge(G) {
    return o(`/v2/workspace/environments/${G}`, {
      method: "DELETE"
    });
  }
  async function O(G = !1) {
    try {
      return o(G ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const ye = await g(G), Be = [];
      return ye.workflows.new.forEach((dt) => {
        Be.push({
          name: dt,
          status: "new",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: dt
        });
      }), ye.workflows.modified.forEach((dt) => {
        Be.push({
          name: dt,
          status: "modified",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: dt
        });
      }), ye.workflows.synced.forEach((dt) => {
        Be.push({
          name: dt,
          status: "synced",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: dt
        });
      }), Be;
    }
  }
  async function me(G) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(G)}/details`);
  }
  async function Re(G) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(G)}/contract`);
  }
  async function Ge(G, ye) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(G)}/contract`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ye)
    });
  }
  async function Ee(G) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(G)}/contract`, {
      method: "DELETE"
    });
  }
  async function H(G) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(G)}/resolve`, {
      method: "POST"
    });
  }
  async function Z(G, ye, Be) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(G)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: ye, install_models: Be })
    });
  }
  async function K(G, ye, Be) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(G)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: ye, importance: Be })
    });
  }
  async function X() {
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
  async function ce(G) {
    return o(`/v2/workspace/models/details/${encodeURIComponent(G)}`);
  }
  async function le(G) {
    return o("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: G })
    });
  }
  async function I(G, ye) {
    return o(`/v2/workspace/models/${G}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: ye })
    });
  }
  async function z(G, ye) {
    return o(`/v2/workspace/models/${G}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: ye })
    });
  }
  async function ie(G) {
    return o(`/v2/workspace/models/${G}`, {
      method: "DELETE"
    });
  }
  async function Ce(G) {
    return o("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(G)
    });
  }
  async function _e() {
    return o("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function $e() {
    return o("/v2/workspace/models/directory");
  }
  async function Ae(G) {
    return o("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: G })
    });
  }
  async function ze(G) {
    const ye = new URLSearchParams({ url: G });
    return o(`/v2/workspace/huggingface/repo-info?${ye}`);
  }
  async function Ne() {
    return o("/v2/workspace/models/subdirectories");
  }
  async function Ie(G, ye = 10) {
    const Be = new URLSearchParams({ query: G, limit: String(ye) });
    return o(`/v2/workspace/huggingface/search?${Be}`);
  }
  async function Ke(G) {
    try {
      const ye = G ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(G)}` : "/v2/comfygit/config";
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
  async function Ve(G, ye) {
    const Be = ye ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(ye)}` : "/v2/comfygit/config";
    return o(Be, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(G)
    });
  }
  async function ve(G, ye) {
    try {
      const Be = new URLSearchParams();
      return G && Be.append("level", G), ye && Be.append("lines", ye.toString()), o(`/v2/comfygit/debug/logs?${Be}`);
    } catch {
      return [];
    }
  }
  async function Y(G, ye) {
    try {
      const Be = new URLSearchParams();
      return G && Be.append("level", G), ye && Be.append("lines", ye.toString()), o(`/v2/workspace/debug/logs?${Be}`);
    } catch {
      return [];
    }
  }
  async function He() {
    return o("/v2/comfygit/debug/logs/path");
  }
  async function ke() {
    return o("/v2/comfygit/debug/manifest");
  }
  async function Ye() {
    return o("/v2/workspace/debug/logs/path");
  }
  async function ot(G, ye) {
    try {
      const Be = new URLSearchParams();
      return G && Be.append("level", G), ye && Be.append("lines", ye.toString()), o(`/v2/workspace/debug/orchestrator-logs?${Be}`);
    } catch {
      return [];
    }
  }
  async function Ue() {
    return o("/v2/workspace/debug/orchestrator-logs/path");
  }
  async function L(G) {
    return o("/v2/workspace/open-file", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: G })
    });
  }
  async function oe() {
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
  async function pe(G) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(G)}/track-dev`, {
      method: "POST"
    });
  }
  async function Je(G) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(G)}/install`, {
      method: "POST"
    });
  }
  async function D(G, ye) {
    var gs, ss, Ze, Ea;
    const Be = Uv(), dt = ((ss = (gs = window.app) == null ? void 0 : gs.api) == null ? void 0 : ss.clientId) ?? ((Ea = (Ze = window.app) == null ? void 0 : Ze.api) == null ? void 0 : Ea.initialClientId) ?? "comfygit-panel", Dt = {
      id: G.id,
      version: G.version || G.selected_version || "latest",
      selected_version: G.selected_version || "latest",
      mode: G.mode || "remote",
      channel: G.channel || "default"
    };
    return G.install_source && (Dt.install_source = G.install_source), G.install_source === "git" && G.repository && (Dt.repository = G.repository), await o("/v2/manager/queue/task", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        kind: "install",
        params: Dt,
        ui_id: Be,
        client_id: dt
      })
    }), console.log("[ComfyGit] Task queued with ui_id:", Be, "for package:", G.id), ye != null && ye.beforeQueueStart && await ye.beforeQueueStart(Be), await o("/v2/manager/queue/start", {
      method: "POST"
    }), { ui_id: Be };
  }
  async function U(G) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(G)}/update`, {
      method: "POST"
    });
  }
  async function ee(G, ye) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(G)}/criticality`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ criticality: ye })
    });
  }
  async function De(G) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(G)}`, {
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
  async function Me(G, ye) {
    return o("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: G, url: ye })
    });
  }
  async function je(G) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(G)}`, {
      method: "DELETE"
    });
  }
  async function nt(G, ye, Be) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(G)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: ye, push_url: Be })
    });
  }
  async function bt(G, ye) {
    const Be = {};
    return ye && (Be["X-Git-Auth-Token"] = ye), o(`/v2/comfygit/remotes/${encodeURIComponent(G)}/fetch`, {
      method: "POST",
      headers: Be
    });
  }
  async function It(G) {
    try {
      return o(`/v2/comfygit/remotes/${encodeURIComponent(G)}/status`);
    } catch {
      return null;
    }
  }
  async function re(G = "skip", ye = !0) {
    return o("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: G,
        remove_extra_nodes: ye
      })
    });
  }
  async function W(G, ye) {
    const Be = ye ? `/v2/comfygit/remotes/${encodeURIComponent(G)}/pull-preview?branch=${encodeURIComponent(ye)}` : `/v2/comfygit/remotes/${encodeURIComponent(G)}/pull-preview`;
    return o(Be);
  }
  async function de(G, ye = {}) {
    const Be = { "Content-Type": "application/json" };
    return ye.authToken && (Be["X-Git-Auth-Token"] = ye.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(G)}/pull`, {
      method: "POST",
      headers: Be,
      body: JSON.stringify({
        model_strategy: ye.modelStrategy || "skip",
        force: ye.force || !1,
        resolutions: ye.resolutions
      })
    });
  }
  async function We(G, ye) {
    const Be = ye ? `/v2/comfygit/remotes/${encodeURIComponent(G)}/push-preview?branch=${encodeURIComponent(ye)}` : `/v2/comfygit/remotes/${encodeURIComponent(G)}/push-preview`;
    return o(Be);
  }
  async function ut(G, ye = {}) {
    const Be = { "Content-Type": "application/json" };
    return ye.authToken && (Be["X-Git-Auth-Token"] = ye.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(G)}/push`, {
      method: "POST",
      headers: Be,
      body: JSON.stringify({ force: ye.force || !1 })
    });
  }
  async function Ct(G, ye) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(G)}/validate-merge`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resolutions: ye })
    });
  }
  async function lt(G) {
    const ye = {
      success: 0,
      failed: []
    };
    for (const Be of G)
      try {
        await H(Be), ye.success++;
      } catch (dt) {
        ye.failed.push({
          name: Be,
          error: dt instanceof Error ? dt.message : "Unknown error"
        });
      }
    return ye;
  }
  async function xt(G) {
    var dt;
    const ye = new FormData();
    if (ye.append("file", G), !((dt = window.app) != null && dt.api))
      throw new Error("ComfyUI API not available");
    const Be = await window.app.api.fetchApi("/v2/workspace/import/preview", {
      method: "POST",
      body: ye
      // Don't set Content-Type - browser will set multipart boundary automatically
    });
    if (!Be.ok) {
      const Dt = await Be.json().catch(() => ({}));
      throw new Error(Dt.error || `Preview failed: ${Be.status}`);
    }
    return Be.json();
  }
  async function ts(G) {
    return o(
      `/v2/workspace/environments/validate?name=${encodeURIComponent(G)}`
    );
  }
  async function Is(G, ye, Be, dt) {
    var gs;
    const Dt = new FormData();
    if (Dt.append("file", G), Dt.append("name", ye), Dt.append("model_strategy", Be), Dt.append("torch_backend", dt), !((gs = window.app) != null && gs.api))
      throw new Error("ComfyUI API not available");
    const jt = await window.app.api.fetchApi("/v2/workspace/import", {
      method: "POST",
      body: Dt
    });
    if (!jt.ok) {
      const ss = await jt.json().catch(() => ({}));
      throw new Error(ss.message || ss.error || `Import failed: ${jt.status}`);
    }
    return jt.json();
  }
  async function Js() {
    return o("/v2/workspace/import/status");
  }
  async function ca(G) {
    return o("/v2/workspace/import/preview/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ git_url: G })
    });
  }
  async function ua(G, ye, Be, dt) {
    return o("/v2/workspace/import/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        git_url: G,
        name: ye,
        model_strategy: Be,
        torch_backend: dt
      })
    });
  }
  async function zs() {
    return o("/v2/setup/status");
  }
  async function da() {
    return o("/v2/comfygit/update-check");
  }
  async function co() {
    return o("/v2/comfygit/update", { method: "POST" });
  }
  async function uo(G) {
    return o("/v2/setup/initialize_workspace", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(G)
    });
  }
  async function fa() {
    return o("/v2/setup/initialize_status");
  }
  async function Es(G) {
    return o("/v2/setup/validate_path", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(G)
    });
  }
  async function ma() {
    return o("/v2/comfygit/deploy/summary");
  }
  async function Do() {
    return o("/v2/comfygit/deploy/runpod/data-centers");
  }
  async function va(G, ye) {
    return o("/v2/comfygit/deploy/runpod/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ api_key: G, save_key: ye })
    });
  }
  async function pa() {
    return o("/v2/comfygit/deploy/runpod/volumes");
  }
  async function ga(G) {
    const ye = G ? `/v2/comfygit/deploy/runpod/gpu-types?data_center_id=${encodeURIComponent(G)}` : "/v2/comfygit/deploy/runpod/gpu-types";
    return o(ye);
  }
  async function ha(G) {
    return o("/v2/comfygit/deploy/runpod", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(G)
    });
  }
  async function pn() {
    return o("/v2/comfygit/deploy/runpod/pods");
  }
  async function ya(G) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(G)}`, {
      method: "DELETE"
    });
  }
  async function wa(G) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(G)}/stop`, {
      method: "POST"
    });
  }
  async function _a(G) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(G)}/start`, {
      method: "POST"
    });
  }
  async function ka(G) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(G)}/status`);
  }
  async function ba(G) {
    return o("/v2/comfygit/deploy/package", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: G })
    });
  }
  async function $a(G = !1) {
    return o(G ? "/v2/comfygit/deploy/runpod/key?verify=true" : "/v2/comfygit/deploy/runpod/key");
  }
  async function Ca() {
    return o("/v2/comfygit/deploy/runpod/key", {
      method: "DELETE"
    });
  }
  async function xa() {
    return o("/v2/comfygit/deploy/custom/workers");
  }
  async function gn(G) {
    return o("/v2/comfygit/deploy/custom/workers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(G)
    });
  }
  async function Sa(G) {
    return o(`/v2/comfygit/deploy/custom/workers/${encodeURIComponent(G)}`, {
      method: "DELETE"
    });
  }
  async function Ia(G) {
    return o("/v2/comfygit/deploy/custom/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(G)
    });
  }
  async function hn() {
    return o("/v2/comfygit/deploy/custom/scan", {
      method: "POST"
    });
  }
  async function ne(G) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(G)}/info`);
  }
  async function J(G) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(G)}/instances`);
  }
  async function qe(G, ye) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(G)}/instances`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ye)
    });
  }
  async function Qe(G, ye) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(G)}/instances/${encodeURIComponent(ye)}/start`, {
      method: "POST"
    });
  }
  async function at(G, ye) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(G)}/instances/${encodeURIComponent(ye)}/stop`, {
      method: "POST"
    });
  }
  async function vt(G, ye) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(G)}/instances/${encodeURIComponent(ye)}`, {
      method: "DELETE"
    });
  }
  async function Nt(G) {
    return o("/v2/comfygit/deploy/test-git-auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: G })
    });
  }
  return {
    isLoading: e,
    error: t,
    getStatus: g,
    commit: w,
    getHistory: p,
    getBranchHistory: _,
    exportEnv: x,
    validateExport: C,
    validateDeploy: S,
    exportEnvWithForce: T,
    validateEnvironmentExport: M,
    exportEnvironmentWithForce: P,
    // Git Operations
    getBranches: A,
    getCommitDetail: B,
    checkout: j,
    createBranch: E,
    switchBranch: V,
    deleteBranch: ae,
    // Environment Management
    listEnvironments: fe,
    getEnvironments: ue,
    getEnvironmentDetails: we,
    switchEnvironment: se,
    getSwitchProgress: F,
    createEnvironment: Q,
    getCreateProgress: Pe,
    getComfyUIReleases: te,
    deleteEnvironment: ge,
    // Workflow Management
    getWorkflows: O,
    getWorkflowDetails: me,
    getWorkflowContract: Re,
    saveWorkflowContract: Ge,
    deleteWorkflowContract: Ee,
    resolveWorkflow: H,
    installWorkflowDeps: Z,
    setModelImportance: K,
    // Model Management
    getEnvironmentModels: X,
    getWorkspaceModels: xe,
    getModelDetails: ce,
    openFileLocation: le,
    addModelSource: I,
    removeModelSource: z,
    deleteModel: ie,
    downloadModel: Ce,
    scanWorkspaceModels: _e,
    getModelsDirectory: $e,
    setModelsDirectory: Ae,
    getHuggingFaceRepoInfo: ze,
    getModelsSubdirectories: Ne,
    searchHuggingFaceRepos: Ie,
    // Settings
    getConfig: Ke,
    updateConfig: Ve,
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
    getEnvironmentLogs: ve,
    getEnvironmentManifest: ke,
    getWorkspaceLogs: Y,
    getEnvironmentLogPath: He,
    getWorkspaceLogPath: Ye,
    getOrchestratorLogs: ot,
    getOrchestratorLogPath: Ue,
    openFile: L,
    // Node Management
    getNodes: oe,
    trackNodeAsDev: pe,
    installNode: Je,
    queueNodeInstall: D,
    updateNode: U,
    updateNodeCriticality: ee,
    uninstallNode: De,
    // Git Remotes
    getRemotes: Le,
    addRemote: Me,
    removeRemote: je,
    updateRemoteUrl: nt,
    fetchRemote: bt,
    getRemoteSyncStatus: It,
    // Push/Pull
    getPullPreview: W,
    pullFromRemote: de,
    getPushPreview: We,
    pushToRemote: ut,
    validateMerge: Ct,
    // Environment Sync
    syncEnvironmentManually: re,
    // Workflow Repair
    repairWorkflowModels: lt,
    // Import Operations
    previewTarballImport: xt,
    previewGitImport: ca,
    validateEnvironmentName: ts,
    executeImport: Is,
    executeGitImport: ua,
    getImportProgress: Js,
    // First-Time Setup
    getSetupStatus: zs,
    // Manager Update Notice
    getUpdateCheck: da,
    updateManager: co,
    initializeWorkspace: uo,
    getInitializeProgress: fa,
    validatePath: Es,
    // Deploy Operations
    getDeploySummary: ma,
    getDataCenters: Do,
    testRunPodConnection: va,
    getNetworkVolumes: pa,
    getRunPodGpuTypes: ga,
    deployToRunPod: ha,
    getRunPodPods: pn,
    terminateRunPodPod: ya,
    stopRunPodPod: wa,
    startRunPodPod: _a,
    getDeploymentStatus: ka,
    exportDeployPackage: ba,
    getStoredRunPodKey: $a,
    clearRunPodKey: Ca,
    // Custom Worker Operations
    getCustomWorkers: xa,
    addCustomWorker: gn,
    removeCustomWorker: Sa,
    testWorkerConnection: Ia,
    scanForWorkers: hn,
    getWorkerSystemInfo: ne,
    getWorkerInstances: J,
    deployToWorker: qe,
    startWorkerInstance: Qe,
    stopWorkerInstance: at,
    terminateWorkerInstance: vt,
    // Git Authentication
    testGitAuth: Nt
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
function zv() {
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
const Fv = { class: "base-modal-header" }, Vv = {
  key: 0,
  class: "base-modal-title"
}, Bv = { class: "base-modal-body" }, Wv = {
  key: 0,
  class: "base-modal-loading"
}, Gv = {
  key: 1,
  class: "base-modal-error"
}, jv = {
  key: 0,
  class: "base-modal-footer"
}, Hv = /* @__PURE__ */ be({
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
    }), Po(() => {
      document.removeEventListener("keydown", r), document.body.style.overflow = "";
    }), (u, c) => (a(), R(Rt, { to: "body" }, [
      s("div", {
        class: "base-modal-overlay",
        style: At({ zIndex: e.overlayZIndex }),
        onClick: l
      }, [
        s("div", {
          class: Fe(["base-modal-content", e.size, { "fixed-height": e.fixedHeight }]),
          onClick: c[1] || (c[1] = mt(() => {
          }, ["stop"]))
        }, [
          s("div", Fv, [
            st(u.$slots, "header", {}, () => [
              e.title ? (a(), i("h3", Vv, f(e.title), 1)) : y("", !0)
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
          s("div", Bv, [
            e.loading ? (a(), i("div", Wv, "Loading...")) : e.error ? (a(), i("div", Gv, f(e.error), 1)) : st(u.$slots, "body", { key: 2 }, void 0)
          ]),
          u.$slots.footer ? (a(), i("div", jv, [
            st(u.$slots, "footer", {}, void 0)
          ])) : y("", !0)
        ], 2)
      ], 4)
    ]));
  }
}), Tt = /* @__PURE__ */ Se(Hv, [["__scopeId", "data-v-06a4be14"]]), qv = ["type", "disabled"], Kv = {
  key: 0,
  class: "spinner"
}, Jv = /* @__PURE__ */ be({
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
      e.loading ? (a(), i("span", Kv)) : y("", !0),
      st(t.$slots, "default", {}, void 0)
    ], 10, qv));
  }
}), Oe = /* @__PURE__ */ Se(Jv, [["__scopeId", "data-v-f3452606"]]), Qv = {
  key: 0,
  class: "base-title-count"
}, Yv = /* @__PURE__ */ be({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(e) {
    return (t, o) => (a(), R(_l(`h${e.level}`), {
      class: Fe(["base-title", e.variant])
    }, {
      default: h(() => [
        st(t.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (a(), i("span", Qv, "(" + f(e.count) + ")", 1)) : y("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), no = /* @__PURE__ */ Se(Yv, [["__scopeId", "data-v-5a01561d"]]), Xv = ["value", "disabled"], Zv = {
  key: 0,
  value: "",
  disabled: ""
}, ep = ["value"], tp = {
  key: 0,
  class: "base-select-error"
}, sp = /* @__PURE__ */ be({
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
        e.placeholder ? (a(), i("option", Zv, f(e.placeholder), 1)) : y("", !0),
        (a(!0), i(q, null, he(e.options, (r) => (a(), i("option", {
          key: t(r),
          value: t(r)
        }, f(o(r)), 9, ep))), 128))
      ], 42, Xv),
      e.error ? (a(), i("span", tp, f(e.error), 1)) : y("", !0)
    ], 2));
  }
}), Nn = /* @__PURE__ */ Se(sp, [["__scopeId", "data-v-4996bfe0"]]), op = { class: "popover-header" }, np = { class: "popover-title" }, ap = { class: "popover-content" }, lp = {
  key: 0,
  class: "popover-actions"
}, ip = /* @__PURE__ */ be({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(e) {
    return (t, o) => (a(), R(Rt, { to: "body" }, [
      e.show ? (a(), i("div", {
        key: 0,
        class: "popover-overlay",
        onClick: o[2] || (o[2] = (n) => t.$emit("close"))
      }, [
        s("div", {
          class: "popover",
          style: At({ maxWidth: e.maxWidth }),
          onClick: o[1] || (o[1] = mt(() => {
          }, ["stop"]))
        }, [
          s("div", op, [
            s("h4", np, f(e.title), 1),
            s("button", {
              class: "popover-close",
              onClick: o[0] || (o[0] = (n) => t.$emit("close"))
            }, "✕")
          ]),
          s("div", ap, [
            st(t.$slots, "content", {}, void 0)
          ]),
          t.$slots.actions ? (a(), i("div", lp, [
            st(t.$slots, "actions", {}, void 0)
          ])) : y("", !0)
        ], 4)
      ])) : y("", !0)
    ]));
  }
}), cs = /* @__PURE__ */ Se(ip, [["__scopeId", "data-v-42815ace"]]), rp = { class: "detail-section" }, cp = {
  key: 0,
  class: "empty-message"
}, up = { class: "model-header" }, dp = { class: "model-name" }, fp = { class: "model-details" }, mp = { class: "model-row" }, vp = { class: "model-row" }, pp = { class: "label" }, gp = {
  key: 0,
  class: "model-row model-row-nodes"
}, hp = { class: "node-list" }, yp = ["onClick"], wp = {
  key: 1,
  class: "model-row"
}, _p = { class: "value" }, kp = {
  key: 2,
  class: "model-row"
}, bp = { class: "value error" }, $p = {
  key: 0,
  class: "model-actions"
}, Cp = { class: "detail-section" }, xp = {
  key: 0,
  class: "empty-message"
}, Sp = { class: "node-content" }, Ip = { class: "node-main" }, Ep = { class: "node-name" }, Tp = { class: "node-badge" }, Mp = {
  key: 0,
  class: "node-version"
}, Pp = ["onClick"], Rp = {
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
    const o = e, n = t, { getWorkflowDetails: l, setModelImportance: r, openFileLocation: u, queueNodeInstall: c } = pt(), d = k(null), m = k(!1), v = k(null), g = k(!1), w = k({}), p = k(!1), _ = k(/* @__PURE__ */ new Set()), x = k(/* @__PURE__ */ new Set()), C = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function S(se) {
      switch (se) {
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
    function T(se) {
      switch (se) {
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
    function M(se) {
      switch (se) {
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
    function P(se) {
      switch (se) {
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
    function A(se) {
      switch (se) {
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
    function B(se) {
      if (!se.loaded_by || se.loaded_by.length === 0) return [];
      const F = se.hash || se.filename;
      return _.value.has(F) ? se.loaded_by : se.loaded_by.slice(0, 3);
    }
    function j(se) {
      return _.value.has(se);
    }
    function E(se) {
      _.value.has(se) ? _.value.delete(se) : _.value.add(se), _.value = new Set(_.value);
    }
    async function V() {
      m.value = !0, v.value = null;
      try {
        d.value = await l(o.workflowName);
      } catch (se) {
        v.value = se instanceof Error ? se.message : "Failed to load workflow details";
      } finally {
        m.value = !1;
      }
    }
    function ae(se, F) {
      w.value[se] = F, g.value = !0;
    }
    async function fe(se) {
      try {
        await u(se);
      } catch (F) {
        v.value = F instanceof Error ? F.message : "Failed to open file location";
      }
    }
    async function ue(se) {
      if (se.package_id)
        try {
          const F = se.latest_version || "latest";
          await c({
            id: se.package_id,
            version: F,
            selected_version: F,
            mode: "remote",
            channel: "default"
          }), x.value.add(se.package_id);
        } catch (F) {
          v.value = F instanceof Error ? F.message : "Failed to queue node install";
        }
    }
    async function we() {
      if (!g.value) {
        n("close");
        return;
      }
      m.value = !0, v.value = null;
      try {
        for (const [se, F] of Object.entries(w.value))
          await r(o.workflowName, se, F);
        n("refresh"), n("close");
      } catch (se) {
        v.value = se instanceof Error ? se.message : "Failed to save changes";
      } finally {
        m.value = !1;
      }
    }
    return rt(V), (se, F) => (a(), i(q, null, [
      b(Tt, {
        title: `WORKFLOW DETAILS: ${e.workflowName}`,
        size: "lg",
        loading: m.value,
        error: v.value || void 0,
        onClose: F[4] || (F[4] = (Q) => n("close"))
      }, {
        body: h(() => [
          d.value ? (a(), i(q, { key: 0 }, [
            s("section", rp, [
              b(no, { variant: "section" }, {
                default: h(() => [
                  $("MODELS USED (" + f(d.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              d.value.models.length === 0 ? (a(), i("div", cp, " No models used in this workflow ")) : y("", !0),
              (a(!0), i(q, null, he(d.value.models, (Q) => {
                var Pe;
                return a(), i("div", {
                  key: Q.hash || Q.filename,
                  class: "model-card"
                }, [
                  s("div", up, [
                    F[6] || (F[6] = s("span", { class: "model-icon" }, "📦", -1)),
                    s("span", dp, f(Q.filename), 1)
                  ]),
                  s("div", fp, [
                    s("div", mp, [
                      F[7] || (F[7] = s("span", { class: "label" }, "Status:", -1)),
                      s("span", {
                        class: Fe(["value", S(Q.status)])
                      }, f(T(Q.status)), 3)
                    ]),
                    s("div", vp, [
                      s("span", pp, [
                        F[8] || (F[8] = $(" Importance: ", -1)),
                        b(Jr, {
                          size: 14,
                          title: "About importance levels",
                          onClick: F[0] || (F[0] = (te) => p.value = !0)
                        })
                      ]),
                      b(Nn, {
                        "model-value": w.value[Q.filename] || Q.importance,
                        options: C,
                        "onUpdate:modelValue": (te) => ae(Q.filename, te)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    Q.loaded_by && Q.loaded_by.length > 0 ? (a(), i("div", gp, [
                      F[9] || (F[9] = s("span", { class: "label" }, "Loaded by:", -1)),
                      s("div", hp, [
                        (a(!0), i(q, null, he(B(Q), (te, ge) => (a(), i("div", {
                          key: `${te.node_id}-${ge}`,
                          class: "node-reference"
                        }, f(te.node_type) + " (Node #" + f(te.node_id) + ") ", 1))), 128)),
                        Q.loaded_by.length > 3 ? (a(), i("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (te) => E(Q.hash || Q.filename)
                        }, f(j(Q.hash || Q.filename) ? "▼ Show less" : `▶ View all (${Q.loaded_by.length})`), 9, yp)) : y("", !0)
                      ])
                    ])) : y("", !0),
                    Q.size_mb ? (a(), i("div", wp, [
                      F[10] || (F[10] = s("span", { class: "label" }, "Size:", -1)),
                      s("span", _p, f(Q.size_mb) + " MB", 1)
                    ])) : y("", !0),
                    Q.has_category_mismatch ? (a(), i("div", kp, [
                      F[13] || (F[13] = s("span", { class: "label" }, "Location issue:", -1)),
                      s("span", bp, [
                        F[11] || (F[11] = $(" In ", -1)),
                        s("code", null, f(Q.actual_category) + "/", 1),
                        F[12] || (F[12] = $(" but loader needs ", -1)),
                        s("code", null, f((Pe = Q.expected_categories) == null ? void 0 : Pe[0]) + "/", 1)
                      ])
                    ])) : y("", !0)
                  ]),
                  Q.status !== "available" ? (a(), i("div", $p, [
                    Q.status === "downloadable" ? (a(), R(Oe, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: F[1] || (F[1] = (te) => n("resolve"))
                    }, {
                      default: h(() => [...F[14] || (F[14] = [
                        $(" Download ", -1)
                      ])]),
                      _: 1
                    })) : Q.status === "category_mismatch" && Q.file_path ? (a(), R(Oe, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (te) => fe(Q.file_path)
                    }, {
                      default: h(() => [...F[15] || (F[15] = [
                        $(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : Q.status !== "path_mismatch" ? (a(), R(Oe, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: F[2] || (F[2] = (te) => n("resolve"))
                    }, {
                      default: h(() => [...F[16] || (F[16] = [
                        $(" Resolve ", -1)
                      ])]),
                      _: 1
                    })) : y("", !0)
                  ])) : y("", !0)
                ]);
              }), 128))
            ]),
            s("section", Cp, [
              b(no, { variant: "section" }, {
                default: h(() => [
                  $("NODES USED (" + f(d.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              d.value.nodes.length === 0 ? (a(), i("div", xp, " No custom nodes used in this workflow ")) : y("", !0),
              (a(!0), i(q, null, he(d.value.nodes, (Q, Pe) => (a(), i("div", {
                key: `${Q.name}-${Q.status}-${Pe}`,
                class: "node-item"
              }, [
                s("span", {
                  class: Fe(["node-status", M(Q.status)])
                }, f(P(Q.status)), 3),
                s("div", Sp, [
                  s("div", Ip, [
                    s("span", Ep, f(Q.name), 1),
                    s("span", Tp, f(A(Q.status)), 1),
                    Q.version ? (a(), i("span", Mp, "v" + f(Q.version), 1)) : y("", !0),
                    Q.status === "uninstallable" && Q.package_id && !x.value.has(Q.package_id) ? (a(), i("button", {
                      key: 1,
                      class: "node-install-link",
                      onClick: (te) => ue(Q)
                    }, " Install ", 8, Pp)) : Q.status === "uninstallable" && Q.package_id && x.value.has(Q.package_id) ? (a(), i("span", Rp, " Queued ")) : y("", !0)
                  ]),
                  Q.guidance ? (a(), i("div", Np, f(Q.guidance), 1)) : y("", !0)
                ])
              ]))), 128))
            ])
          ], 64)) : y("", !0)
        ]),
        footer: h(() => [
          b(Oe, {
            variant: "secondary",
            onClick: F[3] || (F[3] = (Q) => n("close"))
          }, {
            default: h(() => [...F[17] || (F[17] = [
              $(" Close ", -1)
            ])]),
            _: 1
          }),
          g.value ? (a(), R(Oe, {
            key: 0,
            variant: "primary",
            onClick: we
          }, {
            default: h(() => [...F[18] || (F[18] = [
              $(" Save Changes ", -1)
            ])]),
            _: 1
          })) : y("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      b(cs, {
        show: p.value,
        title: "Model Importance Levels",
        onClose: F[5] || (F[5] = (Q) => p.value = !1)
      }, {
        content: h(() => [...F[19] || (F[19] = [
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
}), Lp = /* @__PURE__ */ Se(Dp, [["__scopeId", "data-v-543076d9"]]), it = ro({
  items: [],
  status: "idle"
});
let ks = null;
function Yr() {
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
    await Op(e), e.status = "completed", e.progress = 100;
  } catch (t) {
    e.status = "failed", e.error = t instanceof Error ? t.message : "Download failed", e.retries++;
  } finally {
    it.status = "idle", go();
  }
}
async function Op(e) {
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
    }, 250), g = () => {
      window.clearInterval(v);
    };
    l.onmessage = (w) => {
      try {
        const p = JSON.parse(w.data);
        switch (p.type) {
          case "progress":
            e.downloaded = p.downloaded || 0, e.size = p.total || e.size, c = Date.now();
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
            d = !0, g(), l.close(), ks = null, t();
            break;
          case "error":
            d = !0, g(), l.close(), ks = null, o(new Error(p.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, l.onerror = () => {
      g(), l.close(), ks = null, d || o(new Error("Connection lost"));
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
        id: Yr(),
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
function No() {
  function e(C) {
    for (const S of C) {
      if (it.items.some(
        (P) => P.url === S.url && P.targetPath === S.targetPath && ["queued", "downloading", "paused", "completed"].includes(P.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${S.filename}`);
        continue;
      }
      const M = {
        id: Yr(),
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
  const d = N(
    () => it.items.find((C) => C.status === "downloading")
  ), m = N(
    () => it.items.filter((C) => C.status === "queued")
  ), v = N(
    () => it.items.filter((C) => C.status === "completed")
  ), g = N(
    () => it.items.filter((C) => C.status === "failed")
  ), w = N(
    () => it.items.filter((C) => C.status === "paused")
  ), p = N(() => it.items.length > 0), _ = N(
    () => it.items.filter((C) => C.status === "queued" || C.status === "downloading").length
  ), x = N(
    () => it.items.some((C) => C.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: Ln(it),
    // Computed
    currentDownload: d,
    queuedItems: m,
    completedItems: v,
    failedItems: g,
    pausedItems: w,
    hasItems: p,
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
function Xr() {
  const e = k(null), t = k(null), o = k([]), n = k([]), l = k(!1), r = k(null);
  async function u(T, M) {
    var A;
    if (!((A = window.app) != null && A.api))
      throw new Error("ComfyUI API not available");
    const P = await window.app.api.fetchApi(T, M);
    if (!P.ok) {
      const B = await P.json().catch(() => ({})), j = B.error || B.message || `Request failed: ${P.status}`;
      throw new Error(j);
    }
    return P.json();
  }
  async function c(T) {
    l.value = !0, r.value = null;
    try {
      let M;
      return Ao() || (M = await u(
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
  async function d(T, M, P, A) {
    l.value = !0, r.value = null;
    try {
      let B;
      if (!Ao()) {
        const j = Object.fromEntries(M), E = Object.fromEntries(P), V = A ? Array.from(A) : [];
        B = await u(
          `/v2/comfygit/workflow/${T}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: j,
              model_choices: E,
              skipped_packages: V
            })
          }
        );
      }
      return t.value = B, B;
    } catch (B) {
      const j = B instanceof Error ? B.message : "Unknown error occurred";
      throw r.value = j, B;
    } finally {
      l.value = !1;
    }
  }
  async function m(T, M = 10) {
    l.value = !0, r.value = null;
    try {
      let P;
      return Ao() || (P = await u(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: T, limit: M })
        }
      )), o.value = P.results, P.results;
    } catch (P) {
      const A = P instanceof Error ? P.message : "Unknown error occurred";
      throw r.value = A, P;
    } finally {
      l.value = !1;
    }
  }
  async function v(T, M = 10) {
    l.value = !0, r.value = null;
    try {
      let P;
      return Ao() || (P = await u(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: T, limit: M })
        }
      )), n.value = P.results, P.results;
    } catch (P) {
      const A = P instanceof Error ? P.message : "Unknown error occurred";
      throw r.value = A, P;
    } finally {
      l.value = !1;
    }
  }
  const g = ro({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: [],
    nodesInstalled: []
  });
  function w() {
    g.phase = "idle", g.currentFile = void 0, g.currentFileIndex = void 0, g.totalFiles = void 0, g.bytesDownloaded = void 0, g.bytesTotal = void 0, g.completedFiles = [], g.nodesToInstall = [], g.nodesInstalled = [], g.installError = void 0, g.needsRestart = void 0, g.error = void 0, g.nodeInstallProgress = void 0;
  }
  async function p(T) {
    g.phase = "installing", g.nodesInstalled = [], g.installError = void 0, g.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      return Ao(), await _(T);
    } catch (M) {
      const P = M instanceof Error ? M.message : "Failed to install nodes";
      throw g.installError = P, M;
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
          packages: g.nodesToInstall
        })
      }
    );
    if (g.nodeInstallProgress) {
      g.nodeInstallProgress.totalNodes = g.nodesToInstall.length;
      const A = new Map(((P = M.failed) == null ? void 0 : P.map((B) => [B.node_id, B.error])) || []);
      for (let B = 0; B < g.nodesToInstall.length; B++) {
        const j = g.nodesToInstall[B], E = A.get(j);
        g.nodeInstallProgress.completedNodes.push({
          node_id: j,
          success: !E,
          error: E
        });
      }
    }
    return g.nodesInstalled = M.nodes_installed, g.needsRestart = M.nodes_installed.length > 0, M.failed && M.failed.length > 0 && (g.installError = `${M.failed.length} package(s) failed to install`), M;
  }
  async function x(T, M, P) {
    w(), g.phase = "resolving", r.value = null;
    const A = Object.fromEntries(M), B = Object.fromEntries(P);
    try {
      const j = await fetch(`/v2/comfygit/workflow/${T}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: A,
          model_choices: B
        })
      });
      if (!j.ok)
        throw new Error(`Request failed: ${j.status}`);
      if (!j.body)
        throw new Error("No response body");
      const E = j.body.getReader(), V = new TextDecoder();
      let ae = "";
      for (; ; ) {
        const { done: fe, value: ue } = await E.read();
        if (fe) break;
        ae += V.decode(ue, { stream: !0 });
        const we = ae.split(`

`);
        ae = we.pop() || "";
        for (const se of we) {
          if (!se.trim()) continue;
          const F = se.split(`
`);
          let Q = "", Pe = "";
          for (const te of F)
            te.startsWith("event: ") ? Q = te.slice(7) : te.startsWith("data: ") && (Pe = te.slice(6));
          if (Pe)
            try {
              const te = JSON.parse(Pe);
              C(Q, te);
            } catch (te) {
              console.warn("Failed to parse SSE event:", te);
            }
        }
      }
    } catch (j) {
      const E = j instanceof Error ? j.message : "Unknown error occurred";
      throw r.value = E, g.error = E, g.phase = "error", j;
    }
  }
  function C(T, M) {
    switch (T) {
      case "batch_start":
        g.phase = "downloading", g.totalFiles = M.total;
        break;
      case "file_start":
        g.currentFile = M.filename, g.currentFileIndex = M.index, g.bytesDownloaded = 0, g.bytesTotal = void 0;
        break;
      case "file_progress":
        g.bytesDownloaded = M.downloaded, g.bytesTotal = M.total;
        break;
      case "file_complete":
        g.completedFiles.push({
          filename: M.filename,
          success: M.success,
          error: M.error
        });
        break;
      case "batch_complete":
        break;
      case "done":
        g.nodesToInstall = M.nodes_to_install || [], M.download_results && (g.completedFiles = M.download_results), g.phase = "complete";
        break;
      case "error":
        g.error = M.message, g.phase = "error", r.value = M.message;
        break;
    }
  }
  function S(T, M) {
    const { addToQueue: P } = No(), A = M.filter((B) => B.url && B.target_path).map((B) => ({
      workflow: T,
      filename: B.filename,
      url: B.url,
      targetPath: B.target_path,
      size: B.size || 0,
      type: "model"
    }));
    return A.length > 0 && P(A), A.length;
  }
  return {
    // State
    result: e,
    appliedResult: t,
    searchResults: o,
    modelSearchResults: n,
    isLoading: l,
    error: r,
    progress: g,
    // Methods
    analyzeWorkflow: c,
    applyResolution: d,
    applyResolutionWithProgress: x,
    installNodes: p,
    searchNodes: m,
    searchModels: v,
    resetProgress: w,
    queueModelDownloads: S
  };
}
const Up = { class: "resolution-stepper" }, zp = { class: "stepper-header" }, Fp = ["onClick"], Vp = {
  key: 0,
  class: "step-icon"
}, Bp = {
  key: 1,
  class: "step-number"
}, Wp = { class: "step-label" }, Gp = {
  key: 0,
  class: "step-connector"
}, jp = { class: "stepper-content" }, Hp = /* @__PURE__ */ be({
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
    function u(m) {
      return l(m) ? "state-complete" : r(m) ? "state-partial" : "state-pending";
    }
    function c(m) {
      return !1;
    }
    function d(m) {
      n("step-change", m);
    }
    return (m, v) => (a(), i("div", Up, [
      s("div", zp, [
        (a(!0), i(q, null, he(e.steps, (g, w) => (a(), i("div", {
          key: g.id,
          class: Fe(["step", {
            active: e.currentStep === g.id,
            completed: l(g.id),
            "in-progress": r(g.id),
            disabled: c(g.id)
          }]),
          onClick: (p) => d(g.id)
        }, [
          s("div", {
            class: Fe(["step-indicator", u(g.id)])
          }, [
            l(g.id) ? (a(), i("span", Vp, "✓")) : (a(), i("span", Bp, f(w + 1), 1))
          ], 2),
          s("div", Wp, f(g.label), 1),
          w < e.steps.length - 1 ? (a(), i("div", Gp)) : y("", !0)
        ], 10, Fp))), 128))
      ]),
      s("div", jp, [
        st(m.$slots, "default", {}, void 0)
      ])
    ]));
  }
}), qp = /* @__PURE__ */ Se(Hp, [["__scopeId", "data-v-2a7b3af8"]]), Kp = /* @__PURE__ */ be({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(e) {
    const t = e, o = N(() => t.confidence >= 0.9 ? "high" : t.confidence >= 0.7 ? "medium" : "low"), n = N(() => `confidence-${o.value}`), l = N(() => t.showPercentage ? `${Math.round(t.confidence * 100)}%` : o.value.charAt(0).toUpperCase() + o.value.slice(1));
    return (r, u) => (a(), i("span", {
      class: Fe(["confidence-badge", n.value, e.size])
    }, f(l.value), 3));
  }
}), jn = /* @__PURE__ */ Se(Kp, [["__scopeId", "data-v-17ec4b80"]]), Jp = { class: "node-info" }, Qp = { class: "node-info-text" }, Yp = { class: "item-body" }, Xp = {
  key: 0,
  class: "resolved-state"
}, Zp = {
  key: 1,
  class: "multiple-options"
}, eg = {
  key: 0,
  class: "installed-packs-section"
}, tg = { class: "installed-packs-list" }, sg = ["onClick"], og = { class: "installed-pack-name" }, ng = { class: "installed-pack-source" }, ag = { class: "options-list" }, lg = ["onClick"], ig = ["name", "value", "checked", "onChange"], rg = { class: "option-content" }, cg = { class: "option-header" }, ug = { class: "option-package-id" }, dg = {
  key: 0,
  class: "option-title"
}, fg = { class: "option-meta" }, mg = {
  key: 0,
  class: "installed-badge"
}, vg = { class: "action-buttons" }, pg = {
  key: 2,
  class: "unresolved"
}, gg = {
  key: 0,
  class: "installed-packs-section"
}, hg = { class: "installed-packs-list" }, yg = ["onClick"], wg = { class: "installed-pack-name" }, _g = { class: "installed-pack-source" }, kg = {
  key: 1,
  class: "searching-state"
}, bg = { class: "options-list" }, $g = ["onClick"], Cg = ["name", "value"], xg = { class: "option-content" }, Sg = { class: "option-header" }, Ig = { class: "option-package-id" }, Eg = {
  key: 0,
  class: "option-description"
}, Tg = { class: "option-meta" }, Mg = {
  key: 0,
  class: "installed-badge"
}, Pg = {
  key: 3,
  class: "unresolved-message"
}, Rg = { class: "action-buttons" }, Ng = /* @__PURE__ */ be({
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
    function l(v, g = 80) {
      return v.length <= g ? v : v.slice(0, g - 3) + "...";
    }
    const r = N(() => !!o.choice);
    N(() => {
      var v;
      return (v = o.choice) == null ? void 0 : v.action;
    }), N(() => {
      var v;
      return (v = o.choice) == null ? void 0 : v.package_id;
    });
    const u = N(() => o.installedNodePacks || []), c = N(() => {
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
    return (v, g) => (a(), i("div", {
      class: Fe(["node-resolution-item", { selected: e.isSelected, ambiguous: e.hasMultipleOptions, resolved: r.value }])
    }, [
      s("div", Jp, [
        s("span", Qp, [
          g[7] || (g[7] = $("Node type: ", -1)),
          s("code", null, f(e.nodeType), 1)
        ]),
        e.statusLabel ? (a(), i("span", {
          key: 0,
          class: Fe(["status-badge", c.value])
        }, f(e.statusLabel), 3)) : y("", !0)
      ]),
      s("div", Yp, [
        r.value ? (a(), i("div", Xp, [
          b(Oe, {
            variant: "ghost",
            size: "sm",
            onClick: g[0] || (g[0] = (w) => n("clear-choice"))
          }, {
            default: h(() => [...g[8] || (g[8] = [
              $(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (a(), i("div", Zp, [
          u.value.length > 0 ? (a(), i("div", eg, [
            g[9] || (g[9] = s("p", { class: "options-prompt" }, "Or map to an installed node pack:", -1)),
            s("div", tg, [
              (a(!0), i(q, null, he(u.value, (w) => (a(), i("button", {
                key: w.package_id,
                type: "button",
                class: "installed-pack-chip",
                onClick: (p) => n("installed-pack-selected", w.package_id)
              }, [
                s("span", og, f(w.package_id), 1),
                s("span", ng, f(m(w.source)), 1)
              ], 8, sg))), 128))
            ])
          ])) : y("", !0),
          g[13] || (g[13] = s("p", { class: "options-prompt" }, "Potential matches:", -1)),
          s("div", ag, [
            (a(!0), i(q, null, he(e.options, (w, p) => (a(), i("label", {
              key: w.package_id,
              class: Fe(["option-card", { selected: e.selectedOptionIndex === p }]),
              onClick: (_) => d(p)
            }, [
              s("input", {
                type: "radio",
                name: `node-option-${e.nodeType}`,
                value: p,
                checked: e.selectedOptionIndex === p,
                onChange: (_) => d(p)
              }, null, 40, ig),
              s("div", rg, [
                s("div", cg, [
                  s("span", ug, f(w.package_id), 1),
                  b(jn, {
                    confidence: w.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                w.title && w.title !== w.package_id ? (a(), i("div", dg, f(w.title), 1)) : y("", !0),
                s("div", fg, [
                  w.is_installed ? (a(), i("span", mg, "Already Installed")) : y("", !0)
                ])
              ])
            ], 10, lg))), 128))
          ]),
          s("div", vg, [
            b(Oe, {
              variant: "secondary",
              size: "sm",
              onClick: g[1] || (g[1] = (w) => n("search"))
            }, {
              default: h(() => [...g[10] || (g[10] = [
                $(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            b(Oe, {
              variant: "secondary",
              size: "sm",
              onClick: g[2] || (g[2] = (w) => n("manual-entry"))
            }, {
              default: h(() => [...g[11] || (g[11] = [
                $(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            b(Oe, {
              variant: "secondary",
              size: "sm",
              onClick: g[3] || (g[3] = (w) => n("mark-optional"))
            }, {
              default: h(() => [...g[12] || (g[12] = [
                $(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (a(), i("div", pg, [
          u.value.length > 0 ? (a(), i("div", gg, [
            g[14] || (g[14] = s("p", { class: "options-prompt" }, "Map to an installed node pack:", -1)),
            s("div", hg, [
              (a(!0), i(q, null, he(u.value, (w) => (a(), i("button", {
                key: w.package_id,
                type: "button",
                class: "installed-pack-chip",
                onClick: (p) => n("installed-pack-selected", w.package_id)
              }, [
                s("span", wg, f(w.package_id), 1),
                s("span", _g, f(m(w.source)), 1)
              ], 8, yg))), 128))
            ])
          ])) : y("", !0),
          e.isSearching ? (a(), i("div", kg, [...g[15] || (g[15] = [
            s("span", { class: "searching-spinner" }, null, -1),
            s("span", null, "Searching registry...", -1)
          ])])) : e.searchResults && e.searchResults.length > 0 ? (a(), i(q, { key: 2 }, [
            g[16] || (g[16] = s("p", { class: "options-prompt" }, "Potential matches found:", -1)),
            s("div", bg, [
              (a(!0), i(q, null, he(e.searchResults.slice(0, 5), (w, p) => (a(), i("label", {
                key: w.package_id,
                class: "option-card",
                onClick: (_) => n("search-result-selected", w)
              }, [
                s("input", {
                  type: "radio",
                  name: `search-result-${e.nodeType}`,
                  value: p
                }, null, 8, Cg),
                s("div", xg, [
                  s("div", Sg, [
                    s("span", Ig, f(w.package_id), 1),
                    b(jn, {
                      confidence: w.match_confidence,
                      size: "sm"
                    }, null, 8, ["confidence"])
                  ]),
                  w.description ? (a(), i("div", Eg, f(l(w.description)), 1)) : y("", !0),
                  s("div", Tg, [
                    w.is_installed ? (a(), i("span", Mg, "Already Installed")) : y("", !0)
                  ])
                ])
              ], 8, $g))), 128))
            ])
          ], 64)) : (a(), i("div", Pg, [...g[17] || (g[17] = [
            s("span", { class: "warning-icon" }, "⚠", -1),
            s("span", null, "No matching package found in registry", -1)
          ])])),
          s("div", Rg, [
            b(Oe, {
              variant: "secondary",
              size: "sm",
              onClick: g[4] || (g[4] = (w) => n("search"))
            }, {
              default: h(() => {
                var w;
                return [
                  $(f((w = e.searchResults) != null && w.length ? "Refine Search" : "Search Registry"), 1)
                ];
              }),
              _: 1
            }),
            b(Oe, {
              variant: "secondary",
              size: "sm",
              onClick: g[5] || (g[5] = (w) => n("manual-entry"))
            }, {
              default: h(() => [...g[18] || (g[18] = [
                $(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            b(Oe, {
              variant: "secondary",
              size: "sm",
              onClick: g[6] || (g[6] = (w) => n("mark-optional"))
            }, {
              default: h(() => [...g[19] || (g[19] = [
                $(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), Dg = /* @__PURE__ */ Se(Ng, [["__scopeId", "data-v-fb0bbf03"]]), Lg = { class: "item-navigator" }, Og = { class: "nav-item-info" }, Ag = ["title"], Ug = { class: "nav-controls" }, zg = { class: "nav-arrows" }, Fg = ["disabled"], Vg = ["disabled"], Bg = { class: "nav-position" }, Wg = /* @__PURE__ */ be({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(e, { emit: t }) {
    const o = t;
    return (n, l) => (a(), i("div", Lg, [
      s("div", Og, [
        s("code", {
          class: "item-name",
          title: e.itemName
        }, f(e.itemName), 9, Ag)
      ]),
      s("div", Ug, [
        s("div", zg, [
          s("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === 0,
            onClick: l[0] || (l[0] = (r) => o("prev")),
            title: "Previous item"
          }, " ← ", 8, Fg),
          s("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === e.totalItems - 1,
            onClick: l[1] || (l[1] = (r) => o("next")),
            title: "Next item"
          }, " → ", 8, Vg)
        ]),
        s("span", Bg, f(e.currentIndex + 1) + "/" + f(e.totalItems), 1)
      ])
    ]));
  }
}), Zr = /* @__PURE__ */ Se(Wg, [["__scopeId", "data-v-74af7920"]]), Gg = ["type", "value", "placeholder", "disabled"], jg = {
  key: 0,
  class: "base-input-error"
}, Hg = /* @__PURE__ */ be({
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
      }, null, 42, Gg),
      e.error ? (a(), i("span", jg, f(e.error), 1)) : y("", !0)
    ], 2));
  }
}), wt = /* @__PURE__ */ Se(Hg, [["__scopeId", "data-v-9ba02cdc"]]), qg = { class: "node-resolution-step" }, Kg = {
  key: 0,
  class: "auto-resolved-section"
}, Jg = { class: "section-header" }, Qg = { class: "stat-badge" }, Yg = { class: "resolved-packages-list" }, Xg = { class: "package-info" }, Zg = { class: "package-id" }, eh = { class: "node-count" }, th = { class: "package-actions" }, sh = {
  key: 0,
  class: "status-badge install"
}, oh = {
  key: 1,
  class: "status-badge skip"
}, nh = ["onClick"], ah = {
  key: 1,
  class: "section-divider"
}, lh = { class: "step-header" }, ih = { class: "stat-badge" }, rh = {
  key: 1,
  class: "step-body"
}, ch = {
  key: 3,
  class: "empty-state"
}, uh = { class: "node-modal-body" }, dh = { class: "node-search-results-container" }, fh = {
  key: 0,
  class: "node-search-results"
}, mh = ["onClick"], vh = { class: "node-result-header" }, ph = { class: "node-result-package-id" }, gh = {
  key: 0,
  class: "node-result-description"
}, hh = {
  key: 1,
  class: "node-empty-state"
}, yh = {
  key: 2,
  class: "node-empty-state"
}, wh = {
  key: 3,
  class: "node-empty-state"
}, _h = { class: "node-manual-entry-modal" }, kh = { class: "node-modal-body" }, bh = { class: "node-modal-actions" }, $h = /* @__PURE__ */ be({
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
    const o = e, n = t, { searchNodes: l } = Xr(), r = k(0), u = k(!1), c = k(!1), d = k(""), m = k(""), v = k([]), g = k(!1), w = k(/* @__PURE__ */ new Map()), p = k(/* @__PURE__ */ new Set()), _ = k(!1);
    function x() {
      _.value && ge(), _.value = !1;
    }
    const C = N(() => o.nodes[r.value]), S = N(() => o.nodes.filter((K) => o.nodeChoices.has(K.node_type)).length), T = N(() => C.value ? w.value.get(C.value.node_type) || [] : []), M = N(() => C.value ? p.value.has(C.value.node_type) : !1);
    kt(C, async (K) => {
      var X;
      K && ((X = K.options) != null && X.length || w.value.has(K.node_type) || p.value.has(K.node_type) || o.nodeChoices.has(K.node_type) || await P(K.node_type));
    }, { immediate: !0 });
    async function P(K) {
      p.value.add(K);
      try {
        const X = await l(K, 5);
        w.value.set(K, X);
      } catch {
        w.value.set(K, []);
      } finally {
        p.value.delete(K);
      }
    }
    const A = N(() => o.autoResolvedPackages.filter((K) => !o.skippedPackages.has(K.package_id)).length);
    function B(K) {
      return o.skippedPackages.has(K);
    }
    function j(K) {
      n("package-skip", K);
    }
    const E = N(() => {
      var X;
      if (!C.value) return "not-found";
      const K = o.nodeChoices.get(C.value.node_type);
      if (K)
        switch (K.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (X = C.value.options) != null && X.length ? "ambiguous" : "not-found";
    }), V = N(() => {
      var X;
      if (!C.value) return;
      const K = o.nodeChoices.get(C.value.node_type);
      if (K)
        switch (K.action) {
          case "install":
            return K.package_id ? `→ ${K.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (X = C.value.options) != null && X.length ? `${C.value.options.length} matches` : "Not Found";
    });
    function ae(K) {
      K >= 0 && K < o.nodes.length && (r.value = K);
    }
    function fe() {
      var K;
      for (let X = r.value + 1; X < o.nodes.length; X++) {
        const xe = o.nodes[X];
        if (!((K = o.nodeChoices) != null && K.has(xe.node_type))) {
          ae(X);
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
    function se(K) {
      C.value && (n("option-selected", C.value.node_type, K), Pt(() => fe()));
    }
    function F() {
      C.value && n("clear-choice", C.value.node_type);
    }
    function Q() {
      C.value && (d.value = C.value.node_type, v.value = T.value, u.value = !0, Ge(d.value));
    }
    function Pe() {
      m.value = "", c.value = !0;
    }
    function te(K) {
      C.value && (n("manual-entry", C.value.node_type, K), Pt(() => fe()));
    }
    function ge() {
      u.value = !1, d.value = "", v.value = [];
    }
    function O() {
      c.value = !1, m.value = "";
    }
    let me = null;
    function Re() {
      me && clearTimeout(me), me = setTimeout(() => {
        Ge(d.value);
      }, 300);
    }
    async function Ge(K) {
      if (!K.trim()) {
        v.value = [];
        return;
      }
      g.value = !0;
      try {
        v.value = await l(K, 10);
      } catch {
        v.value = [];
      } finally {
        g.value = !1;
      }
    }
    function Ee(K) {
      C.value && (n("manual-entry", C.value.node_type, K.package_id), ge(), Pt(() => fe()));
    }
    function H(K) {
      C.value && (n("manual-entry", C.value.node_type, K.package_id), Pt(() => fe()));
    }
    function Z() {
      !C.value || !m.value.trim() || (n("manual-entry", C.value.node_type, m.value.trim()), O(), Pt(() => fe()));
    }
    return (K, X) => {
      var xe, ce;
      return a(), i("div", qg, [
        e.autoResolvedPackages.length > 0 ? (a(), i("div", Kg, [
          s("div", Jg, [
            X[6] || (X[6] = s("div", { class: "section-info" }, [
              s("h4", { class: "section-title" }, "Packages to Install"),
              s("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            s("span", Qg, f(A.value) + "/" + f(e.autoResolvedPackages.length) + " to install", 1)
          ]),
          s("div", Yg, [
            (a(!0), i(q, null, he(e.autoResolvedPackages, (le) => (a(), i("div", {
              key: le.package_id,
              class: "resolved-package-item"
            }, [
              s("div", Xg, [
                s("code", Zg, f(le.package_id), 1),
                s("span", eh, f(le.node_types_count) + " node type" + f(le.node_types_count > 1 ? "s" : ""), 1)
              ]),
              s("div", th, [
                B(le.package_id) ? (a(), i("span", oh, " SKIPPED ")) : (a(), i("span", sh, " WILL INSTALL ")),
                s("button", {
                  class: "toggle-skip-btn",
                  onClick: (I) => j(le.package_id)
                }, f(B(le.package_id) ? "Include" : "Skip"), 9, nh)
              ])
            ]))), 128))
          ])
        ])) : y("", !0),
        e.autoResolvedPackages.length > 0 && e.nodes.length > 0 ? (a(), i("div", ah)) : y("", !0),
        e.nodes.length > 0 ? (a(), i(q, { key: 2 }, [
          s("div", lh, [
            X[7] || (X[7] = s("div", { class: "step-info" }, [
              s("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              s("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            s("span", ih, f(S.value) + "/" + f(e.nodes.length) + " resolved", 1)
          ]),
          C.value ? (a(), R(Zr, {
            key: 0,
            "item-name": C.value.node_type,
            "current-index": r.value,
            "total-items": e.nodes.length,
            onPrev: X[0] || (X[0] = (le) => ae(r.value - 1)),
            onNext: X[1] || (X[1] = (le) => ae(r.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
          C.value ? (a(), i("div", rh, [
            b(Dg, {
              "node-type": C.value.node_type,
              "has-multiple-options": !!((xe = C.value.options) != null && xe.length),
              options: C.value.options,
              choice: (ce = e.nodeChoices) == null ? void 0 : ce.get(C.value.node_type),
              status: E.value,
              "status-label": V.value,
              "search-results": T.value,
              "is-searching": M.value,
              "installed-node-packs": e.installedNodePacks,
              onMarkOptional: ue,
              onSkip: we,
              onManualEntry: Pe,
              onSearch: Q,
              onOptionSelected: se,
              onClearChoice: F,
              onSearchResultSelected: H,
              onInstalledPackSelected: te
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label", "search-results", "is-searching", "installed-node-packs"])
          ])) : y("", !0)
        ], 64)) : y("", !0),
        e.nodes.length === 0 && e.autoResolvedPackages.length === 0 ? (a(), i("div", ch, [...X[8] || (X[8] = [
          s("p", null, "No nodes need resolution.", -1)
        ])])) : y("", !0),
        (a(), R(Rt, { to: "body" }, [
          u.value ? (a(), i("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: X[4] || (X[4] = mt((le) => _.value = !0, ["self"])),
            onMouseup: mt(x, ["self"])
          }, [
            s("div", {
              class: "node-search-modal",
              onMousedown: X[3] || (X[3] = (le) => _.value = !1)
            }, [
              s("div", { class: "node-modal-header" }, [
                X[9] || (X[9] = s("h4", null, "Search Node Packages", -1)),
                s("button", {
                  class: "node-modal-close-btn",
                  onClick: ge
                }, "✕")
              ]),
              s("div", uh, [
                b(wt, {
                  modelValue: d.value,
                  "onUpdate:modelValue": X[2] || (X[2] = (le) => d.value = le),
                  placeholder: "Search by node type, package name...",
                  onInput: Re
                }, null, 8, ["modelValue"]),
                s("div", dh, [
                  v.value.length > 0 ? (a(), i("div", fh, [
                    (a(!0), i(q, null, he(v.value, (le) => (a(), i("div", {
                      key: le.package_id,
                      class: "node-search-result-item",
                      onClick: (I) => Ee(le)
                    }, [
                      s("div", vh, [
                        s("code", ph, f(le.package_id), 1),
                        le.match_confidence ? (a(), R(jn, {
                          key: 0,
                          confidence: le.match_confidence,
                          size: "sm"
                        }, null, 8, ["confidence"])) : y("", !0)
                      ]),
                      le.description ? (a(), i("div", gh, f(le.description), 1)) : y("", !0)
                    ], 8, mh))), 128))
                  ])) : g.value ? (a(), i("div", hh, "Searching...")) : d.value ? (a(), i("div", yh, 'No packages found matching "' + f(d.value) + '"', 1)) : (a(), i("div", wh, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : y("", !0)
        ])),
        (a(), R(Rt, { to: "body" }, [
          c.value ? (a(), i("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: mt(O, ["self"])
          }, [
            s("div", _h, [
              s("div", { class: "node-modal-header" }, [
                X[10] || (X[10] = s("h4", null, "Enter Package Manually", -1)),
                s("button", {
                  class: "node-modal-close-btn",
                  onClick: O
                }, "✕")
              ]),
              s("div", kh, [
                b(wt, {
                  modelValue: m.value,
                  "onUpdate:modelValue": X[5] || (X[5] = (le) => m.value = le),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                s("div", bh, [
                  b(Oe, {
                    variant: "secondary",
                    onClick: O
                  }, {
                    default: h(() => [...X[11] || (X[11] = [
                      $("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  b(Oe, {
                    variant: "primary",
                    disabled: !m.value.trim(),
                    onClick: Z
                  }, {
                    default: h(() => [...X[12] || (X[12] = [
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
}), Ch = /* @__PURE__ */ Se($h, [["__scopeId", "data-v-94c6a438"]]), xh = { class: "node-info" }, Sh = { class: "node-info-text" }, Ih = { class: "item-body" }, Eh = {
  key: 0,
  class: "resolved-state"
}, Th = {
  key: 1,
  class: "multiple-options"
}, Mh = { class: "options-list" }, Ph = ["onClick"], Rh = ["name", "value", "checked", "onChange"], Nh = { class: "option-content" }, Dh = { class: "option-header" }, Lh = { class: "option-filename" }, Oh = { class: "option-meta" }, Ah = { class: "option-size" }, Uh = { class: "option-category" }, zh = { class: "option-path" }, Fh = { class: "action-buttons" }, Vh = {
  key: 2,
  class: "unresolved"
}, Bh = { class: "action-buttons" }, Wh = /* @__PURE__ */ be({
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
    const o = e, n = t, l = N(() => !!o.choice);
    N(() => {
      var d;
      return (d = o.choice) == null ? void 0 : d.action;
    }), N(() => {
      var d, m;
      return ((m = (d = o.choice) == null ? void 0 : d.selected_model) == null ? void 0 : m.filename) || "selected";
    });
    const r = N(() => {
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
      s("div", xh, [
        s("span", Sh, [
          m[7] || (m[7] = $("Used by: ", -1)),
          s("code", null, f(e.nodeType), 1)
        ]),
        e.statusLabel ? (a(), i("span", {
          key: 0,
          class: Fe(["status-badge", r.value])
        }, f(e.statusLabel), 3)) : y("", !0)
      ]),
      s("div", Ih, [
        l.value ? (a(), i("div", Eh, [
          b(Oe, {
            variant: "ghost",
            size: "sm",
            onClick: m[0] || (m[0] = (v) => n("clear-choice"))
          }, {
            default: h(() => [...m[8] || (m[8] = [
              $(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (a(), i("div", Th, [
          m[12] || (m[12] = s("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          s("div", Mh, [
            (a(!0), i(q, null, he(e.options, (v, g) => (a(), i("label", {
              key: v.model.hash,
              class: Fe(["option-card", { selected: e.selectedOptionIndex === g }]),
              onClick: (w) => u(g)
            }, [
              s("input", {
                type: "radio",
                name: `model-option-${e.filename}`,
                value: g,
                checked: e.selectedOptionIndex === g,
                onChange: (w) => u(g)
              }, null, 40, Rh),
              s("div", Nh, [
                s("div", Dh, [
                  s("span", Lh, f(v.model.filename), 1),
                  b(jn, {
                    confidence: v.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                s("div", Oh, [
                  s("span", Ah, f(c(v.model.size)), 1),
                  s("span", Uh, f(v.model.category), 1)
                ]),
                s("div", zh, f(v.model.relative_path), 1)
              ])
            ], 10, Ph))), 128))
          ]),
          s("div", Fh, [
            b(Oe, {
              variant: "ghost",
              size: "sm",
              onClick: m[1] || (m[1] = (v) => n("search"))
            }, {
              default: h(() => [...m[9] || (m[9] = [
                $(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            b(Oe, {
              variant: "ghost",
              size: "sm",
              onClick: m[2] || (m[2] = (v) => n("download-url"))
            }, {
              default: h(() => [...m[10] || (m[10] = [
                $(" Download URL ", -1)
              ])]),
              _: 1
            }),
            b(Oe, {
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
        ])) : (a(), i("div", Vh, [
          m[16] || (m[16] = s("div", { class: "unresolved-message" }, [
            s("span", { class: "warning-icon" }, "⚠"),
            s("span", null, "Model not found in workspace")
          ], -1)),
          s("div", Bh, [
            b(Oe, {
              variant: "primary",
              size: "sm",
              onClick: m[4] || (m[4] = (v) => n("search"))
            }, {
              default: h(() => [...m[13] || (m[13] = [
                $(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            b(Oe, {
              variant: "secondary",
              size: "sm",
              onClick: m[5] || (m[5] = (v) => n("download-url"))
            }, {
              default: h(() => [...m[14] || (m[14] = [
                $(" Download URL ", -1)
              ])]),
              _: 1
            }),
            b(Oe, {
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
}), Gh = /* @__PURE__ */ Se(Wh, [["__scopeId", "data-v-8a82fefa"]]), jh = { class: "model-resolution-step" }, Hh = { class: "step-header" }, qh = { class: "step-info" }, Kh = { class: "step-title" }, Jh = { class: "step-description" }, Qh = { class: "stat-badge" }, Yh = {
  key: 1,
  class: "step-body"
}, Xh = {
  key: 2,
  class: "empty-state"
}, Zh = { class: "model-search-modal" }, ey = { class: "model-modal-body" }, ty = {
  key: 0,
  class: "model-search-results"
}, sy = ["onClick"], oy = { class: "model-result-header" }, ny = { class: "model-result-filename" }, ay = { class: "model-result-meta" }, ly = { class: "model-result-category" }, iy = { class: "model-result-size" }, ry = {
  key: 0,
  class: "model-result-path"
}, cy = {
  key: 1,
  class: "model-no-results"
}, uy = {
  key: 2,
  class: "model-searching"
}, dy = { class: "model-download-url-modal" }, fy = { class: "model-modal-body" }, my = { class: "model-input-group" }, vy = { class: "model-input-group" }, py = { class: "model-modal-actions" }, gy = /* @__PURE__ */ be({
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
    function n(te) {
      var ge;
      return te && ((ge = o[te]) == null ? void 0 : ge[0]) || null;
    }
    const l = e, r = t, u = k(0), c = k(!1), d = k(!1), m = k(""), v = k(""), g = k(""), w = k([]), p = k(!1), _ = N(() => l.models[u.value]), x = N(() => l.models.some((te) => te.is_download_intent)), C = N(() => l.models.filter(
      (te) => l.modelChoices.has(te.filename) || te.is_download_intent
    ).length), S = N(() => {
      var ge;
      if (!_.value) return "";
      const te = n((ge = _.value.reference) == null ? void 0 : ge.node_type);
      return te ? `${te}/${_.value.filename}` : "";
    }), T = N(() => {
      var ge;
      if (!_.value) return "not-found";
      const te = l.modelChoices.get(_.value.filename);
      if (te)
        switch (te.action) {
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
    }), M = N(() => {
      var ge, O;
      if (!_.value) return;
      const te = l.modelChoices.get(_.value.filename);
      if (te)
        switch (te.action) {
          case "select":
            return (ge = te.selected_model) != null && ge.filename ? `→ ${te.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return _.value.is_download_intent ? "Pending Download" : (O = _.value.options) != null && O.length ? `${_.value.options.length} matches` : "Not Found";
    });
    function P(te) {
      te >= 0 && te < l.models.length && (u.value = te);
    }
    function A() {
      var te;
      for (let ge = u.value + 1; ge < l.models.length; ge++) {
        const O = l.models[ge];
        if (!O.is_download_intent && !((te = l.modelChoices) != null && te.has(O.filename))) {
          P(ge);
          return;
        }
      }
    }
    function B() {
      _.value && (r("mark-optional", _.value.filename), Pt(() => A()));
    }
    function j() {
      _.value && (r("skip", _.value.filename), Pt(() => A()));
    }
    function E(te) {
      _.value && (r("option-selected", _.value.filename, te), Pt(() => A()));
    }
    function V() {
      _.value && r("clear-choice", _.value.filename);
    }
    function ae() {
      _.value && (m.value = _.value.filename, c.value = !0);
    }
    function fe() {
      _.value && (v.value = _.value.download_source || "", g.value = _.value.target_path || S.value, d.value = !0);
    }
    function ue() {
      c.value = !1, m.value = "", w.value = [];
    }
    function we() {
      d.value = !1, v.value = "", g.value = "";
    }
    function se() {
      p.value = !0, setTimeout(() => {
        p.value = !1;
      }, 300);
    }
    function F(te) {
      _.value && (ue(), Pt(() => A()));
    }
    function Q() {
      !_.value || !v.value.trim() || (r("download-url", _.value.filename, v.value.trim(), g.value.trim() || void 0), we(), Pt(() => A()));
    }
    function Pe(te) {
      if (!te) return "Unknown";
      const ge = te / (1024 * 1024 * 1024);
      return ge >= 1 ? `${ge.toFixed(2)} GB` : `${(te / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (te, ge) => {
      var O, me, Re;
      return a(), i("div", jh, [
        s("div", Hh, [
          s("div", qh, [
            s("h3", Kh, f(x.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            s("p", Jh, f(x.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          s("span", Qh, f(C.value) + "/" + f(e.models.length) + " resolved", 1)
        ]),
        _.value ? (a(), R(Zr, {
          key: 0,
          "item-name": _.value.filename,
          "current-index": u.value,
          "total-items": e.models.length,
          onPrev: ge[0] || (ge[0] = (Ge) => P(u.value - 1)),
          onNext: ge[1] || (ge[1] = (Ge) => P(u.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
        _.value ? (a(), i("div", Yh, [
          b(Gh, {
            filename: _.value.filename,
            "node-type": ((O = _.value.reference) == null ? void 0 : O.node_type) || "Unknown",
            "has-multiple-options": !!((me = _.value.options) != null && me.length),
            options: _.value.options,
            choice: (Re = e.modelChoices) == null ? void 0 : Re.get(_.value.filename),
            status: T.value,
            "status-label": M.value,
            onMarkOptional: B,
            onSkip: j,
            onDownloadUrl: fe,
            onSearch: ae,
            onOptionSelected: E,
            onClearChoice: V
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (a(), i("div", Xh, [...ge[5] || (ge[5] = [
          s("p", null, "No models need resolution.", -1)
        ])])),
        (a(), R(Rt, { to: "body" }, [
          c.value ? (a(), i("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: mt(ue, ["self"])
          }, [
            s("div", Zh, [
              s("div", { class: "model-modal-header" }, [
                ge[6] || (ge[6] = s("h4", null, "Search Workspace Models", -1)),
                s("button", {
                  class: "model-modal-close-btn",
                  onClick: ue
                }, "✕")
              ]),
              s("div", ey, [
                b(wt, {
                  modelValue: m.value,
                  "onUpdate:modelValue": ge[2] || (ge[2] = (Ge) => m.value = Ge),
                  placeholder: "Search by filename, category...",
                  onInput: se
                }, null, 8, ["modelValue"]),
                w.value.length > 0 ? (a(), i("div", ty, [
                  (a(!0), i(q, null, he(w.value, (Ge) => (a(), i("div", {
                    key: Ge.hash,
                    class: "model-search-result-item",
                    onClick: (Ee) => F()
                  }, [
                    s("div", oy, [
                      s("code", ny, f(Ge.filename), 1)
                    ]),
                    s("div", ay, [
                      s("span", ly, f(Ge.category), 1),
                      s("span", iy, f(Pe(Ge.size)), 1)
                    ]),
                    Ge.relative_path ? (a(), i("div", ry, f(Ge.relative_path), 1)) : y("", !0)
                  ], 8, sy))), 128))
                ])) : m.value && !p.value ? (a(), i("div", cy, ' No models found matching "' + f(m.value) + '" ', 1)) : y("", !0),
                p.value ? (a(), i("div", uy, "Searching...")) : y("", !0)
              ])
            ])
          ])) : y("", !0)
        ])),
        (a(), R(Rt, { to: "body" }, [
          d.value ? (a(), i("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: mt(we, ["self"])
          }, [
            s("div", dy, [
              s("div", { class: "model-modal-header" }, [
                ge[7] || (ge[7] = s("h4", null, "Enter Download URL", -1)),
                s("button", {
                  class: "model-modal-close-btn",
                  onClick: we
                }, "✕")
              ]),
              s("div", fy, [
                s("div", my, [
                  ge[8] || (ge[8] = s("label", { class: "model-input-label" }, "Download URL", -1)),
                  b(wt, {
                    modelValue: v.value,
                    "onUpdate:modelValue": ge[3] || (ge[3] = (Ge) => v.value = Ge),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                s("div", vy, [
                  ge[9] || (ge[9] = s("label", { class: "model-input-label" }, "Host Path", -1)),
                  b(wt, {
                    modelValue: g.value,
                    "onUpdate:modelValue": ge[4] || (ge[4] = (Ge) => g.value = Ge),
                    placeholder: S.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                s("div", py, [
                  b(Oe, {
                    variant: "secondary",
                    onClick: we
                  }, {
                    default: h(() => [...ge[10] || (ge[10] = [
                      $("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  b(Oe, {
                    variant: "primary",
                    disabled: !v.value.trim() || !g.value.trim(),
                    onClick: Q
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
}), hy = /* @__PURE__ */ Se(gy, [["__scopeId", "data-v-5c700bfa"]]), yy = { class: "applying-step" }, wy = {
  key: 0,
  class: "phase-content"
}, _y = {
  key: 1,
  class: "phase-content"
}, ky = { class: "phase-description" }, by = { class: "overall-progress" }, $y = { class: "progress-bar" }, Cy = { class: "progress-label" }, xy = { class: "install-list" }, Sy = { class: "install-icon" }, Iy = { key: 0 }, Ey = {
  key: 1,
  class: "spinner"
}, Ty = { key: 2 }, My = { key: 3 }, Py = {
  key: 0,
  class: "install-error"
}, Ry = {
  key: 2,
  class: "phase-content"
}, Ny = { class: "phase-header" }, Dy = { class: "phase-title" }, Ly = { class: "completion-summary" }, Oy = {
  key: 0,
  class: "summary-item success"
}, Ay = { class: "summary-text" }, Uy = {
  key: 1,
  class: "summary-item error"
}, zy = { class: "summary-text" }, Fy = {
  key: 2,
  class: "failed-list"
}, Vy = { class: "failed-node-id" }, By = { class: "failed-error" }, Wy = {
  key: 4,
  class: "summary-item success"
}, Gy = {
  key: 5,
  class: "restart-prompt"
}, jy = {
  key: 3,
  class: "phase-content error"
}, Hy = { class: "error-message" }, qy = /* @__PURE__ */ be({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(e) {
    const t = e, o = N(() => {
      var m, v;
      const c = ((m = t.progress.nodeInstallProgress) == null ? void 0 : m.totalNodes) || t.progress.nodesToInstall.length;
      if (!c) return 0;
      const d = ((v = t.progress.nodeInstallProgress) == null ? void 0 : v.completedNodes.length) ?? 0;
      return Math.round(d / c * 100);
    }), n = N(() => {
      var c;
      return ((c = t.progress.nodeInstallProgress) == null ? void 0 : c.completedNodes.filter((d) => !d.success)) || [];
    }), l = N(() => n.value.length > 0);
    function r(c, d) {
      var v, g;
      const m = (v = t.progress.nodeInstallProgress) == null ? void 0 : v.completedNodes.find((w) => w.node_id === c);
      return m ? m.success ? "complete" : "failed" : ((g = t.progress.nodeInstallProgress) == null ? void 0 : g.currentIndex) === d ? "installing" : "pending";
    }
    function u(c) {
      var d, m;
      return (m = (d = t.progress.nodeInstallProgress) == null ? void 0 : d.completedNodes.find((v) => v.node_id === c)) == null ? void 0 : m.error;
    }
    return (c, d) => {
      var m, v, g, w;
      return a(), i("div", yy, [
        e.progress.phase === "resolving" ? (a(), i("div", wy, [...d[2] || (d[2] = [
          s("div", { class: "phase-header" }, [
            s("div", { class: "loading-spinner" }),
            s("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          s("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : e.progress.phase === "installing" ? (a(), i("div", _y, [
          d[3] || (d[3] = s("div", { class: "phase-header" }, [
            s("div", { class: "loading-spinner" }),
            s("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          s("p", ky, " Installing " + f((((m = e.progress.nodeInstallProgress) == null ? void 0 : m.currentIndex) ?? 0) + 1) + " of " + f(((v = e.progress.nodeInstallProgress) == null ? void 0 : v.totalNodes) ?? e.progress.nodesToInstall.length) + " packages... ", 1),
          s("div", by, [
            s("div", $y, [
              s("div", {
                class: "progress-fill",
                style: At({ width: `${o.value}%` })
              }, null, 4)
            ]),
            s("span", Cy, f(((g = e.progress.nodeInstallProgress) == null ? void 0 : g.completedNodes.length) ?? 0) + " / " + f(((w = e.progress.nodeInstallProgress) == null ? void 0 : w.totalNodes) ?? e.progress.nodesToInstall.length), 1)
          ]),
          s("div", xy, [
            (a(!0), i(q, null, he(e.progress.nodesToInstall, (p, _) => (a(), i("div", {
              key: p,
              class: Fe(["install-item", r(p, _)])
            }, [
              s("span", Sy, [
                r(p, _) === "pending" ? (a(), i("span", Iy, "○")) : r(p, _) === "installing" ? (a(), i("span", Ey, "◌")) : r(p, _) === "complete" ? (a(), i("span", Ty, "✓")) : r(p, _) === "failed" ? (a(), i("span", My, "✗")) : y("", !0)
              ]),
              s("code", null, f(p), 1),
              u(p) ? (a(), i("span", Py, f(u(p)), 1)) : y("", !0)
            ], 2))), 128))
          ])
        ])) : e.progress.phase === "complete" ? (a(), i("div", Ry, [
          s("div", Ny, [
            s("span", {
              class: Fe(["phase-icon", l.value ? "warning" : "success"])
            }, f(l.value ? "⚠" : "✓"), 3),
            s("h3", Dy, f(l.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          s("div", Ly, [
            e.progress.nodesInstalled.length > 0 ? (a(), i("div", Oy, [
              d[4] || (d[4] = s("span", { class: "summary-icon" }, "✓", -1)),
              s("span", Ay, f(e.progress.nodesInstalled.length) + " node package" + f(e.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : y("", !0),
            n.value.length > 0 ? (a(), i("div", Uy, [
              d[5] || (d[5] = s("span", { class: "summary-icon" }, "✗", -1)),
              s("span", zy, f(n.value.length) + " package" + f(n.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : y("", !0),
            n.value.length > 0 ? (a(), i("div", Fy, [
              (a(!0), i(q, null, he(n.value, (p) => (a(), i("div", {
                key: p.node_id,
                class: "failed-item"
              }, [
                s("code", Vy, f(p.node_id), 1),
                s("span", By, f(p.error), 1)
              ]))), 128))
            ])) : y("", !0),
            n.value.length > 0 ? (a(), i("button", {
              key: 3,
              class: "retry-button",
              onClick: d[0] || (d[0] = (p) => c.$emit("retry-failed"))
            }, " Retry Failed (" + f(n.value.length) + ") ", 1)) : y("", !0),
            l.value ? y("", !0) : (a(), i("div", Wy, [...d[6] || (d[6] = [
              s("span", { class: "summary-icon" }, "✓", -1),
              s("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            d[8] || (d[8] = s("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            e.progress.needsRestart ? (a(), i("div", Gy, [
              d[7] || (d[7] = s("div", { class: "restart-warning" }, [
                s("span", { class: "warning-icon" }, "⚠"),
                s("div", { class: "warning-content" }, [
                  s("strong", null, "Restart Required"),
                  s("p", null, "Node packages were installed. ComfyUI needs to restart to load them.")
                ])
              ], -1)),
              s("button", {
                class: "restart-button",
                onClick: d[1] || (d[1] = (p) => c.$emit("restart"))
              }, " Restart ComfyUI ")
            ])) : y("", !0)
          ])
        ])) : e.progress.phase === "error" ? (a(), i("div", jy, [
          d[9] || (d[9] = s("div", { class: "phase-header" }, [
            s("span", { class: "phase-icon error" }, "✗"),
            s("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          s("p", Hy, f(e.progress.error), 1)
        ])) : y("", !0)
      ]);
    };
  }
}), Ky = /* @__PURE__ */ Se(qy, [["__scopeId", "data-v-5efaae58"]]), Jy = {
  key: 0,
  class: "loading-state"
}, Qy = {
  key: 1,
  class: "wizard-content"
}, Yy = {
  key: 0,
  class: "step-content"
}, Xy = { class: "analysis-summary" }, Zy = { class: "analysis-header" }, e1 = { class: "summary-description" }, t1 = { class: "stats-grid" }, s1 = { class: "stat-card" }, o1 = { class: "stat-items" }, n1 = {
  key: 0,
  class: "stat-item success"
}, a1 = { class: "stat-count" }, l1 = {
  key: 1,
  class: "stat-item info"
}, i1 = { class: "stat-count" }, r1 = {
  key: 2,
  class: "stat-item warning"
}, c1 = { class: "stat-count" }, u1 = {
  key: 3,
  class: "stat-item warning"
}, d1 = { class: "stat-count" }, f1 = {
  key: 4,
  class: "stat-item warning"
}, m1 = { class: "stat-count" }, v1 = {
  key: 5,
  class: "stat-item error"
}, p1 = { class: "stat-count" }, g1 = { class: "stat-card" }, h1 = { class: "stat-items" }, y1 = { class: "stat-item success" }, w1 = { class: "stat-count" }, _1 = {
  key: 0,
  class: "stat-item info"
}, k1 = { class: "stat-count" }, b1 = {
  key: 1,
  class: "stat-item warning"
}, $1 = { class: "stat-count" }, C1 = {
  key: 2,
  class: "stat-item warning"
}, x1 = { class: "stat-count" }, S1 = {
  key: 3,
  class: "stat-item error"
}, I1 = { class: "stat-count" }, E1 = {
  key: 0,
  class: "status-message warning"
}, T1 = { class: "status-text" }, M1 = {
  key: 1,
  class: "status-message warning"
}, P1 = { class: "status-text" }, R1 = {
  key: 2,
  class: "status-message info"
}, N1 = { class: "status-text" }, D1 = {
  key: 3,
  class: "status-message info"
}, L1 = { class: "status-text" }, O1 = {
  key: 4,
  class: "status-message info"
}, A1 = { class: "status-text" }, U1 = {
  key: 5,
  class: "status-message warning"
}, z1 = { class: "status-text" }, F1 = {
  key: 6,
  class: "status-message success"
}, V1 = {
  key: 7,
  class: "category-mismatch-section"
}, B1 = { class: "mismatch-list" }, W1 = { class: "mismatch-path" }, G1 = { class: "mismatch-target" }, j1 = {
  key: 8,
  class: "category-mismatch-section"
}, H1 = { class: "mismatch-list" }, q1 = { class: "mismatch-path" }, K1 = { class: "status-text" }, J1 = {
  key: 1,
  class: "step-content node-step-content"
}, Q1 = {
  key: 0,
  class: "community-node-section"
}, Y1 = { class: "community-node-header" }, X1 = { class: "community-node-title" }, Z1 = { class: "community-node-list" }, ew = { class: "community-node-info" }, tw = { class: "community-node-heading" }, sw = { class: "item-name" }, ow = { class: "community-node-package" }, nw = { class: "community-node-meta" }, aw = { class: "community-node-guidance" }, lw = { key: 0 }, iw = { class: "community-choice-status" }, rw = { class: "community-node-actions" }, cw = {
  key: 3,
  class: "step-content"
}, uw = { class: "review-summary" }, dw = { class: "review-stats" }, fw = { class: "review-stat" }, mw = { class: "stat-value" }, vw = { class: "review-stat" }, pw = { class: "stat-value" }, gw = { class: "review-stat" }, hw = { class: "stat-value" }, yw = { class: "review-stat" }, ww = { class: "stat-value" }, _w = {
  key: 0,
  class: "review-section"
}, kw = { class: "section-title" }, bw = { class: "review-items" }, $w = { class: "item-name" }, Cw = { class: "item-choice" }, xw = {
  key: 0,
  class: "choice-badge install"
}, Sw = {
  key: 1,
  class: "choice-badge skip"
}, Iw = {
  key: 1,
  class: "review-section"
}, Ew = { class: "section-title" }, Tw = { class: "review-items" }, Mw = { class: "item-name" }, Pw = { class: "item-choice" }, Rw = {
  key: 0,
  class: "choice-badge install"
}, Nw = {
  key: 1,
  class: "choice-badge optional"
}, Dw = {
  key: 2,
  class: "choice-badge skip"
}, Lw = {
  key: 2,
  class: "review-section"
}, Ow = { class: "section-title" }, Aw = { class: "review-items" }, Uw = { class: "item-name" }, zw = { class: "item-choice" }, Fw = {
  key: 0,
  class: "choice-badge install"
}, Vw = {
  key: 1,
  class: "choice-badge optional"
}, Bw = {
  key: 2,
  class: "choice-badge skip"
}, Ww = {
  key: 1,
  class: "choice-badge pending"
}, Gw = {
  key: 3,
  class: "review-section"
}, jw = { class: "section-title" }, Hw = { class: "review-items download-details" }, qw = { class: "download-info" }, Kw = { class: "item-name" }, Jw = { class: "download-meta" }, Qw = { class: "download-path" }, Yw = ["title"], Xw = {
  key: 4,
  class: "review-section"
}, Zw = { class: "section-title" }, e0 = { class: "review-items" }, t0 = { class: "item-name" }, s0 = { class: "item-choice" }, o0 = {
  key: 0,
  class: "choice-badge install"
}, n0 = {
  key: 1,
  class: "choice-badge download"
}, a0 = {
  key: 2,
  class: "choice-badge optional"
}, l0 = {
  key: 3,
  class: "choice-badge skip"
}, i0 = {
  key: 4,
  class: "choice-badge skip"
}, r0 = {
  key: 1,
  class: "choice-badge download"
}, c0 = {
  key: 2,
  class: "choice-badge pending"
}, u0 = {
  key: 5,
  class: "no-choices"
}, d0 = /* @__PURE__ */ be({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(e, { emit: t }) {
    const o = e, n = t, { analyzeWorkflow: l, applyResolution: r, installNodes: u, queueModelDownloads: c, progress: d, resetProgress: m } = Xr(), { loadPendingDownloads: v } = No(), { openFileLocation: g, queueNodeInstall: w, getNodes: p } = pt(), _ = k(null), x = k([]), C = k(!1), S = k(!1), T = k(null), M = k("analysis"), P = k([]), A = k(/* @__PURE__ */ new Map()), B = k(/* @__PURE__ */ new Map()), j = k(/* @__PURE__ */ new Set()), E = N(() => {
      const re = [
        { id: "analysis", label: "Analysis" }
      ];
      return (se.value || Pe.value || te.value) && re.push({ id: "nodes", label: "Nodes" }), F.value && re.push({ id: "models", label: "Models" }), re.push({ id: "review", label: "Review" }), M.value === "applying" && re.push({ id: "applying", label: "Applying" }), re;
    }), V = N(() => _.value ? _.value.stats.needs_user_input : !1), ae = N(() => _.value ? _.value.nodes.version_gated || [] : []), fe = N(() => _.value ? _.value.nodes.uninstallable || [] : []), ue = N(() => fe.value.filter((re) => {
      var W;
      return !!((W = re.package) != null && W.package_id);
    })), we = N(() => ae.value.length > 0), se = N(() => _.value ? _.value.nodes.unresolved.length > 0 || _.value.nodes.ambiguous.length > 0 : !1), F = N(() => _.value ? _.value.models.unresolved.length > 0 || _.value.models.ambiguous.length > 0 : !1), Q = N(() => _.value ? _.value.stats.download_intents > 0 : !1), Pe = N(() => _.value ? _.value.stats.nodes_needing_installation > 0 : !1), te = N(() => ue.value.length > 0), ge = N(() => _.value ? _.value.nodes.resolved.length : 0), O = N(() => _.value ? _.value.models.resolved.filter((re) => re.has_category_mismatch) : []), me = N(() => O.value.length > 0), Re = N(() => se.value || Pe.value || te.value ? "nodes" : F.value ? "models" : "review"), Ge = N(() => {
      if (!_.value) return [];
      const re = _.value.nodes.resolved.filter((de) => !de.is_installed), W = /* @__PURE__ */ new Set();
      return re.filter((de) => W.has(de.package.package_id) ? !1 : (W.add(de.package.package_id), !0));
    }), Ee = N(() => {
      if (!_.value) return [];
      const re = _.value.nodes.resolved.filter((de) => !de.is_installed), W = /* @__PURE__ */ new Map();
      for (const de of re) {
        const We = W.get(de.package.package_id);
        We ? We.node_types_count++ : W.set(de.package.package_id, {
          package_id: de.package.package_id,
          title: de.package.title,
          node_types_count: 1
        });
      }
      return Array.from(W.values());
    }), H = N(() => Ge.value.filter((re) => !j.value.has(re.package.package_id))), Z = N(() => _.value ? _.value.models.resolved.filter(
      (re) => re.match_type === "download_intent" || re.match_type === "property_download_intent"
    ).map((re) => ({
      filename: re.reference.widget_value,
      reference: re.reference,
      is_download_intent: !0,
      resolved_model: re.model,
      download_source: re.download_source,
      target_path: re.target_path
    })) : []), K = N(() => {
      if (!_.value) return [];
      const re = _.value.nodes.unresolved.map((de) => ({
        node_type: de.reference.node_type,
        reason: de.reason,
        is_unresolved: !0,
        options: void 0
      })), W = _.value.nodes.ambiguous.map((de) => ({
        node_type: de.reference.node_type,
        has_multiple_options: !0,
        options: de.options.map((We) => ({
          package_id: We.package.package_id,
          title: We.package.title,
          match_confidence: We.match_confidence,
          match_type: We.match_type,
          is_installed: We.is_installed
        }))
      }));
      return [...re, ...W];
    }), X = N(() => {
      if (!_.value) return [];
      const re = _.value.models.unresolved.map((de) => ({
        filename: de.reference.widget_value,
        reference: de.reference,
        reason: de.reason,
        is_unresolved: !0,
        options: void 0
      })), W = _.value.models.ambiguous.map((de) => ({
        filename: de.reference.widget_value,
        reference: de.reference,
        has_multiple_options: !0,
        options: de.options.map((We) => ({
          model: We.model,
          match_confidence: We.match_confidence,
          match_type: We.match_type,
          has_download_source: We.has_download_source
        }))
      }));
      return [...re, ...W];
    }), xe = N(() => {
      const re = X.value, W = Z.value.map((de) => ({
        filename: de.filename,
        reference: de.reference,
        is_download_intent: !0,
        resolved_model: de.resolved_model,
        download_source: de.download_source,
        target_path: de.target_path,
        options: void 0
      }));
      return [...re, ...W];
    }), ce = N(() => Z.value.filter((re) => {
      const W = B.value.get(re.filename);
      return W ? W.action === "download" : !0;
    }).map((re) => ({
      filename: re.filename,
      url: re.download_source,
      target_path: re.target_path
    })));
    function le(re, W = 50) {
      return re.length <= W ? re : re.slice(0, W - 3) + "...";
    }
    const I = N(() => {
      let re = H.value.length;
      for (const W of A.value.values())
        W.action === "install" && re++;
      for (const W of B.value.values())
        W.action === "select" && re++;
      return re;
    }), z = N(() => {
      let re = 0;
      for (const W of B.value.values())
        W.action === "download" && re++;
      for (const W of Z.value)
        B.value.get(W.filename) || re++;
      return re;
    }), ie = N(() => {
      let re = 0;
      for (const W of A.value.values())
        W.action === "optional" && re++;
      for (const W of B.value.values())
        W.action === "optional" && re++;
      return re;
    }), Ce = N(() => {
      let re = j.value.size;
      for (const W of A.value.values())
        W.action === "skip" && re++;
      for (const W of B.value.values())
        W.action === "skip" && re++;
      for (const W of K.value)
        A.value.has(W.node_type) || re++;
      for (const W of X.value)
        B.value.has(W.filename) || re++;
      return re;
    }), _e = N(() => {
      const re = {};
      if (re.analysis = { resolved: 1, total: 1 }, se.value || te.value) {
        const W = K.value.length, de = ue.value.length, We = K.value.filter(
          (xt) => A.value.has(xt.node_type)
        ).length, ut = ue.value.filter(
          (xt) => A.value.has(xt.reference.node_type)
        ).length, Ct = W + de, lt = We + ut;
        re.nodes = { resolved: lt, total: Ct };
      }
      if (F.value) {
        const W = xe.value.length, de = xe.value.filter(
          (We) => B.value.has(We.filename) || We.is_download_intent
        ).length;
        re.models = { resolved: de, total: W };
      }
      if (re.review = { resolved: 1, total: 1 }, M.value === "applying") {
        const W = d.totalFiles || 1, de = d.completedFiles.length;
        re.applying = { resolved: de, total: W };
      }
      return re;
    });
    function $e(re) {
      M.value = re;
    }
    function Ae() {
      const re = E.value.findIndex((W) => W.id === M.value);
      re > 0 && (M.value = E.value[re - 1].id);
    }
    function ze() {
      const re = E.value.findIndex((W) => W.id === M.value);
      re < E.value.length - 1 && (M.value = E.value[re + 1].id);
    }
    function Ne() {
      for (const re of ue.value) {
        const W = re.reference.node_type;
        A.value.has(W) || oe(re, "registry");
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
      return re.filter((W) => W.installed && W.tracked).filter((W) => W.name !== "comfygit-manager").map((W) => ({
        package_id: W.registry_id || W.name,
        source: W.source
      })).filter((W, de, We) => We.findIndex((ut) => ut.package_id === W.package_id) === de).sort((W, de) => {
        const We = Ie(W.source) - Ie(de.source);
        return We !== 0 ? We : W.package_id.localeCompare(de.package_id);
      });
    }
    async function Ve() {
      C.value = !0, T.value = null;
      try {
        const [re, W] = await Promise.all([
          l(o.workflowName),
          p()
        ]);
        _.value = re, x.value = Ke(W.nodes), Ne();
      } catch (re) {
        T.value = re instanceof Error ? re.message : "Failed to analyze workflow";
      } finally {
        C.value = !1;
      }
    }
    function ve() {
      P.value.includes("analysis") || P.value.push("analysis"), se.value || Pe.value || te.value ? M.value = "nodes" : F.value ? M.value = "models" : M.value = "review";
    }
    function Y(re) {
      A.value.set(re, { action: "optional" });
    }
    function He(re) {
      A.value.set(re, { action: "skip" });
    }
    function ke(re, W) {
      var We;
      const de = K.value.find((ut) => ut.node_type === re);
      (We = de == null ? void 0 : de.options) != null && We[W] && A.value.set(re, {
        action: "install",
        package_id: de.options[W].package_id
      });
    }
    function Ye(re, W) {
      A.value.set(re, {
        action: "install",
        package_id: W
      });
    }
    function ot(re) {
      A.value.delete(re);
    }
    function Ue(re) {
      return A.value.get(re);
    }
    function L(re) {
      const W = Ue(re);
      return W ? W.action === "optional" ? "Marked optional" : W.action === "skip" ? "Skipped" : W.action === "install" ? W.install_source === "git" ? "Will install via Git" : "Will install from registry" : "Skipped" : "Skipped";
    }
    function oe(re, W) {
      var ut;
      const de = (ut = re.package) == null ? void 0 : ut.package_id;
      if (!de) return;
      const We = {
        action: "install",
        package_id: de,
        version: re.package.latest_version || null,
        install_source: W
      };
      W === "git" && re.package.repository && (We.repository = re.package.repository), A.value.set(re.reference.node_type, We);
    }
    function pe(re) {
      A.value.set(re, { action: "optional" });
    }
    function Je(re) {
      A.value.set(re, { action: "skip" });
    }
    function D(re) {
      j.value.has(re) ? j.value.delete(re) : j.value.add(re);
    }
    function U(re) {
      B.value.set(re, { action: "optional" });
    }
    function ee(re) {
      B.value.set(re, { action: "skip" });
    }
    function De(re, W) {
      var We;
      const de = X.value.find((ut) => ut.filename === re);
      (We = de == null ? void 0 : de.options) != null && We[W] && B.value.set(re, {
        action: "select",
        selected_model: de.options[W].model
      });
    }
    function Le(re, W, de) {
      B.value.set(re, {
        action: "download",
        url: W,
        target_path: de
      });
    }
    function Me(re) {
      B.value.delete(re);
    }
    async function je(re) {
      try {
        await g(re);
      } catch (W) {
        T.value = W instanceof Error ? W.message : "Failed to open file location";
      }
    }
    async function nt() {
      var re;
      S.value = !0, T.value = null, m(), d.phase = "resolving", M.value = "applying";
      try {
        const W = await r(o.workflowName, A.value, B.value, j.value);
        W.models_to_download && W.models_to_download.length > 0 && c(o.workflowName, W.models_to_download);
        const de = ue.value.map((lt) => {
          const xt = Ue(lt.reference.node_type);
          if ((xt == null ? void 0 : xt.action) !== "install" || xt.install_source !== "git")
            return null;
          const ts = xt.repository || lt.package.repository, Is = xt.package_id || lt.package.package_id;
          return !ts || !Is ? null : {
            id: Is,
            repository: ts,
            selectedVersion: xt.version || lt.package.latest_version || "latest"
          };
        }).filter((lt) => !!lt), We = new Set(de.map((lt) => lt.id)), ut = [
          ...W.nodes_to_install || [],
          ...H.value.map((lt) => lt.package.package_id)
        ];
        d.nodesToInstall = [...new Set(ut)].filter((lt) => !We.has(lt)), d.nodesToInstall.length > 0 && await u(o.workflowName);
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
      } catch (W) {
        T.value = W instanceof Error ? W.message : "Failed to apply resolution", d.error = T.value, d.phase = "error";
      } finally {
        S.value = !1;
      }
    }
    function bt() {
      n("refresh"), n("restart"), n("close");
    }
    async function It() {
      var W;
      const re = ((W = d.nodeInstallProgress) == null ? void 0 : W.completedNodes.filter((de) => !de.success).map((de) => de.node_id)) || [];
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
    return rt(Ve), (re, W) => (a(), R(Tt, {
      title: `Resolve Dependencies: ${e.workflowName}`,
      size: "lg",
      loading: C.value,
      error: T.value || void 0,
      "fixed-height": !0,
      onClose: W[1] || (W[1] = (de) => n("close"))
    }, {
      body: h(() => [
        C.value && !_.value ? (a(), i("div", Jy, [...W[2] || (W[2] = [
          s("div", { class: "loading-spinner" }, null, -1),
          s("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : _.value ? (a(), i("div", Qy, [
          b(qp, {
            steps: E.value,
            "current-step": M.value,
            "completed-steps": P.value,
            "step-stats": _e.value,
            onStepChange: $e
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          M.value === "analysis" ? (a(), i("div", Yy, [
            s("div", Xy, [
              s("div", Zy, [
                W[3] || (W[3] = s("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                s("p", e1, " Found " + f(_.value.stats.total_nodes) + " nodes and " + f(_.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              s("div", t1, [
                s("div", s1, [
                  W[16] || (W[16] = s("div", { class: "stat-header" }, "Nodes", -1)),
                  s("div", o1, [
                    ge.value > 0 ? (a(), i("div", n1, [
                      W[4] || (W[4] = s("span", { class: "stat-icon" }, "✓", -1)),
                      s("span", a1, f(ge.value), 1),
                      W[5] || (W[5] = s("span", { class: "stat-label" }, "resolved", -1))
                    ])) : y("", !0),
                    _.value.stats.packages_needing_installation > 0 ? (a(), i("div", l1, [
                      W[6] || (W[6] = s("span", { class: "stat-icon" }, "⬇", -1)),
                      s("span", i1, f(_.value.stats.packages_needing_installation), 1),
                      W[7] || (W[7] = s("span", { class: "stat-label" }, "to install", -1))
                    ])) : y("", !0),
                    _.value.nodes.ambiguous.length > 0 ? (a(), i("div", r1, [
                      W[8] || (W[8] = s("span", { class: "stat-icon" }, "?", -1)),
                      s("span", c1, f(_.value.nodes.ambiguous.length), 1),
                      W[9] || (W[9] = s("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    ae.value.length > 0 ? (a(), i("div", u1, [
                      W[10] || (W[10] = s("span", { class: "stat-icon" }, "⚠", -1)),
                      s("span", d1, f(ae.value.length), 1),
                      W[11] || (W[11] = s("span", { class: "stat-label" }, "requires newer ComfyUI", -1))
                    ])) : y("", !0),
                    fe.value.length > 0 ? (a(), i("div", f1, [
                      W[12] || (W[12] = s("span", { class: "stat-icon" }, "⚠", -1)),
                      s("span", m1, f(fe.value.length), 1),
                      W[13] || (W[13] = s("span", { class: "stat-label" }, "community-mapped", -1))
                    ])) : y("", !0),
                    _.value.nodes.unresolved.length > 0 ? (a(), i("div", v1, [
                      W[14] || (W[14] = s("span", { class: "stat-icon" }, "✗", -1)),
                      s("span", p1, f(_.value.nodes.unresolved.length), 1),
                      W[15] || (W[15] = s("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ]),
                s("div", g1, [
                  W[27] || (W[27] = s("div", { class: "stat-header" }, "Models", -1)),
                  s("div", h1, [
                    s("div", y1, [
                      W[17] || (W[17] = s("span", { class: "stat-icon" }, "✓", -1)),
                      s("span", w1, f(_.value.models.resolved.length - _.value.stats.download_intents - _.value.stats.models_with_category_mismatch), 1),
                      W[18] || (W[18] = s("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    _.value.stats.download_intents > 0 ? (a(), i("div", _1, [
                      W[19] || (W[19] = s("span", { class: "stat-icon" }, "⬇", -1)),
                      s("span", k1, f(_.value.stats.download_intents), 1),
                      W[20] || (W[20] = s("span", { class: "stat-label" }, "pending download", -1))
                    ])) : y("", !0),
                    me.value ? (a(), i("div", b1, [
                      W[21] || (W[21] = s("span", { class: "stat-icon" }, "⚠", -1)),
                      s("span", $1, f(O.value.length), 1),
                      W[22] || (W[22] = s("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : y("", !0),
                    _.value.models.ambiguous.length > 0 ? (a(), i("div", C1, [
                      W[23] || (W[23] = s("span", { class: "stat-icon" }, "?", -1)),
                      s("span", x1, f(_.value.models.ambiguous.length), 1),
                      W[24] || (W[24] = s("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    _.value.models.unresolved.length > 0 ? (a(), i("div", S1, [
                      W[25] || (W[25] = s("span", { class: "stat-icon" }, "✗", -1)),
                      s("span", I1, f(_.value.models.unresolved.length), 1),
                      W[26] || (W[26] = s("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ])
              ]),
              V.value ? (a(), i("div", E1, [
                W[28] || (W[28] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", T1, f(K.value.length + X.value.length) + " items need your input", 1)
              ])) : we.value ? (a(), i("div", M1, [
                W[29] || (W[29] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", P1, f(ae.value.length) + " node type" + f(ae.value.length > 1 ? "s are" : " is") + " blocked and require manual action", 1)
              ])) : fe.value.length > 0 ? (a(), i("div", R1, [
                W[30] || (W[30] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", N1, f(fe.value.length) + " community-mapped node type" + f(fe.value.length > 1 ? "s need" : " needs") + " installation choices", 1)
              ])) : Pe.value ? (a(), i("div", D1, [
                W[31] || (W[31] = s("span", { class: "status-icon" }, "⬇", -1)),
                s("span", L1, f(_.value.stats.packages_needing_installation) + " package" + f(_.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + f(_.value.stats.nodes_needing_installation) + " node type" + f(_.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + f(Q.value ? `, ${_.value.stats.download_intents} model${_.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : Q.value ? (a(), i("div", O1, [
                W[32] || (W[32] = s("span", { class: "status-icon" }, "⬇", -1)),
                s("span", A1, f(_.value.stats.download_intents) + " model" + f(_.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to Review to proceed", 1)
              ])) : me.value ? (a(), i("div", U1, [
                W[33] || (W[33] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", z1, f(O.value.length) + " model" + f(O.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (a(), i("div", F1, [...W[34] || (W[34] = [
                s("span", { class: "status-icon" }, "✓", -1),
                s("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              me.value ? (a(), i("div", V1, [
                W[37] || (W[37] = s("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                s("div", B1, [
                  (a(!0), i(q, null, he(O.value, (de) => {
                    var We, ut;
                    return a(), i("div", {
                      key: de.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      s("code", W1, f(de.actual_category) + "/" + f((We = de.model) == null ? void 0 : We.filename), 1),
                      W[36] || (W[36] = s("span", { class: "mismatch-arrow" }, "→", -1)),
                      s("code", G1, f((ut = de.expected_categories) == null ? void 0 : ut[0]) + "/", 1),
                      de.file_path ? (a(), R(Oe, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (Ct) => je(de.file_path)
                      }, {
                        default: h(() => [...W[35] || (W[35] = [
                          $(" Open File Location ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : y("", !0)
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              we.value ? (a(), i("div", j1, [
                W[38] || (W[38] = s("h4", { class: "section-subtitle" }, "Blocked node types:", -1)),
                s("div", H1, [
                  (a(!0), i(q, null, he(ae.value, (de) => {
                    var We;
                    return a(), i("div", {
                      key: `vg-${de.reference.node_type}`,
                      class: "mismatch-item"
                    }, [
                      s("code", q1, f(de.reference.node_type), 1),
                      s("span", K1, f(de.guidance || ((We = _.value.node_guidance) == null ? void 0 : We[de.reference.node_type]) || "Requires a newer ComfyUI version."), 1)
                    ]);
                  }), 128))
                ])
              ])) : y("", !0)
            ])
          ])) : y("", !0),
          M.value === "nodes" ? (a(), i("div", J1, [
            b(Ch, {
              nodes: K.value,
              "node-choices": A.value,
              "auto-resolved-packages": Ee.value,
              "skipped-packages": j.value,
              "installed-node-packs": x.value,
              onMarkOptional: Y,
              onSkip: He,
              onOptionSelected: ke,
              onManualEntry: Ye,
              onClearChoice: ot,
              onPackageSkip: D
            }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages", "installed-node-packs"]),
            ue.value.length > 0 ? (a(), i("div", Q1, [
              s("div", Y1, [
                s("h4", X1, "Community-Mapped Packages (" + f(ue.value.length) + ")", 1),
                W[39] || (W[39] = s("p", { class: "community-node-description" }, " These mappings are actionable. Default install uses the registry; choose Git only when explicitly needed. ", -1))
              ]),
              s("div", Z1, [
                (a(!0), i(q, null, he(ue.value, (de) => (a(), i("div", {
                  key: `community-${de.reference.node_type}-${de.package.package_id}`,
                  class: "community-node-item"
                }, [
                  s("div", ew, [
                    s("div", tw, [
                      s("code", sw, f(de.reference.node_type), 1),
                      s("span", ow, f(de.package.title || de.package.package_id), 1)
                    ]),
                    s("div", nw, f(de.package.package_id), 1),
                    s("div", aw, [
                      W[40] || (W[40] = $(" Found via community mapping — registry metadata may be incomplete. ", -1)),
                      de.guidance ? (a(), i("span", lw, f(de.guidance), 1)) : y("", !0)
                    ]),
                    s("div", iw, f(L(de.reference.node_type)), 1)
                  ]),
                  s("div", rw, [
                    b(Oe, {
                      size: "sm",
                      variant: "secondary",
                      disabled: !de.package.package_id,
                      onClick: (We) => oe(de, "registry")
                    }, {
                      default: h(() => [...W[41] || (W[41] = [
                        $(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled", "onClick"]),
                    de.package.repository ? (a(), R(Oe, {
                      key: 0,
                      size: "sm",
                      variant: "ghost",
                      disabled: !de.package.package_id,
                      onClick: (We) => oe(de, "git")
                    }, {
                      default: h(() => [...W[42] || (W[42] = [
                        $(" Install via Git ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled", "onClick"])) : y("", !0),
                    b(Oe, {
                      size: "sm",
                      variant: "secondary",
                      onClick: (We) => pe(de.reference.node_type)
                    }, {
                      default: h(() => [...W[43] || (W[43] = [
                        $(" Optional ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Oe, {
                      size: "sm",
                      variant: "secondary",
                      onClick: (We) => Je(de.reference.node_type)
                    }, {
                      default: h(() => [...W[44] || (W[44] = [
                        $(" Skip ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ])
                ]))), 128))
              ])
            ])) : y("", !0)
          ])) : y("", !0),
          M.value === "models" ? (a(), R(hy, {
            key: 2,
            models: xe.value,
            "model-choices": B.value,
            onMarkOptional: U,
            onSkip: ee,
            onOptionSelected: De,
            onDownloadUrl: Le,
            onClearChoice: Me
          }, null, 8, ["models", "model-choices"])) : y("", !0),
          M.value === "review" ? (a(), i("div", cw, [
            s("div", uw, [
              W[50] || (W[50] = s("div", { class: "review-header" }, [
                s("h3", { class: "summary-title" }, "Review Your Choices"),
                s("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              s("div", dw, [
                s("div", fw, [
                  s("span", mw, f(I.value), 1),
                  W[45] || (W[45] = s("span", { class: "stat-label" }, "to install", -1))
                ]),
                s("div", vw, [
                  s("span", pw, f(z.value), 1),
                  W[46] || (W[46] = s("span", { class: "stat-label" }, "to download", -1))
                ]),
                s("div", gw, [
                  s("span", hw, f(ie.value), 1),
                  W[47] || (W[47] = s("span", { class: "stat-label" }, "optional", -1))
                ]),
                s("div", yw, [
                  s("span", ww, f(Ce.value), 1),
                  W[48] || (W[48] = s("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              Ee.value.length > 0 ? (a(), i("div", _w, [
                s("h4", kw, "Node Packages (" + f(Ee.value.length) + ")", 1),
                s("div", bw, [
                  (a(!0), i(q, null, he(Ee.value, (de) => (a(), i("div", {
                    key: de.package_id,
                    class: "review-item"
                  }, [
                    s("code", $w, f(de.package_id), 1),
                    s("div", Cw, [
                      j.value.has(de.package_id) ? (a(), i("span", Sw, "Skipped")) : (a(), i("span", xw, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : y("", !0),
              ue.value.length > 0 ? (a(), i("div", Iw, [
                s("h4", Ew, "Community-Mapped Packages (" + f(ue.value.length) + ")", 1),
                s("div", Tw, [
                  (a(!0), i(q, null, he(ue.value, (de) => {
                    var We, ut, Ct;
                    return a(), i("div", {
                      key: `review-community-${de.reference.node_type}-${de.package.package_id}`,
                      class: "review-item"
                    }, [
                      s("code", Mw, f(de.reference.node_type), 1),
                      s("div", Pw, [
                        ((We = Ue(de.reference.node_type)) == null ? void 0 : We.action) === "install" ? (a(), i("span", Rw, f(((ut = Ue(de.reference.node_type)) == null ? void 0 : ut.install_source) === "git" ? "Install via Git" : "Install from Registry"), 1)) : ((Ct = Ue(de.reference.node_type)) == null ? void 0 : Ct.action) === "optional" ? (a(), i("span", Nw, " Optional ")) : (a(), i("span", Dw, " Skip "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              K.value.length > 0 ? (a(), i("div", Lw, [
                s("h4", Ow, "Node Choices (" + f(K.value.length) + ")", 1),
                s("div", Aw, [
                  (a(!0), i(q, null, he(K.value, (de) => {
                    var We, ut, Ct, lt;
                    return a(), i("div", {
                      key: de.node_type,
                      class: "review-item"
                    }, [
                      s("code", Uw, f(de.node_type), 1),
                      s("div", zw, [
                        A.value.has(de.node_type) ? (a(), i(q, { key: 0 }, [
                          ((We = A.value.get(de.node_type)) == null ? void 0 : We.action) === "install" ? (a(), i("span", Fw, f((ut = A.value.get(de.node_type)) == null ? void 0 : ut.package_id), 1)) : ((Ct = A.value.get(de.node_type)) == null ? void 0 : Ct.action) === "optional" ? (a(), i("span", Vw, " Optional ")) : ((lt = A.value.get(de.node_type)) == null ? void 0 : lt.action) === "skip" ? (a(), i("span", Bw, " Skip ")) : y("", !0)
                        ], 64)) : (a(), i("span", Ww, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              ce.value.length > 0 ? (a(), i("div", Gw, [
                s("h4", jw, "Models to Download (" + f(ce.value.length) + ")", 1),
                s("div", Hw, [
                  (a(!0), i(q, null, he(ce.value, (de) => (a(), i("div", {
                    key: de.filename,
                    class: "review-item download-item"
                  }, [
                    s("div", qw, [
                      s("code", Kw, f(de.filename), 1),
                      s("div", Jw, [
                        s("span", Qw, "→ " + f(de.target_path), 1),
                        de.url ? (a(), i("span", {
                          key: 0,
                          class: "download-url",
                          title: de.url
                        }, f(le(de.url)), 9, Yw)) : y("", !0)
                      ])
                    ]),
                    W[49] || (W[49] = s("span", { class: "choice-badge download" }, "Will Download", -1))
                  ]))), 128))
                ])
              ])) : y("", !0),
              xe.value.length > 0 ? (a(), i("div", Xw, [
                s("h4", Zw, "Models (" + f(xe.value.length) + ")", 1),
                s("div", e0, [
                  (a(!0), i(q, null, he(xe.value, (de) => {
                    var We, ut, Ct, lt, xt, ts, Is;
                    return a(), i("div", {
                      key: de.filename,
                      class: "review-item"
                    }, [
                      s("code", t0, f(de.filename), 1),
                      s("div", s0, [
                        B.value.has(de.filename) ? (a(), i(q, { key: 0 }, [
                          ((We = B.value.get(de.filename)) == null ? void 0 : We.action) === "select" ? (a(), i("span", o0, f((Ct = (ut = B.value.get(de.filename)) == null ? void 0 : ut.selected_model) == null ? void 0 : Ct.filename), 1)) : ((lt = B.value.get(de.filename)) == null ? void 0 : lt.action) === "download" ? (a(), i("span", n0, " Download ")) : ((xt = B.value.get(de.filename)) == null ? void 0 : xt.action) === "optional" ? (a(), i("span", a0, " Optional ")) : ((ts = B.value.get(de.filename)) == null ? void 0 : ts.action) === "skip" ? (a(), i("span", l0, " Skip ")) : ((Is = B.value.get(de.filename)) == null ? void 0 : Is.action) === "cancel_download" ? (a(), i("span", i0, " Cancel Download ")) : y("", !0)
                        ], 64)) : de.is_download_intent ? (a(), i("span", r0, " Pending Download ")) : (a(), i("span", c0, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              Ge.value.length === 0 && ue.value.length === 0 && K.value.length === 0 && xe.value.length === 0 ? (a(), i("div", u0, " No dependencies need resolution. ")) : y("", !0)
            ])
          ])) : y("", !0),
          M.value === "applying" ? (a(), R(Ky, {
            key: 4,
            progress: tt(d),
            onRestart: bt,
            onRetryFailed: It
          }, null, 8, ["progress"])) : y("", !0)
        ])) : y("", !0)
      ]),
      footer: h(() => [
        M.value !== "analysis" && M.value !== "applying" ? (a(), R(Oe, {
          key: 0,
          variant: "secondary",
          disabled: S.value,
          onClick: Ae
        }, {
          default: h(() => [...W[51] || (W[51] = [
            $(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : y("", !0),
        W[54] || (W[54] = s("div", { class: "footer-spacer" }, null, -1)),
        M.value !== "applying" || tt(d).phase === "complete" || tt(d).phase === "error" ? (a(), R(Oe, {
          key: 1,
          variant: "secondary",
          onClick: W[0] || (W[0] = (de) => n("close"))
        }, {
          default: h(() => [
            $(f(tt(d).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : y("", !0),
        M.value === "analysis" ? (a(), R(Oe, {
          key: 2,
          variant: "primary",
          disabled: C.value,
          onClick: ve
        }, {
          default: h(() => [
            $(f(Re.value === "review" ? "Continue to Review →" : "Continue"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : y("", !0),
        M.value === "nodes" ? (a(), R(Oe, {
          key: 3,
          variant: "primary",
          onClick: ze
        }, {
          default: h(() => [
            $(f(F.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : y("", !0),
        M.value === "models" ? (a(), R(Oe, {
          key: 4,
          variant: "primary",
          onClick: ze
        }, {
          default: h(() => [...W[52] || (W[52] = [
            $(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : y("", !0),
        M.value === "review" ? (a(), R(Oe, {
          key: 5,
          variant: "primary",
          disabled: S.value,
          loading: S.value,
          onClick: nt
        }, {
          default: h(() => [...W[53] || (W[53] = [
            $(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : y("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), f0 = /* @__PURE__ */ Se(d0, [["__scopeId", "data-v-49848358"]]), m0 = { class: "search-input-wrapper" }, v0 = ["value", "placeholder"], p0 = /* @__PURE__ */ be({
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
    }), (d, m) => (a(), i("div", m0, [
      s("input", {
        ref_key: "inputRef",
        ref: l,
        value: e.modelValue,
        type: "text",
        placeholder: e.placeholder,
        class: "search-input",
        onInput: u,
        onKeyup: fs(c, ["escape"])
      }, null, 40, v0),
      e.clearable && e.modelValue ? (a(), i("button", {
        key: 0,
        class: "clear-button",
        onClick: c,
        title: "Clear search"
      }, " ✕ ")) : y("", !0)
    ]));
  }
}), g0 = /* @__PURE__ */ Se(p0, [["__scopeId", "data-v-266f857a"]]), h0 = { class: "search-bar" }, y0 = /* @__PURE__ */ be({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(e) {
    return (t, o) => (a(), i("div", h0, [
      b(g0, {
        "model-value": e.modelValue,
        placeholder: e.placeholder,
        debounce: e.debounce,
        clearable: e.clearable,
        "onUpdate:modelValue": o[0] || (o[0] = (n) => t.$emit("update:modelValue", n)),
        onClear: o[1] || (o[1] = (n) => t.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), io = /* @__PURE__ */ Se(y0, [["__scopeId", "data-v-3d51bbfd"]]), w0 = { class: "section-group" }, _0 = {
  key: 0,
  class: "section-content"
}, k0 = /* @__PURE__ */ be({
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
    return (u, c) => (a(), i("section", w0, [
      b(ns, {
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
      !e.collapsible || l.value ? (a(), i("div", _0, [
        st(u.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), St = /* @__PURE__ */ Se(k0, [["__scopeId", "data-v-c48e33ed"]]), b0 = { class: "item-header" }, $0 = {
  key: 0,
  class: "item-icon"
}, C0 = { class: "item-info" }, x0 = {
  key: 0,
  class: "item-title"
}, S0 = {
  key: 1,
  class: "item-subtitle"
}, I0 = {
  key: 0,
  class: "item-details"
}, E0 = {
  key: 1,
  class: "item-actions"
}, T0 = /* @__PURE__ */ be({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const o = e, n = N(() => o.status ? `status-${o.status}` : "");
    return (l, r) => (a(), i("div", {
      class: Fe(["item-card", { clickable: e.clickable, compact: e.compact }, n.value]),
      onClick: r[0] || (r[0] = (u) => e.clickable && l.$emit("click"))
    }, [
      s("div", b0, [
        l.$slots.icon ? (a(), i("span", $0, [
          st(l.$slots, "icon", {}, void 0)
        ])) : y("", !0),
        s("div", C0, [
          l.$slots.title ? (a(), i("div", x0, [
            st(l.$slots, "title", {}, void 0)
          ])) : y("", !0),
          l.$slots.subtitle ? (a(), i("div", S0, [
            st(l.$slots, "subtitle", {}, void 0)
          ])) : y("", !0)
        ])
      ]),
      l.$slots.details ? (a(), i("div", I0, [
        st(l.$slots, "details", {}, void 0)
      ])) : y("", !0),
      l.$slots.actions ? (a(), i("div", E0, [
        st(l.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Vt = /* @__PURE__ */ Se(T0, [["__scopeId", "data-v-cc435e0e"]]), M0 = { class: "loading-state" }, P0 = { class: "loading-message" }, R0 = /* @__PURE__ */ be({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(e) {
    return (t, o) => (a(), i("div", M0, [
      o[0] || (o[0] = s("div", { class: "spinner" }, null, -1)),
      s("p", P0, f(e.message), 1)
    ]));
  }
}), xs = /* @__PURE__ */ Se(R0, [["__scopeId", "data-v-ad8436c9"]]), N0 = { class: "error-state" }, D0 = { class: "error-message" }, L0 = /* @__PURE__ */ be({
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
      e.retry ? (a(), R(Te, {
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
}), Ss = /* @__PURE__ */ Se(L0, [["__scopeId", "data-v-5397be48"]]), O0 = /* @__PURE__ */ be({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(e, { expose: t, emit: o }) {
    const n = o, { getWorkflows: l } = pt(), r = k([]), u = k(!1), c = k(null), d = k(""), m = k(!0), v = k(!1), g = k(!1), w = k(!1), p = k(null), _ = N(
      () => r.value.filter((O) => O.status === "broken")
    ), x = N(
      () => r.value.filter((O) => O.status === "new")
    ), C = N(
      () => r.value.filter((O) => O.status === "modified")
    ), S = N(
      () => r.value.filter((O) => O.status === "synced")
    ), T = N(() => {
      if (!d.value.trim()) return r.value;
      const O = d.value.toLowerCase();
      return r.value.filter((me) => me.name.toLowerCase().includes(O));
    }), M = N(
      () => _.value.filter(
        (O) => !d.value.trim() || O.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), P = N(
      () => x.value.filter(
        (O) => !d.value.trim() || O.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), A = N(
      () => C.value.filter(
        (O) => !d.value.trim() || O.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), B = N(
      () => S.value.filter(
        (O) => !d.value.trim() || O.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), j = N(
      () => v.value ? B.value : B.value.slice(0, 5)
    );
    async function E(O = !1) {
      u.value = !0, c.value = null;
      try {
        r.value = await l(O);
      } catch (me) {
        c.value = me instanceof Error ? me.message : "Failed to load workflows";
      } finally {
        u.value = !1;
      }
    }
    t({ loadWorkflows: E });
    function V(O) {
      p.value = O, g.value = !0;
    }
    function ae(O) {
      p.value = O, w.value = !0;
    }
    function fe(O) {
      p.value = O, window.dispatchEvent(new CustomEvent("comfygit:open-io-mapping", {
        detail: { workflowName: O }
      })), window.dispatchEvent(new CustomEvent("comfygit:close-panel"));
    }
    function ue(O) {
      var Ge;
      const Re = (Ge = O.detail) == null ? void 0 : Ge.workflowName;
      Re && fe(Re);
    }
    function we() {
      n("refresh");
    }
    async function se() {
      w.value = !1, await E(!0);
    }
    async function F() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function Q(O) {
      return O.replace(/uninstallable node mappings?/gi, (me) => me.toLowerCase().endsWith("s") ? "community packages" : "community package").replace(/no installable package versions?/gi, "need community packages").replace(/\bare uninstallable\b/gi, "need community packages").replace(/\buninstallable\b/gi, "community-mapped");
    }
    function Pe(O) {
      if (O.issue_summary && O.issue_summary.trim().length > 0)
        return Q(O.issue_summary);
      const me = [];
      return O.version_gated_count && O.version_gated_count > 0 && me.push(`${O.version_gated_count} node${O.version_gated_count > 1 ? "s" : ""} require newer ComfyUI`), O.uninstallable_count && O.uninstallable_count > 0 && me.push(`${O.uninstallable_count} node${O.uninstallable_count > 1 ? "s" : ""} need community packages`), O.missing_nodes > 0 && me.push(`${O.missing_nodes} missing node${O.missing_nodes > 1 ? "s" : ""}`), O.missing_models > 0 && me.push(`${O.missing_models} missing model${O.missing_models > 1 ? "s" : ""}`), O.models_with_category_mismatch && O.models_with_category_mismatch > 0 && me.push(`${O.models_with_category_mismatch} model${O.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), O.pending_downloads && O.pending_downloads > 0 && me.push(`${O.pending_downloads} pending download${O.pending_downloads > 1 ? "s" : ""}`), me.length > 0 ? me.join(", ") : "Has issues";
    }
    function te(O) {
      const me = O.sync_state === "new" ? "New" : O.sync_state === "modified" ? "Modified" : O.sync_state === "synced" ? "Synced" : O.sync_state, Re = ge(O);
      return O.has_path_sync_issues && O.models_needing_path_sync && O.models_needing_path_sync > 0 ? `${O.models_needing_path_sync} model path${O.models_needing_path_sync > 1 ? "s" : ""} need${O.models_needing_path_sync === 1 ? "s" : ""} sync · ${Re}` : `${me || "Unknown"} · ${Re}`;
    }
    function ge(O) {
      const me = O.contract_summary;
      return !me || !me.has_contract ? "No contract" : me.status === "incomplete" ? `${me.input_count} in / ${me.output_count} out · incomplete` : `${me.input_count} in / ${me.output_count} out`;
    }
    return rt(() => {
      E(), window.addEventListener("comfygit:open-workflow-contract", ue);
    }), oa(() => {
      window.removeEventListener("comfygit:open-workflow-contract", ue);
    }), (O, me) => (a(), i(q, null, [
      b(Ut, null, {
        header: h(() => [
          b(zt, { title: "WORKFLOWS" })
        ]),
        search: h(() => [
          b(io, {
            modelValue: d.value,
            "onUpdate:modelValue": me[0] || (me[0] = (Re) => d.value = Re),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          u.value ? (a(), R(xs, {
            key: 0,
            message: "Loading workflows..."
          })) : c.value ? (a(), R(Ss, {
            key: 1,
            message: c.value,
            retry: !0,
            onRetry: E
          }, null, 8, ["message"])) : (a(), i(q, { key: 2 }, [
            M.value.length ? (a(), R(St, {
              key: 0,
              title: "BROKEN",
              count: M.value.length
            }, {
              default: h(() => [
                (a(!0), i(q, null, he(M.value, (Re) => (a(), R(Vt, {
                  key: Re.name,
                  status: "broken"
                }, {
                  icon: h(() => [...me[7] || (me[7] = [
                    $("⚠", -1)
                  ])]),
                  title: h(() => [
                    $(f(Re.name), 1)
                  ]),
                  subtitle: h(() => [
                    $(f(Pe(Re)), 1)
                  ]),
                  actions: h(() => [
                    b(Te, {
                      variant: "primary",
                      size: "sm",
                      onClick: (Ge) => ae(Re.name)
                    }, {
                      default: h(() => [...me[8] || (me[8] = [
                        $(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Ge) => fe(Re.name)
                    }, {
                      default: h(() => [...me[9] || (me[9] = [
                        $(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Ge) => V(Re.name)
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
            P.value.length ? (a(), R(St, {
              key: 1,
              title: "NEW",
              count: P.value.length
            }, {
              default: h(() => [
                (a(!0), i(q, null, he(P.value, (Re) => (a(), R(Vt, {
                  key: Re.name,
                  status: Re.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: h(() => [
                    $(f(Re.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: h(() => [
                    $(f(Re.name), 1)
                  ]),
                  subtitle: h(() => [
                    $(f(te(Re)), 1)
                  ]),
                  actions: h(() => [
                    b(Te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Ge) => fe(Re.name)
                    }, {
                      default: h(() => [...me[11] || (me[11] = [
                        $(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Ge) => V(Re.name)
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
            A.value.length ? (a(), R(St, {
              key: 2,
              title: "MODIFIED",
              count: A.value.length
            }, {
              default: h(() => [
                (a(!0), i(q, null, he(A.value, (Re) => (a(), R(Vt, {
                  key: Re.name,
                  status: Re.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: h(() => [...me[13] || (me[13] = [
                    $("⚡", -1)
                  ])]),
                  title: h(() => [
                    $(f(Re.name), 1)
                  ]),
                  subtitle: h(() => [
                    $(f(te(Re)), 1)
                  ]),
                  actions: h(() => [
                    b(Te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Ge) => fe(Re.name)
                    }, {
                      default: h(() => [...me[14] || (me[14] = [
                        $(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Ge) => V(Re.name)
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
            B.value.length ? (a(), R(St, {
              key: 3,
              title: "SYNCED",
              count: B.value.length,
              collapsible: !0,
              "initially-expanded": m.value,
              onToggle: me[2] || (me[2] = (Re) => m.value = Re)
            }, {
              default: h(() => [
                (a(!0), i(q, null, he(j.value, (Re) => (a(), R(Vt, {
                  key: Re.name,
                  status: Re.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: h(() => [
                    $(f(Re.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: h(() => [
                    $(f(Re.name), 1)
                  ]),
                  subtitle: h(() => [
                    $(f(te(Re)), 1)
                  ]),
                  actions: h(() => [
                    b(Te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Ge) => fe(Re.name)
                    }, {
                      default: h(() => [...me[16] || (me[16] = [
                        $(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Ge) => V(Re.name)
                    }, {
                      default: h(() => [...me[17] || (me[17] = [
                        $(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !v.value && B.value.length > 5 ? (a(), R(Te, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: me[1] || (me[1] = (Re) => v.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: h(() => [
                    $(" View all " + f(B.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : y("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : y("", !0),
            T.value.length ? y("", !0) : (a(), R(rs, {
              key: 4,
              icon: "📭",
              message: d.value ? `No workflows match '${d.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      g.value && p.value ? (a(), R(Lp, {
        key: 0,
        "workflow-name": p.value,
        onClose: me[3] || (me[3] = (Re) => g.value = !1),
        onResolve: me[4] || (me[4] = (Re) => ae(p.value)),
        onRefresh: me[5] || (me[5] = (Re) => n("refresh"))
      }, null, 8, ["workflow-name"])) : y("", !0),
      w.value && p.value ? (a(), R(f0, {
        key: 1,
        "workflow-name": p.value,
        onClose: se,
        onInstall: we,
        onRefresh: me[6] || (me[6] = (Re) => n("refresh")),
        onRestart: F
      }, null, 8, ["workflow-name"])) : y("", !0)
    ], 64));
  }
}), A0 = /* @__PURE__ */ Se(O0, [["__scopeId", "data-v-28ee54dd"]]), U0 = /* @__PURE__ */ be({
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
}), ia = /* @__PURE__ */ Se(U0, [["__scopeId", "data-v-ccb7816e"]]), z0 = {
  key: 0,
  class: "model-details"
}, F0 = { class: "detail-section" }, V0 = { class: "detail-row" }, B0 = { class: "detail-value mono" }, W0 = { class: "detail-row" }, G0 = { class: "detail-value mono" }, j0 = { class: "detail-row" }, H0 = { class: "detail-value mono" }, q0 = { class: "detail-row" }, K0 = { class: "detail-value" }, J0 = { class: "detail-row" }, Q0 = { class: "detail-value" }, Y0 = { class: "detail-row" }, X0 = { class: "detail-value" }, Z0 = { class: "detail-section" }, e_ = { class: "section-header" }, t_ = {
  key: 0,
  class: "locations-list"
}, s_ = { class: "location-path mono" }, o_ = {
  key: 0,
  class: "location-modified"
}, n_ = ["onClick"], a_ = {
  key: 1,
  class: "empty-state"
}, l_ = { class: "detail-section" }, i_ = { class: "section-header" }, r_ = {
  key: 0,
  class: "sources-list"
}, c_ = { class: "source-type" }, u_ = ["href"], d_ = ["disabled", "onClick"], f_ = {
  key: 1,
  class: "empty-state"
}, m_ = { class: "add-source-form" }, v_ = ["disabled"], p_ = {
  key: 2,
  class: "source-error"
}, g_ = {
  key: 3,
  class: "source-success"
}, h_ = /* @__PURE__ */ be({
  __name: "ModelDetailModal",
  props: {
    identifier: {},
    overlayZIndex: {}
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const o = e, { getModelDetails: n, addModelSource: l, removeModelSource: r, openFileLocation: u } = pt(), c = k(null), d = k(!0), m = k(null), v = k(""), g = k(!1), w = k(null), p = k(null), _ = k(null), x = k(null);
    let C = null;
    function S(E, V = "success", ae = 2e3) {
      C && clearTimeout(C), x.value = { message: E, type: V }, C = setTimeout(() => {
        x.value = null;
      }, ae);
    }
    function T(E) {
      if (!E) return "Unknown";
      const V = 1024 * 1024 * 1024, ae = 1024 * 1024;
      return E >= V ? `${(E / V).toFixed(1)} GB` : E >= ae ? `${(E / ae).toFixed(0)} MB` : `${(E / 1024).toFixed(0)} KB`;
    }
    function M(E) {
      navigator.clipboard.writeText(E), S("Copied to clipboard!");
    }
    async function P(E) {
      try {
        await u(E), S("Opening file location...");
      } catch {
        S("Failed to open location", "error");
      }
    }
    async function A() {
      if (!(!v.value.trim() || !c.value)) {
        g.value = !0, p.value = null, _.value = null;
        try {
          await l(c.value.hash, v.value.trim()), _.value = "Source added successfully!", v.value = "", await j();
        } catch (E) {
          p.value = E instanceof Error ? E.message : "Failed to add source";
        } finally {
          g.value = !1;
        }
      }
    }
    async function B(E) {
      if (c.value) {
        w.value = E, p.value = null, _.value = null;
        try {
          await r(c.value.hash, E), S("Source removed"), await j();
        } catch (V) {
          p.value = V instanceof Error ? V.message : "Failed to remove source";
        } finally {
          w.value = null;
        }
      }
    }
    async function j() {
      d.value = !0, m.value = null;
      try {
        c.value = await n(o.identifier);
      } catch (E) {
        m.value = E instanceof Error ? E.message : "Failed to load model details";
      } finally {
        d.value = !1;
      }
    }
    return rt(j), (E, V) => {
      var ae;
      return a(), i(q, null, [
        b(Tt, {
          title: `Model Details: ${((ae = c.value) == null ? void 0 : ae.filename) || "Loading..."}`,
          size: "lg",
          loading: d.value,
          error: m.value,
          "overlay-z-index": e.overlayZIndex,
          onClose: V[5] || (V[5] = (fe) => E.$emit("close"))
        }, {
          body: h(() => {
            var fe, ue, we, se;
            return [
              c.value ? (a(), i("div", z0, [
                s("section", F0, [
                  s("div", V0, [
                    V[6] || (V[6] = s("span", { class: "detail-label" }, "Hash:", -1)),
                    s("span", B0, f(c.value.hash || "Not computed"), 1),
                    c.value.hash ? (a(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: V[0] || (V[0] = (F) => M(c.value.hash))
                    }, "Copy")) : y("", !0)
                  ]),
                  s("div", W0, [
                    V[7] || (V[7] = s("span", { class: "detail-label" }, "Blake3:", -1)),
                    s("span", G0, f(c.value.blake3 || "Not computed"), 1),
                    c.value.blake3 ? (a(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: V[1] || (V[1] = (F) => M(c.value.blake3))
                    }, "Copy")) : y("", !0)
                  ]),
                  s("div", j0, [
                    V[8] || (V[8] = s("span", { class: "detail-label" }, "SHA256:", -1)),
                    s("span", H0, f(c.value.sha256 || "Not computed"), 1),
                    c.value.sha256 ? (a(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: V[2] || (V[2] = (F) => M(c.value.sha256))
                    }, "Copy")) : y("", !0)
                  ]),
                  s("div", q0, [
                    V[9] || (V[9] = s("span", { class: "detail-label" }, "Size:", -1)),
                    s("span", K0, f(T(c.value.size)), 1)
                  ]),
                  s("div", J0, [
                    V[10] || (V[10] = s("span", { class: "detail-label" }, "Category:", -1)),
                    s("span", Q0, f(c.value.category), 1)
                  ]),
                  s("div", Y0, [
                    V[11] || (V[11] = s("span", { class: "detail-label" }, "Last Seen:", -1)),
                    s("span", X0, f(c.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                s("section", Z0, [
                  s("h4", e_, "Locations (" + f(((fe = c.value.locations) == null ? void 0 : fe.length) || 0) + ")", 1),
                  (ue = c.value.locations) != null && ue.length ? (a(), i("div", t_, [
                    (a(!0), i(q, null, he(c.value.locations, (F, Q) => (a(), i("div", {
                      key: Q,
                      class: "location-item"
                    }, [
                      s("span", s_, f(F.path), 1),
                      F.modified ? (a(), i("span", o_, "Modified: " + f(F.modified), 1)) : y("", !0),
                      F.path ? (a(), i("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (Pe) => P(F.path)
                      }, " Open File Location ", 8, n_)) : y("", !0)
                    ]))), 128))
                  ])) : (a(), i("div", a_, "No locations found"))
                ]),
                s("section", l_, [
                  s("h4", i_, "Download Sources (" + f(((we = c.value.sources) == null ? void 0 : we.length) || 0) + ")", 1),
                  (se = c.value.sources) != null && se.length ? (a(), i("div", r_, [
                    (a(!0), i(q, null, he(c.value.sources, (F, Q) => (a(), i("div", {
                      key: Q,
                      class: "source-item"
                    }, [
                      s("span", c_, f(F.type) + ":", 1),
                      s("a", {
                        href: F.url,
                        target: "_blank",
                        class: "source-url"
                      }, f(F.url), 9, u_),
                      s("button", {
                        class: "remove-source-btn",
                        disabled: w.value === F.url,
                        onClick: (Pe) => B(F.url)
                      }, f(w.value === F.url ? "..." : "×"), 9, d_)
                    ]))), 128))
                  ])) : (a(), i("div", f_, " No download sources configured ")),
                  s("div", m_, [
                    Et(s("input", {
                      "onUpdate:modelValue": V[3] || (V[3] = (F) => v.value = F),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [$o, v.value]
                    ]),
                    s("button", {
                      class: "add-source-btn",
                      disabled: !v.value.trim() || g.value,
                      onClick: A
                    }, f(g.value ? "Adding..." : "Add Source"), 9, v_)
                  ]),
                  p.value ? (a(), i("p", p_, f(p.value), 1)) : y("", !0),
                  _.value ? (a(), i("p", g_, f(_.value), 1)) : y("", !0)
                ])
              ])) : y("", !0)
            ];
          }),
          footer: h(() => [
            s("button", {
              class: "btn-secondary",
              onClick: V[4] || (V[4] = (fe) => E.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error", "overlay-z-index"]),
        (a(), R(Rt, { to: "body" }, [
          x.value ? (a(), i("div", {
            key: 0,
            class: Fe(["toast", x.value.type])
          }, f(x.value.message), 3)) : y("", !0)
        ]))
      ], 64);
    };
  }
}), Sl = /* @__PURE__ */ Se(h_, [["__scopeId", "data-v-b553777f"]]), y_ = ["disabled"], w_ = { class: "dropdown-value" }, __ = ["onClick"], k_ = {
  key: 0,
  class: "dropdown-error"
}, b_ = /* @__PURE__ */ be({
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
    const v = N(() => {
      if (!o.modelValue && o.placeholder)
        return o.placeholder;
      const S = o.options.find((T) => d(T) === o.modelValue);
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
      if (!r.value) return;
      const S = r.value.getBoundingClientRect(), T = window.innerHeight, M = T - S.bottom, P = S.top, A = Math.min(300, o.options.length * 36 + 8), B = M < A && P > M;
      c.value = {
        position: "fixed",
        left: `${S.left}px`,
        width: `${S.width}px`,
        maxHeight: "300px",
        ...B ? { bottom: `${T - S.top + 4}px` } : { top: `${S.bottom + 4}px` }
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
    }), Po(() => {
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
        onClick: g
      }, [
        s("span", w_, f(v.value), 1),
        T[0] || (T[0] = s("span", { class: "dropdown-arrow" }, "▼", -1))
      ], 10, y_),
      (a(), R(Rt, { to: "body" }, [
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
          style: At(c.value)
        }, [
          (a(!0), i(q, null, he(e.options, (M) => (a(), i("div", {
            key: d(M),
            class: Fe(["dropdown-option", { selected: d(M) === e.modelValue }]),
            onClick: (P) => p(M)
          }, f(m(M)), 11, __))), 128))
        ], 4)) : y("", !0)
      ])),
      e.error ? (a(), i("span", k_, f(e.error), 1)) : y("", !0)
    ], 512));
  }
}), $_ = /* @__PURE__ */ Se(b_, [["__scopeId", "data-v-857e085b"]]);
function C_(e) {
  const t = e.toLowerCase();
  return t === "huggingface.co" || t.endsWith(".huggingface.co") || t === "hf.co";
}
function x_(e) {
  const t = e.trim();
  if (!t) return { kind: "unknown" };
  let o;
  try {
    o = new URL(t);
  } catch {
    return { kind: "unknown" };
  }
  if (!C_(o.hostname)) return { kind: "unknown" };
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
function S_(e) {
  return e.split("/").map(encodeURIComponent).join("/");
}
function I_(e, t, o) {
  const [n, l] = e.split("/");
  return `https://huggingface.co/${encodeURIComponent(n)}/${encodeURIComponent(l)}/resolve/${encodeURIComponent(t)}/${S_(o)}`;
}
const E_ = { class: "hf-file-browser" }, T_ = { class: "browser-header" }, M_ = { class: "repo-info" }, P_ = { class: "repo-id" }, R_ = {
  key: 0,
  class: "revision-pill"
}, N_ = {
  key: 0,
  class: "loading-state"
}, D_ = {
  key: 1,
  class: "error-state"
}, L_ = { class: "toolbar" }, O_ = { class: "toolbar-actions" }, A_ = { class: "file-list-container" }, U_ = {
  key: 0,
  class: "file-list-header"
}, z_ = ["checked", "indeterminate"], F_ = { class: "sort-indicator" }, V_ = { class: "sort-indicator" }, B_ = {
  key: 1,
  class: "empty-state"
}, W_ = {
  key: 2,
  class: "file-list"
}, G_ = ["onClick"], j_ = ["checked", "onChange"], H_ = { class: "file-path" }, q_ = { class: "file-size" }, K_ = { class: "destination-section" }, J_ = { class: "destination-row" }, Q_ = {
  key: 0,
  class: "path-separator"
}, Y_ = { class: "action-bar" }, X_ = { class: "summary-info" }, Z_ = { class: "summary-count" }, ek = { class: "summary-size" }, tk = /* @__PURE__ */ be({
  __name: "HfFileBrowser",
  props: {
    repoId: {},
    revision: {},
    initialPath: {},
    preselectedFile: {}
  },
  emits: ["queue", "back"],
  setup(e, { emit: t }) {
    const o = e, n = t, { getHuggingFaceRepoInfo: l, getModelsSubdirectories: r } = pt(), u = k([]), c = k(/* @__PURE__ */ new Set()), d = k(!1), m = k(null), v = k(""), g = k(!1), w = k("name"), p = k(!0), _ = k(""), x = k(""), C = k(""), S = k([]), T = k(!1);
    let M = !1;
    const P = /^(.*)-(\d{4,5})-of-(\d{4,5})(\.[^.]+)$/i, A = N(() => {
      let H = u.value;
      if (o.initialPath) {
        const Z = o.initialPath.endsWith("/") ? o.initialPath : `${o.initialPath}/`;
        H = H.filter((K) => K.path.startsWith(Z) || K.path === o.initialPath);
      }
      if (g.value && (H = H.filter((Z) => Z.is_model_file)), v.value.trim()) {
        const Z = v.value.toLowerCase();
        H = H.filter((K) => K.path.toLowerCase().includes(Z));
      }
      return H;
    }), B = N(() => {
      const H = [...A.value];
      return H.sort((Z, K) => {
        let X;
        return w.value === "name" ? X = Z.path.localeCompare(K.path) : X = Z.size - K.size, p.value ? X : -X;
      }), H;
    }), j = N(() => A.value.length === 0 ? !1 : A.value.every((H) => c.value.has(H.path))), E = N(() => A.value.some((H) => c.value.has(H.path))), V = N(() => {
      const H = S.value.map((Z) => ({
        label: Z,
        value: Z
      }));
      return H.push({ label: "Custom path...", value: "__custom__" }), H;
    }), ae = N(() => _.value === "__custom__" ? C.value.trim().length > 0 : _.value.length > 0), fe = N(() => {
      let H = 0;
      for (const Z of c.value) {
        const K = u.value.find((X) => X.path === Z);
        K && (H += K.size);
      }
      return H;
    });
    function ue(H) {
      if (H === 0) return "0 B";
      const Z = 1024 * 1024 * 1024, K = 1024 * 1024, X = 1024;
      return H >= Z ? `${(H / Z).toFixed(2)} GB` : H >= K ? `${(H / K).toFixed(1)} MB` : H >= X ? `${(H / X).toFixed(0)} KB` : `${H} B`;
    }
    function we(H) {
      const Z = H.match(P);
      return Z ? `${Z[1]}${Z[4]}` : null;
    }
    function se(H) {
      const Z = new Set(c.value), K = Z.has(H.path), X = H.shard_group || we(H.path);
      if (X) {
        const xe = u.value.filter((ce) => (ce.shard_group || we(ce.path)) === X);
        K ? xe.forEach((ce) => Z.delete(ce.path)) : xe.forEach((ce) => Z.add(ce.path));
      } else
        K ? Z.delete(H.path) : Z.add(H.path);
      c.value = Z;
    }
    function F() {
      const H = new Set(c.value);
      for (const Z of A.value)
        Z.is_model_file && H.add(Z.path);
      c.value = H;
    }
    function Q() {
      c.value = /* @__PURE__ */ new Set();
    }
    function Pe() {
      if (j.value) {
        const H = new Set(c.value);
        for (const Z of A.value)
          H.delete(Z.path);
        c.value = H;
      } else {
        const H = new Set(c.value);
        for (const Z of A.value)
          H.add(Z.path);
        c.value = H;
      }
    }
    function te(H) {
      w.value === H ? p.value = !p.value : (w.value = H, p.value = !0);
    }
    function ge(H) {
      const Z = H.split("/");
      return Z.length >= 2 ? Z[Z.length - 2] : null;
    }
    function O() {
      if (T.value || c.value.size === 0) return;
      const H = /* @__PURE__ */ new Set();
      for (const X of c.value) {
        const xe = ge(X);
        xe && H.add(xe.toLowerCase());
      }
      if (H.size !== 1) return;
      const Z = [...H][0], K = S.value.find(
        (X) => X.toLowerCase() === Z
      );
      K && K !== _.value && (M = !0, _.value = K, Pt(() => {
        M = !1;
      }));
    }
    function me() {
      return _.value === "__custom__" ? C.value.trim() : x.value.trim() ? `${_.value}/${x.value.trim()}` : _.value;
    }
    function Re() {
      if (c.value.size === 0 || !ae.value) return;
      const H = me(), Z = [];
      for (const K of c.value) {
        const X = u.value.find((xe) => xe.path === K);
        X && Z.push({
          url: I_(o.repoId, o.revision, X.path),
          destination: H,
          filename: X.path.split("/").pop() || X.path
        });
      }
      n("queue", Z);
    }
    async function Ge() {
      if (o.repoId) {
        d.value = !0, m.value = null;
        try {
          const H = `https://huggingface.co/${o.repoId}/tree/${o.revision || "main"}`, Z = await l(H);
          if (u.value = Z.files, o.preselectedFile) {
            const K = u.value.find((X) => X.path === o.preselectedFile);
            K && se(K);
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
      o.repoId && Ge();
    }, { immediate: !1 }), kt(() => o.repoId, () => {
      T.value = !1;
    }), kt(c, () => {
      O();
    }, { deep: !0 }), kt(S, () => {
      S.value.length > 0 && c.value.size > 0 && O();
    }), kt(_, (H, Z) => {
      M || Z === "" || (T.value = !0);
    }), rt(() => {
      Ge(), Ee();
    }), (H, Z) => (a(), i("div", E_, [
      s("div", T_, [
        s("button", {
          class: "back-btn",
          onClick: Z[0] || (Z[0] = (K) => H.$emit("back")),
          title: "Back to search"
        }, " ◄ "),
        s("div", M_, [
          s("span", P_, f(e.repoId), 1),
          e.revision ? (a(), i("span", R_, f(e.revision), 1)) : y("", !0)
        ])
      ]),
      d.value ? (a(), i("div", N_, " Loading repository files... ")) : m.value ? (a(), i("div", D_, f(m.value), 1)) : (a(), i(q, { key: 2 }, [
        s("div", L_, [
          b(wt, {
            modelValue: v.value,
            "onUpdate:modelValue": Z[1] || (Z[1] = (K) => v.value = K),
            placeholder: "Filter files...",
            type: "search",
            class: "search-input"
          }, null, 8, ["modelValue"]),
          s("div", O_, [
            s("button", {
              class: Fe(["toggle-btn", { active: g.value }]),
              onClick: Z[2] || (Z[2] = (K) => g.value = !g.value)
            }, f(g.value ? "Models Only" : "All Files"), 3),
            s("button", {
              class: "action-btn",
              onClick: F
            }, "Auto-Select Models"),
            s("button", {
              class: "action-btn",
              onClick: Q
            }, "Clear")
          ])
        ]),
        s("div", A_, [
          A.value.length > 0 ? (a(), i("div", U_, [
            s("input", {
              type: "checkbox",
              checked: j.value,
              indeterminate: E.value && !j.value,
              class: "file-checkbox",
              onChange: Pe
            }, null, 40, z_),
            s("span", {
              class: "header-name",
              onClick: Z[3] || (Z[3] = (K) => te("name"))
            }, [
              Z[9] || (Z[9] = $(" Name ", -1)),
              s("span", F_, f(w.value === "name" ? p.value ? "▲" : "▼" : ""), 1)
            ]),
            s("span", {
              class: "header-size",
              onClick: Z[4] || (Z[4] = (K) => te("size"))
            }, [
              Z[10] || (Z[10] = $(" Size ", -1)),
              s("span", V_, f(w.value === "size" ? p.value ? "▲" : "▼" : ""), 1)
            ])
          ])) : y("", !0),
          A.value.length === 0 ? (a(), i("div", B_, f(u.value.length === 0 ? "No files in repository" : "No files match filter"), 1)) : (a(), i("div", W_, [
            (a(!0), i(q, null, he(B.value, (K) => (a(), i("div", {
              key: K.path,
              class: Fe(["file-item", { selected: c.value.has(K.path) }]),
              onClick: (X) => se(K)
            }, [
              s("input", {
                type: "checkbox",
                checked: c.value.has(K.path),
                class: "file-checkbox",
                onClick: Z[5] || (Z[5] = mt(() => {
                }, ["stop"])),
                onChange: (X) => se(K)
              }, null, 40, j_),
              s("span", H_, f(K.path), 1),
              s("span", q_, f(ue(K.size)), 1)
            ], 10, G_))), 128))
          ]))
        ]),
        s("div", K_, [
          Z[11] || (Z[11] = s("h4", { class: "section-label" }, "Download Destination", -1)),
          s("div", J_, [
            b($_, {
              modelValue: _.value,
              "onUpdate:modelValue": Z[6] || (Z[6] = (K) => _.value = K),
              options: V.value,
              placeholder: "Select directory...",
              class: "dest-select"
            }, null, 8, ["modelValue", "options"]),
            _.value !== "__custom__" ? (a(), i("span", Q_, "/")) : y("", !0),
            _.value !== "__custom__" ? (a(), R(wt, {
              key: 1,
              modelValue: x.value,
              "onUpdate:modelValue": Z[7] || (Z[7] = (K) => x.value = K),
              placeholder: "subfolder (optional)",
              class: "dest-subfolder"
            }, null, 8, ["modelValue"])) : y("", !0)
          ]),
          _.value === "__custom__" ? (a(), R(wt, {
            key: 0,
            modelValue: C.value,
            "onUpdate:modelValue": Z[8] || (Z[8] = (K) => C.value = K),
            placeholder: "Enter full path relative to models directory...",
            class: "dest-custom",
            "full-width": ""
          }, null, 8, ["modelValue"])) : y("", !0)
        ]),
        s("div", Y_, [
          s("div", X_, [
            s("span", Z_, f(c.value.size) + " file(s) selected", 1),
            s("span", ek, f(ue(fe.value)), 1)
          ]),
          b(Oe, {
            variant: "primary",
            disabled: c.value.size === 0 || !ae.value,
            onClick: Re
          }, {
            default: h(() => [...Z[12] || (Z[12] = [
              $(" Queue Download ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"])
        ])
      ], 64))
    ]));
  }
}), sk = /* @__PURE__ */ Se(tk, [["__scopeId", "data-v-183acebc"]]), ok = { class: "token-config-modal" }, nk = { class: "provider-info" }, ak = { class: "provider-icon" }, lk = { class: "provider-name" }, ik = {
  key: 0,
  class: "current-token"
}, rk = { class: "mask" }, ck = { class: "token-input-section" }, uk = { class: "input-label" }, dk = { class: "help-text" }, fk = ["href"], mk = { class: "modal-actions" }, vk = /* @__PURE__ */ be({
  __name: "TokenConfigModal",
  props: {
    provider: {},
    currentTokenMask: {}
  },
  emits: ["close", "saved", "cleared"],
  setup(e, { emit: t }) {
    const o = e, n = t, { updateConfig: l } = pt(), r = k(""), u = k(!1), c = k(!1), d = N(
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
    return (x, C) => (a(), R(Tt, {
      title: "Configure API Token",
      onClose: C[2] || (C[2] = (S) => x.$emit("close"))
    }, {
      body: h(() => [
        s("div", ok, [
          s("div", nk, [
            s("span", ak, f(m.value), 1),
            s("span", lk, f(d.value), 1)
          ]),
          e.currentTokenMask ? (a(), i("div", ik, [
            C[4] || (C[4] = s("span", { class: "label" }, "Current token:", -1)),
            s("span", rk, f(e.currentTokenMask), 1),
            b(Oe, {
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
          s("div", ck, [
            s("label", uk, f(e.currentTokenMask ? "Replace with new token:" : "Enter token:"), 1),
            b(wt, {
              modelValue: r.value,
              "onUpdate:modelValue": C[0] || (C[0] = (S) => r.value = S),
              type: "password",
              placeholder: v.value
            }, null, 8, ["modelValue", "placeholder"]),
            s("div", dk, [
              s("a", {
                href: g.value,
                target: "_blank",
                rel: "noopener"
              }, f(w.value), 9, fk)
            ])
          ])
        ])
      ]),
      footer: h(() => [
        s("div", mk, [
          b(Oe, {
            variant: "secondary",
            onClick: C[1] || (C[1] = (S) => x.$emit("close"))
          }, {
            default: h(() => [...C[5] || (C[5] = [
              $(" Cancel ", -1)
            ])]),
            _: 1
          }),
          b(Oe, {
            variant: "primary",
            disabled: !r.value.trim(),
            loading: u.value,
            onClick: p
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
}), pk = /* @__PURE__ */ Se(vk, [["__scopeId", "data-v-0687d0ce"]]), gk = { class: "huggingface-tab" }, hk = {
  key: 0,
  class: "search-section"
}, yk = { class: "search-header" }, wk = { class: "search-bar" }, _k = {
  key: 1,
  class: "search-results"
}, kk = {
  key: 0,
  class: "loading-state"
}, bk = {
  key: 1,
  class: "error-state"
}, $k = {
  key: 2,
  class: "results-list"
}, Ck = ["onClick"], xk = { class: "repo-header" }, Sk = { class: "repo-id" }, Ik = { class: "repo-stats" }, Ek = {
  class: "stat",
  title: "Downloads"
}, Tk = {
  class: "stat",
  title: "Likes"
}, Mk = {
  key: 0,
  class: "repo-desc"
}, Pk = {
  key: 1,
  class: "repo-tags"
}, Rk = {
  key: 3,
  class: "empty-state"
}, Nk = {
  key: 4,
  class: "hint-state"
}, Dk = /* @__PURE__ */ be({
  __name: "HuggingFaceTab",
  emits: ["queue"],
  setup(e) {
    const { searchHuggingFaceRepos: t, getConfig: o } = pt(), n = k("search"), l = k(""), r = k([]), u = k(!1), c = k(null), d = k(!1), m = k(null), v = k("main"), g = k(), w = k(), p = k(!1), _ = k(null), x = N(() => {
      if (!c.value) return !1;
      const j = c.value.toLowerCase();
      return c.value.includes("401") || c.value.includes("403") || j.includes("authentication") || j.includes("unauthorized");
    });
    function C(j) {
      return j >= 1e6 ? `${(j / 1e6).toFixed(1)}M` : j >= 1e3 ? `${(j / 1e3).toFixed(1)}K` : String(j);
    }
    async function S() {
      const j = l.value.trim();
      if (!j) return;
      c.value = null;
      const E = x_(j);
      if (E.kind === "file" && E.repoId && E.path) {
        m.value = E.repoId, v.value = E.revision || "main";
        const V = E.path.split("/");
        V.length > 1 ? g.value = V.slice(0, -1).join("/") : g.value = void 0, w.value = E.path, n.value = "browse";
        return;
      }
      if (E.kind === "repo" && E.repoId) {
        m.value = E.repoId, v.value = E.revision || "main", g.value = E.path, w.value = void 0, n.value = "browse";
        return;
      }
      if (/^[\w-]+\/[\w.-]+$/.test(j) && !j.includes("://")) {
        m.value = j, v.value = "main", g.value = void 0, w.value = void 0, n.value = "browse";
        return;
      }
      u.value = !0;
      try {
        const V = await t(j);
        r.value = V.results, d.value = !0;
      } catch (V) {
        c.value = V instanceof Error ? V.message : "Search failed";
      } finally {
        u.value = !1;
      }
    }
    function T(j) {
      m.value = j, v.value = "main", g.value = void 0, w.value = void 0, n.value = "browse";
    }
    function M() {
      n.value = "search", m.value = null, g.value = void 0, w.value = void 0;
    }
    async function P() {
      try {
        const j = await o();
        _.value = j.huggingface_token || null;
      } catch (j) {
        console.error("Failed to load config:", j);
      }
    }
    function A() {
      P(), x.value && l.value && S();
    }
    function B() {
      _.value = null;
    }
    return rt(P), (j, E) => (a(), i("div", gk, [
      n.value === "search" ? (a(), i("div", hk, [
        s("div", yk, [
          s("div", wk, [
            b(wt, {
              modelValue: l.value,
              "onUpdate:modelValue": E[0] || (E[0] = (V) => l.value = V),
              placeholder: "Search repos, paste URL, or enter user/repo...",
              onKeydown: fs(S, ["enter"])
            }, null, 8, ["modelValue"]),
            b(Oe, {
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
          b(Oe, {
            variant: "secondary",
            size: "sm",
            onClick: E[1] || (E[1] = (V) => p.value = !0)
          }, {
            default: h(() => [
              $(f(_.value ? `Token: ${_.value}` : "Configure Token"), 1)
            ]),
            _: 1
          })
        ])
      ])) : y("", !0),
      n.value === "search" ? (a(), i("div", _k, [
        u.value ? (a(), i("div", kk, " Searching HuggingFace... ")) : c.value ? (a(), i("div", bk, [
          s("p", null, f(c.value), 1),
          x.value ? (a(), R(Oe, {
            key: 0,
            variant: "primary",
            size: "sm",
            onClick: E[2] || (E[2] = (V) => p.value = !0)
          }, {
            default: h(() => [...E[6] || (E[6] = [
              $(" Configure HuggingFace Token ", -1)
            ])]),
            _: 1
          })) : y("", !0)
        ])) : r.value.length > 0 ? (a(), i("div", $k, [
          (a(!0), i(q, null, he(r.value, (V) => (a(), i("div", {
            key: V.repo_id,
            class: "repo-card",
            onClick: (ae) => T(V.repo_id)
          }, [
            s("div", xk, [
              s("span", Sk, f(V.repo_id), 1),
              s("div", Ik, [
                s("span", Ek, [
                  E[7] || (E[7] = s("span", { class: "stat-icon" }, "↓", -1)),
                  $(" " + f(C(V.downloads)), 1)
                ]),
                s("span", Tk, [
                  E[8] || (E[8] = s("span", { class: "stat-icon" }, "★", -1)),
                  $(" " + f(C(V.likes)), 1)
                ])
              ])
            ]),
            V.description ? (a(), i("p", Mk, f(V.description), 1)) : y("", !0),
            V.tags.length > 0 ? (a(), i("div", Pk, [
              (a(!0), i(q, null, he(V.tags.slice(0, 5), (ae) => (a(), i("span", {
                key: ae,
                class: "tag"
              }, f(ae), 1))), 128))
            ])) : y("", !0)
          ], 8, Ck))), 128))
        ])) : d.value ? (a(), i("div", Rk, " No repositories found ")) : (a(), i("div", Nk, " Enter a HuggingFace URL, repo ID (user/repo), or search term "))
      ])) : (a(), R(sk, {
        key: 2,
        "repo-id": m.value,
        revision: v.value,
        "initial-path": g.value,
        "preselected-file": w.value,
        onBack: M,
        onQueue: E[3] || (E[3] = (V) => j.$emit("queue", V))
      }, null, 8, ["repo-id", "revision", "initial-path", "preselected-file"])),
      p.value ? (a(), R(pk, {
        key: 3,
        provider: "huggingface",
        "current-token-mask": _.value,
        onClose: E[4] || (E[4] = (V) => p.value = !1),
        onSaved: A,
        onCleared: B
      }, null, 8, ["current-token-mask"])) : y("", !0)
    ]));
  }
}), Lk = /* @__PURE__ */ Se(Dk, [["__scopeId", "data-v-e13209bf"]]), Ok = { class: "civitai-tab" }, Ak = /* @__PURE__ */ be({
  __name: "CivitaiTab",
  setup(e) {
    return (t, o) => (a(), i("div", Ok, [...o[0] || (o[0] = [
      s("div", { class: "placeholder" }, [
        s("div", { class: "icon" }, "🎨"),
        s("h3", null, "Civitai Integration"),
        s("p", null, "Coming soon! Civitai model search and download will be available in a future update.")
      ], -1)
    ])]));
  }
}), Uk = /* @__PURE__ */ Se(Ak, [["__scopeId", "data-v-44948051"]]), zk = { class: "direct-url-tab" }, Fk = { class: "input-group" }, Vk = { class: "input-group" }, Bk = {
  key: 0,
  class: "error"
}, Wk = { class: "actions" }, Gk = /* @__PURE__ */ be({
  __name: "DirectUrlTab",
  emits: ["queue"],
  setup(e, { emit: t }) {
    const o = t, n = k(""), l = k(""), r = N(() => {
      const d = l.value.trim();
      if (!d) return null;
      const m = d.replace(/\\/g, "/").split("/").pop() || "";
      return m.includes(".") && !m.endsWith(".") ? null : "Target path must include a filename (e.g. checkpoints/model.safetensors).";
    }), u = N(() => n.value.trim() !== "" && l.value.trim() !== "" && !r.value), c = () => {
      if (!u.value) return;
      const d = l.value.replace(/\\/g, "/").split("/").pop() || "";
      o("queue", [{
        url: n.value.trim(),
        targetPath: l.value.trim(),
        filename: d
      }]), n.value = "", l.value = "";
    };
    return (d, m) => (a(), i("div", zk, [
      s("div", Fk, [
        m[2] || (m[2] = s("label", null, "Download URL", -1)),
        b(wt, {
          modelValue: n.value,
          "onUpdate:modelValue": m[0] || (m[0] = (v) => n.value = v),
          placeholder: "https://example.com/model.safetensors"
        }, null, 8, ["modelValue"])
      ]),
      s("div", Vk, [
        m[3] || (m[3] = s("label", null, "Target Path (relative to models directory)", -1)),
        b(wt, {
          modelValue: l.value,
          "onUpdate:modelValue": m[1] || (m[1] = (v) => l.value = v),
          placeholder: "e.g. checkpoints/model.safetensors"
        }, null, 8, ["modelValue"]),
        r.value ? (a(), i("p", Bk, f(r.value), 1)) : y("", !0)
      ]),
      m[5] || (m[5] = s("p", { class: "note" }, "Model will be queued for background download.", -1)),
      s("div", Wk, [
        b(Oe, {
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
}), jk = /* @__PURE__ */ Se(Gk, [["__scopeId", "data-v-01def7aa"]]), Hk = { class: "download-modal" }, qk = { class: "tab-bar" }, Kk = ["onClick"], Jk = { class: "tab-content" }, Qk = /* @__PURE__ */ be({
  __name: "ModelDownloadModal",
  props: {
    show: { type: Boolean }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const o = t, { addToQueue: n } = No(), l = [
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
    return (m, v) => e.show ? (a(), R(Tt, {
      key: 0,
      title: "DOWNLOAD NEW MODEL",
      size: "xl",
      "fixed-height": "",
      onClose: d
    }, {
      body: h(() => [
        s("div", Hk, [
          s("div", qk, [
            (a(), i(q, null, he(l, (g) => s("button", {
              key: g.id,
              class: Fe(["tab-btn", { active: r.value === g.id }]),
              onClick: (w) => r.value = g.id
            }, f(g.icon) + " " + f(g.label), 11, Kk)), 64))
          ]),
          s("div", Jk, [
            r.value === "huggingface" ? (a(), R(Lk, {
              key: 0,
              onQueue: u
            })) : r.value === "civitai" ? (a(), R(Uk, { key: 1 })) : r.value === "direct" ? (a(), R(jk, {
              key: 2,
              onQueue: c
            })) : y("", !0)
          ])
        ])
      ]),
      footer: h(() => [
        b(Oe, {
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
}), ec = /* @__PURE__ */ Se(Qk, [["__scopeId", "data-v-90a9f401"]]), Yk = /* @__PURE__ */ be({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(e, { emit: t }) {
    const o = t, { getEnvironmentModels: n, getStatus: l } = pt(), r = k([]), u = k([]), c = k("production"), d = k(!1), m = k(null), v = k(""), g = k(!1), w = k(null), p = k(!1);
    function _() {
      g.value = !1, o("navigate", "model-index");
    }
    const x = N(
      () => r.value.reduce((E, V) => E + (V.size || 0), 0)
    ), C = N(() => {
      if (!v.value.trim()) return r.value;
      const E = v.value.toLowerCase();
      return r.value.filter((V) => V.filename.toLowerCase().includes(E));
    }), S = N(() => {
      if (!v.value.trim()) return u.value;
      const E = v.value.toLowerCase();
      return u.value.filter((V) => V.filename.toLowerCase().includes(E));
    }), T = N(() => {
      const E = {};
      for (const ae of C.value) {
        const fe = ae.type || "other";
        E[fe] || (E[fe] = []), E[fe].push(ae);
      }
      const V = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(E).sort(([ae], [fe]) => {
        const ue = V.indexOf(ae), we = V.indexOf(fe);
        return ue >= 0 && we >= 0 ? ue - we : ue >= 0 ? -1 : we >= 0 ? 1 : ae.localeCompare(fe);
      }).map(([ae, fe]) => ({ type: ae, models: fe }));
    });
    function M(E) {
      if (!E) return "Unknown";
      const V = E / (1024 * 1024);
      return V >= 1024 ? `${(V / 1024).toFixed(1)} GB` : `${V.toFixed(0)} MB`;
    }
    function P(E) {
      w.value = E.hash || E.filename;
    }
    function A(E) {
      o("navigate", "model-index");
    }
    function B(E) {
      alert(`Download functionality not yet implemented for ${E}`);
    }
    async function j() {
      d.value = !0, m.value = null;
      try {
        const E = await n();
        r.value = E, u.value = [];
        const V = await l();
        c.value = V.environment || "production";
      } catch (E) {
        m.value = E instanceof Error ? E.message : "Failed to load models";
      } finally {
        d.value = !1;
      }
    }
    return rt(j), (E, V) => (a(), i(q, null, [
      b(Ut, null, {
        header: h(() => [
          b(zt, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: V[1] || (V[1] = (ae) => g.value = !0)
          }, {
            actions: h(() => [
              b(Te, {
                variant: "primary",
                size: "sm",
                onClick: V[0] || (V[0] = (ae) => p.value = !0)
              }, {
                default: h(() => [...V[6] || (V[6] = [
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
            "onUpdate:modelValue": V[2] || (V[2] = (ae) => v.value = ae),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          d.value ? (a(), R(xs, {
            key: 0,
            message: "Loading environment models..."
          })) : m.value ? (a(), R(Ss, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: j
          }, null, 8, ["message"])) : (a(), i(q, { key: 2 }, [
            r.value.length ? (a(), R(ia, {
              key: 0,
              variant: "compact"
            }, {
              default: h(() => [
                $(" Total: " + f(r.value.length) + " models • " + f(M(x.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : y("", !0),
            (a(!0), i(q, null, he(T.value, (ae) => (a(), R(St, {
              key: ae.type,
              title: ae.type.toUpperCase(),
              count: ae.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: h(() => [
                (a(!0), i(q, null, he(ae.models, (fe) => (a(), R(Vt, {
                  key: fe.hash || fe.filename,
                  status: "synced"
                }, {
                  icon: h(() => [...V[7] || (V[7] = [
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
                      default: h(() => [...V[8] || (V[8] = [
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
            S.value.length ? (a(), R(St, {
              key: 1,
              title: "MISSING",
              count: S.value.length
            }, {
              default: h(() => [
                (a(!0), i(q, null, he(S.value, (ae) => (a(), R(Vt, {
                  key: ae.filename,
                  status: "broken"
                }, {
                  icon: h(() => [...V[9] || (V[9] = [
                    $("⚠", -1)
                  ])]),
                  title: h(() => [
                    $(f(ae.filename), 1)
                  ]),
                  subtitle: h(() => [...V[10] || (V[10] = [
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
                      onClick: (fe) => B(ae.filename)
                    }, {
                      default: h(() => [...V[11] || (V[11] = [
                        $(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (fe) => A(ae.filename)
                    }, {
                      default: h(() => [...V[12] || (V[12] = [
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
            !C.value.length && !S.value.length ? (a(), R(rs, {
              key: 2,
              icon: "📭",
              message: v.value ? `No models match '${v.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : y("", !0)
          ], 64))
        ]),
        _: 1
      }),
      b(cs, {
        show: g.value,
        title: "About Environment Models",
        onClose: V[3] || (V[3] = (ae) => g.value = !1)
      }, {
        content: h(() => [
          s("p", null, [
            V[13] || (V[13] = $(" These are models currently used by workflows in ", -1)),
            s("strong", null, '"' + f(c.value) + '"', 1),
            V[14] || (V[14] = $(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: h(() => [
          b(Te, {
            variant: "primary",
            onClick: _
          }, {
            default: h(() => [...V[15] || (V[15] = [
              $(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w.value ? (a(), R(Sl, {
        key: 0,
        identifier: w.value,
        onClose: V[4] || (V[4] = (ae) => w.value = null)
      }, null, 8, ["identifier"])) : y("", !0),
      b(ec, {
        show: p.value,
        onClose: V[5] || (V[5] = (ae) => p.value = !1)
      }, null, 8, ["show"])
    ], 64));
  }
}), Xk = /* @__PURE__ */ Se(Yk, [["__scopeId", "data-v-af3ca736"]]), Zk = {
  key: 0,
  class: "indexing-progress"
}, eb = { class: "progress-info" }, tb = { class: "progress-label" }, sb = { class: "progress-count" }, ob = { class: "progress-bar" }, nb = { class: "modal-content" }, ab = { class: "modal-header" }, lb = { class: "modal-body" }, ib = { class: "input-group" }, rb = { class: "current-path" }, cb = { class: "input-group" }, ub = { class: "modal-footer" }, db = /* @__PURE__ */ be({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(e, { emit: t }) {
    const {
      getWorkspaceModels: o,
      scanWorkspaceModels: n,
      getModelsDirectory: l,
      setModelsDirectory: r
    } = pt(), u = t, c = k([]), d = k(!1), m = k(!1), v = k(null), g = k(""), w = k(!1), p = k(null), _ = k(!1), x = k(null), C = k(""), S = k(!1), T = k(!1), M = k(null), P = N(
      () => c.value.reduce((we, se) => we + (se.size || 0), 0)
    ), A = N(() => {
      if (!g.value.trim()) return c.value;
      const we = g.value.toLowerCase();
      return c.value.filter((se) => {
        const F = se, Q = se.sha256 || F.sha256_hash || "";
        return se.filename.toLowerCase().includes(we) || Q.toLowerCase().includes(we);
      });
    }), B = N(() => {
      const we = {};
      for (const F of A.value) {
        const Q = F.type || "other";
        we[Q] || (we[Q] = []), we[Q].push(F);
      }
      const se = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(we).sort(([F], [Q]) => {
        const Pe = se.indexOf(F), te = se.indexOf(Q);
        return Pe >= 0 && te >= 0 ? Pe - te : Pe >= 0 ? -1 : te >= 0 ? 1 : F.localeCompare(Q);
      }).map(([F, Q]) => ({ type: F, models: Q }));
    });
    function j(we) {
      if (!we) return "Unknown";
      const se = 1024 * 1024 * 1024, F = 1024 * 1024;
      return we >= se ? `${(we / se).toFixed(1)} GB` : we >= F ? `${(we / F).toFixed(0)} MB` : `${(we / 1024).toFixed(0)} KB`;
    }
    function E(we) {
      p.value = we.hash || we.filename;
    }
    async function V() {
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
    }), (we, se) => (a(), i(q, null, [
      b(Ut, null, {
        header: h(() => [
          b(zt, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: se[2] || (se[2] = (F) => w.value = !0)
          }, {
            actions: h(() => [
              b(Te, {
                variant: "primary",
                size: "sm",
                disabled: m.value,
                onClick: V
              }, {
                default: h(() => [
                  $(f(m.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              b(Te, {
                variant: "primary",
                size: "sm",
                onClick: se[0] || (se[0] = (F) => _.value = !0)
              }, {
                default: h(() => [...se[11] || (se[11] = [
                  $(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              b(Te, {
                variant: "primary",
                size: "sm",
                onClick: se[1] || (se[1] = (F) => T.value = !0)
              }, {
                default: h(() => [...se[12] || (se[12] = [
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
          M.value ? (a(), i("div", Zk, [
            s("div", eb, [
              s("span", tb, f(M.value.message), 1),
              s("span", sb, f(M.value.current) + "/" + f(M.value.total), 1)
            ]),
            s("div", ob, [
              s("div", {
                class: "progress-fill",
                style: At({ width: `${M.value.current / M.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : y("", !0),
          b(io, {
            modelValue: g.value,
            "onUpdate:modelValue": se[3] || (se[3] = (F) => g.value = F),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          d.value || M.value ? (a(), R(xs, {
            key: 0,
            message: M.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : v.value ? (a(), R(Ss, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: fe
          }, null, 8, ["message"])) : (a(), i(q, { key: 2 }, [
            c.value.length ? (a(), R(ia, {
              key: 0,
              variant: "compact"
            }, {
              default: h(() => [
                $(" Total: " + f(c.value.length) + " models • " + f(j(P.value)), 1)
              ]),
              _: 1
            })) : y("", !0),
            (a(!0), i(q, null, he(B.value, (F) => (a(), R(St, {
              key: F.type,
              title: F.type.toUpperCase(),
              count: F.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: h(() => [
                (a(!0), i(q, null, he(F.models, (Q) => (a(), R(Vt, {
                  key: Q.sha256 || Q.filename,
                  status: "synced"
                }, {
                  icon: h(() => [...se[13] || (se[13] = [
                    $("📦", -1)
                  ])]),
                  title: h(() => [
                    $(f(Q.filename), 1)
                  ]),
                  subtitle: h(() => [
                    $(f(j(Q.size)), 1)
                  ]),
                  details: h(() => [
                    b(_t, {
                      label: "Hash:",
                      value: Q.hash ? Q.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Pe) => E(Q)
                    }, {
                      default: h(() => [...se[14] || (se[14] = [
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
            A.value.length ? y("", !0) : (a(), R(rs, {
              key: 1,
              icon: "📭",
              message: g.value ? `No models match '${g.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      b(cs, {
        show: w.value,
        title: "About Workspace Model Index",
        onClose: se[4] || (se[4] = (F) => w.value = !1)
      }, {
        content: h(() => [...se[15] || (se[15] = [
          s("p", null, [
            $(" Content-addressable model storage shared across "),
            s("strong", null, "all environments"),
            $(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      p.value ? (a(), R(Sl, {
        key: 0,
        identifier: p.value,
        onClose: se[5] || (se[5] = (F) => p.value = null)
      }, null, 8, ["identifier"])) : y("", !0),
      (a(), R(Rt, { to: "body" }, [
        _.value ? (a(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: se[9] || (se[9] = mt((F) => _.value = !1, ["self"]))
        }, [
          s("div", nb, [
            s("div", ab, [
              se[16] || (se[16] = s("h3", null, "Change Models Directory", -1)),
              s("button", {
                class: "modal-close",
                onClick: se[6] || (se[6] = (F) => _.value = !1)
              }, "✕")
            ]),
            s("div", lb, [
              s("div", ib, [
                se[17] || (se[17] = s("label", null, "Current Directory", -1)),
                s("code", rb, f(x.value || "Not set"), 1)
              ]),
              s("div", cb, [
                se[18] || (se[18] = s("label", null, "New Directory Path", -1)),
                b(wt, {
                  modelValue: C.value,
                  "onUpdate:modelValue": se[7] || (se[7] = (F) => C.value = F),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              se[19] || (se[19] = s("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            s("div", ub, [
              b(Oe, {
                variant: "secondary",
                onClick: se[8] || (se[8] = (F) => _.value = !1)
              }, {
                default: h(() => [...se[20] || (se[20] = [
                  $(" Cancel ", -1)
                ])]),
                _: 1
              }),
              b(Oe, {
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
      b(ec, {
        show: T.value,
        onClose: se[10] || (se[10] = (F) => T.value = !1)
      }, null, 8, ["show"])
    ], 64));
  }
}), fb = /* @__PURE__ */ Se(db, [["__scopeId", "data-v-3705114c"]]), mb = { class: "node-details" }, vb = { class: "status-row" }, pb = {
  key: 0,
  class: "detail-row"
}, gb = { class: "value" }, hb = { class: "detail-row" }, yb = { class: "value" }, wb = {
  key: 1,
  class: "detail-row"
}, _b = { class: "value mono" }, kb = {
  key: 2,
  class: "detail-row"
}, bb = ["href"], $b = {
  key: 3,
  class: "detail-row"
}, Cb = { class: "value mono small" }, xb = { class: "detail-row" }, Sb = {
  key: 0,
  class: "value"
}, Ib = {
  key: 1,
  class: "workflow-list"
}, Eb = /* @__PURE__ */ be({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const o = e, n = t, l = N(() => o.node.installed ? o.node.tracked ? o.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), r = N(() => o.node.installed ? o.node.tracked ? o.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), u = N(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[o.node.source] || o.node.source);
    return (c, d) => (a(), R(Tt, {
      title: `NODE DETAILS: ${e.node.name}`,
      size: "md",
      onClose: d[1] || (d[1] = (m) => n("close"))
    }, {
      body: h(() => [
        s("div", mb, [
          s("div", vb, [
            d[2] || (d[2] = s("span", { class: "label" }, "Status:", -1)),
            s("span", {
              class: Fe(["status-badge", l.value])
            }, f(r.value), 3)
          ]),
          e.node.version ? (a(), i("div", pb, [
            d[3] || (d[3] = s("span", { class: "label" }, "Version:", -1)),
            s("span", gb, f(e.node.source === "development" ? "" : "v") + f(e.node.version), 1)
          ])) : y("", !0),
          s("div", hb, [
            d[4] || (d[4] = s("span", { class: "label" }, "Source:", -1)),
            s("span", yb, f(u.value), 1)
          ]),
          e.node.registry_id ? (a(), i("div", wb, [
            d[5] || (d[5] = s("span", { class: "label" }, "Registry ID:", -1)),
            s("span", _b, f(e.node.registry_id), 1)
          ])) : y("", !0),
          e.node.repository ? (a(), i("div", kb, [
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
            ], 8, bb)
          ])) : y("", !0),
          e.node.download_url ? (a(), i("div", $b, [
            d[8] || (d[8] = s("span", { class: "label" }, "Download URL:", -1)),
            s("span", Cb, f(e.node.download_url), 1)
          ])) : y("", !0),
          d[10] || (d[10] = s("div", { class: "section-divider" }, null, -1)),
          s("div", xb, [
            d[9] || (d[9] = s("span", { class: "label" }, "Used by:", -1)),
            !e.node.used_in_workflows || e.node.used_in_workflows.length === 0 ? (a(), i("span", Sb, " Not used in any workflows ")) : (a(), i("div", Ib, [
              (a(!0), i(q, null, he(e.node.used_in_workflows, (m) => (a(), i("span", {
                key: m,
                class: "workflow-tag"
              }, f(m), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: h(() => [
        b(Oe, {
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
}), Tb = /* @__PURE__ */ Se(Eb, [["__scopeId", "data-v-b342f626"]]), Mb = { class: "dialog-message" }, Pb = {
  key: 0,
  class: "dialog-details"
}, Rb = {
  key: 1,
  class: "dialog-warning"
}, Nb = /* @__PURE__ */ be({
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
    return (t, o) => (a(), R(Tt, {
      title: e.title,
      size: "sm",
      onClose: o[3] || (o[3] = (n) => t.$emit("cancel"))
    }, {
      body: h(() => [
        s("p", Mb, f(e.message), 1),
        e.details && e.details.length ? (a(), i("div", Pb, [
          (a(!0), i(q, null, he(e.details, (n, l) => (a(), i("div", {
            key: l,
            class: "detail-item"
          }, " • " + f(n), 1))), 128))
        ])) : y("", !0),
        e.warning ? (a(), i("p", Rb, [
          o[4] || (o[4] = s("span", { class: "warning-icon" }, "⚠", -1)),
          $(" " + f(e.warning), 1)
        ])) : y("", !0)
      ]),
      footer: h(() => [
        b(Oe, {
          variant: "secondary",
          onClick: o[0] || (o[0] = (n) => t.$emit("cancel"))
        }, {
          default: h(() => [
            $(f(e.cancelLabel), 1)
          ]),
          _: 1
        }),
        e.secondaryAction ? (a(), R(Oe, {
          key: 0,
          variant: "secondary",
          onClick: o[1] || (o[1] = (n) => t.$emit("secondary"))
        }, {
          default: h(() => [
            $(f(e.secondaryLabel), 1)
          ]),
          _: 1
        })) : y("", !0),
        b(Oe, {
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
}), Il = /* @__PURE__ */ Se(Nb, [["__scopeId", "data-v-3670b9f5"]]), Db = { class: "mismatch-warning" }, Lb = { class: "version-mismatch" }, Ob = { class: "version-actual" }, Ab = { class: "version-expected" }, Ub = { style: { color: "var(--cg-color-warning)" } }, zb = { style: { color: "var(--cg-color-warning)" } }, Fb = {
  key: 0,
  class: "community-status-badge"
}, Vb = { key: 0 }, Bb = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, Wb = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, Gb = { class: "criticality-control" }, jb = ["value", "disabled", "onChange"], Hb = /* @__PURE__ */ be({
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
    } = pt(), v = k({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0,
      blocked_count: 0
    }), g = k(!1), w = k(null), p = k(""), _ = k(!1), x = k(null), C = k(/* @__PURE__ */ new Set()), S = k(/* @__PURE__ */ new Set()), T = k(null), M = N(() => {
      if (!p.value.trim()) return v.value.nodes;
      const ce = p.value.toLowerCase();
      return v.value.nodes.filter(
        (le) => {
          var I, z;
          return le.name.toLowerCase().includes(ce) || ((I = le.description) == null ? void 0 : I.toLowerCase().includes(ce)) || ((z = le.repository) == null ? void 0 : z.toLowerCase().includes(ce));
        }
      );
    }), P = N(
      () => M.value.filter((ce) => ce.installed && ce.tracked)
    ), A = N(
      () => M.value.filter((ce) => !ce.installed && ce.tracked && !ce.issue_type)
    ), B = N(
      () => M.value.filter((ce) => ce.installed && !ce.tracked)
    ), j = N(
      () => M.value.filter((ce) => ce.issue_type === "version_gated")
    ), E = N(
      () => M.value.filter((ce) => ce.issue_type === "uninstallable")
    );
    function V(ce) {
      return ce.registry_id || ce.name;
    }
    function ae(ce) {
      return C.value.has(V(ce));
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
      const z = {
        id: I,
        version: "latest",
        selected_version: "latest",
        mode: "remote",
        channel: "default"
      };
      le === "git" && ce.repository && (z.repository = ce.repository, z.install_source = "git"), await d(z), C.value.add(V(ce)), n("toast", `✓ Queued install for "${ce.name}"`, "success");
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
    const we = N(() => o.versionMismatches.length > 0);
    function se(ce) {
      return !ce.used_in_workflows || ce.used_in_workflows.length === 0 ? "Not used in any workflows" : ce.used_in_workflows.length === 1 ? ce.used_in_workflows[0] : `${ce.used_in_workflows.length} workflows`;
    }
    function F(ce) {
      return ce.criticality === "optional" ? "optional" : "required";
    }
    function Q(ce) {
      return S.value.has(ce.name);
    }
    async function Pe(ce, le) {
      const I = le.target, z = F(ce), ie = I.value;
      if (ie !== z) {
        S.value = new Set(S.value).add(ce.name), ce.criticality = ie;
        try {
          const Ce = await m(ce.name, ie);
          if (Ce.status !== "success") {
            ce.criticality = z, n("toast", Ce.message || `Failed to update "${ce.name}" criticality`, "error");
            return;
          }
          n("toast", `Marked "${ce.name}" as ${ie}`, "success");
        } catch (Ce) {
          ce.criticality = z, I.value = z, n("toast", `Error updating criticality: ${Ce instanceof Error ? Ce.message : "Unknown error"}`, "error");
        } finally {
          const Ce = new Set(S.value);
          Ce.delete(ce.name), S.value = Ce;
        }
      }
    }
    function te(ce) {
      return ce.issue_type === "version_gated" ? "Requires newer ComfyUI version" : "Blocked";
    }
    function ge(ce) {
      return ce.issue_type === "version_gated" ? "Upgrade ComfyUI to a version that includes this builtin node." : "Manual intervention required.";
    }
    function O(ce) {
      return ce.registry_id ? `Community-mapped package: ${ce.registry_id}` : "Community-mapped package";
    }
    function me(ce) {
      return "Found via community mapping. Install from registry by default, or use git when needed.";
    }
    function Re(ce) {
      x.value = ce;
    }
    function Ge() {
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
            g.value = !0;
            const le = await r(ce);
            le.status === "success" ? (n("toast", `✓ Node "${ce}" tracked as development`, "success"), await xe()) : n("toast", `Failed to track node: ${le.message || "Unknown error"}`, "error");
          } catch (le) {
            n("toast", `Error tracking node: ${le instanceof Error ? le.message : "Unknown error"}`, "error");
          } finally {
            g.value = !1;
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
            g.value = !0;
            const le = await c(ce);
            le.status === "success" ? (n("toast", `✓ Node "${ce}" removed`, "success"), await xe()) : n("toast", `Failed to remove node: ${le.message || "Unknown error"}`, "error");
          } catch (le) {
            n("toast", `Error removing node: ${le instanceof Error ? le.message : "Unknown error"}`, "error");
          } finally {
            g.value = !1;
          }
        }
      };
    }
    function Z(ce) {
      T.value = {
        title: "Install Missing Node",
        message: `Install "${ce}"?`,
        warning: "This will download and install the node from the registry.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          T.value = null;
          try {
            g.value = !0;
            const le = await u(ce);
            le.status === "success" ? (n("toast", `✓ Node "${ce}" installed`, "success"), await xe()) : n("toast", `Failed to install node: ${le.message || "Unknown error"}`, "error");
          } catch (le) {
            n("toast", `Error installing node: ${le instanceof Error ? le.message : "Unknown error"}`, "error");
          } finally {
            g.value = !1;
          }
        }
      };
    }
    function K(ce) {
      T.value = {
        title: "Install Community-Mapped Package",
        message: `Install "${ce.name}" from the registry?`,
        warning: "This will queue a registry install through the manager queue.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          T.value = null;
          try {
            g.value = !0, await fe(ce, "registry");
          } catch (le) {
            n("toast", `Error queueing install: ${le instanceof Error ? le.message : "Unknown error"}`, "error");
          } finally {
            g.value = !1;
          }
        }
      };
    }
    function X(ce) {
      T.value = {
        title: "Install Community-Mapped Package via Git",
        message: `Install "${ce.name}" from git?`,
        warning: "Use git install only when you explicitly need the repository source.",
        confirmLabel: "Install via Git",
        destructive: !1,
        onConfirm: async () => {
          T.value = null;
          try {
            g.value = !0, await fe(ce, "git");
          } catch (le) {
            n("toast", `Error queueing git install: ${le instanceof Error ? le.message : "Unknown error"}`, "error");
          } finally {
            g.value = !1;
          }
        }
      };
    }
    async function xe() {
      g.value = !0, w.value = null;
      try {
        v.value = await l();
      } catch (ce) {
        w.value = ce instanceof Error ? ce.message : "Failed to load nodes";
      } finally {
        g.value = !1;
      }
    }
    return rt(xe), (ce, le) => (a(), i(q, null, [
      b(Ut, null, {
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
                onClick: Ge
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
            modelValue: p.value,
            "onUpdate:modelValue": le[1] || (le[1] = (I) => p.value = I),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          g.value ? (a(), R(xs, {
            key: 0,
            message: "Loading nodes..."
          })) : w.value ? (a(), R(Ss, {
            key: 1,
            message: w.value,
            retry: !0,
            onRetry: xe
          }, null, 8, ["message"])) : (a(), i(q, { key: 2 }, [
            we.value ? (a(), R(St, {
              key: 0,
              title: "VERSION MISMATCHES",
              count: e.versionMismatches.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                s("div", Db, [
                  le[8] || (le[8] = s("span", { class: "warning-icon" }, "⚠", -1)),
                  s("span", null, f(e.versionMismatches.length) + " node(s) have wrong versions. Environment needs repair.", 1)
                ]),
                (a(!0), i(q, null, he(e.versionMismatches, (I) => (a(), R(Vt, {
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
                    s("span", Lb, [
                      s("span", Ob, f(I.actual), 1),
                      le[10] || (le[10] = s("span", { class: "version-arrow" }, "→", -1)),
                      s("span", Ab, f(I.expected), 1)
                    ])
                  ]),
                  actions: h(() => [
                    b(Te, {
                      variant: "warning",
                      size: "sm",
                      onClick: le[2] || (le[2] = (z) => n("repair-environment"))
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
            j.value.length ? (a(), R(St, {
              key: 1,
              title: "BLOCKED",
              count: j.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (a(!0), i(q, null, he(j.value, (I) => (a(), R(Vt, {
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
                    s("span", Ub, f(te(I)), 1)
                  ]),
                  details: h(() => [
                    b(_t, {
                      label: "Guidance:",
                      value: I.issue_guidance || ge(I)
                    }, null, 8, ["value"]),
                    b(_t, {
                      label: "Used by:",
                      value: se(I)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (z) => Re(I)
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
            E.value.length ? (a(), R(St, {
              key: 2,
              title: "COMMUNITY-MAPPED",
              count: E.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (a(!0), i(q, null, he(E.value, (I) => (a(), R(Vt, {
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
                    s("span", zb, f(O(I)), 1)
                  ]),
                  details: h(() => [
                    b(_t, {
                      label: "Guidance:",
                      value: I.issue_guidance || me(I)
                    }, null, 8, ["value"]),
                    b(_t, {
                      label: "Used by:",
                      value: se(I)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (z) => Re(I)
                    }, {
                      default: h(() => [...le[15] || (le[15] = [
                        $(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    ae(I) ? (a(), i("span", Fb, "Queued")) : (a(), i(q, { key: 1 }, [
                      I.registry_id ? (a(), R(Te, {
                        key: 0,
                        variant: "primary",
                        size: "sm",
                        onClick: (z) => K(I)
                      }, {
                        default: h(() => [...le[16] || (le[16] = [
                          $(" Install ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : y("", !0),
                      I.repository ? (a(), R(Te, {
                        key: 1,
                        variant: "secondary",
                        size: "sm",
                        onClick: (z) => X(I)
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
            B.value.length ? (a(), R(St, {
              key: 3,
              title: "UNTRACKED",
              count: B.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (a(!0), i(q, null, he(B.value, (I) => (a(), R(Vt, {
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
                      value: se(I)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (z) => Re(I)
                    }, {
                      default: h(() => [...le[20] || (le[20] = [
                        $(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Te, {
                      variant: "primary",
                      size: "sm",
                      onClick: (z) => Ee(I.name)
                    }, {
                      default: h(() => [...le[21] || (le[21] = [
                        $(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Te, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (z) => H(I.name)
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
            P.value.length ? (a(), R(St, {
              key: 4,
              title: "INSTALLED",
              count: P.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (a(!0), i(q, null, he(P.value, (I) => (a(), R(Vt, {
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
                    I.version ? (a(), i("span", Vb, f(I.source === "development" ? "" : "v") + f(I.version), 1)) : (a(), i("span", Bb, "version unknown")),
                    s("span", Wb, " • " + f(ue(I.source)), 1)
                  ]),
                  details: h(() => [
                    b(_t, {
                      label: "Used by:",
                      value: se(I)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (z) => Re(I)
                    }, {
                      default: h(() => [...le[23] || (le[23] = [
                        $(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    s("label", Gb, [
                      le[25] || (le[25] = s("span", null, "Readiness", -1)),
                      s("select", {
                        class: "criticality-select",
                        value: F(I),
                        disabled: Q(I),
                        onChange: (z) => Pe(I, z)
                      }, [...le[24] || (le[24] = [
                        s("option", { value: "required" }, "Required", -1),
                        s("option", { value: "optional" }, "Optional", -1)
                      ])], 40, jb)
                    ])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            A.value.length ? (a(), R(St, {
              key: 5,
              title: "MISSING",
              count: A.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (a(!0), i(q, null, he(A.value, (I) => (a(), R(Vt, {
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
                      value: se(I)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (z) => Re(I)
                    }, {
                      default: h(() => [...le[28] || (le[28] = [
                        $(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Te, {
                      variant: "primary",
                      size: "sm",
                      onClick: (z) => Z(I.name)
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
            !P.value.length && !A.value.length && !j.value.length && !E.value.length && !B.value.length ? (a(), R(rs, {
              key: 6,
              icon: "📭",
              message: p.value ? `No nodes match '${p.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : y("", !0)
          ], 64))
        ]),
        _: 1
      }),
      b(cs, {
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
      x.value ? (a(), R(Tb, {
        key: 0,
        node: x.value,
        onClose: le[5] || (le[5] = (I) => x.value = null)
      }, null, 8, ["node"])) : y("", !0),
      T.value ? (a(), R(Il, {
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
}), qb = /* @__PURE__ */ Se(Hb, [["__scopeId", "data-v-edfa1c86"]]), Kb = { class: "setting-info" }, Jb = { class: "setting-label" }, Qb = {
  key: 0,
  class: "required-marker"
}, Yb = {
  key: 0,
  class: "setting-description"
}, Xb = { class: "setting-control" }, Zb = /* @__PURE__ */ be({
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
      s("div", Kb, [
        s("div", Jb, [
          $(f(e.label) + " ", 1),
          e.required ? (a(), i("span", Qb, "*")) : y("", !0)
        ]),
        e.description ? (a(), i("div", Yb, f(e.description), 1)) : y("", !0)
      ]),
      s("div", Xb, [
        st(t.$slots, "default", {}, void 0)
      ])
    ], 2));
  }
}), mo = /* @__PURE__ */ Se(Zb, [["__scopeId", "data-v-3e106b1c"]]), e2 = ["type", "value", "placeholder", "disabled"], t2 = /* @__PURE__ */ be({
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
    }, null, 42, e2));
  }
}), ho = /* @__PURE__ */ Se(t2, [["__scopeId", "data-v-0380d08f"]]), s2 = { class: "toggle" }, o2 = ["checked", "disabled"], n2 = /* @__PURE__ */ be({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (t, o) => (a(), i("label", s2, [
      s("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        onChange: o[0] || (o[0] = (n) => t.$emit("update:modelValue", n.target.checked)),
        class: "toggle-input"
      }, null, 40, o2),
      o[1] || (o[1] = s("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), ki = /* @__PURE__ */ Se(n2, [["__scopeId", "data-v-71c0f550"]]), Ba = "ComfyGit.Deploy.GitHubPAT";
function tc(e) {
  return e.startsWith("git@") || e.startsWith("ssh://");
}
function a2(e) {
  return e.startsWith("https://") || e.startsWith("http://");
}
function l2() {
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
    isRemoteSsh: tc,
    isRemoteHttps: a2
  };
}
const i2 = { class: "workspace-settings-content" }, r2 = { class: "settings-section" }, c2 = { class: "path-setting" }, u2 = { class: "path-value" }, d2 = { class: "path-setting" }, f2 = { class: "path-value" }, m2 = { class: "settings-section" }, v2 = { class: "token-setting" }, p2 = {
  key: 0,
  class: "token-warning"
}, g2 = { class: "token-actions" }, h2 = { class: "settings-section" }, y2 = { class: "settings-section" }, w2 = /* @__PURE__ */ be({
  __name: "WorkspaceSettingsContent",
  props: {
    workspacePath: {}
  },
  emits: ["saved", "error"],
  setup(e, { expose: t, emit: o }) {
    const n = e, l = o, { getConfig: r, updateConfig: u, getRemotes: c, testGitAuth: d } = pt(), { getToken: m, setToken: v, clearToken: g, hasToken: w } = l2(), p = k(!1), _ = k(null), x = k(null), C = k(null), S = k(null), T = k(""), M = k(""), P = k(""), A = k(""), B = k(!1), j = k(!1), E = k(!1), V = k(""), ae = k(!1), fe = k(!1), ue = k(null), we = k(!1), se = k(!0);
    function F(Z) {
      return Z.join(" ");
    }
    function Q(Z) {
      return Z.trim() ? Z.trim().split(/\s+/) : [];
    }
    const Pe = N(() => {
      if (!S.value) return !1;
      const Z = B.value, K = j.value, X = E.value, xe = A.value !== F(S.value.comfyui_extra_args || []);
      return Z || K || X || xe;
    }), te = N(() => w());
    async function ge() {
      var Z;
      p.value = !0, _.value = null;
      try {
        C.value = await r(n.workspacePath || void 0), S.value = { ...C.value }, T.value = C.value.civitai_api_key || "", M.value = C.value.huggingface_token || "", A.value = F(C.value.comfyui_extra_args || []), P.value = m() || "", V.value = P.value, B.value = !1, j.value = !1, E.value = !1, ue.value = null;
        const K = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        we.value = K !== "false", se.value = localStorage.getItem("comfygit:popup-disabled") !== "true";
        try {
          const xe = (Z = (await c()).remotes) == null ? void 0 : Z.find((ce) => ce.name === "origin");
          ae.value = !!(xe && tc(xe.url));
        } catch {
          ae.value = !1;
        }
      } catch (K) {
        _.value = K instanceof Error ? K.message : "Failed to load settings";
      } finally {
        p.value = !1;
      }
    }
    async function O() {
      var Z;
      x.value = null;
      try {
        const K = {};
        B.value && (K.civitai_api_key = T.value || null), j.value && (K.huggingface_token = M.value || null), A.value !== F(((Z = S.value) == null ? void 0 : Z.comfyui_extra_args) || []) && (K.comfyui_extra_args = Q(A.value)), await u(K, n.workspacePath || void 0), E.value && (P.value ? v(P.value) : g()), await ge(), x.value = { type: "success", message: "Settings saved successfully" }, l("saved"), setTimeout(() => {
          x.value = null;
        }, 3e3);
      } catch (K) {
        const X = K instanceof Error ? K.message : "Failed to save settings";
        x.value = { type: "error", message: X }, l("error", X);
      }
    }
    function me() {
      S.value && (T.value = S.value.civitai_api_key || "", M.value = S.value.huggingface_token || "", A.value = F(S.value.comfyui_extra_args || []), P.value = V.value, B.value = !1, j.value = !1, E.value = !1, ue.value = null, x.value = null);
    }
    async function Re() {
      if (P.value) {
        fe.value = !0, ue.value = null;
        try {
          const Z = await d(P.value);
          ue.value = {
            type: Z.status === "success" ? "success" : "error",
            message: Z.message
          };
        } catch (Z) {
          ue.value = {
            type: "error",
            message: Z instanceof Error ? Z.message : "Connection test failed"
          };
        } finally {
          fe.value = !1;
        }
      }
    }
    function Ge() {
      P.value = "", E.value = !0, ue.value = null;
    }
    function Ee(Z) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(Z)), console.log("[ComfyGit] Auto-refresh setting saved:", Z);
    }
    function H(Z) {
      Z ? localStorage.removeItem("comfygit:popup-disabled") : localStorage.setItem("comfygit:popup-disabled", "true"), console.log("[ComfyGit] Popup setting changed:", Z ? "enabled" : "disabled");
    }
    return t({
      saveSettings: O,
      resetSettings: me,
      hasChanges: Pe,
      loadSettings: ge
    }), rt(ge), (Z, K) => (a(), i("div", i2, [
      p.value ? (a(), R(xs, {
        key: 0,
        message: "Loading workspace settings..."
      })) : _.value ? (a(), R(Ss, {
        key: 1,
        message: _.value,
        retry: !0,
        onRetry: ge
      }, null, 8, ["message"])) : (a(), i(q, { key: 2 }, [
        b(St, { title: "WORKSPACE PATHS" }, {
          default: h(() => {
            var X, xe;
            return [
              s("div", r2, [
                s("div", c2, [
                  K[9] || (K[9] = s("div", { class: "path-label" }, "Workspace Root", -1)),
                  K[10] || (K[10] = s("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                  s("div", u2, f(((X = C.value) == null ? void 0 : X.workspace_path) || "Loading..."), 1)
                ]),
                s("div", d2, [
                  K[11] || (K[11] = s("div", { class: "path-label" }, "Models Directory", -1)),
                  K[12] || (K[12] = s("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                  s("div", f2, f(((xe = C.value) == null ? void 0 : xe.models_path) || "Not configured"), 1)
                ])
              ])
            ];
          }),
          _: 1
        }),
        b(St, { title: "API CREDENTIALS" }, {
          default: h(() => [
            s("div", m2, [
              b(mo, {
                label: "CivitAI API Key",
                description: "API key for downloading models from CivitAI"
              }, {
                default: h(() => [
                  b(ho, {
                    modelValue: T.value,
                    "onUpdate:modelValue": K[0] || (K[0] = (X) => T.value = X),
                    type: "password",
                    placeholder: "Enter CivitAI API key...",
                    style: { minWidth: "300px" },
                    onInput: K[1] || (K[1] = (X) => B.value = !0)
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
                    "onUpdate:modelValue": K[2] || (K[2] = (X) => M.value = X),
                    type: "password",
                    placeholder: "Enter HuggingFace token...",
                    style: { minWidth: "300px" },
                    onInput: K[3] || (K[3] = (X) => j.value = !0)
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
                  s("div", v2, [
                    b(ho, {
                      modelValue: P.value,
                      "onUpdate:modelValue": K[4] || (K[4] = (X) => P.value = X),
                      type: "password",
                      placeholder: "ghp_xxxxxxxxxxxxxxxxxxxx",
                      onInput: K[5] || (K[5] = (X) => E.value = !0)
                    }, null, 8, ["modelValue"]),
                    ae.value ? (a(), i("div", p2, " SSH origin remote detected. PAT authentication only works with HTTPS remotes. ")) : y("", !0),
                    K[15] || (K[15] = s("div", { class: "token-help" }, " Stored in your browser only. Never sent to the server except when you explicitly test or use authenticated remote operations. ", -1)),
                    s("div", g2, [
                      b(Te, {
                        variant: "ghost",
                        size: "xs",
                        loading: fe.value,
                        disabled: !P.value || fe.value,
                        onClick: Re
                      }, {
                        default: h(() => [...K[13] || (K[13] = [
                          $(" Test Connection ", -1)
                        ])]),
                        _: 1
                      }, 8, ["loading", "disabled"]),
                      te.value ? (a(), R(Te, {
                        key: 0,
                        variant: "ghost",
                        size: "xs",
                        onClick: Ge
                      }, {
                        default: h(() => [...K[14] || (K[14] = [
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
            s("div", h2, [
              b(mo, {
                label: "Extra Startup Arguments",
                description: "Additional command-line arguments passed to ComfyUI on startup (e.g., --lowvram, --listen 0.0.0.0). Takes effect on next restart."
              }, {
                default: h(() => [
                  b(ho, {
                    modelValue: A.value,
                    "onUpdate:modelValue": K[6] || (K[6] = (X) => A.value = X),
                    placeholder: "--lowvram --listen 0.0.0.0",
                    style: { minWidth: "300px" }
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              K[16] || (K[16] = s("div", { class: "setting-hint" }, [
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
            s("div", y2, [
              b(mo, {
                label: "Auto-Refresh After Git Operations",
                description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
              }, {
                default: h(() => [
                  b(ki, {
                    modelValue: we.value,
                    "onUpdate:modelValue": [
                      K[7] || (K[7] = (X) => we.value = X),
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
                  b(ki, {
                    modelValue: se.value,
                    "onUpdate:modelValue": [
                      K[8] || (K[8] = (X) => se.value = X),
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
        x.value ? (a(), R(ia, {
          key: 0,
          variant: (x.value.type === "success", "compact")
        }, {
          default: h(() => [
            s("span", {
              style: At({ color: x.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
            }, f(x.value.message), 5)
          ]),
          _: 1
        }, 8, ["variant"])) : y("", !0)
      ], 64))
    ]));
  }
}), sc = /* @__PURE__ */ Se(w2, [["__scopeId", "data-v-f1bdc574"]]), _2 = /* @__PURE__ */ be({
  __name: "WorkspaceSettingsSection",
  setup(e) {
    const t = k(null);
    function o() {
      console.log("[ComfyGit] Settings saved");
    }
    return (n, l) => (a(), R(Ut, null, {
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
              (u = t.value) != null && u.hasChanges ? (a(), R(Te, {
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
        b(sc, {
          ref_key: "contentRef",
          ref: t,
          onSaved: o
        }, null, 512)
      ]),
      _: 1
    }));
  }
}), k2 = { class: "env-title" }, b2 = {
  key: 0,
  class: "current-badge"
}, $2 = {
  key: 0,
  class: "branch-info"
}, C2 = /* @__PURE__ */ be({
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
    return (t, o) => (a(), R(Vt, {
      status: e.isCurrent ? "synced" : void 0
    }, Yt({
      icon: h(() => [
        $(f(e.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: h(() => [
        s("div", k2, [
          s("span", null, f(e.environmentName), 1),
          e.isCurrent && e.showCurrentLabel ? (a(), i("span", b2, "CURRENT")) : y("", !0)
        ])
      ]),
      subtitle: h(() => [
        e.currentBranch ? (a(), i("span", $2, [
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
          e.lastUsed && e.showLastUsed ? (a(), R(_t, {
            key: 0,
            label: "Last used:",
            value: e.lastUsed
          }, null, 8, ["value"])) : y("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), x2 = /* @__PURE__ */ Se(C2, [["__scopeId", "data-v-9231917a"]]), S2 = { class: "env-details" }, I2 = { class: "status-row" }, E2 = {
  key: 0,
  class: "detail-row"
}, T2 = { class: "value mono" }, M2 = {
  key: 1,
  class: "detail-row"
}, P2 = { class: "value mono small" }, R2 = { class: "collapsible-section" }, N2 = { class: "value" }, D2 = {
  key: 0,
  class: "collapsible-body"
}, L2 = { class: "item-list" }, O2 = { class: "item-name" }, A2 = { class: "item-name" }, U2 = { class: "item-name" }, z2 = { class: "item-name" }, F2 = {
  key: 0,
  class: "empty-list"
}, V2 = { class: "collapsible-section" }, B2 = { class: "value" }, W2 = {
  key: 0,
  class: "collapsible-body"
}, G2 = { class: "item-list" }, j2 = { class: "item-name" }, H2 = {
  key: 0,
  class: "item-meta"
}, q2 = {
  key: 0,
  class: "empty-list"
}, K2 = { class: "collapsible-section" }, J2 = { class: "value" }, Q2 = {
  key: 0,
  class: "missing-count"
}, Y2 = {
  key: 0,
  class: "collapsible-body"
}, X2 = { class: "item-list" }, Z2 = { class: "model-row" }, e$ = { class: "item-name" }, t$ = { class: "model-meta" }, s$ = { class: "item-meta" }, o$ = {
  key: 0,
  class: "item-meta"
}, n$ = {
  key: 0,
  class: "empty-list"
}, a$ = {
  key: 2,
  class: "section-divider"
}, l$ = {
  key: 3,
  class: "detail-row"
}, i$ = { class: "value" }, r$ = { class: "footer-actions" }, c$ = /* @__PURE__ */ be({
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
    const u = N(() => {
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
    return (d, m) => (a(), R(Tt, {
      title: `ENVIRONMENT DETAILS: ${e.environment.name.toUpperCase()}`,
      size: "md",
      onClose: m[6] || (m[6] = (v) => n("close"))
    }, {
      body: h(() => {
        var v, g, w, p, _, x, C, S, T, M, P, A, B, j;
        return [
          s("div", S2, [
            s("div", I2, [
              m[7] || (m[7] = s("span", { class: "label" }, "Status:", -1)),
              s("span", {
                class: Fe(["status-badge", e.environment.is_current ? "current" : "inactive"])
              }, f(e.environment.is_current ? "Current" : "Inactive"), 3)
            ]),
            e.environment.current_branch ? (a(), i("div", E2, [
              m[8] || (m[8] = s("span", { class: "label" }, "Branch:", -1)),
              s("span", T2, f(e.environment.current_branch), 1)
            ])) : y("", !0),
            e.environment.path ? (a(), i("div", M2, [
              m[9] || (m[9] = s("span", { class: "label" }, "Path:", -1)),
              s("span", P2, f(e.environment.path), 1)
            ])) : y("", !0),
            m[18] || (m[18] = s("div", { class: "section-divider" }, null, -1)),
            s("div", R2, [
              s("div", {
                class: "collapsible-header",
                onClick: m[0] || (m[0] = (E) => r("workflows"))
              }, [
                m[10] || (m[10] = s("span", { class: "label" }, "Workflows:", -1)),
                s("span", N2, f(((v = e.detail) == null ? void 0 : v.workflow_count) ?? e.environment.workflow_count), 1),
                (g = e.detail) != null && g.workflows ? (a(), i("span", {
                  key: 0,
                  class: Fe(["chevron", { expanded: l.value.has("workflows") }])
                }, "▶", 2)) : y("", !0)
              ]),
              (w = e.detail) != null && w.workflows && l.value.has("workflows") ? (a(), i("div", D2, [
                s("div", L2, [
                  (a(!0), i(q, null, he(e.detail.workflows.synced, (E) => (a(), i("div", {
                    key: "synced-" + E,
                    class: "list-item"
                  }, [
                    s("span", O2, f(E), 1),
                    m[11] || (m[11] = s("span", { class: "sync-badge synced" }, "synced", -1))
                  ]))), 128)),
                  (a(!0), i(q, null, he(e.detail.workflows.new, (E) => (a(), i("div", {
                    key: "new-" + E,
                    class: "list-item"
                  }, [
                    s("span", A2, f(E), 1),
                    m[12] || (m[12] = s("span", { class: "sync-badge new" }, "new", -1))
                  ]))), 128)),
                  (a(!0), i(q, null, he(e.detail.workflows.modified, (E) => (a(), i("div", {
                    key: "mod-" + E,
                    class: "list-item"
                  }, [
                    s("span", U2, f(E), 1),
                    m[13] || (m[13] = s("span", { class: "sync-badge modified" }, "modified", -1))
                  ]))), 128)),
                  (a(!0), i(q, null, he(e.detail.workflows.deleted, (E) => (a(), i("div", {
                    key: "del-" + E,
                    class: "list-item"
                  }, [
                    s("span", z2, f(E), 1),
                    m[14] || (m[14] = s("span", { class: "sync-badge deleted" }, "deleted", -1))
                  ]))), 128)),
                  u.value ? (a(), i("div", F2, "No workflows")) : y("", !0)
                ])
              ])) : y("", !0)
            ]),
            s("div", V2, [
              s("div", {
                class: "collapsible-header",
                onClick: m[1] || (m[1] = (E) => r("nodes"))
              }, [
                m[15] || (m[15] = s("span", { class: "label" }, "Nodes:", -1)),
                s("span", B2, f(((p = e.detail) == null ? void 0 : p.node_count) ?? e.environment.node_count), 1),
                (_ = e.detail) != null && _.nodes ? (a(), i("span", {
                  key: 0,
                  class: Fe(["chevron", { expanded: l.value.has("nodes") }])
                }, "▶", 2)) : y("", !0)
              ]),
              (x = e.detail) != null && x.nodes && l.value.has("nodes") ? (a(), i("div", W2, [
                s("div", G2, [
                  (a(!0), i(q, null, he(e.detail.nodes, (E) => (a(), i("div", {
                    key: E.name,
                    class: "list-item"
                  }, [
                    s("span", j2, f(E.name), 1),
                    E.version ? (a(), i("span", H2, f(E.version), 1)) : y("", !0)
                  ]))), 128)),
                  e.detail.nodes.length ? y("", !0) : (a(), i("div", q2, "No nodes"))
                ])
              ])) : y("", !0)
            ]),
            s("div", K2, [
              s("div", {
                class: "collapsible-header",
                onClick: m[2] || (m[2] = (E) => r("models"))
              }, [
                m[16] || (m[16] = s("span", { class: "label" }, "Models:", -1)),
                s("span", J2, [
                  $(f(((C = e.detail) == null ? void 0 : C.model_count) ?? e.environment.model_count) + " ", 1),
                  (T = (S = e.detail) == null ? void 0 : S.models) != null && T.missing.length ? (a(), i("span", Q2, "(" + f(e.detail.models.missing.length) + " missing)", 1)) : y("", !0)
                ]),
                (M = e.detail) != null && M.models ? (a(), i("span", {
                  key: 0,
                  class: Fe(["chevron", { expanded: l.value.has("models") }])
                }, "▶", 2)) : y("", !0)
              ]),
              (P = e.detail) != null && P.models && l.value.has("models") ? (a(), i("div", Y2, [
                s("div", X2, [
                  (a(!0), i(q, null, he(e.detail.models.missing, (E) => (a(), i("div", {
                    key: E.filename,
                    class: "list-item model-item"
                  }, [
                    s("div", Z2, [
                      s("span", e$, f(E.filename), 1),
                      s("span", {
                        class: Fe(["criticality-badge", E.criticality])
                      }, f(E.criticality), 3)
                    ]),
                    s("div", t$, [
                      s("span", s$, f(E.category), 1),
                      E.workflow_names.length ? (a(), i("span", o$, " used by: " + f(E.workflow_names.join(", ")), 1)) : y("", !0)
                    ])
                  ]))), 128)),
                  e.detail.models.missing.length ? y("", !0) : (a(), i("div", n$, "No missing models"))
                ])
              ])) : y("", !0)
            ]),
            (A = e.detail) != null && A.created_at || e.environment.created_at ? (a(), i("div", a$)) : y("", !0),
            (B = e.detail) != null && B.created_at || e.environment.created_at ? (a(), i("div", l$, [
              m[17] || (m[17] = s("span", { class: "label" }, "Created:", -1)),
              s("span", i$, f(c(((j = e.detail) == null ? void 0 : j.created_at) ?? e.environment.created_at)), 1)
            ])) : y("", !0)
          ])
        ];
      }),
      footer: h(() => [
        s("div", r$, [
          b(Oe, {
            variant: "secondary",
            size: "sm",
            onClick: m[3] || (m[3] = (v) => n("export", e.environment.name))
          }, {
            default: h(() => [...m[19] || (m[19] = [
              $(" Export ", -1)
            ])]),
            _: 1
          }),
          e.canDelete ? (a(), R(Oe, {
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
          b(Oe, {
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
}), u$ = /* @__PURE__ */ Se(c$, [["__scopeId", "data-v-750671f5"]]), oc = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], nc = "3.12", El = [
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
], ac = "auto", d$ = { class: "progress-bar" }, f$ = /* @__PURE__ */ be({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(e) {
    const t = e, o = N(() => `${Math.max(0, Math.min(100, t.progress))}%`);
    return (n, l) => (a(), i("div", d$, [
      s("div", {
        class: Fe(["progress-fill", e.variant]),
        style: At({ width: o.value })
      }, null, 6)
    ]));
  }
}), lc = /* @__PURE__ */ Se(f$, [["__scopeId", "data-v-1beb0512"]]), m$ = { class: "task-progress" }, v$ = { class: "progress-info" }, p$ = { class: "progress-percentage" }, g$ = { class: "progress-message" }, h$ = {
  key: 0,
  class: "progress-steps"
}, y$ = { class: "step-icon" }, w$ = { class: "step-label" }, _$ = /* @__PURE__ */ be({
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
    return (l, r) => (a(), i("div", m$, [
      b(lc, {
        progress: e.progress,
        variant: e.variant
      }, null, 8, ["progress", "variant"]),
      s("div", v$, [
        s("span", p$, f(e.progress) + "%", 1),
        s("span", g$, f(e.message), 1)
      ]),
      e.showSteps && e.steps.length > 0 ? (a(), i("div", h$, [
        (a(!0), i(q, null, he(e.steps, (u) => (a(), i("div", {
          key: u.id,
          class: Fe(["step", o(u.id)])
        }, [
          s("span", y$, f(n(u.id)), 1),
          s("span", w$, f(u.label), 1)
        ], 2))), 128))
      ])) : y("", !0)
    ]));
  }
}), Hn = /* @__PURE__ */ Se(_$, [["__scopeId", "data-v-9d1de66c"]]), k$ = {
  key: 0,
  class: "create-env-form"
}, b$ = { class: "form-field" }, $$ = { class: "input-wrapper" }, C$ = {
  key: 0,
  class: "validating-indicator"
}, x$ = {
  key: 1,
  class: "valid-indicator"
}, S$ = {
  key: 0,
  class: "field-error"
}, I$ = { class: "form-field" }, E$ = ["value"], T$ = { class: "form-field" }, M$ = ["disabled"], P$ = ["value"], R$ = { class: "form-field" }, N$ = ["value"], D$ = { class: "form-field form-field--checkbox" }, L$ = { class: "form-checkbox" }, O$ = {
  key: 1,
  class: "create-env-progress"
}, A$ = { class: "creating-intro" }, U$ = {
  key: 0,
  class: "progress-warning"
}, z$ = {
  key: 1,
  class: "create-error"
}, F$ = { class: "error-message" }, V$ = {
  key: 1,
  class: "footer-status"
}, B$ = 10, W$ = /* @__PURE__ */ be({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(e, { emit: t }) {
    const o = t, { getComfyUIReleases: n, createEnvironment: l, getCreateProgress: r, validateEnvironmentName: u } = pt(), c = k(""), d = k(nc), m = k("latest"), v = k(ac), g = k(!1), w = k(null), p = k(!1), _ = k(!1);
    let x = null, C = 0;
    const S = N(() => !!c.value.trim() && _.value && !w.value && !p.value && !P.value), T = k([{ tag_name: "latest", name: "Latest", published_at: "" }]), M = k(!1), P = k(!1), A = k({
      progress: 0,
      message: ""
    });
    let B = null, j = 0;
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
    ], V = k(null);
    kt(c, (te) => {
      _.value = !1, x && (clearTimeout(x), x = null);
      const ge = te.trim();
      if (!ge) {
        w.value = null, p.value = !1;
        return;
      }
      p.value = !0, x = setTimeout(() => {
        ae(ge);
      }, 400);
    });
    async function ae(te, ge = !1) {
      const O = te.trim();
      if (!O)
        return _.value = !1, p.value = !1, w.value = ge ? "Environment name is required" : null, !1;
      const me = ++C;
      p.value = !0;
      try {
        const Re = await u(O);
        return me !== C ? !1 : (w.value = Re.valid ? null : Re.error || "Invalid name", _.value = !!Re.valid, !!Re.valid);
      } catch {
        return me !== C || (w.value = "Failed to validate name", _.value = !1), !1;
      } finally {
        me === C && (p.value = !1);
      }
    }
    async function fe() {
      x && (clearTimeout(x), x = null), await ae(c.value, !0);
    }
    function ue() {
      P.value || o("close");
    }
    async function we() {
      const te = c.value.trim();
      if (!te) {
        w.value = "Environment name is required";
        return;
      }
      if (x && (clearTimeout(x), x = null), !!await ae(te, !0)) {
        P.value = !0, A.value = { progress: 0, message: "Starting...", phase: "init" };
        try {
          const O = {
            name: te,
            python_version: d.value,
            comfyui_version: m.value,
            torch_backend: v.value,
            switch_after: !1
            // We'll handle switch in parent after modal closes
          }, me = await l(O);
          me.status === "started" ? se() : me.status === "error" && (A.value = {
            progress: 0,
            message: me.message || "Failed to start creation",
            error: me.message
          });
        } catch (O) {
          A.value = {
            progress: 0,
            message: O instanceof Error ? O.message : "Unknown error",
            error: O instanceof Error ? O.message : "Unknown error"
          };
        }
      }
    }
    function se() {
      B || (j = 0, B = window.setInterval(async () => {
        try {
          const te = await r();
          j = 0, A.value = {
            progress: te.progress ?? 0,
            message: te.message,
            phase: te.phase,
            error: te.error
          }, te.state === "complete" ? (F(), o("created", te.environment_name || c.value.trim(), g.value)) : te.state === "error" ? (F(), A.value.error = te.error || te.message) : te.state === "idle" && P.value && (F(), A.value.error = "Creation was interrupted. Please try again.");
        } catch {
          j++, j >= B$ && (F(), A.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function F() {
      B && (clearInterval(B), B = null);
    }
    function Q() {
      P.value = !1, A.value = { progress: 0, message: "" }, o("close");
    }
    async function Pe() {
      M.value = !0;
      try {
        T.value = await n();
      } catch (te) {
        console.error("Failed to load ComfyUI releases:", te);
      } finally {
        M.value = !1;
      }
    }
    return rt(async () => {
      var te;
      await Pt(), (te = V.value) == null || te.focus(), Pe();
    }), Po(() => {
      F(), x && (clearTimeout(x), x = null);
    }), (te, ge) => (a(), R(Tt, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !P.value,
      onClose: ue
    }, {
      body: h(() => [
        P.value ? (a(), i("div", O$, [
          s("p", A$, [
            ge[12] || (ge[12] = $(" Creating environment ", -1)),
            s("strong", null, f(c.value), 1),
            ge[13] || (ge[13] = $("... ", -1))
          ]),
          b(Hn, {
            progress: A.value.progress,
            message: A.value.message,
            "current-phase": A.value.phase,
            variant: A.value.error ? "error" : "default",
            "show-steps": !0,
            steps: E
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          A.value.error ? y("", !0) : (a(), i("p", U$, " This may take several minutes. Please wait... ")),
          A.value.error ? (a(), i("div", z$, [
            s("p", F$, f(A.value.error), 1)
          ])) : y("", !0)
        ])) : (a(), i("div", k$, [
          s("div", b$, [
            ge[6] || (ge[6] = s("label", { class: "form-label" }, "Name", -1)),
            s("div", $$, [
              Et(s("input", {
                ref_key: "nameInput",
                ref: V,
                "onUpdate:modelValue": ge[0] || (ge[0] = (O) => c.value = O),
                type: "text",
                class: Fe(["form-input", { error: !!w.value, valid: _.value }]),
                placeholder: "my-environment",
                onKeyup: fs(we, ["enter"]),
                onBlur: fe
              }, null, 34), [
                [$o, c.value]
              ]),
              p.value ? (a(), i("span", C$, "...")) : _.value ? (a(), i("span", x$, "✓")) : y("", !0)
            ]),
            w.value ? (a(), i("div", S$, f(w.value), 1)) : y("", !0),
            ge[7] || (ge[7] = s("div", { class: "field-hint" }, "Use letters, numbers, dots, hyphens, and underscores.", -1))
          ]),
          s("div", I$, [
            ge[8] || (ge[8] = s("label", { class: "form-label" }, "Python Version", -1)),
            Et(s("select", {
              "onUpdate:modelValue": ge[1] || (ge[1] = (O) => d.value = O),
              class: "form-select"
            }, [
              (a(!0), i(q, null, he(tt(oc), (O) => (a(), i("option", {
                key: O,
                value: O
              }, f(O), 9, E$))), 128))
            ], 512), [
              [Co, d.value]
            ])
          ]),
          s("div", T$, [
            ge[9] || (ge[9] = s("label", { class: "form-label" }, "ComfyUI Version", -1)),
            Et(s("select", {
              "onUpdate:modelValue": ge[2] || (ge[2] = (O) => m.value = O),
              class: "form-select",
              disabled: M.value
            }, [
              (a(!0), i(q, null, he(T.value, (O) => (a(), i("option", {
                key: O.tag_name,
                value: O.tag_name
              }, f(O.name), 9, P$))), 128))
            ], 8, M$), [
              [Co, m.value]
            ])
          ]),
          s("div", R$, [
            ge[10] || (ge[10] = s("label", { class: "form-label" }, "PyTorch Backend", -1)),
            Et(s("select", {
              "onUpdate:modelValue": ge[3] || (ge[3] = (O) => v.value = O),
              class: "form-select"
            }, [
              (a(!0), i(q, null, he(tt(El), (O) => (a(), i("option", {
                key: O,
                value: O
              }, f(O) + f(O === "auto" ? " (detect GPU)" : ""), 9, N$))), 128))
            ], 512), [
              [Co, v.value]
            ])
          ]),
          s("div", D$, [
            s("label", L$, [
              Et(s("input", {
                type: "checkbox",
                "onUpdate:modelValue": ge[4] || (ge[4] = (O) => g.value = O)
              }, null, 512), [
                [Gn, g.value]
              ]),
              ge[11] || (ge[11] = s("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ]))
      ]),
      footer: h(() => [
        P.value ? (a(), i(q, { key: 1 }, [
          A.value.error ? (a(), R(Oe, {
            key: 0,
            variant: "secondary",
            onClick: Q
          }, {
            default: h(() => [...ge[16] || (ge[16] = [
              $(" Close ", -1)
            ])]),
            _: 1
          })) : (a(), i("span", V$, " Creating environment... "))
        ], 64)) : (a(), i(q, { key: 0 }, [
          b(Oe, {
            variant: "primary",
            disabled: !S.value,
            onClick: we
          }, {
            default: h(() => [...ge[14] || (ge[14] = [
              $(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          b(Oe, {
            variant: "secondary",
            onClick: ge[5] || (ge[5] = (O) => o("close"))
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
}), G$ = /* @__PURE__ */ Se(W$, [["__scopeId", "data-v-3faa3d9b"]]), j$ = /* @__PURE__ */ be({
  __name: "EnvironmentsSection",
  props: {
    canCreate: { type: Boolean, default: !0 },
    canSwitch: { type: Boolean, default: !0 },
    canDelete: { type: Boolean, default: !0 }
  },
  emits: ["switch", "created", "delete", "import", "export"],
  setup(e, { expose: t, emit: o }) {
    const n = o, { getEnvironments: l, getEnvironmentDetails: r } = pt(), u = k([]), c = k(!1), d = k(null), m = k(""), v = k(!1), g = k(!1), w = k(null), p = k(null), _ = N(() => [...u.value].sort((B, j) => B.is_current !== j.is_current ? B.is_current ? -1 : 1 : B.name.localeCompare(j.name))), x = N(() => {
      if (!m.value.trim()) return _.value;
      const B = m.value.toLowerCase();
      return _.value.filter(
        (j) => {
          var E;
          return j.name.toLowerCase().includes(B) || ((E = j.current_branch) == null ? void 0 : E.toLowerCase().includes(B));
        }
      );
    });
    function C(B, j) {
      g.value = !1, n("created", B, j);
    }
    function S() {
      g.value = !0;
    }
    async function T(B) {
      w.value = B, p.value = null;
      const j = await r(B.name);
      j && (p.value = j);
    }
    function M(B) {
      w.value = null, p.value = null, n("delete", B);
    }
    function P(B) {
      w.value = null, p.value = null, n("export", B);
    }
    async function A() {
      c.value = !0, d.value = null;
      try {
        u.value = await l();
      } catch (B) {
        d.value = B instanceof Error ? B.message : "Failed to load environments";
      } finally {
        c.value = !1;
      }
    }
    return rt(A), t({
      loadEnvironments: A,
      openCreateModal: S
    }), (B, j) => (a(), i(q, null, [
      b(Ut, null, {
        header: h(() => [
          b(zt, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: j[1] || (j[1] = (E) => v.value = !0)
          }, {
            actions: h(() => [
              e.canCreate ? (a(), R(Te, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: S
              }, {
                default: h(() => [...j[7] || (j[7] = [
                  $(" Create ", -1)
                ])]),
                _: 1
              })) : y("", !0),
              b(Te, {
                variant: "secondary",
                size: "sm",
                onClick: j[0] || (j[0] = (E) => B.$emit("import"))
              }, {
                default: h(() => [...j[8] || (j[8] = [
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
            "onUpdate:modelValue": j[2] || (j[2] = (E) => m.value = E),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          c.value ? (a(), R(xs, {
            key: 0,
            message: "Loading environments..."
          })) : d.value ? (a(), R(Ss, {
            key: 1,
            message: d.value,
            retry: !0,
            onRetry: A
          }, null, 8, ["message"])) : (a(), i(q, { key: 2 }, [
            x.value.length ? (a(), R(St, {
              key: 0,
              title: "ENVIRONMENTS",
              count: x.value.length
            }, {
              default: h(() => [
                (a(!0), i(q, null, he(x.value, (E) => (a(), R(x2, {
                  key: E.name,
                  "environment-name": E.name,
                  "is-current": E.is_current,
                  "current-branch": E.current_branch,
                  "show-last-used": !1
                }, {
                  actions: h(() => [
                    !E.is_current && e.canSwitch ? (a(), R(Te, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (V) => B.$emit("switch", E.name)
                    }, {
                      default: h(() => [...j[9] || (j[9] = [
                        $(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : y("", !0),
                    b(Te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (V) => T(E)
                    }, {
                      default: h(() => [...j[10] || (j[10] = [
                        $(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (V) => B.$emit("export", E.name)
                    }, {
                      default: h(() => [...j[11] || (j[11] = [
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
            x.value.length ? y("", !0) : (a(), R(rs, {
              key: 1,
              icon: "🌍",
              message: m.value ? `No environments match '${m.value}'` : "No environments found. Create one to get started!"
            }, Yt({ _: 2 }, [
              m.value ? void 0 : {
                name: "actions",
                fn: h(() => [
                  e.canCreate ? (a(), R(Te, {
                    key: 0,
                    variant: "primary",
                    onClick: S
                  }, {
                    default: h(() => [...j[12] || (j[12] = [
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
      b(cs, {
        show: v.value,
        title: "About Environments",
        onClose: j[4] || (j[4] = (E) => v.value = !1)
      }, {
        content: h(() => [...j[13] || (j[13] = [
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
            onClick: j[3] || (j[3] = (E) => v.value = !1)
          }, {
            default: h(() => [...j[14] || (j[14] = [
              $(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w.value ? (a(), R(u$, {
        key: 0,
        environment: w.value,
        detail: p.value,
        "can-delete": e.canDelete && u.value.length > 1,
        onClose: j[5] || (j[5] = (E) => {
          w.value = null, p.value = null;
        }),
        onDelete: M,
        onExport: P
      }, null, 8, ["environment", "detail", "can-delete"])) : y("", !0),
      g.value ? (a(), R(G$, {
        key: 1,
        onClose: j[6] || (j[6] = (E) => g.value = !1),
        onCreated: C
      })) : y("", !0)
    ], 64));
  }
}), H$ = /* @__PURE__ */ Se(j$, [["__scopeId", "data-v-01163d8c"]]), q$ = { class: "file-path" }, K$ = { class: "file-path-text" }, J$ = ["title"], Q$ = /* @__PURE__ */ be({
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
    return (l, r) => (a(), i("div", q$, [
      r[0] || (r[0] = s("span", { class: "file-path-icon" }, "📄", -1)),
      s("code", K$, f(e.path), 1),
      e.copyable ? (a(), i("button", {
        key: 0,
        class: "copy-btn",
        title: o.value ? "Copied!" : "Copy path",
        onClick: n
      }, f(o.value ? "✓" : "📋"), 9, J$)) : y("", !0)
    ]));
  }
}), Y$ = /* @__PURE__ */ Se(Q$, [["__scopeId", "data-v-f0982173"]]), X$ = { class: "base-textarea-wrapper" }, Z$ = ["value", "rows", "placeholder", "disabled", "maxlength"], eC = {
  key: 0,
  class: "base-textarea-count"
}, tC = /* @__PURE__ */ be({
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
    return (r, u) => (a(), i("div", X$, [
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
      }, null, 40, Z$),
      e.showCharCount && e.maxLength ? (a(), i("div", eC, f(e.modelValue.length) + " / " + f(e.maxLength), 1)) : y("", !0)
    ]));
  }
}), xo = /* @__PURE__ */ Se(tC, [["__scopeId", "data-v-c6d16c93"]]), sC = ["checked", "disabled"], oC = { class: "base-checkbox-box" }, nC = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, aC = {
  key: 0,
  class: "base-checkbox-label"
}, lC = /* @__PURE__ */ be({
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
      }, null, 40, sC),
      s("span", oC, [
        e.modelValue ? (a(), i("svg", nC, [...o[1] || (o[1] = [
          s("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : y("", !0)
      ]),
      t.$slots.default ? (a(), i("span", aC, [
        st(t.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), qn = /* @__PURE__ */ Se(lC, [["__scopeId", "data-v-bf17c831"]]), iC = { class: "export-blocked" }, rC = { class: "error-header" }, cC = { class: "error-summary" }, uC = { class: "error-title" }, dC = { class: "error-description" }, fC = { class: "issues-list" }, mC = { class: "issue-message" }, vC = {
  key: 0,
  class: "issue-details"
}, pC = ["onClick"], gC = { class: "issue-fix" }, hC = {
  key: 0,
  class: "commit-section"
}, yC = {
  key: 0,
  class: "issues-warning"
}, wC = {
  key: 1,
  class: "commit-error"
}, _C = /* @__PURE__ */ be({
  __name: "ExportBlockedModal",
  props: {
    issues: {},
    mode: {}
  },
  emits: ["close", "committed"],
  setup(e, { emit: t }) {
    const o = e, n = t, { commit: l } = pt(), r = k(""), u = k(!1), c = k(!1), d = k(""), m = ro({}), v = N(() => o.mode === "publish" ? "Publish" : "Export"), g = N(
      () => o.issues.some((S) => S.type === "uncommitted_workflows" || S.type === "uncommitted_git_changes")
    ), w = N(
      () => o.issues.some((S) => S.type === "unresolved_issues")
    ), p = N(
      () => w.value && !c.value
    ), _ = N(
      () => g.value && r.value.trim() !== "" && !u.value && !p.value
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
    return (S, T) => (a(), R(Tt, {
      title: g.value ? `Commit & ${v.value}` : `Cannot ${v.value}`,
      size: "md",
      onClose: T[4] || (T[4] = (M) => S.$emit("close"))
    }, {
      body: h(() => [
        s("div", iC, [
          s("div", rC, [
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
            s("div", cC, [
              s("h3", uC, f(v.value) + " blocked", 1),
              s("p", dC, f(g.value ? `Commit your changes to proceed with ${v.value.toLowerCase()}.` : `The following issues must be resolved before ${v.value.toLowerCase()}.`), 1)
            ])
          ]),
          s("div", fC, [
            (a(!0), i(q, null, he(e.issues, (M, P) => (a(), i("div", {
              key: P,
              class: "issue-item"
            }, [
              s("div", mC, f(M.message), 1),
              M.details.length ? (a(), i("div", vC, [
                (a(!0), i(q, null, he(x(P), (A, B) => (a(), i("div", {
                  key: B,
                  class: "issue-detail"
                }, f(A), 1))), 128)),
                M.details.length > 3 && !m[P] ? (a(), i("button", {
                  key: 0,
                  class: "show-more-inline",
                  onClick: (A) => m[P] = !0
                }, " +" + f(M.details.length - 3) + " more ", 9, pC)) : y("", !0)
              ])) : y("", !0),
              s("div", gC, [
                M.type === "uncommitted_workflows" ? (a(), i(q, { key: 0 }, [
                  $(" Commit your workflow changes before " + f(v.value.toLowerCase()) + "ing. ", 1)
                ], 64)) : M.type === "uncommitted_git_changes" ? (a(), i(q, { key: 1 }, [
                  $(" Commit your changes before " + f(v.value.toLowerCase()) + "ing. ", 1)
                ], 64)) : M.type === "unresolved_issues" ? (a(), i(q, { key: 2 }, [
                  $(" Resolve all workflow issues before " + f(v.value.toLowerCase()) + "ing. ", 1)
                ], 64)) : y("", !0)
              ])
            ]))), 128))
          ]),
          g.value ? (a(), i("div", hC, [
            w.value ? (a(), i("div", yC, [
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
            b(xo, {
              modelValue: r.value,
              "onUpdate:modelValue": T[1] || (T[1] = (M) => r.value = M),
              placeholder: "Describe your changes...",
              disabled: u.value || p.value,
              rows: 3,
              "submit-on-enter": !0,
              onSubmit: C,
              onCtrlEnter: C
            }, null, 8, ["modelValue", "disabled"]),
            d.value ? (a(), i("div", wC, f(d.value), 1)) : y("", !0)
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        g.value ? (a(), i(q, { key: 0 }, [
          b(Oe, {
            variant: "secondary",
            onClick: T[2] || (T[2] = (M) => S.$emit("close"))
          }, {
            default: h(() => [...T[8] || (T[8] = [
              $(" Cancel ", -1)
            ])]),
            _: 1
          }),
          b(Oe, {
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
        ], 64)) : (a(), R(Oe, {
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
}), kC = /* @__PURE__ */ Se(_C, [["__scopeId", "data-v-a8990107"]]), bC = { class: "readiness-header" }, $C = { class: "readiness-body" }, CC = {
  key: 0,
  class: "issue-section"
}, xC = { class: "section-heading" }, SC = { class: "issue-list" }, IC = { class: "issue-main" }, EC = { class: "issue-name" }, TC = { class: "issue-meta" }, MC = { key: 0 }, PC = { key: 1 }, RC = ["onClick"], NC = {
  key: 1,
  class: "issue-note"
}, DC = {
  key: 1,
  class: "issue-section"
}, LC = { class: "section-heading" }, OC = { class: "issue-list" }, AC = { class: "issue-main" }, UC = { class: "issue-name" }, zC = { class: "issue-meta" }, FC = { class: "issue-reason" }, VC = ["disabled", "onClick"], BC = {
  key: 1,
  class: "issue-note"
}, WC = {
  key: 2,
  class: "empty-state"
}, GC = {
  key: 3,
  class: "error-message"
}, jC = { class: "readiness-footer" }, HC = /* @__PURE__ */ be({
  __name: "ReadinessIssuesModal",
  props: {
    warnings: {}
  },
  emits: ["close", "revalidate"],
  setup(e, { emit: t }) {
    const o = e, n = t, { updateNodeCriticality: l } = pt(), r = k(null), u = k(null), c = k(null), d = N(() => o.warnings.models_without_sources), m = N(() => o.warnings.nodes_without_provenance);
    async function v(w) {
      u.value = w, c.value = null;
      try {
        const p = await l(w, "optional");
        if (p.status !== "success") {
          c.value = p.message || `Failed to update ${w}`;
          return;
        }
        n("revalidate");
      } catch (p) {
        c.value = p instanceof Error ? p.message : `Failed to update ${w}`;
      } finally {
        u.value = null;
      }
    }
    function g() {
      r.value = null, n("revalidate");
    }
    return (w, p) => (a(), i(q, null, [
      (a(), R(Rt, { to: "body" }, [
        s("div", {
          class: "readiness-overlay",
          onClick: p[4] || (p[4] = (_) => n("close"))
        }, [
          s("div", {
            class: "readiness-modal",
            onClick: p[3] || (p[3] = mt(() => {
            }, ["stop"]))
          }, [
            s("div", bC, [
              p[5] || (p[5] = s("div", null, [
                s("h3", { class: "readiness-title" }, "Review Reproducibility Issues"),
                s("p", { class: "readiness-subtitle" }, " Add missing source details where possible. Optional nodes are still listed as warnings, but they will not be treated as required build inputs. ")
              ], -1)),
              s("button", {
                class: "readiness-close",
                onClick: p[0] || (p[0] = (_) => n("close"))
              }, "x")
            ]),
            s("div", $C, [
              d.value.length ? (a(), i("section", CC, [
                s("div", xC, [
                  p[6] || (p[6] = s("h4", null, "Models Missing Source URLs", -1)),
                  s("span", null, f(d.value.length), 1)
                ]),
                s("div", SC, [
                  (a(!0), i(q, null, he(d.value, (_) => (a(), i("article", {
                    key: _.hash || _.filename,
                    class: "issue-item"
                  }, [
                    s("div", IC, [
                      s("div", EC, f(_.filename), 1),
                      s("div", TC, [
                        _.hash ? (a(), i("span", MC, "hash " + f(_.hash), 1)) : y("", !0),
                        _.workflows.length ? (a(), i("span", PC, "used by " + f(_.workflows.join(", ")), 1)) : y("", !0),
                        s("span", null, f(_.criticality || "required"), 1)
                      ])
                    ]),
                    _.hash ? (a(), i("button", {
                      key: 0,
                      class: "issue-action",
                      onClick: (x) => r.value = _.hash
                    }, " Add URL ", 8, RC)) : (a(), i("span", NC, "Missing hash"))
                  ]))), 128))
                ])
              ])) : y("", !0),
              m.value.length ? (a(), i("section", DC, [
                s("div", LC, [
                  p[7] || (p[7] = s("h4", null, "Custom Nodes Missing Portable Provenance", -1)),
                  s("span", null, f(m.value.length), 1)
                ]),
                s("div", OC, [
                  (a(!0), i(q, null, he(m.value, (_) => (a(), i("article", {
                    key: _.name,
                    class: "issue-item"
                  }, [
                    s("div", AC, [
                      s("div", UC, f(_.name), 1),
                      s("div", zC, [
                        s("span", null, f(_.source), 1),
                        s("span", null, f(_.criticality), 1)
                      ]),
                      s("p", FC, f(_.reason), 1)
                    ]),
                    _.criticality === "required" ? (a(), i("button", {
                      key: 0,
                      class: "issue-action",
                      disabled: u.value === _.name,
                      onClick: (x) => v(_.name)
                    }, f(u.value === _.name ? "Saving..." : "Mark Optional"), 9, VC)) : (a(), i("span", BC, "Optional warning"))
                  ]))), 128))
                ])
              ])) : y("", !0),
              !d.value.length && !m.value.length ? (a(), i("div", WC, " No reproducibility issues remain. ")) : y("", !0),
              c.value ? (a(), i("div", GC, f(c.value), 1)) : y("", !0)
            ]),
            s("div", jC, [
              s("button", {
                class: "secondary-action",
                onClick: p[1] || (p[1] = (_) => n("revalidate"))
              }, " Refresh Check "),
              s("button", {
                class: "primary-action",
                onClick: p[2] || (p[2] = (_) => n("close"))
              }, " Done ")
            ])
          ])
        ])
      ])),
      r.value ? (a(), R(Sl, {
        key: 0,
        identifier: r.value,
        "overlay-z-index": 10008,
        onClose: g
      }, null, 8, ["identifier"])) : y("", !0)
    ], 64));
  }
}), ic = /* @__PURE__ */ Se(HC, [["__scopeId", "data-v-15a586f1"]]), qC = { class: "repro-warning" }, KC = { class: "repro-warning-content" }, JC = {
  key: 0,
  class: "warning-group"
}, QC = { class: "warning-list" }, YC = { key: 0 }, XC = {
  key: 1,
  class: "warning-group"
}, ZC = { class: "warning-list" }, ex = { key: 0 }, tx = /* @__PURE__ */ be({
  __name: "ReproducibilityWarningBanner",
  props: {
    warnings: {},
    message: { default: "Missing provenance can prevent another machine, or ComfyGit Cloud, from rebuilding this environment exactly. Review the missing details, or continue anyway." },
    maxItemsPerGroup: { default: 2 }
  },
  emits: ["review"],
  setup(e) {
    const t = e, o = N(() => t.warnings.models_without_sources || []), n = N(() => t.warnings.nodes_without_provenance || []), l = N(() => o.value.length), r = N(() => n.value.length), u = N(() => l.value + r.value), c = N(
      () => o.value.slice(0, t.maxItemsPerGroup)
    ), d = N(
      () => n.value.slice(0, t.maxItemsPerGroup)
    ), m = N(
      () => Math.max(0, l.value - c.value.length)
    ), v = N(
      () => Math.max(0, r.value - d.value.length)
    );
    return (g, w) => (a(), i("div", qC, [
      w[3] || (w[3] = s("span", { class: "repro-warning-icon" }, "!", -1)),
      s("div", KC, [
        s("strong", null, f(u.value) + " reproducibility warning" + f(u.value !== 1 ? "s" : ""), 1),
        s("p", null, f(e.message), 1),
        l.value ? (a(), i("div", JC, [
          w[1] || (w[1] = s("div", { class: "warning-group-label" }, " Models ", -1)),
          s("ul", QC, [
            (a(!0), i(q, null, he(c.value, (p) => (a(), i("li", {
              key: p.hash || p.filename
            }, f(p.filename), 1))), 128)),
            m.value ? (a(), i("li", YC, "+" + f(m.value) + " more model" + f(m.value !== 1 ? "s" : ""), 1)) : y("", !0)
          ])
        ])) : y("", !0),
        r.value ? (a(), i("div", XC, [
          w[2] || (w[2] = s("div", { class: "warning-group-label" }, " Nodes ", -1)),
          s("ul", ZC, [
            (a(!0), i(q, null, he(d.value, (p) => (a(), i("li", {
              key: p.name
            }, f(p.name) + " (" + f(p.criticality) + ") ", 1))), 128)),
            v.value ? (a(), i("li", ex, "+" + f(v.value) + " more node" + f(v.value !== 1 ? "s" : ""), 1)) : y("", !0)
          ])
        ])) : y("", !0),
        s("button", {
          class: "review-issues-btn",
          onClick: w[0] || (w[0] = (p) => g.$emit("review"))
        }, " Review Issues ")
      ])
    ]));
  }
}), sl = /* @__PURE__ */ Se(tx, [["__scopeId", "data-v-11be310d"]]), sx = { class: "export-card" }, ox = { class: "export-path-row" }, nx = {
  key: 1,
  class: "export-warning"
}, ax = { class: "export-footer-actions" }, lx = /* @__PURE__ */ be({
  __name: "ExportSection",
  props: {
    environmentName: {},
    embedded: { type: Boolean }
  },
  emits: ["close"],
  setup(e) {
    const t = e, { validateExport: o, exportEnvWithForce: n, validateEnvironmentExport: l, exportEnvironmentWithForce: r } = pt(), u = k(""), c = k(!1), d = k(!1), m = k(!1), v = k(null), g = k(!1), w = k(null), p = k(!1), _ = k(!1), x = N(() => {
      var F;
      return ((F = t.environmentName) == null ? void 0 : F.trim()) || null;
    }), C = N(() => x.value ? `EXPORT ENVIRONMENT: ${x.value.toUpperCase()}` : "EXPORT ENVIRONMENT"), S = N(() => x.value ? `Environment '${x.value}' has been exported` : "Your environment has been exported"), T = N(() => c.value ? "Validating..." : d.value ? "Exporting..." : j.value ? "Export Anyway" : "Export Environment"), M = N(() => {
      var F;
      return ((F = w.value) == null ? void 0 : F.warnings) || {
        models_without_sources: [],
        nodes_without_provenance: []
      };
    }), P = N(
      () => M.value.models_without_sources.length
    ), A = N(
      () => {
        var F;
        return ((F = M.value.nodes_without_provenance) == null ? void 0 : F.length) || 0;
      }
    ), B = N(
      () => P.value + A.value
    ), j = N(
      () => {
        var F;
        return !!((F = w.value) != null && F.can_export) && B.value > 0;
      }
    );
    async function E() {
      c.value = !0;
      try {
        const F = x.value ? await l(x.value) : await o();
        return w.value = F, F;
      } catch (F) {
        return v.value = {
          status: "error",
          message: F instanceof Error ? F.message : "Validation failed"
        }, null;
      } finally {
        c.value = !1;
      }
    }
    async function V() {
      v.value = null;
      const F = await E();
      if (F) {
        if (!F.can_export) {
          p.value = !0;
          return;
        }
        await ue();
      }
    }
    async function ae() {
      p.value = !1;
      const F = await E();
      if (F) {
        if (!F.can_export) {
          p.value = !0;
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
        const F = x.value ? await r(x.value, u.value || void 0) : await n(u.value || void 0);
        v.value = F;
      } catch (F) {
        v.value = {
          status: "error",
          message: F instanceof Error ? F.message : "Export failed"
        };
      } finally {
        d.value = !1;
      }
    }
    async function we() {
      var F;
      if ((F = v.value) != null && F.path)
        try {
          await navigator.clipboard.writeText(v.value.path);
        } catch (Q) {
          console.error("Failed to copy path:", Q);
        }
    }
    async function se() {
      var F;
      if ((F = v.value) != null && F.path) {
        m.value = !0;
        try {
          const Q = await fetch(`/v2/comfygit/download?path=${encodeURIComponent(v.value.path)}`);
          if (!Q.ok)
            throw new Error(`Download failed: ${Q.statusText}`);
          const Pe = await Q.blob(), te = URL.createObjectURL(Pe), ge = v.value.path.split("/").pop() || "environment-export.tar.gz", O = document.createElement("a");
          O.href = te, O.download = ge, document.body.appendChild(O), O.click(), document.body.removeChild(O), URL.revokeObjectURL(te);
        } catch (Q) {
          console.error("Failed to download:", Q), alert(`Download failed: ${Q instanceof Error ? Q.message : "Unknown error"}`);
        } finally {
          m.value = !1;
        }
      }
    }
    return rt(() => {
      E();
    }), (F, Q) => (a(), i(q, null, [
      b(Ut, null, Yt({
        content: h(() => [
          j.value ? (a(), R(sl, {
            key: 0,
            class: "export-readiness-warning",
            warnings: M.value,
            message: "Missing provenance can prevent another machine, or ComfyGit Cloud, from rebuilding this environment exactly.",
            onReview: Q[1] || (Q[1] = (Pe) => _.value = !0)
          }, null, 8, ["warnings"])) : y("", !0),
          b(St, { title: "EXPORT OPTIONS" }, {
            default: h(() => [
              s("div", sx, [
                Q[8] || (Q[8] = s("div", { class: "export-card-header" }, [
                  s("span", { class: "export-icon" }, "📁"),
                  s("div", { class: "export-header-text" }, [
                    s("div", { class: "export-title" }, "Output Destination"),
                    s("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                s("div", ox, [
                  b(ho, {
                    modelValue: u.value,
                    "onUpdate:modelValue": Q[2] || (Q[2] = (Pe) => u.value = Pe),
                    placeholder: "/mnt/c/Users/you/exports/",
                    class: "path-input"
                  }, null, 8, ["modelValue"])
                ])
              ])
            ]),
            _: 1
          }),
          v.value ? (a(), R(St, {
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
                        b(Y$, {
                          path: v.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    v.value.models_without_sources !== void 0 ? (a(), R(_t, {
                      key: 0,
                      label: "Models without sources:",
                      value: v.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : y("", !0),
                    v.value.models_without_sources && v.value.models_without_sources > 0 ? (a(), i("div", nx, [...Q[9] || (Q[9] = [
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
                      onClick: se
                    }, {
                      default: h(() => [...Q[10] || (Q[10] = [
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
                      default: h(() => [...Q[11] || (Q[11] = [
                        $(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    b(Te, {
                      variant: "ghost",
                      size: "sm",
                      onClick: Q[3] || (Q[3] = (Pe) => v.value = null)
                    }, {
                      default: h(() => [...Q[12] || (Q[12] = [
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
          s("div", ax, [
            e.embedded ? (a(), R(Te, {
              key: 0,
              variant: "secondary",
              size: "md",
              disabled: d.value,
              onClick: Q[4] || (Q[4] = (Pe) => F.$emit("close"))
            }, {
              default: h(() => [...Q[13] || (Q[13] = [
                $(" Cancel ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])) : y("", !0),
            b(Te, {
              variant: "primary",
              size: "md",
              loading: c.value || d.value,
              disabled: c.value || d.value,
              onClick: V
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
              onInfoClick: Q[0] || (Q[0] = (Pe) => g.value = !0)
            }, null, 8, ["title"])
          ]),
          key: "0"
        }
      ]), 1024),
      b(cs, {
        show: g.value,
        title: "What Gets Exported",
        onClose: Q[5] || (Q[5] = (Pe) => g.value = !1)
      }, {
        content: h(() => [...Q[14] || (Q[14] = [
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
      p.value && w.value ? (a(), R(kC, {
        key: 0,
        issues: w.value.blocking_issues,
        onClose: Q[6] || (Q[6] = (Pe) => p.value = !1),
        onCommitted: ae
      }, null, 8, ["issues"])) : y("", !0),
      _.value && w.value ? (a(), R(ic, {
        key: 1,
        warnings: w.value.warnings,
        onClose: Q[7] || (Q[7] = (Pe) => _.value = !1),
        onRevalidate: fe
      }, null, 8, ["warnings"])) : y("", !0)
    ], 64));
  }
}), ix = /* @__PURE__ */ Se(lx, [["__scopeId", "data-v-6cf814a2"]]), rx = { class: "file-input-wrapper" }, cx = ["accept", "multiple", "disabled"], ux = /* @__PURE__ */ be({
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
    }), (c, d) => (a(), i("div", rx, [
      s("input", {
        ref_key: "fileInputRef",
        ref: l,
        type: "file",
        accept: e.accept,
        multiple: e.multiple,
        disabled: e.disabled,
        class: "file-input-hidden",
        onChange: u
      }, null, 40, cx),
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
}), dx = /* @__PURE__ */ Se(ux, [["__scopeId", "data-v-cd192091"]]), fx = {
  key: 0,
  class: "drop-zone-empty"
}, mx = { class: "drop-zone-text" }, vx = { class: "drop-zone-primary" }, px = { class: "drop-zone-secondary" }, gx = { class: "drop-zone-actions" }, hx = {
  key: 1,
  class: "drop-zone-file"
}, yx = { class: "file-info" }, wx = { class: "file-details" }, _x = { class: "file-name" }, kx = { class: "file-size" }, bx = /* @__PURE__ */ be({
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
    const o = t, n = k(!1), l = k(null), r = k(0), u = N(() => l.value !== null), c = N(() => {
      var C;
      return ((C = l.value) == null ? void 0 : C.name) || "";
    }), d = N(() => {
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
    function g(C) {
      C.stopPropagation(), r.value--, r.value === 0 && (n.value = !1);
    }
    function w(C) {
      var T;
      C.stopPropagation(), r.value = 0, n.value = !1;
      const S = (T = C.dataTransfer) == null ? void 0 : T.files;
      S && S.length > 0 && _(S[0]);
    }
    function p(C) {
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
      onDragleave: mt(g, ["prevent"]),
      onDrop: mt(w, ["prevent"])
    }, [
      u.value ? (a(), i("div", hx, [
        s("div", yx, [
          S[1] || (S[1] = s("div", { class: "file-icon" }, "📦", -1)),
          s("div", wx, [
            s("div", _x, f(c.value), 1),
            s("div", kx, f(d.value), 1)
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
      ])) : (a(), i("div", fx, [
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
        s("div", mx, [
          s("p", vx, f(e.primaryText), 1),
          s("p", px, f(e.secondaryText), 1)
        ]),
        s("div", gx, [
          b(dx, {
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
}), $x = /* @__PURE__ */ Se(bx, [["__scopeId", "data-v-0f79cb86"]]), Cx = { class: "commit-hash" }, xx = /* @__PURE__ */ be({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(e) {
    const t = e, o = N(() => t.hash.slice(0, t.length));
    return (n, l) => (a(), i("span", Cx, f(o.value), 1));
  }
}), rc = /* @__PURE__ */ Se(xx, [["__scopeId", "data-v-7c333cc6"]]), Sx = { class: "import-preview" }, Ix = { class: "preview-header" }, Ex = {
  key: 0,
  class: "source-env"
}, Tx = { class: "preview-content" }, Mx = { class: "preview-section" }, Px = { class: "section-header" }, Rx = { class: "section-info" }, Nx = { class: "section-count" }, Dx = {
  key: 0,
  class: "item-list"
}, Lx = { class: "item-name" }, Ox = {
  key: 0,
  class: "item-more"
}, Ax = { class: "preview-section" }, Ux = { class: "section-header" }, zx = { class: "section-info" }, Fx = { class: "section-count" }, Vx = {
  key: 0,
  class: "item-list"
}, Bx = { class: "item-details" }, Wx = { class: "item-name" }, Gx = { class: "item-meta" }, jx = {
  key: 0,
  class: "item-more"
}, Hx = { class: "preview-section" }, qx = { class: "section-header" }, Kx = { class: "section-info" }, Jx = { class: "section-count" }, Qx = {
  key: 0,
  class: "item-list"
}, Yx = { class: "item-name" }, Xx = {
  key: 0,
  class: "item-more"
}, Zx = {
  key: 0,
  class: "preview-section"
}, e3 = { class: "git-info" }, t3 = /* @__PURE__ */ be({
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
    const t = e, o = N(() => t.workflows.length), n = N(() => t.models.length), l = N(() => t.nodes.length);
    function r(u) {
      return u < 1024 ? `${u} B` : u < 1024 * 1024 ? `${(u / 1024).toFixed(1)} KB` : u < 1024 * 1024 * 1024 ? `${(u / (1024 * 1024)).toFixed(1)} MB` : `${(u / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (u, c) => (a(), i("div", Sx, [
      s("div", Ix, [
        b(ns, null, {
          default: h(() => [...c[0] || (c[0] = [
            $("Import Preview", -1)
          ])]),
          _: 1
        }),
        e.sourceEnvironment ? (a(), i("span", Ex, [
          c[1] || (c[1] = $(" From: ", -1)),
          b(tl, null, {
            default: h(() => [
              $(f(e.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : y("", !0)
      ]),
      s("div", Tx, [
        s("div", Mx, [
          s("div", Px, [
            c[3] || (c[3] = s("div", { class: "section-icon" }, "📄", -1)),
            s("div", Rx, [
              c[2] || (c[2] = s("div", { class: "section-title" }, "Workflows", -1)),
              s("div", Nx, f(o.value) + " file" + f(o.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.workflows.length > 0 ? (a(), i("div", Dx, [
            (a(!0), i(q, null, he(e.workflows.slice(0, e.maxPreviewItems), (d) => (a(), i("div", {
              key: d,
              class: "preview-item"
            }, [
              c[4] || (c[4] = s("span", { class: "item-bullet" }, "•", -1)),
              s("span", Lx, f(d), 1)
            ]))), 128)),
            e.workflows.length > e.maxPreviewItems ? (a(), i("div", Ox, " +" + f(e.workflows.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        s("div", Ax, [
          s("div", Ux, [
            c[6] || (c[6] = s("div", { class: "section-icon" }, "🎨", -1)),
            s("div", zx, [
              c[5] || (c[5] = s("div", { class: "section-title" }, "Models", -1)),
              s("div", Fx, f(n.value) + " file" + f(n.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.models.length > 0 ? (a(), i("div", Vx, [
            (a(!0), i(q, null, he(e.models.slice(0, e.maxPreviewItems), (d) => (a(), i("div", {
              key: d.filename,
              class: "preview-item"
            }, [
              c[7] || (c[7] = s("span", { class: "item-bullet" }, "•", -1)),
              s("div", Bx, [
                s("span", Wx, f(d.filename), 1),
                s("span", Gx, f(r(d.size)) + " • " + f(d.type), 1)
              ])
            ]))), 128)),
            e.models.length > e.maxPreviewItems ? (a(), i("div", jx, " +" + f(e.models.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        s("div", Hx, [
          s("div", qx, [
            c[9] || (c[9] = s("div", { class: "section-icon" }, "🔌", -1)),
            s("div", Kx, [
              c[8] || (c[8] = s("div", { class: "section-title" }, "Custom Nodes", -1)),
              s("div", Jx, f(l.value) + " node" + f(l.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.nodes.length > 0 ? (a(), i("div", Qx, [
            (a(!0), i(q, null, he(e.nodes.slice(0, e.maxPreviewItems), (d) => (a(), i("div", {
              key: d,
              class: "preview-item"
            }, [
              c[10] || (c[10] = s("span", { class: "item-bullet" }, "•", -1)),
              s("span", Yx, f(d), 1)
            ]))), 128)),
            e.nodes.length > e.maxPreviewItems ? (a(), i("div", Xx, " +" + f(e.nodes.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        e.gitBranch || e.gitCommit ? (a(), i("div", Zx, [
          c[11] || (c[11] = s("div", { class: "section-header" }, [
            s("div", { class: "section-icon" }, "🌿"),
            s("div", { class: "section-info" }, [
              s("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          s("div", e3, [
            e.gitBranch ? (a(), R(_t, {
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
            e.gitCommit ? (a(), R(_t, {
              key: 1,
              label: "Commit"
            }, {
              default: h(() => [
                b(rc, { hash: e.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : y("", !0)
          ])
        ])) : y("", !0)
      ])
    ]));
  }
}), s3 = /* @__PURE__ */ Se(t3, [["__scopeId", "data-v-182fe113"]]), o3 = { class: "import-config" }, n3 = { class: "config-container" }, a3 = { class: "config-field" }, l3 = { class: "input-wrapper" }, i3 = ["value"], r3 = {
  key: 0,
  class: "validating-indicator"
}, c3 = {
  key: 1,
  class: "valid-indicator"
}, u3 = {
  key: 0,
  class: "field-error"
}, d3 = { class: "config-field" }, f3 = { class: "strategy-options" }, m3 = ["value", "checked", "onChange"], v3 = { class: "strategy-content" }, p3 = { class: "strategy-label" }, g3 = { class: "strategy-description" }, h3 = { class: "config-field switch-field" }, y3 = { class: "switch-label" }, w3 = ["checked"], _3 = { class: "advanced-section" }, k3 = { class: "advanced-content" }, b3 = { class: "config-field" }, $3 = ["value"], C3 = ["value"], x3 = /* @__PURE__ */ be({
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
      const g = v.target.value;
      n("update:name", g), r.value = !1, c && clearTimeout(c), g.length > 0 ? (l.value = !0, c = setTimeout(() => {
        n("validate-name", g);
      }, 400)) : l.value = !1;
    }
    function m() {
      o.name.length > 0 && n("validate-name", o.name);
    }
    return (v, g) => (a(), i("div", o3, [
      b(ns, null, {
        default: h(() => [...g[2] || (g[2] = [
          $("Configuration", -1)
        ])]),
        _: 1
      }),
      s("div", n3, [
        s("div", a3, [
          b(Rn, { required: "" }, {
            default: h(() => [...g[3] || (g[3] = [
              $("Environment Name", -1)
            ])]),
            _: 1
          }),
          s("div", l3, [
            s("input", {
              type: "text",
              class: Fe(["name-input", { error: e.nameError || e.name.length === 0, valid: r.value }]),
              value: e.name,
              placeholder: "my-imported-env",
              onInput: d,
              onBlur: m
            }, null, 42, i3),
            l.value ? (a(), i("span", r3, "...")) : r.value ? (a(), i("span", c3, "✓")) : y("", !0)
          ]),
          e.nameError ? (a(), i("div", u3, f(e.nameError), 1)) : y("", !0),
          g[4] || (g[4] = s("div", { class: "field-hint" }, "Creates a new environment with this name", -1))
        ]),
        s("div", d3, [
          b(Rn, null, {
            default: h(() => [...g[5] || (g[5] = [
              $("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          s("div", f3, [
            (a(), i(q, null, he(u, (w) => s("label", {
              key: w.value,
              class: Fe(["strategy-option", { active: e.modelStrategy === w.value }])
            }, [
              s("input", {
                type: "radio",
                name: "model-strategy",
                value: w.value,
                checked: e.modelStrategy === w.value,
                onChange: (p) => n("update:modelStrategy", w.value)
              }, null, 40, m3),
              s("div", v3, [
                s("span", p3, f(w.label), 1),
                s("span", g3, f(w.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        s("div", h3, [
          s("label", y3, [
            s("input", {
              type: "checkbox",
              checked: e.switchAfterImport,
              onChange: g[0] || (g[0] = (w) => n("update:switchAfterImport", w.target.checked))
            }, null, 40, w3),
            g[6] || (g[6] = s("span", null, "Switch to this environment after import", -1))
          ])
        ]),
        s("details", _3, [
          g[8] || (g[8] = s("summary", { class: "advanced-toggle" }, "Advanced Options", -1)),
          s("div", k3, [
            s("div", b3, [
              b(Rn, null, {
                default: h(() => [...g[7] || (g[7] = [
                  $("PyTorch Backend", -1)
                ])]),
                _: 1
              }),
              s("select", {
                class: "backend-select",
                value: e.torchBackend,
                onChange: g[1] || (g[1] = (w) => n("update:torchBackend", w.target.value))
              }, [
                (a(!0), i(q, null, he(tt(El), (w) => (a(), i("option", {
                  key: w,
                  value: w
                }, f(w) + f(w === "auto" ? " (detect GPU)" : ""), 9, C3))), 128))
              ], 40, $3)
            ])
          ])
        ])
      ])
    ]));
  }
}), S3 = /* @__PURE__ */ Se(x3, [["__scopeId", "data-v-89ea06a1"]]), I3 = { class: "import-flow" }, E3 = {
  key: 0,
  class: "import-empty"
}, T3 = { class: "git-import-section" }, M3 = { class: "git-url-input-row" }, P3 = ["disabled"], R3 = {
  key: 0,
  class: "git-error"
}, N3 = {
  key: 1,
  class: "import-configure"
}, D3 = { class: "selected-file-bar" }, L3 = {
  key: 0,
  class: "file-bar-content"
}, O3 = { class: "file-bar-info" }, A3 = { class: "file-bar-name" }, U3 = { class: "file-bar-size" }, z3 = {
  key: 1,
  class: "file-bar-content"
}, F3 = { class: "file-bar-info" }, V3 = { class: "file-bar-name" }, B3 = {
  key: 0,
  class: "preview-loading"
}, W3 = { class: "import-actions" }, G3 = {
  key: 2,
  class: "import-progress"
}, j3 = { class: "creating-intro" }, H3 = {
  key: 0,
  class: "progress-warning"
}, q3 = {
  key: 1,
  class: "import-error"
}, K3 = { class: "error-message" }, J3 = {
  key: 3,
  class: "import-complete"
}, Q3 = { class: "complete-message" }, Y3 = { class: "complete-title" }, X3 = { class: "complete-details" }, Z3 = { class: "complete-actions" }, e5 = /* @__PURE__ */ be({
  __name: "ImportFlow",
  props: {
    workspacePath: {},
    resumeImport: { type: Boolean },
    initialProgress: {}
  },
  emits: ["import-complete", "import-started", "source-cleared"],
  setup(e, { expose: t, emit: o }) {
    var Ee, H, Z, K;
    const n = e, l = o, { previewTarballImport: r, previewGitImport: u, validateEnvironmentName: c, executeImport: d, executeGitImport: m, getImportProgress: v } = pt();
    let g = null;
    const w = k(null), p = k(n.resumeImport ?? !1), _ = k(!1), x = k(!1), C = k(""), S = k(!1), T = k(null), M = k(""), P = k(null), A = k(!1), B = k(null), j = k(null), E = k({
      name: ((Ee = n.initialProgress) == null ? void 0 : Ee.environmentName) ?? "",
      modelStrategy: "required",
      torchBackend: "auto",
      switchAfterImport: !0
    }), V = k(null), ae = k({
      message: ((H = n.initialProgress) == null ? void 0 : H.message) ?? "Preparing import...",
      phase: ((Z = n.initialProgress) == null ? void 0 : Z.phase) ?? "",
      progress: ((K = n.initialProgress) == null ? void 0 : K.progress) ?? 0,
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
    ], ue = N(() => {
      if (!j.value)
        return {
          sourceEnvironment: "",
          workflows: [],
          models: [],
          nodes: [],
          gitBranch: void 0,
          gitCommit: void 0
        };
      const X = j.value;
      return {
        sourceEnvironment: X.comfyui_version ? `ComfyUI ${X.comfyui_version}` : "Unknown",
        workflows: X.workflows.map((xe) => xe.name),
        models: X.models.map((xe) => ({
          filename: xe.filename,
          size: 0,
          type: xe.relative_path.split("/")[0] || "model"
        })),
        nodes: X.nodes.map((xe) => xe.name),
        gitBranch: void 0,
        gitCommit: void 0
      };
    }), we = N(() => !S.value && !T.value && j.value && E.value.name.length > 0 && !V.value && (w.value || P.value));
    async function se(X) {
      w.value = X, S.value = !0, T.value = null, j.value = null;
      try {
        const xe = await r(X);
        j.value = xe;
      } catch (xe) {
        T.value = xe instanceof Error ? xe.message : "Failed to analyze file", console.error("Preview error:", xe);
      } finally {
        S.value = !1;
      }
    }
    function F() {
      w.value = null, P.value = null, M.value = "", B.value = null, _.value = !1, x.value = !1, C.value = "", j.value = null, T.value = null, E.value = { name: "", modelStrategy: "required", torchBackend: "auto", switchAfterImport: !0 }, V.value = null, l("source-cleared");
    }
    function Q() {
      Re(), F(), p.value = !1, S.value = !1, A.value = !1, ae.value = {
        message: "Preparing import...",
        phase: "",
        progress: 0,
        error: null
      };
    }
    async function Pe() {
      if (M.value.trim()) {
        A.value = !0, B.value = null;
        try {
          const X = await u(M.value.trim());
          P.value = M.value.trim(), j.value = X;
        } catch (X) {
          B.value = X instanceof Error ? X.message : "Failed to analyze repository";
        } finally {
          A.value = !1;
        }
      }
    }
    function te(X) {
      try {
        const xe = new URL(X);
        return xe.host + xe.pathname.replace(/\.git$/, "");
      } catch {
        return X;
      }
    }
    async function ge(X) {
      if (!X) {
        V.value = "Environment name is required";
        return;
      }
      try {
        const xe = await c(X);
        V.value = xe.valid ? null : xe.error || "Invalid name";
      } catch {
        V.value = "Failed to validate name";
      }
    }
    async function O() {
      if (E.value.name && !(!w.value && !P.value)) {
        p.value = !0, _.value = !1, ae.value = { message: `Creating environment '${E.value.name}'...`, phase: "", progress: 0, error: null }, l("import-started");
        try {
          let X;
          if (w.value)
            X = await d(
              w.value,
              E.value.name,
              E.value.modelStrategy,
              E.value.torchBackend
            );
          else if (P.value)
            X = await m(
              P.value,
              E.value.name,
              E.value.modelStrategy,
              E.value.torchBackend
            );
          else
            throw new Error("No import source selected");
          X.status === "started" ? me() : (x.value = !1, C.value = X.message, p.value = !1, _.value = !0);
        } catch (X) {
          x.value = !1, C.value = X instanceof Error ? X.message : "Unknown error occurred during import", p.value = !1, _.value = !0;
        }
      }
    }
    async function me() {
      if (g) return;
      const X = async () => {
        try {
          const ce = await v();
          return ae.value = {
            message: ce.message,
            phase: ce.phase || "",
            progress: ce.progress ?? (ce.state === "importing" ? 50 : 0),
            error: ce.error || null
          }, ce.state === "complete" ? (Re(), x.value = !0, C.value = `Environment '${ce.environment_name}' created successfully`, p.value = !1, _.value = !0, ce.environment_name && l("import-complete", ce.environment_name, E.value.switchAfterImport), !1) : ce.state === "error" ? (Re(), x.value = !1, C.value = ce.error || ce.message, p.value = !1, _.value = !0, !1) : !0;
        } catch (ce) {
          return console.error("Failed to poll import progress:", ce), !0;
        }
      };
      await X() && (g = setInterval(async () => {
        await X() || Re();
      }, 2e3));
    }
    function Re() {
      g && (clearInterval(g), g = null);
    }
    function Ge(X) {
      return X < 1024 ? `${X} B` : X < 1024 * 1024 ? `${(X / 1024).toFixed(1)} KB` : X < 1024 * 1024 * 1024 ? `${(X / (1024 * 1024)).toFixed(1)} MB` : `${(X / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return rt(async () => {
      try {
        const X = await v();
        console.log("[ComfyGit ImportFlow] Import progress check:", X.state, X), X.state === "importing" && (console.log("[ComfyGit ImportFlow] Resuming in-progress import:", X.environment_name), p.value = !0, E.value.name = X.environment_name || E.value.name || "", ae.value = {
          progress: X.progress ?? 0,
          message: X.message || "Importing...",
          phase: X.phase || "",
          error: null
        }, me());
      } catch (X) {
        console.log("[ComfyGit ImportFlow] Import progress check failed:", X);
      }
    }), t({
      handleReset: Q,
      isImporting: p,
      canImport: we
    }), (X, xe) => {
      var ce;
      return a(), i("div", I3, [
        !w.value && !P.value && !p.value ? (a(), i("div", E3, [
          b($x, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: se
          }),
          xe[7] || (xe[7] = s("div", { class: "import-divider" }, [
            s("span", null, "or")
          ], -1)),
          s("div", T3, [
            xe[5] || (xe[5] = s("div", { class: "git-import-header" }, "Import from Git Repository", -1)),
            s("div", M3, [
              Et(s("input", {
                type: "text",
                class: "git-url-input",
                "onUpdate:modelValue": xe[0] || (xe[0] = (le) => M.value = le),
                placeholder: "https://github.com/user/repo.git",
                onKeyup: fs(Pe, ["enter"]),
                disabled: A.value
              }, null, 40, P3), [
                [$o, M.value]
              ]),
              b(Te, {
                variant: "primary",
                size: "sm",
                disabled: !M.value.trim() || A.value,
                onClick: Pe
              }, {
                default: h(() => [
                  $(f(A.value ? "Analyzing..." : "ANALYZE"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            B.value ? (a(), i("div", R3, f(B.value), 1)) : y("", !0),
            xe[6] || (xe[6] = s("div", { class: "git-url-hint" }, "Paste a GitHub URL to preview the environment", -1))
          ])
        ])) : (w.value || P.value) && !p.value && !_.value ? (a(), i("div", N3, [
          s("div", D3, [
            w.value ? (a(), i("div", L3, [
              xe[8] || (xe[8] = s("div", { class: "file-bar-icon" }, "📦", -1)),
              s("div", O3, [
                s("div", A3, f(w.value.name), 1),
                s("div", U3, f(Ge(w.value.size)), 1)
              ])
            ])) : P.value ? (a(), i("div", z3, [
              xe[10] || (xe[10] = s("div", { class: "file-bar-icon" }, "🔗", -1)),
              s("div", F3, [
                s("div", V3, f(te(P.value)), 1),
                xe[9] || (xe[9] = s("div", { class: "file-bar-size" }, "Git Repository", -1))
              ])
            ])) : y("", !0),
            b(Te, {
              variant: "ghost",
              size: "sm",
              onClick: F
            }, {
              default: h(() => [...xe[11] || (xe[11] = [
                $(" Change Source ", -1)
              ])]),
              _: 1
            })
          ]),
          S.value ? (a(), i("div", B3, [...xe[12] || (xe[12] = [
            s("div", { class: "loading-spinner" }, null, -1),
            s("div", { class: "loading-text" }, "Analyzing import file...", -1)
          ])])) : T.value ? (a(), R(us, {
            key: 1,
            type: "error",
            title: "Failed to Analyze File",
            details: [T.value]
          }, null, 8, ["details"])) : j.value ? (a(), R(s3, {
            key: 2,
            "source-environment": ue.value.sourceEnvironment,
            workflows: ue.value.workflows,
            models: ue.value.models,
            nodes: ue.value.nodes,
            "git-branch": ue.value.gitBranch,
            "git-commit": ue.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : y("", !0),
          j.value ? (a(), R(S3, {
            key: 3,
            name: E.value.name,
            "onUpdate:name": xe[1] || (xe[1] = (le) => E.value.name = le),
            "model-strategy": E.value.modelStrategy,
            "onUpdate:modelStrategy": xe[2] || (xe[2] = (le) => E.value.modelStrategy = le),
            "torch-backend": E.value.torchBackend,
            "onUpdate:torchBackend": xe[3] || (xe[3] = (le) => E.value.torchBackend = le),
            "switch-after-import": E.value.switchAfterImport,
            "onUpdate:switchAfterImport": xe[4] || (xe[4] = (le) => E.value.switchAfterImport = le),
            "name-error": V.value,
            onValidateName: ge
          }, null, 8, ["name", "model-strategy", "torch-backend", "switch-after-import", "name-error"])) : y("", !0),
          E.value.modelStrategy === "skip" && ((ce = j.value) != null && ce.models_needing_download) ? (a(), R(us, {
            key: 4,
            type: "warning",
            title: "Models Will Not Be Downloaded",
            details: [
              `${j.value.models_needing_download} model(s) will need to be downloaded later`,
              "You can resolve missing models from the STATUS page after import"
            ]
          }, null, 8, ["details"])) : y("", !0),
          s("div", W3, [
            b(Te, {
              variant: "secondary",
              size: "md",
              onClick: F
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
              onClick: O
            }, {
              default: h(() => [...xe[14] || (xe[14] = [
                $(" Create Environment ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : p.value ? (a(), i("div", G3, [
          s("p", j3, [
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
          ae.value.error ? y("", !0) : (a(), i("p", H3, " This may take several minutes. Please wait... ")),
          ae.value.error ? (a(), i("div", q3, [
            s("p", K3, f(ae.value.error), 1)
          ])) : y("", !0)
        ])) : _.value ? (a(), i("div", J3, [
          s("div", {
            class: Fe(["complete-icon", x.value ? "success" : "error"])
          }, f(x.value ? "✓" : "✕"), 3),
          s("div", Q3, [
            s("div", Y3, f(x.value ? "Import Successful" : "Import Failed"), 1),
            s("div", X3, f(C.value), 1)
          ]),
          s("div", Z3, [
            b(Te, {
              variant: "primary",
              size: "md",
              onClick: Q
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
}), cc = /* @__PURE__ */ Se(e5, [["__scopeId", "data-v-72cbc04e"]]), t5 = /* @__PURE__ */ be({
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
    return (r, u) => (a(), i(q, null, [
      b(Ut, null, Yt({
        content: h(() => [
          b(cc, { onImportComplete: l })
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
      b(cs, {
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
}), s5 = /* @__PURE__ */ Se(t5, [["__scopeId", "data-v-41b1f298"]]), o5 = { class: "base-tabs" }, n5 = ["disabled", "onClick"], a5 = {
  key: 0,
  class: "base-tabs__badge"
}, l5 = /* @__PURE__ */ be({
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
    return (r, u) => (a(), i("div", o5, [
      (a(!0), i(q, null, he(e.tabs, (c) => (a(), i("button", {
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
        c.badge ? (a(), i("span", a5, f(c.badge), 1)) : y("", !0)
      ], 10, n5))), 128))
    ]));
  }
}), Tl = /* @__PURE__ */ Se(l5, [["__scopeId", "data-v-ad5e6cad"]]), i5 = { class: "commit-list" }, r5 = /* @__PURE__ */ be({
  __name: "CommitList",
  setup(e) {
    return (t, o) => (a(), i("div", i5, [
      st(t.$slots, "default", {}, void 0)
    ]));
  }
}), uc = /* @__PURE__ */ Se(r5, [["__scopeId", "data-v-8c5ee761"]]), c5 = { class: "commit-message" }, u5 = { class: "commit-date" }, d5 = /* @__PURE__ */ be({
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
      b(rc, { hash: e.hash }, null, 8, ["hash"]),
      s("span", c5, f(e.message), 1),
      s("span", u5, f(e.relativeDate), 1),
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
}), dc = /* @__PURE__ */ Se(d5, [["__scopeId", "data-v-dd7c621b"]]), f5 = /* @__PURE__ */ be({
  __name: "HistorySection",
  props: {
    commits: {},
    currentRef: {},
    embedded: { type: Boolean }
  },
  emits: ["select", "checkout"],
  setup(e) {
    const t = e, o = N(() => `HISTORY (${t.currentRef || "detached"})`);
    return (n, l) => (a(), R(Ut, null, Yt({
      content: h(() => [
        e.commits.length === 0 ? (a(), R(rs, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (a(), R(uc, { key: 1 }, {
          default: h(() => [
            (a(!0), i(q, null, he(e.commits, (r) => (a(), R(dc, {
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
}), m5 = /* @__PURE__ */ Se(f5, [["__scopeId", "data-v-fa4bf3a1"]]), v5 = { class: "branch-create-form" }, p5 = { class: "form-actions" }, g5 = /* @__PURE__ */ be({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(e, { emit: t }) {
    const o = t, n = k(""), l = N(() => {
      const c = n.value.trim();
      return c.length > 0 && !c.startsWith("-") && !c.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(c);
    });
    function r() {
      l.value && (o("create", n.value.trim()), n.value = "");
    }
    function u() {
      n.value = "", o("cancel");
    }
    return (c, d) => (a(), i("div", v5, [
      b(ho, {
        modelValue: n.value,
        "onUpdate:modelValue": d[0] || (d[0] = (m) => n.value = m),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: r,
        onEscape: u
      }, null, 8, ["modelValue"]),
      s("div", p5, [
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
}), h5 = /* @__PURE__ */ Se(g5, [["__scopeId", "data-v-7c500394"]]), y5 = { class: "branch-list-item__indicator" }, w5 = { class: "branch-list-item__name" }, _5 = {
  key: 0,
  class: "branch-list-item__actions"
}, k5 = {
  key: 0,
  class: "branch-list-item__current-label"
}, b5 = /* @__PURE__ */ be({
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
      s("span", y5, f(e.isCurrent ? "●" : "○"), 1),
      s("span", w5, f(e.branchName), 1),
      t.$slots.actions || e.showCurrentLabel ? (a(), i("div", _5, [
        st(t.$slots, "actions", {}, void 0),
        e.isCurrent && e.showCurrentLabel ? (a(), i("span", k5, " current ")) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), $5 = /* @__PURE__ */ Se(b5, [["__scopeId", "data-v-c6581a24"]]), C5 = { class: "header-info" }, x5 = { class: "branch-name" }, S5 = {
  key: 0,
  class: "current-badge"
}, I5 = { class: "branch-meta" }, E5 = { key: 0 }, T5 = {
  key: 0,
  class: "meta-note"
}, M5 = {
  key: 0,
  class: "loading"
}, P5 = {
  key: 1,
  class: "empty-state"
}, R5 = /* @__PURE__ */ be({
  __name: "BranchDetailModal",
  props: {
    branchName: {},
    isCurrent: { type: Boolean }
  },
  emits: ["close", "delete", "switch"],
  setup(e) {
    const t = e, { getBranchHistory: o } = pt(), n = k([]), l = k(!1), r = k(!0);
    return rt(async () => {
      try {
        const u = await o(t.branchName, 50);
        n.value = u.commits, l.value = u.has_more;
      } finally {
        r.value = !1;
      }
    }), (u, c) => (a(), R(Tt, {
      size: "md",
      "show-close-button": !1,
      onClose: c[3] || (c[3] = (d) => u.$emit("close"))
    }, {
      header: h(() => [
        s("div", C5, [
          c[4] || (c[4] = s("h3", { class: "header-title" }, "BRANCH", -1)),
          s("span", x5, f(e.branchName), 1),
          e.isCurrent ? (a(), i("span", S5, "CURRENT")) : y("", !0)
        ]),
        b(Oe, {
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
        s("div", I5, [
          r.value ? (a(), i("span", E5, "Loading...")) : (a(), i(q, { key: 1 }, [
            s("span", null, f(n.value.length) + " commits", 1),
            l.value ? (a(), i("span", T5, "(showing first " + f(n.value.length) + ")", 1)) : y("", !0)
          ], 64))
        ]),
        r.value ? (a(), i("div", M5, "Loading commit history...")) : n.value.length === 0 ? (a(), i("div", P5, " No commits found on this branch ")) : (a(), R(uc, {
          key: 2,
          class: "branch-commits"
        }, {
          default: h(() => [
            (a(!0), i(q, null, he(n.value, (d) => (a(), R(dc, {
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
        e.isCurrent ? y("", !0) : (a(), R(Te, {
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
        e.isCurrent ? y("", !0) : (a(), R(Oe, {
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
}), N5 = /* @__PURE__ */ Se(R5, [["__scopeId", "data-v-2e5437cc"]]), D5 = {
  key: 2,
  class: "branch-list"
}, L5 = /* @__PURE__ */ be({
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
    return (v, g) => (a(), R(Ut, null, Yt({
      content: h(() => [
        n.value ? (a(), R(h5, {
          key: 0,
          onCreate: r,
          onCancel: u
        })) : y("", !0),
        e.branches.length === 0 ? (a(), R(rs, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (a(), i("div", D5, [
          (a(!0), i(q, null, he(e.branches, (w) => (a(), R($5, {
            key: w.name,
            "branch-name": w.name,
            "is-current": w.is_current,
            clickable: !0,
            "show-current-label": !0,
            onClick: (p) => c(w)
          }, {
            actions: h(() => [
              w.is_current ? y("", !0) : (a(), R(Te, {
                key: 0,
                variant: "secondary",
                size: "xs",
                onClick: mt((p) => o("switch", w.name), ["stop"])
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
        l.value ? (a(), R(N5, {
          key: 3,
          "branch-name": l.value.name,
          "is-current": l.value.is_current,
          onClose: g[1] || (g[1] = (w) => l.value = null),
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
              n.value ? y("", !0) : (a(), R(Te, {
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
        key: "0"
      }
    ]), 1024));
  }
}), O5 = /* @__PURE__ */ Se(L5, [["__scopeId", "data-v-a3de96cc"]]);
function fc(e) {
  return "has_conflicts" in e && e.has_conflicts === !0 && Array.isArray(e.workflow_conflicts);
}
const A5 = { class: "remote-url-display" }, U5 = ["title"], z5 = ["title"], F5 = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, V5 = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, B5 = /* @__PURE__ */ be({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(e) {
    const t = e, o = k(!1), n = N(() => {
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
    return (r, u) => (a(), i("div", A5, [
      s("span", {
        class: "url-text",
        title: e.url
      }, f(n.value), 9, U5),
      s("button", {
        class: Fe(["copy-btn", { copied: o.value }]),
        onClick: l,
        title: o.value ? "Copied!" : "Copy URL"
      }, [
        o.value ? (a(), i("svg", V5, [...u[1] || (u[1] = [
          s("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (a(), i("svg", F5, [...u[0] || (u[0] = [
          s("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          s("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, z5)
    ]));
  }
}), W5 = /* @__PURE__ */ Se(B5, [["__scopeId", "data-v-7768a58d"]]), G5 = { class: "remote-title" }, j5 = {
  key: 0,
  class: "default-badge"
}, H5 = {
  key: 1,
  class: "sync-badge"
}, q5 = {
  key: 0,
  class: "ahead"
}, K5 = {
  key: 1,
  class: "behind"
}, J5 = {
  key: 1,
  class: "synced"
}, Q5 = ["href"], Y5 = {
  key: 1,
  class: "remote-url-text"
}, X5 = /* @__PURE__ */ be({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove", "pull", "push"],
  setup(e) {
    const t = e, o = N(() => t.fetchingRemote === t.remote.name), n = N(() => t.remote.is_default), l = N(() => t.syncStatus && t.syncStatus.behind > 0), r = N(() => t.syncStatus && t.syncStatus.ahead > 0), u = N(() => t.remote.push_url !== t.remote.fetch_url), c = N(() => {
      const m = t.remote.fetch_url, v = m.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return v ? `https://${v[1]}/${v[2]}` : m.startsWith("https://") || m.startsWith("http://") ? m.replace(/\.git$/, "") : null;
    }), d = N(() => t.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (m, v) => (a(), R(Vt, {
      status: n.value ? "synced" : void 0
    }, Yt({
      icon: h(() => [
        $(f(n.value ? "🔗" : "🌐"), 1)
      ]),
      title: h(() => [
        s("div", G5, [
          s("span", null, f(e.remote.name), 1),
          n.value ? (a(), i("span", j5, "DEFAULT")) : y("", !0),
          e.syncStatus ? (a(), i("span", H5, [
            e.syncStatus.ahead > 0 || e.syncStatus.behind > 0 ? (a(), i(q, { key: 0 }, [
              e.syncStatus.ahead > 0 ? (a(), i("span", q5, "↑" + f(e.syncStatus.ahead), 1)) : y("", !0),
              e.syncStatus.behind > 0 ? (a(), i("span", K5, "↓" + f(e.syncStatus.behind), 1)) : y("", !0)
            ], 64)) : (a(), i("span", J5, "✓ synced"))
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
        }, f(d.value), 9, Q5)) : (a(), i("span", Y5, f(d.value), 1))
      ]),
      actions: h(() => [
        b(Te, {
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
        b(Te, {
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
        b(Te, {
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
        b(Te, {
          variant: "secondary",
          size: "xs",
          onClick: v[4] || (v[4] = (g) => m.$emit("edit", e.remote.name))
        }, {
          default: h(() => [...v[7] || (v[7] = [
            $(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        n.value ? y("", !0) : (a(), R(Te, {
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
      u.value ? {
        name: "details",
        fn: h(() => [
          e.remote.push_url !== e.remote.fetch_url ? (a(), R(_t, {
            key: 0,
            label: "Push URL:"
          }, {
            default: h(() => [
              b(W5, {
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
}), Z5 = /* @__PURE__ */ Se(X5, [["__scopeId", "data-v-8310f3a8"]]), eS = ["for"], tS = {
  key: 0,
  class: "base-form-field-required"
}, sS = { class: "base-form-field-input" }, oS = {
  key: 1,
  class: "base-form-field-error"
}, nS = {
  key: 2,
  class: "base-form-field-hint"
}, aS = /* @__PURE__ */ be({
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
    const t = e, o = N(() => t.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (n, l) => (a(), i("div", {
      class: Fe(["base-form-field", { "full-width": e.fullWidth }])
    }, [
      e.label ? (a(), i("label", {
        key: 0,
        for: o.value,
        class: "base-form-field-label"
      }, [
        $(f(e.label) + " ", 1),
        e.required ? (a(), i("span", tS, "*")) : y("", !0)
      ], 8, eS)) : y("", !0),
      s("div", sS, [
        st(n.$slots, "default", {}, void 0)
      ]),
      e.error ? (a(), i("span", oS, f(e.error), 1)) : e.hint ? (a(), i("span", nS, f(e.hint), 1)) : y("", !0)
    ], 2));
  }
}), Lt = /* @__PURE__ */ Se(aS, [["__scopeId", "data-v-9a1cf296"]]), lS = { class: "remote-form" }, iS = { class: "form-header" }, rS = { class: "form-body" }, cS = {
  key: 0,
  class: "form-error"
}, uS = { class: "form-actions" }, dS = /* @__PURE__ */ be({
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
    const c = N(() => l.value.name.trim() !== "" && l.value.fetchUrl.trim() !== "");
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
    return (m, v) => (a(), i("div", lS, [
      s("div", iS, [
        b(ns, null, {
          default: h(() => [
            $(f(e.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      s("div", rS, [
        b(Lt, {
          label: "Remote Name",
          required: ""
        }, {
          default: h(() => [
            b(wt, {
              modelValue: l.value.name,
              "onUpdate:modelValue": v[0] || (v[0] = (g) => l.value.name = g),
              disabled: e.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        b(Lt, {
          label: "Fetch URL",
          required: ""
        }, {
          default: h(() => [
            b(wt, {
              modelValue: l.value.fetchUrl,
              "onUpdate:modelValue": v[1] || (v[1] = (g) => l.value.fetchUrl = g),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        b(Lt, { label: "Push URL (optional)" }, {
          default: h(() => [
            b(wt, {
              modelValue: l.value.pushUrl,
              "onUpdate:modelValue": v[2] || (v[2] = (g) => l.value.pushUrl = g),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        u.value ? (a(), i("div", cS, f(u.value), 1)) : y("", !0)
      ]),
      s("div", uS, [
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
}), fS = /* @__PURE__ */ Se(dS, [["__scopeId", "data-v-56021b18"]]), mS = { class: "conflict-summary-box" }, vS = { class: "summary-header" }, pS = { class: "summary-text" }, gS = { key: 0 }, hS = {
  key: 1,
  class: "all-resolved"
}, yS = { class: "summary-progress" }, wS = { class: "progress-bar" }, _S = { class: "progress-text" }, kS = /* @__PURE__ */ be({
  __name: "ConflictSummaryBox",
  props: {
    conflictCount: {},
    resolvedCount: {},
    operationType: {}
  },
  setup(e) {
    const t = e, o = N(
      () => t.conflictCount > 0 ? t.resolvedCount / t.conflictCount * 100 : 0
    );
    return (n, l) => (a(), i("div", mS, [
      s("div", vS, [
        l[0] || (l[0] = s("span", { class: "summary-icon" }, "⚠", -1)),
        s("div", pS, [
          s("strong", null, f(e.conflictCount) + " conflict" + f(e.conflictCount !== 1 ? "s" : "") + " detected", 1),
          e.resolvedCount < e.conflictCount ? (a(), i("p", gS, " Resolve all conflicts before " + f(e.operationType) + "ing ", 1)) : (a(), i("p", hS, " All conflicts resolved - ready to " + f(e.operationType), 1))
        ])
      ]),
      s("div", yS, [
        s("div", wS, [
          s("div", {
            class: "progress-fill",
            style: At({ width: o.value + "%" })
          }, null, 4)
        ]),
        s("span", _S, f(e.resolvedCount) + " / " + f(e.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), bS = /* @__PURE__ */ Se(kS, [["__scopeId", "data-v-4e9e6cc9"]]), $S = { class: "modal-header" }, CS = { class: "modal-title" }, xS = { class: "modal-body" }, SS = {
  key: 0,
  class: "error-box"
}, IS = {
  key: 0,
  class: "error-hint"
}, ES = {
  key: 1,
  class: "loading-state"
}, TS = { class: "commit-summary" }, MS = {
  key: 0,
  class: "commits-section"
}, PS = { class: "commit-list" }, RS = { class: "commit-hash" }, NS = { class: "commit-message" }, DS = { class: "commit-date" }, LS = {
  key: 1,
  class: "changes-section"
}, OS = {
  key: 0,
  class: "change-group",
  open: ""
}, AS = { class: "change-count" }, US = { class: "change-list" }, zS = {
  key: 0,
  class: "conflict-badge"
}, FS = {
  key: 1,
  class: "change-group"
}, VS = { class: "change-count" }, BS = { class: "change-list" }, WS = {
  key: 2,
  class: "change-group"
}, GS = { class: "change-count" }, jS = { class: "change-list" }, HS = {
  key: 3,
  class: "strategy-section"
}, qS = { class: "radio-group" }, KS = { class: "radio-option" }, JS = { class: "radio-option" }, QS = { class: "radio-option" }, YS = {
  key: 4,
  class: "up-to-date"
}, XS = { class: "modal-actions" }, bi = "comfygit.pullModelStrategy", ZS = /* @__PURE__ */ be({
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
    const o = e, n = t, l = k(localStorage.getItem(bi) || "skip");
    kt(l, (C) => {
      localStorage.setItem(bi, C);
    });
    const r = N(() => {
      var C;
      return ((C = o.error) == null ? void 0 : C.toLowerCase().includes("unrelated histories")) ?? !1;
    }), u = N(() => {
      if (!o.preview) return 0;
      const C = o.preview.changes.workflows;
      return C.added.length + C.modified.length + C.deleted.length;
    }), c = N(() => o.preview ? o.preview.changes.nodes.to_install.length : 0), d = N(() => {
      var C;
      return u.value > 0 || c.value > 0 || (((C = o.preview) == null ? void 0 : C.changes.models.count) || 0) > 0;
    }), m = N(() => o.preview && fc(o.preview) ? o.preview : null), v = N(() => {
      var C;
      return ((C = m.value) == null ? void 0 : C.workflow_conflicts.length) ?? 0;
    }), g = N(() => {
      var C;
      return ((C = o.conflictResolutions) == null ? void 0 : C.size) ?? 0;
    }), w = N(
      () => v.value > 0 && g.value === v.value
    ), p = N(() => !(!o.preview || o.preview.has_uncommitted_changes || m.value && !w.value));
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
      return a(), R(Rt, { to: "body" }, [
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
            s("div", $S, [
              s("h3", CS, "PULL FROM " + f(e.remoteName.toUpperCase()), 1),
              s("button", {
                class: "modal-close",
                onClick: S[0] || (S[0] = (P) => C.$emit("close"))
              }, "✕")
            ]),
            s("div", xS, [
              e.error ? (a(), i("div", SS, [
                S[13] || (S[13] = s("span", { class: "error-icon" }, "✕", -1)),
                s("div", null, [
                  S[12] || (S[12] = s("strong", null, "PULL FAILED", -1)),
                  s("p", null, f(e.error), 1),
                  r.value ? (a(), i("p", IS, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : y("", !0)
                ])
              ])) : e.loading ? (a(), i("div", ES, [...S[14] || (S[14] = [
                s("span", { class: "spinner" }, "⟳", -1),
                $(" Loading preview... ", -1)
              ])])) : (T = e.preview) != null && T.has_uncommitted_changes ? (a(), i(q, { key: 2 }, [
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
              ], 64)) : e.preview ? (a(), i(q, { key: 3 }, [
                s("div", TS, [
                  S[17] || (S[17] = s("span", { class: "icon" }, "📥", -1)),
                  $(" " + f(e.preview.commits_behind) + " commit" + f(e.preview.commits_behind !== 1 ? "s" : "") + " from " + f(e.preview.remote) + "/" + f(e.preview.branch), 1)
                ]),
                e.preview.commits && e.preview.commits.length > 0 ? (a(), i("div", MS, [
                  S[18] || (S[18] = s("h4", { class: "section-title" }, "INCOMING COMMITS", -1)),
                  s("div", PS, [
                    (a(!0), i(q, null, he(e.preview.commits, (P) => (a(), i("div", {
                      key: P.hash,
                      class: "commit-item"
                    }, [
                      s("span", RS, f(P.short_hash || P.hash.slice(0, 7)), 1),
                      s("span", NS, f(P.message), 1),
                      s("span", DS, f(P.date_relative || P.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                d.value ? (a(), i("div", LS, [
                  S[22] || (S[22] = s("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  u.value > 0 ? (a(), i("details", OS, [
                    s("summary", null, [
                      S[19] || (S[19] = s("span", { class: "change-type" }, "Workflows", -1)),
                      s("span", AS, f(u.value) + " changes", 1)
                    ]),
                    s("div", US, [
                      (a(!0), i(q, null, he(e.preview.changes.workflows.added, (P) => (a(), i("div", {
                        key: "a-" + P,
                        class: "change-item add"
                      }, " + " + f(P), 1))), 128)),
                      (a(!0), i(q, null, he(e.preview.changes.workflows.modified, (P) => (a(), i("div", {
                        key: "m-" + P,
                        class: "change-item modify"
                      }, [
                        $(" ~ " + f(P) + " ", 1),
                        _(P) ? (a(), i("span", zS, "CONFLICT")) : y("", !0)
                      ]))), 128)),
                      (a(!0), i(q, null, he(e.preview.changes.workflows.deleted, (P) => (a(), i("div", {
                        key: "d-" + P,
                        class: "change-item delete"
                      }, " - " + f(P), 1))), 128))
                    ])
                  ])) : y("", !0),
                  c.value > 0 ? (a(), i("details", FS, [
                    s("summary", null, [
                      S[20] || (S[20] = s("span", { class: "change-type" }, "Nodes", -1)),
                      s("span", VS, f(c.value) + " to install", 1)
                    ]),
                    s("div", BS, [
                      (a(!0), i(q, null, he(e.preview.changes.nodes.to_install, (P) => (a(), i("div", {
                        key: P,
                        class: "change-item add"
                      }, " + " + f(P), 1))), 128))
                    ])
                  ])) : y("", !0),
                  e.preview.changes.models.count > 0 ? (a(), i("details", WS, [
                    s("summary", null, [
                      S[21] || (S[21] = s("span", { class: "change-type" }, "Models", -1)),
                      s("span", GS, f(e.preview.changes.models.count) + " referenced", 1)
                    ]),
                    s("div", jS, [
                      (a(!0), i(q, null, he(e.preview.changes.models.referenced, (P) => (a(), i("div", {
                        key: P,
                        class: "change-item"
                      }, f(P), 1))), 128))
                    ])
                  ])) : y("", !0)
                ])) : y("", !0),
                m.value ? (a(), R(bS, {
                  key: 2,
                  "conflict-count": v.value,
                  "resolved-count": g.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : y("", !0),
                e.preview.changes.models.count > 0 ? (a(), i("div", HS, [
                  S[27] || (S[27] = s("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  s("div", qS, [
                    s("label", KS, [
                      Et(s("input", {
                        type: "radio",
                        "onUpdate:modelValue": S[1] || (S[1] = (P) => l.value = P),
                        value: "all"
                      }, null, 512), [
                        [Pn, l.value]
                      ]),
                      S[23] || (S[23] = s("span", null, "Download all models", -1))
                    ]),
                    s("label", JS, [
                      Et(s("input", {
                        type: "radio",
                        "onUpdate:modelValue": S[2] || (S[2] = (P) => l.value = P),
                        value: "required"
                      }, null, 512), [
                        [Pn, l.value]
                      ]),
                      S[24] || (S[24] = s("span", null, "Download required only", -1))
                    ]),
                    s("label", QS, [
                      Et(s("input", {
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
                e.preview.commits_behind === 0 ? (a(), i("div", YS, [
                  S[29] || (S[29] = s("span", { class: "icon" }, "✓", -1)),
                  $(" Already up to date with " + f(e.preview.remote) + "/" + f(e.preview.branch), 1)
                ])) : y("", !0)
              ], 64)) : y("", !0)
            ]),
            s("div", XS, [
              b(Te, {
                variant: "secondary",
                onClick: S[4] || (S[4] = (P) => C.$emit("close"))
              }, {
                default: h(() => [...S[30] || (S[30] = [
                  $(" Cancel ", -1)
                ])]),
                _: 1
              }),
              e.error ? (a(), i(q, { key: 0 }, [
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
              ], 64)) : (M = e.preview) != null && M.has_uncommitted_changes ? (a(), R(Te, {
                key: 1,
                variant: "destructive",
                loading: e.pulling,
                onClick: S[7] || (S[7] = (P) => x(!0))
              }, {
                default: h(() => [...S[33] || (S[33] = [
                  $(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : e.preview && e.preview.commits_behind > 0 ? (a(), i(q, { key: 2 }, [
                m.value && !w.value ? (a(), R(Te, {
                  key: 0,
                  variant: "primary",
                  onClick: S[8] || (S[8] = (P) => n("openConflictResolution"))
                }, {
                  default: h(() => [
                    $(" Resolve Conflicts (" + f(g.value) + "/" + f(v.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (a(), R(Te, {
                  key: 1,
                  variant: "primary",
                  loading: e.pulling,
                  disabled: !p.value,
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
}), e8 = /* @__PURE__ */ Se(ZS, [["__scopeId", "data-v-1d633bba"]]), t8 = { class: "modal-header" }, s8 = { class: "modal-title" }, o8 = { class: "modal-body" }, n8 = {
  key: 0,
  class: "error-box"
}, a8 = {
  key: 1,
  class: "loading-state"
}, l8 = {
  key: 2,
  class: "warning-box"
}, i8 = {
  key: 1,
  class: "commits-section"
}, r8 = { class: "commit-list" }, c8 = { class: "commit-hash" }, u8 = { class: "commit-message" }, d8 = { class: "commit-date" }, f8 = { class: "force-option" }, m8 = { class: "checkbox-option" }, v8 = { class: "commit-summary" }, p8 = { key: 0 }, g8 = { key: 1 }, h8 = {
  key: 0,
  class: "info-box"
}, y8 = {
  key: 2,
  class: "commits-section"
}, w8 = { class: "commit-list" }, _8 = { class: "commit-hash" }, k8 = { class: "commit-message" }, b8 = { class: "commit-date" }, $8 = {
  key: 3,
  class: "up-to-date"
}, C8 = { class: "modal-actions" }, x8 = /* @__PURE__ */ be({
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
    const o = e, n = t, l = k(!1), r = k(!1), u = N(() => {
      var w;
      return ((w = o.preview) == null ? void 0 : w.warnings) || {
        models_without_sources: [],
        nodes_without_provenance: []
      };
    }), c = N(
      () => u.value.models_without_sources.length
    ), d = N(
      () => u.value.nodes_without_provenance.length
    ), m = N(
      () => c.value + d.value
    ), v = N(() => m.value > 0);
    function g(w) {
      n("push", { force: w });
    }
    return (w, p) => {
      var _, x, C, S;
      return a(), i(q, null, [
        (a(), R(Rt, { to: "body" }, [
          e.show ? (a(), i("div", {
            key: 0,
            class: "modal-overlay",
            onClick: p[9] || (p[9] = (T) => w.$emit("close"))
          }, [
            s("div", {
              class: "modal-content",
              onClick: p[8] || (p[8] = mt(() => {
              }, ["stop"]))
            }, [
              s("div", t8, [
                s("h3", s8, "PUSH TO " + f(e.remoteName.toUpperCase()), 1),
                s("button", {
                  class: "modal-close",
                  onClick: p[0] || (p[0] = (T) => w.$emit("close"))
                }, "✕")
              ]),
              s("div", o8, [
                e.error ? (a(), i("div", n8, [
                  p[13] || (p[13] = s("span", { class: "error-icon" }, "!", -1)),
                  s("div", null, [
                    p[12] || (p[12] = s("strong", null, "Push failed", -1)),
                    s("p", null, f(e.error), 1)
                  ])
                ])) : y("", !0),
                e.loading ? (a(), i("div", a8, [...p[14] || (p[14] = [
                  s("span", { class: "spinner" }, "⟳", -1),
                  $(" Loading preview... ", -1)
                ])])) : (_ = e.preview) != null && _.has_uncommitted_changes ? (a(), i("div", l8, [...p[15] || (p[15] = [
                  s("span", { class: "warning-icon" }, "!", -1),
                  s("div", null, [
                    s("strong", null, "UNCOMMITTED CHANGES"),
                    s("p", null, "Commit your changes before pushing.")
                  ], -1)
                ])])) : (x = e.preview) != null && x.remote_has_new_commits ? (a(), i(q, { key: 3 }, [
                  p[19] || (p[19] = s("div", { class: "warning-box" }, [
                    s("span", { class: "warning-icon" }, "!"),
                    s("div", null, [
                      s("strong", null, "REMOTE HAS NEW COMMITS"),
                      s("p", null, "The remote has commits you don't have locally. You should pull first to avoid overwriting changes.")
                    ])
                  ], -1)),
                  v.value ? (a(), R(sl, {
                    key: 0,
                    warnings: u.value,
                    message: "Missing provenance can prevent another machine, or ComfyGit Cloud, from rebuilding this environment exactly.",
                    onReview: p[1] || (p[1] = (T) => r.value = !0)
                  }, null, 8, ["warnings"])) : y("", !0),
                  e.preview.commits_ahead > 0 ? (a(), i("div", i8, [
                    p[16] || (p[16] = s("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                    s("div", r8, [
                      (a(!0), i(q, null, he(e.preview.commits, (T) => (a(), i("div", {
                        key: T.hash,
                        class: "commit-item"
                      }, [
                        s("span", c8, f(T.short_hash || T.hash.slice(0, 7)), 1),
                        s("span", u8, f(T.message), 1),
                        s("span", d8, f(T.date_relative || T.relative_date), 1)
                      ]))), 128))
                    ])
                  ])) : y("", !0),
                  s("div", f8, [
                    s("label", m8, [
                      Et(s("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": p[2] || (p[2] = (T) => l.value = T)
                      }, null, 512), [
                        [Gn, l.value]
                      ]),
                      p[17] || (p[17] = s("span", null, "Force push (overwrite remote)", -1))
                    ]),
                    p[18] || (p[18] = s("p", { class: "option-hint" }, "Uses --force-with-lease for safety", -1))
                  ])
                ], 64)) : e.preview ? (a(), i(q, { key: 4 }, [
                  s("div", v8, [
                    p[20] || (p[20] = s("span", { class: "icon" }, "📤", -1)),
                    e.preview.is_first_push ? (a(), i("span", p8, " Creating " + f(e.preview.remote) + "/" + f(e.preview.branch) + " with " + f(e.preview.commits_ahead) + " commit" + f(e.preview.commits_ahead !== 1 ? "s" : ""), 1)) : (a(), i("span", g8, " Pushing " + f(e.preview.commits_ahead) + " commit" + f(e.preview.commits_ahead !== 1 ? "s" : "") + " to " + f(e.preview.remote) + "/" + f(e.preview.branch), 1))
                  ]),
                  e.preview.is_first_push ? (a(), i("div", h8, [...p[21] || (p[21] = [
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
                  v.value ? (a(), R(sl, {
                    key: 1,
                    warnings: u.value,
                    message: "Missing provenance can prevent another machine, or ComfyGit Cloud, from rebuilding this environment exactly.",
                    onReview: p[3] || (p[3] = (T) => r.value = !0)
                  }, null, 8, ["warnings"])) : y("", !0),
                  e.preview.commits_ahead > 0 ? (a(), i("div", y8, [
                    p[22] || (p[22] = s("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                    s("div", w8, [
                      (a(!0), i(q, null, he(e.preview.commits, (T) => (a(), i("div", {
                        key: T.hash,
                        class: "commit-item"
                      }, [
                        s("span", _8, f(T.short_hash || T.hash.slice(0, 7)), 1),
                        s("span", k8, f(T.message), 1),
                        s("span", b8, f(T.date_relative || T.relative_date), 1)
                      ]))), 128))
                    ])
                  ])) : (a(), i("div", $8, [
                    p[23] || (p[23] = s("span", { class: "icon" }, "✓", -1)),
                    $(" Nothing to push - already up to date with " + f(e.preview.remote) + "/" + f(e.preview.branch), 1)
                  ]))
                ], 64)) : y("", !0)
              ]),
              s("div", C8, [
                b(Te, {
                  variant: "secondary",
                  onClick: p[4] || (p[4] = (T) => w.$emit("close"))
                }, {
                  default: h(() => [...p[24] || (p[24] = [
                    $(" Cancel ", -1)
                  ])]),
                  _: 1
                }),
                (C = e.preview) != null && C.remote_has_new_commits ? (a(), i(q, { key: 0 }, [
                  b(Te, {
                    variant: "secondary",
                    onClick: p[5] || (p[5] = (T) => w.$emit("pull-first"))
                  }, {
                    default: h(() => [...p[25] || (p[25] = [
                      $(" Pull First ", -1)
                    ])]),
                    _: 1
                  }),
                  b(Te, {
                    variant: "destructive",
                    disabled: !l.value,
                    loading: e.pushing,
                    onClick: p[6] || (p[6] = (T) => g(!0))
                  }, {
                    default: h(() => [
                      $(f(v.value ? "Force Push Anyway" : "Force Push"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled", "loading"])
                ], 64)) : e.preview && e.preview.commits_ahead > 0 && !e.preview.has_uncommitted_changes ? (a(), R(Te, {
                  key: 1,
                  variant: "primary",
                  loading: e.pushing,
                  onClick: p[7] || (p[7] = (T) => g(!1))
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
        r.value && ((S = e.preview) != null && S.warnings) ? (a(), R(ic, {
          key: 0,
          warnings: e.preview.warnings,
          onClose: p[10] || (p[10] = (T) => r.value = !1),
          onRevalidate: p[11] || (p[11] = (T) => w.$emit("revalidate"))
        }, null, 8, ["warnings"])) : y("", !0)
      ], 64);
    };
  }
}), S8 = /* @__PURE__ */ Se(x8, [["__scopeId", "data-v-7748bf33"]]), I8 = { class: "resolution-choice-group" }, E8 = ["disabled"], T8 = ["disabled"], M8 = /* @__PURE__ */ be({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (t, o) => (a(), i("div", I8, [
      s("button", {
        class: Fe(["choice-btn", "mine", { selected: e.modelValue === "take_base" }]),
        onClick: o[0] || (o[0] = (n) => t.$emit("update:modelValue", "take_base")),
        disabled: e.disabled
      }, [...o[2] || (o[2] = [
        s("span", { class: "choice-icon" }, "◀", -1),
        s("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, E8),
      s("button", {
        class: Fe(["choice-btn", "theirs", { selected: e.modelValue === "take_target" }]),
        onClick: o[1] || (o[1] = (n) => t.$emit("update:modelValue", "take_target")),
        disabled: e.disabled
      }, [...o[3] || (o[3] = [
        s("span", { class: "choice-label" }, "Keep Theirs", -1),
        s("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, T8)
    ]));
  }
}), P8 = /* @__PURE__ */ Se(M8, [["__scopeId", "data-v-985715ed"]]), R8 = { class: "conflict-header" }, N8 = { class: "conflict-info" }, D8 = { class: "workflow-name" }, L8 = { class: "conflict-description" }, O8 = {
  key: 0,
  class: "resolved-badge"
}, A8 = { class: "resolved-text" }, U8 = { class: "conflict-hashes" }, z8 = { class: "hash-item" }, F8 = { class: "hash-item" }, V8 = { class: "conflict-actions" }, B8 = /* @__PURE__ */ be({
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
    const r = N(() => l.value !== null), u = N(() => o.conflict.conflict_type === "both_modified" ? "Both you and remote modified this workflow" : "Conflicting changes detected"), c = N(() => {
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
      return a(), i("div", {
        class: Fe(["conflict-item", { resolved: r.value }])
      }, [
        s("div", R8, [
          m[2] || (m[2] = s("span", { class: "conflict-icon" }, "⚠", -1)),
          s("div", N8, [
            s("code", D8, f(e.conflict.name) + ".json", 1),
            s("div", L8, f(u.value), 1)
          ]),
          r.value ? (a(), i("div", O8, [
            m[1] || (m[1] = s("span", { class: "resolved-icon" }, "✓", -1)),
            s("span", A8, f(c.value), 1)
          ])) : y("", !0)
        ]),
        s("div", U8, [
          s("span", z8, [
            m[3] || (m[3] = $("Your: ", -1)),
            s("code", null, f(((v = e.conflict.base_hash) == null ? void 0 : v.slice(0, 8)) || "n/a"), 1)
          ]),
          s("span", F8, [
            m[4] || (m[4] = $("Theirs: ", -1)),
            s("code", null, f(((g = e.conflict.target_hash) == null ? void 0 : g.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        s("div", V8, [
          b(P8, {
            modelValue: l.value,
            "onUpdate:modelValue": m[0] || (m[0] = (w) => l.value = w),
            disabled: e.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), W8 = /* @__PURE__ */ Se(B8, [["__scopeId", "data-v-506d3bbf"]]), G8 = { class: "resolution-content" }, j8 = {
  key: 0,
  class: "error-box"
}, H8 = { class: "resolution-header" }, q8 = { class: "header-stats" }, K8 = { class: "stat" }, J8 = { class: "stat-value" }, Q8 = { class: "stat resolved" }, Y8 = { class: "stat-value" }, X8 = {
  key: 0,
  class: "stat pending"
}, Z8 = { class: "stat-value" }, e4 = { class: "conflicts-list" }, t4 = {
  key: 1,
  class: "all-resolved-message"
}, s4 = /* @__PURE__ */ be({
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
    const o = e, n = t, l = N(() => o.resolutions.size), r = N(() => o.workflowConflicts.length - l.value), u = N(() => l.value === o.workflowConflicts.length), c = N(
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
    return (w, p) => (a(), R(Tt, {
      title: `Resolve Workflow Conflicts: ${e.operationType === "pull" ? "Pull" : "Merge"}`,
      size: "lg",
      "fixed-height": !0,
      onClose: v
    }, {
      body: h(() => [
        s("div", G8, [
          e.error ? (a(), i("div", j8, [
            p[1] || (p[1] = s("span", { class: "error-icon" }, "✕", -1)),
            s("div", null, [
              p[0] || (p[0] = s("strong", null, "Validation Failed", -1)),
              s("p", null, f(e.error), 1)
            ])
          ])) : y("", !0),
          s("div", H8, [
            s("div", q8, [
              s("div", K8, [
                s("span", J8, f(e.workflowConflicts.length), 1),
                p[2] || (p[2] = s("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              s("div", Q8, [
                s("span", Y8, f(l.value), 1),
                p[3] || (p[3] = s("span", { class: "stat-label" }, "resolved", -1))
              ]),
              r.value > 0 ? (a(), i("div", X8, [
                s("span", Z8, f(r.value), 1),
                p[4] || (p[4] = s("span", { class: "stat-label" }, "pending", -1))
              ])) : y("", !0)
            ]),
            p[5] || (p[5] = s("p", { class: "header-hint" }, " Choose which version to keep for each conflicting workflow. ", -1))
          ]),
          s("div", e4, [
            (a(!0), i(q, null, he(e.workflowConflicts, (_) => (a(), R(W8, {
              key: _.name,
              conflict: _,
              resolution: d(_.name),
              onResolve: (x) => m(_.name, x)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          u.value ? (a(), i("div", t4, [
            p[6] || (p[6] = s("span", { class: "resolved-icon" }, "✓", -1)),
            s("span", null, 'All conflicts resolved! Click "' + f(c.value) + '" to continue.', 1)
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        b(Oe, {
          variant: "secondary",
          onClick: v
        }, {
          default: h(() => [...p[7] || (p[7] = [
            $(" Cancel ", -1)
          ])]),
          _: 1
        }),
        p[8] || (p[8] = s("div", { class: "footer-spacer" }, null, -1)),
        b(Oe, {
          variant: "primary",
          disabled: !u.value || e.validating,
          loading: e.validating,
          onClick: g
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
}), o4 = /* @__PURE__ */ Se(s4, [["__scopeId", "data-v-c58d150d"]]), n4 = { class: "node-conflict-item" }, a4 = { class: "node-header" }, l4 = { class: "node-name" }, i4 = { class: "node-id" }, r4 = { class: "version-comparison" }, c4 = { class: "version yours" }, u4 = { class: "version theirs" }, d4 = { class: "chosen-version" }, f4 = { class: "chosen" }, m4 = { class: "chosen-reason" }, v4 = { class: "affected-workflows" }, p4 = { class: "wf-source" }, g4 = { class: "wf-version" }, h4 = /* @__PURE__ */ be({
  __name: "NodeConflictItem",
  props: {
    conflict: {}
  },
  setup(e) {
    return (t, o) => (a(), i("div", n4, [
      s("div", a4, [
        s("code", l4, f(e.conflict.node_name), 1),
        s("span", i4, "(" + f(e.conflict.node_id) + ")", 1)
      ]),
      s("div", r4, [
        s("div", c4, [
          o[0] || (o[0] = s("span", { class: "label" }, "Your version:", -1)),
          s("code", null, f(e.conflict.base_version), 1)
        ]),
        o[2] || (o[2] = s("span", { class: "arrow" }, "→", -1)),
        s("div", u4, [
          o[1] || (o[1] = s("span", { class: "label" }, "Their version:", -1)),
          s("code", null, f(e.conflict.target_version), 1)
        ])
      ]),
      s("div", d4, [
        o[3] || (o[3] = s("span", { class: "label" }, "Will install:", -1)),
        s("code", f4, f(e.conflict.chosen_version), 1),
        s("span", m4, f(e.conflict.chosen_reason), 1)
      ]),
      s("details", v4, [
        s("summary", null, " Affected workflows (" + f(e.conflict.affected_workflows.length) + ") ", 1),
        s("ul", null, [
          (a(!0), i(q, null, he(e.conflict.affected_workflows, (n) => (a(), i("li", {
            key: n.name
          }, [
            s("code", null, f(n.name), 1),
            s("span", p4, "(" + f(n.source === "base" ? "yours" : "theirs") + ")", 1),
            s("span", g4, "needs v" + f(n.required_version), 1)
          ]))), 128))
        ])
      ])
    ]));
  }
}), y4 = /* @__PURE__ */ Se(h4, [["__scopeId", "data-v-8b626725"]]), w4 = { class: "validation-content" }, _4 = {
  key: 0,
  class: "compatible-message"
}, k4 = { class: "conflicts-list" }, b4 = {
  key: 2,
  class: "warnings-section"
}, $4 = /* @__PURE__ */ be({
  __name: "ValidationResultsModal",
  props: {
    validation: {},
    operationType: {},
    executing: { type: Boolean }
  },
  emits: ["proceed", "goBack", "cancel"],
  setup(e, { emit: t }) {
    const o = e, n = t, l = N(() => o.validation.is_compatible ? o.operationType === "pull" ? "Pull" : "Merge" : o.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (r, u) => (a(), R(Tt, {
      title: "Compatibility Check",
      size: "lg",
      onClose: u[3] || (u[3] = (c) => n("cancel"))
    }, {
      body: h(() => [
        s("div", w4, [
          e.validation.is_compatible && e.validation.node_conflicts.length === 0 ? (a(), i("div", _4, [
            u[5] || (u[5] = s("span", { class: "icon" }, "✓", -1)),
            s("div", null, [
              u[4] || (u[4] = s("strong", null, "All clear!", -1)),
              s("p", null, "Your workflow choices are compatible. Ready to " + f(e.operationType) + ".", 1)
            ])
          ])) : e.validation.node_conflicts.length > 0 ? (a(), i(q, { key: 1 }, [
            u[6] || (u[6] = s("div", { class: "warning-header" }, [
              s("span", { class: "icon" }, "⚠"),
              s("div", null, [
                s("strong", null, "Node Version Differences"),
                s("p", null, " Your workflow choices require different versions of some nodes. The versions shown below will be installed. ")
              ])
            ], -1)),
            s("div", k4, [
              (a(!0), i(q, null, he(e.validation.node_conflicts, (c) => (a(), R(y4, {
                key: c.node_id,
                conflict: c
              }, null, 8, ["conflict"]))), 128))
            ]),
            u[7] || (u[7] = s("div", { class: "info-box" }, [
              s("strong", null, "What happens if you proceed?"),
              s("p", null, " The highlighted versions will be installed. Workflows built with different versions may need minor adjustments. ")
            ], -1))
          ], 64)) : y("", !0),
          e.validation.warnings.length > 0 ? (a(), i("div", b4, [
            u[8] || (u[8] = s("h4", null, "Warnings", -1)),
            s("ul", null, [
              (a(!0), i(q, null, he(e.validation.warnings, (c, d) => (a(), i("li", { key: d }, f(c), 1))), 128))
            ])
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        b(Oe, {
          variant: "secondary",
          onClick: u[0] || (u[0] = (c) => n("cancel"))
        }, {
          default: h(() => [...u[9] || (u[9] = [
            $(" Cancel ", -1)
          ])]),
          _: 1
        }),
        u[11] || (u[11] = s("div", { class: "footer-spacer" }, null, -1)),
        b(Oe, {
          variant: "secondary",
          onClick: u[1] || (u[1] = (c) => n("goBack"))
        }, {
          default: h(() => [...u[10] || (u[10] = [
            $(" ← Change Choices ", -1)
          ])]),
          _: 1
        }),
        b(Oe, {
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
}), C4 = /* @__PURE__ */ Se($4, [["__scopeId", "data-v-fefd26ed"]]), x4 = {
  key: 0,
  class: "embedded-toolbar"
}, S4 = { class: "embedded-toolbar-search" }, I4 = { key: 0 }, E4 = /* @__PURE__ */ be({
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
      getPushPreview: g,
      pushToRemote: w,
      validateMerge: p
    } = pt(), _ = k([]), x = k(null), C = k({}), S = k(!1), T = k(null), M = k(""), P = k(!1), A = k(null), B = k(!1), j = k("add"), E = k({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), V = N(() => {
      if (!M.value.trim()) return _.value;
      const Ue = M.value.toLowerCase();
      return _.value.filter(
        (L) => L.name.toLowerCase().includes(Ue) || L.fetch_url.toLowerCase().includes(Ue) || L.push_url.toLowerCase().includes(Ue)
      );
    });
    async function ae() {
      S.value = !0, T.value = null;
      try {
        const Ue = await n();
        _.value = Ue.remotes, x.value = Ue.current_branch_tracking || null, await Promise.all(
          Ue.remotes.map(async (L) => {
            const oe = await d(L.name);
            oe && (C.value[L.name] = oe);
          })
        );
      } catch (Ue) {
        T.value = Ue instanceof Error ? Ue.message : "Failed to load remotes";
      } finally {
        S.value = !1;
      }
    }
    function fe() {
      j.value = "add", E.value = { name: "", fetchUrl: "", pushUrl: "" }, B.value = !0;
    }
    function ue(Ue) {
      const L = _.value.find((oe) => oe.name === Ue);
      L && (j.value = "edit", E.value = {
        name: L.name,
        fetchUrl: L.fetch_url,
        pushUrl: L.push_url
      }, B.value = !0);
    }
    async function we(Ue) {
      try {
        j.value === "add" ? await l(Ue.name, Ue.fetchUrl) : await u(Ue.name, Ue.fetchUrl, Ue.pushUrl || void 0), B.value = !1, await ae();
      } catch (L) {
        T.value = L instanceof Error ? L.message : "Operation failed";
      }
    }
    function se() {
      B.value = !1, E.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function F(Ue) {
      A.value = Ue;
      try {
        await c(Ue);
        const L = await d(Ue);
        L && (C.value[Ue] = L), o("toast", `✓ Fetched from ${Ue}`, "success");
      } catch (L) {
        o("toast", L instanceof Error ? L.message : "Fetch failed", "error");
      } finally {
        A.value = null;
      }
    }
    async function Q(Ue) {
      if (confirm(`Remove remote "${Ue}"?`))
        try {
          await r(Ue), await ae();
        } catch (L) {
          T.value = L instanceof Error ? L.message : "Failed to remove remote";
        }
    }
    function Pe() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const te = k("idle"), ge = N(() => te.value === "pull_preview"), O = N(
      () => te.value === "resolving" || te.value === "validating"
    ), me = N(
      () => te.value === "validation_review" || te.value === "executing"
    ), Re = k(!1), Ge = k(null), Ee = k(!1), H = k(null), Z = k(null), K = k(!1), X = k(null), xe = k(null), ce = k(/* @__PURE__ */ new Map()), le = k(null), I = k(null), z = N(() => X.value && fc(X.value) ? X.value : null);
    async function ie(Ue) {
      Z.value = Ue, te.value = "pull_preview", K.value = !0, X.value = null, xe.value = null;
      try {
        X.value = await m(Ue);
      } catch (L) {
        xe.value = L instanceof Error ? L.message : "Failed to load pull preview";
      } finally {
        K.value = !1;
      }
    }
    function Ce() {
      te.value = "idle", X.value = null, xe.value = null, Z.value = null;
    }
    async function _e(Ue) {
      if (!Z.value) return;
      te.value = "executing", xe.value = null;
      const L = Z.value;
      try {
        const oe = await v(L, Ue);
        if (oe.rolled_back) {
          xe.value = `Pull failed and was rolled back: ${oe.error || "Unknown error"}`, te.value = "pull_preview";
          return;
        }
        ve(), te.value = "idle", o("toast", `✓ Pulled from ${L}`, "success"), await ae();
      } catch (oe) {
        xe.value = oe instanceof Error ? oe.message : "Pull failed", te.value = "pull_preview";
      }
    }
    function $e() {
      z.value && (te.value = "resolving", I.value = null);
    }
    function Ae(Ue, L) {
      ce.value.set(Ue, { name: Ue, resolution: L });
    }
    function ze() {
      te.value = "pull_preview";
    }
    async function Ne() {
      te.value = "validating", I.value = null;
      try {
        const Ue = Array.from(ce.value.values());
        le.value = await p(Z.value, Ue), te.value = "validation_review";
      } catch (Ue) {
        I.value = Ue instanceof Error ? Ue.message : "Validation failed", te.value = "resolving";
      }
    }
    async function Ie() {
      te.value = "executing";
      const Ue = Z.value;
      try {
        const L = Array.from(ce.value.values()), oe = await v(Ue, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: L
        });
        if (oe.rolled_back) {
          xe.value = `Pull failed and was rolled back: ${oe.error || "Unknown error"}`, te.value = "pull_preview";
          return;
        }
        ve(), te.value = "idle", o("toast", `✓ Pulled from ${Ue}`, "success"), await ae();
      } catch (L) {
        xe.value = L instanceof Error ? L.message : "Pull failed", te.value = "validation_review";
      }
    }
    function Ke() {
      te.value = "resolving";
    }
    function Ve() {
      ve(), te.value = "idle";
    }
    function ve() {
      ce.value.clear(), le.value = null, I.value = null, xe.value = null, X.value = null, Z.value = null;
    }
    async function Y(Ue) {
      Z.value = Ue, Re.value = !0, K.value = !0, Ge.value = null, H.value = null;
      try {
        Ge.value = await g(Ue);
      } catch (L) {
        H.value = L instanceof Error ? L.message : "Failed to load push preview";
      } finally {
        K.value = !1;
      }
    }
    async function He() {
      if (Z.value) {
        K.value = !0, H.value = null;
        try {
          Ge.value = await g(Z.value);
        } catch (Ue) {
          H.value = Ue instanceof Error ? Ue.message : "Failed to refresh push preview";
        } finally {
          K.value = !1;
        }
      }
    }
    function ke() {
      Re.value = !1, Ge.value = null, H.value = null, Z.value = null;
    }
    async function Ye(Ue) {
      var oe;
      if (!Z.value) return;
      Ee.value = !0;
      const L = Z.value;
      H.value = null;
      try {
        await w(L, Ue), ke(), o("toast", `✓ Pushed to ${L}`, "success"), await ae();
      } catch (pe) {
        const Je = pe instanceof Error ? pe.message : "Push failed";
        H.value = Je, pe instanceof Qr && pe.status === 409 && ((oe = pe.data) != null && oe.needs_force) && Ge.value ? Ge.value = {
          ...Ge.value,
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
      const Ue = Z.value;
      ke(), Ue && ie(Ue);
    }
    return rt(ae), (Ue, L) => (a(), i(q, null, [
      b(Ut, null, Yt({
        content: h(() => [
          S.value ? (a(), R(xs, {
            key: 0,
            message: "Loading remotes..."
          })) : T.value ? (a(), R(Ss, {
            key: 1,
            message: T.value,
            retry: !0,
            onRetry: ae
          }, null, 8, ["message"])) : (a(), i(q, { key: 2 }, [
            e.embedded && !B.value ? (a(), i("div", x4, [
              s("div", S4, [
                b(io, {
                  modelValue: M.value,
                  "onUpdate:modelValue": L[2] || (L[2] = (oe) => M.value = oe),
                  placeholder: "🔍 Search remotes..."
                }, null, 8, ["modelValue"])
              ]),
              b(Te, {
                variant: "primary",
                size: "sm",
                onClick: fe
              }, {
                default: h(() => [...L[5] || (L[5] = [
                  $(" + Add Remote ", -1)
                ])]),
                _: 1
              })
            ])) : y("", !0),
            B.value ? (a(), R(fS, {
              key: 1,
              mode: j.value,
              "remote-name": E.value.name,
              "fetch-url": E.value.fetchUrl,
              "push-url": E.value.pushUrl,
              onSubmit: we,
              onCancel: se
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : y("", !0),
            _.value.length && !B.value ? (a(), R(ia, {
              key: 2,
              variant: "compact"
            }, {
              default: h(() => [
                $(" Total: " + f(_.value.length) + " remote" + f(_.value.length !== 1 ? "s" : "") + " ", 1),
                x.value ? (a(), i("span", I4, " • Tracking: " + f(x.value.remote) + "/" + f(x.value.branch), 1)) : y("", !0)
              ]),
              _: 1
            })) : y("", !0),
            V.value.length && !B.value ? (a(), R(St, {
              key: 3,
              title: "REMOTES",
              count: V.value.length
            }, {
              default: h(() => [
                (a(!0), i(q, null, he(V.value, (oe) => (a(), R(Z5, {
                  key: oe.name,
                  remote: oe,
                  "sync-status": C.value[oe.name],
                  "fetching-remote": A.value,
                  onFetch: F,
                  onEdit: ue,
                  onRemove: Q,
                  onPull: ie,
                  onPush: Y
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            !V.value.length && !B.value ? (a(), R(rs, {
              key: 4,
              icon: "🌐",
              message: M.value ? `No remotes match '${M.value}'` : "No remotes configured."
            }, {
              actions: h(() => [
                b(Te, {
                  variant: "primary",
                  onClick: fe
                }, {
                  default: h(() => [...L[6] || (L[6] = [
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
              onInfoClick: L[0] || (L[0] = (oe) => P.value = !0)
            }, {
              actions: h(() => [
                B.value ? y("", !0) : (a(), R(Te, {
                  key: 0,
                  variant: "primary",
                  size: "sm",
                  onClick: fe
                }, {
                  default: h(() => [...L[4] || (L[4] = [
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
            B.value ? y("", !0) : (a(), R(io, {
              key: 0,
              modelValue: M.value,
              "onUpdate:modelValue": L[1] || (L[1] = (oe) => M.value = oe),
              placeholder: "🔍 Search remotes..."
            }, null, 8, ["modelValue"]))
          ]),
          key: "1"
        }
      ]), 1024),
      b(cs, {
        show: P.value,
        title: "About Git Remotes",
        onClose: L[3] || (L[3] = (oe) => P.value = !1)
      }, {
        content: h(() => [...L[7] || (L[7] = [
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
            onClick: Pe
          }, {
            default: h(() => [...L[8] || (L[8] = [
              $(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      b(e8, {
        show: ge.value,
        "remote-name": Z.value || "",
        preview: X.value,
        loading: K.value,
        pulling: te.value === "executing",
        error: xe.value,
        "conflict-resolutions": ce.value,
        onClose: Ce,
        onPull: _e,
        onOpenConflictResolution: $e
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      b(S8, {
        show: Re.value,
        "remote-name": Z.value || "",
        preview: Ge.value,
        loading: K.value,
        pushing: Ee.value,
        error: H.value,
        onClose: ke,
        onPush: Ye,
        onPullFirst: ot,
        onRevalidate: He
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing", "error"]),
      O.value && z.value ? (a(), R(o4, {
        key: 0,
        "workflow-conflicts": z.value.workflow_conflicts,
        resolutions: ce.value,
        "operation-type": "pull",
        validating: te.value === "validating",
        error: I.value,
        onClose: ze,
        onResolve: Ae,
        onApply: Ne
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : y("", !0),
      me.value && le.value ? (a(), R(C4, {
        key: 1,
        validation: le.value,
        "operation-type": "pull",
        executing: te.value === "executing",
        onProceed: Ie,
        onGoBack: Ke,
        onCancel: Ve
      }, null, 8, ["validation", "executing"])) : y("", !0)
    ], 64));
  }
}), T4 = /* @__PURE__ */ Se(E4, [["__scopeId", "data-v-a189530f"]]), M4 = /* @__PURE__ */ be({
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
    }), (u, c) => (a(), R(Ut, null, {
      header: h(() => [
        b(zt, { title: "VERSION CONTROL" })
      ]),
      search: h(() => [
        b(Tl, {
          modelValue: r.value,
          "onUpdate:modelValue": c[0] || (c[0] = (d) => r.value = d),
          tabs: l
        }, null, 8, ["modelValue"])
      ]),
      content: h(() => [
        r.value === "history" ? (a(), R(m5, {
          key: 0,
          embedded: "",
          commits: e.commits,
          "current-ref": e.currentRef,
          onSelect: c[1] || (c[1] = (d) => n("select", d)),
          onCheckout: c[2] || (c[2] = (d) => n("checkout", d))
        }, null, 8, ["commits", "current-ref"])) : r.value === "branches" ? (a(), R(O5, {
          key: 1,
          embedded: "",
          branches: e.branches,
          current: e.current,
          onSwitch: c[3] || (c[3] = (d) => n("switch", d)),
          onCreate: c[4] || (c[4] = (d) => n("create", d)),
          onDelete: c[5] || (c[5] = (d) => n("delete", d))
        }, null, 8, ["branches", "current"])) : (a(), R(T4, {
          key: 2,
          embedded: "",
          onToast: c[6] || (c[6] = (d, m) => n("toast", d, m))
        }))
      ]),
      _: 1
    }));
  }
});
async function mc(e) {
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
const P4 = { class: "text-viewer-wrapper" }, R4 = ["disabled", "title"], N4 = { class: "text-content" }, D4 = /* @__PURE__ */ be({
  __name: "TextViewer",
  props: {
    content: {}
  },
  setup(e) {
    const t = e, o = k(null), n = k("idle");
    async function l() {
      if (t.content)
        try {
          await mc(t.content), n.value = "copied", setTimeout(() => {
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
    return (c, d) => (a(), i("div", P4, [
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
        }, f(n.value === "copied" ? "Copied!" : "Copy"), 9, R4),
        s("pre", N4, f(e.content), 1)
      ], 544)
    ]));
  }
}), L4 = /* @__PURE__ */ Se(D4, [["__scopeId", "data-v-85a537ba"]]), O4 = {
  key: 1,
  class: "manifest-viewer-shell"
}, A4 = { class: "manifest-path" }, U4 = /* @__PURE__ */ be({
  __name: "ManifestSection",
  props: {
    embedded: { type: Boolean }
  },
  setup(e) {
    const { getEnvironmentManifest: t } = pt(), o = k(!1), n = k(null), l = k(!1), r = k({
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
    return rt(u), (c, d) => (a(), i(q, null, [
      b(Ut, null, Yt({
        content: h(() => [
          o.value ? (a(), R(xs, {
            key: 0,
            message: "Loading manifest..."
          })) : n.value ? (a(), R(Ss, {
            key: 1,
            message: n.value,
            retry: !0,
            onRetry: u
          }, null, 8, ["message"])) : (a(), i(q, { key: 2 }, [
            !r.value.exists || !r.value.content ? (a(), R(rs, {
              key: 0,
              icon: "📄",
              message: "No manifest content available"
            })) : (a(), i("div", O4, [
              b(L4, {
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
      b(cs, {
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
          s("div", A4, [
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
}), z4 = /* @__PURE__ */ Se(U4, [["__scopeId", "data-v-814a8fdd"]]), F4 = { class: "log-viewer-wrapper" }, V4 = ["disabled", "title"], B4 = /* @__PURE__ */ be({
  __name: "LogViewer",
  props: {
    logs: {},
    rawFormat: { type: Boolean }
  },
  setup(e) {
    const t = e, o = k(null), n = k("idle"), l = N(() => t.logs.map((m) => ({
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
        await mc(m), n.value = "copied", setTimeout(() => {
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
    return (m, v) => (a(), i("div", F4, [
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
        }, f(n.value === "copied" ? "Copied!" : "Copy"), 9, V4),
        (a(!0), i(q, null, he(l.value, (g, w) => (a(), i("div", {
          key: w,
          class: Fe(`log-line log-level-${g.level.toLowerCase()}`)
        }, f(g.text), 3))), 128))
      ], 544)
    ]));
  }
}), vc = /* @__PURE__ */ Se(B4, [["__scopeId", "data-v-5aaf1b88"]]), W4 = /* @__PURE__ */ be({
  __name: "DebugEnvSection",
  props: {
    embedded: { type: Boolean }
  },
  setup(e) {
    const { getEnvironmentLogs: t, getStatus: o, getEnvironmentLogPath: n, openFile: l } = pt(), r = k([]), u = k(!1), c = k(null), d = k(!1), m = k("production"), v = k(null), g = k(!1);
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
    async function p() {
      try {
        const x = await n();
        x.exists && (v.value = x.path);
      } catch {
      }
    }
    async function _() {
      if (v.value) {
        g.value = !0;
        try {
          await l(v.value);
        } catch (x) {
          console.error("Failed to open log file:", x);
        } finally {
          g.value = !1;
        }
      }
    }
    return rt(() => {
      w(), p();
    }), (x, C) => (a(), i(q, null, [
      b(Ut, null, Yt({
        content: h(() => [
          u.value ? (a(), R(xs, {
            key: 0,
            message: "Loading environment logs..."
          })) : c.value ? (a(), R(Ss, {
            key: 1,
            message: c.value,
            retry: !0,
            onRetry: w
          }, null, 8, ["message"])) : (a(), i(q, { key: 2 }, [
            r.value.length === 0 ? (a(), R(rs, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (a(), R(vc, {
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
                  disabled: !v.value || g.value,
                  title: "Open log file in default editor"
                }, {
                  default: h(() => [
                    $(f(g.value ? "Opening..." : "Open Log File"), 1)
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
      b(cs, {
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
}), $i = /* @__PURE__ */ be({
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
    } = pt(), u = e, c = k(u.initialTab ?? "workspace"), d = k([]), m = k(!1), v = k(null), g = k(!1), w = k(null), p = k(null), _ = k(!1), x = N(() => c.value === "workspace" ? w.value : p.value);
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
        M.exists && (w.value = M.path), P.exists && (p.value = P.path);
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
    }), (M, P) => (a(), i(q, null, [
      b(Ut, null, Yt({
        content: h(() => [
          m.value ? (a(), R(xs, {
            key: 0,
            message: `Loading ${c.value} logs...`
          }, null, 8, ["message"])) : v.value ? (a(), R(Ss, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: C
          }, null, 8, ["message"])) : (a(), i(q, { key: 2 }, [
            d.value.length === 0 ? (a(), R(rs, {
              key: 0,
              icon: "📝",
              message: `No ${c.value} logs available`
            }, null, 8, ["message"])) : (a(), R(vc, {
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
              onInfoClick: P[0] || (P[0] = (A) => g.value = !0)
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
            b(Tl, {
              modelValue: c.value,
              "onUpdate:modelValue": P[1] || (P[1] = (A) => c.value = A),
              tabs: [
                { id: "workspace", label: "Workspace" },
                { id: "orchestrator", label: "Orchestrator" }
              ]
            }, null, 8, ["modelValue"])
          ]),
          key: "1"
        }
      ]), 1024),
      b(cs, {
        show: g.value,
        title: "About Logs",
        onClose: P[3] || (P[3] = (A) => g.value = !1)
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
            onClick: P[2] || (P[2] = (A) => g.value = !1)
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
}), G4 = /* @__PURE__ */ be({
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
    ), r = k(!1), u = N(() => n.value === "manifest" ? "MANIFEST" : "LOGGING"), c = N(() => n.value === "manifest" ? "About Manifest" : "About Logging");
    return kt(() => t.initialTab, (d) => {
      d && (n.value = d, d !== "manifest" && (l.value = d));
    }), kt(l, (d) => {
      n.value !== "manifest" && (n.value = d);
    }), (d, m) => (a(), i(q, null, [
      b(Ut, null, Yt({
        header: h(() => [
          b(zt, {
            title: u.value,
            "show-info": !0,
            onInfoClick: m[0] || (m[0] = (v) => r.value = !0)
          }, null, 8, ["title"])
        ]),
        content: h(() => [
          n.value === "manifest" ? (a(), R(z4, {
            key: 0,
            embedded: ""
          })) : l.value === "env" ? (a(), R(W4, {
            key: 1,
            embedded: ""
          })) : l.value === "workspace" ? (a(), R($i, {
            key: 2,
            embedded: "",
            "initial-tab": "workspace"
          })) : (a(), R($i, {
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
            b(Tl, {
              modelValue: l.value,
              "onUpdate:modelValue": m[1] || (m[1] = (v) => l.value = v),
              tabs: o
            }, null, 8, ["modelValue"])
          ]),
          key: "0"
        } : void 0
      ]), 1024),
      b(cs, {
        show: r.value,
        title: c.value,
        "max-width": "520px",
        onClose: m[3] || (m[3] = (v) => r.value = !1)
      }, {
        content: h(() => [
          n.value === "manifest" ? (a(), i(q, { key: 0 }, [
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
          ], 64)) : (a(), i(q, { key: 1 }, [
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
}), j4 = { class: "header-info" }, H4 = { class: "commit-hash" }, q4 = {
  key: 0,
  class: "commit-refs"
}, K4 = { class: "commit-message" }, J4 = { class: "commit-date" }, Q4 = {
  key: 0,
  class: "loading"
}, Y4 = {
  key: 1,
  class: "changes-section"
}, X4 = { class: "stats-row" }, Z4 = { class: "stat" }, eI = { class: "stat insertions" }, tI = { class: "stat deletions" }, sI = {
  key: 0,
  class: "change-group"
}, oI = {
  key: 1,
  class: "change-group"
}, nI = {
  key: 0,
  class: "version"
}, aI = {
  key: 2,
  class: "change-group"
}, lI = { class: "change-item" }, iI = /* @__PURE__ */ be({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(e) {
    const t = e, { getCommitDetail: o } = pt(), n = k(null), l = k(!0), r = N(() => {
      if (!n.value) return !1;
      const c = n.value.changes.workflows;
      return c.added.length > 0 || c.modified.length > 0 || c.deleted.length > 0;
    }), u = N(() => {
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
    }), (c, d) => (a(), R(Tt, {
      size: "md",
      "show-close-button": !1,
      onClose: d[3] || (d[3] = (m) => c.$emit("close"))
    }, {
      header: h(() => {
        var m, v, g, w;
        return [
          s("div", j4, [
            d[4] || (d[4] = s("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            s("span", H4, f(((m = n.value) == null ? void 0 : m.short_hash) || e.commit.short_hash || ((v = e.commit.hash) == null ? void 0 : v.slice(0, 7))), 1),
            (w = (g = n.value) == null ? void 0 : g.refs) != null && w.length ? (a(), i("span", q4, [
              (a(!0), i(q, null, he(n.value.refs, (p) => (a(), i("span", {
                key: p,
                class: "ref-badge"
              }, f(p), 1))), 128))
            ])) : y("", !0)
          ]),
          b(Oe, {
            variant: "ghost",
            size: "sm",
            onClick: d[0] || (d[0] = (p) => c.$emit("close"))
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
          s("div", K4, f(((m = n.value) == null ? void 0 : m.message) || e.commit.message), 1),
          s("div", J4, f(((v = n.value) == null ? void 0 : v.date_relative) || e.commit.date_relative || e.commit.relative_date), 1),
          l.value ? (a(), i("div", Q4, "Loading details...")) : n.value ? (a(), i("div", Y4, [
            s("div", X4, [
              s("span", Z4, f(n.value.stats.files_changed) + " files", 1),
              s("span", eI, "+" + f(n.value.stats.insertions), 1),
              s("span", tI, "-" + f(n.value.stats.deletions), 1)
            ]),
            r.value ? (a(), i("div", sI, [
              b(no, { variant: "section" }, {
                default: h(() => [...d[6] || (d[6] = [
                  $("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (a(!0), i(q, null, he(n.value.changes.workflows.added, (g) => (a(), i("div", {
                key: "add-" + g,
                class: "change-item added"
              }, [
                d[7] || (d[7] = s("span", { class: "change-icon" }, "+", -1)),
                s("span", null, f(g), 1)
              ]))), 128)),
              (a(!0), i(q, null, he(n.value.changes.workflows.modified, (g) => (a(), i("div", {
                key: "mod-" + g,
                class: "change-item modified"
              }, [
                d[8] || (d[8] = s("span", { class: "change-icon" }, "~", -1)),
                s("span", null, f(g), 1)
              ]))), 128)),
              (a(!0), i(q, null, he(n.value.changes.workflows.deleted, (g) => (a(), i("div", {
                key: "del-" + g,
                class: "change-item deleted"
              }, [
                d[9] || (d[9] = s("span", { class: "change-icon" }, "-", -1)),
                s("span", null, f(g), 1)
              ]))), 128))
            ])) : y("", !0),
            u.value ? (a(), i("div", oI, [
              b(no, { variant: "section" }, {
                default: h(() => [...d[10] || (d[10] = [
                  $("NODES", -1)
                ])]),
                _: 1
              }),
              (a(!0), i(q, null, he(n.value.changes.nodes.added, (g) => (a(), i("div", {
                key: "add-" + g.name,
                class: "change-item added"
              }, [
                d[11] || (d[11] = s("span", { class: "change-icon" }, "+", -1)),
                s("span", null, f(g.name), 1),
                g.version ? (a(), i("span", nI, "(" + f(g.version) + ")", 1)) : y("", !0)
              ]))), 128)),
              (a(!0), i(q, null, he(n.value.changes.nodes.removed, (g) => (a(), i("div", {
                key: "rem-" + g.name,
                class: "change-item deleted"
              }, [
                d[12] || (d[12] = s("span", { class: "change-icon" }, "-", -1)),
                s("span", null, f(g.name), 1)
              ]))), 128))
            ])) : y("", !0),
            n.value.changes.models.resolved > 0 ? (a(), i("div", aI, [
              b(no, { variant: "section" }, {
                default: h(() => [...d[13] || (d[13] = [
                  $("MODELS", -1)
                ])]),
                _: 1
              }),
              s("div", lI, [
                d[14] || (d[14] = s("span", { class: "change-icon" }, "●", -1)),
                s("span", null, f(n.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : y("", !0)
          ])) : y("", !0)
        ];
      }),
      footer: h(() => [
        b(Oe, {
          variant: "secondary",
          onClick: d[1] || (d[1] = (m) => c.$emit("createBranch", e.commit))
        }, {
          default: h(() => [...d[15] || (d[15] = [
            $(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        b(Oe, {
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
}), rI = /* @__PURE__ */ Se(iI, [["__scopeId", "data-v-d256ff6d"]]), cI = { class: "popover-header" }, uI = { class: "popover-body" }, dI = {
  key: 0,
  class: "changes-summary"
}, fI = {
  key: 0,
  class: "change-item"
}, mI = {
  key: 1,
  class: "change-item"
}, vI = {
  key: 2,
  class: "change-item"
}, pI = {
  key: 3,
  class: "change-item"
}, gI = {
  key: 4,
  class: "change-item"
}, hI = {
  key: 5,
  class: "change-item"
}, yI = {
  key: 1,
  class: "no-changes"
}, wI = {
  key: 2,
  class: "loading"
}, _I = {
  key: 3,
  class: "issues-error"
}, kI = { class: "error-header" }, bI = { class: "error-title" }, $I = { class: "issues-list" }, CI = { class: "workflow-state" }, xI = { class: "message-section" }, SI = { class: "popover-footer" }, II = {
  key: 1,
  class: "commit-popover"
}, EI = { class: "popover-header" }, TI = { class: "popover-body" }, MI = {
  key: 0,
  class: "changes-summary"
}, PI = {
  key: 0,
  class: "change-item"
}, RI = {
  key: 1,
  class: "change-item"
}, NI = {
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
}, UI = {
  key: 2,
  class: "loading"
}, zI = {
  key: 3,
  class: "issues-error"
}, FI = { class: "error-header" }, VI = { class: "error-title" }, BI = { class: "issues-list" }, WI = { class: "workflow-state" }, GI = { class: "message-section" }, jI = { class: "popover-footer" }, HI = /* @__PURE__ */ be({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(e, { emit: t }) {
    const o = e, n = t, { commit: l } = pt(), r = k(""), u = k(!1), c = k(!1), d = N(() => {
      if (!o.status) return !1;
      const _ = o.status.workflows;
      return _.new.length > 0 || _.modified.length > 0 || _.deleted.length > 0 || o.status.has_changes;
    }), m = N(() => {
      if (!o.status) return !1;
      const _ = o.status.workflows, x = o.status.git_changes;
      return _.new.length > 0 || _.modified.length > 0 || _.deleted.length > 0 || x.nodes_added.length > 0 || x.nodes_removed.length > 0;
    }), v = N(() => {
      var _;
      return (_ = o.status) != null && _.workflows.analyzed ? o.status.workflows.analyzed.filter((x) => x.has_issues) : [];
    }), g = N(() => v.value.length > 0), w = N(() => g.value && !c.value);
    async function p() {
      var _, x, C, S;
      if (!(g.value && !c.value) && !(!d.value || !r.value.trim() || u.value)) {
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
    return (_, x) => e.asModal ? (a(), R(Rt, {
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
          s("div", cI, [
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
          s("div", uI, [
            e.status && d.value ? (a(), i("div", dI, [
              e.status.workflows.new.length ? (a(), i("div", fI, [
                x[12] || (x[12] = s("span", { class: "change-icon new" }, "+", -1)),
                s("span", null, f(e.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : y("", !0),
              e.status.workflows.modified.length ? (a(), i("div", mI, [
                x[13] || (x[13] = s("span", { class: "change-icon modified" }, "~", -1)),
                s("span", null, f(e.status.workflows.modified.length) + " modified", 1)
              ])) : y("", !0),
              e.status.workflows.deleted.length ? (a(), i("div", vI, [
                x[14] || (x[14] = s("span", { class: "change-icon deleted" }, "-", -1)),
                s("span", null, f(e.status.workflows.deleted.length) + " deleted", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_added.length ? (a(), i("div", pI, [
                x[15] || (x[15] = s("span", { class: "change-icon new" }, "+", -1)),
                s("span", null, f(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_removed.length ? (a(), i("div", gI, [
                x[16] || (x[16] = s("span", { class: "change-icon deleted" }, "-", -1)),
                s("span", null, f(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : y("", !0),
              m.value ? y("", !0) : (a(), i("div", hI, [...x[17] || (x[17] = [
                s("span", { class: "change-icon modified" }, "~", -1),
                s("span", null, "Configuration updated", -1)
              ])]))
            ])) : e.status ? (a(), i("div", yI, " No changes to commit ")) : (a(), i("div", wI, " Loading... ")),
            g.value ? (a(), i("div", _I, [
              s("div", kI, [
                x[18] || (x[18] = s("span", { class: "error-icon" }, "⚠", -1)),
                s("span", bI, f(v.value.length) + " workflow(s) have issues", 1)
              ]),
              s("div", $I, [
                (a(!0), i(q, null, he(v.value, (C) => (a(), i("div", {
                  key: C.name,
                  class: "issue-item"
                }, [
                  s("strong", null, f(C.name), 1),
                  s("span", CI, "(" + f(C.sync_state) + ")", 1),
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
            s("div", xI, [
              b(xo, {
                modelValue: r.value,
                "onUpdate:modelValue": x[2] || (x[2] = (C) => r.value = C),
                placeholder: w.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
                disabled: !d.value || u.value || w.value,
                rows: 3,
                "submit-on-enter": !0,
                onCtrlEnter: p,
                onSubmit: p
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ])
          ]),
          s("div", SI, [
            b(Oe, {
              variant: "secondary",
              onClick: x[3] || (x[3] = (C) => n("close"))
            }, {
              default: h(() => [...x[20] || (x[20] = [
                $(" Cancel ", -1)
              ])]),
              _: 1
            }),
            b(Oe, {
              variant: c.value ? "danger" : "primary",
              disabled: !d.value || !r.value.trim() || u.value || w.value,
              loading: u.value,
              onClick: p
            }, {
              default: h(() => [
                $(f(u.value ? "Committing..." : c.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (a(), i("div", II, [
      s("div", EI, [
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
      s("div", TI, [
        e.status && d.value ? (a(), i("div", MI, [
          e.status.workflows.new.length ? (a(), i("div", PI, [
            x[23] || (x[23] = s("span", { class: "change-icon new" }, "+", -1)),
            s("span", null, f(e.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : y("", !0),
          e.status.workflows.modified.length ? (a(), i("div", RI, [
            x[24] || (x[24] = s("span", { class: "change-icon modified" }, "~", -1)),
            s("span", null, f(e.status.workflows.modified.length) + " modified", 1)
          ])) : y("", !0),
          e.status.workflows.deleted.length ? (a(), i("div", NI, [
            x[25] || (x[25] = s("span", { class: "change-icon deleted" }, "-", -1)),
            s("span", null, f(e.status.workflows.deleted.length) + " deleted", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_added.length ? (a(), i("div", DI, [
            x[26] || (x[26] = s("span", { class: "change-icon new" }, "+", -1)),
            s("span", null, f(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_removed.length ? (a(), i("div", LI, [
            x[27] || (x[27] = s("span", { class: "change-icon deleted" }, "-", -1)),
            s("span", null, f(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : y("", !0),
          m.value ? y("", !0) : (a(), i("div", OI, [...x[28] || (x[28] = [
            s("span", { class: "change-icon modified" }, "~", -1),
            s("span", null, "Configuration updated", -1)
          ])]))
        ])) : e.status ? (a(), i("div", AI, " No changes to commit ")) : (a(), i("div", UI, " Loading... ")),
        g.value ? (a(), i("div", zI, [
          s("div", FI, [
            x[29] || (x[29] = s("span", { class: "error-icon" }, "⚠", -1)),
            s("span", VI, f(v.value.length) + " workflow(s) have issues", 1)
          ]),
          s("div", BI, [
            (a(!0), i(q, null, he(v.value, (C) => (a(), i("div", {
              key: C.name,
              class: "issue-item"
            }, [
              s("strong", null, f(C.name), 1),
              s("span", WI, "(" + f(C.sync_state) + ")", 1),
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
        s("div", GI, [
          b(xo, {
            modelValue: r.value,
            "onUpdate:modelValue": x[8] || (x[8] = (C) => r.value = C),
            placeholder: w.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
            disabled: !d.value || u.value || w.value,
            rows: 3,
            "submit-on-enter": !0,
            onCtrlEnter: p,
            onSubmit: p
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ])
      ]),
      s("div", jI, [
        b(Oe, {
          variant: "secondary",
          onClick: x[9] || (x[9] = (C) => n("close"))
        }, {
          default: h(() => [...x[31] || (x[31] = [
            $(" Cancel ", -1)
          ])]),
          _: 1
        }),
        b(Oe, {
          variant: c.value ? "danger" : "primary",
          disabled: !d.value || !r.value.trim() || u.value || w.value,
          loading: u.value,
          onClick: p
        }, {
          default: h(() => [
            $(f(u.value ? "Committing..." : c.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), pc = /* @__PURE__ */ Se(HI, [["__scopeId", "data-v-5f897631"]]), qI = { class: "modal-header" }, KI = { class: "modal-body" }, JI = { class: "switch-message" }, QI = { class: "switch-details" }, YI = { class: "modal-actions" }, XI = /* @__PURE__ */ be({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (t, o) => (a(), R(Rt, { to: "body" }, [
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
          s("div", qI, [
            o[5] || (o[5] = s("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            s("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (n) => t.$emit("close"))
            }, "✕")
          ]),
          s("div", KI, [
            s("p", JI, [
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
            s("p", QI, ' Your current work will be preserved. You can switch back to "' + f(e.fromEnvironment) + '" anytime. ', 1),
            o[10] || (o[10] = s("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          s("div", YI, [
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
}), ZI = /* @__PURE__ */ Se(XI, [["__scopeId", "data-v-e9c5253e"]]), e6 = {
  key: 0,
  class: "modal-overlay"
}, t6 = { class: "modal-content" }, s6 = { class: "modal-body" }, o6 = { class: "progress-info" }, n6 = { class: "progress-percentage" }, a6 = { class: "progress-state" }, l6 = { class: "switch-steps" }, i6 = { class: "step-icon" }, r6 = { class: "step-label" }, c6 = /* @__PURE__ */ be({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(e) {
    const t = e, o = N(() => {
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
    }), n = N(() => t.state === "complete" ? "success" : t.state === "critical_failure" || t.state === "rolled_back" ? "error" : "default"), l = N(() => {
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
    return (r, u) => (a(), R(Rt, { to: "body" }, [
      e.show ? (a(), i("div", e6, [
        s("div", t6, [
          u[1] || (u[1] = s("div", { class: "modal-header" }, [
            s("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          s("div", s6, [
            b(lc, {
              progress: e.progress,
              variant: n.value
            }, null, 8, ["progress", "variant"]),
            s("div", o6, [
              s("div", n6, f(e.progress) + "%", 1),
              s("div", a6, f(o.value), 1)
            ]),
            s("div", l6, [
              (a(!0), i(q, null, he(l.value, (c) => (a(), i("div", {
                key: c.state,
                class: Fe(["switch-step", c.status])
              }, [
                s("span", i6, f(c.icon), 1),
                s("span", r6, f(c.label), 1)
              ], 2))), 128))
            ]),
            u[0] || (u[0] = s("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : y("", !0)
    ]));
  }
}), u6 = /* @__PURE__ */ Se(c6, [["__scopeId", "data-v-768a5078"]]), d6 = { class: "modal-header" }, f6 = { class: "modal-body" }, m6 = {
  key: 0,
  class: "node-section"
}, v6 = { class: "node-list" }, p6 = {
  key: 1,
  class: "node-section"
}, g6 = { class: "node-list" }, h6 = { class: "modal-actions" }, y6 = /* @__PURE__ */ be({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (t, o) => (a(), R(Rt, { to: "body" }, [
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
          s("div", d6, [
            o[5] || (o[5] = s("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            s("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (n) => t.$emit("close"))
            }, "✕")
          ]),
          s("div", f6, [
            o[8] || (o[8] = s("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            e.mismatchDetails.missing_nodes.length ? (a(), i("div", m6, [
              o[6] || (o[6] = s("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              s("div", v6, [
                (a(!0), i(q, null, he(e.mismatchDetails.missing_nodes, (n) => (a(), i("div", {
                  key: n,
                  class: "node-item add"
                }, " + " + f(n), 1))), 128))
              ])
            ])) : y("", !0),
            e.mismatchDetails.extra_nodes.length ? (a(), i("div", p6, [
              o[7] || (o[7] = s("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              s("div", g6, [
                (a(!0), i(q, null, he(e.mismatchDetails.extra_nodes, (n) => (a(), i("div", {
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
          s("div", h6, [
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
}), w6 = /* @__PURE__ */ Se(y6, [["__scopeId", "data-v-7cad7518"]]), _6 = [
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
], xn = "v0.0.24", k6 = "Akatz", b6 = { class: "social-buttons" }, $6 = ["title", "aria-label", "onClick"], C6 = {
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, x6 = ["d"], S6 = ["title", "aria-label", "onClick"], I6 = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, E6 = ["d"], T6 = /* @__PURE__ */ be({
  __name: "SocialButtons",
  setup(e) {
    function t(o) {
      window.open(o, "_blank", "noopener,noreferrer");
    }
    return (o, n) => (a(), i("div", b6, [
      (a(!0), i(q, null, he(tt(_6), (l) => (a(), i(q, {
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
          (a(), i("svg", C6, [
            s("path", {
              d: l.iconPath
            }, null, 8, x6)
          ]))
        ], 8, $6)) : (a(), i("button", {
          key: 1,
          class: "icon-btn social-link",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (r) => t(l.url)
        }, [
          (a(), i("svg", I6, [
            s("path", {
              d: l.iconPath
            }, null, 8, E6)
          ]))
        ], 8, S6))
      ], 64))), 128))
    ]));
  }
}), gc = /* @__PURE__ */ Se(T6, [["__scopeId", "data-v-4f846342"]]), M6 = { class: "footer-info" }, P6 = ["title"], R6 = {
  key: 0,
  class: "dev-badge"
}, N6 = { class: "made-by" }, D6 = /* @__PURE__ */ be({
  __name: "FooterInfo",
  setup(e) {
    const { getConfig: t } = pt(), o = k(null), n = k(null), l = k(null), r = N(() => o.value === "development"), u = N(() => {
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
    }), (c, d) => (a(), i("div", M6, [
      s("span", {
        class: "version",
        title: u.value
      }, [
        $(f(tt(xn)) + " ", 1),
        r.value ? (a(), i("span", R6, "dev")) : y("", !0)
      ], 8, P6),
      s("span", N6, [
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
        $(" by " + f(tt(k6)), 1)
      ])
    ]));
  }
}), hc = /* @__PURE__ */ Se(D6, [["__scopeId", "data-v-4fa265b3"]]), L6 = /* @__PURE__ */ be({
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
    return (r, u) => (a(), R(Tt, {
      title: "WORKSPACE SETTINGS",
      size: "lg",
      "show-close-button": !0,
      onClose: u[1] || (u[1] = (c) => r.$emit("close"))
    }, {
      body: h(() => [
        b(sc, {
          ref_key: "contentRef",
          ref: o,
          "workspace-path": e.workspacePath,
          onSaved: l
        }, null, 8, ["workspace-path"])
      ]),
      footer: h(() => {
        var c;
        return [
          b(Oe, {
            variant: "primary",
            disabled: !((c = o.value) != null && c.hasChanges),
            onClick: n
          }, {
            default: h(() => [...u[2] || (u[2] = [
              $(" Save Changes ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          b(Oe, {
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
}), O6 = /* @__PURE__ */ Se(L6, [["__scopeId", "data-v-fac00ae7"]]), A6 = { class: "header-actions" }, U6 = {
  key: 0,
  class: "wizard-step"
}, z6 = { class: "form-field" }, F6 = ["placeholder"], V6 = {
  key: 0,
  class: "form-error"
}, B6 = { class: "form-field form-field--checkbox" }, W6 = { class: "form-checkbox" }, G6 = {
  key: 0,
  class: "form-field"
}, j6 = ["placeholder"], H6 = {
  key: 0,
  class: "form-info"
}, q6 = {
  key: 1,
  class: "form-suggestion"
}, K6 = {
  key: 2,
  class: "form-error"
}, J6 = {
  key: 3,
  class: "form-info"
}, Q6 = {
  key: 1,
  class: "wizard-step"
}, Y6 = {
  key: 0,
  class: "progress-check-loading"
}, X6 = {
  key: 0,
  class: "cli-warning"
}, Z6 = { class: "cli-warning-header" }, eE = {
  key: 1,
  class: "env-landing"
}, tE = { class: "env-list" }, sE = ["value"], oE = { class: "env-name" }, nE = {
  key: 2,
  class: "env-create"
}, aE = { class: "form-field" }, lE = { class: "form-field" }, iE = ["value"], rE = { class: "form-field" }, cE = ["disabled"], uE = ["value"], dE = { class: "form-field" }, fE = ["value"], mE = { class: "form-field form-field--checkbox" }, vE = { class: "form-checkbox" }, pE = {
  key: 0,
  class: "form-error"
}, gE = {
  key: 1,
  class: "env-creating"
}, hE = { class: "creating-intro" }, yE = {
  key: 3,
  class: "env-import"
}, wE = { class: "wizard-footer" }, _E = { class: "wizard-footer-actions" }, vo = 10, kE = 600 * 1e3, Ci = 1800 * 1e3, bE = /* @__PURE__ */ be({
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
    } = pt(), g = k(o.initialStep || 1), w = k(null), p = k("landing"), _ = k(!1), x = k(!1), C = k(!1), S = k(!1), T = k(null), M = k(o.initialStep === 2), P = k(o.defaultPath), A = k(!!o.detectedModelsDir), B = k(o.detectedModelsDir || ""), j = k(null), E = k(null), V = k(null), ae = k(null), fe = k("my-new-env"), ue = k(nc), we = k("latest"), se = k(ac), F = k(!0), Q = k(null), Pe = k(null), te = k([{ tag_name: "latest", name: "Latest", published_at: "" }]), ge = k(!1), O = k(!1), me = k(!1), Re = k({ progress: 0, message: "" }), Ge = k({ progress: 0, message: "" }), Ee = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], H = k(0), Z = k(null), K = k(0), X = k(null), xe = N(() => {
      var ke, Ye;
      const ve = (ke = P.value) == null ? void 0 : ke.trim(), Y = !j.value, He = !A.value || !E.value && ((Ye = B.value) == null ? void 0 : Ye.trim());
      return ve && Y && He;
    }), ce = N(() => {
      var ve;
      return (ve = fe.value) == null ? void 0 : ve.trim();
    }), le = N(() => !!(g.value === 2 || Pe.value || o.setupState === "empty_workspace" || o.setupState === "unmanaged")), I = N(() => Pe.value || o.workspacePath || null);
    async function z() {
      var ve;
      if (j.value = null, !!((ve = P.value) != null && ve.trim()))
        try {
          const Y = await u({ path: P.value, type: "workspace" });
          Y.valid || (j.value = Y.error || "Invalid path");
        } catch (Y) {
          j.value = Y instanceof Error ? Y.message : "Validation failed";
        }
    }
    async function ie() {
      var ve;
      if (E.value = null, V.value = null, ae.value = null, !!((ve = B.value) != null && ve.trim()))
        try {
          const Y = await u({ path: B.value, type: "models" });
          if (Y.valid)
            ae.value = Y.model_count ?? null;
          else if (E.value = Y.error || "Invalid path", Y.suggestion) {
            V.value = Y.suggestion, B.value = Y.suggestion, E.value = null;
            const He = await u({ path: Y.suggestion, type: "models" });
            He.valid && (ae.value = He.model_count ?? null);
          }
        } catch (Y) {
          E.value = Y instanceof Error ? Y.message : "Validation failed";
        }
    }
    async function Ce() {
      var ve, Y, He, ke, Ye;
      if (j.value = null, E.value = null, await z(), (ve = j.value) != null && ve.includes("already exists")) {
        j.value = null, Pe.value = ((Y = P.value) == null ? void 0 : Y.trim()) || o.defaultPath, g.value = 2, $e();
        return;
      }
      if (!j.value && !(A.value && ((He = B.value) != null && He.trim()) && (await ie(), E.value))) {
        O.value = !0;
        try {
          await l({
            workspace_path: ((ke = P.value) == null ? void 0 : ke.trim()) || o.defaultPath,
            models_directory: A.value && ((Ye = B.value) == null ? void 0 : Ye.trim()) || null
          }), H.value = 0, Z.value = Date.now();
          const ot = setInterval(async () => {
            var Ue;
            if (Z.value && Date.now() - Z.value > kE) {
              clearInterval(ot), O.value = !1, j.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const L = await r();
              if (H.value = 0, L.state === "idle" && O.value) {
                clearInterval(ot), O.value = !1, j.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              Re.value = { progress: L.progress, message: L.message }, L.state === "complete" ? (clearInterval(ot), O.value = !1, Pe.value = ((Ue = P.value) == null ? void 0 : Ue.trim()) || o.defaultPath, g.value = 2, $e()) : L.state === "error" && (clearInterval(ot), O.value = !1, j.value = L.error || "Workspace creation failed");
            } catch (L) {
              H.value++, console.warn(`Polling failure ${H.value}/${vo}:`, L), H.value >= vo && (clearInterval(ot), O.value = !1, j.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (ot) {
          O.value = !1, j.value = ot instanceof Error ? ot.message : "Failed to create workspace";
        }
      }
    }
    async function _e() {
      me.value = !0, Q.value = null;
      try {
        const ve = {
          name: fe.value.trim() || "my-new-env",
          python_version: ue.value,
          comfyui_version: we.value,
          torch_backend: se.value,
          switch_after: F.value,
          workspace_path: Pe.value || void 0
          // Pass workspace path for first-time setup
        };
        if ((await c(ve)).status === "started") {
          K.value = 0, X.value = Date.now();
          const He = setInterval(async () => {
            if (X.value && Date.now() - X.value > Ci) {
              clearInterval(He), me.value = !1, Q.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const ke = await d();
              if (K.value = 0, ke.state === "idle" && me.value) {
                clearInterval(He), me.value = !1, Q.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              if (Ge.value = {
                progress: ke.progress ?? 0,
                message: ke.message,
                phase: ke.phase
              }, ke.state === "complete") {
                clearInterval(He), me.value = !1;
                const Ye = ke.environment_name || ve.name;
                F.value ? n("complete", Ye, Pe.value) : (p.value = "landing", n("environment-created-no-switch", Ye));
              } else ke.state === "error" && (clearInterval(He), me.value = !1, Q.value = ke.error || "Environment creation failed");
            } catch (ke) {
              K.value++, console.warn(`Polling failure ${K.value}/${vo}:`, ke), K.value >= vo && (clearInterval(He), me.value = !1, Q.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (ve) {
        me.value = !1, Q.value = ve instanceof Error ? ve.message : "Unknown error";
      }
    }
    async function $e() {
      ge.value = !0;
      try {
        te.value = await v();
      } catch (ve) {
        console.error("Failed to load ComfyUI releases:", ve);
      } finally {
        ge.value = !1;
      }
    }
    function Ae() {
      w.value && n("switch-environment", w.value, Pe.value);
    }
    function ze() {
      p.value === "create" || p.value === "import" ? p.value = "landing" : g.value === 2 && o.setupState === "no_workspace" && (g.value = 1);
    }
    function Ne(ve, Y) {
      x.value = !1, Y ? n("complete", ve, Pe.value) : (n("environment-created-no-switch", ve), p.value = "landing");
    }
    function Ie() {
    }
    rt(async () => {
      if (o.detectedModelsDir && (B.value = o.detectedModelsDir), o.workspacePath && (Pe.value = o.workspacePath), g.value === 2) {
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
          console.log("[ComfyGit] Resuming in-progress environment creation:", ve.environment_name), p.value = "create", me.value = !0, fe.value = ve.environment_name || "my-new-env", Ge.value = {
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
        }, S.value = !0, p.value = "import", x.value = !0);
      } catch (ve) {
        console.log("[ComfyGit] Import progress check failed:", ve);
      }
    }
    async function Ve() {
      K.value = 0, X.value = Date.now();
      let ve = null;
      const Y = async () => {
        if (X.value && Date.now() - X.value > Ci)
          return ve && clearInterval(ve), me.value = !1, Q.value = "Environment creation timed out. Check server logs for details.", !1;
        try {
          const ke = await d();
          if (K.value = 0, ke.state === "idle" && me.value)
            return ve && clearInterval(ve), me.value = !1, Q.value = "Environment creation was interrupted. Please try again.", !1;
          if (Ge.value = {
            progress: ke.progress ?? 0,
            message: ke.message,
            phase: ke.phase
          }, ke.state === "complete") {
            ve && clearInterval(ve), me.value = !1;
            const Ye = ke.environment_name || fe.value;
            return n("complete", Ye, Pe.value), !1;
          } else if (ke.state === "error")
            return ve && clearInterval(ve), me.value = !1, Q.value = ke.error || "Environment creation failed", !1;
          return !0;
        } catch (ke) {
          return K.value++, console.warn(`Polling failure ${K.value}/${vo}:`, ke), K.value >= vo ? (ve && clearInterval(ve), me.value = !1, Q.value = "Lost connection to server. Please refresh and try again.", !1) : !0;
        }
      };
      await Y() && (ve = setInterval(async () => {
        !await Y() && ve && clearInterval(ve);
      }, 2e3));
    }
    return (ve, Y) => (a(), i(q, null, [
      b(Tt, {
        size: "lg",
        "show-close-button": !1,
        "close-on-overlay-click": !1,
        onClose: Y[15] || (Y[15] = (He) => ve.$emit("close"))
      }, {
        header: h(() => [
          Y[20] || (Y[20] = s("h3", { class: "base-modal-title" }, "WELCOME TO COMFYGIT", -1)),
          s("div", A6, [
            b(gc),
            Y[19] || (Y[19] = s("span", { class: "header-divider" }, null, -1)),
            le.value ? (a(), i("button", {
              key: 0,
              class: "icon-btn settings-btn",
              title: "Workspace Settings",
              onClick: Y[0] || (Y[0] = (He) => _.value = !0)
            }, [...Y[17] || (Y[17] = [
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
              onClick: Y[1] || (Y[1] = (He) => ve.$emit("close")),
              title: "Close"
            }, [...Y[18] || (Y[18] = [
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
            g.value === 1 ? (a(), i("div", U6, [
              Y[24] || (Y[24] = s("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
              s("div", z6, [
                Y[21] || (Y[21] = s("label", { class: "form-label" }, "Workspace Path", -1)),
                Et(s("input", {
                  "onUpdate:modelValue": Y[2] || (Y[2] = (ke) => P.value = ke),
                  type: "text",
                  class: "form-input",
                  placeholder: e.defaultPath
                }, null, 8, F6), [
                  [$o, P.value]
                ]),
                j.value ? (a(), i("p", V6, f(j.value), 1)) : y("", !0)
              ]),
              s("div", B6, [
                s("label", W6, [
                  Et(s("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": Y[3] || (Y[3] = (ke) => A.value = ke)
                  }, null, 512), [
                    [Gn, A.value]
                  ]),
                  Y[22] || (Y[22] = s("span", null, "I have existing ComfyUI models", -1))
                ])
              ]),
              A.value ? (a(), i("div", G6, [
                Y[23] || (Y[23] = s("label", { class: "form-label" }, "Models Directory", -1)),
                Et(s("input", {
                  "onUpdate:modelValue": Y[4] || (Y[4] = (ke) => B.value = ke),
                  type: "text",
                  class: "form-input",
                  placeholder: e.detectedModelsDir || "/path/to/models"
                }, null, 8, j6), [
                  [$o, B.value]
                ]),
                e.detectedModelsDir && !B.value ? (a(), i("p", H6, " Detected: " + f(e.detectedModelsDir), 1)) : y("", !0),
                V.value ? (a(), i("p", q6, " Did you mean: " + f(V.value), 1)) : y("", !0),
                E.value ? (a(), i("p", K6, f(E.value), 1)) : y("", !0),
                ae.value !== null && !E.value ? (a(), i("p", J6, " Found " + f(ae.value) + " model files ", 1)) : y("", !0)
              ])) : y("", !0),
              O.value ? (a(), R(Hn, {
                key: 1,
                progress: Re.value.progress,
                message: Re.value.message
              }, null, 8, ["progress", "message"])) : y("", !0)
            ])) : y("", !0),
            g.value === 2 ? (a(), i("div", Q6, [
              M.value ? (a(), i("div", Y6, [...Y[25] || (Y[25] = [
                s("div", { class: "loading-spinner" }, null, -1),
                s("div", { class: "loading-text" }, "Checking for in-progress operations...", -1)
              ])])) : (a(), i(q, { key: 1 }, [
                !o.cliInstalled && !C.value ? (a(), i("div", X6, [
                  s("div", Z6, [
                    Y[27] || (Y[27] = s("span", { class: "cli-warning-icon" }, "!", -1)),
                    Y[28] || (Y[28] = s("span", { class: "cli-warning-title" }, "ComfyGit CLI Not Installed", -1)),
                    s("button", {
                      class: "cli-warning-close",
                      onClick: Y[5] || (Y[5] = (ke) => C.value = !0),
                      title: "Dismiss"
                    }, [...Y[26] || (Y[26] = [
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
                  Y[29] || (Y[29] = s("p", { class: "cli-warning-text" }, " To start managed environments from the command line, you'll need the ComfyGit CLI. This is required to restart ComfyUI in managed mode after switching environments. ", -1)),
                  Y[30] || (Y[30] = s("div", { class: "cli-warning-commands" }, [
                    s("code", null, "pipx install comfygit"),
                    s("span", { class: "cli-warning-or" }, "or"),
                    s("code", null, "uv tool install comfygit")
                  ], -1))
                ])) : y("", !0),
                p.value === "landing" ? (a(), i("div", eE, [
                  Y[34] || (Y[34] = s("p", { class: "wizard-intro" }, " Now let's set up your first environment. ", -1)),
                  s("button", {
                    class: "landing-option",
                    onClick: Y[6] || (Y[6] = (ke) => p.value = "create")
                  }, [...Y[31] || (Y[31] = [
                    s("span", { class: "option-icon" }, "➕", -1),
                    s("div", { class: "option-content" }, [
                      s("span", { class: "option-title" }, "Create New Environment"),
                      s("span", { class: "option-description" }, "Start fresh with a new ComfyUI installation")
                    ], -1),
                    s("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  s("button", {
                    class: "landing-option",
                    onClick: Y[7] || (Y[7] = (ke) => {
                      S.value = !1, p.value = "import";
                    })
                  }, [...Y[32] || (Y[32] = [
                    s("span", { class: "option-icon" }, "📦", -1),
                    s("div", { class: "option-content" }, [
                      s("span", { class: "option-title" }, "Import Environment"),
                      s("span", { class: "option-description" }, "From exported bundle (.tar.gz) or git repository")
                    ], -1),
                    s("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  (He = o.existingEnvironments) != null && He.length ? (a(), i(q, { key: 0 }, [
                    Y[33] || (Y[33] = s("div", { class: "landing-divider" }, [
                      s("span", null, "or switch to existing")
                    ], -1)),
                    s("div", tE, [
                      (a(!0), i(q, null, he(o.existingEnvironments, (ke) => (a(), i("label", {
                        key: ke,
                        class: Fe(["env-option", { selected: w.value === ke }])
                      }, [
                        Et(s("input", {
                          type: "radio",
                          name: "env-select",
                          value: ke,
                          "onUpdate:modelValue": Y[8] || (Y[8] = (Ye) => w.value = Ye)
                        }, null, 8, sE), [
                          [Pn, w.value]
                        ]),
                        s("span", oE, f(ke), 1)
                      ], 2))), 128))
                    ])
                  ], 64)) : y("", !0)
                ])) : p.value === "create" ? (a(), i("div", nE, [
                  me.value ? (a(), i("div", gE, [
                    s("p", hE, [
                      Y[41] || (Y[41] = $(" Creating environment ", -1)),
                      s("strong", null, f(fe.value), 1),
                      Y[42] || (Y[42] = $("... ", -1))
                    ]),
                    b(Hn, {
                      progress: Ge.value.progress,
                      message: Ge.value.message,
                      "current-phase": Ge.value.phase,
                      "show-steps": !0,
                      steps: Ee
                    }, null, 8, ["progress", "message", "current-phase"]),
                    Y[43] || (Y[43] = s("p", { class: "progress-warning" }, " This may take several minutes. Please wait... ", -1))
                  ])) : (a(), i(q, { key: 0 }, [
                    Y[40] || (Y[40] = s("p", { class: "wizard-intro" }, " Create a new managed environment: ", -1)),
                    s("div", aE, [
                      Y[35] || (Y[35] = s("label", { class: "form-label" }, "Environment Name", -1)),
                      Et(s("input", {
                        "onUpdate:modelValue": Y[9] || (Y[9] = (ke) => fe.value = ke),
                        type: "text",
                        class: "form-input",
                        placeholder: "my-new-env"
                      }, null, 512), [
                        [$o, fe.value]
                      ])
                    ]),
                    s("div", lE, [
                      Y[36] || (Y[36] = s("label", { class: "form-label" }, "Python Version", -1)),
                      Et(s("select", {
                        "onUpdate:modelValue": Y[10] || (Y[10] = (ke) => ue.value = ke),
                        class: "form-select"
                      }, [
                        (a(!0), i(q, null, he(tt(oc), (ke) => (a(), i("option", {
                          key: ke,
                          value: ke
                        }, f(ke), 9, iE))), 128))
                      ], 512), [
                        [Co, ue.value]
                      ])
                    ]),
                    s("div", rE, [
                      Y[37] || (Y[37] = s("label", { class: "form-label" }, "ComfyUI Version", -1)),
                      Et(s("select", {
                        "onUpdate:modelValue": Y[11] || (Y[11] = (ke) => we.value = ke),
                        class: "form-select",
                        disabled: ge.value
                      }, [
                        (a(!0), i(q, null, he(te.value, (ke) => (a(), i("option", {
                          key: ke.tag_name,
                          value: ke.tag_name
                        }, f(ke.name), 9, uE))), 128))
                      ], 8, cE), [
                        [Co, we.value]
                      ])
                    ]),
                    s("div", dE, [
                      Y[38] || (Y[38] = s("label", { class: "form-label" }, "PyTorch Backend", -1)),
                      Et(s("select", {
                        "onUpdate:modelValue": Y[12] || (Y[12] = (ke) => se.value = ke),
                        class: "form-select"
                      }, [
                        (a(!0), i(q, null, he(tt(El), (ke) => (a(), i("option", {
                          key: ke,
                          value: ke
                        }, f(ke) + f(ke === "auto" ? " (detect GPU)" : ""), 9, fE))), 128))
                      ], 512), [
                        [Co, se.value]
                      ])
                    ]),
                    s("div", mE, [
                      s("label", vE, [
                        Et(s("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": Y[13] || (Y[13] = (ke) => F.value = ke)
                        }, null, 512), [
                          [Gn, F.value]
                        ]),
                        Y[39] || (Y[39] = s("span", null, "Switch to this environment after creation", -1))
                      ])
                    ]),
                    Q.value ? (a(), i("div", pE, f(Q.value), 1)) : y("", !0)
                  ], 64))
                ])) : p.value === "import" ? (a(), i("div", yE, [
                  b(cc, {
                    "workspace-path": Pe.value,
                    "resume-import": S.value,
                    "initial-progress": T.value ?? void 0,
                    onImportComplete: Ne,
                    onImportStarted: Y[14] || (Y[14] = (ke) => x.value = !0),
                    onSourceCleared: Ie
                  }, null, 8, ["workspace-path", "resume-import", "initial-progress"])
                ])) : y("", !0)
              ], 64))
            ])) : y("", !0)
          ];
        }),
        footer: h(() => [
          s("div", wE, [
            b(hc),
            s("div", _E, [
              g.value === 1 ? (a(), R(Oe, {
                key: 0,
                variant: "primary",
                disabled: !xe.value || O.value,
                onClick: Ce
              }, {
                default: h(() => [
                  $(f(O.value ? "Creating..." : "Next"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : g.value === 2 ? (a(), i(q, { key: 1 }, [
                !me.value && !x.value && (p.value !== "landing" || o.setupState === "no_workspace" && !Pe.value) ? (a(), R(Oe, {
                  key: 0,
                  variant: "secondary",
                  onClick: ze
                }, {
                  default: h(() => [...Y[44] || (Y[44] = [
                    $(" Back ", -1)
                  ])]),
                  _: 1
                })) : y("", !0),
                p.value === "create" ? (a(), R(Oe, {
                  key: 1,
                  variant: "primary",
                  disabled: !ce.value || me.value,
                  onClick: _e
                }, {
                  default: h(() => [
                    $(f(me.value ? "Creating..." : F.value ? "Create & Switch" : "Create Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0),
                p.value === "landing" && w.value ? (a(), R(Oe, {
                  key: 2,
                  variant: "primary",
                  onClick: Ae
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
      _.value ? (a(), R(O6, {
        key: 0,
        "workspace-path": I.value,
        onClose: Y[16] || (Y[16] = (He) => _.value = !1)
      }, null, 8, ["workspace-path"])) : y("", !0)
    ], 64));
  }
}), $E = /* @__PURE__ */ Se(bE, [["__scopeId", "data-v-9a9aadc0"]]), CE = { class: "update-banner" }, xE = { class: "update-banner__left" }, SE = { class: "update-banner__title" }, IE = {
  key: 0,
  class: "update-banner__summary"
}, EE = { class: "update-banner__actions" }, TE = ["disabled"], ME = ["disabled"], PE = ["disabled"], RE = /* @__PURE__ */ be({
  __name: "UpdateNoticeBanner",
  props: {
    info: {},
    updating: { type: Boolean }
  },
  emits: ["update", "dismiss", "release-notes"],
  setup(e, { emit: t }) {
    const o = t;
    return (n, l) => (a(), i("div", CE, [
      s("div", xE, [
        s("div", SE, " ComfyGit Manager v" + f(e.info.latest_version) + " available ", 1),
        e.info.changelog_summary ? (a(), i("div", IE, f(e.info.changelog_summary), 1)) : y("", !0)
      ]),
      s("div", EE, [
        s("button", {
          class: "update-banner__btn primary",
          disabled: e.updating,
          onClick: l[0] || (l[0] = (r) => o("update"))
        }, f(e.updating ? "Updating…" : "Update"), 9, TE),
        e.info.release_url ? (a(), i("button", {
          key: 0,
          class: "update-banner__btn",
          disabled: e.updating,
          onClick: l[1] || (l[1] = (r) => o("release-notes"))
        }, " Release notes ", 8, ME)) : y("", !0),
        s("button", {
          class: "update-banner__btn",
          disabled: e.updating,
          onClick: l[2] || (l[2] = (r) => o("dismiss"))
        }, " Dismiss ", 8, PE)
      ])
    ]));
  }
}), NE = /* @__PURE__ */ Se(RE, [["__scopeId", "data-v-49562c5c"]]), yc = "ComfyGit.UpdateNotice.DismissedVersion";
function DE() {
  try {
    return localStorage.getItem(yc);
  } catch {
    return null;
  }
}
function LE(e) {
  try {
    localStorage.setItem(yc, e);
  } catch {
  }
}
function OE(e) {
  return !e || !e.update_available || !e.latest_version ? !1 : DE() !== e.latest_version;
}
const AE = { class: "comfygit-panel" }, UE = { class: "panel-header" }, zE = { class: "header-left" }, FE = {
  key: 0,
  class: "header-info"
}, VE = { class: "header-actions" }, BE = { class: "env-switcher" }, WE = { class: "env-switcher-header" }, GE = { class: "env-control-buttons" }, jE = {
  key: 0,
  class: "header-info"
}, HE = { class: "branch-name" }, qE = { class: "panel-main" }, KE = { class: "sidebar" }, JE = { class: "sidebar-content" }, QE = { class: "sidebar-section" }, YE = { class: "sidebar-section" }, XE = { class: "sidebar-section" }, ZE = { class: "sidebar-footer" }, eT = { class: "content-area" }, tT = {
  key: 0,
  class: "error-message"
}, sT = {
  key: 1,
  class: "loading"
}, oT = { class: "dialog-content env-selector-dialog" }, nT = { class: "dialog-header" }, aT = { class: "dialog-body" }, lT = { class: "env-list" }, iT = { class: "env-info" }, rT = { class: "env-name-row" }, cT = { class: "env-indicator" }, uT = { class: "env-name" }, dT = {
  key: 0,
  class: "env-branch"
}, fT = {
  key: 1,
  class: "current-label"
}, mT = { class: "env-stats" }, vT = ["onClick"], pT = { class: "toast-container" }, gT = { class: "toast-message" }, xi = "ComfyGit.LastView", Si = "ComfyGit.LastSection", hT = /* @__PURE__ */ be({
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
      getEnvironments: g,
      switchEnvironment: w,
      getSwitchProgress: p,
      deleteEnvironment: _,
      syncEnvironmentManually: x,
      repairWorkflowModels: C,
      getSetupStatus: S,
      getUpdateCheck: T,
      updateManager: M
    } = pt(), P = zv(), A = k(null), B = k([]), j = k([]), E = k([]), V = N(() => E.value.find((ne) => ne.is_current)), ae = k(null), fe = k(!1), ue = k(!1), we = k("history"), se = k("manifest"), F = k(null), Q = k(!1), Pe = k(1), te = N(() => {
      var ne;
      return ((ne = F.value) == null ? void 0 : ne.state) || "managed";
    }), ge = {
      can_initialize_workspace: !1,
      can_create_environment: !0,
      can_switch_environment: !0,
      can_restart_current: !0,
      can_stop_current: !0,
      can_delete_environment: !0
    }, O = N(() => {
      var ne, J;
      return ((J = (ne = F.value) == null ? void 0 : ne.runtime_context) == null ? void 0 : J.capabilities) || ge;
    }), me = k(!1), Re = k(null), Ge = k(null), Ee = k(!1), H = k(null), Z = k(!1), K = k(!1), X = N(() => !Z.value && OE(H.value)), xe = k(null), ce = k(null), le = k(null), I = k(!1), z = k(!1), ie = k(""), Ce = k(null), _e = k({ state: "idle", progress: 0, message: "" });
    let $e = null, Ae = null;
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
    }, Ne = o.initialView ? ze[o.initialView] : null, Ie = [
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
        const ne = sessionStorage.getItem(xi), J = sessionStorage.getItem(Si), qe = ne === "branches" || ne === "history" || ne === "remotes" ? "version-control" : ne === "manifest" || ne === "debug-env" || ne === "debug-workspace" ? "diagnostics" : ne, Qe = J === "all-envs" ? "workspace" : J === "sharing" ? "version-control" : J;
        if (ne && J && Ie.includes(qe) && Ke.includes(Qe))
          return { view: qe, section: Qe };
      } catch {
      }
      return null;
    }
    const ve = Ve(), Y = k((Ne == null ? void 0 : Ne.view) ?? (ve == null ? void 0 : ve.view) ?? "status"), He = k((Ne == null ? void 0 : Ne.section) ?? (ve == null ? void 0 : ve.section) ?? "this-env");
    function ke(ne, J) {
      Y.value = ne, He.value = J;
      try {
        sessionStorage.setItem(xi, ne), sessionStorage.setItem(Si, J);
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
    function Ue(ne) {
      se.value = ne, ke("diagnostics", "diagnostics");
    }
    function L() {
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
      for (const vt of qe)
        if (typeof (vt == null ? void 0 : vt.execute) == "function")
          try {
            return await vt.execute(ne), !0;
          } catch (Nt) {
            console.debug(`[ComfyGit] Command ${ne} did not open Extensions manager`, Nt);
          }
      return !1;
    }
    function Je(ne) {
      var Qe, at, vt;
      const J = ne.map((Nt) => Nt.toLowerCase()), qe = document.querySelectorAll('button, [role="button"]');
      for (const Nt of qe) {
        const G = Nt;
        if ([
          (Qe = G.textContent) == null ? void 0 : Qe.trim(),
          (at = G.getAttribute("title")) == null ? void 0 : at.trim(),
          (vt = G.getAttribute("aria-label")) == null ? void 0 : vt.trim()
        ].filter(Boolean).map((Be) => Be.toLowerCase()).some((Be) => J.includes(Be)))
          return G.click(), !0;
      }
      return !1;
    }
    const D = k(null), U = k(!1), ee = k(!1), De = k([]);
    let Le = 0;
    function Me(ne, J = "info", qe = 3e3) {
      const Qe = ++Le;
      return De.value.push({ id: Qe, message: ne, type: J }), qe > 0 && setTimeout(() => {
        De.value = De.value.filter((at) => at.id !== Qe);
      }, qe), Qe;
    }
    function je(ne) {
      De.value = De.value.filter((J) => J.id !== ne);
    }
    function nt(ne, J) {
      Me(ne, J);
    }
    async function bt() {
      H.value = null, Z.value = !1;
      try {
        H.value = await T();
      } catch {
      }
    }
    function It() {
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
      ne && LE(ne), Z.value = !0;
    }
    async function W() {
      var J, qe;
      if (K.value) return;
      K.value = !0;
      const ne = Me("Updating comfygit-manager...", "info", 0);
      try {
        const Qe = await M();
        if (je(ne), Qe.status !== "success") {
          if (Me(Qe.message || "Update failed", "error"), Qe.manual_instructions) {
            const at = Qe.manual_instructions.split(`
`).map((vt) => vt.trim()).filter(Boolean);
            D.value = {
              title: "Manual Update Required",
              message: "Self-update failed. Follow these steps:",
              details: at,
              confirmLabel: "OK",
              cancelLabel: "Close",
              onConfirm: () => {
                D.value = null;
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
        je(ne);
        const at = Qe instanceof Error ? Qe.message : "Update failed";
        Me(at, "error");
      } finally {
        K.value = !1;
      }
    }
    const de = N(() => {
      if (!A.value) return "neutral";
      const ne = A.value.workflows, J = ne.new.length > 0 || ne.modified.length > 0 || ne.deleted.length > 0 || A.value.has_changes;
      return A.value.comparison.is_synced ? J ? "warning" : "success" : "error";
    });
    N(() => A.value ? de.value === "success" ? "All synced" : de.value === "warning" ? "Uncommitted changes" : de.value === "error" ? "Not synced" : "" : "");
    async function We(ne = {}) {
      me.value = !0, Re.value = null;
      try {
        const [J, qe, Qe, at] = await Promise.all([
          l(!0),
          r(),
          u(),
          g()
        ]);
        A.value = J, B.value = qe.commits, j.value = Qe.branches, E.value = at, n("statusUpdate", J), (ne.refreshWorkflows ?? !0) && xe.value && await xe.value.loadWorkflows(!0);
      } catch (J) {
        Re.value = J instanceof Error ? J.message : "Failed to load status", A.value = null, B.value = [], j.value = [];
      } finally {
        me.value = !1;
      }
    }
    function ut(ne) {
      Ge.value = ne;
    }
    async function Ct(ne) {
      var qe;
      Ge.value = null;
      const J = A.value && (A.value.workflows.new.length > 0 || A.value.workflows.modified.length > 0 || A.value.workflows.deleted.length > 0 || A.value.has_changes);
      D.value = {
        title: J ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: J ? "You have uncommitted changes that will be lost." : `Checkout commit ${ne.short_hash || ((qe = ne.hash) == null ? void 0 : qe.slice(0, 7))}?`,
        details: J ? hn() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: J ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: J,
        onConfirm: async () => {
          var vt;
          D.value = null, Js();
          const Qe = Me(`Checking out ${ne.short_hash || ((vt = ne.hash) == null ? void 0 : vt.slice(0, 7))}...`, "info", 0), at = await c(ne.hash, J);
          je(Qe), at.status === "success" ? Me("Restarting ComfyUI...", "success") : Me(at.message || "Checkout failed", "error");
        }
      };
    }
    async function lt(ne) {
      const J = A.value && (A.value.workflows.new.length > 0 || A.value.workflows.modified.length > 0 || A.value.workflows.deleted.length > 0 || A.value.has_changes);
      D.value = {
        title: J ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: J ? "You have uncommitted changes." : `Switch to branch "${ne}"?`,
        details: J ? hn() : void 0,
        warning: J ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: J ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          D.value = null, Js();
          const qe = Me(`Switching to ${ne}...`, "info", 0), Qe = await m(ne, J);
          je(qe), Qe.status === "success" ? Me("Restarting ComfyUI...", "success") : Me(Qe.message || "Branch switch failed", "error");
        }
      };
    }
    async function xt(ne) {
      const J = Me(`Creating branch ${ne}...`, "info", 0), qe = await d(ne);
      je(J), qe.status === "success" ? (Me(`Branch "${ne}" created`, "success"), await We()) : Me(qe.message || "Failed to create branch", "error");
    }
    async function ts(ne, J = !1) {
      const qe = async (Qe) => {
        var vt;
        const at = Me(`Deleting branch ${ne}...`, "info", 0);
        try {
          const Nt = await v(ne, Qe);
          je(at), Nt.status === "success" ? (Me(`Branch "${ne}" deleted`, "success"), await We()) : (vt = Nt.message) != null && vt.includes("not fully merged") ? D.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${ne}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              D.value = null, await qe(!0);
            }
          } : Me(Nt.message || "Failed to delete branch", "error");
        } catch (Nt) {
          je(at);
          const G = Nt instanceof Error ? Nt.message : "Failed to delete branch";
          G.includes("not fully merged") ? D.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${ne}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              D.value = null, await qe(!0);
            }
          } : Me(G, "error");
        }
      };
      D.value = {
        title: "Delete Branch",
        message: `Delete branch "${ne}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          D.value = null, await qe(J);
        }
      };
    }
    async function Is(ne) {
      Ge.value = null;
      const J = prompt("Enter branch name:");
      if (J) {
        const qe = Me(`Creating branch ${J}...`, "info", 0), Qe = await d(J, ne.hash);
        je(qe), Qe.status === "success" ? (Me(`Branch "${J}" created from ${ne.short_hash}`, "success"), await We()) : Me(Qe.message || "Failed to create branch", "error");
      }
    }
    function Js() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function ca() {
      if (!O.value.can_restart_current) {
        Me("Restart is not available in this runtime context.", "warning");
        return;
      }
      D.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var ne;
          D.value = null, Js(), Me("Restarting environment...", "info");
          try {
            (ne = window.app) != null && ne.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function ua() {
      if (!O.value.can_stop_current) {
        Me("Stop is not available in this runtime context.", "warning");
        return;
      }
      D.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var ne;
          D.value = null, Me("Stopping environment...", "info");
          try {
            (ne = window.app) != null && ne.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function zs(ne, J) {
      if (!O.value.can_switch_environment) {
        Me("Environment switching is not available in this runtime context.", "warning");
        return;
      }
      Ee.value = !1, ie.value = ne, Ce.value = J || null, I.value = !0;
    }
    async function da() {
      I.value = !1, z.value = !0, Js(), _e.value = {
        progress: 10,
        state: co(10),
        message: uo(10)
      };
      try {
        await w(ie.value, Ce.value || void 0), fa(), ma();
      } catch (ne) {
        Es(), z.value = !1, Me(`Failed to initiate switch: ${ne instanceof Error ? ne.message : "Unknown error"}`, "error"), _e.value = { state: "idle", progress: 0, message: "" }, Ce.value = null;
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
      if (Ae) return;
      let ne = 10;
      const J = 60, qe = 5e3, Qe = 100, at = (J - ne) / (qe / Qe);
      Ae = window.setInterval(() => {
        if (ne += at, ne >= J && (ne = J, Es()), _e.value.progress < J) {
          const vt = Math.floor(ne);
          _e.value = {
            progress: vt,
            state: co(vt),
            message: uo(vt)
          };
        }
      }, Qe);
    }
    function Es() {
      Ae && (clearInterval(Ae), Ae = null);
    }
    function ma() {
      $e || ($e = window.setInterval(async () => {
        try {
          let ne = await P.getStatus();
          if ((!ne || ne.state === "idle") && (ne = await p()), !ne)
            return;
          const J = ne.progress || 0;
          J >= 60 && Es();
          const qe = Math.max(J, _e.value.progress), Qe = ne.state && ne.state !== "idle" && ne.state !== "unknown", at = Qe ? ne.state : co(qe), vt = Qe && ne.message || uo(qe);
          _e.value = {
            state: at,
            progress: qe,
            message: vt
          }, ne.state === "complete" ? (Es(), Do(), z.value = !1, Me(`✓ Switched to ${ie.value}`, "success"), await We(), ie.value = "") : ne.state === "rolled_back" ? (Es(), Do(), z.value = !1, Me("Switch failed, restored previous environment", "warning"), ie.value = "") : ne.state === "critical_failure" && (Es(), Do(), z.value = !1, Me(`Critical error during switch: ${ne.message}`, "error"), ie.value = "");
        } catch (ne) {
          console.error("Failed to poll switch progress:", ne);
        }
      }, 1e3));
    }
    function Do() {
      Es(), $e && (clearInterval($e), $e = null);
    }
    function va() {
      var ne;
      I.value = !1, ie.value = "", (ne = F.value) != null && ne.state && F.value.state !== "managed" && (Pe.value = F.value.state === "no_workspace" ? 1 : 2, Q.value = !0);
    }
    async function pa(ne) {
      U.value = !1, await We(), Me(ne.message, ne.success ? "success" : "error");
    }
    async function ga() {
      ee.value = !1;
      const ne = Me("Syncing environment...", "info", 0);
      try {
        const J = await x("skip", !0);
        if (je(ne), J.status === "success") {
          const qe = [];
          J.nodes_installed.length && qe.push(`${J.nodes_installed.length} installed`), J.nodes_removed.length && qe.push(`${J.nodes_removed.length} removed`);
          const Qe = qe.length ? `: ${qe.join(", ")}` : "";
          Me(`✓ Environment synced${Qe}`, "success"), await We();
        } else {
          const qe = J.errors.length ? J.errors.join("; ") : J.message;
          Me(`Sync failed: ${qe}`, "error");
        }
      } catch (J) {
        je(ne), Me(`Sync error: ${J instanceof Error ? J.message : "Unknown error"}`, "error");
      }
    }
    async function ha(ne) {
      var J;
      try {
        const qe = await C(ne);
        qe.failed.length === 0 ? Me(`✓ Repaired ${qe.success} workflow${qe.success === 1 ? "" : "s"}`, "success") : Me(`Repaired ${qe.success}, failed: ${qe.failed.length}`, "warning"), await We();
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
        if (je(ne), Qe.status === "success") {
          const at = [];
          Qe.nodes_installed.length && at.push(`${Qe.nodes_installed.length} installed`), Qe.nodes_removed.length && at.push(`${Qe.nodes_removed.length} removed`);
          const vt = at.length ? `: ${at.join(", ")}` : "";
          Me(`✓ Environment repaired${vt}`, "success"), (J = le.value) == null || J.closeDetailModal(), await We();
        } else {
          const at = Qe.errors.length ? Qe.errors.join(", ") : Qe.message || "Unknown error";
          Me(`Repair failed: ${at}`, "error");
        }
      } catch (Qe) {
        je(ne), Me(`Repair error: ${Qe instanceof Error ? Qe.message : "Unknown error"}`, "error");
      } finally {
        (qe = le.value) == null || qe.resetRepairingEnvironmentState();
      }
    }
    async function ya(ne, J) {
      Me(`Environment '${ne}' created`, "success"), await We(), ce.value && await ce.value.loadEnvironments(), J && O.value.can_switch_environment && await zs(ne);
    }
    async function wa(ne) {
      var J;
      if (!O.value.can_delete_environment) {
        Me("Environment deletion is not available in this runtime context.", "warning");
        return;
      }
      if (((J = V.value) == null ? void 0 : J.name) === ne) {
        Me("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      D.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${ne}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          D.value = null;
          try {
            const qe = await _(ne);
            qe.status === "success" ? (Me(`Environment "${ne}" deleted`, "success"), await We(), ce.value && await ce.value.loadEnvironments()) : Me(qe.message || "Failed to delete environment", "error");
          } catch (qe) {
            Me(`Error deleting environment: ${qe instanceof Error ? qe.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function _a(ne, J) {
      Q.value = !1;
      try {
        F.value = await S();
      } catch {
      }
      O.value.can_switch_environment && await zs(ne, J);
    }
    function ka() {
      Q.value = !1, n("close");
    }
    async function ba(ne, J) {
      await zs(ne, J);
    }
    async function $a(ne) {
      fe.value = !1, await We(), await zs(ne);
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
      F.value = await S(), console.log(`Environment '${ne}' created. Available for switching.`);
    }
    function Ia() {
      if (!O.value.can_create_environment) {
        Me("Environment creation is not available in this runtime context.", "warning");
        return;
      }
      ke("environments", "workspace"), setTimeout(() => {
        var ne;
        (ne = ce.value) == null || ne.openCreateModal();
      }, 100);
    }
    function hn() {
      if (!A.value) return [];
      const ne = [], J = A.value.workflows;
      return J.new.length && ne.push(`${J.new.length} new workflow(s)`), J.modified.length && ne.push(`${J.modified.length} modified workflow(s)`), J.deleted.length && ne.push(`${J.deleted.length} deleted workflow(s)`), ne;
    }
    return rt(async () => {
      try {
        if (F.value = await S(), F.value.state === "no_workspace" && O.value.can_initialize_workspace) {
          Q.value = !0, Pe.value = 1;
          return;
        }
        if (F.value.state === "empty_workspace" && O.value.can_create_environment) {
          Q.value = !0, Pe.value = 2;
          return;
        }
        if (F.value.state === "unmanaged" && O.value.can_switch_environment) {
          Q.value = !0, Pe.value = 2;
          return;
        }
      } catch (ne) {
        console.warn("Setup status check failed, proceeding normally:", ne);
      }
      await Promise.all([
        We({ refreshWorkflows: !1 }),
        bt()
      ]);
    }), (ne, J) => {
      var qe, Qe, at, vt, Nt, G, ye, Be, dt, Dt, jt, gs, ss;
      return a(), i("div", AE, [
        s("div", UE, [
          s("div", zE, [
            J[27] || (J[27] = s("h2", { class: "panel-title" }, "ComfyGit", -1)),
            A.value ? (a(), i("div", FE)) : y("", !0)
          ]),
          s("div", VE, [
            b(gc),
            J[30] || (J[30] = s("span", { class: "header-divider" }, null, -1)),
            s("button", {
              class: Fe(["icon-btn", { spinning: me.value }]),
              onClick: We,
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
        X.value && H.value ? (a(), R(NE, {
          key: 0,
          info: H.value,
          updating: K.value,
          onUpdate: W,
          onDismiss: re,
          onReleaseNotes: It
        }, null, 8, ["info", "updating"])) : y("", !0),
        s("div", BE, [
          s("div", WE, [
            J[31] || (J[31] = s("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            s("div", GE, [
              O.value.can_restart_current ? (a(), i("button", {
                key: 0,
                class: "env-control-btn",
                title: "Restart environment",
                onClick: ca
              }, " Restart ")) : y("", !0),
              O.value.can_stop_current ? (a(), i("button", {
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
            A.value ? (a(), i("div", jE, [
              s("span", null, f(((qe = V.value) == null ? void 0 : qe.name) || ((Qe = A.value) == null ? void 0 : Qe.environment) || "Loading..."), 1),
              s("span", HE, "(" + f(A.value.branch || "detached") + ")", 1)
            ])) : y("", !0),
            J[32] || (J[32] = s("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        s("div", qE, [
          s("div", KE, [
            s("div", JE, [
              s("div", QE, [
                J[33] || (J[33] = s("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
                s("button", {
                  class: Fe(["sidebar-item", { active: Y.value === "status" && He.value === "this-env" }]),
                  onClick: J[2] || (J[2] = (Ze) => ke("status", "this-env"))
                }, " STATUS ", 2),
                s("button", {
                  class: Fe(["sidebar-item", { active: Y.value === "workflows" }]),
                  onClick: J[3] || (J[3] = (Ze) => ke("workflows", "this-env"))
                }, " WORKFLOWS ", 2),
                s("button", {
                  class: Fe(["sidebar-item", { active: Y.value === "models-env" }]),
                  onClick: J[4] || (J[4] = (Ze) => ke("models-env", "this-env"))
                }, " MODELS ", 2),
                s("button", {
                  class: Fe(["sidebar-item", { active: Y.value === "nodes" }]),
                  onClick: J[5] || (J[5] = (Ze) => ke("nodes", "this-env"))
                }, " NODES ", 2),
                s("button", {
                  class: Fe(["sidebar-item", { active: Y.value === "version-control" }]),
                  onClick: J[6] || (J[6] = (Ze) => ot("history"))
                }, " VERSION CONTROL ", 2)
              ]),
              J[36] || (J[36] = s("div", { class: "sidebar-divider" }, null, -1)),
              s("div", YE, [
                J[34] || (J[34] = s("div", { class: "sidebar-section-title" }, "WORKSPACE", -1)),
                s("button", {
                  class: Fe(["sidebar-item", { active: Y.value === "environments" }]),
                  onClick: J[7] || (J[7] = (Ze) => ke("environments", "workspace"))
                }, " ENVIRONMENTS ", 2),
                s("button", {
                  class: Fe(["sidebar-item", { active: Y.value === "model-index" }]),
                  onClick: J[8] || (J[8] = (Ze) => ke("model-index", "workspace"))
                }, " MODEL INDEX ", 2),
                s("button", {
                  class: Fe(["sidebar-item", { active: Y.value === "settings" }]),
                  onClick: J[9] || (J[9] = (Ze) => ke("settings", "workspace"))
                }, " SETTINGS ", 2)
              ]),
              J[37] || (J[37] = s("div", { class: "sidebar-divider" }, null, -1)),
              s("div", XE, [
                J[35] || (J[35] = s("div", { class: "sidebar-section-title" }, "DIAGNOSTICS", -1)),
                s("button", {
                  class: Fe(["sidebar-item", { active: Y.value === "diagnostics" && se.value === "manifest" }]),
                  onClick: J[10] || (J[10] = (Ze) => Ue("manifest"))
                }, " MANIFEST ", 2),
                s("button", {
                  class: Fe(["sidebar-item", { active: Y.value === "diagnostics" && se.value !== "manifest" }]),
                  onClick: J[11] || (J[11] = (Ze) => Ue("env"))
                }, " LOGGING ", 2)
              ])
            ]),
            s("div", ZE, [
              b(hc)
            ])
          ]),
          s("div", eT, [
            Re.value ? (a(), i("div", tT, f(Re.value), 1)) : !A.value && Y.value === "status" ? (a(), i("div", sT, " Loading status... ")) : (a(), i(q, { key: 2 }, [
              Y.value === "status" ? (a(), R(Ov, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: le,
                status: A.value,
                "setup-state": te.value,
                onSwitchBranch: L,
                onCommitChanges: J[12] || (J[12] = (Ze) => U.value = !0),
                onSyncEnvironment: J[13] || (J[13] = (Ze) => ee.value = !0),
                onViewWorkflows: J[14] || (J[14] = (Ze) => ke("workflows", "this-env")),
                onViewHistory: J[15] || (J[15] = (Ze) => ot("history")),
                onViewDebug: J[16] || (J[16] = (Ze) => Ue("env")),
                onViewNodes: J[17] || (J[17] = (Ze) => ke("nodes", "this-env")),
                onRepairMissingModels: ha,
                onRepairEnvironment: pn,
                onStartSetup: J[18] || (J[18] = (Ze) => Q.value = !0),
                onViewEnvironments: J[19] || (J[19] = (Ze) => ke("environments", "workspace")),
                onCreateEnvironment: Ia
              }, null, 8, ["status", "setup-state"])) : Y.value === "workflows" ? (a(), R(A0, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: xe,
                onRefresh: We
              }, null, 512)) : Y.value === "models-env" ? (a(), R(Xk, {
                key: 2,
                onNavigate: Ye
              })) : Y.value === "version-control" ? (a(), R(M4, {
                key: 3,
                commits: B.value,
                "current-ref": (at = A.value) == null ? void 0 : at.branch,
                branches: j.value,
                current: ((vt = A.value) == null ? void 0 : vt.branch) || null,
                "initial-tab": we.value,
                onSelect: ut,
                onCheckout: Ct,
                onSwitch: lt,
                onCreate: xt,
                onDelete: ts,
                onToast: nt
              }, null, 8, ["commits", "current-ref", "branches", "current", "initial-tab"])) : Y.value === "nodes" ? (a(), R(qb, {
                key: 4,
                "version-mismatches": ((G = (Nt = A.value) == null ? void 0 : Nt.comparison) == null ? void 0 : G.version_mismatches) || [],
                onOpenNodeManager: oe,
                onRepairEnvironment: pn,
                onToast: nt
              }, null, 8, ["version-mismatches"])) : Y.value === "diagnostics" ? (a(), R(G4, {
                key: 5,
                "initial-tab": se.value
              }, null, 8, ["initial-tab"])) : Y.value === "environments" ? (a(), R(H$, {
                key: 6,
                ref_key: "environmentsSectionRef",
                ref: ce,
                "can-create": O.value.can_create_environment,
                "can-switch": O.value.can_switch_environment,
                "can-delete": O.value.can_delete_environment,
                onSwitch: zs,
                onCreated: ya,
                onDelete: wa,
                onImport: Ca,
                onExport: xa
              }, null, 8, ["can-create", "can-switch", "can-delete"])) : Y.value === "model-index" ? (a(), R(fb, {
                key: 7,
                onRefresh: We
              })) : Y.value === "settings" ? (a(), R(_2, { key: 8 })) : y("", !0)
            ], 64))
          ])
        ]),
        Ge.value ? (a(), R(rI, {
          key: 1,
          commit: Ge.value,
          onClose: J[20] || (J[20] = (Ze) => Ge.value = null),
          onCheckout: Ct,
          onCreateBranch: Is
        }, null, 8, ["commit"])) : y("", !0),
        D.value ? (a(), R(Il, {
          key: 2,
          title: D.value.title,
          message: D.value.message,
          details: D.value.details,
          warning: D.value.warning,
          confirmLabel: D.value.confirmLabel,
          cancelLabel: D.value.cancelLabel,
          secondaryLabel: D.value.secondaryLabel,
          secondaryAction: D.value.secondaryAction,
          destructive: D.value.destructive,
          onConfirm: D.value.onConfirm,
          onCancel: J[21] || (J[21] = (Ze) => D.value = null),
          onSecondary: D.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : y("", !0),
        fe.value ? (a(), R(Tt, {
          key: 3,
          title: "IMPORT ENVIRONMENT",
          size: "xl",
          "fixed-height": "",
          onClose: J[22] || (J[22] = (Ze) => fe.value = !1)
        }, {
          body: h(() => [
            b(s5, {
              embedded: "",
              onImportCompleteSwitch: $a
            })
          ]),
          _: 1
        })) : y("", !0),
        ue.value ? (a(), R(Tt, {
          key: 4,
          title: ae.value ? `EXPORT ENVIRONMENT: ${ae.value.toUpperCase()}` : "EXPORT ENVIRONMENT",
          size: "md",
          onClose: gn
        }, {
          body: h(() => [
            b(ix, {
              embedded: "",
              "environment-name": ae.value,
              onClose: gn
            }, null, 8, ["environment-name"])
          ]),
          _: 1
        }, 8, ["title"])) : y("", !0),
        b(ZI, {
          show: I.value,
          "from-environment": ((ye = V.value) == null ? void 0 : ye.name) || "unknown",
          "to-environment": ie.value,
          onConfirm: da,
          onClose: va
        }, null, 8, ["show", "from-environment", "to-environment"]),
        U.value && A.value ? (a(), R(pc, {
          key: 5,
          status: A.value,
          "as-modal": !0,
          onClose: J[23] || (J[23] = (Ze) => U.value = !1),
          onCommitted: pa
        }, null, 8, ["status"])) : y("", !0),
        ee.value && A.value ? (a(), R(w6, {
          key: 6,
          show: ee.value,
          "mismatch-details": {
            missing_nodes: A.value.comparison.missing_nodes,
            extra_nodes: A.value.comparison.extra_nodes
          },
          onConfirm: ga,
          onClose: J[24] || (J[24] = (Ze) => ee.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : y("", !0),
        b(u6, {
          show: z.value,
          state: _e.value.state,
          progress: _e.value.progress,
          message: _e.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        Ee.value ? (a(), i("div", {
          key: 7,
          class: "dialog-overlay",
          onClick: J[26] || (J[26] = mt((Ze) => Ee.value = !1, ["self"]))
        }, [
          s("div", oT, [
            s("div", nT, [
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
            s("div", aT, [
              J[40] || (J[40] = s("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              s("div", lT, [
                (a(!0), i(q, null, he(E.value, (Ze) => (a(), i("div", {
                  key: Ze.name,
                  class: Fe(["env-item", { current: Ze.is_current }])
                }, [
                  s("div", iT, [
                    s("div", rT, [
                      s("span", cT, f(Ze.is_current ? "●" : "○"), 1),
                      s("span", uT, f(Ze.name), 1),
                      Ze.current_branch ? (a(), i("span", dT, "(" + f(Ze.current_branch) + ")", 1)) : y("", !0),
                      Ze.is_current ? (a(), i("span", fT, "CURRENT")) : y("", !0)
                    ]),
                    s("div", mT, f(Ze.workflow_count) + " workflows • " + f(Ze.node_count) + " nodes ", 1)
                  ]),
                  !Ze.is_current && O.value.can_switch_environment ? (a(), i("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (Ea) => zs(Ze.name)
                  }, " SWITCH ", 8, vT)) : y("", !0)
                ], 2))), 128))
              ])
            ])
          ])
        ])) : y("", !0),
        Q.value ? (a(), R($E, {
          key: 8,
          "default-path": ((Be = F.value) == null ? void 0 : Be.default_path) || "~/comfygit",
          "detected-models-dir": ((dt = F.value) == null ? void 0 : dt.detected_models_dir) || null,
          "initial-step": Pe.value,
          "existing-environments": ((Dt = F.value) == null ? void 0 : Dt.environments) || [],
          "cli-installed": ((jt = F.value) == null ? void 0 : jt.cli_installed) ?? !0,
          "setup-state": ((gs = F.value) == null ? void 0 : gs.state) || "no_workspace",
          "workspace-path": ((ss = F.value) == null ? void 0 : ss.workspace_path) || null,
          onComplete: _a,
          onClose: ka,
          onSwitchEnvironment: ba,
          onEnvironmentCreatedNoSwitch: Sa
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state", "workspace-path"])) : y("", !0),
        s("div", pT, [
          b(qd, { name: "toast" }, {
            default: h(() => [
              (a(!0), i(q, null, he(De.value, (Ze) => (a(), i("div", {
                key: Ze.id,
                class: Fe(["toast", Ze.type])
              }, [
                s("span", gT, f(Ze.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), yT = /* @__PURE__ */ Se(hT, [["__scopeId", "data-v-f059e95d"]]), wT = { class: "item-header" }, _T = { class: "item-info" }, kT = { class: "filename" }, bT = { class: "metadata" }, $T = { class: "size" }, CT = {
  key: 0,
  class: "type"
}, xT = { class: "item-actions" }, ST = {
  key: 0,
  class: "progress-section"
}, IT = { class: "progress-bar" }, ET = { class: "progress-stats" }, TT = { class: "downloaded" }, MT = { class: "speed" }, PT = {
  key: 0,
  class: "eta"
}, RT = {
  key: 1,
  class: "status-msg paused"
}, NT = {
  key: 2,
  class: "status-msg queued"
}, DT = {
  key: 3,
  class: "status-msg completed"
}, LT = {
  key: 4,
  class: "status-msg failed"
}, OT = {
  key: 0,
  class: "retries"
}, AT = /* @__PURE__ */ be({
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
      s("div", wT, [
        s("div", _T, [
          s("div", kT, f(e.item.filename), 1),
          s("div", bT, [
            s("span", $T, f(n(e.item.size)), 1),
            e.item.type ? (a(), i("span", CT, f(e.item.type), 1)) : y("", !0)
          ])
        ]),
        s("div", xT, [
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
      e.item.status === "downloading" ? (a(), i("div", ST, [
        s("div", IT, [
          s("div", {
            class: "progress-fill",
            style: At({ width: `${e.item.progress}%` })
          }, null, 4)
        ]),
        s("div", ET, [
          s("span", TT, f(n(e.item.downloaded)) + " / " + f(n(e.item.size)), 1),
          s("span", MT, f(l(e.item.speed)), 1),
          e.item.eta > 0 ? (a(), i("span", PT, f(r(e.item.eta)), 1)) : y("", !0)
        ])
      ])) : e.item.status === "paused" ? (a(), i("div", RT, " Paused - click Resume to download ")) : e.item.status === "queued" ? (a(), i("div", NT, " Waiting in queue... ")) : e.item.status === "completed" ? (a(), i("div", DT, " ✓ Downloaded ")) : e.item.status === "failed" ? (a(), i("div", LT, [
        $(" ✗ " + f(e.item.error || "Failed") + " ", 1),
        e.item.retries > 0 ? (a(), i("span", OT, "(" + f(e.item.retries) + " retries)", 1)) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), Uo = /* @__PURE__ */ Se(AT, [["__scopeId", "data-v-2110df65"]]), UT = { class: "queue-title" }, zT = { class: "count" }, FT = { class: "queue-actions" }, VT = { class: "action-label" }, BT = {
  key: 0,
  class: "overall-progress"
}, WT = { class: "progress-bar" }, GT = {
  key: 0,
  class: "current-mini"
}, jT = { class: "filename" }, HT = { class: "speed" }, qT = {
  key: 1,
  class: "queue-content"
}, KT = {
  key: 0,
  class: "section"
}, JT = {
  key: 1,
  class: "section"
}, QT = { class: "section-header" }, YT = { class: "section-label paused" }, XT = { class: "items-list" }, ZT = {
  key: 2,
  class: "section"
}, eM = { class: "section-header" }, tM = { class: "section-label" }, sM = { class: "items-list" }, oM = {
  key: 3,
  class: "section"
}, nM = { class: "section-header" }, aM = { class: "section-label" }, lM = { class: "items-list" }, iM = {
  key: 4,
  class: "section"
}, rM = { class: "section-header" }, cM = { class: "section-label failed" }, uM = { class: "items-list" }, dM = /* @__PURE__ */ be({
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
      resumeDownload: g,
      resumeAllPaused: w,
      removeItem: p,
      clearCompleted: _
    } = No(), x = k(!1);
    let C = null;
    kt(
      () => ({
        active: d.value,
        failed: r.value.length,
        paused: u.value.length,
        completed: l.value.length
      }),
      (P, A) => {
        C && (clearTimeout(C), C = null);
        const B = P.active === 0 && P.failed === 0 && P.paused === 0 && P.completed > 0, j = A && (A.active > 0 || A.paused > 0);
        B && j && (C = setTimeout(() => {
          _(), C = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const S = N(() => {
      var B;
      if (t.items.length === 0) return 0;
      const P = l.value.length, A = ((B = o.value) == null ? void 0 : B.progress) || 0;
      return Math.round((P + A / 100) / t.items.length * 100);
    });
    function T(P) {
      m(P);
    }
    function M(P) {
      return P === 0 ? "..." : `${(P / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (P, A) => (a(), R(Rt, { to: "body" }, [
      tt(c) ? (a(), i("div", {
        key: 0,
        class: Fe(["model-download-queue", { minimized: !x.value }])
      }, [
        s("div", {
          class: "queue-header",
          onClick: A[0] || (A[0] = (B) => x.value = !x.value)
        }, [
          s("div", UT, [
            A[4] || (A[4] = s("span", { class: "icon" }, "↓", -1)),
            A[5] || (A[5] = s("span", { class: "title" }, "Downloads", -1)),
            s("span", zT, "(" + f(tt(d)) + "/" + f(tt(t).items.length) + ")", 1)
          ]),
          s("div", FT, [
            s("span", VT, f(x.value ? "minimize" : "expand"), 1)
          ])
        ]),
        x.value ? (a(), i("div", qT, [
          tt(o) ? (a(), i("div", KT, [
            A[6] || (A[6] = s("div", { class: "section-label" }, "Downloading", -1)),
            b(Uo, {
              item: tt(o),
              onCancel: A[1] || (A[1] = (B) => T(tt(o).id))
            }, null, 8, ["item"])
          ])) : y("", !0),
          tt(u).length > 0 ? (a(), i("div", JT, [
            s("div", QT, [
              s("span", YT, "Paused (" + f(tt(u).length) + ")", 1),
              s("button", {
                class: "resume-all-btn",
                onClick: A[2] || (A[2] = //@ts-ignore
                (...B) => tt(w) && tt(w)(...B))
              }, "Resume All")
            ]),
            s("div", XT, [
              (a(!0), i(q, null, he(tt(u), (B) => (a(), R(Uo, {
                key: B.id,
                item: B,
                onResume: (j) => tt(g)(B.id),
                onRemove: (j) => tt(p)(B.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          tt(n).length > 0 ? (a(), i("div", ZT, [
            s("div", eM, [
              s("span", tM, "Queued (" + f(tt(n).length) + ")", 1)
            ]),
            s("div", sM, [
              (a(!0), i(q, null, he(tt(n), (B) => (a(), R(Uo, {
                key: B.id,
                item: B,
                onCancel: (j) => T(B.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : y("", !0),
          tt(l).length > 0 ? (a(), i("div", oM, [
            s("div", nM, [
              s("span", aM, "Completed (" + f(tt(l).length) + ")", 1),
              s("button", {
                class: "clear-btn",
                onClick: A[3] || (A[3] = //@ts-ignore
                (...B) => tt(_) && tt(_)(...B))
              }, "Clear")
            ]),
            s("div", lM, [
              (a(!0), i(q, null, he(tt(l).slice(0, 3), (B) => (a(), R(Uo, {
                key: B.id,
                item: B,
                onRemove: (j) => tt(p)(B.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          tt(r).length > 0 ? (a(), i("div", iM, [
            s("div", rM, [
              s("span", cM, "Failed (" + f(tt(r).length) + ")", 1)
            ]),
            s("div", uM, [
              (a(!0), i(q, null, he(tt(r), (B) => (a(), R(Uo, {
                key: B.id,
                item: B,
                onRetry: (j) => tt(v)(B.id),
                onRemove: (j) => tt(p)(B.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : y("", !0)
        ])) : (a(), i("div", BT, [
          s("div", WT, [
            s("div", {
              class: "progress-fill",
              style: At({ width: `${S.value}%` })
            }, null, 4)
          ]),
          tt(o) ? (a(), i("div", GT, [
            s("span", jT, f(tt(o).filename), 1),
            s("span", HT, f(M(tt(o).speed)), 1)
          ])) : y("", !0)
        ]))
      ], 2)) : y("", !0)
    ]));
  }
}), fM = /* @__PURE__ */ Se(dM, [["__scopeId", "data-v-3a3c9607"]]), mM = { class: "detail-header" }, vM = { class: "item-count" }, pM = { class: "resource-list" }, gM = { class: "item-info" }, hM = { class: "item-name" }, yM = {
  key: 0,
  class: "item-subtitle"
}, wM = {
  key: 0,
  class: "installing-badge"
}, _M = ["title"], kM = {
  key: 2,
  class: "installed-badge"
}, bM = {
  key: 3,
  class: "queued-badge"
}, $M = {
  key: 4,
  class: "action-buttons"
}, CM = {
  key: 1,
  class: "no-action"
}, xM = /* @__PURE__ */ be({
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
    const o = e, n = t, l = N(() => o.items.filter((p) => p.canAction)), r = N(() => l.value.length > 0 && l.value.every(
      (p) => {
        var _, x;
        return o.queuedItems.has(p.id) || ((_ = o.installedItems) == null ? void 0 : _.has(p.id)) || ((x = o.failedItems) == null ? void 0 : x.has(p.id));
      }
    )), u = N(() => r.value ? "All Queued" : o.itemType === "models" ? "Download All" : "Install All");
    function c(p) {
      return o.queuedItems.has(p.id);
    }
    function d(p) {
      return o.installingItem === p.id;
    }
    function m(p) {
      var _;
      return ((_ = o.installedItems) == null ? void 0 : _.has(p.id)) ?? !1;
    }
    function v(p) {
      var _;
      return ((_ = o.failedItems) == null ? void 0 : _.has(p.id)) ?? !1;
    }
    function g(p) {
      var _;
      return ((_ = o.failedItems) == null ? void 0 : _.get(p.id)) || "Unknown error";
    }
    function w(p) {
      return p.actions && p.actions.length > 0 ? p.actions : [{
        key: "default",
        label: o.itemType === "models" ? "Download" : "Install",
        variant: "secondary"
      }];
    }
    return (p, _) => (a(), R(Tt, {
      title: e.title,
      size: "md",
      onClose: _[2] || (_[2] = (x) => n("close"))
    }, {
      body: h(() => [
        s("div", mM, [
          s("span", vM, f(e.items.length) + " " + f(e.items.length === 1 ? "item" : "items"), 1),
          l.value.length > 1 ? (a(), R(Oe, {
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
        s("div", pM, [
          (a(!0), i(q, null, he(e.items, (x) => (a(), i("div", {
            key: x.id,
            class: "resource-item"
          }, [
            s("div", gM, [
              s("span", hM, f(x.name), 1),
              x.subtitle ? (a(), i("span", yM, f(x.subtitle), 1)) : y("", !0)
            ]),
            x.canAction ? (a(), i(q, { key: 0 }, [
              d(x) ? (a(), i("span", wM, "Installing...")) : v(x) ? (a(), i("span", {
                key: 1,
                class: "failed-badge",
                title: g(x)
              }, "Failed ⚠", 8, _M)) : m(x) ? (a(), i("span", kM, "Installed")) : c(x) ? (a(), i("span", bM, "Queued")) : (a(), i("div", $M, [
                (a(!0), i(q, null, he(w(x), (C) => (a(), R(Oe, {
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
            ], 64)) : (a(), i("span", CM, f(x.actionDisabledReason || "Not available"), 1))
          ]))), 128))
        ])
      ]),
      footer: h(() => [
        b(Oe, {
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
}), SM = /* @__PURE__ */ Se(xM, [["__scopeId", "data-v-ec7e9202"]]), IM = {
  key: 0,
  class: "loading-state"
}, EM = {
  key: 1,
  class: "analysis-results"
}, TM = {
  key: 0,
  class: "section"
}, MM = { class: "section-header" }, PM = { class: "section-title" }, RM = { class: "item-list" }, NM = { class: "package-info" }, DM = { class: "package-name" }, LM = { class: "node-count" }, OM = {
  key: 1,
  class: "installing-badge"
}, AM = {
  key: 2,
  class: "queued-badge"
}, UM = ["title"], zM = {
  key: 4,
  class: "installed-badge"
}, FM = {
  key: 1,
  class: "section"
}, VM = { class: "section-header" }, BM = { class: "section-title" }, WM = { class: "item-list" }, GM = { class: "node-type" }, jM = {
  key: 0,
  class: "overflow-note"
}, HM = {
  key: 2,
  class: "section"
}, qM = { class: "section-header" }, KM = { class: "section-title" }, JM = { class: "item-list" }, QM = { class: "node-type" }, YM = { class: "not-found" }, XM = {
  key: 0,
  class: "overflow-note"
}, ZM = {
  key: 3,
  class: "section"
}, e7 = { class: "section-header" }, t7 = { class: "section-title" }, s7 = { class: "item-list" }, o7 = { class: "package-info community-info" }, n7 = { class: "community-title-row" }, a7 = { class: "package-name" }, l7 = { class: "node-count" }, i7 = { class: "community-mapping-note" }, r7 = { key: 0 }, c7 = {
  key: 0,
  class: "community-actions"
}, u7 = {
  key: 1,
  class: "installing-badge"
}, d7 = {
  key: 2,
  class: "queued-badge"
}, f7 = ["title"], m7 = {
  key: 4,
  class: "installed-badge"
}, v7 = ["title"], p7 = {
  key: 1,
  class: "no-url"
}, g7 = {
  key: 4,
  class: "section"
}, h7 = { class: "section-header" }, y7 = { class: "section-title" }, w7 = { class: "item-list" }, _7 = { class: "model-info" }, k7 = { class: "model-name" }, b7 = {
  key: 1,
  class: "queued-badge"
}, $7 = {
  key: 1,
  class: "no-url"
}, C7 = { class: "dont-show-again" }, x7 = 3e4, S7 = /* @__PURE__ */ be({
  __name: "MissingResourcesPopup",
  setup(e) {
    const t = k(!1), o = k(null), n = k(null), l = k(!1), r = k(/* @__PURE__ */ new Set()), u = k(/* @__PURE__ */ new Set()), c = k(/* @__PURE__ */ new Map()), d = k(/* @__PURE__ */ new Set()), m = k(!1), v = k(null), g = k(0), w = k(null), p = k(/* @__PURE__ */ new Set()), _ = k(/* @__PURE__ */ new Map()), x = k(/* @__PURE__ */ new Map()), { addToQueue: C } = No(), { queueNodeInstall: S } = pt(), T = N(() => {
      var L;
      return ((L = n.value) == null ? void 0 : L.package_aliases) || {};
    });
    function M(L) {
      if (!L) return null;
      const oe = T.value;
      let pe = L;
      const Je = /* @__PURE__ */ new Set();
      for (; oe[pe] && !Je.has(pe); )
        Je.add(pe), pe = oe[pe];
      return pe;
    }
    function P(L, oe) {
      return L instanceof Error && L.message ? L.message : typeof L == "string" && L.trim().length > 0 ? L : oe;
    }
    function A(L) {
      for (const [oe, pe] of _.value.entries())
        pe === L && _.value.delete(oe);
    }
    function B(L) {
      if (!x.value.has(L)) return;
      const oe = x.value.get(L);
      clearTimeout(oe), x.value.delete(L);
    }
    function j() {
      for (const L of x.value.values())
        clearTimeout(L);
      x.value = /* @__PURE__ */ new Map();
    }
    function E(L) {
      B(L);
      const oe = setTimeout(() => {
        if (x.value.delete(L), !u.value.has(L)) return;
        A(L), u.value.delete(L), v.value === L && (v.value = null), c.value.set(L, "Queue timeout — please retry"), console.warn("[ComfyGit] Queue timeout waiting for cm-task-started:", L);
      }, x7);
      x.value.set(L, oe);
    }
    function V(L) {
      const oe = `Cannot install "${L.title}" - package_id is missing`;
      c.value.set(L.item_id, oe), o.value = oe, console.warn("[ComfyGit] Community install requested without package_id:", L);
    }
    const ae = N(() => fe.value.length > 0 || we.value.length > 0 || se.value.length > 0 || F.value.length > 0 || O.value.length > 0), fe = N(() => {
      var pe, Je;
      if (!((pe = n.value) != null && pe.nodes)) return [];
      const L = /* @__PURE__ */ new Map(), oe = (n.value.nodes.resolved || []).filter((D) => {
        var U;
        return !D.is_installed && ((U = D.package) == null ? void 0 : U.package_id);
      });
      for (const D of oe) {
        const U = M(D.package.package_id);
        if (!U) continue;
        L.has(U) || L.set(U, {
          package_id: U,
          title: D.package.title || U,
          node_count: 0,
          node_types: [],
          repository: D.package.repository || null,
          latest_version: D.package.latest_version || null
        });
        const ee = L.get(U);
        ee.node_count++, ee.node_types.push(((Je = D.reference) == null ? void 0 : Je.node_type) || D.node_type);
      }
      return Array.from(L.values());
    }), ue = N(() => fe.value.reduce((L, oe) => L + oe.node_count, 0)), we = N(() => {
      var L;
      return (L = n.value) != null && L.nodes ? (n.value.nodes.unresolved || []).map((oe) => {
        var pe;
        return {
          node_type: ((pe = oe.reference) == null ? void 0 : pe.node_type) || oe.node_type
        };
      }) : [];
    }), se = N(() => {
      var oe;
      if (!((oe = n.value) != null && oe.nodes)) return [];
      const L = n.value.node_guidance || {};
      return (n.value.nodes.version_gated || []).map((pe) => {
        var D;
        const Je = ((D = pe.reference) == null ? void 0 : D.node_type) || pe.node_type;
        return {
          node_type: Je,
          guidance: pe.guidance || L[Je] || null
        };
      });
    }), F = N(() => {
      var pe, Je, D, U, ee, De, Le, Me;
      if (!((pe = n.value) != null && pe.nodes)) return [];
      const L = n.value.node_guidance || {}, oe = /* @__PURE__ */ new Map();
      for (const je of n.value.nodes.uninstallable || []) {
        const nt = ((Je = je.reference) == null ? void 0 : Je.node_type) || je.node_type, bt = M(((D = je.package) == null ? void 0 : D.package_id) || null), It = bt || `node:${nt}`;
        oe.has(It) || oe.set(It, {
          item_id: It,
          node_type: nt,
          title: ((U = je.package) == null ? void 0 : U.title) || bt || nt,
          node_count: 0,
          package_id: bt,
          repository: ((ee = je.package) == null ? void 0 : ee.repository) || null,
          latest_version: ((De = je.package) == null ? void 0 : De.latest_version) || null,
          guidance: je.guidance || L[nt] || null
        });
        const re = oe.get(It);
        re.node_count++, re.guidance || (re.guidance = je.guidance || L[nt] || null), !re.repository && ((Le = je.package) != null && Le.repository) && (re.repository = je.package.repository), !re.latest_version && ((Me = je.package) != null && Me.latest_version) && (re.latest_version = je.package.latest_version);
      }
      return Array.from(oe.values());
    }), Q = N(() => F.value.filter((L) => !!L.package_id)), Pe = N(() => F.value.length >= 5 ? F.value.slice(0, 4) : F.value), te = N(() => Q.value.length > 0 && Q.value.every((L) => {
      const oe = L.package_id;
      return r.value.has(oe) || u.value.has(oe) || c.value.has(oe);
    }));
    function ge(L) {
      const oe = [
        { key: "install_registry", label: "Install", variant: "secondary" }
      ];
      return L.repository && oe.push({ key: "install_git", label: "Install via Git", variant: "ghost" }), oe;
    }
    const O = N(() => {
      var D;
      if (!((D = n.value) != null && D.models)) return [];
      const L = (n.value.models.resolved || []).filter(
        (U) => U.match_type === "download_intent" || U.match_type === "property_download_intent" || U.match_type === "not_found"
      ).map((U) => {
        var ee, De, Le, Me;
        return {
          filename: ((De = (ee = U.reference) == null ? void 0 : ee.widget_value) == null ? void 0 : De.split("/").pop()) || ((Le = U.reference) == null ? void 0 : Le.widget_value) || U.widget_value,
          widget_value: ((Me = U.reference) == null ? void 0 : Me.widget_value) || U.widget_value,
          // Backend returns download_source as URL string directly, and target_path at top level
          url: U.download_source || null,
          targetPath: U.target_path || null,
          canDownload: !!(U.download_source && U.target_path)
        };
      }), oe = (n.value.models.unresolved || []).map((U) => {
        var ee, De, Le, Me;
        return {
          filename: ((De = (ee = U.reference) == null ? void 0 : ee.widget_value) == null ? void 0 : De.split("/").pop()) || ((Le = U.reference) == null ? void 0 : Le.widget_value) || U.widget_value,
          widget_value: ((Me = U.reference) == null ? void 0 : Me.widget_value) || U.widget_value,
          url: null,
          targetPath: null,
          canDownload: !1
        };
      }), pe = /* @__PURE__ */ new Map(), Je = [];
      for (const U of L) {
        if (!U.url) {
          Je.push(U);
          continue;
        }
        const ee = `${U.filename}::${U.url}`, De = pe.get(ee);
        if (!De) {
          pe.set(ee, U);
          continue;
        }
        !De.targetPath && U.targetPath && (De.targetPath = U.targetPath), !De.canDownload && U.canDownload && (De.canDownload = U.canDownload);
      }
      return [...pe.values(), ...Je, ...oe];
    }), me = N(() => O.value.filter((L) => L.canDownload)), Re = N(() => fe.value.length >= 5 ? fe.value.slice(0, 4) : fe.value), Ge = N(() => O.value.length >= 5 ? O.value.slice(0, 4) : O.value), Ee = N(() => fe.value.length > 0 && fe.value.every(
      (L) => r.value.has(L.package_id) || u.value.has(L.package_id) || c.value.has(L.package_id)
    )), H = N(() => me.value.length > 0 && me.value.every((L) => d.value.has(L.url))), Z = N(() => fe.value.length > 0 || Q.value.length > 0 || me.value.length > 0), K = N(() => {
      const L = (fe.value.length === 0 || Ee.value) && (Q.value.length === 0 || te.value), oe = me.value.length === 0 || H.value;
      return L && oe;
    }), X = N(() => w.value === "models" ? `Missing Models (${O.value.length})` : w.value === "packages" ? `Missing Custom Nodes (${ue.value})` : w.value === "community" ? `Community-Mapped Packages (${F.value.length})` : ""), xe = N(() => w.value === "models" ? O.value.map((L) => ({
      id: L.url || L.widget_value,
      name: L.filename,
      canAction: L.canDownload,
      actionDisabledReason: L.canDownload ? void 0 : "Manual download required"
    })) : w.value === "packages" ? fe.value.map((L) => ({
      id: L.package_id,
      name: L.title,
      subtitle: `(${L.node_count} ${L.node_count === 1 ? "node" : "nodes"})`,
      canAction: !0
    })) : w.value === "community" ? F.value.map((L) => ({
      id: L.package_id || L.item_id,
      name: L.title,
      subtitle: `(${L.node_count} ${L.node_count === 1 ? "node" : "nodes"})`,
      canAction: !!L.package_id,
      actionDisabledReason: L.package_id ? void 0 : "Manual setup required",
      actions: L.package_id ? ge(L) : []
    })) : []);
    function ce(L, oe) {
      if (w.value === "models") {
        const pe = O.value.find((Je) => Je.url === L.id || Je.widget_value === L.id);
        pe && Ce(pe);
      } else if (w.value === "packages") {
        const pe = fe.value.find((Je) => Je.package_id === L.id);
        pe && I(pe);
      } else if (w.value === "community") {
        const pe = F.value.find((D) => (D.package_id || D.item_id) === L.id);
        if (!pe) return;
        if (!pe.package_id) {
          V({ item_id: pe.item_id, title: pe.title });
          return;
        }
        z(pe, oe === "install_git" ? "git" : "registry");
      }
    }
    function le() {
      w.value === "models" ? Ae() : w.value === "packages" ? _e() : w.value === "community" && $e();
    }
    async function I(L) {
      return ie(L.package_id, L.latest_version, "registry");
    }
    async function z(L, oe) {
      return L.package_id ? ie(L.package_id, L.latest_version, oe, L.repository) : (V({ item_id: L.item_id, title: L.title }), !1);
    }
    async function ie(L, oe, pe, Je) {
      const D = M(L) || L, U = oe || "latest";
      if (r.value.has(D) || u.value.has(D) || c.value.has(D))
        return !0;
      ot(), v.value = D;
      let ee = null;
      try {
        const De = {
          id: D,
          version: U,
          selected_version: U,
          mode: "remote",
          channel: "default"
        };
        pe === "git" && Je && (De.repository = Je, De.install_source = "git");
        const { ui_id: Le } = await S(De, {
          beforeQueueStart: (Me) => {
            ee = Me, _.value.set(Me, D), u.value.add(D), E(D), console.log("[ComfyGit] Registered pending install:", {
              ui_id: Me,
              packageId: D,
              pendingInstalls: Array.from(_.value.entries())
            });
          }
        });
        return ee || (ee = Le, _.value.set(Le, D), u.value.add(D), E(D), console.log("[ComfyGit] Registered pending install (fallback):", {
          ui_id: Le,
          packageId: D,
          pendingInstalls: Array.from(_.value.entries())
        })), !0;
      } catch (De) {
        const Le = P(De, "Failed to queue install request");
        return console.error("[ComfyGit] Failed to queue package install:", De), ee && _.value.delete(ee), A(D), B(D), u.value.delete(D), c.value.set(D, Le), !1;
      } finally {
        v.value = null;
      }
    }
    function Ce(L) {
      !L.url || !L.targetPath || d.value.has(L.url) || (C([{
        workflow: "unsaved",
        filename: L.filename,
        url: L.url,
        targetPath: L.targetPath
      }]), d.value.add(L.url));
    }
    async function _e() {
      const L = { attempted: 0, failed: 0 };
      for (const oe of fe.value)
        !r.value.has(oe.package_id) && !u.value.has(oe.package_id) && !c.value.has(oe.package_id) && (L.attempted++, await I(oe) || L.failed++);
      return L;
    }
    async function $e() {
      const L = { attempted: 0, failed: 0 };
      for (const oe of Q.value) {
        const pe = oe.package_id;
        !r.value.has(pe) && !u.value.has(pe) && !c.value.has(pe) && (L.attempted++, await z(oe, "registry") || L.failed++);
      }
      return L;
    }
    function Ae() {
      const L = me.value.filter(
        (oe) => !d.value.has(oe.url)
      );
      if (L.length === 0) return 0;
      C(L.map((oe) => ({
        workflow: "unsaved",
        filename: oe.filename,
        url: oe.url,
        targetPath: oe.targetPath
      })));
      for (const oe of L)
        d.value.add(oe.url);
      return L.length;
    }
    async function ze() {
      const L = await _e(), oe = await $e();
      Ae();
      const pe = L.attempted + oe.attempted, Je = L.failed + oe.failed;
      if (pe > 0 && Je > 0) {
        const D = pe - Je;
        o.value = `${D} of ${pe} installs queued, ${Je} failed`;
      }
    }
    function Ne() {
      m.value ? localStorage.setItem("comfygit:popup-disabled", "true") : localStorage.removeItem("comfygit:popup-disabled");
    }
    async function Ie(L) {
      var D, U;
      if (localStorage.getItem("comfygit:popup-disabled") === "true") {
        console.log("[ComfyGit] Popup globally disabled");
        return;
      }
      const oe = L == null ? void 0 : L.id;
      if (oe && p.value.has(oe)) {
        console.log(`[ComfyGit] Already shown popup for workflow ${oe} this session`);
        return;
      }
      const pe = window.app, Je = (D = pe == null ? void 0 : pe.extensionManager) == null ? void 0 : D.workflow;
      if (Je) {
        let Le = !1;
        for (let Me = 0; Me < 20; Me++) {
          const je = Je.activeWorkflow;
          if (!je) {
            await new Promise((It) => setTimeout(It, 50));
            continue;
          }
          const nt = (U = je.activeState) == null ? void 0 : U.id;
          if (!(oe && nt === oe)) {
            Me < 19 && await new Promise((It) => setTimeout(It, 50));
            continue;
          }
          if (Le = !0, je.isPersisted === !0) {
            console.log(`[ComfyGit] Skipping popup for saved workflow: ${je.filename}`), oe && p.value.add(oe);
            return;
          }
          break;
        }
        Le || console.warn("[ComfyGit] Could not verify workflow state, showing popup as fallback");
      }
      t.value = !0, o.value = null, j(), r.value = /* @__PURE__ */ new Set(), u.value = /* @__PURE__ */ new Set(), c.value = /* @__PURE__ */ new Map(), d.value = /* @__PURE__ */ new Set(), _.value = /* @__PURE__ */ new Map(), m.value = !1, g.value = 0;
      try {
        const ee = await fetch("/v2/comfygit/workflow/analyze-json", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ workflow: L, name: "unsaved" })
        });
        if (!ee.ok) {
          const De = await ee.json();
          throw new Error(De.error || "Failed to analyze workflow");
        }
        n.value = await ee.json(), ae.value && (l.value = !0, oe && p.value.add(oe));
      } catch (ee) {
        console.error("[ComfyGit] Failed to analyze workflow:", ee);
      } finally {
        t.value = !1;
      }
    }
    function Ke() {
      j(), l.value = !1, n.value = null;
    }
    function Ve(L) {
      const { workflow: oe } = L.detail;
      oe && Ie(oe);
    }
    function ve(L) {
      var Je;
      const oe = (Je = L.detail) == null ? void 0 : Je.ui_id;
      console.log("[ComfyGit] cm-task-started received:", {
        taskId: oe,
        pendingInstalls: Array.from(_.value.entries()),
        eventDetail: L.detail
      });
      const pe = _.value.get(oe);
      pe ? (B(pe), v.value = pe, console.log("[ComfyGit] Installing package:", pe)) : console.warn("[ComfyGit] cm-task-started: No matching package for taskId:", oe);
    }
    function Y(L) {
      var D, U, ee, De, Le, Me, je;
      const oe = (D = L.detail) == null ? void 0 : D.ui_id, pe = (ee = (U = L.detail) == null ? void 0 : U.status) == null ? void 0 : ee.status_str;
      console.log("[ComfyGit] cm-task-completed received:", {
        taskId: oe,
        status: pe,
        pendingInstalls: Array.from(_.value.entries()),
        eventDetail: L.detail
      });
      const Je = _.value.get(oe);
      if (Je) {
        if (B(Je), _.value.delete(oe), u.value.delete(Je), v.value === Je && (v.value = null), pe === "success")
          r.value.add(Je), g.value++, console.log("[ComfyGit] Package installed successfully:", Je);
        else {
          const nt = ((Me = (Le = (De = L.detail) == null ? void 0 : De.status) == null ? void 0 : Le.messages) == null ? void 0 : Me[0]) || ((je = L.detail) == null ? void 0 : je.result) || "Unknown error";
          c.value.set(Je, nt), console.error("[ComfyGit] Package install failed:", Je, nt);
        }
        _.value.size === 0 && g.value > 0 && (console.log("[ComfyGit] All installs complete, dispatching nodes-installed event:", g.value), window.dispatchEvent(new CustomEvent("comfygit:nodes-installed", {
          detail: { count: g.value }
        })));
      } else
        console.warn("[ComfyGit] cm-task-completed: No matching package for taskId:", oe);
    }
    let He = null;
    function ke() {
      var L;
      return He || (He = (L = window.app) == null ? void 0 : L.api), He;
    }
    let Ye = !1;
    function ot() {
      if (Ye) return !0;
      const L = ke();
      return L ? (L.addEventListener("cm-task-started", ve), L.addEventListener("cm-task-completed", Y), L.addEventListener("comfygit:workflow-changed", Ue), Ye = !0, console.log("[ComfyGit] Registered WebSocket event listeners for install tracking"), !0) : (console.warn("[ComfyGit] Could not register WebSocket listeners - API not available"), !1);
    }
    function Ue(L) {
      const { change_type: oe } = L.detail;
      (oe === "created" || oe === "modified") && l.value && (j(), l.value = !1, console.log("[ComfyGit] Workflow saved, auto-dismissing popup"));
    }
    return rt(() => {
      window.addEventListener("comfygit:workflow-loaded", Ve);
    }), Po(() => {
      if (j(), window.removeEventListener("comfygit:workflow-loaded", Ve), Ye) {
        const L = ke();
        L && (L.removeEventListener("cm-task-started", ve), L.removeEventListener("cm-task-completed", Y), L.removeEventListener("comfygit:workflow-changed", Ue)), Ye = !1;
      }
    }), (L, oe) => (a(), i(q, null, [
      l.value ? (a(), R(Tt, {
        key: 0,
        title: "Missing Dependencies",
        size: "md",
        loading: t.value,
        error: o.value || void 0,
        onClose: Ke
      }, {
        body: h(() => [
          t.value ? (a(), i("div", IM, [...oe[5] || (oe[5] = [
            s("div", { class: "loading-spinner" }, null, -1),
            s("span", null, "Analyzing workflow...", -1)
          ])])) : n.value && ae.value ? (a(), i("div", EM, [
            fe.value.length > 0 ? (a(), i("div", TM, [
              s("div", MM, [
                s("span", PM, "Missing Custom Nodes (" + f(ue.value) + ")", 1),
                fe.value.length > 1 ? (a(), R(Oe, {
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
              s("div", RM, [
                (a(!0), i(q, null, he(Re.value, (pe) => (a(), i("div", {
                  key: pe.package_id,
                  class: "package-item"
                }, [
                  s("div", NM, [
                    s("span", DM, f(pe.title), 1),
                    s("span", LM, "(" + f(pe.node_count) + " " + f(pe.node_count === 1 ? "node" : "nodes") + ")", 1)
                  ]),
                  !r.value.has(pe.package_id) && !u.value.has(pe.package_id) && !c.value.has(pe.package_id) ? (a(), R(Oe, {
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
                  }, 1032, ["disabled", "onClick"])) : v.value === pe.package_id ? (a(), i("span", OM, "Installing...")) : u.value.has(pe.package_id) ? (a(), i("span", AM, "Queued")) : c.value.has(pe.package_id) ? (a(), i("span", {
                    key: 3,
                    class: "failed-badge",
                    title: c.value.get(pe.package_id)
                  }, "Failed ⚠", 8, UM)) : (a(), i("span", zM, "Installed"))
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
            we.value.length > 0 ? (a(), i("div", FM, [
              s("div", VM, [
                s("span", BM, "Unknown Nodes (" + f(we.value.length) + ")", 1)
              ]),
              s("div", WM, [
                (a(!0), i(q, null, he(we.value.slice(0, 5), (pe) => (a(), i("div", {
                  key: pe.node_type,
                  class: "item"
                }, [
                  s("code", GM, f(pe.node_type), 1),
                  oe[7] || (oe[7] = s("span", { class: "not-found" }, "Not found in registry", -1))
                ]))), 128)),
                we.value.length > 5 ? (a(), i("div", jM, " ...and " + f(we.value.length - 5) + " more ", 1)) : y("", !0)
              ])
            ])) : y("", !0),
            se.value.length > 0 ? (a(), i("div", HM, [
              s("div", qM, [
                s("span", KM, "Requires Newer ComfyUI (" + f(se.value.length) + ")", 1)
              ]),
              s("div", JM, [
                (a(!0), i(q, null, he(se.value.slice(0, 5), (pe) => (a(), i("div", {
                  key: `vg-${pe.node_type}`,
                  class: "item"
                }, [
                  s("code", QM, f(pe.node_type), 1),
                  s("span", YM, f(pe.guidance || "Requires a newer ComfyUI version"), 1)
                ]))), 128)),
                se.value.length > 5 ? (a(), i("div", XM, " ...and " + f(se.value.length - 5) + " more ", 1)) : y("", !0)
              ])
            ])) : y("", !0),
            F.value.length > 0 ? (a(), i("div", ZM, [
              s("div", e7, [
                s("span", t7, "Community-Mapped Packages (" + f(F.value.length) + ")", 1),
                Q.value.length > 1 ? (a(), R(Oe, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: te.value,
                  onClick: $e
                }, {
                  default: h(() => [
                    $(f(te.value ? "All Queued" : "Install All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0)
              ]),
              s("div", s7, [
                (a(!0), i(q, null, he(Pe.value, (pe) => (a(), i("div", {
                  key: `community-${pe.item_id}`,
                  class: "package-item"
                }, [
                  s("div", o7, [
                    s("div", n7, [
                      s("span", a7, f(pe.title), 1),
                      s("span", l7, "(" + f(pe.node_count) + " " + f(pe.node_count === 1 ? "node" : "nodes") + ")", 1)
                    ]),
                    s("div", i7, [
                      oe[8] || (oe[8] = $(" Found via community mapping — registry metadata may be incomplete", -1)),
                      pe.guidance ? (a(), i("span", r7, ". " + f(pe.guidance), 1)) : y("", !0)
                    ])
                  ]),
                  pe.package_id ? (a(), i(q, { key: 0 }, [
                    !r.value.has(pe.package_id) && !u.value.has(pe.package_id) && !c.value.has(pe.package_id) ? (a(), i("div", c7, [
                      b(Oe, {
                        size: "sm",
                        variant: "secondary",
                        disabled: v.value === pe.package_id,
                        onClick: (Je) => z(pe, "registry")
                      }, {
                        default: h(() => [
                          $(f(v.value === pe.package_id ? "Queueing..." : "Install"), 1)
                        ]),
                        _: 2
                      }, 1032, ["disabled", "onClick"]),
                      pe.repository ? (a(), R(Oe, {
                        key: 0,
                        size: "sm",
                        variant: "ghost",
                        disabled: v.value === pe.package_id,
                        onClick: (Je) => z(pe, "git")
                      }, {
                        default: h(() => [...oe[9] || (oe[9] = [
                          $(" Install via Git ", -1)
                        ])]),
                        _: 1
                      }, 8, ["disabled", "onClick"])) : y("", !0)
                    ])) : v.value === pe.package_id ? (a(), i("span", u7, "Installing...")) : u.value.has(pe.package_id) ? (a(), i("span", d7, "Queued")) : c.value.has(pe.package_id) ? (a(), i("span", {
                      key: 3,
                      class: "failed-badge",
                      title: c.value.get(pe.package_id)
                    }, "Failed ⚠", 8, f7)) : (a(), i("span", m7, "Installed"))
                  ], 64)) : (a(), i(q, { key: 1 }, [
                    c.value.has(pe.item_id) ? (a(), i("span", {
                      key: 0,
                      class: "failed-badge",
                      title: c.value.get(pe.item_id)
                    }, "Failed ⚠", 8, v7)) : (a(), i("span", p7, "Manual setup required"))
                  ], 64))
                ]))), 128)),
                F.value.length >= 5 ? (a(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: oe[1] || (oe[1] = (pe) => w.value = "community")
                }, [
                  s("span", null, "Show all " + f(F.value.length) + " packages...", 1),
                  oe[10] || (oe[10] = s("span", { class: "show-all-arrow" }, "→", -1))
                ])) : y("", !0)
              ])
            ])) : y("", !0),
            O.value.length > 0 ? (a(), i("div", g7, [
              s("div", h7, [
                s("span", y7, "Missing Models (" + f(O.value.length) + ")", 1),
                me.value.length > 1 ? (a(), R(Oe, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: H.value,
                  onClick: Ae
                }, {
                  default: h(() => [
                    $(f(H.value ? "All Queued" : "Download All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0)
              ]),
              s("div", w7, [
                (a(!0), i(q, null, he(Ge.value, (pe) => (a(), i("div", {
                  key: pe.widget_value,
                  class: "model-item"
                }, [
                  s("div", _7, [
                    s("span", k7, f(pe.filename), 1)
                  ]),
                  pe.canDownload ? (a(), i(q, { key: 0 }, [
                    d.value.has(pe.url) ? (a(), i("span", b7, "Queued")) : (a(), R(Oe, {
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
                  ], 64)) : (a(), i("span", $7, "Manual download required"))
                ]))), 128)),
                O.value.length >= 5 ? (a(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: oe[2] || (oe[2] = (pe) => w.value = "models")
                }, [
                  s("span", null, "Show all " + f(O.value.length) + " models...", 1),
                  oe[12] || (oe[12] = s("span", { class: "show-all-arrow" }, "→", -1))
                ])) : y("", !0)
              ])
            ])) : y("", !0),
            s("div", C7, [
              b(qn, {
                modelValue: m.value,
                "onUpdate:modelValue": [
                  oe[3] || (oe[3] = (pe) => m.value = pe),
                  Ne
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
          b(Oe, {
            variant: "secondary",
            onClick: Ke
          }, {
            default: h(() => [...oe[14] || (oe[14] = [
              $("Dismiss", -1)
            ])]),
            _: 1
          }),
          Z.value ? (a(), R(Oe, {
            key: 0,
            variant: "primary",
            disabled: K.value,
            onClick: ze
          }, {
            default: h(() => [
              $(f(K.value ? "All Done" : "Download All"), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : y("", !0)
        ]),
        _: 1
      }, 8, ["loading", "error"])) : y("", !0),
      w.value ? (a(), R(SM, {
        key: 1,
        title: X.value,
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
}), I7 = /* @__PURE__ */ Se(S7, [["__scopeId", "data-v-dfb55c3f"]]), E7 = {
  key: 0,
  class: "io-mapping-root"
}, T7 = { class: "io-mapping-visual-layer" }, M7 = { class: "io-mapping-header" }, P7 = { class: "io-mapping-header-main" }, R7 = { class: "io-mapping-subtitle" }, N7 = {
  key: 0,
  class: "io-mapping-hover-summary"
}, D7 = { class: "io-mapping-header-actions" }, L7 = { class: "io-mapping-sidebar" }, O7 = { class: "io-mapping-sidebar-scroll" }, A7 = {
  key: 0,
  class: "io-state-block"
}, U7 = {
  key: 1,
  class: "io-state-block io-state-error"
}, z7 = { class: "contract-meta-section" }, F7 = { class: "contract-meta-toggle-icon" }, V7 = {
  key: 0,
  class: "contract-meta-body"
}, B7 = { class: "contract-summary" }, W7 = { class: "summary-pill" }, G7 = { class: "summary-pill" }, j7 = { class: "summary-pill" }, H7 = { class: "mapping-section" }, q7 = { class: "section-header" }, K7 = {
  key: 0,
  class: "empty-message"
}, J7 = ["onClick"], Q7 = { class: "item-card-title" }, Y7 = { class: "item-card-meta" }, X7 = { class: "item-card-summary" }, Z7 = { key: 0 }, eP = { class: "mapping-section" }, tP = { class: "section-header" }, sP = {
  key: 0,
  class: "empty-message"
}, oP = ["onClick"], nP = { class: "item-card-title" }, aP = { class: "item-card-meta" }, lP = { class: "item-card-summary" }, iP = { class: "io-mapping-footer" }, rP = { class: "io-mapping-footer-left" }, cP = { class: "io-mapping-footer-right" }, uP = /* @__PURE__ */ be({
  __name: "WorkflowIOMappingOverlay",
  props: {
    comfyApp: {}
  },
  setup(e) {
    const t = e, { getWorkflowContract: o, saveWorkflowContract: n, deleteWorkflowContract: l } = pt(), r = k(!1), u = k(""), c = k(!1), d = k(!1), m = k(!1), v = k(null), g = k(null), w = k(null), p = k(!1), _ = k(!1), x = k(null), C = k(null), S = k(0), T = k(null), M = k(null);
    let P = null;
    const A = [
      "string",
      "integer",
      "number",
      "boolean",
      "enum",
      "image",
      "video",
      "audio",
      "file"
    ], B = [
      { label: "Required", value: "true" },
      { label: "Optional", value: "false" }
    ], j = N(() => {
      var D;
      return ((D = g.value) == null ? void 0 : D.contract_summary.has_contract) === !0;
    }), E = N(() => {
      if (!w.value)
        return { inputs: [], outputs: [] };
      const D = w.value.default_contract || "default";
      return w.value.contracts[D] || (w.value.contracts[D] = { inputs: [], outputs: [] }), w.value.contracts[D];
    }), V = N(() => {
      var U;
      const D = ((U = g.value) == null ? void 0 : U.contract_summary.status) ?? "none";
      return D === "valid" ? "Valid Contract" : D === "incomplete" ? "Incomplete Contract" : "No Contract";
    });
    function ae(D) {
      return D ? JSON.parse(JSON.stringify(D)) : {
        version: 1,
        default_contract: "default",
        contracts: {
          default: { inputs: [], outputs: [] }
        }
      };
    }
    function fe(D) {
      return D === "integer" || D === "number";
    }
    function ue(D) {
      return D === "enum";
    }
    function we(D) {
      return D == null ? "" : String(D);
    }
    function se(D) {
      const U = D.trim();
      if (!U) return;
      const ee = Number(U);
      return Number.isFinite(ee) ? ee : void 0;
    }
    function F(D) {
      return (D || []).join(`
`);
    }
    function Q(D) {
      return D.split(/[\n,]/).map((U) => U.trim()).filter(Boolean);
    }
    function Pe(D) {
      return typeof D == "string" ? D.length > 24 ? `${D.slice(0, 24)}...` : D : String(D);
    }
    function te(D) {
      return D == null ? "" : String(D);
    }
    function ge(D) {
      var ee;
      const U = (ee = D == null ? void 0 : D.options) == null ? void 0 : ee.values;
      return Array.isArray(U) ? U.map((De) => String(De)).filter(Boolean) : [];
    }
    function O(D, U) {
      var Le;
      const ee = (Le = D == null ? void 0 : D.options) == null ? void 0 : Le[U];
      if (ee == null || ee === "") return;
      const De = Number(ee);
      return Number.isFinite(De) ? De : void 0;
    }
    function me(D, U) {
      return D.trim().toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "") || U;
    }
    function Re(D) {
      if (!w.value) return;
      const U = D.trim() || "default";
      w.value.default_contract = U, w.value.contracts[U] || (w.value.contracts[U] = { inputs: [], outputs: [] });
    }
    function Ge(D) {
      const U = String(D ?? "").toLowerCase();
      return U.includes("image") ? "image" : U.includes("video") ? "video" : U.includes("audio") ? "audio" : U.includes("int") ? "integer" : U.includes("float") || U.includes("double") || U.includes("number") ? "number" : U.includes("bool") ? "boolean" : U.includes("combo") || U.includes("enum") ? "enum" : U.includes("string") || U.includes("text") ? "string" : "file";
    }
    function Ee(D) {
      E.value.inputs.splice(D, 1), x.value === D && (x.value = null);
    }
    function H(D) {
      E.value.outputs.splice(D, 1), C.value === D && (C.value = null);
    }
    function Z(D) {
      x.value = x.value === D ? null : D, x.value != null && (C.value = null);
    }
    function K(D) {
      C.value = C.value === D ? null : D, C.value != null && (x.value = null);
    }
    function X(D) {
      const U = typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(String(D)) : String(D);
      return document.querySelector(`[data-node-id="${U}"]`);
    }
    function xe(D) {
      return D instanceof Element ? !!D.closest(".io-mapping-header, .io-mapping-sidebar") : !1;
    }
    function ce(D) {
      var De, Le, Me, je, nt, bt;
      if (!(D instanceof Element)) return null;
      const U = D.closest("[data-node-id]"), ee = U == null ? void 0 : U.getAttribute("data-node-id");
      return ee ? ((Me = (Le = (De = t.comfyApp) == null ? void 0 : De.graph) == null ? void 0 : Le.getNodeById) == null ? void 0 : Me.call(Le, ee)) ?? ((bt = (nt = (je = t.comfyApp) == null ? void 0 : je.rootGraph) == null ? void 0 : nt.getNodeById) == null ? void 0 : bt.call(nt, ee)) ?? null : null;
    }
    function le(D, U) {
      if (U == null || U < 0) return null;
      const ee = X(D);
      return ee ? ee.querySelectorAll('[data-testid="node-widget"]')[U] ?? null : null;
    }
    function I(D) {
      return !D || D.width <= 0 || D.height <= 0 ? null : {
        left: `${D.left}px`,
        top: `${D.top}px`,
        width: `${D.width}px`,
        height: `${D.height}px`
      };
    }
    function z(D) {
      const U = X((D == null ? void 0 : D.id) ?? "");
      if (U) return U.getBoundingClientRect();
      const ee = t.comfyApp;
      if (!D || typeof (ee == null ? void 0 : ee.canvasPosToClientPos) != "function") return null;
      const Le = ee.canvasPosToClientPos([D.pos[0], D.pos[1] - 32]), Me = ee.canvasPosToClientPos([D.pos[0] + D.size[0], D.pos[1] + D.size[1]]);
      return !Le || !Me ? null : new DOMRect(Le[0], Le[1], Me[0] - Le[0], Me[1] - Le[1]);
    }
    function ie(D) {
      var nt, bt, It, re, W, de, We;
      const U = le(D.node_id, D.widget_idx);
      if (U) return U.getBoundingClientRect();
      const ee = ((It = (bt = (nt = t.comfyApp) == null ? void 0 : nt.graph) == null ? void 0 : bt.getNodeById) == null ? void 0 : It.call(bt, String(D.node_id))) ?? ((de = (W = (re = t.comfyApp) == null ? void 0 : re.rootGraph) == null ? void 0 : W.getNodeById) == null ? void 0 : de.call(W, String(D.node_id)));
      if (!ee || typeof D.widget_idx != "number" || !Array.isArray(ee.widgets)) return null;
      const De = ee.widgets[D.widget_idx];
      if (!De || typeof ((We = t.comfyApp) == null ? void 0 : We.canvasPosToClientPos) != "function") return z(ee);
      const Le = 10, Me = t.comfyApp.canvasPosToClientPos([ee.pos[0] + Le, ee.pos[1] + (De.y ?? 0)]), je = t.comfyApp.canvasPosToClientPos([ee.pos[0] + ee.size[0] - Le, ee.pos[1] + (De.y ?? 0) + (De.computedHeight ?? 24)]);
      return !Me || !je ? z(ee) : new DOMRect(Me[0], Me[1], je[0] - Me[0], je[1] - Me[1]);
    }
    function Ce(D) {
      var ee, De, Le, Me, je, nt;
      const U = ((Le = (De = (ee = t.comfyApp) == null ? void 0 : ee.graph) == null ? void 0 : De.getNodeById) == null ? void 0 : Le.call(De, String(D.node_id))) ?? ((nt = (je = (Me = t.comfyApp) == null ? void 0 : Me.rootGraph) == null ? void 0 : je.getNodeById) == null ? void 0 : nt.call(je, String(D.node_id)));
      return z(U);
    }
    const _e = N(() => (S.value, E.value.inputs.map((D, U) => {
      const ee = I(ie(D));
      return ee ? {
        key: `input-${U}-${D.node_id}-${D.widget_idx ?? "na"}`,
        style: ee,
        active: x.value === U
      } : null;
    }).filter((D) => !!D))), $e = N(() => (S.value, E.value.outputs.map((D, U) => {
      const ee = I(Ce(D));
      return ee ? {
        key: `output-${U}-${D.node_id}-${D.selector ?? "primary"}`,
        style: ee,
        active: C.value === U
      } : null;
    }).filter((D) => !!D)));
    function Ae(D) {
      var It, re, W, de, We, ut, Ct, lt, xt, ts;
      if (xe(D.target)) return null;
      const U = (It = t.comfyApp) == null ? void 0 : It.canvas;
      if (!U) return null;
      const ee = (re = U.convertEventToCanvasOffset) == null ? void 0 : re.call(U, D);
      if (!ee || ee.length < 2) return null;
      const [De, Le] = ee, Me = U.graph || ((W = t.comfyApp) == null ? void 0 : W.graph) || ((de = t.comfyApp) == null ? void 0 : de.rootGraph), je = ((We = Me == null ? void 0 : Me.getNodeOnPos) == null ? void 0 : We.call(Me, De, Le, U.visible_nodes)) || ((ut = U.getNodeOnPos) == null ? void 0 : ut.call(U, De, Le)) || ce(D.target);
      if (!je) return null;
      const nt = (Ct = je.getWidgetOnPos) == null ? void 0 : Ct.call(je, De, Le, !0);
      if (nt)
        return { kind: "input", node: je, widget: nt, canvasX: De, canvasY: Le };
      const bt = ((lt = je.getOutputOnPos) == null ? void 0 : lt.call(je, [De, Le])) || ((ts = (xt = je.constructor) == null ? void 0 : xt.nodeData) != null && ts.output_node ? { name: je.title || je.type || "output", type: "image" } : null);
      return bt ? { kind: "output", node: je, output: bt, canvasX: De, canvasY: Le } : null;
    }
    function ze(D, U) {
      var nt;
      const ee = Array.isArray(D.widgets) ? D.widgets.indexOf(U) : -1, De = E.value.inputs.findIndex(
        (bt) => String(bt.node_id) === String(D.id) && bt.widget_idx === ee
      );
      if (De >= 0) {
        x.value = De;
        return;
      }
      const Le = typeof ((nt = U == null ? void 0 : U.options) == null ? void 0 : nt.property) == "string" ? U.options.property : void 0, Me = (U == null ? void 0 : U.name) || Le || "input", je = {
        name: me(String(Me), `input_${E.value.inputs.length + 1}`),
        display_name: String((U == null ? void 0 : U.name) || Le || `Input ${E.value.inputs.length + 1}`),
        type: Ge(U == null ? void 0 : U.type),
        node_id: String(D.id),
        widget_idx: ee >= 0 ? ee : void 0,
        field_key: Le,
        required: !0,
        default: (U == null ? void 0 : U.value) ?? ""
      };
      fe(je.type) && (je.min = O(U, "min"), je.max = O(U, "max")), ue(je.type) && (je.enum_values = ge(U)), E.value.inputs.push(je), x.value = E.value.inputs.length - 1, C.value = null;
    }
    function Ne(D, U) {
      const ee = Array.isArray(D.outputs) ? D.outputs.indexOf(U) : -1, De = ee >= 0 ? `slot:${ee}` : "primary", Le = E.value.outputs.findIndex(
        (je) => String(je.node_id) === String(D.id) && (je.selector || "primary") === De
      );
      if (Le >= 0) {
        C.value = Le;
        return;
      }
      const Me = {
        name: me(String((U == null ? void 0 : U.name) || "output"), `output_${E.value.outputs.length + 1}`),
        display_name: String((U == null ? void 0 : U.name) || `Output ${E.value.outputs.length + 1}`),
        type: Ge(U == null ? void 0 : U.type),
        node_id: String(D.id),
        selector: De
      };
      E.value.outputs.push(Me), C.value = E.value.outputs.length - 1, x.value = null;
    }
    function Ie(D) {
      var De, Le, Me;
      if (!r.value) {
        T.value = null, M.value = null;
        return;
      }
      const U = Ae(D);
      if (!U) {
        T.value = null, M.value = null;
        return;
      }
      if (U.kind === "input") {
        const je = Array.isArray(U.node.widgets) ? U.node.widgets.indexOf(U.widget) : -1, nt = I(((De = le(U.node.id, je)) == null ? void 0 : De.getBoundingClientRect()) ?? ie({
          node_id: String(U.node.id),
          widget_idx: je >= 0 ? je : void 0
        }));
        if (!nt) {
          T.value = null, M.value = null;
          return;
        }
        T.value = {
          kind: "input",
          label: `${((Le = U.widget) == null ? void 0 : Le.name) || "widget"} · Node ${U.node.id}`
        }, M.value = { kind: "input", style: nt };
        return;
      }
      const ee = I(z(U.node));
      if (!ee) {
        T.value = null, M.value = null;
        return;
      }
      T.value = {
        kind: "output",
        label: `${((Me = U.output) == null ? void 0 : Me.name) || U.node.title || U.node.type || "output"} · Node ${U.node.id}`
      }, M.value = { kind: "output", style: ee };
    }
    function Ke(D) {
      var De, Le, Me;
      if (!r.value || !w.value || D.button !== 0) return;
      const U = Ae(D);
      if (!U) return;
      const ee = (De = t.comfyApp) == null ? void 0 : De.canvas;
      if (ee) {
        if (U.kind === "input") {
          D.preventDefault(), D.stopImmediatePropagation(), D.stopPropagation(), Array.isArray(ee.graph_mouse) && (ee.graph_mouse[0] = U.canvasX, ee.graph_mouse[1] = U.canvasY), (Le = ee.selectNode) == null || Le.call(ee, U.node, !1), ze(U.node, U.widget);
          return;
        }
        D.preventDefault(), D.stopImmediatePropagation(), D.stopPropagation(), Array.isArray(ee.graph_mouse) && (ee.graph_mouse[0] = U.canvasX, ee.graph_mouse[1] = U.canvasY), (Me = ee.selectNode) == null || Me.call(ee, U.node, !1), Ne(U.node, U.output);
      }
    }
    function Ve() {
      document.addEventListener("pointerdown", Ke, !0), document.addEventListener("pointermove", Ie, !0);
    }
    function ve() {
      document.removeEventListener("pointerdown", Ke, !0), document.removeEventListener("pointermove", Ie, !0);
    }
    async function Y() {
      if (u.value) {
        c.value = !0, v.value = null;
        try {
          g.value = await o(u.value), w.value = ae(g.value.execution_contract);
        } catch (D) {
          v.value = D instanceof Error ? D.message : "Failed to load workflow contract";
        } finally {
          c.value = !1;
        }
      }
    }
    async function He() {
      if (!(!w.value || !u.value)) {
        d.value = !0, v.value = null;
        try {
          g.value = await n(u.value, w.value), w.value = ae(g.value.execution_contract), window.dispatchEvent(new CustomEvent("comfygit:workflow-contract-saved", {
            detail: { workflowName: u.value }
          })), Ue({ reopenPanel: !0 });
        } catch (D) {
          v.value = D instanceof Error ? D.message : "Failed to save workflow contract";
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
          })), Ue({ reopenPanel: !0 });
        } catch (D) {
          v.value = D instanceof Error ? D.message : "Failed to delete workflow contract";
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
    function Ue(D) {
      r.value = !1, T.value = null, M.value = null, _.value = !1, D != null && D.reopenPanel && ot();
    }
    async function L(D) {
      var De, Le;
      const ee = (Le = (De = D.detail) == null ? void 0 : De.workflowName) == null ? void 0 : Le.trim();
      ee && (u.value = ee, x.value = null, C.value = null, p.value = !1, r.value = !0, await Y());
    }
    function oe(D) {
      if (D.key === "Escape" && r.value) {
        if (_.value) {
          _.value = !1;
          return;
        }
        Ue({ reopenPanel: !0 });
      }
    }
    function pe() {
      if (P != null) return;
      const D = () => {
        if (S.value += 1, !r.value) {
          P = null;
          return;
        }
        P = window.requestAnimationFrame(D);
      };
      P = window.requestAnimationFrame(D);
    }
    function Je() {
      P != null && (window.cancelAnimationFrame(P), P = null);
    }
    return kt(r, (D) => {
      D ? (Ve(), pe()) : (ve(), Je());
    }), rt(() => {
      window.addEventListener("comfygit:open-io-mapping", L), window.addEventListener("keydown", oe);
    }), oa(() => {
      ve(), Je(), window.removeEventListener("comfygit:open-io-mapping", L), window.removeEventListener("keydown", oe);
    }), (D, U) => r.value ? (a(), i("div", E7, [
      s("div", T7, [
        (a(!0), i(q, null, he(_e.value, (ee) => (a(), i("div", {
          key: ee.key,
          class: Fe(["io-highlight", "io-highlight-input", { active: ee.active }]),
          style: At(ee.style)
        }, null, 6))), 128)),
        (a(!0), i(q, null, he($e.value, (ee) => (a(), i("div", {
          key: ee.key,
          class: Fe(["io-highlight", "io-highlight-output", { active: ee.active }]),
          style: At(ee.style)
        }, null, 6))), 128)),
        M.value ? (a(), i("div", {
          key: 0,
          class: Fe(["io-highlight", M.value.kind === "input" ? "io-highlight-hover-input" : "io-highlight-hover-output"]),
          style: At(M.value.style)
        }, null, 6)) : y("", !0)
      ]),
      s("div", M7, [
        s("div", P7, [
          U[8] || (U[8] = s("div", { class: "io-mapping-title" }, "I/O MAPPING MODE", -1)),
          s("div", R7, f(u.value) + " · Hover any input widget or output target on the graph, then click to add it to the contract. ", 1),
          T.value ? (a(), i("div", N7, " Hovering " + f(T.value.kind) + ": " + f(T.value.label), 1)) : y("", !0)
        ]),
        s("div", D7, [
          b(Oe, {
            size: "sm",
            variant: "secondary",
            onClick: U[0] || (U[0] = (ee) => Ue({ reopenPanel: !0 }))
          }, {
            default: h(() => [...U[9] || (U[9] = [
              $(" Exit ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      s("aside", L7, [
        s("div", O7, [
          c.value ? (a(), i("div", A7, " Loading workflow contract... ")) : v.value ? (a(), i("div", U7, f(v.value), 1)) : w.value ? (a(), i(q, { key: 2 }, [
            s("section", z7, [
              s("button", {
                class: "contract-meta-toggle",
                type: "button",
                onClick: U[1] || (U[1] = (ee) => p.value = !p.value)
              }, [
                U[10] || (U[10] = s("span", null, "Contract Details", -1)),
                s("span", F7, f(p.value ? "▾" : "▸"), 1)
              ]),
              p.value ? (a(), i("div", V7, [
                b(Lt, { label: "Default Contract" }, {
                  default: h(() => [
                    b(wt, {
                      "model-value": w.value.default_contract,
                      "full-width": "",
                      "onUpdate:modelValue": Re
                    }, null, 8, ["model-value"])
                  ]),
                  _: 1
                }),
                b(Lt, { label: "Display Name" }, {
                  default: h(() => [
                    b(wt, {
                      modelValue: E.value.display_name,
                      "onUpdate:modelValue": U[2] || (U[2] = (ee) => E.value.display_name = ee),
                      "full-width": ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                b(Lt, { label: "Description" }, {
                  default: h(() => [
                    b(xo, {
                      modelValue: E.value.description,
                      "onUpdate:modelValue": U[3] || (U[3] = (ee) => E.value.description = ee),
                      rows: 2,
                      placeholder: "Optional description for this contract"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])) : y("", !0)
            ]),
            s("section", B7, [
              s("span", W7, f(V.value), 1),
              s("span", G7, f(E.value.inputs.length) + " input" + f(E.value.inputs.length === 1 ? "" : "s"), 1),
              s("span", j7, f(E.value.outputs.length) + " output" + f(E.value.outputs.length === 1 ? "" : "s"), 1)
            ]),
            s("section", H7, [
              s("div", q7, [
                b(no, { variant: "section" }, {
                  default: h(() => [...U[11] || (U[11] = [
                    $("INPUTS", -1)
                  ])]),
                  _: 1
                })
              ]),
              E.value.inputs.length ? y("", !0) : (a(), i("div", K7, " No inputs configured. ")),
              (a(!0), i(q, null, he(E.value.inputs, (ee, De) => (a(), i("div", {
                key: `input-${De}`,
                class: Fe(["item-card", { selected: x.value === De }])
              }, [
                s("div", {
                  class: "item-card-header item-card-header-toggle",
                  onClick: (Le) => Z(De)
                }, [
                  s("div", null, [
                    s("div", Q7, f(ee.name || `Input ${De + 1}`), 1),
                    s("div", Y7, [
                      $(" Node " + f(ee.node_id || "?"), 1),
                      ee.widget_idx !== void 0 ? (a(), i(q, { key: 0 }, [
                        $(" · Widget " + f(ee.widget_idx), 1)
                      ], 64)) : y("", !0)
                    ]),
                    s("div", X7, [
                      s("span", null, f(ee.type || "string"), 1),
                      s("span", null, f(ee.required ? "required" : "optional"), 1),
                      ee.default !== void 0 && ee.default !== "" ? (a(), i("span", Z7, "default " + f(Pe(ee.default)), 1)) : y("", !0)
                    ])
                  ]),
                  b(Oe, {
                    size: "sm",
                    variant: "ghost",
                    onClick: mt((Le) => Ee(De), ["stop"])
                  }, {
                    default: h(() => [...U[12] || (U[12] = [
                      $(" Remove ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ], 8, J7),
                x.value === De ? (a(), i("div", {
                  key: 0,
                  class: "item-grid",
                  onClick: U[4] || (U[4] = mt(() => {
                  }, ["stop"]))
                }, [
                  b(Lt, { label: "Name" }, {
                    default: h(() => [
                      b(wt, {
                        modelValue: ee.name,
                        "onUpdate:modelValue": (Le) => ee.name = Le,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  b(Lt, { label: "Display Name" }, {
                    default: h(() => [
                      b(wt, {
                        modelValue: ee.display_name,
                        "onUpdate:modelValue": (Le) => ee.display_name = Le,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  b(Lt, { label: "Type" }, {
                    default: h(() => [
                      b(Nn, {
                        "model-value": ee.type,
                        options: A,
                        "full-width": "",
                        "onUpdate:modelValue": (Le) => ee.type = Le
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  b(Lt, { label: "Required" }, {
                    default: h(() => [
                      b(Nn, {
                        "model-value": ee.required ? "true" : "false",
                        options: B,
                        "full-width": "",
                        "onUpdate:modelValue": (Le) => ee.required = Le === "true"
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  b(Lt, {
                    class: Fe({ "item-grid-full": ee.type === "string" || ee.type === "enum" }),
                    label: "Default"
                  }, {
                    default: h(() => [
                      ee.type === "string" ? (a(), R(xo, {
                        key: 0,
                        "model-value": te(ee.default),
                        rows: 3,
                        placeholder: "Default string value",
                        "onUpdate:modelValue": (Le) => ee.default = Le
                      }, null, 8, ["model-value", "onUpdate:modelValue"])) : (a(), R(wt, {
                        key: 1,
                        modelValue: ee.default,
                        "onUpdate:modelValue": (Le) => ee.default = Le,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]))
                    ]),
                    _: 2
                  }, 1032, ["class"]),
                  fe(ee.type) ? (a(), R(Lt, {
                    key: 0,
                    label: "Min"
                  }, {
                    default: h(() => [
                      b(wt, {
                        "model-value": we(ee.min),
                        "full-width": "",
                        "onUpdate:modelValue": (Le) => ee.min = se(Le)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : y("", !0),
                  fe(ee.type) ? (a(), R(Lt, {
                    key: 1,
                    label: "Max"
                  }, {
                    default: h(() => [
                      b(wt, {
                        "model-value": we(ee.max),
                        "full-width": "",
                        "onUpdate:modelValue": (Le) => ee.max = se(Le)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : y("", !0),
                  ue(ee.type) ? (a(), R(Lt, {
                    key: 2,
                    class: "item-grid-full",
                    label: "Enum Values"
                  }, {
                    default: h(() => [
                      b(xo, {
                        "model-value": F(ee.enum_values),
                        rows: 4,
                        placeholder: "One or more values, separated by commas or new lines",
                        "onUpdate:modelValue": (Le) => ee.enum_values = Q(Le)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : y("", !0)
                ])) : y("", !0)
              ], 2))), 128))
            ]),
            s("section", eP, [
              s("div", tP, [
                b(no, { variant: "section" }, {
                  default: h(() => [...U[13] || (U[13] = [
                    $("OUTPUTS", -1)
                  ])]),
                  _: 1
                })
              ]),
              E.value.outputs.length ? y("", !0) : (a(), i("div", sP, " No outputs configured. ")),
              (a(!0), i(q, null, he(E.value.outputs, (ee, De) => (a(), i("div", {
                key: `output-${De}`,
                class: Fe(["item-card", { selected: C.value === De }])
              }, [
                s("div", {
                  class: "item-card-header item-card-header-toggle",
                  onClick: (Le) => K(De)
                }, [
                  s("div", null, [
                    s("div", nP, f(ee.name || `Output ${De + 1}`), 1),
                    s("div", aP, [
                      $(" Node " + f(ee.node_id || "?"), 1),
                      ee.selector ? (a(), i(q, { key: 0 }, [
                        $(" · " + f(ee.selector), 1)
                      ], 64)) : y("", !0)
                    ]),
                    s("div", lP, [
                      s("span", null, f(ee.type || "file"), 1)
                    ])
                  ]),
                  b(Oe, {
                    size: "sm",
                    variant: "ghost",
                    onClick: mt((Le) => H(De), ["stop"])
                  }, {
                    default: h(() => [...U[14] || (U[14] = [
                      $(" Remove ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ], 8, oP),
                C.value === De ? (a(), i("div", {
                  key: 0,
                  class: "item-grid",
                  onClick: U[5] || (U[5] = mt(() => {
                  }, ["stop"]))
                }, [
                  b(Lt, { label: "Name" }, {
                    default: h(() => [
                      b(wt, {
                        modelValue: ee.name,
                        "onUpdate:modelValue": (Le) => ee.name = Le,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  b(Lt, { label: "Display Name" }, {
                    default: h(() => [
                      b(wt, {
                        modelValue: ee.display_name,
                        "onUpdate:modelValue": (Le) => ee.display_name = Le,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  b(Lt, { label: "Type" }, {
                    default: h(() => [
                      b(Nn, {
                        "model-value": ee.type,
                        options: A,
                        "full-width": "",
                        "onUpdate:modelValue": (Le) => ee.type = Le
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)
                ])) : y("", !0)
              ], 2))), 128))
            ])
          ], 64)) : y("", !0)
        ]),
        s("div", iP, [
          s("div", rP, [
            b(Oe, {
              variant: "secondary",
              onClick: U[6] || (U[6] = (ee) => Ue({ reopenPanel: !0 }))
            }, {
              default: h(() => [...U[15] || (U[15] = [
                $(" Cancel ", -1)
              ])]),
              _: 1
            })
          ]),
          s("div", cP, [
            b(Oe, {
              variant: "danger",
              disabled: !j.value,
              loading: m.value,
              onClick: ke
            }, {
              default: h(() => [...U[16] || (U[16] = [
                $(" Delete ", -1)
              ])]),
              _: 1
            }, 8, ["disabled", "loading"]),
            b(Oe, {
              variant: "primary",
              loading: d.value,
              onClick: He
            }, {
              default: h(() => [...U[17] || (U[17] = [
                $(" Save ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ])
        ])
      ]),
      _.value ? (a(), R(Il, {
        key: 0,
        title: "Delete Workflow Contract",
        message: `Delete the contract for ${u.value}?`,
        warning: "This removes the saved input/output contract for this workflow. The workflow itself will not be deleted.",
        "confirm-label": "Delete",
        "cancel-label": "Cancel",
        destructive: !0,
        onConfirm: Ye,
        onCancel: U[7] || (U[7] = (ee) => _.value = !1)
      }, null, 8, ["message"])) : y("", !0)
    ])) : y("", !0);
  }
}), dP = /* @__PURE__ */ Se(uP, [["__scopeId", "data-v-13515b27"]]), fP = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:transparent}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}[data-comfygit-theme=comfy] .base-tabs{border-bottom-color:var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .base-tabs__tab{border-radius:var(--cg-radius-sm) var(--cg-radius-sm) 0 0}[data-comfygit-theme=comfy] .base-tabs__tab:hover:not(.disabled){background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .base-tabs__tab.active{background:var(--cg-color-accent-muted)}', mP = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .base-tabs{border-bottom-color:var(--cg-color-border)}[data-comfygit-theme=phosphor] .base-tabs__tab{text-shadow:none}[data-comfygit-theme=phosphor] .base-tabs__tab:before{content:""}[data-comfygit-theme=phosphor] .base-tabs__tab.active:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .base-tabs__tab.active{text-shadow:0 0 8px var(--cg-color-accent);border-bottom-color:var(--cg-color-accent);box-shadow:0 2px 8px var(--cg-shadow-accent)}[data-comfygit-theme=phosphor] .base-tabs__tab:hover:not(.disabled):not(.active){color:var(--cg-color-accent);text-shadow:0 0 4px var(--cg-color-accent)}', vP = {
  comfy: fP,
  phosphor: mP
}, Ml = "comfy", wc = "comfygit-theme";
let Zs = null, _c = Ml;
function pP() {
  try {
    const e = localStorage.getItem(wc);
    if (e && (e === "comfy" || e === "phosphor"))
      return e;
  } catch {
  }
  return Ml;
}
function kc(e = Ml) {
  Zs && Zs.remove(), Zs = document.createElement("style"), Zs.id = "comfygit-theme-styles", Zs.setAttribute("data-theme", e), Zs.textContent = vP[e], document.head.appendChild(Zs), document.body.setAttribute("data-comfygit-theme", e), _c = e;
  try {
    localStorage.setItem(wc, e);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${e}`);
}
function gP() {
  return _c;
}
function hP(e) {
  kc(e);
}
function yP(e) {
  var r;
  const { ui_id: t, state: o } = e || {}, n = (o == null ? void 0 : o.history) || {};
  if (!t)
    return null;
  const l = n[t];
  return l && l.result === "error" && ((r = l.status) == null ? void 0 : r.status_str) === "error" ? (l.status.messages || [])[0] || "Unknown error" : null;
}
const Ii = "ComfyGit.DevAutoReload", bc = "ComfyGit.DevAutoReload.PanelOpen";
function wP() {
  const e = new URLSearchParams(window.location.search).get("comfygitDevReload");
  return e === null ? null : e;
}
function ra() {
  const e = wP();
  if (e !== null) {
    const t = e !== "0" && e !== "false";
    try {
      localStorage.setItem(Ii, t ? "true" : "false");
    } catch {
    }
    return t;
  }
  try {
    return localStorage.getItem(Ii) === "true";
  } catch {
    return !1;
  }
}
function $c(e) {
  if (ra())
    try {
      sessionStorage.setItem(bc, e ? "true" : "false");
    } catch {
    }
}
function _P() {
  if (!ra()) return !1;
  try {
    return sessionStorage.getItem(bc) === "true";
  } catch {
    return !1;
  }
}
async function Ei(e) {
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
async function kP(e) {
  if (!ra()) return;
  const t = e.map((n) => ({
    ...n,
    signature: null
  }));
  for (const n of t)
    try {
      n.signature = await Ei(n.url);
    } catch (l) {
      console.warn(`[ComfyGit] Dev auto-reload could not read ${n.name}:`, l);
    }
  console.log("[ComfyGit] Dev auto-reload enabled");
  let o = !1;
  window.setInterval(async () => {
    if (!o)
      for (const n of t)
        try {
          const l = await Ei(n.url);
          if (n.signature && l && l !== n.signature) {
            o = !0, console.log(`[ComfyGit] ${n.name} changed, reloading page...`), window.setTimeout(() => window.location.reload(), 500);
            return;
          }
          l && (n.signature = l);
        } catch {
        }
  }, 1e3);
}
const bP = "./comfygit-panel.css", $P = "./comfygit-panel.js", Cc = new URL(bP, import.meta.url).href, CP = new URL($P, import.meta.url).href, Pl = document.createElement("link");
Pl.rel = "stylesheet";
Pl.href = Cc;
document.head.appendChild(Pl);
const xP = pP();
kc(xP);
ra() || (sessionStorage.removeItem("ComfyGit.LastView"), sessionStorage.removeItem("ComfyGit.LastSection"));
window.ComfyGit = {
  setTheme: (e) => {
    console.log(`[ComfyGit] Switching to theme: ${e}`), hP(e);
  },
  getTheme: () => {
    const e = gP();
    return console.log(`[ComfyGit] Current theme: ${e}`), e;
  }
};
let $s = null, Zo = null, Xt = null, en = null, zo = null, Ti = null, Fo = null, Mi = null, Vo = null, Pi = null;
const So = k(null);
let un = "no_workspace", xc = !1;
async function Dn() {
  var e;
  if (!((e = Zt) != null && e.api)) return null;
  try {
    const t = await Zt.api.fetchApi("/v2/comfygit/status");
    t.ok && (So.value = await t.json());
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
        un = o.state, xc = o.has_comfyui_manager ?? !1;
      }
    } catch {
    }
}
function nl() {
  var t;
  if (un === "managed" || !xc) return;
  const e = document.querySelectorAll("button.comfyui-button");
  for (const o of e)
    if (((t = o.textContent) == null ? void 0 : t.trim()) === "Manager" && !o.querySelector("svg, i, img")) {
      o.style.display = "none", console.log("[ComfyGit] Hiding built-in Manager button (ComfyUI-Manager present)");
      return;
    }
}
function SP() {
  if (!So.value) return !1;
  const e = So.value.workflows;
  return e.new.length > 0 || e.modified.length > 0 || e.deleted.length > 0 || So.value.has_changes;
}
function Bo(e) {
  jo(), $c(!0), $s = document.createElement("div"), $s.className = "comfygit-panel-overlay";
  const t = document.createElement("div");
  t.className = "comfygit-panel-container", $s.appendChild(t), $s.addEventListener("click", (n) => {
    n.target === $s && jo();
  });
  const o = (n) => {
    n.key === "Escape" && (jo(), document.removeEventListener("keydown", o));
  };
  document.addEventListener("keydown", o), Zo = vn({
    render: () => Ro(yT, {
      initialView: e,
      onClose: jo,
      onStatusUpdate: async (n) => {
        So.value = n, tn(), await ol(), al(), nl();
      }
    })
  }), Zo.mount(t), document.body.appendChild($s);
}
function jo() {
  $c(!1), Zo && (Zo.unmount(), Zo = null), $s && ($s.remove(), $s = null);
}
function Ri(e) {
  Wo(), Xt = document.createElement("div"), Xt.className = "comfygit-commit-popover-container";
  const t = e.getBoundingClientRect();
  Xt.style.position = "fixed", Xt.style.top = `${t.bottom + 8}px`, Xt.style.right = `${window.innerWidth - t.right}px`, Xt.style.zIndex = "10001";
  const o = (l) => {
    Xt && !Xt.contains(l.target) && l.target !== e && (Wo(), document.removeEventListener("mousedown", o));
  };
  setTimeout(() => document.addEventListener("mousedown", o), 0);
  const n = (l) => {
    l.key === "Escape" && (Wo(), document.removeEventListener("keydown", n));
  };
  document.addEventListener("keydown", n), en = vn({
    render: () => Ro(pc, {
      status: So.value,
      onClose: Wo,
      onCommitted: (l) => {
        Wo(), IP(l.success, l.message), Dn().then(tn);
      }
    })
  }), en.mount(Xt), document.body.appendChild(Xt);
}
function Wo() {
  en && (en.unmount(), en = null), Xt && (Xt.remove(), Xt = null);
}
function IP(e, t) {
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
function EP() {
  zo || (zo = document.createElement("div"), zo.className = "comfygit-download-queue-root", Ti = vn({
    render: () => Ro(fM)
  }), Ti.mount(zo), document.body.appendChild(zo), console.log("[ComfyGit] Model download queue mounted"));
}
function TP() {
  Fo || (Fo = document.createElement("div"), Fo.className = "comfygit-missing-resources-root", Mi = vn({
    render: () => Ro(I7)
  }), Mi.mount(Fo), document.body.appendChild(Fo), console.log("[ComfyGit] Missing resources popup mounted"));
}
function MP() {
  Vo || (Vo = document.createElement("div"), Vo.className = "comfygit-io-mapping-root", Pi = vn({
    render: () => Ro(dP, {
      comfyApp: Zt
    })
  }), Pi.mount(Vo), document.body.appendChild(Vo), console.log("[ComfyGit] Workflow I/O mapping overlay mounted"));
}
let Kt = null;
function tn() {
  if (!Kt) return;
  const e = Kt.querySelector(".commit-indicator");
  e && (e.style.display = SP() ? "block" : "none");
}
function al() {
  if (!Kt) return;
  const e = un !== "managed";
  Kt.disabled = e, Kt.title = e ? "Commit disabled - switch to a managed environment first" : "Quick Commit";
}
const Sc = document.createElement("style");
Sc.textContent = `
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
document.head.appendChild(Sc);
Zt.registerExtension({
  name: "Comfy.ComfyGitPanel",
  // Commands that can be triggered by keybindings or menu items
  commands: [
    {
      id: "ComfyGit.OpenPanel",
      label: "Open ComfyGit Panel",
      icon: "pi pi-folder-open",
      function: () => Bo()
    },
    {
      id: "ComfyGit.QuickCommit",
      label: "Quick Commit",
      icon: "pi pi-check",
      function: () => {
        Kt && !Kt.disabled && Ri(Kt);
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
    t.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", t.textContent = "ComfyGit", t.title = "ComfyGit Control Panel", t.onclick = () => Bo(), Kt = document.createElement("button"), Kt.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", Kt.innerHTML = 'Commit <span class="commit-indicator"></span>', Kt.title = "Quick Commit", Kt.onclick = () => Ri(Kt), e.appendChild(t), e.appendChild(Kt), (r = (l = Zt.menu) == null ? void 0 : l.settingsGroup) != null && r.element && (Zt.menu.settingsGroup.element.before(e), console.log("[ComfyGit] Control Panel buttons added to toolbar")), EP(), TP(), MP(), window.addEventListener("comfygit:open-panel", ((u) => {
      var d;
      const c = (d = u.detail) == null ? void 0 : d.initialView;
      Bo(c);
    })), window.addEventListener("comfygit:close-panel", (() => {
      jo();
    }));
    const { loadPendingDownloads: o } = No();
    o(), await Promise.all([Dn(), ol()]), tn(), al(), nl(), _P() && setTimeout(() => {
      $s || Bo();
    }, 100), kP([
      { name: "panel script", url: CP },
      { name: "panel stylesheet", url: Cc }
    ]), setTimeout(nl, 100), setInterval(async () => {
      await Promise.all([Dn(), ol()]), tn(), al();
    }, 3e4);
    const n = Zt.api;
    if (n) {
      let u = function() {
        localStorage.removeItem("workflow"), localStorage.removeItem("Comfy.PreviousWorkflow"), localStorage.removeItem("Comfy.OpenWorkflowsPaths"), localStorage.removeItem("Comfy.ActiveWorkflowIndex"), Object.keys(sessionStorage).forEach((g) => {
          (g.startsWith("workflow:") || g.startsWith("Comfy.OpenWorkflowsPaths:") || g.startsWith("Comfy.ActiveWorkflowIndex:")) && sessionStorage.removeItem(g);
        }), window.location.reload();
      }, c = function() {
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
        `, p.onmouseover = () => p.style.background = "var(--comfy-input-bg)", p.onmouseout = () => p.style.background = "var(--comfy-menu-bg)", p.onclick = () => u(), g.appendChild(p);
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
        const x = document.createElement("div");
        x.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 4px;";
        const C = document.createElement("div");
        C.textContent = "Node installation failed", C.style.cssText = "font-weight: 600; color: #e53935;", x.appendChild(C);
        const S = document.createElement("div");
        S.textContent = "Dependency conflict detected", S.style.cssText = "font-size: 12px; opacity: 0.8;", x.appendChild(S), p.appendChild(x);
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
          p.remove(), Bo("debug-env");
        }, p.appendChild(T);
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
        `, M.onmouseover = () => M.style.opacity = "1", M.onmouseout = () => M.style.opacity = "0.6", M.onclick = () => p.remove(), p.appendChild(M), document.body.appendChild(p), console.log("[ComfyGit] Manager error toast displayed:", g), setTimeout(() => {
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
        const x = document.createElement("div");
        x.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 2px;";
        const C = document.createElement("div");
        C.textContent = "To apply changes, please restart ComfyUI", C.style.cssText = "font-weight: 500; color: #fff;", x.appendChild(C);
        const S = document.createElement("div");
        S.textContent = `${g} node package${g > 1 ? "s" : ""} ready to install`, S.style.cssText = "font-size: 12px; opacity: 0.7;", x.appendChild(S), p.appendChild(x);
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
                Zt.refreshComboInNodes && (await Zt.refreshComboInNodes(), console.log("[ComfyGit] Node definitions refreshed successfully")), _.textContent = "✅", C.textContent = "Nodes Installed", C.style.color = "#4caf50", S.textContent = `${g} package${g > 1 ? "s" : ""} installed successfully!`, p.style.borderColor = "#4caf50", T.style.display = "none", setTimeout(() => {
                  p.remove();
                }, 3e3);
              } catch (A) {
                console.error("[ComfyGit] Failed to refresh nodes:", A), _.textContent = "✅", C.textContent = "Restart Complete", C.style.color = "#4caf50", S.textContent = "Refresh the page to load new nodes.", p.style.borderColor = "#4caf50", T.style.display = "none";
              }
            };
            n.addEventListener("reconnected", P, { once: !0 }), await fetch("/v2/manager/reboot");
          } catch (P) {
            console.error("[ComfyGit] Failed to restart:", P), C.textContent = "Restart Failed", C.style.color = "#e53935", S.textContent = "Could not restart server. Try again.", p.style.borderColor = "#e53935", T.textContent = "Try Again", T.disabled = !1, T.style.opacity = "1";
          }
        }, p.appendChild(T);
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
        `, M.onmouseover = () => M.style.opacity = "1", M.onmouseout = () => M.style.opacity = "0.6", M.onclick = () => p.remove(), p.appendChild(M), document.body.appendChild(p), console.log(`[ComfyGit] Restart required notification displayed (${g} packages installed)`);
      };
      n.addEventListener("comfygit:workflow-changed", async (g) => {
        const { change_type: w, workflow_name: p } = g.detail;
        console.log(`[ComfyGit] Workflow ${w}: ${p}`), await Dn(), tn();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let v = !1;
      n.addEventListener("status", async (g) => {
        const w = g.detail != null;
        w && !v && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") !== "false" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), u()) : c()), v = w;
      }), console.log("[ComfyGit] Refresh notification system initialized"), n.addEventListener("cm-task-completed", (g) => {
        const w = yP(g.detail);
        w && d(w);
      }), console.log("[ComfyGit] Manager error notification system initialized"), window.addEventListener("comfygit:nodes-installed", (g) => {
        const w = g, { count: p = 1 } = w.detail || {};
        m(p);
      }), console.log("[ComfyGit] Restart notification system initialized");
    }
  }
});
