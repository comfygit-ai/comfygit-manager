var Dc = Object.defineProperty;
var Nc = (e, t, o) => t in e ? Dc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var En = (e, t, o) => Nc(e, typeof t != "symbol" ? t + "" : t, o);
import { app as $s } from "../../scripts/app.js";
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
const wt = {}, Co = [], Is = () => {
}, Ui = () => !1, oa = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), il = (e) => e.startsWith("onUpdate:"), Rt = Object.assign, rl = (e, t) => {
  const o = e.indexOf(t);
  o > -1 && e.splice(o, 1);
}, Uc = Object.prototype.hasOwnProperty, ft = (e, t) => Uc.call(e, t), Xe = Array.isArray, xo = (e) => _n(e) === "[object Map]", No = (e) => _n(e) === "[object Set]", Dl = (e) => _n(e) === "[object Date]", st = (e) => typeof e == "function", xt = (e) => typeof e == "string", vs = (e) => typeof e == "symbol", ht = (e) => e !== null && typeof e == "object", Oi = (e) => (ht(e) || st(e)) && st(e.then) && st(e.catch), Ai = Object.prototype.toString, _n = (e) => Ai.call(e), Oc = (e) => _n(e).slice(8, -1), zi = (e) => _n(e) === "[object Object]", cl = (e) => xt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, tn = /* @__PURE__ */ ll(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), na = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((o) => t[o] || (t[o] = e(o)));
}, Ac = /-\w/g, us = na(
  (e) => e.replace(Ac, (t) => t.slice(1).toUpperCase())
), zc = /\B([A-Z])/g, so = na(
  (e) => e.replace(zc, "-$1").toLowerCase()
), aa = na((e) => e.charAt(0).toUpperCase() + e.slice(1)), Ma = na(
  (e) => e ? `on${aa(e)}` : ""
), Xs = (e, t) => !Object.is(e, t), Un = (e, ...t) => {
  for (let o = 0; o < e.length; o++)
    e[o](...t);
}, Fi = (e, t, o, a = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: a,
    value: o
  });
}, la = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Fc = (e) => {
  const t = xt(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Nl;
const ia = () => Nl || (Nl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Dt(e) {
  if (Xe(e)) {
    const t = {};
    for (let o = 0; o < e.length; o++) {
      const a = e[o], l = xt(a) ? Gc(a) : Dt(a);
      if (l)
        for (const r in l)
          t[r] = l[r];
    }
    return t;
  } else if (xt(e) || ht(e))
    return e;
}
const Vc = /;(?![^(]*\))/g, Bc = /:([^]+)/, Wc = /\/\*[^]*?\*\//g;
function Gc(e) {
  const t = {};
  return e.replace(Wc, "").split(Vc).forEach((o) => {
    if (o) {
      const a = o.split(Bc);
      a.length > 1 && (t[a[0].trim()] = a[1].trim());
    }
  }), t;
}
function Be(e) {
  let t = "";
  if (xt(e))
    t = e;
  else if (Xe(e))
    for (let o = 0; o < e.length; o++) {
      const a = Be(e[o]);
      a && (t += a + " ");
    }
  else if (ht(e))
    for (const o in e)
      e[o] && (t += o + " ");
  return t.trim();
}
const jc = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Hc = /* @__PURE__ */ ll(jc);
function Vi(e) {
  return !!e || e === "";
}
function qc(e, t) {
  if (e.length !== t.length) return !1;
  let o = !0;
  for (let a = 0; o && a < e.length; a++)
    o = fo(e[a], t[a]);
  return o;
}
function fo(e, t) {
  if (e === t) return !0;
  let o = Dl(e), a = Dl(t);
  if (o || a)
    return o && a ? e.getTime() === t.getTime() : !1;
  if (o = vs(e), a = vs(t), o || a)
    return e === t;
  if (o = Xe(e), a = Xe(t), o || a)
    return o && a ? qc(e, t) : !1;
  if (o = ht(e), a = ht(t), o || a) {
    if (!o || !a)
      return !1;
    const l = Object.keys(e).length, r = Object.keys(t).length;
    if (l !== r)
      return !1;
    for (const c in e) {
      const u = e.hasOwnProperty(c), d = t.hasOwnProperty(c);
      if (u && !d || !u && d || !fo(e[c], t[c]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function ul(e, t) {
  return e.findIndex((o) => fo(o, t));
}
const Bi = (e) => !!(e && e.__v_isRef === !0), m = (e) => xt(e) ? e : e == null ? "" : Xe(e) || ht(e) && (e.toString === Ai || !st(e.toString)) ? Bi(e) ? m(e.value) : JSON.stringify(e, Wi, 2) : String(e), Wi = (e, t) => Bi(t) ? Wi(e, t.value) : xo(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (o, [a, l], r) => (o[Pa(a, r) + " =>"] = l, o),
    {}
  )
} : No(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((o) => Pa(o))
} : vs(t) ? Pa(t) : ht(t) && !Xe(t) && !zi(t) ? String(t) : t, Pa = (e, t = "") => {
  var o;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    vs(e) ? `Symbol(${(o = e.description) != null ? o : t})` : e
  );
};
/**
* @vue/reactivity v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Xt;
class Kc {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Xt, !t && Xt && (this.index = (Xt.scopes || (Xt.scopes = [])).push(
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
      const o = Xt;
      try {
        return Xt = this, t();
      } finally {
        Xt = o;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Xt, Xt = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (Xt = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
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
      if (!this.detached && this.parent && !t) {
        const l = this.parent.scopes.pop();
        l && l !== this && (this.parent.scopes[this.index] = l, l.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Jc() {
  return Xt;
}
let _t;
const Ra = /* @__PURE__ */ new WeakSet();
class Gi {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Xt && Xt.active && Xt.effects.push(this);
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
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Hi(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Ul(this), qi(this);
    const t = _t, o = ms;
    _t = this, ms = !0;
    try {
      return this.fn();
    } finally {
      Ki(this), _t = t, ms = o, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        fl(t);
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
let ji = 0, sn, on;
function Hi(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = on, on = e;
    return;
  }
  e.next = sn, sn = e;
}
function dl() {
  ji++;
}
function ml() {
  if (--ji > 0)
    return;
  if (on) {
    let t = on;
    for (on = void 0; t; ) {
      const o = t.next;
      t.next = void 0, t.flags &= -9, t = o;
    }
  }
  let e;
  for (; sn; ) {
    let t = sn;
    for (sn = void 0; t; ) {
      const o = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (a) {
          e || (e = a);
        }
      t = o;
    }
  }
  if (e) throw e;
}
function qi(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Ki(e) {
  let t, o = e.depsTail, a = o;
  for (; a; ) {
    const l = a.prevDep;
    a.version === -1 ? (a === o && (o = l), fl(a), Qc(a)) : t = a, a.dep.activeLink = a.prevActiveLink, a.prevActiveLink = void 0, a = l;
  }
  e.deps = t, e.depsTail = o;
}
function Ga(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Ji(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Ji(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === mn) || (e.globalVersion = mn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ga(e))))
    return;
  e.flags |= 2;
  const t = e.dep, o = _t, a = ms;
  _t = e, ms = !0;
  try {
    qi(e);
    const l = e.fn(e._value);
    (t.version === 0 || Xs(l, e._value)) && (e.flags |= 128, e._value = l, t.version++);
  } catch (l) {
    throw t.version++, l;
  } finally {
    _t = o, ms = a, Ki(e), e.flags &= -3;
  }
}
function fl(e, t = !1) {
  const { dep: o, prevSub: a, nextSub: l } = e;
  if (a && (a.nextSub = l, e.prevSub = void 0), l && (l.prevSub = a, e.nextSub = void 0), o.subs === e && (o.subs = a, !a && o.computed)) {
    o.computed.flags &= -5;
    for (let r = o.computed.deps; r; r = r.nextDep)
      fl(r, !0);
  }
  !t && !--o.sc && o.map && o.map.delete(o.key);
}
function Qc(e) {
  const { prevDep: t, nextDep: o } = e;
  t && (t.nextDep = o, e.prevDep = void 0), o && (o.prevDep = t, e.nextDep = void 0);
}
let ms = !0;
const Qi = [];
function zs() {
  Qi.push(ms), ms = !1;
}
function Fs() {
  const e = Qi.pop();
  ms = e === void 0 ? !0 : e;
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
let mn = 0;
class Yc {
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
    if (!_t || !ms || _t === this.computed)
      return;
    let o = this.activeLink;
    if (o === void 0 || o.sub !== _t)
      o = this.activeLink = new Yc(_t, this), _t.deps ? (o.prevDep = _t.depsTail, _t.depsTail.nextDep = o, _t.depsTail = o) : _t.deps = _t.depsTail = o, Yi(o);
    else if (o.version === -1 && (o.version = this.version, o.nextDep)) {
      const a = o.nextDep;
      a.prevDep = o.prevDep, o.prevDep && (o.prevDep.nextDep = a), o.prevDep = _t.depsTail, o.nextDep = void 0, _t.depsTail.nextDep = o, _t.depsTail = o, _t.deps === o && (_t.deps = a);
    }
    return o;
  }
  trigger(t) {
    this.version++, mn++, this.notify(t);
  }
  notify(t) {
    dl();
    try {
      for (let o = this.subs; o; o = o.prevSub)
        o.sub.notify() && o.sub.dep.notify();
    } finally {
      ml();
    }
  }
}
function Yi(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let a = t.deps; a; a = a.nextDep)
        Yi(a);
    }
    const o = e.dep.subs;
    o !== e && (e.prevSub = o, o && (o.nextSub = e)), e.dep.subs = e;
  }
}
const ja = /* @__PURE__ */ new WeakMap(), co = Symbol(
  ""
), Ha = Symbol(
  ""
), fn = Symbol(
  ""
);
function Bt(e, t, o) {
  if (ms && _t) {
    let a = ja.get(e);
    a || ja.set(e, a = /* @__PURE__ */ new Map());
    let l = a.get(o);
    l || (a.set(o, l = new vl()), l.map = a, l.key = o), l.track();
  }
}
function Us(e, t, o, a, l, r) {
  const c = ja.get(e);
  if (!c) {
    mn++;
    return;
  }
  const u = (d) => {
    d && d.trigger();
  };
  if (dl(), t === "clear")
    c.forEach(u);
  else {
    const d = Xe(e), v = d && cl(o);
    if (d && o === "length") {
      const f = Number(a);
      c.forEach((p, w) => {
        (w === "length" || w === fn || !vs(w) && w >= f) && u(p);
      });
    } else
      switch ((o !== void 0 || c.has(void 0)) && u(c.get(o)), v && u(c.get(fn)), t) {
        case "add":
          d ? v && u(c.get("length")) : (u(c.get(co)), xo(e) && u(c.get(Ha)));
          break;
        case "delete":
          d || (u(c.get(co)), xo(e) && u(c.get(Ha)));
          break;
        case "set":
          xo(e) && u(c.get(co));
          break;
      }
  }
  ml();
}
function ho(e) {
  const t = ut(e);
  return t === e ? t : (Bt(t, "iterate", fn), rs(e) ? t : t.map(ps));
}
function ra(e) {
  return Bt(e = ut(e), "iterate", fn), e;
}
function Js(e, t) {
  return Vs(e) ? uo(e) ? Ro(ps(t)) : Ro(t) : ps(t);
}
const Xc = {
  __proto__: null,
  [Symbol.iterator]() {
    return La(this, Symbol.iterator, (e) => Js(this, e));
  },
  concat(...e) {
    return ho(this).concat(
      ...e.map((t) => Xe(t) ? ho(t) : t)
    );
  },
  entries() {
    return La(this, "entries", (e) => (e[1] = Js(this, e[1]), e));
  },
  every(e, t) {
    return Ls(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Ls(
      this,
      "filter",
      e,
      t,
      (o) => o.map((a) => Js(this, a)),
      arguments
    );
  },
  find(e, t) {
    return Ls(
      this,
      "find",
      e,
      t,
      (o) => Js(this, o),
      arguments
    );
  },
  findIndex(e, t) {
    return Ls(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Ls(
      this,
      "findLast",
      e,
      t,
      (o) => Js(this, o),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Ls(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Ls(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Da(this, "includes", e);
  },
  indexOf(...e) {
    return Da(this, "indexOf", e);
  },
  join(e) {
    return ho(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Da(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Ls(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Wo(this, "pop");
  },
  push(...e) {
    return Wo(this, "push", e);
  },
  reduce(e, ...t) {
    return Ol(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Ol(this, "reduceRight", e, t);
  },
  shift() {
    return Wo(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Ls(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Wo(this, "splice", e);
  },
  toReversed() {
    return ho(this).toReversed();
  },
  toSorted(e) {
    return ho(this).toSorted(e);
  },
  toSpliced(...e) {
    return ho(this).toSpliced(...e);
  },
  unshift(...e) {
    return Wo(this, "unshift", e);
  },
  values() {
    return La(this, "values", (e) => Js(this, e));
  }
};
function La(e, t, o) {
  const a = ra(e), l = a[t]();
  return a !== e && !rs(e) && (l._next = l.next, l.next = () => {
    const r = l._next();
    return r.done || (r.value = o(r.value)), r;
  }), l;
}
const Zc = Array.prototype;
function Ls(e, t, o, a, l, r) {
  const c = ra(e), u = c !== e && !rs(e), d = c[t];
  if (d !== Zc[t]) {
    const p = d.apply(e, r);
    return u ? ps(p) : p;
  }
  let v = o;
  c !== e && (u ? v = function(p, w) {
    return o.call(this, Js(e, p), w, e);
  } : o.length > 2 && (v = function(p, w) {
    return o.call(this, p, w, e);
  }));
  const f = d.call(c, v, a);
  return u && l ? l(f) : f;
}
function Ol(e, t, o, a) {
  const l = ra(e);
  let r = o;
  return l !== e && (rs(e) ? o.length > 3 && (r = function(c, u, d) {
    return o.call(this, c, u, d, e);
  }) : r = function(c, u, d) {
    return o.call(this, c, Js(e, u), d, e);
  }), l[t](r, ...a);
}
function Da(e, t, o) {
  const a = ut(e);
  Bt(a, "iterate", fn);
  const l = a[t](...o);
  return (l === -1 || l === !1) && hl(o[0]) ? (o[0] = ut(o[0]), a[t](...o)) : l;
}
function Wo(e, t, o = []) {
  zs(), dl();
  const a = ut(e)[t].apply(e, o);
  return ml(), Fs(), a;
}
const eu = /* @__PURE__ */ ll("__proto__,__v_isRef,__isVue"), Xi = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(vs)
);
function tu(e) {
  vs(e) || (e = String(e));
  const t = ut(this);
  return Bt(t, "has", e), t.hasOwnProperty(e);
}
class Zi {
  constructor(t = !1, o = !1) {
    this._isReadonly = t, this._isShallow = o;
  }
  get(t, o, a) {
    if (o === "__v_skip") return t.__v_skip;
    const l = this._isReadonly, r = this._isShallow;
    if (o === "__v_isReactive")
      return !l;
    if (o === "__v_isReadonly")
      return l;
    if (o === "__v_isShallow")
      return r;
    if (o === "__v_raw")
      return a === (l ? r ? du : or : r ? sr : tr).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(a) ? t : void 0;
    const c = Xe(t);
    if (!l) {
      let d;
      if (c && (d = Xc[o]))
        return d;
      if (o === "hasOwnProperty")
        return tu;
    }
    const u = Reflect.get(
      t,
      o,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Ht(t) ? t : a
    );
    if ((vs(o) ? Xi.has(o) : eu(o)) || (l || Bt(t, "get", o), r))
      return u;
    if (Ht(u)) {
      const d = c && cl(o) ? u : u.value;
      return l && ht(d) ? jn(d) : d;
    }
    return ht(u) ? l ? jn(u) : go(u) : u;
  }
}
class er extends Zi {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, o, a, l) {
    let r = t[o];
    const c = Xe(t) && cl(o);
    if (!this._isShallow) {
      const v = Vs(r);
      if (!rs(a) && !Vs(a) && (r = ut(r), a = ut(a)), !c && Ht(r) && !Ht(a))
        return v || (r.value = a), !0;
    }
    const u = c ? Number(o) < t.length : ft(t, o), d = Reflect.set(
      t,
      o,
      a,
      Ht(t) ? t : l
    );
    return t === ut(l) && (u ? Xs(a, r) && Us(t, "set", o, a) : Us(t, "add", o, a)), d;
  }
  deleteProperty(t, o) {
    const a = ft(t, o);
    t[o];
    const l = Reflect.deleteProperty(t, o);
    return l && a && Us(t, "delete", o, void 0), l;
  }
  has(t, o) {
    const a = Reflect.has(t, o);
    return (!vs(o) || !Xi.has(o)) && Bt(t, "has", o), a;
  }
  ownKeys(t) {
    return Bt(
      t,
      "iterate",
      Xe(t) ? "length" : co
    ), Reflect.ownKeys(t);
  }
}
class su extends Zi {
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
const ou = /* @__PURE__ */ new er(), nu = /* @__PURE__ */ new su(), au = /* @__PURE__ */ new er(!0);
const qa = (e) => e, Tn = (e) => Reflect.getPrototypeOf(e);
function lu(e, t, o) {
  return function(...a) {
    const l = this.__v_raw, r = ut(l), c = xo(r), u = e === "entries" || e === Symbol.iterator && c, d = e === "keys" && c, v = l[e](...a), f = o ? qa : t ? Ro : ps;
    return !t && Bt(
      r,
      "iterate",
      d ? Ha : co
    ), {
      // iterator protocol
      next() {
        const { value: p, done: w } = v.next();
        return w ? { value: p, done: w } : {
          value: u ? [f(p[0]), f(p[1])] : f(p),
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
function Mn(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function iu(e, t) {
  const o = {
    get(l) {
      const r = this.__v_raw, c = ut(r), u = ut(l);
      e || (Xs(l, u) && Bt(c, "get", l), Bt(c, "get", u));
      const { has: d } = Tn(c), v = t ? qa : e ? Ro : ps;
      if (d.call(c, l))
        return v(r.get(l));
      if (d.call(c, u))
        return v(r.get(u));
      r !== c && r.get(l);
    },
    get size() {
      const l = this.__v_raw;
      return !e && Bt(ut(l), "iterate", co), l.size;
    },
    has(l) {
      const r = this.__v_raw, c = ut(r), u = ut(l);
      return e || (Xs(l, u) && Bt(c, "has", l), Bt(c, "has", u)), l === u ? r.has(l) : r.has(l) || r.has(u);
    },
    forEach(l, r) {
      const c = this, u = c.__v_raw, d = ut(u), v = t ? qa : e ? Ro : ps;
      return !e && Bt(d, "iterate", co), u.forEach((f, p) => l.call(r, v(f), v(p), c));
    }
  };
  return Rt(
    o,
    e ? {
      add: Mn("add"),
      set: Mn("set"),
      delete: Mn("delete"),
      clear: Mn("clear")
    } : {
      add(l) {
        !t && !rs(l) && !Vs(l) && (l = ut(l));
        const r = ut(this);
        return Tn(r).has.call(r, l) || (r.add(l), Us(r, "add", l, l)), this;
      },
      set(l, r) {
        !t && !rs(r) && !Vs(r) && (r = ut(r));
        const c = ut(this), { has: u, get: d } = Tn(c);
        let v = u.call(c, l);
        v || (l = ut(l), v = u.call(c, l));
        const f = d.call(c, l);
        return c.set(l, r), v ? Xs(r, f) && Us(c, "set", l, r) : Us(c, "add", l, r), this;
      },
      delete(l) {
        const r = ut(this), { has: c, get: u } = Tn(r);
        let d = c.call(r, l);
        d || (l = ut(l), d = c.call(r, l)), u && u.call(r, l);
        const v = r.delete(l);
        return d && Us(r, "delete", l, void 0), v;
      },
      clear() {
        const l = ut(this), r = l.size !== 0, c = l.clear();
        return r && Us(
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
    o[l] = lu(l, e, t);
  }), o;
}
function pl(e, t) {
  const o = iu(e, t);
  return (a, l, r) => l === "__v_isReactive" ? !e : l === "__v_isReadonly" ? e : l === "__v_raw" ? a : Reflect.get(
    ft(o, l) && l in a ? o : a,
    l,
    r
  );
}
const ru = {
  get: /* @__PURE__ */ pl(!1, !1)
}, cu = {
  get: /* @__PURE__ */ pl(!1, !0)
}, uu = {
  get: /* @__PURE__ */ pl(!0, !1)
};
const tr = /* @__PURE__ */ new WeakMap(), sr = /* @__PURE__ */ new WeakMap(), or = /* @__PURE__ */ new WeakMap(), du = /* @__PURE__ */ new WeakMap();
function mu(e) {
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
function fu(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : mu(Oc(e));
}
function go(e) {
  return Vs(e) ? e : gl(
    e,
    !1,
    ou,
    ru,
    tr
  );
}
function vu(e) {
  return gl(
    e,
    !1,
    au,
    cu,
    sr
  );
}
function jn(e) {
  return gl(
    e,
    !0,
    nu,
    uu,
    or
  );
}
function gl(e, t, o, a, l) {
  if (!ht(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = fu(e);
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
function uo(e) {
  return Vs(e) ? uo(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Vs(e) {
  return !!(e && e.__v_isReadonly);
}
function rs(e) {
  return !!(e && e.__v_isShallow);
}
function hl(e) {
  return e ? !!e.__v_raw : !1;
}
function ut(e) {
  const t = e && e.__v_raw;
  return t ? ut(t) : e;
}
function pu(e) {
  return !ft(e, "__v_skip") && Object.isExtensible(e) && Fi(e, "__v_skip", !0), e;
}
const ps = (e) => ht(e) ? go(e) : e, Ro = (e) => ht(e) ? jn(e) : e;
function Ht(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function k(e) {
  return gu(e, !1);
}
function gu(e, t) {
  return Ht(e) ? e : new hu(e, t);
}
class hu {
  constructor(t, o) {
    this.dep = new vl(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = o ? t : ut(t), this._value = o ? t : ps(t), this.__v_isShallow = o;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const o = this._rawValue, a = this.__v_isShallow || rs(t) || Vs(t);
    t = a ? t : ut(t), Xs(t, o) && (this._rawValue = t, this._value = a ? t : ps(t), this.dep.trigger());
  }
}
function ot(e) {
  return Ht(e) ? e.value : e;
}
const yu = {
  get: (e, t, o) => t === "__v_raw" ? e : ot(Reflect.get(e, t, o)),
  set: (e, t, o, a) => {
    const l = e[t];
    return Ht(l) && !Ht(o) ? (l.value = o, !0) : Reflect.set(e, t, o, a);
  }
};
function nr(e) {
  return uo(e) ? e : new Proxy(e, yu);
}
class wu {
  constructor(t, o, a) {
    this.fn = t, this.setter = o, this._value = void 0, this.dep = new vl(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = mn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !o, this.isSSR = a;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    _t !== this)
      return Hi(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Ji(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function _u(e, t, o = !1) {
  let a, l;
  return st(e) ? a = e : (a = e.get, l = e.set), new wu(a, l, o);
}
const Pn = {}, Hn = /* @__PURE__ */ new WeakMap();
let io;
function ku(e, t = !1, o = io) {
  if (o) {
    let a = Hn.get(o);
    a || Hn.set(o, a = []), a.push(e);
  }
}
function bu(e, t, o = wt) {
  const { immediate: a, deep: l, once: r, scheduler: c, augmentJob: u, call: d } = o, v = (M) => l ? M : rs(M) || l === !1 || l === 0 ? Os(M, 1) : Os(M);
  let f, p, w, g, _ = !1, b = !1;
  if (Ht(e) ? (p = () => e.value, _ = rs(e)) : uo(e) ? (p = () => v(e), _ = !0) : Xe(e) ? (b = !0, _ = e.some((M) => uo(M) || rs(M)), p = () => e.map((M) => {
    if (Ht(M))
      return M.value;
    if (uo(M))
      return v(M);
    if (st(M))
      return d ? d(M, 2) : M();
  })) : st(e) ? t ? p = d ? () => d(e, 2) : e : p = () => {
    if (w) {
      zs();
      try {
        w();
      } finally {
        Fs();
      }
    }
    const M = io;
    io = f;
    try {
      return d ? d(e, 3, [g]) : e(g);
    } finally {
      io = M;
    }
  } : p = Is, t && l) {
    const M = p, N = l === !0 ? 1 / 0 : l;
    p = () => Os(M(), N);
  }
  const S = Jc(), C = () => {
    f.stop(), S && S.active && rl(S.effects, f);
  };
  if (r && t) {
    const M = t;
    t = (...N) => {
      M(...N), C();
    };
  }
  let I = b ? new Array(e.length).fill(Pn) : Pn;
  const E = (M) => {
    if (!(!(f.flags & 1) || !f.dirty && !M))
      if (t) {
        const N = f.run();
        if (l || _ || (b ? N.some((F, V) => Xs(F, I[V])) : Xs(N, I))) {
          w && w();
          const F = io;
          io = f;
          try {
            const V = [
              N,
              // pass undefined as the old value when it's changed for the first time
              I === Pn ? void 0 : b && I[0] === Pn ? [] : I,
              g
            ];
            I = N, d ? d(t, 3, V) : (
              // @ts-expect-error
              t(...V)
            );
          } finally {
            io = F;
          }
        }
      } else
        f.run();
  };
  return u && u(E), f = new Gi(p), f.scheduler = c ? () => c(E, !1) : E, g = (M) => ku(M, !1, f), w = f.onStop = () => {
    const M = Hn.get(f);
    if (M) {
      if (d)
        d(M, 4);
      else
        for (const N of M) N();
      Hn.delete(f);
    }
  }, t ? a ? E(!0) : I = f.run() : c ? c(E.bind(null, !0), !0) : f.run(), C.pause = f.pause.bind(f), C.resume = f.resume.bind(f), C.stop = C, C;
}
function Os(e, t = 1 / 0, o) {
  if (t <= 0 || !ht(e) || e.__v_skip || (o = o || /* @__PURE__ */ new Map(), (o.get(e) || 0) >= t))
    return e;
  if (o.set(e, t), t--, Ht(e))
    Os(e.value, t, o);
  else if (Xe(e))
    for (let a = 0; a < e.length; a++)
      Os(e[a], t, o);
  else if (No(e) || xo(e))
    e.forEach((a) => {
      Os(a, t, o);
    });
  else if (zi(e)) {
    for (const a in e)
      Os(e[a], t, o);
    for (const a of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, a) && Os(e[a], t, o);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function kn(e, t, o, a) {
  try {
    return a ? e(...a) : e();
  } catch (l) {
    ca(l, t, o);
  }
}
function gs(e, t, o, a) {
  if (st(e)) {
    const l = kn(e, t, o, a);
    return l && Oi(l) && l.catch((r) => {
      ca(r, t, o);
    }), l;
  }
  if (Xe(e)) {
    const l = [];
    for (let r = 0; r < e.length; r++)
      l.push(gs(e[r], t, o, a));
    return l;
  }
}
function ca(e, t, o, a = !0) {
  const l = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: c } = t && t.appContext.config || wt;
  if (t) {
    let u = t.parent;
    const d = t.proxy, v = `https://vuejs.org/error-reference/#runtime-${o}`;
    for (; u; ) {
      const f = u.ec;
      if (f) {
        for (let p = 0; p < f.length; p++)
          if (f[p](e, d, v) === !1)
            return;
      }
      u = u.parent;
    }
    if (r) {
      zs(), kn(r, null, 10, [
        e,
        d,
        v
      ]), Fs();
      return;
    }
  }
  $u(e, o, l, a, c);
}
function $u(e, t, o, a = !0, l = !1) {
  if (l)
    throw e;
  console.error(e);
}
const Qt = [];
let bs = -1;
const So = [];
let Qs = null, _o = 0;
const ar = /* @__PURE__ */ Promise.resolve();
let qn = null;
function Ot(e) {
  const t = qn || ar;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Cu(e) {
  let t = bs + 1, o = Qt.length;
  for (; t < o; ) {
    const a = t + o >>> 1, l = Qt[a], r = vn(l);
    r < e || r === e && l.flags & 2 ? t = a + 1 : o = a;
  }
  return t;
}
function yl(e) {
  if (!(e.flags & 1)) {
    const t = vn(e), o = Qt[Qt.length - 1];
    !o || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= vn(o) ? Qt.push(e) : Qt.splice(Cu(t), 0, e), e.flags |= 1, lr();
  }
}
function lr() {
  qn || (qn = ar.then(rr));
}
function xu(e) {
  Xe(e) ? So.push(...e) : Qs && e.id === -1 ? Qs.splice(_o + 1, 0, e) : e.flags & 1 || (So.push(e), e.flags |= 1), lr();
}
function Al(e, t, o = bs + 1) {
  for (; o < Qt.length; o++) {
    const a = Qt[o];
    if (a && a.flags & 2) {
      if (e && a.id !== e.uid)
        continue;
      Qt.splice(o, 1), o--, a.flags & 4 && (a.flags &= -2), a(), a.flags & 4 || (a.flags &= -2);
    }
  }
}
function ir(e) {
  if (So.length) {
    const t = [...new Set(So)].sort(
      (o, a) => vn(o) - vn(a)
    );
    if (So.length = 0, Qs) {
      Qs.push(...t);
      return;
    }
    for (Qs = t, _o = 0; _o < Qs.length; _o++) {
      const o = Qs[_o];
      o.flags & 4 && (o.flags &= -2), o.flags & 8 || o(), o.flags &= -2;
    }
    Qs = null, _o = 0;
  }
}
const vn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function rr(e) {
  try {
    for (bs = 0; bs < Qt.length; bs++) {
      const t = Qt[bs];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), kn(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; bs < Qt.length; bs++) {
      const t = Qt[bs];
      t && (t.flags &= -2);
    }
    bs = -1, Qt.length = 0, ir(), qn = null, (Qt.length || So.length) && rr();
  }
}
let At = null, cr = null;
function Kn(e) {
  const t = At;
  return At = e, cr = e && e.type.__scopeId || null, t;
}
function h(e, t = At, o) {
  if (!t || e._n)
    return e;
  const a = (...l) => {
    a._d && Yn(-1);
    const r = Kn(t);
    let c;
    try {
      c = e(...l);
    } finally {
      Kn(r), a._d && Yn(1);
    }
    return c;
  };
  return a._n = !0, a._c = !0, a._d = !0, a;
}
function Pt(e, t) {
  if (At === null)
    return e;
  const o = va(At), a = e.dirs || (e.dirs = []);
  for (let l = 0; l < t.length; l++) {
    let [r, c, u, d = wt] = t[l];
    r && (st(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && Os(c), a.push({
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
function oo(e, t, o, a) {
  const l = e.dirs, r = t && t.dirs;
  for (let c = 0; c < l.length; c++) {
    const u = l[c];
    r && (u.oldValue = r[c].value);
    let d = u.dir[a];
    d && (zs(), gs(d, o, 8, [
      e.el,
      u,
      e,
      t
    ]), Fs());
  }
}
const ur = Symbol("_vte"), dr = (e) => e.__isTeleport, nn = (e) => e && (e.disabled || e.disabled === ""), zl = (e) => e && (e.defer || e.defer === ""), Fl = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Vl = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Ka = (e, t) => {
  const o = e && e.to;
  return xt(o) ? t ? t(o) : null : o;
}, mr = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, o, a, l, r, c, u, d, v) {
    const {
      mc: f,
      pc: p,
      pbc: w,
      o: { insert: g, querySelector: _, createText: b, createComment: S }
    } = v, C = nn(t.props);
    let { shapeFlag: I, children: E, dynamicChildren: M } = t;
    if (e == null) {
      const N = t.el = b(""), F = t.anchor = b("");
      g(N, o, a), g(F, o, a);
      const V = (q, ue) => {
        I & 16 && f(
          E,
          q,
          ue,
          l,
          r,
          c,
          u,
          d
        );
      }, D = () => {
        const q = t.target = Ka(t.props, _), ue = fr(q, t, b, g);
        q && (c !== "svg" && Fl(q) ? c = "svg" : c !== "mathml" && Vl(q) && (c = "mathml"), l && l.isCE && (l.ce._teleportTargets || (l.ce._teleportTargets = /* @__PURE__ */ new Set())).add(q), C || (V(q, ue), On(t, !1)));
      };
      C && (V(o, F), On(t, !0)), zl(t.props) ? (t.el.__isMounted = !1, Kt(() => {
        D(), delete t.el.__isMounted;
      }, r)) : D();
    } else {
      if (zl(t.props) && e.el.__isMounted === !1) {
        Kt(() => {
          mr.process(
            e,
            t,
            o,
            a,
            l,
            r,
            c,
            u,
            d,
            v
          );
        }, r);
        return;
      }
      t.el = e.el, t.targetStart = e.targetStart;
      const N = t.anchor = e.anchor, F = t.target = e.target, V = t.targetAnchor = e.targetAnchor, D = nn(e.props), q = D ? o : F, ue = D ? N : V;
      if (c === "svg" || Fl(F) ? c = "svg" : (c === "mathml" || Vl(F)) && (c = "mathml"), M ? (w(
        e.dynamicChildren,
        M,
        q,
        l,
        r,
        c,
        u
      ), $l(e, t, !0)) : d || p(
        e,
        t,
        q,
        ue,
        l,
        r,
        c,
        u,
        !1
      ), C)
        D ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Rn(
          t,
          o,
          N,
          v,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const le = t.target = Ka(
          t.props,
          _
        );
        le && Rn(
          t,
          le,
          null,
          v,
          0
        );
      } else D && Rn(
        t,
        F,
        V,
        v,
        1
      );
      On(t, C);
    }
  },
  remove(e, t, o, { um: a, o: { remove: l } }, r) {
    const {
      shapeFlag: c,
      children: u,
      anchor: d,
      targetStart: v,
      targetAnchor: f,
      target: p,
      props: w
    } = e;
    if (p && (l(v), l(f)), r && l(d), c & 16) {
      const g = r || !nn(w);
      for (let _ = 0; _ < u.length; _++) {
        const b = u[_];
        a(
          b,
          t,
          o,
          g,
          !!b.dynamicChildren
        );
      }
    }
  },
  move: Rn,
  hydrate: Su
};
function Rn(e, t, o, { o: { insert: a }, m: l }, r = 2) {
  r === 0 && a(e.targetAnchor, t, o);
  const { el: c, anchor: u, shapeFlag: d, children: v, props: f } = e, p = r === 2;
  if (p && a(c, t, o), (!p || nn(f)) && d & 16)
    for (let w = 0; w < v.length; w++)
      l(
        v[w],
        t,
        o,
        2
      );
  p && a(u, t, o);
}
function Su(e, t, o, a, l, r, {
  o: { nextSibling: c, parentNode: u, querySelector: d, insert: v, createText: f }
}, p) {
  function w(b, S, C, I) {
    S.anchor = p(
      c(b),
      S,
      u(b),
      o,
      a,
      l,
      r
    ), S.targetStart = C, S.targetAnchor = I;
  }
  const g = t.target = Ka(
    t.props,
    d
  ), _ = nn(t.props);
  if (g) {
    const b = g._lpa || g.firstChild;
    if (t.shapeFlag & 16)
      if (_)
        w(
          e,
          t,
          b,
          b && c(b)
        );
      else {
        t.anchor = c(e);
        let S = b;
        for (; S; ) {
          if (S && S.nodeType === 8) {
            if (S.data === "teleport start anchor")
              t.targetStart = S;
            else if (S.data === "teleport anchor") {
              t.targetAnchor = S, g._lpa = t.targetAnchor && c(t.targetAnchor);
              break;
            }
          }
          S = c(S);
        }
        t.targetAnchor || fr(g, t, f, v), p(
          b && c(b),
          t,
          g,
          o,
          a,
          l,
          r
        );
      }
    On(t, _);
  } else _ && t.shapeFlag & 16 && w(e, t, e, c(e));
  return t.anchor && c(t.anchor);
}
const Yt = mr;
function On(e, t) {
  const o = e.ctx;
  if (o && o.ut) {
    let a, l;
    for (t ? (a = e.el, l = e.anchor) : (a = e.targetStart, l = e.targetAnchor); a && a !== l; )
      a.nodeType === 1 && a.setAttribute("data-v-owner", o.uid), a = a.nextSibling;
    o.ut();
  }
}
function fr(e, t, o, a) {
  const l = t.targetStart = o(""), r = t.targetAnchor = o("");
  return l[ur] = r, e && (a(l, e), a(r, e)), r;
}
const Ns = Symbol("_leaveCb"), Ln = Symbol("_enterCb");
function vr() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return lt(() => {
    e.isMounted = !0;
  }), bn(() => {
    e.isUnmounting = !0;
  }), e;
}
const ls = [Function, Array], pr = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: ls,
  onEnter: ls,
  onAfterEnter: ls,
  onEnterCancelled: ls,
  // leave
  onBeforeLeave: ls,
  onLeave: ls,
  onAfterLeave: ls,
  onLeaveCancelled: ls,
  // appear
  onBeforeAppear: ls,
  onAppear: ls,
  onAfterAppear: ls,
  onAppearCancelled: ls
}, gr = (e) => {
  const t = e.subTree;
  return t.component ? gr(t.component) : t;
}, Iu = {
  name: "BaseTransition",
  props: pr,
  setup(e, { slots: t }) {
    const o = xl(), a = vr();
    return () => {
      const l = t.default && wl(t.default(), !0);
      if (!l || !l.length)
        return;
      const r = hr(l), c = ut(e), { mode: u } = c;
      if (a.isLeaving)
        return Na(r);
      const d = Bl(r);
      if (!d)
        return Na(r);
      let v = pn(
        d,
        c,
        a,
        o,
        // #11061, ensure enterHooks is fresh after clone
        (p) => v = p
      );
      d.type !== Gt && vo(d, v);
      let f = o.subTree && Bl(o.subTree);
      if (f && f.type !== Gt && !ro(f, d) && gr(o).type !== Gt) {
        let p = pn(
          f,
          c,
          a,
          o
        );
        if (vo(f, p), u === "out-in" && d.type !== Gt)
          return a.isLeaving = !0, p.afterLeave = () => {
            a.isLeaving = !1, o.job.flags & 8 || o.update(), delete p.afterLeave, f = void 0;
          }, Na(r);
        u === "in-out" && d.type !== Gt ? p.delayLeave = (w, g, _) => {
          const b = yr(
            a,
            f
          );
          b[String(f.key)] = f, w[Ns] = () => {
            g(), w[Ns] = void 0, delete v.delayedLeave, f = void 0;
          }, v.delayedLeave = () => {
            _(), delete v.delayedLeave, f = void 0;
          };
        } : f = void 0;
      } else f && (f = void 0);
      return r;
    };
  }
};
function hr(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const o of e)
      if (o.type !== Gt) {
        t = o;
        break;
      }
  }
  return t;
}
const Eu = Iu;
function yr(e, t) {
  const { leavingVNodes: o } = e;
  let a = o.get(t.type);
  return a || (a = /* @__PURE__ */ Object.create(null), o.set(t.type, a)), a;
}
function pn(e, t, o, a, l) {
  const {
    appear: r,
    mode: c,
    persisted: u = !1,
    onBeforeEnter: d,
    onEnter: v,
    onAfterEnter: f,
    onEnterCancelled: p,
    onBeforeLeave: w,
    onLeave: g,
    onAfterLeave: _,
    onLeaveCancelled: b,
    onBeforeAppear: S,
    onAppear: C,
    onAfterAppear: I,
    onAppearCancelled: E
  } = t, M = String(e.key), N = yr(o, e), F = (q, ue) => {
    q && gs(
      q,
      a,
      9,
      ue
    );
  }, V = (q, ue) => {
    const le = ue[1];
    F(q, ue), Xe(q) ? q.every((Y) => Y.length <= 1) && le() : q.length <= 1 && le();
  }, D = {
    mode: c,
    persisted: u,
    beforeEnter(q) {
      let ue = d;
      if (!o.isMounted)
        if (r)
          ue = S || d;
        else
          return;
      q[Ns] && q[Ns](
        !0
        /* cancelled */
      );
      const le = N[M];
      le && ro(e, le) && le.el[Ns] && le.el[Ns](), F(ue, [q]);
    },
    enter(q) {
      let ue = v, le = f, Y = p;
      if (!o.isMounted)
        if (r)
          ue = C || v, le = I || f, Y = E || p;
        else
          return;
      let me = !1;
      const ne = q[Ln] = (B) => {
        me || (me = !0, B ? F(Y, [q]) : F(le, [q]), D.delayedLeave && D.delayedLeave(), q[Ln] = void 0);
      };
      ue ? V(ue, [q, ne]) : ne();
    },
    leave(q, ue) {
      const le = String(e.key);
      if (q[Ln] && q[Ln](
        !0
        /* cancelled */
      ), o.isUnmounting)
        return ue();
      F(w, [q]);
      let Y = !1;
      const me = q[Ns] = (ne) => {
        Y || (Y = !0, ue(), ne ? F(b, [q]) : F(_, [q]), q[Ns] = void 0, N[le] === e && delete N[le]);
      };
      N[le] = e, g ? V(g, [q, me]) : me();
    },
    clone(q) {
      const ue = pn(
        q,
        t,
        o,
        a,
        l
      );
      return l && l(ue), ue;
    }
  };
  return D;
}
function Na(e) {
  if (ua(e))
    return e = eo(e), e.children = null, e;
}
function Bl(e) {
  if (!ua(e))
    return dr(e.type) && e.children ? hr(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: o } = e;
  if (o) {
    if (t & 16)
      return o[0];
    if (t & 32 && st(o.default))
      return o.default();
  }
}
function vo(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, vo(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function wl(e, t = !1, o) {
  let a = [], l = 0;
  for (let r = 0; r < e.length; r++) {
    let c = e[r];
    const u = o == null ? c.key : String(o) + String(c.key != null ? c.key : r);
    c.type === W ? (c.patchFlag & 128 && l++, a = a.concat(
      wl(c.children, t, u)
    )) : (t || c.type !== Gt) && a.push(u != null ? eo(c, { key: u }) : c);
  }
  if (l > 1)
    for (let r = 0; r < a.length; r++)
      a[r].patchFlag = -2;
  return a;
}
// @__NO_SIDE_EFFECTS__
function xe(e, t) {
  return st(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Rt({ name: e.name }, t, { setup: e })
  ) : e;
}
function wr(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Jn = /* @__PURE__ */ new WeakMap();
function an(e, t, o, a, l = !1) {
  if (Xe(e)) {
    e.forEach(
      (_, b) => an(
        _,
        t && (Xe(t) ? t[b] : t),
        o,
        a,
        l
      )
    );
    return;
  }
  if (Io(a) && !l) {
    a.shapeFlag & 512 && a.type.__asyncResolved && a.component.subTree.component && an(e, t, o, a.component.subTree);
    return;
  }
  const r = a.shapeFlag & 4 ? va(a.component) : a.el, c = l ? null : r, { i: u, r: d } = e, v = t && t.r, f = u.refs === wt ? u.refs = {} : u.refs, p = u.setupState, w = ut(p), g = p === wt ? Ui : (_) => ft(w, _);
  if (v != null && v !== d) {
    if (Wl(t), xt(v))
      f[v] = null, g(v) && (p[v] = null);
    else if (Ht(v)) {
      v.value = null;
      const _ = t;
      _.k && (f[_.k] = null);
    }
  }
  if (st(d))
    kn(d, u, 12, [c, f]);
  else {
    const _ = xt(d), b = Ht(d);
    if (_ || b) {
      const S = () => {
        if (e.f) {
          const C = _ ? g(d) ? p[d] : f[d] : d.value;
          if (l)
            Xe(C) && rl(C, r);
          else if (Xe(C))
            C.includes(r) || C.push(r);
          else if (_)
            f[d] = [r], g(d) && (p[d] = f[d]);
          else {
            const I = [r];
            d.value = I, e.k && (f[e.k] = I);
          }
        } else _ ? (f[d] = c, g(d) && (p[d] = c)) : b && (d.value = c, e.k && (f[e.k] = c));
      };
      if (c) {
        const C = () => {
          S(), Jn.delete(e);
        };
        C.id = -1, Jn.set(e, C), Kt(C, o);
      } else
        Wl(e), S();
    }
  }
}
function Wl(e) {
  const t = Jn.get(e);
  t && (t.flags |= 8, Jn.delete(e));
}
ia().requestIdleCallback;
ia().cancelIdleCallback;
const Io = (e) => !!e.type.__asyncLoader, ua = (e) => e.type.__isKeepAlive;
function Tu(e, t) {
  _r(e, "a", t);
}
function Mu(e, t) {
  _r(e, "da", t);
}
function _r(e, t, o = jt) {
  const a = e.__wdc || (e.__wdc = () => {
    let l = o;
    for (; l; ) {
      if (l.isDeactivated)
        return;
      l = l.parent;
    }
    return e();
  });
  if (da(t, a, o), o) {
    let l = o.parent;
    for (; l && l.parent; )
      ua(l.parent.vnode) && Pu(a, t, o, l), l = l.parent;
  }
}
function Pu(e, t, o, a) {
  const l = da(
    t,
    e,
    a,
    !0
    /* prepend */
  );
  Uo(() => {
    rl(a[t], l);
  }, o);
}
function da(e, t, o = jt, a = !1) {
  if (o) {
    const l = o[e] || (o[e] = []), r = t.__weh || (t.__weh = (...c) => {
      zs();
      const u = $n(o), d = gs(t, o, e, c);
      return u(), Fs(), d;
    });
    return a ? l.unshift(r) : l.push(r), r;
  }
}
const Bs = (e) => (t, o = jt) => {
  (!yn || e === "sp") && da(e, (...a) => t(...a), o);
}, Ru = Bs("bm"), lt = Bs("m"), Lu = Bs(
  "bu"
), kr = Bs("u"), bn = Bs(
  "bum"
), Uo = Bs("um"), Du = Bs(
  "sp"
), Nu = Bs("rtg"), Uu = Bs("rtc");
function Ou(e, t = jt) {
  da("ec", e, t);
}
const Au = "components", br = Symbol.for("v-ndc");
function _l(e) {
  return xt(e) ? zu(Au, e, !1) || e : e || br;
}
function zu(e, t, o = !0, a = !1) {
  const l = At || jt;
  if (l) {
    const r = l.type;
    {
      const u = Id(
        r,
        !1
      );
      if (u && (u === t || u === us(t) || u === aa(us(t))))
        return r;
    }
    const c = (
      // local registration
      // check instance[type] first which is resolved for options API
      Gl(l[e] || r[e], t) || // global registration
      Gl(l.appContext[e], t)
    );
    return !c && a ? r : c;
  }
}
function Gl(e, t) {
  return e && (e[t] || e[us(t)] || e[aa(us(t))]);
}
function ye(e, t, o, a) {
  let l;
  const r = o, c = Xe(e);
  if (c || xt(e)) {
    const u = c && uo(e);
    let d = !1, v = !1;
    u && (d = !rs(e), v = Vs(e), e = ra(e)), l = new Array(e.length);
    for (let f = 0, p = e.length; f < p; f++)
      l[f] = t(
        d ? v ? Ro(ps(e[f])) : ps(e[f]) : e[f],
        f,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    l = new Array(e);
    for (let u = 0; u < e; u++)
      l[u] = t(u + 1, u, void 0, r);
  } else if (ht(e))
    if (e[Symbol.iterator])
      l = Array.from(
        e,
        (u, d) => t(u, d, void 0, r)
      );
    else {
      const u = Object.keys(e);
      l = new Array(u.length);
      for (let d = 0, v = u.length; d < v; d++) {
        const f = u[d];
        l[d] = t(e[f], f, d, r);
      }
    }
  else
    l = [];
  return l;
}
function Zt(e, t) {
  for (let o = 0; o < t.length; o++) {
    const a = t[o];
    if (Xe(a))
      for (let l = 0; l < a.length; l++)
        e[a[l].name] = a[l].fn;
    else a && (e[a.name] = a.key ? (...l) => {
      const r = a.fn(...l);
      return r && (r.key = a.key), r;
    } : a.fn);
  }
  return e;
}
function at(e, t, o = {}, a, l) {
  if (At.ce || At.parent && Io(At.parent) && At.parent.ce) {
    const v = Object.keys(o).length > 0;
    return t !== "default" && (o.name = t), n(), L(
      W,
      null,
      [$("slot", o, a && a())],
      v ? -2 : 64
    );
  }
  let r = e[t];
  r && r._c && (r._d = !1), n();
  const c = r && $r(r(o)), u = o.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  c && c.key, d = L(
    W,
    {
      key: (u && !vs(u) ? u : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!c && a ? "_fb" : "")
    },
    c || (a ? a() : []),
    c && e._ === 1 ? 64 : -2
  );
  return r && r._c && (r._d = !0), d;
}
function $r(e) {
  return e.some((t) => hn(t) ? !(t.type === Gt || t.type === W && !$r(t.children)) : !0) ? e : null;
}
const Ja = (e) => e ? Br(e) ? va(e) : Ja(e.parent) : null, ln = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Rt(/* @__PURE__ */ Object.create(null), {
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
    $options: (e) => xr(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      yl(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ot.bind(e.proxy)),
    $watch: (e) => Yu.bind(e)
  })
), Ua = (e, t) => e !== wt && !e.__isScriptSetup && ft(e, t), Fu = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: o, setupState: a, data: l, props: r, accessCache: c, type: u, appContext: d } = e;
    if (t[0] !== "$") {
      const w = c[t];
      if (w !== void 0)
        switch (w) {
          case 1:
            return a[t];
          case 2:
            return l[t];
          case 4:
            return o[t];
          case 3:
            return r[t];
        }
      else {
        if (Ua(a, t))
          return c[t] = 1, a[t];
        if (l !== wt && ft(l, t))
          return c[t] = 2, l[t];
        if (ft(r, t))
          return c[t] = 3, r[t];
        if (o !== wt && ft(o, t))
          return c[t] = 4, o[t];
        Qa && (c[t] = 0);
      }
    }
    const v = ln[t];
    let f, p;
    if (v)
      return t === "$attrs" && Bt(e.attrs, "get", ""), v(e);
    if (
      // css module (injected by vue-loader)
      (f = u.__cssModules) && (f = f[t])
    )
      return f;
    if (o !== wt && ft(o, t))
      return c[t] = 4, o[t];
    if (
      // global properties
      p = d.config.globalProperties, ft(p, t)
    )
      return p[t];
  },
  set({ _: e }, t, o) {
    const { data: a, setupState: l, ctx: r } = e;
    return Ua(l, t) ? (l[t] = o, !0) : a !== wt && ft(a, t) ? (a[t] = o, !0) : ft(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = o, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: o, ctx: a, appContext: l, props: r, type: c }
  }, u) {
    let d;
    return !!(o[u] || e !== wt && u[0] !== "$" && ft(e, u) || Ua(t, u) || ft(r, u) || ft(a, u) || ft(ln, u) || ft(l.config.globalProperties, u) || (d = c.__cssModules) && d[u]);
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
let Qa = !0;
function Vu(e) {
  const t = xr(e), o = e.proxy, a = e.ctx;
  Qa = !1, t.beforeCreate && Hl(t.beforeCreate, e, "bc");
  const {
    // state
    data: l,
    computed: r,
    methods: c,
    watch: u,
    provide: d,
    inject: v,
    // lifecycle
    created: f,
    beforeMount: p,
    mounted: w,
    beforeUpdate: g,
    updated: _,
    activated: b,
    deactivated: S,
    beforeDestroy: C,
    beforeUnmount: I,
    destroyed: E,
    unmounted: M,
    render: N,
    renderTracked: F,
    renderTriggered: V,
    errorCaptured: D,
    serverPrefetch: q,
    // public API
    expose: ue,
    inheritAttrs: le,
    // assets
    components: Y,
    directives: me,
    filters: ne
  } = t;
  if (v && Bu(v, a, null), c)
    for (const we in c) {
      const oe = c[we];
      st(oe) && (a[we] = oe.bind(o));
    }
  if (l) {
    const we = l.call(o, o);
    ht(we) && (e.data = go(we));
  }
  if (Qa = !0, r)
    for (const we in r) {
      const oe = r[we], de = st(oe) ? oe.bind(o, o) : st(oe.get) ? oe.get.bind(o, o) : Is, ce = !st(oe) && st(oe.set) ? oe.set.bind(o) : Is, K = R({
        get: de,
        set: ce
      });
      Object.defineProperty(a, we, {
        enumerable: !0,
        configurable: !0,
        get: () => K.value,
        set: (ee) => K.value = ee
      });
    }
  if (u)
    for (const we in u)
      Cr(u[we], a, o, we);
  if (d) {
    const we = st(d) ? d.call(o) : d;
    Reflect.ownKeys(we).forEach((oe) => {
      Ku(oe, we[oe]);
    });
  }
  f && Hl(f, e, "c");
  function H(we, oe) {
    Xe(oe) ? oe.forEach((de) => we(de.bind(o))) : oe && we(oe.bind(o));
  }
  if (H(Ru, p), H(lt, w), H(Lu, g), H(kr, _), H(Tu, b), H(Mu, S), H(Ou, D), H(Uu, F), H(Nu, V), H(bn, I), H(Uo, M), H(Du, q), Xe(ue))
    if (ue.length) {
      const we = e.exposed || (e.exposed = {});
      ue.forEach((oe) => {
        Object.defineProperty(we, oe, {
          get: () => o[oe],
          set: (de) => o[oe] = de,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  N && e.render === Is && (e.render = N), le != null && (e.inheritAttrs = le), Y && (e.components = Y), me && (e.directives = me), q && wr(e);
}
function Bu(e, t, o = Is) {
  Xe(e) && (e = Ya(e));
  for (const a in e) {
    const l = e[a];
    let r;
    ht(l) ? "default" in l ? r = An(
      l.from || a,
      l.default,
      !0
    ) : r = An(l.from || a) : r = An(l), Ht(r) ? Object.defineProperty(t, a, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (c) => r.value = c
    }) : t[a] = r;
  }
}
function Hl(e, t, o) {
  gs(
    Xe(e) ? e.map((a) => a.bind(t.proxy)) : e.bind(t.proxy),
    t,
    o
  );
}
function Cr(e, t, o, a) {
  let l = a.includes(".") ? Er(o, a) : () => o[a];
  if (xt(e)) {
    const r = t[e];
    st(r) && gt(l, r);
  } else if (st(e))
    gt(l, e.bind(o));
  else if (ht(e))
    if (Xe(e))
      e.forEach((r) => Cr(r, t, o, a));
    else {
      const r = st(e.handler) ? e.handler.bind(o) : t[e.handler];
      st(r) && gt(l, r, e);
    }
}
function xr(e) {
  const t = e.type, { mixins: o, extends: a } = t, {
    mixins: l,
    optionsCache: r,
    config: { optionMergeStrategies: c }
  } = e.appContext, u = r.get(t);
  let d;
  return u ? d = u : !l.length && !o && !a ? d = t : (d = {}, l.length && l.forEach(
    (v) => Qn(d, v, c, !0)
  ), Qn(d, t, c)), ht(t) && r.set(t, d), d;
}
function Qn(e, t, o, a = !1) {
  const { mixins: l, extends: r } = t;
  r && Qn(e, r, o, !0), l && l.forEach(
    (c) => Qn(e, c, o, !0)
  );
  for (const c in t)
    if (!(a && c === "expose")) {
      const u = Wu[c] || o && o[c];
      e[c] = u ? u(e[c], t[c]) : t[c];
    }
  return e;
}
const Wu = {
  data: ql,
  props: Kl,
  emits: Kl,
  // objects
  methods: Xo,
  computed: Xo,
  // lifecycle
  beforeCreate: qt,
  created: qt,
  beforeMount: qt,
  mounted: qt,
  beforeUpdate: qt,
  updated: qt,
  beforeDestroy: qt,
  beforeUnmount: qt,
  destroyed: qt,
  unmounted: qt,
  activated: qt,
  deactivated: qt,
  errorCaptured: qt,
  serverPrefetch: qt,
  // assets
  components: Xo,
  directives: Xo,
  // watch
  watch: ju,
  // provide / inject
  provide: ql,
  inject: Gu
};
function ql(e, t) {
  return t ? e ? function() {
    return Rt(
      st(e) ? e.call(this, this) : e,
      st(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Gu(e, t) {
  return Xo(Ya(e), Ya(t));
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
function qt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Xo(e, t) {
  return e ? Rt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Kl(e, t) {
  return e ? Xe(e) && Xe(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Rt(
    /* @__PURE__ */ Object.create(null),
    jl(e),
    jl(t ?? {})
  ) : t;
}
function ju(e, t) {
  if (!e) return t;
  if (!t) return e;
  const o = Rt(/* @__PURE__ */ Object.create(null), e);
  for (const a in t)
    o[a] = qt(e[a], t[a]);
  return o;
}
function Sr() {
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
let Hu = 0;
function qu(e, t) {
  return function(a, l = null) {
    st(a) || (a = Rt({}, a)), l != null && !ht(l) && (l = null);
    const r = Sr(), c = /* @__PURE__ */ new WeakSet(), u = [];
    let d = !1;
    const v = r.app = {
      _uid: Hu++,
      _component: a,
      _props: l,
      _container: null,
      _context: r,
      _instance: null,
      version: Td,
      get config() {
        return r.config;
      },
      set config(f) {
      },
      use(f, ...p) {
        return c.has(f) || (f && st(f.install) ? (c.add(f), f.install(v, ...p)) : st(f) && (c.add(f), f(v, ...p))), v;
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
          const g = v._ceVNode || $(a, l);
          return g.appContext = r, w === !0 ? w = "svg" : w === !1 && (w = void 0), e(g, f, w), d = !0, v._container = f, f.__vue_app__ = v, va(g.component);
        }
      },
      onUnmount(f) {
        u.push(f);
      },
      unmount() {
        d && (gs(
          u,
          v._instance,
          16
        ), e(null, v._container), delete v._container.__vue_app__);
      },
      provide(f, p) {
        return r.provides[f] = p, v;
      },
      runWithContext(f) {
        const p = Eo;
        Eo = v;
        try {
          return f();
        } finally {
          Eo = p;
        }
      }
    };
    return v;
  };
}
let Eo = null;
function Ku(e, t) {
  if (jt) {
    let o = jt.provides;
    const a = jt.parent && jt.parent.provides;
    a === o && (o = jt.provides = Object.create(a)), o[e] = t;
  }
}
function An(e, t, o = !1) {
  const a = xl();
  if (a || Eo) {
    let l = Eo ? Eo._context.provides : a ? a.parent == null || a.ce ? a.vnode.appContext && a.vnode.appContext.provides : a.parent.provides : void 0;
    if (l && e in l)
      return l[e];
    if (arguments.length > 1)
      return o && st(t) ? t.call(a && a.proxy) : t;
  }
}
const Ju = Symbol.for("v-scx"), Qu = () => An(Ju);
function gt(e, t, o) {
  return Ir(e, t, o);
}
function Ir(e, t, o = wt) {
  const { immediate: a, deep: l, flush: r, once: c } = o, u = Rt({}, o), d = t && a || !t && r !== "post";
  let v;
  if (yn) {
    if (r === "sync") {
      const g = Qu();
      v = g.__watcherHandles || (g.__watcherHandles = []);
    } else if (!d) {
      const g = () => {
      };
      return g.stop = Is, g.resume = Is, g.pause = Is, g;
    }
  }
  const f = jt;
  u.call = (g, _, b) => gs(g, f, _, b);
  let p = !1;
  r === "post" ? u.scheduler = (g) => {
    Kt(g, f && f.suspense);
  } : r !== "sync" && (p = !0, u.scheduler = (g, _) => {
    _ ? g() : yl(g);
  }), u.augmentJob = (g) => {
    t && (g.flags |= 4), p && (g.flags |= 2, f && (g.id = f.uid, g.i = f));
  };
  const w = bu(e, t, u);
  return yn && (v ? v.push(w) : d && w()), w;
}
function Yu(e, t, o) {
  const a = this.proxy, l = xt(e) ? e.includes(".") ? Er(a, e) : () => a[e] : e.bind(a, a);
  let r;
  st(t) ? r = t : (r = t.handler, o = t);
  const c = $n(this), u = Ir(l, r.bind(a), o);
  return c(), u;
}
function Er(e, t) {
  const o = t.split(".");
  return () => {
    let a = e;
    for (let l = 0; l < o.length && a; l++)
      a = a[o[l]];
    return a;
  };
}
const Xu = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${us(t)}Modifiers`] || e[`${so(t)}Modifiers`];
function Zu(e, t, ...o) {
  if (e.isUnmounted) return;
  const a = e.vnode.props || wt;
  let l = o;
  const r = t.startsWith("update:"), c = r && Xu(a, t.slice(7));
  c && (c.trim && (l = o.map((f) => xt(f) ? f.trim() : f)), c.number && (l = o.map(la)));
  let u, d = a[u = Ma(t)] || // also try camelCase event handler (#2249)
  a[u = Ma(us(t))];
  !d && r && (d = a[u = Ma(so(t))]), d && gs(
    d,
    e,
    6,
    l
  );
  const v = a[u + "Once"];
  if (v) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[u])
      return;
    e.emitted[u] = !0, gs(
      v,
      e,
      6,
      l
    );
  }
}
const ed = /* @__PURE__ */ new WeakMap();
function Tr(e, t, o = !1) {
  const a = o ? ed : t.emitsCache, l = a.get(e);
  if (l !== void 0)
    return l;
  const r = e.emits;
  let c = {}, u = !1;
  if (!st(e)) {
    const d = (v) => {
      const f = Tr(v, t, !0);
      f && (u = !0, Rt(c, f));
    };
    !o && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  return !r && !u ? (ht(e) && a.set(e, null), null) : (Xe(r) ? r.forEach((d) => c[d] = null) : Rt(c, r), ht(e) && a.set(e, c), c);
}
function ma(e, t) {
  return !e || !oa(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), ft(e, t[0].toLowerCase() + t.slice(1)) || ft(e, so(t)) || ft(e, t));
}
function Jl(e) {
  const {
    type: t,
    vnode: o,
    proxy: a,
    withProxy: l,
    propsOptions: [r],
    slots: c,
    attrs: u,
    emit: d,
    render: v,
    renderCache: f,
    props: p,
    data: w,
    setupState: g,
    ctx: _,
    inheritAttrs: b
  } = e, S = Kn(e);
  let C, I;
  try {
    if (o.shapeFlag & 4) {
      const M = l || a, N = M;
      C = xs(
        v.call(
          N,
          M,
          f,
          p,
          g,
          w,
          _
        )
      ), I = u;
    } else {
      const M = t;
      C = xs(
        M.length > 1 ? M(
          p,
          { attrs: u, slots: c, emit: d }
        ) : M(
          p,
          null
        )
      ), I = t.props ? u : td(u);
    }
  } catch (M) {
    rn.length = 0, ca(M, e, 1), C = $(Gt);
  }
  let E = C;
  if (I && b !== !1) {
    const M = Object.keys(I), { shapeFlag: N } = E;
    M.length && N & 7 && (r && M.some(il) && (I = sd(
      I,
      r
    )), E = eo(E, I, !1, !0));
  }
  return o.dirs && (E = eo(E, null, !1, !0), E.dirs = E.dirs ? E.dirs.concat(o.dirs) : o.dirs), o.transition && vo(E, o.transition), C = E, Kn(S), C;
}
const td = (e) => {
  let t;
  for (const o in e)
    (o === "class" || o === "style" || oa(o)) && ((t || (t = {}))[o] = e[o]);
  return t;
}, sd = (e, t) => {
  const o = {};
  for (const a in e)
    (!il(a) || !(a.slice(9) in t)) && (o[a] = e[a]);
  return o;
};
function od(e, t, o) {
  const { props: a, children: l, component: r } = e, { props: c, children: u, patchFlag: d } = t, v = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (o && d >= 0) {
    if (d & 1024)
      return !0;
    if (d & 16)
      return a ? Ql(a, c, v) : !!c;
    if (d & 8) {
      const f = t.dynamicProps;
      for (let p = 0; p < f.length; p++) {
        const w = f[p];
        if (c[w] !== a[w] && !ma(v, w))
          return !0;
      }
    }
  } else
    return (l || u) && (!u || !u.$stable) ? !0 : a === c ? !1 : a ? c ? Ql(a, c, v) : !0 : !!c;
  return !1;
}
function Ql(e, t, o) {
  const a = Object.keys(t);
  if (a.length !== Object.keys(e).length)
    return !0;
  for (let l = 0; l < a.length; l++) {
    const r = a[l];
    if (t[r] !== e[r] && !ma(o, r))
      return !0;
  }
  return !1;
}
function nd({ vnode: e, parent: t }, o) {
  for (; t; ) {
    const a = t.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.el = e.el), a === e)
      (e = t.vnode).el = o, t = t.parent;
    else
      break;
  }
}
const Mr = {}, Pr = () => Object.create(Mr), Rr = (e) => Object.getPrototypeOf(e) === Mr;
function ad(e, t, o, a = !1) {
  const l = {}, r = Pr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Lr(e, t, l, r);
  for (const c in e.propsOptions[0])
    c in l || (l[c] = void 0);
  o ? e.props = a ? l : vu(l) : e.type.props ? e.props = l : e.props = r, e.attrs = r;
}
function ld(e, t, o, a) {
  const {
    props: l,
    attrs: r,
    vnode: { patchFlag: c }
  } = e, u = ut(l), [d] = e.propsOptions;
  let v = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (a || c > 0) && !(c & 16)
  ) {
    if (c & 8) {
      const f = e.vnode.dynamicProps;
      for (let p = 0; p < f.length; p++) {
        let w = f[p];
        if (ma(e.emitsOptions, w))
          continue;
        const g = t[w];
        if (d)
          if (ft(r, w))
            g !== r[w] && (r[w] = g, v = !0);
          else {
            const _ = us(w);
            l[_] = Xa(
              d,
              u,
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
    Lr(e, t, l, r) && (v = !0);
    let f;
    for (const p in u)
      (!t || // for camelCase
      !ft(t, p) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((f = so(p)) === p || !ft(t, f))) && (d ? o && // for camelCase
      (o[p] !== void 0 || // for kebab-case
      o[f] !== void 0) && (l[p] = Xa(
        d,
        u,
        p,
        void 0,
        e,
        !0
      )) : delete l[p]);
    if (r !== u)
      for (const p in r)
        (!t || !ft(t, p)) && (delete r[p], v = !0);
  }
  v && Us(e.attrs, "set", "");
}
function Lr(e, t, o, a) {
  const [l, r] = e.propsOptions;
  let c = !1, u;
  if (t)
    for (let d in t) {
      if (tn(d))
        continue;
      const v = t[d];
      let f;
      l && ft(l, f = us(d)) ? !r || !r.includes(f) ? o[f] = v : (u || (u = {}))[f] = v : ma(e.emitsOptions, d) || (!(d in a) || v !== a[d]) && (a[d] = v, c = !0);
    }
  if (r) {
    const d = ut(o), v = u || wt;
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
  return c;
}
function Xa(e, t, o, a, l, r) {
  const c = e[o];
  if (c != null) {
    const u = ft(c, "default");
    if (u && a === void 0) {
      const d = c.default;
      if (c.type !== Function && !c.skipFactory && st(d)) {
        const { propsDefaults: v } = l;
        if (o in v)
          a = v[o];
        else {
          const f = $n(l);
          a = v[o] = d.call(
            null,
            t
          ), f();
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
    ] && (a === "" || a === so(o)) && (a = !0));
  }
  return a;
}
const id = /* @__PURE__ */ new WeakMap();
function Dr(e, t, o = !1) {
  const a = o ? id : t.propsCache, l = a.get(e);
  if (l)
    return l;
  const r = e.props, c = {}, u = [];
  let d = !1;
  if (!st(e)) {
    const f = (p) => {
      d = !0;
      const [w, g] = Dr(p, t, !0);
      Rt(c, w), g && u.push(...g);
    };
    !o && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  if (!r && !d)
    return ht(e) && a.set(e, Co), Co;
  if (Xe(r))
    for (let f = 0; f < r.length; f++) {
      const p = us(r[f]);
      Yl(p) && (c[p] = wt);
    }
  else if (r)
    for (const f in r) {
      const p = us(f);
      if (Yl(p)) {
        const w = r[f], g = c[p] = Xe(w) || st(w) ? { type: w } : Rt({}, w), _ = g.type;
        let b = !1, S = !0;
        if (Xe(_))
          for (let C = 0; C < _.length; ++C) {
            const I = _[C], E = st(I) && I.name;
            if (E === "Boolean") {
              b = !0;
              break;
            } else E === "String" && (S = !1);
          }
        else
          b = st(_) && _.name === "Boolean";
        g[
          0
          /* shouldCast */
        ] = b, g[
          1
          /* shouldCastTrue */
        ] = S, (b || ft(g, "default")) && u.push(p);
      }
    }
  const v = [c, u];
  return ht(e) && a.set(e, v), v;
}
function Yl(e) {
  return e[0] !== "$" && !tn(e);
}
const kl = (e) => e === "_" || e === "_ctx" || e === "$stable", bl = (e) => Xe(e) ? e.map(xs) : [xs(e)], rd = (e, t, o) => {
  if (t._n)
    return t;
  const a = h((...l) => bl(t(...l)), o);
  return a._c = !1, a;
}, Nr = (e, t, o) => {
  const a = e._ctx;
  for (const l in e) {
    if (kl(l)) continue;
    const r = e[l];
    if (st(r))
      t[l] = rd(l, r, a);
    else if (r != null) {
      const c = bl(r);
      t[l] = () => c;
    }
  }
}, Ur = (e, t) => {
  const o = bl(t);
  e.slots.default = () => o;
}, Or = (e, t, o) => {
  for (const a in t)
    (o || !kl(a)) && (e[a] = t[a]);
}, cd = (e, t, o) => {
  const a = e.slots = Pr();
  if (e.vnode.shapeFlag & 32) {
    const l = t._;
    l ? (Or(a, t, o), o && Fi(a, "_", l, !0)) : Nr(t, a);
  } else t && Ur(e, t);
}, ud = (e, t, o) => {
  const { vnode: a, slots: l } = e;
  let r = !0, c = wt;
  if (a.shapeFlag & 32) {
    const u = t._;
    u ? o && u === 1 ? r = !1 : Or(l, t, o) : (r = !t.$stable, Nr(t, l)), c = t;
  } else t && (Ur(e, t), c = { default: 1 });
  if (r)
    for (const u in l)
      !kl(u) && c[u] == null && delete l[u];
}, Kt = pd;
function dd(e) {
  return md(e);
}
function md(e, t) {
  const o = ia();
  o.__VUE__ = !0;
  const {
    insert: a,
    remove: l,
    patchProp: r,
    createElement: c,
    createText: u,
    createComment: d,
    setText: v,
    setElementText: f,
    parentNode: p,
    nextSibling: w,
    setScopeId: g = Is,
    insertStaticContent: _
  } = e, b = (T, A, ae, Ce = null, Ee = null, ke = null, X = void 0, G = null, fe = !!A.dynamicChildren) => {
    if (T === A)
      return;
    T && !ro(T, A) && (Ce = Ne(T), ee(T, Ee, ke, !0), T = null), A.patchFlag === -2 && (fe = !1, A.dynamicChildren = null);
    const { type: he, ref: je, shapeFlag: We } = A;
    switch (he) {
      case fa:
        S(T, A, ae, Ce);
        break;
      case Gt:
        C(T, A, ae, Ce);
        break;
      case Aa:
        T == null && I(A, ae, Ce, X);
        break;
      case W:
        Y(
          T,
          A,
          ae,
          Ce,
          Ee,
          ke,
          X,
          G,
          fe
        );
        break;
      default:
        We & 1 ? N(
          T,
          A,
          ae,
          Ce,
          Ee,
          ke,
          X,
          G,
          fe
        ) : We & 6 ? me(
          T,
          A,
          ae,
          Ce,
          Ee,
          ke,
          X,
          G,
          fe
        ) : (We & 64 || We & 128) && he.process(
          T,
          A,
          ae,
          Ce,
          Ee,
          ke,
          X,
          G,
          fe,
          ge
        );
    }
    je != null && Ee ? an(je, T && T.ref, ke, A || T, !A) : je == null && T && T.ref != null && an(T.ref, null, ke, T, !0);
  }, S = (T, A, ae, Ce) => {
    if (T == null)
      a(
        A.el = u(A.children),
        ae,
        Ce
      );
    else {
      const Ee = A.el = T.el;
      A.children !== T.children && v(Ee, A.children);
    }
  }, C = (T, A, ae, Ce) => {
    T == null ? a(
      A.el = d(A.children || ""),
      ae,
      Ce
    ) : A.el = T.el;
  }, I = (T, A, ae, Ce) => {
    [T.el, T.anchor] = _(
      T.children,
      A,
      ae,
      Ce,
      T.el,
      T.anchor
    );
  }, E = ({ el: T, anchor: A }, ae, Ce) => {
    let Ee;
    for (; T && T !== A; )
      Ee = w(T), a(T, ae, Ce), T = Ee;
    a(A, ae, Ce);
  }, M = ({ el: T, anchor: A }) => {
    let ae;
    for (; T && T !== A; )
      ae = w(T), l(T), T = ae;
    l(A);
  }, N = (T, A, ae, Ce, Ee, ke, X, G, fe) => {
    if (A.type === "svg" ? X = "svg" : A.type === "math" && (X = "mathml"), T == null)
      F(
        A,
        ae,
        Ce,
        Ee,
        ke,
        X,
        G,
        fe
      );
    else {
      const he = T.el && T.el._isVueCE ? T.el : null;
      try {
        he && he._beginPatch(), q(
          T,
          A,
          Ee,
          ke,
          X,
          G,
          fe
        );
      } finally {
        he && he._endPatch();
      }
    }
  }, F = (T, A, ae, Ce, Ee, ke, X, G) => {
    let fe, he;
    const { props: je, shapeFlag: We, transition: _e, dirs: Z } = T;
    if (fe = T.el = c(
      T.type,
      ke,
      je && je.is,
      je
    ), We & 8 ? f(fe, T.children) : We & 16 && D(
      T.children,
      fe,
      null,
      Ce,
      Ee,
      Oa(T, ke),
      X,
      G
    ), Z && oo(T, null, Ce, "created"), V(fe, T, T.scopeId, X, Ce), je) {
      for (const De in je)
        De !== "value" && !tn(De) && r(fe, De, null, je[De], ke, Ce);
      "value" in je && r(fe, "value", null, je.value, ke), (he = je.onVnodeBeforeMount) && ws(he, Ce, T);
    }
    Z && oo(T, null, Ce, "beforeMount");
    const Fe = fd(Ee, _e);
    Fe && _e.beforeEnter(fe), a(fe, A, ae), ((he = je && je.onVnodeMounted) || Fe || Z) && Kt(() => {
      he && ws(he, Ce, T), Fe && _e.enter(fe), Z && oo(T, null, Ce, "mounted");
    }, Ee);
  }, V = (T, A, ae, Ce, Ee) => {
    if (ae && g(T, ae), Ce)
      for (let ke = 0; ke < Ce.length; ke++)
        g(T, Ce[ke]);
    if (Ee) {
      let ke = Ee.subTree;
      if (A === ke || zr(ke.type) && (ke.ssContent === A || ke.ssFallback === A)) {
        const X = Ee.vnode;
        V(
          T,
          X,
          X.scopeId,
          X.slotScopeIds,
          Ee.parent
        );
      }
    }
  }, D = (T, A, ae, Ce, Ee, ke, X, G, fe = 0) => {
    for (let he = fe; he < T.length; he++) {
      const je = T[he] = G ? Ys(T[he]) : xs(T[he]);
      b(
        null,
        je,
        A,
        ae,
        Ce,
        Ee,
        ke,
        X,
        G
      );
    }
  }, q = (T, A, ae, Ce, Ee, ke, X) => {
    const G = A.el = T.el;
    let { patchFlag: fe, dynamicChildren: he, dirs: je } = A;
    fe |= T.patchFlag & 16;
    const We = T.props || wt, _e = A.props || wt;
    let Z;
    if (ae && no(ae, !1), (Z = _e.onVnodeBeforeUpdate) && ws(Z, ae, A, T), je && oo(A, T, ae, "beforeUpdate"), ae && no(ae, !0), (We.innerHTML && _e.innerHTML == null || We.textContent && _e.textContent == null) && f(G, ""), he ? ue(
      T.dynamicChildren,
      he,
      G,
      ae,
      Ce,
      Oa(A, Ee),
      ke
    ) : X || oe(
      T,
      A,
      G,
      null,
      ae,
      Ce,
      Oa(A, Ee),
      ke,
      !1
    ), fe > 0) {
      if (fe & 16)
        le(G, We, _e, ae, Ee);
      else if (fe & 2 && We.class !== _e.class && r(G, "class", null, _e.class, Ee), fe & 4 && r(G, "style", We.style, _e.style, Ee), fe & 8) {
        const Fe = A.dynamicProps;
        for (let De = 0; De < Fe.length; De++) {
          const He = Fe[De], Ve = We[He], Oe = _e[He];
          (Oe !== Ve || He === "value") && r(G, He, Ve, Oe, Ee, ae);
        }
      }
      fe & 1 && T.children !== A.children && f(G, A.children);
    } else !X && he == null && le(G, We, _e, ae, Ee);
    ((Z = _e.onVnodeUpdated) || je) && Kt(() => {
      Z && ws(Z, ae, A, T), je && oo(A, T, ae, "updated");
    }, Ce);
  }, ue = (T, A, ae, Ce, Ee, ke, X) => {
    for (let G = 0; G < A.length; G++) {
      const fe = T[G], he = A[G], je = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        fe.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (fe.type === W || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !ro(fe, he) || // - In the case of a component, it could contain anything.
        fe.shapeFlag & 198) ? p(fe.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          ae
        )
      );
      b(
        fe,
        he,
        je,
        null,
        Ce,
        Ee,
        ke,
        X,
        !0
      );
    }
  }, le = (T, A, ae, Ce, Ee) => {
    if (A !== ae) {
      if (A !== wt)
        for (const ke in A)
          !tn(ke) && !(ke in ae) && r(
            T,
            ke,
            A[ke],
            null,
            Ee,
            Ce
          );
      for (const ke in ae) {
        if (tn(ke)) continue;
        const X = ae[ke], G = A[ke];
        X !== G && ke !== "value" && r(T, ke, G, X, Ee, Ce);
      }
      "value" in ae && r(T, "value", A.value, ae.value, Ee);
    }
  }, Y = (T, A, ae, Ce, Ee, ke, X, G, fe) => {
    const he = A.el = T ? T.el : u(""), je = A.anchor = T ? T.anchor : u("");
    let { patchFlag: We, dynamicChildren: _e, slotScopeIds: Z } = A;
    Z && (G = G ? G.concat(Z) : Z), T == null ? (a(he, ae, Ce), a(je, ae, Ce), D(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      A.children || [],
      ae,
      je,
      Ee,
      ke,
      X,
      G,
      fe
    )) : We > 0 && We & 64 && _e && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    T.dynamicChildren ? (ue(
      T.dynamicChildren,
      _e,
      ae,
      Ee,
      ke,
      X,
      G
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (A.key != null || Ee && A === Ee.subTree) && $l(
      T,
      A,
      !0
      /* shallow */
    )) : oe(
      T,
      A,
      ae,
      je,
      Ee,
      ke,
      X,
      G,
      fe
    );
  }, me = (T, A, ae, Ce, Ee, ke, X, G, fe) => {
    A.slotScopeIds = G, T == null ? A.shapeFlag & 512 ? Ee.ctx.activate(
      A,
      ae,
      Ce,
      X,
      fe
    ) : ne(
      A,
      ae,
      Ce,
      Ee,
      ke,
      X,
      fe
    ) : B(T, A, fe);
  }, ne = (T, A, ae, Ce, Ee, ke, X) => {
    const G = T.component = bd(
      T,
      Ce,
      Ee
    );
    if (ua(T) && (G.ctx.renderer = ge), $d(G, !1, X), G.asyncDep) {
      if (Ee && Ee.registerDep(G, H, X), !T.el) {
        const fe = G.subTree = $(Gt);
        C(null, fe, A, ae), T.placeholder = fe.el;
      }
    } else
      H(
        G,
        T,
        A,
        ae,
        Ee,
        ke,
        X
      );
  }, B = (T, A, ae) => {
    const Ce = A.component = T.component;
    if (od(T, A, ae))
      if (Ce.asyncDep && !Ce.asyncResolved) {
        we(Ce, A, ae);
        return;
      } else
        Ce.next = A, Ce.update();
    else
      A.el = T.el, Ce.vnode = A;
  }, H = (T, A, ae, Ce, Ee, ke, X) => {
    const G = () => {
      if (T.isMounted) {
        let { next: We, bu: _e, u: Z, parent: Fe, vnode: De } = T;
        {
          const pt = Ar(T);
          if (pt) {
            We && (We.el = De.el, we(T, We, X)), pt.asyncDep.then(() => {
              T.isUnmounted || G();
            });
            return;
          }
        }
        let He = We, Ve;
        no(T, !1), We ? (We.el = De.el, we(T, We, X)) : We = De, _e && Un(_e), (Ve = We.props && We.props.onVnodeBeforeUpdate) && ws(Ve, Fe, We, De), no(T, !0);
        const Oe = Jl(T), Qe = T.subTree;
        T.subTree = Oe, b(
          Qe,
          Oe,
          // parent may have changed if it's in a teleport
          p(Qe.el),
          // anchor may have changed if it's in a fragment
          Ne(Qe),
          T,
          Ee,
          ke
        ), We.el = Oe.el, He === null && nd(T, Oe.el), Z && Kt(Z, Ee), (Ve = We.props && We.props.onVnodeUpdated) && Kt(
          () => ws(Ve, Fe, We, De),
          Ee
        );
      } else {
        let We;
        const { el: _e, props: Z } = A, { bm: Fe, m: De, parent: He, root: Ve, type: Oe } = T, Qe = Io(A);
        no(T, !1), Fe && Un(Fe), !Qe && (We = Z && Z.onVnodeBeforeMount) && ws(We, He, A), no(T, !0);
        {
          Ve.ce && // @ts-expect-error _def is private
          Ve.ce._def.shadowRoot !== !1 && Ve.ce._injectChildStyle(Oe);
          const pt = T.subTree = Jl(T);
          b(
            null,
            pt,
            ae,
            Ce,
            T,
            Ee,
            ke
          ), A.el = pt.el;
        }
        if (De && Kt(De, Ee), !Qe && (We = Z && Z.onVnodeMounted)) {
          const pt = A;
          Kt(
            () => ws(We, He, pt),
            Ee
          );
        }
        (A.shapeFlag & 256 || He && Io(He.vnode) && He.vnode.shapeFlag & 256) && T.a && Kt(T.a, Ee), T.isMounted = !0, A = ae = Ce = null;
      }
    };
    T.scope.on();
    const fe = T.effect = new Gi(G);
    T.scope.off();
    const he = T.update = fe.run.bind(fe), je = T.job = fe.runIfDirty.bind(fe);
    je.i = T, je.id = T.uid, fe.scheduler = () => yl(je), no(T, !0), he();
  }, we = (T, A, ae) => {
    A.component = T;
    const Ce = T.vnode.props;
    T.vnode = A, T.next = null, ld(T, A.props, Ce, ae), ud(T, A.children, ae), zs(), Al(T), Fs();
  }, oe = (T, A, ae, Ce, Ee, ke, X, G, fe = !1) => {
    const he = T && T.children, je = T ? T.shapeFlag : 0, We = A.children, { patchFlag: _e, shapeFlag: Z } = A;
    if (_e > 0) {
      if (_e & 128) {
        ce(
          he,
          We,
          ae,
          Ce,
          Ee,
          ke,
          X,
          G,
          fe
        );
        return;
      } else if (_e & 256) {
        de(
          he,
          We,
          ae,
          Ce,
          Ee,
          ke,
          X,
          G,
          fe
        );
        return;
      }
    }
    Z & 8 ? (je & 16 && ze(he, Ee, ke), We !== he && f(ae, We)) : je & 16 ? Z & 16 ? ce(
      he,
      We,
      ae,
      Ce,
      Ee,
      ke,
      X,
      G,
      fe
    ) : ze(he, Ee, ke, !0) : (je & 8 && f(ae, ""), Z & 16 && D(
      We,
      ae,
      Ce,
      Ee,
      ke,
      X,
      G,
      fe
    ));
  }, de = (T, A, ae, Ce, Ee, ke, X, G, fe) => {
    T = T || Co, A = A || Co;
    const he = T.length, je = A.length, We = Math.min(he, je);
    let _e;
    for (_e = 0; _e < We; _e++) {
      const Z = A[_e] = fe ? Ys(A[_e]) : xs(A[_e]);
      b(
        T[_e],
        Z,
        ae,
        null,
        Ee,
        ke,
        X,
        G,
        fe
      );
    }
    he > je ? ze(
      T,
      Ee,
      ke,
      !0,
      !1,
      We
    ) : D(
      A,
      ae,
      Ce,
      Ee,
      ke,
      X,
      G,
      fe,
      We
    );
  }, ce = (T, A, ae, Ce, Ee, ke, X, G, fe) => {
    let he = 0;
    const je = A.length;
    let We = T.length - 1, _e = je - 1;
    for (; he <= We && he <= _e; ) {
      const Z = T[he], Fe = A[he] = fe ? Ys(A[he]) : xs(A[he]);
      if (ro(Z, Fe))
        b(
          Z,
          Fe,
          ae,
          null,
          Ee,
          ke,
          X,
          G,
          fe
        );
      else
        break;
      he++;
    }
    for (; he <= We && he <= _e; ) {
      const Z = T[We], Fe = A[_e] = fe ? Ys(A[_e]) : xs(A[_e]);
      if (ro(Z, Fe))
        b(
          Z,
          Fe,
          ae,
          null,
          Ee,
          ke,
          X,
          G,
          fe
        );
      else
        break;
      We--, _e--;
    }
    if (he > We) {
      if (he <= _e) {
        const Z = _e + 1, Fe = Z < je ? A[Z].el : Ce;
        for (; he <= _e; )
          b(
            null,
            A[he] = fe ? Ys(A[he]) : xs(A[he]),
            ae,
            Fe,
            Ee,
            ke,
            X,
            G,
            fe
          ), he++;
      }
    } else if (he > _e)
      for (; he <= We; )
        ee(T[he], Ee, ke, !0), he++;
    else {
      const Z = he, Fe = he, De = /* @__PURE__ */ new Map();
      for (he = Fe; he <= _e; he++) {
        const P = A[he] = fe ? Ys(A[he]) : xs(A[he]);
        P.key != null && De.set(P.key, he);
      }
      let He, Ve = 0;
      const Oe = _e - Fe + 1;
      let Qe = !1, pt = 0;
      const Q = new Array(Oe);
      for (he = 0; he < Oe; he++) Q[he] = 0;
      for (he = Z; he <= We; he++) {
        const P = T[he];
        if (Ve >= Oe) {
          ee(P, Ee, ke, !0);
          continue;
        }
        let U;
        if (P.key != null)
          U = De.get(P.key);
        else
          for (He = Fe; He <= _e; He++)
            if (Q[He - Fe] === 0 && ro(P, A[He])) {
              U = He;
              break;
            }
        U === void 0 ? ee(P, Ee, ke, !0) : (Q[U - Fe] = he + 1, U >= pt ? pt = U : Qe = !0, b(
          P,
          A[U],
          ae,
          null,
          Ee,
          ke,
          X,
          G,
          fe
        ), Ve++);
      }
      const pe = Qe ? vd(Q) : Co;
      for (He = pe.length - 1, he = Oe - 1; he >= 0; he--) {
        const P = Fe + he, U = A[P], J = A[P + 1], Te = P + 1 < je ? (
          // #13559, fallback to el placeholder for unresolved async component
          J.el || J.placeholder
        ) : Ce;
        Q[he] === 0 ? b(
          null,
          U,
          ae,
          Te,
          Ee,
          ke,
          X,
          G,
          fe
        ) : Qe && (He < 0 || he !== pe[He] ? K(U, ae, Te, 2) : He--);
      }
    }
  }, K = (T, A, ae, Ce, Ee = null) => {
    const { el: ke, type: X, transition: G, children: fe, shapeFlag: he } = T;
    if (he & 6) {
      K(T.component.subTree, A, ae, Ce);
      return;
    }
    if (he & 128) {
      T.suspense.move(A, ae, Ce);
      return;
    }
    if (he & 64) {
      X.move(T, A, ae, ge);
      return;
    }
    if (X === W) {
      a(ke, A, ae);
      for (let We = 0; We < fe.length; We++)
        K(fe[We], A, ae, Ce);
      a(T.anchor, A, ae);
      return;
    }
    if (X === Aa) {
      E(T, A, ae);
      return;
    }
    if (Ce !== 2 && he & 1 && G)
      if (Ce === 0)
        G.beforeEnter(ke), a(ke, A, ae), Kt(() => G.enter(ke), Ee);
      else {
        const { leave: We, delayLeave: _e, afterLeave: Z } = G, Fe = () => {
          T.ctx.isUnmounted ? l(ke) : a(ke, A, ae);
        }, De = () => {
          ke._isLeaving && ke[Ns](
            !0
            /* cancelled */
          ), We(ke, () => {
            Fe(), Z && Z();
          });
        };
        _e ? _e(ke, Fe, De) : De();
      }
    else
      a(ke, A, ae);
  }, ee = (T, A, ae, Ce = !1, Ee = !1) => {
    const {
      type: ke,
      props: X,
      ref: G,
      children: fe,
      dynamicChildren: he,
      shapeFlag: je,
      patchFlag: We,
      dirs: _e,
      cacheIndex: Z
    } = T;
    if (We === -2 && (Ee = !1), G != null && (zs(), an(G, null, ae, T, !0), Fs()), Z != null && (A.renderCache[Z] = void 0), je & 256) {
      A.ctx.deactivate(T);
      return;
    }
    const Fe = je & 1 && _e, De = !Io(T);
    let He;
    if (De && (He = X && X.onVnodeBeforeUnmount) && ws(He, A, T), je & 6)
      Se(T.component, ae, Ce);
    else {
      if (je & 128) {
        T.suspense.unmount(ae, Ce);
        return;
      }
      Fe && oo(T, null, A, "beforeUnmount"), je & 64 ? T.type.remove(
        T,
        A,
        ae,
        ge,
        Ce
      ) : he && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !he.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (ke !== W || We > 0 && We & 64) ? ze(
        he,
        A,
        ae,
        !1,
        !0
      ) : (ke === W && We & 384 || !Ee && je & 16) && ze(fe, A, ae), Ce && te(T);
    }
    (De && (He = X && X.onVnodeUnmounted) || Fe) && Kt(() => {
      He && ws(He, A, T), Fe && oo(T, null, A, "unmounted");
    }, ae);
  }, te = (T) => {
    const { type: A, el: ae, anchor: Ce, transition: Ee } = T;
    if (A === W) {
      Me(ae, Ce);
      return;
    }
    if (A === Aa) {
      M(T);
      return;
    }
    const ke = () => {
      l(ae), Ee && !Ee.persisted && Ee.afterLeave && Ee.afterLeave();
    };
    if (T.shapeFlag & 1 && Ee && !Ee.persisted) {
      const { leave: X, delayLeave: G } = Ee, fe = () => X(ae, ke);
      G ? G(T.el, ke, fe) : fe();
    } else
      ke();
  }, Me = (T, A) => {
    let ae;
    for (; T !== A; )
      ae = w(T), l(T), T = ae;
    l(A);
  }, Se = (T, A, ae) => {
    const { bum: Ce, scope: Ee, job: ke, subTree: X, um: G, m: fe, a: he } = T;
    Xl(fe), Xl(he), Ce && Un(Ce), Ee.stop(), ke && (ke.flags |= 8, ee(X, T, A, ae)), G && Kt(G, A), Kt(() => {
      T.isUnmounted = !0;
    }, A);
  }, ze = (T, A, ae, Ce = !1, Ee = !1, ke = 0) => {
    for (let X = ke; X < T.length; X++)
      ee(T[X], A, ae, Ce, Ee);
  }, Ne = (T) => {
    if (T.shapeFlag & 6)
      return Ne(T.component.subTree);
    if (T.shapeFlag & 128)
      return T.suspense.next();
    const A = w(T.anchor || T.el), ae = A && A[ur];
    return ae ? w(ae) : A;
  };
  let be = !1;
  const Ae = (T, A, ae) => {
    T == null ? A._vnode && ee(A._vnode, null, null, !0) : b(
      A._vnode || null,
      T,
      A,
      null,
      null,
      null,
      ae
    ), A._vnode = T, be || (be = !0, Al(), ir(), be = !1);
  }, ge = {
    p: b,
    um: ee,
    m: K,
    r: te,
    mt: ne,
    mc: D,
    pc: oe,
    pbc: ue,
    n: Ne,
    o: e
  };
  return {
    render: Ae,
    hydrate: void 0,
    createApp: qu(Ae)
  };
}
function Oa({ type: e, props: t }, o) {
  return o === "svg" && e === "foreignObject" || o === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : o;
}
function no({ effect: e, job: t }, o) {
  o ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function fd(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function $l(e, t, o = !1) {
  const a = e.children, l = t.children;
  if (Xe(a) && Xe(l))
    for (let r = 0; r < a.length; r++) {
      const c = a[r];
      let u = l[r];
      u.shapeFlag & 1 && !u.dynamicChildren && ((u.patchFlag <= 0 || u.patchFlag === 32) && (u = l[r] = Ys(l[r]), u.el = c.el), !o && u.patchFlag !== -2 && $l(c, u)), u.type === fa && // avoid cached text nodes retaining detached dom nodes
      u.patchFlag !== -1 && (u.el = c.el), u.type === Gt && !u.el && (u.el = c.el);
    }
}
function vd(e) {
  const t = e.slice(), o = [0];
  let a, l, r, c, u;
  const d = e.length;
  for (a = 0; a < d; a++) {
    const v = e[a];
    if (v !== 0) {
      if (l = o[o.length - 1], e[l] < v) {
        t[a] = l, o.push(a);
        continue;
      }
      for (r = 0, c = o.length - 1; r < c; )
        u = r + c >> 1, e[o[u]] < v ? r = u + 1 : c = u;
      v < e[o[r]] && (r > 0 && (t[a] = o[r - 1]), o[r] = a);
    }
  }
  for (r = o.length, c = o[r - 1]; r-- > 0; )
    o[r] = c, c = t[c];
  return o;
}
function Ar(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Ar(t);
}
function Xl(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const zr = (e) => e.__isSuspense;
function pd(e, t) {
  t && t.pendingBranch ? Xe(e) ? t.effects.push(...e) : t.effects.push(e) : xu(e);
}
const W = Symbol.for("v-fgt"), fa = Symbol.for("v-txt"), Gt = Symbol.for("v-cmt"), Aa = Symbol.for("v-stc"), rn = [];
let os = null;
function n(e = !1) {
  rn.push(os = e ? null : []);
}
function gd() {
  rn.pop(), os = rn[rn.length - 1] || null;
}
let gn = 1;
function Yn(e, t = !1) {
  gn += e, e < 0 && os && t && (os.hasOnce = !0);
}
function Fr(e) {
  return e.dynamicChildren = gn > 0 ? os || Co : null, gd(), gn > 0 && os && os.push(e), e;
}
function i(e, t, o, a, l, r) {
  return Fr(
    s(
      e,
      t,
      o,
      a,
      l,
      r,
      !0
    )
  );
}
function L(e, t, o, a, l) {
  return Fr(
    $(
      e,
      t,
      o,
      a,
      l,
      !0
    )
  );
}
function hn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function ro(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Vr = ({ key: e }) => e ?? null, zn = ({
  ref: e,
  ref_key: t,
  ref_for: o
}) => (typeof e == "number" && (e = "" + e), e != null ? xt(e) || Ht(e) || st(e) ? { i: At, r: e, k: t, f: !!o } : e : null);
function s(e, t = null, o = null, a = 0, l = null, r = e === W ? 0 : 1, c = !1, u = !1) {
  const d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Vr(t),
    ref: t && zn(t),
    scopeId: cr,
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
    ctx: At
  };
  return u ? (Cl(d, o), r & 128 && e.normalize(d)) : o && (d.shapeFlag |= xt(o) ? 8 : 16), gn > 0 && // avoid a block node from tracking itself
  !c && // has current parent block
  os && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (d.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  d.patchFlag !== 32 && os.push(d), d;
}
const $ = hd;
function hd(e, t = null, o = null, a = 0, l = null, r = !1) {
  if ((!e || e === br) && (e = Gt), hn(e)) {
    const u = eo(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return o && Cl(u, o), gn > 0 && !r && os && (u.shapeFlag & 6 ? os[os.indexOf(e)] = u : os.push(u)), u.patchFlag = -2, u;
  }
  if (Ed(e) && (e = e.__vccOpts), t) {
    t = yd(t);
    let { class: u, style: d } = t;
    u && !xt(u) && (t.class = Be(u)), ht(d) && (hl(d) && !Xe(d) && (d = Rt({}, d)), t.style = Dt(d));
  }
  const c = xt(e) ? 1 : zr(e) ? 128 : dr(e) ? 64 : ht(e) ? 4 : st(e) ? 2 : 0;
  return s(
    e,
    t,
    o,
    a,
    l,
    c,
    r,
    !0
  );
}
function yd(e) {
  return e ? hl(e) || Rr(e) ? Rt({}, e) : e : null;
}
function eo(e, t, o = !1, a = !1) {
  const { props: l, ref: r, patchFlag: c, children: u, transition: d } = e, v = t ? wd(l || {}, t) : l, f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: v,
    key: v && Vr(v),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      o && r ? Xe(r) ? r.concat(zn(t)) : [r, zn(t)] : zn(t)
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
    patchFlag: t && e.type !== W ? c === -1 ? 16 : c | 16 : c,
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
    ssContent: e.ssContent && eo(e.ssContent),
    ssFallback: e.ssFallback && eo(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return d && a && vo(
    f,
    d.clone(f)
  ), f;
}
function x(e = " ", t = 0) {
  return $(fa, null, e, t);
}
function y(e = "", t = !1) {
  return t ? (n(), L(Gt, null, e)) : $(Gt, null, e);
}
function xs(e) {
  return e == null || typeof e == "boolean" ? $(Gt) : Xe(e) ? $(
    W,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : hn(e) ? Ys(e) : $(fa, null, String(e));
}
function Ys(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : eo(e);
}
function Cl(e, t) {
  let o = 0;
  const { shapeFlag: a } = e;
  if (t == null)
    t = null;
  else if (Xe(t))
    o = 16;
  else if (typeof t == "object")
    if (a & 65) {
      const l = t.default;
      l && (l._c && (l._d = !1), Cl(e, l()), l._c && (l._d = !0));
      return;
    } else {
      o = 32;
      const l = t._;
      !l && !Rr(t) ? t._ctx = At : l === 3 && At && (At.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else st(t) ? (t = { default: t, _ctx: At }, o = 32) : (t = String(t), a & 64 ? (o = 16, t = [x(t)]) : o = 8);
  e.children = t, e.shapeFlag |= o;
}
function wd(...e) {
  const t = {};
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    for (const l in a)
      if (l === "class")
        t.class !== a.class && (t.class = Be([t.class, a.class]));
      else if (l === "style")
        t.style = Dt([t.style, a.style]);
      else if (oa(l)) {
        const r = t[l], c = a[l];
        c && r !== c && !(Xe(r) && r.includes(c)) && (t[l] = r ? [].concat(r, c) : c);
      } else l !== "" && (t[l] = a[l]);
  }
  return t;
}
function ws(e, t, o, a = null) {
  gs(e, t, 7, [
    o,
    a
  ]);
}
const _d = Sr();
let kd = 0;
function bd(e, t, o) {
  const a = e.type, l = (t ? t.appContext : e.appContext) || _d, r = {
    uid: kd++,
    vnode: e,
    type: a,
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
    scope: new Kc(
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
    propsOptions: Dr(a, l),
    emitsOptions: Tr(a, l),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: wt,
    // inheritAttrs
    inheritAttrs: a.inheritAttrs,
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
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = Zu.bind(null, r), e.ce && e.ce(r), r;
}
let jt = null;
const xl = () => jt || At;
let Xn, Za;
{
  const e = ia(), t = (o, a) => {
    let l;
    return (l = e[o]) || (l = e[o] = []), l.push(a), (r) => {
      l.length > 1 ? l.forEach((c) => c(r)) : l[0](r);
    };
  };
  Xn = t(
    "__VUE_INSTANCE_SETTERS__",
    (o) => jt = o
  ), Za = t(
    "__VUE_SSR_SETTERS__",
    (o) => yn = o
  );
}
const $n = (e) => {
  const t = jt;
  return Xn(e), e.scope.on(), () => {
    e.scope.off(), Xn(t);
  };
}, Zl = () => {
  jt && jt.scope.off(), Xn(null);
};
function Br(e) {
  return e.vnode.shapeFlag & 4;
}
let yn = !1;
function $d(e, t = !1, o = !1) {
  t && Za(t);
  const { props: a, children: l } = e.vnode, r = Br(e);
  ad(e, a, r, t), cd(e, l, o || t);
  const c = r ? Cd(e, t) : void 0;
  return t && Za(!1), c;
}
function Cd(e, t) {
  const o = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Fu);
  const { setup: a } = o;
  if (a) {
    zs();
    const l = e.setupContext = a.length > 1 ? Sd(e) : null, r = $n(e), c = kn(
      a,
      e,
      0,
      [
        e.props,
        l
      ]
    ), u = Oi(c);
    if (Fs(), r(), (u || e.sp) && !Io(e) && wr(e), u) {
      if (c.then(Zl, Zl), t)
        return c.then((d) => {
          ei(e, d);
        }).catch((d) => {
          ca(d, e, 0);
        });
      e.asyncDep = c;
    } else
      ei(e, c);
  } else
    Wr(e);
}
function ei(e, t, o) {
  st(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ht(t) && (e.setupState = nr(t)), Wr(e);
}
function Wr(e, t, o) {
  const a = e.type;
  e.render || (e.render = a.render || Is);
  {
    const l = $n(e);
    zs();
    try {
      Vu(e);
    } finally {
      Fs(), l();
    }
  }
}
const xd = {
  get(e, t) {
    return Bt(e, "get", ""), e[t];
  }
};
function Sd(e) {
  const t = (o) => {
    e.exposed = o || {};
  };
  return {
    attrs: new Proxy(e.attrs, xd),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function va(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(nr(pu(e.exposed)), {
    get(t, o) {
      if (o in t)
        return t[o];
      if (o in ln)
        return ln[o](e);
    },
    has(t, o) {
      return o in t || o in ln;
    }
  })) : e.proxy;
}
function Id(e, t = !0) {
  return st(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Ed(e) {
  return st(e) && "__vccOpts" in e;
}
const R = (e, t) => _u(e, t, yn);
function Oo(e, t, o) {
  try {
    Yn(-1);
    const a = arguments.length;
    return a === 2 ? ht(t) && !Xe(t) ? hn(t) ? $(e, null, [t]) : $(e, t) : $(e, null, t) : (a > 3 ? o = Array.prototype.slice.call(arguments, 2) : a === 3 && hn(o) && (o = [o]), $(e, t, o));
  } finally {
    Yn(1);
  }
}
const Td = "3.5.25";
/**
* @vue/runtime-dom v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let el;
const ti = typeof window < "u" && window.trustedTypes;
if (ti)
  try {
    el = /* @__PURE__ */ ti.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Gr = el ? (e) => el.createHTML(e) : (e) => e, Md = "http://www.w3.org/2000/svg", Pd = "http://www.w3.org/1998/Math/MathML", Ds = typeof document < "u" ? document : null, si = Ds && /* @__PURE__ */ Ds.createElement("template"), Rd = {
  insert: (e, t, o) => {
    t.insertBefore(e, o || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, o, a) => {
    const l = t === "svg" ? Ds.createElementNS(Md, e) : t === "mathml" ? Ds.createElementNS(Pd, e) : o ? Ds.createElement(e, { is: o }) : Ds.createElement(e);
    return e === "select" && a && a.multiple != null && l.setAttribute("multiple", a.multiple), l;
  },
  createText: (e) => Ds.createTextNode(e),
  createComment: (e) => Ds.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Ds.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, o, a, l, r) {
    const c = o ? o.previousSibling : t.lastChild;
    if (l && (l === r || l.nextSibling))
      for (; t.insertBefore(l.cloneNode(!0), o), !(l === r || !(l = l.nextSibling)); )
        ;
    else {
      si.innerHTML = Gr(
        a === "svg" ? `<svg>${e}</svg>` : a === "mathml" ? `<math>${e}</math>` : e
      );
      const u = si.content;
      if (a === "svg" || a === "mathml") {
        const d = u.firstChild;
        for (; d.firstChild; )
          u.appendChild(d.firstChild);
        u.removeChild(d);
      }
      t.insertBefore(u, o);
    }
    return [
      // first
      c ? c.nextSibling : t.firstChild,
      // last
      o ? o.previousSibling : t.lastChild
    ];
  }
}, qs = "transition", Go = "animation", Lo = Symbol("_vtc"), jr = {
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
}, Hr = /* @__PURE__ */ Rt(
  {},
  pr,
  jr
), Ld = (e) => (e.displayName = "Transition", e.props = Hr, e), Dd = /* @__PURE__ */ Ld(
  (e, { slots: t }) => Oo(Eu, qr(e), t)
), ao = (e, t = []) => {
  Xe(e) ? e.forEach((o) => o(...t)) : e && e(...t);
}, oi = (e) => e ? Xe(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function qr(e) {
  const t = {};
  for (const Y in e)
    Y in jr || (t[Y] = e[Y]);
  if (e.css === !1)
    return t;
  const {
    name: o = "v",
    type: a,
    duration: l,
    enterFromClass: r = `${o}-enter-from`,
    enterActiveClass: c = `${o}-enter-active`,
    enterToClass: u = `${o}-enter-to`,
    appearFromClass: d = r,
    appearActiveClass: v = c,
    appearToClass: f = u,
    leaveFromClass: p = `${o}-leave-from`,
    leaveActiveClass: w = `${o}-leave-active`,
    leaveToClass: g = `${o}-leave-to`
  } = e, _ = Nd(l), b = _ && _[0], S = _ && _[1], {
    onBeforeEnter: C,
    onEnter: I,
    onEnterCancelled: E,
    onLeave: M,
    onLeaveCancelled: N,
    onBeforeAppear: F = C,
    onAppear: V = I,
    onAppearCancelled: D = E
  } = t, q = (Y, me, ne, B) => {
    Y._enterCancelled = B, Ks(Y, me ? f : u), Ks(Y, me ? v : c), ne && ne();
  }, ue = (Y, me) => {
    Y._isLeaving = !1, Ks(Y, p), Ks(Y, g), Ks(Y, w), me && me();
  }, le = (Y) => (me, ne) => {
    const B = Y ? V : I, H = () => q(me, Y, ne);
    ao(B, [me, H]), ni(() => {
      Ks(me, Y ? d : r), ks(me, Y ? f : u), oi(B) || ai(me, a, b, H);
    });
  };
  return Rt(t, {
    onBeforeEnter(Y) {
      ao(C, [Y]), ks(Y, r), ks(Y, c);
    },
    onBeforeAppear(Y) {
      ao(F, [Y]), ks(Y, d), ks(Y, v);
    },
    onEnter: le(!1),
    onAppear: le(!0),
    onLeave(Y, me) {
      Y._isLeaving = !0;
      const ne = () => ue(Y, me);
      ks(Y, p), Y._enterCancelled ? (ks(Y, w), tl(Y)) : (tl(Y), ks(Y, w)), ni(() => {
        Y._isLeaving && (Ks(Y, p), ks(Y, g), oi(M) || ai(Y, a, S, ne));
      }), ao(M, [Y, ne]);
    },
    onEnterCancelled(Y) {
      q(Y, !1, void 0, !0), ao(E, [Y]);
    },
    onAppearCancelled(Y) {
      q(Y, !0, void 0, !0), ao(D, [Y]);
    },
    onLeaveCancelled(Y) {
      ue(Y), ao(N, [Y]);
    }
  });
}
function Nd(e) {
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
  return Fc(e);
}
function ks(e, t) {
  t.split(/\s+/).forEach((o) => o && e.classList.add(o)), (e[Lo] || (e[Lo] = /* @__PURE__ */ new Set())).add(t);
}
function Ks(e, t) {
  t.split(/\s+/).forEach((a) => a && e.classList.remove(a));
  const o = e[Lo];
  o && (o.delete(t), o.size || (e[Lo] = void 0));
}
function ni(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Ud = 0;
function ai(e, t, o, a) {
  const l = e._endId = ++Ud, r = () => {
    l === e._endId && a();
  };
  if (o != null)
    return setTimeout(r, o);
  const { type: c, timeout: u, propCount: d } = Kr(e, t);
  if (!c)
    return a();
  const v = c + "end";
  let f = 0;
  const p = () => {
    e.removeEventListener(v, w), r();
  }, w = (g) => {
    g.target === e && ++f >= d && p();
  };
  setTimeout(() => {
    f < d && p();
  }, u + 1), e.addEventListener(v, w);
}
function Kr(e, t) {
  const o = window.getComputedStyle(e), a = (_) => (o[_] || "").split(", "), l = a(`${qs}Delay`), r = a(`${qs}Duration`), c = li(l, r), u = a(`${Go}Delay`), d = a(`${Go}Duration`), v = li(u, d);
  let f = null, p = 0, w = 0;
  t === qs ? c > 0 && (f = qs, p = c, w = r.length) : t === Go ? v > 0 && (f = Go, p = v, w = d.length) : (p = Math.max(c, v), f = p > 0 ? c > v ? qs : Go : null, w = f ? f === qs ? r.length : d.length : 0);
  const g = f === qs && /\b(?:transform|all)(?:,|$)/.test(
    a(`${qs}Property`).toString()
  );
  return {
    type: f,
    timeout: p,
    propCount: w,
    hasTransform: g
  };
}
function li(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((o, a) => ii(o) + ii(e[a])));
}
function ii(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function tl(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Od(e, t, o) {
  const a = e[Lo];
  a && (t = (t ? [t, ...a] : [...a]).join(" ")), t == null ? e.removeAttribute("class") : o ? e.setAttribute("class", t) : e.className = t;
}
const ri = Symbol("_vod"), Ad = Symbol("_vsh"), zd = Symbol(""), Fd = /(?:^|;)\s*display\s*:/;
function Vd(e, t, o) {
  const a = e.style, l = xt(o);
  let r = !1;
  if (o && !l) {
    if (t)
      if (xt(t))
        for (const c of t.split(";")) {
          const u = c.slice(0, c.indexOf(":")).trim();
          o[u] == null && Fn(a, u, "");
        }
      else
        for (const c in t)
          o[c] == null && Fn(a, c, "");
    for (const c in o)
      c === "display" && (r = !0), Fn(a, c, o[c]);
  } else if (l) {
    if (t !== o) {
      const c = a[zd];
      c && (o += ";" + c), a.cssText = o, r = Fd.test(o);
    }
  } else t && e.removeAttribute("style");
  ri in e && (e[ri] = r ? a.display : "", e[Ad] && (a.display = "none"));
}
const ci = /\s*!important$/;
function Fn(e, t, o) {
  if (Xe(o))
    o.forEach((a) => Fn(e, t, a));
  else if (o == null && (o = ""), t.startsWith("--"))
    e.setProperty(t, o);
  else {
    const a = Bd(e, t);
    ci.test(o) ? e.setProperty(
      so(a),
      o.replace(ci, ""),
      "important"
    ) : e[a] = o;
  }
}
const ui = ["Webkit", "Moz", "ms"], Fa = {};
function Bd(e, t) {
  const o = Fa[t];
  if (o)
    return o;
  let a = us(t);
  if (a !== "filter" && a in e)
    return Fa[t] = a;
  a = aa(a);
  for (let l = 0; l < ui.length; l++) {
    const r = ui[l] + a;
    if (r in e)
      return Fa[t] = r;
  }
  return t;
}
const di = "http://www.w3.org/1999/xlink";
function mi(e, t, o, a, l, r = Hc(t)) {
  a && t.startsWith("xlink:") ? o == null ? e.removeAttributeNS(di, t.slice(6, t.length)) : e.setAttributeNS(di, t, o) : o == null || r && !Vi(o) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : vs(o) ? String(o) : o
  );
}
function fi(e, t, o, a, l) {
  if (t === "innerHTML" || t === "textContent") {
    o != null && (e[t] = t === "innerHTML" ? Gr(o) : o);
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const u = r === "OPTION" ? e.getAttribute("value") || "" : e.value, d = o == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(o);
    (u !== d || !("_value" in e)) && (e.value = d), o == null && e.removeAttribute(t), e._value = o;
    return;
  }
  let c = !1;
  if (o === "" || o == null) {
    const u = typeof e[t];
    u === "boolean" ? o = Vi(o) : o == null && u === "string" ? (o = "", c = !0) : u === "number" && (o = 0, c = !0);
  }
  try {
    e[t] = o;
  } catch {
  }
  c && e.removeAttribute(l || t);
}
function As(e, t, o, a) {
  e.addEventListener(t, o, a);
}
function Wd(e, t, o, a) {
  e.removeEventListener(t, o, a);
}
const vi = Symbol("_vei");
function Gd(e, t, o, a, l = null) {
  const r = e[vi] || (e[vi] = {}), c = r[t];
  if (a && c)
    c.value = a;
  else {
    const [u, d] = jd(t);
    if (a) {
      const v = r[t] = Kd(
        a,
        l
      );
      As(e, u, v, d);
    } else c && (Wd(e, u, c, d), r[t] = void 0);
  }
}
const pi = /(?:Once|Passive|Capture)$/;
function jd(e) {
  let t;
  if (pi.test(e)) {
    t = {};
    let a;
    for (; a = e.match(pi); )
      e = e.slice(0, e.length - a[0].length), t[a[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : so(e.slice(2)), t];
}
let Va = 0;
const Hd = /* @__PURE__ */ Promise.resolve(), qd = () => Va || (Hd.then(() => Va = 0), Va = Date.now());
function Kd(e, t) {
  const o = (a) => {
    if (!a._vts)
      a._vts = Date.now();
    else if (a._vts <= o.attached)
      return;
    gs(
      Jd(a, o.value),
      t,
      5,
      [a]
    );
  };
  return o.value = e, o.attached = qd(), o;
}
function Jd(e, t) {
  if (Xe(t)) {
    const o = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      o.call(e), e._stopped = !0;
    }, t.map(
      (a) => (l) => !l._stopped && a && a(l)
    );
  } else
    return t;
}
const gi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Qd = (e, t, o, a, l, r) => {
  const c = l === "svg";
  t === "class" ? Od(e, a, c) : t === "style" ? Vd(e, o, a) : oa(t) ? il(t) || Gd(e, t, o, a, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Yd(e, t, a, c)) ? (fi(e, t, a), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && mi(e, t, a, c, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !xt(a)) ? fi(e, us(t), a, r, t) : (t === "true-value" ? e._trueValue = a : t === "false-value" && (e._falseValue = a), mi(e, t, a, c));
};
function Yd(e, t, o, a) {
  if (a)
    return !!(t === "innerHTML" || t === "textContent" || t in e && gi(t) && st(o));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const l = e.tagName;
    if (l === "IMG" || l === "VIDEO" || l === "CANVAS" || l === "SOURCE")
      return !1;
  }
  return gi(t) && xt(o) ? !1 : t in e;
}
const Jr = /* @__PURE__ */ new WeakMap(), Qr = /* @__PURE__ */ new WeakMap(), Zn = Symbol("_moveCb"), hi = Symbol("_enterCb"), Xd = (e) => (delete e.props.mode, e), Zd = /* @__PURE__ */ Xd({
  name: "TransitionGroup",
  props: /* @__PURE__ */ Rt({}, Hr, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: t }) {
    const o = xl(), a = vr();
    let l, r;
    return kr(() => {
      if (!l.length)
        return;
      const c = e.moveClass || `${e.name || "v"}-move`;
      if (!nm(
        l[0].el,
        o.vnode.el,
        c
      )) {
        l = [];
        return;
      }
      l.forEach(tm), l.forEach(sm);
      const u = l.filter(om);
      tl(o.vnode.el), u.forEach((d) => {
        const v = d.el, f = v.style;
        ks(v, c), f.transform = f.webkitTransform = f.transitionDuration = "";
        const p = v[Zn] = (w) => {
          w && w.target !== v || (!w || w.propertyName.endsWith("transform")) && (v.removeEventListener("transitionend", p), v[Zn] = null, Ks(v, c));
        };
        v.addEventListener("transitionend", p);
      }), l = [];
    }), () => {
      const c = ut(e), u = qr(c);
      let d = c.tag || W;
      if (l = [], r)
        for (let v = 0; v < r.length; v++) {
          const f = r[v];
          f.el && f.el instanceof Element && (l.push(f), vo(
            f,
            pn(
              f,
              u,
              a,
              o
            )
          ), Jr.set(f, {
            left: f.el.offsetLeft,
            top: f.el.offsetTop
          }));
        }
      r = t.default ? wl(t.default()) : [];
      for (let v = 0; v < r.length; v++) {
        const f = r[v];
        f.key != null && vo(
          f,
          pn(f, u, a, o)
        );
      }
      return $(d, null, r);
    };
  }
}), em = Zd;
function tm(e) {
  const t = e.el;
  t[Zn] && t[Zn](), t[hi] && t[hi]();
}
function sm(e) {
  Qr.set(e, {
    left: e.el.offsetLeft,
    top: e.el.offsetTop
  });
}
function om(e) {
  const t = Jr.get(e), o = Qr.get(e), a = t.left - o.left, l = t.top - o.top;
  if (a || l) {
    const r = e.el.style;
    return r.transform = r.webkitTransform = `translate(${a}px,${l}px)`, r.transitionDuration = "0s", e;
  }
}
function nm(e, t, o) {
  const a = e.cloneNode(), l = e[Lo];
  l && l.forEach((u) => {
    u.split(/\s+/).forEach((d) => d && a.classList.remove(d));
  }), o.split(/\s+/).forEach((u) => u && a.classList.add(u)), a.style.display = "none";
  const r = t.nodeType === 1 ? t : t.parentNode;
  r.appendChild(a);
  const { hasTransform: c } = Kr(a);
  return r.removeChild(a), c;
}
const to = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Xe(t) ? (o) => Un(t, o) : t;
};
function am(e) {
  e.target.composing = !0;
}
function yi(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const cs = Symbol("_assign");
function wi(e, t, o) {
  return t && (e = e.trim()), o && (e = la(e)), e;
}
const cn = {
  created(e, { modifiers: { lazy: t, trim: o, number: a } }, l) {
    e[cs] = to(l);
    const r = a || l.props && l.props.type === "number";
    As(e, t ? "change" : "input", (c) => {
      c.target.composing || e[cs](wi(e.value, o, r));
    }), (o || r) && As(e, "change", () => {
      e.value = wi(e.value, o, r);
    }), t || (As(e, "compositionstart", am), As(e, "compositionend", yi), As(e, "change", yi));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: o, modifiers: { lazy: a, trim: l, number: r } }, c) {
    if (e[cs] = to(c), e.composing) return;
    const u = (r || e.type === "number") && !/^0\d/.test(e.value) ? la(e.value) : e.value, d = t ?? "";
    u !== d && (document.activeElement === e && e.type !== "range" && (a && t === o || l && e.value.trim() === d) || (e.value = d));
  }
}, ea = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, o) {
    e[cs] = to(o), As(e, "change", () => {
      const a = e._modelValue, l = Do(e), r = e.checked, c = e[cs];
      if (Xe(a)) {
        const u = ul(a, l), d = u !== -1;
        if (r && !d)
          c(a.concat(l));
        else if (!r && d) {
          const v = [...a];
          v.splice(u, 1), c(v);
        }
      } else if (No(a)) {
        const u = new Set(a);
        r ? u.add(l) : u.delete(l), c(u);
      } else
        c(Yr(e, r));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: _i,
  beforeUpdate(e, t, o) {
    e[cs] = to(o), _i(e, t, o);
  }
};
function _i(e, { value: t, oldValue: o }, a) {
  e._modelValue = t;
  let l;
  if (Xe(t))
    l = ul(t, a.props.value) > -1;
  else if (No(t))
    l = t.has(a.props.value);
  else {
    if (t === o) return;
    l = fo(t, Yr(e, !0));
  }
  e.checked !== l && (e.checked = l);
}
const Vn = {
  created(e, { value: t }, o) {
    e.checked = fo(t, o.props.value), e[cs] = to(o), As(e, "change", () => {
      e[cs](Do(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: o }, a) {
    e[cs] = to(a), t !== o && (e.checked = fo(t, a.props.value));
  }
}, To = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: o } }, a) {
    const l = No(t);
    As(e, "change", () => {
      const r = Array.prototype.filter.call(e.options, (c) => c.selected).map(
        (c) => o ? la(Do(c)) : Do(c)
      );
      e[cs](
        e.multiple ? l ? new Set(r) : r : r[0]
      ), e._assigning = !0, Ot(() => {
        e._assigning = !1;
      });
    }), e[cs] = to(a);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    ki(e, t);
  },
  beforeUpdate(e, t, o) {
    e[cs] = to(o);
  },
  updated(e, { value: t }) {
    e._assigning || ki(e, t);
  }
};
function ki(e, t) {
  const o = e.multiple, a = Xe(t);
  if (!(o && !a && !No(t))) {
    for (let l = 0, r = e.options.length; l < r; l++) {
      const c = e.options[l], u = Do(c);
      if (o)
        if (a) {
          const d = typeof u;
          d === "string" || d === "number" ? c.selected = t.some((v) => String(v) === String(u)) : c.selected = ul(t, u) > -1;
        } else
          c.selected = t.has(u);
      else if (fo(Do(c), t)) {
        e.selectedIndex !== l && (e.selectedIndex = l);
        return;
      }
    }
    !o && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Do(e) {
  return "_value" in e ? e._value : e.value;
}
function Yr(e, t) {
  const o = t ? "_trueValue" : "_falseValue";
  return o in e ? e[o] : t;
}
const lm = ["ctrl", "shift", "alt", "meta"], im = {
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
  exact: (e, t) => lm.some((o) => e[`${o}Key`] && !t.includes(o))
}, vt = (e, t) => {
  const o = e._withMods || (e._withMods = {}), a = t.join(".");
  return o[a] || (o[a] = ((l, ...r) => {
    for (let c = 0; c < t.length; c++) {
      const u = im[t[c]];
      if (u && u(l, t)) return;
    }
    return e(l, ...r);
  }));
}, rm = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, fs = (e, t) => {
  const o = e._withKeys || (e._withKeys = {}), a = t.join(".");
  return o[a] || (o[a] = ((l) => {
    if (!("key" in l))
      return;
    const r = so(l.key);
    if (t.some(
      (c) => c === r || rm[c] === r
    ))
      return e(l);
  }));
}, cm = /* @__PURE__ */ Rt({ patchProp: Qd }, Rd);
let bi;
function um() {
  return bi || (bi = dd(cm));
}
const Cn = ((...e) => {
  const t = um().createApp(...e), { mount: o } = t;
  return t.mount = (a) => {
    const l = mm(a);
    if (!l) return;
    const r = t._component;
    !st(r) && !r.render && !r.template && (r.template = l.innerHTML), l.nodeType === 1 && (l.textContent = "");
    const c = o(l, !1, dm(l));
    return l instanceof Element && (l.removeAttribute("v-cloak"), l.setAttribute("data-v-app", "")), c;
  }, t;
});
function dm(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function mm(e) {
  return xt(e) ? document.querySelector(e) : e;
}
const BR = go({
  hasWorkspace: !1,
  hasEnvironments: !1,
  isManaged: !1,
  hasLegacyManager: !1
});
const WR = [
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
], GR = {
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
}, fm = [
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
], jR = [
  ...fm,
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
function jo() {
  return !1;
}
function vm(e) {
  return !!(e && typeof e.fetchApi == "function");
}
function Ao() {
  var o, a, l;
  const e = window, t = [
    (o = e.app) == null ? void 0 : o.api,
    (l = (a = e.comfyAPI) == null ? void 0 : a.api) == null ? void 0 : l.api
  ];
  for (const r of t)
    if (vm(r))
      return r;
  return null;
}
async function Zs(e, t) {
  const o = Ao();
  if (!o)
    throw new Error("ComfyUI API not available");
  return o.fetchApi(e, t);
}
function pm(e = "comfygit-panel") {
  const t = Ao();
  return (t == null ? void 0 : t.clientId) ?? (t == null ? void 0 : t.initialClientId) ?? e;
}
class Xr extends Error {
  constructor(o, a, l, r) {
    super(o);
    En(this, "status");
    En(this, "data");
    En(this, "endpoint");
    this.name = "ComfyGitApiError", this.status = a, this.data = l, this.endpoint = r;
  }
}
function gm() {
  return typeof crypto < "u" && crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const t = Math.random() * 16 | 0;
    return (e === "x" ? t : t & 3 | 8).toString(16);
  });
}
function ct() {
  const e = k(!1), t = k(null);
  async function o(z, $e) {
    const Ge = await Zs(z, $e), mt = await Ge.text();
    if (!Ge.ok) {
      let Mt = {};
      if (mt)
        try {
          const et = JSON.parse(mt);
          et && typeof et == "object" && (Mt = et);
        } catch {
          Mt = { error: mt };
        }
      const ys = Mt.error || Mt.message || Mt.detail || Ge.statusText || `Request failed: ${Ge.status}`;
      throw new Xr(String(ys), Ge.status, Mt, z);
    }
    if (mt)
      return JSON.parse(mt);
  }
  async function a(z) {
    return o(`/v2/comfygit/cloud/auth/config?cloud_url=${encodeURIComponent(z)}`);
  }
  async function l(z, $e, Ge) {
    return o("/v2/comfygit/cloud/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cloud_url: z, email: $e, password: Ge })
    });
  }
  async function r(z, $e, Ge) {
    return o("/v2/comfygit/cloud/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cloud_url: z, email: $e, password: Ge })
    });
  }
  async function c(z, $e) {
    return o(`/v2/comfygit/cloud/auth/me?cloud_url=${encodeURIComponent(z)}`, {
      headers: { Authorization: `Bearer ${$e}` }
    });
  }
  async function u(z, $e) {
    return o("/v2/comfygit/cloud/auth/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cloud_url: z, refresh_token: $e || null })
    });
  }
  async function d(z, $e) {
    return o(`/v2/comfygit/cloud/environments?cloud_url=${encodeURIComponent(z)}`, {
      headers: { Authorization: `Bearer ${$e}` }
    });
  }
  async function v(z, $e, Ge) {
    return o(
      `/v2/comfygit/cloud/environments/${encodeURIComponent($e)}/revisions?cloud_url=${encodeURIComponent(z)}`,
      {
        headers: { Authorization: `Bearer ${Ge}` }
      }
    );
  }
  async function f(z, $e, Ge, mt) {
    return o("/v2/comfygit/cloud/publish", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${$e}`
      },
      body: JSON.stringify({
        cloud_url: z,
        source_message: Ge || null,
        cloud_environment_id: mt || null
      })
    });
  }
  async function p(z = !1) {
    return o(z ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function w(z, $e = !1) {
    return o("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: z, allow_issues: $e })
    });
  }
  async function g(z = 10, $e = 0) {
    return o(`/v2/comfygit/log?limit=${z}&offset=${$e}`);
  }
  async function _(z, $e = 50) {
    return o(`/v2/comfygit/log?branch=${encodeURIComponent(z)}&limit=${$e}`);
  }
  async function b(z) {
    return o("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: z })
    });
  }
  async function S() {
    return o("/v2/comfygit/export/validate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({})
    });
  }
  async function C() {
    return o("/v2/comfygit/deploy/validate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({})
    });
  }
  async function I(z) {
    return o("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: z, force: !0 })
    });
  }
  async function E(z) {
    return o(`/v2/comfygit/environment_export/${encodeURIComponent(z)}/validate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({})
    });
  }
  async function M(z, $e) {
    return o(`/v2/comfygit/environment_export/${encodeURIComponent(z)}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: $e, force: !0 })
    });
  }
  async function N() {
    return o("/v2/comfygit/branches");
  }
  async function F(z) {
    return o(`/v2/comfygit/commit/${z}`);
  }
  async function V(z, $e = !1) {
    return o("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: z, force: $e })
    });
  }
  async function D(z, $e = "HEAD") {
    return o("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: z, start_point: $e })
    });
  }
  async function q(z, $e = !1) {
    return o("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: z, force: $e })
    });
  }
  async function ue(z, $e = !1) {
    return o(`/v2/comfygit/branch/${encodeURIComponent(z)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: $e })
    });
  }
  async function le() {
    try {
      return await o("/v2/comfygit/environments");
    } catch {
      try {
        const z = await p();
        return {
          environments: [{
            name: z.environment,
            is_current: !0,
            path: "~/comfygit/environments/" + z.environment,
            created_at: (/* @__PURE__ */ new Date()).toISOString(),
            workflow_count: z.workflows.total,
            node_count: 0,
            model_count: 0,
            current_branch: z.branch
          }],
          current: z.environment,
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
  async function Y() {
    return (await le()).environments;
  }
  async function me(z) {
    try {
      return await o(`/v2/comfygit/environments/${encodeURIComponent(z)}`);
    } catch {
      return null;
    }
  }
  async function ne(z, $e) {
    const Ge = { target_env: z };
    return $e && (Ge.workspace_path = $e), o("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Ge)
    });
  }
  async function B() {
    try {
      return o("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function H(z) {
    return o("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(z)
    });
  }
  async function we() {
    return o("/v2/workspace/environments/create_status");
  }
  async function oe(z = 100) {
    return o(`/v2/workspace/comfyui_releases?limit=${z}`);
  }
  async function de(z) {
    return o(`/v2/workspace/environments/${z}`, {
      method: "DELETE"
    });
  }
  async function ce(z = !1) {
    try {
      return o(z ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const $e = await p(z), Ge = [];
      return $e.workflows.new.forEach((mt) => {
        Ge.push({
          name: mt,
          status: "new",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: mt
        });
      }), $e.workflows.modified.forEach((mt) => {
        Ge.push({
          name: mt,
          status: "modified",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: mt
        });
      }), $e.workflows.synced.forEach((mt) => {
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
  async function K(z) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(z)}/details`);
  }
  async function ee(z) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(z)}/contract`);
  }
  async function te(z, $e) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(z)}/contract`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify($e)
    });
  }
  async function Me(z) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(z)}/contract`, {
      method: "DELETE"
    });
  }
  async function Se(z) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(z)}/resolve`, {
      method: "POST"
    });
  }
  async function ze(z, $e, Ge) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(z)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: $e, install_models: Ge })
    });
  }
  async function Ne(z, $e, Ge) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(z)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: $e, importance: Ge })
    });
  }
  async function be() {
    try {
      return o("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function Ae() {
    try {
      return o("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function ge(z) {
    return o(`/v2/workspace/models/details/${encodeURIComponent(z)}`);
  }
  async function ve(z) {
    return o(`/v2/workspace/models/${encodeURIComponent(z)}/source-candidates`);
  }
  async function T(z) {
    return o(`/v2/workspace/models/${encodeURIComponent(z)}/hashes`, {
      method: "POST"
    });
  }
  async function A() {
    return o("/v2/workspace/models/workflow-source-candidates");
  }
  async function ae(z) {
    return o("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: z })
    });
  }
  async function Ce(z, $e) {
    return o(`/v2/workspace/models/${z}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: $e })
    });
  }
  async function Ee(z, $e) {
    return o(`/v2/workspace/models/${z}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: $e })
    });
  }
  async function ke(z) {
    return o(`/v2/workspace/models/${z}`, {
      method: "DELETE"
    });
  }
  async function X(z) {
    return o("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(z)
    });
  }
  async function G() {
    return o("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function fe() {
    return o("/v2/workspace/models/directory");
  }
  async function he(z) {
    return o("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: z })
    });
  }
  async function je(z) {
    const $e = new URLSearchParams({ url: z });
    return o(`/v2/workspace/huggingface/repo-info?${$e}`);
  }
  async function We() {
    return o("/v2/workspace/models/subdirectories");
  }
  async function _e(z, $e = 10) {
    const Ge = new URLSearchParams({ query: z, limit: String($e) });
    return o(`/v2/workspace/huggingface/search?${Ge}`);
  }
  async function Z(z) {
    try {
      const $e = z ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(z)}` : "/v2/comfygit/config";
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
  async function Fe(z, $e) {
    const Ge = $e ? `/v2/comfygit/config?workspace_path=${encodeURIComponent($e)}` : "/v2/comfygit/config";
    return o(Ge, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(z)
    });
  }
  async function De(z, $e) {
    try {
      const Ge = new URLSearchParams();
      return z && Ge.append("level", z), $e && Ge.append("lines", $e.toString()), o(`/v2/comfygit/debug/logs?${Ge}`);
    } catch {
      return [];
    }
  }
  async function He(z, $e) {
    try {
      const Ge = new URLSearchParams();
      return z && Ge.append("level", z), $e && Ge.append("lines", $e.toString()), o(`/v2/workspace/debug/logs?${Ge}`);
    } catch {
      return [];
    }
  }
  async function Ve() {
    return o("/v2/comfygit/debug/logs/path");
  }
  async function Oe() {
    return o("/v2/comfygit/debug/manifest");
  }
  async function Qe() {
    return o("/v2/workspace/debug/logs/path");
  }
  async function pt(z, $e) {
    try {
      const Ge = new URLSearchParams();
      return z && Ge.append("level", z), $e && Ge.append("lines", $e.toString()), o(`/v2/workspace/debug/orchestrator-logs?${Ge}`);
    } catch {
      return [];
    }
  }
  async function Q() {
    return o("/v2/workspace/debug/orchestrator-logs/path");
  }
  async function pe(z) {
    return o("/v2/workspace/open-file", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: z })
    });
  }
  async function P() {
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
  async function U(z) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(z)}/track-dev`, {
      method: "POST"
    });
  }
  async function J(z) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(z)}/install`, {
      method: "POST"
    });
  }
  async function Te(z, $e) {
    const Ge = gm(), mt = pm(), Mt = {
      id: z.id,
      version: z.version || z.selected_version || "latest",
      selected_version: z.selected_version || "latest",
      mode: z.mode || "remote",
      channel: z.channel || "default"
    };
    return z.install_source && (Mt.install_source = z.install_source), z.install_source === "git" && z.repository && (Mt.repository = z.repository), await o("/v2/manager/queue/task", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        kind: "install",
        params: Mt,
        ui_id: Ge,
        client_id: mt
      })
    }), console.log("[ComfyGit] Task queued with ui_id:", Ge, "for package:", z.id), $e != null && $e.beforeQueueStart && await $e.beforeQueueStart(Ge), await o("/v2/manager/queue/start", {
      method: "POST"
    }), { ui_id: Ge };
  }
  async function Le(z) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(z)}/update`, {
      method: "POST"
    });
  }
  async function Ke(z, $e) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(z)}/criticality`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ criticality: $e })
    });
  }
  async function Pe(z) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(z)}`, {
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
  async function nt(z, $e) {
    return o("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: z, url: $e })
    });
  }
  async function St(z) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(z)}`, {
      method: "DELETE"
    });
  }
  async function Vt(z, $e, Ge) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(z)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: $e, push_url: Ge })
    });
  }
  async function Ct(z, $e) {
    const Ge = {};
    return $e && (Ge["X-Git-Auth-Token"] = $e), o(`/v2/comfygit/remotes/${encodeURIComponent(z)}/fetch`, {
      method: "POST",
      headers: Ge
    });
  }
  async function Tt(z) {
    try {
      return o(`/v2/comfygit/remotes/${encodeURIComponent(z)}/status`);
    } catch {
      return null;
    }
  }
  async function es(z = "skip", $e = !0) {
    return o("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: z,
        remove_extra_nodes: $e
      })
    });
  }
  async function It(z, $e) {
    const Ge = $e ? `/v2/comfygit/remotes/${encodeURIComponent(z)}/pull-preview?branch=${encodeURIComponent($e)}` : `/v2/comfygit/remotes/${encodeURIComponent(z)}/pull-preview`;
    return o(Ge);
  }
  async function Ws(z, $e = {}) {
    const Ge = { "Content-Type": "application/json" };
    return $e.authToken && (Ge["X-Git-Auth-Token"] = $e.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(z)}/pull`, {
      method: "POST",
      headers: Ge,
      body: JSON.stringify({
        model_strategy: $e.modelStrategy || "skip",
        force: $e.force || !1,
        resolutions: $e.resolutions
      })
    });
  }
  async function Ms(z, $e) {
    const Ge = $e ? `/v2/comfygit/remotes/${encodeURIComponent(z)}/push-preview?branch=${encodeURIComponent($e)}` : `/v2/comfygit/remotes/${encodeURIComponent(z)}/push-preview`;
    return o(Ge);
  }
  async function Gs(z, $e = {}) {
    const Ge = { "Content-Type": "application/json" };
    return $e.authToken && (Ge["X-Git-Auth-Token"] = $e.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(z)}/push`, {
      method: "POST",
      headers: Ge,
      body: JSON.stringify({ force: $e.force || !1 })
    });
  }
  async function js(z, $e) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(z)}/validate-merge`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resolutions: $e })
    });
  }
  async function Fo(z) {
    const $e = {
      success: 0,
      failed: []
    };
    for (const Ge of z)
      try {
        await Se(Ge), $e.success++;
      } catch (mt) {
        $e.failed.push({
          name: Ge,
          error: mt instanceof Error ? mt.message : "Unknown error"
        });
      }
    return $e;
  }
  async function Vo(z) {
    const $e = new FormData();
    $e.append("file", z);
    const Ge = await Zs("/v2/workspace/import/preview", {
      method: "POST",
      body: $e
      // Don't set Content-Type - browser will set multipart boundary automatically
    });
    if (!Ge.ok) {
      const mt = await Ge.json().catch(() => ({}));
      throw new Error(mt.error || `Preview failed: ${Ge.status}`);
    }
    return Ge.json();
  }
  async function Ps(z) {
    return o(
      `/v2/workspace/environments/validate?name=${encodeURIComponent(z)}`
    );
  }
  async function se(z, $e, Ge, mt) {
    const Mt = new FormData();
    Mt.append("file", z), Mt.append("name", $e), Mt.append("model_strategy", Ge), Mt.append("torch_backend", mt);
    const ys = await Zs("/v2/workspace/import", {
      method: "POST",
      body: Mt
    });
    if (!ys.ok) {
      const et = await ys.json().catch(() => ({}));
      throw new Error(et.message || et.error || `Import failed: ${ys.status}`);
    }
    return ys.json();
  }
  async function O() {
    return o("/v2/workspace/import/status");
  }
  async function re(z) {
    return o("/v2/workspace/import/preview/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ git_url: z })
    });
  }
  async function Je(z, $e, Ge, mt) {
    return o("/v2/workspace/import/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        git_url: z,
        name: $e,
        model_strategy: Ge,
        torch_backend: mt
      })
    });
  }
  async function it() {
    return o("/v2/setup/status");
  }
  async function tt() {
    return o("/v2/comfygit/update-check");
  }
  async function ns() {
    return o("/v2/comfygit/update", { method: "POST" });
  }
  async function Lt(z) {
    return o("/v2/setup/initialize_workspace", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(z)
    });
  }
  async function Rs() {
    return o("/v2/setup/initialize_status");
  }
  async function Hs(z) {
    return o("/v2/setup/validate_path", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(z)
    });
  }
  async function ga() {
    return o("/v2/comfygit/deploy/summary");
  }
  async function ha() {
    return o("/v2/comfygit/deploy/runpod/data-centers");
  }
  async function ya(z, $e) {
    return o("/v2/comfygit/deploy/runpod/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ api_key: z, save_key: $e })
    });
  }
  async function wa() {
    return o("/v2/comfygit/deploy/runpod/volumes");
  }
  async function xn(z) {
    const $e = z ? `/v2/comfygit/deploy/runpod/gpu-types?data_center_id=${encodeURIComponent(z)}` : "/v2/comfygit/deploy/runpod/gpu-types";
    return o($e);
  }
  async function _a(z) {
    return o("/v2/comfygit/deploy/runpod", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(z)
    });
  }
  async function ka() {
    return o("/v2/comfygit/deploy/runpod/pods");
  }
  async function ba(z) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(z)}`, {
      method: "DELETE"
    });
  }
  async function $a(z) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(z)}/stop`, {
      method: "POST"
    });
  }
  async function Ca(z) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(z)}/start`, {
      method: "POST"
    });
  }
  async function xa(z) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(z)}/status`);
  }
  async function Sa(z) {
    return o("/v2/comfygit/deploy/package", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: z })
    });
  }
  async function Ia(z = !1) {
    return o(z ? "/v2/comfygit/deploy/runpod/key?verify=true" : "/v2/comfygit/deploy/runpod/key");
  }
  async function Sn() {
    return o("/v2/comfygit/deploy/runpod/key", {
      method: "DELETE"
    });
  }
  async function Ea() {
    return o("/v2/comfygit/deploy/custom/workers");
  }
  async function Ta(z) {
    return o("/v2/comfygit/deploy/custom/workers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(z)
    });
  }
  async function In(z) {
    return o(`/v2/comfygit/deploy/custom/workers/${encodeURIComponent(z)}`, {
      method: "DELETE"
    });
  }
  async function ie(z) {
    return o("/v2/comfygit/deploy/custom/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(z)
    });
  }
  async function j() {
    return o("/v2/comfygit/deploy/custom/scan", {
      method: "POST"
    });
  }
  async function qe(z) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(z)}/info`);
  }
  async function Ze(z) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(z)}/instances`);
  }
  async function dt(z, $e) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(z)}/instances`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify($e)
    });
  }
  async function yt(z, $e) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(z)}/instances/${encodeURIComponent($e)}/start`, {
      method: "POST"
    });
  }
  async function Nt(z, $e) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(z)}/instances/${encodeURIComponent($e)}/stop`, {
      method: "POST"
    });
  }
  async function as(z, $e) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(z)}/instances/${encodeURIComponent($e)}`, {
      method: "DELETE"
    });
  }
  async function Bo(z) {
    return o("/v2/comfygit/deploy/test-git-auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: z })
    });
  }
  return {
    isLoading: e,
    error: t,
    getStatus: p,
    commit: w,
    getHistory: g,
    getBranchHistory: _,
    exportEnv: b,
    validateExport: S,
    validateDeploy: C,
    exportEnvWithForce: I,
    validateEnvironmentExport: E,
    exportEnvironmentWithForce: M,
    // Git Operations
    getBranches: N,
    getCommitDetail: F,
    checkout: V,
    createBranch: D,
    switchBranch: q,
    deleteBranch: ue,
    // Environment Management
    listEnvironments: le,
    getEnvironments: Y,
    getEnvironmentDetails: me,
    switchEnvironment: ne,
    getSwitchProgress: B,
    createEnvironment: H,
    getCreateProgress: we,
    getComfyUIReleases: oe,
    deleteEnvironment: de,
    // Workflow Management
    getWorkflows: ce,
    getWorkflowDetails: K,
    getWorkflowContract: ee,
    saveWorkflowContract: te,
    deleteWorkflowContract: Me,
    resolveWorkflow: Se,
    installWorkflowDeps: ze,
    setModelImportance: Ne,
    // Model Management
    getEnvironmentModels: be,
    getWorkspaceModels: Ae,
    getModelDetails: ge,
    getModelSourceCandidates: ve,
    computeModelHashes: T,
    getWorkflowSourceCandidates: A,
    openFileLocation: ae,
    addModelSource: Ce,
    removeModelSource: Ee,
    deleteModel: ke,
    downloadModel: X,
    scanWorkspaceModels: G,
    getModelsDirectory: fe,
    setModelsDirectory: he,
    getHuggingFaceRepoInfo: je,
    getModelsSubdirectories: We,
    searchHuggingFaceRepos: _e,
    // Settings
    getConfig: Z,
    updateConfig: Fe,
    // Cloud Auth
    getCloudAuthConfig: a,
    loginToCloud: l,
    signupToCloud: r,
    getCloudMe: c,
    logoutFromCloud: u,
    getCloudEnvironments: d,
    getCloudEnvironmentRevisions: v,
    publishCurrentEnvironmentToCloud: f,
    // Debug/Logs
    getEnvironmentLogs: De,
    getEnvironmentManifest: Oe,
    getWorkspaceLogs: He,
    getEnvironmentLogPath: Ve,
    getWorkspaceLogPath: Qe,
    getOrchestratorLogs: pt,
    getOrchestratorLogPath: Q,
    openFile: pe,
    // Node Management
    getNodes: P,
    trackNodeAsDev: U,
    installNode: J,
    queueNodeInstall: Te,
    updateNode: Le,
    updateNodeCriticality: Ke,
    uninstallNode: Pe,
    // Git Remotes
    getRemotes: Ye,
    addRemote: nt,
    removeRemote: St,
    updateRemoteUrl: Vt,
    fetchRemote: Ct,
    getRemoteSyncStatus: Tt,
    // Push/Pull
    getPullPreview: It,
    pullFromRemote: Ws,
    getPushPreview: Ms,
    pushToRemote: Gs,
    validateMerge: js,
    // Environment Sync
    syncEnvironmentManually: es,
    // Workflow Repair
    repairWorkflowModels: Fo,
    // Import Operations
    previewTarballImport: Vo,
    previewGitImport: re,
    validateEnvironmentName: Ps,
    executeImport: se,
    executeGitImport: Je,
    getImportProgress: O,
    // First-Time Setup
    getSetupStatus: it,
    // Manager Update Notice
    getUpdateCheck: tt,
    updateManager: ns,
    initializeWorkspace: Lt,
    getInitializeProgress: Rs,
    validatePath: Hs,
    // Deploy Operations
    getDeploySummary: ga,
    getDataCenters: ha,
    testRunPodConnection: ya,
    getNetworkVolumes: wa,
    getRunPodGpuTypes: xn,
    deployToRunPod: _a,
    getRunPodPods: ka,
    terminateRunPodPod: ba,
    stopRunPodPod: $a,
    startRunPodPod: Ca,
    getDeploymentStatus: xa,
    exportDeployPackage: Sa,
    getStoredRunPodKey: Ia,
    clearRunPodKey: Sn,
    // Custom Worker Operations
    getCustomWorkers: Ea,
    addCustomWorker: Ta,
    removeCustomWorker: In,
    testWorkerConnection: ie,
    scanForWorkers: j,
    getWorkerSystemInfo: qe,
    getWorkerInstances: Ze,
    deployToWorker: dt,
    startWorkerInstance: yt,
    stopWorkerInstance: Nt,
    terminateWorkerInstance: as,
    // Git Authentication
    testGitAuth: Bo
  };
}
const hm = { class: "panel-layout" }, ym = {
  key: 0,
  class: "panel-layout-header"
}, wm = {
  key: 1,
  class: "panel-layout-search"
}, _m = { class: "panel-layout-content" }, km = {
  key: 2,
  class: "panel-layout-footer"
}, bm = /* @__PURE__ */ xe({
  __name: "PanelLayout",
  setup(e) {
    return (t, o) => (n(), i("div", hm, [
      t.$slots.header ? (n(), i("div", ym, [
        at(t.$slots, "header", {}, void 0)
      ])) : y("", !0),
      t.$slots.search ? (n(), i("div", wm, [
        at(t.$slots, "search", {}, void 0)
      ])) : y("", !0),
      s("div", _m, [
        at(t.$slots, "content", {}, void 0)
      ]),
      t.$slots.footer ? (n(), i("div", km, [
        at(t.$slots, "footer", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), Ie = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [a, l] of t)
    o[a] = l;
  return o;
}, zt = /* @__PURE__ */ Ie(bm, [["__scopeId", "data-v-21565df9"]]), $m = {
  key: 0,
  class: "panel-title-prefix"
}, Cm = {
  key: 1,
  class: "panel-title-prefix-theme"
}, xm = /* @__PURE__ */ xe({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(e) {
    return (t, o) => (n(), L(_l(`h${e.level}`), {
      class: Be(["panel-title", e.variant])
    }, {
      default: h(() => [
        e.showPrefix ? (n(), i("span", $m, m(e.prefix), 1)) : (n(), i("span", Cm)),
        at(t.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Sm = /* @__PURE__ */ Ie(xm, [["__scopeId", "data-v-c3875efc"]]), Im = ["title"], Em = ["width", "height"], Tm = /* @__PURE__ */ xe({
  __name: "InfoButton",
  props: {
    size: { default: 16 },
    title: { default: "About this section" }
  },
  emits: ["click"],
  setup(e) {
    return (t, o) => (n(), i("button", {
      class: "info-button",
      title: e.title,
      onClick: o[0] || (o[0] = (a) => t.$emit("click"))
    }, [
      (n(), i("svg", {
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
      ])], 8, Em))
    ], 8, Im));
  }
}), Zr = /* @__PURE__ */ Ie(Tm, [["__scopeId", "data-v-6fc7f16d"]]), Mm = { class: "header-left" }, Pm = {
  key: 0,
  class: "header-actions"
}, Rm = /* @__PURE__ */ xe({
  __name: "PanelHeader",
  props: {
    title: {},
    showInfo: { type: Boolean, default: !1 },
    showPrefix: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  emits: ["info-click"],
  setup(e) {
    return (t, o) => (n(), i("div", {
      class: Be(["panel-header", { stacked: e.stacked }])
    }, [
      s("div", Mm, [
        $(Sm, { "show-prefix": e.showPrefix }, {
          default: h(() => [
            x(m(e.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        e.showInfo ? (n(), L(Zr, {
          key: 0,
          onClick: o[0] || (o[0] = (a) => t.$emit("info-click"))
        })) : y("", !0)
      ]),
      t.$slots.actions ? (n(), i("div", Pm, [
        at(t.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Ft = /* @__PURE__ */ Ie(Rm, [["__scopeId", "data-v-55a62cd6"]]), Lm = {
  key: 0,
  class: "section-title-count"
}, Dm = {
  key: 1,
  class: "section-title-icon"
}, Nm = /* @__PURE__ */ xe({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e) {
    return (t, o) => (n(), L(_l(`h${e.level}`), {
      class: Be(["section-title", { clickable: e.clickable }]),
      onClick: o[0] || (o[0] = (a) => e.clickable && t.$emit("click"))
    }, {
      default: h(() => [
        at(t.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (n(), i("span", Lm, "(" + m(e.count) + ")", 1)) : y("", !0),
        e.clickable ? (n(), i("span", Dm, m(e.expanded ? "▼" : "▸"), 1)) : y("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), is = /* @__PURE__ */ Ie(Nm, [["__scopeId", "data-v-559361eb"]]), Um = { class: "status-grid" }, Om = { class: "status-grid__columns" }, Am = { class: "status-grid__column" }, zm = { class: "status-grid__title" }, Fm = { class: "status-grid__column status-grid__column--right" }, Vm = { class: "status-grid__title" }, Bm = {
  key: 0,
  class: "status-grid__footer"
}, Wm = /* @__PURE__ */ xe({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(e) {
    return (t, o) => (n(), i("div", Um, [
      s("div", Om, [
        s("div", Am, [
          s("h4", zm, m(e.leftTitle), 1),
          at(t.$slots, "left", {}, void 0)
        ]),
        s("div", Fm, [
          s("h4", Vm, m(e.rightTitle), 1),
          at(t.$slots, "right", {}, void 0)
        ])
      ]),
      t.$slots.footer ? (n(), i("div", Bm, [
        at(t.$slots, "footer", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), Gm = /* @__PURE__ */ Ie(Wm, [["__scopeId", "data-v-73b7ba3f"]]), jm = {
  key: 0,
  class: "status-item__icon"
}, Hm = {
  key: 1,
  class: "status-item__count"
}, qm = { class: "status-item__label" }, Km = /* @__PURE__ */ xe({
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
    return (a, l) => (n(), i("div", {
      class: Be(["status-item", o.value, { "is-separator": e.separator }])
    }, [
      e.icon ? (n(), i("span", jm, m(e.icon), 1)) : y("", !0),
      e.count !== void 0 ? (n(), i("span", Hm, m(e.count), 1)) : y("", !0),
      s("span", qm, m(e.label), 1)
    ], 2));
  }
}), _s = /* @__PURE__ */ Ie(Km, [["__scopeId", "data-v-6f929183"]]), Jm = { class: "issue-card__header" }, Qm = { class: "issue-card__icon" }, Ym = { class: "issue-card__title" }, Xm = {
  key: 0,
  class: "issue-card__content"
}, Zm = {
  key: 0,
  class: "issue-card__description"
}, ef = {
  key: 1,
  class: "issue-card__items"
}, tf = {
  key: 2,
  class: "issue-card__actions"
}, sf = /* @__PURE__ */ xe({
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
    return (a, l) => (n(), i("div", {
      class: Be(["issue-card", o.value])
    }, [
      s("div", Jm, [
        s("span", Qm, m(e.icon), 1),
        s("h4", Ym, m(e.title), 1)
      ]),
      a.$slots.default || e.description ? (n(), i("div", Xm, [
        e.description ? (n(), i("p", Zm, m(e.description), 1)) : y("", !0),
        at(a.$slots, "default", {}, void 0)
      ])) : y("", !0),
      e.items && e.items.length ? (n(), i("div", ef, [
        (n(!0), i(W, null, ye(e.items, (r, c) => (n(), i("div", {
          key: c,
          class: "issue-card__item"
        }, [
          l[0] || (l[0] = s("span", { class: "issue-card__bullet" }, "•", -1)),
          s("span", null, m(r), 1)
        ]))), 128))
      ])) : y("", !0),
      a.$slots.actions ? (n(), i("div", tf, [
        at(a.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), ts = /* @__PURE__ */ Ie(sf, [["__scopeId", "data-v-df6aa348"]]), of = ["type", "disabled"], nf = {
  key: 0,
  class: "spinner"
}, af = /* @__PURE__ */ xe({
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
    return (t, o) => (n(), i("button", {
      type: e.type,
      disabled: e.disabled || e.loading,
      class: Be(["action-btn", e.variant, e.size, { loading: e.loading }]),
      onClick: o[0] || (o[0] = (a) => t.$emit("click", a))
    }, [
      e.loading ? (n(), i("span", nf)) : y("", !0),
      e.loading ? y("", !0) : at(t.$slots, "default", { key: 1 }, void 0)
    ], 10, of));
  }
}), Re = /* @__PURE__ */ Ie(af, [["__scopeId", "data-v-772abe47"]]), lf = /* @__PURE__ */ xe({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(e) {
    return (t, o) => (n(), i("span", {
      class: Be(["detail-label"]),
      style: Dt({ minWidth: e.minWidth })
    }, [
      at(t.$slots, "default", {}, void 0)
    ], 4));
  }
}), Bn = /* @__PURE__ */ Ie(lf, [["__scopeId", "data-v-75e9eeb8"]]), rf = /* @__PURE__ */ xe({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (t, o) => (n(), i("span", {
      class: Be(["detail-value", e.variant, { mono: e.mono, truncate: e.truncate }])
    }, [
      at(t.$slots, "default", {}, void 0)
    ], 2));
  }
}), sl = /* @__PURE__ */ Ie(rf, [["__scopeId", "data-v-2f186e4c"]]), cf = { class: "detail-row" }, uf = /* @__PURE__ */ xe({
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
    return (t, o) => (n(), i("div", cf, [
      $(Bn, { "min-width": e.labelMinWidth }, {
        default: h(() => [
          x(m(e.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      e.value ? (n(), L(sl, {
        key: 0,
        mono: e.mono,
        variant: e.valueVariant,
        truncate: e.truncate
      }, {
        default: h(() => [
          x(m(e.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : at(t.$slots, "value", { key: 1 }, void 0)
    ]));
  }
}), kt = /* @__PURE__ */ Ie(uf, [["__scopeId", "data-v-ef15664a"]]), df = { class: "modal-header" }, mf = { class: "modal-body" }, ff = { class: "status-section" }, vf = {
  key: 0,
  class: "status-section"
}, pf = { class: "section-header-row" }, gf = {
  key: 0,
  class: "workflow-group"
}, hf = { class: "workflow-group-header" }, yf = { class: "workflow-group-title" }, wf = { class: "workflow-list" }, _f = { class: "workflow-name" }, kf = { class: "workflow-issue" }, bf = {
  key: 1,
  class: "workflow-group"
}, $f = { class: "workflow-group-header" }, Cf = { class: "workflow-group-title" }, xf = { class: "workflow-list" }, Sf = { class: "workflow-name" }, If = { class: "workflow-issue" }, Ef = {
  key: 2,
  class: "workflow-group"
}, Tf = { class: "workflow-group-header" }, Mf = { class: "workflow-group-title" }, Pf = { class: "workflow-list" }, Rf = { class: "workflow-name" }, Lf = {
  key: 3,
  class: "workflow-group"
}, Df = { class: "workflow-group-header" }, Nf = { class: "workflow-group-title" }, Uf = { class: "workflow-list" }, Of = { class: "workflow-name" }, Af = {
  key: 4,
  class: "workflow-group"
}, zf = { class: "workflow-group-header" }, Ff = { class: "workflow-group-title" }, Vf = { class: "workflow-list" }, Bf = { class: "workflow-name" }, Wf = {
  key: 5,
  class: "workflow-group"
}, Gf = { class: "workflow-group-title" }, jf = { class: "expand-icon" }, Hf = {
  key: 0,
  class: "workflow-list"
}, qf = { class: "workflow-name" }, Kf = {
  key: 1,
  class: "status-section"
}, Jf = {
  key: 0,
  class: "change-group"
}, Qf = { class: "change-group-header" }, Yf = { class: "change-group-title" }, Xf = { class: "change-list" }, Zf = { class: "node-name" }, ev = {
  key: 0,
  class: "dev-badge"
}, tv = {
  key: 1,
  class: "change-group"
}, sv = { class: "change-group-header" }, ov = { class: "change-group-title" }, nv = { class: "change-list" }, av = { class: "node-name" }, lv = {
  key: 0,
  class: "dev-badge"
}, iv = {
  key: 2,
  class: "change-group"
}, rv = { class: "change-list" }, cv = { class: "change-item" }, uv = { class: "node-name" }, dv = {
  key: 3,
  class: "change-group"
}, mv = {
  key: 2,
  class: "status-section"
}, fv = { class: "section-header-row" }, vv = {
  key: 0,
  class: "drift-item"
}, pv = { class: "drift-list" }, gv = {
  key: 0,
  class: "drift-list-more"
}, hv = {
  key: 1,
  class: "drift-item"
}, yv = { class: "drift-list" }, wv = {
  key: 0,
  class: "drift-list-more"
}, _v = {
  key: 2,
  class: "drift-item"
}, kv = { class: "drift-list" }, bv = { class: "version-actual" }, $v = { class: "version-expected" }, Cv = {
  key: 0,
  class: "drift-list-more"
}, xv = {
  key: 3,
  class: "drift-item"
}, Sv = { class: "repair-action" }, Iv = {
  key: 3,
  class: "status-section"
}, Ev = { class: "info-box" }, Tv = { class: "drift-list" }, Mv = {
  key: 0,
  class: "drift-list-more"
}, Pv = {
  key: 4,
  class: "status-section"
}, Rv = { class: "warning-box" }, Lv = {
  key: 5,
  class: "empty-state-inline"
}, Dv = { class: "modal-actions" }, Nv = /* @__PURE__ */ xe({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {},
    isRepairing: { type: Boolean }
  },
  emits: ["close", "navigate-workflows", "navigate-nodes", "repair"],
  setup(e) {
    const t = e, o = k(!1);
    lt(() => {
      console.log("StatusDetailModal mounted, initial show value:", t.show);
    }), gt(() => t.show, (w, g) => {
      console.log("StatusDetailModal show prop changed from", g, "to", w);
    }, { immediate: !0 });
    const a = R(() => {
      var w, g, _;
      return ((_ = (g = (w = t.status) == null ? void 0 : w.workflows) == null ? void 0 : g.analyzed) == null ? void 0 : _.filter(
        (b) => b.status === "broken" && b.sync_state === "synced"
      )) || [];
    }), l = R(() => {
      var w, g, _;
      return ((_ = (g = (w = t.status) == null ? void 0 : w.workflows) == null ? void 0 : g.analyzed) == null ? void 0 : _.filter(
        (b) => b.status === "broken" && b.sync_state !== "synced"
      )) || [];
    }), r = R(() => {
      var w, g, _;
      return ((_ = (g = (w = t.status) == null ? void 0 : w.workflows) == null ? void 0 : g.synced) == null ? void 0 : _.filter((b) => {
        var C, I, E;
        const S = (E = (I = (C = t.status) == null ? void 0 : C.workflows) == null ? void 0 : I.analyzed) == null ? void 0 : E.find((M) => M.name === b);
        return !S || S.status !== "broken";
      })) || [];
    }), c = R(() => {
      var w, g, _, b, S;
      return (w = t.status) != null && w.workflows ? (((g = t.status.workflows.new) == null ? void 0 : g.length) ?? 0) > 0 || (((_ = t.status.workflows.modified) == null ? void 0 : _.length) ?? 0) > 0 || (((b = t.status.workflows.deleted) == null ? void 0 : b.length) ?? 0) > 0 || (((S = t.status.workflows.synced) == null ? void 0 : S.length) ?? 0) > 0 : !1;
    }), u = R(() => {
      var g, _, b;
      const w = (g = t.status) == null ? void 0 : g.git_changes;
      return w ? (((_ = w.nodes_added) == null ? void 0 : _.length) ?? 0) > 0 || (((b = w.nodes_removed) == null ? void 0 : b.length) ?? 0) > 0 || w.workflow_changes || w.has_other_changes : !1;
    }), d = R(() => {
      var w, g, _, b, S, C;
      return !c.value && !u.value && ((g = (w = t.status) == null ? void 0 : w.comparison) == null ? void 0 : g.is_synced) && (((_ = t.status) == null ? void 0 : _.missing_models_count) ?? 0) === 0 && (((C = (S = (b = t.status) == null ? void 0 : b.comparison) == null ? void 0 : S.disabled_nodes) == null ? void 0 : C.length) ?? 0) === 0;
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
      var _, b, S, C, I, E, M, N, F, V, D, q, ue, le, Y, me, ne, B, H, we, oe, de;
      return n(), L(Yt, { to: "body" }, [
        e.show ? (n(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: g[7] || (g[7] = (ce) => w.$emit("close"))
        }, [
          s("div", {
            class: "modal-content",
            onClick: g[6] || (g[6] = vt(() => {
            }, ["stop"]))
          }, [
            s("div", df, [
              g[8] || (g[8] = s("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              s("button", {
                class: "modal-close",
                onClick: g[0] || (g[0] = (ce) => w.$emit("close"))
              }, "✕")
            ]),
            s("div", mf, [
              s("div", ff, [
                $(is, { level: "4" }, {
                  default: h(() => [...g[9] || (g[9] = [
                    x("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                $(kt, {
                  label: "Current Branch:",
                  value: e.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              c.value ? (n(), i("div", vf, [
                s("div", pf, [
                  $(is, { level: "4" }, {
                    default: h(() => [...g[10] || (g[10] = [
                      x("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  s("button", {
                    class: "link-btn",
                    onClick: g[1] || (g[1] = (ce) => w.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                a.value.length ? (n(), i("div", gf, [
                  s("div", hf, [
                    g[11] || (g[11] = s("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    s("span", yf, "BROKEN (COMMITTED) (" + m(a.value.length) + ")", 1)
                  ]),
                  s("div", wf, [
                    (n(!0), i(W, null, ye(a.value, (ce) => (n(), i("div", {
                      key: ce.name,
                      class: "workflow-item"
                    }, [
                      s("span", _f, m(ce.name), 1),
                      s("span", kf, m(ce.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                l.value.length ? (n(), i("div", bf, [
                  s("div", $f, [
                    g[12] || (g[12] = s("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    s("span", Cf, "BROKEN (UNCOMMITTED) (" + m(l.value.length) + ")", 1)
                  ]),
                  s("div", xf, [
                    (n(!0), i(W, null, ye(l.value, (ce) => (n(), i("div", {
                      key: ce.name,
                      class: "workflow-item"
                    }, [
                      s("span", Sf, m(ce.name), 1),
                      s("span", If, m(ce.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (b = (_ = e.status.workflows) == null ? void 0 : _.new) != null && b.length ? (n(), i("div", Ef, [
                  s("div", Tf, [
                    g[13] || (g[13] = s("span", { class: "workflow-status-icon new" }, "●", -1)),
                    s("span", Mf, "NEW (" + m(e.status.workflows.new.length) + ")", 1)
                  ]),
                  s("div", Pf, [
                    (n(!0), i(W, null, ye(e.status.workflows.new, (ce) => (n(), i("div", {
                      key: ce,
                      class: "workflow-item"
                    }, [
                      s("span", Rf, m(ce), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (C = (S = e.status.workflows) == null ? void 0 : S.modified) != null && C.length ? (n(), i("div", Lf, [
                  s("div", Df, [
                    g[14] || (g[14] = s("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    s("span", Nf, "MODIFIED (" + m(e.status.workflows.modified.length) + ")", 1)
                  ]),
                  s("div", Uf, [
                    (n(!0), i(W, null, ye(e.status.workflows.modified, (ce) => (n(), i("div", {
                      key: ce,
                      class: "workflow-item"
                    }, [
                      s("span", Of, m(ce), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (E = (I = e.status.workflows) == null ? void 0 : I.deleted) != null && E.length ? (n(), i("div", Af, [
                  s("div", zf, [
                    g[15] || (g[15] = s("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    s("span", Ff, "DELETED (" + m(e.status.workflows.deleted.length) + ")", 1)
                  ]),
                  s("div", Vf, [
                    (n(!0), i(W, null, ye(e.status.workflows.deleted, (ce) => (n(), i("div", {
                      key: ce,
                      class: "workflow-item"
                    }, [
                      s("span", Bf, m(ce), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                r.value.length ? (n(), i("div", Wf, [
                  s("div", {
                    class: "workflow-group-header clickable",
                    onClick: g[2] || (g[2] = (ce) => o.value = !o.value)
                  }, [
                    g[16] || (g[16] = s("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    s("span", Gf, "SYNCED (" + m(r.value.length) + ")", 1),
                    s("span", jf, m(o.value ? "▼" : "▶"), 1)
                  ]),
                  o.value ? (n(), i("div", Hf, [
                    (n(!0), i(W, null, ye(r.value, (ce) => (n(), i("div", {
                      key: ce,
                      class: "workflow-item"
                    }, [
                      s("span", qf, m(ce), 1)
                    ]))), 128))
                  ])) : y("", !0)
                ])) : y("", !0)
              ])) : y("", !0),
              u.value ? (n(), i("div", Kf, [
                $(is, { level: "4" }, {
                  default: h(() => [...g[17] || (g[17] = [
                    x("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (N = (M = e.status.git_changes) == null ? void 0 : M.nodes_added) != null && N.length ? (n(), i("div", Jf, [
                  s("div", Qf, [
                    g[18] || (g[18] = s("span", { class: "change-icon add" }, "+", -1)),
                    s("span", Yf, "NODES ADDED (" + m(e.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  s("div", Xf, [
                    (n(!0), i(W, null, ye(e.status.git_changes.nodes_added, (ce) => (n(), i("div", {
                      key: f(ce),
                      class: "change-item"
                    }, [
                      s("span", Zf, m(f(ce)), 1),
                      p(ce) ? (n(), i("span", ev, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (V = (F = e.status.git_changes) == null ? void 0 : F.nodes_removed) != null && V.length ? (n(), i("div", tv, [
                  s("div", sv, [
                    g[19] || (g[19] = s("span", { class: "change-icon remove" }, "-", -1)),
                    s("span", ov, "NODES REMOVED (" + m(e.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  s("div", nv, [
                    (n(!0), i(W, null, ye(e.status.git_changes.nodes_removed, (ce) => (n(), i("div", {
                      key: f(ce),
                      class: "change-item"
                    }, [
                      s("span", av, m(f(ce)), 1),
                      p(ce) ? (n(), i("span", lv, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (D = e.status.git_changes) != null && D.workflow_changes ? (n(), i("div", iv, [
                  g[20] || (g[20] = s("div", { class: "change-group-header" }, [
                    s("span", { class: "change-icon modified" }, "~"),
                    s("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  s("div", rv, [
                    s("div", cv, [
                      s("span", uv, m(v.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : y("", !0),
                (q = e.status.git_changes) != null && q.has_other_changes ? (n(), i("div", dv, [...g[21] || (g[21] = [
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
              (ue = e.status.comparison) != null && ue.is_synced ? y("", !0) : (n(), i("div", mv, [
                s("div", fv, [
                  $(is, { level: "4" }, {
                    default: h(() => [...g[22] || (g[22] = [
                      x("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  s("button", {
                    class: "link-btn",
                    onClick: g[3] || (g[3] = (ce) => w.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                g[26] || (g[26] = s("div", { class: "warning-box" }, [
                  s("span", { class: "warning-icon" }, "⚠"),
                  s("span", null, "Environment needs repair")
                ], -1)),
                (Y = (le = e.status.comparison) == null ? void 0 : le.missing_nodes) != null && Y.length ? (n(), i("div", vv, [
                  $(kt, {
                    label: "Missing Nodes:",
                    value: `${e.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  s("div", pv, [
                    (n(!0), i(W, null, ye(e.status.comparison.missing_nodes.slice(0, 10), (ce) => (n(), i("div", {
                      key: ce,
                      class: "drift-list-item"
                    }, " - " + m(ce), 1))), 128)),
                    e.status.comparison.missing_nodes.length > 10 ? (n(), i("div", gv, " ... and " + m(e.status.comparison.missing_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (ne = (me = e.status.comparison) == null ? void 0 : me.extra_nodes) != null && ne.length ? (n(), i("div", hv, [
                  $(kt, {
                    label: "Extra Nodes:",
                    value: `${e.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  s("div", yv, [
                    (n(!0), i(W, null, ye(e.status.comparison.extra_nodes.slice(0, 10), (ce) => (n(), i("div", {
                      key: ce,
                      class: "drift-list-item"
                    }, " - " + m(ce), 1))), 128)),
                    e.status.comparison.extra_nodes.length > 10 ? (n(), i("div", wv, " ... and " + m(e.status.comparison.extra_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (H = (B = e.status.comparison) == null ? void 0 : B.version_mismatches) != null && H.length ? (n(), i("div", _v, [
                  $(kt, {
                    label: "Version Mismatches:",
                    value: `${e.status.comparison.version_mismatches.length} node(s) have wrong versions`
                  }, null, 8, ["value"]),
                  s("div", kv, [
                    (n(!0), i(W, null, ye(e.status.comparison.version_mismatches.slice(0, 10), (ce) => (n(), i("div", {
                      key: ce.name,
                      class: "drift-list-item version-mismatch"
                    }, [
                      x(m(ce.name) + ": ", 1),
                      s("span", bv, m(ce.actual), 1),
                      g[23] || (g[23] = x(" → ", -1)),
                      s("span", $v, m(ce.expected), 1)
                    ]))), 128)),
                    e.status.comparison.version_mismatches.length > 10 ? (n(), i("div", Cv, " ... and " + m(e.status.comparison.version_mismatches.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                ((we = e.status.comparison) == null ? void 0 : we.packages_in_sync) === !1 ? (n(), i("div", xv, [
                  $(kt, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ])) : y("", !0),
                s("div", Sv, [
                  $(Re, {
                    variant: "warning",
                    loading: e.isRepairing,
                    onClick: g[4] || (g[4] = (ce) => w.$emit("repair"))
                  }, {
                    default: h(() => [...g[24] || (g[24] = [
                      x(" Repair Environment ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"]),
                  g[25] || (g[25] = s("p", { class: "help-text" }, "Syncs environment to match pyproject.toml manifest", -1))
                ])
              ])),
              (de = (oe = e.status.comparison) == null ? void 0 : oe.disabled_nodes) != null && de.length ? (n(), i("div", Iv, [
                $(is, { level: "4" }, {
                  default: h(() => [...g[27] || (g[27] = [
                    x("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                s("div", Ev, [
                  g[28] || (g[28] = s("span", { class: "info-icon" }, "ℹ", -1)),
                  s("span", null, m(e.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                s("div", Tv, [
                  (n(!0), i(W, null, ye(e.status.comparison.disabled_nodes.slice(0, 10), (ce) => (n(), i("div", {
                    key: ce,
                    class: "drift-list-item"
                  }, " • " + m(ce), 1))), 128)),
                  e.status.comparison.disabled_nodes.length > 10 ? (n(), i("div", Mv, " ... and " + m(e.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : y("", !0)
                ])
              ])) : y("", !0),
              (e.status.missing_models_count ?? 0) > 0 ? (n(), i("div", Pv, [
                $(is, { level: "4" }, {
                  default: h(() => [...g[29] || (g[29] = [
                    x("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                s("div", Rv, [
                  g[30] || (g[30] = s("span", { class: "warning-icon" }, "⚠", -1)),
                  s("span", null, m(e.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                g[31] || (g[31] = s("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : y("", !0),
              d.value ? (n(), i("div", Lv, [...g[32] || (g[32] = [
                s("div", { class: "empty-icon" }, "✅", -1),
                s("div", { class: "empty-message" }, [
                  s("strong", null, "Environment is clean!"),
                  s("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : y("", !0)
            ]),
            s("div", Dv, [
              $(Re, {
                variant: "secondary",
                onClick: g[5] || (g[5] = (ce) => w.$emit("close"))
              }, {
                default: h(() => [...g[33] || (g[33] = [
                  x(" Close ", -1)
                ])]),
                _: 1
              })
            ])
          ])
        ])) : y("", !0)
      ]);
    };
  }
}), Uv = /* @__PURE__ */ Ie(Nv, [["__scopeId", "data-v-e2b37122"]]), Ov = { class: "base-modal-header" }, Av = {
  key: 0,
  class: "base-modal-title"
}, zv = { class: "base-modal-body" }, Fv = {
  key: 0,
  class: "base-modal-loading"
}, Vv = {
  key: 1,
  class: "base-modal-error"
}, Bv = {
  key: 0,
  class: "base-modal-footer"
}, Wv = /* @__PURE__ */ xe({
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
    const o = e, a = t;
    function l() {
      o.closeOnOverlayClick && a("close");
    }
    function r(c) {
      c.key === "Escape" && o.showCloseButton && a("close");
    }
    return lt(() => {
      document.addEventListener("keydown", r), document.body.style.overflow = "hidden";
    }), Uo(() => {
      document.removeEventListener("keydown", r), document.body.style.overflow = "";
    }), (c, u) => (n(), L(Yt, { to: "body" }, [
      s("div", {
        class: "base-modal-overlay",
        style: Dt({ zIndex: e.overlayZIndex }),
        onClick: l
      }, [
        s("div", {
          class: Be(["base-modal-content", e.size, { "fixed-height": e.fixedHeight }]),
          onClick: u[1] || (u[1] = vt(() => {
          }, ["stop"]))
        }, [
          s("div", Ov, [
            at(c.$slots, "header", {}, () => [
              e.title ? (n(), i("h3", Av, m(e.title), 1)) : y("", !0)
            ]),
            e.showCloseButton ? (n(), i("button", {
              key: 0,
              class: "base-modal-close",
              onClick: u[0] || (u[0] = (d) => c.$emit("close"))
            }, [...u[2] || (u[2] = [
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
          s("div", zv, [
            e.loading ? (n(), i("div", Fv, "Loading...")) : e.error ? (n(), i("div", Vv, m(e.error), 1)) : at(c.$slots, "body", { key: 2 }, void 0)
          ]),
          c.$slots.footer ? (n(), i("div", Bv, [
            at(c.$slots, "footer", {}, void 0)
          ])) : y("", !0)
        ], 2)
      ], 4)
    ]));
  }
}), $t = /* @__PURE__ */ Ie(Wv, [["__scopeId", "data-v-06a4be14"]]), Gv = ["type", "disabled"], jv = {
  key: 0,
  class: "spinner"
}, Hv = /* @__PURE__ */ xe({
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
    return (t, o) => (n(), i("button", {
      type: e.type,
      disabled: e.disabled || e.loading,
      class: Be(["base-btn", e.variant, e.size, { "full-width": e.fullWidth, loading: e.loading }]),
      onClick: o[0] || (o[0] = (a) => t.$emit("click", a))
    }, [
      e.loading ? (n(), i("span", jv)) : y("", !0),
      at(t.$slots, "default", {}, void 0)
    ], 10, Gv));
  }
}), Ue = /* @__PURE__ */ Ie(Hv, [["__scopeId", "data-v-f3452606"]]), qv = ["type", "value", "placeholder", "disabled"], Kv = {
  key: 0,
  class: "base-input-error"
}, Jv = /* @__PURE__ */ xe({
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
    return (t, o) => (n(), i("div", {
      class: Be(["base-input-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      s("input", {
        type: e.type,
        value: e.modelValue,
        placeholder: e.placeholder,
        disabled: e.disabled,
        class: Be(["base-input", { error: !!e.error }]),
        onInput: o[0] || (o[0] = (a) => t.$emit("update:modelValue", a.target.value)),
        onKeyup: [
          o[1] || (o[1] = fs((a) => t.$emit("enter"), ["enter"])),
          o[2] || (o[2] = fs((a) => t.$emit("escape"), ["escape"]))
        ]
      }, null, 42, qv),
      e.error ? (n(), i("span", Kv, m(e.error), 1)) : y("", !0)
    ], 2));
  }
}), bt = /* @__PURE__ */ Ie(Jv, [["__scopeId", "data-v-9ba02cdc"]]), Qv = ["disabled"], Yv = { class: "dropdown-value" }, Xv = ["onClick"], Zv = {
  key: 0,
  class: "dropdown-error"
}, ep = /* @__PURE__ */ xe({
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
    const o = e, a = t, l = k(!1), r = k(null), c = k(null), u = k({});
    function d(C) {
      return typeof C == "string" ? C : C.value;
    }
    function v(C) {
      return typeof C == "string" ? C : C.label;
    }
    const f = R(() => {
      if (!o.modelValue && o.placeholder)
        return o.placeholder;
      const C = o.options.find((I) => d(I) === o.modelValue);
      return C ? v(C) : String(o.modelValue);
    });
    function p() {
      o.disabled || (l.value = !l.value);
    }
    function w() {
      l.value = !1;
    }
    function g(C) {
      a("update:modelValue", d(C)), w();
    }
    function _() {
      if (!r.value) return;
      const C = r.value.getBoundingClientRect(), I = window.innerHeight, E = I - C.bottom, M = C.top, N = Math.min(300, o.options.length * 36 + 8), F = E < N && M > E;
      u.value = {
        position: "fixed",
        left: `${C.left}px`,
        width: `${C.width}px`,
        maxHeight: "300px",
        ...F ? { bottom: `${I - C.top + 4}px` } : { top: `${C.bottom + 4}px` }
      };
    }
    gt(l, async (C) => {
      C && (await Ot(), _());
    });
    function b() {
      l.value && _();
    }
    function S(C) {
      C.key === "Escape" && l.value && w();
    }
    return lt(() => {
      window.addEventListener("scroll", b, !0), window.addEventListener("keydown", S);
    }), Uo(() => {
      window.removeEventListener("scroll", b, !0), window.removeEventListener("keydown", S);
    }), (C, I) => (n(), i("div", {
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
        s("span", Yv, m(f.value), 1),
        I[0] || (I[0] = s("span", { class: "dropdown-arrow" }, "▼", -1))
      ], 10, Qv),
      (n(), L(Yt, { to: "body" }, [
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
          style: Dt(u.value)
        }, [
          (n(!0), i(W, null, ye(e.options, (E) => (n(), i("div", {
            key: d(E),
            class: Be(["dropdown-option", { selected: d(E) === e.modelValue }]),
            onClick: (M) => g(E)
          }, m(v(E)), 11, Xv))), 128))
        ], 4)) : y("", !0)
      ])),
      e.error ? (n(), i("span", Zv, m(e.error), 1)) : y("", !0)
    ], 512));
  }
}), tp = /* @__PURE__ */ Ie(ep, [["__scopeId", "data-v-857e085b"]]), sp = { class: "destination-section" }, op = { class: "section-label" }, np = { class: "destination-row" }, ap = {
  key: 0,
  class: "path-separator"
}, lp = /* @__PURE__ */ xe({
  __name: "DownloadDestinationPicker",
  props: {
    modelValue: {},
    label: { default: "Download Destination" },
    suggestedDirectory: { default: null }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, a = t, { getModelsSubdirectories: l } = ct(), r = k(""), c = k(""), u = k(""), d = k([]), v = k(!1);
    let f = !1;
    const p = R(() => {
      const b = d.value.map((S) => ({
        label: S,
        value: S
      }));
      return b.push({ label: "Custom path...", value: "__custom__" }), b;
    }), w = R(() => r.value === "__custom__" ? u.value.trim() : r.value ? c.value.trim() ? `${r.value}/${c.value.trim()}` : r.value : "");
    function g() {
      if (v.value || !o.suggestedDirectory) return;
      const b = d.value.find(
        (S) => {
          var C;
          return S.toLowerCase() === ((C = o.suggestedDirectory) == null ? void 0 : C.toLowerCase());
        }
      );
      b && b !== r.value && (f = !0, r.value = b, Ot(() => {
        f = !1;
      }));
    }
    async function _() {
      try {
        const b = await l();
        d.value = b.directories, b.directories.length > 0 && !r.value && (r.value = b.directories[0]);
      } catch {
        d.value = ["checkpoints", "loras", "vae", "controlnet", "unet"], r.value || (r.value = "checkpoints");
      }
    }
    return gt(w, (b) => {
      a("update:modelValue", b);
    }, { immediate: !0 }), gt(() => o.suggestedDirectory, g), gt(d, g), gt(r, (b, S) => {
      f || S === "" || (v.value = !0);
    }), lt(_), (b, S) => (n(), i("div", sp, [
      s("h4", op, m(e.label), 1),
      s("div", np, [
        $(tp, {
          modelValue: r.value,
          "onUpdate:modelValue": S[0] || (S[0] = (C) => r.value = C),
          options: p.value,
          placeholder: "Select directory...",
          class: "dest-select"
        }, null, 8, ["modelValue", "options"]),
        r.value !== "__custom__" ? (n(), i("span", ap, "/")) : y("", !0),
        r.value !== "__custom__" ? (n(), L(bt, {
          key: 1,
          modelValue: c.value,
          "onUpdate:modelValue": S[1] || (S[1] = (C) => c.value = C),
          placeholder: "subfolder (optional)",
          class: "dest-subfolder"
        }, null, 8, ["modelValue"])) : y("", !0)
      ]),
      r.value === "__custom__" ? (n(), L(bt, {
        key: 0,
        modelValue: u.value,
        "onUpdate:modelValue": S[2] || (S[2] = (C) => u.value = C),
        placeholder: "Enter directory relative to models folder...",
        class: "dest-custom",
        "full-width": ""
      }, null, 8, ["modelValue"])) : y("", !0)
    ]));
  }
}), ec = /* @__PURE__ */ Ie(lp, [["__scopeId", "data-v-2fbc2b02"]]);
function ip(e) {
  const t = e.toLowerCase();
  return t === "huggingface.co" || t.endsWith(".huggingface.co") || t === "hf.co";
}
function rp(e) {
  const t = e.trim();
  if (!t) return { kind: "unknown" };
  let o;
  try {
    o = new URL(t);
  } catch {
    return { kind: "unknown" };
  }
  if (!ip(o.hostname)) return { kind: "unknown" };
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
function cp(e) {
  return e.split("/").map(encodeURIComponent).join("/");
}
function $i(e, t, o) {
  const [a, l] = e.split("/");
  return `https://huggingface.co/${encodeURIComponent(a)}/${encodeURIComponent(l)}/resolve/${encodeURIComponent(t)}/${cp(o)}`;
}
const up = { class: "hf-file-browser" }, dp = { class: "browser-header" }, mp = { class: "repo-info" }, fp = { class: "repo-id" }, vp = {
  key: 0,
  class: "revision-pill"
}, pp = {
  key: 0,
  class: "loading-state"
}, gp = {
  key: 1,
  class: "error-state"
}, hp = { class: "toolbar" }, yp = { class: "toolbar-actions" }, wp = { class: "file-list-container" }, _p = {
  key: 0,
  class: "file-list-header"
}, kp = ["checked", "indeterminate"], bp = {
  key: 1,
  class: "file-checkbox-spacer"
}, $p = { class: "sort-indicator" }, Cp = { class: "sort-indicator" }, xp = {
  key: 1,
  class: "empty-state"
}, Sp = {
  key: 2,
  class: "file-list"
}, Ip = ["onClick"], Ep = ["checked", "onChange"], Tp = { class: "file-path" }, Mp = { class: "file-size" }, Pp = { class: "action-bar" }, Rp = { class: "summary-info" }, Lp = { class: "summary-count" }, Dp = { class: "summary-size" }, Np = /* @__PURE__ */ xe({
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
    const o = e, a = t, { getHuggingFaceRepoInfo: l } = ct(), r = k([]), c = k(/* @__PURE__ */ new Set()), u = k(!1), d = k(null), v = k(""), f = k(!1), p = k("name"), w = k(!0), g = k(""), _ = /^(.*)-(\d{4,5})-of-(\d{4,5})(\.[^.]+)$/i, b = R(() => {
      let te = r.value;
      if (o.initialPath) {
        const Me = o.initialPath.endsWith("/") ? o.initialPath : `${o.initialPath}/`;
        te = te.filter((Se) => Se.path.startsWith(Me) || Se.path === o.initialPath);
      }
      if (f.value && (te = te.filter((Me) => Me.is_model_file)), v.value.trim()) {
        const Me = v.value.toLowerCase();
        te = te.filter((Se) => Se.path.toLowerCase().includes(Me));
      }
      return te;
    }), S = R(() => {
      const te = [...b.value];
      return te.sort((Me, Se) => {
        let ze;
        return p.value === "name" ? ze = Me.path.localeCompare(Se.path) : ze = Me.size - Se.size, w.value ? ze : -ze;
      }), te;
    }), C = R(() => b.value.length === 0 ? !1 : b.value.every((te) => c.value.has(te.path))), I = R(() => b.value.some((te) => c.value.has(te.path))), E = R(() => g.value.trim().length > 0), M = R(() => {
      let te = 0;
      for (const Me of c.value) {
        const Se = r.value.find((ze) => ze.path === Me);
        Se && (te += Se.size);
      }
      return te;
    }), N = R(() => {
      if (c.value.size === 0) return null;
      const te = /* @__PURE__ */ new Set();
      for (const Me of c.value) {
        const Se = we(Me);
        Se && te.add(Se.toLowerCase());
      }
      return te.size !== 1 ? null : [...te][0];
    }), F = R(() => o.mode || "download"), V = R(() => o.actionLabel || (F.value === "source" ? "Use as Source" : "Queue Download")), D = R(() => F.value === "source" ? c.value.size === 1 ? "1 file selected" : `${c.value.size} files selected` : `${c.value.size} file(s) selected`), q = R(() => F.value === "source" ? c.value.size !== 1 : c.value.size === 0 || !E.value);
    function ue(te) {
      if (te === 0) return "0 B";
      const Me = 1024 * 1024 * 1024, Se = 1024 * 1024, ze = 1024;
      return te >= Me ? `${(te / Me).toFixed(2)} GB` : te >= Se ? `${(te / Se).toFixed(1)} MB` : te >= ze ? `${(te / ze).toFixed(0)} KB` : `${te} B`;
    }
    function le(te) {
      const Me = te.match(_);
      return Me ? `${Me[1]}${Me[4]}` : null;
    }
    function Y(te) {
      if (F.value === "source") {
        c.value = c.value.has(te.path) ? /* @__PURE__ */ new Set() : /* @__PURE__ */ new Set([te.path]);
        return;
      }
      const Me = new Set(c.value), Se = Me.has(te.path), ze = te.shard_group || le(te.path);
      if (ze) {
        const Ne = r.value.filter((be) => (be.shard_group || le(be.path)) === ze);
        Se ? Ne.forEach((be) => Me.delete(be.path)) : Ne.forEach((be) => Me.add(be.path));
      } else
        Se ? Me.delete(te.path) : Me.add(te.path);
      c.value = Me;
    }
    function me() {
      const te = new Set(c.value);
      for (const Me of b.value)
        Me.is_model_file && te.add(Me.path);
      c.value = te;
    }
    function ne() {
      c.value = /* @__PURE__ */ new Set();
    }
    function B() {
      if (C.value) {
        const te = new Set(c.value);
        for (const Me of b.value)
          te.delete(Me.path);
        c.value = te;
      } else {
        const te = new Set(c.value);
        for (const Me of b.value)
          te.add(Me.path);
        c.value = te;
      }
    }
    function H(te) {
      p.value === te ? w.value = !w.value : (p.value = te, w.value = !0);
    }
    function we(te) {
      const Me = te.split("/");
      return Me.length >= 2 ? Me[Me.length - 2] : null;
    }
    function oe() {
      return g.value.trim();
    }
    function de() {
      if (c.value.size === 0 || !E.value) return;
      const te = oe(), Me = [];
      for (const Se of c.value) {
        const ze = r.value.find((Ne) => Ne.path === Se);
        ze && Me.push({
          url: $i(o.repoId, o.revision, ze.path),
          destination: te,
          filename: ze.path.split("/").pop() || ze.path
        });
      }
      a("queue", Me);
    }
    function ce() {
      if (c.value.size !== 1) return;
      const [te] = c.value;
      a("selectSource", $i(o.repoId, o.revision, te));
    }
    function K() {
      if (F.value === "source") {
        ce();
        return;
      }
      de();
    }
    async function ee() {
      if (o.repoId) {
        u.value = !0, d.value = null;
        try {
          const te = `https://huggingface.co/${o.repoId}/tree/${o.revision || "main"}`, Me = await l(te);
          if (r.value = Me.files, o.preselectedFile) {
            const Se = r.value.find((ze) => ze.path === o.preselectedFile);
            Se && Y(Se);
          }
        } catch (te) {
          d.value = te instanceof Error ? te.message : "Failed to load repository";
        } finally {
          u.value = !1;
        }
      }
    }
    return gt(() => [o.repoId, o.revision], () => {
      o.repoId && ee();
    }, { immediate: !1 }), lt(() => {
      ee();
    }), (te, Me) => (n(), i("div", up, [
      s("div", dp, [
        s("button", {
          class: "back-btn",
          onClick: Me[0] || (Me[0] = (Se) => te.$emit("back")),
          title: "Back to search"
        }, " ◄ "),
        s("div", mp, [
          s("span", fp, m(e.repoId), 1),
          e.revision ? (n(), i("span", vp, m(e.revision), 1)) : y("", !0)
        ])
      ]),
      u.value ? (n(), i("div", pp, " Loading repository files... ")) : d.value ? (n(), i("div", gp, m(d.value), 1)) : (n(), i(W, { key: 2 }, [
        s("div", hp, [
          $(bt, {
            modelValue: v.value,
            "onUpdate:modelValue": Me[1] || (Me[1] = (Se) => v.value = Se),
            placeholder: "Filter files...",
            type: "search",
            class: "search-input"
          }, null, 8, ["modelValue"]),
          s("div", yp, [
            s("button", {
              class: Be(["toggle-btn", { active: f.value }]),
              onClick: Me[2] || (Me[2] = (Se) => f.value = !f.value)
            }, m(f.value ? "Models Only" : "All Files"), 3),
            F.value === "download" ? (n(), i("button", {
              key: 0,
              class: "action-btn",
              onClick: me
            }, "Auto-Select Models")) : y("", !0),
            s("button", {
              class: "action-btn",
              onClick: ne
            }, "Clear")
          ])
        ]),
        s("div", wp, [
          b.value.length > 0 ? (n(), i("div", _p, [
            F.value === "download" ? (n(), i("input", {
              key: 0,
              type: "checkbox",
              checked: C.value,
              indeterminate: I.value && !C.value,
              class: "file-checkbox",
              onChange: B
            }, null, 40, kp)) : (n(), i("span", bp)),
            s("span", {
              class: "header-name",
              onClick: Me[3] || (Me[3] = (Se) => H("name"))
            }, [
              Me[7] || (Me[7] = x(" Name ", -1)),
              s("span", $p, m(p.value === "name" ? w.value ? "▲" : "▼" : ""), 1)
            ]),
            s("span", {
              class: "header-size",
              onClick: Me[4] || (Me[4] = (Se) => H("size"))
            }, [
              Me[8] || (Me[8] = x(" Size ", -1)),
              s("span", Cp, m(p.value === "size" ? w.value ? "▲" : "▼" : ""), 1)
            ])
          ])) : y("", !0),
          b.value.length === 0 ? (n(), i("div", xp, m(r.value.length === 0 ? "No files in repository" : "No files match filter"), 1)) : (n(), i("div", Sp, [
            (n(!0), i(W, null, ye(S.value, (Se) => (n(), i("div", {
              key: Se.path,
              class: Be(["file-item", { selected: c.value.has(Se.path) }]),
              onClick: (ze) => Y(Se)
            }, [
              s("input", {
                type: "checkbox",
                checked: c.value.has(Se.path),
                class: "file-checkbox",
                onClick: Me[5] || (Me[5] = vt(() => {
                }, ["stop"])),
                onChange: (ze) => Y(Se)
              }, null, 40, Ep),
              s("span", Tp, m(Se.path), 1),
              s("span", Mp, m(ue(Se.size)), 1)
            ], 10, Ip))), 128))
          ]))
        ]),
        F.value === "download" ? (n(), L(ec, {
          key: 0,
          modelValue: g.value,
          "onUpdate:modelValue": Me[6] || (Me[6] = (Se) => g.value = Se),
          "suggested-directory": N.value
        }, null, 8, ["modelValue", "suggested-directory"])) : y("", !0),
        s("div", Pp, [
          s("div", Rp, [
            s("span", Lp, m(D.value), 1),
            s("span", Dp, m(ue(M.value)), 1)
          ]),
          $(Ue, {
            variant: "primary",
            disabled: q.value,
            onClick: K
          }, {
            default: h(() => [
              x(m(V.value), 1)
            ]),
            _: 1
          }, 8, ["disabled"])
        ])
      ], 64))
    ]));
  }
}), Up = /* @__PURE__ */ Ie(Np, [["__scopeId", "data-v-06caa551"]]), Op = { class: "token-config-modal" }, Ap = { class: "provider-info" }, zp = { class: "provider-icon" }, Fp = { class: "provider-name" }, Vp = {
  key: 0,
  class: "current-token"
}, Bp = { class: "mask" }, Wp = { class: "token-input-section" }, Gp = { class: "input-label" }, jp = { class: "help-text" }, Hp = ["href"], qp = { class: "modal-actions" }, Kp = /* @__PURE__ */ xe({
  __name: "TokenConfigModal",
  props: {
    provider: {},
    currentTokenMask: {},
    overlayZIndex: {}
  },
  emits: ["close", "saved", "cleared"],
  setup(e, { emit: t }) {
    const o = e, a = t, { updateConfig: l } = ct(), r = k(""), c = k(!1), u = k(!1), d = R(
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
        c.value = !0;
        try {
          const b = o.provider === "huggingface" ? { huggingface_token: r.value.trim() } : { civitai_api_key: r.value.trim() };
          await l(b), r.value = "", a("saved"), a("close");
        } catch (b) {
          console.error("Failed to save token:", b);
        } finally {
          c.value = !1;
        }
      }
    }
    async function _() {
      u.value = !0;
      try {
        const b = o.provider === "huggingface" ? { huggingface_token: null } : { civitai_api_key: null };
        await l(b), a("cleared"), a("close");
      } catch (b) {
        console.error("Failed to clear token:", b);
      } finally {
        u.value = !1;
      }
    }
    return (b, S) => (n(), L($t, {
      title: "Configure API Token",
      "overlay-z-index": e.overlayZIndex,
      onClose: S[2] || (S[2] = (C) => b.$emit("close"))
    }, {
      body: h(() => [
        s("div", Op, [
          s("div", Ap, [
            s("span", zp, m(v.value), 1),
            s("span", Fp, m(d.value), 1)
          ]),
          e.currentTokenMask ? (n(), i("div", Vp, [
            S[4] || (S[4] = s("span", { class: "label" }, "Current token:", -1)),
            s("span", Bp, m(e.currentTokenMask), 1),
            $(Ue, {
              variant: "danger",
              size: "sm",
              onClick: _,
              loading: u.value
            }, {
              default: h(() => [...S[3] || (S[3] = [
                x(" Clear Token ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ])) : y("", !0),
          s("div", Wp, [
            s("label", Gp, m(e.currentTokenMask ? "Replace with new token:" : "Enter token:"), 1),
            $(bt, {
              modelValue: r.value,
              "onUpdate:modelValue": S[0] || (S[0] = (C) => r.value = C),
              type: "password",
              placeholder: f.value
            }, null, 8, ["modelValue", "placeholder"]),
            s("div", jp, [
              s("a", {
                href: p.value,
                target: "_blank",
                rel: "noopener"
              }, m(w.value), 9, Hp)
            ])
          ])
        ])
      ]),
      footer: h(() => [
        s("div", qp, [
          $(Ue, {
            variant: "secondary",
            onClick: S[1] || (S[1] = (C) => b.$emit("close"))
          }, {
            default: h(() => [...S[5] || (S[5] = [
              x(" Cancel ", -1)
            ])]),
            _: 1
          }),
          $(Ue, {
            variant: "primary",
            disabled: !r.value.trim(),
            loading: c.value,
            onClick: g
          }, {
            default: h(() => [...S[6] || (S[6] = [
              x(" Save Token ", -1)
            ])]),
            _: 1
          }, 8, ["disabled", "loading"])
        ])
      ]),
      _: 1
    }, 8, ["overlay-z-index"]));
  }
}), Jp = /* @__PURE__ */ Ie(Kp, [["__scopeId", "data-v-525ec64a"]]), Qp = { class: "huggingface-tab" }, Yp = {
  key: 0,
  class: "search-section"
}, Xp = { class: "search-header" }, Zp = { class: "search-bar" }, eg = {
  key: 1,
  class: "search-results"
}, tg = {
  key: 0,
  class: "loading-state"
}, sg = {
  key: 1,
  class: "error-state"
}, og = {
  key: 2,
  class: "results-list"
}, ng = ["onClick"], ag = { class: "repo-header" }, lg = { class: "repo-id" }, ig = { class: "repo-stats" }, rg = {
  class: "stat",
  title: "Downloads"
}, cg = {
  class: "stat",
  title: "Likes"
}, ug = {
  key: 0,
  class: "repo-desc"
}, dg = {
  key: 1,
  class: "repo-tags"
}, mg = {
  key: 3,
  class: "empty-state"
}, fg = {
  key: 4,
  class: "hint-state"
}, vg = /* @__PURE__ */ xe({
  __name: "HuggingFaceTab",
  props: {
    modeKind: { default: "download" },
    actionLabel: { default: "Queue Download" },
    overlayZIndex: { default: 10003 }
  },
  emits: ["queue", "selectSource"],
  setup(e) {
    const { searchHuggingFaceRepos: t, getConfig: o } = ct(), a = k("search"), l = k(""), r = k([]), c = k(!1), u = k(null), d = k(!1), v = k(null), f = k("main"), p = k(), w = k(), g = k(!1), _ = k(null), b = R(() => {
      if (!u.value) return !1;
      const V = u.value.toLowerCase();
      return u.value.includes("401") || u.value.includes("403") || V.includes("authentication") || V.includes("unauthorized");
    });
    function S(V) {
      return V >= 1e6 ? `${(V / 1e6).toFixed(1)}M` : V >= 1e3 ? `${(V / 1e3).toFixed(1)}K` : String(V);
    }
    async function C() {
      const V = l.value.trim();
      if (!V) return;
      u.value = null;
      const D = rp(V);
      if (D.kind === "file" && D.repoId && D.path) {
        v.value = D.repoId, f.value = D.revision || "main";
        const q = D.path.split("/");
        q.length > 1 ? p.value = q.slice(0, -1).join("/") : p.value = void 0, w.value = D.path, a.value = "browse";
        return;
      }
      if (D.kind === "repo" && D.repoId) {
        v.value = D.repoId, f.value = D.revision || "main", p.value = D.path, w.value = void 0, a.value = "browse";
        return;
      }
      if (/^[\w-]+\/[\w.-]+$/.test(V) && !V.includes("://")) {
        v.value = V, f.value = "main", p.value = void 0, w.value = void 0, a.value = "browse";
        return;
      }
      c.value = !0;
      try {
        const q = await t(V);
        r.value = q.results, d.value = !0;
      } catch (q) {
        u.value = q instanceof Error ? q.message : "Search failed";
      } finally {
        c.value = !1;
      }
    }
    function I(V) {
      v.value = V, f.value = "main", p.value = void 0, w.value = void 0, a.value = "browse";
    }
    function E() {
      a.value = "search", v.value = null, p.value = void 0, w.value = void 0;
    }
    async function M() {
      try {
        const V = await o();
        _.value = V.huggingface_token || null;
      } catch (V) {
        console.error("Failed to load config:", V);
      }
    }
    function N() {
      M(), b.value && l.value && C();
    }
    function F() {
      _.value = null;
    }
    return lt(M), (V, D) => (n(), i("div", Qp, [
      a.value === "search" ? (n(), i("div", Yp, [
        s("div", Xp, [
          s("div", Zp, [
            $(bt, {
              modelValue: l.value,
              "onUpdate:modelValue": D[0] || (D[0] = (q) => l.value = q),
              placeholder: "Search repos, paste URL, or enter user/repo...",
              onKeydown: fs(C, ["enter"])
            }, null, 8, ["modelValue"]),
            $(Ue, {
              variant: "primary",
              onClick: C,
              loading: c.value
            }, {
              default: h(() => [...D[6] || (D[6] = [
                x(" Search ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ]),
          $(Ue, {
            variant: "secondary",
            size: "sm",
            onClick: D[1] || (D[1] = (q) => g.value = !0)
          }, {
            default: h(() => [
              x(m(_.value ? `Token: ${_.value}` : "Configure Token"), 1)
            ]),
            _: 1
          })
        ])
      ])) : y("", !0),
      a.value === "search" ? (n(), i("div", eg, [
        c.value ? (n(), i("div", tg, " Searching HuggingFace... ")) : u.value ? (n(), i("div", sg, [
          s("p", null, m(u.value), 1),
          b.value ? (n(), L(Ue, {
            key: 0,
            variant: "primary",
            size: "sm",
            onClick: D[2] || (D[2] = (q) => g.value = !0)
          }, {
            default: h(() => [...D[7] || (D[7] = [
              x(" Configure HuggingFace Token ", -1)
            ])]),
            _: 1
          })) : y("", !0)
        ])) : r.value.length > 0 ? (n(), i("div", og, [
          (n(!0), i(W, null, ye(r.value, (q) => (n(), i("div", {
            key: q.repo_id,
            class: "repo-card",
            onClick: (ue) => I(q.repo_id)
          }, [
            s("div", ag, [
              s("span", lg, m(q.repo_id), 1),
              s("div", ig, [
                s("span", rg, [
                  D[8] || (D[8] = s("span", { class: "stat-icon" }, "↓", -1)),
                  x(" " + m(S(q.downloads)), 1)
                ]),
                s("span", cg, [
                  D[9] || (D[9] = s("span", { class: "stat-icon" }, "★", -1)),
                  x(" " + m(S(q.likes)), 1)
                ])
              ])
            ]),
            q.description ? (n(), i("p", ug, m(q.description), 1)) : y("", !0),
            q.tags.length > 0 ? (n(), i("div", dg, [
              (n(!0), i(W, null, ye(q.tags.slice(0, 5), (ue) => (n(), i("span", {
                key: ue,
                class: "tag"
              }, m(ue), 1))), 128))
            ])) : y("", !0)
          ], 8, ng))), 128))
        ])) : d.value ? (n(), i("div", mg, " No repositories found ")) : (n(), i("div", fg, " Enter a HuggingFace URL, repo ID (user/repo), or search term "))
      ])) : (n(), L(Up, {
        key: 2,
        "repo-id": v.value,
        revision: f.value,
        "initial-path": p.value,
        "preselected-file": w.value,
        mode: e.modeKind,
        "action-label": e.actionLabel,
        onBack: E,
        onQueue: D[3] || (D[3] = (q) => V.$emit("queue", q)),
        onSelectSource: D[4] || (D[4] = (q) => V.$emit("selectSource", q))
      }, null, 8, ["repo-id", "revision", "initial-path", "preselected-file", "mode", "action-label"])),
      g.value ? (n(), L(Jp, {
        key: 3,
        provider: "huggingface",
        "current-token-mask": _.value,
        "overlay-z-index": e.overlayZIndex + 2,
        onClose: D[5] || (D[5] = (q) => g.value = !1),
        onSaved: N,
        onCleared: F
      }, null, 8, ["current-token-mask", "overlay-z-index"])) : y("", !0)
    ]));
  }
}), tc = /* @__PURE__ */ Ie(vg, [["__scopeId", "data-v-eccbf32d"]]), pg = { class: "candidate-card" }, gg = { class: "candidate-main" }, hg = { class: "candidate-url" }, yg = { class: "candidate-meta" }, wg = { class: "meta-chip" }, _g = {
  key: 0,
  class: "meta-chip"
}, kg = ["aria-expanded"], bg = {
  key: 1,
  class: "meta-chip"
}, $g = { class: "match-popover-reasons" }, Cg = { class: "candidate-footer" }, xg = {
  key: 0,
  class: "candidate-context"
}, Sg = { key: 1 }, Ig = /* @__PURE__ */ xe({
  __name: "ModelSourceCandidateCard",
  props: {
    candidate: {},
    actionLabel: { default: "Use as Source" },
    loading: { type: Boolean, default: !1 }
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const o = t, a = k(!1), l = k(null);
    function r() {
      a.value = !1;
    }
    function c(f) {
      var w;
      const p = f.target;
      p instanceof Node && ((w = l.value) != null && w.contains(p) || r());
    }
    function u(f) {
      f.key === "Escape" && r();
    }
    gt(a, (f) => {
      f ? (document.addEventListener("pointerdown", c), document.addEventListener("keydown", u)) : (document.removeEventListener("pointerdown", c), document.removeEventListener("keydown", u));
    }), bn(() => {
      document.removeEventListener("pointerdown", c), document.removeEventListener("keydown", u);
    });
    function d(f) {
      return f === "huggingface" ? "Hugging Face" : f === "civitai" ? "Civitai" : "Direct URL";
    }
    function v(f) {
      return f >= 75 ? "Strong" : f >= 45 ? "Possible" : "Weak";
    }
    return (f, p) => {
      var w, g;
      return n(), i("article", pg, [
        s("div", gg, [
          s("div", hg, m(e.candidate.url), 1),
          s("div", yg, [
            s("span", wg, [
              p[3] || (p[3] = s("span", { class: "chip-label" }, "Provider", -1)),
              s("span", null, m(d(e.candidate.source_type)), 1)
            ]),
            e.candidate.workflow ? (n(), i("span", _g, [
              p[4] || (p[4] = s("span", { class: "chip-label" }, "Workflow", -1)),
              s("span", null, m(e.candidate.workflow), 1)
            ])) : y("", !0),
            e.candidate.confidence ? (n(), i("span", {
              key: 1,
              ref_key: "matchPopoverRoot",
              ref: l,
              class: "match-chip-wrap"
            }, [
              (w = e.candidate.reasons) != null && w.length ? (n(), i("button", {
                key: 0,
                class: "meta-chip meta-chip-button",
                type: "button",
                "aria-expanded": a.value,
                onClick: p[0] || (p[0] = vt((_) => a.value = !a.value, ["stop"]))
              }, [
                p[5] || (p[5] = s("span", { class: "chip-label" }, "Match", -1)),
                s("span", null, m(v(e.candidate.confidence)), 1)
              ], 8, kg)) : (n(), i("span", bg, [
                p[6] || (p[6] = s("span", { class: "chip-label" }, "Match", -1)),
                s("span", null, m(v(e.candidate.confidence)), 1)
              ])),
              a.value && ((g = e.candidate.reasons) != null && g.length) ? (n(), i("div", {
                key: 2,
                class: "match-popover",
                onClick: p[1] || (p[1] = vt(() => {
                }, ["stop"]))
              }, [
                p[7] || (p[7] = s("div", { class: "match-popover-title" }, "Matched by", -1)),
                s("div", $g, [
                  (n(!0), i(W, null, ye(e.candidate.reasons, (_) => (n(), i("span", {
                    key: _,
                    class: "reason-chip"
                  }, m(_), 1))), 128))
                ])
              ])) : y("", !0)
            ], 512)) : y("", !0)
          ]),
          s("div", Cg, [
            e.candidate.context ? (n(), i("details", xg, [
              p[8] || (p[8] = s("summary", null, "Workflow snippet", -1)),
              s("p", null, m(e.candidate.context), 1)
            ])) : (n(), i("div", Sg)),
            $(Ue, {
              variant: "primary",
              size: "sm",
              loading: e.loading,
              onClick: p[2] || (p[2] = (_) => o("select", e.candidate.url))
            }, {
              default: h(() => [
                x(m(e.actionLabel), 1)
              ]),
              _: 1
            }, 8, ["loading"])
          ])
        ])
      ]);
    };
  }
}), sc = /* @__PURE__ */ Ie(Ig, [["__scopeId", "data-v-329b9068"]]), Eg = { class: "source-url-form" }, Tg = { class: "input-group" }, Mg = { key: 0 }, Pg = {
  key: 1,
  class: "description"
}, Rg = { class: "actions" }, Lg = /* @__PURE__ */ xe({
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
    const o = e, a = t, l = R(() => o.modelValue.trim()), r = R(() => {
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
    }), c = R(() => !!l.value && !r.value && !o.disabled);
    function u() {
      c.value && a("submit", l.value);
    }
    return (d, v) => (n(), i("div", Eg, [
      s("div", Tg, [
        e.label ? (n(), i("label", Mg, m(e.label), 1)) : y("", !0),
        $(bt, {
          "model-value": e.modelValue,
          placeholder: e.placeholder,
          error: r.value || void 0,
          "full-width": "",
          "onUpdate:modelValue": v[0] || (v[0] = (f) => a("update:modelValue", f)),
          onEnter: u
        }, null, 8, ["model-value", "placeholder", "error"]),
        e.description ? (n(), i("p", Pg, m(e.description), 1)) : y("", !0)
      ]),
      at(d.$slots, "default", {}, void 0),
      s("div", Rg, [
        $(Ue, {
          variant: "primary",
          disabled: !c.value,
          loading: e.loading,
          onClick: u
        }, {
          default: h(() => [
            x(m(e.actionLabel), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ])
    ]));
  }
}), oc = /* @__PURE__ */ Ie(Lg, [["__scopeId", "data-v-e2610d45"]]), Dg = { class: "source-picker" }, Ng = {
  key: 0,
  class: "model-summary"
}, Ug = { class: "model-heading" }, Og = { class: "summary-name" }, Ag = { class: "summary-meta" }, zg = {
  key: 0,
  class: "hash-row"
}, Fg = { class: "hash-value" }, Vg = {
  key: 1,
  class: "hash-row"
}, Bg = { class: "hash-value" }, Wg = {
  key: 2,
  class: "hash-row"
}, Gg = { class: "hash-value" }, jg = {
  key: 4,
  class: "hash-error"
}, Hg = { class: "tab-bar" }, qg = ["onClick"], Kg = {
  key: 1,
  class: "tab-content"
}, Jg = { class: "section-header-row" }, Qg = {
  key: 0,
  class: "state-message"
}, Yg = {
  key: 1,
  class: "error-message"
}, Xg = {
  key: 2,
  class: "candidate-list"
}, Zg = {
  key: 3,
  class: "state-message"
}, eh = {
  key: 2,
  class: "tab-content source-browser-content"
}, th = {
  key: 3,
  class: "tab-content"
}, sh = { class: "section-header-row" }, oh = /* @__PURE__ */ xe({
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
    const o = e, a = t, { getModelSourceCandidates: l, computeModelHashes: r } = ct(), c = [
      { id: "workflow", label: "Workflow Links" },
      { id: "huggingface", label: "Hugging Face" },
      { id: "direct", label: "Direct URL" }
    ], u = k("workflow"), d = k([]), v = k(!1), f = k(null), p = k(""), w = k(!1), g = k(null), _ = R(() => d.value.filter((I) => I.source === "workflow")), b = R(() => !!(o.model.hash && (!o.model.blake3 || !o.model.sha256)));
    async function S() {
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
    async function C() {
      if (o.model.hash) {
        w.value = !0, g.value = null;
        try {
          const I = await r(o.model.hash);
          a("hashesComputed", I);
        } catch (I) {
          g.value = I instanceof Error ? I.message : "Failed to compute hashes";
        } finally {
          w.value = !1;
        }
      }
    }
    return lt(S), (I, E) => (n(), i("div", Dg, [
      e.showModelSummary ? (n(), i("div", Ng, [
        s("div", Ug, [
          E[4] || (E[4] = s("div", { class: "summary-label" }, "Local model", -1)),
          s("div", Og, m(e.model.filename), 1)
        ]),
        s("div", Ag, [
          e.model.hash ? (n(), i("div", zg, [
            E[5] || (E[5] = s("span", { class: "hash-label" }, "quick hash", -1)),
            s("span", Fg, m(e.model.hash), 1)
          ])) : y("", !0),
          e.model.blake3 ? (n(), i("div", Vg, [
            E[6] || (E[6] = s("span", { class: "hash-label" }, "blake3", -1)),
            s("span", Bg, m(e.model.blake3), 1)
          ])) : y("", !0),
          e.model.sha256 ? (n(), i("div", Wg, [
            E[7] || (E[7] = s("span", { class: "hash-label" }, "sha256", -1)),
            s("span", Gg, m(e.model.sha256), 1)
          ])) : y("", !0),
          b.value ? (n(), L(Ue, {
            key: 3,
            class: "compute-hashes-btn",
            variant: "secondary",
            size: "sm",
            loading: w.value,
            onClick: C
          }, {
            default: h(() => [...E[8] || (E[8] = [
              x(" Compute full hashes ", -1)
            ])]),
            _: 1
          }, 8, ["loading"])) : y("", !0),
          g.value ? (n(), i("p", jg, m(g.value), 1)) : y("", !0)
        ])
      ])) : y("", !0),
      s("div", Hg, [
        (n(), i(W, null, ye(c, (M) => s("button", {
          key: M.id,
          class: Be(["tab-btn", { active: u.value === M.id }]),
          onClick: (N) => u.value = M.id
        }, m(M.label), 11, qg)), 64))
      ]),
      u.value === "workflow" ? (n(), i("section", Kg, [
        s("div", Jg, [
          E[10] || (E[10] = s("div", null, [
            s("h4", null, "Workflow Links"),
            s("p", null, "Candidate model links found in saved workflow notes or metadata.")
          ], -1)),
          $(Ue, {
            variant: "secondary",
            size: "sm",
            loading: v.value,
            onClick: S
          }, {
            default: h(() => [...E[9] || (E[9] = [
              x(" Scan ", -1)
            ])]),
            _: 1
          }, 8, ["loading"])
        ]),
        v.value ? (n(), i("div", Qg, "Scanning workflows...")) : f.value ? (n(), i("div", Yg, m(f.value), 1)) : _.value.length ? (n(), i("div", Xg, [
          (n(!0), i(W, null, ye(_.value, (M) => (n(), L(sc, {
            key: `${M.workflow}:${M.url}`,
            candidate: M,
            "action-label": e.actionLabel,
            loading: e.loadingUrl === M.url,
            onSelect: E[0] || (E[0] = (N) => a("selectSource", N))
          }, null, 8, ["candidate", "action-label", "loading"]))), 128))
        ])) : (n(), i("div", Zg, " No likely workflow links found. Try direct URL for now. "))
      ])) : u.value === "huggingface" ? (n(), i("section", eh, [
        $(tc, {
          "mode-kind": "source",
          "action-label": e.actionLabel,
          "overlay-z-index": e.overlayZIndex,
          onSelectSource: E[1] || (E[1] = (M) => a("selectSource", M))
        }, null, 8, ["action-label", "overlay-z-index"])
      ])) : u.value === "direct" ? (n(), i("section", th, [
        s("div", sh, [
          s("div", null, [
            E[11] || (E[11] = s("h4", null, "Direct URL", -1)),
            s("p", null, m(e.directDescription), 1)
          ])
        ]),
        $(oc, {
          modelValue: p.value,
          "onUpdate:modelValue": E[2] || (E[2] = (M) => p.value = M),
          label: "",
          placeholder: e.directPlaceholder,
          "action-label": e.actionLabel,
          loading: e.loadingUrl === p.value.trim(),
          onSubmit: E[3] || (E[3] = (M) => a("selectSource", M))
        }, null, 8, ["modelValue", "placeholder", "action-label", "loading"])
      ])) : y("", !0)
    ]));
  }
}), nh = /* @__PURE__ */ Ie(oh, [["__scopeId", "data-v-e9633660"]]), ah = {
  key: 0,
  class: "error-message"
}, lh = /* @__PURE__ */ xe({
  __name: "ModelSourceModal",
  props: {
    model: {},
    overlayZIndex: { default: 10011 }
  },
  emits: ["close", "saved", "hashesComputed"],
  setup(e, { emit: t }) {
    const o = e, a = t, { addModelSource: l } = ct(), r = k(o.model), c = k(null), u = k(null);
    gt(() => o.model, (f) => {
      r.value = f;
    });
    async function d(f) {
      if (!(!f || !o.model.hash)) {
        c.value = f, u.value = null;
        try {
          await l(o.model.hash, f), a("saved"), a("close");
        } catch (p) {
          u.value = p instanceof Error ? p.message : "Failed to save source";
        } finally {
          c.value = null;
        }
      }
    }
    function v(f) {
      r.value = f, a("hashesComputed");
    }
    return (f, p) => (n(), L($t, {
      title: `Find Source: ${e.model.filename}`,
      size: "lg",
      "fixed-height": "",
      "overlay-z-index": e.overlayZIndex,
      onClose: p[1] || (p[1] = (w) => a("close"))
    }, {
      body: h(() => [
        $(nh, {
          model: r.value,
          "loading-url": c.value,
          "overlay-z-index": e.overlayZIndex,
          "action-label": "Use as Source",
          onSelectSource: d,
          onHashesComputed: v
        }, null, 8, ["model", "loading-url", "overlay-z-index"]),
        u.value ? (n(), i("p", ah, m(u.value), 1)) : y("", !0)
      ]),
      footer: h(() => [
        $(Ue, {
          variant: "secondary",
          onClick: p[0] || (p[0] = (w) => a("close"))
        }, {
          default: h(() => [...p[2] || (p[2] = [
            x(" Close ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title", "overlay-z-index"]));
  }
}), nc = /* @__PURE__ */ Ie(lh, [["__scopeId", "data-v-62104cdb"]]), ih = { class: "readiness-body" }, rh = {
  key: 0,
  class: "issue-section"
}, ch = { class: "section-heading" }, uh = { class: "issue-list" }, dh = { class: "issue-main" }, mh = { class: "issue-name" }, fh = { class: "issue-meta" }, vh = { key: 0 }, ph = { key: 1 }, gh = ["disabled", "onClick"], hh = {
  key: 1,
  class: "issue-note"
}, yh = {
  key: 1,
  class: "issue-section"
}, wh = { class: "section-heading" }, _h = { class: "issue-list" }, kh = { class: "issue-main" }, bh = { class: "issue-name" }, $h = { class: "issue-meta" }, Ch = { class: "issue-reason" }, xh = ["disabled", "onClick"], Sh = {
  key: 1,
  class: "issue-note"
}, Ih = {
  key: 2,
  class: "empty-state"
}, Eh = {
  key: 3,
  class: "error-message"
}, Th = /* @__PURE__ */ xe({
  __name: "ReadinessIssuesModal",
  props: {
    warnings: {}
  },
  emits: ["close", "revalidate"],
  setup(e, { emit: t }) {
    const o = e, a = t, { getModelDetails: l, updateNodeCriticality: r } = ct(), c = k(null), u = k(null), d = k(null), v = k(null), f = R(() => o.warnings.models_without_sources), p = R(() => o.warnings.nodes_without_provenance);
    async function w(S) {
      u.value = S, v.value = null;
      try {
        c.value = await l(S);
      } catch (C) {
        v.value = C instanceof Error ? C.message : `Failed to load ${S}`;
      } finally {
        u.value = null;
      }
    }
    async function g(S) {
      d.value = S, v.value = null;
      try {
        const C = await r(S, "optional");
        if (C.status !== "success") {
          v.value = C.message || `Failed to update ${S}`;
          return;
        }
        a("revalidate");
      } catch (C) {
        v.value = C instanceof Error ? C.message : `Failed to update ${S}`;
      } finally {
        d.value = null;
      }
    }
    function _() {
      c.value = null, a("revalidate");
    }
    function b() {
      a("revalidate");
    }
    return (S, C) => (n(), i(W, null, [
      $($t, {
        size: "lg",
        "overlay-z-index": 10007,
        onClose: C[1] || (C[1] = (I) => a("close"))
      }, {
        header: h(() => [...C[3] || (C[3] = [
          s("div", { class: "readiness-heading" }, [
            s("h3", { class: "readiness-title" }, "Review Reproducibility Issues"),
            s("p", { class: "readiness-subtitle" }, " Add missing source details where possible. Required development nodes can also be marked optional when they should stay local but not be part of portable builds. ")
          ], -1)
        ])]),
        body: h(() => [
          s("div", ih, [
            f.value.length ? (n(), i("section", rh, [
              s("div", ch, [
                C[4] || (C[4] = s("h4", null, "Models Missing Source URLs", -1)),
                s("span", null, m(f.value.length), 1)
              ]),
              s("div", uh, [
                (n(!0), i(W, null, ye(f.value, (I) => (n(), i("article", {
                  key: I.hash || I.filename,
                  class: "issue-item"
                }, [
                  s("div", dh, [
                    s("div", mh, m(I.filename), 1),
                    s("div", fh, [
                      I.hash ? (n(), i("span", vh, "hash " + m(I.hash), 1)) : y("", !0),
                      I.workflows.length ? (n(), i("span", ph, "used by " + m(I.workflows.join(", ")), 1)) : y("", !0),
                      s("span", null, m(I.criticality || "required"), 1)
                    ])
                  ]),
                  I.hash ? (n(), i("button", {
                    key: 0,
                    class: "issue-action",
                    disabled: u.value === I.hash,
                    onClick: (E) => w(I.hash)
                  }, m(u.value === I.hash ? "Loading..." : "Add Source"), 9, gh)) : (n(), i("span", hh, "Missing hash"))
                ]))), 128))
              ])
            ])) : y("", !0),
            p.value.length ? (n(), i("section", yh, [
              s("div", wh, [
                C[5] || (C[5] = s("h4", null, "Custom Nodes Missing Portable Provenance", -1)),
                s("span", null, m(p.value.length), 1)
              ]),
              s("div", _h, [
                (n(!0), i(W, null, ye(p.value, (I) => (n(), i("article", {
                  key: I.name,
                  class: "issue-item"
                }, [
                  s("div", kh, [
                    s("div", bh, m(I.name), 1),
                    s("div", $h, [
                      s("span", null, m(I.source), 1),
                      s("span", null, m(I.criticality), 1)
                    ]),
                    s("p", Ch, m(I.reason), 1)
                  ]),
                  I.criticality === "required" ? (n(), i("button", {
                    key: 0,
                    class: "issue-action",
                    disabled: d.value === I.name,
                    onClick: (E) => g(I.name)
                  }, m(d.value === I.name ? "Saving..." : "Mark Optional"), 9, xh)) : (n(), i("span", Sh, "Optional warning"))
                ]))), 128))
              ])
            ])) : y("", !0),
            !f.value.length && !p.value.length ? (n(), i("div", Ih, " No reproducibility issues remain. ")) : y("", !0),
            v.value ? (n(), i("div", Eh, m(v.value), 1)) : y("", !0)
          ])
        ]),
        footer: h(() => [
          s("button", {
            class: "primary-action",
            onClick: C[0] || (C[0] = (I) => a("close"))
          }, " Done ")
        ]),
        _: 1
      }),
      c.value ? (n(), L(nc, {
        key: 0,
        model: c.value,
        "overlay-z-index": 10008,
        onClose: C[2] || (C[2] = (I) => c.value = null),
        onSaved: _,
        onHashesComputed: b
      }, null, 8, ["model"])) : y("", !0)
    ], 64));
  }
}), Sl = /* @__PURE__ */ Ie(Th, [["__scopeId", "data-v-03f88a10"]]), Mh = { class: "health-section-header" }, Ph = { class: "suggestions-content" }, Rh = { class: "suggestions-text" }, Lh = { style: { "margin-top": "var(--cg-space-3)" } }, Dh = {
  key: 1,
  class: "no-issues-text"
}, Nh = {
  key: 2,
  class: "no-issues-text"
}, Uh = /* @__PURE__ */ xe({
  __name: "StatusSection",
  props: {
    status: {},
    setupState: { default: "managed" }
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes", "repair-missing-models", "repair-environment", "start-setup", "view-environments", "create-environment"],
  setup(e, { expose: t, emit: o }) {
    const a = e, l = k(!1), r = k(!1), c = k(!1), u = k(null), d = k(null), v = k(!1), { validateExport: f } = ct();
    function p() {
      l.value = !0;
    }
    function w() {
      l.value = !1, _("view-workflows");
    }
    function g() {
      l.value = !1, _("view-nodes");
    }
    const _ = o, b = k(!1), S = k(!1);
    function C() {
      S.value = !0, _("repair-environment");
    }
    function I() {
      S.value = !1;
    }
    function E() {
      l.value = !1;
    }
    const M = R(() => {
      const X = a.status.workflows.analyzed || [], G = X.filter(
        (fe) => fe.unresolved_models_count > 0 || fe.ambiguous_models_count > 0
      );
      return G.length === 0 && a.status.missing_models_count > 0 ? X.filter((fe) => fe.sync_state === "synced") : G;
    });
    function N() {
      const X = M.value;
      X.length !== 0 && (b.value = !0, _("repair-missing-models", X.map((G) => G.name)));
    }
    function F() {
      b.value = !1;
    }
    t({ resetRepairingState: F, resetRepairingEnvironmentState: I, closeDetailModal: E });
    const V = R(() => a.status.workflows.new.length > 0 || a.status.workflows.modified.length > 0 || a.status.workflows.deleted.length > 0), D = R(() => a.status.has_changes), q = R(() => {
      const X = a.status.git_changes;
      return X.nodes_added.length > 0 || X.nodes_removed.length > 0 || X.workflow_changes;
    }), ue = R(() => a.status.has_changes || V.value), le = R(() => {
      var X;
      return ((X = u.value) == null ? void 0 : X.warnings) || {
        models_without_sources: [],
        nodes_without_provenance: []
      };
    }), Y = R(
      () => le.value.models_without_sources.length
    ), me = R(
      () => le.value.nodes_without_provenance.length
    ), ne = R(
      () => Y.value + me.value
    ), B = R(
      () => ne.value > 0
    ), H = R(() => {
      const X = [];
      if (Y.value > 0 && X.push(`${Y.value} model${Y.value === 1 ? "" : "s"} missing download source`), me.value > 0) {
        const G = le.value.nodes_without_provenance.filter((he) => he.criticality === "optional").length, fe = me.value - G;
        fe > 0 && X.push(`${fe} required node${fe === 1 ? "" : "s"} missing portable source`), G > 0 && X.push(`${G} optional node${G === 1 ? "" : "s"} missing portable source`);
      }
      return X;
    });
    async function we() {
      v.value = !0, d.value = null;
      try {
        u.value = await f();
      } catch (X) {
        d.value = X instanceof Error ? X.message : "Failed to check readiness";
      } finally {
        v.value = !1;
      }
    }
    async function oe() {
      await we();
    }
    gt(
      () => [
        a.setupState,
        a.status.has_changes,
        a.status.workflows.new.length,
        a.status.workflows.modified.length,
        a.status.workflows.deleted.length,
        a.status.missing_models_count,
        a.status.comparison.is_synced,
        a.status.has_legacy_manager
      ],
      () => {
        a.setupState === "managed" && we();
      },
      { immediate: !0 }
    );
    const de = R(() => Object.keys(a.status.git_changes.workflow_changes_detail).length), ce = R(() => a.status.git_changes.has_other_changes), K = R(() => {
      var X;
      return ((X = a.status.workflows.analyzed) == null ? void 0 : X.filter((G) => G.status === "broken")) || [];
    }), ee = R(() => {
      var X;
      return ((X = a.status.workflows.analyzed) == null ? void 0 : X.filter(
        (G) => G.has_path_sync_issues && !G.has_issues
      )) || [];
    }), te = R(() => K.value.length > 0);
    function Me(X) {
      const G = [
        />=\s*v?(\d+(?:\.\d+){1,3})/i,
        /requires\s+comfyui\s*v?(\d+(?:\.\d+){1,3})/i,
        /comfyui\s*v?(\d+(?:\.\d+){1,3})\+/i
      ];
      for (const fe of G) {
        const he = X.match(fe);
        if (he != null && he[1])
          return he[1];
      }
      return null;
    }
    function Se(X) {
      const G = X.map(Me).filter((fe) => !!fe);
      return [...new Set(G)];
    }
    function ze(X) {
      if (X.length === 0) return "";
      if (X.length === 1) return ` (>= ${X[0]})`;
      const G = X.slice(0, 2).map((he) => `>= ${he}`).join(", "), fe = X.length > 2;
      return ` (${G}${fe ? ", ..." : ""})`;
    }
    function Ne(X) {
      return X.replace(/uninstallable node mappings?/gi, (G) => G.toLowerCase().endsWith("s") ? "community packages" : "community package").replace(/no installable package versions?/gi, "need community packages").replace(/\bare uninstallable\b/gi, "need community packages").replace(/\buninstallable\b/gi, "community-mapped");
    }
    function be(X) {
      const G = Ne(X.issue_summary || "Has issues"), fe = /(?:>=|v?\d+\.\d+)/i.test(G), he = Se(X.version_gated_guidance || []);
      return (X.nodes_version_gated_count || 0) > 0 && he.length > 0 && !fe ? `${X.name} — ${G} (needs ComfyUI ${he.map((je) => `>= ${je}`).join(", ")})` : `${X.name} — ${G}`;
    }
    const Ae = R(() => K.value.reduce(
      (X, G) => X + (G.nodes_version_gated_count || 0),
      0
    )), ge = R(() => {
      const X = K.value.flatMap(
        (G) => Se(G.version_gated_guidance || [])
      );
      return [...new Set(X)];
    }), ve = R(() => K.value.reduce(
      (X, G) => X + (G.nodes_uninstallable_count || 0),
      0
    )), T = R(() => {
      const X = [];
      return Ae.value > 0 && X.push(
        `${Ae.value} require newer ComfyUI${ze(ge.value)}`
      ), ve.value > 0 && X.push(`${ve.value} need community packages`), X.length > 0 ? `These workflows have missing, blocked, or actionable dependencies (${X.join(", ")}) that must be resolved before they can run.` : "These workflows have missing dependencies that must be resolved before they can run.";
    }), A = R(() => te.value || ee.value.length > 0 || a.status.missing_models_count > 0 || !a.status.comparison.is_synced || a.status.has_legacy_manager), ae = R(() => A.value || B.value || !!d.value), Ce = R(() => {
      const X = [];
      return a.status.workflows.new.length > 0 && X.push(`${a.status.workflows.new.length} new`), a.status.workflows.modified.length > 0 && X.push(`${a.status.workflows.modified.length} modified`), a.status.workflows.deleted.length > 0 && X.push(`${a.status.workflows.deleted.length} deleted`), X.length > 0 ? `${X.join(", ")} workflow${X.length === 1 && !X[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), Ee = R(() => {
      var fe, he;
      const X = [], G = a.status.comparison;
      return (fe = G.missing_nodes) != null && fe.length && X.push(`${G.missing_nodes.length} missing node${G.missing_nodes.length === 1 ? "" : "s"}`), (he = G.extra_nodes) != null && he.length && X.push(`${G.extra_nodes.length} untracked node${G.extra_nodes.length === 1 ? "" : "s"}`), X.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${X.join(" and ")}.`;
    }), ke = R(() => {
      var fe, he;
      const X = [], G = a.status.comparison;
      return (fe = G.extra_nodes) != null && fe.length && (G.extra_nodes.slice(0, 3).forEach((je) => {
        X.push(`Untracked: ${je}`);
      }), G.extra_nodes.length > 3 && X.push(`...and ${G.extra_nodes.length - 3} more untracked`)), (he = G.missing_nodes) != null && he.length && (G.missing_nodes.slice(0, 3).forEach((je) => {
        X.push(`Missing: ${je}`);
      }), G.missing_nodes.length > 3 && X.push(`...and ${G.missing_nodes.length - 3} more missing`)), X;
    });
    return (X, G) => (n(), i(W, null, [
      $(zt, null, {
        header: h(() => [
          $(Ft, { title: "STATUS" })
        ]),
        content: h(() => [
          a.setupState === "no_workspace" ? (n(), L(ts, {
            key: 0,
            severity: "info",
            icon: "🚀",
            title: "No ComfyGit workspace detected",
            description: "Set up a workspace to manage your ComfyUI environments, workflows, and models with version control."
          }, {
            actions: h(() => [
              $(Re, {
                variant: "primary",
                size: "sm",
                onClick: G[0] || (G[0] = (fe) => X.$emit("start-setup"))
              }, {
                default: h(() => [...G[15] || (G[15] = [
                  x(" Start Setup ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : a.setupState === "unmanaged" ? (n(), L(ts, {
            key: 1,
            severity: "warning",
            icon: "⚠",
            title: "Not in a managed environment",
            description: "You're running from an unmanaged ComfyUI installation. Switch to a managed environment to use ComfyGit features."
          }, {
            actions: h(() => [
              $(Re, {
                variant: "primary",
                size: "sm",
                onClick: G[1] || (G[1] = (fe) => X.$emit("view-environments"))
              }, {
                default: h(() => [...G[16] || (G[16] = [
                  x(" View Environments ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : a.setupState === "empty_workspace" ? (n(), L(ts, {
            key: 2,
            severity: "info",
            icon: "🏗",
            title: "Workspace ready - create your first environment",
            description: "Your workspace is set up. Create a managed environment to start using ComfyGit."
          }, {
            actions: h(() => [
              $(Re, {
                variant: "primary",
                size: "sm",
                onClick: G[2] || (G[2] = (fe) => X.$emit("create-environment"))
              }, {
                default: h(() => [...G[17] || (G[17] = [
                  x(" Create Environment ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : y("", !0),
          s("div", {
            class: "health-section-wrapper",
            onMouseenter: G[4] || (G[4] = (fe) => r.value = !0),
            onMouseleave: G[5] || (G[5] = (fe) => r.value = !1)
          }, [
            s("div", Mh, [
              $(is, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: h(() => [...G[18] || (G[18] = [
                  x(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              $(Dd, { name: "fade" }, {
                default: h(() => [
                  r.value ? (n(), L(Re, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: p
                  }, {
                    default: h(() => [...G[19] || (G[19] = [
                      x(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : y("", !0)
                ]),
                _: 1
              })
            ]),
            $(Gm, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, Zt({
              left: h(() => [
                e.status.workflows.new.length ? (n(), L(_s, {
                  key: 0,
                  icon: "●",
                  count: e.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : y("", !0),
                e.status.workflows.modified.length ? (n(), L(_s, {
                  key: 1,
                  icon: "●",
                  count: e.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : y("", !0),
                e.status.workflows.deleted.length ? (n(), L(_s, {
                  key: 2,
                  icon: "●",
                  count: e.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : y("", !0),
                $(_s, {
                  icon: "✓",
                  count: e.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: V.value
                }, null, 8, ["count", "separator"])
              ]),
              right: h(() => [
                e.status.git_changes.nodes_added.length ? (n(), L(_s, {
                  key: 0,
                  icon: "●",
                  count: e.status.git_changes.nodes_added.length,
                  label: e.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : y("", !0),
                e.status.git_changes.nodes_removed.length ? (n(), L(_s, {
                  key: 1,
                  icon: "●",
                  count: e.status.git_changes.nodes_removed.length,
                  label: e.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : y("", !0),
                e.status.git_changes.workflow_changes ? (n(), L(_s, {
                  key: 2,
                  icon: "●",
                  count: de.value,
                  label: de.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : y("", !0),
                ce.value ? (n(), L(_s, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : y("", !0),
                D.value && !q.value && !ce.value ? (n(), L(_s, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : y("", !0),
                D.value ? y("", !0) : (n(), L(_s, {
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
                  s("div", Ph, [
                    s("span", Rh, m(Ce.value), 1),
                    $(Re, {
                      variant: "primary",
                      size: "sm",
                      onClick: G[3] || (G[3] = (fe) => X.$emit("commit-changes"))
                    }, {
                      default: h(() => [...G[20] || (G[20] = [
                        x(" Commit ", -1)
                      ])]),
                      _: 1
                    })
                  ])
                ]),
                key: "0"
              } : void 0
            ]), 1024)
          ], 32),
          e.status.is_detached_head ? (n(), L(ts, {
            key: 3,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: h(() => [
              $(Re, {
                variant: "primary",
                size: "sm",
                onClick: G[6] || (G[6] = (fe) => X.$emit("create-branch"))
              }, {
                default: h(() => [...G[22] || (G[22] = [
                  x(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : y("", !0),
          s("div", Lh, [
            $(is, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: h(() => [...G[23] || (G[23] = [
                x(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            ae.value ? (n(), i(W, { key: 0 }, [
              K.value.length > 0 ? (n(), L(ts, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${K.value.length} workflow${K.value.length === 1 ? "" : "s"} can't run`,
                description: T.value,
                items: K.value.map(be)
              }, {
                actions: h(() => [
                  $(Re, {
                    variant: "primary",
                    size: "sm",
                    onClick: G[7] || (G[7] = (fe) => X.$emit("view-workflows"))
                  }, {
                    default: h(() => [...G[24] || (G[24] = [
                      x(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "description", "items"])) : y("", !0),
              ee.value.length > 0 ? (n(), L(ts, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${ee.value.length} workflow${ee.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: ee.value.map((fe) => `${fe.name} — ${fe.models_needing_path_sync_count} model path${fe.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: h(() => [
                  $(Re, {
                    variant: "primary",
                    size: "sm",
                    onClick: G[8] || (G[8] = (fe) => X.$emit("view-workflows"))
                  }, {
                    default: h(() => [...G[25] || (G[25] = [
                      x(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : y("", !0),
              e.status.missing_models_count > 0 && !te.value ? (n(), L(ts, {
                key: 2,
                severity: "warning",
                icon: "⚠",
                title: `${e.status.missing_models_count} missing model${e.status.missing_models_count === 1 ? "" : "s"}`,
                description: "Some workflows reference models that are not found in the workspace index. This can happen after updating the model index."
              }, {
                actions: h(() => [
                  $(Re, {
                    variant: "primary",
                    size: "sm",
                    disabled: b.value,
                    onClick: N
                  }, {
                    default: h(() => [
                      x(m(b.value ? "Repairing..." : "Repair"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  $(Re, {
                    variant: "secondary",
                    size: "sm",
                    onClick: G[9] || (G[9] = (fe) => X.$emit("view-workflows"))
                  }, {
                    default: h(() => [...G[26] || (G[26] = [
                      x(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : y("", !0),
              e.status.comparison.is_synced ? y("", !0) : (n(), L(ts, {
                key: 3,
                severity: "error",
                icon: "⚠",
                title: "Environment not synced",
                description: Ee.value,
                items: ke.value
              }, {
                actions: h(() => [
                  $(Re, {
                    variant: "secondary",
                    size: "sm",
                    onClick: p
                  }, {
                    default: h(() => [...G[27] || (G[27] = [
                      x(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  $(Re, {
                    variant: "primary",
                    size: "sm",
                    onClick: G[10] || (G[10] = (fe) => X.$emit("view-nodes"))
                  }, {
                    default: h(() => [...G[28] || (G[28] = [
                      x(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["description", "items"])),
              e.status.has_legacy_manager ? (n(), L(ts, {
                key: 4,
                severity: "warning",
                icon: "⚠",
                title: "Legacy ComfyUI-Manager detected",
                description: "The old ComfyUI-Manager extension is installed alongside ComfyGit. For proper environment tracking, use ComfyGit's built-in Manager instead and remove the legacy extension."
              }, {
                actions: h(() => [
                  $(Re, {
                    variant: "primary",
                    size: "sm",
                    onClick: G[11] || (G[11] = (fe) => X.$emit("view-nodes"))
                  }, {
                    default: h(() => [...G[29] || (G[29] = [
                      x(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })) : y("", !0),
              B.value ? (n(), L(ts, {
                key: 5,
                severity: "warning",
                icon: "!",
                title: "Environment reproducibility needs attention",
                description: "Some dependencies are missing source details needed to rebuild this environment elsewhere.",
                items: H.value
              }, {
                actions: h(() => [
                  $(Re, {
                    variant: "primary",
                    size: "sm",
                    onClick: G[12] || (G[12] = (fe) => c.value = !0)
                  }, {
                    default: h(() => [...G[30] || (G[30] = [
                      x(" Review Issues ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["items"])) : d.value ? (n(), L(ts, {
                key: 6,
                severity: "warning",
                icon: "!",
                title: "Environment reproducibility check failed",
                description: d.value
              }, {
                actions: h(() => [
                  $(Re, {
                    variant: "secondary",
                    size: "sm",
                    loading: v.value,
                    onClick: we
                  }, {
                    default: h(() => [...G[31] || (G[31] = [
                      x(" Retry ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"])
                ]),
                _: 1
              }, 8, ["description"])) : y("", !0)
            ], 64)) : ue.value ? (n(), i("span", Dh, "No issues")) : (n(), i("span", Nh, "No runtime issues detected"))
          ])
        ]),
        _: 1
      }),
      $(Uv, {
        show: l.value,
        status: e.status,
        "is-repairing": S.value,
        onClose: G[13] || (G[13] = (fe) => l.value = !1),
        onNavigateWorkflows: w,
        onNavigateNodes: g,
        onRepair: C
      }, null, 8, ["show", "status", "is-repairing"]),
      c.value && u.value ? (n(), L(Sl, {
        key: 0,
        warnings: u.value.warnings,
        onClose: G[14] || (G[14] = (fe) => c.value = !1),
        onRevalidate: oe
      }, null, 8, ["warnings"])) : y("", !0)
    ], 64));
  }
}), Oh = /* @__PURE__ */ Ie(Uh, [["__scopeId", "data-v-f6b165fd"]]);
async function Dn(e, t) {
  const o = await Zs(e, t);
  if (!o.ok) {
    const a = await o.json().catch(() => ({}));
    throw new Error(a.error || a.message || `Request failed: ${o.status}`);
  }
  return o.json();
}
function Ah() {
  async function e() {
    try {
      return await Dn("/v2/comfygit/orchestrator/health");
    } catch {
      return null;
    }
  }
  async function t() {
    try {
      return await Dn("/v2/comfygit/orchestrator/status");
    } catch {
      return null;
    }
  }
  async function o() {
    await Dn("/v2/comfygit/orchestrator/restart", { method: "POST" });
  }
  async function a() {
    await Dn("/v2/comfygit/orchestrator/kill", { method: "POST" });
  }
  return {
    checkHealth: e,
    getStatus: t,
    restart: o,
    kill: a
  };
}
const zh = {
  key: 0,
  class: "base-title-count"
}, Fh = /* @__PURE__ */ xe({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(e) {
    return (t, o) => (n(), L(_l(`h${e.level}`), {
      class: Be(["base-title", e.variant])
    }, {
      default: h(() => [
        at(t.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (n(), i("span", zh, "(" + m(e.count) + ")", 1)) : y("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), mo = /* @__PURE__ */ Ie(Fh, [["__scopeId", "data-v-5a01561d"]]), Vh = ["value", "disabled"], Bh = {
  key: 0,
  value: "",
  disabled: ""
}, Wh = ["value"], Gh = {
  key: 0,
  class: "base-select-error"
}, jh = /* @__PURE__ */ xe({
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
    function t(a) {
      return typeof a == "string" ? a : a.value;
    }
    function o(a) {
      return typeof a == "string" ? a : a.label;
    }
    return (a, l) => (n(), i("div", {
      class: Be(["base-select-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      s("select", {
        value: e.modelValue,
        disabled: e.disabled,
        class: Be(["base-select", { error: !!e.error }]),
        onChange: l[0] || (l[0] = (r) => a.$emit("update:modelValue", r.target.value))
      }, [
        e.placeholder ? (n(), i("option", Bh, m(e.placeholder), 1)) : y("", !0),
        (n(!0), i(W, null, ye(e.options, (r) => (n(), i("option", {
          key: t(r),
          value: t(r)
        }, m(o(r)), 9, Wh))), 128))
      ], 42, Vh),
      e.error ? (n(), i("span", Gh, m(e.error), 1)) : y("", !0)
    ], 2));
  }
}), Wn = /* @__PURE__ */ Ie(jh, [["__scopeId", "data-v-4996bfe0"]]), Hh = { class: "popover-header" }, qh = { class: "popover-title" }, Kh = { class: "popover-content" }, Jh = {
  key: 0,
  class: "popover-actions"
}, Qh = /* @__PURE__ */ xe({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" },
    overlayZIndex: { default: 10004 }
  },
  emits: ["close"],
  setup(e) {
    return (t, o) => (n(), L(Yt, { to: "body" }, [
      e.show ? (n(), i("div", {
        key: 0,
        class: "popover-overlay",
        style: Dt({ zIndex: e.overlayZIndex }),
        onClick: o[2] || (o[2] = (a) => t.$emit("close"))
      }, [
        s("div", {
          class: "popover",
          style: Dt({ maxWidth: e.maxWidth }),
          onClick: o[1] || (o[1] = vt(() => {
          }, ["stop"]))
        }, [
          s("div", Hh, [
            s("h4", qh, m(e.title), 1),
            s("button", {
              class: "popover-close",
              onClick: o[0] || (o[0] = (a) => t.$emit("close"))
            }, "✕")
          ]),
          s("div", Kh, [
            at(t.$slots, "content", {}, void 0)
          ]),
          t.$slots.actions ? (n(), i("div", Jh, [
            at(t.$slots, "actions", {}, void 0)
          ])) : y("", !0)
        ], 4)
      ], 4)) : y("", !0)
    ]));
  }
}), ds = /* @__PURE__ */ Ie(Qh, [["__scopeId", "data-v-7c1f5547"]]), Yh = { class: "detail-section" }, Xh = {
  key: 0,
  class: "empty-message"
}, Zh = { class: "model-header" }, ey = { class: "model-name" }, ty = { class: "model-details" }, sy = { class: "model-row" }, oy = { class: "model-row" }, ny = { class: "label" }, ay = {
  key: 0,
  class: "model-row model-row-nodes"
}, ly = { class: "node-list" }, iy = ["onClick"], ry = {
  key: 1,
  class: "model-row"
}, cy = { class: "value" }, uy = {
  key: 2,
  class: "model-row"
}, dy = { class: "value error" }, my = {
  key: 0,
  class: "model-actions"
}, fy = { class: "detail-section" }, vy = {
  key: 0,
  class: "empty-message"
}, py = { class: "node-content" }, gy = { class: "node-main" }, hy = { class: "node-name" }, yy = { class: "node-badge" }, wy = {
  key: 0,
  class: "node-version"
}, _y = ["onClick"], ky = {
  key: 2,
  class: "node-install-queued"
}, by = {
  key: 0,
  class: "node-guidance"
}, $y = { class: "details-footer" }, Cy = { class: "details-footer-actions" }, xy = /* @__PURE__ */ xe({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(e, { emit: t }) {
    const o = e, a = t, { getWorkflowDetails: l, setModelImportance: r, openFileLocation: c, queueNodeInstall: u } = ct(), d = k(null), v = k(!1), f = k(null), p = k(!1), w = k({}), g = k(!1), _ = k(/* @__PURE__ */ new Set()), b = k(/* @__PURE__ */ new Set()), S = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function C(ne) {
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
    function I(ne) {
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
    function M(ne) {
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
    function F(ne) {
      if (!ne.loaded_by || ne.loaded_by.length === 0) return [];
      const B = ne.hash || ne.filename;
      return _.value.has(B) ? ne.loaded_by : ne.loaded_by.slice(0, 3);
    }
    function V(ne) {
      return _.value.has(ne);
    }
    function D(ne) {
      _.value.has(ne) ? _.value.delete(ne) : _.value.add(ne), _.value = new Set(_.value);
    }
    async function q() {
      v.value = !0, f.value = null;
      try {
        d.value = await l(o.workflowName);
      } catch (ne) {
        f.value = ne instanceof Error ? ne.message : "Failed to load workflow details";
      } finally {
        v.value = !1;
      }
    }
    function ue(ne, B) {
      w.value[ne] = B, p.value = !0;
    }
    async function le(ne) {
      try {
        await c(ne);
      } catch (B) {
        f.value = B instanceof Error ? B.message : "Failed to open file location";
      }
    }
    async function Y(ne) {
      if (ne.package_id)
        try {
          const B = ne.latest_version || "latest";
          await u({
            id: ne.package_id,
            version: B,
            selected_version: B,
            mode: "remote",
            channel: "default"
          }), b.value.add(ne.package_id);
        } catch (B) {
          f.value = B instanceof Error ? B.message : "Failed to queue node install";
        }
    }
    async function me() {
      if (!p.value) {
        a("close");
        return;
      }
      v.value = !0, f.value = null;
      try {
        for (const [ne, B] of Object.entries(w.value))
          await r(o.workflowName, ne, B);
        a("refresh"), a("close");
      } catch (ne) {
        f.value = ne instanceof Error ? ne.message : "Failed to save changes";
      } finally {
        v.value = !1;
      }
    }
    return lt(q), (ne, B) => (n(), i(W, null, [
      $($t, {
        title: `WORKFLOW DETAILS: ${e.workflowName}`,
        size: "lg",
        loading: v.value,
        error: f.value || void 0,
        onClose: B[5] || (B[5] = (H) => a("close"))
      }, {
        body: h(() => [
          d.value ? (n(), i(W, { key: 0 }, [
            s("section", Yh, [
              $(mo, { variant: "section" }, {
                default: h(() => [
                  x("MODELS USED (" + m(d.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              d.value.models.length === 0 ? (n(), i("div", Xh, " No models used in this workflow ")) : y("", !0),
              (n(!0), i(W, null, ye(d.value.models, (H) => {
                var we;
                return n(), i("div", {
                  key: H.hash || H.filename,
                  class: "model-card"
                }, [
                  s("div", Zh, [
                    B[7] || (B[7] = s("span", { class: "model-icon" }, "📦", -1)),
                    s("span", ey, m(H.filename), 1)
                  ]),
                  s("div", ty, [
                    s("div", sy, [
                      B[8] || (B[8] = s("span", { class: "label" }, "Status:", -1)),
                      s("span", {
                        class: Be(["value", C(H.status)])
                      }, m(I(H.status)), 3)
                    ]),
                    s("div", oy, [
                      s("span", ny, [
                        B[9] || (B[9] = x(" Importance: ", -1)),
                        $(Zr, {
                          size: 14,
                          title: "About importance levels",
                          onClick: B[0] || (B[0] = (oe) => g.value = !0)
                        })
                      ]),
                      $(Wn, {
                        "model-value": w.value[H.filename] || H.importance,
                        options: S,
                        "onUpdate:modelValue": (oe) => ue(H.filename, oe)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    H.loaded_by && H.loaded_by.length > 0 ? (n(), i("div", ay, [
                      B[10] || (B[10] = s("span", { class: "label" }, "Loaded by:", -1)),
                      s("div", ly, [
                        (n(!0), i(W, null, ye(F(H), (oe, de) => (n(), i("div", {
                          key: `${oe.node_id}-${de}`,
                          class: "node-reference"
                        }, m(oe.node_type) + " (Node #" + m(oe.node_id) + ") ", 1))), 128)),
                        H.loaded_by.length > 3 ? (n(), i("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (oe) => D(H.hash || H.filename)
                        }, m(V(H.hash || H.filename) ? "▼ Show less" : `▶ View all (${H.loaded_by.length})`), 9, iy)) : y("", !0)
                      ])
                    ])) : y("", !0),
                    H.size_mb ? (n(), i("div", ry, [
                      B[11] || (B[11] = s("span", { class: "label" }, "Size:", -1)),
                      s("span", cy, m(H.size_mb) + " MB", 1)
                    ])) : y("", !0),
                    H.has_category_mismatch ? (n(), i("div", uy, [
                      B[14] || (B[14] = s("span", { class: "label" }, "Location issue:", -1)),
                      s("span", dy, [
                        B[12] || (B[12] = x(" In ", -1)),
                        s("code", null, m(H.actual_category) + "/", 1),
                        B[13] || (B[13] = x(" but loader needs ", -1)),
                        s("code", null, m((we = H.expected_categories) == null ? void 0 : we[0]) + "/", 1)
                      ])
                    ])) : y("", !0)
                  ]),
                  H.status !== "available" ? (n(), i("div", my, [
                    H.status === "downloadable" ? (n(), L(Ue, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: B[1] || (B[1] = (oe) => a("resolve"))
                    }, {
                      default: h(() => [...B[15] || (B[15] = [
                        x(" Download ", -1)
                      ])]),
                      _: 1
                    })) : H.status === "category_mismatch" && H.file_path ? (n(), L(Ue, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (oe) => le(H.file_path)
                    }, {
                      default: h(() => [...B[16] || (B[16] = [
                        x(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : H.status !== "path_mismatch" ? (n(), L(Ue, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: B[2] || (B[2] = (oe) => a("resolve"))
                    }, {
                      default: h(() => [...B[17] || (B[17] = [
                        x(" Resolve ", -1)
                      ])]),
                      _: 1
                    })) : y("", !0)
                  ])) : y("", !0)
                ]);
              }), 128))
            ]),
            s("section", fy, [
              $(mo, { variant: "section" }, {
                default: h(() => [
                  x("NODES USED (" + m(d.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              d.value.nodes.length === 0 ? (n(), i("div", vy, " No custom nodes used in this workflow ")) : y("", !0),
              (n(!0), i(W, null, ye(d.value.nodes, (H, we) => (n(), i("div", {
                key: `${H.name}-${H.status}-${we}`,
                class: "node-item"
              }, [
                s("span", {
                  class: Be(["node-status", E(H.status)])
                }, m(M(H.status)), 3),
                s("div", py, [
                  s("div", gy, [
                    s("span", hy, m(H.name), 1),
                    s("span", yy, m(N(H.status)), 1),
                    H.version ? (n(), i("span", wy, "v" + m(H.version), 1)) : y("", !0),
                    H.status === "uninstallable" && H.package_id && !b.value.has(H.package_id) ? (n(), i("button", {
                      key: 1,
                      class: "node-install-link",
                      onClick: (oe) => Y(H)
                    }, " Install ", 8, _y)) : H.status === "uninstallable" && H.package_id && b.value.has(H.package_id) ? (n(), i("span", ky, " Queued ")) : y("", !0)
                  ]),
                  H.guidance ? (n(), i("div", by, m(H.guidance), 1)) : y("", !0)
                ])
              ]))), 128))
            ])
          ], 64)) : y("", !0)
        ]),
        footer: h(() => [
          s("div", $y, [
            $(Ue, {
              variant: "secondary",
              onClick: B[3] || (B[3] = (H) => a("resolve"))
            }, {
              default: h(() => [...B[18] || (B[18] = [
                x(" Review Resolution ", -1)
              ])]),
              _: 1
            }),
            s("div", Cy, [
              $(Ue, {
                variant: "secondary",
                onClick: B[4] || (B[4] = (H) => a("close"))
              }, {
                default: h(() => [...B[19] || (B[19] = [
                  x(" Close ", -1)
                ])]),
                _: 1
              }),
              p.value ? (n(), L(Ue, {
                key: 0,
                variant: "primary",
                onClick: me
              }, {
                default: h(() => [...B[20] || (B[20] = [
                  x(" Save Changes ", -1)
                ])]),
                _: 1
              })) : y("", !0)
            ])
          ])
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      $(ds, {
        show: g.value,
        title: "Model Importance Levels",
        onClose: B[6] || (B[6] = (H) => g.value = !1)
      }, {
        content: h(() => [...B[21] || (B[21] = [
          s("ul", { class: "importance-info-list" }, [
            s("li", null, [
              s("strong", null, "Required"),
              x(" — Must have for workflow to run")
            ]),
            s("li", null, [
              s("strong", null, "Flexible"),
              x(" — Workflow adapts if missing")
            ]),
            s("li", null, [
              s("strong", null, "Optional"),
              x(" — Nice to have, can be skipped")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Sy = /* @__PURE__ */ Ie(xy, [["__scopeId", "data-v-00cf34e6"]]), rt = go({
  items: [],
  status: "idle"
});
let Cs = null;
function ac() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function Ba(e) {
  return rt.items.find((t) => t.id === e);
}
async function ko() {
  if (rt.status === "downloading") return;
  const e = rt.items.find((t) => t.status === "queued");
  if (!e) {
    rt.status = "idle";
    return;
  }
  rt.status = "downloading", e.status = "downloading", e.progress = 0, e.downloaded = 0;
  try {
    await Iy(e), e.status = "completed", e.progress = 100;
  } catch (t) {
    e.status = "failed", e.error = t instanceof Error ? t.message : "Download failed", e.retries++;
  } finally {
    rt.status = "idle", ko();
  }
}
async function Iy(e) {
  return new Promise((t, o) => {
    Cs && (Cs.close(), Cs = null);
    const a = new URLSearchParams({
      url: e.url,
      target_path: e.targetPath,
      filename: e.filename,
      workflow: e.workflow
    }), l = new EventSource(`/v2/comfygit/models/download-stream?${a}`);
    Cs = l;
    let r = Date.now(), c = 0, u = Date.now(), d = !1;
    const v = 2e3, f = window.setInterval(() => {
      d || Date.now() - u > v && (e.speed = 0, e.eta = 0);
    }, 250), p = () => {
      window.clearInterval(f);
    };
    l.onmessage = (w) => {
      try {
        const g = JSON.parse(w.data);
        switch (g.type) {
          case "progress":
            e.downloaded = g.downloaded || 0, e.size = g.total || e.size, u = Date.now();
            const _ = u, b = (_ - r) / 1e3, S = e.downloaded - c;
            if (S > 0 && b > 0)
              if (e.speed = S / b, r = _, c = e.downloaded, e.speed > 0 && e.size > 0) {
                const C = e.size - e.downloaded;
                e.eta = C / e.speed;
              } else
                e.eta = 0;
            e.size > 0 && (e.progress = Math.round(e.downloaded / e.size * 100));
            break;
          case "complete":
            d = !0, p(), l.close(), Cs = null, t();
            break;
          case "error":
            d = !0, p(), l.close(), Cs = null, o(new Error(g.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, l.onerror = () => {
      p(), l.close(), Cs = null, d || o(new Error("Connection lost"));
    };
  });
}
async function Ey() {
  try {
    const e = await fetch("/v2/comfygit/models/pending-downloads");
    if (!e.ok) return;
    const t = await e.json();
    if (!t.pending_downloads || t.pending_downloads.length === 0) return;
    for (const o of t.pending_downloads) {
      if (rt.items.some((l) => l.url === o.url && l.filename === o.filename))
        continue;
      const a = {
        id: ac(),
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
      rt.items.push(a);
    }
    console.log(`[ComfyGit] Loaded ${t.pending_downloads.length} pending download(s)`);
  } catch (e) {
    console.warn("[ComfyGit] Failed to load pending downloads:", e);
  }
}
function zo() {
  function e(S) {
    for (const C of S) {
      if (rt.items.some(
        (M) => M.url === C.url && M.targetPath === C.targetPath && ["queued", "downloading", "paused", "completed"].includes(M.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${C.filename}`);
        continue;
      }
      const E = {
        id: ac(),
        workflow: C.workflow,
        filename: C.filename,
        url: C.url,
        targetPath: C.targetPath,
        size: C.size || 0,
        type: C.type || "model",
        status: "queued",
        progress: 0,
        downloaded: 0,
        speed: 0,
        eta: 0,
        retries: 0
      };
      rt.items.push(E);
    }
    rt.status === "idle" && ko();
  }
  async function t(S) {
    const C = Ba(S);
    if (C) {
      if (C.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(C.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        Cs && (Cs.close(), Cs = null), C.status = "failed", C.error = "Cancelled by user", rt.status = "idle", ko();
      } else if (C.status === "queued") {
        const I = rt.items.findIndex((E) => E.id === S);
        I >= 0 && rt.items.splice(I, 1);
      }
    }
  }
  function o(S) {
    const C = Ba(S);
    !C || C.status !== "failed" || (C.status = "queued", C.error = void 0, C.progress = 0, C.downloaded = 0, rt.status === "idle" && ko());
  }
  function a(S) {
    const C = Ba(S);
    !C || C.status !== "paused" || (C.status = "queued", rt.status === "idle" && ko());
  }
  function l() {
    const S = rt.items.filter((C) => C.status === "paused");
    for (const C of S)
      C.status = "queued";
    rt.status === "idle" && ko();
  }
  function r(S) {
    const C = rt.items.findIndex((I) => I.id === S);
    C >= 0 && ["completed", "failed", "paused"].includes(rt.items[C].status) && rt.items.splice(C, 1);
  }
  function c() {
    rt.items = rt.items.filter((S) => S.status !== "completed");
  }
  function u() {
    rt.items = rt.items.filter((S) => S.status !== "failed");
  }
  const d = R(
    () => rt.items.find((S) => S.status === "downloading")
  ), v = R(
    () => rt.items.filter((S) => S.status === "queued")
  ), f = R(
    () => rt.items.filter((S) => S.status === "completed")
  ), p = R(
    () => rt.items.filter((S) => S.status === "failed")
  ), w = R(
    () => rt.items.filter((S) => S.status === "paused")
  ), g = R(() => rt.items.length > 0), _ = R(
    () => rt.items.filter((S) => S.status === "queued" || S.status === "downloading").length
  ), b = R(
    () => rt.items.some((S) => S.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: jn(rt),
    // Computed
    currentDownload: d,
    queuedItems: v,
    completedItems: f,
    failedItems: p,
    pausedItems: w,
    hasItems: g,
    activeCount: _,
    hasPaused: b,
    // Actions
    addToQueue: e,
    cancelDownload: t,
    retryDownload: o,
    resumeDownload: a,
    resumeAllPaused: l,
    removeItem: r,
    clearCompleted: c,
    clearFailed: u,
    loadPendingDownloads: Ey
  };
}
function lc() {
  const e = k(null), t = k(null), o = k([]), a = k([]), l = k(!1), r = k(null);
  async function c(I, E) {
    const M = await Zs(I, E);
    if (!M.ok) {
      const N = await M.json().catch(() => ({})), F = N.error || N.message || `Request failed: ${M.status}`;
      throw new Error(F);
    }
    return M.json();
  }
  async function u(I) {
    l.value = !0, r.value = null;
    try {
      let E;
      return jo() || (E = await c(
        `/v2/comfygit/workflow/${I}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), E.nodes.version_gated = E.nodes.version_gated || [], E.nodes.uninstallable = E.nodes.uninstallable || [], E.node_guidance = E.node_guidance || {}, E.package_aliases = E.package_aliases || {}, e.value = E, E;
    } catch (E) {
      const M = E instanceof Error ? E.message : "Unknown error occurred";
      throw r.value = M, E;
    } finally {
      l.value = !1;
    }
  }
  async function d(I, E, M, N) {
    l.value = !0, r.value = null;
    try {
      let F;
      if (!jo()) {
        const V = Object.fromEntries(E), D = Object.fromEntries(M), q = N ? Array.from(N) : [];
        F = await c(
          `/v2/comfygit/workflow/${I}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: V,
              model_choices: D,
              skipped_packages: q
            })
          }
        );
      }
      return t.value = F, F;
    } catch (F) {
      const V = F instanceof Error ? F.message : "Unknown error occurred";
      throw r.value = V, F;
    } finally {
      l.value = !1;
    }
  }
  async function v(I, E = 10) {
    l.value = !0, r.value = null;
    try {
      let M;
      return jo() || (M = await c(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: I, limit: E })
        }
      )), o.value = M.results, M.results;
    } catch (M) {
      const N = M instanceof Error ? M.message : "Unknown error occurred";
      throw r.value = N, M;
    } finally {
      l.value = !1;
    }
  }
  async function f(I, E = 10) {
    l.value = !0, r.value = null;
    try {
      let M;
      return jo() || (M = await c(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: I, limit: E })
        }
      )), a.value = M.results, M.results;
    } catch (M) {
      const N = M instanceof Error ? M.message : "Unknown error occurred";
      throw r.value = N, M;
    } finally {
      l.value = !1;
    }
  }
  const p = go({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: [],
    nodesInstalled: [],
    nodesMarkedOptional: [],
    nodesMapped: []
  });
  function w() {
    p.phase = "idle", p.currentFile = void 0, p.currentFileIndex = void 0, p.totalFiles = void 0, p.bytesDownloaded = void 0, p.bytesTotal = void 0, p.completedFiles = [], p.nodesToInstall = [], p.nodesInstalled = [], p.nodesMarkedOptional = [], p.nodesMapped = [], p.installError = void 0, p.needsRestart = void 0, p.error = void 0, p.nodeInstallProgress = void 0;
  }
  async function g(I) {
    p.phase = "installing", p.nodesInstalled = [], p.installError = void 0, p.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      return jo(), await _(I);
    } catch (E) {
      const M = E instanceof Error ? E.message : "Failed to install nodes";
      throw p.installError = M, E;
    }
  }
  async function _(I) {
    var M;
    const E = await c(
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
      const N = new Map(((M = E.failed) == null ? void 0 : M.map((F) => [F.node_id, F.error])) || []);
      for (let F = 0; F < p.nodesToInstall.length; F++) {
        const V = p.nodesToInstall[F], D = N.get(V);
        p.nodeInstallProgress.completedNodes.push({
          node_id: V,
          success: !D,
          error: D
        });
      }
    }
    return p.nodesInstalled = E.nodes_installed, p.needsRestart = E.nodes_installed.length > 0, E.failed && E.failed.length > 0 && (p.installError = `${E.failed.length} package(s) failed to install`), E;
  }
  async function b(I, E, M) {
    w(), p.phase = "resolving", r.value = null;
    const N = Object.fromEntries(E), F = Object.fromEntries(M);
    try {
      const V = await fetch(`/v2/comfygit/workflow/${I}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: N,
          model_choices: F
        })
      });
      if (!V.ok)
        throw new Error(`Request failed: ${V.status}`);
      if (!V.body)
        throw new Error("No response body");
      const D = V.body.getReader(), q = new TextDecoder();
      let ue = "";
      for (; ; ) {
        const { done: le, value: Y } = await D.read();
        if (le) break;
        ue += q.decode(Y, { stream: !0 });
        const me = ue.split(`

`);
        ue = me.pop() || "";
        for (const ne of me) {
          if (!ne.trim()) continue;
          const B = ne.split(`
`);
          let H = "", we = "";
          for (const oe of B)
            oe.startsWith("event: ") ? H = oe.slice(7) : oe.startsWith("data: ") && (we = oe.slice(6));
          if (we)
            try {
              const oe = JSON.parse(we);
              S(H, oe);
            } catch (oe) {
              console.warn("Failed to parse SSE event:", oe);
            }
        }
      }
    } catch (V) {
      const D = V instanceof Error ? V.message : "Unknown error occurred";
      throw r.value = D, p.error = D, p.phase = "error", V;
    }
  }
  function S(I, E) {
    switch (I) {
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
        p.nodesToInstall = E.nodes_to_install || [], p.nodesMarkedOptional = E.nodes_marked_optional || [], p.nodesMapped = E.nodes_mapped || [], E.download_results && (p.completedFiles = E.download_results), p.phase = "complete";
        break;
      case "error":
        p.error = E.message, p.phase = "error", r.value = E.message;
        break;
    }
  }
  function C(I, E) {
    const { addToQueue: M } = zo(), N = E.filter((F) => F.url && F.target_path).map((F) => ({
      workflow: I,
      filename: F.filename,
      url: F.url,
      targetPath: F.target_path,
      size: F.size || 0,
      type: "model"
    }));
    return N.length > 0 && M(N), N.length;
  }
  return {
    // State
    result: e,
    appliedResult: t,
    searchResults: o,
    modelSearchResults: a,
    isLoading: l,
    error: r,
    progress: p,
    // Methods
    analyzeWorkflow: u,
    applyResolution: d,
    applyResolutionWithProgress: b,
    installNodes: g,
    searchNodes: v,
    searchModels: f,
    resetProgress: w,
    queueModelDownloads: C
  };
}
const Ty = { class: "resolution-stepper" }, My = { class: "stepper-header" }, Py = ["onClick"], Ry = {
  key: 0,
  class: "step-icon"
}, Ly = {
  key: 1,
  class: "step-number"
}, Dy = { class: "step-label" }, Ny = {
  key: 0,
  class: "step-connector"
}, Uy = { class: "stepper-content" }, Oy = /* @__PURE__ */ xe({
  __name: "ResolutionStepper",
  props: {
    steps: {},
    currentStep: {},
    completedSteps: {},
    stepStats: {}
  },
  emits: ["step-change"],
  setup(e, { emit: t }) {
    const o = e, a = t;
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
    function c(v) {
      return l(v) ? "state-complete" : r(v) ? "state-partial" : "state-pending";
    }
    function u(v) {
      return !1;
    }
    function d(v) {
      a("step-change", v);
    }
    return (v, f) => (n(), i("div", Ty, [
      s("div", My, [
        (n(!0), i(W, null, ye(e.steps, (p, w) => (n(), i("div", {
          key: p.id,
          class: Be(["step", {
            active: e.currentStep === p.id,
            completed: l(p.id),
            "in-progress": r(p.id),
            disabled: u(p.id)
          }]),
          onClick: (g) => d(p.id)
        }, [
          s("div", {
            class: Be(["step-indicator", c(p.id)])
          }, [
            l(p.id) ? (n(), i("span", Ry, "✓")) : (n(), i("span", Ly, m(w + 1), 1))
          ], 2),
          s("div", Dy, m(p.label), 1),
          w < e.steps.length - 1 ? (n(), i("div", Ny)) : y("", !0)
        ], 10, Py))), 128))
      ]),
      s("div", Uy, [
        at(v.$slots, "default", {}, void 0)
      ])
    ]));
  }
}), Ay = /* @__PURE__ */ Ie(Oy, [["__scopeId", "data-v-2a7b3af8"]]), zy = { class: "item-body" }, Fy = {
  key: 0,
  class: "resolved-state"
}, Vy = { class: "resolved-message" }, By = {
  key: 1,
  class: "unresolved"
}, Wy = {
  key: 0,
  class: "installed-packs-section"
}, Gy = { class: "installed-packs-list" }, jy = ["onClick"], Hy = { class: "installed-pack-name" }, qy = { class: "installed-pack-source" }, Ky = { class: "action-buttons" }, Jy = /* @__PURE__ */ xe({
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
    choice: {},
    installedNodePacks: {}
  },
  emits: ["mark-optional", "skip", "manual-entry", "search", "clear-choice", "installed-pack-selected"],
  setup(e, { emit: t }) {
    const o = e, a = t, l = R(() => !!o.choice), r = R(() => {
      var f;
      return (f = o.choice) == null ? void 0 : f.action;
    }), c = R(() => {
      var f;
      return (f = o.choice) == null ? void 0 : f.package_id;
    }), u = R(() => o.installedNodePacks || []), d = R(() => {
      var f, p;
      switch (r.value) {
        case "install":
          return ((f = o.choice) == null ? void 0 : f.install_source) === "git" ? c.value ? `Will install ${c.value} from GitHub` : "Will install from GitHub" : ((p = o.choice) == null ? void 0 : p.install_source) === "registry" ? c.value ? `Will install ${c.value} from Registry` : "Will install from Registry" : c.value ? `Will install ${c.value}` : "Will install selected package";
        case "map-installed":
          return c.value ? `Mapped to ${c.value}` : "Mapped to installed node pack";
        case "manual":
          return c.value ? `Will use ${c.value}` : "Will use manual package";
        case "optional":
          return "Marked optional";
        case "skip":
          return "Will be skipped";
        default:
          return "Decision saved";
      }
    });
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
      class: Be(["node-resolution-item", { selected: e.isSelected, ambiguous: e.hasMultipleOptions, resolved: l.value }])
    }, [
      s("div", zy, [
        l.value ? (n(), i("div", Fy, [
          s("span", Vy, m(d.value), 1),
          $(Ue, {
            variant: "ghost",
            size: "sm",
            onClick: p[0] || (p[0] = (w) => a("clear-choice"))
          }, {
            default: h(() => [...p[4] || (p[4] = [
              x(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : (n(), i("div", By, [
          u.value.length > 0 ? (n(), i("div", Wy, [
            p[5] || (p[5] = s("p", { class: "options-prompt" }, "Map to an installed node pack:", -1)),
            s("div", Gy, [
              (n(!0), i(W, null, ye(u.value, (w) => (n(), i("button", {
                key: w.package_id,
                type: "button",
                class: "installed-pack-chip",
                onClick: (g) => a("installed-pack-selected", w.package_id)
              }, [
                s("span", Hy, m(w.package_id), 1),
                s("span", qy, m(v(w.source)), 1)
              ], 8, jy))), 128))
            ])
          ])) : y("", !0),
          s("div", Ky, [
            $(Ue, {
              variant: "secondary",
              size: "sm",
              onClick: p[1] || (p[1] = (w) => a("search"))
            }, {
              default: h(() => [...p[6] || (p[6] = [
                x(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            $(Ue, {
              variant: "secondary",
              size: "sm",
              onClick: p[2] || (p[2] = (w) => a("manual-entry"))
            }, {
              default: h(() => [...p[7] || (p[7] = [
                x(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            $(Ue, {
              variant: "secondary",
              size: "sm",
              onClick: p[3] || (p[3] = (w) => a("mark-optional"))
            }, {
              default: h(() => [...p[8] || (p[8] = [
                x(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), Qy = /* @__PURE__ */ Ie(Jy, [["__scopeId", "data-v-4338b305"]]), Yy = { class: "item-navigator" }, Xy = { class: "nav-item-info" }, Zy = ["title"], e1 = { class: "nav-controls" }, t1 = { class: "nav-arrows" }, s1 = ["disabled"], o1 = ["disabled"], n1 = { class: "nav-position" }, a1 = /* @__PURE__ */ xe({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(e, { emit: t }) {
    const o = t;
    return (a, l) => (n(), i("div", Yy, [
      s("div", Xy, [
        s("code", {
          class: "item-name",
          title: e.itemName
        }, m(e.itemName), 9, Zy)
      ]),
      s("div", e1, [
        s("div", t1, [
          s("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === 0,
            onClick: l[0] || (l[0] = (r) => o("prev")),
            title: "Previous item"
          }, " ← ", 8, s1),
          s("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === e.totalItems - 1,
            onClick: l[1] || (l[1] = (r) => o("next")),
            title: "Next item"
          }, " → ", 8, o1)
        ]),
        s("span", n1, m(e.currentIndex + 1) + "/" + m(e.totalItems), 1)
      ])
    ]));
  }
}), ic = /* @__PURE__ */ Ie(a1, [["__scopeId", "data-v-74af7920"]]), l1 = { class: "node-resolution-step" }, i1 = {
  key: 0,
  class: "auto-resolved-section"
}, r1 = { class: "section-header" }, c1 = { class: "stat-badge" }, u1 = { class: "resolved-packages-list" }, d1 = { class: "package-info" }, m1 = { class: "package-id" }, f1 = { class: "node-count" }, v1 = { class: "package-actions" }, p1 = {
  key: 0,
  class: "status-badge install"
}, g1 = {
  key: 1,
  class: "status-badge skip"
}, h1 = ["onClick"], y1 = {
  key: 1,
  class: "section-divider"
}, w1 = { class: "step-header" }, _1 = { class: "stat-badge" }, k1 = {
  key: 1,
  class: "step-body"
}, b1 = {
  key: 3,
  class: "empty-state"
}, $1 = { class: "node-modal-body" }, C1 = { class: "node-search-results-container" }, x1 = {
  key: 0,
  class: "node-search-results"
}, S1 = { class: "node-result-header" }, I1 = { class: "node-result-title" }, E1 = { class: "node-result-package-id" }, T1 = {
  key: 0,
  class: "node-result-display-name"
}, M1 = {
  key: 0,
  class: "node-result-stats",
  "aria-label": "Package popularity"
}, P1 = {
  key: 0,
  class: "node-result-stat"
}, R1 = {
  key: 1,
  class: "node-result-stat"
}, L1 = {
  key: 0,
  class: "node-result-description"
}, D1 = { class: "node-result-actions" }, N1 = ["onClick"], U1 = ["onClick"], O1 = {
  key: 1,
  class: "node-empty-state"
}, A1 = {
  key: 2,
  class: "node-empty-state"
}, z1 = {
  key: 3,
  class: "node-empty-state"
}, F1 = { class: "node-manual-entry-modal" }, V1 = { class: "node-modal-body" }, B1 = { class: "node-modal-actions" }, W1 = /* @__PURE__ */ xe({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {},
    autoResolvedPackages: {},
    skippedPackages: {},
    installedNodePacks: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "installed-pack-selected", "clear-choice", "package-skip"],
  setup(e, { emit: t }) {
    const o = e, a = t, { searchNodes: l } = lc(), r = k(0), c = k(!1), u = k(!1), d = k(""), v = k(""), f = k([]), p = k(!1), w = k(!1);
    function g() {
      w.value && le(), w.value = !1;
    }
    const _ = R(() => o.nodes[r.value]), b = R(() => o.nodes.filter((K) => o.nodeChoices.has(K.node_type)).length), S = R(() => o.autoResolvedPackages.filter((K) => !o.skippedPackages.has(K.package_id)).length);
    function C(K) {
      return o.skippedPackages.has(K);
    }
    function I(K) {
      a("package-skip", K);
    }
    function E(K) {
      K >= 0 && K < o.nodes.length && (r.value = K);
    }
    function M() {
      var K;
      for (let ee = r.value + 1; ee < o.nodes.length; ee++) {
        const te = o.nodes[ee];
        if (!((K = o.nodeChoices) != null && K.has(te.node_type))) {
          E(ee);
          return;
        }
      }
    }
    function N() {
      _.value && (a("mark-optional", _.value.node_type), Ot(() => M()));
    }
    function F() {
      _.value && (a("skip", _.value.node_type), Ot(() => M()));
    }
    function V() {
      _.value && a("clear-choice", _.value.node_type);
    }
    function D() {
      _.value && (d.value = _.value.node_type, f.value = [], c.value = !0, B(d.value));
    }
    function q() {
      v.value = "", u.value = !0;
    }
    function ue(K) {
      _.value && (a("installed-pack-selected", _.value.node_type, K), Ot(() => M()));
    }
    function le() {
      c.value = !1, d.value = "", f.value = [];
    }
    function Y() {
      u.value = !1, v.value = "";
    }
    let me = null;
    function ne() {
      me && clearTimeout(me), me = setTimeout(() => {
        B(d.value);
      }, 300);
    }
    async function B(K) {
      if (!K.trim()) {
        f.value = [];
        return;
      }
      p.value = !0;
      try {
        f.value = await l(K, 10);
      } catch {
        f.value = [];
      } finally {
        p.value = !1;
      }
    }
    function H(K) {
      _.value && (a("manual-entry", _.value.node_type, K.package_id, {
        install_source: "registry",
        version: K.registry_version || null
      }), le(), Ot(() => M()));
    }
    function we(K) {
      !_.value || !K.repository || (a("manual-entry", _.value.node_type, K.package_id, {
        install_source: "git",
        repository: K.repository
      }), le(), Ot(() => M()));
    }
    function oe(K) {
      return !!K.github_stars || !!K.downloads;
    }
    function de(K) {
      return K ? Intl.NumberFormat("en", {
        notation: "compact",
        maximumFractionDigits: K >= 1e3 ? 1 : 0
      }).format(K) : "";
    }
    function ce() {
      !_.value || !v.value.trim() || (a("manual-entry", _.value.node_type, v.value.trim()), Y(), Ot(() => M()));
    }
    return (K, ee) => {
      var te, Me;
      return n(), i("div", l1, [
        e.autoResolvedPackages.length > 0 ? (n(), i("div", i1, [
          s("div", r1, [
            ee[6] || (ee[6] = s("div", { class: "section-info" }, [
              s("h4", { class: "section-title" }, "Packages to Install"),
              s("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            s("span", c1, m(S.value) + "/" + m(e.autoResolvedPackages.length) + " to install", 1)
          ]),
          s("div", u1, [
            (n(!0), i(W, null, ye(e.autoResolvedPackages, (Se) => (n(), i("div", {
              key: Se.package_id,
              class: "resolved-package-item"
            }, [
              s("div", d1, [
                s("code", m1, m(Se.package_id), 1),
                s("span", f1, m(Se.node_types_count) + " node type" + m(Se.node_types_count > 1 ? "s" : ""), 1)
              ]),
              s("div", v1, [
                C(Se.package_id) ? (n(), i("span", g1, " SKIPPED ")) : (n(), i("span", p1, " WILL INSTALL ")),
                s("button", {
                  class: "toggle-skip-btn",
                  onClick: (ze) => I(Se.package_id)
                }, m(C(Se.package_id) ? "Include" : "Skip"), 9, h1)
              ])
            ]))), 128))
          ])
        ])) : y("", !0),
        e.autoResolvedPackages.length > 0 && e.nodes.length > 0 ? (n(), i("div", y1)) : y("", !0),
        e.nodes.length > 0 ? (n(), i(W, { key: 2 }, [
          s("div", w1, [
            ee[7] || (ee[7] = s("div", { class: "step-info" }, [
              s("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              s("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            s("span", _1, m(b.value) + "/" + m(e.nodes.length) + " resolved", 1)
          ]),
          _.value ? (n(), L(ic, {
            key: 0,
            "item-name": _.value.node_type,
            "current-index": r.value,
            "total-items": e.nodes.length,
            onPrev: ee[0] || (ee[0] = (Se) => E(r.value - 1)),
            onNext: ee[1] || (ee[1] = (Se) => E(r.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
          _.value ? (n(), i("div", k1, [
            $(Qy, {
              "node-type": _.value.node_type,
              "has-multiple-options": !!((te = _.value.options) != null && te.length),
              choice: (Me = e.nodeChoices) == null ? void 0 : Me.get(_.value.node_type),
              "installed-node-packs": e.installedNodePacks,
              onMarkOptional: N,
              onSkip: F,
              onManualEntry: q,
              onSearch: D,
              onClearChoice: V,
              onInstalledPackSelected: ue
            }, null, 8, ["node-type", "has-multiple-options", "choice", "installed-node-packs"])
          ])) : y("", !0)
        ], 64)) : y("", !0),
        e.nodes.length === 0 && e.autoResolvedPackages.length === 0 ? (n(), i("div", b1, [...ee[8] || (ee[8] = [
          s("p", null, "No nodes need resolution.", -1)
        ])])) : y("", !0),
        (n(), L(Yt, { to: "body" }, [
          c.value ? (n(), i("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: ee[4] || (ee[4] = vt((Se) => w.value = !0, ["self"])),
            onMouseup: vt(g, ["self"])
          }, [
            s("div", {
              class: "node-search-modal",
              onMousedown: ee[3] || (ee[3] = (Se) => w.value = !1)
            }, [
              s("div", { class: "node-modal-header" }, [
                ee[9] || (ee[9] = s("h4", null, "Search Node Registry", -1)),
                s("button", {
                  class: "node-modal-close-btn",
                  onClick: le
                }, "✕")
              ]),
              s("div", $1, [
                $(bt, {
                  modelValue: d.value,
                  "onUpdate:modelValue": ee[2] || (ee[2] = (Se) => d.value = Se),
                  placeholder: "Search registry by node type or package name...",
                  onInput: ne
                }, null, 8, ["modelValue"]),
                s("div", C1, [
                  f.value.length > 0 ? (n(), i("div", x1, [
                    (n(!0), i(W, null, ye(f.value, (Se) => (n(), i("div", {
                      key: Se.package_id,
                      class: "node-search-result-item"
                    }, [
                      s("div", S1, [
                        s("div", I1, [
                          s("code", E1, m(Se.package_id), 1),
                          Se.display_name && Se.display_name !== Se.package_id ? (n(), i("span", T1, m(Se.display_name), 1)) : y("", !0)
                        ]),
                        oe(Se) ? (n(), i("div", M1, [
                          Se.github_stars ? (n(), i("span", P1, " ★ " + m(de(Se.github_stars)), 1)) : y("", !0),
                          Se.downloads ? (n(), i("span", R1, " ↓ " + m(de(Se.downloads)), 1)) : y("", !0)
                        ])) : y("", !0)
                      ]),
                      Se.description ? (n(), i("div", L1, m(Se.description), 1)) : y("", !0),
                      s("div", D1, [
                        Se.can_install_registry ? (n(), i("button", {
                          key: 0,
                          type: "button",
                          class: "node-result-action",
                          onClick: (ze) => H(Se)
                        }, " Install from Registry ", 8, N1)) : y("", !0),
                        Se.can_install_git ? (n(), i("button", {
                          key: 1,
                          type: "button",
                          class: "node-result-action secondary",
                          onClick: (ze) => we(Se)
                        }, " Install from GitHub ", 8, U1)) : y("", !0)
                      ])
                    ]))), 128))
                  ])) : p.value ? (n(), i("div", O1, "Searching...")) : d.value ? (n(), i("div", A1, 'No packages found matching "' + m(d.value) + '"', 1)) : (n(), i("div", z1, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : y("", !0)
        ])),
        (n(), L(Yt, { to: "body" }, [
          u.value ? (n(), i("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: vt(Y, ["self"])
          }, [
            s("div", F1, [
              s("div", { class: "node-modal-header" }, [
                ee[10] || (ee[10] = s("h4", null, "Enter Package Manually", -1)),
                s("button", {
                  class: "node-modal-close-btn",
                  onClick: Y
                }, "✕")
              ]),
              s("div", V1, [
                $(bt, {
                  modelValue: v.value,
                  "onUpdate:modelValue": ee[5] || (ee[5] = (Se) => v.value = Se),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                s("div", B1, [
                  $(Ue, {
                    variant: "secondary",
                    onClick: Y
                  }, {
                    default: h(() => [...ee[11] || (ee[11] = [
                      x("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  $(Ue, {
                    variant: "primary",
                    disabled: !v.value.trim(),
                    onClick: ce
                  }, {
                    default: h(() => [...ee[12] || (ee[12] = [
                      x(" Add Package ", -1)
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
}), G1 = /* @__PURE__ */ Ie(W1, [["__scopeId", "data-v-a85bb4b7"]]), j1 = /* @__PURE__ */ xe({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(e) {
    const t = e, o = R(() => t.confidence >= 0.9 ? "high" : t.confidence >= 0.7 ? "medium" : "low"), a = R(() => `confidence-${o.value}`), l = R(() => t.showPercentage ? `${Math.round(t.confidence * 100)}%` : o.value.charAt(0).toUpperCase() + o.value.slice(1));
    return (r, c) => (n(), i("span", {
      class: Be(["confidence-badge", a.value, e.size])
    }, m(l.value), 3));
  }
}), H1 = /* @__PURE__ */ Ie(j1, [["__scopeId", "data-v-17ec4b80"]]), q1 = { class: "node-info" }, K1 = { class: "node-info-text" }, J1 = { class: "item-body" }, Q1 = {
  key: 0,
  class: "resolved-state"
}, Y1 = {
  key: 1,
  class: "multiple-options"
}, X1 = { class: "options-list" }, Z1 = ["onClick"], ew = ["name", "value", "checked", "onChange"], tw = { class: "option-content" }, sw = { class: "option-header" }, ow = { class: "option-filename" }, nw = { class: "option-meta" }, aw = { class: "option-size" }, lw = { class: "option-category" }, iw = { class: "option-path" }, rw = { class: "action-buttons" }, cw = {
  key: 2,
  class: "unresolved"
}, uw = { class: "action-buttons" }, dw = /* @__PURE__ */ xe({
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
    const o = e, a = t, l = R(() => !!o.choice);
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
    function c(d) {
      a("option-selected", d);
    }
    function u(d) {
      if (!d) return "Unknown";
      const v = d / (1024 * 1024 * 1024);
      return v >= 1 ? `${v.toFixed(2)} GB` : `${(d / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (d, v) => (n(), i("div", {
      class: Be(["model-resolution-item", { resolved: l.value, ambiguous: e.hasMultipleOptions }])
    }, [
      s("div", q1, [
        s("span", K1, [
          v[7] || (v[7] = x("Used by: ", -1)),
          s("code", null, m(e.nodeType), 1)
        ]),
        e.statusLabel ? (n(), i("span", {
          key: 0,
          class: Be(["status-badge", r.value])
        }, m(e.statusLabel), 3)) : y("", !0)
      ]),
      s("div", J1, [
        l.value ? (n(), i("div", Q1, [
          $(Ue, {
            variant: "ghost",
            size: "sm",
            onClick: v[0] || (v[0] = (f) => a("clear-choice"))
          }, {
            default: h(() => [...v[8] || (v[8] = [
              x(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (n(), i("div", Y1, [
          v[12] || (v[12] = s("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          s("div", X1, [
            (n(!0), i(W, null, ye(e.options, (f, p) => (n(), i("label", {
              key: f.model.hash,
              class: Be(["option-card", { selected: e.selectedOptionIndex === p }]),
              onClick: (w) => c(p)
            }, [
              s("input", {
                type: "radio",
                name: `model-option-${e.filename}`,
                value: p,
                checked: e.selectedOptionIndex === p,
                onChange: (w) => c(p)
              }, null, 40, ew),
              s("div", tw, [
                s("div", sw, [
                  s("span", ow, m(f.model.filename), 1),
                  $(H1, {
                    confidence: f.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                s("div", nw, [
                  s("span", aw, m(u(f.model.size)), 1),
                  s("span", lw, m(f.model.category), 1)
                ]),
                s("div", iw, m(f.model.relative_path), 1)
              ])
            ], 10, Z1))), 128))
          ]),
          s("div", rw, [
            $(Ue, {
              variant: "ghost",
              size: "sm",
              onClick: v[1] || (v[1] = (f) => a("search"))
            }, {
              default: h(() => [...v[9] || (v[9] = [
                x(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            $(Ue, {
              variant: "ghost",
              size: "sm",
              onClick: v[2] || (v[2] = (f) => a("download-url"))
            }, {
              default: h(() => [...v[10] || (v[10] = [
                x(" Download URL ", -1)
              ])]),
              _: 1
            }),
            $(Ue, {
              variant: "secondary",
              size: "sm",
              onClick: v[3] || (v[3] = (f) => a("mark-optional"))
            }, {
              default: h(() => [...v[11] || (v[11] = [
                x(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (n(), i("div", cw, [
          v[16] || (v[16] = s("div", { class: "unresolved-message" }, [
            s("span", { class: "warning-icon" }, "⚠"),
            s("span", null, "Model not found in workspace")
          ], -1)),
          s("div", uw, [
            $(Ue, {
              variant: "primary",
              size: "sm",
              onClick: v[4] || (v[4] = (f) => a("search"))
            }, {
              default: h(() => [...v[13] || (v[13] = [
                x(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            $(Ue, {
              variant: "secondary",
              size: "sm",
              onClick: v[5] || (v[5] = (f) => a("download-url"))
            }, {
              default: h(() => [...v[14] || (v[14] = [
                x(" Download URL ", -1)
              ])]),
              _: 1
            }),
            $(Ue, {
              variant: "secondary",
              size: "sm",
              onClick: v[6] || (v[6] = (f) => a("mark-optional"))
            }, {
              default: h(() => [...v[15] || (v[15] = [
                x(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), mw = /* @__PURE__ */ Ie(dw, [["__scopeId", "data-v-8a82fefa"]]), fw = { class: "model-resolution-step" }, vw = { class: "step-header" }, pw = { class: "step-info" }, gw = { class: "step-title" }, hw = { class: "step-description" }, yw = { class: "stat-badge" }, ww = {
  key: 1,
  class: "step-body"
}, _w = {
  key: 2,
  class: "empty-state"
}, kw = { class: "model-search-modal" }, bw = { class: "model-modal-body" }, $w = {
  key: 0,
  class: "model-search-results"
}, Cw = ["onClick"], xw = { class: "model-result-header" }, Sw = { class: "model-result-filename" }, Iw = { class: "model-result-meta" }, Ew = { class: "model-result-category" }, Tw = { class: "model-result-size" }, Mw = {
  key: 0,
  class: "model-result-path"
}, Pw = {
  key: 1,
  class: "model-no-results"
}, Rw = {
  key: 2,
  class: "model-searching"
}, Lw = { class: "model-download-url-modal" }, Dw = { class: "model-modal-body" }, Nw = { class: "model-input-group" }, Uw = { class: "model-input-group" }, Ow = { class: "model-modal-actions" }, Aw = /* @__PURE__ */ xe({
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
    function a(oe) {
      var de;
      return oe && ((de = o[oe]) == null ? void 0 : de[0]) || null;
    }
    const l = e, r = t, c = k(0), u = k(!1), d = k(!1), v = k(""), f = k(""), p = k(""), w = k([]), g = k(!1), _ = R(() => l.models[c.value]), b = R(() => l.models.some((oe) => oe.is_download_intent)), S = R(() => l.models.filter(
      (oe) => l.modelChoices.has(oe.filename) || oe.is_download_intent
    ).length), C = R(() => {
      var de;
      if (!_.value) return "";
      const oe = a((de = _.value.reference) == null ? void 0 : de.node_type);
      return oe ? `${oe}/${_.value.filename}` : "";
    }), I = R(() => {
      var de;
      if (!_.value) return "not-found";
      const oe = l.modelChoices.get(_.value.filename);
      if (oe)
        switch (oe.action) {
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
      return _.value.is_download_intent ? "download" : (de = _.value.options) != null && de.length ? "ambiguous" : "not-found";
    }), E = R(() => {
      var de, ce;
      if (!_.value) return;
      const oe = l.modelChoices.get(_.value.filename);
      if (oe)
        switch (oe.action) {
          case "select":
            return (de = oe.selected_model) != null && de.filename ? `→ ${oe.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return _.value.is_download_intent ? "Pending Download" : (ce = _.value.options) != null && ce.length ? `${_.value.options.length} matches` : "Not Found";
    });
    function M(oe) {
      oe >= 0 && oe < l.models.length && (c.value = oe);
    }
    function N() {
      var oe;
      for (let de = c.value + 1; de < l.models.length; de++) {
        const ce = l.models[de];
        if (!ce.is_download_intent && !((oe = l.modelChoices) != null && oe.has(ce.filename))) {
          M(de);
          return;
        }
      }
    }
    function F() {
      _.value && (r("mark-optional", _.value.filename), Ot(() => N()));
    }
    function V() {
      _.value && (r("skip", _.value.filename), Ot(() => N()));
    }
    function D(oe) {
      _.value && (r("option-selected", _.value.filename, oe), Ot(() => N()));
    }
    function q() {
      _.value && r("clear-choice", _.value.filename);
    }
    function ue() {
      _.value && (v.value = _.value.filename, u.value = !0);
    }
    function le() {
      _.value && (f.value = _.value.download_source || "", p.value = _.value.target_path || C.value, d.value = !0);
    }
    function Y() {
      u.value = !1, v.value = "", w.value = [];
    }
    function me() {
      d.value = !1, f.value = "", p.value = "";
    }
    function ne() {
      g.value = !0, setTimeout(() => {
        g.value = !1;
      }, 300);
    }
    function B(oe) {
      _.value && (Y(), Ot(() => N()));
    }
    function H() {
      !_.value || !f.value.trim() || (r("download-url", _.value.filename, f.value.trim(), p.value.trim() || void 0), me(), Ot(() => N()));
    }
    function we(oe) {
      if (!oe) return "Unknown";
      const de = oe / (1024 * 1024 * 1024);
      return de >= 1 ? `${de.toFixed(2)} GB` : `${(oe / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (oe, de) => {
      var ce, K, ee;
      return n(), i("div", fw, [
        s("div", vw, [
          s("div", pw, [
            s("h3", gw, m(b.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            s("p", hw, m(b.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          s("span", yw, m(S.value) + "/" + m(e.models.length) + " resolved", 1)
        ]),
        _.value ? (n(), L(ic, {
          key: 0,
          "item-name": _.value.filename,
          "current-index": c.value,
          "total-items": e.models.length,
          onPrev: de[0] || (de[0] = (te) => M(c.value - 1)),
          onNext: de[1] || (de[1] = (te) => M(c.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
        _.value ? (n(), i("div", ww, [
          $(mw, {
            filename: _.value.filename,
            "node-type": ((ce = _.value.reference) == null ? void 0 : ce.node_type) || "Unknown",
            "has-multiple-options": !!((K = _.value.options) != null && K.length),
            options: _.value.options,
            choice: (ee = e.modelChoices) == null ? void 0 : ee.get(_.value.filename),
            status: I.value,
            "status-label": E.value,
            onMarkOptional: F,
            onSkip: V,
            onDownloadUrl: le,
            onSearch: ue,
            onOptionSelected: D,
            onClearChoice: q
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (n(), i("div", _w, [...de[5] || (de[5] = [
          s("p", null, "No models need resolution.", -1)
        ])])),
        (n(), L(Yt, { to: "body" }, [
          u.value ? (n(), i("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: vt(Y, ["self"])
          }, [
            s("div", kw, [
              s("div", { class: "model-modal-header" }, [
                de[6] || (de[6] = s("h4", null, "Search Workspace Models", -1)),
                s("button", {
                  class: "model-modal-close-btn",
                  onClick: Y
                }, "✕")
              ]),
              s("div", bw, [
                $(bt, {
                  modelValue: v.value,
                  "onUpdate:modelValue": de[2] || (de[2] = (te) => v.value = te),
                  placeholder: "Search by filename, category...",
                  onInput: ne
                }, null, 8, ["modelValue"]),
                w.value.length > 0 ? (n(), i("div", $w, [
                  (n(!0), i(W, null, ye(w.value, (te) => (n(), i("div", {
                    key: te.hash,
                    class: "model-search-result-item",
                    onClick: (Me) => B()
                  }, [
                    s("div", xw, [
                      s("code", Sw, m(te.filename), 1)
                    ]),
                    s("div", Iw, [
                      s("span", Ew, m(te.category), 1),
                      s("span", Tw, m(we(te.size)), 1)
                    ]),
                    te.relative_path ? (n(), i("div", Mw, m(te.relative_path), 1)) : y("", !0)
                  ], 8, Cw))), 128))
                ])) : v.value && !g.value ? (n(), i("div", Pw, ' No models found matching "' + m(v.value) + '" ', 1)) : y("", !0),
                g.value ? (n(), i("div", Rw, "Searching...")) : y("", !0)
              ])
            ])
          ])) : y("", !0)
        ])),
        (n(), L(Yt, { to: "body" }, [
          d.value ? (n(), i("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: vt(me, ["self"])
          }, [
            s("div", Lw, [
              s("div", { class: "model-modal-header" }, [
                de[7] || (de[7] = s("h4", null, "Enter Download URL", -1)),
                s("button", {
                  class: "model-modal-close-btn",
                  onClick: me
                }, "✕")
              ]),
              s("div", Dw, [
                s("div", Nw, [
                  de[8] || (de[8] = s("label", { class: "model-input-label" }, "Download URL", -1)),
                  $(bt, {
                    modelValue: f.value,
                    "onUpdate:modelValue": de[3] || (de[3] = (te) => f.value = te),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                s("div", Uw, [
                  de[9] || (de[9] = s("label", { class: "model-input-label" }, "Host Path", -1)),
                  $(bt, {
                    modelValue: p.value,
                    "onUpdate:modelValue": de[4] || (de[4] = (te) => p.value = te),
                    placeholder: C.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                s("div", Ow, [
                  $(Ue, {
                    variant: "secondary",
                    onClick: me
                  }, {
                    default: h(() => [...de[10] || (de[10] = [
                      x("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  $(Ue, {
                    variant: "primary",
                    disabled: !f.value.trim() || !p.value.trim(),
                    onClick: H
                  }, {
                    default: h(() => [...de[11] || (de[11] = [
                      x(" Queue Download ", -1)
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
}), zw = /* @__PURE__ */ Ie(Aw, [["__scopeId", "data-v-5c700bfa"]]), Fw = { class: "applying-step" }, Vw = {
  key: 0,
  class: "phase-content"
}, Bw = {
  key: 1,
  class: "phase-content"
}, Ww = { class: "phase-description" }, Gw = { class: "overall-progress" }, jw = { class: "progress-bar" }, Hw = { class: "progress-label" }, qw = { class: "install-list" }, Kw = { class: "install-icon" }, Jw = { key: 0 }, Qw = {
  key: 1,
  class: "spinner"
}, Yw = { key: 2 }, Xw = { key: 3 }, Zw = {
  key: 0,
  class: "install-error"
}, e0 = {
  key: 2,
  class: "phase-content"
}, t0 = { class: "phase-header" }, s0 = { class: "phase-title" }, o0 = { class: "completion-summary" }, n0 = {
  key: 0,
  class: "summary-item success"
}, a0 = { class: "summary-text" }, l0 = {
  key: 1,
  class: "summary-item success"
}, i0 = { class: "summary-text" }, r0 = {
  key: 2,
  class: "summary-item success"
}, c0 = { class: "summary-text" }, u0 = {
  key: 3,
  class: "summary-item error"
}, d0 = { class: "summary-text" }, m0 = {
  key: 4,
  class: "failed-list"
}, f0 = { class: "failed-node-id" }, v0 = { class: "failed-error" }, p0 = {
  key: 6,
  class: "summary-item success"
}, g0 = { class: "summary-text" }, h0 = {
  key: 7,
  class: "summary-note"
}, y0 = {
  key: 8,
  class: "restart-prompt"
}, w0 = {
  key: 3,
  class: "phase-content error"
}, _0 = { class: "error-message" }, k0 = /* @__PURE__ */ xe({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(e) {
    const t = e, o = R(() => {
      var b, S;
      const g = ((b = t.progress.nodeInstallProgress) == null ? void 0 : b.totalNodes) || t.progress.nodesToInstall.length;
      if (!g) return 0;
      const _ = ((S = t.progress.nodeInstallProgress) == null ? void 0 : S.completedNodes.length) ?? 0;
      return Math.round(_ / g * 100);
    }), a = R(() => {
      var g;
      return ((g = t.progress.nodeInstallProgress) == null ? void 0 : g.completedNodes.filter((_) => !_.success)) || [];
    }), l = R(() => a.value.length > 0), r = R(() => t.progress.nodesInstalled.length), c = R(() => {
      var g;
      return ((g = t.progress.nodesMarkedOptional) == null ? void 0 : g.length) || 0;
    }), u = R(() => {
      var g;
      return ((g = t.progress.nodesMapped) == null ? void 0 : g.length) || 0;
    }), d = R(() => t.progress.completedFiles.length > 0), v = R(() => r.value > 0 || c.value > 0 || u.value > 0 || d.value || !!t.progress.needsRestart), f = R(() => v.value ? "Workflow dependencies resolved" : "No changes applied");
    function p(g, _) {
      var S, C;
      const b = (S = t.progress.nodeInstallProgress) == null ? void 0 : S.completedNodes.find((I) => I.node_id === g);
      return b ? b.success ? "complete" : "failed" : ((C = t.progress.nodeInstallProgress) == null ? void 0 : C.currentIndex) === _ ? "installing" : "pending";
    }
    function w(g) {
      var _, b;
      return (b = (_ = t.progress.nodeInstallProgress) == null ? void 0 : _.completedNodes.find((S) => S.node_id === g)) == null ? void 0 : b.error;
    }
    return (g, _) => {
      var b, S, C, I;
      return n(), i("div", Fw, [
        e.progress.phase === "resolving" ? (n(), i("div", Vw, [..._[2] || (_[2] = [
          s("div", { class: "phase-header" }, [
            s("div", { class: "loading-spinner" }),
            s("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          s("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : e.progress.phase === "installing" ? (n(), i("div", Bw, [
          _[3] || (_[3] = s("div", { class: "phase-header" }, [
            s("div", { class: "loading-spinner" }),
            s("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          s("p", Ww, " Installing " + m((((b = e.progress.nodeInstallProgress) == null ? void 0 : b.currentIndex) ?? 0) + 1) + " of " + m(((S = e.progress.nodeInstallProgress) == null ? void 0 : S.totalNodes) ?? e.progress.nodesToInstall.length) + " packages... ", 1),
          s("div", Gw, [
            s("div", jw, [
              s("div", {
                class: "progress-fill",
                style: Dt({ width: `${o.value}%` })
              }, null, 4)
            ]),
            s("span", Hw, m(((C = e.progress.nodeInstallProgress) == null ? void 0 : C.completedNodes.length) ?? 0) + " / " + m(((I = e.progress.nodeInstallProgress) == null ? void 0 : I.totalNodes) ?? e.progress.nodesToInstall.length), 1)
          ]),
          s("div", qw, [
            (n(!0), i(W, null, ye(e.progress.nodesToInstall, (E, M) => (n(), i("div", {
              key: E,
              class: Be(["install-item", p(E, M)])
            }, [
              s("span", Kw, [
                p(E, M) === "pending" ? (n(), i("span", Jw, "○")) : p(E, M) === "installing" ? (n(), i("span", Qw, "◌")) : p(E, M) === "complete" ? (n(), i("span", Yw, "✓")) : p(E, M) === "failed" ? (n(), i("span", Xw, "✗")) : y("", !0)
              ]),
              s("code", null, m(E), 1),
              w(E) ? (n(), i("span", Zw, m(w(E)), 1)) : y("", !0)
            ], 2))), 128))
          ])
        ])) : e.progress.phase === "complete" ? (n(), i("div", e0, [
          s("div", t0, [
            s("span", {
              class: Be(["phase-icon", l.value ? "warning" : "success"])
            }, m(l.value ? "⚠" : "✓"), 3),
            s("h3", s0, m(l.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          s("div", o0, [
            e.progress.nodesInstalled.length > 0 ? (n(), i("div", n0, [
              _[4] || (_[4] = s("span", { class: "summary-icon" }, "✓", -1)),
              s("span", a0, m(e.progress.nodesInstalled.length) + " node package" + m(e.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : y("", !0),
            c.value > 0 ? (n(), i("div", l0, [
              _[5] || (_[5] = s("span", { class: "summary-icon" }, "✓", -1)),
              s("span", i0, m(c.value) + " node type" + m(c.value > 1 ? "s" : "") + " marked optional", 1)
            ])) : y("", !0),
            u.value > 0 ? (n(), i("div", r0, [
              _[6] || (_[6] = s("span", { class: "summary-icon" }, "✓", -1)),
              s("span", c0, m(u.value) + " node mapping" + m(u.value > 1 ? "s" : "") + " changed", 1)
            ])) : y("", !0),
            a.value.length > 0 ? (n(), i("div", u0, [
              _[7] || (_[7] = s("span", { class: "summary-icon" }, "✗", -1)),
              s("span", d0, m(a.value.length) + " package" + m(a.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : y("", !0),
            a.value.length > 0 ? (n(), i("div", m0, [
              (n(!0), i(W, null, ye(a.value, (E) => (n(), i("div", {
                key: E.node_id,
                class: "failed-item"
              }, [
                s("code", f0, m(E.node_id), 1),
                s("span", v0, m(E.error), 1)
              ]))), 128))
            ])) : y("", !0),
            a.value.length > 0 ? (n(), i("button", {
              key: 5,
              class: "retry-button",
              onClick: _[0] || (_[0] = (E) => g.$emit("retry-failed"))
            }, " Retry Failed (" + m(a.value.length) + ") ", 1)) : y("", !0),
            l.value ? y("", !0) : (n(), i("div", p0, [
              _[8] || (_[8] = s("span", { class: "summary-icon" }, "✓", -1)),
              s("span", g0, m(f.value), 1)
            ])),
            d.value ? (n(), i("p", h0, "Model downloads will continue in the background.")) : y("", !0),
            e.progress.needsRestart ? (n(), i("div", y0, [
              _[9] || (_[9] = s("div", { class: "restart-warning" }, [
                s("span", { class: "warning-icon" }, "⚠"),
                s("div", { class: "warning-content" }, [
                  s("strong", null, "Restart Required"),
                  s("p", null, "Node packages were installed. ComfyUI needs to restart to load them.")
                ])
              ], -1)),
              s("button", {
                class: "restart-button",
                onClick: _[1] || (_[1] = (E) => g.$emit("restart"))
              }, " Restart ComfyUI ")
            ])) : y("", !0)
          ])
        ])) : e.progress.phase === "error" ? (n(), i("div", w0, [
          _[10] || (_[10] = s("div", { class: "phase-header" }, [
            s("span", { class: "phase-icon error" }, "✗"),
            s("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          s("p", _0, m(e.progress.error), 1)
        ])) : y("", !0)
      ]);
    };
  }
}), b0 = /* @__PURE__ */ Ie(k0, [["__scopeId", "data-v-7551fbc3"]]), $0 = {
  key: 0,
  class: "loading-state"
}, C0 = {
  key: 1,
  class: "wizard-content"
}, x0 = {
  key: 0,
  class: "step-content"
}, S0 = { class: "analysis-summary" }, I0 = { class: "analysis-header" }, E0 = { class: "summary-description" }, T0 = { class: "stats-grid" }, M0 = { class: "stat-card" }, P0 = { class: "stat-items" }, R0 = {
  key: 0,
  class: "stat-item success"
}, L0 = { class: "stat-count" }, D0 = {
  key: 1,
  class: "stat-item info"
}, N0 = { class: "stat-count" }, U0 = {
  key: 2,
  class: "stat-item warning"
}, O0 = { class: "stat-count" }, A0 = {
  key: 3,
  class: "stat-item warning"
}, z0 = { class: "stat-count" }, F0 = {
  key: 4,
  class: "stat-item warning"
}, V0 = { class: "stat-count" }, B0 = {
  key: 5,
  class: "stat-item error"
}, W0 = { class: "stat-count" }, G0 = { class: "stat-card" }, j0 = { class: "stat-items" }, H0 = { class: "stat-item success" }, q0 = { class: "stat-count" }, K0 = {
  key: 0,
  class: "stat-item info"
}, J0 = { class: "stat-count" }, Q0 = {
  key: 1,
  class: "stat-item warning"
}, Y0 = { class: "stat-count" }, X0 = {
  key: 2,
  class: "stat-item warning"
}, Z0 = { class: "stat-count" }, e_ = {
  key: 3,
  class: "stat-item error"
}, t_ = { class: "stat-count" }, s_ = {
  key: 0,
  class: "status-message warning"
}, o_ = { class: "status-text" }, n_ = {
  key: 1,
  class: "status-message warning"
}, a_ = { class: "status-text" }, l_ = {
  key: 2,
  class: "status-message info"
}, i_ = { class: "status-text" }, r_ = {
  key: 3,
  class: "status-message info"
}, c_ = { class: "status-text" }, u_ = {
  key: 4,
  class: "status-message info"
}, d_ = { class: "status-text" }, m_ = {
  key: 5,
  class: "status-message warning"
}, f_ = { class: "status-text" }, v_ = {
  key: 6,
  class: "status-message success"
}, p_ = {
  key: 7,
  class: "category-mismatch-section"
}, g_ = { class: "mismatch-list" }, h_ = { class: "mismatch-path" }, y_ = { class: "mismatch-target" }, w_ = {
  key: 8,
  class: "category-mismatch-section"
}, __ = { class: "mismatch-list" }, k_ = { class: "mismatch-path" }, b_ = { class: "status-text" }, $_ = {
  key: 1,
  class: "step-content node-step-content"
}, C_ = {
  key: 2,
  class: "step-content package-step-content"
}, x_ = { class: "package-step-header" }, S_ = { class: "stat-badge" }, I_ = {
  key: 0,
  class: "package-section"
}, E_ = { class: "package-section-header" }, T_ = { class: "package-section-title" }, M_ = { class: "stat-badge" }, P_ = { class: "package-list" }, R_ = { class: "package-info" }, L_ = { class: "item-name" }, D_ = { class: "package-meta" }, N_ = { class: "package-actions" }, U_ = {
  key: 0,
  class: "choice-badge install"
}, O_ = {
  key: 1,
  class: "choice-badge skip"
}, A_ = {
  key: 1,
  class: "community-node-section"
}, z_ = { class: "community-node-header" }, F_ = { class: "community-node-title" }, V_ = { class: "community-node-list" }, B_ = { class: "community-node-info" }, W_ = { class: "community-node-heading" }, G_ = { class: "item-name" }, j_ = { class: "community-node-package" }, H_ = { class: "community-node-meta" }, q_ = { class: "community-node-guidance" }, K_ = { key: 0 }, J_ = {
  key: 0,
  class: "community-node-selection"
}, Q_ = { class: "community-selected-label" }, Y_ = {
  key: 1,
  class: "community-node-actions"
}, X_ = {
  key: 4,
  class: "step-content"
}, Z_ = { class: "review-summary" }, ek = { class: "review-stats" }, tk = { class: "review-stat" }, sk = { class: "stat-value" }, ok = { class: "review-stat" }, nk = { class: "stat-value" }, ak = { class: "review-stat" }, lk = { class: "stat-value" }, ik = { class: "review-stat" }, rk = { class: "stat-value" }, ck = {
  key: 0,
  class: "review-section"
}, uk = { class: "section-title" }, dk = { class: "review-items" }, mk = { class: "item-name" }, fk = { class: "item-choice" }, vk = {
  key: 0,
  class: "choice-badge install"
}, pk = {
  key: 1,
  class: "choice-badge skip"
}, gk = {
  key: 1,
  class: "review-section"
}, hk = { class: "section-title" }, yk = { class: "review-items" }, wk = { class: "item-name" }, _k = { class: "item-choice" }, kk = {
  key: 0,
  class: "choice-badge install"
}, bk = {
  key: 1,
  class: "choice-badge optional"
}, $k = {
  key: 2,
  class: "choice-badge skip"
}, Ck = {
  key: 2,
  class: "review-section"
}, xk = { class: "section-title" }, Sk = { class: "review-items" }, Ik = { class: "item-name" }, Ek = { class: "item-choice" }, Tk = {
  key: 0,
  class: "choice-badge install"
}, Mk = {
  key: 1,
  class: "choice-badge mapped"
}, Pk = {
  key: 2,
  class: "choice-badge optional"
}, Rk = {
  key: 3,
  class: "choice-badge skip"
}, Lk = {
  key: 1,
  class: "choice-badge pending"
}, Dk = {
  key: 3,
  class: "review-section"
}, Nk = { class: "section-title" }, Uk = { class: "review-items download-details" }, Ok = { class: "download-info" }, Ak = { class: "item-name" }, zk = { class: "download-meta" }, Fk = { class: "download-path" }, Vk = ["title"], Bk = {
  key: 4,
  class: "review-section"
}, Wk = { class: "section-title" }, Gk = { class: "review-items" }, jk = { class: "item-name" }, Hk = { class: "item-choice" }, qk = {
  key: 0,
  class: "choice-badge install"
}, Kk = {
  key: 1,
  class: "choice-badge download"
}, Jk = {
  key: 2,
  class: "choice-badge optional"
}, Qk = {
  key: 3,
  class: "choice-badge skip"
}, Yk = {
  key: 4,
  class: "choice-badge skip"
}, Xk = {
  key: 1,
  class: "choice-badge download"
}, Zk = {
  key: 2,
  class: "choice-badge pending"
}, eb = {
  key: 5,
  class: "no-choices"
}, tb = /* @__PURE__ */ xe({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(e, { emit: t }) {
    const o = e, a = t, { analyzeWorkflow: l, applyResolution: r, installNodes: c, queueModelDownloads: u, progress: d, resetProgress: v } = lc(), { loadPendingDownloads: f } = zo(), { openFileLocation: p, queueNodeInstall: w, getNodes: g } = ct(), _ = k(null), b = k([]), S = k(!1), C = k(!1), I = k(null), E = k("analysis"), M = k([]), N = k(/* @__PURE__ */ new Map()), F = k(/* @__PURE__ */ new Map()), V = k(/* @__PURE__ */ new Set()), D = R(() => {
      const se = [
        { id: "analysis", label: "Analysis" }
      ];
      return we.value && se.push({ id: "nodes", label: "Nodes" }), ee.value && se.push({ id: "packages", label: "Packages" }), oe.value && se.push({ id: "models", label: "Models" }), se.push({ id: "review", label: "Review" }), E.value === "applying" && se.push({ id: "applying", label: "Applying" }), se;
    });
    R(() => _.value ? _.value.stats.needs_user_input : !1);
    const q = R(() => B.value.filter(
      (se) => !N.value.has(se.reference.node_type)
    ).length), ue = R(() => ae.value.filter(
      (O) => !N.value.has(O.node_type)
    ).length + Ee.value.length + q.value), le = R(() => _.value ? _.value.nodes.unresolved.filter(
      (se) => !N.value.has(se.reference.node_type)
    ).length : 0), Y = R(() => _.value ? _.value.nodes.ambiguous.filter(
      (se) => !N.value.has(se.reference.node_type)
    ).length : 0), me = R(() => _.value ? _.value.nodes.version_gated || [] : []), ne = R(() => _.value ? _.value.nodes.uninstallable || [] : []), B = R(() => ne.value.filter((se) => {
      var O;
      return !!((O = se.package) != null && O.package_id);
    })), H = R(() => me.value.length > 0), we = R(() => _.value ? _.value.nodes.unresolved.length > 0 || _.value.nodes.ambiguous.length > 0 || Ce.value.length > 0 : !1), oe = R(() => _.value ? _.value.models.unresolved.length > 0 || _.value.models.ambiguous.length > 0 : !1), de = R(() => _.value ? _.value.stats.download_intents > 0 : !1), ce = R(() => _.value ? _.value.stats.nodes_needing_installation > 0 : !1), K = R(() => B.value.length > 0), ee = R(() => ce.value || K.value), te = R(() => _.value ? _.value.nodes.resolved.length : 0), Me = R(() => _.value ? _.value.models.resolved.filter((se) => se.has_category_mismatch) : []), Se = R(() => Me.value.length > 0), ze = R(() => we.value ? "nodes" : ee.value ? "packages" : oe.value ? "models" : "review"), Ne = R(() => {
      if (!_.value) return [];
      const se = _.value.nodes.resolved.filter((re) => !re.is_installed), O = /* @__PURE__ */ new Set();
      return se.filter((re) => O.has(re.package.package_id) ? !1 : (O.add(re.package.package_id), !0));
    }), be = R(() => {
      if (!_.value) return [];
      const se = _.value.nodes.resolved.filter((re) => !re.is_installed), O = /* @__PURE__ */ new Map();
      for (const re of se) {
        const Je = O.get(re.package.package_id);
        Je ? Je.node_types_count++ : O.set(re.package.package_id, {
          package_id: re.package.package_id,
          title: re.package.title,
          node_types_count: 1
        });
      }
      return Array.from(O.values());
    }), Ae = R(() => be.value.filter((se) => !V.value.has(se.package_id)).length), ge = R(() => be.value.length + B.value.length), ve = R(() => {
      const se = B.value.filter(
        (O) => N.value.has(O.reference.node_type)
      ).length;
      return be.value.length + se;
    }), T = R(() => Ne.value.filter((se) => !V.value.has(se.package.package_id))), A = R(() => _.value ? _.value.models.resolved.filter(
      (se) => se.match_type === "download_intent" || se.match_type === "property_download_intent"
    ).map((se) => ({
      filename: se.reference.widget_value,
      reference: se.reference,
      is_download_intent: !0,
      resolved_model: se.model,
      download_source: se.download_source,
      target_path: se.target_path
    })) : []), ae = R(() => {
      if (!_.value) return [];
      const se = Ce.value.map((Je) => ({
        node_type: Je.reference.node_type,
        reason: "saved_mapping",
        is_unresolved: !1,
        options: void 0
      })), O = _.value.nodes.unresolved.map((Je) => ({
        node_type: Je.reference.node_type,
        reason: Je.reason,
        is_unresolved: !0,
        options: void 0
      })), re = _.value.nodes.ambiguous.map((Je) => ({
        node_type: Je.reference.node_type,
        has_multiple_options: !0,
        options: Je.options.map((it) => ({
          package_id: it.package.package_id,
          title: it.package.title,
          match_confidence: it.match_confidence,
          match_type: it.match_type,
          is_installed: it.is_installed
        }))
      }));
      return [...se, ...O, ...re];
    }), Ce = R(() => _.value ? _.value.nodes.resolved.filter(
      (se) => {
        var O;
        return ((O = se.saved_choice) == null ? void 0 : O.action) === "map-installed";
      }
    ) : []), Ee = R(() => {
      if (!_.value) return [];
      const se = _.value.models.unresolved.map((re) => ({
        filename: re.reference.widget_value,
        reference: re.reference,
        reason: re.reason,
        is_unresolved: !0,
        options: void 0
      })), O = _.value.models.ambiguous.map((re) => ({
        filename: re.reference.widget_value,
        reference: re.reference,
        has_multiple_options: !0,
        options: re.options.map((Je) => ({
          model: Je.model,
          match_confidence: Je.match_confidence,
          match_type: Je.match_type,
          has_download_source: Je.has_download_source
        }))
      }));
      return [...se, ...O];
    }), ke = R(() => {
      const se = Ee.value, O = A.value.map((re) => ({
        filename: re.filename,
        reference: re.reference,
        is_download_intent: !0,
        resolved_model: re.resolved_model,
        download_source: re.download_source,
        target_path: re.target_path,
        options: void 0
      }));
      return [...se, ...O];
    }), X = R(() => A.value.filter((se) => {
      const O = F.value.get(se.filename);
      return O ? O.action === "download" : !0;
    }).map((se) => ({
      filename: se.filename,
      url: se.download_source,
      target_path: se.target_path
    })));
    function G(se, O = 50) {
      return se.length <= O ? se : se.slice(0, O - 3) + "...";
    }
    const fe = R(() => {
      let se = T.value.length;
      for (const O of N.value.values())
        O.action === "install" && se++;
      for (const O of F.value.values())
        O.action === "select" && se++;
      return se;
    }), he = R(() => {
      let se = 0;
      for (const O of F.value.values())
        O.action === "download" && se++;
      for (const O of A.value)
        F.value.get(O.filename) || se++;
      return se;
    }), je = R(() => {
      let se = 0;
      for (const O of N.value.values())
        O.action === "optional" && se++;
      for (const O of F.value.values())
        O.action === "optional" && se++;
      return se;
    }), We = R(() => {
      let se = V.value.size;
      for (const O of N.value.values())
        O.action === "skip" && se++;
      for (const O of F.value.values())
        O.action === "skip" && se++;
      for (const O of ae.value)
        N.value.has(O.node_type) || se++;
      for (const O of Ee.value)
        F.value.has(O.filename) || se++;
      return se;
    }), _e = R(() => {
      const se = {};
      if (se.analysis = { resolved: 1, total: 1 }, we.value) {
        const O = ae.value.length, re = ae.value.filter(
          (Je) => N.value.has(Je.node_type)
        ).length;
        se.nodes = { resolved: re, total: O };
      }
      if (ee.value && (se.packages = {
        resolved: ve.value,
        total: ge.value || 1
      }), oe.value) {
        const O = ke.value.length, re = ke.value.filter(
          (Je) => F.value.has(Je.filename) || Je.is_download_intent
        ).length;
        se.models = { resolved: re, total: O };
      }
      if (se.review = { resolved: 1, total: 1 }, E.value === "applying") {
        const O = d.totalFiles || 1, re = d.completedFiles.length;
        se.applying = { resolved: re, total: O };
      }
      return se;
    });
    function Z(se) {
      E.value = se;
    }
    function Fe() {
      const se = D.value.findIndex((O) => O.id === E.value);
      se > 0 && (E.value = D.value[se - 1].id);
    }
    function De() {
      const se = D.value.findIndex((O) => O.id === E.value);
      se < D.value.length - 1 && (E.value = D.value[se + 1].id);
    }
    function He() {
      const se = D.value.findIndex((re) => re.id === E.value), O = D.value[se + 1];
      return (O == null ? void 0 : O.label) || "Review";
    }
    function Ve(se) {
      var O;
      return !!((O = se.package) != null && O.latest_version);
    }
    function Oe(se) {
      switch (se) {
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
    function Qe(se) {
      return se.filter((O) => O.installed && O.tracked).filter((O) => O.name !== "comfygit-manager").map((O) => ({
        package_id: O.registry_id || O.name,
        source: O.source
      })).filter((O, re, Je) => Je.findIndex((it) => it.package_id === O.package_id) === re).sort((O, re) => {
        const Je = Oe(O.source) - Oe(re.source);
        return Je !== 0 ? Je : O.package_id.localeCompare(re.package_id);
      });
    }
    async function pt() {
      S.value = !0, I.value = null;
      try {
        const [se, O] = await Promise.all([
          l(o.workflowName),
          g()
        ]);
        _.value = se, b.value = Qe(O.nodes), Q(se);
      } catch (se) {
        I.value = se instanceof Error ? se.message : "Failed to analyze workflow";
      } finally {
        S.value = !1;
      }
    }
    function Q(se) {
      N.value.clear();
      for (const O of se.nodes.unresolved)
        O.saved_choice && N.value.set(O.reference.node_type, O.saved_choice);
      for (const O of se.nodes.resolved)
        O.saved_choice && N.value.set(O.reference.node_type, O.saved_choice);
      for (const O of se.nodes.ambiguous)
        O.saved_choice && N.value.set(O.reference.node_type, O.saved_choice);
      for (const O of se.nodes.uninstallable)
        O.saved_choice && N.value.set(O.reference.node_type, O.saved_choice);
    }
    function pe() {
      M.value.includes("analysis") || M.value.push("analysis"), we.value ? E.value = "nodes" : ee.value ? E.value = "packages" : oe.value ? E.value = "models" : E.value = "review";
    }
    function P(se) {
      N.value.set(se, { action: "optional" });
    }
    function U(se) {
      N.value.set(se, { action: "skip" });
    }
    function J(se, O) {
      var Je;
      const re = ae.value.find((it) => it.node_type === se);
      (Je = re == null ? void 0 : re.options) != null && Je[O] && N.value.set(se, {
        action: "install",
        package_id: re.options[O].package_id
      });
    }
    function Te(se, O, re = {}) {
      N.value.set(se, {
        action: "install",
        package_id: O,
        install_source: re.install_source,
        repository: re.repository,
        version: re.version
      });
    }
    function Le(se, O) {
      N.value.set(se, {
        action: "map-installed",
        package_id: O
      });
    }
    function Ke(se) {
      N.value.delete(se);
    }
    function Pe(se) {
      return N.value.get(se);
    }
    function Ye(se) {
      const O = Pe(se);
      return O ? O.action === "optional" ? "Will be marked optional" : O.action === "skip" ? "Will be skipped" : O.action === "install" ? O.install_source === "git" ? "Will install via Git" : "Will install from Registry" : "Undecided" : "Undecided";
    }
    function nt(se, O) {
      var it;
      const re = (it = se.package) == null ? void 0 : it.package_id;
      if (!re) return;
      const Je = {
        action: "install",
        package_id: re,
        version: se.package.latest_version || null,
        install_source: O
      };
      O === "git" && se.package.repository && (Je.repository = se.package.repository), N.value.set(se.reference.node_type, Je);
    }
    function St(se) {
      N.value.set(se, { action: "optional" });
    }
    function Vt(se) {
      N.value.set(se, { action: "skip" });
    }
    function Ct(se) {
      N.value.delete(se);
    }
    function Tt(se) {
      V.value.has(se) ? V.value.delete(se) : V.value.add(se);
    }
    function es(se) {
      F.value.set(se, { action: "optional" });
    }
    function It(se) {
      F.value.set(se, { action: "skip" });
    }
    function Ws(se, O) {
      var Je;
      const re = Ee.value.find((it) => it.filename === se);
      (Je = re == null ? void 0 : re.options) != null && Je[O] && F.value.set(se, {
        action: "select",
        selected_model: re.options[O].model
      });
    }
    function Ms(se, O, re) {
      F.value.set(se, {
        action: "download",
        url: O,
        target_path: re
      });
    }
    function Gs(se) {
      F.value.delete(se);
    }
    async function js(se) {
      try {
        await p(se);
      } catch (O) {
        I.value = O instanceof Error ? O.message : "Failed to open file location";
      }
    }
    async function Fo() {
      C.value = !0, I.value = null, v(), d.phase = "resolving", E.value = "applying";
      try {
        const se = await r(o.workflowName, N.value, F.value, V.value);
        se.models_to_download && se.models_to_download.length > 0 && u(o.workflowName, se.models_to_download), d.nodesMarkedOptional = se.nodes_marked_optional || [], d.nodesMapped = se.nodes_mapped || [];
        const O = Array.from(N.value.values()).map((tt) => {
          if ((tt == null ? void 0 : tt.action) !== "install" || tt.install_source !== "git")
            return null;
          const ns = tt.repository, Lt = tt.package_id;
          return !ns || !Lt ? null : {
            id: Lt,
            repository: ns,
            selectedVersion: tt.version || "latest"
          };
        }).filter((tt) => !!tt), re = new Set(O.map((tt) => tt.id)), Je = new Set(
          Array.from(N.value.values()).filter((tt) => (tt == null ? void 0 : tt.action) === "install" && !!tt.package_id).map((tt) => tt.package_id)
        ), it = [
          ...se.nodes_to_install || [],
          ...T.value.filter((tt) => !Je.has(tt.package.package_id)).map((tt) => tt.package.package_id)
        ];
        d.nodesToInstall = [...new Set(it)].filter((tt) => !re.has(tt)), d.nodesToInstall.length > 0 && await c(o.workflowName);
        for (const tt of O)
          await w({
            id: tt.id,
            version: tt.selectedVersion,
            selected_version: tt.selectedVersion,
            repository: tt.repository,
            install_source: "git",
            mode: "remote",
            channel: "default"
          }), d.needsRestart = !0;
        d.phase = "complete", await f(), window.dispatchEvent(new CustomEvent("comfygit:status-refresh")), a("refresh"), a("install");
      } catch (se) {
        I.value = se instanceof Error ? se.message : "Failed to apply resolution", d.error = I.value, d.phase = "error";
      } finally {
        C.value = !1;
      }
    }
    function Vo() {
      a("refresh"), a("restart"), a("close");
    }
    async function Ps() {
      var O;
      const se = ((O = d.nodeInstallProgress) == null ? void 0 : O.completedNodes.filter((re) => !re.success).map((re) => re.node_id)) || [];
      if (se.length !== 0) {
        d.phase = "installing", d.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: se.length
        }, d.nodesToInstall = se, d.nodesInstalled = [], d.installError = void 0;
        try {
          await c(o.workflowName), d.phase = "complete";
        } catch (re) {
          d.error = re instanceof Error ? re.message : "Retry failed", d.phase = "error";
        }
      }
    }
    return lt(pt), (se, O) => (n(), L($t, {
      title: `Resolve Dependencies: ${e.workflowName}`,
      size: "lg",
      loading: S.value,
      error: I.value || void 0,
      "fixed-height": !0,
      onClose: O[1] || (O[1] = (re) => a("close"))
    }, {
      body: h(() => [
        S.value && !_.value ? (n(), i("div", $0, [...O[2] || (O[2] = [
          s("div", { class: "loading-spinner" }, null, -1),
          s("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : _.value ? (n(), i("div", C0, [
          $(Ay, {
            steps: D.value,
            "current-step": E.value,
            "completed-steps": M.value,
            "step-stats": _e.value,
            onStepChange: Z
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          E.value === "analysis" ? (n(), i("div", x0, [
            s("div", S0, [
              s("div", I0, [
                O[3] || (O[3] = s("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                s("p", E0, " Found " + m(_.value.stats.total_nodes) + " nodes and " + m(_.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              s("div", T0, [
                s("div", M0, [
                  O[16] || (O[16] = s("div", { class: "stat-header" }, "Nodes", -1)),
                  s("div", P0, [
                    te.value > 0 ? (n(), i("div", R0, [
                      O[4] || (O[4] = s("span", { class: "stat-icon" }, "✓", -1)),
                      s("span", L0, m(te.value), 1),
                      O[5] || (O[5] = s("span", { class: "stat-label" }, "resolved", -1))
                    ])) : y("", !0),
                    _.value.stats.packages_needing_installation > 0 ? (n(), i("div", D0, [
                      O[6] || (O[6] = s("span", { class: "stat-icon" }, "⬇", -1)),
                      s("span", N0, m(_.value.stats.packages_needing_installation), 1),
                      O[7] || (O[7] = s("span", { class: "stat-label" }, "to install", -1))
                    ])) : y("", !0),
                    Y.value > 0 ? (n(), i("div", U0, [
                      O[8] || (O[8] = s("span", { class: "stat-icon" }, "?", -1)),
                      s("span", O0, m(Y.value), 1),
                      O[9] || (O[9] = s("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    me.value.length > 0 ? (n(), i("div", A0, [
                      O[10] || (O[10] = s("span", { class: "stat-icon" }, "⚠", -1)),
                      s("span", z0, m(me.value.length), 1),
                      O[11] || (O[11] = s("span", { class: "stat-label" }, "requires newer ComfyUI", -1))
                    ])) : y("", !0),
                    q.value > 0 ? (n(), i("div", F0, [
                      O[12] || (O[12] = s("span", { class: "stat-icon" }, "⚠", -1)),
                      s("span", V0, m(q.value), 1),
                      O[13] || (O[13] = s("span", { class: "stat-label" }, "community-mapped", -1))
                    ])) : y("", !0),
                    le.value > 0 ? (n(), i("div", B0, [
                      O[14] || (O[14] = s("span", { class: "stat-icon" }, "✗", -1)),
                      s("span", W0, m(le.value), 1),
                      O[15] || (O[15] = s("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ]),
                s("div", G0, [
                  O[27] || (O[27] = s("div", { class: "stat-header" }, "Models", -1)),
                  s("div", j0, [
                    s("div", H0, [
                      O[17] || (O[17] = s("span", { class: "stat-icon" }, "✓", -1)),
                      s("span", q0, m(_.value.models.resolved.length - _.value.stats.download_intents - _.value.stats.models_with_category_mismatch), 1),
                      O[18] || (O[18] = s("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    _.value.stats.download_intents > 0 ? (n(), i("div", K0, [
                      O[19] || (O[19] = s("span", { class: "stat-icon" }, "⬇", -1)),
                      s("span", J0, m(_.value.stats.download_intents), 1),
                      O[20] || (O[20] = s("span", { class: "stat-label" }, "pending download", -1))
                    ])) : y("", !0),
                    Se.value ? (n(), i("div", Q0, [
                      O[21] || (O[21] = s("span", { class: "stat-icon" }, "⚠", -1)),
                      s("span", Y0, m(Me.value.length), 1),
                      O[22] || (O[22] = s("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : y("", !0),
                    _.value.models.ambiguous.length > 0 ? (n(), i("div", X0, [
                      O[23] || (O[23] = s("span", { class: "stat-icon" }, "?", -1)),
                      s("span", Z0, m(_.value.models.ambiguous.length), 1),
                      O[24] || (O[24] = s("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    _.value.models.unresolved.length > 0 ? (n(), i("div", e_, [
                      O[25] || (O[25] = s("span", { class: "stat-icon" }, "✗", -1)),
                      s("span", t_, m(_.value.models.unresolved.length), 1),
                      O[26] || (O[26] = s("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ])
              ]),
              ue.value > 0 ? (n(), i("div", s_, [
                O[28] || (O[28] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", o_, m(ue.value) + " item" + m(ue.value === 1 ? "" : "s") + " need your input", 1)
              ])) : H.value ? (n(), i("div", n_, [
                O[29] || (O[29] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", a_, m(me.value.length) + " node type" + m(me.value.length > 1 ? "s are" : " is") + " blocked and require manual action", 1)
              ])) : q.value > 0 ? (n(), i("div", l_, [
                O[30] || (O[30] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", i_, m(q.value) + " community-mapped node type" + m(q.value > 1 ? "s need" : " needs") + " installation choices", 1)
              ])) : ce.value ? (n(), i("div", r_, [
                O[31] || (O[31] = s("span", { class: "status-icon" }, "⬇", -1)),
                s("span", c_, m(_.value.stats.packages_needing_installation) + " package" + m(_.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + m(_.value.stats.nodes_needing_installation) + " node type" + m(_.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + m(de.value ? `, ${_.value.stats.download_intents} model${_.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : de.value ? (n(), i("div", u_, [
                O[32] || (O[32] = s("span", { class: "status-icon" }, "⬇", -1)),
                s("span", d_, m(_.value.stats.download_intents) + " model" + m(_.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to Review to proceed", 1)
              ])) : Se.value ? (n(), i("div", m_, [
                O[33] || (O[33] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", f_, m(Me.value.length) + " model" + m(Me.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (n(), i("div", v_, [...O[34] || (O[34] = [
                s("span", { class: "status-icon" }, "✓", -1),
                s("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              Se.value ? (n(), i("div", p_, [
                O[37] || (O[37] = s("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                s("div", g_, [
                  (n(!0), i(W, null, ye(Me.value, (re) => {
                    var Je, it;
                    return n(), i("div", {
                      key: re.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      s("code", h_, m(re.actual_category) + "/" + m((Je = re.model) == null ? void 0 : Je.filename), 1),
                      O[36] || (O[36] = s("span", { class: "mismatch-arrow" }, "→", -1)),
                      s("code", y_, m((it = re.expected_categories) == null ? void 0 : it[0]) + "/", 1),
                      re.file_path ? (n(), L(Ue, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (tt) => js(re.file_path)
                      }, {
                        default: h(() => [...O[35] || (O[35] = [
                          x(" Open File Location ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : y("", !0)
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              H.value ? (n(), i("div", w_, [
                O[38] || (O[38] = s("h4", { class: "section-subtitle" }, "Blocked node types:", -1)),
                s("div", __, [
                  (n(!0), i(W, null, ye(me.value, (re) => {
                    var Je;
                    return n(), i("div", {
                      key: `vg-${re.reference.node_type}`,
                      class: "mismatch-item"
                    }, [
                      s("code", k_, m(re.reference.node_type), 1),
                      s("span", b_, m(re.guidance || ((Je = _.value.node_guidance) == null ? void 0 : Je[re.reference.node_type]) || "Requires a newer ComfyUI version."), 1)
                    ]);
                  }), 128))
                ])
              ])) : y("", !0)
            ])
          ])) : y("", !0),
          E.value === "nodes" ? (n(), i("div", $_, [
            $(G1, {
              nodes: ae.value,
              "node-choices": N.value,
              "auto-resolved-packages": [],
              "skipped-packages": V.value,
              "installed-node-packs": b.value,
              onMarkOptional: P,
              onSkip: U,
              onOptionSelected: J,
              onManualEntry: Te,
              onInstalledPackSelected: Le,
              onClearChoice: Ke,
              onPackageSkip: Tt
            }, null, 8, ["nodes", "node-choices", "skipped-packages", "installed-node-packs"])
          ])) : y("", !0),
          E.value === "packages" ? (n(), i("div", C_, [
            s("div", x_, [
              O[39] || (O[39] = s("div", null, [
                s("h3", { class: "summary-title" }, "Review Node Packages"),
                s("p", { class: "summary-description" }, " Choose which package-level installs should run. These decisions are separate from mapping unresolved node names. ")
              ], -1)),
              s("span", S_, m(ve.value) + "/" + m(ge.value) + " decided", 1)
            ]),
            be.value.length > 0 ? (n(), i("div", I_, [
              s("div", E_, [
                s("div", null, [
                  s("h4", T_, "Resolved Packages (" + m(be.value.length) + ")", 1),
                  O[40] || (O[40] = s("p", { class: "package-section-description" }, " These packages were matched automatically. Skip any package you do not want installed. ", -1))
                ]),
                s("span", M_, m(Ae.value) + "/" + m(be.value.length) + " to install", 1)
              ]),
              s("div", P_, [
                (n(!0), i(W, null, ye(be.value, (re) => (n(), i("div", {
                  key: re.package_id,
                  class: "package-item"
                }, [
                  s("div", R_, [
                    s("code", L_, m(re.package_id), 1),
                    s("span", D_, m(re.node_types_count) + " node type" + m(re.node_types_count > 1 ? "s" : ""), 1)
                  ]),
                  s("div", N_, [
                    V.value.has(re.package_id) ? (n(), i("span", O_, "Skipped")) : (n(), i("span", U_, "Will Install")),
                    $(Ue, {
                      size: "sm",
                      variant: "secondary",
                      onClick: (Je) => Tt(re.package_id)
                    }, {
                      default: h(() => [
                        x(m(V.value.has(re.package_id) ? "Include" : "Skip"), 1)
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ])
                ]))), 128))
              ])
            ])) : y("", !0),
            B.value.length > 0 ? (n(), i("div", A_, [
              s("div", z_, [
                s("h4", F_, "Community-Mapped Packages (" + m(B.value.length) + ")", 1),
                O[41] || (O[41] = s("p", { class: "community-node-description" }, " These mappings came from community metadata. Use a registry install only when a package version exists; otherwise install from Git or skip. ", -1))
              ]),
              s("div", V_, [
                (n(!0), i(W, null, ye(B.value, (re) => (n(), i("div", {
                  key: `community-${re.reference.node_type}-${re.package.package_id}`,
                  class: "community-node-item"
                }, [
                  s("div", B_, [
                    s("div", W_, [
                      s("code", G_, m(re.reference.node_type), 1),
                      s("span", j_, m(re.package.title || re.package.package_id), 1)
                    ]),
                    s("div", H_, m(re.package.package_id), 1),
                    s("div", q_, [
                      O[42] || (O[42] = x(" Found via community mapping — registry metadata may be incomplete. ", -1)),
                      re.guidance ? (n(), i("span", K_, m(re.guidance), 1)) : y("", !0)
                    ])
                  ]),
                  Pe(re.reference.node_type) ? (n(), i("div", J_, [
                    s("div", Q_, m(Ye(re.reference.node_type)), 1),
                    $(Ue, {
                      class: "change-selection-button",
                      size: "sm",
                      variant: "ghost",
                      onClick: (Je) => Ct(re.reference.node_type)
                    }, {
                      default: h(() => [...O[43] || (O[43] = [
                        x(" Change Selection ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ])) : (n(), i("div", Y_, [
                    Ve(re) ? (n(), L(Ue, {
                      key: 0,
                      class: "community-choice-button install-choice",
                      size: "sm",
                      variant: "secondary",
                      disabled: !re.package.package_id,
                      onClick: (Je) => nt(re, "registry")
                    }, {
                      default: h(() => [...O[44] || (O[44] = [
                        x(" Install from Registry ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled", "onClick"])) : y("", !0),
                    re.package.repository ? (n(), L(Ue, {
                      key: 1,
                      class: "community-choice-button install-choice",
                      size: "sm",
                      variant: "secondary",
                      disabled: !re.package.package_id,
                      onClick: (Je) => nt(re, "git")
                    }, {
                      default: h(() => [...O[45] || (O[45] = [
                        x(" Install via Git ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled", "onClick"])) : y("", !0),
                    $(Ue, {
                      class: "community-choice-button",
                      size: "sm",
                      variant: "secondary",
                      onClick: (Je) => St(re.reference.node_type)
                    }, {
                      default: h(() => [...O[46] || (O[46] = [
                        x(" Optional ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    $(Ue, {
                      class: "community-choice-button",
                      size: "sm",
                      variant: "secondary",
                      onClick: (Je) => Vt(re.reference.node_type)
                    }, {
                      default: h(() => [...O[47] || (O[47] = [
                        x(" Skip ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]))
                ]))), 128))
              ])
            ])) : y("", !0)
          ])) : y("", !0),
          E.value === "models" ? (n(), L(zw, {
            key: 3,
            models: ke.value,
            "model-choices": F.value,
            onMarkOptional: es,
            onSkip: It,
            onOptionSelected: Ws,
            onDownloadUrl: Ms,
            onClearChoice: Gs
          }, null, 8, ["models", "model-choices"])) : y("", !0),
          E.value === "review" ? (n(), i("div", X_, [
            s("div", Z_, [
              O[53] || (O[53] = s("div", { class: "review-header" }, [
                s("h3", { class: "summary-title" }, "Review Your Choices"),
                s("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              s("div", ek, [
                s("div", tk, [
                  s("span", sk, m(fe.value), 1),
                  O[48] || (O[48] = s("span", { class: "stat-label" }, "to install", -1))
                ]),
                s("div", ok, [
                  s("span", nk, m(he.value), 1),
                  O[49] || (O[49] = s("span", { class: "stat-label" }, "to download", -1))
                ]),
                s("div", ak, [
                  s("span", lk, m(je.value), 1),
                  O[50] || (O[50] = s("span", { class: "stat-label" }, "optional", -1))
                ]),
                s("div", ik, [
                  s("span", rk, m(We.value), 1),
                  O[51] || (O[51] = s("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              be.value.length > 0 ? (n(), i("div", ck, [
                s("h4", uk, "Node Packages (" + m(be.value.length) + ")", 1),
                s("div", dk, [
                  (n(!0), i(W, null, ye(be.value, (re) => (n(), i("div", {
                    key: re.package_id,
                    class: "review-item"
                  }, [
                    s("code", mk, m(re.package_id), 1),
                    s("div", fk, [
                      V.value.has(re.package_id) ? (n(), i("span", pk, "Skipped")) : (n(), i("span", vk, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : y("", !0),
              B.value.length > 0 ? (n(), i("div", gk, [
                s("h4", hk, "Community-Mapped Packages (" + m(B.value.length) + ")", 1),
                s("div", yk, [
                  (n(!0), i(W, null, ye(B.value, (re) => {
                    var Je, it, tt;
                    return n(), i("div", {
                      key: `review-community-${re.reference.node_type}-${re.package.package_id}`,
                      class: "review-item"
                    }, [
                      s("code", wk, m(re.reference.node_type), 1),
                      s("div", _k, [
                        ((Je = Pe(re.reference.node_type)) == null ? void 0 : Je.action) === "install" ? (n(), i("span", kk, m(((it = Pe(re.reference.node_type)) == null ? void 0 : it.install_source) === "git" ? "Install via Git" : "Install from Registry"), 1)) : ((tt = Pe(re.reference.node_type)) == null ? void 0 : tt.action) === "optional" ? (n(), i("span", bk, " Optional ")) : (n(), i("span", $k, " Skip "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              ae.value.length > 0 ? (n(), i("div", Ck, [
                s("h4", xk, "Node Choices (" + m(ae.value.length) + ")", 1),
                s("div", Sk, [
                  (n(!0), i(W, null, ye(ae.value, (re) => {
                    var Je, it, tt, ns, Lt, Rs;
                    return n(), i("div", {
                      key: re.node_type,
                      class: "review-item"
                    }, [
                      s("code", Ik, m(re.node_type), 1),
                      s("div", Ek, [
                        N.value.has(re.node_type) ? (n(), i(W, { key: 0 }, [
                          ((Je = N.value.get(re.node_type)) == null ? void 0 : Je.action) === "install" ? (n(), i("span", Tk, m((it = N.value.get(re.node_type)) == null ? void 0 : it.package_id), 1)) : ((tt = N.value.get(re.node_type)) == null ? void 0 : tt.action) === "map-installed" ? (n(), i("span", Mk, " Mapped to " + m((ns = N.value.get(re.node_type)) == null ? void 0 : ns.package_id), 1)) : ((Lt = N.value.get(re.node_type)) == null ? void 0 : Lt.action) === "optional" ? (n(), i("span", Pk, " Optional ")) : ((Rs = N.value.get(re.node_type)) == null ? void 0 : Rs.action) === "skip" ? (n(), i("span", Rk, " Skip ")) : y("", !0)
                        ], 64)) : (n(), i("span", Lk, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              X.value.length > 0 ? (n(), i("div", Dk, [
                s("h4", Nk, "Models to Download (" + m(X.value.length) + ")", 1),
                s("div", Uk, [
                  (n(!0), i(W, null, ye(X.value, (re) => (n(), i("div", {
                    key: re.filename,
                    class: "review-item download-item"
                  }, [
                    s("div", Ok, [
                      s("code", Ak, m(re.filename), 1),
                      s("div", zk, [
                        s("span", Fk, "→ " + m(re.target_path), 1),
                        re.url ? (n(), i("span", {
                          key: 0,
                          class: "download-url",
                          title: re.url
                        }, m(G(re.url)), 9, Vk)) : y("", !0)
                      ])
                    ]),
                    O[52] || (O[52] = s("span", { class: "choice-badge download" }, "Will Download", -1))
                  ]))), 128))
                ])
              ])) : y("", !0),
              ke.value.length > 0 ? (n(), i("div", Bk, [
                s("h4", Wk, "Models (" + m(ke.value.length) + ")", 1),
                s("div", Gk, [
                  (n(!0), i(W, null, ye(ke.value, (re) => {
                    var Je, it, tt, ns, Lt, Rs, Hs;
                    return n(), i("div", {
                      key: re.filename,
                      class: "review-item"
                    }, [
                      s("code", jk, m(re.filename), 1),
                      s("div", Hk, [
                        F.value.has(re.filename) ? (n(), i(W, { key: 0 }, [
                          ((Je = F.value.get(re.filename)) == null ? void 0 : Je.action) === "select" ? (n(), i("span", qk, m((tt = (it = F.value.get(re.filename)) == null ? void 0 : it.selected_model) == null ? void 0 : tt.filename), 1)) : ((ns = F.value.get(re.filename)) == null ? void 0 : ns.action) === "download" ? (n(), i("span", Kk, " Download ")) : ((Lt = F.value.get(re.filename)) == null ? void 0 : Lt.action) === "optional" ? (n(), i("span", Jk, " Optional ")) : ((Rs = F.value.get(re.filename)) == null ? void 0 : Rs.action) === "skip" ? (n(), i("span", Qk, " Skip ")) : ((Hs = F.value.get(re.filename)) == null ? void 0 : Hs.action) === "cancel_download" ? (n(), i("span", Yk, " Cancel Download ")) : y("", !0)
                        ], 64)) : re.is_download_intent ? (n(), i("span", Xk, " Pending Download ")) : (n(), i("span", Zk, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              Ne.value.length === 0 && B.value.length === 0 && ae.value.length === 0 && ke.value.length === 0 ? (n(), i("div", eb, " No dependencies need resolution. ")) : y("", !0)
            ])
          ])) : y("", !0),
          E.value === "applying" ? (n(), L(b0, {
            key: 5,
            progress: ot(d),
            onRestart: Vo,
            onRetryFailed: Ps
          }, null, 8, ["progress"])) : y("", !0)
        ])) : y("", !0)
      ]),
      footer: h(() => [
        E.value !== "analysis" && E.value !== "applying" ? (n(), L(Ue, {
          key: 0,
          variant: "secondary",
          disabled: C.value,
          onClick: Fe
        }, {
          default: h(() => [...O[54] || (O[54] = [
            x(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : y("", !0),
        O[56] || (O[56] = s("div", { class: "footer-spacer" }, null, -1)),
        E.value !== "applying" || ot(d).phase === "complete" || ot(d).phase === "error" ? (n(), L(Ue, {
          key: 1,
          variant: "secondary",
          onClick: O[0] || (O[0] = (re) => a("close"))
        }, {
          default: h(() => [
            x(m(ot(d).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : y("", !0),
        E.value === "analysis" ? (n(), L(Ue, {
          key: 2,
          variant: "primary",
          disabled: S.value,
          onClick: pe
        }, {
          default: h(() => [
            x(m(ze.value === "review" ? "Continue to Review →" : "Continue"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : y("", !0),
        E.value === "nodes" || E.value === "packages" || E.value === "models" ? (n(), L(Ue, {
          key: 3,
          variant: "primary",
          onClick: De
        }, {
          default: h(() => [
            x(" Continue to " + m(He()) + " → ", 1)
          ]),
          _: 1
        })) : y("", !0),
        E.value === "review" ? (n(), L(Ue, {
          key: 4,
          variant: "primary",
          disabled: C.value,
          loading: C.value,
          onClick: Fo
        }, {
          default: h(() => [...O[55] || (O[55] = [
            x(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : y("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), sb = /* @__PURE__ */ Ie(tb, [["__scopeId", "data-v-bdcbbe0a"]]), ob = { class: "search-input-wrapper" }, nb = ["value", "placeholder"], ab = /* @__PURE__ */ xe({
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
    const o = e, a = t, l = k(null);
    let r;
    function c(d) {
      const v = d.target.value;
      o.debounce > 0 ? (clearTimeout(r), r = window.setTimeout(() => {
        a("update:modelValue", v);
      }, o.debounce)) : a("update:modelValue", v);
    }
    function u() {
      var d;
      a("update:modelValue", ""), a("clear"), (d = l.value) == null || d.focus();
    }
    return lt(() => {
      o.autoFocus && l.value && l.value.focus();
    }), (d, v) => (n(), i("div", ob, [
      s("input", {
        ref_key: "inputRef",
        ref: l,
        value: e.modelValue,
        type: "text",
        placeholder: e.placeholder,
        class: "search-input",
        onInput: c,
        onKeyup: fs(u, ["escape"])
      }, null, 40, nb),
      e.clearable && e.modelValue ? (n(), i("button", {
        key: 0,
        class: "clear-button",
        onClick: u,
        title: "Clear search"
      }, " ✕ ")) : y("", !0)
    ]));
  }
}), lb = /* @__PURE__ */ Ie(ab, [["__scopeId", "data-v-266f857a"]]), ib = { class: "search-bar" }, rb = /* @__PURE__ */ xe({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(e) {
    return (t, o) => (n(), i("div", ib, [
      $(lb, {
        "model-value": e.modelValue,
        placeholder: e.placeholder,
        debounce: e.debounce,
        clearable: e.clearable,
        "onUpdate:modelValue": o[0] || (o[0] = (a) => t.$emit("update:modelValue", a)),
        onClear: o[1] || (o[1] = (a) => t.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), po = /* @__PURE__ */ Ie(rb, [["__scopeId", "data-v-3d51bbfd"]]), cb = { class: "section-group" }, ub = {
  key: 0,
  class: "section-content"
}, db = /* @__PURE__ */ xe({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(e, { emit: t }) {
    const o = e, a = t, l = k(o.initiallyExpanded);
    function r() {
      o.collapsible && (l.value = !l.value, a("toggle", l.value));
    }
    return (c, u) => (n(), i("section", cb, [
      $(is, {
        count: e.count,
        clickable: e.collapsible,
        expanded: l.value,
        onClick: r
      }, {
        default: h(() => [
          x(m(e.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !e.collapsible || l.value ? (n(), i("div", ub, [
        at(c.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), Et = /* @__PURE__ */ Ie(db, [["__scopeId", "data-v-c48e33ed"]]), mb = { class: "item-header" }, fb = {
  key: 0,
  class: "item-icon"
}, vb = { class: "item-info" }, pb = {
  key: 0,
  class: "item-title"
}, gb = {
  key: 1,
  class: "item-subtitle"
}, hb = {
  key: 0,
  class: "item-details"
}, yb = {
  key: 1,
  class: "item-actions"
}, wb = /* @__PURE__ */ xe({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const o = e, a = R(() => o.status ? `status-${o.status}` : "");
    return (l, r) => (n(), i("div", {
      class: Be(["item-card", { clickable: e.clickable, compact: e.compact }, a.value]),
      onClick: r[0] || (r[0] = (c) => e.clickable && l.$emit("click"))
    }, [
      s("div", mb, [
        l.$slots.icon ? (n(), i("span", fb, [
          at(l.$slots, "icon", {}, void 0)
        ])) : y("", !0),
        s("div", vb, [
          l.$slots.title ? (n(), i("div", pb, [
            at(l.$slots, "title", {}, void 0)
          ])) : y("", !0),
          l.$slots.subtitle ? (n(), i("div", gb, [
            at(l.$slots, "subtitle", {}, void 0)
          ])) : y("", !0)
        ])
      ]),
      l.$slots.details ? (n(), i("div", hb, [
        at(l.$slots, "details", {}, void 0)
      ])) : y("", !0),
      l.$slots.actions ? (n(), i("div", yb, [
        at(l.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Wt = /* @__PURE__ */ Ie(wb, [["__scopeId", "data-v-cc435e0e"]]), _b = { class: "empty-state" }, kb = {
  key: 0,
  class: "empty-icon"
}, bb = { class: "empty-message" }, $b = /* @__PURE__ */ xe({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(e) {
    return (t, o) => (n(), i("div", _b, [
      e.icon ? (n(), i("div", kb, m(e.icon), 1)) : y("", !0),
      s("p", bb, m(e.message), 1),
      e.actionLabel ? (n(), L(Re, {
        key: 1,
        variant: e.actionVariant || "secondary",
        size: "sm",
        onClick: o[0] || (o[0] = (a) => t.$emit("action"))
      }, {
        default: h(() => [
          x(m(e.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : y("", !0)
    ]));
  }
}), hs = /* @__PURE__ */ Ie($b, [["__scopeId", "data-v-4466284f"]]), Cb = { class: "loading-state" }, xb = { class: "loading-message" }, Sb = /* @__PURE__ */ xe({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(e) {
    return (t, o) => (n(), i("div", Cb, [
      o[0] || (o[0] = s("div", { class: "spinner" }, null, -1)),
      s("p", xb, m(e.message), 1)
    ]));
  }
}), Es = /* @__PURE__ */ Ie(Sb, [["__scopeId", "data-v-ad8436c9"]]), Ib = { class: "error-state" }, Eb = { class: "error-message" }, Tb = /* @__PURE__ */ xe({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(e) {
    return (t, o) => (n(), i("div", Ib, [
      o[2] || (o[2] = s("span", { class: "error-icon" }, "⚠", -1)),
      s("p", Eb, m(e.message), 1),
      e.retry ? (n(), L(Re, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: o[0] || (o[0] = (a) => t.$emit("retry"))
      }, {
        default: h(() => [...o[1] || (o[1] = [
          x(" Retry ", -1)
        ])]),
        _: 1
      })) : y("", !0)
    ]));
  }
}), Ts = /* @__PURE__ */ Ie(Tb, [["__scopeId", "data-v-5397be48"]]), Mb = /* @__PURE__ */ xe({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(e, { expose: t, emit: o }) {
    const a = o, { getWorkflows: l } = ct(), r = k([]), c = k(!1), u = k(null), d = k(""), v = k(!0), f = k(!1), p = k(!1), w = k(!1), g = k(null), _ = R(
      () => r.value.filter((K) => K.status === "broken")
    ), b = R(
      () => r.value.filter((K) => K.status === "new")
    ), S = R(
      () => r.value.filter((K) => K.status === "modified")
    ), C = R(
      () => r.value.filter((K) => K.status === "synced")
    ), I = R(() => {
      if (!d.value.trim()) return r.value;
      const K = d.value.toLowerCase();
      return r.value.filter((ee) => ee.name.toLowerCase().includes(K));
    }), E = R(
      () => _.value.filter(
        (K) => !d.value.trim() || K.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), M = R(
      () => b.value.filter(
        (K) => !d.value.trim() || K.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), N = R(
      () => S.value.filter(
        (K) => !d.value.trim() || K.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), F = R(
      () => C.value.filter(
        (K) => !d.value.trim() || K.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), V = R(
      () => f.value ? F.value : F.value.slice(0, 5)
    );
    async function D(K = !1) {
      c.value = !0, u.value = null;
      try {
        r.value = await l(K);
      } catch (ee) {
        u.value = ee instanceof Error ? ee.message : "Failed to load workflows";
      } finally {
        c.value = !1;
      }
    }
    t({ loadWorkflows: D });
    function q(K) {
      g.value = K, p.value = !0;
    }
    function ue(K) {
      g.value = K, p.value = !1, w.value = !0;
    }
    function le(K) {
      g.value = K, window.dispatchEvent(new CustomEvent("comfygit:open-io-mapping", {
        detail: { workflowName: K }
      })), window.dispatchEvent(new CustomEvent("comfygit:close-panel"));
    }
    function Y(K) {
      var Me;
      const te = (Me = K.detail) == null ? void 0 : Me.workflowName;
      te && le(te);
    }
    function me() {
    }
    function ne() {
      a("refresh", { refreshWorkflows: !1 });
    }
    async function B() {
      w.value = !1, await D(!0);
    }
    async function H() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function we(K) {
      return K.replace(/uninstallable node mappings?/gi, (ee) => ee.toLowerCase().endsWith("s") ? "community packages" : "community package").replace(/no installable package versions?/gi, "need community packages").replace(/\bare uninstallable\b/gi, "need community packages").replace(/\buninstallable\b/gi, "community-mapped");
    }
    function oe(K) {
      if (K.issue_summary && K.issue_summary.trim().length > 0)
        return we(K.issue_summary);
      const ee = [];
      return K.version_gated_count && K.version_gated_count > 0 && ee.push(`${K.version_gated_count} node${K.version_gated_count > 1 ? "s" : ""} require newer ComfyUI`), K.uninstallable_count && K.uninstallable_count > 0 && ee.push(`${K.uninstallable_count} node${K.uninstallable_count > 1 ? "s" : ""} need community packages`), K.missing_nodes > 0 && ee.push(`${K.missing_nodes} missing node${K.missing_nodes > 1 ? "s" : ""}`), K.missing_models > 0 && ee.push(`${K.missing_models} missing model${K.missing_models > 1 ? "s" : ""}`), K.models_with_category_mismatch && K.models_with_category_mismatch > 0 && ee.push(`${K.models_with_category_mismatch} model${K.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), K.pending_downloads && K.pending_downloads > 0 && ee.push(`${K.pending_downloads} pending download${K.pending_downloads > 1 ? "s" : ""}`), ee.length > 0 ? ee.join(", ") : "Has issues";
    }
    function de(K) {
      const ee = K.sync_state === "new" ? "New" : K.sync_state === "modified" ? "Modified" : K.sync_state === "synced" ? "Synced" : K.sync_state, te = ce(K);
      return K.has_path_sync_issues && K.models_needing_path_sync && K.models_needing_path_sync > 0 ? `${K.models_needing_path_sync} model path${K.models_needing_path_sync > 1 ? "s" : ""} need${K.models_needing_path_sync === 1 ? "s" : ""} sync · ${te}` : `${ee || "Unknown"} · ${te}`;
    }
    function ce(K) {
      const ee = K.contract_summary;
      return !ee || !ee.has_contract ? "No contract" : ee.status === "incomplete" ? `${ee.input_count} in / ${ee.output_count} out · incomplete` : `${ee.input_count} in / ${ee.output_count} out`;
    }
    return lt(() => {
      D(), window.addEventListener("comfygit:open-workflow-contract", Y);
    }), bn(() => {
      window.removeEventListener("comfygit:open-workflow-contract", Y);
    }), (K, ee) => (n(), i(W, null, [
      $(zt, null, {
        header: h(() => [
          $(Ft, { title: "WORKFLOWS" })
        ]),
        search: h(() => [
          $(po, {
            modelValue: d.value,
            "onUpdate:modelValue": ee[0] || (ee[0] = (te) => d.value = te),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          c.value ? (n(), L(Es, {
            key: 0,
            message: "Loading workflows..."
          })) : u.value ? (n(), L(Ts, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: D
          }, null, 8, ["message"])) : (n(), i(W, { key: 2 }, [
            E.value.length ? (n(), L(Et, {
              key: 0,
              title: "BROKEN",
              count: E.value.length
            }, {
              default: h(() => [
                (n(!0), i(W, null, ye(E.value, (te) => (n(), L(Wt, {
                  key: te.name,
                  status: "broken"
                }, {
                  icon: h(() => [...ee[6] || (ee[6] = [
                    x("⚠", -1)
                  ])]),
                  title: h(() => [
                    x(m(te.name), 1)
                  ]),
                  subtitle: h(() => [
                    x(m(oe(te)), 1)
                  ]),
                  actions: h(() => [
                    $(Re, {
                      variant: "primary",
                      size: "sm",
                      onClick: (Me) => ue(te.name)
                    }, {
                      default: h(() => [...ee[7] || (ee[7] = [
                        x(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    $(Re, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Me) => q(te.name)
                    }, {
                      default: h(() => [...ee[8] || (ee[8] = [
                        x(" Details ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    $(Re, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Me) => le(te.name)
                    }, {
                      default: h(() => [...ee[9] || (ee[9] = [
                        x(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            M.value.length ? (n(), L(Et, {
              key: 1,
              title: "NEW",
              count: M.value.length
            }, {
              default: h(() => [
                (n(!0), i(W, null, ye(M.value, (te) => (n(), L(Wt, {
                  key: te.name,
                  status: te.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: h(() => [
                    x(m(te.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: h(() => [
                    x(m(te.name), 1)
                  ]),
                  subtitle: h(() => [
                    x(m(de(te)), 1)
                  ]),
                  actions: h(() => [
                    $(Re, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Me) => q(te.name)
                    }, {
                      default: h(() => [...ee[10] || (ee[10] = [
                        x(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    $(Re, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Me) => le(te.name)
                    }, {
                      default: h(() => [...ee[11] || (ee[11] = [
                        x(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            N.value.length ? (n(), L(Et, {
              key: 2,
              title: "MODIFIED",
              count: N.value.length
            }, {
              default: h(() => [
                (n(!0), i(W, null, ye(N.value, (te) => (n(), L(Wt, {
                  key: te.name,
                  status: te.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: h(() => [...ee[12] || (ee[12] = [
                    x("⚡", -1)
                  ])]),
                  title: h(() => [
                    x(m(te.name), 1)
                  ]),
                  subtitle: h(() => [
                    x(m(de(te)), 1)
                  ]),
                  actions: h(() => [
                    $(Re, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Me) => q(te.name)
                    }, {
                      default: h(() => [...ee[13] || (ee[13] = [
                        x(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    $(Re, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Me) => le(te.name)
                    }, {
                      default: h(() => [...ee[14] || (ee[14] = [
                        x(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            F.value.length ? (n(), L(Et, {
              key: 3,
              title: "SYNCED",
              count: F.value.length,
              collapsible: !0,
              "initially-expanded": v.value,
              onToggle: ee[2] || (ee[2] = (te) => v.value = te)
            }, {
              default: h(() => [
                (n(!0), i(W, null, ye(V.value, (te) => (n(), L(Wt, {
                  key: te.name,
                  status: te.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: h(() => [
                    x(m(te.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: h(() => [
                    x(m(te.name), 1)
                  ]),
                  subtitle: h(() => [
                    x(m(de(te)), 1)
                  ]),
                  actions: h(() => [
                    $(Re, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Me) => q(te.name)
                    }, {
                      default: h(() => [...ee[15] || (ee[15] = [
                        x(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    $(Re, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Me) => le(te.name)
                    }, {
                      default: h(() => [...ee[16] || (ee[16] = [
                        x(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !f.value && F.value.length > 5 ? (n(), L(Re, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: ee[1] || (ee[1] = (te) => f.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: h(() => [
                    x(" View all " + m(F.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : y("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : y("", !0),
            I.value.length ? y("", !0) : (n(), L(hs, {
              key: 4,
              icon: "📭",
              message: d.value ? `No workflows match '${d.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      p.value && g.value ? (n(), L(Sy, {
        key: 0,
        "workflow-name": g.value,
        onClose: ee[3] || (ee[3] = (te) => p.value = !1),
        onResolve: ee[4] || (ee[4] = (te) => ue(g.value)),
        onRefresh: ee[5] || (ee[5] = (te) => a("refresh"))
      }, null, 8, ["workflow-name"])) : y("", !0),
      w.value && g.value ? (n(), L(sb, {
        key: 1,
        "workflow-name": g.value,
        onClose: B,
        onInstall: me,
        onRefresh: ne,
        onRestart: H
      }, null, 8, ["workflow-name"])) : y("", !0)
    ], 64));
  }
}), Pb = /* @__PURE__ */ Ie(Mb, [["__scopeId", "data-v-244e59aa"]]), Rb = /* @__PURE__ */ xe({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(e) {
    return (t, o) => (n(), i("div", {
      class: Be(["summary-bar", e.variant])
    }, [
      at(t.$slots, "default", {}, void 0)
    ], 2));
  }
}), Il = /* @__PURE__ */ Ie(Rb, [["__scopeId", "data-v-ccb7816e"]]);
async function El(e) {
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
const Lb = {
  key: 0,
  class: "model-details"
}, Db = { class: "detail-section" }, Nb = { class: "detail-row" }, Ub = { class: "detail-value mono" }, Ob = { class: "detail-row" }, Ab = { class: "detail-value mono" }, zb = { class: "detail-row" }, Fb = { class: "detail-value mono" }, Vb = {
  key: 0,
  class: "detail-row"
}, Bb = { class: "detail-value" }, Wb = ["disabled"], Gb = {
  key: 1,
  class: "detail-row"
}, jb = { class: "detail-value hash-error" }, Hb = { class: "detail-row" }, qb = { class: "detail-value" }, Kb = { class: "detail-row" }, Jb = { class: "detail-value" }, Qb = { class: "detail-row" }, Yb = { class: "detail-value" }, Xb = { class: "detail-section" }, Zb = { class: "section-header" }, e2 = {
  key: 0,
  class: "locations-list"
}, t2 = { class: "location-path mono" }, s2 = {
  key: 0,
  class: "location-modified"
}, o2 = ["onClick"], n2 = {
  key: 1,
  class: "empty-state"
}, a2 = { class: "detail-section" }, l2 = { class: "section-header-row" }, i2 = { class: "section-header" }, r2 = {
  key: 0,
  class: "sources-list"
}, c2 = { class: "source-type" }, u2 = ["href"], d2 = ["disabled", "onClick"], m2 = {
  key: 1,
  class: "empty-state"
}, f2 = {
  key: 2,
  class: "source-error"
}, v2 = {
  key: 3,
  class: "source-success"
}, p2 = /* @__PURE__ */ xe({
  __name: "ModelDetailModal",
  props: {
    identifier: {},
    overlayZIndex: {}
  },
  emits: ["close", "sourceSaved"],
  setup(e, { emit: t }) {
    const o = e, a = t, { getModelDetails: l, removeModelSource: r, computeModelHashes: c } = ct(), u = k(null), d = k(!0), v = k(null), f = k(null), p = k(null), w = k(null), g = k(!1), _ = k(!1), b = k(null), S = R(() => {
      var le;
      return !!((le = u.value) != null && le.hash && (!u.value.blake3 || !u.value.sha256));
    }), C = k(null);
    let I = null;
    function E(le, Y = "success", me = 2e3) {
      I && clearTimeout(I), C.value = { message: le, type: Y }, I = setTimeout(() => {
        C.value = null;
      }, me);
    }
    function M(le) {
      if (!le) return "Unknown";
      const Y = 1024 * 1024 * 1024, me = 1024 * 1024;
      return le >= Y ? `${(le / Y).toFixed(1)} GB` : le >= me ? `${(le / me).toFixed(0)} MB` : `${(le / 1024).toFixed(0)} KB`;
    }
    async function N(le) {
      try {
        await El(le), E("Copied to clipboard!");
      } catch (Y) {
        console.error("Failed to copy:", Y), E("Failed to copy to clipboard", "error");
      }
    }
    async function F(le) {
      if (u.value) {
        f.value = le, p.value = null, w.value = null;
        try {
          await r(u.value.hash, le), E("Source removed"), await ue();
        } catch (Y) {
          p.value = Y instanceof Error ? Y.message : "Failed to remove source";
        } finally {
          f.value = null;
        }
      }
    }
    async function V() {
      w.value = "Source added successfully!", g.value = !1, await ue(), a("sourceSaved");
    }
    async function D() {
      await ue();
    }
    async function q() {
      var le;
      if ((le = u.value) != null && le.hash) {
        _.value = !0, b.value = null;
        try {
          u.value = await c(u.value.hash), E("Hashes computed successfully!");
        } catch (Y) {
          b.value = Y instanceof Error ? Y.message : "Failed to compute hashes";
        } finally {
          _.value = !1;
        }
      }
    }
    async function ue() {
      d.value = !0, v.value = null;
      try {
        u.value = await l(o.identifier);
      } catch (le) {
        v.value = le instanceof Error ? le.message : "Failed to load model details";
      } finally {
        d.value = !1;
      }
    }
    return lt(ue), (le, Y) => {
      var me;
      return n(), i(W, null, [
        $($t, {
          title: `Model Details: ${((me = u.value) == null ? void 0 : me.filename) || "Loading..."}`,
          size: "lg",
          loading: d.value,
          error: v.value,
          "overlay-z-index": e.overlayZIndex,
          onClose: Y[5] || (Y[5] = (ne) => le.$emit("close"))
        }, {
          body: h(() => {
            var ne, B, H, we;
            return [
              u.value ? (n(), i("div", Lb, [
                s("section", Db, [
                  s("div", Nb, [
                    Y[7] || (Y[7] = s("span", { class: "detail-label" }, "Hash:", -1)),
                    s("span", Ub, m(u.value.hash || "Not computed"), 1),
                    u.value.hash ? (n(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: Y[0] || (Y[0] = (oe) => N(u.value.hash))
                    }, "Copy")) : y("", !0)
                  ]),
                  s("div", Ob, [
                    Y[8] || (Y[8] = s("span", { class: "detail-label" }, "Blake3:", -1)),
                    s("span", Ab, m(u.value.blake3 || "Not computed"), 1),
                    u.value.blake3 ? (n(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: Y[1] || (Y[1] = (oe) => N(u.value.blake3))
                    }, "Copy")) : y("", !0)
                  ]),
                  s("div", zb, [
                    Y[9] || (Y[9] = s("span", { class: "detail-label" }, "SHA256:", -1)),
                    s("span", Fb, m(u.value.sha256 || "Not computed"), 1),
                    u.value.sha256 ? (n(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: Y[2] || (Y[2] = (oe) => N(u.value.sha256))
                    }, "Copy")) : y("", !0)
                  ]),
                  S.value ? (n(), i("div", Vb, [
                    Y[10] || (Y[10] = s("span", { class: "detail-label" }, null, -1)),
                    s("span", Bb, [
                      s("button", {
                        class: "compute-hashes-btn",
                        disabled: _.value,
                        onClick: q
                      }, m(_.value ? "Computing hashes..." : "Compute Full Hashes"), 9, Wb)
                    ])
                  ])) : y("", !0),
                  b.value ? (n(), i("div", Gb, [
                    Y[11] || (Y[11] = s("span", { class: "detail-label" }, null, -1)),
                    s("span", jb, m(b.value), 1)
                  ])) : y("", !0),
                  s("div", Hb, [
                    Y[12] || (Y[12] = s("span", { class: "detail-label" }, "Size:", -1)),
                    s("span", qb, m(M(u.value.size)), 1)
                  ]),
                  s("div", Kb, [
                    Y[13] || (Y[13] = s("span", { class: "detail-label" }, "Category:", -1)),
                    s("span", Jb, m(u.value.category), 1)
                  ]),
                  s("div", Qb, [
                    Y[14] || (Y[14] = s("span", { class: "detail-label" }, "Last Seen:", -1)),
                    s("span", Yb, m(u.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                s("section", Xb, [
                  s("h4", Zb, "Locations (" + m(((ne = u.value.locations) == null ? void 0 : ne.length) || 0) + ")", 1),
                  (B = u.value.locations) != null && B.length ? (n(), i("div", e2, [
                    (n(!0), i(W, null, ye(u.value.locations, (oe, de) => (n(), i("div", {
                      key: de,
                      class: "location-item"
                    }, [
                      s("span", t2, m(oe.path), 1),
                      oe.modified ? (n(), i("span", s2, "Modified: " + m(oe.modified), 1)) : y("", !0),
                      oe.path ? (n(), i("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (ce) => N(oe.path)
                      }, " Copy File Path ", 8, o2)) : y("", !0)
                    ]))), 128))
                  ])) : (n(), i("div", n2, "No locations found"))
                ]),
                s("section", a2, [
                  s("div", l2, [
                    s("h4", i2, "Download Sources (" + m(((H = u.value.sources) == null ? void 0 : H.length) || 0) + ")", 1),
                    s("button", {
                      class: "find-source-btn",
                      onClick: Y[3] || (Y[3] = (oe) => g.value = !0)
                    }, " Find Source ")
                  ]),
                  (we = u.value.sources) != null && we.length ? (n(), i("div", r2, [
                    (n(!0), i(W, null, ye(u.value.sources, (oe, de) => (n(), i("div", {
                      key: de,
                      class: "source-item"
                    }, [
                      s("span", c2, m(oe.type) + ":", 1),
                      s("a", {
                        href: oe.url,
                        target: "_blank",
                        class: "source-url"
                      }, m(oe.url), 9, u2),
                      s("button", {
                        class: "remove-source-btn",
                        disabled: f.value === oe.url,
                        onClick: (ce) => F(oe.url)
                      }, m(f.value === oe.url ? "..." : "×"), 9, d2)
                    ]))), 128))
                  ])) : (n(), i("div", m2, " No download sources configured ")),
                  p.value ? (n(), i("p", f2, m(p.value), 1)) : y("", !0),
                  w.value ? (n(), i("p", v2, m(w.value), 1)) : y("", !0)
                ])
              ])) : y("", !0)
            ];
          }),
          footer: h(() => [
            s("button", {
              class: "btn-secondary",
              onClick: Y[4] || (Y[4] = (ne) => le.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error", "overlay-z-index"]),
        (n(), L(Yt, { to: "body" }, [
          C.value ? (n(), i("div", {
            key: 0,
            class: Be(["toast", C.value.type])
          }, m(C.value.message), 3)) : y("", !0)
        ])),
        u.value && g.value ? (n(), L(nc, {
          key: 0,
          model: u.value,
          "overlay-z-index": (e.overlayZIndex || 10003) + 2,
          onClose: Y[6] || (Y[6] = (ne) => g.value = !1),
          onSaved: V,
          onHashesComputed: D
        }, null, 8, ["model", "overlay-z-index"])) : y("", !0)
      ], 64);
    };
  }
}), rc = /* @__PURE__ */ Ie(p2, [["__scopeId", "data-v-cd808fbc"]]), g2 = { class: "workflow-links-tab" }, h2 = { class: "section-header-row" }, y2 = {
  key: 0,
  class: "state-message"
}, w2 = {
  key: 1,
  class: "error-message"
}, _2 = {
  key: 2,
  class: "candidate-list"
}, k2 = {
  key: 3,
  class: "state-message"
}, b2 = /* @__PURE__ */ xe({
  __name: "WorkflowLinksTab",
  emits: ["selectUrl"],
  setup(e, { emit: t }) {
    const o = t, { getWorkflowSourceCandidates: a } = ct(), l = k([]), r = k(!1), c = k(null), u = R(() => l.value.filter((v) => v.source === "workflow"));
    async function d() {
      r.value = !0, c.value = null;
      try {
        const v = await a();
        l.value = v.candidates;
      } catch (v) {
        c.value = v instanceof Error ? v.message : "Failed to scan workflows";
      } finally {
        r.value = !1;
      }
    }
    return lt(d), (v, f) => (n(), i("div", g2, [
      s("div", h2, [
        f[2] || (f[2] = s("div", null, [
          s("h4", null, "Workflow Links"),
          s("p", null, "Model links found in saved workflow notes or metadata.")
        ], -1)),
        $(Ue, {
          variant: "secondary",
          size: "sm",
          loading: r.value,
          onClick: d
        }, {
          default: h(() => [...f[1] || (f[1] = [
            x(" Scan ", -1)
          ])]),
          _: 1
        }, 8, ["loading"])
      ]),
      r.value ? (n(), i("div", y2, "Scanning workflows...")) : c.value ? (n(), i("div", w2, m(c.value), 1)) : u.value.length ? (n(), i("div", _2, [
        (n(!0), i(W, null, ye(u.value, (p) => (n(), L(sc, {
          key: `${p.workflow}:${p.url}`,
          candidate: p,
          "action-label": "Use URL",
          onSelect: f[0] || (f[0] = (w) => o("selectUrl", w))
        }, null, 8, ["candidate"]))), 128))
      ])) : (n(), i("div", k2, " No likely workflow links found. Try Hugging Face or Direct URL. "))
    ]));
  }
}), $2 = /* @__PURE__ */ Ie(b2, [["__scopeId", "data-v-1aac54cc"]]), C2 = { class: "civitai-tab" }, x2 = /* @__PURE__ */ xe({
  __name: "CivitaiTab",
  setup(e) {
    return (t, o) => (n(), i("div", C2, [...o[0] || (o[0] = [
      s("div", { class: "placeholder" }, [
        s("div", { class: "icon" }, "🎨"),
        s("h3", null, "Civitai Integration"),
        s("p", null, "Coming soon! Civitai model search and download will be available in a future update.")
      ], -1)
    ])]));
  }
}), S2 = /* @__PURE__ */ Ie(x2, [["__scopeId", "data-v-44948051"]]), I2 = { class: "direct-url-tab" }, E2 = {
  key: 0,
  class: "error"
}, T2 = /* @__PURE__ */ xe({
  __name: "DirectUrlTab",
  props: {
    initialUrl: {}
  },
  emits: ["queue"],
  setup(e, { emit: t }) {
    const o = e, a = t, l = k(""), r = k("");
    gt(() => o.initialUrl, (v) => {
      v && v !== l.value && (l.value = v);
    }, { immediate: !0 });
    const c = R(() => {
      const v = l.value.trim();
      if (!v) return "";
      try {
        const f = new URL(v);
        return decodeURIComponent(f.pathname).replace(/\\/g, "/").split("/").filter(Boolean).pop() || "";
      } catch {
        return v.split("?", 1)[0].replace(/\\/g, "/").split("/").filter(Boolean).pop() || "";
      }
    }), u = (v) => {
      if (!r.value.trim() || !c.value) return;
      const f = d(r.value, c.value);
      a("queue", [{
        url: v,
        targetPath: f,
        filename: c.value
      }]), l.value = "";
    };
    function d(v, f) {
      return `${v.replace(/\/+$/, "")}/${f.replace(/^\/+/, "")}`;
    }
    return (v, f) => (n(), i("div", I2, [
      $(oc, {
        modelValue: l.value,
        "onUpdate:modelValue": f[1] || (f[1] = (p) => l.value = p),
        label: "Download URL",
        placeholder: "https://example.com/model.safetensors",
        "action-label": "Queue Download",
        disabled: !r.value.trim() || !c.value,
        onSubmit: u
      }, {
        default: h(() => [
          $(ec, {
            modelValue: r.value,
            "onUpdate:modelValue": f[0] || (f[0] = (p) => r.value = p)
          }, null, 8, ["modelValue"]),
          l.value.trim() && !c.value ? (n(), i("p", E2, " Could not infer a filename from this URL. ")) : y("", !0),
          f[2] || (f[2] = s("p", { class: "note" }, "Model will be queued for background download.", -1))
        ]),
        _: 1
      }, 8, ["modelValue", "disabled"])
    ]));
  }
}), M2 = /* @__PURE__ */ Ie(T2, [["__scopeId", "data-v-a6d21f27"]]), P2 = { class: "download-modal" }, R2 = { class: "tab-bar" }, L2 = ["onClick"], D2 = { class: "tab-content" }, N2 = /* @__PURE__ */ xe({
  __name: "ModelDownloadModal",
  props: {
    show: { type: Boolean }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const o = t, { addToQueue: a } = zo(), l = [
      { id: "workflow", label: "Workflow Links", icon: "🔎" },
      { id: "huggingface", label: "HuggingFace", icon: "🤗" },
      { id: "civitai", label: "Civitai", icon: "🎨" },
      { id: "direct", label: "Direct URL", icon: "🔗" }
    ], r = k("workflow"), c = k("");
    function u(p) {
      a(p.map((w) => ({
        workflow: "__manual__",
        filename: w.filename,
        url: w.url,
        targetPath: w.destination ? `${w.destination}/${w.filename}` : w.filename
      }))), o("close");
    }
    function d(p) {
      a(p.map((w) => ({
        workflow: "__manual__",
        filename: w.filename,
        url: w.url,
        targetPath: w.targetPath
      }))), o("close");
    }
    function v(p) {
      c.value = p, r.value = "direct";
    }
    function f() {
      o("close");
    }
    return (p, w) => e.show ? (n(), L($t, {
      key: 0,
      title: "DOWNLOAD NEW MODEL",
      size: "xl",
      "fixed-height": "",
      onClose: f
    }, {
      body: h(() => [
        s("div", P2, [
          s("div", R2, [
            (n(), i(W, null, ye(l, (g) => s("button", {
              key: g.id,
              class: Be(["tab-btn", { active: r.value === g.id }]),
              onClick: (_) => r.value = g.id
            }, m(g.icon) + " " + m(g.label), 11, L2)), 64))
          ]),
          s("div", D2, [
            r.value === "workflow" ? (n(), L($2, {
              key: 0,
              onSelectUrl: v
            })) : r.value === "huggingface" ? (n(), L(tc, {
              key: 1,
              onQueue: u
            })) : r.value === "civitai" ? (n(), L(S2, { key: 2 })) : r.value === "direct" ? (n(), L(M2, {
              key: 3,
              "initial-url": c.value,
              onQueue: d
            }, null, 8, ["initial-url"])) : y("", !0)
          ])
        ])
      ]),
      footer: h(() => [
        $(Ue, {
          variant: "secondary",
          onClick: f
        }, {
          default: h(() => [...w[0] || (w[0] = [
            x(" Cancel ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    })) : y("", !0);
  }
}), cc = /* @__PURE__ */ Ie(N2, [["__scopeId", "data-v-de2e4fac"]]), U2 = /* @__PURE__ */ xe({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(e, { emit: t }) {
    const o = t, { getEnvironmentModels: a, getStatus: l } = ct(), r = k([]), c = k([]), u = k("production"), d = k(!1), v = k(null), f = k(""), p = k(!1), w = k(null), g = k(!1);
    function _() {
      p.value = !1, o("navigate", "model-index");
    }
    const b = R(
      () => r.value.reduce((D, q) => D + (q.size || 0), 0)
    ), S = R(() => {
      if (!f.value.trim()) return r.value;
      const D = f.value.toLowerCase();
      return r.value.filter((q) => q.filename.toLowerCase().includes(D));
    }), C = R(() => {
      if (!f.value.trim()) return c.value;
      const D = f.value.toLowerCase();
      return c.value.filter((q) => q.filename.toLowerCase().includes(D));
    }), I = R(() => {
      const D = {};
      for (const ue of S.value) {
        const le = ue.type || "other";
        D[le] || (D[le] = []), D[le].push(ue);
      }
      const q = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(D).sort(([ue], [le]) => {
        const Y = q.indexOf(ue), me = q.indexOf(le);
        return Y >= 0 && me >= 0 ? Y - me : Y >= 0 ? -1 : me >= 0 ? 1 : ue.localeCompare(le);
      }).map(([ue, le]) => ({ type: ue, models: le }));
    });
    function E(D) {
      if (!D) return "Unknown";
      const q = D / (1024 * 1024);
      return q >= 1024 ? `${(q / 1024).toFixed(1)} GB` : `${q.toFixed(0)} MB`;
    }
    function M(D) {
      w.value = D.hash || D.filename;
    }
    function N(D) {
      o("navigate", "model-index");
    }
    function F(D) {
      alert(`Download functionality not yet implemented for ${D}`);
    }
    async function V() {
      d.value = !0, v.value = null;
      try {
        const D = await a();
        r.value = D, c.value = [];
        const q = await l();
        u.value = q.environment || "production";
      } catch (D) {
        v.value = D instanceof Error ? D.message : "Failed to load models";
      } finally {
        d.value = !1;
      }
    }
    return lt(V), (D, q) => (n(), i(W, null, [
      $(zt, null, {
        header: h(() => [
          $(Ft, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: q[1] || (q[1] = (ue) => p.value = !0)
          }, {
            actions: h(() => [
              $(Re, {
                variant: "primary",
                size: "sm",
                onClick: q[0] || (q[0] = (ue) => g.value = !0)
              }, {
                default: h(() => [...q[6] || (q[6] = [
                  s("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    s("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                    s("path", { d: "M14 14H2v-2h12v2z" })
                  ], -1),
                  x(" DOWNLOAD + ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          $(po, {
            modelValue: f.value,
            "onUpdate:modelValue": q[2] || (q[2] = (ue) => f.value = ue),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          d.value ? (n(), L(Es, {
            key: 0,
            message: "Loading environment models..."
          })) : v.value ? (n(), L(Ts, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: V
          }, null, 8, ["message"])) : (n(), i(W, { key: 2 }, [
            r.value.length ? (n(), L(Il, {
              key: 0,
              variant: "compact"
            }, {
              default: h(() => [
                x(" Total: " + m(r.value.length) + " models • " + m(E(b.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : y("", !0),
            (n(!0), i(W, null, ye(I.value, (ue) => (n(), L(Et, {
              key: ue.type,
              title: ue.type.toUpperCase(),
              count: ue.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: h(() => [
                (n(!0), i(W, null, ye(ue.models, (le) => (n(), L(Wt, {
                  key: le.hash || le.filename,
                  status: "synced"
                }, {
                  icon: h(() => [...q[7] || (q[7] = [
                    x("📦", -1)
                  ])]),
                  title: h(() => [
                    x(m(le.filename), 1)
                  ]),
                  subtitle: h(() => [
                    x(m(E(le.size)), 1)
                  ]),
                  details: h(() => [
                    $(kt, {
                      label: "Used by:",
                      value: (le.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    $(kt, {
                      label: "Path:",
                      value: le.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    $(Re, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Y) => M(le)
                    }, {
                      default: h(() => [...q[8] || (q[8] = [
                        x(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 2
            }, 1032, ["title", "count"]))), 128)),
            C.value.length ? (n(), L(Et, {
              key: 1,
              title: "MISSING",
              count: C.value.length
            }, {
              default: h(() => [
                (n(!0), i(W, null, ye(C.value, (ue) => (n(), L(Wt, {
                  key: ue.filename,
                  status: "broken"
                }, {
                  icon: h(() => [...q[9] || (q[9] = [
                    x("⚠", -1)
                  ])]),
                  title: h(() => [
                    x(m(ue.filename), 1)
                  ]),
                  subtitle: h(() => [...q[10] || (q[10] = [
                    s("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: h(() => {
                    var le;
                    return [
                      $(kt, {
                        label: "Required by:",
                        value: ((le = ue.workflow_names) == null ? void 0 : le.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: h(() => [
                    $(Re, {
                      variant: "primary",
                      size: "sm",
                      onClick: (le) => F(ue.filename)
                    }, {
                      default: h(() => [...q[11] || (q[11] = [
                        x(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    $(Re, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (le) => N(ue.filename)
                    }, {
                      default: h(() => [...q[12] || (q[12] = [
                        x(" Search Workspace Index ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            !S.value.length && !C.value.length ? (n(), L(hs, {
              key: 2,
              icon: "📭",
              message: f.value ? `No models match '${f.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : y("", !0)
          ], 64))
        ]),
        _: 1
      }),
      $(ds, {
        show: p.value,
        title: "About Environment Models",
        onClose: q[3] || (q[3] = (ue) => p.value = !1)
      }, {
        content: h(() => [
          s("p", null, [
            q[13] || (q[13] = x(" These are models currently used by workflows in ", -1)),
            s("strong", null, '"' + m(u.value) + '"', 1),
            q[14] || (q[14] = x(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: h(() => [
          $(Re, {
            variant: "primary",
            onClick: _
          }, {
            default: h(() => [...q[15] || (q[15] = [
              x(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w.value ? (n(), L(rc, {
        key: 0,
        identifier: w.value,
        onClose: q[4] || (q[4] = (ue) => w.value = null)
      }, null, 8, ["identifier"])) : y("", !0),
      $(cc, {
        show: g.value,
        onClose: q[5] || (q[5] = (ue) => g.value = !1)
      }, null, 8, ["show"])
    ], 64));
  }
}), O2 = /* @__PURE__ */ Ie(U2, [["__scopeId", "data-v-af3ca736"]]), A2 = {
  key: 0,
  class: "indexing-progress"
}, z2 = { class: "progress-info" }, F2 = { class: "progress-label" }, V2 = { class: "progress-count" }, B2 = { class: "progress-bar" }, W2 = { class: "directory-modal-body" }, G2 = { class: "input-group" }, j2 = { class: "current-path" }, H2 = { class: "input-group" }, q2 = /* @__PURE__ */ xe({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(e, { emit: t }) {
    const {
      getWorkspaceModels: o,
      scanWorkspaceModels: a,
      getModelsDirectory: l,
      setModelsDirectory: r
    } = ct(), c = t, u = k([]), d = k(!1), v = k(!1), f = k(null), p = k(""), w = k(!1), g = k(null), _ = k(!1), b = k(null), S = k(""), C = k(!1), I = k(!1), E = k(null), M = R(
      () => u.value.reduce((me, ne) => me + (ne.size || 0), 0)
    ), N = R(() => {
      if (!p.value.trim()) return u.value;
      const me = p.value.toLowerCase();
      return u.value.filter((ne) => {
        const B = ne, H = ne.sha256 || B.sha256_hash || "";
        return ne.filename.toLowerCase().includes(me) || H.toLowerCase().includes(me);
      });
    }), F = R(() => {
      const me = {};
      for (const B of N.value) {
        const H = B.type || "other";
        me[H] || (me[H] = []), me[H].push(B);
      }
      const ne = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(me).sort(([B], [H]) => {
        const we = ne.indexOf(B), oe = ne.indexOf(H);
        return we >= 0 && oe >= 0 ? we - oe : we >= 0 ? -1 : oe >= 0 ? 1 : B.localeCompare(H);
      }).map(([B, H]) => ({ type: B, models: H }));
    });
    function V(me) {
      if (!me) return "Unknown";
      const ne = 1024 * 1024 * 1024, B = 1024 * 1024;
      return me >= ne ? `${(me / ne).toFixed(1)} GB` : me >= B ? `${(me / B).toFixed(0)} MB` : `${(me / 1024).toFixed(0)} KB`;
    }
    function D(me) {
      g.value = me.hash || me.filename;
    }
    async function q() {
      v.value = !0, f.value = null;
      try {
        const me = await a();
        await le(), me.changes > 0 && console.log(`Scan complete: ${me.changes} changes detected`);
      } catch (me) {
        f.value = me instanceof Error ? me.message : "Failed to scan models";
      } finally {
        v.value = !1;
      }
    }
    async function ue() {
      if (S.value.trim()) {
        C.value = !0, f.value = null;
        try {
          const me = await r(S.value.trim());
          b.value = me.path, _.value = !1, S.value = "", await le(), console.log(`Directory changed: ${me.models_indexed} models indexed`), c("refresh");
        } catch (me) {
          f.value = me instanceof Error ? me.message : "Failed to change directory";
        } finally {
          C.value = !1;
        }
      }
    }
    async function le() {
      d.value = !0, f.value = null;
      try {
        u.value = await o();
      } catch (me) {
        f.value = me instanceof Error ? me.message : "Failed to load workspace models";
      } finally {
        d.value = !1;
      }
    }
    async function Y() {
      try {
        const me = await l();
        b.value = me.path;
      } catch {
      }
    }
    return lt(() => {
      le(), Y();
    }), (me, ne) => (n(), i(W, null, [
      $(zt, null, {
        header: h(() => [
          $(Ft, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: ne[2] || (ne[2] = (B) => w.value = !0)
          }, {
            actions: h(() => [
              $(Re, {
                variant: "primary",
                size: "sm",
                disabled: v.value,
                onClick: q
              }, {
                default: h(() => [
                  x(m(v.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              $(Re, {
                variant: "primary",
                size: "sm",
                onClick: ne[0] || (ne[0] = (B) => _.value = !0)
              }, {
                default: h(() => [...ne[10] || (ne[10] = [
                  x(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              $(Re, {
                variant: "primary",
                size: "sm",
                onClick: ne[1] || (ne[1] = (B) => I.value = !0)
              }, {
                default: h(() => [...ne[11] || (ne[11] = [
                  s("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    s("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                    s("path", { d: "M14 14H2v-2h12v2z" })
                  ], -1),
                  x(" DOWNLOAD + ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          E.value ? (n(), i("div", A2, [
            s("div", z2, [
              s("span", F2, m(E.value.message), 1),
              s("span", V2, m(E.value.current) + "/" + m(E.value.total), 1)
            ]),
            s("div", B2, [
              s("div", {
                class: "progress-fill",
                style: Dt({ width: `${E.value.current / E.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : y("", !0),
          $(po, {
            modelValue: p.value,
            "onUpdate:modelValue": ne[3] || (ne[3] = (B) => p.value = B),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          d.value || E.value ? (n(), L(Es, {
            key: 0,
            message: E.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : f.value ? (n(), L(Ts, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: le
          }, null, 8, ["message"])) : (n(), i(W, { key: 2 }, [
            u.value.length ? (n(), L(Il, {
              key: 0,
              variant: "compact"
            }, {
              default: h(() => [
                x(" Total: " + m(u.value.length) + " models • " + m(V(M.value)), 1)
              ]),
              _: 1
            })) : y("", !0),
            (n(!0), i(W, null, ye(F.value, (B) => (n(), L(Et, {
              key: B.type,
              title: B.type.toUpperCase(),
              count: B.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: h(() => [
                (n(!0), i(W, null, ye(B.models, (H) => (n(), L(Wt, {
                  key: H.sha256 || H.filename,
                  status: "synced"
                }, {
                  icon: h(() => [...ne[12] || (ne[12] = [
                    x("📦", -1)
                  ])]),
                  title: h(() => [
                    x(m(H.filename), 1)
                  ]),
                  subtitle: h(() => [
                    x(m(V(H.size)), 1)
                  ]),
                  details: h(() => [
                    $(kt, {
                      label: "Hash:",
                      value: H.hash ? H.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    $(Re, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (we) => D(H)
                    }, {
                      default: h(() => [...ne[13] || (ne[13] = [
                        x(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 2
            }, 1032, ["title", "count"]))), 128)),
            N.value.length ? y("", !0) : (n(), L(hs, {
              key: 1,
              icon: "📭",
              message: p.value ? `No models match '${p.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      $(ds, {
        show: w.value,
        title: "About Workspace Model Index",
        onClose: ne[4] || (ne[4] = (B) => w.value = !1)
      }, {
        content: h(() => [...ne[14] || (ne[14] = [
          s("p", null, [
            x(" Content-addressable model storage shared across "),
            s("strong", null, "all environments"),
            x(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      g.value ? (n(), L(rc, {
        key: 0,
        identifier: g.value,
        onClose: ne[5] || (ne[5] = (B) => g.value = null)
      }, null, 8, ["identifier"])) : y("", !0),
      _.value ? (n(), L($t, {
        key: 1,
        title: "Change Models Directory",
        size: "md",
        "overlay-z-index": 10010,
        onClose: ne[8] || (ne[8] = (B) => _.value = !1)
      }, {
        body: h(() => [
          s("div", W2, [
            s("div", G2, [
              ne[15] || (ne[15] = s("label", null, "Current Directory", -1)),
              s("code", j2, m(b.value || "Not set"), 1)
            ]),
            s("div", H2, [
              ne[16] || (ne[16] = s("label", null, "New Directory Path", -1)),
              $(bt, {
                modelValue: S.value,
                "onUpdate:modelValue": ne[6] || (ne[6] = (B) => S.value = B),
                placeholder: "/path/to/models"
              }, null, 8, ["modelValue"])
            ]),
            ne[17] || (ne[17] = s("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
          ])
        ]),
        footer: h(() => [
          $(Ue, {
            variant: "secondary",
            onClick: ne[7] || (ne[7] = (B) => _.value = !1)
          }, {
            default: h(() => [...ne[18] || (ne[18] = [
              x(" Cancel ", -1)
            ])]),
            _: 1
          }),
          $(Ue, {
            variant: "primary",
            disabled: !S.value.trim() || C.value,
            loading: C.value,
            onClick: ue
          }, {
            default: h(() => [
              x(m(C.value ? "Indexing..." : "Change Directory"), 1)
            ]),
            _: 1
          }, 8, ["disabled", "loading"])
        ]),
        _: 1
      })) : y("", !0),
      $(cc, {
        show: I.value,
        onClose: ne[9] || (ne[9] = (B) => I.value = !1)
      }, null, 8, ["show"])
    ], 64));
  }
}), K2 = /* @__PURE__ */ Ie(q2, [["__scopeId", "data-v-9fca048b"]]), J2 = { class: "node-details" }, Q2 = { class: "status-row" }, Y2 = {
  key: 0,
  class: "detail-row"
}, X2 = { class: "value" }, Z2 = { class: "detail-row" }, e$ = { class: "value" }, t$ = {
  key: 1,
  class: "detail-row"
}, s$ = { class: "value mono" }, o$ = {
  key: 2,
  class: "detail-row"
}, n$ = ["href"], a$ = {
  key: 3,
  class: "detail-row"
}, l$ = { class: "value mono small" }, i$ = { class: "detail-row" }, r$ = {
  key: 0,
  class: "value"
}, c$ = {
  key: 1,
  class: "workflow-list"
}, u$ = /* @__PURE__ */ xe({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const o = e, a = t, l = R(() => o.node.installed ? o.node.tracked ? o.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), r = R(() => o.node.installed ? o.node.tracked ? o.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), c = R(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[o.node.source] || o.node.source);
    return (u, d) => (n(), L($t, {
      title: `NODE DETAILS: ${e.node.name}`,
      size: "md",
      onClose: d[1] || (d[1] = (v) => a("close"))
    }, {
      body: h(() => [
        s("div", J2, [
          s("div", Q2, [
            d[2] || (d[2] = s("span", { class: "label" }, "Status:", -1)),
            s("span", {
              class: Be(["status-badge", l.value])
            }, m(r.value), 3)
          ]),
          e.node.version ? (n(), i("div", Y2, [
            d[3] || (d[3] = s("span", { class: "label" }, "Version:", -1)),
            s("span", X2, m(e.node.source === "development" ? "" : "v") + m(e.node.version), 1)
          ])) : y("", !0),
          s("div", Z2, [
            d[4] || (d[4] = s("span", { class: "label" }, "Source:", -1)),
            s("span", e$, m(c.value), 1)
          ]),
          e.node.registry_id ? (n(), i("div", t$, [
            d[5] || (d[5] = s("span", { class: "label" }, "Registry ID:", -1)),
            s("span", s$, m(e.node.registry_id), 1)
          ])) : y("", !0),
          e.node.repository ? (n(), i("div", o$, [
            d[7] || (d[7] = s("span", { class: "label" }, "Repository:", -1)),
            s("a", {
              href: e.node.repository,
              target: "_blank",
              rel: "noopener noreferrer",
              class: "repo-link"
            }, [
              x(m(e.node.repository) + " ", 1),
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
            ], 8, n$)
          ])) : y("", !0),
          e.node.download_url ? (n(), i("div", a$, [
            d[8] || (d[8] = s("span", { class: "label" }, "Download URL:", -1)),
            s("span", l$, m(e.node.download_url), 1)
          ])) : y("", !0),
          d[10] || (d[10] = s("div", { class: "section-divider" }, null, -1)),
          s("div", i$, [
            d[9] || (d[9] = s("span", { class: "label" }, "Used by:", -1)),
            !e.node.used_in_workflows || e.node.used_in_workflows.length === 0 ? (n(), i("span", r$, " Not used in any workflows ")) : (n(), i("div", c$, [
              (n(!0), i(W, null, ye(e.node.used_in_workflows, (v) => (n(), i("span", {
                key: v,
                class: "workflow-tag"
              }, m(v), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: h(() => [
        $(Ue, {
          variant: "secondary",
          onClick: d[0] || (d[0] = (v) => a("close"))
        }, {
          default: h(() => [...d[11] || (d[11] = [
            x(" Close ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), d$ = /* @__PURE__ */ Ie(u$, [["__scopeId", "data-v-b342f626"]]), m$ = { class: "dialog-message" }, f$ = {
  key: 0,
  class: "dialog-details"
}, v$ = {
  key: 1,
  class: "dialog-warning"
}, p$ = /* @__PURE__ */ xe({
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
    return (t, o) => (n(), L($t, {
      title: e.title,
      size: "sm",
      onClose: o[3] || (o[3] = (a) => t.$emit("cancel"))
    }, {
      body: h(() => [
        s("p", m$, m(e.message), 1),
        e.details && e.details.length ? (n(), i("div", f$, [
          (n(!0), i(W, null, ye(e.details, (a, l) => (n(), i("div", {
            key: l,
            class: "detail-item"
          }, " • " + m(a), 1))), 128))
        ])) : y("", !0),
        e.warning ? (n(), i("p", v$, [
          o[4] || (o[4] = s("span", { class: "warning-icon" }, "⚠", -1)),
          x(" " + m(e.warning), 1)
        ])) : y("", !0)
      ]),
      footer: h(() => [
        $(Ue, {
          variant: "secondary",
          onClick: o[0] || (o[0] = (a) => t.$emit("cancel"))
        }, {
          default: h(() => [
            x(m(e.cancelLabel), 1)
          ]),
          _: 1
        }),
        e.secondaryAction ? (n(), L(Ue, {
          key: 0,
          variant: "secondary",
          onClick: o[1] || (o[1] = (a) => t.$emit("secondary"))
        }, {
          default: h(() => [
            x(m(e.secondaryLabel), 1)
          ]),
          _: 1
        })) : y("", !0),
        $(Ue, {
          variant: e.destructive ? "danger" : "primary",
          onClick: o[2] || (o[2] = (a) => t.$emit("confirm"))
        }, {
          default: h(() => [
            x(m(e.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Tl = /* @__PURE__ */ Ie(p$, [["__scopeId", "data-v-3670b9f5"]]), g$ = { class: "mismatch-warning" }, h$ = { class: "version-mismatch" }, y$ = { class: "version-actual" }, w$ = { class: "version-expected" }, _$ = { style: { color: "var(--cg-color-warning)" } }, k$ = { style: { color: "var(--cg-color-warning)" } }, b$ = {
  key: 0,
  class: "community-status-badge"
}, $$ = { key: 0 }, C$ = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, x$ = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, S$ = { class: "criticality-control" }, I$ = ["value", "disabled", "onChange"], E$ = /* @__PURE__ */ xe({
  __name: "NodesSection",
  props: {
    versionMismatches: { default: () => [] }
  },
  emits: ["open-node-manager", "repair-environment", "toast"],
  setup(e, { emit: t }) {
    const o = e, a = t, {
      getNodes: l,
      trackNodeAsDev: r,
      installNode: c,
      uninstallNode: u,
      queueNodeInstall: d,
      updateNodeCriticality: v
    } = ct(), f = k({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0,
      blocked_count: 0
    }), p = k(!1), w = k(null), g = k(""), _ = k(!1), b = k(null), S = k(/* @__PURE__ */ new Set()), C = k(/* @__PURE__ */ new Set()), I = k(null), E = R(() => {
      if (!g.value.trim()) return f.value.nodes;
      const ge = g.value.toLowerCase();
      return f.value.nodes.filter(
        (ve) => {
          var T, A;
          return ve.name.toLowerCase().includes(ge) || ((T = ve.description) == null ? void 0 : T.toLowerCase().includes(ge)) || ((A = ve.repository) == null ? void 0 : A.toLowerCase().includes(ge));
        }
      );
    }), M = R(
      () => E.value.filter((ge) => ge.installed && ge.tracked)
    ), N = R(
      () => E.value.filter((ge) => !ge.installed && ge.tracked && !ge.issue_type)
    ), F = R(
      () => E.value.filter((ge) => ge.installed && !ge.tracked)
    ), V = R(
      () => E.value.filter((ge) => ge.issue_type === "version_gated")
    ), D = R(
      () => E.value.filter((ge) => ge.issue_type === "uninstallable")
    );
    function q(ge) {
      return ge.registry_id || ge.name;
    }
    function ue(ge) {
      return S.value.has(q(ge));
    }
    async function le(ge, ve) {
      const T = ge.registry_id;
      if (!T) {
        a("toast", `Node "${ge.name}" has no package id for install`, "warning");
        return;
      }
      if (ve === "git" && !ge.repository) {
        a("toast", `Node "${ge.name}" has no repository URL for git install`, "warning");
        return;
      }
      const A = {
        id: T,
        version: "latest",
        selected_version: "latest",
        mode: "remote",
        channel: "default"
      };
      ve === "git" && ge.repository && (A.repository = ge.repository, A.install_source = "git"), await d(A), S.value.add(q(ge)), a("toast", `✓ Queued install for "${ge.name}"`, "success");
    }
    function Y(ge) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[ge] || ge;
    }
    const me = R(() => o.versionMismatches.length > 0);
    function ne(ge) {
      return !ge.used_in_workflows || ge.used_in_workflows.length === 0 ? "Not used in any workflows" : ge.used_in_workflows.length === 1 ? ge.used_in_workflows[0] : `${ge.used_in_workflows.length} workflows`;
    }
    function B(ge) {
      return ge.criticality === "optional" ? "optional" : "required";
    }
    function H(ge) {
      return C.value.has(ge.name);
    }
    async function we(ge, ve) {
      const T = ve.target, A = B(ge), ae = T.value;
      if (ae !== A) {
        C.value = new Set(C.value).add(ge.name), ge.criticality = ae;
        try {
          const Ce = await v(ge.name, ae);
          if (Ce.status !== "success") {
            ge.criticality = A, a("toast", Ce.message || `Failed to update "${ge.name}" criticality`, "error");
            return;
          }
          a("toast", `Marked "${ge.name}" as ${ae}`, "success");
        } catch (Ce) {
          ge.criticality = A, T.value = A, a("toast", `Error updating criticality: ${Ce instanceof Error ? Ce.message : "Unknown error"}`, "error");
        } finally {
          const Ce = new Set(C.value);
          Ce.delete(ge.name), C.value = Ce;
        }
      }
    }
    function oe(ge) {
      return ge.issue_type === "version_gated" ? "Requires newer ComfyUI version" : "Blocked";
    }
    function de(ge) {
      return ge.issue_type === "version_gated" ? "Upgrade ComfyUI to a version that includes this builtin node." : "Manual intervention required.";
    }
    function ce(ge) {
      return ge.registry_id ? `Community-mapped package: ${ge.registry_id}` : "Community-mapped package";
    }
    function K(ge) {
      return "Found via community mapping. Install from registry by default, or use git when needed.";
    }
    function ee(ge) {
      b.value = ge;
    }
    function te() {
      a("open-node-manager");
    }
    function Me(ge) {
      I.value = {
        title: "Track as Development Node",
        message: `Track "${ge}" as a development node? This will add it to your environment manifest with source='development'.`,
        warning: "Development nodes are tracked locally but not version-controlled.",
        confirmLabel: "Track as Dev",
        destructive: !1,
        onConfirm: async () => {
          I.value = null;
          try {
            p.value = !0;
            const ve = await r(ge);
            ve.status === "success" ? (a("toast", `✓ Node "${ge}" tracked as development`, "success"), await Ae()) : a("toast", `Failed to track node: ${ve.message || "Unknown error"}`, "error");
          } catch (ve) {
            a("toast", `Error tracking node: ${ve instanceof Error ? ve.message : "Unknown error"}`, "error");
          } finally {
            p.value = !1;
          }
        }
      };
    }
    function Se(ge) {
      I.value = {
        title: "Remove Untracked Node",
        message: `Remove "${ge}" from custom_nodes/?`,
        warning: "This will permanently delete the node directory.",
        confirmLabel: "Remove",
        destructive: !0,
        onConfirm: async () => {
          I.value = null;
          try {
            p.value = !0;
            const ve = await u(ge);
            ve.status === "success" ? (a("toast", `✓ Node "${ge}" removed`, "success"), await Ae()) : a("toast", `Failed to remove node: ${ve.message || "Unknown error"}`, "error");
          } catch (ve) {
            a("toast", `Error removing node: ${ve instanceof Error ? ve.message : "Unknown error"}`, "error");
          } finally {
            p.value = !1;
          }
        }
      };
    }
    function ze(ge) {
      I.value = {
        title: "Install Missing Node",
        message: `Install "${ge}"?`,
        warning: "This will download and install the node from the registry.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          I.value = null;
          try {
            p.value = !0;
            const ve = await c(ge);
            ve.status === "success" ? (a("toast", `✓ Node "${ge}" installed`, "success"), await Ae()) : a("toast", `Failed to install node: ${ve.message || "Unknown error"}`, "error");
          } catch (ve) {
            a("toast", `Error installing node: ${ve instanceof Error ? ve.message : "Unknown error"}`, "error");
          } finally {
            p.value = !1;
          }
        }
      };
    }
    function Ne(ge) {
      I.value = {
        title: "Install Community-Mapped Package",
        message: `Install "${ge.name}" from the registry?`,
        warning: "This will queue a registry install through the manager queue.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          I.value = null;
          try {
            p.value = !0, await le(ge, "registry");
          } catch (ve) {
            a("toast", `Error queueing install: ${ve instanceof Error ? ve.message : "Unknown error"}`, "error");
          } finally {
            p.value = !1;
          }
        }
      };
    }
    function be(ge) {
      I.value = {
        title: "Install Community-Mapped Package via Git",
        message: `Install "${ge.name}" from git?`,
        warning: "Use git install only when you explicitly need the repository source.",
        confirmLabel: "Install via Git",
        destructive: !1,
        onConfirm: async () => {
          I.value = null;
          try {
            p.value = !0, await le(ge, "git");
          } catch (ve) {
            a("toast", `Error queueing git install: ${ve instanceof Error ? ve.message : "Unknown error"}`, "error");
          } finally {
            p.value = !1;
          }
        }
      };
    }
    async function Ae() {
      p.value = !0, w.value = null;
      try {
        f.value = await l();
      } catch (ge) {
        w.value = ge instanceof Error ? ge.message : "Failed to load nodes";
      } finally {
        p.value = !1;
      }
    }
    return lt(Ae), (ge, ve) => (n(), i(W, null, [
      $(zt, null, {
        header: h(() => [
          $(Ft, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: ve[0] || (ve[0] = (T) => _.value = !0)
          }, {
            actions: h(() => [
              $(Re, {
                variant: "primary",
                size: "sm",
                onClick: te
              }, {
                default: h(() => [...ve[7] || (ve[7] = [
                  x(" Browse Nodes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          $(po, {
            modelValue: g.value,
            "onUpdate:modelValue": ve[1] || (ve[1] = (T) => g.value = T),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          p.value ? (n(), L(Es, {
            key: 0,
            message: "Loading nodes..."
          })) : w.value ? (n(), L(Ts, {
            key: 1,
            message: w.value,
            retry: !0,
            onRetry: Ae
          }, null, 8, ["message"])) : (n(), i(W, { key: 2 }, [
            me.value ? (n(), L(Et, {
              key: 0,
              title: "VERSION MISMATCHES",
              count: e.versionMismatches.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                s("div", g$, [
                  ve[8] || (ve[8] = s("span", { class: "warning-icon" }, "⚠", -1)),
                  s("span", null, m(e.versionMismatches.length) + " node(s) have wrong versions. Environment needs repair.", 1)
                ]),
                (n(!0), i(W, null, ye(e.versionMismatches, (T) => (n(), L(Wt, {
                  key: T.name,
                  status: "warning"
                }, {
                  icon: h(() => [...ve[9] || (ve[9] = [
                    x("⚠", -1)
                  ])]),
                  title: h(() => [
                    x(m(T.name), 1)
                  ]),
                  subtitle: h(() => [
                    s("span", h$, [
                      s("span", y$, m(T.actual), 1),
                      ve[10] || (ve[10] = s("span", { class: "version-arrow" }, "→", -1)),
                      s("span", w$, m(T.expected), 1)
                    ])
                  ]),
                  actions: h(() => [
                    $(Re, {
                      variant: "warning",
                      size: "sm",
                      onClick: ve[2] || (ve[2] = (A) => a("repair-environment"))
                    }, {
                      default: h(() => [...ve[11] || (ve[11] = [
                        x(" Repair ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            V.value.length ? (n(), L(Et, {
              key: 1,
              title: "BLOCKED",
              count: V.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (n(!0), i(W, null, ye(V.value, (T) => (n(), L(Wt, {
                  key: `blocked-${T.name}`,
                  status: "warning"
                }, {
                  icon: h(() => [...ve[12] || (ve[12] = [
                    x("⛔", -1)
                  ])]),
                  title: h(() => [
                    x(m(T.name), 1)
                  ]),
                  subtitle: h(() => [
                    s("span", _$, m(oe(T)), 1)
                  ]),
                  details: h(() => [
                    $(kt, {
                      label: "Guidance:",
                      value: T.issue_guidance || de(T)
                    }, null, 8, ["value"]),
                    $(kt, {
                      label: "Used by:",
                      value: ne(T)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    $(Re, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (A) => ee(T)
                    }, {
                      default: h(() => [...ve[13] || (ve[13] = [
                        x(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            D.value.length ? (n(), L(Et, {
              key: 2,
              title: "COMMUNITY-MAPPED",
              count: D.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (n(!0), i(W, null, ye(D.value, (T) => (n(), L(Wt, {
                  key: `community-${T.name}`,
                  status: "warning"
                }, {
                  icon: h(() => [...ve[14] || (ve[14] = [
                    x("⚠", -1)
                  ])]),
                  title: h(() => [
                    x(m(T.name), 1)
                  ]),
                  subtitle: h(() => [
                    s("span", k$, m(ce(T)), 1)
                  ]),
                  details: h(() => [
                    $(kt, {
                      label: "Guidance:",
                      value: T.issue_guidance || K(T)
                    }, null, 8, ["value"]),
                    $(kt, {
                      label: "Used by:",
                      value: ne(T)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    $(Re, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (A) => ee(T)
                    }, {
                      default: h(() => [...ve[15] || (ve[15] = [
                        x(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    ue(T) ? (n(), i("span", b$, "Queued")) : (n(), i(W, { key: 1 }, [
                      T.registry_id ? (n(), L(Re, {
                        key: 0,
                        variant: "primary",
                        size: "sm",
                        onClick: (A) => Ne(T)
                      }, {
                        default: h(() => [...ve[16] || (ve[16] = [
                          x(" Install ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : y("", !0),
                      T.repository ? (n(), L(Re, {
                        key: 1,
                        variant: "secondary",
                        size: "sm",
                        onClick: (A) => be(T)
                      }, {
                        default: h(() => [...ve[17] || (ve[17] = [
                          x(" Install via Git ", -1)
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
            F.value.length ? (n(), L(Et, {
              key: 3,
              title: "UNTRACKED",
              count: F.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (n(!0), i(W, null, ye(F.value, (T) => (n(), L(Wt, {
                  key: T.name,
                  status: "warning"
                }, {
                  icon: h(() => [...ve[18] || (ve[18] = [
                    x("?", -1)
                  ])]),
                  title: h(() => [
                    x(m(T.name), 1)
                  ]),
                  subtitle: h(() => [...ve[19] || (ve[19] = [
                    s("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: h(() => [
                    $(kt, {
                      label: "Used by:",
                      value: ne(T)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    $(Re, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (A) => ee(T)
                    }, {
                      default: h(() => [...ve[20] || (ve[20] = [
                        x(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    $(Re, {
                      variant: "primary",
                      size: "sm",
                      onClick: (A) => Me(T.name)
                    }, {
                      default: h(() => [...ve[21] || (ve[21] = [
                        x(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    $(Re, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (A) => Se(T.name)
                    }, {
                      default: h(() => [...ve[22] || (ve[22] = [
                        x(" Remove ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            M.value.length ? (n(), L(Et, {
              key: 4,
              title: "INSTALLED",
              count: M.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (n(!0), i(W, null, ye(M.value, (T) => (n(), L(Wt, {
                  key: T.name,
                  status: "synced"
                }, {
                  icon: h(() => [
                    x(m(T.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: h(() => [
                    x(m(T.name), 1)
                  ]),
                  subtitle: h(() => [
                    T.version ? (n(), i("span", $$, m(T.source === "development" ? "" : "v") + m(T.version), 1)) : (n(), i("span", C$, "version unknown")),
                    s("span", x$, " • " + m(Y(T.source)), 1)
                  ]),
                  details: h(() => [
                    $(kt, {
                      label: "Used by:",
                      value: ne(T)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    $(Re, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (A) => ee(T)
                    }, {
                      default: h(() => [...ve[23] || (ve[23] = [
                        x(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    s("label", S$, [
                      ve[25] || (ve[25] = s("span", null, "Readiness", -1)),
                      s("select", {
                        class: "criticality-select",
                        value: B(T),
                        disabled: H(T),
                        onChange: (A) => we(T, A)
                      }, [...ve[24] || (ve[24] = [
                        s("option", { value: "required" }, "Required", -1),
                        s("option", { value: "optional" }, "Optional", -1)
                      ])], 40, I$)
                    ])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            N.value.length ? (n(), L(Et, {
              key: 5,
              title: "MISSING",
              count: N.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (n(!0), i(W, null, ye(N.value, (T) => (n(), L(Wt, {
                  key: T.name,
                  status: "missing"
                }, {
                  icon: h(() => [...ve[26] || (ve[26] = [
                    x("!", -1)
                  ])]),
                  title: h(() => [
                    x(m(T.name), 1)
                  ]),
                  subtitle: h(() => [...ve[27] || (ve[27] = [
                    s("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: h(() => [
                    $(kt, {
                      label: "Required by:",
                      value: ne(T)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    $(Re, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (A) => ee(T)
                    }, {
                      default: h(() => [...ve[28] || (ve[28] = [
                        x(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    $(Re, {
                      variant: "primary",
                      size: "sm",
                      onClick: (A) => ze(T.name)
                    }, {
                      default: h(() => [...ve[29] || (ve[29] = [
                        x(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            !M.value.length && !N.value.length && !V.value.length && !D.value.length && !F.value.length ? (n(), L(hs, {
              key: 6,
              icon: "📭",
              message: g.value ? `No nodes match '${g.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : y("", !0)
          ], 64))
        ]),
        _: 1
      }),
      $(ds, {
        show: _.value,
        title: "About Custom Nodes",
        onClose: ve[4] || (ve[4] = (T) => _.value = !1)
      }, {
        content: h(() => [...ve[30] || (ve[30] = [
          s("p", null, " Custom nodes extend ComfyUI's capabilities. ComfyGit tracks nodes in your environment manifest for reproducibility. ", -1),
          s("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            s("strong", null, "Installed:"),
            x(" Tracked nodes available in this environment"),
            s("br"),
            s("strong", null, "Missing:"),
            x(" Tracked nodes that need to be installed"),
            s("br"),
            s("strong", null, "Blocked:"),
            x(" Node types that require newer ComfyUI"),
            s("br"),
            s("strong", null, "Community-Mapped:"),
            x(" Actionable package mappings from community metadata"),
            s("br"),
            s("strong", null, "Untracked:"),
            x(" Nodes on filesystem but not in manifest ")
          ], -1),
          s("p", { style: { "margin-top": "var(--cg-space-2)", color: "var(--cg-color-text-muted)" } }, ` Use "Track as Dev" for local development nodes you don't want to version. `, -1)
        ])]),
        actions: h(() => [
          $(Re, {
            variant: "primary",
            onClick: ve[3] || (ve[3] = (T) => _.value = !1)
          }, {
            default: h(() => [...ve[31] || (ve[31] = [
              x(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      b.value ? (n(), L(d$, {
        key: 0,
        node: b.value,
        onClose: ve[5] || (ve[5] = (T) => b.value = null)
      }, null, 8, ["node"])) : y("", !0),
      I.value ? (n(), L(Tl, {
        key: 1,
        title: I.value.title,
        message: I.value.message,
        warning: I.value.warning,
        "confirm-label": I.value.confirmLabel,
        destructive: I.value.destructive,
        onConfirm: I.value.onConfirm,
        onCancel: ve[6] || (ve[6] = (T) => I.value = null)
      }, null, 8, ["title", "message", "warning", "confirm-label", "destructive", "onConfirm"])) : y("", !0)
    ], 64));
  }
}), T$ = /* @__PURE__ */ Ie(E$, [["__scopeId", "data-v-edfa1c86"]]), M$ = { class: "setting-info" }, P$ = { class: "setting-label" }, R$ = {
  key: 0,
  class: "required-marker"
}, L$ = {
  key: 0,
  class: "setting-description"
}, D$ = { class: "setting-control" }, N$ = /* @__PURE__ */ xe({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (t, o) => (n(), i("div", {
      class: Be(["setting-row", { disabled: e.disabled, stacked: e.stacked }])
    }, [
      s("div", M$, [
        s("div", P$, [
          x(m(e.label) + " ", 1),
          e.required ? (n(), i("span", R$, "*")) : y("", !0)
        ]),
        e.description ? (n(), i("div", L$, m(e.description), 1)) : y("", !0)
      ]),
      s("div", D$, [
        at(t.$slots, "default", {}, void 0)
      ])
    ], 2));
  }
}), yo = /* @__PURE__ */ Ie(N$, [["__scopeId", "data-v-3e106b1c"]]), U$ = ["type", "value", "placeholder", "disabled"], O$ = /* @__PURE__ */ xe({
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
    const a = e, l = o, r = k(null);
    function c(u) {
      const d = u.target.value;
      l("update:modelValue", d);
    }
    return lt(() => {
      a.autoFocus && r.value && r.value.focus();
    }), t({
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
      class: Be(["text-input", { error: e.hasError, monospace: e.monospace }]),
      onInput: c,
      onKeyup: [
        d[0] || (d[0] = fs((v) => u.$emit("enter"), ["enter"])),
        d[1] || (d[1] = fs((v) => u.$emit("escape"), ["escape"]))
      ],
      onFocus: d[2] || (d[2] = (v) => u.$emit("focus")),
      onBlur: d[3] || (d[3] = (v) => u.$emit("blur"))
    }, null, 42, U$));
  }
}), bo = /* @__PURE__ */ Ie(O$, [["__scopeId", "data-v-0380d08f"]]), A$ = { class: "toggle" }, z$ = ["checked", "disabled"], F$ = /* @__PURE__ */ xe({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (t, o) => (n(), i("label", A$, [
      s("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        onChange: o[0] || (o[0] = (a) => t.$emit("update:modelValue", a.target.checked)),
        class: "toggle-input"
      }, null, 40, z$),
      o[1] || (o[1] = s("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), Ci = /* @__PURE__ */ Ie(F$, [["__scopeId", "data-v-71c0f550"]]), Wa = "ComfyGit.Deploy.GitHubPAT";
function uc(e) {
  return e.startsWith("git@") || e.startsWith("ssh://");
}
function V$(e) {
  return e.startsWith("https://") || e.startsWith("http://");
}
function B$() {
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
  function a() {
    const l = e();
    return l !== null && l.length > 0;
  }
  return {
    getToken: e,
    setToken: t,
    clearToken: o,
    hasToken: a,
    isRemoteSsh: uc,
    isRemoteHttps: V$
  };
}
const W$ = { class: "workspace-settings-content" }, G$ = { class: "settings-section" }, j$ = { class: "path-setting" }, H$ = { class: "path-value" }, q$ = { class: "path-setting" }, K$ = { class: "path-value" }, J$ = { class: "settings-section" }, Q$ = { class: "token-setting" }, Y$ = {
  key: 0,
  class: "token-warning"
}, X$ = { class: "token-actions" }, Z$ = { class: "settings-section" }, eC = { class: "settings-section" }, tC = /* @__PURE__ */ xe({
  __name: "WorkspaceSettingsContent",
  props: {
    workspacePath: {}
  },
  emits: ["saved", "error"],
  setup(e, { expose: t, emit: o }) {
    const a = e, l = o, { getConfig: r, updateConfig: c, getRemotes: u, testGitAuth: d } = ct(), { getToken: v, setToken: f, clearToken: p, hasToken: w } = B$(), g = k(!1), _ = k(null), b = k(null), S = k(null), C = k(null), I = k(""), E = k(""), M = k(""), N = k(""), F = k(!1), V = k(!1), D = k(!1), q = k(""), ue = k(!1), le = k(!1), Y = k(null), me = k(!1), ne = k(!0);
    function B(ze) {
      return ze.join(" ");
    }
    function H(ze) {
      return ze.trim() ? ze.trim().split(/\s+/) : [];
    }
    const we = R(() => {
      if (!C.value) return !1;
      const ze = F.value, Ne = V.value, be = D.value, Ae = N.value !== B(C.value.comfyui_extra_args || []);
      return ze || Ne || be || Ae;
    }), oe = R(() => w());
    async function de() {
      var ze;
      g.value = !0, _.value = null;
      try {
        S.value = await r(a.workspacePath || void 0), C.value = { ...S.value }, I.value = S.value.civitai_api_key || "", E.value = S.value.huggingface_token || "", N.value = B(S.value.comfyui_extra_args || []), M.value = v() || "", q.value = M.value, F.value = !1, V.value = !1, D.value = !1, Y.value = null;
        const Ne = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        me.value = Ne !== "false", ne.value = localStorage.getItem("comfygit:popup-disabled") !== "true";
        try {
          const Ae = (ze = (await u()).remotes) == null ? void 0 : ze.find((ge) => ge.name === "origin");
          ue.value = !!(Ae && uc(Ae.url));
        } catch {
          ue.value = !1;
        }
      } catch (Ne) {
        _.value = Ne instanceof Error ? Ne.message : "Failed to load settings";
      } finally {
        g.value = !1;
      }
    }
    async function ce() {
      var ze;
      b.value = null;
      try {
        const Ne = {};
        F.value && (Ne.civitai_api_key = I.value || null), V.value && (Ne.huggingface_token = E.value || null), N.value !== B(((ze = C.value) == null ? void 0 : ze.comfyui_extra_args) || []) && (Ne.comfyui_extra_args = H(N.value)), await c(Ne, a.workspacePath || void 0), D.value && (M.value ? f(M.value) : p()), await de(), b.value = { type: "success", message: "Settings saved successfully" }, l("saved"), setTimeout(() => {
          b.value = null;
        }, 3e3);
      } catch (Ne) {
        const be = Ne instanceof Error ? Ne.message : "Failed to save settings";
        b.value = { type: "error", message: be }, l("error", be);
      }
    }
    function K() {
      C.value && (I.value = C.value.civitai_api_key || "", E.value = C.value.huggingface_token || "", N.value = B(C.value.comfyui_extra_args || []), M.value = q.value, F.value = !1, V.value = !1, D.value = !1, Y.value = null, b.value = null);
    }
    async function ee() {
      if (M.value) {
        le.value = !0, Y.value = null;
        try {
          const ze = await d(M.value);
          Y.value = {
            type: ze.status === "success" ? "success" : "error",
            message: ze.message
          };
        } catch (ze) {
          Y.value = {
            type: "error",
            message: ze instanceof Error ? ze.message : "Connection test failed"
          };
        } finally {
          le.value = !1;
        }
      }
    }
    function te() {
      M.value = "", D.value = !0, Y.value = null;
    }
    function Me(ze) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(ze)), console.log("[ComfyGit] Auto-refresh setting saved:", ze);
    }
    function Se(ze) {
      ze ? localStorage.removeItem("comfygit:popup-disabled") : localStorage.setItem("comfygit:popup-disabled", "true"), console.log("[ComfyGit] Popup setting changed:", ze ? "enabled" : "disabled");
    }
    return t({
      saveSettings: ce,
      resetSettings: K,
      hasChanges: we,
      loadSettings: de
    }), lt(de), (ze, Ne) => (n(), i("div", W$, [
      g.value ? (n(), L(Es, {
        key: 0,
        message: "Loading workspace settings..."
      })) : _.value ? (n(), L(Ts, {
        key: 1,
        message: _.value,
        retry: !0,
        onRetry: de
      }, null, 8, ["message"])) : (n(), i(W, { key: 2 }, [
        $(Et, { title: "WORKSPACE PATHS" }, {
          default: h(() => {
            var be, Ae;
            return [
              s("div", G$, [
                s("div", j$, [
                  Ne[9] || (Ne[9] = s("div", { class: "path-label" }, "Workspace Root", -1)),
                  Ne[10] || (Ne[10] = s("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                  s("div", H$, m(((be = S.value) == null ? void 0 : be.workspace_path) || "Loading..."), 1)
                ]),
                s("div", q$, [
                  Ne[11] || (Ne[11] = s("div", { class: "path-label" }, "Models Directory", -1)),
                  Ne[12] || (Ne[12] = s("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                  s("div", K$, m(((Ae = S.value) == null ? void 0 : Ae.models_path) || "Not configured"), 1)
                ])
              ])
            ];
          }),
          _: 1
        }),
        $(Et, { title: "API CREDENTIALS" }, {
          default: h(() => [
            s("div", J$, [
              $(yo, {
                label: "CivitAI API Key",
                description: "API key for downloading models from CivitAI"
              }, {
                default: h(() => [
                  $(bo, {
                    modelValue: I.value,
                    "onUpdate:modelValue": Ne[0] || (Ne[0] = (be) => I.value = be),
                    type: "password",
                    placeholder: "Enter CivitAI API key...",
                    style: { minWidth: "300px" },
                    onInput: Ne[1] || (Ne[1] = (be) => F.value = !0)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              $(yo, {
                label: "HuggingFace Token",
                description: "Access token for downloading gated/private models from HuggingFace"
              }, {
                default: h(() => [
                  $(bo, {
                    modelValue: E.value,
                    "onUpdate:modelValue": Ne[2] || (Ne[2] = (be) => E.value = be),
                    type: "password",
                    placeholder: "Enter HuggingFace token...",
                    style: { minWidth: "300px" },
                    onInput: Ne[3] || (Ne[3] = (be) => V.value = !0)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              $(yo, {
                label: "GitHub Personal Access Token",
                description: "Client-side token used for private Git remote access during deploy and remote operations",
                stacked: ""
              }, {
                default: h(() => [
                  s("div", Q$, [
                    $(bo, {
                      modelValue: M.value,
                      "onUpdate:modelValue": Ne[4] || (Ne[4] = (be) => M.value = be),
                      type: "password",
                      placeholder: "ghp_xxxxxxxxxxxxxxxxxxxx",
                      onInput: Ne[5] || (Ne[5] = (be) => D.value = !0)
                    }, null, 8, ["modelValue"]),
                    ue.value ? (n(), i("div", Y$, " SSH origin remote detected. PAT authentication only works with HTTPS remotes. ")) : y("", !0),
                    Ne[15] || (Ne[15] = s("div", { class: "token-help" }, " Stored in your browser only. Never sent to the server except when you explicitly test or use authenticated remote operations. ", -1)),
                    s("div", X$, [
                      $(Re, {
                        variant: "ghost",
                        size: "xs",
                        loading: le.value,
                        disabled: !M.value || le.value,
                        onClick: ee
                      }, {
                        default: h(() => [...Ne[13] || (Ne[13] = [
                          x(" Test Connection ", -1)
                        ])]),
                        _: 1
                      }, 8, ["loading", "disabled"]),
                      oe.value ? (n(), L(Re, {
                        key: 0,
                        variant: "ghost",
                        size: "xs",
                        onClick: te
                      }, {
                        default: h(() => [...Ne[14] || (Ne[14] = [
                          x(" Clear ", -1)
                        ])]),
                        _: 1
                      })) : y("", !0)
                    ]),
                    Y.value ? (n(), i("div", {
                      key: 1,
                      class: Be(["token-test-result", Y.value.type])
                    }, m(Y.value.message), 3)) : y("", !0)
                  ])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        $(Et, { title: "COMFYUI SETTINGS" }, {
          default: h(() => [
            s("div", Z$, [
              $(yo, {
                label: "Extra Startup Arguments",
                description: "Additional command-line arguments passed to ComfyUI on startup (e.g., --lowvram, --listen 0.0.0.0). Takes effect on next restart."
              }, {
                default: h(() => [
                  $(bo, {
                    modelValue: N.value,
                    "onUpdate:modelValue": Ne[6] || (Ne[6] = (be) => N.value = be),
                    placeholder: "--lowvram --listen 0.0.0.0",
                    style: { minWidth: "300px" }
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              Ne[16] || (Ne[16] = s("div", { class: "setting-hint" }, [
                x(" Common flags: "),
                s("code", null, "--lowvram"),
                x(", "),
                s("code", null, "--highvram"),
                x(", "),
                s("code", null, "--listen 0.0.0.0"),
                x(", "),
                s("code", null, "--cuda-device 1")
              ], -1))
            ])
          ]),
          _: 1
        }),
        $(Et, { title: "UI SETTINGS" }, {
          default: h(() => [
            s("div", eC, [
              $(yo, {
                label: "Auto-Refresh After Git Operations",
                description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
              }, {
                default: h(() => [
                  $(Ci, {
                    modelValue: me.value,
                    "onUpdate:modelValue": [
                      Ne[7] || (Ne[7] = (be) => me.value = be),
                      Me
                    ]
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              $(yo, {
                label: "Show Missing Dependencies Popup",
                description: "Show popup when loading unsaved workflows with missing nodes or models. Saved workflows are tracked in the ComfyGit panel."
              }, {
                default: h(() => [
                  $(Ci, {
                    modelValue: ne.value,
                    "onUpdate:modelValue": [
                      Ne[8] || (Ne[8] = (be) => ne.value = be),
                      Se
                    ]
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        b.value ? (n(), L(Il, {
          key: 0,
          variant: (b.value.type === "success", "compact")
        }, {
          default: h(() => [
            s("span", {
              style: Dt({ color: b.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
            }, m(b.value.message), 5)
          ]),
          _: 1
        }, 8, ["variant"])) : y("", !0)
      ], 64))
    ]));
  }
}), dc = /* @__PURE__ */ Ie(tC, [["__scopeId", "data-v-f1bdc574"]]), sC = /* @__PURE__ */ xe({
  __name: "WorkspaceSettingsSection",
  setup(e) {
    const t = k(null);
    function o() {
      console.log("[ComfyGit] Settings saved");
    }
    return (a, l) => (n(), L(zt, null, {
      header: h(() => [
        $(Ft, { title: "WORKSPACE SETTINGS" }, {
          actions: h(() => {
            var r, c;
            return [
              $(Re, {
                variant: "primary",
                size: "sm",
                disabled: !((r = t.value) != null && r.hasChanges),
                onClick: l[0] || (l[0] = (u) => {
                  var d;
                  return (d = t.value) == null ? void 0 : d.saveSettings();
                })
              }, {
                default: h(() => [...l[2] || (l[2] = [
                  x(" Save Changes ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"]),
              (c = t.value) != null && c.hasChanges ? (n(), L(Re, {
                key: 0,
                variant: "ghost",
                size: "sm",
                onClick: l[1] || (l[1] = (u) => {
                  var d;
                  return (d = t.value) == null ? void 0 : d.resetSettings();
                })
              }, {
                default: h(() => [...l[3] || (l[3] = [
                  x(" Reset ", -1)
                ])]),
                _: 1
              })) : y("", !0)
            ];
          }),
          _: 1
        })
      ]),
      content: h(() => [
        $(dc, {
          ref_key: "contentRef",
          ref: t,
          onSaved: o
        }, null, 512)
      ]),
      _: 1
    }));
  }
}), oC = { class: "env-title" }, nC = {
  key: 0,
  class: "current-badge"
}, aC = {
  key: 0,
  class: "branch-info"
}, lC = /* @__PURE__ */ xe({
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
    return (t, o) => (n(), L(Wt, {
      status: e.isCurrent ? "synced" : void 0
    }, Zt({
      icon: h(() => [
        x(m(e.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: h(() => [
        s("div", oC, [
          s("span", null, m(e.environmentName), 1),
          e.isCurrent && e.showCurrentLabel ? (n(), i("span", nC, "CURRENT")) : y("", !0)
        ])
      ]),
      subtitle: h(() => [
        e.currentBranch ? (n(), i("span", aC, [
          o[0] || (o[0] = s("span", { class: "branch-icon" }, "⎇", -1)),
          x(" " + m(e.currentBranch), 1)
        ])) : y("", !0)
      ]),
      actions: h(() => [
        at(t.$slots, "actions", {}, void 0, !0)
      ]),
      _: 2
    }, [
      e.showDetails ? {
        name: "details",
        fn: h(() => [
          $(kt, {
            label: "Workflows:",
            value: String(e.workflowCount)
          }, null, 8, ["value"]),
          $(kt, {
            label: "Nodes:",
            value: String(e.nodeCount)
          }, null, 8, ["value"]),
          $(kt, {
            label: "Models:",
            value: String(e.modelCount)
          }, null, 8, ["value"]),
          e.lastUsed && e.showLastUsed ? (n(), L(kt, {
            key: 0,
            label: "Last used:",
            value: e.lastUsed
          }, null, 8, ["value"])) : y("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), iC = /* @__PURE__ */ Ie(lC, [["__scopeId", "data-v-9231917a"]]), rC = { class: "env-details" }, cC = { class: "status-row" }, uC = {
  key: 0,
  class: "detail-row"
}, dC = { class: "value mono" }, mC = {
  key: 1,
  class: "detail-row"
}, fC = { class: "value mono small" }, vC = { class: "collapsible-section" }, pC = { class: "value" }, gC = {
  key: 0,
  class: "collapsible-body"
}, hC = { class: "item-list" }, yC = { class: "item-name" }, wC = { class: "item-name" }, _C = { class: "item-name" }, kC = { class: "item-name" }, bC = {
  key: 0,
  class: "empty-list"
}, $C = { class: "collapsible-section" }, CC = { class: "value" }, xC = {
  key: 0,
  class: "collapsible-body"
}, SC = { class: "item-list" }, IC = { class: "item-name" }, EC = {
  key: 0,
  class: "item-meta"
}, TC = {
  key: 0,
  class: "empty-list"
}, MC = { class: "collapsible-section" }, PC = { class: "value" }, RC = {
  key: 0,
  class: "missing-count"
}, LC = {
  key: 0,
  class: "collapsible-body"
}, DC = { class: "item-list" }, NC = { class: "model-row" }, UC = { class: "item-name" }, OC = { class: "model-meta" }, AC = { class: "item-meta" }, zC = {
  key: 0,
  class: "item-meta"
}, FC = {
  key: 0,
  class: "empty-list"
}, VC = {
  key: 2,
  class: "section-divider"
}, BC = {
  key: 3,
  class: "detail-row"
}, WC = { class: "value" }, GC = { class: "footer-actions" }, jC = /* @__PURE__ */ xe({
  __name: "EnvironmentDetailsModal",
  props: {
    environment: {},
    detail: {},
    canDelete: { type: Boolean }
  },
  emits: ["close", "delete", "export"],
  setup(e, { emit: t }) {
    const o = e, a = t, l = k(/* @__PURE__ */ new Set());
    function r(d) {
      l.value.has(d) ? l.value.delete(d) : l.value.add(d), l.value = new Set(l.value);
    }
    const c = R(() => {
      var v;
      if (!((v = o.detail) != null && v.workflows)) return !0;
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
    return (d, v) => (n(), L($t, {
      title: `ENVIRONMENT DETAILS: ${e.environment.name.toUpperCase()}`,
      size: "md",
      onClose: v[6] || (v[6] = (f) => a("close"))
    }, {
      body: h(() => {
        var f, p, w, g, _, b, S, C, I, E, M, N, F, V;
        return [
          s("div", rC, [
            s("div", cC, [
              v[7] || (v[7] = s("span", { class: "label" }, "Status:", -1)),
              s("span", {
                class: Be(["status-badge", e.environment.is_current ? "current" : "inactive"])
              }, m(e.environment.is_current ? "Current" : "Inactive"), 3)
            ]),
            e.environment.current_branch ? (n(), i("div", uC, [
              v[8] || (v[8] = s("span", { class: "label" }, "Branch:", -1)),
              s("span", dC, m(e.environment.current_branch), 1)
            ])) : y("", !0),
            e.environment.path ? (n(), i("div", mC, [
              v[9] || (v[9] = s("span", { class: "label" }, "Path:", -1)),
              s("span", fC, m(e.environment.path), 1)
            ])) : y("", !0),
            v[18] || (v[18] = s("div", { class: "section-divider" }, null, -1)),
            s("div", vC, [
              s("div", {
                class: "collapsible-header",
                onClick: v[0] || (v[0] = (D) => r("workflows"))
              }, [
                v[10] || (v[10] = s("span", { class: "label" }, "Workflows:", -1)),
                s("span", pC, m(((f = e.detail) == null ? void 0 : f.workflow_count) ?? e.environment.workflow_count), 1),
                (p = e.detail) != null && p.workflows ? (n(), i("span", {
                  key: 0,
                  class: Be(["chevron", { expanded: l.value.has("workflows") }])
                }, "▶", 2)) : y("", !0)
              ]),
              (w = e.detail) != null && w.workflows && l.value.has("workflows") ? (n(), i("div", gC, [
                s("div", hC, [
                  (n(!0), i(W, null, ye(e.detail.workflows.synced, (D) => (n(), i("div", {
                    key: "synced-" + D,
                    class: "list-item"
                  }, [
                    s("span", yC, m(D), 1),
                    v[11] || (v[11] = s("span", { class: "sync-badge synced" }, "synced", -1))
                  ]))), 128)),
                  (n(!0), i(W, null, ye(e.detail.workflows.new, (D) => (n(), i("div", {
                    key: "new-" + D,
                    class: "list-item"
                  }, [
                    s("span", wC, m(D), 1),
                    v[12] || (v[12] = s("span", { class: "sync-badge new" }, "new", -1))
                  ]))), 128)),
                  (n(!0), i(W, null, ye(e.detail.workflows.modified, (D) => (n(), i("div", {
                    key: "mod-" + D,
                    class: "list-item"
                  }, [
                    s("span", _C, m(D), 1),
                    v[13] || (v[13] = s("span", { class: "sync-badge modified" }, "modified", -1))
                  ]))), 128)),
                  (n(!0), i(W, null, ye(e.detail.workflows.deleted, (D) => (n(), i("div", {
                    key: "del-" + D,
                    class: "list-item"
                  }, [
                    s("span", kC, m(D), 1),
                    v[14] || (v[14] = s("span", { class: "sync-badge deleted" }, "deleted", -1))
                  ]))), 128)),
                  c.value ? (n(), i("div", bC, "No workflows")) : y("", !0)
                ])
              ])) : y("", !0)
            ]),
            s("div", $C, [
              s("div", {
                class: "collapsible-header",
                onClick: v[1] || (v[1] = (D) => r("nodes"))
              }, [
                v[15] || (v[15] = s("span", { class: "label" }, "Nodes:", -1)),
                s("span", CC, m(((g = e.detail) == null ? void 0 : g.node_count) ?? e.environment.node_count), 1),
                (_ = e.detail) != null && _.nodes ? (n(), i("span", {
                  key: 0,
                  class: Be(["chevron", { expanded: l.value.has("nodes") }])
                }, "▶", 2)) : y("", !0)
              ]),
              (b = e.detail) != null && b.nodes && l.value.has("nodes") ? (n(), i("div", xC, [
                s("div", SC, [
                  (n(!0), i(W, null, ye(e.detail.nodes, (D) => (n(), i("div", {
                    key: D.name,
                    class: "list-item"
                  }, [
                    s("span", IC, m(D.name), 1),
                    D.version ? (n(), i("span", EC, m(D.version), 1)) : y("", !0)
                  ]))), 128)),
                  e.detail.nodes.length ? y("", !0) : (n(), i("div", TC, "No nodes"))
                ])
              ])) : y("", !0)
            ]),
            s("div", MC, [
              s("div", {
                class: "collapsible-header",
                onClick: v[2] || (v[2] = (D) => r("models"))
              }, [
                v[16] || (v[16] = s("span", { class: "label" }, "Models:", -1)),
                s("span", PC, [
                  x(m(((S = e.detail) == null ? void 0 : S.model_count) ?? e.environment.model_count) + " ", 1),
                  (I = (C = e.detail) == null ? void 0 : C.models) != null && I.missing.length ? (n(), i("span", RC, "(" + m(e.detail.models.missing.length) + " missing)", 1)) : y("", !0)
                ]),
                (E = e.detail) != null && E.models ? (n(), i("span", {
                  key: 0,
                  class: Be(["chevron", { expanded: l.value.has("models") }])
                }, "▶", 2)) : y("", !0)
              ]),
              (M = e.detail) != null && M.models && l.value.has("models") ? (n(), i("div", LC, [
                s("div", DC, [
                  (n(!0), i(W, null, ye(e.detail.models.missing, (D) => (n(), i("div", {
                    key: D.filename,
                    class: "list-item model-item"
                  }, [
                    s("div", NC, [
                      s("span", UC, m(D.filename), 1),
                      s("span", {
                        class: Be(["criticality-badge", D.criticality])
                      }, m(D.criticality), 3)
                    ]),
                    s("div", OC, [
                      s("span", AC, m(D.category), 1),
                      D.workflow_names.length ? (n(), i("span", zC, " used by: " + m(D.workflow_names.join(", ")), 1)) : y("", !0)
                    ])
                  ]))), 128)),
                  e.detail.models.missing.length ? y("", !0) : (n(), i("div", FC, "No missing models"))
                ])
              ])) : y("", !0)
            ]),
            (N = e.detail) != null && N.created_at || e.environment.created_at ? (n(), i("div", VC)) : y("", !0),
            (F = e.detail) != null && F.created_at || e.environment.created_at ? (n(), i("div", BC, [
              v[17] || (v[17] = s("span", { class: "label" }, "Created:", -1)),
              s("span", WC, m(u(((V = e.detail) == null ? void 0 : V.created_at) ?? e.environment.created_at)), 1)
            ])) : y("", !0)
          ])
        ];
      }),
      footer: h(() => [
        s("div", GC, [
          $(Ue, {
            variant: "secondary",
            size: "sm",
            onClick: v[3] || (v[3] = (f) => a("export", e.environment.name))
          }, {
            default: h(() => [...v[19] || (v[19] = [
              x(" Export ", -1)
            ])]),
            _: 1
          }),
          e.canDelete ? (n(), L(Ue, {
            key: 0,
            variant: "danger",
            size: "sm",
            onClick: v[4] || (v[4] = (f) => a("delete", e.environment.name))
          }, {
            default: h(() => [...v[20] || (v[20] = [
              x(" Delete ", -1)
            ])]),
            _: 1
          })) : y("", !0),
          v[22] || (v[22] = s("div", { class: "footer-spacer" }, null, -1)),
          $(Ue, {
            variant: "secondary",
            size: "sm",
            onClick: v[5] || (v[5] = (f) => a("close"))
          }, {
            default: h(() => [...v[21] || (v[21] = [
              x(" Close ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), HC = /* @__PURE__ */ Ie(jC, [["__scopeId", "data-v-750671f5"]]), mc = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], fc = "3.12", Ml = [
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
], vc = "auto", qC = { class: "progress-bar" }, KC = /* @__PURE__ */ xe({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(e) {
    const t = e, o = R(() => `${Math.max(0, Math.min(100, t.progress))}%`);
    return (a, l) => (n(), i("div", qC, [
      s("div", {
        class: Be(["progress-fill", e.variant]),
        style: Dt({ width: o.value })
      }, null, 6)
    ]));
  }
}), pc = /* @__PURE__ */ Ie(KC, [["__scopeId", "data-v-1beb0512"]]), JC = { class: "task-progress" }, QC = { class: "progress-info" }, YC = { class: "progress-percentage" }, XC = { class: "progress-message" }, ZC = {
  key: 0,
  class: "progress-steps"
}, ex = { class: "step-icon" }, tx = { class: "step-label" }, sx = /* @__PURE__ */ xe({
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
      const r = t.steps.find((c) => c.id === l);
      return r ? t.progress >= r.progressThreshold ? "completed" : t.currentPhase === l ? "active" : "pending" : "pending";
    }
    function a(l) {
      const r = o(l);
      return r === "completed" ? "✓" : r === "active" ? "⟳" : "○";
    }
    return (l, r) => (n(), i("div", JC, [
      $(pc, {
        progress: e.progress,
        variant: e.variant
      }, null, 8, ["progress", "variant"]),
      s("div", QC, [
        s("span", YC, m(e.progress) + "%", 1),
        s("span", XC, m(e.message), 1)
      ]),
      e.showSteps && e.steps.length > 0 ? (n(), i("div", ZC, [
        (n(!0), i(W, null, ye(e.steps, (c) => (n(), i("div", {
          key: c.id,
          class: Be(["step", o(c.id)])
        }, [
          s("span", ex, m(a(c.id)), 1),
          s("span", tx, m(c.label), 1)
        ], 2))), 128))
      ])) : y("", !0)
    ]));
  }
}), ta = /* @__PURE__ */ Ie(sx, [["__scopeId", "data-v-9d1de66c"]]), ox = {
  key: 0,
  class: "create-env-form"
}, nx = { class: "form-field" }, ax = { class: "input-wrapper" }, lx = {
  key: 0,
  class: "validating-indicator"
}, ix = {
  key: 1,
  class: "valid-indicator"
}, rx = {
  key: 0,
  class: "field-error"
}, cx = { class: "form-field" }, ux = ["value"], dx = { class: "form-field" }, mx = ["disabled"], fx = ["value"], vx = { class: "form-field" }, px = ["value"], gx = { class: "form-field form-field--checkbox" }, hx = { class: "form-checkbox" }, yx = {
  key: 1,
  class: "create-env-progress"
}, wx = { class: "creating-intro" }, _x = {
  key: 0,
  class: "progress-warning"
}, kx = {
  key: 1,
  class: "create-error"
}, bx = { class: "error-message" }, $x = {
  key: 1,
  class: "footer-status"
}, Cx = 10, xx = /* @__PURE__ */ xe({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(e, { emit: t }) {
    const o = t, { getComfyUIReleases: a, createEnvironment: l, getCreateProgress: r, validateEnvironmentName: c } = ct(), u = k(""), d = k(fc), v = k("latest"), f = k(vc), p = k(!1), w = k(null), g = k(!1), _ = k(!1);
    let b = null, S = 0;
    const C = R(() => !!u.value.trim() && _.value && !w.value && !g.value && !M.value), I = k([{ tag_name: "latest", name: "Latest", published_at: "" }]), E = k(!1), M = k(!1), N = k({
      progress: 0,
      message: ""
    });
    let F = null, V = 0;
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
    ], q = k(null);
    gt(u, (oe) => {
      _.value = !1, b && (clearTimeout(b), b = null);
      const de = oe.trim();
      if (!de) {
        w.value = null, g.value = !1;
        return;
      }
      g.value = !0, b = setTimeout(() => {
        ue(de);
      }, 400);
    });
    async function ue(oe, de = !1) {
      const ce = oe.trim();
      if (!ce)
        return _.value = !1, g.value = !1, w.value = de ? "Environment name is required" : null, !1;
      const K = ++S;
      g.value = !0;
      try {
        const ee = await c(ce);
        return K !== S ? !1 : (w.value = ee.valid ? null : ee.error || "Invalid name", _.value = !!ee.valid, !!ee.valid);
      } catch {
        return K !== S || (w.value = "Failed to validate name", _.value = !1), !1;
      } finally {
        K === S && (g.value = !1);
      }
    }
    async function le() {
      b && (clearTimeout(b), b = null), await ue(u.value, !0);
    }
    function Y() {
      M.value || o("close");
    }
    async function me() {
      const oe = u.value.trim();
      if (!oe) {
        w.value = "Environment name is required";
        return;
      }
      if (b && (clearTimeout(b), b = null), !!await ue(oe, !0)) {
        M.value = !0, N.value = { progress: 0, message: "Starting...", phase: "init" };
        try {
          const ce = {
            name: oe,
            python_version: d.value,
            comfyui_version: v.value,
            torch_backend: f.value,
            switch_after: !1
            // We'll handle switch in parent after modal closes
          }, K = await l(ce);
          K.status === "started" ? ne() : K.status === "error" && (N.value = {
            progress: 0,
            message: K.message || "Failed to start creation",
            error: K.message
          });
        } catch (ce) {
          N.value = {
            progress: 0,
            message: ce instanceof Error ? ce.message : "Unknown error",
            error: ce instanceof Error ? ce.message : "Unknown error"
          };
        }
      }
    }
    function ne() {
      F || (V = 0, F = window.setInterval(async () => {
        try {
          const oe = await r();
          V = 0, N.value = {
            progress: oe.progress ?? 0,
            message: oe.message,
            phase: oe.phase,
            error: oe.error
          }, oe.state === "complete" ? (B(), o("created", oe.environment_name || u.value.trim(), p.value)) : oe.state === "error" ? (B(), N.value.error = oe.error || oe.message) : oe.state === "idle" && M.value && (B(), N.value.error = "Creation was interrupted. Please try again.");
        } catch {
          V++, V >= Cx && (B(), N.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function B() {
      F && (clearInterval(F), F = null);
    }
    function H() {
      M.value = !1, N.value = { progress: 0, message: "" }, o("close");
    }
    async function we() {
      E.value = !0;
      try {
        I.value = await a();
      } catch (oe) {
        console.error("Failed to load ComfyUI releases:", oe);
      } finally {
        E.value = !1;
      }
    }
    return lt(async () => {
      var oe;
      await Ot(), (oe = q.value) == null || oe.focus(), we();
    }), Uo(() => {
      B(), b && (clearTimeout(b), b = null);
    }), (oe, de) => (n(), L($t, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !M.value,
      onClose: Y
    }, {
      body: h(() => [
        M.value ? (n(), i("div", yx, [
          s("p", wx, [
            de[12] || (de[12] = x(" Creating environment ", -1)),
            s("strong", null, m(u.value), 1),
            de[13] || (de[13] = x("... ", -1))
          ]),
          $(ta, {
            progress: N.value.progress,
            message: N.value.message,
            "current-phase": N.value.phase,
            variant: N.value.error ? "error" : "default",
            "show-steps": !0,
            steps: D
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          N.value.error ? y("", !0) : (n(), i("p", _x, " This may take several minutes. Please wait... ")),
          N.value.error ? (n(), i("div", kx, [
            s("p", bx, m(N.value.error), 1)
          ])) : y("", !0)
        ])) : (n(), i("div", ox, [
          s("div", nx, [
            de[6] || (de[6] = s("label", { class: "form-label" }, "Name", -1)),
            s("div", ax, [
              Pt(s("input", {
                ref_key: "nameInput",
                ref: q,
                "onUpdate:modelValue": de[0] || (de[0] = (ce) => u.value = ce),
                type: "text",
                class: Be(["form-input", { error: !!w.value, valid: _.value }]),
                placeholder: "my-environment",
                onKeyup: fs(me, ["enter"]),
                onBlur: le
              }, null, 34), [
                [cn, u.value]
              ]),
              g.value ? (n(), i("span", lx, "...")) : _.value ? (n(), i("span", ix, "✓")) : y("", !0)
            ]),
            w.value ? (n(), i("div", rx, m(w.value), 1)) : y("", !0),
            de[7] || (de[7] = s("div", { class: "field-hint" }, "Use letters, numbers, dots, hyphens, and underscores.", -1))
          ]),
          s("div", cx, [
            de[8] || (de[8] = s("label", { class: "form-label" }, "Python Version", -1)),
            Pt(s("select", {
              "onUpdate:modelValue": de[1] || (de[1] = (ce) => d.value = ce),
              class: "form-select"
            }, [
              (n(!0), i(W, null, ye(ot(mc), (ce) => (n(), i("option", {
                key: ce,
                value: ce
              }, m(ce), 9, ux))), 128))
            ], 512), [
              [To, d.value]
            ])
          ]),
          s("div", dx, [
            de[9] || (de[9] = s("label", { class: "form-label" }, "ComfyUI Version", -1)),
            Pt(s("select", {
              "onUpdate:modelValue": de[2] || (de[2] = (ce) => v.value = ce),
              class: "form-select",
              disabled: E.value
            }, [
              (n(!0), i(W, null, ye(I.value, (ce) => (n(), i("option", {
                key: ce.tag_name,
                value: ce.tag_name
              }, m(ce.name), 9, fx))), 128))
            ], 8, mx), [
              [To, v.value]
            ])
          ]),
          s("div", vx, [
            de[10] || (de[10] = s("label", { class: "form-label" }, "PyTorch Backend", -1)),
            Pt(s("select", {
              "onUpdate:modelValue": de[3] || (de[3] = (ce) => f.value = ce),
              class: "form-select"
            }, [
              (n(!0), i(W, null, ye(ot(Ml), (ce) => (n(), i("option", {
                key: ce,
                value: ce
              }, m(ce) + m(ce === "auto" ? " (detect GPU)" : ""), 9, px))), 128))
            ], 512), [
              [To, f.value]
            ])
          ]),
          s("div", gx, [
            s("label", hx, [
              Pt(s("input", {
                type: "checkbox",
                "onUpdate:modelValue": de[4] || (de[4] = (ce) => p.value = ce)
              }, null, 512), [
                [ea, p.value]
              ]),
              de[11] || (de[11] = s("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ]))
      ]),
      footer: h(() => [
        M.value ? (n(), i(W, { key: 1 }, [
          N.value.error ? (n(), L(Ue, {
            key: 0,
            variant: "secondary",
            onClick: H
          }, {
            default: h(() => [...de[16] || (de[16] = [
              x(" Close ", -1)
            ])]),
            _: 1
          })) : (n(), i("span", $x, " Creating environment... "))
        ], 64)) : (n(), i(W, { key: 0 }, [
          $(Ue, {
            variant: "primary",
            disabled: !C.value,
            onClick: me
          }, {
            default: h(() => [...de[14] || (de[14] = [
              x(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          $(Ue, {
            variant: "secondary",
            onClick: de[5] || (de[5] = (ce) => o("close"))
          }, {
            default: h(() => [...de[15] || (de[15] = [
              x(" Cancel ", -1)
            ])]),
            _: 1
          })
        ], 64))
      ]),
      _: 1
    }, 8, ["show-close-button"]));
  }
}), Sx = /* @__PURE__ */ Ie(xx, [["__scopeId", "data-v-3faa3d9b"]]), Ix = /* @__PURE__ */ xe({
  __name: "EnvironmentsSection",
  props: {
    canCreate: { type: Boolean, default: !0 },
    canSwitch: { type: Boolean, default: !0 },
    canDelete: { type: Boolean, default: !0 }
  },
  emits: ["switch", "created", "delete", "import", "export"],
  setup(e, { expose: t, emit: o }) {
    const a = o, { getEnvironments: l, getEnvironmentDetails: r } = ct(), c = k([]), u = k(!1), d = k(null), v = k(""), f = k(!1), p = k(!1), w = k(null), g = k(null), _ = R(() => [...c.value].sort((F, V) => F.is_current !== V.is_current ? F.is_current ? -1 : 1 : F.name.localeCompare(V.name))), b = R(() => {
      if (!v.value.trim()) return _.value;
      const F = v.value.toLowerCase();
      return _.value.filter(
        (V) => {
          var D;
          return V.name.toLowerCase().includes(F) || ((D = V.current_branch) == null ? void 0 : D.toLowerCase().includes(F));
        }
      );
    });
    function S(F, V) {
      p.value = !1, a("created", F, V);
    }
    function C() {
      p.value = !0;
    }
    async function I(F) {
      w.value = F, g.value = null;
      const V = await r(F.name);
      V && (g.value = V);
    }
    function E(F) {
      w.value = null, g.value = null, a("delete", F);
    }
    function M(F) {
      w.value = null, g.value = null, a("export", F);
    }
    async function N() {
      u.value = !0, d.value = null;
      try {
        c.value = await l();
      } catch (F) {
        d.value = F instanceof Error ? F.message : "Failed to load environments";
      } finally {
        u.value = !1;
      }
    }
    return lt(N), t({
      loadEnvironments: N,
      openCreateModal: C
    }), (F, V) => (n(), i(W, null, [
      $(zt, null, {
        header: h(() => [
          $(Ft, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: V[1] || (V[1] = (D) => f.value = !0)
          }, {
            actions: h(() => [
              e.canCreate ? (n(), L(Re, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: C
              }, {
                default: h(() => [...V[7] || (V[7] = [
                  x(" Create ", -1)
                ])]),
                _: 1
              })) : y("", !0),
              $(Re, {
                variant: "secondary",
                size: "sm",
                onClick: V[0] || (V[0] = (D) => F.$emit("import"))
              }, {
                default: h(() => [...V[8] || (V[8] = [
                  x(" Import ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          $(po, {
            modelValue: v.value,
            "onUpdate:modelValue": V[2] || (V[2] = (D) => v.value = D),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          u.value ? (n(), L(Es, {
            key: 0,
            message: "Loading environments..."
          })) : d.value ? (n(), L(Ts, {
            key: 1,
            message: d.value,
            retry: !0,
            onRetry: N
          }, null, 8, ["message"])) : (n(), i(W, { key: 2 }, [
            b.value.length ? (n(), L(Et, {
              key: 0,
              title: "ENVIRONMENTS",
              count: b.value.length
            }, {
              default: h(() => [
                (n(!0), i(W, null, ye(b.value, (D) => (n(), L(iC, {
                  key: D.name,
                  "environment-name": D.name,
                  "is-current": D.is_current,
                  "current-branch": D.current_branch,
                  "show-last-used": !1
                }, {
                  actions: h(() => [
                    !D.is_current && e.canSwitch ? (n(), L(Re, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (q) => F.$emit("switch", D.name)
                    }, {
                      default: h(() => [...V[9] || (V[9] = [
                        x(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : y("", !0),
                    $(Re, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (q) => I(D)
                    }, {
                      default: h(() => [...V[10] || (V[10] = [
                        x(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    $(Re, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (q) => F.$emit("export", D.name)
                    }, {
                      default: h(() => [...V[11] || (V[11] = [
                        x(" Export ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["environment-name", "is-current", "current-branch"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            b.value.length ? y("", !0) : (n(), L(hs, {
              key: 1,
              icon: "🌍",
              message: v.value ? `No environments match '${v.value}'` : "No environments found. Create one to get started!"
            }, Zt({ _: 2 }, [
              v.value ? void 0 : {
                name: "actions",
                fn: h(() => [
                  e.canCreate ? (n(), L(Re, {
                    key: 0,
                    variant: "primary",
                    onClick: C
                  }, {
                    default: h(() => [...V[12] || (V[12] = [
                      x(" Create Environment ", -1)
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
      $(ds, {
        show: f.value,
        title: "About Environments",
        onClose: V[4] || (V[4] = (D) => f.value = !1)
      }, {
        content: h(() => [...V[13] || (V[13] = [
          s("p", null, [
            s("strong", null, "Environments"),
            x(" are isolated workspaces that contain their own workflows, nodes, and models. Each environment can track different branches and maintain separate state. ")
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
          $(Re, {
            variant: "secondary",
            onClick: V[3] || (V[3] = (D) => f.value = !1)
          }, {
            default: h(() => [...V[14] || (V[14] = [
              x(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w.value ? (n(), L(HC, {
        key: 0,
        environment: w.value,
        detail: g.value,
        "can-delete": e.canDelete && c.value.length > 1,
        onClose: V[5] || (V[5] = (D) => {
          w.value = null, g.value = null;
        }),
        onDelete: E,
        onExport: M
      }, null, 8, ["environment", "detail", "can-delete"])) : y("", !0),
      p.value ? (n(), L(Sx, {
        key: 1,
        onClose: V[6] || (V[6] = (D) => p.value = !1),
        onCreated: S
      })) : y("", !0)
    ], 64));
  }
}), Ex = /* @__PURE__ */ Ie(Ix, [["__scopeId", "data-v-01163d8c"]]), Tx = { class: "file-path" }, Mx = { class: "file-path-text" }, Px = ["title"], Rx = /* @__PURE__ */ xe({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(e) {
    const t = e, o = k(!1);
    async function a() {
      try {
        await navigator.clipboard.writeText(t.path), o.value = !0, setTimeout(() => {
          o.value = !1;
        }, 2e3);
      } catch (l) {
        console.error("Failed to copy:", l);
      }
    }
    return (l, r) => (n(), i("div", Tx, [
      r[0] || (r[0] = s("span", { class: "file-path-icon" }, "📄", -1)),
      s("code", Mx, m(e.path), 1),
      e.copyable ? (n(), i("button", {
        key: 0,
        class: "copy-btn",
        title: o.value ? "Copied!" : "Copy path",
        onClick: a
      }, m(o.value ? "✓" : "📋"), 9, Px)) : y("", !0)
    ]));
  }
}), Lx = /* @__PURE__ */ Ie(Rx, [["__scopeId", "data-v-f0982173"]]), Dx = { class: "base-textarea-wrapper" }, Nx = ["value", "rows", "placeholder", "disabled", "maxlength"], Ux = {
  key: 0,
  class: "base-textarea-count"
}, Ox = /* @__PURE__ */ xe({
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
    const o = e, a = t;
    function l(r) {
      r.shiftKey || r.ctrlKey || r.metaKey || o.submitOnEnter && (r.preventDefault(), a("submit"));
    }
    return (r, c) => (n(), i("div", Dx, [
      s("textarea", {
        value: e.modelValue,
        rows: e.rows,
        placeholder: e.placeholder,
        disabled: e.disabled,
        maxlength: e.maxLength,
        class: "base-textarea",
        onInput: c[0] || (c[0] = (u) => r.$emit("update:modelValue", u.target.value)),
        onKeydown: [
          c[1] || (c[1] = fs(vt((u) => r.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          c[2] || (c[2] = fs(vt((u) => r.$emit("ctrlEnter"), ["meta"]), ["enter"])),
          fs(l, ["enter"])
        ]
      }, null, 40, Nx),
      e.showCharCount && e.maxLength ? (n(), i("div", Ux, m(e.modelValue.length) + " / " + m(e.maxLength), 1)) : y("", !0)
    ]));
  }
}), Mo = /* @__PURE__ */ Ie(Ox, [["__scopeId", "data-v-c6d16c93"]]), Ax = ["checked", "disabled"], zx = { class: "base-checkbox-box" }, Fx = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, Vx = {
  key: 0,
  class: "base-checkbox-label"
}, Bx = /* @__PURE__ */ xe({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (t, o) => (n(), i("label", {
      class: Be(["base-checkbox", { disabled: e.disabled }])
    }, [
      s("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        class: "base-checkbox-input",
        onChange: o[0] || (o[0] = (a) => t.$emit("update:modelValue", a.target.checked))
      }, null, 40, Ax),
      s("span", zx, [
        e.modelValue ? (n(), i("svg", Fx, [...o[1] || (o[1] = [
          s("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : y("", !0)
      ]),
      t.$slots.default ? (n(), i("span", Vx, [
        at(t.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), sa = /* @__PURE__ */ Ie(Bx, [["__scopeId", "data-v-bf17c831"]]), Wx = { class: "export-blocked" }, Gx = { class: "error-header" }, jx = { class: "error-summary" }, Hx = { class: "error-title" }, qx = { class: "error-description" }, Kx = { class: "issues-list" }, Jx = { class: "issue-message" }, Qx = {
  key: 0,
  class: "issue-details"
}, Yx = ["onClick"], Xx = { class: "issue-fix" }, Zx = {
  key: 0,
  class: "commit-section"
}, e3 = {
  key: 0,
  class: "issues-warning"
}, t3 = {
  key: 1,
  class: "commit-error"
}, s3 = /* @__PURE__ */ xe({
  __name: "ExportBlockedModal",
  props: {
    issues: {},
    mode: {}
  },
  emits: ["close", "committed"],
  setup(e, { emit: t }) {
    const o = e, a = t, { commit: l } = ct(), r = k(""), c = k(!1), u = k(!1), d = k(""), v = go({}), f = R(() => o.mode === "publish" ? "Publish" : "Export"), p = R(
      () => o.issues.some((C) => C.type === "uncommitted_workflows" || C.type === "uncommitted_git_changes")
    ), w = R(
      () => o.issues.some((C) => C.type === "unresolved_issues")
    ), g = R(
      () => w.value && !u.value
    ), _ = R(
      () => p.value && r.value.trim() !== "" && !c.value && !g.value
    );
    function b(C) {
      const I = o.issues[C];
      return v[C] || I.details.length <= 3 ? I.details : I.details.slice(0, 3);
    }
    async function S() {
      var C;
      if (_.value) {
        c.value = !0, d.value = "";
        try {
          const I = await l(r.value.trim(), u.value);
          if (I.status === "success")
            a("committed");
          else if (I.status === "blocked") {
            const E = ((C = I.issues) == null ? void 0 : C.map((M) => `${M.name}: ${M.issue}`).join("; ")) || "Unknown issues";
            d.value = `Commit blocked: ${E}`;
          } else
            d.value = I.message || "Commit failed";
        } catch (I) {
          d.value = I instanceof Error ? I.message : "Commit failed";
        } finally {
          c.value = !1;
        }
      }
    }
    return (C, I) => (n(), L($t, {
      title: p.value ? `Commit & ${f.value}` : `Cannot ${f.value}`,
      size: "md",
      onClose: I[4] || (I[4] = (E) => C.$emit("close"))
    }, {
      body: h(() => [
        s("div", Wx, [
          s("div", Gx, [
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
            s("div", jx, [
              s("h3", Hx, m(f.value) + " blocked", 1),
              s("p", qx, m(p.value ? `Commit your changes to proceed with ${f.value.toLowerCase()}.` : `The following issues must be resolved before ${f.value.toLowerCase()}.`), 1)
            ])
          ]),
          s("div", Kx, [
            (n(!0), i(W, null, ye(e.issues, (E, M) => (n(), i("div", {
              key: M,
              class: "issue-item"
            }, [
              s("div", Jx, m(E.message), 1),
              E.details.length ? (n(), i("div", Qx, [
                (n(!0), i(W, null, ye(b(M), (N, F) => (n(), i("div", {
                  key: F,
                  class: "issue-detail"
                }, m(N), 1))), 128)),
                E.details.length > 3 && !v[M] ? (n(), i("button", {
                  key: 0,
                  class: "show-more-inline",
                  onClick: (N) => v[M] = !0
                }, " +" + m(E.details.length - 3) + " more ", 9, Yx)) : y("", !0)
              ])) : y("", !0),
              s("div", Xx, [
                E.type === "uncommitted_workflows" ? (n(), i(W, { key: 0 }, [
                  x(" Commit your workflow changes before " + m(f.value.toLowerCase()) + "ing. ", 1)
                ], 64)) : E.type === "uncommitted_git_changes" ? (n(), i(W, { key: 1 }, [
                  x(" Commit your changes before " + m(f.value.toLowerCase()) + "ing. ", 1)
                ], 64)) : E.type === "unresolved_issues" ? (n(), i(W, { key: 2 }, [
                  x(" Resolve all workflow issues before " + m(f.value.toLowerCase()) + "ing. ", 1)
                ], 64)) : y("", !0)
              ])
            ]))), 128))
          ]),
          p.value ? (n(), i("div", Zx, [
            w.value ? (n(), i("div", e3, [
              I[7] || (I[7] = s("div", { class: "warning-header" }, [
                s("span", { class: "warning-icon-badge" }, "!"),
                s("span", { class: "warning-label" }, "Some workflow issues cannot be fixed by committing")
              ], -1)),
              $(sa, {
                modelValue: u.value,
                "onUpdate:modelValue": I[0] || (I[0] = (E) => u.value = E),
                class: "allow-issues-toggle"
              }, {
                default: h(() => [...I[6] || (I[6] = [
                  x(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : y("", !0),
            $(Mo, {
              modelValue: r.value,
              "onUpdate:modelValue": I[1] || (I[1] = (E) => r.value = E),
              placeholder: "Describe your changes...",
              disabled: c.value || g.value,
              rows: 3,
              "submit-on-enter": !0,
              onSubmit: S,
              onCtrlEnter: S
            }, null, 8, ["modelValue", "disabled"]),
            d.value ? (n(), i("div", t3, m(d.value), 1)) : y("", !0)
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        p.value ? (n(), i(W, { key: 0 }, [
          $(Ue, {
            variant: "secondary",
            onClick: I[2] || (I[2] = (E) => C.$emit("close"))
          }, {
            default: h(() => [...I[8] || (I[8] = [
              x(" Cancel ", -1)
            ])]),
            _: 1
          }),
          $(Ue, {
            variant: u.value ? "danger" : "primary",
            disabled: !_.value,
            loading: c.value,
            onClick: S
          }, {
            default: h(() => [
              x(m(c.value ? "Committing..." : u.value ? `Force Commit & ${f.value}` : `Commit & ${f.value}`), 1)
            ]),
            _: 1
          }, 8, ["variant", "disabled", "loading"])
        ], 64)) : (n(), L(Ue, {
          key: 1,
          variant: "primary",
          onClick: I[3] || (I[3] = (E) => C.$emit("close"))
        }, {
          default: h(() => [...I[9] || (I[9] = [
            x(" Understood ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), o3 = /* @__PURE__ */ Ie(s3, [["__scopeId", "data-v-a8990107"]]), n3 = { class: "repro-warning" }, a3 = { class: "repro-warning-content" }, l3 = {
  key: 0,
  class: "warning-group"
}, i3 = { class: "warning-list" }, r3 = { key: 0 }, c3 = {
  key: 1,
  class: "warning-group"
}, u3 = { class: "warning-list" }, d3 = { key: 0 }, m3 = /* @__PURE__ */ xe({
  __name: "ReproducibilityWarningBanner",
  props: {
    warnings: {},
    message: { default: "Missing provenance can prevent another machine, or ComfyGit Cloud, from rebuilding this environment exactly. Review the missing details, or continue anyway." },
    maxItemsPerGroup: { default: 2 }
  },
  emits: ["review"],
  setup(e) {
    const t = e, o = R(() => t.warnings.models_without_sources || []), a = R(() => t.warnings.nodes_without_provenance || []), l = R(() => o.value.length), r = R(() => a.value.length), c = R(() => l.value + r.value), u = R(
      () => o.value.slice(0, t.maxItemsPerGroup)
    ), d = R(
      () => a.value.slice(0, t.maxItemsPerGroup)
    ), v = R(
      () => Math.max(0, l.value - u.value.length)
    ), f = R(
      () => Math.max(0, r.value - d.value.length)
    );
    return (p, w) => (n(), i("div", n3, [
      w[3] || (w[3] = s("span", { class: "repro-warning-icon" }, "!", -1)),
      s("div", a3, [
        s("strong", null, m(c.value) + " reproducibility warning" + m(c.value !== 1 ? "s" : ""), 1),
        s("p", null, m(e.message), 1),
        l.value ? (n(), i("div", l3, [
          w[1] || (w[1] = s("div", { class: "warning-group-label" }, " Models ", -1)),
          s("ul", i3, [
            (n(!0), i(W, null, ye(u.value, (g) => (n(), i("li", {
              key: g.hash || g.filename
            }, m(g.filename), 1))), 128)),
            v.value ? (n(), i("li", r3, "+" + m(v.value) + " more model" + m(v.value !== 1 ? "s" : ""), 1)) : y("", !0)
          ])
        ])) : y("", !0),
        r.value ? (n(), i("div", c3, [
          w[2] || (w[2] = s("div", { class: "warning-group-label" }, " Nodes ", -1)),
          s("ul", u3, [
            (n(!0), i(W, null, ye(d.value, (g) => (n(), i("li", {
              key: g.name
            }, m(g.name) + " (" + m(g.criticality) + ") ", 1))), 128)),
            f.value ? (n(), i("li", d3, "+" + m(f.value) + " more node" + m(f.value !== 1 ? "s" : ""), 1)) : y("", !0)
          ])
        ])) : y("", !0),
        s("button", {
          class: "review-issues-btn",
          onClick: w[0] || (w[0] = (g) => p.$emit("review"))
        }, " Review Issues ")
      ])
    ]));
  }
}), ol = /* @__PURE__ */ Ie(m3, [["__scopeId", "data-v-11be310d"]]), f3 = { class: "export-card" }, v3 = { class: "export-path-row" }, p3 = {
  key: 1,
  class: "export-warning"
}, g3 = { class: "export-footer-actions" }, h3 = /* @__PURE__ */ xe({
  __name: "ExportSection",
  props: {
    environmentName: {},
    embedded: { type: Boolean }
  },
  emits: ["close"],
  setup(e) {
    const t = e, { validateExport: o, exportEnvWithForce: a, validateEnvironmentExport: l, exportEnvironmentWithForce: r } = ct(), c = k(""), u = k(!1), d = k(!1), v = k(!1), f = k(null), p = k(!1), w = k(null), g = k(!1), _ = k(!1), b = R(() => {
      var B;
      return ((B = t.environmentName) == null ? void 0 : B.trim()) || null;
    }), S = R(() => b.value ? `EXPORT ENVIRONMENT: ${b.value.toUpperCase()}` : "EXPORT ENVIRONMENT"), C = R(() => b.value ? `Environment '${b.value}' has been exported` : "Your environment has been exported"), I = R(() => u.value ? "Validating..." : d.value ? "Exporting..." : V.value ? "Export Anyway" : "Export Environment"), E = R(() => {
      var B;
      return ((B = w.value) == null ? void 0 : B.warnings) || {
        models_without_sources: [],
        nodes_without_provenance: []
      };
    }), M = R(
      () => E.value.models_without_sources.length
    ), N = R(
      () => {
        var B;
        return ((B = E.value.nodes_without_provenance) == null ? void 0 : B.length) || 0;
      }
    ), F = R(
      () => M.value + N.value
    ), V = R(
      () => {
        var B;
        return !!((B = w.value) != null && B.can_export) && F.value > 0;
      }
    );
    async function D() {
      u.value = !0;
      try {
        const B = b.value ? await l(b.value) : await o();
        return w.value = B, B;
      } catch (B) {
        return f.value = {
          status: "error",
          message: B instanceof Error ? B.message : "Validation failed"
        }, null;
      } finally {
        u.value = !1;
      }
    }
    async function q() {
      f.value = null;
      const B = await D();
      if (B) {
        if (!B.can_export) {
          g.value = !0;
          return;
        }
        await Y();
      }
    }
    async function ue() {
      g.value = !1;
      const B = await D();
      if (B) {
        if (!B.can_export) {
          g.value = !0;
          return;
        }
        await Y();
      }
    }
    async function le() {
      await D();
    }
    async function Y() {
      d.value = !0;
      try {
        const B = b.value ? await r(b.value, c.value || void 0) : await a(c.value || void 0);
        f.value = B;
      } catch (B) {
        f.value = {
          status: "error",
          message: B instanceof Error ? B.message : "Export failed"
        };
      } finally {
        d.value = !1;
      }
    }
    async function me() {
      var B;
      if ((B = f.value) != null && B.path)
        try {
          await navigator.clipboard.writeText(f.value.path);
        } catch (H) {
          console.error("Failed to copy path:", H);
        }
    }
    async function ne() {
      var B;
      if ((B = f.value) != null && B.path) {
        v.value = !0;
        try {
          const H = await fetch(`/v2/comfygit/download?path=${encodeURIComponent(f.value.path)}`);
          if (!H.ok)
            throw new Error(`Download failed: ${H.statusText}`);
          const we = await H.blob(), oe = URL.createObjectURL(we), de = f.value.path.split("/").pop() || "environment-export.tar.gz", ce = document.createElement("a");
          ce.href = oe, ce.download = de, document.body.appendChild(ce), ce.click(), document.body.removeChild(ce), URL.revokeObjectURL(oe);
        } catch (H) {
          console.error("Failed to download:", H), alert(`Download failed: ${H instanceof Error ? H.message : "Unknown error"}`);
        } finally {
          v.value = !1;
        }
      }
    }
    return lt(() => {
      D();
    }), (B, H) => (n(), i(W, null, [
      $(zt, null, Zt({
        content: h(() => [
          V.value ? (n(), L(ol, {
            key: 0,
            class: "export-readiness-warning",
            warnings: E.value,
            message: "Missing provenance can prevent another machine, or ComfyGit Cloud, from rebuilding this environment exactly.",
            onReview: H[1] || (H[1] = (we) => _.value = !0)
          }, null, 8, ["warnings"])) : y("", !0),
          $(Et, { title: "EXPORT OPTIONS" }, {
            default: h(() => [
              s("div", f3, [
                H[8] || (H[8] = s("div", { class: "export-card-header" }, [
                  s("span", { class: "export-icon" }, "📁"),
                  s("div", { class: "export-header-text" }, [
                    s("div", { class: "export-title" }, "Output Destination"),
                    s("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                s("div", v3, [
                  $(bo, {
                    modelValue: c.value,
                    "onUpdate:modelValue": H[2] || (H[2] = (we) => c.value = we),
                    placeholder: "/mnt/c/Users/you/exports/",
                    class: "path-input"
                  }, null, 8, ["modelValue"])
                ])
              ])
            ]),
            _: 1
          }),
          f.value ? (n(), L(Et, {
            key: 1,
            title: "LAST EXPORT"
          }, {
            default: h(() => [
              $(Wt, {
                status: f.value.status === "success" ? "synced" : "broken"
              }, Zt({
                icon: h(() => [
                  x(m(f.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: h(() => [
                  x(m(f.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: h(() => [
                  x(m(f.value.status === "success" ? C.value : f.value.message), 1)
                ]),
                _: 2
              }, [
                f.value.status === "success" ? {
                  name: "details",
                  fn: h(() => [
                    $(kt, { label: "Saved to:" }, {
                      default: h(() => [
                        $(Lx, {
                          path: f.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    f.value.models_without_sources !== void 0 ? (n(), L(kt, {
                      key: 0,
                      label: "Models without sources:",
                      value: f.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : y("", !0),
                    f.value.models_without_sources && f.value.models_without_sources > 0 ? (n(), i("div", p3, [...H[9] || (H[9] = [
                      s("span", { class: "warning-icon" }, "!", -1),
                      s("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : y("", !0)
                  ]),
                  key: "0"
                } : void 0,
                f.value.status === "success" ? {
                  name: "actions",
                  fn: h(() => [
                    $(Re, {
                      variant: "primary",
                      size: "sm",
                      loading: v.value,
                      onClick: ne
                    }, {
                      default: h(() => [...H[10] || (H[10] = [
                        s("svg", {
                          width: "14",
                          height: "14",
                          viewBox: "0 0 16 16",
                          fill: "currentColor"
                        }, [
                          s("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                          s("path", { d: "M14 14H2v2h12v-2z" })
                        ], -1),
                        x(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["loading"]),
                    $(Re, {
                      variant: "secondary",
                      size: "sm",
                      onClick: me
                    }, {
                      default: h(() => [...H[11] || (H[11] = [
                        x(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    $(Re, {
                      variant: "ghost",
                      size: "sm",
                      onClick: H[3] || (H[3] = (we) => f.value = null)
                    }, {
                      default: h(() => [...H[12] || (H[12] = [
                        x(" Dismiss ", -1)
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
          s("div", g3, [
            e.embedded ? (n(), L(Re, {
              key: 0,
              variant: "secondary",
              size: "md",
              disabled: d.value,
              onClick: H[4] || (H[4] = (we) => B.$emit("close"))
            }, {
              default: h(() => [...H[13] || (H[13] = [
                x(" Cancel ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])) : y("", !0),
            $(Re, {
              variant: "primary",
              size: "md",
              loading: u.value || d.value,
              disabled: u.value || d.value,
              onClick: q
            }, {
              default: h(() => [
                x(m(I.value), 1)
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
            $(Ft, {
              title: S.value,
              "show-info": !0,
              onInfoClick: H[0] || (H[0] = (we) => p.value = !0)
            }, null, 8, ["title"])
          ]),
          key: "0"
        }
      ]), 1024),
      $(ds, {
        show: p.value,
        title: "What Gets Exported",
        onClose: H[5] || (H[5] = (we) => p.value = !1)
      }, {
        content: h(() => [...H[14] || (H[14] = [
          s("div", { class: "export-info" }, [
            s("div", { class: "info-section" }, [
              s("strong", null, "Included in Export:"),
              s("ul", null, [
                s("li", null, [
                  s("strong", null, "Workflows"),
                  x(" — All workflows in this environment")
                ]),
                s("li", null, [
                  s("strong", null, "Custom Nodes"),
                  x(" — Node definitions and dependencies")
                ]),
                s("li", null, [
                  s("strong", null, "Models"),
                  x(" — References and source URLs (not the files)")
                ]),
                s("li", null, [
                  s("strong", null, "Configuration"),
                  x(" — Environment settings and metadata")
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
              x(" Model files are not included to keep exports small. Models can be re-downloaded on import using their source information. ")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      g.value && w.value ? (n(), L(o3, {
        key: 0,
        issues: w.value.blocking_issues,
        onClose: H[6] || (H[6] = (we) => g.value = !1),
        onCommitted: ue
      }, null, 8, ["issues"])) : y("", !0),
      _.value && w.value ? (n(), L(Sl, {
        key: 1,
        warnings: w.value.warnings,
        onClose: H[7] || (H[7] = (we) => _.value = !1),
        onRevalidate: le
      }, null, 8, ["warnings"])) : y("", !0)
    ], 64));
  }
}), y3 = /* @__PURE__ */ Ie(h3, [["__scopeId", "data-v-6cf814a2"]]), w3 = { class: "file-input-wrapper" }, _3 = ["accept", "multiple", "disabled"], k3 = /* @__PURE__ */ xe({
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
    const a = o, l = k(null);
    function r() {
      var u;
      (u = l.value) == null || u.click();
    }
    function c(u) {
      const d = u.target;
      d.files && d.files.length > 0 && (a("change", d.files), d.value = "");
    }
    return t({
      triggerInput: r
    }), (u, d) => (n(), i("div", w3, [
      s("input", {
        ref_key: "fileInputRef",
        ref: l,
        type: "file",
        accept: e.accept,
        multiple: e.multiple,
        disabled: e.disabled,
        class: "file-input-hidden",
        onChange: c
      }, null, 40, _3),
      $(Re, {
        variant: e.variant,
        size: e.size,
        disabled: e.disabled,
        onClick: r
      }, {
        default: h(() => [
          at(u.$slots, "default", {}, () => [
            d[0] || (d[0] = s("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              s("path", { d: "M8 4L4 8h3v4h2V8h3L8 4z" }),
              s("path", { d: "M2 14h12v-2H2v2z" })
            ], -1)),
            x(" " + m(e.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled"])
    ]));
  }
}), b3 = /* @__PURE__ */ Ie(k3, [["__scopeId", "data-v-cd192091"]]), $3 = {
  key: 0,
  class: "drop-zone-empty"
}, C3 = { class: "drop-zone-text" }, x3 = { class: "drop-zone-primary" }, S3 = { class: "drop-zone-secondary" }, I3 = { class: "drop-zone-actions" }, E3 = {
  key: 1,
  class: "drop-zone-file"
}, T3 = { class: "file-info" }, M3 = { class: "file-details" }, P3 = { class: "file-name" }, R3 = { class: "file-size" }, L3 = /* @__PURE__ */ xe({
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
    const o = t, a = k(!1), l = k(null), r = k(0), c = R(() => l.value !== null), u = R(() => {
      var S;
      return ((S = l.value) == null ? void 0 : S.name) || "";
    }), d = R(() => {
      if (!l.value) return "";
      const S = l.value.size;
      return S < 1024 ? `${S} B` : S < 1024 * 1024 ? `${(S / 1024).toFixed(1)} KB` : S < 1024 * 1024 * 1024 ? `${(S / (1024 * 1024)).toFixed(1)} MB` : `${(S / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function v(S) {
      var C;
      S.stopPropagation(), r.value++, (C = S.dataTransfer) != null && C.types.includes("Files") && (a.value = !0);
    }
    function f(S) {
      S.stopPropagation(), S.dataTransfer && (S.dataTransfer.dropEffect = "copy");
    }
    function p(S) {
      S.stopPropagation(), r.value--, r.value === 0 && (a.value = !1);
    }
    function w(S) {
      var I;
      S.stopPropagation(), r.value = 0, a.value = !1;
      const C = (I = S.dataTransfer) == null ? void 0 : I.files;
      C && C.length > 0 && _(C[0]);
    }
    function g(S) {
      S.length > 0 && _(S[0]);
    }
    function _(S) {
      l.value = S, o("fileSelected", S);
    }
    function b() {
      l.value = null, o("clear");
    }
    return (S, C) => (n(), i("div", {
      class: Be(["file-drop-zone", { "drop-active": a.value, "has-file": c.value }]),
      onDragenter: vt(v, ["prevent"]),
      onDragover: vt(f, ["prevent"]),
      onDragleave: vt(p, ["prevent"]),
      onDrop: vt(w, ["prevent"])
    }, [
      c.value ? (n(), i("div", E3, [
        s("div", T3, [
          C[1] || (C[1] = s("div", { class: "file-icon" }, "📦", -1)),
          s("div", M3, [
            s("div", P3, m(u.value), 1),
            s("div", R3, m(d.value), 1)
          ])
        ]),
        $(Re, {
          variant: "ghost",
          size: "xs",
          onClick: b,
          title: "Remove file"
        }, {
          default: h(() => [...C[2] || (C[2] = [
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
      ])) : (n(), i("div", $3, [
        C[0] || (C[0] = s("div", { class: "drop-zone-icon" }, [
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
        s("div", C3, [
          s("p", x3, m(e.primaryText), 1),
          s("p", S3, m(e.secondaryText), 1)
        ]),
        s("div", I3, [
          $(b3, {
            accept: e.accept,
            multiple: e.multiple,
            variant: "primary",
            size: "sm",
            onChange: g
          }, {
            default: h(() => [
              x(m(e.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), D3 = /* @__PURE__ */ Ie(L3, [["__scopeId", "data-v-0f79cb86"]]), N3 = { class: "commit-hash" }, U3 = /* @__PURE__ */ xe({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(e) {
    const t = e, o = R(() => t.hash.slice(0, t.length));
    return (a, l) => (n(), i("span", N3, m(o.value), 1));
  }
}), gc = /* @__PURE__ */ Ie(U3, [["__scopeId", "data-v-7c333cc6"]]), O3 = { class: "import-preview" }, A3 = { class: "preview-header" }, z3 = {
  key: 0,
  class: "source-env"
}, F3 = { class: "preview-content" }, V3 = { class: "preview-section" }, B3 = { class: "section-header" }, W3 = { class: "section-info" }, G3 = { class: "section-count" }, j3 = {
  key: 0,
  class: "item-list"
}, H3 = { class: "item-name" }, q3 = {
  key: 0,
  class: "item-more"
}, K3 = { class: "preview-section" }, J3 = { class: "section-header" }, Q3 = { class: "section-info" }, Y3 = { class: "section-count" }, X3 = {
  key: 0,
  class: "item-list"
}, Z3 = { class: "item-details" }, eS = { class: "item-name" }, tS = { class: "item-meta" }, sS = {
  key: 0,
  class: "item-more"
}, oS = { class: "preview-section" }, nS = { class: "section-header" }, aS = { class: "section-info" }, lS = { class: "section-count" }, iS = {
  key: 0,
  class: "item-list"
}, rS = { class: "item-name" }, cS = {
  key: 0,
  class: "item-more"
}, uS = {
  key: 0,
  class: "preview-section"
}, dS = { class: "git-info" }, mS = /* @__PURE__ */ xe({
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
    const t = e, o = R(() => t.workflows.length), a = R(() => t.models.length), l = R(() => t.nodes.length);
    function r(c) {
      return c < 1024 ? `${c} B` : c < 1024 * 1024 ? `${(c / 1024).toFixed(1)} KB` : c < 1024 * 1024 * 1024 ? `${(c / (1024 * 1024)).toFixed(1)} MB` : `${(c / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (c, u) => (n(), i("div", O3, [
      s("div", A3, [
        $(is, null, {
          default: h(() => [...u[0] || (u[0] = [
            x("Import Preview", -1)
          ])]),
          _: 1
        }),
        e.sourceEnvironment ? (n(), i("span", z3, [
          u[1] || (u[1] = x(" From: ", -1)),
          $(sl, null, {
            default: h(() => [
              x(m(e.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : y("", !0)
      ]),
      s("div", F3, [
        s("div", V3, [
          s("div", B3, [
            u[3] || (u[3] = s("div", { class: "section-icon" }, "📄", -1)),
            s("div", W3, [
              u[2] || (u[2] = s("div", { class: "section-title" }, "Workflows", -1)),
              s("div", G3, m(o.value) + " file" + m(o.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.workflows.length > 0 ? (n(), i("div", j3, [
            (n(!0), i(W, null, ye(e.workflows.slice(0, e.maxPreviewItems), (d) => (n(), i("div", {
              key: d,
              class: "preview-item"
            }, [
              u[4] || (u[4] = s("span", { class: "item-bullet" }, "•", -1)),
              s("span", H3, m(d), 1)
            ]))), 128)),
            e.workflows.length > e.maxPreviewItems ? (n(), i("div", q3, " +" + m(e.workflows.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        s("div", K3, [
          s("div", J3, [
            u[6] || (u[6] = s("div", { class: "section-icon" }, "🎨", -1)),
            s("div", Q3, [
              u[5] || (u[5] = s("div", { class: "section-title" }, "Models", -1)),
              s("div", Y3, m(a.value) + " file" + m(a.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.models.length > 0 ? (n(), i("div", X3, [
            (n(!0), i(W, null, ye(e.models.slice(0, e.maxPreviewItems), (d) => (n(), i("div", {
              key: d.filename,
              class: "preview-item"
            }, [
              u[7] || (u[7] = s("span", { class: "item-bullet" }, "•", -1)),
              s("div", Z3, [
                s("span", eS, m(d.filename), 1),
                s("span", tS, m(r(d.size)) + " • " + m(d.type), 1)
              ])
            ]))), 128)),
            e.models.length > e.maxPreviewItems ? (n(), i("div", sS, " +" + m(e.models.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        s("div", oS, [
          s("div", nS, [
            u[9] || (u[9] = s("div", { class: "section-icon" }, "🔌", -1)),
            s("div", aS, [
              u[8] || (u[8] = s("div", { class: "section-title" }, "Custom Nodes", -1)),
              s("div", lS, m(l.value) + " node" + m(l.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.nodes.length > 0 ? (n(), i("div", iS, [
            (n(!0), i(W, null, ye(e.nodes.slice(0, e.maxPreviewItems), (d) => (n(), i("div", {
              key: d,
              class: "preview-item"
            }, [
              u[10] || (u[10] = s("span", { class: "item-bullet" }, "•", -1)),
              s("span", rS, m(d), 1)
            ]))), 128)),
            e.nodes.length > e.maxPreviewItems ? (n(), i("div", cS, " +" + m(e.nodes.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        e.gitBranch || e.gitCommit ? (n(), i("div", uS, [
          u[11] || (u[11] = s("div", { class: "section-header" }, [
            s("div", { class: "section-icon" }, "🌿"),
            s("div", { class: "section-info" }, [
              s("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          s("div", dS, [
            e.gitBranch ? (n(), L(kt, {
              key: 0,
              label: "Branch"
            }, {
              default: h(() => [
                $(sl, null, {
                  default: h(() => [
                    x(m(e.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : y("", !0),
            e.gitCommit ? (n(), L(kt, {
              key: 1,
              label: "Commit"
            }, {
              default: h(() => [
                $(gc, { hash: e.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : y("", !0)
          ])
        ])) : y("", !0)
      ])
    ]));
  }
}), fS = /* @__PURE__ */ Ie(mS, [["__scopeId", "data-v-182fe113"]]), vS = { class: "import-config" }, pS = { class: "config-container" }, gS = { class: "config-field" }, hS = { class: "input-wrapper" }, yS = ["value"], wS = {
  key: 0,
  class: "validating-indicator"
}, _S = {
  key: 1,
  class: "valid-indicator"
}, kS = {
  key: 0,
  class: "field-error"
}, bS = { class: "config-field" }, $S = { class: "strategy-options" }, CS = ["value", "checked", "onChange"], xS = { class: "strategy-content" }, SS = { class: "strategy-label" }, IS = { class: "strategy-description" }, ES = { class: "config-field switch-field" }, TS = { class: "switch-label" }, MS = ["checked"], PS = { class: "advanced-section" }, RS = { class: "advanced-content" }, LS = { class: "config-field" }, DS = ["value"], NS = ["value"], US = /* @__PURE__ */ xe({
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
    const o = e, a = t, l = k(!1), r = k(!1);
    gt(() => o.nameError, (f) => {
      l.value = !1, r.value = !f && o.name.length > 0;
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
    function d(f) {
      const p = f.target.value;
      a("update:name", p), r.value = !1, u && clearTimeout(u), p.length > 0 ? (l.value = !0, u = setTimeout(() => {
        a("validate-name", p);
      }, 400)) : l.value = !1;
    }
    function v() {
      o.name.length > 0 && a("validate-name", o.name);
    }
    return (f, p) => (n(), i("div", vS, [
      $(is, null, {
        default: h(() => [...p[2] || (p[2] = [
          x("Configuration", -1)
        ])]),
        _: 1
      }),
      s("div", pS, [
        s("div", gS, [
          $(Bn, { required: "" }, {
            default: h(() => [...p[3] || (p[3] = [
              x("Environment Name", -1)
            ])]),
            _: 1
          }),
          s("div", hS, [
            s("input", {
              type: "text",
              class: Be(["name-input", { error: e.nameError || e.name.length === 0, valid: r.value }]),
              value: e.name,
              placeholder: "my-imported-env",
              onInput: d,
              onBlur: v
            }, null, 42, yS),
            l.value ? (n(), i("span", wS, "...")) : r.value ? (n(), i("span", _S, "✓")) : y("", !0)
          ]),
          e.nameError ? (n(), i("div", kS, m(e.nameError), 1)) : y("", !0),
          p[4] || (p[4] = s("div", { class: "field-hint" }, "Creates a new environment with this name", -1))
        ]),
        s("div", bS, [
          $(Bn, null, {
            default: h(() => [...p[5] || (p[5] = [
              x("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          s("div", $S, [
            (n(), i(W, null, ye(c, (w) => s("label", {
              key: w.value,
              class: Be(["strategy-option", { active: e.modelStrategy === w.value }])
            }, [
              s("input", {
                type: "radio",
                name: "model-strategy",
                value: w.value,
                checked: e.modelStrategy === w.value,
                onChange: (g) => a("update:modelStrategy", w.value)
              }, null, 40, CS),
              s("div", xS, [
                s("span", SS, m(w.label), 1),
                s("span", IS, m(w.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        s("div", ES, [
          s("label", TS, [
            s("input", {
              type: "checkbox",
              checked: e.switchAfterImport,
              onChange: p[0] || (p[0] = (w) => a("update:switchAfterImport", w.target.checked))
            }, null, 40, MS),
            p[6] || (p[6] = s("span", null, "Switch to this environment after import", -1))
          ])
        ]),
        s("details", PS, [
          p[8] || (p[8] = s("summary", { class: "advanced-toggle" }, "Advanced Options", -1)),
          s("div", RS, [
            s("div", LS, [
              $(Bn, null, {
                default: h(() => [...p[7] || (p[7] = [
                  x("PyTorch Backend", -1)
                ])]),
                _: 1
              }),
              s("select", {
                class: "backend-select",
                value: e.torchBackend,
                onChange: p[1] || (p[1] = (w) => a("update:torchBackend", w.target.value))
              }, [
                (n(!0), i(W, null, ye(ot(Ml), (w) => (n(), i("option", {
                  key: w,
                  value: w
                }, m(w) + m(w === "auto" ? " (detect GPU)" : ""), 9, NS))), 128))
              ], 40, DS)
            ])
          ])
        ])
      ])
    ]));
  }
}), OS = /* @__PURE__ */ Ie(US, [["__scopeId", "data-v-89ea06a1"]]), AS = { class: "import-flow" }, zS = {
  key: 0,
  class: "import-empty"
}, FS = { class: "git-import-section" }, VS = { class: "git-url-input-row" }, BS = ["disabled"], WS = {
  key: 0,
  class: "git-error"
}, GS = {
  key: 1,
  class: "import-configure"
}, jS = { class: "selected-file-bar" }, HS = {
  key: 0,
  class: "file-bar-content"
}, qS = { class: "file-bar-info" }, KS = { class: "file-bar-name" }, JS = { class: "file-bar-size" }, QS = {
  key: 1,
  class: "file-bar-content"
}, YS = { class: "file-bar-info" }, XS = { class: "file-bar-name" }, ZS = {
  key: 0,
  class: "preview-loading"
}, e5 = { class: "import-actions" }, t5 = {
  key: 2,
  class: "import-progress"
}, s5 = { class: "creating-intro" }, o5 = {
  key: 0,
  class: "progress-warning"
}, n5 = {
  key: 1,
  class: "import-error"
}, a5 = { class: "error-message" }, l5 = {
  key: 3,
  class: "import-complete"
}, i5 = { class: "complete-message" }, r5 = { class: "complete-title" }, c5 = { class: "complete-details" }, u5 = { class: "complete-actions" }, d5 = /* @__PURE__ */ xe({
  __name: "ImportFlow",
  props: {
    workspacePath: {},
    resumeImport: { type: Boolean },
    initialProgress: {}
  },
  emits: ["import-complete", "import-started", "source-cleared"],
  setup(e, { expose: t, emit: o }) {
    var Me, Se, ze, Ne;
    const a = e, l = o, { previewTarballImport: r, previewGitImport: c, validateEnvironmentName: u, executeImport: d, executeGitImport: v, getImportProgress: f } = ct();
    let p = null;
    const w = k(null), g = k(a.resumeImport ?? !1), _ = k(!1), b = k(!1), S = k(""), C = k(!1), I = k(null), E = k(""), M = k(null), N = k(!1), F = k(null), V = k(null), D = k({
      name: ((Me = a.initialProgress) == null ? void 0 : Me.environmentName) ?? "",
      modelStrategy: "required",
      torchBackend: "auto",
      switchAfterImport: !0
    }), q = k(null), ue = k({
      message: ((Se = a.initialProgress) == null ? void 0 : Se.message) ?? "Preparing import...",
      phase: ((ze = a.initialProgress) == null ? void 0 : ze.phase) ?? "",
      progress: ((Ne = a.initialProgress) == null ? void 0 : Ne.progress) ?? 0,
      error: null
    }), le = [
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 15 },
      { id: "extract_builtins", label: "Extract builtin nodes", progressThreshold: 20 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 35 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 60 },
      { id: "sync_nodes", label: "Sync custom nodes", progressThreshold: 70 },
      { id: "copy_workflows", label: "Copy workflows", progressThreshold: 80 },
      { id: "resolve_models", label: "Resolve models", progressThreshold: 85 },
      { id: "download_models", label: "Download models", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], Y = R(() => {
      if (!V.value)
        return {
          sourceEnvironment: "",
          workflows: [],
          models: [],
          nodes: [],
          gitBranch: void 0,
          gitCommit: void 0
        };
      const be = V.value;
      return {
        sourceEnvironment: be.comfyui_version ? `ComfyUI ${be.comfyui_version}` : "Unknown",
        workflows: be.workflows.map((Ae) => Ae.name),
        models: be.models.map((Ae) => ({
          filename: Ae.filename,
          size: 0,
          type: Ae.relative_path.split("/")[0] || "model"
        })),
        nodes: be.nodes.map((Ae) => Ae.name),
        gitBranch: void 0,
        gitCommit: void 0
      };
    }), me = R(() => !C.value && !I.value && V.value && D.value.name.length > 0 && !q.value && (w.value || M.value));
    async function ne(be) {
      w.value = be, C.value = !0, I.value = null, V.value = null;
      try {
        const Ae = await r(be);
        V.value = Ae;
      } catch (Ae) {
        I.value = Ae instanceof Error ? Ae.message : "Failed to analyze file", console.error("Preview error:", Ae);
      } finally {
        C.value = !1;
      }
    }
    function B() {
      w.value = null, M.value = null, E.value = "", F.value = null, _.value = !1, b.value = !1, S.value = "", V.value = null, I.value = null, D.value = { name: "", modelStrategy: "required", torchBackend: "auto", switchAfterImport: !0 }, q.value = null, l("source-cleared");
    }
    function H() {
      ee(), B(), g.value = !1, C.value = !1, N.value = !1, ue.value = {
        message: "Preparing import...",
        phase: "",
        progress: 0,
        error: null
      };
    }
    async function we() {
      if (E.value.trim()) {
        N.value = !0, F.value = null;
        try {
          const be = await c(E.value.trim());
          M.value = E.value.trim(), V.value = be;
        } catch (be) {
          F.value = be instanceof Error ? be.message : "Failed to analyze repository";
        } finally {
          N.value = !1;
        }
      }
    }
    function oe(be) {
      try {
        const Ae = new URL(be);
        return Ae.host + Ae.pathname.replace(/\.git$/, "");
      } catch {
        return be;
      }
    }
    async function de(be) {
      if (!be) {
        q.value = "Environment name is required";
        return;
      }
      try {
        const Ae = await u(be);
        q.value = Ae.valid ? null : Ae.error || "Invalid name";
      } catch {
        q.value = "Failed to validate name";
      }
    }
    async function ce() {
      if (D.value.name && !(!w.value && !M.value)) {
        g.value = !0, _.value = !1, ue.value = { message: `Creating environment '${D.value.name}'...`, phase: "", progress: 0, error: null }, l("import-started");
        try {
          let be;
          if (w.value)
            be = await d(
              w.value,
              D.value.name,
              D.value.modelStrategy,
              D.value.torchBackend
            );
          else if (M.value)
            be = await v(
              M.value,
              D.value.name,
              D.value.modelStrategy,
              D.value.torchBackend
            );
          else
            throw new Error("No import source selected");
          be.status === "started" ? K() : (b.value = !1, S.value = be.message, g.value = !1, _.value = !0);
        } catch (be) {
          b.value = !1, S.value = be instanceof Error ? be.message : "Unknown error occurred during import", g.value = !1, _.value = !0;
        }
      }
    }
    async function K() {
      if (p) return;
      const be = async () => {
        try {
          const ge = await f();
          return ue.value = {
            message: ge.message,
            phase: ge.phase || "",
            progress: ge.progress ?? (ge.state === "importing" ? 50 : 0),
            error: ge.error || null
          }, ge.state === "complete" ? (ee(), b.value = !0, S.value = `Environment '${ge.environment_name}' created successfully`, g.value = !1, _.value = !0, ge.environment_name && l("import-complete", ge.environment_name, D.value.switchAfterImport), !1) : ge.state === "error" ? (ee(), b.value = !1, S.value = ge.error || ge.message, g.value = !1, _.value = !0, !1) : !0;
        } catch (ge) {
          return console.error("Failed to poll import progress:", ge), !0;
        }
      };
      await be() && (p = setInterval(async () => {
        await be() || ee();
      }, 2e3));
    }
    function ee() {
      p && (clearInterval(p), p = null);
    }
    function te(be) {
      return be < 1024 ? `${be} B` : be < 1024 * 1024 ? `${(be / 1024).toFixed(1)} KB` : be < 1024 * 1024 * 1024 ? `${(be / (1024 * 1024)).toFixed(1)} MB` : `${(be / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return lt(async () => {
      try {
        const be = await f();
        console.log("[ComfyGit ImportFlow] Import progress check:", be.state, be), be.state === "importing" && (console.log("[ComfyGit ImportFlow] Resuming in-progress import:", be.environment_name), g.value = !0, D.value.name = be.environment_name || D.value.name || "", ue.value = {
          progress: be.progress ?? 0,
          message: be.message || "Importing...",
          phase: be.phase || "",
          error: null
        }, K());
      } catch (be) {
        console.log("[ComfyGit ImportFlow] Import progress check failed:", be);
      }
    }), t({
      handleReset: H,
      isImporting: g,
      canImport: me
    }), (be, Ae) => {
      var ge;
      return n(), i("div", AS, [
        !w.value && !M.value && !g.value ? (n(), i("div", zS, [
          $(D3, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: ne
          }),
          Ae[7] || (Ae[7] = s("div", { class: "import-divider" }, [
            s("span", null, "or")
          ], -1)),
          s("div", FS, [
            Ae[5] || (Ae[5] = s("div", { class: "git-import-header" }, "Import from Git Repository", -1)),
            s("div", VS, [
              Pt(s("input", {
                type: "text",
                class: "git-url-input",
                "onUpdate:modelValue": Ae[0] || (Ae[0] = (ve) => E.value = ve),
                placeholder: "https://github.com/user/repo.git",
                onKeyup: fs(we, ["enter"]),
                disabled: N.value
              }, null, 40, BS), [
                [cn, E.value]
              ]),
              $(Re, {
                variant: "primary",
                size: "sm",
                disabled: !E.value.trim() || N.value,
                onClick: we
              }, {
                default: h(() => [
                  x(m(N.value ? "Analyzing..." : "ANALYZE"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            F.value ? (n(), i("div", WS, m(F.value), 1)) : y("", !0),
            Ae[6] || (Ae[6] = s("div", { class: "git-url-hint" }, "Paste a GitHub URL to preview the environment", -1))
          ])
        ])) : (w.value || M.value) && !g.value && !_.value ? (n(), i("div", GS, [
          s("div", jS, [
            w.value ? (n(), i("div", HS, [
              Ae[8] || (Ae[8] = s("div", { class: "file-bar-icon" }, "📦", -1)),
              s("div", qS, [
                s("div", KS, m(w.value.name), 1),
                s("div", JS, m(te(w.value.size)), 1)
              ])
            ])) : M.value ? (n(), i("div", QS, [
              Ae[10] || (Ae[10] = s("div", { class: "file-bar-icon" }, "🔗", -1)),
              s("div", YS, [
                s("div", XS, m(oe(M.value)), 1),
                Ae[9] || (Ae[9] = s("div", { class: "file-bar-size" }, "Git Repository", -1))
              ])
            ])) : y("", !0),
            $(Re, {
              variant: "ghost",
              size: "sm",
              onClick: B
            }, {
              default: h(() => [...Ae[11] || (Ae[11] = [
                x(" Change Source ", -1)
              ])]),
              _: 1
            })
          ]),
          C.value ? (n(), i("div", ZS, [...Ae[12] || (Ae[12] = [
            s("div", { class: "loading-spinner" }, null, -1),
            s("div", { class: "loading-text" }, "Analyzing import file...", -1)
          ])])) : I.value ? (n(), L(ts, {
            key: 1,
            type: "error",
            title: "Failed to Analyze File",
            details: [I.value]
          }, null, 8, ["details"])) : V.value ? (n(), L(fS, {
            key: 2,
            "source-environment": Y.value.sourceEnvironment,
            workflows: Y.value.workflows,
            models: Y.value.models,
            nodes: Y.value.nodes,
            "git-branch": Y.value.gitBranch,
            "git-commit": Y.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : y("", !0),
          V.value ? (n(), L(OS, {
            key: 3,
            name: D.value.name,
            "onUpdate:name": Ae[1] || (Ae[1] = (ve) => D.value.name = ve),
            "model-strategy": D.value.modelStrategy,
            "onUpdate:modelStrategy": Ae[2] || (Ae[2] = (ve) => D.value.modelStrategy = ve),
            "torch-backend": D.value.torchBackend,
            "onUpdate:torchBackend": Ae[3] || (Ae[3] = (ve) => D.value.torchBackend = ve),
            "switch-after-import": D.value.switchAfterImport,
            "onUpdate:switchAfterImport": Ae[4] || (Ae[4] = (ve) => D.value.switchAfterImport = ve),
            "name-error": q.value,
            onValidateName: de
          }, null, 8, ["name", "model-strategy", "torch-backend", "switch-after-import", "name-error"])) : y("", !0),
          D.value.modelStrategy === "skip" && ((ge = V.value) != null && ge.models_needing_download) ? (n(), L(ts, {
            key: 4,
            type: "warning",
            title: "Models Will Not Be Downloaded",
            details: [
              `${V.value.models_needing_download} model(s) will need to be downloaded later`,
              "You can resolve missing models from the STATUS page after import"
            ]
          }, null, 8, ["details"])) : y("", !0),
          s("div", e5, [
            $(Re, {
              variant: "secondary",
              size: "md",
              onClick: B
            }, {
              default: h(() => [...Ae[13] || (Ae[13] = [
                x(" Cancel ", -1)
              ])]),
              _: 1
            }),
            $(Re, {
              variant: "primary",
              size: "md",
              disabled: !me.value,
              onClick: ce
            }, {
              default: h(() => [...Ae[14] || (Ae[14] = [
                x(" Create Environment ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : g.value ? (n(), i("div", t5, [
          s("p", s5, [
            Ae[15] || (Ae[15] = x(" Importing environment ", -1)),
            s("strong", null, m(D.value.name), 1),
            Ae[16] || (Ae[16] = x("... ", -1))
          ]),
          $(ta, {
            progress: ue.value.progress,
            message: ue.value.message,
            "current-phase": ue.value.phase,
            variant: ue.value.error ? "error" : "default",
            "show-steps": !0,
            steps: le
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          ue.value.error ? y("", !0) : (n(), i("p", o5, " This may take several minutes. Please wait... ")),
          ue.value.error ? (n(), i("div", n5, [
            s("p", a5, m(ue.value.error), 1)
          ])) : y("", !0)
        ])) : _.value ? (n(), i("div", l5, [
          s("div", {
            class: Be(["complete-icon", b.value ? "success" : "error"])
          }, m(b.value ? "✓" : "✕"), 3),
          s("div", i5, [
            s("div", r5, m(b.value ? "Import Successful" : "Import Failed"), 1),
            s("div", c5, m(S.value), 1)
          ]),
          s("div", u5, [
            $(Re, {
              variant: "primary",
              size: "md",
              onClick: H
            }, {
              default: h(() => [...Ae[17] || (Ae[17] = [
                x(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : y("", !0)
      ]);
    };
  }
}), hc = /* @__PURE__ */ Ie(d5, [["__scopeId", "data-v-72cbc04e"]]), m5 = /* @__PURE__ */ xe({
  __name: "ImportSection",
  props: {
    embedded: { type: Boolean }
  },
  emits: ["import-complete-switch"],
  setup(e, { emit: t }) {
    const o = t, a = k(!1);
    function l(r, c) {
      c && o("import-complete-switch", r);
    }
    return (r, c) => (n(), i(W, null, [
      $(zt, null, Zt({
        content: h(() => [
          $(hc, { onImportComplete: l })
        ]),
        _: 2
      }, [
        e.embedded ? void 0 : {
          name: "header",
          fn: h(() => [
            $(Ft, {
              title: "IMPORT ENVIRONMENT",
              "show-info": !0,
              onInfoClick: c[0] || (c[0] = (u) => a.value = !0)
            })
          ]),
          key: "0"
        }
      ]), 1024),
      $(ds, {
        show: a.value,
        title: "How Import Works",
        onClose: c[1] || (c[1] = (u) => a.value = !1)
      }, {
        content: h(() => [...c[2] || (c[2] = [
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
}), f5 = /* @__PURE__ */ Ie(m5, [["__scopeId", "data-v-41b1f298"]]), v5 = { class: "base-tabs" }, p5 = ["disabled", "onClick"], g5 = {
  key: 0,
  class: "base-tabs__badge"
}, h5 = /* @__PURE__ */ xe({
  __name: "BaseTabs",
  props: {
    tabs: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, a = t;
    function l(r) {
      var c;
      (c = o.tabs.find((u) => u.id === r)) != null && c.disabled || a("update:modelValue", r);
    }
    return (r, c) => (n(), i("div", v5, [
      (n(!0), i(W, null, ye(e.tabs, (u) => (n(), i("button", {
        key: u.id,
        class: Be([
          "base-tabs__tab",
          {
            active: e.modelValue === u.id,
            disabled: u.disabled
          }
        ]),
        disabled: u.disabled,
        onClick: (d) => l(u.id)
      }, [
        x(m(u.label) + " ", 1),
        u.badge ? (n(), i("span", g5, m(u.badge), 1)) : y("", !0)
      ], 10, p5))), 128))
    ]));
  }
}), Pl = /* @__PURE__ */ Ie(h5, [["__scopeId", "data-v-ad5e6cad"]]), y5 = { class: "commit-list" }, w5 = /* @__PURE__ */ xe({
  __name: "CommitList",
  setup(e) {
    return (t, o) => (n(), i("div", y5, [
      at(t.$slots, "default", {}, void 0)
    ]));
  }
}), yc = /* @__PURE__ */ Ie(w5, [["__scopeId", "data-v-8c5ee761"]]), _5 = { class: "commit-message" }, k5 = { class: "commit-date" }, b5 = /* @__PURE__ */ xe({
  __name: "CommitItem",
  props: {
    hash: {},
    message: {},
    relativeDate: {},
    clickable: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const o = e, a = t;
    function l() {
      o.clickable && a("click");
    }
    return (r, c) => (n(), i("div", {
      class: Be(["commit-item", { clickable: e.clickable }]),
      onClick: l
    }, [
      $(gc, { hash: e.hash }, null, 8, ["hash"]),
      s("span", _5, m(e.message), 1),
      s("span", k5, m(e.relativeDate), 1),
      r.$slots.actions ? (n(), i("div", {
        key: 0,
        class: "commit-actions",
        onClick: c[0] || (c[0] = vt(() => {
        }, ["stop"]))
      }, [
        at(r.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), wc = /* @__PURE__ */ Ie(b5, [["__scopeId", "data-v-dd7c621b"]]), $5 = /* @__PURE__ */ xe({
  __name: "HistorySection",
  props: {
    commits: {},
    currentRef: {},
    embedded: { type: Boolean }
  },
  emits: ["select", "checkout"],
  setup(e) {
    const t = e, o = R(() => `HISTORY (${t.currentRef || "detached"})`);
    return (a, l) => (n(), L(zt, null, Zt({
      content: h(() => [
        e.commits.length === 0 ? (n(), L(hs, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (n(), L(yc, { key: 1 }, {
          default: h(() => [
            (n(!0), i(W, null, ye(e.commits, (r) => (n(), L(wc, {
              key: r.hash,
              hash: r.short_hash || r.hash,
              message: r.message,
              "relative-date": r.date_relative || r.relative_date,
              onClick: (c) => a.$emit("select", r)
            }, {
              actions: h(() => [
                $(Re, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (c) => a.$emit("checkout", r),
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
          $(Ft, { title: o.value }, null, 8, ["title"])
        ]),
        key: "0"
      }
    ]), 1024));
  }
}), C5 = /* @__PURE__ */ Ie($5, [["__scopeId", "data-v-fa4bf3a1"]]), x5 = { class: "branch-create-form" }, S5 = { class: "form-actions" }, I5 = /* @__PURE__ */ xe({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(e, { emit: t }) {
    const o = t, a = k(""), l = R(() => {
      const u = a.value.trim();
      return u.length > 0 && !u.startsWith("-") && !u.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(u);
    });
    function r() {
      l.value && (o("create", a.value.trim()), a.value = "");
    }
    function c() {
      a.value = "", o("cancel");
    }
    return (u, d) => (n(), i("div", x5, [
      $(bo, {
        modelValue: a.value,
        "onUpdate:modelValue": d[0] || (d[0] = (v) => a.value = v),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: r,
        onEscape: c
      }, null, 8, ["modelValue"]),
      s("div", S5, [
        $(Re, {
          variant: "primary",
          size: "sm",
          disabled: !l.value,
          onClick: r
        }, {
          default: h(() => [...d[1] || (d[1] = [
            x(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        $(Re, {
          variant: "secondary",
          size: "sm",
          onClick: c
        }, {
          default: h(() => [...d[2] || (d[2] = [
            x(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), E5 = /* @__PURE__ */ Ie(I5, [["__scopeId", "data-v-7c500394"]]), T5 = { class: "branch-list-item__indicator" }, M5 = { class: "branch-list-item__name" }, P5 = {
  key: 0,
  class: "branch-list-item__actions"
}, R5 = {
  key: 0,
  class: "branch-list-item__current-label"
}, L5 = /* @__PURE__ */ xe({
  __name: "BranchListItem",
  props: {
    branchName: {},
    isCurrent: { type: Boolean, default: !1 },
    clickable: { type: Boolean, default: !1 },
    showCurrentLabel: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(e) {
    return (t, o) => (n(), i("div", {
      class: Be(["branch-list-item", { current: e.isCurrent, clickable: e.clickable }]),
      onClick: o[0] || (o[0] = (a) => e.clickable && t.$emit("click"))
    }, [
      s("span", T5, m(e.isCurrent ? "●" : "○"), 1),
      s("span", M5, m(e.branchName), 1),
      t.$slots.actions || e.showCurrentLabel ? (n(), i("div", P5, [
        at(t.$slots, "actions", {}, void 0),
        e.isCurrent && e.showCurrentLabel ? (n(), i("span", R5, " current ")) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), D5 = /* @__PURE__ */ Ie(L5, [["__scopeId", "data-v-c6581a24"]]), N5 = { class: "header-info" }, U5 = { class: "branch-name" }, O5 = {
  key: 0,
  class: "current-badge"
}, A5 = { class: "branch-meta" }, z5 = { key: 0 }, F5 = {
  key: 0,
  class: "meta-note"
}, V5 = {
  key: 0,
  class: "loading"
}, B5 = {
  key: 1,
  class: "empty-state"
}, W5 = /* @__PURE__ */ xe({
  __name: "BranchDetailModal",
  props: {
    branchName: {},
    isCurrent: { type: Boolean }
  },
  emits: ["close", "delete", "switch"],
  setup(e) {
    const t = e, { getBranchHistory: o } = ct(), a = k([]), l = k(!1), r = k(!0);
    return lt(async () => {
      try {
        const c = await o(t.branchName, 50);
        a.value = c.commits, l.value = c.has_more;
      } finally {
        r.value = !1;
      }
    }), (c, u) => (n(), L($t, {
      size: "md",
      "show-close-button": !1,
      onClose: u[3] || (u[3] = (d) => c.$emit("close"))
    }, {
      header: h(() => [
        s("div", N5, [
          u[4] || (u[4] = s("h3", { class: "header-title" }, "BRANCH", -1)),
          s("span", U5, m(e.branchName), 1),
          e.isCurrent ? (n(), i("span", O5, "CURRENT")) : y("", !0)
        ]),
        $(Ue, {
          variant: "ghost",
          size: "sm",
          onClick: u[0] || (u[0] = (d) => c.$emit("close"))
        }, {
          default: h(() => [...u[5] || (u[5] = [
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
        s("div", A5, [
          r.value ? (n(), i("span", z5, "Loading...")) : (n(), i(W, { key: 1 }, [
            s("span", null, m(a.value.length) + " commits", 1),
            l.value ? (n(), i("span", F5, "(showing first " + m(a.value.length) + ")", 1)) : y("", !0)
          ], 64))
        ]),
        r.value ? (n(), i("div", V5, "Loading commit history...")) : a.value.length === 0 ? (n(), i("div", B5, " No commits found on this branch ")) : (n(), L(yc, {
          key: 2,
          class: "branch-commits"
        }, {
          default: h(() => [
            (n(!0), i(W, null, ye(a.value, (d) => (n(), L(wc, {
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
        e.isCurrent ? y("", !0) : (n(), L(Re, {
          key: 0,
          variant: "destructive",
          size: "sm",
          onClick: u[1] || (u[1] = (d) => c.$emit("delete", e.branchName))
        }, {
          default: h(() => [...u[6] || (u[6] = [
            x(" Delete Branch ", -1)
          ])]),
          _: 1
        })),
        u[8] || (u[8] = s("div", { class: "footer-spacer" }, null, -1)),
        e.isCurrent ? y("", !0) : (n(), L(Ue, {
          key: 1,
          variant: "primary",
          onClick: u[2] || (u[2] = (d) => c.$emit("switch", e.branchName))
        }, {
          default: h(() => [...u[7] || (u[7] = [
            x(" Switch to Branch ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }));
  }
}), G5 = /* @__PURE__ */ Ie(W5, [["__scopeId", "data-v-2e5437cc"]]), j5 = {
  key: 2,
  class: "branch-list"
}, H5 = /* @__PURE__ */ xe({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {},
    embedded: { type: Boolean }
  },
  emits: ["switch", "create", "delete"],
  setup(e, { emit: t }) {
    const o = t, a = k(!1), l = k(null);
    function r(f) {
      o("create", f), c();
    }
    function c() {
      a.value = !1;
    }
    function u(f) {
      l.value = f;
    }
    function d(f) {
      l.value = null, o("delete", f);
    }
    function v(f) {
      l.value = null, o("switch", f);
    }
    return (f, p) => (n(), L(zt, null, Zt({
      content: h(() => [
        a.value ? (n(), L(E5, {
          key: 0,
          onCreate: r,
          onCancel: c
        })) : y("", !0),
        e.branches.length === 0 ? (n(), L(hs, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (n(), i("div", j5, [
          (n(!0), i(W, null, ye(e.branches, (w) => (n(), L(D5, {
            key: w.name,
            "branch-name": w.name,
            "is-current": w.is_current,
            clickable: !0,
            "show-current-label": !0,
            onClick: (g) => u(w)
          }, {
            actions: h(() => [
              w.is_current ? y("", !0) : (n(), L(Re, {
                key: 0,
                variant: "secondary",
                size: "xs",
                onClick: vt((g) => o("switch", w.name), ["stop"])
              }, {
                default: h(() => [...p[3] || (p[3] = [
                  x(" Switch ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"]))
            ]),
            _: 2
          }, 1032, ["branch-name", "is-current", "onClick"]))), 128))
        ])),
        l.value ? (n(), L(G5, {
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
          $(Ft, { title: "BRANCHES" }, {
            actions: h(() => [
              a.value ? y("", !0) : (n(), L(Re, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: p[0] || (p[0] = (w) => a.value = !0)
              }, {
                default: h(() => [...p[2] || (p[2] = [
                  x(" + Create Branch ", -1)
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
}), q5 = /* @__PURE__ */ Ie(H5, [["__scopeId", "data-v-a3de96cc"]]);
function _c(e) {
  return "has_conflicts" in e && e.has_conflicts === !0 && Array.isArray(e.workflow_conflicts);
}
const K5 = { class: "remote-url-display" }, J5 = ["title"], Q5 = ["title"], Y5 = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, X5 = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Z5 = /* @__PURE__ */ xe({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(e) {
    const t = e, o = k(!1), a = R(() => {
      if (t.url.length <= t.maxLength)
        return t.url;
      const r = t.url.slice(0, Math.floor(t.maxLength * 0.6)), c = t.url.slice(-Math.floor(t.maxLength * 0.3));
      return `${r}...${c}`;
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
    return (r, c) => (n(), i("div", K5, [
      s("span", {
        class: "url-text",
        title: e.url
      }, m(a.value), 9, J5),
      s("button", {
        class: Be(["copy-btn", { copied: o.value }]),
        onClick: l,
        title: o.value ? "Copied!" : "Copy URL"
      }, [
        o.value ? (n(), i("svg", X5, [...c[1] || (c[1] = [
          s("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (n(), i("svg", Y5, [...c[0] || (c[0] = [
          s("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          s("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, Q5)
    ]));
  }
}), e8 = /* @__PURE__ */ Ie(Z5, [["__scopeId", "data-v-7768a58d"]]), t8 = { class: "remote-title" }, s8 = {
  key: 0,
  class: "default-badge"
}, o8 = {
  key: 1,
  class: "sync-badge"
}, n8 = {
  key: 0,
  class: "ahead"
}, a8 = {
  key: 1,
  class: "behind"
}, l8 = {
  key: 1,
  class: "synced"
}, i8 = ["href"], r8 = {
  key: 1,
  class: "remote-url-text"
}, c8 = /* @__PURE__ */ xe({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove", "pull", "push"],
  setup(e) {
    const t = e, o = R(() => t.fetchingRemote === t.remote.name), a = R(() => t.remote.is_default), l = R(() => t.syncStatus && t.syncStatus.behind > 0), r = R(() => t.syncStatus && t.syncStatus.ahead > 0), c = R(() => t.remote.push_url !== t.remote.fetch_url), u = R(() => {
      const v = t.remote.fetch_url, f = v.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return f ? `https://${f[1]}/${f[2]}` : v.startsWith("https://") || v.startsWith("http://") ? v.replace(/\.git$/, "") : null;
    }), d = R(() => t.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (v, f) => (n(), L(Wt, {
      status: a.value ? "synced" : void 0
    }, Zt({
      icon: h(() => [
        x(m(a.value ? "🔗" : "🌐"), 1)
      ]),
      title: h(() => [
        s("div", t8, [
          s("span", null, m(e.remote.name), 1),
          a.value ? (n(), i("span", s8, "DEFAULT")) : y("", !0),
          e.syncStatus ? (n(), i("span", o8, [
            e.syncStatus.ahead > 0 || e.syncStatus.behind > 0 ? (n(), i(W, { key: 0 }, [
              e.syncStatus.ahead > 0 ? (n(), i("span", n8, "↑" + m(e.syncStatus.ahead), 1)) : y("", !0),
              e.syncStatus.behind > 0 ? (n(), i("span", a8, "↓" + m(e.syncStatus.behind), 1)) : y("", !0)
            ], 64)) : (n(), i("span", l8, "✓ synced"))
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
          onClick: f[0] || (f[0] = vt(() => {
          }, ["stop"]))
        }, m(d.value), 9, i8)) : (n(), i("span", r8, m(d.value), 1))
      ]),
      actions: h(() => [
        $(Re, {
          variant: "primary",
          size: "xs",
          loading: o.value,
          onClick: f[1] || (f[1] = (p) => v.$emit("fetch", e.remote.name))
        }, {
          default: h(() => [...f[6] || (f[6] = [
            x(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        $(Re, {
          variant: l.value ? "primary" : "secondary",
          size: "xs",
          disabled: !e.syncStatus,
          onClick: f[2] || (f[2] = (p) => v.$emit("pull", e.remote.name))
        }, {
          default: h(() => [
            x(" Pull" + m(e.syncStatus && e.syncStatus.behind > 0 ? ` ↓${e.syncStatus.behind}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        $(Re, {
          variant: r.value ? "primary" : "secondary",
          size: "xs",
          disabled: !e.syncStatus,
          onClick: f[3] || (f[3] = (p) => v.$emit("push", e.remote.name))
        }, {
          default: h(() => [
            x(" Push" + m(e.syncStatus && e.syncStatus.ahead > 0 ? ` ↑${e.syncStatus.ahead}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        $(Re, {
          variant: "secondary",
          size: "xs",
          onClick: f[4] || (f[4] = (p) => v.$emit("edit", e.remote.name))
        }, {
          default: h(() => [...f[7] || (f[7] = [
            x(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        a.value ? y("", !0) : (n(), L(Re, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: f[5] || (f[5] = (p) => v.$emit("remove", e.remote.name))
        }, {
          default: h(() => [...f[8] || (f[8] = [
            x(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 2
    }, [
      c.value ? {
        name: "details",
        fn: h(() => [
          e.remote.push_url !== e.remote.fetch_url ? (n(), L(kt, {
            key: 0,
            label: "Push URL:"
          }, {
            default: h(() => [
              $(e8, {
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
}), u8 = /* @__PURE__ */ Ie(c8, [["__scopeId", "data-v-8310f3a8"]]), d8 = ["for"], m8 = {
  key: 0,
  class: "base-form-field-required"
}, f8 = { class: "base-form-field-input" }, v8 = {
  key: 1,
  class: "base-form-field-error"
}, p8 = {
  key: 2,
  class: "base-form-field-hint"
}, g8 = /* @__PURE__ */ xe({
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
    return (a, l) => (n(), i("div", {
      class: Be(["base-form-field", { "full-width": e.fullWidth }])
    }, [
      e.label ? (n(), i("label", {
        key: 0,
        for: o.value,
        class: "base-form-field-label"
      }, [
        x(m(e.label) + " ", 1),
        e.required ? (n(), i("span", m8, "*")) : y("", !0)
      ], 8, d8)) : y("", !0),
      s("div", f8, [
        at(a.$slots, "default", {}, void 0)
      ]),
      e.error ? (n(), i("span", v8, m(e.error), 1)) : e.hint ? (n(), i("span", p8, m(e.hint), 1)) : y("", !0)
    ], 2));
  }
}), Ut = /* @__PURE__ */ Ie(g8, [["__scopeId", "data-v-9a1cf296"]]), h8 = { class: "remote-form" }, y8 = { class: "form-header" }, w8 = { class: "form-body" }, _8 = {
  key: 0,
  class: "form-error"
}, k8 = { class: "form-actions" }, b8 = /* @__PURE__ */ xe({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(e, { emit: t }) {
    const o = e, a = t, l = k({
      name: o.remoteName,
      fetchUrl: o.fetchUrl,
      pushUrl: o.pushUrl
    }), r = k(!1), c = k(null);
    gt(() => [o.remoteName, o.fetchUrl, o.pushUrl], () => {
      l.value = {
        name: o.remoteName,
        fetchUrl: o.fetchUrl,
        pushUrl: o.pushUrl
      };
    });
    const u = R(() => l.value.name.trim() !== "" && l.value.fetchUrl.trim() !== "");
    async function d() {
      if (!(!u.value || r.value)) {
        c.value = null, r.value = !0;
        try {
          a("submit", l.value);
        } catch (v) {
          c.value = v instanceof Error ? v.message : "Failed to submit form";
        } finally {
          r.value = !1;
        }
      }
    }
    return (v, f) => (n(), i("div", h8, [
      s("div", y8, [
        $(is, null, {
          default: h(() => [
            x(m(e.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      s("div", w8, [
        $(Ut, {
          label: "Remote Name",
          required: ""
        }, {
          default: h(() => [
            $(bt, {
              modelValue: l.value.name,
              "onUpdate:modelValue": f[0] || (f[0] = (p) => l.value.name = p),
              disabled: e.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        $(Ut, {
          label: "Fetch URL",
          required: ""
        }, {
          default: h(() => [
            $(bt, {
              modelValue: l.value.fetchUrl,
              "onUpdate:modelValue": f[1] || (f[1] = (p) => l.value.fetchUrl = p),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        $(Ut, { label: "Push URL (optional)" }, {
          default: h(() => [
            $(bt, {
              modelValue: l.value.pushUrl,
              "onUpdate:modelValue": f[2] || (f[2] = (p) => l.value.pushUrl = p),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        c.value ? (n(), i("div", _8, m(c.value), 1)) : y("", !0)
      ]),
      s("div", k8, [
        $(Re, {
          variant: "primary",
          size: "md",
          disabled: !u.value,
          loading: r.value,
          onClick: d
        }, {
          default: h(() => [
            x(m(e.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        $(Re, {
          variant: "ghost",
          size: "md",
          onClick: f[3] || (f[3] = (p) => v.$emit("cancel"))
        }, {
          default: h(() => [...f[4] || (f[4] = [
            x(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), $8 = /* @__PURE__ */ Ie(b8, [["__scopeId", "data-v-56021b18"]]), C8 = { class: "conflict-summary-box" }, x8 = { class: "summary-header" }, S8 = { class: "summary-text" }, I8 = { key: 0 }, E8 = {
  key: 1,
  class: "all-resolved"
}, T8 = { class: "summary-progress" }, M8 = { class: "progress-bar" }, P8 = { class: "progress-text" }, R8 = /* @__PURE__ */ xe({
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
    return (a, l) => (n(), i("div", C8, [
      s("div", x8, [
        l[0] || (l[0] = s("span", { class: "summary-icon" }, "⚠", -1)),
        s("div", S8, [
          s("strong", null, m(e.conflictCount) + " conflict" + m(e.conflictCount !== 1 ? "s" : "") + " detected", 1),
          e.resolvedCount < e.conflictCount ? (n(), i("p", I8, " Resolve all conflicts before " + m(e.operationType) + "ing ", 1)) : (n(), i("p", E8, " All conflicts resolved - ready to " + m(e.operationType), 1))
        ])
      ]),
      s("div", T8, [
        s("div", M8, [
          s("div", {
            class: "progress-fill",
            style: Dt({ width: o.value + "%" })
          }, null, 4)
        ]),
        s("span", P8, m(e.resolvedCount) + " / " + m(e.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), L8 = /* @__PURE__ */ Ie(R8, [["__scopeId", "data-v-4e9e6cc9"]]), D8 = { class: "modal-header" }, N8 = { class: "modal-title" }, U8 = { class: "modal-body" }, O8 = {
  key: 0,
  class: "error-box"
}, A8 = {
  key: 0,
  class: "error-hint"
}, z8 = {
  key: 1,
  class: "loading-state"
}, F8 = { class: "commit-summary" }, V8 = {
  key: 0,
  class: "commits-section"
}, B8 = { class: "commit-list" }, W8 = { class: "commit-hash" }, G8 = { class: "commit-message" }, j8 = { class: "commit-date" }, H8 = {
  key: 1,
  class: "changes-section"
}, q8 = {
  key: 0,
  class: "change-group",
  open: ""
}, K8 = { class: "change-count" }, J8 = { class: "change-list" }, Q8 = {
  key: 0,
  class: "conflict-badge"
}, Y8 = {
  key: 1,
  class: "change-group"
}, X8 = { class: "change-count" }, Z8 = { class: "change-list" }, e4 = {
  key: 2,
  class: "change-group"
}, t4 = { class: "change-count" }, s4 = { class: "change-list" }, o4 = {
  key: 3,
  class: "strategy-section"
}, n4 = { class: "radio-group" }, a4 = { class: "radio-option" }, l4 = { class: "radio-option" }, i4 = { class: "radio-option" }, r4 = {
  key: 4,
  class: "up-to-date"
}, c4 = { class: "modal-actions" }, xi = "comfygit.pullModelStrategy", u4 = /* @__PURE__ */ xe({
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
    const o = e, a = t, l = k(localStorage.getItem(xi) || "skip");
    gt(l, (S) => {
      localStorage.setItem(xi, S);
    });
    const r = R(() => {
      var S;
      return ((S = o.error) == null ? void 0 : S.toLowerCase().includes("unrelated histories")) ?? !1;
    }), c = R(() => {
      if (!o.preview) return 0;
      const S = o.preview.changes.workflows;
      return S.added.length + S.modified.length + S.deleted.length;
    }), u = R(() => o.preview ? o.preview.changes.nodes.to_install.length : 0), d = R(() => {
      var S;
      return c.value > 0 || u.value > 0 || (((S = o.preview) == null ? void 0 : S.changes.models.count) || 0) > 0;
    }), v = R(() => o.preview && _c(o.preview) ? o.preview : null), f = R(() => {
      var S;
      return ((S = v.value) == null ? void 0 : S.workflow_conflicts.length) ?? 0;
    }), p = R(() => {
      var S;
      return ((S = o.conflictResolutions) == null ? void 0 : S.size) ?? 0;
    }), w = R(
      () => f.value > 0 && p.value === f.value
    ), g = R(() => !(!o.preview || o.preview.has_uncommitted_changes || v.value && !w.value));
    function _(S) {
      if (!v.value) return !1;
      const C = S.replace(/\.json$/, "");
      return v.value.workflow_conflicts.some((I) => I.name === C);
    }
    function b(S) {
      const C = o.conflictResolutions ? Array.from(o.conflictResolutions.values()) : void 0;
      a("pull", { modelStrategy: l.value, force: S, resolutions: C });
    }
    return (S, C) => {
      var I, E;
      return n(), L(Yt, { to: "body" }, [
        e.show ? (n(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: C[11] || (C[11] = (M) => S.$emit("close"))
        }, [
          s("div", {
            class: "modal-content",
            onClick: C[10] || (C[10] = vt(() => {
            }, ["stop"]))
          }, [
            s("div", D8, [
              s("h3", N8, "PULL FROM " + m(e.remoteName.toUpperCase()), 1),
              s("button", {
                class: "modal-close",
                onClick: C[0] || (C[0] = (M) => S.$emit("close"))
              }, "✕")
            ]),
            s("div", U8, [
              e.error ? (n(), i("div", O8, [
                C[13] || (C[13] = s("span", { class: "error-icon" }, "✕", -1)),
                s("div", null, [
                  C[12] || (C[12] = s("strong", null, "PULL FAILED", -1)),
                  s("p", null, m(e.error), 1),
                  r.value ? (n(), i("p", A8, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : y("", !0)
                ])
              ])) : e.loading ? (n(), i("div", z8, [...C[14] || (C[14] = [
                s("span", { class: "spinner" }, "⟳", -1),
                x(" Loading preview... ", -1)
              ])])) : (I = e.preview) != null && I.has_uncommitted_changes ? (n(), i(W, { key: 2 }, [
                C[15] || (C[15] = s("div", { class: "warning-box" }, [
                  s("span", { class: "warning-icon" }, "⚠"),
                  s("div", null, [
                    s("strong", null, "UNCOMMITTED CHANGES"),
                    s("p", null, "You have uncommitted changes that must be committed or discarded before pulling.")
                  ])
                ], -1)),
                C[16] || (C[16] = s("div", { class: "options-section" }, [
                  s("p", null, [
                    s("strong", null, "Options:")
                  ]),
                  s("ul", null, [
                    s("li", null, "Commit your changes first (recommended)"),
                    s("li", null, "Discard changes and force pull")
                  ])
                ], -1))
              ], 64)) : e.preview ? (n(), i(W, { key: 3 }, [
                s("div", F8, [
                  C[17] || (C[17] = s("span", { class: "icon" }, "📥", -1)),
                  x(" " + m(e.preview.commits_behind) + " commit" + m(e.preview.commits_behind !== 1 ? "s" : "") + " from " + m(e.preview.remote) + "/" + m(e.preview.branch), 1)
                ]),
                e.preview.commits && e.preview.commits.length > 0 ? (n(), i("div", V8, [
                  C[18] || (C[18] = s("h4", { class: "section-title" }, "INCOMING COMMITS", -1)),
                  s("div", B8, [
                    (n(!0), i(W, null, ye(e.preview.commits, (M) => (n(), i("div", {
                      key: M.hash,
                      class: "commit-item"
                    }, [
                      s("span", W8, m(M.short_hash || M.hash.slice(0, 7)), 1),
                      s("span", G8, m(M.message), 1),
                      s("span", j8, m(M.date_relative || M.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                d.value ? (n(), i("div", H8, [
                  C[22] || (C[22] = s("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  c.value > 0 ? (n(), i("details", q8, [
                    s("summary", null, [
                      C[19] || (C[19] = s("span", { class: "change-type" }, "Workflows", -1)),
                      s("span", K8, m(c.value) + " changes", 1)
                    ]),
                    s("div", J8, [
                      (n(!0), i(W, null, ye(e.preview.changes.workflows.added, (M) => (n(), i("div", {
                        key: "a-" + M,
                        class: "change-item add"
                      }, " + " + m(M), 1))), 128)),
                      (n(!0), i(W, null, ye(e.preview.changes.workflows.modified, (M) => (n(), i("div", {
                        key: "m-" + M,
                        class: "change-item modify"
                      }, [
                        x(" ~ " + m(M) + " ", 1),
                        _(M) ? (n(), i("span", Q8, "CONFLICT")) : y("", !0)
                      ]))), 128)),
                      (n(!0), i(W, null, ye(e.preview.changes.workflows.deleted, (M) => (n(), i("div", {
                        key: "d-" + M,
                        class: "change-item delete"
                      }, " - " + m(M), 1))), 128))
                    ])
                  ])) : y("", !0),
                  u.value > 0 ? (n(), i("details", Y8, [
                    s("summary", null, [
                      C[20] || (C[20] = s("span", { class: "change-type" }, "Nodes", -1)),
                      s("span", X8, m(u.value) + " to install", 1)
                    ]),
                    s("div", Z8, [
                      (n(!0), i(W, null, ye(e.preview.changes.nodes.to_install, (M) => (n(), i("div", {
                        key: M,
                        class: "change-item add"
                      }, " + " + m(M), 1))), 128))
                    ])
                  ])) : y("", !0),
                  e.preview.changes.models.count > 0 ? (n(), i("details", e4, [
                    s("summary", null, [
                      C[21] || (C[21] = s("span", { class: "change-type" }, "Models", -1)),
                      s("span", t4, m(e.preview.changes.models.count) + " referenced", 1)
                    ]),
                    s("div", s4, [
                      (n(!0), i(W, null, ye(e.preview.changes.models.referenced, (M) => (n(), i("div", {
                        key: M,
                        class: "change-item"
                      }, m(M), 1))), 128))
                    ])
                  ])) : y("", !0)
                ])) : y("", !0),
                v.value ? (n(), L(L8, {
                  key: 2,
                  "conflict-count": f.value,
                  "resolved-count": p.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : y("", !0),
                e.preview.changes.models.count > 0 ? (n(), i("div", o4, [
                  C[27] || (C[27] = s("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  s("div", n4, [
                    s("label", a4, [
                      Pt(s("input", {
                        type: "radio",
                        "onUpdate:modelValue": C[1] || (C[1] = (M) => l.value = M),
                        value: "all"
                      }, null, 512), [
                        [Vn, l.value]
                      ]),
                      C[23] || (C[23] = s("span", null, "Download all models", -1))
                    ]),
                    s("label", l4, [
                      Pt(s("input", {
                        type: "radio",
                        "onUpdate:modelValue": C[2] || (C[2] = (M) => l.value = M),
                        value: "required"
                      }, null, 512), [
                        [Vn, l.value]
                      ]),
                      C[24] || (C[24] = s("span", null, "Download required only", -1))
                    ]),
                    s("label", i4, [
                      Pt(s("input", {
                        type: "radio",
                        "onUpdate:modelValue": C[3] || (C[3] = (M) => l.value = M),
                        value: "skip"
                      }, null, 512), [
                        [Vn, l.value]
                      ]),
                      C[25] || (C[25] = s("span", null, "Skip model downloads", -1)),
                      C[26] || (C[26] = s("span", { class: "default-badge" }, "default", -1))
                    ])
                  ]),
                  C[28] || (C[28] = s("p", { class: "strategy-hint" }, "Models can be downloaded later from MODEL INDEX", -1))
                ])) : y("", !0),
                e.preview.commits_behind === 0 ? (n(), i("div", r4, [
                  C[29] || (C[29] = s("span", { class: "icon" }, "✓", -1)),
                  x(" Already up to date with " + m(e.preview.remote) + "/" + m(e.preview.branch), 1)
                ])) : y("", !0)
              ], 64)) : y("", !0)
            ]),
            s("div", c4, [
              $(Re, {
                variant: "secondary",
                onClick: C[4] || (C[4] = (M) => S.$emit("close"))
              }, {
                default: h(() => [...C[30] || (C[30] = [
                  x(" Cancel ", -1)
                ])]),
                _: 1
              }),
              e.error ? (n(), i(W, { key: 0 }, [
                $(Re, {
                  variant: "secondary",
                  loading: e.pulling,
                  onClick: C[5] || (C[5] = (M) => b(!1))
                }, {
                  default: h(() => [...C[31] || (C[31] = [
                    x(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                $(Re, {
                  variant: "destructive",
                  loading: e.pulling,
                  onClick: C[6] || (C[6] = (M) => b(!0))
                }, {
                  default: h(() => [...C[32] || (C[32] = [
                    x(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (E = e.preview) != null && E.has_uncommitted_changes ? (n(), L(Re, {
                key: 1,
                variant: "destructive",
                loading: e.pulling,
                onClick: C[7] || (C[7] = (M) => b(!0))
              }, {
                default: h(() => [...C[33] || (C[33] = [
                  x(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : e.preview && e.preview.commits_behind > 0 ? (n(), i(W, { key: 2 }, [
                v.value && !w.value ? (n(), L(Re, {
                  key: 0,
                  variant: "primary",
                  onClick: C[8] || (C[8] = (M) => a("openConflictResolution"))
                }, {
                  default: h(() => [
                    x(" Resolve Conflicts (" + m(p.value) + "/" + m(f.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (n(), L(Re, {
                  key: 1,
                  variant: "primary",
                  loading: e.pulling,
                  disabled: !g.value,
                  onClick: C[9] || (C[9] = (M) => b(!1))
                }, {
                  default: h(() => [...C[34] || (C[34] = [
                    x(" Pull Changes ", -1)
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
}), d4 = /* @__PURE__ */ Ie(u4, [["__scopeId", "data-v-1d633bba"]]), m4 = { class: "modal-header" }, f4 = { class: "modal-title" }, v4 = { class: "modal-body" }, p4 = {
  key: 0,
  class: "error-box"
}, g4 = {
  key: 1,
  class: "loading-state"
}, h4 = {
  key: 2,
  class: "warning-box"
}, y4 = {
  key: 1,
  class: "commits-section"
}, w4 = { class: "commit-list" }, _4 = { class: "commit-hash" }, k4 = { class: "commit-message" }, b4 = { class: "commit-date" }, $4 = { class: "force-option" }, C4 = { class: "checkbox-option" }, x4 = { class: "commit-summary" }, S4 = { key: 0 }, I4 = { key: 1 }, E4 = {
  key: 0,
  class: "info-box"
}, T4 = {
  key: 2,
  class: "commits-section"
}, M4 = { class: "commit-list" }, P4 = { class: "commit-hash" }, R4 = { class: "commit-message" }, L4 = { class: "commit-date" }, D4 = {
  key: 3,
  class: "up-to-date"
}, N4 = { class: "modal-actions" }, U4 = /* @__PURE__ */ xe({
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
    const o = e, a = t, l = k(!1), r = k(!1), c = R(() => {
      var w;
      return ((w = o.preview) == null ? void 0 : w.warnings) || {
        models_without_sources: [],
        nodes_without_provenance: []
      };
    }), u = R(
      () => c.value.models_without_sources.length
    ), d = R(
      () => c.value.nodes_without_provenance.length
    ), v = R(
      () => u.value + d.value
    ), f = R(() => v.value > 0);
    function p(w) {
      a("push", { force: w });
    }
    return (w, g) => {
      var _, b, S, C;
      return n(), i(W, null, [
        (n(), L(Yt, { to: "body" }, [
          e.show ? (n(), i("div", {
            key: 0,
            class: "modal-overlay",
            onClick: g[9] || (g[9] = (I) => w.$emit("close"))
          }, [
            s("div", {
              class: "modal-content",
              onClick: g[8] || (g[8] = vt(() => {
              }, ["stop"]))
            }, [
              s("div", m4, [
                s("h3", f4, "PUSH TO " + m(e.remoteName.toUpperCase()), 1),
                s("button", {
                  class: "modal-close",
                  onClick: g[0] || (g[0] = (I) => w.$emit("close"))
                }, "✕")
              ]),
              s("div", v4, [
                e.error ? (n(), i("div", p4, [
                  g[13] || (g[13] = s("span", { class: "error-icon" }, "!", -1)),
                  s("div", null, [
                    g[12] || (g[12] = s("strong", null, "Push failed", -1)),
                    s("p", null, m(e.error), 1)
                  ])
                ])) : y("", !0),
                e.loading ? (n(), i("div", g4, [...g[14] || (g[14] = [
                  s("span", { class: "spinner" }, "⟳", -1),
                  x(" Loading preview... ", -1)
                ])])) : (_ = e.preview) != null && _.has_uncommitted_changes ? (n(), i("div", h4, [...g[15] || (g[15] = [
                  s("span", { class: "warning-icon" }, "!", -1),
                  s("div", null, [
                    s("strong", null, "UNCOMMITTED CHANGES"),
                    s("p", null, "Commit your changes before pushing.")
                  ], -1)
                ])])) : (b = e.preview) != null && b.remote_has_new_commits ? (n(), i(W, { key: 3 }, [
                  g[19] || (g[19] = s("div", { class: "warning-box" }, [
                    s("span", { class: "warning-icon" }, "!"),
                    s("div", null, [
                      s("strong", null, "REMOTE HAS NEW COMMITS"),
                      s("p", null, "The remote has commits you don't have locally. You should pull first to avoid overwriting changes.")
                    ])
                  ], -1)),
                  f.value ? (n(), L(ol, {
                    key: 0,
                    warnings: c.value,
                    message: "Missing provenance can prevent another machine, or ComfyGit Cloud, from rebuilding this environment exactly.",
                    onReview: g[1] || (g[1] = (I) => r.value = !0)
                  }, null, 8, ["warnings"])) : y("", !0),
                  e.preview.commits_ahead > 0 ? (n(), i("div", y4, [
                    g[16] || (g[16] = s("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                    s("div", w4, [
                      (n(!0), i(W, null, ye(e.preview.commits, (I) => (n(), i("div", {
                        key: I.hash,
                        class: "commit-item"
                      }, [
                        s("span", _4, m(I.short_hash || I.hash.slice(0, 7)), 1),
                        s("span", k4, m(I.message), 1),
                        s("span", b4, m(I.date_relative || I.relative_date), 1)
                      ]))), 128))
                    ])
                  ])) : y("", !0),
                  s("div", $4, [
                    s("label", C4, [
                      Pt(s("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": g[2] || (g[2] = (I) => l.value = I)
                      }, null, 512), [
                        [ea, l.value]
                      ]),
                      g[17] || (g[17] = s("span", null, "Force push (overwrite remote)", -1))
                    ]),
                    g[18] || (g[18] = s("p", { class: "option-hint" }, "Uses --force-with-lease for safety", -1))
                  ])
                ], 64)) : e.preview ? (n(), i(W, { key: 4 }, [
                  s("div", x4, [
                    g[20] || (g[20] = s("span", { class: "icon" }, "📤", -1)),
                    e.preview.is_first_push ? (n(), i("span", S4, " Creating " + m(e.preview.remote) + "/" + m(e.preview.branch) + " with " + m(e.preview.commits_ahead) + " commit" + m(e.preview.commits_ahead !== 1 ? "s" : ""), 1)) : (n(), i("span", I4, " Pushing " + m(e.preview.commits_ahead) + " commit" + m(e.preview.commits_ahead !== 1 ? "s" : "") + " to " + m(e.preview.remote) + "/" + m(e.preview.branch), 1))
                  ]),
                  e.preview.is_first_push ? (n(), i("div", E4, [...g[21] || (g[21] = [
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
                  f.value ? (n(), L(ol, {
                    key: 1,
                    warnings: c.value,
                    message: "Missing provenance can prevent another machine, or ComfyGit Cloud, from rebuilding this environment exactly.",
                    onReview: g[3] || (g[3] = (I) => r.value = !0)
                  }, null, 8, ["warnings"])) : y("", !0),
                  e.preview.commits_ahead > 0 ? (n(), i("div", T4, [
                    g[22] || (g[22] = s("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                    s("div", M4, [
                      (n(!0), i(W, null, ye(e.preview.commits, (I) => (n(), i("div", {
                        key: I.hash,
                        class: "commit-item"
                      }, [
                        s("span", P4, m(I.short_hash || I.hash.slice(0, 7)), 1),
                        s("span", R4, m(I.message), 1),
                        s("span", L4, m(I.date_relative || I.relative_date), 1)
                      ]))), 128))
                    ])
                  ])) : (n(), i("div", D4, [
                    g[23] || (g[23] = s("span", { class: "icon" }, "✓", -1)),
                    x(" Nothing to push - already up to date with " + m(e.preview.remote) + "/" + m(e.preview.branch), 1)
                  ]))
                ], 64)) : y("", !0)
              ]),
              s("div", N4, [
                $(Re, {
                  variant: "secondary",
                  onClick: g[4] || (g[4] = (I) => w.$emit("close"))
                }, {
                  default: h(() => [...g[24] || (g[24] = [
                    x(" Cancel ", -1)
                  ])]),
                  _: 1
                }),
                (S = e.preview) != null && S.remote_has_new_commits ? (n(), i(W, { key: 0 }, [
                  $(Re, {
                    variant: "secondary",
                    onClick: g[5] || (g[5] = (I) => w.$emit("pull-first"))
                  }, {
                    default: h(() => [...g[25] || (g[25] = [
                      x(" Pull First ", -1)
                    ])]),
                    _: 1
                  }),
                  $(Re, {
                    variant: "destructive",
                    disabled: !l.value,
                    loading: e.pushing,
                    onClick: g[6] || (g[6] = (I) => p(!0))
                  }, {
                    default: h(() => [
                      x(m(f.value ? "Force Push Anyway" : "Force Push"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled", "loading"])
                ], 64)) : e.preview && e.preview.commits_ahead > 0 && !e.preview.has_uncommitted_changes ? (n(), L(Re, {
                  key: 1,
                  variant: "primary",
                  loading: e.pushing,
                  onClick: g[7] || (g[7] = (I) => p(!1))
                }, {
                  default: h(() => [
                    x(m(f.value ? "Push Anyway" : "Push"), 1)
                  ]),
                  _: 1
                }, 8, ["loading"])) : y("", !0)
              ])
            ])
          ])) : y("", !0)
        ])),
        r.value && ((C = e.preview) != null && C.warnings) ? (n(), L(Sl, {
          key: 0,
          warnings: e.preview.warnings,
          onClose: g[10] || (g[10] = (I) => r.value = !1),
          onRevalidate: g[11] || (g[11] = (I) => w.$emit("revalidate"))
        }, null, 8, ["warnings"])) : y("", !0)
      ], 64);
    };
  }
}), O4 = /* @__PURE__ */ Ie(U4, [["__scopeId", "data-v-7748bf33"]]), A4 = { class: "resolution-choice-group" }, z4 = ["disabled"], F4 = ["disabled"], V4 = /* @__PURE__ */ xe({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (t, o) => (n(), i("div", A4, [
      s("button", {
        class: Be(["choice-btn", "mine", { selected: e.modelValue === "take_base" }]),
        onClick: o[0] || (o[0] = (a) => t.$emit("update:modelValue", "take_base")),
        disabled: e.disabled
      }, [...o[2] || (o[2] = [
        s("span", { class: "choice-icon" }, "◀", -1),
        s("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, z4),
      s("button", {
        class: Be(["choice-btn", "theirs", { selected: e.modelValue === "take_target" }]),
        onClick: o[1] || (o[1] = (a) => t.$emit("update:modelValue", "take_target")),
        disabled: e.disabled
      }, [...o[3] || (o[3] = [
        s("span", { class: "choice-label" }, "Keep Theirs", -1),
        s("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, F4)
    ]));
  }
}), B4 = /* @__PURE__ */ Ie(V4, [["__scopeId", "data-v-985715ed"]]), W4 = { class: "conflict-header" }, G4 = { class: "conflict-info" }, j4 = { class: "workflow-name" }, H4 = { class: "conflict-description" }, q4 = {
  key: 0,
  class: "resolved-badge"
}, K4 = { class: "resolved-text" }, J4 = { class: "conflict-hashes" }, Q4 = { class: "hash-item" }, Y4 = { class: "hash-item" }, X4 = { class: "conflict-actions" }, Z4 = /* @__PURE__ */ xe({
  __name: "WorkflowConflictItem",
  props: {
    conflict: {},
    resolution: {},
    disabled: { type: Boolean }
  },
  emits: ["resolve"],
  setup(e, { emit: t }) {
    const o = e, a = t, l = k(o.resolution);
    gt(() => o.resolution, (d) => {
      l.value = d;
    }), gt(l, (d) => {
      d && a("resolve", d);
    });
    const r = R(() => l.value !== null), c = R(() => o.conflict.conflict_type === "both_modified" ? "Both you and remote modified this workflow" : "Conflicting changes detected"), u = R(() => {
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
        class: Be(["conflict-item", { resolved: r.value }])
      }, [
        s("div", W4, [
          v[2] || (v[2] = s("span", { class: "conflict-icon" }, "⚠", -1)),
          s("div", G4, [
            s("code", j4, m(e.conflict.name) + ".json", 1),
            s("div", H4, m(c.value), 1)
          ]),
          r.value ? (n(), i("div", q4, [
            v[1] || (v[1] = s("span", { class: "resolved-icon" }, "✓", -1)),
            s("span", K4, m(u.value), 1)
          ])) : y("", !0)
        ]),
        s("div", J4, [
          s("span", Q4, [
            v[3] || (v[3] = x("Your: ", -1)),
            s("code", null, m(((f = e.conflict.base_hash) == null ? void 0 : f.slice(0, 8)) || "n/a"), 1)
          ]),
          s("span", Y4, [
            v[4] || (v[4] = x("Theirs: ", -1)),
            s("code", null, m(((p = e.conflict.target_hash) == null ? void 0 : p.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        s("div", X4, [
          $(B4, {
            modelValue: l.value,
            "onUpdate:modelValue": v[0] || (v[0] = (w) => l.value = w),
            disabled: e.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), eI = /* @__PURE__ */ Ie(Z4, [["__scopeId", "data-v-506d3bbf"]]), tI = { class: "resolution-content" }, sI = {
  key: 0,
  class: "error-box"
}, oI = { class: "resolution-header" }, nI = { class: "header-stats" }, aI = { class: "stat" }, lI = { class: "stat-value" }, iI = { class: "stat resolved" }, rI = { class: "stat-value" }, cI = {
  key: 0,
  class: "stat pending"
}, uI = { class: "stat-value" }, dI = { class: "conflicts-list" }, mI = {
  key: 1,
  class: "all-resolved-message"
}, fI = /* @__PURE__ */ xe({
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
    const o = e, a = t, l = R(() => o.resolutions.size), r = R(() => o.workflowConflicts.length - l.value), c = R(() => l.value === o.workflowConflicts.length), u = R(
      () => o.operationType === "pull" ? "Validate & Pull" : "Validate & Merge"
    );
    function d(w) {
      const g = o.resolutions.get(w);
      return (g == null ? void 0 : g.resolution) ?? null;
    }
    function v(w, g) {
      a("resolve", w, g);
    }
    function f() {
      a("close");
    }
    function p() {
      a("apply");
    }
    return (w, g) => (n(), L($t, {
      title: `Resolve Workflow Conflicts: ${e.operationType === "pull" ? "Pull" : "Merge"}`,
      size: "lg",
      "fixed-height": !0,
      onClose: f
    }, {
      body: h(() => [
        s("div", tI, [
          e.error ? (n(), i("div", sI, [
            g[1] || (g[1] = s("span", { class: "error-icon" }, "✕", -1)),
            s("div", null, [
              g[0] || (g[0] = s("strong", null, "Validation Failed", -1)),
              s("p", null, m(e.error), 1)
            ])
          ])) : y("", !0),
          s("div", oI, [
            s("div", nI, [
              s("div", aI, [
                s("span", lI, m(e.workflowConflicts.length), 1),
                g[2] || (g[2] = s("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              s("div", iI, [
                s("span", rI, m(l.value), 1),
                g[3] || (g[3] = s("span", { class: "stat-label" }, "resolved", -1))
              ]),
              r.value > 0 ? (n(), i("div", cI, [
                s("span", uI, m(r.value), 1),
                g[4] || (g[4] = s("span", { class: "stat-label" }, "pending", -1))
              ])) : y("", !0)
            ]),
            g[5] || (g[5] = s("p", { class: "header-hint" }, " Choose which version to keep for each conflicting workflow. ", -1))
          ]),
          s("div", dI, [
            (n(!0), i(W, null, ye(e.workflowConflicts, (_) => (n(), L(eI, {
              key: _.name,
              conflict: _,
              resolution: d(_.name),
              onResolve: (b) => v(_.name, b)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          c.value ? (n(), i("div", mI, [
            g[6] || (g[6] = s("span", { class: "resolved-icon" }, "✓", -1)),
            s("span", null, 'All conflicts resolved! Click "' + m(u.value) + '" to continue.', 1)
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        $(Ue, {
          variant: "secondary",
          onClick: f
        }, {
          default: h(() => [...g[7] || (g[7] = [
            x(" Cancel ", -1)
          ])]),
          _: 1
        }),
        g[8] || (g[8] = s("div", { class: "footer-spacer" }, null, -1)),
        $(Ue, {
          variant: "primary",
          disabled: !c.value || e.validating,
          loading: e.validating,
          onClick: p
        }, {
          default: h(() => [
            x(m(u.value), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), vI = /* @__PURE__ */ Ie(fI, [["__scopeId", "data-v-c58d150d"]]), pI = { class: "node-conflict-item" }, gI = { class: "node-header" }, hI = { class: "node-name" }, yI = { class: "node-id" }, wI = { class: "version-comparison" }, _I = { class: "version yours" }, kI = { class: "version theirs" }, bI = { class: "chosen-version" }, $I = { class: "chosen" }, CI = { class: "chosen-reason" }, xI = { class: "affected-workflows" }, SI = { class: "wf-source" }, II = { class: "wf-version" }, EI = /* @__PURE__ */ xe({
  __name: "NodeConflictItem",
  props: {
    conflict: {}
  },
  setup(e) {
    return (t, o) => (n(), i("div", pI, [
      s("div", gI, [
        s("code", hI, m(e.conflict.node_name), 1),
        s("span", yI, "(" + m(e.conflict.node_id) + ")", 1)
      ]),
      s("div", wI, [
        s("div", _I, [
          o[0] || (o[0] = s("span", { class: "label" }, "Your version:", -1)),
          s("code", null, m(e.conflict.base_version), 1)
        ]),
        o[2] || (o[2] = s("span", { class: "arrow" }, "→", -1)),
        s("div", kI, [
          o[1] || (o[1] = s("span", { class: "label" }, "Their version:", -1)),
          s("code", null, m(e.conflict.target_version), 1)
        ])
      ]),
      s("div", bI, [
        o[3] || (o[3] = s("span", { class: "label" }, "Will install:", -1)),
        s("code", $I, m(e.conflict.chosen_version), 1),
        s("span", CI, m(e.conflict.chosen_reason), 1)
      ]),
      s("details", xI, [
        s("summary", null, " Affected workflows (" + m(e.conflict.affected_workflows.length) + ") ", 1),
        s("ul", null, [
          (n(!0), i(W, null, ye(e.conflict.affected_workflows, (a) => (n(), i("li", {
            key: a.name
          }, [
            s("code", null, m(a.name), 1),
            s("span", SI, "(" + m(a.source === "base" ? "yours" : "theirs") + ")", 1),
            s("span", II, "needs v" + m(a.required_version), 1)
          ]))), 128))
        ])
      ])
    ]));
  }
}), TI = /* @__PURE__ */ Ie(EI, [["__scopeId", "data-v-8b626725"]]), MI = { class: "validation-content" }, PI = {
  key: 0,
  class: "compatible-message"
}, RI = { class: "conflicts-list" }, LI = {
  key: 2,
  class: "warnings-section"
}, DI = /* @__PURE__ */ xe({
  __name: "ValidationResultsModal",
  props: {
    validation: {},
    operationType: {},
    executing: { type: Boolean }
  },
  emits: ["proceed", "goBack", "cancel"],
  setup(e, { emit: t }) {
    const o = e, a = t, l = R(() => o.validation.is_compatible ? o.operationType === "pull" ? "Pull" : "Merge" : o.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (r, c) => (n(), L($t, {
      title: "Compatibility Check",
      size: "lg",
      onClose: c[3] || (c[3] = (u) => a("cancel"))
    }, {
      body: h(() => [
        s("div", MI, [
          e.validation.is_compatible && e.validation.node_conflicts.length === 0 ? (n(), i("div", PI, [
            c[5] || (c[5] = s("span", { class: "icon" }, "✓", -1)),
            s("div", null, [
              c[4] || (c[4] = s("strong", null, "All clear!", -1)),
              s("p", null, "Your workflow choices are compatible. Ready to " + m(e.operationType) + ".", 1)
            ])
          ])) : e.validation.node_conflicts.length > 0 ? (n(), i(W, { key: 1 }, [
            c[6] || (c[6] = s("div", { class: "warning-header" }, [
              s("span", { class: "icon" }, "⚠"),
              s("div", null, [
                s("strong", null, "Node Version Differences"),
                s("p", null, " Your workflow choices require different versions of some nodes. The versions shown below will be installed. ")
              ])
            ], -1)),
            s("div", RI, [
              (n(!0), i(W, null, ye(e.validation.node_conflicts, (u) => (n(), L(TI, {
                key: u.node_id,
                conflict: u
              }, null, 8, ["conflict"]))), 128))
            ]),
            c[7] || (c[7] = s("div", { class: "info-box" }, [
              s("strong", null, "What happens if you proceed?"),
              s("p", null, " The highlighted versions will be installed. Workflows built with different versions may need minor adjustments. ")
            ], -1))
          ], 64)) : y("", !0),
          e.validation.warnings.length > 0 ? (n(), i("div", LI, [
            c[8] || (c[8] = s("h4", null, "Warnings", -1)),
            s("ul", null, [
              (n(!0), i(W, null, ye(e.validation.warnings, (u, d) => (n(), i("li", { key: d }, m(u), 1))), 128))
            ])
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        $(Ue, {
          variant: "secondary",
          onClick: c[0] || (c[0] = (u) => a("cancel"))
        }, {
          default: h(() => [...c[9] || (c[9] = [
            x(" Cancel ", -1)
          ])]),
          _: 1
        }),
        c[11] || (c[11] = s("div", { class: "footer-spacer" }, null, -1)),
        $(Ue, {
          variant: "secondary",
          onClick: c[1] || (c[1] = (u) => a("goBack"))
        }, {
          default: h(() => [...c[10] || (c[10] = [
            x(" ← Change Choices ", -1)
          ])]),
          _: 1
        }),
        $(Ue, {
          variant: "primary",
          loading: e.executing,
          onClick: c[2] || (c[2] = (u) => a("proceed"))
        }, {
          default: h(() => [
            x(m(l.value), 1)
          ]),
          _: 1
        }, 8, ["loading"])
      ]),
      _: 1
    }));
  }
}), NI = /* @__PURE__ */ Ie(DI, [["__scopeId", "data-v-fefd26ed"]]), UI = {
  key: 0,
  class: "embedded-toolbar"
}, OI = { class: "embedded-toolbar-search" }, AI = /* @__PURE__ */ xe({
  __name: "RemotesSection",
  props: {
    embedded: { type: Boolean }
  },
  emits: ["toast"],
  setup(e, { emit: t }) {
    const o = t, {
      getRemotes: a,
      addRemote: l,
      removeRemote: r,
      updateRemoteUrl: c,
      fetchRemote: u,
      getRemoteSyncStatus: d,
      getPullPreview: v,
      pullFromRemote: f,
      getPushPreview: p,
      pushToRemote: w,
      validateMerge: g
    } = ct(), _ = k([]), b = k({}), S = k(!1), C = k(null), I = k(""), E = k(!1), M = k(null), N = k(!1), F = k("add"), V = k({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), D = R(() => {
      if (!I.value.trim()) return _.value;
      const Ve = I.value.toLowerCase();
      return _.value.filter(
        (Oe) => Oe.name.toLowerCase().includes(Ve) || Oe.fetch_url.toLowerCase().includes(Ve) || Oe.push_url.toLowerCase().includes(Ve)
      );
    });
    async function q() {
      S.value = !0, C.value = null;
      try {
        const Ve = await a();
        _.value = Ve.remotes, await Promise.all(
          Ve.remotes.map(async (Oe) => {
            const Qe = await d(Oe.name);
            Qe && (b.value[Oe.name] = Qe);
          })
        );
      } catch (Ve) {
        C.value = Ve instanceof Error ? Ve.message : "Failed to load remotes";
      } finally {
        S.value = !1;
      }
    }
    function ue() {
      F.value = "add", V.value = { name: "", fetchUrl: "", pushUrl: "" }, N.value = !0;
    }
    function le(Ve) {
      const Oe = _.value.find((Qe) => Qe.name === Ve);
      Oe && (F.value = "edit", V.value = {
        name: Oe.name,
        fetchUrl: Oe.fetch_url,
        pushUrl: Oe.push_url
      }, N.value = !0);
    }
    async function Y(Ve) {
      try {
        F.value === "add" ? await l(Ve.name, Ve.fetchUrl) : await c(Ve.name, Ve.fetchUrl, Ve.pushUrl || void 0), N.value = !1, await q();
      } catch (Oe) {
        C.value = Oe instanceof Error ? Oe.message : "Operation failed";
      }
    }
    function me() {
      N.value = !1, V.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function ne(Ve) {
      M.value = Ve;
      try {
        await u(Ve);
        const Oe = await d(Ve);
        Oe && (b.value[Ve] = Oe), o("toast", `✓ Fetched from ${Ve}`, "success");
      } catch (Oe) {
        o("toast", Oe instanceof Error ? Oe.message : "Fetch failed", "error");
      } finally {
        M.value = null;
      }
    }
    async function B(Ve) {
      if (confirm(`Remove remote "${Ve}"?`))
        try {
          await r(Ve), await q();
        } catch (Oe) {
          C.value = Oe instanceof Error ? Oe.message : "Failed to remove remote";
        }
    }
    function H() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const we = k("idle"), oe = R(() => we.value === "pull_preview"), de = R(
      () => we.value === "resolving" || we.value === "validating"
    ), ce = R(
      () => we.value === "validation_review" || we.value === "executing"
    ), K = k(!1), ee = k(null), te = k(!1), Me = k(null), Se = k(null), ze = k(!1), Ne = k(null), be = k(null), Ae = k(/* @__PURE__ */ new Map()), ge = k(null), ve = k(null), T = R(() => Ne.value && _c(Ne.value) ? Ne.value : null);
    async function A(Ve) {
      Se.value = Ve, we.value = "pull_preview", ze.value = !0, Ne.value = null, be.value = null;
      try {
        Ne.value = await v(Ve);
      } catch (Oe) {
        be.value = Oe instanceof Error ? Oe.message : "Failed to load pull preview";
      } finally {
        ze.value = !1;
      }
    }
    function ae() {
      we.value = "idle", Ne.value = null, be.value = null, Se.value = null;
    }
    async function Ce(Ve) {
      if (!Se.value) return;
      we.value = "executing", be.value = null;
      const Oe = Se.value;
      try {
        const Qe = await f(Oe, Ve);
        if (Qe.rolled_back) {
          be.value = `Pull failed and was rolled back: ${Qe.error || "Unknown error"}`, we.value = "pull_preview";
          return;
        }
        We(), we.value = "idle", o("toast", `✓ Pulled from ${Oe}`, "success"), await q();
      } catch (Qe) {
        be.value = Qe instanceof Error ? Qe.message : "Pull failed", we.value = "pull_preview";
      }
    }
    function Ee() {
      T.value && (we.value = "resolving", ve.value = null);
    }
    function ke(Ve, Oe) {
      Ae.value.set(Ve, { name: Ve, resolution: Oe });
    }
    function X() {
      we.value = "pull_preview";
    }
    async function G() {
      we.value = "validating", ve.value = null;
      try {
        const Ve = Array.from(Ae.value.values());
        ge.value = await g(Se.value, Ve), we.value = "validation_review";
      } catch (Ve) {
        ve.value = Ve instanceof Error ? Ve.message : "Validation failed", we.value = "resolving";
      }
    }
    async function fe() {
      we.value = "executing";
      const Ve = Se.value;
      try {
        const Oe = Array.from(Ae.value.values()), Qe = await f(Ve, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: Oe
        });
        if (Qe.rolled_back) {
          be.value = `Pull failed and was rolled back: ${Qe.error || "Unknown error"}`, we.value = "pull_preview";
          return;
        }
        We(), we.value = "idle", o("toast", `✓ Pulled from ${Ve}`, "success"), await q();
      } catch (Oe) {
        be.value = Oe instanceof Error ? Oe.message : "Pull failed", we.value = "validation_review";
      }
    }
    function he() {
      we.value = "resolving";
    }
    function je() {
      We(), we.value = "idle";
    }
    function We() {
      Ae.value.clear(), ge.value = null, ve.value = null, be.value = null, Ne.value = null, Se.value = null;
    }
    async function _e(Ve) {
      Se.value = Ve, K.value = !0, ze.value = !0, ee.value = null, Me.value = null;
      try {
        ee.value = await p(Ve);
      } catch (Oe) {
        Me.value = Oe instanceof Error ? Oe.message : "Failed to load push preview";
      } finally {
        ze.value = !1;
      }
    }
    async function Z() {
      if (Se.value) {
        ze.value = !0, Me.value = null;
        try {
          ee.value = await p(Se.value);
        } catch (Ve) {
          Me.value = Ve instanceof Error ? Ve.message : "Failed to refresh push preview";
        } finally {
          ze.value = !1;
        }
      }
    }
    function Fe() {
      K.value = !1, ee.value = null, Me.value = null, Se.value = null;
    }
    async function De(Ve) {
      var Qe;
      if (!Se.value) return;
      te.value = !0;
      const Oe = Se.value;
      Me.value = null;
      try {
        await w(Oe, Ve), Fe(), o("toast", `✓ Pushed to ${Oe}`, "success"), await q();
      } catch (pt) {
        const Q = pt instanceof Error ? pt.message : "Push failed";
        Me.value = Q, pt instanceof Xr && pt.status === 409 && ((Qe = pt.data) != null && Qe.needs_force) && ee.value ? ee.value = {
          ...ee.value,
          remote_has_new_commits: !0,
          needs_force: !0,
          can_push: !0,
          block_reason: null
        } : o("toast", Q, "error");
      } finally {
        te.value = !1;
      }
    }
    function He() {
      const Ve = Se.value;
      Fe(), Ve && A(Ve);
    }
    return lt(q), (Ve, Oe) => (n(), i(W, null, [
      $(zt, null, Zt({
        content: h(() => [
          S.value ? (n(), L(Es, {
            key: 0,
            message: "Loading remotes..."
          })) : C.value ? (n(), L(Ts, {
            key: 1,
            message: C.value,
            retry: !0,
            onRetry: q
          }, null, 8, ["message"])) : (n(), i(W, { key: 2 }, [
            e.embedded && !N.value ? (n(), i("div", UI, [
              s("div", OI, [
                $(po, {
                  modelValue: I.value,
                  "onUpdate:modelValue": Oe[2] || (Oe[2] = (Qe) => I.value = Qe),
                  placeholder: "🔍 Search remotes..."
                }, null, 8, ["modelValue"])
              ]),
              $(Re, {
                variant: "primary",
                size: "sm",
                onClick: ue
              }, {
                default: h(() => [...Oe[5] || (Oe[5] = [
                  x(" + Add Remote ", -1)
                ])]),
                _: 1
              })
            ])) : y("", !0),
            N.value ? (n(), L($8, {
              key: 1,
              mode: F.value,
              "remote-name": V.value.name,
              "fetch-url": V.value.fetchUrl,
              "push-url": V.value.pushUrl,
              onSubmit: Y,
              onCancel: me
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : y("", !0),
            D.value.length && !N.value ? (n(), L(Et, {
              key: 2,
              title: "REMOTES",
              count: D.value.length
            }, {
              default: h(() => [
                (n(!0), i(W, null, ye(D.value, (Qe) => (n(), L(u8, {
                  key: Qe.name,
                  remote: Qe,
                  "sync-status": b.value[Qe.name],
                  "fetching-remote": M.value,
                  onFetch: ne,
                  onEdit: le,
                  onRemove: B,
                  onPull: A,
                  onPush: _e
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            !D.value.length && !N.value ? (n(), L(hs, {
              key: 3,
              icon: "🌐",
              message: I.value ? `No remotes match '${I.value}'` : "No remotes configured."
            }, {
              actions: h(() => [
                $(Re, {
                  variant: "primary",
                  onClick: ue
                }, {
                  default: h(() => [...Oe[6] || (Oe[6] = [
                    x(" Add Your First Remote ", -1)
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
            $(Ft, {
              title: "GIT REMOTES",
              "show-info": !0,
              onInfoClick: Oe[0] || (Oe[0] = (Qe) => E.value = !0)
            }, {
              actions: h(() => [
                N.value ? y("", !0) : (n(), L(Re, {
                  key: 0,
                  variant: "primary",
                  size: "sm",
                  onClick: ue
                }, {
                  default: h(() => [...Oe[4] || (Oe[4] = [
                    x(" + Add Remote ", -1)
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
            N.value ? y("", !0) : (n(), L(po, {
              key: 0,
              modelValue: I.value,
              "onUpdate:modelValue": Oe[1] || (Oe[1] = (Qe) => I.value = Qe),
              placeholder: "🔍 Search remotes..."
            }, null, 8, ["modelValue"]))
          ]),
          key: "1"
        }
      ]), 1024),
      $(ds, {
        show: E.value,
        title: "About Git Remotes",
        onClose: Oe[3] || (Oe[3] = (Qe) => E.value = !1)
      }, {
        content: h(() => [...Oe[7] || (Oe[7] = [
          s("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          s("p", null, [
            x(" The "),
            s("strong", null, '"origin"'),
            x(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: h(() => [
          $(Re, {
            variant: "link",
            onClick: H
          }, {
            default: h(() => [...Oe[8] || (Oe[8] = [
              x(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      $(d4, {
        show: oe.value,
        "remote-name": Se.value || "",
        preview: Ne.value,
        loading: ze.value,
        pulling: we.value === "executing",
        error: be.value,
        "conflict-resolutions": Ae.value,
        onClose: ae,
        onPull: Ce,
        onOpenConflictResolution: Ee
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      $(O4, {
        show: K.value,
        "remote-name": Se.value || "",
        preview: ee.value,
        loading: ze.value,
        pushing: te.value,
        error: Me.value,
        onClose: Fe,
        onPush: De,
        onPullFirst: He,
        onRevalidate: Z
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing", "error"]),
      de.value && T.value ? (n(), L(vI, {
        key: 0,
        "workflow-conflicts": T.value.workflow_conflicts,
        resolutions: Ae.value,
        "operation-type": "pull",
        validating: we.value === "validating",
        error: ve.value,
        onClose: X,
        onResolve: ke,
        onApply: G
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : y("", !0),
      ce.value && ge.value ? (n(), L(NI, {
        key: 1,
        validation: ge.value,
        "operation-type": "pull",
        executing: we.value === "executing",
        onProceed: fe,
        onGoBack: he,
        onCancel: je
      }, null, 8, ["validation", "executing"])) : y("", !0)
    ], 64));
  }
}), zI = /* @__PURE__ */ Ie(AI, [["__scopeId", "data-v-a6651a66"]]), FI = /* @__PURE__ */ xe({
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
    const o = e, a = t, l = [
      { id: "remotes", label: "Remotes" },
      { id: "history", label: "History" },
      { id: "branches", label: "Branches" }
    ], r = k(o.initialTab ?? "remotes");
    return gt(() => o.initialTab, (c) => {
      c && (r.value = c);
    }), (c, u) => (n(), L(zt, null, {
      header: h(() => [
        $(Ft, { title: "VERSION CONTROL" })
      ]),
      search: h(() => [
        $(Pl, {
          modelValue: r.value,
          "onUpdate:modelValue": u[0] || (u[0] = (d) => r.value = d),
          tabs: l
        }, null, 8, ["modelValue"])
      ]),
      content: h(() => [
        r.value === "history" ? (n(), L(C5, {
          key: 0,
          embedded: "",
          commits: e.commits,
          "current-ref": e.currentRef,
          onSelect: u[1] || (u[1] = (d) => a("select", d)),
          onCheckout: u[2] || (u[2] = (d) => a("checkout", d))
        }, null, 8, ["commits", "current-ref"])) : r.value === "branches" ? (n(), L(q5, {
          key: 1,
          embedded: "",
          branches: e.branches,
          current: e.current,
          onSwitch: u[3] || (u[3] = (d) => a("switch", d)),
          onCreate: u[4] || (u[4] = (d) => a("create", d)),
          onDelete: u[5] || (u[5] = (d) => a("delete", d))
        }, null, 8, ["branches", "current"])) : (n(), L(zI, {
          key: 2,
          embedded: "",
          onToast: u[6] || (u[6] = (d, v) => a("toast", d, v))
        }))
      ]),
      _: 1
    }));
  }
}), VI = { class: "text-viewer-wrapper" }, BI = ["disabled", "title"], WI = { class: "text-content" }, GI = /* @__PURE__ */ xe({
  __name: "TextViewer",
  props: {
    content: {}
  },
  setup(e) {
    const t = e, o = k(null), a = k("idle");
    async function l() {
      if (t.content)
        try {
          await El(t.content), a.value = "copied", setTimeout(() => {
            a.value = "idle";
          }, 2e3);
        } catch (u) {
          console.error("Failed to copy text:", u);
        }
    }
    function r(u) {
      (u.ctrlKey || u.metaKey) && u.key === "c" && u.stopPropagation();
    }
    function c(u) {
      u.stopPropagation();
    }
    return (u, d) => (n(), i("div", VI, [
      s("div", {
        ref_key: "textOutputElement",
        ref: o,
        class: "text-output",
        tabindex: "0",
        onKeydown: r,
        onCopy: c
      }, [
        s("button", {
          class: "copy-overlay-btn",
          onClick: l,
          disabled: a.value !== "idle",
          title: a.value === "copied" ? "Copied!" : "Copy text"
        }, m(a.value === "copied" ? "Copied!" : "Copy"), 9, BI),
        s("pre", WI, m(e.content), 1)
      ], 544)
    ]));
  }
}), jI = /* @__PURE__ */ Ie(GI, [["__scopeId", "data-v-85a537ba"]]), HI = {
  key: 1,
  class: "manifest-viewer-shell"
}, qI = { class: "manifest-path" }, KI = /* @__PURE__ */ xe({
  __name: "ManifestSection",
  props: {
    embedded: { type: Boolean }
  },
  setup(e) {
    const { getEnvironmentManifest: t } = ct(), o = k(!1), a = k(null), l = k(!1), r = k({
      path: "",
      exists: !1,
      content: ""
    });
    async function c() {
      o.value = !0, a.value = null;
      try {
        r.value = await t();
      } catch (u) {
        a.value = u instanceof Error ? u.message : "Failed to load manifest";
      } finally {
        o.value = !1;
      }
    }
    return lt(c), (u, d) => (n(), i(W, null, [
      $(zt, null, Zt({
        content: h(() => [
          o.value ? (n(), L(Es, {
            key: 0,
            message: "Loading manifest..."
          })) : a.value ? (n(), L(Ts, {
            key: 1,
            message: a.value,
            retry: !0,
            onRetry: c
          }, null, 8, ["message"])) : (n(), i(W, { key: 2 }, [
            !r.value.exists || !r.value.content ? (n(), L(hs, {
              key: 0,
              icon: "📄",
              message: "No manifest content available"
            })) : (n(), i("div", HI, [
              $(jI, {
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
            $(Ft, {
              title: "MANIFEST (PYPROJECT.TOML)",
              "show-info": !0,
              onInfoClick: d[0] || (d[0] = (v) => l.value = !0)
            }, {
              actions: h(() => [
                $(Re, {
                  variant: "secondary",
                  size: "sm",
                  onClick: c,
                  disabled: o.value
                }, {
                  default: h(() => [
                    x(m(o.value ? "Loading..." : "Refresh"), 1)
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
      $(ds, {
        show: l.value,
        title: "About Manifest View",
        onClose: d[2] || (d[2] = (v) => l.value = !1)
      }, {
        content: h(() => [
          d[3] || (d[3] = s("p", null, [
            x(" This view shows the live "),
            s("strong", null, "pyproject.toml"),
            x(" from the current environment's "),
            s("strong", null, ".cec"),
            x(" directory. ")
          ], -1)),
          d[4] || (d[4] = s("p", { style: { "margin-top": "var(--cg-space-2)" } }, " It is read-only and intended for quick inspection and debugging without leaving the ComfyGit panel. ", -1)),
          d[5] || (d[5] = s("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Path: ", -1)),
          s("div", qI, [
            s("code", null, m(r.value.path || "unknown"), 1)
          ]),
          d[6] || (d[6] = s("p", { style: { "margin-top": "var(--cg-space-2)" } }, null, -1))
        ]),
        actions: h(() => [
          $(Re, {
            variant: "primary",
            onClick: d[1] || (d[1] = (v) => l.value = !1)
          }, {
            default: h(() => [...d[7] || (d[7] = [
              x(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), JI = /* @__PURE__ */ Ie(KI, [["__scopeId", "data-v-814a8fdd"]]), QI = { class: "log-viewer-wrapper" }, YI = ["disabled", "title"], XI = /* @__PURE__ */ xe({
  __name: "LogViewer",
  props: {
    logs: {},
    rawFormat: { type: Boolean }
  },
  setup(e) {
    const t = e, o = k(null), a = k("idle"), l = R(() => t.logs.map((v) => ({
      text: t.rawFormat || !v.timestamp ? v.message : `${v.timestamp} - ${v.name} - ${v.level} - ${v.func}:${v.line} - ${v.message}`,
      level: v.level
    })));
    async function r() {
      var f;
      await Ot();
      const v = (f = o.value) == null ? void 0 : f.closest(".panel-layout-content");
      v && (v.scrollTop = v.scrollHeight);
    }
    lt(r), gt(() => t.logs, r);
    async function c() {
      if (l.value.length === 0) return;
      const v = l.value.map((f) => f.text).join(`
`);
      try {
        await El(v), a.value = "copied", setTimeout(() => {
          a.value = "idle";
        }, 2e3);
      } catch (f) {
        console.error("Failed to copy logs:", f);
      }
    }
    function u(v) {
      (v.ctrlKey || v.metaKey) && v.key === "c" && v.stopPropagation();
    }
    function d(v) {
      v.stopPropagation();
    }
    return (v, f) => (n(), i("div", QI, [
      s("div", {
        ref_key: "logOutputElement",
        ref: o,
        class: "log-output",
        onKeydown: u,
        onCopy: d,
        tabindex: "0"
      }, [
        s("button", {
          class: "copy-overlay-btn",
          onClick: c,
          disabled: a.value !== "idle",
          title: a.value === "copied" ? "Copied!" : "Copy all logs"
        }, m(a.value === "copied" ? "Copied!" : "Copy"), 9, YI),
        (n(!0), i(W, null, ye(l.value, (p, w) => (n(), i("div", {
          key: w,
          class: Be(`log-line log-level-${p.level.toLowerCase()}`)
        }, m(p.text), 3))), 128))
      ], 544)
    ]));
  }
}), kc = /* @__PURE__ */ Ie(XI, [["__scopeId", "data-v-5aaf1b88"]]), ZI = /* @__PURE__ */ xe({
  __name: "DebugEnvSection",
  props: {
    embedded: { type: Boolean }
  },
  setup(e) {
    const { getEnvironmentLogs: t, getStatus: o, getEnvironmentLogPath: a, openFile: l } = ct(), r = k([]), c = k(!1), u = k(null), d = k(!1), v = k("production"), f = k(null), p = k(!1);
    async function w() {
      c.value = !0, u.value = null;
      try {
        r.value = await t(void 0, 500);
        try {
          const b = await o();
          v.value = b.environment || "production";
        } catch {
        }
      } catch (b) {
        u.value = b instanceof Error ? b.message : "Failed to load environment logs";
      } finally {
        c.value = !1;
      }
    }
    async function g() {
      try {
        const b = await a();
        b.exists && (f.value = b.path);
      } catch {
      }
    }
    async function _() {
      if (f.value) {
        p.value = !0;
        try {
          await l(f.value);
        } catch (b) {
          console.error("Failed to open log file:", b);
        } finally {
          p.value = !1;
        }
      }
    }
    return lt(() => {
      w(), g();
    }), (b, S) => (n(), i(W, null, [
      $(zt, null, Zt({
        content: h(() => [
          c.value ? (n(), L(Es, {
            key: 0,
            message: "Loading environment logs..."
          })) : u.value ? (n(), L(Ts, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: w
          }, null, 8, ["message"])) : (n(), i(W, { key: 2 }, [
            r.value.length === 0 ? (n(), L(hs, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (n(), L(kc, {
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
            $(Ft, {
              title: "DEBUG (ENVIRONMENT LOGS)",
              "show-info": !0,
              onInfoClick: S[0] || (S[0] = (C) => d.value = !0)
            }, {
              actions: h(() => [
                $(Re, {
                  variant: "secondary",
                  size: "sm",
                  onClick: _,
                  disabled: !f.value || p.value,
                  title: "Open log file in default editor"
                }, {
                  default: h(() => [
                    x(m(p.value ? "Opening..." : "Open Log File"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                $(Re, {
                  variant: "secondary",
                  size: "sm",
                  onClick: w,
                  disabled: c.value
                }, {
                  default: h(() => [
                    x(m(c.value ? "Loading..." : "Refresh"), 1)
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
      $(ds, {
        show: d.value,
        title: "About Environment Logs",
        onClose: S[2] || (S[2] = (C) => d.value = !1)
      }, {
        content: h(() => [
          s("p", null, [
            S[3] || (S[3] = x(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            s("strong", null, m(v.value), 1),
            S[4] || (S[4] = x(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          S[5] || (S[5] = s("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            s("strong", null, "Log Levels:"),
            s("br"),
            s("strong", null, "ERROR:"),
            x(" Critical failures requiring attention"),
            s("br"),
            s("strong", null, "WARNING:"),
            x(" Potential issues or important notices"),
            s("br"),
            s("strong", null, "INFO:"),
            x(" General operational information"),
            s("br"),
            s("strong", null, "DEBUG:"),
            x(" Detailed debugging information ")
          ], -1))
        ]),
        actions: h(() => [
          $(Re, {
            variant: "primary",
            onClick: S[1] || (S[1] = (C) => d.value = !1)
          }, {
            default: h(() => [...S[6] || (S[6] = [
              x(" Got it ", -1)
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
      getWorkspaceLogs: t,
      getWorkspaceLogPath: o,
      getOrchestratorLogs: a,
      getOrchestratorLogPath: l,
      openFile: r
    } = ct(), c = e, u = k(c.initialTab ?? "workspace"), d = k([]), v = k(!1), f = k(null), p = k(!1), w = k(null), g = k(null), _ = k(!1), b = R(() => u.value === "workspace" ? w.value : g.value);
    async function S() {
      v.value = !0, f.value = null;
      try {
        u.value === "workspace" ? d.value = await t(void 0, 500) : d.value = await a(void 0, 500);
      } catch (E) {
        f.value = E instanceof Error ? E.message : `Failed to load ${u.value} logs`;
      } finally {
        v.value = !1;
      }
    }
    async function C() {
      try {
        const [E, M] = await Promise.all([
          o(),
          l()
        ]);
        E.exists && (w.value = E.path), M.exists && (g.value = M.path);
      } catch {
      }
    }
    async function I() {
      if (b.value) {
        _.value = !0;
        try {
          await r(b.value);
        } catch (E) {
          console.error("Failed to open log file:", E);
        } finally {
          _.value = !1;
        }
      }
    }
    return gt(u, () => {
      S();
    }), gt(() => c.initialTab, (E) => {
      E && (u.value = E);
    }), lt(() => {
      S(), C();
    }), (E, M) => (n(), i(W, null, [
      $(zt, null, Zt({
        content: h(() => [
          v.value ? (n(), L(Es, {
            key: 0,
            message: `Loading ${u.value} logs...`
          }, null, 8, ["message"])) : f.value ? (n(), L(Ts, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: S
          }, null, 8, ["message"])) : (n(), i(W, { key: 2 }, [
            d.value.length === 0 ? (n(), L(hs, {
              key: 0,
              icon: "📝",
              message: `No ${u.value} logs available`
            }, null, 8, ["message"])) : (n(), L(kc, {
              key: 1,
              logs: d.value,
              "raw-format": u.value === "orchestrator"
            }, null, 8, ["logs", "raw-format"]))
          ], 64))
        ]),
        _: 2
      }, [
        e.embedded ? void 0 : {
          name: "header",
          fn: h(() => [
            $(Ft, {
              title: "DEBUG (LOGS)",
              "show-info": !0,
              onInfoClick: M[0] || (M[0] = (N) => p.value = !0)
            }, {
              actions: h(() => [
                $(Re, {
                  variant: "secondary",
                  size: "sm",
                  onClick: I,
                  disabled: !b.value || _.value,
                  title: "Open log file in default editor"
                }, {
                  default: h(() => [
                    x(m(_.value ? "Opening..." : "Open Log File"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                $(Re, {
                  variant: "secondary",
                  size: "sm",
                  onClick: S,
                  disabled: v.value
                }, {
                  default: h(() => [
                    x(m(v.value ? "Loading..." : "Refresh"), 1)
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
            $(Pl, {
              modelValue: u.value,
              "onUpdate:modelValue": M[1] || (M[1] = (N) => u.value = N),
              tabs: [
                { id: "workspace", label: "Workspace" },
                { id: "orchestrator", label: "Orchestrator" }
              ]
            }, null, 8, ["modelValue"])
          ]),
          key: "1"
        }
      ]), 1024),
      $(ds, {
        show: p.value,
        title: "About Logs",
        onClose: M[3] || (M[3] = (N) => p.value = !1)
      }, {
        content: h(() => [...M[4] || (M[4] = [
          s("p", null, [
            s("strong", null, "Workspace Logs:"),
            x(" System-level events for the entire ComfyGit workspace, including operations that affect multiple environments. ")
          ], -1),
          s("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            s("strong", null, "Orchestrator Logs:"),
            x(" Process management events including ComfyUI startup, restarts, environment switches, and any errors during handoff. ")
          ], -1),
          s("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            s("strong", null, "Log Levels:"),
            s("br"),
            s("strong", null, "ERROR:"),
            x(" Critical failures requiring attention"),
            s("br"),
            s("strong", null, "WARNING:"),
            x(" Potential issues or deprecated features"),
            s("br"),
            s("strong", null, "INFO:"),
            x(" General operational information"),
            s("br"),
            s("strong", null, "DEBUG:"),
            x(" Detailed debugging information ")
          ], -1)
        ])]),
        actions: h(() => [
          $(Re, {
            variant: "primary",
            onClick: M[2] || (M[2] = (N) => p.value = !1)
          }, {
            default: h(() => [...M[5] || (M[5] = [
              x(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), e6 = /* @__PURE__ */ xe({
  __name: "DiagnosticsSection",
  props: {
    initialTab: {}
  },
  setup(e) {
    const t = e, o = [
      { id: "env", label: "Environment" },
      { id: "workspace", label: "Workspace" },
      { id: "orchestrator", label: "Orchestrator" }
    ], a = k(t.initialTab ?? "manifest"), l = k(
      t.initialTab && t.initialTab !== "manifest" ? t.initialTab : "env"
    ), r = k(!1), c = R(() => a.value === "manifest" ? "MANIFEST" : "LOGGING"), u = R(() => a.value === "manifest" ? "About Manifest" : "About Logging");
    return gt(() => t.initialTab, (d) => {
      d && (a.value = d, d !== "manifest" && (l.value = d));
    }), gt(l, (d) => {
      a.value !== "manifest" && (a.value = d);
    }), (d, v) => (n(), i(W, null, [
      $(zt, null, Zt({
        header: h(() => [
          $(Ft, {
            title: c.value,
            "show-info": !0,
            onInfoClick: v[0] || (v[0] = (f) => r.value = !0)
          }, null, 8, ["title"])
        ]),
        content: h(() => [
          a.value === "manifest" ? (n(), L(JI, {
            key: 0,
            embedded: ""
          })) : l.value === "env" ? (n(), L(ZI, {
            key: 1,
            embedded: ""
          })) : l.value === "workspace" ? (n(), L(Si, {
            key: 2,
            embedded: "",
            "initial-tab": "workspace"
          })) : (n(), L(Si, {
            key: 3,
            embedded: "",
            "initial-tab": "orchestrator"
          }))
        ]),
        _: 2
      }, [
        a.value !== "manifest" ? {
          name: "search",
          fn: h(() => [
            $(Pl, {
              modelValue: l.value,
              "onUpdate:modelValue": v[1] || (v[1] = (f) => l.value = f),
              tabs: o
            }, null, 8, ["modelValue"])
          ]),
          key: "0"
        } : void 0
      ]), 1024),
      $(ds, {
        show: r.value,
        title: u.value,
        "max-width": "520px",
        onClose: v[3] || (v[3] = (f) => r.value = !1)
      }, {
        content: h(() => [
          a.value === "manifest" ? (n(), i(W, { key: 0 }, [
            v[4] || (v[4] = s("p", null, [
              s("strong", null, "Manifest"),
              x(" shows the live "),
              s("strong", null, "pyproject.toml"),
              x(" from the current environment's "),
              s("strong", null, ".cec"),
              x(" directory. ")
            ], -1)),
            v[5] || (v[5] = s("p", null, " Use it to inspect the environment state ComfyGit is tracking, including workflows, models, nodes, and workflow execution contracts. ", -1)),
            v[6] || (v[6] = s("p", null, " The manifest is read-only here. Change environment state through the manager actions or CLI, then commit the resulting manifest changes. ", -1))
          ], 64)) : (n(), i(W, { key: 1 }, [
            v[7] || (v[7] = s("p", null, [
              s("strong", null, "Logging"),
              x(" groups read-only logs for the current environment, workspace, and orchestrator. ")
            ], -1)),
            v[8] || (v[8] = s("p", null, [
              s("strong", null, "Environment"),
              x(" logs help debug workflow execution, model resolution, node installation, and other environment-local behavior. ")
            ], -1)),
            v[9] || (v[9] = s("p", null, [
              s("strong", null, "Workspace"),
              x(" logs show workspace-wide events that affect more than one environment. ")
            ], -1)),
            v[10] || (v[10] = s("p", null, [
              s("strong", null, "Orchestrator"),
              x(" logs show supervisor and handoff behavior for environment creation, switching, restarts, and process management. ")
            ], -1))
          ], 64))
        ]),
        actions: h(() => [
          $(Re, {
            variant: "primary",
            size: "sm",
            onClick: v[2] || (v[2] = (f) => r.value = !1)
          }, {
            default: h(() => [...v[11] || (v[11] = [
              x(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show", "title"])
    ], 64));
  }
}), t6 = { class: "header-info" }, s6 = { class: "commit-hash" }, o6 = {
  key: 0,
  class: "commit-refs"
}, n6 = { class: "commit-message" }, a6 = { class: "commit-date" }, l6 = {
  key: 0,
  class: "loading"
}, i6 = {
  key: 1,
  class: "changes-section"
}, r6 = { class: "stats-row" }, c6 = { class: "stat" }, u6 = { class: "stat insertions" }, d6 = { class: "stat deletions" }, m6 = {
  key: 0,
  class: "change-group"
}, f6 = {
  key: 1,
  class: "change-group"
}, v6 = {
  key: 0,
  class: "version"
}, p6 = {
  key: 2,
  class: "change-group"
}, g6 = { class: "change-item" }, h6 = /* @__PURE__ */ xe({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(e) {
    const t = e, { getCommitDetail: o } = ct(), a = k(null), l = k(!0), r = R(() => {
      if (!a.value) return !1;
      const u = a.value.changes.workflows;
      return u.added.length > 0 || u.modified.length > 0 || u.deleted.length > 0;
    }), c = R(() => {
      if (!a.value) return !1;
      const u = a.value.changes.nodes;
      return u.added.length > 0 || u.removed.length > 0;
    });
    return lt(async () => {
      try {
        a.value = await o(t.commit.hash);
      } finally {
        l.value = !1;
      }
    }), (u, d) => (n(), L($t, {
      size: "md",
      "show-close-button": !1,
      onClose: d[3] || (d[3] = (v) => u.$emit("close"))
    }, {
      header: h(() => {
        var v, f, p, w;
        return [
          s("div", t6, [
            d[4] || (d[4] = s("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            s("span", s6, m(((v = a.value) == null ? void 0 : v.short_hash) || e.commit.short_hash || ((f = e.commit.hash) == null ? void 0 : f.slice(0, 7))), 1),
            (w = (p = a.value) == null ? void 0 : p.refs) != null && w.length ? (n(), i("span", o6, [
              (n(!0), i(W, null, ye(a.value.refs, (g) => (n(), i("span", {
                key: g,
                class: "ref-badge"
              }, m(g), 1))), 128))
            ])) : y("", !0)
          ]),
          $(Ue, {
            variant: "ghost",
            size: "sm",
            onClick: d[0] || (d[0] = (g) => u.$emit("close"))
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
          s("div", n6, m(((v = a.value) == null ? void 0 : v.message) || e.commit.message), 1),
          s("div", a6, m(((f = a.value) == null ? void 0 : f.date_relative) || e.commit.date_relative || e.commit.relative_date), 1),
          l.value ? (n(), i("div", l6, "Loading details...")) : a.value ? (n(), i("div", i6, [
            s("div", r6, [
              s("span", c6, m(a.value.stats.files_changed) + " files", 1),
              s("span", u6, "+" + m(a.value.stats.insertions), 1),
              s("span", d6, "-" + m(a.value.stats.deletions), 1)
            ]),
            r.value ? (n(), i("div", m6, [
              $(mo, { variant: "section" }, {
                default: h(() => [...d[6] || (d[6] = [
                  x("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (n(!0), i(W, null, ye(a.value.changes.workflows.added, (p) => (n(), i("div", {
                key: "add-" + p,
                class: "change-item added"
              }, [
                d[7] || (d[7] = s("span", { class: "change-icon" }, "+", -1)),
                s("span", null, m(p), 1)
              ]))), 128)),
              (n(!0), i(W, null, ye(a.value.changes.workflows.modified, (p) => (n(), i("div", {
                key: "mod-" + p,
                class: "change-item modified"
              }, [
                d[8] || (d[8] = s("span", { class: "change-icon" }, "~", -1)),
                s("span", null, m(p), 1)
              ]))), 128)),
              (n(!0), i(W, null, ye(a.value.changes.workflows.deleted, (p) => (n(), i("div", {
                key: "del-" + p,
                class: "change-item deleted"
              }, [
                d[9] || (d[9] = s("span", { class: "change-icon" }, "-", -1)),
                s("span", null, m(p), 1)
              ]))), 128))
            ])) : y("", !0),
            c.value ? (n(), i("div", f6, [
              $(mo, { variant: "section" }, {
                default: h(() => [...d[10] || (d[10] = [
                  x("NODES", -1)
                ])]),
                _: 1
              }),
              (n(!0), i(W, null, ye(a.value.changes.nodes.added, (p) => (n(), i("div", {
                key: "add-" + p.name,
                class: "change-item added"
              }, [
                d[11] || (d[11] = s("span", { class: "change-icon" }, "+", -1)),
                s("span", null, m(p.name), 1),
                p.version ? (n(), i("span", v6, "(" + m(p.version) + ")", 1)) : y("", !0)
              ]))), 128)),
              (n(!0), i(W, null, ye(a.value.changes.nodes.removed, (p) => (n(), i("div", {
                key: "rem-" + p.name,
                class: "change-item deleted"
              }, [
                d[12] || (d[12] = s("span", { class: "change-icon" }, "-", -1)),
                s("span", null, m(p.name), 1)
              ]))), 128))
            ])) : y("", !0),
            a.value.changes.models.resolved > 0 ? (n(), i("div", p6, [
              $(mo, { variant: "section" }, {
                default: h(() => [...d[13] || (d[13] = [
                  x("MODELS", -1)
                ])]),
                _: 1
              }),
              s("div", g6, [
                d[14] || (d[14] = s("span", { class: "change-icon" }, "●", -1)),
                s("span", null, m(a.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : y("", !0)
          ])) : y("", !0)
        ];
      }),
      footer: h(() => [
        $(Ue, {
          variant: "secondary",
          onClick: d[1] || (d[1] = (v) => u.$emit("createBranch", e.commit))
        }, {
          default: h(() => [...d[15] || (d[15] = [
            x(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        $(Ue, {
          variant: "primary",
          onClick: d[2] || (d[2] = (v) => u.$emit("checkout", e.commit))
        }, {
          default: h(() => [...d[16] || (d[16] = [
            x(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), y6 = /* @__PURE__ */ Ie(h6, [["__scopeId", "data-v-d256ff6d"]]), w6 = { class: "popover-header" }, _6 = { class: "popover-body" }, k6 = {
  key: 0,
  class: "changes-summary"
}, b6 = {
  key: 0,
  class: "change-item"
}, $6 = {
  key: 1,
  class: "change-item"
}, C6 = {
  key: 2,
  class: "change-item"
}, x6 = {
  key: 3,
  class: "change-item"
}, S6 = {
  key: 4,
  class: "change-item"
}, I6 = {
  key: 5,
  class: "change-item"
}, E6 = {
  key: 1,
  class: "no-changes"
}, T6 = {
  key: 2,
  class: "loading"
}, M6 = {
  key: 3,
  class: "issues-error"
}, P6 = { class: "error-header" }, R6 = { class: "error-title" }, L6 = { class: "issues-list" }, D6 = { class: "workflow-state" }, N6 = { class: "message-section" }, U6 = { class: "popover-footer" }, O6 = {
  key: 1,
  class: "commit-popover"
}, A6 = { class: "popover-header" }, z6 = { class: "popover-body" }, F6 = {
  key: 0,
  class: "changes-summary"
}, V6 = {
  key: 0,
  class: "change-item"
}, B6 = {
  key: 1,
  class: "change-item"
}, W6 = {
  key: 2,
  class: "change-item"
}, G6 = {
  key: 3,
  class: "change-item"
}, j6 = {
  key: 4,
  class: "change-item"
}, H6 = {
  key: 5,
  class: "change-item"
}, q6 = {
  key: 1,
  class: "no-changes"
}, K6 = {
  key: 2,
  class: "loading"
}, J6 = {
  key: 3,
  class: "issues-error"
}, Q6 = { class: "error-header" }, Y6 = { class: "error-title" }, X6 = { class: "issues-list" }, Z6 = { class: "workflow-state" }, eE = { class: "message-section" }, tE = { class: "popover-footer" }, sE = /* @__PURE__ */ xe({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(e, { emit: t }) {
    const o = e, a = t, { commit: l } = ct(), r = k(""), c = k(!1), u = k(!1), d = R(() => {
      if (!o.status) return !1;
      const _ = o.status.workflows;
      return _.new.length > 0 || _.modified.length > 0 || _.deleted.length > 0 || o.status.has_changes;
    }), v = R(() => {
      if (!o.status) return !1;
      const _ = o.status.workflows, b = o.status.git_changes;
      return _.new.length > 0 || _.modified.length > 0 || _.deleted.length > 0 || b.nodes_added.length > 0 || b.nodes_removed.length > 0;
    }), f = R(() => {
      var _;
      return (_ = o.status) != null && _.workflows.analyzed ? o.status.workflows.analyzed.filter((b) => b.has_issues) : [];
    }), p = R(() => f.value.length > 0), w = R(() => p.value && !u.value);
    async function g() {
      var _, b, S, C;
      if (!(p.value && !u.value) && !(!d.value || !r.value.trim() || c.value)) {
        c.value = !0;
        try {
          const I = await l(r.value.trim(), u.value);
          if (I.status === "success") {
            const E = `Committed: ${((_ = I.summary) == null ? void 0 : _.new) || 0} new, ${((b = I.summary) == null ? void 0 : b.modified) || 0} modified, ${((S = I.summary) == null ? void 0 : S.deleted) || 0} deleted`;
            a("committed", { success: !0, message: E });
          } else if (I.status === "no_changes")
            a("committed", { success: !1, message: "No changes to commit" });
          else if (I.status === "blocked") {
            const E = ((C = I.issues) == null ? void 0 : C.map((M) => `${M.name}: ${M.issue}`).join("; ")) || "Unknown issues";
            a("committed", { success: !1, message: `Commit blocked - ${E}. Enable "Allow issues" to force.` });
          } else
            a("committed", { success: !1, message: I.message || "Commit failed" });
        } catch (I) {
          a("committed", { success: !1, message: I instanceof Error ? I.message : "Commit failed" });
        } finally {
          c.value = !1;
        }
      }
    }
    return (_, b) => e.asModal ? (n(), L(Yt, {
      key: 0,
      to: "body"
    }, [
      s("div", {
        class: "modal-overlay",
        onClick: b[5] || (b[5] = (S) => a("close"))
      }, [
        s("div", {
          class: "commit-popover modal",
          onClick: b[4] || (b[4] = vt(() => {
          }, ["stop"]))
        }, [
          s("div", w6, [
            b[11] || (b[11] = s("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            s("button", {
              class: "close-btn",
              onClick: b[0] || (b[0] = (S) => a("close"))
            }, [...b[10] || (b[10] = [
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
          s("div", _6, [
            e.status && d.value ? (n(), i("div", k6, [
              e.status.workflows.new.length ? (n(), i("div", b6, [
                b[12] || (b[12] = s("span", { class: "change-icon new" }, "+", -1)),
                s("span", null, m(e.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : y("", !0),
              e.status.workflows.modified.length ? (n(), i("div", $6, [
                b[13] || (b[13] = s("span", { class: "change-icon modified" }, "~", -1)),
                s("span", null, m(e.status.workflows.modified.length) + " modified", 1)
              ])) : y("", !0),
              e.status.workflows.deleted.length ? (n(), i("div", C6, [
                b[14] || (b[14] = s("span", { class: "change-icon deleted" }, "-", -1)),
                s("span", null, m(e.status.workflows.deleted.length) + " deleted", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_added.length ? (n(), i("div", x6, [
                b[15] || (b[15] = s("span", { class: "change-icon new" }, "+", -1)),
                s("span", null, m(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_removed.length ? (n(), i("div", S6, [
                b[16] || (b[16] = s("span", { class: "change-icon deleted" }, "-", -1)),
                s("span", null, m(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : y("", !0),
              v.value ? y("", !0) : (n(), i("div", I6, [...b[17] || (b[17] = [
                s("span", { class: "change-icon modified" }, "~", -1),
                s("span", null, "Configuration updated", -1)
              ])]))
            ])) : e.status ? (n(), i("div", E6, " No changes to commit ")) : (n(), i("div", T6, " Loading... ")),
            p.value ? (n(), i("div", M6, [
              s("div", P6, [
                b[18] || (b[18] = s("span", { class: "error-icon" }, "⚠", -1)),
                s("span", R6, m(f.value.length) + " workflow(s) have issues", 1)
              ]),
              s("div", L6, [
                (n(!0), i(W, null, ye(f.value, (S) => (n(), i("div", {
                  key: S.name,
                  class: "issue-item"
                }, [
                  s("strong", null, m(S.name), 1),
                  s("span", D6, "(" + m(S.sync_state) + ")", 1),
                  x(": " + m(S.issue_summary), 1)
                ]))), 128))
              ]),
              $(sa, {
                modelValue: u.value,
                "onUpdate:modelValue": b[1] || (b[1] = (S) => u.value = S),
                class: "allow-issues-toggle"
              }, {
                default: h(() => [...b[19] || (b[19] = [
                  x(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : y("", !0),
            s("div", N6, [
              $(Mo, {
                modelValue: r.value,
                "onUpdate:modelValue": b[2] || (b[2] = (S) => r.value = S),
                placeholder: w.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
                disabled: !d.value || c.value || w.value,
                rows: 3,
                "submit-on-enter": !0,
                onCtrlEnter: g,
                onSubmit: g
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ])
          ]),
          s("div", U6, [
            $(Ue, {
              variant: "secondary",
              onClick: b[3] || (b[3] = (S) => a("close"))
            }, {
              default: h(() => [...b[20] || (b[20] = [
                x(" Cancel ", -1)
              ])]),
              _: 1
            }),
            $(Ue, {
              variant: u.value ? "danger" : "primary",
              disabled: !d.value || !r.value.trim() || c.value || w.value,
              loading: c.value,
              onClick: g
            }, {
              default: h(() => [
                x(m(c.value ? "Committing..." : u.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (n(), i("div", O6, [
      s("div", A6, [
        b[22] || (b[22] = s("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        s("button", {
          class: "close-btn",
          onClick: b[6] || (b[6] = (S) => a("close"))
        }, [...b[21] || (b[21] = [
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
      s("div", z6, [
        e.status && d.value ? (n(), i("div", F6, [
          e.status.workflows.new.length ? (n(), i("div", V6, [
            b[23] || (b[23] = s("span", { class: "change-icon new" }, "+", -1)),
            s("span", null, m(e.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : y("", !0),
          e.status.workflows.modified.length ? (n(), i("div", B6, [
            b[24] || (b[24] = s("span", { class: "change-icon modified" }, "~", -1)),
            s("span", null, m(e.status.workflows.modified.length) + " modified", 1)
          ])) : y("", !0),
          e.status.workflows.deleted.length ? (n(), i("div", W6, [
            b[25] || (b[25] = s("span", { class: "change-icon deleted" }, "-", -1)),
            s("span", null, m(e.status.workflows.deleted.length) + " deleted", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_added.length ? (n(), i("div", G6, [
            b[26] || (b[26] = s("span", { class: "change-icon new" }, "+", -1)),
            s("span", null, m(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_removed.length ? (n(), i("div", j6, [
            b[27] || (b[27] = s("span", { class: "change-icon deleted" }, "-", -1)),
            s("span", null, m(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : y("", !0),
          v.value ? y("", !0) : (n(), i("div", H6, [...b[28] || (b[28] = [
            s("span", { class: "change-icon modified" }, "~", -1),
            s("span", null, "Configuration updated", -1)
          ])]))
        ])) : e.status ? (n(), i("div", q6, " No changes to commit ")) : (n(), i("div", K6, " Loading... ")),
        p.value ? (n(), i("div", J6, [
          s("div", Q6, [
            b[29] || (b[29] = s("span", { class: "error-icon" }, "⚠", -1)),
            s("span", Y6, m(f.value.length) + " workflow(s) have issues", 1)
          ]),
          s("div", X6, [
            (n(!0), i(W, null, ye(f.value, (S) => (n(), i("div", {
              key: S.name,
              class: "issue-item"
            }, [
              s("strong", null, m(S.name), 1),
              s("span", Z6, "(" + m(S.sync_state) + ")", 1),
              x(": " + m(S.issue_summary), 1)
            ]))), 128))
          ]),
          $(sa, {
            modelValue: u.value,
            "onUpdate:modelValue": b[7] || (b[7] = (S) => u.value = S),
            class: "allow-issues-toggle"
          }, {
            default: h(() => [...b[30] || (b[30] = [
              x(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : y("", !0),
        s("div", eE, [
          $(Mo, {
            modelValue: r.value,
            "onUpdate:modelValue": b[8] || (b[8] = (S) => r.value = S),
            placeholder: w.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
            disabled: !d.value || c.value || w.value,
            rows: 3,
            "submit-on-enter": !0,
            onCtrlEnter: g,
            onSubmit: g
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ])
      ]),
      s("div", tE, [
        $(Ue, {
          variant: "secondary",
          onClick: b[9] || (b[9] = (S) => a("close"))
        }, {
          default: h(() => [...b[31] || (b[31] = [
            x(" Cancel ", -1)
          ])]),
          _: 1
        }),
        $(Ue, {
          variant: u.value ? "danger" : "primary",
          disabled: !d.value || !r.value.trim() || c.value || w.value,
          loading: c.value,
          onClick: g
        }, {
          default: h(() => [
            x(m(c.value ? "Committing..." : u.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), bc = /* @__PURE__ */ Ie(sE, [["__scopeId", "data-v-5f897631"]]), oE = { class: "switch-body" }, nE = { class: "switch-message" }, aE = { class: "switch-details" }, lE = /* @__PURE__ */ xe({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (t, o) => e.show ? (n(), L($t, {
      key: 0,
      title: "Confirm Environment Switch",
      size: "md",
      "overlay-z-index": 10005,
      onClose: o[2] || (o[2] = (a) => t.$emit("close"))
    }, {
      body: h(() => [
        s("div", oE, [
          s("p", nE, [
            o[3] || (o[3] = x(" Switch from ", -1)),
            s("strong", null, m(e.fromEnvironment), 1),
            o[4] || (o[4] = x(" to ", -1)),
            s("strong", null, m(e.toEnvironment), 1),
            o[5] || (o[5] = x("? ", -1))
          ]),
          o[6] || (o[6] = s("div", { class: "warning-box" }, [
            s("span", { class: "warning-icon" }, "⚠"),
            s("span", null, "This will restart ComfyUI")
          ], -1)),
          s("p", aE, ' Your current work will be preserved. You can switch back to "' + m(e.fromEnvironment) + '" anytime. ', 1),
          o[7] || (o[7] = s("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
        ])
      ]),
      footer: h(() => [
        $(Re, {
          variant: "secondary",
          onClick: o[0] || (o[0] = (a) => t.$emit("close"))
        }, {
          default: h(() => [...o[8] || (o[8] = [
            x(" Cancel ", -1)
          ])]),
          _: 1
        }),
        $(Re, {
          variant: "primary",
          onClick: o[1] || (o[1] = (a) => t.$emit("confirm"))
        }, {
          default: h(() => [...o[9] || (o[9] = [
            x(" Switch ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    })) : y("", !0);
  }
}), iE = /* @__PURE__ */ Ie(lE, [["__scopeId", "data-v-f6d223e6"]]), rE = {
  key: 0,
  class: "modal-overlay"
}, cE = { class: "modal-content" }, uE = { class: "modal-body" }, dE = { class: "progress-info" }, mE = { class: "progress-percentage" }, fE = { class: "progress-state" }, vE = { class: "switch-steps" }, pE = { class: "step-icon" }, gE = { class: "step-label" }, hE = /* @__PURE__ */ xe({
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
    }), a = R(() => t.state === "complete" ? "success" : t.state === "critical_failure" || t.state === "rolled_back" ? "error" : "default"), l = R(() => {
      const r = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], c = r.findIndex((u) => u.state === t.state);
      return r.map((u, d) => {
        let v = "pending", f = "○";
        return d < c ? (v = "completed", f = "✓") : d === c && (v = "active", f = "⟳"), {
          ...u,
          status: v,
          icon: f
        };
      });
    });
    return (r, c) => (n(), L(Yt, { to: "body" }, [
      e.show ? (n(), i("div", rE, [
        s("div", cE, [
          c[1] || (c[1] = s("div", { class: "modal-header" }, [
            s("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          s("div", uE, [
            $(pc, {
              progress: e.progress,
              variant: a.value
            }, null, 8, ["progress", "variant"]),
            s("div", dE, [
              s("div", mE, m(e.progress) + "%", 1),
              s("div", fE, m(o.value), 1)
            ]),
            s("div", vE, [
              (n(!0), i(W, null, ye(l.value, (u) => (n(), i("div", {
                key: u.state,
                class: Be(["switch-step", u.status])
              }, [
                s("span", pE, m(u.icon), 1),
                s("span", gE, m(u.label), 1)
              ], 2))), 128))
            ]),
            c[0] || (c[0] = s("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : y("", !0)
    ]));
  }
}), yE = /* @__PURE__ */ Ie(hE, [["__scopeId", "data-v-768a5078"]]), wE = { class: "modal-header" }, _E = { class: "modal-body" }, kE = {
  key: 0,
  class: "node-section"
}, bE = { class: "node-list" }, $E = {
  key: 1,
  class: "node-section"
}, CE = { class: "node-list" }, xE = { class: "modal-actions" }, SE = /* @__PURE__ */ xe({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (t, o) => (n(), L(Yt, { to: "body" }, [
      e.show ? (n(), i("div", {
        key: 0,
        class: "modal-overlay",
        onClick: o[4] || (o[4] = (a) => t.$emit("close"))
      }, [
        s("div", {
          class: "modal-content",
          onClick: o[3] || (o[3] = vt(() => {
          }, ["stop"]))
        }, [
          s("div", wE, [
            o[5] || (o[5] = s("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            s("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (a) => t.$emit("close"))
            }, "✕")
          ]),
          s("div", _E, [
            o[8] || (o[8] = s("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            e.mismatchDetails.missing_nodes.length ? (n(), i("div", kE, [
              o[6] || (o[6] = s("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              s("div", bE, [
                (n(!0), i(W, null, ye(e.mismatchDetails.missing_nodes, (a) => (n(), i("div", {
                  key: a,
                  class: "node-item add"
                }, " + " + m(a), 1))), 128))
              ])
            ])) : y("", !0),
            e.mismatchDetails.extra_nodes.length ? (n(), i("div", $E, [
              o[7] || (o[7] = s("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              s("div", CE, [
                (n(!0), i(W, null, ye(e.mismatchDetails.extra_nodes, (a) => (n(), i("div", {
                  key: a,
                  class: "node-item remove"
                }, " - " + m(a), 1))), 128))
              ])
            ])) : y("", !0),
            o[9] || (o[9] = s("div", { class: "warning-box" }, [
              s("span", { class: "warning-icon" }, "⚠"),
              s("span", null, "This may take several minutes")
            ], -1))
          ]),
          s("div", xE, [
            $(Re, {
              variant: "secondary",
              onClick: o[1] || (o[1] = (a) => t.$emit("close"))
            }, {
              default: h(() => [...o[10] || (o[10] = [
                x(" Cancel ", -1)
              ])]),
              _: 1
            }),
            $(Re, {
              variant: "primary",
              onClick: o[2] || (o[2] = (a) => t.$emit("confirm"))
            }, {
              default: h(() => [...o[11] || (o[11] = [
                x(" Sync Now ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : y("", !0)
    ]));
  }
}), IE = /* @__PURE__ */ Ie(SE, [["__scopeId", "data-v-7cad7518"]]), EE = [
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
], Nn = "v0.0.24", TE = "Akatz", ME = { class: "social-buttons" }, PE = ["title", "aria-label", "onClick"], RE = {
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, LE = ["d"], DE = ["title", "aria-label", "onClick"], NE = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, UE = ["d"], OE = /* @__PURE__ */ xe({
  __name: "SocialButtons",
  setup(e) {
    function t(o) {
      window.open(o, "_blank", "noopener,noreferrer");
    }
    return (o, a) => (n(), i("div", ME, [
      (n(!0), i(W, null, ye(ot(EE), (l) => (n(), i(W, {
        key: l.id
      }, [
        l.label ? (n(), i("button", {
          key: 0,
          class: "icon-btn sponsor-btn",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (r) => t(l.url)
        }, [
          x(m(l.label) + " ", 1),
          (n(), i("svg", RE, [
            s("path", {
              d: l.iconPath
            }, null, 8, LE)
          ]))
        ], 8, PE)) : (n(), i("button", {
          key: 1,
          class: "icon-btn social-link",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (r) => t(l.url)
        }, [
          (n(), i("svg", NE, [
            s("path", {
              d: l.iconPath
            }, null, 8, UE)
          ]))
        ], 8, DE))
      ], 64))), 128))
    ]));
  }
}), $c = /* @__PURE__ */ Ie(OE, [["__scopeId", "data-v-4f846342"]]), AE = { class: "footer-info" }, zE = ["title"], FE = {
  key: 0,
  class: "dev-badge"
}, VE = { class: "made-by" }, BE = /* @__PURE__ */ xe({
  __name: "FooterInfo",
  setup(e) {
    const { getConfig: t } = ct(), o = k(null), a = k(null), l = k(null), r = R(() => o.value === "development"), c = R(() => {
      var d;
      if (!r.value) return Nn;
      const u = [a.value, (d = l.value) == null ? void 0 : d.slice(0, 7)].filter(Boolean).join(" @ ");
      return u ? `${Nn} (${u})` : `${Nn} (development)`;
    });
    return lt(async () => {
      try {
        const u = await t();
        o.value = u.manager_source ?? null, a.value = u.manager_branch ?? null, l.value = u.manager_commit ?? null;
      } catch {
        o.value = null;
      }
    }), (u, d) => (n(), i("div", AE, [
      s("span", {
        class: "version",
        title: c.value
      }, [
        x(m(ot(Nn)) + " ", 1),
        r.value ? (n(), i("span", FE, "dev")) : y("", !0)
      ], 8, zE),
      s("span", VE, [
        d[0] || (d[0] = x(" made with ", -1)),
        d[1] || (d[1] = s("svg", {
          class: "heart-icon",
          width: "10",
          height: "10",
          viewBox: "0 0 16 16",
          fill: "currentColor"
        }, [
          s("path", { d: "M8 14s-5.5-3.5-5.5-7A3.5 3.5 0 0 1 6 3.5c1.1 0 2 .5 2 .5s.9-.5 2-.5a3.5 3.5 0 0 1 3.5 3.5c0 3.5-5.5 7-5.5 7z" })
        ], -1)),
        x(" by " + m(ot(TE)), 1)
      ])
    ]));
  }
}), Cc = /* @__PURE__ */ Ie(BE, [["__scopeId", "data-v-4fa265b3"]]), WE = /* @__PURE__ */ xe({
  __name: "WorkspaceSettingsModal",
  props: {
    workspacePath: {}
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const o = k(null);
    async function a() {
      var r;
      await ((r = o.value) == null ? void 0 : r.saveSettings());
    }
    function l() {
      console.log("[ComfyGit] Settings saved from modal");
    }
    return (r, c) => (n(), L($t, {
      title: "WORKSPACE SETTINGS",
      size: "lg",
      "show-close-button": !0,
      onClose: c[1] || (c[1] = (u) => r.$emit("close"))
    }, {
      body: h(() => [
        $(dc, {
          ref_key: "contentRef",
          ref: o,
          "workspace-path": e.workspacePath,
          onSaved: l
        }, null, 8, ["workspace-path"])
      ]),
      footer: h(() => {
        var u;
        return [
          $(Ue, {
            variant: "primary",
            disabled: !((u = o.value) != null && u.hasChanges),
            onClick: a
          }, {
            default: h(() => [...c[2] || (c[2] = [
              x(" Save Changes ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          $(Ue, {
            variant: "secondary",
            onClick: c[0] || (c[0] = (d) => r.$emit("close"))
          }, {
            default: h(() => [...c[3] || (c[3] = [
              x(" Close ", -1)
            ])]),
            _: 1
          })
        ];
      }),
      _: 1
    }));
  }
}), GE = /* @__PURE__ */ Ie(WE, [["__scopeId", "data-v-fac00ae7"]]), jE = { class: "header-actions" }, HE = {
  key: 0,
  class: "wizard-step"
}, qE = { class: "form-field" }, KE = ["placeholder"], JE = {
  key: 0,
  class: "form-error"
}, QE = { class: "form-field form-field--checkbox" }, YE = { class: "form-checkbox" }, XE = {
  key: 0,
  class: "form-field"
}, ZE = ["placeholder"], eT = {
  key: 0,
  class: "form-info"
}, tT = {
  key: 1,
  class: "form-suggestion"
}, sT = {
  key: 2,
  class: "form-error"
}, oT = {
  key: 3,
  class: "form-info"
}, nT = {
  key: 1,
  class: "wizard-step"
}, aT = {
  key: 0,
  class: "progress-check-loading"
}, lT = {
  key: 0,
  class: "cli-warning"
}, iT = { class: "cli-warning-header" }, rT = {
  key: 1,
  class: "env-landing"
}, cT = { class: "env-list" }, uT = ["value"], dT = { class: "env-name" }, mT = {
  key: 2,
  class: "env-create"
}, fT = { class: "form-field" }, vT = { class: "form-field" }, pT = ["value"], gT = { class: "form-field" }, hT = ["disabled"], yT = ["value"], wT = { class: "form-field" }, _T = ["value"], kT = { class: "form-field form-field--checkbox" }, bT = { class: "form-checkbox" }, $T = {
  key: 0,
  class: "form-error"
}, CT = {
  key: 1,
  class: "env-creating"
}, xT = { class: "creating-intro" }, ST = {
  key: 3,
  class: "env-import"
}, IT = { class: "wizard-footer" }, ET = { class: "wizard-footer-actions" }, wo = 10, TT = 600 * 1e3, Ii = 1800 * 1e3, MT = /* @__PURE__ */ xe({
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
    const o = e, a = t, {
      initializeWorkspace: l,
      getInitializeProgress: r,
      validatePath: c,
      createEnvironment: u,
      getCreateProgress: d,
      getImportProgress: v,
      getComfyUIReleases: f
    } = ct(), p = k(o.initialStep || 1), w = k(null), g = k("landing"), _ = k(!1), b = k(!1), S = k(!1), C = k(!1), I = k(null), E = k(o.initialStep === 2), M = k(o.defaultPath), N = k(!!o.detectedModelsDir), F = k(o.detectedModelsDir || ""), V = k(null), D = k(null), q = k(null), ue = k(null), le = k("my-new-env"), Y = k(fc), me = k("latest"), ne = k(vc), B = k(!0), H = k(null), we = k(null), oe = k([{ tag_name: "latest", name: "Latest", published_at: "" }]), de = k(!1), ce = k(!1), K = k(!1), ee = k({ progress: 0, message: "" }), te = k({ progress: 0, message: "" }), Me = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], Se = k(0), ze = k(null), Ne = k(0), be = k(null), Ae = R(() => {
      var De, He;
      const _e = (De = M.value) == null ? void 0 : De.trim(), Z = !V.value, Fe = !N.value || !D.value && ((He = F.value) == null ? void 0 : He.trim());
      return _e && Z && Fe;
    }), ge = R(() => {
      var _e;
      return (_e = le.value) == null ? void 0 : _e.trim();
    }), ve = R(() => !!(p.value === 2 || we.value || o.setupState === "empty_workspace" || o.setupState === "unmanaged")), T = R(() => we.value || o.workspacePath || null);
    async function A() {
      var _e;
      if (V.value = null, !!((_e = M.value) != null && _e.trim()))
        try {
          const Z = await c({ path: M.value, type: "workspace" });
          Z.valid || (V.value = Z.error || "Invalid path");
        } catch (Z) {
          V.value = Z instanceof Error ? Z.message : "Validation failed";
        }
    }
    async function ae() {
      var _e;
      if (D.value = null, q.value = null, ue.value = null, !!((_e = F.value) != null && _e.trim()))
        try {
          const Z = await c({ path: F.value, type: "models" });
          if (Z.valid)
            ue.value = Z.model_count ?? null;
          else if (D.value = Z.error || "Invalid path", Z.suggestion) {
            q.value = Z.suggestion, F.value = Z.suggestion, D.value = null;
            const Fe = await c({ path: Z.suggestion, type: "models" });
            Fe.valid && (ue.value = Fe.model_count ?? null);
          }
        } catch (Z) {
          D.value = Z instanceof Error ? Z.message : "Validation failed";
        }
    }
    async function Ce() {
      var _e, Z, Fe, De, He;
      if (V.value = null, D.value = null, await A(), (_e = V.value) != null && _e.includes("already exists")) {
        V.value = null, we.value = ((Z = M.value) == null ? void 0 : Z.trim()) || o.defaultPath, p.value = 2, ke();
        return;
      }
      if (!V.value && !(N.value && ((Fe = F.value) != null && Fe.trim()) && (await ae(), D.value))) {
        ce.value = !0;
        try {
          await l({
            workspace_path: ((De = M.value) == null ? void 0 : De.trim()) || o.defaultPath,
            models_directory: N.value && ((He = F.value) == null ? void 0 : He.trim()) || null
          }), Se.value = 0, ze.value = Date.now();
          const Ve = setInterval(async () => {
            var Oe;
            if (ze.value && Date.now() - ze.value > TT) {
              clearInterval(Ve), ce.value = !1, V.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const Qe = await r();
              if (Se.value = 0, Qe.state === "idle" && ce.value) {
                clearInterval(Ve), ce.value = !1, V.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              ee.value = { progress: Qe.progress, message: Qe.message }, Qe.state === "complete" ? (clearInterval(Ve), ce.value = !1, we.value = ((Oe = M.value) == null ? void 0 : Oe.trim()) || o.defaultPath, p.value = 2, ke()) : Qe.state === "error" && (clearInterval(Ve), ce.value = !1, V.value = Qe.error || "Workspace creation failed");
            } catch (Qe) {
              Se.value++, console.warn(`Polling failure ${Se.value}/${wo}:`, Qe), Se.value >= wo && (clearInterval(Ve), ce.value = !1, V.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (Ve) {
          ce.value = !1, V.value = Ve instanceof Error ? Ve.message : "Failed to create workspace";
        }
      }
    }
    async function Ee() {
      K.value = !0, H.value = null;
      try {
        const _e = {
          name: le.value.trim() || "my-new-env",
          python_version: Y.value,
          comfyui_version: me.value,
          torch_backend: ne.value,
          switch_after: B.value,
          workspace_path: we.value || void 0
          // Pass workspace path for first-time setup
        };
        if ((await u(_e)).status === "started") {
          Ne.value = 0, be.value = Date.now();
          const Fe = setInterval(async () => {
            if (be.value && Date.now() - be.value > Ii) {
              clearInterval(Fe), K.value = !1, H.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const De = await d();
              if (Ne.value = 0, De.state === "idle" && K.value) {
                clearInterval(Fe), K.value = !1, H.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              if (te.value = {
                progress: De.progress ?? 0,
                message: De.message,
                phase: De.phase
              }, De.state === "complete") {
                clearInterval(Fe), K.value = !1;
                const He = De.environment_name || _e.name;
                B.value ? a("complete", He, we.value) : (g.value = "landing", a("environment-created-no-switch", He));
              } else De.state === "error" && (clearInterval(Fe), K.value = !1, H.value = De.error || "Environment creation failed");
            } catch (De) {
              Ne.value++, console.warn(`Polling failure ${Ne.value}/${wo}:`, De), Ne.value >= wo && (clearInterval(Fe), K.value = !1, H.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (_e) {
        K.value = !1, H.value = _e instanceof Error ? _e.message : "Unknown error";
      }
    }
    async function ke() {
      de.value = !0;
      try {
        oe.value = await f();
      } catch (_e) {
        console.error("Failed to load ComfyUI releases:", _e);
      } finally {
        de.value = !1;
      }
    }
    function X() {
      w.value && a("switch-environment", w.value, we.value);
    }
    function G() {
      g.value === "create" || g.value === "import" ? g.value = "landing" : p.value === 2 && o.setupState === "no_workspace" && (p.value = 1);
    }
    function fe(_e, Z) {
      b.value = !1, Z ? a("complete", _e, we.value) : (a("environment-created-no-switch", _e), g.value = "landing");
    }
    function he() {
    }
    lt(async () => {
      if (o.detectedModelsDir && (F.value = o.detectedModelsDir), o.workspacePath && (we.value = o.workspacePath), p.value === 2) {
        ke();
        const _e = setTimeout(() => {
          E.value = !1;
        }, 3e3);
        await je(), clearTimeout(_e), E.value = !1;
      }
    });
    async function je() {
      try {
        const _e = await d();
        if (console.log("[ComfyGit] Create progress check:", _e.state, _e), _e.state === "creating") {
          console.log("[ComfyGit] Resuming in-progress environment creation:", _e.environment_name), g.value = "create", K.value = !0, le.value = _e.environment_name || "my-new-env", te.value = {
            progress: _e.progress ?? 0,
            message: _e.message,
            phase: _e.phase
          }, We();
          return;
        }
      } catch (_e) {
        console.log("[ComfyGit] Create progress check failed:", _e);
      }
      try {
        const _e = await v();
        console.log("[ComfyGit] Import progress check:", _e.state, _e), _e.state === "importing" && (console.log("[ComfyGit] Resuming in-progress import:", _e.environment_name), I.value = {
          message: _e.message || "Importing...",
          phase: _e.phase || "",
          progress: _e.progress ?? 0,
          environmentName: _e.environment_name || ""
        }, C.value = !0, g.value = "import", b.value = !0);
      } catch (_e) {
        console.log("[ComfyGit] Import progress check failed:", _e);
      }
    }
    async function We() {
      Ne.value = 0, be.value = Date.now();
      let _e = null;
      const Z = async () => {
        if (be.value && Date.now() - be.value > Ii)
          return _e && clearInterval(_e), K.value = !1, H.value = "Environment creation timed out. Check server logs for details.", !1;
        try {
          const De = await d();
          if (Ne.value = 0, De.state === "idle" && K.value)
            return _e && clearInterval(_e), K.value = !1, H.value = "Environment creation was interrupted. Please try again.", !1;
          if (te.value = {
            progress: De.progress ?? 0,
            message: De.message,
            phase: De.phase
          }, De.state === "complete") {
            _e && clearInterval(_e), K.value = !1;
            const He = De.environment_name || le.value;
            return a("complete", He, we.value), !1;
          } else if (De.state === "error")
            return _e && clearInterval(_e), K.value = !1, H.value = De.error || "Environment creation failed", !1;
          return !0;
        } catch (De) {
          return Ne.value++, console.warn(`Polling failure ${Ne.value}/${wo}:`, De), Ne.value >= wo ? (_e && clearInterval(_e), K.value = !1, H.value = "Lost connection to server. Please refresh and try again.", !1) : !0;
        }
      };
      await Z() && (_e = setInterval(async () => {
        !await Z() && _e && clearInterval(_e);
      }, 2e3));
    }
    return (_e, Z) => (n(), i(W, null, [
      $($t, {
        size: "lg",
        "show-close-button": !1,
        "close-on-overlay-click": !1,
        onClose: Z[15] || (Z[15] = (Fe) => _e.$emit("close"))
      }, {
        header: h(() => [
          Z[20] || (Z[20] = s("h3", { class: "base-modal-title" }, "WELCOME TO COMFYGIT", -1)),
          s("div", jE, [
            $($c),
            Z[19] || (Z[19] = s("span", { class: "header-divider" }, null, -1)),
            ve.value ? (n(), i("button", {
              key: 0,
              class: "icon-btn settings-btn",
              title: "Workspace Settings",
              onClick: Z[0] || (Z[0] = (Fe) => _.value = !0)
            }, [...Z[17] || (Z[17] = [
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
              onClick: Z[1] || (Z[1] = (Fe) => _e.$emit("close")),
              title: "Close"
            }, [...Z[18] || (Z[18] = [
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
            p.value === 1 ? (n(), i("div", HE, [
              Z[24] || (Z[24] = s("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
              s("div", qE, [
                Z[21] || (Z[21] = s("label", { class: "form-label" }, "Workspace Path", -1)),
                Pt(s("input", {
                  "onUpdate:modelValue": Z[2] || (Z[2] = (De) => M.value = De),
                  type: "text",
                  class: "form-input",
                  placeholder: e.defaultPath
                }, null, 8, KE), [
                  [cn, M.value]
                ]),
                V.value ? (n(), i("p", JE, m(V.value), 1)) : y("", !0)
              ]),
              s("div", QE, [
                s("label", YE, [
                  Pt(s("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": Z[3] || (Z[3] = (De) => N.value = De)
                  }, null, 512), [
                    [ea, N.value]
                  ]),
                  Z[22] || (Z[22] = s("span", null, "I have existing ComfyUI models", -1))
                ])
              ]),
              N.value ? (n(), i("div", XE, [
                Z[23] || (Z[23] = s("label", { class: "form-label" }, "Models Directory", -1)),
                Pt(s("input", {
                  "onUpdate:modelValue": Z[4] || (Z[4] = (De) => F.value = De),
                  type: "text",
                  class: "form-input",
                  placeholder: e.detectedModelsDir || "/path/to/models"
                }, null, 8, ZE), [
                  [cn, F.value]
                ]),
                e.detectedModelsDir && !F.value ? (n(), i("p", eT, " Detected: " + m(e.detectedModelsDir), 1)) : y("", !0),
                q.value ? (n(), i("p", tT, " Did you mean: " + m(q.value), 1)) : y("", !0),
                D.value ? (n(), i("p", sT, m(D.value), 1)) : y("", !0),
                ue.value !== null && !D.value ? (n(), i("p", oT, " Found " + m(ue.value) + " model files ", 1)) : y("", !0)
              ])) : y("", !0),
              ce.value ? (n(), L(ta, {
                key: 1,
                progress: ee.value.progress,
                message: ee.value.message
              }, null, 8, ["progress", "message"])) : y("", !0)
            ])) : y("", !0),
            p.value === 2 ? (n(), i("div", nT, [
              E.value ? (n(), i("div", aT, [...Z[25] || (Z[25] = [
                s("div", { class: "loading-spinner" }, null, -1),
                s("div", { class: "loading-text" }, "Checking for in-progress operations...", -1)
              ])])) : (n(), i(W, { key: 1 }, [
                !o.cliInstalled && !S.value ? (n(), i("div", lT, [
                  s("div", iT, [
                    Z[27] || (Z[27] = s("span", { class: "cli-warning-icon" }, "!", -1)),
                    Z[28] || (Z[28] = s("span", { class: "cli-warning-title" }, "ComfyGit CLI Not Installed", -1)),
                    s("button", {
                      class: "cli-warning-close",
                      onClick: Z[5] || (Z[5] = (De) => S.value = !0),
                      title: "Dismiss"
                    }, [...Z[26] || (Z[26] = [
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
                  Z[29] || (Z[29] = s("p", { class: "cli-warning-text" }, " To start managed environments from the command line, you'll need the ComfyGit CLI. This is required to restart ComfyUI in managed mode after switching environments. ", -1)),
                  Z[30] || (Z[30] = s("div", { class: "cli-warning-commands" }, [
                    s("code", null, "pipx install comfygit"),
                    s("span", { class: "cli-warning-or" }, "or"),
                    s("code", null, "uv tool install comfygit")
                  ], -1))
                ])) : y("", !0),
                g.value === "landing" ? (n(), i("div", rT, [
                  Z[34] || (Z[34] = s("p", { class: "wizard-intro" }, " Now let's set up your first environment. ", -1)),
                  s("button", {
                    class: "landing-option",
                    onClick: Z[6] || (Z[6] = (De) => g.value = "create")
                  }, [...Z[31] || (Z[31] = [
                    s("span", { class: "option-icon" }, "➕", -1),
                    s("div", { class: "option-content" }, [
                      s("span", { class: "option-title" }, "Create New Environment"),
                      s("span", { class: "option-description" }, "Start fresh with a new ComfyUI installation")
                    ], -1),
                    s("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  s("button", {
                    class: "landing-option",
                    onClick: Z[7] || (Z[7] = (De) => {
                      C.value = !1, g.value = "import";
                    })
                  }, [...Z[32] || (Z[32] = [
                    s("span", { class: "option-icon" }, "📦", -1),
                    s("div", { class: "option-content" }, [
                      s("span", { class: "option-title" }, "Import Environment"),
                      s("span", { class: "option-description" }, "From exported bundle (.tar.gz) or git repository")
                    ], -1),
                    s("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  (Fe = o.existingEnvironments) != null && Fe.length ? (n(), i(W, { key: 0 }, [
                    Z[33] || (Z[33] = s("div", { class: "landing-divider" }, [
                      s("span", null, "or switch to existing")
                    ], -1)),
                    s("div", cT, [
                      (n(!0), i(W, null, ye(o.existingEnvironments, (De) => (n(), i("label", {
                        key: De,
                        class: Be(["env-option", { selected: w.value === De }])
                      }, [
                        Pt(s("input", {
                          type: "radio",
                          name: "env-select",
                          value: De,
                          "onUpdate:modelValue": Z[8] || (Z[8] = (He) => w.value = He)
                        }, null, 8, uT), [
                          [Vn, w.value]
                        ]),
                        s("span", dT, m(De), 1)
                      ], 2))), 128))
                    ])
                  ], 64)) : y("", !0)
                ])) : g.value === "create" ? (n(), i("div", mT, [
                  K.value ? (n(), i("div", CT, [
                    s("p", xT, [
                      Z[41] || (Z[41] = x(" Creating environment ", -1)),
                      s("strong", null, m(le.value), 1),
                      Z[42] || (Z[42] = x("... ", -1))
                    ]),
                    $(ta, {
                      progress: te.value.progress,
                      message: te.value.message,
                      "current-phase": te.value.phase,
                      "show-steps": !0,
                      steps: Me
                    }, null, 8, ["progress", "message", "current-phase"]),
                    Z[43] || (Z[43] = s("p", { class: "progress-warning" }, " This may take several minutes. Please wait... ", -1))
                  ])) : (n(), i(W, { key: 0 }, [
                    Z[40] || (Z[40] = s("p", { class: "wizard-intro" }, " Create a new managed environment: ", -1)),
                    s("div", fT, [
                      Z[35] || (Z[35] = s("label", { class: "form-label" }, "Environment Name", -1)),
                      Pt(s("input", {
                        "onUpdate:modelValue": Z[9] || (Z[9] = (De) => le.value = De),
                        type: "text",
                        class: "form-input",
                        placeholder: "my-new-env"
                      }, null, 512), [
                        [cn, le.value]
                      ])
                    ]),
                    s("div", vT, [
                      Z[36] || (Z[36] = s("label", { class: "form-label" }, "Python Version", -1)),
                      Pt(s("select", {
                        "onUpdate:modelValue": Z[10] || (Z[10] = (De) => Y.value = De),
                        class: "form-select"
                      }, [
                        (n(!0), i(W, null, ye(ot(mc), (De) => (n(), i("option", {
                          key: De,
                          value: De
                        }, m(De), 9, pT))), 128))
                      ], 512), [
                        [To, Y.value]
                      ])
                    ]),
                    s("div", gT, [
                      Z[37] || (Z[37] = s("label", { class: "form-label" }, "ComfyUI Version", -1)),
                      Pt(s("select", {
                        "onUpdate:modelValue": Z[11] || (Z[11] = (De) => me.value = De),
                        class: "form-select",
                        disabled: de.value
                      }, [
                        (n(!0), i(W, null, ye(oe.value, (De) => (n(), i("option", {
                          key: De.tag_name,
                          value: De.tag_name
                        }, m(De.name), 9, yT))), 128))
                      ], 8, hT), [
                        [To, me.value]
                      ])
                    ]),
                    s("div", wT, [
                      Z[38] || (Z[38] = s("label", { class: "form-label" }, "PyTorch Backend", -1)),
                      Pt(s("select", {
                        "onUpdate:modelValue": Z[12] || (Z[12] = (De) => ne.value = De),
                        class: "form-select"
                      }, [
                        (n(!0), i(W, null, ye(ot(Ml), (De) => (n(), i("option", {
                          key: De,
                          value: De
                        }, m(De) + m(De === "auto" ? " (detect GPU)" : ""), 9, _T))), 128))
                      ], 512), [
                        [To, ne.value]
                      ])
                    ]),
                    s("div", kT, [
                      s("label", bT, [
                        Pt(s("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": Z[13] || (Z[13] = (De) => B.value = De)
                        }, null, 512), [
                          [ea, B.value]
                        ]),
                        Z[39] || (Z[39] = s("span", null, "Switch to this environment after creation", -1))
                      ])
                    ]),
                    H.value ? (n(), i("div", $T, m(H.value), 1)) : y("", !0)
                  ], 64))
                ])) : g.value === "import" ? (n(), i("div", ST, [
                  $(hc, {
                    "workspace-path": we.value,
                    "resume-import": C.value,
                    "initial-progress": I.value ?? void 0,
                    onImportComplete: fe,
                    onImportStarted: Z[14] || (Z[14] = (De) => b.value = !0),
                    onSourceCleared: he
                  }, null, 8, ["workspace-path", "resume-import", "initial-progress"])
                ])) : y("", !0)
              ], 64))
            ])) : y("", !0)
          ];
        }),
        footer: h(() => [
          s("div", IT, [
            $(Cc),
            s("div", ET, [
              p.value === 1 ? (n(), L(Ue, {
                key: 0,
                variant: "primary",
                disabled: !Ae.value || ce.value,
                onClick: Ce
              }, {
                default: h(() => [
                  x(m(ce.value ? "Creating..." : "Next"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : p.value === 2 ? (n(), i(W, { key: 1 }, [
                !K.value && !b.value && (g.value !== "landing" || o.setupState === "no_workspace" && !we.value) ? (n(), L(Ue, {
                  key: 0,
                  variant: "secondary",
                  onClick: G
                }, {
                  default: h(() => [...Z[44] || (Z[44] = [
                    x(" Back ", -1)
                  ])]),
                  _: 1
                })) : y("", !0),
                g.value === "create" ? (n(), L(Ue, {
                  key: 1,
                  variant: "primary",
                  disabled: !ge.value || K.value,
                  onClick: Ee
                }, {
                  default: h(() => [
                    x(m(K.value ? "Creating..." : B.value ? "Create & Switch" : "Create Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0),
                g.value === "landing" && w.value ? (n(), L(Ue, {
                  key: 2,
                  variant: "primary",
                  onClick: X
                }, {
                  default: h(() => [
                    x(" Switch to " + m(w.value), 1)
                  ]),
                  _: 1
                })) : y("", !0)
              ], 64)) : y("", !0)
            ])
          ])
        ]),
        _: 1
      }),
      _.value ? (n(), L(GE, {
        key: 0,
        "workspace-path": T.value,
        onClose: Z[16] || (Z[16] = (Fe) => _.value = !1)
      }, null, 8, ["workspace-path"])) : y("", !0)
    ], 64));
  }
}), PT = /* @__PURE__ */ Ie(MT, [["__scopeId", "data-v-9a9aadc0"]]), RT = { class: "update-banner" }, LT = { class: "update-banner__left" }, DT = { class: "update-banner__title" }, NT = {
  key: 0,
  class: "update-banner__summary"
}, UT = { class: "update-banner__actions" }, OT = ["disabled"], AT = ["disabled"], zT = ["disabled"], FT = /* @__PURE__ */ xe({
  __name: "UpdateNoticeBanner",
  props: {
    info: {},
    updating: { type: Boolean }
  },
  emits: ["update", "dismiss", "release-notes"],
  setup(e, { emit: t }) {
    const o = t;
    return (a, l) => (n(), i("div", RT, [
      s("div", LT, [
        s("div", DT, " ComfyGit Manager v" + m(e.info.latest_version) + " available ", 1),
        e.info.changelog_summary ? (n(), i("div", NT, m(e.info.changelog_summary), 1)) : y("", !0)
      ]),
      s("div", UT, [
        s("button", {
          class: "update-banner__btn primary",
          disabled: e.updating,
          onClick: l[0] || (l[0] = (r) => o("update"))
        }, m(e.updating ? "Updating…" : "Update"), 9, OT),
        e.info.release_url ? (n(), i("button", {
          key: 0,
          class: "update-banner__btn",
          disabled: e.updating,
          onClick: l[1] || (l[1] = (r) => o("release-notes"))
        }, " Release notes ", 8, AT)) : y("", !0),
        s("button", {
          class: "update-banner__btn",
          disabled: e.updating,
          onClick: l[2] || (l[2] = (r) => o("dismiss"))
        }, " Dismiss ", 8, zT)
      ])
    ]));
  }
}), VT = /* @__PURE__ */ Ie(FT, [["__scopeId", "data-v-49562c5c"]]), xc = "ComfyGit.UpdateNotice.DismissedVersion";
function BT() {
  try {
    return localStorage.getItem(xc);
  } catch {
    return null;
  }
}
function WT(e) {
  try {
    localStorage.setItem(xc, e);
  } catch {
  }
}
function GT(e) {
  return !e || !e.update_available || !e.latest_version ? !1 : BT() !== e.latest_version;
}
const jT = { class: "comfygit-panel" }, HT = { class: "panel-header" }, qT = { class: "header-left" }, KT = {
  key: 0,
  class: "header-info"
}, JT = { class: "header-actions" }, QT = { class: "env-switcher" }, YT = { class: "env-switcher-header" }, XT = { class: "env-control-buttons" }, ZT = {
  key: 0,
  class: "header-info"
}, eM = { class: "branch-name" }, tM = { class: "panel-main" }, sM = { class: "sidebar" }, oM = { class: "sidebar-content" }, nM = { class: "sidebar-section" }, aM = { class: "sidebar-section" }, lM = { class: "sidebar-section" }, iM = { class: "sidebar-footer" }, rM = { class: "content-area" }, cM = {
  key: 0,
  class: "error-message"
}, uM = {
  key: 1,
  class: "loading"
}, dM = { class: "dialog-content env-selector-dialog" }, mM = { class: "dialog-header" }, fM = { class: "dialog-body" }, vM = { class: "env-list" }, pM = { class: "env-info" }, gM = { class: "env-name-row" }, hM = { class: "env-indicator" }, yM = { class: "env-name" }, wM = {
  key: 0,
  class: "env-branch"
}, _M = {
  key: 1,
  class: "current-label"
}, kM = { class: "env-stats" }, bM = ["onClick"], $M = { class: "toast-container" }, CM = { class: "toast-message" }, Ei = "ComfyGit.LastView", Ti = "ComfyGit.LastSection", xM = /* @__PURE__ */ xe({
  __name: "ComfyGitPanel",
  props: {
    initialView: {}
  },
  emits: ["close", "statusUpdate"],
  setup(e, { emit: t }) {
    const o = e, a = t, {
      getStatus: l,
      getHistory: r,
      getBranches: c,
      checkout: u,
      createBranch: d,
      switchBranch: v,
      deleteBranch: f,
      getEnvironments: p,
      switchEnvironment: w,
      getSwitchProgress: g,
      deleteEnvironment: _,
      syncEnvironmentManually: b,
      repairWorkflowModels: S,
      getSetupStatus: C,
      getUpdateCheck: I,
      updateManager: E
    } = ct(), M = Ah(), N = k(null), F = k([]), V = k([]), D = k([]), q = R(() => D.value.find((ie) => ie.is_current)), ue = k(null), le = k(!1), Y = k(!1), me = k("remotes");
    function ne(ie) {
      return ie ? {
        manifest: "manifest",
        "debug-env": "env",
        "debug-workspace": "workspace",
        "debug-orchestrator": "orchestrator"
      }[ie] ?? "manifest" : "manifest";
    }
    const B = k(ne(o.initialView)), H = k(null), we = k(!1), oe = k(1), de = R(() => {
      var ie;
      return ((ie = H.value) == null ? void 0 : ie.state) || "managed";
    }), ce = {
      can_initialize_workspace: !1,
      can_create_environment: !0,
      can_switch_environment: !0,
      can_restart_current: !0,
      can_stop_current: !0,
      can_delete_environment: !0
    }, K = R(() => {
      var ie, j;
      return ((j = (ie = H.value) == null ? void 0 : ie.runtime_context) == null ? void 0 : j.capabilities) || ce;
    }), ee = k(!1), te = k(null), Me = k(null), Se = k(!1), ze = k(null), Ne = k(!1), be = k(!1), Ae = R(() => !Ne.value && GT(ze.value)), ge = k(null), ve = k(null), T = k(null), A = k(!1), ae = k(!1), Ce = k(""), Ee = k(null), ke = k({ state: "idle", progress: 0, message: "" });
    let X = null, G = null;
    const fe = {
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
    }, he = o.initialView ? fe[o.initialView] : null, je = [
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
    function _e() {
      try {
        const ie = sessionStorage.getItem(Ei), j = sessionStorage.getItem(Ti), qe = ie === "branches" || ie === "history" || ie === "remotes" ? "version-control" : ie === "manifest" || ie === "debug-env" || ie === "debug-workspace" ? "diagnostics" : ie, Ze = j === "all-envs" ? "workspace" : j === "sharing" ? "version-control" : j;
        if (ie && j && je.includes(qe) && We.includes(Ze))
          return { view: qe, section: Ze };
      } catch {
      }
      return null;
    }
    const Z = _e(), Fe = k((he == null ? void 0 : he.view) ?? (Z == null ? void 0 : Z.view) ?? "status"), De = k((he == null ? void 0 : he.section) ?? (Z == null ? void 0 : Z.section) ?? "this-env");
    function He(ie, j) {
      Fe.value = ie, De.value = j;
      try {
        sessionStorage.setItem(Ei, ie), sessionStorage.setItem(Ti, j);
      } catch {
      }
    }
    function Ve(ie) {
      const qe = {
        "model-index": { view: "model-index", section: "workspace" },
        remotes: { view: "version-control", section: "version-control" }
      }[ie];
      qe && He(qe.view, qe.section);
    }
    function Oe(ie) {
      me.value = ie, He("version-control", "version-control");
    }
    function Qe(ie) {
      B.value = ie, He("diagnostics", "diagnostics");
    }
    function pt() {
      Oe("branches");
    }
    function Q() {
      a("close"), setTimeout(async () => {
        await pe("Comfy.OpenManagerDialog") || await pe("Comfy.Manager.CustomNodesManager.ShowCustomNodesMenu") || P(["Extensions", "Manage extensions"]) || P(["Manager"]) || console.warn("[ComfyGit] Extensions manager entrypoint not found");
      }, 100);
    }
    async function pe(ie) {
      var Ze, dt;
      const j = window.app, qe = [
        (Ze = j == null ? void 0 : j.extensionManager) == null ? void 0 : Ze.command,
        (dt = j == null ? void 0 : j.extensionManager) == null ? void 0 : dt.commands,
        j == null ? void 0 : j.command,
        j == null ? void 0 : j.commands
      ];
      for (const yt of qe)
        if (typeof (yt == null ? void 0 : yt.execute) == "function")
          try {
            return await yt.execute(ie), !0;
          } catch (Nt) {
            console.debug(`[ComfyGit] Command ${ie} did not open Extensions manager`, Nt);
          }
      return !1;
    }
    function P(ie) {
      var Ze, dt, yt;
      const j = ie.map((Nt) => Nt.toLowerCase()), qe = document.querySelectorAll('button, [role="button"]');
      for (const Nt of qe) {
        const as = Nt;
        if ([
          (Ze = as.textContent) == null ? void 0 : Ze.trim(),
          (dt = as.getAttribute("title")) == null ? void 0 : dt.trim(),
          (yt = as.getAttribute("aria-label")) == null ? void 0 : yt.trim()
        ].filter(Boolean).map((z) => z.toLowerCase()).some((z) => j.includes(z)))
          return as.click(), !0;
      }
      return !1;
    }
    const U = k(null), J = k(!1), Te = k(!1), Le = k([]);
    let Ke = 0;
    function Pe(ie, j = "info", qe = 3e3) {
      const Ze = ++Ke;
      return Le.value.push({ id: Ze, message: ie, type: j }), qe > 0 && setTimeout(() => {
        Le.value = Le.value.filter((dt) => dt.id !== Ze);
      }, qe), Ze;
    }
    function Ye(ie) {
      Le.value = Le.value.filter((j) => j.id !== ie);
    }
    function nt(ie, j) {
      Pe(ie, j);
    }
    async function St() {
      ze.value = null, Ne.value = !1;
      try {
        ze.value = await I();
      } catch {
      }
    }
    function Vt() {
      var j;
      const ie = (j = ze.value) == null ? void 0 : j.release_url;
      if (ie)
        try {
          window.open(ie, "_blank", "noopener,noreferrer");
        } catch {
        }
    }
    function Ct() {
      var j;
      const ie = (j = ze.value) == null ? void 0 : j.latest_version;
      ie && WT(ie), Ne.value = !0;
    }
    async function Tt() {
      if (be.value) return;
      be.value = !0;
      const ie = Pe("Updating comfygit-manager...", "info", 0);
      try {
        const j = await E();
        if (Ye(ie), j.status !== "success") {
          if (Pe(j.message || "Update failed", "error"), j.manual_instructions) {
            const qe = j.manual_instructions.split(`
`).map((Ze) => Ze.trim()).filter(Boolean);
            U.value = {
              title: "Manual Update Required",
              message: "Self-update failed. Follow these steps:",
              details: qe,
              confirmLabel: "OK",
              cancelLabel: "Close",
              onConfirm: () => {
                U.value = null;
              }
            };
          }
          return;
        }
        if (Pe(j.message || "Update complete", "success"), Ct(), j.restart_required) {
          Ps();
          try {
            await Zs("/v2/manager/reboot");
          } catch {
          }
        }
      } catch (j) {
        Ye(ie);
        const qe = j instanceof Error ? j.message : "Update failed";
        Pe(qe, "error");
      } finally {
        be.value = !1;
      }
    }
    const es = R(() => {
      if (!N.value) return "neutral";
      const ie = N.value.workflows, j = ie.new.length > 0 || ie.modified.length > 0 || ie.deleted.length > 0 || N.value.has_changes;
      return N.value.comparison.is_synced ? j ? "warning" : "success" : "error";
    });
    R(() => N.value ? es.value === "success" ? "All synced" : es.value === "warning" ? "Uncommitted changes" : es.value === "error" ? "Not synced" : "" : "");
    async function It(ie = {}) {
      ee.value = !0, te.value = null;
      try {
        const [j, qe, Ze, dt] = await Promise.all([
          l(!0),
          r(),
          c(),
          p()
        ]);
        N.value = j, F.value = qe.commits, V.value = Ze.branches, D.value = dt, a("statusUpdate", j), (ie.refreshWorkflows ?? !0) && ge.value && await ge.value.loadWorkflows(!0);
      } catch (j) {
        te.value = j instanceof Error ? j.message : "Failed to load status", N.value = null, F.value = [], V.value = [];
      } finally {
        ee.value = !1;
      }
    }
    function Ws(ie) {
      Me.value = ie;
    }
    async function Ms(ie) {
      var qe;
      Me.value = null;
      const j = N.value && (N.value.workflows.new.length > 0 || N.value.workflows.modified.length > 0 || N.value.workflows.deleted.length > 0 || N.value.has_changes);
      U.value = {
        title: j ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: j ? "You have uncommitted changes that will be lost." : `Checkout commit ${ie.short_hash || ((qe = ie.hash) == null ? void 0 : qe.slice(0, 7))}?`,
        details: j ? In() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: j ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: j,
        onConfirm: async () => {
          var yt;
          U.value = null, Ps();
          const Ze = Pe(`Checking out ${ie.short_hash || ((yt = ie.hash) == null ? void 0 : yt.slice(0, 7))}...`, "info", 0), dt = await u(ie.hash, j);
          Ye(Ze), dt.status === "success" ? Pe("Restarting ComfyUI...", "success") : Pe(dt.message || "Checkout failed", "error");
        }
      };
    }
    async function Gs(ie) {
      const j = N.value && (N.value.workflows.new.length > 0 || N.value.workflows.modified.length > 0 || N.value.workflows.deleted.length > 0 || N.value.has_changes);
      U.value = {
        title: j ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: j ? "You have uncommitted changes." : `Switch to branch "${ie}"?`,
        details: j ? In() : void 0,
        warning: j ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: j ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          U.value = null, Ps();
          const qe = Pe(`Switching to ${ie}...`, "info", 0), Ze = await v(ie, j);
          Ye(qe), Ze.status === "success" ? Pe("Restarting ComfyUI...", "success") : Pe(Ze.message || "Branch switch failed", "error");
        }
      };
    }
    async function js(ie) {
      const j = Pe(`Creating branch ${ie}...`, "info", 0), qe = await d(ie);
      Ye(j), qe.status === "success" ? (Pe(`Branch "${ie}" created`, "success"), await It()) : Pe(qe.message || "Failed to create branch", "error");
    }
    async function Fo(ie, j = !1) {
      const qe = async (Ze) => {
        var yt;
        const dt = Pe(`Deleting branch ${ie}...`, "info", 0);
        try {
          const Nt = await f(ie, Ze);
          Ye(dt), Nt.status === "success" ? (Pe(`Branch "${ie}" deleted`, "success"), await It()) : (yt = Nt.message) != null && yt.includes("not fully merged") ? U.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${ie}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              U.value = null, await qe(!0);
            }
          } : Pe(Nt.message || "Failed to delete branch", "error");
        } catch (Nt) {
          Ye(dt);
          const as = Nt instanceof Error ? Nt.message : "Failed to delete branch";
          as.includes("not fully merged") ? U.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${ie}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              U.value = null, await qe(!0);
            }
          } : Pe(as, "error");
        }
      };
      U.value = {
        title: "Delete Branch",
        message: `Delete branch "${ie}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          U.value = null, await qe(j);
        }
      };
    }
    async function Vo(ie) {
      Me.value = null;
      const j = prompt("Enter branch name:");
      if (j) {
        const qe = Pe(`Creating branch ${j}...`, "info", 0), Ze = await d(j, ie.hash);
        Ye(qe), Ze.status === "success" ? (Pe(`Branch "${j}" created from ${ie.short_hash}`, "success"), await It()) : Pe(Ze.message || "Failed to create branch", "error");
      }
    }
    function Ps() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function se() {
      if (!K.value.can_restart_current) {
        Pe("Restart is not available in this runtime context.", "warning");
        return;
      }
      U.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          U.value = null, Ps(), Pe("Restarting environment...", "info");
          try {
            await Zs("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function O() {
      if (!K.value.can_stop_current) {
        Pe("Stop is not available in this runtime context.", "warning");
        return;
      }
      U.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          U.value = null, Pe("Stopping environment...", "info");
          try {
            await Zs("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function re(ie, j) {
      if (!K.value.can_switch_environment) {
        Pe("Environment switching is not available in this runtime context.", "warning");
        return;
      }
      Se.value = !1, Ce.value = ie, Ee.value = j || null, A.value = !0;
    }
    async function Je() {
      A.value = !1, ae.value = !0, Ps(), ke.value = {
        progress: 10,
        state: it(10),
        message: tt(10)
      };
      try {
        await w(Ce.value, Ee.value || void 0), ns(), Rs();
      } catch (ie) {
        Lt(), ae.value = !1, Pe(`Failed to initiate switch: ${ie instanceof Error ? ie.message : "Unknown error"}`, "error"), ke.value = { state: "idle", progress: 0, message: "" }, Ee.value = null;
      }
    }
    function it(ie) {
      return ie >= 100 ? "complete" : ie >= 80 ? "validating" : ie >= 60 ? "starting" : ie >= 30 ? "syncing" : "preparing";
    }
    function tt(ie) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[it(ie)] || "";
    }
    function ns() {
      if (G) return;
      let ie = 10;
      const j = 60, qe = 5e3, Ze = 100, dt = (j - ie) / (qe / Ze);
      G = window.setInterval(() => {
        if (ie += dt, ie >= j && (ie = j, Lt()), ke.value.progress < j) {
          const yt = Math.floor(ie);
          ke.value = {
            progress: yt,
            state: it(yt),
            message: tt(yt)
          };
        }
      }, Ze);
    }
    function Lt() {
      G && (clearInterval(G), G = null);
    }
    function Rs() {
      X || (X = window.setInterval(async () => {
        try {
          let ie = await M.getStatus();
          if ((!ie || ie.state === "idle") && (ie = await g()), !ie)
            return;
          const j = ie.progress || 0;
          j >= 60 && Lt();
          const qe = Math.max(j, ke.value.progress), Ze = ie.state && ie.state !== "idle" && ie.state !== "unknown", dt = Ze ? ie.state : it(qe), yt = Ze && ie.message || tt(qe);
          ke.value = {
            state: dt,
            progress: qe,
            message: yt
          }, ie.state === "complete" ? (Lt(), Hs(), ae.value = !1, Pe(`✓ Switched to ${Ce.value}`, "success"), await It(), Ce.value = "") : ie.state === "rolled_back" ? (Lt(), Hs(), ae.value = !1, Pe("Switch failed, restored previous environment", "warning"), Ce.value = "") : ie.state === "critical_failure" && (Lt(), Hs(), ae.value = !1, Pe(`Critical error during switch: ${ie.message}`, "error"), Ce.value = "");
        } catch (ie) {
          console.error("Failed to poll switch progress:", ie);
        }
      }, 1e3));
    }
    function Hs() {
      Lt(), X && (clearInterval(X), X = null);
    }
    function ga() {
      var ie;
      A.value = !1, Ce.value = "", (ie = H.value) != null && ie.state && H.value.state !== "managed" && (oe.value = H.value.state === "no_workspace" ? 1 : 2, we.value = !0);
    }
    async function ha(ie) {
      J.value = !1, await It(), Pe(ie.message, ie.success ? "success" : "error");
    }
    async function ya() {
      Te.value = !1;
      const ie = Pe("Syncing environment...", "info", 0);
      try {
        const j = await b("skip", !0);
        if (Ye(ie), j.status === "success") {
          const qe = [];
          j.nodes_installed.length && qe.push(`${j.nodes_installed.length} installed`), j.nodes_removed.length && qe.push(`${j.nodes_removed.length} removed`);
          const Ze = qe.length ? `: ${qe.join(", ")}` : "";
          Pe(`✓ Environment synced${Ze}`, "success"), await It();
        } else {
          const qe = j.errors.length ? j.errors.join("; ") : j.message;
          Pe(`Sync failed: ${qe}`, "error");
        }
      } catch (j) {
        Ye(ie), Pe(`Sync error: ${j instanceof Error ? j.message : "Unknown error"}`, "error");
      }
    }
    async function wa(ie) {
      var j;
      try {
        const qe = await S(ie);
        qe.failed.length === 0 ? Pe(`✓ Repaired ${qe.success} workflow${qe.success === 1 ? "" : "s"}`, "success") : Pe(`Repaired ${qe.success}, failed: ${qe.failed.length}`, "warning"), await It();
      } catch (qe) {
        Pe(`Repair failed: ${qe instanceof Error ? qe.message : "Unknown error"}`, "error");
      } finally {
        (j = T.value) == null || j.resetRepairingState();
      }
    }
    async function xn() {
      var j, qe;
      const ie = Pe("Repairing environment...", "info", 0);
      try {
        const Ze = await b("skip", !0);
        if (Ye(ie), Ze.status === "success") {
          const dt = [];
          Ze.nodes_installed.length && dt.push(`${Ze.nodes_installed.length} installed`), Ze.nodes_removed.length && dt.push(`${Ze.nodes_removed.length} removed`);
          const yt = dt.length ? `: ${dt.join(", ")}` : "";
          Pe(`✓ Environment repaired${yt}`, "success"), (j = T.value) == null || j.closeDetailModal(), await It();
        } else {
          const dt = Ze.errors.length ? Ze.errors.join(", ") : Ze.message || "Unknown error";
          Pe(`Repair failed: ${dt}`, "error");
        }
      } catch (Ze) {
        Ye(ie), Pe(`Repair error: ${Ze instanceof Error ? Ze.message : "Unknown error"}`, "error");
      } finally {
        (qe = T.value) == null || qe.resetRepairingEnvironmentState();
      }
    }
    async function _a(ie, j) {
      Pe(`Environment '${ie}' created`, "success"), await It(), ve.value && await ve.value.loadEnvironments(), j && K.value.can_switch_environment && await re(ie);
    }
    async function ka(ie) {
      var j;
      if (!K.value.can_delete_environment) {
        Pe("Environment deletion is not available in this runtime context.", "warning");
        return;
      }
      if (((j = q.value) == null ? void 0 : j.name) === ie) {
        Pe("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      U.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${ie}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          U.value = null;
          try {
            const qe = await _(ie);
            qe.status === "success" ? (Pe(`Environment "${ie}" deleted`, "success"), await It(), ve.value && await ve.value.loadEnvironments()) : Pe(qe.message || "Failed to delete environment", "error");
          } catch (qe) {
            Pe(`Error deleting environment: ${qe instanceof Error ? qe.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function ba(ie, j) {
      we.value = !1;
      try {
        H.value = await C();
      } catch {
      }
      K.value.can_switch_environment && await re(ie, j);
    }
    function $a() {
      we.value = !1, a("close");
    }
    async function Ca(ie, j) {
      await re(ie, j);
    }
    async function xa(ie) {
      le.value = !1, await It(), await re(ie);
    }
    function Sa() {
      ue.value = null, le.value = !0;
    }
    function Ia(ie) {
      ue.value = ie, Y.value = !0;
    }
    function Sn() {
      Y.value = !1, ue.value = null;
    }
    async function Ea(ie) {
      H.value = await C(), console.log(`Environment '${ie}' created. Available for switching.`);
    }
    function Ta() {
      if (!K.value.can_create_environment) {
        Pe("Environment creation is not available in this runtime context.", "warning");
        return;
      }
      He("environments", "workspace"), setTimeout(() => {
        var ie;
        (ie = ve.value) == null || ie.openCreateModal();
      }, 100);
    }
    function In() {
      if (!N.value) return [];
      const ie = [], j = N.value.workflows;
      return j.new.length && ie.push(`${j.new.length} new workflow(s)`), j.modified.length && ie.push(`${j.modified.length} modified workflow(s)`), j.deleted.length && ie.push(`${j.deleted.length} deleted workflow(s)`), ie;
    }
    return lt(async () => {
      try {
        if (H.value = await C(), H.value.state === "no_workspace" && K.value.can_initialize_workspace) {
          we.value = !0, oe.value = 1;
          return;
        }
        if (H.value.state === "empty_workspace" && K.value.can_create_environment) {
          we.value = !0, oe.value = 2;
          return;
        }
        if (H.value.state === "unmanaged" && K.value.can_switch_environment) {
          we.value = !0, oe.value = 2;
          return;
        }
      } catch (ie) {
        console.warn("Setup status check failed, proceeding normally:", ie);
      }
      await Promise.all([
        It({ refreshWorkflows: !1 }),
        St()
      ]);
    }), (ie, j) => {
      var qe, Ze, dt, yt, Nt, as, Bo, z, $e, Ge, mt, Mt, ys;
      return n(), i("div", jT, [
        s("div", HT, [
          s("div", qT, [
            j[27] || (j[27] = s("h2", { class: "panel-title" }, "ComfyGit", -1)),
            N.value ? (n(), i("div", KT)) : y("", !0)
          ]),
          s("div", JT, [
            $($c),
            j[30] || (j[30] = s("span", { class: "header-divider" }, null, -1)),
            s("button", {
              class: Be(["icon-btn", { spinning: ee.value }]),
              onClick: It,
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
              onClick: j[0] || (j[0] = (et) => a("close")),
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
        Ae.value && ze.value ? (n(), L(VT, {
          key: 0,
          info: ze.value,
          updating: be.value,
          onUpdate: Tt,
          onDismiss: Ct,
          onReleaseNotes: Vt
        }, null, 8, ["info", "updating"])) : y("", !0),
        s("div", QT, [
          s("div", YT, [
            j[31] || (j[31] = s("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            s("div", XT, [
              K.value.can_restart_current ? (n(), i("button", {
                key: 0,
                class: "env-control-btn",
                title: "Restart environment",
                onClick: se
              }, " Restart ")) : y("", !0),
              K.value.can_stop_current ? (n(), i("button", {
                key: 1,
                class: "env-control-btn stop",
                title: "Stop environment",
                onClick: O
              }, " Stop ")) : y("", !0)
            ])
          ]),
          s("button", {
            class: "env-switcher-btn",
            onClick: j[1] || (j[1] = (et) => He("environments", "workspace"))
          }, [
            N.value ? (n(), i("div", ZT, [
              s("span", null, m(((qe = q.value) == null ? void 0 : qe.name) || ((Ze = N.value) == null ? void 0 : Ze.environment) || "Loading..."), 1),
              s("span", eM, "(" + m(N.value.branch || "detached") + ")", 1)
            ])) : y("", !0),
            j[32] || (j[32] = s("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        s("div", tM, [
          s("div", sM, [
            s("div", oM, [
              s("div", nM, [
                j[33] || (j[33] = s("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
                s("button", {
                  class: Be(["sidebar-item", { active: Fe.value === "status" && De.value === "this-env" }]),
                  onClick: j[2] || (j[2] = (et) => He("status", "this-env"))
                }, " STATUS ", 2),
                s("button", {
                  class: Be(["sidebar-item", { active: Fe.value === "workflows" }]),
                  onClick: j[3] || (j[3] = (et) => He("workflows", "this-env"))
                }, " WORKFLOWS ", 2),
                s("button", {
                  class: Be(["sidebar-item", { active: Fe.value === "models-env" }]),
                  onClick: j[4] || (j[4] = (et) => He("models-env", "this-env"))
                }, " MODELS ", 2),
                s("button", {
                  class: Be(["sidebar-item", { active: Fe.value === "nodes" }]),
                  onClick: j[5] || (j[5] = (et) => He("nodes", "this-env"))
                }, " NODES ", 2),
                s("button", {
                  class: Be(["sidebar-item", { active: Fe.value === "version-control" }]),
                  onClick: j[6] || (j[6] = (et) => Oe("remotes"))
                }, " VERSION CONTROL ", 2)
              ]),
              j[36] || (j[36] = s("div", { class: "sidebar-divider" }, null, -1)),
              s("div", aM, [
                j[34] || (j[34] = s("div", { class: "sidebar-section-title" }, "WORKSPACE", -1)),
                s("button", {
                  class: Be(["sidebar-item", { active: Fe.value === "environments" }]),
                  onClick: j[7] || (j[7] = (et) => He("environments", "workspace"))
                }, " ENVIRONMENTS ", 2),
                s("button", {
                  class: Be(["sidebar-item", { active: Fe.value === "model-index" }]),
                  onClick: j[8] || (j[8] = (et) => He("model-index", "workspace"))
                }, " MODEL INDEX ", 2),
                s("button", {
                  class: Be(["sidebar-item", { active: Fe.value === "settings" }]),
                  onClick: j[9] || (j[9] = (et) => He("settings", "workspace"))
                }, " SETTINGS ", 2)
              ]),
              j[37] || (j[37] = s("div", { class: "sidebar-divider" }, null, -1)),
              s("div", lM, [
                j[35] || (j[35] = s("div", { class: "sidebar-section-title" }, "DIAGNOSTICS", -1)),
                s("button", {
                  class: Be(["sidebar-item", { active: Fe.value === "diagnostics" && B.value === "manifest" }]),
                  onClick: j[10] || (j[10] = (et) => Qe("manifest"))
                }, " MANIFEST ", 2),
                s("button", {
                  class: Be(["sidebar-item", { active: Fe.value === "diagnostics" && B.value !== "manifest" }]),
                  onClick: j[11] || (j[11] = (et) => Qe("env"))
                }, " LOGGING ", 2)
              ])
            ]),
            s("div", iM, [
              $(Cc)
            ])
          ]),
          s("div", rM, [
            te.value ? (n(), i("div", cM, m(te.value), 1)) : !N.value && Fe.value === "status" ? (n(), i("div", uM, " Loading status... ")) : (n(), i(W, { key: 2 }, [
              Fe.value === "status" ? (n(), L(Oh, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: T,
                status: N.value,
                "setup-state": de.value,
                onSwitchBranch: pt,
                onCommitChanges: j[12] || (j[12] = (et) => J.value = !0),
                onSyncEnvironment: j[13] || (j[13] = (et) => Te.value = !0),
                onViewWorkflows: j[14] || (j[14] = (et) => He("workflows", "this-env")),
                onViewHistory: j[15] || (j[15] = (et) => Oe("history")),
                onViewDebug: j[16] || (j[16] = (et) => Qe("env")),
                onViewNodes: j[17] || (j[17] = (et) => He("nodes", "this-env")),
                onRepairMissingModels: wa,
                onRepairEnvironment: xn,
                onStartSetup: j[18] || (j[18] = (et) => we.value = !0),
                onViewEnvironments: j[19] || (j[19] = (et) => He("environments", "workspace")),
                onCreateEnvironment: Ta
              }, null, 8, ["status", "setup-state"])) : Fe.value === "workflows" ? (n(), L(Pb, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: ge,
                onRefresh: It
              }, null, 512)) : Fe.value === "models-env" ? (n(), L(O2, {
                key: 2,
                onNavigate: Ve
              })) : Fe.value === "version-control" ? (n(), L(FI, {
                key: 3,
                commits: F.value,
                "current-ref": (dt = N.value) == null ? void 0 : dt.branch,
                branches: V.value,
                current: ((yt = N.value) == null ? void 0 : yt.branch) || null,
                "initial-tab": me.value,
                onSelect: Ws,
                onCheckout: Ms,
                onSwitch: Gs,
                onCreate: js,
                onDelete: Fo,
                onToast: nt
              }, null, 8, ["commits", "current-ref", "branches", "current", "initial-tab"])) : Fe.value === "nodes" ? (n(), L(T$, {
                key: 4,
                "version-mismatches": ((as = (Nt = N.value) == null ? void 0 : Nt.comparison) == null ? void 0 : as.version_mismatches) || [],
                onOpenNodeManager: Q,
                onRepairEnvironment: xn,
                onToast: nt
              }, null, 8, ["version-mismatches"])) : Fe.value === "diagnostics" ? (n(), L(e6, {
                key: 5,
                "initial-tab": B.value
              }, null, 8, ["initial-tab"])) : Fe.value === "environments" ? (n(), L(Ex, {
                key: 6,
                ref_key: "environmentsSectionRef",
                ref: ve,
                "can-create": K.value.can_create_environment,
                "can-switch": K.value.can_switch_environment,
                "can-delete": K.value.can_delete_environment,
                onSwitch: re,
                onCreated: _a,
                onDelete: ka,
                onImport: Sa,
                onExport: Ia
              }, null, 8, ["can-create", "can-switch", "can-delete"])) : Fe.value === "model-index" ? (n(), L(K2, {
                key: 7,
                onRefresh: It
              })) : Fe.value === "settings" ? (n(), L(sC, { key: 8 })) : y("", !0)
            ], 64))
          ])
        ]),
        Me.value ? (n(), L(y6, {
          key: 1,
          commit: Me.value,
          onClose: j[20] || (j[20] = (et) => Me.value = null),
          onCheckout: Ms,
          onCreateBranch: Vo
        }, null, 8, ["commit"])) : y("", !0),
        U.value ? (n(), L(Tl, {
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
          onCancel: j[21] || (j[21] = (et) => U.value = null),
          onSecondary: U.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : y("", !0),
        le.value ? (n(), L($t, {
          key: 3,
          title: "IMPORT ENVIRONMENT",
          size: "xl",
          "fixed-height": "",
          onClose: j[22] || (j[22] = (et) => le.value = !1)
        }, {
          body: h(() => [
            $(f5, {
              embedded: "",
              onImportCompleteSwitch: xa
            })
          ]),
          _: 1
        })) : y("", !0),
        Y.value ? (n(), L($t, {
          key: 4,
          title: ue.value ? `EXPORT ENVIRONMENT: ${ue.value.toUpperCase()}` : "EXPORT ENVIRONMENT",
          size: "md",
          onClose: Sn
        }, {
          body: h(() => [
            $(y3, {
              embedded: "",
              "environment-name": ue.value,
              onClose: Sn
            }, null, 8, ["environment-name"])
          ]),
          _: 1
        }, 8, ["title"])) : y("", !0),
        $(iE, {
          show: A.value,
          "from-environment": ((Bo = q.value) == null ? void 0 : Bo.name) || "unknown",
          "to-environment": Ce.value,
          onConfirm: Je,
          onClose: ga
        }, null, 8, ["show", "from-environment", "to-environment"]),
        J.value && N.value ? (n(), L(bc, {
          key: 5,
          status: N.value,
          "as-modal": !0,
          onClose: j[23] || (j[23] = (et) => J.value = !1),
          onCommitted: ha
        }, null, 8, ["status"])) : y("", !0),
        Te.value && N.value ? (n(), L(IE, {
          key: 6,
          show: Te.value,
          "mismatch-details": {
            missing_nodes: N.value.comparison.missing_nodes,
            extra_nodes: N.value.comparison.extra_nodes
          },
          onConfirm: ya,
          onClose: j[24] || (j[24] = (et) => Te.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : y("", !0),
        $(yE, {
          show: ae.value,
          state: ke.value.state,
          progress: ke.value.progress,
          message: ke.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        Se.value ? (n(), i("div", {
          key: 7,
          class: "dialog-overlay",
          onClick: j[26] || (j[26] = vt((et) => Se.value = !1, ["self"]))
        }, [
          s("div", dM, [
            s("div", mM, [
              j[39] || (j[39] = s("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              s("button", {
                class: "icon-btn",
                onClick: j[25] || (j[25] = (et) => Se.value = !1)
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
            s("div", fM, [
              j[40] || (j[40] = s("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              s("div", vM, [
                (n(!0), i(W, null, ye(D.value, (et) => (n(), i("div", {
                  key: et.name,
                  class: Be(["env-item", { current: et.is_current }])
                }, [
                  s("div", pM, [
                    s("div", gM, [
                      s("span", hM, m(et.is_current ? "●" : "○"), 1),
                      s("span", yM, m(et.name), 1),
                      et.current_branch ? (n(), i("span", wM, "(" + m(et.current_branch) + ")", 1)) : y("", !0),
                      et.is_current ? (n(), i("span", _M, "CURRENT")) : y("", !0)
                    ]),
                    s("div", kM, m(et.workflow_count) + " workflows • " + m(et.node_count) + " nodes ", 1)
                  ]),
                  !et.is_current && K.value.can_switch_environment ? (n(), i("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (zR) => re(et.name)
                  }, " SWITCH ", 8, bM)) : y("", !0)
                ], 2))), 128))
              ])
            ])
          ])
        ])) : y("", !0),
        we.value ? (n(), L(PT, {
          key: 8,
          "default-path": ((z = H.value) == null ? void 0 : z.default_path) || "~/comfygit",
          "detected-models-dir": (($e = H.value) == null ? void 0 : $e.detected_models_dir) || null,
          "initial-step": oe.value,
          "existing-environments": ((Ge = H.value) == null ? void 0 : Ge.environments) || [],
          "cli-installed": ((mt = H.value) == null ? void 0 : mt.cli_installed) ?? !0,
          "setup-state": ((Mt = H.value) == null ? void 0 : Mt.state) || "no_workspace",
          "workspace-path": ((ys = H.value) == null ? void 0 : ys.workspace_path) || null,
          onComplete: ba,
          onClose: $a,
          onSwitchEnvironment: Ca,
          onEnvironmentCreatedNoSwitch: Ea
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state", "workspace-path"])) : y("", !0),
        s("div", $M, [
          $(em, { name: "toast" }, {
            default: h(() => [
              (n(!0), i(W, null, ye(Le.value, (et) => (n(), i("div", {
                key: et.id,
                class: Be(["toast", et.type])
              }, [
                s("span", CM, m(et.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), SM = /* @__PURE__ */ Ie(xM, [["__scopeId", "data-v-93abae9b"]]), IM = { class: "item-header" }, EM = { class: "item-info" }, TM = { class: "filename" }, MM = { class: "metadata" }, PM = { class: "size" }, RM = {
  key: 0,
  class: "type"
}, LM = { class: "item-actions" }, DM = {
  key: 0,
  class: "progress-section"
}, NM = { class: "progress-bar" }, UM = { class: "progress-stats" }, OM = { class: "downloaded" }, AM = { class: "speed" }, zM = {
  key: 0,
  class: "eta"
}, FM = {
  key: 1,
  class: "status-msg paused"
}, VM = {
  key: 2,
  class: "status-msg queued"
}, BM = {
  key: 3,
  class: "status-msg completed"
}, WM = {
  key: 4,
  class: "status-msg failed"
}, GM = {
  key: 0,
  class: "retries"
}, jM = /* @__PURE__ */ xe({
  __name: "DownloadQueueItem",
  props: {
    item: {}
  },
  emits: ["cancel", "retry", "resume", "remove"],
  setup(e, { emit: t }) {
    const o = t;
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
      class: Be(["download-item", `status-${e.item.status}`])
    }, [
      s("div", IM, [
        s("div", EM, [
          s("div", TM, m(e.item.filename), 1),
          s("div", MM, [
            s("span", PM, m(a(e.item.size)), 1),
            e.item.type ? (n(), i("span", RM, m(e.item.type), 1)) : y("", !0)
          ])
        ]),
        s("div", LM, [
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
      e.item.status === "downloading" ? (n(), i("div", DM, [
        s("div", NM, [
          s("div", {
            class: "progress-fill",
            style: Dt({ width: `${e.item.progress}%` })
          }, null, 4)
        ]),
        s("div", UM, [
          s("span", OM, m(a(e.item.downloaded)) + " / " + m(a(e.item.size)), 1),
          s("span", AM, m(l(e.item.speed)), 1),
          e.item.eta > 0 ? (n(), i("span", zM, m(r(e.item.eta)), 1)) : y("", !0)
        ])
      ])) : e.item.status === "paused" ? (n(), i("div", FM, " Paused - click Resume to download ")) : e.item.status === "queued" ? (n(), i("div", VM, " Waiting in queue... ")) : e.item.status === "completed" ? (n(), i("div", BM, " ✓ Downloaded ")) : e.item.status === "failed" ? (n(), i("div", WM, [
        x(" ✗ " + m(e.item.error || "Failed") + " ", 1),
        e.item.retries > 0 ? (n(), i("span", GM, "(" + m(e.item.retries) + " retries)", 1)) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), Ho = /* @__PURE__ */ Ie(jM, [["__scopeId", "data-v-2110df65"]]), HM = { class: "queue-title" }, qM = { class: "count" }, KM = { class: "queue-actions" }, JM = { class: "action-label" }, QM = {
  key: 0,
  class: "overall-progress"
}, YM = { class: "progress-bar" }, XM = {
  key: 0,
  class: "current-mini"
}, ZM = { class: "filename" }, eP = { class: "speed" }, tP = {
  key: 1,
  class: "queue-content"
}, sP = {
  key: 0,
  class: "section"
}, oP = {
  key: 1,
  class: "section"
}, nP = { class: "section-header" }, aP = { class: "section-label paused" }, lP = { class: "items-list" }, iP = {
  key: 2,
  class: "section"
}, rP = { class: "section-header" }, cP = { class: "section-label" }, uP = { class: "items-list" }, dP = {
  key: 3,
  class: "section"
}, mP = { class: "section-header" }, fP = { class: "section-label" }, vP = { class: "items-list" }, pP = {
  key: 4,
  class: "section"
}, gP = { class: "section-header" }, hP = { class: "section-label failed" }, yP = { class: "items-list" }, wP = /* @__PURE__ */ xe({
  __name: "ModelDownloadQueue",
  setup(e) {
    const {
      queue: t,
      currentDownload: o,
      queuedItems: a,
      completedItems: l,
      failedItems: r,
      pausedItems: c,
      hasItems: u,
      activeCount: d,
      cancelDownload: v,
      retryDownload: f,
      resumeDownload: p,
      resumeAllPaused: w,
      removeItem: g,
      clearCompleted: _
    } = zo(), b = k(!1);
    let S = null;
    gt(
      () => ({
        active: d.value,
        failed: r.value.length,
        paused: c.value.length,
        completed: l.value.length
      }),
      (M, N) => {
        S && (clearTimeout(S), S = null);
        const F = M.active === 0 && M.failed === 0 && M.paused === 0 && M.completed > 0, V = N && (N.active > 0 || N.paused > 0);
        F && V && (S = setTimeout(() => {
          _(), S = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const C = R(() => {
      var F;
      if (t.items.length === 0) return 0;
      const M = l.value.length, N = ((F = o.value) == null ? void 0 : F.progress) || 0;
      return Math.round((M + N / 100) / t.items.length * 100);
    });
    function I(M) {
      v(M);
    }
    function E(M) {
      return M === 0 ? "..." : `${(M / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (M, N) => (n(), L(Yt, { to: "body" }, [
      ot(u) ? (n(), i("div", {
        key: 0,
        class: Be(["model-download-queue", { minimized: !b.value }])
      }, [
        s("div", {
          class: "queue-header",
          onClick: N[0] || (N[0] = (F) => b.value = !b.value)
        }, [
          s("div", HM, [
            N[4] || (N[4] = s("span", { class: "icon" }, "↓", -1)),
            N[5] || (N[5] = s("span", { class: "title" }, "Downloads", -1)),
            s("span", qM, "(" + m(ot(d)) + "/" + m(ot(t).items.length) + ")", 1)
          ]),
          s("div", KM, [
            s("span", JM, m(b.value ? "minimize" : "expand"), 1)
          ])
        ]),
        b.value ? (n(), i("div", tP, [
          ot(o) ? (n(), i("div", sP, [
            N[6] || (N[6] = s("div", { class: "section-label" }, "Downloading", -1)),
            $(Ho, {
              item: ot(o),
              onCancel: N[1] || (N[1] = (F) => I(ot(o).id))
            }, null, 8, ["item"])
          ])) : y("", !0),
          ot(c).length > 0 ? (n(), i("div", oP, [
            s("div", nP, [
              s("span", aP, "Paused (" + m(ot(c).length) + ")", 1),
              s("button", {
                class: "resume-all-btn",
                onClick: N[2] || (N[2] = //@ts-ignore
                (...F) => ot(w) && ot(w)(...F))
              }, "Resume All")
            ]),
            s("div", lP, [
              (n(!0), i(W, null, ye(ot(c), (F) => (n(), L(Ho, {
                key: F.id,
                item: F,
                onResume: (V) => ot(p)(F.id),
                onRemove: (V) => ot(g)(F.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          ot(a).length > 0 ? (n(), i("div", iP, [
            s("div", rP, [
              s("span", cP, "Queued (" + m(ot(a).length) + ")", 1)
            ]),
            s("div", uP, [
              (n(!0), i(W, null, ye(ot(a), (F) => (n(), L(Ho, {
                key: F.id,
                item: F,
                onCancel: (V) => I(F.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : y("", !0),
          ot(l).length > 0 ? (n(), i("div", dP, [
            s("div", mP, [
              s("span", fP, "Completed (" + m(ot(l).length) + ")", 1),
              s("button", {
                class: "clear-btn",
                onClick: N[3] || (N[3] = //@ts-ignore
                (...F) => ot(_) && ot(_)(...F))
              }, "Clear")
            ]),
            s("div", vP, [
              (n(!0), i(W, null, ye(ot(l).slice(0, 3), (F) => (n(), L(Ho, {
                key: F.id,
                item: F,
                onRemove: (V) => ot(g)(F.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          ot(r).length > 0 ? (n(), i("div", pP, [
            s("div", gP, [
              s("span", hP, "Failed (" + m(ot(r).length) + ")", 1)
            ]),
            s("div", yP, [
              (n(!0), i(W, null, ye(ot(r), (F) => (n(), L(Ho, {
                key: F.id,
                item: F,
                onRetry: (V) => ot(f)(F.id),
                onRemove: (V) => ot(g)(F.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : y("", !0)
        ])) : (n(), i("div", QM, [
          s("div", YM, [
            s("div", {
              class: "progress-fill",
              style: Dt({ width: `${C.value}%` })
            }, null, 4)
          ]),
          ot(o) ? (n(), i("div", XM, [
            s("span", ZM, m(ot(o).filename), 1),
            s("span", eP, m(E(ot(o).speed)), 1)
          ])) : y("", !0)
        ]))
      ], 2)) : y("", !0)
    ]));
  }
}), _P = /* @__PURE__ */ Ie(wP, [["__scopeId", "data-v-3a3c9607"]]), kP = { class: "detail-header" }, bP = { class: "item-count" }, $P = { class: "resource-list" }, CP = { class: "item-info" }, xP = { class: "item-name" }, SP = {
  key: 0,
  class: "item-subtitle"
}, IP = {
  key: 0,
  class: "installing-badge"
}, EP = ["title"], TP = {
  key: 2,
  class: "installed-badge"
}, MP = {
  key: 3,
  class: "queued-badge"
}, PP = {
  key: 4,
  class: "action-buttons"
}, RP = {
  key: 1,
  class: "no-action"
}, LP = /* @__PURE__ */ xe({
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
    const o = e, a = t, l = R(() => o.items.filter((g) => g.canAction)), r = R(() => l.value.length > 0 && l.value.every(
      (g) => {
        var _, b;
        return o.queuedItems.has(g.id) || ((_ = o.installedItems) == null ? void 0 : _.has(g.id)) || ((b = o.failedItems) == null ? void 0 : b.has(g.id));
      }
    )), c = R(() => r.value ? "All Queued" : o.itemType === "models" ? "Download All" : "Install All");
    function u(g) {
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
    return (g, _) => (n(), L($t, {
      title: e.title,
      size: "md",
      onClose: _[2] || (_[2] = (b) => a("close"))
    }, {
      body: h(() => [
        s("div", kP, [
          s("span", bP, m(e.items.length) + " " + m(e.items.length === 1 ? "item" : "items"), 1),
          l.value.length > 1 ? (n(), L(Ue, {
            key: 0,
            size: "sm",
            variant: "secondary",
            disabled: r.value,
            onClick: _[0] || (_[0] = (b) => a("bulk-action"))
          }, {
            default: h(() => [
              x(m(c.value), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : y("", !0)
        ]),
        s("div", $P, [
          (n(!0), i(W, null, ye(e.items, (b) => (n(), i("div", {
            key: b.id,
            class: "resource-item"
          }, [
            s("div", CP, [
              s("span", xP, m(b.name), 1),
              b.subtitle ? (n(), i("span", SP, m(b.subtitle), 1)) : y("", !0)
            ]),
            b.canAction ? (n(), i(W, { key: 0 }, [
              d(b) ? (n(), i("span", IP, "Installing...")) : f(b) ? (n(), i("span", {
                key: 1,
                class: "failed-badge",
                title: p(b)
              }, "Failed ⚠", 8, EP)) : v(b) ? (n(), i("span", TP, "Installed")) : u(b) ? (n(), i("span", MP, "Queued")) : (n(), i("div", PP, [
                (n(!0), i(W, null, ye(w(b), (S) => (n(), L(Ue, {
                  key: `${b.id}-${S.key}`,
                  size: "sm",
                  variant: S.variant || "secondary",
                  onClick: (C) => a("action", b, S.key)
                }, {
                  default: h(() => [
                    x(m(S.label), 1)
                  ]),
                  _: 2
                }, 1032, ["variant", "onClick"]))), 128))
              ]))
            ], 64)) : (n(), i("span", RP, m(b.actionDisabledReason || "Not available"), 1))
          ]))), 128))
        ])
      ]),
      footer: h(() => [
        $(Ue, {
          variant: "secondary",
          onClick: _[1] || (_[1] = (b) => a("close"))
        }, {
          default: h(() => [..._[3] || (_[3] = [
            x("Close", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), DP = /* @__PURE__ */ Ie(LP, [["__scopeId", "data-v-ec7e9202"]]), NP = {
  key: 0,
  class: "loading-state"
}, UP = {
  key: 1,
  class: "analysis-results"
}, OP = {
  key: 0,
  class: "section"
}, AP = { class: "section-header" }, zP = { class: "section-title" }, FP = { class: "item-list" }, VP = { class: "package-info" }, BP = { class: "package-name" }, WP = { class: "node-count" }, GP = {
  key: 1,
  class: "installing-badge"
}, jP = {
  key: 2,
  class: "queued-badge"
}, HP = ["title"], qP = {
  key: 4,
  class: "installed-badge"
}, KP = {
  key: 1,
  class: "section"
}, JP = { class: "section-header" }, QP = { class: "section-title" }, YP = { class: "item-list" }, XP = { class: "node-type" }, ZP = {
  key: 0,
  class: "overflow-note"
}, e7 = {
  key: 2,
  class: "section"
}, t7 = { class: "section-header" }, s7 = { class: "section-title" }, o7 = { class: "item-list" }, n7 = { class: "node-type" }, a7 = { class: "not-found" }, l7 = {
  key: 0,
  class: "overflow-note"
}, i7 = {
  key: 3,
  class: "section"
}, r7 = { class: "section-header" }, c7 = { class: "section-title" }, u7 = { class: "item-list" }, d7 = { class: "package-info community-info" }, m7 = { class: "community-title-row" }, f7 = { class: "package-name" }, v7 = { class: "node-count" }, p7 = { class: "community-mapping-note" }, g7 = { key: 0 }, h7 = {
  key: 0,
  class: "community-actions"
}, y7 = {
  key: 1,
  class: "installing-badge"
}, w7 = {
  key: 2,
  class: "queued-badge"
}, _7 = ["title"], k7 = {
  key: 4,
  class: "installed-badge"
}, b7 = ["title"], $7 = {
  key: 1,
  class: "no-url"
}, C7 = {
  key: 4,
  class: "section"
}, x7 = { class: "section-header" }, S7 = { class: "section-title" }, I7 = { class: "item-list" }, E7 = { class: "model-info" }, T7 = { class: "model-name" }, M7 = {
  key: 1,
  class: "queued-badge"
}, P7 = {
  key: 1,
  class: "no-url"
}, R7 = { class: "dont-show-again" }, L7 = 3e4, D7 = /* @__PURE__ */ xe({
  __name: "MissingResourcesPopup",
  setup(e) {
    const t = k(!1), o = k(null), a = k(null), l = k(!1), r = k(/* @__PURE__ */ new Set()), c = k(/* @__PURE__ */ new Set()), u = k(/* @__PURE__ */ new Map()), d = k(/* @__PURE__ */ new Set()), v = k(!1), f = k(null), p = k(0), w = k(null), g = k(/* @__PURE__ */ new Set()), _ = k(/* @__PURE__ */ new Map()), b = k(/* @__PURE__ */ new Map()), { addToQueue: S } = zo(), { queueNodeInstall: C } = ct(), I = R(() => {
      var Q;
      return ((Q = a.value) == null ? void 0 : Q.package_aliases) || {};
    });
    function E(Q) {
      if (!Q) return null;
      const pe = I.value;
      let P = Q;
      const U = /* @__PURE__ */ new Set();
      for (; pe[P] && !U.has(P); )
        U.add(P), P = pe[P];
      return P;
    }
    function M(Q, pe) {
      return Q instanceof Error && Q.message ? Q.message : typeof Q == "string" && Q.trim().length > 0 ? Q : pe;
    }
    function N(Q) {
      for (const [pe, P] of _.value.entries())
        P === Q && _.value.delete(pe);
    }
    function F(Q) {
      if (!b.value.has(Q)) return;
      const pe = b.value.get(Q);
      clearTimeout(pe), b.value.delete(Q);
    }
    function V() {
      for (const Q of b.value.values())
        clearTimeout(Q);
      b.value = /* @__PURE__ */ new Map();
    }
    function D(Q) {
      F(Q);
      const pe = setTimeout(() => {
        if (b.value.delete(Q), !c.value.has(Q)) return;
        N(Q), c.value.delete(Q), f.value === Q && (f.value = null), u.value.set(Q, "Queue timeout — please retry"), console.warn("[ComfyGit] Queue timeout waiting for cm-task-started:", Q);
      }, L7);
      b.value.set(Q, pe);
    }
    function q(Q) {
      const pe = `Cannot install "${Q.title}" - package_id is missing`;
      u.value.set(Q.item_id, pe), o.value = pe, console.warn("[ComfyGit] Community install requested without package_id:", Q);
    }
    const ue = R(() => le.value.length > 0 || me.value.length > 0 || ne.value.length > 0 || B.value.length > 0 || ee.value.length > 0), le = R(() => {
      var P, U;
      if (!((P = a.value) != null && P.nodes)) return [];
      const Q = /* @__PURE__ */ new Map(), pe = (a.value.nodes.resolved || []).filter((J) => {
        var Te;
        return !J.is_installed && ((Te = J.package) == null ? void 0 : Te.package_id);
      });
      for (const J of pe) {
        const Te = E(J.package.package_id);
        if (!Te) continue;
        Q.has(Te) || Q.set(Te, {
          package_id: Te,
          title: J.package.title || Te,
          node_count: 0,
          node_types: [],
          repository: J.package.repository || null,
          latest_version: J.package.latest_version || null
        });
        const Le = Q.get(Te);
        Le.node_count++, Le.node_types.push(((U = J.reference) == null ? void 0 : U.node_type) || J.node_type);
      }
      return Array.from(Q.values());
    }), Y = R(() => le.value.reduce((Q, pe) => Q + pe.node_count, 0)), me = R(() => {
      var Q;
      return (Q = a.value) != null && Q.nodes ? (a.value.nodes.unresolved || []).map((pe) => {
        var P;
        return {
          node_type: ((P = pe.reference) == null ? void 0 : P.node_type) || pe.node_type
        };
      }) : [];
    }), ne = R(() => {
      var pe;
      if (!((pe = a.value) != null && pe.nodes)) return [];
      const Q = a.value.node_guidance || {};
      return (a.value.nodes.version_gated || []).map((P) => {
        var J;
        const U = ((J = P.reference) == null ? void 0 : J.node_type) || P.node_type;
        return {
          node_type: U,
          guidance: P.guidance || Q[U] || null
        };
      });
    }), B = R(() => {
      var P, U, J, Te, Le, Ke, Pe, Ye;
      if (!((P = a.value) != null && P.nodes)) return [];
      const Q = a.value.node_guidance || {}, pe = /* @__PURE__ */ new Map();
      for (const nt of a.value.nodes.uninstallable || []) {
        const St = ((U = nt.reference) == null ? void 0 : U.node_type) || nt.node_type, Vt = E(((J = nt.package) == null ? void 0 : J.package_id) || null), Ct = Vt || `node:${St}`;
        pe.has(Ct) || pe.set(Ct, {
          item_id: Ct,
          node_type: St,
          title: ((Te = nt.package) == null ? void 0 : Te.title) || Vt || St,
          node_count: 0,
          package_id: Vt,
          repository: ((Le = nt.package) == null ? void 0 : Le.repository) || null,
          latest_version: ((Ke = nt.package) == null ? void 0 : Ke.latest_version) || null,
          guidance: nt.guidance || Q[St] || null
        });
        const Tt = pe.get(Ct);
        Tt.node_count++, Tt.guidance || (Tt.guidance = nt.guidance || Q[St] || null), !Tt.repository && ((Pe = nt.package) != null && Pe.repository) && (Tt.repository = nt.package.repository), !Tt.latest_version && ((Ye = nt.package) != null && Ye.latest_version) && (Tt.latest_version = nt.package.latest_version);
      }
      return Array.from(pe.values());
    }), H = R(() => B.value.filter((Q) => !!K(Q))), we = R(() => B.value.length >= 5 ? B.value.slice(0, 4) : B.value), oe = R(() => H.value.length > 0 && H.value.every((Q) => {
      const pe = Q.package_id;
      return r.value.has(pe) || c.value.has(pe) || u.value.has(pe);
    }));
    function de(Q) {
      const pe = [];
      return ce(Q) && pe.push({ key: "install_registry", label: "Install from Registry", variant: "secondary" }), Q.repository && pe.push({
        key: "install_git",
        label: "Install via Git",
        variant: ce(Q) ? "ghost" : "secondary"
      }), pe;
    }
    function ce(Q) {
      return !!Q.latest_version;
    }
    function K(Q) {
      return Q.package_id ? ce(Q) ? "registry" : Q.repository ? "git" : null : null;
    }
    const ee = R(() => {
      var J;
      if (!((J = a.value) != null && J.models)) return [];
      const Q = (a.value.models.resolved || []).filter(
        (Te) => Te.match_type === "download_intent" || Te.match_type === "property_download_intent" || Te.match_type === "not_found"
      ).map((Te) => {
        var Le, Ke, Pe, Ye;
        return {
          filename: ((Ke = (Le = Te.reference) == null ? void 0 : Le.widget_value) == null ? void 0 : Ke.split("/").pop()) || ((Pe = Te.reference) == null ? void 0 : Pe.widget_value) || Te.widget_value,
          widget_value: ((Ye = Te.reference) == null ? void 0 : Ye.widget_value) || Te.widget_value,
          // Backend returns download_source as URL string directly, and target_path at top level
          url: Te.download_source || null,
          targetPath: Te.target_path || null,
          canDownload: !!(Te.download_source && Te.target_path)
        };
      }), pe = (a.value.models.unresolved || []).map((Te) => {
        var Le, Ke, Pe, Ye;
        return {
          filename: ((Ke = (Le = Te.reference) == null ? void 0 : Le.widget_value) == null ? void 0 : Ke.split("/").pop()) || ((Pe = Te.reference) == null ? void 0 : Pe.widget_value) || Te.widget_value,
          widget_value: ((Ye = Te.reference) == null ? void 0 : Ye.widget_value) || Te.widget_value,
          url: null,
          targetPath: null,
          canDownload: !1
        };
      }), P = /* @__PURE__ */ new Map(), U = [];
      for (const Te of Q) {
        if (!Te.url) {
          U.push(Te);
          continue;
        }
        const Le = `${Te.filename}::${Te.url}`, Ke = P.get(Le);
        if (!Ke) {
          P.set(Le, Te);
          continue;
        }
        !Ke.targetPath && Te.targetPath && (Ke.targetPath = Te.targetPath), !Ke.canDownload && Te.canDownload && (Ke.canDownload = Te.canDownload);
      }
      return [...P.values(), ...U, ...pe];
    }), te = R(() => ee.value.filter((Q) => Q.canDownload)), Me = R(() => le.value.length >= 5 ? le.value.slice(0, 4) : le.value), Se = R(() => ee.value.length >= 5 ? ee.value.slice(0, 4) : ee.value), ze = R(() => le.value.length > 0 && le.value.every(
      (Q) => r.value.has(Q.package_id) || c.value.has(Q.package_id) || u.value.has(Q.package_id)
    )), Ne = R(() => te.value.length > 0 && te.value.every((Q) => d.value.has(Q.url))), be = R(() => le.value.length > 0 || H.value.length > 0 || te.value.length > 0), Ae = R(() => {
      const Q = (le.value.length === 0 || ze.value) && (H.value.length === 0 || oe.value), pe = te.value.length === 0 || Ne.value;
      return Q && pe;
    }), ge = R(() => w.value === "models" ? `Missing Models (${ee.value.length})` : w.value === "packages" ? `Missing Custom Nodes (${Y.value})` : w.value === "community" ? `Community-Mapped Packages (${B.value.length})` : ""), ve = R(() => w.value === "models" ? ee.value.map((Q) => ({
      id: Q.url || Q.widget_value,
      name: Q.filename,
      canAction: Q.canDownload,
      actionDisabledReason: Q.canDownload ? void 0 : "Manual download required"
    })) : w.value === "packages" ? le.value.map((Q) => ({
      id: Q.package_id,
      name: Q.title,
      subtitle: `(${Q.node_count} ${Q.node_count === 1 ? "node" : "nodes"})`,
      canAction: !0
    })) : w.value === "community" ? B.value.map((Q) => ({
      id: Q.package_id || Q.item_id,
      name: Q.title,
      subtitle: `(${Q.node_count} ${Q.node_count === 1 ? "node" : "nodes"})`,
      canAction: !!K(Q),
      actionDisabledReason: K(Q) ? void 0 : "Manual setup required",
      actions: de(Q)
    })) : []);
    function T(Q, pe) {
      if (w.value === "models") {
        const P = ee.value.find((U) => U.url === Q.id || U.widget_value === Q.id);
        P && ke(P);
      } else if (w.value === "packages") {
        const P = le.value.find((U) => U.package_id === Q.id);
        P && ae(P);
      } else if (w.value === "community") {
        const P = B.value.find((J) => (J.package_id || J.item_id) === Q.id);
        if (!P) return;
        if (!P.package_id) {
          q({ item_id: P.item_id, title: P.title });
          return;
        }
        const U = pe === "install_git" ? "git" : "registry";
        if (U === "registry" && !ce(P)) {
          q({ item_id: P.item_id, title: P.title });
          return;
        }
        Ce(P, U);
      }
    }
    function A() {
      w.value === "models" ? fe() : w.value === "packages" ? X() : w.value === "community" && G();
    }
    async function ae(Q) {
      return Ee(Q.package_id, Q.latest_version, "registry");
    }
    async function Ce(Q, pe) {
      return Q.package_id ? pe === "registry" && !ce(Q) ? (u.value.set(Q.package_id, "No installable registry version is available. Use Git install if a repository is available."), !1) : pe === "git" && !Q.repository ? (u.value.set(Q.package_id, "No Git repository is available for this community mapping."), !1) : Ee(Q.package_id, Q.latest_version, pe, Q.repository) : (q({ item_id: Q.item_id, title: Q.title }), !1);
    }
    async function Ee(Q, pe, P, U) {
      const J = E(Q) || Q, Te = pe || "latest";
      if (r.value.has(J) || c.value.has(J) || u.value.has(J))
        return !0;
      Qe(), f.value = J;
      let Le = null;
      try {
        const Ke = {
          id: J,
          version: Te,
          selected_version: Te,
          mode: "remote",
          channel: "default"
        };
        P === "git" && U && (Ke.repository = U, Ke.install_source = "git");
        const { ui_id: Pe } = await C(Ke, {
          beforeQueueStart: (Ye) => {
            Le = Ye, _.value.set(Ye, J), c.value.add(J), D(J), console.log("[ComfyGit] Registered pending install:", {
              ui_id: Ye,
              packageId: J,
              pendingInstalls: Array.from(_.value.entries())
            });
          }
        });
        return Le || (Le = Pe, _.value.set(Pe, J), c.value.add(J), D(J), console.log("[ComfyGit] Registered pending install (fallback):", {
          ui_id: Pe,
          packageId: J,
          pendingInstalls: Array.from(_.value.entries())
        })), !0;
      } catch (Ke) {
        const Pe = M(Ke, "Failed to queue install request");
        return console.error("[ComfyGit] Failed to queue package install:", Ke), Le && _.value.delete(Le), N(J), F(J), c.value.delete(J), u.value.set(J, Pe), !1;
      } finally {
        f.value = null;
      }
    }
    function ke(Q) {
      !Q.url || !Q.targetPath || d.value.has(Q.url) || (S([{
        workflow: "unsaved",
        filename: Q.filename,
        url: Q.url,
        targetPath: Q.targetPath
      }]), d.value.add(Q.url));
    }
    async function X() {
      const Q = { attempted: 0, failed: 0 };
      for (const pe of le.value)
        !r.value.has(pe.package_id) && !c.value.has(pe.package_id) && !u.value.has(pe.package_id) && (Q.attempted++, await ae(pe) || Q.failed++);
      return Q;
    }
    async function G() {
      const Q = { attempted: 0, failed: 0 };
      for (const pe of H.value) {
        const P = pe.package_id;
        if (!r.value.has(P) && !c.value.has(P) && !u.value.has(P)) {
          Q.attempted++;
          const U = K(pe);
          (U ? await Ce(pe, U) : !1) || Q.failed++;
        }
      }
      return Q;
    }
    function fe() {
      const Q = te.value.filter(
        (pe) => !d.value.has(pe.url)
      );
      if (Q.length === 0) return 0;
      S(Q.map((pe) => ({
        workflow: "unsaved",
        filename: pe.filename,
        url: pe.url,
        targetPath: pe.targetPath
      })));
      for (const pe of Q)
        d.value.add(pe.url);
      return Q.length;
    }
    async function he() {
      const Q = await X(), pe = await G();
      fe();
      const P = Q.attempted + pe.attempted, U = Q.failed + pe.failed;
      if (P > 0 && U > 0) {
        const J = P - U;
        o.value = `${J} of ${P} installs queued, ${U} failed`;
      }
    }
    function je() {
      v.value ? localStorage.setItem("comfygit:popup-disabled", "true") : localStorage.removeItem("comfygit:popup-disabled");
    }
    async function We(Q) {
      var J, Te;
      if (localStorage.getItem("comfygit:popup-disabled") === "true") {
        console.log("[ComfyGit] Popup globally disabled");
        return;
      }
      const pe = Q == null ? void 0 : Q.id;
      if (pe && g.value.has(pe)) {
        console.log(`[ComfyGit] Already shown popup for workflow ${pe} this session`);
        return;
      }
      const P = window.app, U = (J = P == null ? void 0 : P.extensionManager) == null ? void 0 : J.workflow;
      if (U) {
        let Pe = !1;
        for (let Ye = 0; Ye < 20; Ye++) {
          const nt = U.activeWorkflow;
          if (!nt) {
            await new Promise((Ct) => setTimeout(Ct, 50));
            continue;
          }
          const St = (Te = nt.activeState) == null ? void 0 : Te.id;
          if (!(pe && St === pe)) {
            Ye < 19 && await new Promise((Ct) => setTimeout(Ct, 50));
            continue;
          }
          if (Pe = !0, nt.isPersisted === !0) {
            console.log(`[ComfyGit] Skipping popup for saved workflow: ${nt.filename}`), pe && g.value.add(pe);
            return;
          }
          break;
        }
        Pe || console.warn("[ComfyGit] Could not verify workflow state, showing popup as fallback");
      }
      t.value = !0, o.value = null, V(), r.value = /* @__PURE__ */ new Set(), c.value = /* @__PURE__ */ new Set(), u.value = /* @__PURE__ */ new Map(), d.value = /* @__PURE__ */ new Set(), _.value = /* @__PURE__ */ new Map(), v.value = !1, p.value = 0;
      try {
        const Le = await fetch("/v2/comfygit/workflow/analyze-json", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ workflow: Q, name: "unsaved" })
        });
        if (!Le.ok) {
          const Ke = await Le.json();
          throw new Error(Ke.error || "Failed to analyze workflow");
        }
        a.value = await Le.json(), ue.value && (l.value = !0, pe && g.value.add(pe));
      } catch (Le) {
        console.error("[ComfyGit] Failed to analyze workflow:", Le);
      } finally {
        t.value = !1;
      }
    }
    function _e() {
      V(), l.value = !1, a.value = null;
    }
    function Z(Q) {
      const { workflow: pe } = Q.detail;
      pe && We(pe);
    }
    function Fe(Q) {
      var U;
      const pe = (U = Q.detail) == null ? void 0 : U.ui_id;
      console.log("[ComfyGit] cm-task-started received:", {
        taskId: pe,
        pendingInstalls: Array.from(_.value.entries()),
        eventDetail: Q.detail
      });
      const P = _.value.get(pe);
      P ? (F(P), f.value = P, console.log("[ComfyGit] Installing package:", P)) : console.warn("[ComfyGit] cm-task-started: No matching package for taskId:", pe);
    }
    function De(Q) {
      var J, Te, Le, Ke, Pe, Ye, nt;
      const pe = (J = Q.detail) == null ? void 0 : J.ui_id, P = (Le = (Te = Q.detail) == null ? void 0 : Te.status) == null ? void 0 : Le.status_str;
      console.log("[ComfyGit] cm-task-completed received:", {
        taskId: pe,
        status: P,
        pendingInstalls: Array.from(_.value.entries()),
        eventDetail: Q.detail
      });
      const U = _.value.get(pe);
      if (U) {
        if (F(U), _.value.delete(pe), c.value.delete(U), f.value === U && (f.value = null), P === "success")
          r.value.add(U), p.value++, console.log("[ComfyGit] Package installed successfully:", U);
        else {
          const St = ((Ye = (Pe = (Ke = Q.detail) == null ? void 0 : Ke.status) == null ? void 0 : Pe.messages) == null ? void 0 : Ye[0]) || ((nt = Q.detail) == null ? void 0 : nt.result) || "Unknown error";
          u.value.set(U, St), console.error("[ComfyGit] Package install failed:", U, St);
        }
        _.value.size === 0 && p.value > 0 && (console.log("[ComfyGit] All installs complete, dispatching nodes-installed event:", p.value), window.dispatchEvent(new CustomEvent("comfygit:nodes-installed", {
          detail: { count: p.value }
        })));
      } else
        console.warn("[ComfyGit] cm-task-completed: No matching package for taskId:", pe);
    }
    let He = null;
    function Ve() {
      return He || (He = Ao()), He;
    }
    let Oe = !1;
    function Qe() {
      if (Oe) return !0;
      const Q = Ve();
      return Q ? (Q.addEventListener("cm-task-started", Fe), Q.addEventListener("cm-task-completed", De), Q.addEventListener("comfygit:workflow-changed", pt), Oe = !0, console.log("[ComfyGit] Registered WebSocket event listeners for install tracking"), !0) : (console.warn("[ComfyGit] Could not register WebSocket listeners - API not available"), !1);
    }
    function pt(Q) {
      const { change_type: pe } = Q.detail;
      (pe === "created" || pe === "modified") && l.value && (V(), l.value = !1, console.log("[ComfyGit] Workflow saved, auto-dismissing popup"));
    }
    return lt(() => {
      window.addEventListener("comfygit:workflow-loaded", Z);
    }), Uo(() => {
      if (V(), window.removeEventListener("comfygit:workflow-loaded", Z), Oe) {
        const Q = Ve();
        Q && (Q.removeEventListener("cm-task-started", Fe), Q.removeEventListener("cm-task-completed", De), Q.removeEventListener("comfygit:workflow-changed", pt)), Oe = !1;
      }
    }), (Q, pe) => (n(), i(W, null, [
      l.value ? (n(), L($t, {
        key: 0,
        title: "Missing Dependencies",
        size: "md",
        loading: t.value,
        error: o.value || void 0,
        onClose: _e
      }, {
        body: h(() => [
          t.value ? (n(), i("div", NP, [...pe[5] || (pe[5] = [
            s("div", { class: "loading-spinner" }, null, -1),
            s("span", null, "Analyzing workflow...", -1)
          ])])) : a.value && ue.value ? (n(), i("div", UP, [
            le.value.length > 0 ? (n(), i("div", OP, [
              s("div", AP, [
                s("span", zP, "Missing Custom Nodes (" + m(Y.value) + ")", 1),
                le.value.length > 1 ? (n(), L(Ue, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: ze.value,
                  onClick: X
                }, {
                  default: h(() => [
                    x(m(ze.value ? "All Queued" : "Install All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0)
              ]),
              s("div", FP, [
                (n(!0), i(W, null, ye(Me.value, (P) => (n(), i("div", {
                  key: P.package_id,
                  class: "package-item"
                }, [
                  s("div", VP, [
                    s("span", BP, m(P.title), 1),
                    s("span", WP, "(" + m(P.node_count) + " " + m(P.node_count === 1 ? "node" : "nodes") + ")", 1)
                  ]),
                  !r.value.has(P.package_id) && !c.value.has(P.package_id) && !u.value.has(P.package_id) ? (n(), L(Ue, {
                    key: 0,
                    size: "sm",
                    variant: "secondary",
                    disabled: f.value === P.package_id,
                    onClick: (U) => ae(P)
                  }, {
                    default: h(() => [
                      x(m(f.value === P.package_id ? "Queueing..." : "Install"), 1)
                    ]),
                    _: 2
                  }, 1032, ["disabled", "onClick"])) : f.value === P.package_id ? (n(), i("span", GP, "Installing...")) : c.value.has(P.package_id) ? (n(), i("span", jP, "Queued")) : u.value.has(P.package_id) ? (n(), i("span", {
                    key: 3,
                    class: "failed-badge",
                    title: u.value.get(P.package_id)
                  }, "Failed ⚠", 8, HP)) : (n(), i("span", qP, "Installed"))
                ]))), 128)),
                le.value.length >= 5 ? (n(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: pe[0] || (pe[0] = (P) => w.value = "packages")
                }, [
                  s("span", null, "Show all " + m(le.value.length) + " packages...", 1),
                  pe[6] || (pe[6] = s("span", { class: "show-all-arrow" }, "→", -1))
                ])) : y("", !0)
              ])
            ])) : y("", !0),
            me.value.length > 0 ? (n(), i("div", KP, [
              s("div", JP, [
                s("span", QP, "Unknown Nodes (" + m(me.value.length) + ")", 1)
              ]),
              s("div", YP, [
                (n(!0), i(W, null, ye(me.value.slice(0, 5), (P) => (n(), i("div", {
                  key: P.node_type,
                  class: "item"
                }, [
                  s("code", XP, m(P.node_type), 1),
                  pe[7] || (pe[7] = s("span", { class: "not-found" }, "Not found in registry", -1))
                ]))), 128)),
                me.value.length > 5 ? (n(), i("div", ZP, " ...and " + m(me.value.length - 5) + " more ", 1)) : y("", !0)
              ])
            ])) : y("", !0),
            ne.value.length > 0 ? (n(), i("div", e7, [
              s("div", t7, [
                s("span", s7, "Requires Newer ComfyUI (" + m(ne.value.length) + ")", 1)
              ]),
              s("div", o7, [
                (n(!0), i(W, null, ye(ne.value.slice(0, 5), (P) => (n(), i("div", {
                  key: `vg-${P.node_type}`,
                  class: "item"
                }, [
                  s("code", n7, m(P.node_type), 1),
                  s("span", a7, m(P.guidance || "Requires a newer ComfyUI version"), 1)
                ]))), 128)),
                ne.value.length > 5 ? (n(), i("div", l7, " ...and " + m(ne.value.length - 5) + " more ", 1)) : y("", !0)
              ])
            ])) : y("", !0),
            B.value.length > 0 ? (n(), i("div", i7, [
              s("div", r7, [
                s("span", c7, "Community-Mapped Packages (" + m(B.value.length) + ")", 1),
                H.value.length > 1 ? (n(), L(Ue, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: oe.value,
                  onClick: G
                }, {
                  default: h(() => [
                    x(m(oe.value ? "All Queued" : "Install All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0)
              ]),
              s("div", u7, [
                (n(!0), i(W, null, ye(we.value, (P) => (n(), i("div", {
                  key: `community-${P.item_id}`,
                  class: "package-item"
                }, [
                  s("div", d7, [
                    s("div", m7, [
                      s("span", f7, m(P.title), 1),
                      s("span", v7, "(" + m(P.node_count) + " " + m(P.node_count === 1 ? "node" : "nodes") + ")", 1)
                    ]),
                    s("div", p7, [
                      pe[8] || (pe[8] = x(" Found via community mapping — registry metadata may be incomplete", -1)),
                      P.guidance ? (n(), i("span", g7, ". " + m(P.guidance), 1)) : y("", !0)
                    ])
                  ]),
                  P.package_id ? (n(), i(W, { key: 0 }, [
                    !r.value.has(P.package_id) && !c.value.has(P.package_id) && !u.value.has(P.package_id) ? (n(), i("div", h7, [
                      ce(P) ? (n(), L(Ue, {
                        key: 0,
                        size: "sm",
                        variant: "secondary",
                        disabled: f.value === P.package_id,
                        onClick: (U) => Ce(P, "registry")
                      }, {
                        default: h(() => [
                          x(m(f.value === P.package_id ? "Queueing..." : "Install from Registry"), 1)
                        ]),
                        _: 2
                      }, 1032, ["disabled", "onClick"])) : y("", !0),
                      P.repository ? (n(), L(Ue, {
                        key: 1,
                        size: "sm",
                        variant: ce(P) ? "ghost" : "secondary",
                        disabled: f.value === P.package_id,
                        onClick: (U) => Ce(P, "git")
                      }, {
                        default: h(() => [...pe[9] || (pe[9] = [
                          x(" Install via Git ", -1)
                        ])]),
                        _: 1
                      }, 8, ["variant", "disabled", "onClick"])) : y("", !0)
                    ])) : f.value === P.package_id ? (n(), i("span", y7, "Installing...")) : c.value.has(P.package_id) ? (n(), i("span", w7, "Queued")) : u.value.has(P.package_id) ? (n(), i("span", {
                      key: 3,
                      class: "failed-badge",
                      title: u.value.get(P.package_id)
                    }, "Failed ⚠", 8, _7)) : (n(), i("span", k7, "Installed"))
                  ], 64)) : (n(), i(W, { key: 1 }, [
                    u.value.has(P.item_id) ? (n(), i("span", {
                      key: 0,
                      class: "failed-badge",
                      title: u.value.get(P.item_id)
                    }, "Failed ⚠", 8, b7)) : (n(), i("span", $7, "Manual setup required"))
                  ], 64))
                ]))), 128)),
                B.value.length >= 5 ? (n(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: pe[1] || (pe[1] = (P) => w.value = "community")
                }, [
                  s("span", null, "Show all " + m(B.value.length) + " packages...", 1),
                  pe[10] || (pe[10] = s("span", { class: "show-all-arrow" }, "→", -1))
                ])) : y("", !0)
              ])
            ])) : y("", !0),
            ee.value.length > 0 ? (n(), i("div", C7, [
              s("div", x7, [
                s("span", S7, "Missing Models (" + m(ee.value.length) + ")", 1),
                te.value.length > 1 ? (n(), L(Ue, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: Ne.value,
                  onClick: fe
                }, {
                  default: h(() => [
                    x(m(Ne.value ? "All Queued" : "Download All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0)
              ]),
              s("div", I7, [
                (n(!0), i(W, null, ye(Se.value, (P) => (n(), i("div", {
                  key: P.widget_value,
                  class: "model-item"
                }, [
                  s("div", E7, [
                    s("span", T7, m(P.filename), 1)
                  ]),
                  P.canDownload ? (n(), i(W, { key: 0 }, [
                    d.value.has(P.url) ? (n(), i("span", M7, "Queued")) : (n(), L(Ue, {
                      key: 0,
                      size: "sm",
                      variant: "secondary",
                      onClick: (U) => ke(P)
                    }, {
                      default: h(() => [...pe[11] || (pe[11] = [
                        x(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]))
                  ], 64)) : (n(), i("span", P7, "Manual download required"))
                ]))), 128)),
                ee.value.length >= 5 ? (n(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: pe[2] || (pe[2] = (P) => w.value = "models")
                }, [
                  s("span", null, "Show all " + m(ee.value.length) + " models...", 1),
                  pe[12] || (pe[12] = s("span", { class: "show-all-arrow" }, "→", -1))
                ])) : y("", !0)
              ])
            ])) : y("", !0),
            s("div", R7, [
              $(sa, {
                modelValue: v.value,
                "onUpdate:modelValue": [
                  pe[3] || (pe[3] = (P) => v.value = P),
                  je
                ]
              }, {
                default: h(() => [...pe[13] || (pe[13] = [
                  x(" Don't show this popup ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])
          ])) : y("", !0)
        ]),
        footer: h(() => [
          $(Ue, {
            variant: "secondary",
            onClick: _e
          }, {
            default: h(() => [...pe[14] || (pe[14] = [
              x("Dismiss", -1)
            ])]),
            _: 1
          }),
          be.value ? (n(), L(Ue, {
            key: 0,
            variant: "primary",
            disabled: Ae.value,
            onClick: he
          }, {
            default: h(() => [
              x(m(Ae.value ? "All Done" : "Download All"), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : y("", !0)
        ]),
        _: 1
      }, 8, ["loading", "error"])) : y("", !0),
      w.value ? (n(), L(DP, {
        key: 1,
        title: ge.value,
        items: ve.value,
        "item-type": w.value,
        "queued-items": w.value === "models" ? d.value : c.value,
        "installed-items": w.value === "models" ? void 0 : r.value,
        "failed-items": w.value === "models" ? void 0 : u.value,
        "installing-item": w.value === "models" ? void 0 : f.value,
        onClose: pe[4] || (pe[4] = (P) => w.value = null),
        onAction: T,
        onBulkAction: A
      }, null, 8, ["title", "items", "item-type", "queued-items", "installed-items", "failed-items", "installing-item"])) : y("", !0)
    ], 64));
  }
}), N7 = /* @__PURE__ */ Ie(D7, [["__scopeId", "data-v-4e0ac755"]]), U7 = {
  key: 0,
  class: "io-mapping-root"
}, O7 = { class: "io-mapping-visual-layer" }, A7 = { class: "io-mapping-header" }, z7 = { class: "io-mapping-header-main" }, F7 = { class: "io-mapping-subtitle" }, V7 = {
  key: 0,
  class: "io-mapping-hover-summary"
}, B7 = { class: "io-mapping-header-actions" }, W7 = { class: "io-mapping-sidebar" }, G7 = { class: "io-mapping-sidebar-scroll" }, j7 = {
  key: 0,
  class: "io-state-block"
}, H7 = {
  key: 1,
  class: "io-state-block io-state-error"
}, q7 = { class: "contract-meta-section" }, K7 = { class: "contract-meta-toggle-icon" }, J7 = {
  key: 0,
  class: "contract-meta-body"
}, Q7 = { class: "contract-summary" }, Y7 = { class: "summary-pill" }, X7 = { class: "summary-pill" }, Z7 = { class: "summary-pill" }, eR = { class: "mapping-section" }, tR = { class: "section-header" }, sR = {
  key: 0,
  class: "empty-message"
}, oR = ["onClick"], nR = { class: "item-card-title" }, aR = { class: "item-card-meta" }, lR = { class: "item-card-summary" }, iR = { key: 0 }, rR = { class: "mapping-section" }, cR = { class: "section-header" }, uR = {
  key: 0,
  class: "empty-message"
}, dR = ["onClick"], mR = { class: "item-card-title" }, fR = { class: "item-card-meta" }, vR = { class: "item-card-summary" }, pR = { class: "io-mapping-footer" }, gR = { class: "io-mapping-footer-left" }, hR = { class: "io-mapping-footer-right" }, yR = /* @__PURE__ */ xe({
  __name: "WorkflowIOMappingOverlay",
  props: {
    comfyApp: {}
  },
  setup(e) {
    const t = e, { getWorkflowContract: o, saveWorkflowContract: a, deleteWorkflowContract: l } = ct(), r = k(!1), c = k(""), u = k(!1), d = k(!1), v = k(!1), f = k(null), p = k(null), w = k(null), g = k(!1), _ = k(!1), b = k(null), S = k(null), C = k(0), I = k(null), E = k(null);
    let M = null;
    const N = [
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
    ], V = R(() => {
      var P;
      return ((P = p.value) == null ? void 0 : P.contract_summary.has_contract) === !0;
    }), D = R(() => {
      if (!w.value)
        return { inputs: [], outputs: [] };
      const P = w.value.default_contract || "default";
      return w.value.contracts[P] || (w.value.contracts[P] = { inputs: [], outputs: [] }), w.value.contracts[P];
    }), q = R(() => {
      var U;
      const P = ((U = p.value) == null ? void 0 : U.contract_summary.status) ?? "none";
      return P === "valid" ? "Valid Contract" : P === "incomplete" ? "Incomplete Contract" : "No Contract";
    });
    function ue(P) {
      return P ? JSON.parse(JSON.stringify(P)) : {
        version: 1,
        default_contract: "default",
        contracts: {
          default: { inputs: [], outputs: [] }
        }
      };
    }
    function le(P) {
      return P === "integer" || P === "number";
    }
    function Y(P) {
      return P === "enum";
    }
    function me(P) {
      return P == null ? "" : String(P);
    }
    function ne(P) {
      const U = P.trim();
      if (!U) return;
      const J = Number(U);
      return Number.isFinite(J) ? J : void 0;
    }
    function B(P) {
      return (P || []).join(`
`);
    }
    function H(P) {
      return P.split(/[\n,]/).map((U) => U.trim()).filter(Boolean);
    }
    function we(P) {
      return typeof P == "string" ? P.length > 24 ? `${P.slice(0, 24)}...` : P : String(P);
    }
    function oe(P) {
      return P == null ? "" : String(P);
    }
    function de(P) {
      var J;
      const U = (J = P == null ? void 0 : P.options) == null ? void 0 : J.values;
      return Array.isArray(U) ? U.map((Te) => String(Te)).filter(Boolean) : [];
    }
    function ce(P, U) {
      var Le;
      const J = (Le = P == null ? void 0 : P.options) == null ? void 0 : Le[U];
      if (J == null || J === "") return;
      const Te = Number(J);
      return Number.isFinite(Te) ? Te : void 0;
    }
    function K(P, U) {
      return P.trim().toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "") || U;
    }
    function ee(P) {
      if (!w.value) return;
      const U = P.trim() || "default";
      w.value.default_contract = U, w.value.contracts[U] || (w.value.contracts[U] = { inputs: [], outputs: [] });
    }
    function te(P) {
      const U = String(P ?? "").toLowerCase();
      return U.includes("image") ? "image" : U.includes("video") ? "video" : U.includes("audio") ? "audio" : U.includes("int") ? "integer" : U.includes("float") || U.includes("double") || U.includes("number") ? "number" : U.includes("bool") ? "boolean" : U.includes("combo") || U.includes("enum") ? "enum" : U.includes("string") || U.includes("text") ? "string" : "file";
    }
    function Me(P) {
      D.value.inputs.splice(P, 1), b.value === P && (b.value = null);
    }
    function Se(P) {
      D.value.outputs.splice(P, 1), S.value === P && (S.value = null);
    }
    function ze(P) {
      b.value = b.value === P ? null : P, b.value != null && (S.value = null);
    }
    function Ne(P) {
      S.value = S.value === P ? null : P, S.value != null && (b.value = null);
    }
    function be(P) {
      const U = typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(String(P)) : String(P);
      return document.querySelector(`[data-node-id="${U}"]`);
    }
    function Ae(P) {
      return P instanceof Element ? !!P.closest(".io-mapping-header, .io-mapping-sidebar") : !1;
    }
    function ge(P) {
      var Te, Le, Ke, Pe, Ye, nt;
      if (!(P instanceof Element)) return null;
      const U = P.closest("[data-node-id]"), J = U == null ? void 0 : U.getAttribute("data-node-id");
      return J ? ((Ke = (Le = (Te = t.comfyApp) == null ? void 0 : Te.graph) == null ? void 0 : Le.getNodeById) == null ? void 0 : Ke.call(Le, J)) ?? ((nt = (Ye = (Pe = t.comfyApp) == null ? void 0 : Pe.rootGraph) == null ? void 0 : Ye.getNodeById) == null ? void 0 : nt.call(Ye, J)) ?? null : null;
    }
    function ve(P, U) {
      if (U == null || U < 0) return null;
      const J = be(P);
      return J ? J.querySelectorAll('[data-testid="node-widget"]')[U] ?? null : null;
    }
    function T(P) {
      return !P || P.width <= 0 || P.height <= 0 ? null : {
        left: `${P.left}px`,
        top: `${P.top}px`,
        width: `${P.width}px`,
        height: `${P.height}px`
      };
    }
    function A(P) {
      const U = be((P == null ? void 0 : P.id) ?? "");
      if (U) return U.getBoundingClientRect();
      const J = t.comfyApp;
      if (!P || typeof (J == null ? void 0 : J.canvasPosToClientPos) != "function") return null;
      const Le = J.canvasPosToClientPos([P.pos[0], P.pos[1] - 32]), Ke = J.canvasPosToClientPos([P.pos[0] + P.size[0], P.pos[1] + P.size[1]]);
      return !Le || !Ke ? null : new DOMRect(Le[0], Le[1], Ke[0] - Le[0], Ke[1] - Le[1]);
    }
    function ae(P) {
      var Ye, nt, St, Vt, Ct, Tt, es;
      const U = ve(P.node_id, P.widget_idx);
      if (U) return U.getBoundingClientRect();
      const J = ((St = (nt = (Ye = t.comfyApp) == null ? void 0 : Ye.graph) == null ? void 0 : nt.getNodeById) == null ? void 0 : St.call(nt, String(P.node_id))) ?? ((Tt = (Ct = (Vt = t.comfyApp) == null ? void 0 : Vt.rootGraph) == null ? void 0 : Ct.getNodeById) == null ? void 0 : Tt.call(Ct, String(P.node_id)));
      if (!J || typeof P.widget_idx != "number" || !Array.isArray(J.widgets)) return null;
      const Te = J.widgets[P.widget_idx];
      if (!Te || typeof ((es = t.comfyApp) == null ? void 0 : es.canvasPosToClientPos) != "function") return A(J);
      const Le = 10, Ke = t.comfyApp.canvasPosToClientPos([J.pos[0] + Le, J.pos[1] + (Te.y ?? 0)]), Pe = t.comfyApp.canvasPosToClientPos([J.pos[0] + J.size[0] - Le, J.pos[1] + (Te.y ?? 0) + (Te.computedHeight ?? 24)]);
      return !Ke || !Pe ? A(J) : new DOMRect(Ke[0], Ke[1], Pe[0] - Ke[0], Pe[1] - Ke[1]);
    }
    function Ce(P) {
      var J, Te, Le, Ke, Pe, Ye;
      const U = ((Le = (Te = (J = t.comfyApp) == null ? void 0 : J.graph) == null ? void 0 : Te.getNodeById) == null ? void 0 : Le.call(Te, String(P.node_id))) ?? ((Ye = (Pe = (Ke = t.comfyApp) == null ? void 0 : Ke.rootGraph) == null ? void 0 : Pe.getNodeById) == null ? void 0 : Ye.call(Pe, String(P.node_id)));
      return A(U);
    }
    const Ee = R(() => (C.value, D.value.inputs.map((P, U) => {
      const J = T(ae(P));
      return J ? {
        key: `input-${U}-${P.node_id}-${P.widget_idx ?? "na"}`,
        style: J,
        active: b.value === U
      } : null;
    }).filter((P) => !!P))), ke = R(() => (C.value, D.value.outputs.map((P, U) => {
      const J = T(Ce(P));
      return J ? {
        key: `output-${U}-${P.node_id}-${P.selector ?? "primary"}`,
        style: J,
        active: S.value === U
      } : null;
    }).filter((P) => !!P)));
    function X(P) {
      var St, Vt, Ct, Tt, es, It, Ws, Ms, Gs, js;
      if (Ae(P.target)) return null;
      const U = (St = t.comfyApp) == null ? void 0 : St.canvas;
      if (!U) return null;
      const J = (Vt = U.convertEventToCanvasOffset) == null ? void 0 : Vt.call(U, P);
      if (!J || J.length < 2) return null;
      const [Te, Le] = J, Ke = U.graph || ((Ct = t.comfyApp) == null ? void 0 : Ct.graph) || ((Tt = t.comfyApp) == null ? void 0 : Tt.rootGraph), Pe = ((es = Ke == null ? void 0 : Ke.getNodeOnPos) == null ? void 0 : es.call(Ke, Te, Le, U.visible_nodes)) || ((It = U.getNodeOnPos) == null ? void 0 : It.call(U, Te, Le)) || ge(P.target);
      if (!Pe) return null;
      const Ye = (Ws = Pe.getWidgetOnPos) == null ? void 0 : Ws.call(Pe, Te, Le, !0);
      if (Ye)
        return { kind: "input", node: Pe, widget: Ye, canvasX: Te, canvasY: Le };
      const nt = ((Ms = Pe.getOutputOnPos) == null ? void 0 : Ms.call(Pe, [Te, Le])) || ((js = (Gs = Pe.constructor) == null ? void 0 : Gs.nodeData) != null && js.output_node ? { name: Pe.title || Pe.type || "output", type: "image" } : null);
      return nt ? { kind: "output", node: Pe, output: nt, canvasX: Te, canvasY: Le } : null;
    }
    function G(P, U) {
      var Ye;
      const J = Array.isArray(P.widgets) ? P.widgets.indexOf(U) : -1, Te = D.value.inputs.findIndex(
        (nt) => String(nt.node_id) === String(P.id) && nt.widget_idx === J
      );
      if (Te >= 0) {
        b.value = Te;
        return;
      }
      const Le = typeof ((Ye = U == null ? void 0 : U.options) == null ? void 0 : Ye.property) == "string" ? U.options.property : void 0, Ke = (U == null ? void 0 : U.name) || Le || "input", Pe = {
        name: K(String(Ke), `input_${D.value.inputs.length + 1}`),
        display_name: String((U == null ? void 0 : U.name) || Le || `Input ${D.value.inputs.length + 1}`),
        type: te(U == null ? void 0 : U.type),
        node_id: String(P.id),
        widget_idx: J >= 0 ? J : void 0,
        field_key: Le,
        required: !0,
        default: (U == null ? void 0 : U.value) ?? ""
      };
      le(Pe.type) && (Pe.min = ce(U, "min"), Pe.max = ce(U, "max")), Y(Pe.type) && (Pe.enum_values = de(U)), D.value.inputs.push(Pe), b.value = D.value.inputs.length - 1, S.value = null;
    }
    function fe(P, U) {
      const J = Array.isArray(P.outputs) ? P.outputs.indexOf(U) : -1, Te = J >= 0 ? `slot:${J}` : "primary", Le = D.value.outputs.findIndex(
        (Pe) => String(Pe.node_id) === String(P.id) && (Pe.selector || "primary") === Te
      );
      if (Le >= 0) {
        S.value = Le;
        return;
      }
      const Ke = {
        name: K(String((U == null ? void 0 : U.name) || "output"), `output_${D.value.outputs.length + 1}`),
        display_name: String((U == null ? void 0 : U.name) || `Output ${D.value.outputs.length + 1}`),
        type: te(U == null ? void 0 : U.type),
        node_id: String(P.id),
        selector: Te
      };
      D.value.outputs.push(Ke), S.value = D.value.outputs.length - 1, b.value = null;
    }
    function he(P) {
      var Te, Le, Ke;
      if (!r.value) {
        I.value = null, E.value = null;
        return;
      }
      const U = X(P);
      if (!U) {
        I.value = null, E.value = null;
        return;
      }
      if (U.kind === "input") {
        const Pe = Array.isArray(U.node.widgets) ? U.node.widgets.indexOf(U.widget) : -1, Ye = T(((Te = ve(U.node.id, Pe)) == null ? void 0 : Te.getBoundingClientRect()) ?? ae({
          node_id: String(U.node.id),
          widget_idx: Pe >= 0 ? Pe : void 0
        }));
        if (!Ye) {
          I.value = null, E.value = null;
          return;
        }
        I.value = {
          kind: "input",
          label: `${((Le = U.widget) == null ? void 0 : Le.name) || "widget"} · Node ${U.node.id}`
        }, E.value = { kind: "input", style: Ye };
        return;
      }
      const J = T(A(U.node));
      if (!J) {
        I.value = null, E.value = null;
        return;
      }
      I.value = {
        kind: "output",
        label: `${((Ke = U.output) == null ? void 0 : Ke.name) || U.node.title || U.node.type || "output"} · Node ${U.node.id}`
      }, E.value = { kind: "output", style: J };
    }
    function je(P) {
      var Te, Le, Ke;
      if (!r.value || !w.value || P.button !== 0) return;
      const U = X(P);
      if (!U) return;
      const J = (Te = t.comfyApp) == null ? void 0 : Te.canvas;
      if (J) {
        if (U.kind === "input") {
          P.preventDefault(), P.stopImmediatePropagation(), P.stopPropagation(), Array.isArray(J.graph_mouse) && (J.graph_mouse[0] = U.canvasX, J.graph_mouse[1] = U.canvasY), (Le = J.selectNode) == null || Le.call(J, U.node, !1), G(U.node, U.widget);
          return;
        }
        P.preventDefault(), P.stopImmediatePropagation(), P.stopPropagation(), Array.isArray(J.graph_mouse) && (J.graph_mouse[0] = U.canvasX, J.graph_mouse[1] = U.canvasY), (Ke = J.selectNode) == null || Ke.call(J, U.node, !1), fe(U.node, U.output);
      }
    }
    function We() {
      document.addEventListener("pointerdown", je, !0), document.addEventListener("pointermove", he, !0);
    }
    function _e() {
      document.removeEventListener("pointerdown", je, !0), document.removeEventListener("pointermove", he, !0);
    }
    async function Z() {
      if (c.value) {
        u.value = !0, f.value = null;
        try {
          p.value = await o(c.value), w.value = ue(p.value.execution_contract);
        } catch (P) {
          f.value = P instanceof Error ? P.message : "Failed to load workflow contract";
        } finally {
          u.value = !1;
        }
      }
    }
    async function Fe() {
      if (!(!w.value || !c.value)) {
        d.value = !0, f.value = null;
        try {
          p.value = await a(c.value, w.value), w.value = ue(p.value.execution_contract), window.dispatchEvent(new CustomEvent("comfygit:workflow-contract-saved", {
            detail: { workflowName: c.value }
          })), Oe({ reopenPanel: !0 });
        } catch (P) {
          f.value = P instanceof Error ? P.message : "Failed to save workflow contract";
        } finally {
          d.value = !1;
        }
      }
    }
    async function De() {
      _.value = !0;
    }
    async function He() {
      if (c.value) {
        _.value = !1, v.value = !0, f.value = null;
        try {
          await l(c.value), window.dispatchEvent(new CustomEvent("comfygit:workflow-contract-saved", {
            detail: { workflowName: c.value }
          })), Oe({ reopenPanel: !0 });
        } catch (P) {
          f.value = P instanceof Error ? P.message : "Failed to delete workflow contract";
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
    function Oe(P) {
      r.value = !1, I.value = null, E.value = null, _.value = !1, P != null && P.reopenPanel && Ve();
    }
    async function Qe(P) {
      var Te, Le;
      const J = (Le = (Te = P.detail) == null ? void 0 : Te.workflowName) == null ? void 0 : Le.trim();
      J && (c.value = J, b.value = null, S.value = null, g.value = !1, r.value = !0, await Z());
    }
    function pt(P) {
      if (P.key === "Escape" && r.value) {
        if (_.value) {
          _.value = !1;
          return;
        }
        Oe({ reopenPanel: !0 });
      }
    }
    function Q() {
      if (M != null) return;
      const P = () => {
        if (C.value += 1, !r.value) {
          M = null;
          return;
        }
        M = window.requestAnimationFrame(P);
      };
      M = window.requestAnimationFrame(P);
    }
    function pe() {
      M != null && (window.cancelAnimationFrame(M), M = null);
    }
    return gt(r, (P) => {
      P ? (We(), Q()) : (_e(), pe());
    }), lt(() => {
      window.addEventListener("comfygit:open-io-mapping", Qe), window.addEventListener("keydown", pt);
    }), bn(() => {
      _e(), pe(), window.removeEventListener("comfygit:open-io-mapping", Qe), window.removeEventListener("keydown", pt);
    }), (P, U) => r.value ? (n(), i("div", U7, [
      s("div", O7, [
        (n(!0), i(W, null, ye(Ee.value, (J) => (n(), i("div", {
          key: J.key,
          class: Be(["io-highlight", "io-highlight-input", { active: J.active }]),
          style: Dt(J.style)
        }, null, 6))), 128)),
        (n(!0), i(W, null, ye(ke.value, (J) => (n(), i("div", {
          key: J.key,
          class: Be(["io-highlight", "io-highlight-output", { active: J.active }]),
          style: Dt(J.style)
        }, null, 6))), 128)),
        E.value ? (n(), i("div", {
          key: 0,
          class: Be(["io-highlight", E.value.kind === "input" ? "io-highlight-hover-input" : "io-highlight-hover-output"]),
          style: Dt(E.value.style)
        }, null, 6)) : y("", !0)
      ]),
      s("div", A7, [
        s("div", z7, [
          U[8] || (U[8] = s("div", { class: "io-mapping-title" }, "I/O MAPPING MODE", -1)),
          s("div", F7, m(c.value) + " · Hover any input widget or output target on the graph, then click to add it to the contract. ", 1),
          I.value ? (n(), i("div", V7, " Hovering " + m(I.value.kind) + ": " + m(I.value.label), 1)) : y("", !0)
        ]),
        s("div", B7, [
          $(Ue, {
            size: "sm",
            variant: "secondary",
            onClick: U[0] || (U[0] = (J) => Oe({ reopenPanel: !0 }))
          }, {
            default: h(() => [...U[9] || (U[9] = [
              x(" Exit ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      s("aside", W7, [
        s("div", G7, [
          u.value ? (n(), i("div", j7, " Loading workflow contract... ")) : f.value ? (n(), i("div", H7, m(f.value), 1)) : w.value ? (n(), i(W, { key: 2 }, [
            s("section", q7, [
              s("button", {
                class: "contract-meta-toggle",
                type: "button",
                onClick: U[1] || (U[1] = (J) => g.value = !g.value)
              }, [
                U[10] || (U[10] = s("span", null, "Contract Details", -1)),
                s("span", K7, m(g.value ? "▾" : "▸"), 1)
              ]),
              g.value ? (n(), i("div", J7, [
                $(Ut, { label: "Default Contract" }, {
                  default: h(() => [
                    $(bt, {
                      "model-value": w.value.default_contract,
                      "full-width": "",
                      "onUpdate:modelValue": ee
                    }, null, 8, ["model-value"])
                  ]),
                  _: 1
                }),
                $(Ut, { label: "Display Name" }, {
                  default: h(() => [
                    $(bt, {
                      modelValue: D.value.display_name,
                      "onUpdate:modelValue": U[2] || (U[2] = (J) => D.value.display_name = J),
                      "full-width": ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                $(Ut, { label: "Description" }, {
                  default: h(() => [
                    $(Mo, {
                      modelValue: D.value.description,
                      "onUpdate:modelValue": U[3] || (U[3] = (J) => D.value.description = J),
                      rows: 2,
                      placeholder: "Optional description for this contract"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])) : y("", !0)
            ]),
            s("section", Q7, [
              s("span", Y7, m(q.value), 1),
              s("span", X7, m(D.value.inputs.length) + " input" + m(D.value.inputs.length === 1 ? "" : "s"), 1),
              s("span", Z7, m(D.value.outputs.length) + " output" + m(D.value.outputs.length === 1 ? "" : "s"), 1)
            ]),
            s("section", eR, [
              s("div", tR, [
                $(mo, { variant: "section" }, {
                  default: h(() => [...U[11] || (U[11] = [
                    x("INPUTS", -1)
                  ])]),
                  _: 1
                })
              ]),
              D.value.inputs.length ? y("", !0) : (n(), i("div", sR, " No inputs configured. ")),
              (n(!0), i(W, null, ye(D.value.inputs, (J, Te) => (n(), i("div", {
                key: `input-${Te}`,
                class: Be(["item-card", { selected: b.value === Te }])
              }, [
                s("div", {
                  class: "item-card-header item-card-header-toggle",
                  onClick: (Le) => ze(Te)
                }, [
                  s("div", null, [
                    s("div", nR, m(J.name || `Input ${Te + 1}`), 1),
                    s("div", aR, [
                      x(" Node " + m(J.node_id || "?"), 1),
                      J.widget_idx !== void 0 ? (n(), i(W, { key: 0 }, [
                        x(" · Widget " + m(J.widget_idx), 1)
                      ], 64)) : y("", !0)
                    ]),
                    s("div", lR, [
                      s("span", null, m(J.type || "string"), 1),
                      s("span", null, m(J.required ? "required" : "optional"), 1),
                      J.default !== void 0 && J.default !== "" ? (n(), i("span", iR, "default " + m(we(J.default)), 1)) : y("", !0)
                    ])
                  ]),
                  $(Ue, {
                    size: "sm",
                    variant: "ghost",
                    onClick: vt((Le) => Me(Te), ["stop"])
                  }, {
                    default: h(() => [...U[12] || (U[12] = [
                      x(" Remove ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ], 8, oR),
                b.value === Te ? (n(), i("div", {
                  key: 0,
                  class: "item-grid",
                  onClick: U[4] || (U[4] = vt(() => {
                  }, ["stop"]))
                }, [
                  $(Ut, { label: "Name" }, {
                    default: h(() => [
                      $(bt, {
                        modelValue: J.name,
                        "onUpdate:modelValue": (Le) => J.name = Le,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  $(Ut, { label: "Display Name" }, {
                    default: h(() => [
                      $(bt, {
                        modelValue: J.display_name,
                        "onUpdate:modelValue": (Le) => J.display_name = Le,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  $(Ut, { label: "Type" }, {
                    default: h(() => [
                      $(Wn, {
                        "model-value": J.type,
                        options: N,
                        "full-width": "",
                        "onUpdate:modelValue": (Le) => J.type = Le
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  $(Ut, { label: "Required" }, {
                    default: h(() => [
                      $(Wn, {
                        "model-value": J.required ? "true" : "false",
                        options: F,
                        "full-width": "",
                        "onUpdate:modelValue": (Le) => J.required = Le === "true"
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  $(Ut, {
                    class: Be({ "item-grid-full": J.type === "string" || J.type === "enum" }),
                    label: "Default"
                  }, {
                    default: h(() => [
                      J.type === "string" ? (n(), L(Mo, {
                        key: 0,
                        "model-value": oe(J.default),
                        rows: 3,
                        placeholder: "Default string value",
                        "onUpdate:modelValue": (Le) => J.default = Le
                      }, null, 8, ["model-value", "onUpdate:modelValue"])) : (n(), L(bt, {
                        key: 1,
                        modelValue: J.default,
                        "onUpdate:modelValue": (Le) => J.default = Le,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]))
                    ]),
                    _: 2
                  }, 1032, ["class"]),
                  le(J.type) ? (n(), L(Ut, {
                    key: 0,
                    label: "Min"
                  }, {
                    default: h(() => [
                      $(bt, {
                        "model-value": me(J.min),
                        "full-width": "",
                        "onUpdate:modelValue": (Le) => J.min = ne(Le)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : y("", !0),
                  le(J.type) ? (n(), L(Ut, {
                    key: 1,
                    label: "Max"
                  }, {
                    default: h(() => [
                      $(bt, {
                        "model-value": me(J.max),
                        "full-width": "",
                        "onUpdate:modelValue": (Le) => J.max = ne(Le)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : y("", !0),
                  Y(J.type) ? (n(), L(Ut, {
                    key: 2,
                    class: "item-grid-full",
                    label: "Enum Values"
                  }, {
                    default: h(() => [
                      $(Mo, {
                        "model-value": B(J.enum_values),
                        rows: 4,
                        placeholder: "One or more values, separated by commas or new lines",
                        "onUpdate:modelValue": (Le) => J.enum_values = H(Le)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : y("", !0)
                ])) : y("", !0)
              ], 2))), 128))
            ]),
            s("section", rR, [
              s("div", cR, [
                $(mo, { variant: "section" }, {
                  default: h(() => [...U[13] || (U[13] = [
                    x("OUTPUTS", -1)
                  ])]),
                  _: 1
                })
              ]),
              D.value.outputs.length ? y("", !0) : (n(), i("div", uR, " No outputs configured. ")),
              (n(!0), i(W, null, ye(D.value.outputs, (J, Te) => (n(), i("div", {
                key: `output-${Te}`,
                class: Be(["item-card", { selected: S.value === Te }])
              }, [
                s("div", {
                  class: "item-card-header item-card-header-toggle",
                  onClick: (Le) => Ne(Te)
                }, [
                  s("div", null, [
                    s("div", mR, m(J.name || `Output ${Te + 1}`), 1),
                    s("div", fR, [
                      x(" Node " + m(J.node_id || "?"), 1),
                      J.selector ? (n(), i(W, { key: 0 }, [
                        x(" · " + m(J.selector), 1)
                      ], 64)) : y("", !0)
                    ]),
                    s("div", vR, [
                      s("span", null, m(J.type || "file"), 1)
                    ])
                  ]),
                  $(Ue, {
                    size: "sm",
                    variant: "ghost",
                    onClick: vt((Le) => Se(Te), ["stop"])
                  }, {
                    default: h(() => [...U[14] || (U[14] = [
                      x(" Remove ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ], 8, dR),
                S.value === Te ? (n(), i("div", {
                  key: 0,
                  class: "item-grid",
                  onClick: U[5] || (U[5] = vt(() => {
                  }, ["stop"]))
                }, [
                  $(Ut, { label: "Name" }, {
                    default: h(() => [
                      $(bt, {
                        modelValue: J.name,
                        "onUpdate:modelValue": (Le) => J.name = Le,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  $(Ut, { label: "Display Name" }, {
                    default: h(() => [
                      $(bt, {
                        modelValue: J.display_name,
                        "onUpdate:modelValue": (Le) => J.display_name = Le,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  $(Ut, { label: "Type" }, {
                    default: h(() => [
                      $(Wn, {
                        "model-value": J.type,
                        options: N,
                        "full-width": "",
                        "onUpdate:modelValue": (Le) => J.type = Le
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)
                ])) : y("", !0)
              ], 2))), 128))
            ])
          ], 64)) : y("", !0)
        ]),
        s("div", pR, [
          s("div", gR, [
            $(Ue, {
              variant: "secondary",
              onClick: U[6] || (U[6] = (J) => Oe({ reopenPanel: !0 }))
            }, {
              default: h(() => [...U[15] || (U[15] = [
                x(" Cancel ", -1)
              ])]),
              _: 1
            })
          ]),
          s("div", hR, [
            $(Ue, {
              variant: "danger",
              disabled: !V.value,
              loading: v.value,
              onClick: De
            }, {
              default: h(() => [...U[16] || (U[16] = [
                x(" Delete ", -1)
              ])]),
              _: 1
            }, 8, ["disabled", "loading"]),
            $(Ue, {
              variant: "primary",
              loading: d.value,
              onClick: Fe
            }, {
              default: h(() => [...U[17] || (U[17] = [
                x(" Save ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ])
        ])
      ]),
      _.value ? (n(), L(Tl, {
        key: 0,
        title: "Delete Workflow Contract",
        message: `Delete the contract for ${c.value}?`,
        warning: "This removes the saved input/output contract for this workflow. The workflow itself will not be deleted.",
        "confirm-label": "Delete",
        "cancel-label": "Cancel",
        destructive: !0,
        onConfirm: He,
        onCancel: U[7] || (U[7] = (J) => _.value = !1)
      }, null, 8, ["message"])) : y("", !0)
    ])) : y("", !0);
  }
}), wR = /* @__PURE__ */ Ie(yR, [["__scopeId", "data-v-13515b27"]]), _R = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:transparent}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}[data-comfygit-theme=comfy] .base-tabs{border-bottom-color:var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .base-tabs__tab{border-radius:var(--cg-radius-sm) var(--cg-radius-sm) 0 0}[data-comfygit-theme=comfy] .base-tabs__tab:hover:not(.disabled){background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .base-tabs__tab.active{background:var(--cg-color-accent-muted)}', kR = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .base-tabs{border-bottom-color:var(--cg-color-border)}[data-comfygit-theme=phosphor] .base-tabs__tab{text-shadow:none}[data-comfygit-theme=phosphor] .base-tabs__tab:before{content:""}[data-comfygit-theme=phosphor] .base-tabs__tab.active:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .base-tabs__tab.active{text-shadow:0 0 8px var(--cg-color-accent);border-bottom-color:var(--cg-color-accent);box-shadow:0 2px 8px var(--cg-shadow-accent)}[data-comfygit-theme=phosphor] .base-tabs__tab:hover:not(.disabled):not(.active){color:var(--cg-color-accent);text-shadow:0 0 4px var(--cg-color-accent)}', bR = {
  comfy: _R,
  phosphor: kR
}, Rl = "comfy", Sc = "comfygit-theme";
let lo = null, Ic = Rl;
function $R() {
  try {
    const e = localStorage.getItem(Sc);
    if (e && (e === "comfy" || e === "phosphor"))
      return e;
  } catch {
  }
  return Rl;
}
function Ec(e = Rl) {
  lo && lo.remove(), lo = document.createElement("style"), lo.id = "comfygit-theme-styles", lo.setAttribute("data-theme", e), lo.textContent = bR[e], document.head.appendChild(lo), document.body.setAttribute("data-comfygit-theme", e), Ic = e;
  try {
    localStorage.setItem(Sc, e);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${e}`);
}
function CR() {
  return Ic;
}
function xR(e) {
  Ec(e);
}
function SR(e) {
  var r;
  const { ui_id: t, state: o } = e || {}, a = (o == null ? void 0 : o.history) || {};
  if (!t)
    return null;
  const l = a[t];
  return l && l.result === "error" && ((r = l.status) == null ? void 0 : r.status_str) === "error" ? (l.status.messages || [])[0] || "Unknown error" : null;
}
const Mi = "ComfyGit.DevAutoReload", Tc = "ComfyGit.DevAutoReload.PanelOpen";
function IR() {
  const e = new URLSearchParams(window.location.search).get("comfygitDevReload");
  return e === null ? null : e;
}
function pa() {
  const e = IR();
  if (e !== null) {
    const t = e !== "0" && e !== "false";
    try {
      localStorage.setItem(Mi, t ? "true" : "false");
    } catch {
    }
    return t;
  }
  try {
    return localStorage.getItem(Mi) === "true";
  } catch {
    return !1;
  }
}
function Mc(e) {
  if (pa())
    try {
      sessionStorage.setItem(Tc, e ? "true" : "false");
    } catch {
    }
}
function ER() {
  if (!pa()) return !1;
  try {
    return sessionStorage.getItem(Tc) === "true";
  } catch {
    return !1;
  }
}
async function Pi(e) {
  const t = await fetch(e, { cache: "no-store", method: "HEAD" });
  if (t.ok) {
    const u = t.headers, d = u.get("etag"), v = u.get("last-modified"), f = u.get("content-length");
    if (d || v)
      return [d, v, f].filter(Boolean).join(":");
  }
  const o = await fetch(e, { cache: "no-store", method: "GET" });
  if (!o.ok) return null;
  const a = o.headers, l = [
    a.get("etag"),
    a.get("last-modified"),
    a.get("content-length")
  ].filter(Boolean).join(":"), r = await o.text();
  let c = 0;
  for (let u = 0; u < r.length; u += 1)
    c = (c << 5) - c + r.charCodeAt(u) | 0;
  return `${l}:${r.length}:${c}`;
}
async function TR(e) {
  if (!pa()) return;
  const t = e.map((a) => ({
    ...a,
    signature: null
  }));
  for (const a of t)
    try {
      a.signature = await Pi(a.url);
    } catch (l) {
      console.warn(`[ComfyGit] Dev auto-reload could not read ${a.name}:`, l);
    }
  console.log("[ComfyGit] Dev auto-reload enabled");
  let o = !1;
  window.setInterval(async () => {
    if (!o)
      for (const a of t)
        try {
          const l = await Pi(a.url);
          if (a.signature && l && l !== a.signature) {
            o = !0, console.log(`[ComfyGit] ${a.name} changed, reloading page...`), window.setTimeout(() => window.location.reload(), 500);
            return;
          }
          l && (a.signature = l);
        } catch {
        }
  }, 1e3);
}
const MR = "./comfygit-panel.css", PR = "./comfygit-panel.js", Pc = new URL(MR, import.meta.url).href, RR = new URL(PR, import.meta.url).href, Ll = document.createElement("link");
Ll.rel = "stylesheet";
Ll.href = Pc;
document.head.appendChild(Ll);
const LR = $R();
Ec(LR);
pa() || (sessionStorage.removeItem("ComfyGit.LastView"), sessionStorage.removeItem("ComfyGit.LastSection"));
window.ComfyGit = {
  setTheme: (e) => {
    console.log(`[ComfyGit] Switching to theme: ${e}`), xR(e);
  },
  getTheme: () => {
    const e = CR();
    return console.log(`[ComfyGit] Current theme: ${e}`), e;
  }
};
window.ComfyGitDev = {
  ...window.ComfyGitDev ?? {},
  async exportCurrentApiPrompt() {
    const e = $s;
    if (typeof e.graphToPrompt != "function")
      throw new Error("ComfyUI graphToPrompt is not available");
    return e.graphToPrompt(e.rootGraph);
  },
  async exportApiPromptForWorkflow(e) {
    const t = $s;
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
let Ss = null, un = null, ss = null, dn = null, qo = null, Ri = null, Ko = null, Li = null, Jo = null, Di = null;
const Po = k(null);
let wn = "no_workspace", Rc = !1;
async function Zo() {
  const e = Ao();
  if (!e) return null;
  try {
    const t = await e.fetchApi("/v2/comfygit/status");
    t.ok && (Po.value = await t.json());
  } catch {
  }
}
async function nl() {
  const e = Ao();
  if (e)
    try {
      const t = await e.fetchApi("/v2/setup/status");
      if (t.ok) {
        const o = await t.json();
        wn = o.state, Rc = o.has_comfyui_manager ?? !1;
      }
    } catch {
    }
}
function al() {
  var t;
  if (wn === "managed" || !Rc) return;
  const e = document.querySelectorAll("button.comfyui-button");
  for (const o of e)
    if (((t = o.textContent) == null ? void 0 : t.trim()) === "Manager" && !o.querySelector("svg, i, img")) {
      o.style.display = "none", console.log("[ComfyGit] Hiding built-in Manager button (ComfyUI-Manager present)");
      return;
    }
}
function DR() {
  if (!Po.value) return !1;
  const e = Po.value.workflows;
  return e.new.length > 0 || e.modified.length > 0 || e.deleted.length > 0 || Po.value.has_changes;
}
function Qo(e) {
  en(), Mc(!0), Ss = document.createElement("div"), Ss.className = "comfygit-panel-overlay";
  const t = document.createElement("div");
  t.className = "comfygit-panel-container", Ss.appendChild(t), Ss.addEventListener("click", (a) => {
    a.target === Ss && en();
  });
  const o = (a) => {
    a.key === "Escape" && (en(), document.removeEventListener("keydown", o));
  };
  document.addEventListener("keydown", o), un = Cn({
    render: () => Oo(SM, {
      initialView: e,
      onClose: en,
      onStatusUpdate: async (a) => {
        Po.value = a, $o(), await nl(), Gn(), al();
      }
    })
  }), un.mount(t), document.body.appendChild(Ss);
}
function en() {
  Mc(!1), un && (un.unmount(), un = null), Ss && (Ss.remove(), Ss = null);
}
function Ni(e) {
  Yo(), ss = document.createElement("div"), ss.className = "comfygit-commit-popover-container";
  const t = e.getBoundingClientRect();
  ss.style.position = "fixed", ss.style.top = `${t.bottom + 8}px`, ss.style.right = `${window.innerWidth - t.right}px`, ss.style.zIndex = "10001";
  const o = (l) => {
    ss && !ss.contains(l.target) && l.target !== e && (Yo(), document.removeEventListener("mousedown", o));
  };
  setTimeout(() => document.addEventListener("mousedown", o), 0);
  const a = (l) => {
    l.key === "Escape" && (Yo(), document.removeEventListener("keydown", a));
  };
  document.addEventListener("keydown", a), dn = Cn({
    render: () => Oo(bc, {
      status: Po.value,
      onClose: Yo,
      onCommitted: (l) => {
        Yo(), NR(l.success, l.message), Zo().then($o);
      }
    })
  }), dn.mount(ss), document.body.appendChild(ss);
}
function Yo() {
  dn && (dn.unmount(), dn = null), ss && (ss.remove(), ss = null);
}
function NR(e, t) {
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
  r.textContent = t, o.appendChild(r), document.body.appendChild(o), setTimeout(() => {
    o.style.opacity = "0", o.style.transition = "opacity 0.2s ease", setTimeout(() => o.remove(), 200);
  }, 3e3);
}
function UR() {
  qo || (qo = document.createElement("div"), qo.className = "comfygit-download-queue-root", Ri = Cn({
    render: () => Oo(_P)
  }), Ri.mount(qo), document.body.appendChild(qo), console.log("[ComfyGit] Model download queue mounted"));
}
function OR() {
  Ko || (Ko = document.createElement("div"), Ko.className = "comfygit-missing-resources-root", Li = Cn({
    render: () => Oo(N7)
  }), Li.mount(Ko), document.body.appendChild(Ko), console.log("[ComfyGit] Missing resources popup mounted"));
}
function AR() {
  Jo || (Jo = document.createElement("div"), Jo.className = "comfygit-io-mapping-root", Di = Cn({
    render: () => Oo(wR, {
      comfyApp: $s
    })
  }), Di.mount(Jo), document.body.appendChild(Jo), console.log("[ComfyGit] Workflow I/O mapping overlay mounted"));
}
let Jt = null;
function $o() {
  if (!Jt) return;
  const e = Jt.querySelector(".commit-indicator");
  e && (e.style.display = DR() ? "block" : "none");
}
function Gn() {
  if (!Jt) return;
  const e = wn !== "managed";
  Jt.disabled = e, Jt.title = e ? "Commit disabled - switch to a managed environment first" : "Quick Commit";
}
const Lc = document.createElement("style");
Lc.textContent = `
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
document.head.appendChild(Lc);
$s.registerExtension({
  name: "Comfy.ComfyGitPanel",
  // Commands that can be triggered by keybindings or menu items
  commands: [
    {
      id: "ComfyGit.OpenPanel",
      label: "Open ComfyGit Panel",
      icon: "pi pi-folder-open",
      function: () => Qo()
    },
    {
      id: "ComfyGit.QuickCommit",
      label: "Quick Commit",
      icon: "pi pi-check",
      function: () => {
        Jt && !Jt.disabled && Ni(Jt);
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
    if (wn === "managed")
      try {
        await Promise.all([
          $s.ui.settings.setSettingValueAsync("Comfy.Workflow.ShowMissingModelsWarning", !1),
          $s.ui.settings.setSettingValueAsync("Comfy.Workflow.ShowMissingNodesWarning", !1)
        ]);
      } catch (o) {
        console.warn("[ComfyGit] Failed to disable built-in warnings:", o);
      }
    window.__comfygit_pending_workflow = e;
  },
  async afterConfigureGraph(e) {
    if (wn !== "managed") return;
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
    t.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", t.textContent = "ComfyGit", t.title = "ComfyGit Control Panel", t.onclick = () => Qo(), Jt = document.createElement("button"), Jt.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", Jt.innerHTML = 'Commit <span class="commit-indicator"></span>', Jt.title = "Quick Commit", Jt.onclick = () => Ni(Jt), e.appendChild(t), e.appendChild(Jt), (r = (l = $s.menu) == null ? void 0 : l.settingsGroup) != null && r.element && ($s.menu.settingsGroup.element.before(e), console.log("[ComfyGit] Control Panel buttons added to toolbar")), UR(), OR(), AR(), window.addEventListener("comfygit:open-panel", ((c) => {
      var d;
      const u = (d = c.detail) == null ? void 0 : d.initialView;
      Qo(u);
    })), window.addEventListener("comfygit:close-panel", (() => {
      en();
    })), window.addEventListener("comfygit:status-refresh", (async () => {
      await Zo(), $o(), Gn();
    }));
    const { loadPendingDownloads: o } = zo();
    o(), await Promise.all([Zo(), nl()]), $o(), Gn(), al(), ER() && setTimeout(() => {
      Ss || Qo();
    }, 100), TR([
      { name: "panel script", url: RR },
      { name: "panel stylesheet", url: Pc }
    ]), setTimeout(al, 100), setInterval(async () => {
      await Promise.all([Zo(), nl()]), $o(), Gn();
    }, 3e4);
    const a = Ao();
    if (a) {
      let c = function() {
        localStorage.removeItem("workflow"), localStorage.removeItem("Comfy.PreviousWorkflow"), localStorage.removeItem("Comfy.OpenWorkflowsPaths"), localStorage.removeItem("Comfy.ActiveWorkflowIndex"), Object.keys(sessionStorage).forEach((p) => {
          (p.startsWith("workflow:") || p.startsWith("Comfy.OpenWorkflowsPaths:") || p.startsWith("Comfy.ActiveWorkflowIndex:")) && sessionStorage.removeItem(p);
        }), window.location.reload();
      }, u = function() {
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
        `, g.onmouseover = () => g.style.background = "var(--comfy-input-bg)", g.onmouseout = () => g.style.background = "var(--comfy-menu-bg)", g.onclick = () => c(), p.appendChild(g);
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
        const b = document.createElement("div");
        b.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 4px;";
        const S = document.createElement("div");
        S.textContent = "Node installation failed", S.style.cssText = "font-weight: 600; color: #e53935;", b.appendChild(S);
        const C = document.createElement("div");
        C.textContent = "Dependency conflict detected", C.style.cssText = "font-size: 12px; opacity: 0.8;", b.appendChild(C), g.appendChild(b);
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
          g.remove(), Qo("debug-env");
        }, g.appendChild(I);
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
        `, E.onmouseover = () => E.style.opacity = "1", E.onmouseout = () => E.style.opacity = "0.6", E.onclick = () => g.remove(), g.appendChild(E), document.body.appendChild(g), console.log("[ComfyGit] Manager error toast displayed:", p), setTimeout(() => {
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
        const b = document.createElement("div");
        b.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 2px;";
        const S = document.createElement("div");
        S.textContent = "To apply changes, please restart ComfyUI", S.style.cssText = "font-weight: 500; color: #fff;", b.appendChild(S);
        const C = document.createElement("div");
        C.textContent = `${p} node package${p > 1 ? "s" : ""} ready to install`, C.style.cssText = "font-size: 12px; opacity: 0.7;", b.appendChild(C), g.appendChild(b);
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
          I.disabled = !0, I.textContent = "Restarting...", I.style.opacity = "0.7", S.textContent = "Restarting...", C.textContent = "Applying changes, please wait...";
          try {
            const M = async () => {
              console.log("[ComfyGit] Reconnected after restart, refreshing node definitions...");
              try {
                $s.refreshComboInNodes && (await $s.refreshComboInNodes(), console.log("[ComfyGit] Node definitions refreshed successfully")), _.textContent = "✅", S.textContent = "Nodes Installed", S.style.color = "#4caf50", C.textContent = `${p} package${p > 1 ? "s" : ""} installed successfully!`, g.style.borderColor = "#4caf50", I.style.display = "none", setTimeout(() => {
                  g.remove();
                }, 3e3);
              } catch (N) {
                console.error("[ComfyGit] Failed to refresh nodes:", N), _.textContent = "✅", S.textContent = "Restart Complete", S.style.color = "#4caf50", C.textContent = "Refresh the page to load new nodes.", g.style.borderColor = "#4caf50", I.style.display = "none";
              }
            };
            a.addEventListener("reconnected", M, { once: !0 }), await fetch("/v2/manager/reboot");
          } catch (M) {
            console.error("[ComfyGit] Failed to restart:", M), S.textContent = "Restart Failed", S.style.color = "#e53935", C.textContent = "Could not restart server. Try again.", g.style.borderColor = "#e53935", I.textContent = "Try Again", I.disabled = !1, I.style.opacity = "1";
          }
        }, g.appendChild(I);
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
        `, E.onmouseover = () => E.style.opacity = "1", E.onmouseout = () => E.style.opacity = "0.6", E.onclick = () => g.remove(), g.appendChild(E), document.body.appendChild(g), console.log(`[ComfyGit] Restart required notification displayed (${p} packages installed)`);
      };
      a.addEventListener("comfygit:workflow-changed", async (p) => {
        const { change_type: w, workflow_name: g } = p.detail;
        console.log(`[ComfyGit] Workflow ${w}: ${g}`), await Zo(), $o();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let f = !1;
      a.addEventListener("status", async (p) => {
        const w = p.detail != null;
        w && !f && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") !== "false" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), c()) : u()), f = w;
      }), console.log("[ComfyGit] Refresh notification system initialized"), a.addEventListener("cm-task-completed", (p) => {
        const w = SR(p.detail);
        w && d(w);
      }), console.log("[ComfyGit] Manager error notification system initialized"), window.addEventListener("comfygit:nodes-installed", (p) => {
        const w = p, { count: g = 1 } = w.detail || {};
        v(g);
      }), console.log("[ComfyGit] Restart notification system initialized");
    }
  }
});
