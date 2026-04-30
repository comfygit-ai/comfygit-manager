var Nc = Object.defineProperty;
var Oc = (e, t, o) => t in e ? Nc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var bn = (e, t, o) => Oc(e, typeof t != "symbol" ? t + "" : t, o);
import { app as ws } from "../../scripts/app.js";
/**
* @vue/shared v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function il(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const o of e.split(",")) t[o] = 1;
  return (o) => o in t;
}
const wt = {}, wo = [], $s = () => {
}, Ui = () => !1, Xn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), rl = (e) => e.startsWith("onUpdate:"), Pt = Object.assign, cl = (e, t) => {
  const o = e.indexOf(t);
  o > -1 && e.splice(o, 1);
}, Uc = Object.prototype.hasOwnProperty, ft = (e, t) => Uc.call(e, t), Xe = Array.isArray, _o = (e) => vn(e) === "[object Map]", Mo = (e) => vn(e) === "[object Set]", Nl = (e) => vn(e) === "[object Date]", tt = (e) => typeof e == "function", Ct = (e) => typeof e == "string", us = (e) => typeof e == "symbol", ht = (e) => e !== null && typeof e == "object", Ai = (e) => (ht(e) || tt(e)) && tt(e.then) && tt(e.catch), zi = Object.prototype.toString, vn = (e) => zi.call(e), Ac = (e) => vn(e).slice(8, -1), Fi = (e) => vn(e) === "[object Object]", ul = (e) => Ct(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Ko = /* @__PURE__ */ il(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Zn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((o) => t[o] || (t[o] = e(o)));
}, zc = /-\w/g, ls = Zn(
  (e) => e.replace(zc, (t) => t.slice(1).toUpperCase())
), Fc = /\B([A-Z])/g, Js = Zn(
  (e) => e.replace(Fc, "-$1").toLowerCase()
), ea = Zn((e) => e.charAt(0).toUpperCase() + e.slice(1)), Ma = Zn(
  (e) => e ? `on${ea(e)}` : ""
), js = (e, t) => !Object.is(e, t), Mn = (e, ...t) => {
  for (let o = 0; o < e.length; o++)
    e[o](...t);
}, Vi = (e, t, o, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: o
  });
}, ta = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Vc = (e) => {
  const t = Ct(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Ol;
const sa = () => Ol || (Ol = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Lt(e) {
  if (Xe(e)) {
    const t = {};
    for (let o = 0; o < e.length; o++) {
      const n = e[o], l = Ct(n) ? jc(n) : Lt(n);
      if (l)
        for (const r in l)
          t[r] = l[r];
    }
    return t;
  } else if (Ct(e) || ht(e))
    return e;
}
const Bc = /;(?![^(]*\))/g, Wc = /:([^]+)/, Gc = /\/\*[^]*?\*\//g;
function jc(e) {
  const t = {};
  return e.replace(Gc, "").split(Bc).forEach((o) => {
    if (o) {
      const n = o.split(Wc);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function Be(e) {
  let t = "";
  if (Ct(e))
    t = e;
  else if (Xe(e))
    for (let o = 0; o < e.length; o++) {
      const n = Be(e[o]);
      n && (t += n + " ");
    }
  else if (ht(e))
    for (const o in e)
      e[o] && (t += o + " ");
  return t.trim();
}
const Hc = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", qc = /* @__PURE__ */ il(Hc);
function Bi(e) {
  return !!e || e === "";
}
function Kc(e, t) {
  if (e.length !== t.length) return !1;
  let o = !0;
  for (let n = 0; o && n < e.length; n++)
    o = lo(e[n], t[n]);
  return o;
}
function lo(e, t) {
  if (e === t) return !0;
  let o = Nl(e), n = Nl(t);
  if (o || n)
    return o && n ? e.getTime() === t.getTime() : !1;
  if (o = us(e), n = us(t), o || n)
    return e === t;
  if (o = Xe(e), n = Xe(t), o || n)
    return o && n ? Kc(e, t) : !1;
  if (o = ht(e), n = ht(t), o || n) {
    if (!o || !n)
      return !1;
    const l = Object.keys(e).length, r = Object.keys(t).length;
    if (l !== r)
      return !1;
    for (const u in e) {
      const c = e.hasOwnProperty(u), d = t.hasOwnProperty(u);
      if (c && !d || !c && d || !lo(e[u], t[u]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function dl(e, t) {
  return e.findIndex((o) => lo(o, t));
}
const Wi = (e) => !!(e && e.__v_isRef === !0), m = (e) => Ct(e) ? e : e == null ? "" : Xe(e) || ht(e) && (e.toString === zi || !tt(e.toString)) ? Wi(e) ? m(e.value) : JSON.stringify(e, Gi, 2) : String(e), Gi = (e, t) => Wi(t) ? Gi(e, t.value) : _o(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (o, [n, l], r) => (o[Pa(n, r) + " =>"] = l, o),
    {}
  )
} : Mo(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((o) => Pa(o))
} : us(t) ? Pa(t) : ht(t) && !Xe(t) && !Fi(t) ? String(t) : t, Pa = (e, t = "") => {
  var o;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    us(e) ? `Symbol(${(o = e.description) != null ? o : t})` : e
  );
};
/**
* @vue/reactivity v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Qt;
class Jc {
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
function Qc() {
  return Qt;
}
let _t;
const Ra = /* @__PURE__ */ new WeakSet();
class ji {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Qt && Qt.active && Qt.effects.push(this);
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
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || qi(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Ul(this), Ki(this);
    const t = _t, o = rs;
    _t = this, rs = !0;
    try {
      return this.fn();
    } finally {
      Ji(this), _t = t, rs = o, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        vl(t);
      this.deps = this.depsTail = void 0, Ul(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Ra.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Ga(this) && this.run();
  }
  get dirty() {
    return Ga(this);
  }
}
let Hi = 0, Jo, Qo;
function qi(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Qo, Qo = e;
    return;
  }
  e.next = Jo, Jo = e;
}
function ml() {
  Hi++;
}
function fl() {
  if (--Hi > 0)
    return;
  if (Qo) {
    let t = Qo;
    for (Qo = void 0; t; ) {
      const o = t.next;
      t.next = void 0, t.flags &= -9, t = o;
    }
  }
  let e;
  for (; Jo; ) {
    let t = Jo;
    for (Jo = void 0; t; ) {
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
function Ki(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Ji(e) {
  let t, o = e.depsTail, n = o;
  for (; n; ) {
    const l = n.prevDep;
    n.version === -1 ? (n === o && (o = l), vl(n), Yc(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = l;
  }
  e.deps = t, e.depsTail = o;
}
function Ga(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Qi(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Qi(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === an) || (e.globalVersion = an, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ga(e))))
    return;
  e.flags |= 2;
  const t = e.dep, o = _t, n = rs;
  _t = e, rs = !0;
  try {
    Ki(e);
    const l = e.fn(e._value);
    (t.version === 0 || js(l, e._value)) && (e.flags |= 128, e._value = l, t.version++);
  } catch (l) {
    throw t.version++, l;
  } finally {
    _t = o, rs = n, Ji(e), e.flags &= -3;
  }
}
function vl(e, t = !1) {
  const { dep: o, prevSub: n, nextSub: l } = e;
  if (n && (n.nextSub = l, e.prevSub = void 0), l && (l.prevSub = n, e.nextSub = void 0), o.subs === e && (o.subs = n, !n && o.computed)) {
    o.computed.flags &= -5;
    for (let r = o.computed.deps; r; r = r.nextDep)
      vl(r, !0);
  }
  !t && !--o.sc && o.map && o.map.delete(o.key);
}
function Yc(e) {
  const { prevDep: t, nextDep: o } = e;
  t && (t.nextDep = o, e.prevDep = void 0), o && (o.prevDep = t, e.nextDep = void 0);
}
let rs = !0;
const Yi = [];
function Ns() {
  Yi.push(rs), rs = !1;
}
function Os() {
  const e = Yi.pop();
  rs = e === void 0 ? !0 : e;
}
function Ul(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const o = _t;
    _t = void 0;
    try {
      t();
    } finally {
      _t = o;
    }
  }
}
let an = 0;
class Xc {
  constructor(t, o) {
    this.sub = t, this.dep = o, this.version = o.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class pl {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!_t || !rs || _t === this.computed)
      return;
    let o = this.activeLink;
    if (o === void 0 || o.sub !== _t)
      o = this.activeLink = new Xc(_t, this), _t.deps ? (o.prevDep = _t.depsTail, _t.depsTail.nextDep = o, _t.depsTail = o) : _t.deps = _t.depsTail = o, Xi(o);
    else if (o.version === -1 && (o.version = this.version, o.nextDep)) {
      const n = o.nextDep;
      n.prevDep = o.prevDep, o.prevDep && (o.prevDep.nextDep = n), o.prevDep = _t.depsTail, o.nextDep = void 0, _t.depsTail.nextDep = o, _t.depsTail = o, _t.deps === o && (_t.deps = n);
    }
    return o;
  }
  trigger(t) {
    this.version++, an++, this.notify(t);
  }
  notify(t) {
    ml();
    try {
      for (let o = this.subs; o; o = o.prevSub)
        o.sub.notify() && o.sub.dep.notify();
    } finally {
      fl();
    }
  }
}
function Xi(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        Xi(n);
    }
    const o = e.dep.subs;
    o !== e && (e.prevSub = o, o && (o.nextSub = e)), e.dep.subs = e;
  }
}
const ja = /* @__PURE__ */ new WeakMap(), oo = Symbol(
  ""
), Ha = Symbol(
  ""
), ln = Symbol(
  ""
);
function Ft(e, t, o) {
  if (rs && _t) {
    let n = ja.get(e);
    n || ja.set(e, n = /* @__PURE__ */ new Map());
    let l = n.get(o);
    l || (n.set(o, l = new pl()), l.map = n, l.key = o), l.track();
  }
}
function Rs(e, t, o, n, l, r) {
  const u = ja.get(e);
  if (!u) {
    an++;
    return;
  }
  const c = (d) => {
    d && d.trigger();
  };
  if (ml(), t === "clear")
    u.forEach(c);
  else {
    const d = Xe(e), v = d && ul(o);
    if (d && o === "length") {
      const f = Number(n);
      u.forEach((p, w) => {
        (w === "length" || w === ln || !us(w) && w >= f) && c(p);
      });
    } else
      switch ((o !== void 0 || u.has(void 0)) && c(u.get(o)), v && c(u.get(ln)), t) {
        case "add":
          d ? v && c(u.get("length")) : (c(u.get(oo)), _o(e) && c(u.get(Ha)));
          break;
        case "delete":
          d || (c(u.get(oo)), _o(e) && c(u.get(Ha)));
          break;
        case "set":
          _o(e) && c(u.get(oo));
          break;
      }
  }
  fl();
}
function fo(e) {
  const t = ct(e);
  return t === e ? t : (Ft(t, "iterate", ln), ns(e) ? t : t.map(ds));
}
function oa(e) {
  return Ft(e = ct(e), "iterate", ln), e;
}
function Bs(e, t) {
  return Us(e) ? no(e) ? Io(ds(t)) : Io(t) : ds(t);
}
const Zc = {
  __proto__: null,
  [Symbol.iterator]() {
    return La(this, Symbol.iterator, (e) => Bs(this, e));
  },
  concat(...e) {
    return fo(this).concat(
      ...e.map((t) => Xe(t) ? fo(t) : t)
    );
  },
  entries() {
    return La(this, "entries", (e) => (e[1] = Bs(this, e[1]), e));
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
    return Da(this, "includes", e);
  },
  indexOf(...e) {
    return Da(this, "indexOf", e);
  },
  join(e) {
    return fo(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Da(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Ts(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Uo(this, "pop");
  },
  push(...e) {
    return Uo(this, "push", e);
  },
  reduce(e, ...t) {
    return Al(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Al(this, "reduceRight", e, t);
  },
  shift() {
    return Uo(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Ts(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Uo(this, "splice", e);
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
    return Uo(this, "unshift", e);
  },
  values() {
    return La(this, "values", (e) => Bs(this, e));
  }
};
function La(e, t, o) {
  const n = oa(e), l = n[t]();
  return n !== e && !ns(e) && (l._next = l.next, l.next = () => {
    const r = l._next();
    return r.done || (r.value = o(r.value)), r;
  }), l;
}
const eu = Array.prototype;
function Ts(e, t, o, n, l, r) {
  const u = oa(e), c = u !== e && !ns(e), d = u[t];
  if (d !== eu[t]) {
    const p = d.apply(e, r);
    return c ? ds(p) : p;
  }
  let v = o;
  u !== e && (c ? v = function(p, w) {
    return o.call(this, Bs(e, p), w, e);
  } : o.length > 2 && (v = function(p, w) {
    return o.call(this, p, w, e);
  }));
  const f = d.call(u, v, n);
  return c && l ? l(f) : f;
}
function Al(e, t, o, n) {
  const l = oa(e);
  let r = o;
  return l !== e && (ns(e) ? o.length > 3 && (r = function(u, c, d) {
    return o.call(this, u, c, d, e);
  }) : r = function(u, c, d) {
    return o.call(this, u, Bs(e, c), d, e);
  }), l[t](r, ...n);
}
function Da(e, t, o) {
  const n = ct(e);
  Ft(n, "iterate", ln);
  const l = n[t](...o);
  return (l === -1 || l === !1) && yl(o[0]) ? (o[0] = ct(o[0]), n[t](...o)) : l;
}
function Uo(e, t, o = []) {
  Ns(), ml();
  const n = ct(e)[t].apply(e, o);
  return fl(), Os(), n;
}
const tu = /* @__PURE__ */ il("__proto__,__v_isRef,__isVue"), Zi = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(us)
);
function su(e) {
  us(e) || (e = String(e));
  const t = ct(this);
  return Ft(t, "has", e), t.hasOwnProperty(e);
}
class er {
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
      return n === (l ? r ? mu : nr : r ? or : sr).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const u = Xe(t);
    if (!l) {
      let d;
      if (u && (d = Zc[o]))
        return d;
      if (o === "hasOwnProperty")
        return su;
    }
    const c = Reflect.get(
      t,
      o,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Gt(t) ? t : n
    );
    if ((us(o) ? Zi.has(o) : tu(o)) || (l || Ft(t, "get", o), r))
      return c;
    if (Gt(c)) {
      const d = u && ul(o) ? c : c.value;
      return l && ht(d) ? zn(d) : d;
    }
    return ht(c) ? l ? zn(c) : co(c) : c;
  }
}
class tr extends er {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, o, n, l) {
    let r = t[o];
    const u = Xe(t) && ul(o);
    if (!this._isShallow) {
      const v = Us(r);
      if (!ns(n) && !Us(n) && (r = ct(r), n = ct(n)), !u && Gt(r) && !Gt(n))
        return v || (r.value = n), !0;
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
    return (!us(o) || !Zi.has(o)) && Ft(t, "has", o), n;
  }
  ownKeys(t) {
    return Ft(
      t,
      "iterate",
      Xe(t) ? "length" : oo
    ), Reflect.ownKeys(t);
  }
}
class ou extends er {
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
const nu = /* @__PURE__ */ new tr(), au = /* @__PURE__ */ new ou(), lu = /* @__PURE__ */ new tr(!0);
const qa = (e) => e, $n = (e) => Reflect.getPrototypeOf(e);
function iu(e, t, o) {
  return function(...n) {
    const l = this.__v_raw, r = ct(l), u = _o(r), c = e === "entries" || e === Symbol.iterator && u, d = e === "keys" && u, v = l[e](...n), f = o ? qa : t ? Io : ds;
    return !t && Ft(
      r,
      "iterate",
      d ? Ha : oo
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
function Cn(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function ru(e, t) {
  const o = {
    get(l) {
      const r = this.__v_raw, u = ct(r), c = ct(l);
      e || (js(l, c) && Ft(u, "get", l), Ft(u, "get", c));
      const { has: d } = $n(u), v = t ? qa : e ? Io : ds;
      if (d.call(u, l))
        return v(r.get(l));
      if (d.call(u, c))
        return v(r.get(c));
      r !== u && r.get(l);
    },
    get size() {
      const l = this.__v_raw;
      return !e && Ft(ct(l), "iterate", oo), l.size;
    },
    has(l) {
      const r = this.__v_raw, u = ct(r), c = ct(l);
      return e || (js(l, c) && Ft(u, "has", l), Ft(u, "has", c)), l === c ? r.has(l) : r.has(l) || r.has(c);
    },
    forEach(l, r) {
      const u = this, c = u.__v_raw, d = ct(c), v = t ? qa : e ? Io : ds;
      return !e && Ft(d, "iterate", oo), c.forEach((f, p) => l.call(r, v(f), v(p), u));
    }
  };
  return Pt(
    o,
    e ? {
      add: Cn("add"),
      set: Cn("set"),
      delete: Cn("delete"),
      clear: Cn("clear")
    } : {
      add(l) {
        !t && !ns(l) && !Us(l) && (l = ct(l));
        const r = ct(this);
        return $n(r).has.call(r, l) || (r.add(l), Rs(r, "add", l, l)), this;
      },
      set(l, r) {
        !t && !ns(r) && !Us(r) && (r = ct(r));
        const u = ct(this), { has: c, get: d } = $n(u);
        let v = c.call(u, l);
        v || (l = ct(l), v = c.call(u, l));
        const f = d.call(u, l);
        return u.set(l, r), v ? js(r, f) && Rs(u, "set", l, r) : Rs(u, "add", l, r), this;
      },
      delete(l) {
        const r = ct(this), { has: u, get: c } = $n(r);
        let d = u.call(r, l);
        d || (l = ct(l), d = u.call(r, l)), c && c.call(r, l);
        const v = r.delete(l);
        return d && Rs(r, "delete", l, void 0), v;
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
    o[l] = iu(l, e, t);
  }), o;
}
function gl(e, t) {
  const o = ru(e, t);
  return (n, l, r) => l === "__v_isReactive" ? !e : l === "__v_isReadonly" ? e : l === "__v_raw" ? n : Reflect.get(
    ft(o, l) && l in n ? o : n,
    l,
    r
  );
}
const cu = {
  get: /* @__PURE__ */ gl(!1, !1)
}, uu = {
  get: /* @__PURE__ */ gl(!1, !0)
}, du = {
  get: /* @__PURE__ */ gl(!0, !1)
};
const sr = /* @__PURE__ */ new WeakMap(), or = /* @__PURE__ */ new WeakMap(), nr = /* @__PURE__ */ new WeakMap(), mu = /* @__PURE__ */ new WeakMap();
function fu(e) {
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
function vu(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : fu(Ac(e));
}
function co(e) {
  return Us(e) ? e : hl(
    e,
    !1,
    nu,
    cu,
    sr
  );
}
function pu(e) {
  return hl(
    e,
    !1,
    lu,
    uu,
    or
  );
}
function zn(e) {
  return hl(
    e,
    !0,
    au,
    du,
    nr
  );
}
function hl(e, t, o, n, l) {
  if (!ht(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = vu(e);
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
function no(e) {
  return Us(e) ? no(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Us(e) {
  return !!(e && e.__v_isReadonly);
}
function ns(e) {
  return !!(e && e.__v_isShallow);
}
function yl(e) {
  return e ? !!e.__v_raw : !1;
}
function ct(e) {
  const t = e && e.__v_raw;
  return t ? ct(t) : e;
}
function gu(e) {
  return !ft(e, "__v_skip") && Object.isExtensible(e) && Vi(e, "__v_skip", !0), e;
}
const ds = (e) => ht(e) ? co(e) : e, Io = (e) => ht(e) ? zn(e) : e;
function Gt(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function k(e) {
  return hu(e, !1);
}
function hu(e, t) {
  return Gt(e) ? e : new yu(e, t);
}
class yu {
  constructor(t, o) {
    this.dep = new pl(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = o ? t : ct(t), this._value = o ? t : ds(t), this.__v_isShallow = o;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const o = this._rawValue, n = this.__v_isShallow || ns(t) || Us(t);
    t = n ? t : ct(t), js(t, o) && (this._rawValue = t, this._value = n ? t : ds(t), this.dep.trigger());
  }
}
function st(e) {
  return Gt(e) ? e.value : e;
}
const wu = {
  get: (e, t, o) => t === "__v_raw" ? e : st(Reflect.get(e, t, o)),
  set: (e, t, o, n) => {
    const l = e[t];
    return Gt(l) && !Gt(o) ? (l.value = o, !0) : Reflect.set(e, t, o, n);
  }
};
function ar(e) {
  return no(e) ? e : new Proxy(e, wu);
}
class _u {
  constructor(t, o, n) {
    this.fn = t, this.setter = o, this._value = void 0, this.dep = new pl(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = an - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !o, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    _t !== this)
      return qi(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Qi(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function ku(e, t, o = !1) {
  let n, l;
  return tt(e) ? n = e : (n = e.get, l = e.set), new _u(n, l, o);
}
const xn = {}, Fn = /* @__PURE__ */ new WeakMap();
let to;
function bu(e, t = !1, o = to) {
  if (o) {
    let n = Fn.get(o);
    n || Fn.set(o, n = []), n.push(e);
  }
}
function $u(e, t, o = wt) {
  const { immediate: n, deep: l, once: r, scheduler: u, augmentJob: c, call: d } = o, v = (P) => l ? P : ns(P) || l === !1 || l === 0 ? Ls(P, 1) : Ls(P);
  let f, p, w, g, _ = !1, C = !1;
  if (Gt(e) ? (p = () => e.value, _ = ns(e)) : no(e) ? (p = () => v(e), _ = !0) : Xe(e) ? (C = !0, _ = e.some((P) => no(P) || ns(P)), p = () => e.map((P) => {
    if (Gt(P))
      return P.value;
    if (no(P))
      return v(P);
    if (tt(P))
      return d ? d(P, 2) : P();
  })) : tt(e) ? t ? p = d ? () => d(e, 2) : e : p = () => {
    if (w) {
      Ns();
      try {
        w();
      } finally {
        Os();
      }
    }
    const P = to;
    to = f;
    try {
      return d ? d(e, 3, [g]) : e(g);
    } finally {
      to = P;
    }
  } : p = $s, t && l) {
    const P = p, O = l === !0 ? 1 / 0 : l;
    p = () => Ls(P(), O);
  }
  const $ = Qc(), x = () => {
    f.stop(), $ && $.active && cl($.effects, f);
  };
  if (r && t) {
    const P = t;
    t = (...O) => {
      P(...O), x();
    };
  }
  let I = C ? new Array(e.length).fill(xn) : xn;
  const M = (P) => {
    if (!(!(f.flags & 1) || !f.dirty && !P))
      if (t) {
        const O = f.run();
        if (l || _ || (C ? O.some((F, W) => js(F, I[W])) : js(O, I))) {
          w && w();
          const F = to;
          to = f;
          try {
            const W = [
              O,
              // pass undefined as the old value when it's changed for the first time
              I === xn ? void 0 : C && I[0] === xn ? [] : I,
              g
            ];
            I = O, d ? d(t, 3, W) : (
              // @ts-expect-error
              t(...W)
            );
          } finally {
            to = F;
          }
        }
      } else
        f.run();
  };
  return c && c(M), f = new ji(p), f.scheduler = u ? () => u(M, !1) : M, g = (P) => bu(P, !1, f), w = f.onStop = () => {
    const P = Fn.get(f);
    if (P) {
      if (d)
        d(P, 4);
      else
        for (const O of P) O();
      Fn.delete(f);
    }
  }, t ? n ? M(!0) : I = f.run() : u ? u(M.bind(null, !0), !0) : f.run(), x.pause = f.pause.bind(f), x.resume = f.resume.bind(f), x.stop = x, x;
}
function Ls(e, t = 1 / 0, o) {
  if (t <= 0 || !ht(e) || e.__v_skip || (o = o || /* @__PURE__ */ new Map(), (o.get(e) || 0) >= t))
    return e;
  if (o.set(e, t), t--, Gt(e))
    Ls(e.value, t, o);
  else if (Xe(e))
    for (let n = 0; n < e.length; n++)
      Ls(e[n], t, o);
  else if (Mo(e) || _o(e))
    e.forEach((n) => {
      Ls(n, t, o);
    });
  else if (Fi(e)) {
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
function pn(e, t, o, n) {
  try {
    return n ? e(...n) : e();
  } catch (l) {
    na(l, t, o);
  }
}
function ms(e, t, o, n) {
  if (tt(e)) {
    const l = pn(e, t, o, n);
    return l && Ai(l) && l.catch((r) => {
      na(r, t, o);
    }), l;
  }
  if (Xe(e)) {
    const l = [];
    for (let r = 0; r < e.length; r++)
      l.push(ms(e[r], t, o, n));
    return l;
  }
}
function na(e, t, o, n = !0) {
  const l = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: u } = t && t.appContext.config || wt;
  if (t) {
    let c = t.parent;
    const d = t.proxy, v = `https://vuejs.org/error-reference/#runtime-${o}`;
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
      Ns(), pn(r, null, 10, [
        e,
        d,
        v
      ]), Os();
      return;
    }
  }
  Cu(e, o, l, n, u);
}
function Cu(e, t, o, n = !0, l = !1) {
  if (l)
    throw e;
  console.error(e);
}
const Kt = [];
let ys = -1;
const ko = [];
let Ws = null, go = 0;
const lr = /* @__PURE__ */ Promise.resolve();
let Vn = null;
function Rt(e) {
  const t = Vn || lr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function xu(e) {
  let t = ys + 1, o = Kt.length;
  for (; t < o; ) {
    const n = t + o >>> 1, l = Kt[n], r = rn(l);
    r < e || r === e && l.flags & 2 ? t = n + 1 : o = n;
  }
  return t;
}
function wl(e) {
  if (!(e.flags & 1)) {
    const t = rn(e), o = Kt[Kt.length - 1];
    !o || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= rn(o) ? Kt.push(e) : Kt.splice(xu(t), 0, e), e.flags |= 1, ir();
  }
}
function ir() {
  Vn || (Vn = lr.then(cr));
}
function Su(e) {
  Xe(e) ? ko.push(...e) : Ws && e.id === -1 ? Ws.splice(go + 1, 0, e) : e.flags & 1 || (ko.push(e), e.flags |= 1), ir();
}
function zl(e, t, o = ys + 1) {
  for (; o < Kt.length; o++) {
    const n = Kt[o];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      Kt.splice(o, 1), o--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function rr(e) {
  if (ko.length) {
    const t = [...new Set(ko)].sort(
      (o, n) => rn(o) - rn(n)
    );
    if (ko.length = 0, Ws) {
      Ws.push(...t);
      return;
    }
    for (Ws = t, go = 0; go < Ws.length; go++) {
      const o = Ws[go];
      o.flags & 4 && (o.flags &= -2), o.flags & 8 || o(), o.flags &= -2;
    }
    Ws = null, go = 0;
  }
}
const rn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function cr(e) {
  try {
    for (ys = 0; ys < Kt.length; ys++) {
      const t = Kt[ys];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), pn(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; ys < Kt.length; ys++) {
      const t = Kt[ys];
      t && (t.flags &= -2);
    }
    ys = -1, Kt.length = 0, rr(), Vn = null, (Kt.length || ko.length) && cr();
  }
}
let Ot = null, ur = null;
function Bn(e) {
  const t = Ot;
  return Ot = e, ur = e && e.type.__scopeId || null, t;
}
function h(e, t = Ot, o) {
  if (!t || e._n)
    return e;
  const n = (...l) => {
    n._d && jn(-1);
    const r = Bn(t);
    let u;
    try {
      u = e(...l);
    } finally {
      Bn(r), n._d && jn(1);
    }
    return u;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function Mt(e, t) {
  if (Ot === null)
    return e;
  const o = ca(Ot), n = e.dirs || (e.dirs = []);
  for (let l = 0; l < t.length; l++) {
    let [r, u, c, d = wt] = t[l];
    r && (tt(r) && (r = {
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
function Ys(e, t, o, n) {
  const l = e.dirs, r = t && t.dirs;
  for (let u = 0; u < l.length; u++) {
    const c = l[u];
    r && (c.oldValue = r[u].value);
    let d = c.dir[n];
    d && (Ns(), ms(d, o, 8, [
      e.el,
      c,
      e,
      t
    ]), Os());
  }
}
const dr = Symbol("_vte"), mr = (e) => e.__isTeleport, Yo = (e) => e && (e.disabled || e.disabled === ""), Fl = (e) => e && (e.defer || e.defer === ""), Vl = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Bl = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Ka = (e, t) => {
  const o = e && e.to;
  return Ct(o) ? t ? t(o) : null : o;
}, fr = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, o, n, l, r, u, c, d, v) {
    const {
      mc: f,
      pc: p,
      pbc: w,
      o: { insert: g, querySelector: _, createText: C, createComment: $ }
    } = v, x = Yo(t.props);
    let { shapeFlag: I, children: M, dynamicChildren: P } = t;
    if (e == null) {
      const O = t.el = C(""), F = t.anchor = C("");
      g(O, o, n), g(F, o, n);
      const W = (K, ue) => {
        I & 16 && f(
          M,
          K,
          ue,
          l,
          r,
          u,
          c,
          d
        );
      }, D = () => {
        const K = t.target = Ka(t.props, _), ue = vr(K, t, C, g);
        K && (u !== "svg" && Vl(K) ? u = "svg" : u !== "mathml" && Bl(K) && (u = "mathml"), l && l.isCE && (l.ce._teleportTargets || (l.ce._teleportTargets = /* @__PURE__ */ new Set())).add(K), x || (W(K, ue), Pn(t, !1)));
      };
      x && (W(o, F), Pn(t, !0)), Fl(t.props) ? (t.el.__isMounted = !1, Ht(() => {
        D(), delete t.el.__isMounted;
      }, r)) : D();
    } else {
      if (Fl(t.props) && e.el.__isMounted === !1) {
        Ht(() => {
          fr.process(
            e,
            t,
            o,
            n,
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
      t.el = e.el, t.targetStart = e.targetStart;
      const O = t.anchor = e.anchor, F = t.target = e.target, W = t.targetAnchor = e.targetAnchor, D = Yo(e.props), K = D ? o : F, ue = D ? O : W;
      if (u === "svg" || Vl(F) ? u = "svg" : (u === "mathml" || Bl(F)) && (u = "mathml"), P ? (w(
        e.dynamicChildren,
        P,
        K,
        l,
        r,
        u,
        c
      ), Cl(e, t, !0)) : d || p(
        e,
        t,
        K,
        ue,
        l,
        r,
        u,
        c,
        !1
      ), x)
        D ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Sn(
          t,
          o,
          O,
          v,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const se = t.target = Ka(
          t.props,
          _
        );
        se && Sn(
          t,
          se,
          null,
          v,
          0
        );
      } else D && Sn(
        t,
        F,
        W,
        v,
        1
      );
      Pn(t, x);
    }
  },
  remove(e, t, o, { um: n, o: { remove: l } }, r) {
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
      const g = r || !Yo(w);
      for (let _ = 0; _ < c.length; _++) {
        const C = c[_];
        n(
          C,
          t,
          o,
          g,
          !!C.dynamicChildren
        );
      }
    }
  },
  move: Sn,
  hydrate: Iu
};
function Sn(e, t, o, { o: { insert: n }, m: l }, r = 2) {
  r === 0 && n(e.targetAnchor, t, o);
  const { el: u, anchor: c, shapeFlag: d, children: v, props: f } = e, p = r === 2;
  if (p && n(u, t, o), (!p || Yo(f)) && d & 16)
    for (let w = 0; w < v.length; w++)
      l(
        v[w],
        t,
        o,
        2
      );
  p && n(c, t, o);
}
function Iu(e, t, o, n, l, r, {
  o: { nextSibling: u, parentNode: c, querySelector: d, insert: v, createText: f }
}, p) {
  function w(C, $, x, I) {
    $.anchor = p(
      u(C),
      $,
      c(C),
      o,
      n,
      l,
      r
    ), $.targetStart = x, $.targetAnchor = I;
  }
  const g = t.target = Ka(
    t.props,
    d
  ), _ = Yo(t.props);
  if (g) {
    const C = g._lpa || g.firstChild;
    if (t.shapeFlag & 16)
      if (_)
        w(
          e,
          t,
          C,
          C && u(C)
        );
      else {
        t.anchor = u(e);
        let $ = C;
        for (; $; ) {
          if ($ && $.nodeType === 8) {
            if ($.data === "teleport start anchor")
              t.targetStart = $;
            else if ($.data === "teleport anchor") {
              t.targetAnchor = $, g._lpa = t.targetAnchor && u(t.targetAnchor);
              break;
            }
          }
          $ = u($);
        }
        t.targetAnchor || vr(g, t, f, v), p(
          C && u(C),
          t,
          g,
          o,
          n,
          l,
          r
        );
      }
    Pn(t, _);
  } else _ && t.shapeFlag & 16 && w(e, t, e, u(e));
  return t.anchor && u(t.anchor);
}
const Jt = fr;
function Pn(e, t) {
  const o = e.ctx;
  if (o && o.ut) {
    let n, l;
    for (t ? (n = e.el, l = e.anchor) : (n = e.targetStart, l = e.targetAnchor); n && n !== l; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", o.uid), n = n.nextSibling;
    o.ut();
  }
}
function vr(e, t, o, n) {
  const l = t.targetStart = o(""), r = t.targetAnchor = o("");
  return l[dr] = r, e && (n(l, e), n(r, e)), r;
}
const Ps = Symbol("_leaveCb"), In = Symbol("_enterCb");
function pr() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return at(() => {
    e.isMounted = !0;
  }), gn(() => {
    e.isUnmounting = !0;
  }), e;
}
const ss = [Function, Array], gr = {
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
}, hr = (e) => {
  const t = e.subTree;
  return t.component ? hr(t.component) : t;
}, Eu = {
  name: "BaseTransition",
  props: gr,
  setup(e, { slots: t }) {
    const o = Sl(), n = pr();
    return () => {
      const l = t.default && _l(t.default(), !0);
      if (!l || !l.length)
        return;
      const r = yr(l), u = ct(e), { mode: c } = u;
      if (n.isLeaving)
        return Na(r);
      const d = Wl(r);
      if (!d)
        return Na(r);
      let v = cn(
        d,
        u,
        n,
        o,
        // #11061, ensure enterHooks is fresh after clone
        (p) => v = p
      );
      d.type !== Bt && io(d, v);
      let f = o.subTree && Wl(o.subTree);
      if (f && f.type !== Bt && !so(f, d) && hr(o).type !== Bt) {
        let p = cn(
          f,
          u,
          n,
          o
        );
        if (io(f, p), c === "out-in" && d.type !== Bt)
          return n.isLeaving = !0, p.afterLeave = () => {
            n.isLeaving = !1, o.job.flags & 8 || o.update(), delete p.afterLeave, f = void 0;
          }, Na(r);
        c === "in-out" && d.type !== Bt ? p.delayLeave = (w, g, _) => {
          const C = wr(
            n,
            f
          );
          C[String(f.key)] = f, w[Ps] = () => {
            g(), w[Ps] = void 0, delete v.delayedLeave, f = void 0;
          }, v.delayedLeave = () => {
            _(), delete v.delayedLeave, f = void 0;
          };
        } : f = void 0;
      } else f && (f = void 0);
      return r;
    };
  }
};
function yr(e) {
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
const Tu = Eu;
function wr(e, t) {
  const { leavingVNodes: o } = e;
  let n = o.get(t.type);
  return n || (n = /* @__PURE__ */ Object.create(null), o.set(t.type, n)), n;
}
function cn(e, t, o, n, l) {
  const {
    appear: r,
    mode: u,
    persisted: c = !1,
    onBeforeEnter: d,
    onEnter: v,
    onAfterEnter: f,
    onEnterCancelled: p,
    onBeforeLeave: w,
    onLeave: g,
    onAfterLeave: _,
    onLeaveCancelled: C,
    onBeforeAppear: $,
    onAppear: x,
    onAfterAppear: I,
    onAppearCancelled: M
  } = t, P = String(e.key), O = wr(o, e), F = (K, ue) => {
    K && ms(
      K,
      n,
      9,
      ue
    );
  }, W = (K, ue) => {
    const se = ue[1];
    F(K, ue), Xe(K) ? K.every((Q) => Q.length <= 1) && se() : K.length <= 1 && se();
  }, D = {
    mode: u,
    persisted: c,
    beforeEnter(K) {
      let ue = d;
      if (!o.isMounted)
        if (r)
          ue = $ || d;
        else
          return;
      K[Ps] && K[Ps](
        !0
        /* cancelled */
      );
      const se = O[P];
      se && so(e, se) && se.el[Ps] && se.el[Ps](), F(ue, [K]);
    },
    enter(K) {
      let ue = v, se = f, Q = p;
      if (!o.isMounted)
        if (r)
          ue = x || v, se = I || f, Q = M || p;
        else
          return;
      let we = !1;
      const te = K[In] = (H) => {
        we || (we = !0, H ? F(Q, [K]) : F(se, [K]), D.delayedLeave && D.delayedLeave(), K[In] = void 0);
      };
      ue ? W(ue, [K, te]) : te();
    },
    leave(K, ue) {
      const se = String(e.key);
      if (K[In] && K[In](
        !0
        /* cancelled */
      ), o.isUnmounting)
        return ue();
      F(w, [K]);
      let Q = !1;
      const we = K[Ps] = (te) => {
        Q || (Q = !0, ue(), te ? F(C, [K]) : F(_, [K]), K[Ps] = void 0, O[se] === e && delete O[se]);
      };
      O[se] = e, g ? W(g, [K, we]) : we();
    },
    clone(K) {
      const ue = cn(
        K,
        t,
        o,
        n,
        l
      );
      return l && l(ue), ue;
    }
  };
  return D;
}
function Na(e) {
  if (aa(e))
    return e = qs(e), e.children = null, e;
}
function Wl(e) {
  if (!aa(e))
    return mr(e.type) && e.children ? yr(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: o } = e;
  if (o) {
    if (t & 16)
      return o[0];
    if (t & 32 && tt(o.default))
      return o.default();
  }
}
function io(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, io(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function _l(e, t = !1, o) {
  let n = [], l = 0;
  for (let r = 0; r < e.length; r++) {
    let u = e[r];
    const c = o == null ? u.key : String(o) + String(u.key != null ? u.key : r);
    u.type === B ? (u.patchFlag & 128 && l++, n = n.concat(
      _l(u.children, t, c)
    )) : (t || u.type !== Bt) && n.push(c != null ? qs(u, { key: c }) : u);
  }
  if (l > 1)
    for (let r = 0; r < n.length; r++)
      n[r].patchFlag = -2;
  return n;
}
// @__NO_SIDE_EFFECTS__
function Ce(e, t) {
  return tt(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Pt({ name: e.name }, t, { setup: e })
  ) : e;
}
function _r(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Wn = /* @__PURE__ */ new WeakMap();
function Xo(e, t, o, n, l = !1) {
  if (Xe(e)) {
    e.forEach(
      (_, C) => Xo(
        _,
        t && (Xe(t) ? t[C] : t),
        o,
        n,
        l
      )
    );
    return;
  }
  if (bo(n) && !l) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && Xo(e, t, o, n.component.subTree);
    return;
  }
  const r = n.shapeFlag & 4 ? ca(n.component) : n.el, u = l ? null : r, { i: c, r: d } = e, v = t && t.r, f = c.refs === wt ? c.refs = {} : c.refs, p = c.setupState, w = ct(p), g = p === wt ? Ui : (_) => ft(w, _);
  if (v != null && v !== d) {
    if (Gl(t), Ct(v))
      f[v] = null, g(v) && (p[v] = null);
    else if (Gt(v)) {
      v.value = null;
      const _ = t;
      _.k && (f[_.k] = null);
    }
  }
  if (tt(d))
    pn(d, c, 12, [u, f]);
  else {
    const _ = Ct(d), C = Gt(d);
    if (_ || C) {
      const $ = () => {
        if (e.f) {
          const x = _ ? g(d) ? p[d] : f[d] : d.value;
          if (l)
            Xe(x) && cl(x, r);
          else if (Xe(x))
            x.includes(r) || x.push(r);
          else if (_)
            f[d] = [r], g(d) && (p[d] = f[d]);
          else {
            const I = [r];
            d.value = I, e.k && (f[e.k] = I);
          }
        } else _ ? (f[d] = u, g(d) && (p[d] = u)) : C && (d.value = u, e.k && (f[e.k] = u));
      };
      if (u) {
        const x = () => {
          $(), Wn.delete(e);
        };
        x.id = -1, Wn.set(e, x), Ht(x, o);
      } else
        Gl(e), $();
    }
  }
}
function Gl(e) {
  const t = Wn.get(e);
  t && (t.flags |= 8, Wn.delete(e));
}
sa().requestIdleCallback;
sa().cancelIdleCallback;
const bo = (e) => !!e.type.__asyncLoader, aa = (e) => e.type.__isKeepAlive;
function Mu(e, t) {
  kr(e, "a", t);
}
function Pu(e, t) {
  kr(e, "da", t);
}
function kr(e, t, o = Wt) {
  const n = e.__wdc || (e.__wdc = () => {
    let l = o;
    for (; l; ) {
      if (l.isDeactivated)
        return;
      l = l.parent;
    }
    return e();
  });
  if (la(t, n, o), o) {
    let l = o.parent;
    for (; l && l.parent; )
      aa(l.parent.vnode) && Ru(n, t, o, l), l = l.parent;
  }
}
function Ru(e, t, o, n) {
  const l = la(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  Po(() => {
    cl(n[t], l);
  }, o);
}
function la(e, t, o = Wt, n = !1) {
  if (o) {
    const l = o[e] || (o[e] = []), r = t.__weh || (t.__weh = (...u) => {
      Ns();
      const c = hn(o), d = ms(t, o, e, u);
      return c(), Os(), d;
    });
    return n ? l.unshift(r) : l.push(r), r;
  }
}
const As = (e) => (t, o = Wt) => {
  (!mn || e === "sp") && la(e, (...n) => t(...n), o);
}, Lu = As("bm"), at = As("m"), Du = As(
  "bu"
), br = As("u"), gn = As(
  "bum"
), Po = As("um"), Nu = As(
  "sp"
), Ou = As("rtg"), Uu = As("rtc");
function Au(e, t = Wt) {
  la("ec", e, t);
}
const zu = "components", $r = Symbol.for("v-ndc");
function kl(e) {
  return Ct(e) ? Fu(zu, e, !1) || e : e || $r;
}
function Fu(e, t, o = !0, n = !1) {
  const l = Ot || Wt;
  if (l) {
    const r = l.type;
    {
      const c = Ed(
        r,
        !1
      );
      if (c && (c === t || c === ls(t) || c === ea(ls(t))))
        return r;
    }
    const u = (
      // local registration
      // check instance[type] first which is resolved for options API
      jl(l[e] || r[e], t) || // global registration
      jl(l.appContext[e], t)
    );
    return !u && n ? r : u;
  }
}
function jl(e, t) {
  return e && (e[t] || e[ls(t)] || e[ea(ls(t))]);
}
function ye(e, t, o, n) {
  let l;
  const r = o, u = Xe(e);
  if (u || Ct(e)) {
    const c = u && no(e);
    let d = !1, v = !1;
    c && (d = !ns(e), v = Us(e), e = oa(e)), l = new Array(e.length);
    for (let f = 0, p = e.length; f < p; f++)
      l[f] = t(
        d ? v ? Io(ds(e[f])) : ds(e[f]) : e[f],
        f,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    l = new Array(e);
    for (let c = 0; c < e; c++)
      l[c] = t(c + 1, c, void 0, r);
  } else if (ht(e))
    if (e[Symbol.iterator])
      l = Array.from(
        e,
        (c, d) => t(c, d, void 0, r)
      );
    else {
      const c = Object.keys(e);
      l = new Array(c.length);
      for (let d = 0, v = c.length; d < v; d++) {
        const f = c[d];
        l[d] = t(e[f], f, d, r);
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
function nt(e, t, o = {}, n, l) {
  if (Ot.ce || Ot.parent && bo(Ot.parent) && Ot.parent.ce) {
    const v = Object.keys(o).length > 0;
    return t !== "default" && (o.name = t), a(), L(
      B,
      null,
      [b("slot", o, n && n())],
      v ? -2 : 64
    );
  }
  let r = e[t];
  r && r._c && (r._d = !1), a();
  const u = r && Cr(r(o)), c = o.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  u && u.key, d = L(
    B,
    {
      key: (c && !us(c) ? c : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!u && n ? "_fb" : "")
    },
    u || (n ? n() : []),
    u && e._ === 1 ? 64 : -2
  );
  return r && r._c && (r._d = !0), d;
}
function Cr(e) {
  return e.some((t) => dn(t) ? !(t.type === Bt || t.type === B && !Cr(t.children)) : !0) ? e : null;
}
const Ja = (e) => e ? Wr(e) ? ca(e) : Ja(e.parent) : null, Zo = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Pt(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Ja(e.parent),
    $root: (e) => Ja(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Sr(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      wl(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Rt.bind(e.proxy)),
    $watch: (e) => Xu.bind(e)
  })
), Oa = (e, t) => e !== wt && !e.__isScriptSetup && ft(e, t), Vu = {
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
        if (Oa(n, t))
          return u[t] = 1, n[t];
        if (l !== wt && ft(l, t))
          return u[t] = 2, l[t];
        if (ft(r, t))
          return u[t] = 3, r[t];
        if (o !== wt && ft(o, t))
          return u[t] = 4, o[t];
        Qa && (u[t] = 0);
      }
    }
    const v = Zo[t];
    let f, p;
    if (v)
      return t === "$attrs" && Ft(e.attrs, "get", ""), v(e);
    if (
      // css module (injected by vue-loader)
      (f = c.__cssModules) && (f = f[t])
    )
      return f;
    if (o !== wt && ft(o, t))
      return u[t] = 4, o[t];
    if (
      // global properties
      p = d.config.globalProperties, ft(p, t)
    )
      return p[t];
  },
  set({ _: e }, t, o) {
    const { data: n, setupState: l, ctx: r } = e;
    return Oa(l, t) ? (l[t] = o, !0) : n !== wt && ft(n, t) ? (n[t] = o, !0) : ft(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = o, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: o, ctx: n, appContext: l, props: r, type: u }
  }, c) {
    let d;
    return !!(o[c] || e !== wt && c[0] !== "$" && ft(e, c) || Oa(t, c) || ft(r, c) || ft(n, c) || ft(Zo, c) || ft(l.config.globalProperties, c) || (d = u.__cssModules) && d[c]);
  },
  defineProperty(e, t, o) {
    return o.get != null ? e._.accessCache[t] = 0 : ft(o, "value") && this.set(e, t, o.value, null), Reflect.defineProperty(e, t, o);
  }
};
function Hl(e) {
  return Xe(e) ? e.reduce(
    (t, o) => (t[o] = null, t),
    {}
  ) : e;
}
let Qa = !0;
function Bu(e) {
  const t = Sr(e), o = e.proxy, n = e.ctx;
  Qa = !1, t.beforeCreate && ql(t.beforeCreate, e, "bc");
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
    beforeUpdate: g,
    updated: _,
    activated: C,
    deactivated: $,
    beforeDestroy: x,
    beforeUnmount: I,
    destroyed: M,
    unmounted: P,
    render: O,
    renderTracked: F,
    renderTriggered: W,
    errorCaptured: D,
    serverPrefetch: K,
    // public API
    expose: ue,
    inheritAttrs: se,
    // assets
    components: Q,
    directives: we,
    filters: te
  } = t;
  if (v && Wu(v, n, null), u)
    for (const _e in u) {
      const ee = u[_e];
      tt(ee) && (n[_e] = ee.bind(o));
    }
  if (l) {
    const _e = l.call(o, o);
    ht(_e) && (e.data = co(_e));
  }
  if (Qa = !0, r)
    for (const _e in r) {
      const ee = r[_e], me = tt(ee) ? ee.bind(o, o) : tt(ee.get) ? ee.get.bind(o, o) : $s, z = !tt(ee) && tt(ee.set) ? ee.set.bind(o) : $s, ae = R({
        get: me,
        set: z
      });
      Object.defineProperty(n, _e, {
        enumerable: !0,
        configurable: !0,
        get: () => ae.value,
        set: (Se) => ae.value = Se
      });
    }
  if (c)
    for (const _e in c)
      xr(c[_e], n, o, _e);
  if (d) {
    const _e = tt(d) ? d.call(o) : d;
    Reflect.ownKeys(_e).forEach((ee) => {
      Ju(ee, _e[ee]);
    });
  }
  f && ql(f, e, "c");
  function q(_e, ee) {
    Xe(ee) ? ee.forEach((me) => _e(me.bind(o))) : ee && _e(ee.bind(o));
  }
  if (q(Lu, p), q(at, w), q(Du, g), q(br, _), q(Mu, C), q(Pu, $), q(Au, D), q(Uu, F), q(Ou, W), q(gn, I), q(Po, P), q(Nu, K), Xe(ue))
    if (ue.length) {
      const _e = e.exposed || (e.exposed = {});
      ue.forEach((ee) => {
        Object.defineProperty(_e, ee, {
          get: () => o[ee],
          set: (me) => o[ee] = me,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  O && e.render === $s && (e.render = O), se != null && (e.inheritAttrs = se), Q && (e.components = Q), we && (e.directives = we), K && _r(e);
}
function Wu(e, t, o = $s) {
  Xe(e) && (e = Ya(e));
  for (const n in e) {
    const l = e[n];
    let r;
    ht(l) ? "default" in l ? r = Rn(
      l.from || n,
      l.default,
      !0
    ) : r = Rn(l.from || n) : r = Rn(l), Gt(r) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (u) => r.value = u
    }) : t[n] = r;
  }
}
function ql(e, t, o) {
  ms(
    Xe(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    o
  );
}
function xr(e, t, o, n) {
  let l = n.includes(".") ? Tr(o, n) : () => o[n];
  if (Ct(e)) {
    const r = t[e];
    tt(r) && vt(l, r);
  } else if (tt(e))
    vt(l, e.bind(o));
  else if (ht(e))
    if (Xe(e))
      e.forEach((r) => xr(r, t, o, n));
    else {
      const r = tt(e.handler) ? e.handler.bind(o) : t[e.handler];
      tt(r) && vt(l, r, e);
    }
}
function Sr(e) {
  const t = e.type, { mixins: o, extends: n } = t, {
    mixins: l,
    optionsCache: r,
    config: { optionMergeStrategies: u }
  } = e.appContext, c = r.get(t);
  let d;
  return c ? d = c : !l.length && !o && !n ? d = t : (d = {}, l.length && l.forEach(
    (v) => Gn(d, v, u, !0)
  ), Gn(d, t, u)), ht(t) && r.set(t, d), d;
}
function Gn(e, t, o, n = !1) {
  const { mixins: l, extends: r } = t;
  r && Gn(e, r, o, !0), l && l.forEach(
    (u) => Gn(e, u, o, !0)
  );
  for (const u in t)
    if (!(n && u === "expose")) {
      const c = Gu[u] || o && o[u];
      e[u] = c ? c(e[u], t[u]) : t[u];
    }
  return e;
}
const Gu = {
  data: Kl,
  props: Jl,
  emits: Jl,
  // objects
  methods: Ho,
  computed: Ho,
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
  components: Ho,
  directives: Ho,
  // watch
  watch: Hu,
  // provide / inject
  provide: Kl,
  inject: ju
};
function Kl(e, t) {
  return t ? e ? function() {
    return Pt(
      tt(e) ? e.call(this, this) : e,
      tt(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function ju(e, t) {
  return Ho(Ya(e), Ya(t));
}
function Ya(e) {
  if (Xe(e)) {
    const t = {};
    for (let o = 0; o < e.length; o++)
      t[e[o]] = e[o];
    return t;
  }
  return e;
}
function jt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Ho(e, t) {
  return e ? Pt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Jl(e, t) {
  return e ? Xe(e) && Xe(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Pt(
    /* @__PURE__ */ Object.create(null),
    Hl(e),
    Hl(t ?? {})
  ) : t;
}
function Hu(e, t) {
  if (!e) return t;
  if (!t) return e;
  const o = Pt(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    o[n] = jt(e[n], t[n]);
  return o;
}
function Ir() {
  return {
    app: null,
    config: {
      isNativeTag: Ui,
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
let qu = 0;
function Ku(e, t) {
  return function(n, l = null) {
    tt(n) || (n = Pt({}, n)), l != null && !ht(l) && (l = null);
    const r = Ir(), u = /* @__PURE__ */ new WeakSet(), c = [];
    let d = !1;
    const v = r.app = {
      _uid: qu++,
      _component: n,
      _props: l,
      _container: null,
      _context: r,
      _instance: null,
      version: Md,
      get config() {
        return r.config;
      },
      set config(f) {
      },
      use(f, ...p) {
        return u.has(f) || (f && tt(f.install) ? (u.add(f), f.install(v, ...p)) : tt(f) && (u.add(f), f(v, ...p))), v;
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
          const g = v._ceVNode || b(n, l);
          return g.appContext = r, w === !0 ? w = "svg" : w === !1 && (w = void 0), e(g, f, w), d = !0, v._container = f, f.__vue_app__ = v, ca(g.component);
        }
      },
      onUnmount(f) {
        c.push(f);
      },
      unmount() {
        d && (ms(
          c,
          v._instance,
          16
        ), e(null, v._container), delete v._container.__vue_app__);
      },
      provide(f, p) {
        return r.provides[f] = p, v;
      },
      runWithContext(f) {
        const p = $o;
        $o = v;
        try {
          return f();
        } finally {
          $o = p;
        }
      }
    };
    return v;
  };
}
let $o = null;
function Ju(e, t) {
  if (Wt) {
    let o = Wt.provides;
    const n = Wt.parent && Wt.parent.provides;
    n === o && (o = Wt.provides = Object.create(n)), o[e] = t;
  }
}
function Rn(e, t, o = !1) {
  const n = Sl();
  if (n || $o) {
    let l = $o ? $o._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (l && e in l)
      return l[e];
    if (arguments.length > 1)
      return o && tt(t) ? t.call(n && n.proxy) : t;
  }
}
const Qu = Symbol.for("v-scx"), Yu = () => Rn(Qu);
function vt(e, t, o) {
  return Er(e, t, o);
}
function Er(e, t, o = wt) {
  const { immediate: n, deep: l, flush: r, once: u } = o, c = Pt({}, o), d = t && n || !t && r !== "post";
  let v;
  if (mn) {
    if (r === "sync") {
      const g = Yu();
      v = g.__watcherHandles || (g.__watcherHandles = []);
    } else if (!d) {
      const g = () => {
      };
      return g.stop = $s, g.resume = $s, g.pause = $s, g;
    }
  }
  const f = Wt;
  c.call = (g, _, C) => ms(g, f, _, C);
  let p = !1;
  r === "post" ? c.scheduler = (g) => {
    Ht(g, f && f.suspense);
  } : r !== "sync" && (p = !0, c.scheduler = (g, _) => {
    _ ? g() : wl(g);
  }), c.augmentJob = (g) => {
    t && (g.flags |= 4), p && (g.flags |= 2, f && (g.id = f.uid, g.i = f));
  };
  const w = $u(e, t, c);
  return mn && (v ? v.push(w) : d && w()), w;
}
function Xu(e, t, o) {
  const n = this.proxy, l = Ct(e) ? e.includes(".") ? Tr(n, e) : () => n[e] : e.bind(n, n);
  let r;
  tt(t) ? r = t : (r = t.handler, o = t);
  const u = hn(this), c = Er(l, r.bind(n), o);
  return u(), c;
}
function Tr(e, t) {
  const o = t.split(".");
  return () => {
    let n = e;
    for (let l = 0; l < o.length && n; l++)
      n = n[o[l]];
    return n;
  };
}
const Zu = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${ls(t)}Modifiers`] || e[`${Js(t)}Modifiers`];
function ed(e, t, ...o) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || wt;
  let l = o;
  const r = t.startsWith("update:"), u = r && Zu(n, t.slice(7));
  u && (u.trim && (l = o.map((f) => Ct(f) ? f.trim() : f)), u.number && (l = o.map(ta)));
  let c, d = n[c = Ma(t)] || // also try camelCase event handler (#2249)
  n[c = Ma(ls(t))];
  !d && r && (d = n[c = Ma(Js(t))]), d && ms(
    d,
    e,
    6,
    l
  );
  const v = n[c + "Once"];
  if (v) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[c])
      return;
    e.emitted[c] = !0, ms(
      v,
      e,
      6,
      l
    );
  }
}
const td = /* @__PURE__ */ new WeakMap();
function Mr(e, t, o = !1) {
  const n = o ? td : t.emitsCache, l = n.get(e);
  if (l !== void 0)
    return l;
  const r = e.emits;
  let u = {}, c = !1;
  if (!tt(e)) {
    const d = (v) => {
      const f = Mr(v, t, !0);
      f && (c = !0, Pt(u, f));
    };
    !o && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  return !r && !c ? (ht(e) && n.set(e, null), null) : (Xe(r) ? r.forEach((d) => u[d] = null) : Pt(u, r), ht(e) && n.set(e, u), u);
}
function ia(e, t) {
  return !e || !Xn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), ft(e, t[0].toLowerCase() + t.slice(1)) || ft(e, Js(t)) || ft(e, t));
}
function Ql(e) {
  const {
    type: t,
    vnode: o,
    proxy: n,
    withProxy: l,
    propsOptions: [r],
    slots: u,
    attrs: c,
    emit: d,
    render: v,
    renderCache: f,
    props: p,
    data: w,
    setupState: g,
    ctx: _,
    inheritAttrs: C
  } = e, $ = Bn(e);
  let x, I;
  try {
    if (o.shapeFlag & 4) {
      const P = l || n, O = P;
      x = ks(
        v.call(
          O,
          P,
          f,
          p,
          g,
          w,
          _
        )
      ), I = c;
    } else {
      const P = t;
      x = ks(
        P.length > 1 ? P(
          p,
          { attrs: c, slots: u, emit: d }
        ) : P(
          p,
          null
        )
      ), I = t.props ? c : sd(c);
    }
  } catch (P) {
    en.length = 0, na(P, e, 1), x = b(Bt);
  }
  let M = x;
  if (I && C !== !1) {
    const P = Object.keys(I), { shapeFlag: O } = M;
    P.length && O & 7 && (r && P.some(rl) && (I = od(
      I,
      r
    )), M = qs(M, I, !1, !0));
  }
  return o.dirs && (M = qs(M, null, !1, !0), M.dirs = M.dirs ? M.dirs.concat(o.dirs) : o.dirs), o.transition && io(M, o.transition), x = M, Bn($), x;
}
const sd = (e) => {
  let t;
  for (const o in e)
    (o === "class" || o === "style" || Xn(o)) && ((t || (t = {}))[o] = e[o]);
  return t;
}, od = (e, t) => {
  const o = {};
  for (const n in e)
    (!rl(n) || !(n.slice(9) in t)) && (o[n] = e[n]);
  return o;
};
function nd(e, t, o) {
  const { props: n, children: l, component: r } = e, { props: u, children: c, patchFlag: d } = t, v = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (o && d >= 0) {
    if (d & 1024)
      return !0;
    if (d & 16)
      return n ? Yl(n, u, v) : !!u;
    if (d & 8) {
      const f = t.dynamicProps;
      for (let p = 0; p < f.length; p++) {
        const w = f[p];
        if (u[w] !== n[w] && !ia(v, w))
          return !0;
      }
    }
  } else
    return (l || c) && (!c || !c.$stable) ? !0 : n === u ? !1 : n ? u ? Yl(n, u, v) : !0 : !!u;
  return !1;
}
function Yl(e, t, o) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let l = 0; l < n.length; l++) {
    const r = n[l];
    if (t[r] !== e[r] && !ia(o, r))
      return !0;
  }
  return !1;
}
function ad({ vnode: e, parent: t }, o) {
  for (; t; ) {
    const n = t.subTree;
    if (n.suspense && n.suspense.activeBranch === e && (n.el = e.el), n === e)
      (e = t.vnode).el = o, t = t.parent;
    else
      break;
  }
}
const Pr = {}, Rr = () => Object.create(Pr), Lr = (e) => Object.getPrototypeOf(e) === Pr;
function ld(e, t, o, n = !1) {
  const l = {}, r = Rr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Dr(e, t, l, r);
  for (const u in e.propsOptions[0])
    u in l || (l[u] = void 0);
  o ? e.props = n ? l : pu(l) : e.type.props ? e.props = l : e.props = r, e.attrs = r;
}
function id(e, t, o, n) {
  const {
    props: l,
    attrs: r,
    vnode: { patchFlag: u }
  } = e, c = ct(l), [d] = e.propsOptions;
  let v = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || u > 0) && !(u & 16)
  ) {
    if (u & 8) {
      const f = e.vnode.dynamicProps;
      for (let p = 0; p < f.length; p++) {
        let w = f[p];
        if (ia(e.emitsOptions, w))
          continue;
        const g = t[w];
        if (d)
          if (ft(r, w))
            g !== r[w] && (r[w] = g, v = !0);
          else {
            const _ = ls(w);
            l[_] = Xa(
              d,
              c,
              _,
              g,
              e,
              !1
            );
          }
        else
          g !== r[w] && (r[w] = g, v = !0);
      }
    }
  } else {
    Dr(e, t, l, r) && (v = !0);
    let f;
    for (const p in c)
      (!t || // for camelCase
      !ft(t, p) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((f = Js(p)) === p || !ft(t, f))) && (d ? o && // for camelCase
      (o[p] !== void 0 || // for kebab-case
      o[f] !== void 0) && (l[p] = Xa(
        d,
        c,
        p,
        void 0,
        e,
        !0
      )) : delete l[p]);
    if (r !== c)
      for (const p in r)
        (!t || !ft(t, p)) && (delete r[p], v = !0);
  }
  v && Rs(e.attrs, "set", "");
}
function Dr(e, t, o, n) {
  const [l, r] = e.propsOptions;
  let u = !1, c;
  if (t)
    for (let d in t) {
      if (Ko(d))
        continue;
      const v = t[d];
      let f;
      l && ft(l, f = ls(d)) ? !r || !r.includes(f) ? o[f] = v : (c || (c = {}))[f] = v : ia(e.emitsOptions, d) || (!(d in n) || v !== n[d]) && (n[d] = v, u = !0);
    }
  if (r) {
    const d = ct(o), v = c || wt;
    for (let f = 0; f < r.length; f++) {
      const p = r[f];
      o[p] = Xa(
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
function Xa(e, t, o, n, l, r) {
  const u = e[o];
  if (u != null) {
    const c = ft(u, "default");
    if (c && n === void 0) {
      const d = u.default;
      if (u.type !== Function && !u.skipFactory && tt(d)) {
        const { propsDefaults: v } = l;
        if (o in v)
          n = v[o];
        else {
          const f = hn(l);
          n = v[o] = d.call(
            null,
            t
          ), f();
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
    ] && (n === "" || n === Js(o)) && (n = !0));
  }
  return n;
}
const rd = /* @__PURE__ */ new WeakMap();
function Nr(e, t, o = !1) {
  const n = o ? rd : t.propsCache, l = n.get(e);
  if (l)
    return l;
  const r = e.props, u = {}, c = [];
  let d = !1;
  if (!tt(e)) {
    const f = (p) => {
      d = !0;
      const [w, g] = Nr(p, t, !0);
      Pt(u, w), g && c.push(...g);
    };
    !o && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  if (!r && !d)
    return ht(e) && n.set(e, wo), wo;
  if (Xe(r))
    for (let f = 0; f < r.length; f++) {
      const p = ls(r[f]);
      Xl(p) && (u[p] = wt);
    }
  else if (r)
    for (const f in r) {
      const p = ls(f);
      if (Xl(p)) {
        const w = r[f], g = u[p] = Xe(w) || tt(w) ? { type: w } : Pt({}, w), _ = g.type;
        let C = !1, $ = !0;
        if (Xe(_))
          for (let x = 0; x < _.length; ++x) {
            const I = _[x], M = tt(I) && I.name;
            if (M === "Boolean") {
              C = !0;
              break;
            } else M === "String" && ($ = !1);
          }
        else
          C = tt(_) && _.name === "Boolean";
        g[
          0
          /* shouldCast */
        ] = C, g[
          1
          /* shouldCastTrue */
        ] = $, (C || ft(g, "default")) && c.push(p);
      }
    }
  const v = [u, c];
  return ht(e) && n.set(e, v), v;
}
function Xl(e) {
  return e[0] !== "$" && !Ko(e);
}
const bl = (e) => e === "_" || e === "_ctx" || e === "$stable", $l = (e) => Xe(e) ? e.map(ks) : [ks(e)], cd = (e, t, o) => {
  if (t._n)
    return t;
  const n = h((...l) => $l(t(...l)), o);
  return n._c = !1, n;
}, Or = (e, t, o) => {
  const n = e._ctx;
  for (const l in e) {
    if (bl(l)) continue;
    const r = e[l];
    if (tt(r))
      t[l] = cd(l, r, n);
    else if (r != null) {
      const u = $l(r);
      t[l] = () => u;
    }
  }
}, Ur = (e, t) => {
  const o = $l(t);
  e.slots.default = () => o;
}, Ar = (e, t, o) => {
  for (const n in t)
    (o || !bl(n)) && (e[n] = t[n]);
}, ud = (e, t, o) => {
  const n = e.slots = Rr();
  if (e.vnode.shapeFlag & 32) {
    const l = t._;
    l ? (Ar(n, t, o), o && Vi(n, "_", l, !0)) : Or(t, n);
  } else t && Ur(e, t);
}, dd = (e, t, o) => {
  const { vnode: n, slots: l } = e;
  let r = !0, u = wt;
  if (n.shapeFlag & 32) {
    const c = t._;
    c ? o && c === 1 ? r = !1 : Ar(l, t, o) : (r = !t.$stable, Or(t, l)), u = t;
  } else t && (Ur(e, t), u = { default: 1 });
  if (r)
    for (const c in l)
      !bl(c) && u[c] == null && delete l[c];
}, Ht = gd;
function md(e) {
  return fd(e);
}
function fd(e, t) {
  const o = sa();
  o.__VUE__ = !0;
  const {
    insert: n,
    remove: l,
    patchProp: r,
    createElement: u,
    createText: c,
    createComment: d,
    setText: v,
    setElementText: f,
    parentNode: p,
    nextSibling: w,
    setScopeId: g = $s,
    insertStaticContent: _
  } = e, C = (E, A, ce, $e = null, Te = null, xe = null, Z = void 0, G = null, ve = !!A.dynamicChildren) => {
    if (E === A)
      return;
    E && !so(E, A) && ($e = re(E), Se(E, Te, xe, !0), E = null), A.patchFlag === -2 && (ve = !1, A.dynamicChildren = null);
    const { type: ge, ref: He, shapeFlag: We } = A;
    switch (ge) {
      case ra:
        $(E, A, ce, $e);
        break;
      case Bt:
        x(E, A, ce, $e);
        break;
      case Aa:
        E == null && I(A, ce, $e, Z);
        break;
      case B:
        Q(
          E,
          A,
          ce,
          $e,
          Te,
          xe,
          Z,
          G,
          ve
        );
        break;
      default:
        We & 1 ? O(
          E,
          A,
          ce,
          $e,
          Te,
          xe,
          Z,
          G,
          ve
        ) : We & 6 ? we(
          E,
          A,
          ce,
          $e,
          Te,
          xe,
          Z,
          G,
          ve
        ) : (We & 64 || We & 128) && ge.process(
          E,
          A,
          ce,
          $e,
          Te,
          xe,
          Z,
          G,
          ve,
          fe
        );
    }
    He != null && Te ? Xo(He, E && E.ref, xe, A || E, !A) : He == null && E && E.ref != null && Xo(E.ref, null, xe, E, !0);
  }, $ = (E, A, ce, $e) => {
    if (E == null)
      n(
        A.el = c(A.children),
        ce,
        $e
      );
    else {
      const Te = A.el = E.el;
      A.children !== E.children && v(Te, A.children);
    }
  }, x = (E, A, ce, $e) => {
    E == null ? n(
      A.el = d(A.children || ""),
      ce,
      $e
    ) : A.el = E.el;
  }, I = (E, A, ce, $e) => {
    [E.el, E.anchor] = _(
      E.children,
      A,
      ce,
      $e,
      E.el,
      E.anchor
    );
  }, M = ({ el: E, anchor: A }, ce, $e) => {
    let Te;
    for (; E && E !== A; )
      Te = w(E), n(E, ce, $e), E = Te;
    n(A, ce, $e);
  }, P = ({ el: E, anchor: A }) => {
    let ce;
    for (; E && E !== A; )
      ce = w(E), l(E), E = ce;
    l(A);
  }, O = (E, A, ce, $e, Te, xe, Z, G, ve) => {
    if (A.type === "svg" ? Z = "svg" : A.type === "math" && (Z = "mathml"), E == null)
      F(
        A,
        ce,
        $e,
        Te,
        xe,
        Z,
        G,
        ve
      );
    else {
      const ge = E.el && E.el._isVueCE ? E.el : null;
      try {
        ge && ge._beginPatch(), K(
          E,
          A,
          Te,
          xe,
          Z,
          G,
          ve
        );
      } finally {
        ge && ge._endPatch();
      }
    }
  }, F = (E, A, ce, $e, Te, xe, Z, G) => {
    let ve, ge;
    const { props: He, shapeFlag: We, transition: ke, dirs: X } = E;
    if (ve = E.el = u(
      E.type,
      xe,
      He && He.is,
      He
    ), We & 8 ? f(ve, E.children) : We & 16 && D(
      E.children,
      ve,
      null,
      $e,
      Te,
      Ua(E, xe),
      Z,
      G
    ), X && Ys(E, null, $e, "created"), W(ve, E, E.scopeId, Z, $e), He) {
      for (const De in He)
        De !== "value" && !Ko(De) && r(ve, De, null, He[De], xe, $e);
      "value" in He && r(ve, "value", null, He.value, xe), (ge = He.onVnodeBeforeMount) && ps(ge, $e, E);
    }
    X && Ys(E, null, $e, "beforeMount");
    const Fe = vd(Te, ke);
    Fe && ke.beforeEnter(ve), n(ve, A, ce), ((ge = He && He.onVnodeMounted) || Fe || X) && Ht(() => {
      ge && ps(ge, $e, E), Fe && ke.enter(ve), X && Ys(E, null, $e, "mounted");
    }, Te);
  }, W = (E, A, ce, $e, Te) => {
    if (ce && g(E, ce), $e)
      for (let xe = 0; xe < $e.length; xe++)
        g(E, $e[xe]);
    if (Te) {
      let xe = Te.subTree;
      if (A === xe || Fr(xe.type) && (xe.ssContent === A || xe.ssFallback === A)) {
        const Z = Te.vnode;
        W(
          E,
          Z,
          Z.scopeId,
          Z.slotScopeIds,
          Te.parent
        );
      }
    }
  }, D = (E, A, ce, $e, Te, xe, Z, G, ve = 0) => {
    for (let ge = ve; ge < E.length; ge++) {
      const He = E[ge] = G ? Gs(E[ge]) : ks(E[ge]);
      C(
        null,
        He,
        A,
        ce,
        $e,
        Te,
        xe,
        Z,
        G
      );
    }
  }, K = (E, A, ce, $e, Te, xe, Z) => {
    const G = A.el = E.el;
    let { patchFlag: ve, dynamicChildren: ge, dirs: He } = A;
    ve |= E.patchFlag & 16;
    const We = E.props || wt, ke = A.props || wt;
    let X;
    if (ce && Xs(ce, !1), (X = ke.onVnodeBeforeUpdate) && ps(X, ce, A, E), He && Ys(A, E, ce, "beforeUpdate"), ce && Xs(ce, !0), (We.innerHTML && ke.innerHTML == null || We.textContent && ke.textContent == null) && f(G, ""), ge ? ue(
      E.dynamicChildren,
      ge,
      G,
      ce,
      $e,
      Ua(A, Te),
      xe
    ) : Z || ee(
      E,
      A,
      G,
      null,
      ce,
      $e,
      Ua(A, Te),
      xe,
      !1
    ), ve > 0) {
      if (ve & 16)
        se(G, We, ke, ce, Te);
      else if (ve & 2 && We.class !== ke.class && r(G, "class", null, ke.class, Te), ve & 4 && r(G, "style", We.style, ke.style, Te), ve & 8) {
        const Fe = A.dynamicProps;
        for (let De = 0; De < Fe.length; De++) {
          const qe = Fe[De], Ve = We[qe], Ue = ke[qe];
          (Ue !== Ve || qe === "value") && r(G, qe, Ve, Ue, Te, ce);
        }
      }
      ve & 1 && E.children !== A.children && f(G, A.children);
    } else !Z && ge == null && se(G, We, ke, ce, Te);
    ((X = ke.onVnodeUpdated) || He) && Ht(() => {
      X && ps(X, ce, A, E), He && Ys(A, E, ce, "updated");
    }, $e);
  }, ue = (E, A, ce, $e, Te, xe, Z) => {
    for (let G = 0; G < A.length; G++) {
      const ve = E[G], ge = A[G], He = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        ve.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (ve.type === B || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !so(ve, ge) || // - In the case of a component, it could contain anything.
        ve.shapeFlag & 198) ? p(ve.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          ce
        )
      );
      C(
        ve,
        ge,
        He,
        null,
        $e,
        Te,
        xe,
        Z,
        !0
      );
    }
  }, se = (E, A, ce, $e, Te) => {
    if (A !== ce) {
      if (A !== wt)
        for (const xe in A)
          !Ko(xe) && !(xe in ce) && r(
            E,
            xe,
            A[xe],
            null,
            Te,
            $e
          );
      for (const xe in ce) {
        if (Ko(xe)) continue;
        const Z = ce[xe], G = A[xe];
        Z !== G && xe !== "value" && r(E, xe, G, Z, Te, $e);
      }
      "value" in ce && r(E, "value", A.value, ce.value, Te);
    }
  }, Q = (E, A, ce, $e, Te, xe, Z, G, ve) => {
    const ge = A.el = E ? E.el : c(""), He = A.anchor = E ? E.anchor : c("");
    let { patchFlag: We, dynamicChildren: ke, slotScopeIds: X } = A;
    X && (G = G ? G.concat(X) : X), E == null ? (n(ge, ce, $e), n(He, ce, $e), D(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      A.children || [],
      ce,
      He,
      Te,
      xe,
      Z,
      G,
      ve
    )) : We > 0 && We & 64 && ke && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    E.dynamicChildren ? (ue(
      E.dynamicChildren,
      ke,
      ce,
      Te,
      xe,
      Z,
      G
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (A.key != null || Te && A === Te.subTree) && Cl(
      E,
      A,
      !0
      /* shallow */
    )) : ee(
      E,
      A,
      ce,
      He,
      Te,
      xe,
      Z,
      G,
      ve
    );
  }, we = (E, A, ce, $e, Te, xe, Z, G, ve) => {
    A.slotScopeIds = G, E == null ? A.shapeFlag & 512 ? Te.ctx.activate(
      A,
      ce,
      $e,
      Z,
      ve
    ) : te(
      A,
      ce,
      $e,
      Te,
      xe,
      Z,
      ve
    ) : H(E, A, ve);
  }, te = (E, A, ce, $e, Te, xe, Z) => {
    const G = E.component = $d(
      E,
      $e,
      Te
    );
    if (aa(E) && (G.ctx.renderer = fe), Cd(G, !1, Z), G.asyncDep) {
      if (Te && Te.registerDep(G, q, Z), !E.el) {
        const ve = G.subTree = b(Bt);
        x(null, ve, A, ce), E.placeholder = ve.el;
      }
    } else
      q(
        G,
        E,
        A,
        ce,
        Te,
        xe,
        Z
      );
  }, H = (E, A, ce) => {
    const $e = A.component = E.component;
    if (nd(E, A, ce))
      if ($e.asyncDep && !$e.asyncResolved) {
        _e($e, A, ce);
        return;
      } else
        $e.next = A, $e.update();
    else
      A.el = E.el, $e.vnode = A;
  }, q = (E, A, ce, $e, Te, xe, Z) => {
    const G = () => {
      if (E.isMounted) {
        let { next: We, bu: ke, u: X, parent: Fe, vnode: De } = E;
        {
          const gt = zr(E);
          if (gt) {
            We && (We.el = De.el, _e(E, We, Z)), gt.asyncDep.then(() => {
              E.isUnmounted || G();
            });
            return;
          }
        }
        let qe = We, Ve;
        Xs(E, !1), We ? (We.el = De.el, _e(E, We, Z)) : We = De, ke && Mn(ke), (Ve = We.props && We.props.onVnodeBeforeUpdate) && ps(Ve, Fe, We, De), Xs(E, !0);
        const Ue = Ql(E), Qe = E.subTree;
        E.subTree = Ue, C(
          Qe,
          Ue,
          // parent may have changed if it's in a teleport
          p(Qe.el),
          // anchor may have changed if it's in a fragment
          re(Qe),
          E,
          Te,
          xe
        ), We.el = Ue.el, qe === null && ad(E, Ue.el), X && Ht(X, Te), (Ve = We.props && We.props.onVnodeUpdated) && Ht(
          () => ps(Ve, Fe, We, De),
          Te
        );
      } else {
        let We;
        const { el: ke, props: X } = A, { bm: Fe, m: De, parent: qe, root: Ve, type: Ue } = E, Qe = bo(A);
        Xs(E, !1), Fe && Mn(Fe), !Qe && (We = X && X.onVnodeBeforeMount) && ps(We, qe, A), Xs(E, !0);
        {
          Ve.ce && // @ts-expect-error _def is private
          Ve.ce._def.shadowRoot !== !1 && Ve.ce._injectChildStyle(Ue);
          const gt = E.subTree = Ql(E);
          C(
            null,
            gt,
            ce,
            $e,
            E,
            Te,
            xe
          ), A.el = gt.el;
        }
        if (De && Ht(De, Te), !Qe && (We = X && X.onVnodeMounted)) {
          const gt = A;
          Ht(
            () => ps(We, qe, gt),
            Te
          );
        }
        (A.shapeFlag & 256 || qe && bo(qe.vnode) && qe.vnode.shapeFlag & 256) && E.a && Ht(E.a, Te), E.isMounted = !0, A = ce = $e = null;
      }
    };
    E.scope.on();
    const ve = E.effect = new ji(G);
    E.scope.off();
    const ge = E.update = ve.run.bind(ve), He = E.job = ve.runIfDirty.bind(ve);
    He.i = E, He.id = E.uid, ve.scheduler = () => wl(He), Xs(E, !0), ge();
  }, _e = (E, A, ce) => {
    A.component = E;
    const $e = E.vnode.props;
    E.vnode = A, E.next = null, id(E, A.props, $e, ce), dd(E, A.children, ce), Ns(), zl(E), Os();
  }, ee = (E, A, ce, $e, Te, xe, Z, G, ve = !1) => {
    const ge = E && E.children, He = E ? E.shapeFlag : 0, We = A.children, { patchFlag: ke, shapeFlag: X } = A;
    if (ke > 0) {
      if (ke & 128) {
        z(
          ge,
          We,
          ce,
          $e,
          Te,
          xe,
          Z,
          G,
          ve
        );
        return;
      } else if (ke & 256) {
        me(
          ge,
          We,
          ce,
          $e,
          Te,
          xe,
          Z,
          G,
          ve
        );
        return;
      }
    }
    X & 8 ? (He & 16 && Ae(ge, Te, xe), We !== ge && f(ce, We)) : He & 16 ? X & 16 ? z(
      ge,
      We,
      ce,
      $e,
      Te,
      xe,
      Z,
      G,
      ve
    ) : Ae(ge, Te, xe, !0) : (He & 8 && f(ce, ""), X & 16 && D(
      We,
      ce,
      $e,
      Te,
      xe,
      Z,
      G,
      ve
    ));
  }, me = (E, A, ce, $e, Te, xe, Z, G, ve) => {
    E = E || wo, A = A || wo;
    const ge = E.length, He = A.length, We = Math.min(ge, He);
    let ke;
    for (ke = 0; ke < We; ke++) {
      const X = A[ke] = ve ? Gs(A[ke]) : ks(A[ke]);
      C(
        E[ke],
        X,
        ce,
        null,
        Te,
        xe,
        Z,
        G,
        ve
      );
    }
    ge > He ? Ae(
      E,
      Te,
      xe,
      !0,
      !1,
      We
    ) : D(
      A,
      ce,
      $e,
      Te,
      xe,
      Z,
      G,
      ve,
      We
    );
  }, z = (E, A, ce, $e, Te, xe, Z, G, ve) => {
    let ge = 0;
    const He = A.length;
    let We = E.length - 1, ke = He - 1;
    for (; ge <= We && ge <= ke; ) {
      const X = E[ge], Fe = A[ge] = ve ? Gs(A[ge]) : ks(A[ge]);
      if (so(X, Fe))
        C(
          X,
          Fe,
          ce,
          null,
          Te,
          xe,
          Z,
          G,
          ve
        );
      else
        break;
      ge++;
    }
    for (; ge <= We && ge <= ke; ) {
      const X = E[We], Fe = A[ke] = ve ? Gs(A[ke]) : ks(A[ke]);
      if (so(X, Fe))
        C(
          X,
          Fe,
          ce,
          null,
          Te,
          xe,
          Z,
          G,
          ve
        );
      else
        break;
      We--, ke--;
    }
    if (ge > We) {
      if (ge <= ke) {
        const X = ke + 1, Fe = X < He ? A[X].el : $e;
        for (; ge <= ke; )
          C(
            null,
            A[ge] = ve ? Gs(A[ge]) : ks(A[ge]),
            ce,
            Fe,
            Te,
            xe,
            Z,
            G,
            ve
          ), ge++;
      }
    } else if (ge > ke)
      for (; ge <= We; )
        Se(E[ge], Te, xe, !0), ge++;
    else {
      const X = ge, Fe = ge, De = /* @__PURE__ */ new Map();
      for (ge = Fe; ge <= ke; ge++) {
        const T = A[ge] = ve ? Gs(A[ge]) : ks(A[ge]);
        T.key != null && De.set(T.key, ge);
      }
      let qe, Ve = 0;
      const Ue = ke - Fe + 1;
      let Qe = !1, gt = 0;
      const Y = new Array(Ue);
      for (ge = 0; ge < Ue; ge++) Y[ge] = 0;
      for (ge = X; ge <= We; ge++) {
        const T = E[ge];
        if (Ve >= Ue) {
          Se(T, Te, xe, !0);
          continue;
        }
        let N;
        if (T.key != null)
          N = De.get(T.key);
        else
          for (qe = Fe; qe <= ke; qe++)
            if (Y[qe - Fe] === 0 && so(T, A[qe])) {
              N = qe;
              break;
            }
        N === void 0 ? Se(T, Te, xe, !0) : (Y[N - Fe] = ge + 1, N >= gt ? gt = N : Qe = !0, C(
          T,
          A[N],
          ce,
          null,
          Te,
          xe,
          Z,
          G,
          ve
        ), Ve++);
      }
      const he = Qe ? pd(Y) : wo;
      for (qe = he.length - 1, ge = Ue - 1; ge >= 0; ge--) {
        const T = Fe + ge, N = A[T], J = A[T + 1], Ee = T + 1 < He ? (
          // #13559, fallback to el placeholder for unresolved async component
          J.el || J.placeholder
        ) : $e;
        Y[ge] === 0 ? C(
          null,
          N,
          ce,
          Ee,
          Te,
          xe,
          Z,
          G,
          ve
        ) : Qe && (qe < 0 || ge !== he[qe] ? ae(N, ce, Ee, 2) : qe--);
      }
    }
  }, ae = (E, A, ce, $e, Te = null) => {
    const { el: xe, type: Z, transition: G, children: ve, shapeFlag: ge } = E;
    if (ge & 6) {
      ae(E.component.subTree, A, ce, $e);
      return;
    }
    if (ge & 128) {
      E.suspense.move(A, ce, $e);
      return;
    }
    if (ge & 64) {
      Z.move(E, A, ce, fe);
      return;
    }
    if (Z === B) {
      n(xe, A, ce);
      for (let We = 0; We < ve.length; We++)
        ae(ve[We], A, ce, $e);
      n(E.anchor, A, ce);
      return;
    }
    if (Z === Aa) {
      M(E, A, ce);
      return;
    }
    if ($e !== 2 && ge & 1 && G)
      if ($e === 0)
        G.beforeEnter(xe), n(xe, A, ce), Ht(() => G.enter(xe), Te);
      else {
        const { leave: We, delayLeave: ke, afterLeave: X } = G, Fe = () => {
          E.ctx.isUnmounted ? l(xe) : n(xe, A, ce);
        }, De = () => {
          xe._isLeaving && xe[Ps](
            !0
            /* cancelled */
          ), We(xe, () => {
            Fe(), X && X();
          });
        };
        ke ? ke(xe, Fe, De) : De();
      }
    else
      n(xe, A, ce);
  }, Se = (E, A, ce, $e = !1, Te = !1) => {
    const {
      type: xe,
      props: Z,
      ref: G,
      children: ve,
      dynamicChildren: ge,
      shapeFlag: He,
      patchFlag: We,
      dirs: ke,
      cacheIndex: X
    } = E;
    if (We === -2 && (Te = !1), G != null && (Ns(), Xo(G, null, ce, E, !0), Os()), X != null && (A.renderCache[X] = void 0), He & 256) {
      A.ctx.deactivate(E);
      return;
    }
    const Fe = He & 1 && ke, De = !bo(E);
    let qe;
    if (De && (qe = Z && Z.onVnodeBeforeUnmount) && ps(qe, A, E), He & 6)
      ze(E.component, ce, $e);
    else {
      if (He & 128) {
        E.suspense.unmount(ce, $e);
        return;
      }
      Fe && Ys(E, null, A, "beforeUnmount"), He & 64 ? E.type.remove(
        E,
        A,
        ce,
        fe,
        $e
      ) : ge && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !ge.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (xe !== B || We > 0 && We & 64) ? Ae(
        ge,
        A,
        ce,
        !1,
        !0
      ) : (xe === B && We & 384 || !Te && He & 16) && Ae(ve, A, ce), $e && pe(E);
    }
    (De && (qe = Z && Z.onVnodeUnmounted) || Fe) && Ht(() => {
      qe && ps(qe, A, E), Fe && Ys(E, null, A, "unmounted");
    }, ce);
  }, pe = (E) => {
    const { type: A, el: ce, anchor: $e, transition: Te } = E;
    if (A === B) {
      Ne(ce, $e);
      return;
    }
    if (A === Aa) {
      P(E);
      return;
    }
    const xe = () => {
      l(ce), Te && !Te.persisted && Te.afterLeave && Te.afterLeave();
    };
    if (E.shapeFlag & 1 && Te && !Te.persisted) {
      const { leave: Z, delayLeave: G } = Te, ve = () => Z(ce, xe);
      G ? G(E.el, xe, ve) : ve();
    } else
      xe();
  }, Ne = (E, A) => {
    let ce;
    for (; E !== A; )
      ce = w(E), l(E), E = ce;
    l(A);
  }, ze = (E, A, ce) => {
    const { bum: $e, scope: Te, job: xe, subTree: Z, um: G, m: ve, a: ge } = E;
    Zl(ve), Zl(ge), $e && Mn($e), Te.stop(), xe && (xe.flags |= 8, Se(Z, E, A, ce)), G && Ht(G, A), Ht(() => {
      E.isUnmounted = !0;
    }, A);
  }, Ae = (E, A, ce, $e = !1, Te = !1, xe = 0) => {
    for (let Z = xe; Z < E.length; Z++)
      Se(E[Z], A, ce, $e, Te);
  }, re = (E) => {
    if (E.shapeFlag & 6)
      return re(E.component.subTree);
    if (E.shapeFlag & 128)
      return E.suspense.next();
    const A = w(E.anchor || E.el), ce = A && A[dr];
    return ce ? w(ce) : A;
  };
  let oe = !1;
  const Le = (E, A, ce) => {
    E == null ? A._vnode && Se(A._vnode, null, null, !0) : C(
      A._vnode || null,
      E,
      A,
      null,
      null,
      null,
      ce
    ), A._vnode = E, oe || (oe = !0, zl(), rr(), oe = !1);
  }, fe = {
    p: C,
    um: Se,
    m: ae,
    r: pe,
    mt: te,
    mc: D,
    pc: ee,
    pbc: ue,
    n: re,
    o: e
  };
  return {
    render: Le,
    hydrate: void 0,
    createApp: Ku(Le)
  };
}
function Ua({ type: e, props: t }, o) {
  return o === "svg" && e === "foreignObject" || o === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : o;
}
function Xs({ effect: e, job: t }, o) {
  o ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function vd(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Cl(e, t, o = !1) {
  const n = e.children, l = t.children;
  if (Xe(n) && Xe(l))
    for (let r = 0; r < n.length; r++) {
      const u = n[r];
      let c = l[r];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = l[r] = Gs(l[r]), c.el = u.el), !o && c.patchFlag !== -2 && Cl(u, c)), c.type === ra && // avoid cached text nodes retaining detached dom nodes
      c.patchFlag !== -1 && (c.el = u.el), c.type === Bt && !c.el && (c.el = u.el);
    }
}
function pd(e) {
  const t = e.slice(), o = [0];
  let n, l, r, u, c;
  const d = e.length;
  for (n = 0; n < d; n++) {
    const v = e[n];
    if (v !== 0) {
      if (l = o[o.length - 1], e[l] < v) {
        t[n] = l, o.push(n);
        continue;
      }
      for (r = 0, u = o.length - 1; r < u; )
        c = r + u >> 1, e[o[c]] < v ? r = c + 1 : u = c;
      v < e[o[r]] && (r > 0 && (t[n] = o[r - 1]), o[r] = n);
    }
  }
  for (r = o.length, u = o[r - 1]; r-- > 0; )
    o[r] = u, u = t[u];
  return o;
}
function zr(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : zr(t);
}
function Zl(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const Fr = (e) => e.__isSuspense;
function gd(e, t) {
  t && t.pendingBranch ? Xe(e) ? t.effects.push(...e) : t.effects.push(e) : Su(e);
}
const B = Symbol.for("v-fgt"), ra = Symbol.for("v-txt"), Bt = Symbol.for("v-cmt"), Aa = Symbol.for("v-stc"), en = [];
let es = null;
function a(e = !1) {
  en.push(es = e ? null : []);
}
function hd() {
  en.pop(), es = en[en.length - 1] || null;
}
let un = 1;
function jn(e, t = !1) {
  un += e, e < 0 && es && t && (es.hasOnce = !0);
}
function Vr(e) {
  return e.dynamicChildren = un > 0 ? es || wo : null, hd(), un > 0 && es && es.push(e), e;
}
function i(e, t, o, n, l, r) {
  return Vr(
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
  return Vr(
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
function dn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function so(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Br = ({ key: e }) => e ?? null, Ln = ({
  ref: e,
  ref_key: t,
  ref_for: o
}) => (typeof e == "number" && (e = "" + e), e != null ? Ct(e) || Gt(e) || tt(e) ? { i: Ot, r: e, k: t, f: !!o } : e : null);
function s(e, t = null, o = null, n = 0, l = null, r = e === B ? 0 : 1, u = !1, c = !1) {
  const d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Br(t),
    ref: t && Ln(t),
    scopeId: ur,
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
  return c ? (xl(d, o), r & 128 && e.normalize(d)) : o && (d.shapeFlag |= Ct(o) ? 8 : 16), un > 0 && // avoid a block node from tracking itself
  !u && // has current parent block
  es && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (d.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  d.patchFlag !== 32 && es.push(d), d;
}
const b = yd;
function yd(e, t = null, o = null, n = 0, l = null, r = !1) {
  if ((!e || e === $r) && (e = Bt), dn(e)) {
    const c = qs(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return o && xl(c, o), un > 0 && !r && es && (c.shapeFlag & 6 ? es[es.indexOf(e)] = c : es.push(c)), c.patchFlag = -2, c;
  }
  if (Td(e) && (e = e.__vccOpts), t) {
    t = wd(t);
    let { class: c, style: d } = t;
    c && !Ct(c) && (t.class = Be(c)), ht(d) && (yl(d) && !Xe(d) && (d = Pt({}, d)), t.style = Lt(d));
  }
  const u = Ct(e) ? 1 : Fr(e) ? 128 : mr(e) ? 64 : ht(e) ? 4 : tt(e) ? 2 : 0;
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
function wd(e) {
  return e ? yl(e) || Lr(e) ? Pt({}, e) : e : null;
}
function qs(e, t, o = !1, n = !1) {
  const { props: l, ref: r, patchFlag: u, children: c, transition: d } = e, v = t ? _d(l || {}, t) : l, f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: v,
    key: v && Br(v),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      o && r ? Xe(r) ? r.concat(Ln(t)) : [r, Ln(t)] : Ln(t)
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
    patchFlag: t && e.type !== B ? u === -1 ? 16 : u | 16 : u,
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
    ssContent: e.ssContent && qs(e.ssContent),
    ssFallback: e.ssFallback && qs(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return d && n && io(
    f,
    d.clone(f)
  ), f;
}
function S(e = " ", t = 0) {
  return b(ra, null, e, t);
}
function y(e = "", t = !1) {
  return t ? (a(), L(Bt, null, e)) : b(Bt, null, e);
}
function ks(e) {
  return e == null || typeof e == "boolean" ? b(Bt) : Xe(e) ? b(
    B,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : dn(e) ? Gs(e) : b(ra, null, String(e));
}
function Gs(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : qs(e);
}
function xl(e, t) {
  let o = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (Xe(t))
    o = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const l = t.default;
      l && (l._c && (l._d = !1), xl(e, l()), l._c && (l._d = !0));
      return;
    } else {
      o = 32;
      const l = t._;
      !l && !Lr(t) ? t._ctx = Ot : l === 3 && Ot && (Ot.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else tt(t) ? (t = { default: t, _ctx: Ot }, o = 32) : (t = String(t), n & 64 ? (o = 16, t = [S(t)]) : o = 8);
  e.children = t, e.shapeFlag |= o;
}
function _d(...e) {
  const t = {};
  for (let o = 0; o < e.length; o++) {
    const n = e[o];
    for (const l in n)
      if (l === "class")
        t.class !== n.class && (t.class = Be([t.class, n.class]));
      else if (l === "style")
        t.style = Lt([t.style, n.style]);
      else if (Xn(l)) {
        const r = t[l], u = n[l];
        u && r !== u && !(Xe(r) && r.includes(u)) && (t[l] = r ? [].concat(r, u) : u);
      } else l !== "" && (t[l] = n[l]);
  }
  return t;
}
function ps(e, t, o, n = null) {
  ms(e, t, 7, [
    o,
    n
  ]);
}
const kd = Ir();
let bd = 0;
function $d(e, t, o) {
  const n = e.type, l = (t ? t.appContext : e.appContext) || kd, r = {
    uid: bd++,
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
    scope: new Jc(
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
    propsOptions: Nr(n, l),
    emitsOptions: Mr(n, l),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: wt,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: wt,
    data: wt,
    props: wt,
    attrs: wt,
    slots: wt,
    refs: wt,
    setupState: wt,
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
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = ed.bind(null, r), e.ce && e.ce(r), r;
}
let Wt = null;
const Sl = () => Wt || Ot;
let Hn, Za;
{
  const e = sa(), t = (o, n) => {
    let l;
    return (l = e[o]) || (l = e[o] = []), l.push(n), (r) => {
      l.length > 1 ? l.forEach((u) => u(r)) : l[0](r);
    };
  };
  Hn = t(
    "__VUE_INSTANCE_SETTERS__",
    (o) => Wt = o
  ), Za = t(
    "__VUE_SSR_SETTERS__",
    (o) => mn = o
  );
}
const hn = (e) => {
  const t = Wt;
  return Hn(e), e.scope.on(), () => {
    e.scope.off(), Hn(t);
  };
}, ei = () => {
  Wt && Wt.scope.off(), Hn(null);
};
function Wr(e) {
  return e.vnode.shapeFlag & 4;
}
let mn = !1;
function Cd(e, t = !1, o = !1) {
  t && Za(t);
  const { props: n, children: l } = e.vnode, r = Wr(e);
  ld(e, n, r, t), ud(e, l, o || t);
  const u = r ? xd(e, t) : void 0;
  return t && Za(!1), u;
}
function xd(e, t) {
  const o = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Vu);
  const { setup: n } = o;
  if (n) {
    Ns();
    const l = e.setupContext = n.length > 1 ? Id(e) : null, r = hn(e), u = pn(
      n,
      e,
      0,
      [
        e.props,
        l
      ]
    ), c = Ai(u);
    if (Os(), r(), (c || e.sp) && !bo(e) && _r(e), c) {
      if (u.then(ei, ei), t)
        return u.then((d) => {
          ti(e, d);
        }).catch((d) => {
          na(d, e, 0);
        });
      e.asyncDep = u;
    } else
      ti(e, u);
  } else
    Gr(e);
}
function ti(e, t, o) {
  tt(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ht(t) && (e.setupState = ar(t)), Gr(e);
}
function Gr(e, t, o) {
  const n = e.type;
  e.render || (e.render = n.render || $s);
  {
    const l = hn(e);
    Ns();
    try {
      Bu(e);
    } finally {
      Os(), l();
    }
  }
}
const Sd = {
  get(e, t) {
    return Ft(e, "get", ""), e[t];
  }
};
function Id(e) {
  const t = (o) => {
    e.exposed = o || {};
  };
  return {
    attrs: new Proxy(e.attrs, Sd),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function ca(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(ar(gu(e.exposed)), {
    get(t, o) {
      if (o in t)
        return t[o];
      if (o in Zo)
        return Zo[o](e);
    },
    has(t, o) {
      return o in t || o in Zo;
    }
  })) : e.proxy;
}
function Ed(e, t = !0) {
  return tt(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Td(e) {
  return tt(e) && "__vccOpts" in e;
}
const R = (e, t) => ku(e, t, mn);
function Ro(e, t, o) {
  try {
    jn(-1);
    const n = arguments.length;
    return n === 2 ? ht(t) && !Xe(t) ? dn(t) ? b(e, null, [t]) : b(e, t) : b(e, null, t) : (n > 3 ? o = Array.prototype.slice.call(arguments, 2) : n === 3 && dn(o) && (o = [o]), b(e, t, o));
  } finally {
    jn(1);
  }
}
const Md = "3.5.25";
/**
* @vue/runtime-dom v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let el;
const si = typeof window < "u" && window.trustedTypes;
if (si)
  try {
    el = /* @__PURE__ */ si.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const jr = el ? (e) => el.createHTML(e) : (e) => e, Pd = "http://www.w3.org/2000/svg", Rd = "http://www.w3.org/1998/Math/MathML", Ms = typeof document < "u" ? document : null, oi = Ms && /* @__PURE__ */ Ms.createElement("template"), Ld = {
  insert: (e, t, o) => {
    t.insertBefore(e, o || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, o, n) => {
    const l = t === "svg" ? Ms.createElementNS(Pd, e) : t === "mathml" ? Ms.createElementNS(Rd, e) : o ? Ms.createElement(e, { is: o }) : Ms.createElement(e);
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
      oi.innerHTML = jr(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const c = oi.content;
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
}, Fs = "transition", Ao = "animation", Eo = Symbol("_vtc"), Hr = {
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
}, qr = /* @__PURE__ */ Pt(
  {},
  gr,
  Hr
), Dd = (e) => (e.displayName = "Transition", e.props = qr, e), Nd = /* @__PURE__ */ Dd(
  (e, { slots: t }) => Ro(Tu, Kr(e), t)
), Zs = (e, t = []) => {
  Xe(e) ? e.forEach((o) => o(...t)) : e && e(...t);
}, ni = (e) => e ? Xe(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Kr(e) {
  const t = {};
  for (const Q in e)
    Q in Hr || (t[Q] = e[Q]);
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
    appearActiveClass: v = u,
    appearToClass: f = c,
    leaveFromClass: p = `${o}-leave-from`,
    leaveActiveClass: w = `${o}-leave-active`,
    leaveToClass: g = `${o}-leave-to`
  } = e, _ = Od(l), C = _ && _[0], $ = _ && _[1], {
    onBeforeEnter: x,
    onEnter: I,
    onEnterCancelled: M,
    onLeave: P,
    onLeaveCancelled: O,
    onBeforeAppear: F = x,
    onAppear: W = I,
    onAppearCancelled: D = M
  } = t, K = (Q, we, te, H) => {
    Q._enterCancelled = H, Vs(Q, we ? f : c), Vs(Q, we ? v : u), te && te();
  }, ue = (Q, we) => {
    Q._isLeaving = !1, Vs(Q, p), Vs(Q, g), Vs(Q, w), we && we();
  }, se = (Q) => (we, te) => {
    const H = Q ? W : I, q = () => K(we, Q, te);
    Zs(H, [we, q]), ai(() => {
      Vs(we, Q ? d : r), hs(we, Q ? f : c), ni(H) || li(we, n, C, q);
    });
  };
  return Pt(t, {
    onBeforeEnter(Q) {
      Zs(x, [Q]), hs(Q, r), hs(Q, u);
    },
    onBeforeAppear(Q) {
      Zs(F, [Q]), hs(Q, d), hs(Q, v);
    },
    onEnter: se(!1),
    onAppear: se(!0),
    onLeave(Q, we) {
      Q._isLeaving = !0;
      const te = () => ue(Q, we);
      hs(Q, p), Q._enterCancelled ? (hs(Q, w), tl(Q)) : (tl(Q), hs(Q, w)), ai(() => {
        Q._isLeaving && (Vs(Q, p), hs(Q, g), ni(P) || li(Q, n, $, te));
      }), Zs(P, [Q, te]);
    },
    onEnterCancelled(Q) {
      K(Q, !1, void 0, !0), Zs(M, [Q]);
    },
    onAppearCancelled(Q) {
      K(Q, !0, void 0, !0), Zs(D, [Q]);
    },
    onLeaveCancelled(Q) {
      ue(Q), Zs(O, [Q]);
    }
  });
}
function Od(e) {
  if (e == null)
    return null;
  if (ht(e))
    return [za(e.enter), za(e.leave)];
  {
    const t = za(e);
    return [t, t];
  }
}
function za(e) {
  return Vc(e);
}
function hs(e, t) {
  t.split(/\s+/).forEach((o) => o && e.classList.add(o)), (e[Eo] || (e[Eo] = /* @__PURE__ */ new Set())).add(t);
}
function Vs(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.remove(n));
  const o = e[Eo];
  o && (o.delete(t), o.size || (e[Eo] = void 0));
}
function ai(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Ud = 0;
function li(e, t, o, n) {
  const l = e._endId = ++Ud, r = () => {
    l === e._endId && n();
  };
  if (o != null)
    return setTimeout(r, o);
  const { type: u, timeout: c, propCount: d } = Jr(e, t);
  if (!u)
    return n();
  const v = u + "end";
  let f = 0;
  const p = () => {
    e.removeEventListener(v, w), r();
  }, w = (g) => {
    g.target === e && ++f >= d && p();
  };
  setTimeout(() => {
    f < d && p();
  }, c + 1), e.addEventListener(v, w);
}
function Jr(e, t) {
  const o = window.getComputedStyle(e), n = (_) => (o[_] || "").split(", "), l = n(`${Fs}Delay`), r = n(`${Fs}Duration`), u = ii(l, r), c = n(`${Ao}Delay`), d = n(`${Ao}Duration`), v = ii(c, d);
  let f = null, p = 0, w = 0;
  t === Fs ? u > 0 && (f = Fs, p = u, w = r.length) : t === Ao ? v > 0 && (f = Ao, p = v, w = d.length) : (p = Math.max(u, v), f = p > 0 ? u > v ? Fs : Ao : null, w = f ? f === Fs ? r.length : d.length : 0);
  const g = f === Fs && /\b(?:transform|all)(?:,|$)/.test(
    n(`${Fs}Property`).toString()
  );
  return {
    type: f,
    timeout: p,
    propCount: w,
    hasTransform: g
  };
}
function ii(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((o, n) => ri(o) + ri(e[n])));
}
function ri(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function tl(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Ad(e, t, o) {
  const n = e[Eo];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : o ? e.setAttribute("class", t) : e.className = t;
}
const ci = Symbol("_vod"), zd = Symbol("_vsh"), Fd = Symbol(""), Vd = /(?:^|;)\s*display\s*:/;
function Bd(e, t, o) {
  const n = e.style, l = Ct(o);
  let r = !1;
  if (o && !l) {
    if (t)
      if (Ct(t))
        for (const u of t.split(";")) {
          const c = u.slice(0, u.indexOf(":")).trim();
          o[c] == null && Dn(n, c, "");
        }
      else
        for (const u in t)
          o[u] == null && Dn(n, u, "");
    for (const u in o)
      u === "display" && (r = !0), Dn(n, u, o[u]);
  } else if (l) {
    if (t !== o) {
      const u = n[Fd];
      u && (o += ";" + u), n.cssText = o, r = Vd.test(o);
    }
  } else t && e.removeAttribute("style");
  ci in e && (e[ci] = r ? n.display : "", e[zd] && (n.display = "none"));
}
const ui = /\s*!important$/;
function Dn(e, t, o) {
  if (Xe(o))
    o.forEach((n) => Dn(e, t, n));
  else if (o == null && (o = ""), t.startsWith("--"))
    e.setProperty(t, o);
  else {
    const n = Wd(e, t);
    ui.test(o) ? e.setProperty(
      Js(n),
      o.replace(ui, ""),
      "important"
    ) : e[n] = o;
  }
}
const di = ["Webkit", "Moz", "ms"], Fa = {};
function Wd(e, t) {
  const o = Fa[t];
  if (o)
    return o;
  let n = ls(t);
  if (n !== "filter" && n in e)
    return Fa[t] = n;
  n = ea(n);
  for (let l = 0; l < di.length; l++) {
    const r = di[l] + n;
    if (r in e)
      return Fa[t] = r;
  }
  return t;
}
const mi = "http://www.w3.org/1999/xlink";
function fi(e, t, o, n, l, r = qc(t)) {
  n && t.startsWith("xlink:") ? o == null ? e.removeAttributeNS(mi, t.slice(6, t.length)) : e.setAttributeNS(mi, t, o) : o == null || r && !Bi(o) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : us(o) ? String(o) : o
  );
}
function vi(e, t, o, n, l) {
  if (t === "innerHTML" || t === "textContent") {
    o != null && (e[t] = t === "innerHTML" ? jr(o) : o);
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
    c === "boolean" ? o = Bi(o) : o == null && c === "string" ? (o = "", u = !0) : c === "number" && (o = 0, u = !0);
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
function Gd(e, t, o, n) {
  e.removeEventListener(t, o, n);
}
const pi = Symbol("_vei");
function jd(e, t, o, n, l = null) {
  const r = e[pi] || (e[pi] = {}), u = r[t];
  if (n && u)
    u.value = n;
  else {
    const [c, d] = Hd(t);
    if (n) {
      const v = r[t] = Jd(
        n,
        l
      );
      Ds(e, c, v, d);
    } else u && (Gd(e, c, u, d), r[t] = void 0);
  }
}
const gi = /(?:Once|Passive|Capture)$/;
function Hd(e) {
  let t;
  if (gi.test(e)) {
    t = {};
    let n;
    for (; n = e.match(gi); )
      e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Js(e.slice(2)), t];
}
let Va = 0;
const qd = /* @__PURE__ */ Promise.resolve(), Kd = () => Va || (qd.then(() => Va = 0), Va = Date.now());
function Jd(e, t) {
  const o = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= o.attached)
      return;
    ms(
      Qd(n, o.value),
      t,
      5,
      [n]
    );
  };
  return o.value = e, o.attached = Kd(), o;
}
function Qd(e, t) {
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
const hi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Yd = (e, t, o, n, l, r) => {
  const u = l === "svg";
  t === "class" ? Ad(e, n, u) : t === "style" ? Bd(e, o, n) : Xn(t) ? rl(t) || jd(e, t, o, n, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Xd(e, t, n, u)) ? (vi(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && fi(e, t, n, u, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !Ct(n)) ? vi(e, ls(t), n, r, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), fi(e, t, n, u));
};
function Xd(e, t, o, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && hi(t) && tt(o));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const l = e.tagName;
    if (l === "IMG" || l === "VIDEO" || l === "CANVAS" || l === "SOURCE")
      return !1;
  }
  return hi(t) && Ct(o) ? !1 : t in e;
}
const Qr = /* @__PURE__ */ new WeakMap(), Yr = /* @__PURE__ */ new WeakMap(), qn = Symbol("_moveCb"), yi = Symbol("_enterCb"), Zd = (e) => (delete e.props.mode, e), em = /* @__PURE__ */ Zd({
  name: "TransitionGroup",
  props: /* @__PURE__ */ Pt({}, qr, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: t }) {
    const o = Sl(), n = pr();
    let l, r;
    return br(() => {
      if (!l.length)
        return;
      const u = e.moveClass || `${e.name || "v"}-move`;
      if (!am(
        l[0].el,
        o.vnode.el,
        u
      )) {
        l = [];
        return;
      }
      l.forEach(sm), l.forEach(om);
      const c = l.filter(nm);
      tl(o.vnode.el), c.forEach((d) => {
        const v = d.el, f = v.style;
        hs(v, u), f.transform = f.webkitTransform = f.transitionDuration = "";
        const p = v[qn] = (w) => {
          w && w.target !== v || (!w || w.propertyName.endsWith("transform")) && (v.removeEventListener("transitionend", p), v[qn] = null, Vs(v, u));
        };
        v.addEventListener("transitionend", p);
      }), l = [];
    }), () => {
      const u = ct(e), c = Kr(u);
      let d = u.tag || B;
      if (l = [], r)
        for (let v = 0; v < r.length; v++) {
          const f = r[v];
          f.el && f.el instanceof Element && (l.push(f), io(
            f,
            cn(
              f,
              c,
              n,
              o
            )
          ), Qr.set(f, {
            left: f.el.offsetLeft,
            top: f.el.offsetTop
          }));
        }
      r = t.default ? _l(t.default()) : [];
      for (let v = 0; v < r.length; v++) {
        const f = r[v];
        f.key != null && io(
          f,
          cn(f, c, n, o)
        );
      }
      return b(d, null, r);
    };
  }
}), tm = em;
function sm(e) {
  const t = e.el;
  t[qn] && t[qn](), t[yi] && t[yi]();
}
function om(e) {
  Yr.set(e, {
    left: e.el.offsetLeft,
    top: e.el.offsetTop
  });
}
function nm(e) {
  const t = Qr.get(e), o = Yr.get(e), n = t.left - o.left, l = t.top - o.top;
  if (n || l) {
    const r = e.el.style;
    return r.transform = r.webkitTransform = `translate(${n}px,${l}px)`, r.transitionDuration = "0s", e;
  }
}
function am(e, t, o) {
  const n = e.cloneNode(), l = e[Eo];
  l && l.forEach((c) => {
    c.split(/\s+/).forEach((d) => d && n.classList.remove(d));
  }), o.split(/\s+/).forEach((c) => c && n.classList.add(c)), n.style.display = "none";
  const r = t.nodeType === 1 ? t : t.parentNode;
  r.appendChild(n);
  const { hasTransform: u } = Jr(n);
  return r.removeChild(n), u;
}
const Ks = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Xe(t) ? (o) => Mn(t, o) : t;
};
function lm(e) {
  e.target.composing = !0;
}
function wi(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const as = Symbol("_assign");
function _i(e, t, o) {
  return t && (e = e.trim()), o && (e = ta(e)), e;
}
const tn = {
  created(e, { modifiers: { lazy: t, trim: o, number: n } }, l) {
    e[as] = Ks(l);
    const r = n || l.props && l.props.type === "number";
    Ds(e, t ? "change" : "input", (u) => {
      u.target.composing || e[as](_i(e.value, o, r));
    }), (o || r) && Ds(e, "change", () => {
      e.value = _i(e.value, o, r);
    }), t || (Ds(e, "compositionstart", lm), Ds(e, "compositionend", wi), Ds(e, "change", wi));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: o, modifiers: { lazy: n, trim: l, number: r } }, u) {
    if (e[as] = Ks(u), e.composing) return;
    const c = (r || e.type === "number") && !/^0\d/.test(e.value) ? ta(e.value) : e.value, d = t ?? "";
    c !== d && (document.activeElement === e && e.type !== "range" && (n && t === o || l && e.value.trim() === d) || (e.value = d));
  }
}, Kn = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, o) {
    e[as] = Ks(o), Ds(e, "change", () => {
      const n = e._modelValue, l = To(e), r = e.checked, u = e[as];
      if (Xe(n)) {
        const c = dl(n, l), d = c !== -1;
        if (r && !d)
          u(n.concat(l));
        else if (!r && d) {
          const v = [...n];
          v.splice(c, 1), u(v);
        }
      } else if (Mo(n)) {
        const c = new Set(n);
        r ? c.add(l) : c.delete(l), u(c);
      } else
        u(Xr(e, r));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: ki,
  beforeUpdate(e, t, o) {
    e[as] = Ks(o), ki(e, t, o);
  }
};
function ki(e, { value: t, oldValue: o }, n) {
  e._modelValue = t;
  let l;
  if (Xe(t))
    l = dl(t, n.props.value) > -1;
  else if (Mo(t))
    l = t.has(n.props.value);
  else {
    if (t === o) return;
    l = lo(t, Xr(e, !0));
  }
  e.checked !== l && (e.checked = l);
}
const Nn = {
  created(e, { value: t }, o) {
    e.checked = lo(t, o.props.value), e[as] = Ks(o), Ds(e, "change", () => {
      e[as](To(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: o }, n) {
    e[as] = Ks(n), t !== o && (e.checked = lo(t, n.props.value));
  }
}, Co = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: o } }, n) {
    const l = Mo(t);
    Ds(e, "change", () => {
      const r = Array.prototype.filter.call(e.options, (u) => u.selected).map(
        (u) => o ? ta(To(u)) : To(u)
      );
      e[as](
        e.multiple ? l ? new Set(r) : r : r[0]
      ), e._assigning = !0, Rt(() => {
        e._assigning = !1;
      });
    }), e[as] = Ks(n);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    bi(e, t);
  },
  beforeUpdate(e, t, o) {
    e[as] = Ks(o);
  },
  updated(e, { value: t }) {
    e._assigning || bi(e, t);
  }
};
function bi(e, t) {
  const o = e.multiple, n = Xe(t);
  if (!(o && !n && !Mo(t))) {
    for (let l = 0, r = e.options.length; l < r; l++) {
      const u = e.options[l], c = To(u);
      if (o)
        if (n) {
          const d = typeof c;
          d === "string" || d === "number" ? u.selected = t.some((v) => String(v) === String(c)) : u.selected = dl(t, c) > -1;
        } else
          u.selected = t.has(c);
      else if (lo(To(u), t)) {
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
function Xr(e, t) {
  const o = t ? "_trueValue" : "_falseValue";
  return o in e ? e[o] : t;
}
const im = ["ctrl", "shift", "alt", "meta"], rm = {
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
  exact: (e, t) => im.some((o) => e[`${o}Key`] && !t.includes(o))
}, pt = (e, t) => {
  const o = e._withMods || (e._withMods = {}), n = t.join(".");
  return o[n] || (o[n] = ((l, ...r) => {
    for (let u = 0; u < t.length; u++) {
      const c = rm[t[u]];
      if (c && c(l, t)) return;
    }
    return e(l, ...r);
  }));
}, cm = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, cs = (e, t) => {
  const o = e._withKeys || (e._withKeys = {}), n = t.join(".");
  return o[n] || (o[n] = ((l) => {
    if (!("key" in l))
      return;
    const r = Js(l.key);
    if (t.some(
      (u) => u === r || cm[u] === r
    ))
      return e(l);
  }));
}, um = /* @__PURE__ */ Pt({ patchProp: Yd }, Ld);
let $i;
function dm() {
  return $i || ($i = md(um));
}
const yn = ((...e) => {
  const t = dm().createApp(...e), { mount: o } = t;
  return t.mount = (n) => {
    const l = fm(n);
    if (!l) return;
    const r = t._component;
    !tt(r) && !r.render && !r.template && (r.template = l.innerHTML), l.nodeType === 1 && (l.textContent = "");
    const u = o(l, !1, mm(l));
    return l instanceof Element && (l.removeAttribute("v-cloak"), l.setAttribute("data-v-app", "")), u;
  }, t;
});
function mm(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function fm(e) {
  return Ct(e) ? document.querySelector(e) : e;
}
const zR = co({
  hasWorkspace: !1,
  hasEnvironments: !1,
  isManaged: !1,
  hasLegacyManager: !1
});
const FR = [
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
], VR = {
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
}, vm = [
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
], BR = [
  ...vm,
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
function zo() {
  return !1;
}
function pm(e) {
  return !!(e && typeof e.fetchApi == "function");
}
function Lo() {
  var o, n, l;
  const e = window, t = [
    (o = e.app) == null ? void 0 : o.api,
    (l = (n = e.comfyAPI) == null ? void 0 : n.api) == null ? void 0 : l.api
  ];
  for (const r of t)
    if (pm(r))
      return r;
  return null;
}
async function Hs(e, t) {
  const o = Lo();
  if (!o)
    throw new Error("ComfyUI API not available");
  return o.fetchApi(e, t);
}
function gm(e = "comfygit-panel") {
  const t = Lo();
  return (t == null ? void 0 : t.clientId) ?? (t == null ? void 0 : t.initialClientId) ?? e;
}
class Zr extends Error {
  constructor(o, n, l, r) {
    super(o);
    bn(this, "status");
    bn(this, "data");
    bn(this, "endpoint");
    this.name = "ComfyGitApiError", this.status = n, this.data = l, this.endpoint = r;
  }
}
function hm() {
  return typeof crypto < "u" && crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const t = Math.random() * 16 | 0;
    return (e === "x" ? t : t & 3 | 8).toString(16);
  });
}
function rt() {
  const e = k(!1), t = k(null);
  async function o(V, be) {
    const Ge = await Hs(V, be), mt = await Ge.text();
    if (!Ge.ok) {
      let Tt = {};
      if (mt)
        try {
          const et = JSON.parse(mt);
          et && typeof et == "object" && (Tt = et);
        } catch {
          Tt = { error: mt };
        }
      const vs = Tt.error || Tt.message || Tt.detail || Ge.statusText || `Request failed: ${Ge.status}`;
      throw new Zr(String(vs), Ge.status, Tt, V);
    }
    if (mt)
      return JSON.parse(mt);
  }
  async function n(V) {
    return o(`/v2/comfygit/cloud/auth/config?cloud_url=${encodeURIComponent(V)}`);
  }
  async function l(V, be, Ge) {
    return o("/v2/comfygit/cloud/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cloud_url: V, email: be, password: Ge })
    });
  }
  async function r(V, be, Ge) {
    return o("/v2/comfygit/cloud/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cloud_url: V, email: be, password: Ge })
    });
  }
  async function u(V, be) {
    return o(`/v2/comfygit/cloud/auth/me?cloud_url=${encodeURIComponent(V)}`, {
      headers: { Authorization: `Bearer ${be}` }
    });
  }
  async function c(V, be) {
    return o("/v2/comfygit/cloud/auth/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cloud_url: V, refresh_token: be || null })
    });
  }
  async function d(V, be) {
    return o(`/v2/comfygit/cloud/environments?cloud_url=${encodeURIComponent(V)}`, {
      headers: { Authorization: `Bearer ${be}` }
    });
  }
  async function v(V, be, Ge) {
    return o(
      `/v2/comfygit/cloud/environments/${encodeURIComponent(be)}/revisions?cloud_url=${encodeURIComponent(V)}`,
      {
        headers: { Authorization: `Bearer ${Ge}` }
      }
    );
  }
  async function f(V, be, Ge, mt) {
    return o("/v2/comfygit/cloud/publish", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${be}`
      },
      body: JSON.stringify({
        cloud_url: V,
        source_message: Ge || null,
        cloud_environment_id: mt || null
      })
    });
  }
  async function p(V = !1) {
    return o(V ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function w(V, be = !1) {
    return o("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: V, allow_issues: be })
    });
  }
  async function g(V = 10, be = 0) {
    return o(`/v2/comfygit/log?limit=${V}&offset=${be}`);
  }
  async function _(V, be = 50) {
    return o(`/v2/comfygit/log?branch=${encodeURIComponent(V)}&limit=${be}`);
  }
  async function C(V) {
    return o("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: V })
    });
  }
  async function $() {
    return o("/v2/comfygit/export/validate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({})
    });
  }
  async function x() {
    return o("/v2/comfygit/deploy/validate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({})
    });
  }
  async function I(V) {
    return o("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: V, force: !0 })
    });
  }
  async function M(V) {
    return o(`/v2/comfygit/environment_export/${encodeURIComponent(V)}/validate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({})
    });
  }
  async function P(V, be) {
    return o(`/v2/comfygit/environment_export/${encodeURIComponent(V)}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: be, force: !0 })
    });
  }
  async function O() {
    return o("/v2/comfygit/branches");
  }
  async function F(V) {
    return o(`/v2/comfygit/commit/${V}`);
  }
  async function W(V, be = !1) {
    return o("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: V, force: be })
    });
  }
  async function D(V, be = "HEAD") {
    return o("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: V, start_point: be })
    });
  }
  async function K(V, be = !1) {
    return o("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: V, force: be })
    });
  }
  async function ue(V, be = !1) {
    return o(`/v2/comfygit/branch/${encodeURIComponent(V)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: be })
    });
  }
  async function se() {
    try {
      return await o("/v2/comfygit/environments");
    } catch {
      try {
        const V = await p();
        return {
          environments: [{
            name: V.environment,
            is_current: !0,
            path: "~/comfygit/environments/" + V.environment,
            created_at: (/* @__PURE__ */ new Date()).toISOString(),
            workflow_count: V.workflows.total,
            node_count: 0,
            model_count: 0,
            current_branch: V.branch
          }],
          current: V.environment,
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
  async function Q() {
    return (await se()).environments;
  }
  async function we(V) {
    try {
      return await o(`/v2/comfygit/environments/${encodeURIComponent(V)}`);
    } catch {
      return null;
    }
  }
  async function te(V, be) {
    const Ge = { target_env: V };
    return be && (Ge.workspace_path = be), o("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Ge)
    });
  }
  async function H() {
    try {
      return o("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function q(V) {
    return o("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(V)
    });
  }
  async function _e() {
    return o("/v2/workspace/environments/create_status");
  }
  async function ee(V = 100) {
    return o(`/v2/workspace/comfyui_releases?limit=${V}`);
  }
  async function me(V) {
    return o(`/v2/workspace/environments/${V}`, {
      method: "DELETE"
    });
  }
  async function z(V = !1) {
    try {
      return o(V ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const be = await p(V), Ge = [];
      return be.workflows.new.forEach((mt) => {
        Ge.push({
          name: mt,
          status: "new",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: mt
        });
      }), be.workflows.modified.forEach((mt) => {
        Ge.push({
          name: mt,
          status: "modified",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: mt
        });
      }), be.workflows.synced.forEach((mt) => {
        Ge.push({
          name: mt,
          status: "synced",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: mt
        });
      }), Ge;
    }
  }
  async function ae(V) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(V)}/details`);
  }
  async function Se(V) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(V)}/contract`);
  }
  async function pe(V, be) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(V)}/contract`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(be)
    });
  }
  async function Ne(V) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(V)}/contract`, {
      method: "DELETE"
    });
  }
  async function ze(V) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(V)}/resolve`, {
      method: "POST"
    });
  }
  async function Ae(V, be, Ge) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(V)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: be, install_models: Ge })
    });
  }
  async function re(V, be, Ge) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(V)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: be, importance: Ge })
    });
  }
  async function oe() {
    try {
      return o("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function Le() {
    try {
      return o("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function fe(V) {
    return o(`/v2/workspace/models/details/${encodeURIComponent(V)}`);
  }
  async function le(V) {
    return o(`/v2/workspace/models/${encodeURIComponent(V)}/source-candidates`);
  }
  async function E(V) {
    return o(`/v2/workspace/models/${encodeURIComponent(V)}/hashes`, {
      method: "POST"
    });
  }
  async function A() {
    return o("/v2/workspace/models/workflow-source-candidates");
  }
  async function ce(V) {
    return o("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: V })
    });
  }
  async function $e(V, be) {
    return o(`/v2/workspace/models/${V}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: be })
    });
  }
  async function Te(V, be) {
    return o(`/v2/workspace/models/${V}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: be })
    });
  }
  async function xe(V) {
    return o(`/v2/workspace/models/${V}`, {
      method: "DELETE"
    });
  }
  async function Z(V) {
    return o("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(V)
    });
  }
  async function G() {
    return o("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function ve() {
    return o("/v2/workspace/models/directory");
  }
  async function ge(V) {
    return o("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: V })
    });
  }
  async function He(V) {
    const be = new URLSearchParams({ url: V });
    return o(`/v2/workspace/huggingface/repo-info?${be}`);
  }
  async function We() {
    return o("/v2/workspace/models/subdirectories");
  }
  async function ke(V, be = 10) {
    const Ge = new URLSearchParams({ query: V, limit: String(be) });
    return o(`/v2/workspace/huggingface/search?${Ge}`);
  }
  async function X(V) {
    try {
      const be = V ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(V)}` : "/v2/comfygit/config";
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
  async function Fe(V, be) {
    const Ge = be ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(be)}` : "/v2/comfygit/config";
    return o(Ge, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(V)
    });
  }
  async function De(V, be) {
    try {
      const Ge = new URLSearchParams();
      return V && Ge.append("level", V), be && Ge.append("lines", be.toString()), o(`/v2/comfygit/debug/logs?${Ge}`);
    } catch {
      return [];
    }
  }
  async function qe(V, be) {
    try {
      const Ge = new URLSearchParams();
      return V && Ge.append("level", V), be && Ge.append("lines", be.toString()), o(`/v2/workspace/debug/logs?${Ge}`);
    } catch {
      return [];
    }
  }
  async function Ve() {
    return o("/v2/comfygit/debug/logs/path");
  }
  async function Ue() {
    return o("/v2/comfygit/debug/manifest");
  }
  async function Qe() {
    return o("/v2/workspace/debug/logs/path");
  }
  async function gt(V, be) {
    try {
      const Ge = new URLSearchParams();
      return V && Ge.append("level", V), be && Ge.append("lines", be.toString()), o(`/v2/workspace/debug/orchestrator-logs?${Ge}`);
    } catch {
      return [];
    }
  }
  async function Y() {
    return o("/v2/workspace/debug/orchestrator-logs/path");
  }
  async function he(V) {
    return o("/v2/workspace/open-file", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: V })
    });
  }
  async function T() {
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
  async function N(V) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(V)}/track-dev`, {
      method: "POST"
    });
  }
  async function J(V) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(V)}/install`, {
      method: "POST"
    });
  }
  async function Ee(V, be) {
    const Ge = hm(), mt = gm(), Tt = {
      id: V.id,
      version: V.version || V.selected_version || "latest",
      selected_version: V.selected_version || "latest",
      mode: V.mode || "remote",
      channel: V.channel || "default"
    };
    return V.install_source && (Tt.install_source = V.install_source), V.install_source === "git" && V.repository && (Tt.repository = V.repository), await o("/v2/manager/queue/task", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        kind: "install",
        params: Tt,
        ui_id: Ge,
        client_id: mt
      })
    }), console.log("[ComfyGit] Task queued with ui_id:", Ge, "for package:", V.id), be != null && be.beforeQueueStart && await be.beforeQueueStart(Ge), await o("/v2/manager/queue/start", {
      method: "POST"
    }), { ui_id: Ge };
  }
  async function Re(V) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(V)}/update`, {
      method: "POST"
    });
  }
  async function Je(V, be) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(V)}/criticality`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ criticality: be })
    });
  }
  async function Pe(V) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(V)}`, {
      method: "DELETE"
    });
  }
  async function Ye() {
    try {
      return o("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function ot(V, be) {
    return o("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: V, url: be })
    });
  }
  async function xt(V) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(V)}`, {
      method: "DELETE"
    });
  }
  async function zt(V, be, Ge) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(V)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: be, push_url: Ge })
    });
  }
  async function ne(V, be) {
    const Ge = {};
    return be && (Ge["X-Git-Auth-Token"] = be), o(`/v2/comfygit/remotes/${encodeURIComponent(V)}/fetch`, {
      method: "POST",
      headers: Ge
    });
  }
  async function U(V) {
    try {
      return o(`/v2/comfygit/remotes/${encodeURIComponent(V)}/status`);
    } catch {
      return null;
    }
  }
  async function de(V = "skip", be = !0) {
    return o("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: V,
        remove_extra_nodes: be
      })
    });
  }
  async function je(V, be) {
    const Ge = be ? `/v2/comfygit/remotes/${encodeURIComponent(V)}/pull-preview?branch=${encodeURIComponent(be)}` : `/v2/comfygit/remotes/${encodeURIComponent(V)}/pull-preview`;
    return o(Ge);
  }
  async function ut(V, be = {}) {
    const Ge = { "Content-Type": "application/json" };
    return be.authToken && (Ge["X-Git-Auth-Token"] = be.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(V)}/pull`, {
      method: "POST",
      headers: Ge,
      body: JSON.stringify({
        model_strategy: be.modelStrategy || "skip",
        force: be.force || !1,
        resolutions: be.resolutions
      })
    });
  }
  async function St(V, be) {
    const Ge = be ? `/v2/comfygit/remotes/${encodeURIComponent(V)}/push-preview?branch=${encodeURIComponent(be)}` : `/v2/comfygit/remotes/${encodeURIComponent(V)}/push-preview`;
    return o(Ge);
  }
  async function lt(V, be = {}) {
    const Ge = { "Content-Type": "application/json" };
    return be.authToken && (Ge["X-Git-Auth-Token"] = be.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(V)}/push`, {
      method: "POST",
      headers: Ge,
      body: JSON.stringify({ force: be.force || !1 })
    });
  }
  async function It(V, be) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(V)}/validate-merge`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resolutions: be })
    });
  }
  async function Ss(V) {
    const be = {
      success: 0,
      failed: []
    };
    for (const Ge of V)
      try {
        await ze(Ge), be.success++;
      } catch (mt) {
        be.failed.push({
          name: Ge,
          error: mt instanceof Error ? mt.message : "Unknown error"
        });
      }
    return be;
  }
  async function Is(V) {
    const be = new FormData();
    be.append("file", V);
    const Ge = await Hs("/v2/workspace/import/preview", {
      method: "POST",
      body: be
      // Don't set Content-Type - browser will set multipart boundary automatically
    });
    if (!Ge.ok) {
      const mt = await Ge.json().catch(() => ({}));
      throw new Error(mt.error || `Preview failed: ${Ge.status}`);
    }
    return Ge.json();
  }
  async function Qs(V) {
    return o(
      `/v2/workspace/environments/validate?name=${encodeURIComponent(V)}`
    );
  }
  async function da(V, be, Ge, mt) {
    const Tt = new FormData();
    Tt.append("file", V), Tt.append("name", be), Tt.append("model_strategy", Ge), Tt.append("torch_backend", mt);
    const vs = await Hs("/v2/workspace/import", {
      method: "POST",
      body: Tt
    });
    if (!vs.ok) {
      const et = await vs.json().catch(() => ({}));
      throw new Error(et.message || et.error || `Import failed: ${vs.status}`);
    }
    return vs.json();
  }
  async function ma() {
    return o("/v2/workspace/import/status");
  }
  async function zs(V) {
    return o("/v2/workspace/import/preview/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ git_url: V })
    });
  }
  async function fa(V, be, Ge, mt) {
    return o("/v2/workspace/import/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        git_url: V,
        name: be,
        model_strategy: Ge,
        torch_backend: mt
      })
    });
  }
  async function uo() {
    return o("/v2/setup/status");
  }
  async function mo() {
    return o("/v2/comfygit/update-check");
  }
  async function va() {
    return o("/v2/comfygit/update", { method: "POST" });
  }
  async function Es(V) {
    return o("/v2/setup/initialize_workspace", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(V)
    });
  }
  async function pa() {
    return o("/v2/setup/initialize_status");
  }
  async function No(V) {
    return o("/v2/setup/validate_path", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(V)
    });
  }
  async function ga() {
    return o("/v2/comfygit/deploy/summary");
  }
  async function ha() {
    return o("/v2/comfygit/deploy/runpod/data-centers");
  }
  async function ya(V, be) {
    return o("/v2/comfygit/deploy/runpod/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ api_key: V, save_key: be })
    });
  }
  async function wa() {
    return o("/v2/comfygit/deploy/runpod/volumes");
  }
  async function wn(V) {
    const be = V ? `/v2/comfygit/deploy/runpod/gpu-types?data_center_id=${encodeURIComponent(V)}` : "/v2/comfygit/deploy/runpod/gpu-types";
    return o(be);
  }
  async function _a(V) {
    return o("/v2/comfygit/deploy/runpod", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(V)
    });
  }
  async function ka() {
    return o("/v2/comfygit/deploy/runpod/pods");
  }
  async function ba(V) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(V)}`, {
      method: "DELETE"
    });
  }
  async function $a(V) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(V)}/stop`, {
      method: "POST"
    });
  }
  async function Ca(V) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(V)}/start`, {
      method: "POST"
    });
  }
  async function xa(V) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(V)}/status`);
  }
  async function Sa(V) {
    return o("/v2/comfygit/deploy/package", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: V })
    });
  }
  async function Ia(V = !1) {
    return o(V ? "/v2/comfygit/deploy/runpod/key?verify=true" : "/v2/comfygit/deploy/runpod/key");
  }
  async function _n() {
    return o("/v2/comfygit/deploy/runpod/key", {
      method: "DELETE"
    });
  }
  async function Ea() {
    return o("/v2/comfygit/deploy/custom/workers");
  }
  async function Ta(V) {
    return o("/v2/comfygit/deploy/custom/workers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(V)
    });
  }
  async function kn(V) {
    return o(`/v2/comfygit/deploy/custom/workers/${encodeURIComponent(V)}`, {
      method: "DELETE"
    });
  }
  async function ie(V) {
    return o("/v2/comfygit/deploy/custom/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(V)
    });
  }
  async function j() {
    return o("/v2/comfygit/deploy/custom/scan", {
      method: "POST"
    });
  }
  async function Ke(V) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(V)}/info`);
  }
  async function Ze(V) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(V)}/instances`);
  }
  async function dt(V, be) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(V)}/instances`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(be)
    });
  }
  async function yt(V, be) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(V)}/instances/${encodeURIComponent(be)}/start`, {
      method: "POST"
    });
  }
  async function Dt(V, be) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(V)}/instances/${encodeURIComponent(be)}/stop`, {
      method: "POST"
    });
  }
  async function ts(V, be) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(V)}/instances/${encodeURIComponent(be)}`, {
      method: "DELETE"
    });
  }
  async function Oo(V) {
    return o("/v2/comfygit/deploy/test-git-auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: V })
    });
  }
  return {
    isLoading: e,
    error: t,
    getStatus: p,
    commit: w,
    getHistory: g,
    getBranchHistory: _,
    exportEnv: C,
    validateExport: $,
    validateDeploy: x,
    exportEnvWithForce: I,
    validateEnvironmentExport: M,
    exportEnvironmentWithForce: P,
    // Git Operations
    getBranches: O,
    getCommitDetail: F,
    checkout: W,
    createBranch: D,
    switchBranch: K,
    deleteBranch: ue,
    // Environment Management
    listEnvironments: se,
    getEnvironments: Q,
    getEnvironmentDetails: we,
    switchEnvironment: te,
    getSwitchProgress: H,
    createEnvironment: q,
    getCreateProgress: _e,
    getComfyUIReleases: ee,
    deleteEnvironment: me,
    // Workflow Management
    getWorkflows: z,
    getWorkflowDetails: ae,
    getWorkflowContract: Se,
    saveWorkflowContract: pe,
    deleteWorkflowContract: Ne,
    resolveWorkflow: ze,
    installWorkflowDeps: Ae,
    setModelImportance: re,
    // Model Management
    getEnvironmentModels: oe,
    getWorkspaceModels: Le,
    getModelDetails: fe,
    getModelSourceCandidates: le,
    computeModelHashes: E,
    getWorkflowSourceCandidates: A,
    openFileLocation: ce,
    addModelSource: $e,
    removeModelSource: Te,
    deleteModel: xe,
    downloadModel: Z,
    scanWorkspaceModels: G,
    getModelsDirectory: ve,
    setModelsDirectory: ge,
    getHuggingFaceRepoInfo: He,
    getModelsSubdirectories: We,
    searchHuggingFaceRepos: ke,
    // Settings
    getConfig: X,
    updateConfig: Fe,
    // Cloud Auth
    getCloudAuthConfig: n,
    loginToCloud: l,
    signupToCloud: r,
    getCloudMe: u,
    logoutFromCloud: c,
    getCloudEnvironments: d,
    getCloudEnvironmentRevisions: v,
    publishCurrentEnvironmentToCloud: f,
    // Debug/Logs
    getEnvironmentLogs: De,
    getEnvironmentManifest: Ue,
    getWorkspaceLogs: qe,
    getEnvironmentLogPath: Ve,
    getWorkspaceLogPath: Qe,
    getOrchestratorLogs: gt,
    getOrchestratorLogPath: Y,
    openFile: he,
    // Node Management
    getNodes: T,
    trackNodeAsDev: N,
    installNode: J,
    queueNodeInstall: Ee,
    updateNode: Re,
    updateNodeCriticality: Je,
    uninstallNode: Pe,
    // Git Remotes
    getRemotes: Ye,
    addRemote: ot,
    removeRemote: xt,
    updateRemoteUrl: zt,
    fetchRemote: ne,
    getRemoteSyncStatus: U,
    // Push/Pull
    getPullPreview: je,
    pullFromRemote: ut,
    getPushPreview: St,
    pushToRemote: lt,
    validateMerge: It,
    // Environment Sync
    syncEnvironmentManually: de,
    // Workflow Repair
    repairWorkflowModels: Ss,
    // Import Operations
    previewTarballImport: Is,
    previewGitImport: zs,
    validateEnvironmentName: Qs,
    executeImport: da,
    executeGitImport: fa,
    getImportProgress: ma,
    // First-Time Setup
    getSetupStatus: uo,
    // Manager Update Notice
    getUpdateCheck: mo,
    updateManager: va,
    initializeWorkspace: Es,
    getInitializeProgress: pa,
    validatePath: No,
    // Deploy Operations
    getDeploySummary: ga,
    getDataCenters: ha,
    testRunPodConnection: ya,
    getNetworkVolumes: wa,
    getRunPodGpuTypes: wn,
    deployToRunPod: _a,
    getRunPodPods: ka,
    terminateRunPodPod: ba,
    stopRunPodPod: $a,
    startRunPodPod: Ca,
    getDeploymentStatus: xa,
    exportDeployPackage: Sa,
    getStoredRunPodKey: Ia,
    clearRunPodKey: _n,
    // Custom Worker Operations
    getCustomWorkers: Ea,
    addCustomWorker: Ta,
    removeCustomWorker: kn,
    testWorkerConnection: ie,
    scanForWorkers: j,
    getWorkerSystemInfo: Ke,
    getWorkerInstances: Ze,
    deployToWorker: dt,
    startWorkerInstance: yt,
    stopWorkerInstance: Dt,
    terminateWorkerInstance: ts,
    // Git Authentication
    testGitAuth: Oo
  };
}
const ym = { class: "panel-layout" }, wm = {
  key: 0,
  class: "panel-layout-header"
}, _m = {
  key: 1,
  class: "panel-layout-search"
}, km = { class: "panel-layout-content" }, bm = {
  key: 2,
  class: "panel-layout-footer"
}, $m = /* @__PURE__ */ Ce({
  __name: "PanelLayout",
  setup(e) {
    return (t, o) => (a(), i("div", ym, [
      t.$slots.header ? (a(), i("div", wm, [
        nt(t.$slots, "header", {}, void 0)
      ])) : y("", !0),
      t.$slots.search ? (a(), i("div", _m, [
        nt(t.$slots, "search", {}, void 0)
      ])) : y("", !0),
      s("div", km, [
        nt(t.$slots, "content", {}, void 0)
      ]),
      t.$slots.footer ? (a(), i("div", bm, [
        nt(t.$slots, "footer", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), Ie = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [n, l] of t)
    o[n] = l;
  return o;
}, Ut = /* @__PURE__ */ Ie($m, [["__scopeId", "data-v-21565df9"]]), Cm = {
  key: 0,
  class: "panel-title-prefix"
}, xm = {
  key: 1,
  class: "panel-title-prefix-theme"
}, Sm = /* @__PURE__ */ Ce({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(e) {
    return (t, o) => (a(), L(kl(`h${e.level}`), {
      class: Be(["panel-title", e.variant])
    }, {
      default: h(() => [
        e.showPrefix ? (a(), i("span", Cm, m(e.prefix), 1)) : (a(), i("span", xm)),
        nt(t.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Im = /* @__PURE__ */ Ie(Sm, [["__scopeId", "data-v-c3875efc"]]), Em = ["title"], Tm = ["width", "height"], Mm = /* @__PURE__ */ Ce({
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
      ])], 8, Tm))
    ], 8, Em));
  }
}), ec = /* @__PURE__ */ Ie(Mm, [["__scopeId", "data-v-6fc7f16d"]]), Pm = { class: "header-left" }, Rm = {
  key: 0,
  class: "header-actions"
}, Lm = /* @__PURE__ */ Ce({
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
      class: Be(["panel-header", { stacked: e.stacked }])
    }, [
      s("div", Pm, [
        b(Im, { "show-prefix": e.showPrefix }, {
          default: h(() => [
            S(m(e.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        e.showInfo ? (a(), L(ec, {
          key: 0,
          onClick: o[0] || (o[0] = (n) => t.$emit("info-click"))
        })) : y("", !0)
      ]),
      t.$slots.actions ? (a(), i("div", Rm, [
        nt(t.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), At = /* @__PURE__ */ Ie(Lm, [["__scopeId", "data-v-55a62cd6"]]), Dm = {
  key: 0,
  class: "section-title-count"
}, Nm = {
  key: 1,
  class: "section-title-icon"
}, Om = /* @__PURE__ */ Ce({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e) {
    return (t, o) => (a(), L(kl(`h${e.level}`), {
      class: Be(["section-title", { clickable: e.clickable }]),
      onClick: o[0] || (o[0] = (n) => e.clickable && t.$emit("click"))
    }, {
      default: h(() => [
        nt(t.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (a(), i("span", Dm, "(" + m(e.count) + ")", 1)) : y("", !0),
        e.clickable ? (a(), i("span", Nm, m(e.expanded ? "▼" : "▸"), 1)) : y("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), os = /* @__PURE__ */ Ie(Om, [["__scopeId", "data-v-559361eb"]]), Um = { class: "status-grid" }, Am = { class: "status-grid__columns" }, zm = { class: "status-grid__column" }, Fm = { class: "status-grid__title" }, Vm = { class: "status-grid__column status-grid__column--right" }, Bm = { class: "status-grid__title" }, Wm = {
  key: 0,
  class: "status-grid__footer"
}, Gm = /* @__PURE__ */ Ce({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(e) {
    return (t, o) => (a(), i("div", Um, [
      s("div", Am, [
        s("div", zm, [
          s("h4", Fm, m(e.leftTitle), 1),
          nt(t.$slots, "left", {}, void 0)
        ]),
        s("div", Vm, [
          s("h4", Bm, m(e.rightTitle), 1),
          nt(t.$slots, "right", {}, void 0)
        ])
      ]),
      t.$slots.footer ? (a(), i("div", Wm, [
        nt(t.$slots, "footer", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), jm = /* @__PURE__ */ Ie(Gm, [["__scopeId", "data-v-73b7ba3f"]]), Hm = {
  key: 0,
  class: "status-item__icon"
}, qm = {
  key: 1,
  class: "status-item__count"
}, Km = { class: "status-item__label" }, Jm = /* @__PURE__ */ Ce({
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
      class: Be(["status-item", o.value, { "is-separator": e.separator }])
    }, [
      e.icon ? (a(), i("span", Hm, m(e.icon), 1)) : y("", !0),
      e.count !== void 0 ? (a(), i("span", qm, m(e.count), 1)) : y("", !0),
      s("span", Km, m(e.label), 1)
    ], 2));
  }
}), gs = /* @__PURE__ */ Ie(Jm, [["__scopeId", "data-v-6f929183"]]), Qm = { class: "issue-card__header" }, Ym = { class: "issue-card__icon" }, Xm = { class: "issue-card__title" }, Zm = {
  key: 0,
  class: "issue-card__content"
}, ef = {
  key: 0,
  class: "issue-card__description"
}, tf = {
  key: 1,
  class: "issue-card__items"
}, sf = {
  key: 2,
  class: "issue-card__actions"
}, of = /* @__PURE__ */ Ce({
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
      class: Be(["issue-card", o.value])
    }, [
      s("div", Qm, [
        s("span", Ym, m(e.icon), 1),
        s("h4", Xm, m(e.title), 1)
      ]),
      n.$slots.default || e.description ? (a(), i("div", Zm, [
        e.description ? (a(), i("p", ef, m(e.description), 1)) : y("", !0),
        nt(n.$slots, "default", {}, void 0)
      ])) : y("", !0),
      e.items && e.items.length ? (a(), i("div", tf, [
        (a(!0), i(B, null, ye(e.items, (r, u) => (a(), i("div", {
          key: u,
          class: "issue-card__item"
        }, [
          l[0] || (l[0] = s("span", { class: "issue-card__bullet" }, "•", -1)),
          s("span", null, m(r), 1)
        ]))), 128))
      ])) : y("", !0),
      n.$slots.actions ? (a(), i("div", sf, [
        nt(n.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Xt = /* @__PURE__ */ Ie(of, [["__scopeId", "data-v-df6aa348"]]), nf = ["type", "disabled"], af = {
  key: 0,
  class: "spinner"
}, lf = /* @__PURE__ */ Ce({
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
      class: Be(["action-btn", e.variant, e.size, { loading: e.loading }]),
      onClick: o[0] || (o[0] = (n) => t.$emit("click", n))
    }, [
      e.loading ? (a(), i("span", af)) : y("", !0),
      e.loading ? y("", !0) : nt(t.$slots, "default", { key: 1 }, void 0)
    ], 10, nf));
  }
}), Me = /* @__PURE__ */ Ie(lf, [["__scopeId", "data-v-772abe47"]]), rf = /* @__PURE__ */ Ce({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(e) {
    return (t, o) => (a(), i("span", {
      class: Be(["detail-label"]),
      style: Lt({ minWidth: e.minWidth })
    }, [
      nt(t.$slots, "default", {}, void 0)
    ], 4));
  }
}), On = /* @__PURE__ */ Ie(rf, [["__scopeId", "data-v-75e9eeb8"]]), cf = /* @__PURE__ */ Ce({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (t, o) => (a(), i("span", {
      class: Be(["detail-value", e.variant, { mono: e.mono, truncate: e.truncate }])
    }, [
      nt(t.$slots, "default", {}, void 0)
    ], 2));
  }
}), sl = /* @__PURE__ */ Ie(cf, [["__scopeId", "data-v-2f186e4c"]]), uf = { class: "detail-row" }, df = /* @__PURE__ */ Ce({
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
    return (t, o) => (a(), i("div", uf, [
      b(On, { "min-width": e.labelMinWidth }, {
        default: h(() => [
          S(m(e.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      e.value ? (a(), L(sl, {
        key: 0,
        mono: e.mono,
        variant: e.valueVariant,
        truncate: e.truncate
      }, {
        default: h(() => [
          S(m(e.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : nt(t.$slots, "value", { key: 1 }, void 0)
    ]));
  }
}), kt = /* @__PURE__ */ Ie(df, [["__scopeId", "data-v-ef15664a"]]), mf = { class: "modal-header" }, ff = { class: "modal-body" }, vf = { class: "status-section" }, pf = {
  key: 0,
  class: "status-section"
}, gf = { class: "section-header-row" }, hf = {
  key: 0,
  class: "workflow-group"
}, yf = { class: "workflow-group-header" }, wf = { class: "workflow-group-title" }, _f = { class: "workflow-list" }, kf = { class: "workflow-name" }, bf = { class: "workflow-issue" }, $f = {
  key: 1,
  class: "workflow-group"
}, Cf = { class: "workflow-group-header" }, xf = { class: "workflow-group-title" }, Sf = { class: "workflow-list" }, If = { class: "workflow-name" }, Ef = { class: "workflow-issue" }, Tf = {
  key: 2,
  class: "workflow-group"
}, Mf = { class: "workflow-group-header" }, Pf = { class: "workflow-group-title" }, Rf = { class: "workflow-list" }, Lf = { class: "workflow-name" }, Df = {
  key: 3,
  class: "workflow-group"
}, Nf = { class: "workflow-group-header" }, Of = { class: "workflow-group-title" }, Uf = { class: "workflow-list" }, Af = { class: "workflow-name" }, zf = {
  key: 4,
  class: "workflow-group"
}, Ff = { class: "workflow-group-header" }, Vf = { class: "workflow-group-title" }, Bf = { class: "workflow-list" }, Wf = { class: "workflow-name" }, Gf = {
  key: 5,
  class: "workflow-group"
}, jf = { class: "workflow-group-title" }, Hf = { class: "expand-icon" }, qf = {
  key: 0,
  class: "workflow-list"
}, Kf = { class: "workflow-name" }, Jf = {
  key: 1,
  class: "status-section"
}, Qf = {
  key: 0,
  class: "change-group"
}, Yf = { class: "change-group-header" }, Xf = { class: "change-group-title" }, Zf = { class: "change-list" }, ev = { class: "node-name" }, tv = {
  key: 0,
  class: "dev-badge"
}, sv = {
  key: 1,
  class: "change-group"
}, ov = { class: "change-group-header" }, nv = { class: "change-group-title" }, av = { class: "change-list" }, lv = { class: "node-name" }, iv = {
  key: 0,
  class: "dev-badge"
}, rv = {
  key: 2,
  class: "change-group"
}, cv = { class: "change-list" }, uv = { class: "change-item" }, dv = { class: "node-name" }, mv = {
  key: 3,
  class: "change-group"
}, fv = {
  key: 2,
  class: "status-section"
}, vv = { class: "section-header-row" }, pv = {
  key: 0,
  class: "drift-item"
}, gv = { class: "drift-list" }, hv = {
  key: 0,
  class: "drift-list-more"
}, yv = {
  key: 1,
  class: "drift-item"
}, wv = { class: "drift-list" }, _v = {
  key: 0,
  class: "drift-list-more"
}, kv = {
  key: 2,
  class: "drift-item"
}, bv = { class: "drift-list" }, $v = { class: "version-actual" }, Cv = { class: "version-expected" }, xv = {
  key: 0,
  class: "drift-list-more"
}, Sv = {
  key: 3,
  class: "drift-item"
}, Iv = { class: "repair-action" }, Ev = {
  key: 3,
  class: "status-section"
}, Tv = { class: "info-box" }, Mv = { class: "drift-list" }, Pv = {
  key: 0,
  class: "drift-list-more"
}, Rv = {
  key: 4,
  class: "status-section"
}, Lv = { class: "warning-box" }, Dv = {
  key: 5,
  class: "empty-state-inline"
}, Nv = { class: "modal-actions" }, Ov = /* @__PURE__ */ Ce({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {},
    isRepairing: { type: Boolean }
  },
  emits: ["close", "navigate-workflows", "navigate-nodes", "repair"],
  setup(e) {
    const t = e, o = k(!1);
    at(() => {
      console.log("StatusDetailModal mounted, initial show value:", t.show);
    }), vt(() => t.show, (w, g) => {
      console.log("StatusDetailModal show prop changed from", g, "to", w);
    }, { immediate: !0 });
    const n = R(() => {
      var w, g, _;
      return ((_ = (g = (w = t.status) == null ? void 0 : w.workflows) == null ? void 0 : g.analyzed) == null ? void 0 : _.filter(
        (C) => C.status === "broken" && C.sync_state === "synced"
      )) || [];
    }), l = R(() => {
      var w, g, _;
      return ((_ = (g = (w = t.status) == null ? void 0 : w.workflows) == null ? void 0 : g.analyzed) == null ? void 0 : _.filter(
        (C) => C.status === "broken" && C.sync_state !== "synced"
      )) || [];
    }), r = R(() => {
      var w, g, _;
      return ((_ = (g = (w = t.status) == null ? void 0 : w.workflows) == null ? void 0 : g.synced) == null ? void 0 : _.filter((C) => {
        var x, I, M;
        const $ = (M = (I = (x = t.status) == null ? void 0 : x.workflows) == null ? void 0 : I.analyzed) == null ? void 0 : M.find((P) => P.name === C);
        return !$ || $.status !== "broken";
      })) || [];
    }), u = R(() => {
      var w, g, _, C, $;
      return (w = t.status) != null && w.workflows ? (((g = t.status.workflows.new) == null ? void 0 : g.length) ?? 0) > 0 || (((_ = t.status.workflows.modified) == null ? void 0 : _.length) ?? 0) > 0 || (((C = t.status.workflows.deleted) == null ? void 0 : C.length) ?? 0) > 0 || ((($ = t.status.workflows.synced) == null ? void 0 : $.length) ?? 0) > 0 : !1;
    }), c = R(() => {
      var g, _, C;
      const w = (g = t.status) == null ? void 0 : g.git_changes;
      return w ? (((_ = w.nodes_added) == null ? void 0 : _.length) ?? 0) > 0 || (((C = w.nodes_removed) == null ? void 0 : C.length) ?? 0) > 0 || w.workflow_changes || w.has_other_changes : !1;
    }), d = R(() => {
      var w, g, _, C, $, x;
      return !u.value && !c.value && ((g = (w = t.status) == null ? void 0 : w.comparison) == null ? void 0 : g.is_synced) && (((_ = t.status) == null ? void 0 : _.missing_models_count) ?? 0) === 0 && (((x = ($ = (C = t.status) == null ? void 0 : C.comparison) == null ? void 0 : $.disabled_nodes) == null ? void 0 : x.length) ?? 0) === 0;
    }), v = R(() => {
      var g, _;
      const w = (_ = (g = t.status) == null ? void 0 : g.git_changes) == null ? void 0 : _.workflow_changes;
      return w ? typeof w == "number" ? w : Object.keys(w).length : 0;
    });
    function f(w) {
      return typeof w == "string" ? w : w.name;
    }
    function p(w) {
      return typeof w == "object" && w.is_development === !0;
    }
    return (w, g) => {
      var _, C, $, x, I, M, P, O, F, W, D, K, ue, se, Q, we, te, H, q, _e, ee, me;
      return a(), L(Jt, { to: "body" }, [
        e.show ? (a(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: g[7] || (g[7] = (z) => w.$emit("close"))
        }, [
          s("div", {
            class: "modal-content",
            onClick: g[6] || (g[6] = pt(() => {
            }, ["stop"]))
          }, [
            s("div", mf, [
              g[8] || (g[8] = s("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              s("button", {
                class: "modal-close",
                onClick: g[0] || (g[0] = (z) => w.$emit("close"))
              }, "✕")
            ]),
            s("div", ff, [
              s("div", vf, [
                b(os, { level: "4" }, {
                  default: h(() => [...g[9] || (g[9] = [
                    S("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                b(kt, {
                  label: "Current Branch:",
                  value: e.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              u.value ? (a(), i("div", pf, [
                s("div", gf, [
                  b(os, { level: "4" }, {
                    default: h(() => [...g[10] || (g[10] = [
                      S("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  s("button", {
                    class: "link-btn",
                    onClick: g[1] || (g[1] = (z) => w.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                n.value.length ? (a(), i("div", hf, [
                  s("div", yf, [
                    g[11] || (g[11] = s("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    s("span", wf, "BROKEN (COMMITTED) (" + m(n.value.length) + ")", 1)
                  ]),
                  s("div", _f, [
                    (a(!0), i(B, null, ye(n.value, (z) => (a(), i("div", {
                      key: z.name,
                      class: "workflow-item"
                    }, [
                      s("span", kf, m(z.name), 1),
                      s("span", bf, m(z.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                l.value.length ? (a(), i("div", $f, [
                  s("div", Cf, [
                    g[12] || (g[12] = s("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    s("span", xf, "BROKEN (UNCOMMITTED) (" + m(l.value.length) + ")", 1)
                  ]),
                  s("div", Sf, [
                    (a(!0), i(B, null, ye(l.value, (z) => (a(), i("div", {
                      key: z.name,
                      class: "workflow-item"
                    }, [
                      s("span", If, m(z.name), 1),
                      s("span", Ef, m(z.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (C = (_ = e.status.workflows) == null ? void 0 : _.new) != null && C.length ? (a(), i("div", Tf, [
                  s("div", Mf, [
                    g[13] || (g[13] = s("span", { class: "workflow-status-icon new" }, "●", -1)),
                    s("span", Pf, "NEW (" + m(e.status.workflows.new.length) + ")", 1)
                  ]),
                  s("div", Rf, [
                    (a(!0), i(B, null, ye(e.status.workflows.new, (z) => (a(), i("div", {
                      key: z,
                      class: "workflow-item"
                    }, [
                      s("span", Lf, m(z), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (x = ($ = e.status.workflows) == null ? void 0 : $.modified) != null && x.length ? (a(), i("div", Df, [
                  s("div", Nf, [
                    g[14] || (g[14] = s("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    s("span", Of, "MODIFIED (" + m(e.status.workflows.modified.length) + ")", 1)
                  ]),
                  s("div", Uf, [
                    (a(!0), i(B, null, ye(e.status.workflows.modified, (z) => (a(), i("div", {
                      key: z,
                      class: "workflow-item"
                    }, [
                      s("span", Af, m(z), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (M = (I = e.status.workflows) == null ? void 0 : I.deleted) != null && M.length ? (a(), i("div", zf, [
                  s("div", Ff, [
                    g[15] || (g[15] = s("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    s("span", Vf, "DELETED (" + m(e.status.workflows.deleted.length) + ")", 1)
                  ]),
                  s("div", Bf, [
                    (a(!0), i(B, null, ye(e.status.workflows.deleted, (z) => (a(), i("div", {
                      key: z,
                      class: "workflow-item"
                    }, [
                      s("span", Wf, m(z), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                r.value.length ? (a(), i("div", Gf, [
                  s("div", {
                    class: "workflow-group-header clickable",
                    onClick: g[2] || (g[2] = (z) => o.value = !o.value)
                  }, [
                    g[16] || (g[16] = s("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    s("span", jf, "SYNCED (" + m(r.value.length) + ")", 1),
                    s("span", Hf, m(o.value ? "▼" : "▶"), 1)
                  ]),
                  o.value ? (a(), i("div", qf, [
                    (a(!0), i(B, null, ye(r.value, (z) => (a(), i("div", {
                      key: z,
                      class: "workflow-item"
                    }, [
                      s("span", Kf, m(z), 1)
                    ]))), 128))
                  ])) : y("", !0)
                ])) : y("", !0)
              ])) : y("", !0),
              c.value ? (a(), i("div", Jf, [
                b(os, { level: "4" }, {
                  default: h(() => [...g[17] || (g[17] = [
                    S("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (O = (P = e.status.git_changes) == null ? void 0 : P.nodes_added) != null && O.length ? (a(), i("div", Qf, [
                  s("div", Yf, [
                    g[18] || (g[18] = s("span", { class: "change-icon add" }, "+", -1)),
                    s("span", Xf, "NODES ADDED (" + m(e.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  s("div", Zf, [
                    (a(!0), i(B, null, ye(e.status.git_changes.nodes_added, (z) => (a(), i("div", {
                      key: f(z),
                      class: "change-item"
                    }, [
                      s("span", ev, m(f(z)), 1),
                      p(z) ? (a(), i("span", tv, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (W = (F = e.status.git_changes) == null ? void 0 : F.nodes_removed) != null && W.length ? (a(), i("div", sv, [
                  s("div", ov, [
                    g[19] || (g[19] = s("span", { class: "change-icon remove" }, "-", -1)),
                    s("span", nv, "NODES REMOVED (" + m(e.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  s("div", av, [
                    (a(!0), i(B, null, ye(e.status.git_changes.nodes_removed, (z) => (a(), i("div", {
                      key: f(z),
                      class: "change-item"
                    }, [
                      s("span", lv, m(f(z)), 1),
                      p(z) ? (a(), i("span", iv, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (D = e.status.git_changes) != null && D.workflow_changes ? (a(), i("div", rv, [
                  g[20] || (g[20] = s("div", { class: "change-group-header" }, [
                    s("span", { class: "change-icon modified" }, "~"),
                    s("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  s("div", cv, [
                    s("div", uv, [
                      s("span", dv, m(v.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : y("", !0),
                (K = e.status.git_changes) != null && K.has_other_changes ? (a(), i("div", mv, [...g[21] || (g[21] = [
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
              (ue = e.status.comparison) != null && ue.is_synced ? y("", !0) : (a(), i("div", fv, [
                s("div", vv, [
                  b(os, { level: "4" }, {
                    default: h(() => [...g[22] || (g[22] = [
                      S("ENVIRONMENT DRIFT", -1)
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
                (Q = (se = e.status.comparison) == null ? void 0 : se.missing_nodes) != null && Q.length ? (a(), i("div", pv, [
                  b(kt, {
                    label: "Missing Nodes:",
                    value: `${e.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  s("div", gv, [
                    (a(!0), i(B, null, ye(e.status.comparison.missing_nodes.slice(0, 10), (z) => (a(), i("div", {
                      key: z,
                      class: "drift-list-item"
                    }, " - " + m(z), 1))), 128)),
                    e.status.comparison.missing_nodes.length > 10 ? (a(), i("div", hv, " ... and " + m(e.status.comparison.missing_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (te = (we = e.status.comparison) == null ? void 0 : we.extra_nodes) != null && te.length ? (a(), i("div", yv, [
                  b(kt, {
                    label: "Extra Nodes:",
                    value: `${e.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  s("div", wv, [
                    (a(!0), i(B, null, ye(e.status.comparison.extra_nodes.slice(0, 10), (z) => (a(), i("div", {
                      key: z,
                      class: "drift-list-item"
                    }, " - " + m(z), 1))), 128)),
                    e.status.comparison.extra_nodes.length > 10 ? (a(), i("div", _v, " ... and " + m(e.status.comparison.extra_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (q = (H = e.status.comparison) == null ? void 0 : H.version_mismatches) != null && q.length ? (a(), i("div", kv, [
                  b(kt, {
                    label: "Version Mismatches:",
                    value: `${e.status.comparison.version_mismatches.length} node(s) have wrong versions`
                  }, null, 8, ["value"]),
                  s("div", bv, [
                    (a(!0), i(B, null, ye(e.status.comparison.version_mismatches.slice(0, 10), (z) => (a(), i("div", {
                      key: z.name,
                      class: "drift-list-item version-mismatch"
                    }, [
                      S(m(z.name) + ": ", 1),
                      s("span", $v, m(z.actual), 1),
                      g[23] || (g[23] = S(" → ", -1)),
                      s("span", Cv, m(z.expected), 1)
                    ]))), 128)),
                    e.status.comparison.version_mismatches.length > 10 ? (a(), i("div", xv, " ... and " + m(e.status.comparison.version_mismatches.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                ((_e = e.status.comparison) == null ? void 0 : _e.packages_in_sync) === !1 ? (a(), i("div", Sv, [
                  b(kt, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ])) : y("", !0),
                s("div", Iv, [
                  b(Me, {
                    variant: "warning",
                    loading: e.isRepairing,
                    onClick: g[4] || (g[4] = (z) => w.$emit("repair"))
                  }, {
                    default: h(() => [...g[24] || (g[24] = [
                      S(" Repair Environment ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"]),
                  g[25] || (g[25] = s("p", { class: "help-text" }, "Syncs environment to match pyproject.toml manifest", -1))
                ])
              ])),
              (me = (ee = e.status.comparison) == null ? void 0 : ee.disabled_nodes) != null && me.length ? (a(), i("div", Ev, [
                b(os, { level: "4" }, {
                  default: h(() => [...g[27] || (g[27] = [
                    S("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                s("div", Tv, [
                  g[28] || (g[28] = s("span", { class: "info-icon" }, "ℹ", -1)),
                  s("span", null, m(e.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                s("div", Mv, [
                  (a(!0), i(B, null, ye(e.status.comparison.disabled_nodes.slice(0, 10), (z) => (a(), i("div", {
                    key: z,
                    class: "drift-list-item"
                  }, " • " + m(z), 1))), 128)),
                  e.status.comparison.disabled_nodes.length > 10 ? (a(), i("div", Pv, " ... and " + m(e.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : y("", !0)
                ])
              ])) : y("", !0),
              (e.status.missing_models_count ?? 0) > 0 ? (a(), i("div", Rv, [
                b(os, { level: "4" }, {
                  default: h(() => [...g[29] || (g[29] = [
                    S("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                s("div", Lv, [
                  g[30] || (g[30] = s("span", { class: "warning-icon" }, "⚠", -1)),
                  s("span", null, m(e.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                g[31] || (g[31] = s("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : y("", !0),
              d.value ? (a(), i("div", Dv, [...g[32] || (g[32] = [
                s("div", { class: "empty-icon" }, "✅", -1),
                s("div", { class: "empty-message" }, [
                  s("strong", null, "Environment is clean!"),
                  s("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : y("", !0)
            ]),
            s("div", Nv, [
              b(Me, {
                variant: "secondary",
                onClick: g[5] || (g[5] = (z) => w.$emit("close"))
              }, {
                default: h(() => [...g[33] || (g[33] = [
                  S(" Close ", -1)
                ])]),
                _: 1
              })
            ])
          ])
        ])) : y("", !0)
      ]);
    };
  }
}), Uv = /* @__PURE__ */ Ie(Ov, [["__scopeId", "data-v-e2b37122"]]), Av = { class: "base-modal-header" }, zv = {
  key: 0,
  class: "base-modal-title"
}, Fv = { class: "base-modal-body" }, Vv = {
  key: 0,
  class: "base-modal-loading"
}, Bv = {
  key: 1,
  class: "base-modal-error"
}, Wv = {
  key: 0,
  class: "base-modal-footer"
}, Gv = /* @__PURE__ */ Ce({
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
    return at(() => {
      document.addEventListener("keydown", r), document.body.style.overflow = "hidden";
    }), Po(() => {
      document.removeEventListener("keydown", r), document.body.style.overflow = "";
    }), (u, c) => (a(), L(Jt, { to: "body" }, [
      s("div", {
        class: "base-modal-overlay",
        style: Lt({ zIndex: e.overlayZIndex }),
        onClick: l
      }, [
        s("div", {
          class: Be(["base-modal-content", e.size, { "fixed-height": e.fixedHeight }]),
          onClick: c[1] || (c[1] = pt(() => {
          }, ["stop"]))
        }, [
          s("div", Av, [
            nt(u.$slots, "header", {}, () => [
              e.title ? (a(), i("h3", zv, m(e.title), 1)) : y("", !0)
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
          s("div", Fv, [
            e.loading ? (a(), i("div", Vv, "Loading...")) : e.error ? (a(), i("div", Bv, m(e.error), 1)) : nt(u.$slots, "body", { key: 2 }, void 0)
          ]),
          u.$slots.footer ? (a(), i("div", Wv, [
            nt(u.$slots, "footer", {}, void 0)
          ])) : y("", !0)
        ], 2)
      ], 4)
    ]));
  }
}), $t = /* @__PURE__ */ Ie(Gv, [["__scopeId", "data-v-06a4be14"]]), jv = ["type", "disabled"], Hv = {
  key: 0,
  class: "spinner"
}, qv = /* @__PURE__ */ Ce({
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
      class: Be(["base-btn", e.variant, e.size, { "full-width": e.fullWidth, loading: e.loading }]),
      onClick: o[0] || (o[0] = (n) => t.$emit("click", n))
    }, [
      e.loading ? (a(), i("span", Hv)) : y("", !0),
      nt(t.$slots, "default", {}, void 0)
    ], 10, jv));
  }
}), Oe = /* @__PURE__ */ Ie(qv, [["__scopeId", "data-v-f3452606"]]), Kv = ["type", "value", "placeholder", "disabled"], Jv = {
  key: 0,
  class: "base-input-error"
}, Qv = /* @__PURE__ */ Ce({
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
      class: Be(["base-input-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      s("input", {
        type: e.type,
        value: e.modelValue,
        placeholder: e.placeholder,
        disabled: e.disabled,
        class: Be(["base-input", { error: !!e.error }]),
        onInput: o[0] || (o[0] = (n) => t.$emit("update:modelValue", n.target.value)),
        onKeyup: [
          o[1] || (o[1] = cs((n) => t.$emit("enter"), ["enter"])),
          o[2] || (o[2] = cs((n) => t.$emit("escape"), ["escape"]))
        ]
      }, null, 42, Kv),
      e.error ? (a(), i("span", Jv, m(e.error), 1)) : y("", !0)
    ], 2));
  }
}), bt = /* @__PURE__ */ Ie(Qv, [["__scopeId", "data-v-9ba02cdc"]]), Yv = ["disabled"], Xv = { class: "dropdown-value" }, Zv = ["onClick"], ep = {
  key: 0,
  class: "dropdown-error"
}, tp = /* @__PURE__ */ Ce({
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
    function d(x) {
      return typeof x == "string" ? x : x.value;
    }
    function v(x) {
      return typeof x == "string" ? x : x.label;
    }
    const f = R(() => {
      if (!o.modelValue && o.placeholder)
        return o.placeholder;
      const x = o.options.find((I) => d(I) === o.modelValue);
      return x ? v(x) : String(o.modelValue);
    });
    function p() {
      o.disabled || (l.value = !l.value);
    }
    function w() {
      l.value = !1;
    }
    function g(x) {
      n("update:modelValue", d(x)), w();
    }
    function _() {
      if (!r.value) return;
      const x = r.value.getBoundingClientRect(), I = window.innerHeight, M = I - x.bottom, P = x.top, O = Math.min(300, o.options.length * 36 + 8), F = M < O && P > M;
      c.value = {
        position: "fixed",
        left: `${x.left}px`,
        width: `${x.width}px`,
        maxHeight: "300px",
        ...F ? { bottom: `${I - x.top + 4}px` } : { top: `${x.bottom + 4}px` }
      };
    }
    vt(l, async (x) => {
      x && (await Rt(), _());
    });
    function C() {
      l.value && _();
    }
    function $(x) {
      x.key === "Escape" && l.value && w();
    }
    return at(() => {
      window.addEventListener("scroll", C, !0), window.addEventListener("keydown", $);
    }), Po(() => {
      window.removeEventListener("scroll", C, !0), window.removeEventListener("keydown", $);
    }), (x, I) => (a(), i("div", {
      class: "base-dropdown",
      ref_key: "dropdownRef",
      ref: r
    }, [
      s("button", {
        type: "button",
        class: Be(["dropdown-trigger", { open: l.value, error: !!e.error }]),
        disabled: e.disabled,
        onClick: p
      }, [
        s("span", Xv, m(f.value), 1),
        I[0] || (I[0] = s("span", { class: "dropdown-arrow" }, "▼", -1))
      ], 10, Yv),
      (a(), L(Jt, { to: "body" }, [
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
          style: Lt(c.value)
        }, [
          (a(!0), i(B, null, ye(e.options, (M) => (a(), i("div", {
            key: d(M),
            class: Be(["dropdown-option", { selected: d(M) === e.modelValue }]),
            onClick: (P) => g(M)
          }, m(v(M)), 11, Zv))), 128))
        ], 4)) : y("", !0)
      ])),
      e.error ? (a(), i("span", ep, m(e.error), 1)) : y("", !0)
    ], 512));
  }
}), sp = /* @__PURE__ */ Ie(tp, [["__scopeId", "data-v-857e085b"]]), op = { class: "destination-section" }, np = { class: "section-label" }, ap = { class: "destination-row" }, lp = {
  key: 0,
  class: "path-separator"
}, ip = /* @__PURE__ */ Ce({
  __name: "DownloadDestinationPicker",
  props: {
    modelValue: {},
    label: { default: "Download Destination" },
    suggestedDirectory: { default: null }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, n = t, { getModelsSubdirectories: l } = rt(), r = k(""), u = k(""), c = k(""), d = k([]), v = k(!1);
    let f = !1;
    const p = R(() => {
      const C = d.value.map(($) => ({
        label: $,
        value: $
      }));
      return C.push({ label: "Custom path...", value: "__custom__" }), C;
    }), w = R(() => r.value === "__custom__" ? c.value.trim() : r.value ? u.value.trim() ? `${r.value}/${u.value.trim()}` : r.value : "");
    function g() {
      if (v.value || !o.suggestedDirectory) return;
      const C = d.value.find(
        ($) => {
          var x;
          return $.toLowerCase() === ((x = o.suggestedDirectory) == null ? void 0 : x.toLowerCase());
        }
      );
      C && C !== r.value && (f = !0, r.value = C, Rt(() => {
        f = !1;
      }));
    }
    async function _() {
      try {
        const C = await l();
        d.value = C.directories, C.directories.length > 0 && !r.value && (r.value = C.directories[0]);
      } catch {
        d.value = ["checkpoints", "loras", "vae", "controlnet", "unet"], r.value || (r.value = "checkpoints");
      }
    }
    return vt(w, (C) => {
      n("update:modelValue", C);
    }, { immediate: !0 }), vt(() => o.suggestedDirectory, g), vt(d, g), vt(r, (C, $) => {
      f || $ === "" || (v.value = !0);
    }), at(_), (C, $) => (a(), i("div", op, [
      s("h4", np, m(e.label), 1),
      s("div", ap, [
        b(sp, {
          modelValue: r.value,
          "onUpdate:modelValue": $[0] || ($[0] = (x) => r.value = x),
          options: p.value,
          placeholder: "Select directory...",
          class: "dest-select"
        }, null, 8, ["modelValue", "options"]),
        r.value !== "__custom__" ? (a(), i("span", lp, "/")) : y("", !0),
        r.value !== "__custom__" ? (a(), L(bt, {
          key: 1,
          modelValue: u.value,
          "onUpdate:modelValue": $[1] || ($[1] = (x) => u.value = x),
          placeholder: "subfolder (optional)",
          class: "dest-subfolder"
        }, null, 8, ["modelValue"])) : y("", !0)
      ]),
      r.value === "__custom__" ? (a(), L(bt, {
        key: 0,
        modelValue: c.value,
        "onUpdate:modelValue": $[2] || ($[2] = (x) => c.value = x),
        placeholder: "Enter directory relative to models folder...",
        class: "dest-custom",
        "full-width": ""
      }, null, 8, ["modelValue"])) : y("", !0)
    ]));
  }
}), tc = /* @__PURE__ */ Ie(ip, [["__scopeId", "data-v-2fbc2b02"]]);
function rp(e) {
  const t = e.toLowerCase();
  return t === "huggingface.co" || t.endsWith(".huggingface.co") || t === "hf.co";
}
function cp(e) {
  const t = e.trim();
  if (!t) return { kind: "unknown" };
  let o;
  try {
    o = new URL(t);
  } catch {
    return { kind: "unknown" };
  }
  if (!rp(o.hostname)) return { kind: "unknown" };
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
function up(e) {
  return e.split("/").map(encodeURIComponent).join("/");
}
function Ci(e, t, o) {
  const [n, l] = e.split("/");
  return `https://huggingface.co/${encodeURIComponent(n)}/${encodeURIComponent(l)}/resolve/${encodeURIComponent(t)}/${up(o)}`;
}
const dp = { class: "hf-file-browser" }, mp = { class: "browser-header" }, fp = { class: "repo-info" }, vp = { class: "repo-id" }, pp = {
  key: 0,
  class: "revision-pill"
}, gp = {
  key: 0,
  class: "loading-state"
}, hp = {
  key: 1,
  class: "error-state"
}, yp = { class: "toolbar" }, wp = { class: "toolbar-actions" }, _p = { class: "file-list-container" }, kp = {
  key: 0,
  class: "file-list-header"
}, bp = ["checked", "indeterminate"], $p = {
  key: 1,
  class: "file-checkbox-spacer"
}, Cp = { class: "sort-indicator" }, xp = { class: "sort-indicator" }, Sp = {
  key: 1,
  class: "empty-state"
}, Ip = {
  key: 2,
  class: "file-list"
}, Ep = ["onClick"], Tp = ["checked", "onChange"], Mp = { class: "file-path" }, Pp = { class: "file-size" }, Rp = { class: "action-bar" }, Lp = { class: "summary-info" }, Dp = { class: "summary-count" }, Np = { class: "summary-size" }, Op = /* @__PURE__ */ Ce({
  __name: "HfFileBrowser",
  props: {
    repoId: {},
    revision: {},
    initialPath: {},
    preselectedFile: {},
    mode: {},
    actionLabel: {}
  },
  emits: ["queue", "selectSource", "back"],
  setup(e, { emit: t }) {
    const o = e, n = t, { getHuggingFaceRepoInfo: l } = rt(), r = k([]), u = k(/* @__PURE__ */ new Set()), c = k(!1), d = k(null), v = k(""), f = k(!1), p = k("name"), w = k(!0), g = k(""), _ = /^(.*)-(\d{4,5})-of-(\d{4,5})(\.[^.]+)$/i, C = R(() => {
      let pe = r.value;
      if (o.initialPath) {
        const Ne = o.initialPath.endsWith("/") ? o.initialPath : `${o.initialPath}/`;
        pe = pe.filter((ze) => ze.path.startsWith(Ne) || ze.path === o.initialPath);
      }
      if (f.value && (pe = pe.filter((Ne) => Ne.is_model_file)), v.value.trim()) {
        const Ne = v.value.toLowerCase();
        pe = pe.filter((ze) => ze.path.toLowerCase().includes(Ne));
      }
      return pe;
    }), $ = R(() => {
      const pe = [...C.value];
      return pe.sort((Ne, ze) => {
        let Ae;
        return p.value === "name" ? Ae = Ne.path.localeCompare(ze.path) : Ae = Ne.size - ze.size, w.value ? Ae : -Ae;
      }), pe;
    }), x = R(() => C.value.length === 0 ? !1 : C.value.every((pe) => u.value.has(pe.path))), I = R(() => C.value.some((pe) => u.value.has(pe.path))), M = R(() => g.value.trim().length > 0), P = R(() => {
      let pe = 0;
      for (const Ne of u.value) {
        const ze = r.value.find((Ae) => Ae.path === Ne);
        ze && (pe += ze.size);
      }
      return pe;
    }), O = R(() => {
      if (u.value.size === 0) return null;
      const pe = /* @__PURE__ */ new Set();
      for (const Ne of u.value) {
        const ze = _e(Ne);
        ze && pe.add(ze.toLowerCase());
      }
      return pe.size !== 1 ? null : [...pe][0];
    }), F = R(() => o.mode || "download"), W = R(() => o.actionLabel || (F.value === "source" ? "Use as Source" : "Queue Download")), D = R(() => F.value === "source" ? u.value.size === 1 ? "1 file selected" : `${u.value.size} files selected` : `${u.value.size} file(s) selected`), K = R(() => F.value === "source" ? u.value.size !== 1 : u.value.size === 0 || !M.value);
    function ue(pe) {
      if (pe === 0) return "0 B";
      const Ne = 1024 * 1024 * 1024, ze = 1024 * 1024, Ae = 1024;
      return pe >= Ne ? `${(pe / Ne).toFixed(2)} GB` : pe >= ze ? `${(pe / ze).toFixed(1)} MB` : pe >= Ae ? `${(pe / Ae).toFixed(0)} KB` : `${pe} B`;
    }
    function se(pe) {
      const Ne = pe.match(_);
      return Ne ? `${Ne[1]}${Ne[4]}` : null;
    }
    function Q(pe) {
      if (F.value === "source") {
        u.value = u.value.has(pe.path) ? /* @__PURE__ */ new Set() : /* @__PURE__ */ new Set([pe.path]);
        return;
      }
      const Ne = new Set(u.value), ze = Ne.has(pe.path), Ae = pe.shard_group || se(pe.path);
      if (Ae) {
        const re = r.value.filter((oe) => (oe.shard_group || se(oe.path)) === Ae);
        ze ? re.forEach((oe) => Ne.delete(oe.path)) : re.forEach((oe) => Ne.add(oe.path));
      } else
        ze ? Ne.delete(pe.path) : Ne.add(pe.path);
      u.value = Ne;
    }
    function we() {
      const pe = new Set(u.value);
      for (const Ne of C.value)
        Ne.is_model_file && pe.add(Ne.path);
      u.value = pe;
    }
    function te() {
      u.value = /* @__PURE__ */ new Set();
    }
    function H() {
      if (x.value) {
        const pe = new Set(u.value);
        for (const Ne of C.value)
          pe.delete(Ne.path);
        u.value = pe;
      } else {
        const pe = new Set(u.value);
        for (const Ne of C.value)
          pe.add(Ne.path);
        u.value = pe;
      }
    }
    function q(pe) {
      p.value === pe ? w.value = !w.value : (p.value = pe, w.value = !0);
    }
    function _e(pe) {
      const Ne = pe.split("/");
      return Ne.length >= 2 ? Ne[Ne.length - 2] : null;
    }
    function ee() {
      return g.value.trim();
    }
    function me() {
      if (u.value.size === 0 || !M.value) return;
      const pe = ee(), Ne = [];
      for (const ze of u.value) {
        const Ae = r.value.find((re) => re.path === ze);
        Ae && Ne.push({
          url: Ci(o.repoId, o.revision, Ae.path),
          destination: pe,
          filename: Ae.path.split("/").pop() || Ae.path
        });
      }
      n("queue", Ne);
    }
    function z() {
      if (u.value.size !== 1) return;
      const [pe] = u.value;
      n("selectSource", Ci(o.repoId, o.revision, pe));
    }
    function ae() {
      if (F.value === "source") {
        z();
        return;
      }
      me();
    }
    async function Se() {
      if (o.repoId) {
        c.value = !0, d.value = null;
        try {
          const pe = `https://huggingface.co/${o.repoId}/tree/${o.revision || "main"}`, Ne = await l(pe);
          if (r.value = Ne.files, o.preselectedFile) {
            const ze = r.value.find((Ae) => Ae.path === o.preselectedFile);
            ze && Q(ze);
          }
        } catch (pe) {
          d.value = pe instanceof Error ? pe.message : "Failed to load repository";
        } finally {
          c.value = !1;
        }
      }
    }
    return vt(() => [o.repoId, o.revision], () => {
      o.repoId && Se();
    }, { immediate: !1 }), at(() => {
      Se();
    }), (pe, Ne) => (a(), i("div", dp, [
      s("div", mp, [
        s("button", {
          class: "back-btn",
          onClick: Ne[0] || (Ne[0] = (ze) => pe.$emit("back")),
          title: "Back to search"
        }, " ◄ "),
        s("div", fp, [
          s("span", vp, m(e.repoId), 1),
          e.revision ? (a(), i("span", pp, m(e.revision), 1)) : y("", !0)
        ])
      ]),
      c.value ? (a(), i("div", gp, " Loading repository files... ")) : d.value ? (a(), i("div", hp, m(d.value), 1)) : (a(), i(B, { key: 2 }, [
        s("div", yp, [
          b(bt, {
            modelValue: v.value,
            "onUpdate:modelValue": Ne[1] || (Ne[1] = (ze) => v.value = ze),
            placeholder: "Filter files...",
            type: "search",
            class: "search-input"
          }, null, 8, ["modelValue"]),
          s("div", wp, [
            s("button", {
              class: Be(["toggle-btn", { active: f.value }]),
              onClick: Ne[2] || (Ne[2] = (ze) => f.value = !f.value)
            }, m(f.value ? "Models Only" : "All Files"), 3),
            F.value === "download" ? (a(), i("button", {
              key: 0,
              class: "action-btn",
              onClick: we
            }, "Auto-Select Models")) : y("", !0),
            s("button", {
              class: "action-btn",
              onClick: te
            }, "Clear")
          ])
        ]),
        s("div", _p, [
          C.value.length > 0 ? (a(), i("div", kp, [
            F.value === "download" ? (a(), i("input", {
              key: 0,
              type: "checkbox",
              checked: x.value,
              indeterminate: I.value && !x.value,
              class: "file-checkbox",
              onChange: H
            }, null, 40, bp)) : (a(), i("span", $p)),
            s("span", {
              class: "header-name",
              onClick: Ne[3] || (Ne[3] = (ze) => q("name"))
            }, [
              Ne[7] || (Ne[7] = S(" Name ", -1)),
              s("span", Cp, m(p.value === "name" ? w.value ? "▲" : "▼" : ""), 1)
            ]),
            s("span", {
              class: "header-size",
              onClick: Ne[4] || (Ne[4] = (ze) => q("size"))
            }, [
              Ne[8] || (Ne[8] = S(" Size ", -1)),
              s("span", xp, m(p.value === "size" ? w.value ? "▲" : "▼" : ""), 1)
            ])
          ])) : y("", !0),
          C.value.length === 0 ? (a(), i("div", Sp, m(r.value.length === 0 ? "No files in repository" : "No files match filter"), 1)) : (a(), i("div", Ip, [
            (a(!0), i(B, null, ye($.value, (ze) => (a(), i("div", {
              key: ze.path,
              class: Be(["file-item", { selected: u.value.has(ze.path) }]),
              onClick: (Ae) => Q(ze)
            }, [
              s("input", {
                type: "checkbox",
                checked: u.value.has(ze.path),
                class: "file-checkbox",
                onClick: Ne[5] || (Ne[5] = pt(() => {
                }, ["stop"])),
                onChange: (Ae) => Q(ze)
              }, null, 40, Tp),
              s("span", Mp, m(ze.path), 1),
              s("span", Pp, m(ue(ze.size)), 1)
            ], 10, Ep))), 128))
          ]))
        ]),
        F.value === "download" ? (a(), L(tc, {
          key: 0,
          modelValue: g.value,
          "onUpdate:modelValue": Ne[6] || (Ne[6] = (ze) => g.value = ze),
          "suggested-directory": O.value
        }, null, 8, ["modelValue", "suggested-directory"])) : y("", !0),
        s("div", Rp, [
          s("div", Lp, [
            s("span", Dp, m(D.value), 1),
            s("span", Np, m(ue(P.value)), 1)
          ]),
          b(Oe, {
            variant: "primary",
            disabled: K.value,
            onClick: ae
          }, {
            default: h(() => [
              S(m(W.value), 1)
            ]),
            _: 1
          }, 8, ["disabled"])
        ])
      ], 64))
    ]));
  }
}), Up = /* @__PURE__ */ Ie(Op, [["__scopeId", "data-v-06caa551"]]), Ap = { class: "token-config-modal" }, zp = { class: "provider-info" }, Fp = { class: "provider-icon" }, Vp = { class: "provider-name" }, Bp = {
  key: 0,
  class: "current-token"
}, Wp = { class: "mask" }, Gp = { class: "token-input-section" }, jp = { class: "input-label" }, Hp = { class: "help-text" }, qp = ["href"], Kp = { class: "modal-actions" }, Jp = /* @__PURE__ */ Ce({
  __name: "TokenConfigModal",
  props: {
    provider: {},
    currentTokenMask: {},
    overlayZIndex: {}
  },
  emits: ["close", "saved", "cleared"],
  setup(e, { emit: t }) {
    const o = e, n = t, { updateConfig: l } = rt(), r = k(""), u = k(!1), c = k(!1), d = R(
      () => o.provider === "huggingface" ? "HuggingFace" : "CivitAI"
    ), v = R(
      () => o.provider === "huggingface" ? "🤗" : "🎨"
    ), f = R(
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
          const C = o.provider === "huggingface" ? { huggingface_token: r.value.trim() } : { civitai_api_key: r.value.trim() };
          await l(C), r.value = "", n("saved"), n("close");
        } catch (C) {
          console.error("Failed to save token:", C);
        } finally {
          u.value = !1;
        }
      }
    }
    async function _() {
      c.value = !0;
      try {
        const C = o.provider === "huggingface" ? { huggingface_token: null } : { civitai_api_key: null };
        await l(C), n("cleared"), n("close");
      } catch (C) {
        console.error("Failed to clear token:", C);
      } finally {
        c.value = !1;
      }
    }
    return (C, $) => (a(), L($t, {
      title: "Configure API Token",
      "overlay-z-index": e.overlayZIndex,
      onClose: $[2] || ($[2] = (x) => C.$emit("close"))
    }, {
      body: h(() => [
        s("div", Ap, [
          s("div", zp, [
            s("span", Fp, m(v.value), 1),
            s("span", Vp, m(d.value), 1)
          ]),
          e.currentTokenMask ? (a(), i("div", Bp, [
            $[4] || ($[4] = s("span", { class: "label" }, "Current token:", -1)),
            s("span", Wp, m(e.currentTokenMask), 1),
            b(Oe, {
              variant: "danger",
              size: "sm",
              onClick: _,
              loading: c.value
            }, {
              default: h(() => [...$[3] || ($[3] = [
                S(" Clear Token ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ])) : y("", !0),
          s("div", Gp, [
            s("label", jp, m(e.currentTokenMask ? "Replace with new token:" : "Enter token:"), 1),
            b(bt, {
              modelValue: r.value,
              "onUpdate:modelValue": $[0] || ($[0] = (x) => r.value = x),
              type: "password",
              placeholder: f.value
            }, null, 8, ["modelValue", "placeholder"]),
            s("div", Hp, [
              s("a", {
                href: p.value,
                target: "_blank",
                rel: "noopener"
              }, m(w.value), 9, qp)
            ])
          ])
        ])
      ]),
      footer: h(() => [
        s("div", Kp, [
          b(Oe, {
            variant: "secondary",
            onClick: $[1] || ($[1] = (x) => C.$emit("close"))
          }, {
            default: h(() => [...$[5] || ($[5] = [
              S(" Cancel ", -1)
            ])]),
            _: 1
          }),
          b(Oe, {
            variant: "primary",
            disabled: !r.value.trim(),
            loading: u.value,
            onClick: g
          }, {
            default: h(() => [...$[6] || ($[6] = [
              S(" Save Token ", -1)
            ])]),
            _: 1
          }, 8, ["disabled", "loading"])
        ])
      ]),
      _: 1
    }, 8, ["overlay-z-index"]));
  }
}), Qp = /* @__PURE__ */ Ie(Jp, [["__scopeId", "data-v-525ec64a"]]), Yp = { class: "huggingface-tab" }, Xp = {
  key: 0,
  class: "search-section"
}, Zp = { class: "search-header" }, eg = { class: "search-bar" }, tg = {
  key: 1,
  class: "search-results"
}, sg = {
  key: 0,
  class: "loading-state"
}, og = {
  key: 1,
  class: "error-state"
}, ng = {
  key: 2,
  class: "results-list"
}, ag = ["onClick"], lg = { class: "repo-header" }, ig = { class: "repo-id" }, rg = { class: "repo-stats" }, cg = {
  class: "stat",
  title: "Downloads"
}, ug = {
  class: "stat",
  title: "Likes"
}, dg = {
  key: 0,
  class: "repo-desc"
}, mg = {
  key: 1,
  class: "repo-tags"
}, fg = {
  key: 3,
  class: "empty-state"
}, vg = {
  key: 4,
  class: "hint-state"
}, pg = /* @__PURE__ */ Ce({
  __name: "HuggingFaceTab",
  props: {
    modeKind: { default: "download" },
    actionLabel: { default: "Queue Download" },
    overlayZIndex: { default: 10003 }
  },
  emits: ["queue", "selectSource"],
  setup(e) {
    const { searchHuggingFaceRepos: t, getConfig: o } = rt(), n = k("search"), l = k(""), r = k([]), u = k(!1), c = k(null), d = k(!1), v = k(null), f = k("main"), p = k(), w = k(), g = k(!1), _ = k(null), C = R(() => {
      if (!c.value) return !1;
      const W = c.value.toLowerCase();
      return c.value.includes("401") || c.value.includes("403") || W.includes("authentication") || W.includes("unauthorized");
    });
    function $(W) {
      return W >= 1e6 ? `${(W / 1e6).toFixed(1)}M` : W >= 1e3 ? `${(W / 1e3).toFixed(1)}K` : String(W);
    }
    async function x() {
      const W = l.value.trim();
      if (!W) return;
      c.value = null;
      const D = cp(W);
      if (D.kind === "file" && D.repoId && D.path) {
        v.value = D.repoId, f.value = D.revision || "main";
        const K = D.path.split("/");
        K.length > 1 ? p.value = K.slice(0, -1).join("/") : p.value = void 0, w.value = D.path, n.value = "browse";
        return;
      }
      if (D.kind === "repo" && D.repoId) {
        v.value = D.repoId, f.value = D.revision || "main", p.value = D.path, w.value = void 0, n.value = "browse";
        return;
      }
      if (/^[\w-]+\/[\w.-]+$/.test(W) && !W.includes("://")) {
        v.value = W, f.value = "main", p.value = void 0, w.value = void 0, n.value = "browse";
        return;
      }
      u.value = !0;
      try {
        const K = await t(W);
        r.value = K.results, d.value = !0;
      } catch (K) {
        c.value = K instanceof Error ? K.message : "Search failed";
      } finally {
        u.value = !1;
      }
    }
    function I(W) {
      v.value = W, f.value = "main", p.value = void 0, w.value = void 0, n.value = "browse";
    }
    function M() {
      n.value = "search", v.value = null, p.value = void 0, w.value = void 0;
    }
    async function P() {
      try {
        const W = await o();
        _.value = W.huggingface_token || null;
      } catch (W) {
        console.error("Failed to load config:", W);
      }
    }
    function O() {
      P(), C.value && l.value && x();
    }
    function F() {
      _.value = null;
    }
    return at(P), (W, D) => (a(), i("div", Yp, [
      n.value === "search" ? (a(), i("div", Xp, [
        s("div", Zp, [
          s("div", eg, [
            b(bt, {
              modelValue: l.value,
              "onUpdate:modelValue": D[0] || (D[0] = (K) => l.value = K),
              placeholder: "Search repos, paste URL, or enter user/repo...",
              onKeydown: cs(x, ["enter"])
            }, null, 8, ["modelValue"]),
            b(Oe, {
              variant: "primary",
              onClick: x,
              loading: u.value
            }, {
              default: h(() => [...D[6] || (D[6] = [
                S(" Search ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ]),
          b(Oe, {
            variant: "secondary",
            size: "sm",
            onClick: D[1] || (D[1] = (K) => g.value = !0)
          }, {
            default: h(() => [
              S(m(_.value ? `Token: ${_.value}` : "Configure Token"), 1)
            ]),
            _: 1
          })
        ])
      ])) : y("", !0),
      n.value === "search" ? (a(), i("div", tg, [
        u.value ? (a(), i("div", sg, " Searching HuggingFace... ")) : c.value ? (a(), i("div", og, [
          s("p", null, m(c.value), 1),
          C.value ? (a(), L(Oe, {
            key: 0,
            variant: "primary",
            size: "sm",
            onClick: D[2] || (D[2] = (K) => g.value = !0)
          }, {
            default: h(() => [...D[7] || (D[7] = [
              S(" Configure HuggingFace Token ", -1)
            ])]),
            _: 1
          })) : y("", !0)
        ])) : r.value.length > 0 ? (a(), i("div", ng, [
          (a(!0), i(B, null, ye(r.value, (K) => (a(), i("div", {
            key: K.repo_id,
            class: "repo-card",
            onClick: (ue) => I(K.repo_id)
          }, [
            s("div", lg, [
              s("span", ig, m(K.repo_id), 1),
              s("div", rg, [
                s("span", cg, [
                  D[8] || (D[8] = s("span", { class: "stat-icon" }, "↓", -1)),
                  S(" " + m($(K.downloads)), 1)
                ]),
                s("span", ug, [
                  D[9] || (D[9] = s("span", { class: "stat-icon" }, "★", -1)),
                  S(" " + m($(K.likes)), 1)
                ])
              ])
            ]),
            K.description ? (a(), i("p", dg, m(K.description), 1)) : y("", !0),
            K.tags.length > 0 ? (a(), i("div", mg, [
              (a(!0), i(B, null, ye(K.tags.slice(0, 5), (ue) => (a(), i("span", {
                key: ue,
                class: "tag"
              }, m(ue), 1))), 128))
            ])) : y("", !0)
          ], 8, ag))), 128))
        ])) : d.value ? (a(), i("div", fg, " No repositories found ")) : (a(), i("div", vg, " Enter a HuggingFace URL, repo ID (user/repo), or search term "))
      ])) : (a(), L(Up, {
        key: 2,
        "repo-id": v.value,
        revision: f.value,
        "initial-path": p.value,
        "preselected-file": w.value,
        mode: e.modeKind,
        "action-label": e.actionLabel,
        onBack: M,
        onQueue: D[3] || (D[3] = (K) => W.$emit("queue", K)),
        onSelectSource: D[4] || (D[4] = (K) => W.$emit("selectSource", K))
      }, null, 8, ["repo-id", "revision", "initial-path", "preselected-file", "mode", "action-label"])),
      g.value ? (a(), L(Qp, {
        key: 3,
        provider: "huggingface",
        "current-token-mask": _.value,
        "overlay-z-index": e.overlayZIndex + 2,
        onClose: D[5] || (D[5] = (K) => g.value = !1),
        onSaved: O,
        onCleared: F
      }, null, 8, ["current-token-mask", "overlay-z-index"])) : y("", !0)
    ]));
  }
}), sc = /* @__PURE__ */ Ie(pg, [["__scopeId", "data-v-eccbf32d"]]), gg = { class: "candidate-card" }, hg = { class: "candidate-main" }, yg = { class: "candidate-url" }, wg = { class: "candidate-meta" }, _g = { class: "meta-chip" }, kg = {
  key: 0,
  class: "meta-chip"
}, bg = ["aria-expanded"], $g = {
  key: 1,
  class: "meta-chip"
}, Cg = { class: "match-popover-reasons" }, xg = { class: "candidate-footer" }, Sg = {
  key: 0,
  class: "candidate-context"
}, Ig = { key: 1 }, Eg = /* @__PURE__ */ Ce({
  __name: "ModelSourceCandidateCard",
  props: {
    candidate: {},
    actionLabel: { default: "Use as Source" },
    loading: { type: Boolean, default: !1 }
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const o = t, n = k(!1), l = k(null);
    function r() {
      n.value = !1;
    }
    function u(f) {
      var w;
      const p = f.target;
      p instanceof Node && ((w = l.value) != null && w.contains(p) || r());
    }
    function c(f) {
      f.key === "Escape" && r();
    }
    vt(n, (f) => {
      f ? (document.addEventListener("pointerdown", u), document.addEventListener("keydown", c)) : (document.removeEventListener("pointerdown", u), document.removeEventListener("keydown", c));
    }), gn(() => {
      document.removeEventListener("pointerdown", u), document.removeEventListener("keydown", c);
    });
    function d(f) {
      return f === "huggingface" ? "Hugging Face" : f === "civitai" ? "Civitai" : "Direct URL";
    }
    function v(f) {
      return f >= 75 ? "Strong" : f >= 45 ? "Possible" : "Weak";
    }
    return (f, p) => {
      var w, g;
      return a(), i("article", gg, [
        s("div", hg, [
          s("div", yg, m(e.candidate.url), 1),
          s("div", wg, [
            s("span", _g, [
              p[3] || (p[3] = s("span", { class: "chip-label" }, "Provider", -1)),
              s("span", null, m(d(e.candidate.source_type)), 1)
            ]),
            e.candidate.workflow ? (a(), i("span", kg, [
              p[4] || (p[4] = s("span", { class: "chip-label" }, "Workflow", -1)),
              s("span", null, m(e.candidate.workflow), 1)
            ])) : y("", !0),
            e.candidate.confidence ? (a(), i("span", {
              key: 1,
              ref_key: "matchPopoverRoot",
              ref: l,
              class: "match-chip-wrap"
            }, [
              (w = e.candidate.reasons) != null && w.length ? (a(), i("button", {
                key: 0,
                class: "meta-chip meta-chip-button",
                type: "button",
                "aria-expanded": n.value,
                onClick: p[0] || (p[0] = pt((_) => n.value = !n.value, ["stop"]))
              }, [
                p[5] || (p[5] = s("span", { class: "chip-label" }, "Match", -1)),
                s("span", null, m(v(e.candidate.confidence)), 1)
              ], 8, bg)) : (a(), i("span", $g, [
                p[6] || (p[6] = s("span", { class: "chip-label" }, "Match", -1)),
                s("span", null, m(v(e.candidate.confidence)), 1)
              ])),
              n.value && ((g = e.candidate.reasons) != null && g.length) ? (a(), i("div", {
                key: 2,
                class: "match-popover",
                onClick: p[1] || (p[1] = pt(() => {
                }, ["stop"]))
              }, [
                p[7] || (p[7] = s("div", { class: "match-popover-title" }, "Matched by", -1)),
                s("div", Cg, [
                  (a(!0), i(B, null, ye(e.candidate.reasons, (_) => (a(), i("span", {
                    key: _,
                    class: "reason-chip"
                  }, m(_), 1))), 128))
                ])
              ])) : y("", !0)
            ], 512)) : y("", !0)
          ]),
          s("div", xg, [
            e.candidate.context ? (a(), i("details", Sg, [
              p[8] || (p[8] = s("summary", null, "Workflow snippet", -1)),
              s("p", null, m(e.candidate.context), 1)
            ])) : (a(), i("div", Ig)),
            b(Oe, {
              variant: "primary",
              size: "sm",
              loading: e.loading,
              onClick: p[2] || (p[2] = (_) => o("select", e.candidate.url))
            }, {
              default: h(() => [
                S(m(e.actionLabel), 1)
              ]),
              _: 1
            }, 8, ["loading"])
          ])
        ])
      ]);
    };
  }
}), oc = /* @__PURE__ */ Ie(Eg, [["__scopeId", "data-v-329b9068"]]), Tg = { class: "source-url-form" }, Mg = { class: "input-group" }, Pg = { key: 0 }, Rg = {
  key: 1,
  class: "description"
}, Lg = { class: "actions" }, Dg = /* @__PURE__ */ Ce({
  __name: "SourceUrlActionForm",
  props: {
    modelValue: {},
    actionLabel: {},
    label: { default: "Download URL" },
    placeholder: { default: "https://huggingface.co/org/repo/resolve/main/model.safetensors" },
    description: { default: "" },
    disabled: { type: Boolean, default: !1 },
    loading: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "submit"],
  setup(e, { emit: t }) {
    const o = e, n = t, l = R(() => o.modelValue.trim()), r = R(() => {
      const d = l.value;
      if (!d) return null;
      try {
        const v = new URL(d);
        if (!["http:", "https:"].includes(v.protocol))
          return "Use an HTTP or HTTPS URL.";
      } catch {
        return "Enter a valid URL.";
      }
      return null;
    }), u = R(() => !!l.value && !r.value && !o.disabled);
    function c() {
      u.value && n("submit", l.value);
    }
    return (d, v) => (a(), i("div", Tg, [
      s("div", Mg, [
        e.label ? (a(), i("label", Pg, m(e.label), 1)) : y("", !0),
        b(bt, {
          "model-value": e.modelValue,
          placeholder: e.placeholder,
          error: r.value || void 0,
          "full-width": "",
          "onUpdate:modelValue": v[0] || (v[0] = (f) => n("update:modelValue", f)),
          onEnter: c
        }, null, 8, ["model-value", "placeholder", "error"]),
        e.description ? (a(), i("p", Rg, m(e.description), 1)) : y("", !0)
      ]),
      nt(d.$slots, "default", {}, void 0),
      s("div", Lg, [
        b(Oe, {
          variant: "primary",
          disabled: !u.value,
          loading: e.loading,
          onClick: c
        }, {
          default: h(() => [
            S(m(e.actionLabel), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ])
    ]));
  }
}), nc = /* @__PURE__ */ Ie(Dg, [["__scopeId", "data-v-e2610d45"]]), Ng = { class: "source-picker" }, Og = {
  key: 0,
  class: "model-summary"
}, Ug = { class: "model-heading" }, Ag = { class: "summary-name" }, zg = { class: "summary-meta" }, Fg = {
  key: 0,
  class: "hash-row"
}, Vg = { class: "hash-value" }, Bg = {
  key: 1,
  class: "hash-row"
}, Wg = { class: "hash-value" }, Gg = {
  key: 2,
  class: "hash-row"
}, jg = { class: "hash-value" }, Hg = {
  key: 4,
  class: "hash-error"
}, qg = { class: "tab-bar" }, Kg = ["onClick"], Jg = {
  key: 1,
  class: "tab-content"
}, Qg = { class: "section-header-row" }, Yg = {
  key: 0,
  class: "state-message"
}, Xg = {
  key: 1,
  class: "error-message"
}, Zg = {
  key: 2,
  class: "candidate-list"
}, eh = {
  key: 3,
  class: "state-message"
}, th = {
  key: 2,
  class: "tab-content source-browser-content"
}, sh = {
  key: 3,
  class: "tab-content"
}, oh = { class: "section-header-row" }, nh = /* @__PURE__ */ Ce({
  __name: "ModelSourcePicker",
  props: {
    model: {},
    actionLabel: { default: "Use as Source" },
    loadingUrl: { default: null },
    overlayZIndex: { default: 10011 },
    showModelSummary: { type: Boolean, default: !0 },
    directDescription: { default: "Paste the download URL that another machine should use for this exact model file." },
    directPlaceholder: { default: "https://huggingface.co/org/repo/resolve/main/model.safetensors" }
  },
  emits: ["selectSource", "hashesComputed"],
  setup(e, { emit: t }) {
    const o = e, n = t, { getModelSourceCandidates: l, computeModelHashes: r } = rt(), u = [
      { id: "workflow", label: "Workflow Links" },
      { id: "huggingface", label: "Hugging Face" },
      { id: "direct", label: "Direct URL" }
    ], c = k("workflow"), d = k([]), v = k(!1), f = k(null), p = k(""), w = k(!1), g = k(null), _ = R(() => d.value.filter((I) => I.source === "workflow")), C = R(() => !!(o.model.hash && (!o.model.blake3 || !o.model.sha256)));
    async function $() {
      v.value = !0, f.value = null;
      try {
        const I = await l(o.model.hash);
        d.value = I.candidates;
      } catch (I) {
        f.value = I instanceof Error ? I.message : "Failed to scan workflows";
      } finally {
        v.value = !1;
      }
    }
    async function x() {
      if (o.model.hash) {
        w.value = !0, g.value = null;
        try {
          const I = await r(o.model.hash);
          n("hashesComputed", I);
        } catch (I) {
          g.value = I instanceof Error ? I.message : "Failed to compute hashes";
        } finally {
          w.value = !1;
        }
      }
    }
    return at($), (I, M) => (a(), i("div", Ng, [
      e.showModelSummary ? (a(), i("div", Og, [
        s("div", Ug, [
          M[4] || (M[4] = s("div", { class: "summary-label" }, "Local model", -1)),
          s("div", Ag, m(e.model.filename), 1)
        ]),
        s("div", zg, [
          e.model.hash ? (a(), i("div", Fg, [
            M[5] || (M[5] = s("span", { class: "hash-label" }, "quick hash", -1)),
            s("span", Vg, m(e.model.hash), 1)
          ])) : y("", !0),
          e.model.blake3 ? (a(), i("div", Bg, [
            M[6] || (M[6] = s("span", { class: "hash-label" }, "blake3", -1)),
            s("span", Wg, m(e.model.blake3), 1)
          ])) : y("", !0),
          e.model.sha256 ? (a(), i("div", Gg, [
            M[7] || (M[7] = s("span", { class: "hash-label" }, "sha256", -1)),
            s("span", jg, m(e.model.sha256), 1)
          ])) : y("", !0),
          C.value ? (a(), L(Oe, {
            key: 3,
            class: "compute-hashes-btn",
            variant: "secondary",
            size: "sm",
            loading: w.value,
            onClick: x
          }, {
            default: h(() => [...M[8] || (M[8] = [
              S(" Compute full hashes ", -1)
            ])]),
            _: 1
          }, 8, ["loading"])) : y("", !0),
          g.value ? (a(), i("p", Hg, m(g.value), 1)) : y("", !0)
        ])
      ])) : y("", !0),
      s("div", qg, [
        (a(), i(B, null, ye(u, (P) => s("button", {
          key: P.id,
          class: Be(["tab-btn", { active: c.value === P.id }]),
          onClick: (O) => c.value = P.id
        }, m(P.label), 11, Kg)), 64))
      ]),
      c.value === "workflow" ? (a(), i("section", Jg, [
        s("div", Qg, [
          M[10] || (M[10] = s("div", null, [
            s("h4", null, "Workflow Links"),
            s("p", null, "Candidate model links found in saved workflow notes or metadata.")
          ], -1)),
          b(Oe, {
            variant: "secondary",
            size: "sm",
            loading: v.value,
            onClick: $
          }, {
            default: h(() => [...M[9] || (M[9] = [
              S(" Scan ", -1)
            ])]),
            _: 1
          }, 8, ["loading"])
        ]),
        v.value ? (a(), i("div", Yg, "Scanning workflows...")) : f.value ? (a(), i("div", Xg, m(f.value), 1)) : _.value.length ? (a(), i("div", Zg, [
          (a(!0), i(B, null, ye(_.value, (P) => (a(), L(oc, {
            key: `${P.workflow}:${P.url}`,
            candidate: P,
            "action-label": e.actionLabel,
            loading: e.loadingUrl === P.url,
            onSelect: M[0] || (M[0] = (O) => n("selectSource", O))
          }, null, 8, ["candidate", "action-label", "loading"]))), 128))
        ])) : (a(), i("div", eh, " No likely workflow links found. Try direct URL for now. "))
      ])) : c.value === "huggingface" ? (a(), i("section", th, [
        b(sc, {
          "mode-kind": "source",
          "action-label": e.actionLabel,
          "overlay-z-index": e.overlayZIndex,
          onSelectSource: M[1] || (M[1] = (P) => n("selectSource", P))
        }, null, 8, ["action-label", "overlay-z-index"])
      ])) : c.value === "direct" ? (a(), i("section", sh, [
        s("div", oh, [
          s("div", null, [
            M[11] || (M[11] = s("h4", null, "Direct URL", -1)),
            s("p", null, m(e.directDescription), 1)
          ])
        ]),
        b(nc, {
          modelValue: p.value,
          "onUpdate:modelValue": M[2] || (M[2] = (P) => p.value = P),
          label: "",
          placeholder: e.directPlaceholder,
          "action-label": e.actionLabel,
          loading: e.loadingUrl === p.value.trim(),
          onSubmit: M[3] || (M[3] = (P) => n("selectSource", P))
        }, null, 8, ["modelValue", "placeholder", "action-label", "loading"])
      ])) : y("", !0)
    ]));
  }
}), ah = /* @__PURE__ */ Ie(nh, [["__scopeId", "data-v-e9633660"]]), lh = {
  key: 0,
  class: "error-message"
}, ih = /* @__PURE__ */ Ce({
  __name: "ModelSourceModal",
  props: {
    model: {},
    overlayZIndex: { default: 10011 }
  },
  emits: ["close", "saved", "hashesComputed"],
  setup(e, { emit: t }) {
    const o = e, n = t, { addModelSource: l } = rt(), r = k(o.model), u = k(null), c = k(null);
    vt(() => o.model, (f) => {
      r.value = f;
    });
    async function d(f) {
      if (!(!f || !o.model.hash)) {
        u.value = f, c.value = null;
        try {
          await l(o.model.hash, f), n("saved"), n("close");
        } catch (p) {
          c.value = p instanceof Error ? p.message : "Failed to save source";
        } finally {
          u.value = null;
        }
      }
    }
    function v(f) {
      r.value = f, n("hashesComputed");
    }
    return (f, p) => (a(), L($t, {
      title: `Find Source: ${e.model.filename}`,
      size: "lg",
      "fixed-height": "",
      "overlay-z-index": e.overlayZIndex,
      onClose: p[1] || (p[1] = (w) => n("close"))
    }, {
      body: h(() => [
        b(ah, {
          model: r.value,
          "loading-url": u.value,
          "overlay-z-index": e.overlayZIndex,
          "action-label": "Use as Source",
          onSelectSource: d,
          onHashesComputed: v
        }, null, 8, ["model", "loading-url", "overlay-z-index"]),
        c.value ? (a(), i("p", lh, m(c.value), 1)) : y("", !0)
      ]),
      footer: h(() => [
        b(Oe, {
          variant: "secondary",
          onClick: p[0] || (p[0] = (w) => n("close"))
        }, {
          default: h(() => [...p[2] || (p[2] = [
            S(" Close ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title", "overlay-z-index"]));
  }
}), ac = /* @__PURE__ */ Ie(ih, [["__scopeId", "data-v-62104cdb"]]), rh = { class: "readiness-body" }, ch = {
  key: 0,
  class: "issue-section"
}, uh = { class: "section-heading" }, dh = { class: "issue-list" }, mh = { class: "issue-main" }, fh = { class: "issue-name" }, vh = { class: "issue-meta" }, ph = { key: 0 }, gh = { key: 1 }, hh = ["disabled", "onClick"], yh = {
  key: 1,
  class: "issue-note"
}, wh = {
  key: 1,
  class: "issue-section"
}, _h = { class: "section-heading" }, kh = { class: "issue-list" }, bh = { class: "issue-main" }, $h = { class: "issue-name" }, Ch = { class: "issue-meta" }, xh = { class: "issue-reason" }, Sh = ["disabled", "onClick"], Ih = {
  key: 1,
  class: "issue-note"
}, Eh = {
  key: 2,
  class: "empty-state"
}, Th = {
  key: 3,
  class: "error-message"
}, Mh = /* @__PURE__ */ Ce({
  __name: "ReadinessIssuesModal",
  props: {
    warnings: {}
  },
  emits: ["close", "revalidate"],
  setup(e, { emit: t }) {
    const o = e, n = t, { getModelDetails: l, updateNodeCriticality: r } = rt(), u = k(null), c = k(null), d = k(null), v = k(null), f = R(() => o.warnings.models_without_sources), p = R(() => o.warnings.nodes_without_provenance);
    async function w($) {
      c.value = $, v.value = null;
      try {
        u.value = await l($);
      } catch (x) {
        v.value = x instanceof Error ? x.message : `Failed to load ${$}`;
      } finally {
        c.value = null;
      }
    }
    async function g($) {
      d.value = $, v.value = null;
      try {
        const x = await r($, "optional");
        if (x.status !== "success") {
          v.value = x.message || `Failed to update ${$}`;
          return;
        }
        n("revalidate");
      } catch (x) {
        v.value = x instanceof Error ? x.message : `Failed to update ${$}`;
      } finally {
        d.value = null;
      }
    }
    function _() {
      u.value = null, n("revalidate");
    }
    function C() {
      n("revalidate");
    }
    return ($, x) => (a(), i(B, null, [
      b($t, {
        size: "lg",
        "overlay-z-index": 10007,
        onClose: x[1] || (x[1] = (I) => n("close"))
      }, {
        header: h(() => [...x[3] || (x[3] = [
          s("div", { class: "readiness-heading" }, [
            s("h3", { class: "readiness-title" }, "Review Reproducibility Issues"),
            s("p", { class: "readiness-subtitle" }, " Add missing source details where possible. Required development nodes can also be marked optional when they should stay local but not be part of portable builds. ")
          ], -1)
        ])]),
        body: h(() => [
          s("div", rh, [
            f.value.length ? (a(), i("section", ch, [
              s("div", uh, [
                x[4] || (x[4] = s("h4", null, "Models Missing Source URLs", -1)),
                s("span", null, m(f.value.length), 1)
              ]),
              s("div", dh, [
                (a(!0), i(B, null, ye(f.value, (I) => (a(), i("article", {
                  key: I.hash || I.filename,
                  class: "issue-item"
                }, [
                  s("div", mh, [
                    s("div", fh, m(I.filename), 1),
                    s("div", vh, [
                      I.hash ? (a(), i("span", ph, "hash " + m(I.hash), 1)) : y("", !0),
                      I.workflows.length ? (a(), i("span", gh, "used by " + m(I.workflows.join(", ")), 1)) : y("", !0),
                      s("span", null, m(I.criticality || "required"), 1)
                    ])
                  ]),
                  I.hash ? (a(), i("button", {
                    key: 0,
                    class: "issue-action",
                    disabled: c.value === I.hash,
                    onClick: (M) => w(I.hash)
                  }, m(c.value === I.hash ? "Loading..." : "Add Source"), 9, hh)) : (a(), i("span", yh, "Missing hash"))
                ]))), 128))
              ])
            ])) : y("", !0),
            p.value.length ? (a(), i("section", wh, [
              s("div", _h, [
                x[5] || (x[5] = s("h4", null, "Custom Nodes Missing Portable Provenance", -1)),
                s("span", null, m(p.value.length), 1)
              ]),
              s("div", kh, [
                (a(!0), i(B, null, ye(p.value, (I) => (a(), i("article", {
                  key: I.name,
                  class: "issue-item"
                }, [
                  s("div", bh, [
                    s("div", $h, m(I.name), 1),
                    s("div", Ch, [
                      s("span", null, m(I.source), 1),
                      s("span", null, m(I.criticality), 1)
                    ]),
                    s("p", xh, m(I.reason), 1)
                  ]),
                  I.criticality === "required" ? (a(), i("button", {
                    key: 0,
                    class: "issue-action",
                    disabled: d.value === I.name,
                    onClick: (M) => g(I.name)
                  }, m(d.value === I.name ? "Saving..." : "Mark Optional"), 9, Sh)) : (a(), i("span", Ih, "Optional warning"))
                ]))), 128))
              ])
            ])) : y("", !0),
            !f.value.length && !p.value.length ? (a(), i("div", Eh, " No reproducibility issues remain. ")) : y("", !0),
            v.value ? (a(), i("div", Th, m(v.value), 1)) : y("", !0)
          ])
        ]),
        footer: h(() => [
          s("button", {
            class: "primary-action",
            onClick: x[0] || (x[0] = (I) => n("close"))
          }, " Done ")
        ]),
        _: 1
      }),
      u.value ? (a(), L(ac, {
        key: 0,
        model: u.value,
        "overlay-z-index": 10008,
        onClose: x[2] || (x[2] = (I) => u.value = null),
        onSaved: _,
        onHashesComputed: C
      }, null, 8, ["model"])) : y("", !0)
    ], 64));
  }
}), Il = /* @__PURE__ */ Ie(Mh, [["__scopeId", "data-v-03f88a10"]]), Ph = { class: "health-section-header" }, Rh = { class: "suggestions-content" }, Lh = { class: "suggestions-text" }, Dh = { style: { "margin-top": "var(--cg-space-3)" } }, Nh = {
  key: 1,
  class: "no-issues-text"
}, Oh = {
  key: 2,
  class: "no-issues-text"
}, Uh = /* @__PURE__ */ Ce({
  __name: "StatusSection",
  props: {
    status: {},
    setupState: { default: "managed" }
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes", "repair-missing-models", "repair-environment", "start-setup", "view-environments", "create-environment"],
  setup(e, { expose: t, emit: o }) {
    const n = e, l = k(!1), r = k(!1), u = k(!1), c = k(null), d = k(null), v = k(!1), { validateExport: f } = rt();
    function p() {
      l.value = !0;
    }
    function w() {
      l.value = !1, _("view-workflows");
    }
    function g() {
      l.value = !1, _("view-nodes");
    }
    const _ = o, C = k(!1), $ = k(!1);
    function x() {
      $.value = !0, _("repair-environment");
    }
    function I() {
      $.value = !1;
    }
    function M() {
      l.value = !1;
    }
    const P = R(() => {
      const Z = n.status.workflows.analyzed || [], G = Z.filter(
        (ve) => ve.unresolved_models_count > 0 || ve.ambiguous_models_count > 0
      );
      return G.length === 0 && n.status.missing_models_count > 0 ? Z.filter((ve) => ve.sync_state === "synced") : G;
    });
    function O() {
      const Z = P.value;
      Z.length !== 0 && (C.value = !0, _("repair-missing-models", Z.map((G) => G.name)));
    }
    function F() {
      C.value = !1;
    }
    t({ resetRepairingState: F, resetRepairingEnvironmentState: I, closeDetailModal: M });
    const W = R(() => n.status.workflows.new.length > 0 || n.status.workflows.modified.length > 0 || n.status.workflows.deleted.length > 0), D = R(() => n.status.has_changes), K = R(() => {
      const Z = n.status.git_changes;
      return Z.nodes_added.length > 0 || Z.nodes_removed.length > 0 || Z.workflow_changes;
    }), ue = R(() => n.status.has_changes || W.value), se = R(() => {
      var Z;
      return ((Z = c.value) == null ? void 0 : Z.warnings) || {
        models_without_sources: [],
        nodes_without_provenance: []
      };
    }), Q = R(
      () => se.value.models_without_sources.length
    ), we = R(
      () => se.value.nodes_without_provenance.length
    ), te = R(
      () => Q.value + we.value
    ), H = R(
      () => te.value > 0
    ), q = R(() => {
      const Z = [];
      if (Q.value > 0 && Z.push(`${Q.value} model${Q.value === 1 ? "" : "s"} missing download source`), we.value > 0) {
        const G = se.value.nodes_without_provenance.filter((ge) => ge.criticality === "optional").length, ve = we.value - G;
        ve > 0 && Z.push(`${ve} required node${ve === 1 ? "" : "s"} missing portable source`), G > 0 && Z.push(`${G} optional node${G === 1 ? "" : "s"} missing portable source`);
      }
      return Z;
    });
    async function _e() {
      v.value = !0, d.value = null;
      try {
        c.value = await f();
      } catch (Z) {
        d.value = Z instanceof Error ? Z.message : "Failed to check readiness";
      } finally {
        v.value = !1;
      }
    }
    async function ee() {
      await _e();
    }
    vt(
      () => [
        n.setupState,
        n.status.has_changes,
        n.status.workflows.new.length,
        n.status.workflows.modified.length,
        n.status.workflows.deleted.length,
        n.status.missing_models_count,
        n.status.comparison.is_synced,
        n.status.has_legacy_manager
      ],
      () => {
        n.setupState === "managed" && _e();
      },
      { immediate: !0 }
    );
    const me = R(() => Object.keys(n.status.git_changes.workflow_changes_detail).length), z = R(() => n.status.git_changes.has_other_changes), ae = R(() => {
      var Z;
      return ((Z = n.status.workflows.analyzed) == null ? void 0 : Z.filter((G) => G.status === "broken")) || [];
    }), Se = R(() => {
      var Z;
      return ((Z = n.status.workflows.analyzed) == null ? void 0 : Z.filter(
        (G) => G.has_path_sync_issues && !G.has_issues
      )) || [];
    }), pe = R(() => ae.value.length > 0);
    function Ne(Z) {
      const G = [
        />=\s*v?(\d+(?:\.\d+){1,3})/i,
        /requires\s+comfyui\s*v?(\d+(?:\.\d+){1,3})/i,
        /comfyui\s*v?(\d+(?:\.\d+){1,3})\+/i
      ];
      for (const ve of G) {
        const ge = Z.match(ve);
        if (ge != null && ge[1])
          return ge[1];
      }
      return null;
    }
    function ze(Z) {
      const G = Z.map(Ne).filter((ve) => !!ve);
      return [...new Set(G)];
    }
    function Ae(Z) {
      if (Z.length === 0) return "";
      if (Z.length === 1) return ` (>= ${Z[0]})`;
      const G = Z.slice(0, 2).map((ge) => `>= ${ge}`).join(", "), ve = Z.length > 2;
      return ` (${G}${ve ? ", ..." : ""})`;
    }
    function re(Z) {
      return Z.replace(/uninstallable node mappings?/gi, (G) => G.toLowerCase().endsWith("s") ? "community packages" : "community package").replace(/no installable package versions?/gi, "need community packages").replace(/\bare uninstallable\b/gi, "need community packages").replace(/\buninstallable\b/gi, "community-mapped");
    }
    function oe(Z) {
      const G = re(Z.issue_summary || "Has issues"), ve = /(?:>=|v?\d+\.\d+)/i.test(G), ge = ze(Z.version_gated_guidance || []);
      return (Z.nodes_version_gated_count || 0) > 0 && ge.length > 0 && !ve ? `${Z.name} — ${G} (needs ComfyUI ${ge.map((He) => `>= ${He}`).join(", ")})` : `${Z.name} — ${G}`;
    }
    const Le = R(() => ae.value.reduce(
      (Z, G) => Z + (G.nodes_version_gated_count || 0),
      0
    )), fe = R(() => {
      const Z = ae.value.flatMap(
        (G) => ze(G.version_gated_guidance || [])
      );
      return [...new Set(Z)];
    }), le = R(() => ae.value.reduce(
      (Z, G) => Z + (G.nodes_uninstallable_count || 0),
      0
    )), E = R(() => {
      const Z = [];
      return Le.value > 0 && Z.push(
        `${Le.value} require newer ComfyUI${Ae(fe.value)}`
      ), le.value > 0 && Z.push(`${le.value} need community packages`), Z.length > 0 ? `These workflows have missing, blocked, or actionable dependencies (${Z.join(", ")}) that must be resolved before they can run.` : "These workflows have missing dependencies that must be resolved before they can run.";
    }), A = R(() => pe.value || Se.value.length > 0 || n.status.missing_models_count > 0 || !n.status.comparison.is_synced || n.status.has_legacy_manager), ce = R(() => A.value || H.value || !!d.value), $e = R(() => {
      const Z = [];
      return n.status.workflows.new.length > 0 && Z.push(`${n.status.workflows.new.length} new`), n.status.workflows.modified.length > 0 && Z.push(`${n.status.workflows.modified.length} modified`), n.status.workflows.deleted.length > 0 && Z.push(`${n.status.workflows.deleted.length} deleted`), Z.length > 0 ? `${Z.join(", ")} workflow${Z.length === 1 && !Z[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), Te = R(() => {
      var ve, ge;
      const Z = [], G = n.status.comparison;
      return (ve = G.missing_nodes) != null && ve.length && Z.push(`${G.missing_nodes.length} missing node${G.missing_nodes.length === 1 ? "" : "s"}`), (ge = G.extra_nodes) != null && ge.length && Z.push(`${G.extra_nodes.length} untracked node${G.extra_nodes.length === 1 ? "" : "s"}`), Z.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${Z.join(" and ")}.`;
    }), xe = R(() => {
      var ve, ge;
      const Z = [], G = n.status.comparison;
      return (ve = G.extra_nodes) != null && ve.length && (G.extra_nodes.slice(0, 3).forEach((He) => {
        Z.push(`Untracked: ${He}`);
      }), G.extra_nodes.length > 3 && Z.push(`...and ${G.extra_nodes.length - 3} more untracked`)), (ge = G.missing_nodes) != null && ge.length && (G.missing_nodes.slice(0, 3).forEach((He) => {
        Z.push(`Missing: ${He}`);
      }), G.missing_nodes.length > 3 && Z.push(`...and ${G.missing_nodes.length - 3} more missing`)), Z;
    });
    return (Z, G) => (a(), i(B, null, [
      b(Ut, null, {
        header: h(() => [
          b(At, { title: "STATUS" })
        ]),
        content: h(() => [
          n.setupState === "no_workspace" ? (a(), L(Xt, {
            key: 0,
            severity: "info",
            icon: "🚀",
            title: "No ComfyGit workspace detected",
            description: "Set up a workspace to manage your ComfyUI environments, workflows, and models with version control."
          }, {
            actions: h(() => [
              b(Me, {
                variant: "primary",
                size: "sm",
                onClick: G[0] || (G[0] = (ve) => Z.$emit("start-setup"))
              }, {
                default: h(() => [...G[15] || (G[15] = [
                  S(" Start Setup ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : n.setupState === "unmanaged" ? (a(), L(Xt, {
            key: 1,
            severity: "warning",
            icon: "⚠",
            title: "Not in a managed environment",
            description: "You're running from an unmanaged ComfyUI installation. Switch to a managed environment to use ComfyGit features."
          }, {
            actions: h(() => [
              b(Me, {
                variant: "primary",
                size: "sm",
                onClick: G[1] || (G[1] = (ve) => Z.$emit("view-environments"))
              }, {
                default: h(() => [...G[16] || (G[16] = [
                  S(" View Environments ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : n.setupState === "empty_workspace" ? (a(), L(Xt, {
            key: 2,
            severity: "info",
            icon: "🏗",
            title: "Workspace ready - create your first environment",
            description: "Your workspace is set up. Create a managed environment to start using ComfyGit."
          }, {
            actions: h(() => [
              b(Me, {
                variant: "primary",
                size: "sm",
                onClick: G[2] || (G[2] = (ve) => Z.$emit("create-environment"))
              }, {
                default: h(() => [...G[17] || (G[17] = [
                  S(" Create Environment ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : y("", !0),
          s("div", {
            class: "health-section-wrapper",
            onMouseenter: G[4] || (G[4] = (ve) => r.value = !0),
            onMouseleave: G[5] || (G[5] = (ve) => r.value = !1)
          }, [
            s("div", Ph, [
              b(os, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: h(() => [...G[18] || (G[18] = [
                  S(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              b(Nd, { name: "fade" }, {
                default: h(() => [
                  r.value ? (a(), L(Me, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: p
                  }, {
                    default: h(() => [...G[19] || (G[19] = [
                      S(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : y("", !0)
                ]),
                _: 1
              })
            ]),
            b(jm, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, Yt({
              left: h(() => [
                e.status.workflows.new.length ? (a(), L(gs, {
                  key: 0,
                  icon: "●",
                  count: e.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : y("", !0),
                e.status.workflows.modified.length ? (a(), L(gs, {
                  key: 1,
                  icon: "●",
                  count: e.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : y("", !0),
                e.status.workflows.deleted.length ? (a(), L(gs, {
                  key: 2,
                  icon: "●",
                  count: e.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : y("", !0),
                b(gs, {
                  icon: "✓",
                  count: e.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: W.value
                }, null, 8, ["count", "separator"])
              ]),
              right: h(() => [
                e.status.git_changes.nodes_added.length ? (a(), L(gs, {
                  key: 0,
                  icon: "●",
                  count: e.status.git_changes.nodes_added.length,
                  label: e.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : y("", !0),
                e.status.git_changes.nodes_removed.length ? (a(), L(gs, {
                  key: 1,
                  icon: "●",
                  count: e.status.git_changes.nodes_removed.length,
                  label: e.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : y("", !0),
                e.status.git_changes.workflow_changes ? (a(), L(gs, {
                  key: 2,
                  icon: "●",
                  count: me.value,
                  label: me.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : y("", !0),
                z.value ? (a(), L(gs, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : y("", !0),
                D.value && !K.value && !z.value ? (a(), L(gs, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : y("", !0),
                D.value ? y("", !0) : (a(), L(gs, {
                  key: 5,
                  icon: "✓",
                  label: "No uncommitted changes",
                  variant: "ok"
                }))
              ]),
              _: 2
            }, [
              ue.value ? {
                name: "footer",
                fn: h(() => [
                  G[21] || (G[21] = s("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  s("div", Rh, [
                    s("span", Lh, m($e.value), 1),
                    b(Me, {
                      variant: "primary",
                      size: "sm",
                      onClick: G[3] || (G[3] = (ve) => Z.$emit("commit-changes"))
                    }, {
                      default: h(() => [...G[20] || (G[20] = [
                        S(" Commit ", -1)
                      ])]),
                      _: 1
                    })
                  ])
                ]),
                key: "0"
              } : void 0
            ]), 1024)
          ], 32),
          e.status.is_detached_head ? (a(), L(Xt, {
            key: 3,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: h(() => [
              b(Me, {
                variant: "primary",
                size: "sm",
                onClick: G[6] || (G[6] = (ve) => Z.$emit("create-branch"))
              }, {
                default: h(() => [...G[22] || (G[22] = [
                  S(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : y("", !0),
          s("div", Dh, [
            b(os, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: h(() => [...G[23] || (G[23] = [
                S(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            ce.value ? (a(), i(B, { key: 0 }, [
              ae.value.length > 0 ? (a(), L(Xt, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${ae.value.length} workflow${ae.value.length === 1 ? "" : "s"} can't run`,
                description: E.value,
                items: ae.value.map(oe)
              }, {
                actions: h(() => [
                  b(Me, {
                    variant: "primary",
                    size: "sm",
                    onClick: G[7] || (G[7] = (ve) => Z.$emit("view-workflows"))
                  }, {
                    default: h(() => [...G[24] || (G[24] = [
                      S(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "description", "items"])) : y("", !0),
              Se.value.length > 0 ? (a(), L(Xt, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${Se.value.length} workflow${Se.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: Se.value.map((ve) => `${ve.name} — ${ve.models_needing_path_sync_count} model path${ve.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: h(() => [
                  b(Me, {
                    variant: "primary",
                    size: "sm",
                    onClick: G[8] || (G[8] = (ve) => Z.$emit("view-workflows"))
                  }, {
                    default: h(() => [...G[25] || (G[25] = [
                      S(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : y("", !0),
              e.status.missing_models_count > 0 && !pe.value ? (a(), L(Xt, {
                key: 2,
                severity: "warning",
                icon: "⚠",
                title: `${e.status.missing_models_count} missing model${e.status.missing_models_count === 1 ? "" : "s"}`,
                description: "Some workflows reference models that are not found in the workspace index. This can happen after updating the model index."
              }, {
                actions: h(() => [
                  b(Me, {
                    variant: "primary",
                    size: "sm",
                    disabled: C.value,
                    onClick: O
                  }, {
                    default: h(() => [
                      S(m(C.value ? "Repairing..." : "Repair"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  b(Me, {
                    variant: "secondary",
                    size: "sm",
                    onClick: G[9] || (G[9] = (ve) => Z.$emit("view-workflows"))
                  }, {
                    default: h(() => [...G[26] || (G[26] = [
                      S(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : y("", !0),
              e.status.comparison.is_synced ? y("", !0) : (a(), L(Xt, {
                key: 3,
                severity: "error",
                icon: "⚠",
                title: "Environment not synced",
                description: Te.value,
                items: xe.value
              }, {
                actions: h(() => [
                  b(Me, {
                    variant: "secondary",
                    size: "sm",
                    onClick: p
                  }, {
                    default: h(() => [...G[27] || (G[27] = [
                      S(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  b(Me, {
                    variant: "primary",
                    size: "sm",
                    onClick: G[10] || (G[10] = (ve) => Z.$emit("view-nodes"))
                  }, {
                    default: h(() => [...G[28] || (G[28] = [
                      S(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["description", "items"])),
              e.status.has_legacy_manager ? (a(), L(Xt, {
                key: 4,
                severity: "warning",
                icon: "⚠",
                title: "Legacy ComfyUI-Manager detected",
                description: "The old ComfyUI-Manager extension is installed alongside ComfyGit. For proper environment tracking, use ComfyGit's built-in Manager instead and remove the legacy extension."
              }, {
                actions: h(() => [
                  b(Me, {
                    variant: "primary",
                    size: "sm",
                    onClick: G[11] || (G[11] = (ve) => Z.$emit("view-nodes"))
                  }, {
                    default: h(() => [...G[29] || (G[29] = [
                      S(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })) : y("", !0),
              H.value ? (a(), L(Xt, {
                key: 5,
                severity: "warning",
                icon: "!",
                title: "Environment reproducibility needs attention",
                description: "Some dependencies are missing source details needed to rebuild this environment elsewhere.",
                items: q.value
              }, {
                actions: h(() => [
                  b(Me, {
                    variant: "primary",
                    size: "sm",
                    onClick: G[12] || (G[12] = (ve) => u.value = !0)
                  }, {
                    default: h(() => [...G[30] || (G[30] = [
                      S(" Review Issues ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["items"])) : d.value ? (a(), L(Xt, {
                key: 6,
                severity: "warning",
                icon: "!",
                title: "Environment reproducibility check failed",
                description: d.value
              }, {
                actions: h(() => [
                  b(Me, {
                    variant: "secondary",
                    size: "sm",
                    loading: v.value,
                    onClick: _e
                  }, {
                    default: h(() => [...G[31] || (G[31] = [
                      S(" Retry ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"])
                ]),
                _: 1
              }, 8, ["description"])) : y("", !0)
            ], 64)) : ue.value ? (a(), i("span", Nh, "No issues")) : (a(), i("span", Oh, "No runtime issues detected"))
          ])
        ]),
        _: 1
      }),
      b(Uv, {
        show: l.value,
        status: e.status,
        "is-repairing": $.value,
        onClose: G[13] || (G[13] = (ve) => l.value = !1),
        onNavigateWorkflows: w,
        onNavigateNodes: g,
        onRepair: x
      }, null, 8, ["show", "status", "is-repairing"]),
      u.value && c.value ? (a(), L(Il, {
        key: 0,
        warnings: c.value.warnings,
        onClose: G[14] || (G[14] = (ve) => u.value = !1),
        onRevalidate: ee
      }, null, 8, ["warnings"])) : y("", !0)
    ], 64));
  }
}), Ah = /* @__PURE__ */ Ie(Uh, [["__scopeId", "data-v-f6b165fd"]]);
async function En(e, t) {
  const o = await Hs(e, t);
  if (!o.ok) {
    const n = await o.json().catch(() => ({}));
    throw new Error(n.error || n.message || `Request failed: ${o.status}`);
  }
  return o.json();
}
function zh() {
  async function e() {
    try {
      return await En("/v2/comfygit/orchestrator/health");
    } catch {
      return null;
    }
  }
  async function t() {
    try {
      return await En("/v2/comfygit/orchestrator/status");
    } catch {
      return null;
    }
  }
  async function o() {
    await En("/v2/comfygit/orchestrator/restart", { method: "POST" });
  }
  async function n() {
    await En("/v2/comfygit/orchestrator/kill", { method: "POST" });
  }
  return {
    checkHealth: e,
    getStatus: t,
    restart: o,
    kill: n
  };
}
const Fh = {
  key: 0,
  class: "base-title-count"
}, Vh = /* @__PURE__ */ Ce({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(e) {
    return (t, o) => (a(), L(kl(`h${e.level}`), {
      class: Be(["base-title", e.variant])
    }, {
      default: h(() => [
        nt(t.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (a(), i("span", Fh, "(" + m(e.count) + ")", 1)) : y("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), ao = /* @__PURE__ */ Ie(Vh, [["__scopeId", "data-v-5a01561d"]]), Bh = ["value", "disabled"], Wh = {
  key: 0,
  value: "",
  disabled: ""
}, Gh = ["value"], jh = {
  key: 0,
  class: "base-select-error"
}, Hh = /* @__PURE__ */ Ce({
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
      class: Be(["base-select-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      s("select", {
        value: e.modelValue,
        disabled: e.disabled,
        class: Be(["base-select", { error: !!e.error }]),
        onChange: l[0] || (l[0] = (r) => n.$emit("update:modelValue", r.target.value))
      }, [
        e.placeholder ? (a(), i("option", Wh, m(e.placeholder), 1)) : y("", !0),
        (a(!0), i(B, null, ye(e.options, (r) => (a(), i("option", {
          key: t(r),
          value: t(r)
        }, m(o(r)), 9, Gh))), 128))
      ], 42, Bh),
      e.error ? (a(), i("span", jh, m(e.error), 1)) : y("", !0)
    ], 2));
  }
}), Un = /* @__PURE__ */ Ie(Hh, [["__scopeId", "data-v-4996bfe0"]]), qh = { class: "popover-header" }, Kh = { class: "popover-title" }, Jh = { class: "popover-content" }, Qh = {
  key: 0,
  class: "popover-actions"
}, Yh = /* @__PURE__ */ Ce({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" },
    overlayZIndex: { default: 10004 }
  },
  emits: ["close"],
  setup(e) {
    return (t, o) => (a(), L(Jt, { to: "body" }, [
      e.show ? (a(), i("div", {
        key: 0,
        class: "popover-overlay",
        style: Lt({ zIndex: e.overlayZIndex }),
        onClick: o[2] || (o[2] = (n) => t.$emit("close"))
      }, [
        s("div", {
          class: "popover",
          style: Lt({ maxWidth: e.maxWidth }),
          onClick: o[1] || (o[1] = pt(() => {
          }, ["stop"]))
        }, [
          s("div", qh, [
            s("h4", Kh, m(e.title), 1),
            s("button", {
              class: "popover-close",
              onClick: o[0] || (o[0] = (n) => t.$emit("close"))
            }, "✕")
          ]),
          s("div", Jh, [
            nt(t.$slots, "content", {}, void 0)
          ]),
          t.$slots.actions ? (a(), i("div", Qh, [
            nt(t.$slots, "actions", {}, void 0)
          ])) : y("", !0)
        ], 4)
      ], 4)) : y("", !0)
    ]));
  }
}), is = /* @__PURE__ */ Ie(Yh, [["__scopeId", "data-v-7c1f5547"]]), Xh = { class: "detail-section" }, Zh = {
  key: 0,
  class: "empty-message"
}, ey = { class: "model-header" }, ty = { class: "model-name" }, sy = { class: "model-details" }, oy = { class: "model-row" }, ny = { class: "model-row" }, ay = { class: "label" }, ly = {
  key: 0,
  class: "model-row model-row-nodes"
}, iy = { class: "node-list" }, ry = ["onClick"], cy = {
  key: 1,
  class: "model-row"
}, uy = { class: "value" }, dy = {
  key: 2,
  class: "model-row"
}, my = { class: "value error" }, fy = {
  key: 0,
  class: "model-actions"
}, vy = { class: "detail-section" }, py = {
  key: 0,
  class: "empty-message"
}, gy = { class: "node-content" }, hy = { class: "node-main" }, yy = { class: "node-name" }, wy = { class: "node-badge" }, _y = {
  key: 0,
  class: "node-version"
}, ky = ["onClick"], by = {
  key: 2,
  class: "node-install-queued"
}, $y = {
  key: 0,
  class: "node-guidance"
}, Cy = /* @__PURE__ */ Ce({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(e, { emit: t }) {
    const o = e, n = t, { getWorkflowDetails: l, setModelImportance: r, openFileLocation: u, queueNodeInstall: c } = rt(), d = k(null), v = k(!1), f = k(null), p = k(!1), w = k({}), g = k(!1), _ = k(/* @__PURE__ */ new Set()), C = k(/* @__PURE__ */ new Set()), $ = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function x(te) {
      switch (te) {
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
    function I(te) {
      switch (te) {
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
    function M(te) {
      switch (te) {
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
    function P(te) {
      switch (te) {
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
    function O(te) {
      switch (te) {
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
    function F(te) {
      if (!te.loaded_by || te.loaded_by.length === 0) return [];
      const H = te.hash || te.filename;
      return _.value.has(H) ? te.loaded_by : te.loaded_by.slice(0, 3);
    }
    function W(te) {
      return _.value.has(te);
    }
    function D(te) {
      _.value.has(te) ? _.value.delete(te) : _.value.add(te), _.value = new Set(_.value);
    }
    async function K() {
      v.value = !0, f.value = null;
      try {
        d.value = await l(o.workflowName);
      } catch (te) {
        f.value = te instanceof Error ? te.message : "Failed to load workflow details";
      } finally {
        v.value = !1;
      }
    }
    function ue(te, H) {
      w.value[te] = H, p.value = !0;
    }
    async function se(te) {
      try {
        await u(te);
      } catch (H) {
        f.value = H instanceof Error ? H.message : "Failed to open file location";
      }
    }
    async function Q(te) {
      if (te.package_id)
        try {
          const H = te.latest_version || "latest";
          await c({
            id: te.package_id,
            version: H,
            selected_version: H,
            mode: "remote",
            channel: "default"
          }), C.value.add(te.package_id);
        } catch (H) {
          f.value = H instanceof Error ? H.message : "Failed to queue node install";
        }
    }
    async function we() {
      if (!p.value) {
        n("close");
        return;
      }
      v.value = !0, f.value = null;
      try {
        for (const [te, H] of Object.entries(w.value))
          await r(o.workflowName, te, H);
        n("refresh"), n("close");
      } catch (te) {
        f.value = te instanceof Error ? te.message : "Failed to save changes";
      } finally {
        v.value = !1;
      }
    }
    return at(K), (te, H) => (a(), i(B, null, [
      b($t, {
        title: `WORKFLOW DETAILS: ${e.workflowName}`,
        size: "lg",
        loading: v.value,
        error: f.value || void 0,
        onClose: H[4] || (H[4] = (q) => n("close"))
      }, {
        body: h(() => [
          d.value ? (a(), i(B, { key: 0 }, [
            s("section", Xh, [
              b(ao, { variant: "section" }, {
                default: h(() => [
                  S("MODELS USED (" + m(d.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              d.value.models.length === 0 ? (a(), i("div", Zh, " No models used in this workflow ")) : y("", !0),
              (a(!0), i(B, null, ye(d.value.models, (q) => {
                var _e;
                return a(), i("div", {
                  key: q.hash || q.filename,
                  class: "model-card"
                }, [
                  s("div", ey, [
                    H[6] || (H[6] = s("span", { class: "model-icon" }, "📦", -1)),
                    s("span", ty, m(q.filename), 1)
                  ]),
                  s("div", sy, [
                    s("div", oy, [
                      H[7] || (H[7] = s("span", { class: "label" }, "Status:", -1)),
                      s("span", {
                        class: Be(["value", x(q.status)])
                      }, m(I(q.status)), 3)
                    ]),
                    s("div", ny, [
                      s("span", ay, [
                        H[8] || (H[8] = S(" Importance: ", -1)),
                        b(ec, {
                          size: 14,
                          title: "About importance levels",
                          onClick: H[0] || (H[0] = (ee) => g.value = !0)
                        })
                      ]),
                      b(Un, {
                        "model-value": w.value[q.filename] || q.importance,
                        options: $,
                        "onUpdate:modelValue": (ee) => ue(q.filename, ee)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    q.loaded_by && q.loaded_by.length > 0 ? (a(), i("div", ly, [
                      H[9] || (H[9] = s("span", { class: "label" }, "Loaded by:", -1)),
                      s("div", iy, [
                        (a(!0), i(B, null, ye(F(q), (ee, me) => (a(), i("div", {
                          key: `${ee.node_id}-${me}`,
                          class: "node-reference"
                        }, m(ee.node_type) + " (Node #" + m(ee.node_id) + ") ", 1))), 128)),
                        q.loaded_by.length > 3 ? (a(), i("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (ee) => D(q.hash || q.filename)
                        }, m(W(q.hash || q.filename) ? "▼ Show less" : `▶ View all (${q.loaded_by.length})`), 9, ry)) : y("", !0)
                      ])
                    ])) : y("", !0),
                    q.size_mb ? (a(), i("div", cy, [
                      H[10] || (H[10] = s("span", { class: "label" }, "Size:", -1)),
                      s("span", uy, m(q.size_mb) + " MB", 1)
                    ])) : y("", !0),
                    q.has_category_mismatch ? (a(), i("div", dy, [
                      H[13] || (H[13] = s("span", { class: "label" }, "Location issue:", -1)),
                      s("span", my, [
                        H[11] || (H[11] = S(" In ", -1)),
                        s("code", null, m(q.actual_category) + "/", 1),
                        H[12] || (H[12] = S(" but loader needs ", -1)),
                        s("code", null, m((_e = q.expected_categories) == null ? void 0 : _e[0]) + "/", 1)
                      ])
                    ])) : y("", !0)
                  ]),
                  q.status !== "available" ? (a(), i("div", fy, [
                    q.status === "downloadable" ? (a(), L(Oe, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: H[1] || (H[1] = (ee) => n("resolve"))
                    }, {
                      default: h(() => [...H[14] || (H[14] = [
                        S(" Download ", -1)
                      ])]),
                      _: 1
                    })) : q.status === "category_mismatch" && q.file_path ? (a(), L(Oe, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (ee) => se(q.file_path)
                    }, {
                      default: h(() => [...H[15] || (H[15] = [
                        S(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : q.status !== "path_mismatch" ? (a(), L(Oe, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: H[2] || (H[2] = (ee) => n("resolve"))
                    }, {
                      default: h(() => [...H[16] || (H[16] = [
                        S(" Resolve ", -1)
                      ])]),
                      _: 1
                    })) : y("", !0)
                  ])) : y("", !0)
                ]);
              }), 128))
            ]),
            s("section", vy, [
              b(ao, { variant: "section" }, {
                default: h(() => [
                  S("NODES USED (" + m(d.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              d.value.nodes.length === 0 ? (a(), i("div", py, " No custom nodes used in this workflow ")) : y("", !0),
              (a(!0), i(B, null, ye(d.value.nodes, (q, _e) => (a(), i("div", {
                key: `${q.name}-${q.status}-${_e}`,
                class: "node-item"
              }, [
                s("span", {
                  class: Be(["node-status", M(q.status)])
                }, m(P(q.status)), 3),
                s("div", gy, [
                  s("div", hy, [
                    s("span", yy, m(q.name), 1),
                    s("span", wy, m(O(q.status)), 1),
                    q.version ? (a(), i("span", _y, "v" + m(q.version), 1)) : y("", !0),
                    q.status === "uninstallable" && q.package_id && !C.value.has(q.package_id) ? (a(), i("button", {
                      key: 1,
                      class: "node-install-link",
                      onClick: (ee) => Q(q)
                    }, " Install ", 8, ky)) : q.status === "uninstallable" && q.package_id && C.value.has(q.package_id) ? (a(), i("span", by, " Queued ")) : y("", !0)
                  ]),
                  q.guidance ? (a(), i("div", $y, m(q.guidance), 1)) : y("", !0)
                ])
              ]))), 128))
            ])
          ], 64)) : y("", !0)
        ]),
        footer: h(() => [
          b(Oe, {
            variant: "secondary",
            onClick: H[3] || (H[3] = (q) => n("close"))
          }, {
            default: h(() => [...H[17] || (H[17] = [
              S(" Close ", -1)
            ])]),
            _: 1
          }),
          p.value ? (a(), L(Oe, {
            key: 0,
            variant: "primary",
            onClick: we
          }, {
            default: h(() => [...H[18] || (H[18] = [
              S(" Save Changes ", -1)
            ])]),
            _: 1
          })) : y("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      b(is, {
        show: g.value,
        title: "Model Importance Levels",
        onClose: H[5] || (H[5] = (q) => g.value = !1)
      }, {
        content: h(() => [...H[19] || (H[19] = [
          s("ul", { class: "importance-info-list" }, [
            s("li", null, [
              s("strong", null, "Required"),
              S(" — Must have for workflow to run")
            ]),
            s("li", null, [
              s("strong", null, "Flexible"),
              S(" — Workflow adapts if missing")
            ]),
            s("li", null, [
              s("strong", null, "Optional"),
              S(" — Nice to have, can be skipped")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), xy = /* @__PURE__ */ Ie(Cy, [["__scopeId", "data-v-543076d9"]]), it = co({
  items: [],
  status: "idle"
});
let _s = null;
function lc() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function Ba(e) {
  return it.items.find((t) => t.id === e);
}
async function ho() {
  if (it.status === "downloading") return;
  const e = it.items.find((t) => t.status === "queued");
  if (!e) {
    it.status = "idle";
    return;
  }
  it.status = "downloading", e.status = "downloading", e.progress = 0, e.downloaded = 0;
  try {
    await Sy(e), e.status = "completed", e.progress = 100;
  } catch (t) {
    e.status = "failed", e.error = t instanceof Error ? t.message : "Download failed", e.retries++;
  } finally {
    it.status = "idle", ho();
  }
}
async function Sy(e) {
  return new Promise((t, o) => {
    _s && (_s.close(), _s = null);
    const n = new URLSearchParams({
      url: e.url,
      target_path: e.targetPath,
      filename: e.filename,
      workflow: e.workflow
    }), l = new EventSource(`/v2/comfygit/models/download-stream?${n}`);
    _s = l;
    let r = Date.now(), u = 0, c = Date.now(), d = !1;
    const v = 2e3, f = window.setInterval(() => {
      d || Date.now() - c > v && (e.speed = 0, e.eta = 0);
    }, 250), p = () => {
      window.clearInterval(f);
    };
    l.onmessage = (w) => {
      try {
        const g = JSON.parse(w.data);
        switch (g.type) {
          case "progress":
            e.downloaded = g.downloaded || 0, e.size = g.total || e.size, c = Date.now();
            const _ = c, C = (_ - r) / 1e3, $ = e.downloaded - u;
            if ($ > 0 && C > 0)
              if (e.speed = $ / C, r = _, u = e.downloaded, e.speed > 0 && e.size > 0) {
                const x = e.size - e.downloaded;
                e.eta = x / e.speed;
              } else
                e.eta = 0;
            e.size > 0 && (e.progress = Math.round(e.downloaded / e.size * 100));
            break;
          case "complete":
            d = !0, p(), l.close(), _s = null, t();
            break;
          case "error":
            d = !0, p(), l.close(), _s = null, o(new Error(g.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, l.onerror = () => {
      p(), l.close(), _s = null, d || o(new Error("Connection lost"));
    };
  });
}
async function Iy() {
  try {
    const e = await fetch("/v2/comfygit/models/pending-downloads");
    if (!e.ok) return;
    const t = await e.json();
    if (!t.pending_downloads || t.pending_downloads.length === 0) return;
    for (const o of t.pending_downloads) {
      if (it.items.some((l) => l.url === o.url && l.filename === o.filename))
        continue;
      const n = {
        id: lc(),
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
function Do() {
  function e($) {
    for (const x of $) {
      if (it.items.some(
        (P) => P.url === x.url && P.targetPath === x.targetPath && ["queued", "downloading", "paused", "completed"].includes(P.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${x.filename}`);
        continue;
      }
      const M = {
        id: lc(),
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
      it.items.push(M);
    }
    it.status === "idle" && ho();
  }
  async function t($) {
    const x = Ba($);
    if (x) {
      if (x.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(x.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        _s && (_s.close(), _s = null), x.status = "failed", x.error = "Cancelled by user", it.status = "idle", ho();
      } else if (x.status === "queued") {
        const I = it.items.findIndex((M) => M.id === $);
        I >= 0 && it.items.splice(I, 1);
      }
    }
  }
  function o($) {
    const x = Ba($);
    !x || x.status !== "failed" || (x.status = "queued", x.error = void 0, x.progress = 0, x.downloaded = 0, it.status === "idle" && ho());
  }
  function n($) {
    const x = Ba($);
    !x || x.status !== "paused" || (x.status = "queued", it.status === "idle" && ho());
  }
  function l() {
    const $ = it.items.filter((x) => x.status === "paused");
    for (const x of $)
      x.status = "queued";
    it.status === "idle" && ho();
  }
  function r($) {
    const x = it.items.findIndex((I) => I.id === $);
    x >= 0 && ["completed", "failed", "paused"].includes(it.items[x].status) && it.items.splice(x, 1);
  }
  function u() {
    it.items = it.items.filter(($) => $.status !== "completed");
  }
  function c() {
    it.items = it.items.filter(($) => $.status !== "failed");
  }
  const d = R(
    () => it.items.find(($) => $.status === "downloading")
  ), v = R(
    () => it.items.filter(($) => $.status === "queued")
  ), f = R(
    () => it.items.filter(($) => $.status === "completed")
  ), p = R(
    () => it.items.filter(($) => $.status === "failed")
  ), w = R(
    () => it.items.filter(($) => $.status === "paused")
  ), g = R(() => it.items.length > 0), _ = R(
    () => it.items.filter(($) => $.status === "queued" || $.status === "downloading").length
  ), C = R(
    () => it.items.some(($) => $.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: zn(it),
    // Computed
    currentDownload: d,
    queuedItems: v,
    completedItems: f,
    failedItems: p,
    pausedItems: w,
    hasItems: g,
    activeCount: _,
    hasPaused: C,
    // Actions
    addToQueue: e,
    cancelDownload: t,
    retryDownload: o,
    resumeDownload: n,
    resumeAllPaused: l,
    removeItem: r,
    clearCompleted: u,
    clearFailed: c,
    loadPendingDownloads: Iy
  };
}
function ic() {
  const e = k(null), t = k(null), o = k([]), n = k([]), l = k(!1), r = k(null);
  async function u(I, M) {
    const P = await Hs(I, M);
    if (!P.ok) {
      const O = await P.json().catch(() => ({})), F = O.error || O.message || `Request failed: ${P.status}`;
      throw new Error(F);
    }
    return P.json();
  }
  async function c(I) {
    l.value = !0, r.value = null;
    try {
      let M;
      return zo() || (M = await u(
        `/v2/comfygit/workflow/${I}/analyze`,
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
  async function d(I, M, P, O) {
    l.value = !0, r.value = null;
    try {
      let F;
      if (!zo()) {
        const W = Object.fromEntries(M), D = Object.fromEntries(P), K = O ? Array.from(O) : [];
        F = await u(
          `/v2/comfygit/workflow/${I}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: W,
              model_choices: D,
              skipped_packages: K
            })
          }
        );
      }
      return t.value = F, F;
    } catch (F) {
      const W = F instanceof Error ? F.message : "Unknown error occurred";
      throw r.value = W, F;
    } finally {
      l.value = !1;
    }
  }
  async function v(I, M = 10) {
    l.value = !0, r.value = null;
    try {
      let P;
      return zo() || (P = await u(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: I, limit: M })
        }
      )), o.value = P.results, P.results;
    } catch (P) {
      const O = P instanceof Error ? P.message : "Unknown error occurred";
      throw r.value = O, P;
    } finally {
      l.value = !1;
    }
  }
  async function f(I, M = 10) {
    l.value = !0, r.value = null;
    try {
      let P;
      return zo() || (P = await u(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: I, limit: M })
        }
      )), n.value = P.results, P.results;
    } catch (P) {
      const O = P instanceof Error ? P.message : "Unknown error occurred";
      throw r.value = O, P;
    } finally {
      l.value = !1;
    }
  }
  const p = co({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: [],
    nodesInstalled: []
  });
  function w() {
    p.phase = "idle", p.currentFile = void 0, p.currentFileIndex = void 0, p.totalFiles = void 0, p.bytesDownloaded = void 0, p.bytesTotal = void 0, p.completedFiles = [], p.nodesToInstall = [], p.nodesInstalled = [], p.installError = void 0, p.needsRestart = void 0, p.error = void 0, p.nodeInstallProgress = void 0;
  }
  async function g(I) {
    p.phase = "installing", p.nodesInstalled = [], p.installError = void 0, p.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      return zo(), await _(I);
    } catch (M) {
      const P = M instanceof Error ? M.message : "Failed to install nodes";
      throw p.installError = P, M;
    }
  }
  async function _(I) {
    var P;
    const M = await u(
      `/v2/comfygit/workflow/${I}/install`,
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
      const O = new Map(((P = M.failed) == null ? void 0 : P.map((F) => [F.node_id, F.error])) || []);
      for (let F = 0; F < p.nodesToInstall.length; F++) {
        const W = p.nodesToInstall[F], D = O.get(W);
        p.nodeInstallProgress.completedNodes.push({
          node_id: W,
          success: !D,
          error: D
        });
      }
    }
    return p.nodesInstalled = M.nodes_installed, p.needsRestart = M.nodes_installed.length > 0, M.failed && M.failed.length > 0 && (p.installError = `${M.failed.length} package(s) failed to install`), M;
  }
  async function C(I, M, P) {
    w(), p.phase = "resolving", r.value = null;
    const O = Object.fromEntries(M), F = Object.fromEntries(P);
    try {
      const W = await fetch(`/v2/comfygit/workflow/${I}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: O,
          model_choices: F
        })
      });
      if (!W.ok)
        throw new Error(`Request failed: ${W.status}`);
      if (!W.body)
        throw new Error("No response body");
      const D = W.body.getReader(), K = new TextDecoder();
      let ue = "";
      for (; ; ) {
        const { done: se, value: Q } = await D.read();
        if (se) break;
        ue += K.decode(Q, { stream: !0 });
        const we = ue.split(`

`);
        ue = we.pop() || "";
        for (const te of we) {
          if (!te.trim()) continue;
          const H = te.split(`
`);
          let q = "", _e = "";
          for (const ee of H)
            ee.startsWith("event: ") ? q = ee.slice(7) : ee.startsWith("data: ") && (_e = ee.slice(6));
          if (_e)
            try {
              const ee = JSON.parse(_e);
              $(q, ee);
            } catch (ee) {
              console.warn("Failed to parse SSE event:", ee);
            }
        }
      }
    } catch (W) {
      const D = W instanceof Error ? W.message : "Unknown error occurred";
      throw r.value = D, p.error = D, p.phase = "error", W;
    }
  }
  function $(I, M) {
    switch (I) {
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
  function x(I, M) {
    const { addToQueue: P } = Do(), O = M.filter((F) => F.url && F.target_path).map((F) => ({
      workflow: I,
      filename: F.filename,
      url: F.url,
      targetPath: F.target_path,
      size: F.size || 0,
      type: "model"
    }));
    return O.length > 0 && P(O), O.length;
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
    applyResolutionWithProgress: C,
    installNodes: g,
    searchNodes: v,
    searchModels: f,
    resetProgress: w,
    queueModelDownloads: x
  };
}
const Ey = { class: "resolution-stepper" }, Ty = { class: "stepper-header" }, My = ["onClick"], Py = {
  key: 0,
  class: "step-icon"
}, Ry = {
  key: 1,
  class: "step-number"
}, Ly = { class: "step-label" }, Dy = {
  key: 0,
  class: "step-connector"
}, Ny = { class: "stepper-content" }, Oy = /* @__PURE__ */ Ce({
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
      n("step-change", v);
    }
    return (v, f) => (a(), i("div", Ey, [
      s("div", Ty, [
        (a(!0), i(B, null, ye(e.steps, (p, w) => (a(), i("div", {
          key: p.id,
          class: Be(["step", {
            active: e.currentStep === p.id,
            completed: l(p.id),
            "in-progress": r(p.id),
            disabled: c(p.id)
          }]),
          onClick: (g) => d(p.id)
        }, [
          s("div", {
            class: Be(["step-indicator", u(p.id)])
          }, [
            l(p.id) ? (a(), i("span", Py, "✓")) : (a(), i("span", Ry, m(w + 1), 1))
          ], 2),
          s("div", Ly, m(p.label), 1),
          w < e.steps.length - 1 ? (a(), i("div", Dy)) : y("", !0)
        ], 10, My))), 128))
      ]),
      s("div", Ny, [
        nt(v.$slots, "default", {}, void 0)
      ])
    ]));
  }
}), Uy = /* @__PURE__ */ Ie(Oy, [["__scopeId", "data-v-2a7b3af8"]]), Ay = /* @__PURE__ */ Ce({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(e) {
    const t = e, o = R(() => t.confidence >= 0.9 ? "high" : t.confidence >= 0.7 ? "medium" : "low"), n = R(() => `confidence-${o.value}`), l = R(() => t.showPercentage ? `${Math.round(t.confidence * 100)}%` : o.value.charAt(0).toUpperCase() + o.value.slice(1));
    return (r, u) => (a(), i("span", {
      class: Be(["confidence-badge", n.value, e.size])
    }, m(l.value), 3));
  }
}), Jn = /* @__PURE__ */ Ie(Ay, [["__scopeId", "data-v-17ec4b80"]]), zy = { class: "node-info" }, Fy = { class: "node-info-text" }, Vy = { class: "item-body" }, By = {
  key: 0,
  class: "resolved-state"
}, Wy = {
  key: 1,
  class: "multiple-options"
}, Gy = {
  key: 0,
  class: "installed-packs-section"
}, jy = { class: "installed-packs-list" }, Hy = ["onClick"], qy = { class: "installed-pack-name" }, Ky = { class: "installed-pack-source" }, Jy = { class: "options-list" }, Qy = ["onClick"], Yy = ["name", "value", "checked", "onChange"], Xy = { class: "option-content" }, Zy = { class: "option-header" }, e1 = { class: "option-package-id" }, t1 = {
  key: 0,
  class: "option-title"
}, s1 = { class: "option-meta" }, o1 = {
  key: 0,
  class: "installed-badge"
}, n1 = { class: "action-buttons" }, a1 = {
  key: 2,
  class: "unresolved"
}, l1 = {
  key: 0,
  class: "installed-packs-section"
}, i1 = { class: "installed-packs-list" }, r1 = ["onClick"], c1 = { class: "installed-pack-name" }, u1 = { class: "installed-pack-source" }, d1 = {
  key: 1,
  class: "searching-state"
}, m1 = { class: "options-list" }, f1 = ["onClick"], v1 = ["name", "value"], p1 = { class: "option-content" }, g1 = { class: "option-header" }, h1 = { class: "option-package-id" }, y1 = {
  key: 0,
  class: "option-description"
}, w1 = { class: "option-meta" }, _1 = {
  key: 0,
  class: "installed-badge"
}, k1 = {
  key: 3,
  class: "unresolved-message"
}, b1 = { class: "action-buttons" }, $1 = /* @__PURE__ */ Ce({
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
    function l(f, p = 80) {
      return f.length <= p ? f : f.slice(0, p - 3) + "...";
    }
    const r = R(() => !!o.choice);
    R(() => {
      var f;
      return (f = o.choice) == null ? void 0 : f.action;
    }), R(() => {
      var f;
      return (f = o.choice) == null ? void 0 : f.package_id;
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
    function d(f) {
      n("option-selected", f);
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
    return (f, p) => (a(), i("div", {
      class: Be(["node-resolution-item", { selected: e.isSelected, ambiguous: e.hasMultipleOptions, resolved: r.value }])
    }, [
      s("div", zy, [
        s("span", Fy, [
          p[7] || (p[7] = S("Node type: ", -1)),
          s("code", null, m(e.nodeType), 1)
        ]),
        e.statusLabel ? (a(), i("span", {
          key: 0,
          class: Be(["status-badge", c.value])
        }, m(e.statusLabel), 3)) : y("", !0)
      ]),
      s("div", Vy, [
        r.value ? (a(), i("div", By, [
          b(Oe, {
            variant: "ghost",
            size: "sm",
            onClick: p[0] || (p[0] = (w) => n("clear-choice"))
          }, {
            default: h(() => [...p[8] || (p[8] = [
              S(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (a(), i("div", Wy, [
          u.value.length > 0 ? (a(), i("div", Gy, [
            p[9] || (p[9] = s("p", { class: "options-prompt" }, "Or map to an installed node pack:", -1)),
            s("div", jy, [
              (a(!0), i(B, null, ye(u.value, (w) => (a(), i("button", {
                key: w.package_id,
                type: "button",
                class: "installed-pack-chip",
                onClick: (g) => n("installed-pack-selected", w.package_id)
              }, [
                s("span", qy, m(w.package_id), 1),
                s("span", Ky, m(v(w.source)), 1)
              ], 8, Hy))), 128))
            ])
          ])) : y("", !0),
          p[13] || (p[13] = s("p", { class: "options-prompt" }, "Potential matches:", -1)),
          s("div", Jy, [
            (a(!0), i(B, null, ye(e.options, (w, g) => (a(), i("label", {
              key: w.package_id,
              class: Be(["option-card", { selected: e.selectedOptionIndex === g }]),
              onClick: (_) => d(g)
            }, [
              s("input", {
                type: "radio",
                name: `node-option-${e.nodeType}`,
                value: g,
                checked: e.selectedOptionIndex === g,
                onChange: (_) => d(g)
              }, null, 40, Yy),
              s("div", Xy, [
                s("div", Zy, [
                  s("span", e1, m(w.package_id), 1),
                  b(Jn, {
                    confidence: w.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                w.title && w.title !== w.package_id ? (a(), i("div", t1, m(w.title), 1)) : y("", !0),
                s("div", s1, [
                  w.is_installed ? (a(), i("span", o1, "Already Installed")) : y("", !0)
                ])
              ])
            ], 10, Qy))), 128))
          ]),
          s("div", n1, [
            b(Oe, {
              variant: "secondary",
              size: "sm",
              onClick: p[1] || (p[1] = (w) => n("search"))
            }, {
              default: h(() => [...p[10] || (p[10] = [
                S(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            b(Oe, {
              variant: "secondary",
              size: "sm",
              onClick: p[2] || (p[2] = (w) => n("manual-entry"))
            }, {
              default: h(() => [...p[11] || (p[11] = [
                S(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            b(Oe, {
              variant: "secondary",
              size: "sm",
              onClick: p[3] || (p[3] = (w) => n("mark-optional"))
            }, {
              default: h(() => [...p[12] || (p[12] = [
                S(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (a(), i("div", a1, [
          u.value.length > 0 ? (a(), i("div", l1, [
            p[14] || (p[14] = s("p", { class: "options-prompt" }, "Map to an installed node pack:", -1)),
            s("div", i1, [
              (a(!0), i(B, null, ye(u.value, (w) => (a(), i("button", {
                key: w.package_id,
                type: "button",
                class: "installed-pack-chip",
                onClick: (g) => n("installed-pack-selected", w.package_id)
              }, [
                s("span", c1, m(w.package_id), 1),
                s("span", u1, m(v(w.source)), 1)
              ], 8, r1))), 128))
            ])
          ])) : y("", !0),
          e.isSearching ? (a(), i("div", d1, [...p[15] || (p[15] = [
            s("span", { class: "searching-spinner" }, null, -1),
            s("span", null, "Searching registry...", -1)
          ])])) : e.searchResults && e.searchResults.length > 0 ? (a(), i(B, { key: 2 }, [
            p[16] || (p[16] = s("p", { class: "options-prompt" }, "Potential matches found:", -1)),
            s("div", m1, [
              (a(!0), i(B, null, ye(e.searchResults.slice(0, 5), (w, g) => (a(), i("label", {
                key: w.package_id,
                class: "option-card",
                onClick: (_) => n("search-result-selected", w)
              }, [
                s("input", {
                  type: "radio",
                  name: `search-result-${e.nodeType}`,
                  value: g
                }, null, 8, v1),
                s("div", p1, [
                  s("div", g1, [
                    s("span", h1, m(w.package_id), 1),
                    b(Jn, {
                      confidence: w.match_confidence,
                      size: "sm"
                    }, null, 8, ["confidence"])
                  ]),
                  w.description ? (a(), i("div", y1, m(l(w.description)), 1)) : y("", !0),
                  s("div", w1, [
                    w.is_installed ? (a(), i("span", _1, "Already Installed")) : y("", !0)
                  ])
                ])
              ], 8, f1))), 128))
            ])
          ], 64)) : (a(), i("div", k1, [...p[17] || (p[17] = [
            s("span", { class: "warning-icon" }, "⚠", -1),
            s("span", null, "No matching package found in registry", -1)
          ])])),
          s("div", b1, [
            b(Oe, {
              variant: "secondary",
              size: "sm",
              onClick: p[4] || (p[4] = (w) => n("search"))
            }, {
              default: h(() => {
                var w;
                return [
                  S(m((w = e.searchResults) != null && w.length ? "Refine Search" : "Search Registry"), 1)
                ];
              }),
              _: 1
            }),
            b(Oe, {
              variant: "secondary",
              size: "sm",
              onClick: p[5] || (p[5] = (w) => n("manual-entry"))
            }, {
              default: h(() => [...p[18] || (p[18] = [
                S(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            b(Oe, {
              variant: "secondary",
              size: "sm",
              onClick: p[6] || (p[6] = (w) => n("mark-optional"))
            }, {
              default: h(() => [...p[19] || (p[19] = [
                S(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), C1 = /* @__PURE__ */ Ie($1, [["__scopeId", "data-v-fb0bbf03"]]), x1 = { class: "item-navigator" }, S1 = { class: "nav-item-info" }, I1 = ["title"], E1 = { class: "nav-controls" }, T1 = { class: "nav-arrows" }, M1 = ["disabled"], P1 = ["disabled"], R1 = { class: "nav-position" }, L1 = /* @__PURE__ */ Ce({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(e, { emit: t }) {
    const o = t;
    return (n, l) => (a(), i("div", x1, [
      s("div", S1, [
        s("code", {
          class: "item-name",
          title: e.itemName
        }, m(e.itemName), 9, I1)
      ]),
      s("div", E1, [
        s("div", T1, [
          s("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === 0,
            onClick: l[0] || (l[0] = (r) => o("prev")),
            title: "Previous item"
          }, " ← ", 8, M1),
          s("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === e.totalItems - 1,
            onClick: l[1] || (l[1] = (r) => o("next")),
            title: "Next item"
          }, " → ", 8, P1)
        ]),
        s("span", R1, m(e.currentIndex + 1) + "/" + m(e.totalItems), 1)
      ])
    ]));
  }
}), rc = /* @__PURE__ */ Ie(L1, [["__scopeId", "data-v-74af7920"]]), D1 = { class: "node-resolution-step" }, N1 = {
  key: 0,
  class: "auto-resolved-section"
}, O1 = { class: "section-header" }, U1 = { class: "stat-badge" }, A1 = { class: "resolved-packages-list" }, z1 = { class: "package-info" }, F1 = { class: "package-id" }, V1 = { class: "node-count" }, B1 = { class: "package-actions" }, W1 = {
  key: 0,
  class: "status-badge install"
}, G1 = {
  key: 1,
  class: "status-badge skip"
}, j1 = ["onClick"], H1 = {
  key: 1,
  class: "section-divider"
}, q1 = { class: "step-header" }, K1 = { class: "stat-badge" }, J1 = {
  key: 1,
  class: "step-body"
}, Q1 = {
  key: 3,
  class: "empty-state"
}, Y1 = { class: "node-modal-body" }, X1 = { class: "node-search-results-container" }, Z1 = {
  key: 0,
  class: "node-search-results"
}, ew = ["onClick"], tw = { class: "node-result-header" }, sw = { class: "node-result-package-id" }, ow = {
  key: 0,
  class: "node-result-description"
}, nw = {
  key: 1,
  class: "node-empty-state"
}, aw = {
  key: 2,
  class: "node-empty-state"
}, lw = {
  key: 3,
  class: "node-empty-state"
}, iw = { class: "node-manual-entry-modal" }, rw = { class: "node-modal-body" }, cw = { class: "node-modal-actions" }, uw = /* @__PURE__ */ Ce({
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
    const o = e, n = t, { searchNodes: l } = ic(), r = k(0), u = k(!1), c = k(!1), d = k(""), v = k(""), f = k([]), p = k(!1), w = k(/* @__PURE__ */ new Map()), g = k(/* @__PURE__ */ new Set()), _ = k(!1);
    function C() {
      _.value && me(), _.value = !1;
    }
    const $ = R(() => o.nodes[r.value]), x = R(() => o.nodes.filter((re) => o.nodeChoices.has(re.node_type)).length), I = R(() => $.value ? w.value.get($.value.node_type) || [] : []), M = R(() => $.value ? g.value.has($.value.node_type) : !1);
    vt($, async (re) => {
      var oe;
      re && ((oe = re.options) != null && oe.length || w.value.has(re.node_type) || g.value.has(re.node_type) || o.nodeChoices.has(re.node_type) || await P(re.node_type));
    }, { immediate: !0 });
    async function P(re) {
      g.value.add(re);
      try {
        const oe = await l(re, 5);
        w.value.set(re, oe);
      } catch {
        w.value.set(re, []);
      } finally {
        g.value.delete(re);
      }
    }
    const O = R(() => o.autoResolvedPackages.filter((re) => !o.skippedPackages.has(re.package_id)).length);
    function F(re) {
      return o.skippedPackages.has(re);
    }
    function W(re) {
      n("package-skip", re);
    }
    const D = R(() => {
      var oe;
      if (!$.value) return "not-found";
      const re = o.nodeChoices.get($.value.node_type);
      if (re)
        switch (re.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (oe = $.value.options) != null && oe.length ? "ambiguous" : "not-found";
    }), K = R(() => {
      var oe;
      if (!$.value) return;
      const re = o.nodeChoices.get($.value.node_type);
      if (re)
        switch (re.action) {
          case "install":
            return re.package_id ? `→ ${re.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (oe = $.value.options) != null && oe.length ? `${$.value.options.length} matches` : "Not Found";
    });
    function ue(re) {
      re >= 0 && re < o.nodes.length && (r.value = re);
    }
    function se() {
      var re;
      for (let oe = r.value + 1; oe < o.nodes.length; oe++) {
        const Le = o.nodes[oe];
        if (!((re = o.nodeChoices) != null && re.has(Le.node_type))) {
          ue(oe);
          return;
        }
      }
    }
    function Q() {
      $.value && (n("mark-optional", $.value.node_type), Rt(() => se()));
    }
    function we() {
      $.value && (n("skip", $.value.node_type), Rt(() => se()));
    }
    function te(re) {
      $.value && (n("option-selected", $.value.node_type, re), Rt(() => se()));
    }
    function H() {
      $.value && n("clear-choice", $.value.node_type);
    }
    function q() {
      $.value && (d.value = $.value.node_type, f.value = I.value, u.value = !0, pe(d.value));
    }
    function _e() {
      v.value = "", c.value = !0;
    }
    function ee(re) {
      $.value && (n("manual-entry", $.value.node_type, re), Rt(() => se()));
    }
    function me() {
      u.value = !1, d.value = "", f.value = [];
    }
    function z() {
      c.value = !1, v.value = "";
    }
    let ae = null;
    function Se() {
      ae && clearTimeout(ae), ae = setTimeout(() => {
        pe(d.value);
      }, 300);
    }
    async function pe(re) {
      if (!re.trim()) {
        f.value = [];
        return;
      }
      p.value = !0;
      try {
        f.value = await l(re, 10);
      } catch {
        f.value = [];
      } finally {
        p.value = !1;
      }
    }
    function Ne(re) {
      $.value && (n("manual-entry", $.value.node_type, re.package_id), me(), Rt(() => se()));
    }
    function ze(re) {
      $.value && (n("manual-entry", $.value.node_type, re.package_id), Rt(() => se()));
    }
    function Ae() {
      !$.value || !v.value.trim() || (n("manual-entry", $.value.node_type, v.value.trim()), z(), Rt(() => se()));
    }
    return (re, oe) => {
      var Le, fe;
      return a(), i("div", D1, [
        e.autoResolvedPackages.length > 0 ? (a(), i("div", N1, [
          s("div", O1, [
            oe[6] || (oe[6] = s("div", { class: "section-info" }, [
              s("h4", { class: "section-title" }, "Packages to Install"),
              s("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            s("span", U1, m(O.value) + "/" + m(e.autoResolvedPackages.length) + " to install", 1)
          ]),
          s("div", A1, [
            (a(!0), i(B, null, ye(e.autoResolvedPackages, (le) => (a(), i("div", {
              key: le.package_id,
              class: "resolved-package-item"
            }, [
              s("div", z1, [
                s("code", F1, m(le.package_id), 1),
                s("span", V1, m(le.node_types_count) + " node type" + m(le.node_types_count > 1 ? "s" : ""), 1)
              ]),
              s("div", B1, [
                F(le.package_id) ? (a(), i("span", G1, " SKIPPED ")) : (a(), i("span", W1, " WILL INSTALL ")),
                s("button", {
                  class: "toggle-skip-btn",
                  onClick: (E) => W(le.package_id)
                }, m(F(le.package_id) ? "Include" : "Skip"), 9, j1)
              ])
            ]))), 128))
          ])
        ])) : y("", !0),
        e.autoResolvedPackages.length > 0 && e.nodes.length > 0 ? (a(), i("div", H1)) : y("", !0),
        e.nodes.length > 0 ? (a(), i(B, { key: 2 }, [
          s("div", q1, [
            oe[7] || (oe[7] = s("div", { class: "step-info" }, [
              s("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              s("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            s("span", K1, m(x.value) + "/" + m(e.nodes.length) + " resolved", 1)
          ]),
          $.value ? (a(), L(rc, {
            key: 0,
            "item-name": $.value.node_type,
            "current-index": r.value,
            "total-items": e.nodes.length,
            onPrev: oe[0] || (oe[0] = (le) => ue(r.value - 1)),
            onNext: oe[1] || (oe[1] = (le) => ue(r.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
          $.value ? (a(), i("div", J1, [
            b(C1, {
              "node-type": $.value.node_type,
              "has-multiple-options": !!((Le = $.value.options) != null && Le.length),
              options: $.value.options,
              choice: (fe = e.nodeChoices) == null ? void 0 : fe.get($.value.node_type),
              status: D.value,
              "status-label": K.value,
              "search-results": I.value,
              "is-searching": M.value,
              "installed-node-packs": e.installedNodePacks,
              onMarkOptional: Q,
              onSkip: we,
              onManualEntry: _e,
              onSearch: q,
              onOptionSelected: te,
              onClearChoice: H,
              onSearchResultSelected: ze,
              onInstalledPackSelected: ee
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label", "search-results", "is-searching", "installed-node-packs"])
          ])) : y("", !0)
        ], 64)) : y("", !0),
        e.nodes.length === 0 && e.autoResolvedPackages.length === 0 ? (a(), i("div", Q1, [...oe[8] || (oe[8] = [
          s("p", null, "No nodes need resolution.", -1)
        ])])) : y("", !0),
        (a(), L(Jt, { to: "body" }, [
          u.value ? (a(), i("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: oe[4] || (oe[4] = pt((le) => _.value = !0, ["self"])),
            onMouseup: pt(C, ["self"])
          }, [
            s("div", {
              class: "node-search-modal",
              onMousedown: oe[3] || (oe[3] = (le) => _.value = !1)
            }, [
              s("div", { class: "node-modal-header" }, [
                oe[9] || (oe[9] = s("h4", null, "Search Node Packages", -1)),
                s("button", {
                  class: "node-modal-close-btn",
                  onClick: me
                }, "✕")
              ]),
              s("div", Y1, [
                b(bt, {
                  modelValue: d.value,
                  "onUpdate:modelValue": oe[2] || (oe[2] = (le) => d.value = le),
                  placeholder: "Search by node type, package name...",
                  onInput: Se
                }, null, 8, ["modelValue"]),
                s("div", X1, [
                  f.value.length > 0 ? (a(), i("div", Z1, [
                    (a(!0), i(B, null, ye(f.value, (le) => (a(), i("div", {
                      key: le.package_id,
                      class: "node-search-result-item",
                      onClick: (E) => Ne(le)
                    }, [
                      s("div", tw, [
                        s("code", sw, m(le.package_id), 1),
                        le.match_confidence ? (a(), L(Jn, {
                          key: 0,
                          confidence: le.match_confidence,
                          size: "sm"
                        }, null, 8, ["confidence"])) : y("", !0)
                      ]),
                      le.description ? (a(), i("div", ow, m(le.description), 1)) : y("", !0)
                    ], 8, ew))), 128))
                  ])) : p.value ? (a(), i("div", nw, "Searching...")) : d.value ? (a(), i("div", aw, 'No packages found matching "' + m(d.value) + '"', 1)) : (a(), i("div", lw, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : y("", !0)
        ])),
        (a(), L(Jt, { to: "body" }, [
          c.value ? (a(), i("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: pt(z, ["self"])
          }, [
            s("div", iw, [
              s("div", { class: "node-modal-header" }, [
                oe[10] || (oe[10] = s("h4", null, "Enter Package Manually", -1)),
                s("button", {
                  class: "node-modal-close-btn",
                  onClick: z
                }, "✕")
              ]),
              s("div", rw, [
                b(bt, {
                  modelValue: v.value,
                  "onUpdate:modelValue": oe[5] || (oe[5] = (le) => v.value = le),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                s("div", cw, [
                  b(Oe, {
                    variant: "secondary",
                    onClick: z
                  }, {
                    default: h(() => [...oe[11] || (oe[11] = [
                      S("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  b(Oe, {
                    variant: "primary",
                    disabled: !v.value.trim(),
                    onClick: Ae
                  }, {
                    default: h(() => [...oe[12] || (oe[12] = [
                      S(" Add Package ", -1)
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
}), dw = /* @__PURE__ */ Ie(uw, [["__scopeId", "data-v-94c6a438"]]), mw = { class: "node-info" }, fw = { class: "node-info-text" }, vw = { class: "item-body" }, pw = {
  key: 0,
  class: "resolved-state"
}, gw = {
  key: 1,
  class: "multiple-options"
}, hw = { class: "options-list" }, yw = ["onClick"], ww = ["name", "value", "checked", "onChange"], _w = { class: "option-content" }, kw = { class: "option-header" }, bw = { class: "option-filename" }, $w = { class: "option-meta" }, Cw = { class: "option-size" }, xw = { class: "option-category" }, Sw = { class: "option-path" }, Iw = { class: "action-buttons" }, Ew = {
  key: 2,
  class: "unresolved"
}, Tw = { class: "action-buttons" }, Mw = /* @__PURE__ */ Ce({
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
      var d, v;
      return ((v = (d = o.choice) == null ? void 0 : d.selected_model) == null ? void 0 : v.filename) || "selected";
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
      const v = d / (1024 * 1024 * 1024);
      return v >= 1 ? `${v.toFixed(2)} GB` : `${(d / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (d, v) => (a(), i("div", {
      class: Be(["model-resolution-item", { resolved: l.value, ambiguous: e.hasMultipleOptions }])
    }, [
      s("div", mw, [
        s("span", fw, [
          v[7] || (v[7] = S("Used by: ", -1)),
          s("code", null, m(e.nodeType), 1)
        ]),
        e.statusLabel ? (a(), i("span", {
          key: 0,
          class: Be(["status-badge", r.value])
        }, m(e.statusLabel), 3)) : y("", !0)
      ]),
      s("div", vw, [
        l.value ? (a(), i("div", pw, [
          b(Oe, {
            variant: "ghost",
            size: "sm",
            onClick: v[0] || (v[0] = (f) => n("clear-choice"))
          }, {
            default: h(() => [...v[8] || (v[8] = [
              S(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (a(), i("div", gw, [
          v[12] || (v[12] = s("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          s("div", hw, [
            (a(!0), i(B, null, ye(e.options, (f, p) => (a(), i("label", {
              key: f.model.hash,
              class: Be(["option-card", { selected: e.selectedOptionIndex === p }]),
              onClick: (w) => u(p)
            }, [
              s("input", {
                type: "radio",
                name: `model-option-${e.filename}`,
                value: p,
                checked: e.selectedOptionIndex === p,
                onChange: (w) => u(p)
              }, null, 40, ww),
              s("div", _w, [
                s("div", kw, [
                  s("span", bw, m(f.model.filename), 1),
                  b(Jn, {
                    confidence: f.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                s("div", $w, [
                  s("span", Cw, m(c(f.model.size)), 1),
                  s("span", xw, m(f.model.category), 1)
                ]),
                s("div", Sw, m(f.model.relative_path), 1)
              ])
            ], 10, yw))), 128))
          ]),
          s("div", Iw, [
            b(Oe, {
              variant: "ghost",
              size: "sm",
              onClick: v[1] || (v[1] = (f) => n("search"))
            }, {
              default: h(() => [...v[9] || (v[9] = [
                S(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            b(Oe, {
              variant: "ghost",
              size: "sm",
              onClick: v[2] || (v[2] = (f) => n("download-url"))
            }, {
              default: h(() => [...v[10] || (v[10] = [
                S(" Download URL ", -1)
              ])]),
              _: 1
            }),
            b(Oe, {
              variant: "secondary",
              size: "sm",
              onClick: v[3] || (v[3] = (f) => n("mark-optional"))
            }, {
              default: h(() => [...v[11] || (v[11] = [
                S(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (a(), i("div", Ew, [
          v[16] || (v[16] = s("div", { class: "unresolved-message" }, [
            s("span", { class: "warning-icon" }, "⚠"),
            s("span", null, "Model not found in workspace")
          ], -1)),
          s("div", Tw, [
            b(Oe, {
              variant: "primary",
              size: "sm",
              onClick: v[4] || (v[4] = (f) => n("search"))
            }, {
              default: h(() => [...v[13] || (v[13] = [
                S(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            b(Oe, {
              variant: "secondary",
              size: "sm",
              onClick: v[5] || (v[5] = (f) => n("download-url"))
            }, {
              default: h(() => [...v[14] || (v[14] = [
                S(" Download URL ", -1)
              ])]),
              _: 1
            }),
            b(Oe, {
              variant: "secondary",
              size: "sm",
              onClick: v[6] || (v[6] = (f) => n("mark-optional"))
            }, {
              default: h(() => [...v[15] || (v[15] = [
                S(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), Pw = /* @__PURE__ */ Ie(Mw, [["__scopeId", "data-v-8a82fefa"]]), Rw = { class: "model-resolution-step" }, Lw = { class: "step-header" }, Dw = { class: "step-info" }, Nw = { class: "step-title" }, Ow = { class: "step-description" }, Uw = { class: "stat-badge" }, Aw = {
  key: 1,
  class: "step-body"
}, zw = {
  key: 2,
  class: "empty-state"
}, Fw = { class: "model-search-modal" }, Vw = { class: "model-modal-body" }, Bw = {
  key: 0,
  class: "model-search-results"
}, Ww = ["onClick"], Gw = { class: "model-result-header" }, jw = { class: "model-result-filename" }, Hw = { class: "model-result-meta" }, qw = { class: "model-result-category" }, Kw = { class: "model-result-size" }, Jw = {
  key: 0,
  class: "model-result-path"
}, Qw = {
  key: 1,
  class: "model-no-results"
}, Yw = {
  key: 2,
  class: "model-searching"
}, Xw = { class: "model-download-url-modal" }, Zw = { class: "model-modal-body" }, e0 = { class: "model-input-group" }, t0 = { class: "model-input-group" }, s0 = { class: "model-modal-actions" }, o0 = /* @__PURE__ */ Ce({
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
    function n(ee) {
      var me;
      return ee && ((me = o[ee]) == null ? void 0 : me[0]) || null;
    }
    const l = e, r = t, u = k(0), c = k(!1), d = k(!1), v = k(""), f = k(""), p = k(""), w = k([]), g = k(!1), _ = R(() => l.models[u.value]), C = R(() => l.models.some((ee) => ee.is_download_intent)), $ = R(() => l.models.filter(
      (ee) => l.modelChoices.has(ee.filename) || ee.is_download_intent
    ).length), x = R(() => {
      var me;
      if (!_.value) return "";
      const ee = n((me = _.value.reference) == null ? void 0 : me.node_type);
      return ee ? `${ee}/${_.value.filename}` : "";
    }), I = R(() => {
      var me;
      if (!_.value) return "not-found";
      const ee = l.modelChoices.get(_.value.filename);
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
      return _.value.is_download_intent ? "download" : (me = _.value.options) != null && me.length ? "ambiguous" : "not-found";
    }), M = R(() => {
      var me, z;
      if (!_.value) return;
      const ee = l.modelChoices.get(_.value.filename);
      if (ee)
        switch (ee.action) {
          case "select":
            return (me = ee.selected_model) != null && me.filename ? `→ ${ee.selected_model.filename}` : "Selected";
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
    function P(ee) {
      ee >= 0 && ee < l.models.length && (u.value = ee);
    }
    function O() {
      var ee;
      for (let me = u.value + 1; me < l.models.length; me++) {
        const z = l.models[me];
        if (!z.is_download_intent && !((ee = l.modelChoices) != null && ee.has(z.filename))) {
          P(me);
          return;
        }
      }
    }
    function F() {
      _.value && (r("mark-optional", _.value.filename), Rt(() => O()));
    }
    function W() {
      _.value && (r("skip", _.value.filename), Rt(() => O()));
    }
    function D(ee) {
      _.value && (r("option-selected", _.value.filename, ee), Rt(() => O()));
    }
    function K() {
      _.value && r("clear-choice", _.value.filename);
    }
    function ue() {
      _.value && (v.value = _.value.filename, c.value = !0);
    }
    function se() {
      _.value && (f.value = _.value.download_source || "", p.value = _.value.target_path || x.value, d.value = !0);
    }
    function Q() {
      c.value = !1, v.value = "", w.value = [];
    }
    function we() {
      d.value = !1, f.value = "", p.value = "";
    }
    function te() {
      g.value = !0, setTimeout(() => {
        g.value = !1;
      }, 300);
    }
    function H(ee) {
      _.value && (Q(), Rt(() => O()));
    }
    function q() {
      !_.value || !f.value.trim() || (r("download-url", _.value.filename, f.value.trim(), p.value.trim() || void 0), we(), Rt(() => O()));
    }
    function _e(ee) {
      if (!ee) return "Unknown";
      const me = ee / (1024 * 1024 * 1024);
      return me >= 1 ? `${me.toFixed(2)} GB` : `${(ee / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (ee, me) => {
      var z, ae, Se;
      return a(), i("div", Rw, [
        s("div", Lw, [
          s("div", Dw, [
            s("h3", Nw, m(C.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            s("p", Ow, m(C.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          s("span", Uw, m($.value) + "/" + m(e.models.length) + " resolved", 1)
        ]),
        _.value ? (a(), L(rc, {
          key: 0,
          "item-name": _.value.filename,
          "current-index": u.value,
          "total-items": e.models.length,
          onPrev: me[0] || (me[0] = (pe) => P(u.value - 1)),
          onNext: me[1] || (me[1] = (pe) => P(u.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
        _.value ? (a(), i("div", Aw, [
          b(Pw, {
            filename: _.value.filename,
            "node-type": ((z = _.value.reference) == null ? void 0 : z.node_type) || "Unknown",
            "has-multiple-options": !!((ae = _.value.options) != null && ae.length),
            options: _.value.options,
            choice: (Se = e.modelChoices) == null ? void 0 : Se.get(_.value.filename),
            status: I.value,
            "status-label": M.value,
            onMarkOptional: F,
            onSkip: W,
            onDownloadUrl: se,
            onSearch: ue,
            onOptionSelected: D,
            onClearChoice: K
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (a(), i("div", zw, [...me[5] || (me[5] = [
          s("p", null, "No models need resolution.", -1)
        ])])),
        (a(), L(Jt, { to: "body" }, [
          c.value ? (a(), i("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: pt(Q, ["self"])
          }, [
            s("div", Fw, [
              s("div", { class: "model-modal-header" }, [
                me[6] || (me[6] = s("h4", null, "Search Workspace Models", -1)),
                s("button", {
                  class: "model-modal-close-btn",
                  onClick: Q
                }, "✕")
              ]),
              s("div", Vw, [
                b(bt, {
                  modelValue: v.value,
                  "onUpdate:modelValue": me[2] || (me[2] = (pe) => v.value = pe),
                  placeholder: "Search by filename, category...",
                  onInput: te
                }, null, 8, ["modelValue"]),
                w.value.length > 0 ? (a(), i("div", Bw, [
                  (a(!0), i(B, null, ye(w.value, (pe) => (a(), i("div", {
                    key: pe.hash,
                    class: "model-search-result-item",
                    onClick: (Ne) => H()
                  }, [
                    s("div", Gw, [
                      s("code", jw, m(pe.filename), 1)
                    ]),
                    s("div", Hw, [
                      s("span", qw, m(pe.category), 1),
                      s("span", Kw, m(_e(pe.size)), 1)
                    ]),
                    pe.relative_path ? (a(), i("div", Jw, m(pe.relative_path), 1)) : y("", !0)
                  ], 8, Ww))), 128))
                ])) : v.value && !g.value ? (a(), i("div", Qw, ' No models found matching "' + m(v.value) + '" ', 1)) : y("", !0),
                g.value ? (a(), i("div", Yw, "Searching...")) : y("", !0)
              ])
            ])
          ])) : y("", !0)
        ])),
        (a(), L(Jt, { to: "body" }, [
          d.value ? (a(), i("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: pt(we, ["self"])
          }, [
            s("div", Xw, [
              s("div", { class: "model-modal-header" }, [
                me[7] || (me[7] = s("h4", null, "Enter Download URL", -1)),
                s("button", {
                  class: "model-modal-close-btn",
                  onClick: we
                }, "✕")
              ]),
              s("div", Zw, [
                s("div", e0, [
                  me[8] || (me[8] = s("label", { class: "model-input-label" }, "Download URL", -1)),
                  b(bt, {
                    modelValue: f.value,
                    "onUpdate:modelValue": me[3] || (me[3] = (pe) => f.value = pe),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                s("div", t0, [
                  me[9] || (me[9] = s("label", { class: "model-input-label" }, "Host Path", -1)),
                  b(bt, {
                    modelValue: p.value,
                    "onUpdate:modelValue": me[4] || (me[4] = (pe) => p.value = pe),
                    placeholder: x.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                s("div", s0, [
                  b(Oe, {
                    variant: "secondary",
                    onClick: we
                  }, {
                    default: h(() => [...me[10] || (me[10] = [
                      S("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  b(Oe, {
                    variant: "primary",
                    disabled: !f.value.trim() || !p.value.trim(),
                    onClick: q
                  }, {
                    default: h(() => [...me[11] || (me[11] = [
                      S(" Queue Download ", -1)
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
}), n0 = /* @__PURE__ */ Ie(o0, [["__scopeId", "data-v-5c700bfa"]]), a0 = { class: "applying-step" }, l0 = {
  key: 0,
  class: "phase-content"
}, i0 = {
  key: 1,
  class: "phase-content"
}, r0 = { class: "phase-description" }, c0 = { class: "overall-progress" }, u0 = { class: "progress-bar" }, d0 = { class: "progress-label" }, m0 = { class: "install-list" }, f0 = { class: "install-icon" }, v0 = { key: 0 }, p0 = {
  key: 1,
  class: "spinner"
}, g0 = { key: 2 }, h0 = { key: 3 }, y0 = {
  key: 0,
  class: "install-error"
}, w0 = {
  key: 2,
  class: "phase-content"
}, _0 = { class: "phase-header" }, k0 = { class: "phase-title" }, b0 = { class: "completion-summary" }, $0 = {
  key: 0,
  class: "summary-item success"
}, C0 = { class: "summary-text" }, x0 = {
  key: 1,
  class: "summary-item error"
}, S0 = { class: "summary-text" }, I0 = {
  key: 2,
  class: "failed-list"
}, E0 = { class: "failed-node-id" }, T0 = { class: "failed-error" }, M0 = {
  key: 4,
  class: "summary-item success"
}, P0 = {
  key: 5,
  class: "restart-prompt"
}, R0 = {
  key: 3,
  class: "phase-content error"
}, L0 = { class: "error-message" }, D0 = /* @__PURE__ */ Ce({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(e) {
    const t = e, o = R(() => {
      var v, f;
      const c = ((v = t.progress.nodeInstallProgress) == null ? void 0 : v.totalNodes) || t.progress.nodesToInstall.length;
      if (!c) return 0;
      const d = ((f = t.progress.nodeInstallProgress) == null ? void 0 : f.completedNodes.length) ?? 0;
      return Math.round(d / c * 100);
    }), n = R(() => {
      var c;
      return ((c = t.progress.nodeInstallProgress) == null ? void 0 : c.completedNodes.filter((d) => !d.success)) || [];
    }), l = R(() => n.value.length > 0);
    function r(c, d) {
      var f, p;
      const v = (f = t.progress.nodeInstallProgress) == null ? void 0 : f.completedNodes.find((w) => w.node_id === c);
      return v ? v.success ? "complete" : "failed" : ((p = t.progress.nodeInstallProgress) == null ? void 0 : p.currentIndex) === d ? "installing" : "pending";
    }
    function u(c) {
      var d, v;
      return (v = (d = t.progress.nodeInstallProgress) == null ? void 0 : d.completedNodes.find((f) => f.node_id === c)) == null ? void 0 : v.error;
    }
    return (c, d) => {
      var v, f, p, w;
      return a(), i("div", a0, [
        e.progress.phase === "resolving" ? (a(), i("div", l0, [...d[2] || (d[2] = [
          s("div", { class: "phase-header" }, [
            s("div", { class: "loading-spinner" }),
            s("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          s("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : e.progress.phase === "installing" ? (a(), i("div", i0, [
          d[3] || (d[3] = s("div", { class: "phase-header" }, [
            s("div", { class: "loading-spinner" }),
            s("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          s("p", r0, " Installing " + m((((v = e.progress.nodeInstallProgress) == null ? void 0 : v.currentIndex) ?? 0) + 1) + " of " + m(((f = e.progress.nodeInstallProgress) == null ? void 0 : f.totalNodes) ?? e.progress.nodesToInstall.length) + " packages... ", 1),
          s("div", c0, [
            s("div", u0, [
              s("div", {
                class: "progress-fill",
                style: Lt({ width: `${o.value}%` })
              }, null, 4)
            ]),
            s("span", d0, m(((p = e.progress.nodeInstallProgress) == null ? void 0 : p.completedNodes.length) ?? 0) + " / " + m(((w = e.progress.nodeInstallProgress) == null ? void 0 : w.totalNodes) ?? e.progress.nodesToInstall.length), 1)
          ]),
          s("div", m0, [
            (a(!0), i(B, null, ye(e.progress.nodesToInstall, (g, _) => (a(), i("div", {
              key: g,
              class: Be(["install-item", r(g, _)])
            }, [
              s("span", f0, [
                r(g, _) === "pending" ? (a(), i("span", v0, "○")) : r(g, _) === "installing" ? (a(), i("span", p0, "◌")) : r(g, _) === "complete" ? (a(), i("span", g0, "✓")) : r(g, _) === "failed" ? (a(), i("span", h0, "✗")) : y("", !0)
              ]),
              s("code", null, m(g), 1),
              u(g) ? (a(), i("span", y0, m(u(g)), 1)) : y("", !0)
            ], 2))), 128))
          ])
        ])) : e.progress.phase === "complete" ? (a(), i("div", w0, [
          s("div", _0, [
            s("span", {
              class: Be(["phase-icon", l.value ? "warning" : "success"])
            }, m(l.value ? "⚠" : "✓"), 3),
            s("h3", k0, m(l.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          s("div", b0, [
            e.progress.nodesInstalled.length > 0 ? (a(), i("div", $0, [
              d[4] || (d[4] = s("span", { class: "summary-icon" }, "✓", -1)),
              s("span", C0, m(e.progress.nodesInstalled.length) + " node package" + m(e.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : y("", !0),
            n.value.length > 0 ? (a(), i("div", x0, [
              d[5] || (d[5] = s("span", { class: "summary-icon" }, "✗", -1)),
              s("span", S0, m(n.value.length) + " package" + m(n.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : y("", !0),
            n.value.length > 0 ? (a(), i("div", I0, [
              (a(!0), i(B, null, ye(n.value, (g) => (a(), i("div", {
                key: g.node_id,
                class: "failed-item"
              }, [
                s("code", E0, m(g.node_id), 1),
                s("span", T0, m(g.error), 1)
              ]))), 128))
            ])) : y("", !0),
            n.value.length > 0 ? (a(), i("button", {
              key: 3,
              class: "retry-button",
              onClick: d[0] || (d[0] = (g) => c.$emit("retry-failed"))
            }, " Retry Failed (" + m(n.value.length) + ") ", 1)) : y("", !0),
            l.value ? y("", !0) : (a(), i("div", M0, [...d[6] || (d[6] = [
              s("span", { class: "summary-icon" }, "✓", -1),
              s("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            d[8] || (d[8] = s("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            e.progress.needsRestart ? (a(), i("div", P0, [
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
        ])) : e.progress.phase === "error" ? (a(), i("div", R0, [
          d[9] || (d[9] = s("div", { class: "phase-header" }, [
            s("span", { class: "phase-icon error" }, "✗"),
            s("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          s("p", L0, m(e.progress.error), 1)
        ])) : y("", !0)
      ]);
    };
  }
}), N0 = /* @__PURE__ */ Ie(D0, [["__scopeId", "data-v-5efaae58"]]), O0 = {
  key: 0,
  class: "loading-state"
}, U0 = {
  key: 1,
  class: "wizard-content"
}, A0 = {
  key: 0,
  class: "step-content"
}, z0 = { class: "analysis-summary" }, F0 = { class: "analysis-header" }, V0 = { class: "summary-description" }, B0 = { class: "stats-grid" }, W0 = { class: "stat-card" }, G0 = { class: "stat-items" }, j0 = {
  key: 0,
  class: "stat-item success"
}, H0 = { class: "stat-count" }, q0 = {
  key: 1,
  class: "stat-item info"
}, K0 = { class: "stat-count" }, J0 = {
  key: 2,
  class: "stat-item warning"
}, Q0 = { class: "stat-count" }, Y0 = {
  key: 3,
  class: "stat-item warning"
}, X0 = { class: "stat-count" }, Z0 = {
  key: 4,
  class: "stat-item warning"
}, e_ = { class: "stat-count" }, t_ = {
  key: 5,
  class: "stat-item error"
}, s_ = { class: "stat-count" }, o_ = { class: "stat-card" }, n_ = { class: "stat-items" }, a_ = { class: "stat-item success" }, l_ = { class: "stat-count" }, i_ = {
  key: 0,
  class: "stat-item info"
}, r_ = { class: "stat-count" }, c_ = {
  key: 1,
  class: "stat-item warning"
}, u_ = { class: "stat-count" }, d_ = {
  key: 2,
  class: "stat-item warning"
}, m_ = { class: "stat-count" }, f_ = {
  key: 3,
  class: "stat-item error"
}, v_ = { class: "stat-count" }, p_ = {
  key: 0,
  class: "status-message warning"
}, g_ = { class: "status-text" }, h_ = {
  key: 1,
  class: "status-message warning"
}, y_ = { class: "status-text" }, w_ = {
  key: 2,
  class: "status-message info"
}, __ = { class: "status-text" }, k_ = {
  key: 3,
  class: "status-message info"
}, b_ = { class: "status-text" }, $_ = {
  key: 4,
  class: "status-message info"
}, C_ = { class: "status-text" }, x_ = {
  key: 5,
  class: "status-message warning"
}, S_ = { class: "status-text" }, I_ = {
  key: 6,
  class: "status-message success"
}, E_ = {
  key: 7,
  class: "category-mismatch-section"
}, T_ = { class: "mismatch-list" }, M_ = { class: "mismatch-path" }, P_ = { class: "mismatch-target" }, R_ = {
  key: 8,
  class: "category-mismatch-section"
}, L_ = { class: "mismatch-list" }, D_ = { class: "mismatch-path" }, N_ = { class: "status-text" }, O_ = {
  key: 1,
  class: "step-content node-step-content"
}, U_ = {
  key: 0,
  class: "community-node-section"
}, A_ = { class: "community-node-header" }, z_ = { class: "community-node-title" }, F_ = { class: "community-node-list" }, V_ = { class: "community-node-info" }, B_ = { class: "community-node-heading" }, W_ = { class: "item-name" }, G_ = { class: "community-node-package" }, j_ = { class: "community-node-meta" }, H_ = { class: "community-node-guidance" }, q_ = { key: 0 }, K_ = { class: "community-choice-status" }, J_ = { class: "community-node-actions" }, Q_ = {
  key: 3,
  class: "step-content"
}, Y_ = { class: "review-summary" }, X_ = { class: "review-stats" }, Z_ = { class: "review-stat" }, ek = { class: "stat-value" }, tk = { class: "review-stat" }, sk = { class: "stat-value" }, ok = { class: "review-stat" }, nk = { class: "stat-value" }, ak = { class: "review-stat" }, lk = { class: "stat-value" }, ik = {
  key: 0,
  class: "review-section"
}, rk = { class: "section-title" }, ck = { class: "review-items" }, uk = { class: "item-name" }, dk = { class: "item-choice" }, mk = {
  key: 0,
  class: "choice-badge install"
}, fk = {
  key: 1,
  class: "choice-badge skip"
}, vk = {
  key: 1,
  class: "review-section"
}, pk = { class: "section-title" }, gk = { class: "review-items" }, hk = { class: "item-name" }, yk = { class: "item-choice" }, wk = {
  key: 0,
  class: "choice-badge install"
}, _k = {
  key: 1,
  class: "choice-badge optional"
}, kk = {
  key: 2,
  class: "choice-badge skip"
}, bk = {
  key: 2,
  class: "review-section"
}, $k = { class: "section-title" }, Ck = { class: "review-items" }, xk = { class: "item-name" }, Sk = { class: "item-choice" }, Ik = {
  key: 0,
  class: "choice-badge install"
}, Ek = {
  key: 1,
  class: "choice-badge optional"
}, Tk = {
  key: 2,
  class: "choice-badge skip"
}, Mk = {
  key: 1,
  class: "choice-badge pending"
}, Pk = {
  key: 3,
  class: "review-section"
}, Rk = { class: "section-title" }, Lk = { class: "review-items download-details" }, Dk = { class: "download-info" }, Nk = { class: "item-name" }, Ok = { class: "download-meta" }, Uk = { class: "download-path" }, Ak = ["title"], zk = {
  key: 4,
  class: "review-section"
}, Fk = { class: "section-title" }, Vk = { class: "review-items" }, Bk = { class: "item-name" }, Wk = { class: "item-choice" }, Gk = {
  key: 0,
  class: "choice-badge install"
}, jk = {
  key: 1,
  class: "choice-badge download"
}, Hk = {
  key: 2,
  class: "choice-badge optional"
}, qk = {
  key: 3,
  class: "choice-badge skip"
}, Kk = {
  key: 4,
  class: "choice-badge skip"
}, Jk = {
  key: 1,
  class: "choice-badge download"
}, Qk = {
  key: 2,
  class: "choice-badge pending"
}, Yk = {
  key: 5,
  class: "no-choices"
}, Xk = /* @__PURE__ */ Ce({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(e, { emit: t }) {
    const o = e, n = t, { analyzeWorkflow: l, applyResolution: r, installNodes: u, queueModelDownloads: c, progress: d, resetProgress: v } = ic(), { loadPendingDownloads: f } = Do(), { openFileLocation: p, queueNodeInstall: w, getNodes: g } = rt(), _ = k(null), C = k([]), $ = k(!1), x = k(!1), I = k(null), M = k("analysis"), P = k([]), O = k(/* @__PURE__ */ new Map()), F = k(/* @__PURE__ */ new Map()), W = k(/* @__PURE__ */ new Set()), D = R(() => {
      const ne = [
        { id: "analysis", label: "Analysis" }
      ];
      return (te.value || _e.value || ee.value) && ne.push({ id: "nodes", label: "Nodes" }), H.value && ne.push({ id: "models", label: "Models" }), ne.push({ id: "review", label: "Review" }), M.value === "applying" && ne.push({ id: "applying", label: "Applying" }), ne;
    }), K = R(() => _.value ? _.value.stats.needs_user_input : !1), ue = R(() => _.value ? _.value.nodes.version_gated || [] : []), se = R(() => _.value ? _.value.nodes.uninstallable || [] : []), Q = R(() => se.value.filter((ne) => {
      var U;
      return !!((U = ne.package) != null && U.package_id);
    })), we = R(() => ue.value.length > 0), te = R(() => _.value ? _.value.nodes.unresolved.length > 0 || _.value.nodes.ambiguous.length > 0 : !1), H = R(() => _.value ? _.value.models.unresolved.length > 0 || _.value.models.ambiguous.length > 0 : !1), q = R(() => _.value ? _.value.stats.download_intents > 0 : !1), _e = R(() => _.value ? _.value.stats.nodes_needing_installation > 0 : !1), ee = R(() => Q.value.length > 0), me = R(() => _.value ? _.value.nodes.resolved.length : 0), z = R(() => _.value ? _.value.models.resolved.filter((ne) => ne.has_category_mismatch) : []), ae = R(() => z.value.length > 0), Se = R(() => te.value || _e.value || ee.value ? "nodes" : H.value ? "models" : "review"), pe = R(() => {
      if (!_.value) return [];
      const ne = _.value.nodes.resolved.filter((de) => !de.is_installed), U = /* @__PURE__ */ new Set();
      return ne.filter((de) => U.has(de.package.package_id) ? !1 : (U.add(de.package.package_id), !0));
    }), Ne = R(() => {
      if (!_.value) return [];
      const ne = _.value.nodes.resolved.filter((de) => !de.is_installed), U = /* @__PURE__ */ new Map();
      for (const de of ne) {
        const je = U.get(de.package.package_id);
        je ? je.node_types_count++ : U.set(de.package.package_id, {
          package_id: de.package.package_id,
          title: de.package.title,
          node_types_count: 1
        });
      }
      return Array.from(U.values());
    }), ze = R(() => pe.value.filter((ne) => !W.value.has(ne.package.package_id))), Ae = R(() => _.value ? _.value.models.resolved.filter(
      (ne) => ne.match_type === "download_intent" || ne.match_type === "property_download_intent"
    ).map((ne) => ({
      filename: ne.reference.widget_value,
      reference: ne.reference,
      is_download_intent: !0,
      resolved_model: ne.model,
      download_source: ne.download_source,
      target_path: ne.target_path
    })) : []), re = R(() => {
      if (!_.value) return [];
      const ne = _.value.nodes.unresolved.map((de) => ({
        node_type: de.reference.node_type,
        reason: de.reason,
        is_unresolved: !0,
        options: void 0
      })), U = _.value.nodes.ambiguous.map((de) => ({
        node_type: de.reference.node_type,
        has_multiple_options: !0,
        options: de.options.map((je) => ({
          package_id: je.package.package_id,
          title: je.package.title,
          match_confidence: je.match_confidence,
          match_type: je.match_type,
          is_installed: je.is_installed
        }))
      }));
      return [...ne, ...U];
    }), oe = R(() => {
      if (!_.value) return [];
      const ne = _.value.models.unresolved.map((de) => ({
        filename: de.reference.widget_value,
        reference: de.reference,
        reason: de.reason,
        is_unresolved: !0,
        options: void 0
      })), U = _.value.models.ambiguous.map((de) => ({
        filename: de.reference.widget_value,
        reference: de.reference,
        has_multiple_options: !0,
        options: de.options.map((je) => ({
          model: je.model,
          match_confidence: je.match_confidence,
          match_type: je.match_type,
          has_download_source: je.has_download_source
        }))
      }));
      return [...ne, ...U];
    }), Le = R(() => {
      const ne = oe.value, U = Ae.value.map((de) => ({
        filename: de.filename,
        reference: de.reference,
        is_download_intent: !0,
        resolved_model: de.resolved_model,
        download_source: de.download_source,
        target_path: de.target_path,
        options: void 0
      }));
      return [...ne, ...U];
    }), fe = R(() => Ae.value.filter((ne) => {
      const U = F.value.get(ne.filename);
      return U ? U.action === "download" : !0;
    }).map((ne) => ({
      filename: ne.filename,
      url: ne.download_source,
      target_path: ne.target_path
    })));
    function le(ne, U = 50) {
      return ne.length <= U ? ne : ne.slice(0, U - 3) + "...";
    }
    const E = R(() => {
      let ne = ze.value.length;
      for (const U of O.value.values())
        U.action === "install" && ne++;
      for (const U of F.value.values())
        U.action === "select" && ne++;
      return ne;
    }), A = R(() => {
      let ne = 0;
      for (const U of F.value.values())
        U.action === "download" && ne++;
      for (const U of Ae.value)
        F.value.get(U.filename) || ne++;
      return ne;
    }), ce = R(() => {
      let ne = 0;
      for (const U of O.value.values())
        U.action === "optional" && ne++;
      for (const U of F.value.values())
        U.action === "optional" && ne++;
      return ne;
    }), $e = R(() => {
      let ne = W.value.size;
      for (const U of O.value.values())
        U.action === "skip" && ne++;
      for (const U of F.value.values())
        U.action === "skip" && ne++;
      for (const U of re.value)
        O.value.has(U.node_type) || ne++;
      for (const U of oe.value)
        F.value.has(U.filename) || ne++;
      return ne;
    }), Te = R(() => {
      const ne = {};
      if (ne.analysis = { resolved: 1, total: 1 }, te.value || ee.value) {
        const U = re.value.length, de = Q.value.length, je = re.value.filter(
          (It) => O.value.has(It.node_type)
        ).length, ut = Q.value.filter(
          (It) => O.value.has(It.reference.node_type)
        ).length, St = U + de, lt = je + ut;
        ne.nodes = { resolved: lt, total: St };
      }
      if (H.value) {
        const U = Le.value.length, de = Le.value.filter(
          (je) => F.value.has(je.filename) || je.is_download_intent
        ).length;
        ne.models = { resolved: de, total: U };
      }
      if (ne.review = { resolved: 1, total: 1 }, M.value === "applying") {
        const U = d.totalFiles || 1, de = d.completedFiles.length;
        ne.applying = { resolved: de, total: U };
      }
      return ne;
    });
    function xe(ne) {
      M.value = ne;
    }
    function Z() {
      const ne = D.value.findIndex((U) => U.id === M.value);
      ne > 0 && (M.value = D.value[ne - 1].id);
    }
    function G() {
      const ne = D.value.findIndex((U) => U.id === M.value);
      ne < D.value.length - 1 && (M.value = D.value[ne + 1].id);
    }
    function ve() {
      for (const ne of Q.value) {
        const U = ne.reference.node_type;
        O.value.has(U) || (ge(ne) ? Y(ne, "registry") : ne.package.repository ? Y(ne, "git") : T(U));
      }
    }
    function ge(ne) {
      var U;
      return !!((U = ne.package) != null && U.latest_version);
    }
    function He(ne) {
      switch (ne) {
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
    function We(ne) {
      return ne.filter((U) => U.installed && U.tracked).filter((U) => U.name !== "comfygit-manager").map((U) => ({
        package_id: U.registry_id || U.name,
        source: U.source
      })).filter((U, de, je) => je.findIndex((ut) => ut.package_id === U.package_id) === de).sort((U, de) => {
        const je = He(U.source) - He(de.source);
        return je !== 0 ? je : U.package_id.localeCompare(de.package_id);
      });
    }
    async function ke() {
      $.value = !0, I.value = null;
      try {
        const [ne, U] = await Promise.all([
          l(o.workflowName),
          g()
        ]);
        _.value = ne, C.value = We(U.nodes), ve();
      } catch (ne) {
        I.value = ne instanceof Error ? ne.message : "Failed to analyze workflow";
      } finally {
        $.value = !1;
      }
    }
    function X() {
      P.value.includes("analysis") || P.value.push("analysis"), te.value || _e.value || ee.value ? M.value = "nodes" : H.value ? M.value = "models" : M.value = "review";
    }
    function Fe(ne) {
      O.value.set(ne, { action: "optional" });
    }
    function De(ne) {
      O.value.set(ne, { action: "skip" });
    }
    function qe(ne, U) {
      var je;
      const de = re.value.find((ut) => ut.node_type === ne);
      (je = de == null ? void 0 : de.options) != null && je[U] && O.value.set(ne, {
        action: "install",
        package_id: de.options[U].package_id
      });
    }
    function Ve(ne, U) {
      O.value.set(ne, {
        action: "install",
        package_id: U
      });
    }
    function Ue(ne) {
      O.value.delete(ne);
    }
    function Qe(ne) {
      return O.value.get(ne);
    }
    function gt(ne) {
      const U = Qe(ne);
      return U ? U.action === "optional" ? "Marked optional" : U.action === "skip" ? "Skipped" : U.action === "install" ? U.install_source === "git" ? "Will install via Git" : "Will install from registry" : "Skipped" : "Skipped";
    }
    function Y(ne, U) {
      var ut;
      const de = (ut = ne.package) == null ? void 0 : ut.package_id;
      if (!de) return;
      const je = {
        action: "install",
        package_id: de,
        version: ne.package.latest_version || null,
        install_source: U
      };
      U === "git" && ne.package.repository && (je.repository = ne.package.repository), O.value.set(ne.reference.node_type, je);
    }
    function he(ne) {
      O.value.set(ne, { action: "optional" });
    }
    function T(ne) {
      O.value.set(ne, { action: "skip" });
    }
    function N(ne) {
      W.value.has(ne) ? W.value.delete(ne) : W.value.add(ne);
    }
    function J(ne) {
      F.value.set(ne, { action: "optional" });
    }
    function Ee(ne) {
      F.value.set(ne, { action: "skip" });
    }
    function Re(ne, U) {
      var je;
      const de = oe.value.find((ut) => ut.filename === ne);
      (je = de == null ? void 0 : de.options) != null && je[U] && F.value.set(ne, {
        action: "select",
        selected_model: de.options[U].model
      });
    }
    function Je(ne, U, de) {
      F.value.set(ne, {
        action: "download",
        url: U,
        target_path: de
      });
    }
    function Pe(ne) {
      F.value.delete(ne);
    }
    async function Ye(ne) {
      try {
        await p(ne);
      } catch (U) {
        I.value = U instanceof Error ? U.message : "Failed to open file location";
      }
    }
    async function ot() {
      var ne;
      x.value = !0, I.value = null, v(), d.phase = "resolving", M.value = "applying";
      try {
        const U = await r(o.workflowName, O.value, F.value, W.value);
        U.models_to_download && U.models_to_download.length > 0 && c(o.workflowName, U.models_to_download);
        const de = Q.value.map((lt) => {
          const It = Qe(lt.reference.node_type);
          if ((It == null ? void 0 : It.action) !== "install" || It.install_source !== "git")
            return null;
          const Ss = It.repository || lt.package.repository, Is = It.package_id || lt.package.package_id;
          return !Ss || !Is ? null : {
            id: Is,
            repository: Ss,
            selectedVersion: It.version || lt.package.latest_version || "latest"
          };
        }).filter((lt) => !!lt), je = new Set(de.map((lt) => lt.id)), ut = [
          ...U.nodes_to_install || [],
          ...ze.value.map((lt) => lt.package.package_id)
        ];
        d.nodesToInstall = [...new Set(ut)].filter((lt) => !je.has(lt)), d.nodesToInstall.length > 0 && await u(o.workflowName);
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
        d.phase = "complete", await f();
        const St = d.installError || ((ne = d.nodeInstallProgress) == null ? void 0 : ne.completedNodes.some((lt) => !lt.success));
        !d.needsRestart && !St && setTimeout(() => {
          n("refresh"), n("install"), n("close");
        }, 1500);
      } catch (U) {
        I.value = U instanceof Error ? U.message : "Failed to apply resolution", d.error = I.value, d.phase = "error";
      } finally {
        x.value = !1;
      }
    }
    function xt() {
      n("refresh"), n("restart"), n("close");
    }
    async function zt() {
      var U;
      const ne = ((U = d.nodeInstallProgress) == null ? void 0 : U.completedNodes.filter((de) => !de.success).map((de) => de.node_id)) || [];
      if (ne.length !== 0) {
        d.phase = "installing", d.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: ne.length
        }, d.nodesToInstall = ne, d.nodesInstalled = [], d.installError = void 0;
        try {
          await u(o.workflowName), d.phase = "complete";
        } catch (de) {
          d.error = de instanceof Error ? de.message : "Retry failed", d.phase = "error";
        }
      }
    }
    return at(ke), (ne, U) => (a(), L($t, {
      title: `Resolve Dependencies: ${e.workflowName}`,
      size: "lg",
      loading: $.value,
      error: I.value || void 0,
      "fixed-height": !0,
      onClose: U[1] || (U[1] = (de) => n("close"))
    }, {
      body: h(() => [
        $.value && !_.value ? (a(), i("div", O0, [...U[2] || (U[2] = [
          s("div", { class: "loading-spinner" }, null, -1),
          s("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : _.value ? (a(), i("div", U0, [
          b(Uy, {
            steps: D.value,
            "current-step": M.value,
            "completed-steps": P.value,
            "step-stats": Te.value,
            onStepChange: xe
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          M.value === "analysis" ? (a(), i("div", A0, [
            s("div", z0, [
              s("div", F0, [
                U[3] || (U[3] = s("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                s("p", V0, " Found " + m(_.value.stats.total_nodes) + " nodes and " + m(_.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              s("div", B0, [
                s("div", W0, [
                  U[16] || (U[16] = s("div", { class: "stat-header" }, "Nodes", -1)),
                  s("div", G0, [
                    me.value > 0 ? (a(), i("div", j0, [
                      U[4] || (U[4] = s("span", { class: "stat-icon" }, "✓", -1)),
                      s("span", H0, m(me.value), 1),
                      U[5] || (U[5] = s("span", { class: "stat-label" }, "resolved", -1))
                    ])) : y("", !0),
                    _.value.stats.packages_needing_installation > 0 ? (a(), i("div", q0, [
                      U[6] || (U[6] = s("span", { class: "stat-icon" }, "⬇", -1)),
                      s("span", K0, m(_.value.stats.packages_needing_installation), 1),
                      U[7] || (U[7] = s("span", { class: "stat-label" }, "to install", -1))
                    ])) : y("", !0),
                    _.value.nodes.ambiguous.length > 0 ? (a(), i("div", J0, [
                      U[8] || (U[8] = s("span", { class: "stat-icon" }, "?", -1)),
                      s("span", Q0, m(_.value.nodes.ambiguous.length), 1),
                      U[9] || (U[9] = s("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    ue.value.length > 0 ? (a(), i("div", Y0, [
                      U[10] || (U[10] = s("span", { class: "stat-icon" }, "⚠", -1)),
                      s("span", X0, m(ue.value.length), 1),
                      U[11] || (U[11] = s("span", { class: "stat-label" }, "requires newer ComfyUI", -1))
                    ])) : y("", !0),
                    se.value.length > 0 ? (a(), i("div", Z0, [
                      U[12] || (U[12] = s("span", { class: "stat-icon" }, "⚠", -1)),
                      s("span", e_, m(se.value.length), 1),
                      U[13] || (U[13] = s("span", { class: "stat-label" }, "community-mapped", -1))
                    ])) : y("", !0),
                    _.value.nodes.unresolved.length > 0 ? (a(), i("div", t_, [
                      U[14] || (U[14] = s("span", { class: "stat-icon" }, "✗", -1)),
                      s("span", s_, m(_.value.nodes.unresolved.length), 1),
                      U[15] || (U[15] = s("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ]),
                s("div", o_, [
                  U[27] || (U[27] = s("div", { class: "stat-header" }, "Models", -1)),
                  s("div", n_, [
                    s("div", a_, [
                      U[17] || (U[17] = s("span", { class: "stat-icon" }, "✓", -1)),
                      s("span", l_, m(_.value.models.resolved.length - _.value.stats.download_intents - _.value.stats.models_with_category_mismatch), 1),
                      U[18] || (U[18] = s("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    _.value.stats.download_intents > 0 ? (a(), i("div", i_, [
                      U[19] || (U[19] = s("span", { class: "stat-icon" }, "⬇", -1)),
                      s("span", r_, m(_.value.stats.download_intents), 1),
                      U[20] || (U[20] = s("span", { class: "stat-label" }, "pending download", -1))
                    ])) : y("", !0),
                    ae.value ? (a(), i("div", c_, [
                      U[21] || (U[21] = s("span", { class: "stat-icon" }, "⚠", -1)),
                      s("span", u_, m(z.value.length), 1),
                      U[22] || (U[22] = s("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : y("", !0),
                    _.value.models.ambiguous.length > 0 ? (a(), i("div", d_, [
                      U[23] || (U[23] = s("span", { class: "stat-icon" }, "?", -1)),
                      s("span", m_, m(_.value.models.ambiguous.length), 1),
                      U[24] || (U[24] = s("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    _.value.models.unresolved.length > 0 ? (a(), i("div", f_, [
                      U[25] || (U[25] = s("span", { class: "stat-icon" }, "✗", -1)),
                      s("span", v_, m(_.value.models.unresolved.length), 1),
                      U[26] || (U[26] = s("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ])
              ]),
              K.value ? (a(), i("div", p_, [
                U[28] || (U[28] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", g_, m(re.value.length + oe.value.length) + " items need your input", 1)
              ])) : we.value ? (a(), i("div", h_, [
                U[29] || (U[29] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", y_, m(ue.value.length) + " node type" + m(ue.value.length > 1 ? "s are" : " is") + " blocked and require manual action", 1)
              ])) : se.value.length > 0 ? (a(), i("div", w_, [
                U[30] || (U[30] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", __, m(se.value.length) + " community-mapped node type" + m(se.value.length > 1 ? "s need" : " needs") + " installation choices", 1)
              ])) : _e.value ? (a(), i("div", k_, [
                U[31] || (U[31] = s("span", { class: "status-icon" }, "⬇", -1)),
                s("span", b_, m(_.value.stats.packages_needing_installation) + " package" + m(_.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + m(_.value.stats.nodes_needing_installation) + " node type" + m(_.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + m(q.value ? `, ${_.value.stats.download_intents} model${_.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : q.value ? (a(), i("div", $_, [
                U[32] || (U[32] = s("span", { class: "status-icon" }, "⬇", -1)),
                s("span", C_, m(_.value.stats.download_intents) + " model" + m(_.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to Review to proceed", 1)
              ])) : ae.value ? (a(), i("div", x_, [
                U[33] || (U[33] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", S_, m(z.value.length) + " model" + m(z.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (a(), i("div", I_, [...U[34] || (U[34] = [
                s("span", { class: "status-icon" }, "✓", -1),
                s("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              ae.value ? (a(), i("div", E_, [
                U[37] || (U[37] = s("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                s("div", T_, [
                  (a(!0), i(B, null, ye(z.value, (de) => {
                    var je, ut;
                    return a(), i("div", {
                      key: de.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      s("code", M_, m(de.actual_category) + "/" + m((je = de.model) == null ? void 0 : je.filename), 1),
                      U[36] || (U[36] = s("span", { class: "mismatch-arrow" }, "→", -1)),
                      s("code", P_, m((ut = de.expected_categories) == null ? void 0 : ut[0]) + "/", 1),
                      de.file_path ? (a(), L(Oe, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (St) => Ye(de.file_path)
                      }, {
                        default: h(() => [...U[35] || (U[35] = [
                          S(" Open File Location ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : y("", !0)
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              we.value ? (a(), i("div", R_, [
                U[38] || (U[38] = s("h4", { class: "section-subtitle" }, "Blocked node types:", -1)),
                s("div", L_, [
                  (a(!0), i(B, null, ye(ue.value, (de) => {
                    var je;
                    return a(), i("div", {
                      key: `vg-${de.reference.node_type}`,
                      class: "mismatch-item"
                    }, [
                      s("code", D_, m(de.reference.node_type), 1),
                      s("span", N_, m(de.guidance || ((je = _.value.node_guidance) == null ? void 0 : je[de.reference.node_type]) || "Requires a newer ComfyUI version."), 1)
                    ]);
                  }), 128))
                ])
              ])) : y("", !0)
            ])
          ])) : y("", !0),
          M.value === "nodes" ? (a(), i("div", O_, [
            b(dw, {
              nodes: re.value,
              "node-choices": O.value,
              "auto-resolved-packages": Ne.value,
              "skipped-packages": W.value,
              "installed-node-packs": C.value,
              onMarkOptional: Fe,
              onSkip: De,
              onOptionSelected: qe,
              onManualEntry: Ve,
              onClearChoice: Ue,
              onPackageSkip: N
            }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages", "installed-node-packs"]),
            Q.value.length > 0 ? (a(), i("div", U_, [
              s("div", A_, [
                s("h4", z_, "Community-Mapped Packages (" + m(Q.value.length) + ")", 1),
                U[39] || (U[39] = s("p", { class: "community-node-description" }, " These mappings came from community metadata. Use a registry install only when a package version exists; otherwise install from Git or skip. ", -1))
              ]),
              s("div", F_, [
                (a(!0), i(B, null, ye(Q.value, (de) => (a(), i("div", {
                  key: `community-${de.reference.node_type}-${de.package.package_id}`,
                  class: "community-node-item"
                }, [
                  s("div", V_, [
                    s("div", B_, [
                      s("code", W_, m(de.reference.node_type), 1),
                      s("span", G_, m(de.package.title || de.package.package_id), 1)
                    ]),
                    s("div", j_, m(de.package.package_id), 1),
                    s("div", H_, [
                      U[40] || (U[40] = S(" Found via community mapping — registry metadata may be incomplete. ", -1)),
                      de.guidance ? (a(), i("span", q_, m(de.guidance), 1)) : y("", !0)
                    ]),
                    s("div", K_, m(gt(de.reference.node_type)), 1)
                  ]),
                  s("div", J_, [
                    ge(de) ? (a(), L(Oe, {
                      key: 0,
                      size: "sm",
                      variant: "secondary",
                      disabled: !de.package.package_id,
                      onClick: (je) => Y(de, "registry")
                    }, {
                      default: h(() => [...U[41] || (U[41] = [
                        S(" Install from Registry ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled", "onClick"])) : y("", !0),
                    de.package.repository ? (a(), L(Oe, {
                      key: 1,
                      size: "sm",
                      variant: ge(de) ? "ghost" : "secondary",
                      disabled: !de.package.package_id,
                      onClick: (je) => Y(de, "git")
                    }, {
                      default: h(() => [...U[42] || (U[42] = [
                        S(" Install via Git ", -1)
                      ])]),
                      _: 1
                    }, 8, ["variant", "disabled", "onClick"])) : y("", !0),
                    b(Oe, {
                      size: "sm",
                      variant: "secondary",
                      onClick: (je) => he(de.reference.node_type)
                    }, {
                      default: h(() => [...U[43] || (U[43] = [
                        S(" Optional ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Oe, {
                      size: "sm",
                      variant: "secondary",
                      onClick: (je) => T(de.reference.node_type)
                    }, {
                      default: h(() => [...U[44] || (U[44] = [
                        S(" Skip ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ])
                ]))), 128))
              ])
            ])) : y("", !0)
          ])) : y("", !0),
          M.value === "models" ? (a(), L(n0, {
            key: 2,
            models: Le.value,
            "model-choices": F.value,
            onMarkOptional: J,
            onSkip: Ee,
            onOptionSelected: Re,
            onDownloadUrl: Je,
            onClearChoice: Pe
          }, null, 8, ["models", "model-choices"])) : y("", !0),
          M.value === "review" ? (a(), i("div", Q_, [
            s("div", Y_, [
              U[50] || (U[50] = s("div", { class: "review-header" }, [
                s("h3", { class: "summary-title" }, "Review Your Choices"),
                s("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              s("div", X_, [
                s("div", Z_, [
                  s("span", ek, m(E.value), 1),
                  U[45] || (U[45] = s("span", { class: "stat-label" }, "to install", -1))
                ]),
                s("div", tk, [
                  s("span", sk, m(A.value), 1),
                  U[46] || (U[46] = s("span", { class: "stat-label" }, "to download", -1))
                ]),
                s("div", ok, [
                  s("span", nk, m(ce.value), 1),
                  U[47] || (U[47] = s("span", { class: "stat-label" }, "optional", -1))
                ]),
                s("div", ak, [
                  s("span", lk, m($e.value), 1),
                  U[48] || (U[48] = s("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              Ne.value.length > 0 ? (a(), i("div", ik, [
                s("h4", rk, "Node Packages (" + m(Ne.value.length) + ")", 1),
                s("div", ck, [
                  (a(!0), i(B, null, ye(Ne.value, (de) => (a(), i("div", {
                    key: de.package_id,
                    class: "review-item"
                  }, [
                    s("code", uk, m(de.package_id), 1),
                    s("div", dk, [
                      W.value.has(de.package_id) ? (a(), i("span", fk, "Skipped")) : (a(), i("span", mk, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : y("", !0),
              Q.value.length > 0 ? (a(), i("div", vk, [
                s("h4", pk, "Community-Mapped Packages (" + m(Q.value.length) + ")", 1),
                s("div", gk, [
                  (a(!0), i(B, null, ye(Q.value, (de) => {
                    var je, ut, St;
                    return a(), i("div", {
                      key: `review-community-${de.reference.node_type}-${de.package.package_id}`,
                      class: "review-item"
                    }, [
                      s("code", hk, m(de.reference.node_type), 1),
                      s("div", yk, [
                        ((je = Qe(de.reference.node_type)) == null ? void 0 : je.action) === "install" ? (a(), i("span", wk, m(((ut = Qe(de.reference.node_type)) == null ? void 0 : ut.install_source) === "git" ? "Install via Git" : "Install from Registry"), 1)) : ((St = Qe(de.reference.node_type)) == null ? void 0 : St.action) === "optional" ? (a(), i("span", _k, " Optional ")) : (a(), i("span", kk, " Skip "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              re.value.length > 0 ? (a(), i("div", bk, [
                s("h4", $k, "Node Choices (" + m(re.value.length) + ")", 1),
                s("div", Ck, [
                  (a(!0), i(B, null, ye(re.value, (de) => {
                    var je, ut, St, lt;
                    return a(), i("div", {
                      key: de.node_type,
                      class: "review-item"
                    }, [
                      s("code", xk, m(de.node_type), 1),
                      s("div", Sk, [
                        O.value.has(de.node_type) ? (a(), i(B, { key: 0 }, [
                          ((je = O.value.get(de.node_type)) == null ? void 0 : je.action) === "install" ? (a(), i("span", Ik, m((ut = O.value.get(de.node_type)) == null ? void 0 : ut.package_id), 1)) : ((St = O.value.get(de.node_type)) == null ? void 0 : St.action) === "optional" ? (a(), i("span", Ek, " Optional ")) : ((lt = O.value.get(de.node_type)) == null ? void 0 : lt.action) === "skip" ? (a(), i("span", Tk, " Skip ")) : y("", !0)
                        ], 64)) : (a(), i("span", Mk, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              fe.value.length > 0 ? (a(), i("div", Pk, [
                s("h4", Rk, "Models to Download (" + m(fe.value.length) + ")", 1),
                s("div", Lk, [
                  (a(!0), i(B, null, ye(fe.value, (de) => (a(), i("div", {
                    key: de.filename,
                    class: "review-item download-item"
                  }, [
                    s("div", Dk, [
                      s("code", Nk, m(de.filename), 1),
                      s("div", Ok, [
                        s("span", Uk, "→ " + m(de.target_path), 1),
                        de.url ? (a(), i("span", {
                          key: 0,
                          class: "download-url",
                          title: de.url
                        }, m(le(de.url)), 9, Ak)) : y("", !0)
                      ])
                    ]),
                    U[49] || (U[49] = s("span", { class: "choice-badge download" }, "Will Download", -1))
                  ]))), 128))
                ])
              ])) : y("", !0),
              Le.value.length > 0 ? (a(), i("div", zk, [
                s("h4", Fk, "Models (" + m(Le.value.length) + ")", 1),
                s("div", Vk, [
                  (a(!0), i(B, null, ye(Le.value, (de) => {
                    var je, ut, St, lt, It, Ss, Is;
                    return a(), i("div", {
                      key: de.filename,
                      class: "review-item"
                    }, [
                      s("code", Bk, m(de.filename), 1),
                      s("div", Wk, [
                        F.value.has(de.filename) ? (a(), i(B, { key: 0 }, [
                          ((je = F.value.get(de.filename)) == null ? void 0 : je.action) === "select" ? (a(), i("span", Gk, m((St = (ut = F.value.get(de.filename)) == null ? void 0 : ut.selected_model) == null ? void 0 : St.filename), 1)) : ((lt = F.value.get(de.filename)) == null ? void 0 : lt.action) === "download" ? (a(), i("span", jk, " Download ")) : ((It = F.value.get(de.filename)) == null ? void 0 : It.action) === "optional" ? (a(), i("span", Hk, " Optional ")) : ((Ss = F.value.get(de.filename)) == null ? void 0 : Ss.action) === "skip" ? (a(), i("span", qk, " Skip ")) : ((Is = F.value.get(de.filename)) == null ? void 0 : Is.action) === "cancel_download" ? (a(), i("span", Kk, " Cancel Download ")) : y("", !0)
                        ], 64)) : de.is_download_intent ? (a(), i("span", Jk, " Pending Download ")) : (a(), i("span", Qk, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              pe.value.length === 0 && Q.value.length === 0 && re.value.length === 0 && Le.value.length === 0 ? (a(), i("div", Yk, " No dependencies need resolution. ")) : y("", !0)
            ])
          ])) : y("", !0),
          M.value === "applying" ? (a(), L(N0, {
            key: 4,
            progress: st(d),
            onRestart: xt,
            onRetryFailed: zt
          }, null, 8, ["progress"])) : y("", !0)
        ])) : y("", !0)
      ]),
      footer: h(() => [
        M.value !== "analysis" && M.value !== "applying" ? (a(), L(Oe, {
          key: 0,
          variant: "secondary",
          disabled: x.value,
          onClick: Z
        }, {
          default: h(() => [...U[51] || (U[51] = [
            S(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : y("", !0),
        U[54] || (U[54] = s("div", { class: "footer-spacer" }, null, -1)),
        M.value !== "applying" || st(d).phase === "complete" || st(d).phase === "error" ? (a(), L(Oe, {
          key: 1,
          variant: "secondary",
          onClick: U[0] || (U[0] = (de) => n("close"))
        }, {
          default: h(() => [
            S(m(st(d).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : y("", !0),
        M.value === "analysis" ? (a(), L(Oe, {
          key: 2,
          variant: "primary",
          disabled: $.value,
          onClick: X
        }, {
          default: h(() => [
            S(m(Se.value === "review" ? "Continue to Review →" : "Continue"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : y("", !0),
        M.value === "nodes" ? (a(), L(Oe, {
          key: 3,
          variant: "primary",
          onClick: G
        }, {
          default: h(() => [
            S(m(H.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : y("", !0),
        M.value === "models" ? (a(), L(Oe, {
          key: 4,
          variant: "primary",
          onClick: G
        }, {
          default: h(() => [...U[52] || (U[52] = [
            S(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : y("", !0),
        M.value === "review" ? (a(), L(Oe, {
          key: 5,
          variant: "primary",
          disabled: x.value,
          loading: x.value,
          onClick: ot
        }, {
          default: h(() => [...U[53] || (U[53] = [
            S(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : y("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), Zk = /* @__PURE__ */ Ie(Xk, [["__scopeId", "data-v-c3c27aed"]]), eb = { class: "search-input-wrapper" }, tb = ["value", "placeholder"], sb = /* @__PURE__ */ Ce({
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
      const v = d.target.value;
      o.debounce > 0 ? (clearTimeout(r), r = window.setTimeout(() => {
        n("update:modelValue", v);
      }, o.debounce)) : n("update:modelValue", v);
    }
    function c() {
      var d;
      n("update:modelValue", ""), n("clear"), (d = l.value) == null || d.focus();
    }
    return at(() => {
      o.autoFocus && l.value && l.value.focus();
    }), (d, v) => (a(), i("div", eb, [
      s("input", {
        ref_key: "inputRef",
        ref: l,
        value: e.modelValue,
        type: "text",
        placeholder: e.placeholder,
        class: "search-input",
        onInput: u,
        onKeyup: cs(c, ["escape"])
      }, null, 40, tb),
      e.clearable && e.modelValue ? (a(), i("button", {
        key: 0,
        class: "clear-button",
        onClick: c,
        title: "Clear search"
      }, " ✕ ")) : y("", !0)
    ]));
  }
}), ob = /* @__PURE__ */ Ie(sb, [["__scopeId", "data-v-266f857a"]]), nb = { class: "search-bar" }, ab = /* @__PURE__ */ Ce({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(e) {
    return (t, o) => (a(), i("div", nb, [
      b(ob, {
        "model-value": e.modelValue,
        placeholder: e.placeholder,
        debounce: e.debounce,
        clearable: e.clearable,
        "onUpdate:modelValue": o[0] || (o[0] = (n) => t.$emit("update:modelValue", n)),
        onClear: o[1] || (o[1] = (n) => t.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), ro = /* @__PURE__ */ Ie(ab, [["__scopeId", "data-v-3d51bbfd"]]), lb = { class: "section-group" }, ib = {
  key: 0,
  class: "section-content"
}, rb = /* @__PURE__ */ Ce({
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
    return (u, c) => (a(), i("section", lb, [
      b(os, {
        count: e.count,
        clickable: e.collapsible,
        expanded: l.value,
        onClick: r
      }, {
        default: h(() => [
          S(m(e.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !e.collapsible || l.value ? (a(), i("div", ib, [
        nt(u.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), Et = /* @__PURE__ */ Ie(rb, [["__scopeId", "data-v-c48e33ed"]]), cb = { class: "item-header" }, ub = {
  key: 0,
  class: "item-icon"
}, db = { class: "item-info" }, mb = {
  key: 0,
  class: "item-title"
}, fb = {
  key: 1,
  class: "item-subtitle"
}, vb = {
  key: 0,
  class: "item-details"
}, pb = {
  key: 1,
  class: "item-actions"
}, gb = /* @__PURE__ */ Ce({
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
      class: Be(["item-card", { clickable: e.clickable, compact: e.compact }, n.value]),
      onClick: r[0] || (r[0] = (u) => e.clickable && l.$emit("click"))
    }, [
      s("div", cb, [
        l.$slots.icon ? (a(), i("span", ub, [
          nt(l.$slots, "icon", {}, void 0)
        ])) : y("", !0),
        s("div", db, [
          l.$slots.title ? (a(), i("div", mb, [
            nt(l.$slots, "title", {}, void 0)
          ])) : y("", !0),
          l.$slots.subtitle ? (a(), i("div", fb, [
            nt(l.$slots, "subtitle", {}, void 0)
          ])) : y("", !0)
        ])
      ]),
      l.$slots.details ? (a(), i("div", vb, [
        nt(l.$slots, "details", {}, void 0)
      ])) : y("", !0),
      l.$slots.actions ? (a(), i("div", pb, [
        nt(l.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Vt = /* @__PURE__ */ Ie(gb, [["__scopeId", "data-v-cc435e0e"]]), hb = { class: "empty-state" }, yb = {
  key: 0,
  class: "empty-icon"
}, wb = { class: "empty-message" }, _b = /* @__PURE__ */ Ce({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(e) {
    return (t, o) => (a(), i("div", hb, [
      e.icon ? (a(), i("div", yb, m(e.icon), 1)) : y("", !0),
      s("p", wb, m(e.message), 1),
      e.actionLabel ? (a(), L(Me, {
        key: 1,
        variant: e.actionVariant || "secondary",
        size: "sm",
        onClick: o[0] || (o[0] = (n) => t.$emit("action"))
      }, {
        default: h(() => [
          S(m(e.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : y("", !0)
    ]));
  }
}), fs = /* @__PURE__ */ Ie(_b, [["__scopeId", "data-v-4466284f"]]), kb = { class: "loading-state" }, bb = { class: "loading-message" }, $b = /* @__PURE__ */ Ce({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(e) {
    return (t, o) => (a(), i("div", kb, [
      o[0] || (o[0] = s("div", { class: "spinner" }, null, -1)),
      s("p", bb, m(e.message), 1)
    ]));
  }
}), Cs = /* @__PURE__ */ Ie($b, [["__scopeId", "data-v-ad8436c9"]]), Cb = { class: "error-state" }, xb = { class: "error-message" }, Sb = /* @__PURE__ */ Ce({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(e) {
    return (t, o) => (a(), i("div", Cb, [
      o[2] || (o[2] = s("span", { class: "error-icon" }, "⚠", -1)),
      s("p", xb, m(e.message), 1),
      e.retry ? (a(), L(Me, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: o[0] || (o[0] = (n) => t.$emit("retry"))
      }, {
        default: h(() => [...o[1] || (o[1] = [
          S(" Retry ", -1)
        ])]),
        _: 1
      })) : y("", !0)
    ]));
  }
}), xs = /* @__PURE__ */ Ie(Sb, [["__scopeId", "data-v-5397be48"]]), Ib = /* @__PURE__ */ Ce({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(e, { expose: t, emit: o }) {
    const n = o, { getWorkflows: l } = rt(), r = k([]), u = k(!1), c = k(null), d = k(""), v = k(!0), f = k(!1), p = k(!1), w = k(!1), g = k(null), _ = R(
      () => r.value.filter((z) => z.status === "broken")
    ), C = R(
      () => r.value.filter((z) => z.status === "new")
    ), $ = R(
      () => r.value.filter((z) => z.status === "modified")
    ), x = R(
      () => r.value.filter((z) => z.status === "synced")
    ), I = R(() => {
      if (!d.value.trim()) return r.value;
      const z = d.value.toLowerCase();
      return r.value.filter((ae) => ae.name.toLowerCase().includes(z));
    }), M = R(
      () => _.value.filter(
        (z) => !d.value.trim() || z.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), P = R(
      () => C.value.filter(
        (z) => !d.value.trim() || z.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), O = R(
      () => $.value.filter(
        (z) => !d.value.trim() || z.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), F = R(
      () => x.value.filter(
        (z) => !d.value.trim() || z.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), W = R(
      () => f.value ? F.value : F.value.slice(0, 5)
    );
    async function D(z = !1) {
      u.value = !0, c.value = null;
      try {
        r.value = await l(z);
      } catch (ae) {
        c.value = ae instanceof Error ? ae.message : "Failed to load workflows";
      } finally {
        u.value = !1;
      }
    }
    t({ loadWorkflows: D });
    function K(z) {
      g.value = z, p.value = !0;
    }
    function ue(z) {
      g.value = z, w.value = !0;
    }
    function se(z) {
      g.value = z, window.dispatchEvent(new CustomEvent("comfygit:open-io-mapping", {
        detail: { workflowName: z }
      })), window.dispatchEvent(new CustomEvent("comfygit:close-panel"));
    }
    function Q(z) {
      var pe;
      const Se = (pe = z.detail) == null ? void 0 : pe.workflowName;
      Se && se(Se);
    }
    function we() {
      n("refresh");
    }
    async function te() {
      w.value = !1, await D(!0);
    }
    async function H() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function q(z) {
      return z.replace(/uninstallable node mappings?/gi, (ae) => ae.toLowerCase().endsWith("s") ? "community packages" : "community package").replace(/no installable package versions?/gi, "need community packages").replace(/\bare uninstallable\b/gi, "need community packages").replace(/\buninstallable\b/gi, "community-mapped");
    }
    function _e(z) {
      if (z.issue_summary && z.issue_summary.trim().length > 0)
        return q(z.issue_summary);
      const ae = [];
      return z.version_gated_count && z.version_gated_count > 0 && ae.push(`${z.version_gated_count} node${z.version_gated_count > 1 ? "s" : ""} require newer ComfyUI`), z.uninstallable_count && z.uninstallable_count > 0 && ae.push(`${z.uninstallable_count} node${z.uninstallable_count > 1 ? "s" : ""} need community packages`), z.missing_nodes > 0 && ae.push(`${z.missing_nodes} missing node${z.missing_nodes > 1 ? "s" : ""}`), z.missing_models > 0 && ae.push(`${z.missing_models} missing model${z.missing_models > 1 ? "s" : ""}`), z.models_with_category_mismatch && z.models_with_category_mismatch > 0 && ae.push(`${z.models_with_category_mismatch} model${z.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), z.pending_downloads && z.pending_downloads > 0 && ae.push(`${z.pending_downloads} pending download${z.pending_downloads > 1 ? "s" : ""}`), ae.length > 0 ? ae.join(", ") : "Has issues";
    }
    function ee(z) {
      const ae = z.sync_state === "new" ? "New" : z.sync_state === "modified" ? "Modified" : z.sync_state === "synced" ? "Synced" : z.sync_state, Se = me(z);
      return z.has_path_sync_issues && z.models_needing_path_sync && z.models_needing_path_sync > 0 ? `${z.models_needing_path_sync} model path${z.models_needing_path_sync > 1 ? "s" : ""} need${z.models_needing_path_sync === 1 ? "s" : ""} sync · ${Se}` : `${ae || "Unknown"} · ${Se}`;
    }
    function me(z) {
      const ae = z.contract_summary;
      return !ae || !ae.has_contract ? "No contract" : ae.status === "incomplete" ? `${ae.input_count} in / ${ae.output_count} out · incomplete` : `${ae.input_count} in / ${ae.output_count} out`;
    }
    return at(() => {
      D(), window.addEventListener("comfygit:open-workflow-contract", Q);
    }), gn(() => {
      window.removeEventListener("comfygit:open-workflow-contract", Q);
    }), (z, ae) => (a(), i(B, null, [
      b(Ut, null, {
        header: h(() => [
          b(At, { title: "WORKFLOWS" })
        ]),
        search: h(() => [
          b(ro, {
            modelValue: d.value,
            "onUpdate:modelValue": ae[0] || (ae[0] = (Se) => d.value = Se),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          u.value ? (a(), L(Cs, {
            key: 0,
            message: "Loading workflows..."
          })) : c.value ? (a(), L(xs, {
            key: 1,
            message: c.value,
            retry: !0,
            onRetry: D
          }, null, 8, ["message"])) : (a(), i(B, { key: 2 }, [
            M.value.length ? (a(), L(Et, {
              key: 0,
              title: "BROKEN",
              count: M.value.length
            }, {
              default: h(() => [
                (a(!0), i(B, null, ye(M.value, (Se) => (a(), L(Vt, {
                  key: Se.name,
                  status: "broken"
                }, {
                  icon: h(() => [...ae[7] || (ae[7] = [
                    S("⚠", -1)
                  ])]),
                  title: h(() => [
                    S(m(Se.name), 1)
                  ]),
                  subtitle: h(() => [
                    S(m(_e(Se)), 1)
                  ]),
                  actions: h(() => [
                    b(Me, {
                      variant: "primary",
                      size: "sm",
                      onClick: (pe) => ue(Se.name)
                    }, {
                      default: h(() => [...ae[8] || (ae[8] = [
                        S(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Me, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (pe) => se(Se.name)
                    }, {
                      default: h(() => [...ae[9] || (ae[9] = [
                        S(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Me, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (pe) => K(Se.name)
                    }, {
                      default: h(() => [...ae[10] || (ae[10] = [
                        S(" Details ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            P.value.length ? (a(), L(Et, {
              key: 1,
              title: "NEW",
              count: P.value.length
            }, {
              default: h(() => [
                (a(!0), i(B, null, ye(P.value, (Se) => (a(), L(Vt, {
                  key: Se.name,
                  status: Se.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: h(() => [
                    S(m(Se.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: h(() => [
                    S(m(Se.name), 1)
                  ]),
                  subtitle: h(() => [
                    S(m(ee(Se)), 1)
                  ]),
                  actions: h(() => [
                    b(Me, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (pe) => se(Se.name)
                    }, {
                      default: h(() => [...ae[11] || (ae[11] = [
                        S(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Me, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (pe) => K(Se.name)
                    }, {
                      default: h(() => [...ae[12] || (ae[12] = [
                        S(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            O.value.length ? (a(), L(Et, {
              key: 2,
              title: "MODIFIED",
              count: O.value.length
            }, {
              default: h(() => [
                (a(!0), i(B, null, ye(O.value, (Se) => (a(), L(Vt, {
                  key: Se.name,
                  status: Se.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: h(() => [...ae[13] || (ae[13] = [
                    S("⚡", -1)
                  ])]),
                  title: h(() => [
                    S(m(Se.name), 1)
                  ]),
                  subtitle: h(() => [
                    S(m(ee(Se)), 1)
                  ]),
                  actions: h(() => [
                    b(Me, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (pe) => se(Se.name)
                    }, {
                      default: h(() => [...ae[14] || (ae[14] = [
                        S(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Me, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (pe) => K(Se.name)
                    }, {
                      default: h(() => [...ae[15] || (ae[15] = [
                        S(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            F.value.length ? (a(), L(Et, {
              key: 3,
              title: "SYNCED",
              count: F.value.length,
              collapsible: !0,
              "initially-expanded": v.value,
              onToggle: ae[2] || (ae[2] = (Se) => v.value = Se)
            }, {
              default: h(() => [
                (a(!0), i(B, null, ye(W.value, (Se) => (a(), L(Vt, {
                  key: Se.name,
                  status: Se.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: h(() => [
                    S(m(Se.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: h(() => [
                    S(m(Se.name), 1)
                  ]),
                  subtitle: h(() => [
                    S(m(ee(Se)), 1)
                  ]),
                  actions: h(() => [
                    b(Me, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (pe) => se(Se.name)
                    }, {
                      default: h(() => [...ae[16] || (ae[16] = [
                        S(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Me, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (pe) => K(Se.name)
                    }, {
                      default: h(() => [...ae[17] || (ae[17] = [
                        S(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !f.value && F.value.length > 5 ? (a(), L(Me, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: ae[1] || (ae[1] = (Se) => f.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: h(() => [
                    S(" View all " + m(F.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : y("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : y("", !0),
            I.value.length ? y("", !0) : (a(), L(fs, {
              key: 4,
              icon: "📭",
              message: d.value ? `No workflows match '${d.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      p.value && g.value ? (a(), L(xy, {
        key: 0,
        "workflow-name": g.value,
        onClose: ae[3] || (ae[3] = (Se) => p.value = !1),
        onResolve: ae[4] || (ae[4] = (Se) => ue(g.value)),
        onRefresh: ae[5] || (ae[5] = (Se) => n("refresh"))
      }, null, 8, ["workflow-name"])) : y("", !0),
      w.value && g.value ? (a(), L(Zk, {
        key: 1,
        "workflow-name": g.value,
        onClose: te,
        onInstall: we,
        onRefresh: ae[6] || (ae[6] = (Se) => n("refresh")),
        onRestart: H
      }, null, 8, ["workflow-name"])) : y("", !0)
    ], 64));
  }
}), Eb = /* @__PURE__ */ Ie(Ib, [["__scopeId", "data-v-28ee54dd"]]), Tb = /* @__PURE__ */ Ce({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(e) {
    return (t, o) => (a(), i("div", {
      class: Be(["summary-bar", e.variant])
    }, [
      nt(t.$slots, "default", {}, void 0)
    ], 2));
  }
}), El = /* @__PURE__ */ Ie(Tb, [["__scopeId", "data-v-ccb7816e"]]);
async function Tl(e) {
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
const Mb = {
  key: 0,
  class: "model-details"
}, Pb = { class: "detail-section" }, Rb = { class: "detail-row" }, Lb = { class: "detail-value mono" }, Db = { class: "detail-row" }, Nb = { class: "detail-value mono" }, Ob = { class: "detail-row" }, Ub = { class: "detail-value mono" }, Ab = {
  key: 0,
  class: "detail-row"
}, zb = { class: "detail-value" }, Fb = ["disabled"], Vb = {
  key: 1,
  class: "detail-row"
}, Bb = { class: "detail-value hash-error" }, Wb = { class: "detail-row" }, Gb = { class: "detail-value" }, jb = { class: "detail-row" }, Hb = { class: "detail-value" }, qb = { class: "detail-row" }, Kb = { class: "detail-value" }, Jb = { class: "detail-section" }, Qb = { class: "section-header" }, Yb = {
  key: 0,
  class: "locations-list"
}, Xb = { class: "location-path mono" }, Zb = {
  key: 0,
  class: "location-modified"
}, e2 = ["onClick"], t2 = {
  key: 1,
  class: "empty-state"
}, s2 = { class: "detail-section" }, o2 = { class: "section-header-row" }, n2 = { class: "section-header" }, a2 = {
  key: 0,
  class: "sources-list"
}, l2 = { class: "source-type" }, i2 = ["href"], r2 = ["disabled", "onClick"], c2 = {
  key: 1,
  class: "empty-state"
}, u2 = {
  key: 2,
  class: "source-error"
}, d2 = {
  key: 3,
  class: "source-success"
}, m2 = /* @__PURE__ */ Ce({
  __name: "ModelDetailModal",
  props: {
    identifier: {},
    overlayZIndex: {}
  },
  emits: ["close", "sourceSaved"],
  setup(e, { emit: t }) {
    const o = e, n = t, { getModelDetails: l, removeModelSource: r, computeModelHashes: u } = rt(), c = k(null), d = k(!0), v = k(null), f = k(null), p = k(null), w = k(null), g = k(!1), _ = k(!1), C = k(null), $ = R(() => {
      var se;
      return !!((se = c.value) != null && se.hash && (!c.value.blake3 || !c.value.sha256));
    }), x = k(null);
    let I = null;
    function M(se, Q = "success", we = 2e3) {
      I && clearTimeout(I), x.value = { message: se, type: Q }, I = setTimeout(() => {
        x.value = null;
      }, we);
    }
    function P(se) {
      if (!se) return "Unknown";
      const Q = 1024 * 1024 * 1024, we = 1024 * 1024;
      return se >= Q ? `${(se / Q).toFixed(1)} GB` : se >= we ? `${(se / we).toFixed(0)} MB` : `${(se / 1024).toFixed(0)} KB`;
    }
    async function O(se) {
      try {
        await Tl(se), M("Copied to clipboard!");
      } catch (Q) {
        console.error("Failed to copy:", Q), M("Failed to copy to clipboard", "error");
      }
    }
    async function F(se) {
      if (c.value) {
        f.value = se, p.value = null, w.value = null;
        try {
          await r(c.value.hash, se), M("Source removed"), await ue();
        } catch (Q) {
          p.value = Q instanceof Error ? Q.message : "Failed to remove source";
        } finally {
          f.value = null;
        }
      }
    }
    async function W() {
      w.value = "Source added successfully!", g.value = !1, await ue(), n("sourceSaved");
    }
    async function D() {
      await ue();
    }
    async function K() {
      var se;
      if ((se = c.value) != null && se.hash) {
        _.value = !0, C.value = null;
        try {
          c.value = await u(c.value.hash), M("Hashes computed successfully!");
        } catch (Q) {
          C.value = Q instanceof Error ? Q.message : "Failed to compute hashes";
        } finally {
          _.value = !1;
        }
      }
    }
    async function ue() {
      d.value = !0, v.value = null;
      try {
        c.value = await l(o.identifier);
      } catch (se) {
        v.value = se instanceof Error ? se.message : "Failed to load model details";
      } finally {
        d.value = !1;
      }
    }
    return at(ue), (se, Q) => {
      var we;
      return a(), i(B, null, [
        b($t, {
          title: `Model Details: ${((we = c.value) == null ? void 0 : we.filename) || "Loading..."}`,
          size: "lg",
          loading: d.value,
          error: v.value,
          "overlay-z-index": e.overlayZIndex,
          onClose: Q[5] || (Q[5] = (te) => se.$emit("close"))
        }, {
          body: h(() => {
            var te, H, q, _e;
            return [
              c.value ? (a(), i("div", Mb, [
                s("section", Pb, [
                  s("div", Rb, [
                    Q[7] || (Q[7] = s("span", { class: "detail-label" }, "Hash:", -1)),
                    s("span", Lb, m(c.value.hash || "Not computed"), 1),
                    c.value.hash ? (a(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: Q[0] || (Q[0] = (ee) => O(c.value.hash))
                    }, "Copy")) : y("", !0)
                  ]),
                  s("div", Db, [
                    Q[8] || (Q[8] = s("span", { class: "detail-label" }, "Blake3:", -1)),
                    s("span", Nb, m(c.value.blake3 || "Not computed"), 1),
                    c.value.blake3 ? (a(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: Q[1] || (Q[1] = (ee) => O(c.value.blake3))
                    }, "Copy")) : y("", !0)
                  ]),
                  s("div", Ob, [
                    Q[9] || (Q[9] = s("span", { class: "detail-label" }, "SHA256:", -1)),
                    s("span", Ub, m(c.value.sha256 || "Not computed"), 1),
                    c.value.sha256 ? (a(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: Q[2] || (Q[2] = (ee) => O(c.value.sha256))
                    }, "Copy")) : y("", !0)
                  ]),
                  $.value ? (a(), i("div", Ab, [
                    Q[10] || (Q[10] = s("span", { class: "detail-label" }, null, -1)),
                    s("span", zb, [
                      s("button", {
                        class: "compute-hashes-btn",
                        disabled: _.value,
                        onClick: K
                      }, m(_.value ? "Computing hashes..." : "Compute Full Hashes"), 9, Fb)
                    ])
                  ])) : y("", !0),
                  C.value ? (a(), i("div", Vb, [
                    Q[11] || (Q[11] = s("span", { class: "detail-label" }, null, -1)),
                    s("span", Bb, m(C.value), 1)
                  ])) : y("", !0),
                  s("div", Wb, [
                    Q[12] || (Q[12] = s("span", { class: "detail-label" }, "Size:", -1)),
                    s("span", Gb, m(P(c.value.size)), 1)
                  ]),
                  s("div", jb, [
                    Q[13] || (Q[13] = s("span", { class: "detail-label" }, "Category:", -1)),
                    s("span", Hb, m(c.value.category), 1)
                  ]),
                  s("div", qb, [
                    Q[14] || (Q[14] = s("span", { class: "detail-label" }, "Last Seen:", -1)),
                    s("span", Kb, m(c.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                s("section", Jb, [
                  s("h4", Qb, "Locations (" + m(((te = c.value.locations) == null ? void 0 : te.length) || 0) + ")", 1),
                  (H = c.value.locations) != null && H.length ? (a(), i("div", Yb, [
                    (a(!0), i(B, null, ye(c.value.locations, (ee, me) => (a(), i("div", {
                      key: me,
                      class: "location-item"
                    }, [
                      s("span", Xb, m(ee.path), 1),
                      ee.modified ? (a(), i("span", Zb, "Modified: " + m(ee.modified), 1)) : y("", !0),
                      ee.path ? (a(), i("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (z) => O(ee.path)
                      }, " Copy File Path ", 8, e2)) : y("", !0)
                    ]))), 128))
                  ])) : (a(), i("div", t2, "No locations found"))
                ]),
                s("section", s2, [
                  s("div", o2, [
                    s("h4", n2, "Download Sources (" + m(((q = c.value.sources) == null ? void 0 : q.length) || 0) + ")", 1),
                    s("button", {
                      class: "find-source-btn",
                      onClick: Q[3] || (Q[3] = (ee) => g.value = !0)
                    }, " Find Source ")
                  ]),
                  (_e = c.value.sources) != null && _e.length ? (a(), i("div", a2, [
                    (a(!0), i(B, null, ye(c.value.sources, (ee, me) => (a(), i("div", {
                      key: me,
                      class: "source-item"
                    }, [
                      s("span", l2, m(ee.type) + ":", 1),
                      s("a", {
                        href: ee.url,
                        target: "_blank",
                        class: "source-url"
                      }, m(ee.url), 9, i2),
                      s("button", {
                        class: "remove-source-btn",
                        disabled: f.value === ee.url,
                        onClick: (z) => F(ee.url)
                      }, m(f.value === ee.url ? "..." : "×"), 9, r2)
                    ]))), 128))
                  ])) : (a(), i("div", c2, " No download sources configured ")),
                  p.value ? (a(), i("p", u2, m(p.value), 1)) : y("", !0),
                  w.value ? (a(), i("p", d2, m(w.value), 1)) : y("", !0)
                ])
              ])) : y("", !0)
            ];
          }),
          footer: h(() => [
            s("button", {
              class: "btn-secondary",
              onClick: Q[4] || (Q[4] = (te) => se.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error", "overlay-z-index"]),
        (a(), L(Jt, { to: "body" }, [
          x.value ? (a(), i("div", {
            key: 0,
            class: Be(["toast", x.value.type])
          }, m(x.value.message), 3)) : y("", !0)
        ])),
        c.value && g.value ? (a(), L(ac, {
          key: 0,
          model: c.value,
          "overlay-z-index": (e.overlayZIndex || 10003) + 2,
          onClose: Q[6] || (Q[6] = (te) => g.value = !1),
          onSaved: W,
          onHashesComputed: D
        }, null, 8, ["model", "overlay-z-index"])) : y("", !0)
      ], 64);
    };
  }
}), cc = /* @__PURE__ */ Ie(m2, [["__scopeId", "data-v-cd808fbc"]]), f2 = { class: "workflow-links-tab" }, v2 = { class: "section-header-row" }, p2 = {
  key: 0,
  class: "state-message"
}, g2 = {
  key: 1,
  class: "error-message"
}, h2 = {
  key: 2,
  class: "candidate-list"
}, y2 = {
  key: 3,
  class: "state-message"
}, w2 = /* @__PURE__ */ Ce({
  __name: "WorkflowLinksTab",
  emits: ["selectUrl"],
  setup(e, { emit: t }) {
    const o = t, { getWorkflowSourceCandidates: n } = rt(), l = k([]), r = k(!1), u = k(null), c = R(() => l.value.filter((v) => v.source === "workflow"));
    async function d() {
      r.value = !0, u.value = null;
      try {
        const v = await n();
        l.value = v.candidates;
      } catch (v) {
        u.value = v instanceof Error ? v.message : "Failed to scan workflows";
      } finally {
        r.value = !1;
      }
    }
    return at(d), (v, f) => (a(), i("div", f2, [
      s("div", v2, [
        f[2] || (f[2] = s("div", null, [
          s("h4", null, "Workflow Links"),
          s("p", null, "Model links found in saved workflow notes or metadata.")
        ], -1)),
        b(Oe, {
          variant: "secondary",
          size: "sm",
          loading: r.value,
          onClick: d
        }, {
          default: h(() => [...f[1] || (f[1] = [
            S(" Scan ", -1)
          ])]),
          _: 1
        }, 8, ["loading"])
      ]),
      r.value ? (a(), i("div", p2, "Scanning workflows...")) : u.value ? (a(), i("div", g2, m(u.value), 1)) : c.value.length ? (a(), i("div", h2, [
        (a(!0), i(B, null, ye(c.value, (p) => (a(), L(oc, {
          key: `${p.workflow}:${p.url}`,
          candidate: p,
          "action-label": "Use URL",
          onSelect: f[0] || (f[0] = (w) => o("selectUrl", w))
        }, null, 8, ["candidate"]))), 128))
      ])) : (a(), i("div", y2, " No likely workflow links found. Try Hugging Face or Direct URL. "))
    ]));
  }
}), _2 = /* @__PURE__ */ Ie(w2, [["__scopeId", "data-v-1aac54cc"]]), k2 = { class: "civitai-tab" }, b2 = /* @__PURE__ */ Ce({
  __name: "CivitaiTab",
  setup(e) {
    return (t, o) => (a(), i("div", k2, [...o[0] || (o[0] = [
      s("div", { class: "placeholder" }, [
        s("div", { class: "icon" }, "🎨"),
        s("h3", null, "Civitai Integration"),
        s("p", null, "Coming soon! Civitai model search and download will be available in a future update.")
      ], -1)
    ])]));
  }
}), $2 = /* @__PURE__ */ Ie(b2, [["__scopeId", "data-v-44948051"]]), C2 = { class: "direct-url-tab" }, x2 = {
  key: 0,
  class: "error"
}, S2 = /* @__PURE__ */ Ce({
  __name: "DirectUrlTab",
  props: {
    initialUrl: {}
  },
  emits: ["queue"],
  setup(e, { emit: t }) {
    const o = e, n = t, l = k(""), r = k("");
    vt(() => o.initialUrl, (v) => {
      v && v !== l.value && (l.value = v);
    }, { immediate: !0 });
    const u = R(() => {
      const v = l.value.trim();
      if (!v) return "";
      try {
        const f = new URL(v);
        return decodeURIComponent(f.pathname).replace(/\\/g, "/").split("/").filter(Boolean).pop() || "";
      } catch {
        return v.split("?", 1)[0].replace(/\\/g, "/").split("/").filter(Boolean).pop() || "";
      }
    }), c = (v) => {
      if (!r.value.trim() || !u.value) return;
      const f = d(r.value, u.value);
      n("queue", [{
        url: v,
        targetPath: f,
        filename: u.value
      }]), l.value = "";
    };
    function d(v, f) {
      return `${v.replace(/\/+$/, "")}/${f.replace(/^\/+/, "")}`;
    }
    return (v, f) => (a(), i("div", C2, [
      b(nc, {
        modelValue: l.value,
        "onUpdate:modelValue": f[1] || (f[1] = (p) => l.value = p),
        label: "Download URL",
        placeholder: "https://example.com/model.safetensors",
        "action-label": "Queue Download",
        disabled: !r.value.trim() || !u.value,
        onSubmit: c
      }, {
        default: h(() => [
          b(tc, {
            modelValue: r.value,
            "onUpdate:modelValue": f[0] || (f[0] = (p) => r.value = p)
          }, null, 8, ["modelValue"]),
          l.value.trim() && !u.value ? (a(), i("p", x2, " Could not infer a filename from this URL. ")) : y("", !0),
          f[2] || (f[2] = s("p", { class: "note" }, "Model will be queued for background download.", -1))
        ]),
        _: 1
      }, 8, ["modelValue", "disabled"])
    ]));
  }
}), I2 = /* @__PURE__ */ Ie(S2, [["__scopeId", "data-v-a6d21f27"]]), E2 = { class: "download-modal" }, T2 = { class: "tab-bar" }, M2 = ["onClick"], P2 = { class: "tab-content" }, R2 = /* @__PURE__ */ Ce({
  __name: "ModelDownloadModal",
  props: {
    show: { type: Boolean }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const o = t, { addToQueue: n } = Do(), l = [
      { id: "workflow", label: "Workflow Links", icon: "🔎" },
      { id: "huggingface", label: "HuggingFace", icon: "🤗" },
      { id: "civitai", label: "Civitai", icon: "🎨" },
      { id: "direct", label: "Direct URL", icon: "🔗" }
    ], r = k("workflow"), u = k("");
    function c(p) {
      n(p.map((w) => ({
        workflow: "__manual__",
        filename: w.filename,
        url: w.url,
        targetPath: w.destination ? `${w.destination}/${w.filename}` : w.filename
      }))), o("close");
    }
    function d(p) {
      n(p.map((w) => ({
        workflow: "__manual__",
        filename: w.filename,
        url: w.url,
        targetPath: w.targetPath
      }))), o("close");
    }
    function v(p) {
      u.value = p, r.value = "direct";
    }
    function f() {
      o("close");
    }
    return (p, w) => e.show ? (a(), L($t, {
      key: 0,
      title: "DOWNLOAD NEW MODEL",
      size: "xl",
      "fixed-height": "",
      onClose: f
    }, {
      body: h(() => [
        s("div", E2, [
          s("div", T2, [
            (a(), i(B, null, ye(l, (g) => s("button", {
              key: g.id,
              class: Be(["tab-btn", { active: r.value === g.id }]),
              onClick: (_) => r.value = g.id
            }, m(g.icon) + " " + m(g.label), 11, M2)), 64))
          ]),
          s("div", P2, [
            r.value === "workflow" ? (a(), L(_2, {
              key: 0,
              onSelectUrl: v
            })) : r.value === "huggingface" ? (a(), L(sc, {
              key: 1,
              onQueue: c
            })) : r.value === "civitai" ? (a(), L($2, { key: 2 })) : r.value === "direct" ? (a(), L(I2, {
              key: 3,
              "initial-url": u.value,
              onQueue: d
            }, null, 8, ["initial-url"])) : y("", !0)
          ])
        ])
      ]),
      footer: h(() => [
        b(Oe, {
          variant: "secondary",
          onClick: f
        }, {
          default: h(() => [...w[0] || (w[0] = [
            S(" Cancel ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    })) : y("", !0);
  }
}), uc = /* @__PURE__ */ Ie(R2, [["__scopeId", "data-v-de2e4fac"]]), L2 = /* @__PURE__ */ Ce({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(e, { emit: t }) {
    const o = t, { getEnvironmentModels: n, getStatus: l } = rt(), r = k([]), u = k([]), c = k("production"), d = k(!1), v = k(null), f = k(""), p = k(!1), w = k(null), g = k(!1);
    function _() {
      p.value = !1, o("navigate", "model-index");
    }
    const C = R(
      () => r.value.reduce((D, K) => D + (K.size || 0), 0)
    ), $ = R(() => {
      if (!f.value.trim()) return r.value;
      const D = f.value.toLowerCase();
      return r.value.filter((K) => K.filename.toLowerCase().includes(D));
    }), x = R(() => {
      if (!f.value.trim()) return u.value;
      const D = f.value.toLowerCase();
      return u.value.filter((K) => K.filename.toLowerCase().includes(D));
    }), I = R(() => {
      const D = {};
      for (const ue of $.value) {
        const se = ue.type || "other";
        D[se] || (D[se] = []), D[se].push(ue);
      }
      const K = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(D).sort(([ue], [se]) => {
        const Q = K.indexOf(ue), we = K.indexOf(se);
        return Q >= 0 && we >= 0 ? Q - we : Q >= 0 ? -1 : we >= 0 ? 1 : ue.localeCompare(se);
      }).map(([ue, se]) => ({ type: ue, models: se }));
    });
    function M(D) {
      if (!D) return "Unknown";
      const K = D / (1024 * 1024);
      return K >= 1024 ? `${(K / 1024).toFixed(1)} GB` : `${K.toFixed(0)} MB`;
    }
    function P(D) {
      w.value = D.hash || D.filename;
    }
    function O(D) {
      o("navigate", "model-index");
    }
    function F(D) {
      alert(`Download functionality not yet implemented for ${D}`);
    }
    async function W() {
      d.value = !0, v.value = null;
      try {
        const D = await n();
        r.value = D, u.value = [];
        const K = await l();
        c.value = K.environment || "production";
      } catch (D) {
        v.value = D instanceof Error ? D.message : "Failed to load models";
      } finally {
        d.value = !1;
      }
    }
    return at(W), (D, K) => (a(), i(B, null, [
      b(Ut, null, {
        header: h(() => [
          b(At, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: K[1] || (K[1] = (ue) => p.value = !0)
          }, {
            actions: h(() => [
              b(Me, {
                variant: "primary",
                size: "sm",
                onClick: K[0] || (K[0] = (ue) => g.value = !0)
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
                  S(" DOWNLOAD + ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          b(ro, {
            modelValue: f.value,
            "onUpdate:modelValue": K[2] || (K[2] = (ue) => f.value = ue),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          d.value ? (a(), L(Cs, {
            key: 0,
            message: "Loading environment models..."
          })) : v.value ? (a(), L(xs, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: W
          }, null, 8, ["message"])) : (a(), i(B, { key: 2 }, [
            r.value.length ? (a(), L(El, {
              key: 0,
              variant: "compact"
            }, {
              default: h(() => [
                S(" Total: " + m(r.value.length) + " models • " + m(M(C.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : y("", !0),
            (a(!0), i(B, null, ye(I.value, (ue) => (a(), L(Et, {
              key: ue.type,
              title: ue.type.toUpperCase(),
              count: ue.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: h(() => [
                (a(!0), i(B, null, ye(ue.models, (se) => (a(), L(Vt, {
                  key: se.hash || se.filename,
                  status: "synced"
                }, {
                  icon: h(() => [...K[7] || (K[7] = [
                    S("📦", -1)
                  ])]),
                  title: h(() => [
                    S(m(se.filename), 1)
                  ]),
                  subtitle: h(() => [
                    S(m(M(se.size)), 1)
                  ]),
                  details: h(() => [
                    b(kt, {
                      label: "Used by:",
                      value: (se.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    b(kt, {
                      label: "Path:",
                      value: se.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Me, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Q) => P(se)
                    }, {
                      default: h(() => [...K[8] || (K[8] = [
                        S(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 2
            }, 1032, ["title", "count"]))), 128)),
            x.value.length ? (a(), L(Et, {
              key: 1,
              title: "MISSING",
              count: x.value.length
            }, {
              default: h(() => [
                (a(!0), i(B, null, ye(x.value, (ue) => (a(), L(Vt, {
                  key: ue.filename,
                  status: "broken"
                }, {
                  icon: h(() => [...K[9] || (K[9] = [
                    S("⚠", -1)
                  ])]),
                  title: h(() => [
                    S(m(ue.filename), 1)
                  ]),
                  subtitle: h(() => [...K[10] || (K[10] = [
                    s("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: h(() => {
                    var se;
                    return [
                      b(kt, {
                        label: "Required by:",
                        value: ((se = ue.workflow_names) == null ? void 0 : se.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: h(() => [
                    b(Me, {
                      variant: "primary",
                      size: "sm",
                      onClick: (se) => F(ue.filename)
                    }, {
                      default: h(() => [...K[11] || (K[11] = [
                        S(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Me, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (se) => O(ue.filename)
                    }, {
                      default: h(() => [...K[12] || (K[12] = [
                        S(" Search Workspace Index ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            !$.value.length && !x.value.length ? (a(), L(fs, {
              key: 2,
              icon: "📭",
              message: f.value ? `No models match '${f.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : y("", !0)
          ], 64))
        ]),
        _: 1
      }),
      b(is, {
        show: p.value,
        title: "About Environment Models",
        onClose: K[3] || (K[3] = (ue) => p.value = !1)
      }, {
        content: h(() => [
          s("p", null, [
            K[13] || (K[13] = S(" These are models currently used by workflows in ", -1)),
            s("strong", null, '"' + m(c.value) + '"', 1),
            K[14] || (K[14] = S(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: h(() => [
          b(Me, {
            variant: "primary",
            onClick: _
          }, {
            default: h(() => [...K[15] || (K[15] = [
              S(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w.value ? (a(), L(cc, {
        key: 0,
        identifier: w.value,
        onClose: K[4] || (K[4] = (ue) => w.value = null)
      }, null, 8, ["identifier"])) : y("", !0),
      b(uc, {
        show: g.value,
        onClose: K[5] || (K[5] = (ue) => g.value = !1)
      }, null, 8, ["show"])
    ], 64));
  }
}), D2 = /* @__PURE__ */ Ie(L2, [["__scopeId", "data-v-af3ca736"]]), N2 = {
  key: 0,
  class: "indexing-progress"
}, O2 = { class: "progress-info" }, U2 = { class: "progress-label" }, A2 = { class: "progress-count" }, z2 = { class: "progress-bar" }, F2 = { class: "directory-modal-body" }, V2 = { class: "input-group" }, B2 = { class: "current-path" }, W2 = { class: "input-group" }, G2 = /* @__PURE__ */ Ce({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(e, { emit: t }) {
    const {
      getWorkspaceModels: o,
      scanWorkspaceModels: n,
      getModelsDirectory: l,
      setModelsDirectory: r
    } = rt(), u = t, c = k([]), d = k(!1), v = k(!1), f = k(null), p = k(""), w = k(!1), g = k(null), _ = k(!1), C = k(null), $ = k(""), x = k(!1), I = k(!1), M = k(null), P = R(
      () => c.value.reduce((we, te) => we + (te.size || 0), 0)
    ), O = R(() => {
      if (!p.value.trim()) return c.value;
      const we = p.value.toLowerCase();
      return c.value.filter((te) => {
        const H = te, q = te.sha256 || H.sha256_hash || "";
        return te.filename.toLowerCase().includes(we) || q.toLowerCase().includes(we);
      });
    }), F = R(() => {
      const we = {};
      for (const H of O.value) {
        const q = H.type || "other";
        we[q] || (we[q] = []), we[q].push(H);
      }
      const te = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(we).sort(([H], [q]) => {
        const _e = te.indexOf(H), ee = te.indexOf(q);
        return _e >= 0 && ee >= 0 ? _e - ee : _e >= 0 ? -1 : ee >= 0 ? 1 : H.localeCompare(q);
      }).map(([H, q]) => ({ type: H, models: q }));
    });
    function W(we) {
      if (!we) return "Unknown";
      const te = 1024 * 1024 * 1024, H = 1024 * 1024;
      return we >= te ? `${(we / te).toFixed(1)} GB` : we >= H ? `${(we / H).toFixed(0)} MB` : `${(we / 1024).toFixed(0)} KB`;
    }
    function D(we) {
      g.value = we.hash || we.filename;
    }
    async function K() {
      v.value = !0, f.value = null;
      try {
        const we = await n();
        await se(), we.changes > 0 && console.log(`Scan complete: ${we.changes} changes detected`);
      } catch (we) {
        f.value = we instanceof Error ? we.message : "Failed to scan models";
      } finally {
        v.value = !1;
      }
    }
    async function ue() {
      if ($.value.trim()) {
        x.value = !0, f.value = null;
        try {
          const we = await r($.value.trim());
          C.value = we.path, _.value = !1, $.value = "", await se(), console.log(`Directory changed: ${we.models_indexed} models indexed`), u("refresh");
        } catch (we) {
          f.value = we instanceof Error ? we.message : "Failed to change directory";
        } finally {
          x.value = !1;
        }
      }
    }
    async function se() {
      d.value = !0, f.value = null;
      try {
        c.value = await o();
      } catch (we) {
        f.value = we instanceof Error ? we.message : "Failed to load workspace models";
      } finally {
        d.value = !1;
      }
    }
    async function Q() {
      try {
        const we = await l();
        C.value = we.path;
      } catch {
      }
    }
    return at(() => {
      se(), Q();
    }), (we, te) => (a(), i(B, null, [
      b(Ut, null, {
        header: h(() => [
          b(At, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: te[2] || (te[2] = (H) => w.value = !0)
          }, {
            actions: h(() => [
              b(Me, {
                variant: "primary",
                size: "sm",
                disabled: v.value,
                onClick: K
              }, {
                default: h(() => [
                  S(m(v.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              b(Me, {
                variant: "primary",
                size: "sm",
                onClick: te[0] || (te[0] = (H) => _.value = !0)
              }, {
                default: h(() => [...te[10] || (te[10] = [
                  S(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              b(Me, {
                variant: "primary",
                size: "sm",
                onClick: te[1] || (te[1] = (H) => I.value = !0)
              }, {
                default: h(() => [...te[11] || (te[11] = [
                  s("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    s("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                    s("path", { d: "M14 14H2v-2h12v2z" })
                  ], -1),
                  S(" DOWNLOAD + ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          M.value ? (a(), i("div", N2, [
            s("div", O2, [
              s("span", U2, m(M.value.message), 1),
              s("span", A2, m(M.value.current) + "/" + m(M.value.total), 1)
            ]),
            s("div", z2, [
              s("div", {
                class: "progress-fill",
                style: Lt({ width: `${M.value.current / M.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : y("", !0),
          b(ro, {
            modelValue: p.value,
            "onUpdate:modelValue": te[3] || (te[3] = (H) => p.value = H),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          d.value || M.value ? (a(), L(Cs, {
            key: 0,
            message: M.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : f.value ? (a(), L(xs, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: se
          }, null, 8, ["message"])) : (a(), i(B, { key: 2 }, [
            c.value.length ? (a(), L(El, {
              key: 0,
              variant: "compact"
            }, {
              default: h(() => [
                S(" Total: " + m(c.value.length) + " models • " + m(W(P.value)), 1)
              ]),
              _: 1
            })) : y("", !0),
            (a(!0), i(B, null, ye(F.value, (H) => (a(), L(Et, {
              key: H.type,
              title: H.type.toUpperCase(),
              count: H.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: h(() => [
                (a(!0), i(B, null, ye(H.models, (q) => (a(), L(Vt, {
                  key: q.sha256 || q.filename,
                  status: "synced"
                }, {
                  icon: h(() => [...te[12] || (te[12] = [
                    S("📦", -1)
                  ])]),
                  title: h(() => [
                    S(m(q.filename), 1)
                  ]),
                  subtitle: h(() => [
                    S(m(W(q.size)), 1)
                  ]),
                  details: h(() => [
                    b(kt, {
                      label: "Hash:",
                      value: q.hash ? q.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Me, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (_e) => D(q)
                    }, {
                      default: h(() => [...te[13] || (te[13] = [
                        S(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 2
            }, 1032, ["title", "count"]))), 128)),
            O.value.length ? y("", !0) : (a(), L(fs, {
              key: 1,
              icon: "📭",
              message: p.value ? `No models match '${p.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      b(is, {
        show: w.value,
        title: "About Workspace Model Index",
        onClose: te[4] || (te[4] = (H) => w.value = !1)
      }, {
        content: h(() => [...te[14] || (te[14] = [
          s("p", null, [
            S(" Content-addressable model storage shared across "),
            s("strong", null, "all environments"),
            S(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      g.value ? (a(), L(cc, {
        key: 0,
        identifier: g.value,
        onClose: te[5] || (te[5] = (H) => g.value = null)
      }, null, 8, ["identifier"])) : y("", !0),
      _.value ? (a(), L($t, {
        key: 1,
        title: "Change Models Directory",
        size: "md",
        "overlay-z-index": 10010,
        onClose: te[8] || (te[8] = (H) => _.value = !1)
      }, {
        body: h(() => [
          s("div", F2, [
            s("div", V2, [
              te[15] || (te[15] = s("label", null, "Current Directory", -1)),
              s("code", B2, m(C.value || "Not set"), 1)
            ]),
            s("div", W2, [
              te[16] || (te[16] = s("label", null, "New Directory Path", -1)),
              b(bt, {
                modelValue: $.value,
                "onUpdate:modelValue": te[6] || (te[6] = (H) => $.value = H),
                placeholder: "/path/to/models"
              }, null, 8, ["modelValue"])
            ]),
            te[17] || (te[17] = s("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
          ])
        ]),
        footer: h(() => [
          b(Oe, {
            variant: "secondary",
            onClick: te[7] || (te[7] = (H) => _.value = !1)
          }, {
            default: h(() => [...te[18] || (te[18] = [
              S(" Cancel ", -1)
            ])]),
            _: 1
          }),
          b(Oe, {
            variant: "primary",
            disabled: !$.value.trim() || x.value,
            loading: x.value,
            onClick: ue
          }, {
            default: h(() => [
              S(m(x.value ? "Indexing..." : "Change Directory"), 1)
            ]),
            _: 1
          }, 8, ["disabled", "loading"])
        ]),
        _: 1
      })) : y("", !0),
      b(uc, {
        show: I.value,
        onClose: te[9] || (te[9] = (H) => I.value = !1)
      }, null, 8, ["show"])
    ], 64));
  }
}), j2 = /* @__PURE__ */ Ie(G2, [["__scopeId", "data-v-9fca048b"]]), H2 = { class: "node-details" }, q2 = { class: "status-row" }, K2 = {
  key: 0,
  class: "detail-row"
}, J2 = { class: "value" }, Q2 = { class: "detail-row" }, Y2 = { class: "value" }, X2 = {
  key: 1,
  class: "detail-row"
}, Z2 = { class: "value mono" }, e$ = {
  key: 2,
  class: "detail-row"
}, t$ = ["href"], s$ = {
  key: 3,
  class: "detail-row"
}, o$ = { class: "value mono small" }, n$ = { class: "detail-row" }, a$ = {
  key: 0,
  class: "value"
}, l$ = {
  key: 1,
  class: "workflow-list"
}, i$ = /* @__PURE__ */ Ce({
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
    return (c, d) => (a(), L($t, {
      title: `NODE DETAILS: ${e.node.name}`,
      size: "md",
      onClose: d[1] || (d[1] = (v) => n("close"))
    }, {
      body: h(() => [
        s("div", H2, [
          s("div", q2, [
            d[2] || (d[2] = s("span", { class: "label" }, "Status:", -1)),
            s("span", {
              class: Be(["status-badge", l.value])
            }, m(r.value), 3)
          ]),
          e.node.version ? (a(), i("div", K2, [
            d[3] || (d[3] = s("span", { class: "label" }, "Version:", -1)),
            s("span", J2, m(e.node.source === "development" ? "" : "v") + m(e.node.version), 1)
          ])) : y("", !0),
          s("div", Q2, [
            d[4] || (d[4] = s("span", { class: "label" }, "Source:", -1)),
            s("span", Y2, m(u.value), 1)
          ]),
          e.node.registry_id ? (a(), i("div", X2, [
            d[5] || (d[5] = s("span", { class: "label" }, "Registry ID:", -1)),
            s("span", Z2, m(e.node.registry_id), 1)
          ])) : y("", !0),
          e.node.repository ? (a(), i("div", e$, [
            d[7] || (d[7] = s("span", { class: "label" }, "Repository:", -1)),
            s("a", {
              href: e.node.repository,
              target: "_blank",
              rel: "noopener noreferrer",
              class: "repo-link"
            }, [
              S(m(e.node.repository) + " ", 1),
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
            ], 8, t$)
          ])) : y("", !0),
          e.node.download_url ? (a(), i("div", s$, [
            d[8] || (d[8] = s("span", { class: "label" }, "Download URL:", -1)),
            s("span", o$, m(e.node.download_url), 1)
          ])) : y("", !0),
          d[10] || (d[10] = s("div", { class: "section-divider" }, null, -1)),
          s("div", n$, [
            d[9] || (d[9] = s("span", { class: "label" }, "Used by:", -1)),
            !e.node.used_in_workflows || e.node.used_in_workflows.length === 0 ? (a(), i("span", a$, " Not used in any workflows ")) : (a(), i("div", l$, [
              (a(!0), i(B, null, ye(e.node.used_in_workflows, (v) => (a(), i("span", {
                key: v,
                class: "workflow-tag"
              }, m(v), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: h(() => [
        b(Oe, {
          variant: "secondary",
          onClick: d[0] || (d[0] = (v) => n("close"))
        }, {
          default: h(() => [...d[11] || (d[11] = [
            S(" Close ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), r$ = /* @__PURE__ */ Ie(i$, [["__scopeId", "data-v-b342f626"]]), c$ = { class: "dialog-message" }, u$ = {
  key: 0,
  class: "dialog-details"
}, d$ = {
  key: 1,
  class: "dialog-warning"
}, m$ = /* @__PURE__ */ Ce({
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
    return (t, o) => (a(), L($t, {
      title: e.title,
      size: "sm",
      onClose: o[3] || (o[3] = (n) => t.$emit("cancel"))
    }, {
      body: h(() => [
        s("p", c$, m(e.message), 1),
        e.details && e.details.length ? (a(), i("div", u$, [
          (a(!0), i(B, null, ye(e.details, (n, l) => (a(), i("div", {
            key: l,
            class: "detail-item"
          }, " • " + m(n), 1))), 128))
        ])) : y("", !0),
        e.warning ? (a(), i("p", d$, [
          o[4] || (o[4] = s("span", { class: "warning-icon" }, "⚠", -1)),
          S(" " + m(e.warning), 1)
        ])) : y("", !0)
      ]),
      footer: h(() => [
        b(Oe, {
          variant: "secondary",
          onClick: o[0] || (o[0] = (n) => t.$emit("cancel"))
        }, {
          default: h(() => [
            S(m(e.cancelLabel), 1)
          ]),
          _: 1
        }),
        e.secondaryAction ? (a(), L(Oe, {
          key: 0,
          variant: "secondary",
          onClick: o[1] || (o[1] = (n) => t.$emit("secondary"))
        }, {
          default: h(() => [
            S(m(e.secondaryLabel), 1)
          ]),
          _: 1
        })) : y("", !0),
        b(Oe, {
          variant: e.destructive ? "danger" : "primary",
          onClick: o[2] || (o[2] = (n) => t.$emit("confirm"))
        }, {
          default: h(() => [
            S(m(e.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Ml = /* @__PURE__ */ Ie(m$, [["__scopeId", "data-v-3670b9f5"]]), f$ = { class: "mismatch-warning" }, v$ = { class: "version-mismatch" }, p$ = { class: "version-actual" }, g$ = { class: "version-expected" }, h$ = { style: { color: "var(--cg-color-warning)" } }, y$ = { style: { color: "var(--cg-color-warning)" } }, w$ = {
  key: 0,
  class: "community-status-badge"
}, _$ = { key: 0 }, k$ = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, b$ = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, $$ = { class: "criticality-control" }, C$ = ["value", "disabled", "onChange"], x$ = /* @__PURE__ */ Ce({
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
      updateNodeCriticality: v
    } = rt(), f = k({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0,
      blocked_count: 0
    }), p = k(!1), w = k(null), g = k(""), _ = k(!1), C = k(null), $ = k(/* @__PURE__ */ new Set()), x = k(/* @__PURE__ */ new Set()), I = k(null), M = R(() => {
      if (!g.value.trim()) return f.value.nodes;
      const fe = g.value.toLowerCase();
      return f.value.nodes.filter(
        (le) => {
          var E, A;
          return le.name.toLowerCase().includes(fe) || ((E = le.description) == null ? void 0 : E.toLowerCase().includes(fe)) || ((A = le.repository) == null ? void 0 : A.toLowerCase().includes(fe));
        }
      );
    }), P = R(
      () => M.value.filter((fe) => fe.installed && fe.tracked)
    ), O = R(
      () => M.value.filter((fe) => !fe.installed && fe.tracked && !fe.issue_type)
    ), F = R(
      () => M.value.filter((fe) => fe.installed && !fe.tracked)
    ), W = R(
      () => M.value.filter((fe) => fe.issue_type === "version_gated")
    ), D = R(
      () => M.value.filter((fe) => fe.issue_type === "uninstallable")
    );
    function K(fe) {
      return fe.registry_id || fe.name;
    }
    function ue(fe) {
      return $.value.has(K(fe));
    }
    async function se(fe, le) {
      const E = fe.registry_id;
      if (!E) {
        n("toast", `Node "${fe.name}" has no package id for install`, "warning");
        return;
      }
      if (le === "git" && !fe.repository) {
        n("toast", `Node "${fe.name}" has no repository URL for git install`, "warning");
        return;
      }
      const A = {
        id: E,
        version: "latest",
        selected_version: "latest",
        mode: "remote",
        channel: "default"
      };
      le === "git" && fe.repository && (A.repository = fe.repository, A.install_source = "git"), await d(A), $.value.add(K(fe)), n("toast", `✓ Queued install for "${fe.name}"`, "success");
    }
    function Q(fe) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[fe] || fe;
    }
    const we = R(() => o.versionMismatches.length > 0);
    function te(fe) {
      return !fe.used_in_workflows || fe.used_in_workflows.length === 0 ? "Not used in any workflows" : fe.used_in_workflows.length === 1 ? fe.used_in_workflows[0] : `${fe.used_in_workflows.length} workflows`;
    }
    function H(fe) {
      return fe.criticality === "optional" ? "optional" : "required";
    }
    function q(fe) {
      return x.value.has(fe.name);
    }
    async function _e(fe, le) {
      const E = le.target, A = H(fe), ce = E.value;
      if (ce !== A) {
        x.value = new Set(x.value).add(fe.name), fe.criticality = ce;
        try {
          const $e = await v(fe.name, ce);
          if ($e.status !== "success") {
            fe.criticality = A, n("toast", $e.message || `Failed to update "${fe.name}" criticality`, "error");
            return;
          }
          n("toast", `Marked "${fe.name}" as ${ce}`, "success");
        } catch ($e) {
          fe.criticality = A, E.value = A, n("toast", `Error updating criticality: ${$e instanceof Error ? $e.message : "Unknown error"}`, "error");
        } finally {
          const $e = new Set(x.value);
          $e.delete(fe.name), x.value = $e;
        }
      }
    }
    function ee(fe) {
      return fe.issue_type === "version_gated" ? "Requires newer ComfyUI version" : "Blocked";
    }
    function me(fe) {
      return fe.issue_type === "version_gated" ? "Upgrade ComfyUI to a version that includes this builtin node." : "Manual intervention required.";
    }
    function z(fe) {
      return fe.registry_id ? `Community-mapped package: ${fe.registry_id}` : "Community-mapped package";
    }
    function ae(fe) {
      return "Found via community mapping. Install from registry by default, or use git when needed.";
    }
    function Se(fe) {
      C.value = fe;
    }
    function pe() {
      n("open-node-manager");
    }
    function Ne(fe) {
      I.value = {
        title: "Track as Development Node",
        message: `Track "${fe}" as a development node? This will add it to your environment manifest with source='development'.`,
        warning: "Development nodes are tracked locally but not version-controlled.",
        confirmLabel: "Track as Dev",
        destructive: !1,
        onConfirm: async () => {
          I.value = null;
          try {
            p.value = !0;
            const le = await r(fe);
            le.status === "success" ? (n("toast", `✓ Node "${fe}" tracked as development`, "success"), await Le()) : n("toast", `Failed to track node: ${le.message || "Unknown error"}`, "error");
          } catch (le) {
            n("toast", `Error tracking node: ${le instanceof Error ? le.message : "Unknown error"}`, "error");
          } finally {
            p.value = !1;
          }
        }
      };
    }
    function ze(fe) {
      I.value = {
        title: "Remove Untracked Node",
        message: `Remove "${fe}" from custom_nodes/?`,
        warning: "This will permanently delete the node directory.",
        confirmLabel: "Remove",
        destructive: !0,
        onConfirm: async () => {
          I.value = null;
          try {
            p.value = !0;
            const le = await c(fe);
            le.status === "success" ? (n("toast", `✓ Node "${fe}" removed`, "success"), await Le()) : n("toast", `Failed to remove node: ${le.message || "Unknown error"}`, "error");
          } catch (le) {
            n("toast", `Error removing node: ${le instanceof Error ? le.message : "Unknown error"}`, "error");
          } finally {
            p.value = !1;
          }
        }
      };
    }
    function Ae(fe) {
      I.value = {
        title: "Install Missing Node",
        message: `Install "${fe}"?`,
        warning: "This will download and install the node from the registry.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          I.value = null;
          try {
            p.value = !0;
            const le = await u(fe);
            le.status === "success" ? (n("toast", `✓ Node "${fe}" installed`, "success"), await Le()) : n("toast", `Failed to install node: ${le.message || "Unknown error"}`, "error");
          } catch (le) {
            n("toast", `Error installing node: ${le instanceof Error ? le.message : "Unknown error"}`, "error");
          } finally {
            p.value = !1;
          }
        }
      };
    }
    function re(fe) {
      I.value = {
        title: "Install Community-Mapped Package",
        message: `Install "${fe.name}" from the registry?`,
        warning: "This will queue a registry install through the manager queue.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          I.value = null;
          try {
            p.value = !0, await se(fe, "registry");
          } catch (le) {
            n("toast", `Error queueing install: ${le instanceof Error ? le.message : "Unknown error"}`, "error");
          } finally {
            p.value = !1;
          }
        }
      };
    }
    function oe(fe) {
      I.value = {
        title: "Install Community-Mapped Package via Git",
        message: `Install "${fe.name}" from git?`,
        warning: "Use git install only when you explicitly need the repository source.",
        confirmLabel: "Install via Git",
        destructive: !1,
        onConfirm: async () => {
          I.value = null;
          try {
            p.value = !0, await se(fe, "git");
          } catch (le) {
            n("toast", `Error queueing git install: ${le instanceof Error ? le.message : "Unknown error"}`, "error");
          } finally {
            p.value = !1;
          }
        }
      };
    }
    async function Le() {
      p.value = !0, w.value = null;
      try {
        f.value = await l();
      } catch (fe) {
        w.value = fe instanceof Error ? fe.message : "Failed to load nodes";
      } finally {
        p.value = !1;
      }
    }
    return at(Le), (fe, le) => (a(), i(B, null, [
      b(Ut, null, {
        header: h(() => [
          b(At, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: le[0] || (le[0] = (E) => _.value = !0)
          }, {
            actions: h(() => [
              b(Me, {
                variant: "primary",
                size: "sm",
                onClick: pe
              }, {
                default: h(() => [...le[7] || (le[7] = [
                  S(" Browse Nodes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          b(ro, {
            modelValue: g.value,
            "onUpdate:modelValue": le[1] || (le[1] = (E) => g.value = E),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          p.value ? (a(), L(Cs, {
            key: 0,
            message: "Loading nodes..."
          })) : w.value ? (a(), L(xs, {
            key: 1,
            message: w.value,
            retry: !0,
            onRetry: Le
          }, null, 8, ["message"])) : (a(), i(B, { key: 2 }, [
            we.value ? (a(), L(Et, {
              key: 0,
              title: "VERSION MISMATCHES",
              count: e.versionMismatches.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                s("div", f$, [
                  le[8] || (le[8] = s("span", { class: "warning-icon" }, "⚠", -1)),
                  s("span", null, m(e.versionMismatches.length) + " node(s) have wrong versions. Environment needs repair.", 1)
                ]),
                (a(!0), i(B, null, ye(e.versionMismatches, (E) => (a(), L(Vt, {
                  key: E.name,
                  status: "warning"
                }, {
                  icon: h(() => [...le[9] || (le[9] = [
                    S("⚠", -1)
                  ])]),
                  title: h(() => [
                    S(m(E.name), 1)
                  ]),
                  subtitle: h(() => [
                    s("span", v$, [
                      s("span", p$, m(E.actual), 1),
                      le[10] || (le[10] = s("span", { class: "version-arrow" }, "→", -1)),
                      s("span", g$, m(E.expected), 1)
                    ])
                  ]),
                  actions: h(() => [
                    b(Me, {
                      variant: "warning",
                      size: "sm",
                      onClick: le[2] || (le[2] = (A) => n("repair-environment"))
                    }, {
                      default: h(() => [...le[11] || (le[11] = [
                        S(" Repair ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            W.value.length ? (a(), L(Et, {
              key: 1,
              title: "BLOCKED",
              count: W.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (a(!0), i(B, null, ye(W.value, (E) => (a(), L(Vt, {
                  key: `blocked-${E.name}`,
                  status: "warning"
                }, {
                  icon: h(() => [...le[12] || (le[12] = [
                    S("⛔", -1)
                  ])]),
                  title: h(() => [
                    S(m(E.name), 1)
                  ]),
                  subtitle: h(() => [
                    s("span", h$, m(ee(E)), 1)
                  ]),
                  details: h(() => [
                    b(kt, {
                      label: "Guidance:",
                      value: E.issue_guidance || me(E)
                    }, null, 8, ["value"]),
                    b(kt, {
                      label: "Used by:",
                      value: te(E)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Me, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (A) => Se(E)
                    }, {
                      default: h(() => [...le[13] || (le[13] = [
                        S(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            D.value.length ? (a(), L(Et, {
              key: 2,
              title: "COMMUNITY-MAPPED",
              count: D.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (a(!0), i(B, null, ye(D.value, (E) => (a(), L(Vt, {
                  key: `community-${E.name}`,
                  status: "warning"
                }, {
                  icon: h(() => [...le[14] || (le[14] = [
                    S("⚠", -1)
                  ])]),
                  title: h(() => [
                    S(m(E.name), 1)
                  ]),
                  subtitle: h(() => [
                    s("span", y$, m(z(E)), 1)
                  ]),
                  details: h(() => [
                    b(kt, {
                      label: "Guidance:",
                      value: E.issue_guidance || ae(E)
                    }, null, 8, ["value"]),
                    b(kt, {
                      label: "Used by:",
                      value: te(E)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Me, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (A) => Se(E)
                    }, {
                      default: h(() => [...le[15] || (le[15] = [
                        S(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    ue(E) ? (a(), i("span", w$, "Queued")) : (a(), i(B, { key: 1 }, [
                      E.registry_id ? (a(), L(Me, {
                        key: 0,
                        variant: "primary",
                        size: "sm",
                        onClick: (A) => re(E)
                      }, {
                        default: h(() => [...le[16] || (le[16] = [
                          S(" Install ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : y("", !0),
                      E.repository ? (a(), L(Me, {
                        key: 1,
                        variant: "secondary",
                        size: "sm",
                        onClick: (A) => oe(E)
                      }, {
                        default: h(() => [...le[17] || (le[17] = [
                          S(" Install via Git ", -1)
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
            F.value.length ? (a(), L(Et, {
              key: 3,
              title: "UNTRACKED",
              count: F.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (a(!0), i(B, null, ye(F.value, (E) => (a(), L(Vt, {
                  key: E.name,
                  status: "warning"
                }, {
                  icon: h(() => [...le[18] || (le[18] = [
                    S("?", -1)
                  ])]),
                  title: h(() => [
                    S(m(E.name), 1)
                  ]),
                  subtitle: h(() => [...le[19] || (le[19] = [
                    s("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: h(() => [
                    b(kt, {
                      label: "Used by:",
                      value: te(E)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Me, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (A) => Se(E)
                    }, {
                      default: h(() => [...le[20] || (le[20] = [
                        S(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Me, {
                      variant: "primary",
                      size: "sm",
                      onClick: (A) => Ne(E.name)
                    }, {
                      default: h(() => [...le[21] || (le[21] = [
                        S(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Me, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (A) => ze(E.name)
                    }, {
                      default: h(() => [...le[22] || (le[22] = [
                        S(" Remove ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            P.value.length ? (a(), L(Et, {
              key: 4,
              title: "INSTALLED",
              count: P.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (a(!0), i(B, null, ye(P.value, (E) => (a(), L(Vt, {
                  key: E.name,
                  status: "synced"
                }, {
                  icon: h(() => [
                    S(m(E.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: h(() => [
                    S(m(E.name), 1)
                  ]),
                  subtitle: h(() => [
                    E.version ? (a(), i("span", _$, m(E.source === "development" ? "" : "v") + m(E.version), 1)) : (a(), i("span", k$, "version unknown")),
                    s("span", b$, " • " + m(Q(E.source)), 1)
                  ]),
                  details: h(() => [
                    b(kt, {
                      label: "Used by:",
                      value: te(E)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Me, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (A) => Se(E)
                    }, {
                      default: h(() => [...le[23] || (le[23] = [
                        S(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    s("label", $$, [
                      le[25] || (le[25] = s("span", null, "Readiness", -1)),
                      s("select", {
                        class: "criticality-select",
                        value: H(E),
                        disabled: q(E),
                        onChange: (A) => _e(E, A)
                      }, [...le[24] || (le[24] = [
                        s("option", { value: "required" }, "Required", -1),
                        s("option", { value: "optional" }, "Optional", -1)
                      ])], 40, C$)
                    ])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            O.value.length ? (a(), L(Et, {
              key: 5,
              title: "MISSING",
              count: O.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (a(!0), i(B, null, ye(O.value, (E) => (a(), L(Vt, {
                  key: E.name,
                  status: "missing"
                }, {
                  icon: h(() => [...le[26] || (le[26] = [
                    S("!", -1)
                  ])]),
                  title: h(() => [
                    S(m(E.name), 1)
                  ]),
                  subtitle: h(() => [...le[27] || (le[27] = [
                    s("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: h(() => [
                    b(kt, {
                      label: "Required by:",
                      value: te(E)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Me, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (A) => Se(E)
                    }, {
                      default: h(() => [...le[28] || (le[28] = [
                        S(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Me, {
                      variant: "primary",
                      size: "sm",
                      onClick: (A) => Ae(E.name)
                    }, {
                      default: h(() => [...le[29] || (le[29] = [
                        S(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            !P.value.length && !O.value.length && !W.value.length && !D.value.length && !F.value.length ? (a(), L(fs, {
              key: 6,
              icon: "📭",
              message: g.value ? `No nodes match '${g.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : y("", !0)
          ], 64))
        ]),
        _: 1
      }),
      b(is, {
        show: _.value,
        title: "About Custom Nodes",
        onClose: le[4] || (le[4] = (E) => _.value = !1)
      }, {
        content: h(() => [...le[30] || (le[30] = [
          s("p", null, " Custom nodes extend ComfyUI's capabilities. ComfyGit tracks nodes in your environment manifest for reproducibility. ", -1),
          s("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            s("strong", null, "Installed:"),
            S(" Tracked nodes available in this environment"),
            s("br"),
            s("strong", null, "Missing:"),
            S(" Tracked nodes that need to be installed"),
            s("br"),
            s("strong", null, "Blocked:"),
            S(" Node types that require newer ComfyUI"),
            s("br"),
            s("strong", null, "Community-Mapped:"),
            S(" Actionable package mappings from community metadata"),
            s("br"),
            s("strong", null, "Untracked:"),
            S(" Nodes on filesystem but not in manifest ")
          ], -1),
          s("p", { style: { "margin-top": "var(--cg-space-2)", color: "var(--cg-color-text-muted)" } }, ` Use "Track as Dev" for local development nodes you don't want to version. `, -1)
        ])]),
        actions: h(() => [
          b(Me, {
            variant: "primary",
            onClick: le[3] || (le[3] = (E) => _.value = !1)
          }, {
            default: h(() => [...le[31] || (le[31] = [
              S(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      C.value ? (a(), L(r$, {
        key: 0,
        node: C.value,
        onClose: le[5] || (le[5] = (E) => C.value = null)
      }, null, 8, ["node"])) : y("", !0),
      I.value ? (a(), L(Ml, {
        key: 1,
        title: I.value.title,
        message: I.value.message,
        warning: I.value.warning,
        "confirm-label": I.value.confirmLabel,
        destructive: I.value.destructive,
        onConfirm: I.value.onConfirm,
        onCancel: le[6] || (le[6] = (E) => I.value = null)
      }, null, 8, ["title", "message", "warning", "confirm-label", "destructive", "onConfirm"])) : y("", !0)
    ], 64));
  }
}), S$ = /* @__PURE__ */ Ie(x$, [["__scopeId", "data-v-edfa1c86"]]), I$ = { class: "setting-info" }, E$ = { class: "setting-label" }, T$ = {
  key: 0,
  class: "required-marker"
}, M$ = {
  key: 0,
  class: "setting-description"
}, P$ = { class: "setting-control" }, R$ = /* @__PURE__ */ Ce({
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
      class: Be(["setting-row", { disabled: e.disabled, stacked: e.stacked }])
    }, [
      s("div", I$, [
        s("div", E$, [
          S(m(e.label) + " ", 1),
          e.required ? (a(), i("span", T$, "*")) : y("", !0)
        ]),
        e.description ? (a(), i("div", M$, m(e.description), 1)) : y("", !0)
      ]),
      s("div", P$, [
        nt(t.$slots, "default", {}, void 0)
      ])
    ], 2));
  }
}), vo = /* @__PURE__ */ Ie(R$, [["__scopeId", "data-v-3e106b1c"]]), L$ = ["type", "value", "placeholder", "disabled"], D$ = /* @__PURE__ */ Ce({
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
    return at(() => {
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
      class: Be(["text-input", { error: e.hasError, monospace: e.monospace }]),
      onInput: u,
      onKeyup: [
        d[0] || (d[0] = cs((v) => c.$emit("enter"), ["enter"])),
        d[1] || (d[1] = cs((v) => c.$emit("escape"), ["escape"]))
      ],
      onFocus: d[2] || (d[2] = (v) => c.$emit("focus")),
      onBlur: d[3] || (d[3] = (v) => c.$emit("blur"))
    }, null, 42, L$));
  }
}), yo = /* @__PURE__ */ Ie(D$, [["__scopeId", "data-v-0380d08f"]]), N$ = { class: "toggle" }, O$ = ["checked", "disabled"], U$ = /* @__PURE__ */ Ce({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (t, o) => (a(), i("label", N$, [
      s("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        onChange: o[0] || (o[0] = (n) => t.$emit("update:modelValue", n.target.checked)),
        class: "toggle-input"
      }, null, 40, O$),
      o[1] || (o[1] = s("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), xi = /* @__PURE__ */ Ie(U$, [["__scopeId", "data-v-71c0f550"]]), Wa = "ComfyGit.Deploy.GitHubPAT";
function dc(e) {
  return e.startsWith("git@") || e.startsWith("ssh://");
}
function A$(e) {
  return e.startsWith("https://") || e.startsWith("http://");
}
function z$() {
  function e() {
    try {
      return localStorage.getItem(Wa);
    } catch {
      return null;
    }
  }
  function t(l) {
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
  function n() {
    const l = e();
    return l !== null && l.length > 0;
  }
  return {
    getToken: e,
    setToken: t,
    clearToken: o,
    hasToken: n,
    isRemoteSsh: dc,
    isRemoteHttps: A$
  };
}
const F$ = { class: "workspace-settings-content" }, V$ = { class: "settings-section" }, B$ = { class: "path-setting" }, W$ = { class: "path-value" }, G$ = { class: "path-setting" }, j$ = { class: "path-value" }, H$ = { class: "settings-section" }, q$ = { class: "token-setting" }, K$ = {
  key: 0,
  class: "token-warning"
}, J$ = { class: "token-actions" }, Q$ = { class: "settings-section" }, Y$ = { class: "settings-section" }, X$ = /* @__PURE__ */ Ce({
  __name: "WorkspaceSettingsContent",
  props: {
    workspacePath: {}
  },
  emits: ["saved", "error"],
  setup(e, { expose: t, emit: o }) {
    const n = e, l = o, { getConfig: r, updateConfig: u, getRemotes: c, testGitAuth: d } = rt(), { getToken: v, setToken: f, clearToken: p, hasToken: w } = z$(), g = k(!1), _ = k(null), C = k(null), $ = k(null), x = k(null), I = k(""), M = k(""), P = k(""), O = k(""), F = k(!1), W = k(!1), D = k(!1), K = k(""), ue = k(!1), se = k(!1), Q = k(null), we = k(!1), te = k(!0);
    function H(Ae) {
      return Ae.join(" ");
    }
    function q(Ae) {
      return Ae.trim() ? Ae.trim().split(/\s+/) : [];
    }
    const _e = R(() => {
      if (!x.value) return !1;
      const Ae = F.value, re = W.value, oe = D.value, Le = O.value !== H(x.value.comfyui_extra_args || []);
      return Ae || re || oe || Le;
    }), ee = R(() => w());
    async function me() {
      var Ae;
      g.value = !0, _.value = null;
      try {
        $.value = await r(n.workspacePath || void 0), x.value = { ...$.value }, I.value = $.value.civitai_api_key || "", M.value = $.value.huggingface_token || "", O.value = H($.value.comfyui_extra_args || []), P.value = v() || "", K.value = P.value, F.value = !1, W.value = !1, D.value = !1, Q.value = null;
        const re = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        we.value = re !== "false", te.value = localStorage.getItem("comfygit:popup-disabled") !== "true";
        try {
          const Le = (Ae = (await c()).remotes) == null ? void 0 : Ae.find((fe) => fe.name === "origin");
          ue.value = !!(Le && dc(Le.url));
        } catch {
          ue.value = !1;
        }
      } catch (re) {
        _.value = re instanceof Error ? re.message : "Failed to load settings";
      } finally {
        g.value = !1;
      }
    }
    async function z() {
      var Ae;
      C.value = null;
      try {
        const re = {};
        F.value && (re.civitai_api_key = I.value || null), W.value && (re.huggingface_token = M.value || null), O.value !== H(((Ae = x.value) == null ? void 0 : Ae.comfyui_extra_args) || []) && (re.comfyui_extra_args = q(O.value)), await u(re, n.workspacePath || void 0), D.value && (P.value ? f(P.value) : p()), await me(), C.value = { type: "success", message: "Settings saved successfully" }, l("saved"), setTimeout(() => {
          C.value = null;
        }, 3e3);
      } catch (re) {
        const oe = re instanceof Error ? re.message : "Failed to save settings";
        C.value = { type: "error", message: oe }, l("error", oe);
      }
    }
    function ae() {
      x.value && (I.value = x.value.civitai_api_key || "", M.value = x.value.huggingface_token || "", O.value = H(x.value.comfyui_extra_args || []), P.value = K.value, F.value = !1, W.value = !1, D.value = !1, Q.value = null, C.value = null);
    }
    async function Se() {
      if (P.value) {
        se.value = !0, Q.value = null;
        try {
          const Ae = await d(P.value);
          Q.value = {
            type: Ae.status === "success" ? "success" : "error",
            message: Ae.message
          };
        } catch (Ae) {
          Q.value = {
            type: "error",
            message: Ae instanceof Error ? Ae.message : "Connection test failed"
          };
        } finally {
          se.value = !1;
        }
      }
    }
    function pe() {
      P.value = "", D.value = !0, Q.value = null;
    }
    function Ne(Ae) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(Ae)), console.log("[ComfyGit] Auto-refresh setting saved:", Ae);
    }
    function ze(Ae) {
      Ae ? localStorage.removeItem("comfygit:popup-disabled") : localStorage.setItem("comfygit:popup-disabled", "true"), console.log("[ComfyGit] Popup setting changed:", Ae ? "enabled" : "disabled");
    }
    return t({
      saveSettings: z,
      resetSettings: ae,
      hasChanges: _e,
      loadSettings: me
    }), at(me), (Ae, re) => (a(), i("div", F$, [
      g.value ? (a(), L(Cs, {
        key: 0,
        message: "Loading workspace settings..."
      })) : _.value ? (a(), L(xs, {
        key: 1,
        message: _.value,
        retry: !0,
        onRetry: me
      }, null, 8, ["message"])) : (a(), i(B, { key: 2 }, [
        b(Et, { title: "WORKSPACE PATHS" }, {
          default: h(() => {
            var oe, Le;
            return [
              s("div", V$, [
                s("div", B$, [
                  re[9] || (re[9] = s("div", { class: "path-label" }, "Workspace Root", -1)),
                  re[10] || (re[10] = s("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                  s("div", W$, m(((oe = $.value) == null ? void 0 : oe.workspace_path) || "Loading..."), 1)
                ]),
                s("div", G$, [
                  re[11] || (re[11] = s("div", { class: "path-label" }, "Models Directory", -1)),
                  re[12] || (re[12] = s("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                  s("div", j$, m(((Le = $.value) == null ? void 0 : Le.models_path) || "Not configured"), 1)
                ])
              ])
            ];
          }),
          _: 1
        }),
        b(Et, { title: "API CREDENTIALS" }, {
          default: h(() => [
            s("div", H$, [
              b(vo, {
                label: "CivitAI API Key",
                description: "API key for downloading models from CivitAI"
              }, {
                default: h(() => [
                  b(yo, {
                    modelValue: I.value,
                    "onUpdate:modelValue": re[0] || (re[0] = (oe) => I.value = oe),
                    type: "password",
                    placeholder: "Enter CivitAI API key...",
                    style: { minWidth: "300px" },
                    onInput: re[1] || (re[1] = (oe) => F.value = !0)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              b(vo, {
                label: "HuggingFace Token",
                description: "Access token for downloading gated/private models from HuggingFace"
              }, {
                default: h(() => [
                  b(yo, {
                    modelValue: M.value,
                    "onUpdate:modelValue": re[2] || (re[2] = (oe) => M.value = oe),
                    type: "password",
                    placeholder: "Enter HuggingFace token...",
                    style: { minWidth: "300px" },
                    onInput: re[3] || (re[3] = (oe) => W.value = !0)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              b(vo, {
                label: "GitHub Personal Access Token",
                description: "Client-side token used for private Git remote access during deploy and remote operations",
                stacked: ""
              }, {
                default: h(() => [
                  s("div", q$, [
                    b(yo, {
                      modelValue: P.value,
                      "onUpdate:modelValue": re[4] || (re[4] = (oe) => P.value = oe),
                      type: "password",
                      placeholder: "ghp_xxxxxxxxxxxxxxxxxxxx",
                      onInput: re[5] || (re[5] = (oe) => D.value = !0)
                    }, null, 8, ["modelValue"]),
                    ue.value ? (a(), i("div", K$, " SSH origin remote detected. PAT authentication only works with HTTPS remotes. ")) : y("", !0),
                    re[15] || (re[15] = s("div", { class: "token-help" }, " Stored in your browser only. Never sent to the server except when you explicitly test or use authenticated remote operations. ", -1)),
                    s("div", J$, [
                      b(Me, {
                        variant: "ghost",
                        size: "xs",
                        loading: se.value,
                        disabled: !P.value || se.value,
                        onClick: Se
                      }, {
                        default: h(() => [...re[13] || (re[13] = [
                          S(" Test Connection ", -1)
                        ])]),
                        _: 1
                      }, 8, ["loading", "disabled"]),
                      ee.value ? (a(), L(Me, {
                        key: 0,
                        variant: "ghost",
                        size: "xs",
                        onClick: pe
                      }, {
                        default: h(() => [...re[14] || (re[14] = [
                          S(" Clear ", -1)
                        ])]),
                        _: 1
                      })) : y("", !0)
                    ]),
                    Q.value ? (a(), i("div", {
                      key: 1,
                      class: Be(["token-test-result", Q.value.type])
                    }, m(Q.value.message), 3)) : y("", !0)
                  ])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        b(Et, { title: "COMFYUI SETTINGS" }, {
          default: h(() => [
            s("div", Q$, [
              b(vo, {
                label: "Extra Startup Arguments",
                description: "Additional command-line arguments passed to ComfyUI on startup (e.g., --lowvram, --listen 0.0.0.0). Takes effect on next restart."
              }, {
                default: h(() => [
                  b(yo, {
                    modelValue: O.value,
                    "onUpdate:modelValue": re[6] || (re[6] = (oe) => O.value = oe),
                    placeholder: "--lowvram --listen 0.0.0.0",
                    style: { minWidth: "300px" }
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              re[16] || (re[16] = s("div", { class: "setting-hint" }, [
                S(" Common flags: "),
                s("code", null, "--lowvram"),
                S(", "),
                s("code", null, "--highvram"),
                S(", "),
                s("code", null, "--listen 0.0.0.0"),
                S(", "),
                s("code", null, "--cuda-device 1")
              ], -1))
            ])
          ]),
          _: 1
        }),
        b(Et, { title: "UI SETTINGS" }, {
          default: h(() => [
            s("div", Y$, [
              b(vo, {
                label: "Auto-Refresh After Git Operations",
                description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
              }, {
                default: h(() => [
                  b(xi, {
                    modelValue: we.value,
                    "onUpdate:modelValue": [
                      re[7] || (re[7] = (oe) => we.value = oe),
                      Ne
                    ]
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              b(vo, {
                label: "Show Missing Dependencies Popup",
                description: "Show popup when loading unsaved workflows with missing nodes or models. Saved workflows are tracked in the ComfyGit panel."
              }, {
                default: h(() => [
                  b(xi, {
                    modelValue: te.value,
                    "onUpdate:modelValue": [
                      re[8] || (re[8] = (oe) => te.value = oe),
                      ze
                    ]
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        C.value ? (a(), L(El, {
          key: 0,
          variant: (C.value.type === "success", "compact")
        }, {
          default: h(() => [
            s("span", {
              style: Lt({ color: C.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
            }, m(C.value.message), 5)
          ]),
          _: 1
        }, 8, ["variant"])) : y("", !0)
      ], 64))
    ]));
  }
}), mc = /* @__PURE__ */ Ie(X$, [["__scopeId", "data-v-f1bdc574"]]), Z$ = /* @__PURE__ */ Ce({
  __name: "WorkspaceSettingsSection",
  setup(e) {
    const t = k(null);
    function o() {
      console.log("[ComfyGit] Settings saved");
    }
    return (n, l) => (a(), L(Ut, null, {
      header: h(() => [
        b(At, { title: "WORKSPACE SETTINGS" }, {
          actions: h(() => {
            var r, u;
            return [
              b(Me, {
                variant: "primary",
                size: "sm",
                disabled: !((r = t.value) != null && r.hasChanges),
                onClick: l[0] || (l[0] = (c) => {
                  var d;
                  return (d = t.value) == null ? void 0 : d.saveSettings();
                })
              }, {
                default: h(() => [...l[2] || (l[2] = [
                  S(" Save Changes ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"]),
              (u = t.value) != null && u.hasChanges ? (a(), L(Me, {
                key: 0,
                variant: "ghost",
                size: "sm",
                onClick: l[1] || (l[1] = (c) => {
                  var d;
                  return (d = t.value) == null ? void 0 : d.resetSettings();
                })
              }, {
                default: h(() => [...l[3] || (l[3] = [
                  S(" Reset ", -1)
                ])]),
                _: 1
              })) : y("", !0)
            ];
          }),
          _: 1
        })
      ]),
      content: h(() => [
        b(mc, {
          ref_key: "contentRef",
          ref: t,
          onSaved: o
        }, null, 512)
      ]),
      _: 1
    }));
  }
}), eC = { class: "env-title" }, tC = {
  key: 0,
  class: "current-badge"
}, sC = {
  key: 0,
  class: "branch-info"
}, oC = /* @__PURE__ */ Ce({
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
        S(m(e.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: h(() => [
        s("div", eC, [
          s("span", null, m(e.environmentName), 1),
          e.isCurrent && e.showCurrentLabel ? (a(), i("span", tC, "CURRENT")) : y("", !0)
        ])
      ]),
      subtitle: h(() => [
        e.currentBranch ? (a(), i("span", sC, [
          o[0] || (o[0] = s("span", { class: "branch-icon" }, "⎇", -1)),
          S(" " + m(e.currentBranch), 1)
        ])) : y("", !0)
      ]),
      actions: h(() => [
        nt(t.$slots, "actions", {}, void 0, !0)
      ]),
      _: 2
    }, [
      e.showDetails ? {
        name: "details",
        fn: h(() => [
          b(kt, {
            label: "Workflows:",
            value: String(e.workflowCount)
          }, null, 8, ["value"]),
          b(kt, {
            label: "Nodes:",
            value: String(e.nodeCount)
          }, null, 8, ["value"]),
          b(kt, {
            label: "Models:",
            value: String(e.modelCount)
          }, null, 8, ["value"]),
          e.lastUsed && e.showLastUsed ? (a(), L(kt, {
            key: 0,
            label: "Last used:",
            value: e.lastUsed
          }, null, 8, ["value"])) : y("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), nC = /* @__PURE__ */ Ie(oC, [["__scopeId", "data-v-9231917a"]]), aC = { class: "env-details" }, lC = { class: "status-row" }, iC = {
  key: 0,
  class: "detail-row"
}, rC = { class: "value mono" }, cC = {
  key: 1,
  class: "detail-row"
}, uC = { class: "value mono small" }, dC = { class: "collapsible-section" }, mC = { class: "value" }, fC = {
  key: 0,
  class: "collapsible-body"
}, vC = { class: "item-list" }, pC = { class: "item-name" }, gC = { class: "item-name" }, hC = { class: "item-name" }, yC = { class: "item-name" }, wC = {
  key: 0,
  class: "empty-list"
}, _C = { class: "collapsible-section" }, kC = { class: "value" }, bC = {
  key: 0,
  class: "collapsible-body"
}, $C = { class: "item-list" }, CC = { class: "item-name" }, xC = {
  key: 0,
  class: "item-meta"
}, SC = {
  key: 0,
  class: "empty-list"
}, IC = { class: "collapsible-section" }, EC = { class: "value" }, TC = {
  key: 0,
  class: "missing-count"
}, MC = {
  key: 0,
  class: "collapsible-body"
}, PC = { class: "item-list" }, RC = { class: "model-row" }, LC = { class: "item-name" }, DC = { class: "model-meta" }, NC = { class: "item-meta" }, OC = {
  key: 0,
  class: "item-meta"
}, UC = {
  key: 0,
  class: "empty-list"
}, AC = {
  key: 2,
  class: "section-divider"
}, zC = {
  key: 3,
  class: "detail-row"
}, FC = { class: "value" }, VC = { class: "footer-actions" }, BC = /* @__PURE__ */ Ce({
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
    return (d, v) => (a(), L($t, {
      title: `ENVIRONMENT DETAILS: ${e.environment.name.toUpperCase()}`,
      size: "md",
      onClose: v[6] || (v[6] = (f) => n("close"))
    }, {
      body: h(() => {
        var f, p, w, g, _, C, $, x, I, M, P, O, F, W;
        return [
          s("div", aC, [
            s("div", lC, [
              v[7] || (v[7] = s("span", { class: "label" }, "Status:", -1)),
              s("span", {
                class: Be(["status-badge", e.environment.is_current ? "current" : "inactive"])
              }, m(e.environment.is_current ? "Current" : "Inactive"), 3)
            ]),
            e.environment.current_branch ? (a(), i("div", iC, [
              v[8] || (v[8] = s("span", { class: "label" }, "Branch:", -1)),
              s("span", rC, m(e.environment.current_branch), 1)
            ])) : y("", !0),
            e.environment.path ? (a(), i("div", cC, [
              v[9] || (v[9] = s("span", { class: "label" }, "Path:", -1)),
              s("span", uC, m(e.environment.path), 1)
            ])) : y("", !0),
            v[18] || (v[18] = s("div", { class: "section-divider" }, null, -1)),
            s("div", dC, [
              s("div", {
                class: "collapsible-header",
                onClick: v[0] || (v[0] = (D) => r("workflows"))
              }, [
                v[10] || (v[10] = s("span", { class: "label" }, "Workflows:", -1)),
                s("span", mC, m(((f = e.detail) == null ? void 0 : f.workflow_count) ?? e.environment.workflow_count), 1),
                (p = e.detail) != null && p.workflows ? (a(), i("span", {
                  key: 0,
                  class: Be(["chevron", { expanded: l.value.has("workflows") }])
                }, "▶", 2)) : y("", !0)
              ]),
              (w = e.detail) != null && w.workflows && l.value.has("workflows") ? (a(), i("div", fC, [
                s("div", vC, [
                  (a(!0), i(B, null, ye(e.detail.workflows.synced, (D) => (a(), i("div", {
                    key: "synced-" + D,
                    class: "list-item"
                  }, [
                    s("span", pC, m(D), 1),
                    v[11] || (v[11] = s("span", { class: "sync-badge synced" }, "synced", -1))
                  ]))), 128)),
                  (a(!0), i(B, null, ye(e.detail.workflows.new, (D) => (a(), i("div", {
                    key: "new-" + D,
                    class: "list-item"
                  }, [
                    s("span", gC, m(D), 1),
                    v[12] || (v[12] = s("span", { class: "sync-badge new" }, "new", -1))
                  ]))), 128)),
                  (a(!0), i(B, null, ye(e.detail.workflows.modified, (D) => (a(), i("div", {
                    key: "mod-" + D,
                    class: "list-item"
                  }, [
                    s("span", hC, m(D), 1),
                    v[13] || (v[13] = s("span", { class: "sync-badge modified" }, "modified", -1))
                  ]))), 128)),
                  (a(!0), i(B, null, ye(e.detail.workflows.deleted, (D) => (a(), i("div", {
                    key: "del-" + D,
                    class: "list-item"
                  }, [
                    s("span", yC, m(D), 1),
                    v[14] || (v[14] = s("span", { class: "sync-badge deleted" }, "deleted", -1))
                  ]))), 128)),
                  u.value ? (a(), i("div", wC, "No workflows")) : y("", !0)
                ])
              ])) : y("", !0)
            ]),
            s("div", _C, [
              s("div", {
                class: "collapsible-header",
                onClick: v[1] || (v[1] = (D) => r("nodes"))
              }, [
                v[15] || (v[15] = s("span", { class: "label" }, "Nodes:", -1)),
                s("span", kC, m(((g = e.detail) == null ? void 0 : g.node_count) ?? e.environment.node_count), 1),
                (_ = e.detail) != null && _.nodes ? (a(), i("span", {
                  key: 0,
                  class: Be(["chevron", { expanded: l.value.has("nodes") }])
                }, "▶", 2)) : y("", !0)
              ]),
              (C = e.detail) != null && C.nodes && l.value.has("nodes") ? (a(), i("div", bC, [
                s("div", $C, [
                  (a(!0), i(B, null, ye(e.detail.nodes, (D) => (a(), i("div", {
                    key: D.name,
                    class: "list-item"
                  }, [
                    s("span", CC, m(D.name), 1),
                    D.version ? (a(), i("span", xC, m(D.version), 1)) : y("", !0)
                  ]))), 128)),
                  e.detail.nodes.length ? y("", !0) : (a(), i("div", SC, "No nodes"))
                ])
              ])) : y("", !0)
            ]),
            s("div", IC, [
              s("div", {
                class: "collapsible-header",
                onClick: v[2] || (v[2] = (D) => r("models"))
              }, [
                v[16] || (v[16] = s("span", { class: "label" }, "Models:", -1)),
                s("span", EC, [
                  S(m((($ = e.detail) == null ? void 0 : $.model_count) ?? e.environment.model_count) + " ", 1),
                  (I = (x = e.detail) == null ? void 0 : x.models) != null && I.missing.length ? (a(), i("span", TC, "(" + m(e.detail.models.missing.length) + " missing)", 1)) : y("", !0)
                ]),
                (M = e.detail) != null && M.models ? (a(), i("span", {
                  key: 0,
                  class: Be(["chevron", { expanded: l.value.has("models") }])
                }, "▶", 2)) : y("", !0)
              ]),
              (P = e.detail) != null && P.models && l.value.has("models") ? (a(), i("div", MC, [
                s("div", PC, [
                  (a(!0), i(B, null, ye(e.detail.models.missing, (D) => (a(), i("div", {
                    key: D.filename,
                    class: "list-item model-item"
                  }, [
                    s("div", RC, [
                      s("span", LC, m(D.filename), 1),
                      s("span", {
                        class: Be(["criticality-badge", D.criticality])
                      }, m(D.criticality), 3)
                    ]),
                    s("div", DC, [
                      s("span", NC, m(D.category), 1),
                      D.workflow_names.length ? (a(), i("span", OC, " used by: " + m(D.workflow_names.join(", ")), 1)) : y("", !0)
                    ])
                  ]))), 128)),
                  e.detail.models.missing.length ? y("", !0) : (a(), i("div", UC, "No missing models"))
                ])
              ])) : y("", !0)
            ]),
            (O = e.detail) != null && O.created_at || e.environment.created_at ? (a(), i("div", AC)) : y("", !0),
            (F = e.detail) != null && F.created_at || e.environment.created_at ? (a(), i("div", zC, [
              v[17] || (v[17] = s("span", { class: "label" }, "Created:", -1)),
              s("span", FC, m(c(((W = e.detail) == null ? void 0 : W.created_at) ?? e.environment.created_at)), 1)
            ])) : y("", !0)
          ])
        ];
      }),
      footer: h(() => [
        s("div", VC, [
          b(Oe, {
            variant: "secondary",
            size: "sm",
            onClick: v[3] || (v[3] = (f) => n("export", e.environment.name))
          }, {
            default: h(() => [...v[19] || (v[19] = [
              S(" Export ", -1)
            ])]),
            _: 1
          }),
          e.canDelete ? (a(), L(Oe, {
            key: 0,
            variant: "danger",
            size: "sm",
            onClick: v[4] || (v[4] = (f) => n("delete", e.environment.name))
          }, {
            default: h(() => [...v[20] || (v[20] = [
              S(" Delete ", -1)
            ])]),
            _: 1
          })) : y("", !0),
          v[22] || (v[22] = s("div", { class: "footer-spacer" }, null, -1)),
          b(Oe, {
            variant: "secondary",
            size: "sm",
            onClick: v[5] || (v[5] = (f) => n("close"))
          }, {
            default: h(() => [...v[21] || (v[21] = [
              S(" Close ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), WC = /* @__PURE__ */ Ie(BC, [["__scopeId", "data-v-750671f5"]]), fc = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], vc = "3.12", Pl = [
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
], pc = "auto", GC = { class: "progress-bar" }, jC = /* @__PURE__ */ Ce({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(e) {
    const t = e, o = R(() => `${Math.max(0, Math.min(100, t.progress))}%`);
    return (n, l) => (a(), i("div", GC, [
      s("div", {
        class: Be(["progress-fill", e.variant]),
        style: Lt({ width: o.value })
      }, null, 6)
    ]));
  }
}), gc = /* @__PURE__ */ Ie(jC, [["__scopeId", "data-v-1beb0512"]]), HC = { class: "task-progress" }, qC = { class: "progress-info" }, KC = { class: "progress-percentage" }, JC = { class: "progress-message" }, QC = {
  key: 0,
  class: "progress-steps"
}, YC = { class: "step-icon" }, XC = { class: "step-label" }, ZC = /* @__PURE__ */ Ce({
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
    return (l, r) => (a(), i("div", HC, [
      b(gc, {
        progress: e.progress,
        variant: e.variant
      }, null, 8, ["progress", "variant"]),
      s("div", qC, [
        s("span", KC, m(e.progress) + "%", 1),
        s("span", JC, m(e.message), 1)
      ]),
      e.showSteps && e.steps.length > 0 ? (a(), i("div", QC, [
        (a(!0), i(B, null, ye(e.steps, (u) => (a(), i("div", {
          key: u.id,
          class: Be(["step", o(u.id)])
        }, [
          s("span", YC, m(n(u.id)), 1),
          s("span", XC, m(u.label), 1)
        ], 2))), 128))
      ])) : y("", !0)
    ]));
  }
}), Qn = /* @__PURE__ */ Ie(ZC, [["__scopeId", "data-v-9d1de66c"]]), ex = {
  key: 0,
  class: "create-env-form"
}, tx = { class: "form-field" }, sx = { class: "input-wrapper" }, ox = {
  key: 0,
  class: "validating-indicator"
}, nx = {
  key: 1,
  class: "valid-indicator"
}, ax = {
  key: 0,
  class: "field-error"
}, lx = { class: "form-field" }, ix = ["value"], rx = { class: "form-field" }, cx = ["disabled"], ux = ["value"], dx = { class: "form-field" }, mx = ["value"], fx = { class: "form-field form-field--checkbox" }, vx = { class: "form-checkbox" }, px = {
  key: 1,
  class: "create-env-progress"
}, gx = { class: "creating-intro" }, hx = {
  key: 0,
  class: "progress-warning"
}, yx = {
  key: 1,
  class: "create-error"
}, wx = { class: "error-message" }, _x = {
  key: 1,
  class: "footer-status"
}, kx = 10, bx = /* @__PURE__ */ Ce({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(e, { emit: t }) {
    const o = t, { getComfyUIReleases: n, createEnvironment: l, getCreateProgress: r, validateEnvironmentName: u } = rt(), c = k(""), d = k(vc), v = k("latest"), f = k(pc), p = k(!1), w = k(null), g = k(!1), _ = k(!1);
    let C = null, $ = 0;
    const x = R(() => !!c.value.trim() && _.value && !w.value && !g.value && !P.value), I = k([{ tag_name: "latest", name: "Latest", published_at: "" }]), M = k(!1), P = k(!1), O = k({
      progress: 0,
      message: ""
    });
    let F = null, W = 0;
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
    ], K = k(null);
    vt(c, (ee) => {
      _.value = !1, C && (clearTimeout(C), C = null);
      const me = ee.trim();
      if (!me) {
        w.value = null, g.value = !1;
        return;
      }
      g.value = !0, C = setTimeout(() => {
        ue(me);
      }, 400);
    });
    async function ue(ee, me = !1) {
      const z = ee.trim();
      if (!z)
        return _.value = !1, g.value = !1, w.value = me ? "Environment name is required" : null, !1;
      const ae = ++$;
      g.value = !0;
      try {
        const Se = await u(z);
        return ae !== $ ? !1 : (w.value = Se.valid ? null : Se.error || "Invalid name", _.value = !!Se.valid, !!Se.valid);
      } catch {
        return ae !== $ || (w.value = "Failed to validate name", _.value = !1), !1;
      } finally {
        ae === $ && (g.value = !1);
      }
    }
    async function se() {
      C && (clearTimeout(C), C = null), await ue(c.value, !0);
    }
    function Q() {
      P.value || o("close");
    }
    async function we() {
      const ee = c.value.trim();
      if (!ee) {
        w.value = "Environment name is required";
        return;
      }
      if (C && (clearTimeout(C), C = null), !!await ue(ee, !0)) {
        P.value = !0, O.value = { progress: 0, message: "Starting...", phase: "init" };
        try {
          const z = {
            name: ee,
            python_version: d.value,
            comfyui_version: v.value,
            torch_backend: f.value,
            switch_after: !1
            // We'll handle switch in parent after modal closes
          }, ae = await l(z);
          ae.status === "started" ? te() : ae.status === "error" && (O.value = {
            progress: 0,
            message: ae.message || "Failed to start creation",
            error: ae.message
          });
        } catch (z) {
          O.value = {
            progress: 0,
            message: z instanceof Error ? z.message : "Unknown error",
            error: z instanceof Error ? z.message : "Unknown error"
          };
        }
      }
    }
    function te() {
      F || (W = 0, F = window.setInterval(async () => {
        try {
          const ee = await r();
          W = 0, O.value = {
            progress: ee.progress ?? 0,
            message: ee.message,
            phase: ee.phase,
            error: ee.error
          }, ee.state === "complete" ? (H(), o("created", ee.environment_name || c.value.trim(), p.value)) : ee.state === "error" ? (H(), O.value.error = ee.error || ee.message) : ee.state === "idle" && P.value && (H(), O.value.error = "Creation was interrupted. Please try again.");
        } catch {
          W++, W >= kx && (H(), O.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function H() {
      F && (clearInterval(F), F = null);
    }
    function q() {
      P.value = !1, O.value = { progress: 0, message: "" }, o("close");
    }
    async function _e() {
      M.value = !0;
      try {
        I.value = await n();
      } catch (ee) {
        console.error("Failed to load ComfyUI releases:", ee);
      } finally {
        M.value = !1;
      }
    }
    return at(async () => {
      var ee;
      await Rt(), (ee = K.value) == null || ee.focus(), _e();
    }), Po(() => {
      H(), C && (clearTimeout(C), C = null);
    }), (ee, me) => (a(), L($t, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !P.value,
      onClose: Q
    }, {
      body: h(() => [
        P.value ? (a(), i("div", px, [
          s("p", gx, [
            me[12] || (me[12] = S(" Creating environment ", -1)),
            s("strong", null, m(c.value), 1),
            me[13] || (me[13] = S("... ", -1))
          ]),
          b(Qn, {
            progress: O.value.progress,
            message: O.value.message,
            "current-phase": O.value.phase,
            variant: O.value.error ? "error" : "default",
            "show-steps": !0,
            steps: D
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          O.value.error ? y("", !0) : (a(), i("p", hx, " This may take several minutes. Please wait... ")),
          O.value.error ? (a(), i("div", yx, [
            s("p", wx, m(O.value.error), 1)
          ])) : y("", !0)
        ])) : (a(), i("div", ex, [
          s("div", tx, [
            me[6] || (me[6] = s("label", { class: "form-label" }, "Name", -1)),
            s("div", sx, [
              Mt(s("input", {
                ref_key: "nameInput",
                ref: K,
                "onUpdate:modelValue": me[0] || (me[0] = (z) => c.value = z),
                type: "text",
                class: Be(["form-input", { error: !!w.value, valid: _.value }]),
                placeholder: "my-environment",
                onKeyup: cs(we, ["enter"]),
                onBlur: se
              }, null, 34), [
                [tn, c.value]
              ]),
              g.value ? (a(), i("span", ox, "...")) : _.value ? (a(), i("span", nx, "✓")) : y("", !0)
            ]),
            w.value ? (a(), i("div", ax, m(w.value), 1)) : y("", !0),
            me[7] || (me[7] = s("div", { class: "field-hint" }, "Use letters, numbers, dots, hyphens, and underscores.", -1))
          ]),
          s("div", lx, [
            me[8] || (me[8] = s("label", { class: "form-label" }, "Python Version", -1)),
            Mt(s("select", {
              "onUpdate:modelValue": me[1] || (me[1] = (z) => d.value = z),
              class: "form-select"
            }, [
              (a(!0), i(B, null, ye(st(fc), (z) => (a(), i("option", {
                key: z,
                value: z
              }, m(z), 9, ix))), 128))
            ], 512), [
              [Co, d.value]
            ])
          ]),
          s("div", rx, [
            me[9] || (me[9] = s("label", { class: "form-label" }, "ComfyUI Version", -1)),
            Mt(s("select", {
              "onUpdate:modelValue": me[2] || (me[2] = (z) => v.value = z),
              class: "form-select",
              disabled: M.value
            }, [
              (a(!0), i(B, null, ye(I.value, (z) => (a(), i("option", {
                key: z.tag_name,
                value: z.tag_name
              }, m(z.name), 9, ux))), 128))
            ], 8, cx), [
              [Co, v.value]
            ])
          ]),
          s("div", dx, [
            me[10] || (me[10] = s("label", { class: "form-label" }, "PyTorch Backend", -1)),
            Mt(s("select", {
              "onUpdate:modelValue": me[3] || (me[3] = (z) => f.value = z),
              class: "form-select"
            }, [
              (a(!0), i(B, null, ye(st(Pl), (z) => (a(), i("option", {
                key: z,
                value: z
              }, m(z) + m(z === "auto" ? " (detect GPU)" : ""), 9, mx))), 128))
            ], 512), [
              [Co, f.value]
            ])
          ]),
          s("div", fx, [
            s("label", vx, [
              Mt(s("input", {
                type: "checkbox",
                "onUpdate:modelValue": me[4] || (me[4] = (z) => p.value = z)
              }, null, 512), [
                [Kn, p.value]
              ]),
              me[11] || (me[11] = s("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ]))
      ]),
      footer: h(() => [
        P.value ? (a(), i(B, { key: 1 }, [
          O.value.error ? (a(), L(Oe, {
            key: 0,
            variant: "secondary",
            onClick: q
          }, {
            default: h(() => [...me[16] || (me[16] = [
              S(" Close ", -1)
            ])]),
            _: 1
          })) : (a(), i("span", _x, " Creating environment... "))
        ], 64)) : (a(), i(B, { key: 0 }, [
          b(Oe, {
            variant: "primary",
            disabled: !x.value,
            onClick: we
          }, {
            default: h(() => [...me[14] || (me[14] = [
              S(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          b(Oe, {
            variant: "secondary",
            onClick: me[5] || (me[5] = (z) => o("close"))
          }, {
            default: h(() => [...me[15] || (me[15] = [
              S(" Cancel ", -1)
            ])]),
            _: 1
          })
        ], 64))
      ]),
      _: 1
    }, 8, ["show-close-button"]));
  }
}), $x = /* @__PURE__ */ Ie(bx, [["__scopeId", "data-v-3faa3d9b"]]), Cx = /* @__PURE__ */ Ce({
  __name: "EnvironmentsSection",
  props: {
    canCreate: { type: Boolean, default: !0 },
    canSwitch: { type: Boolean, default: !0 },
    canDelete: { type: Boolean, default: !0 }
  },
  emits: ["switch", "created", "delete", "import", "export"],
  setup(e, { expose: t, emit: o }) {
    const n = o, { getEnvironments: l, getEnvironmentDetails: r } = rt(), u = k([]), c = k(!1), d = k(null), v = k(""), f = k(!1), p = k(!1), w = k(null), g = k(null), _ = R(() => [...u.value].sort((F, W) => F.is_current !== W.is_current ? F.is_current ? -1 : 1 : F.name.localeCompare(W.name))), C = R(() => {
      if (!v.value.trim()) return _.value;
      const F = v.value.toLowerCase();
      return _.value.filter(
        (W) => {
          var D;
          return W.name.toLowerCase().includes(F) || ((D = W.current_branch) == null ? void 0 : D.toLowerCase().includes(F));
        }
      );
    });
    function $(F, W) {
      p.value = !1, n("created", F, W);
    }
    function x() {
      p.value = !0;
    }
    async function I(F) {
      w.value = F, g.value = null;
      const W = await r(F.name);
      W && (g.value = W);
    }
    function M(F) {
      w.value = null, g.value = null, n("delete", F);
    }
    function P(F) {
      w.value = null, g.value = null, n("export", F);
    }
    async function O() {
      c.value = !0, d.value = null;
      try {
        u.value = await l();
      } catch (F) {
        d.value = F instanceof Error ? F.message : "Failed to load environments";
      } finally {
        c.value = !1;
      }
    }
    return at(O), t({
      loadEnvironments: O,
      openCreateModal: x
    }), (F, W) => (a(), i(B, null, [
      b(Ut, null, {
        header: h(() => [
          b(At, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: W[1] || (W[1] = (D) => f.value = !0)
          }, {
            actions: h(() => [
              e.canCreate ? (a(), L(Me, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: x
              }, {
                default: h(() => [...W[7] || (W[7] = [
                  S(" Create ", -1)
                ])]),
                _: 1
              })) : y("", !0),
              b(Me, {
                variant: "secondary",
                size: "sm",
                onClick: W[0] || (W[0] = (D) => F.$emit("import"))
              }, {
                default: h(() => [...W[8] || (W[8] = [
                  S(" Import ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          b(ro, {
            modelValue: v.value,
            "onUpdate:modelValue": W[2] || (W[2] = (D) => v.value = D),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          c.value ? (a(), L(Cs, {
            key: 0,
            message: "Loading environments..."
          })) : d.value ? (a(), L(xs, {
            key: 1,
            message: d.value,
            retry: !0,
            onRetry: O
          }, null, 8, ["message"])) : (a(), i(B, { key: 2 }, [
            C.value.length ? (a(), L(Et, {
              key: 0,
              title: "ENVIRONMENTS",
              count: C.value.length
            }, {
              default: h(() => [
                (a(!0), i(B, null, ye(C.value, (D) => (a(), L(nC, {
                  key: D.name,
                  "environment-name": D.name,
                  "is-current": D.is_current,
                  "current-branch": D.current_branch,
                  "show-last-used": !1
                }, {
                  actions: h(() => [
                    !D.is_current && e.canSwitch ? (a(), L(Me, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (K) => F.$emit("switch", D.name)
                    }, {
                      default: h(() => [...W[9] || (W[9] = [
                        S(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : y("", !0),
                    b(Me, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (K) => I(D)
                    }, {
                      default: h(() => [...W[10] || (W[10] = [
                        S(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Me, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (K) => F.$emit("export", D.name)
                    }, {
                      default: h(() => [...W[11] || (W[11] = [
                        S(" Export ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["environment-name", "is-current", "current-branch"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            C.value.length ? y("", !0) : (a(), L(fs, {
              key: 1,
              icon: "🌍",
              message: v.value ? `No environments match '${v.value}'` : "No environments found. Create one to get started!"
            }, Yt({ _: 2 }, [
              v.value ? void 0 : {
                name: "actions",
                fn: h(() => [
                  e.canCreate ? (a(), L(Me, {
                    key: 0,
                    variant: "primary",
                    onClick: x
                  }, {
                    default: h(() => [...W[12] || (W[12] = [
                      S(" Create Environment ", -1)
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
      b(is, {
        show: f.value,
        title: "About Environments",
        onClose: W[4] || (W[4] = (D) => f.value = !1)
      }, {
        content: h(() => [...W[13] || (W[13] = [
          s("p", null, [
            s("strong", null, "Environments"),
            S(" are isolated workspaces that contain their own workflows, nodes, and models. Each environment can track different branches and maintain separate state. ")
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
          b(Me, {
            variant: "secondary",
            onClick: W[3] || (W[3] = (D) => f.value = !1)
          }, {
            default: h(() => [...W[14] || (W[14] = [
              S(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w.value ? (a(), L(WC, {
        key: 0,
        environment: w.value,
        detail: g.value,
        "can-delete": e.canDelete && u.value.length > 1,
        onClose: W[5] || (W[5] = (D) => {
          w.value = null, g.value = null;
        }),
        onDelete: M,
        onExport: P
      }, null, 8, ["environment", "detail", "can-delete"])) : y("", !0),
      p.value ? (a(), L($x, {
        key: 1,
        onClose: W[6] || (W[6] = (D) => p.value = !1),
        onCreated: $
      })) : y("", !0)
    ], 64));
  }
}), xx = /* @__PURE__ */ Ie(Cx, [["__scopeId", "data-v-01163d8c"]]), Sx = { class: "file-path" }, Ix = { class: "file-path-text" }, Ex = ["title"], Tx = /* @__PURE__ */ Ce({
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
    return (l, r) => (a(), i("div", Sx, [
      r[0] || (r[0] = s("span", { class: "file-path-icon" }, "📄", -1)),
      s("code", Ix, m(e.path), 1),
      e.copyable ? (a(), i("button", {
        key: 0,
        class: "copy-btn",
        title: o.value ? "Copied!" : "Copy path",
        onClick: n
      }, m(o.value ? "✓" : "📋"), 9, Ex)) : y("", !0)
    ]));
  }
}), Mx = /* @__PURE__ */ Ie(Tx, [["__scopeId", "data-v-f0982173"]]), Px = { class: "base-textarea-wrapper" }, Rx = ["value", "rows", "placeholder", "disabled", "maxlength"], Lx = {
  key: 0,
  class: "base-textarea-count"
}, Dx = /* @__PURE__ */ Ce({
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
    return (r, u) => (a(), i("div", Px, [
      s("textarea", {
        value: e.modelValue,
        rows: e.rows,
        placeholder: e.placeholder,
        disabled: e.disabled,
        maxlength: e.maxLength,
        class: "base-textarea",
        onInput: u[0] || (u[0] = (c) => r.$emit("update:modelValue", c.target.value)),
        onKeydown: [
          u[1] || (u[1] = cs(pt((c) => r.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          u[2] || (u[2] = cs(pt((c) => r.$emit("ctrlEnter"), ["meta"]), ["enter"])),
          cs(l, ["enter"])
        ]
      }, null, 40, Rx),
      e.showCharCount && e.maxLength ? (a(), i("div", Lx, m(e.modelValue.length) + " / " + m(e.maxLength), 1)) : y("", !0)
    ]));
  }
}), xo = /* @__PURE__ */ Ie(Dx, [["__scopeId", "data-v-c6d16c93"]]), Nx = ["checked", "disabled"], Ox = { class: "base-checkbox-box" }, Ux = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, Ax = {
  key: 0,
  class: "base-checkbox-label"
}, zx = /* @__PURE__ */ Ce({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (t, o) => (a(), i("label", {
      class: Be(["base-checkbox", { disabled: e.disabled }])
    }, [
      s("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        class: "base-checkbox-input",
        onChange: o[0] || (o[0] = (n) => t.$emit("update:modelValue", n.target.checked))
      }, null, 40, Nx),
      s("span", Ox, [
        e.modelValue ? (a(), i("svg", Ux, [...o[1] || (o[1] = [
          s("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : y("", !0)
      ]),
      t.$slots.default ? (a(), i("span", Ax, [
        nt(t.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Yn = /* @__PURE__ */ Ie(zx, [["__scopeId", "data-v-bf17c831"]]), Fx = { class: "export-blocked" }, Vx = { class: "error-header" }, Bx = { class: "error-summary" }, Wx = { class: "error-title" }, Gx = { class: "error-description" }, jx = { class: "issues-list" }, Hx = { class: "issue-message" }, qx = {
  key: 0,
  class: "issue-details"
}, Kx = ["onClick"], Jx = { class: "issue-fix" }, Qx = {
  key: 0,
  class: "commit-section"
}, Yx = {
  key: 0,
  class: "issues-warning"
}, Xx = {
  key: 1,
  class: "commit-error"
}, Zx = /* @__PURE__ */ Ce({
  __name: "ExportBlockedModal",
  props: {
    issues: {},
    mode: {}
  },
  emits: ["close", "committed"],
  setup(e, { emit: t }) {
    const o = e, n = t, { commit: l } = rt(), r = k(""), u = k(!1), c = k(!1), d = k(""), v = co({}), f = R(() => o.mode === "publish" ? "Publish" : "Export"), p = R(
      () => o.issues.some((x) => x.type === "uncommitted_workflows" || x.type === "uncommitted_git_changes")
    ), w = R(
      () => o.issues.some((x) => x.type === "unresolved_issues")
    ), g = R(
      () => w.value && !c.value
    ), _ = R(
      () => p.value && r.value.trim() !== "" && !u.value && !g.value
    );
    function C(x) {
      const I = o.issues[x];
      return v[x] || I.details.length <= 3 ? I.details : I.details.slice(0, 3);
    }
    async function $() {
      var x;
      if (_.value) {
        u.value = !0, d.value = "";
        try {
          const I = await l(r.value.trim(), c.value);
          if (I.status === "success")
            n("committed");
          else if (I.status === "blocked") {
            const M = ((x = I.issues) == null ? void 0 : x.map((P) => `${P.name}: ${P.issue}`).join("; ")) || "Unknown issues";
            d.value = `Commit blocked: ${M}`;
          } else
            d.value = I.message || "Commit failed";
        } catch (I) {
          d.value = I instanceof Error ? I.message : "Commit failed";
        } finally {
          u.value = !1;
        }
      }
    }
    return (x, I) => (a(), L($t, {
      title: p.value ? `Commit & ${f.value}` : `Cannot ${f.value}`,
      size: "md",
      onClose: I[4] || (I[4] = (M) => x.$emit("close"))
    }, {
      body: h(() => [
        s("div", Fx, [
          s("div", Vx, [
            I[5] || (I[5] = s("span", { class: "error-icon" }, [
              s("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                s("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ])
            ], -1)),
            s("div", Bx, [
              s("h3", Wx, m(f.value) + " blocked", 1),
              s("p", Gx, m(p.value ? `Commit your changes to proceed with ${f.value.toLowerCase()}.` : `The following issues must be resolved before ${f.value.toLowerCase()}.`), 1)
            ])
          ]),
          s("div", jx, [
            (a(!0), i(B, null, ye(e.issues, (M, P) => (a(), i("div", {
              key: P,
              class: "issue-item"
            }, [
              s("div", Hx, m(M.message), 1),
              M.details.length ? (a(), i("div", qx, [
                (a(!0), i(B, null, ye(C(P), (O, F) => (a(), i("div", {
                  key: F,
                  class: "issue-detail"
                }, m(O), 1))), 128)),
                M.details.length > 3 && !v[P] ? (a(), i("button", {
                  key: 0,
                  class: "show-more-inline",
                  onClick: (O) => v[P] = !0
                }, " +" + m(M.details.length - 3) + " more ", 9, Kx)) : y("", !0)
              ])) : y("", !0),
              s("div", Jx, [
                M.type === "uncommitted_workflows" ? (a(), i(B, { key: 0 }, [
                  S(" Commit your workflow changes before " + m(f.value.toLowerCase()) + "ing. ", 1)
                ], 64)) : M.type === "uncommitted_git_changes" ? (a(), i(B, { key: 1 }, [
                  S(" Commit your changes before " + m(f.value.toLowerCase()) + "ing. ", 1)
                ], 64)) : M.type === "unresolved_issues" ? (a(), i(B, { key: 2 }, [
                  S(" Resolve all workflow issues before " + m(f.value.toLowerCase()) + "ing. ", 1)
                ], 64)) : y("", !0)
              ])
            ]))), 128))
          ]),
          p.value ? (a(), i("div", Qx, [
            w.value ? (a(), i("div", Yx, [
              I[7] || (I[7] = s("div", { class: "warning-header" }, [
                s("span", { class: "warning-icon-badge" }, "!"),
                s("span", { class: "warning-label" }, "Some workflow issues cannot be fixed by committing")
              ], -1)),
              b(Yn, {
                modelValue: c.value,
                "onUpdate:modelValue": I[0] || (I[0] = (M) => c.value = M),
                class: "allow-issues-toggle"
              }, {
                default: h(() => [...I[6] || (I[6] = [
                  S(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : y("", !0),
            b(xo, {
              modelValue: r.value,
              "onUpdate:modelValue": I[1] || (I[1] = (M) => r.value = M),
              placeholder: "Describe your changes...",
              disabled: u.value || g.value,
              rows: 3,
              "submit-on-enter": !0,
              onSubmit: $,
              onCtrlEnter: $
            }, null, 8, ["modelValue", "disabled"]),
            d.value ? (a(), i("div", Xx, m(d.value), 1)) : y("", !0)
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        p.value ? (a(), i(B, { key: 0 }, [
          b(Oe, {
            variant: "secondary",
            onClick: I[2] || (I[2] = (M) => x.$emit("close"))
          }, {
            default: h(() => [...I[8] || (I[8] = [
              S(" Cancel ", -1)
            ])]),
            _: 1
          }),
          b(Oe, {
            variant: c.value ? "danger" : "primary",
            disabled: !_.value,
            loading: u.value,
            onClick: $
          }, {
            default: h(() => [
              S(m(u.value ? "Committing..." : c.value ? `Force Commit & ${f.value}` : `Commit & ${f.value}`), 1)
            ]),
            _: 1
          }, 8, ["variant", "disabled", "loading"])
        ], 64)) : (a(), L(Oe, {
          key: 1,
          variant: "primary",
          onClick: I[3] || (I[3] = (M) => x.$emit("close"))
        }, {
          default: h(() => [...I[9] || (I[9] = [
            S(" Understood ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), e3 = /* @__PURE__ */ Ie(Zx, [["__scopeId", "data-v-a8990107"]]), t3 = { class: "repro-warning" }, s3 = { class: "repro-warning-content" }, o3 = {
  key: 0,
  class: "warning-group"
}, n3 = { class: "warning-list" }, a3 = { key: 0 }, l3 = {
  key: 1,
  class: "warning-group"
}, i3 = { class: "warning-list" }, r3 = { key: 0 }, c3 = /* @__PURE__ */ Ce({
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
    ), v = R(
      () => Math.max(0, l.value - c.value.length)
    ), f = R(
      () => Math.max(0, r.value - d.value.length)
    );
    return (p, w) => (a(), i("div", t3, [
      w[3] || (w[3] = s("span", { class: "repro-warning-icon" }, "!", -1)),
      s("div", s3, [
        s("strong", null, m(u.value) + " reproducibility warning" + m(u.value !== 1 ? "s" : ""), 1),
        s("p", null, m(e.message), 1),
        l.value ? (a(), i("div", o3, [
          w[1] || (w[1] = s("div", { class: "warning-group-label" }, " Models ", -1)),
          s("ul", n3, [
            (a(!0), i(B, null, ye(c.value, (g) => (a(), i("li", {
              key: g.hash || g.filename
            }, m(g.filename), 1))), 128)),
            v.value ? (a(), i("li", a3, "+" + m(v.value) + " more model" + m(v.value !== 1 ? "s" : ""), 1)) : y("", !0)
          ])
        ])) : y("", !0),
        r.value ? (a(), i("div", l3, [
          w[2] || (w[2] = s("div", { class: "warning-group-label" }, " Nodes ", -1)),
          s("ul", i3, [
            (a(!0), i(B, null, ye(d.value, (g) => (a(), i("li", {
              key: g.name
            }, m(g.name) + " (" + m(g.criticality) + ") ", 1))), 128)),
            f.value ? (a(), i("li", r3, "+" + m(f.value) + " more node" + m(f.value !== 1 ? "s" : ""), 1)) : y("", !0)
          ])
        ])) : y("", !0),
        s("button", {
          class: "review-issues-btn",
          onClick: w[0] || (w[0] = (g) => p.$emit("review"))
        }, " Review Issues ")
      ])
    ]));
  }
}), ol = /* @__PURE__ */ Ie(c3, [["__scopeId", "data-v-11be310d"]]), u3 = { class: "export-card" }, d3 = { class: "export-path-row" }, m3 = {
  key: 1,
  class: "export-warning"
}, f3 = { class: "export-footer-actions" }, v3 = /* @__PURE__ */ Ce({
  __name: "ExportSection",
  props: {
    environmentName: {},
    embedded: { type: Boolean }
  },
  emits: ["close"],
  setup(e) {
    const t = e, { validateExport: o, exportEnvWithForce: n, validateEnvironmentExport: l, exportEnvironmentWithForce: r } = rt(), u = k(""), c = k(!1), d = k(!1), v = k(!1), f = k(null), p = k(!1), w = k(null), g = k(!1), _ = k(!1), C = R(() => {
      var H;
      return ((H = t.environmentName) == null ? void 0 : H.trim()) || null;
    }), $ = R(() => C.value ? `EXPORT ENVIRONMENT: ${C.value.toUpperCase()}` : "EXPORT ENVIRONMENT"), x = R(() => C.value ? `Environment '${C.value}' has been exported` : "Your environment has been exported"), I = R(() => c.value ? "Validating..." : d.value ? "Exporting..." : W.value ? "Export Anyway" : "Export Environment"), M = R(() => {
      var H;
      return ((H = w.value) == null ? void 0 : H.warnings) || {
        models_without_sources: [],
        nodes_without_provenance: []
      };
    }), P = R(
      () => M.value.models_without_sources.length
    ), O = R(
      () => {
        var H;
        return ((H = M.value.nodes_without_provenance) == null ? void 0 : H.length) || 0;
      }
    ), F = R(
      () => P.value + O.value
    ), W = R(
      () => {
        var H;
        return !!((H = w.value) != null && H.can_export) && F.value > 0;
      }
    );
    async function D() {
      c.value = !0;
      try {
        const H = C.value ? await l(C.value) : await o();
        return w.value = H, H;
      } catch (H) {
        return f.value = {
          status: "error",
          message: H instanceof Error ? H.message : "Validation failed"
        }, null;
      } finally {
        c.value = !1;
      }
    }
    async function K() {
      f.value = null;
      const H = await D();
      if (H) {
        if (!H.can_export) {
          g.value = !0;
          return;
        }
        await Q();
      }
    }
    async function ue() {
      g.value = !1;
      const H = await D();
      if (H) {
        if (!H.can_export) {
          g.value = !0;
          return;
        }
        await Q();
      }
    }
    async function se() {
      await D();
    }
    async function Q() {
      d.value = !0;
      try {
        const H = C.value ? await r(C.value, u.value || void 0) : await n(u.value || void 0);
        f.value = H;
      } catch (H) {
        f.value = {
          status: "error",
          message: H instanceof Error ? H.message : "Export failed"
        };
      } finally {
        d.value = !1;
      }
    }
    async function we() {
      var H;
      if ((H = f.value) != null && H.path)
        try {
          await navigator.clipboard.writeText(f.value.path);
        } catch (q) {
          console.error("Failed to copy path:", q);
        }
    }
    async function te() {
      var H;
      if ((H = f.value) != null && H.path) {
        v.value = !0;
        try {
          const q = await fetch(`/v2/comfygit/download?path=${encodeURIComponent(f.value.path)}`);
          if (!q.ok)
            throw new Error(`Download failed: ${q.statusText}`);
          const _e = await q.blob(), ee = URL.createObjectURL(_e), me = f.value.path.split("/").pop() || "environment-export.tar.gz", z = document.createElement("a");
          z.href = ee, z.download = me, document.body.appendChild(z), z.click(), document.body.removeChild(z), URL.revokeObjectURL(ee);
        } catch (q) {
          console.error("Failed to download:", q), alert(`Download failed: ${q instanceof Error ? q.message : "Unknown error"}`);
        } finally {
          v.value = !1;
        }
      }
    }
    return at(() => {
      D();
    }), (H, q) => (a(), i(B, null, [
      b(Ut, null, Yt({
        content: h(() => [
          W.value ? (a(), L(ol, {
            key: 0,
            class: "export-readiness-warning",
            warnings: M.value,
            message: "Missing provenance can prevent another machine, or ComfyGit Cloud, from rebuilding this environment exactly.",
            onReview: q[1] || (q[1] = (_e) => _.value = !0)
          }, null, 8, ["warnings"])) : y("", !0),
          b(Et, { title: "EXPORT OPTIONS" }, {
            default: h(() => [
              s("div", u3, [
                q[8] || (q[8] = s("div", { class: "export-card-header" }, [
                  s("span", { class: "export-icon" }, "📁"),
                  s("div", { class: "export-header-text" }, [
                    s("div", { class: "export-title" }, "Output Destination"),
                    s("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                s("div", d3, [
                  b(yo, {
                    modelValue: u.value,
                    "onUpdate:modelValue": q[2] || (q[2] = (_e) => u.value = _e),
                    placeholder: "/mnt/c/Users/you/exports/",
                    class: "path-input"
                  }, null, 8, ["modelValue"])
                ])
              ])
            ]),
            _: 1
          }),
          f.value ? (a(), L(Et, {
            key: 1,
            title: "LAST EXPORT"
          }, {
            default: h(() => [
              b(Vt, {
                status: f.value.status === "success" ? "synced" : "broken"
              }, Yt({
                icon: h(() => [
                  S(m(f.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: h(() => [
                  S(m(f.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: h(() => [
                  S(m(f.value.status === "success" ? x.value : f.value.message), 1)
                ]),
                _: 2
              }, [
                f.value.status === "success" ? {
                  name: "details",
                  fn: h(() => [
                    b(kt, { label: "Saved to:" }, {
                      default: h(() => [
                        b(Mx, {
                          path: f.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    f.value.models_without_sources !== void 0 ? (a(), L(kt, {
                      key: 0,
                      label: "Models without sources:",
                      value: f.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : y("", !0),
                    f.value.models_without_sources && f.value.models_without_sources > 0 ? (a(), i("div", m3, [...q[9] || (q[9] = [
                      s("span", { class: "warning-icon" }, "!", -1),
                      s("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : y("", !0)
                  ]),
                  key: "0"
                } : void 0,
                f.value.status === "success" ? {
                  name: "actions",
                  fn: h(() => [
                    b(Me, {
                      variant: "primary",
                      size: "sm",
                      loading: v.value,
                      onClick: te
                    }, {
                      default: h(() => [...q[10] || (q[10] = [
                        s("svg", {
                          width: "14",
                          height: "14",
                          viewBox: "0 0 16 16",
                          fill: "currentColor"
                        }, [
                          s("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                          s("path", { d: "M14 14H2v2h12v-2z" })
                        ], -1),
                        S(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["loading"]),
                    b(Me, {
                      variant: "secondary",
                      size: "sm",
                      onClick: we
                    }, {
                      default: h(() => [...q[11] || (q[11] = [
                        S(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    b(Me, {
                      variant: "ghost",
                      size: "sm",
                      onClick: q[3] || (q[3] = (_e) => f.value = null)
                    }, {
                      default: h(() => [...q[12] || (q[12] = [
                        S(" Dismiss ", -1)
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
          s("div", f3, [
            e.embedded ? (a(), L(Me, {
              key: 0,
              variant: "secondary",
              size: "md",
              disabled: d.value,
              onClick: q[4] || (q[4] = (_e) => H.$emit("close"))
            }, {
              default: h(() => [...q[13] || (q[13] = [
                S(" Cancel ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])) : y("", !0),
            b(Me, {
              variant: "primary",
              size: "md",
              loading: c.value || d.value,
              disabled: c.value || d.value,
              onClick: K
            }, {
              default: h(() => [
                S(m(I.value), 1)
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
            b(At, {
              title: $.value,
              "show-info": !0,
              onInfoClick: q[0] || (q[0] = (_e) => p.value = !0)
            }, null, 8, ["title"])
          ]),
          key: "0"
        }
      ]), 1024),
      b(is, {
        show: p.value,
        title: "What Gets Exported",
        onClose: q[5] || (q[5] = (_e) => p.value = !1)
      }, {
        content: h(() => [...q[14] || (q[14] = [
          s("div", { class: "export-info" }, [
            s("div", { class: "info-section" }, [
              s("strong", null, "Included in Export:"),
              s("ul", null, [
                s("li", null, [
                  s("strong", null, "Workflows"),
                  S(" — All workflows in this environment")
                ]),
                s("li", null, [
                  s("strong", null, "Custom Nodes"),
                  S(" — Node definitions and dependencies")
                ]),
                s("li", null, [
                  s("strong", null, "Models"),
                  S(" — References and source URLs (not the files)")
                ]),
                s("li", null, [
                  s("strong", null, "Configuration"),
                  S(" — Environment settings and metadata")
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
              S(" Model files are not included to keep exports small. Models can be re-downloaded on import using their source information. ")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      g.value && w.value ? (a(), L(e3, {
        key: 0,
        issues: w.value.blocking_issues,
        onClose: q[6] || (q[6] = (_e) => g.value = !1),
        onCommitted: ue
      }, null, 8, ["issues"])) : y("", !0),
      _.value && w.value ? (a(), L(Il, {
        key: 1,
        warnings: w.value.warnings,
        onClose: q[7] || (q[7] = (_e) => _.value = !1),
        onRevalidate: se
      }, null, 8, ["warnings"])) : y("", !0)
    ], 64));
  }
}), p3 = /* @__PURE__ */ Ie(v3, [["__scopeId", "data-v-6cf814a2"]]), g3 = { class: "file-input-wrapper" }, h3 = ["accept", "multiple", "disabled"], y3 = /* @__PURE__ */ Ce({
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
    }), (c, d) => (a(), i("div", g3, [
      s("input", {
        ref_key: "fileInputRef",
        ref: l,
        type: "file",
        accept: e.accept,
        multiple: e.multiple,
        disabled: e.disabled,
        class: "file-input-hidden",
        onChange: u
      }, null, 40, h3),
      b(Me, {
        variant: e.variant,
        size: e.size,
        disabled: e.disabled,
        onClick: r
      }, {
        default: h(() => [
          nt(c.$slots, "default", {}, () => [
            d[0] || (d[0] = s("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              s("path", { d: "M8 4L4 8h3v4h2V8h3L8 4z" }),
              s("path", { d: "M2 14h12v-2H2v2z" })
            ], -1)),
            S(" " + m(e.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled"])
    ]));
  }
}), w3 = /* @__PURE__ */ Ie(y3, [["__scopeId", "data-v-cd192091"]]), _3 = {
  key: 0,
  class: "drop-zone-empty"
}, k3 = { class: "drop-zone-text" }, b3 = { class: "drop-zone-primary" }, $3 = { class: "drop-zone-secondary" }, C3 = { class: "drop-zone-actions" }, x3 = {
  key: 1,
  class: "drop-zone-file"
}, S3 = { class: "file-info" }, I3 = { class: "file-details" }, E3 = { class: "file-name" }, T3 = { class: "file-size" }, M3 = /* @__PURE__ */ Ce({
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
      var $;
      return (($ = l.value) == null ? void 0 : $.name) || "";
    }), d = R(() => {
      if (!l.value) return "";
      const $ = l.value.size;
      return $ < 1024 ? `${$} B` : $ < 1024 * 1024 ? `${($ / 1024).toFixed(1)} KB` : $ < 1024 * 1024 * 1024 ? `${($ / (1024 * 1024)).toFixed(1)} MB` : `${($ / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function v($) {
      var x;
      $.stopPropagation(), r.value++, (x = $.dataTransfer) != null && x.types.includes("Files") && (n.value = !0);
    }
    function f($) {
      $.stopPropagation(), $.dataTransfer && ($.dataTransfer.dropEffect = "copy");
    }
    function p($) {
      $.stopPropagation(), r.value--, r.value === 0 && (n.value = !1);
    }
    function w($) {
      var I;
      $.stopPropagation(), r.value = 0, n.value = !1;
      const x = (I = $.dataTransfer) == null ? void 0 : I.files;
      x && x.length > 0 && _(x[0]);
    }
    function g($) {
      $.length > 0 && _($[0]);
    }
    function _($) {
      l.value = $, o("fileSelected", $);
    }
    function C() {
      l.value = null, o("clear");
    }
    return ($, x) => (a(), i("div", {
      class: Be(["file-drop-zone", { "drop-active": n.value, "has-file": u.value }]),
      onDragenter: pt(v, ["prevent"]),
      onDragover: pt(f, ["prevent"]),
      onDragleave: pt(p, ["prevent"]),
      onDrop: pt(w, ["prevent"])
    }, [
      u.value ? (a(), i("div", x3, [
        s("div", S3, [
          x[1] || (x[1] = s("div", { class: "file-icon" }, "📦", -1)),
          s("div", I3, [
            s("div", E3, m(c.value), 1),
            s("div", T3, m(d.value), 1)
          ])
        ]),
        b(Me, {
          variant: "ghost",
          size: "xs",
          onClick: C,
          title: "Remove file"
        }, {
          default: h(() => [...x[2] || (x[2] = [
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
      ])) : (a(), i("div", _3, [
        x[0] || (x[0] = s("div", { class: "drop-zone-icon" }, [
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
        s("div", k3, [
          s("p", b3, m(e.primaryText), 1),
          s("p", $3, m(e.secondaryText), 1)
        ]),
        s("div", C3, [
          b(w3, {
            accept: e.accept,
            multiple: e.multiple,
            variant: "primary",
            size: "sm",
            onChange: g
          }, {
            default: h(() => [
              S(m(e.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), P3 = /* @__PURE__ */ Ie(M3, [["__scopeId", "data-v-0f79cb86"]]), R3 = { class: "commit-hash" }, L3 = /* @__PURE__ */ Ce({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(e) {
    const t = e, o = R(() => t.hash.slice(0, t.length));
    return (n, l) => (a(), i("span", R3, m(o.value), 1));
  }
}), hc = /* @__PURE__ */ Ie(L3, [["__scopeId", "data-v-7c333cc6"]]), D3 = { class: "import-preview" }, N3 = { class: "preview-header" }, O3 = {
  key: 0,
  class: "source-env"
}, U3 = { class: "preview-content" }, A3 = { class: "preview-section" }, z3 = { class: "section-header" }, F3 = { class: "section-info" }, V3 = { class: "section-count" }, B3 = {
  key: 0,
  class: "item-list"
}, W3 = { class: "item-name" }, G3 = {
  key: 0,
  class: "item-more"
}, j3 = { class: "preview-section" }, H3 = { class: "section-header" }, q3 = { class: "section-info" }, K3 = { class: "section-count" }, J3 = {
  key: 0,
  class: "item-list"
}, Q3 = { class: "item-details" }, Y3 = { class: "item-name" }, X3 = { class: "item-meta" }, Z3 = {
  key: 0,
  class: "item-more"
}, eS = { class: "preview-section" }, tS = { class: "section-header" }, sS = { class: "section-info" }, oS = { class: "section-count" }, nS = {
  key: 0,
  class: "item-list"
}, aS = { class: "item-name" }, lS = {
  key: 0,
  class: "item-more"
}, iS = {
  key: 0,
  class: "preview-section"
}, rS = { class: "git-info" }, cS = /* @__PURE__ */ Ce({
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
    return (u, c) => (a(), i("div", D3, [
      s("div", N3, [
        b(os, null, {
          default: h(() => [...c[0] || (c[0] = [
            S("Import Preview", -1)
          ])]),
          _: 1
        }),
        e.sourceEnvironment ? (a(), i("span", O3, [
          c[1] || (c[1] = S(" From: ", -1)),
          b(sl, null, {
            default: h(() => [
              S(m(e.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : y("", !0)
      ]),
      s("div", U3, [
        s("div", A3, [
          s("div", z3, [
            c[3] || (c[3] = s("div", { class: "section-icon" }, "📄", -1)),
            s("div", F3, [
              c[2] || (c[2] = s("div", { class: "section-title" }, "Workflows", -1)),
              s("div", V3, m(o.value) + " file" + m(o.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.workflows.length > 0 ? (a(), i("div", B3, [
            (a(!0), i(B, null, ye(e.workflows.slice(0, e.maxPreviewItems), (d) => (a(), i("div", {
              key: d,
              class: "preview-item"
            }, [
              c[4] || (c[4] = s("span", { class: "item-bullet" }, "•", -1)),
              s("span", W3, m(d), 1)
            ]))), 128)),
            e.workflows.length > e.maxPreviewItems ? (a(), i("div", G3, " +" + m(e.workflows.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        s("div", j3, [
          s("div", H3, [
            c[6] || (c[6] = s("div", { class: "section-icon" }, "🎨", -1)),
            s("div", q3, [
              c[5] || (c[5] = s("div", { class: "section-title" }, "Models", -1)),
              s("div", K3, m(n.value) + " file" + m(n.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.models.length > 0 ? (a(), i("div", J3, [
            (a(!0), i(B, null, ye(e.models.slice(0, e.maxPreviewItems), (d) => (a(), i("div", {
              key: d.filename,
              class: "preview-item"
            }, [
              c[7] || (c[7] = s("span", { class: "item-bullet" }, "•", -1)),
              s("div", Q3, [
                s("span", Y3, m(d.filename), 1),
                s("span", X3, m(r(d.size)) + " • " + m(d.type), 1)
              ])
            ]))), 128)),
            e.models.length > e.maxPreviewItems ? (a(), i("div", Z3, " +" + m(e.models.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        s("div", eS, [
          s("div", tS, [
            c[9] || (c[9] = s("div", { class: "section-icon" }, "🔌", -1)),
            s("div", sS, [
              c[8] || (c[8] = s("div", { class: "section-title" }, "Custom Nodes", -1)),
              s("div", oS, m(l.value) + " node" + m(l.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.nodes.length > 0 ? (a(), i("div", nS, [
            (a(!0), i(B, null, ye(e.nodes.slice(0, e.maxPreviewItems), (d) => (a(), i("div", {
              key: d,
              class: "preview-item"
            }, [
              c[10] || (c[10] = s("span", { class: "item-bullet" }, "•", -1)),
              s("span", aS, m(d), 1)
            ]))), 128)),
            e.nodes.length > e.maxPreviewItems ? (a(), i("div", lS, " +" + m(e.nodes.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        e.gitBranch || e.gitCommit ? (a(), i("div", iS, [
          c[11] || (c[11] = s("div", { class: "section-header" }, [
            s("div", { class: "section-icon" }, "🌿"),
            s("div", { class: "section-info" }, [
              s("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          s("div", rS, [
            e.gitBranch ? (a(), L(kt, {
              key: 0,
              label: "Branch"
            }, {
              default: h(() => [
                b(sl, null, {
                  default: h(() => [
                    S(m(e.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : y("", !0),
            e.gitCommit ? (a(), L(kt, {
              key: 1,
              label: "Commit"
            }, {
              default: h(() => [
                b(hc, { hash: e.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : y("", !0)
          ])
        ])) : y("", !0)
      ])
    ]));
  }
}), uS = /* @__PURE__ */ Ie(cS, [["__scopeId", "data-v-182fe113"]]), dS = { class: "import-config" }, mS = { class: "config-container" }, fS = { class: "config-field" }, vS = { class: "input-wrapper" }, pS = ["value"], gS = {
  key: 0,
  class: "validating-indicator"
}, hS = {
  key: 1,
  class: "valid-indicator"
}, yS = {
  key: 0,
  class: "field-error"
}, wS = { class: "config-field" }, _S = { class: "strategy-options" }, kS = ["value", "checked", "onChange"], bS = { class: "strategy-content" }, $S = { class: "strategy-label" }, CS = { class: "strategy-description" }, xS = { class: "config-field switch-field" }, SS = { class: "switch-label" }, IS = ["checked"], ES = { class: "advanced-section" }, TS = { class: "advanced-content" }, MS = { class: "config-field" }, PS = ["value"], RS = ["value"], LS = /* @__PURE__ */ Ce({
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
    vt(() => o.nameError, (f) => {
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
      n("update:name", p), r.value = !1, c && clearTimeout(c), p.length > 0 ? (l.value = !0, c = setTimeout(() => {
        n("validate-name", p);
      }, 400)) : l.value = !1;
    }
    function v() {
      o.name.length > 0 && n("validate-name", o.name);
    }
    return (f, p) => (a(), i("div", dS, [
      b(os, null, {
        default: h(() => [...p[2] || (p[2] = [
          S("Configuration", -1)
        ])]),
        _: 1
      }),
      s("div", mS, [
        s("div", fS, [
          b(On, { required: "" }, {
            default: h(() => [...p[3] || (p[3] = [
              S("Environment Name", -1)
            ])]),
            _: 1
          }),
          s("div", vS, [
            s("input", {
              type: "text",
              class: Be(["name-input", { error: e.nameError || e.name.length === 0, valid: r.value }]),
              value: e.name,
              placeholder: "my-imported-env",
              onInput: d,
              onBlur: v
            }, null, 42, pS),
            l.value ? (a(), i("span", gS, "...")) : r.value ? (a(), i("span", hS, "✓")) : y("", !0)
          ]),
          e.nameError ? (a(), i("div", yS, m(e.nameError), 1)) : y("", !0),
          p[4] || (p[4] = s("div", { class: "field-hint" }, "Creates a new environment with this name", -1))
        ]),
        s("div", wS, [
          b(On, null, {
            default: h(() => [...p[5] || (p[5] = [
              S("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          s("div", _S, [
            (a(), i(B, null, ye(u, (w) => s("label", {
              key: w.value,
              class: Be(["strategy-option", { active: e.modelStrategy === w.value }])
            }, [
              s("input", {
                type: "radio",
                name: "model-strategy",
                value: w.value,
                checked: e.modelStrategy === w.value,
                onChange: (g) => n("update:modelStrategy", w.value)
              }, null, 40, kS),
              s("div", bS, [
                s("span", $S, m(w.label), 1),
                s("span", CS, m(w.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        s("div", xS, [
          s("label", SS, [
            s("input", {
              type: "checkbox",
              checked: e.switchAfterImport,
              onChange: p[0] || (p[0] = (w) => n("update:switchAfterImport", w.target.checked))
            }, null, 40, IS),
            p[6] || (p[6] = s("span", null, "Switch to this environment after import", -1))
          ])
        ]),
        s("details", ES, [
          p[8] || (p[8] = s("summary", { class: "advanced-toggle" }, "Advanced Options", -1)),
          s("div", TS, [
            s("div", MS, [
              b(On, null, {
                default: h(() => [...p[7] || (p[7] = [
                  S("PyTorch Backend", -1)
                ])]),
                _: 1
              }),
              s("select", {
                class: "backend-select",
                value: e.torchBackend,
                onChange: p[1] || (p[1] = (w) => n("update:torchBackend", w.target.value))
              }, [
                (a(!0), i(B, null, ye(st(Pl), (w) => (a(), i("option", {
                  key: w,
                  value: w
                }, m(w) + m(w === "auto" ? " (detect GPU)" : ""), 9, RS))), 128))
              ], 40, PS)
            ])
          ])
        ])
      ])
    ]));
  }
}), DS = /* @__PURE__ */ Ie(LS, [["__scopeId", "data-v-89ea06a1"]]), NS = { class: "import-flow" }, OS = {
  key: 0,
  class: "import-empty"
}, US = { class: "git-import-section" }, AS = { class: "git-url-input-row" }, zS = ["disabled"], FS = {
  key: 0,
  class: "git-error"
}, VS = {
  key: 1,
  class: "import-configure"
}, BS = { class: "selected-file-bar" }, WS = {
  key: 0,
  class: "file-bar-content"
}, GS = { class: "file-bar-info" }, jS = { class: "file-bar-name" }, HS = { class: "file-bar-size" }, qS = {
  key: 1,
  class: "file-bar-content"
}, KS = { class: "file-bar-info" }, JS = { class: "file-bar-name" }, QS = {
  key: 0,
  class: "preview-loading"
}, YS = { class: "import-actions" }, XS = {
  key: 2,
  class: "import-progress"
}, ZS = { class: "creating-intro" }, e8 = {
  key: 0,
  class: "progress-warning"
}, t8 = {
  key: 1,
  class: "import-error"
}, s8 = { class: "error-message" }, o8 = {
  key: 3,
  class: "import-complete"
}, n8 = { class: "complete-message" }, a8 = { class: "complete-title" }, l8 = { class: "complete-details" }, i8 = { class: "complete-actions" }, r8 = /* @__PURE__ */ Ce({
  __name: "ImportFlow",
  props: {
    workspacePath: {},
    resumeImport: { type: Boolean },
    initialProgress: {}
  },
  emits: ["import-complete", "import-started", "source-cleared"],
  setup(e, { expose: t, emit: o }) {
    var Ne, ze, Ae, re;
    const n = e, l = o, { previewTarballImport: r, previewGitImport: u, validateEnvironmentName: c, executeImport: d, executeGitImport: v, getImportProgress: f } = rt();
    let p = null;
    const w = k(null), g = k(n.resumeImport ?? !1), _ = k(!1), C = k(!1), $ = k(""), x = k(!1), I = k(null), M = k(""), P = k(null), O = k(!1), F = k(null), W = k(null), D = k({
      name: ((Ne = n.initialProgress) == null ? void 0 : Ne.environmentName) ?? "",
      modelStrategy: "required",
      torchBackend: "auto",
      switchAfterImport: !0
    }), K = k(null), ue = k({
      message: ((ze = n.initialProgress) == null ? void 0 : ze.message) ?? "Preparing import...",
      phase: ((Ae = n.initialProgress) == null ? void 0 : Ae.phase) ?? "",
      progress: ((re = n.initialProgress) == null ? void 0 : re.progress) ?? 0,
      error: null
    }), se = [
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 15 },
      { id: "extract_builtins", label: "Extract builtin nodes", progressThreshold: 20 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 35 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 60 },
      { id: "sync_nodes", label: "Sync custom nodes", progressThreshold: 70 },
      { id: "copy_workflows", label: "Copy workflows", progressThreshold: 80 },
      { id: "resolve_models", label: "Resolve models", progressThreshold: 85 },
      { id: "download_models", label: "Download models", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], Q = R(() => {
      if (!W.value)
        return {
          sourceEnvironment: "",
          workflows: [],
          models: [],
          nodes: [],
          gitBranch: void 0,
          gitCommit: void 0
        };
      const oe = W.value;
      return {
        sourceEnvironment: oe.comfyui_version ? `ComfyUI ${oe.comfyui_version}` : "Unknown",
        workflows: oe.workflows.map((Le) => Le.name),
        models: oe.models.map((Le) => ({
          filename: Le.filename,
          size: 0,
          type: Le.relative_path.split("/")[0] || "model"
        })),
        nodes: oe.nodes.map((Le) => Le.name),
        gitBranch: void 0,
        gitCommit: void 0
      };
    }), we = R(() => !x.value && !I.value && W.value && D.value.name.length > 0 && !K.value && (w.value || P.value));
    async function te(oe) {
      w.value = oe, x.value = !0, I.value = null, W.value = null;
      try {
        const Le = await r(oe);
        W.value = Le;
      } catch (Le) {
        I.value = Le instanceof Error ? Le.message : "Failed to analyze file", console.error("Preview error:", Le);
      } finally {
        x.value = !1;
      }
    }
    function H() {
      w.value = null, P.value = null, M.value = "", F.value = null, _.value = !1, C.value = !1, $.value = "", W.value = null, I.value = null, D.value = { name: "", modelStrategy: "required", torchBackend: "auto", switchAfterImport: !0 }, K.value = null, l("source-cleared");
    }
    function q() {
      Se(), H(), g.value = !1, x.value = !1, O.value = !1, ue.value = {
        message: "Preparing import...",
        phase: "",
        progress: 0,
        error: null
      };
    }
    async function _e() {
      if (M.value.trim()) {
        O.value = !0, F.value = null;
        try {
          const oe = await u(M.value.trim());
          P.value = M.value.trim(), W.value = oe;
        } catch (oe) {
          F.value = oe instanceof Error ? oe.message : "Failed to analyze repository";
        } finally {
          O.value = !1;
        }
      }
    }
    function ee(oe) {
      try {
        const Le = new URL(oe);
        return Le.host + Le.pathname.replace(/\.git$/, "");
      } catch {
        return oe;
      }
    }
    async function me(oe) {
      if (!oe) {
        K.value = "Environment name is required";
        return;
      }
      try {
        const Le = await c(oe);
        K.value = Le.valid ? null : Le.error || "Invalid name";
      } catch {
        K.value = "Failed to validate name";
      }
    }
    async function z() {
      if (D.value.name && !(!w.value && !P.value)) {
        g.value = !0, _.value = !1, ue.value = { message: `Creating environment '${D.value.name}'...`, phase: "", progress: 0, error: null }, l("import-started");
        try {
          let oe;
          if (w.value)
            oe = await d(
              w.value,
              D.value.name,
              D.value.modelStrategy,
              D.value.torchBackend
            );
          else if (P.value)
            oe = await v(
              P.value,
              D.value.name,
              D.value.modelStrategy,
              D.value.torchBackend
            );
          else
            throw new Error("No import source selected");
          oe.status === "started" ? ae() : (C.value = !1, $.value = oe.message, g.value = !1, _.value = !0);
        } catch (oe) {
          C.value = !1, $.value = oe instanceof Error ? oe.message : "Unknown error occurred during import", g.value = !1, _.value = !0;
        }
      }
    }
    async function ae() {
      if (p) return;
      const oe = async () => {
        try {
          const fe = await f();
          return ue.value = {
            message: fe.message,
            phase: fe.phase || "",
            progress: fe.progress ?? (fe.state === "importing" ? 50 : 0),
            error: fe.error || null
          }, fe.state === "complete" ? (Se(), C.value = !0, $.value = `Environment '${fe.environment_name}' created successfully`, g.value = !1, _.value = !0, fe.environment_name && l("import-complete", fe.environment_name, D.value.switchAfterImport), !1) : fe.state === "error" ? (Se(), C.value = !1, $.value = fe.error || fe.message, g.value = !1, _.value = !0, !1) : !0;
        } catch (fe) {
          return console.error("Failed to poll import progress:", fe), !0;
        }
      };
      await oe() && (p = setInterval(async () => {
        await oe() || Se();
      }, 2e3));
    }
    function Se() {
      p && (clearInterval(p), p = null);
    }
    function pe(oe) {
      return oe < 1024 ? `${oe} B` : oe < 1024 * 1024 ? `${(oe / 1024).toFixed(1)} KB` : oe < 1024 * 1024 * 1024 ? `${(oe / (1024 * 1024)).toFixed(1)} MB` : `${(oe / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return at(async () => {
      try {
        const oe = await f();
        console.log("[ComfyGit ImportFlow] Import progress check:", oe.state, oe), oe.state === "importing" && (console.log("[ComfyGit ImportFlow] Resuming in-progress import:", oe.environment_name), g.value = !0, D.value.name = oe.environment_name || D.value.name || "", ue.value = {
          progress: oe.progress ?? 0,
          message: oe.message || "Importing...",
          phase: oe.phase || "",
          error: null
        }, ae());
      } catch (oe) {
        console.log("[ComfyGit ImportFlow] Import progress check failed:", oe);
      }
    }), t({
      handleReset: q,
      isImporting: g,
      canImport: we
    }), (oe, Le) => {
      var fe;
      return a(), i("div", NS, [
        !w.value && !P.value && !g.value ? (a(), i("div", OS, [
          b(P3, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: te
          }),
          Le[7] || (Le[7] = s("div", { class: "import-divider" }, [
            s("span", null, "or")
          ], -1)),
          s("div", US, [
            Le[5] || (Le[5] = s("div", { class: "git-import-header" }, "Import from Git Repository", -1)),
            s("div", AS, [
              Mt(s("input", {
                type: "text",
                class: "git-url-input",
                "onUpdate:modelValue": Le[0] || (Le[0] = (le) => M.value = le),
                placeholder: "https://github.com/user/repo.git",
                onKeyup: cs(_e, ["enter"]),
                disabled: O.value
              }, null, 40, zS), [
                [tn, M.value]
              ]),
              b(Me, {
                variant: "primary",
                size: "sm",
                disabled: !M.value.trim() || O.value,
                onClick: _e
              }, {
                default: h(() => [
                  S(m(O.value ? "Analyzing..." : "ANALYZE"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            F.value ? (a(), i("div", FS, m(F.value), 1)) : y("", !0),
            Le[6] || (Le[6] = s("div", { class: "git-url-hint" }, "Paste a GitHub URL to preview the environment", -1))
          ])
        ])) : (w.value || P.value) && !g.value && !_.value ? (a(), i("div", VS, [
          s("div", BS, [
            w.value ? (a(), i("div", WS, [
              Le[8] || (Le[8] = s("div", { class: "file-bar-icon" }, "📦", -1)),
              s("div", GS, [
                s("div", jS, m(w.value.name), 1),
                s("div", HS, m(pe(w.value.size)), 1)
              ])
            ])) : P.value ? (a(), i("div", qS, [
              Le[10] || (Le[10] = s("div", { class: "file-bar-icon" }, "🔗", -1)),
              s("div", KS, [
                s("div", JS, m(ee(P.value)), 1),
                Le[9] || (Le[9] = s("div", { class: "file-bar-size" }, "Git Repository", -1))
              ])
            ])) : y("", !0),
            b(Me, {
              variant: "ghost",
              size: "sm",
              onClick: H
            }, {
              default: h(() => [...Le[11] || (Le[11] = [
                S(" Change Source ", -1)
              ])]),
              _: 1
            })
          ]),
          x.value ? (a(), i("div", QS, [...Le[12] || (Le[12] = [
            s("div", { class: "loading-spinner" }, null, -1),
            s("div", { class: "loading-text" }, "Analyzing import file...", -1)
          ])])) : I.value ? (a(), L(Xt, {
            key: 1,
            type: "error",
            title: "Failed to Analyze File",
            details: [I.value]
          }, null, 8, ["details"])) : W.value ? (a(), L(uS, {
            key: 2,
            "source-environment": Q.value.sourceEnvironment,
            workflows: Q.value.workflows,
            models: Q.value.models,
            nodes: Q.value.nodes,
            "git-branch": Q.value.gitBranch,
            "git-commit": Q.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : y("", !0),
          W.value ? (a(), L(DS, {
            key: 3,
            name: D.value.name,
            "onUpdate:name": Le[1] || (Le[1] = (le) => D.value.name = le),
            "model-strategy": D.value.modelStrategy,
            "onUpdate:modelStrategy": Le[2] || (Le[2] = (le) => D.value.modelStrategy = le),
            "torch-backend": D.value.torchBackend,
            "onUpdate:torchBackend": Le[3] || (Le[3] = (le) => D.value.torchBackend = le),
            "switch-after-import": D.value.switchAfterImport,
            "onUpdate:switchAfterImport": Le[4] || (Le[4] = (le) => D.value.switchAfterImport = le),
            "name-error": K.value,
            onValidateName: me
          }, null, 8, ["name", "model-strategy", "torch-backend", "switch-after-import", "name-error"])) : y("", !0),
          D.value.modelStrategy === "skip" && ((fe = W.value) != null && fe.models_needing_download) ? (a(), L(Xt, {
            key: 4,
            type: "warning",
            title: "Models Will Not Be Downloaded",
            details: [
              `${W.value.models_needing_download} model(s) will need to be downloaded later`,
              "You can resolve missing models from the STATUS page after import"
            ]
          }, null, 8, ["details"])) : y("", !0),
          s("div", YS, [
            b(Me, {
              variant: "secondary",
              size: "md",
              onClick: H
            }, {
              default: h(() => [...Le[13] || (Le[13] = [
                S(" Cancel ", -1)
              ])]),
              _: 1
            }),
            b(Me, {
              variant: "primary",
              size: "md",
              disabled: !we.value,
              onClick: z
            }, {
              default: h(() => [...Le[14] || (Le[14] = [
                S(" Create Environment ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : g.value ? (a(), i("div", XS, [
          s("p", ZS, [
            Le[15] || (Le[15] = S(" Importing environment ", -1)),
            s("strong", null, m(D.value.name), 1),
            Le[16] || (Le[16] = S("... ", -1))
          ]),
          b(Qn, {
            progress: ue.value.progress,
            message: ue.value.message,
            "current-phase": ue.value.phase,
            variant: ue.value.error ? "error" : "default",
            "show-steps": !0,
            steps: se
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          ue.value.error ? y("", !0) : (a(), i("p", e8, " This may take several minutes. Please wait... ")),
          ue.value.error ? (a(), i("div", t8, [
            s("p", s8, m(ue.value.error), 1)
          ])) : y("", !0)
        ])) : _.value ? (a(), i("div", o8, [
          s("div", {
            class: Be(["complete-icon", C.value ? "success" : "error"])
          }, m(C.value ? "✓" : "✕"), 3),
          s("div", n8, [
            s("div", a8, m(C.value ? "Import Successful" : "Import Failed"), 1),
            s("div", l8, m($.value), 1)
          ]),
          s("div", i8, [
            b(Me, {
              variant: "primary",
              size: "md",
              onClick: q
            }, {
              default: h(() => [...Le[17] || (Le[17] = [
                S(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : y("", !0)
      ]);
    };
  }
}), yc = /* @__PURE__ */ Ie(r8, [["__scopeId", "data-v-72cbc04e"]]), c8 = /* @__PURE__ */ Ce({
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
    return (r, u) => (a(), i(B, null, [
      b(Ut, null, Yt({
        content: h(() => [
          b(yc, { onImportComplete: l })
        ]),
        _: 2
      }, [
        e.embedded ? void 0 : {
          name: "header",
          fn: h(() => [
            b(At, {
              title: "IMPORT ENVIRONMENT",
              "show-info": !0,
              onInfoClick: u[0] || (u[0] = (c) => n.value = !0)
            })
          ]),
          key: "0"
        }
      ]), 1024),
      b(is, {
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
}), u8 = /* @__PURE__ */ Ie(c8, [["__scopeId", "data-v-41b1f298"]]), d8 = { class: "base-tabs" }, m8 = ["disabled", "onClick"], f8 = {
  key: 0,
  class: "base-tabs__badge"
}, v8 = /* @__PURE__ */ Ce({
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
    return (r, u) => (a(), i("div", d8, [
      (a(!0), i(B, null, ye(e.tabs, (c) => (a(), i("button", {
        key: c.id,
        class: Be([
          "base-tabs__tab",
          {
            active: e.modelValue === c.id,
            disabled: c.disabled
          }
        ]),
        disabled: c.disabled,
        onClick: (d) => l(c.id)
      }, [
        S(m(c.label) + " ", 1),
        c.badge ? (a(), i("span", f8, m(c.badge), 1)) : y("", !0)
      ], 10, m8))), 128))
    ]));
  }
}), Rl = /* @__PURE__ */ Ie(v8, [["__scopeId", "data-v-ad5e6cad"]]), p8 = { class: "commit-list" }, g8 = /* @__PURE__ */ Ce({
  __name: "CommitList",
  setup(e) {
    return (t, o) => (a(), i("div", p8, [
      nt(t.$slots, "default", {}, void 0)
    ]));
  }
}), wc = /* @__PURE__ */ Ie(g8, [["__scopeId", "data-v-8c5ee761"]]), h8 = { class: "commit-message" }, y8 = { class: "commit-date" }, w8 = /* @__PURE__ */ Ce({
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
      class: Be(["commit-item", { clickable: e.clickable }]),
      onClick: l
    }, [
      b(hc, { hash: e.hash }, null, 8, ["hash"]),
      s("span", h8, m(e.message), 1),
      s("span", y8, m(e.relativeDate), 1),
      r.$slots.actions ? (a(), i("div", {
        key: 0,
        class: "commit-actions",
        onClick: u[0] || (u[0] = pt(() => {
        }, ["stop"]))
      }, [
        nt(r.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), _c = /* @__PURE__ */ Ie(w8, [["__scopeId", "data-v-dd7c621b"]]), _8 = /* @__PURE__ */ Ce({
  __name: "HistorySection",
  props: {
    commits: {},
    currentRef: {},
    embedded: { type: Boolean }
  },
  emits: ["select", "checkout"],
  setup(e) {
    const t = e, o = R(() => `HISTORY (${t.currentRef || "detached"})`);
    return (n, l) => (a(), L(Ut, null, Yt({
      content: h(() => [
        e.commits.length === 0 ? (a(), L(fs, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (a(), L(wc, { key: 1 }, {
          default: h(() => [
            (a(!0), i(B, null, ye(e.commits, (r) => (a(), L(_c, {
              key: r.hash,
              hash: r.short_hash || r.hash,
              message: r.message,
              "relative-date": r.date_relative || r.relative_date,
              onClick: (u) => n.$emit("select", r)
            }, {
              actions: h(() => [
                b(Me, {
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
          b(At, { title: o.value }, null, 8, ["title"])
        ]),
        key: "0"
      }
    ]), 1024));
  }
}), k8 = /* @__PURE__ */ Ie(_8, [["__scopeId", "data-v-fa4bf3a1"]]), b8 = { class: "branch-create-form" }, $8 = { class: "form-actions" }, C8 = /* @__PURE__ */ Ce({
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
    return (c, d) => (a(), i("div", b8, [
      b(yo, {
        modelValue: n.value,
        "onUpdate:modelValue": d[0] || (d[0] = (v) => n.value = v),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: r,
        onEscape: u
      }, null, 8, ["modelValue"]),
      s("div", $8, [
        b(Me, {
          variant: "primary",
          size: "sm",
          disabled: !l.value,
          onClick: r
        }, {
          default: h(() => [...d[1] || (d[1] = [
            S(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        b(Me, {
          variant: "secondary",
          size: "sm",
          onClick: u
        }, {
          default: h(() => [...d[2] || (d[2] = [
            S(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), x8 = /* @__PURE__ */ Ie(C8, [["__scopeId", "data-v-7c500394"]]), S8 = { class: "branch-list-item__indicator" }, I8 = { class: "branch-list-item__name" }, E8 = {
  key: 0,
  class: "branch-list-item__actions"
}, T8 = {
  key: 0,
  class: "branch-list-item__current-label"
}, M8 = /* @__PURE__ */ Ce({
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
      class: Be(["branch-list-item", { current: e.isCurrent, clickable: e.clickable }]),
      onClick: o[0] || (o[0] = (n) => e.clickable && t.$emit("click"))
    }, [
      s("span", S8, m(e.isCurrent ? "●" : "○"), 1),
      s("span", I8, m(e.branchName), 1),
      t.$slots.actions || e.showCurrentLabel ? (a(), i("div", E8, [
        nt(t.$slots, "actions", {}, void 0),
        e.isCurrent && e.showCurrentLabel ? (a(), i("span", T8, " current ")) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), P8 = /* @__PURE__ */ Ie(M8, [["__scopeId", "data-v-c6581a24"]]), R8 = { class: "header-info" }, L8 = { class: "branch-name" }, D8 = {
  key: 0,
  class: "current-badge"
}, N8 = { class: "branch-meta" }, O8 = { key: 0 }, U8 = {
  key: 0,
  class: "meta-note"
}, A8 = {
  key: 0,
  class: "loading"
}, z8 = {
  key: 1,
  class: "empty-state"
}, F8 = /* @__PURE__ */ Ce({
  __name: "BranchDetailModal",
  props: {
    branchName: {},
    isCurrent: { type: Boolean }
  },
  emits: ["close", "delete", "switch"],
  setup(e) {
    const t = e, { getBranchHistory: o } = rt(), n = k([]), l = k(!1), r = k(!0);
    return at(async () => {
      try {
        const u = await o(t.branchName, 50);
        n.value = u.commits, l.value = u.has_more;
      } finally {
        r.value = !1;
      }
    }), (u, c) => (a(), L($t, {
      size: "md",
      "show-close-button": !1,
      onClose: c[3] || (c[3] = (d) => u.$emit("close"))
    }, {
      header: h(() => [
        s("div", R8, [
          c[4] || (c[4] = s("h3", { class: "header-title" }, "BRANCH", -1)),
          s("span", L8, m(e.branchName), 1),
          e.isCurrent ? (a(), i("span", D8, "CURRENT")) : y("", !0)
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
        s("div", N8, [
          r.value ? (a(), i("span", O8, "Loading...")) : (a(), i(B, { key: 1 }, [
            s("span", null, m(n.value.length) + " commits", 1),
            l.value ? (a(), i("span", U8, "(showing first " + m(n.value.length) + ")", 1)) : y("", !0)
          ], 64))
        ]),
        r.value ? (a(), i("div", A8, "Loading commit history...")) : n.value.length === 0 ? (a(), i("div", z8, " No commits found on this branch ")) : (a(), L(wc, {
          key: 2,
          class: "branch-commits"
        }, {
          default: h(() => [
            (a(!0), i(B, null, ye(n.value, (d) => (a(), L(_c, {
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
        e.isCurrent ? y("", !0) : (a(), L(Me, {
          key: 0,
          variant: "destructive",
          size: "sm",
          onClick: c[1] || (c[1] = (d) => u.$emit("delete", e.branchName))
        }, {
          default: h(() => [...c[6] || (c[6] = [
            S(" Delete Branch ", -1)
          ])]),
          _: 1
        })),
        c[8] || (c[8] = s("div", { class: "footer-spacer" }, null, -1)),
        e.isCurrent ? y("", !0) : (a(), L(Oe, {
          key: 1,
          variant: "primary",
          onClick: c[2] || (c[2] = (d) => u.$emit("switch", e.branchName))
        }, {
          default: h(() => [...c[7] || (c[7] = [
            S(" Switch to Branch ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }));
  }
}), V8 = /* @__PURE__ */ Ie(F8, [["__scopeId", "data-v-2e5437cc"]]), B8 = {
  key: 2,
  class: "branch-list"
}, W8 = /* @__PURE__ */ Ce({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {},
    embedded: { type: Boolean }
  },
  emits: ["switch", "create", "delete"],
  setup(e, { emit: t }) {
    const o = t, n = k(!1), l = k(null);
    function r(f) {
      o("create", f), u();
    }
    function u() {
      n.value = !1;
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
    return (f, p) => (a(), L(Ut, null, Yt({
      content: h(() => [
        n.value ? (a(), L(x8, {
          key: 0,
          onCreate: r,
          onCancel: u
        })) : y("", !0),
        e.branches.length === 0 ? (a(), L(fs, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (a(), i("div", B8, [
          (a(!0), i(B, null, ye(e.branches, (w) => (a(), L(P8, {
            key: w.name,
            "branch-name": w.name,
            "is-current": w.is_current,
            clickable: !0,
            "show-current-label": !0,
            onClick: (g) => c(w)
          }, {
            actions: h(() => [
              w.is_current ? y("", !0) : (a(), L(Me, {
                key: 0,
                variant: "secondary",
                size: "xs",
                onClick: pt((g) => o("switch", w.name), ["stop"])
              }, {
                default: h(() => [...p[3] || (p[3] = [
                  S(" Switch ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"]))
            ]),
            _: 2
          }, 1032, ["branch-name", "is-current", "onClick"]))), 128))
        ])),
        l.value ? (a(), L(V8, {
          key: 3,
          "branch-name": l.value.name,
          "is-current": l.value.is_current,
          onClose: p[1] || (p[1] = (w) => l.value = null),
          onDelete: d,
          onSwitch: v
        }, null, 8, ["branch-name", "is-current"])) : y("", !0)
      ]),
      _: 2
    }, [
      e.embedded ? void 0 : {
        name: "header",
        fn: h(() => [
          b(At, { title: "BRANCHES" }, {
            actions: h(() => [
              n.value ? y("", !0) : (a(), L(Me, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: p[0] || (p[0] = (w) => n.value = !0)
              }, {
                default: h(() => [...p[2] || (p[2] = [
                  S(" + Create Branch ", -1)
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
}), G8 = /* @__PURE__ */ Ie(W8, [["__scopeId", "data-v-a3de96cc"]]);
function kc(e) {
  return "has_conflicts" in e && e.has_conflicts === !0 && Array.isArray(e.workflow_conflicts);
}
const j8 = { class: "remote-url-display" }, H8 = ["title"], q8 = ["title"], K8 = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, J8 = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Q8 = /* @__PURE__ */ Ce({
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
    return (r, u) => (a(), i("div", j8, [
      s("span", {
        class: "url-text",
        title: e.url
      }, m(n.value), 9, H8),
      s("button", {
        class: Be(["copy-btn", { copied: o.value }]),
        onClick: l,
        title: o.value ? "Copied!" : "Copy URL"
      }, [
        o.value ? (a(), i("svg", J8, [...u[1] || (u[1] = [
          s("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (a(), i("svg", K8, [...u[0] || (u[0] = [
          s("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          s("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, q8)
    ]));
  }
}), Y8 = /* @__PURE__ */ Ie(Q8, [["__scopeId", "data-v-7768a58d"]]), X8 = { class: "remote-title" }, Z8 = {
  key: 0,
  class: "default-badge"
}, e5 = {
  key: 1,
  class: "sync-badge"
}, t5 = {
  key: 0,
  class: "ahead"
}, s5 = {
  key: 1,
  class: "behind"
}, o5 = {
  key: 1,
  class: "synced"
}, n5 = ["href"], a5 = {
  key: 1,
  class: "remote-url-text"
}, l5 = /* @__PURE__ */ Ce({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove", "pull", "push"],
  setup(e) {
    const t = e, o = R(() => t.fetchingRemote === t.remote.name), n = R(() => t.remote.is_default), l = R(() => t.syncStatus && t.syncStatus.behind > 0), r = R(() => t.syncStatus && t.syncStatus.ahead > 0), u = R(() => t.remote.push_url !== t.remote.fetch_url), c = R(() => {
      const v = t.remote.fetch_url, f = v.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return f ? `https://${f[1]}/${f[2]}` : v.startsWith("https://") || v.startsWith("http://") ? v.replace(/\.git$/, "") : null;
    }), d = R(() => t.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (v, f) => (a(), L(Vt, {
      status: n.value ? "synced" : void 0
    }, Yt({
      icon: h(() => [
        S(m(n.value ? "🔗" : "🌐"), 1)
      ]),
      title: h(() => [
        s("div", X8, [
          s("span", null, m(e.remote.name), 1),
          n.value ? (a(), i("span", Z8, "DEFAULT")) : y("", !0),
          e.syncStatus ? (a(), i("span", e5, [
            e.syncStatus.ahead > 0 || e.syncStatus.behind > 0 ? (a(), i(B, { key: 0 }, [
              e.syncStatus.ahead > 0 ? (a(), i("span", t5, "↑" + m(e.syncStatus.ahead), 1)) : y("", !0),
              e.syncStatus.behind > 0 ? (a(), i("span", s5, "↓" + m(e.syncStatus.behind), 1)) : y("", !0)
            ], 64)) : (a(), i("span", o5, "✓ synced"))
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
          onClick: f[0] || (f[0] = pt(() => {
          }, ["stop"]))
        }, m(d.value), 9, n5)) : (a(), i("span", a5, m(d.value), 1))
      ]),
      actions: h(() => [
        b(Me, {
          variant: "primary",
          size: "xs",
          loading: o.value,
          onClick: f[1] || (f[1] = (p) => v.$emit("fetch", e.remote.name))
        }, {
          default: h(() => [...f[6] || (f[6] = [
            S(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        b(Me, {
          variant: l.value ? "primary" : "secondary",
          size: "xs",
          disabled: !e.syncStatus,
          onClick: f[2] || (f[2] = (p) => v.$emit("pull", e.remote.name))
        }, {
          default: h(() => [
            S(" Pull" + m(e.syncStatus && e.syncStatus.behind > 0 ? ` ↓${e.syncStatus.behind}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        b(Me, {
          variant: r.value ? "primary" : "secondary",
          size: "xs",
          disabled: !e.syncStatus,
          onClick: f[3] || (f[3] = (p) => v.$emit("push", e.remote.name))
        }, {
          default: h(() => [
            S(" Push" + m(e.syncStatus && e.syncStatus.ahead > 0 ? ` ↑${e.syncStatus.ahead}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        b(Me, {
          variant: "secondary",
          size: "xs",
          onClick: f[4] || (f[4] = (p) => v.$emit("edit", e.remote.name))
        }, {
          default: h(() => [...f[7] || (f[7] = [
            S(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        n.value ? y("", !0) : (a(), L(Me, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: f[5] || (f[5] = (p) => v.$emit("remove", e.remote.name))
        }, {
          default: h(() => [...f[8] || (f[8] = [
            S(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 2
    }, [
      u.value ? {
        name: "details",
        fn: h(() => [
          e.remote.push_url !== e.remote.fetch_url ? (a(), L(kt, {
            key: 0,
            label: "Push URL:"
          }, {
            default: h(() => [
              b(Y8, {
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
}), i5 = /* @__PURE__ */ Ie(l5, [["__scopeId", "data-v-8310f3a8"]]), r5 = ["for"], c5 = {
  key: 0,
  class: "base-form-field-required"
}, u5 = { class: "base-form-field-input" }, d5 = {
  key: 1,
  class: "base-form-field-error"
}, m5 = {
  key: 2,
  class: "base-form-field-hint"
}, f5 = /* @__PURE__ */ Ce({
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
      class: Be(["base-form-field", { "full-width": e.fullWidth }])
    }, [
      e.label ? (a(), i("label", {
        key: 0,
        for: o.value,
        class: "base-form-field-label"
      }, [
        S(m(e.label) + " ", 1),
        e.required ? (a(), i("span", c5, "*")) : y("", !0)
      ], 8, r5)) : y("", !0),
      s("div", u5, [
        nt(n.$slots, "default", {}, void 0)
      ]),
      e.error ? (a(), i("span", d5, m(e.error), 1)) : e.hint ? (a(), i("span", m5, m(e.hint), 1)) : y("", !0)
    ], 2));
  }
}), Nt = /* @__PURE__ */ Ie(f5, [["__scopeId", "data-v-9a1cf296"]]), v5 = { class: "remote-form" }, p5 = { class: "form-header" }, g5 = { class: "form-body" }, h5 = {
  key: 0,
  class: "form-error"
}, y5 = { class: "form-actions" }, w5 = /* @__PURE__ */ Ce({
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
    vt(() => [o.remoteName, o.fetchUrl, o.pushUrl], () => {
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
        } catch (v) {
          u.value = v instanceof Error ? v.message : "Failed to submit form";
        } finally {
          r.value = !1;
        }
      }
    }
    return (v, f) => (a(), i("div", v5, [
      s("div", p5, [
        b(os, null, {
          default: h(() => [
            S(m(e.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      s("div", g5, [
        b(Nt, {
          label: "Remote Name",
          required: ""
        }, {
          default: h(() => [
            b(bt, {
              modelValue: l.value.name,
              "onUpdate:modelValue": f[0] || (f[0] = (p) => l.value.name = p),
              disabled: e.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        b(Nt, {
          label: "Fetch URL",
          required: ""
        }, {
          default: h(() => [
            b(bt, {
              modelValue: l.value.fetchUrl,
              "onUpdate:modelValue": f[1] || (f[1] = (p) => l.value.fetchUrl = p),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        b(Nt, { label: "Push URL (optional)" }, {
          default: h(() => [
            b(bt, {
              modelValue: l.value.pushUrl,
              "onUpdate:modelValue": f[2] || (f[2] = (p) => l.value.pushUrl = p),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        u.value ? (a(), i("div", h5, m(u.value), 1)) : y("", !0)
      ]),
      s("div", y5, [
        b(Me, {
          variant: "primary",
          size: "md",
          disabled: !c.value,
          loading: r.value,
          onClick: d
        }, {
          default: h(() => [
            S(m(e.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        b(Me, {
          variant: "ghost",
          size: "md",
          onClick: f[3] || (f[3] = (p) => v.$emit("cancel"))
        }, {
          default: h(() => [...f[4] || (f[4] = [
            S(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), _5 = /* @__PURE__ */ Ie(w5, [["__scopeId", "data-v-56021b18"]]), k5 = { class: "conflict-summary-box" }, b5 = { class: "summary-header" }, $5 = { class: "summary-text" }, C5 = { key: 0 }, x5 = {
  key: 1,
  class: "all-resolved"
}, S5 = { class: "summary-progress" }, I5 = { class: "progress-bar" }, E5 = { class: "progress-text" }, T5 = /* @__PURE__ */ Ce({
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
    return (n, l) => (a(), i("div", k5, [
      s("div", b5, [
        l[0] || (l[0] = s("span", { class: "summary-icon" }, "⚠", -1)),
        s("div", $5, [
          s("strong", null, m(e.conflictCount) + " conflict" + m(e.conflictCount !== 1 ? "s" : "") + " detected", 1),
          e.resolvedCount < e.conflictCount ? (a(), i("p", C5, " Resolve all conflicts before " + m(e.operationType) + "ing ", 1)) : (a(), i("p", x5, " All conflicts resolved - ready to " + m(e.operationType), 1))
        ])
      ]),
      s("div", S5, [
        s("div", I5, [
          s("div", {
            class: "progress-fill",
            style: Lt({ width: o.value + "%" })
          }, null, 4)
        ]),
        s("span", E5, m(e.resolvedCount) + " / " + m(e.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), M5 = /* @__PURE__ */ Ie(T5, [["__scopeId", "data-v-4e9e6cc9"]]), P5 = { class: "modal-header" }, R5 = { class: "modal-title" }, L5 = { class: "modal-body" }, D5 = {
  key: 0,
  class: "error-box"
}, N5 = {
  key: 0,
  class: "error-hint"
}, O5 = {
  key: 1,
  class: "loading-state"
}, U5 = { class: "commit-summary" }, A5 = {
  key: 0,
  class: "commits-section"
}, z5 = { class: "commit-list" }, F5 = { class: "commit-hash" }, V5 = { class: "commit-message" }, B5 = { class: "commit-date" }, W5 = {
  key: 1,
  class: "changes-section"
}, G5 = {
  key: 0,
  class: "change-group",
  open: ""
}, j5 = { class: "change-count" }, H5 = { class: "change-list" }, q5 = {
  key: 0,
  class: "conflict-badge"
}, K5 = {
  key: 1,
  class: "change-group"
}, J5 = { class: "change-count" }, Q5 = { class: "change-list" }, Y5 = {
  key: 2,
  class: "change-group"
}, X5 = { class: "change-count" }, Z5 = { class: "change-list" }, e4 = {
  key: 3,
  class: "strategy-section"
}, t4 = { class: "radio-group" }, s4 = { class: "radio-option" }, o4 = { class: "radio-option" }, n4 = { class: "radio-option" }, a4 = {
  key: 4,
  class: "up-to-date"
}, l4 = { class: "modal-actions" }, Si = "comfygit.pullModelStrategy", i4 = /* @__PURE__ */ Ce({
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
    const o = e, n = t, l = k(localStorage.getItem(Si) || "skip");
    vt(l, ($) => {
      localStorage.setItem(Si, $);
    });
    const r = R(() => {
      var $;
      return (($ = o.error) == null ? void 0 : $.toLowerCase().includes("unrelated histories")) ?? !1;
    }), u = R(() => {
      if (!o.preview) return 0;
      const $ = o.preview.changes.workflows;
      return $.added.length + $.modified.length + $.deleted.length;
    }), c = R(() => o.preview ? o.preview.changes.nodes.to_install.length : 0), d = R(() => {
      var $;
      return u.value > 0 || c.value > 0 || ((($ = o.preview) == null ? void 0 : $.changes.models.count) || 0) > 0;
    }), v = R(() => o.preview && kc(o.preview) ? o.preview : null), f = R(() => {
      var $;
      return (($ = v.value) == null ? void 0 : $.workflow_conflicts.length) ?? 0;
    }), p = R(() => {
      var $;
      return (($ = o.conflictResolutions) == null ? void 0 : $.size) ?? 0;
    }), w = R(
      () => f.value > 0 && p.value === f.value
    ), g = R(() => !(!o.preview || o.preview.has_uncommitted_changes || v.value && !w.value));
    function _($) {
      if (!v.value) return !1;
      const x = $.replace(/\.json$/, "");
      return v.value.workflow_conflicts.some((I) => I.name === x);
    }
    function C($) {
      const x = o.conflictResolutions ? Array.from(o.conflictResolutions.values()) : void 0;
      n("pull", { modelStrategy: l.value, force: $, resolutions: x });
    }
    return ($, x) => {
      var I, M;
      return a(), L(Jt, { to: "body" }, [
        e.show ? (a(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: x[11] || (x[11] = (P) => $.$emit("close"))
        }, [
          s("div", {
            class: "modal-content",
            onClick: x[10] || (x[10] = pt(() => {
            }, ["stop"]))
          }, [
            s("div", P5, [
              s("h3", R5, "PULL FROM " + m(e.remoteName.toUpperCase()), 1),
              s("button", {
                class: "modal-close",
                onClick: x[0] || (x[0] = (P) => $.$emit("close"))
              }, "✕")
            ]),
            s("div", L5, [
              e.error ? (a(), i("div", D5, [
                x[13] || (x[13] = s("span", { class: "error-icon" }, "✕", -1)),
                s("div", null, [
                  x[12] || (x[12] = s("strong", null, "PULL FAILED", -1)),
                  s("p", null, m(e.error), 1),
                  r.value ? (a(), i("p", N5, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : y("", !0)
                ])
              ])) : e.loading ? (a(), i("div", O5, [...x[14] || (x[14] = [
                s("span", { class: "spinner" }, "⟳", -1),
                S(" Loading preview... ", -1)
              ])])) : (I = e.preview) != null && I.has_uncommitted_changes ? (a(), i(B, { key: 2 }, [
                x[15] || (x[15] = s("div", { class: "warning-box" }, [
                  s("span", { class: "warning-icon" }, "⚠"),
                  s("div", null, [
                    s("strong", null, "UNCOMMITTED CHANGES"),
                    s("p", null, "You have uncommitted changes that must be committed or discarded before pulling.")
                  ])
                ], -1)),
                x[16] || (x[16] = s("div", { class: "options-section" }, [
                  s("p", null, [
                    s("strong", null, "Options:")
                  ]),
                  s("ul", null, [
                    s("li", null, "Commit your changes first (recommended)"),
                    s("li", null, "Discard changes and force pull")
                  ])
                ], -1))
              ], 64)) : e.preview ? (a(), i(B, { key: 3 }, [
                s("div", U5, [
                  x[17] || (x[17] = s("span", { class: "icon" }, "📥", -1)),
                  S(" " + m(e.preview.commits_behind) + " commit" + m(e.preview.commits_behind !== 1 ? "s" : "") + " from " + m(e.preview.remote) + "/" + m(e.preview.branch), 1)
                ]),
                e.preview.commits && e.preview.commits.length > 0 ? (a(), i("div", A5, [
                  x[18] || (x[18] = s("h4", { class: "section-title" }, "INCOMING COMMITS", -1)),
                  s("div", z5, [
                    (a(!0), i(B, null, ye(e.preview.commits, (P) => (a(), i("div", {
                      key: P.hash,
                      class: "commit-item"
                    }, [
                      s("span", F5, m(P.short_hash || P.hash.slice(0, 7)), 1),
                      s("span", V5, m(P.message), 1),
                      s("span", B5, m(P.date_relative || P.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                d.value ? (a(), i("div", W5, [
                  x[22] || (x[22] = s("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  u.value > 0 ? (a(), i("details", G5, [
                    s("summary", null, [
                      x[19] || (x[19] = s("span", { class: "change-type" }, "Workflows", -1)),
                      s("span", j5, m(u.value) + " changes", 1)
                    ]),
                    s("div", H5, [
                      (a(!0), i(B, null, ye(e.preview.changes.workflows.added, (P) => (a(), i("div", {
                        key: "a-" + P,
                        class: "change-item add"
                      }, " + " + m(P), 1))), 128)),
                      (a(!0), i(B, null, ye(e.preview.changes.workflows.modified, (P) => (a(), i("div", {
                        key: "m-" + P,
                        class: "change-item modify"
                      }, [
                        S(" ~ " + m(P) + " ", 1),
                        _(P) ? (a(), i("span", q5, "CONFLICT")) : y("", !0)
                      ]))), 128)),
                      (a(!0), i(B, null, ye(e.preview.changes.workflows.deleted, (P) => (a(), i("div", {
                        key: "d-" + P,
                        class: "change-item delete"
                      }, " - " + m(P), 1))), 128))
                    ])
                  ])) : y("", !0),
                  c.value > 0 ? (a(), i("details", K5, [
                    s("summary", null, [
                      x[20] || (x[20] = s("span", { class: "change-type" }, "Nodes", -1)),
                      s("span", J5, m(c.value) + " to install", 1)
                    ]),
                    s("div", Q5, [
                      (a(!0), i(B, null, ye(e.preview.changes.nodes.to_install, (P) => (a(), i("div", {
                        key: P,
                        class: "change-item add"
                      }, " + " + m(P), 1))), 128))
                    ])
                  ])) : y("", !0),
                  e.preview.changes.models.count > 0 ? (a(), i("details", Y5, [
                    s("summary", null, [
                      x[21] || (x[21] = s("span", { class: "change-type" }, "Models", -1)),
                      s("span", X5, m(e.preview.changes.models.count) + " referenced", 1)
                    ]),
                    s("div", Z5, [
                      (a(!0), i(B, null, ye(e.preview.changes.models.referenced, (P) => (a(), i("div", {
                        key: P,
                        class: "change-item"
                      }, m(P), 1))), 128))
                    ])
                  ])) : y("", !0)
                ])) : y("", !0),
                v.value ? (a(), L(M5, {
                  key: 2,
                  "conflict-count": f.value,
                  "resolved-count": p.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : y("", !0),
                e.preview.changes.models.count > 0 ? (a(), i("div", e4, [
                  x[27] || (x[27] = s("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  s("div", t4, [
                    s("label", s4, [
                      Mt(s("input", {
                        type: "radio",
                        "onUpdate:modelValue": x[1] || (x[1] = (P) => l.value = P),
                        value: "all"
                      }, null, 512), [
                        [Nn, l.value]
                      ]),
                      x[23] || (x[23] = s("span", null, "Download all models", -1))
                    ]),
                    s("label", o4, [
                      Mt(s("input", {
                        type: "radio",
                        "onUpdate:modelValue": x[2] || (x[2] = (P) => l.value = P),
                        value: "required"
                      }, null, 512), [
                        [Nn, l.value]
                      ]),
                      x[24] || (x[24] = s("span", null, "Download required only", -1))
                    ]),
                    s("label", n4, [
                      Mt(s("input", {
                        type: "radio",
                        "onUpdate:modelValue": x[3] || (x[3] = (P) => l.value = P),
                        value: "skip"
                      }, null, 512), [
                        [Nn, l.value]
                      ]),
                      x[25] || (x[25] = s("span", null, "Skip model downloads", -1)),
                      x[26] || (x[26] = s("span", { class: "default-badge" }, "default", -1))
                    ])
                  ]),
                  x[28] || (x[28] = s("p", { class: "strategy-hint" }, "Models can be downloaded later from MODEL INDEX", -1))
                ])) : y("", !0),
                e.preview.commits_behind === 0 ? (a(), i("div", a4, [
                  x[29] || (x[29] = s("span", { class: "icon" }, "✓", -1)),
                  S(" Already up to date with " + m(e.preview.remote) + "/" + m(e.preview.branch), 1)
                ])) : y("", !0)
              ], 64)) : y("", !0)
            ]),
            s("div", l4, [
              b(Me, {
                variant: "secondary",
                onClick: x[4] || (x[4] = (P) => $.$emit("close"))
              }, {
                default: h(() => [...x[30] || (x[30] = [
                  S(" Cancel ", -1)
                ])]),
                _: 1
              }),
              e.error ? (a(), i(B, { key: 0 }, [
                b(Me, {
                  variant: "secondary",
                  loading: e.pulling,
                  onClick: x[5] || (x[5] = (P) => C(!1))
                }, {
                  default: h(() => [...x[31] || (x[31] = [
                    S(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                b(Me, {
                  variant: "destructive",
                  loading: e.pulling,
                  onClick: x[6] || (x[6] = (P) => C(!0))
                }, {
                  default: h(() => [...x[32] || (x[32] = [
                    S(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (M = e.preview) != null && M.has_uncommitted_changes ? (a(), L(Me, {
                key: 1,
                variant: "destructive",
                loading: e.pulling,
                onClick: x[7] || (x[7] = (P) => C(!0))
              }, {
                default: h(() => [...x[33] || (x[33] = [
                  S(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : e.preview && e.preview.commits_behind > 0 ? (a(), i(B, { key: 2 }, [
                v.value && !w.value ? (a(), L(Me, {
                  key: 0,
                  variant: "primary",
                  onClick: x[8] || (x[8] = (P) => n("openConflictResolution"))
                }, {
                  default: h(() => [
                    S(" Resolve Conflicts (" + m(p.value) + "/" + m(f.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (a(), L(Me, {
                  key: 1,
                  variant: "primary",
                  loading: e.pulling,
                  disabled: !g.value,
                  onClick: x[9] || (x[9] = (P) => C(!1))
                }, {
                  default: h(() => [...x[34] || (x[34] = [
                    S(" Pull Changes ", -1)
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
}), r4 = /* @__PURE__ */ Ie(i4, [["__scopeId", "data-v-1d633bba"]]), c4 = { class: "modal-header" }, u4 = { class: "modal-title" }, d4 = { class: "modal-body" }, m4 = {
  key: 0,
  class: "error-box"
}, f4 = {
  key: 1,
  class: "loading-state"
}, v4 = {
  key: 2,
  class: "warning-box"
}, p4 = {
  key: 1,
  class: "commits-section"
}, g4 = { class: "commit-list" }, h4 = { class: "commit-hash" }, y4 = { class: "commit-message" }, w4 = { class: "commit-date" }, _4 = { class: "force-option" }, k4 = { class: "checkbox-option" }, b4 = { class: "commit-summary" }, $4 = { key: 0 }, C4 = { key: 1 }, x4 = {
  key: 0,
  class: "info-box"
}, S4 = {
  key: 2,
  class: "commits-section"
}, I4 = { class: "commit-list" }, E4 = { class: "commit-hash" }, T4 = { class: "commit-message" }, M4 = { class: "commit-date" }, P4 = {
  key: 3,
  class: "up-to-date"
}, R4 = { class: "modal-actions" }, L4 = /* @__PURE__ */ Ce({
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
    ), v = R(
      () => c.value + d.value
    ), f = R(() => v.value > 0);
    function p(w) {
      n("push", { force: w });
    }
    return (w, g) => {
      var _, C, $, x;
      return a(), i(B, null, [
        (a(), L(Jt, { to: "body" }, [
          e.show ? (a(), i("div", {
            key: 0,
            class: "modal-overlay",
            onClick: g[9] || (g[9] = (I) => w.$emit("close"))
          }, [
            s("div", {
              class: "modal-content",
              onClick: g[8] || (g[8] = pt(() => {
              }, ["stop"]))
            }, [
              s("div", c4, [
                s("h3", u4, "PUSH TO " + m(e.remoteName.toUpperCase()), 1),
                s("button", {
                  class: "modal-close",
                  onClick: g[0] || (g[0] = (I) => w.$emit("close"))
                }, "✕")
              ]),
              s("div", d4, [
                e.error ? (a(), i("div", m4, [
                  g[13] || (g[13] = s("span", { class: "error-icon" }, "!", -1)),
                  s("div", null, [
                    g[12] || (g[12] = s("strong", null, "Push failed", -1)),
                    s("p", null, m(e.error), 1)
                  ])
                ])) : y("", !0),
                e.loading ? (a(), i("div", f4, [...g[14] || (g[14] = [
                  s("span", { class: "spinner" }, "⟳", -1),
                  S(" Loading preview... ", -1)
                ])])) : (_ = e.preview) != null && _.has_uncommitted_changes ? (a(), i("div", v4, [...g[15] || (g[15] = [
                  s("span", { class: "warning-icon" }, "!", -1),
                  s("div", null, [
                    s("strong", null, "UNCOMMITTED CHANGES"),
                    s("p", null, "Commit your changes before pushing.")
                  ], -1)
                ])])) : (C = e.preview) != null && C.remote_has_new_commits ? (a(), i(B, { key: 3 }, [
                  g[19] || (g[19] = s("div", { class: "warning-box" }, [
                    s("span", { class: "warning-icon" }, "!"),
                    s("div", null, [
                      s("strong", null, "REMOTE HAS NEW COMMITS"),
                      s("p", null, "The remote has commits you don't have locally. You should pull first to avoid overwriting changes.")
                    ])
                  ], -1)),
                  f.value ? (a(), L(ol, {
                    key: 0,
                    warnings: u.value,
                    message: "Missing provenance can prevent another machine, or ComfyGit Cloud, from rebuilding this environment exactly.",
                    onReview: g[1] || (g[1] = (I) => r.value = !0)
                  }, null, 8, ["warnings"])) : y("", !0),
                  e.preview.commits_ahead > 0 ? (a(), i("div", p4, [
                    g[16] || (g[16] = s("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                    s("div", g4, [
                      (a(!0), i(B, null, ye(e.preview.commits, (I) => (a(), i("div", {
                        key: I.hash,
                        class: "commit-item"
                      }, [
                        s("span", h4, m(I.short_hash || I.hash.slice(0, 7)), 1),
                        s("span", y4, m(I.message), 1),
                        s("span", w4, m(I.date_relative || I.relative_date), 1)
                      ]))), 128))
                    ])
                  ])) : y("", !0),
                  s("div", _4, [
                    s("label", k4, [
                      Mt(s("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": g[2] || (g[2] = (I) => l.value = I)
                      }, null, 512), [
                        [Kn, l.value]
                      ]),
                      g[17] || (g[17] = s("span", null, "Force push (overwrite remote)", -1))
                    ]),
                    g[18] || (g[18] = s("p", { class: "option-hint" }, "Uses --force-with-lease for safety", -1))
                  ])
                ], 64)) : e.preview ? (a(), i(B, { key: 4 }, [
                  s("div", b4, [
                    g[20] || (g[20] = s("span", { class: "icon" }, "📤", -1)),
                    e.preview.is_first_push ? (a(), i("span", $4, " Creating " + m(e.preview.remote) + "/" + m(e.preview.branch) + " with " + m(e.preview.commits_ahead) + " commit" + m(e.preview.commits_ahead !== 1 ? "s" : ""), 1)) : (a(), i("span", C4, " Pushing " + m(e.preview.commits_ahead) + " commit" + m(e.preview.commits_ahead !== 1 ? "s" : "") + " to " + m(e.preview.remote) + "/" + m(e.preview.branch), 1))
                  ]),
                  e.preview.is_first_push ? (a(), i("div", x4, [...g[21] || (g[21] = [
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
                  f.value ? (a(), L(ol, {
                    key: 1,
                    warnings: u.value,
                    message: "Missing provenance can prevent another machine, or ComfyGit Cloud, from rebuilding this environment exactly.",
                    onReview: g[3] || (g[3] = (I) => r.value = !0)
                  }, null, 8, ["warnings"])) : y("", !0),
                  e.preview.commits_ahead > 0 ? (a(), i("div", S4, [
                    g[22] || (g[22] = s("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                    s("div", I4, [
                      (a(!0), i(B, null, ye(e.preview.commits, (I) => (a(), i("div", {
                        key: I.hash,
                        class: "commit-item"
                      }, [
                        s("span", E4, m(I.short_hash || I.hash.slice(0, 7)), 1),
                        s("span", T4, m(I.message), 1),
                        s("span", M4, m(I.date_relative || I.relative_date), 1)
                      ]))), 128))
                    ])
                  ])) : (a(), i("div", P4, [
                    g[23] || (g[23] = s("span", { class: "icon" }, "✓", -1)),
                    S(" Nothing to push - already up to date with " + m(e.preview.remote) + "/" + m(e.preview.branch), 1)
                  ]))
                ], 64)) : y("", !0)
              ]),
              s("div", R4, [
                b(Me, {
                  variant: "secondary",
                  onClick: g[4] || (g[4] = (I) => w.$emit("close"))
                }, {
                  default: h(() => [...g[24] || (g[24] = [
                    S(" Cancel ", -1)
                  ])]),
                  _: 1
                }),
                ($ = e.preview) != null && $.remote_has_new_commits ? (a(), i(B, { key: 0 }, [
                  b(Me, {
                    variant: "secondary",
                    onClick: g[5] || (g[5] = (I) => w.$emit("pull-first"))
                  }, {
                    default: h(() => [...g[25] || (g[25] = [
                      S(" Pull First ", -1)
                    ])]),
                    _: 1
                  }),
                  b(Me, {
                    variant: "destructive",
                    disabled: !l.value,
                    loading: e.pushing,
                    onClick: g[6] || (g[6] = (I) => p(!0))
                  }, {
                    default: h(() => [
                      S(m(f.value ? "Force Push Anyway" : "Force Push"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled", "loading"])
                ], 64)) : e.preview && e.preview.commits_ahead > 0 && !e.preview.has_uncommitted_changes ? (a(), L(Me, {
                  key: 1,
                  variant: "primary",
                  loading: e.pushing,
                  onClick: g[7] || (g[7] = (I) => p(!1))
                }, {
                  default: h(() => [
                    S(m(f.value ? "Push Anyway" : "Push"), 1)
                  ]),
                  _: 1
                }, 8, ["loading"])) : y("", !0)
              ])
            ])
          ])) : y("", !0)
        ])),
        r.value && ((x = e.preview) != null && x.warnings) ? (a(), L(Il, {
          key: 0,
          warnings: e.preview.warnings,
          onClose: g[10] || (g[10] = (I) => r.value = !1),
          onRevalidate: g[11] || (g[11] = (I) => w.$emit("revalidate"))
        }, null, 8, ["warnings"])) : y("", !0)
      ], 64);
    };
  }
}), D4 = /* @__PURE__ */ Ie(L4, [["__scopeId", "data-v-7748bf33"]]), N4 = { class: "resolution-choice-group" }, O4 = ["disabled"], U4 = ["disabled"], A4 = /* @__PURE__ */ Ce({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (t, o) => (a(), i("div", N4, [
      s("button", {
        class: Be(["choice-btn", "mine", { selected: e.modelValue === "take_base" }]),
        onClick: o[0] || (o[0] = (n) => t.$emit("update:modelValue", "take_base")),
        disabled: e.disabled
      }, [...o[2] || (o[2] = [
        s("span", { class: "choice-icon" }, "◀", -1),
        s("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, O4),
      s("button", {
        class: Be(["choice-btn", "theirs", { selected: e.modelValue === "take_target" }]),
        onClick: o[1] || (o[1] = (n) => t.$emit("update:modelValue", "take_target")),
        disabled: e.disabled
      }, [...o[3] || (o[3] = [
        s("span", { class: "choice-label" }, "Keep Theirs", -1),
        s("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, U4)
    ]));
  }
}), z4 = /* @__PURE__ */ Ie(A4, [["__scopeId", "data-v-985715ed"]]), F4 = { class: "conflict-header" }, V4 = { class: "conflict-info" }, B4 = { class: "workflow-name" }, W4 = { class: "conflict-description" }, G4 = {
  key: 0,
  class: "resolved-badge"
}, j4 = { class: "resolved-text" }, H4 = { class: "conflict-hashes" }, q4 = { class: "hash-item" }, K4 = { class: "hash-item" }, J4 = { class: "conflict-actions" }, Q4 = /* @__PURE__ */ Ce({
  __name: "WorkflowConflictItem",
  props: {
    conflict: {},
    resolution: {},
    disabled: { type: Boolean }
  },
  emits: ["resolve"],
  setup(e, { emit: t }) {
    const o = e, n = t, l = k(o.resolution);
    vt(() => o.resolution, (d) => {
      l.value = d;
    }), vt(l, (d) => {
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
    return (d, v) => {
      var f, p;
      return a(), i("div", {
        class: Be(["conflict-item", { resolved: r.value }])
      }, [
        s("div", F4, [
          v[2] || (v[2] = s("span", { class: "conflict-icon" }, "⚠", -1)),
          s("div", V4, [
            s("code", B4, m(e.conflict.name) + ".json", 1),
            s("div", W4, m(u.value), 1)
          ]),
          r.value ? (a(), i("div", G4, [
            v[1] || (v[1] = s("span", { class: "resolved-icon" }, "✓", -1)),
            s("span", j4, m(c.value), 1)
          ])) : y("", !0)
        ]),
        s("div", H4, [
          s("span", q4, [
            v[3] || (v[3] = S("Your: ", -1)),
            s("code", null, m(((f = e.conflict.base_hash) == null ? void 0 : f.slice(0, 8)) || "n/a"), 1)
          ]),
          s("span", K4, [
            v[4] || (v[4] = S("Theirs: ", -1)),
            s("code", null, m(((p = e.conflict.target_hash) == null ? void 0 : p.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        s("div", J4, [
          b(z4, {
            modelValue: l.value,
            "onUpdate:modelValue": v[0] || (v[0] = (w) => l.value = w),
            disabled: e.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), Y4 = /* @__PURE__ */ Ie(Q4, [["__scopeId", "data-v-506d3bbf"]]), X4 = { class: "resolution-content" }, Z4 = {
  key: 0,
  class: "error-box"
}, eI = { class: "resolution-header" }, tI = { class: "header-stats" }, sI = { class: "stat" }, oI = { class: "stat-value" }, nI = { class: "stat resolved" }, aI = { class: "stat-value" }, lI = {
  key: 0,
  class: "stat pending"
}, iI = { class: "stat-value" }, rI = { class: "conflicts-list" }, cI = {
  key: 1,
  class: "all-resolved-message"
}, uI = /* @__PURE__ */ Ce({
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
    function v(w, g) {
      n("resolve", w, g);
    }
    function f() {
      n("close");
    }
    function p() {
      n("apply");
    }
    return (w, g) => (a(), L($t, {
      title: `Resolve Workflow Conflicts: ${e.operationType === "pull" ? "Pull" : "Merge"}`,
      size: "lg",
      "fixed-height": !0,
      onClose: f
    }, {
      body: h(() => [
        s("div", X4, [
          e.error ? (a(), i("div", Z4, [
            g[1] || (g[1] = s("span", { class: "error-icon" }, "✕", -1)),
            s("div", null, [
              g[0] || (g[0] = s("strong", null, "Validation Failed", -1)),
              s("p", null, m(e.error), 1)
            ])
          ])) : y("", !0),
          s("div", eI, [
            s("div", tI, [
              s("div", sI, [
                s("span", oI, m(e.workflowConflicts.length), 1),
                g[2] || (g[2] = s("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              s("div", nI, [
                s("span", aI, m(l.value), 1),
                g[3] || (g[3] = s("span", { class: "stat-label" }, "resolved", -1))
              ]),
              r.value > 0 ? (a(), i("div", lI, [
                s("span", iI, m(r.value), 1),
                g[4] || (g[4] = s("span", { class: "stat-label" }, "pending", -1))
              ])) : y("", !0)
            ]),
            g[5] || (g[5] = s("p", { class: "header-hint" }, " Choose which version to keep for each conflicting workflow. ", -1))
          ]),
          s("div", rI, [
            (a(!0), i(B, null, ye(e.workflowConflicts, (_) => (a(), L(Y4, {
              key: _.name,
              conflict: _,
              resolution: d(_.name),
              onResolve: (C) => v(_.name, C)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          u.value ? (a(), i("div", cI, [
            g[6] || (g[6] = s("span", { class: "resolved-icon" }, "✓", -1)),
            s("span", null, 'All conflicts resolved! Click "' + m(c.value) + '" to continue.', 1)
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        b(Oe, {
          variant: "secondary",
          onClick: f
        }, {
          default: h(() => [...g[7] || (g[7] = [
            S(" Cancel ", -1)
          ])]),
          _: 1
        }),
        g[8] || (g[8] = s("div", { class: "footer-spacer" }, null, -1)),
        b(Oe, {
          variant: "primary",
          disabled: !u.value || e.validating,
          loading: e.validating,
          onClick: p
        }, {
          default: h(() => [
            S(m(c.value), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), dI = /* @__PURE__ */ Ie(uI, [["__scopeId", "data-v-c58d150d"]]), mI = { class: "node-conflict-item" }, fI = { class: "node-header" }, vI = { class: "node-name" }, pI = { class: "node-id" }, gI = { class: "version-comparison" }, hI = { class: "version yours" }, yI = { class: "version theirs" }, wI = { class: "chosen-version" }, _I = { class: "chosen" }, kI = { class: "chosen-reason" }, bI = { class: "affected-workflows" }, $I = { class: "wf-source" }, CI = { class: "wf-version" }, xI = /* @__PURE__ */ Ce({
  __name: "NodeConflictItem",
  props: {
    conflict: {}
  },
  setup(e) {
    return (t, o) => (a(), i("div", mI, [
      s("div", fI, [
        s("code", vI, m(e.conflict.node_name), 1),
        s("span", pI, "(" + m(e.conflict.node_id) + ")", 1)
      ]),
      s("div", gI, [
        s("div", hI, [
          o[0] || (o[0] = s("span", { class: "label" }, "Your version:", -1)),
          s("code", null, m(e.conflict.base_version), 1)
        ]),
        o[2] || (o[2] = s("span", { class: "arrow" }, "→", -1)),
        s("div", yI, [
          o[1] || (o[1] = s("span", { class: "label" }, "Their version:", -1)),
          s("code", null, m(e.conflict.target_version), 1)
        ])
      ]),
      s("div", wI, [
        o[3] || (o[3] = s("span", { class: "label" }, "Will install:", -1)),
        s("code", _I, m(e.conflict.chosen_version), 1),
        s("span", kI, m(e.conflict.chosen_reason), 1)
      ]),
      s("details", bI, [
        s("summary", null, " Affected workflows (" + m(e.conflict.affected_workflows.length) + ") ", 1),
        s("ul", null, [
          (a(!0), i(B, null, ye(e.conflict.affected_workflows, (n) => (a(), i("li", {
            key: n.name
          }, [
            s("code", null, m(n.name), 1),
            s("span", $I, "(" + m(n.source === "base" ? "yours" : "theirs") + ")", 1),
            s("span", CI, "needs v" + m(n.required_version), 1)
          ]))), 128))
        ])
      ])
    ]));
  }
}), SI = /* @__PURE__ */ Ie(xI, [["__scopeId", "data-v-8b626725"]]), II = { class: "validation-content" }, EI = {
  key: 0,
  class: "compatible-message"
}, TI = { class: "conflicts-list" }, MI = {
  key: 2,
  class: "warnings-section"
}, PI = /* @__PURE__ */ Ce({
  __name: "ValidationResultsModal",
  props: {
    validation: {},
    operationType: {},
    executing: { type: Boolean }
  },
  emits: ["proceed", "goBack", "cancel"],
  setup(e, { emit: t }) {
    const o = e, n = t, l = R(() => o.validation.is_compatible ? o.operationType === "pull" ? "Pull" : "Merge" : o.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (r, u) => (a(), L($t, {
      title: "Compatibility Check",
      size: "lg",
      onClose: u[3] || (u[3] = (c) => n("cancel"))
    }, {
      body: h(() => [
        s("div", II, [
          e.validation.is_compatible && e.validation.node_conflicts.length === 0 ? (a(), i("div", EI, [
            u[5] || (u[5] = s("span", { class: "icon" }, "✓", -1)),
            s("div", null, [
              u[4] || (u[4] = s("strong", null, "All clear!", -1)),
              s("p", null, "Your workflow choices are compatible. Ready to " + m(e.operationType) + ".", 1)
            ])
          ])) : e.validation.node_conflicts.length > 0 ? (a(), i(B, { key: 1 }, [
            u[6] || (u[6] = s("div", { class: "warning-header" }, [
              s("span", { class: "icon" }, "⚠"),
              s("div", null, [
                s("strong", null, "Node Version Differences"),
                s("p", null, " Your workflow choices require different versions of some nodes. The versions shown below will be installed. ")
              ])
            ], -1)),
            s("div", TI, [
              (a(!0), i(B, null, ye(e.validation.node_conflicts, (c) => (a(), L(SI, {
                key: c.node_id,
                conflict: c
              }, null, 8, ["conflict"]))), 128))
            ]),
            u[7] || (u[7] = s("div", { class: "info-box" }, [
              s("strong", null, "What happens if you proceed?"),
              s("p", null, " The highlighted versions will be installed. Workflows built with different versions may need minor adjustments. ")
            ], -1))
          ], 64)) : y("", !0),
          e.validation.warnings.length > 0 ? (a(), i("div", MI, [
            u[8] || (u[8] = s("h4", null, "Warnings", -1)),
            s("ul", null, [
              (a(!0), i(B, null, ye(e.validation.warnings, (c, d) => (a(), i("li", { key: d }, m(c), 1))), 128))
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
            S(" Cancel ", -1)
          ])]),
          _: 1
        }),
        u[11] || (u[11] = s("div", { class: "footer-spacer" }, null, -1)),
        b(Oe, {
          variant: "secondary",
          onClick: u[1] || (u[1] = (c) => n("goBack"))
        }, {
          default: h(() => [...u[10] || (u[10] = [
            S(" ← Change Choices ", -1)
          ])]),
          _: 1
        }),
        b(Oe, {
          variant: "primary",
          loading: e.executing,
          onClick: u[2] || (u[2] = (c) => n("proceed"))
        }, {
          default: h(() => [
            S(m(l.value), 1)
          ]),
          _: 1
        }, 8, ["loading"])
      ]),
      _: 1
    }));
  }
}), RI = /* @__PURE__ */ Ie(PI, [["__scopeId", "data-v-fefd26ed"]]), LI = {
  key: 0,
  class: "embedded-toolbar"
}, DI = { class: "embedded-toolbar-search" }, NI = /* @__PURE__ */ Ce({
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
      getPullPreview: v,
      pullFromRemote: f,
      getPushPreview: p,
      pushToRemote: w,
      validateMerge: g
    } = rt(), _ = k([]), C = k({}), $ = k(!1), x = k(null), I = k(""), M = k(!1), P = k(null), O = k(!1), F = k("add"), W = k({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), D = R(() => {
      if (!I.value.trim()) return _.value;
      const Ve = I.value.toLowerCase();
      return _.value.filter(
        (Ue) => Ue.name.toLowerCase().includes(Ve) || Ue.fetch_url.toLowerCase().includes(Ve) || Ue.push_url.toLowerCase().includes(Ve)
      );
    });
    async function K() {
      $.value = !0, x.value = null;
      try {
        const Ve = await n();
        _.value = Ve.remotes, await Promise.all(
          Ve.remotes.map(async (Ue) => {
            const Qe = await d(Ue.name);
            Qe && (C.value[Ue.name] = Qe);
          })
        );
      } catch (Ve) {
        x.value = Ve instanceof Error ? Ve.message : "Failed to load remotes";
      } finally {
        $.value = !1;
      }
    }
    function ue() {
      F.value = "add", W.value = { name: "", fetchUrl: "", pushUrl: "" }, O.value = !0;
    }
    function se(Ve) {
      const Ue = _.value.find((Qe) => Qe.name === Ve);
      Ue && (F.value = "edit", W.value = {
        name: Ue.name,
        fetchUrl: Ue.fetch_url,
        pushUrl: Ue.push_url
      }, O.value = !0);
    }
    async function Q(Ve) {
      try {
        F.value === "add" ? await l(Ve.name, Ve.fetchUrl) : await u(Ve.name, Ve.fetchUrl, Ve.pushUrl || void 0), O.value = !1, await K();
      } catch (Ue) {
        x.value = Ue instanceof Error ? Ue.message : "Operation failed";
      }
    }
    function we() {
      O.value = !1, W.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function te(Ve) {
      P.value = Ve;
      try {
        await c(Ve);
        const Ue = await d(Ve);
        Ue && (C.value[Ve] = Ue), o("toast", `✓ Fetched from ${Ve}`, "success");
      } catch (Ue) {
        o("toast", Ue instanceof Error ? Ue.message : "Fetch failed", "error");
      } finally {
        P.value = null;
      }
    }
    async function H(Ve) {
      if (confirm(`Remove remote "${Ve}"?`))
        try {
          await r(Ve), await K();
        } catch (Ue) {
          x.value = Ue instanceof Error ? Ue.message : "Failed to remove remote";
        }
    }
    function q() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const _e = k("idle"), ee = R(() => _e.value === "pull_preview"), me = R(
      () => _e.value === "resolving" || _e.value === "validating"
    ), z = R(
      () => _e.value === "validation_review" || _e.value === "executing"
    ), ae = k(!1), Se = k(null), pe = k(!1), Ne = k(null), ze = k(null), Ae = k(!1), re = k(null), oe = k(null), Le = k(/* @__PURE__ */ new Map()), fe = k(null), le = k(null), E = R(() => re.value && kc(re.value) ? re.value : null);
    async function A(Ve) {
      ze.value = Ve, _e.value = "pull_preview", Ae.value = !0, re.value = null, oe.value = null;
      try {
        re.value = await v(Ve);
      } catch (Ue) {
        oe.value = Ue instanceof Error ? Ue.message : "Failed to load pull preview";
      } finally {
        Ae.value = !1;
      }
    }
    function ce() {
      _e.value = "idle", re.value = null, oe.value = null, ze.value = null;
    }
    async function $e(Ve) {
      if (!ze.value) return;
      _e.value = "executing", oe.value = null;
      const Ue = ze.value;
      try {
        const Qe = await f(Ue, Ve);
        if (Qe.rolled_back) {
          oe.value = `Pull failed and was rolled back: ${Qe.error || "Unknown error"}`, _e.value = "pull_preview";
          return;
        }
        We(), _e.value = "idle", o("toast", `✓ Pulled from ${Ue}`, "success"), await K();
      } catch (Qe) {
        oe.value = Qe instanceof Error ? Qe.message : "Pull failed", _e.value = "pull_preview";
      }
    }
    function Te() {
      E.value && (_e.value = "resolving", le.value = null);
    }
    function xe(Ve, Ue) {
      Le.value.set(Ve, { name: Ve, resolution: Ue });
    }
    function Z() {
      _e.value = "pull_preview";
    }
    async function G() {
      _e.value = "validating", le.value = null;
      try {
        const Ve = Array.from(Le.value.values());
        fe.value = await g(ze.value, Ve), _e.value = "validation_review";
      } catch (Ve) {
        le.value = Ve instanceof Error ? Ve.message : "Validation failed", _e.value = "resolving";
      }
    }
    async function ve() {
      _e.value = "executing";
      const Ve = ze.value;
      try {
        const Ue = Array.from(Le.value.values()), Qe = await f(Ve, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: Ue
        });
        if (Qe.rolled_back) {
          oe.value = `Pull failed and was rolled back: ${Qe.error || "Unknown error"}`, _e.value = "pull_preview";
          return;
        }
        We(), _e.value = "idle", o("toast", `✓ Pulled from ${Ve}`, "success"), await K();
      } catch (Ue) {
        oe.value = Ue instanceof Error ? Ue.message : "Pull failed", _e.value = "validation_review";
      }
    }
    function ge() {
      _e.value = "resolving";
    }
    function He() {
      We(), _e.value = "idle";
    }
    function We() {
      Le.value.clear(), fe.value = null, le.value = null, oe.value = null, re.value = null, ze.value = null;
    }
    async function ke(Ve) {
      ze.value = Ve, ae.value = !0, Ae.value = !0, Se.value = null, Ne.value = null;
      try {
        Se.value = await p(Ve);
      } catch (Ue) {
        Ne.value = Ue instanceof Error ? Ue.message : "Failed to load push preview";
      } finally {
        Ae.value = !1;
      }
    }
    async function X() {
      if (ze.value) {
        Ae.value = !0, Ne.value = null;
        try {
          Se.value = await p(ze.value);
        } catch (Ve) {
          Ne.value = Ve instanceof Error ? Ve.message : "Failed to refresh push preview";
        } finally {
          Ae.value = !1;
        }
      }
    }
    function Fe() {
      ae.value = !1, Se.value = null, Ne.value = null, ze.value = null;
    }
    async function De(Ve) {
      var Qe;
      if (!ze.value) return;
      pe.value = !0;
      const Ue = ze.value;
      Ne.value = null;
      try {
        await w(Ue, Ve), Fe(), o("toast", `✓ Pushed to ${Ue}`, "success"), await K();
      } catch (gt) {
        const Y = gt instanceof Error ? gt.message : "Push failed";
        Ne.value = Y, gt instanceof Zr && gt.status === 409 && ((Qe = gt.data) != null && Qe.needs_force) && Se.value ? Se.value = {
          ...Se.value,
          remote_has_new_commits: !0,
          needs_force: !0,
          can_push: !0,
          block_reason: null
        } : o("toast", Y, "error");
      } finally {
        pe.value = !1;
      }
    }
    function qe() {
      const Ve = ze.value;
      Fe(), Ve && A(Ve);
    }
    return at(K), (Ve, Ue) => (a(), i(B, null, [
      b(Ut, null, Yt({
        content: h(() => [
          $.value ? (a(), L(Cs, {
            key: 0,
            message: "Loading remotes..."
          })) : x.value ? (a(), L(xs, {
            key: 1,
            message: x.value,
            retry: !0,
            onRetry: K
          }, null, 8, ["message"])) : (a(), i(B, { key: 2 }, [
            e.embedded && !O.value ? (a(), i("div", LI, [
              s("div", DI, [
                b(ro, {
                  modelValue: I.value,
                  "onUpdate:modelValue": Ue[2] || (Ue[2] = (Qe) => I.value = Qe),
                  placeholder: "🔍 Search remotes..."
                }, null, 8, ["modelValue"])
              ]),
              b(Me, {
                variant: "primary",
                size: "sm",
                onClick: ue
              }, {
                default: h(() => [...Ue[5] || (Ue[5] = [
                  S(" + Add Remote ", -1)
                ])]),
                _: 1
              })
            ])) : y("", !0),
            O.value ? (a(), L(_5, {
              key: 1,
              mode: F.value,
              "remote-name": W.value.name,
              "fetch-url": W.value.fetchUrl,
              "push-url": W.value.pushUrl,
              onSubmit: Q,
              onCancel: we
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : y("", !0),
            D.value.length && !O.value ? (a(), L(Et, {
              key: 2,
              title: "REMOTES",
              count: D.value.length
            }, {
              default: h(() => [
                (a(!0), i(B, null, ye(D.value, (Qe) => (a(), L(i5, {
                  key: Qe.name,
                  remote: Qe,
                  "sync-status": C.value[Qe.name],
                  "fetching-remote": P.value,
                  onFetch: te,
                  onEdit: se,
                  onRemove: H,
                  onPull: A,
                  onPush: ke
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            !D.value.length && !O.value ? (a(), L(fs, {
              key: 3,
              icon: "🌐",
              message: I.value ? `No remotes match '${I.value}'` : "No remotes configured."
            }, {
              actions: h(() => [
                b(Me, {
                  variant: "primary",
                  onClick: ue
                }, {
                  default: h(() => [...Ue[6] || (Ue[6] = [
                    S(" Add Your First Remote ", -1)
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
            b(At, {
              title: "GIT REMOTES",
              "show-info": !0,
              onInfoClick: Ue[0] || (Ue[0] = (Qe) => M.value = !0)
            }, {
              actions: h(() => [
                O.value ? y("", !0) : (a(), L(Me, {
                  key: 0,
                  variant: "primary",
                  size: "sm",
                  onClick: ue
                }, {
                  default: h(() => [...Ue[4] || (Ue[4] = [
                    S(" + Add Remote ", -1)
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
            O.value ? y("", !0) : (a(), L(ro, {
              key: 0,
              modelValue: I.value,
              "onUpdate:modelValue": Ue[1] || (Ue[1] = (Qe) => I.value = Qe),
              placeholder: "🔍 Search remotes..."
            }, null, 8, ["modelValue"]))
          ]),
          key: "1"
        }
      ]), 1024),
      b(is, {
        show: M.value,
        title: "About Git Remotes",
        onClose: Ue[3] || (Ue[3] = (Qe) => M.value = !1)
      }, {
        content: h(() => [...Ue[7] || (Ue[7] = [
          s("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          s("p", null, [
            S(" The "),
            s("strong", null, '"origin"'),
            S(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: h(() => [
          b(Me, {
            variant: "link",
            onClick: q
          }, {
            default: h(() => [...Ue[8] || (Ue[8] = [
              S(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      b(r4, {
        show: ee.value,
        "remote-name": ze.value || "",
        preview: re.value,
        loading: Ae.value,
        pulling: _e.value === "executing",
        error: oe.value,
        "conflict-resolutions": Le.value,
        onClose: ce,
        onPull: $e,
        onOpenConflictResolution: Te
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      b(D4, {
        show: ae.value,
        "remote-name": ze.value || "",
        preview: Se.value,
        loading: Ae.value,
        pushing: pe.value,
        error: Ne.value,
        onClose: Fe,
        onPush: De,
        onPullFirst: qe,
        onRevalidate: X
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing", "error"]),
      me.value && E.value ? (a(), L(dI, {
        key: 0,
        "workflow-conflicts": E.value.workflow_conflicts,
        resolutions: Le.value,
        "operation-type": "pull",
        validating: _e.value === "validating",
        error: le.value,
        onClose: Z,
        onResolve: xe,
        onApply: G
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : y("", !0),
      z.value && fe.value ? (a(), L(RI, {
        key: 1,
        validation: fe.value,
        "operation-type": "pull",
        executing: _e.value === "executing",
        onProceed: ve,
        onGoBack: ge,
        onCancel: He
      }, null, 8, ["validation", "executing"])) : y("", !0)
    ], 64));
  }
}), OI = /* @__PURE__ */ Ie(NI, [["__scopeId", "data-v-a6651a66"]]), UI = /* @__PURE__ */ Ce({
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
      { id: "remotes", label: "Remotes" },
      { id: "history", label: "History" },
      { id: "branches", label: "Branches" }
    ], r = k(o.initialTab ?? "remotes");
    return vt(() => o.initialTab, (u) => {
      u && (r.value = u);
    }), (u, c) => (a(), L(Ut, null, {
      header: h(() => [
        b(At, { title: "VERSION CONTROL" })
      ]),
      search: h(() => [
        b(Rl, {
          modelValue: r.value,
          "onUpdate:modelValue": c[0] || (c[0] = (d) => r.value = d),
          tabs: l
        }, null, 8, ["modelValue"])
      ]),
      content: h(() => [
        r.value === "history" ? (a(), L(k8, {
          key: 0,
          embedded: "",
          commits: e.commits,
          "current-ref": e.currentRef,
          onSelect: c[1] || (c[1] = (d) => n("select", d)),
          onCheckout: c[2] || (c[2] = (d) => n("checkout", d))
        }, null, 8, ["commits", "current-ref"])) : r.value === "branches" ? (a(), L(G8, {
          key: 1,
          embedded: "",
          branches: e.branches,
          current: e.current,
          onSwitch: c[3] || (c[3] = (d) => n("switch", d)),
          onCreate: c[4] || (c[4] = (d) => n("create", d)),
          onDelete: c[5] || (c[5] = (d) => n("delete", d))
        }, null, 8, ["branches", "current"])) : (a(), L(OI, {
          key: 2,
          embedded: "",
          onToast: c[6] || (c[6] = (d, v) => n("toast", d, v))
        }))
      ]),
      _: 1
    }));
  }
}), AI = { class: "text-viewer-wrapper" }, zI = ["disabled", "title"], FI = { class: "text-content" }, VI = /* @__PURE__ */ Ce({
  __name: "TextViewer",
  props: {
    content: {}
  },
  setup(e) {
    const t = e, o = k(null), n = k("idle");
    async function l() {
      if (t.content)
        try {
          await Tl(t.content), n.value = "copied", setTimeout(() => {
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
    return (c, d) => (a(), i("div", AI, [
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
        }, m(n.value === "copied" ? "Copied!" : "Copy"), 9, zI),
        s("pre", FI, m(e.content), 1)
      ], 544)
    ]));
  }
}), BI = /* @__PURE__ */ Ie(VI, [["__scopeId", "data-v-85a537ba"]]), WI = {
  key: 1,
  class: "manifest-viewer-shell"
}, GI = { class: "manifest-path" }, jI = /* @__PURE__ */ Ce({
  __name: "ManifestSection",
  props: {
    embedded: { type: Boolean }
  },
  setup(e) {
    const { getEnvironmentManifest: t } = rt(), o = k(!1), n = k(null), l = k(!1), r = k({
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
    return at(u), (c, d) => (a(), i(B, null, [
      b(Ut, null, Yt({
        content: h(() => [
          o.value ? (a(), L(Cs, {
            key: 0,
            message: "Loading manifest..."
          })) : n.value ? (a(), L(xs, {
            key: 1,
            message: n.value,
            retry: !0,
            onRetry: u
          }, null, 8, ["message"])) : (a(), i(B, { key: 2 }, [
            !r.value.exists || !r.value.content ? (a(), L(fs, {
              key: 0,
              icon: "📄",
              message: "No manifest content available"
            })) : (a(), i("div", WI, [
              b(BI, {
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
            b(At, {
              title: "MANIFEST (PYPROJECT.TOML)",
              "show-info": !0,
              onInfoClick: d[0] || (d[0] = (v) => l.value = !0)
            }, {
              actions: h(() => [
                b(Me, {
                  variant: "secondary",
                  size: "sm",
                  onClick: u,
                  disabled: o.value
                }, {
                  default: h(() => [
                    S(m(o.value ? "Loading..." : "Refresh"), 1)
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
      b(is, {
        show: l.value,
        title: "About Manifest View",
        onClose: d[2] || (d[2] = (v) => l.value = !1)
      }, {
        content: h(() => [
          d[3] || (d[3] = s("p", null, [
            S(" This view shows the live "),
            s("strong", null, "pyproject.toml"),
            S(" from the current environment's "),
            s("strong", null, ".cec"),
            S(" directory. ")
          ], -1)),
          d[4] || (d[4] = s("p", { style: { "margin-top": "var(--cg-space-2)" } }, " It is read-only and intended for quick inspection and debugging without leaving the ComfyGit panel. ", -1)),
          d[5] || (d[5] = s("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Path: ", -1)),
          s("div", GI, [
            s("code", null, m(r.value.path || "unknown"), 1)
          ]),
          d[6] || (d[6] = s("p", { style: { "margin-top": "var(--cg-space-2)" } }, null, -1))
        ]),
        actions: h(() => [
          b(Me, {
            variant: "primary",
            onClick: d[1] || (d[1] = (v) => l.value = !1)
          }, {
            default: h(() => [...d[7] || (d[7] = [
              S(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), HI = /* @__PURE__ */ Ie(jI, [["__scopeId", "data-v-814a8fdd"]]), qI = { class: "log-viewer-wrapper" }, KI = ["disabled", "title"], JI = /* @__PURE__ */ Ce({
  __name: "LogViewer",
  props: {
    logs: {},
    rawFormat: { type: Boolean }
  },
  setup(e) {
    const t = e, o = k(null), n = k("idle"), l = R(() => t.logs.map((v) => ({
      text: t.rawFormat || !v.timestamp ? v.message : `${v.timestamp} - ${v.name} - ${v.level} - ${v.func}:${v.line} - ${v.message}`,
      level: v.level
    })));
    async function r() {
      var f;
      await Rt();
      const v = (f = o.value) == null ? void 0 : f.closest(".panel-layout-content");
      v && (v.scrollTop = v.scrollHeight);
    }
    at(r), vt(() => t.logs, r);
    async function u() {
      if (l.value.length === 0) return;
      const v = l.value.map((f) => f.text).join(`
`);
      try {
        await Tl(v), n.value = "copied", setTimeout(() => {
          n.value = "idle";
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
    return (v, f) => (a(), i("div", qI, [
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
        }, m(n.value === "copied" ? "Copied!" : "Copy"), 9, KI),
        (a(!0), i(B, null, ye(l.value, (p, w) => (a(), i("div", {
          key: w,
          class: Be(`log-line log-level-${p.level.toLowerCase()}`)
        }, m(p.text), 3))), 128))
      ], 544)
    ]));
  }
}), bc = /* @__PURE__ */ Ie(JI, [["__scopeId", "data-v-5aaf1b88"]]), QI = /* @__PURE__ */ Ce({
  __name: "DebugEnvSection",
  props: {
    embedded: { type: Boolean }
  },
  setup(e) {
    const { getEnvironmentLogs: t, getStatus: o, getEnvironmentLogPath: n, openFile: l } = rt(), r = k([]), u = k(!1), c = k(null), d = k(!1), v = k("production"), f = k(null), p = k(!1);
    async function w() {
      u.value = !0, c.value = null;
      try {
        r.value = await t(void 0, 500);
        try {
          const C = await o();
          v.value = C.environment || "production";
        } catch {
        }
      } catch (C) {
        c.value = C instanceof Error ? C.message : "Failed to load environment logs";
      } finally {
        u.value = !1;
      }
    }
    async function g() {
      try {
        const C = await n();
        C.exists && (f.value = C.path);
      } catch {
      }
    }
    async function _() {
      if (f.value) {
        p.value = !0;
        try {
          await l(f.value);
        } catch (C) {
          console.error("Failed to open log file:", C);
        } finally {
          p.value = !1;
        }
      }
    }
    return at(() => {
      w(), g();
    }), (C, $) => (a(), i(B, null, [
      b(Ut, null, Yt({
        content: h(() => [
          u.value ? (a(), L(Cs, {
            key: 0,
            message: "Loading environment logs..."
          })) : c.value ? (a(), L(xs, {
            key: 1,
            message: c.value,
            retry: !0,
            onRetry: w
          }, null, 8, ["message"])) : (a(), i(B, { key: 2 }, [
            r.value.length === 0 ? (a(), L(fs, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (a(), L(bc, {
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
            b(At, {
              title: "DEBUG (ENVIRONMENT LOGS)",
              "show-info": !0,
              onInfoClick: $[0] || ($[0] = (x) => d.value = !0)
            }, {
              actions: h(() => [
                b(Me, {
                  variant: "secondary",
                  size: "sm",
                  onClick: _,
                  disabled: !f.value || p.value,
                  title: "Open log file in default editor"
                }, {
                  default: h(() => [
                    S(m(p.value ? "Opening..." : "Open Log File"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                b(Me, {
                  variant: "secondary",
                  size: "sm",
                  onClick: w,
                  disabled: u.value
                }, {
                  default: h(() => [
                    S(m(u.value ? "Loading..." : "Refresh"), 1)
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
      b(is, {
        show: d.value,
        title: "About Environment Logs",
        onClose: $[2] || ($[2] = (x) => d.value = !1)
      }, {
        content: h(() => [
          s("p", null, [
            $[3] || ($[3] = S(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            s("strong", null, m(v.value), 1),
            $[4] || ($[4] = S(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          $[5] || ($[5] = s("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            s("strong", null, "Log Levels:"),
            s("br"),
            s("strong", null, "ERROR:"),
            S(" Critical failures requiring attention"),
            s("br"),
            s("strong", null, "WARNING:"),
            S(" Potential issues or important notices"),
            s("br"),
            s("strong", null, "INFO:"),
            S(" General operational information"),
            s("br"),
            s("strong", null, "DEBUG:"),
            S(" Detailed debugging information ")
          ], -1))
        ]),
        actions: h(() => [
          b(Me, {
            variant: "primary",
            onClick: $[1] || ($[1] = (x) => d.value = !1)
          }, {
            default: h(() => [...$[6] || ($[6] = [
              S(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Ii = /* @__PURE__ */ Ce({
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
    } = rt(), u = e, c = k(u.initialTab ?? "workspace"), d = k([]), v = k(!1), f = k(null), p = k(!1), w = k(null), g = k(null), _ = k(!1), C = R(() => c.value === "workspace" ? w.value : g.value);
    async function $() {
      v.value = !0, f.value = null;
      try {
        c.value === "workspace" ? d.value = await t(void 0, 500) : d.value = await n(void 0, 500);
      } catch (M) {
        f.value = M instanceof Error ? M.message : `Failed to load ${c.value} logs`;
      } finally {
        v.value = !1;
      }
    }
    async function x() {
      try {
        const [M, P] = await Promise.all([
          o(),
          l()
        ]);
        M.exists && (w.value = M.path), P.exists && (g.value = P.path);
      } catch {
      }
    }
    async function I() {
      if (C.value) {
        _.value = !0;
        try {
          await r(C.value);
        } catch (M) {
          console.error("Failed to open log file:", M);
        } finally {
          _.value = !1;
        }
      }
    }
    return vt(c, () => {
      $();
    }), vt(() => u.initialTab, (M) => {
      M && (c.value = M);
    }), at(() => {
      $(), x();
    }), (M, P) => (a(), i(B, null, [
      b(Ut, null, Yt({
        content: h(() => [
          v.value ? (a(), L(Cs, {
            key: 0,
            message: `Loading ${c.value} logs...`
          }, null, 8, ["message"])) : f.value ? (a(), L(xs, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: $
          }, null, 8, ["message"])) : (a(), i(B, { key: 2 }, [
            d.value.length === 0 ? (a(), L(fs, {
              key: 0,
              icon: "📝",
              message: `No ${c.value} logs available`
            }, null, 8, ["message"])) : (a(), L(bc, {
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
            b(At, {
              title: "DEBUG (LOGS)",
              "show-info": !0,
              onInfoClick: P[0] || (P[0] = (O) => p.value = !0)
            }, {
              actions: h(() => [
                b(Me, {
                  variant: "secondary",
                  size: "sm",
                  onClick: I,
                  disabled: !C.value || _.value,
                  title: "Open log file in default editor"
                }, {
                  default: h(() => [
                    S(m(_.value ? "Opening..." : "Open Log File"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                b(Me, {
                  variant: "secondary",
                  size: "sm",
                  onClick: $,
                  disabled: v.value
                }, {
                  default: h(() => [
                    S(m(v.value ? "Loading..." : "Refresh"), 1)
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
            b(Rl, {
              modelValue: c.value,
              "onUpdate:modelValue": P[1] || (P[1] = (O) => c.value = O),
              tabs: [
                { id: "workspace", label: "Workspace" },
                { id: "orchestrator", label: "Orchestrator" }
              ]
            }, null, 8, ["modelValue"])
          ]),
          key: "1"
        }
      ]), 1024),
      b(is, {
        show: p.value,
        title: "About Logs",
        onClose: P[3] || (P[3] = (O) => p.value = !1)
      }, {
        content: h(() => [...P[4] || (P[4] = [
          s("p", null, [
            s("strong", null, "Workspace Logs:"),
            S(" System-level events for the entire ComfyGit workspace, including operations that affect multiple environments. ")
          ], -1),
          s("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            s("strong", null, "Orchestrator Logs:"),
            S(" Process management events including ComfyUI startup, restarts, environment switches, and any errors during handoff. ")
          ], -1),
          s("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            s("strong", null, "Log Levels:"),
            s("br"),
            s("strong", null, "ERROR:"),
            S(" Critical failures requiring attention"),
            s("br"),
            s("strong", null, "WARNING:"),
            S(" Potential issues or deprecated features"),
            s("br"),
            s("strong", null, "INFO:"),
            S(" General operational information"),
            s("br"),
            s("strong", null, "DEBUG:"),
            S(" Detailed debugging information ")
          ], -1)
        ])]),
        actions: h(() => [
          b(Me, {
            variant: "primary",
            onClick: P[2] || (P[2] = (O) => p.value = !1)
          }, {
            default: h(() => [...P[5] || (P[5] = [
              S(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), YI = /* @__PURE__ */ Ce({
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
    return vt(() => t.initialTab, (d) => {
      d && (n.value = d, d !== "manifest" && (l.value = d));
    }), vt(l, (d) => {
      n.value !== "manifest" && (n.value = d);
    }), (d, v) => (a(), i(B, null, [
      b(Ut, null, Yt({
        header: h(() => [
          b(At, {
            title: u.value,
            "show-info": !0,
            onInfoClick: v[0] || (v[0] = (f) => r.value = !0)
          }, null, 8, ["title"])
        ]),
        content: h(() => [
          n.value === "manifest" ? (a(), L(HI, {
            key: 0,
            embedded: ""
          })) : l.value === "env" ? (a(), L(QI, {
            key: 1,
            embedded: ""
          })) : l.value === "workspace" ? (a(), L(Ii, {
            key: 2,
            embedded: "",
            "initial-tab": "workspace"
          })) : (a(), L(Ii, {
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
            b(Rl, {
              modelValue: l.value,
              "onUpdate:modelValue": v[1] || (v[1] = (f) => l.value = f),
              tabs: o
            }, null, 8, ["modelValue"])
          ]),
          key: "0"
        } : void 0
      ]), 1024),
      b(is, {
        show: r.value,
        title: c.value,
        "max-width": "520px",
        onClose: v[3] || (v[3] = (f) => r.value = !1)
      }, {
        content: h(() => [
          n.value === "manifest" ? (a(), i(B, { key: 0 }, [
            v[4] || (v[4] = s("p", null, [
              s("strong", null, "Manifest"),
              S(" shows the live "),
              s("strong", null, "pyproject.toml"),
              S(" from the current environment's "),
              s("strong", null, ".cec"),
              S(" directory. ")
            ], -1)),
            v[5] || (v[5] = s("p", null, " Use it to inspect the environment state ComfyGit is tracking, including workflows, models, nodes, and workflow execution contracts. ", -1)),
            v[6] || (v[6] = s("p", null, " The manifest is read-only here. Change environment state through the manager actions or CLI, then commit the resulting manifest changes. ", -1))
          ], 64)) : (a(), i(B, { key: 1 }, [
            v[7] || (v[7] = s("p", null, [
              s("strong", null, "Logging"),
              S(" groups read-only logs for the current environment, workspace, and orchestrator. ")
            ], -1)),
            v[8] || (v[8] = s("p", null, [
              s("strong", null, "Environment"),
              S(" logs help debug workflow execution, model resolution, node installation, and other environment-local behavior. ")
            ], -1)),
            v[9] || (v[9] = s("p", null, [
              s("strong", null, "Workspace"),
              S(" logs show workspace-wide events that affect more than one environment. ")
            ], -1)),
            v[10] || (v[10] = s("p", null, [
              s("strong", null, "Orchestrator"),
              S(" logs show supervisor and handoff behavior for environment creation, switching, restarts, and process management. ")
            ], -1))
          ], 64))
        ]),
        actions: h(() => [
          b(Me, {
            variant: "primary",
            size: "sm",
            onClick: v[2] || (v[2] = (f) => r.value = !1)
          }, {
            default: h(() => [...v[11] || (v[11] = [
              S(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show", "title"])
    ], 64));
  }
}), XI = { class: "header-info" }, ZI = { class: "commit-hash" }, e6 = {
  key: 0,
  class: "commit-refs"
}, t6 = { class: "commit-message" }, s6 = { class: "commit-date" }, o6 = {
  key: 0,
  class: "loading"
}, n6 = {
  key: 1,
  class: "changes-section"
}, a6 = { class: "stats-row" }, l6 = { class: "stat" }, i6 = { class: "stat insertions" }, r6 = { class: "stat deletions" }, c6 = {
  key: 0,
  class: "change-group"
}, u6 = {
  key: 1,
  class: "change-group"
}, d6 = {
  key: 0,
  class: "version"
}, m6 = {
  key: 2,
  class: "change-group"
}, f6 = { class: "change-item" }, v6 = /* @__PURE__ */ Ce({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(e) {
    const t = e, { getCommitDetail: o } = rt(), n = k(null), l = k(!0), r = R(() => {
      if (!n.value) return !1;
      const c = n.value.changes.workflows;
      return c.added.length > 0 || c.modified.length > 0 || c.deleted.length > 0;
    }), u = R(() => {
      if (!n.value) return !1;
      const c = n.value.changes.nodes;
      return c.added.length > 0 || c.removed.length > 0;
    });
    return at(async () => {
      try {
        n.value = await o(t.commit.hash);
      } finally {
        l.value = !1;
      }
    }), (c, d) => (a(), L($t, {
      size: "md",
      "show-close-button": !1,
      onClose: d[3] || (d[3] = (v) => c.$emit("close"))
    }, {
      header: h(() => {
        var v, f, p, w;
        return [
          s("div", XI, [
            d[4] || (d[4] = s("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            s("span", ZI, m(((v = n.value) == null ? void 0 : v.short_hash) || e.commit.short_hash || ((f = e.commit.hash) == null ? void 0 : f.slice(0, 7))), 1),
            (w = (p = n.value) == null ? void 0 : p.refs) != null && w.length ? (a(), i("span", e6, [
              (a(!0), i(B, null, ye(n.value.refs, (g) => (a(), i("span", {
                key: g,
                class: "ref-badge"
              }, m(g), 1))), 128))
            ])) : y("", !0)
          ]),
          b(Oe, {
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
        var v, f;
        return [
          s("div", t6, m(((v = n.value) == null ? void 0 : v.message) || e.commit.message), 1),
          s("div", s6, m(((f = n.value) == null ? void 0 : f.date_relative) || e.commit.date_relative || e.commit.relative_date), 1),
          l.value ? (a(), i("div", o6, "Loading details...")) : n.value ? (a(), i("div", n6, [
            s("div", a6, [
              s("span", l6, m(n.value.stats.files_changed) + " files", 1),
              s("span", i6, "+" + m(n.value.stats.insertions), 1),
              s("span", r6, "-" + m(n.value.stats.deletions), 1)
            ]),
            r.value ? (a(), i("div", c6, [
              b(ao, { variant: "section" }, {
                default: h(() => [...d[6] || (d[6] = [
                  S("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (a(!0), i(B, null, ye(n.value.changes.workflows.added, (p) => (a(), i("div", {
                key: "add-" + p,
                class: "change-item added"
              }, [
                d[7] || (d[7] = s("span", { class: "change-icon" }, "+", -1)),
                s("span", null, m(p), 1)
              ]))), 128)),
              (a(!0), i(B, null, ye(n.value.changes.workflows.modified, (p) => (a(), i("div", {
                key: "mod-" + p,
                class: "change-item modified"
              }, [
                d[8] || (d[8] = s("span", { class: "change-icon" }, "~", -1)),
                s("span", null, m(p), 1)
              ]))), 128)),
              (a(!0), i(B, null, ye(n.value.changes.workflows.deleted, (p) => (a(), i("div", {
                key: "del-" + p,
                class: "change-item deleted"
              }, [
                d[9] || (d[9] = s("span", { class: "change-icon" }, "-", -1)),
                s("span", null, m(p), 1)
              ]))), 128))
            ])) : y("", !0),
            u.value ? (a(), i("div", u6, [
              b(ao, { variant: "section" }, {
                default: h(() => [...d[10] || (d[10] = [
                  S("NODES", -1)
                ])]),
                _: 1
              }),
              (a(!0), i(B, null, ye(n.value.changes.nodes.added, (p) => (a(), i("div", {
                key: "add-" + p.name,
                class: "change-item added"
              }, [
                d[11] || (d[11] = s("span", { class: "change-icon" }, "+", -1)),
                s("span", null, m(p.name), 1),
                p.version ? (a(), i("span", d6, "(" + m(p.version) + ")", 1)) : y("", !0)
              ]))), 128)),
              (a(!0), i(B, null, ye(n.value.changes.nodes.removed, (p) => (a(), i("div", {
                key: "rem-" + p.name,
                class: "change-item deleted"
              }, [
                d[12] || (d[12] = s("span", { class: "change-icon" }, "-", -1)),
                s("span", null, m(p.name), 1)
              ]))), 128))
            ])) : y("", !0),
            n.value.changes.models.resolved > 0 ? (a(), i("div", m6, [
              b(ao, { variant: "section" }, {
                default: h(() => [...d[13] || (d[13] = [
                  S("MODELS", -1)
                ])]),
                _: 1
              }),
              s("div", f6, [
                d[14] || (d[14] = s("span", { class: "change-icon" }, "●", -1)),
                s("span", null, m(n.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : y("", !0)
          ])) : y("", !0)
        ];
      }),
      footer: h(() => [
        b(Oe, {
          variant: "secondary",
          onClick: d[1] || (d[1] = (v) => c.$emit("createBranch", e.commit))
        }, {
          default: h(() => [...d[15] || (d[15] = [
            S(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        b(Oe, {
          variant: "primary",
          onClick: d[2] || (d[2] = (v) => c.$emit("checkout", e.commit))
        }, {
          default: h(() => [...d[16] || (d[16] = [
            S(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), p6 = /* @__PURE__ */ Ie(v6, [["__scopeId", "data-v-d256ff6d"]]), g6 = { class: "popover-header" }, h6 = { class: "popover-body" }, y6 = {
  key: 0,
  class: "changes-summary"
}, w6 = {
  key: 0,
  class: "change-item"
}, _6 = {
  key: 1,
  class: "change-item"
}, k6 = {
  key: 2,
  class: "change-item"
}, b6 = {
  key: 3,
  class: "change-item"
}, $6 = {
  key: 4,
  class: "change-item"
}, C6 = {
  key: 5,
  class: "change-item"
}, x6 = {
  key: 1,
  class: "no-changes"
}, S6 = {
  key: 2,
  class: "loading"
}, I6 = {
  key: 3,
  class: "issues-error"
}, E6 = { class: "error-header" }, T6 = { class: "error-title" }, M6 = { class: "issues-list" }, P6 = { class: "workflow-state" }, R6 = { class: "message-section" }, L6 = { class: "popover-footer" }, D6 = {
  key: 1,
  class: "commit-popover"
}, N6 = { class: "popover-header" }, O6 = { class: "popover-body" }, U6 = {
  key: 0,
  class: "changes-summary"
}, A6 = {
  key: 0,
  class: "change-item"
}, z6 = {
  key: 1,
  class: "change-item"
}, F6 = {
  key: 2,
  class: "change-item"
}, V6 = {
  key: 3,
  class: "change-item"
}, B6 = {
  key: 4,
  class: "change-item"
}, W6 = {
  key: 5,
  class: "change-item"
}, G6 = {
  key: 1,
  class: "no-changes"
}, j6 = {
  key: 2,
  class: "loading"
}, H6 = {
  key: 3,
  class: "issues-error"
}, q6 = { class: "error-header" }, K6 = { class: "error-title" }, J6 = { class: "issues-list" }, Q6 = { class: "workflow-state" }, Y6 = { class: "message-section" }, X6 = { class: "popover-footer" }, Z6 = /* @__PURE__ */ Ce({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(e, { emit: t }) {
    const o = e, n = t, { commit: l } = rt(), r = k(""), u = k(!1), c = k(!1), d = R(() => {
      if (!o.status) return !1;
      const _ = o.status.workflows;
      return _.new.length > 0 || _.modified.length > 0 || _.deleted.length > 0 || o.status.has_changes;
    }), v = R(() => {
      if (!o.status) return !1;
      const _ = o.status.workflows, C = o.status.git_changes;
      return _.new.length > 0 || _.modified.length > 0 || _.deleted.length > 0 || C.nodes_added.length > 0 || C.nodes_removed.length > 0;
    }), f = R(() => {
      var _;
      return (_ = o.status) != null && _.workflows.analyzed ? o.status.workflows.analyzed.filter((C) => C.has_issues) : [];
    }), p = R(() => f.value.length > 0), w = R(() => p.value && !c.value);
    async function g() {
      var _, C, $, x;
      if (!(p.value && !c.value) && !(!d.value || !r.value.trim() || u.value)) {
        u.value = !0;
        try {
          const I = await l(r.value.trim(), c.value);
          if (I.status === "success") {
            const M = `Committed: ${((_ = I.summary) == null ? void 0 : _.new) || 0} new, ${((C = I.summary) == null ? void 0 : C.modified) || 0} modified, ${(($ = I.summary) == null ? void 0 : $.deleted) || 0} deleted`;
            n("committed", { success: !0, message: M });
          } else if (I.status === "no_changes")
            n("committed", { success: !1, message: "No changes to commit" });
          else if (I.status === "blocked") {
            const M = ((x = I.issues) == null ? void 0 : x.map((P) => `${P.name}: ${P.issue}`).join("; ")) || "Unknown issues";
            n("committed", { success: !1, message: `Commit blocked - ${M}. Enable "Allow issues" to force.` });
          } else
            n("committed", { success: !1, message: I.message || "Commit failed" });
        } catch (I) {
          n("committed", { success: !1, message: I instanceof Error ? I.message : "Commit failed" });
        } finally {
          u.value = !1;
        }
      }
    }
    return (_, C) => e.asModal ? (a(), L(Jt, {
      key: 0,
      to: "body"
    }, [
      s("div", {
        class: "modal-overlay",
        onClick: C[5] || (C[5] = ($) => n("close"))
      }, [
        s("div", {
          class: "commit-popover modal",
          onClick: C[4] || (C[4] = pt(() => {
          }, ["stop"]))
        }, [
          s("div", g6, [
            C[11] || (C[11] = s("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            s("button", {
              class: "close-btn",
              onClick: C[0] || (C[0] = ($) => n("close"))
            }, [...C[10] || (C[10] = [
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
          s("div", h6, [
            e.status && d.value ? (a(), i("div", y6, [
              e.status.workflows.new.length ? (a(), i("div", w6, [
                C[12] || (C[12] = s("span", { class: "change-icon new" }, "+", -1)),
                s("span", null, m(e.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : y("", !0),
              e.status.workflows.modified.length ? (a(), i("div", _6, [
                C[13] || (C[13] = s("span", { class: "change-icon modified" }, "~", -1)),
                s("span", null, m(e.status.workflows.modified.length) + " modified", 1)
              ])) : y("", !0),
              e.status.workflows.deleted.length ? (a(), i("div", k6, [
                C[14] || (C[14] = s("span", { class: "change-icon deleted" }, "-", -1)),
                s("span", null, m(e.status.workflows.deleted.length) + " deleted", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_added.length ? (a(), i("div", b6, [
                C[15] || (C[15] = s("span", { class: "change-icon new" }, "+", -1)),
                s("span", null, m(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_removed.length ? (a(), i("div", $6, [
                C[16] || (C[16] = s("span", { class: "change-icon deleted" }, "-", -1)),
                s("span", null, m(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : y("", !0),
              v.value ? y("", !0) : (a(), i("div", C6, [...C[17] || (C[17] = [
                s("span", { class: "change-icon modified" }, "~", -1),
                s("span", null, "Configuration updated", -1)
              ])]))
            ])) : e.status ? (a(), i("div", x6, " No changes to commit ")) : (a(), i("div", S6, " Loading... ")),
            p.value ? (a(), i("div", I6, [
              s("div", E6, [
                C[18] || (C[18] = s("span", { class: "error-icon" }, "⚠", -1)),
                s("span", T6, m(f.value.length) + " workflow(s) have issues", 1)
              ]),
              s("div", M6, [
                (a(!0), i(B, null, ye(f.value, ($) => (a(), i("div", {
                  key: $.name,
                  class: "issue-item"
                }, [
                  s("strong", null, m($.name), 1),
                  s("span", P6, "(" + m($.sync_state) + ")", 1),
                  S(": " + m($.issue_summary), 1)
                ]))), 128))
              ]),
              b(Yn, {
                modelValue: c.value,
                "onUpdate:modelValue": C[1] || (C[1] = ($) => c.value = $),
                class: "allow-issues-toggle"
              }, {
                default: h(() => [...C[19] || (C[19] = [
                  S(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : y("", !0),
            s("div", R6, [
              b(xo, {
                modelValue: r.value,
                "onUpdate:modelValue": C[2] || (C[2] = ($) => r.value = $),
                placeholder: w.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
                disabled: !d.value || u.value || w.value,
                rows: 3,
                "submit-on-enter": !0,
                onCtrlEnter: g,
                onSubmit: g
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ])
          ]),
          s("div", L6, [
            b(Oe, {
              variant: "secondary",
              onClick: C[3] || (C[3] = ($) => n("close"))
            }, {
              default: h(() => [...C[20] || (C[20] = [
                S(" Cancel ", -1)
              ])]),
              _: 1
            }),
            b(Oe, {
              variant: c.value ? "danger" : "primary",
              disabled: !d.value || !r.value.trim() || u.value || w.value,
              loading: u.value,
              onClick: g
            }, {
              default: h(() => [
                S(m(u.value ? "Committing..." : c.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (a(), i("div", D6, [
      s("div", N6, [
        C[22] || (C[22] = s("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        s("button", {
          class: "close-btn",
          onClick: C[6] || (C[6] = ($) => n("close"))
        }, [...C[21] || (C[21] = [
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
      s("div", O6, [
        e.status && d.value ? (a(), i("div", U6, [
          e.status.workflows.new.length ? (a(), i("div", A6, [
            C[23] || (C[23] = s("span", { class: "change-icon new" }, "+", -1)),
            s("span", null, m(e.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : y("", !0),
          e.status.workflows.modified.length ? (a(), i("div", z6, [
            C[24] || (C[24] = s("span", { class: "change-icon modified" }, "~", -1)),
            s("span", null, m(e.status.workflows.modified.length) + " modified", 1)
          ])) : y("", !0),
          e.status.workflows.deleted.length ? (a(), i("div", F6, [
            C[25] || (C[25] = s("span", { class: "change-icon deleted" }, "-", -1)),
            s("span", null, m(e.status.workflows.deleted.length) + " deleted", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_added.length ? (a(), i("div", V6, [
            C[26] || (C[26] = s("span", { class: "change-icon new" }, "+", -1)),
            s("span", null, m(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_removed.length ? (a(), i("div", B6, [
            C[27] || (C[27] = s("span", { class: "change-icon deleted" }, "-", -1)),
            s("span", null, m(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : y("", !0),
          v.value ? y("", !0) : (a(), i("div", W6, [...C[28] || (C[28] = [
            s("span", { class: "change-icon modified" }, "~", -1),
            s("span", null, "Configuration updated", -1)
          ])]))
        ])) : e.status ? (a(), i("div", G6, " No changes to commit ")) : (a(), i("div", j6, " Loading... ")),
        p.value ? (a(), i("div", H6, [
          s("div", q6, [
            C[29] || (C[29] = s("span", { class: "error-icon" }, "⚠", -1)),
            s("span", K6, m(f.value.length) + " workflow(s) have issues", 1)
          ]),
          s("div", J6, [
            (a(!0), i(B, null, ye(f.value, ($) => (a(), i("div", {
              key: $.name,
              class: "issue-item"
            }, [
              s("strong", null, m($.name), 1),
              s("span", Q6, "(" + m($.sync_state) + ")", 1),
              S(": " + m($.issue_summary), 1)
            ]))), 128))
          ]),
          b(Yn, {
            modelValue: c.value,
            "onUpdate:modelValue": C[7] || (C[7] = ($) => c.value = $),
            class: "allow-issues-toggle"
          }, {
            default: h(() => [...C[30] || (C[30] = [
              S(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : y("", !0),
        s("div", Y6, [
          b(xo, {
            modelValue: r.value,
            "onUpdate:modelValue": C[8] || (C[8] = ($) => r.value = $),
            placeholder: w.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
            disabled: !d.value || u.value || w.value,
            rows: 3,
            "submit-on-enter": !0,
            onCtrlEnter: g,
            onSubmit: g
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ])
      ]),
      s("div", X6, [
        b(Oe, {
          variant: "secondary",
          onClick: C[9] || (C[9] = ($) => n("close"))
        }, {
          default: h(() => [...C[31] || (C[31] = [
            S(" Cancel ", -1)
          ])]),
          _: 1
        }),
        b(Oe, {
          variant: c.value ? "danger" : "primary",
          disabled: !d.value || !r.value.trim() || u.value || w.value,
          loading: u.value,
          onClick: g
        }, {
          default: h(() => [
            S(m(u.value ? "Committing..." : c.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), $c = /* @__PURE__ */ Ie(Z6, [["__scopeId", "data-v-5f897631"]]), eE = { class: "switch-body" }, tE = { class: "switch-message" }, sE = { class: "switch-details" }, oE = /* @__PURE__ */ Ce({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (t, o) => e.show ? (a(), L($t, {
      key: 0,
      title: "Confirm Environment Switch",
      size: "md",
      "overlay-z-index": 10005,
      onClose: o[2] || (o[2] = (n) => t.$emit("close"))
    }, {
      body: h(() => [
        s("div", eE, [
          s("p", tE, [
            o[3] || (o[3] = S(" Switch from ", -1)),
            s("strong", null, m(e.fromEnvironment), 1),
            o[4] || (o[4] = S(" to ", -1)),
            s("strong", null, m(e.toEnvironment), 1),
            o[5] || (o[5] = S("? ", -1))
          ]),
          o[6] || (o[6] = s("div", { class: "warning-box" }, [
            s("span", { class: "warning-icon" }, "⚠"),
            s("span", null, "This will restart ComfyUI")
          ], -1)),
          s("p", sE, ' Your current work will be preserved. You can switch back to "' + m(e.fromEnvironment) + '" anytime. ', 1),
          o[7] || (o[7] = s("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
        ])
      ]),
      footer: h(() => [
        b(Me, {
          variant: "secondary",
          onClick: o[0] || (o[0] = (n) => t.$emit("close"))
        }, {
          default: h(() => [...o[8] || (o[8] = [
            S(" Cancel ", -1)
          ])]),
          _: 1
        }),
        b(Me, {
          variant: "primary",
          onClick: o[1] || (o[1] = (n) => t.$emit("confirm"))
        }, {
          default: h(() => [...o[9] || (o[9] = [
            S(" Switch ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    })) : y("", !0);
  }
}), nE = /* @__PURE__ */ Ie(oE, [["__scopeId", "data-v-f6d223e6"]]), aE = {
  key: 0,
  class: "modal-overlay"
}, lE = { class: "modal-content" }, iE = { class: "modal-body" }, rE = { class: "progress-info" }, cE = { class: "progress-percentage" }, uE = { class: "progress-state" }, dE = { class: "switch-steps" }, mE = { class: "step-icon" }, fE = { class: "step-label" }, vE = /* @__PURE__ */ Ce({
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
        let v = "pending", f = "○";
        return d < u ? (v = "completed", f = "✓") : d === u && (v = "active", f = "⟳"), {
          ...c,
          status: v,
          icon: f
        };
      });
    });
    return (r, u) => (a(), L(Jt, { to: "body" }, [
      e.show ? (a(), i("div", aE, [
        s("div", lE, [
          u[1] || (u[1] = s("div", { class: "modal-header" }, [
            s("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          s("div", iE, [
            b(gc, {
              progress: e.progress,
              variant: n.value
            }, null, 8, ["progress", "variant"]),
            s("div", rE, [
              s("div", cE, m(e.progress) + "%", 1),
              s("div", uE, m(o.value), 1)
            ]),
            s("div", dE, [
              (a(!0), i(B, null, ye(l.value, (c) => (a(), i("div", {
                key: c.state,
                class: Be(["switch-step", c.status])
              }, [
                s("span", mE, m(c.icon), 1),
                s("span", fE, m(c.label), 1)
              ], 2))), 128))
            ]),
            u[0] || (u[0] = s("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : y("", !0)
    ]));
  }
}), pE = /* @__PURE__ */ Ie(vE, [["__scopeId", "data-v-768a5078"]]), gE = { class: "modal-header" }, hE = { class: "modal-body" }, yE = {
  key: 0,
  class: "node-section"
}, wE = { class: "node-list" }, _E = {
  key: 1,
  class: "node-section"
}, kE = { class: "node-list" }, bE = { class: "modal-actions" }, $E = /* @__PURE__ */ Ce({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (t, o) => (a(), L(Jt, { to: "body" }, [
      e.show ? (a(), i("div", {
        key: 0,
        class: "modal-overlay",
        onClick: o[4] || (o[4] = (n) => t.$emit("close"))
      }, [
        s("div", {
          class: "modal-content",
          onClick: o[3] || (o[3] = pt(() => {
          }, ["stop"]))
        }, [
          s("div", gE, [
            o[5] || (o[5] = s("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            s("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (n) => t.$emit("close"))
            }, "✕")
          ]),
          s("div", hE, [
            o[8] || (o[8] = s("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            e.mismatchDetails.missing_nodes.length ? (a(), i("div", yE, [
              o[6] || (o[6] = s("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              s("div", wE, [
                (a(!0), i(B, null, ye(e.mismatchDetails.missing_nodes, (n) => (a(), i("div", {
                  key: n,
                  class: "node-item add"
                }, " + " + m(n), 1))), 128))
              ])
            ])) : y("", !0),
            e.mismatchDetails.extra_nodes.length ? (a(), i("div", _E, [
              o[7] || (o[7] = s("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              s("div", kE, [
                (a(!0), i(B, null, ye(e.mismatchDetails.extra_nodes, (n) => (a(), i("div", {
                  key: n,
                  class: "node-item remove"
                }, " - " + m(n), 1))), 128))
              ])
            ])) : y("", !0),
            o[9] || (o[9] = s("div", { class: "warning-box" }, [
              s("span", { class: "warning-icon" }, "⚠"),
              s("span", null, "This may take several minutes")
            ], -1))
          ]),
          s("div", bE, [
            b(Me, {
              variant: "secondary",
              onClick: o[1] || (o[1] = (n) => t.$emit("close"))
            }, {
              default: h(() => [...o[10] || (o[10] = [
                S(" Cancel ", -1)
              ])]),
              _: 1
            }),
            b(Me, {
              variant: "primary",
              onClick: o[2] || (o[2] = (n) => t.$emit("confirm"))
            }, {
              default: h(() => [...o[11] || (o[11] = [
                S(" Sync Now ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : y("", !0)
    ]));
  }
}), CE = /* @__PURE__ */ Ie($E, [["__scopeId", "data-v-7cad7518"]]), xE = [
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
], Tn = "v0.0.24", SE = "Akatz", IE = { class: "social-buttons" }, EE = ["title", "aria-label", "onClick"], TE = {
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, ME = ["d"], PE = ["title", "aria-label", "onClick"], RE = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, LE = ["d"], DE = /* @__PURE__ */ Ce({
  __name: "SocialButtons",
  setup(e) {
    function t(o) {
      window.open(o, "_blank", "noopener,noreferrer");
    }
    return (o, n) => (a(), i("div", IE, [
      (a(!0), i(B, null, ye(st(xE), (l) => (a(), i(B, {
        key: l.id
      }, [
        l.label ? (a(), i("button", {
          key: 0,
          class: "icon-btn sponsor-btn",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (r) => t(l.url)
        }, [
          S(m(l.label) + " ", 1),
          (a(), i("svg", TE, [
            s("path", {
              d: l.iconPath
            }, null, 8, ME)
          ]))
        ], 8, EE)) : (a(), i("button", {
          key: 1,
          class: "icon-btn social-link",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (r) => t(l.url)
        }, [
          (a(), i("svg", RE, [
            s("path", {
              d: l.iconPath
            }, null, 8, LE)
          ]))
        ], 8, PE))
      ], 64))), 128))
    ]));
  }
}), Cc = /* @__PURE__ */ Ie(DE, [["__scopeId", "data-v-4f846342"]]), NE = { class: "footer-info" }, OE = ["title"], UE = {
  key: 0,
  class: "dev-badge"
}, AE = { class: "made-by" }, zE = /* @__PURE__ */ Ce({
  __name: "FooterInfo",
  setup(e) {
    const { getConfig: t } = rt(), o = k(null), n = k(null), l = k(null), r = R(() => o.value === "development"), u = R(() => {
      var d;
      if (!r.value) return Tn;
      const c = [n.value, (d = l.value) == null ? void 0 : d.slice(0, 7)].filter(Boolean).join(" @ ");
      return c ? `${Tn} (${c})` : `${Tn} (development)`;
    });
    return at(async () => {
      try {
        const c = await t();
        o.value = c.manager_source ?? null, n.value = c.manager_branch ?? null, l.value = c.manager_commit ?? null;
      } catch {
        o.value = null;
      }
    }), (c, d) => (a(), i("div", NE, [
      s("span", {
        class: "version",
        title: u.value
      }, [
        S(m(st(Tn)) + " ", 1),
        r.value ? (a(), i("span", UE, "dev")) : y("", !0)
      ], 8, OE),
      s("span", AE, [
        d[0] || (d[0] = S(" made with ", -1)),
        d[1] || (d[1] = s("svg", {
          class: "heart-icon",
          width: "10",
          height: "10",
          viewBox: "0 0 16 16",
          fill: "currentColor"
        }, [
          s("path", { d: "M8 14s-5.5-3.5-5.5-7A3.5 3.5 0 0 1 6 3.5c1.1 0 2 .5 2 .5s.9-.5 2-.5a3.5 3.5 0 0 1 3.5 3.5c0 3.5-5.5 7-5.5 7z" })
        ], -1)),
        S(" by " + m(st(SE)), 1)
      ])
    ]));
  }
}), xc = /* @__PURE__ */ Ie(zE, [["__scopeId", "data-v-4fa265b3"]]), FE = /* @__PURE__ */ Ce({
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
    return (r, u) => (a(), L($t, {
      title: "WORKSPACE SETTINGS",
      size: "lg",
      "show-close-button": !0,
      onClose: u[1] || (u[1] = (c) => r.$emit("close"))
    }, {
      body: h(() => [
        b(mc, {
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
              S(" Save Changes ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          b(Oe, {
            variant: "secondary",
            onClick: u[0] || (u[0] = (d) => r.$emit("close"))
          }, {
            default: h(() => [...u[3] || (u[3] = [
              S(" Close ", -1)
            ])]),
            _: 1
          })
        ];
      }),
      _: 1
    }));
  }
}), VE = /* @__PURE__ */ Ie(FE, [["__scopeId", "data-v-fac00ae7"]]), BE = { class: "header-actions" }, WE = {
  key: 0,
  class: "wizard-step"
}, GE = { class: "form-field" }, jE = ["placeholder"], HE = {
  key: 0,
  class: "form-error"
}, qE = { class: "form-field form-field--checkbox" }, KE = { class: "form-checkbox" }, JE = {
  key: 0,
  class: "form-field"
}, QE = ["placeholder"], YE = {
  key: 0,
  class: "form-info"
}, XE = {
  key: 1,
  class: "form-suggestion"
}, ZE = {
  key: 2,
  class: "form-error"
}, eT = {
  key: 3,
  class: "form-info"
}, tT = {
  key: 1,
  class: "wizard-step"
}, sT = {
  key: 0,
  class: "progress-check-loading"
}, oT = {
  key: 0,
  class: "cli-warning"
}, nT = { class: "cli-warning-header" }, aT = {
  key: 1,
  class: "env-landing"
}, lT = { class: "env-list" }, iT = ["value"], rT = { class: "env-name" }, cT = {
  key: 2,
  class: "env-create"
}, uT = { class: "form-field" }, dT = { class: "form-field" }, mT = ["value"], fT = { class: "form-field" }, vT = ["disabled"], pT = ["value"], gT = { class: "form-field" }, hT = ["value"], yT = { class: "form-field form-field--checkbox" }, wT = { class: "form-checkbox" }, _T = {
  key: 0,
  class: "form-error"
}, kT = {
  key: 1,
  class: "env-creating"
}, bT = { class: "creating-intro" }, $T = {
  key: 3,
  class: "env-import"
}, CT = { class: "wizard-footer" }, xT = { class: "wizard-footer-actions" }, po = 10, ST = 600 * 1e3, Ei = 1800 * 1e3, IT = /* @__PURE__ */ Ce({
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
      getImportProgress: v,
      getComfyUIReleases: f
    } = rt(), p = k(o.initialStep || 1), w = k(null), g = k("landing"), _ = k(!1), C = k(!1), $ = k(!1), x = k(!1), I = k(null), M = k(o.initialStep === 2), P = k(o.defaultPath), O = k(!!o.detectedModelsDir), F = k(o.detectedModelsDir || ""), W = k(null), D = k(null), K = k(null), ue = k(null), se = k("my-new-env"), Q = k(vc), we = k("latest"), te = k(pc), H = k(!0), q = k(null), _e = k(null), ee = k([{ tag_name: "latest", name: "Latest", published_at: "" }]), me = k(!1), z = k(!1), ae = k(!1), Se = k({ progress: 0, message: "" }), pe = k({ progress: 0, message: "" }), Ne = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], ze = k(0), Ae = k(null), re = k(0), oe = k(null), Le = R(() => {
      var De, qe;
      const ke = (De = P.value) == null ? void 0 : De.trim(), X = !W.value, Fe = !O.value || !D.value && ((qe = F.value) == null ? void 0 : qe.trim());
      return ke && X && Fe;
    }), fe = R(() => {
      var ke;
      return (ke = se.value) == null ? void 0 : ke.trim();
    }), le = R(() => !!(p.value === 2 || _e.value || o.setupState === "empty_workspace" || o.setupState === "unmanaged")), E = R(() => _e.value || o.workspacePath || null);
    async function A() {
      var ke;
      if (W.value = null, !!((ke = P.value) != null && ke.trim()))
        try {
          const X = await u({ path: P.value, type: "workspace" });
          X.valid || (W.value = X.error || "Invalid path");
        } catch (X) {
          W.value = X instanceof Error ? X.message : "Validation failed";
        }
    }
    async function ce() {
      var ke;
      if (D.value = null, K.value = null, ue.value = null, !!((ke = F.value) != null && ke.trim()))
        try {
          const X = await u({ path: F.value, type: "models" });
          if (X.valid)
            ue.value = X.model_count ?? null;
          else if (D.value = X.error || "Invalid path", X.suggestion) {
            K.value = X.suggestion, F.value = X.suggestion, D.value = null;
            const Fe = await u({ path: X.suggestion, type: "models" });
            Fe.valid && (ue.value = Fe.model_count ?? null);
          }
        } catch (X) {
          D.value = X instanceof Error ? X.message : "Validation failed";
        }
    }
    async function $e() {
      var ke, X, Fe, De, qe;
      if (W.value = null, D.value = null, await A(), (ke = W.value) != null && ke.includes("already exists")) {
        W.value = null, _e.value = ((X = P.value) == null ? void 0 : X.trim()) || o.defaultPath, p.value = 2, xe();
        return;
      }
      if (!W.value && !(O.value && ((Fe = F.value) != null && Fe.trim()) && (await ce(), D.value))) {
        z.value = !0;
        try {
          await l({
            workspace_path: ((De = P.value) == null ? void 0 : De.trim()) || o.defaultPath,
            models_directory: O.value && ((qe = F.value) == null ? void 0 : qe.trim()) || null
          }), ze.value = 0, Ae.value = Date.now();
          const Ve = setInterval(async () => {
            var Ue;
            if (Ae.value && Date.now() - Ae.value > ST) {
              clearInterval(Ve), z.value = !1, W.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const Qe = await r();
              if (ze.value = 0, Qe.state === "idle" && z.value) {
                clearInterval(Ve), z.value = !1, W.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              Se.value = { progress: Qe.progress, message: Qe.message }, Qe.state === "complete" ? (clearInterval(Ve), z.value = !1, _e.value = ((Ue = P.value) == null ? void 0 : Ue.trim()) || o.defaultPath, p.value = 2, xe()) : Qe.state === "error" && (clearInterval(Ve), z.value = !1, W.value = Qe.error || "Workspace creation failed");
            } catch (Qe) {
              ze.value++, console.warn(`Polling failure ${ze.value}/${po}:`, Qe), ze.value >= po && (clearInterval(Ve), z.value = !1, W.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (Ve) {
          z.value = !1, W.value = Ve instanceof Error ? Ve.message : "Failed to create workspace";
        }
      }
    }
    async function Te() {
      ae.value = !0, q.value = null;
      try {
        const ke = {
          name: se.value.trim() || "my-new-env",
          python_version: Q.value,
          comfyui_version: we.value,
          torch_backend: te.value,
          switch_after: H.value,
          workspace_path: _e.value || void 0
          // Pass workspace path for first-time setup
        };
        if ((await c(ke)).status === "started") {
          re.value = 0, oe.value = Date.now();
          const Fe = setInterval(async () => {
            if (oe.value && Date.now() - oe.value > Ei) {
              clearInterval(Fe), ae.value = !1, q.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const De = await d();
              if (re.value = 0, De.state === "idle" && ae.value) {
                clearInterval(Fe), ae.value = !1, q.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              if (pe.value = {
                progress: De.progress ?? 0,
                message: De.message,
                phase: De.phase
              }, De.state === "complete") {
                clearInterval(Fe), ae.value = !1;
                const qe = De.environment_name || ke.name;
                H.value ? n("complete", qe, _e.value) : (g.value = "landing", n("environment-created-no-switch", qe));
              } else De.state === "error" && (clearInterval(Fe), ae.value = !1, q.value = De.error || "Environment creation failed");
            } catch (De) {
              re.value++, console.warn(`Polling failure ${re.value}/${po}:`, De), re.value >= po && (clearInterval(Fe), ae.value = !1, q.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (ke) {
        ae.value = !1, q.value = ke instanceof Error ? ke.message : "Unknown error";
      }
    }
    async function xe() {
      me.value = !0;
      try {
        ee.value = await f();
      } catch (ke) {
        console.error("Failed to load ComfyUI releases:", ke);
      } finally {
        me.value = !1;
      }
    }
    function Z() {
      w.value && n("switch-environment", w.value, _e.value);
    }
    function G() {
      g.value === "create" || g.value === "import" ? g.value = "landing" : p.value === 2 && o.setupState === "no_workspace" && (p.value = 1);
    }
    function ve(ke, X) {
      C.value = !1, X ? n("complete", ke, _e.value) : (n("environment-created-no-switch", ke), g.value = "landing");
    }
    function ge() {
    }
    at(async () => {
      if (o.detectedModelsDir && (F.value = o.detectedModelsDir), o.workspacePath && (_e.value = o.workspacePath), p.value === 2) {
        xe();
        const ke = setTimeout(() => {
          M.value = !1;
        }, 3e3);
        await He(), clearTimeout(ke), M.value = !1;
      }
    });
    async function He() {
      try {
        const ke = await d();
        if (console.log("[ComfyGit] Create progress check:", ke.state, ke), ke.state === "creating") {
          console.log("[ComfyGit] Resuming in-progress environment creation:", ke.environment_name), g.value = "create", ae.value = !0, se.value = ke.environment_name || "my-new-env", pe.value = {
            progress: ke.progress ?? 0,
            message: ke.message,
            phase: ke.phase
          }, We();
          return;
        }
      } catch (ke) {
        console.log("[ComfyGit] Create progress check failed:", ke);
      }
      try {
        const ke = await v();
        console.log("[ComfyGit] Import progress check:", ke.state, ke), ke.state === "importing" && (console.log("[ComfyGit] Resuming in-progress import:", ke.environment_name), I.value = {
          message: ke.message || "Importing...",
          phase: ke.phase || "",
          progress: ke.progress ?? 0,
          environmentName: ke.environment_name || ""
        }, x.value = !0, g.value = "import", C.value = !0);
      } catch (ke) {
        console.log("[ComfyGit] Import progress check failed:", ke);
      }
    }
    async function We() {
      re.value = 0, oe.value = Date.now();
      let ke = null;
      const X = async () => {
        if (oe.value && Date.now() - oe.value > Ei)
          return ke && clearInterval(ke), ae.value = !1, q.value = "Environment creation timed out. Check server logs for details.", !1;
        try {
          const De = await d();
          if (re.value = 0, De.state === "idle" && ae.value)
            return ke && clearInterval(ke), ae.value = !1, q.value = "Environment creation was interrupted. Please try again.", !1;
          if (pe.value = {
            progress: De.progress ?? 0,
            message: De.message,
            phase: De.phase
          }, De.state === "complete") {
            ke && clearInterval(ke), ae.value = !1;
            const qe = De.environment_name || se.value;
            return n("complete", qe, _e.value), !1;
          } else if (De.state === "error")
            return ke && clearInterval(ke), ae.value = !1, q.value = De.error || "Environment creation failed", !1;
          return !0;
        } catch (De) {
          return re.value++, console.warn(`Polling failure ${re.value}/${po}:`, De), re.value >= po ? (ke && clearInterval(ke), ae.value = !1, q.value = "Lost connection to server. Please refresh and try again.", !1) : !0;
        }
      };
      await X() && (ke = setInterval(async () => {
        !await X() && ke && clearInterval(ke);
      }, 2e3));
    }
    return (ke, X) => (a(), i(B, null, [
      b($t, {
        size: "lg",
        "show-close-button": !1,
        "close-on-overlay-click": !1,
        onClose: X[15] || (X[15] = (Fe) => ke.$emit("close"))
      }, {
        header: h(() => [
          X[20] || (X[20] = s("h3", { class: "base-modal-title" }, "WELCOME TO COMFYGIT", -1)),
          s("div", BE, [
            b(Cc),
            X[19] || (X[19] = s("span", { class: "header-divider" }, null, -1)),
            le.value ? (a(), i("button", {
              key: 0,
              class: "icon-btn settings-btn",
              title: "Workspace Settings",
              onClick: X[0] || (X[0] = (Fe) => _.value = !0)
            }, [...X[17] || (X[17] = [
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
              onClick: X[1] || (X[1] = (Fe) => ke.$emit("close")),
              title: "Close"
            }, [...X[18] || (X[18] = [
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
          var Fe;
          return [
            p.value === 1 ? (a(), i("div", WE, [
              X[24] || (X[24] = s("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
              s("div", GE, [
                X[21] || (X[21] = s("label", { class: "form-label" }, "Workspace Path", -1)),
                Mt(s("input", {
                  "onUpdate:modelValue": X[2] || (X[2] = (De) => P.value = De),
                  type: "text",
                  class: "form-input",
                  placeholder: e.defaultPath
                }, null, 8, jE), [
                  [tn, P.value]
                ]),
                W.value ? (a(), i("p", HE, m(W.value), 1)) : y("", !0)
              ]),
              s("div", qE, [
                s("label", KE, [
                  Mt(s("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": X[3] || (X[3] = (De) => O.value = De)
                  }, null, 512), [
                    [Kn, O.value]
                  ]),
                  X[22] || (X[22] = s("span", null, "I have existing ComfyUI models", -1))
                ])
              ]),
              O.value ? (a(), i("div", JE, [
                X[23] || (X[23] = s("label", { class: "form-label" }, "Models Directory", -1)),
                Mt(s("input", {
                  "onUpdate:modelValue": X[4] || (X[4] = (De) => F.value = De),
                  type: "text",
                  class: "form-input",
                  placeholder: e.detectedModelsDir || "/path/to/models"
                }, null, 8, QE), [
                  [tn, F.value]
                ]),
                e.detectedModelsDir && !F.value ? (a(), i("p", YE, " Detected: " + m(e.detectedModelsDir), 1)) : y("", !0),
                K.value ? (a(), i("p", XE, " Did you mean: " + m(K.value), 1)) : y("", !0),
                D.value ? (a(), i("p", ZE, m(D.value), 1)) : y("", !0),
                ue.value !== null && !D.value ? (a(), i("p", eT, " Found " + m(ue.value) + " model files ", 1)) : y("", !0)
              ])) : y("", !0),
              z.value ? (a(), L(Qn, {
                key: 1,
                progress: Se.value.progress,
                message: Se.value.message
              }, null, 8, ["progress", "message"])) : y("", !0)
            ])) : y("", !0),
            p.value === 2 ? (a(), i("div", tT, [
              M.value ? (a(), i("div", sT, [...X[25] || (X[25] = [
                s("div", { class: "loading-spinner" }, null, -1),
                s("div", { class: "loading-text" }, "Checking for in-progress operations...", -1)
              ])])) : (a(), i(B, { key: 1 }, [
                !o.cliInstalled && !$.value ? (a(), i("div", oT, [
                  s("div", nT, [
                    X[27] || (X[27] = s("span", { class: "cli-warning-icon" }, "!", -1)),
                    X[28] || (X[28] = s("span", { class: "cli-warning-title" }, "ComfyGit CLI Not Installed", -1)),
                    s("button", {
                      class: "cli-warning-close",
                      onClick: X[5] || (X[5] = (De) => $.value = !0),
                      title: "Dismiss"
                    }, [...X[26] || (X[26] = [
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
                  X[29] || (X[29] = s("p", { class: "cli-warning-text" }, " To start managed environments from the command line, you'll need the ComfyGit CLI. This is required to restart ComfyUI in managed mode after switching environments. ", -1)),
                  X[30] || (X[30] = s("div", { class: "cli-warning-commands" }, [
                    s("code", null, "pipx install comfygit"),
                    s("span", { class: "cli-warning-or" }, "or"),
                    s("code", null, "uv tool install comfygit")
                  ], -1))
                ])) : y("", !0),
                g.value === "landing" ? (a(), i("div", aT, [
                  X[34] || (X[34] = s("p", { class: "wizard-intro" }, " Now let's set up your first environment. ", -1)),
                  s("button", {
                    class: "landing-option",
                    onClick: X[6] || (X[6] = (De) => g.value = "create")
                  }, [...X[31] || (X[31] = [
                    s("span", { class: "option-icon" }, "➕", -1),
                    s("div", { class: "option-content" }, [
                      s("span", { class: "option-title" }, "Create New Environment"),
                      s("span", { class: "option-description" }, "Start fresh with a new ComfyUI installation")
                    ], -1),
                    s("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  s("button", {
                    class: "landing-option",
                    onClick: X[7] || (X[7] = (De) => {
                      x.value = !1, g.value = "import";
                    })
                  }, [...X[32] || (X[32] = [
                    s("span", { class: "option-icon" }, "📦", -1),
                    s("div", { class: "option-content" }, [
                      s("span", { class: "option-title" }, "Import Environment"),
                      s("span", { class: "option-description" }, "From exported bundle (.tar.gz) or git repository")
                    ], -1),
                    s("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  (Fe = o.existingEnvironments) != null && Fe.length ? (a(), i(B, { key: 0 }, [
                    X[33] || (X[33] = s("div", { class: "landing-divider" }, [
                      s("span", null, "or switch to existing")
                    ], -1)),
                    s("div", lT, [
                      (a(!0), i(B, null, ye(o.existingEnvironments, (De) => (a(), i("label", {
                        key: De,
                        class: Be(["env-option", { selected: w.value === De }])
                      }, [
                        Mt(s("input", {
                          type: "radio",
                          name: "env-select",
                          value: De,
                          "onUpdate:modelValue": X[8] || (X[8] = (qe) => w.value = qe)
                        }, null, 8, iT), [
                          [Nn, w.value]
                        ]),
                        s("span", rT, m(De), 1)
                      ], 2))), 128))
                    ])
                  ], 64)) : y("", !0)
                ])) : g.value === "create" ? (a(), i("div", cT, [
                  ae.value ? (a(), i("div", kT, [
                    s("p", bT, [
                      X[41] || (X[41] = S(" Creating environment ", -1)),
                      s("strong", null, m(se.value), 1),
                      X[42] || (X[42] = S("... ", -1))
                    ]),
                    b(Qn, {
                      progress: pe.value.progress,
                      message: pe.value.message,
                      "current-phase": pe.value.phase,
                      "show-steps": !0,
                      steps: Ne
                    }, null, 8, ["progress", "message", "current-phase"]),
                    X[43] || (X[43] = s("p", { class: "progress-warning" }, " This may take several minutes. Please wait... ", -1))
                  ])) : (a(), i(B, { key: 0 }, [
                    X[40] || (X[40] = s("p", { class: "wizard-intro" }, " Create a new managed environment: ", -1)),
                    s("div", uT, [
                      X[35] || (X[35] = s("label", { class: "form-label" }, "Environment Name", -1)),
                      Mt(s("input", {
                        "onUpdate:modelValue": X[9] || (X[9] = (De) => se.value = De),
                        type: "text",
                        class: "form-input",
                        placeholder: "my-new-env"
                      }, null, 512), [
                        [tn, se.value]
                      ])
                    ]),
                    s("div", dT, [
                      X[36] || (X[36] = s("label", { class: "form-label" }, "Python Version", -1)),
                      Mt(s("select", {
                        "onUpdate:modelValue": X[10] || (X[10] = (De) => Q.value = De),
                        class: "form-select"
                      }, [
                        (a(!0), i(B, null, ye(st(fc), (De) => (a(), i("option", {
                          key: De,
                          value: De
                        }, m(De), 9, mT))), 128))
                      ], 512), [
                        [Co, Q.value]
                      ])
                    ]),
                    s("div", fT, [
                      X[37] || (X[37] = s("label", { class: "form-label" }, "ComfyUI Version", -1)),
                      Mt(s("select", {
                        "onUpdate:modelValue": X[11] || (X[11] = (De) => we.value = De),
                        class: "form-select",
                        disabled: me.value
                      }, [
                        (a(!0), i(B, null, ye(ee.value, (De) => (a(), i("option", {
                          key: De.tag_name,
                          value: De.tag_name
                        }, m(De.name), 9, pT))), 128))
                      ], 8, vT), [
                        [Co, we.value]
                      ])
                    ]),
                    s("div", gT, [
                      X[38] || (X[38] = s("label", { class: "form-label" }, "PyTorch Backend", -1)),
                      Mt(s("select", {
                        "onUpdate:modelValue": X[12] || (X[12] = (De) => te.value = De),
                        class: "form-select"
                      }, [
                        (a(!0), i(B, null, ye(st(Pl), (De) => (a(), i("option", {
                          key: De,
                          value: De
                        }, m(De) + m(De === "auto" ? " (detect GPU)" : ""), 9, hT))), 128))
                      ], 512), [
                        [Co, te.value]
                      ])
                    ]),
                    s("div", yT, [
                      s("label", wT, [
                        Mt(s("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": X[13] || (X[13] = (De) => H.value = De)
                        }, null, 512), [
                          [Kn, H.value]
                        ]),
                        X[39] || (X[39] = s("span", null, "Switch to this environment after creation", -1))
                      ])
                    ]),
                    q.value ? (a(), i("div", _T, m(q.value), 1)) : y("", !0)
                  ], 64))
                ])) : g.value === "import" ? (a(), i("div", $T, [
                  b(yc, {
                    "workspace-path": _e.value,
                    "resume-import": x.value,
                    "initial-progress": I.value ?? void 0,
                    onImportComplete: ve,
                    onImportStarted: X[14] || (X[14] = (De) => C.value = !0),
                    onSourceCleared: ge
                  }, null, 8, ["workspace-path", "resume-import", "initial-progress"])
                ])) : y("", !0)
              ], 64))
            ])) : y("", !0)
          ];
        }),
        footer: h(() => [
          s("div", CT, [
            b(xc),
            s("div", xT, [
              p.value === 1 ? (a(), L(Oe, {
                key: 0,
                variant: "primary",
                disabled: !Le.value || z.value,
                onClick: $e
              }, {
                default: h(() => [
                  S(m(z.value ? "Creating..." : "Next"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : p.value === 2 ? (a(), i(B, { key: 1 }, [
                !ae.value && !C.value && (g.value !== "landing" || o.setupState === "no_workspace" && !_e.value) ? (a(), L(Oe, {
                  key: 0,
                  variant: "secondary",
                  onClick: G
                }, {
                  default: h(() => [...X[44] || (X[44] = [
                    S(" Back ", -1)
                  ])]),
                  _: 1
                })) : y("", !0),
                g.value === "create" ? (a(), L(Oe, {
                  key: 1,
                  variant: "primary",
                  disabled: !fe.value || ae.value,
                  onClick: Te
                }, {
                  default: h(() => [
                    S(m(ae.value ? "Creating..." : H.value ? "Create & Switch" : "Create Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0),
                g.value === "landing" && w.value ? (a(), L(Oe, {
                  key: 2,
                  variant: "primary",
                  onClick: Z
                }, {
                  default: h(() => [
                    S(" Switch to " + m(w.value), 1)
                  ]),
                  _: 1
                })) : y("", !0)
              ], 64)) : y("", !0)
            ])
          ])
        ]),
        _: 1
      }),
      _.value ? (a(), L(VE, {
        key: 0,
        "workspace-path": E.value,
        onClose: X[16] || (X[16] = (Fe) => _.value = !1)
      }, null, 8, ["workspace-path"])) : y("", !0)
    ], 64));
  }
}), ET = /* @__PURE__ */ Ie(IT, [["__scopeId", "data-v-9a9aadc0"]]), TT = { class: "update-banner" }, MT = { class: "update-banner__left" }, PT = { class: "update-banner__title" }, RT = {
  key: 0,
  class: "update-banner__summary"
}, LT = { class: "update-banner__actions" }, DT = ["disabled"], NT = ["disabled"], OT = ["disabled"], UT = /* @__PURE__ */ Ce({
  __name: "UpdateNoticeBanner",
  props: {
    info: {},
    updating: { type: Boolean }
  },
  emits: ["update", "dismiss", "release-notes"],
  setup(e, { emit: t }) {
    const o = t;
    return (n, l) => (a(), i("div", TT, [
      s("div", MT, [
        s("div", PT, " ComfyGit Manager v" + m(e.info.latest_version) + " available ", 1),
        e.info.changelog_summary ? (a(), i("div", RT, m(e.info.changelog_summary), 1)) : y("", !0)
      ]),
      s("div", LT, [
        s("button", {
          class: "update-banner__btn primary",
          disabled: e.updating,
          onClick: l[0] || (l[0] = (r) => o("update"))
        }, m(e.updating ? "Updating…" : "Update"), 9, DT),
        e.info.release_url ? (a(), i("button", {
          key: 0,
          class: "update-banner__btn",
          disabled: e.updating,
          onClick: l[1] || (l[1] = (r) => o("release-notes"))
        }, " Release notes ", 8, NT)) : y("", !0),
        s("button", {
          class: "update-banner__btn",
          disabled: e.updating,
          onClick: l[2] || (l[2] = (r) => o("dismiss"))
        }, " Dismiss ", 8, OT)
      ])
    ]));
  }
}), AT = /* @__PURE__ */ Ie(UT, [["__scopeId", "data-v-49562c5c"]]), Sc = "ComfyGit.UpdateNotice.DismissedVersion";
function zT() {
  try {
    return localStorage.getItem(Sc);
  } catch {
    return null;
  }
}
function FT(e) {
  try {
    localStorage.setItem(Sc, e);
  } catch {
  }
}
function VT(e) {
  return !e || !e.update_available || !e.latest_version ? !1 : zT() !== e.latest_version;
}
const BT = { class: "comfygit-panel" }, WT = { class: "panel-header" }, GT = { class: "header-left" }, jT = {
  key: 0,
  class: "header-info"
}, HT = { class: "header-actions" }, qT = { class: "env-switcher" }, KT = { class: "env-switcher-header" }, JT = { class: "env-control-buttons" }, QT = {
  key: 0,
  class: "header-info"
}, YT = { class: "branch-name" }, XT = { class: "panel-main" }, ZT = { class: "sidebar" }, eM = { class: "sidebar-content" }, tM = { class: "sidebar-section" }, sM = { class: "sidebar-section" }, oM = { class: "sidebar-section" }, nM = { class: "sidebar-footer" }, aM = { class: "content-area" }, lM = {
  key: 0,
  class: "error-message"
}, iM = {
  key: 1,
  class: "loading"
}, rM = { class: "dialog-content env-selector-dialog" }, cM = { class: "dialog-header" }, uM = { class: "dialog-body" }, dM = { class: "env-list" }, mM = { class: "env-info" }, fM = { class: "env-name-row" }, vM = { class: "env-indicator" }, pM = { class: "env-name" }, gM = {
  key: 0,
  class: "env-branch"
}, hM = {
  key: 1,
  class: "current-label"
}, yM = { class: "env-stats" }, wM = ["onClick"], _M = { class: "toast-container" }, kM = { class: "toast-message" }, Ti = "ComfyGit.LastView", Mi = "ComfyGit.LastSection", bM = /* @__PURE__ */ Ce({
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
      switchBranch: v,
      deleteBranch: f,
      getEnvironments: p,
      switchEnvironment: w,
      getSwitchProgress: g,
      deleteEnvironment: _,
      syncEnvironmentManually: C,
      repairWorkflowModels: $,
      getSetupStatus: x,
      getUpdateCheck: I,
      updateManager: M
    } = rt(), P = zh(), O = k(null), F = k([]), W = k([]), D = k([]), K = R(() => D.value.find((ie) => ie.is_current)), ue = k(null), se = k(!1), Q = k(!1), we = k("remotes");
    function te(ie) {
      return ie ? {
        manifest: "manifest",
        "debug-env": "env",
        "debug-workspace": "workspace",
        "debug-orchestrator": "orchestrator"
      }[ie] ?? "manifest" : "manifest";
    }
    const H = k(te(o.initialView)), q = k(null), _e = k(!1), ee = k(1), me = R(() => {
      var ie;
      return ((ie = q.value) == null ? void 0 : ie.state) || "managed";
    }), z = {
      can_initialize_workspace: !1,
      can_create_environment: !0,
      can_switch_environment: !0,
      can_restart_current: !0,
      can_stop_current: !0,
      can_delete_environment: !0
    }, ae = R(() => {
      var ie, j;
      return ((j = (ie = q.value) == null ? void 0 : ie.runtime_context) == null ? void 0 : j.capabilities) || z;
    }), Se = k(!1), pe = k(null), Ne = k(null), ze = k(!1), Ae = k(null), re = k(!1), oe = k(!1), Le = R(() => !re.value && VT(Ae.value)), fe = k(null), le = k(null), E = k(null), A = k(!1), ce = k(!1), $e = k(""), Te = k(null), xe = k({ state: "idle", progress: 0, message: "" });
    let Z = null, G = null;
    const ve = {
      manifest: { view: "diagnostics", section: "diagnostics" },
      "debug-env": { view: "diagnostics", section: "diagnostics" },
      "debug-workspace": { view: "diagnostics", section: "diagnostics" },
      "debug-orchestrator": { view: "diagnostics", section: "diagnostics" },
      history: { view: "version-control", section: "version-control" },
      branches: { view: "version-control", section: "version-control" },
      remotes: { view: "version-control", section: "version-control" },
      status: { view: "status", section: "this-env" },
      workflows: { view: "workflows", section: "this-env" },
      nodes: { view: "nodes", section: "this-env" }
    }, ge = o.initialView ? ve[o.initialView] : null, He = [
      "status",
      "workflows",
      "models-env",
      "nodes",
      "version-control",
      "environments",
      "model-index",
      "settings",
      "diagnostics"
    ], We = ["this-env", "version-control", "workspace", "diagnostics"];
    function ke() {
      try {
        const ie = sessionStorage.getItem(Ti), j = sessionStorage.getItem(Mi), Ke = ie === "branches" || ie === "history" || ie === "remotes" ? "version-control" : ie === "manifest" || ie === "debug-env" || ie === "debug-workspace" ? "diagnostics" : ie, Ze = j === "all-envs" ? "workspace" : j === "sharing" ? "version-control" : j;
        if (ie && j && He.includes(Ke) && We.includes(Ze))
          return { view: Ke, section: Ze };
      } catch {
      }
      return null;
    }
    const X = ke(), Fe = k((ge == null ? void 0 : ge.view) ?? (X == null ? void 0 : X.view) ?? "status"), De = k((ge == null ? void 0 : ge.section) ?? (X == null ? void 0 : X.section) ?? "this-env");
    function qe(ie, j) {
      Fe.value = ie, De.value = j;
      try {
        sessionStorage.setItem(Ti, ie), sessionStorage.setItem(Mi, j);
      } catch {
      }
    }
    function Ve(ie) {
      const Ke = {
        "model-index": { view: "model-index", section: "workspace" },
        remotes: { view: "version-control", section: "version-control" }
      }[ie];
      Ke && qe(Ke.view, Ke.section);
    }
    function Ue(ie) {
      we.value = ie, qe("version-control", "version-control");
    }
    function Qe(ie) {
      H.value = ie, qe("diagnostics", "diagnostics");
    }
    function gt() {
      Ue("branches");
    }
    function Y() {
      n("close"), setTimeout(async () => {
        await he("Comfy.OpenManagerDialog") || await he("Comfy.Manager.CustomNodesManager.ShowCustomNodesMenu") || T(["Extensions", "Manage extensions"]) || T(["Manager"]) || console.warn("[ComfyGit] Extensions manager entrypoint not found");
      }, 100);
    }
    async function he(ie) {
      var Ze, dt;
      const j = window.app, Ke = [
        (Ze = j == null ? void 0 : j.extensionManager) == null ? void 0 : Ze.command,
        (dt = j == null ? void 0 : j.extensionManager) == null ? void 0 : dt.commands,
        j == null ? void 0 : j.command,
        j == null ? void 0 : j.commands
      ];
      for (const yt of Ke)
        if (typeof (yt == null ? void 0 : yt.execute) == "function")
          try {
            return await yt.execute(ie), !0;
          } catch (Dt) {
            console.debug(`[ComfyGit] Command ${ie} did not open Extensions manager`, Dt);
          }
      return !1;
    }
    function T(ie) {
      var Ze, dt, yt;
      const j = ie.map((Dt) => Dt.toLowerCase()), Ke = document.querySelectorAll('button, [role="button"]');
      for (const Dt of Ke) {
        const ts = Dt;
        if ([
          (Ze = ts.textContent) == null ? void 0 : Ze.trim(),
          (dt = ts.getAttribute("title")) == null ? void 0 : dt.trim(),
          (yt = ts.getAttribute("aria-label")) == null ? void 0 : yt.trim()
        ].filter(Boolean).map((V) => V.toLowerCase()).some((V) => j.includes(V)))
          return ts.click(), !0;
      }
      return !1;
    }
    const N = k(null), J = k(!1), Ee = k(!1), Re = k([]);
    let Je = 0;
    function Pe(ie, j = "info", Ke = 3e3) {
      const Ze = ++Je;
      return Re.value.push({ id: Ze, message: ie, type: j }), Ke > 0 && setTimeout(() => {
        Re.value = Re.value.filter((dt) => dt.id !== Ze);
      }, Ke), Ze;
    }
    function Ye(ie) {
      Re.value = Re.value.filter((j) => j.id !== ie);
    }
    function ot(ie, j) {
      Pe(ie, j);
    }
    async function xt() {
      Ae.value = null, re.value = !1;
      try {
        Ae.value = await I();
      } catch {
      }
    }
    function zt() {
      var j;
      const ie = (j = Ae.value) == null ? void 0 : j.release_url;
      if (ie)
        try {
          window.open(ie, "_blank", "noopener,noreferrer");
        } catch {
        }
    }
    function ne() {
      var j;
      const ie = (j = Ae.value) == null ? void 0 : j.latest_version;
      ie && FT(ie), re.value = !0;
    }
    async function U() {
      if (oe.value) return;
      oe.value = !0;
      const ie = Pe("Updating comfygit-manager...", "info", 0);
      try {
        const j = await M();
        if (Ye(ie), j.status !== "success") {
          if (Pe(j.message || "Update failed", "error"), j.manual_instructions) {
            const Ke = j.manual_instructions.split(`
`).map((Ze) => Ze.trim()).filter(Boolean);
            N.value = {
              title: "Manual Update Required",
              message: "Self-update failed. Follow these steps:",
              details: Ke,
              confirmLabel: "OK",
              cancelLabel: "Close",
              onConfirm: () => {
                N.value = null;
              }
            };
          }
          return;
        }
        if (Pe(j.message || "Update complete", "success"), ne(), j.restart_required) {
          Qs();
          try {
            await Hs("/v2/manager/reboot");
          } catch {
          }
        }
      } catch (j) {
        Ye(ie);
        const Ke = j instanceof Error ? j.message : "Update failed";
        Pe(Ke, "error");
      } finally {
        oe.value = !1;
      }
    }
    const de = R(() => {
      if (!O.value) return "neutral";
      const ie = O.value.workflows, j = ie.new.length > 0 || ie.modified.length > 0 || ie.deleted.length > 0 || O.value.has_changes;
      return O.value.comparison.is_synced ? j ? "warning" : "success" : "error";
    });
    R(() => O.value ? de.value === "success" ? "All synced" : de.value === "warning" ? "Uncommitted changes" : de.value === "error" ? "Not synced" : "" : "");
    async function je(ie = {}) {
      Se.value = !0, pe.value = null;
      try {
        const [j, Ke, Ze, dt] = await Promise.all([
          l(!0),
          r(),
          u(),
          p()
        ]);
        O.value = j, F.value = Ke.commits, W.value = Ze.branches, D.value = dt, n("statusUpdate", j), (ie.refreshWorkflows ?? !0) && fe.value && await fe.value.loadWorkflows(!0);
      } catch (j) {
        pe.value = j instanceof Error ? j.message : "Failed to load status", O.value = null, F.value = [], W.value = [];
      } finally {
        Se.value = !1;
      }
    }
    function ut(ie) {
      Ne.value = ie;
    }
    async function St(ie) {
      var Ke;
      Ne.value = null;
      const j = O.value && (O.value.workflows.new.length > 0 || O.value.workflows.modified.length > 0 || O.value.workflows.deleted.length > 0 || O.value.has_changes);
      N.value = {
        title: j ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: j ? "You have uncommitted changes that will be lost." : `Checkout commit ${ie.short_hash || ((Ke = ie.hash) == null ? void 0 : Ke.slice(0, 7))}?`,
        details: j ? kn() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: j ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: j,
        onConfirm: async () => {
          var yt;
          N.value = null, Qs();
          const Ze = Pe(`Checking out ${ie.short_hash || ((yt = ie.hash) == null ? void 0 : yt.slice(0, 7))}...`, "info", 0), dt = await c(ie.hash, j);
          Ye(Ze), dt.status === "success" ? Pe("Restarting ComfyUI...", "success") : Pe(dt.message || "Checkout failed", "error");
        }
      };
    }
    async function lt(ie) {
      const j = O.value && (O.value.workflows.new.length > 0 || O.value.workflows.modified.length > 0 || O.value.workflows.deleted.length > 0 || O.value.has_changes);
      N.value = {
        title: j ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: j ? "You have uncommitted changes." : `Switch to branch "${ie}"?`,
        details: j ? kn() : void 0,
        warning: j ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: j ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          N.value = null, Qs();
          const Ke = Pe(`Switching to ${ie}...`, "info", 0), Ze = await v(ie, j);
          Ye(Ke), Ze.status === "success" ? Pe("Restarting ComfyUI...", "success") : Pe(Ze.message || "Branch switch failed", "error");
        }
      };
    }
    async function It(ie) {
      const j = Pe(`Creating branch ${ie}...`, "info", 0), Ke = await d(ie);
      Ye(j), Ke.status === "success" ? (Pe(`Branch "${ie}" created`, "success"), await je()) : Pe(Ke.message || "Failed to create branch", "error");
    }
    async function Ss(ie, j = !1) {
      const Ke = async (Ze) => {
        var yt;
        const dt = Pe(`Deleting branch ${ie}...`, "info", 0);
        try {
          const Dt = await f(ie, Ze);
          Ye(dt), Dt.status === "success" ? (Pe(`Branch "${ie}" deleted`, "success"), await je()) : (yt = Dt.message) != null && yt.includes("not fully merged") ? N.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${ie}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              N.value = null, await Ke(!0);
            }
          } : Pe(Dt.message || "Failed to delete branch", "error");
        } catch (Dt) {
          Ye(dt);
          const ts = Dt instanceof Error ? Dt.message : "Failed to delete branch";
          ts.includes("not fully merged") ? N.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${ie}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              N.value = null, await Ke(!0);
            }
          } : Pe(ts, "error");
        }
      };
      N.value = {
        title: "Delete Branch",
        message: `Delete branch "${ie}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          N.value = null, await Ke(j);
        }
      };
    }
    async function Is(ie) {
      Ne.value = null;
      const j = prompt("Enter branch name:");
      if (j) {
        const Ke = Pe(`Creating branch ${j}...`, "info", 0), Ze = await d(j, ie.hash);
        Ye(Ke), Ze.status === "success" ? (Pe(`Branch "${j}" created from ${ie.short_hash}`, "success"), await je()) : Pe(Ze.message || "Failed to create branch", "error");
      }
    }
    function Qs() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function da() {
      if (!ae.value.can_restart_current) {
        Pe("Restart is not available in this runtime context.", "warning");
        return;
      }
      N.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          N.value = null, Qs(), Pe("Restarting environment...", "info");
          try {
            await Hs("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function ma() {
      if (!ae.value.can_stop_current) {
        Pe("Stop is not available in this runtime context.", "warning");
        return;
      }
      N.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          N.value = null, Pe("Stopping environment...", "info");
          try {
            await Hs("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function zs(ie, j) {
      if (!ae.value.can_switch_environment) {
        Pe("Environment switching is not available in this runtime context.", "warning");
        return;
      }
      ze.value = !1, $e.value = ie, Te.value = j || null, A.value = !0;
    }
    async function fa() {
      A.value = !1, ce.value = !0, Qs(), xe.value = {
        progress: 10,
        state: uo(10),
        message: mo(10)
      };
      try {
        await w($e.value, Te.value || void 0), va(), pa();
      } catch (ie) {
        Es(), ce.value = !1, Pe(`Failed to initiate switch: ${ie instanceof Error ? ie.message : "Unknown error"}`, "error"), xe.value = { state: "idle", progress: 0, message: "" }, Te.value = null;
      }
    }
    function uo(ie) {
      return ie >= 100 ? "complete" : ie >= 80 ? "validating" : ie >= 60 ? "starting" : ie >= 30 ? "syncing" : "preparing";
    }
    function mo(ie) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[uo(ie)] || "";
    }
    function va() {
      if (G) return;
      let ie = 10;
      const j = 60, Ke = 5e3, Ze = 100, dt = (j - ie) / (Ke / Ze);
      G = window.setInterval(() => {
        if (ie += dt, ie >= j && (ie = j, Es()), xe.value.progress < j) {
          const yt = Math.floor(ie);
          xe.value = {
            progress: yt,
            state: uo(yt),
            message: mo(yt)
          };
        }
      }, Ze);
    }
    function Es() {
      G && (clearInterval(G), G = null);
    }
    function pa() {
      Z || (Z = window.setInterval(async () => {
        try {
          let ie = await P.getStatus();
          if ((!ie || ie.state === "idle") && (ie = await g()), !ie)
            return;
          const j = ie.progress || 0;
          j >= 60 && Es();
          const Ke = Math.max(j, xe.value.progress), Ze = ie.state && ie.state !== "idle" && ie.state !== "unknown", dt = Ze ? ie.state : uo(Ke), yt = Ze && ie.message || mo(Ke);
          xe.value = {
            state: dt,
            progress: Ke,
            message: yt
          }, ie.state === "complete" ? (Es(), No(), ce.value = !1, Pe(`✓ Switched to ${$e.value}`, "success"), await je(), $e.value = "") : ie.state === "rolled_back" ? (Es(), No(), ce.value = !1, Pe("Switch failed, restored previous environment", "warning"), $e.value = "") : ie.state === "critical_failure" && (Es(), No(), ce.value = !1, Pe(`Critical error during switch: ${ie.message}`, "error"), $e.value = "");
        } catch (ie) {
          console.error("Failed to poll switch progress:", ie);
        }
      }, 1e3));
    }
    function No() {
      Es(), Z && (clearInterval(Z), Z = null);
    }
    function ga() {
      var ie;
      A.value = !1, $e.value = "", (ie = q.value) != null && ie.state && q.value.state !== "managed" && (ee.value = q.value.state === "no_workspace" ? 1 : 2, _e.value = !0);
    }
    async function ha(ie) {
      J.value = !1, await je(), Pe(ie.message, ie.success ? "success" : "error");
    }
    async function ya() {
      Ee.value = !1;
      const ie = Pe("Syncing environment...", "info", 0);
      try {
        const j = await C("skip", !0);
        if (Ye(ie), j.status === "success") {
          const Ke = [];
          j.nodes_installed.length && Ke.push(`${j.nodes_installed.length} installed`), j.nodes_removed.length && Ke.push(`${j.nodes_removed.length} removed`);
          const Ze = Ke.length ? `: ${Ke.join(", ")}` : "";
          Pe(`✓ Environment synced${Ze}`, "success"), await je();
        } else {
          const Ke = j.errors.length ? j.errors.join("; ") : j.message;
          Pe(`Sync failed: ${Ke}`, "error");
        }
      } catch (j) {
        Ye(ie), Pe(`Sync error: ${j instanceof Error ? j.message : "Unknown error"}`, "error");
      }
    }
    async function wa(ie) {
      var j;
      try {
        const Ke = await $(ie);
        Ke.failed.length === 0 ? Pe(`✓ Repaired ${Ke.success} workflow${Ke.success === 1 ? "" : "s"}`, "success") : Pe(`Repaired ${Ke.success}, failed: ${Ke.failed.length}`, "warning"), await je();
      } catch (Ke) {
        Pe(`Repair failed: ${Ke instanceof Error ? Ke.message : "Unknown error"}`, "error");
      } finally {
        (j = E.value) == null || j.resetRepairingState();
      }
    }
    async function wn() {
      var j, Ke;
      const ie = Pe("Repairing environment...", "info", 0);
      try {
        const Ze = await C("skip", !0);
        if (Ye(ie), Ze.status === "success") {
          const dt = [];
          Ze.nodes_installed.length && dt.push(`${Ze.nodes_installed.length} installed`), Ze.nodes_removed.length && dt.push(`${Ze.nodes_removed.length} removed`);
          const yt = dt.length ? `: ${dt.join(", ")}` : "";
          Pe(`✓ Environment repaired${yt}`, "success"), (j = E.value) == null || j.closeDetailModal(), await je();
        } else {
          const dt = Ze.errors.length ? Ze.errors.join(", ") : Ze.message || "Unknown error";
          Pe(`Repair failed: ${dt}`, "error");
        }
      } catch (Ze) {
        Ye(ie), Pe(`Repair error: ${Ze instanceof Error ? Ze.message : "Unknown error"}`, "error");
      } finally {
        (Ke = E.value) == null || Ke.resetRepairingEnvironmentState();
      }
    }
    async function _a(ie, j) {
      Pe(`Environment '${ie}' created`, "success"), await je(), le.value && await le.value.loadEnvironments(), j && ae.value.can_switch_environment && await zs(ie);
    }
    async function ka(ie) {
      var j;
      if (!ae.value.can_delete_environment) {
        Pe("Environment deletion is not available in this runtime context.", "warning");
        return;
      }
      if (((j = K.value) == null ? void 0 : j.name) === ie) {
        Pe("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      N.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${ie}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          N.value = null;
          try {
            const Ke = await _(ie);
            Ke.status === "success" ? (Pe(`Environment "${ie}" deleted`, "success"), await je(), le.value && await le.value.loadEnvironments()) : Pe(Ke.message || "Failed to delete environment", "error");
          } catch (Ke) {
            Pe(`Error deleting environment: ${Ke instanceof Error ? Ke.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function ba(ie, j) {
      _e.value = !1;
      try {
        q.value = await x();
      } catch {
      }
      ae.value.can_switch_environment && await zs(ie, j);
    }
    function $a() {
      _e.value = !1, n("close");
    }
    async function Ca(ie, j) {
      await zs(ie, j);
    }
    async function xa(ie) {
      se.value = !1, await je(), await zs(ie);
    }
    function Sa() {
      ue.value = null, se.value = !0;
    }
    function Ia(ie) {
      ue.value = ie, Q.value = !0;
    }
    function _n() {
      Q.value = !1, ue.value = null;
    }
    async function Ea(ie) {
      q.value = await x(), console.log(`Environment '${ie}' created. Available for switching.`);
    }
    function Ta() {
      if (!ae.value.can_create_environment) {
        Pe("Environment creation is not available in this runtime context.", "warning");
        return;
      }
      qe("environments", "workspace"), setTimeout(() => {
        var ie;
        (ie = le.value) == null || ie.openCreateModal();
      }, 100);
    }
    function kn() {
      if (!O.value) return [];
      const ie = [], j = O.value.workflows;
      return j.new.length && ie.push(`${j.new.length} new workflow(s)`), j.modified.length && ie.push(`${j.modified.length} modified workflow(s)`), j.deleted.length && ie.push(`${j.deleted.length} deleted workflow(s)`), ie;
    }
    return at(async () => {
      try {
        if (q.value = await x(), q.value.state === "no_workspace" && ae.value.can_initialize_workspace) {
          _e.value = !0, ee.value = 1;
          return;
        }
        if (q.value.state === "empty_workspace" && ae.value.can_create_environment) {
          _e.value = !0, ee.value = 2;
          return;
        }
        if (q.value.state === "unmanaged" && ae.value.can_switch_environment) {
          _e.value = !0, ee.value = 2;
          return;
        }
      } catch (ie) {
        console.warn("Setup status check failed, proceeding normally:", ie);
      }
      await Promise.all([
        je({ refreshWorkflows: !1 }),
        xt()
      ]);
    }), (ie, j) => {
      var Ke, Ze, dt, yt, Dt, ts, Oo, V, be, Ge, mt, Tt, vs;
      return a(), i("div", BT, [
        s("div", WT, [
          s("div", GT, [
            j[27] || (j[27] = s("h2", { class: "panel-title" }, "ComfyGit", -1)),
            O.value ? (a(), i("div", jT)) : y("", !0)
          ]),
          s("div", HT, [
            b(Cc),
            j[30] || (j[30] = s("span", { class: "header-divider" }, null, -1)),
            s("button", {
              class: Be(["icon-btn", { spinning: Se.value }]),
              onClick: je,
              title: "Refresh"
            }, [...j[28] || (j[28] = [
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
              onClick: j[0] || (j[0] = (et) => n("close")),
              title: "Close"
            }, [...j[29] || (j[29] = [
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
        Le.value && Ae.value ? (a(), L(AT, {
          key: 0,
          info: Ae.value,
          updating: oe.value,
          onUpdate: U,
          onDismiss: ne,
          onReleaseNotes: zt
        }, null, 8, ["info", "updating"])) : y("", !0),
        s("div", qT, [
          s("div", KT, [
            j[31] || (j[31] = s("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            s("div", JT, [
              ae.value.can_restart_current ? (a(), i("button", {
                key: 0,
                class: "env-control-btn",
                title: "Restart environment",
                onClick: da
              }, " Restart ")) : y("", !0),
              ae.value.can_stop_current ? (a(), i("button", {
                key: 1,
                class: "env-control-btn stop",
                title: "Stop environment",
                onClick: ma
              }, " Stop ")) : y("", !0)
            ])
          ]),
          s("button", {
            class: "env-switcher-btn",
            onClick: j[1] || (j[1] = (et) => qe("environments", "workspace"))
          }, [
            O.value ? (a(), i("div", QT, [
              s("span", null, m(((Ke = K.value) == null ? void 0 : Ke.name) || ((Ze = O.value) == null ? void 0 : Ze.environment) || "Loading..."), 1),
              s("span", YT, "(" + m(O.value.branch || "detached") + ")", 1)
            ])) : y("", !0),
            j[32] || (j[32] = s("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        s("div", XT, [
          s("div", ZT, [
            s("div", eM, [
              s("div", tM, [
                j[33] || (j[33] = s("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
                s("button", {
                  class: Be(["sidebar-item", { active: Fe.value === "status" && De.value === "this-env" }]),
                  onClick: j[2] || (j[2] = (et) => qe("status", "this-env"))
                }, " STATUS ", 2),
                s("button", {
                  class: Be(["sidebar-item", { active: Fe.value === "workflows" }]),
                  onClick: j[3] || (j[3] = (et) => qe("workflows", "this-env"))
                }, " WORKFLOWS ", 2),
                s("button", {
                  class: Be(["sidebar-item", { active: Fe.value === "models-env" }]),
                  onClick: j[4] || (j[4] = (et) => qe("models-env", "this-env"))
                }, " MODELS ", 2),
                s("button", {
                  class: Be(["sidebar-item", { active: Fe.value === "nodes" }]),
                  onClick: j[5] || (j[5] = (et) => qe("nodes", "this-env"))
                }, " NODES ", 2),
                s("button", {
                  class: Be(["sidebar-item", { active: Fe.value === "version-control" }]),
                  onClick: j[6] || (j[6] = (et) => Ue("remotes"))
                }, " VERSION CONTROL ", 2)
              ]),
              j[36] || (j[36] = s("div", { class: "sidebar-divider" }, null, -1)),
              s("div", sM, [
                j[34] || (j[34] = s("div", { class: "sidebar-section-title" }, "WORKSPACE", -1)),
                s("button", {
                  class: Be(["sidebar-item", { active: Fe.value === "environments" }]),
                  onClick: j[7] || (j[7] = (et) => qe("environments", "workspace"))
                }, " ENVIRONMENTS ", 2),
                s("button", {
                  class: Be(["sidebar-item", { active: Fe.value === "model-index" }]),
                  onClick: j[8] || (j[8] = (et) => qe("model-index", "workspace"))
                }, " MODEL INDEX ", 2),
                s("button", {
                  class: Be(["sidebar-item", { active: Fe.value === "settings" }]),
                  onClick: j[9] || (j[9] = (et) => qe("settings", "workspace"))
                }, " SETTINGS ", 2)
              ]),
              j[37] || (j[37] = s("div", { class: "sidebar-divider" }, null, -1)),
              s("div", oM, [
                j[35] || (j[35] = s("div", { class: "sidebar-section-title" }, "DIAGNOSTICS", -1)),
                s("button", {
                  class: Be(["sidebar-item", { active: Fe.value === "diagnostics" && H.value === "manifest" }]),
                  onClick: j[10] || (j[10] = (et) => Qe("manifest"))
                }, " MANIFEST ", 2),
                s("button", {
                  class: Be(["sidebar-item", { active: Fe.value === "diagnostics" && H.value !== "manifest" }]),
                  onClick: j[11] || (j[11] = (et) => Qe("env"))
                }, " LOGGING ", 2)
              ])
            ]),
            s("div", nM, [
              b(xc)
            ])
          ]),
          s("div", aM, [
            pe.value ? (a(), i("div", lM, m(pe.value), 1)) : !O.value && Fe.value === "status" ? (a(), i("div", iM, " Loading status... ")) : (a(), i(B, { key: 2 }, [
              Fe.value === "status" ? (a(), L(Ah, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: E,
                status: O.value,
                "setup-state": me.value,
                onSwitchBranch: gt,
                onCommitChanges: j[12] || (j[12] = (et) => J.value = !0),
                onSyncEnvironment: j[13] || (j[13] = (et) => Ee.value = !0),
                onViewWorkflows: j[14] || (j[14] = (et) => qe("workflows", "this-env")),
                onViewHistory: j[15] || (j[15] = (et) => Ue("history")),
                onViewDebug: j[16] || (j[16] = (et) => Qe("env")),
                onViewNodes: j[17] || (j[17] = (et) => qe("nodes", "this-env")),
                onRepairMissingModels: wa,
                onRepairEnvironment: wn,
                onStartSetup: j[18] || (j[18] = (et) => _e.value = !0),
                onViewEnvironments: j[19] || (j[19] = (et) => qe("environments", "workspace")),
                onCreateEnvironment: Ta
              }, null, 8, ["status", "setup-state"])) : Fe.value === "workflows" ? (a(), L(Eb, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: fe,
                onRefresh: je
              }, null, 512)) : Fe.value === "models-env" ? (a(), L(D2, {
                key: 2,
                onNavigate: Ve
              })) : Fe.value === "version-control" ? (a(), L(UI, {
                key: 3,
                commits: F.value,
                "current-ref": (dt = O.value) == null ? void 0 : dt.branch,
                branches: W.value,
                current: ((yt = O.value) == null ? void 0 : yt.branch) || null,
                "initial-tab": we.value,
                onSelect: ut,
                onCheckout: St,
                onSwitch: lt,
                onCreate: It,
                onDelete: Ss,
                onToast: ot
              }, null, 8, ["commits", "current-ref", "branches", "current", "initial-tab"])) : Fe.value === "nodes" ? (a(), L(S$, {
                key: 4,
                "version-mismatches": ((ts = (Dt = O.value) == null ? void 0 : Dt.comparison) == null ? void 0 : ts.version_mismatches) || [],
                onOpenNodeManager: Y,
                onRepairEnvironment: wn,
                onToast: ot
              }, null, 8, ["version-mismatches"])) : Fe.value === "diagnostics" ? (a(), L(YI, {
                key: 5,
                "initial-tab": H.value
              }, null, 8, ["initial-tab"])) : Fe.value === "environments" ? (a(), L(xx, {
                key: 6,
                ref_key: "environmentsSectionRef",
                ref: le,
                "can-create": ae.value.can_create_environment,
                "can-switch": ae.value.can_switch_environment,
                "can-delete": ae.value.can_delete_environment,
                onSwitch: zs,
                onCreated: _a,
                onDelete: ka,
                onImport: Sa,
                onExport: Ia
              }, null, 8, ["can-create", "can-switch", "can-delete"])) : Fe.value === "model-index" ? (a(), L(j2, {
                key: 7,
                onRefresh: je
              })) : Fe.value === "settings" ? (a(), L(Z$, { key: 8 })) : y("", !0)
            ], 64))
          ])
        ]),
        Ne.value ? (a(), L(p6, {
          key: 1,
          commit: Ne.value,
          onClose: j[20] || (j[20] = (et) => Ne.value = null),
          onCheckout: St,
          onCreateBranch: Is
        }, null, 8, ["commit"])) : y("", !0),
        N.value ? (a(), L(Ml, {
          key: 2,
          title: N.value.title,
          message: N.value.message,
          details: N.value.details,
          warning: N.value.warning,
          confirmLabel: N.value.confirmLabel,
          cancelLabel: N.value.cancelLabel,
          secondaryLabel: N.value.secondaryLabel,
          secondaryAction: N.value.secondaryAction,
          destructive: N.value.destructive,
          onConfirm: N.value.onConfirm,
          onCancel: j[21] || (j[21] = (et) => N.value = null),
          onSecondary: N.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : y("", !0),
        se.value ? (a(), L($t, {
          key: 3,
          title: "IMPORT ENVIRONMENT",
          size: "xl",
          "fixed-height": "",
          onClose: j[22] || (j[22] = (et) => se.value = !1)
        }, {
          body: h(() => [
            b(u8, {
              embedded: "",
              onImportCompleteSwitch: xa
            })
          ]),
          _: 1
        })) : y("", !0),
        Q.value ? (a(), L($t, {
          key: 4,
          title: ue.value ? `EXPORT ENVIRONMENT: ${ue.value.toUpperCase()}` : "EXPORT ENVIRONMENT",
          size: "md",
          onClose: _n
        }, {
          body: h(() => [
            b(p3, {
              embedded: "",
              "environment-name": ue.value,
              onClose: _n
            }, null, 8, ["environment-name"])
          ]),
          _: 1
        }, 8, ["title"])) : y("", !0),
        b(nE, {
          show: A.value,
          "from-environment": ((Oo = K.value) == null ? void 0 : Oo.name) || "unknown",
          "to-environment": $e.value,
          onConfirm: fa,
          onClose: ga
        }, null, 8, ["show", "from-environment", "to-environment"]),
        J.value && O.value ? (a(), L($c, {
          key: 5,
          status: O.value,
          "as-modal": !0,
          onClose: j[23] || (j[23] = (et) => J.value = !1),
          onCommitted: ha
        }, null, 8, ["status"])) : y("", !0),
        Ee.value && O.value ? (a(), L(CE, {
          key: 6,
          show: Ee.value,
          "mismatch-details": {
            missing_nodes: O.value.comparison.missing_nodes,
            extra_nodes: O.value.comparison.extra_nodes
          },
          onConfirm: ya,
          onClose: j[24] || (j[24] = (et) => Ee.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : y("", !0),
        b(pE, {
          show: ce.value,
          state: xe.value.state,
          progress: xe.value.progress,
          message: xe.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        ze.value ? (a(), i("div", {
          key: 7,
          class: "dialog-overlay",
          onClick: j[26] || (j[26] = pt((et) => ze.value = !1, ["self"]))
        }, [
          s("div", rM, [
            s("div", cM, [
              j[39] || (j[39] = s("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              s("button", {
                class: "icon-btn",
                onClick: j[25] || (j[25] = (et) => ze.value = !1)
              }, [...j[38] || (j[38] = [
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
            s("div", uM, [
              j[40] || (j[40] = s("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              s("div", dM, [
                (a(!0), i(B, null, ye(D.value, (et) => (a(), i("div", {
                  key: et.name,
                  class: Be(["env-item", { current: et.is_current }])
                }, [
                  s("div", mM, [
                    s("div", fM, [
                      s("span", vM, m(et.is_current ? "●" : "○"), 1),
                      s("span", pM, m(et.name), 1),
                      et.current_branch ? (a(), i("span", gM, "(" + m(et.current_branch) + ")", 1)) : y("", !0),
                      et.is_current ? (a(), i("span", hM, "CURRENT")) : y("", !0)
                    ]),
                    s("div", yM, m(et.workflow_count) + " workflows • " + m(et.node_count) + " nodes ", 1)
                  ]),
                  !et.is_current && ae.value.can_switch_environment ? (a(), i("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (OR) => zs(et.name)
                  }, " SWITCH ", 8, wM)) : y("", !0)
                ], 2))), 128))
              ])
            ])
          ])
        ])) : y("", !0),
        _e.value ? (a(), L(ET, {
          key: 8,
          "default-path": ((V = q.value) == null ? void 0 : V.default_path) || "~/comfygit",
          "detected-models-dir": ((be = q.value) == null ? void 0 : be.detected_models_dir) || null,
          "initial-step": ee.value,
          "existing-environments": ((Ge = q.value) == null ? void 0 : Ge.environments) || [],
          "cli-installed": ((mt = q.value) == null ? void 0 : mt.cli_installed) ?? !0,
          "setup-state": ((Tt = q.value) == null ? void 0 : Tt.state) || "no_workspace",
          "workspace-path": ((vs = q.value) == null ? void 0 : vs.workspace_path) || null,
          onComplete: ba,
          onClose: $a,
          onSwitchEnvironment: Ca,
          onEnvironmentCreatedNoSwitch: Ea
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state", "workspace-path"])) : y("", !0),
        s("div", _M, [
          b(tm, { name: "toast" }, {
            default: h(() => [
              (a(!0), i(B, null, ye(Re.value, (et) => (a(), i("div", {
                key: et.id,
                class: Be(["toast", et.type])
              }, [
                s("span", kM, m(et.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), $M = /* @__PURE__ */ Ie(bM, [["__scopeId", "data-v-93abae9b"]]), CM = { class: "item-header" }, xM = { class: "item-info" }, SM = { class: "filename" }, IM = { class: "metadata" }, EM = { class: "size" }, TM = {
  key: 0,
  class: "type"
}, MM = { class: "item-actions" }, PM = {
  key: 0,
  class: "progress-section"
}, RM = { class: "progress-bar" }, LM = { class: "progress-stats" }, DM = { class: "downloaded" }, NM = { class: "speed" }, OM = {
  key: 0,
  class: "eta"
}, UM = {
  key: 1,
  class: "status-msg paused"
}, AM = {
  key: 2,
  class: "status-msg queued"
}, zM = {
  key: 3,
  class: "status-msg completed"
}, FM = {
  key: 4,
  class: "status-msg failed"
}, VM = {
  key: 0,
  class: "retries"
}, BM = /* @__PURE__ */ Ce({
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
      class: Be(["download-item", `status-${e.item.status}`])
    }, [
      s("div", CM, [
        s("div", xM, [
          s("div", SM, m(e.item.filename), 1),
          s("div", IM, [
            s("span", EM, m(n(e.item.size)), 1),
            e.item.type ? (a(), i("span", TM, m(e.item.type), 1)) : y("", !0)
          ])
        ]),
        s("div", MM, [
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
      e.item.status === "downloading" ? (a(), i("div", PM, [
        s("div", RM, [
          s("div", {
            class: "progress-fill",
            style: Lt({ width: `${e.item.progress}%` })
          }, null, 4)
        ]),
        s("div", LM, [
          s("span", DM, m(n(e.item.downloaded)) + " / " + m(n(e.item.size)), 1),
          s("span", NM, m(l(e.item.speed)), 1),
          e.item.eta > 0 ? (a(), i("span", OM, m(r(e.item.eta)), 1)) : y("", !0)
        ])
      ])) : e.item.status === "paused" ? (a(), i("div", UM, " Paused - click Resume to download ")) : e.item.status === "queued" ? (a(), i("div", AM, " Waiting in queue... ")) : e.item.status === "completed" ? (a(), i("div", zM, " ✓ Downloaded ")) : e.item.status === "failed" ? (a(), i("div", FM, [
        S(" ✗ " + m(e.item.error || "Failed") + " ", 1),
        e.item.retries > 0 ? (a(), i("span", VM, "(" + m(e.item.retries) + " retries)", 1)) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), Fo = /* @__PURE__ */ Ie(BM, [["__scopeId", "data-v-2110df65"]]), WM = { class: "queue-title" }, GM = { class: "count" }, jM = { class: "queue-actions" }, HM = { class: "action-label" }, qM = {
  key: 0,
  class: "overall-progress"
}, KM = { class: "progress-bar" }, JM = {
  key: 0,
  class: "current-mini"
}, QM = { class: "filename" }, YM = { class: "speed" }, XM = {
  key: 1,
  class: "queue-content"
}, ZM = {
  key: 0,
  class: "section"
}, eP = {
  key: 1,
  class: "section"
}, tP = { class: "section-header" }, sP = { class: "section-label paused" }, oP = { class: "items-list" }, nP = {
  key: 2,
  class: "section"
}, aP = { class: "section-header" }, lP = { class: "section-label" }, iP = { class: "items-list" }, rP = {
  key: 3,
  class: "section"
}, cP = { class: "section-header" }, uP = { class: "section-label" }, dP = { class: "items-list" }, mP = {
  key: 4,
  class: "section"
}, fP = { class: "section-header" }, vP = { class: "section-label failed" }, pP = { class: "items-list" }, gP = /* @__PURE__ */ Ce({
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
      cancelDownload: v,
      retryDownload: f,
      resumeDownload: p,
      resumeAllPaused: w,
      removeItem: g,
      clearCompleted: _
    } = Do(), C = k(!1);
    let $ = null;
    vt(
      () => ({
        active: d.value,
        failed: r.value.length,
        paused: u.value.length,
        completed: l.value.length
      }),
      (P, O) => {
        $ && (clearTimeout($), $ = null);
        const F = P.active === 0 && P.failed === 0 && P.paused === 0 && P.completed > 0, W = O && (O.active > 0 || O.paused > 0);
        F && W && ($ = setTimeout(() => {
          _(), $ = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const x = R(() => {
      var F;
      if (t.items.length === 0) return 0;
      const P = l.value.length, O = ((F = o.value) == null ? void 0 : F.progress) || 0;
      return Math.round((P + O / 100) / t.items.length * 100);
    });
    function I(P) {
      v(P);
    }
    function M(P) {
      return P === 0 ? "..." : `${(P / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (P, O) => (a(), L(Jt, { to: "body" }, [
      st(c) ? (a(), i("div", {
        key: 0,
        class: Be(["model-download-queue", { minimized: !C.value }])
      }, [
        s("div", {
          class: "queue-header",
          onClick: O[0] || (O[0] = (F) => C.value = !C.value)
        }, [
          s("div", WM, [
            O[4] || (O[4] = s("span", { class: "icon" }, "↓", -1)),
            O[5] || (O[5] = s("span", { class: "title" }, "Downloads", -1)),
            s("span", GM, "(" + m(st(d)) + "/" + m(st(t).items.length) + ")", 1)
          ]),
          s("div", jM, [
            s("span", HM, m(C.value ? "minimize" : "expand"), 1)
          ])
        ]),
        C.value ? (a(), i("div", XM, [
          st(o) ? (a(), i("div", ZM, [
            O[6] || (O[6] = s("div", { class: "section-label" }, "Downloading", -1)),
            b(Fo, {
              item: st(o),
              onCancel: O[1] || (O[1] = (F) => I(st(o).id))
            }, null, 8, ["item"])
          ])) : y("", !0),
          st(u).length > 0 ? (a(), i("div", eP, [
            s("div", tP, [
              s("span", sP, "Paused (" + m(st(u).length) + ")", 1),
              s("button", {
                class: "resume-all-btn",
                onClick: O[2] || (O[2] = //@ts-ignore
                (...F) => st(w) && st(w)(...F))
              }, "Resume All")
            ]),
            s("div", oP, [
              (a(!0), i(B, null, ye(st(u), (F) => (a(), L(Fo, {
                key: F.id,
                item: F,
                onResume: (W) => st(p)(F.id),
                onRemove: (W) => st(g)(F.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          st(n).length > 0 ? (a(), i("div", nP, [
            s("div", aP, [
              s("span", lP, "Queued (" + m(st(n).length) + ")", 1)
            ]),
            s("div", iP, [
              (a(!0), i(B, null, ye(st(n), (F) => (a(), L(Fo, {
                key: F.id,
                item: F,
                onCancel: (W) => I(F.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : y("", !0),
          st(l).length > 0 ? (a(), i("div", rP, [
            s("div", cP, [
              s("span", uP, "Completed (" + m(st(l).length) + ")", 1),
              s("button", {
                class: "clear-btn",
                onClick: O[3] || (O[3] = //@ts-ignore
                (...F) => st(_) && st(_)(...F))
              }, "Clear")
            ]),
            s("div", dP, [
              (a(!0), i(B, null, ye(st(l).slice(0, 3), (F) => (a(), L(Fo, {
                key: F.id,
                item: F,
                onRemove: (W) => st(g)(F.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          st(r).length > 0 ? (a(), i("div", mP, [
            s("div", fP, [
              s("span", vP, "Failed (" + m(st(r).length) + ")", 1)
            ]),
            s("div", pP, [
              (a(!0), i(B, null, ye(st(r), (F) => (a(), L(Fo, {
                key: F.id,
                item: F,
                onRetry: (W) => st(f)(F.id),
                onRemove: (W) => st(g)(F.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : y("", !0)
        ])) : (a(), i("div", qM, [
          s("div", KM, [
            s("div", {
              class: "progress-fill",
              style: Lt({ width: `${x.value}%` })
            }, null, 4)
          ]),
          st(o) ? (a(), i("div", JM, [
            s("span", QM, m(st(o).filename), 1),
            s("span", YM, m(M(st(o).speed)), 1)
          ])) : y("", !0)
        ]))
      ], 2)) : y("", !0)
    ]));
  }
}), hP = /* @__PURE__ */ Ie(gP, [["__scopeId", "data-v-3a3c9607"]]), yP = { class: "detail-header" }, wP = { class: "item-count" }, _P = { class: "resource-list" }, kP = { class: "item-info" }, bP = { class: "item-name" }, $P = {
  key: 0,
  class: "item-subtitle"
}, CP = {
  key: 0,
  class: "installing-badge"
}, xP = ["title"], SP = {
  key: 2,
  class: "installed-badge"
}, IP = {
  key: 3,
  class: "queued-badge"
}, EP = {
  key: 4,
  class: "action-buttons"
}, TP = {
  key: 1,
  class: "no-action"
}, MP = /* @__PURE__ */ Ce({
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
        var _, C;
        return o.queuedItems.has(g.id) || ((_ = o.installedItems) == null ? void 0 : _.has(g.id)) || ((C = o.failedItems) == null ? void 0 : C.has(g.id));
      }
    )), u = R(() => r.value ? "All Queued" : o.itemType === "models" ? "Download All" : "Install All");
    function c(g) {
      return o.queuedItems.has(g.id);
    }
    function d(g) {
      return o.installingItem === g.id;
    }
    function v(g) {
      var _;
      return ((_ = o.installedItems) == null ? void 0 : _.has(g.id)) ?? !1;
    }
    function f(g) {
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
    return (g, _) => (a(), L($t, {
      title: e.title,
      size: "md",
      onClose: _[2] || (_[2] = (C) => n("close"))
    }, {
      body: h(() => [
        s("div", yP, [
          s("span", wP, m(e.items.length) + " " + m(e.items.length === 1 ? "item" : "items"), 1),
          l.value.length > 1 ? (a(), L(Oe, {
            key: 0,
            size: "sm",
            variant: "secondary",
            disabled: r.value,
            onClick: _[0] || (_[0] = (C) => n("bulk-action"))
          }, {
            default: h(() => [
              S(m(u.value), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : y("", !0)
        ]),
        s("div", _P, [
          (a(!0), i(B, null, ye(e.items, (C) => (a(), i("div", {
            key: C.id,
            class: "resource-item"
          }, [
            s("div", kP, [
              s("span", bP, m(C.name), 1),
              C.subtitle ? (a(), i("span", $P, m(C.subtitle), 1)) : y("", !0)
            ]),
            C.canAction ? (a(), i(B, { key: 0 }, [
              d(C) ? (a(), i("span", CP, "Installing...")) : f(C) ? (a(), i("span", {
                key: 1,
                class: "failed-badge",
                title: p(C)
              }, "Failed ⚠", 8, xP)) : v(C) ? (a(), i("span", SP, "Installed")) : c(C) ? (a(), i("span", IP, "Queued")) : (a(), i("div", EP, [
                (a(!0), i(B, null, ye(w(C), ($) => (a(), L(Oe, {
                  key: `${C.id}-${$.key}`,
                  size: "sm",
                  variant: $.variant || "secondary",
                  onClick: (x) => n("action", C, $.key)
                }, {
                  default: h(() => [
                    S(m($.label), 1)
                  ]),
                  _: 2
                }, 1032, ["variant", "onClick"]))), 128))
              ]))
            ], 64)) : (a(), i("span", TP, m(C.actionDisabledReason || "Not available"), 1))
          ]))), 128))
        ])
      ]),
      footer: h(() => [
        b(Oe, {
          variant: "secondary",
          onClick: _[1] || (_[1] = (C) => n("close"))
        }, {
          default: h(() => [..._[3] || (_[3] = [
            S("Close", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), PP = /* @__PURE__ */ Ie(MP, [["__scopeId", "data-v-ec7e9202"]]), RP = {
  key: 0,
  class: "loading-state"
}, LP = {
  key: 1,
  class: "analysis-results"
}, DP = {
  key: 0,
  class: "section"
}, NP = { class: "section-header" }, OP = { class: "section-title" }, UP = { class: "item-list" }, AP = { class: "package-info" }, zP = { class: "package-name" }, FP = { class: "node-count" }, VP = {
  key: 1,
  class: "installing-badge"
}, BP = {
  key: 2,
  class: "queued-badge"
}, WP = ["title"], GP = {
  key: 4,
  class: "installed-badge"
}, jP = {
  key: 1,
  class: "section"
}, HP = { class: "section-header" }, qP = { class: "section-title" }, KP = { class: "item-list" }, JP = { class: "node-type" }, QP = {
  key: 0,
  class: "overflow-note"
}, YP = {
  key: 2,
  class: "section"
}, XP = { class: "section-header" }, ZP = { class: "section-title" }, e7 = { class: "item-list" }, t7 = { class: "node-type" }, s7 = { class: "not-found" }, o7 = {
  key: 0,
  class: "overflow-note"
}, n7 = {
  key: 3,
  class: "section"
}, a7 = { class: "section-header" }, l7 = { class: "section-title" }, i7 = { class: "item-list" }, r7 = { class: "package-info community-info" }, c7 = { class: "community-title-row" }, u7 = { class: "package-name" }, d7 = { class: "node-count" }, m7 = { class: "community-mapping-note" }, f7 = { key: 0 }, v7 = {
  key: 0,
  class: "community-actions"
}, p7 = {
  key: 1,
  class: "installing-badge"
}, g7 = {
  key: 2,
  class: "queued-badge"
}, h7 = ["title"], y7 = {
  key: 4,
  class: "installed-badge"
}, w7 = ["title"], _7 = {
  key: 1,
  class: "no-url"
}, k7 = {
  key: 4,
  class: "section"
}, b7 = { class: "section-header" }, $7 = { class: "section-title" }, C7 = { class: "item-list" }, x7 = { class: "model-info" }, S7 = { class: "model-name" }, I7 = {
  key: 1,
  class: "queued-badge"
}, E7 = {
  key: 1,
  class: "no-url"
}, T7 = { class: "dont-show-again" }, M7 = 3e4, P7 = /* @__PURE__ */ Ce({
  __name: "MissingResourcesPopup",
  setup(e) {
    const t = k(!1), o = k(null), n = k(null), l = k(!1), r = k(/* @__PURE__ */ new Set()), u = k(/* @__PURE__ */ new Set()), c = k(/* @__PURE__ */ new Map()), d = k(/* @__PURE__ */ new Set()), v = k(!1), f = k(null), p = k(0), w = k(null), g = k(/* @__PURE__ */ new Set()), _ = k(/* @__PURE__ */ new Map()), C = k(/* @__PURE__ */ new Map()), { addToQueue: $ } = Do(), { queueNodeInstall: x } = rt(), I = R(() => {
      var Y;
      return ((Y = n.value) == null ? void 0 : Y.package_aliases) || {};
    });
    function M(Y) {
      if (!Y) return null;
      const he = I.value;
      let T = Y;
      const N = /* @__PURE__ */ new Set();
      for (; he[T] && !N.has(T); )
        N.add(T), T = he[T];
      return T;
    }
    function P(Y, he) {
      return Y instanceof Error && Y.message ? Y.message : typeof Y == "string" && Y.trim().length > 0 ? Y : he;
    }
    function O(Y) {
      for (const [he, T] of _.value.entries())
        T === Y && _.value.delete(he);
    }
    function F(Y) {
      if (!C.value.has(Y)) return;
      const he = C.value.get(Y);
      clearTimeout(he), C.value.delete(Y);
    }
    function W() {
      for (const Y of C.value.values())
        clearTimeout(Y);
      C.value = /* @__PURE__ */ new Map();
    }
    function D(Y) {
      F(Y);
      const he = setTimeout(() => {
        if (C.value.delete(Y), !u.value.has(Y)) return;
        O(Y), u.value.delete(Y), f.value === Y && (f.value = null), c.value.set(Y, "Queue timeout — please retry"), console.warn("[ComfyGit] Queue timeout waiting for cm-task-started:", Y);
      }, M7);
      C.value.set(Y, he);
    }
    function K(Y) {
      const he = `Cannot install "${Y.title}" - package_id is missing`;
      c.value.set(Y.item_id, he), o.value = he, console.warn("[ComfyGit] Community install requested without package_id:", Y);
    }
    const ue = R(() => se.value.length > 0 || we.value.length > 0 || te.value.length > 0 || H.value.length > 0 || Se.value.length > 0), se = R(() => {
      var T, N;
      if (!((T = n.value) != null && T.nodes)) return [];
      const Y = /* @__PURE__ */ new Map(), he = (n.value.nodes.resolved || []).filter((J) => {
        var Ee;
        return !J.is_installed && ((Ee = J.package) == null ? void 0 : Ee.package_id);
      });
      for (const J of he) {
        const Ee = M(J.package.package_id);
        if (!Ee) continue;
        Y.has(Ee) || Y.set(Ee, {
          package_id: Ee,
          title: J.package.title || Ee,
          node_count: 0,
          node_types: [],
          repository: J.package.repository || null,
          latest_version: J.package.latest_version || null
        });
        const Re = Y.get(Ee);
        Re.node_count++, Re.node_types.push(((N = J.reference) == null ? void 0 : N.node_type) || J.node_type);
      }
      return Array.from(Y.values());
    }), Q = R(() => se.value.reduce((Y, he) => Y + he.node_count, 0)), we = R(() => {
      var Y;
      return (Y = n.value) != null && Y.nodes ? (n.value.nodes.unresolved || []).map((he) => {
        var T;
        return {
          node_type: ((T = he.reference) == null ? void 0 : T.node_type) || he.node_type
        };
      }) : [];
    }), te = R(() => {
      var he;
      if (!((he = n.value) != null && he.nodes)) return [];
      const Y = n.value.node_guidance || {};
      return (n.value.nodes.version_gated || []).map((T) => {
        var J;
        const N = ((J = T.reference) == null ? void 0 : J.node_type) || T.node_type;
        return {
          node_type: N,
          guidance: T.guidance || Y[N] || null
        };
      });
    }), H = R(() => {
      var T, N, J, Ee, Re, Je, Pe, Ye;
      if (!((T = n.value) != null && T.nodes)) return [];
      const Y = n.value.node_guidance || {}, he = /* @__PURE__ */ new Map();
      for (const ot of n.value.nodes.uninstallable || []) {
        const xt = ((N = ot.reference) == null ? void 0 : N.node_type) || ot.node_type, zt = M(((J = ot.package) == null ? void 0 : J.package_id) || null), ne = zt || `node:${xt}`;
        he.has(ne) || he.set(ne, {
          item_id: ne,
          node_type: xt,
          title: ((Ee = ot.package) == null ? void 0 : Ee.title) || zt || xt,
          node_count: 0,
          package_id: zt,
          repository: ((Re = ot.package) == null ? void 0 : Re.repository) || null,
          latest_version: ((Je = ot.package) == null ? void 0 : Je.latest_version) || null,
          guidance: ot.guidance || Y[xt] || null
        });
        const U = he.get(ne);
        U.node_count++, U.guidance || (U.guidance = ot.guidance || Y[xt] || null), !U.repository && ((Pe = ot.package) != null && Pe.repository) && (U.repository = ot.package.repository), !U.latest_version && ((Ye = ot.package) != null && Ye.latest_version) && (U.latest_version = ot.package.latest_version);
      }
      return Array.from(he.values());
    }), q = R(() => H.value.filter((Y) => !!ae(Y))), _e = R(() => H.value.length >= 5 ? H.value.slice(0, 4) : H.value), ee = R(() => q.value.length > 0 && q.value.every((Y) => {
      const he = Y.package_id;
      return r.value.has(he) || u.value.has(he) || c.value.has(he);
    }));
    function me(Y) {
      const he = [];
      return z(Y) && he.push({ key: "install_registry", label: "Install from Registry", variant: "secondary" }), Y.repository && he.push({
        key: "install_git",
        label: "Install via Git",
        variant: z(Y) ? "ghost" : "secondary"
      }), he;
    }
    function z(Y) {
      return !!Y.latest_version;
    }
    function ae(Y) {
      return Y.package_id ? z(Y) ? "registry" : Y.repository ? "git" : null : null;
    }
    const Se = R(() => {
      var J;
      if (!((J = n.value) != null && J.models)) return [];
      const Y = (n.value.models.resolved || []).filter(
        (Ee) => Ee.match_type === "download_intent" || Ee.match_type === "property_download_intent" || Ee.match_type === "not_found"
      ).map((Ee) => {
        var Re, Je, Pe, Ye;
        return {
          filename: ((Je = (Re = Ee.reference) == null ? void 0 : Re.widget_value) == null ? void 0 : Je.split("/").pop()) || ((Pe = Ee.reference) == null ? void 0 : Pe.widget_value) || Ee.widget_value,
          widget_value: ((Ye = Ee.reference) == null ? void 0 : Ye.widget_value) || Ee.widget_value,
          // Backend returns download_source as URL string directly, and target_path at top level
          url: Ee.download_source || null,
          targetPath: Ee.target_path || null,
          canDownload: !!(Ee.download_source && Ee.target_path)
        };
      }), he = (n.value.models.unresolved || []).map((Ee) => {
        var Re, Je, Pe, Ye;
        return {
          filename: ((Je = (Re = Ee.reference) == null ? void 0 : Re.widget_value) == null ? void 0 : Je.split("/").pop()) || ((Pe = Ee.reference) == null ? void 0 : Pe.widget_value) || Ee.widget_value,
          widget_value: ((Ye = Ee.reference) == null ? void 0 : Ye.widget_value) || Ee.widget_value,
          url: null,
          targetPath: null,
          canDownload: !1
        };
      }), T = /* @__PURE__ */ new Map(), N = [];
      for (const Ee of Y) {
        if (!Ee.url) {
          N.push(Ee);
          continue;
        }
        const Re = `${Ee.filename}::${Ee.url}`, Je = T.get(Re);
        if (!Je) {
          T.set(Re, Ee);
          continue;
        }
        !Je.targetPath && Ee.targetPath && (Je.targetPath = Ee.targetPath), !Je.canDownload && Ee.canDownload && (Je.canDownload = Ee.canDownload);
      }
      return [...T.values(), ...N, ...he];
    }), pe = R(() => Se.value.filter((Y) => Y.canDownload)), Ne = R(() => se.value.length >= 5 ? se.value.slice(0, 4) : se.value), ze = R(() => Se.value.length >= 5 ? Se.value.slice(0, 4) : Se.value), Ae = R(() => se.value.length > 0 && se.value.every(
      (Y) => r.value.has(Y.package_id) || u.value.has(Y.package_id) || c.value.has(Y.package_id)
    )), re = R(() => pe.value.length > 0 && pe.value.every((Y) => d.value.has(Y.url))), oe = R(() => se.value.length > 0 || q.value.length > 0 || pe.value.length > 0), Le = R(() => {
      const Y = (se.value.length === 0 || Ae.value) && (q.value.length === 0 || ee.value), he = pe.value.length === 0 || re.value;
      return Y && he;
    }), fe = R(() => w.value === "models" ? `Missing Models (${Se.value.length})` : w.value === "packages" ? `Missing Custom Nodes (${Q.value})` : w.value === "community" ? `Community-Mapped Packages (${H.value.length})` : ""), le = R(() => w.value === "models" ? Se.value.map((Y) => ({
      id: Y.url || Y.widget_value,
      name: Y.filename,
      canAction: Y.canDownload,
      actionDisabledReason: Y.canDownload ? void 0 : "Manual download required"
    })) : w.value === "packages" ? se.value.map((Y) => ({
      id: Y.package_id,
      name: Y.title,
      subtitle: `(${Y.node_count} ${Y.node_count === 1 ? "node" : "nodes"})`,
      canAction: !0
    })) : w.value === "community" ? H.value.map((Y) => ({
      id: Y.package_id || Y.item_id,
      name: Y.title,
      subtitle: `(${Y.node_count} ${Y.node_count === 1 ? "node" : "nodes"})`,
      canAction: !!ae(Y),
      actionDisabledReason: ae(Y) ? void 0 : "Manual setup required",
      actions: me(Y)
    })) : []);
    function E(Y, he) {
      if (w.value === "models") {
        const T = Se.value.find((N) => N.url === Y.id || N.widget_value === Y.id);
        T && xe(T);
      } else if (w.value === "packages") {
        const T = se.value.find((N) => N.package_id === Y.id);
        T && ce(T);
      } else if (w.value === "community") {
        const T = H.value.find((J) => (J.package_id || J.item_id) === Y.id);
        if (!T) return;
        if (!T.package_id) {
          K({ item_id: T.item_id, title: T.title });
          return;
        }
        const N = he === "install_git" ? "git" : "registry";
        if (N === "registry" && !z(T)) {
          K({ item_id: T.item_id, title: T.title });
          return;
        }
        $e(T, N);
      }
    }
    function A() {
      w.value === "models" ? ve() : w.value === "packages" ? Z() : w.value === "community" && G();
    }
    async function ce(Y) {
      return Te(Y.package_id, Y.latest_version, "registry");
    }
    async function $e(Y, he) {
      return Y.package_id ? he === "registry" && !z(Y) ? (c.value.set(Y.package_id, "No installable registry version is available. Use Git install if a repository is available."), !1) : he === "git" && !Y.repository ? (c.value.set(Y.package_id, "No Git repository is available for this community mapping."), !1) : Te(Y.package_id, Y.latest_version, he, Y.repository) : (K({ item_id: Y.item_id, title: Y.title }), !1);
    }
    async function Te(Y, he, T, N) {
      const J = M(Y) || Y, Ee = he || "latest";
      if (r.value.has(J) || u.value.has(J) || c.value.has(J))
        return !0;
      Qe(), f.value = J;
      let Re = null;
      try {
        const Je = {
          id: J,
          version: Ee,
          selected_version: Ee,
          mode: "remote",
          channel: "default"
        };
        T === "git" && N && (Je.repository = N, Je.install_source = "git");
        const { ui_id: Pe } = await x(Je, {
          beforeQueueStart: (Ye) => {
            Re = Ye, _.value.set(Ye, J), u.value.add(J), D(J), console.log("[ComfyGit] Registered pending install:", {
              ui_id: Ye,
              packageId: J,
              pendingInstalls: Array.from(_.value.entries())
            });
          }
        });
        return Re || (Re = Pe, _.value.set(Pe, J), u.value.add(J), D(J), console.log("[ComfyGit] Registered pending install (fallback):", {
          ui_id: Pe,
          packageId: J,
          pendingInstalls: Array.from(_.value.entries())
        })), !0;
      } catch (Je) {
        const Pe = P(Je, "Failed to queue install request");
        return console.error("[ComfyGit] Failed to queue package install:", Je), Re && _.value.delete(Re), O(J), F(J), u.value.delete(J), c.value.set(J, Pe), !1;
      } finally {
        f.value = null;
      }
    }
    function xe(Y) {
      !Y.url || !Y.targetPath || d.value.has(Y.url) || ($([{
        workflow: "unsaved",
        filename: Y.filename,
        url: Y.url,
        targetPath: Y.targetPath
      }]), d.value.add(Y.url));
    }
    async function Z() {
      const Y = { attempted: 0, failed: 0 };
      for (const he of se.value)
        !r.value.has(he.package_id) && !u.value.has(he.package_id) && !c.value.has(he.package_id) && (Y.attempted++, await ce(he) || Y.failed++);
      return Y;
    }
    async function G() {
      const Y = { attempted: 0, failed: 0 };
      for (const he of q.value) {
        const T = he.package_id;
        if (!r.value.has(T) && !u.value.has(T) && !c.value.has(T)) {
          Y.attempted++;
          const N = ae(he);
          (N ? await $e(he, N) : !1) || Y.failed++;
        }
      }
      return Y;
    }
    function ve() {
      const Y = pe.value.filter(
        (he) => !d.value.has(he.url)
      );
      if (Y.length === 0) return 0;
      $(Y.map((he) => ({
        workflow: "unsaved",
        filename: he.filename,
        url: he.url,
        targetPath: he.targetPath
      })));
      for (const he of Y)
        d.value.add(he.url);
      return Y.length;
    }
    async function ge() {
      const Y = await Z(), he = await G();
      ve();
      const T = Y.attempted + he.attempted, N = Y.failed + he.failed;
      if (T > 0 && N > 0) {
        const J = T - N;
        o.value = `${J} of ${T} installs queued, ${N} failed`;
      }
    }
    function He() {
      v.value ? localStorage.setItem("comfygit:popup-disabled", "true") : localStorage.removeItem("comfygit:popup-disabled");
    }
    async function We(Y) {
      var J, Ee;
      if (localStorage.getItem("comfygit:popup-disabled") === "true") {
        console.log("[ComfyGit] Popup globally disabled");
        return;
      }
      const he = Y == null ? void 0 : Y.id;
      if (he && g.value.has(he)) {
        console.log(`[ComfyGit] Already shown popup for workflow ${he} this session`);
        return;
      }
      const T = window.app, N = (J = T == null ? void 0 : T.extensionManager) == null ? void 0 : J.workflow;
      if (N) {
        let Pe = !1;
        for (let Ye = 0; Ye < 20; Ye++) {
          const ot = N.activeWorkflow;
          if (!ot) {
            await new Promise((ne) => setTimeout(ne, 50));
            continue;
          }
          const xt = (Ee = ot.activeState) == null ? void 0 : Ee.id;
          if (!(he && xt === he)) {
            Ye < 19 && await new Promise((ne) => setTimeout(ne, 50));
            continue;
          }
          if (Pe = !0, ot.isPersisted === !0) {
            console.log(`[ComfyGit] Skipping popup for saved workflow: ${ot.filename}`), he && g.value.add(he);
            return;
          }
          break;
        }
        Pe || console.warn("[ComfyGit] Could not verify workflow state, showing popup as fallback");
      }
      t.value = !0, o.value = null, W(), r.value = /* @__PURE__ */ new Set(), u.value = /* @__PURE__ */ new Set(), c.value = /* @__PURE__ */ new Map(), d.value = /* @__PURE__ */ new Set(), _.value = /* @__PURE__ */ new Map(), v.value = !1, p.value = 0;
      try {
        const Re = await fetch("/v2/comfygit/workflow/analyze-json", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ workflow: Y, name: "unsaved" })
        });
        if (!Re.ok) {
          const Je = await Re.json();
          throw new Error(Je.error || "Failed to analyze workflow");
        }
        n.value = await Re.json(), ue.value && (l.value = !0, he && g.value.add(he));
      } catch (Re) {
        console.error("[ComfyGit] Failed to analyze workflow:", Re);
      } finally {
        t.value = !1;
      }
    }
    function ke() {
      W(), l.value = !1, n.value = null;
    }
    function X(Y) {
      const { workflow: he } = Y.detail;
      he && We(he);
    }
    function Fe(Y) {
      var N;
      const he = (N = Y.detail) == null ? void 0 : N.ui_id;
      console.log("[ComfyGit] cm-task-started received:", {
        taskId: he,
        pendingInstalls: Array.from(_.value.entries()),
        eventDetail: Y.detail
      });
      const T = _.value.get(he);
      T ? (F(T), f.value = T, console.log("[ComfyGit] Installing package:", T)) : console.warn("[ComfyGit] cm-task-started: No matching package for taskId:", he);
    }
    function De(Y) {
      var J, Ee, Re, Je, Pe, Ye, ot;
      const he = (J = Y.detail) == null ? void 0 : J.ui_id, T = (Re = (Ee = Y.detail) == null ? void 0 : Ee.status) == null ? void 0 : Re.status_str;
      console.log("[ComfyGit] cm-task-completed received:", {
        taskId: he,
        status: T,
        pendingInstalls: Array.from(_.value.entries()),
        eventDetail: Y.detail
      });
      const N = _.value.get(he);
      if (N) {
        if (F(N), _.value.delete(he), u.value.delete(N), f.value === N && (f.value = null), T === "success")
          r.value.add(N), p.value++, console.log("[ComfyGit] Package installed successfully:", N);
        else {
          const xt = ((Ye = (Pe = (Je = Y.detail) == null ? void 0 : Je.status) == null ? void 0 : Pe.messages) == null ? void 0 : Ye[0]) || ((ot = Y.detail) == null ? void 0 : ot.result) || "Unknown error";
          c.value.set(N, xt), console.error("[ComfyGit] Package install failed:", N, xt);
        }
        _.value.size === 0 && p.value > 0 && (console.log("[ComfyGit] All installs complete, dispatching nodes-installed event:", p.value), window.dispatchEvent(new CustomEvent("comfygit:nodes-installed", {
          detail: { count: p.value }
        })));
      } else
        console.warn("[ComfyGit] cm-task-completed: No matching package for taskId:", he);
    }
    let qe = null;
    function Ve() {
      return qe || (qe = Lo()), qe;
    }
    let Ue = !1;
    function Qe() {
      if (Ue) return !0;
      const Y = Ve();
      return Y ? (Y.addEventListener("cm-task-started", Fe), Y.addEventListener("cm-task-completed", De), Y.addEventListener("comfygit:workflow-changed", gt), Ue = !0, console.log("[ComfyGit] Registered WebSocket event listeners for install tracking"), !0) : (console.warn("[ComfyGit] Could not register WebSocket listeners - API not available"), !1);
    }
    function gt(Y) {
      const { change_type: he } = Y.detail;
      (he === "created" || he === "modified") && l.value && (W(), l.value = !1, console.log("[ComfyGit] Workflow saved, auto-dismissing popup"));
    }
    return at(() => {
      window.addEventListener("comfygit:workflow-loaded", X);
    }), Po(() => {
      if (W(), window.removeEventListener("comfygit:workflow-loaded", X), Ue) {
        const Y = Ve();
        Y && (Y.removeEventListener("cm-task-started", Fe), Y.removeEventListener("cm-task-completed", De), Y.removeEventListener("comfygit:workflow-changed", gt)), Ue = !1;
      }
    }), (Y, he) => (a(), i(B, null, [
      l.value ? (a(), L($t, {
        key: 0,
        title: "Missing Dependencies",
        size: "md",
        loading: t.value,
        error: o.value || void 0,
        onClose: ke
      }, {
        body: h(() => [
          t.value ? (a(), i("div", RP, [...he[5] || (he[5] = [
            s("div", { class: "loading-spinner" }, null, -1),
            s("span", null, "Analyzing workflow...", -1)
          ])])) : n.value && ue.value ? (a(), i("div", LP, [
            se.value.length > 0 ? (a(), i("div", DP, [
              s("div", NP, [
                s("span", OP, "Missing Custom Nodes (" + m(Q.value) + ")", 1),
                se.value.length > 1 ? (a(), L(Oe, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: Ae.value,
                  onClick: Z
                }, {
                  default: h(() => [
                    S(m(Ae.value ? "All Queued" : "Install All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0)
              ]),
              s("div", UP, [
                (a(!0), i(B, null, ye(Ne.value, (T) => (a(), i("div", {
                  key: T.package_id,
                  class: "package-item"
                }, [
                  s("div", AP, [
                    s("span", zP, m(T.title), 1),
                    s("span", FP, "(" + m(T.node_count) + " " + m(T.node_count === 1 ? "node" : "nodes") + ")", 1)
                  ]),
                  !r.value.has(T.package_id) && !u.value.has(T.package_id) && !c.value.has(T.package_id) ? (a(), L(Oe, {
                    key: 0,
                    size: "sm",
                    variant: "secondary",
                    disabled: f.value === T.package_id,
                    onClick: (N) => ce(T)
                  }, {
                    default: h(() => [
                      S(m(f.value === T.package_id ? "Queueing..." : "Install"), 1)
                    ]),
                    _: 2
                  }, 1032, ["disabled", "onClick"])) : f.value === T.package_id ? (a(), i("span", VP, "Installing...")) : u.value.has(T.package_id) ? (a(), i("span", BP, "Queued")) : c.value.has(T.package_id) ? (a(), i("span", {
                    key: 3,
                    class: "failed-badge",
                    title: c.value.get(T.package_id)
                  }, "Failed ⚠", 8, WP)) : (a(), i("span", GP, "Installed"))
                ]))), 128)),
                se.value.length >= 5 ? (a(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: he[0] || (he[0] = (T) => w.value = "packages")
                }, [
                  s("span", null, "Show all " + m(se.value.length) + " packages...", 1),
                  he[6] || (he[6] = s("span", { class: "show-all-arrow" }, "→", -1))
                ])) : y("", !0)
              ])
            ])) : y("", !0),
            we.value.length > 0 ? (a(), i("div", jP, [
              s("div", HP, [
                s("span", qP, "Unknown Nodes (" + m(we.value.length) + ")", 1)
              ]),
              s("div", KP, [
                (a(!0), i(B, null, ye(we.value.slice(0, 5), (T) => (a(), i("div", {
                  key: T.node_type,
                  class: "item"
                }, [
                  s("code", JP, m(T.node_type), 1),
                  he[7] || (he[7] = s("span", { class: "not-found" }, "Not found in registry", -1))
                ]))), 128)),
                we.value.length > 5 ? (a(), i("div", QP, " ...and " + m(we.value.length - 5) + " more ", 1)) : y("", !0)
              ])
            ])) : y("", !0),
            te.value.length > 0 ? (a(), i("div", YP, [
              s("div", XP, [
                s("span", ZP, "Requires Newer ComfyUI (" + m(te.value.length) + ")", 1)
              ]),
              s("div", e7, [
                (a(!0), i(B, null, ye(te.value.slice(0, 5), (T) => (a(), i("div", {
                  key: `vg-${T.node_type}`,
                  class: "item"
                }, [
                  s("code", t7, m(T.node_type), 1),
                  s("span", s7, m(T.guidance || "Requires a newer ComfyUI version"), 1)
                ]))), 128)),
                te.value.length > 5 ? (a(), i("div", o7, " ...and " + m(te.value.length - 5) + " more ", 1)) : y("", !0)
              ])
            ])) : y("", !0),
            H.value.length > 0 ? (a(), i("div", n7, [
              s("div", a7, [
                s("span", l7, "Community-Mapped Packages (" + m(H.value.length) + ")", 1),
                q.value.length > 1 ? (a(), L(Oe, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: ee.value,
                  onClick: G
                }, {
                  default: h(() => [
                    S(m(ee.value ? "All Queued" : "Install All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0)
              ]),
              s("div", i7, [
                (a(!0), i(B, null, ye(_e.value, (T) => (a(), i("div", {
                  key: `community-${T.item_id}`,
                  class: "package-item"
                }, [
                  s("div", r7, [
                    s("div", c7, [
                      s("span", u7, m(T.title), 1),
                      s("span", d7, "(" + m(T.node_count) + " " + m(T.node_count === 1 ? "node" : "nodes") + ")", 1)
                    ]),
                    s("div", m7, [
                      he[8] || (he[8] = S(" Found via community mapping — registry metadata may be incomplete", -1)),
                      T.guidance ? (a(), i("span", f7, ". " + m(T.guidance), 1)) : y("", !0)
                    ])
                  ]),
                  T.package_id ? (a(), i(B, { key: 0 }, [
                    !r.value.has(T.package_id) && !u.value.has(T.package_id) && !c.value.has(T.package_id) ? (a(), i("div", v7, [
                      z(T) ? (a(), L(Oe, {
                        key: 0,
                        size: "sm",
                        variant: "secondary",
                        disabled: f.value === T.package_id,
                        onClick: (N) => $e(T, "registry")
                      }, {
                        default: h(() => [
                          S(m(f.value === T.package_id ? "Queueing..." : "Install from Registry"), 1)
                        ]),
                        _: 2
                      }, 1032, ["disabled", "onClick"])) : y("", !0),
                      T.repository ? (a(), L(Oe, {
                        key: 1,
                        size: "sm",
                        variant: z(T) ? "ghost" : "secondary",
                        disabled: f.value === T.package_id,
                        onClick: (N) => $e(T, "git")
                      }, {
                        default: h(() => [...he[9] || (he[9] = [
                          S(" Install via Git ", -1)
                        ])]),
                        _: 1
                      }, 8, ["variant", "disabled", "onClick"])) : y("", !0)
                    ])) : f.value === T.package_id ? (a(), i("span", p7, "Installing...")) : u.value.has(T.package_id) ? (a(), i("span", g7, "Queued")) : c.value.has(T.package_id) ? (a(), i("span", {
                      key: 3,
                      class: "failed-badge",
                      title: c.value.get(T.package_id)
                    }, "Failed ⚠", 8, h7)) : (a(), i("span", y7, "Installed"))
                  ], 64)) : (a(), i(B, { key: 1 }, [
                    c.value.has(T.item_id) ? (a(), i("span", {
                      key: 0,
                      class: "failed-badge",
                      title: c.value.get(T.item_id)
                    }, "Failed ⚠", 8, w7)) : (a(), i("span", _7, "Manual setup required"))
                  ], 64))
                ]))), 128)),
                H.value.length >= 5 ? (a(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: he[1] || (he[1] = (T) => w.value = "community")
                }, [
                  s("span", null, "Show all " + m(H.value.length) + " packages...", 1),
                  he[10] || (he[10] = s("span", { class: "show-all-arrow" }, "→", -1))
                ])) : y("", !0)
              ])
            ])) : y("", !0),
            Se.value.length > 0 ? (a(), i("div", k7, [
              s("div", b7, [
                s("span", $7, "Missing Models (" + m(Se.value.length) + ")", 1),
                pe.value.length > 1 ? (a(), L(Oe, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: re.value,
                  onClick: ve
                }, {
                  default: h(() => [
                    S(m(re.value ? "All Queued" : "Download All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0)
              ]),
              s("div", C7, [
                (a(!0), i(B, null, ye(ze.value, (T) => (a(), i("div", {
                  key: T.widget_value,
                  class: "model-item"
                }, [
                  s("div", x7, [
                    s("span", S7, m(T.filename), 1)
                  ]),
                  T.canDownload ? (a(), i(B, { key: 0 }, [
                    d.value.has(T.url) ? (a(), i("span", I7, "Queued")) : (a(), L(Oe, {
                      key: 0,
                      size: "sm",
                      variant: "secondary",
                      onClick: (N) => xe(T)
                    }, {
                      default: h(() => [...he[11] || (he[11] = [
                        S(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]))
                  ], 64)) : (a(), i("span", E7, "Manual download required"))
                ]))), 128)),
                Se.value.length >= 5 ? (a(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: he[2] || (he[2] = (T) => w.value = "models")
                }, [
                  s("span", null, "Show all " + m(Se.value.length) + " models...", 1),
                  he[12] || (he[12] = s("span", { class: "show-all-arrow" }, "→", -1))
                ])) : y("", !0)
              ])
            ])) : y("", !0),
            s("div", T7, [
              b(Yn, {
                modelValue: v.value,
                "onUpdate:modelValue": [
                  he[3] || (he[3] = (T) => v.value = T),
                  He
                ]
              }, {
                default: h(() => [...he[13] || (he[13] = [
                  S(" Don't show this popup ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])
          ])) : y("", !0)
        ]),
        footer: h(() => [
          b(Oe, {
            variant: "secondary",
            onClick: ke
          }, {
            default: h(() => [...he[14] || (he[14] = [
              S("Dismiss", -1)
            ])]),
            _: 1
          }),
          oe.value ? (a(), L(Oe, {
            key: 0,
            variant: "primary",
            disabled: Le.value,
            onClick: ge
          }, {
            default: h(() => [
              S(m(Le.value ? "All Done" : "Download All"), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : y("", !0)
        ]),
        _: 1
      }, 8, ["loading", "error"])) : y("", !0),
      w.value ? (a(), L(PP, {
        key: 1,
        title: fe.value,
        items: le.value,
        "item-type": w.value,
        "queued-items": w.value === "models" ? d.value : u.value,
        "installed-items": w.value === "models" ? void 0 : r.value,
        "failed-items": w.value === "models" ? void 0 : c.value,
        "installing-item": w.value === "models" ? void 0 : f.value,
        onClose: he[4] || (he[4] = (T) => w.value = null),
        onAction: E,
        onBulkAction: A
      }, null, 8, ["title", "items", "item-type", "queued-items", "installed-items", "failed-items", "installing-item"])) : y("", !0)
    ], 64));
  }
}), R7 = /* @__PURE__ */ Ie(P7, [["__scopeId", "data-v-4e0ac755"]]), L7 = {
  key: 0,
  class: "io-mapping-root"
}, D7 = { class: "io-mapping-visual-layer" }, N7 = { class: "io-mapping-header" }, O7 = { class: "io-mapping-header-main" }, U7 = { class: "io-mapping-subtitle" }, A7 = {
  key: 0,
  class: "io-mapping-hover-summary"
}, z7 = { class: "io-mapping-header-actions" }, F7 = { class: "io-mapping-sidebar" }, V7 = { class: "io-mapping-sidebar-scroll" }, B7 = {
  key: 0,
  class: "io-state-block"
}, W7 = {
  key: 1,
  class: "io-state-block io-state-error"
}, G7 = { class: "contract-meta-section" }, j7 = { class: "contract-meta-toggle-icon" }, H7 = {
  key: 0,
  class: "contract-meta-body"
}, q7 = { class: "contract-summary" }, K7 = { class: "summary-pill" }, J7 = { class: "summary-pill" }, Q7 = { class: "summary-pill" }, Y7 = { class: "mapping-section" }, X7 = { class: "section-header" }, Z7 = {
  key: 0,
  class: "empty-message"
}, eR = ["onClick"], tR = { class: "item-card-title" }, sR = { class: "item-card-meta" }, oR = { class: "item-card-summary" }, nR = { key: 0 }, aR = { class: "mapping-section" }, lR = { class: "section-header" }, iR = {
  key: 0,
  class: "empty-message"
}, rR = ["onClick"], cR = { class: "item-card-title" }, uR = { class: "item-card-meta" }, dR = { class: "item-card-summary" }, mR = { class: "io-mapping-footer" }, fR = { class: "io-mapping-footer-left" }, vR = { class: "io-mapping-footer-right" }, pR = /* @__PURE__ */ Ce({
  __name: "WorkflowIOMappingOverlay",
  props: {
    comfyApp: {}
  },
  setup(e) {
    const t = e, { getWorkflowContract: o, saveWorkflowContract: n, deleteWorkflowContract: l } = rt(), r = k(!1), u = k(""), c = k(!1), d = k(!1), v = k(!1), f = k(null), p = k(null), w = k(null), g = k(!1), _ = k(!1), C = k(null), $ = k(null), x = k(0), I = k(null), M = k(null);
    let P = null;
    const O = [
      "string",
      "integer",
      "number",
      "boolean",
      "enum",
      "image",
      "video",
      "audio",
      "file"
    ], F = [
      { label: "Required", value: "true" },
      { label: "Optional", value: "false" }
    ], W = R(() => {
      var T;
      return ((T = p.value) == null ? void 0 : T.contract_summary.has_contract) === !0;
    }), D = R(() => {
      if (!w.value)
        return { inputs: [], outputs: [] };
      const T = w.value.default_contract || "default";
      return w.value.contracts[T] || (w.value.contracts[T] = { inputs: [], outputs: [] }), w.value.contracts[T];
    }), K = R(() => {
      var N;
      const T = ((N = p.value) == null ? void 0 : N.contract_summary.status) ?? "none";
      return T === "valid" ? "Valid Contract" : T === "incomplete" ? "Incomplete Contract" : "No Contract";
    });
    function ue(T) {
      return T ? JSON.parse(JSON.stringify(T)) : {
        version: 1,
        default_contract: "default",
        contracts: {
          default: { inputs: [], outputs: [] }
        }
      };
    }
    function se(T) {
      return T === "integer" || T === "number";
    }
    function Q(T) {
      return T === "enum";
    }
    function we(T) {
      return T == null ? "" : String(T);
    }
    function te(T) {
      const N = T.trim();
      if (!N) return;
      const J = Number(N);
      return Number.isFinite(J) ? J : void 0;
    }
    function H(T) {
      return (T || []).join(`
`);
    }
    function q(T) {
      return T.split(/[\n,]/).map((N) => N.trim()).filter(Boolean);
    }
    function _e(T) {
      return typeof T == "string" ? T.length > 24 ? `${T.slice(0, 24)}...` : T : String(T);
    }
    function ee(T) {
      return T == null ? "" : String(T);
    }
    function me(T) {
      var J;
      const N = (J = T == null ? void 0 : T.options) == null ? void 0 : J.values;
      return Array.isArray(N) ? N.map((Ee) => String(Ee)).filter(Boolean) : [];
    }
    function z(T, N) {
      var Re;
      const J = (Re = T == null ? void 0 : T.options) == null ? void 0 : Re[N];
      if (J == null || J === "") return;
      const Ee = Number(J);
      return Number.isFinite(Ee) ? Ee : void 0;
    }
    function ae(T, N) {
      return T.trim().toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "") || N;
    }
    function Se(T) {
      if (!w.value) return;
      const N = T.trim() || "default";
      w.value.default_contract = N, w.value.contracts[N] || (w.value.contracts[N] = { inputs: [], outputs: [] });
    }
    function pe(T) {
      const N = String(T ?? "").toLowerCase();
      return N.includes("image") ? "image" : N.includes("video") ? "video" : N.includes("audio") ? "audio" : N.includes("int") ? "integer" : N.includes("float") || N.includes("double") || N.includes("number") ? "number" : N.includes("bool") ? "boolean" : N.includes("combo") || N.includes("enum") ? "enum" : N.includes("string") || N.includes("text") ? "string" : "file";
    }
    function Ne(T) {
      D.value.inputs.splice(T, 1), C.value === T && (C.value = null);
    }
    function ze(T) {
      D.value.outputs.splice(T, 1), $.value === T && ($.value = null);
    }
    function Ae(T) {
      C.value = C.value === T ? null : T, C.value != null && ($.value = null);
    }
    function re(T) {
      $.value = $.value === T ? null : T, $.value != null && (C.value = null);
    }
    function oe(T) {
      const N = typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(String(T)) : String(T);
      return document.querySelector(`[data-node-id="${N}"]`);
    }
    function Le(T) {
      return T instanceof Element ? !!T.closest(".io-mapping-header, .io-mapping-sidebar") : !1;
    }
    function fe(T) {
      var Ee, Re, Je, Pe, Ye, ot;
      if (!(T instanceof Element)) return null;
      const N = T.closest("[data-node-id]"), J = N == null ? void 0 : N.getAttribute("data-node-id");
      return J ? ((Je = (Re = (Ee = t.comfyApp) == null ? void 0 : Ee.graph) == null ? void 0 : Re.getNodeById) == null ? void 0 : Je.call(Re, J)) ?? ((ot = (Ye = (Pe = t.comfyApp) == null ? void 0 : Pe.rootGraph) == null ? void 0 : Ye.getNodeById) == null ? void 0 : ot.call(Ye, J)) ?? null : null;
    }
    function le(T, N) {
      if (N == null || N < 0) return null;
      const J = oe(T);
      return J ? J.querySelectorAll('[data-testid="node-widget"]')[N] ?? null : null;
    }
    function E(T) {
      return !T || T.width <= 0 || T.height <= 0 ? null : {
        left: `${T.left}px`,
        top: `${T.top}px`,
        width: `${T.width}px`,
        height: `${T.height}px`
      };
    }
    function A(T) {
      const N = oe((T == null ? void 0 : T.id) ?? "");
      if (N) return N.getBoundingClientRect();
      const J = t.comfyApp;
      if (!T || typeof (J == null ? void 0 : J.canvasPosToClientPos) != "function") return null;
      const Re = J.canvasPosToClientPos([T.pos[0], T.pos[1] - 32]), Je = J.canvasPosToClientPos([T.pos[0] + T.size[0], T.pos[1] + T.size[1]]);
      return !Re || !Je ? null : new DOMRect(Re[0], Re[1], Je[0] - Re[0], Je[1] - Re[1]);
    }
    function ce(T) {
      var Ye, ot, xt, zt, ne, U, de;
      const N = le(T.node_id, T.widget_idx);
      if (N) return N.getBoundingClientRect();
      const J = ((xt = (ot = (Ye = t.comfyApp) == null ? void 0 : Ye.graph) == null ? void 0 : ot.getNodeById) == null ? void 0 : xt.call(ot, String(T.node_id))) ?? ((U = (ne = (zt = t.comfyApp) == null ? void 0 : zt.rootGraph) == null ? void 0 : ne.getNodeById) == null ? void 0 : U.call(ne, String(T.node_id)));
      if (!J || typeof T.widget_idx != "number" || !Array.isArray(J.widgets)) return null;
      const Ee = J.widgets[T.widget_idx];
      if (!Ee || typeof ((de = t.comfyApp) == null ? void 0 : de.canvasPosToClientPos) != "function") return A(J);
      const Re = 10, Je = t.comfyApp.canvasPosToClientPos([J.pos[0] + Re, J.pos[1] + (Ee.y ?? 0)]), Pe = t.comfyApp.canvasPosToClientPos([J.pos[0] + J.size[0] - Re, J.pos[1] + (Ee.y ?? 0) + (Ee.computedHeight ?? 24)]);
      return !Je || !Pe ? A(J) : new DOMRect(Je[0], Je[1], Pe[0] - Je[0], Pe[1] - Je[1]);
    }
    function $e(T) {
      var J, Ee, Re, Je, Pe, Ye;
      const N = ((Re = (Ee = (J = t.comfyApp) == null ? void 0 : J.graph) == null ? void 0 : Ee.getNodeById) == null ? void 0 : Re.call(Ee, String(T.node_id))) ?? ((Ye = (Pe = (Je = t.comfyApp) == null ? void 0 : Je.rootGraph) == null ? void 0 : Pe.getNodeById) == null ? void 0 : Ye.call(Pe, String(T.node_id)));
      return A(N);
    }
    const Te = R(() => (x.value, D.value.inputs.map((T, N) => {
      const J = E(ce(T));
      return J ? {
        key: `input-${N}-${T.node_id}-${T.widget_idx ?? "na"}`,
        style: J,
        active: C.value === N
      } : null;
    }).filter((T) => !!T))), xe = R(() => (x.value, D.value.outputs.map((T, N) => {
      const J = E($e(T));
      return J ? {
        key: `output-${N}-${T.node_id}-${T.selector ?? "primary"}`,
        style: J,
        active: $.value === N
      } : null;
    }).filter((T) => !!T)));
    function Z(T) {
      var xt, zt, ne, U, de, je, ut, St, lt, It;
      if (Le(T.target)) return null;
      const N = (xt = t.comfyApp) == null ? void 0 : xt.canvas;
      if (!N) return null;
      const J = (zt = N.convertEventToCanvasOffset) == null ? void 0 : zt.call(N, T);
      if (!J || J.length < 2) return null;
      const [Ee, Re] = J, Je = N.graph || ((ne = t.comfyApp) == null ? void 0 : ne.graph) || ((U = t.comfyApp) == null ? void 0 : U.rootGraph), Pe = ((de = Je == null ? void 0 : Je.getNodeOnPos) == null ? void 0 : de.call(Je, Ee, Re, N.visible_nodes)) || ((je = N.getNodeOnPos) == null ? void 0 : je.call(N, Ee, Re)) || fe(T.target);
      if (!Pe) return null;
      const Ye = (ut = Pe.getWidgetOnPos) == null ? void 0 : ut.call(Pe, Ee, Re, !0);
      if (Ye)
        return { kind: "input", node: Pe, widget: Ye, canvasX: Ee, canvasY: Re };
      const ot = ((St = Pe.getOutputOnPos) == null ? void 0 : St.call(Pe, [Ee, Re])) || ((It = (lt = Pe.constructor) == null ? void 0 : lt.nodeData) != null && It.output_node ? { name: Pe.title || Pe.type || "output", type: "image" } : null);
      return ot ? { kind: "output", node: Pe, output: ot, canvasX: Ee, canvasY: Re } : null;
    }
    function G(T, N) {
      var Ye;
      const J = Array.isArray(T.widgets) ? T.widgets.indexOf(N) : -1, Ee = D.value.inputs.findIndex(
        (ot) => String(ot.node_id) === String(T.id) && ot.widget_idx === J
      );
      if (Ee >= 0) {
        C.value = Ee;
        return;
      }
      const Re = typeof ((Ye = N == null ? void 0 : N.options) == null ? void 0 : Ye.property) == "string" ? N.options.property : void 0, Je = (N == null ? void 0 : N.name) || Re || "input", Pe = {
        name: ae(String(Je), `input_${D.value.inputs.length + 1}`),
        display_name: String((N == null ? void 0 : N.name) || Re || `Input ${D.value.inputs.length + 1}`),
        type: pe(N == null ? void 0 : N.type),
        node_id: String(T.id),
        widget_idx: J >= 0 ? J : void 0,
        field_key: Re,
        required: !0,
        default: (N == null ? void 0 : N.value) ?? ""
      };
      se(Pe.type) && (Pe.min = z(N, "min"), Pe.max = z(N, "max")), Q(Pe.type) && (Pe.enum_values = me(N)), D.value.inputs.push(Pe), C.value = D.value.inputs.length - 1, $.value = null;
    }
    function ve(T, N) {
      const J = Array.isArray(T.outputs) ? T.outputs.indexOf(N) : -1, Ee = J >= 0 ? `slot:${J}` : "primary", Re = D.value.outputs.findIndex(
        (Pe) => String(Pe.node_id) === String(T.id) && (Pe.selector || "primary") === Ee
      );
      if (Re >= 0) {
        $.value = Re;
        return;
      }
      const Je = {
        name: ae(String((N == null ? void 0 : N.name) || "output"), `output_${D.value.outputs.length + 1}`),
        display_name: String((N == null ? void 0 : N.name) || `Output ${D.value.outputs.length + 1}`),
        type: pe(N == null ? void 0 : N.type),
        node_id: String(T.id),
        selector: Ee
      };
      D.value.outputs.push(Je), $.value = D.value.outputs.length - 1, C.value = null;
    }
    function ge(T) {
      var Ee, Re, Je;
      if (!r.value) {
        I.value = null, M.value = null;
        return;
      }
      const N = Z(T);
      if (!N) {
        I.value = null, M.value = null;
        return;
      }
      if (N.kind === "input") {
        const Pe = Array.isArray(N.node.widgets) ? N.node.widgets.indexOf(N.widget) : -1, Ye = E(((Ee = le(N.node.id, Pe)) == null ? void 0 : Ee.getBoundingClientRect()) ?? ce({
          node_id: String(N.node.id),
          widget_idx: Pe >= 0 ? Pe : void 0
        }));
        if (!Ye) {
          I.value = null, M.value = null;
          return;
        }
        I.value = {
          kind: "input",
          label: `${((Re = N.widget) == null ? void 0 : Re.name) || "widget"} · Node ${N.node.id}`
        }, M.value = { kind: "input", style: Ye };
        return;
      }
      const J = E(A(N.node));
      if (!J) {
        I.value = null, M.value = null;
        return;
      }
      I.value = {
        kind: "output",
        label: `${((Je = N.output) == null ? void 0 : Je.name) || N.node.title || N.node.type || "output"} · Node ${N.node.id}`
      }, M.value = { kind: "output", style: J };
    }
    function He(T) {
      var Ee, Re, Je;
      if (!r.value || !w.value || T.button !== 0) return;
      const N = Z(T);
      if (!N) return;
      const J = (Ee = t.comfyApp) == null ? void 0 : Ee.canvas;
      if (J) {
        if (N.kind === "input") {
          T.preventDefault(), T.stopImmediatePropagation(), T.stopPropagation(), Array.isArray(J.graph_mouse) && (J.graph_mouse[0] = N.canvasX, J.graph_mouse[1] = N.canvasY), (Re = J.selectNode) == null || Re.call(J, N.node, !1), G(N.node, N.widget);
          return;
        }
        T.preventDefault(), T.stopImmediatePropagation(), T.stopPropagation(), Array.isArray(J.graph_mouse) && (J.graph_mouse[0] = N.canvasX, J.graph_mouse[1] = N.canvasY), (Je = J.selectNode) == null || Je.call(J, N.node, !1), ve(N.node, N.output);
      }
    }
    function We() {
      document.addEventListener("pointerdown", He, !0), document.addEventListener("pointermove", ge, !0);
    }
    function ke() {
      document.removeEventListener("pointerdown", He, !0), document.removeEventListener("pointermove", ge, !0);
    }
    async function X() {
      if (u.value) {
        c.value = !0, f.value = null;
        try {
          p.value = await o(u.value), w.value = ue(p.value.execution_contract);
        } catch (T) {
          f.value = T instanceof Error ? T.message : "Failed to load workflow contract";
        } finally {
          c.value = !1;
        }
      }
    }
    async function Fe() {
      if (!(!w.value || !u.value)) {
        d.value = !0, f.value = null;
        try {
          p.value = await n(u.value, w.value), w.value = ue(p.value.execution_contract), window.dispatchEvent(new CustomEvent("comfygit:workflow-contract-saved", {
            detail: { workflowName: u.value }
          })), Ue({ reopenPanel: !0 });
        } catch (T) {
          f.value = T instanceof Error ? T.message : "Failed to save workflow contract";
        } finally {
          d.value = !1;
        }
      }
    }
    async function De() {
      _.value = !0;
    }
    async function qe() {
      if (u.value) {
        _.value = !1, v.value = !0, f.value = null;
        try {
          await l(u.value), window.dispatchEvent(new CustomEvent("comfygit:workflow-contract-saved", {
            detail: { workflowName: u.value }
          })), Ue({ reopenPanel: !0 });
        } catch (T) {
          f.value = T instanceof Error ? T.message : "Failed to delete workflow contract";
        } finally {
          v.value = !1;
        }
      }
    }
    function Ve() {
      window.dispatchEvent(new CustomEvent("comfygit:open-panel", {
        detail: { initialView: "workflows" }
      }));
    }
    function Ue(T) {
      r.value = !1, I.value = null, M.value = null, _.value = !1, T != null && T.reopenPanel && Ve();
    }
    async function Qe(T) {
      var Ee, Re;
      const J = (Re = (Ee = T.detail) == null ? void 0 : Ee.workflowName) == null ? void 0 : Re.trim();
      J && (u.value = J, C.value = null, $.value = null, g.value = !1, r.value = !0, await X());
    }
    function gt(T) {
      if (T.key === "Escape" && r.value) {
        if (_.value) {
          _.value = !1;
          return;
        }
        Ue({ reopenPanel: !0 });
      }
    }
    function Y() {
      if (P != null) return;
      const T = () => {
        if (x.value += 1, !r.value) {
          P = null;
          return;
        }
        P = window.requestAnimationFrame(T);
      };
      P = window.requestAnimationFrame(T);
    }
    function he() {
      P != null && (window.cancelAnimationFrame(P), P = null);
    }
    return vt(r, (T) => {
      T ? (We(), Y()) : (ke(), he());
    }), at(() => {
      window.addEventListener("comfygit:open-io-mapping", Qe), window.addEventListener("keydown", gt);
    }), gn(() => {
      ke(), he(), window.removeEventListener("comfygit:open-io-mapping", Qe), window.removeEventListener("keydown", gt);
    }), (T, N) => r.value ? (a(), i("div", L7, [
      s("div", D7, [
        (a(!0), i(B, null, ye(Te.value, (J) => (a(), i("div", {
          key: J.key,
          class: Be(["io-highlight", "io-highlight-input", { active: J.active }]),
          style: Lt(J.style)
        }, null, 6))), 128)),
        (a(!0), i(B, null, ye(xe.value, (J) => (a(), i("div", {
          key: J.key,
          class: Be(["io-highlight", "io-highlight-output", { active: J.active }]),
          style: Lt(J.style)
        }, null, 6))), 128)),
        M.value ? (a(), i("div", {
          key: 0,
          class: Be(["io-highlight", M.value.kind === "input" ? "io-highlight-hover-input" : "io-highlight-hover-output"]),
          style: Lt(M.value.style)
        }, null, 6)) : y("", !0)
      ]),
      s("div", N7, [
        s("div", O7, [
          N[8] || (N[8] = s("div", { class: "io-mapping-title" }, "I/O MAPPING MODE", -1)),
          s("div", U7, m(u.value) + " · Hover any input widget or output target on the graph, then click to add it to the contract. ", 1),
          I.value ? (a(), i("div", A7, " Hovering " + m(I.value.kind) + ": " + m(I.value.label), 1)) : y("", !0)
        ]),
        s("div", z7, [
          b(Oe, {
            size: "sm",
            variant: "secondary",
            onClick: N[0] || (N[0] = (J) => Ue({ reopenPanel: !0 }))
          }, {
            default: h(() => [...N[9] || (N[9] = [
              S(" Exit ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      s("aside", F7, [
        s("div", V7, [
          c.value ? (a(), i("div", B7, " Loading workflow contract... ")) : f.value ? (a(), i("div", W7, m(f.value), 1)) : w.value ? (a(), i(B, { key: 2 }, [
            s("section", G7, [
              s("button", {
                class: "contract-meta-toggle",
                type: "button",
                onClick: N[1] || (N[1] = (J) => g.value = !g.value)
              }, [
                N[10] || (N[10] = s("span", null, "Contract Details", -1)),
                s("span", j7, m(g.value ? "▾" : "▸"), 1)
              ]),
              g.value ? (a(), i("div", H7, [
                b(Nt, { label: "Default Contract" }, {
                  default: h(() => [
                    b(bt, {
                      "model-value": w.value.default_contract,
                      "full-width": "",
                      "onUpdate:modelValue": Se
                    }, null, 8, ["model-value"])
                  ]),
                  _: 1
                }),
                b(Nt, { label: "Display Name" }, {
                  default: h(() => [
                    b(bt, {
                      modelValue: D.value.display_name,
                      "onUpdate:modelValue": N[2] || (N[2] = (J) => D.value.display_name = J),
                      "full-width": ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                b(Nt, { label: "Description" }, {
                  default: h(() => [
                    b(xo, {
                      modelValue: D.value.description,
                      "onUpdate:modelValue": N[3] || (N[3] = (J) => D.value.description = J),
                      rows: 2,
                      placeholder: "Optional description for this contract"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])) : y("", !0)
            ]),
            s("section", q7, [
              s("span", K7, m(K.value), 1),
              s("span", J7, m(D.value.inputs.length) + " input" + m(D.value.inputs.length === 1 ? "" : "s"), 1),
              s("span", Q7, m(D.value.outputs.length) + " output" + m(D.value.outputs.length === 1 ? "" : "s"), 1)
            ]),
            s("section", Y7, [
              s("div", X7, [
                b(ao, { variant: "section" }, {
                  default: h(() => [...N[11] || (N[11] = [
                    S("INPUTS", -1)
                  ])]),
                  _: 1
                })
              ]),
              D.value.inputs.length ? y("", !0) : (a(), i("div", Z7, " No inputs configured. ")),
              (a(!0), i(B, null, ye(D.value.inputs, (J, Ee) => (a(), i("div", {
                key: `input-${Ee}`,
                class: Be(["item-card", { selected: C.value === Ee }])
              }, [
                s("div", {
                  class: "item-card-header item-card-header-toggle",
                  onClick: (Re) => Ae(Ee)
                }, [
                  s("div", null, [
                    s("div", tR, m(J.name || `Input ${Ee + 1}`), 1),
                    s("div", sR, [
                      S(" Node " + m(J.node_id || "?"), 1),
                      J.widget_idx !== void 0 ? (a(), i(B, { key: 0 }, [
                        S(" · Widget " + m(J.widget_idx), 1)
                      ], 64)) : y("", !0)
                    ]),
                    s("div", oR, [
                      s("span", null, m(J.type || "string"), 1),
                      s("span", null, m(J.required ? "required" : "optional"), 1),
                      J.default !== void 0 && J.default !== "" ? (a(), i("span", nR, "default " + m(_e(J.default)), 1)) : y("", !0)
                    ])
                  ]),
                  b(Oe, {
                    size: "sm",
                    variant: "ghost",
                    onClick: pt((Re) => Ne(Ee), ["stop"])
                  }, {
                    default: h(() => [...N[12] || (N[12] = [
                      S(" Remove ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ], 8, eR),
                C.value === Ee ? (a(), i("div", {
                  key: 0,
                  class: "item-grid",
                  onClick: N[4] || (N[4] = pt(() => {
                  }, ["stop"]))
                }, [
                  b(Nt, { label: "Name" }, {
                    default: h(() => [
                      b(bt, {
                        modelValue: J.name,
                        "onUpdate:modelValue": (Re) => J.name = Re,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  b(Nt, { label: "Display Name" }, {
                    default: h(() => [
                      b(bt, {
                        modelValue: J.display_name,
                        "onUpdate:modelValue": (Re) => J.display_name = Re,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  b(Nt, { label: "Type" }, {
                    default: h(() => [
                      b(Un, {
                        "model-value": J.type,
                        options: O,
                        "full-width": "",
                        "onUpdate:modelValue": (Re) => J.type = Re
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  b(Nt, { label: "Required" }, {
                    default: h(() => [
                      b(Un, {
                        "model-value": J.required ? "true" : "false",
                        options: F,
                        "full-width": "",
                        "onUpdate:modelValue": (Re) => J.required = Re === "true"
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  b(Nt, {
                    class: Be({ "item-grid-full": J.type === "string" || J.type === "enum" }),
                    label: "Default"
                  }, {
                    default: h(() => [
                      J.type === "string" ? (a(), L(xo, {
                        key: 0,
                        "model-value": ee(J.default),
                        rows: 3,
                        placeholder: "Default string value",
                        "onUpdate:modelValue": (Re) => J.default = Re
                      }, null, 8, ["model-value", "onUpdate:modelValue"])) : (a(), L(bt, {
                        key: 1,
                        modelValue: J.default,
                        "onUpdate:modelValue": (Re) => J.default = Re,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]))
                    ]),
                    _: 2
                  }, 1032, ["class"]),
                  se(J.type) ? (a(), L(Nt, {
                    key: 0,
                    label: "Min"
                  }, {
                    default: h(() => [
                      b(bt, {
                        "model-value": we(J.min),
                        "full-width": "",
                        "onUpdate:modelValue": (Re) => J.min = te(Re)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : y("", !0),
                  se(J.type) ? (a(), L(Nt, {
                    key: 1,
                    label: "Max"
                  }, {
                    default: h(() => [
                      b(bt, {
                        "model-value": we(J.max),
                        "full-width": "",
                        "onUpdate:modelValue": (Re) => J.max = te(Re)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : y("", !0),
                  Q(J.type) ? (a(), L(Nt, {
                    key: 2,
                    class: "item-grid-full",
                    label: "Enum Values"
                  }, {
                    default: h(() => [
                      b(xo, {
                        "model-value": H(J.enum_values),
                        rows: 4,
                        placeholder: "One or more values, separated by commas or new lines",
                        "onUpdate:modelValue": (Re) => J.enum_values = q(Re)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : y("", !0)
                ])) : y("", !0)
              ], 2))), 128))
            ]),
            s("section", aR, [
              s("div", lR, [
                b(ao, { variant: "section" }, {
                  default: h(() => [...N[13] || (N[13] = [
                    S("OUTPUTS", -1)
                  ])]),
                  _: 1
                })
              ]),
              D.value.outputs.length ? y("", !0) : (a(), i("div", iR, " No outputs configured. ")),
              (a(!0), i(B, null, ye(D.value.outputs, (J, Ee) => (a(), i("div", {
                key: `output-${Ee}`,
                class: Be(["item-card", { selected: $.value === Ee }])
              }, [
                s("div", {
                  class: "item-card-header item-card-header-toggle",
                  onClick: (Re) => re(Ee)
                }, [
                  s("div", null, [
                    s("div", cR, m(J.name || `Output ${Ee + 1}`), 1),
                    s("div", uR, [
                      S(" Node " + m(J.node_id || "?"), 1),
                      J.selector ? (a(), i(B, { key: 0 }, [
                        S(" · " + m(J.selector), 1)
                      ], 64)) : y("", !0)
                    ]),
                    s("div", dR, [
                      s("span", null, m(J.type || "file"), 1)
                    ])
                  ]),
                  b(Oe, {
                    size: "sm",
                    variant: "ghost",
                    onClick: pt((Re) => ze(Ee), ["stop"])
                  }, {
                    default: h(() => [...N[14] || (N[14] = [
                      S(" Remove ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ], 8, rR),
                $.value === Ee ? (a(), i("div", {
                  key: 0,
                  class: "item-grid",
                  onClick: N[5] || (N[5] = pt(() => {
                  }, ["stop"]))
                }, [
                  b(Nt, { label: "Name" }, {
                    default: h(() => [
                      b(bt, {
                        modelValue: J.name,
                        "onUpdate:modelValue": (Re) => J.name = Re,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  b(Nt, { label: "Display Name" }, {
                    default: h(() => [
                      b(bt, {
                        modelValue: J.display_name,
                        "onUpdate:modelValue": (Re) => J.display_name = Re,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  b(Nt, { label: "Type" }, {
                    default: h(() => [
                      b(Un, {
                        "model-value": J.type,
                        options: O,
                        "full-width": "",
                        "onUpdate:modelValue": (Re) => J.type = Re
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)
                ])) : y("", !0)
              ], 2))), 128))
            ])
          ], 64)) : y("", !0)
        ]),
        s("div", mR, [
          s("div", fR, [
            b(Oe, {
              variant: "secondary",
              onClick: N[6] || (N[6] = (J) => Ue({ reopenPanel: !0 }))
            }, {
              default: h(() => [...N[15] || (N[15] = [
                S(" Cancel ", -1)
              ])]),
              _: 1
            })
          ]),
          s("div", vR, [
            b(Oe, {
              variant: "danger",
              disabled: !W.value,
              loading: v.value,
              onClick: De
            }, {
              default: h(() => [...N[16] || (N[16] = [
                S(" Delete ", -1)
              ])]),
              _: 1
            }, 8, ["disabled", "loading"]),
            b(Oe, {
              variant: "primary",
              loading: d.value,
              onClick: Fe
            }, {
              default: h(() => [...N[17] || (N[17] = [
                S(" Save ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ])
        ])
      ]),
      _.value ? (a(), L(Ml, {
        key: 0,
        title: "Delete Workflow Contract",
        message: `Delete the contract for ${u.value}?`,
        warning: "This removes the saved input/output contract for this workflow. The workflow itself will not be deleted.",
        "confirm-label": "Delete",
        "cancel-label": "Cancel",
        destructive: !0,
        onConfirm: qe,
        onCancel: N[7] || (N[7] = (J) => _.value = !1)
      }, null, 8, ["message"])) : y("", !0)
    ])) : y("", !0);
  }
}), gR = /* @__PURE__ */ Ie(pR, [["__scopeId", "data-v-13515b27"]]), hR = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:transparent}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}[data-comfygit-theme=comfy] .base-tabs{border-bottom-color:var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .base-tabs__tab{border-radius:var(--cg-radius-sm) var(--cg-radius-sm) 0 0}[data-comfygit-theme=comfy] .base-tabs__tab:hover:not(.disabled){background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .base-tabs__tab.active{background:var(--cg-color-accent-muted)}', yR = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .base-tabs{border-bottom-color:var(--cg-color-border)}[data-comfygit-theme=phosphor] .base-tabs__tab{text-shadow:none}[data-comfygit-theme=phosphor] .base-tabs__tab:before{content:""}[data-comfygit-theme=phosphor] .base-tabs__tab.active:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .base-tabs__tab.active{text-shadow:0 0 8px var(--cg-color-accent);border-bottom-color:var(--cg-color-accent);box-shadow:0 2px 8px var(--cg-shadow-accent)}[data-comfygit-theme=phosphor] .base-tabs__tab:hover:not(.disabled):not(.active){color:var(--cg-color-accent);text-shadow:0 0 4px var(--cg-color-accent)}', wR = {
  comfy: hR,
  phosphor: yR
}, Ll = "comfy", Ic = "comfygit-theme";
let eo = null, Ec = Ll;
function _R() {
  try {
    const e = localStorage.getItem(Ic);
    if (e && (e === "comfy" || e === "phosphor"))
      return e;
  } catch {
  }
  return Ll;
}
function Tc(e = Ll) {
  eo && eo.remove(), eo = document.createElement("style"), eo.id = "comfygit-theme-styles", eo.setAttribute("data-theme", e), eo.textContent = wR[e], document.head.appendChild(eo), document.body.setAttribute("data-comfygit-theme", e), Ec = e;
  try {
    localStorage.setItem(Ic, e);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${e}`);
}
function kR() {
  return Ec;
}
function bR(e) {
  Tc(e);
}
function $R(e) {
  var r;
  const { ui_id: t, state: o } = e || {}, n = (o == null ? void 0 : o.history) || {};
  if (!t)
    return null;
  const l = n[t];
  return l && l.result === "error" && ((r = l.status) == null ? void 0 : r.status_str) === "error" ? (l.status.messages || [])[0] || "Unknown error" : null;
}
const Pi = "ComfyGit.DevAutoReload", Mc = "ComfyGit.DevAutoReload.PanelOpen";
function CR() {
  const e = new URLSearchParams(window.location.search).get("comfygitDevReload");
  return e === null ? null : e;
}
function ua() {
  const e = CR();
  if (e !== null) {
    const t = e !== "0" && e !== "false";
    try {
      localStorage.setItem(Pi, t ? "true" : "false");
    } catch {
    }
    return t;
  }
  try {
    return localStorage.getItem(Pi) === "true";
  } catch {
    return !1;
  }
}
function Pc(e) {
  if (ua())
    try {
      sessionStorage.setItem(Mc, e ? "true" : "false");
    } catch {
    }
}
function xR() {
  if (!ua()) return !1;
  try {
    return sessionStorage.getItem(Mc) === "true";
  } catch {
    return !1;
  }
}
async function Ri(e) {
  const t = await fetch(e, { cache: "no-store", method: "HEAD" });
  if (t.ok) {
    const c = t.headers, d = c.get("etag"), v = c.get("last-modified"), f = c.get("content-length");
    if (d || v)
      return [d, v, f].filter(Boolean).join(":");
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
async function SR(e) {
  if (!ua()) return;
  const t = e.map((n) => ({
    ...n,
    signature: null
  }));
  for (const n of t)
    try {
      n.signature = await Ri(n.url);
    } catch (l) {
      console.warn(`[ComfyGit] Dev auto-reload could not read ${n.name}:`, l);
    }
  console.log("[ComfyGit] Dev auto-reload enabled");
  let o = !1;
  window.setInterval(async () => {
    if (!o)
      for (const n of t)
        try {
          const l = await Ri(n.url);
          if (n.signature && l && l !== n.signature) {
            o = !0, console.log(`[ComfyGit] ${n.name} changed, reloading page...`), window.setTimeout(() => window.location.reload(), 500);
            return;
          }
          l && (n.signature = l);
        } catch {
        }
  }, 1e3);
}
const IR = "./comfygit-panel.css", ER = "./comfygit-panel.js", Rc = new URL(IR, import.meta.url).href, TR = new URL(ER, import.meta.url).href, Dl = document.createElement("link");
Dl.rel = "stylesheet";
Dl.href = Rc;
document.head.appendChild(Dl);
const MR = _R();
Tc(MR);
ua() || (sessionStorage.removeItem("ComfyGit.LastView"), sessionStorage.removeItem("ComfyGit.LastSection"));
window.ComfyGit = {
  setTheme: (e) => {
    console.log(`[ComfyGit] Switching to theme: ${e}`), bR(e);
  },
  getTheme: () => {
    const e = kR();
    return console.log(`[ComfyGit] Current theme: ${e}`), e;
  }
};
window.ComfyGitDev = {
  ...window.ComfyGitDev ?? {},
  async exportCurrentApiPrompt() {
    const e = ws;
    if (typeof e.graphToPrompt != "function")
      throw new Error("ComfyUI graphToPrompt is not available");
    return e.graphToPrompt(e.rootGraph);
  },
  async exportApiPromptForWorkflow(e) {
    const t = ws;
    if (typeof t.loadGraphData != "function")
      throw new Error("ComfyUI loadGraphData is not available");
    if (typeof t.graphToPrompt != "function")
      throw new Error("ComfyUI graphToPrompt is not available");
    return await t.loadGraphData(e, !0, !1, null, {
      deferWarnings: !0,
      skipAssetScans: !0,
      silentAssetErrors: !0
    }), await new Promise((o) => requestAnimationFrame(o)), t.graphToPrompt(t.rootGraph);
  }
};
let bs = null, sn = null, Zt = null, on = null, Vo = null, Li = null, Bo = null, Di = null, Wo = null, Ni = null;
const So = k(null);
let fn = "no_workspace", Lc = !1;
async function An() {
  const e = Lo();
  if (!e) return null;
  try {
    const t = await e.fetchApi("/v2/comfygit/status");
    t.ok && (So.value = await t.json());
  } catch {
  }
}
async function nl() {
  const e = Lo();
  if (e)
    try {
      const t = await e.fetchApi("/v2/setup/status");
      if (t.ok) {
        const o = await t.json();
        fn = o.state, Lc = o.has_comfyui_manager ?? !1;
      }
    } catch {
    }
}
function al() {
  var t;
  if (fn === "managed" || !Lc) return;
  const e = document.querySelectorAll("button.comfyui-button");
  for (const o of e)
    if (((t = o.textContent) == null ? void 0 : t.trim()) === "Manager" && !o.querySelector("svg, i, img")) {
      o.style.display = "none", console.log("[ComfyGit] Hiding built-in Manager button (ComfyUI-Manager present)");
      return;
    }
}
function PR() {
  if (!So.value) return !1;
  const e = So.value.workflows;
  return e.new.length > 0 || e.modified.length > 0 || e.deleted.length > 0 || So.value.has_changes;
}
function Go(e) {
  qo(), Pc(!0), bs = document.createElement("div"), bs.className = "comfygit-panel-overlay";
  const t = document.createElement("div");
  t.className = "comfygit-panel-container", bs.appendChild(t), bs.addEventListener("click", (n) => {
    n.target === bs && qo();
  });
  const o = (n) => {
    n.key === "Escape" && (qo(), document.removeEventListener("keydown", o));
  };
  document.addEventListener("keydown", o), sn = yn({
    render: () => Ro($M, {
      initialView: e,
      onClose: qo,
      onStatusUpdate: async (n) => {
        So.value = n, nn(), await nl(), ll(), al();
      }
    })
  }), sn.mount(t), document.body.appendChild(bs);
}
function qo() {
  Pc(!1), sn && (sn.unmount(), sn = null), bs && (bs.remove(), bs = null);
}
function Oi(e) {
  jo(), Zt = document.createElement("div"), Zt.className = "comfygit-commit-popover-container";
  const t = e.getBoundingClientRect();
  Zt.style.position = "fixed", Zt.style.top = `${t.bottom + 8}px`, Zt.style.right = `${window.innerWidth - t.right}px`, Zt.style.zIndex = "10001";
  const o = (l) => {
    Zt && !Zt.contains(l.target) && l.target !== e && (jo(), document.removeEventListener("mousedown", o));
  };
  setTimeout(() => document.addEventListener("mousedown", o), 0);
  const n = (l) => {
    l.key === "Escape" && (jo(), document.removeEventListener("keydown", n));
  };
  document.addEventListener("keydown", n), on = yn({
    render: () => Ro($c, {
      status: So.value,
      onClose: jo,
      onCommitted: (l) => {
        jo(), RR(l.success, l.message), An().then(nn);
      }
    })
  }), on.mount(Zt), document.body.appendChild(Zt);
}
function jo() {
  on && (on.unmount(), on = null), Zt && (Zt.remove(), Zt = null);
}
function RR(e, t) {
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
function LR() {
  Vo || (Vo = document.createElement("div"), Vo.className = "comfygit-download-queue-root", Li = yn({
    render: () => Ro(hP)
  }), Li.mount(Vo), document.body.appendChild(Vo), console.log("[ComfyGit] Model download queue mounted"));
}
function DR() {
  Bo || (Bo = document.createElement("div"), Bo.className = "comfygit-missing-resources-root", Di = yn({
    render: () => Ro(R7)
  }), Di.mount(Bo), document.body.appendChild(Bo), console.log("[ComfyGit] Missing resources popup mounted"));
}
function NR() {
  Wo || (Wo = document.createElement("div"), Wo.className = "comfygit-io-mapping-root", Ni = yn({
    render: () => Ro(gR, {
      comfyApp: ws
    })
  }), Ni.mount(Wo), document.body.appendChild(Wo), console.log("[ComfyGit] Workflow I/O mapping overlay mounted"));
}
let qt = null;
function nn() {
  if (!qt) return;
  const e = qt.querySelector(".commit-indicator");
  e && (e.style.display = PR() ? "block" : "none");
}
function ll() {
  if (!qt) return;
  const e = fn !== "managed";
  qt.disabled = e, qt.title = e ? "Commit disabled - switch to a managed environment first" : "Quick Commit";
}
const Dc = document.createElement("style");
Dc.textContent = `
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
document.head.appendChild(Dc);
ws.registerExtension({
  name: "Comfy.ComfyGitPanel",
  // Commands that can be triggered by keybindings or menu items
  commands: [
    {
      id: "ComfyGit.OpenPanel",
      label: "Open ComfyGit Panel",
      icon: "pi pi-folder-open",
      function: () => Go()
    },
    {
      id: "ComfyGit.QuickCommit",
      label: "Quick Commit",
      icon: "pi pi-check",
      function: () => {
        qt && !qt.disabled && Oi(qt);
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
    if (fn === "managed")
      try {
        await Promise.all([
          ws.ui.settings.setSettingValueAsync("Comfy.Workflow.ShowMissingModelsWarning", !1),
          ws.ui.settings.setSettingValueAsync("Comfy.Workflow.ShowMissingNodesWarning", !1)
        ]);
      } catch (o) {
        console.warn("[ComfyGit] Failed to disable built-in warnings:", o);
      }
    window.__comfygit_pending_workflow = e;
  },
  async afterConfigureGraph(e) {
    if (fn !== "managed") return;
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
    t.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", t.textContent = "ComfyGit", t.title = "ComfyGit Control Panel", t.onclick = () => Go(), qt = document.createElement("button"), qt.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", qt.innerHTML = 'Commit <span class="commit-indicator"></span>', qt.title = "Quick Commit", qt.onclick = () => Oi(qt), e.appendChild(t), e.appendChild(qt), (r = (l = ws.menu) == null ? void 0 : l.settingsGroup) != null && r.element && (ws.menu.settingsGroup.element.before(e), console.log("[ComfyGit] Control Panel buttons added to toolbar")), LR(), DR(), NR(), window.addEventListener("comfygit:open-panel", ((u) => {
      var d;
      const c = (d = u.detail) == null ? void 0 : d.initialView;
      Go(c);
    })), window.addEventListener("comfygit:close-panel", (() => {
      qo();
    }));
    const { loadPendingDownloads: o } = Do();
    o(), await Promise.all([An(), nl()]), nn(), ll(), al(), xR() && setTimeout(() => {
      bs || Go();
    }, 100), SR([
      { name: "panel script", url: TR },
      { name: "panel stylesheet", url: Rc }
    ]), setTimeout(al, 100), setInterval(async () => {
      await Promise.all([An(), nl()]), nn(), ll();
    }, 3e4);
    const n = Lo();
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
        const C = document.createElement("div");
        C.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 4px;";
        const $ = document.createElement("div");
        $.textContent = "Node installation failed", $.style.cssText = "font-weight: 600; color: #e53935;", C.appendChild($);
        const x = document.createElement("div");
        x.textContent = "Dependency conflict detected", x.style.cssText = "font-size: 12px; opacity: 0.8;", C.appendChild(x), g.appendChild(C);
        const I = document.createElement("button");
        I.textContent = "View Logs", I.style.cssText = `
          background: #e53935;
          color: #fff;
          border: none;
          border-radius: 4px;
          padding: 6px 12px;
          cursor: pointer;
          font-size: 12px;
          font-weight: 500;
          white-space: nowrap;
        `, I.onmouseover = () => I.style.background = "#c62828", I.onmouseout = () => I.style.background = "#e53935", I.onclick = () => {
          g.remove(), Go("debug-env");
        }, g.appendChild(I);
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
      }, v = function(p) {
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
        const C = document.createElement("div");
        C.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 2px;";
        const $ = document.createElement("div");
        $.textContent = "To apply changes, please restart ComfyUI", $.style.cssText = "font-weight: 500; color: #fff;", C.appendChild($);
        const x = document.createElement("div");
        x.textContent = `${p} node package${p > 1 ? "s" : ""} ready to install`, x.style.cssText = "font-size: 12px; opacity: 0.7;", C.appendChild(x), g.appendChild(C);
        const I = document.createElement("button");
        I.textContent = "Apply Changes", I.style.cssText = `
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
        `, I.onmouseover = () => I.style.background = "rgba(255,255,255,0.1)", I.onmouseout = () => I.style.background = "transparent", I.onclick = async () => {
          I.disabled = !0, I.textContent = "Restarting...", I.style.opacity = "0.7", $.textContent = "Restarting...", x.textContent = "Applying changes, please wait...";
          try {
            const P = async () => {
              console.log("[ComfyGit] Reconnected after restart, refreshing node definitions...");
              try {
                ws.refreshComboInNodes && (await ws.refreshComboInNodes(), console.log("[ComfyGit] Node definitions refreshed successfully")), _.textContent = "✅", $.textContent = "Nodes Installed", $.style.color = "#4caf50", x.textContent = `${p} package${p > 1 ? "s" : ""} installed successfully!`, g.style.borderColor = "#4caf50", I.style.display = "none", setTimeout(() => {
                  g.remove();
                }, 3e3);
              } catch (O) {
                console.error("[ComfyGit] Failed to refresh nodes:", O), _.textContent = "✅", $.textContent = "Restart Complete", $.style.color = "#4caf50", x.textContent = "Refresh the page to load new nodes.", g.style.borderColor = "#4caf50", I.style.display = "none";
              }
            };
            n.addEventListener("reconnected", P, { once: !0 }), await fetch("/v2/manager/reboot");
          } catch (P) {
            console.error("[ComfyGit] Failed to restart:", P), $.textContent = "Restart Failed", $.style.color = "#e53935", x.textContent = "Could not restart server. Try again.", g.style.borderColor = "#e53935", I.textContent = "Try Again", I.disabled = !1, I.style.opacity = "1";
          }
        }, g.appendChild(I);
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
        console.log(`[ComfyGit] Workflow ${w}: ${g}`), await An(), nn();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let f = !1;
      n.addEventListener("status", async (p) => {
        const w = p.detail != null;
        w && !f && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") !== "false" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), u()) : c()), f = w;
      }), console.log("[ComfyGit] Refresh notification system initialized"), n.addEventListener("cm-task-completed", (p) => {
        const w = $R(p.detail);
        w && d(w);
      }), console.log("[ComfyGit] Manager error notification system initialized"), window.addEventListener("comfygit:nodes-installed", (p) => {
        const w = p, { count: g = 1 } = w.detail || {};
        v(g);
      }), console.log("[ComfyGit] Restart notification system initialized");
    }
  }
});
